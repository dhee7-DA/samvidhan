import React, { useState } from 'react';
import {
  Shield,
  Scale,
  Award,
  AlertTriangle,
  Clock,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  ArrowRight,
  Gavel,
  BookOpen,
  FileText,
  UserCheck,
  Zap,
  Lock,
  Unlock
} from 'lucide-react';

interface ClemencyDimension {
  id: string;
  dimensionNumber: string;
  title: string;
  articles: string;
  bnssCrossReference: string;
  landmarkPrecedents: string;
  summary: string;
  corePrinciples: string[];
  statutoryDifferences: {
    president: string;
    governor: string;
  };
  prosecutorChecklist: string[];
  color: string;
}

const DIMENSIONS: ClemencyDimension[] = [
  {
    id: 'scope-territory',
    dimensionNumber: '01',
    title: 'Constitutional Scope & Federal Division',
    articles: 'Art 72(1)(a), (b), (c) vs Art 161',
    bnssCrossReference: 'Section 472 BNSS (former 432 CrPC) • Executive Power Extent (Arts 73 & 162)',
    landmarkPrecedents: 'State of Tamil Nadu v. Santhan (2014) • Govt. of NCT of Delhi v. Prem Raj (2003)',
    summary: 'Constitutional division of clemency authority between the Union Executive (President) and the State Executive (Governor), demarcating subject-matter competencies and death-penalty authority.',
    corePrinciples: [
      'Court-Martial Clemency: President alone possesses sovereign clemency power over punishments or sentences inflicted by a Court Martial (Art 72(1)(a)). Governor has zero jurisdiction over military courts.',
      'Union vs State Legislative Sphere: President exercises clemency in offences against laws relating to matters to which the executive power of the Union extends (List I and concurrent matters governed by Central laws). Governor exercises clemency where State executive power extends (List II and state-governed subjects).',
      'Death Sentence Division: President can grant a full "Pardon" for death sentences. Governor cannot grant complete pardon for capital punishment, but possesses concurrent constitutional power to suspend, remit, or commute death sentences under Article 161.'
    ],
    statutoryDifferences: {
      president: 'Court-Martial sentences + Union laws + Exclusive authority to grant full absolute PARDON in capital (death) cases.',
      governor: 'State laws + Cannot grant complete pardon for death sentence, but can COMMUTE, REMIT, or SUSPEND death sentences (Art 161).'
    },
    prosecutorChecklist: [
      'Verify whether the penal enactment falls under Union competence (e.g. UAPA, PC Act, NDPS) or State competence when challenging jurisdiction.',
      'Remember: A rejection of mercy petition by the Governor under Art 161 does NOT bar the convict from submitting a subsequent petition before the President under Art 72.'
    ],
    color: 'var(--accent)'
  },
  {
    id: 'five-forms',
    dimensionNumber: '02',
    title: 'The 5 Constitutional Forms of Clemency',
    articles: 'Articles 72 & 161 (Pardon, Commutation, Remission, Respite, Reprieve)',
    bnssCrossReference: 'Sections 472, 473, 474 BNSS (former 432, 433, 433A CrPC)',
    landmarkPrecedents: 'Sarat Chandra Rabha v. Khagendranath (1961) • Kehar Singh v. Union of India (1989)',
    summary: 'The five distinct constitutional instruments of clemency, each producing radically different legal consequences regarding conviction status, civil disqualifications, and sentence length.',
    corePrinciples: [
      'PARDON: Completely exonerates both the sentence and the conviction. Restores the offender to the status of an innocent citizen as if the crime was never committed; eliminates all disqualifications (e.g. electoral disqualification under RPA 1951).',
      'COMMUTATION: Substitutes a heavier punishment for a lighter form authorized by law (e.g. death sentence commuted to rigorous life imprisonment, or rigorous imprisonment commuted to simple imprisonment).',
      'REMISSION: Reduces the amount or duration of the sentence without altering its legal character or nature (e.g. 10 years rigorous imprisonment reduced to 7 years rigorous imprisonment). Conviction remains intact.',
      'RESPITE: Postpones or awards a lesser sentence on special compassionate grounds (e.g. pregnancy of female convict, severe post-conviction mental impairment, acute terminal illness).',
      'REPRIEVE: Grants a temporary stay or postponement of the execution of a sentence (most commonly capital punishment) to enable the convict to pursue legal remedies or mercy petitions.'
    ],
    statutoryDifferences: {
      president: 'Can invoke all 5 forms across Union offences, court-martials, and capital punishment.',
      governor: 'Can invoke Commutation, Remission, Respite, and Reprieve across State offences and death sentences, but full absolute Pardon excludes capital cases.'
    },
    prosecutorChecklist: [
      'Remission of sentence under Art 72/161 or Sec 472 BNSS does NOT wipe out disqualification under Section 8 of the Representation of the People Act, 1951 (Sarat Chandra Rabha). Only a PARDON clears disqualification.',
      'Check whether the defense is praying for statutory remission under jail rules or sovereign constitutional clemency.'
    ],
    color: 'var(--gold)'
  },
  {
    id: 'cabinet-advice',
    dimensionNumber: '03',
    title: 'Mandatory Aid & Advice of Council of Ministers',
    articles: 'Art 72 r/w Art 74(1) & Art 161 r/w Art 163(1)',
    bnssCrossReference: 'Union MHA Mercy Guidelines • State Home Department Prison Rules',
    landmarkPrecedents: 'Maru Ram v. Union of India (1980) • Shamsher Singh (1974) • Kehar Singh (1989)',
    summary: 'Neither the President nor the Governor acts on personal whims, mercy, or individual discretion. Sovereign clemency is an executive power exercised strictly on the binding advice of the Council of Ministers.',
    corePrinciples: [
      'Constitutional Head Principle: The President or Governor acts solely on the aid and advice of the Union Cabinet (MHA) or State Council of Ministers. A personal grant of pardon without cabinet advice is ultra vires (Maru Ram per Krishna Iyer, J.).',
      'De Novo Case Record Scrutiny: The Executive has the constitutional competence to re-examine the evidentiary record de novo, evaluate socioeconomic background, post-conviction conduct, or family destitution, and arrive at a different conclusion from the judiciary (Kehar Singh).',
      'No Right to Oral Hearing: A convict has no fundamental or natural justice right to be heard orally in person by the President or Governor. Scrutiny of written representations and case records fully satisfies due process.'
    ],
    statutoryDifferences: {
      president: 'Union Home Ministry examines mercy petitions, seeks State comments, and submits binding recommendation to President under Art 74.',
      governor: 'State Home Department and Chief Minister submit binding cabinet advice to Governor under Art 163.'
    },
    prosecutorChecklist: [
      'Ensure the Public Prosecutor / District Magistrate report forwarded to the Home Department clearly records the heinousness of the crime and victim impact.',
      'Ensure that all original trial records and High Court/Supreme Court judgments are placed before the Cabinet to prevent claims of non-application of mind.'
    ],
    color: 'var(--emerald)'
  },
  {
    id: 'statutory-primacy',
    dimensionNumber: '04',
    title: 'Primacy Over Statutory Remission Bars (Sec 473 BNSS)',
    articles: 'Arts 72 & 161 vs Section 473 BNSS (former 433A CrPC)',
    bnssCrossReference: 'Section 473 BNSS (Mandatory 14-year minimum incarceration for life convicts)',
    landmarkPrecedents: 'State of Haryana v. Raj Kumar @ Bittu (2021) • A.G. Perarivalan (2022) • Bilkis Bano (2024)',
    summary: 'Constitutional clemency powers under Articles 72 & 161 override statutory restrictions like Section 473 BNSS (former 433A CrPC), enabling premature release before 14 years when constitutionally justified.',
    corePrinciples: [
      'The 14-Year Statutory Bar Overridden: Section 473 BNSS mandates that where a sentence of death is commuted to life imprisonment, or where life imprisonment was imposed for a death-eligible offence, the convict cannot be released before 14 years actual custody. However, the Supreme Court ruled in Raj Kumar (2021) and Perarivalan (2022) that Article 161 overrides this statutory limitation!',
      'Statutory vs Sovereign Clemency: While statutory remissions granted by prison authorities under Sec 472 BNSS are bound by the 14-year ceiling of Sec 473 BNSS, constitutional clemency by the Governor or President is unfettered by statutory limits.',
      'Sentencing State Rule (Bilkis Bano 2024): The "appropriate government" competent to grant remission is the Government of the State where the accused was tried and sentenced, NOT the State where the offence took place or where the convict is incarcerated.'
    ],
    statutoryDifferences: {
      president: 'Can grant remission at any stage of incarceration; not bound by Section 473 BNSS / 433A CrPC.',
      governor: 'Can exercise Article 161 remission even before 14 years of actual imprisonment are completed (Raj Kumar 2021).'
    },
    prosecutorChecklist: [
      'In premature release hearings, verify whether the release order is founded on statutory Jail Manual rules (where Sec 473 BNSS strictly applies) or constitutional Article 161 orders.',
      'Jurisdictional verification: If a trial was transferred out of state by the Supreme Court, the transferor state has zero jurisdiction to grant remission (Bilkis Bano 2024).'
    ],
    color: 'var(--blue)'
  },
  {
    id: 'judicial-review',
    dimensionNumber: '05',
    title: 'Judicial Review & Anti-Delay Protections',
    articles: 'Arts 32, 226 & 21 (Dignity, Due Process & Right to Life)',
    bnssCrossReference: 'Death Warrant Guidelines • Prison Manual Solitary Confinement Bar',
    landmarkPrecedents: 'Epuru Sudhakar (2006) • Shatrughan Chauhan (2014) • Sunil Batra (1978)',
    summary: 'Executive clemency is subject to limited judicial review against arbitrariness, and inordinate unexplained executive delay in deciding mercy petitions entitles convicts to commutation under Article 21.',
    corePrinciples: [
      '5 Grounds of Judicial Review (Epuru Sudhakar 2006): While courts cannot substitute their wisdom for the President’s discretion, clemency orders can be quashed if: (1) Order passed without application of mind, (2) Order is mala fide, (3) Passed on extraneous or irrelevant considerations, (4) Relevant material withheld, (5) Order is arbitrary or politically partisan.',
      'Anti-Inordinate Delay Rule (Shatrughan Chauhan 2014): Unexplained, prolonged executive delay (e.g. 5-10 years) in deciding a mercy petition inflicts excruciating agony and dehumanizing mental torture, violating Article 21. Such delay constitutes a supervening circumstance mandating commutation of death to life imprisonment.',
      'Execution Procedural Safeguards: Solitary confinement before rejection of mercy petition is unconstitutional. Minimum mandatory 14-day gap must be provided between receipt of mercy rejection notice and the date of execution to allow meeting family and challenging the rejection.'
    ],
    statutoryDifferences: {
      president: 'Union MHA delays are scrutinized strictly under Art 21; unexplained delay invalidates death execution.',
      governor: 'Governor’s indefinite sitting on clemency advice can be judicially redressed by the Supreme Court invoking Art 142 (Perarivalan 2022).'
    },
    prosecutorChecklist: [
      'Monitor mercy petition timelines proactively to ensure government does not create a supervening delay ground under Shatrughan Chauhan.',
      'Verify that death convict was provided free legal aid and copy of rejection order with all relevant reasons.'
    ],
    color: 'var(--purple)'
  }
];

export const ExecutiveClemencyArchitectureSVG: React.FC = () => {
  const [selectedDimensionId, setSelectedDimensionId] = useState<string>('scope-territory');

  const selectedDimension =
    DIMENSIONS.find((d) => d.id === selectedDimensionId) || DIMENSIONS[0];

  return (
    <div className="w-full flex flex-col gap-6 animate-fadeIn">
      {/* Blueprint Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            <h3 className="text-sm sm:text-base font-bold text-[var(--text-primary)]">
              Executive Clemency Architecture & Judicial Scrutiny
            </h3>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
              Art 72 (President) vs Art 161 (Governor) ⟷ Sec 473 BNSS
            </span>
          </div>
          <p className="text-xs text-[var(--text-secondary)]">
            Interactive comparative blueprint of executive pardoning power, cabinet supremacy, statutory remission primacy, and judicial review safeguards.
          </p>
        </div>
      </div>

      {/* Interactive Vector Canvas */}
      <div className="w-full bg-[var(--bg-base)] border border-[var(--border-subtle)] rounded-xl p-4 overflow-x-auto shadow-inner">
        <svg
          viewBox="0 0 1000 360"
          className="w-full min-w-[850px] h-auto select-none"
        >
          <defs>
            <linearGradient id="clemencyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.85" />
              <stop offset="25%" stopColor="var(--gold)" stopOpacity="0.85" />
              <stop offset="50%" stopColor="var(--emerald)" stopOpacity="0.85" />
              <stop offset="75%" stopColor="var(--blue)" stopOpacity="0.85" />
              <stop offset="100%" stopColor="var(--purple)" stopOpacity="0.85" />
            </linearGradient>

            <filter id="clemencyGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="currentColor" floodOpacity="0.35" />
            </filter>
          </defs>

          {/* Top Comparison Header: Union vs State */}
          <rect
            x="40"
            y="20"
            width="440"
            height="50"
            rx="8"
            fill="var(--bg-surface-elevated)"
            stroke="var(--accent)"
            strokeWidth="1.5"
            strokeDasharray="4 2"
          />
          <text
            x="60"
            y="42"
            fill="var(--accent)"
            fontSize="12"
            fontWeight="bold"
            fontFamily="monospace"
          >
            ARTICLE 72: THE PRESIDENT (UNION)
          </text>
          <text
            x="60"
            y="58"
            fill="var(--text-secondary)"
            fontSize="10"
            fontFamily="sans-serif"
          >
            Union Laws • Court-Martial • Exclusive Capital Full Pardon
          </text>

          <rect
            x="520"
            y="20"
            width="440"
            height="50"
            rx="8"
            fill="var(--bg-surface-elevated)"
            stroke="var(--blue)"
            strokeWidth="1.5"
            strokeDasharray="4 2"
          />
          <text
            x="540"
            y="42"
            fill="var(--blue)"
            fontSize="12"
            fontWeight="bold"
            fontFamily="monospace"
          >
            ARTICLE 161: THE GOVERNOR (STATE)
          </text>
          <text
            x="540"
            y="58"
            fill="var(--text-secondary)"
            fontSize="10"
            fontFamily="sans-serif"
          >
            State Laws • Overrides 473 BNSS • Commutes Death Sentences
          </text>

          {/* Main Connecting Conduit */}
          <path
            d="M 100 170 L 900 170"
            stroke="url(#clemencyGrad)"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Directional Flow Chevrons */}
          {[200, 400, 600, 800].map((xPos, idx) => (
            <polygon
              key={idx}
              points={`${xPos},165 ${xPos + 10},170 ${xPos},175`}
              fill="var(--text-muted)"
              opacity="0.6"
            />
          ))}

          {/* 5 Dimension Interactive Nodes */}
          {DIMENSIONS.map((dim, idx) => {
            const x = 100 + idx * 200;
            const y = 170;
            const isSelected = selectedDimensionId === dim.id;

            return (
              <g
                key={dim.id}
                onClick={() => setSelectedDimensionId(dim.id)}
                className="cursor-pointer transition-all duration-200 group"
              >
                {/* Outer Glow Ring */}
                <circle
                  cx={x}
                  cy={y}
                  r={isSelected ? 42 : 34}
                  fill="var(--bg-surface-elevated)"
                  stroke={isSelected ? dim.color : 'var(--border-strong)'}
                  strokeWidth={isSelected ? 3 : 2}
                  filter={isSelected ? 'url(#clemencyGlow)' : undefined}
                  className="transition-all duration-200"
                />

                {/* Inner Core */}
                <circle
                  cx={x}
                  cy={y}
                  r={isSelected ? 32 : 26}
                  fill={isSelected ? `${dim.color}25` : 'var(--bg-surface)'}
                  stroke={isSelected ? dim.color : 'var(--border-subtle)'}
                  strokeWidth="1.5"
                />

                {/* Node Number */}
                <text
                  x={x}
                  y={y + 5}
                  textAnchor="middle"
                  fill={isSelected ? dim.color : 'var(--text-secondary)'}
                  fontSize={isSelected ? '14' : '12'}
                  fontWeight="bold"
                  fontFamily="monospace"
                >
                  {dim.dimensionNumber}
                </text>

                {/* Node Label Top */}
                <text
                  x={x}
                  y={y - 50}
                  textAnchor="middle"
                  fill={isSelected ? 'var(--text-primary)' : 'var(--text-secondary)'}
                  fontSize="11"
                  fontWeight={isSelected ? 'bold' : 'normal'}
                  fontFamily="sans-serif"
                >
                  {dim.title.split('&')[0].trim()}
                </text>

                {/* Node Articles Sub-label Bottom */}
                <text
                  x={x}
                  y={y + 60}
                  textAnchor="middle"
                  fill="var(--text-muted)"
                  fontSize="9.5"
                  fontFamily="monospace"
                >
                  {dim.articles.split('vs')[0].trim()}
                </text>

                {/* Selection Pointer indicator */}
                {isSelected && (
                  <polygon
                    points={`${x - 6},${y + 75} ${x + 6},${y + 75} ${x},${y + 70}`}
                    fill={dim.color}
                  />
                )}
              </g>
            );
          })}

          {/* Bottom Pillar Footnote Tags */}
          <g transform="translate(0, 310)">
            <rect
              x="50"
              y="0"
              width="270"
              height="34"
              rx="6"
              fill="var(--bg-surface)"
              stroke="var(--border-subtle)"
            />
            <text x="65" y="21" fill="var(--text-secondary)" fontSize="10" fontFamily="sans-serif">
              ⚖️ Maru Ram (1980): Cabinet Advice Binding
            </text>

            <rect
              x="365"
              y="0"
              width="270"
              height="34"
              rx="6"
              fill="var(--bg-surface)"
              stroke="var(--border-subtle)"
            />
            <text x="380" y="21" fill="var(--text-secondary)" fontSize="10" fontFamily="sans-serif">
              ⚡ Raj Kumar (2021): Art 161 Overrides 473 BNSS
            </text>

            <rect
              x="680"
              y="0"
              width="270"
              height="34"
              rx="6"
              fill="var(--bg-surface)"
              stroke="var(--border-subtle)"
            />
            <text x="695" y="21" fill="var(--text-secondary)" fontSize="10" fontFamily="sans-serif">
              🛡️ Shatrughan Chauhan: Delay = Art 21 Commutation
            </text>
          </g>
        </svg>
      </div>

      {/* Interactive Stage Detail Card */}
      <div className="flex flex-col gap-5 p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-strong)] shadow-md">
        {/* Stage Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-3">
            <span
              className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-mono font-bold shrink-0 shadow-sm"
              style={{
                backgroundColor: `${selectedDimension.color}20`,
                color: selectedDimension.color,
                border: `1.5px solid ${selectedDimension.color}`
              }}
            >
              {selectedDimension.dimensionNumber}
            </span>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h4 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
                  {selectedDimension.title}
                </h4>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
                  {selectedDimension.articles}
                </span>
              </div>
              <p className="text-xs text-[var(--text-muted)] font-mono mt-0.5">
                BNSS / Law Ref: {selectedDimension.bnssCrossReference}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 self-start sm:self-auto px-3 py-1 rounded-full bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-secondary)]">
            <Award className="w-3.5 h-3.5 text-[var(--gold)]" />
            <span>High-Yield Mains Topic</span>
          </div>
        </div>

        {/* Precedents Summary */}
        <div className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex items-start gap-2.5">
          <Gavel className="w-4 h-4 text-[var(--accent)] mt-0.5 shrink-0" />
          <div className="flex flex-col gap-0.5">
            <span className="text-[11px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
              Landmark Judicial Authorities:
            </span>
            <p className="text-xs font-mono text-[var(--text-primary)]">
              {selectedDimension.landmarkPrecedents}
            </p>
          </div>
        </div>

        {/* Overview Summary */}
        <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed">
          {selectedDimension.summary}
        </p>

        {/* President vs Governor Statutory Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="p-3.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--accent)]/30 flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[var(--accent)]" />
              <span className="text-xs font-bold text-[var(--accent)] uppercase font-mono">
                Presidential Mandate (Art 72)
              </span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              {selectedDimension.statutoryDifferences.president}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--blue)]/30 flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-[var(--blue)]" />
              <span className="text-xs font-bold text-[var(--blue)] uppercase font-mono">
                Gubernatorial Mandate (Art 161)
              </span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              {selectedDimension.statutoryDifferences.governor}
            </p>
          </div>
        </div>

        {/* Two-Column Deep Breakdown: Principles & Prosecutor Checklist */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-1">
          {/* Core Principles */}
          <div className="flex flex-col gap-2.5 p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
            <div className="flex items-center gap-2 text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono">
              <BookOpen className="w-4 h-4 text-[var(--emerald)]" />
              <span>Constitutional Principles & Doctrines</span>
            </div>
            <ul className="flex flex-col gap-2">
              {selectedDimension.corePrinciples.map((rule, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs text-[var(--text-secondary)] leading-relaxed"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--emerald)] mt-0.5 shrink-0" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Prosecutor Checklist */}
          <div className="flex flex-col gap-2.5 p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
            <div className="flex items-center gap-2 text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono">
              <UserCheck className="w-4 h-4 text-[var(--gold)]" />
              <span>Prosecutor & Courtroom Scrutiny Checklist</span>
            </div>
            <ul className="flex flex-col gap-2">
              {selectedDimension.prosecutorChecklist.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs text-[var(--text-secondary)] leading-relaxed"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[var(--gold)] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quick Stage Selector Bar */}
        <div className="flex items-center justify-between pt-3 border-t border-[var(--border-subtle)] flex-wrap gap-2">
          <span className="text-xs text-[var(--text-muted)] font-mono">
            Explore All 5 Clemency Dimensions:
          </span>
          <div className="flex items-center gap-1.5 flex-wrap">
            {DIMENSIONS.map((dim) => (
              <button
                key={dim.id}
                onClick={() => setSelectedDimensionId(dim.id)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors ${
                  selectedDimensionId === dim.id
                    ? 'bg-[var(--accent)] text-[var(--bg-base)] font-bold'
                    : 'bg-[var(--bg-base)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]'
                }`}
              >
                {dim.dimensionNumber}. {dim.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
