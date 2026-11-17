import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  RotateCcw,
  Sparkles,
  Award,
  BookOpen,
  CheckCircle2,
  Layers,
  Scale,
  BrainCircuit,
  Calendar,
  ArrowRight,
  ArrowLeft,
  Filter,
  Check,
  Zap,
  HelpCircle,
  Clock,
  Flame,
  Volume2,
  VolumeX,
  ExternalLink,
  PlusCircle,
  Inbox
} from 'lucide-react';
import {
  getStoredFlashcards,
  reviewCard,
  resetFlashcards,
  syncMistakesToFlashcards,
  getSRSMetrics,
  type Flashcard,
  type FlashcardDeckType,
  type GradeQuality,
  type SRSMetrics
} from '../../services/flashcardService';
import { audioSynth } from '../../services/tileMatcherGameService';
import { useTheme } from '../../context/ThemeContext';

export const FlashcardsView: React.FC = () => {
  const { setActiveTab } = useTheme();

  // State
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [selectedDeck, setSelectedDeck] = useState<FlashcardDeckType | 'all'>('all');
  const [selectedBox, setSelectedBox] = useState<number | 'all'>('all');
  const [onlyDueToday, setOnlyDueToday] = useState<boolean>(true);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [srsMetrics, setSrsMetrics] = useState<SRSMetrics>({ totalReviews: 0, lastReviewDate: '', streakDays: 0 });
  const [syncToast, setSyncToast] = useState<string | null>(null);

  // Load cards and metrics
  const loadCardsAndMetrics = useCallback(() => {
    setCards(getStoredFlashcards());
    setSrsMetrics(getSRSMetrics());
  }, []);

  useEffect(() => {
    loadCardsAndMetrics();
  }, [loadCardsAndMetrics]);

  // Filter cards based on deck, box, and dueToday filter
  const now = Date.now();
  const filteredCards = useMemo(() => {
    let list = cards;

    // Deck filter
    if (selectedDeck !== 'all') {
      list = list.filter((c) => c.deck === selectedDeck);
    }

    // Box filter
    if (selectedBox !== 'all') {
      list = list.filter((c) => c.box === selectedBox);
    }

    // Due Today filter
    if (onlyDueToday) {
      list = list.filter((c) => !c.lastReviewed || c.nextReview <= now);
    }

    return list;
  }, [cards, selectedDeck, selectedBox, onlyDueToday, now]);

  const currentCard: Flashcard | null = filteredCards[currentIndex] || filteredCards[0] || null;

  // Box Stats across all cards
  const stats = useMemo(() => {
    const total = cards.length;
    const dueCount = cards.filter((c) => !c.lastReviewed || c.nextReview <= now).length;
    const box1 = cards.filter((c) => c.box === 1).length;
    const box2 = cards.filter((c) => c.box === 2).length;
    const box3 = cards.filter((c) => c.box === 3).length;
    const box4 = cards.filter((c) => c.box === 4).length;
    const box5 = cards.filter((c) => c.box === 5).length;
    const masteredPct = total > 0 ? Math.round((box5 / total) * 100) : 0;

    return { total, dueCount, box1, box2, box3, box4, box5, masteredPct };
  }, [cards, now]);

  // Handle Flip
  const handleFlip = useCallback(() => {
    setIsFlipped((prev) => !prev);
  }, []);

  // Handle Grade
  const handleGrade = useCallback((grade: GradeQuality) => {
    if (!currentCard) return;

    if (soundEnabled) {
      if (grade === 'again') {
        audioSynth.playMismatchSound();
      } else {
        audioSynth.playMatchSound();
      }
    }

    const updated = reviewCard(currentCard.id, grade);
    setCards(updated);
    setSrsMetrics(getSRSMetrics());
    setIsFlipped(false);

    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  }, [currentCard, filteredCards.length, currentIndex, soundEnabled]);

  // Next / Prev card navigation
  const handleNext = useCallback(() => {
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setIsFlipped(false);
    }
  }, [currentIndex, filteredCards.length]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setIsFlipped(false);
    }
  }, [currentIndex]);

  // Keyboard Navigation Handler
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is in an input field
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.code === 'Space' || e.key === 'Enter') {
        e.preventDefault();
        handleFlip();
      } else if (isFlipped) {
        if (e.key === '1') {
          e.preventDefault();
          handleGrade('again');
        } else if (e.key === '2') {
          e.preventDefault();
          handleGrade('hard');
        } else if (e.key === '3') {
          e.preventDefault();
          handleGrade('good');
        } else if (e.key === '4') {
          e.preventDefault();
          handleGrade('easy');
        }
      } else {
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          handleNext();
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          handlePrev();
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [handleFlip, handleGrade, handleNext, handlePrev, isFlipped]);

  // Reset Decks
  const handleReset = () => {
    if (window.confirm('Reset all flashcards back to Box 1 (Daily Learning)?')) {
      const reset = resetFlashcards();
      setCards(reset);
      setCurrentIndex(0);
      setIsFlipped(false);
    }
  };

  // Sync Mistakes from Mistakes Bank
  const handleSyncMistakes = () => {
    const res = syncMistakesToFlashcards();
    setCards(res.cards);
    if (res.addedCount > 0) {
      setSyncToast(`Successfully synced ${res.addedCount} mistake question(s) into Box 1!`);
    } else {
      setSyncToast('All Mistakes Bank errors are already in your SRS flashcard deck.');
    }
    setTimeout(() => setSyncToast(null), 4000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6 animate-fadeIn">
      {/* Toast Notification */}
      {syncToast && (
        <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center justify-between shadow-lg animate-fadeIn">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{syncToast}</span>
          </div>
          <button onClick={() => setSyncToast(null)} className="text-emerald-400 font-bold hover:opacity-80">
            &times;
          </button>
        </div>
      )}

      {/* Top Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] text-[var(--accent)] text-xs font-mono font-bold uppercase tracking-wider mb-2 border border-[var(--badge-border)]">
              <BrainCircuit className="w-3.5 h-3.5" />
              <span>5-Box Leitner Spaced Repetition Engine</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Constitutional Spaced Flashcards
            </h1>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1 max-w-2xl leading-relaxed">
              Scientifically proven spaced repetition for 395 Articles, Landmark Precedents, Schedules, Doctrines, and Latin Maxims. Cards advance to higher boxes as recall cements into long-term memory.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {/* Sync Mistakes Button */}
            <button
              onClick={handleSyncMistakes}
              className="px-3.5 py-2 rounded-xl bg-[var(--badge-bg)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)] border border-[var(--badge-border)] text-xs font-mono font-bold transition-all flex items-center gap-1.5 shadow-sm"
              title="Import missed questions from the Mistakes Bank directly into Box 1"
            >
              <Inbox className="w-3.5 h-3.5" />
              <span>Sync Mistakes Bank</span>
            </button>

            {/* Sound Toggle */}
            <button
              onClick={() => setSoundEnabled((prev) => !prev)}
              className="p-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              title={soundEnabled ? 'Mute Sound Synthesizer' : 'Enable Sound Synthesizer'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-[var(--accent)]" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Reset Decks Button */}
            <button
              onClick={handleReset}
              className="p-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-base)] text-[var(--text-muted)] hover:text-red-400 hover:border-red-500/30 text-xs flex items-center gap-1.5 transition-colors"
              title="Reset all cards to Box 1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset Decks</span>
            </button>
          </div>
        </div>

        {/* Live SRS Metrics Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[var(--border-subtle)] text-xs font-mono">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-amber-500 font-bold">
              <Flame className="w-4 h-4 fill-current" />
              <span>{srsMetrics.streakDays}-Day Retention Streak</span>
            </span>
            <span className="text-[var(--text-muted)]">|</span>
            <span className="text-[var(--text-secondary)]">
              {srsMetrics.totalReviews} Total Card Reviews Completed
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[var(--text-muted)]">Overall Mastery:</span>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-emerald-400">{stats.masteredPct}%</span>
              <div className="w-24 h-2 bg-[var(--bg-base)] rounded-full overflow-hidden border border-[var(--border-subtle)]">
                <div
                  className="h-full bg-gradient-to-r from-[var(--accent)] to-emerald-400 rounded-full transition-all duration-500"
                  style={{ width: `${stats.masteredPct}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 5-Box Leitner Visual Ladder */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
          {[
            { box: 1, name: 'Box 1: Daily Learning', interval: '1 Day Interval', count: stats.box1, color: 'text-rose-400', border: 'border-rose-500/30', bg: 'bg-rose-500/10' },
            { box: 2, name: 'Box 2: 3-Day Retention', interval: '3 Days Interval', count: stats.box2, color: 'text-amber-400', border: 'border-amber-500/30', bg: 'bg-amber-500/10' },
            { box: 3, name: 'Box 3: Weekly Anchor', interval: '7 Days Interval', count: stats.box3, color: 'text-sky-400', border: 'border-sky-500/30', bg: 'bg-sky-500/10' },
            { box: 4, name: 'Box 4: Fortnightly Solid', interval: '14 Days Interval', count: stats.box4, color: 'text-purple-400', border: 'border-purple-500/30', bg: 'bg-purple-500/10' },
            { box: 5, name: 'Box 5: Permanent Synapse', interval: '30+ Days (Mastered)', count: stats.box5, color: 'text-emerald-400', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10' }
          ].map((b) => {
            const isSelected = selectedBox === b.box;
            return (
              <button
                key={b.box}
                onClick={() => {
                  setSelectedBox((prev) => (prev === b.box ? 'all' : b.box));
                  setCurrentIndex(0);
                  setIsFlipped(false);
                }}
                className={`p-3 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'ring-2 ring-[var(--accent)] shadow-md bg-[var(--bg-surface-elevated)] border-[var(--accent)]'
                    : 'bg-[var(--bg-base)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${b.color}`}>
                    Box {b.box}
                  </span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${b.bg} ${b.color}`}>
                    {b.interval}
                  </span>
                </div>
                <div className="text-xl font-bold font-mono text-[var(--text-primary)]">
                  {b.count} <span className="text-xs font-normal text-[var(--text-muted)]">cards</span>
                </div>
                <p className="text-[11px] text-[var(--text-secondary)] mt-0.5 line-clamp-1">
                  {b.name.split(': ')[1]}
                </p>
              </button>
            );
          })}
        </div>

        {/* Study Mode & Deck Selectors Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-[var(--border-subtle)]">
          {/* Due Today vs All Cards Toggle */}
          <div className="flex items-center p-1 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] shrink-0">
            <button
              onClick={() => {
                setOnlyDueToday(true);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                onlyDueToday
                  ? 'bg-[var(--accent)] text-[var(--accent-contrast)] shadow-sm'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Due Today ({stats.dueCount})</span>
            </button>
            <button
              onClick={() => {
                setOnlyDueToday(false);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                !onlyDueToday
                  ? 'bg-[var(--accent)] text-[var(--accent-contrast)] shadow-sm'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Browse All ({stats.total})</span>
            </button>
          </div>

          {/* Deck Filter Tabs */}
          <div className="flex items-center gap-1.5 flex-wrap overflow-x-auto">
            {[
              { id: 'all', label: 'All Decks', count: cards.length },
              { id: 'articles', label: 'Articles', count: cards.filter((c) => c.deck === 'articles').length },
              { id: 'cases', label: 'Precedents', count: cards.filter((c) => c.deck === 'cases').length },
              { id: 'schedules', label: '12 Schedules', count: cards.filter((c) => c.deck === 'schedules').length },
              { id: 'doctrines', label: '10 Doctrines', count: cards.filter((c) => c.deck === 'doctrines').length },
              { id: 'amendments', label: 'Amendments', count: cards.filter((c) => c.deck === 'amendments').length },
              { id: 'maxims', label: 'Latin Maxims', count: cards.filter((c) => c.deck === 'maxims').length },
              { id: 'mistakes', label: 'Mistakes Bank', count: cards.filter((c) => c.deck === 'mistakes').length }
            ].map((d) => (
              <button
                key={d.id}
                onClick={() => {
                  setSelectedDeck(d.id as any);
                  setCurrentIndex(0);
                  setIsFlipped(false);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all border ${
                  selectedDeck === d.id
                    ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold shadow-sm border-[var(--accent)]'
                    : 'bg-[var(--bg-base)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
                }`}
              >
                <span>{d.label}</span>
                <span className={`ml-1.5 text-[10px] px-1.5 py-0.2 rounded font-mono ${
                  selectedDeck === d.id ? 'bg-black/20 text-white' : 'bg-[var(--badge-bg)] text-[var(--text-muted)]'
                }`}>
                  {d.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Flashcard Container */}
      {currentCard ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] px-1">
            <span className="flex items-center gap-2">
              <span className="font-bold text-[var(--text-primary)]">
                Card {currentIndex + 1} of {filteredCards.length}
              </span>
              {selectedBox !== 'all' && (
                <span className="px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--accent)]">
                  Filtered to Box {selectedBox}
                </span>
              )}
            </span>
            <span className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] font-bold">
                Box {currentCard.box} of 5
              </span>
              <span>({currentCard.reps} reps)</span>
            </span>
          </div>

          {/* Interactive Flip Card */}
          <div
            onClick={handleFlip}
            className="cursor-pointer min-h-[350px] md:min-h-[390px] p-6 md:p-10 rounded-3xl bg-[var(--bg-surface)] border-2 border-[var(--border-subtle)] hover:border-[var(--accent)] shadow-xl transition-all duration-200 flex flex-col justify-between group relative select-none"
          >
            {/* Top Card Badges */}
            <div className="flex items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent)] text-xs font-mono font-bold uppercase tracking-wider">
                  {currentCard.category}
                </span>
                {currentCard.subheading && (
                  <span className="text-xs text-[var(--text-muted)] font-mono">
                    {currentCard.subheading}
                  </span>
                )}
              </div>
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                {isFlipped ? 'REVERSE / RATIO' : 'FRONT / PROMPT'}
              </span>
            </div>

            {/* Front vs Back Content */}
            {!isFlipped ? (
              <div className="py-10 my-auto space-y-4 text-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[var(--text-primary)] leading-relaxed max-w-3xl mx-auto">
                  {currentCard.front}
                </h3>
                <p className="text-xs text-[var(--accent)] font-mono flex items-center justify-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  <span>Click card or press [Space] to reveal statutory rule & precedent</span>
                </p>
              </div>
            ) : (
              <div className="py-6 my-auto space-y-5 animate-fadeIn">
                <div className="space-y-1.5">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 block">
                    Core Constitutional Rule & Principle:
                  </span>
                  <p className="text-base sm:text-lg md:text-xl font-bold text-[var(--text-primary)] leading-relaxed">
                    {currentCard.back.coreRule}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1.5 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  <span className="font-bold text-[var(--accent)] mr-2 font-mono uppercase text-[11px] block sm:inline">
                    Detailed Jurisprudence:
                  </span>
                  {currentCard.back.statutoryDetails}
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono">
                  {currentCard.back.statutoryAnchor && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveTab('articles-master');
                      }}
                      className="px-3 py-1 rounded-lg bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent)] hover:opacity-80 flex items-center gap-1.5 transition-all"
                      title="Open in Articles 1–395 Bare Act Explorer"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>Anchor: {currentCard.back.statutoryAnchor}</span>
                      <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                    </button>
                  )}
                  {currentCard.back.precedentRef && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveTab('judgments');
                      }}
                      className="px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 hover:opacity-80 flex items-center gap-1.5 transition-all"
                      title="Open in Landmark Precedents Lab"
                    >
                      <Award className="w-3.5 h-3.5" />
                      <span>Ruling: {currentCard.back.precedentRef}</span>
                      <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Card Footer */}
            <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
              <span>{isFlipped ? 'Grade recall using buttons below (or keys 1–4)' : 'Press Space to flip'}</span>
              <span>Leitner Box {currentCard.box} / 5</span>
            </div>
          </div>

          {/* Spaced Repetition Grading Controls */}
          {isFlipped ? (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 animate-fadeIn">
              <button
                onClick={() => handleGrade('again')}
                className="py-3.5 px-4 rounded-2xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/30 text-rose-300 font-bold text-xs font-mono transition-all flex flex-col items-center gap-1 shadow-sm"
              >
                <div className="flex items-center gap-1">
                  <span>[1] Again</span>
                </div>
                <span className="text-[10px] font-normal text-rose-400/80">Lapse · Reset to Box 1</span>
              </button>

              <button
                onClick={() => handleGrade('hard')}
                className="py-3.5 px-4 rounded-2xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 font-bold text-xs font-mono transition-all flex flex-col items-center gap-1 shadow-sm"
              >
                <div className="flex items-center gap-1">
                  <span>[2] Hard</span>
                </div>
                <span className="text-[10px] font-normal text-amber-400/80">1 Day · Same Box</span>
              </button>

              <button
                onClick={() => handleGrade('good')}
                className="py-3.5 px-4 rounded-2xl bg-sky-500/15 hover:bg-sky-500/25 border border-sky-500/30 text-sky-300 font-bold text-xs font-mono transition-all flex flex-col items-center gap-1 shadow-sm"
              >
                <div className="flex items-center gap-1">
                  <span>[3] Good</span>
                </div>
                <span className="text-[10px] font-normal text-sky-400/80">3–14 Days · Box +1</span>
              </button>

              <button
                onClick={() => handleGrade('easy')}
                className="py-3.5 px-4 rounded-2xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 font-bold text-xs font-mono transition-all flex flex-col items-center gap-1 shadow-sm"
              >
                <div className="flex items-center gap-1">
                  <span>[4] Easy</span>
                </div>
                <span className="text-[10px] font-normal text-emerald-400/80">21–35 Days · Fast Track</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between gap-3 pt-2">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="px-4 py-2.5 rounded-xl border border-[var(--border-subtle)] text-xs font-mono font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1.5 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Prev</span>
              </button>

              <button
                onClick={handleFlip}
                className="px-6 py-2.5 rounded-xl bg-[var(--accent)] hover:opacity-90 text-[var(--accent-contrast)] font-bold text-xs font-mono shadow-md transition-all flex items-center gap-2"
              >
                <span>Flip to Reveal</span>
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleNext}
                disabled={currentIndex === filteredCards.length - 1}
                className="px-4 py-2.5 rounded-xl border border-[var(--border-subtle)] text-xs font-mono font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1.5 transition-colors"
              >
                <span>Next</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Empty State */
        <div className="p-12 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-center space-y-4 animate-scaleUp">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/20">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[var(--text-primary)]">
              {onlyDueToday ? 'All Due Cards Cleared for Today!' : 'No Cards Found in This Filter'}
            </h3>
            <p className="text-xs text-[var(--text-secondary)] max-w-md mx-auto mt-1">
              {onlyDueToday
                ? 'You have reviewed all cards currently due for spaced repetition. Review cards advance to wider intervals as your long-term memory strengthens.'
                : 'Try clearing the box filter or selecting "All Decks" to view all constitutional flashcards.'}
            </p>
          </div>
          <div className="flex items-center justify-center gap-3 pt-2">
            {onlyDueToday && (
              <button
                onClick={() => setOnlyDueToday(false)}
                className="px-5 py-2.5 rounded-xl bg-[var(--accent)] text-[var(--accent-contrast)] font-mono text-xs font-bold transition-all shadow-md"
              >
                Browse All {stats.total} Cards (Cram Mode)
              </button>
            )}
            {selectedBox !== 'all' && (
              <button
                onClick={() => setSelectedBox('all')}
                className="px-5 py-2.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] font-mono text-xs font-bold text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-all"
              >
                Clear Box Filter
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
