import React, { useMemo } from 'react';
import {
  ArrowRight,
  Sparkles,
  Layers,
  Award,
  Flame,
  Timer,
  AlertTriangle,
  BrainCircuit,
  ShieldCheck,
  Star,
  Compass,
  CheckCircle2,
  FileText,
  Swords,
  Gavel,
  Clock,
  Target,
  Zap,
  GitBranch
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { PREAMBLE_DATA } from '../../data/preambleData';
import { PreambleArchitectureSVG } from '../VectorDiagrams/PreambleArchitectureSVG';
import { AnnotatedLegalText } from '../Common/AnnotatedLegalText';
import { getStudyReadinessSnapshot } from '../../services/progressVaultService';
import { computeConstitutionalReadinessReport } from '../../services/readinessIndexService';
import { DailyConstitutionalWorkout } from '../Common/DailyConstitutionalWorkout';

export const OverviewDashboard: React.FC = () => {
  const { setActiveTab, setVaultModalOpen, launchFlashcardDeck, pinnedFlashcardIds } = useTheme();
  const readiness = useMemo(() => getStudyReadinessSnapshot(), [pinnedFlashcardIds]);
  const criReport = useMemo(() => computeConstitutionalReadinessReport('holistic'), [pinnedFlashcardIds]);

  return (
    <div className="flex flex-col gap-10 py-6 max-w-7xl mx-auto px-4 sm:px-6 animate-fadeIn">
      {/* =========================================================================
          HERO SECTION: Headline & Key Launch Triggers
          ========================================================================= */}
      <section className="flex flex-col items-center text-center max-w-4xl mx-auto pt-4 pb-2">
        <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--badge-bg)] text-[var(--text-secondary)] border border-[var(--badge-border)] text-xs font-mono mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
          <span>Interactive Master Platform for Indian Constitutional Law</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] mb-4">
          The Living Architecture of the Republic
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl font-normal leading-relaxed text-pretty">
          Deconstruct the supreme law of India through verbatim Bare Act clauses, 100 landmark Supreme Court precedents, spaced repetition recall, and timed exam hall drills.
        </p>

        {/* Essential Fast-Track Quick Triggers */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mt-6">
          <button
            onClick={() => setActiveTab('bootcamp')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] font-mono text-xs font-semibold transition-all btn-tactile shadow-sm"
          >
            <Flame className="w-4 h-4 text-amber-500" />
            <span>15-DAY PO BOOTCAMP <span className="text-amber-400 font-bold">(3,000 MCQs)</span></span>
          </button>
          <button
            onClick={() => setActiveTab('articles-master')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] font-mono text-xs font-semibold transition-all btn-tactile shadow-sm"
          >
            <Layers className="w-4 h-4 text-[var(--text-muted)]" />
            <span>ARTICLES <span className="text-[var(--accent)] font-bold">1–395</span> BARE ACT</span>
          </button>
          <button
            onClick={() => setActiveTab('judgments')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] font-mono text-xs font-semibold transition-all btn-tactile shadow-sm"
          >
            <Award className="w-4 h-4 text-[var(--text-muted)]" />
            <span><span className="text-[var(--accent)] font-bold">100</span> LANDMARK CASES</span>
          </button>
          <button
            onClick={() => setActiveTab('flashcards')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] font-mono text-xs font-semibold transition-all btn-tactile shadow-sm"
          >
            <BrainCircuit className="w-4 h-4 text-[var(--text-muted)]" />
            <span>LEITNER FLASHCARDS (SRS)</span>
          </button>
          <button
            onClick={() => setActiveTab('mock-exam')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] font-mono text-xs font-semibold transition-all btn-tactile shadow-sm"
          >
            <Timer className="w-4 h-4 text-[var(--text-muted)]" />
            <span>TIMED EXAM HALL</span>
          </button>
          <button
            onClick={() => setActiveTab('pyqs')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] font-mono text-xs font-semibold transition-all btn-tactile shadow-sm"
          >
            <FileText className="w-4 h-4 text-[var(--text-muted)]" />
            <span>MAINS VAULT (126 SOLVED)</span>
          </button>
          <button
            onClick={() => setActiveTab('precedent-clash')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] font-mono text-xs font-semibold transition-all btn-tactile shadow-sm"
          >
            <Swords className="w-4 h-4 text-[var(--text-muted)]" />
            <span>PRECEDENT CLASH <span className="text-rose-400 font-bold">(OVERRULED)</span></span>
          </button>
          <button
            onClick={() => setActiveTab('judgment-lab')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] font-mono text-xs font-semibold transition-all btn-tactile shadow-sm"
          >
            <Gavel className="w-4 h-4 text-[var(--text-muted)]" />
            <span>JUDGMENT WRITING LAB</span>
          </button>
          <button
            onClick={() => setActiveTab('mains-mock')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] font-mono text-xs font-semibold transition-all btn-tactile shadow-sm"
          >
            <Clock className="w-4 h-4 text-[var(--text-muted)]" />
            <span>3-HR MAINS MOCK HALL</span>
          </button>
          <button
            onClick={() => setActiveTab('readiness-index')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] font-mono text-xs font-semibold transition-all btn-tactile shadow-sm"
          >
            <Target className="w-4 h-4 text-[var(--text-muted)]" />
            <span>25-PART READINESS INDEX</span>
          </button>
          <button
            onClick={() => setActiveTab('fast-track')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] font-mono text-xs font-semibold transition-all btn-tactile shadow-sm"
          >
            <Zap className="w-4 h-4 text-[var(--text-muted)]" />
            <span>SPEED HACKS <span className="text-amber-400 font-bold">(+89/+90)</span></span>
          </button>
          <button
            onClick={() => setActiveTab('lineage')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] font-mono text-xs font-semibold transition-all btn-tactile shadow-sm"
          >
            <GitBranch className="w-4 h-4 text-[var(--text-muted)]" />
            <span>KNOWLEDGE GRAPHS <span className="text-purple-400 font-bold">(TREES)</span></span>
          </button>
        </div>
      </section>

      {/* =========================================================================
          FEATURED: DAILY 5-MINUTE CONSTITUTIONAL WORKOUT (MICRO-DOSING & STREAK)
          ========================================================================= */}
      <section>
        <DailyConstitutionalWorkout />
      </section>

      {/* =========================================================================
          LIVE STUDY READINESS & BACKUP STRIP
          ========================================================================= */}
      <section className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 flex-1">
          <button
            onClick={() => setActiveTab('bootcamp')}
            className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-left transition-all"
          >
            <div className="flex items-center gap-1.5 text-[10px] font-mono font-semibold uppercase text-[var(--text-muted)]">
              <Flame className="w-3.5 h-3.5 text-amber-500" /> Bootcamp
            </div>
            <div className="text-lg font-extrabold font-mono text-[var(--text-primary)] mt-0.5">
              {readiness.bootcampDaysCompleted}/15 <span className="text-[11px] font-normal text-[var(--text-muted)]">days</span>
            </div>
            <div className="text-[10px] font-mono text-[var(--text-muted)]">{readiness.bootcampMcqsAnswered} MCQs answered</div>
          </button>

          <button
            onClick={() => launchFlashcardDeck('all', 'all')}
            className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-left transition-all"
          >
            <div className="flex items-center gap-1.5 text-[10px] font-mono font-semibold uppercase text-[var(--text-muted)]">
              <BrainCircuit className="w-3.5 h-3.5 text-[var(--accent)]" /> Leitner SRS
            </div>
            <div className="text-lg font-extrabold font-mono text-[var(--text-primary)] mt-0.5">
              {readiness.srsTotalReviews} <span className="text-[11px] font-normal text-[var(--text-muted)]">reviews</span>
            </div>
            <div className="text-[10px] font-mono text-[var(--text-muted)]">
              {readiness.srsStreakDays}-day streak · {readiness.srsCardsMastered} Box 5
            </div>
          </button>

          <button
            onClick={() => setActiveTab('mistakes-notebook')}
            className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-left transition-all"
          >
            <div className="flex items-center gap-1.5 text-[10px] font-mono font-semibold uppercase text-[var(--text-muted)]">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-500" /> Mistakes Bank
            </div>
            <div className="text-lg font-extrabold font-mono text-[var(--text-primary)] mt-0.5">
              {readiness.mistakesUnmastered} <span className="text-[11px] font-normal text-[var(--text-muted)]">active</span>
            </div>
            <div className="text-[10px] font-mono text-[var(--text-muted)]">{readiness.mistakesMastered} mastered</div>
          </button>

          <button
            onClick={() => launchFlashcardDeck('all', 'pinned')}
            className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-left transition-all"
          >
            <div className="flex items-center gap-1.5 text-[10px] font-mono font-semibold uppercase text-[var(--text-muted)]">
              <Star className="w-3.5 h-3.5 text-amber-500" /> Pinned SRS
            </div>
            <div className="text-lg font-extrabold font-mono text-[var(--text-primary)] mt-0.5">
              {readiness.srsPinnedCount} <span className="text-[11px] font-normal text-[var(--text-muted)]">cards</span>
            </div>
            <div className="text-[10px] font-mono text-[var(--text-muted)]">Focus recall queue</div>
          </button>

          <button
            onClick={() => setActiveTab('readiness-index')}
            className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-left transition-all"
          >
            <div className="flex items-center gap-1.5 text-[10px] font-mono font-semibold uppercase text-[var(--text-muted)]">
              <Target className="w-3.5 h-3.5 text-[var(--accent)]" /> Readiness Index
            </div>
            <div className="text-lg font-extrabold font-mono text-[var(--text-primary)] mt-0.5">
              {criReport.overallScore}% <span className="text-[11px] font-normal text-[var(--text-muted)]">CRI</span>
            </div>
            <div className="text-[10px] font-mono text-[var(--text-muted)]">
              {criReport.masteredPartsCount}/25 parts mastered
            </div>
          </button>
        </div>

        <button
          onClick={() => setVaultModalOpen(true)}
          className="px-4 py-3 rounded-xl bg-[var(--bg-base)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-[var(--text-primary)] font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-all shrink-0 btn-tactile shadow-sm"
          title="Export or restore your study progress as a local JSON backup"
        >
          <ShieldCheck className="w-4 h-4 text-[var(--text-muted)]" />
          <span>Backup / Restore Progress</span>
        </button>
      </section>

      {/* =========================================================================
          THE PREAMBLE (Central Cornerstone of the Republic)
          ========================================================================= */}
      <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--gold)] border border-[var(--gold)]/30 font-bold">
                The Preamble (प्रस्तावना)
              </span>
              <span className="text-xs font-mono text-[var(--text-muted)]">
                {PREAMBLE_DATA.latinMaxim}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight">
              The Objective Resolution of the Sovereign Nation
            </h2>
          </div>
          <div className="text-xs font-mono text-[var(--text-muted)] text-right">
            Drafted by Pt. Nehru • Enacted 26 Nov 1949
          </div>
        </div>

        {/* Verbatim Preamble in Editorial Typography */}
        <div className="p-6 sm:p-8 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] shadow-inner text-center">
          <p className="font-editorial text-lg sm:text-xl md:text-2xl text-[var(--text-primary)] leading-relaxed italic max-w-3xl mx-auto whitespace-pre-line tracking-wide">
            <AnnotatedLegalText text={PREAMBLE_DATA.verbatimText} />
          </p>
          <div className="mt-6 flex flex-wrap justify-center items-center gap-3 text-xs font-mono text-[var(--text-muted)]">
            <span className="px-2.5 py-1 rounded bg-[var(--bg-base)] border border-[var(--border-subtle)]">
              <AnnotatedLegalText text="42nd Amd (1976): Added Socialist, Secular & Integrity" />
            </span>
            <span className="px-2.5 py-1 rounded bg-[var(--bg-base)] border border-[var(--border-subtle)]">
              <AnnotatedLegalText text="Kesavananda Bharati: Part of Basic Structure" />
            </span>
          </div>
        </div>

        {/* Interactive Preamble Architecture Vector SVG */}
        <PreambleArchitectureSVG />

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
          {PREAMBLE_DATA.fourCorePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex flex-col justify-between card-interactive"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base font-bold text-[var(--text-primary)]">
                    <AnnotatedLegalText text={pillar.title} />
                  </h4>
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">{pillar.origin}</span>
                </div>
                <div className="text-xs font-mono text-[var(--accent)] mb-2">{pillar.scope}</div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  <AnnotatedLegalText text={pillar.description} />
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] text-[10px] font-mono text-[var(--text-muted)]">
                {pillar.associatedArticles}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          VITAL STATISTICS OF THE REPUBLIC
          ========================================================================= */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Articles', value: '395 / 470+', sub: 'Originally 395 in 22 Parts', color: 'var(--accent)', tab: 'articles-master' },
          { label: 'Schedules', value: '12 Schedules', sub: 'Originally 8 in 1950', color: 'var(--gold)', tab: 'schedules' },
          { label: 'Amendments', value: '106 Passed', sub: 'From 1st (1951) to 106th (2023)', color: 'var(--emerald)', tab: 'amendments' },
          { label: 'Words in Text', value: '146,385', sub: 'Longest written constitution', color: 'var(--blue)', tab: 'dictionary' },
        ].map((stat, idx) => (
          <div
            key={idx}
            onClick={() => setActiveTab(stat.tab)}
            className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] cursor-pointer flex flex-col justify-between card-interactive btn-tactile"
          >
            <span className="text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider">{stat.label}</span>
            <div className="text-2xl font-bold font-mono my-1 tabular-nums" style={{ color: stat.color }}>{stat.value}</div>
            <span className="text-[11px] text-[var(--text-muted)]">{stat.sub} →</span>
          </div>
        ))}
      </section>

      {/* =========================================================================
          THE IMPORTANT STUFF: 4 Main Learning Gateways
          ========================================================================= */}
      <section className="flex flex-col gap-5">
        <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-[var(--accent)]" />
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight">
              Constitutional Pillars & Learning Gateways
            </h2>
          </div>
          <span className="text-xs font-mono text-[var(--text-muted)] hidden sm:inline">
            Direct access to all curriculum modules
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Pillar 1: Bare Act & Statutory Provisions */}
          <div
            onClick={() => setActiveTab('articles-master')}
            className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] cursor-pointer card-interactive btn-tactile shadow-sm flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)] font-medium">
                  1. Study Material & Text
                </span>
                <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                Bare Act, 25 Parts & 12 Schedules
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed text-pretty">
                Verbatim clauses of Articles 1–395, amendment diffs, Parts I–XXII analytical commentary, 12 Schedules mnemonic taxonomy ("TEARS OF OLD PM"), and 10 core judicial doctrines.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--accent)] font-semibold">
              <span>Explore Articles 1–395 & Parts</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Pillar 2: Landmark Jurisprudence */}
          <div
            onClick={() => setActiveTab('judgments')}
            className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] cursor-pointer card-interactive btn-tactile shadow-sm flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)] font-medium">
                  2. Case Law & Precedents
                </span>
                <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                100 Landmark Cases & Lineage Trees
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed text-pretty">
                Master 100 landmark Supreme Court rulings with authoritative ratios from Gopalan (1950) to Electoral Bonds (2024), 1950–2026 precedent genealogy trees, and oral viva voce courtroom advocacy.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--accent)] font-semibold">
              <span>Review 100 Landmark Ratios</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Pillar 3: Active Recall & Exam Engines */}
          <div
            onClick={() => setActiveTab('flashcards')}
            className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] cursor-pointer card-interactive btn-tactile shadow-sm flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)] font-medium">
                  3. Practice & Active Recall
                </span>
                <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                Constitutional Arcade & Leitner SRS
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed text-pretty">
                Chief Justice Bench Simulator, 60s Article Blitz, Writs Emergency Room, Synaptic Matcher, 900+ Leitner SRS flashcards, timed mock exams, and judicial career level progression.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--accent)] font-semibold">
              <span onClick={(e) => { e.stopPropagation(); setActiveTab('arcade'); }} className="hover:underline">
                Enter Constitutional Arcade (4 Games + XP) →
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Pillar 4: Capstone 15-Day Fast-Track Bootcamp */}
          <div
            onClick={() => setActiveTab('bootcamp')}
            className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] cursor-pointer card-interactive btn-tactile shadow-sm flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)] font-medium">
                  4. Capstone Intensive
                </span>
                <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                15-Day Preparation Bootcamp (3,000 MCQs)
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed text-pretty">
                Daily structured timetable with 6 daily tasks, 200 daily MCQs across 5 specialized rounds, 150 courtroom case studies, and daily associative Synaptic Memory Matcher.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--accent)] font-semibold">
              <span>Launch 15-Day Preparation Tracker</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
