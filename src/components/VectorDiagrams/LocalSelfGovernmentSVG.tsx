import React, { useState } from 'react';
import { Home, AlertTriangle, Check } from 'lucide-react';

interface LocalNode {
  id: string;
  title: string;
  articles: string;
  points: string[];
  trap: string;
}

const LOCAL_NODES: LocalNode[] = [
  {
    id: 'panchayat-tiers',
    title: '3-Tier Panchayati Raj Pyramid (73rd Amendment · 1992)',
    articles: 'Arts 243 to 243-O · 11th Sch. (29 Subjects)',
    points: [
      'Village Level (Gram Sabha / Gram Panchayat): Gram Sabha = ALL registered voters in the village electoral roll (Direct Democracy!).',
      'Intermediate Level (Panchayat Samiti / Block): Optional ONLY if State population < 20 Lakhs (Art 243B(2)).',
      'District Level (Zilla Parishad): Mandatory across all Part IX states. Uniform 5-year fixed tenure.'
    ],
    trap: 'Compulsory vs Voluntary Split: Minimum age 21 years & 1/3rd Women reservation are COMPULSORY; OBC reservation & giving voting rights to MPs/MLAs inside Panchayats are VOLUNTARY (State discretion)!'
  },
  {
    id: 'urban-tiers',
    title: 'Urban Local Bodies Trio (74th Amendment · 1992)',
    articles: 'Arts 243-P to 243-ZG · 12th Sch. (18 Subjects)',
    points: [
      'Nagar Panchayat: Areas in transition from rural to urban.',
      'Municipal Council: Smaller urban areas (Towns / Cities).',
      'Municipal Corporation: Larger metropolitan urban areas + Metropolitan Planning Committees (Art 243-ZE).'
    ],
    trap: 'Direct vs Indirect Election Distinction: Chairperson of a VILLAGE Panchayat is elected as decided by State Legislature, whereas Chairpersons of Intermediate & District tiers MUST be indirectly elected!'
  },
  {
    id: 'watchdogs',
    title: 'Constitutional Watchdogs: SEC & State Finance Commission',
    articles: 'Arts 243-I, 243-K, 243-Y, 243-ZA',
    points: [
      'State Election Commission (Art 243K / 243ZA): Conducts BOTH Panchayat & Municipal elections (NOT Election Commission of India!).',
      'Removal Protection: State Election Commissioner can be removed ONLY in like manner and grounds as a High Court Judge.',
      'State Finance Commission (Art 243I / 243Y): Governor constitutes every 5 years to recommend tax-sharing & grants-in-aid from State Consolidated Fund.'
    ],
    trap: 'SEC prepares local rolls & conducts local polls, while ECI conducts ONLY Parliament, State Legislature, President & VP elections. Do NOT confuse the two!'
  },
  {
    id: 'pesa-exemptions',
    title: 'Excluded Areas & PESA Act 1996 Safeguards',
    articles: 'Arts 243M, 243ZC & 5th/6th Schedules',
    points: [
      'Part IX does NOT automatically apply to Nagaland, Meghalaya, Mizoram, Hill areas of Manipur, Darjeeling, or Scheduled/Tribal Areas.',
      'PESA Act (1996) extended Part IX with tribal autonomy modifications to 10 Fifth Schedule States.',
      'Empowers Gram Sabha with mandatory consultation on land acquisition, minor forest produce & minor minerals.'
    ],
    trap: 'Minimum age to contest Panchayat/Municipal election is 21 YEARS (not 25 years like Lok Sabha/Vidhan Sabha)!'
  }
];

export const LocalSelfGovernmentSVG: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('panchayat-tiers');
  const cur = LOCAL_NODES.find((l) => l.id === activeId) || LOCAL_NODES[0];

  return (
    <div className="w-full flex flex-col gap-6 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] surface-specular">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Home className="w-5 h-5 text-[var(--accent)]" />
            <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
              73rd &amp; 74th Amendments: Grassroots Federalism Pyramid
            </h3>
            <span className="text-xs px-2 py-0.5 rounded font-mono bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
              Articles 243 – 243ZG
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            Interactive 3-tier Panchayati Raj &amp; Municipal structure paired with State Election Commission &amp; Finance Commission funding vectors.
          </p>
        </div>
      </div>

      {/* SVG Diagram */}
      <div className="w-full overflow-x-auto pb-2">
        <svg viewBox="0 0 960 350" className="w-full h-auto select-none font-mono">
          <defs>
            <pattern id="locGrid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.8" fill="var(--border-strong)" opacity="0.35" />
            </pattern>
            <marker id="locArrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 9 5 L 0 9 z" fill="var(--text-secondary)" />
            </marker>
          </defs>

          <rect x="0" y="0" width="960" height="350" rx="14" fill="var(--bg-base)" stroke="var(--border-subtle)" />
          <rect x="0" y="0" width="960" height="350" rx="14" fill="url(#locGrid)" />

          {/* Left: 3-Tier Rural Pyramid */}
          <g className="cursor-pointer vector-node" onClick={() => setActiveId('panchayat-tiers')}>
            <text x="175" y="34" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">PART IX · RURAL (73RD AMD)</text>
            <text x="175" y="48" textAnchor="middle" fill="var(--text-muted)" fontSize="7.5">11th Schedule · 29 Functional Subjects</text>

            {/* Tier 3 Top */}
            <rect
              x="95"
              y="66"
              width="160"
              height="52"
              rx="8"
              fill={activeId === 'panchayat-tiers' ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
              stroke="#10b981"
              strokeWidth={activeId === 'panchayat-tiers' ? '1.8' : '1'}
            />
            <text x="175" y="88" textAnchor="middle" fill="var(--text-primary)" fontSize="9.5" fontWeight="bold">ZILLA PARISHAD</text>
            <text x="175" y="104" textAnchor="middle" fill="#6ee7b7" fontSize="7.5">District Apex · Indirect Chair</text>

            {/* Tier 2 Mid */}
            <rect
              x="65"
              y="130"
              width="220"
              height="52"
              rx="8"
              fill={activeId === 'panchayat-tiers' ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
              stroke="#10b981"
              strokeWidth={activeId === 'panchayat-tiers' ? '1.8' : '1'}
            />
            <text x="175" y="152" textAnchor="middle" fill="var(--text-primary)" fontSize="9.5" fontWeight="bold">PANCHAYAT SAMITI</text>
            <text x="175" y="168" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">Optional if State Pop &lt; 20L</text>

            {/* Tier 1 Base */}
            <rect
              x="32"
              y="194"
              width="286"
              height="62"
              rx="8"
              fill={activeId === 'panchayat-tiers' ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
              stroke="#10b981"
              strokeWidth={activeId === 'panchayat-tiers' ? '2' : '1'}
            />
            <text x="175" y="216" textAnchor="middle" fill="#10b981" fontSize="9.5" fontWeight="bold">GRAM SABHA &amp; PANCHAYAT</text>
            <text x="175" y="232" textAnchor="middle" fill="var(--text-primary)" fontSize="8">Foundation Direct Democracy</text>
            <text x="175" y="245" textAnchor="middle" fill="var(--text-muted)" fontSize="7">Min Age: 21 Yrs · ≥ 1/3rd Women Quota</text>
          </g>

          {/* Center: Dual Constitutional Engines (SEC & SFC) */}
          <g className="cursor-pointer vector-node" onClick={() => setActiveId('watchdogs')} transform="translate(362, 66)">
            <rect
              x="0"
              y="0"
              width="236"
              height="190"
              rx="12"
              fill={activeId === 'watchdogs' ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
              stroke={activeId === 'watchdogs' ? '#38bdf8' : 'var(--border-strong)'}
              strokeWidth={activeId === 'watchdogs' ? '2' : '1.2'}
            />
            <text x="118" y="24" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">SHARED ENFORCEMENT ENGINES</text>
            <line x1="16" y1="34" x2="220" y2="34" stroke="var(--border-subtle)" />

            <rect x="16" y="46" width="204" height="58" rx="8" fill="var(--bg-base)" stroke="#38bdf8" strokeOpacity="0.4" />
            <text x="118" y="65" textAnchor="middle" fill="var(--text-primary)" fontSize="9" fontWeight="bold">State Election Comm.</text>
            <text x="118" y="80" textAnchor="middle" fill="#38bdf8" fontSize="7.5">Arts 243-K &amp; 243-ZA</text>
            <text x="118" y="93" textAnchor="middle" fill="var(--text-muted)" fontSize="7">Polls for BOTH Rural &amp; Urban</text>

            <rect x="16" y="114" width="204" height="58" rx="8" fill="var(--bg-base)" stroke="#a855f7" strokeOpacity="0.4" />
            <text x="118" y="133" textAnchor="middle" fill="var(--text-primary)" fontSize="9" fontWeight="bold">State Finance Comm.</text>
            <text x="118" y="148" textAnchor="middle" fill="#a855f7" fontSize="7.5">Arts 243-I &amp; 243-Y (Every 5Y)</text>
            <text x="118" y="161" textAnchor="middle" fill="var(--text-muted)" fontSize="7">Vertical State Fund Devolution</text>
          </g>

          {/* Horizontal Arrows connecting Engine to Both Rural & Urban */}
          <path d="M 362 120 L 292 120" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#locArrow)" />
          <path d="M 598 120 L 642 120" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#locArrow)" />

          {/* Right: 3-Tier Urban Trio */}
          <g className="cursor-pointer vector-node" onClick={() => setActiveId('urban-tiers')}>
            <text x="786" y="34" textAnchor="middle" fill="#a855f7" fontSize="10" fontWeight="bold">PART IX-A · URBAN (74TH AMD)</text>
            <text x="786" y="48" textAnchor="middle" fill="var(--text-muted)" fontSize="7.5">12th Schedule · 18 Municipal Subjects</text>

            <rect
              x="646"
              y="66"
              width="280"
              height="52"
              rx="8"
              fill={activeId === 'urban-tiers' ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
              stroke="#a855f7"
              strokeWidth={activeId === 'urban-tiers' ? '1.8' : '1'}
            />
            <text x="786" y="88" textAnchor="middle" fill="var(--text-primary)" fontSize="9.5" fontWeight="bold">MUNICIPAL CORPORATION</text>
            <text x="786" y="104" textAnchor="middle" fill="#c084fc" fontSize="7.5">Larger Urban Metro Areas + MPC (243ZE)</text>

            <rect
              x="646"
              y="130"
              width="280"
              height="52"
              rx="8"
              fill={activeId === 'urban-tiers' ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
              stroke="#a855f7"
              strokeWidth={activeId === 'urban-tiers' ? '1.8' : '1'}
            />
            <text x="786" y="152" textAnchor="middle" fill="var(--text-primary)" fontSize="9.5" fontWeight="bold">MUNICIPAL COUNCIL</text>
            <text x="786" y="168" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">Smaller Urban Areas + DPC (Art 243ZD)</text>

            <rect
              x="646"
              y="194"
              width="280"
              height="62"
              rx="8"
              fill={activeId === 'urban-tiers' ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
              stroke="#a855f7"
              strokeWidth={activeId === 'urban-tiers' ? '1.8' : '1'}
            />
            <text x="786" y="216" textAnchor="middle" fill="#a855f7" fontSize="9.5" fontWeight="bold">NAGAR PANCHAYAT</text>
            <text x="786" y="232" textAnchor="middle" fill="var(--text-primary)" fontSize="8">Rural-to-Urban Transition Zone</text>
            <text x="786" y="245" textAnchor="middle" fill="var(--text-muted)" fontSize="7">6-Month Fresh Poll Mandate if Dissolved</text>
          </g>

          {/* Bottom PESA & Exemptions Banner */}
          <g className="cursor-pointer vector-node" onClick={() => setActiveId('pesa-exemptions')} transform="translate(32, 276)">
            <rect
              x="0"
              y="0"
              width="894"
              height="54"
              rx="10"
              fill={activeId === 'pesa-exemptions' ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
              stroke={activeId === 'pesa-exemptions' ? 'var(--accent)' : 'var(--border-strong)'}
              strokeWidth={activeId === 'pesa-exemptions' ? '1.8' : '1'}
            />
            <text x="18" y="22" fill="var(--text-primary)" fontSize="9" fontWeight="bold">
              ART 243-M EXEMPTIONS &amp; PESA ACT 1996 (FIFTH SCHEDULE TRIBAL SELF-RULE)
            </text>
            <text x="18" y="40" fill="var(--text-secondary)" fontSize="8">
              Exempt: Nagaland, Meghalaya, Mizoram, Hill Manipur · Part IX-B added 97th Amendment Co-operative Societies (Art 243ZH-ZT)
            </text>
            <text x="876" y="31" textAnchor="end" fill="var(--accent)" fontSize="8" fontWeight="bold">INSPECT →</text>
          </g>
        </svg>
      </div>

      {/* Inspector */}
      <div className="p-5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-7 space-y-2.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)]">
              {cur.articles}
            </span>
            <h4 className="text-base font-bold text-[var(--text-primary)]">{cur.title}</h4>
          </div>
          <ul className="space-y-1.5">
            {cur.points.map((pt, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5 p-3.5 rounded-lg bg-rose-500/5 border border-rose-500/20 space-y-1">
          <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase font-bold text-rose-400">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Compulsory vs. Voluntary Trap</span>
          </div>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{cur.trap}</p>
        </div>
      </div>
    </div>
  );
};
