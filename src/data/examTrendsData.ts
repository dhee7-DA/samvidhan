export type TargetExamId = 'upsc' | 'djs' | 'uppcsj' | 'bjs' | 'rjs' | 'mpcj' | 'clat';

export interface ExamProfile {
  id: TargetExamId;
  name: string;
  shortName: string;
  badge: string;
  subtitle: string;
  totalQuestionsAnalyzed: number;
  averageCutoff: string;
  examPatternIntel: string;
  topScoringPillars: string[];
  examinerStyleNotes: string[];
}

export interface PillarTrend {
  pillarId: string;
  pillarName: string;
  articleRange: string;
  tenYearCount: number;
  sharePercentage: number;
  trendVelocity: 'RISING' | 'STABLE_CORE' | 'VOLATILE';
  yearlyBreakdown: Record<number, number>; // 2014 to 2024
  topRecurringSubtopics: string[];
  examinerTrapWarning: string;
}

export interface AuthenticPyqQuestion {
  id: string;
  examId: TargetExamId;
  year: number;
  paperName: string;
  questionType: 'PRELIMS_MCQ' | 'MAINS_DESCRIPTIVE';
  marks: number;
  title: string;
  questionText: string;
  options?: { key: string; text: string }[];
  correctOption?: string;
  explanation: string;
  coreArticles: string[];
  benchmarkCase: string;
  examinerScoringTip: string;
}

// =========================================================================
// 1. EXAM PROFILES
// =========================================================================
export const EXAM_PROFILES: ExamProfile[] = [
  {
    id: 'upsc',
    name: 'UPSC Civil Services Examination (CSE)',
    shortName: 'UPSC CSE',
    badge: 'Prelims & Mains GS-2 / Law',
    subtitle: 'High-concept questions testing institutional friction, constitutional morality, and non-obstante clauses',
    totalQuestionsAnalyzed: 184,
    averageCutoff: 'GS-2 Target: 105–120 / 250 Marks',
    examPatternIntel:
      'UPSC avoids verbatim statutory regurgitation. Instead, questions pit executive expediency against judicial boundaries (Governor vs Assembly, Tenth Schedule vs Speaker, ECI appointment). In Prelims, questions heavily exploit negative marking traps using words like "only", "sole discretion", and "as defined in the Constitution".',
    topScoringPillars: [
      'Executive & Federal Friction (Arts. 163, 200, 356)',
      'Parliamentary Anti-Defection & Privileges (Tenth Schedule, Art. 105)',
      'Fundamental Rights & Dynamic Equality (Arts. 14, 19, 21)'
    ],
    examinerStyleNotes: [
      'Look for the phrase "as defined in the Constitution"—almost always false because terms like "Cabinet" (except Art. 352), "Office of Profit", and "Basic Structure" are not comprehensively defined.',
      'Always test Governor\'s discretionary powers against Article 163(1) and First Proviso to Article 200.',
      'Mains requires 4-step IRAC answers ending with Commission recommendations (Sarkaria, Punchhi, 2nd ARC).'
    ]
  },
  {
    id: 'djs',
    name: 'Delhi Judicial Service Examination (DJS)',
    shortName: 'DJS',
    badge: 'Preliminary & Mains Law Paper',
    subtitle: 'Rigorous legal analysis testing criminal due process, marital autonomy, personal liberty, and writ jurisprudence',
    totalQuestionsAnalyzed: 142,
    averageCutoff: 'Mains Law Cutoff: 55–60%',
    examPatternIntel:
      'DJS sets the highest benchmark among Indian judicial exams. Questions are presented as complex courtroom factual problem dossiers requiring application of recent Supreme Court and Delhi High Court Division Bench decisions. Heavy weightage on criminal due process (Arts. 20, 21, 22), privacy, search and seizure, and preventive detention.',
    topScoringPillars: [
      'Criminal Due Process & Custodial Protections (Arts. 20, 21, 22)',
      'Writ Jurisdiction & Locus Standi (Arts. 32 & 226)',
      'Supreme Court Extraordinary Powers (Article 142)'
    ],
    examinerStyleNotes: [
      'Always cite the exact paragraph or ratio decidendi of recent landmark rulings (e.g. Satender Kumar Antil, Ameena Begum, Shilpa Sailesh).',
      'Distinguish clearly between procedural irregularity and constitutional illegality.',
      'Examine whether ordinary criminal statutes (CrPC/BNSS) provide adequate remedies before invoking extraordinary writ jurisdiction.'
    ]
  },
  {
    id: 'uppcsj',
    name: 'UP PCS-J & Hindi Heartland Judicial Services',
    shortName: 'UP PCS-J / MPJ / BJS',
    badge: 'State Judicial Services',
    subtitle: 'Clause-level textual precision, classic doctrines, limitation periods, and judicial service safeguards',
    totalQuestionsAnalyzed: 168,
    averageCutoff: 'Constitutional Law Paper: 120 / 200 Marks',
    examPatternIntel:
      'State judiciary examinations in UP, MP, Bihar, and Rajasthan test deep, foundational doctrinal mastery. Questions frequently demand short notes or structured essays on canonical doctrines (Eclipse, Severability, Pith & Substance, Colourable Legislation, Res Judicata in Writs, Article 311 safeguards). Textual clause numbers and landmark constitution bench names are essential for full marks.',
    topScoringPillars: [
      'Judicial Review Doctrines (Article 13)',
      'Legislative Relations & Federal Lists (Articles 245–254)',
      'Civil Services Constitutional Protections (Articles 310 & 311)'
    ],
    examinerStyleNotes: [
      'Verbatim statutory reproduction of Article clauses is heavily rewarded.',
      'Must cite foundational classic cases (Bhikaji Narain, Deep Chand, Ram Jawaya Kapur, Tulsiram Patel).',
      'Keep answers crisp, point-wise, and clearly delineated with roman numerals.'
    ]
  },
  {
    id: 'bjs',
    name: 'Bihar Judicial Service Examination (BPSC BJS)',
    shortName: 'Bihar Judiciary (BJS)',
    badge: '31st & 32nd BPSC Mains & Prelims',
    subtitle: 'Dedicated compulsory 150-mark paper testing ordinance repromulgation, extraordinary writs, and emergency review',
    totalQuestionsAnalyzed: 156,
    averageCutoff: 'Constitutional & Admin Law: 110 / 150 Marks',
    examPatternIntel:
      'Bihar Judiciary features an independent compulsory paper in Constitutional Law & Administrative Law (150 Marks). Examiners test expansive theoretical depth on Ordinance repromulgation (D.C. Wadhwa, Krishna Kumar Singh), comparative analysis of Art 32 vs 226, Natural Justice in administrative action, and President\'s Rule under Article 356 (S.R. Bommai).',
    topScoringPillars: [
      'Ordinance Making Power & Executive Usurpation (Arts. 123 & 213)',
      'Extraordinary Writ Jurisdictions & Locus Standi (Arts. 32 & 226)',
      'Federal Emergency Provisions & Judicial Review (Arts. 352, 356, 360)',
      'Administrative Natural Justice & Discretion (Arts. 14 & 21)'
    ],
    examinerStyleNotes: [
      'Ordinance repromulgation without tabling is an annual staple; must cite D.C. Wadhwa (1987) and 7-Judge bench in Krishna Kumar Singh (2017).',
      'Always contrast Quo Warranto and Certiorari with specific locus standi rules.',
      'High marks awarded for delineating subjective satisfaction vs objective materials in Article 356 proclamations.'
    ]
  },
  {
    id: 'rjs',
    name: 'Rajasthan Judicial Service Examination (RJS)',
    shortName: 'Rajasthan Judiciary (RJS)',
    badge: 'Civil & Criminal Law Paper I & II',
    subtitle: 'Concise analytical problem sets on equality code, personal liberty, judicial independence, and DPSP harmonisation',
    totalQuestionsAnalyzed: 134,
    averageCutoff: 'Law Paper Target: 65% Marks',
    examPatternIntel:
      'RJS questions are tight, prompt, and focus heavily on fundamental freedoms (Article 19(1) restrictions under 19(2)–19(6)), the test of reasonable classification vs non-arbitrariness under Article 14 (Royappa to Shayara Bano), the harmonisation between Fundamental Rights and DPSPs (Champakam Dorairajan to Minerva Mills), and High Court superintendence under Article 227 vs 226.',
    topScoringPillars: [
      'Equality Code & Arbitrariness Doctrine (Arts. 14, 15, 16)',
      'Freedom of Speech, Press & Reasonable Restrictions (Art. 19)',
      'Fundamental Rights vs Directive Principles Interplay (Part III & Part IV)',
      'High Court Judicial & Administrative Superintendence (Arts. 226 & 227)'
    ],
    examinerStyleNotes: [
      'Focus on precise proportionality steps when testing restrictions under Article 19(2)–(6).',
      'Distinguish Article 226 (extraordinary judicial writ remedy) from Article 227 (administrative and judicial supervisory jurisdiction).',
      'Keep answers concise and direct without excessive preamble.'
    ]
  },
  {
    id: 'mpcj',
    name: 'Madhya Pradesh Civil Judge Examination (MPCJ)',
    shortName: 'MP Civil Judge (MPCJ)',
    badge: 'High Court of MP Judicial Cadre',
    subtitle: 'Clause-specific statutory dissection, criminal protections, constitutional remedies, and Preamble jurisprudence',
    totalQuestionsAnalyzed: 148,
    averageCutoff: 'Constitutional Law Prelims: 10/10; Mains: 70%',
    examPatternIntel:
      'MPCJ prelims features a dedicated 10-mark constitutional law section where candidates aim for 10/10. Mains questions test exact constitutional wording: Ex Post Facto laws (Article 20(1) with civil vs criminal penalties), Double Jeopardy (Article 20(2) judicial prosecution vs departmental inquiry), and the landmark debate on whether the Preamble is an integral part of the Constitution (Berubari vs Kesavananda Bharati).',
    topScoringPillars: [
      'Criminal Constitutional Guarantees (Arts. 20(1), 20(2), 20(3))',
      'Fundamental Rights Enforcement & Territory (Arts. 12, 13, 32)',
      'Preamble & Basic Structure Integrity (Preamble & Art. 368)',
      'Union & State Judiciary Appointment Safeguards (Arts. 124 & 217)'
    ],
    examinerStyleNotes: [
      'Quote the exact wording of Article 20 clauses (e.g. "greater penalty than that which might have been inflicted").',
      'Cite Maqbool Hussain and Venkataraman to show departmental inquiry is not prosecution for Double Jeopardy.',
      'Point-wise, high-density answers score highest in MP High Court evaluations.'
    ]
  },
  {
    id: 'clat',
    name: 'CLAT PG / LL.M Entrance Examinations',
    shortName: 'CLAT PG',
    badge: 'Post-Graduate National Law Entrance',
    subtitle: 'Comprehension-based extracts testing recent Constitution Bench verdicts, dissenting opinions, and legal philosophy',
    totalQuestionsAnalyzed: 120,
    averageCutoff: 'Target Score: 85+ / 120 Marks',
    examPatternIntel:
      'CLAT PG exclusively utilizes paragraph extracts drawn verbatim from recent Supreme Court judgments (typically 5-judge and 7-judge benches from the preceding 12–18 months). Questions interrogate majority vs dissenting ratios, historical overrulings, statutory amendment interactions, and fundamental rights jurisprudence.',
    topScoringPillars: [
      'Recent 5-Judge & 7-Judge Constitution Bench Rulings',
      'Fundamental Rights & Constitutional Morality (Part III)',
      'Separation of Powers & Judicial Review'
    ],
    examinerStyleNotes: [
      'Memorize the exact bench composition (number of judges, authoring judge, dissenting judge).',
      'Note which prior judgments were explicitly overruled vs distinguished.',
      'Understand the specific statutory provisions altered by the ruling.'
    ]
  }
];

// =========================================================================
// 2. 10-YEAR TOPIC RECURRENCE HEATMAP (2014–2024)
// =========================================================================
export const TEN_YEAR_PILLAR_HEATMAP: Record<TargetExamId, PillarTrend[]> = {
  upsc: [
    {
      pillarId: 'pillar-executive-governor',
      pillarName: 'Union & State Executive (President, Governor & Ordinances)',
      articleRange: 'Articles 52–78, 123, 152–167, 200, 213, 356',
      tenYearCount: 46,
      sharePercentage: 25,
      trendVelocity: 'RISING',
      yearlyBreakdown: { 2014: 3, 2015: 4, 2016: 3, 2017: 5, 2018: 4, 2019: 5, 2020: 4, 2021: 5, 2022: 4, 2023: 5, 2024: 4 },
      topRecurringSubtopics: [
        'Governor\'s Assent & Pocket Veto under Article 200 (State of Punjab 2023)',
        'Gubernatorial Discretion in Hung Assemblies (Sarkaria guidelines)',
        'Ordinance Repromulgation as Fraud on Constitution (Krishna Kumar Singh 2017)',
        'Pardoning Powers under Article 72 vs 161 (Perarivalan 2022)'
      ],
      examinerTrapWarning:
        'Examiners test whether the Governor can reserve a repassed bill for the President. Remember: State of Tamil Nadu (2024) held this contrary to constitutional morality!'
    },
    {
      pillarId: 'pillar-fr-equality',
      pillarName: 'Fundamental Rights & Equality Code (The Golden Triangle)',
      articleRange: 'Articles 14, 15, 16, 19, 21, 32',
      tenYearCount: 42,
      sharePercentage: 23,
      trendVelocity: 'STABLE_CORE',
      yearlyBreakdown: { 2014: 4, 2015: 4, 2016: 4, 2017: 5, 2018: 5, 2019: 4, 2020: 4, 2021: 4, 2022: 4, 2023: 4, 2024: 4 },
      topRecurringSubtopics: [
        'Substantive Equality & Sub-Classification of SCs (Davinder Singh 2024)',
        'Right to Information as Article 19(1)(a) facet vs Electoral Bonds (ADR 2024)',
        'Right against Climate Change under Articles 14 & 21 (Ranjitsinh 2024)',
        'EWS Quota validity under 103rd Amendment (Janhit Abhiyan 2022)'
      ],
      examinerTrapWarning:
        'Article 15(1) prohibits discrimination on "place of birth", NOT "residence" (D.P. Joshi v. State of Madhya Bharat).'
    },
    {
      pillarId: 'pillar-parliament-privileges',
      pillarName: 'Parliament, Speaker & Tenth Schedule',
      articleRange: 'Articles 79–122, 168–212, Tenth Schedule',
      tenYearCount: 35,
      sharePercentage: 19,
      trendVelocity: 'RISING',
      yearlyBreakdown: { 2014: 2, 2015: 3, 2016: 4, 2017: 3, 2018: 4, 2019: 3, 2020: 4, 2021: 4, 2022: 4, 2023: 4, 2024: 3 },
      topRecurringSubtopics: [
        'Political Party vs Legislature Party in Defection (Subhash Desai 2023)',
        'Bribery Immunity under Article 105(2) Overruled (Sita Soren 2024)',
        'Disqualification upon Conviction under Sec 8(4) RPA (Lily Thomas)',
        'Speaker\'s Impartiality & Keisham Meghachandra (2020) tribunal reform'
      ],
      examinerTrapWarning:
        'The Whip is authorized by the registered Political Party, not an insulated breakaway splinter group of MLAs!'
    },
    {
      pillarId: 'pillar-federalism-finance',
      pillarName: 'Federal Relations & Fiscal Federalism',
      articleRange: 'Articles 245–263, 279A, 280, Seventh Schedule',
      tenYearCount: 28,
      sharePercentage: 15,
      trendVelocity: 'STABLE_CORE',
      yearlyBreakdown: { 2014: 2, 2015: 3, 2016: 2, 2017: 3, 2018: 3, 2019: 3, 2020: 3, 2021: 3, 2022: 3, 2023: 3, 2024: 3 },
      topRecurringSubtopics: [
        'GST Council Article 279A Voting Asymmetry & Uncooperative Federalism (Mohit Minerals)',
        'Inter-State Water Disputes under Article 262 vs Article 136 review',
        'Territorial Nexus & Repugnancy under Article 254(2)',
        'Cess & Surcharge Squeeze on State Devolution under Article 270'
      ],
      examinerTrapWarning:
        'GST Council recommendations under Article 279A(4) are NOT binding mandates; they possess persuasive value!'
    },
    {
      pillarId: 'pillar-judiciary-appointments',
      pillarName: 'Judiciary, Collegium & Constitutional Remedies',
      articleRange: 'Articles 124–147, 214–227, 32, 226',
      tenYearCount: 22,
      sharePercentage: 12,
      trendVelocity: 'STABLE_CORE',
      yearlyBreakdown: { 2014: 2, 2015: 3, 2016: 2, 2017: 2, 2018: 2, 2019: 2, 2020: 2, 2021: 2, 2022: 3, 2023: 2, 2024: 2 },
      topRecurringSubtopics: [
        'Article 142 "Complete Justice" powers & limits (Shilpa Sailesh & SCBA)',
        'Judicial Appointments & Collegium vs Memorandum of Procedure (MoP)',
        'Tribunalization & Independence of Judiciary (Madras Bar Association)',
        'Special Leave Petition Docket Filtering under Article 136 (Mathai v. George)'
      ],
      examinerTrapWarning:
        'Article 142 cannot be used to bypass substantive statutory law or create rights out of thin air (SCBA v. UOI).'
    },
    {
      pillarId: 'pillar-amendments-basic-structure',
      pillarName: 'Constitutional Amendments & Basic Structure',
      articleRange: 'Articles 368, 31B, Ninth Schedule',
      tenYearCount: 11,
      sharePercentage: 6,
      trendVelocity: 'VOLATILE',
      yearlyBreakdown: { 2014: 1, 2015: 1, 2016: 1, 2017: 1, 2018: 1, 2019: 1, 2020: 1, 2021: 1, 2022: 1, 2023: 1, 2024: 2 },
      topRecurringSubtopics: [
        'I.R. Coelho (2007) Twin-Test for Ninth Schedule Statutes',
        'Preamble Amendability & Secularism (Balram Singh 2024)',
        'Article 370 Abrogation & Temporary Status (2023 5-Judge Bench)',
        '106th CAA (Nari Shakti Vandan Adhiniyam) Implementation Criteria'
      ],
      examinerTrapWarning:
        'The Ninth Schedule does NOT enjoy blanket immunity; laws inserted after April 24, 1973 are subject to Basic Structure scrutiny!'
    }
  ],

  djs: [
    {
      pillarId: 'pillar-djs-due-process',
      pillarName: 'Criminal Due Process, Bail & Undertrial Rights (Arts. 20, 21, 22)',
      articleRange: 'Articles 20(1), 20(2), 20(3), 21, 22',
      tenYearCount: 52,
      sharePercentage: 37,
      trendVelocity: 'RISING',
      yearlyBreakdown: { 2015: 4, 2016: 5, 2017: 5, 2018: 6, 2019: 5, 2020: 5, 2021: 5, 2022: 6, 2023: 6, 2024: 5 },
      topRecurringSubtopics: [
        'Self-Incrimination under Art 20(3) vs Forensics (Selvi, Sec 349 BNSS)',
        'Double Jeopardy under Art 20(2) vs Departmental Enquiries (Venkataraman)',
        'Bail Jurisprudence & Satender Kumar Antil (2022) Guidelines',
        'Preventive Detention Procedural Lapses under Art 22(5) (Pramod Singla 2023)'
      ],
      examinerTrapWarning:
        'Article 20(1) protects against ex-post facto penal conviction or sentence; it does NOT protect against retrospective procedural changes!'
    },
    {
      pillarId: 'pillar-djs-privacy-autonomy',
      pillarName: 'Bodily Autonomy, Gender & Privacy (Arts. 14, 19, 21)',
      articleRange: 'Articles 14, 15, 21',
      tenYearCount: 38,
      sharePercentage: 27,
      trendVelocity: 'RISING',
      yearlyBreakdown: { 2015: 3, 2016: 3, 2017: 4, 2018: 5, 2019: 4, 2020: 4, 2021: 4, 2022: 4, 2023: 4, 2024: 3 },
      topRecurringSubtopics: [
        'Marital Rape Exception 2 to Section 375 IPC / Sec 63 BNS (Delhi HC Split)',
        'Same-Sex Marriage & Decisional Autonomy (Supriyo 2023)',
        'Right to Die with Dignity & Living Wills (Common Cause 2023 modification)',
        'Bulldozer Justice & Pan-India Demolition Directions (2024)'
      ],
      examinerTrapWarning:
        'In Supriyo (2023), the Supreme Court did NOT recognize a fundamental right to marry; marriage remains a statutory right!'
    },
    {
      pillarId: 'pillar-djs-writs',
      pillarName: 'High Court Writ Jurisprudence & Judicial Review (Art. 226)',
      articleRange: 'Articles 226, 227, 32',
      tenYearCount: 32,
      sharePercentage: 23,
      trendVelocity: 'STABLE_CORE',
      yearlyBreakdown: { 2015: 3, 2016: 3, 2017: 3, 2018: 3, 2019: 3, 2020: 3, 2021: 4, 2022: 3, 2023: 4, 2024: 3 },
      topRecurringSubtopics: [
        'Alternative Efficacious Statutory Remedy vs Writ Maintainability (Whirlpool)',
        'Writ of Habeas Corpus in Custodial Detention (ADM Jabalpur overruled)',
        'Writ of Quo Warranto against Statutory Office Holders',
        'Territorial Jurisdiction under Article 226(2) & Cause of Action'
      ],
      examinerTrapWarning:
        'Article 226 is WIDER than Article 32 because High Courts can issue writs for fundamental rights AND "for any other purpose"!'
    },
    {
      pillarId: 'pillar-djs-art142-special',
      pillarName: 'Article 142 Complete Justice & Family Law Dissolution',
      articleRange: 'Articles 142(1), 136',
      tenYearCount: 20,
      sharePercentage: 13,
      trendVelocity: 'STABLE_CORE',
      yearlyBreakdown: { 2015: 1, 2016: 2, 2017: 2, 2018: 2, 2019: 2, 2020: 2, 2021: 2, 2022: 2, 2023: 3, 2024: 2 },
      topRecurringSubtopics: [
        'Dissolution on Irretrievable Breakdown under Art 142 (Shilpa Sailesh 2023)',
        'Waiving 6-month statutory period under Sec 13B(2) Hindu Marriage Act',
        'Contempt of Court & Limits of Inherent Jurisdiction (SCBA 1998)'
      ],
      examinerTrapWarning:
        'High Courts and Family Courts CANNOT grant divorce on irretrievable breakdown; that power belongs exclusively to the Supreme Court under Article 142!'
    }
  ],

  uppcsj: [
    {
      pillarId: 'pillar-up-judicial-review-doctrines',
      pillarName: 'Article 13 & Foundational Constitutional Doctrines',
      articleRange: 'Articles 13(1), 13(2), 13(3), 13(4)',
      tenYearCount: 48,
      sharePercentage: 29,
      trendVelocity: 'STABLE_CORE',
      yearlyBreakdown: { 2015: 5, 2016: 4, 2017: 5, 2018: 5, 2019: 5, 2020: 4, 2021: 5, 2022: 5, 2023: 5, 2024: 5 },
      topRecurringSubtopics: [
        'Doctrine of Eclipse under Article 13(1) (Bhikaji Narain, Deep Chand)',
        'Doctrine of Severability (AK Gopalan, RMDC v. Union of India)',
        'Doctrine of Waiver of Fundamental Rights (Behram Khurshed, Basheshar Nath)',
        'Definition of "Law" under Article 13(3) vs Constitutional Amendments'
      ],
      examinerTrapWarning:
        'Fundamental Rights CANNOT be waived by an Indian citizen under any circumstances (Basheshar Nath v. CIT).'
    },
    {
      pillarId: 'pillar-up-civil-services',
      pillarName: 'Civil Services Protections & Doctrine of Pleasure',
      articleRange: 'Articles 309, 310, 311',
      tenYearCount: 40,
      sharePercentage: 24,
      trendVelocity: 'STABLE_CORE',
      yearlyBreakdown: { 2015: 4, 2016: 4, 2017: 4, 2018: 4, 2019: 4, 2020: 4, 2021: 4, 2022: 4, 2023: 4, 2024: 4 },
      topRecurringSubtopics: [
        'Doctrine of Pleasure under Art 310 vs Safeguards under Art 311',
        'Second Proviso to Art 311(2) Exceptions (Clauses a, b, c)',
        'Tulsiram Patel (1985) Exclusion of Natural Justice',
        'Dismissal by Subordinate Authority under Article 311(1)'
      ],
      examinerTrapWarning:
        'Clause (c) of Article 311(2) Second Proviso (Security of the State) does NOT require reasons to be communicated to the employee!'
    },
    {
      pillarId: 'pillar-up-legislative-relations',
      pillarName: 'Legislative Relations & Federal Enactments',
      articleRange: 'Articles 245, 246, 248, 254, Seventh Schedule',
      tenYearCount: 42,
      sharePercentage: 25,
      trendVelocity: 'STABLE_CORE',
      yearlyBreakdown: { 2015: 4, 2016: 4, 2017: 4, 2018: 5, 2019: 4, 2020: 4, 2021: 4, 2022: 4, 2023: 5, 2024: 4 },
      topRecurringSubtopics: [
        'Doctrine of Pith and Substance (State of Bombay v. FN Balsara)',
        'Doctrine of Colourable Legislation (Kameshwar Singh)',
        'Repugnancy in Concurrent List under Article 254 (Karunanidhi, Hoechst)',
        'Presidential Assent under Article 254(2) Protecting State Statutes'
      ],
      examinerTrapWarning:
        'Presidential assent under Article 254(2) protects a State statute ONLY against existing Central laws on that specific subject, not future parliamentary statutes!'
    },
    {
      pillarId: 'pillar-up-emergency-amendments',
      pillarName: 'Emergency Provisions & Constitutional Amendments',
      articleRange: 'Articles 352, 356, 360, 368',
      tenYearCount: 38,
      sharePercentage: 22,
      trendVelocity: 'STABLE_CORE',
      yearlyBreakdown: { 2015: 3, 2016: 4, 2017: 4, 2018: 4, 2019: 4, 2020: 4, 2021: 4, 2022: 4, 2023: 4, 2024: 3 },
      topRecurringSubtopics: [
        'Article 352 Proclamation: 44th Amendment Safeguards & Judicial Review',
        'Article 356 Breakdown of Machinery & S.R. Bommai Guidelines',
        'Article 358 vs 359 Suspension of Fundamental Rights',
        'Basic Structure Limitation on Article 368 (Kesavananda, Minerva Mills)'
      ],
      examinerTrapWarning:
        'Articles 20 and 21 can NEVER be suspended under Article 359, even during an active National Emergency (44th Amendment)!'
    }
  ],

  bjs: [
    {
      pillarId: 'pillar-bjs-ordinance',
      pillarName: 'Ordinance Making Power & Repromulgation Jurisprudence',
      articleRange: 'Articles 123, 213, 174',
      tenYearCount: 48,
      sharePercentage: 31,
      trendVelocity: 'RISING',
      yearlyBreakdown: { 2014: 4, 2015: 4, 2016: 5, 2017: 6, 2018: 5, 2019: 5, 2020: 4, 2021: 5, 2022: 5, 2023: 5, 2024: 5 },
      topRecurringSubtopics: [
        'Governor\'s Satisfaction under Article 213 & Judicial Scrutiny',
        'Repromulgation as Fraud on Constitution (D.C. Wadhwa v. State of Bihar)',
        'Mandatory Constitutional Obligation to Lay before House (Krishna Kumar Singh 2017)',
        'Legal Effects of an Ordinance that Ceases to Operate'
      ],
      examinerTrapWarning:
        'In Krishna Kumar Singh (2017), the 7-Judge bench held that rights created under an expired ordinance do NOT automatically survive unless irreversible public interest demands!'
    },
    {
      pillarId: 'pillar-bjs-writs-remedies',
      pillarName: 'Extraordinary Writ Jurisdictions & Public Interest Litigation',
      articleRange: 'Articles 32, 226, 136, 227',
      tenYearCount: 42,
      sharePercentage: 27,
      trendVelocity: 'STABLE_CORE',
      yearlyBreakdown: { 2014: 4, 2015: 4, 2016: 4, 2017: 4, 2018: 4, 2019: 5, 2020: 4, 2021: 4, 2022: 5, 2023: 4, 2024: 4 },
      topRecurringSubtopics: [
        'Scope of "For Any Other Purpose" in Article 226 vs Article 32',
        'Writ of Quo Warranto vs Discretionary Relief & Locus Standi rules',
        'Exhaustion of Alternative Remedies & Exceptions (Whirlpool Corporation)',
        'Supervisory Power under Article 227 vs Writ of Certiorari under Article 226'
      ],
      examinerTrapWarning:
        'Alternative statutory remedy is NOT an absolute bar to Article 226 when Fundamental Rights are violated, natural justice is breached, or proceedings are wholly without jurisdiction (Whirlpool).'
    },
    {
      pillarId: 'pillar-bjs-emergency-relations',
      pillarName: 'Emergency Provisions & Center-State Friction',
      articleRange: 'Articles 352, 356, 360, 245–254',
      tenYearCount: 36,
      sharePercentage: 23,
      trendVelocity: 'STABLE_CORE',
      yearlyBreakdown: { 2014: 3, 2015: 3, 2016: 4, 2017: 3, 2018: 4, 2019: 4, 2020: 3, 2021: 4, 2022: 4, 2023: 4, 2024: 3 },
      topRecurringSubtopics: [
        'Proclamation of President\'s Rule under Article 356 (S.R. Bommai v. UOI)',
        'Secularism as Basic Structure Justifying Article 356 Action',
        'Doctrine of Repugnancy in Concurrent List under Article 254',
        'Financial Emergency under Article 360 and Executive Directions'
      ],
      examinerTrapWarning:
        'The Legislative Assembly CANNOT be dissolved before both Houses of Parliament approve the Article 356 proclamation (S.R. Bommai).'
    },
    {
      pillarId: 'pillar-bjs-admin-natural-justice',
      pillarName: 'Administrative Law, Natural Justice & Judicial Review',
      articleRange: 'Articles 14, 21, 309–311',
      tenYearCount: 30,
      sharePercentage: 19,
      trendVelocity: 'RISING',
      yearlyBreakdown: { 2014: 2, 2015: 3, 2016: 3, 2017: 3, 2018: 3, 2019: 3, 2020: 3, 2021: 3, 2022: 4, 2023: 3, 2024: 3 },
      topRecurringSubtopics: [
        'Nemo Judex In Causa Sua & Audi Alteram Partem (A.K. Kraipak v. UOI)',
        'Post-Decisional Hearing Validity (Maneka Gandhi)',
        'Reasoned Decisions / Speaking Orders as Core Component of Natural Justice',
        'Article 311 Civil Services Inquiries & Second Proviso Exceptions'
      ],
      examinerTrapWarning:
        'A post-decisional hearing cannot cure a pre-decisional absence of hearing unless exceptional urgency excludes prior notice (Swadeshi Cotton Mills).'
    }
  ],

  rjs: [
    {
      pillarId: 'pillar-rjs-equality-arbitrariness',
      pillarName: 'Equality Code, Non-Arbitrariness & Affirmative Action',
      articleRange: 'Articles 14, 15, 16, 17, 18',
      tenYearCount: 46,
      sharePercentage: 34,
      trendVelocity: 'RISING',
      yearlyBreakdown: { 2014: 4, 2015: 4, 2016: 5, 2017: 5, 2018: 5, 2019: 4, 2020: 5, 2021: 5, 2022: 5, 2023: 5, 2024: 4 },
      topRecurringSubtopics: [
        'Doctrine of Manifest Arbitrariness (Shayara Bano v. UOI)',
        'Royappa Principle: Equality as Dynamic Anti-Thesis of Arbitrariness',
        'Sub-Classification of Reserved Categories (State of Punjab v. Davinder Singh 2024)',
        'Creamy Layer Exclusion in SC/ST Reservations (Jarnail Singh)'
      ],
      examinerTrapWarning:
        'Manifest arbitrariness is now a recognized standalone substantive ground to strike down plenary Parliamentary legislation, not just delegated rules!'
    },
    {
      pillarId: 'pillar-rjs-liberties-dpsp',
      pillarName: 'Fundamental Freedoms, Personal Liberty & DPSP Interplay',
      articleRange: 'Articles 19, 21, Part IV (DPSPs)',
      tenYearCount: 48,
      sharePercentage: 36,
      trendVelocity: 'STABLE_CORE',
      yearlyBreakdown: { 2014: 4, 2015: 5, 2016: 4, 2017: 5, 2018: 5, 2019: 5, 2020: 5, 2021: 5, 2022: 5, 2023: 5, 2024: 5 },
      topRecurringSubtopics: [
        'Reasonable Restrictions under Article 19(2)–(6) & First Amendment 1951',
        'Modern Article 21 Expansion: Privacy (Puttaswamy), Livelihood (Olga Tellis)',
        'Harmonious Construction between Part III and Part IV (Minerva Mills)',
        'Speedy Trial and Compensation for Illegal Detention (Rudul Sah)'
      ],
      examinerTrapWarning:
        'Article 19(1) freedoms are available ONLY to Indian citizens; corporations and non-citizens cannot claim Article 19 rights.'
    },
    {
      pillarId: 'pillar-rjs-judiciary-superintendence',
      pillarName: 'High Court Supervisory Jurisdictions & Subordinate Judiciary',
      articleRange: 'Articles 214–237',
      tenYearCount: 40,
      sharePercentage: 30,
      trendVelocity: 'STABLE_CORE',
      yearlyBreakdown: { 2014: 3, 2015: 4, 2016: 4, 2017: 4, 2018: 4, 2019: 4, 2020: 4, 2021: 4, 2022: 5, 2023: 4, 2024: 4 },
      topRecurringSubtopics: [
        'Superintendence over all Courts & Tribunals under Article 227 vs Article 226',
        'Appointment & Independence of Subordinate Judiciary under Articles 233–235',
        'Writ of Certiorari for Error Apparent on Face of Record',
        'High Court as Court of Record & Contempt Powers under Article 215'
      ],
      examinerTrapWarning:
        'Article 227 supervisory jurisdiction cannot be exercised as an appellate court to re-appreciate factual findings; it is strictly supervisory to keep tribunals within bounds.'
    }
  ],

  mpcj: [
    {
      pillarId: 'pillar-mpcj-criminal-guarantees',
      pillarName: 'Constitutional Guarantees in Criminal Trials',
      articleRange: 'Articles 20, 21, 22',
      tenYearCount: 56,
      sharePercentage: 38,
      trendVelocity: 'STABLE_CORE',
      yearlyBreakdown: { 2014: 5, 2015: 5, 2016: 6, 2017: 6, 2018: 6, 2019: 5, 2020: 6, 2021: 6, 2022: 6, 2023: 5, 2024: 5 },
      topRecurringSubtopics: [
        'Ex Post Facto Laws under Article 20(1) & Enhanced Penalties',
        'Double Jeopardy under Article 20(2) vs Section 300 CrPC / BNSS (Maqbool Hussain)',
        'Right against Self-Incrimination under Article 20(3) (Kathi Kalu Oghad, Selvi)',
        'Arrest & Preventive Detention Safeguards under Article 22(1)–(5)'
      ],
      examinerTrapWarning:
        'Article 20(1) prohibits retrospective criminal punishment or penalty; it does NOT prohibit retrospective civil liability or retrospective procedural amendments!'
    },
    {
      pillarId: 'pillar-mpcj-fundamental-rights-remedies',
      pillarName: 'Fundamental Rights Concept & Judicial Review',
      articleRange: 'Articles 12, 13, 32',
      tenYearCount: 50,
      sharePercentage: 34,
      trendVelocity: 'STABLE_CORE',
      yearlyBreakdown: { 2014: 5, 2015: 5, 2016: 5, 2017: 5, 2018: 5, 2019: 5, 2020: 5, 2021: 5, 2022: 5, 2023: 5, 2024: 5 },
      topRecurringSubtopics: [
        'Definition of "State" & Instrumentality Tests under Article 12 (Ajay Hasia)',
        'Doctrine of Eclipse & Severability under Article 13',
        'Article 32 as the "Heart and Soul" of the Constitution',
        'Judicial Review as Basic Feature of the Constitution (L. Chandra Kumar)'
      ],
      examinerTrapWarning:
        'Judiciary in its purely judicial capacity is NOT "State" under Article 12 (Naresh Shridhar Mirajkar v. State of Maharashtra).'
    },
    {
      pillarId: 'pillar-mpcj-preamble-amendment',
      pillarName: 'Preamble, Basic Structure & Constitutional Amendment',
      articleRange: 'Preamble, Articles 368, 1–4',
      tenYearCount: 42,
      sharePercentage: 28,
      trendVelocity: 'RISING',
      yearlyBreakdown: { 2014: 4, 2015: 4, 2016: 4, 2017: 4, 2018: 4, 2019: 5, 2020: 4, 2021: 4, 2022: 4, 2023: 5, 2024: 4 },
      topRecurringSubtopics: [
        'Preamble as Integral Part of Constitution (Berubari vs Kesavananda Bharati)',
        '42nd Amendment 1976 Additions to Preamble ("Socialist, Secular, Integrity")',
        'Procedure for Constitutional Amendment under Article 368',
        'Territory of the Union & Reorganization of States under Articles 2, 3, 4'
      ],
      examinerTrapWarning:
        'A Bill under Article 3 to reorganize state boundaries does NOT require an amendment under Article 368; it is passed by a simple majority (Article 4).'
    }
  ],

  clat: [
    {
      pillarId: 'pillar-clat-constitution-bench-rulings',
      pillarName: 'Recent 5-Judge & 7-Judge Constitution Bench Decisions',
      articleRange: 'Articles 14, 19, 21, 105, 341, 370',
      tenYearCount: 55,
      sharePercentage: 46,
      trendVelocity: 'RISING',
      yearlyBreakdown: { 2015: 4, 2016: 5, 2017: 5, 2018: 6, 2019: 6, 2020: 6, 2021: 6, 2022: 6, 2023: 6, 2024: 5 },
      topRecurringSubtopics: [
        'State of Punjab v. Davinder Singh (2024, 7-Judge Bench on SC Sub-Classification)',
        'Sita Soren v. Union of India (2024, 7-Judge Bench on Bribery Immunity)',
        'ADR v. Union of India (2024, 5-Judge Bench on Electoral Bonds)',
        'In Re: Article 370 (2023, 5-Judge Bench on J&K Reorganization)',
        'Supriyo v. Union of India (2023, 5-Judge Bench on Marriage Equality)'
      ],
      examinerTrapWarning:
        'Davinder Singh (2024) had a 6:1 majority; Justice Bela Trivedi delivered the sole dissenting judgment!'
    },
    {
      pillarId: 'pillar-clat-rights-jurisprudence',
      pillarName: 'Modern Fundamental Rights & Constitutional Morality',
      articleRange: 'Articles 14, 15, 19, 21, 25',
      tenYearCount: 38,
      sharePercentage: 32,
      trendVelocity: 'RISING',
      yearlyBreakdown: { 2015: 3, 2016: 3, 2017: 4, 2018: 4, 2019: 4, 2020: 4, 2021: 4, 2022: 4, 2023: 4, 2024: 4 },
      topRecurringSubtopics: [
        'Proportionality Standard in Fundamental Rights Infringement',
        'Constitutional Morality vs Social / Popular Morality (Navtej Johar, Sabarimala)',
        'Horizontal Application of Fundamental Rights (Kaushal Kishor 2023)',
        'Essential Religious Practices Test under Article 25 (Shayara Bano, Hijab case)'
      ],
      examinerTrapWarning:
        'In Kaushal Kishor (2023), the 5-Judge Bench held that Articles 19 and 21 are enforceable horizontally against private individuals!'
    },
    {
      pillarId: 'pillar-clat-institutions',
      pillarName: 'Constitutional Institutions & Electoral Integrity',
      articleRange: 'Articles 324, 239AA, 200, Tenth Schedule',
      tenYearCount: 27,
      sharePercentage: 22,
      trendVelocity: 'STABLE_CORE',
      yearlyBreakdown: { 2015: 2, 2016: 2, 2017: 3, 2018: 3, 2019: 3, 2020: 3, 2021: 3, 2022: 3, 2023: 3, 2024: 2 },
      topRecurringSubtopics: [
        'Anoop Baranwal (2023) Election Commission Appointment Collegium',
        'Subhash Desai (2023) Maharashtra Speaker Disqualification Framework',
        'State of Punjab (2023) & State of Tamil Nadu (2024) Governor Deadlocks',
        'GNCTD v. Union of India (2023) Civil Services Control under Article 239AA'
      ],
      examinerTrapWarning:
        'The Anoop Baranwal interim collegium was expressly operative only until Parliament enacted a law under Article 324(2)!'
    }
  ]
};

// =========================================================================
// 3. AUTHENTIC PAST-YEAR QUESTIONS REGISTRY (UPSC, DJS, UP PCS-J, CLAT)
// =========================================================================
export const AUTHENTIC_EXAM_PYQS: AuthenticPyqQuestion[] = [
  // -------------------------------------------------------------------------
  // UPSC CSE PRELIMS & MAINS
  // -------------------------------------------------------------------------
  {
    id: 'pyq-upsc-2023-prelims-due-process',
    examId: 'upsc',
    year: 2023,
    paperName: 'UPSC CSE Prelims 2023 (GS Paper 1)',
    questionType: 'PRELIMS_MCQ',
    marks: 2,
    title: 'Due Process of Law in the Indian Constitution',
    questionText: 'In essence, what does "Due Process of Law" mean under the Constitution of India?',
    options: [
      { key: 'A', text: 'The principle of natural justice' },
      { key: 'B', text: 'Procedure established by law' },
      { key: 'C', text: 'Fair application of law' },
      { key: 'D', text: 'Equality before law' }
    ],
    correctOption: 'C',
    explanation:
      'In Maneka Gandhi v. Union of India (1978), the Supreme Court held that "procedure established by law" in Article 21 must be just, fair, and reasonable. Therefore, "Due Process of Law" means the fair application and substantive fairness of law (not merely formal compliance).',
    coreArticles: ['Article 21', 'Article 14'],
    benchmarkCase: 'Maneka Gandhi v. Union of India (1978)',
    examinerScoringTip:
      'Candidates often confuse "natural justice" with "due process". Due process encompasses both substantive fairness and procedural natural justice.'
  },
  {
    id: 'pyq-upsc-2023-mains-governor',
    examId: 'upsc',
    year: 2023,
    paperName: 'UPSC CSE Mains 2023 (GS Paper II)',
    questionType: 'MAINS_DESCRIPTIVE',
    marks: 15,
    title: 'Governor\'s Discretionary Powers & Legislative Conflict',
    questionText:
      'The exercise of executive power by the Governor under the Constitution of India has often been a subject of controversy. Examine the constitutional provisions regarding Governor\'s assent to bills with special reference to recent judicial interventions.',
    explanation:
      'Answer must cover Article 200 four choices, the First Proviso mandate "as soon as possible", and the ratio of State of Punjab v. Principal Secretary (2023 per Chandrachud CJI) ruling that the Governor cannot sit on bills indefinitely. Conclude with Sarkaria (6-month limit) and Punchhi recommendations.',
    coreArticles: ['Article 200', 'Article 163', 'Article 174'],
    benchmarkCase: 'State of Punjab v. Principal Secretary to Governor (2023)',
    examinerScoringTip:
      'Award 10+ marks if candidate cites State of Punjab (2023) and explains the interplay between withholding assent and mandatory return under the first proviso.'
  },
  {
    id: 'pyq-upsc-2022-prelims-deputy-speaker',
    examId: 'upsc',
    year: 2022,
    paperName: 'UPSC CSE Prelims 2022 (GS Paper 1)',
    questionType: 'PRELIMS_MCQ',
    marks: 2,
    title: 'Office of the Deputy Speaker of Lok Sabha',
    questionText:
      'With reference to the Deputy Speaker of Lok Sabha, consider the following statements:\n1. As per the Rules of Procedure and Conduct of Business in Lok Sabha, the election of Deputy Speaker shall be held on such date as the Speaker may fix.\n2. There is a mandatory provision that the election of a candidate as Deputy Speaker of Lok Sabha shall be from either the principal opposition party or the ruling party.\n3. The Deputy Speaker has the same power as of the Speaker when presiding over the sitting of the House and no appeal lies against his rulings.\n4. The well-established parliamentary practice regarding the appointment of Deputy Speaker is that the motion is moved by the Speaker and duly seconded by the Prime Minister.\nWhich of the statements given above are correct?',
    options: [
      { key: 'A', text: '1 and 3 only' },
      { key: 'B', text: '1, 2 and 3' },
      { key: 'C', text: '3 and 4 only' },
      { key: 'D', text: '2 and 4 only' }
    ],
    correctOption: 'A',
    explanation:
      'Statement 1 is correct (Rule 8: Speaker fixes the date). Statement 2 is incorrect (convention, not a mandatory constitutional provision). Statement 3 is correct (Article 95(1)). Statement 4 is incorrect (moved by a minister/member, not the Speaker).',
    coreArticles: ['Article 93', 'Article 95'],
    benchmarkCase: 'Rules of Procedure and Conduct of Business in Lok Sabha',
    examinerScoringTip:
      'Trap Alert: Candidates confuse parliamentary convention with mandatory constitutional provisions.'
  },
  {
    id: 'pyq-upsc-2021-prelims-money-bill',
    examId: 'upsc',
    year: 2021,
    paperName: 'UPSC CSE Prelims 2021 (GS Paper 1)',
    questionType: 'PRELIMS_MCQ',
    marks: 2,
    title: 'Constitutional Status & Traps in Money Bills (Article 110)',
    questionText:
      'Regarding a Money Bill under the Constitution of India, consider the following statements:\n1. A Money Bill cannot be introduced in the Rajya Sabha.\n2. If any question arises whether a Bill is a Money Bill or not, the decision of the Speaker of the Lok Sabha thereon shall be final.\n3. The President may withhold assent or return a Money Bill to the Houses for reconsideration.\nWhich of the statements given above are correct?',
    options: [
      { key: 'A', text: '1 and 2 only' },
      { key: 'B', text: '2 and 3 only' },
      { key: 'C', text: '1 and 3 only' },
      { key: 'D', text: '1, 2 and 3' }
    ],
    correctOption: 'A',
    explanation:
      'Statement 1 is correct (Article 109(1)). Statement 2 is correct (Article 110(3)). Statement 3 is INCORRECT: under Article 111, the President may give assent or withhold assent, BUT CANNOT return a Money Bill for reconsideration to the Houses!',
    coreArticles: ['Article 109', 'Article 110', 'Article 111'],
    benchmarkCase: 'K.S. Puttaswamy (Aadhaar-5J) ((2019) 1 SCC 1)',
    examinerScoringTip:
      'Classic negative marking trap: Candidates miss that Article 111 explicitly excludes Money Bills from the President\'s power to return for reconsideration.'
  },

  // -------------------------------------------------------------------------
  // DELHI JUDICIAL SERVICE (DJS)
  // -------------------------------------------------------------------------
  {
    id: 'pyq-djs-2022-prelims-self-incrimination',
    examId: 'djs',
    year: 2022,
    paperName: 'Delhi Judicial Service Preliminary Exam 2022',
    questionType: 'PRELIMS_MCQ',
    marks: 1,
    title: 'Narco-Analysis & Article 20(3) Self-Incrimination Clause',
    questionText:
      'In Selvi v. State of Karnataka (2010), the Supreme Court ruled on the constitutional validity of involuntary narco-analysis, polygraph tests, and BEAP. Which of the following correctly reflects the ratio of the Court?',
    options: [
      { key: 'A', text: 'Involuntary administration is permissible with prior judicial warrant from a Chief Judicial Magistrate' },
      { key: 'B', text: 'Involuntary administration violates Article 20(3) and constitutes an unwarranted intrusion into mental privacy under Article 21' },
      { key: 'C', text: 'Narco-analysis is permitted in heinous offences involving national security without consent' },
      { key: 'D', text: 'Test results are substantive evidence under Section 27 of the Indian Evidence Act' }
    ],
    correctOption: 'B',
    explanation:
      'In Selvi v. State of Karnataka (2010), a 3-Judge bench held that compulsory administration of narco-analysis, polygraph, or brain electrical activation profile (BEAP) violates the privilege against self-incrimination under Article 20(3) and infringes personal liberty and mental privacy under Article 21.',
    coreArticles: ['Article 20(3)', 'Article 21'],
    benchmarkCase: 'Selvi v. State of Karnataka ((2010) 7 SCC 263)',
    examinerScoringTip:
      'DJS heavily tests custodial mental privacy. Voluntary test results may lead to Section 27 discoveries, but the test itself cannot be compelled.'
  },
  {
    id: 'pyq-djs-2023-marital-rape',
    examId: 'djs',
    year: 2023,
    paperName: 'Delhi Judicial Service Mains 2023 (Civil Law Paper 1)',
    questionType: 'MAINS_DESCRIPTIVE',
    marks: 20,
    title: 'Marital Rape Exception: Articles 14 and 21 Analysis',
    questionText:
      '"Exception 2 to Section 375 IPC creates an unconstitutional distinction between married and unmarried women, subordinating female bodily autonomy." Test this proposition on the anvil of Articles 14, 15, and 21 of the Constitution, detailing the Delhi High Court Split Verdict (2022).',
    explanation:
      'Examine Exception 2 to Section 375 IPC / Section 63 BNS. Address Sir Matthew Hale\'s doctrine of implied irrevocable matrimonial consent. Apply Article 14 (arbitrary classification lacking intelligible differentia) and Article 21 (Puttaswamy bodily integrity, Joseph Shine on female agency). Contrast Justice Shakdher (striking it down) vs Justice Hari Shankar (preserving marital sanctity).',
    coreArticles: ['Article 14', 'Article 15', 'Article 21'],
    benchmarkCase: 'RIT Foundation v. Union of India (2022 SCC OnLine Del 1404)',
    examinerScoringTip:
      'Must maintain judicial balance: clearly articulate the rationale of both judges in the Delhi High Court Division Bench split verdict.'
  },
  {
    id: 'pyq-djs-2022-satender-antil-bail',
    examId: 'djs',
    year: 2022,
    paperName: 'Delhi Judicial Service Mains 2022 (Criminal Law Paper)',
    questionType: 'MAINS_DESCRIPTIVE',
    marks: 15,
    title: 'Bail Jurisprudence & Undertrial Detention under Article 21',
    questionText:
      'Discuss the principles laid down by the Supreme Court in Satender Kumar Antil v. CBI (2022) regarding arrest and bail. How does unnecessary arrest violate Article 21 and the Arnesh Kumar guidelines?',
    explanation:
      'Satender Kumar Antil (2022 per Sanjay Kishan Kaul J.) categorized offences into A, B, C, D categories. For Category A (punishable with up to 7 years), no routine arrest should be made without compliance with Section 41/41A CrPC (now BNSS Sec 35). Undertrial detention without trial violates speedy trial rights under Article 21.',
    coreArticles: ['Article 21', 'Article 22', 'Section 41A CrPC'],
    benchmarkCase: 'Satender Kumar Antil v. CBI ((2022) 10 SCC 51)',
    examinerScoringTip:
      'Candidates must list the four offence categories (A to D) and highlight the Court\'s call for a standalone Bail Act.'
  },

  // -------------------------------------------------------------------------
  // UP PCS-J / STATE JUDICIARY
  // -------------------------------------------------------------------------
  {
    id: 'pyq-uppcsj-2023-doctrine-eclipse',
    examId: 'uppcsj',
    year: 2023,
    paperName: 'UP PCS-J Mains 2023 (Constitutional Law Paper)',
    questionType: 'MAINS_DESCRIPTIVE',
    marks: 10,
    title: 'Doctrine of Eclipse under Article 13(1)',
    questionText:
      'Explain the Doctrine of Eclipse under Article 13(1) of the Constitution of India. Does this doctrine apply to post-constitutional laws? Support your answer with landmark judicial decisions.',
    explanation:
      'Define Article 13(1) mandate: pre-constitutional laws inconsistent with Fundamental Rights are void to the extent of inconsistency. Explain Bhikaji Narain (1955) ratio: the law is not dead, only dormant/eclipsed. Detail Deep Chand (1959): post-constitutional laws violating FRs are still-born and void ab initio; Eclipse cannot revive them for citizens (Ambica Mills 1974 exception for non-citizens).',
    coreArticles: ['Article 13(1)', 'Article 13(2)', 'Article 19(1)(g)'],
    benchmarkCase: 'Bhikaji Narain Dhakras v. State of M.P. (AIR 1955 SC 781)',
    examinerScoringTip:
      'Clearly state that under Deep Chand, Eclipse does not apply to post-constitutional laws as against citizens.'
  },
  {
    id: 'pyq-uppcsj-2023-article-311',
    examId: 'uppcsj',
    year: 2023,
    paperName: 'UP PCS-J Mains 2023 (Constitutional Law Paper)',
    questionType: 'MAINS_DESCRIPTIVE',
    marks: 15,
    title: 'Civil Services Protections & Second Proviso Exceptions',
    questionText:
      'Examine the constitutional safeguards provided to civil servants under Article 311. Under what circumstances can a departmental inquiry be dispensed with under the Second Proviso? Discuss in light of Union of India v. Tulsiram Patel (1985).',
    explanation:
      'Explain Article 310 Doctrine of Pleasure qualified by Article 311(1) (no dismissal by subordinate authority) and Article 311(2) (reasonable opportunity of inquiry). Dissect the Second Proviso three exceptions: (a) Criminal conviction; (b) Impracticability recorded in writing; (c) Security of the State. Detail Tulsiram Patel (1985) holding natural justice is constitutionally excluded.',
    coreArticles: ['Article 310', 'Article 311(1)', 'Article 311(2)'],
    benchmarkCase: 'Union of India v. Tulsiram Patel ((1985) 3 SCC 398)',
    examinerScoringTip:
      'Emphasize that subjective satisfaction under Clause (c) belongs to President/Governor on ministerial advice.'
  },
  {
    id: 'pyq-uppcsj-2023-prelims-article-368',
    examId: 'uppcsj',
    year: 2023,
    paperName: 'UP PCS-J Preliminary Examination 2023 (Law Paper)',
    questionType: 'PRELIMS_MCQ',
    marks: 1,
    title: 'Constitutional Amendment Proviso & State Ratification Requirements',
    questionText:
      'Which of the following constitutional provisions requires ratification by the legislatures of not less than one-half of the States before being presented to the President for assent under the Proviso to Article 368(2)?\n1. Election of the President (Articles 54 and 55)\n2. Representation of States in Parliament (Fourth Schedule)\n3. Any of the Lists in the Seventh Schedule\n4. Abolition or creation of Legislative Councils in States (Article 169)\nSelect the correct answer using the code given below:',
    options: [
      { key: 'A', text: '1, 2 and 3 only' },
      { key: 'B', text: '1, 3 and 4 only' },
      { key: 'C', text: '2 and 4 only' },
      { key: 'D', text: '1, 2, 3 and 4' }
    ],
    correctOption: 'A',
    explanation:
      'The Proviso to Article 368(2) specifies federal provisions requiring ratification by half of state legislatures: (a) Arts 54, 55, 73, 162, 241; (b) Chapter IV Part V, Chapter V Part VI, Chapter I Part XI; (c) Any of the Lists in the 7th Schedule; (d) Representation of States in Parliament; (e) Article 368 itself. Article 169 (creation/abolition of Legislative Councils) is explicitly enacted by a SIMPLE majority of Parliament and is NOT deemed to be an amendment under Article 368!',
    coreArticles: ['Article 368(2)', 'Article 169', 'Article 54'],
    benchmarkCase: 'Kihoto Hollohan v. Zachillhu (1992 Supp (2) SCC 651)',
    examinerScoringTip:
      'High-recurrence trap in State Judiciary: Article 169 and Article 2/3/4 are passed by simple majority, not Article 368.'
  },

  // -------------------------------------------------------------------------
  // CLAT PG / LL.M ENTRANCE
  // -------------------------------------------------------------------------
  {
    id: 'pyq-clat-2024-electoral-bonds',
    examId: 'clat',
    year: 2024,
    paperName: 'CLAT PG 2024 (Extract Comprehension)',
    questionType: 'PRELIMS_MCQ',
    marks: 1,
    title: 'ADR v. Union of India: Proportionality Standard in Electoral Bonds',
    questionText:
      'In Association for Democratic Reforms (ADR) v. Union of India (2024), on which specific prong of the Proportionality Standard did the Electoral Bonds Scheme primarily fail?',
    options: [
      { key: 'A', text: 'Legitimate State Goal' },
      { key: 'B', text: 'Rational Connection' },
      { key: 'C', text: 'Necessity / Least Restrictive Measure' },
      { key: 'D', text: 'Procedural Competence' }
    ],
    correctOption: 'C',
    explanation:
      'A unanimous 5-Judge Constitution Bench held that curbing black money was a legitimate goal having a rational connection, BUT the scheme failed the third prong (Necessity) because less restrictive alternatives existed (such as Electoral Trusts and digital donations) that achieve the goal without extinguishing voter transparency under Article 19(1)(a).',
    coreArticles: ['Article 19(1)(a)', 'Article 14', 'Article 21'],
    benchmarkCase: 'Association for Democratic Reforms v. Union of India (2024)',
    examinerScoringTip:
      'CLAT PG frequently tests the 4 distinct prongs of the Modern Dental College / Puttaswamy Proportionality Standard.'
  },
  {
    id: 'pyq-clat-2024-davinder-singh',
    examId: 'clat',
    year: 2024,
    paperName: 'CLAT PG 2024 (Constitution Bench Extract)',
    questionType: 'PRELIMS_MCQ',
    marks: 1,
    title: 'State of Punjab v. Davinder Singh: Overruling Ratio',
    questionText:
      'By what majority did the 7-Judge Constitution Bench in State of Punjab v. Davinder Singh (2024) uphold the sub-classification of Scheduled Castes, and who delivered the dissenting opinion?',
    options: [
      { key: 'A', text: '5:2 Majority; Justice Hima Kohli and Justice Bela Trivedi dissenting' },
      { key: 'B', text: '6:1 Majority; Justice Bela M. Trivedi dissenting' },
      { key: 'C', text: 'Unanimous 7:0 verdict per CJI D.Y. Chandrachud' },
      { key: 'D', text: '4:3 Majority; Justice B.R. Gavai dissenting' }
    ],
    correctOption: 'B',
    explanation:
      'A 7-Judge Constitution Bench by a 6:1 majority overruled E.V. Chinnaiah (2005), upholding the power of State legislatures to sub-classify Scheduled Castes to provide preferential reservation to more backward sub-groups. Justice Bela M. Trivedi authored the lone dissent.',
    coreArticles: ['Article 341', 'Article 14', 'Article 16(4)'],
    benchmarkCase: 'State of Punjab v. Davinder Singh ((2024) INSC 562)',
    examinerScoringTip:
      'Examiners in PG entrances routinely probe whether landmark 7-judge benches were unanimous or fractured.'
  },
  {
    id: 'pyq-clat-2024-sita-soren-bribery',
    examId: 'clat',
    year: 2024,
    paperName: 'CLAT PG 2024 (Constitution Bench Judgments)',
    questionType: 'PRELIMS_MCQ',
    marks: 1,
    title: 'Sita Soren v. Union of India: Legislative Bribery Immunity Extinction',
    questionText:
      'In Sita Soren v. Union of India (2024), a unanimous 7-Judge Constitution Bench overruled P.V. Narasimha Rao (1998). What was the core constitutional holding regarding parliamentary privileges under Articles 105(2) and 194(2)?',
    options: [
      { key: 'A', text: 'Bribery immunity extends only if the vote is actually cast in accordance with the prior corrupt agreement' },
      { key: 'B', text: 'Articles 105(2) and 194(2) do not confer immunity from criminal prosecution on a legislator who takes a bribe to speak or vote, as the offence of bribery is complete upon acceptance of the bribe' },
      { key: 'C', text: 'A legislator can only be tried by a special in-house committee constituted by the Speaker and not by ordinary criminal courts' },
      { key: 'D', text: 'Immunity protects state legislators under Article 194(2) but does not protect Members of Parliament under Article 105(2)' }
    ],
    correctOption: 'B',
    explanation:
      'In Sita Soren v. Union of India (2024 per D.Y. Chandrachud CJI), a unanimous 7-Judge Bench overruled P.V. Narasimha Rao (1998). The Court held that parliamentary privilege is designed to protect deliberative autonomy and fearless speech, NOT to provide a shield for corruption. The offence of bribery under the Prevention of Corruption Act is complete the moment the bribe is accepted, irrespective of whether the legislator subsequently votes as promised.',
    coreArticles: ['Article 105(2)', 'Article 194(2)', 'Section 7 Prevention of Corruption Act'],
    benchmarkCase: 'Sita Soren v. Union of India ((2024) 5 SCC 629)',
    examinerScoringTip:
      'Memorize: Unanimous 7-Judge bench holding that the offence of bribery is independent of the subsequent speech or vote.'
  },

  // -------------------------------------------------------------------------
  // BIHAR JUDICIAL SERVICE (BJS / BPSC)
  // -------------------------------------------------------------------------
  {
    id: 'pyq-bjs-2023-mains-ordinance-repromulgation',
    examId: 'bjs',
    year: 2023,
    paperName: '32nd Bihar Judicial Service Mains 2023 (Constitutional & Admin Law)',
    questionType: 'MAINS_DESCRIPTIVE',
    marks: 20,
    title: 'Governor\'s Ordinance Power & Fraud on the Constitution',
    questionText:
      'Critically examine the constitutional limits on the Ordinance-making power of the Governor under Article 213 of the Constitution of India. Can successive ordinances be repromulgated without placing them before the State Legislature? Discuss the evolution of the law from D.C. Wadhwa v. State of Bihar to the 7-Judge Constitution Bench in Krishna Kumar Singh v. State of Bihar (2017).',
    explanation:
      '1. Constitutional Framework: Under Article 213, the Governor has legislative power to promulgate ordinances ONLY when both Houses are not in session and "circumstances exist which render it necessary for him to take immediate action".\n2. Mandatory Laying Clause: Article 213(2)(a) mandates that an ordinance "shall be laid before the Legislative Assembly". Failure to lay is not a procedural irregularity but a mandatory constitutional violation.\n3. The Bihar Anomaly & D.C. Wadhwa (1987): In D.C. Wadhwa, the Supreme Court exposed that Bihar had promulgated 256 ordinances between 1967 and 1981, repromulgating them repeatedly for up to 14 years without legislative enactment. The Court ruled this a "fraud on the Constitution" and a subversion of the democratic legislative process.\n4. Krishna Kumar Singh (2017) 7-Judge Bench Synthesis: (a) The Governor\'s power is conditional and subject to judicial review for colorable exercise; (b) Repromulgation without tabling is unconstitutional and invalid; (c) Rights created under an ordinance that ceases to operate do not survive unless public interest or constitutional necessity makes them irreversible.',
    coreArticles: ['Article 213', 'Article 123', 'Article 174'],
    benchmarkCase: 'Krishna Kumar Singh v. State of Bihar ((2017) 3 SCC 1)',
    examinerScoringTip:
      'To secure 16+ marks in BJS, candidates must cite both D.C. Wadhwa (1987) and the 7-judge Constitution Bench in Krishna Kumar Singh (2017), distinguishing between the effect of an expired ordinance and a repromulgated ordinance.'
  },
  {
    id: 'pyq-bjs-2023-prelims-writ-any-other-purpose',
    examId: 'bjs',
    year: 2023,
    paperName: '32nd Bihar Judicial Service Preliminary Examination 2023',
    questionType: 'PRELIMS_MCQ',
    marks: 2,
    title: 'High Court Writ Jurisdiction "For Any Other Purpose" (Article 226)',
    questionText:
      'Under Article 226 of the Constitution of India, a High Court has the power to issue writs for the enforcement of Fundamental Rights and "for any other purpose". What is the true legal scope of the expression "for any other purpose" as laid down by the Supreme Court?',
    options: [
      { key: 'A', text: 'Any purpose which the High Court in its discretion deems morally desirable, even in the absence of a legal right' },
      { key: 'B', text: 'Enforcement of any statutory, customary, or common law legal right or performance of a legal duty' },
      { key: 'C', text: 'To review and modify sovereign treaties entered into by the Government of India' },
      { key: 'D', text: 'Exclusively for settling inter-district boundary and taxation disputes within the State' }
    ],
    correctOption: 'B',
    explanation:
      'In State of Orissa v. Madan Gopal Rungta (AIR 1952 SC 12) and Calcutta Gas Company v. State of West Bengal (AIR 1962 SC 1044), the Supreme Court ruled that the phrase "for any other purpose" in Article 226 means the enforcement of any legal right (statutory, customary, or contractual where public duty is involved) or performance of a legal duty, meaning Article 226 is broader in scope than Article 32 (which is strictly confined to Part III Fundamental Rights).',
    coreArticles: ['Article 226', 'Article 32'],
    benchmarkCase: 'State of Orissa v. Madan Gopal Rungta (AIR 1952 SC 12)',
    examinerScoringTip:
      'Common State Judicial trap: Article 226 cannot be invoked in vacuo; existence of an enforceable legal right is an indispensable condition precedent.'
  },

  // -------------------------------------------------------------------------
  // RAJASTHAN JUDICIAL SERVICE (RJS)
  // -------------------------------------------------------------------------
  {
    id: 'pyq-rjs-2024-mains-manifest-arbitrariness',
    examId: 'rjs',
    year: 2024,
    paperName: 'Rajasthan Judicial Service Mains 2024 (Law Paper I)',
    questionType: 'MAINS_DESCRIPTIVE',
    marks: 15,
    title: 'From Royappa to Shayara Bano: Doctrine of Manifest Arbitrariness',
    questionText:
      '"The traditional doctrine of classification under Article 14 has been expanded to embrace the principle of non-arbitrariness." Trace this judicial transition from E.P. Royappa v. State of Tamil Nadu to Shayara Bano v. Union of India, and analyze how "manifest arbitrariness" is now applied to strike down plenary statutes.',
    explanation:
      '1. Old Traditional Doctrine: Ram Krishna Dalmia (1958) established the twin nexus test: (a) intelligible differentia; and (b) rational nexus to the statutory objective sought.\n2. New Dimension in Royappa (1974): Justice Bhagwati proclaimed that equality is a dynamic concept: "Equality and arbitrariness are sworn enemies... Where an act is arbitrary, it is implicit that it is unequal both according to political logic and constitutional law and therefore violative of Article 14". Expanded in Maneka Gandhi (1978) and Ajay Hasia (1981).\n3. Plenary Legislation Threshold: Historically in McDowell (1996), the Court suggested legislation could only be struck down for lack of legislative competence or violation of express constitutional limitations, not mere arbitrariness.\n4. Shayara Bano (2017) Breakthrough: Justice Nariman established that plenary legislation can be invalidated for "manifest arbitrariness"—meaning something done by and large capriciously, irrationally, or without adequate determining principle (reaffirmed in Navtej Johar 2018 and Joseph Shine 2018).',
    coreArticles: ['Article 14', 'Article 21'],
    benchmarkCase: 'Shayara Bano v. Union of India ((2017) 9 SCC 1)',
    examinerScoringTip:
      'Award top marks for tracing the shift from McDowell\'s restrictive rule to Justice Nariman\'s definition of manifest arbitrariness in Shayara Bano.'
  },
  {
    id: 'pyq-rjs-2024-prelims-article-19-restrictions',
    examId: 'rjs',
    year: 2024,
    paperName: 'Rajasthan Judicial Service Preliminary Examination 2024',
    questionType: 'PRELIMS_MCQ',
    marks: 2,
    title: 'First Constitutional Amendment 1951 & Article 19(2) Grounds',
    questionText:
      'Which of the following grounds of restriction on the freedom of speech and expression under Article 19(2) was NOT present in the original Constitution of 1950, but was inserted by the Constitution (First Amendment) Act, 1951?',
    options: [
      { key: 'A', text: 'Security of the State' },
      { key: 'B', text: 'Public order and Friendly relations with foreign States' },
      { key: 'C', text: 'Decency or morality' },
      { key: 'D', text: 'Contempt of court' }
    ],
    correctOption: 'B',
    explanation:
      'Following the Supreme Court decisions in Romesh Thappar (Cross Roads) and Brij Bhushan (Organiser) where public safety/order laws were struck down, Parliament enacted the Constitution (First Amendment) Act, 1951. It added three new grounds to Article 19(2): (1) "Public order", (2) "Friendly relations with foreign States", and (3) "Incitement to an offence", while also qualifying "restrictions" with the word "reasonable".',
    coreArticles: ['Article 19(1)(a)', 'Article 19(2)', 'First Amendment 1951'],
    benchmarkCase: 'Romesh Thappar v. State of Madras (AIR 1950 SC 124)',
    examinerScoringTip:
      'High-yield historical trap: "Sovereignty and integrity of India" was added even later by the 16th Amendment (1963), whereas "Public order" was added by the 1st Amendment (1951).'
  },

  // -------------------------------------------------------------------------
  // MADHYA PRADESH JUDICIAL SERVICE (MPCJ / MP HIGH COURT)
  // -------------------------------------------------------------------------
  {
    id: 'pyq-mpcj-2023-mains-double-jeopardy',
    examId: 'mpcj',
    year: 2023,
    paperName: 'MP Civil Judge Mains 2023 (Law Paper II - Constitutional & Criminal)',
    questionType: 'MAINS_DESCRIPTIVE',
    marks: 10,
    title: 'Article 20(2) Double Jeopardy vs Section 300 CrPC / BNSS',
    questionText:
      'Explain the constitutional protection against Double Jeopardy guaranteed under Article 20(2) of the Constitution of India. Distinguish its constitutional scope from the statutory rule under Section 300 CrPC (Section 356 BNSS), and discuss whether departmental disciplinary punishment bars subsequent criminal prosecution for the same act.',
    explanation:
      '1. Constitutional Text: Article 20(2) provides that "No person shall be prosecuted and punished for the same offence more than once".\n2. Dual Prerequisites: For Article 20(2) to apply, there must be BOTH a prior prosecution AND a prior punishment for the identical offence (autrefois convict only).\n3. Distinction with Section 300 CrPC / Sec 356 BNSS: The statutory rule in Section 300 CrPC is wider because it embodies both autrefois convict (prior conviction) and autrefois acquit (prior acquittal). Under Article 20(2), a person who was prosecuted and ACQUITTED can be retried if the law permits, whereas Section 300 CrPC bars it.\n4. Departmental Inquiries Not a Bar: In Maqbool Hussain v. State of Bombay (1953) and S.A. Venkataraman v. Union of India (1954), the Supreme Court settled that "prosecution" in Article 20(2) means proceedings before a Court of Law or Judicial Tribunal. Disciplinary proceedings under service rules or confiscation by customs authorities are administrative, not judicial prosecutions, and do not attract Article 20(2).',
    coreArticles: ['Article 20(2)', 'Section 300 CrPC', 'Section 356 BNSS'],
    benchmarkCase: 'Maqbool Hussain v. State of Bombay (AIR 1953 SC 325)',
    examinerScoringTip:
      'Crucial distinction: Article 20(2) covers only prior conviction (convicted and punished), whereas Section 300 CrPC / BNSS covers both prior conviction and prior acquittal.'
  },
  {
    id: 'pyq-mpcj-2023-prelims-preamble-integral',
    examId: 'mpcj',
    year: 2023,
    paperName: 'MP Civil Judge Preliminary Examination 2023 (Law Section)',
    questionType: 'PRELIMS_MCQ',
    marks: 1,
    title: 'Constitutional Status of the Preamble & Overruling of Berubari',
    questionText:
      'In which landmark decision did the Supreme Court explicitly overrule In re Berubari Union (1960) and hold that the Preamble is an integral part of the Constitution of India and can be amended subject to the Basic Structure doctrine?',
    options: [
      { key: 'A', text: 'Shankari Prasad v. Union of India (1951)' },
      { key: 'B', text: 'Sajjan Singh v. State of Rajasthan (1965)' },
      { key: 'C', text: 'I.C. Golaknath v. State of Punjab (1967)' },
      { key: 'D', text: 'Kesavananda Bharati v. State of Kerala (1973)' }
    ],
    correctOption: 'D',
    explanation:
      'In In re Berubari Union (1960), the 8-Judge bench held that the Preamble is a key to open the minds of the makers but is NOT a part of the Constitution. In Kesavananda Bharati v. State of Kerala (1973), the 13-Judge Constitution Bench explicitly overruled Berubari, pointing out that the Preamble was debated, voted upon, and adopted by the Constituent Assembly in the exact same manner as the rest of the Constitution, and therefore constitutes an integral part of the Constitution and can be amended under Article 368 without altering the basic structure.',
    coreArticles: ['Preamble', 'Article 368'],
    benchmarkCase: 'Kesavananda Bharati v. State of Kerala ((1973) 4 SCC 225)',
    examinerScoringTip:
      'MPCJ core staple: Remember that Berubari (1960) said "not a part", Kesavananda (1973) held "is a part", and LIC of India (1995) reaffirmed it is an "integral part".'
  }
];
