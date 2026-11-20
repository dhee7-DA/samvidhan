import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  AlertTriangle,
  Flame,
  Clock,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Award,
  Zap,
  ArrowRight,
  Shield,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { TRAP_BUSTER_QUESTIONS, type TrapBusterQuestion } from '../../../data/trapBusterData';
import { arcadeAudio } from '../../../services/arcadeAudioService';
import { awardCareerXP } from '../../../services/judicialCareerService';

interface TrapBusterGameProps {
  onAwardResult?: (gainedXP: number, leveledUp: boolean, newBadges: string[]) => void;
}

export const TrapBusterGame: React.FC<TrapBusterGameProps> = ({ onAwardResult }) => {
  // Game session states: 'intro' | 'playing' | 'revealed' | 'summary'
  const [gameState, setGameState] = useState<'intro' | 'playing' | 'revealed' | 'summary'>('intro');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState<boolean | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(30);

  // Shuffled questions
  const [deck, setDeck] = useState<TrapBusterQuestion[]>(() => {
    return [...TRAP_BUSTER_QUESTIONS].sort(() => Math.random() - 0.5);
  });

  const currentQ = deck[currentIndex] || deck[0];

  // Timer loop when playing
  useEffect(() => {
    let timer: any = null;
    if (gameState === 'playing' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleTimeExpired();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [gameState, timeLeft]);

  const handleStartGame = () => {
    const shuffled = [...TRAP_BUSTER_QUESTIONS].sort(() => Math.random() - 0.5);
    setDeck(shuffled);
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setTimeLeft(30);
    setLastAnswerCorrect(null);
    setGameState('playing');
    arcadeAudio.playGavel();
  };

  const handleTimeExpired = () => {
    setGameState('summary');
    arcadeAudio.playFanfare();
    const earnedXP = score * 15 + maxStreak * 10;
    if (earnedXP > 0) {
      const res = awardCareerXP(earnedXP, 'drill-completed');
      if (onAwardResult) {
        onAwardResult(earnedXP, res.leveledUp, res.newBadges.map((b) => b.title));
      }
    }
  };

  const handleSelectAnswer = useCallback((userChoice: boolean) => {
    if (gameState !== 'playing') return;

    const isCorrect = userChoice === currentQ.isTrue;
    setLastAnswerCorrect(isCorrect);

    if (isCorrect) {
      arcadeAudio.playCorrect(streak + 1);
      const newStreak = streak + 1;
      setStreak(newStreak);
      setMaxStreak((m) => Math.max(m, newStreak));
      // Base score 100 + streak multiplier
      const multiplier = newStreak >= 5 ? 3 : newStreak >= 3 ? 2 : 1;
      setScore((s) => s + 100 * multiplier);
      // Reward time bonus: +2 seconds
      setTimeLeft((t) => Math.min(45, t + 2));
    } else {
      arcadeAudio.playWrong();
      setStreak(0);
      // Time penalty: -3 seconds
      setTimeLeft((t) => Math.max(1, t - 3));
    }

    setGameState('revealed');
  }, [gameState, currentQ, streak]);

  const handleNextQuestion = () => {
    if (currentIndex + 1 >= deck.length || timeLeft <= 0) {
      setGameState('summary');
      arcadeAudio.playFanfare();
      const earnedXP = score * 15 + maxStreak * 10;
      if (earnedXP > 0) {
        const res = awardCareerXP(earnedXP, 'drill-completed');
        if (onAwardResult) {
          onAwardResult(earnedXP, res.leveledUp, res.newBadges.map((b) => b.title));
        }
      }
    } else {
      setCurrentIndex((c) => c + 1);
      setGameState('playing');
    }
  };

  // Keyboard shortcut listener (T / F, 1 / 2, Space / Enter to advance)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameState === 'playing') {
        if (e.key.toLowerCase() === 't' || e.key === '1') {
          e.preventDefault();
          handleSelectAnswer(true);
        } else if (e.key.toLowerCase() === 'f' || e.key === '2') {
          e.preventDefault();
          handleSelectAnswer(false);
        }
      } else if (gameState === 'revealed') {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleNextQuestion();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState, handleSelectAnswer]);

  return (
    <div className="flex flex-col gap-6 animate-fadeIn">
      {/* Intro State */}
      {gameState === 'intro' && (
        <div className="p-8 sm:p-10 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm text-center max-w-2xl mx-auto flex flex-col items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 shadow-sm">
            <AlertTriangle className="w-8 h-8" />
          </div>

          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-rose-500/10 text-rose-400 border border-rose-500/30 mb-2">
              <Flame className="w-3.5 h-3.5" />
              <span>30-Second Adrenaline Reflex</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Constitutional Trap-Buster Sprint
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-2 max-w-lg leading-relaxed">
              Examiners love setting subtle traps: death sentence pardons under Art 161, joint sittings on amendments, and emergency rights. You have 30 seconds to bust as many traps as possible.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 w-full max-w-md text-left font-mono text-xs">
            <div className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
              <span className="text-[10px] text-[var(--text-muted)] block">CLOCK</span>
              <strong className="text-amber-400 font-bold">30s + Time Bonus</strong>
            </div>
            <div className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
              <span className="text-[10px] text-[var(--text-muted)] block">INPUTS</span>
              <strong className="text-[var(--accent)] font-bold">[T] / [F] Keys</strong>
            </div>
            <div className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
              <span className="text-[10px] text-[var(--text-muted)] block">REWARDS</span>
              <strong className="text-emerald-400 font-bold">XP & Career Rank</strong>
            </div>
          </div>

          <button
            onClick={handleStartGame}
            className="w-full max-w-md py-3.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-mono text-sm font-extrabold tracking-wider shadow-lg transition-all btn-tactile flex items-center justify-center gap-2"
          >
            <Zap className="w-4 h-4 fill-current" />
            <span>START TRAP SPRINT</span>
          </button>
        </div>
      )}

      {/* Playing & Revealed State */}
      {(gameState === 'playing' || gameState === 'revealed') && (
        <div className="flex flex-col gap-5 max-w-3xl mx-auto w-full">
          {/* Header Stats Bar */}
          <div className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm flex items-center justify-between gap-3 font-mono text-xs">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-[var(--text-secondary)]">
                <span>Score:</span>
                <strong className="text-base text-[var(--text-primary)] font-extrabold">{score}</strong>
              </div>
              {streak > 1 && (
                <div className="flex items-center gap-1 text-amber-400 font-bold animate-bounce">
                  <Flame className="w-4 h-4 fill-current" />
                  <span>{streak}x Combo</span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-rose-400" />
              <div className="w-28 sm:w-40 bg-[var(--bg-base)] h-2.5 rounded-full overflow-hidden border border-[var(--border-subtle)]">
                <div
                  className={`h-full transition-all duration-300 ${
                    timeLeft <= 10 ? 'bg-rose-500 animate-pulse' : 'bg-amber-400'
                  }`}
                  style={{ width: `${Math.min(100, (timeLeft / 30) * 100)}%` }}
                />
              </div>
              <span className={`font-black text-sm ${timeLeft <= 10 ? 'text-rose-400' : 'text-[var(--text-primary)]'}`}>
                {timeLeft}s
              </span>
            </div>
          </div>

          {/* Statement Question Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-md flex flex-col gap-6">
            <div className="flex items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
              <span className="text-[11px] font-mono uppercase font-bold text-rose-400 px-2.5 py-1 rounded-lg bg-rose-500/10 border border-rose-500/30">
                {currentQ.trapCategory}
              </span>
              <span className="text-xs font-mono text-emerald-400 font-semibold">
                {currentQ.articleAnchor}
              </span>
            </div>

            {/* The Assertion */}
            <div className="py-2">
              <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider block mb-2 font-bold">
                Constitutional Assertion:
              </span>
              <blockquote className="text-base sm:text-lg font-serif font-bold text-[var(--text-primary)] leading-relaxed">
                "{currentQ.statement}"
              </blockquote>
            </div>

            {/* Answer Buttons */}
            {gameState === 'playing' ? (
              <div className="grid grid-cols-2 gap-4 pt-2">
                <button
                  onClick={() => handleSelectAnswer(true)}
                  className="py-4 px-4 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/60 font-mono text-sm font-extrabold flex flex-col items-center justify-center gap-1 transition-all btn-tactile shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>TRUE</span>
                  </div>
                  <span className="text-[10px] text-emerald-400/70 font-normal">Press [T] or [1]</span>
                </button>

                <button
                  onClick={() => handleSelectAnswer(false)}
                  className="py-4 px-4 rounded-2xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 hover:border-rose-500/60 font-mono text-sm font-extrabold flex flex-col items-center justify-center gap-1 transition-all btn-tactile shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <XCircle className="w-5 h-5" />
                    <span>FALSE</span>
                  </div>
                  <span className="text-[10px] text-rose-400/70 font-normal">Press [F] or [2]</span>
                </button>
              </div>
            ) : (
              /* Revealed Feedback Box */
              <div className="flex flex-col gap-4 animate-fadeIn">
                <div
                  className={`p-4 rounded-2xl border flex items-start gap-3 ${
                    lastAnswerCorrect
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                      : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
                  }`}
                >
                  {lastAnswerCorrect ? (
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-400" />
                  ) : (
                    <XCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-400" />
                  )}
                  <div className="space-y-1">
                    <div className="font-mono text-xs font-bold uppercase tracking-wider">
                      {lastAnswerCorrect
                        ? '🎯 TRAP BUSTED! (+100 PTS • +2s BONUS)'
                        : '⚠️ CAUGHT IN THE EXAMINER’S TRAP! (-3s PENALTY)'}
                    </div>
                    <div className="text-xs font-mono font-bold">
                      Correct Answer: <strong>{currentQ.isTrue ? 'TRUE' : 'FALSE'}</strong>
                    </div>
                    <p className="text-xs leading-relaxed text-[var(--text-primary)] mt-1">
                      {currentQ.examinerExplanation}
                    </p>
                    {currentQ.landmarkCitation && (
                      <p className="text-[11px] font-mono text-[var(--text-muted)] italic pt-1">
                        Precedent: {currentQ.landmarkCitation}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  onClick={handleNextQuestion}
                  className="w-full py-3 rounded-xl bg-[var(--accent)] text-[var(--bg-base)] font-mono text-xs font-extrabold shadow-md hover:opacity-95 transition-all btn-tactile flex items-center justify-center gap-2"
                >
                  <span>NEXT QUESTION</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Summary State */}
      {gameState === 'summary' && (
        <div className="p-8 sm:p-10 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm text-center max-w-xl mx-auto flex flex-col items-center gap-5 animate-fadeIn">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-sm">
            <Award className="w-8 h-8" />
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-[var(--text-primary)]">
              Sprint Complete!
            </h2>
            <p className="text-xs text-[var(--text-secondary)] mt-1">
              Your reflex score and combo streaks have been recorded in your Judicial Career Dossier.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 w-full font-mono text-xs">
            <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
              <span className="text-[10px] text-[var(--text-muted)] uppercase block">FINAL SCORE</span>
              <strong className="text-2xl text-[var(--accent)] font-extrabold">{score}</strong>
            </div>
            <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
              <span className="text-[10px] text-[var(--text-muted)] uppercase block">MAX STREAK</span>
              <strong className="text-2xl text-amber-400 font-extrabold">{maxStreak}x</strong>
            </div>
          </div>

          <button
            onClick={handleStartGame}
            className="w-full py-3.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-mono text-xs font-bold tracking-wider shadow-lg transition-all btn-tactile flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>PLAY AGAIN</span>
          </button>
        </div>
      )}
    </div>
  );
};
