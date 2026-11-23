import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Sparkles,
  HelpCircle,
  Trophy,
  RotateCcw,
  Volume2,
  VolumeX,
  Search,
  CheckCircle2,
  XCircle,
  ArrowUp,
  ArrowDown,
  Lock,
  Unlock,
  BookOpen,
  Share2,
  Flame,
  Award,
  Calendar,
  Shuffle,
  Scale,
  Target
} from 'lucide-react';
import {
  CONSTITUTIONAL_ARTICLES_POOL,
  getDailyMysteryArticle,
  getRandomMysteryArticle,
  evaluateGuess,
  type ConstitutionalArticleItem,
  type GuessEvaluation
} from '../../../data/lexSamvidhanData';
import { arcadeAudio } from '../../../services/arcadeAudioService';
import { recordMysteryGameResult } from '../../../services/judicialCareerService';

interface LexSamvidhanMysteryGameProps {
  onAwardResult: (gainedXP: number, leveledUp: boolean, newBadges: string[]) => void;
}

export const LexSamvidhanMysteryGame: React.FC<LexSamvidhanMysteryGameProps> = ({
  onAwardResult
}) => {
  const [gameMode, setGameMode] = useState<'daily' | 'practice'>('daily');
  const [targetArticle, setTargetArticle] = useState<ConstitutionalArticleItem>(() =>
    getDailyMysteryArticle()
  );
  const [evaluations, setEvaluations] = useState<GuessEvaluation[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [isVictory, setIsVictory] = useState<boolean>(false);
  const [copiedShare, setCopiedShare] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(arcadeAudio.isMuted());

  const searchInputRef = useRef<HTMLInputElement>(null);

  const maxAttempts = 6;
  const attemptsLeft = maxAttempts - evaluations.length;

  const toggleMute = () => {
    arcadeAudio.setMuted(!isMuted);
    setIsMuted(!isMuted);
  };

  // Start new game in selected mode
  const startNewGame = (mode: 'daily' | 'practice') => {
    setGameMode(mode);
    setTargetArticle(mode === 'daily' ? getDailyMysteryArticle() : getRandomMysteryArticle());
    setEvaluations([]);
    setSearchQuery('');
    setIsDropdownOpen(false);
    setIsGameOver(false);
    setIsVictory(false);
    setCopiedShare(false);
    arcadeAudio.playGavel();
  };

  // Search filtered articles
  const availableArticles = useMemo(() => {
    const guessedNumbers = evaluations.map((e) => e.guessArticle.articleNumber);
    return CONSTITUTIONAL_ARTICLES_POOL.filter(
      (a) =>
        !guessedNumbers.includes(a.articleNumber) &&
        (a.articleLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
          a.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          a.leadPrecedent.toLowerCase().includes(searchQuery.toLowerCase()) ||
          a.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase())))
    );
  }, [searchQuery, evaluations]);

  const handleSelectArticle = (article: ConstitutionalArticleItem) => {
    if (isGameOver || evaluations.length >= maxAttempts) return;

    const evaluation = evaluateGuess(article, targetArticle);
    const newEvaluations = [...evaluations, evaluation];
    setEvaluations(newEvaluations);
    setSearchQuery('');
    setIsDropdownOpen(false);

    if (evaluation.isVictory) {
      setIsGameOver(true);
      setIsVictory(true);
      arcadeAudio.playFanfare();
      const result = recordMysteryGameResult(newEvaluations.length, true);
      onAwardResult(
        result.gainedXP,
        result.leveledUp,
        result.newBadges.map((b) => b.title)
      );
    } else if (newEvaluations.length >= maxAttempts) {
      setIsGameOver(true);
      setIsVictory(false);
      arcadeAudio.playWrong();
      const result = recordMysteryGameResult(maxAttempts, false);
      onAwardResult(
        result.gainedXP,
        result.leveledUp,
        result.newBadges.map((b) => b.title)
      );
    } else {
      arcadeAudio.playStamp();
    }
  };

  // Generate shareable emoji grid
  const generateShareText = () => {
    const title = `🎯 LexSamvidhan ${
      gameMode === 'daily' ? 'Daily Mystery' : 'Practice'
    } ${isVictory ? `${evaluations.length}/${maxAttempts}` : 'X/6'}\n`;

    const grid = evaluations
      .map((ev) => {
        const num = ev.numberMatch === 'CORRECT' ? '🟩' : ev.numberMatch === 'HIGHER' ? '⬆️' : '⬇️';
        const prt = ev.partMatch === 'EXACT' ? '🟩' : ev.partMatch === 'NEAR' ? '🟨' : '⬛';
        const cat = ev.categoryMatch === 'EXACT' ? '🟩' : '⬛';
        const jst = ev.justiciabilityMatch === 'EXACT' ? '🟩' : '⬛';
        const prc = ev.leadPrecedentMatch === 'EXACT' ? '🟩' : '⬛';
        return `${num} ${prt} ${cat} ${jst} ${prc}`;
      })
      .join('\n');

    return `${title}\n${grid}\n\nCrack the Indian Constitution at Samvidhan Arcade!`;
  };

  const handleCopyShare = () => {
    navigator.clipboard.writeText(generateShareText());
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 3000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fadeIn select-none">
      {/* =====================================================================
          HEADER BANNER
      ===================================================================== */}
      <div className="p-5 md:p-6 rounded-3xl bg-[var(--bg-card)] border-2 border-[var(--border-subtle)] shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Constitutional Deduction Game
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-[var(--text-muted)] bg-[var(--bg-base)] border border-[var(--border-subtle)]">
                6 Tries or Fewer
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[var(--text-primary)] tracking-tight flex items-center gap-2.5">
              <Target className="w-6 h-6 text-amber-400" />
              LexSamvidhan: Daily Mystery Article
            </h2>
            <p className="text-xs md:text-sm text-[var(--text-secondary)] mt-1">
              Deduce the mystery Constitutional Article in 6 tries. Each guess reveals directional clues on article number, part, category, enforceability, and precedent.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Mode Toggle */}
            <div className="p-1 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex items-center gap-1 font-mono text-xs">
              <button
                onClick={() => startNewGame('daily')}
                className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all ${
                  gameMode === 'daily'
                    ? 'bg-amber-500 text-black shadow-sm'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Daily</span>
              </button>
              <button
                onClick={() => startNewGame('practice')}
                className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all ${
                  gameMode === 'practice'
                    ? 'bg-amber-500 text-black shadow-sm'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                <Shuffle className="w-3.5 h-3.5" />
                <span>Practice Vault</span>
              </button>
            </div>

            <button
              onClick={toggleMute}
              className="p-3 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 text-amber-500" />}
            </button>

            {gameMode === 'practice' && (
              <button
                onClick={() => startNewGame('practice')}
                className="p-3 px-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs font-mono font-bold text-[var(--text-secondary)] hover:text-amber-400 transition-all flex items-center gap-1.5"
                title="Roll New Random Mystery Article"
              >
                <RotateCcw className="w-4 h-4" />
                <span>New Target</span>
              </button>
            )}
          </div>
        </div>

        {/* Legend Ribbon */}
        <div className="pt-3 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-emerald-400 font-bold">
              <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500 inline-block" /> Exact Match
            </span>
            <span className="flex items-center gap-1 text-amber-400 font-bold">
              <span className="w-2.5 h-2.5 rounded-sm bg-amber-500 inline-block" /> Close Part
            </span>
            <span className="flex items-center gap-1 text-[var(--text-muted)]">
              <span className="w-2.5 h-2.5 rounded-sm bg-zinc-600 inline-block" /> Wrong
            </span>
            <span className="flex items-center gap-1 text-sky-400 font-bold">
              <ArrowUp className="w-3 h-3" /> Target Higher / <ArrowDown className="w-3 h-3" /> Lower
            </span>
          </div>

          <span className="font-bold text-amber-400">
            {evaluations.length} of {maxAttempts} Attempts Used
          </span>
        </div>
      </div>

      {/* =====================================================================
          GUESS DEDUCTION GRID
      ===================================================================== */}
      <div className="space-y-3">
        {/* Grid Column Headers */}
        <div className="hidden sm:grid sm:grid-cols-5 gap-2 px-4 text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] text-center">
          <div>Article #</div>
          <div>Part</div>
          <div>Category</div>
          <div>Enforceability</div>
          <div>Landmark Case</div>
        </div>

        {/* Previous Guesses */}
        <div className="space-y-2">
          {evaluations.map((ev, index) => (
            <div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-5 gap-2 p-3 sm:p-2 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs font-mono text-center shadow-sm"
            >
              {/* Tile 1: Article Number */}
              <div
                className={`p-3 rounded-xl border flex items-center justify-center gap-1.5 font-black text-sm ${
                  ev.numberMatch === 'CORRECT'
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                    : 'bg-zinc-800/60 border-zinc-700 text-zinc-200'
                }`}
              >
                <span>{ev.guessArticle.articleLabel}</span>
                {ev.numberMatch === 'HIGHER' && (
                  <ArrowUp className="w-4 h-4 text-sky-400 animate-bounce" />
                )}
                {ev.numberMatch === 'LOWER' && (
                  <ArrowDown className="w-4 h-4 text-sky-400 animate-bounce" />
                )}
                {ev.numberMatch === 'CORRECT' && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
              </div>

              {/* Tile 2: Part */}
              <div
                className={`p-3 rounded-xl border flex flex-col items-center justify-center ${
                  ev.partMatch === 'EXACT'
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold'
                    : ev.partMatch === 'NEAR'
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                    : 'bg-zinc-800/60 border-zinc-700 text-zinc-400'
                }`}
              >
                <span className="font-black">{ev.guessArticle.part}</span>
                <span className="text-[9px] line-clamp-1">{ev.guessArticle.partTitle}</span>
              </div>

              {/* Tile 3: Category */}
              <div
                className={`p-3 rounded-xl border flex items-center justify-center text-center ${
                  ev.categoryMatch === 'EXACT'
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold'
                    : 'bg-zinc-800/60 border-zinc-700 text-zinc-400'
                }`}
              >
                <span className="line-clamp-2 text-[11px]">{ev.guessArticle.category}</span>
              </div>

              {/* Tile 4: Justiciability */}
              <div
                className={`p-3 rounded-xl border flex items-center justify-center text-center ${
                  ev.justiciabilityMatch === 'EXACT'
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold'
                    : 'bg-zinc-800/60 border-zinc-700 text-zinc-400'
                }`}
              >
                <span className="line-clamp-2 text-[10px]">{ev.guessArticle.justiciability}</span>
              </div>

              {/* Tile 5: Precedent */}
              <div
                className={`p-3 rounded-xl border flex items-center justify-center text-center ${
                  ev.leadPrecedentMatch === 'EXACT'
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold'
                    : 'bg-zinc-800/60 border-zinc-700 text-zinc-400'
                }`}
              >
                <span className="line-clamp-2 text-[10px]">{ev.guessArticle.leadPrecedent}</span>
              </div>
            </div>
          ))}

          {/* Empty Rows Remaining */}
          {Array.from({ length: Math.max(0, maxAttempts - evaluations.length) }).map((_, idx) => (
            <div
              key={`empty-${idx}`}
              className="hidden sm:grid sm:grid-cols-5 gap-2 p-2 rounded-2xl bg-[var(--bg-base)] border border-dashed border-[var(--border-subtle)] text-center opacity-40 text-xs font-mono"
            >
              <div className="p-3 rounded-xl border border-dashed border-[var(--border-subtle)]">
                Try #{evaluations.length + idx + 1}
              </div>
              <div className="p-3 rounded-xl border border-dashed border-[var(--border-subtle)]">—</div>
              <div className="p-3 rounded-xl border border-dashed border-[var(--border-subtle)]">—</div>
              <div className="p-3 rounded-xl border border-dashed border-[var(--border-subtle)]">—</div>
              <div className="p-3 rounded-xl border border-dashed border-[var(--border-subtle)]">—</div>
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================================
          SEARCH & INPUT BAR
      ===================================================================== */}
      {!isGameOver && (
        <div className="p-4 rounded-3xl bg-[var(--bg-card)] border-2 border-[var(--border-subtle)] shadow-lg relative">
          <div className="relative">
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] focus-within:border-amber-500 focus-within:ring-2 focus-within:ring-amber-500/20 transition-all">
              <Search className="w-5 h-5 text-amber-500 shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search by article number, name, topic, or landmark case (e.g., '21', 'equality', 'remedies', 'bommai')..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsDropdownOpen(true);
                }}
                onFocus={() => setIsDropdownOpen(true)}
                className="w-full bg-transparent border-none text-xs sm:text-sm font-mono text-[var(--text-primary)] focus:outline-none placeholder:text-[var(--text-muted)]"
              />
              <span className="text-[10px] font-mono text-[var(--text-muted)] shrink-0 hidden sm:inline">
                {attemptsLeft} Tries Left
              </span>
            </div>

            {/* Dropdown Suggestions */}
            {isDropdownOpen && availableArticles.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-2 z-30 max-h-64 overflow-y-auto rounded-2xl bg-[var(--bg-surface-elevated)] border-2 border-[var(--border-subtle)] shadow-2xl divide-y divide-[var(--border-subtle)]">
                {availableArticles.map((article) => (
                  <div
                    key={article.articleNumber}
                    onClick={() => handleSelectArticle(article)}
                    className="p-3 hover:bg-amber-500/10 cursor-pointer transition-colors flex items-center justify-between gap-3 text-xs"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-black font-mono text-amber-400">
                          {article.articleLabel}
                        </span>
                        <span className="text-[10px] font-mono text-[var(--text-muted)]">
                          [{article.part}]
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-base)] text-[var(--text-secondary)]">
                          {article.category}
                        </span>
                      </div>
                      <p className="text-[11px] text-[var(--text-muted)] mt-0.5 line-clamp-1">
                        Lead Precedent: {article.leadPrecedent}
                      </p>
                    </div>

                    <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider shrink-0">
                      Select
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* =====================================================================
          PROGRESSIVE CLUES DRAWER
      ===================================================================== */}
      <div className="p-4 md:p-5 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-3">
        <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-bold flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-amber-400" />
          Progressive Clues Chamber:
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Clue 1: Unlocked after 2 attempts */}
          <div
            className={`p-3.5 rounded-2xl border space-y-1.5 transition-all ${
              evaluations.length >= 2
                ? 'bg-amber-500/5 border-amber-500/30 text-[var(--text-primary)]'
                : 'bg-[var(--bg-base)] border-[var(--border-subtle)] opacity-50'
            }`}
          >
            <div className="flex items-center justify-between text-[10px] font-mono font-bold">
              <span className="text-amber-400">Clue 1: CAD Historical Framing</span>
              {evaluations.length >= 2 ? (
                <Unlock className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Lock className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              )}
            </div>
            <p className="text-xs text-[var(--text-secondary)] italic leading-relaxed">
              {evaluations.length >= 2
                ? targetArticle.cadClue
                : 'Locked — available after 2 attempts.'}
            </p>
          </div>

          {/* Clue 2: Unlocked after 4 attempts */}
          <div
            className={`p-3.5 rounded-2xl border space-y-1.5 transition-all ${
              evaluations.length >= 4
                ? 'bg-amber-500/5 border-amber-500/30 text-[var(--text-primary)]'
                : 'bg-[var(--bg-base)] border-[var(--border-subtle)] opacity-50'
            }`}
          >
            <div className="flex items-center justify-between text-[10px] font-mono font-bold">
              <span className="text-amber-400">Clue 2: Latin Maxim / Doctrine</span>
              {evaluations.length >= 4 ? (
                <Unlock className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Lock className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              )}
            </div>
            <p className="text-xs text-[var(--text-secondary)] italic leading-relaxed">
              {evaluations.length >= 4
                ? targetArticle.latinMaximOrDoctrine
                : 'Locked — available after 4 attempts.'}
            </p>
          </div>

          {/* Clue 3: Unlocked after 5 attempts */}
          <div
            className={`p-3.5 rounded-2xl border space-y-1.5 transition-all ${
              evaluations.length >= 5
                ? 'bg-amber-500/5 border-amber-500/30 text-[var(--text-primary)]'
                : 'bg-[var(--bg-base)] border-[var(--border-subtle)] opacity-50'
            }`}
          >
            <div className="flex items-center justify-between text-[10px] font-mono font-bold">
              <span className="text-amber-400">Clue 3: Bench Ratio Excerpt</span>
              {evaluations.length >= 5 ? (
                <Unlock className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Lock className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              )}
            </div>
            <p className="text-xs text-[var(--text-secondary)] italic leading-relaxed">
              {evaluations.length >= 5
                ? targetArticle.benchQuoteHint
                : 'Locked — available after 5 attempts.'}
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================================
          GAME OVER / VICTORY / DEFEAT DOSSIER MODAL / BANNER
      ===================================================================== */}
      {isGameOver && (
        <div className="p-6 md:p-8 rounded-3xl bg-[var(--bg-card)] border-2 border-[var(--border-subtle)] space-y-6 animate-fadeIn">
          <div className="text-center space-y-2 pb-4 border-b border-[var(--border-subtle)]">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400">
              {isVictory ? <Award className="w-5 h-5" /> : <Scale className="w-5 h-5 text-[var(--text-muted)]" />}
            </div>
            <h3 className="text-2xl font-black text-[var(--text-primary)]">
              {isVictory
                ? `Constitutional Mystery Solved in ${evaluations.length} Try${
                    evaluations.length > 1 ? 'ies' : ''
                  }!`
                : 'Exhausted All 6 Deduction Tries!'}
            </h3>
            <p className="text-xs md:text-sm text-[var(--text-secondary)]">
              The Mystery Target was{' '}
              <strong className="text-amber-400 font-mono text-base">
                {targetArticle.articleLabel}
              </strong>{' '}
              ({targetArticle.partTitle})
            </p>
          </div>

          {/* Target Article Master Dossier */}
          <div className="p-5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-2.5">
              <div>
                <span className="text-[10px] font-mono text-amber-500 uppercase font-bold block">
                  Constitutional Dossier
                </span>
                <h4 className="font-black text-lg text-[var(--text-primary)]">
                  {targetArticle.articleLabel}: {targetArticle.category}
                </h4>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30 shrink-0 font-bold">
                {targetArticle.justiciability}
              </span>
            </div>

            <p className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">
              {targetArticle.summaryExplanation}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)]">
                <span className="text-[10px] font-mono uppercase text-amber-400 block font-bold">
                  Lead Precedent:
                </span>
                <strong className="text-[var(--text-primary)] block mt-0.5">
                  {targetArticle.leadPrecedent}
                </strong>
                <p className="text-[11px] text-[var(--text-muted)] mt-1 italic">
                  {targetArticle.benchQuoteHint}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)]">
                <span className="text-[10px] font-mono uppercase text-amber-400 block font-bold">
                  Constituent Assembly (CAD) History:
                </span>
                <p className="text-[11px] text-[var(--text-secondary)] mt-0.5 leading-relaxed">
                  {targetArticle.cadClue}
                </p>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={handleCopyShare}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-black text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <Share2 className="w-4 h-4" />
              <span>{copiedShare ? 'Copied Emoji Grid!' : 'Share Score Grid'}</span>
            </button>

            <button
              onClick={() => startNewGame('practice')}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-amber-500 text-xs font-mono font-bold text-[var(--text-secondary)] hover:text-amber-400 transition-all flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Play Another Practice Puzzle</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
