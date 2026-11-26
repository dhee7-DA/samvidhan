import React, { useState } from 'react';
import { Scale, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface BalanceMilestone {
  id: string;
  year: string;
  caseName: string;
  tiltAngle: number; // -8 tilts to FR, 0 balanced, +8 tilts to DPSP
  verdictBadge: string;
  accent: string;
  ratio: string;
  keyProvision: string;
  examTakeaway: string;
}

const MILESTONES: BalanceMilestone[] = [
  {
    id: 'champakam',
    year: '1951',
    caseName: 'State of Madras v. Champakam Dorairajan',
    tiltAngle: -10,
    verdictBadge: 'FR Strictly Prevails',
    accent: '#38bdf8',
    ratio: 'DPSP cannot override Fundamental Rights; DPSPs must conform to and run subsidiary to Part III (Art 37 non-justiciability vs Art 32 enforceability).',
    keyProvision: 'Art 37 vs Art 29(2)',
    examTakeaway: 'Prompted the 1st Constitutional Amendment (1951) inserting Article 15(4) for backward class reservations.'
  },
  {
    id: 'golaknath',
    year: '1967',
    caseName: 'I.C. Golaknath v. State of Punjab',
    tiltAngle: -12,
    verdictBadge: 'FR Immutable vs Parliament',
    accent: '#38bdf8',
    ratio: 'Supreme Court (6:5) ruled that Fundamental Rights hold a "transcendental position" and Parliament cannot abridge any Part III right even by an Art 368 Amendment.',
    keyProvision: 'Art 13(2) & Art 368',
    examTakeaway: 'Introduced Doctrine of Prospective Overruling into Indian jurisprudence. Led directly to 24th & 25th Amendments (1971).'
  },
  {
    id: 'kesavananda',
    year: '1973',
    caseName: 'Kesavananda Bharati v. State of Kerala',
    tiltAngle: 2,
    verdictBadge: 'Art 31C First Part Valid',
    accent: '#10b981',
    ratio: 'Upheld first part of Art 31C protecting Arts 39(b) & 39(c) laws from Arts 14/19 challenges, but STRUCK DOWN the second part barring Judicial Review as unconstitutional.',
    keyProvision: 'Art 31C + Basic Structure',
    examTakeaway: 'Fundamental Rights can be amended, provided the Basic Structure is left intact.'
  },
  {
    id: 'minerva',
    year: '1980',
    caseName: 'Minerva Mills v. Union of India',
    tiltAngle: 0,
    verdictBadge: 'Harmonious Chariot Balance',
    accent: '#10b981',
    ratio: 'Struck down the 42nd Amendment expansion of Art 31C (which gave ALL DPSPs primacy over Arts 14 & 19). Held that the Indian Constitution is founded on the bedrock of balance between Part III and Part IV.',
    keyProvision: 'Two Wheels of a Chariot',
    examTakeaway: 'As of today, ONLY Art 39(b) & 39(c) take precedence over Arts 14 & 19 under Art 31C (confirmed in Waman Rao & Property Owners 2024).'
  }
];

export const DPSPvsFRHarmonySVG: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(3); // Minerva Mills balanced default
  const cur = MILESTONES[activeIdx];

  return (
    <div className="w-full flex flex-col gap-6 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] surface-specular">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Scale className="w-5 h-5 text-[var(--accent)]" />
            <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
              Part III (FRs) vs. Part IV (DPSP) Equilibrium Arc
            </h3>
            <span className="text-xs px-2 py-0.5 rounded font-mono bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
              Articles 31C &amp; 37
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            Interactive balance beam and constitutional battle arc showing how the Supreme Court harmonized individual liberty with socio-economic goals.
          </p>
        </div>
      </div>

      {/* SVG Chariot & Balance Beam Canvas */}
      <div className="w-full overflow-x-auto pb-2">
        <svg viewBox="0 0 960 360" className="w-full h-auto select-none font-mono">
          <defs>
            <pattern id="dpspGrid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.8" fill="var(--border-strong)" opacity="0.35" />
            </pattern>
            <marker id="dpspArrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 9 5 L 0 9 z" fill="var(--border-strong)" />
            </marker>
          </defs>

          <rect x="0" y="0" width="960" height="360" rx="14" fill="var(--bg-base)" stroke="var(--border-subtle)" />
          <rect x="0" y="0" width="960" height="360" rx="14" fill="url(#dpspGrid)" />

          {/* Top Balance Instrument */}
          <g transform="translate(480, 118)">
            {/* Fulcrum Stand */}
            <polygon points="0,-16 -16,78 16,78" fill="var(--bg-surface-elevated)" stroke="var(--border-strong)" strokeWidth="1.5" />
            <rect x="-60" y="78" width="120" height="10" rx="4" fill="var(--bg-surface)" stroke="var(--border-subtle)" />
            <text x="0" y="102" textAnchor="middle" fill="var(--text-muted)" fontSize="8">
              JUDICIAL INTERPRETATION FULCRUM ({cur.year})
            </text>

            {/* Dynamic Tilting Beam */}
            <g transform={`rotate(${cur.tiltAngle})`} className="transition-transform duration-500 ease-out">
              <line x1="-220" y1="0" x2="220" y2="0" stroke={cur.accent} strokeWidth="3" strokeLinecap="round" />
              <circle cx="0" cy="0" r="8" fill="var(--bg-base)" stroke={cur.accent} strokeWidth="2.5" />

              {/* Left Weight: PART III FRs */}
              <g transform="translate(-220, 0)">
                <line x1="0" y1="0" x2="0" y2="34" stroke="var(--border-strong)" strokeWidth="1.2" />
                <rect x="-78" y="34" width="156" height="52" rx="8" fill="var(--bg-surface-elevated)" stroke="#38bdf8" strokeWidth="1.5" />
                <text x="0" y="54" textAnchor="middle" fill="#38bdf8" fontSize="9.5" fontWeight="bold">PART III: FRs</text>
                <text x="0" y="68" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">Justiciable (Art 32)</text>
                <text x="0" y="79" textAnchor="middle" fill="var(--text-muted)" fontSize="7">Political Democracy</text>
              </g>

              {/* Right Weight: PART IV DPSPs */}
              <g transform="translate(220, 0)">
                <line x1="0" y1="0" x2="0" y2="34" stroke="var(--border-strong)" strokeWidth="1.2" />
                <rect x="-78" y="34" width="156" height="52" rx="8" fill="var(--bg-surface-elevated)" stroke="#10b981" strokeWidth="1.5" />
                <text x="0" y="54" textAnchor="middle" fill="#10b981" fontSize="9.5" fontWeight="bold">PART IV: DPSPs</text>
                <text x="0" y="68" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">Non-Justiciable (Art 37)</text>
                <text x="0" y="79" textAnchor="middle" fill="var(--text-muted)" fontSize="7">Social &amp; Econ Democracy</text>
              </g>
            </g>
          </g>

          {/* Status Pill above Balance */}
          <rect x="355" y="18" width="250" height="24" rx="12" fill="var(--bg-surface)" stroke={cur.accent} strokeWidth="1" />
          <text x="480" y="33.5" textAnchor="middle" fill={cur.accent} fontSize="8.5" fontWeight="bold">
            STATUS: {cur.verdictBadge.toUpperCase()}
          </text>

          {/* Timeline Rail & Interactive Milestone Nodes at Bottom */}
          <line x1="110" y1="286" x2="850" y2="286" stroke="var(--border-strong)" strokeWidth="2" markerEnd="url(#dpspArrow)" />

          {MILESTONES.map((m, idx) => {
            const x = 140 + idx * 225;
            const isSel = activeIdx === idx;
            return (
              <g key={m.id} className="cursor-pointer vector-node" onClick={() => setActiveIdx(idx)} transform={`translate(${x}, 286)`}>
                <circle
                  cx="0"
                  cy="0"
                  r={isSel ? 12 : 8}
                  fill={isSel ? m.accent : 'var(--bg-surface)'}
                  stroke={m.accent}
                  strokeWidth="2"
                />
                <text x="0" y="-20" textAnchor="middle" fill={isSel ? m.accent : 'var(--text-primary)'} fontSize="10" fontWeight="bold">
                  {m.year}
                </text>
                <rect
                  x="-88"
                  y="18"
                  width="176"
                  height="36"
                  rx="6"
                  fill={isSel ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
                  stroke={isSel ? m.accent : 'var(--border-subtle)'}
                />
                <text x="0" y="34" textAnchor="middle" fill="var(--text-primary)" fontSize="8" fontWeight="bold">
                  {m.id === 'champakam'
                    ? 'Champakam (1951)'
                    : m.id === 'golaknath'
                    ? 'Golaknath (1967)'
                    : m.id === 'kesavananda'
                    ? 'Kesavananda (1973)'
                    : 'Minerva Mills (1980)'}
                </text>
                <text x="0" y="46" textAnchor="middle" fill="var(--text-muted)" fontSize="7">
                  {m.verdictBadge}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Interactive Deep-Dive Panel */}
      <div className="p-5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-2.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)]">
              {cur.year}
            </span>
            <h4 className="text-base font-bold text-[var(--text-primary)]">{cur.caseName}</h4>
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">{cur.ratio}</p>
          <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono pt-1">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
            <span>Present Law Rule: {cur.keyProvision}</span>
          </div>
        </div>

        <div className="p-3.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-1.5">
          <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase text-rose-400">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>UPSC Prelims / Mains Key</span>
          </div>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{cur.examTakeaway}</p>
        </div>
      </div>
    </div>
  );
};
