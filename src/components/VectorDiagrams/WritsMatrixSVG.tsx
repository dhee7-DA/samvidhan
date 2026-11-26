import React, { useState } from 'react';
import { Shield, Info, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

interface WritDetail {
  id: string;
  name: string;
  latinMeaning: string;
  targetEntity: string;
  primaryPurpose: string;
  whoCanFile: string;
  keyExceptions: string[];
  landmarkCase: string;
  color: string;
  position: { x: number; y: number };
}

const WRITS: WritDetail[] = [
  {
    id: 'habeas-corpus',
    name: 'Habeas Corpus',
    latinMeaning: 'To produce the body',
    targetEntity: 'Public authorities AND private individuals',
    primaryPurpose: 'Release a person detained unlawfully or without legal justification.',
    whoCanFile: 'Detained person, relative, friend, or any public-spirited individual (Relaxed Locus Standi).',
    keyExceptions: [
      'Detention is in accordance with law or lawful sentence of court.',
      'Detention is by a competent court having jurisdiction.',
      'Proceedings are for contempt of a court or legislature.'
    ],
    landmarkCase: 'Sunil Batra v. Delhi Administration (1980) & ADM Jabalpur (corrected post-1978)',
    color: '#38bdf8',
    position: { x: 50, y: 70 }
  },
  {
    id: 'mandamus',
    name: 'Mandamus',
    latinMeaning: 'We command',
    targetEntity: 'Public officials, statutory bodies, subordinate courts, or government',
    primaryPurpose: 'Compel performance of a mandatory statutory or public duty that has been refused.',
    whoCanFile: 'Person having a legal right to enforce the performance of the statutory duty.',
    keyExceptions: [
      'Cannot be issued against President of India or State Governors (Art 361).',
      'Cannot enforce purely contractual private obligations.',
      'Cannot compel exercise of discretionary power where duty is not mandatory.'
    ],
    landmarkCase: 'Gujarat State Financial Corporation v. Lotus Hotels (1983)',
    color: '#10b981',
    position: { x: 230, y: 70 }
  },
  {
    id: 'prohibition',
    name: 'Prohibition',
    latinMeaning: 'To forbid / stay',
    targetEntity: 'Subordinate judicial and quasi-judicial tribunals',
    primaryPurpose: 'Prevent a lower court or tribunal from exceeding or usurping jurisdiction before final order.',
    whoCanFile: 'Litigant or affected party before the lower court or tribunal.',
    keyExceptions: [
      'Available ONLY against judicial and quasi-judicial authorities.',
      'Not available against administrative authorities, legislative bodies, or private persons.',
      'Cannot be issued once final order is rendered (Certiorari is appropriate then).'
    ],
    landmarkCase: 'East India Commercial Co. v. Collector of Customs (1962)',
    color: '#f59e0b',
    position: { x: 410, y: 70 }
  },
  {
    id: 'certiorari',
    name: 'Certiorari',
    latinMeaning: 'To be certified',
    targetEntity: 'Judicial, quasi-judicial, and administrative authorities acting judicially',
    primaryPurpose: 'Quash an illegal order passed without jurisdiction, in excess of jurisdiction, or in violation of natural justice.',
    whoCanFile: 'Aggrieved party whose legal rights are infringed by the invalid order.',
    keyExceptions: [
      'Not available against purely legislative acts.',
      'Not available against private bodies or individuals.',
      'Does not operate as an appeal on merits; strictly corrects errors of jurisdiction or law apparent on face of record.'
    ],
    landmarkCase: 'Province of Bombay v. Khushaldas Advani (1950) & Radhey Shyam (2015)',
    color: '#a855f7',
    position: { x: 590, y: 70 }
  },
  {
    id: 'quo-warranto',
    name: 'Quo-Warranto',
    latinMeaning: 'By what authority',
    targetEntity: 'Holder of a public office of substantive character created by constitution or statute',
    primaryPurpose: 'Inquire into the legal legality of claim by a person to a public office and oust the usurper.',
    whoCanFile: 'ANY citizen (NO personal grievance or locus standi required; acts as a relator).',
    keyExceptions: [
      'Cannot be issued against private office or ministerial staff posts.',
      'Office must be public, substantive, and created by constitution or statute.',
      'Cannot be issued if person has valid title or subsequently cures defect.'
    ],
    landmarkCase: 'University of Mysore v. C.D. Govinda Rao (1965)',
    color: '#f43f5e',
    position: { x: 770, y: 70 }
  }
];

export const WritsMatrixSVG: React.FC = () => {
  const [selectedWrit, setSelectedWrit] = useState<WritDetail>(WRITS[0]);

  return (
    <div className="w-full flex flex-col gap-6 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Shield className="w-5 h-5 text-[var(--accent)]" />
            <h3 className="text-xl font-semibold text-[var(--text-primary)]">The 5 Constitutional Writs Matrix</h3>
            <span className="text-xs px-2 py-0.5 rounded font-mono bg-[var(--badge-bg)] text-[var(--text-secondary)] border border-[var(--badge-border)]">
              Art 32 & 226
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            Interactive comparative blueprint of the extraordinary prerogative remedies under Indian Constitutional Law.
          </p>
        </div>
        <div className="text-xs font-mono text-[var(--text-muted)] flex items-center gap-1.5 bg-[var(--bg-base)] px-3 py-1.5 rounded-lg border border-[var(--border-subtle)]">
          <Info className="w-3.5 h-3.5" />
          Click any writ node below to inspect legal mechanics
        </div>
      </div>

      {/* SVG Vector Canvas */}
      <div className="w-full overflow-x-auto pb-2">
        <svg
          viewBox="0 0 980 340"
          className="w-full h-auto select-none font-mono"
        >
          <defs>
            {/* Grid Pattern */}
            <pattern id="dot-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="var(--border-subtle)" opacity="0.6" />
            </pattern>
            {/* Linear rail gradient */}
            <linearGradient id="railGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Background Grid */}
          <rect width="980" height="340" fill="url(#dot-grid)" rx="12" />

          {/* Top Axis: Supreme Court (Art 32) & High Court (Art 226) */}
          <g transform="translate(490, 28)">
            <rect
              x="-290"
              y="-16"
              width="580"
              height="32"
              rx="6"
              fill="var(--bg-surface-elevated)"
              stroke="var(--border-strong)"
              strokeWidth="1.2"
            />
            <text
              textAnchor="middle"
              y="5"
              fill="var(--text-primary)"
              fontSize="10.5"
              fontWeight="600"
              letterSpacing="0.5"
            >
              PREROGATIVE WRITS • SUPREME COURT (ART 32) & HIGH COURTS (ART 226)
            </text>
          </g>

          {/* Connecting Backbone Rail */}
          <path
            d="M 130 44 L 130 55 Q 130 65 140 65 L 840 65 Q 850 65 850 55 L 850 44"
            fill="none"
            stroke="url(#railGrad)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          {/* 5 Writ Interactive Cards */}
          {WRITS.map((writ) => {
            const isSelected = selectedWrit.id === writ.id;
            return (
              <g
                key={writ.id}
                className="vector-node cursor-pointer"
                onClick={() => setSelectedWrit(writ)}
                transform={`translate(${writ.position.x}, ${writ.position.y})`}
              >
                {/* Connector tick from rail */}
                <line
                  x1="80"
                  y1="-5"
                  x2="80"
                  y2="0"
                  stroke={isSelected ? writ.color : 'var(--border-strong)'}
                  strokeWidth={isSelected ? '2' : '1'}
                />

                {/* Card Surface */}
                <rect
                  x="0"
                  y="0"
                  width="160"
                  height="220"
                  rx="10"
                  fill={isSelected ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
                  stroke={isSelected ? writ.color : 'var(--border-subtle)'}
                  strokeWidth={isSelected ? '2' : '1'}
                  className="transition-all duration-200"
                />

                {/* Glow ring when selected */}
                {isSelected && (
                  <rect
                    x="-2"
                    y="-2"
                    width="164"
                    height="224"
                    rx="12"
                    fill="none"
                    stroke={writ.color}
                    strokeWidth="1"
                    opacity="0.3"
                  />
                )}

                {/* Top Badge */}
                <rect
                  x="12"
                  y="12"
                  width="136"
                  height="22"
                  rx="4"
                  fill={isSelected ? `${writ.color}22` : 'var(--badge-bg)'}
                  stroke={isSelected ? writ.color : 'var(--badge-border)'}
                  strokeWidth="0.8"
                />
                <text
                  x="80"
                  y="27"
                  textAnchor="middle"
                  fill={isSelected ? writ.color : 'var(--text-primary)'}
                  fontSize="11"
                  fontWeight="bold"
                >
                  {writ.name}
                </text>

                {/* Latin meaning pill */}
                <text
                  x="80"
                  y="52"
                  textAnchor="middle"
                  fill="var(--text-muted)"
                  fontSize="8"
                  fontStyle="italic"
                >
                  "{writ.latinMeaning}"
                </text>

                <line x1="16" y1="62" x2="144" y2="62" stroke="var(--border-subtle)" strokeWidth="0.8" />

                {/* Scope Label */}
                <text x="16" y="80" fill="var(--text-secondary)" fontSize="9" fontWeight="600">
                  TARGET SCOPE:
                </text>
                <text x="16" y="96" fill="var(--text-primary)" fontSize="9.5">
                  {writ.id === 'habeas-corpus'
                    ? 'State & Private'
                    : writ.id === 'mandamus'
                    ? 'Public / Statutory'
                    : writ.id === 'prohibition'
                    ? 'Judicial (Pending)'
                    : writ.id === 'certiorari'
                    ? 'Quashing Orders'
                    : 'Usurped Offices'}
                </text>

                {/* Locus Standi badge */}
                <text x="16" y="130" fill="var(--text-secondary)" fontSize="9" fontWeight="600">
                  LOCUS STANDI:
                </text>
                <rect
                  x="16"
                  y="138"
                  width="128"
                  height="20"
                  rx="4"
                  fill="var(--bg-base)"
                  stroke="var(--border-subtle)"
                  strokeWidth="0.8"
                />
                <text
                  x="80"
                  y="152"
                  textAnchor="middle"
                  fill={writ.id === 'quo-warranto' ? '#10b981' : 'var(--text-primary)'}
                  fontSize="8.5"
                  fontWeight={writ.id === 'quo-warranto' ? 'bold' : 'normal'}
                >
                  {writ.id === 'quo-warranto'
                    ? 'ANY CITIZEN'
                    : writ.id === 'habeas-corpus'
                    ? 'Relaxed / Friend'
                    : 'Aggrieved Party'}
                </text>

                {/* Action status pill */}
                <rect
                  x="20"
                  y="180"
                  width="120"
                  height="24"
                  rx="6"
                  fill={isSelected ? writ.color : 'transparent'}
                  stroke={isSelected ? 'transparent' : 'var(--border-strong)'}
                  strokeWidth="1"
                />
                <text
                  x="80"
                  y="196"
                  textAnchor="middle"
                  fill={isSelected ? '#09090b' : 'var(--text-secondary)'}
                  fontSize="8"
                  fontWeight="600"
                >
                  {isSelected ? 'INSPECTING' : 'VIEW DETAILS'}
                </text>
              </g>
            );
          })}

          {/* Bottom legend line */}
          <g transform="translate(490, 315)">
            <text textAnchor="middle" fill="var(--text-muted)" fontSize="10">
              * Article 32 cannot be suspended except under Art 359 (Post-1978: Art 20 & 21 never suspendable) | Art 226 has wider reach (enforcing statutory rights)
            </text>
          </g>
        </svg>
      </div>

      {/* Selected Writ In-Depth Inspector Panel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] animate-fadeIn">
        {/* Left Column: Core Identity */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span
              className="w-3.5 h-3.5 rounded-full"
              style={{ backgroundColor: selectedWrit.color }}
            />
            <h4 className="text-lg font-bold text-[var(--text-primary)]">
              {selectedWrit.name}
            </h4>
            <span className="text-xs font-mono text-[var(--text-muted)] italic">
              ({selectedWrit.latinMeaning})
            </span>
          </div>

          <div className="flex flex-col gap-1.5 mt-1">
            <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
              Target Entity
            </span>
            <p className="text-sm text-[var(--text-primary)] leading-relaxed">
              {selectedWrit.targetEntity}
            </p>
          </div>

          <div className="flex flex-col gap-1.5 mt-2">
            <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
              Primary Purpose
            </span>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {selectedWrit.primaryPurpose}
            </p>
          </div>
        </div>

        {/* Middle Column: Locus Standi & Landmark Jurisprudence */}
        <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-l border-[var(--border-subtle)] md:pl-6">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--emerald)]" />
              <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
                Who Can File (Locus Standi)
              </span>
            </div>
            <p className="text-sm text-[var(--text-primary)] leading-relaxed">
              {selectedWrit.whoCanFile}
            </p>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
              Landmark Judicial Precedent
            </span>
            <p className="text-xs font-mono text-[var(--accent)] bg-[var(--bg-base)] p-2 rounded border border-[var(--border-subtle)]">
              {selectedWrit.landmarkCase}
            </p>
          </div>
        </div>

        {/* Right Column: Key Exceptions & Limitations */}
        <div className="flex flex-col gap-2 border-t md:border-t-0 md:border-l border-[var(--border-subtle)] md:pl-6">
          <div className="flex items-center gap-2 mb-1">
            <AlertTriangle className="w-4 h-4 text-[var(--crimson)]" />
            <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
              Constitutional Exceptions
            </span>
          </div>
          <ul className="flex flex-col gap-2">
            {selectedWrit.keyExceptions.map((exc, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                <ArrowRight className="w-3.5 h-3.5 mt-0.5 text-[var(--text-muted)] shrink-0" />
                <span>{exc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
