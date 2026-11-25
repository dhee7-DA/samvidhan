export type OdysseyRegion =
  | 'Foundations & Rights'
  | 'Liberty, Faith & DPSPs'
  | 'Executive & Parliament'
  | 'Judiciary, Federal & Bodies';

export interface OdysseyFlipPair {
  id: string;
  prompt: string;
  match: string;
}

export interface OdysseyClozeSpec {
  prefix: string;
  middle: string;
  suffix: string;
  correct1: string;
  correct2: string;
  distractors: [string, string];
  hint: string;
  citation: string;
}

export interface OdysseySequenceItem {
  id: string;
  label: string;
  sub: string;
  canonicalOrder: number;
}

export interface OdysseyBossGuard {
  scenario: string;
  question: string;
  options: [string, string, string];
  correctIndex: 0 | 1 | 2;
  explanation: string;
  authority: string;
}

export interface OdysseyChapterSpec {
  id: string;
  number: number;
  region: OdysseyRegion;
  shortTitle: string;
  title: string;
  articles: string;
  estimatedMinutes: number;
  linkedSvgId: string;
  objective: string;
  flipPairs: [OdysseyFlipPair, OdysseyFlipPair, OdysseyFlipPair, OdysseyFlipPair];
  cloze: OdysseyClozeSpec;
  sequenceTitle: string;
  sequenceItems: [OdysseySequenceItem, OdysseySequenceItem, OdysseySequenceItem, OdysseySequenceItem];
  boss: OdysseyBossGuard;
}

export interface CurriculumPlanPreset {
  id: 'all' | 'prelims-core' | 'institutions' | 'custom';
  label: string;
  description: string;
  chapterIds: string[];
}

export const ODYSSEY_CHAPTERS: OdysseyChapterSpec[] = [
  {
    id: 'ch-01',
    number: 1,
    region: 'Foundations & Rights',
    shortTitle: 'Preamble & Territory',
    title: 'Foundations: Preamble, Territory (Arts 1–4) & Citizenship (Arts 5–11)',
    articles: 'Preamble · Arts 1–11',
    estimatedMinutes: 4,
    linkedSvgId: 'territory-citizenship',
    objective: 'Lock in Union vs Federation distinction, Art 3 vs Berubari cession rules, and Citizenship Act 1955 modes.',
    flipPairs: [
      { id: 'c1p1', prompt: 'Article 1', match: '"Union of States" (Indestructible)' },
      { id: 'c1p2', prompt: 'Article 2', match: 'Admit External New Territory' },
      { id: 'c1p3', prompt: 'Berubari (1960)', match: 'Cession Requires Art 368' },
      { id: 'c1p4', prompt: 'Art 9 Single Citizen', match: 'Foreign Passport = Instant Loss' }
    ],
    cloze: {
      prefix: 'Under Article 4, Parliament laws reorganizing State borders under Article 3 pass by ',
      middle: ' and require ',
      suffix: ' State Legislature approval (only President consultation with non-binding views).',
      correct1: 'Simple Majority',
      correct2: 'No Mandatory',
      distractors: ['Special Majority', 'Unanimous'],
      hint: 'Compare 4th Amendment Art 4 ease vs Berubari territory cession.',
      citation: 'Articles 3 & 4 + Babulal Parate (1960)'
    },
    sequenceTitle: 'Order States Reorganisation Milestones Chronologically',
    sequenceItems: [
      { id: 's1', label: 'Dhar & JVP Reject Language-Only', sub: '1948–1949', canonicalOrder: 1 },
      { id: 's2', label: 'Andhra State Born After Fast', sub: 'Oct 1953 (First Linguistic State)', canonicalOrder: 2 },
      { id: 's3', label: 'Fazl Ali 7th Amendment Reset', sub: 'Nov 1956 (14 States + 6 UTs)', canonicalOrder: 3 },
      { id: 's4', label: '100th Amd Bangladesh LBA', sub: '2015 Enclave Exchange (Art 368)', canonicalOrder: 4 }
    ],
    boss: {
      scenario: 'Parliament signs an accord to demarcate an ambiguous river island border without ceding settled Indian land.',
      question: 'What constitutional instrument is required to implement this boundary settlement?',
      options: [
        'Executive Action only (no Art 368 needed per Maganbhai 1969)',
        'Special Majority Art 368 + 50% State Ratification',
        'Binding referendum across all border districts under Art 3'
      ],
      correctIndex: 0,
      explanation: 'Maganbhai Patel (1969) distinguished settling an ambiguous border (Executive action suffices) from ceding Indian sovereign territory (requires Art 368 as in Berubari & 100th Amd).',
      authority: 'Maganbhai Ishwarbhai Patel (1969) vs In re Berubari (1960)'
    }
  },
  {
    id: 'ch-02',
    number: 2,
    region: 'Foundations & Rights',
    shortTitle: 'Equality & Reservations',
    title: 'Equality Shield: State Def (Art 12), Review (Art 13) & Equality (Arts 14–18)',
    articles: 'Articles 12 – 18',
    estimatedMinutes: 5,
    linkedSvgId: 'reservation-evolution',
    objective: 'Distinguish Eclipse vs Void ab initio, Ajay Hasia 6-prong Statehood, Royappa arbitrariness, and 50% reservation geometry.',
    flipPairs: [
      { id: 'c2p1', prompt: 'Article 13(1)', match: 'Doctrine of Eclipse (Pre-1950)' },
      { id: 'c2p2', prompt: 'Zee Telefilms (2005)', match: 'BCCI != Art 12, Yet Art 226 OK' },
      { id: 'c2p3', prompt: 'Indra Sawhney (1992)', match: '50% Cap & Creamy Layer' },
      { id: 'c2p4', prompt: 'Balaji Raghavan (1996)', match: 'National Awards != Art 18 Title' }
    ],
    cloze: {
      prefix: 'In Shayara Bano (2017), Nariman J. held primary legislation violates Article 14 if it suffers from ',
      middle: ', whereas Article 17 Abolition of Untouchability applies directly against ',
      suffix: '.',
      correct1: 'Manifest Arbitrariness',
      correct2: 'Both State & Private Citizens',
      distractors: ['Parliamentary Immunity', 'Central Govt Exclusively'],
      hint: 'Link Nariman J.’s 2017 Art 14 breakthrough with Horizontal Fundamental Rights.',
      citation: 'Shayara Bano (2017) & Sabarimala (2018)'
    },
    sequenceTitle: 'Trace Reservation Jurisprudence in Chronological Order',
    sequenceItems: [
      { id: 's1', label: 'M.R. Balaji v. Mysore (First 50% Guide)', sub: '1963', canonicalOrder: 1 },
      { id: 's2', label: 'Indra Sawhney (27% OBC + Creamy Layer)', sub: '1992 9-Judge Bench', canonicalOrder: 2 },
      { id: 's3', label: 'Janhit Abhiyan Upholds 10% EWS (103rd Amd)', sub: '2022 (3:2)', canonicalOrder: 3 },
      { id: 's4', label: 'Davinder Singh Permits SC/ST Sub-Classification', sub: '2024 (6:1 Overruled Chinnaiah)', canonicalOrder: 4 }
    ],
    boss: {
      scenario: 'A candidate argues an international citizen corporation can claim Article 19(1)(g) trade rights and waive Article 14 equality by contract.',
      question: 'Which statement accurately reflects Indian Constitutional Law?',
      options: [
        'Corporations are not Art 19 citizens AND no citizen can waive Part III (Basheshar Nath 1959)',
        'Corporations enjoy full Art 19 rights if incorporated in India',
        'Fundamental Rights under Art 14 can be contractually waived cleanly'
      ],
      correctIndex: 0,
      explanation: 'Corporations are not citizens for Art 19 (STC / Cooper), though shareholders can sue jointly; and Basheshar Nath (1959) strictly prohibits waiving any Fundamental Right.',
      authority: 'Basheshar Nath v. CIT (1959) & Bennett Coleman (1973)'
    }
  },
  {
    id: 'ch-03',
    number: 3,
    region: 'Foundations & Rights',
    shortTitle: 'Liberty & Protection',
    title: 'Freedoms, Golden Triangle & Life: Articles 19, 20, 21, 21A, 22, 23 & 24',
    articles: 'Articles 19 – 24',
    estimatedMinutes: 5,
    linkedSvgId: 'fundamental-rights-funnel',
    objective: 'Master 19(2)-(6) grounds, Art 20 criminal immunity, Maneka Due Process, Puttaswamy Privacy & Art 22 arrest timelines.',
    flipPairs: [
      { id: 'c3p1', prompt: 'Article 19(2)', match: '8 Speech Grounds (No "Public Interest")' },
      { id: 'c3p2', prompt: 'Selvi (2010)', match: 'Involuntary Narco Fails Art 20(3)' },
      { id: 'c3p3', prompt: 'Art 22(4) Advisory Board', match: '3-Month Preventive Detention Cap' },
      { id: 'c3p4', prompt: 'PUDR Asiad (1982)', match: 'Below Min. Wage = Forced Labour' }
    ],
    cloze: {
      prefix: 'In Maneka Gandhi (1978), Articles 14, 19 and 21 formed the ',
      middle: '; under 44th Amendment (1978), Articles ',
      suffix: ' NEVER suspend even during National Emergency under Art 359.',
      correct1: 'Golden Triangle',
      correct2: '20 and 21',
      distractors: ['Basic Structure Wall', '19 and 32'],
      hint: 'Recollect Gopalan overruled (1978) and Emergency non-suspendable rights.',
      citation: 'Maneka Gandhi (1978) & Art 359(1)'
    },
    sequenceTitle: 'Order Evolution of Article 21 Personal Liberty & Privacy',
    sequenceItems: [
      { id: 's1', label: 'A.K. Gopalan Textual Silos Theory', sub: '1950 (Procedure Only)', canonicalOrder: 1 },
      { id: 's2', label: 'Kharak Singh Subba Rao Privacy Dissent', sub: '1962', canonicalOrder: 2 },
      { id: 's3', label: 'Maneka Gandhi Substantive Fairness', sub: '1978 7-Judge Bench', canonicalOrder: 3 },
      { id: 's4', label: 'K.S. Puttaswamy 4-Prong Proportionality Privacy', sub: '2017 9-Judge Unanimous', canonicalOrder: 4 }
    ],
    boss: {
      scenario: 'Police summon an accused and extract a blood DNA sample forcibly, plus order a compulsory polygraph lie-detector test.',
      question: 'Which constitutional verdict applies cleanly under Article 20(3)?',
      options: [
        'Blood/DNA physical sample is VALID (Kathi Kalu 1961); Involuntary polygraph is UNCONSTITUTIONAL (Selvi 2010)',
        'Both blood sample and polygraph violate self-incrimination under Art 20(3)',
        'Neither violates Art 20(3) during police investigation'
      ],
      correctIndex: 0,
      explanation: 'Kathi Kalu Oghad (11-Judge 1961) held physical specimens (DNA, prints, handwriting) do not compel mental testimony, whereas Selvi (2010) barred involuntary narco/polygraph/BEAP.',
      authority: 'State of Bombay v. Kathi Kalu Oghad (1961) & Selvi (2010)'
    }
  },
  {
    id: 'ch-04',
    number: 4,
    region: 'Liberty, Faith & DPSPs',
    shortTitle: 'Religion, Culture & Writs',
    title: 'Secularism, Minorities & Writs: Articles 25 – 35 & 226',
    articles: 'Articles 25 – 35 & 226',
    estimatedMinutes: 5,
    linkedSvgId: 'writs-matrix',
    objective: 'Separate ERP test, AMU 2024 ruling, 5 Prerogative Writs triggers, and Art 32 vs Art 226 scope.',
    flipPairs: [
      { id: 'c4p1', prompt: 'Habeas Corpus', match: 'Against Both State & Private Detainer' },
      { id: 'c4p2', prompt: 'Quo-Warranto', match: 'Challenge Public Office Usurper (No Locus)' },
      { id: 'c4p3', prompt: 'Prohibition vs Certiorari', match: 'Prevent Mid-Trial vs Quash Final Order' },
      { id: 'c4p4', prompt: 'AMU (2024 7-Judge)', match: 'Overruled Azeez Basha (Statute != Bar)' }
    ],
    cloze: {
      prefix: 'While Article 32 protects ONLY Fundamental Rights yet is itself guaranteed, High Court Article 226 covers both Part III and ',
      middle: ', making HC jurisdiction ',
      suffix: ' in subject-matter scope.',
      correct1: 'Ordinary Legal Rights ("Any Other Purpose")',
      correct2: 'Wider Than Supreme Court',
      distractors: ['Non-Justiciable', 'Narrower in Remedies'],
      hint: 'Recall the classic Art 32 vs Art 226 geographic vs subject-matter swap.',
      citation: 'Articles 32 & 226 + L. Chandra Kumar (1997)'
    },
    sequenceTitle: 'Order Key Landmarks Shaping Religion & Minority Jurisprudence',
    sequenceItems: [
      { id: 's1', label: 'Shirur Mutt Establishes Essential Practices Test', sub: '1954', canonicalOrder: 1 },
      { id: 's2', label: 'T.M.A. Pai Sets State as Minority Unit', sub: '2002 (11-Judge)', canonicalOrder: 2 },
      { id: 's3', label: 'Sabarimala Temple Entry & Art 25 Equality', sub: '2018 (4:1)', canonicalOrder: 3 },
      { id: 's4', label: 'AMU 7-Judge Overrules Azeez Basha 1967', sub: 'Nov 2024 (4:3)', canonicalOrder: 4 }
    ],
    boss: {
      scenario: 'A religious trust runs a school claiming Article 30 minority shield; another State levies a pilgrimage sanitation fee while refusing general religious taxes.',
      question: 'Which pair of statements holds true constitutionally?',
      options: [
        'Art 27 bars general Religious TAX (but allows secular service FEE); Minority status under Art 30 is checked State-wise',
        'Art 27 bans both Taxes and Fees; Minority is determined strictly nationally under Art 30',
        'Mandamus writ issues against President/Governor directly under Art 361'
      ],
      correctIndex: 0,
      explanation: 'Art 27 prohibits compulsory public taxes funding religion, NOT regulatory service fees (Prafulla Goradia 2011); T.M.A. Pai confirmed Art 30 minority status is determined State-wise.',
      authority: 'Prafulla Goradia (2011) & T.M.A. Pai Foundation (2002)'
    }
  },
  {
    id: 'ch-05',
    number: 5,
    region: 'Liberty, Faith & DPSPs',
    shortTitle: 'DPSPs, Duties & 300A',
    title: 'Socio-Economic Mandate: DPSPs (36–51), Duties (51A) & Property (300A)',
    articles: 'Arts 31C, 36–51A & 300A',
    estimatedMinutes: 4,
    linkedSvgId: 'dpsp-fr-harmony',
    objective: 'Master Champakam-to-Minerva arc, 42nd/44th/86th/97th DPSP updates, 11 Duties, and Bimal Shah (2024) 300A procedure.',
    flipPairs: [
      { id: 'c5p1', prompt: 'Article 45 (86th Amd)', match: 'Early Childhood Care (0–6 Years)' },
      { id: 'c5p2', prompt: 'Art 51A(k) (2002)', match: 'Parent Duty to Educate (6–14 Yrs)' },
      { id: 'c5p3', prompt: 'Swaran Singh Reject', match: '"Duty to Pay Taxes" Never Added' },
      { id: 'c5p4', prompt: 'Property Owners 2024', match: 'All Private Property != Art 39(b)' }
    ],
    cloze: {
      prefix: 'Minerva Mills (1980) declared Fundamental Rights and DPSPs are like ',
      middle: ' and saved Article 31C ONLY for laws advancing ',
      suffix: ' (distributing material resources & preventing wealth concentration).',
      correct1: 'Two Wheels of a Chariot',
      correct2: 'Articles 39(b) and 39(c)',
      distractors: ['Rigid Watertight Silos', 'Articles 44 and 50'],
      hint: 'Think of Justice Chandrachud’s famous 1980 Chariot metaphor and Art 31C original scope.',
      citation: 'Minerva Mills (1980) & Property Owners Assn (2024)'
    },
    sequenceTitle: 'Order the Part III vs Part IV Constitutional Clash Arc',
    sequenceItems: [
      { id: 's1', label: 'Champakam Dorairajan (FR Supreme Over DPSP)', sub: '1951 -> Sparked 1st Amd', canonicalOrder: 1 },
      { id: 's2', label: '25th Amd Inserts Art 31C Shield for 39(b)/(c)', sub: '1971', canonicalOrder: 2 },
      { id: 's3', label: 'Kesavananda Strikes 31C "Conclusive" Clause', sub: '1973', canonicalOrder: 3 },
      { id: 's4', label: 'Minerva Mills Strikes 42nd Blanket 31C Primacy', sub: '1980', canonicalOrder: 4 }
    ],
    boss: {
      scenario: 'Parliament inserted Art 39A (Free Legal Aid), Art 43A (Workers in Management), Art 43B (Cooperatives), and Art 38(2) (Minimize Inequality) via amendments.',
      question: 'Which pair matches the EXACT amendment numbers cleanly?',
      options: [
        '42nd = 39A & 43A; 44th = 38(2); 97th = 43B',
        '44th = 39A & 48A; 42nd = 38(2); 86th = 43B',
        '42nd = All four DPSP additions together'
      ],
      correctIndex: 0,
      explanation: '42nd Amd (1976) added 39(f), 39A, 43A & 48A; 44th Amd (1978) added 38(2); 86th (2002) altered 45; 97th (2011) added 43B!',
      authority: '42nd (1976), 44th (1978) & 97th (2011) Amendments'
    }
  },
  {
    id: 'ch-06',
    number: 6,
    region: 'Executive & Parliament',
    shortTitle: 'President, VP & PM',
    title: 'Union Executive: President (52–62), VP (63–71), Pardon (72) & Cabinet (74–78)',
    articles: 'Articles 52 – 78',
    estimatedMinutes: 5,
    linkedSvgId: 'president-electoral-impeachment',
    objective: 'Lock in Pres. vs VP electoral colleges, Art 61 vs 67(b) removals, Art 72 clemency & 91st Amd 15% cap.',
    flipPairs: [
      { id: 'c6p1', prompt: 'Pres. Electoral College', match: 'Elected MPs + Elected MLAs (Delhi/Pudu)' },
      { id: 'c6p2', prompt: 'VP Electoral College', match: 'ALL MPs (Elected+Nom), ZERO MLAs!' },
      { id: 'c6p3', prompt: 'Art 61 Impeachment', match: '2/3rd TOTAL House Membership (LS+RS)' },
      { id: 'c6p4', prompt: 'Art 91st Amd Cap', match: 'Max 15% of Lok Sabha (Incl. PM)' }
    ],
    cloze: {
      prefix: 'While Parliament’s Lok Sabha approves National Emergency, Vice-President removal under Article 67(b) can ONLY initiate in ',
      middle: ' by ',
      suffix: ' and needs simple Lok Sabha agreement.',
      correct1: 'Rajya Sabha',
      correct2: 'Effective Majority (All Then Members)',
      distractors: ['Lok Sabha', '2/3 Total Membership'],
      hint: 'Recall the VP is Ex-Officio Chairman of Rajya Sabha (Art 64/89).',
      citation: 'Articles 64, 67(b) & 71'
    },
    sequenceTitle: 'Order the 5 Stages of Presidential Impeachment (Art 61)',
    sequenceItems: [
      { id: 's1', label: '14 Days Notice Signed by 1/4th of Either House', sub: 'Stage 1 Charge Signing', canonicalOrder: 1 },
      { id: 's2', label: 'Initiating House Passes Charge by 2/3 TOTAL', sub: 'Stage 2 Resolution Vote', canonicalOrder: 2 },
      { id: 's3', label: 'Second House Investigates (Pres. Defends)', sub: 'Stage 3 Quasi-Judicial Probe', canonicalOrder: 3 },
      { id: 's4', label: 'Second House Sustains by 2/3 TOTAL -> Removed', sub: 'Stage 4 Immediate Vacation', canonicalOrder: 4 }
    ],
    boss: {
      scenario: 'During Presidential Pardon review (Art 72), a convict petitions asking why Governor refused Death Pardon under Art 161, while a Non-MP is reappointed Cabinet Minister for a second 6-month term without winning an election.',
      question: 'Which statement states the exact constitutional bar?',
      options: [
        'Governor CANNOT pardon Death Sentence (only Art 72 President); Re-appointing same non-MP for another 6m breaks Art 75(5) (S.R. Chaudhuri)',
        'Governor CAN pardon Death under Art 161 if crime matches State List; non-MP reset is valid',
        'Both Art 72 and non-MP reset lie beyond judicial review'
      ],
      correctIndex: 0,
      explanation: 'Art 72 vests exclusive Death Sentence & Court-Martial pardon power in President (Governor only commutes/remits); S.R. Chaudhuri (2001) held consecutive 6-month non-legislator Minister appointments defeat democracy.',
      authority: 'Maru Ram (1980), Art 72/161 & S.R. Chaudhuri (2001)'
    }
  },
  {
    id: 'ch-07',
    number: 7,
    region: 'Executive & Parliament',
    shortTitle: 'Parliament & Finance',
    title: 'Parliament Mechanics: Houses, Bills (107–117), Majorities & Funds (266–267)',
    articles: 'Articles 79 – 122, 266 & 267',
    estimatedMinutes: 5,
    linkedSvgId: 'majorities-threshold',
    objective: 'Contrast Money Bill vs Financial Bill I & II, Bill lapse rules, Art 108 Joint Sitting exceptions & 3 Constitutional Funds.',
    flipPairs: [
      { id: 'c7p1', prompt: 'Prorogation (Art 85)', match: 'Notices Lapse; Pending Bills SURVIVE!' },
      { id: 'c7p2', prompt: 'Art 117(3) Fin Bill II', match: 'Either House Intro; Pres. Rec at Consideration' },
      { id: 'c7p3', prompt: 'Estimates Committee', match: '30 MPs (100% Lok Sabha, Zero RS)' },
      { id: 'c7p4', prompt: 'Public Account 266(2)', match: 'Banker Trust — Executive Withdraws' }
    ],
    cloze: {
      prefix: 'Joint Sitting under Article 108 is presided over first by ',
      middle: ' (never VP!), and CANNOT be summoned for ',
      suffix: '.',
      correct1: 'Lok Sabha Speaker',
      correct2: 'Money Bills & Art 368 Amendments',
      distractors: ['Rajya Sabha Chairman', 'Financial Bill Category I'],
      hint: 'Why can the VP/Chairman never chair Art 108? Because he is not an MP!',
      citation: 'Articles 108(4), 118(4) & 368'
    },
    sequenceTitle: 'Order the Annual Union Budget Cycle Steps (Arts 112–114)',
    sequenceItems: [
      { id: 's1', label: 'Annual Financial Statement Presentation + General Debate', sub: 'Art 112 (Zero Voting)', canonicalOrder: 1 },
      { id: 's2', label: '24 DRSCs Scrutinize Ministry Demands During Recess', sub: 'Committee Examination', canonicalOrder: 2 },
      { id: 's3', label: 'Lok Sabha Votes Demands & Cut Motions (Re 1 / Rs 100)', sub: 'Art 113 LS Exclusive', canonicalOrder: 3 },
      { id: 's4', label: 'Appropriation Act Unlocks CFI + Finance Act Passes (<75d)', sub: 'Art 114 & Tax Sanction', canonicalOrder: 4 }
    ],
    boss: {
      scenario: 'During Speaker’s own removal resolution under Art 96, a vote occurs — and separately a Bill passed by Lok Sabha sits in Rajya Sabha when Lok Sabha is dissolved.',
      question: 'Which outcome matches the Constitution verbatim?',
      options: [
        'Speaker CAN vote in First Instance during Art 96 removal (NOT Casting Vote); AND Bill passed by LS pending in RS LAPSES on LS dissolution',
        'Speaker uses double Casting Vote in Art 96; AND LS-passed Bill survives in RS',
        'Rajya Sabha Chairman takes over Lok Sabha during Speaker removal'
      ],
      correctIndex: 0,
      explanation: 'Under Art 96(2), Speaker retains right to speak & vote ONLY IN FIRST INSTANCE (not tie-breaking casting vote); under Art 107(5), a bill passed by LS & pending in RS LAPSES upon LS dissolution.',
      authority: 'Articles 96(2) & 107(5)'
    }
  },
  {
    id: 'ch-08',
    number: 8,
    region: 'Judiciary, Federal & Bodies',
    shortTitle: 'Judiciary & Doctrines',
    title: 'Courts & Doctrines: SC/HC Powers, Collegium, Tribunals & Basic Structure',
    articles: 'Arts 124–147, 214–237 & 323A/B',
    estimatedMinutes: 5,
    linkedSvgId: 'supreme-court-jurisdiction',
    objective: 'Master Collegium 1+4 vs 1+2 split, Art 124(4) same-session removal, Art 143(1) vs (2), and Core Interpretive Doctrines.',
    flipPairs: [
      { id: 'c8p1', prompt: 'Art 143(1) vs 143(2)', match: 'May Decline Opinion vs MUST Answer (Treaty)' },
      { id: 'c8p2', prompt: 'Art 323A Tribunals', match: 'Services Only + Parliament Only (No Chain)' },
      { id: 'c8p3', prompt: 'Chandra Kumar (1997)', match: 'Tribunal Appeal -> HC Division Bench' },
      { id: 'c8p4', prompt: 'Daryao Rule Exception', match: 'Habeas Corpus Immune From Res Judicata' }
    ],
    cloze: {
      prefix: 'While NJAC (99th Amd) fell in 2015, SC Collegium needs CJI + 4 Senior Judges for SC & Transfers, yet uses CJI + ',
      middle: ' for initial HC Judge picks; and ONLY ',
      suffix: ' (not High Courts) may invoke Prospective Overruling.',
      correct1: '2 Senior-Most SC Judges',
      correct2: 'Supreme Court',
      distractors: ['Law Minister + 2 Lay', 'State High Court Full Bench'],
      hint: 'Recall the Third Judges Case (1998) split & Golaknath (1967) limit.',
      citation: 'Third Judges Reference (1998) & Golaknath (1967)'
    },
    sequenceTitle: 'Chronicle Basic Structure Evolution From 1951 to 2007',
    sequenceItems: [
      { id: 's1', label: 'Shankari Prasad: Unfettered Art 368 Power', sub: '1951', canonicalOrder: 1 },
      { id: 's2', label: 'Golak Nath: Part III Untouchable (Prospective)', sub: '1967 (11-Judge)', canonicalOrder: 2 },
      { id: 's3', label: 'Kesavananda Bharati: Basic Structure Limit Born', sub: '1973 (13-Judge 7:6)', canonicalOrder: 3 },
      { id: 's4', label: 'I.R. Coelho: Post-Apr 24 1973 Ninth Sch Reviewable', sub: '2007 (9-Judge 9:0)', canonicalOrder: 4 }
    ],
    boss: {
      scenario: 'Parliament drafts an Act with deceptive wording targeting a subject inside State List II, arguing MPs had pure altruistic national intent.',
      question: 'Why does the Doctrine of Colourable Legislation invalidate this statute?',
      options: [
        'Colourable Legislation tests COMPETENCE under Art 246 regardless of MP motive (Gajapati 1953)',
        'Because Supreme Court invalidates statutes whenever MPs hold selfish political motives',
        'Because Art 254 bars Parliament from touching Concurrent List items'
      ],
      correctIndex: 0,
      explanation: 'Gajapati Narayan Deo (1953) settled that Colourable Legislation has NOTHING to do with mala fides of legislators — it asks solely whether Legislature actually possessed Art 246 competence in substance!',
      authority: 'K.C. Gajapati Narayan Deo v. State of Orissa (1953)'
    }
  },
  {
    id: 'ch-09',
    number: 9,
    region: 'Executive & Parliament',
    shortTitle: 'Governor & States',
    title: 'State Machinery: Governor Assent (200/201), Ordinances (213) & Vidhan Parishad',
    articles: 'Articles 153 – 213',
    estimatedMinutes: 4,
    linkedSvgId: 'governor-assent-ordinance',
    objective: 'Lock in Art 200 return obligation vs Art 201 President freedom, Art 169 Council formula (3+1 Mo delay), and 12-Minister floor.',
    flipPairs: [
      { id: 'c9p1', prompt: 'Art 200 Re-pass', match: 'Governor SHALL NOT Withhold Assent' },
      { id: 'c9p2', prompt: 'Art 201 Re-pass', match: 'President STILL NOT Bound to Assent' },
      { id: 'c9p3', prompt: 'Krishna Kumar 2017', match: 'Ordinance Repromulgation = Const. Fraud' },
      { id: 'c9p4', prompt: 'State Cabinet Min/Max', match: 'Min 12 Ministers · Max 15% Assembly' }
    ],
    cloze: {
      prefix: 'To create or abolish a State Legislative Council under Article 169, the Assembly passes by ',
      middle: ', followed by Parliament Act passed by ',
      suffix: ' (outside Art 368).',
      correct1: 'Special Majority',
      correct2: 'Simple Majority',
      distractors: ['Absolute Majority', '50% State Ratification'],
      hint: 'Notice the famous State Special -> Parliament Simple flip in Art 169!',
      citation: 'Articles 169 & 197 (Max 4-Month Delay)'
    },
    sequenceTitle: 'Order State Bill Deadlock & Ordinance Lifecycle Limits',
    sequenceItems: [
      { id: 's1', label: 'Assembly Passes Ordinary Bill -> Sends to Council', sub: 'First Passage', canonicalOrder: 1 },
      { id: 's2', label: 'Council Rejects / Holds 3 Months -> Returns to Assembly', sub: 'Art 197(1) Clock', canonicalOrder: 2 },
      { id: 's3', label: 'Assembly Re-Passes & Council Holds Max 1 Month', sub: 'No Joint Sitting Exists!', canonicalOrder: 3 },
      { id: 's4', label: 'Deemed Passed -> Sent to Governor (Cannot Stall)', sub: 'Punjab Governor (2023)', canonicalOrder: 4 }
    ],
    boss: {
      scenario: 'A State Ordinance issued on Aug 1 faces reassembly of two-House State Assembly & Council on Oct 15 and Oct 25 respectively.',
      question: 'From WHICH date does the 6-week expiry clock begin running?',
      options: [
        'Oct 25 (date the LATER House reassembles under Art 213/123)!',
        'Aug 1 (date of Ordinance promulgation)',
        '6 months after Oct 15 unconditionally'
      ],
      correctIndex: 0,
      explanation: 'Under Arts 123 & 213, when two Houses sit on different dates, the 6-week expiry countdown starts from the LATER date of reassembly (max theoretical life = 6 months gap + 6 weeks).',
      authority: 'Articles 123(2) & 213(2) + Krishna Kumar Singh (2017)'
    }
  },
  {
    id: 'ch-10',
    number: 10,
    region: 'Judiciary, Federal & Bodies',
    shortTitle: 'Federalism & Tribal Areas',
    title: 'Federal Architecture: 7th Schedule Overrides, GST, Borrowing & 5th/6th Schedules',
    articles: 'Articles 244 – 307',
    estimatedMinutes: 5,
    linkedSvgId: 'gst-fiscal-federalism',
    objective: 'Lock in Art 252 permanent surrender, Art 279A voting weights, Art 293(3) debt consent & AMTM 6th Schedule distinction.',
    flipPairs: [
      { id: 'c10p1', prompt: 'Art 252 Consent Law', match: 'States CANNOT Amend/Repeal Forever' },
      { id: 'c10p2', prompt: 'GST Council Voting', match: 'Centre 1/3 + States 2/3 (>=3/4 Majority)' },
      { id: 'c10p3', prompt: 'Zonal Councils (1956)', match: 'Statutory Body (Union HM Chairs)' },
      { id: 'c10p4', prompt: 'Art 271 Cesses', match: '100% Union (Excluded From Pool 270)' }
    ],
    cloze: {
      prefix: 'Sixth Schedule Autonomous District Councils apply ONLY to ',
      middle: ' States ("AMTM"), while under Article 293(3) a State owing Central loans CANNOT borrow even domestically without ',
      suffix: '.',
      correct1: 'Assam, Meghalaya, Tripura & Mizoram',
      correct2: 'Union Government Consent',
      distractors: ['Manipur, Nagaland & Arunachal', 'Finance Commission Sanction'],
      hint: 'Notice AMTM avoids Manipur & Arunachal; remember 2024 Kerala borrowing suit.',
      citation: 'Article 244(2) + Art 293(3)'
    },
    sequenceTitle: 'Order Key Landmarks Reshaping Fiscal & Cooperative Federalism',
    sequenceItems: [
      { id: 's1', label: 'Sarkaria Commission Urges Permanent Inter-State Council', sub: '1988 -> Created 1990', canonicalOrder: 1 },
      { id: 's2', label: '80th Amendment Creates Unified Central Divisible Pool', sub: '2000 (Art 270)', canonicalOrder: 2 },
      { id: 's3', label: '101st Amendment Births GST Council Art 279A', sub: '2016', canonicalOrder: 3 },
      { id: 's4', label: 'Mohit Minerals Rules GST Recommendations Persuasive', sub: '2022 + MADA Royalty 2024', canonicalOrder: 4 }
    ],
    boss: {
      scenario: 'Gujarat Co-operative groups challenge Part IX-B (97th Amendment 2011) claiming Parliament skipped State Ratification under Art 368(2).',
      question: 'How did the Supreme Court resolve Rajendra N. Shah (2021)?',
      options: [
        'Struck Part IX-B ONLY for Intra-State Cooperatives; KEPT Part IX-B VALID for Multi-State & UTs (+ 19(1)(c)/43B intact)',
        'Struck down the entire 97th Amendment including Art 19(1)(c) and 43B',
        'Upheld Part IX-B everywhere holding new Parts never need State ratification'
      ],
      correctIndex: 0,
      explanation: 'Applying Severability, SC invalidated Part IX-B solely on intra-state cooperatives (Entry 32 List II lacking 50% ratification) while preserving Arts 243ZR/ZS (Multi-State/UT), 19(1)(c), and 43B.',
      authority: 'Union of India v. Rajendra N. Shah (2021)'
    }
  },
  {
    id: 'ch-11',
    number: 11,
    region: 'Judiciary, Federal & Bodies',
    shortTitle: 'Emergency & Local Gov',
    title: 'Crisis & Grassroots: Emergencies (352–360), Art 368 & 73rd/74th Amendments',
    articles: 'Arts 352–368 & 243–243ZG',
    estimatedMinutes: 5,
    linkedSvgId: 'local-self-government',
    objective: 'Compare Emergency approval clocks/revocations, 3 Art 368 amendment tracks, PESA ST guardrails & DPC 4/5 vs MPC 2/3.',
    flipPairs: [
      { id: 'c11p1', prompt: 'Art 352 Revocation', match: 'Lok Sabha Alone by Simple Majority!' },
      { id: 'c11p2', prompt: 'Art 360 Duration', match: 'Indefinite Post One 2-Mo Approval' },
      { id: 'c11p3', prompt: 'DPC vs MPC Ratio', match: '4/5th Elected (DPC) vs 2/3rd (MPC)' },
      { id: 'c11p4', prompt: 'Mid-Tier Panchayat', match: 'Optional If Population <= 20 Lakhs' }
    ],
    cloze: {
      prefix: 'Extending President’s Rule (Art 356) beyond ONE YEAR requires ',
      middle: ' to be active AND ECI certifying polls impossible; under PESA 1996, ',
      suffix: ' of Chairperson posts in Scheduled Areas go to STs.',
      correct1: 'Article 352 National Emergency',
      correct2: '100% (All Three Tiers)',
      distractors: ['Financial Emergency Art 360', '33% Minimum'],
      hint: 'Check 44th Amendment 1-year Art 356 lock + Rakesh Kumar (2010) upholding PESA.',
      citation: 'Articles 356(5) & PESA Sec 4(g)'
    },
    sequenceTitle: 'Order Constitutional Amendments Building Emergency & Local Guardrails',
    sequenceItems: [
      { id: 's1', label: '24th Amendment Makes 368 Assent Mandatory', sub: '1971', canonicalOrder: 1 },
      { id: 's2', label: '44th Amendment Replaces "Internal Disturbance" + 1-Mo Clock', sub: '1978', canonicalOrder: 2 },
      { id: 's3', label: '73rd & 74th Amendments Add 11th & 12th Schedules', sub: '1992 (Effective Apr/Jun 1993)', canonicalOrder: 3 },
      { id: 's4', label: 'PESA Enacted for 5th Schedule Rural Self-Rule', sub: 'Dec 1996', canonicalOrder: 4 }
    ],
    boss: {
      scenario: 'A State creates a Gram Panchayat election dispute tribunal bypassing courts AND dissolves a Gram Panchayat 2 years early.',
      question: 'Which constitutional rule governs BOTH the fresh election clock and dispute forum?',
      options: [
        'Re-elect within 6 MONTHS (new Panchayat serves ONLY remainder 3 yrs!) & challenges lie ONLY by Election Petition',
        'New Panchayat gets fresh full 5-year term; regular Civil Courts issue election stays',
        'State Election Commissioner serves strictly under Chief Election Commissioner ECI'
      ],
      correctIndex: 0,
      explanation: 'Under Art 243E(3)/(4), post-dissolution election runs within 6 months and reconstituted Panchayat sits SOLELY for remainder of old term; SEC (Art 243K) is independent of ECI!',
      authority: 'Articles 243E, 243K & 243O'
    }
  },
  {
    id: 'ch-12',
    number: 12,
    region: 'Judiciary, Federal & Bodies',
    shortTitle: 'Bodies, Services & Languages',
    title: 'Watchdogs & Institutions: CAG, UPSC/SPSC, ECI 2023, 338 Triad & Languages',
    articles: 'Arts 148, 310–351 & 10th Sch',
    estimatedMinutes: 5,
    linkedSvgId: 'electoral-architecture',
    objective: 'Lock in CAG vs UK limits, SPSC President-only removal (317), CEC Act 2023 panel, NHRC 2019 tweaks, and Art 348/8th Sch.',
    flipPairs: [
      { id: 'c12p1', prompt: 'SPSC Removal (317)', match: 'President Removes (Binding SC Probe!)' },
      { id: 'c12p2', prompt: 'Art 350B Linguistic', match: 'Constitutional Officer (Religious NCM Statutory)' },
      { id: 'c12p3', prompt: 'CVC vs Lokpal Term', match: 'CVC 4 Yr / 65 Age vs Lokpal 5 Yr / 70' },
      { id: 'c12p4', prompt: '8th Schedule Count', match: '22 Languages (English Excluded!)' }
    ],
    cloze: {
      prefix: 'Under the Dec 2023 CEC & ECs Act, selection includes PM, LoP Lok Sabha & a ',
      middle: ' (replacing Anoop Baranwal’s CJI), while the 2019 NHRC amendment cut tenure to ',
      suffix: ' and opened Chairpersonship to ANY retired SC Judge.',
      correct1: 'Union Cabinet Minister',
      correct2: '3 Years / Age 70',
      distractors: ['Lok Sabha Speaker', '6 Years / Age 65'],
      hint: 'Contrast 2023 ECI statutory panel vs Mar 2023 SC interim verdict + 2019 PHRA Act.',
      citation: 'CEC & Other ECs Act 2023 & PHRA Amendment 2019'
    },
    sequenceTitle: 'Order Key Linguistic & Electoral Constitutional Milestones',
    sequenceItems: [
      { id: 's1', label: '61st Amd Cuts Voting Age 21 -> 18 + 52nd Sch 10', sub: '1985–1988', canonicalOrder: 1 },
      { id: 's2', label: '89th Amd Splits NCSC (338) & NCST (338A)', sub: '2003 + 92nd Amd BDMS', canonicalOrder: 2 },
      { id: 's3', label: '102nd Amd NCBC (338B) & 105th Restores State OBCs', sub: '2018 -> 2021', canonicalOrder: 3 },
      { id: 's4', label: 'Electoral Bonds Struck Down & 11 Classical Tongues', sub: '2024 Verdicts & Cabinet', canonicalOrder: 4 }
    ],
    boss: {
      scenario: 'During the November 2024 session, an aspirant claims Indian CAG halts ministry spending before cheques clear AND High Court judgments can default into Hindi via simple State Assembly resolution.',
      question: 'Identify BOTH constitutional truths:',
      options: [
        'Indian CAG audits purely POST-EXPENDITURE (no Treasury purse lock); HC Hindi authorization needs Governor WITH PRESIDENT Prior Consent (Art 348(2))',
        'CAG co-signs all CFI cheques beforehand; Assembly resolution alone converts HC to Hindi',
        'Supreme Court proceedings convert to Hindi automatically under 1963 Act'
      ],
      correctIndex: 0,
      explanation: 'Unlike UK’s Comptroller+Auditor, Indian CAG performs strictly post-spend audits; and Art 348(2) requires Governor + PRIOR PRESIDENTIAL CONSENT strictly for HC proceedings (authoritative texts & SC remain English).',
      authority: 'Articles 149–151 & Article 348(1)–(2)'
    }
  }
];

export const CURRICULUM_PLAN_PRESETS: CurriculumPlanPreset[] = [
  {
    id: 'all',
    label: 'Complete Constitutional Roadmap (12 Ch)',
    description: 'Sequential end-to-end mastery from Preamble & Territory to Constitutional Bodies & Languages.',
    chapterIds: ODYSSEY_CHAPTERS.map((c) => c.id)
  },
  {
    id: 'prelims-core',
    label: 'Prelims High-Weightage Sprint (7 Ch)',
    description: 'Highest ROI UPSC & Judiciary chapters: Rights, Parliament, Judiciary, Federalism & Bodies.',
    chapterIds: ['ch-02', 'ch-03', 'ch-04', 'ch-06', 'ch-07', 'ch-08', 'ch-10']
  },
  {
    id: 'institutions',
    label: 'Executive, Federal & Watchdogs Track (6 Ch)',
    description: 'Deep operational recall on Parliament procedures, Governors, GST/Schedules, Emergency & Watchdogs.',
    chapterIds: ['ch-06', 'ch-07', 'ch-09', 'ch-10', 'ch-11', 'ch-12']
  }
];
