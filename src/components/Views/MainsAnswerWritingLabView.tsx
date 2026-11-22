import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  FileText,
  Clock,
  CheckCircle2,
  Award,
  BookOpen,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  Sparkles,
  Save,
  Eye,
  Sliders,
  Scale,
  Download,
  Copy,
  Check,
  HelpCircle,
  ExternalLink,
  PenTool,
  Timer,
  Search,
  Filter,
  Flame,
  AlertTriangle,
  Zap,
  ListOrdered,
  Layers,
  GraduationCap
} from 'lucide-react';
import { MAINS_MASTER_QUESTIONS } from '../../data/mainsQuestionsData';
import type { MainsMasterQuestion, MarksTier, ExamCategory } from '../../types/mainsQuestionTypes';
import {
  FIFTEEN_DAY_BOOTCAMP_DATA,
  type BootcampDay,
  type BootcampComprehensionCaseStudy
} from '../../data/bootcamp';

const MAINS_DRAFTS_STORAGE = 'samvidhan_mains_drafts_v2';
const MAINS_SCORES_STORAGE = 'samvidhan_mains_scores_v2';

interface EvaluatedItem {
  name: string;
  matched: boolean;
}

interface EvaluationResult {
  score: number;
  maxScore: number;
  percentage: number;
  wordCountStatus: 'ideal' | 'too-short' | 'too-long';
  matchedArticles: EvaluatedItem[];
  matchedCitations: EvaluatedItem[];
  rubricFeedback: { criterion: string; maxMarks: number; awarded: number; feedback: string }[];
  summaryFeedback: string;
}

export const MainsAnswerWritingLabView: React.FC = () => {
  // Primary Mode: 'master-vault' (125+ High-Yield Questions) vs 'bootcamp-cases' (15-Day Case Studies)
  const [activeMode, setActiveMode] = useState<'master-vault' | 'bootcamp-cases'>('master-vault');

  // ==========================================
  // MASTER VAULT STATE
  // ==========================================
  const [selectedExam, setSelectedExam] = useState<string>('ALL');
  const [selectedMarks, setSelectedMarks] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedQuestionId, setSelectedQuestionId] = useState<string>('mains-15m-governor-assent-art200');
  const [activeDetailTab, setActiveDetailTab] = useState<'blueprint' | 'model-answer' | 'rubric' | 'citations'>('blueprint');

  // Master Vault Drafting & Evaluation State
  const [masterDraft, setMasterDraft] = useState<string>('');
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);
  const [evaluationResult, setEvaluationResult] = useState<EvaluationResult | null>(null);

  // Timer State for Master Vault
  const [vaultTimerDuration, setVaultTimerDuration] = useState<number>(11 * 60);
  const [vaultTimerRemaining, setVaultTimerRemaining] = useState<number>(11 * 60);
  const [isVaultTimerRunning, setIsVaultTimerRunning] = useState<boolean>(false);
  const vaultTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Notifications
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);
  const [copiedSuccess, setCopiedSuccess] = useState<boolean>(false);

  // ==========================================
  // BOOTCAMP CASE STUDIES STATE (LEGACY/FALLBACK)
  // ==========================================
  const [selectedDayNumber, setSelectedDayNumber] = useState<number>(1);
  const [selectedCaseIndex, setSelectedCaseIndex] = useState<number>(0);
  const [bootcampDraft, setBootcampDraft] = useState<string>('');
  const [rubricScores, setRubricScores] = useState<Record<number, number>>({});

  // ------------------------------------------
  // Filtered Master Questions
  // ------------------------------------------
  const filteredMasterQuestions = useMemo(() => {
    return MAINS_MASTER_QUESTIONS.filter((q) => {
      // Exam filter
      if (selectedExam !== 'ALL') {
        if (selectedExam === 'UPSC_GS2' && q.examCategory !== 'UPSC_GS2') return false;
        if (selectedExam === 'UPSC_LAW' && q.examCategory !== 'UPSC_LAW') return false;
        if (selectedExam === 'DJS' && q.examCategory !== 'DJS') return false;
        if (selectedExam === 'UP_PCSJ' && q.examCategory !== 'UP_PCSJ') return false;
        if (selectedExam === 'PROSECUTION' && q.examCategory !== 'PROSECUTION') return false;
        if (selectedExam === 'BJS' && q.examCategory !== 'BJS') return false;
      }

      // Marks filter
      if (selectedMarks !== 'ALL') {
        if (q.marksCategory !== parseInt(selectedMarks, 10)) return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const qLower = searchQuery.toLowerCase();
        const inTitle = q.title.toLowerCase().includes(qLower);
        const inText = q.questionText.toLowerCase().includes(qLower);
        const inTopic = q.hoverIntel?.topicName?.toLowerCase().includes(qLower);
        const inCitations = q.essentialCitations.some((c) => c.toLowerCase().includes(qLower));
        const inArticles = q.hoverIntel?.coreArticles?.some((a) => a.toLowerCase().includes(qLower));
        if (!inTitle && !inText && !inTopic && !inCitations && !inArticles) return false;
      }

      return true;
    });
  }, [selectedExam, selectedMarks, searchQuery]);

  // Current Master Question
  const currentMasterQuestion: MainsMasterQuestion = useMemo(() => {
    return (
      MAINS_MASTER_QUESTIONS.find((q) => q.id === selectedQuestionId) ||
      filteredMasterQuestions[0] ||
      MAINS_MASTER_QUESTIONS[0]
    );
  }, [selectedQuestionId, filteredMasterQuestions]);

  // Sync draft and timer when question changes
  useEffect(() => {
    if (activeMode === 'master-vault' && currentMasterQuestion) {
      try {
        const draftsRaw = localStorage.getItem(MAINS_DRAFTS_STORAGE);
        if (draftsRaw) {
          const drafts = JSON.parse(draftsRaw);
          setMasterDraft(drafts[currentMasterQuestion.id] || '');
        } else {
          setMasterDraft('');
        }
      } catch (e) {
        console.error('Failed to load draft', e);
        setMasterDraft('');
      }

      const targetMins = currentMasterQuestion.targetTimeMinutes || 11;
      setVaultTimerDuration(targetMins * 60);
      setVaultTimerRemaining(targetMins * 60);
      setIsVaultTimerRunning(false);
      setEvaluationResult(null);
    }
  }, [currentMasterQuestion.id, activeMode]);

  // Master Timer Countdown
  useEffect(() => {
    if (!isVaultTimerRunning) {
      if (vaultTimerRef.current) clearInterval(vaultTimerRef.current);
      return;
    }

    vaultTimerRef.current = setInterval(() => {
      setVaultTimerRemaining((prev) => {
        if (prev <= 1) {
          if (vaultTimerRef.current) clearInterval(vaultTimerRef.current);
          setIsVaultTimerRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (vaultTimerRef.current) clearInterval(vaultTimerRef.current);
    };
  }, [isVaultTimerRunning]);

  // Save Master Draft
  const handleSaveMasterDraft = () => {
    try {
      const draftsRaw = localStorage.getItem(MAINS_DRAFTS_STORAGE);
      const drafts = draftsRaw ? JSON.parse(draftsRaw) : {};
      drafts[currentMasterQuestion.id] = masterDraft;
      localStorage.setItem(MAINS_DRAFTS_STORAGE, JSON.stringify(drafts));
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 2000);
    } catch (e) {
      console.error('Failed to save draft', e);
    }
  };

  const handleCopyMasterDraft = () => {
    navigator.clipboard.writeText(masterDraft);
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 2000);
  };

  const masterWordCount = useMemo(() => {
    const trimmed = masterDraft.trim();
    if (!trimmed) return 0;
    return trimmed.split(/\s+/).length;
  }, [masterDraft]);

  // ------------------------------------------
  // Automated Evaluation Engine
  // ------------------------------------------
  const handleEvaluateAnswer = () => {
    setIsEvaluating(true);

    setTimeout(() => {
      const text = masterDraft.toLowerCase();
      const q = currentMasterQuestion;

      // 1. Check Articles
      const articlesList = q.hoverIntel?.coreArticles || [];
      const matchedArticles: EvaluatedItem[] = articlesList.map((art) => {
        // clean up e.g. "Article 200", "Art 200", or "200"
        const numMatch = art.match(/\d+[A-Za-z]*/);
        const num = numMatch ? numMatch[0].toLowerCase() : art.toLowerCase();
        const matched = text.includes(art.toLowerCase()) || (num.length >= 2 && text.includes(num));
        return { name: art, matched };
      });

      // 2. Check Citations
      const citationsList = q.essentialCitations || [];
      const matchedCitations: EvaluatedItem[] = citationsList.map((cit) => {
        // extract case name before v. or citation year
        const cleanName = cit.split(/v\.|vs\.|,|\(/i)[0].trim().toLowerCase();
        const matched = cleanName.length > 3 && text.includes(cleanName);
        return { name: cit, matched };
      });

      // 3. Word count status
      let wordCountStatus: 'ideal' | 'too-short' | 'too-long' = 'ideal';
      if (masterWordCount < q.targetWordMin * 0.6) {
        wordCountStatus = 'too-short';
      } else if (masterWordCount > q.targetWordMax * 1.3) {
        wordCountStatus = 'too-long';
      }

      // 4. Calculate score
      const totalMarks = q.typicalMarks || 15;
      const articlesMatchedCount = matchedArticles.filter((a) => a.matched).length;
      const citationsMatchedCount = matchedCitations.filter((c) => c.matched).length;

      const articleRatio = articlesList.length > 0 ? articlesMatchedCount / articlesList.length : 1;
      const citationRatio = citationsList.length > 0 ? citationsMatchedCount / citationsList.length : 1;
      
      let lengthMultiplier = 1.0;
      if (wordCountStatus === 'too-short') lengthMultiplier = 0.55;
      if (wordCountStatus === 'too-long') lengthMultiplier = 0.85;

      // Rubric breakdown
      const rubricFeedback = (q.scoringRubric || []).map((r, idx) => {
        let earned = 0;
        if (idx === 0) {
          // Intro & Text
          earned = r.marks * (0.4 + 0.6 * articleRatio) * lengthMultiplier;
        } else if (idx === 1) {
          // Doctrinal Core
          earned = r.marks * (0.5 + 0.5 * articleRatio) * lengthMultiplier;
        } else if (idx === 2) {
          // Precedents
          earned = r.marks * (0.3 + 0.7 * citationRatio) * lengthMultiplier;
        } else {
          // Conclusion / Synthesis
          earned = r.marks * (0.6 + 0.4 * lengthMultiplier);
        }
        earned = Math.min(r.marks, Math.max(0.5, Math.round(earned * 2) / 2));
        
        let feedback = 'Good coverage.';
        if (earned < r.marks * 0.5) {
          feedback = idx === 2 ? 'Missing key landmark citations.' : 'Requires deeper statutory and doctrinal grounding.';
        } else if (earned >= r.marks * 0.8) {
          feedback = 'Thorough constitutional analysis adhering to judicial rubric.';
        }

        return {
          criterion: r.criterion,
          maxMarks: r.marks,
          awarded: earned,
          feedback
        };
      });

      const totalAwarded = Math.round(rubricFeedback.reduce((s, r) => s + r.awarded, 0) * 2) / 2;
      const percentage = Math.round((totalAwarded / totalMarks) * 100);

      let summaryFeedback = '';
      if (percentage >= 75) {
        summaryFeedback = 'Outstanding High-Scoring Response. Strong statutory clause invocation, precise landmark precedents, and structured IRAC delivery.';
      } else if (percentage >= 50) {
        summaryFeedback = 'Solid Foundational Draft. Expand on recent Constitution Bench rulings and ensure exact clause numbers are explicitly cited to secure top-tier marks.';
      } else {
        summaryFeedback = 'Needs Substantive Enrichment. Draft is either below word length or missing key constitutional articles and precedent authorities.';
      }

      setEvaluationResult({
        score: totalAwarded,
        maxScore: totalMarks,
        percentage,
        wordCountStatus,
        matchedArticles,
        matchedCitations,
        rubricFeedback,
        summaryFeedback
      });

      setIsEvaluating(false);
    }, 600);
  };

  // ------------------------------------------
  // Bootcamp Helpers
  // ------------------------------------------
  const currentDay = useMemo(() => {
    return FIFTEEN_DAY_BOOTCAMP_DATA.find((d) => d.dayNumber === selectedDayNumber) || FIFTEEN_DAY_BOOTCAMP_DATA[0];
  }, [selectedDayNumber]);

  const caseStudiesList = useMemo(() => {
    return currentDay.comprehensionCaseStudies || [];
  }, [currentDay]);

  const currentCase: BootcampComprehensionCaseStudy | null = useMemo(() => {
    return caseStudiesList[selectedCaseIndex] || caseStudiesList[0] || null;
  }, [caseStudiesList, selectedCaseIndex]);

  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 via-indigo-950/30 to-card border border-purple-500/30 shadow-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <PenTool className="w-3.5 h-3.5" />
              <span>UPSC GS-2, Law Optional & Judicial Services Mains Hall</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
              Mains Answer Writing & Evaluation Lab
            </h1>
            <p className="text-sm text-muted-foreground mt-1 max-w-3xl">
              Master 125+ canonical constitutional controversies with 4-Step IRAC blueprints, examiner negative-trap warnings, full ready-to-memorize model answers, and real-time automated rubric scoring.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Mode Switcher */}
            <div className="inline-flex p-1 rounded-xl bg-card border border-border">
              <button
                onClick={() => setActiveMode('master-vault')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeMode === 'master-vault'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>125 Master Questions</span>
              </button>
              <button
                onClick={() => setActiveMode('bootcamp-cases')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeMode === 'bootcamp-cases'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>15-Day Bootcamp Cases</span>
              </button>
            </div>
          </div>
        </div>

        {/* Master Vault Filters Bar */}
        {activeMode === 'master-vault' && (
          <div className="mt-6 pt-5 border-t border-border/40 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
              {/* Search Box */}
              <div className="md:col-span-5 relative">
                <Search className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search 125 questions by title, article (e.g. Art. 200), doctrine, or case..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs font-medium pl-9 pr-4 py-2.5 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
              </div>

              {/* Exam Category Filter */}
              <div className="md:col-span-4">
                <select
                  value={selectedExam}
                  onChange={(e) => setSelectedExam(e.target.value)}
                  className="w-full text-xs font-semibold p-2.5 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-purple-500"
                >
                  <option value="ALL">All Examinations (125 Questions)</option>
                  <option value="UPSC_GS2">UPSC CSE Mains GS-2 (21 Contemporary & Core Questions)</option>
                  <option value="UPSC_LAW">UPSC Law Optional (23 In-Depth Doctrinal Essays)</option>
                  <option value="DJS">Delhi Judicial Service - DJS (26 High Court Benchmarks)</option>
                  <option value="UP_PCSJ">UP PCS-J / State Judicial Services (24 Doctrinal Questions)</option>
                  <option value="PROSECUTION">Prosecution & Criminal Due Process (18 Questions)</option>
                  <option value="BJS">Bihar Judicial Service - BJS (10 Questions)</option>
                </select>
              </div>

              {/* Marks Tier Filter */}
              <div className="md:col-span-3">
                <select
                  value={selectedMarks}
                  onChange={(e) => setSelectedMarks(e.target.value)}
                  className="w-full text-xs font-semibold p-2.5 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-purple-500"
                >
                  <option value="ALL">All Marks Tiers (5M to 25M)</option>
                  <option value="5">5 Marks (Crisp Notes • ~100 Words)</option>
                  <option value="10">10 Marks (Short Essays • ~150 Words)</option>
                  <option value="15">15 Marks (Standard Mains • ~250 Words)</option>
                  <option value="20">20 Marks (Advanced Landmarks • ~350 Words)</option>
                </select>
              </div>
            </div>

            {/* Quick Horizontal Carousel of Filtered Questions */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
              <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground whitespace-nowrap pl-1">
                Showing {filteredMasterQuestions.length} Questions:
              </span>
              {filteredMasterQuestions.map((q) => {
                const isSelected = q.id === currentMasterQuestion.id;
                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      setSelectedQuestionId(q.id);
                      setEvaluationResult(null);
                    }}
                    className={`text-xs px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-all border ${
                      isSelected
                        ? 'bg-purple-600 text-white border-purple-500 shadow-sm font-bold'
                        : 'bg-card text-foreground border-border hover:border-purple-400'
                    }`}
                  >
                    <span className="font-mono text-[10px] opacity-80 mr-1.5">[{q.typicalMarks}M]</span>
                    {q.title.length > 36 ? q.title.substring(0, 36) + '...' : q.title}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Legacy Bootcamp Selectors */}
        {activeMode === 'bootcamp-cases' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-5 border-t border-border/40">
            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1.5">
                Select Bootcamp Day (1 to 15)
              </label>
              <select
                value={selectedDayNumber}
                onChange={(e) => {
                  setSelectedDayNumber(parseInt(e.target.value, 10));
                  setSelectedCaseIndex(0);
                }}
                className="w-full text-xs font-semibold p-2.5 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-purple-500"
              >
                {FIFTEEN_DAY_BOOTCAMP_DATA.map((d) => (
                  <option key={d.dayNumber} value={d.dayNumber}>
                    Day {d.dayNumber}: {d.title.split('—')[0]}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1.5">
                Select Case Study (1 to 10 for Day {selectedDayNumber})
              </label>
              <select
                value={selectedCaseIndex}
                onChange={(e) => setSelectedCaseIndex(parseInt(e.target.value, 10))}
                className="w-full text-xs font-semibold p-2.5 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-purple-500"
              >
                {caseStudiesList.map((cs, idx) => (
                  <option key={cs.id || idx} value={idx}>
                    Case {idx + 1}: {cs.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      {/* ========================================================= */}
      {/* MASTER VAULT VIEWPORT */}
      {/* ========================================================= */}
      {activeMode === 'master-vault' && currentMasterQuestion && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Question Dossier & Study Guides (7 Cols) */}
          <div className="lg:col-span-7 space-y-5">
            {/* Question Card */}
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm space-y-4">
              {/* Question Badges Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold px-2.5 py-1 rounded bg-purple-500/20 text-purple-300 font-mono">
                    {currentMasterQuestion.typicalMarks} Marks • {currentMasterQuestion.targetWordLimit}
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    Est. {currentMasterQuestion.estimatedPages}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-semibold">
                  <span>Target: {currentMasterQuestion.targetTimeMinutes} mins</span>
                </div>
              </div>

              {/* Title & Question Text */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-400 block mb-1">
                  {currentMasterQuestion.hoverIntel?.topicPillar || 'Constitutional Law Examination Topic'}
                </span>
                <h2 className="text-lg md:text-xl font-bold text-foreground leading-snug">
                  {currentMasterQuestion.title}
                </h2>
              </div>

              {/* Formal Question Box */}
              <div className="p-4 rounded-xl bg-muted/40 border border-border/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-foreground uppercase tracking-wider">
                    Question as Framed in Exam:
                  </span>
                  <span className="text-[11px] font-semibold text-muted-foreground">
                    Appeared in: {currentMasterQuestion.examsAppeared?.join(', ')}
                  </span>
                </div>
                <p className="text-sm text-foreground/95 leading-relaxed font-serif whitespace-pre-line italic">
                  "{currentMasterQuestion.questionText}"
                </p>
              </div>

              {/* Examiner Trap Warning Alert */}
              {currentMasterQuestion.hoverIntel?.examinerTrapWarning && (
                <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-500/30 flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                  <div className="text-xs space-y-1">
                    <span className="font-extrabold text-red-300 uppercase tracking-wide block">
                      Examiner Trap Alert & Scoring Pitfall:
                    </span>
                    <p className="text-red-200/90 leading-relaxed font-sans">
                      {currentMasterQuestion.hoverIntel.examinerTrapWarning}
                    </p>
                  </div>
                </div>
              )}

              {/* Core Issues to Tackle */}
              {currentMasterQuestion.coreIssues && currentMasterQuestion.coreIssues.length > 0 && (
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block">
                    Core Legal Issues to Address:
                  </span>
                  <ul className="grid grid-cols-1 gap-1">
                    {currentMasterQuestion.coreIssues.map((issue, idx) => (
                      <li key={idx} className="text-xs text-foreground/90 flex items-start gap-2">
                        <span className="text-purple-400 font-bold">•</span>
                        <span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Study Tabs Navigation */}
              <div className="pt-2">
                <div className="flex items-center gap-1 border-b border-border/80 pb-2">
                  <button
                    onClick={() => setActiveDetailTab('blueprint')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      activeDetailTab === 'blueprint'
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    4-Step IRAC Blueprint
                  </button>
                  <button
                    onClick={() => setActiveDetailTab('model-answer')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      activeDetailTab === 'model-answer'
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Full Model Answer
                  </button>
                  <button
                    onClick={() => setActiveDetailTab('rubric')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      activeDetailTab === 'rubric'
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Scoring Rubric
                  </button>
                  <button
                    onClick={() => setActiveDetailTab('citations')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      activeDetailTab === 'citations'
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Articles & Citations
                  </button>
                </div>

                {/* Tab 1: 4-Step IRAC Blueprint */}
                {activeDetailTab === 'blueprint' && currentMasterQuestion.answerBlueprint && (
                  <div className="mt-4 space-y-3">
                    <div className="p-3.5 rounded-xl bg-card border border-border/80 space-y-1">
                      <span className="text-[11px] font-extrabold text-blue-400 uppercase tracking-wider block">
                        Step 1: Introduction & Textual Mandate
                      </span>
                      <p className="text-xs text-foreground/90 leading-relaxed font-sans">
                        {currentMasterQuestion.answerBlueprint.step1Intro}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-card border border-border/80 space-y-1">
                      <span className="text-[11px] font-extrabold text-indigo-400 uppercase tracking-wider block">
                        Step 2: Doctrinal Core & Substantive Legal Principles
                      </span>
                      <p className="text-xs text-foreground/90 leading-relaxed font-sans">
                        {currentMasterQuestion.answerBlueprint.step2DoctrinalCore}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-card border border-border/80 space-y-1">
                      <span className="text-[11px] font-extrabold text-amber-400 uppercase tracking-wider block">
                        Step 3: Landmark Precedent Evolution & Overrulings
                      </span>
                      <p className="text-xs text-foreground/90 leading-relaxed font-sans">
                        {currentMasterQuestion.answerBlueprint.step3PrecedentEvolution}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-card border border-border/80 space-y-1">
                      <span className="text-[11px] font-extrabold text-emerald-400 uppercase tracking-wider block">
                        Step 4: Constitutional Synthesis, Commissions & Conclusion
                      </span>
                      <p className="text-xs text-foreground/90 leading-relaxed font-sans">
                        {currentMasterQuestion.answerBlueprint.step4Conclusion}
                      </p>
                    </div>
                  </div>
                )}

                {/* Tab 2: Full Model Answer */}
                {activeDetailTab === 'model-answer' && (
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-border/40">
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                        Canonical High-Scoring Benchmark Answer:
                      </span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(currentMasterQuestion.fullModelAnswer);
                          setCopiedSuccess(true);
                          setTimeout(() => setCopiedSuccess(false), 2000);
                        }}
                        className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1"
                      >
                        {copiedSuccess ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedSuccess ? 'Copied Model Answer!' : 'Copy Model Answer'}</span>
                      </button>
                    </div>
                    <div className="p-4 rounded-xl bg-muted/30 border border-border/60">
                      <p className="text-xs md:text-sm text-foreground leading-relaxed font-serif whitespace-pre-line">
                        {currentMasterQuestion.fullModelAnswer}
                      </p>
                    </div>
                  </div>
                )}

                {/* Tab 3: Scoring Rubric */}
                {activeDetailTab === 'rubric' && (
                  <div className="mt-4 space-y-2.5">
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block">
                      Institutional Examiner Marking Matrix:
                    </span>
                    {currentMasterQuestion.scoringRubric?.map((r, rIdx) => (
                      <div
                        key={rIdx}
                        className="p-3 rounded-xl bg-card border border-border flex items-center justify-between gap-3 text-xs"
                      >
                        <span className="text-foreground/90 font-medium">{r.criterion}</span>
                        <span className="font-mono font-bold text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded border border-purple-500/20 whitespace-nowrap">
                          {r.marks} Marks
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tab 4: Articles & Citations */}
                {activeDetailTab === 'citations' && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-2">
                        Essential Constitutional Articles & Clauses:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {currentMasterQuestion.hoverIntel?.coreArticles?.map((art, aIdx) => (
                          <span
                            key={aIdx}
                            className="text-xs px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-semibold font-mono"
                          >
                            {art}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-2">
                        Mandatory Judicial Precedents & Authorities:
                      </span>
                      <div className="space-y-1.5">
                        {currentMasterQuestion.essentialCitations?.map((cit, cIdx) => (
                          <div
                            key={cIdx}
                            className="text-xs p-2 rounded-lg bg-card border border-border/80 text-foreground font-serif flex items-center gap-2"
                          >
                            <Scale className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                            <span>{cit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Drafting Canvas & Rubric Evaluation (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Writing Canvas Card */}
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm space-y-4">
              {/* Drafting Header: Timer & Metrics */}
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-muted text-foreground font-mono font-bold text-xs border border-border">
                    <Timer className="w-3.5 h-3.5 text-purple-400" />
                    <span>{formatTimer(vaultTimerRemaining)}</span>
                  </div>
                  <button
                    onClick={() => setIsVaultTimerRunning(!isVaultTimerRunning)}
                    className="text-xs font-bold px-2.5 py-1 rounded-lg bg-purple-600/20 text-purple-300 hover:bg-purple-600/30 transition-all border border-purple-500/30"
                  >
                    {isVaultTimerRunning ? 'Pause' : 'Start Timer'}
                  </button>
                  <button
                    onClick={() => {
                      setIsVaultTimerRunning(false);
                      setVaultTimerRemaining(vaultTimerDuration);
                    }}
                    className="p-1 text-muted-foreground hover:text-foreground"
                    title="Reset Timer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Word Counter */}
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-foreground">
                    {masterWordCount} Words
                  </span>
                  <span className="text-[10px] text-muted-foreground block">
                    (Target: {currentMasterQuestion.targetWordMin}–{currentMasterQuestion.targetWordMax})
                  </span>
                </div>
              </div>

              {/* Textarea */}
              <div className="space-y-1.5">
                <textarea
                  value={masterDraft}
                  onChange={(e) => setMasterDraft(e.target.value)}
                  placeholder="Draft your structured IRAC response here (Issue, Rule/Articles, Precedents, and Conclusion)..."
                  rows={14}
                  className="w-full text-xs md:text-sm font-serif p-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-purple-500 leading-relaxed resize-y"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-border/40">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleSaveMasterDraft}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold bg-card border border-border hover:border-purple-400 text-foreground flex items-center gap-1.5 transition-all"
                  >
                    <Save className="w-3.5 h-3.5 text-purple-400" />
                    <span>{savedSuccess ? 'Saved!' : 'Save Draft'}</span>
                  </button>
                  <button
                    onClick={handleCopyMasterDraft}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold bg-card border border-border hover:border-purple-400 text-foreground flex items-center gap-1.5 transition-all"
                  >
                    {copiedSuccess ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copy</span>
                  </button>
                </div>

                <button
                  onClick={handleEvaluateAnswer}
                  disabled={isEvaluating || masterWordCount < 10}
                  className="px-4 py-2 rounded-xl text-xs font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-md flex items-center gap-1.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>{isEvaluating ? 'Evaluating...' : 'Evaluate My Answer'}</span>
                </button>
              </div>

              {/* Evaluation Results Card */}
              {evaluationResult && (
                <div className="p-4 rounded-xl bg-muted/40 border border-purple-500/40 space-y-4 mt-4 animate-in fade-in duration-300">
                  {/* Score Summary */}
                  <div className="flex items-center justify-between border-b border-border/60 pb-3">
                    <div>
                      <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">
                        Estimated Rubric Score:
                      </span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl font-black text-purple-400 font-mono">
                          {evaluationResult.score}
                        </span>
                        <span className="text-sm text-muted-foreground font-mono">
                          / {evaluationResult.maxScore}
                        </span>
                        <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 font-mono ml-2">
                          {evaluationResult.percentage}%
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-bold text-foreground block">
                        {evaluationResult.wordCountStatus === 'ideal' && '✓ Optimal Length'}
                        {evaluationResult.wordCountStatus === 'too-short' && '⚠️ Below Word Target'}
                        {evaluationResult.wordCountStatus === 'too-long' && '⚠️ Exceeds Word Target'}
                      </span>
                    </div>
                  </div>

                  {/* Summary Feedback */}
                  <div className="p-3 rounded-lg bg-card border border-border text-xs text-foreground/90 font-medium">
                    {evaluationResult.summaryFeedback}
                  </div>

                  {/* Citation & Article Matches */}
                  <div className="space-y-2 text-xs">
                    <span className="font-extrabold text-foreground uppercase tracking-wider block">
                      Constitutional Grounding Audit:
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2.5 rounded-lg bg-card border border-border space-y-1">
                        <span className="font-bold text-muted-foreground text-[10px] uppercase block">
                          Core Articles Cited:
                        </span>
                        <div className="space-y-1">
                          {evaluationResult.matchedArticles.map((art, idx) => (
                            <div key={idx} className="flex items-center gap-1.5 text-[11px]">
                              {art.matched ? (
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                              ) : (
                                <span className="w-3.5 h-3.5 rounded-full border border-red-500/40 text-[9px] text-red-400 flex items-center justify-center shrink-0">
                                  ✕
                                </span>
                              )}
                              <span className={art.matched ? 'text-foreground' : 'text-muted-foreground line-through'}>
                                {art.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-card border border-border space-y-1">
                        <span className="font-bold text-muted-foreground text-[10px] uppercase block">
                          Landmark Precedents Cited:
                        </span>
                        <div className="space-y-1">
                          {evaluationResult.matchedCitations.map((cit, idx) => (
                            <div key={idx} className="flex items-center gap-1.5 text-[11px]">
                              {cit.matched ? (
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                              ) : (
                                <span className="w-3.5 h-3.5 rounded-full border border-red-500/40 text-[9px] text-red-400 flex items-center justify-center shrink-0">
                                  ✕
                                </span>
                              )}
                              <span className={`truncate ${cit.matched ? 'text-foreground' : 'text-muted-foreground line-through'}`} title={cit.name}>
                                {cit.name.split(/v\.|vs\./i)[0]}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Rubric Breakdown List */}
                  <div className="space-y-1.5 text-xs">
                    <span className="font-extrabold text-foreground uppercase tracking-wider block">
                      Criterion-Wise Breakdown:
                    </span>
                    {evaluationResult.rubricFeedback.map((rf, idx) => (
                      <div key={idx} className="p-2 rounded bg-card border border-border/80 flex items-center justify-between gap-2">
                        <div className="space-y-0.5">
                          <p className="font-medium text-foreground text-[11px]">{rf.criterion}</p>
                          <p className="text-[10px] text-muted-foreground">{rf.feedback}</p>
                        </div>
                        <span className="font-mono font-bold text-purple-400 text-xs shrink-0">
                          {rf.awarded} / {rf.maxMarks}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* BOOTCAMP CASE STUDIES VIEWPORT (LEGACY) */}
      {/* ========================================================= */}
      {activeMode === 'bootcamp-cases' && currentCase && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Factual Matrix & Record */}
          <div className="lg:col-span-6 space-y-5">
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <span className="text-xs font-bold px-2.5 py-1 rounded bg-purple-500/20 text-purple-300">
                  Case Study {selectedCaseIndex + 1} of {caseStudiesList.length}
                </span>
                <span className="text-xs font-semibold text-muted-foreground">
                  Theme: {currentCase.legalTheme}
                </span>
              </div>

              <h2 className="text-lg md:text-xl font-bold text-foreground leading-snug">
                {currentCase.title}
              </h2>

              <div className="p-4 rounded-xl bg-muted/30 border border-border/60 space-y-2">
                <span className="text-xs font-extrabold text-foreground uppercase tracking-wider block">
                  Factual Matrix & Record:
                </span>
                <p className="text-xs md:text-sm text-foreground/90 leading-relaxed font-serif whitespace-pre-line">
                  {currentCase.factualMatrix}
                </p>
              </div>

              {currentCase.statutoryApplicability && currentCase.statutoryApplicability.length > 0 && (
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block">
                    Statutory Anchors & Articles:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentCase.statutoryApplicability.map((stat, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-medium font-mono"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Drafting Canvas */}
          <div className="lg:col-span-6 space-y-5">
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <h3 className="text-sm font-bold text-foreground">Student Drafting Canvas</h3>
                <span className="text-xs font-mono font-bold text-foreground">
                  {bootcampDraft.trim() ? bootcampDraft.trim().split(/\s+/).length : 0} Words
                </span>
              </div>

              <textarea
                value={bootcampDraft}
                onChange={(e) => setBootcampDraft(e.target.value)}
                placeholder="Draft your judicial assessment and legal reasoning for this case study..."
                rows={16}
                className="w-full text-xs md:text-sm font-serif p-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-purple-500 leading-relaxed resize-y"
              />

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-border/40">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(bootcampDraft);
                    setCopiedSuccess(true);
                    setTimeout(() => setCopiedSuccess(false), 2000);
                  }}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-card border border-border hover:border-purple-400 text-foreground flex items-center gap-1.5 transition-all"
                >
                  {copiedSuccess ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>Copy</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainsAnswerWritingLabView;
