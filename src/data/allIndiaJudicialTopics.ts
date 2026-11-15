export interface AllIndiaTopicFrequency {
  id: string;
  rank: number;
  title: string;
  frequencyScore: number; // percentage (e.g. 24)
  frequencyTier: 'Tier 1: Guaranteed Super-Core' | 'Tier 2: High Probability Recurring' | 'Tier 3: Specialized Regular';
  testedExams: string[];
  coreArticles: string[];
  whyExaminersLoveIt: string;
  recurringThemes: string[];
  benchmarkCases: {
    classic: string;
    modern2024: string;
  };
  sampleQuestionSnippet: string;
}

export interface CommonJudiciaryQuestion {
  id: string;
  title: string;
  topicId: string;
  examsAppeared: string[];
  typicalMarks: number;
  targetWordLimit: string;
  questionText: string;
  coreIssues: string[];
  examinerExpectation: string;
  essentialCitations: string[];
  answerBlueprint: {
    step1Intro: string;
    step2DoctrinalCore: string;
    step3PrecedentEvolution: string;
    step4Conclusion: string;
  };
  fullModelAnswer: string;
  scoringRubric: {
    criterion: string;
    marks: number;
  }[];
}

export const ALL_INDIA_TOPIC_FREQUENCIES: AllIndiaTopicFrequency[] = [
  {
    id: 'art-21-due-process',
    rank: 1,
    title: 'Article 21 & Criminal Due Process (The Golden Triangle)',
    frequencyScore: 24,
    frequencyTier: 'Tier 1: Guaranteed Super-Core',
    testedExams: [
      'Delhi Judicial Service (DJS)',
      'UP PCS-J (Mains)',
      'Bihar Judicial Services (BPSC)',
      'UPSC CSE Law Optional',
      'Rajasthan Judicial Service (RJS)',
      'MP Judicial Service (Civil Judge)',
      'CBI / NIA Public Prosecutor Exams'
    ],
    coreArticles: ['Article 21', 'Article 14', 'Article 19', 'Article 20', 'Article 22'],
    whyExaminersLoveIt:
      'Tests whether the candidate understands the shift from formalistic British positivism (A.K. Gopalan) to substantive American due process (Maneka Gandhi), and how modern constitutional benches derive unenumerated human rights.',
    recurringThemes: [
      'Procedure Established by Law vs Substantive Due Process',
      'Right to Privacy as an Inalienable Fundamental Right (Puttaswamy 9-Judge Bench)',
      'Death Penalty Jurisprudence & Mitigating Circumstances (Bachan Singh, Manoj 2022)',
      'Speedy Trial & Custodial Undertrial Incarceration (Hussainara Khatoon, Satender Kumar Antil 2022)',
      'Right to Die with Dignity & Passive Euthanasia (Common Cause 2018 & 2023 Guidelines)'
    ],
    benchmarkCases: {
      classic: 'A.K. Gopalan (1950) ➔ Maneka Gandhi (1978) ➔ Sunil Batra (1980)',
      modern2024: 'K.S. Puttaswamy (2017) ➔ Satender Kumar Antil (2022) ➔ M.K. Ranjitsinh (2024 Climate Right)'
    },
    sampleQuestionSnippet:
      '"Article 21 has expanded from a guarantee against physical restraint to an expansive charter of human dignity." Trace the judicial evolution and explain if India has adopted American substantive due process.'
  },
  {
    id: 'art-14-arbitrariness-equality',
    rank: 2,
    title: 'Article 14 & The Dynamic Equality Code (Articles 14–18)',
    frequencyScore: 18,
    frequencyTier: 'Tier 1: Guaranteed Super-Core',
    testedExams: [
      'UP PCS-J (Mains)',
      'Delhi Judicial Service (DJS)',
      'Bihar Judicial Services (BPSC)',
      'UPSC CSE Law Optional',
      'MP Civil Judge',
      'CLAT PG / LL.M Entrance'
    ],
    coreArticles: ['Article 14', 'Article 15', 'Article 16'],
    whyExaminersLoveIt:
      'Separates candidates who merely cite the traditional reasonable classification test from those who master the anti-arbitrariness doctrine and modern manifest arbitrariness standard.',
    recurringThemes: [
      'Reasonable Classification Test (Intelligible Differentia & Rational Nexus) vs Anti-Arbitrariness',
      'Manifest Arbitrariness as an independent ground to invalidate primary parliamentary legislation',
      'Sub-classification within Scheduled Castes / Scheduled Tribes (State of Punjab v. Davinder Singh 2024 7-Judge Bench)',
      'Creamy Layer Doctrine & Reservation Limits (Indra Sawhney, M. Nagaraj, Jarnail Singh)',
      'Substantive Equality vs Formal Equality in Gender and Transgender Rights (Navtej Johar, NALSA)'
    ],
    benchmarkCases: {
      classic: 'Anwar Ali Sarkar (1952) ➔ E.P. Royappa (1974) ➔ Indra Sawhney (1992)',
      modern2024: 'Shayara Bano (2017) ➔ Navtej Singh Johar (2018) ➔ State of Punjab v. Davinder Singh (7-Judge Bench 2024)'
    },
    sampleQuestionSnippet:
      '"Equality is an antithesis to arbitrariness. In one sense, it will be found that where there is an arbitrary act, there is denial of equality." Critically examine the doctrine of Manifest Arbitrariness.'
  },
  {
    id: 'art-20-22-custodial-forensics',
    rank: 3,
    title: 'Constitutional Safeguards in Criminal Justice (Articles 20 & 22)',
    frequencyScore: 15,
    frequencyTier: 'Tier 1: Guaranteed Super-Core',
    testedExams: [
      'State Prosecution Exams (UP APO, Bihar APO, JKPSC PO, MP ADPO)',
      'Delhi Judicial Service (DJS Criminal Law / GK Paper)',
      'Rajasthan Judicial Service',
      'CBI / NIA Prosecutor Exams'
    ],
    coreArticles: ['Article 20(1)', 'Article 20(2)', 'Article 20(3)', 'Article 22(1)–(7)'],
    whyExaminersLoveIt:
      'Directly applicable to daily magistrate courtroom work and public prosecutor duties: admissibility of forensic tests, confessions, double jeopardy, and remand compliance.',
    recurringThemes: [
      'Right Against Self-Incrimination (Article 20(3)) & Scientific Investigations (Narco, Polygraph, Brain Mapping)',
      'Physical vs Testimonial Evidence (Kathi Kalu Oghad & Voice Exemplars in Ritesh Sinha)',
      'Ex-Post Facto Laws (Article 20(1)) & Beneficial Legislation Exception (Rattan Lal)',
      'Autrefois Acquit / Convict & Departmental vs Judicial Proceedings (Maqbool Hussain)',
      'Preventive Detention Safeguards (Article 22) & Arrest Guidelines (D.K. Basu & Arnesh Kumar)'
    ],
    benchmarkCases: {
      classic: 'State of Bombay v. Kathi Kalu Oghad (1961) ➔ Nandini Satpathy (1978) ➔ D.K. Basu (1997)',
      modern2024: 'Selvi v. State of Karnataka (2010) ➔ Ritesh Sinha (2019) ➔ Prabir Purkayastha (2024 Grounds of Arrest)'
    },
    sampleQuestionSnippet:
      'Can an accused person be compelled by court order to undergo narco-analysis or provide DNA and voice samples? Analyze under Article 20(3) and Article 21.'
  },
  {
    id: 'writs-judicial-review-142',
    rank: 4,
    title: 'Judicial Review, Writ Jurisdiction (Articles 32 & 226) & Article 142',
    frequencyScore: 13,
    frequencyTier: 'Tier 1: Guaranteed Super-Core',
    testedExams: [
      'Delhi Judicial Service (DJS)',
      'Bihar Judicial Services (BPSC)',
      'UP PCS-J',
      'West Bengal Judicial Service',
      'UPSC CSE Law Optional'
    ],
    coreArticles: ['Article 32', 'Article 226', 'Article 136', 'Article 142'],
    whyExaminersLoveIt:
      'Judicial service candidates must know the jurisdictional boundaries between the Supreme Court and High Courts, the exact grounds for each prerogative writ, and the limits of extraordinary judicial power.',
    recurringThemes: [
      'Comparison between Article 32 (Fundamental Right) and Article 226 (Constitutional / Legal Right)',
      'The Five Prerogative Writs: Grounds, Maintainability, and Locus Standi',
      'Maintainability of Writs against Private Bodies performing Public Duties (Zee Telefilms, Janet Jeyapaul)',
      'Scope and Limitations of Article 142 "Complete Justice" (Cannot override express statutory bars)',
      'Public Interest Litigation (PIL): Epistolary jurisdiction and prevention of frivolous abuse (Balwant Singh Chaufal)'
    ],
    benchmarkCases: {
      classic: 'Syed Yakoob (1964) ➔ Bandhua Mukti Morcha (1984) ➔ Supreme Court Bar Association (1998)',
      modern2024: 'High Court Bar Association Allahabad v. State of U.P. (5-Judge Bench 2024 on stay vacation) ➔ Shilpa Sailesh (2023 on Art 142 divorce)'
    },
    sampleQuestionSnippet:
      '"The writ jurisdiction under Article 226 is wider than under Article 32." Discuss. Explain whether the Supreme Court under Article 142 can bypass statutory limitations.'
  },
  {
    id: 'basic-structure-amending-power',
    rank: 5,
    title: 'Basic Structure Doctrine & Amending Power (Article 368)',
    frequencyScore: 11,
    frequencyTier: 'Tier 2: High Probability Recurring',
    testedExams: [
      'UPSC CSE Law Optional (Almost every alternate year)',
      'UP PCS-J (Mains)',
      'Bihar Judicial Services (BPSC)',
      'Haryana Civil Service (Judicial Branch)'
    ],
    coreArticles: ['Article 368', 'Article 13(2)', 'Article 31B', 'Ninth Schedule'],
    whyExaminersLoveIt:
      'The quintessential constitutional law essay question evaluating a student’s historical grasp of constituent power, judicial supremacy, and constitutional constitutionalism.',
    recurringThemes: [
      'Constituent Power vs Ordinary Legislative Power (Article 13(2) vs Article 368)',
      'The Amending Power Saga: Shankari Prasad (1951) to Kesavananda Bharati (1973)',
      'Implied Limitations on Constituent Power & Identification of Basic Features',
      'Article 31B & Ninth Schedule Immunity: The Twin Tests of I.R. Coelho (2007)',
      'Attempted Amending Overreach: Invalidation of Clauses (4) & (5) of Article 368 (Minerva Mills 1980)'
    ],
    benchmarkCases: {
      classic: 'Shankari Prasad (1951) ➔ Golaknath (1967) ➔ Kesavananda Bharati (1973) ➔ Minerva Mills (1980)',
      modern2024: 'I.R. Coelho v. State of Tamil Nadu (2007) ➔ In re Article 370 (2023 5-Judge Bench)'
    },
    sampleQuestionSnippet:
      'Can Parliament, in exercise of its constituent power under Article 368, alter the federal character or judicial review mechanism of the Indian Constitution? Discuss with reference to leading case laws.'
  },
  {
    id: 'art-19-speech-reasonable-restrictions',
    rank: 6,
    title: 'Freedom of Speech & Fundamental Freedoms (Article 19 & Proportionality)',
    frequencyScore: 8,
    frequencyTier: 'Tier 2: High Probability Recurring',
    testedExams: [
      'Delhi Judicial Service (DJS)',
      'UPSC CSE Law Optional',
      'UP PCS-J',
      'CLAT PG'
    ],
    coreArticles: ['Article 19(1)(a)–(g)', 'Article 19(2)–(6)'],
    whyExaminersLoveIt:
      'High contemporary relevance: internet blackouts, hate speech, trial by media, commercial expression, and horizontal enforcement against private entities.',
    recurringThemes: [
      'Freedom of Speech in the Digital Era & Right to Internet (Anuradha Bhasin 2020)',
      'Exhaustive Grounds of Reasonable Restriction under Article 19(2) (Cannot add new grounds)',
      'The Four-Pronged Doctrine of Proportionality (Legitimate goal, Rational nexus, Least intrusive measure, Balancing)',
      'Horizontal Application of Article 19 & 21 against Non-State Actors (Kaushal Kishor 2023)',
      'Commercial Speech and Right to Know (Tata Press, ADR 2002, Electoral Bonds Case 2024)'
    ],
    benchmarkCases: {
      classic: 'Romesh Thappar (1950) ➔ Shreya Singhal (2015) ➔ Tata Press (1995)',
      modern2024: 'Anuradha Bhasin (2020) ➔ Kaushal Kishor (2023) ➔ ADR v. Union of India (Electoral Bonds 2024 5-Judge Bench)'
    },
    sampleQuestionSnippet:
      'Examine whether freedom of speech and expression includes the right to access the internet. Under what circumstances can the State shut down internet services in an area?'
  },
  {
    id: 'federalism-legislative-relations-emergency',
    rank: 7,
    title: 'Federal Relations & Emergency Provisions (Articles 245–254 & 356)',
    frequencyScore: 5,
    frequencyTier: 'Tier 3: Specialized Regular',
    testedExams: [
      'Bihar Judicial Services (BPSC - Compulsory Paper)',
      'UP PCS-J',
      'UPSC CSE Law Optional'
    ],
    coreArticles: ['Article 245', 'Article 246', 'Article 254', 'Article 356'],
    whyExaminersLoveIt:
      'Tests statutory interpretation doctrines: Pith and Substance, Territorial Nexus, Colorable Legislation, and Repugnancy under Article 254.',
    recurringThemes: [
      'Distribution of Legislative Powers: Seventh Schedule & Doctrine of Pith and Substance',
      'Repugnancy between Central and State Enactments under Article 254 (M. Karunanidhi)',
      'Judicial Review of Article 356 President\'s Rule & Dissolution of Legislative Assemblies (S.R. Bommai)',
      'Fiscal Federalism & State Taxation Powers (Mineral Area Development Authority 9-Judge Bench 2024)'
    ],
    benchmarkCases: {
      classic: 'Prafulla Kumar (1947) ➔ S.R. Bommai (1994) ➔ M. Karunanidhi (1979)',
      modern2024: 'State of West Bengal v. Union of India (Article 131 suit 2024) ➔ MADA v. SAIL (9-Judge Bench 2024)'
    },
    sampleQuestionSnippet:
      'Explain the Doctrine of Repugnancy under Article 254. When will a State law prevail over a Central law on a Concurrent List subject?'
  },
  {
    id: 'executive-ordinance-clemency-governor',
    rank: 8,
    title: 'Executive Discretion, Ordinances & Pardoning Powers (Articles 72, 123, 161)',
    frequencyScore: 4,
    frequencyTier: 'Tier 3: Specialized Regular',
    testedExams: [
      'UP PCS-J',
      'Bihar Judicial Services',
      'Delhi Judicial Service',
      'UPSC CSE Law Optional'
    ],
    coreArticles: ['Article 72', 'Article 123', 'Article 161', 'Article 163', 'Article 200'],
    whyExaminersLoveIt:
      'Examines constitutional separation of powers, executive excess, and judicial review of high discretionary executive prerogatives.',
    recurringThemes: [
      'Ordinance-Making Power as Extraordinary Power & Fraud on the Constitution (D.C. Wadhwa, Krishna Kumar Singh 2017)',
      'Judicial Review of Presidential & Gubernatorial Pardons (Maru Ram, Epuru Sudhakar, Bilkis Bano 2024)',
      'Governor\'s Assent to Bills passed by State Assembly & Withholding Discretion (State of Punjab 2023)'
    ],
    benchmarkCases: {
      classic: 'D.C. Wadhwa (1987) ➔ Maru Ram (1980) ➔ Kehar Singh (1989)',
      modern2024: 'Krishna Kumar Singh (2017) ➔ State of Punjab v. Governor (2023) ➔ Bilkis Bano v. Union of India (2024)'
    },
    sampleQuestionSnippet:
      '"Ordinance-making power is conditional and subject to judicial review." Discuss whether repromulgation of ordinances without placing them before the legislature is constitutional.'
  },
  {
    id: 'religion-secularism-minorities',
    rank: 9,
    title: 'Freedom of Religion & Minority Educational Rights (Articles 25–30)',
    frequencyScore: 3,
    frequencyTier: 'Tier 3: Specialized Regular',
    testedExams: [
      'Delhi Judicial Service',
      'UPSC CSE Law Optional',
      'UP PCS-J'
    ],
    coreArticles: ['Article 25', 'Article 26', 'Article 29', 'Article 30'],
    whyExaminersLoveIt:
      'Tests candidate understanding of the Essential Religious Practices (ERP) doctrine, constitutional morality vs public order/morality, and minority institutional autonomy.',
    recurringThemes: [
      'Essential Religious Practices (ERP) Test & Judicial Interpretation (Shirur Mutt, Sabarimala)',
      'Constitutional Morality vs Popular Religious Sentiments',
      'Minority Educational Rights under Article 30(1) (TMA Pai, Inamdar, AMU 2024 7-Judge Bench)',
      'Relationship between Fundamental Rights and Uniform Civil Code (Article 44)'
    ],
    benchmarkCases: {
      classic: 'Commr., Hindu Religious Endowments v. Sri Shirur Mutt (1954) ➔ T.M.A. Pai Foundation (2002)',
      modern2024: 'Indian Young Lawyers Association (Sabarimala 2018) ➔ Aligarh Muslim University (AMU 7-Judge Bench 2024)'
    },
    sampleQuestionSnippet:
      'Discuss the scope of the Essential Religious Practices test evolved by the Supreme Court. Does Article 25 protect every practice claimed to be religious by a community?'
  }
];

export const COMMON_JUDICIARY_QUESTIONS: CommonJudiciaryQuestion[] = [
  {
    id: 'common-q1',
    title: 'Article 21: Evolution from Gopalan to Maneka Gandhi & The Due Process Shift',
    topicId: 'art-21-due-process',
    examsAppeared: ['DJS 2014, 2017, 2022', 'UP PCS-J 2013, 2018, 2023', 'Bihar Judicial 2016, 2021', 'UPSC Law Optional 2015, 2020'],
    typicalMarks: 20,
    targetWordLimit: '450–550 Words | Time: ~16 Mins',
    questionText: `"The expression 'procedure established by law' in Article 21 has been judicially interpreted to mean 'just, fair and reasonable procedure', thus bringing the American concept of Substantive Due Process into Indian Constitutional Law through the back door." Critically examine this statement with reference to landmark judicial pronouncements.`,
    coreIssues: [
      'Contrast between A.K. Gopalan (formalistic literalism) and Maneka Gandhi (integrated fundamental rights reading).',
      'Whether Indian courts apply Substantive Due Process or a distinct Indian model of Procedural Due Process.',
      'Interlinking of Articles 14, 19, and 21 (The Golden Triangle).'
    ],
    examinerExpectation:
      'Candidates must trace the shift from Gopalan (1950) to Maneka Gandhi (1978). Mention Justice Krishna Iyer and Justice Bhagwati\'s formulations. Clarify that while the constituent assembly intentionally rejected American substantive due process, Maneka imported its substantive guarantees through Article 14 fairness.',
    essentialCitations: [
      'A.K. Gopalan v. State of Madras (1950 SCR 88)',
      'Maneka Gandhi v. Union of India ((1978) 1 SCC 248)',
      'Sunil Batra v. Delhi Administration ((1978) 4 SCC 494)',
      'K.S. Puttaswamy v. Union of India ((2017) 10 SCC 1)'
    ],
    answerBlueprint: {
      step1Intro: 'Define Article 21 text and Constituent Assembly debates (Rau-Frankfurter interaction removing "Due Process").',
      step2DoctrinalCore: 'Explain Gopalan\'s silo doctrine where Article 19 and 21 were treated as mutually exclusive compartments.',
      step3PrecedentEvolution: 'Detail Maneka Gandhi\'s synthesis: procedure must not be arbitrary, fanciful or oppressive; it must satisfy the test of Article 14 reasonableness.',
      step4Conclusion: 'Conclude with Puttaswamy (2017) confirming that privacy and human dignity require substantive judicial review of statutory laws.'
    },
    fullModelAnswer: `I. TEXTUAL GENESIS & THE CONSTITUENT ASSEMBLY COMPROMISE:
Article 21 provides that "No person shall be deprived of his life or personal liberty except according to procedure established by law." Originally, the Drafting Committee borrowed the American 5th and 14th Amendment phrase "due process of law." However, following B.N. Rau's consultation with US Supreme Court Justice Felix Frankfurter, who warned against judicial overreach observed during the Lochner era, the Constituent Assembly consciously substituted "due process" with the British-derived phrase "procedure established by law."

II. THE FORMALIST EPOCH: A.K. GOPALAN (1950):
In A.K. Gopalan v. State of Madras (1950), the Supreme Court adopted a strict textual positivism. Chief Justice Kania held that "law" meant state-made enacted law, and "procedure established by law" meant whatever procedure the legislature prescribed, however harsh or deficient in natural justice. The Court ruled that Articles 19 and 21 operated in mutually exclusive water-tight compartments; preventive detention under Article 21 could not be tested against the freedoms in Article 19.

III. THE TRANSFORMATIONAL WATERSHED: MANEKA GANDHI (1978):
In Maneka Gandhi v. Union of India (1978), a 7-Judge Bench dismantled Gopalan's silo theory. Justice P.N. Bhagwati formulated the doctrine of the "Golden Triangle," ruling that Articles 14, 19, and 21 form an organic trinity. Consequently:
1. The procedure depriving personal liberty cannot be arbitrary, fanciful, or oppressive; it must be "just, fair, and reasonable."
2. The principle of natural justice (Audi Alteram Partem) is an intrinsic, unwritten component of Article 21 via Article 14.
As Justice Krishna Iyer memorably observed in Sunil Batra (1978), "procedure" does not mean any enacted decree; it means "civilized procedure" imbued with constitutional fairness.

IV. MODERN FRONTIER: SUBSTANTIVE DUE PROCESS CONFIRMED:
While Indian jurisprudence originally claimed to adopt only "procedural fairness," the Supreme Court has unequivocally embraced substantive due process:
1. Substantive Rights: In Mithu v. State of Punjab (1983), the Court struck down Section 303 IPC (mandatory death penalty) not on procedure, but because the substantive punishment was unjust and barbaric.
2. In K.S. Puttaswamy (2017, 9-Judge Bench), Justice Chandrachud settled the controversy, affirming that post-Maneka, the Indian Constitution incorporates Substantive Due Process: any law affecting life or liberty must withstand the tests of legality, legitimate state aim, and proportionality.

CONCLUSION:
Through creative judicial interpretation, Article 21 has evolved from a fragile shield against executive illegality into a powerful judicial sword against unfair legislative enactments.`,
    scoringRubric: [
      { criterion: 'Constituent Assembly debates & Rau-Frankfurter history', marks: 4 },
      { criterion: 'A.K. Gopalan silo theory & literal positivism', marks: 4 },
      { criterion: 'Maneka Gandhi synthesis & Golden Triangle test', marks: 6 },
      { criterion: 'Mithu & Puttaswamy substantive due process crystallization', marks: 6 }
    ]
  },
  {
    id: 'common-q2',
    title: 'Article 14: Manifest Arbitrariness as a Ground to Strike Down Primary Legislation',
    topicId: 'art-14-arbitrariness-equality',
    examsAppeared: ['DJS 2019, 2022', 'UP PCS-J 2018, 2023', 'UPSC Law Optional 2019, 2022', 'CLAT PG 2021, 2023'],
    typicalMarks: 20,
    targetWordLimit: '450–500 Words | Time: ~15 Mins',
    questionText: `Can plenary legislation enacted by Parliament or a State Legislature be invalidated on the sole ground of "Manifest Arbitrariness" under Article 14? Trace the journey from McDowell & Co. to Shayara Bano and Navtej Singh Johar.`,
    coreIssues: [
      'The traditional test of reasonable classification vs E.P. Royappa\'s anti-arbitrariness doctrine.',
      'The restriction imposed in State of A.P. v. McDowell & Co. (1996) that plenary legislation cannot be struck down on arbitrariness alone.',
      'The revival and crystallization of Manifest Arbitrariness by Justice Nariman in Shayara Bano (2017).'
    ],
    examinerExpectation:
      'Must explain the difference between ordinary subordinate legislation review and primary statute review. Define what constitutes "Manifest Arbitrariness" (something done capriciously, irrationally, without determining principle, or excessive/disproportionate).',
    essentialCitations: [
      'State of W.B. v. Anwar Ali Sarkar (1952 SCR 284)',
      'E.P. Royappa v. State of Tamil Nadu ((1974) 4 SCC 3)',
      'State of A.P. v. McDowell & Co. ((1996) 3 SCC 709)',
      'Shayara Bano v. Union of India ((2017) 9 SCC 1)',
      'Navtej Singh Johar v. Union of India ((2018) 10 SCC 1)'
    ],
    answerBlueprint: {
      step1Intro: 'Introduce Article 14 equality and the dual doctrines: Reasonable Classification and Non-Arbitrariness.',
      step2DoctrinalCore: 'Analyze the conflict: McDowell held statutes can only be invalidated for lack of legislative competence or violation of FRs, not arbitrariness.',
      step3PrecedentEvolution: 'Showcase Shayara Bano where Justice Nariman reviewed McDowell, declaring it per incuriam, and held manifest arbitrariness is facet of Article 14.',
      step4Conclusion: 'Reaffirm application in Navtej Johar (striking Section 377 IPC) and Joseph Shine (striking Section 497 IPC).'
    },
    fullModelAnswer: `I. THE DUAL FOUNDATIONS OF ARTICLE 14:
Article 14 incorporates two distinct doctrines:
1. The Traditional Doctrine (Classification Test): Originating in Anwar Ali Sarkar (1952), a statute is valid if based on (a) Intelligible Differentia, and (b) a Rational Nexus to the statutory objective.
2. The Dynamic Doctrine (Anti-Arbitrariness): Propounded by Justice Bhagwati in E.P. Royappa (1974), equality is an activist dynamic concept antithetical to arbitrariness: "Where an act is arbitrary, it is implicit that it is unequal both according to political logic and constitutional law."

II. THE JUDICIAL RETRENCHMENT: McDOWELL & CO. (1996):
For decades, courts readily struck down executive and subordinate actions for arbitrariness, but hesitated to apply it to primary plenary legislation. In State of A.P. v. McDowell & Co. (1996), a 3-Judge Bench led by Justice B.P. Jeevan Reddy held that an Act of Parliament or State Legislature can only be struck down on two grounds:
1. Lack of legislative competence under the Seventh Schedule; or
2. Violation of any fundamental right in Part III.
The Court categorically asserted: "No enactment can be struck down by just saying that it is arbitrary or unreasonable."

III. THE WATERSHED SHIFT: SHAYARA BANO (2017):
In Shayara Bano v. Union of India (2017), the Supreme Court invalidated the practice of Talaq-e-Biddat. Justice R.F. Nariman, writing for the majority on Article 14, reviewed decades of precedent and declared the McDowell proposition to be per incuriam and incorrect in law.
Justice Nariman defined "Manifest Arbitrariness" as:
- Something done by the legislature capriciously, irrationally, or without determining principle; or
- Something done which is excessive and disproportionate.
If a statute exhibits manifest arbitrariness, it directly infringes Article 14 and must be struck down as ultra vires.

IV. CONSOLIDATION IN SUBSEQUENT CONSTITUTION BENCH VERDICTS:
The doctrine has become an established constitutional ground:
1. Navtej Singh Johar v. Union of India (2018): Section 377 IPC was partially struck down because criminalizing consensual adult intimacy was manifestly arbitrary and lacked determining principle.
2. Joseph Shine v. Union of India (2018): Section 497 IPC (adultery) was invalidated for manifest arbitrariness due to its paternalistic and discriminatory assumptions.
3. Electoral Bonds Case (2024): The 5-Judge Bench confirmed that statutes exempting political funding disclosures failed the test of proportionality and manifest arbitrariness.

CONCLUSION:
"Manifest Arbitrariness" now stands firmly recognized as an independent, substantive ground of constitutional invalidation for primary legislation, completing the journey from Royappa's vision to binding law.`,
    scoringRubric: [
      { criterion: 'Classification test vs Royappa anti-arbitrariness doctrine', marks: 5 },
      { criterion: 'McDowell restriction on striking primary legislation', marks: 4 },
      { criterion: 'Shayara Bano definition of Manifest Arbitrariness', marks: 6 },
      { criterion: 'Subsequent application (Navtej Johar, Joseph Shine, Electoral Bonds)', marks: 5 }
    ]
  },
  {
    id: 'common-q3',
    title: 'Article 20(3): Compulsory Forensic Inquiries & The Privilege Against Self-Incrimination',
    topicId: 'art-20-22-custodial-forensics',
    examsAppeared: ['State Prosecution Exams (UP APO, Bihar APO, JKPSC PO)', 'DJS Criminal Law 2015, 2019', 'RJS 2016, 2021', 'CBI APP 2022'],
    typicalMarks: 25,
    targetWordLimit: '500–550 Words | Time: ~18 Mins',
    questionText: `A Magistrate orders an accused in a sensational murder investigation to undergo compulsory narco-analysis, polygraph test, and to provide brain electrical fingerprints and voice samples. The accused challenges the order under Article 20(3) and Article 21. Decide the constitutional validity of each direction.`,
    coreIssues: [
      'Scope of the phrase "compelled to be a witness against himself" in Article 20(3).',
      'The physical evidence vs testimonial communication boundary established in Kathi Kalu Oghad.',
      'Involuntary administration of neuro-scientific investigative techniques violating mental privacy under Selvi.',
      'Judicial authorization of voice samples under Ritesh Sinha.'
    ],
    examinerExpectation:
      'Examiner expects clear bifurcation: (1) Narco, Polygraph, BEAP are unconstitutional if involuntary (Selvi); (2) Voice samples, fingerprints, handwriting are constitutional because they are non-testimonial identification data (Kathi Kalu Oghad & Ritesh Sinha).',
    essentialCitations: [
      'M.P. Sharma v. Satish Chandra (1954 SCR 1077)',
      'State of Bombay v. Kathi Kalu Oghad (1962 (3) SCR 10)',
      'Selvi v. State of Karnataka ((2010) 7 SCC 263)',
      'Ritesh Sinha v. State of U.P. ((2019) 8 SCC 1)'
    ],
    answerBlueprint: {
      step1Intro: 'Define Article 20(3) tripartite criteria: Accused person, Compulsion, and Testimonial character.',
      step2DoctrinalCore: 'Apply Kathi Kalu Oghad physical vs testimonial dichotomy: self-incrimination applies to statements conveying personal knowledge.',
      step3PrecedentEvolution: 'Apply Selvi: involuntary narco/polygraph intrudes into mental privacy under Art 21 and amounts to compelled testimony under Art 20(3).',
      step4Conclusion: 'Validate voice sample under Ritesh Sinha (2019) as legitimate identification data under Section 53 CrPC / Section 349 BNSS.'
    },
    fullModelAnswer: `I. CONSTITUTIONAL THRESHOLD OF ARTICLE 20(3):
Article 20(3) guarantees: "No person accused of any offence shall be compelled to be a witness against himself." To invoke this protection, three essential components must co-exist:
1. The person must be an accused at the time of compulsion;
2. There must be compulsion (coercion, duress, or involuntary judicial mandate);
3. The compulsion must relate to imparting "testimonial evidence" against oneself.

II. THE DOCTRINAL BOUNDARY: PHYSICAL VS TESTIMONIAL EVIDENCE:
In the landmark 11-Judge Bench decision in State of Bombay v. Kathi Kalu Oghad (1961), the Supreme Court established the cardinal distinction:
- "To be a witness" means imparting knowledge involving the personal cognitive awareness of the accused (Testimonial Evidence).
- In contrast, producing physical objects, giving fingerprints, bodily measurements, handwriting exemplars, or showing the body are non-testimonial identification evidence outside the protection of Article 20(3).

III. INVOLUNTARY NEURO-SCIENTIFIC INVESTIGATIVE TECHNIQUES (SELVI RATIO):
In Selvi v. State of Karnataka (2010) 7 SCC 263, a 3-Judge Bench examined the constitutional validity of involuntary Narco-analysis, Polygraph (Lie-Detector), and Brain Electrical Activation Profile (BEAP):
1. Involuntary Administration Violates Article 20(3): The Court held that narco-analysis chemically induces a hypnotic trance extracting statements without conscious volition. Similarly, polygraph and brain-mapping measure cognitive electrical responses conveying personal knowledge. Forcing an accused to undergo these tests constitutes compelled testimonial self-incrimination.
2. Involuntary Tests Violate Article 21 (Mental Privacy & Bodily Integrity): The Court held that Article 21 encompasses "mental privacy" and autonomy over one's thought process. Compulsory intrusion into the mind constitutes cruel, inhuman, and degrading treatment.
3. Voluntary Exception: If an accused voluntarily consents after receiving independent legal advice and recording before a Magistrate (NHRC Guidelines 2000), tests may be administered. However, the resulting statements cannot be admitted as substantive confessions; only subsequent physical discoveries under Section 27 Evidence Act (Section 23 BSA) are admissible.

IV. JUDICIAL DIRECTION FOR VOICE EXEMPLARS (RITESH SINHA RATIO):
In Ritesh Sinha v. State of U.P. (2019) 8 SCC 1, a 3-Judge Bench held that directing an accused to give voice samples does not violate Article 20(3). A voice sample is used purely for forensic acoustic comparison (identification data), not for extracting the substantive truth of what is said. Under Article 142 (and now Section 349 BNSS, 2023), Magistrates possess statutory and inherent authority to order voice exemplars.

JUDICIAL DECISION ON MAGISTRATE'S ORDER:
1. Compulsory Narco-analysis, Polygraph, and BEAP: UNCONSTITUTIONAL AND VOID under Articles 20(3) and 21 (Selvi).
2. Direction for Voice Samples: CONSTITUTIONALLY VALID AND ENFORCEABLE (Ritesh Sinha).`,
    scoringRubric: [
      { criterion: 'Article 20(3) tripartite criteria & Kathi Kalu Oghad physical vs testimonial dichotomy', marks: 7 },
      { criterion: 'Selvi v. State of Karnataka analysis (Narco, Polygraph, BEAP & Mental Privacy)', marks: 8 },
      { criterion: 'Ritesh Sinha voice sample distinction & BNSS alignment', marks: 5 },
      { criterion: 'Definitive judicial conclusion on each direction ordered by Magistrate', marks: 5 }
    ]
  },
  {
    id: 'common-q4',
    title: 'Writ of Certiorari vs Prohibition & Maintainability against Private Bodies',
    topicId: 'writs-judicial-review-142',
    examsAppeared: ['Bihar Judicial 2014, 2018, 2021', 'UP PCS-J 2015, 2018', 'DJS 2017', 'UPSC Law Optional 2016, 2021'],
    typicalMarks: 20,
    targetWordLimit: '450–500 Words | Time: ~15 Mins',
    questionText: `Distinguish between a Writ of Prohibition and a Writ of Certiorari. Under what circumstances can a High Court issue a Writ under Article 226 against a private entity or unaided educational institution?`,
    coreIssues: [
      'Stage of intervention: Prohibition is preventive (during pending proceedings), Certiorari is corrective (quashing completed orders).',
      'Grounds for Certiorari: Lack of jurisdiction, excess of jurisdiction, violation of Natural Justice, and Error of Law apparent on the face of the record.',
      'Definition of "person or authority" in Article 226 being wider than "State" under Article 12.'
    ],
    examinerExpectation:
      'Candidates must cite Syed Yakoob for Certiorari grounds. For private bodies, explain that the test is not who the entity is, but the nature of the duty performed (Public Duty doctrine in Andi Muktha Sadguru and Janet Jeyapaul).',
    essentialCitations: [
      'Hari Vishnu Kamath v. Syed Ahmad Ishaque (1955 1 SCR 1104)',
      'Syed Yakoob v. K.S. Radhakrishnan (AIR 1964 SC 477)',
      'Andi Muktha Sadguru v. V.R. Rudani ((1989) 2 SCC 691)',
      'Janet Jeyapaul v. SRM University ((2015) 16 SCC 530)',
      'Zee Telefilms Ltd. v. Union of India ((2005) 4 SCC 649)'
    ],
    answerBlueprint: {
      step1Intro: 'Define prerogative writs derived from English common law and incorporated into Articles 32 and 226.',
      step2DoctrinalCore: 'Tabulate the differences between Prohibition (early arrest of jurisdiction) and Certiorari (quashing record).',
      step3PrecedentEvolution: 'Analyze the Public Duty test: Article 226 extends to "any person or authority" discharging positive public obligations.',
      step4Conclusion: 'Conclude that purely private commercial contracts cannot be enforced via Article 226 unless imbued with public law character.'
    },
    fullModelAnswer: `I. COMPARATIVE DISTINCTION: WRIT OF PROHIBITION VS CERTIORARI:
Both writs are judicial remedies of English common law origin issued by superior courts to subordinate courts, tribunals, and quasi-judicial bodies. As established in Hari Vishnu Kamath (1955), they differ primarily in the stage of intervention:

1. Stage of Issuance:
   - Prohibition is a PREVENTIVE remedy. It is issued during the pendency of proceedings to stop a tribunal from continuing with unauthorized proceedings.
   - Certiorari is a CORRECTIVE remedy. It is issued after the tribunal has concluded proceedings and delivered a final decision, calling up the record to quash it.
2. Objective:
   - Prohibition arrests jurisdiction before judgment.
   - Certiorari quashes an ultra vires order and obliterates its legal effect.
3. Common Grounds of Issuance (Syed Yakoob v. K.S. Radhakrishnan, 1964):
   - Absence or excess of jurisdiction;
   - Violation of principles of natural justice (Audi Alteram Partem or Nemo Judex);
   - Fraud or patent error of law apparent on the face of the record (not mere erroneous appreciation of facts).

II. WRIT MAINTAINABILITY AGAINST PRIVATE BODIES UNDER ARTICLE 226:
Unlike Article 32, which is confined to the enforcement of Fundamental Rights against the "State" under Article 12, Article 226 empowers High Courts to issue writs to:
"any person or authority, including in appropriate cases, any Government... for the enforcement of any of the rights conferred by Part III and for any other purpose."

1. The "Public Duty" Functional Test:
In Andi Muktha Sadguru v. V.R. Rudani (1989) 2 SCC 691, the Supreme Court ruled that the form of the body is irrelevant; what matters is the nature of the duty imposed. If a private entity performs a public function or owes a statutory/public obligation to the public at large, a writ of Mandamus or Certiorari lies against it.
2. Application to Unaided Educational Institutions:
- Imparting Education is a Public Function: In Janet Jeyapaul v. SRM University (2015), the Supreme Court held that a deemed private university imparting education discharges a public function. Hence, a writ petition challenging the wrongful termination of a professor was maintainable.
- Limitations on Maintainability: In Zee Telefilms v. UOI (2005) and St. Mary's Education Society (2022), the Court clarified that purely private employment contracts devoid of statutory backing or private commercial disputes cannot be agitated under Article 226. The action challenged must have direct nexus with the public duty.

CONCLUSION:
While Prohibition prevents judicial excess and Certiorari cures it, Article 226 transcends rigid institutional tests, holding any private entity accountable whenever it breaches a positive public law duty.`,
    scoringRubric: [
      { criterion: 'Tabular distinction: Prohibition vs Certiorari (stages & objectives)', marks: 6 },
      { criterion: 'Grounds of Certiorari (Syed Yakoob criteria)', marks: 4 },
      { criterion: 'Public Duty test under Article 226 (Andi Muktha & Janet Jeyapaul)', marks: 6 },
      { criterion: 'Exceptions for purely private/commercial contracts (Zee Telefilms)', marks: 4 }
    ]
  },
  {
    id: 'common-q5',
    title: 'The Basic Structure Doctrine & The 9th Schedule Shield (I.R. Coelho Twin Tests)',
    topicId: 'basic-structure-amending-power',
    examsAppeared: ['UPSC Law Optional 2014, 2018, 2022', 'UP PCS-J 2016, 2023', 'Bihar Judicial 2018', 'Haryana Judicial 2019'],
    typicalMarks: 25,
    targetWordLimit: '500–550 Words | Time: ~18 Mins',
    questionText: `Discuss the evolution of the Basic Structure Doctrine. Can a statute included in the Ninth Schedule of the Constitution be subjected to Judicial Review after April 24, 1973? Explain the "Rights Test" and "Essence of the Rights Test" laid down in I.R. Coelho.`,
    coreIssues: [
      'The constituent power compromise in Kesavananda Bharati (1973).',
      'The blanket immunity originally envisaged under Article 31B and the 1st Amendment (1951).',
      'The 9-Judge Constitution Bench ruling in I.R. Coelho v. State of Tamil Nadu (2007).'
    ],
    examinerExpectation:
      'Must state the April 24, 1973 cut-off date. Explain that post-1973 laws do not get blanket immunity. Clearly distinguish between the Rights Test (direct violation of Part III) and Essence of Rights Test (whether that violation damages the constitutional basic structure).',
    essentialCitations: [
      'Kesavananda Bharati v. State of Kerala ((1973) 4 SCC 225)',
      'Minerva Mills Ltd. v. Union of India ((1980) 3 SCC 625)',
      'Waman Rao v. Union of India ((1981) 2 SCC 362)',
      'I.R. Coelho v. State of Tamil Nadu ((2007) 2 SCC 1)'
    ],
    answerBlueprint: {
      step1Intro: 'State the premise of Kesavananda: Parliament can amend any part of the Constitution without altering its basic identity.',
      step2DoctrinalCore: 'Explain Article 31B\'s original agrarian purpose and subsequent executive misuse as a constitutional dustbin.',
      step3PrecedentEvolution: 'Detail the 9-Judge bench verdict in I.R. Coelho: Pre-1973 9th schedule entries immune; post-1973 entries open to review.',
      step4Conclusion: 'Elaborate the Rights Test vs Essence of Rights Test and how Articles 14, 19, and 21 form the golden core of basic structure.'
    },
    fullModelAnswer: `I. GENESIS & JUDICIAL EVOLUTION OF THE BASIC STRUCTURE DOCTRINE:
The conflict over Parliament's amending power under Article 368 progressed through four historical stages:
1. Shankari Prasad (1951) & Sajjan Singh (1965): The Court held that constituent amending power under Article 368 was plenary and not subject to the Article 13(2) prohibition against abridging Fundamental Rights.
2. I.C. Golaknath (1967, 11-Judge Bench): In a 6:5 verdict, the Court reversed course, holding that Fundamental Rights held a transcendental position immune from constitutional amendment.
3. Kesavananda Bharati v. State of Kerala (1973, 13-Judge Bench): By a 7:6 majority, the Supreme Court struck a historic synthesis:
   - Parliament has the power to amend any provision of the Constitution, including Part III.
   - However, this power is subject to an inherent implied limitation: Parliament cannot alter, damage, or destroy the "Basic Structure" or essential identity of the Constitution.

II. THE NINTH SCHEDULE DILEMMA & ARTICLE 31B:
Article 31B, inserted by the 1st Constitutional Amendment (1951), created the Ninth Schedule to immunize agrarian land reform statutes from challenge under Articles 14, 19, and 31.
However, executive and legislative practice gradually abused this shield by placing statutes having no connection to land reforms (such as reservation statutes, election laws, and commercial monopolies) into the Ninth Schedule to escape judicial review. In Waman Rao (1981), the Court held that laws inserted after Kesavananda Bharati were open to challenge, but operational clarity remained elusive.

III. THE 9-JUDGE BENCH WATERSHED: I.R. COELHO (2007):
In I.R. Coelho v. State of Tamil Nadu (2007) 2 SCC 1, a unanimous 9-Judge Constitution Bench settled the constitutional position:
1. The Cut-Off Date of 24th April 1973: All laws inserted into the Ninth Schedule prior to 24th April 1973 remain fully immune from challenge.
2. Post-1973 Laws Subject to Judicial Review: Any amendment inserting a statute into the Ninth Schedule on or after 24th April 1973 does not enjoy blanket immunity. It can be challenged for violating the Basic Structure.
3. The Twin Tests Formulated by Coelho:
   - The Rights Test: Does the impugned statute violate any Fundamental Right in Part III (specifically Articles 14, 19, and 21)?
   - The Essence of the Rights Test: If Part III is violated, the Court inquires further: Does this infringement touch upon or destroy the "essential character" or basic structure of the Constitution?
The Court affirmed that Articles 14, 19, and 21 constitute the golden core of constitutional identity. If a Ninth Schedule law destroys the essence of these rights, it will be invalidated.

CONCLUSION:
I.R. Coelho established that Article 31B cannot be converted into a constitutional black hole. Judicial Review is an untouchable basic feature, and Parliament cannot achieve by ordinary statute placed in the 9th Schedule what it is forbidden from doing through constitutional amendment.`,
    scoringRubric: [
      { criterion: 'Evolution of Basic Structure (Shankari Prasad to Kesavananda)', marks: 7 },
      { criterion: 'Article 31B original intent & subsequent legislative abuse', marks: 5 },
      { criterion: 'I.R. Coelho 24 April 1973 cut-off date principle', marks: 5 },
      { criterion: 'Detailed breakdown: Rights Test vs Essence of Rights Test', marks: 8 }
    ]
  },
  {
    id: 'common-q6',
    title: 'Freedom of Speech in the Digital Era & The Proportionality Standard',
    topicId: 'art-19-speech-reasonable-restrictions',
    examsAppeared: ['DJS 2022', 'UPSC Law Optional 2021, 2023', 'CLAT PG 2020, 2022', 'UP PCS-J 2023'],
    typicalMarks: 20,
    targetWordLimit: '450–500 Words | Time: ~15 Mins',
    questionText: `"Freedom of speech and expression through the medium of internet is an integral part of Article 19(1)(a)." In the light of this observation in Anuradha Bhasin, evaluate the constitutional validity of indefinite internet shutdowns under the Temporary Suspension of Telecom Services Rules.`,
    coreIssues: [
      'Recognition of digital expression as fundamental right under Article 19(1)(a) and trade under Article 19(1)(g).',
      'The impermissibility of indefinite suspensions of internet connectivity.',
      'Application of the 4-tier Proportionality Test to administrative orders.'
    ],
    examinerExpectation:
      'Must quote Anuradha Bhasin (2020). Detail the 4 limbs of the Proportionality Test: Legitimate state goal, Rational connection, Necessity/Least restrictive measure, and Proportionality stricto sensu.',
    essentialCitations: [
      'Modern Dental College v. State of M.P. ((2016) 7 SCC 353)',
      'K.S. Puttaswamy v. Union of India ((2017) 10 SCC 1)',
      'Anuradha Bhasin v. Union of India ((2020) 3 SCC 637)',
      'Foundation for Media Professionals v. UT of J&K ((2020) 5 SCC 746)'
    ],
    answerBlueprint: {
      step1Intro: 'Affirm the constitutional principle: Medium of expression changes with technology, but Article 19(1)(a) protection remains robust.',
      step2DoctrinalCore: 'Analyze Anuradha Bhasin findings: Indefinite suspension of telecom/internet is illegal; review committees must publish orders.',
      step3PrecedentEvolution: 'Explain the Proportionality Test imported from German constitutional jurisprudence via Modern Dental College and Puttaswamy.',
      step4Conclusion: 'Conclude with procedural safeguards: Proactive disclosure of suspension orders enables judicial review under Article 226.'
    },
    fullModelAnswer: `I. CONSTITUTIONAL STATUS OF DIGITAL COMMUNICATION:
In Anuradha Bhasin v. Union of India (2020) 3 SCC 637, a 3-Judge Bench resolved the constitutional status of internet access. The Supreme Court held that freedom of speech and expression under Article 19(1)(a) and the freedom to practice any trade or business under Article 19(1)(g) through the medium of the internet are constitutionally protected fundamental rights.
While internet access per se was not declared a standalone fundamental right, the internet was recognized as an indispensable medium through which constitutional freedoms are realized in the 21st century.

II. INSUFFICIENT STATUTORY FOUNDATION & INDEFINITE SUSPENSIONS:
The State's power to restrict internet communications under the Temporary Suspension of Telecom Services (Public Emergency or Public Safety) Rules, 2017 is strictly bounded:
1. Indefinite Shutdown is Ultra Vires: An order suspending telecom/internet services cannot be indefinite. The suspension can only be for a temporary duration and must state reasons.
2. Mandatory Publication of Orders: Secret executive orders violate the Rule of Law. Every suspension order passed under Section 144 CrPC or the Telecom Rules must be published proactively in the public domain so that citizens can challenge it before High Courts under Article 226.
3. Review Committee Scrutiny: Orders must be periodically scrutinized by the statutory Review Committee under Rule 2(6) within five working days.

III. THE 4-PRONG PROPORTIONALITY TEST:
Importing the proportionality doctrine from Modern Dental College (2016) and Puttaswamy (2017), the Court mandated that any executive encroachment on communicative freedoms must satisfy four cumulative prongs:
1. Legitimate State Aim: The measure must pursue an objective authorized by Article 19(2) (e.g., sovereignty, integrity, or public order).
2. Rational Connection: There must be a demonstrable causal nexus between shutting down internet services and preventing public disorder.
3. Necessity / Least Restrictive Alternative: The State must evaluate whether less invasive measures (e.g., restricting only 4G high-speed data while keeping 2G alive, blocking specific extremist URLs, or geographic geofencing) could neutralize the security threat.
4. Proportionality Stricto Sensu: The societal benefit of the restriction must outweigh the severe collateral harm inflicted on healthcare, education, trade, and ordinary civic life.

CONCLUSION:
Blanket, unreasoned, and indefinite internet shutdowns fail the constitutional tests of legality and proportionality. Anuradha Bhasin transformed administrative convenience into a legally accountable process subject to judicial review.`,
    scoringRubric: [
      { criterion: 'Recognition of Internet communication under Art 19(1)(a) & 19(1)(g)', marks: 5 },
      { criterion: 'Anuradha Bhasin rules: Indefinite shutdowns ultra vires & order publication', marks: 5 },
      { criterion: '4-tier Proportionality Test application to administrative curbs', marks: 6 },
      { criterion: 'Review committee safeguards & procedural accountability', marks: 4 }
    ]
  }
];
