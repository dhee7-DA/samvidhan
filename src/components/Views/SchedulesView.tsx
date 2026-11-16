import React, { useState } from 'react';
import { Calendar, CheckCircle2, Bookmark, ExternalLink, Sparkles, Gamepad2 } from 'lucide-react';
import { SCHEDULES_DATA } from '../../data/schedulesData';
import { SchedulesGenealogySVG } from '../VectorDiagrams/SchedulesGenealogySVG';
import { AnnotatedLegalText } from '../Common/AnnotatedLegalText';
import { useTheme } from '../../context/ThemeContext';

export const SchedulesView: React.FC = () => {
  const { launchGameDeck } = useTheme();
  const [filterQuery, setFilterQuery] = useState('');

  const filtered = SCHEDULES_DATA.filter((s) => {
    if (!filterQuery) return true;
    const q = filterQuery.toLowerCase();
    return (
      s.title.toLowerCase().includes(q) ||
      s.subject.toLowerCase().includes(q) ||
      s.mnemonicKeyword.toLowerCase().includes(q) ||
      s.articlesCovered.toLowerCase().includes(q)
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Calendar className="w-5 h-5 text-[var(--accent)]" />
            <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              The 12 Schedules of the Constitution
            </h1>
            <span className="text-xs px-2 py-0.5 rounded font-mono bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
              Mnemonic: TEARS OF OLD PM
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            Explore functional distribution, special tribal regimes, official languages, and anti-defection provisions.
          </p>
        </div>
        <button
          onClick={() => launchGameDeck('schedules')}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--accent)] text-[var(--accent-contrast)] hover:opacity-90 font-mono text-xs font-bold transition-all shadow-sm shrink-0"
        >
          <Gamepad2 className="w-4 h-4" />
          <span>Play 12 Schedules Matcher</span>
        </button>
      </div>

      {/* Embedded SVG Architecture Diagram */}
      <SchedulesGenealogySVG />

      {/* Grid of All 12 Schedules */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
            Complete Schedule Catalog
          </h3>
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="Filter schedules..."
            className="px-3 py-1.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none font-mono"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((sch) => (
            <div
              key={sch.number}
              className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-[var(--accent)] text-[var(--accent-contrast)] font-mono font-bold flex items-center justify-center text-sm">
                      {sch.mnemonicLetter}
                    </span>
                    <div>
                      <span className="text-xs font-mono font-bold text-[var(--text-primary)]">
                        {sch.roman}
                      </span>
                      <div className="text-[10px] font-mono text-[var(--text-muted)]">
                        {sch.mnemonicKeyword}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-base)] text-[var(--accent)] border border-[var(--border-subtle)]">
                    {sch.articlesCovered.split(',')[0]}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2">
                  <AnnotatedLegalText text={sch.title} />
                </h4>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                  <AnnotatedLegalText text={sch.subject} />
                </p>

                <div className="flex flex-col gap-1.5 pt-3 border-t border-[var(--border-subtle)]">
                  <span className="text-[10px] font-semibold text-[var(--text-muted)] uppercase tracking-wider">
                    Core Provisions
                  </span>
                  {sch.details.slice(0, 2).map((d, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-primary)]">
                      <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-[var(--emerald)] shrink-0" />
                      <span className="leading-snug">
                        <AnnotatedLegalText text={d} />
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] text-[10px] italic text-[var(--text-muted)]">
                <AnnotatedLegalText text={sch.historicalEvolution} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
