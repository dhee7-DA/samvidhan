import React, { useState } from 'react';
import { FileCheck2, AlertTriangle, Scale } from 'lucide-react';

type GovRoute = 'assent' | 'return' | 'reserve' | 'ordinance';

const ROUTE_DETAILS: Record<
  GovRoute,
  { title: string; article: string; rule: string; landmark: string; trap: string }
> = {
  assent: {
    title: 'Option 1: Grant Assent (Enactment)',
    article: 'Article 200',
    rule: 'Governor gives assent to the State Legislature bill -> Bill immediately becomes a State Act. Ordinarily bound by aid & advice of State Council of Ministers (Art 163).',
    landmark: 'Shamsher Singh v. State of Punjab (1974): Governor is a constitutional nominal head.',
    trap: 'Governor cannot sit indefinitely without acting! In State of Punjab v. Governor (2023), SC held "as soon as possible" enforces active constitutional duty.'
  },
  return: {
    title: 'Option 2: Withhold & Return (Mandatory Second Pass!)',
    article: 'Article 200 Proviso 1',
    rule: 'If Governor withholds assent to an Ordinary Bill, Governor MUST return it "as soon as possible" with a message for reconsideration. If passed again (with or without amendments), Governor SHALL NOT withhold assent!',
    landmark: 'State of Punjab v. Principal Secy to Governor (2023): Pocket veto cannot bypass Art 200 Proviso 1.',
    trap: 'BIGGEST TRAP: Unlike Money Bills, if Governor simply withholds without returning, legislative sovereignty would be defeated — 2023 SC Bench linked withhold directly to prompt return!'
  },
  reserve: {
    title: 'Option 3: Reserve Bill for Presidential Consideration',
    article: 'Articles 200 Proviso 2 & 201',
    rule: 'MANDATORY reservation if Bill endangers High Court powers (Art 200 Proviso 2); discretionary if repugnant to Central Concurrent Law (Art 254(2)) or violating Art 31A/Directive Principles. Under Art 201, President can assent, withhold, or direct return within 6 months.',
    landmark: 'Hoechst Pharmaceuticals (1983): President’s decision under Art 201 is non-justiciable on merits.',
    trap: 'CRITICAL ART 201 TRAP: Even if the State Legislature re-passes a Presidentially returned bill within 6 months, the PRESIDENT is NOT bound to give assent (unlike Governor under Art 200 or President under Art 111 Parliament bills)!'
  },
  ordinance: {
    title: 'Ordinance Promulgation & Repromulgation Ban',
    article: 'Arts 123 (Pres.) & 213 (Gov.)',
    rule: 'Issued ONLY when Houses are not in session + immediate necessity exists. Co-extensive with legislative competence. Maximum life: 6 months max gap between sessions + 6 weeks after reassembly = 6 months & 6 weeks max.',
    landmark: 'D.C. Wadhwa (1987) & Krishna Kumar Singh v. State of Bihar (2017) 7-Judge Bench.',
    trap: 'REPROMULGATION IS A FRAUD ON THE CONSTITUTION! Failing to place an ordinance before the Assembly or repeatedly re-issuing it is unconstitutional and voids rights created unless irreversibly vested.'
  }
};

export const GovernorAssentOrdinanceSVG: React.FC = () => {
  const [selectedRoute, setSelectedRoute] = useState<GovRoute>('return');
  const cur = ROUTE_DETAILS[selectedRoute];

  return (
    <div className="w-full flex flex-col gap-6 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] surface-specular">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <FileCheck2 className="w-5 h-5 text-[var(--accent)]" />
            <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
              Governor’s Bill Assent Routes &amp; Ordinance Constraints
            </h3>
            <span className="text-xs px-2 py-0.5 rounded font-mono bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
              Articles 200, 201, 123 &amp; 213
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            Interactive state legislative flowchart covering Art 200 return duty, Art 201 Presidential non-obligation, and Krishna Kumar Singh ordinance limits.
          </p>
        </div>
      </div>

      {/* SVG Flowchart Canvas */}
      <div className="w-full overflow-x-auto pb-2">
        <svg viewBox="0 0 960 360" className="w-full min-w-[740px] h-auto select-none font-mono">
          <defs>
            <pattern id="govGrid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.8" fill="var(--border-strong)" opacity="0.35" />
            </pattern>
            <marker id="govArrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 9 5 L 0 9 z" fill="var(--text-secondary)" />
            </marker>
          </defs>

          <rect x="0" y="0" width="960" height="360" rx="14" fill="var(--bg-base)" stroke="var(--border-subtle)" />
          <rect x="0" y="0" width="960" height="360" rx="14" fill="url(#govGrid)" />

          {/* Origin: State Bill Passed */}
          <g transform="translate(26, 95)">
            <rect x="0" y="0" width="150" height="90" rx="10" fill="var(--bg-surface-elevated)" stroke="var(--border-strong)" strokeWidth="1.5" />
            <text x="75" y="28" textAnchor="middle" fill="var(--text-muted)" fontSize="8">STATE LEGISLATURE</text>
            <text x="75" y="48" textAnchor="middle" fill="var(--text-primary)" fontSize="10.5" fontWeight="bold">BILL PASSED</text>
            <text x="75" y="66" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.8">Vidhan Sabha (+Council)</text>
          </g>

          <line x1="176" y1="140" x2="220" y2="140" stroke="var(--text-secondary)" strokeWidth="1.6" markerEnd="url(#govArrow)" />

          {/* Decision Hub: Governor Art 200 */}
          <g transform="translate(224, 82)">
            <rect x="0" y="0" width="155" height="116" rx="12" fill="var(--bg-surface)" stroke="var(--accent)" strokeWidth="1.8" />
            <text x="77.5" y="26" textAnchor="middle" fill="var(--accent)" fontSize="8.5" fontWeight="bold">ARTICLE 200 HUB</text>
            <text x="77.5" y="46" textAnchor="middle" fill="var(--text-primary)" fontSize="11.5" fontWeight="bold">GOVERNOR</text>
            <text x="77.5" y="64" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Cannot indefinitely stall</text>
            <text x="77.5" y="78" textAnchor="middle" fill="var(--text-muted)" fontSize="7.5">(Punjab Gov. 2023)</text>
            <text x="77.5" y="102" textAnchor="middle" fill="#10b981" fontSize="7.5">Click routes right →</text>
          </g>

          {/* Routing Branches */}
          <path d="M 379 102 Q 425 56 462 56" fill="none" stroke={selectedRoute === 'assent' ? '#10b981' : 'var(--border-strong)'} strokeWidth="1.8" markerEnd="url(#govArrow)" />
          <path d="M 379 140 L 462 140" fill="none" stroke={selectedRoute === 'return' ? '#38bdf8' : 'var(--border-strong)'} strokeWidth="1.8" markerEnd="url(#govArrow)" />
          <path d="M 379 178 Q 425 224 462 224" fill="none" stroke={selectedRoute === 'reserve' ? '#a855f7' : 'var(--border-strong)'} strokeWidth="1.8" markerEnd="url(#govArrow)" />

          {/* Branch 1: Assent */}
          <g className="cursor-pointer vector-node" onClick={() => setSelectedRoute('assent')} transform="translate(466, 24)">
            <rect
              x="0"
              y="0"
              width="464"
              height="62"
              rx="8"
              fill={selectedRoute === 'assent' ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
              stroke={selectedRoute === 'assent' ? '#10b981' : 'var(--border-subtle)'}
              strokeWidth={selectedRoute === 'assent' ? '2' : '1'}
            />
            <text x="16" y="24" fill="#10b981" fontSize="9.5" fontWeight="bold">1. ASSENT GRANTED</text>
            <text x="16" y="42" fill="var(--text-secondary)" fontSize="8">Becomes Law immediately on Governor’s signature.</text>
            <text x="360" y="34" fill="var(--text-muted)" fontSize="8" fontWeight="bold">STATE ACT</text>
          </g>

          {/* Branch 2: Return -> Re-Pass -> Mandatory Assent */}
          <g className="cursor-pointer vector-node" onClick={() => setSelectedRoute('return')} transform="translate(466, 104)">
            <rect
              x="0"
              y="0"
              width="464"
              height="74"
              rx="8"
              fill={selectedRoute === 'return' ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
              stroke={selectedRoute === 'return' ? '#38bdf8' : 'var(--border-subtle)'}
              strokeWidth={selectedRoute === 'return' ? '2' : '1'}
            />
            <text x="16" y="22" fill="#38bdf8" fontSize="9.5" fontWeight="bold">2. RETURN "AS SOON AS POSSIBLE" (ORDINARY BILL)</text>
            <text x="16" y="39" fill="var(--text-primary)" fontSize="8">House passes again (with/without edits) → MUST SIGN!</text>
            <rect x="16" y="47" width="290" height="18" rx="4" fill="var(--bg-base)" stroke="#10b981" strokeOpacity="0.35" />
            <text x="24" y="59" fill="#10b981" fontSize="7.5">Governor SHALL NOT withhold assent on 2nd passage</text>
          </g>

          {/* Branch 3: Reserve for President Art 201 */}
          <g className="cursor-pointer vector-node" onClick={() => setSelectedRoute('reserve')} transform="translate(466, 194)">
            <rect
              x="0"
              y="0"
              width="464"
              height="74"
              rx="8"
              fill={selectedRoute === 'reserve' ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
              stroke={selectedRoute === 'reserve' ? '#a855f7' : 'var(--border-subtle)'}
              strokeWidth={selectedRoute === 'reserve' ? '2' : '1'}
            />
            <text x="16" y="22" fill="#a855f7" fontSize="9.5" fontWeight="bold">3. RESERVE FOR PRESIDENT (ART 201)</text>
            <text x="16" y="39" fill="var(--text-primary)" fontSize="8">Mandatory if HC endangered (200 Proviso 2) · Discretionary if Art 254</text>
            <rect x="16" y="47" width="380" height="18" rx="4" fill="var(--bg-base)" stroke="#f43f5e" strokeOpacity="0.4" />
            <text x="24" y="59" fill="#fda4af" fontSize="7.5">2nd Passage by State does NOT bind President under Art 201!</text>
          </g>

          {/* Bottom Strip: Ordinance Architecture (Arts 123 & 213) */}
          <g className="cursor-pointer vector-node" onClick={() => setSelectedRoute('ordinance')} transform="translate(26, 286)">
            <rect
              x="0"
              y="0"
              width="904"
              height="56"
              rx="10"
              fill={selectedRoute === 'ordinance' ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
              stroke={selectedRoute === 'ordinance' ? '#f43f5e' : 'var(--border-strong)'}
              strokeWidth={selectedRoute === 'ordinance' ? '2' : '1'}
            />
            <text x="18" y="22" fill="#f43f5e" fontSize="9" fontWeight="bold">
              ORDINANCE PARALLEL TRACK (ART 123 / 213) · RECESS LEGISLATIVE POWER
            </text>
            <text x="18" y="41" fill="var(--text-secondary)" fontSize="8">
              Max Lifespan: 6 Months + 6 Weeks &nbsp;|&nbsp; Must place before House &nbsp;|&nbsp; Repromulgation is Fraud (Krishna Kumar 2017)
            </text>
            <text x="886" y="32" textAnchor="end" fill="var(--accent)" fontSize="8" fontWeight="bold">INSPECT →</text>
          </g>
        </svg>
      </div>

      {/* Inspector */}
      <div className="p-5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-7 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)]">
              {cur.article}
            </span>
            <h4 className="text-base font-bold text-[var(--text-primary)]">{cur.title}</h4>
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">{cur.rule}</p>
          <div className="flex items-center gap-1.5 text-xs text-[var(--text-primary)] pt-1">
            <Scale className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
            <span>{cur.landmark}</span>
          </div>
        </div>

        <div className="lg:col-span-5 p-3.5 rounded-lg bg-rose-500/5 border border-rose-500/20 space-y-1">
          <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase text-rose-400">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Assent &amp; Ordinance Trap</span>
          </div>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{cur.trap}</p>
        </div>
      </div>
    </div>
  );
};
