import React, { useState } from 'react';
import { Shield, ShieldAlert, CheckCircle2, AlertOctagon, UserCheck, Layers } from 'lucide-react';

export const CivilServicesSafeguardsSVG: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'shield' | 'exceptions' | 'ais'>('shield');

  return (
    <div className="w-full flex flex-col gap-6 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <UserCheck className="w-5 h-5 text-[var(--accent)]" />
            <h3 className="text-xl font-semibold text-[var(--text-primary)]">
              Civil Service Protective Shield & Disciplinary Architecture
            </h3>
            <span className="text-xs px-2 py-0.5 rounded font-mono bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
              Part XIV (Articles 310, 311, 312)
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            How Article 311 hedges the English Doctrine of Pleasure to protect India's administrative "steel frame".
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1 bg-[var(--bg-base)] p-1 rounded-xl border border-[var(--border-subtle)] font-mono text-xs">
          <button
            onClick={() => setActiveTab('shield')}
            className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'shield' ? 'bg-[var(--bg-surface-elevated)] text-[var(--accent)] font-bold border border-[var(--border-strong)]' : 'text-[var(--text-secondary)]'}`}
          >
            Twin Shields (311(1) & (2))
          </button>
          <button
            onClick={() => setActiveTab('exceptions')}
            className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'exceptions' ? 'bg-[var(--bg-surface-elevated)] text-[var(--accent)] font-bold border border-[var(--border-strong)]' : 'text-[var(--text-secondary)]'}`}
          >
            3 Inquiry Exceptions
          </button>
          <button
            onClick={() => setActiveTab('ais')}
            className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'ais' ? 'bg-[var(--bg-surface-elevated)] text-[var(--accent)] font-bold border border-[var(--border-strong)]' : 'text-[var(--text-secondary)]'}`}
          >
            All-India Services (312)
          </button>
        </div>
      </div>

      {/* SVG Canvas for Twin Shields */}
      {activeTab === 'shield' && (
        <div className="w-full overflow-x-auto pb-2 animate-fadeIn">
          <svg viewBox="0 0 940 260" className="w-full min-w-[720px] h-auto select-none font-mono">
            {/* Top Doctrine of Pleasure Rail */}
            <g transform="translate(60, 20)">
              <rect x="0" y="0" width="820" height="44" rx="8" fill="var(--bg-base)" stroke="var(--border-strong)" strokeWidth="1" />
              <text x="410" y="27" textAnchor="middle" fill="var(--text-primary)" fontSize="10.5" fontWeight="bold">
                ARTICLE 310 : DOCTRINE OF PLEASURE (Tenure at pleasure of President or Governor)
              </text>
            </g>

            {/* Connecting Arrows */}
            <path d="M 270 64 L 270 95" fill="none" stroke="var(--border-strong)" strokeWidth="2" strokeDasharray="3 3" />
            <path d="M 670 64 L 670 95" fill="none" stroke="var(--border-strong)" strokeWidth="2" strokeDasharray="3 3" />

            {/* Shield 1: Article 311(1) */}
            <g transform="translate(60, 95)">
              <rect x="0" y="0" width="400" height="140" rx="10" fill="var(--bg-surface-elevated)" stroke="#38bdf8" strokeWidth="2" />
              <rect x="16" y="16" width="368" height="26" rx="4" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" />
              <text x="200" y="33" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">SHIELD 01 : ARTICLE 311(1)</text>
              <text x="20" y="66" fill="var(--text-primary)" fontSize="9" fontWeight="bold">SUBORDINATE AUTHORITY IMMUNITY</text>
              <text x="20" y="86" fill="var(--text-secondary)" fontSize="8.5">
                No civil servant can be dismissed, removed, or reduced in rank by any authority subordinate to that by which they were appointed.
              </text>
              <rect x="20" y="102" width="360" height="24" rx="4" fill="var(--bg-base)" stroke="var(--border-subtle)" />
              <text x="200" y="117" textAnchor="middle" fill="var(--accent)" fontSize="8" fontWeight="bold">Guarantees Status & Executive Rank Security</text>
            </g>

            {/* Shield 2: Article 311(2) */}
            <g transform="translate(480, 95)">
              <rect x="0" y="0" width="400" height="140" rx="10" fill="var(--bg-surface-elevated)" stroke="#10b981" strokeWidth="2" />
              <rect x="16" y="16" width="368" height="26" rx="4" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" />
              <text x="200" y="33" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="bold">SHIELD 02 : ARTICLE 311(2)</text>
              <text x="20" y="66" fill="var(--text-primary)" fontSize="9" fontWeight="bold">MANDATORY DEPARTMENTAL INQUIRY</text>
              <text x="20" y="86" fill="var(--text-secondary)" fontSize="8.5">
                Must be informed of specific charges and given reasonable opportunity of being heard in respect of those charges.
              </text>
              <rect x="20" y="102" width="360" height="24" rx="4" fill="var(--bg-base)" stroke="var(--border-subtle)" />
              <text x="200" y="117" textAnchor="middle" fill="#10b981" fontSize="8" fontWeight="bold">Enforces Principles of Natural Justice</text>
            </g>
          </svg>
        </div>
      )}

      {/* SVG Canvas for 3 Exceptions */}
      {activeTab === 'exceptions' && (
        <div className="w-full overflow-x-auto pb-2 animate-fadeIn">
          <svg viewBox="0 0 940 240" className="w-full min-w-[720px] h-auto select-none font-mono">
            {/* Proviso (a) */}
            <g transform="translate(50, 20)">
              <rect x="0" y="0" width="260" height="190" rx="10" fill="var(--bg-surface-elevated)" stroke="#ef4444" strokeWidth="1.5" />
              <rect x="16" y="16" width="228" height="26" rx="4" fill="rgba(239, 68, 68, 0.15)" stroke="#ef4444" />
              <text x="130" y="33" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">PROVISO (a) : CONVICTION</text>
              <text x="20" y="68" fill="var(--text-primary)" fontSize="9" fontWeight="bold">Criminal Offence Conviction</text>
              <text x="20" y="88" fill="var(--text-secondary)" fontSize="8">
                Where conduct leads to conviction on a criminal charge in a court of law.
              </text>
              <rect x="16" y="125" width="228" height="45" rx="6" fill="var(--bg-base)" stroke="var(--border-subtle)" />
              <text x="130" y="145" textAnchor="middle" fill="var(--text-muted)" fontSize="7.5">No Departmental Inquiry Needed</text>
              <text x="130" y="160" textAnchor="middle" fill="var(--accent)" fontSize="8" fontWeight="bold">Tulsiram Patel (1985)</text>
            </g>

            {/* Proviso (b) */}
            <g transform="translate(340, 20)">
              <rect x="0" y="0" width="260" height="190" rx="10" fill="var(--bg-surface-elevated)" stroke="#f59e0b" strokeWidth="1.5" />
              <rect x="16" y="16" width="228" height="26" rx="4" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" />
              <text x="130" y="33" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">PROVISO (b) : IMPRACTICABILITY</text>
              <text x="20" y="68" fill="var(--text-primary)" fontSize="9" fontWeight="bold">Inquiry Not Practicable</text>
              <text x="20" y="88" fill="var(--text-secondary)" fontSize="8">
                Disciplinary authority satisfied for reasons recorded in writing that holding inquiry is impracticable (e.g. witnesses terrorized).
              </text>
              <rect x="16" y="125" width="228" height="45" rx="6" fill="var(--bg-base)" stroke="var(--border-subtle)" />
              <text x="130" y="145" textAnchor="middle" fill="var(--text-muted)" fontSize="7.5">Subject to Judicial Review</text>
              <text x="130" y="160" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">Reasons must be objective</text>
            </g>

            {/* Proviso (c) */}
            <g transform="translate(630, 20)">
              <rect x="0" y="0" width="260" height="190" rx="10" fill="var(--bg-surface-elevated)" stroke="#a855f7" strokeWidth="1.5" />
              <rect x="16" y="16" width="228" height="26" rx="4" fill="rgba(168, 85, 247, 0.15)" stroke="#a855f7" />
              <text x="130" y="33" textAnchor="middle" fill="#a855f7" fontSize="10" fontWeight="bold">PROVISO (c) : STATE SECURITY</text>
              <text x="20" y="68" fill="var(--text-primary)" fontSize="9" fontWeight="bold">National Security Interest</text>
              <text x="20" y="88" fill="var(--text-secondary)" fontSize="8">
                President or Governor is satisfied that in the interest of security of the State, it is inexpedient to hold inquiry.
              </text>
              <rect x="16" y="125" width="228" height="45" rx="6" fill="var(--bg-base)" stroke="var(--border-subtle)" />
              <text x="130" y="145" textAnchor="middle" fill="var(--text-muted)" fontSize="7.5">Subjective Satisfaction</text>
              <text x="130" y="160" textAnchor="middle" fill="#a855f7" fontSize="8" fontWeight="bold">No reasons need be disclosed</text>
            </g>
          </svg>
        </div>
      )}

      {/* SVG Canvas for All-India Services */}
      {activeTab === 'ais' && (
        <div className="w-full overflow-x-auto pb-2 animate-fadeIn">
          <svg viewBox="0 0 940 220" className="w-full min-w-[720px] h-auto select-none font-mono">
            {/* Rajya Sabha Special Power */}
            <g transform="translate(60, 20)">
              <rect x="0" y="0" width="380" height="170" rx="10" fill="var(--bg-surface-elevated)" stroke="#38bdf8" strokeWidth="2" />
              <text x="20" y="32" fill="#38bdf8" fontSize="11" fontWeight="bold">ARTICLE 312 : RAJYA SABHA POWER</text>
              <text x="20" y="55" fill="var(--text-primary)" fontSize="9" fontWeight="bold">Creation of New All-India Services</text>
              <text x="20" y="75" fill="var(--text-secondary)" fontSize="8.5">
                Council of States passes resolution supported by 2/3 of members present & voting declaring it necessary in national interest.
              </text>
              <rect x="20" y="105" width="340" height="45" rx="6" fill="var(--bg-base)" stroke="var(--border-subtle)" />
              <text x="190" y="125" textAnchor="middle" fill="var(--accent)" fontSize="8.5" fontWeight="bold">Sole prerogative of Council of States</text>
              <text x="190" y="140" textAnchor="middle" fill="var(--text-muted)" fontSize="7.5">Protects federal character of bureaucracy</text>
            </g>

            {/* 3 Existing All-India Services */}
            <g transform="translate(480, 20)">
              <rect x="0" y="0" width="400" height="170" rx="10" fill="var(--bg-surface-elevated)" stroke="#10b981" strokeWidth="2" />
              <text x="20" y="32" fill="#10b981" fontSize="11" fontWeight="bold">THE THREE ALL-INDIA SERVICES</text>
              <text x="20" y="60" fill="var(--text-primary)" fontSize="9.5">1. Indian Administrative Service (IAS)</text>
              <text x="20" y="85" fill="var(--text-primary)" fontSize="9.5">2. Indian Police Service (IPS)</text>
              <text x="20" y="110" fill="var(--text-primary)" fontSize="9.5">3. Indian Forest Service (IFoS) - Created 1966</text>
              <rect x="20" y="125" width="360" height="30" rx="6" fill="var(--bg-base)" stroke="var(--border-subtle)" />
              <text x="200" y="144" textAnchor="middle" fill="var(--gold)" fontSize="8" fontWeight="bold">
                * Note: Indian Foreign Service (IFS) is a Central Service, NOT an All-India Service
              </text>
            </g>
          </svg>
        </div>
      )}
    </div>
  );
};
