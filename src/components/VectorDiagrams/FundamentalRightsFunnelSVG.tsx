import React, { useState } from 'react';
import { ShieldCheck, AlertTriangle, Scale, ArrowRight } from 'lucide-react';

interface FunnelNode {
  id: string;
  step: string;
  title: string;
  articles: string;
  shortTag: string;
  accent: string;
  rule: string;
  callouts: string[];
  landmarkCase: string;
  examTrap: string;
}

const FUNNEL_NODES: FunnelNode[] = [
  {
    id: 'art-12',
    step: '01',
    title: 'Threshold Gate: Definition of "State"',
    articles: 'Article 12',
    shortTag: 'Instrumentality Test',
    accent: '#38bdf8',
    rule: 'Fundamental Rights are ordinarily enforceable horizontally against "The State" (Union/State Govts, Legislatures, Local Authorities) and "Other Authorities" under deep and pervasive government control.',
    callouts: [
      'Deep & Pervasive Financial/Administrative Control (Ajay Hasia 6-Factor Test)',
      'BCCI Exclusion (Zee Telefilms 2005) vs Statutory Regulatory Bodies',
      'Horizontal Application exception: Arts 15(2), 17, 23, 24 apply even against private persons'
    ],
    landmarkCase: 'R.D. Shetty v. International Airport Authority (1979) & Ajay Hasia (1981)',
    examTrap: 'Judiciary is "State" on its administrative/rule-making side (Prem Chand Garg), NOT when exercising purely judicial functions (Naresh Mirajkar).'
  },
  {
    id: 'art-13',
    step: '02',
    title: 'Judicial Review Filter: Laws Inconsistent with FRs',
    articles: 'Article 13(1) & 13(2)',
    shortTag: 'Eclipse & Severability',
    accent: '#f43f5e',
    rule: 'Article 13 empowers Supreme Court (Art 32) and High Courts (Art 226) to declare pre-constitutional and post-constitutional laws void to the extent they abridge Part III rights.',
    callouts: [
      'Art 13(1) Pre-Constitution Laws: Dormant, not dead -> Doctrine of Eclipse (Bhikaji Narain)',
      'Art 13(2) Post-Constitution Laws: Void ab initio (Deep Chand); Eclipse applies only to non-citizens',
      'Doctrine of Severability: Only the offending clause falls if separable (R.M.D.C. 1957)'
    ],
    landmarkCase: 'Bhikaji Narain v. State of MP (1955) & R.M.D.C. v. Union of India (1957)',
    examTrap: 'Art 13(4) inserted by 24th Amendment (1971) excludes Constitutional Amendments under Art 368 from "law" in Art 13(3) — yet Amendments remain checkable via Basic Structure.'
  },
  {
    id: 'art-14',
    step: '03',
    title: 'The Equality Shield & Anti-Arbitrariness',
    articles: 'Article 14',
    shortTag: 'Twin Test & Royappa',
    accent: '#10b981',
    rule: 'Protects BOTH "Equality before the Law" (UK negative concept) and "Equal Protection of the Laws" (US positive concept) for ALL persons (citizens and foreigners alike).',
    callouts: [
      'Old Doctrine: Intelligible Differentia + Rational Nexus (Anwar Ali Sarkar 1952)',
      'New Doctrine: Non-Arbitrariness Dynamic Equality (E.P. Royappa 1974)',
      'Manifest Arbitrariness invalidates even plenary Legislation (Shayara Bano 2017)'
    ],
    landmarkCase: 'E.P. Royappa v. State of Tamil Nadu (1974) & Shayara Bano (2017)',
    examTrap: 'Article 14 forbids class legislation, NOT reasonable classification; single-person laws are valid if the person constitutes a class by themselves (Chiranjit Lal).'
  },
  {
    id: 'art-19',
    step: '04',
    title: 'The 6 Freedoms & Exhaustive Restrictions',
    articles: 'Article 19(1)(a)–(g)',
    shortTag: 'Proportionality Test',
    accent: '#a855f7',
    rule: 'Guarantees 6 core democratic freedoms strictly to CITIZENS (excluding corporations/foreigners), calibrated against exhaustive, closed lists of "reasonable restrictions" under clauses (2) to (6).',
    callouts: [
      'Art 19(1)(a) Speech -> 8 grounds in 19(2) (Sovereignty, Public Order, Defamation, Contempt...)',
      'Right to Property 19(1)(f) omitted by 44th Amendment (1978) -> moved to Art 300A',
      'Internet access & Dissent protected via Proportionality (Anuradha Bhasin 2020)'
    ],
    landmarkCase: 'Romesh Thappar (1950), Shreya Singhal (2015) & Anuradha Bhasin (2020)',
    examTrap: 'Restrictions cannot invent grounds outside 19(2)–(6): "Public interest" is valid for Trade 19(6), NOT a valid restriction ground for Free Speech 19(2)!'
  },
  {
    id: 'golden-triangle',
    step: '05',
    title: 'The Golden Triangle & Proportionality Core',
    articles: 'Arts 14 · 19 · 21',
    shortTag: 'Maneka & Puttaswamy',
    accent: 'var(--accent)',
    rule: 'Following Maneka Gandhi (1978), Articles 14, 19, and 21 are not isolated watertight compartments (overruling Gopalan 1950); any law depriving liberty under Art 21 must simultaneously clear Art 14 fairness and Art 19 reasonableness.',
    callouts: [
      'Substantive Due Process: Procedure must be "fair, just and reasonable", not fanciful',
      '4-Prong Puttaswamy Proportionality: Legality, Legitimate Aim, Suitability/Necessity, Balancing',
      'Horizontal Right to Privacy, Dignity, Livelihood & Clean Climate (M.K. Ranjitsinh 2024)'
    ],
    landmarkCase: 'Maneka Gandhi (1978) & K.S. Puttaswamy (2017) 9-Judge Bench',
    examTrap: 'While Art 19 is available only to citizens and suspends automatically during Art 352 External Emergency (Art 358), Art 21 protects all persons and NEVER suspends (44th Amd).'
  }
];

export const FundamentalRightsFunnelSVG: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('art-13');
  const current = FUNNEL_NODES.find((n) => n.id === activeId) || FUNNEL_NODES[0];

  return (
    <div className="w-full flex flex-col gap-6 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] surface-specular">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <ShieldCheck className="w-5 h-5 text-[var(--accent)]" />
            <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
              Fundamental Rights Judicial Filter &amp; Golden Triangle
            </h3>
            <span className="text-xs px-2 py-0.5 rounded font-mono bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
              Articles 12 – 21
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            Trace how any law or executive order is tested through Art 12 Statehood, Art 13 Judicial Review, and the Golden Triangle.
          </p>
        </div>
        <span className="text-[11px] font-mono text-[var(--text-muted)]">
          Click any filter stage or vector arrow below
        </span>
      </div>

      {/* Interactive Blueprint Canvas */}
      <div className="w-full overflow-x-auto pb-2">
        <svg viewBox="0 0 980 390" className="w-full h-auto select-none font-mono">
          <defs>
            <pattern id="frBpGrid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.8" fill="var(--border-strong)" opacity="0.4" />
            </pattern>
            <marker id="frArrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 9 5 L 0 9 z" fill="var(--text-secondary)" />
            </marker>
            <marker id="frArrowSky" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 9 5 L 0 9 z" fill="#38bdf8" />
            </marker>
            <marker id="frArrowRose" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 9 5 L 0 9 z" fill="#f43f5e" />
            </marker>
            <marker id="frArrowEmerald" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 9 5 L 0 9 z" fill="#10b981" />
            </marker>
          </defs>

          <rect x="0" y="0" width="980" height="390" rx="14" fill="var(--bg-base)" stroke="var(--border-subtle)" />
          <rect x="0" y="0" width="980" height="390" rx="14" fill="url(#frBpGrid)" />

          {/* Input Stimulus Capsule */}
          <g transform="translate(24, 130)">
            <rect x="0" y="0" width="110" height="84" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)" strokeDasharray="3 3" />
            <text x="55" y="24" textAnchor="middle" fill="var(--text-muted)" fontSize="8" fontWeight="bold">STIMULUS</text>
            <text x="55" y="42" textAnchor="middle" fill="var(--text-primary)" fontSize="9.5" fontWeight="bold">Statute /</text>
            <text x="55" y="56" textAnchor="middle" fill="var(--text-primary)" fontSize="9.5" fontWeight="bold">Exec Order</text>
            <text x="55" y="72" textAnchor="middle" fill="var(--text-muted)" fontSize="7.5">Challenged Action</text>
          </g>

          {/* Connecting Pipeline Rails */}
          <line x1="134" y1="172" x2="174" y2="172" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#frArrow)" />
          <line x1="336" y1="172" x2="376" y2="172" stroke="#38bdf8" strokeWidth="1.6" markerEnd="url(#frArrowSky)" />
          <line x1="538" y1="172" x2="578" y2="172" stroke="#f43f5e" strokeWidth="1.6" markerEnd="url(#frArrowRose)" />
          <line x1="740" y1="172" x2="778" y2="172" stroke="#10b981" strokeWidth="1.6" markerEnd="url(#frArrowEmerald)" />

          {/* Callout Drop-down Branches (Exceptions / Tests) */}
          {/* Art 12 Callout */}
          <path d="M 255 112 L 255 62 L 285 62" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 2" />
          <circle cx="255" cy="112" r="2.5" fill="#38bdf8" />
          <rect x="285" y="34" width="160" height="44" rx="6" fill="var(--bg-surface)" stroke="#38bdf8" strokeOpacity="0.4" />
          <text x="295" y="51" fill="#38bdf8" fontSize="8" fontWeight="bold">AJAY HASIA 6-FACTOR TEST</text>
          <text x="295" y="65" fill="var(--text-muted)" fontSize="7.5">Deep &amp; Pervasive State Control</text>

          {/* Art 13 Reject Branch */}
          <path d="M 457 232 L 457 298" fill="none" stroke="#f43f5e" strokeWidth="1.4" markerEnd="url(#frArrowRose)" />
          <rect x="366" y="302" width="182" height="58" rx="8" fill="rgba(244,63,94,0.08)" stroke="#f43f5e" strokeOpacity="0.6" />
          <text x="457" y="320" textAnchor="middle" fill="#fda4af" fontSize="8.5" fontWeight="bold">STRUCK DOWN (ULTRA VIRES)</text>
          <text x="457" y="335" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">13(1) Eclipse · 13(2) Void ab initio</text>
          <text x="457" y="349" textAnchor="middle" fill="var(--text-muted)" fontSize="7">Severability preserves valid clauses</text>

          {/* Stage 1: Art 12 */}
          <g className="vector-node cursor-pointer" onClick={() => setActiveId('art-12')} transform="translate(178, 112)">
            <rect
              x="0"
              y="0"
              width="158"
              height="120"
              rx="10"
              fill={activeId === 'art-12' ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
              stroke={activeId === 'art-12' ? '#38bdf8' : 'var(--border-subtle)'}
              strokeWidth={activeId === 'art-12' ? '2' : '1'}
            />
            <rect x="12" y="12" width="38" height="16" rx="4" fill="rgba(56,189,248,0.14)" />
            <text x="31" y="23" textAnchor="middle" fill="#38bdf8" fontSize="8" fontWeight="bold">ART 12</text>
            <text x="12" y="47" fill="var(--text-primary)" fontSize="10.5" fontWeight="bold">1. "THE STATE"</text>
            <text x="12" y="63" fill="var(--text-secondary)" fontSize="8">Govt, Parliament &amp;</text>
            <text x="12" y="75" fill="var(--text-secondary)" fontSize="8">Other Authorities</text>
            <line x1="12" y1="88" x2="146" y2="88" stroke="var(--border-subtle)" />
            <text x="12" y="104" fill="#38bdf8" fontSize="7.5">Instrumentality Check →</text>
          </g>

          {/* Stage 2: Art 13 */}
          <g className="vector-node cursor-pointer" onClick={() => setActiveId('art-13')} transform="translate(380, 112)">
            <rect
              x="0"
              y="0"
              width="158"
              height="120"
              rx="10"
              fill={activeId === 'art-13' ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
              stroke={activeId === 'art-13' ? '#f43f5e' : 'var(--border-subtle)'}
              strokeWidth={activeId === 'art-13' ? '2' : '1'}
            />
            <rect x="12" y="12" width="38" height="16" rx="4" fill="rgba(244,63,94,0.14)" />
            <text x="31" y="23" textAnchor="middle" fill="#f43f5e" fontSize="8" fontWeight="bold">ART 13</text>
            <text x="12" y="47" fill="var(--text-primary)" fontSize="10.5" fontWeight="bold">2. REVIEW GATE</text>
            <text x="12" y="63" fill="var(--text-secondary)" fontSize="8">Inconsistent with</text>
            <text x="12" y="75" fill="var(--text-secondary)" fontSize="8">Part III Rights?</text>
            <line x1="12" y1="88" x2="146" y2="88" stroke="var(--border-subtle)" />
            <text x="12" y="104" fill="#fda4af" fontSize="7.5">Yes → Void / No → Proceed</text>
          </g>

          {/* Stage 3: Art 14 & Art 19 Split */}
          <g className="vector-node cursor-pointer" onClick={() => setActiveId('art-14')} transform="translate(582, 56)">
            <rect
              x="0"
              y="0"
              width="158"
              height="96"
              rx="10"
              fill={activeId === 'art-14' ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
              stroke={activeId === 'art-14' ? '#10b981' : 'var(--border-subtle)'}
              strokeWidth={activeId === 'art-14' ? '2' : '1'}
            />
            <rect x="12" y="10" width="42" height="15" rx="4" fill="rgba(16,185,129,0.14)" />
            <text x="33" y="20.5" textAnchor="middle" fill="#10b981" fontSize="7.5" fontWeight="bold">ART 14</text>
            <text x="12" y="42" fill="var(--text-primary)" fontSize="10" fontWeight="bold">3A. EQUALITY</text>
            <text x="12" y="56" fill="var(--text-secondary)" fontSize="7.8">Reasonable Class +</text>
            <text x="12" y="68" fill="var(--text-secondary)" fontSize="7.8">Non-Arbitrary (Royappa)</text>
            <text x="12" y="84" fill="#10b981" fontSize="7">All Persons Protected</text>
          </g>

          <g className="vector-node cursor-pointer" onClick={() => setActiveId('art-19')} transform="translate(582, 180)">
            <rect
              x="0"
              y="0"
              width="158"
              height="104"
              rx="10"
              fill={activeId === 'art-19' ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
              stroke={activeId === 'art-19' ? '#a855f7' : 'var(--border-subtle)'}
              strokeWidth={activeId === 'art-19' ? '2' : '1'}
            />
            <rect x="12" y="10" width="42" height="15" rx="4" fill="rgba(168,85,247,0.14)" />
            <text x="33" y="20.5" textAnchor="middle" fill="#a855f7" fontSize="7.5" fontWeight="bold">ART 19</text>
            <text x="12" y="42" fill="var(--text-primary)" fontSize="10" fontWeight="bold">3B. 6 FREEDOMS</text>
            <text x="12" y="56" fill="var(--text-secondary)" fontSize="7.8">Speech, Assembly, Union,</text>
            <text x="12" y="68" fill="var(--text-secondary)" fontSize="7.8">Move, Reside, Trade</text>
            <text x="12" y="88" fill="#c084fc" fontSize="7">Restricted ONLY by (2)-(6)</text>
          </g>

          {/* Curved Join into Golden Triangle */}
          <path d="M 740 104 Q 765 104 780 155" fill="none" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#frArrowEmerald)" />
          <path d="M 740 232 Q 765 232 780 190" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#frArrow)" />

          {/* Stage 4: Golden Triangle Node */}
          <g className="vector-node cursor-pointer" onClick={() => setActiveId('golden-triangle')} transform="translate(784, 86)">
            <rect
              x="0"
              y="0"
              width="172"
              height="172"
              rx="12"
              fill={activeId === 'golden-triangle' ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
              stroke={activeId === 'golden-triangle' ? 'var(--accent)' : 'var(--border-strong)'}
              strokeWidth={activeId === 'golden-triangle' ? '2' : '1.2'}
            />
            <text x="86" y="24" textAnchor="middle" fill="var(--text-muted)" fontSize="7.5" fontWeight="bold">CONSTITUTIONAL CORE</text>
            {/* Triangle inside node */}
            <polygon points="86,42 42,108 130,108" fill="none" stroke="var(--accent)" strokeWidth="1.4" />
            <circle cx="86" cy="42" r="11" fill="var(--bg-base)" stroke="#10b981" strokeWidth="1.5" />
            <text x="86" y="45" textAnchor="middle" fill="#10b981" fontSize="8" fontWeight="bold">14</text>
            <circle cx="42" cy="108" r="11" fill="var(--bg-base)" stroke="#a855f7" strokeWidth="1.5" />
            <text x="42" y="111" textAnchor="middle" fill="#a855f7" fontSize="8" fontWeight="bold">19</text>
            <circle cx="130" cy="108" r="11" fill="var(--bg-base)" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="130" y="111" textAnchor="middle" fill="#38bdf8" fontSize="8" fontWeight="bold">21</text>
            <text x="86" y="136" textAnchor="middle" fill="var(--text-primary)" fontSize="9.5" fontWeight="bold">GOLDEN TRIANGLE</text>
            <text x="86" y="150" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">Maneka Proportionality</text>
            <text x="86" y="162" textAnchor="middle" fill="var(--text-muted)" fontSize="7">Click to inspect test</text>
          </g>
        </svg>
      </div>

      {/* Stage Selector Bar */}
      <div className="flex flex-wrap gap-2">
        {FUNNEL_NODES.map((n) => {
          const isSelected = n.id === activeId;
          return (
            <button
              key={n.id}
              onClick={() => setActiveId(n.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono border transition-colors cursor-pointer ${
                isSelected
                  ? 'bg-[var(--accent)] text-[var(--accent-contrast)] border-[var(--accent)] font-bold'
                  : 'bg-[var(--bg-base)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
              }`}
            >
              {n.step}. {n.articles} ({n.shortTag})
            </button>
          );
        })}
      </div>

      {/* Active Callout & Jurisprudence Detail Drawer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)]">
              {current.articles}
            </span>
            <h4 className="text-base font-bold text-[var(--text-primary)]">{current.title}</h4>
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">{current.rule}</p>

          <div className="space-y-1.5 pt-1">
            {current.callouts.map((c, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                <ArrowRight className="w-3.5 h-3.5 text-[var(--accent)] shrink-0 mt-0.5" />
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-3 border-t lg:border-t-0 lg:border-l border-[var(--border-subtle)] pt-3 lg:pt-0 lg:pl-5">
          <div className="p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-1">
            <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] font-bold">
              <Scale className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>Governing Precedent</span>
            </div>
            <p className="text-xs font-medium text-[var(--text-primary)]">{current.landmarkCase}</p>
          </div>

          <div className="p-3 rounded-lg bg-rose-500/5 border border-rose-500/20 space-y-1">
            <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-rose-400 font-bold">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Prelims Examiner Trap</span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{current.examTrap}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
