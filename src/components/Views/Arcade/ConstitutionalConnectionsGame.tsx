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
  HelpCircle,
  Trophy,
  Scale
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
        setToastMessage('BRAVO! You solved all 4 Constitutional Connections!');
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

  // Solved category color styles (Subtle, Muted Minimalist)
  const getCategoryBadgeColor = (level: 'yellow' | 'green' | 'blue' | 'purple') => {
    switch (level) {
      case 'yellow':
        return 'bg-amber-500/10 border-amber-500/30 text-amber-300';
      case 'green':
        return 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300';
      case 'blue':
        return 'bg-sky-500/10 border-sky-500/30 text-sky-300';
      case 'purple':
        return 'bg-purple-500/10 border-purple-500/30 text-purple-300';
    }
  };

  const getLevelLabel = (level: 'yellow' | 'green' | 'blue' | 'purple') => {
    switch (level) {
      case 'yellow':
        return { tag: 'L1', text: 'Level 1' };
      case 'green':
        return { tag: 'L2', text: 'Level 2' };
      case 'blue':
        return { tag: 'L3', text: 'Level 3' };
      case 'purple':
        return { tag: 'L4', text: 'Level 4' };
    }
  };

  const isGameOver = mistakesRemaining <= 0 || solvedCategoryIds.length === 4;
  const isWon = solvedCategoryIds.length === 4 && mistakesRemaining > 0;

  return (
    <div className="max-w-4xl mx-auto space-y-3 animate-fadeIn select-none">
      {/* =====================================================================
          SLIM MINIMALIST HEADER BAR
      ===================================================================== */}
      <div className="py-2 px-3 sm:px-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-2.5 text-xs font-mono shadow-xs">
        <div className="flex items-center gap-2.5">
          <span className="font-bold text-[var(--text-primary)] flex items-center gap-1.5">
            <Puzzle className="w-3.5 h-3.5 text-amber-400" />
            Connections
          </span>
          <span className="text-[11px] text-[var(--text-muted)] border-l border-[var(--border-subtle)] pl-2 truncate max-w-[200px] sm:max-w-none">
            {activePuzzle.puzzleTitle}
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          {/* Mode Toggle */}
          <div className="p-0.5 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] flex items-center gap-0.5 text-[11px]">
            <button
              onClick={() => setGameMode('daily')}
              className={`px-2 py-0.5 rounded font-bold transition-all ${
                gameMode === 'daily'
                  ? 'bg-amber-400 text-zinc-950'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              Daily
            </button>
            <button
              onClick={() => setGameMode('practice')}
              className={`px-2 py-0.5 rounded font-bold transition-all ${
                gameMode === 'practice'
                  ? 'bg-amber-400 text-zinc-950'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              Practice
            </button>
          </div>

          {/* Mistakes Remaining Dots */}
          <div className="flex items-center gap-1 border-l border-[var(--border-subtle)] pl-2">
            <span className="text-[10px] text-[var(--text-muted)] mr-1">Lives:</span>
            {Array.from({ length: 4 }).map((_, idx) => (
              <span
                key={idx}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx < mistakesRemaining ? 'bg-amber-400' : 'bg-zinc-700/60'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-1 border-l border-[var(--border-subtle)] pl-2">
            <button
              onClick={toggleMute}
              className="p-1 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-amber-400" />}
            </button>

            <button
              onClick={() =>
                initializePuzzle(
                  gameMode === 'daily' ? getTodayConnectionsPuzzle() : getRandomConnectionsPuzzle()
                )
              }
              className="p-1 rounded-lg text-[var(--text-muted)] hover:text-amber-400 transition-all cursor-pointer"
              title="Reset Puzzle"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Toast Alert Message */}
      {toastMessage && (
        <div className="py-2 px-3 rounded-lg bg-amber-500/10 border border-amber-500/25 text-amber-300 font-mono text-xs flex items-center justify-between gap-3 animate-fadeIn">
          <div className="flex items-center gap-1.5">
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
      <div className="space-y-2">
        {/* Solved Category Horizontal Banners (Compact & Minimalist) */}
        {activePuzzle.categories
          .filter((cat) => solvedCategoryIds.includes(cat.id))
          .map((cat) => {
            const levelMeta = getLevelLabel(cat.colorLevel);
            return (
              <div
                key={cat.id}
                className={`py-2 px-3.5 rounded-lg border text-xs font-mono space-y-0.5 animate-fadeIn shadow-2xs transition-all ${getCategoryBadgeColor(
                  cat.colorLevel
                )}`}
              >
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[11px]">
                    <span className="px-1.5 py-0.2 rounded text-[9.5px] font-mono bg-[var(--bg-base)] border border-current opacity-80">
                      {levelMeta.tag}
                    </span>
                    <span>{cat.title}</span>
                  </div>
                  <span className="text-[10px] opacity-70">[{cat.landmarkRef}]</span>
                </div>
                <p className="text-[11px] font-semibold opacity-95">
                  {cat.items.join('  •  ')}
                </p>
              </div>
            );
          })}

        {/* Remaining Unsolved 4x4 Tiles Grid (Small & Minimalist) */}
        {!isGameOver && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
            {shuffledTiles.map((item) => {
              const isSelected = selectedItems.includes(item);

              return (
                <button
                  key={item}
                  onClick={() => handleToggleSelect(item)}
                  className={`min-h-[38px] sm:min-h-[42px] px-2 py-1 rounded-md text-center flex items-center justify-center font-mono font-medium text-[11px] sm:text-[11.5px] leading-snug tracking-tight transition-all duration-100 cursor-pointer ${
                    isSelected
                      ? 'bg-amber-400 text-zinc-950 font-bold border border-amber-300 shadow-xs'
                      : 'bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)]'
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
          CONTROLS BUTTON BAR (Compact & Clean)
      ===================================================================== */}
      {!isGameOver && (
        <div className="flex flex-wrap items-center justify-center gap-2 pt-0.5">
          <button
            onClick={handleShuffleUnsolved}
            className="px-3 py-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-xs font-mono font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
          >
            <Shuffle className="w-3 h-3 text-[var(--text-muted)]" />
            <span>Shuffle</span>
          </button>

          <button
            onClick={handleDeselectAll}
            disabled={selectedItems.length === 0}
            className="px-3 py-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] disabled:opacity-40 text-xs font-mono font-medium text-[var(--text-secondary)] hover:text-rose-400 transition-all cursor-pointer disabled:cursor-not-allowed shadow-2xs"
          >
            Deselect All
          </button>

          <button
            onClick={handleSubmitGuess}
            disabled={selectedItems.length !== 4}
            className="px-5 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 disabled:opacity-40 text-zinc-950 font-bold text-xs font-mono uppercase tracking-wider transition-all shadow-xs flex items-center gap-1.5 cursor-pointer disabled:cursor-not-allowed"
          >
            <span>Submit Guess</span>
            <Sparkles className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* =====================================================================
          VICTORY / DEFEAT SUMMARY CARD (Compact & Aesthetic)
      ===================================================================== */}
      {isGameOver && (
        <div className="p-4 sm:p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-center space-y-2.5 animate-fadeIn shadow-xs max-w-md mx-auto">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/25 flex items-center justify-center mx-auto text-amber-400">
            {isWon ? <Trophy className="w-4 h-4" /> : <Scale className="w-4 h-4 text-[var(--text-muted)]" />}
          </div>

          <h3 className="text-sm sm:text-base font-bold text-[var(--text-primary)]">
            {isWon
              ? 'Constitutional Connections Solved!'
              : 'Mistakes Exhausted — Categories Revealed'}
          </h3>

          <p className="text-xs text-[var(--text-secondary)] max-w-sm mx-auto leading-relaxed">
            {isWon
              ? `Mastered all 4 categories with ${mistakesRemaining} mistake${
                  mistakesRemaining > 1 ? 's' : ''
                } remaining.`
              : 'Review the constitutional relationships above to lock in these categories.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-1">
            <button
              onClick={handleCopyShare}
              className="w-full sm:w-auto px-4 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedShare ? 'Copied Result!' : 'Share Result'}</span>
            </button>

            <button
              onClick={() => {
                setGameMode('practice');
                initializePuzzle(getRandomConnectionsPuzzle());
              }}
              className="w-full sm:w-auto px-4 py-1.5 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-xs font-mono font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Play Another Puzzle</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
