import React, { useState, useEffect, useMemo } from 'react';
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
  HelpCircle
} from 'lucide-react';
import {
  getStoredFlashcards,
  reviewCard,
  resetFlashcards,
  type Flashcard,
  type FlashcardDeckType,
  type GradeQuality
} from '../../services/flashcardService';

export const FlashcardsView: React.FC = () => {
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [selectedDeck, setSelectedDeck] = useState<FlashcardDeckType | 'all'>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const loadCards = () => {
    setCards(getStoredFlashcards());
  };

  useEffect(() => {
    loadCards();
  }, []);

  // Filtered Cards
  const filteredCards = useMemo(() => {
    if (selectedDeck === 'all') return cards;
    return cards.filter((c) => c.deck === selectedDeck);
  }, [cards, selectedDeck]);

  const currentCard = filteredCards[currentIndex] || filteredCards[0] || null;

  // Box Stats
  const stats = useMemo(() => {
    const total = filteredCards.length;
    const box1 = filteredCards.filter((c) => c.box === 1).length;
    const box2 = filteredCards.filter((c) => c.box === 2).length;
    const box3 = filteredCards.filter((c) => c.box === 3).length;
    const box4 = filteredCards.filter((c) => c.box === 4).length;
    const masteredPct = total > 0 ? Math.round((box4 / total) * 100) : 0;
    return { total, box1, box2, box3, box4, masteredPct };
  }, [filteredCards]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleGrade = (grade: GradeQuality) => {
    if (!currentCard) return;
    const updated = reviewCard(currentCard.id, grade);
    setCards(updated);
    setIsFlipped(false);
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setIsFlipped(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setIsFlipped(false);
    }
  };

  const handleReset = () => {
    if (window.confirm('Reset all flashcards back to Box 1 (Learning)?')) {
      const reset = resetFlashcards();
      setCards(reset);
      setCurrentIndex(0);
      setIsFlipped(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-card border border-indigo-500/30 shadow-lg">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <BrainCircuit className="w-3.5 h-3.5" />
              <span>Active Recall & Spaced Repetition (Leitner System)</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
              Constitutional Spaced Flashcards
            </h1>
            <p className="text-sm text-muted-foreground mt-1 max-w-xl">
              Rapid memory engine for Articles, Landmark Precedents, Amendments, and Latin Maxims. Cards move into higher boxes as your mastery deepens.
            </p>
          </div>

          <button
            onClick={handleReset}
            className="p-2.5 rounded-xl border border-border/60 hover:bg-muted text-muted-foreground hover:text-foreground text-xs flex items-center gap-1.5 transition-colors"
            title="Reset All Cards"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Decks</span>
          </button>
        </div>

        {/* Deck Selectors */}
        <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-border/40">
          {[
            { id: 'all', label: 'All Decks', count: cards.length },
            { id: 'articles', label: 'Articles & Thresholds', count: cards.filter((c) => c.deck === 'articles').length },
            { id: 'cases', label: 'Landmark Precedents', count: cards.filter((c) => c.deck === 'cases').length },
            { id: 'amendments', label: 'Amendments (1–106)', count: cards.filter((c) => c.deck === 'amendments').length },
            { id: 'maxims', label: 'Latin Maxims & Canons', count: cards.filter((c) => c.deck === 'maxims').length }
          ].map((d) => (
            <button
              key={d.id}
              onClick={() => {
                setSelectedDeck(d.id as any);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedDeck === d.id
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-card border border-border/60 text-muted-foreground hover:text-foreground hover:border-border'
              }`}
            >
              {d.label} ({d.count})
            </button>
          ))}
        </div>

        {/* Leitner Box Progress */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-4 pt-4 border-t border-border/40 text-xs">
          <div className="p-2.5 rounded-xl bg-card/60 border border-border/40">
            <span className="text-muted-foreground block text-[11px]">Box 1 (Learning)</span>
            <span className="text-lg font-black text-rose-400 block mt-0.5">{stats.box1} cards</span>
          </div>
          <div className="p-2.5 rounded-xl bg-card/60 border border-border/40">
            <span className="text-muted-foreground block text-[11px]">Box 2 (3-Day Review)</span>
            <span className="text-lg font-black text-amber-400 block mt-0.5">{stats.box2} cards</span>
          </div>
          <div className="p-2.5 rounded-xl bg-card/60 border border-border/40">
            <span className="text-muted-foreground block text-[11px]">Box 3 (Weekly Review)</span>
            <span className="text-lg font-black text-indigo-400 block mt-0.5">{stats.box3} cards</span>
          </div>
          <div className="p-2.5 rounded-xl bg-card/60 border border-border/40">
            <span className="text-muted-foreground block text-[11px]">Box 4 (Mastered)</span>
            <span className="text-lg font-black text-emerald-400 block mt-0.5">{stats.box4} cards</span>
          </div>
          <div className="p-2.5 rounded-xl bg-card/60 border border-border/40 col-span-2 md:col-span-1">
            <span className="text-muted-foreground block text-[11px]">Mastery Rate</span>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-base font-black text-emerald-400">{stats.masteredPct}%</span>
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                  style={{ width: `${stats.masteredPct}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Flashcard Container */}
      {currentCard && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground px-1">
            <span>
              Card {currentIndex + 1} of {filteredCards.length}
            </span>
            <span className="font-mono">
              Current: Box {currentCard.box} ({currentCard.reps} reps)
            </span>
          </div>

          {/* Interactive Flip Card */}
          <div
            onClick={handleFlip}
            className="cursor-pointer min-h-[340px] md:min-h-[380px] p-6 md:p-10 rounded-3xl bg-card border-2 border-border/80 hover:border-indigo-500/50 shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Top Card Badges */}
            <div className="flex items-center justify-between gap-2 border-b border-border/60 pb-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-wider">
                  {currentCard.category}
                </span>
                {currentCard.subheading && (
                  <span className="text-xs text-muted-foreground font-semibold">
                    {currentCard.subheading}
                  </span>
                )}
              </div>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-muted text-muted-foreground">
                {isFlipped ? 'REVERSE / ANSWER' : 'FRONT / PROMPT'}
              </span>
            </div>

            {/* Front vs Back Content */}
            {!isFlipped ? (
              <div className="py-8 my-auto space-y-4 text-center">
                <h3 className="text-xl md:text-2xl font-black text-foreground leading-relaxed max-w-2xl mx-auto">
                  {currentCard.front}
                </h3>
                <p className="text-xs text-indigo-400 font-mono flex items-center justify-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  <span>Click card to reveal statutory rule & precedent</span>
                </p>
              </div>
            ) : (
              <div className="py-4 my-auto space-y-4 animate-in fade-in">
                <div className="space-y-2">
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-400 block">
                    Core Constitutional Rule:
                  </span>
                  <p className="text-base md:text-lg font-bold text-foreground leading-relaxed">
                    {currentCard.back.coreRule}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-muted/30 border border-border/60 space-y-1.5 text-xs md:text-sm text-foreground/90 leading-relaxed font-mono">
                  <span className="font-bold text-indigo-400 mr-2 font-sans">
                    Detailed Jurisprudence:
                  </span>
                  {currentCard.back.statutoryDetails}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
                  {currentCard.back.statutoryAnchor && (
                    <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-semibold font-mono">
                      Anchor: {currentCard.back.statutoryAnchor}
                    </span>
                  )}
                  {currentCard.back.precedentRef && (
                    <span className="px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300 font-semibold font-mono">
                      Precedent: {currentCard.back.precedentRef}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Card Footer */}
            <div className="pt-4 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground">
              <span>Press Space or Click to flip</span>
              <span className="text-[11px] font-mono">Box {currentCard.box} of 4</span>
            </div>
          </div>

          {/* Spaced Repetition Grading Controls */}
          {isFlipped ? (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 animate-in fade-in">
              <button
                onClick={() => handleGrade('again')}
                className="py-3 px-4 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/30 text-rose-300 font-bold text-xs transition-all flex flex-col items-center gap-1 shadow-sm"
              >
                <span>Again</span>
                <span className="text-[10px] font-normal text-rose-400/80 font-mono">&lt; 1 Day · Box 1</span>
              </button>

              <button
                onClick={() => handleGrade('hard')}
                className="py-3 px-4 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 font-bold text-xs transition-all flex flex-col items-center gap-1 shadow-sm"
              >
                <span>Hard</span>
                <span className="text-[10px] font-normal text-amber-400/80 font-mono">1 Day · Same Box</span>
              </button>

              <button
                onClick={() => handleGrade('good')}
                className="py-3 px-4 rounded-xl bg-indigo-500/15 hover:bg-indigo-500/25 border border-indigo-500/30 text-indigo-300 font-bold text-xs transition-all flex flex-col items-center gap-1 shadow-sm"
              >
                <span>Good</span>
                <span className="text-[10px] font-normal text-indigo-400/80 font-mono">3–7 Days · Box +1</span>
              </button>

              <button
                onClick={() => handleGrade('easy')}
                className="py-3 px-4 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 font-bold text-xs transition-all flex flex-col items-center gap-1 shadow-sm"
              >
                <span>Easy</span>
                <span className="text-[10px] font-normal text-emerald-400/80 font-mono">14+ Days · Master</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between gap-3 pt-2">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="px-4 py-2.5 rounded-xl border border-border text-xs font-semibold text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1.5 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous Card</span>
              </button>

              <button
                onClick={handleFlip}
                className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
              >
                <span>Flip to Reveal</span>
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleNext}
                disabled={currentIndex === filteredCards.length - 1}
                className="px-4 py-2.5 rounded-xl border border-border text-xs font-semibold text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1.5 transition-colors"
              >
                <span>Next Card</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
