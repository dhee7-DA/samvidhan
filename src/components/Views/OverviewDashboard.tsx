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
  FileText,
  Scale,
  Target,
  Gamepad2
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
    <div className="flex flex-col gap-8 py-6 max-w-6xl mx-auto px-4 sm:px-6 animate-fadeIn">
      {/* =========================================================================
          1. FIRST-VIEWPORT EDITORIAL WORKBENCH BENTO
          ========================================================================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Left: Compact Architectural Identity & Focused Entry Triggers */}
        <div className="lg:col-span-8 relative overflow-hidden p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] surface-specular bg-editorial-grid flex flex-col justify-between gap-6">
          {/* Hairline Constitutional Chakra Watermark (5% Opacity) */}
          <svg
            aria-hidden="true"
            viewBox="0 0 200 200"
            className="pointer-events-none select-none absolute -right-12 -bottom-12 w-64 h-64 text-[var(--text-primary)] opacity-[0.04]"
          >
            <circle cx="100" cy="100" r="88" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="76" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
            <circle cx="100" cy="100" r="16" fill="none" stroke="currentColor" strokeWidth="1.5" />
            {Array.from({ length: 24 }).map((_, i) => {
              const angle = (i * 15 * Math.PI) / 180;
              const x1 = 100 + 16 * Math.cos(angle);
              const y1 = 100 + 16 * Math.sin(angle);
              const x2 = 100 + 88 * Math.cos(angle);
              const y2 = 100 + 88 * Math.sin(angle);
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" />;
            })}
          </svg>

          <div className="relative z-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)] text-[11px] font-mono">
              <Sparkles className="w-3 h-3 text-[var(--accent)]" />
              <span>Indian Constitutional Law Workbench</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] leading-tight max-w-2xl">
              The Living Architecture of the Republic
            </h1>

            <p className="text-sm text-[var(--text-secondary)] max-w-xl leading-relaxed text-pretty">
              Master Bare Act Articles 1–395, 100 Supreme Court precedents, Leitner spaced repetition, and Prelims/Mains drills inside one focused workspace.
            </p>
          </div>

          {/* 3 Disciplined Primary Actions (Zero Rainbow Pill Overload) */}
          <div className="relative z-10 flex flex-wrap items-center gap-2.5 pt-2">
            <button
              onClick={() => setActiveTab('bootcamp')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--accent)] text-[var(--accent-contrast)] text-xs font-semibold shadow-sm hover:opacity-95 transition-[transform,opacity] duration-150 btn-tactile cursor-pointer"
            >
              <Flame className="w-4 h-4" />
              <span>Resume 15-Day Bootcamp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setActiveTab('articles-master')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-base)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-xs font-medium transition-[background-color,border-color,transform] duration-150 btn-tactile cursor-pointer"
            >
              <Layers className="w-4 h-4 text-[var(--text-muted)]" />
              <span>Articles 1–395 Bare Act</span>
            </button>

            <button
              onClick={() => setActiveTab('readiness-index')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-base)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-xs font-medium transition-[background-color,border-color,transform] duration-150 btn-tactile cursor-pointer"
            >
              <Target className="w-4 h-4 text-[var(--text-muted)]" />
              <span>Readiness Heatmap</span>
            </button>
          </div>
        </div>

        {/* Right: Live Constitutional Telemetry & Quick Resume Panel */}
        <div className="lg:col-span-4 p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] surface-specular flex flex-col justify-between gap-4">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] block">
                Master Standing
              </span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-2xl font-bold font-mono tabular-nums text-[var(--text-primary)]">
                  {criReport.overallScore}%
                </span>
                <span className="text-xs text-[var(--text-muted)]">
                  CRI &bull; {criReport.masteredPartsCount}/25 parts
                </span>
              </div>
            </div>

            <button
              onClick={() => setActiveTab('readiness-index')}
              className="px-2.5 py-1.5 rounded-lg bg-[var(--bg-base)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-[11px] font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
            >
              Inspect
            </button>
          </div>

          {/* Compact 2x2 Neutral Telemetry Tiles */}
          <div className="grid grid-cols-2 gap-2.5">
            <button
              onClick={() => setActiveTab('bootcamp')}
              className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-left transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-1.5 text-[11px] text-[var(--text-muted)]">
                <Flame className="w-3.5 h-3.5" />
                <span>Bootcamp</span>
              </div>
              <div className="text-base font-bold font-mono tabular-nums text-[var(--text-primary)] mt-1">
                {readiness.bootcampDaysCompleted}/15
              </div>
              <div className="text-[10px] font-mono text-[var(--text-muted)]">
                {readiness.bootcampMcqsAnswered} MCQs
              </div>
            </button>

            <button
              onClick={() => launchFlashcardDeck('all', 'all')}
              className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-left transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-1.5 text-[11px] text-[var(--text-muted)]">
                <BrainCircuit className="w-3.5 h-3.5" />
                <span>Leitner SRS</span>
              </div>
              <div className="text-base font-bold font-mono tabular-nums text-[var(--text-primary)] mt-1">
                {readiness.srsTotalReviews}
              </div>
              <div className="text-[10px] font-mono text-[var(--text-muted)]">
                {readiness.srsCardsMastered} Box 5
              </div>
            </button>

            <button
              onClick={() => setActiveTab('mistakes-notebook')}
              className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-left transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-1.5 text-[11px] text-[var(--text-muted)]">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Mistakes Bank</span>
              </div>
              <div className="text-base font-bold font-mono tabular-nums text-[var(--text-primary)] mt-1">
                {readiness.mistakesUnmastered}
              </div>
              <div className="text-[10px] font-mono text-[var(--text-muted)]">
                {readiness.mistakesMastered} resolved
              </div>
            </button>

            <button
              onClick={() => launchFlashcardDeck('all', 'pinned')}
              className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-left transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-1.5 text-[11px] text-[var(--text-muted)]">
                <Star className="w-3.5 h-3.5" />
                <span>Pinned SRS</span>
              </div>
              <div className="text-base font-bold font-mono tabular-nums text-[var(--text-primary)] mt-1">
                {readiness.srsPinnedCount}
              </div>
              <div className="text-[10px] font-mono text-[var(--text-muted)]">
                Focus queue
              </div>
            </button>
          </div>

          <button
            onClick={() => setVaultModalOpen(true)}
            className="w-full py-2.5 px-3 rounded-xl bg-[var(--bg-base)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs font-medium flex items-center justify-center gap-2 transition-colors btn-tactile cursor-pointer"
            title="Export or restore your study progress as a local JSON backup"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Backup / Restore Vault</span>
          </button>
        </div>
      </section>

      {/* =========================================================================
          2. CURATED QUICK WORKSPACES (6 Calm Monochrome Shortcuts)
          ========================================================================= */}
      <section className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-2.5">
        {[
          { label: 'Arcade (13 Games)', icon: Gamepad2, action: () => setActiveTab('arcade') },
          { label: 'Flashcards (SRS)', icon: BrainCircuit, action: () => setActiveTab('flashcards') },
          { label: '100 Cases', icon: Award, action: () => setActiveTab('judgments') },
          { label: 'Socratic Tutor', icon: Scale, action: () => setActiveTab('socratic-tutor') },
          { label: 'Mains Vault (126)', icon: FileText, action: () => setActiveTab('pyqs') },
          { label: 'Exam Simulator', icon: Timer, action: () => setActiveTab('mock-exam') }
        ].map((item) => (
          <button
            key={item.label}
            onClick={item.action}
            className="flex items-center justify-center gap-1.5 px-2.5 py-2.5 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-[11.5px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-[background-color,border-color,color,transform] duration-150 btn-tactile cursor-pointer"
          >
            <item.icon className="w-3.5 h-3.5 text-[var(--text-muted)] shrink-0" />
            <span className="truncate">{item.label}</span>
          </button>
        ))}
      </section>

      {/* =========================================================================
          3. DAILY 5-MINUTE CONSTITUTIONAL WORKOUT
          ========================================================================= */}
      <section>
        <DailyConstitutionalWorkout />
      </section>

      {/* =========================================================================
          4. VITAL STATISTICS OF THE REPUBLIC (Unified Tabular Monochrome)
          ========================================================================= */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Articles', value: '395 / 470+', sub: '22 Original Parts', tab: 'articles-master' },
          { label: 'Schedules', value: '12 Schedules', sub: 'Originally 8 in 1950', tab: 'schedules' },
          { label: 'Amendments', value: '106 Passed', sub: '1st (1951) to 106th (2023)', tab: 'amendments' },
          { label: 'Words in Text', value: '146,385', sub: 'Longest written constitution', tab: 'dictionary' }
        ].map((stat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(stat.tab)}
            className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] surface-specular text-left flex flex-col justify-between card-interactive cursor-pointer group"
          >
            <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
              {stat.label}
            </span>
            <div className="text-2xl font-bold font-mono my-1.5 tabular-nums text-[var(--text-primary)]">
              {stat.value}
            </div>
            <span className="text-xs text-[var(--text-muted)] group-hover:text-[var(--text-secondary)] transition-colors flex items-center gap-1">
              <span>{stat.sub}</span>
              <ArrowRight className="w-3 h-3 opacity-60 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </button>
        ))}
      </section>

      {/* =========================================================================
          5. THE PREAMBLE ARCHIVAL SPECIMEN
          ========================================================================= */}
      <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] surface-specular">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)] font-medium">
                The Preamble (प्रस्तावना)
              </span>
              <span className="text-xs font-mono text-[var(--text-muted)]">
                {PREAMBLE_DATA.latinMaxim}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight">
              The Objective Resolution of the Sovereign Nation
            </h2>
          </div>
          <div className="text-xs font-mono text-[var(--text-muted)]">
            Drafted by Pt. Nehru &bull; Enacted 26 Nov 1949
          </div>
        </div>

        {/* Verbatim Preamble in Editorial Serif Typography */}
        <div className="p-6 sm:p-8 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-center relative">
          <p className="font-editorial text-lg sm:text-xl md:text-2xl text-[var(--text-primary)] leading-relaxed italic max-w-3xl mx-auto whitespace-pre-line tracking-wide">
            <AnnotatedLegalText text={PREAMBLE_DATA.verbatimText} />
          </p>
          <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex flex-wrap justify-center items-center gap-2.5 text-xs font-mono text-[var(--text-muted)]">
            <span className="px-2.5 py-1 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
              <AnnotatedLegalText text="42nd Amd (1976): Added Socialist, Secular & Integrity" />
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
              <AnnotatedLegalText text="Kesavananda Bharati: Part of Basic Structure" />
            </span>
          </div>
        </div>

        {/* Interactive Preamble Architecture Vector SVG */}
        <PreambleArchitectureSVG />

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-1">
          {PREAMBLE_DATA.fourCorePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col justify-between card-interactive"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold text-[var(--text-primary)]">
                    <AnnotatedLegalText text={pillar.title} />
                  </h4>
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">{pillar.origin}</span>
                </div>
                <div className="text-[11px] font-mono text-[var(--text-secondary)] mb-2">{pillar.scope}</div>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed text-pretty">
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
          6. FOUR MAIN LEARNING GATEWAYS
          ========================================================================= */}
      <section className="flex flex-col gap-5">
        <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-[var(--text-primary)]" />
            <h2 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
              Curriculum Gateways
            </h2>
          </div>
          <span className="text-xs text-[var(--text-muted)] hidden sm:inline">
            Direct access across study, cases, practice &amp; bootcamp
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {[
            {
              tag: '01 · Study Material & Text',
              title: 'Bare Act, 25 Parts & 12 Schedules',
              desc: 'Verbatim clauses of Articles 1–395, amendment diffs, Parts I–XXII analytical commentary, 12 Schedules taxonomy, and 10 core judicial doctrines.',
              cta: 'Explore Articles 1–395 & Parts',
              tab: 'articles-master'
            },
            {
              tag: '02 · Case Law & Precedents',
              title: '100 Landmark Cases & Lineage Trees',
              desc: 'Master 100 landmark Supreme Court rulings from Gopalan (1950) to Electoral Bonds (2024), precedent genealogy trees, and oral advocacy labs.',
              cta: 'Review 100 Landmark Ratios',
              tab: 'judgments'
            },
            {
              tag: '03 · Practice & Gamified Memory',
              title: 'Constitutional Arcade (13 Games) & Leitner SRS',
              desc: 'Connections 4x4, Ultra Vires 60s, ChronoTimeline, 7th Schedule Sorter, Moot Court Bench Simulator, 900+ SRS flashcards, and Judicial Career progression.',
              cta: 'Enter Constitutional Arcade',
              tab: 'arcade'
            },
            {
              tag: '04 · Capstone Intensive',
              title: '15-Day Preparation Bootcamp (3,000 MCQs)',
              desc: 'Daily structured timetable with 6 daily tasks, 200 daily MCQs across 5 specialized rounds, 150 courtroom case studies, and synaptic recall.',
              cta: 'Launch 15-Day Preparation Tracker',
              tab: 'bootcamp'
            }
          ].map((gw) => (
            <button
              key={gw.tab}
              onClick={() => setActiveTab(gw.tab)}
              className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] surface-specular text-left cursor-pointer card-interactive flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                    {gw.tag}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:translate-x-1 transition-[transform,color] duration-150" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                  {gw.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed text-pretty">
                  {gw.desc}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-medium text-[var(--text-primary)]">
                <span>{gw.cta}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};
