import React, { useState } from 'react';
import { Scale, CheckCircle2, AlertOctagon, Award, Search, ChevronRight } from 'lucide-react';
import { DOCTRINES_DATA } from '../../data/doctrinesData';
import type { ConstitutionalDoctrine } from '../../types/constitution';

export const DoctrinesHubView: React.FC = () => {
  const [selectedDocId, setSelectedDocId] = useState<string>(DOCTRINES_DATA[0].id);
  const [searchDoc, setSearchDoc] = useState('');

  const currentDoctrine = DOCTRINES_DATA.find((d) => d.id === selectedDocId) || DOCTRINES_DATA[0];

  const filtered = DOCTRINES_DATA.filter((d) => {
    if (!searchDoc) return true;
    const q = searchDoc.toLowerCase();
    return (
      d.name.toLowerCase().includes(q) ||
      d.leadCase.toLowerCase().includes(q) ||
      d.essence.toLowerCase().includes(q)
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col lg:flex-row gap-8 animate-fadeIn">
      {/* Left Column: Doctrines List */}
      <div className="lg:w-80 shrink-0 flex flex-col gap-4">
        <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col gap-3">
          <div className="flex items-center gap-2 mb-1">
            <Scale className="w-4 h-4 text-[var(--accent)]" />
            <h3 className="text-sm font-bold text-[var(--text-primary)]">
              Constitutional Doctrines
            </h3>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)]">
            <Search className="w-3.5 h-3.5 text-[var(--text-muted)]" />
            <input
              type="text"
              value={searchDoc}
              onChange={(e) => setSearchDoc(e.target.value)}
              placeholder="Search doctrines or cases..."
              className="w-full bg-transparent border-none text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none font-mono"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 max-h-[70vh] overflow-y-auto pr-1">
          {filtered.map((doc) => {
            const isSelected = doc.id === currentDoctrine.id;
            return (
              <div
                key={doc.id}
                onClick={() => setSelectedDocId(doc.id)}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-[var(--bg-surface-elevated)] border-[var(--accent)] shadow-sm'
                    : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-1">
                  <h4 className="text-xs font-bold text-[var(--text-primary)] break-words">
                    {doc.name}
                  </h4>
                  {doc.latinTerm && (
                    <span className="text-[9px] font-mono italic text-[var(--text-muted)] shrink-0 max-w-[110px] truncate text-right">
                      {doc.latinTerm}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-[var(--text-secondary)] line-clamp-1 break-words">
                  Case: {doc.leadCase}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Column: In-Depth Doctrine Inspector */}
      <div className="flex-1 flex flex-col gap-6 min-w-0">
        <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col gap-5">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[var(--border-subtle)]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-[var(--badge-bg)] text-[var(--gold)] border border-[var(--gold)]/30">
                  Judicial Doctrine
                </span>
                {currentDoctrine.latinTerm && (
                  <span className="text-xs font-mono text-[var(--text-muted)] italic">
                    "{currentDoctrine.latinTerm}"
                  </span>
                )}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                {currentDoctrine.name}
              </h2>
            </div>

            <div className="flex items-center gap-1.5 flex-wrap">
              {currentDoctrine.constitutionalArticles.map((art) => (
                <span key={art} className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--bg-base)] text-[var(--accent)] border border-[var(--border-subtle)]">
                  {art}
                </span>
              ))}
            </div>
          </div>

          {/* Lead Case Citation Box */}
          <div className="p-4 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex items-start gap-3">
            <Award className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
                Leading Judicial Precedent & Origin
              </span>
              <h4 className="text-sm font-bold text-[var(--text-primary)] mt-0.5">
                {currentDoctrine.leadCase}
              </h4>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                Origin: {currentDoctrine.origin}
              </p>
            </div>
          </div>

          {/* Core Essence */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
              Constitutional Essence
            </span>
            <p className="text-sm text-[var(--text-primary)] leading-relaxed">
              {currentDoctrine.essence}
            </p>
          </div>

          {/* Legal Test Mechanism */}
          <div className="flex flex-col gap-3 pt-3 border-t border-[var(--border-subtle)]">
            <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
              Litmus Test & Judicial Mechanism
            </span>
            <div className="flex flex-col gap-2">
              {currentDoctrine.testMechanism.map((step, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] flex items-start gap-2.5"
                >
                  <span className="w-5 h-5 rounded-full bg-[var(--accent)] text-[var(--accent-contrast)] text-[10px] font-mono font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Applicability & Exceptions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-[var(--border-subtle)]">
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
                Operational Scope in India
              </span>
              <p className="text-xs text-[var(--text-primary)] leading-relaxed bg-[var(--bg-surface-elevated)] p-3 rounded-lg border border-[var(--border-subtle)]">
                {currentDoctrine.applicabilityInIndia}
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
                Recognized Exceptions & Caveats
              </span>
              <div className="flex flex-col gap-2 bg-[var(--bg-surface-elevated)] p-3 rounded-lg border border-[var(--border-subtle)]">
                {currentDoctrine.exceptions.map((exc, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <AlertOctagon className="w-3.5 h-3.5 text-[var(--crimson)] shrink-0 mt-0.5" />
                    <span>{exc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
