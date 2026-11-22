import React, { useState, useMemo, useEffect } from 'react';
import {
  FileText,
  Search,
  Award,
  Calendar,
  BookOpen,
  Scale,
  Sparkles,
  ChevronRight,
  ChevronDown,
  RotateCcw,
  CheckCircle2,
  Clock,
  Layers,
  Flame,
  ArrowRight,
  HelpCircle,
  Trophy,
  Filter,
  Check,
  AlertCircle,
  BarChart3,
  TrendingUp,
  Globe,
  Compass,
  Play,
  Pause,
  Timer,
  AlertTriangle,
  Info,
  Target,
  XCircle,
  ExternalLink,
  Zap,
  BookMarked
} from 'lucide-react';
import { JKPSC_MAINS_PYQ_DATA, type PyqQuestion } from '../../data/pyqData';
import {
  ALL_INDIA_TOPIC_FREQUENCIES,
  COMMON_JUDICIARY_QUESTIONS,
  type AllIndiaTopicFrequency,
  type CommonJudiciaryQuestion
} from '../../data/allIndiaJudicialTopics';
import {
  EXAM_PROFILES,
  TEN_YEAR_PILLAR_HEATMAP,
  AUTHENTIC_EXAM_PYQS,
  type TargetExamId,
  type ExamProfile,
  type PillarTrend,
  type AuthenticPyqQuestion
} from '../../data/examTrendsData';
import { AnnotatedLegalText } from '../Common/AnnotatedLegalText';
import { QuestionIntelHoverCard } from '../Common/QuestionIntelHoverCard';
import { AnswerEvaluationCard } from '../Common/AnswerEvaluationCard';
import { evaluateMainsDraft } from '../../services/answerEvaluatorService';
import type { AnswerEvaluationResult } from '../../types/mainsQuestionTypes';
import { useTheme } from '../../context/ThemeContext';

export const PyqVaultView: React.FC = () => {
  const { setActiveTab } = useTheme();

  // Primary Scope Toggle: 'trends' | 'allIndia' | 'jkpsc'
  const [examScope, setExamScope] = useState<'trends' | 'allIndia' | 'jkpsc'>('trends');

  // =========================================================================
  // 10-YEAR EXAM TRENDS & TARGET DRILL STATE
  // =========================================================================
  const [selectedTargetExam, setSelectedTargetExam] = useState<TargetExamId>('upsc');
  const [selectedPillarFilter, setSelectedPillarFilter] = useState<string>('all');
  const [selectedQuestionType, setSelectedQuestionType] = useState<'all' | 'PRELIMS_MCQ' | 'MAINS_DESCRIPTIVE'>('all');
  const [examPyqSearch, setExamPyqSearch] = useState<string>('');

  // Prelims MCQ Drill State
  const [mcqUserSelections, setMcqUserSelections] = useState<Record<string, string>>({});
  const [mcqSubmitted, setMcqSubmitted] = useState<Record<string, boolean>>({});

  // Mains Model Answers Revealed State
  const [mainsRevealed, setMainsRevealed] = useState<Record<string, boolean>>({});

  // =========================================================================
  // JKPSC SECTION STATE
  // =========================================================================
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedYearFilter, setSelectedYearFilter] = useState<string>('all');
  const [selectedTopicFilter, setSelectedTopicFilter] = useState<string>('all');
  const [selectedQuestionId, setSelectedQuestionId] = useState<string>(JKPSC_MAINS_PYQ_DATA[0].id);
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});

  // Practice Drafts for JKPSC
  const [userDrafts, setUserDrafts] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('samvidhan_jkpsc_pyq_drafts');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('samvidhan_jkpsc_pyq_drafts', JSON.stringify(userDrafts));
    } catch (e) {
      console.error('Failed to save PYQ drafts:', e);
    }
  }, [userDrafts]);

  // Timer State for drafting practice
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning]);

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const filteredQuestions = useMemo(() => {
    return JKPSC_MAINS_PYQ_DATA.filter((q) => {
      if (selectedYearFilter !== 'all' && q.year !== selectedYearFilter) return false;
      if (selectedTopicFilter !== 'all' && q.topic !== selectedTopicFilter) return false;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        return (
          q.title.toLowerCase().includes(query) ||
          q.questionText.toLowerCase().includes(query) ||
          q.relevantArticles.some((art) => art.toLowerCase().includes(query)) ||
          q.coreIssues.some((issue) => issue.toLowerCase().includes(query)) ||
          q.landmarkPrecedents.classic.toLowerCase().includes(query) ||
          q.landmarkPrecedents.modern2024.toLowerCase().includes(query)
        );
      }
      return true;
    });
  }, [searchQuery, selectedYearFilter, selectedTopicFilter]);

  const currentQuestion: PyqQuestion = useMemo(() => {
    return (
      JKPSC_MAINS_PYQ_DATA.find((q) => q.id === selectedQuestionId) ||
      JKPSC_MAINS_PYQ_DATA[0]
    );
  }, [selectedQuestionId]);

  const handleDraftChange = (text: string) => {
    setUserDrafts((prev) => ({
      ...prev,
      [currentQuestion.id]: text
    }));
  };

  const toggleSolution = (id: string) => {
    setRevealedSolutions((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const [evaluationResults, setEvaluationResults] = useState<Record<string, AnswerEvaluationResult>>({});
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);

  const handleEvaluateDraft = (questionId: string, questionObj: any, draft: string) => {
    setIsEvaluating(true);
    setTimeout(() => {
      const result = evaluateMainsDraft(draft, questionObj);
      setEvaluationResults((prev) => ({
        ...prev,
        [questionId]: result
      }));
      setIsEvaluating(false);
    }, 350);
  };

  const handleDismissEvaluation = (questionId: string) => {
    setEvaluationResults((prev) => {
      const copy = { ...prev };
      delete copy[questionId];
      return copy;
    });
  };

  const wordCount = (userDrafts[currentQuestion.id] || '').split(/\s+/).filter(Boolean).length;

  // =========================================================================
  // ALL-INDIA JUDICIAL SECTION STATE
  // =========================================================================
  const [selectedTopicId, setSelectedTopicId] = useState<string>(ALL_INDIA_TOPIC_FREQUENCIES[0].id);
  const [selectedCommonQId, setSelectedCommonQId] = useState<string>(COMMON_JUDICIARY_QUESTIONS[0].id);
  const [selectedMarksFilter, setSelectedMarksFilter] = useState<string>('all');
  const [selectedExamFilter, setSelectedExamFilter] = useState<string>('all');
  const [allIndiaSearchQuery, setAllIndiaSearchQuery] = useState<string>('');

  const [allIndiaDrafts, setAllIndiaDrafts] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('samvidhan_all_india_drafts');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('samvidhan_all_india_drafts', JSON.stringify(allIndiaDrafts));
    } catch (e) {
      console.error('Failed to save All-India drafts:', e);
    }
  }, [allIndiaDrafts]);

  const activeTopic = useMemo(() => {
    return (
      ALL_INDIA_TOPIC_FREQUENCIES.find((t) => t.id === selectedTopicId) ||
      ALL_INDIA_TOPIC_FREQUENCIES[0]
    );
  }, [selectedTopicId]);

  // Filtered list of master questions
  const filteredCommonQuestions = useMemo(() => {
    return COMMON_JUDICIARY_QUESTIONS.filter((q) => {
      // Filter by Marks
      if (selectedMarksFilter !== 'all') {
        if (selectedMarksFilter === '20+') {
          if (q.marksCategory < 20) return false;
        } else {
          const marksNum = parseInt(selectedMarksFilter, 10);
          if (q.marksCategory !== marksNum) return false;
        }
      }
      // Filter by Exam
      if (selectedExamFilter !== 'all') {
        if (selectedExamFilter === 'PROSECUTION') {
          const isPros = q.examCategory === 'PROSECUTION' || q.examsAppeared.some(e => /prosecution|apo|app/i.test(e));
          if (!isPros) return false;
        } else if (selectedExamFilter === 'DJS') {
          const isDjs = q.examCategory === 'DJS' || q.examsAppeared.some(e => /djs|delhi/i.test(e));
          if (!isDjs) return false;
        } else if (selectedExamFilter === 'UP_PCSJ') {
          const isUp = q.examCategory === 'UP_PCSJ' || q.examsAppeared.some(e => /up pcs-j|up/i.test(e));
          if (!isUp) return false;
        } else if (selectedExamFilter === 'BJS') {
          const isBjs = q.examCategory === 'BJS' || q.examsAppeared.some(e => /bihar|bjs/i.test(e));
          if (!isBjs) return false;
        } else if (selectedExamFilter === 'UPSC_LAW') {
          const isUpsc = q.examCategory === 'UPSC_LAW' || q.examsAppeared.some(e => /upsc/i.test(e));
          if (!isUpsc) return false;
        }
      }
      // Filter by Search Query
      if (allIndiaSearchQuery.trim()) {
        const query = allIndiaSearchQuery.toLowerCase();
        const matchesTitle = q.title.toLowerCase().includes(query);
        const matchesText = q.questionText.toLowerCase().includes(query);
        const matchesTopic = q.hoverIntel?.topicName.toLowerCase().includes(query) || false;
        const matchesCases = q.essentialCitations.some((c) => c.toLowerCase().includes(query));
        if (!matchesTitle && !matchesText && !matchesTopic && !matchesCases) return false;
      }
      return true;
    });
  }, [selectedMarksFilter, selectedExamFilter, allIndiaSearchQuery]);

  const activeCommonQ = useMemo(() => {
    return (
      filteredCommonQuestions.find((q) => q.id === selectedCommonQId) ||
      filteredCommonQuestions[0] ||
      COMMON_JUDICIARY_QUESTIONS[0]
    );
  }, [filteredCommonQuestions, selectedCommonQId]);

  // Marks-calibrated timer state
  const [allIndiaTimerSeconds, setAllIndiaTimerSeconds] = useState<number>(() => {
    return (activeCommonQ.targetTimeMinutes || 10) * 60;
  });
  const [isAllIndiaTimerRunning, setIsAllIndiaTimerRunning] = useState<boolean>(false);

  // Sync timer when active question changes
  useEffect(() => {
    setAllIndiaTimerSeconds((activeCommonQ.targetTimeMinutes || 10) * 60);
    setIsAllIndiaTimerRunning(false);
  }, [activeCommonQ.id]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isAllIndiaTimerRunning) {
      interval = setInterval(() => {
        setAllIndiaTimerSeconds((prev) => {
          if (prev <= 1) {
            setIsAllIndiaTimerRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAllIndiaTimerRunning]);

  const handleAllIndiaDraftChange = (text: string) => {
    setAllIndiaDrafts((prev) => ({
      ...prev,
      [activeCommonQ.id]: text
    }));
  };

  const allIndiaWordCount = (allIndiaDrafts[activeCommonQ.id] || '').split(/\s+/).filter(Boolean).length;

  // =========================================================================
  // DERIVED STATE FOR 10-YEAR EXAM TRENDS & TARGET DRILL
  // =========================================================================
  const currentExamProfile = useMemo(() => {
    return EXAM_PROFILES.find((p) => p.id === selectedTargetExam) || EXAM_PROFILES[0];
  }, [selectedTargetExam]);

  const currentPillars = useMemo(() => {
    return TEN_YEAR_PILLAR_HEATMAP[selectedTargetExam] || [];
  }, [selectedTargetExam]);

  const filteredExamPyqs = useMemo(() => {
    return AUTHENTIC_EXAM_PYQS.filter((q) => {
      if (q.examId !== selectedTargetExam) return false;
      if (selectedQuestionType !== 'all' && q.questionType !== selectedQuestionType) return false;
      if (selectedPillarFilter !== 'all') {
        const pillar = currentPillars.find((p) => p.pillarId === selectedPillarFilter);
        if (pillar) {
          const titleLower = q.title.toLowerCase();
          const textLower = q.questionText.toLowerCase();
          const caseLower = q.benchmarkCase.toLowerCase();
          const matchesSubtopic = pillar.topRecurringSubtopics.some((sub) => {
            const words = sub.toLowerCase().split(/\s+/).filter((w) => w.length > 4);
            return words.some((w) => titleLower.includes(w) || textLower.includes(w) || caseLower.includes(w));
          });
          const matchesArticle = q.coreArticles.some((a) =>
            pillar.articleRange.includes(a.replace('Article ', 'Art. ').replace('Article ', ''))
          );
          if (!matchesSubtopic && !matchesArticle) return false;
        }
      }
      if (examPyqSearch.trim()) {
        const query = examPyqSearch.toLowerCase();
        const matchesTitle = q.title.toLowerCase().includes(query);
        const matchesText = q.questionText.toLowerCase().includes(query);
        const matchesCase = q.benchmarkCase.toLowerCase().includes(query);
        const matchesArticles = q.coreArticles.some((a) => a.toLowerCase().includes(query));
        if (!matchesTitle && !matchesText && !matchesCase && !matchesArticles) return false;
      }
      return true;
    });
  }, [selectedTargetExam, selectedQuestionType, selectedPillarFilter, examPyqSearch, currentPillars]);

  // Prelims MCQ Drill Score Stats
  const mcqStats = useMemo(() => {
    const examMcqs = AUTHENTIC_EXAM_PYQS.filter(
      (q) => q.examId === selectedTargetExam && q.questionType === 'PRELIMS_MCQ'
    );
    let attempted = 0;
    let correct = 0;
    let incorrect = 0;
    examMcqs.forEach((q) => {
      if (mcqSubmitted[q.id]) {
        attempted++;
        if (mcqUserSelections[q.id] === q.correctOption) {
          correct++;
        } else {
          incorrect++;
        }
      }
    });
    const netScore = correct * 2 - incorrect * 0.66;
    const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
    return {
      totalMcqs: examMcqs.length,
      attempted,
      correct,
      incorrect,
      netScore: Math.round(netScore * 100) / 100,
      accuracy
    };
  }, [selectedTargetExam, mcqSubmitted, mcqUserSelections]);

  const handleSelectOption = (qId: string, optionKey: string) => {
    if (mcqSubmitted[qId]) return;
    setMcqUserSelections((prev) => ({
      ...prev,
      [qId]: optionKey
    }));
  };

  const handleSubmitOption = (qId: string) => {
    if (!mcqUserSelections[qId]) return;
    setMcqSubmitted((prev) => ({
      ...prev,
      [qId]: true
    }));
  };

  const handleResetExamDrill = () => {
    setMcqUserSelections({});
    setMcqSubmitted({});
  };

  const toggleMainsReveal = (qId: string) => {
    setMainsRevealed((prev) => ({
      ...prev,
      [qId]: !prev[qId]
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
      {/* =========================================================================
          HERO BANNER & PRIMARY SCOPE SWITCHER
      ========================================================================= */}
      <div className="p-6 md:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent-primary)]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
              <Scale className="w-3.5 h-3.5" />
              10-Year Empirical Audit & PYQ Target Drill
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Exam Trends & PYQ Vault (2014–2024)
            </h1>
            <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-2xl leading-relaxed">
              Empirical 10-year recurrence analysis and authentic past-year questions across{' '}
              <strong className="text-[var(--text-primary)]">
                UPSC CSE, Delhi (DJS), UP PCS-J, Bihar (BJS), Rajasthan (RJS), Madhya Pradesh (MPCJ), and CLAT PG
              </strong>. 
              Pillar heatmaps, trend velocities, examiner traps, and real-time drill scoring.
            </p>
          </div>

          {/* Quick Action Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-center min-w-[100px]">
              <span className="text-[10px] uppercase font-bold text-[var(--text-muted)] block">Exams Analyzed</span>
              <span className="text-base font-black text-[var(--accent-primary)]">7 National & State Papers</span>
            </div>
            <button
              onClick={() => setActiveTab('mains-lab')}
              className="px-4 py-3 rounded-xl text-xs font-bold bg-[var(--accent-primary)] text-[var(--bg-base)] hover:opacity-90 transition-all flex items-center gap-1.5 shadow-sm"
            >
              <BookOpen className="w-4 h-4" />
              <span>125-Q Mains Lab</span>
            </button>
          </div>
        </div>

        {/* Primary Mode Tabs */}
        <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-3">
          <button
            onClick={() => setExamScope('trends')}
            className={`px-5 py-3 rounded-xl text-xs md:text-sm font-bold flex items-center gap-2.5 transition-all shadow-sm ${
              examScope === 'trends'
                ? 'bg-[var(--accent-primary)] text-[var(--bg-base)] ring-2 ring-[var(--accent-primary)]/20'
                : 'bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>10-Year Exam Trends & Target PYQs</span>
            <span
              className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                examScope === 'trends'
                  ? 'bg-black/20 text-[var(--bg-base)]'
                  : 'bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]'
              }`}
            >
              Featured
            </span>
          </button>

          <button
            onClick={() => setExamScope('allIndia')}
            className={`px-5 py-3 rounded-xl text-xs md:text-sm font-bold flex items-center gap-2.5 transition-all shadow-sm ${
              examScope === 'allIndia'
                ? 'bg-[var(--accent-primary)] text-[var(--bg-base)] ring-2 ring-[var(--accent-primary)]/20'
                : 'bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>All-India Topic Frequency & Master Blueprints</span>
            <span
              className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                examScope === 'allIndia'
                  ? 'bg-black/20 text-[var(--bg-base)]'
                  : 'bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]'
              }`}
            >
              Doctrinal
            </span>
          </button>

          <button
            onClick={() => setExamScope('jkpsc')}
            className={`px-5 py-3 rounded-xl text-xs md:text-sm font-bold flex items-center gap-2.5 transition-all shadow-sm ${
              examScope === 'jkpsc'
                ? 'bg-[var(--accent-primary)] text-[var(--bg-base)] ring-2 ring-[var(--accent-primary)]/20'
                : 'bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>J&K Mains PYQs (24 Official Questions)</span>
            <span
              className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                examScope === 'jkpsc' ? 'bg-black/20 text-[var(--bg-base)]' : 'bg-emerald-500/10 text-emerald-400'
              }`}
            >
              2014–2023
            </span>
          </button>
        </div>
      </div>

      {/* =========================================================================
          VIEW 0: 10-YEAR EXAM TRENDS & TARGET DRILL (UPSC, DJS, UP PCS-J, CLAT PG)
      ========================================================================= */}
      {examScope === 'trends' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Target Exam Switcher Pills */}
          <div className="p-2 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex flex-wrap gap-2 shadow-sm">
            {EXAM_PROFILES.map((profile) => (
              <button
                key={profile.id}
                onClick={() => {
                  setSelectedTargetExam(profile.id);
                  setSelectedPillarFilter('all');
                  handleResetExamDrill();
                }}
                className={`flex-1 min-w-[200px] p-3.5 rounded-xl text-left transition-all relative ${
                  selectedTargetExam === profile.id
                    ? 'bg-[var(--accent-primary)] text-[var(--bg-base)] shadow-md ring-2 ring-[var(--accent-primary)]/30'
                    : 'bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md ${
                      selectedTargetExam === profile.id
                        ? 'bg-black/20 text-[var(--bg-base)]'
                        : 'bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]'
                    }`}
                  >
                    {profile.badge}
                  </span>
                  <span className="text-[11px] font-mono font-bold opacity-80">
                    {profile.totalQuestionsAnalyzed} Qs
                  </span>
                </div>
                <div className="text-sm font-extrabold truncate">{profile.shortName}</div>
                <div className="text-[11px] opacity-80 truncate">{profile.name}</div>
              </button>
            ))}
          </div>

          {/* Exam Profile Deep-Dive Card */}
          <div className="p-6 md:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-md space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-5">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-black uppercase tracking-wider text-[var(--accent-primary)] flex items-center gap-1.5">
                    <Target className="w-4 h-4" />
                    Target Exam Intelligence Profile
                  </span>
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    2014–2024 Audit Complete
                  </span>
                </div>
                <h2 className="text-2xl font-black text-[var(--text-primary)]">
                  {currentExamProfile.name}
                </h2>
                <p className="text-xs md:text-sm text-[var(--text-secondary)] mt-1 max-w-3xl">
                  {currentExamProfile.subtitle}
                </p>
              </div>

              {/* Stat Chips */}
              <div className="flex flex-wrap gap-2.5 shrink-0">
                <div className="px-3.5 py-2 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-center">
                  <span className="text-[10px] font-bold uppercase text-[var(--text-muted)] block">Analyzed</span>
                  <span className="text-sm font-extrabold text-[var(--accent-primary)]">
                    {currentExamProfile.totalQuestionsAnalyzed} Past Qs
                  </span>
                </div>
                <div className="px-3.5 py-2 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-center">
                  <span className="text-[10px] font-bold uppercase text-[var(--text-muted)] block">Safe Target</span>
                  <span className="text-sm font-extrabold text-amber-400">
                    {currentExamProfile.averageCutoff.split(':')[1]?.trim() || currentExamProfile.averageCutoff}
                  </span>
                </div>
              </div>
            </div>

            {/* Pattern Intel & Top Scoring Pillars */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)] flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  Exam Pattern & Question Architecture
                </span>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {currentExamProfile.examPatternIntel}
                </p>
                <div className="pt-2">
                  <span className="text-[10px] font-bold uppercase text-[var(--text-muted)] block mb-1.5">
                    Highest Yield Recurring Pillars:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentExamProfile.topScoringPillars.map((pillar, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20"
                      >
                        {pillar}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-amber-500/20 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  Examiner Style Guidance & Trap Prevention
                </span>
                <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                  {currentExamProfile.examinerStyleNotes.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-amber-400 mt-0.5 font-bold">•</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* =====================================================================
              10-YEAR TOPIC RECURRENCE HEATMAP (2014–2024)
          ===================================================================== */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-lg md:text-xl font-black text-[var(--text-primary)] flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-[var(--accent-primary)]" />
                  10-Year Topic Recurrence Heatmap (2014–2024)
                </h3>
                <p className="text-xs text-[var(--text-secondary)]">
                  Empirical weightage across Constitutional Pillars in {currentExamProfile.shortName}. Click any pillar to isolate past questions.
                </p>
              </div>

              {/* Pillar Filter Indicator */}
              <div className="flex items-center gap-2">
                {selectedPillarFilter !== 'all' && (
                  <button
                    onClick={() => setSelectedPillarFilter('all')}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20 hover:bg-rose-500/20 transition-all flex items-center gap-1"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Reset Pillar Filter
                  </button>
                )}
                <span className="text-xs text-[var(--text-muted)] font-mono">
                  {currentPillars.length} Constitutional Pillars
                </span>
              </div>
            </div>

            {/* Pillar Heatmap Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentPillars.map((pillar) => {
                const isSelected = selectedPillarFilter === pillar.pillarId;
                const velocityStyle =
                  pillar.trendVelocity === 'RISING'
                    ? {
                        bg: 'bg-emerald-500/10',
                        text: 'text-emerald-400',
                        border: 'border-emerald-500/20',
                        label: '🔥 High Velocity / Rising'
                      }
                    : pillar.trendVelocity === 'STABLE_CORE'
                    ? {
                        bg: 'bg-sky-500/10',
                        text: 'text-sky-400',
                        border: 'border-sky-500/20',
                        label: '⚖️ Core Recurring Stable'
                      }
                    : {
                        bg: 'bg-amber-500/10',
                        text: 'text-amber-400',
                        border: 'border-amber-500/20',
                        label: '⚡ Volatile Cycle'
                      };

                return (
                  <div
                    key={pillar.pillarId}
                    className={`p-5 rounded-2xl transition-all border flex flex-col justify-between space-y-4 cursor-pointer ${
                      isSelected
                        ? 'bg-[var(--accent-primary)]/10 border-[var(--accent-primary)] shadow-lg ring-1 ring-[var(--accent-primary)]'
                        : 'bg-[var(--bg-card)] border-[var(--border-subtle)] hover:border-[var(--accent-primary)]/40 hover:shadow-md'
                    }`}
                    onClick={() => {
                      setSelectedPillarFilter(isSelected ? 'all' : pillar.pillarId);
                    }}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${velocityStyle.bg} ${velocityStyle.text} ${velocityStyle.border}`}
                        >
                          {velocityStyle.label}
                        </span>
                        <span className="text-xs font-mono font-bold text-[var(--accent-primary)]">
                          {pillar.tenYearCount} Qs ({pillar.sharePercentage}%)
                        </span>
                      </div>

                      <h4 className="text-sm font-extrabold text-[var(--text-primary)] leading-snug">
                        {pillar.pillarName}
                      </h4>
                      <p className="text-[11px] font-mono text-[var(--text-muted)]">
                        {pillar.articleRange}
                      </p>

                      {/* Percentage Bar */}
                      <div className="w-full bg-[var(--bg-base)] rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-[var(--accent-primary)] h-full rounded-full transition-all duration-500"
                          style={{ width: `${Math.min(pillar.sharePercentage * 2.5, 100)}%` }}
                        />
                      </div>

                      {/* 10-Year Distribution Strip */}
                      <div className="pt-2">
                        <span className="text-[10px] uppercase font-bold text-[var(--text-muted)] block mb-1">
                          2014–2024 Recurrence Trend:
                        </span>
                        <div className="grid grid-cols-11 gap-1 text-center">
                          {Object.entries(pillar.yearlyBreakdown).map(([yr, cnt]) => (
                            <div
                              key={yr}
                              title={`${yr}: ${cnt} questions`}
                              className={`p-1 rounded text-[9px] font-mono font-bold transition-all ${
                                cnt > 3
                                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                                  : cnt > 1
                                  ? 'bg-[var(--accent-primary)]/15 text-[var(--accent-primary)]'
                                  : 'bg-[var(--bg-base)] text-[var(--text-muted)]'
                              }`}
                            >
                              <div className="opacity-60 text-[8px]">{yr.slice(2)}</div>
                              <div>{cnt}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Subtopics */}
                      <div className="pt-2 space-y-1">
                        <span className="text-[10px] font-bold uppercase text-[var(--text-muted)] block">
                          Top Examiner Hotspots:
                        </span>
                        <ul className="space-y-1 text-[11px] text-[var(--text-secondary)]">
                          {pillar.topRecurringSubtopics.slice(0, 3).map((sub, sIdx) => (
                            <li key={sIdx} className="flex items-start gap-1 leading-tight">
                              <span className="text-[var(--accent-primary)]">•</span>
                              <span>{sub}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Examiner Trap Alert */}
                    <div className="p-2.5 rounded-xl bg-[var(--bg-base)] border border-amber-500/20 text-[11px] text-amber-300 flex items-start gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0 text-amber-400 mt-0.5" />
                      <span className="line-clamp-2">{pillar.examinerTrapWarning}</span>
                    </div>

                    {/* Filter Button */}
                    <button
                      type="button"
                      className={`w-full py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                        isSelected
                          ? 'bg-[var(--accent-primary)] text-[var(--bg-base)]'
                          : 'bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                      }`}
                    >
                      <Filter className="w-3.5 h-3.5" />
                      <span>{isSelected ? 'Active Filter (Click to Clear)' : 'Filter Questions for this Pillar'}</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* =====================================================================
              AUTHENTIC PAST-YEAR QUESTIONS ARCHIVE & INTERACTIVE DRILL
          ===================================================================== */}
          <div className="space-y-5 pt-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-4">
              <div>
                <h3 className="text-xl font-black text-[var(--text-primary)] flex items-center gap-2">
                  <BookMarked className="w-5 h-5 text-[var(--accent-primary)]" />
                  Authentic Past-Year Questions Archive ({filteredExamPyqs.length})
                </h3>
                <p className="text-xs text-[var(--text-secondary)]">
                  Practice authentic {currentExamProfile.shortName} past questions with official answer blueprints, scoring tips, and live MCQ marking (+2 / -0.66).
                </p>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap items-center gap-2">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
                  <input
                    type="text"
                    value={examPyqSearch}
                    onChange={(e) => setExamPyqSearch(e.target.value)}
                    placeholder="Search PYQs, articles, cases..."
                    className="pl-9 pr-3 py-2 rounded-xl text-xs bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] w-48 sm:w-60"
                  />
                </div>

                {/* Question Type Filter */}
                <div className="flex items-center gap-1 p-1 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
                  {(['all', 'PRELIMS_MCQ', 'MAINS_DESCRIPTIVE'] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedQuestionType(type)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        selectedQuestionType === type
                          ? 'bg-[var(--accent-primary)] text-[var(--bg-base)]'
                          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      {type === 'all' ? 'All Questions' : type === 'PRELIMS_MCQ' ? 'Prelims MCQ' : 'Mains Descriptive'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Live MCQ Scorecard (if any MCQ exists or attempted) */}
            {mcqStats.totalMcqs > 0 && (
              <div className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black uppercase text-[var(--accent-primary)] flex items-center gap-1.5">
                      <Trophy className="w-4 h-4" />
                      Prelims Drill Scorecard:
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-secondary)]">
                      Attempted: <strong className="text-[var(--text-primary)]">{mcqStats.attempted}/{mcqStats.totalMcqs}</strong>
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      Correct: <strong>+{mcqStats.correct}</strong>
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400">
                      Wrong: <strong>-{mcqStats.incorrect}</strong>
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20 text-[var(--accent-primary)] font-bold">
                      Net Score: {mcqStats.netScore > 0 ? `+${mcqStats.netScore}` : mcqStats.netScore}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)]">
                      Accuracy: <strong>{mcqStats.accuracy}%</strong>
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleResetExamDrill}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-base)] transition-all flex items-center gap-1"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Reset Drill
                  </button>
                </div>
              </div>
            )}

            {/* Questions List */}
            {filteredExamPyqs.length === 0 ? (
              <div className="p-12 text-center rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-3">
                <AlertCircle className="w-10 h-10 text-[var(--text-muted)] mx-auto" />
                <h4 className="text-base font-bold text-[var(--text-primary)]">No Questions Found</h4>
                <p className="text-xs text-[var(--text-secondary)] max-w-sm mx-auto">
                  Try clearing your search query or switching the Pillar and Question Type filters above.
                </p>
                <button
                  onClick={() => {
                    setExamPyqSearch('');
                    setSelectedQuestionType('all');
                    setSelectedPillarFilter('all');
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-[var(--accent-primary)] text-[var(--bg-base)]"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredExamPyqs.map((q, qIndex) => {
                  const isMcq = q.questionType === 'PRELIMS_MCQ';
                  const userChoice = mcqUserSelections[q.id];
                  const isSubmitted = mcqSubmitted[q.id];
                  const isCorrect = isSubmitted && userChoice === q.correctOption;
                  const isMainsRevealed = mainsRevealed[q.id];

                  return (
                    <div
                      key={q.id}
                      className="p-6 md:p-7 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-5 shadow-sm hover:shadow-md transition-all"
                    >
                      {/* Header Row */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
                            {q.paperName}
                          </span>
                          <span
                            className={`px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider ${
                              isMcq
                                ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20'
                                : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            }`}
                          >
                            {isMcq ? 'Prelims MCQ (+2 / -0.66)' : `Mains Descriptive (${q.marks} Marks)`}
                          </span>
                          <span className="text-xs font-mono text-[var(--text-muted)]">
                            Year {q.year}
                          </span>
                        </div>

                        {/* Benchmark Case Badge */}
                        <div className="flex items-center gap-1.5 text-xs text-[var(--accent-primary)] font-semibold">
                          <Scale className="w-3.5 h-3.5" />
                          <span className="truncate max-w-xs">{q.benchmarkCase}</span>
                        </div>
                      </div>

                      {/* Title & Question Text */}
                      <div className="space-y-2">
                        <h4 className="text-base font-extrabold text-[var(--text-primary)]">
                          {qIndex + 1}. {q.title}
                        </h4>
                        <div className="text-xs md:text-sm text-[var(--text-secondary)] whitespace-pre-line leading-relaxed font-normal bg-[var(--bg-base)] p-4 rounded-xl border border-[var(--border-subtle)]">
                          {q.questionText}
                        </div>
                      </div>

                      {/* Core Articles Tags */}
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-[10px] font-bold uppercase text-[var(--text-muted)]">Core Articles:</span>
                        {q.coreArticles.map((art, aIdx) => (
                          <span
                            key={aIdx}
                            className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-secondary)]"
                          >
                            {art}
                          </span>
                        ))}
                      </div>

                      {/* PRELIMS MCQ INTERACTIVE SOLVER */}
                      {isMcq && q.options && (
                        <div className="space-y-4 pt-2">
                          <div className="grid grid-cols-1 gap-2.5">
                            {q.options.map((opt) => {
                              const isThisSelected = userChoice === opt.key;
                              const isThisCorrect = isSubmitted && opt.key === q.correctOption;
                              const isThisWrongSelected = isSubmitted && isThisSelected && !isThisCorrect;

                              return (
                                <button
                                  key={opt.key}
                                  type="button"
                                  onClick={() => handleSelectOption(q.id, opt.key)}
                                  disabled={isSubmitted}
                                  className={`p-3.5 rounded-xl text-left text-xs md:text-sm transition-all flex items-start gap-3 border ${
                                    isThisCorrect
                                      ? 'bg-emerald-500/15 border-emerald-500 text-emerald-300 font-semibold shadow-sm'
                                      : isThisWrongSelected
                                      ? 'bg-rose-500/15 border-rose-500 text-rose-300 font-semibold shadow-sm'
                                      : isThisSelected
                                      ? 'bg-[var(--accent-primary)]/15 border-[var(--accent-primary)] text-[var(--text-primary)] font-semibold'
                                      : 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-base)]'
                                  }`}
                                >
                                  <span
                                    className={`w-6 h-6 rounded-lg text-xs font-mono font-bold shrink-0 flex items-center justify-center transition-all ${
                                      isThisCorrect
                                        ? 'bg-emerald-500 text-black'
                                        : isThisWrongSelected
                                        ? 'bg-rose-500 text-white'
                                        : isThisSelected
                                        ? 'bg-[var(--accent-primary)] text-[var(--bg-base)]'
                                        : 'bg-[var(--bg-card)] text-[var(--text-muted)] border border-[var(--border-subtle)]'
                                    }`}
                                  >
                                    {opt.key}
                                  </span>
                                  <span className="flex-1 pt-0.5 leading-snug">{opt.text}</span>
                                  {isThisCorrect && (
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                  )}
                                  {isThisWrongSelected && (
                                    <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                                  )}
                                </button>
                              );
                            })}
                          </div>

                          {/* Action Button for MCQ */}
                          <div className="flex items-center gap-3 pt-1">
                            {!isSubmitted ? (
                              <button
                                type="button"
                                onClick={() => handleSubmitOption(q.id)}
                                disabled={!userChoice}
                                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                                  userChoice
                                    ? 'bg-[var(--accent-primary)] text-[var(--bg-base)] hover:opacity-90 shadow-sm cursor-pointer'
                                    : 'bg-[var(--bg-base)] text-[var(--text-muted)] border border-[var(--border-subtle)] cursor-not-allowed opacity-50'
                                }`}
                              >
                                <Check className="w-4 h-4" />
                                <span>Check Official Answer (+2 / -0.66)</span>
                              </button>
                            ) : (
                              <div className="flex items-center gap-2">
                                <span
                                  className={`px-3 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-1.5 ${
                                    isCorrect
                                      ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                                      : 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                                  }`}
                                >
                                  {isCorrect ? (
                                    <>
                                      <CheckCircle2 className="w-4 h-4" />
                                      <span>Correct! +2.00 Marks Awarded</span>
                                    </>
                                  ) : (
                                    <>
                                      <XCircle className="w-4 h-4" />
                                      <span>Incorrect (-0.66 Marks Negative Penalty)</span>
                                    </>
                                  )}
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Reveal Detailed Explanation for MCQ */}
                          {isSubmitted && (
                            <div className="p-5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-3 animate-fadeIn">
                              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2.5">
                                <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)] flex items-center gap-1.5">
                                  <Sparkles className="w-4 h-4" />
                                  Official Explanation & Judicial Authority
                                </span>
                                <span className="text-xs font-mono font-bold text-emerald-400">
                                  Correct Option: {q.correctOption}
                                </span>
                              </div>
                              <p className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">
                                {q.explanation}
                              </p>
                              <div className="p-3 rounded-xl bg-[var(--bg-card)] border border-amber-500/20 text-xs text-amber-300 flex items-start gap-2">
                                <AlertCircle className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />
                                <div>
                                  <strong className="block text-amber-400 mb-0.5">Examiner Scoring Tip & Trap Intel:</strong>
                                  <span>{q.examinerScoringTip}</span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* MAINS DESCRIPTIVE TOGGLE & MODEL BLUEPRINT */}
                      {!isMcq && (
                        <div className="space-y-4 pt-2">
                          <div className="flex flex-wrap items-center gap-3">
                            <button
                              type="button"
                              onClick={() => toggleMainsReveal(q.id)}
                              className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[var(--accent-primary)] text-[var(--bg-base)] hover:opacity-90 transition-all flex items-center gap-2 shadow-sm"
                            >
                              <Trophy className="w-4 h-4" />
                              <span>
                                {isMainsRevealed
                                  ? 'Hide Examiner Model Answer'
                                  : 'Reveal Official Model Answer & IRAC Blueprint'}
                              </span>
                            </button>

                            <button
                              type="button"
                              onClick={() => setActiveTab('mains-lab')}
                              className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-all flex items-center gap-1.5"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                              <span>Practice in Mains Answer Writing Lab</span>
                            </button>
                          </div>

                          {isMainsRevealed && (
                            <div className="p-6 rounded-2xl bg-[var(--bg-base)] border border-emerald-500/30 space-y-4 animate-fadeIn">
                              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
                                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                                  <Sparkles className="w-4 h-4" />
                                  Examiner-Grade Model Answer Blueprint ({q.marks} Marks)
                                </span>
                                <span className="text-xs font-mono text-[var(--text-muted)]">
                                  {q.paperName}
                                </span>
                              </div>

                              <div className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed space-y-3 font-normal">
                                <AnnotatedLegalText text={q.explanation} />
                              </div>

                              <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-amber-500/20 text-xs text-amber-300 flex items-start gap-2">
                                <AlertCircle className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />
                                <div>
                                  <strong className="block text-amber-400 mb-0.5">Examiner Rubric Standard:</strong>
                                  <span>{q.examinerScoringTip}</span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          VIEW 1: ALL-INDIA TOPIC FREQUENCY & MASTER BLUEPRINTS
      ========================================================================= */}
      {examScope === 'allIndia' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Exam Comparative Analysis Bar */}
          <div className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)]">
              <Globe className="w-4 h-4" />
              <span>Exam Frameworks Analyzed & Weightage Methodology</span>
            </div>
            <p className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">
              Based on empirical analysis of past 15 years papers from <strong>Delhi Judicial Service (DJS)</strong>, 
              <strong>UP PCS-J</strong>, <strong>Bihar Judicial Services (BPSC)</strong>, <strong>UPSC Civil Services (Law Optional)</strong>, 
              <strong>Rajasthan & MP Judicial Services</strong>, and <strong>Prosecuting Officer (APO/PO) exams</strong>. 
              Examiners across all states concentrate over <span className="text-[var(--accent-primary)] font-bold">70% of marks</span> on the top 4 constitutional pillars.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {['Delhi Judicial (DJS)', 'UP PCS-J (Mains)', 'Bihar Judicial (BPSC)', 'UPSC Law Optional', 'Rajasthan Judiciary (RJS)', 'MP Civil Judge', 'CBI / State Prosecution (PO/APO)'].map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-secondary)]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* =====================================================================
              HEATMAP & FREQUENCY RANKING GRID
          ===================================================================== */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg md:text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[var(--accent-primary)]" />
                  Top Recurring Constitutional Topics by All-India Frequency
                </h2>
                <p className="text-xs text-[var(--text-secondary)]">
                  Click on any topic card to inspect why examiners repeatedly test it, core articles, and modern 2024 Constitution Bench shifts.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {ALL_INDIA_TOPIC_FREQUENCIES.map((topic) => {
                const isSelected = selectedTopicId === topic.id;
                const tierColor =
                  topic.frequencyTier === 'Tier 1: Guaranteed Super-Core'
                    ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'
                    : topic.frequencyTier === 'Tier 2: High Probability Recurring'
                    ? 'border-amber-500/30 text-amber-400 bg-amber-500/10'
                    : 'border-blue-500/30 text-blue-400 bg-blue-500/10';

                return (
                  <button
                    key={topic.id}
                    onClick={() => setSelectedTopicId(topic.id)}
                    className={`p-4 rounded-xl text-left border transition-all space-y-3 flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[var(--bg-card)] border-[var(--accent-primary)] ring-2 ring-[var(--accent-primary)]/20 shadow-lg'
                        : 'bg-[var(--bg-card)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-black text-[var(--accent-primary)]">
                          RANK #{topic.rank}
                        </span>
                        <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider border ${tierColor}`}>
                          {topic.frequencyScore}% OF ALL MARKS
                        </span>
                      </div>

                      <h3 className="text-sm font-bold text-[var(--text-primary)] line-clamp-2 leading-snug">
                        {topic.title}
                      </h3>

                      {/* Visual Frequency Progress Bar */}
                      <div className="w-full bg-[var(--bg-base)] h-2 rounded-full overflow-hidden border border-[var(--border-subtle)]">
                        <div
                          className="h-full bg-gradient-to-r from-[var(--accent-primary)] to-amber-500 rounded-full transition-all"
                          style={{ width: `${Math.min(100, topic.frequencyScore * 4)}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {topic.coreArticles.slice(0, 3).map((art) => (
                        <span
                          key={art}
                          className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)]"
                        >
                          {art}
                        </span>
                      ))}
                      {topic.coreArticles.length > 3 && (
                        <span className="text-[10px] text-[var(--text-muted)]">
                          +{topic.coreArticles.length - 3} more
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* =====================================================================
              ACTIVE TOPIC DEEP-DIVE CARD
          ===================================================================== */}
          <div className="p-6 md:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-lg space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-black uppercase tracking-wider bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
                    Rank #{activeTopic.rank} Priority
                  </span>
                  <span className="text-xs font-semibold text-[var(--text-muted)]">
                    {activeTopic.frequencyTier}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-[var(--text-primary)]">
                  {activeTopic.title}
                </h3>
              </div>

              <div className="text-right">
                <span className="text-[10px] uppercase font-bold text-[var(--text-muted)] block">Frequency Weightage</span>
                <span className="text-2xl font-black text-[var(--accent-primary)]">
                  ~{activeTopic.frequencyScore}%
                </span>
              </div>
            </div>

            {/* Why Examiners Love This Topic */}
            <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-amber-500/20 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4" />
                Examiner Psychology: Why This Topic Appears in Every Mains Paper
              </span>
              <p className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">
                {activeTopic.whyExaminersLoveIt}
              </p>
            </div>

            {/* Two-Column Grid: Recurring Themes & Precedent Evolution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Recurring Themes */}
              <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)] block">
                  Exact Recurring Question Angles Across States:
                </span>
                <ul className="space-y-2">
                  {activeTopic.recurringThemes.map((theme, i) => (
                    <li key={i} className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                      <ChevronRight className="w-3.5 h-3.5 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                      <span>{theme}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benchmark Precedent Evolution */}
              <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
                  Benchmark Precedent Evolution:
                </span>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] block mb-1">
                      Foundational Benchmark Case Laws:
                    </span>
                    <span className="font-semibold text-[var(--text-primary)]">
                      {activeTopic.benchmarkCases.classic}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[var(--bg-card)] border border-emerald-500/20">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                      Modern 2024 Constitution Bench Shift:
                    </span>
                    <span className="font-semibold text-emerald-300">
                      {activeTopic.benchmarkCases.modern2024}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Typical Past Year Question Prompt Snippet */}
            <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] block">
                Standard Question Blueprint in Exams:
              </span>
              <p className="text-xs md:text-sm font-medium italic text-[var(--text-primary)] leading-relaxed">
                {activeTopic.sampleQuestionSnippet}
              </p>
            </div>
          </div>

          {/* =====================================================================
              UNIVERSALLY RECURRING MASTER QUESTIONS VAULT
          ===================================================================== */}
          <div className="space-y-6 pt-4 border-t border-[var(--border-subtle)]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20 mb-2">
                  <Award className="w-3.5 h-3.5" />
                  <span>Judicial & Prosecution Mains PYQ Bank</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[var(--accent-primary)]" />
                  All-India Mains Exam Question Bank & Drafting Simulator
                </h2>
                <p className="text-xs text-[var(--text-secondary)] mt-1 max-w-3xl">
                  Attempt previous years questions calibrated strictly by marks, word limits, and examination pacing. Hover over any question pill to inspect its topic, exam importance, weightage, and examiner trap alert.
                </p>
              </div>

              <div className="text-xs font-mono px-3 py-1.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)] shrink-0">
                Showing <strong className="text-[var(--accent-primary)]">{filteredCommonQuestions.length}</strong> of {COMMON_JUDICIARY_QUESTIONS.length} Questions
              </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-3 shadow-sm">
              <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
                {/* Search Input */}
                <div className="relative flex-1">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
                  <input
                    type="text"
                    value={allIndiaSearchQuery}
                    onChange={(e) => setAllIndiaSearchQuery(e.target.value)}
                    placeholder="Search by topic, article (e.g. Art. 20(3)), case law, or keyword..."
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors"
                  />
                  {allIndiaSearchQuery && (
                    <button
                      onClick={() => setAllIndiaSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Marks Tier Filter Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] shrink-0 px-1">
                    Marks:
                  </span>
                  {[
                    { label: 'All', value: 'all' },
                    { label: '5M (Short Notes)', value: '5' },
                    { label: '10M (Standard)', value: '10' },
                    { label: '15M (Problem)', value: '15' },
                    { label: '20M+ (Doctrines)', value: '20+' }
                  ].map((m) => (
                    <button
                      key={m.value}
                      onClick={() => setSelectedMarksFilter(m.value)}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all border ${
                        selectedMarksFilter === m.value
                          ? 'bg-[var(--accent-primary)] text-[var(--bg-base)] border-[var(--accent-primary)]'
                          : 'bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-[var(--border-subtle)]'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Exam Source Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pt-2 border-t border-[var(--border-subtle)]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] shrink-0 px-1">
                  Exams:
                </span>
                {[
                  { label: 'All Exams', value: 'all' },
                  { label: 'Delhi (DJS)', value: 'DJS' },
                  { label: 'UP PCS-J', value: 'UP_PCSJ' },
                  { label: 'Bihar (BJS)', value: 'BJS' },
                  { label: 'Prosecution (CBI/APP)', value: 'PROSECUTION' },
                  { label: 'UPSC Law Optional', value: 'UPSC_LAW' }
                ].map((ex) => (
                  <button
                    key={ex.value}
                    onClick={() => setSelectedExamFilter(ex.value)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-all border ${
                      selectedExamFilter === ex.value
                        ? 'bg-[var(--accent-primary)]/20 text-[var(--accent-primary)] border-[var(--accent-primary)]/40 font-bold'
                        : 'bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-[var(--border-subtle)]'
                    }`}
                  >
                    {ex.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Question Selector Pills with Interactive Hover Callouts */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[11px] text-[var(--text-muted)] px-1">
                <span className="flex items-center gap-1">
                  <Info className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                  Hover over any question pill to inspect topic, weightage, and examiner traps:
                </span>
                <span className="hidden md:inline">Scroll horizontally for more questions &rarr;</span>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1">
                {filteredCommonQuestions.map((q, idx) => {
                  const isSelected = activeCommonQ.id === q.id;
                  return (
                    <QuestionIntelHoverCard key={q.id} question={q}>
                      <button
                        onClick={() => setSelectedCommonQId(q.id)}
                        className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border flex items-center gap-1.5 group ${
                          isSelected
                            ? 'bg-[var(--accent-primary)] text-[var(--bg-base)] border-[var(--accent-primary)] shadow-md ring-2 ring-[var(--accent-primary)]/20'
                            : 'bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] border-[var(--border-subtle)]'
                        }`}
                      >
                        <FileText className="w-3.5 h-3.5 shrink-0" />
                        <span className={`font-mono text-[10px] px-1.5 py-0.5 rounded font-black ${
                          isSelected ? 'bg-black/25 text-[var(--bg-base)]' : 'bg-[var(--bg-base)] text-[var(--accent-primary)] border border-[var(--border-subtle)]'
                        }`}>
                          {q.marksCategory}M
                        </span>
                        <span className="max-w-[180px] md:max-w-[220px] truncate text-left">
                          {q.title.split(':')[0]}
                        </span>
                      </button>
                    </QuestionIntelHoverCard>
                  );
                })}
              </div>
            </div>

            {/* Active Master Question Card */}
            <div className="p-6 md:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xl space-y-6">
              <div className="space-y-4">
                {/* Header Metadata Badges */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-lg text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      Standard {activeCommonQ.typicalMarks} Marks Question
                    </span>
                    <span className="px-3 py-1 rounded-lg text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      Target: {activeCommonQ.targetWordLimit}
                    </span>
                    <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                      Appeared In: {activeCommonQ.examsAppeared.join(' | ')}
                    </span>
                  </div>

                  <span className="text-xs font-mono font-bold text-[var(--accent-primary)] flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Examiner Blueprint & Model
                  </span>
                </div>

                {/* Question Title & Prompt Text */}
                <div className="space-y-2">
                  <h3 className="text-lg md:text-xl font-bold text-[var(--text-primary)]">
                    {activeCommonQ.title}
                  </h3>

                  <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs md:text-sm text-[var(--text-primary)] leading-relaxed italic border-l-4 border-l-[var(--accent-primary)]">
                    {activeCommonQ.questionText}
                  </div>
                </div>

                {/* Built-in Question Intel & Trap Banner */}
                {activeCommonQ.hoverIntel && (
                  <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-2.5">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-bold text-[var(--accent-primary)]">
                          Topic: {activeCommonQ.hoverIntel.topicPillar}
                        </span>
                        <span className="text-[var(--text-muted)]">•</span>
                        <span className="text-amber-400 font-semibold">{activeCommonQ.hoverIntel.examImportance}</span>
                      </div>
                      <div className="text-[11px] font-mono text-[var(--text-secondary)]">
                        Exam Pacing: ~{activeCommonQ.targetTimeMinutes} mins (Target: {activeCommonQ.estimatedPages})
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      {/* Left: Testing History & Articles */}
                      <div className="space-y-2">
                        <div>
                          <span className="text-[10px] font-bold uppercase text-[var(--text-muted)] block">Testing Frequency:</span>
                          <span className="text-[var(--text-secondary)]">{activeCommonQ.hoverIntel.examFrequency}</span>
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase text-[var(--text-muted)] block">Constitutional Articles:</span>
                          <div className="flex flex-wrap gap-1 mt-0.5">
                            {activeCommonQ.hoverIntel.coreArticles.map((art, i) => (
                              <span key={i} className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--accent-primary)]">
                                {art}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right: Examiner Trap Alert */}
                      <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1">
                          <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                          Examiner Trap & Pitfall Warning:
                        </span>
                        <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                          {activeCommonQ.hoverIntel.examinerTrapWarning}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Core Issues & Examiner Expectations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)] block">
                    Core Doctrinal Issues Framed:
                  </span>
                  <ul className="space-y-1.5">
                    {activeCommonQ.coreIssues.map((issue, i) => (
                      <li key={i} className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-amber-500/20 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                    Examiner Expectation (What Fetches 70%+ Marks):
                  </span>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {activeCommonQ.examinerExpectation}
                  </p>
                </div>
              </div>

              {/* Essential Citations Bar */}
              <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
                  Mandatory Citations & Case Laws to Quote:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeCommonQ.essentialCitations.map((cite, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
                    >
                      ⚖️ {cite}
                    </span>
                  ))}
                </div>
              </div>

              {/* 4-Step Answer Blueprint */}
              <div className="p-5 rounded-2xl bg-[var(--bg-base)] border border-[var(--accent-primary)]/20 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)] flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Mains Answer Drafting Blueprint (4-Step Formula):
                </span>

                <div className="space-y-3 text-xs md:text-sm">
                  <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-1">
                    <span className="font-black text-blue-400 block">Step 1: Introduction & Textual Foundations</span>
                    <p className="text-[var(--text-secondary)] leading-relaxed">{activeCommonQ.answerBlueprint.step1Intro}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-1">
                    <span className="font-black text-amber-400 block">Step 2: Doctrinal Core & Legal Test</span>
                    <p className="text-[var(--text-secondary)] leading-relaxed">{activeCommonQ.answerBlueprint.step2DoctrinalCore}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-1">
                    <span className="font-black text-purple-400 block">Step 3: Judicial Precedents & Evolution</span>
                    <p className="text-[var(--text-secondary)] leading-relaxed">{activeCommonQ.answerBlueprint.step3PrecedentEvolution}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-1">
                    <span className="font-black text-emerald-400 block">Step 4: Constitutional Synthesis & Modern Ruling</span>
                    <p className="text-[var(--text-secondary)] leading-relaxed">{activeCommonQ.answerBlueprint.step4Conclusion}</p>
                  </div>
                </div>
              </div>

              {/* Interactive Drafting Scratchpad with Dual Live Meter & Timer */}
              <div className="p-5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-[var(--border-subtle)]">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)] flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        Interactive Mains Drafting Scratchpad
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
                        {activeCommonQ.typicalMarks} Marks ({activeCommonQ.targetWordLimit})
                      </span>
                    </div>

                    {/* Dual Live Meter: Words + Pages */}
                    <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                      <span className="font-mono font-bold text-[var(--text-primary)]">
                        {allIndiaWordCount} Words
                      </span>
                      <span className="text-[var(--text-muted)]">
                        ≈ {(allIndiaWordCount / 200).toFixed(1)} Exam Pages (~{Math.round(allIndiaWordCount / 9)} lines)
                      </span>

                      {/* Sweet-Spot Status Indicator */}
                      {allIndiaWordCount === 0 ? (
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[var(--bg-card)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
                          Drafting not started
                        </span>
                      ) : allIndiaWordCount < (activeCommonQ.targetWordMin || 100) * 0.85 ? (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          Drafting in progress (under limit)
                        </span>
                      ) : allIndiaWordCount <= (activeCommonQ.targetWordMax || 250) * 1.1 ? (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          Optimal Sweet Spot — Examiner Approved
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/15 text-rose-400 border border-rose-500/30 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          Excess Length Warning (&gt;115% limit)
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Marks-Calibrated Timer Widget */}
                  <div className="flex items-center gap-2 p-1.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] self-start md:self-auto">
                    <div className="px-2 py-1 rounded-lg font-mono text-xs font-black flex items-center gap-1.5 text-[var(--text-primary)]">
                      <Timer className="w-3.5 h-3.5 text-amber-400" />
                      <span className={allIndiaTimerSeconds < 60 ? 'text-rose-400 animate-pulse' : ''}>
                        {formatTimer(allIndiaTimerSeconds)}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsAllIndiaTimerRunning(!isAllIndiaTimerRunning)}
                      className="px-2.5 py-1 rounded-lg text-xs font-bold bg-[var(--accent-primary)] text-[var(--bg-base)] hover:opacity-90 transition-all flex items-center gap-1 shadow-sm"
                    >
                      {isAllIndiaTimerRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                      <span>{isAllIndiaTimerRunning ? 'Pause' : 'Start Timer'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsAllIndiaTimerRunning(false);
                        setAllIndiaTimerSeconds((activeCommonQ.targetTimeMinutes || 10) * 60);
                      }}
                      title="Reset Timer"
                      className="p-1.5 rounded-lg text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <textarea
                  value={allIndiaDrafts[activeCommonQ.id] || ''}
                  onChange={(e) => handleAllIndiaDraftChange(e.target.value)}
                  placeholder="Practice drafting your answer strictly within the marks and word limit. Notice the live handwritten page gauge updating as you type..."
                  rows={9}
                  className="w-full p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs md:text-sm text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors"
                />

                {/* Diagnostic Evaluation Trigger Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleEvaluateDraft(activeCommonQ.id, activeCommonQ, allIndiaDrafts[activeCommonQ.id] || '')}
                      disabled={isEvaluating || !(allIndiaDrafts[activeCommonQ.id] || '').trim()}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm ${
                        (allIndiaDrafts[activeCommonQ.id] || '').trim()
                          ? 'bg-emerald-500 hover:bg-emerald-600 text-black font-black cursor-pointer'
                          : 'bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-muted)] cursor-not-allowed opacity-60'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{isEvaluating ? 'Running Diagnostic Scan...' : '⚡ Evaluate My Answer'}</span>
                    </button>

                    {evaluationResults[activeCommonQ.id] && (
                      <button
                        type="button"
                        onClick={() => handleDismissEvaluation(activeCommonQ.id)}
                        className="px-3 py-2 rounded-xl text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] bg-[var(--bg-card)] transition-colors"
                      >
                        Dismiss Report
                      </button>
                    )}
                  </div>

                  <span className="text-[11px] text-[var(--text-muted)]">
                    Scans Bare Act anchors, benchmark precedents, 4-step structure & scoring rubric
                  </span>
                </div>

                {/* Automated Evaluation Diagnostic Card */}
                {evaluationResults[activeCommonQ.id] && (
                  <AnswerEvaluationCard
                    evaluation={evaluationResults[activeCommonQ.id]}
                    onReevaluate={() => handleEvaluateDraft(activeCommonQ.id, activeCommonQ, allIndiaDrafts[activeCommonQ.id] || '')}
                    onClose={() => handleDismissEvaluation(activeCommonQ.id)}
                  />
                )}
              </div>

              {/* Master Model Answer Toggle Button */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => toggleSolution(activeCommonQ.id)}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[var(--accent-primary)] text-[var(--bg-base)] hover:opacity-90 transition-all flex items-center gap-2 shadow-sm"
                >
                  <Trophy className="w-4 h-4" />
                  <span>
                    {revealedSolutions[activeCommonQ.id]
                      ? 'Hide Official Model Answer'
                      : `Reveal Examiner's Framed Model Answer (${activeCommonQ.typicalMarks} Marks) & Rubric`}
                  </span>
                </button>
              </div>

              {/* Master Model Answer & Scoring Rubric */}
              {revealedSolutions[activeCommonQ.id] && (
                <div className="space-y-6 pt-4 border-t border-[var(--border-subtle)] animate-fadeIn">
                  {/* Model Solution Box */}
                  <div className="p-6 rounded-2xl bg-[var(--bg-base)] border border-emerald-500/30 space-y-4">
                    <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4" />
                        Examiner-Grade Model Solution ({activeCommonQ.typicalMarks} Marks | {activeCommonQ.targetWordLimit})
                      </span>
                      <span className="text-xs font-mono text-[var(--text-muted)]">
                        Standard All-India Judicial Format
                      </span>
                    </div>

                    <div className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-line font-normal space-y-3">
                      <AnnotatedLegalText text={activeCommonQ.fullModelAnswer} />
                    </div>
                  </div>

                  {/* Rubric Breakdown */}
                  <div className="p-5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)] block">
                      Official Scoring Rubric & Allocation of Marks ({activeCommonQ.typicalMarks}M Total):
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeCommonQ.scoringRubric.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-between text-xs"
                        >
                          <span className="text-[var(--text-secondary)] pr-2">{item.criterion}</span>
                          <span className="font-extrabold text-[var(--accent-primary)] shrink-0">
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
        </div>
      )}

      {/* =========================================================================
          VIEW 2: JKPSC MAINS PYQ VAULT (24 OFFICIAL QUESTIONS)
      ========================================================================= */}
      {examScope === 'jkpsc' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Filters & Search Matrix */}
          <div className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-4">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
              {/* Search Box */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by keyword, case law (e.g. Anuradha Bhasin, MADA, Selvi), or article..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs md:text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
                />
              </div>

              {/* Year Filter */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
                {['all', '2022–2023', '2018–2019', '2014–2016'].map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYearFilter(year)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                      selectedYearFilter === year
                        ? 'bg-[var(--accent-primary)] text-[var(--bg-base)] shadow-sm'
                        : 'bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                    }`}
                  >
                    {year === 'all' ? 'All 10 Years' : year}
                  </button>
                ))}
              </div>
            </div>

            {/* Topic Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              <span className="text-xs font-semibold text-[var(--text-muted)] flex items-center gap-1 shrink-0">
                <Filter className="w-3.5 h-3.5" />
                Topics:
              </span>
              {[
                'all',
                'Fundamental Rights',
                'Criminal Due Process',
                'Judiciary & Writs',
                'Executive & Legislature',
                'Federalism & Emergency',
                'Amendments & Basic Structure',
                'Administrative Law'
              ].map((topic) => (
                <button
                  key={topic}
                  onClick={() => setSelectedTopicFilter(topic)}
                  className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                    selectedTopicFilter === topic
                      ? 'bg-[var(--accent-primary)]/15 text-[var(--accent-primary)] border border-[var(--accent-primary)]/30 font-bold'
                      : 'bg-[var(--bg-base)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                  }`}
                >
                  {topic === 'all' ? 'All Topics' : topic}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content: Left Column Question List, Right Column Question Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Questions Selector List */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center justify-between text-xs text-[var(--text-muted)] px-1">
                <span className="font-bold uppercase tracking-wider">
                  Official Exam Questions ({filteredQuestions.length})
                </span>
                <span>Select to View & Practice</span>
              </div>

              <div className="space-y-2.5 max-h-[850px] overflow-y-auto pr-1">
                {filteredQuestions.map((q) => {
                  const isSelected = selectedQuestionId === q.id;
                  const hasDraft = !!userDrafts[q.id];

                  return (
                    <button
                      key={q.id}
                      onClick={() => setSelectedQuestionId(q.id)}
                      className={`w-full p-4 rounded-xl text-left border transition-all space-y-2.5 relative ${
                        isSelected
                          ? 'bg-[var(--bg-card)] border-[var(--accent-primary)] ring-2 ring-[var(--accent-primary)]/20 shadow-lg'
                          : 'bg-[var(--bg-card)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[var(--bg-base)] text-[var(--accent-primary)] border border-[var(--border-subtle)]">
                            {q.year} • Q{q.questionNumber}
                          </span>
                          <span className="text-[10px] font-bold text-[var(--text-muted)]">
                            {q.part}
                          </span>
                        </div>
                        <span className="text-xs font-black text-[var(--accent-primary)]">
                          {q.marks}M
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-[var(--text-primary)] line-clamp-2 leading-snug">
                        {q.title}
                      </h4>

                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">
                          {q.topic}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400">
                          Day {q.bootcampDay}
                        </span>
                        {hasDraft && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            Drafted
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Selected Question Detail & Interactive Workspace */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-6 md:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xl space-y-6">
                {/* Header Information */}
                <div className="space-y-4 border-b border-[var(--border-subtle)] pb-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-md text-xs font-black bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
                        {currentQuestion.year} Examination
                      </span>
                      <span className="px-3 py-1 rounded-md text-xs font-semibold bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                        {currentQuestion.paper} • {currentQuestion.part}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-sm font-black text-[var(--accent-primary)]">
                        Marks: {currentQuestion.marks}
                      </span>
                      <button
                        onClick={() => setActiveTab('bootcamp')}
                        className="text-xs font-bold text-[var(--accent-primary)] hover:underline flex items-center gap-1 pl-2 border-l border-[var(--border-subtle)]"
                      >
                        <span>Go to Day {currentQuestion.bootcampDay}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <h2 className="text-xl md:text-2xl font-black text-[var(--text-primary)] leading-tight">
                    {currentQuestion.title}
                  </h2>

                  {/* Question Text Prompt */}
                  <div className="p-4 md:p-5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] block">
                      Official Verbatim Question Paper Text:
                    </span>
                    <div className="text-xs md:text-sm text-[var(--text-primary)] leading-relaxed whitespace-pre-line font-medium">
                      {currentQuestion.questionText}
                    </div>
                  </div>
                </div>

                {/* Core Legal Issues Framed */}
                <div className="space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] block">
                    Core Constitutional Legal Issues to Address:
                  </span>
                  <div className="grid grid-cols-1 gap-2">
                    {currentQuestion.coreIssues.map((issue, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex items-start gap-2.5 text-xs text-[var(--text-secondary)]"
                      >
                        <div className="w-5 h-5 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <span className="leading-relaxed">{issue}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Constitutional Articles & Precedents */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Articles */}
                  <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] block">
                      Relevant Articles:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {currentQuestion.relevantArticles.map((art) => (
                        <span
                          key={art}
                          className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--accent-primary)]"
                        >
                          {art}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Precedents Preview */}
                  <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] block">
                      Classic Benchmark vs 2024 Shift:
                    </span>
                    <div className="text-xs space-y-1">
                      <p className="text-[var(--text-muted)]">
                        <strong className="text-[var(--text-secondary)]">Classic:</strong>{' '}
                        {currentQuestion.landmarkPrecedents.classic}
                      </p>
                      <p className="text-emerald-400">
                        <strong className="text-emerald-300">2024 Shift:</strong>{' '}
                        {currentQuestion.landmarkPrecedents.modern2024}
                      </p>
                    </div>
                  </div>
                </div>

                {/* ===================================================================
                    STUDENT ANSWER DRAFTING SCRATCHPAD (With Word Count & Timer)
                =================================================================== */}
                <div className="p-5 rounded-2xl bg-[var(--bg-base)] border border-[var(--accent-primary)]/20 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[var(--accent-primary)]" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)]">
                        Mains Answer Drafting Scratchpad
                      </span>
                    </div>

                    {/* Timer and Word Count Controls */}
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-[var(--text-muted)] bg-[var(--bg-card)] px-2.5 py-1 rounded-md border border-[var(--border-subtle)]">
                        {wordCount} Words
                      </span>

                      <div className="flex items-center gap-1.5 bg-[var(--bg-card)] px-2.5 py-1 rounded-md border border-[var(--border-subtle)] text-xs font-mono">
                        <Clock className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                        <span>{formatTimer(timerSeconds)}</span>
                        <button
                          onClick={() => setIsTimerRunning(!isTimerRunning)}
                          className="ml-1 text-[10px] font-bold text-[var(--accent-primary)] hover:underline"
                        >
                          {isTimerRunning ? 'Pause' : 'Start'}
                        </button>
                      </div>

                      <button
                        onClick={() => {
                          setIsTimerRunning(false);
                          setTimerSeconds(0);
                        }}
                        title="Reset Timer"
                        className="p-1 rounded hover:bg-[var(--bg-card)] text-[var(--text-muted)] transition-colors"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <textarea
                    value={userDrafts[currentQuestion.id] || ''}
                    onChange={(e) => handleDraftChange(e.target.value)}
                    placeholder="Draft your answer following the 4-step Mains Gold-Standard formula: 
1. Constitutional & Statutory Provisions...
2. Judicial Test / Doctrine...
3. Precedent Evolution (Classic ➔ 2024 Bench)...
4. Applied Analysis & Prosecutorial Submissions..."
                    rows={9}
                    className="w-full p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs md:text-sm text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors"
                  />

                  {/* Diagnostic Evaluation Trigger Bar (JKPSC) */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleEvaluateDraft(currentQuestion.id, currentQuestion, userDrafts[currentQuestion.id] || '')}
                        disabled={isEvaluating || !(userDrafts[currentQuestion.id] || '').trim()}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm ${
                          (userDrafts[currentQuestion.id] || '').trim()
                            ? 'bg-emerald-500 hover:bg-emerald-600 text-black font-black cursor-pointer'
                            : 'bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-muted)] cursor-not-allowed opacity-60'
                        }`}
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{isEvaluating ? 'Running Diagnostic Scan...' : '⚡ Evaluate My Answer'}</span>
                      </button>

                      {evaluationResults[currentQuestion.id] && (
                        <button
                          type="button"
                          onClick={() => handleDismissEvaluation(currentQuestion.id)}
                          className="px-3 py-2 rounded-xl text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] bg-[var(--bg-card)] transition-colors"
                        >
                          Dismiss Report
                        </button>
                      )}
                    </div>

                    <span className="text-[11px] text-[var(--text-muted)]">
                      Instant rubric-based diagnostic evaluation
                    </span>
                  </div>

                  {/* Automated Evaluation Diagnostic Card (JKPSC) */}
                  {evaluationResults[currentQuestion.id] && (
                    <AnswerEvaluationCard
                      evaluation={evaluationResults[currentQuestion.id]}
                      onReevaluate={() => handleEvaluateDraft(currentQuestion.id, currentQuestion, userDrafts[currentQuestion.id] || '')}
                      onClose={() => handleDismissEvaluation(currentQuestion.id)}
                    />
                  )}
                </div>

                {/* Model Answer Toggle Button */}
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => toggleSolution(currentQuestion.id)}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[var(--accent-primary)] text-[var(--bg-base)] hover:opacity-90 transition-all flex items-center gap-2 shadow-sm"
                  >
                    <Trophy className="w-4 h-4" />
                    <span>
                      {revealedSolutions[currentQuestion.id]
                        ? 'Hide Official Model Answer'
                        : 'Reveal Examiner\'s Model Answer & 50-Mark Rubric'}
                    </span>
                  </button>
                </div>

                {/* ===================================================================
                    EXAMINER MODEL SOLUTION & 50-MARK RUBRIC
                =================================================================== */}
                {revealedSolutions[currentQuestion.id] && (
                  <div className="space-y-6 pt-4 border-t border-[var(--border-subtle)] animate-fadeIn">
                    {/* Model Answer Box */}
                    <div className="p-6 rounded-2xl bg-[var(--bg-base)] border border-emerald-500/30 space-y-4">
                      <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                          <Sparkles className="w-4 h-4" />
                          Official Examiner Grade Model Solution (50 Marks)
                        </span>
                        <span className="text-xs font-mono text-[var(--text-muted)]">
                          Standard JKPSC PO Mains Format
                        </span>
                      </div>

                      <div className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-line font-normal space-y-3">
                        <AnnotatedLegalText text={currentQuestion.modelAnswer} />
                      </div>
                    </div>

                    {/* 50-Mark Rubric Breakdown */}
                    <div className="p-5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)] block">
                        Official 50-Mark Scoring Rubric & Evaluation Standard:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {currentQuestion.scoringRubric.map((item, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-between text-xs"
                          >
                            <span className="text-[var(--text-secondary)] pr-2">{item.criterion}</span>
                            <span className="font-extrabold text-[var(--accent-primary)] shrink-0">
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
          </div>
        </div>
      )}
    </div>
  );
};
