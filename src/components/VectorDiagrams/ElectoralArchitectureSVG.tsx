import React, { useState } from 'react';
import { Vote, Users, Shield, CheckCircle2, Lock, Scale } from 'lucide-react';

export const ElectoralArchitectureSVG: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-6 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Vote className="w-5 h-5 text-[var(--accent)]" />
            <h3 className="text-xl font-semibold text-[var(--text-primary)]">
              Electoral Democracy & ECI Constitutional Architecture
            </h3>
            <span className="text-xs px-2 py-0.5 rounded font-mono bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
              Part XV (Articles 324 – 329)
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            How the Constitution insulates election machinery, guarantees adult franchise, and preserves free and fair polls.
          </p>
        </div>
      </div>

      {/* SVG Vector Canvas */}
      <div className="w-full overflow-x-auto pb-2">
        <svg viewBox="0 0 940 300" className="w-full min-w-[720px] h-auto select-none font-mono">
          {/* Top Axis: Article 324 Central ECI Node */}
          <g transform="translate(470, 18)">
            <rect x="-240" y="0" width="480" height="96" rx="10" fill="var(--bg-surface-elevated)" stroke="#38bdf8" strokeWidth="2" />
            <text x="0" y="24" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">
              ELECTION COMMISSION OF INDIA (ARTICLE 324)
            </text>
            <text x="0" y="42" textAnchor="middle" fill="var(--text-primary)" fontSize="10">
              Chief Election Commissioner + Other Election Commissioners
            </text>
            <text x="0" y="58" textAnchor="middle" fill="var(--text-muted)" fontSize="8">
              <tspan x="0" dy="0">Superintendence, direction & control of Parliament & Assembly polls</tspan>
              <tspan x="0" dy="12">as well as Presidential & Vice-Presidential elections</tspan>
            </text>
            <text x="0" y="86" textAnchor="middle" fill="var(--gold)" fontSize="8" fontWeight="bold">
              CEC removal condition: Same as Supreme Court Judge (Art 324(5))
            </text>
          </g>

          {/* Diverging Paths to Core Principles */}
          <path d="M 330 114 L 220 150" fill="none" stroke="var(--border-strong)" strokeWidth="2" strokeDasharray="3 3" />
          <path d="M 470 114 L 470 150" fill="none" stroke="var(--border-strong)" strokeWidth="2" strokeDasharray="3 3" />
          <path d="M 610 114 L 720 150" fill="none" stroke="var(--border-strong)" strokeWidth="2" strokeDasharray="3 3" />

          {/* Principle 1: Universal Adult Suffrage */}
          <g transform="translate(50, 150)">
            <rect x="0" y="0" width="260" height="130" rx="8" fill="var(--bg-surface-elevated)" stroke="#10b981" strokeWidth="1.5" />
            <rect x="14" y="14" width="232" height="24" rx="4" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" />
            <text x="130" y="30" textAnchor="middle" fill="#10b981" fontSize="9.5" fontWeight="bold">ADULT SUFFRAGE (ART 326)</text>
            <text x="16" y="58" fill="var(--text-primary)" fontSize="8.5">• Universal voting right for 18+ yrs</text>
            <text x="16" y="74" fill="var(--text-primary)" fontSize="8.5">• Age lowered 21 → 18 (61st Amd 1988)</text>
            <text x="16" y="90" fill="var(--text-primary)" fontSize="8.5">• Rejection of property qualifications</text>
            <text x="16" y="112" fill="var(--text-muted)" fontSize="7.5">Heart of democratic egalitarianism</text>
          </g>

          {/* Principle 2: Single Non-Communal Roll */}
          <g transform="translate(340, 150)">
            <rect x="0" y="0" width="260" height="130" rx="8" fill="var(--bg-surface-elevated)" stroke="#f59e0b" strokeWidth="1.5" />
            <rect x="14" y="14" width="232" height="24" rx="4" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" />
            <text x="130" y="30" textAnchor="middle" fill="#f59e0b" fontSize="9.5" fontWeight="bold">SINGLE ROLL (ART 325)</text>
            <text x="16" y="58" fill="var(--text-primary)" fontSize="8.5">• One general roll per constituency</text>
            <text x="16" y="74" fill="var(--text-primary)" fontSize="8.5">• No discrimination on religion/caste/sex</text>
            <text x="16" y="90" fill="var(--text-primary)" fontSize="8.5">• Abolished colonial separate electorates</text>
            <text x="16" y="112" fill="var(--text-muted)" fontSize="7.5">Prevents communal balkanization</text>
          </g>

          {/* Principle 3: Judicial Bar During Polls */}
          <g transform="translate(630, 150)">
            <rect x="0" y="0" width="260" height="130" rx="8" fill="var(--bg-surface-elevated)" stroke="#a855f7" strokeWidth="1.5" />
            <rect x="14" y="14" width="232" height="24" rx="4" fill="rgba(168, 85, 247, 0.15)" stroke="#a855f7" />
            <text x="130" y="30" textAnchor="middle" fill="#a855f7" fontSize="9.5" fontWeight="bold">JUDICIAL BAR (ART 329)</text>
            <text x="16" y="58" fill="var(--text-primary)" fontSize="8.5">• Courts cannot halt ongoing polls</text>
            <text x="16" y="74" fill="var(--text-primary)" fontSize="8.5">• Delimitation laws cannot be questioned</text>
            <text x="16" y="90" fill="var(--text-primary)" fontSize="8.5">• Post-poll challenge by Election Petition</text>
            <text x="16" y="112" fill="var(--text-muted)" fontSize="7.5">Prevents mid-election litigation freeze</text>
          </g>
        </svg>
      </div>

      {/* Jurisprudence Notes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-xs">
        <div className="flex flex-col gap-1.5">
          <span className="font-semibold text-[var(--accent)] font-mono uppercase tracking-wider">
            Plenary Reservoir Doctrine (Mohinder Singh Gill 1977)
          </span>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Where statutory election laws enacted under Representation of the People Acts (RPA 1950 & 1951) are silent, Article 324 operates as an inexhaustible reservoir of plenary administrative power to ensure fair elections.
          </p>
        </div>

        <div className="flex flex-col gap-1.5 border-t md:border-t-0 md:border-l border-[var(--border-subtle)] md:pl-4">
          <span className="font-semibold text-[var(--gold)] font-mono uppercase tracking-wider">
            Constitutional Status of Municipal/Panchayat Polls
          </span>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Elections to Panchayats and Municipalities are <strong>NOT conducted by ECI</strong>; they are conducted by independent <strong>State Election Commissions</strong> under Articles 243-K and 243-ZA.
          </p>
        </div>
      </div>
    </div>
  );
};
