import React, { useState } from 'react';
import { Landmark, ArrowRight, ShieldCheck, CheckCircle2, Percent, Layers } from 'lucide-react';

export const GSTCouncilFiscalSVG: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'council' | 'finance-commission' | 'funds'>('council');

  return (
    <div className="w-full flex flex-col gap-6 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Landmark className="w-5 h-5 text-[var(--gold)]" />
            <h3 className="text-xl font-semibold text-[var(--text-primary)]">
              Fiscal Federalism & The GST Council Architecture
            </h3>
            <span className="text-xs px-2 py-0.5 rounded font-mono bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
              Part XII (Articles 279A, 280, 266)
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            Interactive mechanics of cooperative fiscal voting, Finance Commission devolution, and constitutional funds.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1 bg-[var(--bg-base)] p-1 rounded-xl border border-[var(--border-subtle)] font-mono text-xs">
          <button
            onClick={() => setActiveTab('council')}
            className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'council' ? 'bg-[var(--bg-surface-elevated)] text-[var(--accent)] font-bold border border-[var(--border-strong)]' : 'text-[var(--text-secondary)]'}`}
          >
            GST Council (279A)
          </button>
          <button
            onClick={() => setActiveTab('finance-commission')}
            className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'finance-commission' ? 'bg-[var(--bg-surface-elevated)] text-[var(--accent)] font-bold border border-[var(--border-strong)]' : 'text-[var(--text-secondary)]'}`}
          >
            Finance Comm (280)
          </button>
          <button
            onClick={() => setActiveTab('funds')}
            className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'funds' ? 'bg-[var(--bg-surface-elevated)] text-[var(--accent)] font-bold border border-[var(--border-strong)]' : 'text-[var(--text-secondary)]'}`}
          >
            Funds (266 vs 267)
          </button>
        </div>
      </div>

      {/* SVG Canvas for GST Council */}
      {activeTab === 'council' && (
        <div className="w-full overflow-x-auto pb-2 animate-fadeIn">
          <svg viewBox="0 0 940 280" className="w-full h-auto select-none font-mono">
            {/* Voting Weights Visualizer */}
            <g transform="translate(50, 20)">
              {/* Centre Weight Card */}
              <rect x="0" y="0" width="380" height="130" rx="10" fill="var(--bg-surface-elevated)" stroke="#38bdf8" strokeWidth="2" />
              <text x="20" y="32" fill="#38bdf8" fontSize="12" fontWeight="bold">CENTRAL GOVERNMENT WEIGHT</text>
              <text x="20" y="52" fill="var(--text-muted)" fontSize="9">Union Finance Minister + MoS Finance</text>
              <rect x="20" y="65" width="340" height="40" rx="6" fill="var(--bg-base)" stroke="var(--border-subtle)" />
              <text x="190" y="90" textAnchor="middle" fill="var(--text-primary)" fontSize="18" fontWeight="bold">
                1/3rd (33.33%) <tspan fontSize="11" fill="var(--text-muted)">of total votes cast</tspan>
              </text>
            </g>

            <g transform="translate(510, 20)">
              {/* States Weight Card */}
              <rect x="0" y="0" width="380" height="130" rx="10" fill="var(--bg-surface-elevated)" stroke="#10b981" strokeWidth="2" />
              <text x="20" y="32" fill="#10b981" fontSize="12" fontWeight="bold">ALL STATES & UTS WEIGHT</text>
              <text x="20" y="52" fill="var(--text-muted)" fontSize="9">28 States + 3 UTs (Delhi, Puducherry, J&K)</text>
              <rect x="20" y="65" width="340" height="40" rx="6" fill="var(--bg-base)" stroke="var(--border-subtle)" />
              <text x="190" y="90" textAnchor="middle" fill="var(--text-primary)" fontSize="18" fontWeight="bold">
                2/3rds (66.67%) <tspan fontSize="11" fill="var(--text-muted)">weighted equally across states</tspan>
              </text>
            </g>

            {/* Threshold Convergence Banner */}
            <g transform="translate(50, 180)">
              <rect x="0" y="0" width="840" height="80" rx="10" fill="var(--bg-base)" stroke="var(--gold)" strokeWidth="1.5" />
              <text x="420" y="30" textAnchor="middle" fill="var(--gold)" fontSize="12" fontWeight="bold">
                DECISION THRESHOLD : THREE-FOURTHS (75%) WEIGHTED MAJORITY
              </text>
              <text x="420" y="50" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">
                Neither the Centre alone (33.3%) nor all States together (66.7%) can pass a decision without cooperative consensus.
              </text>
              <text x="420" y="68" textAnchor="middle" fill="var(--text-muted)" fontSize="8.5">
                Mohit Minerals (2022): Recommendations are uncoerced & persuasive; preserving legislative sovereignty.
              </text>
            </g>
          </svg>
        </div>
      )}

      {/* SVG Canvas for Finance Commission */}
      {activeTab === 'finance-commission' && (
        <div className="w-full overflow-x-auto pb-2 animate-fadeIn">
          <svg viewBox="0 0 940 260" className="w-full h-auto select-none font-mono">
            {/* Net Tax Proceeds Pool */}
            <g transform="translate(60, 20)">
              <rect x="0" y="0" width="240" height="100" rx="8" fill="var(--bg-surface-elevated)" stroke="var(--border-strong)" strokeWidth="1.5" />
              <text x="120" y="32" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontWeight="bold">DIVISIBLE TAX POOL</text>
              <text x="120" y="52" textAnchor="middle" fill="var(--text-muted)" fontSize="8.5">Gross Union Tax Revenues</text>
              <text x="120" y="72" textAnchor="middle" fill="var(--accent)" fontSize="10" fontWeight="bold">(Excluding Cesses & Surcharges)</text>
            </g>

            {/* Devolution Pipeline */}
            <path d="M 300 70 L 390 70" fill="none" stroke="var(--border-strong)" strokeWidth="2" strokeDasharray="4 4" />
            <text x="345" y="62" textAnchor="middle" fill="var(--gold)" fontSize="8">Art 280</text>

            {/* Vertical Devolution */}
            <g transform="translate(390, 20)">
              <rect x="0" y="0" width="240" height="100" rx="8" fill="var(--bg-surface-elevated)" stroke="#38bdf8" strokeWidth="2" />
              <text x="120" y="32" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">VERTICAL DEVOLUTION</text>
              <text x="120" y="56" textAnchor="middle" fill="var(--text-primary)" fontSize="16" fontWeight="bold">41% to States</text>
              <text x="120" y="78" textAnchor="middle" fill="var(--text-muted)" fontSize="8.5">15th Finance Commission formula</text>
            </g>

            {/* Horizontal Devolution */}
            <g transform="translate(680, 20)">
              <rect x="0" y="0" width="200" height="100" rx="8" fill="var(--bg-surface-elevated)" stroke="#10b981" strokeWidth="2" />
              <text x="100" y="32" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="bold">HORIZONTAL SHARE</text>
              <text x="100" y="52" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">• Income Distance (45%)</text>
              <text x="100" y="66" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">• Population 2011 (15%)</text>
              <text x="100" y="80" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">• Area & Forest (25%)</text>
            </g>

            {/* Bottom Grants-in-Aid Bar */}
            <g transform="translate(60, 150)">
              <rect x="0" y="0" width="820" height="80" rx="8" fill="var(--bg-base)" stroke="var(--border-strong)" strokeWidth="1" />
              <text x="410" y="30" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontWeight="bold">
                GRANTS-IN-AID OF REVENUES (ARTICLE 275)
              </text>
              <text x="410" y="50" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">
                Revenue Deficit Grants • Disaster Management Grants • Local Body Grants for Panchayats & Municipalities
              </text>
              <text x="410" y="68" textAnchor="middle" fill="var(--text-muted)" fontSize="8">
                Recommended every 5 years by a 5-member judicial & economic commission appointed by the President of India.
              </text>
            </g>
          </svg>
        </div>
      )}

      {/* SVG Canvas for Funds */}
      {activeTab === 'funds' && (
        <div className="w-full overflow-x-auto pb-2 animate-fadeIn">
          <svg viewBox="0 0 940 240" className="w-full h-auto select-none font-mono">
            {/* Consolidated Fund */}
            <g transform="translate(60, 20)">
              <rect x="0" y="0" width="260" height="190" rx="10" fill="var(--bg-surface-elevated)" stroke="#38bdf8" strokeWidth="1.5" />
              <rect x="16" y="16" width="228" height="26" rx="4" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" />
              <text x="130" y="33" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">CONSOLIDATED FUND (ART 266(1))</text>
              <text x="20" y="70" fill="var(--text-primary)" fontSize="8.5">• All tax & non-tax revenues</text>
              <text x="20" y="90" fill="var(--text-primary)" fontSize="8.5">• All loans raised by Govt</text>
              <text x="20" y="110" fill="var(--text-primary)" fontSize="8.5">• All loan repayments received</text>
              <rect x="16" y="135" width="228" height="35" rx="6" fill="var(--bg-base)" stroke="var(--border-subtle)" />
              <text x="130" y="156" textAnchor="middle" fill="var(--accent)" fontSize="8" fontWeight="bold">PARLIAMENTARY VOTE MANDATORY</text>
            </g>

            {/* Contingency Fund */}
            <g transform="translate(340, 20)">
              <rect x="0" y="0" width="260" height="190" rx="10" fill="var(--bg-surface-elevated)" stroke="#f59e0b" strokeWidth="1.5" />
              <rect x="16" y="16" width="228" height="26" rx="4" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" />
              <text x="130" y="33" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">CONTINGENCY FUND (ART 267)</text>
              <text x="20" y="70" fill="var(--text-primary)" fontSize="8.5">• Imprest corpus (₹30,000 Cr)</text>
              <text x="20" y="90" fill="var(--text-primary)" fontSize="8.5">• Placed at disposal of President</text>
              <text x="20" y="110" fill="var(--text-primary)" fontSize="8.5">• Managed by Finance Secretary</text>
              <rect x="16" y="135" width="228" height="35" rx="6" fill="var(--bg-base)" stroke="var(--border-subtle)" />
              <text x="130" y="156" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">EX-POST PARLIAMENT SANCTION</text>
            </g>

            {/* Public Account */}
            <g transform="translate(620, 20)">
              <rect x="0" y="0" width="260" height="190" rx="10" fill="var(--bg-surface-elevated)" stroke="#10b981" strokeWidth="1.5" />
              <rect x="16" y="16" width="228" height="26" rx="4" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" />
              <text x="130" y="33" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">PUBLIC ACCOUNT (ART 266(2))</text>
              <text x="20" y="70" fill="var(--text-primary)" fontSize="8.5">• Provident Funds (PF)</text>
              <text x="20" y="90" fill="var(--text-primary)" fontSize="8.5">• Small savings deposits</text>
              <text x="20" y="110" fill="var(--text-primary)" fontSize="8.5">• Judicial deposits & remittances</text>
              <rect x="16" y="135" width="228" height="35" rx="6" fill="var(--bg-base)" stroke="var(--border-subtle)" />
              <text x="130" y="156" textAnchor="middle" fill="#10b981" fontSize="8" fontWeight="bold">EXECUTIVE ACTION SUFFICIENT</text>
            </g>
          </svg>
        </div>
      )}
    </div>
  );
};
