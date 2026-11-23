import React, { useState, useEffect, useMemo } from 'react';
import {
  Puzzle,
  RotateCcw,
  Shuffle,
  Volume2,
  VolumeX,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Award,
  Share2,
  BookOpen,
  Calendar,
  Layers,
  HelpCircle
} from 'lucide-react';
import {
  CONNECTIONS_PUZZLES,
  getTodayConnectionsPuzzle,
  getRandomConnectionsPuzzle,
  type ConnectionsPuzzle,
  type ConnectionCategory
} from '../../../data/constitutionalConnectionsData';
import { arcadeAudio } from '../../../services/arcadeAudioService';
import { recordConnectionsResult } from '../../../services/judicialCareerService';

interface ConstitutionalConnectionsGameProps {
  onAwardResult: (gainedXP: number, leveledUp: boolean, newBadges: string[]) => void;
}

export const ConstitutionalConnectionsGame: React.FC<ConstitutionalConnectionsGameProps> = ({
  onAwardResult
}) => {
  const [gameMode, setGameMode] = useState<'daily' | 'practice'>('daily');
  const [activePuzzle, setActivePuzzle] = useState<ConnectionsPuzzle>(() => getTodayConnectionsPuzzle());

  // Solved category IDs
  const [solvedCategoryIds, setSolvedCategoryIds] = useState<string[]>([]);

  // Selected tile texts (up to 4)
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  // Mistakes remaining (starts at 4)
  const [mistakesRemaining, setMistakesRemaining] = useState<number>(4);

  // Guess history for emoji sharing
  const [guessHistory, setGuessHistory] = useState<string[][]>([]);

  // Notification Banner
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedShare, setCopiedShare] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(arcadeAudio.isMuted());

  // Shuffled active tiles
  const [shuffledTiles, setShuffledTiles] = useState<string[]>([]);

  const toggleMute = () => {
    arcadeAudio.setMuted(!isMuted);
    setIsMuted(!isMuted);
  };

  // Initialize or reset puzzle tiles
  const initializePuzzle = (puzzle: ConnectionsPuzzle) => {
    setActivePuzzle(puzzle);
    setSolvedCategoryIds([]);
    setSelectedItems([]);
    setMistakesRemaining(4);
    setGuessHistory([]);
    setToastMessage(null);
    setCopiedShare(false);

    // Collect all 16 items and shuffle
    const allItems: string[] = [];
    puzzle.categories.forEach((cat) => {
      cat.items.forEach((item) => allItems.push(item));
    });

    setShuffledTiles(shuffleArray(allItems));
    arcadeAudio.playGavel();
  };

  useEffect(() => {
    initializePuzzle(gameMode === 'daily' ? getTodayConnectionsPuzzle() : getRandomConnectionsPuzzle());
  }, [gameMode]);

  function shuffleArray<T>(array: T[]): T[] {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Handle tile click
  const handleToggleSelect = (item: string) => {
    if (mistakesRemaining <= 0 || solvedCategoryIds.length === 4) return;

    if (selectedItems.includes(item)) {
      setSelectedItems((prev) => prev.filter((i) => i !== item));
    } else {
      if (selectedItems.length >= 4) return;
      setSelectedItems((prev) => [...prev, item]);
      arcadeAudio.playStamp();
    }
  };

  const handleShuffleUnsolved = () => {
    setShuffledTiles((prev) => shuffleArray(prev));
    arcadeAudio.playStamp();
  };

  const handleDeselectAll = () => {
    setSelectedItems([]);
  };

  // Submit 4 selected tiles
  const handleSubmitGuess = () => {
    if (selectedItems.length !== 4) return;

    // Track guess for shareable grid
    setGuessHistory((prev) => [...prev, selectedItems]);

    // Check if the 4 selected items match any unsolved category exactly
    let matchedCategory: ConnectionCategory | null = null;
    let maxOverlap = 0;

    activePuzzle.categories.forEach((cat) => {
      if (!solvedCategoryIds.includes(cat.id)) {
        const overlapCount = selectedItems.filter((i) => cat.items.includes(i)).length;
        if (overlapCount === 4) {
          matchedCategory = cat;
        }
        if (overlapCount > maxOverlap) {
          maxOverlap = overlapCount;
        }
      }
    });

    if (matchedCategory) {
      // Correct Grouping!
      const cat = matchedCategory as ConnectionCategory;
      const newSolved = [...solvedCategoryIds, cat.id];
      setSolvedCategoryIds(newSolved);
      setSelectedItems([]);

      // Remove solved items from shuffled list
      setShuffledTiles((prev) => prev.filter((i) => !cat.items.includes(i)));

      if (newSolved.length === 4) {
        // Complete Victory!
        arcadeAudio.playFanfare();
        setToastMessage('🎉 BRAVO! You solved all 4 Constitutional Connections!');
        const res = recordConnectionsResult(mistakesRemaining, true);
        onAwardResult(
          res.gainedXP,
          res.leveledUp,
          res.newBadges.map((b) => b.title)
        );
      } else {
        arcadeAudio.playCorrect(3);
        setToastMessage(`Correct: ${cat.title}!`);
      }
    } else {
      // Incorrect Grouping
      arcadeAudio.playWrong();
      const newMistakes = mistakesRemaining - 1;
      setMistakesRemaining(newMistakes);

      if (maxOverlap === 3) {
        setToastMessage('One away... (3 out of 4 are correct!)');
      } else {
        setToastMessage('Incorrect grouping. Re-examine the constitutional threads.');
      }

      if (newMistakes <= 0) {
        // Game Over - Auto Reveal
        setToastMessage('Game Over! The 4 constitutional connections are revealed below.');
        setSolvedCategoryIds(activePuzzle.categories.map((c) => c.id));
        setShuffledTiles([]);
        const res = recordConnectionsResult(0, false);
        onAwardResult(
          res.gainedXP,
          res.leveledUp,
          res.newBadges.map((b) => b.title)
        );
      }
    }
  };

  // Generate shareable emoji grid
  const generateShareText = () => {
    const isWon = solvedCategoryIds.length === 4 && mistakesRemaining > 0;
    const title = `🧩 Constitutional Connections (${
      gameMode === 'daily' ? 'Daily' : 'Practice'
    }) ${isWon ? `${4 - mistakesRemaining}/4 Mistakes` : 'Failed'}\n`;

    const colorEmojiMap: Record<string, string> = {
      yellow: '🟨',
      green: '🟩',
      blue: '🟦',
      purple: '🟪'
    };

    const itemToColor: Record<string, string> = {};
    activePuzzle.categories.forEach((cat) => {
      cat.items.forEach((item) => {
        itemToColor[item] = colorEmojiMap[cat.colorLevel];
      });
    });

    const grid = guessHistory
      .map((guess) => guess.map((item) => itemToColor[item] || '⬛').join(''))
      .join('\n');

    return `${title}\n${grid}\n\nMaster the Constitution at Samvidhan Arcade!`;
  };

  const handleCopyShare = () => {
    navigator.clipboard.writeText(generateShareText());
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 3000);
  };

  // Solved category color styles
  const getCategoryBadgeColor = (level: 'yellow' | 'green' | 'blue' | 'purple') => {
    switch (level) {
      case 'yellow':
        return 'bg-amber-500/10 border-amber-500/30 text-amber-200 dark:text-amber-300';
      case 'green':
        return 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200 dark:text-emerald-300';
      case 'blue':
        return 'bg-sky-500/10 border-sky-500/30 text-sky-200 dark:text-sky-300';
      case 'purple':
        return 'bg-purple-500/10 border-purple-500/30 text-purple-200 dark:text-purple-300';
    }
  };

  const getLevelLabel = (level: 'yellow' | 'green' | 'blue' | 'purple') => {
    switch (level) {
      case 'yellow':
        return { emoji: '🟨', text: 'Level 1 · Foundational' };
      case 'green':
        return { emoji: '🟩', text: 'Level 2 · Structural' };
      case 'blue':
        return { emoji: '🟦', text: 'Level 3 · Jurisprudential' };
      case 'purple':
        return { emoji: '🟪', text: 'Level 4 · Constitutional Traps' };
    }
  };

  const isGameOver = mistakesRemaining <= 0 || solvedCategoryIds.length === 4;
  const isWon = solvedCategoryIds.length === 4 && mistakesRemaining > 0;

  return (
    <div className="max-w-4xl mx-auto space-y-4 sm:space-y-5 animate-fadeIn select-none">
      {/* =====================================================================
          HEADER BANNER
      ===================================================================== */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-md relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/25 flex items-center gap-1">
                <Puzzle className="w-3 h-3" />
                Constitutional Connections
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono text-[var(--text-muted)] bg-[var(--bg-base)] border border-[var(--border-subtle)]">
                4 Groups of 4 Items
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[var(--text-primary)] tracking-tight flex items-center gap-2">
              <span>🧩</span>
              Constitutional Connections
            </h2>
            <p className="text-xs text-[var(--text-secondary)] mt-0.5">
              Identify 4 distinct clusters of 4 related constitutional concepts, articles, or doctrines.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Mode Toggle */}
            <div className="p-0.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex items-center gap-0.5 font-mono text-xs">
              <button
                onClick={() => setGameMode('daily')}
                className={`px-2.5 py-1 rounded-lg font-bold flex items-center gap-1 transition-all ${
                  gameMode === 'daily'
                    ? 'bg-amber-400 text-zinc-950 shadow-xs'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                <Calendar className="w-3 h-3" />
                <span>Daily</span>
              </button>
              <button
                onClick={() => setGameMode('practice')}
                className={`px-2.5 py-1 rounded-lg font-bold flex items-center gap-1 transition-all ${
                  gameMode === 'practice'
                    ? 'bg-amber-400 text-zinc-950 shadow-xs'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                <Shuffle className="w-3 h-3" />
                <span>Practice</span>
              </button>
            </div>

            <button
              onClick={toggleMute}
              className="p-2 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-amber-500" />}
            </button>

            <button
              onClick={() =>
                initializePuzzle(
                  gameMode === 'daily' ? getTodayConnectionsPuzzle() : getRandomConnectionsPuzzle()
                )
              }
              className="p-2 px-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs font-mono font-bold text-[var(--text-secondary)] hover:text-amber-400 transition-all flex items-center gap-1"
              title="Reset Puzzle"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Status Strip: Mistakes & Title */}
        <div className="pt-2.5 flex items-center justify-between text-xs font-mono">
          <span className="text-[var(--text-muted)] text-[11px] truncate mr-2">
            Puzzle: <strong className="text-[var(--text-primary)]">{activePuzzle.puzzleTitle}</strong>
          </span>

          {/* Mistakes Remaining Circles */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[var(--text-muted)] text-[11px]">Mistakes:</span>
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 4 }).map((_, idx) => (
                <span
                  key={idx}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    idx < mistakesRemaining ? 'bg-amber-400 shadow-xs shadow-amber-400/50' : 'bg-zinc-700/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Toast Alert Message */}
      {toastMessage && (
        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-300 font-mono text-xs flex items-center justify-between gap-3 animate-fadeIn">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>{toastMessage}</span>
          </div>
          <button
            onClick={() => setToastMessage(null)}
            className="text-[10px] text-amber-400 font-bold hover:underline"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* =====================================================================
          CONNECTIONS BOARD: SOLVED BANNERS + ACTIVE 4X4 TILES
      ===================================================================== */}
      <div className="space-y-2.5">
        {/* Solved Category Horizontal Banners */}
        {activePuzzle.categories
          .filter((cat) => solvedCategoryIds.includes(cat.id))
          .map((cat) => {
            const levelMeta = getLevelLabel(cat.colorLevel);
            return (
              <div
                key={cat.id}
                className={`py-2.5 px-4 rounded-xl border text-center space-y-0.5 animate-fadeIn shadow-xs transition-all backdrop-blur-xs ${getCategoryBadgeColor(
                  cat.colorLevel
                )}`}
              >
                <div className="flex items-center justify-center gap-1.5">
                  <span className="text-xs">{levelMeta.emoji}</span>
                  <h4 className="font-extrabold text-xs sm:text-sm uppercase tracking-wide">
                    {cat.title}
                  </h4>
                  <span className="text-[10px] font-mono opacity-60">({levelMeta.text})</span>
                </div>
                <p className="text-[11px] sm:text-xs font-mono font-semibold tracking-tight">
                  {cat.items.join('  •  ')}
                </p>
                <p className="text-[10px] sm:text-[10.5px] opacity-75 pt-0.5 border-t border-current/15 leading-relaxed max-w-xl mx-auto">
                  {cat.description} <span className="opacity-90 font-mono">[{cat.landmarkRef}]</span>
                </p>
              </div>
            );
          })}

        {/* Remaining Unsolved 4x4 Tiles Grid */}
        {!isGameOver && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
            {shuffledTiles.map((item) => {
              const isSelected = selectedItems.includes(item);

              return (
                <button
                  key={item}
                  onClick={() => handleToggleSelect(item)}
                  className={`min-h-[58px] sm:min-h-[66px] px-2.5 py-2 rounded-xl text-center flex items-center justify-center font-mono font-semibold text-[11px] sm:text-xs leading-snug tracking-tight transition-all duration-150 cursor-pointer btn-tactile ${
                    isSelected
                      ? 'bg-gradient-to-b from-amber-400 to-amber-500 text-zinc-950 font-black shadow-md shadow-amber-500/25 ring-2 ring-amber-300 scale-[1.02] border border-amber-300'
                      : 'bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-amber-400/50 hover:bg-[var(--bg-surface-elevated)] shadow-2xs'
                  }`}
                >
                  <span className="line-clamp-2 max-w-[95%]">{item}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* =====================================================================
          CONTROLS BUTTON BAR
      ===================================================================== */}
      {!isGameOver && (
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
          <button
            onClick={handleShuffleUnsolved}
            className="px-4 py-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-amber-400/50 text-xs font-mono font-semibold text-[var(--text-secondary)] hover:text-amber-400 transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>Shuffle</span>
          </button>

          <button
            onClick={handleDeselectAll}
            disabled={selectedItems.length === 0}
            className="px-4 py-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] disabled:opacity-40 text-xs font-mono font-semibold text-[var(--text-secondary)] hover:text-rose-400 transition-all cursor-pointer disabled:cursor-not-allowed shadow-2xs"
          >
            Deselect All
          </button>

          <button
            onClick={handleSubmitGuess}
            disabled={selectedItems.length !== 4}
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 disabled:opacity-40 text-zinc-950 font-black text-xs font-mono uppercase tracking-wider transition-all shadow-sm flex items-center gap-1.5 hover:scale-102 active:scale-98 cursor-pointer disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <span>Submit Guess</span>
            <Sparkles className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* =====================================================================
          VICTORY / DEFEAT SUMMARY CARD
      ===================================================================== */}
      {isGameOver && (
        <div className="p-6 md:p-8 rounded-3xl bg-[var(--bg-card)] border-2 border-[var(--border-subtle)] text-center space-y-4 animate-fadeIn shadow-2xl">
          <div className="inline-flex p-4 rounded-3xl bg-amber-500/10 border border-amber-500/30 text-4xl shadow-inner animate-bounce">
            {isWon ? '🏆' : '⚖️'}
          </div>

          <h3 className="text-2xl font-black text-[var(--text-primary)]">
            {isWon
              ? 'Constitutional Connections Solved!'
              : 'Mistakes Exhausted — All Categories Revealed'}
          </h3>

          <p className="text-xs md:text-sm text-[var(--text-secondary)] max-w-lg mx-auto">
            {isWon
              ? `You mastered the 4 constitutional threads with ${mistakesRemaining} mistake${
                  mistakesRemaining > 1 ? 's' : ''
                } to spare. Career XP and Connections Master standing updated!`
              : 'Review the constitutional relationships above to lock in these doctrinal and article categories.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={handleCopyShare}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-black text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg hover:scale-105 active:scale-95"
            >
              <Share2 className="w-4 h-4" />
              <span>{copiedShare ? 'Copied Emoji Grid!' : 'Share Connections Grid'}</span>
            </button>

            <button
              onClick={() => {
                setGameMode('practice');
                initializePuzzle(getRandomConnectionsPuzzle());
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-amber-500 text-xs font-mono font-bold text-[var(--text-secondary)] hover:text-amber-400 transition-all flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Play Another Puzzle</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
