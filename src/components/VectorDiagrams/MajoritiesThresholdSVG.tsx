import React, { useState, useMemo } from 'react';
import { Vote, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface MajoritySpec {
  id: string;
  name: string;
  formula: string;
  exampleVotesOutOf543: number; // Assuming Total=543, Vacant=3 (Eff=540), Present=420, Voting=400
  seatsFilledInArc: number; // out of 60 rendered hemicycle dots
  accent: string;
  useCases: string[];
  trap: string;
}

const MAJORITIES: MajoritySpec[] = [
  {
    id: 'simple',
    name: 'Simple Majority',
    formula: '> 50% of Present & Voting (201 / 400)',
    exampleVotesOutOf543: 201,
    seatsFilledInArc: 23,
    accent: '#38bdf8',
    useCases: [
      'Ordinary Bills (Art 107) & Money Bills (Art 110)',
      'Admission / Reorganisation of States (Arts 2, 3 & 4)',
      'Abolition/Creation of State Legislative Council (Art 169) — State Assembly needs Special Majority, Parliament needs Simple!',
      'No-Confidence, Adjournment, Censure & Confidence Motions; Approval of Financial Emergency (Art 360)'
    ],
    trap: 'Abstentions reduce the denominator ("Present AND Voting"), making Simple Majority easier to clear if opposition walks out!'
  },
  {
    id: 'effective',
    name: 'Effective Majority',
    formula: '> 50% of Effective Strength (Total − Vacant = 271 / 540)',
    exampleVotesOutOf543: 271,
    seatsFilledInArc: 30,
    accent: '#10b981',
    useCases: [
      'Removal of Vice-President in Rajya Sabha (Art 67(b)) — + Simple Majority in LS',
      'Removal of Speaker & Deputy Speaker of Lok Sabha / Assembly (Arts 94, 179)',
      'Removal of Deputy Chairman of Rajya Sabha (Art 90)'
    ],
    trap: 'Constitution writes this as "majority of ALL THE THEN MEMBERS of the House" — "then members" = Total minus unfilled Vacancies (resigned/died/disqualified), NOT Absentees!'
  },
  {
    id: 'absolute',
    name: 'Absolute Majority',
    formula: '> 50% of Total Membership (272 / 543)',
    exampleVotesOutOf543: 272,
    seatsFilledInArc: 31,
    accent: '#a855f7',
    useCases: [
      'Forming Government (Confidence in Lok Sabha / Vidhan Sabha)',
      'First half requirement inside Special Majority under Art 368',
      'Baseline threshold regardless of vacancies'
    ],
    trap: 'Rarely acts alone in constitutional amendments; it is paired WITH 2/3rd Present & Voting inside Article 368!'
  },
  {
    id: 'special-368',
    name: 'Special Majority (Art 368)',
    formula: '> 50% Total (272) AND ≥ 2/3 Present & Voting (267 / 400)',
    exampleVotesOutOf543: 272,
    seatsFilledInArc: 38,
    accent: 'var(--accent)',
    useCases: [
      'Amending Fundamental Rights & DPSPs (Art 368)',
      'Removal of SC / HC Judges, CAG, Chief Election Commissioner',
      'Approval of National Emergency Proclamation (Art 352 — 44th Amd)'
    ],
    trap: 'BOTH prongs must be satisfied! Even if 280 out of 300 present vote YES (93%), if Total Strength is 543, it meets 2/3rd AND >50% Total. But if 220 out of 250 present vote YES (88%), it FAILS >50% of Total (272)!'
  },
  {
    id: 'impeachment-61',
    name: 'Art 61 Impeachment (Strictest)',
    formula: '≥ 2/3rd of TOTAL Membership (362 / 543)',
    exampleVotesOutOf543: 362,
    seatsFilledInArc: 42,
    accent: '#f43f5e',
    useCases: [
      'Impeachment of the President of India ONLY (Article 61)'
    ],
    trap: 'UNMATCHED IN DIFFICULTY: Even if 300 members are present and ALL 300 vote YES (100% present), President CANNOT be impeached because 362 (2/3 of 543 Total) was not met!'
  }
];

export const MajoritiesThresholdSVG: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('special-368');
  const cur = MAJORITIES.find((m) => m.id === activeId) || MAJORITIES[3];

  // Generate 60 Parliament hemicycle seat coordinates in 3 concentric semi-circular arcs
  const seats = useMemo(() => {
    const coords: { x: number; y: number; idx: number }[] = [];
    const rows = [
      { count: 14, r: 95 },
      { count: 20, r: 128 },
      { count: 26, r: 161 }
    ];
    let idx = 0;
    rows.forEach((row) => {
      for (let i = 0; i < row.count; i++) {
        const angle = Math.PI - (i / (row.count - 1)) * Math.PI;
        const x = 480 + row.r * Math.cos(angle);
        const y = 248 - row.r * Math.sin(angle);
        coords.push({ x, y, idx: idx++ });
      }
    });
    return coords;
  }, []);

  return (
    <div className="w-full flex flex-col gap-6 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] surface-specular">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Vote className="w-5 h-5 text-[var(--accent)]" />
            <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
              Parliamentary Hemicycle: 5 Constitutional Majorities
            </h3>
            <span className="text-xs px-2 py-0.5 rounded font-mono bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
              Lok Sabha Scenario (543 Total)
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            Interactive seating floor comparing Simple, Effective, Absolute, Special (Art 368), and Impeachment (Art 61) vote thresholds.
          </p>
        </div>
      </div>

      {/* Mode Buttons */}
      <div className="flex flex-wrap gap-2">
        {MAJORITIES.map((m) => {
          const isSel = m.id === activeId;
          return (
            <button
              key={m.id}
              onClick={() => setActiveId(m.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono border transition-colors cursor-pointer ${
                isSel
                  ? 'bg-[var(--accent)] text-[var(--accent-contrast)] border-[var(--accent)] font-bold'
                  : 'bg-[var(--bg-base)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
              }`}
            >
              {m.name}
            </button>
          );
        })}
      </div>

      {/* Interactive Hemicycle SVG */}
      <div className="w-full overflow-x-auto pb-2">
        <svg viewBox="0 0 960 300" className="w-full min-w-[740px] h-auto select-none font-mono">
          <defs>
            <pattern id="majGrid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.8" fill="var(--border-strong)" opacity="0.35" />
            </pattern>
          </defs>

          <rect x="0" y="0" width="960" height="300" rx="14" fill="var(--bg-base)" stroke="var(--border-subtle)" />
          <rect x="0" y="0" width="960" height="300" rx="14" fill="url(#majGrid)" />

          {/* Assumed House Telemetry Box Top Left */}
          <g transform="translate(28, 28)">
            <rect x="0" y="0" width="206" height="122" rx="10" fill="var(--bg-surface)" stroke="var(--border-subtle)" />
            <text x="14" y="24" fill="var(--text-muted)" fontSize="8" fontWeight="bold">SAMPLE HOUSE FLOOR</text>
            <text x="14" y="45" fill="var(--text-primary)" fontSize="9.5">Total Strength: <tspan fontWeight="bold">543</tspan></text>
            <text x="14" y="64" fill="var(--text-secondary)" fontSize="9.5">Vacant Seats: <tspan fill="#f43f5e">3</tspan> (Eff: 540)</text>
            <text x="14" y="83" fill="var(--text-secondary)" fontSize="9.5">Present &amp; Voting: <tspan fill="#38bdf8">400</tspan></text>
            <line x1="14" y1="94" x2="192" y2="94" stroke="var(--border-subtle)" />
            <text x="14" y="110" fill={cur.accent} fontSize="9" fontWeight="bold">Required Votes: {cur.exampleVotesOutOf543}</text>
          </g>

          {/* Threshold Badge Box Top Right */}
          <g transform="translate(706, 28)">
            <rect x="0" y="0" width="226" height="122" rx="10" fill="var(--bg-surface)" stroke={cur.accent} strokeWidth="1.5" />
            <text x="16" y="26" fill={cur.accent} fontSize="9" fontWeight="bold">{cur.name.toUpperCase()}</text>
            <text x="16" y="58" fill="var(--text-primary)" fontSize="22" fontWeight="bold">{cur.exampleVotesOutOf543}</text>
            <text x="78" y="58" fill="var(--text-muted)" fontSize="9">/ 543 Max</text>
            <text x="16" y="82" fill="var(--text-secondary)" fontSize="8">Threshold Ratio Rule:</text>
            <text x="16" y="98" fill={cur.accent} fontSize="7.5" fontWeight="bold">
              {cur.id === 'simple'
                ? '> 50% Present & Voting'
                : cur.id === 'effective'
                ? '> 50% (Total − Vacant)'
                : cur.id === 'absolute'
                ? '> 50% Total Strength'
                : cur.id === 'special-368'
                ? '>50% Total + 2/3 P&V'
                : '≥ 2/3rd TOTAL Membership'}
            </text>
          </g>

          {/* Hemicycle Parliament Arc Seats */}
          <path d="M 310 248 A 170 170 0 0 1 650 248" fill="none" stroke="var(--border-subtle)" strokeWidth="1" strokeDasharray="3 3" />
          <text x="480" y="232" textAnchor="middle" fill="var(--text-muted)" fontSize="8.5" fontWeight="bold">SPEAKER'S PODIUM</text>
          <rect x="448" y="242" width="64" height="12" rx="3" fill="var(--bg-surface-elevated)" stroke="var(--border-strong)" />

          {seats.map((s) => {
            const isLit = s.idx < cur.seatsFilledInArc;
            return (
              <circle
                key={s.idx}
                cx={s.x}
                cy={s.y}
                r={isLit ? 5.2 : 4}
                fill={isLit ? cur.accent : 'var(--bg-surface)'}
                stroke={isLit ? cur.accent : 'var(--border-strong)'}
                opacity={isLit ? 0.95 : 0.65}
                className="transition-all duration-300"
              />
            );
          })}

          {/* Legend Bottom Center */}
          <text x="480" y="280" textAnchor="middle" fill={cur.accent} fontSize="9.5" fontWeight="bold">
            {cur.formula}
          </text>
        </svg>
      </div>

      {/* Inspector */}
      <div className="p-5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-7 space-y-2.5">
          <h4 className="text-sm sm:text-base font-bold text-[var(--text-primary)]">
            Key Constitutional Applications ({cur.name})
          </h4>
          <ul className="space-y-1.5">
            {cur.useCases.map((u, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{u}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5 p-3.5 rounded-lg bg-rose-500/5 border border-rose-500/20 space-y-1">
          <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase font-bold text-rose-400">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Threshold Math Trap</span>
          </div>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{cur.trap}</p>
        </div>
      </div>
    </div>
  );
};
