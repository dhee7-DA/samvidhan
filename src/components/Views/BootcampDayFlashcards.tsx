import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  BrainCircuit,
  RotateCcw,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Zap,
  Lightbulb,
  Star,
  Volume2,
  VolumeX,
  ExternalLink,
  Award,
  Layers
} from 'lucide-react';
import {
  getFlashcardsForBootcampDay,
  reviewCard,
  type Flashcard,
  type GradeQuality
} from '../../services/flashcardService';
import { audioSynth } from '../../services/tileMatcherGameService';
import { useTheme } from '../../context/ThemeContext';
import type { BootcampDay } from '../../data/bootcamp/bootcampTypes';

interface BootcampDayFlashcardsProps {
  day: BootcampDay;
  onComplete?: () => void;
  isCompleted?: boolean;
}

export const BootcampDayFlashcards: React.FC<BootcampDayFlashcardsProps> = ({
  day,
  onComplete,
  isCompleted = false
}) => {
  const { launchFlashcardDeck, togglePinFlashcard } = useTheme();

  const [cards, setCards] = useState<Flashcard[]>([]);
  const [filterKind, setFilterKind] = useState<'all' | 'bootcamp' | 'articles' | 'maxims' | 'mistakes'>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [showEli5, setShowEli5] = useState<boolean>(true);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [sessionReviewed, setSessionReviewed] = useState<number>(0);

  const loadDayCards = useCallback(() => {
    setCards(getFlashcardsForBootcampDay(day));
  }, [day]);

  useEffect(() => {
    loadDayCards();
    setCurrentIndex(0);
    setIsFlipped(false);
    setSessionReviewed(0);
    setFilterKind('all');
  }, [loadDayCards]);

  const filteredCards = useMemo(() => {
    if (filterKind === 'all') return cards;
    return cards.filter((c) => c.deck === filterKind);
  }, [cards, filterKind]);

  const safeIndex = filteredCards.length > 0 ? Math.min(currentIndex, filteredCards.length - 1) : 0;
  const currentCard = filteredCards[safeIndex] || null;

  const counts = useMemo(() => {
    return {
      all: cards.length,
      bootcamp: cards.filter((c) => c.deck === 'bootcamp').length,
      articles: cards.filter((c) => c.deck === 'articles').length,
      maxims: cards.filter((c) => c.deck === 'maxims').length,
      mistakes: cards.filter((c) => c.deck === 'mistakes').length,
      mastered: cards.filter((c) => c.box >= 4).length,
    };
  }, [cards]);

  const handleGrade = (grade: GradeQuality) => {
    if (!currentCard) return;
    if (soundEnabled) {
      if (grade === 'again') audioSynth.playMismatchSound();
      else audioSynth.playMatchSound();
    }
    reviewCard(currentCard.id, grade);
    loadDayCards();
    setIsFlipped(false);

    const nextReviewed = sessionReviewed + 1;
    setSessionReviewed(nextReviewed);
    if (nextReviewed >= 5 && !isCompleted && onComplete) {
      onComplete();
    }

    if (safeIndex < filteredCards.length - 1) {
      setCurrentIndex(safeIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePin = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!currentCard) return;
    togglePinFlashcard(currentCard.id);
    loadDayCards();
  };

  return (
    <div className="p-5 sm:p-6 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-5 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent)] text-[11px] font-mono font-bold uppercase tracking-wider">
              <BrainCircuit className="w-3.5 h-3.5" />
              <span>Day {day.dayNumber} Leitner SRS Deck</span>
            </span>
            {isCompleted && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold">
                <CheckCircle2 className="w-3 h-3" /> Task Complete
              </span>
            )}
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
            Active Recall Flashcards: {day.title}
          </h3>
          <p className="text-xs text-[var(--text-secondary)] mt-0.5">
            Synced live with your global 5-Box Leitner SRS engine. Review 5 cards to auto-complete today&apos;s SRS task ({sessionReviewed}/5 done this session).
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setShowEli5((prev) => !prev)}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 border transition-all ${
              showEli5
                ? 'bg-sky-500/20 text-sky-300 border-sky-500/40'
                : 'bg-[var(--bg-base)] text-[var(--text-secondary)] border-[var(--border-subtle)]'
            }`}
          >
            <Lightbulb className="w-3.5 h-3.5" />
            <span>ELI5</span>
          </button>

          <button
            onClick={() => setSoundEnabled((prev) => !prev)}
            className="p-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            title={soundEnabled ? 'Mute sound' : 'Enable sound'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-[var(--accent)]" /> : <VolumeX className="w-4 h-4" />}
          </button>

          <button
            onClick={() => launchFlashcardDeck('bootcamp', `Day ${day.dayNumber}`)}
            className="px-3 py-1.5 rounded-xl bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)] text-xs font-mono font-bold flex items-center gap-1.5 transition-all"
          >
            <span>Open Full SRS Lab</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Sub-category filter pills */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-1.5 flex-wrap">
          {[
            { id: 'all', label: 'All Day Cards', count: counts.all },
            { id: 'bootcamp', label: 'Concepts & Case Evolutions', count: counts.bootcamp },
            { id: 'articles', label: 'Target Articles', count: counts.articles },
            { id: 'maxims', label: 'Legal Terms', count: counts.maxims },
            { id: 'mistakes', label: 'Day Mistakes', count: counts.mistakes }
          ]
            .filter((item) => item.id === 'all' || item.count > 0)
            .map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setFilterKind(tab.id as any);
                  setCurrentIndex(0);
                  setIsFlipped(false);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono border transition-all ${
                  filterKind === tab.id
                    ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold border-[var(--accent)]'
                    : 'bg-[var(--bg-base)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
                }`}
              >
                <span>{tab.label}</span>
                <span className="ml-1.5 text-[10px] opacity-80">({tab.count})</span>
              </button>
            ))}
        </div>

        <span className="text-xs font-mono text-[var(--text-muted)]">
          Solid/Mastered (Box 4–5): <strong className="text-emerald-400">{counts.mastered}/{counts.all}</strong>
        </span>
      </div>

      {/* Interactive Card */}
      {currentCard ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
            <span className="font-bold text-[var(--text-primary)]">
              Card {safeIndex + 1} of {filteredCards.length}
            </span>
            <span>Leitner Box {currentCard.box} / 5 · {currentCard.reps} reps</span>
          </div>

          <div
            onClick={() => setIsFlipped((prev) => !prev)}
            className="cursor-pointer min-h-[300px] p-6 sm:p-8 rounded-2xl bg-[var(--bg-base)] border-2 border-[var(--border-subtle)] hover:border-[var(--accent)] transition-all flex flex-col justify-between select-none"
          >
            <div className="flex items-center justify-between gap-2 pb-3 border-b border-[var(--border-subtle)] flex-wrap">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent)] text-[11px] font-mono font-bold uppercase">
                  {currentCard.category}
                </span>
                {currentCard.subheading && (
                  <span className="text-xs font-mono text-[var(--text-muted)]">{currentCard.subheading}</span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePin}
                  className={`px-2 py-0.5 rounded-lg border text-[11px] font-mono font-bold flex items-center gap-1 ${
                    currentCard.pinned
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                      : 'bg-[var(--bg-surface)] text-[var(--text-muted)] border-[var(--border-subtle)] hover:text-amber-400'
                  }`}
                >
                  <Star className={`w-3 h-3 ${currentCard.pinned ? 'fill-current' : ''}`} />
                  <span>{currentCard.pinned ? 'Pinned' : 'Pin'}</span>
                </button>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)]">
                  {isFlipped ? 'ANSWER' : 'PROMPT'}
                </span>
              </div>
            </div>

            {!isFlipped ? (
              <div className="py-8 my-auto text-center space-y-3">
                <h4 className="text-lg sm:text-xl font-extrabold text-[var(--text-primary)] leading-relaxed max-w-2xl mx-auto">
                  {currentCard.front}
                </h4>
                <p className="text-xs font-mono text-[var(--accent)] flex items-center justify-center gap-1.5 opacity-85">
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  <span>Click card to reveal ratio, ELI5 breakdown & statutory anchor</span>
                </p>
              </div>
            ) : (
              <div className="py-5 my-auto space-y-3 animate-fadeIn">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                    Core Constitutional Rule:
                  </span>
                  <p className="text-sm sm:text-base font-bold text-[var(--text-primary)] leading-relaxed">
                    {currentCard.back.coreRule}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                  {currentCard.back.statutoryDetails}
                </div>

                {showEli5 && (currentCard.back.plainEnglish || currentCard.back.realWorldExample) && (
                  <div className="p-3.5 rounded-xl bg-sky-500/10 border border-sky-500/30 text-xs space-y-1.5 leading-relaxed">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase text-sky-400">
                      <Lightbulb className="w-3 h-3" />
                      <span>Plain-English & Exam Angle</span>
                    </div>
                    {currentCard.back.plainEnglish && (
                      <p className="text-[var(--text-primary)]">{currentCard.back.plainEnglish}</p>
                    )}
                    {currentCard.back.realWorldExample && (
                      <p className="text-[var(--text-secondary)] italic">{currentCard.back.realWorldExample}</p>
                    )}
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono">
                  {currentCard.back.statutoryAnchor && (
                    <span className="px-2.5 py-1 rounded-lg bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent)] flex items-center gap-1">
                      <Layers className="w-3 h-3" /> {currentCard.back.statutoryAnchor}
                    </span>
                  )}
                  {currentCard.back.precedentRef && (
                    <span className="px-2.5 py-1 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)] flex items-center gap-1">
                      <Award className="w-3 h-3 text-[var(--gold)]" /> {currentCard.back.precedentRef}
                    </span>
                  )}
                </div>
              </div>
            )}

            <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
              <span>{isFlipped ? 'Grade recall to schedule next SRS review' : 'Click card to flip'}</span>
              <span>Box {currentCard.box} → {currentCard.box < 5 ? `Box ${currentCard.box + 1}` : 'Mastered'}</span>
            </div>
          </div>

          {isFlipped ? (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 animate-fadeIn">
              <button
                onClick={() => handleGrade('again')}
                className="py-3 px-3 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/30 text-rose-400 font-bold text-xs font-mono flex flex-col items-center gap-0.5"
              >
                <span>Again</span>
                <span className="text-[10px] font-normal opacity-80">Reset Box 1</span>
              </button>
              <button
                onClick={() => handleGrade('hard')}
                className="py-3 px-3 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-400 font-bold text-xs font-mono flex flex-col items-center gap-0.5"
              >
                <span>Hard</span>
                <span className="text-[10px] font-normal opacity-80">1 Day</span>
              </button>
              <button
                onClick={() => handleGrade('good')}
                className="py-3 px-3 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 border border-sky-500/30 text-sky-400 font-bold text-xs font-mono flex flex-col items-center gap-0.5"
              >
                <span>Good</span>
                <span className="text-[10px] font-normal opacity-80">Box +1</span>
              </button>
              <button
                onClick={() => handleGrade('easy')}
                className="py-3 px-3 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-400 font-bold text-xs font-mono flex flex-col items-center gap-0.5"
              >
                <span>Easy</span>
                <span className="text-[10px] font-normal opacity-80">Fast Track</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between gap-2">
              <button
                onClick={() => {
                  if (safeIndex > 0) {
                    setCurrentIndex(safeIndex - 1);
                    setIsFlipped(false);
                  }
                }}
                disabled={safeIndex === 0}
                className="px-3.5 py-2 rounded-xl border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] disabled:opacity-30 flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Prev
              </button>
              <button
                onClick={() => setIsFlipped(true)}
                className="px-5 py-2 rounded-xl bg-[var(--accent)] text-[var(--accent-contrast)] font-bold text-xs font-mono flex items-center gap-1.5 shadow-sm hover:opacity-90"
              >
                <span>Reveal Answer</span>
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => {
                  if (safeIndex < filteredCards.length - 1) {
                    setCurrentIndex(safeIndex + 1);
                    setIsFlipped(false);
                  }
                }}
                disabled={safeIndex === filteredCards.length - 1}
                className="px-3.5 py-2 rounded-xl border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] disabled:opacity-30 flex items-center gap-1"
              >
                Next <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="p-8 text-center text-xs font-mono text-[var(--text-muted)]">
          No flashcards found in this sub-filter for Day {day.dayNumber}.
        </div>
      )}
    </div>
  );
};
