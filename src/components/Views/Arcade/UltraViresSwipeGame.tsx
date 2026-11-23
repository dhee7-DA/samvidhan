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
    <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn select-none">
      {/* =====================================================================
          HEADER BANNER
      ===================================================================== */}
      <div className="p-5 md:p-6 rounded-3xl bg-[var(--bg-card)] border-2 border-[var(--border-subtle)] shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-500/15 text-rose-400 border border-rose-500/30 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                60-Second Constitutional Reflex
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-[var(--text-muted)] bg-[var(--bg-base)] border border-[var(--border-subtle)]">
                Intra Vires 🟢 vs Ultra Vires 🔴
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[var(--text-primary)] tracking-tight flex items-center gap-2.5">
              <span>⚡</span>
              Ultra Vires: 60s Swipe Drill
            </h2>
            <p className="text-xs md:text-sm text-[var(--text-secondary)] mt-1">
              Test your instinctive constitutional reflexes. Classify real-world executive orders, statutory clauses, and police powers as constitutionally valid or void.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* 60s Countdown Timer */}
            <div
              className={`p-3 px-4 rounded-2xl border flex items-center gap-2 font-mono font-black text-base transition-all ${
                timeLeft <= 10 && gameState === 'playing'
                  ? 'bg-rose-500/20 border-rose-500 text-rose-400 animate-pulse'
                  : 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-primary)]'
              }`}
            >
              <Timer className="w-4 h-4 text-amber-500" />
              <span>{timeLeft}s</span>
            </div>

            <button
              onClick={toggleMute}
              className="p-3 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 text-amber-500" />}
            </button>

            {gameState !== 'idle' && (
              <button
                onClick={handleStartGame}
                className="p-3 px-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs font-mono font-bold text-[var(--text-secondary)] hover:text-amber-400 transition-all flex items-center gap-1.5"
                title="Restart Drill"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Restart</span>
              </button>
            )}
          </div>
        </div>

        {/* Live Score & Combo Meter */}
        <div className="pt-3 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-4">
            <span className="text-emerald-400 font-bold">
              ✓ {correctCount} Correct
            </span>
            <span className="text-rose-400 font-bold">
              ✕ {wrongCount} Missed
            </span>
          </div>

          {/* Current Streak with Flame */}
          <div className="flex items-center gap-2">
            <Flame
              className={`w-4 h-4 ${
                currentStreak >= 3 ? 'text-amber-500 fill-current animate-bounce' : 'text-zinc-600'
              }`}
            />
            <span className="font-bold text-amber-400">
              {currentStreak}x Combo Streak (Best: {bestStreak}x)
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================================
          SCREEN 1: IDLE / BRIEFING
      ===================================================================== */}
      {gameState === 'idle' && (
        <div className="p-8 md:p-10 rounded-3xl bg-[var(--bg-card)] border-2 border-[var(--border-subtle)] text-center space-y-6 animate-fadeIn shadow-2xl">
          <div className="inline-flex p-5 rounded-3xl bg-amber-500/10 border border-amber-500/30 text-5xl shadow-inner animate-pulse">
            ⚡
          </div>

          <div className="max-w-xl mx-auto space-y-2">
            <h3 className="text-2xl font-black text-[var(--text-primary)]">
              60 Seconds of Pure Constitutional Instinct
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Every second counts in civil service and judicial service prelims. You have 60 seconds to decide whether real-world governmental actions are <strong>Intra Vires</strong> (within constitutional powers) or <strong>Ultra Vires</strong> (unconstitutional and void).
            </p>
          </div>

          {/* Key Controls Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto pt-2">
            <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono flex items-center justify-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Left Arrow: <strong>ULTRA VIRES</strong></span>
            </div>
            <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center justify-center gap-2">
              <span>Right Arrow: <strong>INTRA VIRES</strong></span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          <div className="pt-4 flex justify-center">
            <button
              onClick={handleStartGame}
              className="px-10 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-black text-sm font-mono tracking-wider uppercase transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2.5 cursor-pointer"
            >
              <Zap className="w-5 h-5 fill-current" />
              <span>Start 60s Swipe Drill</span>
            </button>
          </div>
        </div>
      )}

      {/* =====================================================================
          SCREEN 2: ACTIVE 60-SECOND DRILL
      ===================================================================== */}
      {gameState === 'playing' && currentScenario && (
        <div className="space-y-4 animate-fadeIn">
          {/* Main Scenario Flash Card */}
          <div className="p-6 md:p-8 rounded-3xl bg-[var(--bg-card)] border-2 border-[var(--border-subtle)] space-y-4 shadow-xl min-h-[220px] flex flex-col justify-between relative overflow-hidden">
            {/* Top Tag & Article Hint */}
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3 text-xs font-mono">
              <span className="px-2.5 py-0.5 rounded-md bg-amber-500/15 text-amber-400 border border-amber-500/30 font-bold">
                {currentScenario.category}
              </span>
              <span className="text-[var(--text-muted)] font-bold">
                Anchor: {currentScenario.primaryArticle}
              </span>
            </div>

            {/* Situation Prompt */}
            <div className="py-2 text-center">
              <h3 className="text-lg md:text-2xl font-black text-[var(--text-primary)] leading-snug">
                "{currentScenario.situation}"
              </h3>
            </div>

            {/* Prompt Instruction */}
            <div className="text-center text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
              Is this Governmental Action Constitutional or Unconstitutional?
            </div>
          </div>

          {/* Two Big Tactile Swipe Buttons */}
          <div className="grid grid-cols-2 gap-4">
            {/* Button 1: ULTRA VIRES (Left) */}
            <button
              onClick={() => handleAnswer('ULTRA_VIRES')}
              className="p-6 sm:p-7 rounded-3xl bg-rose-500/10 hover:bg-rose-500/25 border-2 border-rose-500/40 text-rose-300 font-mono font-black text-sm sm:text-base uppercase tracking-wider transition-all flex flex-col items-center justify-center gap-1.5 shadow-lg hover:scale-102 active:scale-98 cursor-pointer group"
            >
              <div className="flex items-center gap-2 text-rose-400 group-hover:scale-110 transition-transform">
                <ArrowLeft className="w-5 h-5" />
                <XCircle className="w-6 h-6" />
              </div>
              <span>ULTRA VIRES</span>
              <span className="text-[10px] font-normal text-rose-400/80">
                (Unconstitutional / Void)
              </span>
            </button>

            {/* Button 2: INTRA VIRES (Right) */}
            <button
              onClick={() => handleAnswer('INTRA_VIRES')}
              className="p-6 sm:p-7 rounded-3xl bg-emerald-500/10 hover:bg-emerald-500/25 border-2 border-emerald-500/40 text-emerald-300 font-mono font-black text-sm sm:text-base uppercase tracking-wider transition-all flex flex-col items-center justify-center gap-1.5 shadow-lg hover:scale-102 active:scale-98 cursor-pointer group"
            >
              <div className="flex items-center gap-2 text-emerald-400 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-6 h-6" />
                <ArrowRight className="w-5 h-5" />
              </div>
              <span>INTRA VIRES</span>
              <span className="text-[10px] font-normal text-emerald-400/80">
                (Constitutional / Valid)
              </span>
            </button>
          </div>

          {/* Instant One-Line Ratio Feed */}
          {lastFeedback && (
            <div
              className={`p-4 rounded-2xl border text-xs font-mono space-y-1 animate-fadeIn ${
                lastFeedback.wasCorrect
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                  : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
              }`}
            >
              <div className="flex items-center justify-between font-bold">
                <span>
                  {lastFeedback.wasCorrect ? '✓ CORRECT JURIDICAL INSTINCT!' : '✕ CONSTITUTIONAL TRAP!'}
                </span>
                <span>
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
          SCREEN 3: GAME OVER / SCORECARD & TRAP REVIEW
      ===================================================================== */}
      {gameState === 'gameover' && (
        <div className="p-6 md:p-8 rounded-3xl bg-[var(--bg-card)] border-2 border-[var(--border-subtle)] space-y-6 animate-fadeIn shadow-2xl">
          <div className="text-center space-y-2 pb-4 border-b border-[var(--border-subtle)]">
            <div className="inline-flex p-4 rounded-3xl bg-amber-500/10 border border-amber-500/30 text-4xl shadow-inner animate-bounce">
              ⚡
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-[var(--text-primary)]">
              60-Second Drill Completed!
            </h3>
            <p className="text-xs md:text-sm text-[var(--text-secondary)]">
              Your instant constitutional reflexes and legal accuracy breakdown:
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-3.5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1">
              <span className="text-[10px] font-mono text-[var(--text-muted)] block uppercase">
                Correct Calls
              </span>
              <span className="text-2xl font-black text-emerald-400">{correctCount}</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1">
              <span className="text-[10px] font-mono text-[var(--text-muted)] block uppercase">
                Accuracy
              </span>
              <span className="text-2xl font-black text-amber-400">
                {correctCount + wrongCount > 0
                  ? Math.round((correctCount / (correctCount + wrongCount)) * 100)
                  : 0}
                %
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1">
              <span className="text-[10px] font-mono text-[var(--text-muted)] block uppercase">
                Best Combo Streak
              </span>
              <span className="text-2xl font-black text-sky-400">{bestStreak}x</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1">
              <span className="text-[10px] font-mono text-[var(--text-muted)] block uppercase">
                Career XP Earned
              </span>
              <span className="text-2xl font-black text-purple-400">
                +{correctCount * 15} XP
              </span>
            </div>
          </div>

          {/* Missed Scenarios Review Drawer */}
          {missedScenarios.length > 0 && (
            <div className="p-4 rounded-2xl bg-rose-500/5 border border-rose-500/20 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-rose-400 font-bold flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4" />
                Review Missed Constitutional Traps ({missedScenarios.length}):
              </h4>

              <div className="space-y-2.5 max-h-60 overflow-y-auto divide-y divide-[var(--border-subtle)]">
                {missedScenarios.map((sc, idx) => (
                  <div key={idx} className="pt-2 text-xs space-y-1">
                    <span className="font-bold text-[var(--text-primary)] block">
                      "{sc.situation}"
                    </span>
                    <div className="flex items-center gap-2 font-mono text-[10px]">
                      <span className="px-2 py-0.5 rounded bg-amber-500/15 text-amber-400 font-bold">
                        Correct: {sc.verdict.replace('_', ' ')}
                      </span>
                      <span className="text-[var(--text-muted)]">
                        {sc.governingPrecedentOrRule} ({sc.primaryArticle})
                      </span>
                    </div>
                    <p className="text-[11px] text-[var(--text-secondary)] italic">
                      {sc.oneLineRatio}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={handleStartGame}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-black text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Zap className="w-4 h-4 fill-current" />
              <span>Play Another 60s Round</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
