import React, { useState, useEffect, useMemo } from 'react';
import {
  Calendar,
  Flame,
  CheckCircle2,
  Circle,
  Award,
  BookOpen,
  Scale,
  FileText,
  RotateCcw,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  HelpCircle,
  Eye,
  Trophy,
  Layers,
  ArrowRight,
  Check,
  AlertCircle,
  Clock,
  Compass,
  Bookmark
} from 'lucide-react';
import {
  FIFTEEN_DAY_BOOTCAMP_DATA,
  TOTAL_BOOTCAMP_MCQS,
  TOTAL_BOOTCAMP_CASE_STUDIES,
  type BootcampDay,
  type BootcampMCQ
} from '../../data/bootcamp';
import { PrecedentLineageSVG } from '../VectorDiagrams/PrecedentLineageSVG';
import { AnnotatedLegalText } from '../Common/AnnotatedLegalText';
import { useTheme } from '../../context/ThemeContext';

interface DayProgress {
  tasks: {
    articles: boolean;
    cases: boolean;
    terms: boolean;
    mcqs: boolean;
    caseStudy: boolean;
  };
  mcqAnswers: Record<string, number>; // questionId -> selectedIndex
  userCaseAnswer?: string;
}

type BootcampProgressMap = Record<number, DayProgress>;

const STORAGE_KEY = 'samvidhan_15day_bootcamp_progress';

export const StudyBootcampView: React.FC = () => {
  const { setActiveTab } = useTheme();

  // Selected Day (1 to 15)
  const [selectedDayNumber, setSelectedDayNumber] = useState<number>(1);

  // Active Sub-Tab: 'curriculum' | 'svg' | 'cases' | 'mcqs' | 'casestudy'
  const [activeSubTab, setActiveSubTab] = useState<'curriculum' | 'svg' | 'cases' | 'mcqs' | 'casestudy'>('curriculum');

  // Persistence: Load from localStorage
  const [progress, setProgress] = useState<BootcampProgressMap>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to load bootcamp progress:', e);
    }
    // Default initial progress
    const initial: BootcampProgressMap = {};
    for (let i = 1; i <= 15; i++) {
      initial[i] = {
        tasks: {
          articles: false,
          cases: false,
          terms: false,
          mcqs: false,
          caseStudy: false
        },
        mcqAnswers: {}
      };
    }
    return initial;
  });

  // Save to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error('Failed to save bootcamp progress:', e);
    }
  }, [progress]);

  // Current Day Data
  const currentDay: BootcampDay = useMemo(() => {
    return (
      FIFTEEN_DAY_BOOTCAMP_DATA.find((d) => d.dayNumber === selectedDayNumber) ||
      FIFTEEN_DAY_BOOTCAMP_DATA[0]
    );
  }, [selectedDayNumber]);

  // Current Day Progress
  const currentDayProgress: DayProgress = progress[selectedDayNumber] || {
    tasks: { articles: false, cases: false, terms: false, mcqs: false, caseStudy: false },
    mcqAnswers: {}
  };

  // Toggle Task
  const toggleTask = (taskKey: keyof DayProgress['tasks']) => {
    setProgress((prev) => {
      const dayProg = prev[selectedDayNumber] || {
        tasks: { articles: false, cases: false, terms: false, mcqs: false, caseStudy: false },
        mcqAnswers: {}
      };
      return {
        ...prev,
        [selectedDayNumber]: {
          ...dayProg,
          tasks: {
            ...dayProg.tasks,
            [taskKey]: !dayProg.tasks[taskKey]
          }
        }
      };
    });
  };

  // Answer MCQ
  const handleAnswerMCQ = (mcqId: string, optionIndex: number) => {
    setProgress((prev) => {
      const dayProg = prev[selectedDayNumber] || {
        tasks: { articles: false, cases: false, terms: false, mcqs: false, caseStudy: false },
        mcqAnswers: {}
      };
      const updatedAnswers = {
        ...dayProg.mcqAnswers,
        [mcqId]: optionIndex
      };

      // Check if all 20 are answered, automatically check off mcqs task
      const allAnswered = currentDay.mcqs.every((m) => updatedAnswers[m.id] !== undefined);

      return {
        ...prev,
        [selectedDayNumber]: {
          ...dayProg,
          mcqAnswers: updatedAnswers,
          tasks: {
            ...dayProg.tasks,
            mcqs: allAnswered ? true : dayProg.tasks.mcqs
          }
        }
      };
    });
  };

  // Case Study Draft Answer Handler
  const handleSaveCaseStudyAnswer = (text: string) => {
    setProgress((prev) => {
      const dayProg = prev[selectedDayNumber] || {
        tasks: { articles: false, cases: false, terms: false, mcqs: false, caseStudy: false },
        mcqAnswers: {}
      };
      return {
        ...prev,
        [selectedDayNumber]: {
          ...dayProg,
          userCaseAnswer: text,
          tasks: {
            ...dayProg.tasks,
            caseStudy: text.trim().length > 50 ? true : dayProg.tasks.caseStudy
          }
        }
      };
    });
  };

  // State for Model Answer reveal in Case Study
  const [showModelAnswer, setShowModelAnswer] = useState<boolean>(false);

  // Overall Statistics
  const stats = useMemo(() => {
    let completedDaysCount = 0;
    let totalTasksCompleted = 0;
    const totalPossibleTasks = 15 * 5; // 75 tasks total
    let totalMCQsAnswered = 0;
    let totalMCQsCorrect = 0;

    FIFTEEN_DAY_BOOTCAMP_DATA.forEach((day) => {
      const p = progress[day.dayNumber];
      if (p) {
        const tasksDone = Object.values(p.tasks).filter(Boolean).length;
        totalTasksCompleted += tasksDone;
        if (tasksDone === 5) completedDaysCount++;

        day.mcqs.forEach((mcq) => {
          const userAns = p.mcqAnswers[mcq.id];
          if (userAns !== undefined) {
            totalMCQsAnswered++;
            if (userAns === mcq.correctIndex) totalMCQsCorrect++;
          }
        });
      }
    });

    const completionPercentage = Math.round((totalTasksCompleted / totalPossibleTasks) * 100);
    const mcqAccuracy = totalMCQsAnswered > 0 ? Math.round((totalMCQsCorrect / totalMCQsAnswered) * 100) : 0;

    return {
      completedDaysCount,
      totalTasksCompleted,
      completionPercentage,
      totalMCQsAnswered,
      totalMCQsCorrect,
      mcqAccuracy
    };
  }, [progress]);

  // Reset Progress
  const handleResetProgress = () => {
    if (window.confirm('Are you sure you want to reset all 15-day bootcamp progress? This cannot be undone.')) {
      const initial: BootcampProgressMap = {};
      for (let i = 1; i <= 15; i++) {
        initial[i] = {
          tasks: { articles: false, cases: false, terms: false, mcqs: false, caseStudy: false },
          mcqAnswers: {}
        };
      }
      setProgress(initial);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  // Day MCQ Score for current day
  const currentDayMCQScore = useMemo(() => {
    let score = 0;
    let answered = 0;
    currentDay.mcqs.forEach((mcq) => {
      const userAns = currentDayProgress.mcqAnswers[mcq.id];
      if (userAns !== undefined) {
        answered++;
        if (userAns === mcq.correctIndex) {
          score += 1.0;
        } else {
          score -= 0.25; // JKPSC PO negative marking
        }
      }
    });
    return { score: Math.max(0, score), answered };
  }, [currentDay, currentDayProgress]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
      {/* =========================================================================
          HERO BANNER & STATS BAR
      ========================================================================= */}
      <div className="p-6 md:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent-primary)]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
              <Flame className="w-3.5 h-3.5" />
              15-Day JKPSC PO Preparation Drill & Tracker
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Constitutional Law Sprint Bootcamp
            </h1>
            <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-2xl leading-relaxed">
              Master the entire Constitution in 15 days with 6 hours of daily focused study: 
              <strong className="text-[var(--text-primary)]"> 300 MCQs</strong>, 
              <strong className="text-[var(--text-primary)]"> 15 Courtroom Case Studies</strong>, 
              <strong className="text-[var(--text-primary)]"> 116 Landmark Ratios</strong>, and 
              <strong className="text-[var(--text-primary)]"> 215 Legal Terms</strong>.
            </p>
          </div>

          {/* Quick Action Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleResetProgress}
              className="px-3 py-2 text-xs font-medium rounded-lg text-[var(--text-muted)] hover:text-red-400 hover:bg-red-500/10 border border-[var(--border-subtle)] transition-colors flex items-center gap-1.5"
              title="Reset progress"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Tracker
            </button>
            <button
              onClick={() => setActiveTab('landmark-cases')}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/30 hover:bg-[var(--accent-primary)]/20 transition-all flex items-center gap-1.5 shadow-sm"
            >
              <Award className="w-3.5 h-3.5" />
              Landmark Cases Hub
            </button>
          </div>
        </div>

        {/* Global Progress Metric Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-[var(--border-subtle)]">
          <div className="space-y-1">
            <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider">Overall Progress</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-[var(--accent-primary)]">{stats.completionPercentage}%</span>
              <span className="text-xs text-[var(--text-muted)]">({stats.totalTasksCompleted}/75 tasks)</span>
            </div>
            <div className="w-full bg-[var(--bg-base)] h-2 rounded-full overflow-hidden border border-[var(--border-subtle)]">
              <div
                className="bg-gradient-to-r from-[var(--accent-primary)] to-emerald-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${stats.completionPercentage}%` }}
              />
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider">Days Mastered</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-[var(--text-primary)]">{stats.completedDaysCount}</span>
              <span className="text-xs text-[var(--text-muted)]">/ 15 Days</span>
            </div>
            <p className="text-[11px] text-[var(--text-muted)]">Complete all 5 tasks per day</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider">MCQs Attempted</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-[var(--text-primary)]">{stats.totalMCQsAnswered}</span>
              <span className="text-xs text-[var(--text-muted)]">/ {TOTAL_BOOTCAMP_MCQS}</span>
            </div>
            <p className="text-[11px] text-[var(--text-muted)]">Accuracy: <span className="font-semibold text-emerald-400">{stats.mcqAccuracy}%</span></p>
          </div>

          <div className="space-y-1">
            <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider">Case Studies Solved</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-[var(--text-primary)]">
                {Object.values(progress).filter((p) => p.tasks.caseStudy).length}
              </span>
              <span className="text-xs text-[var(--text-muted)]">/ {TOTAL_BOOTCAMP_CASE_STUDIES}</span>
            </div>
            <p className="text-[11px] text-[var(--text-muted)]">Mains formulation practice</p>
          </div>
        </div>
      </div>

      {/* =========================================================================
          INTERACTIVE 15-DAY CONSISTENCY HEATMAP
      ========================================================================= */}
      <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[var(--accent-primary)]" />
            <h2 className="text-lg font-bold text-[var(--text-primary)]">
              15-Day Study Consistency Heatmap
            </h2>
          </div>
          <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
            <span>Progress Scale:</span>
            <span className="inline-flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-[var(--bg-base)] border border-[var(--border-subtle)]" /> 0%</span>
            <span className="inline-flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-amber-500/30 border border-amber-500/50" /> 20–60%</span>
            <span className="inline-flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-cyan-500/40 border border-cyan-400" /> 80%</span>
            <span className="inline-flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-emerald-500 border border-emerald-400" /> 100%</span>
          </div>
        </div>

        {/* Heatmap Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-15 gap-2.5">
          {FIFTEEN_DAY_BOOTCAMP_DATA.map((day) => {
            const p = progress[day.dayNumber];
            const tasksDone = p ? Object.values(p.tasks).filter(Boolean).length : 0;
            const isSelected = day.dayNumber === selectedDayNumber;

            // Heatmap color logic
            let bgClass = 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)]/50';
            if (tasksDone === 5) {
              bgClass = 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-sm shadow-emerald-500/20 font-bold';
            } else if (tasksDone >= 4) {
              bgClass = 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-semibold';
            } else if (tasksDone >= 2) {
              bgClass = 'bg-amber-500/20 border-amber-400/60 text-amber-300 font-medium';
            } else if (tasksDone === 1) {
              bgClass = 'bg-[var(--accent-primary)]/10 border-[var(--accent-primary)]/30 text-[var(--accent-primary)]';
            }

            return (
              <button
                key={day.dayNumber}
                onClick={() => setSelectedDayNumber(day.dayNumber)}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all duration-200 relative group ${bgClass} ${
                  isSelected ? 'ring-2 ring-[var(--accent-primary)] scale-105 shadow-md' : ''
                }`}
              >
                <span className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">Day</span>
                <span className="text-lg font-black">{day.dayNumber}</span>
                <div className="flex items-center gap-0.5 mt-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <span
                      key={i}
                      className={`w-1 h-1 rounded-full ${
                        i < tasksDone ? 'bg-[var(--accent-primary)]' : 'bg-gray-600/40'
                      }`}
                    />
                  ))}
                </div>

                {/* Hover Tooltip */}
                <div className="absolute bottom-full mb-2 hidden group-hover:block z-30 w-44 p-2 bg-gray-900 text-white text-xs rounded-lg shadow-xl border border-gray-700 pointer-events-none">
                  <p className="font-bold text-[var(--accent-primary)]">Day {day.dayNumber}</p>
                  <p className="truncate text-gray-300 text-[11px]">{day.title}</p>
                  <p className="mt-1 text-emerald-400 text-[10px]">{tasksDone}/5 Tasks Complete</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          SELECTED DAY BANNER & SUB-TABS
      ========================================================================= */}
      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
                Day {currentDay.dayNumber} of 15
              </span>
              <span className="text-xs text-[var(--text-muted)] font-medium">
                {currentDay.phase}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-amber-400">
                <Clock className="w-3 h-3" /> ~{currentDay.estimatedHours} hrs study
              </span>
            </div>
            <h2 className="text-2xl font-extrabold text-[var(--text-primary)]">
              {currentDay.title}
            </h2>
            <p className="text-sm text-[var(--text-secondary)]">
              {currentDay.subtitle}
            </p>
          </div>

          {/* Day Navigation Controls */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => setSelectedDayNumber((prev) => Math.max(1, prev - 1))}
              disabled={selectedDayNumber === 1}
              className="p-2 rounded-lg border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-base)] disabled:opacity-30 disabled:pointer-events-none transition-colors"
              title="Previous Day"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-bold px-2 py-1 bg-[var(--bg-base)] rounded border border-[var(--border-subtle)]">
              {selectedDayNumber} / 15
            </span>
            <button
              onClick={() => setSelectedDayNumber((prev) => Math.min(15, prev + 1))}
              disabled={selectedDayNumber === 15}
              className="p-2 rounded-lg border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-base)] disabled:opacity-30 disabled:pointer-events-none transition-colors"
              title="Next Day"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 5 Daily Checkbox Tasks Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
          <button
            onClick={() => toggleTask('articles')}
            className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
              currentDayProgress.tasks.articles
                ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300'
                : 'bg-[var(--bg-card)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:border-[var(--accent-primary)]/40'
            }`}
          >
            <div className="space-y-0.5">
              <span className="text-[10px] uppercase font-bold tracking-wider">Task 1 (2.0 hrs)</span>
              <p className="text-xs font-semibold text-[var(--text-primary)]">Read Target Articles</p>
            </div>
            {currentDayProgress.tasks.articles ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            ) : (
              <Circle className="w-5 h-5 text-gray-500 shrink-0" />
            )}
          </button>

          <button
            onClick={() => toggleTask('cases')}
            className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
              currentDayProgress.tasks.cases
                ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300'
                : 'bg-[var(--bg-card)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:border-[var(--accent-primary)]/40'
            }`}
          >
            <div className="space-y-0.5">
              <span className="text-[10px] uppercase font-bold tracking-wider">Task 2 (1.5 hrs)</span>
              <p className="text-xs font-semibold text-[var(--text-primary)]">Master Case Law Pairs</p>
            </div>
            {currentDayProgress.tasks.cases ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            ) : (
              <Circle className="w-5 h-5 text-gray-500 shrink-0" />
            )}
          </button>

          <button
            onClick={() => toggleTask('terms')}
            className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
              currentDayProgress.tasks.terms
                ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300'
                : 'bg-[var(--bg-card)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:border-[var(--accent-primary)]/40'
            }`}
          >
            <div className="space-y-0.5">
              <span className="text-[10px] uppercase font-bold tracking-wider">Task 3 (1.0 hr)</span>
              <p className="text-xs font-semibold text-[var(--text-primary)]">15 Legal Terms & Maxims</p>
            </div>
            {currentDayProgress.tasks.terms ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            ) : (
              <Circle className="w-5 h-5 text-gray-500 shrink-0" />
            )}
          </button>

          <button
            onClick={() => toggleTask('mcqs')}
            className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
              currentDayProgress.tasks.mcqs
                ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300'
                : 'bg-[var(--bg-card)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:border-[var(--accent-primary)]/40'
            }`}
          >
            <div className="space-y-0.5">
              <span className="text-[10px] uppercase font-bold tracking-wider">Task 4 (0.5 hr)</span>
              <p className="text-xs font-semibold text-[var(--text-primary)]">
                Solve 20 MCQs ({currentDayMCQScore.answered}/20)
              </p>
            </div>
            {currentDayProgress.tasks.mcqs ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            ) : (
              <Circle className="w-5 h-5 text-gray-500 shrink-0" />
            )}
          </button>

          <button
            onClick={() => toggleTask('caseStudy')}
            className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
              currentDayProgress.tasks.caseStudy
                ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300'
                : 'bg-[var(--bg-card)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:border-[var(--accent-primary)]/40'
            }`}
          >
            <div className="space-y-0.5">
              <span className="text-[10px] uppercase font-bold tracking-wider">Task 5 (0.5 hr)</span>
              <p className="text-xs font-semibold text-[var(--text-primary)]">Draft Case Study</p>
            </div>
            {currentDayProgress.tasks.caseStudy ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            ) : (
              <Circle className="w-5 h-5 text-gray-500 shrink-0" />
            )}
          </button>
        </div>

        {/* Sub-Tab Navigation Bar */}
        <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] overflow-x-auto pb-2">
          <button
            onClick={() => setActiveSubTab('curriculum')}
            className={`px-4 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeSubTab === 'curriculum'
                ? 'bg-[var(--accent-primary)] text-[var(--bg-base)] shadow-md'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            1. Study Curriculum & Concepts
          </button>

          <button
            onClick={() => setActiveSubTab('svg')}
            className={`px-4 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeSubTab === 'svg'
                ? 'bg-[var(--accent-primary)] text-[var(--bg-base)] shadow-md'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
            }`}
          >
            <Eye className="w-4 h-4" />
            2. Visual Precedent Lineage
          </button>

          <button
            onClick={() => setActiveSubTab('cases')}
            className={`px-4 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeSubTab === 'cases'
                ? 'bg-[var(--accent-primary)] text-[var(--bg-base)] shadow-md'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
            }`}
          >
            <Award className="w-4 h-4" />
            3. Classic vs 2024 Modern Pairs
          </button>

          <button
            onClick={() => setActiveSubTab('mcqs')}
            className={`px-4 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeSubTab === 'mcqs'
                ? 'bg-[var(--accent-primary)] text-[var(--bg-base)] shadow-md'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            4. 20 Daily MCQs Drill
            <span className="ml-1 text-xs px-1.5 py-0.5 rounded-full bg-[var(--bg-base)] text-[var(--accent-primary)]">
              {currentDayMCQScore.answered}/20
            </span>
          </button>

          <button
            onClick={() => setActiveSubTab('casestudy')}
            className={`px-4 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeSubTab === 'casestudy'
                ? 'bg-[var(--accent-primary)] text-[var(--bg-base)] shadow-md'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
            }`}
          >
            <Scale className="w-4 h-4" />
            5. Courtroom Case Problem (Mains)
          </button>
        </div>
      </div>

      {/* =========================================================================
          TAB 1: STUDY CURRICULUM & CORE CONCEPTS
      ========================================================================= */}
      {activeSubTab === 'curriculum' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Target Articles Badges */}
          <div className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)]">
              Scheduled Articles for Day {currentDay.dayNumber}
            </span>
            <div className="flex flex-wrap gap-2">
              {currentDay.targetArticles.map((art) => (
                <span
                  key={art}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-[var(--bg-base)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] transition-colors"
                >
                  {art}
                </span>
              ))}
            </div>
            <p className="text-xs text-[var(--text-muted)] pt-1">
              {currentDay.overview}
            </p>
          </div>

          {/* Core Concept Breakdown Cards */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[var(--accent-primary)]" />
              Substantive Law & Prosecutorial Examination Angles
            </h3>

            {currentDay.coreConcepts.map((concept, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-4 shadow-sm hover:border-[var(--accent-primary)]/40 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
                  <h4 className="text-base font-extrabold text-[var(--text-primary)]">
                    {concept.heading}
                  </h4>
                  <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] self-start sm:self-auto">
                    {concept.articleAnchor}
                  </span>
                </div>

                <div className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  <AnnotatedLegalText text={concept.synopsis} />
                </div>

                <div className="space-y-2 bg-[var(--bg-base)] p-4 rounded-xl border border-[var(--border-subtle)]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)]">
                    Key Legal Principles & Statutory Rules:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[var(--text-secondary)] list-disc pl-4">
                    {concept.substantiveLaw.map((rule, rIdx) => (
                      <li key={rIdx}>
                        <AnnotatedLegalText text={rule} />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
                  <div>
                    <strong className="text-amber-200">Prosecuting Officer Exam Angle: </strong>
                    <AnnotatedLegalText text={concept.prosecutionAngle} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 15 Legal Terms & Latin Maxims */}
          <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-[var(--text-primary)] flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[var(--accent-primary)]" />
                Daily Legal Terms & Latin Maxims (Hover for Meanings)
              </h3>
              <button
                onClick={() => setActiveTab('dictionary')}
                className="text-xs font-bold text-[var(--accent-primary)] hover:underline"
              >
                Open Full Dictionary &rarr;
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {currentDay.dictionaryTerms.map((term, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
                >
                  <AnnotatedLegalText text={term} />
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 2: VISUAL PRECEDENT LINEAGE
      ========================================================================= */}
      {activeSubTab === 'svg' && (
        <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-6 animate-fadeIn">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
              <Eye className="w-5 h-5 text-[var(--accent-primary)]" />
              Interactive Precedent Lineage Architecture
            </h3>
            <p className="text-xs text-[var(--text-secondary)]">
              Explore the chronological branches of the Constitution from original classic benchmarks to modern 2024–2025 Constitution Bench overrulings.
            </p>
          </div>

          <PrecedentLineageSVG />
        </div>
      )}

      {/* =========================================================================
          TAB 3: CLASSIC VS 2024 MODERN CASE PAIRS
      ========================================================================= */}
      {activeSubTab === 'cases' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="p-4 rounded-xl bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20 text-xs text-[var(--text-secondary)] leading-relaxed">
            <strong className="text-[var(--text-primary)]">Exam Strategy Note: </strong>
            In JKPSC PO Mains, always introduce the historical foundational landmark first, followed immediately by the modern 2024/2025 Supreme Court Constitution Bench ruling that clarified or overruled it.
          </div>

          {currentDay.landmarkEvolutionPairs.map((pair, pIdx) => (
            <div
              key={pIdx}
              className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-6 shadow-md"
            >
              <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] pb-3">
                <Scale className="w-5 h-5 text-[var(--accent-primary)]" />
                <h4 className="text-base font-extrabold text-[var(--text-primary)]">
                  Evolution Track: {pair.subject}
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                {/* Classic Past Case */}
                <div className="p-5 rounded-xl bg-[var(--bg-base)] border border-red-500/30 space-y-3 relative">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-red-500/10 text-red-400 border border-red-500/20">
                      Classic Past Benchmark
                    </span>
                    <span className="text-xs font-semibold text-[var(--text-muted)]">
                      {pair.classicCase.year} ({pair.classicCase.bench})
                    </span>
                  </div>
                  <h5 className="text-base font-black text-[var(--text-primary)]">
                    {pair.classicCase.name}
                  </h5>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    <strong className="text-[var(--text-primary)]">Core Ratio: </strong>
                    <AnnotatedLegalText text={pair.classicCase.ratio} />
                  </p>
                </div>

                {/* Modern 2024 Ruling */}
                <div className="p-5 rounded-xl bg-[var(--bg-base)] border border-emerald-500/40 space-y-3 relative shadow-sm shadow-emerald-500/10">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">
                      2024–2025 Modern Precedent
                    </span>
                    <span className="text-xs font-semibold text-emerald-400">
                      {pair.modernCase.year} ({pair.modernCase.bench})
                    </span>
                  </div>
                  <h5 className="text-base font-black text-[var(--text-primary)]">
                    {pair.modernCase.name}
                  </h5>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    <strong className="text-emerald-300">Modern Constitutional Ratio: </strong>
                    <AnnotatedLegalText text={pair.modernCase.ratio} />
                  </p>
                </div>
              </div>

              {/* Exam Formulation Box */}
              <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs space-y-1.5">
                <span className="font-bold text-[var(--accent-primary)] uppercase tracking-wider text-[11px]">
                  How to Write This in Your Exam Answer:
                </span>
                <p className="text-[var(--text-secondary)] leading-relaxed italic">
                  "{pair.examApplicationNote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* =========================================================================
          TAB 4: 20 DAILY MCQS DRILL (WITH -0.25 NEGATIVE MARKING)
      ========================================================================= */}
      {activeSubTab === 'mcqs' && (
        <div className="space-y-6 animate-fadeIn">
          {/* MCQ Score Banner */}
          <div className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs uppercase font-bold text-[var(--accent-primary)] tracking-wider">
                JKPSC PO Preliminary Simulation
              </span>
              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                20 High-Yield Objective Questions (Day {currentDay.dayNumber})
              </h3>
              <p className="text-xs text-[var(--text-muted)]">
                Standard Marking: +1.0 for Correct, -0.25 for Incorrect
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-center">
                <span className="text-xs text-[var(--text-muted)] block">Answered</span>
                <span className="text-xl font-bold text-[var(--text-primary)]">
                  {currentDayMCQScore.answered} / 20
                </span>
              </div>
              <div className="text-center">
                <span className="text-xs text-[var(--text-muted)] block">Net Score</span>
                <span className="text-2xl font-black text-[var(--accent-primary)]">
                  {currentDayMCQScore.score.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* MCQ Question List */}
          <div className="space-y-6">
            {currentDay.mcqs.map((mcq, mIdx) => {
              const selectedOpt = currentDayProgress.mcqAnswers[mcq.id];
              const isAnswered = selectedOpt !== undefined;

              return (
                <div
                  key={mcq.id}
                  className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-4 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-[var(--bg-base)] border border-[var(--border-subtle)] flex items-center justify-center font-bold text-xs shrink-0 text-[var(--text-primary)]">
                        {mIdx + 1}
                      </span>
                      <h4 className="text-sm md:text-base font-bold text-[var(--text-primary)] leading-relaxed">
                        {mcq.question}
                      </h4>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)] shrink-0">
                      {mcq.articleRef}
                    </span>
                  </div>

                  {/* Options Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {mcq.options.map((opt, optIdx) => {
                      const isChosen = selectedOpt === optIdx;
                      const isCorrect = optIdx === mcq.correctIndex;

                      let btnStyle =
                        'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)]/50';

                      if (isAnswered) {
                        if (isCorrect) {
                          btnStyle = 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-bold';
                        } else if (isChosen && !isCorrect) {
                          btnStyle = 'bg-red-500/20 border-red-500 text-red-300 font-medium';
                        } else {
                          btnStyle = 'bg-[var(--bg-base)] border-[var(--border-subtle)] opacity-40';
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleAnswerMCQ(mcq.id, optIdx)}
                          className={`p-3 rounded-xl border text-left text-xs md:text-sm transition-all flex items-start gap-2.5 ${btnStyle}`}
                        >
                          <span className="font-bold text-xs shrink-0 mt-0.5">
                            {String.fromCharCode(65 + optIdx)}.
                          </span>
                          <span className="leading-snug">{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation (Revealed when answered) */}
                  {isAnswered && (
                    <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs space-y-1.5 animate-fadeIn">
                      <div className="flex items-center gap-1.5 font-bold">
                        {selectedOpt === mcq.correctIndex ? (
                          <span className="text-emerald-400 flex items-center gap-1">
                            <Check className="w-4 h-4" /> Correct Answer (+1.0)
                          </span>
                        ) : (
                          <span className="text-red-400 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" /> Incorrect Answer (-0.25)
                          </span>
                        )}
                      </div>
                      <p className="text-[var(--text-secondary)] leading-relaxed">
                        <AnnotatedLegalText text={mcq.explanation} />
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 5: COURTROOM CASE PROBLEM (MAINS ANSWER PRACTICE)
      ========================================================================= */}
      {activeSubTab === 'casestudy' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="p-6 md:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-6 shadow-md">
            <div className="space-y-2 border-b border-[var(--border-subtle)] pb-4">
              <span className="px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
                JKPSC PO Mains Case Formulation Drill
              </span>
              <h3 className="text-xl md:text-2xl font-black text-[var(--text-primary)]">
                {currentDay.caseStudy.title}
              </h3>
            </div>

            {/* Factual Matrix */}
            <div className="space-y-2 bg-[var(--bg-base)] p-5 rounded-xl border border-[var(--border-subtle)]">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)]">
                Factual Matrix (Case Briefing):
              </span>
              <p className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">
                <AnnotatedLegalText text={currentDay.caseStudy.factualMatrix} />
              </p>
            </div>

            {/* Questions to Address */}
            <div className="space-y-2 bg-[var(--bg-base)] p-5 rounded-xl border border-[var(--border-subtle)]">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Framing Issues for Prosecution / Adjudication:
              </span>
              <ol className="space-y-2 text-xs md:text-sm text-[var(--text-primary)] font-semibold list-decimal pl-4">
                {currentDay.caseStudy.framingQuestions.map((q, qIdx) => (
                  <li key={qIdx}>{q}</li>
                ))}
              </ol>
            </div>

            {/* Student Scratchpad Answer Area */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                  Draft Your Mains Answer:
                </label>
                <span className="text-xs text-[var(--text-muted)]">
                  Word Count: {(currentDayProgress.userCaseAnswer || '').split(/\s+/).filter(Boolean).length} words
                </span>
              </div>
              <textarea
                value={currentDayProgress.userCaseAnswer || ''}
                onChange={(e) => handleSaveCaseStudyAnswer(e.target.value)}
                placeholder="Structure your answer: 1. Relevant Constitutional & Statutory Provisions... 2. Foundational Classic Landmark... 3. 2024-2025 Supreme Court Ratio... 4. Concrete Prosecutorial Conclusion..."
                rows={8}
                className="w-full p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs md:text-sm text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors"
              />
            </div>

            {/* Reveal Model Answer Button */}
            <div className="pt-2">
              <button
                onClick={() => setShowModelAnswer((prev) => !prev)}
                className="px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-[var(--accent-primary)] text-[var(--bg-base)] hover:opacity-90 transition-all flex items-center gap-2 shadow-sm"
              >
                <Trophy className="w-4 h-4" />
                {showModelAnswer ? 'Hide Examiner\'s Model Answer' : 'Reveal Examiner\'s Model Answer & Marking Rubric'}
              </button>
            </div>

            {/* Collapsible Model Answer & Marking Rubric */}
            {showModelAnswer && (
              <div className="space-y-6 pt-4 border-t border-[var(--border-subtle)] animate-fadeIn">
                <div className="space-y-3 bg-[var(--bg-base)] p-5 rounded-xl border border-emerald-500/30">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Official Examiner's Model Solution:
                  </span>
                  <div className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                    <AnnotatedLegalText text={currentDay.caseStudy.modelAnswer} />
                  </div>
                </div>

                {/* Marking Rubric Breakdown */}
                <div className="space-y-3 bg-[var(--bg-base)] p-5 rounded-xl border border-[var(--border-subtle)]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)]">
                    Official Marking Rubric (Max: 10 Marks):
                  </span>
                  <div className="space-y-2">
                    {currentDay.caseStudy.markingRubric.map((item, rIdx) => (
                      <div
                        key={rIdx}
                        className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)]"
                      >
                        <span className="text-[var(--text-secondary)]">{item.criterion}</span>
                        <span className="font-bold text-[var(--accent-primary)] shrink-0 ml-4">
                          {item.marks} Marks
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
