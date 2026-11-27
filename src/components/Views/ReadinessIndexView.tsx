import React, { useState, useMemo, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { springs, modalBackdropVariants, modalPanelVariants, staggerContainerVariants, staggerItemVariants } from '../../lib/motionTokens';
import { SlidingSegmentedControl } from '../Common/EditorialMotionCards';
import {
  Target,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  Flame,
  FileText,
  Layers,
  Award,
  Clock,
  Printer,
  RotateCcw,
  Search,
  Filter,
  ChevronRight,
  ChevronDown,
  X,
  ExternalLink,
  SlidersHorizontal,
  BrainCircuit,
  TrendingUp,
  ShieldAlert,
  ArrowRight,
  Check,
  BookOpen,
  Scale,
  Zap,
  BarChart3,
  Activity,
  Gauge,
  Play,
  ShieldCheck,
  Lock
} from 'lucide-react';
import {
  computeConstitutionalReadinessReport,
  EXAM_PROFILES,
  saveSelfCalibration,
  recordDiagnosticAnswer,
  computePillarReadinessStats,
  calculatePrelimsRiskProfile,
  generateWeakestLinkDrill,
  recordWeakestLinkDrillCompletion,
  type ExamProfileType,
  type ConstitutionalReadinessReport,
  type PartReadinessStats,
  type DiagnosticMCQ,
  type PillarReadinessStats,
  type PrelimsRiskProfile,
  type WeakestLinkDrill
} from '../../services/readinessIndexService';
import { useTheme } from '../../context/ThemeContext';
import { ConstitutionalWatermark } from '../Common/ConstitutionalWatermark';

export const ReadinessIndexView: React.FC = () => {
  const { setActiveTab, launchFlashcardDeck, setSelectedPartId } = useTheme();

  // Active exam profile
  const [selectedProfile, setSelectedProfile] = useState<ExamProfileType>('holistic');
  const [viewMode, setViewMode] = useState<'grid' | 'pillars' | 'grouped'>('pillars');
  const [filterTier, setFilterTier] = useState<'all' | 'vulnerable' | 'moderate' | 'mastery'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'partNumber' | 'scoreAsc' | 'scoreDesc' | 'weight'>('partNumber');

  // Trigger state to force recalculation on answers or calibration updates
  const [refreshTrigger, setRefreshTrigger] = useState<number>(0);

  // Deep-dive inspection drawer
  const [activePartForModal, setActivePartForModal] = useState<PartReadinessStats | null>(null);

  // Diagnostic Test Challenge State
  const [isDiagnosticModalOpen, setIsDiagnosticModalOpen] = useState<boolean>(false);
  const [diagnosticQuestionsList, setDiagnosticQuestionsList] = useState<DiagnosticMCQ[]>([]);
  const [currentDiagIndex, setCurrentDiagIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState<boolean>(false);
  const [diagScore, setDiagScore] = useState<{ correct: number; total: number }>({ correct: 0, total: 0 });

  // Self-calibration slider state in modal
  const [offlineBonusSlider, setOfflineBonusSlider] = useState<number>(0);

  // Prelims Risk Profile Controls
  const [targetAttempts, setTargetAttempts] = useState<number>(85);
  const [estimatedAccuracy, setEstimatedAccuracy] = useState<number>(74);

  // Weakest Link 15-Minute Daily Prescription Modal State
  const [isWeakestLinkModalOpen, setIsWeakestLinkModalOpen] = useState<boolean>(false);
  const [activeWeakestDrill, setActiveWeakestDrill] = useState<WeakestLinkDrill | null>(null);
  const [weakestStage, setWeakestStage] = useState<'mcqs' | 'precedent' | 'trap' | 'summary'>('mcqs');
  const [weakestMcqIndex, setWeakestMcqIndex] = useState<number>(0);
  const [weakestSelectedOption, setWeakestSelectedOption] = useState<number | null>(null);
  const [weakestOptionRevealed, setWeakestOptionRevealed] = useState<boolean>(false);
  const [weakestPrecedentSelected, setWeakestPrecedentSelected] = useState<string | null>(null);
  const [weakestPrecedentRevealed, setWeakestPrecedentRevealed] = useState<boolean>(false);
  const [weakestTrapChoice, setWeakestTrapChoice] = useState<boolean | null>(null);
  const [weakestTrapRevealed, setWeakestTrapRevealed] = useState<boolean>(false);
  const [weakestScore, setWeakestScore] = useState<number>(0);
  const [weakestTimerSeconds, setWeakestTimerSeconds] = useState<number>(15 * 60);

  // Calculate master report
  const report: ConstitutionalReadinessReport = useMemo(() => {
    return computeConstitutionalReadinessReport(selectedProfile);
  }, [selectedProfile, refreshTrigger]);

  // Compute Syllabus Pillars stats
  const pillarStats: PillarReadinessStats[] = useMemo(() => {
    return computePillarReadinessStats(report);
  }, [report]);

  // Compute Prelims Risk Profile
  const riskProfile: PrelimsRiskProfile = useMemo(() => {
    return calculatePrelimsRiskProfile(targetAttempts, estimatedAccuracy);
  }, [targetAttempts, estimatedAccuracy]);

  // Keep modal active part in sync with latest report data
  useEffect(() => {
    if (activePartForModal) {
      const updated = report.partsStats.find((p) => p.part.id === activePartForModal.part.id);
      if (updated) {
        setActivePartForModal(updated);
        setOfflineBonusSlider(updated.selfCalibrationBonus);
      }
    }
  }, [report, activePartForModal?.part.id]);

  // 15-Minute Weakest Link Timer Effect
  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null;
    if (isWeakestLinkModalOpen && weakestStage !== 'summary' && weakestTimerSeconds > 0) {
      timer = setInterval(() => {
        setWeakestTimerSeconds((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isWeakestLinkModalOpen, weakestStage, weakestTimerSeconds]);

  // Filtered & Sorted Parts
  const displayedParts = useMemo(() => {
    return report.partsStats
      .filter((item) => {
        if (filterTier !== 'all' && item.tier !== filterTier) return false;
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchTitle = item.part.title.toLowerCase().includes(q);
          const matchPart = item.part.partNumber.toLowerCase().includes(q);
          const matchRange = item.part.articlesRange.toLowerCase().includes(q);
          const matchCategory = item.part.category.toLowerCase().includes(q);
          if (!matchTitle && !matchPart && !matchRange && !matchCategory) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'scoreAsc') return a.readinessScore - b.readinessScore;
        if (sortBy === 'scoreDesc') return b.readinessScore - a.readinessScore;
        if (sortBy === 'weight') {
          const wA = a.part.examWeights[selectedProfile] || 1;
          const wB = b.part.examWeights[selectedProfile] || 1;
          return wB - wA;
        }
        return 0;
      });
  }, [report.partsStats, filterTier, searchQuery, sortBy, selectedProfile]);

  // Grouped Parts by Category
  const groupedParts = useMemo(() => {
    const groups: Record<string, PartReadinessStats[]> = {};
    displayedParts.forEach((item) => {
      const cat = item.part.category;
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(item);
    });
    return groups;
  }, [displayedParts]);

  // Launch Standard Diagnostic Drill
  const handleLaunchDiagnosticDrill = (preselectedPartId?: string) => {
    let pool: DiagnosticMCQ[] = [];
    if (preselectedPartId) {
      const found = report.partsStats.find((p) => p.part.id === preselectedPartId);
      if (found) pool = [...found.part.diagnosticQuestions];
    } else {
      const prioritizedParts = [...report.partsStats].sort((a, b) => a.readinessScore - b.readinessScore);
      prioritizedParts.forEach((p) => {
        pool.push(...p.part.diagnosticQuestions);
      });
    }

    if (pool.length === 0) return;
    const shuffled = [...pool].sort(() => 0.5 - Math.random()).slice(0, 10);
    setDiagnosticQuestionsList(shuffled);
    setCurrentDiagIndex(0);
    setSelectedOption(null);
    setIsAnswerRevealed(false);
    setDiagScore({ correct: 0, total: 0 });
    setIsDiagnosticModalOpen(true);
  };

  const handleSelectDiagnosticOption = (index: number) => {
    if (isAnswerRevealed) return;
    setSelectedOption(index);
    setIsAnswerRevealed(true);

    const q = diagnosticQuestionsList[currentDiagIndex];
    const isCorrect = index === q.correctIndex;
    recordDiagnosticAnswer(q.id, index, isCorrect);

    setDiagScore((prev) => ({
      correct: isCorrect ? prev.correct + 1 : prev.correct,
      total: prev.total + 1
    }));

    setRefreshTrigger((prev) => prev + 1);
  };

  const handleNextDiagnosticQuestion = () => {
    if (currentDiagIndex < diagnosticQuestionsList.length - 1) {
      setCurrentDiagIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerRevealed(false);
    } else {
      setIsDiagnosticModalOpen(false);
    }
  };

  // Launch Weakest Link 15-Minute Workout (global or targeted to a specific Part)
  const handleLaunchWeakestLink = (focusPartId?: string) => {
    const drill = generateWeakestLinkDrill(report, focusPartId);
    setActiveWeakestDrill(drill);
    setWeakestStage('mcqs');
    setWeakestMcqIndex(0);
    setWeakestSelectedOption(null);
    setWeakestOptionRevealed(false);
    setWeakestPrecedentSelected(null);
    setWeakestPrecedentRevealed(false);
    setWeakestTrapChoice(null);
    setWeakestTrapRevealed(false);
    setWeakestScore(0);
    setWeakestTimerSeconds(15 * 60);
    setIsWeakestLinkModalOpen(true);
  };

  const handleSelectWeakestMcqOption = (index: number) => {
    if (weakestOptionRevealed || !activeWeakestDrill) return;
    setWeakestSelectedOption(index);
    setWeakestOptionRevealed(true);

    const currentQ = activeWeakestDrill.stage1MCQs[weakestMcqIndex];
    if (index === currentQ.correctIndex) {
      setWeakestScore((prev) => prev + 1);
    }
  };

  const handleNextWeakestMcq = () => {
    if (!activeWeakestDrill) return;
    if (weakestMcqIndex < activeWeakestDrill.stage1MCQs.length - 1) {
      setWeakestMcqIndex((prev) => prev + 1);
      setWeakestSelectedOption(null);
      setWeakestOptionRevealed(false);
    } else {
      setWeakestStage('precedent');
    }
  };

  const handleSelectWeakestPrecedent = (optId: string) => {
    if (weakestPrecedentRevealed || !activeWeakestDrill) return;
    setWeakestPrecedentSelected(optId);
    setWeakestPrecedentRevealed(true);

    const isCorrect = activeWeakestDrill.stage2Precedent.options.find((o) => o.id === optId)?.isCorrect;
    if (isCorrect) {
      setWeakestScore((prev) => prev + 1);
    }
  };

  const handleSelectWeakestTrap = (userSaidTrap: boolean) => {
    if (weakestTrapRevealed || !activeWeakestDrill) return;
    setWeakestTrapChoice(userSaidTrap);
    setWeakestTrapRevealed(true);

    if (userSaidTrap === activeWeakestDrill.stage3TrapClause.isDeceptiveTrap) {
      setWeakestScore((prev) => prev + 1);
    }
  };

  const handleFinishWeakestLinkDrill = () => {
    if (activeWeakestDrill) {
      recordWeakestLinkDrillCompletion(activeWeakestDrill.targetPartIds, weakestScore);
      setRefreshTrigger((prev) => prev + 1);
    }
    setWeakestStage('summary');
  };

  const handleSaveCalibrationBonus = (partId: string, val: number) => {
    saveSelfCalibration(partId, val);
    setOfflineBonusSlider(val);
    setRefreshTrigger((prev) => prev + 1);
  };

  const openLeadArticleInBareAct = (stat: PartReadinessStats) => {
    const rawNum = stat.part.highYieldArticles[0]?.number || '1';
    const artId = rawNum.replace(/[^0-9A-Za-z]/g, '').toUpperCase() || '1';
    try {
      localStorage.setItem('samvidhan_active_article', artId);
      window.dispatchEvent(new CustomEvent('samvidhan_navigate_article', { detail: { articleId: artId } }));
    } catch {
      // ignore storage errors
    }
    setActivePartForModal(null);
    setActiveTab('articles-master');
  };

  const handlePrintAuditReport = () => {
    window.print();
  };

  // Modernized monochrome & disciplined score styling
  const getScoreColor = (score: number) => {
    if (score >= 75) return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
    if (score >= 50) return 'text-zinc-200 bg-zinc-800 border-zinc-700';
    return 'text-rose-400 bg-rose-500/10 border-rose-500/30';
  };

  const getScoreBarGradient = (score: number) => {
    if (score >= 75) return 'from-emerald-500 to-teal-400';
    if (score >= 50) return 'from-zinc-400 to-zinc-600';
    return 'from-rose-500 to-red-500';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-8 animate-fadeIn">
      {/* =========================================================================
          HEADER: Title, Subtitle, Quick Controls
          ========================================================================= */}
      <div className="relative overflow-hidden p-5 sm:p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] surface-specular bg-editorial-grid flex flex-col md:flex-row md:items-center justify-between gap-4">
        <ConstitutionalWatermark variant="pillar" position="center-right" size="md" animated />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-mono font-bold bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
              <Target className="w-3.5 h-3.5" />
              Syllabus Diagnostic Engine
            </span>
            <span className="text-xs font-mono text-[var(--text-muted)]">
              25 Constitutional Parts &bull; 10 Examination Pillars
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Constitutional Readiness Index &amp; Syllabus Heatmap
          </h1>
          <p className="text-sm text-[var(--text-secondary)] mt-1 max-w-3xl leading-relaxed">
            Multi-dimensional diagnostic matrix synthesizing Prelims negative penalty tolerance, 25-part statutory retention, and targeted weakest-link daily prescriptions.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => handleLaunchWeakestLink()}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-mono text-xs font-bold shadow-md transition-all btn-tactile cursor-pointer"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>15-MIN WEAKEST LINK</span>
          </button>
          <button
            onClick={() => handleLaunchDiagnosticDrill()}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] font-mono text-xs font-bold shadow-xs transition-all btn-tactile cursor-pointer"
          >
            <Zap className="w-4 h-4 text-zinc-300" />
            <span>10-Q DIAGNOSTIC</span>
          </button>
          <button
            onClick={handlePrintAuditReport}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] font-mono text-xs font-semibold transition-all btn-tactile cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>PRINT</span>
          </button>
        </div>
      </div>

      {/* =========================================================================
          EXAM PROFILE SELECTOR
          ========================================================================= */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)]">
            Select Target Examination Focus
          </span>
          <span className="text-xs font-mono text-zinc-300">
            {EXAM_PROFILES[selectedProfile].focusArea}
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
          {(Object.keys(EXAM_PROFILES) as ExamProfileType[]).map((key) => {
            const p = EXAM_PROFILES[key];
            const isSelected = selectedProfile === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedProfile(key)}
                className={`p-3 rounded-xl text-left border transition-all btn-tactile flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-zinc-900 border-zinc-400 ring-1 ring-zinc-400 shadow-sm'
                    : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:border-zinc-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--text-muted)] font-bold">
                      {p.badge}
                    </span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-zinc-200" />}
                  </div>
                  <div className="text-xs font-bold text-[var(--text-primary)] leading-tight">
                    {p.title}
                  </div>
                </div>
                <div className="text-[10px] text-[var(--text-muted)] mt-2 line-clamp-2">
                  {p.description}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          HERO SCOREBOARD: MASTER GAUGE & AGGREGATE STATS
          ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 p-5 sm:p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm">
        {/* Left: Master Circular Score Gauge */}
        <div className="lg:col-span-5 flex flex-col sm:flex-row items-center justify-center gap-6 p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
          <div className="relative w-36 h-36 flex items-center justify-center shrink-0">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="50"
                className="stroke-[var(--border-subtle)] fill-none"
                strokeWidth="10"
              />
              <circle
                cx="60"
                cy="60"
                r="50"
                className="fill-none transition-all duration-1000 ease-out"
                stroke="currentColor"
                strokeWidth="10"
                strokeDasharray={314}
                strokeDashoffset={314 - (314 * report.overallScore) / 100}
                strokeLinecap="round"
                style={{ color: report.tierColor }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-extrabold font-mono text-[var(--text-primary)]">
                {report.overallScore}%
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
                Readiness
              </span>
            </div>
          </div>

          <div className="flex flex-col text-center sm:text-left">
            <span
              className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border mb-1.5 self-center sm:self-start"
              style={{
                borderColor: `${report.tierColor}40`,
                backgroundColor: `${report.tierColor}15`,
                color: report.tierColor
              }}
            >
              {report.tierBadge}
            </span>
            <div className="text-base font-extrabold text-[var(--text-primary)]">
              {report.tierTitle}
            </div>
            <p className="text-xs text-[var(--text-secondary)] mt-1 max-w-xs leading-relaxed">
              Based on active statutory evaluation for {EXAM_PROFILES[selectedProfile].title}.
            </p>
          </div>
        </div>

        {/* Right: 4 Diagnostic Cards */}
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {/* Card 1: Mastery Zone */}
          <button
            onClick={() => setFilterTier(filterTier === 'mastery' ? 'all' : 'mastery')}
            className={`p-3.5 rounded-xl border text-left transition-all btn-tactile flex flex-col justify-between cursor-pointer ${
              filterTier === 'mastery'
                ? 'bg-emerald-500/10 border-emerald-500 ring-1 ring-emerald-500'
                : 'bg-[var(--bg-base)] border-[var(--border-subtle)] hover:border-emerald-500/50'
            }`}
          >
            <div className="flex items-center justify-between text-emerald-400">
              <span className="text-[10px] font-mono font-bold uppercase">Mastery (&ge;75%)</span>
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div className="text-2xl font-mono font-extrabold text-[var(--text-primary)] mt-1">
              {report.masteredPartsCount} <span className="text-xs font-normal text-[var(--text-muted)]">/ 25</span>
            </div>
            <div className="text-[10px] text-[var(--text-muted)] mt-1">Parts in peak retention</div>
          </button>

          {/* Card 2: Moderate Zone */}
          <button
            onClick={() => setFilterTier(filterTier === 'moderate' ? 'all' : 'moderate')}
            className={`p-3.5 rounded-xl border text-left transition-all btn-tactile flex flex-col justify-between cursor-pointer ${
              filterTier === 'moderate'
                ? 'bg-zinc-800 border-zinc-400 ring-1 ring-zinc-400'
                : 'bg-[var(--bg-base)] border-[var(--border-subtle)] hover:border-zinc-700'
            }`}
          >
            <div className="flex items-center justify-between text-zinc-300">
              <span className="text-[10px] font-mono font-bold uppercase">Moderate (50-74%)</span>
              <AlertTriangle className="w-4 h-4" />
            </div>
            <div className="text-2xl font-mono font-extrabold text-[var(--text-primary)] mt-1">
              {report.moderatePartsCount} <span className="text-xs font-normal text-[var(--text-muted)]">/ 25</span>
            </div>
            <div className="text-[10px] text-[var(--text-muted)] mt-1">Needs blueprint practice</div>
          </button>

          {/* Card 3: Vulnerable Zone */}
          <button
            onClick={() => setFilterTier(filterTier === 'vulnerable' ? 'all' : 'vulnerable')}
            className={`p-3.5 rounded-xl border text-left transition-all btn-tactile flex flex-col justify-between cursor-pointer ${
              filterTier === 'vulnerable'
                ? 'bg-rose-500/10 border-rose-500 ring-1 ring-rose-500'
                : 'bg-[var(--bg-base)] border-[var(--border-subtle)] hover:border-rose-500/50'
            }`}
          >
            <div className="flex items-center justify-between text-rose-400">
              <span className="text-[10px] font-mono font-bold uppercase">Vulnerable (&lt;50%)</span>
              <ShieldAlert className="w-4 h-4" />
            </div>
            <div className="text-2xl font-mono font-extrabold text-[var(--text-primary)] mt-1">
              {report.vulnerablePartsCount} <span className="text-xs font-normal text-[var(--text-muted)]">/ 25</span>
            </div>
            <div className="text-[10px] text-[var(--text-muted)] mt-1">High mark loss risk</div>
          </button>

          {/* Card 4: Exam Projections */}
          <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col justify-between">
            <div className="flex items-center justify-between text-zinc-300">
              <span className="text-[10px] font-mono font-bold uppercase">Competence</span>
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-mono text-[var(--text-primary)] font-bold">
                Prelims: <span className="text-emerald-400">{report.projectedPrelimsAccuracy}%</span>
              </div>
              <div className="text-xs font-mono text-[var(--text-primary)] font-bold mt-0.5">
                Mains: <span className="text-zinc-200">{report.projectedMainsCompetence}%</span>
              </div>
            </div>
            <div className="text-[10px] text-[var(--text-muted)] mt-1">Projected conversion</div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          🔥 15-MINUTE DAILY PRESCRIPTION: WEAKEST LINK REMEDIATION ENGINE
          ========================================================================= */}
      <div className="relative overflow-hidden p-6 sm:p-7 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <ConstitutionalWatermark variant="chakra" position="bottom-right" size="md" animated className="text-white !opacity-[0.06]" />
        <div className="relative z-10 space-y-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-rose-500/10 text-rose-400 border border-rose-500/30 flex items-center gap-1.5">
              <Zap className="w-3 h-3" />
              Dynamic Remediation Engine
            </span>
            <span className="text-[11px] font-mono text-zinc-400">
              15-Minute Daily Tactical Prescription
            </span>
          </div>

          <h2 className="text-lg sm:text-xl font-black text-white tracking-tight">
            Targeted Remediation for Your Weakest Constitutional Nodes
          </h2>

          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Synthesized from your lowest scoring syllabus segments: <strong className="text-zinc-100">{report.criticalBlindspots.map(b => b.part.partNumber).join(', ')}</strong> ({report.criticalBlindspots.map(b => b.part.title).join(', ')}). Bypasses familiar material to target high-yield failure points.
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-mono text-zinc-400">
            <span className="px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-200">
              5 Diagnostic MCQs
            </span>
            <span className="text-zinc-600">&bull;</span>
            <span className="px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-200">
              1 Landmark Ratio
            </span>
            <span className="text-zinc-600">&bull;</span>
            <span className="px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-200">
              1 Trap Statement
            </span>
            <span className="text-zinc-600">&bull;</span>
            <span className="text-emerald-400 font-bold">+150 XP &amp; +5% Recovery Boost</span>
          </div>
        </div>

        <button
          onClick={() => handleLaunchWeakestLink()}
          className="shrink-0 px-6 py-3.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center gap-2.5 cursor-pointer btn-tactile"
        >
          <Play className="w-4 h-4 fill-current" />
          <span>START 15-MIN DRILL</span>
        </button>
      </div>

      {/* =========================================================================
          🎯 PRELIMS RISK PROFILE & NEGATIVE MARKING CALIBRATION MATRIX
          ========================================================================= */}
      <div className="p-6 sm:p-7 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-zinc-800 text-zinc-200 border border-zinc-700 flex items-center gap-1.5">
                <Gauge className="w-3.5 h-3.5" />
                Prelims Risk Engine
              </span>
              <span className="text-xs font-mono text-[var(--text-muted)]">
                +2.00 / -0.66 Mark Calibration
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
              Prelims Risk Appetite &amp; Negative Marking Diagnostic
            </h2>
            <p className="text-xs text-[var(--text-secondary)] mt-0.5">
              Simulate your expected net score against the official 88.0 UPSC Prelims cutoff by tuning your attempt aggression and elimination confidence.
            </p>
          </div>

          <div className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold flex items-center gap-2 ${riskProfile.stanceBadgeColor}`}>
            <Activity className="w-4 h-4" />
            <span>{riskProfile.stanceTitle}</span>
          </div>
        </div>

        {/* Interactive Sliders & Live Results Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Column: Interactive Aggression & Accuracy Controls (5 cols) */}
          <div className="lg:col-span-5 p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-4">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[var(--text-secondary)] font-semibold">Target Questions Attempted:</span>
                <span className="font-extrabold text-[var(--text-primary)] px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700">
                  {targetAttempts} / 100 Questions
                </span>
              </div>
              <input
                type="range"
                min="45"
                max="100"
                step="1"
                value={targetAttempts}
                onChange={(e) => setTargetAttempts(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white"
              />
              <div className="flex justify-between text-[10px] font-mono text-[var(--text-muted)]">
                <span>Conservative (50)</span>
                <span>UPSC Average (82)</span>
                <span>Aggressive (95+)</span>
              </div>
            </div>

            <div className="space-y-1.5 pt-2 border-t border-[var(--border-subtle)]">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[var(--text-secondary)] font-semibold">Estimated Gross Accuracy:</span>
                <span className="font-extrabold text-[var(--text-primary)] px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700">
                  {estimatedAccuracy}%
                </span>
              </div>
              <input
                type="range"
                min="45"
                max="95"
                step="1"
                value={estimatedAccuracy}
                onChange={(e) => setEstimatedAccuracy(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white"
              />
              <div className="flex justify-between text-[10px] font-mono text-[var(--text-muted)]">
                <span>Vulnerable (50%)</span>
                <span>Typical Prelims (70%)</span>
                <span>Peak Mastery (88%+)</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300 space-y-1 leading-snug">
              <div className="font-bold text-white flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-zinc-300" />
                <span>Tactical Prescription:</span>
              </div>
              <p className="text-zinc-400">
                {riskProfile.tacticalAdvice}
              </p>
            </div>
          </div>

          {/* Right Column: Calculated Mathematical Score Breakdown (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col justify-between">
              <span className="text-[10px] font-mono uppercase text-zinc-400 font-bold">Gross Marks</span>
              <div className="text-2xl font-mono font-black text-emerald-400 mt-1">
                +{riskProfile.grossMarks}
              </div>
              <span className="text-[10px] font-mono text-zinc-400 mt-0.5">
                {riskProfile.correctQuestions} correct (+2.0)
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col justify-between">
              <span className="text-[10px] font-mono uppercase text-rose-400 font-bold">Negative Drag</span>
              <div className="text-2xl font-mono font-black text-rose-400 mt-1">
                -{riskProfile.negativePenaltyMarks}
              </div>
              <span className="text-[10px] font-mono text-rose-400/80 mt-0.5">
                {riskProfile.penaltyRatioPercent}% gross lost
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col justify-between">
              <span className="text-[10px] font-mono uppercase text-zinc-300 font-bold">Projected Net</span>
              <div className="text-2xl font-mono font-black text-white mt-1">
                {riskProfile.netScore}
              </div>
              <span className="text-[10px] font-mono text-zinc-400 mt-0.5">
                Out of 200.0 Marks
              </span>
            </div>

            <div className={`p-3.5 rounded-xl border flex flex-col justify-between ${
              riskProfile.clearanceMargin >= 0
                ? 'bg-emerald-500/10 border-emerald-500/30'
                : 'bg-rose-500/10 border-rose-500/30'
            }`}>
              <span className="text-[10px] font-mono uppercase font-bold text-zinc-300">Cutoff Margin</span>
              <div className={`text-2xl font-mono font-black mt-1 ${
                riskProfile.clearanceMargin >= 0 ? 'text-emerald-400' : 'text-rose-400'
              }`}>
                {riskProfile.clearanceMargin >= 0 ? `+${riskProfile.clearanceMargin}` : riskProfile.clearanceMargin}
              </div>
              <span className="text-[10px] font-mono text-zinc-400 mt-0.5">
                vs 88.0 Benchmark
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          🚨 RED ALERT SENTINEL: TOP 3 CRITICAL BLINDSPOTS
          ========================================================================= */}
      <div className="p-5 rounded-2xl bg-rose-500/5 border border-rose-500/20 shadow-sm flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-rose-400">
            <ShieldAlert className="w-5 h-5 shrink-0" />
            <h2 className="text-sm font-extrabold uppercase font-mono tracking-wider">
              Critical Exam Blindspots Sentinel ({report.criticalBlindspots.length} Priority Hazards)
            </h2>
          </div>
          <span className="text-xs font-mono text-[var(--text-muted)]">
            Prioritized by: High Exam Weightage &times; Low Student Retention
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {report.criticalBlindspots.map((item, idx) => (
            <div
              key={item.part.id}
              className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-rose-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span className="text-[10px] font-mono font-extrabold px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/30">
                    PRIORITY #{idx + 1} &bull; {item.part.partNumber}
                  </span>
                  <span className="text-xs font-mono font-extrabold text-rose-400">
                    {item.readinessScore}% Ready
                  </span>
                </div>
                <div className="text-sm font-extrabold text-[var(--text-primary)] leading-tight">
                  {item.part.title}
                </div>
                <div className="text-xs font-mono text-[var(--text-muted)] mt-0.5">
                  {item.part.articlesRange}
                </div>

                <div className="text-xs text-[var(--text-secondary)] mt-2.5 leading-relaxed bg-[var(--bg-base)] p-2.5 rounded-lg border border-[var(--border-subtle)]">
                  <div className="font-semibold text-[var(--text-primary)] mb-1 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-zinc-300" />
                    <span>2024–2025 Bench Anchor:</span>
                  </div>
                  <p className="text-[11px] text-[var(--text-muted)] line-clamp-2">
                    {item.part.recentBenchmark2024}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4 pt-3 border-t border-[var(--border-subtle)]">
                <button
                  onClick={() => handleLaunchDiagnosticDrill(item.part.id)}
                  className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-mono text-xs font-bold transition-all btn-tactile cursor-pointer"
                >
                  <Zap className="w-3.5 h-3.5" /> Drill MCQs
                </button>
                <button
                  onClick={() => setActivePartForModal(item)}
                  className="px-2.5 py-1.5 rounded-lg bg-[var(--bg-base)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] font-mono text-xs font-semibold transition-all btn-tactile cursor-pointer"
                >
                  Inspect
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================================
          HEATMAP TOOLBAR: View mode, filters, search, sort
          ========================================================================= */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
        <div className="flex items-center gap-2 flex-wrap">
          {/* View Mode Sliding Segmented Control */}
          <SlidingSegmentedControl
            layoutGroupId="readiness-view-mode"
            value={viewMode}
            onChange={setViewMode}
            options={[
              { id: 'pillars', label: 'Syllabus Pillars (10)' },
              { id: 'grid', label: '25-Grid View' },
              { id: 'grouped', label: 'By Category' },
            ]}
          />

          {/* Quick Filter Status */}
          <div className="hidden md:flex items-center gap-1.5 pl-2 border-l border-[var(--border-subtle)]">
            {(['all', 'vulnerable', 'moderate', 'mastery'] as const).map((tier) => (
              <button
                key={tier}
                onClick={() => setFilterTier(tier)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono capitalize transition-all cursor-pointer ${
                  filterTier === tier
                    ? 'bg-zinc-800 text-white font-bold border border-zinc-700'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]'
                }`}
              >
                {tier}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Search Box */}
          <div className="relative flex-1 sm:w-56">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by Part or Article..."
              className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-zinc-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-2.5 py-1.5 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)] focus:outline-none focus:border-zinc-500 cursor-pointer"
          >
            <option value="partNumber">Sort: Part I–XXII</option>
            <option value="scoreAsc">Sort: Lowest Score (Weakest)</option>
            <option value="scoreDesc">Sort: Highest Score (Strongest)</option>
            <option value="weight">Sort: Exam Weight</option>
          </select>
        </div>
      </div>

      {/* =========================================================================
          THE HEATMAP MATRIX: 1. SYLLABUS PILLARS
          ========================================================================= */}
      {viewMode === 'pillars' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pillarStats.map((pStat) => {
            const scoreColor = getScoreColor(pStat.readinessScore);
            const gradient = getScoreBarGradient(pStat.readinessScore);

            return (
              <div
                key={pStat.pillar.id}
                className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-zinc-700 transition-all flex flex-col justify-between space-y-4 shadow-sm"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-zinc-800 text-zinc-200 border border-zinc-700">
                      {pStat.pillar.articleSpan}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded ${
                        pStat.pillar.upscYield === 'EXTREME'
                          ? 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                          : 'bg-zinc-800 text-zinc-300 border border-zinc-700'
                      }`}>
                        {pStat.pillar.upscYield} Yield
                      </span>
                      <span className={`text-xs font-mono font-black px-2 py-0.5 rounded border ${scoreColor}`}>
                        {pStat.readinessScore}%
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-extrabold text-[var(--text-primary)]">
                      {pStat.pillar.title}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">
                      {pStat.pillar.description}
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${gradient}`}
                      style={{ width: `${pStat.readinessScore}%` }}
                    />
                  </div>

                  {/* Key Themes Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {pStat.pillar.keyThemes.map((theme, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-base)] text-[var(--text-muted)] border border-[var(--border-subtle)]"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between gap-3">
                  <span className="text-[11px] font-mono text-[var(--text-muted)]">
                    {pStat.constituentPartStats.length} Parts Included
                  </span>
                  <button
                    onClick={() => {
                      if (pStat.constituentPartStats[0]) {
                        handleLaunchDiagnosticDrill(pStat.constituentPartStats[0].part.id);
                      }
                    }}
                    className="px-3.5 py-1.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-bold font-mono text-xs shadow transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Zap className="w-3.5 h-3.5" />
                    <span>DRILL PILLAR</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* =========================================================================
          THE HEATMAP MATRIX: 2. 25-PART GRID
          ========================================================================= */}
      {viewMode === 'grid' && (
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3"
        >
          {displayedParts.map((item) => {
            const scoreColorClass = getScoreColor(item.readinessScore);
            const gradientClass = getScoreBarGradient(item.readinessScore);
            return (
              <motion.div
                key={item.part.id}
                variants={staggerItemVariants}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.985 }}
                transition={springs.snappy}
                onClick={() => setActivePartForModal(item)}
                className="group relative p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-zinc-600 hover:shadow-md transition-[border-color,box-shadow] duration-150 cursor-pointer flex flex-col justify-between overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientClass}`} />

                <div>
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--text-muted)]">
                      {item.part.partNumber}
                    </span>
                    <span className={`text-xs font-mono font-extrabold px-1.5 py-0.2 rounded border ${scoreColorClass}`}>
                      {item.readinessScore}%
                    </span>
                  </div>

                  <div className="text-xs font-bold text-[var(--text-primary)] group-hover:text-white transition-colors leading-snug line-clamp-2 mt-1">
                    {item.part.title}
                  </div>
                  <div className="text-[10px] font-mono text-[var(--text-muted)] mt-0.5">
                    {item.part.articlesRange}
                  </div>

                  <div className="flex items-center gap-1 mt-2 text-[10px] text-[var(--text-muted)] font-mono">
                    <span>Yield:</span>
                    <span className="text-zinc-300 font-bold">
                      {'★'.repeat(item.part.mainsImportance)}
                    </span>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-[var(--border-subtle)] flex items-center justify-between gap-1 text-[10px] font-mono text-[var(--text-muted)]">
                  <span>{item.mcqsAttempted} MCQs</span>
                  {item.unresolvedMistakesCount > 0 ? (
                    <span className="text-rose-400 font-bold">{item.unresolvedMistakesCount} Err</span>
                  ) : (
                    <span className="text-emerald-400">Clean</span>
                  )}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLaunchWeakestLink(item.part.id);
                    }}
                    className="px-2 py-0.5 rounded bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-[var(--accent)] text-[var(--text-primary)] font-bold transition-colors cursor-pointer"
                    title={`Launch targeted 3-stage drill for ${item.part.partNumber}`}
                  >
                    Fix &rarr;
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      )}

      {/* =========================================================================
          THE HEATMAP MATRIX: 3. GROUPED BY CATEGORY
          ========================================================================= */}
      {viewMode === 'grouped' && (
        <div className="flex flex-col gap-6">
          {Object.entries(groupedParts).map(([category, items]) => (
            <div key={category} className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-200 bg-zinc-800 px-2.5 py-0.5 rounded-md border border-zinc-700">
                  {category}
                </span>
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  {items.length} Parts
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {items.map((item) => {
                  const scoreColorClass = getScoreColor(item.readinessScore);
                  const gradientClass = getScoreBarGradient(item.readinessScore);
                  return (
                    <div
                      key={item.part.id}
                      onClick={() => setActivePartForModal(item)}
                      className="group relative p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-zinc-600 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between overflow-hidden"
                    >
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientClass}`} />

                      <div>
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--text-muted)]">
                            {item.part.partNumber}
                          </span>
                          <span className={`text-xs font-mono font-extrabold px-1.5 py-0.2 rounded border ${scoreColorClass}`}>
                            {item.readinessScore}%
                          </span>
                        </div>

                        <div className="text-xs font-bold text-[var(--text-primary)] group-hover:text-white transition-colors leading-snug line-clamp-2 mt-1">
                          {item.part.title}
                        </div>
                        <div className="text-[10px] font-mono text-[var(--text-muted)] mt-0.5">
                          {item.part.articlesRange}
                        </div>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-[var(--border-subtle)] flex items-center justify-between text-[10px] font-mono text-[var(--text-muted)]">
                        <span>{item.mcqsAttempted} MCQs</span>
                        <span>{item.mainsDraftsCount} Drafts</span>
                        {item.unresolvedMistakesCount > 0 ? (
                          <span className="text-rose-400 font-bold">{item.unresolvedMistakesCount} Err</span>
                        ) : (
                          <span className="text-emerald-400">Clean</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* =========================================================================
          7-DAY TACTICAL REVISION PLAN
          ========================================================================= */}
      <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-4">
          <div>
            <div className="flex items-center gap-2 text-zinc-300 mb-1">
              <Clock className="w-4 h-4" />
              <h2 className="text-sm font-extrabold uppercase font-mono tracking-wider">
                Prescribed 7-Day Tactical Revision Schedule
              </h2>
            </div>
            <p className="text-xs text-[var(--text-secondary)]">
              Dynamic algorithm targeting your highest mark-loss vulnerabilities for {EXAM_PROFILES[selectedProfile].title}.
            </p>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-[var(--badge-bg)] text-[var(--text-muted)] border border-[var(--badge-border)]">
            Updated in Real-Time
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {report.recommended7DayRevisionPlan.slice(0, 4).map((plan) => (
            <div
              key={plan.day}
              className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono font-extrabold px-2 py-0.5 rounded bg-zinc-800 text-zinc-200 border border-zinc-700">
                    DAY {plan.day} SPRINT
                  </span>
                </div>
                <div className="text-xs font-bold text-[var(--text-primary)]">
                  {plan.focusPart}
                </div>
                <p className="text-[11px] text-[var(--text-muted)] mt-1.5 leading-relaxed">
                  {plan.action}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================================
          PART DEEP-DIVE MODAL / DRAWER
          ========================================================================= */}
      <AnimatePresence>
        {activePartForModal && (
          <motion.div
            variants={modalBackdropVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={() => setActivePartForModal(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              variants={modalPanelVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              className="bg-[var(--bg-surface)] border border-[var(--border-strong)] rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col"
            >
            {/* Modal Header */}
            <div className="p-5 border-b border-[var(--border-subtle)] flex items-start justify-between gap-4 sticky top-0 bg-[var(--bg-surface)]/95 backdrop-blur z-10">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-zinc-800 text-zinc-200 border border-zinc-700">
                    {activePartForModal.part.partNumber} &bull; {activePartForModal.part.category}
                  </span>
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded border ${getScoreColor(activePartForModal.readinessScore)}`}>
                    {activePartForModal.readinessScore}% READINESS
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-[var(--text-primary)] leading-tight">
                  {activePartForModal.part.title}
                </h3>
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  {activePartForModal.part.articlesRange}
                </span>
              </div>
              <button
                onClick={() => setActivePartForModal(null)}
                className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-base)] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-5 space-y-5">
              {/* Score Breakdown Bars */}
              <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-3">
                <div className="text-xs font-mono font-bold uppercase text-[var(--text-muted)]">
                  Component Diagnostics &amp; Evidence
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
                  <div className="p-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                    <div className="text-xs font-mono text-[var(--text-muted)]">MCQ Accuracy</div>
                    <div className="text-base font-extrabold font-mono text-emerald-400 mt-0.5">
                      {activePartForModal.mcqAccuracy}%
                    </div>
                    <div className="text-[10px] text-[var(--text-muted)]">
                      {activePartForModal.mcqsAttempted} attempted
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                    <div className="text-xs font-mono text-[var(--text-muted)]">Mains Drafts</div>
                    <div className="text-base font-extrabold font-mono text-zinc-200 mt-0.5">
                      {activePartForModal.mainsDraftsCount}
                    </div>
                    <div className="text-[10px] text-[var(--text-muted)]">
                      {activePartForModal.mainsEvaluatedCount} evaluated
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                    <div className="text-xs font-mono text-[var(--text-muted)]">SRS Mastered</div>
                    <div className="text-base font-extrabold font-mono text-emerald-400 mt-0.5">
                      {activePartForModal.srsCardsMastered}
                    </div>
                    <div className="text-[10px] text-[var(--text-muted)]">Synapses fixed</div>
                  </div>
                  <div className="p-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                    <div className="text-xs font-mono text-[var(--text-muted)]">Active Errors</div>
                    <div className={`text-base font-extrabold font-mono mt-0.5 ${activePartForModal.unresolvedMistakesCount > 0 ? 'text-rose-400' : 'text-emerald-400'}`}>
                      {activePartForModal.unresolvedMistakesCount}
                    </div>
                    <div className="text-[10px] text-[var(--text-muted)]">In mistake bank</div>
                  </div>
                </div>

                {/* Self-Calibration Slider */}
                <div className="pt-2 border-t border-[var(--border-subtle)]">
                  <div className="flex items-center justify-between text-xs font-mono mb-1">
                    <span className="text-[var(--text-secondary)]">Offline Reading Calibration (Self-Audit):</span>
                    <span className="text-zinc-200 font-bold">+{offlineBonusSlider}% Bonus</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="25"
                    step="5"
                    value={offlineBonusSlider}
                    onChange={(e) => handleSaveCalibrationBonus(activePartForModal.part.id, Number(e.target.value))}
                    className="w-full h-1.5 bg-[var(--bg-surface)] rounded-lg appearance-none cursor-pointer accent-white"
                  />
                  <span className="text-[10px] text-[var(--text-muted)]">
                    Adjust this if you have thoroughly studied this part from standard treatises (e.g. M.P. Jain / D.D. Basu).
                  </span>
                </div>
              </div>

              {/* 2024–2025 Bench Anchor */}
              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-700">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-zinc-300 uppercase mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>2024–2025 Landmark Bench Anchor</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {activePartForModal.part.recentBenchmark2024}
                </p>
              </div>

              {/* High Yield Articles */}
              <div>
                <div className="text-xs font-mono font-bold uppercase text-[var(--text-muted)] mb-2">
                  High-Yield Statutory Clauses ({activePartForModal.part.highYieldArticles.length} Key Articles)
                </div>
                <div className="space-y-1.5">
                  {activePartForModal.part.highYieldArticles.map((art) => (
                    <div
                      key={art.number}
                      className="p-2.5 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] flex items-start gap-2.5 text-xs"
                    >
                      <span className="font-mono font-bold text-zinc-200 shrink-0">
                        Art. {art.number}
                      </span>
                      <div>
                        <div className="font-bold text-[var(--text-primary)]">{art.title}</div>
                        <div className="text-[11px] text-[var(--text-muted)] mt-0.5">{art.note}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Landmark Precedents */}
              <div>
                <div className="text-xs font-mono font-bold uppercase text-[var(--text-muted)] mb-2">
                  Essential Case Laws &amp; Ratios ({activePartForModal.part.landmarkPrecedents.length} Benchmarks)
                </div>
                <div className="space-y-1.5">
                  {activePartForModal.part.landmarkPrecedents.map((c) => (
                    <div
                      key={c.name}
                      className="p-2.5 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs"
                    >
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="font-bold text-[var(--text-primary)]">{c.name}</span>
                        <span className="font-mono text-[10px] text-[var(--text-muted)]">{c.year}</span>
                      </div>
                      <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                        {c.coreHolding}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mains Blueprint */}
              <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
                <div className="text-xs font-mono font-bold text-zinc-300 uppercase mb-1">
                  Mains Formulation Focus
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed italic">
                  &ldquo;{activePartForModal.part.mainsFocusBlueprint}&rdquo;
                </p>
              </div>
            </div>

            {/* Modal Footer Controls: Closed-Loop Weak-Part Remediation */}
            <div className="p-4 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => {
                    const targetId = activePartForModal.part.id;
                    setActivePartForModal(null);
                    handleLaunchWeakestLink(targetId);
                  }}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[var(--accent)] text-[var(--accent-contrast)] font-mono text-xs font-bold shadow-md transition-opacity hover:opacity-90 btn-tactile cursor-pointer"
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>Fix This Part (3-Stage Drill)</span>
                </button>

                <button
                  onClick={() => {
                    setActivePartForModal(null);
                    handleLaunchDiagnosticDrill(activePartForModal.part.id);
                  }}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[var(--bg-base)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] font-mono text-xs font-semibold transition-colors btn-tactile cursor-pointer"
                >
                  <span>Quick MCQs</span>
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => {
                    const partNum = activePartForModal.part.partNumber;
                    setActivePartForModal(null);
                    launchFlashcardDeck('articles', partNum);
                  }}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[var(--bg-base)] text-[var(--accent)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] font-mono text-xs font-semibold transition-colors btn-tactile cursor-pointer"
                >
                  <BrainCircuit className="w-3.5 h-3.5" />
                  <span>SRS Flashcards</span>
                </button>
                <button
                  onClick={() => openLeadArticleInBareAct(activePartForModal)}
                  className="px-3 py-2 rounded-xl bg-[var(--bg-base)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] font-mono text-xs font-semibold transition-colors btn-tactile cursor-pointer"
                >
                  Bare Act &amp; Hindi
                </button>
                <button
                  onClick={() => {
                    setSelectedPartId(activePartForModal.part.id);
                    setActivePartForModal(null);
                    setActiveTab('parts');
                  }}
                  className="px-3 py-2 rounded-xl bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] font-mono text-xs font-semibold transition-colors btn-tactile cursor-pointer"
                >
                  Part Guide
                </button>
              </div>
            </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          🔥 15-MINUTE WEAKEST LINK 3-STAGE WORKOUT MODAL
          ========================================================================= */}
      {isWeakestLinkModalOpen && activeWeakestDrill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col animate-scaleUp">
            {/* Modal Header with Live 15:00 Timer */}
            <div className="p-5 border-b border-zinc-800 bg-zinc-900 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white">
                  <Flame className="w-4 h-4 text-rose-400" />
                </div>
                <div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                    15-Minute Weakest Link Prescription
                  </h3>
                  <div className="text-[10px] font-mono text-zinc-400 flex items-center gap-1.5">
                    <span>Target Nodes:</span>
                    <span className="text-zinc-200">{activeWeakestDrill.targetPartTitles[0]}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="px-3 py-1 rounded-xl bg-zinc-800 border border-zinc-700 font-mono text-xs font-bold text-white flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-zinc-400" />
                  <span>
                    {Math.floor(weakestTimerSeconds / 60)}:{(weakestTimerSeconds % 60).toString().padStart(2, '0')}
                  </span>
                </div>
                <button
                  onClick={() => setIsWeakestLinkModalOpen(false)}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Stage Progress Pills */}
            <div className="grid grid-cols-3 border-b border-zinc-800 bg-zinc-900/50 text-center font-mono text-[11px] font-bold">
              <div className={`py-2.5 border-r border-zinc-800 ${weakestStage === 'mcqs' ? 'text-white bg-zinc-800/80' : 'text-zinc-400'}`}>
                1. MCQs (5 Qs)
              </div>
              <div className={`py-2.5 border-r border-zinc-800 ${weakestStage === 'precedent' ? 'text-white bg-zinc-800/80' : 'text-zinc-400'}`}>
                2. Landmark Ratio
              </div>
              <div className={`py-2.5 ${weakestStage === 'trap' || weakestStage === 'summary' ? 'text-white bg-zinc-800/80' : 'text-zinc-400'}`}>
                3. Trap Statement
              </div>
            </div>

            {/* STAGE 1: 5 MCQS */}
            {weakestStage === 'mcqs' && activeWeakestDrill.stage1MCQs.length > 0 && (
              <div className="p-6 space-y-5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-200 font-bold">
                    Question {weakestMcqIndex + 1} of {activeWeakestDrill.stage1MCQs.length}
                  </span>
                  <span className="text-zinc-400">
                    Score: {weakestScore} Correct
                  </span>
                </div>

                <div className="text-sm sm:text-base font-bold text-white leading-relaxed">
                  {activeWeakestDrill.stage1MCQs[weakestMcqIndex].question}
                </div>

                <div className="space-y-2">
                  {activeWeakestDrill.stage1MCQs[weakestMcqIndex].options.map((opt, idx) => {
                    const currentQ = activeWeakestDrill.stage1MCQs[weakestMcqIndex];
                    let btnStyle = 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-500';
                    if (weakestOptionRevealed) {
                      if (idx === currentQ.correctIndex) {
                        btnStyle = 'bg-emerald-500/10 border-emerald-500 text-emerald-400 font-bold';
                      } else if (idx === weakestSelectedOption) {
                        btnStyle = 'bg-rose-500/10 border-rose-500 text-rose-400';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        disabled={weakestOptionRevealed}
                        onClick={() => handleSelectWeakestMcqOption(idx)}
                        className={`w-full p-3.5 rounded-xl border text-left text-xs font-mono transition-all flex items-start gap-3 cursor-pointer ${btnStyle}`}
                      >
                        <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center shrink-0 font-bold text-[10px]">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="flex-1">{opt}</span>
                      </button>
                    );
                  })}
                </div>

                {weakestOptionRevealed && (
                  <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2 animate-fadeIn">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className={weakestSelectedOption === activeWeakestDrill.stage1MCQs[weakestMcqIndex].correctIndex ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                        {weakestSelectedOption === activeWeakestDrill.stage1MCQs[weakestMcqIndex].correctIndex ? '✓ Correct Answer!' : '✗ Option Mismatch'}
                      </span>
                      <span className="text-zinc-200 font-bold">
                        {activeWeakestDrill.stage1MCQs[weakestMcqIndex].articleRef}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {activeWeakestDrill.stage1MCQs[weakestMcqIndex].explanation}
                    </p>
                    <div className="pt-2 flex justify-end">
                      <button
                        onClick={handleNextWeakestMcq}
                        className="px-4 py-2 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
                      >
                        <span>
                          {weakestMcqIndex < activeWeakestDrill.stage1MCQs.length - 1 ? 'NEXT QUESTION' : 'PROCEED TO PRECEDENT CHALLENGE'}
                        </span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* STAGE 2: LANDMARK PRECEDENT RATIO */}
            {weakestStage === 'precedent' && (
              <div className="p-6 space-y-5 animate-fadeIn">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-200 font-bold">
                    Stage 2: Landmark Precedent Ratio Test
                  </span>
                  <span className="text-zinc-400">
                    {activeWeakestDrill.stage2Precedent.articleRef}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-1">
                  <span className="text-[10px] font-mono uppercase text-zinc-400 font-bold">
                    Landmark Precedent Challenge
                  </span>
                  <h4 className="text-sm font-extrabold text-white">
                    {activeWeakestDrill.stage2Precedent.caseName} ({activeWeakestDrill.stage2Precedent.year})
                  </h4>
                  <p className="text-xs text-zinc-300 pt-1 leading-relaxed">
                    {activeWeakestDrill.stage2Precedent.challengeQuestion}
                  </p>
                </div>

                <div className="space-y-2.5">
                  {activeWeakestDrill.stage2Precedent.options.map((opt) => {
                    let btnStyle = 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-500';
                    if (weakestPrecedentRevealed) {
                      if (opt.isCorrect) {
                        btnStyle = 'bg-emerald-500/10 border-emerald-500 text-emerald-400 font-bold';
                      } else if (opt.id === weakestPrecedentSelected) {
                        btnStyle = 'bg-rose-500/10 border-rose-500 text-rose-400';
                      }
                    }

                    return (
                      <button
                        key={opt.id}
                        disabled={weakestPrecedentRevealed}
                        onClick={() => handleSelectWeakestPrecedent(opt.id)}
                        className={`w-full p-4 rounded-xl border text-left text-xs transition-all flex items-start gap-3 cursor-pointer ${btnStyle}`}
                      >
                        <Scale className="w-4 h-4 shrink-0 mt-0.5" />
                        <span className="flex-1 leading-relaxed">{opt.text}</span>
                      </button>
                    );
                  })}
                </div>

                {weakestPrecedentRevealed && (
                  <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2 animate-fadeIn">
                    <span className="text-xs font-mono font-bold text-emerald-400 block">
                      Authoritative Supreme Court Ratio:
                    </span>
                    <p className="text-xs text-zinc-300 leading-relaxed italic">
                      &ldquo;{activeWeakestDrill.stage2Precedent.authoritativeRatio}&rdquo;
                    </p>
                    <div className="pt-2 flex justify-end">
                      <button
                        onClick={() => setWeakestStage('trap')}
                        className="px-4 py-2 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
                      >
                        <span>PROCEED TO TRAP STATEMENT</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* STAGE 3: TRAP STATEMENT */}
            {weakestStage === 'trap' && (
              <div className="p-6 space-y-5 animate-fadeIn">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-200 font-bold">
                    Stage 3: Trap Statement Spotter
                  </span>
                  <span className="text-zinc-400">
                    Spot the Examiner Trick
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-2 text-center">
                  <span className="text-[10px] font-mono uppercase text-zinc-400 font-bold">
                    Consider the Following Proposition:
                  </span>
                  <p className="text-sm font-bold text-white leading-relaxed italic">
                    &ldquo;{activeWeakestDrill.stage3TrapClause.statement}&rdquo;
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    disabled={weakestTrapRevealed}
                    onClick={() => handleSelectWeakestTrap(true)}
                    className={`p-4 rounded-xl border text-xs font-bold font-mono transition-all flex flex-col items-center justify-center gap-2 cursor-pointer ${
                      weakestTrapRevealed
                        ? activeWeakestDrill.stage3TrapClause.isDeceptiveTrap
                          ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-500'
                        : 'bg-zinc-900 border-zinc-800 text-white hover:border-zinc-500'
                    }`}
                  >
                    <AlertTriangle className="w-5 h-5 text-rose-400" />
                    <span>DECEPTIVE TRAP STATEMENT</span>
                  </button>

                  <button
                    disabled={weakestTrapRevealed}
                    onClick={() => handleSelectWeakestTrap(false)}
                    className={`p-4 rounded-xl border text-xs font-bold font-mono transition-all flex flex-col items-center justify-center gap-2 cursor-pointer ${
                      weakestTrapRevealed
                        ? !activeWeakestDrill.stage3TrapClause.isDeceptiveTrap
                          ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-500'
                        : 'bg-zinc-900 border-zinc-800 text-white hover:border-zinc-500'
                    }`}
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span>VALID CONSTITUTIONAL RULE</span>
                  </button>
                </div>

                {weakestTrapRevealed && (
                  <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2 animate-fadeIn">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className={weakestTrapChoice === activeWeakestDrill.stage3TrapClause.isDeceptiveTrap ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                        {weakestTrapChoice === activeWeakestDrill.stage3TrapClause.isDeceptiveTrap ? '✓ Trap Identified!' : '✗ Fooled by Trap Phrasing'}
                      </span>
                      <span className="text-zinc-400">{activeWeakestDrill.stage3TrapClause.articleRef}</span>
                    </div>
                    <div className="text-xs text-zinc-300 leading-relaxed">
                      <strong>Examiner Trick:</strong> {activeWeakestDrill.stage3TrapClause.examinerTrick}
                    </div>
                    <div className="text-xs text-zinc-300 leading-relaxed">
                      <strong>True Constitutional Rule:</strong> {activeWeakestDrill.stage3TrapClause.correctStatutoryRule}
                    </div>
                    <div className="pt-2 flex justify-end">
                      <button
                        onClick={handleFinishWeakestLinkDrill}
                        className="px-5 py-2.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
                      >
                        <Award className="w-4 h-4" />
                        <span>FINISH DRILL &amp; RECALIBRATE</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* STAGE 4: WORKOUT SUMMARY */}
            {weakestStage === 'summary' && (
              <div className="p-8 text-center space-y-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-2xl bg-zinc-800 border border-zinc-700 text-white flex items-center justify-center mx-auto shadow-xl">
                  <Award className="w-8 h-8 text-emerald-400" />
                </div>

                <div className="space-y-2 max-w-md mx-auto">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    15-Minute Remediation Complete
                  </span>
                  <h3 className="text-2xl font-black text-white">
                    {weakestScore} / 7 Items Solved Correctly!
                  </h3>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Targeted recovery applied to your weakest constitutional nodes. +150 XP awarded, and a +5% statutory retention bonus applied to {activeWeakestDrill.targetPartTitles[0]}.
                  </p>
                </div>

                <div className="pt-2 flex justify-center">
                  <button
                    onClick={() => {
                      setIsWeakestLinkModalOpen(false);
                      setActiveWeakestDrill(null);
                    }}
                    className="px-8 py-3 rounded-2xl bg-zinc-100 hover:bg-white text-zinc-950 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-lg"
                  >
                    RETURN TO HEATMAP DASHBOARD
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          10-QUESTION LIVE DIAGNOSTIC CHALLENGE MODAL
          ========================================================================= */}
      {isDiagnosticModalOpen && diagnosticQuestionsList.length > 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[var(--bg-surface)] border border-[var(--border-strong)] rounded-2xl w-full max-w-xl overflow-hidden shadow-2xl flex flex-col animate-scaleUp">
            {/* Header */}
            <div className="p-4 border-b border-[var(--border-subtle)] flex items-center justify-between bg-[var(--bg-surface)]">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-zinc-100 text-zinc-950 font-mono text-xs font-bold">
                  Q {currentDiagIndex + 1} / {diagnosticQuestionsList.length}
                </span>
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  Score: {diagScore.correct} / {diagScore.total}
                </span>
              </div>
              <button
                onClick={() => setIsDiagnosticModalOpen(false)}
                className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-base)] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Question Body */}
            {(() => {
              const currentQ = diagnosticQuestionsList[currentDiagIndex];
              return (
                <div className="p-5 space-y-4">
                  <div className="text-sm sm:text-base font-extrabold text-[var(--text-primary)] leading-relaxed">
                    {currentQ.question}
                  </div>

                  <div className="space-y-2">
                    {currentQ.options.map((opt, idx) => {
                      let btnStyle = 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-zinc-500';
                      if (isAnswerRevealed) {
                        if (idx === currentQ.correctIndex) {
                          btnStyle = 'bg-emerald-500/10 border-emerald-500 text-emerald-400 font-bold';
                        } else if (idx === selectedOption) {
                          btnStyle = 'bg-rose-500/10 border-rose-500 text-rose-400';
                        }
                      }

                      return (
                        <button
                          key={idx}
                          disabled={isAnswerRevealed}
                          onClick={() => handleSelectDiagnosticOption(idx)}
                          className={`w-full p-3 rounded-xl border text-left text-xs font-mono transition-all btn-tactile flex items-start gap-2.5 cursor-pointer ${btnStyle}`}
                        >
                          <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center shrink-0 font-bold text-[10px]">
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span className="flex-1">{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation upon answer */}
                  {isAnswerRevealed && (
                    <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1.5 animate-fadeIn">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className={selectedOption === currentQ.correctIndex ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                          {selectedOption === currentQ.correctIndex ? '✓ Correct Answer!' : '✗ Incorrect Option'}
                        </span>
                        <span className="text-zinc-200 font-bold">{currentQ.articleRef}</span>
                      </div>
                      <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                        {currentQ.explanation}
                      </p>
                    </div>
                  )}
                </div>
              );
            })()}

            {/* Footer */}
            <div className="p-4 border-t border-[var(--border-subtle)] flex items-center justify-between bg-[var(--bg-surface)]">
              <span className="text-xs font-mono text-[var(--text-muted)]">
                Updates Readiness Index Live
              </span>
              {isAnswerRevealed && (
                <button
                  onClick={handleNextDiagnosticQuestion}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-mono text-xs font-bold shadow-md transition-all btn-tactile cursor-pointer"
                >
                  <span>
                    {currentDiagIndex < diagnosticQuestionsList.length - 1 ? 'NEXT QUESTION' : 'FINISH DRILL'}
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          PRINT-OPTIMIZED AUDIT REPORT (Hidden in normal screen, visible on print)
          ========================================================================= */}
      <div className="hidden print:block text-black bg-white p-8">
        <div className="border-b-2 border-black pb-4 mb-6">
          <h1 className="text-2xl font-bold uppercase tracking-tight">
            SAMVIDHAN &mdash; Official Constitutional Readiness Audit
          </h1>
          <div className="text-xs font-mono mt-1 text-gray-600">
            Target Examination: {EXAM_PROFILES[selectedProfile].title} | Generated: {new Date().toLocaleDateString('en-IN')}
          </div>
          <div className="mt-3 flex items-center gap-6 text-sm">
            <span><strong>Master CRI Score:</strong> {report.overallScore}% ({report.tierTitle})</span>
            <span><strong>Mastery:</strong> {report.masteredPartsCount}/25 Parts</span>
            <span><strong>Vulnerabilities:</strong> {report.vulnerablePartsCount}/25 Parts</span>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-sm font-bold uppercase mb-2">Priority Blindspots &amp; Action Plan</h2>
          <table className="w-full text-xs border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-400 p-2 text-left">Part Number &amp; Title</th>
                <th className="border border-gray-400 p-2 text-left">Articles</th>
                <th className="border border-gray-400 p-2 text-center">Score</th>
                <th className="border border-gray-400 p-2 text-left">Prescribed Action</th>
              </tr>
            </thead>
            <tbody>
              {report.criticalBlindspots.map((item) => (
                <tr key={item.part.id}>
                  <td className="border border-gray-400 p-2 font-bold">{item.part.partNumber}: {item.part.title}</td>
                  <td className="border border-gray-400 p-2 font-mono">{item.part.articlesRange}</td>
                  <td className="border border-gray-400 p-2 text-center font-bold">{item.readinessScore}%</td>
                  <td className="border border-gray-400 p-2">{item.recommendedAction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase mb-2">Complete 25-Part Syllabus Audit Table</h2>
          <table className="w-full text-[11px] border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-1.5 text-left">Part</th>
                <th className="border border-gray-300 p-1.5 text-left">Articles</th>
                <th className="border border-gray-300 p-1.5 text-left">Title</th>
                <th className="border border-gray-300 p-1.5 text-center">Readiness</th>
                <th className="border border-gray-300 p-1.5 text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {report.partsStats.map((item) => (
                <tr key={item.part.id}>
                  <td className="border border-gray-300 p-1.5 font-mono">{item.part.partNumber}</td>
                  <td className="border border-gray-300 p-1.5 font-mono">{item.part.articlesRange}</td>
                  <td className="border border-gray-300 p-1.5">{item.part.title}</td>
                  <td className="border border-gray-300 p-1.5 text-center font-bold">{item.readinessScore}%</td>
                  <td className="border border-gray-300 p-1.5 text-center uppercase font-mono">{item.tier}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
