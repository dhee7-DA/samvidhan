import React, { useState } from 'react';
import { MapPin, AlertTriangle, Scale } from 'lucide-react';

type SectionMode = 'territory' | 'citizenship';

export const TerritoryCitizenshipFlowSVG: React.FC = () => {
  const [mode, setMode] = useState<SectionMode>('territory');
  const [selectedKey, setSelectedKey] = useState<string>('art3');

  const CARDS: Record<string, { title: string; articles: string; rule: string; landmark: string; trap: string }> = {
    art2: {
      title: 'Article 2: External Territories Admitted / Established',
      articles: 'Article 2 & Art 4',
      rule: 'Empowers Parliament to admit into the Union, or establish, NEW States that were NOT already part of the Union of India (e.g., Sikkim via 35th/36th Amendments 1974–75; Puducherry/Goa).',
      landmark: 'R.C. Poudyal v. Union of India (1994) upheld Sikkim special assembly representation under Art 371F.',
      trap: 'Passing a law under Art 2 or Art 3 requires only SIMPLE MAJORITY and is NOT treated as an amendment under Art 368 (Art 4)!'
    },
    art3: {
      title: 'Article 3: Internal Reorganisation of Existing States',
      articles: 'Article 3 & Proviso',
      rule: 'Parliament may form a new State, alter boundaries, or change names of existing States. Safeguards: (1) Prior Presidential recommendation mandatory; (2) Referred to concerned State Legislature for views — NOT binding on President/Parliament!',
      landmark: 'In Re Article 370 (2023 · 5-Judge Bench) & Babulal Parate (1960): Views of State Legislature need not be accepted.',
      trap: 'India is an "Indestructible Union of Destructible States" (Art 1). Even if the State Assembly opposes bifurcation, Parliament CAN still split the State!'
    },
    berubari: {
      title: 'Cession vs. Boundary Demarcation Dispute',
      articles: 'Art 3 vs Art 368',
      rule: 'Diminishing the area of a State under Art 3 does NOT cover ceding Indian territory to a foreign country! Ceding territory requires a Constitutional Amendment under Art 368 (e.g., 9th Amd, 100th Amd India-Bangladesh LBA 2015).',
      landmark: 'In re Berubari Union (1960) & Maganbhai Patel (1969): Settling mere boundary ambiguity is Executive action.',
      trap: 'Ceding territory = Art 368 Special Majority Amendment. Settling boundary demarcation without cession = Executive Action (no amendment needed).'
    },
    acq: {
      title: '5 Modes of Acquiring Indian Citizenship (1955 Act)',
      articles: 'Articles 5–11 & Act 1955',
      rule: 'Articles 5–8 governed only commencement (26 Jan 1950); Parliament enacted the Citizenship Act 1955 under Art 11 providing 5 ongoing routes: (1) Birth, (2) Descent, (3) Registration, (4) Naturalisation, (5) Incorporation of Territory.',
      landmark: 'Sarbananda Sonowal v. UOI (2005) & Section 6A Assam Accord Bench (2024).',
      trap: 'SINGLE CITIZENSHIP (like UK): Unlike USA (dual Federal+State citizenship), Indians owe allegiance ONLY to the Union of India (zero State domicile citizenship).'
    },
    loss: {
      title: '3 Modes of Losing Citizenship & Art 9 Automatic Bar',
      articles: 'Article 9 & Secs 8–10 Act 1955',
      rule: 'Article 9 immediately terminates Indian citizenship if a citizen VOLUNTARILY acquires citizenship of a foreign country. Under Citizenship Act 1955, loss occurs by: (1) Renunciation, (2) Termination (acquiring foreign passport), (3) Deprivation (fraud/disloyalty).',
      landmark: 'State of AP v. Abdul Khader (1961): Foreign passport is prima facie proof decided by Central Govt under Sec 9(2).',
      trap: 'Citizenship falls exclusively in UNION LIST (Entry 17) — no State Legislature can confer or strip citizenship!'
    }
  };

  const cur = CARDS[selectedKey] || CARDS.art3;

  return (
    <div className="w-full flex flex-col gap-6 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] surface-specular">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <MapPin className="w-5 h-5 text-[var(--accent)]" />
            <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
              Parts I &amp; II: Territory Reorganisation &amp; Citizenship Vectors
            </h3>
            <span className="text-xs px-2 py-0.5 rounded font-mono bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
              Articles 1 – 11
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            Interactive decision tree contrasting Art 2, Art 3, and Berubari Art 368 cession, alongside the 1955 Citizenship acquisition/loss architecture.
          </p>
        </div>

        <div className="inline-flex p-1 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] shrink-0">
          <button
            onClick={() => {
              setMode('territory');
              setSelectedKey('art3');
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-colors cursor-pointer ${
              mode === 'territory'
                ? 'bg-[var(--accent)] text-[var(--accent-contrast)]'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            Part I · Territory
          </button>
          <button
            onClick={() => {
              setMode('citizenship');
              setSelectedKey('acq');
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-colors cursor-pointer ${
              mode === 'citizenship'
                ? 'bg-[var(--accent)] text-[var(--accent-contrast)]'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            Part II · Citizenship
          </button>
        </div>
      </div>

      {/* SVG Decision Flow */}
      <div className="w-full overflow-x-auto pb-2">
        <svg viewBox="0 0 960 320" className="w-full min-w-[740px] h-auto select-none font-mono">
          <defs>
            <pattern id="terGrid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.8" fill="var(--border-strong)" opacity="0.35" />
            </pattern>
            <marker id="terArrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 9 5 L 0 9 z" fill="var(--text-secondary)" />
            </marker>
          </defs>

          <rect x="0" y="0" width="960" height="320" rx="14" fill="var(--bg-base)" stroke="var(--border-subtle)" />
          <rect x="0" y="0" width="960" height="320" rx="14" fill="url(#terGrid)" />

          {mode === 'territory' ? (
            <g>
              {/* Origin: Art 1 India, that is Bharat */}
              <g transform="translate(30, 102)">
                <rect x="0" y="0" width="188" height="116" rx="12" fill="var(--bg-surface-elevated)" stroke="var(--accent)" strokeWidth="1.6" />
                <text x="94" y="28" textAnchor="middle" fill="var(--accent)" fontSize="9" fontWeight="bold">ARTICLE 1 UNION</text>
                <text x="94" y="48" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontWeight="bold">UNION OF STATES</text>
                <text x="94" y="68" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.8">1. States (28)</text>
                <text x="94" y="82" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.8">2. Union Territories (8)</text>
                <text x="94" y="96" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.8">3. Acquired Territories</text>
              </g>

              {/* Routing Lines */}
              <path d="M 218 130 L 300 72" fill="none" stroke="#38bdf8" strokeWidth="1.6" markerEnd="url(#terArrow)" />
              <path d="M 218 160 L 300 160" fill="none" stroke="#10b981" strokeWidth="1.6" markerEnd="url(#terArrow)" />
              <path d="M 218 190 L 300 248" fill="none" stroke="#f43f5e" strokeWidth="1.6" markerEnd="url(#terArrow)" />

              {/* Track 1: Art 2 */}
              <g className="cursor-pointer vector-node" onClick={() => setSelectedKey('art2')} transform="translate(304, 30)">
                <rect
                  x="0"
                  y="0"
                  width="380"
                  height="78"
                  rx="10"
                  fill={selectedKey === 'art2' ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
                  stroke={selectedKey === 'art2' ? '#38bdf8' : 'var(--border-subtle)'}
                  strokeWidth={selectedKey === 'art2' ? '2' : '1'}
                />
                <text x="16" y="24" fill="#38bdf8" fontSize="9.5" fontWeight="bold">ARTICLE 2 · EXTERNAL ACQUISITION</text>
                <text x="16" y="44" fill="var(--text-primary)" fontSize="8.5">Admit / Establish NEW external territories into India</text>
                <text x="16" y="62" fill="var(--text-muted)" fontSize="7.5">e.g. Sikkim (1975) · Simple Majority under Art 4</text>
              </g>

              {/* Track 2: Art 3 */}
              <g className="cursor-pointer vector-node" onClick={() => setSelectedKey('art3')} transform="translate(304, 121)">
                <rect
                  x="0"
                  y="0"
                  width="380"
                  height="78"
                  rx="10"
                  fill={selectedKey === 'art3' ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
                  stroke={selectedKey === 'art3' ? '#10b981' : 'var(--border-subtle)'}
                  strokeWidth={selectedKey === 'art3' ? '2' : '1'}
                />
                <text x="16" y="24" fill="#10b981" fontSize="9.5" fontWeight="bold">ARTICLE 3 · INTERNAL REORGANISATION</text>
                <text x="16" y="44" fill="var(--text-primary)" fontSize="8.5">Split/Merge existing States + Change name/area</text>
                <text x="16" y="62" fill="var(--text-muted)" fontSize="7.5">Pres. Rec Req · State View Non-Binding · Art 4 Simple Maj.</text>
              </g>

              {/* Track 3: Berubari Cession */}
              <g className="cursor-pointer vector-node" onClick={() => setSelectedKey('berubari')} transform="translate(304, 212)">
                <rect
                  x="0"
                  y="0"
                  width="380"
                  height="78"
                  rx="10"
                  fill={selectedKey === 'berubari' ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
                  stroke={selectedKey === 'berubari' ? '#f43f5e' : 'var(--border-subtle)'}
                  strokeWidth={selectedKey === 'berubari' ? '2' : '1'}
                />
                <text x="16" y="24" fill="#f43f5e" fontSize="9.5" fontWeight="bold">BERUBARI RULE · CESSION TO FOREIGN STATE</text>
                <text x="16" y="44" fill="var(--text-primary)" fontSize="8.5">Giving Indian territory to foreign nation ≠ Art 3!</text>
                <text x="16" y="62" fill="#fda4af" fontSize="7.5">MUST use Art 368 Special Majority (9th &amp; 100th Amds)</text>
              </g>

              {/* Right Callout Pillars */}
              <line x1="684" y1="69" x2="726" y2="110" stroke="#38bdf8" strokeWidth="1.2" markerEnd="url(#terArrow)" />
              <line x1="684" y1="160" x2="726" y2="140" stroke="#10b981" strokeWidth="1.2" markerEnd="url(#terArrow)" />

              <g transform="translate(730, 56)">
                <rect x="0" y="0" width="200" height="122" rx="10" fill="var(--bg-surface-elevated)" stroke="#10b981" strokeOpacity="0.6" />
                <text x="100" y="26" textAnchor="middle" fill="#10b981" fontSize="9" fontWeight="bold">ART 4 SHIELD</text>
                <text x="100" y="48" textAnchor="middle" fill="var(--text-primary)" fontSize="9">Not deemed an</text>
                <text x="100" y="64" textAnchor="middle" fill="var(--text-primary)" fontSize="9">Art 368 Amendment</text>
                <text x="100" y="88" textAnchor="middle" fill="var(--text-muted)" fontSize="7.5">Auto-updates 1st &amp; 4th</text>
                <text x="100" y="102" textAnchor="middle" fill="var(--text-muted)" fontSize="7.5">Schedules by Simple Maj.</text>
              </g>

              <g transform="translate(730, 200)">
                <rect x="0" y="0" width="200" height="88" rx="10" fill="var(--bg-surface)" stroke="#f43f5e" strokeOpacity="0.5" />
                <text x="100" y="26" textAnchor="middle" fill="#f43f5e" fontSize="9" fontWeight="bold">368 COMPULSORY</text>
                <text x="100" y="48" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Special Majority</text>
                <text x="100" y="66" textAnchor="middle" fill="var(--text-muted)" fontSize="7.5">(Boundary Fix = Executive)</text>
              </g>
            </g>
          ) : (
            <g>
              {/* Part II Citizenship Flow */}
              <g className="cursor-pointer vector-node" onClick={() => setSelectedKey('acq')} transform="translate(36, 36)">
                <rect
                  x="0"
                  y="0"
                  width="425"
                  height="248"
                  rx="12"
                  fill={selectedKey === 'acq' ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
                  stroke={selectedKey === 'acq' ? '#10b981' : 'var(--border-subtle)'}
                  strokeWidth={selectedKey === 'acq' ? '2' : '1'}
                />
                <text x="20" y="28" fill="#10b981" fontSize="10" fontWeight="bold">✓ 5 MODES OF ACQUISITION (1955 ACT)</text>
                <line x1="20" y1="38" x2="405" y2="38" stroke="var(--border-subtle)" />

                {[
                  { n: '1. BY BIRTH', s: 'Soil criterion tightened in 1987 & 2004 (Jus Soli + Sang.)' },
                  { n: '2. BY DESCENT', s: 'Born abroad to Indian parent (Reg. within 1 yr)' },
                  { n: '3. BY REGISTRATION', s: 'Indian origin / married to citizen (7 yrs residence)' },
                  { n: '4. BY NATURALISATION', s: '11 yrs ordinary residence + good character + 8th Sch. lang' },
                  { n: '5. TERRITORY MERGER', s: 'Central Govt notifies citizens (e.g. Pondicherry 1962)' }
                ].map((item, idx) => (
                  <g key={idx} transform={`translate(20, ${52 + idx * 37})`}>
                    <rect x="0" y="0" width="385" height="29" rx="6" fill="var(--bg-base)" stroke="var(--border-subtle)" />
                    <text x="10" y="18" fill="var(--text-primary)" fontSize="8" fontWeight="bold">{item.n}:</text>
                    <text x="122" y="18" fill="var(--text-secondary)" fontSize="7.4">{item.s}</text>
                  </g>
                ))}
              </g>

              {/* Connecting Bridge */}
              <line x1="461" y1="160" x2="498" y2="160" stroke="var(--border-strong)" strokeWidth="2" markerEnd="url(#terArrow)" />

              {/* Right: Loss Modes & Constitutional Articles 5-11 */}
              <g className="cursor-pointer vector-node" onClick={() => setSelectedKey('loss')} transform="translate(502, 36)">
                <rect
                  x="0"
                  y="0"
                  width="422"
                  height="248"
                  rx="12"
                  fill={selectedKey === 'loss' ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
                  stroke={selectedKey === 'loss' ? '#f43f5e' : 'var(--border-subtle)'}
                  strokeWidth={selectedKey === 'loss' ? '2' : '1'}
                />
                <text x="20" y="28" fill="#f43f5e" fontSize="10" fontWeight="bold">✗ 3 MODES OF LOSS &amp; ART 9 SINGLE CITIZENSHIP</text>
                <line x1="20" y1="38" x2="402" y2="38" stroke="var(--border-subtle)" />

                {[
                  { n: '1. RENUNCIATION', s: 'Voluntary declaration (suspended during war!)' },
                  { n: '2. TERMINATION (Art 9)', s: 'Automatic loss upon acquiring foreign nationality' },
                  { n: '3. DEPRIVATION', s: 'Compulsory Govt cancellation for fraud / disloyalty' }
                ].map((item, idx) => (
                  <g key={idx} transform={`translate(20, ${54 + idx * 42})`}>
                    <rect x="0" y="0" width="382" height="34" rx="6" fill="rgba(244,63,94,0.08)" stroke="#f43f5e" strokeOpacity="0.35" />
                    <text x="12" y="14" fill="#fda4af" fontSize="8" fontWeight="bold">{item.n}</text>
                    <text x="12" y="27" fill="var(--text-secondary)" fontSize="7.5">{item.s}</text>
                  </g>
                ))}

                <rect x="20" y="186" width="382" height="46" rx="8" fill="var(--bg-base)" stroke="#38bdf8" strokeOpacity="0.4" />
                <text x="32" y="205" fill="#38bdf8" fontSize="8.5" fontWeight="bold">ART 11 PLENARY PARLIAMENT POWER</text>
                <text x="32" y="220" fill="var(--text-muted)" fontSize="7.5">Union List Entry 17 • OCI holders CANNOT vote or hold Const. offices</text>
              </g>
            </g>
          )}
        </svg>
      </div>

      {/* Inspector */}
      <div className="p-5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-7 space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)]">
              {cur.articles}
            </span>
            <h4 className="text-base font-bold text-[var(--text-primary)]">{cur.title}</h4>
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">{cur.rule}</p>
          <div className="flex items-center gap-1.5 text-xs text-[var(--text-primary)] pt-1">
            <Scale className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
            <span>{cur.landmark}</span>
          </div>
        </div>

        <div className="lg:col-span-5 p-3.5 rounded-lg bg-rose-500/5 border border-rose-500/20 space-y-1">
          <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase font-bold text-rose-400">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>High-Yield Exam Trap</span>
          </div>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{cur.trap}</p>
        </div>
      </div>
    </div>
  );
};
