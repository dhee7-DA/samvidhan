import React, { useState, useMemo, useEffect } from 'react';
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
  Zap
} from 'lucide-react';
import {
  computeConstitutionalReadinessReport,
  EXAM_PROFILES,
  saveSelfCalibration,
  recordDiagnosticAnswer,
  type ExamProfileType,
  type ConstitutionalReadinessReport,
  type PartReadinessStats,
  type DiagnosticMCQ
} from '../../services/readinessIndexService';
import { useTheme } from '../../context/ThemeContext';

export const ReadinessIndexView: React.FC = () => {
  const { setActiveTab } = useTheme();

  // Active exam profile
  const [selectedProfile, setSelectedProfile] = useState<ExamProfileType>('holistic');
  const [viewMode, setViewMode] = useState<'grid' | 'grouped'>('grid');
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

  // Calculate report
  const report: ConstitutionalReadinessReport = useMemo(() => {
    return computeConstitutionalReadinessReport(selectedProfile);
  }, [selectedProfile, refreshTrigger]);

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
        // Default partNumber: natural order
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

  // Start Quick 10-Question Diagnostic Drill
  const handleLaunchDiagnosticDrill = (preselectedPartId?: string) => {
    let pool: DiagnosticMCQ[] = [];
    if (preselectedPartId) {
      const found = report.partsStats.find((p) => p.part.id === preselectedPartId);
      if (found) pool = [...found.part.diagnosticQuestions];
    } else {
      // Pick questions from vulnerable and moderate parts first
      const prioritizedParts = [...report.partsStats].sort((a, b) => a.readinessScore - b.readinessScore);
      prioritizedParts.forEach((p) => {
        pool.push(...p.part.diagnosticQuestions);
      });
    }

    if (pool.length === 0) return;
    // Shuffle pool and take up to 10
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

    // Trigger report refresh
    setRefreshTrigger((prev) => prev + 1);
  };

  const handleNextDiagnosticQuestion = () => {
    if (currentDiagIndex < diagnosticQuestionsList.length - 1) {
      setCurrentDiagIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerRevealed(false);
    } else {
      // Finished
      setIsDiagnosticModalOpen(false);
    }
  };

  const handleSaveCalibrationBonus = (partId: string, val: number) => {
    saveSelfCalibration(partId, val);
    setOfflineBonusSlider(val);
    setRefreshTrigger((prev) => prev + 1);
  };

  const handlePrintAuditReport = () => {
    window.print();
  };

  // Color helper based on score
  const getScoreColor = (score: number) => {
    if (score >= 75) return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
    if (score >= 50) return 'text-amber-400 bg-amber-500/10 border-amber-500/30';
    return 'text-rose-400 bg-rose-500/10 border-rose-500/30';
  };

  const getScoreBarGradient = (score: number) => {
    if (score >= 75) return 'from-emerald-500 to-teal-400';
    if (score >= 50) return 'from-amber-500 to-yellow-400';
    return 'from-rose-500 to-red-400';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-8 animate-fadeIn">
      {/* =========================================================================
          HEADER: Title, Subtitle, Quick Controls
          ========================================================================= */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-mono font-bold bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
              <Target className="w-3.5 h-3.5" />
              Syllabus Diagnostic Engine
            </span>
            <span className="text-xs font-mono text-[var(--text-muted)]">
              25 Active Constitutional Parts Audited
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Constitutional Readiness Index & 25-Part Heatmap
          </h1>
          <p className="text-sm text-[var(--text-secondary)] mt-1 max-w-3xl leading-relaxed">
            Multi-dimensional diagnostic matrix synthesizing Prelims MCQ accuracy, Mains blueprint drafting, Leitner SRS retention, and recent 2024–2025 Constitution Bench benchmarks.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => handleLaunchDiagnosticDrill()}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[var(--accent)] text-[var(--bg-base)] font-mono text-xs font-bold shadow-md hover:opacity-95 transition-all btn-tactile"
          >
            <Zap className="w-4 h-4 fill-current" />
            <span>10-Q DIAGNOSTIC TEST</span>
          </button>
          <button
            onClick={handlePrintAuditReport}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] font-mono text-xs font-semibold transition-all btn-tactile"
          >
            <Printer className="w-4 h-4 text-[var(--text-muted)]" />
            <span>PRINT AUDIT</span>
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
          <span className="text-xs font-mono text-[var(--accent)]">
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
                className={`p-3 rounded-xl text-left border transition-all btn-tactile flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[var(--bg-surface-elevated)] border-[var(--accent)] ring-1 ring-[var(--accent)] shadow-sm'
                    : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--text-muted)] font-bold">
                      {p.badge}
                    </span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-[var(--accent)]" />}
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
            {/* SVG Progress Ring */}
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

        {/* Right: 4 High-Yield Diagnostic Pill Cards */}
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {/* Card 1: Mastery Zone */}
          <button
            onClick={() => setFilterTier(filterTier === 'mastery' ? 'all' : 'mastery')}
            className={`p-3.5 rounded-xl border text-left transition-all btn-tactile flex flex-col justify-between ${
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
            className={`p-3.5 rounded-xl border text-left transition-all btn-tactile flex flex-col justify-between ${
              filterTier === 'moderate'
                ? 'bg-amber-500/10 border-amber-500 ring-1 ring-amber-500'
                : 'bg-[var(--bg-base)] border-[var(--border-subtle)] hover:border-amber-500/50'
            }`}
          >
            <div className="flex items-center justify-between text-amber-400">
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
            className={`p-3.5 rounded-xl border text-left transition-all btn-tactile flex flex-col justify-between ${
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
            <div className="text-[10px] text-[var(--text-muted)] mt-1">High danger of mark loss</div>
          </button>

          {/* Card 4: Exam Projections */}
          <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col justify-between">
            <div className="flex items-center justify-between text-[var(--accent)]">
              <span className="text-[10px] font-mono font-bold uppercase">Competence</span>
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-mono text-[var(--text-primary)] font-bold">
                Prelims: <span className="text-[var(--accent)]">{report.projectedPrelimsAccuracy}%</span>
              </div>
              <div className="text-xs font-mono text-[var(--text-primary)] font-bold mt-0.5">
                Mains: <span className="text-amber-400">{report.projectedMainsCompetence}%</span>
              </div>
            </div>
            <div className="text-[10px] text-[var(--text-muted)] mt-1">Projected conversion</div>
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
                    <Sparkles className="w-3 h-3 text-amber-400" />
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
                  className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-[var(--accent)] text-[var(--bg-base)] font-mono text-xs font-bold hover:opacity-95 transition-all btn-tactile"
                >
                  <Zap className="w-3.5 h-3.5" /> Drill MCQs
                </button>
                <button
                  onClick={() => setActivePartForModal(item)}
                  className="px-2.5 py-1.5 rounded-lg bg-[var(--bg-base)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] font-mono text-xs font-semibold transition-all btn-tactile"
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
        <div className="flex items-center gap-2">
          {/* View Mode Toggle */}
          <div className="inline-flex rounded-lg border border-[var(--border-subtle)] p-0.5 bg-[var(--bg-base)]">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1 rounded-md text-xs font-mono font-bold transition-all ${
                viewMode === 'grid'
                  ? 'bg-[var(--accent)] text-[var(--bg-base)] shadow-sm'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              25-Grid View
            </button>
            <button
              onClick={() => setViewMode('grouped')}
              className={`px-3 py-1 rounded-md text-xs font-mono font-bold transition-all ${
                viewMode === 'grouped'
                  ? 'bg-[var(--accent)] text-[var(--bg-base)] shadow-sm'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              By Category
            </button>
          </div>

          {/* Quick Filter Status */}
          <div className="hidden md:flex items-center gap-1.5 pl-2 border-l border-[var(--border-subtle)]">
            {(['all', 'vulnerable', 'moderate', 'mastery'] as const).map((tier) => (
              <button
                key={tier}
                onClick={() => setFilterTier(tier)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono capitalize transition-all ${
                  filterTier === tier
                    ? 'bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] font-bold border border-[var(--border-strong)]'
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
              className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)]"
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
            className="px-2.5 py-1.5 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent)]"
          >
            <option value="partNumber">Sort: Part I–XXII</option>
            <option value="scoreAsc">Sort: Lowest Score (Weakest)</option>
            <option value="scoreDesc">Sort: Highest Score (Strongest)</option>
            <option value="weight">Sort: Exam Weight</option>
          </select>
        </div>
      </div>

      {/* =========================================================================
          THE 25-PART HEATMAP MATRIX
          ========================================================================= */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {displayedParts.map((item) => {
            const scoreColorClass = getScoreColor(item.readinessScore);
            const gradientClass = getScoreBarGradient(item.readinessScore);
            return (
              <div
                key={item.part.id}
                onClick={() => setActivePartForModal(item)}
                className="group relative p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between overflow-hidden"
              >
                {/* Visual Top Bar */}
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

                  <div className="text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors leading-snug line-clamp-2 mt-1">
                    {item.part.title}
                  </div>
                  <div className="text-[10px] font-mono text-[var(--text-muted)] mt-0.5">
                    {item.part.articlesRange}
                  </div>

                  {/* Stars for Exam Weight */}
                  <div className="flex items-center gap-1 mt-2 text-[10px] text-[var(--text-muted)] font-mono">
                    <span>Yield:</span>
                    <span className="text-amber-400 font-bold">
                      {'★'.repeat(item.part.mainsImportance)}
                    </span>
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
      ) : (
        /* Grouped by Category View */
        <div className="flex flex-col gap-6">
          {Object.entries(groupedParts).map(([category, items]) => (
            <div key={category} className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)] bg-[var(--badge-bg)] px-2.5 py-0.5 rounded-md border border-[var(--badge-border)]">
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
                      className="group relative p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between overflow-hidden"
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

                        <div className="text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors leading-snug line-clamp-2 mt-1">
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
            <div className="flex items-center gap-2 text-[var(--accent)] mb-1">
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
                  <span className="text-[10px] font-mono font-extrabold px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--accent)]">
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
      {activePartForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[var(--bg-surface)] border border-[var(--border-strong)] rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col animate-scaleUp">
            {/* Modal Header */}
            <div className="p-5 border-b border-[var(--border-subtle)] flex items-start justify-between gap-4 sticky top-0 bg-[var(--bg-surface)]/95 backdrop-blur z-10">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
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
                className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-base)] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-5 space-y-5">
              {/* Score Breakdown Bars */}
              <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-3">
                <div className="text-xs font-mono font-bold uppercase text-[var(--text-muted)]">
                  Component Diagnostics & Evidence
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
                  <div className="p-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                    <div className="text-xs font-mono text-[var(--text-muted)]">MCQ Accuracy</div>
                    <div className="text-base font-extrabold font-mono text-[var(--accent)] mt-0.5">
                      {activePartForModal.mcqAccuracy}%
                    </div>
                    <div className="text-[10px] text-[var(--text-muted)]">
                      {activePartForModal.mcqsAttempted} attempted
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                    <div className="text-xs font-mono text-[var(--text-muted)]">Mains Drafts</div>
                    <div className="text-base font-extrabold font-mono text-amber-400 mt-0.5">
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
                    <span className="text-[var(--text-secondary)]">Offline Textbook Reading Credit (Self-Audit):</span>
                    <span className="text-[var(--accent)] font-bold">+{offlineBonusSlider}% Bonus</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="25"
                    step="5"
                    value={offlineBonusSlider}
                    onChange={(e) => handleSaveCalibrationBonus(activePartForModal.part.id, Number(e.target.value))}
                    className="w-full h-1.5 bg-[var(--bg-surface)] rounded-lg appearance-none cursor-pointer accent-[var(--accent)]"
                  />
                  <span className="text-[10px] text-[var(--text-muted)]">
                    Adjust this if you have thoroughly studied this part from standard treatises (e.g. M.P. Jain / D.D. Basu).
                  </span>
                </div>
              </div>

              {/* 2024–2025 Bench Anchor */}
              <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400 uppercase mb-1">
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
                      <span className="font-mono font-bold text-[var(--accent)] shrink-0">
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
                  Essential Case Laws & Ratios ({activePartForModal.part.landmarkPrecedents.length} Benchmarks)
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
                <div className="text-xs font-mono font-bold text-[var(--accent)] uppercase mb-1">
                  Mains Formulation Focus
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed italic">
                  &ldquo;{activePartForModal.part.mainsFocusBlueprint}&rdquo;
                </p>
              </div>
            </div>

            {/* Modal Footer Controls */}
            <div className="p-4 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] flex flex-wrap items-center justify-between gap-2">
              <button
                onClick={() => {
                  setActivePartForModal(null);
                  handleLaunchDiagnosticDrill(activePartForModal.part.id);
                }}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[var(--accent)] text-[var(--bg-base)] font-mono text-xs font-bold shadow-md hover:opacity-95 transition-all btn-tactile"
              >
                <Zap className="w-3.5 h-3.5" />
                <span>DRILL PART QUESTIONS</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setActivePartForModal(null);
                    setActiveTab('pyqs');
                  }}
                  className="px-3 py-2 rounded-xl bg-[var(--bg-base)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] font-mono text-xs font-semibold transition-all btn-tactile"
                >
                  Mains Vault
                </button>
                <button
                  onClick={() => {
                    setActivePartForModal(null);
                    setActiveTab('articles-master');
                  }}
                  className="px-3 py-2 rounded-xl bg-[var(--bg-base)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] font-mono text-xs font-semibold transition-all btn-tactile"
                >
                  Bare Act Explorer
                </button>
              </div>
            </div>
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
                <span className="px-2 py-0.5 rounded bg-[var(--accent)] text-[var(--bg-base)] font-mono text-xs font-bold">
                  Q {currentDiagIndex + 1} / {diagnosticQuestionsList.length}
                </span>
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  Score: {diagScore.correct} / {diagScore.total}
                </span>
              </div>
              <button
                onClick={() => setIsDiagnosticModalOpen(false)}
                className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-base)]"
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
                      let btnStyle = 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent)]';
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
                          className={`w-full p-3 rounded-xl border text-left text-xs font-mono transition-all btn-tactile flex items-start gap-2.5 ${btnStyle}`}
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
                        <span className="text-[var(--accent)] font-bold">{currentQ.articleRef}</span>
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
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[var(--accent)] text-[var(--bg-base)] font-mono text-xs font-bold shadow-md hover:opacity-95 transition-all btn-tactile"
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
            SAMVIDHAN — Official Constitutional Readiness Audit
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
          <h2 className="text-sm font-bold uppercase mb-2">Priority Blindspots & Action Plan</h2>
          <table className="w-full text-xs border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-400 p-2 text-left">Part Number & Title</th>
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
