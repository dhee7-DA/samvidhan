import React, { useState } from 'react';
import { FileText, ArrowRight, Check, X, ShieldAlert, Award } from 'lucide-react';

interface BillTypeComparison {
  id: string;
  name: string;
  article: string;
  introductionHouse: string;
  presidentialRecommendation: string;
  rajyaSabhaPowers: string;
  jointSittingPossible: boolean;
  presidentialAssentRule: string;
  color: string;
}

const BILL_TYPES: BillTypeComparison[] = [
  {
    id: 'ordinary',
    name: 'Ordinary Bill',
    article: 'Articles 107 & 108',
    introductionHouse: 'Either Lok Sabha or Rajya Sabha (by Minister or Private Member)',
    presidentialRecommendation: 'Not required prior to introduction',
    rajyaSabhaPowers: 'Equal powers: can approve, reject, or keep pending for max 6 months',
    jointSittingPossible: true,
    presidentialAssentRule: 'Can give assent, withhold assent (Absolute Veto), or return for reconsideration (Suspensive Veto)',
    color: '#38bdf8'
  },
  {
    id: 'money',
    name: 'Money Bill',
    article: 'Articles 109 & 110',
    introductionHouse: 'LOK SABHA ONLY (Certified conclusively by the Speaker)',
    presidentialRecommendation: 'MANDATORY prior recommendation required',
    rajyaSabhaPowers: 'Extremely restricted: RS cannot reject or amend; must return within 14 DAYS with suggestions',
    jointSittingPossible: false,
    presidentialAssentRule: 'Can give assent or withhold assent; CANNOT return for reconsideration',
    color: '#10b981'
  },
  {
    id: 'amendment',
    name: 'Constitutional Amendment Bill',
    article: 'Article 368',
    introductionHouse: 'Either Lok Sabha or Rajya Sabha',
    presidentialRecommendation: 'Not required prior to introduction',
    rajyaSabhaPowers: 'Equal powers: must pass in each House separately by Special Majority',
    jointSittingPossible: false,
    presidentialAssentRule: 'MANDATORY ASSENT (24th Amendment 1971 made Presidential assent obligatory; no veto power)',
    color: '#f59e0b'
  }
];

export const LegislativePassageSVG: React.FC = () => {
  const [activeBill, setActiveBill] = useState<BillTypeComparison>(BILL_TYPES[1]); // Money Bill default

  return (
    <div className="w-full flex flex-col gap-6 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <FileText className="w-5 h-5 text-[var(--accent)]" />
            <h3 className="text-xl font-semibold text-[var(--text-primary)]">Legislative Bill Passage Lifecycle & Veto Architecture</h3>
            <span className="text-xs px-2 py-0.5 rounded font-mono bg-[var(--badge-bg)] text-[var(--text-secondary)] border border-[var(--badge-border)]">
              Articles 107 – 111 & 368
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            Comparative trajectory of Ordinary, Money, and Constitutional Amendment bills through Parliament.
          </p>
        </div>
      </div>

      {/* SVG Pipeline Canvas */}
      <div className="w-full overflow-x-auto pb-2">
        <svg
          viewBox="0 0 940 260"
          className="w-full min-w-[720px] h-auto select-none font-mono"
        >
          {/* Bill Type Selector Buttons inside SVG Canvas */}
          {BILL_TYPES.map((bill, idx) => {
            const x = 50 + idx * 300;
            const isSelected = activeBill.id === bill.id;
            return (
              <g
                key={bill.id}
                className="vector-node cursor-pointer"
                onClick={() => setActiveBill(bill)}
                transform={`translate(${x}, 20)`}
              >
                <rect
                  x="0"
                  y="0"
                  width="240"
                  height="70"
                  rx="8"
                  fill={isSelected ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
                  stroke={isSelected ? bill.color : 'var(--border-subtle)'}
                  strokeWidth={isSelected ? '2' : '1'}
                />
                <text x="14" y="26" fill={bill.color} fontSize="11" fontWeight="bold">
                  {bill.name.toUpperCase()}
                </text>
                <text x="14" y="44" fill="var(--text-muted)" fontSize="8.5">
                  {bill.article}
                </text>
                <text x="14" y="58" fill={isSelected ? 'var(--text-primary)' : 'var(--text-secondary)'} fontSize="8">
                  {bill.id === 'money' ? '• Lok Sabha only • 14 days' : bill.id === 'ordinary' ? '• Either house • Joint sitting' : '• Special majority • No veto'}
                </text>
              </g>
            );
          })}

          {/* 5-Step Passage Pipeline Rail below */}
          <g transform="translate(50, 120)">
            <rect x="0" y="0" width="840" height="110" rx="8" fill="var(--bg-surface-elevated)" stroke="var(--border-strong)" strokeWidth="1" />

            {/* Step 1: Introduction */}
            <g transform="translate(30, 20)">
              <rect x="0" y="0" width="130" height="70" rx="6" fill="var(--bg-base)" stroke="var(--border-subtle)" />
              <text x="65" y="22" textAnchor="middle" fill="var(--text-primary)" fontSize="9" fontWeight="bold">1. INTRODUCTION</text>
              <text x="65" y="38" textAnchor="middle" fill="var(--text-muted)" fontSize="7.5">1st Reading</text>
              <text x="65" y="52" textAnchor="middle" fill={activeBill.id === 'money' ? '#10b981' : 'var(--text-secondary)'} fontSize="7">
                {activeBill.id === 'money' ? 'LOK SABHA ONLY' : 'Either House'}
              </text>
            </g>

            {/* Step 2: Scrutiny */}
            <g transform="translate(195, 20)">
              <rect x="0" y="0" width="130" height="70" rx="6" fill="var(--bg-base)" stroke="var(--border-subtle)" />
              <text x="65" y="22" textAnchor="middle" fill="var(--text-primary)" fontSize="9" fontWeight="bold">2. COMMITTEE / 2ND</text>
              <text x="65" y="38" textAnchor="middle" fill="var(--text-muted)" fontSize="7.5">Clause by Clause</text>
              <text x="65" y="52" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">Amendments voted</text>
            </g>

            {/* Step 3: Other House */}
            <g transform="translate(360, 20)">
              <rect x="0" y="0" width="130" height="70" rx="6" fill="var(--bg-base)" stroke="var(--border-subtle)" />
              <text x="65" y="22" textAnchor="middle" fill="var(--text-primary)" fontSize="9" fontWeight="bold">3. SECOND HOUSE</text>
              <text x="65" y="38" textAnchor="middle" fill={activeBill.id === 'money' ? '#10b981' : 'var(--text-muted)'} fontSize="7.5">
                {activeBill.id === 'money' ? '14 DAYS CAP' : 'Equal Powers'}
              </text>
              <text x="65" y="52" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">
                {activeBill.id === 'money' ? 'Cannot Reject' : 'Can suggest edits'}
              </text>
            </g>

            {/* Step 4: Deadlock Resolution */}
            <g transform="translate(525, 20)">
              <rect x="0" y="0" width="130" height="70" rx="6" fill="var(--bg-base)" stroke={activeBill.jointSittingPossible ? '#38bdf8' : '#ef4444'} strokeWidth="1.2" />
              <text x="65" y="22" textAnchor="middle" fill="var(--text-primary)" fontSize="9" fontWeight="bold">4. JOINT SITTING</text>
              <text x="65" y="38" textAnchor="middle" fill="var(--text-muted)" fontSize="7.5">Article 108</text>
              <text x="65" y="54" textAnchor="middle" fill={activeBill.jointSittingPossible ? '#38bdf8' : '#ef4444'} fontSize="8" fontWeight="bold">
                {activeBill.jointSittingPossible ? 'AVAILABLE' : 'BARRED'}
              </text>
            </g>

            {/* Step 5: Assent */}
            <g transform="translate(690, 20)">
              <rect x="0" y="0" width="120" height="70" rx="6" fill="var(--bg-base)" stroke="var(--gold)" strokeWidth="1.2" />
              <text x="60" y="22" textAnchor="middle" fill="var(--gold)" fontSize="9" fontWeight="bold">5. PRESIDENT</text>
              <text x="60" y="38" textAnchor="middle" fill="var(--text-muted)" fontSize="7.5">Article 111 / 368</text>
              <text x="60" y="52" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">
                {activeBill.id === 'amendment' ? 'MANDATORY' : activeBill.id === 'money' ? 'No Return' : 'Veto / Assent'}
              </text>
            </g>
          </g>
        </svg>
      </div>

      {/* Selected Bill Rules Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: activeBill.color }} />
            <h4 className="text-base font-bold text-[var(--text-primary)]">
              {activeBill.name} ({activeBill.article})
            </h4>
          </div>

          <div className="text-xs text-[var(--text-secondary)] flex flex-col gap-2 bg-[var(--bg-base)] p-3 rounded-lg border border-[var(--border-subtle)]">
            <div>
              <strong className="text-[var(--text-primary)]">Introduction Chamber:</strong> {activeBill.introductionHouse}
            </div>
            <div>
              <strong className="text-[var(--text-primary)]">Presidential Recommendation:</strong> {activeBill.presidentialRecommendation}
            </div>
            <div>
              <strong className="text-[var(--text-primary)]">Rajya Sabha Scope:</strong> {activeBill.rajyaSabhaPowers}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t md:border-t-0 md:border-l border-[var(--border-subtle)] md:pl-6">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
              Article 108 Joint Sitting Availability
            </span>
            <div className={`p-2 rounded border flex items-center gap-2 ${activeBill.jointSittingPossible ? 'bg-[var(--emerald)]/10 border-[var(--emerald)]/30 text-[var(--emerald)]' : 'bg-[var(--crimson)]/10 border-[var(--crimson)]/30 text-[var(--crimson)]'}`}>
              {activeBill.jointSittingPossible ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
              <span className="text-xs font-mono font-bold">
                {activeBill.jointSittingPossible ? 'Joint Sitting Permitted (Presided by Lok Sabha Speaker)' : 'Joint Sitting Constitutionally Prohibited'}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-1 mt-1">
            <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
              Presidential Assent & Veto Powers
            </span>
            <p className="text-xs text-[var(--text-primary)] bg-[var(--bg-base)] p-2.5 rounded border border-[var(--border-subtle)] leading-relaxed">
              {activeBill.presidentialAssentRule}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
