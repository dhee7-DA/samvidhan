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
  Award,
  ArrowRight,
  Gamepad2,
  Shield,
  Zap,
  HelpCircle,
  Check,
  BookOpen
} from 'lucide-react';
import {
  audioSynth,
  shuffleArray,
  type GameTile,
  type TileCardPair,
  MATCH_PAIRS_PART3,
  MATCH_PAIRS_PART4_DPSP,
  MATCH_PAIRS_PART5_UNION,
  MATCH_PAIRS_FEDERAL_SPECIAL,
  MATCH_PAIRS_SCHEDULES,
  MATCH_PAIRS_DOCTRINES,
  MATCH_PAIRS_LANDMARK_JUDGMENTS,
  MATCH_PAIRS_AMENDMENTS
} from '../../services/tileMatcherGameService';
import type { BootcampDay } from '../../data/bootcamp/bootcampTypes';

interface BootcampDayMemoryGameProps {
  day: BootcampDay;
  onComplete?: () => void;
  isCompleted?: boolean;
}

export const BootcampDayMemoryGame: React.FC<BootcampDayMemoryGameProps> = ({
  day,
  onComplete,
  isCompleted = false
}) => {
  // Settings
  const [pairCount, setPairCount] = useState<number>(8); // 8 pairs = 16 tiles
  const [gameMode, setGameMode] = useState<'blitz' | 'zen'>('blitz');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

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
  const [isRoundWon, setIsRoundWon] = useState<boolean>(false);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  // Timer Ref
  const timerRef = useRef<any>(null);

  // Extract tailored pairs for this day
  const dayPairs = useMemo<TileCardPair[]>(() => {
    const list: TileCardPair[] = [];

    // 1. From Day Core Concepts
    day.coreConcepts.forEach((c, idx) => {
      list.push({
        id: `day-${day.dayNumber}-concept-${idx}`,
        articleNumber: c.articleAnchor,
        articleLabel: c.articleAnchor,
        conceptLabel: c.heading,
        part: `Day ${day.dayNumber}`,
        explanation: c.synopsis,
        mnemonicHint: c.prosecutionAngle || c.synopsis.slice(0, 90)
      });
    });

    // 2. From Day Landmark Evolution Pairs
    day.landmarkEvolutionPairs.forEach((lp, idx) => {
      list.push({
        id: `day-${day.dayNumber}-case-${idx}`,
        articleNumber: 'Case Ratio',
        articleLabel: `${lp.classicCase.name} (${lp.classicCase.year})`,
        conceptLabel: `${lp.subject}: ${lp.classicCase.ratio}`,
        part: `Day ${day.dayNumber}`,
        explanation: lp.examApplicationNote,
        mnemonicHint: `Modern Ruling: ${lp.modernCase.name} (${lp.modernCase.year})`
      });
    });

    // 3. Complement with curated master pairs relevant to this day's syllabus
    let complementaryMaster: TileCardPair[] = [];
    if (day.dayNumber <= 4) {
      // Days 1-4: Part III Fundamental Rights & Writs
      complementaryMaster = MATCH_PAIRS_PART3;
    } else if (day.dayNumber === 5) {
      // Day 5: Part IV DPSPs & IV-A Duties
      complementaryMaster = MATCH_PAIRS_PART4_DPSP;
    } else if (day.dayNumber <= 8) {
      // Days 6-8: Part V Union Executive, Parliament, Supreme Court
      complementaryMaster = MATCH_PAIRS_PART5_UNION;
    } else if (day.dayNumber <= 10) {
      // Days 9-10: Part VI States, High Courts, Centre-State Relations
      complementaryMaster = MATCH_PAIRS_FEDERAL_SPECIAL.filter(p => ['Part VI', 'Part VIII', 'Part XI'].includes(p.part));
    } else if (day.dayNumber === 11) {
      // Day 11: Emergency, Services, Finance
      complementaryMaster = MATCH_PAIRS_FEDERAL_SPECIAL.filter(p => !['Part VI', 'Part VIII', 'Part XI'].includes(p.part));
    } else if (day.dayNumber === 12) {
      // Day 12: Amendments
      complementaryMaster = MATCH_PAIRS_AMENDMENTS;
    } else if (day.dayNumber === 13) {
      // Day 13: 12 Schedules
      complementaryMaster = MATCH_PAIRS_SCHEDULES;
    } else if (day.dayNumber === 14) {
      // Day 14: Landmark Precedents & Doctrines
      complementaryMaster = [...MATCH_PAIRS_DOCTRINES, ...MATCH_PAIRS_LANDMARK_JUDGMENTS];
    } else {
      // Day 15: Grand Revision
      complementaryMaster = [
        ...MATCH_PAIRS_PART3,
        ...MATCH_PAIRS_PART5_UNION,
        ...MATCH_PAIRS_SCHEDULES,
        ...MATCH_PAIRS_DOCTRINES,
        ...MATCH_PAIRS_LANDMARK_JUDGMENTS
      ];
    }

    // Add complementary pairs avoiding duplicates
    complementaryMaster.forEach((p) => {
      if (!list.some(existing => existing.id === p.id)) {
        list.push(p);
      }
    });

    return list;
  }, [day]);

  // Generate game tiles from day pairs
  const generateTiles = () => {
    if (timerRef.current) clearInterval(timerRef.current);

    const selectedPairs = shuffleArray(dayPairs).slice(0, Math.min(pairCount, dayPairs.length));
    const newTiles: GameTile[] = [];

    selectedPairs.forEach((pair, idx) => {
      // Tile 1: Article / Lead Anchor
      newTiles.push({
        uid: `tile-${pair.id}-art-${idx}`,
        pairId: pair.id,
        type: 'article',
        content: pair.articleLabel,
        subContent: pair.part,
        part: pair.part,
        isFlipped: false,
        isMatched: false
      });

      // Tile 2: Concept / Precedent
      newTiles.push({
        uid: `tile-${pair.id}-concept-${idx}`,
        pairId: pair.id,
        type: 'concept',
        content: pair.conceptLabel,
        subContent: pair.mnemonicHint,
        part: pair.part,
        isFlipped: false,
        isMatched: false
      });
    });

    const shuffled = shuffleArray(newTiles);
    setTiles(shuffled);
    setSelectedTiles([]);
    setMatchedPairs([]);
    setMismatchedUids([]);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setTimeLeft(pairCount === 6 ? 45 : pairCount === 8 ? 60 : 90);
    setElapsedTime(0);
    setIsGameOver(false);
    setIsRoundWon(false);
    setIsPlaying(true);
  };

  // Re-initialize on day change or settings change
  useEffect(() => {
    generateTiles();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [day.dayNumber, pairCount, gameMode]);

  // Timer Tick
  useEffect(() => {
    if (!isPlaying || isGameOver || isRoundWon) return;

    timerRef.current = setInterval(() => {
      if (gameMode === 'blitz') {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setIsGameOver(true);
            setIsPlaying(false);
            if (soundEnabled) audioSynth.playMismatchSound();
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
  }, [isPlaying, isGameOver, isRoundWon, gameMode, soundEnabled]);

  // Tile Selection & Match Validation
  const handleTileClick = (tile: GameTile) => {
    if (!isPlaying || isGameOver || isRoundWon) return;
    if (tile.isMatched) return;
    if (selectedTiles.some((t) => t.uid === tile.uid)) return;
    if (selectedTiles.length >= 2) return;

    const newSelected = [...selectedTiles, tile];
    setSelectedTiles(newSelected);

    // If second tile selected, validate match
    if (newSelected.length === 2) {
      const [first, second] = newSelected;
      const isMatch = first.pairId === second.pairId && first.type !== second.type;

      if (isMatch) {
        // MATCH SUCCESS!
        const nextMatched = [...matchedPairs, first.pairId];
        setMatchedPairs(nextMatched);

        // Update tile matched flags
        setTiles((prev) =>
          prev.map((t) =>
            t.pairId === first.pairId ? { ...t, isMatched: true } : t
          )
        );

        // Score with streak multiplier
        const newStreak = streak + 1;
        setStreak(newStreak);
        setMaxStreak((prev) => Math.max(prev, newStreak));
        const multiplier = Math.min(newStreak, 4);
        setScore((prev) => prev + 100 * multiplier);

        if (soundEnabled) audioSynth.playMatchSound();
        setSelectedTiles([]);

        // Check if all pairs cleared
        const totalPairsInRound = Math.min(pairCount, dayPairs.length);
        if (nextMatched.length >= totalPairsInRound) {
          setIsRoundWon(true);
          setIsPlaying(false);
          if (soundEnabled) audioSynth.playVictorySound();
          if (onComplete) onComplete();
        }
      } else {
        // MISMATCH!
        setStreak(0);
        setMismatchedUids([first.uid, second.uid]);
        if (soundEnabled) audioSynth.playMismatchSound();

        // Shake for 700ms then unflip
        setTimeout(() => {
          setSelectedTiles([]);
          setMismatchedUids([]);
        }, 700);
      }
    }
  };

  const totalPairsInRound = Math.min(pairCount, dayPairs.length);
  const progressPercent = Math.round((matchedPairs.length / totalPairsInRound) * 100);

  return (
    <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-6 animate-fadeIn">
      {/* Header Banner */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="p-1.5 rounded-lg bg-[var(--accent)] text-[var(--accent-contrast)] shadow-sm">
              <Gamepad2 className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)]">
              Day {day.dayNumber} Synaptic Memory Matcher
            </h2>
            <span className="text-xs px-2.5 py-0.5 rounded-full font-mono font-bold bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
              {dayPairs.length} Custom Day Pairs
            </span>
            {isCompleted && (
              <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                <Check className="w-3 h-3" /> Day Task Mastered
              </span>
            )}
          </div>
          <p className="text-xs text-[var(--text-secondary)]">
            High-speed neuro-association drill: Pair Day {day.dayNumber} statutory articles with core concepts, doctrines, and courtroom ratios.
          </p>
        </div>

        {/* Toolbar Controls */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Game Mode */}
          <div className="flex items-center p-1 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)]">
            <button
              onClick={() => setGameMode('blitz')}
              className={`px-2.5 py-1 rounded text-xs font-mono font-bold transition-all ${
                gameMode === 'blitz'
                  ? 'bg-[var(--accent)] text-[var(--accent-contrast)] shadow-sm'
                  : 'text-[var(--text-secondary)]'
              }`}
            >
              Blitz 60s
            </button>
            <button
              onClick={() => setGameMode('zen')}
              className={`px-2.5 py-1 rounded text-xs font-mono font-bold transition-all ${
                gameMode === 'zen'
                  ? 'bg-[var(--accent)] text-[var(--accent-contrast)] shadow-sm'
                  : 'text-[var(--text-secondary)]'
              }`}
            >
              Zen Mode
            </button>
          </div>

          {/* Grid Size */}
          <div className="flex items-center p-1 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)]">
            <button
              onClick={() => setPairCount(6)}
              className={`px-2 py-1 rounded text-xs font-mono font-bold transition-all ${
                pairCount === 6 ? 'bg-[var(--accent)] text-[var(--accent-contrast)]' : 'text-[var(--text-muted)]'
              }`}
            >
              6 Pairs (12)
            </button>
            <button
              onClick={() => setPairCount(8)}
              className={`px-2 py-1 rounded text-xs font-mono font-bold transition-all ${
                pairCount === 8 ? 'bg-[var(--accent)] text-[var(--accent-contrast)]' : 'text-[var(--text-muted)]'
              }`}
            >
              8 Pairs (16)
            </button>
            <button
              onClick={() => setPairCount(12)}
              className={`px-2 py-1 rounded text-xs font-mono font-bold transition-all ${
                pairCount === 12 ? 'bg-[var(--accent)] text-[var(--accent-contrast)]' : 'text-[var(--text-muted)]'
              }`}
            >
              12 Pairs (24)
            </button>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={() => setSoundEnabled((prev) => !prev)}
            className={`p-2 rounded-lg border transition-colors ${
              soundEnabled
                ? 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--accent)]'
                : 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-muted)]'
            }`}
            title={soundEnabled ? 'Mute Sound Synthesizer' : 'Enable Sound Synthesizer'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Restart */}
          <button
            onClick={generateTiles}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-[var(--text-primary)] transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Shuffle</span>
          </button>
        </div>
      </div>

      {/* Live In-Game HUD (Score, Combo Streak, Timer, Matches) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
        {/* Score */}
        <div className="flex flex-col items-center justify-center p-2.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)]">
          <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase flex items-center gap-1">
            <Trophy className="w-3 h-3 text-[var(--gold)]" />
            Score
          </span>
          <span className="text-xl font-bold font-mono text-[var(--text-primary)]">
            {score.toLocaleString()}
          </span>
        </div>

        {/* Combo Streak */}
        <div className="flex flex-col items-center justify-center p-2.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)]">
          <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase flex items-center gap-1">
            <Flame className="w-3 h-3 text-amber-500" />
            Combo Streak
          </span>
          <div className="flex items-center gap-1">
            <span className="text-xl font-bold font-mono text-amber-500">
              {streak}x
            </span>
            {streak >= 3 && (
              <span className="text-[10px] px-1 rounded font-bold bg-amber-500/20 text-amber-400 animate-pulse">
                HOT
              </span>
            )}
          </div>
        </div>

        {/* Matches Completed */}
        <div className="flex flex-col items-center justify-center p-2.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)]">
          <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            Progress
          </span>
          <span className="text-xl font-bold font-mono text-[var(--text-primary)]">
            {matchedPairs.length} / {totalPairsInRound}
          </span>
        </div>

        {/* Timer */}
        <div className="flex flex-col items-center justify-center p-2.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)]">
          <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase flex items-center gap-1">
            <Timer className="w-3 h-3 text-[var(--accent)]" />
            {gameMode === 'blitz' ? 'Time Remaining' : 'Elapsed Time'}
          </span>
          <span
            className={`text-xl font-bold font-mono ${
              gameMode === 'blitz' && timeLeft <= 10
                ? 'text-red-400 animate-pulse'
                : 'text-[var(--text-primary)]'
            }`}
          >
            {gameMode === 'blitz' ? `${timeLeft}s` : `${elapsedTime}s`}
          </span>
        </div>
      </div>

      {/* Round Won Victory Overlay */}
      {isRoundWon ? (
        <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-[var(--bg-card)] to-emerald-500/5 border-2 border-emerald-500/40 flex flex-col items-center text-center gap-4 animate-scaleUp">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <Trophy className="w-8 h-8" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
              Synapse Memory Mastery
            </span>
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mt-1">
              Day {day.dayNumber} Match Round Cleared!
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mt-1 max-w-md mx-auto">
              You successfully locked all {totalPairsInRound} pairs for {day.title}. Your associative recall for this day is razor sharp.
            </p>
          </div>

          <div className="flex items-center gap-6 py-2 px-6 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] font-mono text-sm">
            <div>
              <span className="text-[11px] text-[var(--text-muted)] block">Final Score</span>
              <span className="font-bold text-lg text-emerald-400">{score}</span>
            </div>
            <div className="w-px h-8 bg-[var(--border-subtle)]" />
            <div>
              <span className="text-[11px] text-[var(--text-muted)] block">Max Combo</span>
              <span className="font-bold text-lg text-amber-500">{maxStreak}x</span>
            </div>
            <div className="w-px h-8 bg-[var(--border-subtle)]" />
            <div>
              <span className="text-[11px] text-[var(--text-muted)] block">Time Taken</span>
              <span className="font-bold text-lg text-[var(--text-primary)]">
                {gameMode === 'blitz' ? `${60 - timeLeft}s` : `${elapsedTime}s`}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={generateTiles}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--accent)] text-[var(--accent-contrast)] hover:opacity-90 font-mono text-xs font-bold transition-all shadow-md"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Play Another Shuffle</span>
            </button>
          </div>
        </div>
      ) : isGameOver ? (
        /* Game Over (Time Out) Overlay */
        <div className="p-8 rounded-2xl bg-gradient-to-br from-red-500/10 via-[var(--bg-card)] to-red-500/5 border-2 border-red-500/40 flex flex-col items-center text-center gap-4 animate-scaleUp">
          <div className="w-14 h-14 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center border border-red-500/30">
            <Timer className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[var(--text-primary)]">
              Time Ran Out!
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              You matched {matchedPairs.length} of {totalPairsInRound} pairs. Fast-paced repetition builds unbreakable synapses.
            </p>
          </div>
          <button
            onClick={generateTiles}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--accent)] text-[var(--accent-contrast)] font-mono text-xs font-bold transition-all shadow-md"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Try Again (Reset Clock)</span>
          </button>
        </div>
      ) : (
        /* Active Game Board Grid */
        <div
          className={`grid gap-3.5 transition-all ${
            pairCount === 6
              ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
              : pairCount === 8
              ? 'grid-cols-2 sm:grid-cols-4'
              : 'grid-cols-2 sm:grid-cols-4 lg:grid-cols-6'
          }`}
        >
          {tiles.map((tile) => {
            const isSelected = selectedTiles.some((t) => t.uid === tile.uid);
            const isMismatched = mismatchedUids.includes(tile.uid);

            return (
              <div
                key={tile.uid}
                onClick={() => handleTileClick(tile)}
                className={`group relative min-h-[115px] sm:min-h-[125px] p-3.5 rounded-xl border flex flex-col justify-between cursor-pointer transition-all duration-200 select-none ${
                  tile.isMatched
                    ? 'bg-emerald-500/10 border-emerald-500/40 opacity-70 cursor-default shadow-none pointer-events-none'
                    : isMismatched
                    ? 'bg-red-500/10 border-red-500 text-red-400 animate-shake shadow-md'
                    : isSelected
                    ? 'bg-[var(--accent)] text-[var(--accent-contrast)] border-[var(--accent)] shadow-lg scale-[1.02] ring-2 ring-[var(--accent)]/40'
                    : 'bg-[var(--bg-base)] border-[var(--border-subtle)] hover:border-[var(--accent)]/60 hover:shadow-md hover:-translate-y-0.5'
                }`}
              >
                {/* Top Badge: Type & Category */}
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span
                    className={`text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded font-bold ${
                      tile.isMatched
                        ? 'bg-emerald-500/20 text-emerald-400'
                        : isSelected
                        ? 'bg-black/20 text-white'
                        : tile.type === 'article'
                        ? 'bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]'
                        : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                    }`}
                  >
                    {tile.type === 'article' ? 'Article / Precedent' : 'Concept / Ratio'}
                  </span>
                  {tile.isMatched && (
                    <span className="text-[10px] font-mono text-emerald-400 font-bold flex items-center gap-0.5">
                      <CheckCircle2 className="w-3 h-3" />
                      Locked
                    </span>
                  )}
                </div>

                {/* Primary Content Text */}
                <h4
                  className={`text-xs sm:text-sm font-bold leading-snug line-clamp-3 ${
                    tile.isMatched
                      ? 'text-emerald-300'
                      : isSelected
                      ? 'text-white'
                      : 'text-[var(--text-primary)]'
                  }`}
                >
                  {tile.content}
                </h4>

                {/* SubContent / Mnemonic Clue */}
                {tile.subContent && (
                  <p
                    className={`text-[10px] mt-1 line-clamp-2 leading-relaxed ${
                      tile.isMatched
                        ? 'text-emerald-400/80 italic'
                        : isSelected
                        ? 'text-white/80'
                        : 'text-[var(--text-muted)]'
                    }`}
                  >
                    {tile.subContent}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
