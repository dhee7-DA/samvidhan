import React, { useState } from 'react';
import { Building2, AlertTriangle, Check } from 'lucide-react';

type Tab = 'dissolution' | 'defection' | 'joint';

export const ParliamentaryHouseProceduresSVG: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('dissolution');

  const DETAILS: Record<Tab, { title: string; points: string[]; trap: string }> = {
    dissolution: {
      title: 'Dissolution of Lok Sabha: Which Pending Bills Lapse vs. Survive? (Art 107)',
      points: [
        'LAPSES if originating in LS and pending in LS, OR passed by LS and pending in RS.',
        'SURVIVES if originating in RS and STILL pending in RS (never touched LS).',
        'SURVIVES if passed by BOTH Houses and awaiting President Assent (Art 111) or returned for reconsideration.',
        'SURVIVES if President has already notified Joint Sitting (Art 108) before dissolution.'
      ],
      trap: 'Prorogation (ending a session by President under Art 85) NEVER causes any pending bill to lapse—only Dissolution kills LS-linked bills!'
    },
    defection: {
      title: 'Tenth Schedule Anti-Defection Matrix (52nd & 91st Amendments)',
      points: [
        'Elected Party MP/MLA: Disqualified if voluntarily giving up membership OR voting contrary to party Whip (no condonation within 15 days).',
        'Independent Member: Disqualified immediately upon joining ANY political party after election.',
        'Nominated Member: Given a 6-MONTH window to join a political party; barred thereafter.',
        'Merger Exception (91st Amd 2003): Safe ONLY if 2/3rd of legislature party merges (1/3rd Split protection omitted!).'
      ],
      trap: 'Presiding Officer (Speaker/Chairman) decides disqualification, NOT President/ECI! Under Kihoto Hollohan (1992), Speaker acts as a Tribunal subject to Judicial Review.'
    },
    joint: {
      title: 'Joint Sitting of Both Houses (Article 108) Mechanics',
      points: [
        'Triggered by President if a deadlock persists for >6 months, rejection occurs, or Houses disagree on amendments.',
        'Presiding Hierarchy: 1. LS Speaker -> 2. LS Deputy Speaker -> 3. RS Deputy Chairman (Chairman/Vice-President NEVER presides!).',
        'Resolved by SIMPLE MAJORITY of members present & voting (favors Lok Sabha due to 543 vs 245 strength).',
        'Only invoked 3 times in history: Dowry Prohibition (1961), Banking Service Commission (1978), POTA (2002).'
      ],
      trap: 'Strictly BARRED for Money Bills (Art 110) and Constitutional Amendment Bills (Art 368)!'
    }
  };

  const cur = DETAILS[activeTab];

  return (
    <div className="w-full flex flex-col gap-6 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] surface-specular">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Building2 className="w-5 h-5 text-[var(--accent)]" />
            <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
              Parliament Floor, Bill Lapse &amp; 10th Schedule Flows
            </h3>
            <span className="text-xs px-2 py-0.5 rounded font-mono bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
              Arts 85, 100, 107, 108 &amp; Sch. 10
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            Visual tracking of Lok Sabha dissolution bill rules, 10th Schedule Speaker Tribunal, and Article 108 Joint Sitting hierarchy.
          </p>
        </div>

        <div className="inline-flex p-1 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] shrink-0">
          {[
            { id: 'dissolution', label: 'Bill Lapse Rules' },
            { id: 'defection', label: '10th Schedule' },
            { id: 'joint', label: 'Art 108 Joint Sitting' }
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id as Tab)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-colors cursor-pointer ${
                activeTab === t.id
                  ? 'bg-[var(--accent)] text-[var(--accent-contrast)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* SVG Canvas */}
      <div className="w-full overflow-x-auto pb-2">
        <svg viewBox="0 0 960 320" className="w-full min-w-[740px] h-auto select-none font-mono">
          <defs>
            <pattern id="parlGrid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.8" fill="var(--border-strong)" opacity="0.35" />
            </pattern>
            <marker id="parlArrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 9 5 L 0 9 z" fill="var(--text-secondary)" />
            </marker>
          </defs>

          <rect x="0" y="0" width="960" height="320" rx="14" fill="var(--bg-base)" stroke="var(--border-subtle)" />
          <rect x="0" y="0" width="960" height="320" rx="14" fill="url(#parlGrid)" />

          {activeTab === 'dissolution' && (
            <g>
              {/* Trigger Card */}
              <g transform="translate(30, 100)">
                <rect x="0" y="0" width="165" height="120" rx="10" fill="var(--bg-surface-elevated)" stroke="#f43f5e" strokeWidth="1.5" />
                <text x="82.5" y="28" textAnchor="middle" fill="#f43f5e" fontSize="9.5" fontWeight="bold">LOK SABHA</text>
                <text x="82.5" y="44" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontWeight="bold">DISSOLVED</text>
                <text x="82.5" y="64" textAnchor="middle" fill="var(--text-muted)" fontSize="7.5">(Art 85 · Term Ends)</text>
                <line x1="18" y1="78" x2="147" y2="78" stroke="var(--border-subtle)" />
                <text x="82.5" y="96" textAnchor="middle" fill="#10b981" fontSize="7.5">Prorogation ≠ Lapse</text>
              </g>

              {/* Routing Arrows */}
              <path d="M 195 136 Q 245 75 296 75" fill="none" stroke="#f43f5e" strokeWidth="1.8" markerEnd="url(#parlArrow)" />
              <path d="M 195 184 Q 245 245 296 245" fill="none" stroke="#10b981" strokeWidth="1.8" markerEnd="url(#parlArrow)" />

              {/* TOP LANE: BILLS THAT LAPSE */}
              <g transform="translate(300, 26)">
                <rect x="0" y="0" width="630" height="118" rx="10" fill="rgba(244,63,94,0.06)" stroke="#f43f5e" strokeOpacity="0.45" />
                <text x="18" y="24" fill="#f43f5e" fontSize="9.5" fontWeight="bold">✗ LAPSES ON LOK SABHA DISSOLUTION</text>

                {[
                  { x: 18, title: 'Originated in LS', desc: 'Pending inside LS' },
                  { x: 220, title: 'Originated in RS', desc: 'Passed RS → Pending LS' },
                  { x: 422, title: 'Passed by LS', desc: 'Pending inside RS' }
                ].map((c, idx) => (
                  <g key={idx} transform={`translate(${c.x}, 38)`}>
                    <rect x="0" y="0" width="188" height="64" rx="8" fill="var(--bg-surface)" stroke="#f43f5e" strokeOpacity="0.4" />
                    <text x="94" y="26" textAnchor="middle" fill="var(--text-primary)" fontSize="9" fontWeight="bold">{c.title}</text>
                    <text x="94" y="44" textAnchor="middle" fill="#fda4af" fontSize="8">{c.desc}</text>
                  </g>
                ))}
              </g>

              {/* BOTTOM LANE: BILLS THAT SURVIVE */}
              <g transform="translate(300, 174)">
                <rect x="0" y="0" width="630" height="122" rx="10" fill="rgba(16,185,129,0.06)" stroke="#10b981" strokeOpacity="0.45" />
                <text x="18" y="24" fill="#10b981" fontSize="9.5" fontWeight="bold">✓ SURVIVES DISSOLUTION (DOES NOT LAPSE)</text>

                {[
                  { x: 18, title: 'Pending in RS Only', desc: 'Not yet passed by LS' },
                  { x: 220, title: 'At President Table', desc: 'Passed both Houses (Art 111)' },
                  { x: 422, title: 'Art 108 Notified', desc: 'Joint Sitting announced' }
                ].map((c, idx) => (
                  <g key={idx} transform={`translate(${c.x}, 38)`}>
                    <rect x="0" y="0" width="188" height="68" rx="8" fill="var(--bg-surface)" stroke="#10b981" strokeOpacity="0.4" />
                    <text x="94" y="26" textAnchor="middle" fill="var(--text-primary)" fontSize="9" fontWeight="bold">{c.title}</text>
                    <text x="94" y="44" textAnchor="middle" fill="#6ee7b7" fontSize="8">{c.desc}</text>
                  </g>
                ))}
              </g>
            </g>
          )}

          {activeTab === 'defection' && (
            <g>
              {/* 3 Trigger Paths on Left -> Speaker Tribunal -> Judicial Review */}
              {[
                { y: 34, label: 'ELECTED PARTY MP', sub: 'Resigns / Defies Whip (>15d)', color: '#38bdf8' },
                { y: 124, label: 'INDEPENDENT MP', sub: 'Joins ANY party (Zero Window)', color: '#f43f5e' },
                { y: 214, label: 'NOMINATED MP', sub: 'Joins party AFTER 6 Months', color: '#a855f7' }
              ].map((t, i) => (
                <React.Fragment key={i}>
                  <g transform={`translate(36, ${t.y})`}>
                    <rect x="0" y="0" width="235" height="72" rx="8" fill="var(--bg-surface)" stroke={t.color} strokeWidth="1.2" />
                    <text x="14" y="26" fill={t.color} fontSize="9.5" fontWeight="bold">{t.label}</text>
                    <text x="14" y="46" fill="var(--text-secondary)" fontSize="8">{t.sub}</text>
                  </g>
                  <line x1="271" y1={t.y + 36} x2="365" y2="160" stroke="var(--border-strong)" strokeWidth="1.5" markerEnd="url(#parlArrow)" />
                </React.Fragment>
              ))}

              {/* Speaker Tribunal Box */}
              <g transform="translate(370, 88)">
                <rect x="0" y="0" width="240" height="144" rx="12" fill="var(--bg-surface-elevated)" stroke="var(--accent)" strokeWidth="1.8" />
                <text x="120" y="26" textAnchor="middle" fill="var(--text-muted)" fontSize="8" fontWeight="bold">QUASI-JUDICIAL TRIBUNAL</text>
                <text x="120" y="48" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontWeight="bold">SPEAKER / CHAIRMAN</text>
                <text x="120" y="66" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Decides 10th Sch. Petitions</text>
                <rect x="16" y="84" width="208" height="44" rx="6" fill="var(--bg-base)" stroke="#10b981" strokeOpacity="0.4" />
                <text x="120" y="102" textAnchor="middle" fill="#10b981" fontSize="8" fontWeight="bold">MERGER SHIELD: ≥ 2/3rd</text>
                <text x="120" y="116" textAnchor="middle" fill="var(--text-muted)" fontSize="7">91st Amd abolished 1/3rd splits</text>
              </g>

              <line x1="610" y1="160" x2="672" y2="160" stroke="var(--text-secondary)" strokeWidth="1.8" markerEnd="url(#parlArrow)" />

              {/* Kihoto Hollohan Judicial Review */}
              <g transform="translate(676, 98)">
                <rect x="0" y="0" width="248" height="124" rx="10" fill="var(--bg-surface)" stroke="#38bdf8" strokeWidth="1.5" />
                <text x="124" y="28" textAnchor="middle" fill="#38bdf8" fontSize="9.5" fontWeight="bold">KIHOTO HOLLOHAN (1992)</text>
                <text x="124" y="50" textAnchor="middle" fill="var(--text-primary)" fontSize="9.5" fontWeight="bold">Judicial Review Applies</text>
                <text x="124" y="70" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">HC/SC can review mala fides</text>
                <text x="124" y="86" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">&amp; perversity AFTER decision</text>
                <text x="124" y="106" textAnchor="middle" fill="#fda4af" fontSize="7.5">Reasonable time limit (Keisham 2020)</text>
              </g>
            </g>
          )}

          {activeTab === 'joint' && (
            <g>
              {/* Left Chambers -> Center Joint Chamber */}
              <g transform="translate(36, 44)">
                <rect x="0" y="0" width="210" height="92" rx="10" fill="var(--bg-surface)" stroke="#38bdf8" strokeWidth="1.5" />
                <text x="105" y="28" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">LOK SABHA (543)</text>
                <text x="105" y="48" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Dominates numerical strength</text>
                <text x="105" y="68" textAnchor="middle" fill="var(--text-muted)" fontSize="7.5">Quorum: 1/10th Total (Art 100)</text>
              </g>
              <g transform="translate(36, 184)">
                <rect x="0" y="0" width="210" height="92" rx="10" fill="var(--bg-surface)" stroke="#a855f7" strokeWidth="1.5" />
                <text x="105" y="28" textAnchor="middle" fill="#a855f7" fontSize="10" fontWeight="bold">RAJYA SABHA (245)</text>
                <text x="105" y="48" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Deadlock &gt; 6 Months or Reject</text>
                <text x="105" y="68" textAnchor="middle" fill="var(--text-muted)" fontSize="7.5">Chairman NEVER presides Art 108</text>
              </g>

              <path d="M 246 90 L 320 140" fill="none" stroke="#38bdf8" strokeWidth="1.6" markerEnd="url(#parlArrow)" />
              <path d="M 246 230 L 320 180" fill="none" stroke="#a855f7" strokeWidth="1.6" markerEnd="url(#parlArrow)" />

              {/* Center: Art 108 Joint Assembly */}
              <g transform="translate(324, 66)">
                <rect x="0" y="0" width="290" height="188" rx="12" fill="var(--bg-surface-elevated)" stroke="var(--accent)" strokeWidth="1.8" />
                <text x="145" y="28" textAnchor="middle" fill="var(--accent)" fontSize="9.5" fontWeight="bold">PRESIDENT SUMMONS ART 108</text>
                <text x="145" y="50" textAnchor="middle" fill="var(--text-primary)" fontSize="10.5" fontWeight="bold">JOINT SITTING (788 MAX)</text>
                <rect x="18" y="66" width="254" height="54" rx="6" fill="var(--bg-base)" stroke="var(--border-subtle)" />
                <text x="145" y="84" textAnchor="middle" fill="var(--text-primary)" fontSize="8" fontWeight="bold">Presiding: 1. Speaker LS →</text>
                <text x="145" y="99" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.8">2. Dy. Speaker LS → 3. Dy. Chair RS</text>
                <text x="145" y="142" textAnchor="middle" fill="#10b981" fontSize="9" fontWeight="bold">Vote: SIMPLE MAJORITY</text>
                <text x="145" y="160" textAnchor="middle" fill="var(--text-muted)" fontSize="7.5">Present &amp; Voting of Combined Houses</text>
              </g>

              <line x1="614" y1="160" x2="660" y2="160" stroke="var(--text-secondary)" strokeWidth="1.6" markerEnd="url(#parlArrow)" />

              {/* Right: Applicability Gate */}
              <g transform="translate(664, 66)">
                <rect x="0" y="0" width="260" height="188" rx="10" fill="var(--bg-surface)" stroke="var(--border-subtle)" />
                <text x="18" y="28" fill="#10b981" fontSize="9" fontWeight="bold">✓ ALLOWED BILL TYPES</text>
                <text x="18" y="46" fill="var(--text-primary)" fontSize="8.5">• Ordinary Bills (Art 107)</text>
                <text x="18" y="64" fill="var(--text-primary)" fontSize="8.5">• Financial Bills I &amp; II (Art 117)</text>
                <line x1="18" y1="84" x2="242" y2="84" stroke="var(--border-subtle)" />
                <text x="18" y="108" fill="#f43f5e" fontSize="9" fontWeight="bold">✗ STRICTLY BARRED</text>
                <text x="18" y="128" fill="#fda4af" fontSize="8.5">• Money Bills (Art 110)</text>
                <text x="18" y="146" fill="#fda4af" fontSize="8.5">• Const. Amend. Bills (Art 368)</text>
                <text x="18" y="168" fill="var(--text-muted)" fontSize="7.5">Zero Joint Sitting in State Legislatures!</text>
              </g>
            </g>
          )}
        </svg>
      </div>

      {/* Explanation Panel */}
      <div className="p-5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-2">
          <h4 className="text-sm sm:text-base font-bold text-[var(--text-primary)]">{cur.title}</h4>
          <ul className="space-y-1.5">
            {cur.points.map((pt, i) => (
              <li key={i} className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-3.5 rounded-lg bg-rose-500/5 border border-rose-500/20 space-y-1.5">
          <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase text-rose-400">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>High-Yield Exam Trap</span>
          </div>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{cur.trap}</p>
        </div>
      </div>
    </div>
  );
};
