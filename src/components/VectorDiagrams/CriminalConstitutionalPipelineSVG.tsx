import React, { useState } from 'react';
import {
  Shield,
  AlertOctagon,
  Scale,
  FileText,
  Lock,
  Unlock,
  UserCheck,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  ArrowRight,
  Gavel
} from 'lucide-react';

interface StageDetail {
  id: string;
  stageNumber: string;
  title: string;
  articles: string;
  bnssCrossReference: string;
  landmarkPrecedents: string;
  summary: string;
  statutoryRules: string[];
  prosecutorChecklist: string[];
  color: string;
}

const STAGES: StageDetail[] = [
  {
    id: 'arrest-safeguards',
    stageNumber: '01',
    title: 'Arrest & Custodial Inception',
    articles: 'Article 22(1) & 22(2)',
    bnssCrossReference: 'Sections 35, 47, 58 BNSS (former 41, 50, 57 CrPC)',
    landmarkPrecedents: 'D.K. Basu (1997) • Arnesh Kumar (2014) • Pankaj Bansal (2023) • Prabir Purkayastha (2024)',
    summary: 'The critical entry gate into the criminal justice process. Arrest is an exceptional deprivation of personal liberty that requires strict compliance with written notice and judicial oversight within 24 hours.',
    statutoryRules: [
      'Written grounds of arrest must be contemporaneously furnished to the accused without exception (Pankaj Bansal & Prabir Purkayastha).',
      'Mandatory Section 35(3) BNSS notice for offences punishable up to 7 years; arrest must not be mechanical (Arnesh Kumar).',
      'Mandatory production before the nearest Judicial Magistrate within 24 hours excluding journey time (Art 22(2) & Sec 58 BNSS).',
      'Intimation of arrest to a relative or friend and medical examination upon arrest (Sec 39 & 53 BNSS).'
    ],
    prosecutorChecklist: [
      'Inspect case diary for proof of written grounds of arrest delivery.',
      'Verify that 24-hour statutory clock is documented with exact station GD entry timestamps.',
      'Check whether female arrest was made between sunrise and sunset under Sec 35(7) BNSS.'
    ],
    color: 'var(--accent)'
  },
  {
    id: 'forensic-boundary',
    stageNumber: '02',
    title: 'Self-Incrimination & Forensic Discovery',
    articles: 'Article 20(3) & 21',
    bnssCrossReference: 'Sections 53, 53A BNSS • Section 23 BSA (former 27 IEA)',
    landmarkPrecedents: 'State of Bombay v. Kathi Kalu Oghad (1961) • Selvi v. State of Karnataka (2010)',
    summary: 'Delineates the absolute constitutional boundary between non-consensual cognitive intrusion (strictly barred) and physical forensic evidence (permitted under law).',
    statutoryRules: [
      'Involuntary Narco-analysis, Polygraph (Lie-Detector), and Brain Electrical Activation Profile (BEAP) violate Art 20(3) and Art 21 bodily privacy (Selvi).',
      'Physical biometric evidence: Specimen handwriting, fingerprints, voice exemplars, and DNA samples are not "testimonial compulsion" and are valid (Kathi Kalu Oghad).',
      'Recovery of physical objects (weapons, stolen property) discovered on information from accused is admissible under Section 23 BSA, but custodial confessions remain inadmissible.'
    ],
    prosecutorChecklist: [
      'Never rely on involuntary narco-analysis reports as primary evidence in the chargesheet.',
      'Ensure specimen handwriting or fingerprints are taken with Magistrate’s written order under Sec 349 BNSS.',
      'Ensure the disclosure statement memo strictly adheres to Section 23 BSA recovery rules.'
    ],
    color: 'var(--gold)'
  },
  {
    id: 'fair-trial-remand',
    stageNumber: '03',
    title: 'Due Process, Remand & Fair Trial',
    articles: 'Articles 14, 21 & 39A',
    bnssCrossReference: 'Sections 187, 341, 345 BNSS (former 167, 304, 309 CrPC)',
    landmarkPrecedents: 'Maneka Gandhi (1978) • Hussainara Khatoon (1979) • Prem Shankar Shukla (1980) • Khatri (1981)',
    summary: 'Any procedure affecting life or personal liberty must be "just, fair, and reasonable". Trial procedure cannot be an instrument of executive harassment or indefinite incarceration.',
    statutoryRules: [
      'Substantive Due Process: Procedural law must embody natural justice and fundamental fairness (Maneka Gandhi).',
      'Judicial Remand Scrutiny: Police custody remand under Sec 187 BNSS is not a mechanical rubber stamp; Magistrate must record specific reasons.',
      'Right to Speedy Trial: Unreasonable, protracted delays without defense fault violate Article 21 (Hussainara Khatoon).',
      'Right Against Public Handcuffing: Handcuffing without recorded judicial sanction is an outrage against human dignity (Prem Shankar Shukla).',
      'Mandatory Legal Aid: Indigent accused must be provided competent defense counsel at State expense (Art 39A & Sec 341 BNSS).'
    ],
    prosecutorChecklist: [
      'Verify that legal aid advocate is appointed before first remand if accused is unrepresented.',
      'Monitor undertrial period against maximum statutory limits under Section 479 BNSS (former 436A CrPC).',
      'Never oppose trial advancement without bona fide procedural grounds.'
    ],
    color: 'var(--emerald)'
  },
  {
    id: 'bail-jurisprudence',
    stageNumber: '04',
    title: 'Bail vs Custody Jurisprudence',
    articles: 'Article 21 & 14',
    bnssCrossReference: 'Sections 479, 480, 482 BNSS (former 436, 437, 438, 439 CrPC)',
    landmarkPrecedents: 'Gurbaksh Singh Sibbia (1980) • Satender Kumar Antil (2022) • K.A. Najeeb (2021) • Manish Sisodia (2024)',
    summary: 'Bail is the rule, jail is the exception. Pre-trial detention cannot be transformed into punitive punishment without conviction.',
    statutoryRules: [
      'Fourfold Bail Categorization (Satender Kumar Antil): Category A (punishable <= 7 yrs), Category B (serious offences), Category C (Special Acts), Category D (Economic offences).',
      'Anticipatory Bail: Liberty protection under Sec 482 BNSS is not restricted by arbitrary time boundaries (Sushila Aggarwal v. State (NCT of Delhi)).',
      'Special Acts Reconciliation: Even where twin conditions exist (Sec 43D(5) UAPA / Sec 37 NDPS), prolonged incarceration without trial prospect violates Art 21, warranting constitutional bail (Union of India v. K.A. Najeeb).'
    ],
    prosecutorChecklist: [
      'In Category A offences, do not oppose bail if accused cooperated with investigation and notice was complied with.',
      'Focus bail opposition strictly on the 3 golden tests: Flight risk, witness tampering, and evidence destruction.',
      'Evaluate undertrial period under Section 479 BNSS (first-time offenders entitled to bail on serving 1/3rd maximum term).'
    ],
    color: 'var(--blue)'
  },
  {
    id: 'substantive-remedies',
    stageNumber: '05',
    title: 'Penal Immunities & Inherent Quashing',
    articles: 'Articles 20(1), 20(2), 32 & 226',
    bnssCrossReference: 'Section 528 BNSS (former 482 CrPC)',
    landmarkPrecedents: 'Maqbool Hussain (1953) • Kedar Nath (1953) • State of Haryana v. Bhajan Lal (1992) • Neeharika (2021)',
    summary: 'Substantive constitutional shields protecting citizens from illegal prosecution, retroactive penalties, double jeopardy, and malicious vexatious criminal proceedings.',
    statutoryRules: [
      'Ex-Post Facto Shield (Art 20(1)): No retroactive criminalization or enhancement of punishment (Kedar Nath).',
      'Double Jeopardy (Art 20(2)): Bar on second prosecution and conviction before a judicial court for the same offence (Maqbool Hussain).',
      '7 Golden Categories of Inherent Quashing (Bhajan Lal): High Court under Art 226 / Sec 528 BNSS may quash an FIR where allegations even if taken at face value do not disclose an offence or are manifestly attended with mala fide.',
      'Habeas Corpus Writs: Immediate release of persons held under illegal custodial detention.'
    ],
    prosecutorChecklist: [
      'Verify that statutory provisions in the chargesheet were in force on the date of offence.',
      'Examine whether departmental punishment bars criminal trial (No: Departmental action is not a court prosecution under 20(2)).',
      'When defending an FIR against quashing under Sec 528 BNSS, demonstrate prima facie ingredients of the cognizable offence.'
    ],
    color: 'var(--purple)'
  }
];

export const CriminalConstitutionalPipelineSVG: React.FC = () => {
  const [selectedStageId, setSelectedStageId] = useState<string>('arrest-safeguards');
  const activeStage = STAGES.find((s) => s.id === selectedStageId) || STAGES[0];

  return (
    <div className="w-full p-5 sm:p-7 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col gap-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-pulse shrink-0" />
            <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
              Criminal-Constitutional Safeguards & Fair Trial Pipeline
            </h3>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
              Arts 20, 21, 22 ⟷ BNSS & BSA
            </span>
          </div>
          <p className="text-xs text-[var(--text-secondary)]">
            Interactive analytical blueprint mapping constitutional protections to criminal investigation, arrest, forensic discovery, and bail.
          </p>
        </div>
      </div>

      {/* Interactive Vector Canvas */}
      <div className="w-full bg-[var(--bg-base)] border border-[var(--border-subtle)] rounded-xl p-4 overflow-x-auto shadow-inner">
        <svg
          viewBox="0 0 1000 320"
          className="w-full min-w-[850px] h-auto select-none"
        >
          <defs>
            <linearGradient id="pipelineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.8" />
              <stop offset="25%" stopColor="var(--gold)" stopOpacity="0.8" />
              <stop offset="50%" stopColor="var(--emerald)" stopOpacity="0.8" />
              <stop offset="75%" stopColor="var(--blue)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="var(--purple)" stopOpacity="0.8" />
            </linearGradient>

            <filter id="nodeGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="currentColor" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* Background Connecting Pipe */}
          <path
            d="M 100 160 L 900 160"
            stroke="url(#pipelineGrad)"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Flow Direction Pulse Arrows */}
          {[200, 400, 600, 800].map((xPos, idx) => (
            <polygon
              key={idx}
              points={`${xPos},155 ${xPos + 10},160 ${xPos},165`}
              fill="var(--text-muted)"
              opacity="0.6"
            />
          ))}

          {/* 5 Stage Nodes */}
          {STAGES.map((stage, idx) => {
            const x = 100 + idx * 200;
            const y = 160;
            const isSelected = selectedStageId === stage.id;

            return (
              <g
                key={stage.id}
                onClick={() => setSelectedStageId(stage.id)}
                className="cursor-pointer transition-all duration-200 group"
              >
                {/* Outer Ring */}
                <circle
                  cx={x}
                  cy={y}
                  r={isSelected ? 42 : 34}
                  fill="var(--bg-surface-elevated)"
                  stroke={isSelected ? stage.color : 'var(--border-strong)'}
                  strokeWidth={isSelected ? 3 : 2}
                  filter={isSelected ? 'url(#nodeGlow)' : undefined}
                  className="transition-all duration-200"
                />

                {/* Inner Stage Number */}
                <text
                  x={x}
                  y={y - 5}
                  textAnchor="middle"
                  fill={isSelected ? stage.color : 'var(--text-primary)'}
                  fontSize="13"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  {stage.stageNumber}
                </text>

                {/* Mini Article Badge */}
                <text
                  x={x}
                  y={y + 12}
                  textAnchor="middle"
                  fill="var(--text-muted)"
                  fontSize="9"
                  fontFamily="monospace"
                >
                  {idx === 0 ? 'Art 22' : idx === 1 ? 'Art 20(3)' : idx === 2 ? 'Art 21' : idx === 3 ? 'Art 21/14' : 'Art 20/32'}
                </text>

                {/* Top/Bottom Alternating Stage Labels */}
                {idx % 2 === 0 ? (
                  <g>
                    <line x1={x} y1={y - 42} x2={x} y2={y - 65} stroke={isSelected ? stage.color : 'var(--border-subtle)'} strokeWidth="1.5" strokeDasharray="3 3" />
                    <rect
                      x={x - 85}
                      y={y - 110}
                      width="170"
                      height="45"
                      rx="8"
                      fill={isSelected ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
                      stroke={isSelected ? stage.color : 'var(--border-subtle)'}
                      strokeWidth={isSelected ? 1.5 : 1}
                    />
                    <text
                      x={x}
                      y={y - 92}
                      textAnchor="middle"
                      fill={isSelected ? stage.color : 'var(--text-primary)'}
                      fontSize="10"
                      fontFamily="monospace"
                      fontWeight="bold"
                    >
                      {stage.title}
                    </text>
                    <text
                      x={x}
                      y={y - 77}
                      textAnchor="middle"
                      fill="var(--text-muted)"
                      fontSize="8.5"
                      fontFamily="monospace"
                    >
                      {stage.articles}
                    </text>
                  </g>
                ) : (
                  <g>
                    <line x1={x} y1={y + 42} x2={x} y2={y + 65} stroke={isSelected ? stage.color : 'var(--border-subtle)'} strokeWidth="1.5" strokeDasharray="3 3" />
                    <rect
                      x={x - 85}
                      y={y + 65}
                      width="170"
                      height="45"
                      rx="8"
                      fill={isSelected ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
                      stroke={isSelected ? stage.color : 'var(--border-subtle)'}
                      strokeWidth={isSelected ? 1.5 : 1}
                    />
                    <text
                      x={x}
                      y={y + 83}
                      textAnchor="middle"
                      fill={isSelected ? stage.color : 'var(--text-primary)'}
                      fontSize="10"
                      fontFamily="monospace"
                      fontWeight="bold"
                    >
                      {stage.title}
                    </text>
                    <text
                      x={x}
                      y={y + 98}
                      textAnchor="middle"
                      fill="var(--text-muted)"
                      fontSize="8.5"
                      fontFamily="monospace"
                    >
                      {stage.articles}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Selected Stage Comprehensive Analytical Drawer */}
      <div className="p-5 sm:p-6 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] flex flex-col gap-4 animate-fadeIn">
        {/* Stage Meta Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-3">
            <span
              className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg border"
              style={{
                color: activeStage.color,
                borderColor: `${activeStage.color}40`,
                backgroundColor: `${activeStage.color}15`
              }}
            >
              STAGE {activeStage.stageNumber} • {activeStage.articles}
            </span>
            <h4 className="text-base font-bold text-[var(--text-primary)]">
              {activeStage.title}
            </h4>
          </div>
          <span className="text-[11px] font-mono text-[var(--text-muted)]">
            Cross-Ref: <strong className="text-[var(--text-primary)]">{activeStage.bnssCrossReference}</strong>
          </span>
        </div>

        {/* Core Summary */}
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
          {activeStage.summary}
        </p>

        {/* Landmark Case Citations Strip */}
        <div className="p-3 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] flex items-start gap-2">
          <Gavel className="w-4 h-4 shrink-0 mt-0.5" style={{ color: activeStage.color }} />
          <div className="text-xs font-mono">
            <span className="text-[var(--text-muted)]">Guiding Precedents: </span>
            <span className="text-[var(--text-primary)] font-semibold">{activeStage.landmarkPrecedents}</span>
          </div>
        </div>

        {/* 2-Column Split: Constitutional Rules vs Prosecutor Checklist */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          {/* Left: Constitutional & Statutory Mandates */}
          <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col gap-2.5">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--text-primary)] uppercase tracking-wider">
              <Scale className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>Constitutional & Statutory Mandates</span>
            </div>
            <ul className="flex flex-col gap-2">
              {activeStage.statutoryRules.map((rule, idx) => (
                <li key={idx} className="text-xs text-[var(--text-secondary)] flex items-start gap-2 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 shrink-0" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Prosecutor Actionable Checklist */}
          <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col gap-2.5">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--text-primary)] uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--emerald)]" />
              <span>Prosecutor & Courtroom Verification Checklist</span>
            </div>
            <ul className="flex flex-col gap-2">
              {activeStage.prosecutorChecklist.map((item, idx) => (
                <li key={idx} className="text-xs text-[var(--text-secondary)] flex items-start gap-2 leading-relaxed">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--emerald)] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
