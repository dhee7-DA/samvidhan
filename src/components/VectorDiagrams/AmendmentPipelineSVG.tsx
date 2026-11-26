import React, { useState } from 'react';
import { GitBranch, ShieldCheck, AlertOctagon, CheckCircle2 } from 'lucide-react';

interface AmendmentTrack {
  id: string;
  name: string;
  scope: string;
  votingFormula: string;
  stateRatification: string;
  typicalSubjects: string[];
  color: string;
}

const TRACKS: AmendmentTrack[] = [
  {
    id: 'track-1',
    name: 'Simple Majority of Parliament',
    scope: 'Non-Article 368 amendments (Ordinary legislative constituent power)',
    votingFormula: '> 50% of members present and voting in each House',
    stateRatification: 'Not required',
    typicalSubjects: [
      'Admission or formation of new States & boundary changes (Articles 2, 3, 4)',
      'Abolition or creation of Legislative Councils in States (Article 169)',
      'Salaries and allowances under Second Schedule',
      'Quorum in Parliament and rules of procedure (Article 118)',
      'Citizenship acquisition & termination (Article 11)',
      'Use of official language in Parliament & 8th Schedule additions'
    ],
    color: '#10b981'
  },
  {
    id: 'track-2',
    name: 'Special Majority under Article 368(2)',
    scope: 'Core Constitutional Clauses (Rigid tier)',
    votingFormula: 'Absolute Majority of total membership (>50%) PLUS 2/3 of members present and voting in each House separately',
    stateRatification: 'Not required',
    typicalSubjects: [
      'Fundamental Rights (Part III Articles 12–35)',
      'Directive Principles of State Policy (Part IV Articles 36–51)',
      'Fundamental Duties (Part IV-A Article 51A)',
      'All other provisions not covered under Track 1 or Track 3'
    ],
    color: '#38bdf8'
  },
  {
    id: 'track-3',
    name: 'Special Majority + 50% State Ratification',
    scope: 'Entrenched Federal Architecture Provisions (Proviso to Article 368(2))',
    votingFormula: 'Special Majority in Parliament PLUS resolutions passed by at least half (50%) of State Legislative Assemblies by simple majority',
    stateRatification: 'MANDATORY (at least 14 of 28 States must ratify)',
    typicalSubjects: [
      'Election and manner of election of the President (Articles 54, 55)',
      'Extent of executive power of the Union and the States (Articles 73, 162)',
      'Supreme Court and High Courts jurisdiction (Part V Ch IV, Part VI Ch V, Art 241)',
      'Distribution of legislative powers (Seventh Schedule Lists I, II, III)',
      'Representation of States in Parliament (Fourth Schedule)',
      'The provisions of Article 368 itself'
    ],
    color: '#f59e0b'
  }
];

export const AmendmentPipelineSVG: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<AmendmentTrack>(TRACKS[1]);

  return (
    <div className="w-full flex flex-col gap-6 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <GitBranch className="w-5 h-5 text-[var(--accent)]" />
            <h3 className="text-xl font-semibold text-[var(--text-primary)]">Article 368 Constitutional Amendment Pipeline</h3>
            <span className="text-xs px-2 py-0.5 rounded font-mono bg-[var(--badge-bg)] text-[var(--text-secondary)] border border-[var(--badge-border)]">
              Rigidity vs Flexibility Equilibrium
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            Three distinct tracks of amendment filtered through the Basic Structure Judicial Shield.
          </p>
        </div>
      </div>

      {/* SVG Pipeline Canvas */}
      <div className="w-full overflow-x-auto pb-2">
        <svg
          viewBox="0 0 960 360"
          className="w-full h-auto select-none font-mono"
        >
          <defs>
            <marker id="pipeArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="var(--text-secondary)" />
            </marker>
          </defs>

          {/* Left: Bill Introduction Box */}
          <g transform="translate(40, 120)">
            <rect x="0" y="0" width="140" height="120" rx="8" fill="var(--bg-surface-elevated)" stroke="var(--border-strong)" strokeWidth="1.5" />
            <text x="70" y="32" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontWeight="bold">BILL INTRODUCTION</text>
            <text x="70" y="52" textAnchor="middle" fill="var(--text-muted)" fontSize="8.5">Either Lok Sabha</text>
            <text x="70" y="65" textAnchor="middle" fill="var(--text-muted)" fontSize="8.5">or Rajya Sabha</text>
            <rect x="12" y="80" width="116" height="24" rx="4" fill="var(--bg-base)" stroke="var(--border-subtle)" />
            <text x="70" y="96" textAnchor="middle" fill="var(--accent)" fontSize="8" fontWeight="bold">NO JOINT SITTING (108)</text>
          </g>

          {/* Branching Channels */}
          <path d="M 180 180 L 220 180 Q 240 180 240 160 L 240 70 Q 240 50 260 50 L 300 50" fill="none" stroke="#10b981" strokeWidth="2" markerEnd="url(#pipeArrow)" />
          <path d="M 180 180 L 300 180" fill="none" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#pipeArrow)" />
          <path d="M 180 180 L 220 180 Q 240 180 240 200 L 240 290 Q 240 310 260 310 L 300 310" fill="none" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#pipeArrow)" />

          {/* Track 1 Node: Simple Majority */}
          <g
            className="vector-node cursor-pointer"
            onClick={() => setSelectedTrack(TRACKS[0])}
            transform="translate(300, 20)"
          >
            <rect
              x="0"
              y="0"
              width="240"
              height="60"
              rx="6"
              fill={selectedTrack.id === 'track-1' ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
              stroke="#10b981"
              strokeWidth={selectedTrack.id === 'track-1' ? '2.5' : '1'}
            />
            <text x="14" y="24" fill="#10b981" fontSize="10" fontWeight="bold">TRACK 01 : SIMPLE MAJORITY</text>
            <text x="14" y="42" fill="var(--text-secondary)" fontSize="8.5">Outside Art 368 • State formation, quorum</text>
          </g>

          {/* Track 2 Node: Special Majority Art 368(2) */}
          <g
            className="vector-node cursor-pointer"
            onClick={() => setSelectedTrack(TRACKS[1])}
            transform="translate(300, 150)"
          >
            <rect
              x="0"
              y="0"
              width="240"
              height="60"
              rx="6"
              fill={selectedTrack.id === 'track-2' ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
              stroke="#38bdf8"
              strokeWidth={selectedTrack.id === 'track-2' ? '2.5' : '1'}
            />
            <text x="14" y="24" fill="#38bdf8" fontSize="10" fontWeight="bold">TRACK 02 : SPECIAL MAJORITY</text>
            <text x="14" y="42" fill="var(--text-secondary)" fontSize="8">&gt;50% Total House + 2/3 Present &amp; Voting</text>
          </g>

          {/* Track 3 Node: Special + State Ratification */}
          <g
            className="vector-node cursor-pointer"
            onClick={() => setSelectedTrack(TRACKS[2])}
            transform="translate(300, 280)"
          >
            <rect
              x="0"
              y="0"
              width="240"
              height="60"
              rx="6"
              fill={selectedTrack.id === 'track-3' ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
              stroke="#f59e0b"
              strokeWidth={selectedTrack.id === 'track-3' ? '2.5' : '1'}
            />
            <text x="14" y="24" fill="#f59e0b" fontSize="10" fontWeight="bold">TRACK 03 : FEDERAL ENTRENCHMENT</text>
            <text x="14" y="42" fill="var(--text-secondary)" fontSize="8.5">Special Majority + ≥ 50% State Assemblies</text>
          </g>

          {/* Convergence towards Presidential Assent */}
          <path d="M 540 50 L 590 50 Q 610 50 610 80 L 610 180" fill="none" stroke="var(--border-strong)" strokeWidth="1.5" />
          <path d="M 540 180 L 630 180" fill="none" stroke="var(--border-strong)" strokeWidth="1.5" />
          <path d="M 540 310 L 590 310 Q 610 310 610 280 L 610 180" fill="none" stroke="var(--border-strong)" strokeWidth="1.5" />

          {/* Presidential Assent Box */}
          <g transform="translate(630, 140)">
            <rect x="0" y="0" width="120" height="80" rx="8" fill="var(--bg-surface-elevated)" stroke="var(--border-strong)" strokeWidth="1.5" />
            <text x="60" y="32" textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="bold">PRESIDENTIAL</text>
            <text x="60" y="46" textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="bold">ASSENT</text>
            <text x="60" y="64" textAnchor="middle" fill="var(--gold)" fontSize="7.5" fontWeight="bold">MANDATORY (24th Amd)</text>
          </g>

          <line x1="750" y1="180" x2="790" y2="180" stroke="var(--border-strong)" strokeWidth="2" markerEnd="url(#pipeArrow)" />

          {/* Basic Structure Judicial Shield Filter */}
          <g transform="translate(790, 90)">
            <rect
              x="0"
              y="0"
              width="140"
              height="180"
              rx="10"
              fill="var(--bg-base)"
              stroke="var(--crimson)"
              strokeWidth="2"
              strokeDasharray="4 2"
            />
            <rect x="12" y="14" width="116" height="24" rx="4" fill="rgba(225, 29, 72, 0.15)" stroke="var(--crimson)" strokeWidth="1" />
            <text x="70" y="30" textAnchor="middle" fill="var(--crimson)" fontSize="8.5" fontWeight="bold">JUDICIAL SHIELD</text>

            <text x="70" y="60" textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="bold">BASIC STRUCTURE</text>
            <text x="70" y="74" textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="bold">DOCTRINE</text>
            <text x="70" y="90" textAnchor="middle" fill="var(--text-muted)" fontSize="8">Kesavananda (1973)</text>

            <line x1="20" y1="102" x2="120" y2="102" stroke="var(--border-subtle)" />

            <text x="20" y="120" fill="var(--text-secondary)" fontSize="7.5">✓ Rule of Law</text>
            <text x="20" y="134" fill="var(--text-secondary)" fontSize="7.5">✓ Judicial Review</text>
            <text x="20" y="148" fill="var(--text-secondary)" fontSize="7.5">✓ Federal Balance</text>
            <text x="20" y="162" fill="var(--text-secondary)" fontSize="7.5">✓ Free Elections</text>
          </g>
        </svg>
      </div>

      {/* Selected Track Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: selectedTrack.color }} />
            <h4 className="text-base font-bold text-[var(--text-primary)]">{selectedTrack.name}</h4>
          </div>
          <span className="text-xs font-mono text-[var(--text-secondary)]">{selectedTrack.scope}</span>
          <div className="mt-2 flex flex-col gap-1">
            <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Required Majority Formula</span>
            <p className="text-xs font-mono text-[var(--accent)] bg-[var(--bg-base)] p-2.5 rounded border border-[var(--border-subtle)]">
              {selectedTrack.votingFormula}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t md:border-t-0 md:border-l border-[var(--border-subtle)] md:pl-6">
          <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">State Assembly Ratification</span>
          <p className="text-sm text-[var(--text-primary)] font-medium">
            {selectedTrack.stateRatification}
          </p>

          <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mt-2">Constitutional Rule</span>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            Unlike ordinary bills where a joint sitting under Article 108 exists to resolve deadlocks between the Houses, there is <strong>NO provision for a Joint Sitting</strong> for a Constitutional Amendment Bill.
          </p>
        </div>

        <div className="flex flex-col gap-2 border-t md:border-t-0 md:border-l border-[var(--border-subtle)] md:pl-6">
          <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">
            Typical Subject Matters Covered
          </span>
          <ul className="flex flex-col gap-1.5">
            {selectedTrack.typicalSubjects.map((sub, idx) => (
              <li key={idx} className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-[var(--emerald)] shrink-0" />
                <span>{sub}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
