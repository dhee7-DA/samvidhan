import React, { useState, useEffect, useRef } from 'react';
import {
  Zap,
  Timer,
  Trophy,
  Flame,
  RotateCcw,
  Volume2,
  VolumeX,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Play,
  ArrowRight
} from 'lucide-react';
import { BLITZ_QUESTIONS, type BlitzQuestion } from '../../../data/articleBlitzData';
import { recordBlitzResult } from '../../../services/judicialCareerService';
import { arcadeAudio } from '../../../services/arcadeAudioService';
import { recordMistake } from '../../../services/mistakesService';
import { useTheme } from '../../../context/ThemeContext';

interface Props {
  onAwardResult: (xp: number, levelUp: boolean, newBadges: string[]) => void;
}

export const ArticleBlitzGame: React.FC<Props> = ({ onAwardResult }) => {
  const { launchFlashcardDeck } = useTheme();

  // Settings
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'rights' | 'union-state' | 'core'>('all');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [muted, setMuted] = useState<boolean>(() => arcadeAudio.isMuted());

  // In-game stats
  const [questions, setQuestions] = useState<BlitzQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [missedQuestions, setMissedQuestions] = useState<BlitzQuestion[]>([]);
  const [addedMistakeIds, setAddedMistakeIds] = useState<string[]>([]);

  // Feedback states
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);

  const timerRef = useRef<any>(null);

  const filteredPool = React.useMemo(() => {
    if (categoryFilter === 'all') return BLITZ_QUESTIONS;
    return BLITZ_QUESTIONS.filter((q) => q.category === categoryFilter);
  }, [categoryFilter]);

  const toggleMute = () => {
    const next = !muted;
    setMuted(next);
    arcadeAudio.setMuted(next);
  };

  const startGame = () => {
    const shuffled = [...filteredPool].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setMissedQuestions([]);
    setAddedMistakeIds([]);
    setTimeLeft(60);
    setIsGameOver(false);
    setIsPlaying(true);
    setFeedback(null);
    setSelectedOpt(null);

    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          endGame();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const endGame = () => {
    setIsPlaying(false);
    setIsGameOver(true);
    arcadeAudio.playFanfare();
  };

  useEffect(() => {
    if (isGameOver) {
      const res = recordBlitzResult(score, maxStreak);
      onAwardResult(
        res.gainedXP,
        res.leveledUp,
        res.newBadges.map((b) => b.title)
      );
    }
  }, [isGameOver]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleSelectOption = (opt: string) => {
    if (!isPlaying || feedback) return;

    const currentQ = questions[currentIndex];
    setSelectedOpt(opt);

    if (opt === currentQ.correctAnswer) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);
      const points = 1 + Math.floor(newStreak / 3);
      setScore((s) => s + points);
      setFeedback('correct');
      arcadeAudio.playCorrect(newStreak);
    } else {
      setStreak(0);
      setFeedback('wrong');
      setMissedQuestions((m) => [...m, currentQ]);
      arcadeAudio.playWrong();
    }

    setTimeout(() => {
      setFeedback(null);
      setSelectedOpt(null);
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex((i) => i + 1);
      } else {
        // Reshuffle loop
        const reshuffled = [...filteredPool].sort(() => Math.random() - 0.5);
        setQuestions(reshuffled);
        setCurrentIndex(0);
      }
    }, 320);
  };

  // Keyboard shortcut listener (1, 2, 3, 4)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isPlaying || feedback) return;
      if (['1', '2', '3', '4'].includes(e.key)) {
        const idx = parseInt(e.key, 10) - 1;
        const currentQ = questions[currentIndex];
        if (currentQ && currentQ.options[idx]) {
          handleSelectOption(currentQ.options[idx]);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying, feedback, currentIndex, questions]);

  const handleAddMistake = (q: BlitzQuestion) => {
    const correctIdx = q.options.indexOf(q.correctAnswer);
    recordMistake({
      id: `blitz-${q.id}`,
      questionId: q.id,
      dayNumber: 0,
      dayTitle: 'Constitutional Arcade Blitz',
      round: 'Speed Recall',
      question: `Which constitutional article governs: "${q.title}"? (${q.clue})`,
      options: q.options,
      correctAnswer: correctIdx >= 0 ? correctIdx : 0,
      userAnswer: -1,
      explanation: `${q.clue} (Exam Trap: ${q.examTrapNote})`,
      statutoryAnchor: q.articleNumber
    });
    setAddedMistakeIds((prev) => [...prev, q.id]);
  };

  const currentQ = questions[currentIndex];

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center text-zinc-300">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                Rapid Reflex Drill
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)]">
                60 Seconds
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[var(--text-primary)]">
              Article Blitz
            </h2>
          </div>
        </div>

        {/* Category Pills & Sound Toggle */}
        <div className="flex items-center gap-2">
          {!isPlaying && (
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs font-mono">
              <button
                onClick={() => setCategoryFilter('all')}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  categoryFilter === 'all'
                    ? 'bg-[var(--accent)] text-white font-bold'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                All (1–395)
              </button>
              <button
                onClick={() => setCategoryFilter('rights')}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  categoryFilter === 'rights'
                    ? 'bg-[var(--accent)] text-white font-bold'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                Rights
              </button>
              <button
                onClick={() => setCategoryFilter('union-state')}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  categoryFilter === 'union-state'
                    ? 'bg-[var(--accent)] text-white font-bold'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                Union/State
              </button>
            </div>
          )}

          <button
            onClick={toggleMute}
            className="w-9 h-9 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all"
            title={muted ? 'Unmute' : 'Mute'}
          >
            {muted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
          </button>
        </div>
      </div>

      {/* Game Not Started Screen */}
      {!isPlaying && !isGameOver && (
        <div className="p-8 sm:p-12 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-center space-y-6 animate-fadeIn">
          <div className="w-12 h-12 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-zinc-300 flex items-center justify-center mx-auto shadow-xs">
            <Zap className="w-6 h-6" />
          </div>

          <div className="max-w-md mx-auto space-y-2">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--text-primary)]">
              60-Second Article Sprint
            </h3>
            <p className="text-xs sm:text-sm font-mono text-[var(--text-muted)] leading-relaxed">
              Test your recall speed under pressure. Match the constitutional provision or clue to the correct Article number. Use keyboard keys [1, 2, 3, 4] or tap to answer.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[var(--text-secondary)]">
            <div className="flex items-center gap-2">
              <Timer className="w-4 h-4 text-zinc-400" /> 60-Second Clock
            </div>
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-rose-500" /> Streak Multipliers
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-emerald-500" /> Earn Career XP
            </div>
          </div>

          <button
            onClick={startGame}
            className="px-8 py-3 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs font-mono tracking-wider uppercase inline-flex items-center gap-2.5 transition-all shadow-xs cursor-pointer"
          >
            <Play className="w-4 h-4 fill-current" /> Start 60s Blitz
          </button>
        </div>
      )}

      {/* Active Game Arena */}
      {isPlaying && currentQ && (
        <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-6 animate-fadeIn">
          {/* Top Live Stats Bar */}
          <div className="flex items-center justify-between gap-4">
            {/* Timer with color shift */}
            <div className="flex items-center gap-2">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-sm border ${
                  timeLeft <= 10
                    ? 'bg-rose-500/10 border-rose-500 text-rose-500 animate-pulse'
                    : 'bg-zinc-800 text-zinc-200 border-zinc-700'
                }`}
              >
                {timeLeft}s
              </div>
              <span className="text-xs font-mono text-[var(--text-muted)] uppercase hidden sm:inline">
                Time Remaining
              </span>
            </div>

            {/* Score & Multiplier */}
            <div className="flex items-center gap-3">
              <div className="px-3.5 py-1.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex items-center gap-2 font-mono">
                <span className="text-xs text-[var(--text-muted)]">Score:</span>
                <span className="text-sm font-bold text-[var(--text-primary)]">{score}</span>
              </div>
              {streak > 1 && (
                <div className="px-3 py-1.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 font-mono text-xs font-bold flex items-center gap-1.5 animate-bounce">
                  <Flame className="w-3.5 h-3.5 fill-current" />
                  {streak}x Combo!
                </div>
              )}
            </div>
          </div>

          {/* Time Progress Bar */}
          <div className="w-full h-1.5 rounded-full bg-[var(--bg-base)] overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 ${
                timeLeft <= 10 ? 'bg-rose-500' : 'bg-zinc-300 dark:bg-zinc-400'
              }`}
              style={{ width: `${(timeLeft / 60) * 100}%` }}
            />
          </div>

          {/* Question Card */}
          <div
            className={`p-6 rounded-2xl border transition-all text-center space-y-2 ${
              feedback === 'correct'
                ? 'bg-emerald-950/20 border-emerald-500 ring-2 ring-emerald-500/30'
                : feedback === 'wrong'
                ? 'bg-rose-950/20 border-rose-500 ring-2 ring-rose-500/30'
                : 'bg-[var(--bg-base)] border-[var(--border-subtle)]'
            }`}
          >
            <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded-md bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)] font-semibold">
              {currentQ.part} • {currentQ.category.toUpperCase()}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--text-primary)]">
              "{currentQ.title}"
            </h3>
            <p className="text-xs sm:text-sm font-mono text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
              {currentQ.clue}
            </p>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedOpt === opt;
              const isCorrectAnswer = opt === currentQ.correctAnswer;
              let btnStyle = 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-zinc-500 cursor-pointer';

              if (feedback) {
                if (isCorrectAnswer) {
                  btnStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-400 font-bold';
                } else if (isSelected) {
                  btnStyle = 'bg-rose-500/20 border-rose-500 text-rose-400';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(opt)}
                  disabled={!!feedback}
                  className={`p-4 rounded-xl border text-left font-mono transition-all flex items-center justify-between ${btnStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-center text-xs font-bold text-[var(--text-muted)]">
                      {idx + 1}
                    </span>
                    <span className="text-sm font-bold">{opt}</span>
                  </div>
                  {feedback && isCorrectAnswer && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  )}
                  {feedback && isSelected && !isCorrectAnswer && (
                    <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="text-center text-[10px] font-mono text-[var(--text-muted)]">
            Tip: Press number keys [1], [2], [3], [4] on your keyboard for maximum speed!
          </div>
        </div>
      )}

      {/* Game Over Summary Screen */}
      {isGameOver && (
        <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-6 animate-fadeIn">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-zinc-300 flex items-center justify-center mx-auto shadow-xs">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-[var(--text-primary)]">
              Blitz Round Complete!
            </h3>
            <p className="text-xs font-mono text-[var(--text-muted)]">
              Here is your constitutional recall performance breakdown.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-center">
              <span className="text-[10px] font-mono uppercase text-[var(--text-muted)]">Final Score</span>
              <p className="text-2xl font-bold font-mono text-[var(--text-primary)] mt-1">{score}</p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-center">
              <span className="text-[10px] font-mono uppercase text-[var(--text-muted)]">Max Streak</span>
              <p className="text-2xl font-bold font-mono text-rose-500 mt-1">{maxStreak}x</p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-center">
              <span className="text-[10px] font-mono uppercase text-[var(--text-muted)]">Questions Seen</span>
              <p className="text-2xl font-bold font-mono text-sky-400 mt-1">{currentIndex}</p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-center">
              <span className="text-[10px] font-mono uppercase text-[var(--text-muted)]">Career XP</span>
              <p className="text-2xl font-bold font-mono text-emerald-400 mt-1">+{Math.max(50, score * 20 + maxStreak * 10)}</p>
            </div>
          </div>

          {/* Missed Questions & Remediation Section */}
          {missedQuestions.length > 0 && (
            <div className="p-5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase text-rose-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  Review & Remediate Missed Articles ({missedQuestions.length})
                </span>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">
                  Save to Mistakes Bank for Leitner repetition
                </span>
              </div>

              <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                {missedQuestions.map((q) => {
                  const isAdded = addedMistakeIds.includes(q.id);
                  return (
                    <div
                      key={q.id}
                      className="p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs font-mono"
                    >
                      <div>
                        <span className="font-bold text-[var(--text-primary)] mr-2">{q.articleNumber}:</span>
                        <span className="text-[var(--text-primary)]">{q.title}</span>
                        <p className="text-[11px] text-[var(--text-muted)] mt-0.5">{q.examTrapNote}</p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => handleAddMistake(q)}
                          disabled={isAdded}
                          className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${
                            isAdded
                              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                              : 'bg-rose-500/10 text-rose-400 border border-rose-500/20 hover:bg-rose-500/20'
                          }`}
                        >
                          {isAdded ? 'Added to Mistakes' : '+ Save to Bank'}
                        </button>
                        <button
                          onClick={() => launchFlashcardDeck('articles', 'all', q.articleNumber.replace('Article ', ''))}
                          className="px-2.5 py-1 rounded-md bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-[11px]"
                        >
                          Drill in SRS
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Action Row */}
          <div className="flex items-center justify-center gap-4 pt-2">
            <button
              onClick={startGame}
              className="px-8 py-3 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs font-mono tracking-wider uppercase flex items-center gap-2 transition-all shadow-xs cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" /> Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
