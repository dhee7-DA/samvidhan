import React, { useState, useEffect, useCallback } from 'react';
import {
  Zap,
  RotateCcw,
  Volume2,
  VolumeX,
  CheckCircle2,
  XCircle,
  Timer,
  Flame,
  Award,
  ArrowLeft,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  BookOpen,
  Scale
} from 'lucide-react';
import {
  ULTRA_VIRES_DECK,
  getRandomUltraViresQueue,
  type UltraViresScenario
} from '../../../data/ultraViresSwipeData';
import { arcadeAudio } from '../../../services/arcadeAudioService';
import { recordUltraViresResult } from '../../../services/judicialCareerService';

interface UltraViresSwipeGameProps {
  onAwardResult: (gainedXP: number, leveledUp: boolean, newBadges: string[]) => void;
}

export const UltraViresSwipeGame: React.FC<UltraViresSwipeGameProps> = ({
  onAwardResult
}) => {
  // Screen state: 'idle' | 'playing' | 'gameover'
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'gameover'>('idle');

  // 60-Second Timer
  const [timeLeft, setTimeLeft] = useState<number>(60);

  // Deck queue
  const [scenarioQueue, setScenarioQueue] = useState<UltraViresScenario[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Score & Streak
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [wrongCount, setWrongCount] = useState<number>(0);
  const [currentStreak, setCurrentStreak] = useState<number>(0);
  const [bestStreak, setBestStreak] = useState<number>(0);

  // Immediate Flash Feedback
  const [lastFeedback, setLastFeedback] = useState<{
    scenario: UltraViresScenario;
    wasCorrect: boolean;
    userAnswer: 'INTRA_VIRES' | 'ULTRA_VIRES';
  } | null>(null);

  // Missed scenarios for debriefing
  const [missedScenarios, setMissedScenarios] = useState<UltraViresScenario[]>([]);

  const [isMuted, setIsMuted] = useState<boolean>(arcadeAudio.isMuted());

  const currentScenario: UltraViresScenario | undefined = scenarioQueue[currentIndex];

  const toggleMute = () => {
    arcadeAudio.setMuted(!isMuted);
    setIsMuted(!isMuted);
  };

  // Start new 60s drill
  const handleStartGame = () => {
    const queue = getRandomUltraViresQueue(30); // 30 rapid-fire items
    setScenarioQueue(queue);
    setCurrentIndex(0);
    setTimeLeft(60);
    setCorrectCount(0);
    setWrongCount(0);
    setCurrentStreak(0);
    setBestStreak(0);
    setLastFeedback(null);
    setMissedScenarios([]);
    setGameState('playing');
    arcadeAudio.playGavel();
  };

  // Timer Tick
  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null;
    if (gameState === 'playing' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            return 0;
          }
          if (prev <= 6) {
            arcadeAudio.playTick();
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [gameState, timeLeft]);

  // End Game
  const handleEndGame = useCallback(() => {
    setGameState('gameover');
    arcadeAudio.playFanfare();

    const totalAnswered = correctCount + wrongCount;
    const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

    const res = recordUltraViresResult(correctCount, bestStreak, accuracy);
    onAwardResult(
      res.gainedXP,
      res.leveledUp,
      res.newBadges.map((b) => b.title)
    );
  }, [correctCount, wrongCount, bestStreak, onAwardResult]);

  // Trigger End Game when countdown reaches zero
  useEffect(() => {
    if (gameState === 'playing' && timeLeft === 0) {
      handleEndGame();
    }
  }, [gameState, timeLeft, handleEndGame]);

  // Answer handler
  const handleAnswer = useCallback(
    (choice: 'INTRA_VIRES' | 'ULTRA_VIRES') => {
      if (gameState !== 'playing' || !currentScenario) return;

      const isCorrect = choice === currentScenario.verdict;

      setLastFeedback({
        scenario: currentScenario,
        wasCorrect: isCorrect,
        userAnswer: choice
      });

      if (isCorrect) {
        const nextStreak = currentStreak + 1;
        setCurrentStreak(nextStreak);
        if (nextStreak > bestStreak) {
          setBestStreak(nextStreak);
        }
        setCorrectCount((prev) => prev + 1);
        arcadeAudio.playCorrect(nextStreak);
      } else {
        setCurrentStreak(0);
        setWrongCount((prev) => prev + 1);
        setMissedScenarios((prev) => [...prev, currentScenario]);
        arcadeAudio.playWrong();
      }

      // Next scenario or loop
      if (currentIndex + 1 < scenarioQueue.length) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        // Refill queue
        setScenarioQueue((prev) => [...prev, ...getRandomUltraViresQueue(15)]);
        setCurrentIndex((prev) => prev + 1);
      }
    },
    [gameState, currentScenario, currentStreak, bestStreak, currentIndex, scenarioQueue.length]
  );

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameState !== 'playing') return;
      if (e.key === 'ArrowLeft') {
        handleAnswer('ULTRA_VIRES');
      } else if (e.key === 'ArrowRight') {
        handleAnswer('INTRA_VIRES');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState, handleAnswer]);

  return (
    <div className="max-w-4xl mx-auto space-y-3 animate-fadeIn select-none">
      {/* =====================================================================
          SLIM MINIMALIST STATUS BAR
      ===================================================================== */}
      <div className="py-2 px-3 sm:px-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-2.5 text-xs font-mono shadow-xs">
        <div className="flex items-center gap-2.5">
          <span className="font-bold text-[var(--text-primary)] flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            Ultra Vires 60s
          </span>

          {/* 60s Countdown Timer */}
          <div
            className={`px-2 py-0.5 rounded-lg border flex items-center gap-1 font-bold text-xs transition-all ${
              timeLeft <= 10 && gameState === 'playing'
                ? 'bg-rose-500/15 border-rose-500/40 text-rose-400 animate-pulse'
                : 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-secondary)]'
            }`}
          >
            <Timer className="w-3 h-3 text-amber-400" />
            <span>{timeLeft}s</span>
          </div>
        </div>

        {/* Live Score & Controls */}
        <div className="flex items-center gap-2.5 text-[11px]">
          <span className="text-emerald-400 font-semibold">✓ {correctCount}</span>
          <span className="text-rose-400 font-semibold">✕ {wrongCount}</span>
          <span className="text-amber-400 font-bold border-l border-[var(--border-subtle)] pl-2 flex items-center gap-1">
            <Flame className="w-3 h-3 fill-current text-amber-500" />
            {currentStreak}x
          </span>

          <div className="flex items-center gap-1 border-l border-[var(--border-subtle)] pl-2">
            <button
              onClick={toggleMute}
              className="p-1 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-amber-400" />}
            </button>

            {gameState !== 'idle' && (
              <button
                onClick={handleStartGame}
                className="p-1 rounded-lg text-[var(--text-muted)] hover:text-amber-400 transition-all cursor-pointer"
                title="Restart Drill"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* =====================================================================
          SCREEN 1: IDLE / BRIEFING (Minimalist & Compact)
      ===================================================================== */}
      {gameState === 'idle' && (
        <div className="p-5 sm:p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-center space-y-3.5 animate-fadeIn shadow-xs max-w-xl mx-auto">
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
              60 Seconds of Constitutional Reflex
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed max-w-md mx-auto">
              Decide whether real-world governmental actions are <strong>Intra Vires</strong> (valid) or <strong>Ultra Vires</strong> (void).
            </p>
          </div>

          {/* Key Controls Preview */}
          <div className="grid grid-cols-2 gap-2 max-w-xs mx-auto text-[11px] font-mono">
            <div className="py-1 px-2 rounded-lg bg-rose-500/10 border border-rose-500/25 text-rose-300 flex items-center justify-center gap-1">
              <ArrowLeft className="w-3 h-3" />
              <span>← Ultra Vires</span>
            </div>
            <div className="py-1 px-2 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 flex items-center justify-center gap-1">
              <span>Intra Vires →</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>

          <div className="pt-1 flex justify-center">
            <button
              onClick={handleStartGame}
              className="px-6 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-xs font-mono uppercase tracking-wider transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>Start 60s Drill</span>
            </button>
          </div>
        </div>
      )}

      {/* =====================================================================
          SCREEN 2: ACTIVE 60-SECOND DRILL (Compact & Aesthetic)
      ===================================================================== */}
      {gameState === 'playing' && currentScenario && (
        <div className="space-y-2.5 animate-fadeIn">
          {/* Main Scenario Flash Card */}
          <div className="p-4 sm:p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-2.5 shadow-xs min-h-[130px] flex flex-col justify-between">
            {/* Top Tag & Article Hint */}
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-1.5 text-[11px] font-mono">
              <span className="font-semibold text-amber-400">
                {currentScenario.category}
              </span>
              <span className="text-[var(--text-muted)]">
                Anchor: {currentScenario.primaryArticle}
              </span>
            </div>

            {/* Situation Prompt */}
            <div className="py-1 text-center">
              <h3 className="text-sm sm:text-base font-bold text-[var(--text-primary)] leading-snug">
                "{currentScenario.situation}"
              </h3>
            </div>

            {/* Prompt Instruction */}
            <div className="text-center text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
              Constitutional (Intra Vires) or Unconstitutional (Ultra Vires)?
            </div>
          </div>

          {/* Two Sleek Swipe / Click Buttons */}
          <div className="grid grid-cols-2 gap-2">
            {/* Button 1: ULTRA VIRES (Left) */}
            <button
              onClick={() => handleAnswer('ULTRA_VIRES')}
              className="py-2.5 px-3 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-300 font-mono font-bold text-xs uppercase tracking-wide transition-all flex flex-col items-center justify-center gap-0.5 cursor-pointer shadow-2xs"
            >
              <div className="flex items-center gap-1 text-rose-400">
                <ArrowLeft className="w-3.5 h-3.5" />
                <XCircle className="w-3.5 h-3.5" />
              </div>
              <span>ULTRA VIRES</span>
              <span className="text-[9.5px] font-normal text-rose-400/70">
                (Void / ← Arrow)
              </span>
            </button>

            {/* Button 2: INTRA VIRES (Right) */}
            <button
              onClick={() => handleAnswer('INTRA_VIRES')}
              className="py-2.5 px-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-mono font-bold text-xs uppercase tracking-wide transition-all flex flex-col items-center justify-center gap-0.5 cursor-pointer shadow-2xs"
            >
              <div className="flex items-center gap-1 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
              <span>INTRA VIRES</span>
              <span className="text-[9.5px] font-normal text-emerald-400/70">
                (Valid / Right →)
              </span>
            </button>
          </div>

          {/* Instant One-Line Ratio Feed */}
          {lastFeedback && (
            <div
              className={`py-1.5 px-3 rounded-lg border text-xs font-mono space-y-0.5 animate-fadeIn ${
                lastFeedback.wasCorrect
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                  : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
              }`}
            >
              <div className="flex items-center justify-between font-bold text-[11px]">
                <span>
                  {lastFeedback.wasCorrect ? '✓ CORRECT INSTINCT' : '✕ CONSTITUTIONAL TRAP'}
                </span>
                <span className="opacity-80">
                  {lastFeedback.scenario.governingPrecedentOrRule}
                </span>
              </div>
              <p className="text-[11px] opacity-90">
                {lastFeedback.scenario.oneLineRatio}
              </p>
            </div>
          )}
        </div>
      )}

      {/* =====================================================================
          SCREEN 3: GAME OVER / SCORECARD & TRAP REVIEW (Minimalist & Compact)
      ===================================================================== */}
      {gameState === 'gameover' && (
        <div className="p-4 sm:p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-3.5 max-w-xl mx-auto shadow-xs animate-fadeIn">
          <div className="text-center space-y-1 pb-3 border-b border-[var(--border-subtle)]">
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold block">
              60-Second Drill Completed
            </span>
            <h3 className="text-sm sm:text-base font-bold text-[var(--text-primary)]">
              Constitutional Instinct Breakdown
            </h3>
          </div>

          {/* Minimalist Metrics Strip */}
          <div className="grid grid-cols-4 gap-2 text-center font-mono">
            <div className="py-2 px-1.5 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)]">
              <span className="text-[9.5px] text-[var(--text-muted)] block uppercase tracking-wider">
                Correct
              </span>
              <span className="text-sm sm:text-base font-bold text-emerald-400">{correctCount}</span>
            </div>

            <div className="py-2 px-1.5 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)]">
              <span className="text-[9.5px] text-[var(--text-muted)] block uppercase tracking-wider">
                Accuracy
              </span>
              <span className="text-sm sm:text-base font-bold text-amber-400">
                {correctCount + wrongCount > 0
                  ? Math.round((correctCount / (correctCount + wrongCount)) * 100)
                  : 0}
                %
              </span>
            </div>

            <div className="py-2 px-1.5 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)]">
              <span className="text-[9.5px] text-[var(--text-muted)] block uppercase tracking-wider">
                Streak
              </span>
              <span className="text-sm sm:text-base font-bold text-sky-400">{bestStreak}x</span>
            </div>

            <div className="py-2 px-1.5 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)]">
              <span className="text-[9.5px] text-[var(--text-muted)] block uppercase tracking-wider">
                XP
              </span>
              <span className="text-sm sm:text-base font-bold text-purple-400">
                +{correctCount * 15}
              </span>
            </div>
          </div>

          {/* Missed Scenarios Review Drawer */}
          {missedScenarios.length > 0 && (
            <div className="p-3 rounded-lg bg-rose-500/5 border border-rose-500/20 space-y-2">
              <h4 className="text-[11px] font-mono uppercase tracking-wider text-rose-400 font-bold flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5" />
                Review Missed Traps ({missedScenarios.length}):
              </h4>

              <div className="space-y-2 max-h-48 overflow-y-auto divide-y divide-[var(--border-subtle)]">
                {missedScenarios.map((sc, idx) => (
                  <div key={idx} className="pt-1.5 text-xs space-y-0.5">
                    <span className="font-semibold text-[var(--text-primary)] block text-[11.5px]">
                      "{sc.situation}"
                    </span>
                    <div className="flex items-center gap-2 font-mono text-[10px]">
                      <span className="px-1.5 py-0.2 rounded bg-amber-500/15 text-amber-400 font-bold">
                        {sc.verdict.replace('_', ' ')}
                      </span>
                      <span className="text-[var(--text-muted)]">
                        {sc.governingPrecedentOrRule} ({sc.primaryArticle})
                      </span>
                    </div>
                    <p className="text-[10.5px] text-[var(--text-secondary)] italic">
                      {sc.oneLineRatio}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action CTAs */}
          <div className="pt-1 flex items-center justify-center">
            <button
              onClick={handleStartGame}
              className="px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Play Another Round</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
