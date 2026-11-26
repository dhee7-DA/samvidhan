import React, { useState } from 'react';
import { Eye, Shield, Check, HeartHandshake } from 'lucide-react';

interface EraDetail {
  id: string;
  period: string;
  eraName: string;
  leadCase: string;
  year: number;
  doctrine: string;
  interpretation: string;
  rightsRecognized: string[];
  color: string;
}

const ERAS: EraDetail[] = [
  {
    id: 'era-1',
    period: '1950 – 1978',
    eraName: 'The Formalist / Silo Era',
    leadCase: 'A.K. Gopalan v. State of Madras',
    year: 1950,
    doctrine: 'Procedure Established by Law (Narrow Literal Interpretation)',
    interpretation: 'Articles 19, 21, and 22 were viewed as mutually exclusive water-tight compartments. As long as a formal legislative statute existed authorizing detention, the court would not scrutinize the intrinsic fairness or substantive justice of the law.',
    rightsRecognized: ['Bare physical existence', 'Formal compliance with statutory procedure'],
    color: '#64748b'
  },
  {
    id: 'era-2',
    period: '1978 – 2017',
    eraName: 'The Golden Triangle & Human Dignity Era',
    leadCase: 'Maneka Gandhi v. Union of India',
    year: 1978,
    doctrine: 'Substantive Due Process / Just, Fair and Reasonable Standard',
    interpretation: 'Overruled Gopalan. Established that procedure depriving personal liberty must not be arbitrary, fanciful, or oppressive. Connected Articles 14, 19, and 21 into the "Golden Triangle", expanding Article 21 to encompass human dignity.',
    rightsRecognized: [
      'Right to travel abroad (Maneka Gandhi)',
      'Right to clean environment (Subhash Kumar)',
      'Right to free legal aid (Hussainara Khatoon)',
      'Right to livelihood (Olga Tellis)',
      'Right to speedy trial (Abdul Rehman Antulay)',
      'Right to education (Unni Krishnan / Art 21A)'
    ],
    color: '#38bdf8'
  },
  {
    id: 'era-3',
    period: '2017 – Present',
    eraName: 'The Autonomy, Privacy & Proportionality Era',
    leadCase: 'Justice K.S. Puttaswamy v. Union of India',
    year: 2017,
    doctrine: 'Informational Privacy, Decisional Autonomy & Proportionality Test',
    interpretation: 'Unanimous 9-Judge bench established Right to Privacy as an intrinsic fundamental right emanating from Article 21. Any state encroachment must satisfy the 3-fold proportionality test: Legality, Legitimate State Aim, and Proportionality.',
    rightsRecognized: [
      'Right to Privacy (Puttaswamy 2017)',
      'Decriminalization of homosexuality & sexual autonomy (Navtej Johar 2018)',
      'Decriminalization of adultery (Joseph Shine 2018)',
      'Right to die with dignity / Passive Euthanasia (Common Cause 2018)'
    ],
    color: '#10b981'
  }
];

export const Article21EvolutionSVG: React.FC = () => {
  const [activeEra, setActiveEra] = useState<EraDetail>(ERAS[1]);

  return (
    <div className="w-full flex flex-col gap-6 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Eye className="w-5 h-5 text-[var(--accent)]" />
            <h3 className="text-xl font-semibold text-[var(--text-primary)]">The Evolutionary Metamorphosis of Article 21</h3>
            <span className="text-xs px-2 py-0.5 rounded font-mono bg-[var(--badge-bg)] text-[var(--text-secondary)] border border-[var(--badge-border)]">
              From Procedure Established by Law to Proportionality
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            How judicial interpretation transformed a 19-word clause into an inexhaustible reservoir of fundamental rights.
          </p>
        </div>
      </div>

      {/* SVG Metamorphosis Waves */}
      <div className="w-full overflow-x-auto pb-2">
        <svg
          viewBox="0 0 940 220"
          className="w-full h-auto select-none font-mono"
        >
          {/* Connector Rail */}
          <line x1="160" y1="100" x2="780" y2="100" stroke="var(--border-strong)" strokeWidth="2" strokeDasharray="4 4" />

          {/* 3 Epoch Nodes */}
          {ERAS.map((era, idx) => {
            const x = 160 + idx * 310;
            const isSelected = activeEra.id === era.id;
            return (
              <g
                key={era.id}
                className="vector-node cursor-pointer"
                onClick={() => setActiveEra(era)}
                transform={`translate(${x}, 100)`}
              >
                {/* Outer ring */}
                <circle
                  cx="0"
                  cy="0"
                  r={isSelected ? 42 : 32}
                  fill={isSelected ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
                  stroke={era.color}
                  strokeWidth={isSelected ? '2.5' : '1.5'}
                  className="transition-all duration-200"
                />

                {/* Inner label */}
                <text x="0" y="-6" textAnchor="middle" fill={era.color} fontSize="11" fontWeight="bold">
                  {era.year}
                </text>
                <text x="0" y="8" textAnchor="middle" fill="var(--text-muted)" fontSize="7.5">
                  {idx === 0 ? 'GOPALAN' : idx === 1 ? 'MANEKA' : 'PUTTASWAMY'}
                </text>

                {/* Top Title */}
                <text x="0" y="-52" textAnchor="middle" fill={isSelected ? 'var(--text-primary)' : 'var(--text-muted)'} fontSize="10" fontWeight="bold">
                  {era.eraName.toUpperCase()}
                </text>
                <text x="0" y="-66" textAnchor="middle" fill="var(--text-secondary)" fontSize="8.5">
                  {era.period}
                </text>

                {/* Bottom status */}
                <text x="0" y="56" textAnchor="middle" fill={isSelected ? era.color : 'var(--text-muted)'} fontSize="8" fontWeight="600">
                  {isSelected ? '● ACTIVE EPOCH' : 'CLICK TO INSPECT'}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Selected Era Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: activeEra.color }} />
            <h4 className="text-base font-bold text-[var(--text-primary)]">
              {activeEra.eraName} ({activeEra.period})
            </h4>
          </div>

          <p className="text-xs font-mono text-[var(--accent)] bg-[var(--bg-base)] p-2.5 rounded border border-[var(--border-subtle)]">
            Leading Precedent: {activeEra.leadCase} ({activeEra.year})
          </p>

          <div className="flex flex-col gap-1 mt-1">
            <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
              Constitutional Doctrine
            </span>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              {activeEra.doctrine}
            </p>
          </div>

          <div className="flex flex-col gap-1 mt-1">
            <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
              Judicial Reading
            </span>
            <p className="text-xs text-[var(--text-primary)] leading-relaxed bg-[var(--bg-base)] p-3 rounded-lg border border-[var(--border-subtle)]">
              {activeEra.interpretation}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t md:border-t-0 md:border-l border-[var(--border-subtle)] md:pl-6">
          <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">
            Rights Emanating from this Doctrine
          </span>
          <div className="flex flex-col gap-2">
            {activeEra.rightsRecognized.map((right, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2 rounded bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)]">
                <Check className="w-3.5 h-3.5 text-[var(--emerald)] shrink-0" />
                <span>{right}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
