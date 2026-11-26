import React, { useState } from 'react';
import { MapPin, Shield, CheckCircle2, ChevronRight, Compass } from 'lucide-react';

interface AsymmetricState {
  article: string;
  state: string;
  shortName: string;
  subLabel: string;
  keySafeguard: string;
  historicalContext: string;
  color: string;
}

const ASYMMETRIC_STATES: AsymmetricState[] = [
  {
    article: 'Art 371',
    state: 'Maharashtra & Gujarat',
    shortName: 'MH & GJ',
    subLabel: 'Bilingual',
    keySafeguard: 'Separate development boards for Vidarbha, Marathwada, Saurashtra, and Kutch with equitable allocation of state funds and technical education quotas.',
    historicalContext: 'Formulated during the bilingual Bombay state bifurcation in 1960 to safeguard economically lagging sub-regions.',
    color: '#38bdf8'
  },
  {
    article: 'Art 371A',
    state: 'Nagaland',
    shortName: 'Nagaland',
    subLabel: 'Customary',
    keySafeguard: 'No Act of Parliament regarding religious/social practices, Naga customary law, or land ownership/transfer applies unless approved by Nagaland Legislative Assembly.',
    historicalContext: 'Result of the 1960 16-point agreement between the Naga People’s Convention and the Government of India.',
    color: '#10b981'
  },
  {
    article: 'Art 371B',
    state: 'Assam',
    shortName: 'Assam',
    subLabel: 'Tribal Areas',
    keySafeguard: 'President may provide for the constitution of a committee of the Legislative Assembly consisting of members elected from tribal areas.',
    historicalContext: 'Designed to protect interests of frontier hill and plains tribal populations.',
    color: '#f59e0b'
  },
  {
    article: 'Art 371C',
    state: 'Manipur',
    shortName: 'Manipur',
    subLabel: 'Hill Areas',
    keySafeguard: 'Legislative Assembly Hill Areas Committee; Governor submits annual report to the President on hill administration.',
    historicalContext: 'Protects the distinct tribal hill districts from valley domination.',
    color: '#a855f7'
  },
  {
    article: 'Art 371D & E',
    state: 'Andhra Pradesh & Telangana',
    shortName: 'AP & TG',
    subLabel: 'Local Cadres',
    keySafeguard: 'Equitable opportunities in public employment and education for different local regions (Presidential Order local cadre system); Central University.',
    historicalContext: 'Enacted under 32nd Amendment 1973 to satisfy regional grievances between Coastal Andhra, Rayalaseema, and Telangana.',
    color: '#6366f1'
  },
  {
    article: 'Art 371F',
    state: 'Sikkim',
    shortName: 'Sikkim',
    subLabel: 'Chogyal Laws',
    keySafeguard: 'Assembly of not less than 32 members, protection of preexisting Chogyal-era municipal and customary laws, 1 Lok Sabha seat.',
    historicalContext: 'Inserted by 36th Amendment 1975 when the Himalayan protectorate acceded as the 22nd state of India.',
    color: '#ec4899'
  },
  {
    article: 'Art 371G',
    state: 'Mizoram',
    shortName: 'Mizoram',
    subLabel: 'Peace Accord',
    keySafeguard: 'Parliamentary acts on Mizo religion, customary law, and land ownership do not apply unless ratified by Mizoram Assembly; assembly minimum 40 members.',
    historicalContext: 'Historic 1986 Mizo Peace Accord ending two decades of insurgency.',
    color: '#14b8a6'
  },
  {
    article: 'Art 371H',
    state: 'Arunachal Pradesh',
    shortName: 'Arunachal',
    subLabel: 'Governor Law',
    keySafeguard: 'Governor has special individual judgment responsibility for law and order; assembly minimum 30 members.',
    historicalContext: 'Enacted by 55th Amendment 1986 on grant of statehood to the strategic border state.',
    color: '#f97316'
  },
  {
    article: 'Art 371J',
    state: 'Karnataka (Kalyana-Karnataka)',
    shortName: 'Karnataka',
    subLabel: 'HK Region',
    keySafeguard: 'Separate development board for 6 backward districts (Bidar, Ballari, Kalaburagi, Koppal, Raichur, Yadgir); local reservations in education & state government jobs.',
    historicalContext: 'Inserted by 98th Amendment 2012 to address chronic regional socio-economic backwardness in the former Hyderabad-Karnataka region.',
    color: '#e11d48'
  }
];

export const AsymmetricFederalismSVG: React.FC = () => {
  const [selectedState, setSelectedState] = useState<AsymmetricState>(ASYMMETRIC_STATES[1]); // Nagaland default

  return (
    <div className="w-full flex flex-col gap-6 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Compass className="w-5 h-5 text-[var(--accent)]" />
            <h3 className="text-xl font-semibold text-[var(--text-primary)]">
              Asymmetric Federalism & Special State Provisions
            </h3>
            <span className="text-xs px-2 py-0.5 rounded font-mono bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
              Part XXI (Articles 371 to 371-J)
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            How the Indian Constitution accommodates cultural, tribal, linguistic, and historical diversities across 11 States.
          </p>
        </div>
      </div>

      {/* SVG Vector Rail of Articles */}
      <div className="w-full overflow-x-auto pb-2">
        <svg viewBox="0 0 940 130" className="w-full h-auto select-none font-mono">
          {ASYMMETRIC_STATES.map((st, idx) => {
            const x = 20 + idx * 100;
            const isSelected = selectedState.article === st.article;
            return (
              <g
                key={st.article}
                className="vector-node cursor-pointer"
                onClick={() => setSelectedState(st)}
                transform={`translate(${x}, 15)`}
              >
                <rect
                  x="0"
                  y="0"
                  width="90"
                  height="95"
                  rx="8"
                  fill={isSelected ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
                  stroke={isSelected ? st.color : 'var(--border-subtle)'}
                  strokeWidth={isSelected ? '2' : '1'}
                />
                <text x="45" y="24" textAnchor="middle" fill={st.color} fontSize="11" fontWeight="bold">
                  {st.article.replace('Art ', '')}
                </text>
                <line x1="10" y1="34" x2="80" y2="34" stroke="var(--border-subtle)" />
                <text x="45" y="54" textAnchor="middle" fill="var(--text-primary)" fontSize="9" fontWeight="bold">
                  {st.shortName}
                </text>
                <text x="45" y="68" textAnchor="middle" fill="var(--text-muted)" fontSize="7.5">
                  {st.subLabel}
                </text>
                <circle cx="45" cy="82" r={isSelected ? 4 : 2} fill={isSelected ? st.color : 'var(--border-strong)'} />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Selected State In-Depth Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: selectedState.color }} />
            <h4 className="text-base font-bold text-[var(--text-primary)]">
              {selectedState.article} : {selectedState.state}
            </h4>
          </div>

          <div className="flex flex-col gap-1 mt-1">
            <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
              Constitutional Protection & Autonomous Shield
            </span>
            <p className="text-xs text-[var(--text-primary)] leading-relaxed bg-[var(--bg-base)] p-3 rounded-lg border border-[var(--border-subtle)]">
              {selectedState.keySafeguard}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t md:border-t-0 md:border-l border-[var(--border-subtle)] md:pl-6">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
              Historical Origin & Purpose
            </span>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed bg-[var(--bg-base)] p-3 rounded-lg border border-[var(--border-subtle)]">
              {selectedState.historicalContext}
            </p>
          </div>

          <div className="text-[11px] font-mono text-[var(--gold)] mt-auto pt-2 border-t border-[var(--border-subtle)]">
            * Note: Distinct from Article 370 (which was temporary); Articles 371 to 371-J are permanent constitutional provisions.
          </div>
        </div>
      </div>
    </div>
  );
};
