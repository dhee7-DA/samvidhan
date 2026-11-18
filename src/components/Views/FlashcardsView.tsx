import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  RotateCcw,
  Award,
  CheckCircle2,
  Layers,
  BrainCircuit,
  ArrowRight,
  ArrowLeft,
  Zap,
  Clock,
  Flame,
  Volume2,
  VolumeX,
  ExternalLink,
  PlusCircle,
  Inbox,
  Search,
  X,
  Star,
  Shuffle,
  Lightbulb,
  Trash2,
  Sparkles,
  Filter
} from 'lucide-react';
import {
  getStoredFlashcards,
  reviewCard,
  resetFlashcards,
  syncMistakesToFlashcards,
  createCustomFlashcard,
  deleteCustomFlashcard,
  getSRSMetrics,
  type Flashcard,
  type FlashcardDeckType,
  type GradeQuality,
  type SRSMetrics
} from '../../services/flashcardService';
import { audioSynth } from '../../services/tileMatcherGameService';
import { useTheme } from '../../context/ThemeContext';

const PART_SORT_ORDER = [
  'Part I', 'Part II', 'Part III', 'Part IV', 'Part IVA', 'Part V', 'Part VI',
  'Part VII', 'Part VIII', 'Part IX', 'Part IXA', 'Part IXB', 'Part X', 'Part XI',
  'Part XII', 'Part XIII', 'Part XIV', 'Part XIVA', 'Part XV', 'Part XVI',
  'Part XVII', 'Part XVIII', 'Part XIX', 'Part XX', 'Part XXI', 'Part XXII'
];

export const FlashcardsView: React.FC = () => {
  const {
    setActiveTab,
    activeFlashcardDeck,
    setActiveFlashcardDeck,
    activeFlashcardFilter,
    setActiveFlashcardFilter,
    activeFlashcardCardId,
    clearFlashcardFocusCard,
    pinnedFlashcardIds,
    togglePinFlashcard
  } = useTheme();

  // State
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [selectedBox, setSelectedBox] = useState<number | 'all'>('all');
  const [onlyDueToday, setOnlyDueToday] = useState<boolean>(false);
  const [onlyPriority, setOnlyPriority] = useState<boolean>(false);
  const [onlyPinned, setOnlyPinned] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showEli5, setShowEli5] = useState<boolean>(true);
  const [shuffleSeed, setShuffleSeed] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [srsMetrics, setSrsMetrics] = useState<SRSMetrics>({ totalReviews: 0, lastReviewDate: '', streakDays: 0 });
  const [syncToast, setSyncToast] = useState<string | null>(null);

  // Custom Card Modal State
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const [customFront, setCustomFront] = useState<string>('');
  const [customRule, setCustomRule] = useState<string>('');
  const [customDetails, setCustomDetails] = useState<string>('');
  const [customPlainEnglish, setCustomPlainEnglish] = useState<string>('');
  const [customAnchor, setCustomAnchor] = useState<string>('');
  const [customDeck, setCustomDeck] = useState<FlashcardDeckType>('articles');

  const selectedDeck = activeFlashcardDeck;
  const subFilter = activeFlashcardFilter;

  const showToast = useCallback((msg: string) => {
    setSyncToast(msg);
    setTimeout(() => setSyncToast(null), 3500);
  }, []);

  // Load cards and metrics
  const loadCardsAndMetrics = useCallback(() => {
    setCards(getStoredFlashcards());
    setSrsMetrics(getSRSMetrics());
  }, []);

  useEffect(() => {
    loadCardsAndMetrics();
  }, [loadCardsAndMetrics, pinnedFlashcardIds]);

  // Reset card index when deck or filters change (unless focusing a specific card)
  useEffect(() => {
    if (!activeFlashcardCardId) {
      setCurrentIndex(0);
      setIsFlipped(false);
    }
  }, [selectedDeck, subFilter, selectedBox, onlyDueToday, onlyPriority, onlyPinned, searchQuery, activeFlashcardCardId]);

  // Dynamic sub-filter options based on active deck
  const availableSubFilters = useMemo(() => {
    if (selectedDeck === 'all' || selectedDeck === 'schedules' || selectedDeck === 'doctrines' || selectedDeck === 'mistakes') {
      return [];
    }
    const tags = new Set<string>();
    cards.forEach((c) => {
      if (c.deck === selectedDeck && c.partTag) {
        tags.add(c.partTag);
      }
    });
    const arr = Array.from(tags);
    if (selectedDeck === 'articles') {
      return arr.sort((a, b) => {
        const ia = PART_SORT_ORDER.indexOf(a);
        const ib = PART_SORT_ORDER.indexOf(b);
        if (ia !== -1 && ib !== -1) return ia - ib;
        if (ia !== -1) return -1;
        if (ib !== -1) return 1;
        return a.localeCompare(b);
      });
    }
    if (selectedDeck === 'bootcamp') {
      return arr.sort((a, b) => {
        const na = Number(a.replace(/\D/g, '')) || 0;
        const nb = Number(b.replace(/\D/g, '')) || 0;
        return na - nb;
      });
    }
    return arr.sort((a, b) => a.localeCompare(b));
  }, [cards, selectedDeck]);

  const now = Date.now();

  // Filtered card queue
  const filteredCards = useMemo(() => {
    let list = cards;

    if (selectedDeck !== 'all') {
      list = list.filter((c) => c.deck === selectedDeck);
    }

    if (subFilter && subFilter !== 'all') {
      if (subFilter === 'high-yield') {
        list = list.filter((c) => c.isPriority);
      } else if (subFilter === 'pinned') {
        list = list.filter((c) => c.pinned);
      } else {
        const normalizedSub = subFilter.toLowerCase();
        list = list.filter(
          (c) =>
            (c.partTag && c.partTag.toLowerCase() === normalizedSub) ||
            c.category.toLowerCase() === normalizedSub
        );
      }
    }

    if (onlyPriority) {
      list = list.filter((c) => c.isPriority);
    }

    if (onlyPinned) {
      list = list.filter((c) => c.pinned);
    }

    if (selectedBox !== 'all') {
      list = list.filter((c) => c.box === selectedBox);
    }

    if (onlyDueToday) {
      list = list.filter((c) => !c.lastReviewed || c.nextReview <= now);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (c) =>
          c.front.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q) ||
          (c.subheading && c.subheading.toLowerCase().includes(q)) ||
          (c.partTag && c.partTag.toLowerCase().includes(q)) ||
          c.back.coreRule.toLowerCase().includes(q) ||
          c.back.statutoryDetails.toLowerCase().includes(q) ||
          (c.back.plainEnglish && c.back.plainEnglish.toLowerCase().includes(q)) ||
          (c.back.statutoryAnchor && c.back.statutoryAnchor.toLowerCase().includes(q))
      );
    }

    if (shuffleSeed > 0) {
      const copy = [...list];
      let seed = shuffleSeed;
      for (let i = copy.length - 1; i > 0; i--) {
        seed = (seed * 9301 + 49297) % 233280;
        const j = seed % (i + 1);
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    }

    return list;
  }, [cards, selectedDeck, subFilter, onlyPriority, onlyPinned, selectedBox, onlyDueToday, searchQuery, shuffleSeed, now]);

  // Handle deep-link jump to a specific card ID when launched from any view
  useEffect(() => {
    if (!activeFlashcardCardId || filteredCards.length === 0) return;
    const idx = filteredCards.findIndex((c) => c.id === activeFlashcardCardId);
    if (idx !== -1) {
      setCurrentIndex(idx);
      setIsFlipped(false);
      clearFlashcardFocusCard();
    } else if (onlyDueToday || selectedBox !== 'all' || onlyPriority || onlyPinned) {
      // Relax filters so the target card becomes visible
      setOnlyDueToday(false);
      setSelectedBox('all');
      setOnlyPriority(false);
      setOnlyPinned(false);
    }
  }, [activeFlashcardCardId, filteredCards, clearFlashcardFocusCard, onlyDueToday, selectedBox, onlyPriority, onlyPinned]);

  const safeIndex = filteredCards.length > 0 ? Math.min(currentIndex, filteredCards.length - 1) : 0;
  const currentCard: Flashcard | null = filteredCards[safeIndex] || null;

  // Box Stats across active deck (or all cards)
  const stats = useMemo(() => {
    const scope = selectedDeck === 'all' ? cards : cards.filter((c) => c.deck === selectedDeck);
    const total = scope.length;
    const dueCount = scope.filter((c) => !c.lastReviewed || c.nextReview <= now).length;
    const box1 = scope.filter((c) => c.box === 1).length;
    const box2 = scope.filter((c) => c.box === 2).length;
    const box3 = scope.filter((c) => c.box === 3).length;
    const box4 = scope.filter((c) => c.box === 4).length;
    const box5 = scope.filter((c) => c.box === 5).length;
    const reviewed = scope.filter((c) => c.reps > 0).length;
    const pinned = cards.filter((c) => c.pinned).length;
    const masteredPct = total > 0 ? Math.round((box5 / total) * 100) : 0;

    return { total, allTotal: cards.length, dueCount, box1, box2, box3, box4, box5, reviewed, pinned, masteredPct };
  }, [cards, selectedDeck, now]);

  // Deck counts
  const deckCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: cards.length,
      articles: 0,
      cases: 0,
      schedules: 0,
      doctrines: 0,
      amendments: 0,
      maxims: 0,
      bootcamp: 0,
      mistakes: 0,
    };
    cards.forEach((c) => {
      counts[c.deck] = (counts[c.deck] || 0) + 1;
    });
    return counts;
  }, [cards]);

  // Handle Flip
  const handleFlip = useCallback(() => {
    setIsFlipped((prev) => !prev);
  }, []);

  // Handle Grade
  const handleGrade = useCallback(
    (grade: GradeQuality) => {
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

      if (safeIndex < filteredCards.length - 1) {
        setCurrentIndex(safeIndex + 1);
      } else {
        setCurrentIndex(0);
      }
    },
    [currentCard, filteredCards.length, safeIndex, soundEnabled]
  );

  const handleNext = useCallback(() => {
    if (safeIndex < filteredCards.length - 1) {
      setCurrentIndex(safeIndex + 1);
      setIsFlipped(false);
    }
  }, [safeIndex, filteredCards.length]);

  const handlePrev = useCallback(() => {
    if (safeIndex > 0) {
      setCurrentIndex(safeIndex - 1);
      setIsFlipped(false);
    }
  }, [safeIndex]);

  // Keyboard Navigation Handler
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (showCreateModal) return;
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) return;

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
  }, [handleFlip, handleGrade, handleNext, handlePrev, isFlipped, showCreateModal]);

  const handleReset = () => {
    if (window.confirm('Reset all Leitner box progress back to Box 1 (Daily Learning)? Your pinned & custom cards will be preserved.')) {
      const reset = resetFlashcards();
      setCards(reset);
      setCurrentIndex(0);
      setIsFlipped(false);
      showToast('All Leitner box progress reset to Box 1.');
    }
  };

  const handleSyncMistakes = () => {
    const res = syncMistakesToFlashcards();
    setCards(res.cards);
    if (res.addedCount > 0) {
      showToast(`Synced ${res.addedCount} mistake question(s) into Box 1!`);
      setActiveFlashcardDeck('mistakes');
      setActiveFlashcardFilter('all');
    } else {
      showToast('All unmastered Mistakes Bank errors are already live in your SRS deck.');
    }
  };

  const handlePinCurrent = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!currentCard) return;
    const isNowPinned = togglePinFlashcard(currentCard.id);
    setCards(getStoredFlashcards());
    showToast(isNowPinned ? 'Pinned to your SRS Focus Queue!' : 'Removed from Pinned Focus Queue.');
  };

  const handleDeleteCustom = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!currentCard?.isCustom) return;
    if (window.confirm('Delete this personal custom flashcard?')) {
      setCards(deleteCustomFlashcard(currentCard.id));
      setIsFlipped(false);
      showToast('Deleted personal flashcard.');
    }
  };

  const handleCreateCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customFront.trim() || !customRule.trim()) return;
    const updated = createCustomFlashcard({
      front: customFront,
      coreRule: customRule,
      statutoryDetails: customDetails,
      plainEnglish: customPlainEnglish,
      statutoryAnchor: customAnchor,
      deck: customDeck,
    });
    setCards(updated);
    setCustomFront('');
    setCustomRule('');
    setCustomDetails('');
    setCustomPlainEnglish('');
    setCustomAnchor('');
    setShowCreateModal(false);
    setActiveFlashcardDeck(customDeck);
    setActiveFlashcardFilter('all');
    setOnlyPinned(true);
    setCurrentIndex(0);
    setIsFlipped(false);
    showToast('Created and pinned your custom SRS flashcard!');
  };

  const handleAnchorJump = (card: Flashcard) => {
    if (card.deck === 'cases') {
      setActiveTab('judgments');
    } else if (card.deck === 'schedules') {
      setActiveTab('schedules');
    } else if (card.deck === 'doctrines') {
      setActiveTab('doctrines');
    } else if (card.deck === 'amendments') {
      setActiveTab('amendments');
    } else if (card.deck === 'maxims') {
      setActiveTab('dictionary');
    } else if (card.deck === 'bootcamp') {
      setActiveTab('bootcamp');
    } else if (card.deck === 'mistakes') {
      setActiveTab('mistakes-notebook');
    } else {
      setActiveTab('articles-master');
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6 animate-fadeIn">
      {/* Toast Notification */}
      {syncToast && (
        <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center justify-between shadow-lg animate-fadeIn">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{syncToast}</span>
          </div>
          <button onClick={() => setSyncToast(null)} className="text-emerald-400 font-bold hover:opacity-80">
            &times;
          </button>
        </div>
      )}

      {/* Top Banner */}
      <div className="p-5 sm:p-7 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] text-[var(--accent)] text-xs font-mono font-bold uppercase tracking-wider mb-2 border border-[var(--badge-border)]">
              <BrainCircuit className="w-3.5 h-3.5" />
              <span>App-Wide 5-Box Leitner SRS Engine · {stats.allTotal} Cards</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Constitutional Spaced Flashcards
            </h1>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1 max-w-2xl leading-relaxed">
              Full syllabus coverage across all 505 Bare Act Articles, 136 Landmark Precedents, 12 Schedules, 10 Doctrines, 20 Amendments, 215 Legal Dictionary Terms, all 15 Bootcamp Days, and your Mistakes Bank.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setShowCreateModal((prev) => !prev)}
              className="px-3.5 py-2 rounded-xl bg-[var(--accent)] text-[var(--accent-contrast)] hover:opacity-90 text-xs font-mono font-bold transition-all flex items-center gap-1.5 shadow-sm btn-tactile"
              title="Add a personal flashcard to your SRS deck"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>New Card</span>
            </button>

            <button
              onClick={handleSyncMistakes}
              className="px-3.5 py-2 rounded-xl bg-[var(--badge-bg)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)] border border-[var(--badge-border)] text-xs font-mono font-bold transition-all flex items-center gap-1.5 shadow-sm"
              title="Import missed questions from the Mistakes Bank directly into Box 1"
            >
              <Inbox className="w-3.5 h-3.5" />
              <span>Sync Mistakes</span>
            </button>

            <button
              onClick={() => setSoundEnabled((prev) => !prev)}
              className="p-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              title={soundEnabled ? 'Mute Sound Synthesizer' : 'Enable Sound Synthesizer'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-[var(--accent)]" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={handleReset}
              className="p-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-base)] text-[var(--text-muted)] hover:text-red-400 hover:border-red-500/30 text-xs flex items-center gap-1.5 transition-colors"
              title="Reset Leitner box progress back to Box 1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset</span>
            </button>
          </div>
        </div>

        {/* Inline Create Custom Flashcard Form */}
        {showCreateModal && (
          <form
            onSubmit={handleCreateCustomSubmit}
            className="p-5 rounded-2xl bg-[var(--bg-base)] border border-[var(--accent)]/50 space-y-3 animate-fadeIn"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--accent)] uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Create Personal SRS Flashcard</span>
              </div>
              <button
                type="button"
                onClick={() => setShowCreateModal(false)}
                className="text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[11px] font-mono text-[var(--text-muted)]">Front / Question Prompt *</label>
                <input
                  type="text"
                  required
                  value={customFront}
                  onChange={(e) => setCustomFront(e.target.value)}
                  placeholder="e.g., What are the 4 tests of Proportionality in Puttaswamy?"
                  className="w-full px-3 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-[var(--text-muted)]">Target Deck</label>
                  <select
                    value={customDeck}
                    onChange={(e) => setCustomDeck(e.target.value as FlashcardDeckType)}
                    className="w-full px-3 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:outline-none"
                  >
                    <option value="articles">Articles</option>
                    <option value="cases">Precedents</option>
                    <option value="schedules">Schedules</option>
                    <option value="doctrines">Doctrines</option>
                    <option value="amendments">Amendments</option>
                    <option value="maxims">Dictionary & Maxims</option>
                    <option value="bootcamp">Bootcamp</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-[var(--text-muted)]">Article / Case Anchor</label>
                  <input
                    type="text"
                    value={customAnchor}
                    onChange={(e) => setCustomAnchor(e.target.value)}
                    placeholder="e.g., Article 21"
                    className="w-full px-3 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[11px] font-mono text-[var(--text-muted)]">Back / Core Rule & Answer *</label>
                <textarea
                  required
                  rows={2}
                  value={customRule}
                  onChange={(e) => setCustomRule(e.target.value)}
                  placeholder="Core statutory rule or binding answer..."
                  className="w-full px-3 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] font-mono text-[var(--text-muted)]">Plain-English / Mnemonic Hint (Optional)</label>
                <textarea
                  rows={2}
                  value={customPlainEnglish}
                  onChange={(e) => setCustomPlainEnglish(e.target.value)}
                  placeholder="Simple analogy or memory trick..."
                  className="w-full px-3 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:outline-none"
                />
              </div>
            </div>
            <div className="flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowCreateModal(false)}
                className="px-3 py-1.5 rounded-lg text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 rounded-lg bg-[var(--accent)] text-[var(--accent-contrast)] text-xs font-mono font-bold hover:opacity-90"
              >
                Save & Pin Card
              </button>
            </div>
          </form>
        )}

        {/* Live SRS Metrics Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[var(--border-subtle)] text-xs font-mono">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-amber-500 font-bold">
              <Flame className="w-4 h-4 fill-current" />
              <span>{srsMetrics.streakDays}-Day Streak</span>
            </span>
            <span className="text-[var(--text-muted)]">|</span>
            <span className="text-[var(--text-secondary)]">
              {srsMetrics.totalReviews} Reviews · {stats.reviewed} Cards Studied
            </span>
            {stats.pinned > 0 && (
              <>
                <span className="text-[var(--text-muted)]">|</span>
                <button
                  onClick={() => {
                    setOnlyPinned((prev) => !prev);
                    setActiveFlashcardDeck('all');
                    setActiveFlashcardFilter('all');
                  }}
                  className={`flex items-center gap-1 font-bold transition-colors ${
                    onlyPinned ? 'text-amber-400 underline' : 'text-[var(--accent)] hover:underline'
                  }`}
                >
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{stats.pinned} Pinned Across App</span>
                </button>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[var(--text-muted)]">Deck Mastery:</span>
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-1">
          {[
            { box: 1, name: 'Box 1: Daily Learning', interval: '1 Day', count: stats.box1, color: 'text-rose-400', bg: 'bg-rose-500/10' },
            { box: 2, name: 'Box 2: 3-Day Retention', interval: '3 Days', count: stats.box2, color: 'text-amber-400', bg: 'bg-amber-500/10' },
            { box: 3, name: 'Box 3: Weekly Anchor', interval: '7 Days', count: stats.box3, color: 'text-sky-400', bg: 'bg-sky-500/10' },
            { box: 4, name: 'Box 4: Fortnightly Solid', interval: '14 Days', count: stats.box4, color: 'text-purple-400', bg: 'bg-purple-500/10' },
            { box: 5, name: 'Box 5: Permanent Synapse', interval: '30+ Days', count: stats.box5, color: 'text-emerald-400', bg: 'bg-emerald-500/10' }
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
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${b.bg} ${b.color}`}>
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

        {/* Deck Selector Tabs */}
        <div className="flex flex-col gap-3 pt-3 border-t border-[var(--border-subtle)]">
          <div className="flex items-center gap-1.5 flex-wrap">
            {[
              { id: 'all', label: 'All Decks', count: deckCounts.all },
              { id: 'articles', label: 'Bare Act Articles', count: deckCounts.articles },
              { id: 'cases', label: 'Landmark Cases', count: deckCounts.cases },
              { id: 'schedules', label: '12 Schedules', count: deckCounts.schedules },
              { id: 'doctrines', label: '10 Doctrines', count: deckCounts.doctrines },
              { id: 'amendments', label: 'Amendments', count: deckCounts.amendments },
              { id: 'maxims', label: 'Dictionary & Maxims', count: deckCounts.maxims },
              { id: 'bootcamp', label: '15-Day Bootcamp', count: deckCounts.bootcamp },
              { id: 'mistakes', label: 'Mistakes Bank', count: deckCounts.mistakes }
            ].map((d) => (
              <button
                key={d.id}
                onClick={() => {
                  setActiveFlashcardDeck(d.id as FlashcardDeckType | 'all');
                  setActiveFlashcardFilter('all');
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
                <span
                  className={`ml-1.5 text-[10px] px-1.5 py-0.5 rounded font-mono ${
                    selectedDeck === d.id ? 'bg-black/20 text-white' : 'bg-[var(--badge-bg)] text-[var(--text-muted)]'
                  }`}
                >
                  {d.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search, Scope Toggles & Shuffle Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2.5">
            {/* Search */}
            <div className="relative flex-1 min-w-[220px]">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search across all articles, cases, doctrines, schedules, maxims..."
                className="w-full pl-8 pr-8 py-2 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Study Mode Toggles */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <button
                onClick={() => setOnlyDueToday((prev) => !prev)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 border transition-all ${
                  onlyDueToday
                    ? 'bg-[var(--accent)] text-[var(--accent-contrast)] border-[var(--accent)]'
                    : 'bg-[var(--bg-base)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>Due Only ({stats.dueCount})</span>
              </button>

              <button
                onClick={() => setOnlyPriority((prev) => !prev)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 border transition-all ${
                  onlyPriority
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                    : 'bg-[var(--bg-base)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
                }`}
                title="Focus on flagship / high-yield exam cards"
              >
                <Zap className="w-3.5 h-3.5" />
                <span>High-Yield</span>
              </button>

              <button
                onClick={() => setOnlyPinned((prev) => !prev)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 border transition-all ${
                  onlyPinned
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                    : 'bg-[var(--bg-base)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
                }`}
                title="Show only cards you pinned from across the app"
              >
                <Star className={`w-3.5 h-3.5 ${onlyPinned ? 'fill-current' : ''}`} />
                <span>Pinned ({stats.pinned})</span>
              </button>

              <button
                onClick={() => setShowEli5((prev) => !prev)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 border transition-all ${
                  showEli5
                    ? 'bg-sky-500/20 text-sky-300 border-sky-500/40'
                    : 'bg-[var(--bg-base)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
                }`}
                title="Show plain-English ELI5 explanation & real-world examples on the back of cards"
              >
                <Lightbulb className="w-3.5 h-3.5" />
                <span>ELI5</span>
              </button>

              <button
                onClick={() => {
                  setShuffleSeed((prev) => (prev === 0 ? Date.now() % 100000 : 0));
                  setCurrentIndex(0);
                  setIsFlipped(false);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 border transition-all ${
                  shuffleSeed > 0
                    ? 'bg-purple-500/20 text-purple-300 border-purple-500/40'
                    : 'bg-[var(--bg-base)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
                }`}
                title="Shuffle current card queue"
              >
                <Shuffle className="w-3.5 h-3.5" />
                <span>{shuffleSeed > 0 ? 'Shuffled' : 'Shuffle'}</span>
              </button>
            </div>
          </div>

          {/* Context-Sensitive Sub-Filter Strip (Parts I–XXII / 20 Case Clusters / Dictionary Categories / Bootcamp Days 1–15) */}
          {availableSubFilters.length > 0 && (
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 border-t border-[var(--border-subtle)]/50">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1 shrink-0 mr-1">
                <Filter className="w-3 h-3" />
                <span>Filter:</span>
              </span>
              <button
                onClick={() => setActiveFlashcardFilter('all')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono shrink-0 transition-all border ${
                  subFilter === 'all'
                    ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold border-[var(--accent)]'
                    : 'bg-[var(--bg-base)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
                }`}
              >
                All ({deckCounts[selectedDeck]})
              </button>
              {availableSubFilters.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveFlashcardFilter(tag)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-mono shrink-0 transition-all border ${
                    subFilter.toLowerCase() === tag.toLowerCase()
                      ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold border-[var(--accent)]'
                      : 'bg-[var(--bg-base)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Flashcard Container */}
      {currentCard ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] px-1 flex-wrap gap-2">
            <span className="flex items-center gap-2 flex-wrap">
              <span className="font-bold text-[var(--text-primary)]">
                Card {safeIndex + 1} of {filteredCards.length}
              </span>
              {subFilter !== 'all' && (
                <span className="px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
                  {subFilter}
                </span>
              )}
              {selectedBox !== 'all' && (
                <span className="px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--accent)]">
                  Box {selectedBox}
                </span>
              )}
              {currentCard.isPriority && (
                <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[10px]">
                  High-Yield
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
            className="cursor-pointer min-h-[360px] md:min-h-[410px] p-6 md:p-10 rounded-3xl bg-[var(--bg-surface)] border-2 border-[var(--border-subtle)] hover:border-[var(--accent)] shadow-xl transition-all duration-200 flex flex-col justify-between group relative select-none"
          >
            {/* Top Card Badges + Pin Action */}
            <div className="flex items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-4 flex-wrap">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent)] text-xs font-mono font-bold uppercase tracking-wider">
                  {currentCard.category}
                </span>
                {currentCard.partTag && currentCard.partTag !== currentCard.category && (
                  <span className="px-2.5 py-0.5 rounded-full bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-secondary)]">
                    {currentCard.partTag}
                  </span>
                )}
                {currentCard.subheading && (
                  <span className="text-xs text-[var(--text-muted)] font-mono">
                    {currentCard.subheading}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePinCurrent}
                  className={`px-2.5 py-1 rounded-lg border text-xs font-mono font-bold flex items-center gap-1 transition-all ${
                    currentCard.pinned
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                      : 'bg-[var(--bg-base)] text-[var(--text-muted)] border-[var(--border-subtle)] hover:text-amber-400'
                  }`}
                  title={currentCard.pinned ? 'Unpin from SRS Focus Queue' : 'Pin to SRS Focus Queue'}
                >
                  <Star className={`w-3.5 h-3.5 ${currentCard.pinned ? 'fill-current' : ''}`} />
                  <span className="hidden sm:inline">{currentCard.pinned ? 'Pinned' : 'Pin'}</span>
                </button>

                {currentCard.isCustom && (
                  <button
                    onClick={handleDeleteCustom}
                    className="p-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-base)] text-[var(--text-muted)] hover:text-rose-400 hover:border-rose-500/40"
                    title="Delete personal card"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}

                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                  {isFlipped ? 'REVERSE / RATIO' : 'FRONT / PROMPT'}
                </span>
              </div>
            </div>

            {/* Front vs Back Content */}
            {!isFlipped ? (
              <div className="py-10 my-auto space-y-4 text-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[var(--text-primary)] leading-relaxed max-w-3xl mx-auto">
                  {currentCard.front}
                </h3>
                <p className="text-xs text-[var(--accent)] font-mono flex items-center justify-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  <span>Click card or press [Space] to reveal statutory rule, ELI5 breakdown & precedent</span>
                </p>
              </div>
            ) : (
              <div className="py-6 my-auto space-y-4 animate-fadeIn">
                <div className="space-y-1.5">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 block">
                    Core Constitutional Rule & Principle:
                  </span>
                  <p className="text-base sm:text-lg md:text-xl font-bold text-[var(--text-primary)] leading-relaxed">
                    {currentCard.back.coreRule}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1.5 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                  <span className="font-bold text-[var(--accent)] mr-2 font-mono uppercase text-[11px] block sm:inline">
                    Detailed Jurisprudence:
                  </span>
                  {currentCard.back.statutoryDetails}
                </div>

                {/* Plain-English ELI5 & Real-World Scenario Panel */}
                {showEli5 && (currentCard.back.plainEnglish || currentCard.back.realWorldExample) && (
                  <div className="p-4 rounded-xl bg-sky-500/10 border border-sky-500/30 space-y-2 text-xs sm:text-sm leading-relaxed">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-sky-400">
                      <Lightbulb className="w-3.5 h-3.5" />
                      <span>Plain-English ELI5 & Real-World Analogy</span>
                    </div>
                    {currentCard.back.plainEnglish && (
                      <p className="text-[var(--text-primary)]">{currentCard.back.plainEnglish}</p>
                    )}
                    {currentCard.back.realWorldExample && (
                      <p className="text-[var(--text-secondary)] italic border-t border-sky-500/20 pt-2">
                        {currentCard.back.realWorldExample}
                      </p>
                    )}
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono">
                  {currentCard.back.statutoryAnchor && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAnchorJump(currentCard);
                      }}
                      className="px-3 py-1 rounded-lg bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent)] hover:opacity-80 flex items-center gap-1.5 transition-all"
                      title="Jump directly to source module"
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
                      className="px-3 py-1 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-[var(--text-primary)] hover:text-[var(--accent)] flex items-center gap-1.5 transition-all btn-tactile shadow-sm"
                      title="Open in Landmark Precedents Lab"
                    >
                      <Award className="w-3.5 h-3.5 text-[var(--gold)]" />
                      <span>Ref: {currentCard.back.precedentRef}</span>
                      <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Card Footer */}
            <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
              <span>{isFlipped ? 'Grade recall using buttons below (or keys 1–4)' : 'Press Space to flip · ← / → to browse'}</span>
              <span>Leitner Box {currentCard.box} / 5</span>
            </div>
          </div>

          {/* Spaced Repetition Grading Controls */}
          {isFlipped ? (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 animate-fadeIn">
              <button
                onClick={() => handleGrade('again')}
                className="py-3.5 px-4 rounded-2xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/30 text-rose-400 font-bold text-xs font-mono transition-all flex flex-col items-center gap-1 shadow-sm btn-tactile"
              >
                <span>[1] Again</span>
                <span className="text-[10px] font-normal opacity-80">Lapse · Reset to Box 1</span>
              </button>

              <button
                onClick={() => handleGrade('hard')}
                className="py-3.5 px-4 rounded-2xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-400 font-bold text-xs font-mono transition-all flex flex-col items-center gap-1 shadow-sm btn-tactile"
              >
                <span>[2] Hard</span>
                <span className="text-[10px] font-normal opacity-80">1 Day · Same Box</span>
              </button>

              <button
                onClick={() => handleGrade('good')}
                className="py-3.5 px-4 rounded-2xl bg-sky-500/15 hover:bg-sky-500/25 border border-sky-500/30 text-sky-400 font-bold text-xs font-mono transition-all flex flex-col items-center gap-1 shadow-sm btn-tactile"
              >
                <span>[3] Good</span>
                <span className="text-[10px] font-normal opacity-80">3–14 Days · Box +1</span>
              </button>

              <button
                onClick={() => handleGrade('easy')}
                className="py-3.5 px-4 rounded-2xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-400 font-bold text-xs font-mono transition-all flex flex-col items-center gap-1 shadow-sm btn-tactile"
              >
                <span>[4] Easy</span>
                <span className="text-[10px] font-normal opacity-80">21–35 Days · Fast Track</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between gap-3 pt-2">
              <button
                onClick={handlePrev}
                disabled={safeIndex === 0}
                className="px-4 py-2.5 rounded-xl border border-[var(--border-subtle)] text-xs font-mono font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1.5 transition-colors btn-tactile"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Prev</span>
              </button>

              <button
                onClick={handleFlip}
                className="px-6 py-2.5 rounded-xl bg-[var(--accent)] hover:opacity-90 text-[var(--accent-contrast)] font-bold text-xs font-mono shadow-md transition-all flex items-center gap-2 btn-tactile"
              >
                <span>Flip to Reveal</span>
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleNext}
                disabled={safeIndex === filteredCards.length - 1}
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
              {onlyDueToday ? 'All Due Cards Cleared in This View!' : 'No Cards Match Your Current Filters'}
            </h3>
            <p className="text-xs text-[var(--text-secondary)] max-w-md mx-auto mt-1">
              {onlyDueToday
                ? 'Every due card in this selection has been reviewed and scheduled into higher Leitner boxes.'
                : 'Clear your search query, box filter, or pinned filter to browse the full constitutional catalog.'}
            </p>
          </div>
          <div className="flex items-center justify-center gap-3 flex-wrap pt-2">
            <button
              onClick={() => {
                setOnlyDueToday(false);
                setSelectedBox('all');
                setOnlyPriority(false);
                setOnlyPinned(false);
                setSearchQuery('');
                setActiveFlashcardFilter('all');
              }}
              className="px-5 py-2.5 rounded-xl bg-[var(--accent)] text-[var(--accent-contrast)] font-mono text-xs font-bold transition-all shadow-md"
            >
              Reset All Filters ({stats.total} Cards)
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
