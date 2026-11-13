import React, { useState } from 'react';
import { AlertTriangle, ShieldCheck, Clock, CheckCircle2, Lock } from 'lucide-react';

interface EmergencyType {
  id: string;
  name: string;
  article: string;
  grounds: string;
  approvalPeriod: string;
  majorityType: string;
  maxDuration: string;
  revocation: string;
  rightsImpact: string;
  judicialReview: string;
  color: string;
}

const EMERGENCIES: EmergencyType[] = [
  {
    id: 'national',
    name: 'National Emergency',
    article: 'Article 352',
    grounds: 'War, External Aggression, or Armed Rebellion (44th Amd 1978 substituted "armed rebellion" for "internal disturbance")',
    approvalPeriod: 'Within 1 MONTH (30 days) from date of issue',
    majorityType: 'SPECIAL MAJORITY (Majority of total membership + 2/3 of members present and voting in both Houses separately)',
    maxDuration: 'Can be extended indefinitely with Parliamentary approval every 6 MONTHS',
    revocation: 'Revoked by President anytime or by resolution passed by Lok Sabha by SIMPLE MAJORITY (or requisition by 1/10th members)',
    rightsImpact: 'Art 358 suspends Art 19 (only in war/external aggression). Art 359 suspends right to move court for other FRs EXCEPT Articles 20 & 21.',
    judicialReview: 'Subject to judicial review on grounds of mala fides (Minerva Mills 1980).',
    color: '#ef4444'
  },
  {
    id: 'state',
    name: "State Emergency (President's Rule)",
    article: 'Article 356 & 365',
    grounds: 'Failure of constitutional machinery in State (Art 356) or failure to comply with Union administrative directions (Art 365)',
    approvalPeriod: 'Within 2 MONTHS from date of proclamation',
    majorityType: 'SIMPLE MAJORITY (Majority of members present and voting in each House)',
    maxDuration: 'Maximum 3 YEARS (beyond 1 year requires: National Emergency in force + Election Commission certificate of election difficulty)',
    revocation: 'Revoked by President on his own at any time; no parliamentary approval needed for revocation.',
    rightsImpact: 'NO direct impact on Fundamental Rights of citizens.',
    judicialReview: 'Fully reviewable (S.R. Bommai 1994). Legislative assembly cannot be dissolved until Parliament approves proclamation.',
    color: '#f59e0b'
  },
  {
    id: 'financial',
    name: 'Financial Emergency',
    article: 'Article 360',
    grounds: 'Threat to the financial stability or credit of India or any part of its territory',
    approvalPeriod: 'Within 2 MONTHS from date of declaration',
    majorityType: 'SIMPLE MAJORITY (Majority of members present and voting)',
    maxDuration: 'Continues INDEFINITELY until revoked; no recurring 6-month parliamentary renewal needed',
    revocation: 'Revoked by President at any time by a subsequent proclamation.',
    rightsImpact: 'NO impact on Fundamental Rights. Union can direct reduction of salaries of public servants including SC/HC judges.',
    judicialReview: 'Never declared in India to date.',
    color: '#38bdf8'
  }
];

export const EmergencyMatrixSVG: React.FC = () => {
  const [selectedEmerg, setSelectedEmerg] = useState<EmergencyType>(EMERGENCIES[0]);

  return (
    <div className="w-full flex flex-col gap-6 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <AlertTriangle className="w-5 h-5 text-[var(--crimson)]" />
            <h3 className="text-xl font-semibold text-[var(--text-primary)]">Emergency Provisions & Rights Suspension Matrix</h3>
            <span className="text-xs px-2 py-0.5 rounded font-mono bg-[var(--badge-bg)] text-[var(--text-secondary)] border border-[var(--badge-border)]">
              Part XVIII (Articles 352 – 360)
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            Comparative mechanics of National, State, and Financial emergencies with post-44th Amendment protections.
          </p>
        </div>
      </div>

      {/* SVG Vector Comparator */}
      <div className="w-full overflow-x-auto pb-2">
        <svg
          viewBox="0 0 940 280"
          className="w-full min-w-[720px] h-auto select-none font-mono"
        >
          {EMERGENCIES.map((em, idx) => {
            const x = 50 + idx * 300;
            const isSelected = selectedEmerg.id === em.id;
            return (
              <g
                key={em.id}
                className="vector-node cursor-pointer"
                onClick={() => setSelectedEmerg(em)}
                transform={`translate(${x}, 20)`}
              >
                <rect
                  x="0"
                  y="0"
                  width="240"
                  height="180"
                  rx="10"
                  fill={isSelected ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
                  stroke={isSelected ? em.color : 'var(--border-subtle)'}
                  strokeWidth={isSelected ? '2' : '1'}
                />

                {/* Article Badge */}
                <rect x="12" y="12" width="216" height="26" rx="4" fill={isSelected ? `${em.color}22` : 'var(--badge-bg)'} stroke={em.color} strokeWidth="0.8" />
                <text x="120" y="29" textAnchor="middle" fill={em.color} fontSize="11" fontWeight="bold">
                  {em.article} : {em.name.toUpperCase()}
                </text>

                {/* Approval timing label */}
                <text x="16" y="60" fill="var(--text-secondary)" fontSize="8.5" fontWeight="600">PARLIAMENTARY WINDOW:</text>
                <text x="16" y="74" fill="var(--text-primary)" fontSize="9" fontWeight="bold">
                  {idx === 0 ? '30 DAYS (1 Month)' : '2 MONTHS'}
                </text>

                {/* Majority Type */}
                <text x="16" y="100" fill="var(--text-secondary)" fontSize="8.5" fontWeight="600">MAJORITY FORMULA:</text>
                <text x="16" y="114" fill={idx === 0 ? '#ef4444' : 'var(--text-primary)'} fontSize="8.5" fontWeight={idx === 0 ? 'bold' : 'normal'}>
                  {idx === 0 ? 'SPECIAL MAJORITY' : 'SIMPLE MAJORITY'}
                </text>

                {/* Rights impact indicator */}
                <rect x="12" y="130" width="216" height="34" rx="4" fill="var(--bg-base)" stroke="var(--border-subtle)" />
                <text x="20" y="146" fill="var(--text-secondary)" fontSize="8">FR SUSPENSION IMPACT:</text>
                <text x="20" y="157" fill={idx === 0 ? '#ef4444' : '#10b981'} fontSize="8" fontWeight="bold">
                  {idx === 0 ? 'Articles 19 / 359 (Excl. 20 & 21)' : 'NO IMPACT ON FRs'}
                </text>
              </g>
            );
          })}

          {/* Bottom Inviolable Core Banner */}
          <g transform="translate(50, 215)">
            <rect x="0" y="0" width="840" height="52" rx="8" fill="var(--bg-base)" stroke="var(--emerald)" strokeWidth="1.2" />
            <text x="420" y="20" textAnchor="middle" fill="var(--emerald)" fontSize="10" fontWeight="bold">
              THE 44TH AMENDMENT (1978) INVIOLABLE SHIELD
            </text>
            <text x="420" y="38" textAnchor="middle" fill="var(--text-secondary)" fontSize="8.5">
              Articles 20 & 21 (Protection against Self-Incrimination and Right to Life) CANNOT BE SUSPENDED under any emergency.
            </text>
          </g>
        </svg>
      </div>

      {/* Selected Emergency Detailed Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: selectedEmerg.color }} />
            <h4 className="text-base font-bold text-[var(--text-primary)]">
              {selectedEmerg.article} : {selectedEmerg.name}
            </h4>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Grounds for Declaration</span>
            <p className="text-xs text-[var(--text-primary)] bg-[var(--bg-base)] p-2.5 rounded border border-[var(--border-subtle)] leading-relaxed">
              {selectedEmerg.grounds}
            </p>
          </div>

          <div className="flex flex-col gap-1 mt-1">
            <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Approval & Duration</span>
            <div className="text-xs text-[var(--text-secondary)] flex flex-col gap-1 bg-[var(--bg-base)] p-2.5 rounded border border-[var(--border-subtle)]">
              <div><strong>Approval:</strong> {selectedEmerg.approvalPeriod} by {selectedEmerg.majorityType}</div>
              <div><strong>Max Duration:</strong> {selectedEmerg.maxDuration}</div>
              <div><strong>Revocation:</strong> {selectedEmerg.revocation}</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t md:border-t-0 md:border-l border-[var(--border-subtle)] md:pl-6">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Fundamental Rights Impact</span>
            </div>
            <p className="text-xs text-[var(--text-primary)] bg-[var(--bg-base)] p-2.5 rounded border border-[var(--border-subtle)] leading-relaxed">
              {selectedEmerg.rightsImpact}
            </p>
          </div>

          <div className="flex flex-col gap-1 mt-2">
            <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Judicial Review & Checks</span>
            <p className="text-xs text-[var(--text-secondary)] bg-[var(--bg-base)] p-2.5 rounded border border-[var(--border-subtle)] leading-relaxed">
              {selectedEmerg.judicialReview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
