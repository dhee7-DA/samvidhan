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
  FileText
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { PREAMBLE_DATA } from '../../data/preambleData';
import { WritsMatrixSVG } from '../VectorDiagrams/WritsMatrixSVG';
import { PreambleArchitectureSVG } from '../VectorDiagrams/PreambleArchitectureSVG';

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
            {PREAMBLE_DATA.verbatimText}
          </p>
          <div className="mt-6 flex flex-wrap justify-center items-center gap-3 text-xs font-mono text-[var(--text-muted)]">
            <span className="px-2 py-1 rounded bg-[var(--bg-base)] border border-[var(--border-subtle)]">
              42nd Amd (1976): Added Socialist, Secular & Integrity
            </span>
            <span className="px-2 py-1 rounded bg-[var(--bg-base)] border border-[var(--border-subtle)]">
              Kesavananda Bharati: Part of Basic Structure
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
                  <h4 className="text-base font-bold text-[var(--text-primary)]">{pillar.title}</h4>
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">{pillar.origin}</span>
                </div>
                <div className="text-xs font-mono text-[var(--accent)] mb-2">{pillar.scope}</div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {pillar.description}
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
              Explore the Golden Triangle of Articles 14, 19, and 21, the 5 Prerogative Writs, and reasonable restrictions.
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
              Deconstruct Basic Structure, Pith & Substance, Colorable Legislation, Eclipse, Severability, and Territorial Nexus.
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
