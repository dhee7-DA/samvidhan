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
  GraduationCap,
  Printer,
  Columns,
  Quote,
  Anchor,
  X,
  PlusCircle,
  ArrowRight
} from 'lucide-react';
import { MAINS_MASTER_QUESTIONS } from '../../data/mainsQuestionsData';
import type { MainsMasterQuestion, MarksTier, ExamCategory } from '../../types/mainsQuestionTypes';
import { CONSTITUTIONAL_COMMISSIONS_DATA, type ConstitutionalCommission } from '../../data/commissionsData';
import { INTRO_CONCLUSION_HOOKS_DATA, type HookPair } from '../../data/introConclusionHooksData';
import {
  FIFTEEN_DAY_BOOTCAMP_DATA,
  type BootcampDay,
  type BootcampComprehensionCaseStudy
} from '../../data/bootcamp';

const MAINS_DRAFTS_STORAGE = 'samvidhan_mains_drafts_v3';

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
  
  // Tabs: 'blueprint' | 'model-answer' | 'rubric' | 'citations' | 'commissions' | 'hooks'
  const [activeDetailTab, setActiveDetailTab] = useState<
    'blueprint' | 'model-answer' | 'rubric' | 'citations' | 'commissions' | 'hooks'
  >('blueprint');

  // Master Vault Drafting & Evaluation State
  const [masterDraft, setMasterDraft] = useState<string>('');
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);
  const [evaluationResult, setEvaluationResult] = useState<EvaluationResult | null>(null);

  // Timer State for Master Vault
  const [vaultTimerDuration, setVaultTimerDuration] = useState<number>(11 * 60);
  const [vaultTimerRemaining, setVaultTimerRemaining] = useState<number>(11 * 60);
  const [isVaultTimerRunning, setIsVaultTimerRunning] = useState<boolean>(false);
  const vaultTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Exam Pressure Sprint Mode (Strict Timer with Hard Lock)
  const [isStrictMode, setIsStrictMode] = useState<boolean>(false);
  const [isTimeExpired, setIsTimeExpired] = useState<boolean>(false);

  // Modals
  const [isDiffModalOpen, setIsDiffModalOpen] = useState<boolean>(false);
  const [isBookletModalOpen, setIsBookletModalOpen] = useState<boolean>(false);

  // Notifications
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);
  const [copiedSuccess, setCopiedSuccess] = useState<boolean>(false);
  const [insertSuccessMsg, setInsertSuccessMsg] = useState<string | null>(null);

  // ==========================================
  // BOOTCAMP CASE STUDIES STATE (LEGACY/FALLBACK)
  // ==========================================
  const [selectedDayNumber, setSelectedDayNumber] = useState<number>(1);
  const [selectedCaseIndex, setSelectedCaseIndex] = useState<number>(0);
  const [bootcampDraft, setBootcampDraft] = useState<string>('');

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

  // Matching Commission Data for Current Question
  const matchingCommissions = useMemo(() => {
    const q = currentMasterQuestion;
    const qLower = (q.title + ' ' + q.questionText + ' ' + (q.hoverIntel?.topicPillar || '')).toLowerCase();
    
    return CONSTITUTIONAL_COMMISSIONS_DATA.filter((comm) => {
      // Check article match
      const artMatch = comm.relevantArticles.some((art) => q.hoverIntel?.coreArticles?.includes(art));
      if (artMatch) return true;

      // Keyword match
      if (qLower.includes('governor') && comm.id.includes('governor')) return true;
      if (qLower.includes('defection') && comm.id.includes('defection')) return true;
      if (qLower.includes('election') && comm.id.includes('electoral')) return true;
      if (qLower.includes('water') && comm.id.includes('water')) return true;
      if (qLower.includes('sedition') && comm.id.includes('sedition')) return true;
      if (qLower.includes('civil service') && comm.id.includes('civil-services')) return true;
      if (qLower.includes('judiciary') && comm.id.includes('judicial')) return true;

      return false;
    });
  }, [currentMasterQuestion]);

  // Matching Hook Pair
  const matchingHookPair = useMemo(() => {
    const q = currentMasterQuestion;
    const qLower = (q.title + ' ' + q.questionText + ' ' + (q.hoverIntel?.topicPillar || '')).toLowerCase();

    const found = INTRO_CONCLUSION_HOOKS_DATA.find((h) => {
      if (h.topicKeyword === 'governor' && (qLower.includes('governor') || qLower.includes('art-200') || qLower.includes('356'))) return true;
      if (h.topicKeyword === 'tenth-schedule' && (qLower.includes('tenth') || qLower.includes('defection') || qLower.includes('speaker'))) return true;
      if (h.topicKeyword === 'election' && (qLower.includes('election') || qLower.includes('324') || qLower.includes('electoral'))) return true;
      if (h.topicKeyword === 'art-21' && (qLower.includes('article 21') || qLower.includes('climate') || qLower.includes('demolition') || qLower.includes('life'))) return true;
      if (h.topicKeyword === 'federalism' && (qLower.includes('federal') || qLower.includes('gst') || qLower.includes('water') || qLower.includes('239aa'))) return true;
      if (h.topicKeyword === 'judiciary' && (qLower.includes('judiciary') || qLower.includes('basic structure') || qLower.includes('142') || qLower.includes('368'))) return true;
      return false;
    });

    return found || INTRO_CONCLUSION_HOOKS_DATA[0];
  }, [currentMasterQuestion]);

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
      setIsTimeExpired(false);
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
          setIsTimeExpired(true);
          // Auto-evaluate in strict mode
          if (isStrictMode) {
            handleEvaluateAnswer();
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (vaultTimerRef.current) clearInterval(vaultTimerRef.current);
    };
  }, [isVaultTimerRunning, isStrictMode]);

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

  // Insert Text Helper
  const handleInsertText = (snippet: string, label: string) => {
    setMasterDraft((prev) => {
      const trimmed = prev.trim();
      if (!trimmed) return snippet;
      return `${trimmed}\n\n${snippet}`;
    });
    setInsertSuccessMsg(`Inserted: ${label}`);
    setTimeout(() => setInsertSuccessMsg(null), 2500);
  };

  const handleInsertIntroHook = (snippet: string) => {
    setMasterDraft((prev) => {
      const trimmed = prev.trim();
      if (!trimmed) return snippet;
      return `${snippet}\n\n${trimmed}`;
    });
    setInsertSuccessMsg('Inserted Opening Hook at start of draft!');
    setTimeout(() => setInsertSuccessMsg(null), 2500);
  };

  // Missing Gold Dust Calculation for Diff View
  const missingGoldDust = useMemo(() => {
    const text = masterDraft.toLowerCase();
    const q = currentMasterQuestion;

    // Articles missing
    const missingArticles = (q.hoverIntel?.coreArticles || []).filter((art) => {
      const numMatch = art.match(/\d+[A-Za-z]*/);
      const num = numMatch ? numMatch[0].toLowerCase() : art.toLowerCase();
      return !text.includes(art.toLowerCase()) && !(num.length >= 2 && text.includes(num));
    });

    // Citations missing
    const missingCitations = (q.essentialCitations || []).filter((cit) => {
      const cleanName = cit.split(/v\.|vs\.|,|\(/i)[0].trim().toLowerCase();
      return cleanName.length > 3 && !text.includes(cleanName);
    });

    // Doctrinal terms missing from model answer
    const highYieldTerms = [
      'Constitutional Morality',
      'Proportionality Standard',
      'Separation of Powers',
      'Basic Structure',
      'Substantive Due Process',
      'Intelligible Differentia',
      'Natural Justice',
      'Non-Obstante Clause',
      'Doctrine of Eclipse',
      'Colorable Legislation',
      'Floor Test'
    ];
    const missingTerms = highYieldTerms.filter((term) => {
      const inModel = q.fullModelAnswer.toLowerCase().includes(term.toLowerCase());
      const inDraft = text.includes(term.toLowerCase());
      return inModel && !inDraft;
    });

    return {
      missingArticles,
      missingCitations,
      missingTerms
    };
  }, [masterDraft, currentMasterQuestion]);

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
        const numMatch = art.match(/\d+[A-Za-z]*/);
        const num = numMatch ? numMatch[0].toLowerCase() : art.toLowerCase();
        const matched = text.includes(art.toLowerCase()) || (num.length >= 2 && text.includes(num));
        return { name: art, matched };
      });

      // 2. Check Citations
      const citationsList = q.essentialCitations || [];
      const matchedCitations: EvaluatedItem[] = citationsList.map((cit) => {
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
          earned = r.marks * (0.4 + 0.6 * articleRatio) * lengthMultiplier;
        } else if (idx === 1) {
          earned = r.marks * (0.5 + 0.5 * articleRatio) * lengthMultiplier;
        } else if (idx === 2) {
          earned = r.marks * (0.3 + 0.7 * citationRatio) * lengthMultiplier;
        } else {
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
        summaryFeedback =
          'Outstanding High-Scoring Response. Strong statutory clause invocation, precise landmark precedents, and structured IRAC delivery.';
      } else if (percentage >= 50) {
        summaryFeedback =
          'Solid Foundational Draft. Expand on recent Constitution Bench rulings and ensure exact clause numbers are explicitly cited to secure top-tier marks.';
      } else {
        summaryFeedback =
          'Needs Substantive Enrichment. Draft is either below word length or missing key constitutional articles and precedent authorities.';
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
    }, 500);
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
              125 Canonical Controversies • 4-Step IRAC Blueprints • Commissions & Reforms Vault • Hook Generator • Benchmark Diff Comparison • Official UPSC Answer Booklet Export.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Quick Action: Benchmark Diff & Print Booklet */}
            {activeMode === 'master-vault' && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsDiffModalOpen(true)}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-600/30 transition-all flex items-center gap-1.5"
                  title="Side-by-Side Model Answer Diff & Missing Gold Dust"
                >
                  <Columns className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Model Diff</span>
                </button>
                <button
                  onClick={() => setIsBookletModalOpen(true)}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-600/20 text-amber-300 border border-amber-500/30 hover:bg-amber-600/30 transition-all flex items-center gap-1.5"
                  title="Official UPSC / Judicial Printable Answer Booklet"
                >
                  <Printer className="w-3.5 h-3.5 text-amber-400" />
                  <span>Print Booklet</span>
                </button>
              </div>
            )}

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

      {/* Insert Notification Toast */}
      {insertSuccessMsg && (
        <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-2 animate-in fade-in duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{insertSuccessMsg}</span>
        </div>
      )}

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

              {/* Study Tabs Navigation (Expanded to 6 Tabs) */}
              <div className="pt-2">
                <div className="flex flex-wrap items-center gap-1 border-b border-border/80 pb-2">
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
                  <button
                    onClick={() => setActiveDetailTab('commissions')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                      activeDetailTab === 'commissions'
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Quote className="w-3 h-3 text-purple-400" />
                    <span>Commissions Vault</span>
                  </button>
                  <button
                    onClick={() => setActiveDetailTab('hooks')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                      activeDetailTab === 'hooks'
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Anchor className="w-3 h-3 text-amber-400" />
                    <span>Hook Generator</span>
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
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setIsDiffModalOpen(true)}
                          className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                        >
                          <Columns className="w-3.5 h-3.5" />
                          <span>Compare Diff</span>
                        </button>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(currentMasterQuestion.fullModelAnswer);
                            setCopiedSuccess(true);
                            setTimeout(() => setCopiedSuccess(false), 2000);
                          }}
                          className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1"
                        >
                          {copiedSuccess ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedSuccess ? 'Copied Model!' : 'Copy Model'}</span>
                        </button>
                      </div>
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

                {/* Tab 5: Commissions Vault */}
                {activeDetailTab === 'commissions' && (
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block">
                        Authoritative Commissions Mapped to this Controversy:
                      </span>
                      <span className="text-[11px] text-purple-400 font-semibold">
                        {matchingCommissions.length} Available
                      </span>
                    </div>

                    {matchingCommissions.length === 0 ? (
                      <div className="p-4 rounded-xl bg-card border border-border text-center text-xs text-muted-foreground">
                        No direct commission mapping found for this specific sub-clause. Refer to Sarkaria or Punchhi Commission general federal principles.
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {matchingCommissions.map((comm) => (
                          <div
                            key={comm.id}
                            className="p-3.5 rounded-xl bg-card border border-border/90 space-y-2 hover:border-purple-500/40 transition-all"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-foreground">
                                {comm.commissionName} ({comm.year})
                              </span>
                              <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 font-semibold">
                                Chair: {comm.chairperson}
                              </span>
                            </div>

                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {comm.keyRecommendation}
                            </p>

                            <div className="p-2.5 rounded-lg bg-muted/40 border border-border/60 text-[11px] text-foreground/90 font-serif italic">
                              "{comm.quoteSnippet}"
                            </div>

                            <div className="flex justify-end pt-1">
                              <button
                                onClick={() => handleInsertText(comm.quoteSnippet, comm.commissionName)}
                                className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-purple-600/20 text-purple-300 hover:bg-purple-600/30 border border-purple-500/30 flex items-center gap-1 transition-all"
                              >
                                <PlusCircle className="w-3 h-3 text-purple-400" />
                                <span>Insert Quote into My Draft</span>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Tab 6: Hook Generator */}
                {activeDetailTab === 'hooks' && (
                  <div className="mt-4 space-y-4">
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block">
                      Score-Maximizing Opening & Closing Hooks:
                    </span>

                    {/* Opening Hooks Box */}
                    <div className="p-4 rounded-xl bg-card border border-border/90 space-y-3">
                      <span className="text-xs font-extrabold text-blue-400 uppercase tracking-wide flex items-center gap-1.5">
                        <Anchor className="w-3.5 h-3.5" />
                        <span>Opening Hooks (The First 30 Seconds)</span>
                      </span>

                      {/* Style A: Statutory */}
                      <div className="space-y-1.5 p-3 rounded-lg bg-muted/30 border border-border/60">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
                          Style A: Statutory & Clause-Precise Hook
                        </span>
                        <p className="text-xs text-foreground/90 font-serif leading-relaxed italic">
                          "{matchingHookPair.openingHooks.statutoryHook}"
                        </p>
                        <div className="flex justify-end pt-1">
                          <button
                            onClick={() => handleInsertIntroHook(matchingHookPair.openingHooks.statutoryHook)}
                            className="px-2 py-0.5 rounded text-[11px] font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1"
                          >
                            <PlusCircle className="w-3 h-3" />
                            <span>Insert as Opening Hook</span>
                          </button>
                        </div>
                      </div>

                      {/* Style B: Judicial */}
                      <div className="space-y-1.5 p-3 rounded-lg bg-muted/30 border border-border/60">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
                          Style B: Constitution Bench Judicial Anchor
                        </span>
                        <p className="text-xs text-foreground/90 font-serif leading-relaxed italic">
                          "{matchingHookPair.openingHooks.judicialHook}"
                        </p>
                        <div className="flex justify-end pt-1">
                          <button
                            onClick={() => handleInsertIntroHook(matchingHookPair.openingHooks.judicialHook)}
                            className="px-2 py-0.5 rounded text-[11px] font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                          >
                            <PlusCircle className="w-3 h-3" />
                            <span>Insert as Opening Hook</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Closing Hooks Box */}
                    <div className="p-4 rounded-xl bg-card border border-border/90 space-y-3">
                      <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-wide flex items-center gap-1.5">
                        <Scale className="w-3.5 h-3.5" />
                        <span>Closing Hooks (Forward-Looking Conclusions)</span>
                      </span>

                      {/* Style A: Constitutional Morality */}
                      <div className="space-y-1.5 p-3 rounded-lg bg-muted/30 border border-border/60">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
                          Style A: Constitutional Morality & Living Tree Synthesis
                        </span>
                        <p className="text-xs text-foreground/90 font-serif leading-relaxed italic">
                          "{matchingHookPair.closingHooks.constitutionalMoralityHook}"
                        </p>
                        <div className="flex justify-end pt-1">
                          <button
                            onClick={() => handleInsertText(matchingHookPair.closingHooks.constitutionalMoralityHook, 'Constitutional Morality Conclusion')}
                            className="px-2 py-0.5 rounded text-[11px] font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                          >
                            <PlusCircle className="w-3 h-3" />
                            <span>Insert as Conclusion</span>
                          </button>
                        </div>
                      </div>

                      {/* Style B: Institutional Reform */}
                      <div className="space-y-1.5 p-3 rounded-lg bg-muted/30 border border-border/60">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
                          Style B: Institutional Reform & Commissions Roadmap
                        </span>
                        <p className="text-xs text-foreground/90 font-serif leading-relaxed italic">
                          "{matchingHookPair.closingHooks.institutionalReformHook}"
                        </p>
                        <div className="flex justify-end pt-1">
                          <button
                            onClick={() => handleInsertText(matchingHookPair.closingHooks.institutionalReformHook, 'Institutional Reform Conclusion')}
                            className="px-2 py-0.5 rounded text-[11px] font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
                          >
                            <PlusCircle className="w-3 h-3" />
                            <span>Insert as Conclusion</span>
                          </button>
                        </div>
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
              {/* Mode Toggle: Practice vs Strict Sprint */}
              <div className="flex items-center justify-between pb-2 border-b border-border/40">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setIsStrictMode(false);
                      setIsTimeExpired(false);
                    }}
                    className={`text-[11px] font-bold px-2.5 py-1 rounded-lg transition-all ${
                      !isStrictMode ? 'bg-purple-600 text-white' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Standard Practice
                  </button>
                  <button
                    onClick={() => {
                      setIsStrictMode(true);
                      setIsTimeExpired(false);
                    }}
                    className={`text-[11px] font-bold px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 ${
                      isStrictMode ? 'bg-amber-600 text-white shadow-sm' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Flame className="w-3 h-3" />
                    <span>⚡ Strict Exam Sprint</span>
                  </button>
                </div>

                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-foreground">
                    {masterWordCount} Words
                  </span>
                  <span className="text-[10px] text-muted-foreground block">
                    (Target: {currentMasterQuestion.targetWordMin}–{currentMasterQuestion.targetWordMax})
                  </span>
                </div>
              </div>

              {/* Drafting Header: Timer & Metrics */}
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <div className="flex items-center gap-2">
                  <div
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-mono font-bold text-xs border ${
                      vaultTimerRemaining <= 120 && isStrictMode
                        ? 'bg-red-500/20 text-red-300 border-red-500/40 animate-pulse'
                        : 'bg-muted text-foreground border-border'
                    }`}
                  >
                    <Timer className="w-3.5 h-3.5 text-purple-400" />
                    <span>{formatTimer(vaultTimerRemaining)}</span>
                  </div>
                  <button
                    onClick={() => setIsVaultTimerRunning(!isVaultTimerRunning)}
                    disabled={isStrictMode && isTimeExpired}
                    className="text-xs font-bold px-2.5 py-1 rounded-lg bg-purple-600/20 text-purple-300 hover:bg-purple-600/30 transition-all border border-purple-500/30 disabled:opacity-50"
                  >
                    {isVaultTimerRunning ? 'Pause' : 'Start Timer'}
                  </button>
                  <button
                    onClick={() => {
                      setIsVaultTimerRunning(false);
                      setIsTimeExpired(false);
                      setVaultTimerRemaining(vaultTimerDuration);
                    }}
                    className="p-1 text-muted-foreground hover:text-foreground"
                    title="Reset Timer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>

                {isStrictMode && (
                  <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    Hard Lock at 0:00
                  </span>
                )}
              </div>

              {/* Textarea */}
              <div className="space-y-1.5">
                <textarea
                  value={masterDraft}
                  onChange={(e) => setMasterDraft(e.target.value)}
                  disabled={isStrictMode && isTimeExpired}
                  placeholder="Draft your structured IRAC response here (Issue, Rule/Articles, Precedents, and Conclusion)..."
                  rows={13}
                  className="w-full text-xs md:text-sm font-serif p-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-purple-500 leading-relaxed resize-y disabled:opacity-60 disabled:cursor-not-allowed"
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

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsDiffModalOpen(true)}
                    className="px-3 py-1.5 rounded-xl text-xs font-bold bg-muted hover:bg-muted/80 text-foreground border border-border flex items-center gap-1 transition-all"
                  >
                    <Columns className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Compare</span>
                  </button>
                  <button
                    onClick={handleEvaluateAnswer}
                    disabled={isEvaluating || masterWordCount < 10}
                    className="px-4 py-2 rounded-xl text-xs font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-md flex items-center gap-1.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>{isEvaluating ? 'Evaluating...' : 'Evaluate My Answer'}</span>
                  </button>
                </div>
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
                      <button
                        onClick={() => setIsBookletModalOpen(true)}
                        className="text-[11px] font-bold text-purple-400 hover:text-purple-300 mt-1 flex items-center gap-1 ml-auto"
                      >
                        <Printer className="w-3 h-3" />
                        <span>Print Evaluated Booklet</span>
                      </button>
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

      {/* ========================================================= */}
      {/* MODAL 1: SIDE-BY-SIDE BENCHMARK DIFF & MISSING GOLD DUST */}
      {/* ========================================================= */}
      {isDiffModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-card border border-border rounded-2xl w-full max-w-6xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="p-5 border-b border-border flex items-center justify-between bg-muted/30">
              <div className="flex items-center gap-2">
                <Columns className="w-5 h-5 text-indigo-400" />
                <h3 className="text-base font-bold text-foreground">
                  Side-by-Side Model Answer Diff & Missing Gold Dust Audit
                </h3>
              </div>
              <button
                onClick={() => setIsDiffModalOpen(false)}
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Missing Gold Dust Banner */}
            <div className="p-4 bg-purple-950/20 border-b border-purple-500/30 space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-purple-300 block flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Missing High-Yield Gold Dust in Your Draft:</span>
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                {missingGoldDust.missingArticles.map((art, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleInsertText(art, art)}
                    className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/20 font-mono flex items-center gap-1"
                  >
                    <span>+ {art}</span>
                  </button>
                ))}
                {missingGoldDust.missingCitations.map((cit, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleInsertText(cit, cit)}
                    className="px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-300 hover:bg-purple-500/20 font-serif flex items-center gap-1"
                  >
                    <span>+ {cit.split(/v\.|vs\./i)[0]}</span>
                  </button>
                ))}
                {missingGoldDust.missingTerms.map((term, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleInsertText(term, term)}
                    className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 flex items-center gap-1"
                  >
                    <span>+ {term}</span>
                  </button>
                ))}
                {missingGoldDust.missingArticles.length === 0 &&
                  missingGoldDust.missingCitations.length === 0 &&
                  missingGoldDust.missingTerms.length === 0 && (
                    <span className="text-emerald-400 font-semibold">
                      ✓ Extraordinary coverage! All critical articles, precedents, and doctrines cited.
                    </span>
                  )}
              </div>
            </div>

            {/* Split Screen Content */}
            <div className="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
              {/* Left Side: Student Draft */}
              <div className="space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-border">
                  <span className="text-xs font-extrabold text-foreground uppercase tracking-wider">
                    Your Written Draft ({masterWordCount} Words)
                  </span>
                  <span className="text-[11px] text-muted-foreground font-mono">
                    Target: {currentMasterQuestion.targetWordMin}–{currentMasterQuestion.targetWordMax}
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-background border border-border text-xs md:text-sm font-serif leading-relaxed min-h-[380px] whitespace-pre-line text-foreground/90">
                  {masterDraft.trim() || 'No draft written yet. Write your response in the drafting canvas to compare!'}
                </div>
              </div>

              {/* Right Side: Benchmark Model Answer */}
              <div className="space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-border">
                  <span className="text-xs font-extrabold text-purple-400 uppercase tracking-wider">
                    Benchmark Model Answer ({currentMasterQuestion.typicalMarks} Marks)
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    IRAC Structured Framework
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-muted/40 border border-purple-500/30 text-xs md:text-sm font-serif leading-relaxed min-h-[380px] whitespace-pre-line text-foreground">
                  {currentMasterQuestion.fullModelAnswer}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-border flex items-center justify-between bg-muted/20">
              <span className="text-xs text-muted-foreground">
                Tip: Click any missing gold-dust badge above to instantly insert it into your draft.
              </span>
              <button
                onClick={() => setIsDiffModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-purple-600 text-white hover:bg-purple-500 transition-all"
              >
                Done Reviewing
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL 2: OFFICIAL UPSC/JUDICIARY PRINTABLE ANSWER BOOKLET */}
      {/* ========================================================= */}
      {isBookletModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-card border border-border rounded-2xl w-full max-w-4xl max-h-[94vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Modal Action Bar */}
            <div className="p-4 border-b border-border flex items-center justify-between bg-muted/40">
              <div className="flex items-center gap-2">
                <Printer className="w-5 h-5 text-amber-400" />
                <h3 className="text-sm font-bold text-foreground">
                  Official UPSC / Judicial Services Answer Booklet View
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-extrabold bg-amber-600 hover:bg-amber-500 text-white flex items-center gap-1.5 shadow-sm transition-all"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save as PDF</span>
                </button>
                <button
                  onClick={() => setIsBookletModalOpen(false)}
                  className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Booklet Content (Formatted for Print) */}
            <div id="printable-upsc-booklet" className="p-8 overflow-y-auto bg-white text-zinc-950 font-serif space-y-6 flex-1">
              {/* UPSC Header */}
              <div className="text-center border-b-2 border-zinc-900 pb-4 space-y-1">
                <h2 className="text-xs font-bold tracking-widest uppercase text-zinc-600 font-sans">
                  संघ लोक सेवा आयोग / राज्य न्यायिक सेवा परीक्षा
                </h2>
                <h1 className="text-lg font-black tracking-wider uppercase text-zinc-900 font-sans">
                  UNION PUBLIC SERVICE COMMISSION / STATE JUDICIAL SERVICES
                </h1>
                <p className="text-xs font-semibold text-zinc-700 font-sans">
                  CIVIL SERVICES (MAINS) EXAMINATION • CONSTITUTIONAL LAW & GS-2
                </p>
                <div className="flex justify-between text-[11px] font-mono text-zinc-600 pt-2 border-t border-zinc-300 mt-2 font-sans">
                  <span>SUBJECT: CONSTITUTIONAL LAW OF INDIA</span>
                  <span>MAX MARKS: {currentMasterQuestion.typicalMarks}</span>
                  <span>WORD LIMIT: {currentMasterQuestion.targetWordLimit}</span>
                </div>
              </div>

              {/* Margins Warning */}
              <div className="flex justify-between text-[10px] uppercase font-bold tracking-wider text-zinc-400 border-b border-zinc-200 pb-1 font-sans">
                <span>← इस हाशिए में न लिखें / DO NOT WRITE IN THIS MARGIN</span>
                <span>DO NOT WRITE IN THIS MARGIN / इस हाशिए में न लिखें →</span>
              </div>

              {/* Question Box */}
              <div className="p-4 border-2 border-zinc-800 rounded bg-zinc-50 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold font-sans text-zinc-800">
                  <span>QUESTION [{currentMasterQuestion.typicalMarks} MARKS]</span>
                  <span>TIME ALLOWED: {currentMasterQuestion.targetTimeMinutes} MINS</span>
                </div>
                <p className="text-sm font-serif leading-relaxed text-zinc-950 font-medium italic">
                  "{currentMasterQuestion.questionText}"
                </p>
              </div>

              {/* Candidate Written Answer */}
              <div className="space-y-2 px-2">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-600 font-sans block">
                  उत्तर / CANDIDATE'S RESPONSE:
                </span>
                <div className="p-4 border border-zinc-300 rounded bg-white min-h-[360px] text-sm leading-relaxed whitespace-pre-line text-zinc-900 font-serif">
                  {masterDraft.trim() || '[No response drafted yet]'}
                </div>
              </div>

              {/* Examiner Evaluation Slip (Attached) */}
              {evaluationResult && (
                <div className="p-4 border-2 border-zinc-900 rounded bg-zinc-50 space-y-3 font-sans mt-6">
                  <div className="flex items-center justify-between border-b border-zinc-400 pb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                      EXAMINER MARKS SLIP & SCORING RECORD
                    </span>
                    <span className="text-sm font-black font-mono text-zinc-900">
                      AWARDED: {evaluationResult.score} / {evaluationResult.maxScore} ({evaluationResult.percentage}%)
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="font-bold text-zinc-700 block mb-1">CONSTITUTIONAL ARTICLES CHECKLIST:</span>
                      <ul className="space-y-0.5 text-[11px]">
                        {evaluationResult.matchedArticles.map((art, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <span>{art.matched ? '☑' : '☐'}</span>
                            <span className={art.matched ? 'font-bold text-zinc-900' : 'text-zinc-500'}>
                              {art.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="font-bold text-zinc-700 block mb-1">JUDICIAL PRECEDENTS CHECKLIST:</span>
                      <ul className="space-y-0.5 text-[11px]">
                        {evaluationResult.matchedCitations.map((cit, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <span>{cit.matched ? '☑' : '☐'}</span>
                            <span className={cit.matched ? 'font-bold text-zinc-900' : 'text-zinc-500'}>
                              {cit.name.split(/v\.|vs\./i)[0]}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-zinc-300 text-xs text-zinc-800">
                    <span className="font-bold">EXAMINER REMARKS: </span>
                    <span>{evaluationResult.summaryFeedback}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-border flex items-center justify-between bg-muted/20">
              <span className="text-xs text-muted-foreground">
                Formatted according to official UPSC / State Judicial examination specifications.
              </span>
              <button
                onClick={() => setIsBookletModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-muted hover:bg-muted/80 text-foreground transition-all"
              >
                Close Booklet
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainsAnswerWritingLabView;
