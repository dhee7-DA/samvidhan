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
        return 'bg-amber-500/15 border-amber-500/40 text-amber-300';
      case 'green':
        return 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300';
      case 'blue':
        return 'bg-sky-500/15 border-sky-500/40 text-sky-300';
      case 'purple':
        return 'bg-purple-500/15 border-purple-500/40 text-purple-300';
    }
  };

  const isGameOver = mistakesRemaining <= 0 || solvedCategoryIds.length === 4;
  const isWon = solvedCategoryIds.length === 4 && mistakesRemaining > 0;

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn select-none">
      {/* =====================================================================
          HEADER BANNER
      ===================================================================== */}
      <div className="p-5 md:p-6 rounded-3xl bg-[var(--bg-card)] border-2 border-[var(--border-subtle)] shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center gap-1.5">
                <Puzzle className="w-3.5 h-3.5" />
                Constitutional Connections
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-[var(--text-muted)] bg-[var(--bg-base)] border border-[var(--border-subtle)]">
                4 Groups of 4 Items
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[var(--text-primary)] tracking-tight flex items-center gap-2.5">
              <span>🧩</span>
              Constitutional Connections
            </h2>
            <p className="text-xs md:text-sm text-[var(--text-secondary)] mt-1">
              Find four groups of four related constitutional concepts, articles, doctrines, or historical amendments.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Mode Toggle */}
            <div className="p-1 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex items-center gap-1 font-mono text-xs">
              <button
                onClick={() => setGameMode('daily')}
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
                onClick={() => setGameMode('practice')}
                className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all ${
                  gameMode === 'practice'
                    ? 'bg-amber-500 text-black shadow-sm'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                <Shuffle className="w-3.5 h-3.5" />
                <span>Practice</span>
              </button>
            </div>

            <button
              onClick={toggleMute}
              className="p-3 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 text-amber-500" />}
            </button>

            <button
              onClick={() =>
                initializePuzzle(
                  gameMode === 'daily' ? getTodayConnectionsPuzzle() : getRandomConnectionsPuzzle()
                )
              }
              className="p-3 px-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs font-mono font-bold text-[var(--text-secondary)] hover:text-amber-400 transition-all flex items-center gap-1.5"
              title="Reset Puzzle"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Status Strip: Mistakes & Title */}
        <div className="pt-3 flex items-center justify-between text-xs font-mono">
          <span className="text-[var(--text-muted)]">
            Puzzle: <strong className="text-[var(--text-primary)]">{activePuzzle.puzzleTitle}</strong>
          </span>

          {/* Mistakes Remaining Circles */}
          <div className="flex items-center gap-2">
            <span className="text-[var(--text-muted)] text-[11px]">Mistakes remaining:</span>
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 4 }).map((_, idx) => (
                <span
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx < mistakesRemaining ? 'bg-amber-500 shadow-sm' : 'bg-zinc-700/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Toast Alert Message */}
      {toastMessage && (
        <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs flex items-center justify-between gap-3 animate-fadeIn">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
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
      <div className="space-y-3">
        {/* Solved Category Horizontal Banners */}
        {activePuzzle.categories
          .filter((cat) => solvedCategoryIds.includes(cat.id))
          .map((cat) => (
            <div
              key={cat.id}
              className={`p-4 md:p-5 rounded-2xl border-2 text-center space-y-1 animate-fadeIn shadow-md ${getCategoryBadgeColor(
                cat.colorLevel
              )}`}
            >
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <h4 className="font-black text-sm md:text-base uppercase tracking-wider">
                  {cat.title}
                </h4>
              </div>
              <p className="text-xs font-mono font-bold">
                {cat.items.join(' • ')}
              </p>
              <p className="text-[11px] opacity-80 pt-1 border-t border-current/20 leading-snug">
                {cat.description} ({cat.landmarkRef})
              </p>
            </div>
          ))}

        {/* Remaining Unsolved 4x4 Tiles Grid */}
        {!isGameOver && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
            {shuffledTiles.map((item) => {
              const isSelected = selectedItems.includes(item);

              return (
                <button
                  key={item}
                  onClick={() => handleToggleSelect(item)}
                  className={`h-24 sm:h-28 p-3 rounded-2xl text-center flex items-center justify-center font-mono font-bold text-xs sm:text-sm uppercase tracking-tight transition-all cursor-pointer btn-tactile ${
                    isSelected
                      ? 'bg-amber-500 text-black font-black shadow-lg scale-102 ring-2 ring-amber-400'
                      : 'bg-[var(--bg-card)] border-2 border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-amber-500/60 hover:bg-[var(--bg-surface-elevated)]'
                  }`}
                >
                  <span className="line-clamp-3">{item}</span>
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
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={handleShuffleUnsolved}
            className="px-5 py-2.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-amber-500 text-xs font-mono font-bold text-[var(--text-secondary)] hover:text-amber-400 transition-all flex items-center gap-2"
          >
            <Shuffle className="w-4 h-4" />
            <span>Shuffle</span>
          </button>

          <button
            onClick={handleDeselectAll}
            disabled={selectedItems.length === 0}
            className="px-5 py-2.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] disabled:opacity-40 text-xs font-mono font-bold text-[var(--text-secondary)] hover:text-rose-400 transition-all"
          >
            Deselect All
          </button>

          <button
            onClick={handleSubmitGuess}
            disabled={selectedItems.length !== 4}
            className="px-8 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-black font-black text-xs font-mono uppercase tracking-wider transition-all shadow-md flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer disabled:cursor-not-allowed"
          >
            <span>Submit Guess</span>
            <Sparkles className="w-4 h-4" />
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
