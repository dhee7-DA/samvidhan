import React, { useState } from 'react';
import { Users, AlertTriangle, Scale } from 'lucide-react';

interface QuotaBlock {
  id: string;
  title: string;
  articles: string;
  pct: string;
  caseAnchor: string;
  accent: string;
  details: string;
  trap: string;
}

const QUOTA_BLOCKS: QuotaBlock[] = [
  {
    id: 'vertical-obc',
    title: 'OBC Reservation & Creamy Layer Exclusion',
    articles: 'Arts 15(4) & 16(4)',
    pct: '27% Vertical',
    caseAnchor: 'Indra Sawhney v. Union of India (1992 · 9-Judge Bench)',
    accent: '#38bdf8',
    details: 'Upheld 27% Mandal OBC quota subject to strict exclusion of advanced "Creamy Layer" among OBCs, capped total vertical reservation ordinarily at 50%, and invalidated quota in promotions (later overridden by 77th Amd).',
    trap: 'Art 16(4) requires BOTH "backward class" AND "inadequate representation in State services" — unlike Art 15(4) education, economic status ALONE cannot justify OBC quota under 16(4).'
  },
  {
    id: 'sc-st-promotion',
    title: 'Promotions, Consequential Seniority & Sub-Classification',
    articles: 'Arts 16(4A), 16(4B) & 341',
    pct: 'SC 15% · ST 7.5%',
    caseAnchor: 'M. Nagaraj (2006) · Jarnail Singh (2018) · Davinder Singh (2024)',
    accent: '#10b981',
    details: '77th/85th Amendments added 16(4A) promotions with consequential seniority; 81st Amd added 16(4B) excluding backlog vacancies from the 50% ceiling. In 2024 (6:1), SC allowed sub-classification within SCs/STs (overruling E.V. Chinnaiah) with creamy layer principle suggested.',
    trap: 'Quantifiable data on inadequate representation & administrative efficiency (Art 335) MUST be collected before promotion quotas (Jarnail Singh removed backwardness data requirement for SC/ST).'
  },
  {
    id: 'ews',
    title: 'Economically Weaker Sections (103rd Amendment)',
    articles: 'Arts 15(6) & 16(6)',
    pct: '10% Above 50%',
    caseAnchor: 'Janhit Abhiyan v. Union of India (2022 · 3:2 Bench)',
    accent: '#a855f7',
    details: 'Inserted solely on economic criteria for general-category citizens not covered by SC/ST/OBC quotas. 5-Judge Bench (3:2) upheld EWS as non-violative of Basic Structure, holding the 50% Indra Sawhney rule is flexible and not immutable.',
    trap: 'EWS benefits are EXCLUDED for SC/ST/OBC categories — SC held this exclusion prevents double benefit and is reasonable classification.'
  },
  {
    id: 'horizontal',
    title: 'Horizontal Interlocking Reservation (Women / PwD)',
    articles: 'Art 15(3) · Art 16(1)',
    pct: 'Interlocking Compartments',
    caseAnchor: 'Indra Sawhney (1992) & Rajesh Kumar Daria (2007)',
    accent: 'var(--accent)',
    details: 'Social caste categories (SC, ST, OBC, General) are VERTICAL columns. Horizontal quotas (Women 33%, PwD 4%, Ex-servicemen) cut ACROSS each vertical column internally, NOT added on top of 50%!',
    trap: 'If a General candidate scores strictly higher than the cut-off, an OBC/SC merit candidate takes an Open seat (migration rule) — never deducted from reserved vertical quota!'
  }
];

export const ReservationEvolutionSVG: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('vertical-obc');
  const cur = QUOTA_BLOCKS.find((q) => q.id === activeId) || QUOTA_BLOCKS[0];

  return (
    <div className="w-full flex flex-col gap-6 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] surface-specular">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Users className="w-5 h-5 text-[var(--accent)]" />
            <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
              Reservation Geometry: Vertical Columns vs. Horizontal Slice
            </h3>
            <span className="text-xs px-2 py-0.5 rounded font-mono bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
              Articles 15 &amp; 16
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            Visual geometry of Vertical (SC/ST/OBC/EWS) columns, the 50% Indra Sawhney bar, Horizontal cuts, and 2024 Sub-Classification.
          </p>
        </div>
      </div>

      {/* SVG Matrix Graphic */}
      <div className="w-full overflow-x-auto pb-2">
        <svg viewBox="0 0 960 350" className="w-full min-w-[740px] h-auto select-none font-mono">
          <defs>
            <pattern id="resGrid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.8" fill="var(--border-strong)" opacity="0.35" />
            </pattern>
          </defs>

          <rect x="0" y="0" width="960" height="350" rx="14" fill="var(--bg-base)" stroke="var(--border-subtle)" />
          <rect x="0" y="0" width="960" height="350" rx="14" fill="url(#resGrid)" />

          {/* Stacked Bar Container representing 100% Public Employment Seats */}
          <text x="40" y="42" fill="var(--text-primary)" fontSize="10" fontWeight="bold">100% PUBLIC SEAT POOL ARCHITECTURE</text>
          <text x="920" y="42" textAnchor="end" fill="var(--text-muted)" fontSize="8">Click any block to inspect constitutional mechanics</text>

          {/* Vertical Columns (Width proportional to quota share) */}
          {/* Total diagram bar width = 880 (x=40 to 920) */}
          {/* SC 15% = 132px | ST 7.5% = 66px | OBC 27% = 238px | EWS 10% = 88px | Open 40.5% = 356px */}
          {/* 50% Ceiling Marker at x = 40 + 440 = 480 */}
          <line x1="480" y1="62" x2="480" y2="262" stroke="#f43f5e" strokeWidth="2" strokeDasharray="4 3" />
          <rect x="402" y="56" width="156" height="18" rx="4" fill="var(--bg-surface-elevated)" stroke="#f43f5e" strokeWidth="1" />
          <text x="480" y="68" textAnchor="middle" fill="#fda4af" fontSize="7.5" fontWeight="bold">50% INDRA SAWHNEY CEILING</text>

          {/* Vertical Block 1+2: SC + ST (22.5%) */}
          <g className="cursor-pointer vector-node" onClick={() => setActiveId('sc-st-promotion')} transform="translate(40, 84)">
            <rect
              x="0"
              y="0"
              width="196"
              height="156"
              rx="8"
              fill={activeId === 'sc-st-promotion' ? 'rgba(16,185,129,0.16)' : 'var(--bg-surface)'}
              stroke="#10b981"
              strokeWidth={activeId === 'sc-st-promotion' ? '2.2' : '1.2'}
            />
            <text x="98" y="34" textAnchor="middle" fill="#10b981" fontSize="12" fontWeight="bold">SC 15% + ST 7.5%</text>
            <text x="98" y="54" textAnchor="middle" fill="var(--text-primary)" fontSize="8.5">Art 16(4A) Promotions</text>
            <text x="98" y="72" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">16(4B) Carry-Forward</text>
            <text x="98" y="92" textAnchor="middle" fill="#6ee7b7" fontSize="7.5" fontWeight="bold">2024: Sub-Classification</text>
            <text x="98" y="106" textAnchor="middle" fill="var(--text-muted)" fontSize="7">(Davinder Singh 6:1)</text>
          </g>

          {/* Vertical Block 3: OBC (27%) */}
          <g className="cursor-pointer vector-node" onClick={() => setActiveId('vertical-obc')} transform="translate(242, 84)">
            <rect
              x="0"
              y="0"
              width="234"
              height="156"
              rx="8"
              fill={activeId === 'vertical-obc' ? 'rgba(56,189,248,0.16)' : 'var(--bg-surface)'}
              stroke="#38bdf8"
              strokeWidth={activeId === 'vertical-obc' ? '2.2' : '1.2'}
            />
            <text x="117" y="34" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">OBC · 27%</text>
            <text x="117" y="54" textAnchor="middle" fill="var(--text-primary)" fontSize="8.5">Arts 15(4) &amp; 16(4)</text>
            <text x="117" y="74" textAnchor="middle" fill="#fda4af" fontSize="7.8" fontWeight="bold">Creamy Layer Excluded</text>
            <text x="117" y="94" textAnchor="middle" fill="var(--text-muted)" fontSize="7">102nd Amd: NCBC (Art 338B)</text>
            <text x="117" y="108" textAnchor="middle" fill="var(--text-muted)" fontSize="7">105th Amd: State Lists</text>
          </g>

          {/* Vertical Block 4: EWS (10%) */}
          <g className="cursor-pointer vector-node" onClick={() => setActiveId('ews')} transform="translate(486, 84)">
            <rect
              x="0"
              y="0"
              width="124"
              height="156"
              rx="8"
              fill={activeId === 'ews' ? 'rgba(168,85,247,0.16)' : 'var(--bg-surface)'}
              stroke="#a855f7"
              strokeWidth={activeId === 'ews' ? '2.2' : '1.2'}
            />
            <text x="62" y="34" textAnchor="middle" fill="#a855f7" fontSize="11.5" fontWeight="bold">EWS 10%</text>
            <text x="62" y="54" textAnchor="middle" fill="var(--text-primary)" fontSize="8">103rd Amd</text>
            <text x="62" y="72" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">15(6) &amp; 16(6)</text>
            <text x="62" y="94" textAnchor="middle" fill="#c084fc" fontSize="7.5" fontWeight="bold">Janhit 2022</text>
            <text x="62" y="108" textAnchor="middle" fill="var(--text-muted)" fontSize="7">Above 50% Cap</text>
          </g>

          {/* Vertical Block 5: Open Merit (40.5%) */}
          <g transform="translate(616, 84)">
            <rect x="0" y="0" width="304" height="156" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)" strokeWidth="1.2" />
            <text x="152" y="34" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="bold">OPEN MERIT · 40.5%</text>
            <text x="152" y="54" textAnchor="middle" fill="var(--text-secondary)" fontSize="8.5">Pure Merit Pool (Unreserved)</text>
            <text x="152" y="74" textAnchor="middle" fill="#10b981" fontSize="7.8" fontWeight="bold">Open to ALL (Incl. High-Scoring SC/ST/OBC)</text>
            <text x="152" y="96" textAnchor="middle" fill="var(--text-muted)" fontSize="7">High-scoring reserved candidates migrate here</text>
          </g>

          {/* HORIZONTAL RESERVATION RIBBON CUTTING ACROSS ALL 5 COLUMNS */}
          <g className="cursor-pointer vector-node" onClick={() => setActiveId('horizontal')} transform="translate(40, 196)">
            <rect
              x="0"
              y="0"
              width="880"
              height="44"
              rx="6"
              fill={activeId === 'horizontal' ? 'var(--accent-subtle)' : 'var(--bg-surface-elevated)'}
              stroke="var(--accent)"
              strokeWidth={activeId === 'horizontal' ? '2' : '1'}
              strokeDasharray="5 3"
            />
            <text x="440" y="20" textAnchor="middle" fill="var(--text-primary)" fontSize="9.5" fontWeight="bold">
              ⟷ HORIZONTAL RESERVATION COMPARTMENTS (WOMEN / PwD / EX-SERVICEMEN) ⟷
            </text>
            <text x="440" y="34" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.8">
              Interlocks INSIDE each vertical column above — does NOT exceed total seat ceiling!
            </text>
          </g>

          {/* Bottom Key Axis */}
          <rect x="40" y="274" width="880" height="52" rx="8" fill="var(--bg-surface-elevated)" stroke="var(--border-subtle)" />
          <text x="60" y="297" fill="var(--text-primary)" fontSize="8.5" fontWeight="bold">
            ART 335 BALANCE: Claims of SC/ST shall be taken into consideration consistently with maintenance of efficiency of administration.
          </text>
          <text x="60" y="314" fill="var(--text-muted)" fontSize="7.8">
            82nd Amendment (2000) added Proviso allowing relaxation of qualifying marks / standards for SC/ST in promotions.
          </text>
        </svg>
      </div>

      {/* Inspector */}
      <div className="p-5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-7 space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)]">
              {cur.articles}
            </span>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-muted)]">
              {cur.pct}
            </span>
            <h4 className="text-base font-bold text-[var(--text-primary)]">{cur.title}</h4>
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">{cur.details}</p>
          <div className="flex items-center gap-1.5 text-xs text-[var(--text-primary)] pt-1">
            <Scale className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
            <span>{cur.caseAnchor}</span>
          </div>
        </div>

        <div className="lg:col-span-5 p-3.5 rounded-lg bg-rose-500/5 border border-rose-500/20 space-y-1">
          <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase text-rose-400">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Critical Quota Trap</span>
          </div>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{cur.trap}</p>
        </div>
      </div>
    </div>
  );
};
