import React, { useState } from 'react';
import { Crown, AlertTriangle } from 'lucide-react';

type Mode = 'election' | 'impeachment';

export const PresidentElectoralImpeachmentSVG: React.FC = () => {
  const [mode, setMode] = useState<Mode>('election');
  const [selectedCallout, setSelectedCallout] = useState<string>('mla-formula');

  const CALLOUT_NOTES: Record<string, { title: string; rule: string; trap: string }> = {
    'mla-formula': {
      title: 'Uniformity Scale: Value of One Elected MLA Vote',
      rule: 'Value = Total Population of State (1971 Census per 84th Amd) ÷ (Total Elected MLAs × 1000). Remainder ≥ 500 adds +1 vote.',
      trap: 'Nominated MLAs & ALL MLCs (State Legislative Councils) CANNOT vote in the Presidential Election!'
    },
    'mp-formula': {
      title: 'Parity Scale: Value of One Elected MP Vote',
      rule: 'Value = Total Value of Votes of All Elected MLAs across 28 States + Delhi/Puducherry/J&K ÷ Total Number of Elected MPs (LS + RS).',
      trap: 'Presidential Electoral College includes Elected MPs + Elected MLAs ONLY (no Nominated MPs!).'
    },
    'stv-quota': {
      title: 'Proportional Representation & Single Transferable Vote (Art 55)',
      rule: 'Electoral Quota = (Total Valid Votes ÷ 2) + 1. If no candidate crosses 50%+1 in Round 1, lowest candidate is eliminated and their second preferences transfer.',
      trap: 'Not First-Past-The-Post! Winning requires an absolute quota (>50% of valid votes).'
    },
    'imp-init': {
      title: 'Impeachment Initiation: Either House (Art 61)',
      rule: 'Notice must be signed by at least 1/4th of the TOTAL membership of the initiating House after giving 14 days prior written notice. Sole constitutional ground: "Violation of the Constitution" (not defined in bare text).',
      trap: 'Nominated MPs who did NOT vote in the election DO participate in Impeachment!'
    },
    'imp-vote': {
      title: 'Strictest Majority in Constitution: 2/3rd of TOTAL Membership',
      rule: 'Unlike Art 368 (2/3rd Present & Voting), Art 61 requires a resolution passed by not less than 2/3rd of the TOTAL MEMBERSHIP of the House.',
      trap: 'State Legislatures & UT Assemblies (MLAs) play ZERO role in Presidential Impeachment — only Parliament acts.'
    }
  };

  const activeNote = CALLOUT_NOTES[selectedCallout] || CALLOUT_NOTES['mla-formula'];

  return (
    <div className="w-full flex flex-col gap-6 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] surface-specular">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Crown className="w-5 h-5 text-[var(--accent)]" />
            <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
              Presidential Election Quota &amp; Art 61 Impeachment
            </h3>
            <span className="text-xs px-2 py-0.5 rounded font-mono bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
              Articles 54, 55 &amp; 61
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            Interactive vote-weight math, Electoral College inclusions vs. exclusions, and the 5-step Article 61 removal pipeline.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="inline-flex p-1 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] shrink-0">
          <button
            onClick={() => {
              setMode('election');
              setSelectedCallout('mla-formula');
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-colors cursor-pointer ${
              mode === 'election'
                ? 'bg-[var(--accent)] text-[var(--accent-contrast)]'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            Art 54–55 Election
          </button>
          <button
            onClick={() => {
              setMode('impeachment');
              setSelectedCallout('imp-init');
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-colors cursor-pointer ${
              mode === 'impeachment'
                ? 'bg-[var(--accent)] text-[var(--accent-contrast)]'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            Art 61 Impeachment
          </button>
        </div>
      </div>

      {/* SVG Canvas */}
      <div className="w-full overflow-x-auto pb-2">
        <svg viewBox="0 0 960 350" className="w-full min-w-[740px] h-auto select-none font-mono">
          <defs>
            <pattern id="presGrid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.8" fill="var(--border-strong)" opacity="0.35" />
            </pattern>
            <marker id="presArrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 9 5 L 0 9 z" fill="var(--text-secondary)" />
            </marker>
          </defs>

          <rect x="0" y="0" width="960" height="350" rx="14" fill="var(--bg-base)" stroke="var(--border-subtle)" />
          <rect x="0" y="0" width="960" height="350" rx="14" fill="url(#presGrid)" />

          {mode === 'election' ? (
            <g>
              {/* Included vs Excluded Ledger on Left */}
              <g transform="translate(28, 30)">
                <rect x="0" y="0" width="245" height="290" rx="10" fill="var(--bg-surface)" stroke="var(--border-subtle)" />
                <text x="16" y="26" fill="var(--text-primary)" fontSize="10" fontWeight="bold">ELECTORAL COLLEGE (ART 54)</text>
                <line x1="16" y1="36" x2="229" y2="36" stroke="var(--border-subtle)" />

                <text x="16" y="56" fill="#10b981" fontSize="8.5" fontWeight="bold">✓ INCLUDED VOTERS</text>
                <rect x="16" y="64" width="213" height="36" rx="6" fill="rgba(16,185,129,0.08)" stroke="#10b981" strokeOpacity="0.3" />
                <text x="26" y="80" fill="var(--text-primary)" fontSize="8">1. Elected MPs (LS + RS)</text>
                <text x="26" y="92" fill="var(--text-muted)" fontSize="7">Equal national vote value</text>

                <rect x="16" y="106" width="213" height="38" rx="6" fill="rgba(16,185,129,0.08)" stroke="#10b981" strokeOpacity="0.3" />
                <text x="26" y="122" fill="var(--text-primary)" fontSize="8">2. Elected MLAs (28 States +</text>
                <text x="26" y="135" fill="var(--text-muted)" fontSize="7">Delhi, Puducherry — 70th Amd)</text>

                <line x1="16" y1="160" x2="229" y2="160" stroke="var(--border-subtle)" />
                <text x="16" y="178" fill="#f43f5e" fontSize="8.5" fontWeight="bold">✗ STRICTLY BARRED</text>
                <rect x="16" y="186" width="213" height="86" rx="6" fill="rgba(244,63,94,0.08)" stroke="#f43f5e" strokeOpacity="0.3" />
                <text x="26" y="204" fill="#fda4af" fontSize="8">• Nominated MPs (12 in RS)</text>
                <text x="26" y="220" fill="#fda4af" fontSize="8">• Nominated MLAs</text>
                <text x="26" y="236" fill="#fda4af" fontSize="8">• ALL MLCs (Elected &amp; Nom.)</text>
                <text x="26" y="254" fill="var(--text-muted)" fontSize="7">Art 71: SC exclusive dispute forum</text>
              </g>

              {/* Center Equations: Clickable Formula Blocks */}
              <g className="cursor-pointer vector-node" onClick={() => setSelectedCallout('mla-formula')} transform="translate(310, 42)">
                <rect
                  x="0"
                  y="0"
                  width="310"
                  height="118"
                  rx="10"
                  fill={selectedCallout === 'mla-formula' ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
                  stroke={selectedCallout === 'mla-formula' ? '#38bdf8' : 'var(--border-subtle)'}
                  strokeWidth={selectedCallout === 'mla-formula' ? '2' : '1'}
                />
                <text x="16" y="24" fill="#38bdf8" fontSize="8.5" fontWeight="bold">STEP 1 · UNIFORMITY OF STATES</text>
                <text x="16" y="42" fill="var(--text-primary)" fontSize="10" fontWeight="bold">Value of 1 Elected MLA Vote</text>
                <rect x="16" y="54" width="278" height="44" rx="6" fill="var(--bg-base)" stroke="var(--border-subtle)" />
                <text x="155" y="72" textAnchor="middle" fill="var(--text-primary)" fontSize="8.5">State Population (1971 Census)</text>
                <line x1="40" y1="78" x2="270" y2="78" stroke="var(--border-strong)" />
                <text x="155" y="91" textAnchor="middle" fill="var(--text-secondary)" fontSize="8.5">Elected MLAs of State × 1000</text>
              </g>

              <g className="cursor-pointer vector-node" onClick={() => setSelectedCallout('mp-formula')} transform="translate(310, 188)">
                <rect
                  x="0"
                  y="0"
                  width="310"
                  height="118"
                  rx="10"
                  fill={selectedCallout === 'mp-formula' ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
                  stroke={selectedCallout === 'mp-formula' ? '#a855f7' : 'var(--border-subtle)'}
                  strokeWidth={selectedCallout === 'mp-formula' ? '2' : '1'}
                />
                <text x="16" y="24" fill="#a855f7" fontSize="8.5" fontWeight="bold">STEP 2 · CENTRE-STATE PARITY</text>
                <text x="16" y="42" fill="var(--text-primary)" fontSize="10" fontWeight="bold">Value of 1 Elected MP Vote</text>
                <rect x="16" y="54" width="278" height="44" rx="6" fill="var(--bg-base)" stroke="var(--border-subtle)" />
                <text x="155" y="72" textAnchor="middle" fill="var(--text-primary)" fontSize="8.5">Sum of All States' MLA Votes</text>
                <line x1="40" y1="78" x2="270" y2="78" stroke="var(--border-strong)" />
                <text x="155" y="91" textAnchor="middle" fill="var(--text-secondary)" fontSize="8.5">Total Elected MPs (LS + RS)</text>
              </g>

              {/* Connecting Vector Arrows */}
              <path d="M 273 100 L 306 100" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#presArrow)" />
              <path d="M 465 160 L 465 184" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#presArrow)" />
              <path d="M 620 247 L 664 205" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#presArrow)" />
              <path d="M 620 101 L 664 145" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#presArrow)" />

              {/* Right: STV Quota Outcome Box */}
              <g className="cursor-pointer vector-node" onClick={() => setSelectedCallout('stv-quota')} transform="translate(668, 76)">
                <rect
                  x="0"
                  y="0"
                  width="264"
                  height="196"
                  rx="12"
                  fill={selectedCallout === 'stv-quota' ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
                  stroke={selectedCallout === 'stv-quota' ? '#10b981' : 'var(--border-strong)'}
                  strokeWidth={selectedCallout === 'stv-quota' ? '2' : '1.2'}
                />
                <text x="132" y="28" textAnchor="middle" fill="#10b981" fontSize="9" fontWeight="bold">STEP 3 · ELECTORAL QUOTA</text>
                <rect x="20" y="42" width="224" height="54" rx="8" fill="var(--bg-base)" stroke="var(--border-subtle)" />
                <text x="132" y="64" textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="bold">
                  (Total Valid Votes ÷ 2) + 1
                </text>
                <text x="132" y="82" textAnchor="middle" fill="var(--text-muted)" fontSize="7.5">
                  Strict &gt;50% Proportional Threshold
                </text>

                <text x="20" y="118" fill="var(--text-secondary)" fontSize="8">• Secret Ballot (No Party Whip)</text>
                <text x="20" y="136" fill="var(--text-secondary)" fontSize="8">• Ranked Preferences (1, 2, 3...)</text>
                <text x="20" y="154" fill="var(--text-secondary)" fontSize="8">• 2nd Prefs transfer until Quota</text>
                <text x="20" y="176" fill="#38bdf8" fontSize="8" fontWeight="bold">50 Proposers + 50 Seconders Req.</text>
              </g>
            </g>
          ) : (
            <g>
              {/* Impeachment 5-Stage Horizontal Flow */}
              {[
                {
                  id: 'imp-init',
                  x: 32,
                  step: 'STAGE 1',
                  title: '14 Days Notice',
                  sub: '+ 1/4th Total',
                  line3: 'Either LS or RS',
                  accent: '#38bdf8'
                },
                {
                  id: 'imp-vote',
                  x: 218,
                  step: 'STAGE 2',
                  title: 'First House Pass',
                  sub: '2/3 TOTAL Mem.',
                  line3: 'NOT Present+Voting',
                  accent: '#f43f5e'
                },
                {
                  id: 'imp-vote',
                  x: 404,
                  step: 'STAGE 3',
                  title: 'Second House',
                  sub: 'Quasi-Judicial',
                  line3: 'Investigates Charges',
                  accent: '#a855f7'
                },
                {
                  id: 'imp-init',
                  x: 590,
                  step: 'STAGE 4',
                  title: 'Right to Defend',
                  sub: 'Self / Counsel',
                  line3: 'President appears',
                  accent: 'var(--accent)'
                },
                {
                  id: 'imp-vote',
                  x: 776,
                  step: 'STAGE 5',
                  title: 'Final Removal',
                  sub: '2/3 TOTAL Mem.',
                  line3: 'Removed Immediately',
                  accent: '#10b981'
                }
              ].map((st, idx) => (
                <React.Fragment key={idx}>
                  <g
                    className="cursor-pointer vector-node"
                    onClick={() => setSelectedCallout(st.id)}
                    transform={`translate(${st.x}, 75)`}
                  >
                    <rect
                      x="0"
                      y="0"
                      width="156"
                      height="148"
                      rx="10"
                      fill="var(--bg-surface)"
                      stroke={st.accent}
                      strokeWidth="1.5"
                    />
                    <rect x="14" y="14" width="54" height="16" rx="4" fill="var(--bg-base)" stroke="var(--border-subtle)" />
                    <text x="41" y="25" textAnchor="middle" fill={st.accent} fontSize="8" fontWeight="bold">
                      {st.step}
                    </text>
                    <text x="14" y="54" fill="var(--text-primary)" fontSize="10.5" fontWeight="bold">
                      {st.title}
                    </text>
                    <rect x="14" y="68" width="128" height="44" rx="6" fill="var(--bg-base)" stroke="var(--border-subtle)" />
                    <text x="78" y="88" textAnchor="middle" fill={st.accent} fontSize="9.5" fontWeight="bold">
                      {st.sub}
                    </text>
                    <text x="78" y="102" textAnchor="middle" fill="var(--text-muted)" fontSize="7.5">
                      {st.line3}
                    </text>
                    <text x="14" y="134" fill="var(--text-muted)" fontSize="7.5">
                      Click to inspect →
                    </text>
                  </g>
                  {idx < 4 && (
                    <line
                      x1={st.x + 156}
                      y1="149"
                      x2={st.x + 186}
                      y2="149"
                      stroke="var(--text-secondary)"
                      strokeWidth="1.5"
                      markerEnd="url(#presArrow)"
                    />
                  )}
                </React.Fragment>
              ))}

              {/* Bottom Impeachment Distinctions Strip */}
              <rect x="32" y="252" width="900" height="66" rx="10" fill="var(--bg-surface-elevated)" stroke="var(--border-subtle)" />
              <text x="52" y="276" fill="#10b981" fontSize="9" fontWeight="bold">
                ✓ PARTICIPATING IN IMPEACHMENT: Elected + Nominated MPs of Parliament (LS + RS)
              </text>
              <text x="52" y="298" fill="#f43f5e" fontSize="9" fontWeight="bold">
                ✗ EXCLUDED FROM IMPEACHMENT: All State MLAs &amp; Delhi/Puducherry UT MLAs (even though they voted in Election!)
              </text>
            </g>
          )}
        </svg>
      </div>

      {/* Inspector Drawer */}
      <div className="p-5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-2">
          <h4 className="text-sm sm:text-base font-bold text-[var(--text-primary)]">{activeNote.title}</h4>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">{activeNote.rule}</p>
        </div>
        <div className="p-3.5 rounded-lg bg-rose-500/5 border border-rose-500/20 space-y-1">
          <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase font-bold text-rose-400">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Critical Exam Trap</span>
          </div>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{activeNote.trap}</p>
        </div>
      </div>
    </div>
  );
};
