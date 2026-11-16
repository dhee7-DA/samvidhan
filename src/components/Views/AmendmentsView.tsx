import React, { useState } from 'react';
import { GitCommit, Search, Sparkles, Award, ExternalLink, Calendar, ChevronRight, ChevronDown, Gamepad2 } from 'lucide-react';
import { AMENDMENTS_DATA, type ConstitutionalAmendment } from '../../data/amendmentsData';
import { AnnotatedLegalText } from '../Common/AnnotatedLegalText';
import { useTheme } from '../../context/ThemeContext';

export const AmendmentsView: React.FC = () => {
  const { launchGameDeck } = useTheme();
  const [query, setQuery] = useState('');
  const [selectedAmd, setSelectedAmd] = useState<ConstitutionalAmendment>(AMENDMENTS_DATA[0]);
  const [isMobileListOpen, setIsMobileListOpen] = useState(false);

  const filtered = AMENDMENTS_DATA.filter((a) => {
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      a.number.toString().includes(q) ||
      a.title.toLowerCase().includes(q) ||
      a.keyObjectives.toLowerCase().includes(q) ||
      a.significance.toLowerCase().includes(q) ||
      a.primeMinisterOrEra.toLowerCase().includes(q)
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6 animate-fadeIn">
      {/* Mobile Collapsible Selector Button */}
      <div className="lg:hidden flex flex-col gap-2">
        <button
          onClick={() => setIsMobileListOpen((prev) => !prev)}
          className="flex items-center justify-between p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)]"
        >
          <div className="flex items-center gap-2 min-w-0">
            <GitCommit className="w-4 h-4 text-[var(--accent)] shrink-0" />
            <span className="font-bold text-[var(--accent)]">
              {selectedAmd.number}{selectedAmd.number === 1 ? 'st' : selectedAmd.number === 2 ? 'nd' : selectedAmd.number === 3 ? 'rd' : 'th'} Amd:
            </span>
            <span className="truncate">{selectedAmd.title}</span>
          </div>
          <div className="flex items-center gap-1.5 shrink-0 ml-2">
            <span className="text-[10px] text-[var(--text-muted)]">106 Amds</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isMobileListOpen ? 'rotate-180 text-[var(--accent)]' : ''}`} />
          </div>
        </button>

        {isMobileListOpen && (
          <div className="p-4 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] shadow-xl flex flex-col gap-3 animate-fadeIn">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)]">
              <Search className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search amendment (e.g. 42nd, GST)..."
                className="w-full bg-transparent border-none text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none font-mono"
              />
            </div>
            <div className="flex flex-col gap-2 max-h-64 overflow-y-auto">
              {filtered.map((amd) => (
                <button
                  key={amd.number}
                  onClick={() => {
                    setSelectedAmd(amd);
                    setIsMobileListOpen(false);
                  }}
                  className={`p-2.5 rounded-lg text-left text-xs font-mono border transition-all ${
                    amd.number === selectedAmd.number
                      ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold border-[var(--accent)]'
                      : 'bg-[var(--bg-base)] text-[var(--text-secondary)] border-[var(--border-subtle)]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold">
                      {amd.number}{amd.number === 1 ? 'st' : amd.number === 2 ? 'nd' : amd.number === 3 ? 'rd' : 'th'} Amendment
                    </span>
                    <span className="text-[10px] opacity-75">{amd.year}</span>
                  </div>
                  <p className="text-[11px] truncate mt-0.5">{amd.title}</p>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Column: Amendments List (Desktop) */}
        <div className="hidden lg:flex w-80 shrink-0 flex-col gap-4">
          <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col gap-3">
          <div className="flex items-center gap-2 mb-1">
            <GitCommit className="w-4 h-4 text-[var(--accent)]" />
            <h3 className="text-sm font-bold text-[var(--text-primary)]">
              Constitutional Amendments (1 to 106)
            </h3>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)]">
            <Search className="w-3.5 h-3.5 text-[var(--text-muted)]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search amendment (e.g. 42nd, GST)..."
              className="w-full bg-transparent border-none text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none font-mono"
            />
          </div>
          <button
            onClick={() => launchGameDeck('amendments')}
            className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-[var(--accent)] text-[var(--accent-contrast)] hover:opacity-90 font-mono text-xs font-bold transition-all shadow-sm"
          >
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>Play Amendments Matcher</span>
          </button>
        </div>

        <div className="flex flex-col gap-2 max-h-[70vh] overflow-y-auto pr-1">
          {filtered.map((amd) => {
            const isSelected = amd.number === selectedAmd.number;
            return (
              <div
                key={amd.number}
                onClick={() => setSelectedAmd(amd)}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-[var(--bg-surface-elevated)] border-[var(--accent)] shadow-sm'
                    : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono font-bold text-[var(--accent)]">
                    {amd.number}{amd.number === 1 ? 'st' : amd.number === 2 ? 'nd' : amd.number === 3 ? 'rd' : 'th'} Amendment
                  </span>
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">
                    {amd.year}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-[var(--text-primary)] line-clamp-1 break-words">
                  {amd.title}
                </h4>
                <p className="text-[11px] text-[var(--text-secondary)] line-clamp-1 mt-0.5 break-words">
                  {amd.keyObjectives}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Column: In-Depth Amendment Inspector */}
      <div className="flex-1 flex flex-col gap-6 min-w-0">
        <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col gap-5">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[var(--border-subtle)]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
                  {selectedAmd.year} Enactment
                </span>
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  PM/Era: {selectedAmd.primeMinisterOrEra}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                <AnnotatedLegalText text={selectedAmd.title} />
              </h2>
            </div>
          </div>

          {/* Articles Affected Badges */}
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
              Articles Altered / Inserted
            </span>
            <div className="flex flex-wrap gap-1.5">
              {selectedAmd.articlesAffected.map((art) => (
                <span key={art} className="text-xs font-mono px-2.5 py-1 rounded-md bg-[var(--bg-base)] text-[var(--accent)] border border-[var(--border-subtle)]">
                  {art}
                </span>
              ))}
            </div>
          </div>

          {/* Purpose & Objectives */}
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
              Underlying Purpose & Rationale
            </span>
            <p className="text-sm text-[var(--text-primary)] leading-relaxed">
              <AnnotatedLegalText text={selectedAmd.keyObjectives} />
            </p>
          </div>

          {/* Substantive Legal Impact */}
          <div className="p-4 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-[var(--gold)] uppercase tracking-wider">
              Substantive Constitutional Impact
            </span>
            <p className="text-xs text-[var(--text-primary)] leading-relaxed">
              <AnnotatedLegalText text={selectedAmd.significance} />
            </p>
          </div>

          {/* Landmark Judicial Challenge if any */}
          {selectedAmd.landmarkJudicialImpact && (
            <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-strong)] flex items-start gap-3">
              <Award className="w-5 h-5 text-[var(--crimson)] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-semibold text-[var(--crimson)] uppercase tracking-wider">
                  Supreme Court Judicial Review
                </span>
                <p className="text-xs text-[var(--text-secondary)] mt-0.5 leading-relaxed font-mono">
                  <AnnotatedLegalText text={selectedAmd.landmarkJudicialImpact} />
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);
};
