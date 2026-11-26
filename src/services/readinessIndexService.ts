import { CONSTITUTION_PARTS } from '../data/partsData';
import { getStoredMistakes } from './mistakesService';

export type ExamProfileType = 'holistic' | 'upsc' | 'djs' | 'uppcsj' | 'jkpsc';

export interface ExamProfileInfo {
  id: ExamProfileType;
  title: string;
  badge: string;
  description: string;
  focusArea: string;
}

export const EXAM_PROFILES: Record<ExamProfileType, ExamProfileInfo> = {
  holistic: {
    id: 'holistic',
    title: 'All-India Constitutional Benchmark',
    badge: 'Master Syllabus',
    description: 'Equally balanced evaluation across all 25 Parts of the Indian Constitution.',
    focusArea: 'Comprehensive constitutional mastery for academicians, jurists & multi-state aspirants.'
  },
  upsc: {
    id: 'upsc',
    title: 'UPSC Civil Services (GS-II & Law Optional)',
    badge: 'UPSC CSE',
    description: 'Heavily weighted towards Fundamental Rights, Federalism, DPSP, Separation of Powers & Elections.',
    focusArea: 'High weightage on Parts III, IV, V, IX, XI, XII, and XV with governance intersections.'
  },
  djs: {
    id: 'djs',
    title: 'Delhi Judicial Service (DJS)',
    badge: 'DJS Higher Judiciary',
    description: 'Intense focus on Criminal Due Process, Writs, Subordinate Judiciary & Doctrinal Tests.',
    focusArea: 'Maximum weight on Articles 14–22, 32, 136, 141, 226, 233–235, and Part XX Basic Structure.'
  },
  uppcsj: {
    id: 'uppcsj',
    title: 'UP PCS-J / Bihar Judicial Service (BJS)',
    badge: 'State Judicial Services',
    description: 'Traditional judicial syllabus with high emphasis on Executive Powers, Emergency, and Schedules.',
    focusArea: 'Rigorous statutory recall on Parts III, IV, V, VI, XVIII, and Constitutional Schedules.'
  },
  jkpsc: {
    id: 'jkpsc',
    title: 'J&K Civil Judge (Junior Division) / CCE',
    badge: 'J&K Judiciary',
    description: 'Focused on J&K Reorganisation 2019, Special Provisions (Part XXI), Federalism & Writs.',
    focusArea: 'Special emphasis on Part I, Part III, Part VI, Part XXI, and recent 5-Judge Bench rulings.'
  }
};

export interface DiagnosticMCQ {
  id: string;
  partId: string;
  question: string;
  options: [string, string, string, string];
  correctIndex: number;
  explanation: string;
  articleRef: string;
  landmarkCase?: string;
}

export interface PartDefinition {
  id: string;
  partNumber: string;
  title: string;
  articlesRange: string;
  category: 'Foundations' | 'Rights & Duties' | 'State Machinery' | 'Federalism & Finance' | 'Elections & Special' | 'Emergency & Amendment';
  prelimsImportance: 1 | 2 | 3 | 4 | 5;
  mainsImportance: 1 | 2 | 3 | 4 | 5;
  examWeights: Record<ExamProfileType, number>; // multiplier 1.0 to 3.0
  bootcampDays: number[];
  highYieldArticles: { number: string; title: string; note: string }[];
  landmarkPrecedents: { name: string; year: number; coreHolding: string }[];
  recentBenchmark2024: string;
  diagnosticQuestions: DiagnosticMCQ[];
  mainsFocusBlueprint: string;
}

export interface PartReadinessStats {
  part: PartDefinition;
  readinessScore: number; // 0 to 100%
  tier: 'mastery' | 'moderate' | 'vulnerable';
  mcqAccuracy: number; // 0 to 100%
  mcqsAttempted: number;
  mainsDraftsCount: number;
  mainsEvaluatedCount: number;
  averageMainsScore: number;
  unresolvedMistakesCount: number;
  srsCardsMastered: number;
  bareActExplored: boolean;
  selfCalibrationBonus: number; // 0 to 25%
  recommendedAction: string;
  expectedMarkLossRisk: 'CRITICAL' | 'MODERATE' | 'LOW';
}

export interface ConstitutionalReadinessReport {
  overallScore: number; // 0 to 100%
  tierBadge: string;
  tierTitle: string;
  tierColor: string;
  examProfile: ExamProfileType;
  masteredPartsCount: number;
  moderatePartsCount: number;
  vulnerablePartsCount: number;
  totalMCQsAnswered: number;
  totalMainsDrafts: number;
  totalUnresolvedMistakes: number;
  criticalBlindspots: PartReadinessStats[];
  partsStats: PartReadinessStats[];
  projectedPrelimsAccuracy: number;
  projectedMainsCompetence: number;
  recommended7DayRevisionPlan: { day: number; focusPart: string; action: string }[];
}

// =========================================================================
// 25 ACTIVE PARTS DEFINITION OF THE INDIAN CONSTITUTION
// =========================================================================
export const ACTIVE_25_PARTS_METADATA: PartDefinition[] = [
  {
    id: 'part-1',
    partNumber: 'Part I',
    title: 'The Union and its Territory',
    articlesRange: 'Articles 1 – 4',
    category: 'Foundations',
    prelimsImportance: 4,
    mainsImportance: 4,
    examWeights: { holistic: 1.0, upsc: 1.5, djs: 1.0, uppcsj: 1.2, jkpsc: 2.5 },
    bootcampDays: [1],
    highYieldArticles: [
      { number: '1', title: 'Name and territory of the Union', note: 'Indestructible Union of destructible States' },
      { number: '2', title: 'Admission or establishment of new States', note: 'Applies to external territories admitted into India' },
      { number: '3', title: 'Formation of new States and alteration of boundaries', note: 'Internal reorganisation without mandatory State consent' },
      { number: '4', title: 'Laws under Articles 2 and 3', note: 'Simple majority; not deemed amendments under Art 368' }
    ],
    landmarkPrecedents: [
      { name: 'In re Berubari Union', year: 1960, coreHolding: 'Cession of Indian territory to foreign nation requires Art 368 amendment.' },
      { name: 'Maganbhai Ishwarbhai Patel v. UOI', year: 1969, coreHolding: 'Boundary demarcation dispute settlement is executive action, not cession.' },
      { name: 'Article 370 In Re 5-Judge Bench', year: 2023, coreHolding: 'Parliamentary competence to reorganise State into Union Territory under Art 3 upheld.' }
    ],
    recentBenchmark2024: '2023 5-Judge Bench in In Re Article 370 affirmed broad Parliament competence under Article 3 subject to federal judicial review.',
    mainsFocusBlueprint: 'Analyze whether Article 3 reduces Indian federalism to an indestructible union of destructible states with reference to J&K Reorganisation 2019.',
    diagnosticQuestions: [
      {
        id: 'diag-p1-1',
        partId: 'part-1',
        question: 'Under Article 3 of the Constitution, a bill for altering the name or boundary of a State cannot be introduced in Parliament without:',
        options: [
          'Prior consent of the State Legislative Assembly',
          'Prior recommendation of the President of India',
          'A special resolution passed by 2/3rd majority of the Rajya Sabha',
          'Approval from the Inter-State Council'
        ],
        correctIndex: 1,
        articleRef: 'Article 3 Proviso',
        explanation: 'Article 3 Proviso mandates prior recommendation of the President before introduction in either House of Parliament.'
      },
      {
        id: 'diag-p1-2',
        partId: 'part-1',
        question: 'In which landmark advisory reference did the Supreme Court hold that cession of national territory to a foreign power cannot be accomplished under Article 3?',
        options: [
          'In re Delhi Laws Act (1951)',
          'In re Berubari Union (1960)',
          'In re Presidential Poll (1974)',
          'In re Keshav Singh (1965)'
        ],
        correctIndex: 1,
        articleRef: 'Articles 1, 3 & 368',
        explanation: 'In re Berubari Union (1960) 8-Judge Bench held that Article 3 only governs internal rearrangement, requiring a constitutional amendment under Article 368 for cession.'
      }
    ]
  },
  {
    id: 'part-2',
    partNumber: 'Part II',
    title: 'Citizenship',
    articlesRange: 'Articles 5 – 11',
    category: 'Foundations',
    prelimsImportance: 3,
    mainsImportance: 4,
    examWeights: { holistic: 1.0, upsc: 1.8, djs: 1.0, uppcsj: 1.0, jkpsc: 1.8 },
    bootcampDays: [1],
    highYieldArticles: [
      { number: '5', title: 'Citizenship at commencement of Constitution', note: 'Domicile + Birth/Parentage/5-year residence' },
      { number: '9', title: 'Persons voluntarily acquiring foreign citizenship', note: 'Single citizenship principle; automatic cessation' },
      { number: '11', title: 'Parliament to regulate the right of citizenship by law', note: 'Plenary constituent authorization to enact Citizenship Act 1955' }
    ],
    landmarkPrecedents: [
      { name: 'Mohd. Raza v. State of Bombay', year: 1966, coreHolding: 'Domicile requires permanent intention to reside (animus manendi).' },
      { name: 'Sarbananda Sonowal v. UOI', year: 2005, coreHolding: 'IMDT Act struck down; external aggression under Article 355 includes influx of illegal migrants.' },
      { name: 'Section 6A Citizenship Act In Re', year: 2024, coreHolding: '5-Judge Bench upheld Section 6A Assam Accord cutoff dates as rational classification.' }
    ],
    recentBenchmark2024: '2024 5-Judge Constitution Bench in Section 6A Citizenship Act affirmed Parliament plenary competence under Article 11 over state demographics.',
    mainsFocusBlueprint: 'Discuss Parliament plenary power under Article 11 to define citizenship criteria and its interplay with Article 14 non-arbitrariness.',
    diagnosticQuestions: [
      {
        id: 'diag-p2-1',
        partId: 'part-2',
        question: 'Which constitutional provision empowers Parliament to make laws regulating citizenship notwithstanding Articles 5 to 10?',
        options: ['Article 9', 'Article 10', 'Article 11', 'Article 13'],
        correctIndex: 2,
        articleRef: 'Article 11',
        explanation: 'Article 11 expressly preserves Parliament absolute power to make provisions with respect to acquisition and termination of citizenship.'
      }
    ]
  },
  {
    id: 'part-3',
    partNumber: 'Part III',
    title: 'Fundamental Rights',
    articlesRange: 'Articles 12 – 35',
    category: 'Rights & Duties',
    prelimsImportance: 5,
    mainsImportance: 5,
    examWeights: { holistic: 2.5, upsc: 2.8, djs: 3.0, uppcsj: 2.5, jkpsc: 2.8 },
    bootcampDays: [1, 2, 3, 4, 5, 6],
    highYieldArticles: [
      { number: '12', title: 'Definition of State', note: 'Instrumentality test (Ajay Hasia, Pradeep Biswas, Zee Telefilms)' },
      { number: '13', title: 'Laws inconsistent with or in derogation of Fundamental Rights', note: 'Doctrine of Eclipse, Severability & Judicial Review' },
      { number: '14', title: 'Equality before law & equal protection', note: 'Epstein/Royappa non-arbitrariness doctrine' },
      { number: '19', title: 'Six Fundamental Freedoms', note: 'Reasonable restrictions strictly confined to Art 19(2)–(6)' },
      { number: '20', title: 'Protection in respect of conviction for offences', note: 'Ex-post facto, double jeopardy, self-incrimination' },
      { number: '21', title: 'Protection of life and personal liberty', note: 'Golden Triangle, substantive due process, privacy, bail jurisprudence' },
      { number: '22', title: 'Protection against arrest and detention', note: 'Mandatory written grounds of arrest (Prabir Purkayastha 2024)' },
      { number: '25–28', title: 'Freedom of Religion', note: 'Essential Religious Practices test, public order, morality' },
      { number: '32', title: 'Remedies for enforcement of rights (Heart and Soul)', note: 'Prerogative writs (Habeas Corpus, Mandamus, Certiorari, Prohibition, Quo Warranto)' }
    ],
    landmarkPrecedents: [
      { name: 'Kesavananda Bharati v. State of Kerala', year: 1973, coreHolding: 'Fundamental Rights and Basic Structure cannot be abrogated under Article 368.' },
      { name: 'Maneka Gandhi v. UOI', year: 1978, coreHolding: 'Procedure established by law must be just, fair, and reasonable under Golden Triangle.' },
      { name: 'K.S. Puttaswamy v. UOI', year: 2017, coreHolding: 'Right to privacy declared intrinsic to life and liberty under Article 21.' },
      { name: 'Prabir Purkayastha v. State (NCT of Delhi)', year: 2024, coreHolding: 'Written grounds of arrest mandatory under Article 22(1) even in anti-terror statutes.' },
      { name: 'State of Punjab v. Davinder Singh', year: 2024, coreHolding: '7-Judge Bench upheld sub-classification within Scheduled Castes under Articles 14–16.' }
    ],
    recentBenchmark2024: '2024 landmark rulings: Davinder Singh (SC/ST Sub-classification), Prabir Purkayastha (Written Grounds of Arrest), Bulldozer demolition guidelines under Art 21.',
    mainsFocusBlueprint: 'Construct a 4-step answer examining the substantive expansion of Article 21 from Gopalan to Maneka Gandhi, Puttaswamy, and 2024 Climate Rights.',
    diagnosticQuestions: [
      {
        id: 'diag-p3-1',
        partId: 'part-3',
        question: 'Under the 2024 Supreme Court ruling in Prabir Purkayastha, non-furnishing of written grounds of arrest to an accused at the time of remand violates:',
        options: [
          'Article 20(3) privilege against self-incrimination',
          'Article 22(1) and renders the arrest and remand void ab initio',
          'Section 167 CrPC only, but does not affect the custody validity',
          'Article 19(1)(d) freedom of movement'
        ],
        correctIndex: 1,
        articleRef: 'Article 22(1)',
        explanation: 'Prabir Purkayastha (2024) held that communicating written grounds of arrest is an inviolable constitutional safeguard under Article 22(1); breach renders remand illegal.'
      },
      {
        id: 'diag-p3-2',
        partId: 'part-3',
        question: 'In which 7-Judge Constitution Bench decision in 2024 did the Supreme Court overrule E.V. Chinnaiah (2004) regarding affirmative action?',
        options: [
          'Jarnail Singh v. Lachhmi Narain Gupta',
          'State of Punjab v. Davinder Singh',
          'M. Nagaraj v. Union of India',
          'Janki Prasad Parimoo v. State of J&K'
        ],
        correctIndex: 1,
        articleRef: 'Articles 14, 15(4), 16(4) & 341',
        explanation: 'State of Punjab v. Davinder Singh (2024) 7-Judge Bench overruled Chinnaiah and permitted sub-classification of SC/STs based on empirical backwardness.'
      }
    ]
  },
  {
    id: 'part-4',
    partNumber: 'Part IV',
    title: 'Directive Principles of State Policy',
    articlesRange: 'Articles 36 – 51',
    category: 'Rights & Duties',
    prelimsImportance: 4,
    mainsImportance: 5,
    examWeights: { holistic: 1.5, upsc: 2.2, djs: 1.5, uppcsj: 2.0, jkpsc: 1.8 },
    bootcampDays: [6],
    highYieldArticles: [
      { number: '37', title: 'Application of the principles', note: 'Non-justiciable in court but fundamental in governance' },
      { number: '39(b)&(c)', title: 'Equitable distribution of material resources & prevention of wealth concentration', note: 'Protected under Article 31C' },
      { number: '44', title: 'Uniform Civil Code for the citizens', note: 'Shah Bano, Sarla Mudgal, Shayara Bano' },
      { number: '50', title: 'Separation of judiciary from executive', note: 'Basic structure core; judicial independence anchor' }
    ],
    landmarkPrecedents: [
      { name: 'Minerva Mills v. UOI', year: 1980, coreHolding: 'Constitution founded on bed-rock of balance between Part III and Part IV.' },
      { name: 'Property Owners Association v. State of Maharashtra', year: 2024, coreHolding: '9-Judge Bench held all private property cannot be treated as material resources of community under Art 39(b).' },
      { name: 'Sanjeev Coke Mfg. Co. v. Bharat Coking Coal', year: 1983, coreHolding: 'Interpreted scope of Article 31C and material resources (revisited in 2024).' }
    ],
    recentBenchmark2024: '2024 9-Judge Bench in Property Owners Association ruled 8:1 that private property is not automatically community resource under Art 39(b).',
    mainsFocusBlueprint: 'Analyze the evolving jurisprudence of Article 31C and the harmonization of Part III and Part IV from Champakam Dorairajan to 2024 9-Judge Bench.',
    diagnosticQuestions: [
      {
        id: 'diag-p4-1',
        partId: 'part-4',
        question: 'In November 2024, a 9-Judge Constitution Bench ruled on whether all privately owned property constitutes "material resources of the community" under Article 39(b) in:',
        options: [
          'State of Tamil Nadu v. L. Abu Kavur Bai',
          'Property Owners Association v. State of Maharashtra',
          'Association for Democratic Reforms v. UOI',
          'Mafatlal Industries v. UOI'
        ],
        correctIndex: 1,
        articleRef: 'Article 39(b)',
        explanation: 'Property Owners Association v. State of Maharashtra (2024) held that not every privately owned resource qualifies as a material resource of the community.'
      }
    ]
  },
  {
    id: 'part-4a',
    partNumber: 'Part IV-A',
    title: 'Fundamental Duties',
    articlesRange: 'Article 51A',
    category: 'Rights & Duties',
    prelimsImportance: 4,
    mainsImportance: 3,
    examWeights: { holistic: 1.0, upsc: 1.5, djs: 0.8, uppcsj: 1.2, jkpsc: 1.0 },
    bootcampDays: [6],
    highYieldArticles: [
      { number: '51A(a)–(k)', title: '11 Fundamental Duties', note: 'Added by 42nd Amendment (Swaran Singh); 11th duty added by 86th Amendment 2002' }
    ],
    landmarkPrecedents: [
      { name: 'AIIMS Students Union v. AIIMS', year: 2002, coreHolding: 'Fundamental duties though non-enforceable are equally important in interpreting statutes.' },
      { name: 'Bijoe Emmanuel v. State of Kerala', year: 1986, coreHolding: 'Respect for National Anthem does not compel singing if genuine religious conscience forbids.' }
    ],
    recentBenchmark2024: 'Supreme Court reiterated duties in environmental conservation cases as constitutional guidance under Art 51A(g).',
    mainsFocusBlueprint: 'Examine the legal enforceability of Fundamental Duties through judicial interpretation and statutory enactments.',
    diagnosticQuestions: [
      {
        id: 'diag-p4a-1',
        partId: 'part-4a',
        question: 'Which constitutional amendment added the 11th Fundamental Duty [Article 51A(k)] regarding child education?',
        options: ['42nd Amendment 1976', '44th Amendment 1978', '86th Amendment 2002', '91st Amendment 2003'],
        correctIndex: 2,
        articleRef: 'Article 51A(k)',
        explanation: 'The 86th Constitutional Amendment Act, 2002 inserted Article 51A(k) requiring parents/guardians to provide educational opportunities to children aged 6 to 14.'
      }
    ]
  },
  {
    id: 'part-5',
    partNumber: 'Part V',
    title: 'The Union (Executive, Parliament & Supreme Court)',
    articlesRange: 'Articles 52 – 151',
    category: 'State Machinery',
    prelimsImportance: 5,
    mainsImportance: 5,
    examWeights: { holistic: 2.2, upsc: 2.5, djs: 2.8, uppcsj: 2.4, jkpsc: 2.2 },
    bootcampDays: [7, 8, 9],
    highYieldArticles: [
      { number: '72', title: 'Pardoning powers of the President', note: 'Subject to judicial review on grounds of arbitrariness (Kehar Singh, Epuru Sudhakar)' },
      { number: '74', title: 'Council of Ministers to aid and advise President', note: 'Cabinet advice is binding (42nd/44th Amendments)' },
      { number: '110', title: 'Definition of Money Bills', note: 'Exclusive matters; Speaker certification subject to judicial review' },
      { number: '123', title: 'Ordinance making power of President', note: 'Emergency executive legislation; no re-promulgation fraud (D.C. Wadhwa, Krishna Kumar)' },
      { number: '124', title: 'Establishment and constitution of Supreme Court', note: 'NJAC case (2015), Collegium system' },
      { number: '136', title: 'Special Leave Petitions', note: 'Plenary discretionary appellate jurisdiction' },
      { number: '141', title: 'Law declared by Supreme Court binding on all courts', note: 'Doctrine of binding precedent (stare decisis)' },
      { number: '142', title: 'Complete Justice powers', note: 'Cannot override express statutory substantive law' }
    ],
    landmarkPrecedents: [
      { name: 'Supreme Court Advocates-on-Record Assn (NJAC)', year: 2015, coreHolding: '99th Amendment struck down; judicial primacy in appointments is Basic Structure.' },
      { name: 'Sita Soren v. UOI', year: 2024, coreHolding: '7-Judge Bench overruled P.V. Narasimha Rao; bribery in legislative voting has no Art 105/194 immunity.' },
      { name: 'Rojer Mathew v. South Indian Bank', year: 2020, coreHolding: 'Speaker Money Bill certification under Art 110 is subject to judicial review.' }
    ],
    recentBenchmark2024: '2024 7-Judge Bench in Sita Soren eliminated bribery immunity for parliamentarians; 2024 Constitution Bench on Asian Resurfacing stay vacation.',
    mainsFocusBlueprint: 'Critically examine the scope of Article 123 ordinance powers and the constitutional bar on ordinance raj after Krishna Kumar Singh.',
    diagnosticQuestions: [
      {
        id: 'diag-p5-1',
        partId: 'part-5',
        question: 'In Sita Soren v. Union of India (2024), a 7-Judge Constitution Bench unanimously held that parliamentary privilege under Article 105(2):',
        options: [
          'Grants absolute immunity from criminal prosecution for taking bribes to vote',
          'Does not shield a legislator from criminal prosecution for taking a bribe to make a speech or cast a vote',
          'Only protects members of the Lok Sabha, not Rajya Sabha',
          'Is subject only to the internal disciplinary power of the Speaker'
        ],
        correctIndex: 1,
        articleRef: 'Articles 105(2) & 194(2)',
        explanation: 'Sita Soren (2024) held that bribery is complete upon acceptance of undue advantage and is independent of performance; Art 105(2) cannot protect corruption.'
      }
    ]
  },
  {
    id: 'part-6',
    partNumber: 'Part VI',
    title: 'The States (Governor, Legislature, High Courts & Subordinate Courts)',
    articlesRange: 'Articles 152 – 237',
    category: 'State Machinery',
    prelimsImportance: 5,
    mainsImportance: 5,
    examWeights: { holistic: 2.2, upsc: 2.2, djs: 3.0, uppcsj: 2.5, jkpsc: 2.8 },
    bootcampDays: [7, 8, 9],
    highYieldArticles: [
      { number: '161', title: 'Pardoning power of Governor', note: 'Cannot bypass minimum life sentence rules; concurrent with Art 72' },
      { number: '163', title: 'Council of Ministers to aid and advise Governor', note: 'Discretion strictly limited (Shamsher Singh, Nabam Rebia)' },
      { number: '200', title: 'Assent to Bills by Governor', note: 'As soon as possible mandate; cannot indefinitely sit on bills (Punjab & TN 2023)' },
      { number: '213', title: 'Ordinance making power of Governor', note: 'Parallel to Art 123; satisfaction justiciable' },
      { number: '226', title: 'Power of High Courts to issue certain writs', note: 'Wider than Art 32; covers legal rights + territorial nexus' },
      { number: '227', title: 'Power of superintendence over all courts by High Court', note: 'Administrative & judicial superintendence; supervisory writ' },
      { number: '233–235', title: 'Subordinate Judiciary appointment & control', note: 'High Court exclusive disciplinary control' }
    ],
    landmarkPrecedents: [
      { name: 'State of Punjab v. Principal Secretary to Governor', year: 2023, coreHolding: 'Governor cannot sit on bills passed by legislature; must return or assent as soon as possible.' },
      { name: 'Shamsher Singh v. State of Punjab', year: 1974, coreHolding: 'Constitutional head acts on aid and advice of Ministers save rare exceptions.' },
      { name: 'High Court Bar Association Allahabad v. State of U.P.', year: 2024, coreHolding: '5-Judge Bench overruled Asian Resurfacing; High Court stay orders cannot automatically lapse after 6 months.' }
    ],
    recentBenchmark2024: '2024 5-Judge Bench in HCBA Allahabad overruled automatic stay vacation; 2023–2024 Governor assent judgments in State of Punjab and State of Tamil Nadu.',
    mainsFocusBlueprint: 'Evaluate the constitutional friction under Article 200 regarding gubernatorial assent delays and the Supreme Court doctrine of constitutional governance.',
    diagnosticQuestions: [
      {
        id: 'diag-p6-1',
        partId: 'part-6',
        question: 'In High Court Bar Association Allahabad v. State of U.P. (2024), the 5-Judge Constitution Bench overruled Asian Resurfacing on the ground that:',
        options: [
          'High Courts do not possess powers under Article 226 to stay criminal trials',
          'Automatic vacation of stay orders without hearing parties violates judicial discretion and Article 226 autonomy',
          'Only the Chief Justice of India can grant stays on trial court proceedings',
          'Trial courts can ignore High Court stay orders after 90 days'
        ],
        correctIndex: 1,
        articleRef: 'Articles 226 & 227',
        explanation: 'The 2024 5-Judge Bench held that automatic vacation of stay orders by judicial fiat without application of mind causes grave injustice and curtails High Court constitutional authority.'
      }
    ]
  },
  {
    id: 'part-8',
    partNumber: 'Part VIII',
    title: 'The Union Territories',
    articlesRange: 'Articles 239 – 242',
    category: 'State Machinery',
    prelimsImportance: 3,
    mainsImportance: 4,
    examWeights: { holistic: 1.0, upsc: 2.0, djs: 2.0, uppcsj: 1.0, jkpsc: 2.2 },
    bootcampDays: [7],
    highYieldArticles: [
      { number: '239', title: 'Administration of Union Territories', note: 'Administered by President through Administrator' },
      { number: '239AA', title: 'Special provisions with respect to Delhi (NCTD)', note: 'Elected Assembly, LG role, Services jurisdiction disputes' },
      { number: '240', title: 'Power of President to make regulations for certain UTs', note: 'Has effect of Act of Parliament' }
    ],
    landmarkPrecedents: [
      { name: 'Govt. of NCT of Delhi v. UOI (Services Bench)', year: 2023, coreHolding: 'Elected Delhi government has legislative and executive control over civil services under Entry 41 List II.' },
      { name: 'Govt. of NCT of Delhi v. UOI (Constitutional Bench)', year: 2018, coreHolding: 'Lieutenant Governor is bound by the aid and advice of the Delhi Council of Ministers.' }
    ],
    recentBenchmark2024: 'Ongoing constitutional review of the GNCTD (Amendment) Act 2023 establishing the National Capital Civil Service Authority (NCCSA).',
    mainsFocusBlueprint: 'Analyze the constitutional status of Union Territories with assemblies with special focus on Article 239AA and asymmetric federalism.',
    diagnosticQuestions: [
      {
        id: 'diag-p8-1',
        partId: 'part-8',
        question: 'Under Article 239AA, the Legislative Assembly of NCT of Delhi has power to make laws on matters in List II (State List) except:',
        options: [
          'Public Order, Police, and Land',
          'Prisons, Local Government, and Agriculture',
          'Public Health, Education, and Transport',
          'Trade and Commerce within the State'
        ],
        correctIndex: 0,
        articleRef: 'Article 239AA(3)(a)',
        explanation: 'Article 239AA(3)(a) explicitly excludes Entries 1 (Public Order), 2 (Police), and 18 (Land) of List II from Delhi Assembly legislative competence.'
      }
    ]
  },
  {
    id: 'part-9',
    partNumber: 'Part IX',
    title: 'The Panchayats',
    articlesRange: 'Articles 243 – 243-O',
    category: 'State Machinery',
    prelimsImportance: 4,
    mainsImportance: 4,
    examWeights: { holistic: 1.2, upsc: 2.2, djs: 0.8, uppcsj: 1.5, jkpsc: 1.5 },
    bootcampDays: [10],
    highYieldArticles: [
      { number: '243B', title: 'Constitution of Panchayats', note: 'Three-tier structure (village, intermediate, district)' },
      { number: '243D', title: 'Reservation of seats', note: '1/3rd mandatory reservation for women; SC/ST proportional' },
      { number: '243I', title: 'State Finance Commission', note: 'Every 5 years review of fiscal devolution' },
      { number: '243K', title: 'Elections to the Panchayats', note: 'Superintendence in State Election Commission' }
    ],
    landmarkPrecedents: [
      { name: 'Kishan Singh Tomar v. Municipal Corp. of Ahmedabad', year: 2006, coreHolding: 'Elections to local bodies must be completed before expiry of 5-year duration.' },
      { name: 'K. Krishna Murthy v. UOI', year: 2010, coreHolding: 'Triple test conditions for OBC reservation in local bodies.' }
    ],
    recentBenchmark2024: 'Supreme Court reinforced strict compliance with the Triple Test for local body OBC quotas across Maharashtra and Madhya Pradesh.',
    mainsFocusBlueprint: 'Critically assess 30 years of the 73rd Amendment in achieving substantive democratic decentralization vs financial dependency.',
    diagnosticQuestions: [
      {
        id: 'diag-p9-1',
        partId: 'part-9',
        question: 'Under Article 243D(3), what is the minimum constitutional reservation mandated for women in Panchayats?',
        options: ['Not less than one-fourth', 'Not less than one-third', 'Not less than one-half', 'Determined solely by State law'],
        correctIndex: 1,
        articleRef: 'Article 243D(3)',
        explanation: 'Article 243D(3) mandates that not less than one-third of the total number of seats to be filled by direct election in every Panchayat shall be reserved for women.'
      }
    ]
  },
  {
    id: 'part-9a',
    partNumber: 'Part IX-A',
    title: 'The Municipalities',
    articlesRange: 'Articles 243P – 243ZG',
    category: 'State Machinery',
    prelimsImportance: 3,
    mainsImportance: 3,
    examWeights: { holistic: 1.0, upsc: 1.8, djs: 0.8, uppcsj: 1.2, jkpsc: 1.2 },
    bootcampDays: [10],
    highYieldArticles: [
      { number: '243Q', title: 'Constitution of Municipalities', note: 'Nagar Panchayat, Municipal Council, Municipal Corporation' },
      { number: '243W', title: 'Powers, authority and responsibilities (12th Schedule)', note: '18 functional items of municipal governance' },
      { number: '243ZD', title: 'Committee for district planning', note: 'Consolidates rural and urban plans' }
    ],
    landmarkPrecedents: [
      { name: 'State of Maharashtra v. Vikas Kishanrao Gawali', year: 2021, coreHolding: 'Reiterated Triple Test before reserving local urban body seats for OBCs.' }
    ],
    recentBenchmark2024: 'Municipal demolition actions subjected to nationwide judicial guidelines in November 2024.',
    mainsFocusBlueprint: 'Evaluate the functional autonomy of urban local bodies under the 74th Amendment and the 12th Schedule.',
    diagnosticQuestions: [
      {
        id: 'diag-p9a-1',
        partId: 'part-9a',
        question: 'Which schedule of the Indian Constitution enumerates the functional responsibilities of Municipalities under Article 243W?',
        options: ['10th Schedule', '11th Schedule', '12th Schedule', '7th Schedule'],
        correctIndex: 2,
        articleRef: '12th Schedule / Art 243W',
        explanation: 'The 12th Schedule (added by the 74th Amendment Act, 1992) lists 18 matters within municipal jurisdiction.'
      }
    ]
  },
  {
    id: 'part-9b',
    partNumber: 'Part IX-B',
    title: 'The Co-operative Societies',
    articlesRange: 'Articles 243ZH – 243ZT',
    category: 'State Machinery',
    prelimsImportance: 3,
    mainsImportance: 3,
    examWeights: { holistic: 0.8, upsc: 1.5, djs: 0.7, uppcsj: 1.0, jkpsc: 0.8 },
    bootcampDays: [10],
    highYieldArticles: [
      { number: '243ZH', title: 'Definitions', note: 'Co-operative society, multi-State co-operative society' },
      { number: '243ZJ', title: 'Number and term of members of board and its office bearers', note: 'Maximum 21 directors, 5-year term' }
    ],
    landmarkPrecedents: [
      { name: 'Union of India v. Rajendra N. Shah', year: 2021, coreHolding: 'Part IX-B struck down for intra-state cooperatives for lack of Article 368(2) state ratification; upheld only for multi-state cooperatives.' }
    ],
    recentBenchmark2024: 'Supreme Court federalism doctrine restricting central intrusion into State subject cooperatives (Entry 32 List II).',
    mainsFocusBlueprint: 'Discuss the 97th Constitutional Amendment judgment in Rajendra Shah and the limits of Parliament amending power over federal subjects.',
    diagnosticQuestions: [
      {
        id: 'diag-p9b-1',
        partId: 'part-9b',
        question: 'In Union of India v. Rajendra N. Shah (2021), why was Part IX-B declared unconstitutional regarding state cooperative societies?',
        options: [
          'It violated Article 14 equal protection',
          'It was passed without ratification by one-half of the State Legislatures under Article 368(2)',
          'It violated the Basic Structure of judicial review',
          'Cooperative societies cannot be granted constitutional status'
        ],
        correctIndex: 1,
        articleRef: 'Article 368(2) Proviso & Part IX-B',
        explanation: 'Cooperative societies within a state fall exclusively under Entry 32 List II; altering state legislative power required ratification by at least half the states under Art 368(2).'
      }
    ]
  },
  {
    id: 'part-10',
    partNumber: 'Part X',
    title: 'The Scheduled and Tribal Areas',
    articlesRange: 'Articles 244 – 244A',
    category: 'Elections & Special',
    prelimsImportance: 4,
    mainsImportance: 4,
    examWeights: { holistic: 1.2, upsc: 2.2, djs: 0.8, uppcsj: 1.2, jkpsc: 1.2 },
    bootcampDays: [10],
    highYieldArticles: [
      { number: '244(1)', title: 'Fifth Schedule administration', note: 'Governor notification; Tribes Advisory Council; non-application of Acts' },
      { number: '244(2)', title: 'Sixth Schedule administration (Assam, Meghalaya, Tripura, Mizoram)', note: 'Autonomous District Councils (ADCs) with legislative and judicial powers' },
      { number: '244A', title: 'Formation of an autonomous State comprising certain tribal areas in Assam', note: 'Sub-state constitutional mechanism' }
    ],
    landmarkPrecedents: [
      { name: 'Samatha v. State of Andhra Pradesh', year: 1997, coreHolding: 'Mining leases to non-tribals in Fifth Schedule areas are void; tribal land alienation barred.' },
      { name: 'Chelle Swami v. State of A.P.', year: 2000, coreHolding: 'Reaffirmed protection of tribal identity under Fifth Schedule regulations.' }
    ],
    recentBenchmark2024: 'Judicial scrutiny of mining rights in Fifth Schedule areas aligned with the 2024 9-Judge MADA mineral tax ruling.',
    mainsFocusBlueprint: 'Compare the constitutional governance architectures of Fifth Schedule vs Sixth Schedule areas with reference to indigenous autonomy.',
    diagnosticQuestions: [
      {
        id: 'diag-p10-1',
        partId: 'part-10',
        question: 'Which constitutional schedule applies to the administration of tribal areas in Assam, Meghalaya, Tripura, and Mizoram (AMTM)?',
        options: ['Fifth Schedule', 'Sixth Schedule', 'Seventh Schedule', 'Eighth Schedule'],
        correctIndex: 1,
        articleRef: 'Article 244(2) & Sixth Schedule',
        explanation: 'Article 244(2) applies the Sixth Schedule to the tribal areas of Assam, Meghalaya, Tripura, and Mizoram.'
      }
    ]
  },
  {
    id: 'part-11',
    partNumber: 'Part XI',
    title: 'Relations Between the Union and the States',
    articlesRange: 'Articles 245 – 263',
    category: 'Federalism & Finance',
    prelimsImportance: 5,
    mainsImportance: 5,
    examWeights: { holistic: 2.0, upsc: 2.5, djs: 2.0, uppcsj: 2.0, jkpsc: 2.5 },
    bootcampDays: [10],
    highYieldArticles: [
      { number: '245', title: 'Extent of laws made by Parliament and State Legislatures', note: 'Territorial nexus test' },
      { number: '246', title: 'Subject-matter of laws (Seventh Schedule)', note: 'List I Union, List II State, List III Concurrent' },
      { number: '248', title: 'Residuary powers of legislation', note: 'Vested exclusively in Parliament' },
      { number: '254', title: 'Repugnancy between central and state laws in List III', note: 'Presidential assent exception under Art 254(2)' },
      { number: '262', title: 'Adjudication of disputes relating to inter-State rivers', note: 'Exclusion of Supreme Court jurisdiction under statutory tribunals' },
      { number: '263', title: 'Inter-State Council', note: 'Sarkaria & Punchhi Commissions recommendations' }
    ],
    landmarkPrecedents: [
      { name: 'State of Bombay v. R.M.D.C.', year: 1957, coreHolding: 'Doctrine of Territorial Nexus validated.' },
      { name: 'M. Karunanidhi v. UOI', year: 1979, coreHolding: 'Classic 3-condition test for Article 254 repugnancy.' },
      { name: 'Prafulla Kumar Mukherjee v. Bank of Commerce', year: 1947, coreHolding: 'Doctrine of Pith and Substance formulated.' }
    ],
    recentBenchmark2024: '2024 9-Judge Bench in Mineral Area Development Authority (MADA) resolved federal conflict between Entry 54 List I and Entry 50 List II.',
    mainsFocusBlueprint: 'Examine the operational scope of Article 254(2) Presidential assent in insulating State concurrent legislation against parliamentary override.',
    diagnosticQuestions: [
      {
        id: 'diag-p11-1',
        partId: 'part-11',
        question: 'Under Article 254(2), a State law on a Concurrent List subject that is inconsistent with an earlier parliamentary law can prevail in that State if:',
        options: [
          'It is approved by a 2/3rd majority in the State Assembly',
          'It has been reserved for the consideration of the President and received his assent',
          'The High Court certifies that it serves the public interest',
          'The Inter-State Council ratifies it'
        ],
        correctIndex: 1,
        articleRef: 'Article 254(2)',
        explanation: 'Article 254(2) provides that state legislation on List III repugnant to an earlier central law will prevail in that State if reserved for President consideration and assented to.'
      }
    ]
  },
  {
    id: 'part-12',
    partNumber: 'Part XII',
    title: 'Finance, Property, Contracts and Suits',
    articlesRange: 'Articles 264 – 300A',
    category: 'Federalism & Finance',
    prelimsImportance: 5,
    mainsImportance: 5,
    examWeights: { holistic: 2.0, upsc: 2.5, djs: 2.0, uppcsj: 1.8, jkpsc: 2.0 },
    bootcampDays: [10],
    highYieldArticles: [
      { number: '265', title: 'Taxes not to be imposed save by authority of law', note: 'No executive taxation; strictly statutory' },
      { number: '279A', title: 'Goods and Services Tax (GST) Council', note: 'Cooperative federalism body; 101st Amendment' },
      { number: '280', title: 'Finance Commission', note: 'Quinquennial revenue distribution recommendations' },
      { number: '299', title: 'Contracts on behalf of the Union or State', note: 'Mandatory formal requirements; prevents unauthorized fiscal burden' },
      { number: '300', title: 'Suits and proceedings', note: 'State liability in tort; sovereign vs non-sovereign functions' },
      { number: '300A', title: 'Persons not to be deprived of property save by authority of law', note: 'Constitutional human right; requires fair procedure and compensation' }
    ],
    landmarkPrecedents: [
      { name: 'Mineral Area Development Authority (MADA) v. SAIL', year: 2024, coreHolding: '9-Judge Bench held 8:1 that royalty under MMDR Act is not a tax; States have power to tax mineral rights under Entry 50 List II.' },
      { name: 'Kasturi Lal v. State of U.P.', year: 1965, coreHolding: 'Sovereign immunity recognized for state torts (narrowed by modern rulings).' },
      { name: 'Kolkata Municipal Corp. v. Bimal Kumar Shah', year: 2024, coreHolding: '7-step test for lawful property acquisition under Article 300A; procedural fairness non-negotiable.' }
    ],
    recentBenchmark2024: '2024 9-Judge MADA ruling (mineral taxation) and 2024 Kolkata Municipal Corp (Art 300A procedural safeguards for property expropriation).',
    mainsFocusBlueprint: 'Discuss how Article 300A has evolved from a deleted fundamental right into an indispensable constitutional human right after Kolkata Municipal Corp (2024).',
    diagnosticQuestions: [
      {
        id: 'diag-p12-1',
        partId: 'part-12',
        question: 'In the historic 9-Judge Constitution Bench decision in Mineral Area Development Authority (MADA) v. SAIL (2024), the Supreme Court held that:',
        options: [
          'Royalty is a tax and States cannot levy additional cesses on mining leases',
          'Royalty is not a tax, and States possess regulatory and taxing power over mineral rights under Entry 50 of List II',
          'Parliament has exclusive jurisdiction to tax all mineral output under Article 248',
          'All mineral rights automatically belong to the Union under Article 297'
        ],
        correctIndex: 1,
        articleRef: 'Articles 265, 246 & Entry 50 List II',
        explanation: 'MADA (2024) 9-Judge Bench overruled India Cements (1990) and held that royalty is not a tax, allowing State legislatures to levy taxes on mineral-bearing land.'
      }
    ]
  },
  {
    id: 'part-13',
    partNumber: 'Part XIII',
    title: 'Trade, Commerce and Intercourse within the Territory of India',
    articlesRange: 'Articles 301 – 307',
    category: 'Federalism & Finance',
    prelimsImportance: 3,
    mainsImportance: 4,
    examWeights: { holistic: 1.0, upsc: 1.8, djs: 1.2, uppcsj: 1.2, jkpsc: 1.0 },
    bootcampDays: [10],
    highYieldArticles: [
      { number: '301', title: 'Freedom of trade, commerce and intercourse', note: 'Subject to provisions of Part XIII; economic unity of nation' },
      { number: '302', title: 'Power of Parliament to impose restrictions', note: 'Public interest restrictions across states' },
      { number: '304(a)&(b)', title: 'Restrictions on trade, commerce and intercourse among States', note: 'Proviso: Presidential sanction mandatory for state bills' }
    ],
    landmarkPrecedents: [
      { name: 'Atiabari Tea Co. v. State of Assam', year: 1961, coreHolding: 'Direct and immediate impediment test for Article 301 violations.' },
      { name: 'Automobile Transport (Rajasthan) v. State of Rajasthan', year: 1962, coreHolding: 'Compensatory tax doctrine formulated.' },
      { name: 'Jindal Stainless Ltd. v. State of Haryana', year: 2016, coreHolding: '9-Judge Bench overruled compensatory tax theory; non-discriminatory taxes do not violate Art 301.' }
    ],
    recentBenchmark2024: 'Application of Jindal Stainless non-discriminatory taxation test to intra-state road cesses and e-way bill enforcement.',
    mainsFocusBlueprint: 'Trace the judicial evolution of Article 301 from Atiabari and Automobile Transport to the 9-Judge Bench in Jindal Stainless.',
    diagnosticQuestions: [
      {
        id: 'diag-p13-1',
        partId: 'part-13',
        question: 'Under the 9-Judge Constitution Bench judgment in Jindal Stainless (2016), a State tax will NOT violate Article 301 if:',
        options: [
          'It is strictly compensatory in nature',
          'It is non-discriminatory between goods imported from other States and goods manufactured locally within the State',
          'It is approved by a referendum',
          'It is lower than the central excise duty'
        ],
        correctIndex: 1,
        articleRef: 'Articles 301 & 304(a)',
        explanation: 'Jindal Stainless (2016) rejected the compensatory tax doctrine, holding that non-discriminatory taxation under Article 304(a) does not impede Article 301 freedom.'
      }
    ]
  },
  {
    id: 'part-14',
    partNumber: 'Part XIV',
    title: 'Services under the Union and the States',
    articlesRange: 'Articles 308 – 323',
    category: 'State Machinery',
    prelimsImportance: 4,
    mainsImportance: 5,
    examWeights: { holistic: 1.5, upsc: 2.2, djs: 2.2, uppcsj: 2.2, jkpsc: 2.0 },
    bootcampDays: [11],
    highYieldArticles: [
      { number: '310', title: 'Tenure of office (Doctrine of Pleasure)', note: 'Subject to constitutional safeguards in Article 311' },
      { number: '311', title: 'Dismissal, removal or reduction in rank', note: 'Reasonable opportunity of being heard; Second Proviso exceptions (a), (b), (c)' },
      { number: '312', title: 'All-India Services', note: 'Rajya Sabha 2/3rd resolution prerequisite' },
      { number: '315–323', title: 'Public Service Commissions (UPSC & SPSC)', note: 'Constitutional watchdog for merit; removal via SC reference (Art 317)' }
    ],
    landmarkPrecedents: [
      { name: 'Union of India v. Tulsiram Patel', year: 1985, coreHolding: '5-Judge Bench held Proviso (b) to Art 311(2) dispenses with inquiry only when reasonably impracticable on objective facts.' },
      { name: 'State of Bihar v. Abdul Majid', year: 1954, coreHolding: 'Civil servants can sue government for arrears of salary in Indian courts.' },
      { name: 'B.P. Singhal v. UOI', year: 2010, coreHolding: 'Pleasure doctrine cannot be exercised arbitrarily, whimsically, or for mala fide reasons.' }
    ],
    recentBenchmark2024: 'Supreme Court quashed summary dismissals of police officers under Proviso (b) to Art 311(2) for lack of objective recorded evidence of witness intimidation.',
    mainsFocusBlueprint: 'Critically examine the exceptions to Article 311(2) natural justice inquiry in civil servant dismissals with reference to Tulsiram Patel.',
    diagnosticQuestions: [
      {
        id: 'diag-p14-1',
        partId: 'part-14',
        question: 'Under which provision of Article 311(2) Second Proviso can a departmental inquiry be dispensed with on the ground that it is not reasonably practicable to hold such inquiry?',
        options: ['Clause (a)', 'Clause (b)', 'Clause (c)', 'Clause (d)'],
        correctIndex: 1,
        articleRef: 'Article 311(2) Second Proviso (b)',
        explanation: 'Proviso (b) to Article 311(2) permits the disciplinary authority to dispense with inquiry if satisfied for reasons recorded in writing that it is not reasonably practicable.'
      }
    ]
  },
  {
    id: 'part-14a',
    partNumber: 'Part XIV-A',
    title: 'Tribunals',
    articlesRange: 'Articles 323A – 323B',
    category: 'State Machinery',
    prelimsImportance: 4,
    mainsImportance: 5,
    examWeights: { holistic: 1.5, upsc: 2.0, djs: 2.5, uppcsj: 1.8, jkpsc: 1.8 },
    bootcampDays: [11],
    highYieldArticles: [
      { number: '323A', title: 'Administrative tribunals', note: 'Central & State Administrative Tribunals (CAT/SAT) for public service disputes' },
      { number: '323B', title: 'Tribunals for other matters', note: 'Taxation, foreign exchange, industrial disputes, rent, elections' }
    ],
    landmarkPrecedents: [
      { name: 'L. Chandra Kumar v. UOI', year: 1997, coreHolding: '7-Judge Bench held judicial review under Arts 226/227 and 32 is Basic Structure; exclusion of High Court writ review unconstitutional.' },
      { name: 'Madras Bar Association v. UOI', year: 2014, coreHolding: 'National Tax Tribunal Act struck down; tribunals cannot usurp core High Court jurisdiction without judicial members.' },
      { name: 'Madras Bar Association v. UOI (Tribunals Ordinance)', year: 2021, coreHolding: 'Struck down statutory provisions fixing search-cum-selection committees inconsistent with judicial primacy.' }
    ],
    recentBenchmark2024: 'Judicial appointments to tribunals governed by strict compliance with the Madras Bar Association (2021) guidelines.',
    mainsFocusBlueprint: 'Discuss the constitutional validity of tribunalization in India in the light of L. Chandra Kumar and the Madras Bar Association series.',
    diagnosticQuestions: [
      {
        id: 'diag-p14a-1',
        partId: 'part-14a',
        question: 'In L. Chandra Kumar v. Union of India (1997), a 7-Judge Constitution Bench held that decisions of Administrative Tribunals under Article 323A:',
        options: [
          'Can only be challenged directly before the Supreme Court under Article 136',
          'Are final and immune from all judicial review',
          'Must be challenged before a Division Bench of the concerned High Court under Article 226/227 before moving the Supreme Court',
          'Are advisory and not binding on the executive'
        ],
        correctIndex: 2,
        articleRef: 'Articles 323A & 226',
        explanation: 'L. Chandra Kumar held that tribunals are courts of first instance, but their decisions are subject to scrutiny before a Division Bench of the High Court under Article 226/227.'
      }
    ]
  },
  {
    id: 'part-15',
    partNumber: 'Part XV',
    title: 'Elections',
    articlesRange: 'Articles 324 – 329A',
    category: 'Elections & Special',
    prelimsImportance: 5,
    mainsImportance: 5,
    examWeights: { holistic: 2.0, upsc: 2.8, djs: 1.8, uppcsj: 2.0, jkpsc: 2.0 },
    bootcampDays: [11],
    highYieldArticles: [
      { number: '324', title: 'Superintendence, direction and control of elections', note: 'Plenary reservoir of power in Election Commission (Mohinder Singh Gill)' },
      { number: '325', title: 'No person to be ineligible for inclusion in electoral roll on grounds of religion, race, caste or sex', note: 'Single general electoral roll' },
      { number: '326', title: 'Elections to House of the People and Assemblies to be on the basis of adult suffrage', note: 'Voting age reduced to 18 by 61st Amendment' },
      { number: '329', title: 'Bar to interference by courts in electoral matters', note: 'Election petition only mechanism after election process commences' }
    ],
    landmarkPrecedents: [
      { name: 'Anoop Baranwal v. UOI', year: 2023, coreHolding: '5-Judge Bench mandated committee of PM, CJI, and Leader of Opposition for CEC appointments until Parliament legislates.' },
      { name: 'Association for Democratic Reforms v. UOI (Electoral Bonds)', year: 2024, coreHolding: '5-Judge Bench unanimously struck down Electoral Bond Scheme as violative of voter right to information under Art 19(1)(a).' },
      { name: 'Mohinder Singh Gill v. Chief Election Commissioner', year: 1978, coreHolding: 'Article 324 operates in areas where legislature has not made specific statutory provision.' }
    ],
    recentBenchmark2024: '2024 5-Judge Constitution Bench in ADR v. UOI striking down the Electoral Bond Scheme; EVM-VVPAT 100% verification rejection ruling.',
    mainsFocusBlueprint: 'Evaluate the doctrine of free and fair elections as part of the Basic Structure with special reference to Anoop Baranwal (2023) and Electoral Bonds (2024).',
    diagnosticQuestions: [
      {
        id: 'diag-p15-1',
        partId: 'part-15',
        question: 'In Association for Democratic Reforms v. Union of India (2024), the 5-Judge Constitution Bench held that the Electoral Bond Scheme was unconstitutional because:',
        options: [
          'It permitted foreign political donations only',
          'Anonymous political contributions violate the voter right to information under Article 19(1)(a)',
          'It violated Article 326 adult suffrage',
          'It lacked approval from the Reserve Bank of India Governor'
        ],
        correctIndex: 1,
        articleRef: 'Articles 19(1)(a) & 324',
        explanation: 'ADR (2024) held that voter right to information regarding sources of political funding is an integral part of freedom of speech and expression under Article 19(1)(a).'
      }
    ]
  },
  {
    id: 'part-16',
    partNumber: 'Part XVI',
    title: 'Special Provisions Relating to Certain Classes',
    articlesRange: 'Articles 330 – 342A',
    category: 'Elections & Special',
    prelimsImportance: 4,
    mainsImportance: 5,
    examWeights: { holistic: 1.5, upsc: 2.2, djs: 2.0, uppcsj: 1.8, jkpsc: 2.0 },
    bootcampDays: [2, 11],
    highYieldArticles: [
      { number: '330 & 332', title: 'Reservation of seats for SCs and STs in Lok Sabha and Assemblies', note: 'Extended by 104th Amendment 2020' },
      { number: '335', title: 'Claims of SCs and STs to services and posts', note: 'Consistency with maintenance of efficiency of administration' },
      { number: '338, 338A, 338B', title: 'National Commissions for SCs, STs, and NCBC', note: 'Constitutional status (65th, 89th, 102nd Amendments)' },
      { number: '341 & 342', title: 'Scheduled Castes and Scheduled Tribes', note: 'Presidential List notification; sub-classification doctrine' },
      { number: '342A', title: 'Socially and educationally backward classes', note: 'State list restored by 105th Amendment 2021' }
    ],
    landmarkPrecedents: [
      { name: 'State of Punjab v. Davinder Singh', year: 2024, coreHolding: '7-Judge Bench held 6:1 that Article 341 does not create an indivisible monolith; States can sub-classify SC/STs based on empirical evidence.' },
      { name: 'Indra Sawhney v. UOI', year: 1992, coreHolding: '9-Judge Bench 50% ceiling rule; creamy layer exclusion for OBCs.' },
      { name: 'Jarnail Singh v. Lachhmi Narain Gupta', year: 2018, coreHolding: 'Applied creamy layer principle to SC/ST promotions.' }
    ],
    recentBenchmark2024: '2024 7-Judge Constitution Bench in State of Punjab v. Davinder Singh authorising SC/ST sub-classification and creamy layer consideration.',
    mainsFocusBlueprint: 'Critically examine the constitutional reasoning of the 7-Judge Bench in Davinder Singh (2024) in reconciling Article 341 with Article 16(4).',
    diagnosticQuestions: [
      {
        id: 'diag-p16-1',
        partId: 'part-16',
        question: 'Under the 2024 7-Judge Bench ruling in State of Punjab v. Davinder Singh, what prerequisite is mandatory before a State enacts sub-classification within Scheduled Castes?',
        options: [
          'Prior constitutional amendment under Article 368',
          'Empirical data demonstrating quantifiable backwardness and lack of adequate representation of the sub-group',
          'Approval from the National Commission for Scheduled Castes only',
          'A simple majority resolution in the Lok Sabha'
        ],
        correctIndex: 1,
        articleRef: 'Articles 16(4) & 341',
        explanation: 'Davinder Singh (2024) held that sub-classification cannot be done on political whim; it requires verifiable empirical data proving sub-group underrepresentation.'
      }
    ]
  },
  {
    id: 'part-17',
    partNumber: 'Part XVII',
    title: 'Official Language',
    articlesRange: 'Articles 343 – 351',
    category: 'Elections & Special',
    prelimsImportance: 3,
    mainsImportance: 3,
    examWeights: { holistic: 0.8, upsc: 1.2, djs: 0.8, uppcsj: 1.5, jkpsc: 1.0 },
    bootcampDays: [12],
    highYieldArticles: [
      { number: '343', title: 'Official language of the Union', note: 'Hindi in Devanagari script + English continued by Act' },
      { number: '348', title: 'Language to be used in the Supreme Court and in the High Courts', note: 'Authoritative texts in English language unless Governor receives President consent' },
      { number: '350A', title: 'Facilities for instruction in mother-tongue at primary stage', note: 'Linguistic minority safeguard' }
    ],
    landmarkPrecedents: [
      { name: 'State of Karnataka v. Associated Management of English Medium Primary Schools', year: 2014, coreHolding: '5-Judge Bench held State cannot compel mother tongue as sole medium of primary instruction under Art 19(1)(a).' }
    ],
    recentBenchmark2024: 'Supreme Court translation project providing judgments in regional languages across e-SCR.',
    mainsFocusBlueprint: 'Discuss the constitutional scheme governing the language of the higher judiciary under Article 348 and the tension with regional accessibility.',
    diagnosticQuestions: [
      {
        id: 'diag-p17-1',
        partId: 'part-17',
        question: 'Under Article 348(1)(a), unless Parliament by law otherwise provides, all proceedings in the Supreme Court and every High Court shall be in:',
        options: ['Hindi in Devanagari script', 'English language', 'The respective official language of the State', 'Either Hindi or English at the judge option'],
        correctIndex: 1,
        articleRef: 'Article 348(1)(a)',
        explanation: 'Article 348(1)(a) mandates that until Parliament by law provides otherwise, all proceedings in the Supreme Court and High Courts shall be conducted in English.'
      }
    ]
  },
  {
    id: 'part-18',
    partNumber: 'Part XVIII',
    title: 'Emergency Provisions',
    articlesRange: 'Articles 352 – 360',
    category: 'Emergency & Amendment',
    prelimsImportance: 5,
    mainsImportance: 5,
    examWeights: { holistic: 2.0, upsc: 2.2, djs: 2.2, uppcsj: 2.5, jkpsc: 2.5 },
    bootcampDays: [12],
    highYieldArticles: [
      { number: '352', title: 'Proclamation of Emergency (National)', note: 'War, external aggression, or armed rebellion; written Cabinet decision; 44th Amendment safeguards' },
      { number: '356', title: 'Provisions in case of failure of constitutional machinery in States (President Rule)', note: 'S.R. Bommai 9-Judge Bench; subjective satisfaction subject to judicial review' },
      { number: '358', title: 'Suspension of provisions of Article 19 during emergencies', note: 'Only applies to war or external aggression, not armed rebellion' },
      { number: '359', title: 'Suspension of enforcement of rights during emergencies', note: 'Articles 20 and 21 can NEVER be suspended (44th Amendment)' },
      { number: '360', title: 'Provisions as to financial emergency', note: 'Reduction of salaries including judges; never invoked to date' }
    ],
    landmarkPrecedents: [
      { name: 'S.R. Bommai v. UOI', year: 1994, coreHolding: '9-Judge Bench held federalism is Basic Structure; dissolution of assembly prior to parliamentary approval void; floor test mandatory.' },
      { name: 'Minerva Mills v. UOI', year: 1980, coreHolding: 'Presidential satisfaction under Article 356 is not immune from judicial review on mala fide grounds.' },
      { name: 'ADM Jabalpur v. Shivkant Shukla', year: 1976, coreHolding: 'Notorious Habeas Corpus decision holding Art 21 suspended during emergency (formally overruled in Puttaswamy 2017).' }
    ],
    recentBenchmark2024: 'Supreme Court reaffirmation of S.R. Bommai principles against hasty assembly dissolutions in State of Maharashtra (Shiv Sena split) and floor tests.',
    mainsFocusBlueprint: 'Analyze how the 44th Constitutional Amendment Act, 1978 fortified democratic safeguards in Articles 352, 356, and 359 against executive overreach.',
    diagnosticQuestions: [
      {
        id: 'diag-p18-1',
        partId: 'part-18',
        question: 'Following the 44th Constitutional Amendment Act 1978, the enforcement of which Fundamental Rights can NEVER be suspended even during a National Emergency?',
        options: [
          'Articles 14 and 19',
          'Articles 20 and 21',
          'Articles 21 and 22',
          'Articles 25 and 26'
        ],
        correctIndex: 1,
        articleRef: 'Article 359(1)',
        explanation: 'The 44th Amendment Act, 1978 amended Article 359(1) to provide that the right to move any court for the enforcement of Articles 20 and 21 cannot be suspended.'
      },
      {
        id: 'diag-p18-2',
        partId: 'part-18',
        question: 'Under the 9-Judge Constitution Bench mandate in S.R. Bommai (1994), when does a Presidential Proclamation under Article 356 become final so as to permit the dissolution of the State Assembly?',
        options: [
          'Immediately upon signing by the President',
          'Only after it has been approved by both Houses of Parliament',
          'Upon recommendation by the Union Council of Ministers',
          'After 6 months of Governor administration'
        ],
        correctIndex: 1,
        articleRef: 'Article 356(3)',
        explanation: 'Bommai held that until both Houses of Parliament approve the Article 356 Proclamation under clause (3), the President can only suspend the Assembly, not dissolve it.'
      }
    ]
  },
  {
    id: 'part-19',
    partNumber: 'Part XIX',
    title: 'Miscellaneous',
    articlesRange: 'Articles 361 – 367',
    category: 'Emergency & Amendment',
    prelimsImportance: 3,
    mainsImportance: 3,
    examWeights: { holistic: 0.8, upsc: 1.2, djs: 1.0, uppcsj: 1.2, jkpsc: 1.0 },
    bootcampDays: [12],
    highYieldArticles: [
      { number: '361', title: 'Protection of President and Governors', note: 'Immunity from criminal proceedings during term of office' },
      { number: '365', title: 'Effect of failure to comply with directions given by the Union', note: 'Conclusive trigger for Art 356 failure of constitutional machinery' },
      { number: '366', title: 'Definitions', note: 'Key constitutional definitions including Goods and Services Tax' }
    ],
    landmarkPrecedents: [
      { name: 'Rameshwar Prasad v. UOI', year: 2006, coreHolding: 'Immunity under Article 361 is personal to Governor; does not bar judicial review of government action taken in his name.' }
    ],
    recentBenchmark2024: 'Supreme Court clarified scope of gubernatorial immunity in relation to criminal complaints filed against sitting constitutional dignitaries.',
    mainsFocusBlueprint: 'Discuss the constitutional boundary of gubernatorial immunity under Article 361 and the standard of judicial review established in Rameshwar Prasad.',
    diagnosticQuestions: [
      {
        id: 'diag-p19-1',
        partId: 'part-19',
        question: 'What is the constitutional effect under Article 365 if a State fails to comply with or give effect to any direction given by the Union Executive?',
        options: [
          'Automatic imposition of President Rule without notice',
          'It shall be lawful for the President to hold that a situation has arisen in which the government of the State cannot be carried on in accordance with the Constitution',
          'The High Court is superseded by the Union Law Ministry',
          'The State finances are transferred to the Consolidated Fund of India'
        ],
        correctIndex: 1,
        articleRef: 'Article 365',
        explanation: 'Article 365 establishes a legal presumption: non-compliance with lawful Union directions entitles the President to invoke Article 356.'
      }
    ]
  },
  {
    id: 'part-20',
    partNumber: 'Part XX',
    title: 'Amendment of the Constitution',
    articlesRange: 'Article 368',
    category: 'Emergency & Amendment',
    prelimsImportance: 5,
    mainsImportance: 5,
    examWeights: { holistic: 2.2, upsc: 2.8, djs: 2.8, uppcsj: 2.5, jkpsc: 2.2 },
    bootcampDays: [13],
    highYieldArticles: [
      { number: '368', title: 'Power of Parliament to amend the Constitution and procedure therefor', note: 'Constituent power vs Ordinary legislative power; Special majority + 50% state ratification for federal entrenchments' }
    ],
    landmarkPrecedents: [
      { name: 'Shankari Prasad v. UOI', year: 1951, coreHolding: 'First Amendment upheld; constitutional amendments under Art 368 are not "law" under Art 13(2).' },
      { name: 'Golak Nath v. State of Punjab', year: 1967, coreHolding: '11-Judge Bench held Fundamental Rights cannot be amended or abridged by Parliament under Art 368.' },
      { name: 'Kesavananda Bharati v. State of Kerala', year: 1973, coreHolding: '13-Judge Bench overruled Golak Nath but established the Basic Structure Doctrine restricting constituent power.' },
      { name: 'Minerva Mills v. UOI', year: 1980, coreHolding: 'Limited amending power is itself a Basic Structure feature; Parliament cannot confer upon itself unlimited amending power.' },
      { name: 'I.R. Coelho v. State of Tamil Nadu', year: 2007, coreHolding: '9-Judge Bench held Ninth Schedule laws inserted after April 24, 1973 are open to Basic Structure judicial review.' }
    ],
    recentBenchmark2024: 'Supreme Court review of Basic Structure doctrine in relation to central election commission appointments and constitutional tribunalization.',
    mainsFocusBlueprint: 'Critically analyze the philosophical and juridical trajectory of constituent amending power from Shankari Prasad to Kesavananda, Minerva Mills, and I.R. Coelho.',
    diagnosticQuestions: [
      {
        id: 'diag-p20-1',
        partId: 'part-20',
        question: 'Which landmark 13-Judge Constitution Bench decision established that Parliament constituent power under Article 368 does not extend to altering the Basic Structure of the Constitution?',
        options: [
          'Golak Nath v. State of Punjab (1967)',
          'Kesavananda Bharati v. State of Kerala (1973)',
          'Minerva Mills v. Union of India (1980)',
          'Waman Rao v. Union of India (1981)'
        ],
        correctIndex: 1,
        articleRef: 'Article 368 & Basic Structure',
        explanation: 'Kesavananda Bharati (1973) held 7:6 that while Article 368 confers constituent power to amend any part of the Constitution, it cannot destroy its Basic Structure.'
      },
      {
        id: 'diag-p20-2',
        partId: 'part-20',
        question: 'Under the 9-Judge Bench ruling in I.R. Coelho (2007), laws placed in the Ninth Schedule of the Constitution are open to challenge if:',
        options: [
          'They were placed in the Ninth Schedule prior to 1950',
          'They were inserted into the Ninth Schedule after April 24, 1973 and violate the Basic Structure as reflected in Fundamental Rights',
          'They deal with land acquisition matters',
          'They are not passed unanimously by Parliament'
        ],
        correctIndex: 1,
        articleRef: 'Article 31B & Ninth Schedule',
        explanation: 'I.R. Coelho held that the Kesavananda cutoff date (24 April 1973) applies; any Ninth Schedule law violating Basic Structure Fundamental Rights (Arts 14, 19, 21) can be struck down.'
      }
    ]
  },
  {
    id: 'part-21',
    partNumber: 'Part XXI',
    title: 'Temporary, Transitional and Special Provisions',
    articlesRange: 'Articles 369 – 392',
    category: 'Elections & Special',
    prelimsImportance: 4,
    mainsImportance: 4,
    examWeights: { holistic: 1.2, upsc: 2.0, djs: 1.0, uppcsj: 1.2, jkpsc: 3.0 },
    bootcampDays: [12],
    highYieldArticles: [
      { number: '370', title: 'Temporary provisions with respect to the State of Jammu and Kashmir', note: 'Abrogation upheld by 5-Judge Constitution Bench in December 2023' },
      { number: '371 to 371-J', title: 'Special provisions for Maharashtra, Gujarat, Nagaland, Assam, Manipur, AP, Telangana, Sikkim, Mizoram, Arunachal, Goa, Karnataka', note: 'Asymmetric federalism safeguards' }
    ],
    landmarkPrecedents: [
      { name: 'In Re Article 370 of the Constitution', year: 2023, coreHolding: '5-Judge Bench held Article 370 was temporary feature; State of J&K retained no sovereignty after signing Instrument of Accession.' },
      { name: 'Prem Nath Kaul v. State of J&K', year: 1959, coreHolding: 'Early ruling on J&K constituent assembly (discussed in 2023 5-Judge Bench).' }
    ],
    recentBenchmark2024: 'Implementation of the 2023 5-Judge Bench verdict on J&K Assembly elections and ongoing constitutional restoration petitions.',
    mainsFocusBlueprint: 'Discuss the doctrine of asymmetric federalism embodied in Articles 371 to 371-J and the constitutional lessons from the 2023 Article 370 verdict.',
    diagnosticQuestions: [
      {
        id: 'diag-p21-1',
        partId: 'part-21',
        question: 'In December 2023, the 5-Judge Constitution Bench in In Re Article 370 held that the State of Jammu & Kashmir:',
        options: [
          'Retained internal sovereignty distinct from the rest of the Union',
          'Did not retain any element of sovereignty after signing the Instrument of Accession and adoption of the Indian Constitution',
          'Could only be integrated through a fresh constituent assembly',
          'Remains a sovereign princely enclave under international law'
        ],
        correctIndex: 1,
        articleRef: 'Article 370 & Preamble',
        explanation: 'The 5-Judge Bench held that paragraph 2 of the J&K Constitution declared J&K an integral part of India, and no residual sovereignty survived.'
      }
    ]
  },
  {
    id: 'part-22',
    partNumber: 'Part XXII',
    title: 'Short Title, Commencement, Authoritative Text in Hindi and Repeals',
    articlesRange: 'Articles 393 – 395',
    category: 'Foundations',
    prelimsImportance: 2,
    mainsImportance: 2,
    examWeights: { holistic: 0.6, upsc: 0.8, djs: 0.5, uppcsj: 1.0, jkpsc: 0.6 },
    bootcampDays: [12],
    highYieldArticles: [
      { number: '393', title: 'Short title', note: 'This Constitution may be called the Constitution of India' },
      { number: '394', title: 'Commencement', note: 'Articles 5, 6, 7, 8, 9, 60, 324, 366, 367, 379, 380, 388, 391, 392, 393 came into force on 26 Nov 1949; remainder on 26 Jan 1950' },
      { number: '394A', title: 'Authoritative text in the Hindi language', note: 'Inserted by 58th Amendment 1987' },
      { number: '395', title: 'Repeals', note: 'Repealed Indian Independence Act 1947 & Government of India Act 1935' }
    ],
    landmarkPrecedents: [
      { name: 'Kesavananda Bharati v. State of Kerala', year: 1973, coreHolding: 'Affirmed that the Preamble and commencement of the Constitution derive authority from the People of India.' }
    ],
    recentBenchmark2024: 'Constitution Day (26th November) celebrations marking 75 years of constitutional adoption.',
    mainsFocusBlueprint: 'Explain the constitutional significance of Article 394 and Article 395 in establishing an autochthonous grundnorm for the Republic of India.',
    diagnosticQuestions: [
      {
        id: 'diag-p22-1',
        partId: 'part-22',
        question: 'Under Article 394, which group of articles came into force immediately on the date of adoption (26 November 1949)?',
        options: [
          'Articles 14, 19, and 21',
          'Articles 5, 6, 7, 8, 9, 60, 324, 366, 367, 379, 380, 388, 391, 392, and 393',
          'Articles 52 to 151 (Union Executive & Judiciary)',
          'Articles 352 to 360 (Emergency Provisions)'
        ],
        correctIndex: 1,
        articleRef: 'Article 394',
        explanation: 'Article 394 explicitly states that Articles 5–9, 60, 324, 366, 367, 379–393 came into force immediately on 26 November 1949, while the remaining came into force on 26 January 1950.'
      }
    ]
  }
];

// Mapping helper to find bootcamp day progress
export const PART_BOOTCAMP_DAYS_MAP: Record<string, number[]> = {
  'part-1': [1],
  'part-2': [1],
  'part-3': [1, 2, 3, 4, 5, 6],
  'part-4': [6],
  'part-4a': [6],
  'part-5': [7, 8, 9],
  'part-6': [7, 8, 9],
  'part-8': [7],
  'part-9': [10],
  'part-9a': [10],
  'part-9b': [10],
  'part-10': [10],
  'part-11': [10],
  'part-12': [10],
  'part-13': [10],
  'part-14': [11],
  'part-14a': [11],
  'part-15': [11],
  'part-16': [2, 11],
  'part-17': [12],
  'part-18': [12],
  'part-19': [12],
  'part-20': [13],
  'part-21': [12],
  'part-22': [12]
};

// Local storage key for manual student self-audits / textbook calibration
const SELF_CALIBRATION_STORAGE_KEY = 'samvidhan_cri_self_calibration_v1';
const DIAGNOSTIC_ANSWERS_STORAGE_KEY = 'samvidhan_cri_diagnostic_answers_v1';

export function getStoredSelfCalibration(): Record<string, number> {
  try {
    const raw = localStorage.getItem(SELF_CALIBRATION_STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

export function saveSelfCalibration(partId: string, bonus: number): void {
  try {
    const current = getStoredSelfCalibration();
    current[partId] = Math.max(0, Math.min(25, bonus));
    localStorage.setItem(SELF_CALIBRATION_STORAGE_KEY, JSON.stringify(current));
  } catch (e) {
    console.error('Failed to save CRI self calibration', e);
  }
}

export function getStoredDiagnosticAnswers(): Record<string, { selectedIndex: number; isCorrect: boolean; timestamp: number }> {
  try {
    const raw = localStorage.getItem(DIAGNOSTIC_ANSWERS_STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

export function recordDiagnosticAnswer(questionId: string, selectedIndex: number, isCorrect: boolean): void {
  try {
    const current = getStoredDiagnosticAnswers();
    current[questionId] = { selectedIndex, isCorrect, timestamp: Date.now() };
    localStorage.setItem(DIAGNOSTIC_ANSWERS_STORAGE_KEY, JSON.stringify(current));
  } catch (e) {
    console.error('Failed to save diagnostic answer', e);
  }
}

// =========================================================================
// COMPUTATION ENGINE: GENERATE CONSTITUTIONAL READINESS REPORT
// =========================================================================
export function computeConstitutionalReadinessReport(
  profile: ExamProfileType = 'holistic'
): ConstitutionalReadinessReport {
  // 1. Gather all activity data from localStorage
  let bootcampProgress: Record<string, any> = {};
  try {
    const raw = localStorage.getItem('samvidhan_15day_bootcamp_progress');
    if (raw) bootcampProgress = JSON.parse(raw);
  } catch {}

  let allIndiaDrafts: Record<string, string> = {};
  try {
    const raw = localStorage.getItem('samvidhan_all_india_drafts');
    if (raw) allIndiaDrafts = JSON.parse(raw);
  } catch {}

  let jkpscDrafts: Record<string, string> = {};
  try {
    const raw = localStorage.getItem('samvidhan_jkpsc_pyq_drafts');
    if (raw) jkpscDrafts = JSON.parse(raw);
  } catch {}

  let mainsScores: Record<string, any> = {};
  try {
    const raw = localStorage.getItem('samvidhan_mains_scores');
    if (raw) mainsScores = JSON.parse(raw);
  } catch {}

  let flashcardProgress: Record<string, any> = {};
  try {
    const raw = localStorage.getItem('samvidhan_flashcard_reviews');
    if (raw) flashcardProgress = JSON.parse(raw);
  } catch {}

  let bookmarkedArticles: string[] = [];
  try {
    const raw = localStorage.getItem('samvidhan_bookmarks');
    if (raw) bookmarkedArticles = JSON.parse(raw);
  } catch {}

  const mistakes = getStoredMistakes();
  const selfCalibration = getStoredSelfCalibration();
  const diagnosticAnswers = getStoredDiagnosticAnswers();

  let totalMCQsAnswered = 0;
  let totalMainsDrafts = Object.keys(allIndiaDrafts).length + Object.keys(jkpscDrafts).length;
  let totalUnresolvedMistakes = mistakes.filter((m) => !m.mastered).length;

  // 2. Compute individual readiness for all 25 parts
  const partsStats: PartReadinessStats[] = ACTIVE_25_PARTS_METADATA.map((part) => {
    const days = PART_BOOTCAMP_DAYS_MAP[part.id] || [];

    // A. Bootcamp MCQ Performance for this part
    let partMcqAttempts = 0;
    let partMcqCorrect = 0;

    days.forEach((dayNum) => {
      const dayData = bootcampProgress[dayNum];
      if (dayData && dayData.mcqAnswers) {
        Object.values(dayData.mcqAnswers).forEach((ans: any) => {
          partMcqAttempts++;
          totalMCQsAnswered++;
          if (ans === true || ans?.isCorrect === true || (typeof ans === 'number' && ans >= 0)) {
            partMcqCorrect++;
          }
        });
      }
    });

    // Check Diagnostic test answers for this part
    part.diagnosticQuestions.forEach((dq) => {
      const recorded = diagnosticAnswers[dq.id];
      if (recorded) {
        partMcqAttempts++;
        if (recorded.isCorrect) partMcqCorrect++;
      }
    });

    const mcqAccuracy = partMcqAttempts > 0 ? Math.round((partMcqCorrect / partMcqAttempts) * 100) : 0;
    // Normalized MCQ factor (up to 35 points)
    const mcqCoverageFactor = Math.min(1.0, partMcqAttempts / 15); // target: 15 MCQs per part
    const mcqComponent = Math.round(mcqAccuracy * 0.35 * mcqCoverageFactor);

    // B. Mains Answer Formulation for this part (up to 30 points)
    // Check keyword correlation in drafts
    let partMainsDrafts = 0;
    let partMainsEvaluated = 0;
    let partMainsScoreSum = 0;

    const partKeywords = [part.partNumber.toLowerCase(), part.title.toLowerCase(), ...part.highYieldArticles.map((a) => `art. ${a.number}`.toLowerCase())];

    Object.entries(allIndiaDrafts).forEach(([qId, draft]) => {
      if (typeof draft === 'string' && draft.trim().length > 60) {
        const lower = draft.toLowerCase();
        if (partKeywords.some((kw) => lower.includes(kw))) {
          partMainsDrafts++;
          const score = mainsScores[qId];
          if (score && typeof score.percentage === 'number') {
            partMainsEvaluated++;
            partMainsScoreSum += score.percentage;
          }
        }
      }
    });

    const averageMainsScore = partMainsEvaluated > 0 ? Math.round(partMainsScoreSum / partMainsEvaluated) : partMainsDrafts > 0 ? 65 : 0;
    const mainsComponent = partMainsDrafts > 0 ? Math.min(30, Math.round(partMainsDrafts * 10 + (averageMainsScore / 100) * 15)) : 0;

    // C. SRS Flashcard Retention for this part (up to 15 points)
    let srsMastered = 0;
    Object.entries(flashcardProgress).forEach(([cardId, cardData]: [string, any]) => {
      if (cardData && (cardData.box >= 4 || cardData.reps >= 3)) {
        if (cardId.toLowerCase().includes(part.id) || (cardData.partTag && cardData.partTag.toLowerCase().includes(part.partNumber.toLowerCase()))) {
          srsMastered++;
        }
      }
    });
    const srsComponent = Math.min(15, srsMastered * 3);

    // D. Mistake Bank Health for this part (-10 to +10 points)
    const partMistakes = mistakes.filter((m) => {
      return days.includes(m.dayNumber) || partKeywords.some((kw) => (m.statutoryAnchor || '').toLowerCase().includes(kw));
    });
    const unmasteredCount = partMistakes.filter((m) => !m.mastered).length;
    const masteredMistakesCount = partMistakes.filter((m) => m.mastered).length;
    const mistakesPenalty = Math.max(-10, -(unmasteredCount * 3)) + Math.min(5, masteredMistakesCount * 2);

    // E. Bare Act & Landmark Articles Exploration (up to 10 points)
    const isBookmarked = bookmarkedArticles.some((num) => part.highYieldArticles.some((a) => a.number === String(num)));
    const bareActComponent = isBookmarked ? 10 : 3;

    // F. Offline Self-Audit Calibration Bonus (up to 25 points)
    const selfBonus = selfCalibration[part.id] || 0;

    // Baseline calculation: Initial realistic baseline based on foundational relevance
    const rawReadiness = 15 + mcqComponent + mainsComponent + srsComponent + bareActComponent + mistakesPenalty + selfBonus;
    const readinessScore = Math.min(100, Math.max(8, Math.round(rawReadiness)));

    let tier: 'mastery' | 'moderate' | 'vulnerable' = 'vulnerable';
    if (readinessScore >= 75) tier = 'mastery';
    else if (readinessScore >= 50) tier = 'moderate';

    // Expected mark loss risk calculation
    const weight = part.examWeights[profile] || 1.0;
    let expectedMarkLossRisk: 'CRITICAL' | 'MODERATE' | 'LOW' = 'LOW';
    if (tier === 'vulnerable' && weight >= 1.5) expectedMarkLossRisk = 'CRITICAL';
    else if (tier === 'moderate' || (tier === 'vulnerable' && weight < 1.5)) expectedMarkLossRisk = 'MODERATE';

    // Prescription generator
    let recommendedAction = `Attempt 10 Prelims MCQs from Day ${days[0] || 1} & write 1 answer on ${part.highYieldArticles[0]?.title || part.title}.`;
    if (unmasteredCount > 0) {
      recommendedAction = `Review ${unmasteredCount} active mistake(s) logged in the Mistakes Bank for ${part.partNumber}.`;
    } else if (partMainsDrafts === 0) {
      recommendedAction = `Practice the high-yield Mains blueprint: "${part.mainsFocusBlueprint.slice(0, 75)}..."`;
    } else if (readinessScore >= 80) {
      recommendedAction = `Syllabus mastered! Maintain high retention via quick 5-minute flashcard refresh.`;
    }

    return {
      part,
      readinessScore,
      tier,
      mcqAccuracy,
      mcqsAttempted: partMcqAttempts,
      mainsDraftsCount: partMainsDrafts,
      mainsEvaluatedCount: partMainsEvaluated,
      averageMainsScore,
      unresolvedMistakesCount: unmasteredCount,
      srsCardsMastered: srsMastered,
      bareActExplored: isBookmarked,
      selfCalibrationBonus: selfBonus,
      recommendedAction,
      expectedMarkLossRisk
    };
  });

  // 3. Compute Composite Weighted Score
  let totalWeightedScore = 0;
  let totalWeight = 0;

  partsStats.forEach((p) => {
    const weight = p.part.examWeights[profile] || 1.0;
    totalWeightedScore += p.readinessScore * weight;
    totalWeight += weight;
  });

  const overallScore = Math.round(totalWeightedScore / totalWeight);

  // 4. Determine Tier & Status
  let tierTitle = 'Foundational Apprentice';
  let tierBadge = 'Tier 4: Foundational Baseline';
  let tierColor = 'var(--text-muted)';

  if (overallScore >= 85) {
    tierTitle = 'Sovereign Scholar (Exam Ready)';
    tierBadge = 'Tier 1: Judicial & UPSC Master';
    tierColor = 'var(--accent-primary)';
  } else if (overallScore >= 70) {
    tierTitle = 'Bench Ready Candidate';
    tierBadge = 'Tier 2: Competitive Contender';
    tierColor = 'var(--accent-secondary, #38bdf8)';
  } else if (overallScore >= 50) {
    tierTitle = 'Developing Advocate';
    tierBadge = 'Tier 3: Moderate Proficiency';
    tierColor = '#fbbf24';
  } else {
    tierTitle = 'Foundational Apprentice';
    tierBadge = 'Tier 4: Vulnerabilities Detected';
    tierColor = '#f87171';
  }

  // 5. Critical Blindspots (Top 3 highest risk parts)
  const sortedByLossRisk = [...partsStats].sort((a, b) => {
    const riskA = (100 - a.readinessScore) * (a.part.examWeights[profile] || 1.0);
    const riskB = (100 - b.readinessScore) * (b.part.examWeights[profile] || 1.0);
    return riskB - riskA;
  });

  const criticalBlindspots = sortedByLossRisk.slice(0, 3);

  // 6. 7-Day Targeted Revision Plan
  const recommended7DayRevisionPlan = sortedByLossRisk.slice(0, 7).map((stat, idx) => ({
    day: idx + 1,
    focusPart: `${stat.part.partNumber}: ${stat.part.title}`,
    action: stat.recommendedAction
  }));

  const masteredPartsCount = partsStats.filter((p) => p.tier === 'mastery').length;
  const moderatePartsCount = partsStats.filter((p) => p.tier === 'moderate').length;
  const vulnerablePartsCount = partsStats.filter((p) => p.tier === 'vulnerable').length;

  const projectedPrelimsAccuracy = Math.min(95, Math.round(overallScore * 0.92 + 5));
  const projectedMainsCompetence = Math.min(90, Math.round(overallScore * 0.88 + 8));

  return {
    overallScore,
    tierBadge,
    tierTitle,
    tierColor,
    examProfile: profile,
    masteredPartsCount,
    moderatePartsCount,
    vulnerablePartsCount,
    totalMCQsAnswered,
    totalMainsDrafts,
    totalUnresolvedMistakes,
    criticalBlindspots,
    partsStats,
    projectedPrelimsAccuracy,
    projectedMainsCompetence,
    recommended7DayRevisionPlan
  };
}

// =========================================================================
// SYLLABUS PILLARS (Civil Services & Judicial Examination Blocks)
// =========================================================================
export interface SyllabusPillar {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  articleSpan: string;
  partIds: string[];
  importanceWeight: number; // 1-5
  upscYield: 'EXTREME' | 'HIGH' | 'MODERATE';
  keyThemes: string[];
}

export const SYLLABUS_PILLARS: SyllabusPillar[] = [
  {
    id: 'pillar-foundations',
    title: 'Constitutional Foundations & Territory',
    shortTitle: 'Foundations',
    description: 'Preamble philosophy, Union of States (Arts 1–4), Citizenship criteria (Arts 5–11), and basic constitutional character.',
    articleSpan: 'Arts 1 – 11',
    partIds: ['part-1', 'part-2'],
    importanceWeight: 4,
    upscYield: 'HIGH',
    keyThemes: ['Cession of Territory', 'Article 3 Reorganisation', 'Citizenship Act 1955', 'Preamble Basic Structure']
  },
  {
    id: 'pillar-fr',
    title: 'Fundamental Rights & Due Process',
    shortTitle: 'Fundamental Rights',
    description: 'Article 12 State definition, Article 13 Judicial Review, Equality (14–18), Freedoms (19), Liberty (21), Religion (25–28), Writs (32).',
    articleSpan: 'Arts 12 – 35',
    partIds: ['part-3'],
    importanceWeight: 5,
    upscYield: 'EXTREME',
    keyThemes: ['Golden Triangle', 'Proportionality Test', 'Preventive Detention', 'Article 32 vs 226']
  },
  {
    id: 'pillar-dpsp-fd',
    title: 'Directive Principles & Fundamental Duties',
    shortTitle: 'DPSP & Duties',
    description: 'Socio-economic governance charter (Arts 36–51), Minerva Mills harmony balance, Fundamental Duties (51A), and constitutional morality.',
    articleSpan: 'Arts 36 – 51A',
    partIds: ['part-4', 'part-4a'],
    importanceWeight: 4,
    upscYield: 'HIGH',
    keyThemes: ['Article 39(b)(c) vs 14/19', 'Uniform Civil Code Art 44', 'Verma Committee on Duties', 'Enforceability']
  },
  {
    id: 'pillar-union-exec-parliament',
    title: 'Union Executive & Parliament',
    shortTitle: 'Union Executive & Parliament',
    description: 'Presidential election, pardoning power (Art 72), Council of Ministers (Art 74/75), Ordinance power (Art 123), Parliamentary privileges (105), Money Bills (110).',
    articleSpan: 'Arts 52 – 151',
    partIds: ['part-5'],
    importanceWeight: 5,
    upscYield: 'EXTREME',
    keyThemes: ['Speaker Discretion', 'Money Bill Certification', 'Joint Sitting Art 108', 'Anti-Defection Law']
  },
  {
    id: 'pillar-state-exec-legislature',
    title: 'State Executive & Legislature',
    shortTitle: 'State Executive & Assembly',
    description: 'Governor constitutional role (Arts 153–163), withholding assent (Art 200), reservation for President (Art 201), State legislature procedures.',
    articleSpan: 'Arts 152 – 213',
    partIds: ['part-6'],
    importanceWeight: 4,
    upscYield: 'HIGH',
    keyThemes: ['Governor Discretionary Powers', 'Article 200 Assent Delays', 'Floor Test Jurisprudence', 'Pardoning Art 161']
  },
  {
    id: 'pillar-judiciary',
    title: 'Union & State Judiciary (SC, HC & Subordinate)',
    shortTitle: 'Judicial Architecture',
    description: 'Collegium system, Original jurisdiction (131), Advisory (143), Special Leave (136), Complete Justice (142), Contempt, High Courts (226/227), Subordinate judiciary (233–235).',
    articleSpan: 'Arts 124–147, 214–237',
    partIds: ['part-5', 'part-6'],
    importanceWeight: 5,
    upscYield: 'EXTREME',
    keyThemes: ['Collegium vs NJAC', 'Article 142 Powers', 'Article 136 Discretion', 'Judicial Independence']
  },
  {
    id: 'pillar-local-gov',
    title: 'Local Self-Government (Panchayats & Urban Bodies)',
    shortTitle: 'Panchayats & Municipalities',
    description: '73rd & 74th Constitutional Amendments, 11th & 12th Schedules, 3-tier structure, State Election Commission (243K), State Finance Commission (243-I).',
    articleSpan: 'Arts 243 – 243ZG',
    partIds: ['part-9', 'part-9a', 'part-9b'],
    importanceWeight: 4,
    upscYield: 'HIGH',
    keyThemes: ['243D Reservation', 'PESA Act 1996', 'Devolution of 29/18 Subjects', 'Ward Committees']
  },
  {
    id: 'pillar-federal-finance',
    title: 'Centre-State Relations, Finance & Trade',
    shortTitle: 'Federalism & Finance',
    description: 'Legislative competence (Arts 245–255), 7th Schedule 3 Lists, Repugnancy (Art 254), Finance Commission (Art 280), GST Council (Art 279A), Inter-State Trade (Arts 301–307).',
    articleSpan: 'Arts 245 – 307',
    partIds: ['part-11', 'part-12', 'part-13'],
    importanceWeight: 5,
    upscYield: 'EXTREME',
    keyThemes: ['Doctrine of Pith & Substance', 'Article 254 Repugnancy', 'Article 275 Grants vs 282', 'GST Council Quorum']
  },
  {
    id: 'pillar-elections-bodies',
    title: 'Elections & Constitutional Bodies',
    shortTitle: 'Elections & Watchdogs',
    description: 'Election Commission of India (Art 324), Comptroller & Auditor General (Art 148), UPSC (Arts 315–323), NCST/NCSC/NCBC (Arts 338/338A/338B).',
    articleSpan: 'Arts 148, 315–338B',
    partIds: ['part-14', 'part-15', 'part-16'],
    importanceWeight: 4,
    upscYield: 'HIGH',
    keyThemes: ['ECI Appointment Act 2023', 'CAG Mandate & Audit', 'UPSC Constitutional Safeguards', 'Special Minorities Officer']
  },
  {
    id: 'pillar-emergency-amendments',
    title: 'Emergency Powers & Constitutional Amendment',
    shortTitle: 'Emergency & Article 368',
    description: 'National Emergency (Art 352), President Rule (Art 356), Financial Emergency (Art 360), Article 368 Amendment Procedure, Basic Structure Doctrine.',
    articleSpan: 'Arts 352 – 368',
    partIds: ['part-18', 'part-20'],
    importanceWeight: 5,
    upscYield: 'EXTREME',
    keyThemes: ['44th Amendment Safeguards', 'SR Bommai Guidelines', 'Article 368 Rigid vs Flexible', 'Basic Structure Limiting Power']
  }
];

export interface PillarReadinessStats {
  pillar: SyllabusPillar;
  readinessScore: number;
  tier: 'mastery' | 'moderate' | 'vulnerable';
  constituentPartStats: PartReadinessStats[];
  expectedMarkLossRisk: 'CRITICAL' | 'MODERATE' | 'LOW';
  recommendedDrill: string;
}

export function computePillarReadinessStats(report: ConstitutionalReadinessReport): PillarReadinessStats[] {
  return SYLLABUS_PILLARS.map((pillar) => {
    const matchingParts = report.partsStats.filter((p) => pillar.partIds.includes(p.part.id));
    const avgScore = matchingParts.length > 0
      ? Math.round(matchingParts.reduce((acc, curr) => acc + curr.readinessScore, 0) / matchingParts.length)
      : 50;

    let tier: 'mastery' | 'moderate' | 'vulnerable' = 'moderate';
    if (avgScore >= 75) tier = 'mastery';
    else if (avgScore < 50) tier = 'vulnerable';

    let expectedMarkLossRisk: 'CRITICAL' | 'MODERATE' | 'LOW' = 'LOW';
    if (tier === 'vulnerable' && pillar.importanceWeight >= 4) expectedMarkLossRisk = 'CRITICAL';
    else if (tier === 'moderate' || (tier === 'vulnerable' && pillar.importanceWeight < 4)) expectedMarkLossRisk = 'MODERATE';

    return {
      pillar,
      readinessScore: avgScore,
      tier,
      constituentPartStats: matchingParts,
      expectedMarkLossRisk,
      recommendedDrill: `Drill high-yield clauses in ${pillar.shortTitle} with emphasis on ${pillar.keyThemes[0]}.`
    };
  });
}

// =========================================================================
// PRELIMS RISK PROFILE (Negative Marking & Cutoff Appetite Analyzer)
// =========================================================================
export interface PrelimsRiskProfile {
  targetAttempts: number;
  accuracyRate: number; // e.g. 74%
  correctQuestions: number;
  incorrectQuestions: number;
  grossMarks: number;
  negativePenaltyMarks: number;
  netScore: number;
  penaltyRatioPercent: number; // penaltyMarks / grossMarks * 100
  historicalCutoff: number; // 88.0 (UPSC CSE Prelims Benchmark)
  clearanceMargin: number; // netScore - historicalCutoff
  stanceCategory: 'OPTIMAL_CALIBRATED' | 'HYPER_CAUTIOUS' | 'NEGATIVE_TRAP_HAZARD';
  stanceTitle: string;
  stanceBadgeColor: string;
  tacticalAdvice: string;
  recommendedAttemptWindow: string;
}

export function calculatePrelimsRiskProfile(
  targetAttempts: number = 85,
  estimatedAccuracy: number = 72
): PrelimsRiskProfile {
  const attempts = Math.max(40, Math.min(100, targetAttempts));
  const accuracy = Math.max(30, Math.min(98, estimatedAccuracy)) / 100;

  const correctQuestions = Math.round(attempts * accuracy);
  const incorrectQuestions = attempts - correctQuestions;

  const grossMarks = Number((correctQuestions * 2.0).toFixed(2));
  const negativePenaltyMarks = Number((incorrectQuestions * 0.666).toFixed(2));
  const netScore = Number((grossMarks - negativePenaltyMarks).toFixed(2));

  const penaltyRatioPercent = grossMarks > 0
    ? Math.round((negativePenaltyMarks / grossMarks) * 100)
    : 0;

  const historicalCutoff = 88.0; // Standard UPSC CSE Prelims benchmark cutoff
  const clearanceMargin = Number((netScore - historicalCutoff).toFixed(2));

  let stanceCategory: 'OPTIMAL_CALIBRATED' | 'HYPER_CAUTIOUS' | 'NEGATIVE_TRAP_HAZARD' = 'OPTIMAL_CALIBRATED';
  let stanceTitle = 'Optimal Risk / Reward Strategist';
  let stanceBadgeColor = 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10';
  let tacticalAdvice = 'Your attempt volume and accuracy provide a healthy safety margin above the cutoff. Maintain this calibrated aggression.';
  let recommendedAttemptWindow = '82 – 88 Questions';

  if (attempts < 70 && accuracy >= 0.8) {
    stanceCategory = 'HYPER_CAUTIOUS';
    stanceTitle = 'Under-Attempting (High Accuracy Trap)';
    stanceBadgeColor = 'text-sky-400 border-sky-500/30 bg-sky-500/10';
    tacticalAdvice = 'You are being excessively conservative. While your accuracy is high, low attempt volume leaves you at grave risk of missing cutoffs by 3–5 marks. Expand your elimination zone on 50-50 questions.';
    recommendedAttemptWindow = 'Push attempts to 80 – 85 Questions';
  } else if (penaltyRatioPercent >= 22 || accuracy < 0.65) {
    stanceCategory = 'NEGATIVE_TRAP_HAZARD';
    stanceTitle = 'Compulsive Guessing Hazard';
    stanceBadgeColor = 'text-rose-400 border-rose-500/30 bg-rose-500/10';
    tacticalAdvice = 'Negative penalty is bleeding away more than 20% of your gross score. Cease blind guessing on 4-option unknown questions. Restrict risk strictly to 50-50 elimination pairs.';
    recommendedAttemptWindow = 'Cap attempts to 75 – 82 Questions';
  }

  return {
    targetAttempts: attempts,
    accuracyRate: Math.round(accuracy * 100),
    correctQuestions,
    incorrectQuestions,
    grossMarks,
    negativePenaltyMarks,
    netScore,
    penaltyRatioPercent,
    historicalCutoff,
    clearanceMargin,
    stanceCategory,
    stanceTitle,
    stanceBadgeColor,
    tacticalAdvice,
    recommendedAttemptWindow
  };
}

// =========================================================================
// WEAKEST LINK 15-MINUTE DAILY PRESCRIPTION ENGINE
// =========================================================================
export interface WeakestLinkDrill {
  id: string;
  generatedDate: string;
  targetPartIds: string[];
  targetPartTitles: string[];
  stage1MCQs: DiagnosticMCQ[];
  stage2Precedent: {
    caseName: string;
    year: number;
    challengeQuestion: string;
    options: { id: string; text: string; isCorrect: boolean }[];
    authoritativeRatio: string;
    articleRef: string;
  };
  stage3TrapClause: {
    statement: string;
    isDeceptiveTrap: boolean;
    examinerTrick: string;
    correctStatutoryRule: string;
    articleRef: string;
  };
}

export function generateWeakestLinkDrill(
  report: ConstitutionalReadinessReport,
  focusPartId?: string
): WeakestLinkDrill {
  const focusedStat = focusPartId
    ? report.partsStats.find((p) => p.part.id === focusPartId)
    : undefined;

  // Find top 3 weakest parts (or prioritize the user-selected Part first)
  const weakestSorted = [...report.partsStats].sort((a, b) => a.readinessScore - b.readinessScore);
  const weakestParts = focusedStat
    ? [focusedStat, ...weakestSorted.filter((p) => p.part.id !== focusedStat.part.id).slice(0, 2)]
    : weakestSorted.slice(0, 3);

  // Pool diagnostic questions: prioritize focused Part's own questions first
  const mcqPool: DiagnosticMCQ[] = [];
  if (focusedStat) {
    mcqPool.push(...focusedStat.part.diagnosticQuestions);
  }
  if (mcqPool.length < 5) {
    weakestParts.forEach((p) => {
      if (!focusedStat || p.part.id !== focusedStat.part.id) {
        mcqPool.push(...p.part.diagnosticQuestions);
      }
    });
  }

  // Pick up to 5 unique MCQs (preserving focusPart questions first)
  const stage1MCQs = focusedStat
    ? [
        ...focusedStat.part.diagnosticQuestions.slice(0, 5),
        ...mcqPool
          .filter((q) => q.partId !== focusedStat.part.id)
          .sort(() => 0.5 - Math.random())
      ].slice(0, 5)
    : [...mcqPool].sort(() => 0.5 - Math.random()).slice(0, 5);

  // Stage 2: Pick landmark precedent from lead part
  const leadPart = weakestParts[0]?.part || ACTIVE_25_PARTS_METADATA[2];
  const precedent = leadPart.landmarkPrecedents[0] || {
    name: 'K.S. Puttaswamy v. Union of India',
    year: 2017,
    coreHolding: 'Right to privacy is an intrinsic part of the right to life and personal liberty under Article 21.'
  };

  const stage2Precedent = {
    caseName: precedent.name,
    year: precedent.year,
    challengeQuestion: `In ${precedent.name} (${precedent.year}), which authoritative constitutional test was established by the Supreme Court regarding ${leadPart.title}?`,
    options: [
      { id: 'opt1', text: precedent.coreHolding, isCorrect: true },
      { id: 'opt2', text: 'Executive orders are completely non-justiciable under Article 13.', isCorrect: false },
      { id: 'opt3', text: 'State actions are exempt from proportionality tests during administrative convenience.', isCorrect: false },
      { id: 'opt4', text: 'Parliament possesses unlimited constituent power immune to Basic Structure limitations.', isCorrect: false }
    ].sort(() => 0.5 - Math.random()),
    authoritativeRatio: precedent.coreHolding,
    articleRef: leadPart.highYieldArticles[0]?.number ? `Article ${leadPart.highYieldArticles[0].number}` : leadPart.articlesRange
  };

  // Stage 3: Part-aware Trap Statement
  const leadArt = leadPart.highYieldArticles[0];
  const stage3TrapClause = leadArt
    ? {
        statement: `Under ${leadPart.partNumber} (${leadPart.articlesRange}), powers exercised under Article ${leadArt.number} (${leadArt.title}) are completely non-justiciable and immune from judicial review or constitutional proportionality.`,
        isDeceptiveTrap: true,
        examinerTrick: `Absolutist phrasing ("completely non-justiciable and immune from judicial review") contradicts Basic Structure judicial review in ${leadPart.title}.`,
        correctStatutoryRule: `${leadArt.note} Judicial review and constitutional limits remain enforceable under ${leadPart.partNumber} (${leadPart.articlesRange}).`,
        articleRef: `Article ${leadArt.number}`
      }
    : {
        statement: `Under ${leadPart.articlesRange}, executive or legislative discretion operates as an absolute bar against constitutional judicial review.`,
        isDeceptiveTrap: true,
        examinerTrick: 'Absolute phrasing ("absolute bar against judicial review") violates Basic Structure doctrine.',
        correctStatutoryRule: `${leadPart.mainsFocusBlueprint}`,
        articleRef: leadPart.articlesRange
      };

  const targetedParts = focusedStat ? [focusedStat] : weakestParts;

  return {
    id: `weakest-link-${focusedStat ? focusedStat.part.id : 'auto'}-${new Date().toISOString().slice(0, 10)}`,
    generatedDate: new Date().toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' }),
    targetPartIds: targetedParts.map((p) => p.part.id),
    targetPartTitles: targetedParts.map((p) => `${p.part.partNumber}: ${p.part.title}`),
    stage1MCQs,
    stage2Precedent,
    stage3TrapClause
  };
}

const WEAKEST_LINK_LOG_KEY = 'samvidhan_weakest_link_history_v1';

export function recordWeakestLinkDrillCompletion(
  targetPartIds: string[],
  scoreOutOf7: number
): void {
  try {
    const raw = localStorage.getItem(WEAKEST_LINK_LOG_KEY);
    const history: any[] = raw ? JSON.parse(raw) : [];
    history.push({
      date: new Date().toISOString(),
      targetPartIds,
      scoreOutOf7
    });
    localStorage.setItem(WEAKEST_LINK_LOG_KEY, JSON.stringify(history));

    // Award +5% calibration recovery bonus to each targeted part
    targetPartIds.forEach((partId) => {
      const calib = getStoredSelfCalibration();
      const curr = calib[partId] || 0;
      saveSelfCalibration(partId, Math.min(25, curr + 5));
    });
  } catch {
    // Ignore storage errors in restricted contexts
  }
}

