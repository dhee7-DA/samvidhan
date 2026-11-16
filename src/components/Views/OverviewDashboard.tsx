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
  Printer
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { PREAMBLE_DATA } from '../../data/preambleData';
import { WritsMatrixSVG } from '../VectorDiagrams/WritsMatrixSVG';
import { PreambleArchitectureSVG } from '../VectorDiagrams/PreambleArchitectureSVG';
import { AnnotatedLegalText } from '../Common/AnnotatedLegalText';

export const OverviewDashboard: React.FC = () => {
  const { setActiveTab, setSelectedPartId, setSelectedSvgId } = useTheme();

  return (
    <div className="flex flex-col gap-10 py-6 max-w-7xl mx-auto px-4 sm:px-6 animate-fadeIn">
      {/* Hero Section: Editorial Headline */}
      <section className="flex flex-col items-center text-center max-w-4xl mx-auto pt-6 pb-2">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] text-[var(--text-secondary)] border border-[var(--badge-border)] text-xs font-mono mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
          <span>Interactive Master Platform for Indian Constitutional Law</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
          The Living Architecture of the Republic
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl font-normal leading-relaxed">
          Master the Constitution of India through handcrafted tactile vector blueprints, clause-by-clause analytical breakdowns, and landmark Supreme Court jurisprudence.
        </p>

        {/* Quick Action Matrix */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
          <button
            onClick={() => setActiveTab('bootcamp')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bootcamp-btn-bg)] text-[var(--bootcamp-btn-text)] font-mono text-xs font-bold hover:opacity-90 transition-all shadow-md"
          >
            <Flame className="w-4 h-4 opacity-90" />
            <span>15-DAY PO BOOTCAMP (3,000 MCQs)</span>
          </button>
          <button
            onClick={() => setActiveTab('pyqs')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] font-mono text-xs font-semibold transition-colors"
          >
            <FileText className="w-4 h-4 text-[var(--emerald)]" />
            <span>J&K MAINS PYQs (10 YEARS)</span>
          </button>
          <button
            onClick={() => setActiveTab('visual-lab')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--accent)] text-[var(--accent-contrast)] font-mono text-xs font-bold hover:opacity-90 transition-opacity shadow-sm"
          >
            <Shield className="w-4 h-4" />
            <span>EXPLORE VISUAL LAW LAB</span>
          </button>
          <button
            onClick={() => {
              setActiveTab('parts');
              setSelectedPartId('part-3');
            }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] font-mono text-xs font-semibold transition-colors"
          >
            <BookOpen className="w-4 h-4 text-[var(--text-secondary)]" />
            <span>PART III: FUNDAMENTAL RIGHTS</span>
          </button>
          <button
            onClick={() => setActiveTab('judgments')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] font-mono text-xs font-semibold transition-colors"
          >
            <Award className="w-4 h-4 text-[var(--gold)]" />
            <span>100 LANDMARK CASES LAB</span>
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] font-mono text-xs font-semibold transition-colors"
          >
            <Scale className="w-4 h-4 text-[var(--text-secondary)]" />
            <span>ACTIVE RECALL QUIZ</span>
          </button>
        </div>
      </section>

      {/* 15-Day Fast-Track Bootcamp Feature Card */}
      <section className="p-6 rounded-2xl bg-gradient-to-br from-[var(--bg-surface-elevated)] via-[var(--bg-surface)] to-[var(--bg-surface-elevated)] border-2 border-[var(--bootcamp-accent-border)] shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="p-3.5 rounded-2xl bg-[var(--bootcamp-accent-subtle)] border border-[var(--bootcamp-accent-border)] text-[var(--bootcamp-accent-text)] shrink-0">
            <Flame className="w-8 h-8" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded font-bold bg-[var(--bootcamp-accent-subtle)] text-[var(--bootcamp-accent-text)] border border-[var(--bootcamp-accent-border)]">
                15-DAY INTENSIVE REVISION
              </span>
              <span className="text-xs font-mono text-[var(--text-muted)]">
                JKPSC Prosecuting Officer & Judicial Services
              </span>
            </div>
            <h3 className="text-xl font-bold text-[var(--text-primary)]">
              15-Day Constitutional Law Preparation Bootcamp
            </h3>
            <p className="text-sm text-[var(--text-secondary)] max-w-2xl">
              Daily time-table, 3,000 rigorous MCQs with statutory explanations, 150 courtroom case studies (Mains format), landmark-to-2024 evolution pairs, vector SVGs, and an interactive consistency heatmap with persistent tracking.
            </p>
          </div>
        </div>

        <button
          onClick={() => setActiveTab('bootcamp')}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--bootcamp-btn-bg)] hover:opacity-90 text-[var(--bootcamp-btn-text)] font-mono text-xs font-bold transition-all shadow-lg shrink-0"
        >
          <span>LAUNCH 15-DAY TRACKER</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

      {/* Advanced Exam Engines Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* 1. Timed Mock Exam */}
        <div
          onClick={() => setActiveTab('mock-exam')}
          className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-indigo-500/50 hover:bg-[var(--bg-surface-elevated)] cursor-pointer transition-all shadow-sm flex flex-col justify-between group"
        >
          <div className="space-y-2">
            <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Timer className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 font-bold block w-fit">
              PRELIMS SIMULATOR
            </span>
            <h4 className="text-sm font-bold text-[var(--text-primary)]">
              Timed Mock Exam Hall
            </h4>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              100–200 questions, -0.25 negative marking, 120-min countdown, and interactive palette.
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-indigo-400 pt-3 group-hover:translate-x-1 transition-transform">
            <span>Enter Exam Hall</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* 2. Mistakes Bank */}
        <div
          onClick={() => setActiveTab('mistakes-notebook')}
          className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-rose-500/50 hover:bg-[var(--bg-surface-elevated)] cursor-pointer transition-all shadow-sm flex flex-col justify-between group"
        >
          <div className="space-y-2">
            <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center group-hover:scale-105 transition-transform">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 font-bold block w-fit">
              SMART DIAGNOSTIC
            </span>
            <h4 className="text-sm font-bold text-[var(--text-primary)]">
              Error Notebook & Bank
            </h4>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Auto-logs wrong answers across all 3,600 questions. Drill mistakes until mastered.
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-rose-400 pt-3 group-hover:translate-x-1 transition-transform">
            <span>Review Error Bank</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* 3. Mains Writing Lab */}
        <div
          onClick={() => setActiveTab('mains-lab')}
          className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-purple-500/50 hover:bg-[var(--bg-surface-elevated)] cursor-pointer transition-all shadow-sm flex flex-col justify-between group"
        >
          <div className="space-y-2">
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center group-hover:scale-105 transition-transform">
              <PenTool className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 font-bold block w-fit">
              MAINS CASE STUDIES
            </span>
            <h4 className="text-sm font-bold text-[var(--text-primary)]">
              Mains Answer Writing Lab
            </h4>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              150 case matrices, timed writing canvas, model solutions, and scoring rubrics.
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-purple-400 pt-3 group-hover:translate-x-1 transition-transform">
            <span>Start Answer Writing</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* 4. Revision Sheets */}
        <div
          onClick={() => setActiveTab('revision-sheets')}
          className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-amber-500/50 hover:bg-[var(--bg-surface-elevated)] cursor-pointer transition-all shadow-sm flex flex-col justify-between group"
        >
          <div className="space-y-2">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Printer className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 font-bold block w-fit">
              PRINTABLE DOSSIERS
            </span>
            <h4 className="text-sm font-bold text-[var(--text-primary)]">
              Revision Sheets & PDF
            </h4>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              High-density 1-page dossiers with articles, doctrines, exceptions, and printable A4 formatting.
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400 pt-3 group-hover:translate-x-1 transition-transform">
            <span>View Printable PDF</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </section>

      {/* Constitutional Vital Statistics Banner */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Articles', value: '395 / 470+', sub: 'Originally 395 in 22 Parts', color: 'var(--accent)' },
          { label: 'Schedules', value: '12 Schedules', sub: 'Originally 8 in 1950', color: 'var(--gold)' },
          { label: 'Amendments', value: '106 Passed', sub: 'From 1st (1951) to 106th (2023)', color: 'var(--emerald)' },
          { label: 'Words in Text', value: '146,385', sub: 'Longest written constitution', color: 'var(--blue)' },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col justify-between"
          >
            <span className="text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider">{stat.label}</span>
            <div className="text-2xl font-bold font-mono my-1" style={{ color: stat.color }}>{stat.value}</div>
            <span className="text-[11px] text-[var(--text-muted)]">{stat.sub}</span>
          </div>
        ))}
      </section>

      {/* The Preamble Section */}
      <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--gold)] border border-[var(--gold)]/30">
                Preamble (प्रस्तावना)
              </span>
              <span className="text-xs font-mono text-[var(--text-muted)]">
                {PREAMBLE_DATA.latinMaxim}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">
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
            <span className="px-2 py-1 rounded bg-[var(--bg-base)] border border-[var(--border-subtle)]">
              <AnnotatedLegalText text="42nd Amd (1976): Added Socialist, Secular & Integrity" />
            </span>
            <span className="px-2 py-1 rounded bg-[var(--bg-base)] border border-[var(--border-subtle)]">
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
              className="p-5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex flex-col justify-between"
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

      {/* Featured Vector Blueprint: Writs Matrix */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-[var(--accent)]" />
            <h2 className="text-xl font-bold text-[var(--text-primary)]">Featured Vector Blueprint</h2>
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
      </section>

      {/* Quick Navigation Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          onClick={() => {
            setActiveTab('parts');
            setSelectedPartId('part-3');
          }}
          className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent)] cursor-pointer transition-all flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
                Part III • Articles 12–35
              </span>
              <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all" />
            </div>
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">
              Fundamental Rights & Writs
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              <AnnotatedLegalText text="Explore the Golden Triangle of Articles 14, 19, and 21, the 5 Prerogative Writs, and reasonable restrictions." />
            </p>
          </div>
          <div className="mt-4 text-[11px] font-mono text-[var(--emerald)]">
            Explore 24 core articles →
          </div>
        </div>

        <div
          onClick={() => setActiveTab('doctrines')}
          className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent)] cursor-pointer transition-all flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--gold)] border border-[var(--gold)]/30">
                10 Judicial Doctrines
              </span>
              <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all" />
            </div>
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">
              Constitutional Doctrines Hub
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              <AnnotatedLegalText text="Deconstruct Basic Structure, Pith & Substance, Colorable Legislation, Eclipse, Severability, and Territorial Nexus." />
            </p>
          </div>
          <div className="mt-4 text-[11px] font-mono text-[var(--gold)]">
            Review legal tests & lead cases →
          </div>
        </div>

        <div
          onClick={() => setActiveTab('schedules')}
          className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent)] cursor-pointer transition-all flex flex-col justify-between group"
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
          <div className="mt-4 text-[11px] font-mono text-[var(--blue)]">
            Inspect all 12 schedules →
          </div>
        </div>
      </section>
    </div>
  );
};
