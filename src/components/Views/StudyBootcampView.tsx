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
  Bookmark,
  BookmarkCheck,
  ExternalLink,
  Shield,
  GitCommit,
  GitBranch,
  List,
  LayoutGrid,
  Filter,
  BrainCircuit,
  CheckCheck,
  Flag,
  ChevronDown,
  ChevronUp,
  RefreshCw,
  SlidersHorizontal
} from 'lucide-react';
import {
  FIFTEEN_DAY_BOOTCAMP_DATA,
  TOTAL_BOOTCAMP_MCQS,
  TOTAL_BOOTCAMP_CASE_STUDIES,
  BOOTCAMP_DAY_MODULE_LINKS,
  lookupBootcampArticle,
  type BootcampDay,
  type BootcampMCQ,
  type BootcampMCQRoundType,
  type BootcampComprehensionCaseStudy,
  type CaseStudySubMCQ,
  type DayModuleLinks,
  type ResolvedArticleDetails
} from '../../data/bootcamp';
import { recordMistake, recordSuccess } from '../../services/mistakesService';
import { AnnotatedLegalText } from '../Common/AnnotatedLegalText';
import { useTheme } from '../../context/ThemeContext';

// Import all 17 Handcrafted Vector Diagrams
import { PreambleArchitectureSVG } from '../VectorDiagrams/PreambleArchitectureSVG';
import { WritsMatrixSVG } from '../VectorDiagrams/WritsMatrixSVG';
import { CriminalConstitutionalPipelineSVG } from '../VectorDiagrams/CriminalConstitutionalPipelineSVG';
import { Article21EvolutionSVG } from '../VectorDiagrams/Article21EvolutionSVG';
import { BasicStructureEvolutionSVG } from '../VectorDiagrams/BasicStructureEvolutionSVG';
import { ExecutiveClemencyArchitectureSVG } from '../VectorDiagrams/ExecutiveClemencyArchitectureSVG';
import { SeparationOfPowersSVG } from '../VectorDiagrams/SeparationOfPowersSVG';
import { LegislativePassageSVG } from '../VectorDiagrams/LegislativePassageSVG';
import { PrecedentLineageSVG } from '../VectorDiagrams/PrecedentLineageSVG';
import { AsymmetricFederalismSVG } from '../VectorDiagrams/AsymmetricFederalismSVG';
import { FederalRelationsSVG } from '../VectorDiagrams/FederalRelationsSVG';
import { GSTCouncilFiscalSVG } from '../VectorDiagrams/GSTCouncilFiscalSVG';
import { CivilServicesSafeguardsSVG } from '../VectorDiagrams/CivilServicesSafeguardsSVG';
import { EmergencyMatrixSVG } from '../VectorDiagrams/EmergencyMatrixSVG';
import { AmendmentPipelineSVG } from '../VectorDiagrams/AmendmentPipelineSVG';
import { ElectoralArchitectureSVG } from '../VectorDiagrams/ElectoralArchitectureSVG';
import { SchedulesGenealogySVG } from '../VectorDiagrams/SchedulesGenealogySVG';

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
  caseStudyMcqAnswers?: Record<string, number>; // subMcqId -> selectedIndex
}

type BootcampProgressMap = Record<number, DayProgress>;

const STORAGE_KEY = 'samvidhan_15day_bootcamp_progress';

const ROUND_LIST: { id: BootcampMCQRoundType; number: number; label: string; subtitle: string }[] = [
  {
    id: 'Bare Act Nuance',
    number: 1,
    label: 'Bare Act Nuances',
    subtitle: 'Textual phrasing, sub-clauses, statutory provisos & textual exceptions'
  },
  {
    id: 'Landmark Precedents',
    number: 2,
    label: 'Landmark Precedents',
    subtitle: 'Constitution Bench evolutions, judicial tests & foundational ratios'
  },
  {
    id: 'Assertion-Reasoning',
    number: 3,
    label: 'Assertion & Reasoning',
    subtitle: 'Multi-statement propositions, cross-article synthesis & deductive logic'
  },
  {
    id: 'Negative Traps',
    number: 4,
    label: 'Negative Traps & Exceptions',
    subtitle: 'Deceptive qualifiers: "NOT", "INCORRECT", "EXCEPT" & constitutional traps'
  },
  {
    id: 'Applied Courtroom',
    number: 5,
    label: 'Applied Courtroom Scenarios',
    subtitle: 'Practical prosecutorial challenges, factual problems & litigation strategy'
  }
];

export const StudyBootcampView: React.FC = () => {
  const { setActiveTab, setSelectedPartId, setSelectedSvgId, bookmarkedArticles, toggleBookmark } = useTheme();

  // Selected Day (1 to 15)
  const [selectedDayNumber, setSelectedDayNumber] = useState<number>(1);

  // View Layout Mode: 'tabs' (Modular) vs 'all-in-one' (Continuous Comprehensive Dossier)
  const [viewLayout, setViewLayout] = useState<'tabs' | 'all-in-one'>('tabs');

  // Active Sub-Tab in 'tabs' mode: 'curriculum' | 'svg' | 'cases' | 'mcqs' | 'casestudy'
  const [activeSubTab, setActiveSubTab] = useState<'curriculum' | 'svg' | 'cases' | 'mcqs' | 'casestudy'>('curriculum');

  // Interactive Target Article Reader State
  const [selectedArticleStr, setSelectedArticleStr] = useState<string>('Art. 1');

  // Toggle for SVG diagram mode in Tab 2 (Day Primary vs Precedent Lineage Tree)
  const [svgDisplayMode, setSvgDisplayMode] = useState<'day-primary' | 'lineage-tree'>('day-primary');

  // 5-Round MCQ Arena State
  const [selectedRound, setSelectedRound] = useState<'all' | BootcampMCQRoundType>('all');
  const [mcqFilter, setMcqFilter] = useState<'all' | 'mistakes' | 'unanswered'>('all');
  const [showQuickJump, setShowQuickJump] = useState<boolean>(false);

  // Comprehension Case Studies Navigation & Reveal State
  const [activeCaseStudyIndex, setActiveCaseStudyIndex] = useState<number>(0);
  const [showModelAnswerMap, setShowModelAnswerMap] = useState<Record<number, boolean>>({});

  // Persistence: Load from localStorage
  const [progress, setProgress] = useState<BootcampProgressMap>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to load bootcamp progress:', e);
    }
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

  // Current Day Links & Metadata
  const currentDayLinks: DayModuleLinks = useMemo(() => {
    return BOOTCAMP_DAY_MODULE_LINKS[selectedDayNumber] || BOOTCAMP_DAY_MODULE_LINKS[1];
  }, [selectedDayNumber]);

  // Auto-select first target article on day change
  useEffect(() => {
    if (currentDay.targetArticles && currentDay.targetArticles.length > 0) {
      setSelectedArticleStr(currentDay.targetArticles[0]);
    }
  }, [selectedDayNumber, currentDay]);

  // Selected Article Full Details Lookup
  const activeArticleDetails: ResolvedArticleDetails = useMemo(() => {
    return lookupBootcampArticle(selectedArticleStr);
  }, [selectedArticleStr]);

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
    // Record into Mistakes Bank
    const mcqObj = currentDay.mcqs.find((m) => m.id === mcqId);
    if (mcqObj) {
      if (optionIndex !== mcqObj.correctIndex) {
        recordMistake({
          id: `${currentDay.dayNumber}-${mcqObj.id}`,
          questionId: mcqObj.id,
          dayNumber: currentDay.dayNumber,
          dayTitle: currentDay.title,
          round: mcqObj.round || 1,
          question: mcqObj.question,
          options: mcqObj.options,
          correctAnswer: mcqObj.correctIndex,
          userAnswer: optionIndex,
          explanation: mcqObj.explanation,
          statutoryAnchor: mcqObj.articleRef,
        });
      } else {
        recordSuccess(`${currentDay.dayNumber}-${mcqObj.id}`);
      }
    }

    setProgress((prev) => {
      const dayProg = prev[selectedDayNumber] || {
        tasks: { articles: false, cases: false, terms: false, mcqs: false, caseStudy: false },
        mcqAnswers: {}
      };
      const updatedAnswers = {
        ...dayProg.mcqAnswers,
        [mcqId]: optionIndex
      };

      const threshold = Math.min(20, currentDay.mcqs.length);
      const answeredCount = Object.keys(updatedAnswers).filter((id) =>
        currentDay.mcqs.some((m) => m.id === id)
      ).length;

      return {
        ...prev,
        [selectedDayNumber]: {
          ...dayProg,
          mcqAnswers: updatedAnswers,
          tasks: {
            ...dayProg.tasks,
            mcqs: answeredCount >= threshold ? true : dayProg.tasks.mcqs
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
    let correct = 0;
    let incorrect = 0;
    currentDay.mcqs.forEach((mcq) => {
      const userAns = currentDayProgress.mcqAnswers[mcq.id];
      if (userAns !== undefined) {
        answered++;
        if (userAns === mcq.correctIndex) {
          score += 1.0;
          correct++;
        } else {
          score -= 0.25; // JKPSC PO negative marking
          incorrect++;
        }
      }
    });
    return { score: Math.max(0, score), answered, correct, incorrect };
  }, [currentDay, currentDayProgress]);

  // Round configuration & metadata
  const dayRounds = useMemo(() => {
    const rounds = new Set<BootcampMCQRoundType>();
    currentDay.mcqs.forEach((m) => {
      if (m.round) rounds.add(m.round);
    });
    return ROUND_LIST.filter((r) => rounds.has(r.id));
  }, [currentDay]);

  // Round-wise performance stats
  const roundStats = useMemo(() => {
    const map: Record<
      BootcampMCQRoundType,
      { total: number; answered: number; correct: number; incorrect: number; score: number }
    > = {
      'Bare Act Nuance': { total: 0, answered: 0, correct: 0, incorrect: 0, score: 0 },
      'Landmark Precedents': { total: 0, answered: 0, correct: 0, incorrect: 0, score: 0 },
      'Assertion-Reasoning': { total: 0, answered: 0, correct: 0, incorrect: 0, score: 0 },
      'Negative Traps': { total: 0, answered: 0, correct: 0, incorrect: 0, score: 0 },
      'Applied Courtroom': { total: 0, answered: 0, correct: 0, incorrect: 0, score: 0 }
    };
    currentDay.mcqs.forEach((m) => {
      if (m.round && map[m.round]) {
        map[m.round].total++;
        const userAns = currentDayProgress.mcqAnswers[m.id];
        if (userAns !== undefined) {
          map[m.round].answered++;
          if (userAns === m.correctIndex) {
            map[m.round].correct++;
            map[m.round].score += 1.0;
          } else {
            map[m.round].incorrect++;
            map[m.round].score = Math.max(0, map[m.round].score - 0.25);
          }
        }
      }
    });
    return map;
  }, [currentDay, currentDayProgress]);

  // Filtered MCQs based on selected round and filter (all / mistakes / unanswered)
  const filteredMCQs = useMemo(() => {
    let list = currentDay.mcqs;
    if (selectedRound !== 'all') {
      list = list.filter((m) => m.round === selectedRound);
    }
    if (mcqFilter === 'mistakes') {
      list = list.filter((m) => {
        const userAns = currentDayProgress.mcqAnswers[m.id];
        return userAns !== undefined && userAns !== m.correctIndex;
      });
    } else if (mcqFilter === 'unanswered') {
      list = list.filter((m) => currentDayProgress.mcqAnswers[m.id] === undefined);
    }
    return list;
  }, [currentDay, selectedRound, mcqFilter, currentDayProgress]);

  // Mistake count across current day
  const currentMistakesCount = useMemo(() => {
    return currentDay.mcqs.filter((m) => {
      const userAns = currentDayProgress.mcqAnswers[m.id];
      return userAns !== undefined && userAns !== m.correctIndex;
    }).length;
  }, [currentDay, currentDayProgress]);

  // Clear single MCQ for retrying
  const handleClearMCQ = (mcqId: string) => {
    setProgress((prev) => {
      const dayProg = prev[selectedDayNumber] || {
        tasks: { articles: false, cases: false, terms: false, mcqs: false, caseStudy: false },
        mcqAnswers: {}
      };
      const updatedAnswers = { ...dayProg.mcqAnswers };
      delete updatedAnswers[mcqId];
      return {
        ...prev,
        [selectedDayNumber]: {
          ...dayProg,
          mcqAnswers: updatedAnswers
        }
      };
    });
  };

  // Clear all mistakes in current day for re-drill
  const handleResetMistakes = () => {
    setProgress((prev) => {
      const dayProg = prev[selectedDayNumber] || {
        tasks: { articles: false, cases: false, terms: false, mcqs: false, caseStudy: false },
        mcqAnswers: {}
      };
      const updatedAnswers = { ...dayProg.mcqAnswers };
      currentDay.mcqs.forEach((m) => {
        if (updatedAnswers[m.id] !== undefined && updatedAnswers[m.id] !== m.correctIndex) {
          delete updatedAnswers[m.id];
        }
      });
      return {
        ...prev,
        [selectedDayNumber]: {
          ...dayProg,
          mcqAnswers: updatedAnswers
        }
      };
    });
  };

  // Active Comprehension Case Study
  const activeComprehensionCaseStudy: BootcampComprehensionCaseStudy | null = useMemo(() => {
    if (currentDay.comprehensionCaseStudies && currentDay.comprehensionCaseStudies.length > 0) {
      return (
        currentDay.comprehensionCaseStudies[activeCaseStudyIndex] ||
        currentDay.comprehensionCaseStudies[0]
      );
    }
    return null;
  }, [currentDay, activeCaseStudyIndex]);

  // Case Study Sub-MCQ Answer Handler
  const handleAnswerCaseStudyMCQ = (subMcqId: string, optionIndex: number) => {
    // Record into Mistakes Bank
    const allCases = currentDay.comprehensionCaseStudies || [];
    for (const cs of allCases) {
      const subQ = cs.comprehensionMCQs.find((q) => q.id === subMcqId);
      if (subQ) {
        if (optionIndex !== subQ.correctIndex) {
          recordMistake({
            id: `${currentDay.dayNumber}-case-${subQ.id}`,
            questionId: subQ.id,
            dayNumber: currentDay.dayNumber,
            dayTitle: `${currentDay.title} · ${cs.title}`,
            round: 5,
            question: subQ.question,
            options: subQ.options,
            correctAnswer: subQ.correctIndex,
            userAnswer: optionIndex,
            explanation: subQ.explanation,
            statutoryAnchor: cs.statutoryApplicability?.join(', ') || '',
          });
        } else {
          recordSuccess(`${currentDay.dayNumber}-case-${subQ.id}`);
        }
        break;
      }
    }

    setProgress((prev) => {
      const dayProg = prev[selectedDayNumber] || {
        tasks: { articles: false, cases: false, terms: false, mcqs: false, caseStudy: false },
        mcqAnswers: {},
        caseStudyMcqAnswers: {}
      };
      const updatedCaseAnswers = {
        ...(dayProg.caseStudyMcqAnswers || {}),
        [subMcqId]: optionIndex
      };

      const allCaseStudies = currentDay.comprehensionCaseStudies || [];
      const totalCaseSubMCQs = allCaseStudies.reduce((sum, cs) => sum + cs.comprehensionMCQs.length, 0);
      const answeredCaseSubMCQs = Object.keys(updatedCaseAnswers).length;
      const caseStudyTaskDone =
        totalCaseSubMCQs > 0
          ? answeredCaseSubMCQs >= Math.min(10, totalCaseSubMCQs)
          : dayProg.tasks.caseStudy;

      return {
        ...prev,
        [selectedDayNumber]: {
          ...dayProg,
          caseStudyMcqAnswers: updatedCaseAnswers,
          tasks: {
            ...dayProg.tasks,
            caseStudy: caseStudyTaskDone ? true : dayProg.tasks.caseStudy
          }
        }
      };
    });
  };

  // Helper to dynamically render primary vector diagram
  const renderPrimarySvgDiagram = (svgId: string) => {
    switch (svgId) {
      case 'preamble-arch':
        return <PreambleArchitectureSVG />;
      case 'writs-matrix':
        return <WritsMatrixSVG />;
      case 'criminal-pipeline':
        return <CriminalConstitutionalPipelineSVG />;
      case 'article-21-evolution':
        return <Article21EvolutionSVG />;
      case 'basic-structure-evolution':
        return <BasicStructureEvolutionSVG />;
      case 'clemency-architecture':
        return <ExecutiveClemencyArchitectureSVG />;
      case 'separation-powers':
        return <SeparationOfPowersSVG />;
      case 'legislative-passage':
        return <LegislativePassageSVG />;
      case 'precedent-lineage':
        return <PrecedentLineageSVG />;
      case 'asymmetric-federalism':
        return <AsymmetricFederalismSVG />;
      case 'federal-relations':
        return <FederalRelationsSVG />;
      case 'gst-fiscal-federalism':
        return <GSTCouncilFiscalSVG />;
      case 'civil-services-safeguards':
        return <CivilServicesSafeguardsSVG />;
      case 'emergency-matrix':
        return <EmergencyMatrixSVG />;
      case 'amendment-pipeline':
        return <AmendmentPipelineSVG />;
      case 'electoral-architecture':
        return <ElectoralArchitectureSVG />;
      case 'schedules-genealogy':
        return <SchedulesGenealogySVG />;
      default:
        return <PrecedentLineageSVG />;
    }
  };

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
              Master the entire Constitution in 15 days: 
              <strong className="text-[var(--text-primary)]"> 300 MCQs</strong>, 
              <strong className="text-[var(--text-primary)]"> 15 Courtroom Case Studies</strong>, 
              <strong className="text-[var(--text-primary)]"> 17 Vector Blueprints</strong>, and 
              <strong className="text-[var(--text-primary)]"> Direct 1-Click Module Deep-Links</strong>.
            </p>
          </div>

          {/* Quick Action Buttons */}
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
              onClick={() => setActiveTab('judgments')}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/30 hover:bg-[var(--accent-primary)]/20 transition-all flex items-center gap-1.5 shadow-sm"
            >
              <Award className="w-3.5 h-3.5" />
              100 Landmark Cases
            </button>
            <button
              onClick={() => setActiveTab('visual-lab')}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-[var(--bg-base)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] transition-all flex items-center gap-1.5 shadow-sm"
            >
              <Eye className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
              Visual Law Lab
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
            <p className="text-[11px] text-[var(--text-muted)]">Complete all 5 daily tasks</p>
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
            <span className="inline-flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-[var(--bootcamp-accent-subtle)] border border-[var(--bootcamp-accent-border)]" /> 20–60%</span>
            <span className="inline-flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-[var(--info-bg)] border border-[var(--info-border)]" /> 80%</span>
            <span className="inline-flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-[var(--success-bg)] border border-[var(--success-border)]" /> 100%</span>
          </div>
        </div>

        {/* Heatmap Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-15 gap-2.5">
          {FIFTEEN_DAY_BOOTCAMP_DATA.map((day) => {
            const p = progress[day.dayNumber];
            const tasksDone = p ? Object.values(p.tasks).filter(Boolean).length : 0;
            const isSelected = day.dayNumber === selectedDayNumber;

            let bgClass = 'bg-[var(--bg-surface)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent)]';
            if (tasksDone === 5) {
              bgClass = 'bg-[var(--success-bg)] border-[var(--success-border)] text-[var(--success-text)] shadow-sm font-bold';
            } else if (tasksDone >= 4) {
              bgClass = 'bg-[var(--info-bg)] border-[var(--info-border)] text-[var(--info-text)] font-semibold';
            } else if (tasksDone >= 2) {
              bgClass = 'bg-[var(--bootcamp-accent-subtle)] border-[var(--bootcamp-accent-border)] text-[var(--bootcamp-accent-text)] font-medium';
            } else if (tasksDone === 1) {
              bgClass = 'bg-[var(--accent-subtle)] border-[var(--accent)]/30 text-[var(--text-primary)]';
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
          SELECTED DAY BANNER & VIEW SWITCHER
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
              <span className="inline-flex items-center gap-1 text-xs text-[var(--bootcamp-accent-text)] font-medium">
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

          {/* View Mode Switcher & Day Navigation Controls */}
          <div className="flex flex-wrap items-center gap-3">
            {/* View Mode Toggle */}
            <div className="flex items-center p-1 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
              <button
                onClick={() => setViewLayout('tabs')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                  viewLayout === 'tabs'
                    ? 'bg-[var(--accent)] text-[var(--accent-contrast)] shadow-sm'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Tabbed Drill</span>
              </button>
              <button
                onClick={() => setViewLayout('all-in-one')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                  viewLayout === 'all-in-one'
                    ? 'bg-[var(--accent)] text-[var(--accent-contrast)] shadow-sm'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                <List className="w-3.5 h-3.5" />
                <span>All-in-One Dossier</span>
              </button>
            </div>

            {/* Prev / Next Day Controls */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setSelectedDayNumber((prev) => Math.max(1, prev - 1))}
                disabled={selectedDayNumber === 1}
                className="p-2 rounded-lg border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-base)] disabled:opacity-30 disabled:pointer-events-none transition-colors"
                title="Previous Day"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-bold px-2.5 py-1.5 bg-[var(--bg-base)] rounded-lg border border-[var(--border-subtle)]">
                {selectedDayNumber} / 15
              </span>
              <button
                onClick={() => setSelectedDayNumber((prev) => Math.min(15, prev + 1))}
                disabled={selectedDayNumber === 15}
                className="p-2 rounded-lg border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-base)] disabled:opacity-30 disabled:pointer-events-none transition-colors"
                title="Next Day"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================================
            DIRECT PLATFORM MODULE ACCESS STRIP FOR THIS DAY
        ========================================================================= */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-[var(--bg-card)] via-[var(--bg-card)] to-[var(--bg-base)] border-2 border-[var(--accent-primary)]/20 shadow-md space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[var(--accent-primary)]" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
                Direct Platform Section Links for Day {currentDay.dayNumber}
              </h3>
            </div>
            <span className="text-[11px] text-[var(--text-muted)]">
              Jump directly into the Constitution parts, master directory, vector blueprints, and doctrines
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* 1. Corresponding Parts in 25 Parts Hub */}
            <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--accent-primary)]">
                <BookOpen className="w-3.5 h-3.5" />
                <span>25 Parts Hub:</span>
              </div>
              <div className="flex flex-col gap-1.5">
                {currentDayLinks.parts.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setSelectedPartId(p.id);
                      setActiveTab('parts');
                    }}
                    className="p-2 rounded-lg text-left text-xs bg-[var(--bg-card)] hover:bg-[var(--accent-primary)]/10 border border-[var(--border-subtle)] hover:border-[var(--accent-primary)]/40 transition-all flex items-center justify-between group"
                  >
                    <div className="truncate">
                      <span className="font-bold text-[var(--text-primary)] block truncate">{p.partNumber}</span>
                      <span className="text-[10px] text-[var(--text-muted)] truncate block">{p.title} ({p.articlesRange})</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] group-hover:translate-x-0.5 transition-all shrink-0 ml-1.5" />
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Primary Vector Blueprint in Visual Lab */}
            <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--info-text)]">
                <Eye className="w-3.5 h-3.5" />
                <span>Vector Blueprint:</span>
              </div>
              <button
                onClick={() => {
                  setSelectedSvgId(currentDayLinks.primarySvg.id);
                  setActiveTab('visual-lab');
                }}
                className="w-full p-2.5 rounded-lg text-left text-xs bg-[var(--bg-card)] hover:bg-[var(--info-bg)] border border-[var(--border-subtle)] hover:border-[var(--info-border)] transition-all flex items-start justify-between group"
              >
                <div>
                  <span className="font-bold text-[var(--text-primary)] block">{currentDayLinks.primarySvg.title}</span>
                  <span className="text-[10px] text-[var(--text-muted)] block mt-0.5">{currentDayLinks.primarySvg.category}</span>
                  <span className="text-[10px] text-[var(--info-text)] block font-mono mt-1">{currentDayLinks.primarySvg.articles}</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--info-text)] shrink-0 ml-1.5 mt-0.5" />
              </button>
              <button
                onClick={() => setActiveTab('articles-master')}
                className="w-full text-[11px] font-semibold text-[var(--text-muted)] hover:text-[var(--accent-primary)] flex items-center justify-center gap-1 pt-1"
              >
                <Layers className="w-3 h-3" />
                <span>Open Articles 1–395 Master Index &rarr;</span>
              </button>
            </div>

            {/* 3. Doctrines Hub & Key Rulings */}
            <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--bootcamp-accent-text)]">
                <Scale className="w-3.5 h-3.5" />
                <span>Doctrines & Precedents:</span>
              </div>
              <div className="flex flex-col gap-1.5">
                {currentDayLinks.doctrines.map((doc) => (
                  <button
                    key={doc.id}
                    onClick={() => setActiveTab('doctrines')}
                    className="p-2 rounded-lg text-left text-xs bg-[var(--bg-card)] hover:bg-[var(--bootcamp-accent-subtle)] border border-[var(--border-subtle)] hover:border-[var(--bootcamp-accent-border)] transition-all flex items-center justify-between group"
                  >
                    <div className="truncate">
                      <span className="font-bold text-[var(--text-primary)] block truncate">{doc.name}</span>
                      <span className="text-[10px] text-[var(--text-muted)] truncate block italic">{doc.leadCase}</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--bootcamp-accent-text)] shrink-0 ml-1.5" />
                  </button>
                ))}
              </div>
              <button
                onClick={() => setActiveTab('judgments')}
                className="w-full text-[11px] font-semibold text-[var(--text-muted)] hover:text-[var(--bootcamp-accent-text)] flex items-center justify-center gap-1 pt-0.5"
              >
                <Award className="w-3 h-3" />
                <span>Open 100 Landmark Cases Hub &rarr;</span>
              </button>
            </div>

            {/* 4. Constitutional Amendments & Schedules */}
            <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                <GitCommit className="w-3.5 h-3.5" />
                <span>Amendments & Schedules:</span>
              </div>
              <div className="flex flex-col gap-1.5">
                {currentDayLinks.amendments.slice(0, 2).map((amd) => (
                  <button
                    key={amd.number}
                    onClick={() => setActiveTab('amendments')}
                    className="p-1.5 rounded-lg text-left text-xs bg-[var(--bg-card)] hover:bg-emerald-500/10 border border-[var(--border-subtle)] hover:border-emerald-400/40 transition-all flex items-center justify-between group"
                  >
                    <span className="text-[11px] font-semibold text-[var(--text-primary)] truncate">
                      {amd.number}th Amd ({amd.year})
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-emerald-400 shrink-0 ml-1" />
                  </button>
                ))}
                {currentDayLinks.schedules && currentDayLinks.schedules.length > 0 && (
                  <button
                    onClick={() => setActiveTab('schedules')}
                    className="p-1.5 rounded-lg text-left text-xs bg-[var(--bg-card)] hover:bg-emerald-500/10 border border-[var(--border-subtle)] hover:border-emerald-400/40 transition-all flex items-center justify-between group"
                  >
                    <span className="text-[11px] font-semibold text-emerald-400 truncate">
                      Schedule {currentDayLinks.schedules[0].roman}: {currentDayLinks.schedules[0].title.slice(0, 24)}...
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-emerald-400 shrink-0 ml-1" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 5 Daily Checkbox Tasks Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
          <button
            onClick={() => toggleTask('articles')}
            className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
              currentDayProgress.tasks.articles
                ? 'bg-[var(--success-bg)] border-[var(--success-border)] text-[var(--success-text)] font-semibold'
                : 'bg-[var(--bg-card)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:border-[var(--accent-primary)]/40'
            }`}
          >
            <div className="space-y-0.5">
              <span className="text-[10px] uppercase font-bold tracking-wider">Task 1 (2.0 hrs)</span>
              <p className="text-xs font-semibold text-[var(--text-primary)]">Read Target Articles</p>
            </div>
            {currentDayProgress.tasks.articles ? (
              <CheckCircle2 className="w-5 h-5 text-[var(--success-text)] shrink-0" />
            ) : (
              <Circle className="w-5 h-5 text-gray-500 shrink-0" />
            )}
          </button>

          <button
            onClick={() => toggleTask('cases')}
            className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
              currentDayProgress.tasks.cases
                ? 'bg-[var(--success-bg)] border-[var(--success-border)] text-[var(--success-text)] font-semibold'
                : 'bg-[var(--bg-card)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:border-[var(--accent-primary)]/40'
            }`}
          >
            <div className="space-y-0.5">
              <span className="text-[10px] uppercase font-bold tracking-wider">Task 2 (1.5 hrs)</span>
              <p className="text-xs font-semibold text-[var(--text-primary)]">Master Case Law Pairs</p>
            </div>
            {currentDayProgress.tasks.cases ? (
              <CheckCircle2 className="w-5 h-5 text-[var(--success-text)] shrink-0" />
            ) : (
              <Circle className="w-5 h-5 text-gray-500 shrink-0" />
            )}
          </button>

          <button
            onClick={() => toggleTask('terms')}
            className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
              currentDayProgress.tasks.terms
                ? 'bg-[var(--success-bg)] border-[var(--success-border)] text-[var(--success-text)] font-semibold'
                : 'bg-[var(--bg-card)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:border-[var(--accent-primary)]/40'
            }`}
          >
            <div className="space-y-0.5">
              <span className="text-[10px] uppercase font-bold tracking-wider">Task 3 (1.0 hr)</span>
              <p className="text-xs font-semibold text-[var(--text-primary)]">15 Legal Terms & Maxims</p>
            </div>
            {currentDayProgress.tasks.terms ? (
              <CheckCircle2 className="w-5 h-5 text-[var(--success-text)] shrink-0" />
            ) : (
              <Circle className="w-5 h-5 text-gray-500 shrink-0" />
            )}
          </button>

          <button
            onClick={() => toggleTask('mcqs')}
            className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
              currentDayProgress.tasks.mcqs
                ? 'bg-[var(--success-bg)] border-[var(--success-border)] text-[var(--success-text)] font-semibold'
                : 'bg-[var(--bg-card)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:border-[var(--accent-primary)]/40'
            }`}
          >
            <div className="space-y-0.5">
              <span className="text-[10px] uppercase font-bold tracking-wider">Task 4 (0.5 hr)</span>
              <p className="text-xs font-semibold text-[var(--text-primary)]">
                Solve MCQs ({currentDayMCQScore.answered}/{currentDay.mcqs.length})
              </p>
            </div>
            {currentDayProgress.tasks.mcqs ? (
              <CheckCircle2 className="w-5 h-5 text-[var(--success-text)] shrink-0" />
            ) : (
              <Circle className="w-5 h-5 text-gray-500 shrink-0" />
            )}
          </button>

          <button
            onClick={() => toggleTask('caseStudy')}
            className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
              currentDayProgress.tasks.caseStudy
                ? 'bg-[var(--success-bg)] border-[var(--success-border)] text-[var(--success-text)] font-semibold'
                : 'bg-[var(--bg-card)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:border-[var(--accent-primary)]/40'
            }`}
          >
            <div className="space-y-0.5">
              <span className="text-[10px] uppercase font-bold tracking-wider">Task 5 (0.5 hr)</span>
              <p className="text-xs font-semibold text-[var(--text-primary)]">
                Master Case Studies ({currentDay.comprehensionCaseStudies?.length || 1})
              </p>
            </div>
            {currentDayProgress.tasks.caseStudy ? (
              <CheckCircle2 className="w-5 h-5 text-[var(--success-text)] shrink-0" />
            ) : (
              <Circle className="w-5 h-5 text-gray-500 shrink-0" />
            )}
          </button>
        </div>

        {/* Sub-Tab Navigation Bar (Active in 'tabs' mode) */}
        {viewLayout === 'tabs' && (
          <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] overflow-x-auto pb-2">
            <button
              onClick={() => setActiveSubTab('curriculum')}
              className={`px-4 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
                activeSubTab === 'curriculum'
                  ? 'bg-[var(--accent)] text-[var(--accent-contrast)] shadow-md'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              1. Study Curriculum & Articles
            </button>

            <button
              onClick={() => setActiveSubTab('svg')}
              className={`px-4 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
                activeSubTab === 'svg'
                  ? 'bg-[var(--accent)] text-[var(--accent-contrast)] shadow-md'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
              }`}
            >
              <Eye className="w-4 h-4" />
              2. Vector Blueprint ({currentDayLinks.primarySvg.title.split(' ')[0]})
            </button>

            <button
              onClick={() => setActiveSubTab('cases')}
              className={`px-4 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
                activeSubTab === 'cases'
                  ? 'bg-[var(--accent)] text-[var(--accent-contrast)] shadow-md'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
              }`}
            >
              <Award className="w-4 h-4" />
              3. Classic vs 2024 Pairs
            </button>

            <button
              onClick={() => setActiveSubTab('mcqs')}
              className={`px-4 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
                activeSubTab === 'mcqs'
                  ? 'bg-[var(--accent)] text-[var(--accent-contrast)] shadow-md'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              4. MCQ Arena ({currentDay.mcqs.length} Qs)
              <span className="ml-1 text-xs px-1.5 py-0.5 rounded-full bg-[var(--bg-base)] text-[var(--accent-primary)] font-bold">
                {currentDayMCQScore.answered}/{currentDay.mcqs.length}
              </span>
            </button>

            <button
              onClick={() => setActiveSubTab('casestudy')}
              className={`px-4 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
                activeSubTab === 'casestudy'
                  ? 'bg-[var(--accent)] text-[var(--accent-contrast)] shadow-md'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
              }`}
            >
              <Scale className="w-4 h-4" />
              5. Case Studies ({currentDay.comprehensionCaseStudies?.length || 1} Scenarios)
            </button>
          </div>
        )}
      </div>

      {/* =========================================================================
          SECTION: TARGET ARTICLES INTERACTIVE BROWSER & DEEP-DIVE DOSSIER
      ========================================================================= */}
      {(viewLayout === 'all-in-one' || activeSubTab === 'curriculum') && (
        <div className="space-y-6 animate-fadeIn">
          {/* Target Articles Selector Strip */}
          <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)] block">
                  Interactive Target Articles Dossier — Day {currentDay.dayNumber}
                </span>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">
                  Click any article below to inspect verbatim statutory text, clauses, exceptions, and prosecution notes:
                </p>
              </div>
              <button
                onClick={() => setActiveTab('articles-master')}
                className="text-xs font-bold text-[var(--accent-primary)] hover:underline flex items-center gap-1 self-start sm:self-auto"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Articles 1–395 Master Directory &rarr;</span>
              </button>
            </div>

            {/* Clickable Article Badges */}
            <div className="flex flex-wrap gap-2">
              {currentDay.targetArticles.map((art) => {
                const isSelected = selectedArticleStr === art;
                return (
                  <button
                    key={art}
                    onClick={() => setSelectedArticleStr(art)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-[var(--accent)] text-[var(--accent-contrast)] shadow-md scale-105'
                        : 'bg-[var(--bg-base)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)]'
                    }`}
                  >
                    <span>{art}</span>
                    {isSelected && <Check className="w-3.5 h-3.5" />}
                  </button>
                );
              })}
            </div>

            {/* Selected Article Full Dossier Card */}
            {activeArticleDetails && (
              <div className="p-6 rounded-2xl bg-[var(--bg-base)] border-2 border-[var(--accent-primary)]/30 space-y-5 animate-fadeIn shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded text-xs font-black uppercase tracking-wider bg-[var(--accent)] text-[var(--accent-contrast)]">
                        {activeArticleDetails.displayNumber}
                      </span>
                      <span className="text-xs font-semibold text-[var(--text-muted)]">
                        {activeArticleDetails.partName}
                      </span>
                    </div>
                    <h3 className="text-xl font-extrabold text-[var(--text-primary)]">
                      {activeArticleDetails.title}
                    </h3>
                  </div>

                  {/* Actions for this Article */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleBookmark(activeArticleDetails.number)}
                      className={`p-2 rounded-xl border transition-colors flex items-center gap-1.5 text-xs font-semibold ${
                        bookmarkedArticles.includes(activeArticleDetails.number) || bookmarkedArticles.includes(`Art ${activeArticleDetails.number}`)
                          ? 'bg-[var(--bootcamp-accent-subtle)] text-[var(--bootcamp-accent-text)] border-[var(--bootcamp-accent-border)]'
                          : 'bg-[var(--bg-card)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                      }`}
                      title="Bookmark Article"
                    >
                      <Bookmark className="w-3.5 h-3.5" />
                      <span>Bookmark</span>
                    </button>
                    <button
                      onClick={() => {
                        setSelectedPartId(activeArticleDetails.partId);
                        setActiveTab('parts');
                      }}
                      className="px-3 py-2 rounded-xl text-xs font-bold bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/30 hover:bg-[var(--accent-primary)]/20 transition-all flex items-center gap-1.5"
                    >
                      <span>Open in 25 Parts</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Verbatim Text / Statutory Snippet */}
                <div className="space-y-2 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border-subtle)]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--accent-primary)]">
                    Bare Act Statutory Text & Constitutional Language:
                  </span>
                  <p className="font-editorial text-sm md:text-base italic text-[var(--text-primary)] leading-relaxed">
                    "{activeArticleDetails.verbatimSnippet}"
                  </p>
                </div>

                {/* Plain English & Summary */}
                {activeArticleDetails.plainEnglish && (
                  <div className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">
                    <strong className="text-[var(--text-primary)]">Analytical Meaning: </strong>
                    <AnnotatedLegalText text={activeArticleDetails.plainEnglish} />
                  </div>
                )}

                {/* Real-World Practical Scenario & Courtroom Example */}
                {activeArticleDetails.realWorldScenario && (
                  <div className="p-4 rounded-xl bg-[var(--info-bg)] border border-[var(--info-border)]/30 text-xs text-[var(--text-primary)] space-y-1.5">
                    <div className="flex items-center gap-1.5 font-bold text-[var(--info-text)] uppercase tracking-wider text-[11px]">
                      <Scale className="w-3.5 h-3.5" />
                      <span>Real-World Courtroom Example & Scenario:</span>
                    </div>
                    <p className="leading-relaxed">
                      <AnnotatedLegalText text={activeArticleDetails.realWorldScenario} />
                    </p>
                  </div>
                )}

                {/* Prosecuting Officer Examination Angle */}
                {activeArticleDetails.prosecutionNote && (
                  <div className="p-3.5 rounded-xl bg-[var(--bootcamp-accent-subtle)] border border-[var(--bootcamp-accent-border)] text-xs text-[var(--text-primary)] flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-[var(--bootcamp-accent-text)]" />
                    <div>
                      <strong className="text-[var(--bootcamp-accent-text)]">Prosecuting Officer Exam Relevance: </strong>
                      <AnnotatedLegalText text={activeArticleDetails.prosecutionNote} />
                    </div>
                  </div>
                )}

                {/* Sub-Clauses (if available) */}
                {activeArticleDetails.clauses && activeArticleDetails.clauses.length > 0 && (
                  <div className="space-y-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
                      Clause-by-Clause Substantive Breakdown:
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                      {activeArticleDetails.clauses.map((c, cIdx) => (
                        <div
                          key={cIdx}
                          className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-1 text-xs"
                        >
                          <span className="font-bold text-[var(--accent-primary)] block">{c.clause}</span>
                          <p className="text-[var(--text-secondary)] leading-relaxed">
                            <AnnotatedLegalText text={c.explanation} />
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Landmark Judgments on this Article */}
                {activeArticleDetails.landmarkCases && activeArticleDetails.landmarkCases.length > 0 && (
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
                      Leading Precedents Interpreting This Article:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeArticleDetails.landmarkCases.map((lc, lcIdx) => (
                        <button
                          key={lcIdx}
                          onClick={() => setActiveTab('judgments')}
                          className="p-2 rounded-xl text-left bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)]/40 transition-colors flex items-center gap-2 group"
                        >
                          <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <div>
                            <span className="text-xs font-bold text-[var(--text-primary)] block group-hover:text-[var(--accent-primary)]">
                              {lc.caseName} ({lc.year})
                            </span>
                            <span className="text-[10px] text-[var(--text-muted)] block truncate max-w-xs">{lc.significance}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Substantive Law & Examination Concepts Cards */}
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
                    <strong className="text-[var(--bootcamp-accent-text)]">Prosecuting Officer Exam Angle: </strong>
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
                Daily Legal Terms & Latin Maxims (Hover for Definitions)
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
          SECTION: DEDICATED VECTOR BLUEPRINT FOR DAY X
      ========================================================================= */}
      {(viewLayout === 'all-in-one' || activeSubTab === 'svg') && (
        <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-6 animate-fadeIn">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-[var(--info-bg)] text-[var(--info-text)] border border-[var(--info-border)]/40">
                  Vector Blueprint {currentDay.dayNumber} of 15
                </span>
                <span className="text-xs text-[var(--text-muted)] font-mono">
                  {currentDayLinks.primarySvg.articles}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                <Eye className="w-5 h-5 text-[var(--info-text)]" />
                {svgDisplayMode === 'day-primary' ? currentDayLinks.primarySvg.title : 'Supreme Court Precedent Lineage Architecture'}
              </h3>
            </div>

            {/* Diagram Controls */}
            <div className="flex items-center gap-2">
              <div className="flex items-center p-1 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs font-bold">
                <button
                  onClick={() => setSvgDisplayMode('day-primary')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    svgDisplayMode === 'day-primary'
                      ? 'bg-[var(--accent)] text-[var(--accent-contrast)] shadow-sm'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  Day Blueprint
                </button>
                <button
                  onClick={() => setSvgDisplayMode('lineage-tree')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    svgDisplayMode === 'lineage-tree'
                      ? 'bg-[var(--accent)] text-[var(--accent-contrast)] shadow-sm'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  8-Tree Lineage
                </button>
              </div>

              <button
                onClick={() => {
                  setSelectedSvgId(currentDayLinks.primarySvg.id);
                  setActiveTab('visual-lab');
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[var(--info-bg)] text-[var(--info-text)] border border-[var(--info-border)]/40 hover:opacity-90 transition-all flex items-center gap-1.5 shrink-0"
              >
                <span>Full Lab View</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Render Active SVG */}
          <div className="rounded-xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-base)] p-2">
            {svgDisplayMode === 'day-primary'
              ? renderPrimarySvgDiagram(currentDayLinks.primarySvg.id)
              : <PrecedentLineageSVG />}
          </div>
        </div>
      )}

      {/* =========================================================================
          SECTION: CLASSIC VS 2024 MODERN CASE PAIRS
      ========================================================================= */}
      {(viewLayout === 'all-in-one' || activeSubTab === 'cases') && (
        <div className="space-y-6 animate-fadeIn">
          <div className="p-4 rounded-xl bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20 text-xs text-[var(--text-secondary)] leading-relaxed flex items-center justify-between gap-4">
            <div>
              <strong className="text-[var(--text-primary)]">Exam Strategy Note: </strong>
              In JKPSC PO Mains, always introduce the historical foundational landmark first, followed immediately by the modern 2024/2025 Supreme Court Constitution Bench ruling that clarified or overruled it.
            </div>
            <button
              onClick={() => setActiveTab('judgments')}
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-[var(--accent-primary)]/20 text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/30 transition-colors shrink-0"
            >
              Open 100 Cases &rarr;
            </button>
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
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[var(--success-bg)] text-[var(--success-text)] border border-[var(--success-border)]">
                      2024–2025 Modern Precedent
                    </span>
                    <span className="text-xs font-semibold text-[var(--success-text)]">
                      {pair.modernCase.year} ({pair.modernCase.bench})
                    </span>
                  </div>
                  <h5 className="text-base font-black text-[var(--text-primary)]">
                    {pair.modernCase.name}
                  </h5>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    <strong className="text-[var(--success-text)]">Modern Constitutional Ratio: </strong>
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
          SECTION: HIGH-YIELD OBJECTIVE ARENA (200 MCQS ACROSS 5 SPECIALIZED ROUNDS)
      ========================================================================= */}
      {(viewLayout === 'all-in-one' || activeSubTab === 'mcqs') && (
        <div className="space-y-6 animate-fadeIn">
          {/* MCQ Arena Banner */}
          <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
            <div className="space-y-1.5 text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <span className="px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
                  Judicial & Preliminary Examination Arena
                </span>
                <span className="text-xs text-[var(--text-muted)]">Day {currentDay.dayNumber}</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[var(--text-primary)]">
                {currentDay.mcqs.length} High-Yield Objective Questions (5 Rounds)
              </h3>
              <p className="text-xs text-[var(--text-muted)]">
                Official Marking Standard: <strong className="text-emerald-400">+1.0</strong> for Correct, <strong className="text-rose-400">-0.25</strong> for Incorrect
              </p>
            </div>

            {/* Score & Progress Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
                <span className="text-[11px] text-[var(--text-muted)] block font-medium">Answered</span>
                <span className="text-lg font-bold text-[var(--text-primary)]">
                  {currentDayMCQScore.answered} / {currentDay.mcqs.length}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
                <span className="text-[11px] text-[var(--text-muted)] block font-medium">Accuracy</span>
                <span className="text-lg font-bold text-emerald-400">
                  {currentDayMCQScore.answered > 0
                    ? Math.round(((currentDayMCQScore.correct || 0) / currentDayMCQScore.answered) * 100)
                    : 0}%
                </span>
              </div>
              <div className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
                <span className="text-[11px] text-[var(--text-muted)] block font-medium">Mistakes</span>
                <span className="text-lg font-bold text-rose-400">
                  {currentMistakesCount}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
                <span className="text-[11px] text-[var(--text-muted)] block font-medium">Net Score</span>
                <span className="text-lg font-black text-[var(--accent-primary)]">
                  {currentDayMCQScore.score.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* 5 Focus Rounds Tabs (When Day has multi-rounds) */}
          {dayRounds.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5">
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  Select Practice Round:
                </span>
                <span className="text-xs text-[var(--text-muted)]">
                  {selectedRound === 'all' ? 'Showing all questions' : `Round ${selectedRound} (${filteredMCQs.length} questions)`}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                <button
                  onClick={() => setSelectedRound('all')}
                  className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    selectedRound === 'all'
                      ? 'bg-[var(--accent)] text-[var(--accent-contrast)] border-[var(--accent-primary)] shadow-sm'
                      : 'bg-[var(--bg-card)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)]/50'
                  }`}
                >
                  <span className="text-xs font-bold block">All 5 Rounds</span>
                  <div className="flex items-center justify-between text-[11px] mt-1 opacity-90">
                    <span>{currentDay.mcqs.length} Qs</span>
                    <span>{currentDayMCQScore.answered}/{currentDay.mcqs.length}</span>
                  </div>
                </button>

                {dayRounds.map((r) => {
                  const isSelected = selectedRound === r.id;
                  const st = roundStats[r.id];

                  return (
                    <button
                      key={r.id}
                      onClick={() => setSelectedRound(r.id)}
                      className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[var(--accent)] text-[var(--accent-contrast)] border-[var(--accent-primary)] shadow-sm'
                          : 'bg-[var(--bg-card)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)]/50'
                      }`}
                    >
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-wider opacity-80 block">
                          Round {r.number}
                        </span>
                        <span className="text-xs font-bold block truncate">
                          {r.label}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] mt-2 opacity-90">
                        <span>{st?.total || 0} Qs</span>
                        <span className="font-semibold">
                          {st?.answered || 0}/{st?.total || 0}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Filter Bar & Quick Tools */}
          <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs text-[var(--text-muted)] font-medium mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Filter:
              </span>
              <button
                onClick={() => setMcqFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  mcqFilter === 'all'
                    ? 'bg-[var(--accent)] text-[var(--accent-contrast)]'
                    : 'bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                }`}
              >
                All in View ({filteredMCQs.length})
              </button>
              <button
                onClick={() => setMcqFilter('mistakes')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  mcqFilter === 'mistakes'
                    ? 'bg-rose-500 text-white'
                    : 'bg-[var(--bg-base)] text-rose-400 hover:bg-rose-500/10 border border-rose-500/30'
                }`}
              >
                <AlertCircle className="w-3.5 h-3.5" />
                Mistake Notebook ({currentMistakesCount})
              </button>
              <button
                onClick={() => setMcqFilter('unanswered')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  mcqFilter === 'unanswered'
                    ? 'bg-[var(--accent)] text-[var(--accent-contrast)]'
                    : 'bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                }`}
              >
                Unattempted ({currentDay.mcqs.length - currentDayMCQScore.answered})
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowQuickJump((prev) => !prev)}
                className="px-3 py-1.5 rounded-lg text-xs font-bold bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:text-[var(--text-primary)] flex items-center gap-1.5"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                {showQuickJump ? 'Hide Quick Jump' : 'Quick Jump'}
              </button>
              {currentMistakesCount > 0 && (
                <button
                  onClick={handleResetMistakes}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-rose-500/10 text-rose-400 border border-rose-500/30 hover:bg-rose-500/20 flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Retake Mistakes
                </button>
              )}
            </div>
          </div>

          {/* Quick Jump Number Matrix (Collapsible) */}
          {showQuickJump && (
            <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2 animate-fadeIn">
              <div className="flex items-center justify-between text-xs text-[var(--text-muted)] border-b border-[var(--border-subtle)] pb-2">
                <span>Jump to Question in Current View ({filteredMCQs.length} questions):</span>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block"></span> Correct
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block"></span> Wrong
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--border-subtle)] inline-block"></span> Unattempted
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-8 sm:grid-cols-10 md:grid-cols-20 gap-1.5 max-h-48 overflow-y-auto pt-2">
                {filteredMCQs.map((mcq, idx) => {
                  const userAns = currentDayProgress.mcqAnswers[mcq.id];
                  let btnBg = 'bg-[var(--bg-card)] border-[var(--border-subtle)] text-[var(--text-muted)]';
                  if (userAns !== undefined) {
                    if (userAns === mcq.correctIndex) {
                      btnBg = 'bg-[var(--success-bg)] border-[var(--success-border)] text-[var(--success-text)] font-bold';
                    } else {
                      btnBg = 'bg-[var(--error-bg)] border-[var(--error-border)] text-[var(--error-text)] font-bold';
                    }
                  }

                  return (
                    <button
                      key={mcq.id}
                      onClick={() => {
                        const el = document.getElementById(`mcq-${mcq.id}`);
                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }}
                      className={`h-7 rounded border text-[11px] flex items-center justify-center transition-all hover:scale-105 ${btnBg}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* MCQ Question List */}
          <div className="space-y-6">
            {filteredMCQs.length === 0 ? (
              <div className="p-12 text-center rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto opacity-70" />
                <h4 className="text-base font-bold text-[var(--text-primary)]">
                  {mcqFilter === 'mistakes' ? 'Zero Mistakes! You answered all attempted questions correctly.' : 'No questions match the current filter.'}
                </h4>
                <p className="text-xs text-[var(--text-muted)] max-w-md mx-auto">
                  Switch filters to review all questions or proceed to another round.
                </p>
                <button
                  onClick={() => setMcqFilter('all')}
                  className="px-4 py-2 rounded-lg text-xs font-bold bg-[var(--accent)] text-[var(--accent-contrast)]"
                >
                  Show All Questions
                </button>
              </div>
            ) : (
              filteredMCQs.map((mcq, mIdx) => {
                const selectedOpt = currentDayProgress.mcqAnswers[mcq.id];
                const isAnswered = selectedOpt !== undefined;

                return (
                  <div
                    id={`mcq-${mcq.id}`}
                    key={mcq.id}
                    className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-4 shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <span className="w-8 h-8 rounded-full bg-[var(--bg-base)] border border-[var(--border-subtle)] flex items-center justify-center font-bold text-xs shrink-0 text-[var(--text-primary)]">
                          {mIdx + 1}
                        </span>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            {mcq.round && (
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
                                Round {mcq.round}
                              </span>
                            )}
                            {mcq.difficulty && (
                              <span
                                className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${
                                  mcq.difficulty === 'Foundational'
                                    ? 'bg-[var(--info-bg)] text-[var(--info-text)] border-[var(--info-border)]/30'
                                    : mcq.difficulty === 'Intermediate'
                                    ? 'bg-[var(--bootcamp-accent-subtle)] text-[var(--bootcamp-accent-text)] border-[var(--bootcamp-accent-border)]'
                                    : 'bg-[var(--badge-bg)] text-[var(--accent)] border-[var(--badge-border)]'
                                }`}
                              >
                                {mcq.difficulty}
                              </span>
                            )}
                          </div>
                          <h4 className="text-sm md:text-base font-bold text-[var(--text-primary)] leading-relaxed">
                            {mcq.question}
                          </h4>
                        </div>
                      </div>
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)] shrink-0">
                        {mcq.articleRef}
                      </span>
                    </div>

                    {/* Options Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {mcq.options.map((opt, optIdx) => {
                        const isChosen = selectedOpt === optIdx;
                        const isCorrect = optIdx === mcq.correctIndex;

                        let btnStyle =
                          'bg-[var(--bg-surface)] border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--accent)]';

                        if (isAnswered) {
                          if (isCorrect) {
                            btnStyle = 'bg-[var(--success-bg)] border-[var(--success-border)] text-[var(--success-text)] font-bold shadow-sm';
                          } else if (isChosen && !isCorrect) {
                            btnStyle = 'bg-[var(--error-bg)] border-[var(--error-border)] text-[var(--error-text)] font-medium';
                          } else {
                            btnStyle = 'bg-[var(--bg-surface)] border-[var(--border-subtle)] opacity-40 text-[var(--text-muted)]';
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
                      <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs space-y-2 animate-fadeIn">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 font-bold">
                            {selectedOpt === mcq.correctIndex ? (
                              <span className="text-[var(--success-text)] flex items-center gap-1 font-bold">
                                <Check className="w-4 h-4" /> Correct Answer (+1.0)
                              </span>
                            ) : (
                              <span className="text-[var(--error-text)] flex items-center gap-1 font-bold">
                                <AlertCircle className="w-4 h-4" /> Incorrect Answer (-0.25) — Correct: Option {String.fromCharCode(65 + mcq.correctIndex)}
                              </span>
                            )}
                          </div>
                          <button
                            onClick={() => handleClearMCQ(mcq.id)}
                            className="text-[11px] text-[var(--text-muted)] hover:text-[var(--text-primary)] flex items-center gap-1 hover:underline"
                          >
                            <RotateCcw className="w-3 h-3" /> Retry
                          </button>
                        </div>
                        <p className="text-[var(--text-secondary)] leading-relaxed">
                          <AnnotatedLegalText text={mcq.explanation} />
                        </p>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          SECTION: COURTROOM CASE PROBLEMS (10 MASTER CASE STUDIES WITH COMPREHENSION DRILLS)
      ========================================================================= */}
      {(viewLayout === 'all-in-one' || activeSubTab === 'casestudy') && (
        <div className="space-y-6 animate-fadeIn">
          {currentDay.comprehensionCaseStudies && currentDay.comprehensionCaseStudies.length > 0 ? (
            <div className="space-y-6">
              {/* Header & Case Study Selector Carousel */}
              <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-4 shadow-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-4">
                  <div className="space-y-1">
                    <span className="px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
                      10 Master Case Studies & Judicial Comprehension Arena
                    </span>
                    <h3 className="text-lg md:text-xl font-black text-[var(--text-primary)]">
                      Constitutional Case Formulation Lab (Day {currentDay.dayNumber})
                    </h3>
                  </div>
                  <div className="text-xs text-[var(--text-muted)] font-medium">
                    Case {activeCaseStudyIndex + 1} of {currentDay.comprehensionCaseStudies.length}
                  </div>
                </div>

                {/* 10 Case Navigation Tabs */}
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                  {currentDay.comprehensionCaseStudies.map((cs, csIdx) => {
                    const isSelected = csIdx === activeCaseStudyIndex;
                    const subAnsweredCount = cs.comprehensionMCQs.filter(
                      (sm) => currentDayProgress.caseStudyMcqAnswers?.[sm.id] !== undefined
                    ).length;
                    const isFullyDone = subAnsweredCount === cs.comprehensionMCQs.length;

                    return (
                      <button
                        key={cs.id}
                        onClick={() => setActiveCaseStudyIndex(csIdx)}
                        className={`px-3 py-2.5 rounded-xl text-left border shrink-0 transition-all text-xs flex flex-col gap-1 min-w-[160px] max-w-[210px] ${
                          isSelected
                            ? 'bg-[var(--accent)] text-[var(--accent-contrast)] border-[var(--accent-primary)] shadow-md'
                            : 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)]/50'
                        }`}
                      >
                        <div className="flex items-center justify-between w-full">
                          <span className="font-bold text-[11px] truncate">Case {csIdx + 1}</span>
                          {isFullyDone ? (
                            <CheckCircle2
                              className={`w-3.5 h-3.5 ${
                                isSelected ? 'text-[var(--bg-base)]' : 'text-emerald-400'
                              }`}
                            />
                          ) : (
                            <span
                              className={`text-[10px] px-1.5 py-0.2 rounded ${
                                isSelected
                                  ? 'bg-black/20 text-white'
                                  : 'bg-[var(--bg-card)] text-[var(--text-muted)]'
                              }`}
                            >
                              {subAnsweredCount}/4
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] font-medium truncate opacity-90">
                          {cs.title.replace(/^Case Study \d+:\s*/i, '')}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Case Study Details */}
              {activeComprehensionCaseStudy && (
                <div className="p-6 md:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-6 shadow-md animate-fadeIn">
                  <div className="space-y-3 border-b border-[var(--border-subtle)] pb-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
                        Case Study {activeCaseStudyIndex + 1} of {currentDay.comprehensionCaseStudies.length}
                      </span>
                      {activeComprehensionCaseStudy.statutoryApplicability.map((stat, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-secondary)]"
                        >
                          {stat}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-[var(--text-primary)]">
                      {activeComprehensionCaseStudy.title}
                    </h3>
                  </div>

                  {/* Factual Matrix */}
                  <div className="space-y-2 bg-[var(--bg-base)] p-5 rounded-xl border border-[var(--border-subtle)]">
                    <div className="flex items-center gap-2">
                      <Scale className="w-4 h-4 text-[var(--accent-primary)]" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)]">
                        Factual Matrix (Case Briefing):
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">
                      <AnnotatedLegalText text={activeComprehensionCaseStudy.factualMatrix} />
                    </p>
                  </div>

                  {/* Questions to Address */}
                  <div className="space-y-2 bg-[var(--bg-base)] p-5 rounded-xl border border-[var(--border-subtle)]">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-[var(--bootcamp-accent-text)]" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[var(--bootcamp-accent-text)]">
                        Framing Issues for Prosecution / Adjudication:
                      </span>
                    </div>
                    <ol className="space-y-2 text-xs md:text-sm text-[var(--text-primary)] font-semibold list-decimal pl-4">
                      {activeComprehensionCaseStudy.framingQuestions.map((q, qIdx) => (
                        <li key={qIdx}>{q}</li>
                      ))}
                    </ol>
                  </div>

                  {/* 4 Comprehension Sub-MCQs Drill */}
                  <div className="space-y-4 pt-2">
                    <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2">
                      <div className="flex items-center gap-2">
                        <CheckCheck className="w-4 h-4 text-[var(--success-text)]" />
                        <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
                          Comprehension Verification (4 Sub-MCQs)
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-[var(--text-muted)]">
                        Standard Marking (+1.0 / -0.25)
                      </span>
                    </div>

                    <div className="space-y-4">
                      {activeComprehensionCaseStudy.comprehensionMCQs.map((subQ, sqIdx) => {
                        const userSubAns = currentDayProgress.caseStudyMcqAnswers?.[subQ.id];
                        const isAnswered = userSubAns !== undefined;

                        return (
                          <div
                            key={subQ.id}
                            className="p-5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-3"
                          >
                            <div className="flex items-start gap-3">
                              <span className="w-6 h-6 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center font-bold text-xs shrink-0 text-[var(--text-primary)]">
                                {sqIdx + 1}
                              </span>
                              <h5 className="text-xs md:text-sm font-bold text-[var(--text-primary)] leading-snug">
                                {subQ.question}
                              </h5>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                              {subQ.options.map((opt, oIdx) => {
                                const isChosen = userSubAns === oIdx;
                                const isCorrect = oIdx === subQ.correctIndex;

                                let btnStyle =
                                  'bg-[var(--bg-surface)] border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--accent)]';

                                if (isAnswered) {
                                  if (isCorrect) {
                                    btnStyle = 'bg-[var(--success-bg)] border-[var(--success-border)] text-[var(--success-text)] font-bold shadow-sm';
                                  } else if (isChosen && !isCorrect) {
                                    btnStyle = 'bg-[var(--error-bg)] border-[var(--error-border)] text-[var(--error-text)] font-medium';
                                  } else {
                                    btnStyle = 'bg-[var(--bg-surface)] border-[var(--border-subtle)] opacity-40 text-[var(--text-muted)]';
                                  }
                                }

                                return (
                                  <button
                                    key={oIdx}
                                    onClick={() => handleAnswerCaseStudyMCQ(subQ.id, oIdx)}
                                    className={`p-2.5 rounded-lg border text-left text-xs transition-all flex items-start gap-2 ${btnStyle}`}
                                  >
                                    <span className="font-bold text-xs shrink-0 mt-0.5">
                                      {String.fromCharCode(65 + oIdx)}.
                                    </span>
                                    <span className="leading-snug">{opt}</span>
                                  </button>
                                );
                              })}
                            </div>

                            {isAnswered && (
                              <div className="p-3 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs space-y-1 animate-fadeIn">
                                <div className="flex items-center gap-1.5 font-bold">
                                  {userSubAns === subQ.correctIndex ? (
                                    <span className="text-[var(--success-text)] flex items-center gap-1 font-bold">
                                      <Check className="w-3.5 h-3.5" /> Correct (+1.0)
                                    </span>
                                  ) : (
                                    <span className="text-[var(--error-text)] flex items-center gap-1 font-bold">
                                      <AlertCircle className="w-3.5 h-3.5" /> Incorrect (-0.25) — Correct: Option {String.fromCharCode(65 + subQ.correctIndex)}
                                    </span>
                                  )}
                                </div>
                                <p className="text-[var(--text-secondary)] leading-relaxed text-[11px]">
                                  <AnnotatedLegalText text={subQ.explanation} />
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Student Scratchpad Answer Area */}
                  <div className="space-y-2 pt-2">
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
                      rows={6}
                      className="w-full p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs md:text-sm text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Reveal Model Answer Button & Prev/Next Bar */}
                  <div className="pt-2 flex items-center justify-between flex-wrap gap-3">
                    <button
                      onClick={() =>
                        setShowModelAnswerMap((prev) => ({
                          ...prev,
                          [activeCaseStudyIndex]: !prev[activeCaseStudyIndex]
                        }))
                      }
                      className="px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-[var(--accent)] text-[var(--accent-contrast)] hover:opacity-90 transition-all flex items-center gap-2 shadow-sm"
                    >
                      <Trophy className="w-4 h-4" />
                      {showModelAnswerMap[activeCaseStudyIndex]
                        ? "Hide Examiner's Model Answer"
                        : "Reveal Examiner's Model Answer & Marking Rubric"}
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        disabled={activeCaseStudyIndex === 0}
                        onClick={() => setActiveCaseStudyIndex((i) => Math.max(0, i - 1))}
                        className="px-3 py-2 rounded-xl text-xs font-semibold border border-[var(--border-subtle)] bg-[var(--bg-base)] text-[var(--text-secondary)] disabled:opacity-30 flex items-center gap-1 hover:border-[var(--accent-primary)]"
                      >
                        <ChevronLeft className="w-4 h-4" /> Prev Case
                      </button>
                      <button
                        disabled={activeCaseStudyIndex === currentDay.comprehensionCaseStudies.length - 1}
                        onClick={() =>
                          setActiveCaseStudyIndex((i) =>
                            Math.min(currentDay.comprehensionCaseStudies!.length - 1, i + 1)
                          )
                        }
                        className="px-3 py-2 rounded-xl text-xs font-semibold border border-[var(--border-subtle)] bg-[var(--bg-base)] text-[var(--text-secondary)] disabled:opacity-30 flex items-center gap-1 hover:border-[var(--accent-primary)]"
                      >
                        Next Case <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Collapsible Model Answer & Marking Rubric */}
                  {showModelAnswerMap[activeCaseStudyIndex] && (
                    <div className="space-y-6 pt-4 border-t border-[var(--border-subtle)] animate-fadeIn">
                      <div className="space-y-3 bg-[var(--bg-base)] p-5 rounded-xl border border-[var(--success-border)]/40">
                        <span className="text-xs font-bold uppercase tracking-wider text-[var(--success-text)] font-bold">
                          Official Examiner's Model Solution:
                        </span>
                        <div className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                          <AnnotatedLegalText text={activeComprehensionCaseStudy.modelAnswer} />
                        </div>
                      </div>

                      {/* Marking Rubric Breakdown */}
                      <div className="space-y-3 bg-[var(--bg-base)] p-5 rounded-xl border border-[var(--border-subtle)]">
                        <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)]">
                          Official Marking Rubric (Max: 10 Marks):
                        </span>
                        <div className="space-y-2">
                          {activeComprehensionCaseStudy.markingRubric.map((item, rIdx) => (
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
              )}
            </div>
          ) : (
            /* Fallback single case study for Days 2 to 15 */
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
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--bootcamp-accent-text)]">
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
                  className="px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-[var(--accent)] text-[var(--accent-contrast)] hover:opacity-90 transition-all flex items-center gap-2 shadow-sm"
                >
                  <Trophy className="w-4 h-4" />
                  {showModelAnswer ? "Hide Examiner's Model Answer" : "Reveal Examiner's Model Answer & Marking Rubric"}
                </button>
              </div>

              {/* Collapsible Model Answer & Marking Rubric */}
              {showModelAnswer && (
                <div className="space-y-6 pt-4 border-t border-[var(--border-subtle)] animate-fadeIn">
                  <div className="space-y-3 bg-[var(--bg-base)] p-5 rounded-xl border border-[var(--success-border)]/40">
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--success-text)] font-bold">
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
          )}
        </div>
      )}
    </div>
  );
};
