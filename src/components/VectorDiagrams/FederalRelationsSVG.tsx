import React, { useState } from 'react';
import { Layers, ShieldCheck, ArrowDown, ChevronRight, Zap } from 'lucide-react';

interface ListSubject {
  name: string;
  count: number;
  originalCount: number;
  competence: string;
  examples: string[];
  color: string;
}

const LISTS: Record<string, ListSubject> = {
  union: {
    name: 'List I : Union List',
    count: 100,
    originalCount: 97,
    competence: 'Exclusive Legislative Competence of Union Parliament (Art 246(1))',
    examples: [
      'Defence & Armed Forces',
      'Atomic Energy & Mineral Resources',
      'Foreign Affairs & Treaties',
      'Railways, National Highways & Airways',
      'Banking, Currency, Coinage & RBI',
      'Corporation Tax, Customs & Income Tax (non-agri)'
    ],
    color: '#38bdf8'
  },
  state: {
    name: 'List II : State List',
    count: 61,
    originalCount: 66,
    competence: 'Exclusive Legislative Competence of State Legislatures (Art 246(3))',
    examples: [
      'Public Order & Police',
      'Public Health & Sanitation; Hospitals',
      'Agriculture & Agricultural Education',
      'Prisons, Reformatories & Local Government',
      'Land, Rights in Land & Tenures',
      'Taxes on Agricultural Income, Land Revenues'
    ],
    color: '#10b981'
  },
  concurrent: {
    name: 'List III : Concurrent List',
    count: 52,
    originalCount: 47,
    competence: 'Shared Competence: Both Parliament & State Legislatures (Art 246(2))',
    examples: [
      'Criminal Law & Criminal Procedure (CrPC/BNSS)',
      'Marriage, Divorce, Adoption & Succession',
      'Education (transferred by 42nd Amendment)',
      'Forests & Protection of Wild Animals',
      'Trade Unions & Industrial/Labor Disputes',
      'Civil Procedure Code, Bankruptcy & Insolvency'
    ],
    color: '#f59e0b'
  }
};

const OVERRIDE_VECTORS = [
  {
    article: 'Art 249',
    trigger: 'Rajya Sabha Resolution',
    threshold: '2/3 present & voting',
    purpose: 'Enact law on State List in National Interest (valid for 1 yr at a time)'
  },
  {
    article: 'Art 250',
    trigger: 'Proclamation of Emergency',
    threshold: 'While National Emergency is operational',
    purpose: 'Parliament acquires plenary power to legislate on any item in State List'
  },
  {
    article: 'Art 252',
    trigger: 'Consent of 2 or More States',
    threshold: 'Resolutions by State Assemblies',
    purpose: 'Parliament legislates for consenting states (e.g. Wildlife Protection Act)'
  },
  {
    article: 'Art 253',
    trigger: 'International Treaties',
    threshold: 'Treaty / convention implementation',
    purpose: 'Legislating on State subjects to implement foreign international covenants'
  },
  {
    article: 'Art 356',
    trigger: "President's Rule",
    threshold: 'Constitutional machinery failure',
    purpose: "State legislative powers exercised by or under authority of Parliament"
  }
];

export const FederalRelationsSVG: React.FC = () => {
  const [selectedListKey, setSelectedListKey] = useState<string>('union');
  const activeList = LISTS[selectedListKey];

  return (
    <div className="w-full flex flex-col gap-6 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Layers className="w-5 h-5 text-[var(--accent)]" />
            <h3 className="text-xl font-semibold text-[var(--text-primary)]">Federal Legislative Competence & Seventh Schedule</h3>
            <span className="text-xs px-2 py-0.5 rounded font-mono bg-[var(--badge-bg)] text-[var(--text-secondary)] border border-[var(--badge-border)]">
              Article 246 & 248
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            Distribution of subject matters between Union and States, residuary powers, and the 5 central overriding pathways.
          </p>
        </div>
      </div>

      {/* SVG Vector Architecture */}
      <div className="w-full overflow-x-auto pb-2">
        <svg
          viewBox="0 0 940 320"
          className="w-full h-auto select-none font-mono"
        >
          {/* Top 3 List Pillars */}
          {Object.entries(LISTS).map(([key, data], idx) => {
            const x = 50 + idx * 300;
            const isSelected = selectedListKey === key;
            return (
              <g
                key={key}
                className="vector-node cursor-pointer"
                onClick={() => setSelectedListKey(key)}
                transform={`translate(${x}, 20)`}
              >
                <rect
                  x="0"
                  y="0"
                  width="240"
                  height="130"
                  rx="8"
                  fill={isSelected ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
                  stroke={isSelected ? data.color : 'var(--border-subtle)'}
                  strokeWidth={isSelected ? '2' : '1'}
                />

                <rect x="12" y="12" width="216" height="24" rx="4" fill={isSelected ? `${data.color}20` : 'var(--bg-base)'} stroke={data.color} strokeWidth="0.8" />
                <text x="120" y="28" textAnchor="middle" fill={data.color} fontSize="10.5" fontWeight="bold">
                  {key.toUpperCase()} LIST (LIST {idx === 0 ? 'I' : idx === 1 ? 'II' : 'III'})
                </text>

                <text x="120" y="62" textAnchor="middle" fill="var(--text-primary)" fontSize="20" fontWeight="bold">
                  {data.count} <tspan fontSize="11" fill="var(--text-muted)">items</tspan>
                </text>

                <text x="120" y="80" textAnchor="middle" fill="var(--text-secondary)" fontSize="8.5">
                  Originally: {data.originalCount} items
                </text>

                <line x1="20" y1="92" x2="220" y2="92" stroke="var(--border-subtle)" />

                <text x="120" y="112" textAnchor="middle" fill={isSelected ? data.color : 'var(--text-muted)'} fontSize="8.5" fontWeight="600">
                  {isSelected ? '● ACTIVE INSPECTION' : 'CLICK TO INSPECT'}
                </text>
              </g>
            );
          })}

          {/* Residuary Box at the Center */}
          <g transform="translate(350, 180)">
            <rect x="0" y="0" width="240" height="46" rx="6" fill="var(--bg-base)" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="3 3" />
            <text x="120" y="20" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">RESIDUARY POWERS (ART 248)</text>
            <text x="120" y="34" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Vested strictly in Union Parliament (unlike US/Australia)</text>
          </g>

          {/* Central Overriding Rail across Bottom */}
          <g transform="translate(50, 245)">
            <rect x="0" y="0" width="840" height="62" rx="8" fill="var(--bg-surface-elevated)" stroke="var(--border-strong)" strokeWidth="1" />
            <text x="420" y="20" textAnchor="middle" fill="var(--gold)" fontSize="10" fontWeight="bold">
              THE 5 EXTRAORDINARY CENTRAL OVERRIDING PATHWAYS OVER STATE LIST (LIST II)
            </text>
            <text x="420" y="38" textAnchor="middle" fill="var(--text-secondary)" fontSize="8.5">
              Art 249 (National Interest Resolution) • Art 250 (National Emergency) • Art 252 (2+ State Consent)
            </text>
            <text x="420" y="52" textAnchor="middle" fill="var(--text-muted)" fontSize="8">
              Art 253 (International Treaties Enforcement) • Art 356 (Constitutional Machinery Breakdown)
            </text>
          </g>
        </svg>
      </div>

      {/* Selected List Inspection & Overrides Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
        {/* Left: Selected List Details */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: activeList.color }} />
            <h4 className="text-base font-bold text-[var(--text-primary)]">{activeList.name}</h4>
          </div>
          <p className="text-xs font-mono text-[var(--accent)] bg-[var(--bg-base)] p-2.5 rounded border border-[var(--border-subtle)]">
            {activeList.competence}
          </p>
          <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mt-1">
            Core High-Yield Subject Matters
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {activeList.examples.map((ex, idx) => (
              <li key={idx} className="flex items-center gap-1.5 text-xs text-[var(--text-primary)] bg-[var(--bg-base)] p-2 rounded border border-[var(--border-subtle)]">
                <ChevronRight className="w-3 h-3 text-[var(--text-muted)] shrink-0" />
                <span>{ex}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Overriding Channels Matrix */}
        <div className="flex flex-col gap-2 border-t md:border-t-0 md:border-l border-[var(--border-subtle)] md:pl-6">
          <div className="flex items-center gap-2 mb-1">
            <Zap className="w-4 h-4 text-[var(--gold)]" />
            <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
              Central Encroachment Mechanics
            </span>
          </div>
          <div className="flex flex-col gap-2">
            {OVERRIDE_VECTORS.map((ov) => (
              <div key={ov.article} className="p-2 rounded bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[var(--accent)]">{ov.article}</span>
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">{ov.threshold}</span>
                </div>
                <p className="text-[11px] text-[var(--text-secondary)]">{ov.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
