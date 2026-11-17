import React from 'react';
import {
  BookOpen,
  Scale,
  Shield,
  Compass,
  ArrowRight,
  Sparkles,
  Layers,
  Award,
  Calendar,
  CheckCircle2,
  FileText,
  Flame,
  Timer,
  AlertTriangle,
  PenTool,
  Printer,
  BrainCircuit,
  GitBranch,
  Radio,
  Gamepad2,
  GitCommit,
  Globe2,
  Check
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { PREAMBLE_DATA } from '../../data/preambleData';
import { WritsMatrixSVG } from '../VectorDiagrams/WritsMatrixSVG';
import { PreambleArchitectureSVG } from '../VectorDiagrams/PreambleArchitectureSVG';
import { AnnotatedLegalText } from '../Common/AnnotatedLegalText';

export const OverviewDashboard: React.FC = () => {
  const { setActiveTab, setSelectedPartId } = useTheme();

  return (
    <div className="flex flex-col gap-12 py-6 max-w-7xl mx-auto px-4 sm:px-6 animate-fadeIn">
      {/* =========================================================================
          HERO SECTION: Editorial Headline & Structured Learning Roadmap
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
          Master the Constitution of India in four structured pedagogical stages: from verbatim Bare Act clauses and 100 landmark precedents to timed exam hall simulations and a 15-day intensive revision bootcamp.
        </p>

        {/* 4-Stage Learning Path Pills */}
        <div className="w-full mt-8 p-3 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm">
          <div className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider mb-2.5 flex items-center justify-center gap-2">
            <span>Pedagogical Order of Learning:</span>
            <span className="text-[var(--accent)] font-bold">Stage 1 → Stage 2 → Stage 3 → Stage 4</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {/* Stage 1 */}
            <div className="p-2.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-left flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-mono px-1.5 py-0.2 rounded font-bold uppercase bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
                  Stage 1
                </span>
                <h4 className="text-xs font-bold text-[var(--text-primary)] mt-1">Study Material</h4>
                <p className="text-[10px] text-[var(--text-muted)] line-clamp-1">Bare Act, Parts, Schedules & Doctrines</p>
              </div>
              <button
                onClick={() => setActiveTab('articles-master')}
                className="mt-2 text-[10px] font-mono text-[var(--accent)] hover:underline flex items-center gap-1 font-semibold"
              >
                <span>Read Articles 1–395</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* Stage 2 */}
            <div className="p-2.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-left flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-mono px-1.5 py-0.2 rounded font-bold uppercase bg-[var(--badge-bg)] text-[var(--gold)] border border-[var(--gold)]/30">
                  Stage 2
                </span>
                <h4 className="text-xs font-bold text-[var(--text-primary)] mt-1">Case Law</h4>
                <p className="text-[10px] text-[var(--text-muted)] line-clamp-1">100 Ratios, Lineage Trees & Viva</p>
              </div>
              <button
                onClick={() => setActiveTab('judgments')}
                className="mt-2 text-[10px] font-mono text-[var(--gold)] hover:underline flex items-center gap-1 font-semibold"
              >
                <span>100 Landmark Cases</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* Stage 3 */}
            <div className="p-2.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-left flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-mono px-1.5 py-0.2 rounded font-bold uppercase bg-[var(--badge-bg)] text-[var(--info-text)] border border-[var(--info-border)]">
                  Stage 3
                </span>
                <h4 className="text-xs font-bold text-[var(--text-primary)] mt-1">Practice & Recall</h4>
                <p className="text-[10px] text-[var(--text-muted)] line-clamp-1">SRS Flashcards, Tiles & Mocks</p>
              </div>
              <button
                onClick={() => setActiveTab('flashcards')}
                className="mt-2 text-[10px] font-mono text-[var(--info-text)] hover:underline flex items-center gap-1 font-semibold"
              >
                <span>5-Box Leitner SRS</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* Stage 4 */}
            <div className="p-2.5 rounded-xl bg-[var(--bootcamp-accent-subtle)] border border-[var(--bootcamp-accent-border)] text-left flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-mono px-1.5 py-0.2 rounded font-bold uppercase bg-[var(--bootcamp-btn-bg)] text-[var(--bootcamp-btn-text)] shadow-xs">
                  Stage 4
                </span>
                <h4 className="text-xs font-bold text-[var(--text-primary)] mt-1">15-Day Bootcamp</h4>
                <p className="text-[10px] text-[var(--bootcamp-accent-text)] line-clamp-1">3,000 MCQs + 150 Mains Cases</p>
              </div>
              <button
                onClick={() => setActiveTab('bootcamp')}
                className="mt-2 text-[10px] font-mono text-[var(--bootcamp-accent-text)] hover:underline flex items-center gap-1 font-bold"
              >
                <span>Launch Day 1</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STAGE 1: WHOLE STUDY MATERIAL (Foundations, Bare Act, Text & Architecture)
          ========================================================================= */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[var(--accent)] text-[var(--accent-contrast)]">
              STAGE 1
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight">
              Constitutional Text & Core Study Material
            </h2>
          </div>
          <span className="text-xs font-mono text-[var(--text-muted)] hidden sm:inline">
            Grundnorm • Statutory Provisions • Architectural Matrices
          </span>
        </div>

        {/* 1.1 The Preamble Section */}
        <div className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm">
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
              <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                The Objective Resolution of the Sovereign Nation
              </h3>
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

          {/* Embedded Preamble Architecture SVG */}
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
        </div>

        {/* 1.2 Constitutional Vital Statistics Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
        </div>

        {/* 1.3 Core Study Material Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Bare Act Articles 1-395 */}
          <div
            onClick={() => setActiveTab('articles-master')}
            className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent)] cursor-pointer transition-all flex flex-col justify-between group card-interactive btn-tactile shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
                  Bare Act Explorer
                </span>
                <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">
                Articles 1–395 Master
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Verbatim statutory text, clause-by-clause commentary, cross-references, amendment diffs, and rapid bookmarking.
              </p>
            </div>
            <div className="mt-4 text-[11px] font-mono text-[var(--accent)] font-semibold">
              Browse 395 statutory articles →
            </div>
          </div>

          {/* 25 Parts Breakdown */}
          <div
            onClick={() => {
              setActiveTab('parts');
              setSelectedPartId('part-3');
            }}
            className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent)] cursor-pointer transition-all flex flex-col justify-between group card-interactive btn-tactile shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
                  Parts I–XXII
                </span>
                <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">
                25 Parts Analytical Breakdown
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Fundamental Rights (Part III), Directive Principles (Part IV), Union Executive (Part V), Judiciary, and Emergency provisions.
              </p>
            </div>
            <div className="mt-4 text-[11px] font-mono text-[var(--emerald)] font-semibold">
              Explore 25 constitutional parts →
            </div>
          </div>

          {/* Doctrines Hub */}
          <div
            onClick={() => setActiveTab('doctrines')}
            className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent)] cursor-pointer transition-all flex flex-col justify-between group card-interactive btn-tactile shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--gold)] border border-[var(--gold)]/30">
                  10 Core Doctrines
                </span>
                <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">
                Constitutional Doctrines Hub
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Deconstruct Basic Structure, Pith & Substance, Colorable Legislation, Eclipse, Severability, and Territorial Nexus with judicial tests.
              </p>
            </div>
            <div className="mt-4 text-[11px] font-mono text-[var(--gold)] font-semibold">
              Review tests & lead precedents →
            </div>
          </div>

          {/* 12 Schedules */}
          <div
            onClick={() => setActiveTab('schedules')}
            className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent)] cursor-pointer transition-all flex flex-col justify-between group card-interactive btn-tactile shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--blue)] border border-[var(--blue)]/30">
                  12 Schedules
                </span>
                <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">
                Schedules Architecture
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Master Schedules 1 to 12 with the "TEARS OF OLD PM" mnemonic taxonomy, anti-defection law, and federal lists.
              </p>
            </div>
            <div className="mt-4 text-[11px] font-mono text-[var(--blue)] font-semibold">
              Master mnemonic taxonomy →
            </div>
          </div>

          {/* Amendments Archive */}
          <div
            onClick={() => setActiveTab('amendments')}
            className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent)] cursor-pointer transition-all flex flex-col justify-between group card-interactive btn-tactile shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--warning-text)] border border-[var(--warning-border)]">
                  Amendments 1 to 106
                </span>
                <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">
                Amendments Compendium
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Filter by Prime Ministerial era, explore landmark shifts (1st, 24th, 42nd, 44th, 73rd, 86th, 103rd, 106th), and impact ratings.
              </p>
            </div>
            <div className="mt-4 text-[11px] font-mono text-[var(--warning-text)] font-semibold">
              Trace 106 amendments →
            </div>
          </div>

          {/* Visual Law Lab */}
          <div
            onClick={() => setActiveTab('visual-lab')}
            className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent)] cursor-pointer transition-all flex flex-col justify-between group card-interactive btn-tactile shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
                  17 Vector Blueprints
                </span>
                <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">
                Visual Law Lab
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Tactile SVG blueprints mapping Writs, Emergency Powers, Legislative Passage, Clemency Architecture, and GST Council federalism.
              </p>
            </div>
            <div className="mt-4 text-[11px] font-mono text-[var(--accent)] font-semibold">
              Open Vector Studio →
            </div>
          </div>
        </div>

        {/* Featured Vector Blueprint: Writs Matrix */}
        <div className="flex flex-col gap-3 pt-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[var(--accent)]" />
              <h3 className="text-base font-bold text-[var(--text-primary)]">Featured Vector Blueprint: Writs Matrix</h3>
            </div>
            <button
              onClick={() => setActiveTab('visual-lab')}
              className="flex items-center gap-1 text-xs font-mono text-[var(--accent)] hover:underline"
            >
              <span>View all 17 blueprints</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <WritsMatrixSVG />
        </div>
      </section>

      {/* =========================================================================
          STAGE 2: CASE LAW & JURISPRUDENCE
          ========================================================================= */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[var(--gold)] text-black">
              STAGE 2
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight">
              Precedents & Landmark Supreme Court Jurisprudence
            </h2>
          </div>
          <span className="text-xs font-mono text-[var(--text-muted)] hidden sm:inline">
            Article 141 • Constitution Benches • Ratio Decidendi
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* 100 Landmark Cases */}
          <div
            onClick={() => setActiveTab('judgments')}
            className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--gold)] cursor-pointer card-interactive btn-tactile shadow-sm flex flex-col justify-between group"
          >
            <div className="space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-[var(--badge-bg)] border border-[var(--gold)]/30 text-[var(--gold)] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--gold)] font-bold block w-fit border border-[var(--gold)]/30">
                100 AUTHORITATIVE RATIOS
              </span>
              <h3 className="text-base font-bold text-[var(--text-primary)]">
                Landmark Cases Lab
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Examine full dossiers from A.K. Gopalan (1950) to Maneka Gandhi (1978), Kesavananda (1973), Puttaswamy (2017), and Electoral Bonds (2024).
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--gold)] pt-3 group-hover:translate-x-1 transition-transform">
              <span>Explore 100 Landmark Rulings</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Precedent Trees */}
          <div
            onClick={() => setActiveTab('lineage')}
            className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--info-border)] cursor-pointer card-interactive btn-tactile shadow-sm flex flex-col justify-between group"
          >
            <div className="space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-[var(--info-bg)] border border-[var(--info-border)] text-[var(--info-text)] flex items-center justify-center group-hover:scale-110 transition-transform">
                <GitBranch className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--info-bg)] text-[var(--info-text)] font-bold block w-fit border border-[var(--info-border)]">
                1950–2026 EVOLUTION
              </span>
              <h3 className="text-base font-bold text-[var(--text-primary)]">
                Precedent Lineage Trees
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Interactive genealogical trees tracking how judicial doctrines shifted across decades with bench strength, overrulings, and dissents.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--info-text)] pt-3 group-hover:translate-x-1 transition-transform">
              <span>Trace Precedent Trees</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Audio Lab & Viva Voce Bench */}
          <div
            onClick={() => setActiveTab('audio-lab')}
            className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--success-border)] cursor-pointer card-interactive btn-tactile shadow-sm flex flex-col justify-between group"
          >
            <div className="space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-[var(--success-bg)] border border-[var(--success-border)] text-[var(--success-text)] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Radio className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--success-bg)] text-[var(--success-text)] font-bold block w-fit border border-[var(--success-border)]">
                ORAL ADVOCACY & VIVA
              </span>
              <h3 className="text-base font-bold text-[var(--text-primary)]">
                Audio Briefings & Spoken Bench
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Listen to voice-narrated constitutional dossiers on the go and defend complex constitutional arguments before a simulated 5-Judge Bench.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--success-text)] pt-3 group-hover:translate-x-1 transition-transform">
              <span>Start Oral Viva Bench</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STAGE 3: ACTIVE PRACTICE, DRILLS & EXAM SIMULATION
          ========================================================================= */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[var(--info-text)] text-black">
              STAGE 3
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight">
              Active Practice, Drills & Exam Simulation
            </h2>
          </div>
          <span className="text-xs font-mono text-[var(--text-muted)] hidden sm:inline">
            Spaced Repetition • Gamified Recall • Timed Exam Hall
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* 3.1 Flashcards (5-Box Leitner SRS) */}
          <div
            onClick={() => setActiveTab('flashcards')}
            className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent)] hover:bg-[var(--bg-surface-elevated)] cursor-pointer card-interactive btn-tactile shadow-sm flex flex-col justify-between group"
          >
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[var(--accent-subtle)] border border-[var(--border-subtle)] text-[var(--accent)] flex items-center justify-center group-hover:scale-110 transition-transform">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--accent)] font-bold block w-fit border border-[var(--badge-border)]">
                5-BOX LEITNER SRS
              </span>
              <h4 className="text-sm font-bold text-[var(--text-primary)]">
                Spaced Repetition Engine
              </h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Box 1 (Daily) to Box 5 (30d Permanent Synapse) with keyboard shortcuts and automated mistake syncing.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--accent)] pt-3 group-hover:translate-x-1 transition-transform">
              <span>Drill Flashcards</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* 3.2 Synaptic Matcher */}
          <div
            onClick={() => setActiveTab('tile-matcher')}
            className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--warning-border)] hover:bg-[var(--bg-surface-elevated)] cursor-pointer card-interactive btn-tactile shadow-sm flex flex-col justify-between group"
          >
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[var(--warning-bg)] border border-[var(--warning-border)] text-[var(--warning-text)] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--warning-bg)] text-[var(--warning-text)] font-bold block w-fit border border-[var(--warning-border)]">
                GAMIFIED BLITZ & ZEN
              </span>
              <h4 className="text-sm font-bold text-[var(--text-primary)]">
                Synaptic Memory Matcher
              </h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Connect Articles, Doctrines, Schedules, and Cases under time pressure with audio synthesis and combo streaks.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--warning-text)] pt-3 group-hover:translate-x-1 transition-transform">
              <span>Play Tile Matcher</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* 3.3 Timed Mock Exam */}
          <div
            onClick={() => setActiveTab('mock-exam')}
            className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--info-border)] hover:bg-[var(--bg-surface-elevated)] cursor-pointer card-interactive btn-tactile shadow-sm flex flex-col justify-between group"
          >
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[var(--info-bg)] border border-[var(--info-border)] text-[var(--info-text)] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Timer className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--info-bg)] text-[var(--info-text)] font-bold block w-fit border border-[var(--info-border)]">
                PRELIMS SIMULATOR
              </span>
              <h4 className="text-sm font-bold text-[var(--text-primary)]">
                Timed Mock Exam Hall
              </h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                100–200 questions, -0.25 negative marking, 120-min countdown, OMR palette, and score analysis.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--info-text)] pt-3 group-hover:translate-x-1 transition-transform">
              <span>Enter Exam Hall</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* 3.4 Mistakes Bank */}
          <div
            onClick={() => setActiveTab('mistakes-notebook')}
            className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--error-border)] hover:bg-[var(--bg-surface-elevated)] cursor-pointer card-interactive btn-tactile shadow-sm flex flex-col justify-between group"
          >
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[var(--error-bg)] border border-[var(--error-border)] text-[var(--error-text)] flex items-center justify-center group-hover:scale-110 transition-transform">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--error-bg)] text-[var(--error-text)] font-bold block w-fit border border-[var(--error-border)]">
                SMART DIAGNOSTIC
              </span>
              <h4 className="text-sm font-bold text-[var(--text-primary)]">
                Error Notebook & Bank
              </h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Auto-logs every wrong answer across practice sessions. Re-drill until 100% mastered.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--error-text)] pt-3 group-hover:translate-x-1 transition-transform">
              <span>Review Error Bank</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* 3.5 Mains Writing Lab */}
          <div
            onClick={() => setActiveTab('mains-lab')}
            className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--warning-border)] hover:bg-[var(--bg-surface-elevated)] cursor-pointer card-interactive btn-tactile shadow-sm flex flex-col justify-between group"
          >
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[var(--warning-bg)] border border-[var(--warning-border)] text-[var(--warning-text)] flex items-center justify-center group-hover:scale-110 transition-transform">
                <PenTool className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--warning-bg)] text-[var(--warning-text)] font-bold block w-fit border border-[var(--warning-border)]">
                MAINS CASE STUDIES
              </span>
              <h4 className="text-sm font-bold text-[var(--text-primary)]">
                Mains Writing Lab
              </h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                150 case matrices, timed writing canvas, judicial model solutions, and institutional scoring rubrics.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--warning-text)] pt-3 group-hover:translate-x-1 transition-transform">
              <span>Start Answer Writing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* 3.6 J&K Mains PYQs */}
          <div
            onClick={() => setActiveTab('pyqs')}
            className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--success-border)] hover:bg-[var(--bg-surface-elevated)] cursor-pointer card-interactive btn-tactile shadow-sm flex flex-col justify-between group"
          >
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[var(--success-bg)] border border-[var(--success-border)] text-[var(--success-text)] flex items-center justify-center group-hover:scale-110 transition-transform">
                <FileText className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--success-bg)] text-[var(--success-text)] font-bold block w-fit border border-[var(--success-border)]">
                10 YEARS SOLVED
              </span>
              <h4 className="text-sm font-bold text-[var(--text-primary)]">
                J&K Mains PYQ Vault
              </h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Full solved papers from 2014 to 2023 with question-by-question analysis, statutory citations, and model answers.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--success-text)] pt-3 group-hover:translate-x-1 transition-transform">
              <span>Explore PYQ Vault</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* 3.7 Revision Sheets */}
          <div
            onClick={() => setActiveTab('revision-sheets')}
            className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--bootcamp-accent-border)] hover:bg-[var(--bg-surface-elevated)] cursor-pointer card-interactive btn-tactile shadow-sm flex flex-col justify-between group"
          >
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[var(--bootcamp-accent-subtle)] border border-[var(--bootcamp-accent-border)] text-[var(--bootcamp-accent-text)] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Printer className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bootcamp-accent-subtle)] text-[var(--bootcamp-accent-text)] font-bold block w-fit border border-[var(--bootcamp-accent-border)]">
                PRINTABLE DOSSIERS
              </span>
              <h4 className="text-sm font-bold text-[var(--text-primary)]">
                Revision Sheets & PDF
              </h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                High-density 1-page summary sheets with articles, doctrines, exceptions, and printable A4 formatting.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--bootcamp-accent-text)] pt-3 group-hover:translate-x-1 transition-transform">
              <span>View Printable PDF</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* 3.8 Active Recall Quiz */}
          <div
            onClick={() => setActiveTab('quiz')}
            className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent)] hover:bg-[var(--bg-surface-elevated)] cursor-pointer card-interactive btn-tactile shadow-sm flex flex-col justify-between group"
          >
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent)] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Scale className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--accent)] font-bold block w-fit border border-[var(--badge-border)]">
                CONCEPTUAL DRILLS
              </span>
              <h4 className="text-sm font-bold text-[var(--text-primary)]">
                Mastery Quiz Arena
              </h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Rapid diagnostic quizzes covering specific Parts and topics to identify conceptual blindspots immediately.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--accent)] pt-3 group-hover:translate-x-1 transition-transform">
              <span>Start Rapid Quiz</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STAGE 4: CAPSTONE 15-DAY INTENSIVE REVISION BOOTCAMP
          ========================================================================= */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[var(--bootcamp-accent)] text-white shadow-xs">
              STAGE 4 · CAPSTONE
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight">
              15-Day Constitutional Law Preparation Bootcamp
            </h2>
          </div>
          <span className="text-xs font-mono text-[var(--bootcamp-accent-text)] font-semibold hidden sm:inline">
            Complete Synthesis • Daily Timetable • 3,000 MCQs
          </span>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[var(--bg-surface-elevated)] via-[var(--bg-surface)] to-[var(--bg-surface-elevated)] border-2 border-[var(--bootcamp-accent-border)] shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 card-interactive">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-[var(--bootcamp-accent-subtle)] border border-[var(--bootcamp-accent-border)] text-[var(--bootcamp-accent-text)] shrink-0 shadow-sm">
              <Flame className="w-9 h-9 animate-pulse" />
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-mono px-2 py-0.5 rounded font-bold bg-[var(--bootcamp-accent-subtle)] text-[var(--bootcamp-accent-text)] border border-[var(--bootcamp-accent-border)]">
                  15-DAY INTENSIVE REVISION
                </span>
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  JKPSC Prosecuting Officer & Judicial Services
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                Daily Study Timetable, 3,000 Questions & 150 Courtroom Dossiers
              </h3>
              <p className="text-sm text-[var(--text-secondary)] max-w-2xl leading-relaxed text-pretty">
                Synthesize everything you've learned. Each day provides 6 structured tasks: target article readings, landmark-to-2024 evolution pairs, legal terms, 200 MCQs across 5 specialized rounds, a comprehension case study, and an associative Synaptic Memory Tile Matcher.
              </p>

              <div className="flex items-center gap-4 mt-2 text-xs font-mono text-[var(--text-muted)]">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  3,000 Rigorous MCQs
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  150 Case Studies
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  Built-in Tile Arena
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setActiveTab('bootcamp')}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--bootcamp-btn-bg)] hover:opacity-90 text-[var(--bootcamp-btn-text)] font-mono text-xs font-bold transition-all shadow-lg shrink-0 btn-tactile text-center"
          >
            <span>LAUNCH 15-DAY TRACKER</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
