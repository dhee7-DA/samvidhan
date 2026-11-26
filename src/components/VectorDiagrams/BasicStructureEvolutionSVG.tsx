import React, { useState } from 'react';
import { History, Shield, ChevronRight, Award } from 'lucide-react';

interface TimelineStation {
  year: number;
  caseOrAmd: string;
  shortName: string;
  bench: string;
  ruling: string;
  impactOnAmendingPower: 'Supreme' | 'Restricted' | 'Absolute Void' | 'Equilibrium';
  significance: string;
  color: string;
}

const STATIONS: TimelineStation[] = [
  {
    year: 1951,
    caseOrAmd: 'Shankari Prasad v. Union of India',
    shortName: 'Shankari Prasad',
    bench: '5-Judge Bench',
    ruling: 'Parliament can amend any part of the Constitution including Fundamental Rights. "Law" in Art 13 means ordinary law, not constitutional amendment under Art 368.',
    impactOnAmendingPower: 'Supreme',
    significance: 'First judicial interpretation confirming broad constituent amending power.',
    color: '#10b981'
  },
  {
    year: 1965,
    caseOrAmd: 'Sajjan Singh v. State of Rajasthan',
    shortName: 'Sajjan Singh',
    bench: '5-Judge Bench',
    ruling: 'Upheld Shankari Prasad. However, Justice Mudholkar and Justice Hidayatullah in separate opinions queried whether the "basic features" could ever be altered.',
    impactOnAmendingPower: 'Supreme',
    significance: 'First embryonic judicial mention of "basic features" in Indian jurisprudence.',
    color: '#38bdf8'
  },
  {
    year: 1967,
    caseOrAmd: 'I.C. Golak Nath v. State of Punjab',
    shortName: 'Golak Nath',
    bench: '11-Judge Bench (6:5 Verdict)',
    ruling: 'Overruled Shankari Prasad. Parliament CANNOT take away or abridge any Fundamental Right. "Law" in Article 13 includes constitutional amendments.',
    impactOnAmendingPower: 'Absolute Void',
    significance: 'Invoked doctrine of prospective overruling; triggered major confrontation between Parliament and Judiciary.',
    color: '#ef4444'
  },
  {
    year: 1971,
    caseOrAmd: '24th Constitutional Amendment Act',
    shortName: '24th Amend.',
    bench: 'Parliamentary Enactment',
    ruling: 'Enacted to overturn Golak Nath. Inserted Art 13(4) and Art 368(3) clarifying that nothing in Art 13 applies to an amendment under Art 368.',
    impactOnAmendingPower: 'Supreme',
    significance: 'Asserted complete parliamentary supremacy over the Constitution.',
    color: '#f59e0b'
  },
  {
    year: 1973,
    caseOrAmd: 'Kesavananda Bharati v. State of Kerala',
    shortName: 'Kesavananda',
    bench: '13-Judge Bench (7:6 Verdict)',
    ruling: 'Overruled Golak Nath and upheld 24th Amendment, but established that Article 368 does not confer the power to alter or destroy the "Basic Structure".',
    impactOnAmendingPower: 'Equilibrium',
    significance: 'The greatest constitutional ruling in Indian legal history; birth of the Basic Structure Doctrine.',
    color: '#a855f7'
  },
  {
    year: 1975,
    caseOrAmd: 'Indira Nehru Gandhi v. Raj Narain',
    shortName: 'Indira Gandhi',
    bench: '5-Judge Bench',
    ruling: 'Struck down Article 329A(4) inserted by 39th Amendment which placed prime ministerial election disputes beyond judicial review.',
    impactOnAmendingPower: 'Equilibrium',
    significance: 'First direct judicial application of Basic Structure to strike down a constitutional amendment clause.',
    color: '#6366f1'
  },
  {
    year: 1980,
    caseOrAmd: 'Minerva Mills Ltd. v. Union of India',
    shortName: 'Minerva Mills',
    bench: '5-Judge Bench',
    ruling: 'Struck down Sec 4 & 55 of 42nd Amendment. Limited amending power is itself basic structure; balance between Part III and Part IV is inviolable.',
    impactOnAmendingPower: 'Equilibrium',
    significance: 'Neutralized the 42nd Amendment attempt to grant Parliament unlimited amending authority.',
    color: '#ec4899'
  },
  {
    year: 2007,
    caseOrAmd: 'I.R. Coelho v. State of Tamil Nadu',
    shortName: 'I.R. Coelho',
    bench: '9-Judge Bench (Unanimous)',
    ruling: 'All amendments and laws inserted into the Ninth Schedule on or after April 24, 1973 are subject to judicial review against the Basic Structure doctrine.',
    impactOnAmendingPower: 'Equilibrium',
    significance: 'Closed the Ninth Schedule vault loophole, preventing legislative bypass of fundamental rights.',
    color: '#14b8a6'
  }
];

export const BasicStructureEvolutionSVG: React.FC = () => {
  const [activeStation, setActiveStation] = useState<TimelineStation>(STATIONS[4]); // Kesavananda default

  return (
    <div className="w-full flex flex-col gap-6 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <History className="w-5 h-5 text-[var(--accent)]" />
            <h3 className="text-xl font-semibold text-[var(--text-primary)]">Basic Structure Evolution Chronology (1951 – 2007)</h3>
            <span className="text-xs px-2 py-0.5 rounded font-mono bg-[var(--badge-bg)] text-[var(--text-secondary)] border border-[var(--badge-border)]">
              From Shankari Prasad to I.R. Coelho
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            The historic 56-year jurisprudential struggle between Parliamentary Sovereignty and Constitutional Supremacy.
          </p>
        </div>
      </div>

      {/* SVG Timeline Track Canvas */}
      <div className="w-full overflow-x-auto pb-2">
        <svg
          viewBox="0 0 960 180"
          className="w-full h-auto select-none font-mono"
        >
          {/* Main Chronology Rail */}
          <line x1="50" y1="90" x2="880" y2="90" stroke="var(--border-strong)" strokeWidth="3" />

          {/* Timeline Nodes */}
          {STATIONS.map((station, idx) => {
            const x = 60 + idx * 115;
            const isSelected = activeStation.year === station.year;
            return (
              <g
                key={station.year}
                className="vector-node cursor-pointer"
                onClick={() => setActiveStation(station)}
                transform={`translate(${x}, 90)`}
              >
                {/* Vertical tick */}
                <line
                  x1="0"
                  y1="-18"
                  x2="0"
                  y2="18"
                  stroke={isSelected ? station.color : 'var(--border-subtle)'}
                  strokeWidth={isSelected ? '2' : '1'}
                />

                {/* Node Circle */}
                <circle
                  cx="0"
                  cy="0"
                  r={isSelected ? 16 : 10}
                  fill={isSelected ? station.color : 'var(--bg-surface-elevated)'}
                  stroke={station.color}
                  strokeWidth="2"
                  className="transition-all duration-150"
                />

                {/* Inner dot */}
                <circle
                  cx="0"
                  cy="0"
                  r="3.5"
                  fill={isSelected ? '#09090b' : station.color}
                />

                {/* Year Label */}
                <text
                  x="0"
                  y="-26"
                  textAnchor="middle"
                  fill={isSelected ? station.color : 'var(--text-primary)'}
                  fontSize="10"
                  fontWeight="bold"
                >
                  {station.year}
                </text>

                {/* Short Case Name */}
                <text
                  x="0"
                  y="34"
                  textAnchor="middle"
                  fill={isSelected ? 'var(--text-primary)' : 'var(--text-muted)'}
                  fontSize="8"
                  fontWeight={isSelected ? 'bold' : 'normal'}
                >
                  {station.shortName}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Selected Station Inspector */}
      <div className="flex flex-col md:flex-row gap-6 p-5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: activeStation.color }} />
            <h4 className="text-base font-bold text-[var(--text-primary)]">
              {activeStation.year} : {activeStation.caseOrAmd}
            </h4>
            <span className="text-xs font-mono text-[var(--text-muted)]">
              ({activeStation.bench})
            </span>
          </div>

          <p className="text-sm text-[var(--text-primary)] leading-relaxed">
            {activeStation.ruling}
          </p>

          <div className="mt-1 flex items-center gap-2 text-xs font-mono text-[var(--accent)] bg-[var(--bg-base)] p-2.5 rounded border border-[var(--border-subtle)]">
            <Award className="w-4 h-4 shrink-0 text-[var(--gold)]" />
            <span>Significance: {activeStation.significance}</span>
          </div>
        </div>

        <div className="md:w-72 flex flex-col gap-2 border-t md:border-t-0 md:border-l border-[var(--border-subtle)] md:pl-6">
          <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
            Amending Power Status
          </span>
          <div className="p-3 rounded bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col gap-1">
            <span className="text-sm font-bold" style={{ color: activeStation.color }}>
              {activeStation.impactOnAmendingPower.toUpperCase()}
            </span>
            <span className="text-xs text-[var(--text-muted)]">
              {activeStation.impactOnAmendingPower === 'Equilibrium'
                ? 'Plenary power balanced by the Basic Structure Doctrine'
                : activeStation.impactOnAmendingPower === 'Absolute Void'
                ? 'Judicial ban on diluting Part III'
                : 'Unfettered constituent legislative power'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
