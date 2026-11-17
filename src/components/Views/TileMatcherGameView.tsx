import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Sparkles,
  Timer,
  Trophy,
  Flame,
  Volume2,
  VolumeX,
  RotateCcw,
  CheckCircle2,
  HelpCircle,
  Award,
  BookOpen,
  ArrowRight,
  Shield,
  Zap,
  Play
} from 'lucide-react';
import {
  GAME_DECKS,
  createGameTiles,
  audioSynth,
  type GameTile,
  type DeckTheme,
  type TileCardPair
} from '../../services/tileMatcherGameService';
import { useTheme } from '../../context/ThemeContext';

export const TileMatcherGameView: React.FC = () => {
  const { setActiveTab, activeGameDeck, setActiveGameDeck } = useTheme();

  // Settings
  const [selectedDeck, setSelectedDeck] = useState<DeckTheme>(() => {
    return (activeGameDeck as DeckTheme) || 'part3-rights';
  });
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [gameMode, setGameMode] = useState<'blitz' | 'zen'>('blitz');
  const [pairCount, setPairCount] = useState<number>(8); // 8 = 16 tiles (4x4), 12 = 24 tiles, 16 = 32 tiles
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Sync selectedDeck if external launcher (ThemeContext) changes activeGameDeck
  useEffect(() => {
    if (activeGameDeck && activeGameDeck !== selectedDeck) {
      setSelectedDeck(activeGameDeck as DeckTheme);
    }
  }, [activeGameDeck]);

  const handleSelectDeck = (deckId: DeckTheme) => {
    setSelectedDeck(deckId);
    setActiveGameDeck(deckId);
  };

  // Game state
  const [tiles, setTiles] = useState<GameTile[]>([]);
  const [selectedTiles, setSelectedTiles] = useState<GameTile[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [mismatchedUids, setMismatchedUids] = useState<string[]>([]);

  // Scores & timing
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  // Timer Ref
  const timerRef = useRef<any>(null);

  const currentDeckObj = useMemo(
    () => GAME_DECKS.find((d) => d.id === selectedDeck) || GAME_DECKS[0],
    [selectedDeck]
  );

  // Initialize new game board
  const initializeGame = () => {
    if (timerRef.current) clearInterval(timerRef.current);

    const newTiles = createGameTiles(selectedDeck, pairCount);
    setTiles(newTiles);
    setSelectedTiles([]);
    setMatchedPairs([]);
    setMismatchedUids([]);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setTimeLeft(pairCount === 8 ? 60 : pairCount === 12 ? 90 : 120);
    setElapsedTime(0);
    setIsGameOver(false);
    setIsPlaying(true);
  };

  // Start round on load or setting change
  useEffect(() => {
    initializeGame();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [selectedDeck, pairCount, gameMode]);

  // Clock tick handler
  useEffect(() => {
    if (!isPlaying || isGameOver) return;

    timerRef.current = setInterval(() => {
      if (gameMode === 'blitz') {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            handleGameOver(false);
            return 0;
          }
          return prev - 1;
        });
      } else {
        setElapsedTime((prev) => prev + 1);
      }
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, isGameOver, gameMode]);

  // Handle game finish
  const handleGameOver = (won: boolean) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsGameOver(true);
    setIsPlaying(false);

    if (won && soundEnabled) {
      audioSynth.playVictorySound();
    }
  };

  // Tile click selection
  const handleTileClick = (tile: GameTile) => {
    if (!isPlaying || isGameOver) return;
    if (tile.isMatched || tile.isFlipped) return;
    if (selectedTiles.length >= 2) return;
    if (mismatchedUids.length > 0) return;

    // Flip chosen tile
    const updatedTiles = tiles.map((t) =>
      t.uid === tile.uid ? { ...t, isFlipped: true } : t
    );
    setTiles(updatedTiles);

    const newSelected = [...selectedTiles, tile];
    setSelectedTiles(newSelected);

    // If two tiles are now flipped, evaluate match
    if (newSelected.length === 2) {
      const [first, second] = newSelected;

      // Check if pairId matches AND they are of opposite types (Article <-> Concept)
      if (first.pairId === second.pairId && first.type !== second.type) {
        // MATCH SUCCESS!
        if (soundEnabled) audioSynth.playMatchSound();

        const newMatched = [...matchedPairs, first.pairId];
        setMatchedPairs(newMatched);

        const newStreak = streak + 1;
        setStreak(newStreak);
        if (newStreak > maxStreak) setMaxStreak(newStreak);

        // Calculate score with combo multiplier
        const multiplier = Math.min(newStreak, 5);
        const pointsWon = 100 * multiplier;
        setScore((prev) => prev + pointsWon);

        // Mark tiles as permanently matched
        setTimeout(() => {
          setTiles((prev) =>
            prev.map((t) =>
              t.pairId === first.pairId ? { ...t, isMatched: true, isFlipped: true } : t
            )
          );
          setSelectedTiles([]);

          // Check Win Condition
          if (newMatched.length === pairCount) {
            // Add time bonus in blitz
            if (gameMode === 'blitz') {
              setScore((s) => s + timeLeft * 20);
            }
            handleGameOver(true);
          }
        }, 400);
      } else {
        // MISMATCH FAILURE
        if (soundEnabled) audioSynth.playMismatchSound();

        setStreak(0);
        setMismatchedUids([first.uid, second.uid]);

        // Penalty in blitz mode
        if (gameMode === 'blitz') {
          setTimeLeft((t) => Math.max(t - 2, 0));
        }

        // Shake and flip back
        setTimeout(() => {
          setTiles((prev) =>
            prev.map((t) =>
              t.uid === first.uid || t.uid === second.uid
                ? { ...t, isFlipped: false }
                : t
            )
          );
          setSelectedTiles([]);
          setMismatchedUids([]);
        }, 900);
      }
    }
  };

  // Rank determination based on score & performance
  const getJudicialRank = (scoreVal: number) => {
    if (scoreVal >= 3500) return { title: 'Chief Justice of India (CJI)', badge: 'Supreme Master' };
    if (scoreVal >= 2500) return { title: 'Supreme Court Constitution Judge', badge: 'Apex Jurist' };
    if (scoreVal >= 1600) return { title: 'High Court Senior Judge', badge: 'Distinguished Jurist' };
    if (scoreVal >= 1000) return { title: 'Senior Advocate (Supreme Court)', badge: 'Master Advocate' };
    return { title: 'Constitutional Advocate', badge: 'Active Cadet' };
  };

  const judicialRank = getJudicialRank(score);

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 flex flex-col gap-6 animate-fadeIn">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-5 h-5 text-[var(--accent)]" />
            <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Constitutional Synaptic Matcher
            </h1>
            <span className="text-xs px-2.5 py-0.5 rounded font-mono font-bold bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
              Tactile Memory Arena
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            Connect statutory Article Numbers with their Constitutional Doctrines, Ratios, and Maxims in a fast-paced memory blitz.
          </p>
        </div>

        {/* Global Controls: Sound, Mode, Reset */}
        <div className="flex items-center gap-2 self-stretch sm:self-auto justify-end flex-wrap">
          <button
            onClick={() => setSoundEnabled((prev) => !prev)}
            title={soundEnabled ? 'Mute Sounds' : 'Enable Sounds'}
            className="p-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-500" /> : <VolumeX className="w-4 h-4 text-rose-500" />}
          </button>

          <div className="flex items-center p-1 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
            <button
              onClick={() => setGameMode('blitz')}
              className={`px-2.5 py-1 rounded text-xs font-mono font-bold transition-all ${
                gameMode === 'blitz'
                  ? 'bg-[var(--accent)] text-[var(--accent-contrast)] shadow-sm'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              ⏱️ Blitz Timer
            </button>
            <button
              onClick={() => setGameMode('zen')}
              className={`px-2.5 py-1 rounded text-xs font-mono font-bold transition-all ${
                gameMode === 'zen'
                  ? 'bg-[var(--accent)] text-[var(--accent-contrast)] shadow-sm'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              🧘 Zen Practice
            </button>
          </div>

          <button
            onClick={initializeGame}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-[var(--text-primary)] transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restart Grid</span>
          </button>
        </div>
      </div>

      {/* Deck Selector & Difficulty Toolbar */}
      <div className="flex flex-col gap-3 p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
        {/* Category Pills & Grid Size */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider mr-1">
              Category:
            </span>
            {['All', 'Constitutional Parts', 'Constitutional Architecture', 'Jurisprudence & Precedents', 'Grand Shuffle'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold shadow-sm'
                    : 'bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Difficulty (Grid Size) */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
              Grid Size:
            </span>
            <div className="flex items-center gap-1 bg-[var(--bg-base)] p-1 rounded-lg border border-[var(--border-subtle)]">
              <button
                onClick={() => setPairCount(8)}
                className={`px-2.5 py-1 rounded text-xs font-mono font-bold transition-all ${
                  pairCount === 8
                    ? 'bg-[var(--accent)] text-[var(--accent-contrast)]'
                    : 'text-[var(--text-secondary)]'
                }`}
              >
                8 Pairs (16)
              </button>
              <button
                onClick={() => setPairCount(12)}
                className={`px-2.5 py-1 rounded text-xs font-mono font-bold transition-all ${
                  pairCount === 12
                    ? 'bg-[var(--accent)] text-[var(--accent-contrast)]'
                    : 'text-[var(--text-secondary)]'
                }`}
              >
                12 Pairs (24)
              </button>
              <button
                onClick={() => setPairCount(16)}
                className={`px-2.5 py-1 rounded text-xs font-mono font-bold transition-all ${
                  pairCount === 16
                    ? 'bg-[var(--accent)] text-[var(--accent-contrast)]'
                    : 'text-[var(--text-secondary)]'
                }`}
              >
                16 Pairs (32)
              </button>
            </div>
          </div>
        </div>

        {/* Deck Buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider shrink-0">
            Select Topic Deck:
          </span>
          <div className="flex items-center gap-1.5 flex-wrap">
            {GAME_DECKS.filter(
              (d) => selectedCategory === 'All' || d.category === selectedCategory
            ).map((d) => (
              <button
                key={d.id}
                onClick={() => handleSelectDeck(d.id as DeckTheme)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border flex items-center gap-1.5 ${
                  selectedDeck === d.id
                    ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold shadow-sm border-[var(--accent)]'
                    : 'bg-[var(--bg-base)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]'
                }`}
              >
                <span>{d.title}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                  selectedDeck === d.id ? 'bg-black/20 text-white' : 'bg-[var(--badge-bg)] text-[var(--text-muted)]'
                }`}>
                  {d.pairs.length}p
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Live In-Game HUD (Score, Combo, Timer) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
        {/* Score */}
        <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)]">
          <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase flex items-center gap-1">
            <Trophy className="w-3 h-3 text-[var(--gold)]" />
            Score
          </span>
          <span className="text-xl sm:text-2xl font-bold font-mono text-[var(--text-primary)]">
            {score.toLocaleString()}
          </span>
        </div>

        {/* Combo Multiplier */}
        <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)]">
          <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase flex items-center gap-1">
            <Flame className="w-3 h-3 text-amber-500" />
            Combo Streak
          </span>
          <div className="flex items-center gap-1.5">
            <span
              className={`text-xl sm:text-2xl font-bold font-mono ${
                streak > 1 ? 'text-amber-500 animate-pulse' : 'text-[var(--text-primary)]'
              }`}
            >
              {streak}x
            </span>
            {streak >= 3 && (
              <span className="text-[10px] font-mono px-1 py-0.5 rounded bg-amber-500/20 text-amber-500 font-bold">
                HOT!
              </span>
            )}
          </div>
        </div>

        {/* Timer / Elapsed */}
        <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)]">
          <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase flex items-center gap-1">
            <Timer className="w-3 h-3 text-[var(--accent)]" />
            {gameMode === 'blitz' ? 'Time Remaining' : 'Time Elapsed'}
          </span>
          <span
            className={`text-xl sm:text-2xl font-bold font-mono ${
              gameMode === 'blitz' && timeLeft <= 10
                ? 'text-rose-500 animate-bounce'
                : 'text-[var(--text-primary)]'
            }`}
          >
            {gameMode === 'blitz' ? `${timeLeft}s` : `${elapsedTime}s`}
          </span>
        </div>

        {/* Pairs Progress */}
        <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)]">
          <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
            Pairs Cleared
          </span>
          <span className="text-xl sm:text-2xl font-bold font-mono text-emerald-500">
            {matchedPairs.length} / {pairCount}
          </span>
        </div>
      </div>

      {/* Interactive Tile Grid */}
      <div
        className={`grid gap-3 sm:gap-4 transition-all ${
          pairCount === 8
            ? 'grid-cols-2 sm:grid-cols-4'
            : pairCount === 12
            ? 'grid-cols-2 sm:grid-cols-4 md:grid-cols-6'
            : 'grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8'
        }`}
      >
        {tiles.map((tile) => {
          const isSelected = selectedTiles.some((t) => t.uid === tile.uid);
          const isMismatched = mismatchedUids.includes(tile.uid);

          return (
            <button
              key={tile.uid}
              onClick={() => handleTileClick(tile)}
              disabled={tile.isMatched || isSelected}
              className={`min-h-[110px] sm:min-h-[130px] p-3 rounded-xl text-left transition-all duration-200 relative flex flex-col justify-between border cursor-pointer select-none group btn-tactile ${
                tile.isMatched
                  ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400 opacity-60 cursor-default scale-[0.98] ring-1 ring-emerald-500/30'
                  : isMismatched
                  ? 'bg-rose-500/20 border-rose-500 text-rose-300 animate-shake ring-2 ring-rose-500/40'
                  : isSelected || tile.isFlipped
                  ? tile.type === 'article'
                    ? 'bg-[var(--accent)] text-[var(--accent-contrast)] border-[var(--accent)] shadow-lg scale-105 ring-2 ring-[var(--accent)]/40'
                    : 'bg-[var(--bg-surface-elevated)] border-[var(--accent)] text-[var(--text-primary)] shadow-lg scale-105 ring-2 ring-[var(--accent)]/40'
                  : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:border-[var(--border-strong)] hover:shadow-md hover:scale-[1.02] active:scale-[0.97]'
              }`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between w-full">
                <span
                  className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-bold uppercase ${
                    tile.isMatched
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : isSelected || tile.isFlipped
                      ? tile.type === 'article'
                        ? 'bg-black/20 text-white'
                        : 'bg-[var(--badge-bg)] text-[var(--accent)]'
                      : 'bg-[var(--bg-base)] text-[var(--text-muted)]'
                  }`}
                >
                  {tile.type === 'article' ? 'Article Number' : 'Constitutional Doctrine'}
                </span>

                {tile.isMatched ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <span className="text-[9px] font-mono text-[var(--text-muted)] opacity-70">
                    {tile.part}
                  </span>
                )}
              </div>

              {/* Card Body / Main Content */}
              <div className="my-auto py-1">
                {tile.type === 'article' ? (
                  <div
                    className={`font-mono font-bold tracking-tight text-center ${
                      tile.content.length > 12 ? 'text-sm sm:text-base' : 'text-base sm:text-lg'
                    }`}
                  >
                    {tile.content}
                  </div>
                ) : (
                  <div className="text-xs font-semibold leading-snug line-clamp-3">
                    {tile.content}
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div className="text-[10px] font-mono truncate opacity-80 pt-1 border-t border-black/10 dark:border-white/10">
                {tile.isMatched ? (
                  <span className="text-emerald-400 font-bold">✓ Synapse Locked</span>
                ) : tile.subContent ? (
                  <span>{tile.subContent}</span>
                ) : (
                  <span>Part {tile.part}</span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Post-Game Victory / Time Out Modal */}
      {isGameOver && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[var(--bg-surface)] border border-[var(--border-strong)] max-w-lg w-full p-6 rounded-2xl shadow-2xl flex flex-col gap-4 animate-scaleUp">
            {/* Modal Header */}
            <div className="flex flex-col items-center text-center gap-1">
              <div className="w-12 h-12 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center mb-1">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)]">
                {matchedPairs.length === pairCount ? 'Board Cleared! Constitutional Mastery Achieved!' : 'Time Expired!'}
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">
                {matchedPairs.length === pairCount
                  ? `You successfully paired all ${pairCount} constitutional anchors!`
                  : `You cleared ${matchedPairs.length} of ${pairCount} pairs before the clock ran out.`}
              </p>
            </div>

            {/* Scorecard Box */}
            <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] grid grid-cols-3 gap-2 text-center">
              <div>
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase">Final Score</span>
                <p className="text-lg font-bold font-mono text-[var(--text-primary)]">{score.toLocaleString()}</p>
              </div>
              <div>
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase">Max Streak</span>
                <p className="text-lg font-bold font-mono text-amber-500">{maxStreak}x</p>
              </div>
              <div>
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase">Rank Awarded</span>
                <p className="text-xs font-bold font-mono text-[var(--accent)] truncate">{judicialRank.badge}</p>
              </div>
            </div>

            {/* Judicial Title Alert */}
            <div className="p-3 rounded-lg bg-[var(--badge-bg)] border border-[var(--badge-border)] text-center">
              <span className="text-[10px] font-mono uppercase text-[var(--text-muted)]">Judicial Bench Title</span>
              <h4 className="text-sm font-bold text-[var(--accent)]">{judicialRank.title}</h4>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={initializeGame}
                className="flex-1 py-2.5 rounded-xl text-xs font-mono font-bold bg-[var(--accent)] text-[var(--accent-contrast)] hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5 shadow-md"
              >
                <Play className="w-3.5 h-3.5" />
                <span>Play Again</span>
              </button>

              <button
                onClick={() => setActiveTab('articles-master')}
                className="py-2.5 px-4 rounded-xl text-xs font-mono bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                Study Bare Act
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
