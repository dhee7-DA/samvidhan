import React, { useState, useEffect } from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  BookOpen,
  RotateCcw,
  Trash2,
  Award,
  Filter,
  Search,
  ArrowRight,
  Sparkles,
  ExternalLink,
  HelpCircle,
  Clock,
  BrainCircuit
} from 'lucide-react';
import {
  getStoredMistakes,
  saveMistakes,
  deleteMistake,
  clearAllMistakes,
  recordSuccess,
  recordMistake,
  type MistakeEntry
} from '../../services/mistakesService';
import { useTheme } from '../../context/ThemeContext';
import { syncMistakesToFlashcards } from '../../services/flashcardService';

interface MistakesNotebookViewProps {
  onNavigateToBootcampDay?: (dayNumber: number) => void;
}

export const MistakesNotebookView: React.FC<MistakesNotebookViewProps> = ({
  onNavigateToBootcampDay,
}) => {
  const { launchFlashcardDeck } = useTheme();
  const [mistakes, setMistakes] = useState<MistakeEntry[]>([]);
  const [filterDay, setFilterDay] = useState<number | 'all'>('all');
  const [filterStatus, setFilterStatus] = useState<'all' | 'unmastered' | 'mastered'>('unmastered');
  const [searchQuery, setSearchQuery] = useState('');
  const [drillMode, setDrillMode] = useState(false);
  const [drillIndex, setDrillIndex] = useState(0);
  const [drillAnswer, setDrillAnswer] = useState<number | null>(null);
  const [drillShowExplanation, setDrillShowExplanation] = useState(false);

  const loadData = () => {
    setMistakes(getStoredMistakes());
  };

  useEffect(() => {
    loadData();
  }, []);

  // Filtered entries
  const filteredMistakes = mistakes.filter((m) => {
    if (filterDay !== 'all' && m.dayNumber !== filterDay) return false;
    if (filterStatus === 'unmastered' && m.mastered) return false;
    if (filterStatus === 'mastered' && !m.mastered) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchQ = m.question.toLowerCase().includes(q);
      const matchExp = m.explanation.toLowerCase().includes(q);
      const matchDay = m.dayTitle.toLowerCase().includes(q);
      if (!matchQ && !matchExp && !matchDay) return false;
    }
    return true;
  });

  const totalErrors = mistakes.length;
  const unmasteredCount = mistakes.filter((m) => !m.mastered).length;
  const masteredCount = mistakes.filter((m) => m.mastered).length;
  const masteryPercentage = totalErrors > 0 ? Math.round((masteredCount / totalErrors) * 100) : 0;

  // Re-attempt drill items
  const drillItems = filteredMistakes.filter((m) => !m.mastered);
  const currentDrillItem = drillItems[drillIndex] || null;

  const handleStartDrill = () => {
    if (drillItems.length === 0) return;
    setDrillIndex(0);
    setDrillAnswer(null);
    setDrillShowExplanation(false);
    setDrillMode(true);
  };

  const handleDrillOptionSelect = (optIdx: number) => {
    if (drillAnswer !== null) return;
    setDrillAnswer(optIdx);
    setDrillShowExplanation(true);
    if (currentDrillItem) {
      if (optIdx === currentDrillItem.correctAnswer) {
        recordSuccess(currentDrillItem.id);
        loadData();
      } else {
        recordMistake({
          id: currentDrillItem.id,
          questionId: currentDrillItem.questionId,
          dayNumber: currentDrillItem.dayNumber,
          dayTitle: currentDrillItem.dayTitle,
          round: currentDrillItem.round,
          question: currentDrillItem.question,
          options: currentDrillItem.options,
          correctAnswer: currentDrillItem.correctAnswer,
          userAnswer: optIdx,
          explanation: currentDrillItem.explanation,
          statutoryAnchor: currentDrillItem.statutoryAnchor,
        });
        loadData();
      }
    }
  };

  const handleNextDrill = () => {
    if (drillIndex < drillItems.length - 1) {
      setDrillIndex((prev) => prev + 1);
      setDrillAnswer(null);
      setDrillShowExplanation(false);
    } else {
      setDrillMode(false);
    }
  };

  const handleToggleMastered = (id: string, currentVal: boolean) => {
    const updated = mistakes.map((m) => (m.id === id ? { ...m, mastered: !currentVal } : m));
    saveMistakes(updated);
    setMistakes(updated);
  };

  const handleDeleteItem = (id: string) => {
    deleteMistake(id);
    loadData();
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear your entire error bank?')) {
      clearAllMistakes();
      loadData();
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 py-6">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-rose-900/30 via-amber-900/20 to-indigo-900/20 border border-rose-500/30 shadow-lg backdrop-blur-md">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Smart Diagnostic & Mistakes Bank</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
              Constitutional Error Notebook
            </h1>
            <p className="text-sm text-muted-foreground mt-1 max-w-2xl">
              Every incorrect answer from your practice drills, 15-day bootcamp rounds, and timed mocks is automatically captured here. Review statutory rationales and drill until 100% mastered.
            </p>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            {unmasteredCount > 0 && !drillMode && (
              <>
                <button
                  onClick={handleStartDrill}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-indigo-600 hover:from-rose-500 hover:to-indigo-500 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Drill Mistakes ({unmasteredCount})</span>
                </button>
                <button
                  onClick={() => {
                    syncMistakesToFlashcards();
                    launchFlashcardDeck('mistakes', 'all');
                  }}
                  className="px-4 py-2.5 rounded-xl bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)] font-mono font-bold text-xs shadow-sm transition-all flex items-center gap-1.5"
                >
                  <BrainCircuit className="w-4 h-4" />
                  <span>Drill in SRS Flashcards</span>
                </button>
              </>
            )}
            {totalErrors > 0 && (
              <button
                onClick={handleClearAll}
                className="p-2.5 rounded-xl border border-border/60 hover:bg-rose-500/10 text-muted-foreground hover:text-rose-400 transition-colors"
                title="Clear Error Bank"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 pt-5 border-t border-border/40">
          <div className="p-3.5 rounded-xl bg-card/60 border border-border/40">
            <span className="text-xs text-muted-foreground font-medium block">Total Errors Logged</span>
            <span className="text-2xl font-black text-foreground mt-0.5 block">{totalErrors}</span>
          </div>
          <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20">
            <span className="text-xs text-rose-400 font-medium block">Needs Mastery</span>
            <span className="text-2xl font-black text-rose-400 mt-0.5 block">{unmasteredCount}</span>
          </div>
          <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
            <span className="text-xs text-emerald-400 font-medium block">Mastered & Overcome</span>
            <span className="text-2xl font-black text-emerald-400 mt-0.5 block">{masteredCount}</span>
          </div>
          <div className="p-3.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
            <span className="text-xs text-indigo-400 font-medium block">Recovery Rate</span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-2xl font-black text-indigo-400">{masteryPercentage}%</span>
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-500 rounded-full transition-all duration-500"
                  style={{ width: `${masteryPercentage}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Drill Mode View */}
      {drillMode && currentDrillItem ? (
        <div className="p-6 rounded-2xl bg-card border border-border shadow-xl space-y-5 animate-in fade-in">
          <div className="flex items-center justify-between border-b border-border/60 pb-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-rose-500/20 text-rose-300 text-xs font-bold">
                DRILL {drillIndex + 1} of {drillItems.length}
              </span>
              <span className="text-xs text-muted-foreground font-mono">
                Day {currentDrillItem.dayNumber} · Round {currentDrillItem.round}
              </span>
            </div>
            <button
              onClick={() => setDrillMode(false)}
              className="text-xs font-semibold text-muted-foreground hover:text-foreground"
            >
              Exit Drill Mode
            </button>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-semibold text-indigo-400">
              {currentDrillItem.dayTitle}
            </span>
            <h3 className="text-base md:text-lg font-bold text-foreground leading-relaxed">
              {currentDrillItem.question}
            </h3>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 gap-2.5 pt-2">
            {currentDrillItem.options.map((opt, oIdx) => {
              let optStyle = 'border-border/60 hover:border-indigo-500/50 bg-card/60';
              if (drillAnswer !== null) {
                if (oIdx === currentDrillItem.correctAnswer) {
                  optStyle = 'border-emerald-500 bg-emerald-500/20 text-emerald-200 font-bold';
                } else if (oIdx === drillAnswer) {
                  optStyle = 'border-rose-500 bg-rose-500/20 text-rose-300 line-through';
                } else {
                  optStyle = 'border-border/40 opacity-50';
                }
              }

              return (
                <button
                  key={oIdx}
                  onClick={() => handleDrillOptionSelect(oIdx)}
                  disabled={drillAnswer !== null}
                  className={`p-3.5 rounded-xl border text-left text-sm transition-all flex items-start gap-3 ${optStyle}`}
                >
                  <span className="font-bold text-xs shrink-0 mt-0.5">
                    {String.fromCharCode(65 + oIdx)}.
                  </span>
                  <span className="leading-snug">{opt}</span>
                </button>
              );
            })}
          </div>

          {/* Explanation Banner */}
          {drillShowExplanation && (
            <div className="p-4 rounded-xl bg-muted/40 border border-border/80 space-y-3 mt-4">
              <div className="flex items-center gap-2">
                {drillAnswer === currentDrillItem.correctAnswer ? (
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" /> Correct! Mistake overcome.
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-400">
                    <AlertTriangle className="w-4 h-4" /> Missed again. Review statutory anchor below.
                  </span>
                )}
              </div>
              <p className="text-xs md:text-sm text-foreground/90 leading-relaxed font-mono">
                {currentDrillItem.explanation}
              </p>
              {currentDrillItem.statutoryAnchor && (
                <div className="text-xs text-indigo-400 font-semibold">
                  Statutory Anchor: {currentDrillItem.statutoryAnchor}
                </div>
              )}
              <div className="flex justify-end pt-2">
                <button
                  onClick={handleNextDrill}
                  className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1.5"
                >
                  <span>{drillIndex < drillItems.length - 1 ? 'Next Question' : 'Complete Drill'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      ) : null}

      {/* Filter and Search Bar */}
      {!drillMode && (
        <div className="p-4 rounded-xl bg-card border border-border flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-muted-foreground flex items-center gap-1 mr-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>

            {/* Status Filter */}
            <div className="inline-flex rounded-lg border border-border/60 bg-muted/30 p-0.5 text-xs">
              <button
                onClick={() => setFilterStatus('unmastered')}
                className={`px-3 py-1 rounded-md font-medium transition-colors ${
                  filterStatus === 'unmastered' ? 'bg-rose-500/20 text-rose-300 font-bold' : 'text-muted-foreground'
                }`}
              >
                Unmastered ({unmasteredCount})
              </button>
              <button
                onClick={() => setFilterStatus('mastered')}
                className={`px-3 py-1 rounded-md font-medium transition-colors ${
                  filterStatus === 'mastered' ? 'bg-emerald-500/20 text-emerald-300 font-bold' : 'text-muted-foreground'
                }`}
              >
                Mastered ({masteredCount})
              </button>
              <button
                onClick={() => setFilterStatus('all')}
                className={`px-3 py-1 rounded-md font-medium transition-colors ${
                  filterStatus === 'all' ? 'bg-card text-foreground font-bold shadow-sm' : 'text-muted-foreground'
                }`}
              >
                All ({totalErrors})
              </button>
            </div>

            {/* Day Filter */}
            <select
              value={filterDay}
              onChange={(e) => setFilterDay(e.target.value === 'all' ? 'all' : parseInt(e.target.value, 10))}
              className="text-xs px-2.5 py-1.5 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option value="all">All 15 Days</option>
              {Array.from({ length: 15 }, (_, i) => i + 1).map((d) => (
                <option key={d} value={d}>
                  Day {d}
                </option>
              ))}
            </select>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[200px] flex-1 md:flex-initial">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search doctrine, question, or term..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs pl-8 pr-3 py-1.5 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
        </div>
      )}

      {/* Mistakes List */}
      {!drillMode && (
        <div className="space-y-4">
          {filteredMistakes.length === 0 ? (
            <div className="p-12 text-center rounded-2xl border border-dashed border-border/80 bg-card/40 space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-foreground">
                {totalErrors === 0
                  ? 'Your Error Bank is Clean!'
                  : 'No mistakes matching your current filter'}
              </h3>
              <p className="text-xs text-muted-foreground max-w-md mx-auto">
                {totalErrors === 0
                  ? 'Any question answered incorrectly in the 15-day bootcamp or timed mocks will be logged here for targeted mastery.'
                  : 'Try selecting a different status or clear the search query to view other entries.'}
              </p>
            </div>
          ) : (
            filteredMistakes.map((entry, idx) => {
              const isMastered = entry.mastered;
              return (
                <div
                  key={entry.id || idx}
                  className={`p-5 rounded-xl border transition-all ${
                    isMastered
                      ? 'border-emerald-500/30 bg-emerald-950/10'
                      : 'border-border/80 bg-card hover:border-border'
                  }`}
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 border-b border-border/40 pb-3 mb-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        Day {entry.dayNumber} · Round {entry.round}
                      </span>
                      <span className="text-xs font-semibold text-foreground/80">
                        {entry.dayTitle}
                      </span>
                      {entry.attemptCount > 1 && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 font-mono">
                          Missed {entry.attemptCount}x
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleToggleMastered(entry.id, isMastered)}
                        className={`text-xs px-2.5 py-1 rounded-md font-semibold flex items-center gap-1.5 transition-colors ${
                          isMastered
                            ? 'bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30'
                            : 'bg-muted/40 text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{isMastered ? 'Mastered' : 'Mark Mastered'}</span>
                      </button>

                      {onNavigateToBootcampDay && (
                        <button
                          onClick={() => onNavigateToBootcampDay(entry.dayNumber)}
                          className="text-xs p-1 rounded hover:bg-muted text-muted-foreground hover:text-indigo-400 transition-colors"
                          title="Jump to Bootcamp Day"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                      )}

                      <button
                        onClick={() => handleDeleteItem(entry.id)}
                        className="text-xs p-1 rounded hover:bg-rose-500/10 text-muted-foreground hover:text-rose-400 transition-colors"
                        title="Remove from Error Bank"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Question */}
                  <h4 className="text-sm md:text-base font-bold text-foreground leading-snug mb-3">
                    {entry.question}
                  </h4>

                  {/* Options Comparison */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                    {entry.options.map((opt, oIdx) => {
                      const isCorrect = oIdx === entry.correctAnswer;
                      const isUserAnswer = oIdx === entry.userAnswer;

                      let badgeClass = 'border-border/40 bg-muted/20 text-muted-foreground';
                      if (isCorrect) {
                        badgeClass = 'border-emerald-500/50 bg-emerald-500/10 text-emerald-300 font-semibold';
                      } else if (isUserAnswer) {
                        badgeClass = 'border-rose-500/50 bg-rose-500/10 text-rose-300 line-through';
                      }

                      return (
                        <div
                          key={oIdx}
                          className={`p-2.5 rounded-lg border text-xs flex items-start gap-2 ${badgeClass}`}
                        >
                          <span className="font-bold shrink-0">{String.fromCharCode(65 + oIdx)}.</span>
                          <span className="leading-tight">{opt}</span>
                          {isCorrect && (
                            <span className="ml-auto text-[10px] uppercase font-bold text-emerald-400">
                              Correct
                            </span>
                          )}
                          {isUserAnswer && !isCorrect && (
                            <span className="ml-auto text-[10px] uppercase font-bold text-rose-400">
                              Your Pick
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Statutory Analysis */}
                  <div className="p-3 rounded-lg bg-muted/30 border border-border/40 text-xs text-foreground/80 leading-relaxed font-mono">
                    <span className="font-bold text-indigo-400 mr-1.5 font-sans">
                      Statutory Rationale:
                    </span>
                    {entry.explanation}
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};
