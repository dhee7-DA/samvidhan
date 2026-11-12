import React, { useState } from 'react';
import { Award, Search, Users, AlertCircle, Bookmark, Sparkles, ChevronRight } from 'lucide-react';
import { LANDMARK_JUDGMENTS } from '../../data/judgmentsData';
import type { LandmarkJudgment } from '../../types/constitution';

export const LandmarkCasesView: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(LANDMARK_JUDGMENTS[0].id);
  const [searchCase, setSearchCase] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const currentCase = LANDMARK_JUDGMENTS.find((c) => c.id === selectedCaseId) || LANDMARK_JUDGMENTS[0];

  const categories = ['All', 'Basic Structure', 'Fundamental Rights', 'Federalism', 'Social Justice', 'Judicial Independence'];

  const filtered = LANDMARK_JUDGMENTS.filter((c) => {
    if (activeCategory !== 'All' && c.category !== activeCategory) return false;
    if (searchCase) {
      const q = searchCase.toLowerCase();
      return (
        c.caseName.toLowerCase().includes(q) ||
        c.citation.toLowerCase().includes(q) ||
        c.coreIssue.toLowerCase().includes(q) ||
        c.ratioDecidendi.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col lg:flex-row gap-8 animate-fadeIn">
      {/* Left Column: Cases List */}
      <div className="lg:w-80 shrink-0 flex flex-col gap-4">
        <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col gap-3">
          <div className="flex items-center gap-2 mb-1">
            <Award className="w-4 h-4 text-[var(--gold)]" />
            <h3 className="text-sm font-bold text-[var(--text-primary)]">
              Landmark Supreme Court Judgments
            </h3>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)]">
            <Search className="w-3.5 h-3.5 text-[var(--text-muted)]" />
            <input
              type="text"
              value={searchCase}
              onChange={(e) => setSearchCase(e.target.value)}
              placeholder="Search case or citation..."
              className="w-full bg-transparent border-none text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none font-mono"
            />
          </div>

          <div className="flex flex-wrap gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                  activeCategory === cat
                    ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold'
                    : 'bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 max-h-[70vh] overflow-y-auto pr-1">
          {filtered.map((c) => {
            const isSelected = c.id === currentCase.id;
            return (
              <div
                key={c.id}
                onClick={() => setSelectedCaseId(c.id)}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-[var(--bg-surface-elevated)] border-[var(--accent)] shadow-sm'
                    : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono font-bold text-[var(--gold)]">
                    {c.year}
                  </span>
                  <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-[var(--bg-base)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
                    {c.benchStrength} Judges
                  </span>
                </div>
                <h4 className="text-xs font-bold text-[var(--text-primary)] line-clamp-1">
                  {c.caseName}
                </h4>
                <p className="text-[11px] text-[var(--text-secondary)] line-clamp-1 mt-0.5">
                  {c.citation}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Column: Case Deep Dive */}
      <div className="flex-1 flex flex-col gap-6 min-w-0">
        <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col gap-5">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[var(--border-subtle)]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
                  {currentCase.category}
                </span>
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  {currentCase.citation}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                {currentCase.caseName}
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-xs font-mono px-3 py-1.5 rounded-lg bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] border border-[var(--border-subtle)]">
                <Users className="w-3.5 h-3.5 text-[var(--gold)]" />
                <span>{currentCase.benchStrength}-Judge Bench</span>
              </span>
            </div>
          </div>

          {/* Judges / Bench Details */}
          <div className="text-xs font-mono text-[var(--text-muted)] bg-[var(--bg-base)] p-3 rounded-lg border border-[var(--border-subtle)]">
            <strong>Bench:</strong> {currentCase.chiefJusticeOrJudges}
          </div>

          {/* Core Issue */}
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
              Substantial Question of Constitutional Law
            </span>
            <p className="text-sm text-[var(--text-primary)] leading-relaxed">
              {currentCase.coreIssue}
            </p>
          </div>

          {/* Verdict Box */}
          <div className="p-4 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-[var(--accent)] uppercase tracking-wider">
              The Majority Verdict
            </span>
            <p className="text-sm text-[var(--text-primary)] font-medium leading-relaxed">
              {currentCase.verdict}
            </p>
          </div>

          {/* Ratio Decidendi */}
          <div className="flex flex-col gap-2 pt-2 border-t border-[var(--border-subtle)]">
            <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
              Ratio Decidendi (Reasoning of Law)
            </span>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed bg-[var(--bg-base)] p-3.5 rounded-lg border border-[var(--border-subtle)]">
              {currentCase.ratioDecidendi}
            </p>
          </div>

          {/* Dissent if present */}
          {currentCase.dissent && (
            <div className="flex flex-col gap-1.5 pt-2 border-t border-[var(--border-subtle)]">
              <span className="text-xs font-semibold text-[var(--crimson)] uppercase tracking-wider">
                Dissenting View
              </span>
              <p className="text-xs text-[var(--text-muted)] italic leading-relaxed">
                {currentCase.dissent}
              </p>
            </div>
          )}

          {/* Lasting Impact */}
          <div className="pt-2 border-t border-[var(--border-subtle)] flex items-start gap-2 text-xs font-mono text-[var(--emerald)] bg-[var(--emerald)]/5 p-3 rounded-lg border border-[var(--emerald)]/20">
            <Sparkles className="w-4 h-4 shrink-0 mt-0.5" />
            <span>Enduring Precedent: {currentCase.lastingImpact}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
