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
  Star
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
    <div className="rounded-3xl bg-gradient-to-br from-[var(--bg-card)] via-[var(--bg-card)] to-amber-500/5 border border-amber-500/25 p-5 sm:p-7 shadow-lg relative overflow-hidden transition-all">
      {/* Top Banner & Streak Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-4 mb-5">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <Flame className="w-3.5 h-3.5 fill-current animate-pulse text-amber-400" />
            <span>DAILY 5-MINUTE CONSTITUTIONAL WORKOUT</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-[var(--text-primary)] tracking-tight flex items-center gap-2">
            <span>{workout.title}</span>
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[var(--bg-base)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
              Day {workout.dayId}
            </span>
          </h2>
          <p className="text-xs text-[var(--text-muted)]">
            Theme Pillar: <span className="font-semibold text-amber-400">{workout.themePillar}</span> • 4 micro-cards to boost long-term retention.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[var(--bg-base)] border border-amber-500/30 shadow-inner">
            <Flame className="w-5 h-5 text-amber-400 fill-current animate-bounce" />
            <div className="text-left">
              <div className="text-xs font-mono font-bold text-amber-400">{streak}-Day Streak</div>
              <div className="text-[10px] text-[var(--text-muted)]">
                {isCompletedToday ? 'Completed Today ✓' : 'Daily Goal Active'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Step Tabs */}
      <div className="grid grid-cols-4 gap-2 mb-6">
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
                  ? 'bg-amber-500/20 border-amber-500 text-amber-400 font-bold shadow-sm'
                  : isDone
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                  : 'bg-[var(--bg-base)]/50 border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              <step.icon className="w-3.5 h-3.5 shrink-0" />
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
            <div className="p-4 sm:p-5 rounded-2xl bg-blue-500/5 border border-blue-500/20 space-y-2">
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-500/15 text-blue-400">
                UNION PROVISION
              </span>
              <h3 className="text-lg font-black text-blue-400">{workout.articlePair.unionArticle}</h3>
              <p className="text-sm font-semibold text-[var(--text-primary)]">{workout.articlePair.unionTitle}</p>
            </div>

            {/* State Tile */}
            <div className="p-4 sm:p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-2">
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400">
                STATE CORRESPONDING
              </span>
              <h3 className="text-lg font-black text-emerald-400">{workout.articlePair.stateArticle}</h3>
              <p className="text-sm font-semibold text-[var(--text-primary)]">{workout.articlePair.stateTitle}</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[var(--bg-base)] border border-amber-500/20 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400">
              <Sparkles className="w-4 h-4" />
              <span>Deduction Formula: {workout.articlePair.formula}</span>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              <span className="font-bold text-[var(--text-primary)]">Key Examiner Difference: </span>
              {workout.articlePair.keyDifference}
            </p>
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={() => setActiveStep(1)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 text-black font-mono text-xs font-bold hover:bg-amber-400 transition-all shadow-md btn-tactile cursor-pointer"
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
          <div className="p-5 sm:p-6 rounded-2xl bg-purple-500/5 border border-purple-500/25 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-purple-500/20 pb-3">
              <div>
                <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-purple-500/15 text-purple-400 uppercase">
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

            <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-purple-500/15">
              <span className="text-[10px] font-mono font-bold text-purple-400 block mb-1">
                VERBATIM GOLDEN LINE:
              </span>
              <p className="text-xs sm:text-sm italic font-serif text-[var(--text-primary)] leading-relaxed">
                "{workout.landmarkCase.goldenQuote}"
              </p>
            </div>

            <div className="text-xs sm:text-sm text-[var(--text-muted)] space-y-1">
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
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 text-black font-mono text-xs font-bold hover:bg-amber-400 transition-all shadow-md btn-tactile cursor-pointer"
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
          <div className="p-5 sm:p-6 rounded-2xl bg-rose-500/5 border border-rose-500/25 space-y-4">
            <div className="flex items-center justify-between gap-2 border-b border-rose-500/20 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" />
                Examiner Assertion Trap: {workout.examinerTrap.trapType}
              </span>
              <span className="text-xs font-mono text-[var(--text-muted)]">
                {workout.examinerTrap.articleAnchor}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-rose-500/20">
              <span className="text-[10px] font-mono font-bold text-rose-400 block mb-1">
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
                className="w-full py-3 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 text-rose-300 font-mono text-xs font-bold transition-all btn-tactile cursor-pointer"
              >
                <span>🔍 REVEAL EXAMINER VERDICT & TRAP DESTRUCTION</span>
              </button>
            ) : (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-2 animate-fadeIn">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                    workout.examinerTrap.isTrue
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : 'bg-rose-500/20 text-rose-400'
                  }`}>
                    {workout.examinerTrap.isTrue ? 'STATEMENT IS TRUE' : 'STATEMENT IS FALSE (TRAP!)'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed">
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
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 text-black font-mono text-xs font-bold hover:bg-amber-400 transition-all shadow-md btn-tactile cursor-pointer"
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
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold">
                    <span>Q{qIdx + 1} of 3</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)] leading-relaxed">
                    {q.question}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {q.options.map((opt, optIdx) => {
                      const isSelected = selectedOpt === optIdx;
                      const isCorrect = optIdx === q.correctIndex;
                      
                      let btnStyle = 'bg-[var(--bg-card)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-amber-400';
                      if (drillSubmitted) {
                        if (isCorrect) {
                          btnStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-400 font-bold';
                        } else if (isSelected) {
                          btnStyle = 'bg-rose-500/20 border-rose-500 text-rose-400';
                        } else {
                          btnStyle = 'opacity-40 border-[var(--border-subtle)]';
                        }
                      } else if (isSelected) {
                        btnStyle = 'bg-amber-500/20 border-amber-500 text-amber-400 font-bold';
                      }

                      return (
                        <button
                          key={optIdx}
                          disabled={drillSubmitted}
                          onClick={() => handleSelectOption(qIdx, optIdx)}
                          className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${btnStyle}`}
                        >
                          <span className="font-mono mr-2 font-bold opacity-70">
                            {String.fromCharCode(65 + optIdx)}.
                          </span>
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  {drillSubmitted && (
                    <div className="text-xs text-[var(--text-muted)] bg-[var(--bg-card)]/50 p-3 rounded-xl border border-[var(--border-subtle)] mt-2">
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
                    ? 'bg-emerald-500 text-black hover:bg-emerald-400'
                    : 'bg-[var(--border-subtle)] text-[var(--text-muted)] cursor-not-allowed opacity-50'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>SUBMIT TODAY'S DRILL (LOCK XP)</span>
              </button>
            ) : (
              <button
                onClick={() => setActiveStep(4)}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-amber-500 text-black font-mono text-xs font-bold hover:bg-amber-400 transition-all shadow-md btn-tactile cursor-pointer"
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
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-[var(--bg-card)] border border-amber-500/30 text-center space-y-4 animate-fadeIn">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center mx-auto shadow-inner">
            <Flame className="w-8 h-8 fill-current animate-bounce" />
          </div>

          <h3 className="text-2xl font-black text-[var(--text-primary)]">
            Today's Workout Complete! 🔥
          </h3>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-lg mx-auto">
            Score: <span className="font-bold text-amber-400">{drillScore}/3</span> on Rapid Recall Drill. You earned <span className="font-bold text-emerald-400">+100 Judicial XP</span> and pushed your streak to <span className="font-bold text-amber-400">{streak} Days</span>!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <button
              onClick={handleResetForPractice}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-amber-400 text-xs font-mono font-bold text-[var(--text-primary)] transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Practice Again</span>
            </button>

            <button
              onClick={() => setActiveTab('mistakes-notebook')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-mono font-bold hover:bg-rose-500/25 transition-all cursor-pointer"
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Open Mistakes Bank</span>
            </button>

            <button
              onClick={() => setActiveTab('fast-track')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 text-black text-xs font-mono font-bold hover:bg-amber-400 transition-all shadow-md btn-tactile cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>Explore More Speed Hacks</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
