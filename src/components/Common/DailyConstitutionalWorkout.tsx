import React, { useState, useEffect } from 'react';
import {
  Flame,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Award,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  Sparkles,
  Zap,
  BookOpen,
  ArrowRight,
  HelpCircle,
  Star,
  Puzzle,
  Target
} from 'lucide-react';
import { getTodayWorkout, type DailyWorkout } from '../../data/dailyWorkoutData';
import { awardCareerXP } from '../../services/judicialCareerService';
import { arcadeAudio } from '../../services/arcadeAudioService';
import { useTheme } from '../../context/ThemeContext';

export const DailyConstitutionalWorkout: React.FC = () => {
  const { setActiveTab } = useTheme();
  const workout: DailyWorkout = getTodayWorkout();

  // Streak state
  const [streak, setStreak] = useState<number>(1);
  const [isCompletedToday, setIsCompletedToday] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState<number>(0); // 0: Pair, 1: Ratio, 2: Trap, 3: Drill, 4: Finished

  // Trap reveal state
  const [trapRevealed, setTrapRevealed] = useState<boolean>(false);

  // Drill state
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [drillScore, setDrillScore] = useState<number>(0);
  const [drillSubmitted, setDrillSubmitted] = useState<boolean>(false);

  const openArcadeGame = (gameTab: string) => {
    try {
      sessionStorage.setItem('samvidhan_active_arcade_tab', gameTab);
    } catch {
      // ignore
    }
    setActiveTab('arcade');
  };

  const todayStr = new Date().toISOString().split('T')[0];

  useEffect(() => {
    try {
      const savedStreak = parseInt(localStorage.getItem('samvidhan_workout_streak') || '1', 10);
      const lastDate = localStorage.getItem('samvidhan_workout_last_date') || '';
      
      setStreak(savedStreak);
      if (lastDate === todayStr) {
        setIsCompletedToday(true);
      }
    } catch {
      // fallback
    }
  }, [todayStr]);

  const handleSelectOption = (qIdx: number, optIdx: number) => {
    if (drillSubmitted) return;
    setAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  };

  const handleCompleteDrill = () => {
    let score = 0;
    workout.rapidDrill.forEach((q, idx) => {
      if (answers[idx] === q.correctIndex) {
        score += 1;
      }
    });

    setDrillScore(score);
    setDrillSubmitted(true);

    // Audio cue
    if (score === workout.rapidDrill.length) {
      arcadeAudio.playFanfare();
    } else {
      arcadeAudio.playCorrect(score);
    }

    // Award XP and update streak
    if (!isCompletedToday) {
      awardCareerXP(100, 'Completed Daily 5-Minute Constitutional Workout');
      const newStreak = streak + 1;
      setStreak(newStreak);
      setIsCompletedToday(true);
      try {
        localStorage.setItem('samvidhan_workout_streak', newStreak.toString());
        localStorage.setItem('samvidhan_workout_last_date', todayStr);
      } catch {
        // ignore
      }
    }
    setActiveStep(4);
  };

  const handleResetForPractice = () => {
    setActiveStep(0);
    setTrapRevealed(false);
    setAnswers({});
    setDrillSubmitted(false);
    setDrillScore(0);
  };

  return (
    <div className="rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-5 sm:p-7 shadow-sm relative overflow-hidden transition-all">
      {/* Top Banner & Streak Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[var(--border-subtle)] pb-4 mb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-medium text-[var(--text-muted)]">
            <Flame className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>DAILY 5-MINUTE WORKOUT · DAY {workout.dayId}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight">
            {workout.title}
          </h2>
          <p className="text-xs text-[var(--text-muted)]">
            Theme Pillar: <span className="font-medium text-[var(--text-primary)]">{workout.themePillar}</span> &bull; 4 micro-cards for quick recall.
          </p>
        </div>

        <div className="text-xs font-mono text-[var(--text-muted)] shrink-0">
          <span className="font-bold text-[var(--text-primary)]">{streak}-day streak</span> · {isCompletedToday ? 'Completed Today' : 'Daily Goal Active'}
        </div>
      </div>

      {/* Quick Daily Concept Games (Trifecta) */}
      <div className="mb-5 p-3.5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2.5">
        <div className="flex items-center justify-between text-[11px] font-mono">
          <span className="font-semibold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[var(--text-muted)]" />
            Quick Daily Concept Games (2–3 mins each)
          </span>
          <span className="text-[10px] text-[var(--text-secondary)]">Arcade Mastery Hub</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <button
            onClick={() => openArcadeGame('lex-samvidhan')}
            className="p-2.5 px-3 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-left transition-colors flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] shrink-0">
              <Target className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold text-xs text-[var(--text-primary)] block">
                LexSamvidhan Daily
              </span>
              <span className="text-[10px] text-[var(--text-muted)] line-clamp-1">
                Guess Mystery Article in 6 tries
              </span>
            </div>
          </button>

          <button
            onClick={() => openArcadeGame('connections')}
            className="p-2.5 px-3 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-left transition-colors flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] shrink-0">
              <Puzzle className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold text-xs text-[var(--text-primary)] block">
                Connections 4x4
              </span>
              <span className="text-[10px] text-[var(--text-muted)] line-clamp-1">
                Group 4 related concepts
              </span>
            </div>
          </button>

          <button
            onClick={() => openArcadeGame('ultra-vires')}
            className="p-2.5 px-3 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-left transition-colors flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold text-xs text-[var(--text-primary)] block">
                Ultra Vires 60s
              </span>
              <span className="text-[10px] text-[var(--text-muted)] line-clamp-1">
                Fast Intra vs Ultra Vires calls
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Progress Step Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-6">
        {[
          { label: '1. Article Twin', icon: Zap },
          { label: '2. Landmark Ratio', icon: BookOpen },
          { label: '3. Examiner Trap', icon: AlertTriangle },
          { label: '4. Rapid Recall', icon: Award }
        ].map((step, idx) => {
          const isActive = activeStep === idx;
          const isDone = activeStep > idx || isCompletedToday;
          return (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-2 sm:p-2.5 rounded-xl border text-center transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                isActive
                  ? 'bg-[var(--bg-surface-elevated)] border-[var(--border-strong)] text-[var(--text-primary)] font-semibold shadow-sm'
                  : 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              <step.icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-[var(--accent)]' : isDone ? 'text-[var(--text-secondary)]' : 'text-[var(--text-muted)]'}`} />
              <span className="text-[11px] truncate">{step.label}</span>
            </button>
          );
        })}
      </div>

      {/* STEP 0: Article Twin (+89/+90 Pair) */}
      {activeStep === 0 && (
        <div className="space-y-4 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Union Tile */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[var(--bg-surface)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
                UNION PROVISION
              </span>
              <h3 className="text-xl font-black text-sky-400">{workout.articlePair.unionArticle}</h3>
              <p className="text-sm font-medium text-[var(--text-primary)]">{workout.articlePair.unionTitle}</p>
            </div>

            {/* State Tile */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[var(--bg-surface)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
                STATE CORRESPONDING
              </span>
              <h3 className="text-xl font-black text-emerald-400">{workout.articlePair.stateArticle}</h3>
              <p className="text-sm font-medium text-[var(--text-primary)]">{workout.articlePair.stateTitle}</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)]">
              <Sparkles className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              <span>Deduction Formula: <span className="font-bold text-[var(--text-primary)]">{workout.articlePair.formula}</span></span>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              <span className="font-bold text-[var(--text-primary)]">Key Difference: </span>
              {workout.articlePair.keyDifference}
            </p>
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={() => setActiveStep(1)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--bg-surface-elevated)] hover:bg-[var(--border-strong)] border border-[var(--border-strong)] text-[var(--text-primary)] font-mono text-xs font-semibold transition-all shadow-sm btn-tactile cursor-pointer"
            >
              <span>NEXT: LANDMARK RATIO</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 1: Landmark Ratio of the Day */}
      {activeStep === 1 && (
        <div className="space-y-4 animate-fadeIn">
          <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
              <div>
                <span className="text-[10px] font-mono font-medium px-2.5 py-0.5 rounded bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)] uppercase">
                  {workout.landmarkCase.bench}
                </span>
                <h3 className="text-base sm:text-lg font-black text-[var(--text-primary)] mt-1">
                  {workout.landmarkCase.caseName}
                </h3>
              </div>
              <span className="text-xs font-mono text-[var(--text-muted)]">
                {workout.landmarkCase.citation} ({workout.landmarkCase.year})
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
              <span className="text-[10px] font-mono font-bold text-[var(--text-muted)] block mb-1">
                VERBATIM GOLDEN LINE:
              </span>
              <p className="text-xs sm:text-sm italic font-serif text-[var(--text-primary)] leading-relaxed">
                "{workout.landmarkCase.goldenQuote}"
              </p>
            </div>

            <div className="text-xs sm:text-sm text-[var(--text-secondary)] space-y-1">
              <span className="font-bold text-[var(--text-primary)]">Exam Hall Takeaway: </span>
              <span>{workout.landmarkCase.examTakeaway}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => setActiveStep(0)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>
            <button
              onClick={() => setActiveStep(2)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--bg-surface-elevated)] hover:bg-[var(--border-strong)] border border-[var(--border-strong)] text-[var(--text-primary)] font-mono text-xs font-semibold transition-all shadow-sm btn-tactile cursor-pointer"
            >
              <span>NEXT: EXAMINER TRAP</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: Examiner Trap of the Day */}
      {activeStep === 2 && (
        <div className="space-y-4 animate-fadeIn">
          <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-4">
            <div className="flex items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
              <span className="text-xs font-medium uppercase tracking-wider text-[var(--text-secondary)] flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                Examiner Assertion Trap: {workout.examinerTrap.trapType}
              </span>
              <span className="text-xs font-mono text-[var(--text-muted)]">
                {workout.examinerTrap.articleAnchor}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
              <span className="text-[10px] font-mono font-bold text-[var(--text-muted)] block mb-1">
                EVALUATE THIS STATEMENT:
              </span>
              <p className="text-sm sm:text-base font-medium text-[var(--text-primary)] leading-relaxed">
                "{workout.examinerTrap.assertion}"
              </p>
            </div>

            {!trapRevealed ? (
              <button
                onClick={() => {
                  setTrapRevealed(true);
                  arcadeAudio.playStamp();
                }}
                className="w-full py-2.5 rounded-xl bg-[var(--bg-surface-elevated)] hover:bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] font-mono text-xs font-semibold transition-all btn-tactile cursor-pointer"
              >
                <span>REVEAL EXAMINER VERDICT & STATUTORY DESTRUCTION</span>
              </button>
            ) : (
              <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-2 animate-fadeIn">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                    workout.examinerTrap.isTrue
                      ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                      : 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                  }`}>
                    {workout.examinerTrap.isTrue ? 'STATEMENT IS TRUE' : 'STATEMENT IS FALSE (TRAP!)'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {workout.examinerTrap.explanation}
                </p>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => setActiveStep(1)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>
            <button
              onClick={() => setActiveStep(3)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--bg-surface-elevated)] hover:bg-[var(--border-strong)] border border-[var(--border-strong)] text-[var(--text-primary)] font-mono text-xs font-semibold transition-all shadow-sm btn-tactile cursor-pointer"
            >
              <span>NEXT: 3-QUESTION DRILL</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: 3-Question Rapid Recall Drill */}
      {activeStep === 3 && (
        <div className="space-y-5 animate-fadeIn">
          <div className="space-y-4">
            {workout.rapidDrill.map((q, qIdx) => {
              const selectedOpt = answers[qIdx];
              const isAnswered = selectedOpt !== undefined;

              return (
                <div key={qIdx} className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] font-medium">
                    <span>Question {qIdx + 1} of 3</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] leading-relaxed">
                    {q.question}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {q.options.map((opt, optIdx) => {
                      const isSelected = selectedOpt === optIdx;
                      const isCorrect = optIdx === q.correctIndex;
                      
                      let btnStyle = 'bg-[var(--bg-surface)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--border-strong)]';
                      if (drillSubmitted) {
                        if (isCorrect) {
                          btnStyle = 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400 font-bold';
                        } else if (isSelected) {
                          btnStyle = 'bg-rose-500/15 border-rose-500/40 text-rose-400';
                        } else {
                          btnStyle = 'opacity-40 border-[var(--border-subtle)]';
                        }
                      } else if (isSelected) {
                        btnStyle = 'bg-[var(--bg-surface-elevated)] border-[var(--border-strong)] text-[var(--text-primary)] font-semibold shadow-sm';
                      }

                      return (
                        <button
                          key={optIdx}
                          disabled={drillSubmitted}
                          onClick={() => handleSelectOption(qIdx, optIdx)}
                          className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${btnStyle}`}
                        >
                          <span className="font-mono mr-2 font-bold opacity-60">
                            {String.fromCharCode(65 + optIdx)}.
                          </span>
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  {drillSubmitted && (
                    <div className="text-xs text-[var(--text-secondary)] bg-[var(--bg-surface)] p-3 rounded-xl border border-[var(--border-subtle)] mt-2">
                      <span className="font-bold text-[var(--text-primary)]">Explanation: </span>
                      {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => setActiveStep(2)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {!drillSubmitted ? (
              <button
                disabled={Object.keys(answers).length < workout.rapidDrill.length}
                onClick={handleCompleteDrill}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-mono text-xs font-bold transition-all shadow-md btn-tactile cursor-pointer ${
                  Object.keys(answers).length === workout.rapidDrill.length
                    ? 'bg-emerald-600 text-white hover:bg-emerald-500'
                    : 'bg-[var(--border-subtle)] text-[var(--text-muted)] cursor-not-allowed opacity-50'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>SUBMIT TODAY'S DRILL (LOCK XP)</span>
              </button>
            ) : (
              <button
                onClick={() => setActiveStep(4)}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[var(--bg-surface-elevated)] hover:bg-[var(--border-strong)] border border-[var(--border-strong)] text-[var(--text-primary)] font-mono text-xs font-semibold transition-all shadow-sm btn-tactile cursor-pointer"
              >
                <span>VIEW SUMMARY</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* STEP 4: Workout Summary / Reward State */}
      {activeStep === 4 && (
        <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-center space-y-4 animate-fadeIn">
          <div className="w-12 h-12 rounded-2xl bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-subtle)] flex items-center justify-center mx-auto shadow-sm">
            <Flame className="w-6 h-6" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
            Today's Workout Complete
          </h3>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-lg mx-auto">
            Score: <span className="font-bold font-mono tabular-nums text-[var(--text-primary)]">{drillScore}/3</span>. You earned <span className="font-bold font-mono text-emerald-400">+100 Judicial XP</span> and pushed your streak to <span className="font-bold font-mono tabular-nums text-[var(--text-primary)]">{streak} Days</span>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <button
              onClick={handleResetForPractice}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-xs font-medium text-[var(--text-primary)] transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              <span>Practice Again</span>
            </button>

            <button
              onClick={() => setActiveTab('mistakes-notebook')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
            >
              <AlertTriangle className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              <span>Open Mistakes Bank</span>
            </button>

            <button
              onClick={() => setActiveTab('fast-track')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--accent)] text-[var(--accent-contrast)] text-xs font-semibold transition-opacity hover:opacity-95 shadow-sm btn-tactile cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Explore More Speed Hacks</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
