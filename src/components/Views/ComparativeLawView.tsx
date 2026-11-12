import React, { useState } from 'react';
import { Globe2, ArrowRight, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import { COMPARATIVE_DATA } from '../../data/comparativeData';

export const ComparativeLawView: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState(COMPARATIVE_DATA[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Globe2 className="w-5 h-5 text-[var(--accent)]" />
            <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Comparative Constitutional Gene Flow
            </h1>
            <span className="text-xs px-2 py-0.5 rounded font-mono bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
              Global Sources of Inspiration
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            How Dr. B.R. Ambedkar and the Drafting Committee ransacked the world’s constitutions and forged an indigenous Indian synthesis.
          </p>
        </div>
      </div>

      {/* Country Flag Cards Carousel */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {COMPARATIVE_DATA.map((c) => {
          const isSelected = selectedCountry.country === c.country;
          return (
            <button
              key={c.country}
              onClick={() => setSelectedCountry(c)}
              className={`p-3.5 rounded-xl border text-left flex items-center gap-3 transition-all ${
                isSelected
                  ? 'bg-[var(--bg-surface-elevated)] border-[var(--accent)] shadow-sm'
                  : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
              }`}
            >
              <span className="text-2xl">{c.flagEmoji}</span>
              <div>
                <h4 className="text-xs font-bold text-[var(--text-primary)]">
                  {c.country}
                </h4>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">
                  {c.borrowedFeatures.length} features
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Country In-Depth Borrowing Matrix */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col gap-6">
        <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{selectedCountry.flagEmoji}</span>
            <div>
              <h2 className="text-2xl font-bold text-[var(--text-primary)]">
                {selectedCountry.country}
              </h2>
              <span className="text-xs font-mono text-[var(--text-muted)]">
                Constitutional Cross-Pollination Analysis
              </span>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {selectedCountry.borrowedFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex flex-col justify-between gap-4"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="text-sm font-bold text-[var(--text-primary)]">
                    {feat.feature}
                  </h4>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--bg-base)] text-[var(--accent)] border border-[var(--border-subtle)] shrink-0">
                    {feat.constitutionalArticles}
                  </span>
                </div>

                <div className="mt-3 flex flex-col gap-1">
                  <span className="text-[10px] font-semibold text-[var(--text-muted)] uppercase tracking-wider">
                    Indian Constitutional Adaptation
                  </span>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {feat.indianAdaptation}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] font-mono text-[var(--emerald)] pt-2 border-t border-[var(--border-subtle)]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Adapted for Indian Conditions</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
