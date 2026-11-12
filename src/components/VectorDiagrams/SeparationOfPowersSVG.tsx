import React, { useState } from 'react';
import { Scale, RefreshCw, Check, ArrowRight, ShieldAlert } from 'lucide-react';

interface CheckVector {
  id: string;
  source: string;
  target: string;
  mechanism: string;
  articles: string;
  description: string;
  landmarkCase?: string;
  color: string;
}

const CHECK_VECTORS: CheckVector[] = [
  {
    id: 'jud-to-leg',
    source: 'Judiciary',
    target: 'Legislature',
    mechanism: 'Judicial Review & Basic Structure Invalidation',
    articles: 'Articles 13, 32, 226, 368',
    description: 'Supreme Court and High Courts can strike down parliamentary or state legislation if it violates Fundamental Rights (Art 13) or emasculates the Basic Structure of the Constitution.',
    landmarkCase: 'Kesavananda Bharati (1973) & I.R. Coelho (2007)',
    color: '#38bdf8'
  },
  {
    id: 'jud-to-exec',
    source: 'Judiciary',
    target: 'Executive',
    mechanism: 'Prerogative Writs & Wednesbury Unreasonableness',
    articles: 'Articles 32, 226, 136',
    description: 'Courts issue extraordinary writs against illegal executive detention (Habeas Corpus), arbitrary administrative actions, abuse of power, or mala fide executive orders.',
    landmarkCase: 'Maneka Gandhi (1978) & S.R. Bommai (1994)',
    color: '#10b981'
  },
  {
    id: 'leg-to-exec',
    source: 'Legislature',
    target: 'Executive',
    mechanism: 'Collective Responsibility & Financial Control',
    articles: 'Articles 75(3), 112, 114, 61',
    description: 'Council of Ministers must maintain majority confidence in the Lok Sabha. Parliament exercises control via No-Confidence motions, Question Hour, PAC audit, and Presidential Impeachment (Art 61).',
    landmarkCase: 'Shamsher Singh v. State of Punjab (1974)',
    color: '#f59e0b'
  },
  {
    id: 'leg-to-jud',
    source: 'Legislature',
    target: 'Judiciary',
    mechanism: 'Impeachment Address & Regulating Court Strength',
    articles: 'Articles 124(4), 124(5), 217',
    description: 'Judges can be removed only by an address of Parliament passed by special majority in both houses on grounds of proved misbehavior or incapacity (Judges Inquiry Act 1968).',
    landmarkCase: 'Sub-Committee on Judicial Accountability v. Union of India (1991)',
    color: '#a855f7'
  },
  {
    id: 'exec-to-leg',
    source: 'Executive',
    target: 'Legislature',
    mechanism: 'Presidential Assent, Veto & Ordinances',
    articles: 'Articles 85, 111, 123',
    description: 'President summons and prorogues parliament (Art 85), gives or withholds assent to bills (Art 111), and promulgates urgent temporary ordinances when parliament is not in session (Art 123).',
    landmarkCase: 'D.C. Wadhwa v. State of Bihar (1987)',
    color: '#f43f5e'
  },
  {
    id: 'exec-to-jud',
    source: 'Executive',
    target: 'Judiciary',
    mechanism: 'Warrant of Appointment & Pardoning Powers',
    articles: 'Articles 124, 217, 72',
    description: 'President issues formal appointment warrants for SC/HC judges upon Collegium consultation, and holds autonomous executive clemency/pardoning power under Article 72.',
    landmarkCase: 'Kehar Singh v. Union of India (1989)',
    color: '#6366f1'
  }
];

export const SeparationOfPowersSVG: React.FC = () => {
  const [selectedVector, setSelectedVector] = useState<CheckVector>(CHECK_VECTORS[0]);

  return (
    <div className="w-full flex flex-col gap-6 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Scale className="w-5 h-5 text-[var(--accent)]" />
            <h3 className="text-xl font-semibold text-[var(--text-primary)]">Separation of Powers & Checks and Balances</h3>
            <span className="text-xs px-2 py-0.5 rounded font-mono bg-[var(--badge-bg)] text-[var(--text-secondary)] border border-[var(--badge-border)]">
              Article 50 DPSP & Basic Structure
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            India adopts a differentiated system of checks and balances rather than rigid Montesquieu separation.
          </p>
        </div>
      </div>

      {/* SVG Triangular Vectors Canvas */}
      <div className="w-full overflow-x-auto pb-2">
        <svg
          viewBox="0 0 940 380"
          className="w-full min-w-[700px] h-auto select-none font-mono"
        >
          <defs>
            <marker id="checkArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="var(--text-secondary)" />
            </marker>
          </defs>

          {/* Central Connecting Equilibrium Disc */}
          <circle cx="470" cy="190" r="45" fill="var(--bg-base)" stroke="var(--border-strong)" strokeWidth="1.5" strokeDasharray="4 4" />
          <text x="470" y="185" textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="bold">CONSTITUTIONAL</text>
          <text x="470" y="198" textAnchor="middle" fill="var(--accent)" fontSize="9" fontWeight="bold">SUPREMACY</text>

          {/* Vertex 1: TOP - JUDICIARY */}
          <g transform="translate(470, 50)">
            <circle cx="0" cy="0" r="48" fill="var(--bg-surface-elevated)" stroke="#38bdf8" strokeWidth="2" />
            <text x="0" y="-8" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="bold">JUDICIARY</text>
            <text x="0" y="8" textAnchor="middle" fill="#38bdf8" fontSize="9">SUPREME COURT</text>
            <text x="0" y="20" textAnchor="middle" fill="var(--text-muted)" fontSize="8">& High Courts</text>
          </g>

          {/* Vertex 2: BOTTOM LEFT - LEGISLATURE */}
          <g transform="translate(180, 310)">
            <circle cx="0" cy="0" r="48" fill="var(--bg-surface-elevated)" stroke="#f59e0b" strokeWidth="2" />
            <text x="0" y="-8" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="bold">LEGISLATURE</text>
            <text x="0" y="8" textAnchor="middle" fill="#f59e0b" fontSize="9">PARLIAMENT</text>
            <text x="0" y="20" textAnchor="middle" fill="var(--text-muted)" fontSize="8">Lok & Rajya Sabha</text>
          </g>

          {/* Vertex 3: BOTTOM RIGHT - EXECUTIVE */}
          <g transform="translate(760, 310)">
            <circle cx="0" cy="0" r="48" fill="var(--bg-surface-elevated)" stroke="#10b981" strokeWidth="2" />
            <text x="0" y="-8" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="bold">EXECUTIVE</text>
            <text x="0" y="8" textAnchor="middle" fill="#10b981" fontSize="9">PRESIDENT / PM</text>
            <text x="0" y="20" textAnchor="middle" fill="var(--text-muted)" fontSize="8">& Council of Ministers</text>
          </g>

          {/* Edge Vector Rails: Interactive Clickable Vector Rays */}
          {/* 1. Judiciary -> Legislature */}
          <path
            d="M 425 65 Q 260 140 215 265"
            fill="none"
            stroke={selectedVector.id === 'jud-to-leg' ? '#38bdf8' : 'var(--border-strong)'}
            strokeWidth={selectedVector.id === 'jud-to-leg' ? '3' : '1.5'}
            markerEnd="url(#checkArrow)"
            className="cursor-pointer transition-all duration-150"
            onClick={() => setSelectedVector(CHECK_VECTORS[0])}
          />
          <text x="290" y="130" fill="var(--text-muted)" fontSize="8.5" className="cursor-pointer" onClick={() => setSelectedVector(CHECK_VECTORS[0])}>
            [Art 13/32: Judicial Review]
          </text>

          {/* 2. Legislature -> Judiciary */}
          <path
            d="M 235 270 Q 300 170 435 90"
            fill="none"
            stroke={selectedVector.id === 'leg-to-jud' ? '#a855f7' : 'var(--border-strong)'}
            strokeWidth={selectedVector.id === 'leg-to-jud' ? '3' : '1.5'}
            strokeDasharray="4 4"
            className="cursor-pointer"
            onClick={() => setSelectedVector(CHECK_VECTORS[3])}
          />
          <text x="290" y="210" fill="var(--text-muted)" fontSize="8.5" className="cursor-pointer" onClick={() => setSelectedVector(CHECK_VECTORS[3])}>
            [Art 124(4): Impeachment]
          </text>

          {/* 3. Judiciary -> Executive */}
          <path
            d="M 515 65 Q 680 140 725 265"
            fill="none"
            stroke={selectedVector.id === 'jud-to-exec' ? '#10b981' : 'var(--border-strong)'}
            strokeWidth={selectedVector.id === 'jud-to-exec' ? '3' : '1.5'}
            markerEnd="url(#checkArrow)"
            className="cursor-pointer"
            onClick={() => setSelectedVector(CHECK_VECTORS[1])}
          />
          <text x="630" y="130" fill="var(--text-muted)" fontSize="8.5" className="cursor-pointer" onClick={() => setSelectedVector(CHECK_VECTORS[1])}>
            [Art 226/32: Writs & Orders]
          </text>

          {/* 4. Executive -> Judiciary */}
          <path
            d="M 705 270 Q 640 170 505 90"
            fill="none"
            stroke={selectedVector.id === 'exec-to-jud' ? '#6366f1' : 'var(--border-strong)'}
            strokeWidth={selectedVector.id === 'exec-to-jud' ? '3' : '1.5'}
            strokeDasharray="4 4"
            className="cursor-pointer"
            onClick={() => setSelectedVector(CHECK_VECTORS[5])}
          />
          <text x="630" y="210" fill="var(--text-muted)" fontSize="8.5" className="cursor-pointer" onClick={() => setSelectedVector(CHECK_VECTORS[5])}>
            [Art 124/217: Appointments]
          </text>

          {/* 5. Legislature <-> Executive Bottom Rails */}
          <line
            x1="240"
            y1="300"
            x2="700"
            y2="300"
            stroke={selectedVector.id === 'leg-to-exec' ? '#f59e0b' : 'var(--border-strong)'}
            strokeWidth={selectedVector.id === 'leg-to-exec' ? '3' : '1.5'}
            className="cursor-pointer"
            onClick={() => setSelectedVector(CHECK_VECTORS[2])}
          />
          <text x="470" y="290" textAnchor="middle" fill="var(--text-muted)" fontSize="8.5" className="cursor-pointer" onClick={() => setSelectedVector(CHECK_VECTORS[2])}>
            ← [Art 75(3): Collective Responsibility & No-Confidence] →
          </text>

          <line
            x1="240"
            y1="325"
            x2="700"
            y2="325"
            stroke={selectedVector.id === 'exec-to-leg' ? '#f43f5e' : 'var(--border-strong)'}
            strokeWidth={selectedVector.id === 'exec-to-leg' ? '3' : '1.5'}
            strokeDasharray="4 4"
            className="cursor-pointer"
            onClick={() => setSelectedVector(CHECK_VECTORS[4])}
          />
          <text x="470" y="342" textAnchor="middle" fill="var(--text-muted)" fontSize="8.5" className="cursor-pointer" onClick={() => setSelectedVector(CHECK_VECTORS[4])}>
            ← [Art 111: Presidential Veto / Art 123: Ordinances] →
          </text>
        </svg>
      </div>

      {/* Vector Details Inspector */}
      <div className="flex flex-col md:flex-row gap-6 p-5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: selectedVector.color }} />
            <h4 className="text-lg font-bold text-[var(--text-primary)]">
              {selectedVector.source} → {selectedVector.target}
            </h4>
            <span className="text-xs font-mono text-[var(--text-muted)]">
              ({selectedVector.mechanism})
            </span>
          </div>

          <p className="text-sm text-[var(--text-primary)] leading-relaxed">
            {selectedVector.description}
          </p>

          {selectedVector.landmarkCase && (
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] bg-[var(--bg-base)] p-2.5 rounded border border-[var(--border-subtle)]">
              <ShieldAlert className="w-4 h-4 shrink-0 text-[var(--gold)]" />
              <span>Leading Case Precedent: {selectedVector.landmarkCase}</span>
            </div>
          )}
        </div>

        <div className="md:w-80 flex flex-col gap-3 border-t md:border-t-0 md:border-l border-[var(--border-subtle)] md:pl-6">
          <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
            Key Constitutional Provisions
          </span>
          <p className="text-xs font-mono text-[var(--text-primary)] bg-[var(--bg-base)] p-3 rounded-lg border border-[var(--border-subtle)]">
            {selectedVector.articles}
          </p>

          <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mt-1">
            Constituent Assembly Intent
          </span>
          <p className="text-xs text-[var(--text-muted)] italic">
            "The Constitution does not contemplate an absolute separation of powers, but a harmonious balance where each organ acts as a break on the other."
          </p>
        </div>
      </div>
    </div>
  );
};
