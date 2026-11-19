import type { MainsMasterQuestion } from '../../types/mainsQuestionTypes';

export const MAINS_BATCH_3: MainsMasterQuestion[] = [
  // =========================================================================
  // 5 MARKS / 100–120 WORDS (TIER 1: CRISP DOCTRINAL BENCHMARKS)
  // =========================================================================
  {
    id: 'mains-5m-waiver-fr',
    title: 'Doctrine of Waiver of Fundamental Rights',
    topicId: 'art-13-judicial-review-doctrines',
    marksCategory: 5,
    examCategory: 'UP_PCSJ',
    examsAppeared: ['UP PCS-J 2014, 2018', 'DJS 2016', 'MP Judiciary 2017'],
    typicalMarks: 5,
    targetWordLimit: '100–120 Words | Time: ~4 Mins',
    targetWordMin: 90,
    targetWordMax: 130,
    estimatedPages: '0.5 Page (~12 lines)',
    targetTimeMinutes: 4,
    questionText: 'Can a citizen waive their Fundamental Rights guaranteed under Part III of the Constitution of India? Discuss with reference to Basheshar Nath v. CIT.',
    coreIssues: [
      'Contrast between American doctrine of waiver and Indian constitutional jurisprudence.',
      'Fundamental rights as public policy imperatives and mandatory limitations on State power.',
      'Unanimous bar on waiving rights under Article 14 (Basheshar Nath).'
    ],
    examinerExpectation:
      'Candidate must state the unequivocal Indian position: A citizen CANNOT waive fundamental rights. Fundamental rights are not merely individual privileges; they are constitutional commands based on public policy. Cite Basheshar Nath (1959) and Behram Khurshed (1955).',
    essentialCitations: [
      'Behram Khurshed Pesikaka v. State of Bombay (1955 1 SCR 613)',
      'Basheshar Nath v. CIT (AIR 1959 SC 149)',
      'Olga Tellis v. Bombay Municipal Corp. ((1985) 3 SCC 545)'
    ],
    hoverIntel: {
      topicName: 'Doctrine of Waiver of Fundamental Rights',
      topicPillar: 'Part III: Fundamental Rights • Nature of Rights (Article 13)',
      examImportance: '⭐⭐⭐⭐ High Priority Conceptual',
      examFrequency: 'Tested in UP PCS-J, DJS, and MP Judiciary',
      weightagePattern: '5 Marks • 100–120 Words (0.5 Page)',
      targetTimeMinutes: 4,
      examinerTrapWarning:
        'Trap Alert: In the United States, constitutional rights can be waived (e.g. plea bargaining waives trial). In India, NO fundamental right can be waived by agreement or estoppel (Basheshar Nath & Olga Tellis)!',
      recentTrendAlert: 'Frequently tested in consumer contracts where citizens sign terms agreeing to waive privacy rights.',
      coreArticles: ['Article 13', 'Article 14', 'Article 21'],
      benchmarkCases: ['Behram Khurshed (1955)', 'Basheshar Nath (1959)', 'Olga Tellis (1985)']
    },
    answerBlueprint: {
      step1Intro: 'Define the American vs Indian dichotomy: While US courts permit waiver of constitutional guarantees, Indian law categorically rejects it.',
      step2DoctrinalCore: 'Detail Basheshar Nath v. CIT (1959, 5-Judge Bench): Part III rights are not merely private benefits; they are mandatory constitutional limitations imposed upon the State for the public good.',
      step3PrecedentEvolution: 'Detail Behram Khurshed (1955): A citizen cannot trade away fundamental freedoms, because rights exist for the benefit of the community and the rule of law.',
      step4Conclusion: 'Cite Olga Tellis (1985): An undertaking given by pavement dwellers not to object to eviction cannot operate as an estoppel or waiver of Article 21.'
    },
    fullModelAnswer: `I. THE CONSTITUTIONAL PRINCIPLE:
Unlike American jurisprudence, a citizen of India CANNOT waive any of the Fundamental Rights guaranteed under Part III. Fundamental rights are not mere individual privileges; they are mandatory injunctions enacted by the sovereign people as a matter of public policy to limit State power.

II. THE LANDMARK BENCHMARK: BASHESHAR NATH V. CIT (1959):
In Basheshar Nath v. CIT (AIR 1959 SC 149), a 5-Judge Constitution Bench held that an assessee who entered into an agreement to pay tax under a discriminatory procedure could not be precluded from challenging it under Article 14 on the ground of "waiver":
1. Public Policy Inviolability: Article 14 is an absolute admonition to the State. No person by contract, concession, or conduct can relieve the State of its constitutional obligation.
2. Olga Tellis (1985) Reaffirmation: Even if a person gives an undertaking in court renouncing a right (e.g. livelihood under Article 21), no estoppel can operate against fundamental rights.

CONCLUSION:
Fundamental rights are non-negotiable societal bulwarks; no individual can barter away constitutional freedoms.`,
    scoringRubric: [
      { criterion: 'Indian vs American waiver position & public policy rationale', marks: 1.5 },
      { criterion: 'Basheshar Nath 1959 ratio on Article 14 non-waivability', marks: 2 },
      { criterion: 'Olga Tellis estoppel rule & conclusion', marks: 1.5 }
    ]
  },

  {
    id: 'mains-5m-res-judicata-writs',
    title: 'Doctrine of Res Judicata in Writ Petitions (Daryao)',
    topicId: 'writs-judicial-review-142',
    marksCategory: 5,
    examCategory: 'BJS',
    examsAppeared: ['Bihar Judicial 2016, 2021', 'UP PCS-J 2015, 2018', 'DJS 2017'],
    typicalMarks: 5,
    targetWordLimit: '100–120 Words | Time: ~4 Mins',
    targetWordMin: 90,
    targetWordMax: 130,
    estimatedPages: '0.5 Page (~12 lines)',
    targetTimeMinutes: 4,
    questionText: 'Does the civil rule of Res Judicata apply to Writ Petitions under Article 32 when a similar petition was dismissed on merits by a High Court under Article 226? Refer to Daryao.',
    coreIssues: [
      'Section 11 CPC public policy underlying finality of litigation.',
      'Application of Res Judicata to Article 32 petitions following Article 226 dismissal on merits (Daryao).',
      'Exception: Writ of Habeas Corpus is exempt from Res Judicata on fresh grounds.'
    ],
    examinerExpectation:
      'Candidate must explain Daryao v. State of U.P. (1961) holding that dismissal on merits under Art. 226 bars a subsequent petition on the same facts under Art. 32. Detail exceptions: dismissal in limine without speaking order or fresh grounds in Habeas Corpus.',
    essentialCitations: [
      'Daryao v. State of U.P. (1962 1 SCR 574)',
      'Ghulam Sarwar v. Union of India (1967 2 SCR 271)',
      'Lallubhai Jogibhai Patel v. Union of India ((1981) 2 SCC 427)'
    ],
    hoverIntel: {
      topicName: 'Res Judicata in Writ Petitions',
      topicPillar: 'Part III & Part VI: Writs (Articles 32 & 226)',
      examImportance: '⭐⭐⭐⭐ High Priority Procedural',
      examFrequency: 'Regular in Bihar Judicial and UP PCS-J',
      weightagePattern: '5 Marks • 100–120 Words (0.5 Page)',
      targetTimeMinutes: 4,
      examinerTrapWarning:
        'Trap Alert: If a High Court dismisses a writ petition IN LIMINE without a speaking order, or on grounds of laches/alternate remedy, Res Judicata does NOT bar a petition under Article 32 (Daryao)!',
      recentTrendAlert: 'Habeas corpus petitions are exempt from res judicata where fresh grounds of detention arise.',
      coreArticles: ['Article 32', 'Article 226', 'Section 11 CPC'],
      benchmarkCases: ['Daryao (1961)', 'Ghulam Sarwar (1967)', 'Lallubhai Patel (1981)']
    },
    answerBlueprint: {
      step1Intro: 'Introduce Section 11 CPC doctrine of Res Judicata: interest reipublicae ut sit finis litium (it is in public interest that litigation comes to an end).',
      step2DoctrinalCore: 'Detail Daryao v. State of U.P. (1961, 5-Judge Bench): If a High Court examines an Article 226 petition and dismisses it on merits with a reasoned judgment, an identical petition under Article 32 is barred by Res Judicata.',
      step3PrecedentEvolution: 'Detail the Exceptions where Res Judicata does NOT apply: (1) Dismissal in limine without a speaking order, (2) Dismissal on laches or alternative remedy, (3) Lack of jurisdiction.',
      step4Conclusion: 'Highlight Habeas Corpus exception (Ghulam Sarwar & Lallubhai): A second Habeas Corpus petition lies on fresh grounds or continued illegal detention.'
    },
    fullModelAnswer: `I. DOCTRINAL APPLICATION (DARYAO V. STATE OF U.P., 1961):
Although Section 11 CPC is a statutory rule of civil procedure, the underlying public policy—*interest reipublicae ut sit finis litium* (finality of litigation)—applies to constitutional writ proceedings.
In Daryao v. State of U.P. (1961), a 5-Judge Constitution Bench ruled:
- If a High Court considers a writ petition under Article 226 and dismisses it ON MERITS with a speaking order, the petitioner CANNOT approach the Supreme Court under Article 32 on the same facts.
- The proper remedy is an appellate appeal under Article 136, not an independent collateral Article 32 petition.

II. EXCEPTIONS TO THE BAR:
1. Dismissal in Limine: If the High Court dismisses the petition in limine without a speaking order, or dismisses on preliminary grounds (laches, alternate remedy), Res Judicata does NOT apply; Article 32 remains maintainable.
2. Habeas Corpus Exception (Lallubhai Patel, 1981): Res judicata does not bar successive Habeas Corpus petitions where fresh grounds of unlawful detention emerge.`,
    scoringRubric: [
      { criterion: 'Section 11 public policy rationale in writ jurisdiction', marks: 1.5 },
      { criterion: 'Daryao 1961 dismissal on merits bar on Article 32', marks: 2 },
      { criterion: 'Exceptions (in limine dismissal & Habeas Corpus)', marks: 1.5 }
    ]
  },

  {
    id: 'mains-5m-berubari-territory',
    title: 'Cession of Indian Territory to a Foreign Power under Article 1 & 3 (Berubari Union)',
    topicId: 'union-and-territory-art-1-4',
    marksCategory: 5,
    examCategory: 'UPSC_LAW',
    examsAppeared: ['UPSC Law Optional 2015, 2020', 'Bihar Judicial 2018', 'UP PCS-J 2016'],
    typicalMarks: 5,
    targetWordLimit: '100–120 Words | Time: ~4 Mins',
    targetWordMin: 90,
    targetWordMax: 130,
    estimatedPages: '0.5 Page (~12 lines)',
    targetTimeMinutes: 4,
    questionText: 'Can the Parliament of India cede Indian territory to a foreign State under Article 3 of the Constitution? Discuss the advisory opinion in In re Berubari Union (1960).',
    coreIssues: [
      'Scope of Article 3: Relates only to internal reorganization of States, not cession to foreign powers.',
      'Cession requires a Constitutional Amendment under Article 368.',
      'Distinction between settlement of boundary disputes (executive action) and actual cession of territory.'
    ],
    examinerExpectation:
      'Candidate must explain In re Berubari Union (1960) 8-Judge Bench, clarify that Art 3 does not include power to cede territory to foreign nations, and contrast cession (requires Art 368) with boundary settlement under Maganbhai Ishwarbhai Patel.',
    essentialCitations: [
      'In re Berubari Union and Exchange of Enclaves (1960 3 SCR 250)',
      'Ram Kishore Sen v. Union of India (1966 1 SCR 430)',
      'Maganbhai Ishwarbhai Patel v. Union of India ((1970) 3 SCC 400)'
    ],
    hoverIntel: {
      topicName: 'Cession of Indian Territory & Article 3',
      topicPillar: 'Part I: The Union & Its Territory (Articles 1, 3 & 368)',
      examImportance: '⭐⭐⭐⭐ High Priority Benchmark',
      examFrequency: 'Regular in UPSC Law Optional and State Judicial Mains',
      weightagePattern: '5 Marks • 100–120 Words (0.5 Page)',
      targetTimeMinutes: 4,
      examinerTrapWarning:
        'Trap Alert: Boundary demarcation disputes do NOT require a constitutional amendment; they can be settled by executive action (Maganbhai Patel 1969). Cession of undisputed sovereign territory MANDATORY requires an Article 368 amendment (9th and 100th Amendments)!',
      recentTrendAlert: '100th Constitutional Amendment (2015) used Article 368 to exchange enclaves with Bangladesh.',
      coreArticles: ['Article 1', 'Article 3', 'Article 368'],
      benchmarkCases: ['Berubari Union (1960)', 'Maganbhai Patel (1969)']
    },
    answerBlueprint: {
      step1Intro: 'Quote Article 3: Empowers Parliament to form new States, alter areas, boundaries, or names of existing States.',
      step2DoctrinalCore: 'Detail In re Berubari Union (1960, 8-Judge Bench): Article 3 relates strictly to the internal readjustment of inter-State boundaries within the Indian Union; it does NOT empower Parliament to cede territory to a foreign State.',
      step3PrecedentEvolution: 'Detail the Amendment Mandate: Cession diminishes the sovereign territory under Article 1 and can ONLY be effected through a Constitutional Amendment under Article 368 (prompting the 9th Amendment).',
      step4Conclusion: 'Contrast with Maganbhai Patel (1969): Mere settlement of an undemarcated boundary dispute does not amount to cession and can be done by executive agreement.'
    },
    fullModelAnswer: `I. CONSTITUTIONAL LIMITS OF ARTICLE 3:
Article 3 empowers Parliament to form new States and alter boundaries of existing States.
In In re Berubari Union (1960), an 8-Judge Constitution Bench resolved whether an agreement transferring Berubari Enclave to Pakistan could be implemented under Article 3:
1. Article 3 Confined to Internal Reorganization: The Court held that Article 3 governs purely internal domestic adjustments of the territories of constituent States. It does NOT authorize Parliament to cede Indian territory to a foreign State.
2. Mandatory Article 368 Amendment: Ceding sovereign Indian territory reduces the territory defined in Article 1(3) and the First Schedule. Hence, cession can ONLY be effected by amending the Constitution under Article 368 (leading to the 9th Amendment, 1960, and later the 100th Amendment, 2015 for Bangladesh enclaves).

II. BOUNDARY DISPUTE EXCEPTION (MAGANBHAI PATEL, 1969):
In Maganbhai Ishwarbhai Patel (1969), the Court clarified that mere demarcation or settlement of a contested border does not amount to cession and requires no constitutional amendment; an executive treaty suffices.`,
    scoringRubric: [
      { criterion: 'Art. 3 internal reorganization limitation', marks: 1.5 },
      { criterion: 'Berubari 1960 mandate: Art 368 amendment required for cession', marks: 2 },
      { criterion: 'Maganbhai boundary settlement distinction & 100th amendment', marks: 1.5 }
    ]
  },

  {
    id: 'mains-5m-citizenship-domicile',
    title: 'Single Citizenship & Domicile under the Indian Constitution (Pradeep Jain)',
    topicId: 'citizenship-part-ii',
    marksCategory: 5,
    examCategory: 'UP_PCSJ',
    examsAppeared: ['UP PCS-J 2016, 2022', 'MP Judiciary 2018', 'Bihar Judicial 2016'],
    typicalMarks: 5,
    targetWordLimit: '100–120 Words | Time: ~4 Mins',
    targetWordMin: 90,
    targetWordMax: 130,
    estimatedPages: '0.5 Page (~12 lines)',
    targetTimeMinutes: 4,
    questionText: 'Does the Indian Constitution recognize separate State Domicile or State Citizenship? Examine the principle laid down in Pradeep Jain v. Union of India.',
    coreIssues: [
      'Single Citizenship under Article 5–11 vs dual citizenship in the United States.',
      'Single Domicile doctrine: Only one domicile in India (Domicile of India).',
      'State-wise institutional preference vs regional discrimination.'
    ],
    examinerExpectation:
      'Candidate must explain that India has only ONE citizenship and ONE domicile (Domicile of India). States cannot create a separate legal domicile to discriminate against citizens of other states. Cite Pradeep Jain (1984) and D.P. Joshi.',
    essentialCitations: [
      'D.P. Joshi v. State of Bharat (1955 1 SCR 1215)',
      'Pradeep Jain v. Union of India ((1984) 3 SCC 654)',
      'Dr. Kriti Lakhina v. State of Karnataka (1988 Supp SCC 438)'
    ],
    hoverIntel: {
      topicName: 'Single Citizenship & Domicile Doctrine',
      topicPillar: 'Part II: Citizenship & Equality (Articles 5, 9, 14, 15)',
      examImportance: '⭐⭐⭐⭐ High Priority Conceptual',
      examFrequency: 'Tested in UP PCS-J, MP Judiciary and BJS',
      weightagePattern: '5 Marks • 100–120 Words (0.5 Page)',
      targetTimeMinutes: 4,
      examinerTrapWarning:
        'Trap Alert: A State CAN provide institutional preference in higher education based on residence under Article 15(1) (D.P. Joshi), BUT there is legally NO such thing as a "State Domicile". Domicile is uniquely of India (Pradeep Jain)!',
      recentTrendAlert: 'Frequently cited in local job reservation laws (e.g. Haryana 75% local quota struck down).',
      coreArticles: ['Article 5', 'Article 9', 'Article 14', 'Article 15'],
      benchmarkCases: ['D.P. Joshi (1955)', 'Pradeep Jain (1984)']
    },
    answerBlueprint: {
      step1Intro: 'Contrast federal models: Unlike the United States where dual citizenship (Federal and State) and dual domicile exist, India recognizes only Single Citizenship under Article 9.',
      step2DoctrinalCore: 'Detail Pradeep Jain v. Union of India (1984, Justice Bhagwati): Under the Indian Constitution, there is ONLY ONE DOMICILE—the Domicile of India. There is no such concept as domicile of a State.',
      step3PrecedentEvolution: 'Explain D.P. Joshi (1955): Article 15(1) prohibits discrimination on ground of "place of birth", but does not bar classification based on "residence" for educational fee concessions.',
      step4Conclusion: 'State limitations: States cannot build walls of regional exclusivity. 100% reservation based on state residence violates equality and national unity.'
    },
    fullModelAnswer: `I. SINGLE CITIZENSHIP & SINGLE DOMICILE:
Unlike the American federal model which features dual citizenship and separate state domiciles, the Indian Constitution establishes a unified legal order:
1. Single Citizenship: Under Articles 5 to 11, there is only one citizenship—Citizenship of India. There is no separate State citizenship.
2. Single Domicile (Pradeep Jain v. Union of India, 1984): Justice P.N. Bhagwati settled that India has only ONE DOMICILE—the Domicile of India. A person resides in a State, but is legally domiciled only in India. It is constitutionally impermissible to speak of a "domicile of a State."

II. RESIDENCE VS PLACE OF BIRTH:
In D.P. Joshi (1955), the Court held that while Article 15(1) prohibits discrimination based on "place of birth," it does not bar classifications based on "residence."
However, in Pradeep Jain, the Court cautioned that institutional or residential preferences in university admissions cannot be absolute (cannot exceed reasonable limits), as wholesale exclusion of students from other states fractures national integration.`,
    scoringRubric: [
      { criterion: 'Single citizenship under Art. 5-11 vs US dual model', marks: 1.5 },
      { criterion: 'Pradeep Jain 1984 Single Domicile of India doctrine', marks: 2 },
      { criterion: 'D.P. Joshi residence vs place of birth distinction', marks: 1.5 }
    ]
  },

  {
    id: 'mains-5m-contempt-free-speech',
    title: 'Contempt of Court vs Freedom of Speech: In re Prashant Bhushan (2020)',
    topicId: 'higher-judiciary-collegium-142',
    marksCategory: 5,
    examCategory: 'DJS',
    examsAppeared: ['DJS 2022', 'UPSC Law Optional 2021, 2023', 'UP PCS-J 2023'],
    typicalMarks: 5,
    targetWordLimit: '100–120 Words | Time: ~4 Mins',
    targetWordMin: 90,
    targetWordMax: 130,
    estimatedPages: '0.5 Page (~12 lines)',
    targetTimeMinutes: 4,
    questionText: 'Distinguish between fair judicial criticism and criminal contempt of court under Article 129 and Article 19(2). Refer to In re Prashant Bhushan (2020).',
    coreIssues: [
      'Inherent powers of superior courts of record under Articles 129 and 215.',
      'Scandalizing the court under Section 2(c) Contempt of Courts Act, 1971.',
      'Fair criticism of judicial decisions vs malicious attacks shaking public confidence.'
    ],
    examinerExpectation:
      'Candidate must explain Articles 129 and 215, cite In re Prashant Bhushan (2020), and clarify that fair criticism of judgments is protected under Art 19(1)(a) and Section 5 of the Act, but attributing corrupt motives to judges constitutes criminal contempt.',
    essentialCitations: [
      'Brahma Prakash Sharma v. State of U.P. (1953 SCR 1169)',
      'E.M.S. Namboodiripad v. T.N. Nambiar ((1970) 2 SCC 325)',
      'In re Prashant Bhushan ((2021) 1 SCC 745)'
    ],
    hoverIntel: {
      topicName: 'Contempt of Court vs Free Expression',
      topicPillar: 'Part V: Courts of Record & Free Speech (Articles 129, 215 & 19(2))',
      examImportance: '⭐⭐⭐⭐ High Priority Contemporary',
      examFrequency: 'Appeared in DJS, UPSC Law Optional and CLAT PG',
      weightagePattern: '5 Marks • 100–120 Words (0.5 Page)',
      targetTimeMinutes: 4,
      examinerTrapWarning:
        'Trap Alert: Truth was made a valid statutory defense by the 2006 Amendment to Section 13(b) Contempt of Courts Act, provided it is in public interest and bona fide!',
      recentTrendAlert: 'Symbolic 1-rupee fine imposed in Prashant Bhushan (2020).',
      coreArticles: ['Article 129', 'Article 215', 'Article 19(1)(a)', 'Article 19(2)'],
      benchmarkCases: ['Brahma Prakash (1953)', 'Prashant Bhushan (2020)']
    },
    answerBlueprint: {
      step1Intro: 'Articles 129 and 215 establish the Supreme Court and High Courts as Courts of Record with inherent power to punish for contempt.',
      step2DoctrinalCore: 'Distinguish Fair Criticism vs Contempt: Section 5 Contempt of Courts Act protects fair comment on judicial acts. Legitimate critique of a judgment does not constitute contempt.',
      step3PrecedentEvolution: 'Detail In re Prashant Bhushan (2020): Two tweets alleging CJI corruption and destruction of democracy were held to scandalize the court, undermining public faith in the institution.',
      step4Conclusion: 'State the Truth Defense: Section 13(b) allows truth as a valid defense if bona fide and in public interest.'
    },
    fullModelAnswer: `I. CONSTITUTIONAL POWER (ARTICLES 129 & 215):
Articles 129 and 215 declare the Supreme Court and High Courts to be "Courts of Record" with inherent power to punish for contempt. Contempt is an express reasonable restriction on free speech under Article 19(2).

II. FAIR CRITICISM VS SCANDALIZING THE COURT:
1. Protected Fair Comment (Section 5): Honest, scholarly, or reasoned criticism of judicial pronouncements or judicial performance does not constitute contempt (Brahma Prakash Sharma, 1953). Judges do not enjoy immunity from intellectual scrutiny.
2. Criminal Contempt (Section 2(c)): Any publication that "scandalizes or lowers the authority of the court" or obstructs administration of justice is punishable.
3. In re Prashant Bhushan (2020): The Supreme Court held that attributing corrupt motives to Chief Justices and claiming the Court aided the destruction of democracy went beyond fair criticism, as it eroded public confidence in the judicial institution. Truth is an available defense under Section 13(b) only if bona fide and in public interest.`,
    scoringRubric: [
      { criterion: 'Art. 129/215 Courts of Record & Art. 19(2) restriction', marks: 1.5 },
      { criterion: 'Fair criticism vs criminal contempt distinction', marks: 2 },
      { criterion: 'Prashant Bhushan 2020 ratio & Section 13(b) truth defense', marks: 1.5 }
    ]
  },

  {
    id: 'mains-5m-advisory-jurisdiction',
    title: 'Advisory Jurisdiction under Article 143: Is the Supreme Court Bound to Answer?',
    topicId: 'higher-judiciary-collegium-142',
    marksCategory: 5,
    examCategory: 'UPSC_LAW',
    examsAppeared: ['UPSC Law Optional 2016, 2022', 'Bihar Judicial 2018', 'UP PCS-J 2015'],
    typicalMarks: 5,
    targetWordLimit: '100–120 Words | Time: ~4 Mins',
    targetWordMin: 90,
    targetWordMax: 130,
    estimatedPages: '0.5 Page (~12 lines)',
    targetTimeMinutes: 4,
    questionText: 'Examine the nature of the Advisory Jurisdiction of the Supreme Court under Article 143. Is the Court bound to answer every reference made by the President?',
    coreIssues: [
      'Two clauses of Article 143: Clause (1) question of law/fact vs Clause (2) pre-constitutional treaties.',
      'Discretion to decline answering under Clause (1) (M. Ismail Faruqui / Ayodhya Reference 1994).',
      'Advisory opinions are not binding judgments under Article 141, but possess persuasive authority.'
    ],
    examinerExpectation:
      'Candidate must distinguish Article 143(1) (Court "may" report opinion) from 143(2) (Court "shall" report opinion). Cite M. Ismail Faruqui (1994) where the Court declined to answer the Ayodhya reference on historical facts.',
    essentialCitations: [
      'In re Delhi Laws Act (1951 SCR 747)',
      'In re Special Courts Bill (1979 1 SCC 380)',
      'Dr. M. Ismail Faruqui v. Union of India (Ayodhya Reference) ((1994) 6 SCC 360)'
    ],
    hoverIntel: {
      topicName: 'Advisory Jurisdiction (Article 143)',
      topicPillar: 'Part V: The Union Judiciary (Article 143)',
      examImportance: '⭐⭐⭐⭐ High Priority Conceptual',
      examFrequency: 'Tested in UPSC Law Optional and Bihar Judicial',
      weightagePattern: '5 Marks • 100–120 Words (0.5 Page)',
      targetTimeMinutes: 4,
      examinerTrapWarning:
        'Trap Alert: Under Clause (1), the Court CAN refuse to answer (e.g. Ayodhya reference). Under Clause (2) (pre-constitutional treaties), the word used is "shall", so the Court is theoretically bound to report an opinion!',
      recentTrendAlert: 'Advisory opinions are not binding under Article 141, but hold authoritative persuasive weight.',
      coreArticles: ['Article 143(1)', 'Article 143(2)', 'Article 141'],
      benchmarkCases: ['Special Courts Bill (1978)', 'Ismail Faruqui (1994)']
    },
    answerBlueprint: {
      step1Intro: 'Quote Article 143: Empowers the President to refer questions of law or fact of public importance to the Supreme Court for advisory opinion.',
      step2DoctrinalCore: 'Distinguish Clause (1) and (2): Under 143(1), the Court "may" report its opinion (discretionary); under 143(2) (pre-constitutional treaties), the Court "shall" report (mandatory).',
      step3PrecedentEvolution: 'Explain Discretion to Refuse (Ismail Faruqui, 1994): In the Ayodhya reference asking whether a temple existed before the mosque, the 5-Judge Bench declined to answer, holding the reference was political and socio-religious, not a legal question.',
      step4Conclusion: 'State legal effect: Advisory opinions are not "law declared" under Article 141, but carry highest persuasive guidance.'
    },
    fullModelAnswer: `I. NATURE & DUAL CLAUSES OF ARTICLE 143:
Article 143 confers consultative advisory jurisdiction on the Supreme Court:
1. Article 143(1) (General Public Importance): If the President seeks an opinion on a question of law or fact, the Court "may, after such hearing as it thinks fit, report to the President its opinion."
2. Article 143(2) (Pre-Constitutional Treaties): Where a dispute arises out of pre-constitutional treaties/covenants excluded by Article 131 proviso, the Court "shall" report its opinion.

II. IS THE COURT BOUND TO ANSWER?
- Discretion to Decline: Under Article 143(1), the word "may" confers judicial discretion. The Supreme Court is NOT bound to answer every presidential reference.
- Landmark Refusal (Dr. M. Ismail Faruqui v. UOI, 1994): In the Ayodhya Reference, the President asked whether a Hindu temple existed before the Babri Masjid. A 5-Judge Bench declined to answer, holding that resolving historical-theological disputes was an abuse of Article 143 and undermined secularism.

LEGAL STATUS: An advisory opinion is not a "judgment" or binding precedent under Article 141, but carries the highest authoritative guidance.`,
    scoringRubric: [
      { criterion: 'Art. 143(1) "may" vs 143(2) "shall" distinction', marks: 2 },
      { criterion: 'Ismail Faruqui 1994 Ayodhya refusal ratio', marks: 2 },
      { criterion: 'Article 141 non-binding status & conclusion', marks: 1 }
    ]
  },

  {
    id: 'mains-5m-slp-art136',
    title: 'Special Leave Petition (SLP) under Article 136: Discretionary Plenary Nature',
    topicId: 'higher-judiciary-collegium-142',
    marksCategory: 5,
    examCategory: 'DJS',
    examsAppeared: ['DJS 2017, 2022', 'UP PCS-J 2018', 'Bihar Judicial 2021'],
    typicalMarks: 5,
    targetWordLimit: '100–120 Words | Time: ~4 Mins',
    targetWordMin: 90,
    targetWordMax: 130,
    estimatedPages: '0.5 Page (~12 lines)',
    targetTimeMinutes: 4,
    questionText: 'Explain the nature and scope of the Supreme Court\'s jurisdiction under Article 136. Is an SLP an ordinary right of appeal?',
    coreIssues: [
      'Plenary corrective jurisdiction overriding procedural limits of other appellate provisions.',
      'SLP is NOT an ordinary right of appeal; it is an extraordinary discretionary privilege.',
      'Dismissal at leave stage vs dismissal after grant of leave (Doctrine of Merger in Kunhayammed).'
    ],
    examinerExpectation:
      'Candidate must explain Pritam Singh (1950), emphasize that Article 136 does not confer a right of appeal, and explain Kunhayammed (2000) regarding dismissal of SLP in limine (no merger) vs judgment in appeal.',
    essentialCitations: [
      'Pritam Singh v. The State (1950 SCR 453)',
      'Kunhayammed v. State of Kerala ((2000) 6 SCC 359)',
      'Mathai v. George ((2010) 4 SCC 358)'
    ],
    hoverIntel: {
      topicName: 'Special Leave Petitions (Article 136)',
      topicPillar: 'Part V: The Union Judiciary (Article 136)',
      examImportance: '⭐⭐⭐⭐ High Priority Procedural',
      examFrequency: 'Regular in DJS Civil/Criminal and UP PCS-J',
      weightagePattern: '5 Marks • 100–120 Words (0.5 Page)',
      targetTimeMinutes: 4,
      examinerTrapWarning:
        'Trap Alert: A summary dismissal of an SLP at the threshold leave stage without reasons does NOT attract the Doctrine of Merger; the High Court order does not merge into the Supreme Court order (Kunhayammed)!',
      recentTrendAlert: 'Regularly scrutinized to prevent the Supreme Court from degenerating into a regular court of appeal.',
      coreArticles: ['Article 136', 'Article 133', 'Article 134'],
      benchmarkCases: ['Pritam Singh (1950)', 'Kunhayammed (2000)']
    },
    answerBlueprint: {
      step1Intro: 'Quote Article 136: The Supreme Court may, in its discretion, grant special leave to appeal from any judgment, decree, sentence or order in any cause or matter passed by any court or tribunal (except military tribunals).',
      step2DoctrinalCore: 'Explain Pritam Singh (1950): Article 136 does not confer a regular right of appeal upon litigants. It is an extraordinary, discretionary power to be invoked only in cases of grave and manifest injustice.',
      step3PrecedentEvolution: 'Detail the Two Stages (Kunhayammed, 2000): (1) Leave Stage: Court decides whether to grant special leave. Summary dismissal leaves High Court order intact without merger. (2) Post-Leave Appeal Stage: SLP converts into a regular civil/criminal appeal where Doctrine of Merger applies.',
      step4Conclusion: 'Reiterate Mathai v. George: Article 136 cannot be converted into an ordinary court of regular appeal.'
    },
    fullModelAnswer: `I. EXTRAORDINARY PLENARY POWER:
Article 136 confers extraordinary, plenary jurisdiction upon the Supreme Court to grant special leave to appeal from "any judgment, determination, sentence or order in any cause or matter passed by any court or tribunal in India" (except Armed Forces Tribunals under Art. 136(2)).

II. NOT AN ORDINARY RIGHT OF APPEAL (PRITAM SINGH, 1950):
Article 136 does NOT confer a right of appeal upon any litigant. In Pritam Singh v. The State (1950), the Court held that this power is discretionary and exceptional, to be exercised sparingly only where grave, substantial, and patent injustice has been committed.

III. THE TWO-STAGE INQUIRY & DOCTRINE OF MERGER (KUNHAYAMMED, 2000):
In Kunhayammed v. State of Kerala (2000), a 3-Judge Bench articulated the distinction:
1. Leave Stage: The Court exercises discretionary jurisdiction. A non-speaking dismissal of an SLP at the threshold does NOT invoke the Doctrine of Merger; the High Court's order does not merge with the dismissal.
2. Appellate Stage: Once special leave is granted, the SLP converts into a regular appeal. A final judgment rendered thereafter merges the High Court order into the Supreme Court decree.`,
    scoringRubric: [
      { criterion: 'Art. 136 text & exceptional plenary nature', marks: 1.5 },
      { criterion: 'Pritam Singh principle: Discretionary power vs Right of Appeal', marks: 1.5 },
      { criterion: 'Kunhayammed 2000 two-stage process & Doctrine of Merger', marks: 2 }
    ]
  },

  {
    id: 'mains-5m-prospective-overruling',
    title: 'Doctrine of Prospective Overruling (Golak Nath)',
    topicId: 'art-13-judicial-review-doctrines',
    marksCategory: 5,
    examCategory: 'UP_PCSJ',
    examsAppeared: ['UP PCS-J 2013, 2018', 'Bihar Judicial 2018', 'UPSC Law 2017'],
    typicalMarks: 5,
    targetWordLimit: '100–120 Words | Time: ~4 Mins',
    targetWordMin: 90,
    targetWordMax: 130,
    estimatedPages: '0.5 Page (~12 lines)',
    targetTimeMinutes: 4,
    questionText: 'Explain the origin and scope of the "Doctrine of Prospective Overruling" in Indian Constitutional Law. Refer to I.C. Golak Nath.',
    coreIssues: [
      'Blackstonian theory that judges only discover law retrospectively vs modern American prospective overruling.',
      'Adoption in I.C. Golak Nath v. State of Punjab (1967).',
      'The 3 conditions: Invoked only by the Supreme Court, only on constitutional questions, and to prevent chaotic disruption of settled past transactions.'
    ],
    examinerExpectation:
      'Candidate must explain Chief Justice Subba Rao\'s importation of the doctrine from American jurisprudence in Golak Nath (1967), and state the 3 conditions limiting its application exclusively to the Supreme Court.',
    essentialCitations: [
      'I.C. Golak Nath v. State of Punjab (1967 2 SCR 762)',
      'Baburam v. C.C. Jacob ((1999) 3 SCC 362)',
      'Kailash Chand Sharma v. State of Rajasthan ((2002) 6 SCC 562)'
    ],
    hoverIntel: {
      topicName: 'Doctrine of Prospective Overruling',
      topicPillar: 'Part III: Judicial Precedents & Evolution (Articles 13 & 141)',
      examImportance: '⭐⭐⭐⭐ High Priority Jurisprudential',
      examFrequency: 'Tested in UP PCS-J, Bihar Judicial and UPSC Law',
      weightagePattern: '5 Marks • 100–120 Words (0.5 Page)',
      targetTimeMinutes: 4,
      examinerTrapWarning:
        'Trap Alert: A High Court CANNOT apply the Doctrine of Prospective Overruling! In Golak Nath, the Supreme Court expressly held that the power to overrule prospectively belongs EXCLUSIVELY to the Supreme Court under Article 142!',
      recentTrendAlert: 'Frequently applied to service recruitment quotas and taxation invalidations.',
      coreArticles: ['Article 13', 'Article 141', 'Article 142'],
      benchmarkCases: ['Golak Nath (1967)', 'Baburam (1999)']
    },
    answerBlueprint: {
      step1Intro: 'Define the Blackstonian common law rule: A judicial decision operates retrospectively because judges declare what the law always was.',
      step2DoctrinalCore: 'Explain Prospective Overruling: Propounded in American jurisprudence (Cardozo) and imported into Indian constitutional law by CJI K. Subba Rao in I.C. Golak Nath v. State of Punjab (1967, 11-Judge Bench).',
      step3PrecedentEvolution: 'Detail Golak Nath holding: 1st, 4th, and 17th Amendments were unconstitutional, but overruling operated only prospectively from the date of judgment to avoid reopening settled land reforms.',
      step4Conclusion: 'List the 3 Golden Safeguards: (1) Applicable only to constitutional disputes, (2) Exercisable ONLY by the Supreme Court, (3) Discretion guided by justice and avoidance of chaos.'
    },
    fullModelAnswer: `I. DEPARTURE FROM BLACKSTONIAN RETROSPECTIVITY:
Traditional English common law followed the Blackstonian theory that judges do not make law, but merely declare what the law always was; hence, judicial overrulings operated retrospectively.
Recognizing that strict retrospectivity would destabilize thousands of completed transactions and land distributions, Chief Justice K. Subba Rao in I.C. Golak Nath v. State of Punjab (1967, 11-Judge Bench) imported the American "Doctrine of Prospective Overruling."

II. THE GOLAK NATH APPLICATION & 3 RESTRICTIONS:
In Golak Nath, the Court declared that Parliament had no power to abridge Fundamental Rights under Article 368. However, to prevent chaotic reopening of agrarian land transfers completed under prior amendments (1st, 4th, and 17th), the Court ruled that the declaration of unconstitutionality would operate ONLY prospectively from 27th February 1967.
CJI Subba Rao formulated three strict limitations:
1. Supreme Court Exclusivity: The doctrine can be invoked ONLY by the Supreme Court; High Courts cannot overrule prospectively.
2. Constitutional Questions: Confined strictly to constitutional matters.
3. Prevention of Grave Public Injustice: Exercised to protect bona fide past transactions.`,
    scoringRubric: [
      { criterion: 'Blackstonian retrospectivity vs prospective doctrine', marks: 1.5 },
      { criterion: 'Golak Nath 1967 application to saving past land reforms', marks: 2 },
      { criterion: '3 strict limitations (Supreme Court exclusivity & Art 142)', marks: 1.5 }
    ]
  },

  // =========================================================================
  // 10 MARKS / 150–180 WORDS (TIER 2: STANDARD JUDICIAL & PROSECUTION BENCHMARKS)
  // =========================================================================
  {
    id: 'mains-10m-right-to-privacy-puttaswamy',
    title: 'Right to Privacy as a Fundamental Right & The 3-Fold Proportionality Test (Puttaswamy)',
    topicId: 'art-21-due-process',
    marksCategory: 10,
    examCategory: 'DJS',
    examsAppeared: ['DJS 2018, 2022', 'UP PCS-J 2018, 2023', 'UPSC Law Optional 2019, 2022'],
    typicalMarks: 10,
    targetWordLimit: '160–180 Words | Time: ~7 Mins',
    targetWordMin: 150,
    targetWordMax: 200,
    estimatedPages: '1.0 Page (~20 lines)',
    targetTimeMinutes: 7,
    questionText: `Trace the constitutional journey of the "Right to Privacy" from M.P. Sharma and Kharak Singh to K.S. Puttaswamy (2017). Detail the 3-fold proportionality test mandated to evaluate any state intrusion into privacy.`,
    coreIssues: [
      'The 8-Judge Bench in M.P. Sharma (1954) and 6-Judge Bench in Kharak Singh (1963) denying privacy.',
      'Unanimous 9-Judge Constitution Bench verdict in K.S. Puttaswamy (2017).',
      'Privacy as an intrinsic facet of dignity under Article 21 and Part III.',
      'The 3-pronged test: Legality, Legitimate State Aim, and Proportionality.'
    ],
    examinerExpectation:
      'Candidate must trace M.P. Sharma and Kharak Singh overrulings, detail the 9-Judge Bench in Puttaswamy (2017), and enumerate the 3-prong test (Legality, Legitimate Goal, Proportionality) governing state surveillance and biometric data collection.',
    essentialCitations: [
      'M.P. Sharma v. Satish Chandra (1954 SCR 1077)',
      'Kharak Singh v. State of U.P. (1964 1 SCR 332)',
      'Govind v. State of M.P. ((1975) 2 SCC 148)',
      'K.S. Puttaswamy v. Union of India (Privacy Judgment) ((2017) 10 SCC 1; 9-Judge Bench)'
    ],
    hoverIntel: {
      topicName: 'Right to Privacy & Puttaswamy Test',
      topicPillar: 'Part III: Fundamental Rights • Right to Life (Article 21)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Master Precedent)',
      examFrequency: 'Guaranteed core question across DJS, UP PCS-J, and UPSC Law',
      weightagePattern: '10 Marks • 160–180 Words (1.0 Page)',
      targetTimeMinutes: 7,
      examinerTrapWarning:
        'Trap Alert: Privacy is NOT absolute! It is subject to reasonable restrictions. Detail the 3-fold test of state encroachment: (1) Legality (valid enacted law), (2) Legitimate State Aim, (3) Proportionality (rational nexus and least intrusive means)!',
      recentTrendAlert: 'Applied in Digital Personal Data Protection Act (DPDP), 2023.',
      coreArticles: ['Article 21', 'Article 14', 'Article 19'],
      benchmarkCases: ['M.P. Sharma (1954)', 'Kharak Singh (1963)', 'Puttaswamy (2017)']
    },
    answerBlueprint: {
      step1Intro: 'Trace historical baggage: M.P. Sharma (1954, 8 judges) held Indian Constitution has no privacy right; Kharak Singh (1963, 6 judges) held domiciliary night visits did not violate privacy.',
      step2DoctrinalCore: 'Detail K.S. Puttaswamy (2017, 9-Judge Bench): Unanimously overruled M.P. Sharma and Kharak Singh, holding that privacy is an inalienable natural right intrinsic to life and dignity under Article 21 and the freedoms in Part III.',
      step3PrecedentEvolution: 'Detail the 3-Fold Test governing any State intrusion: (1) Legality (statutory law), (2) Legitimate State Aim (public goal), (3) Proportionality (rational nexus, necessity, and least restrictive measure).',
      step4Conclusion: 'Highlight its foundational impact on subsequent constitutional verdicts: Navtej Johar (decriminalizing 377), Joseph Shine (striking adultery), and Aadhaar biometric limits.'
    },
    fullModelAnswer: `I. THE JUDICIAL PARADIGM SHIFT:
For over six decades, privacy remained an uncertain unenumerated freedom due to early precedents:
- M.P. Sharma (1954, 8-Judge Bench): Denied a constitutional right to privacy regarding search and seizure.
- Kharak Singh (1963, 6-Judge Bench): Struck down domiciliary police visits under Art. 21, but held privacy was not a guaranteed fundamental right (Justice Subba Rao dissenting).

II. THE UNANIMOUS 9-JUDGE BENCH IN K.S. PUTTASWAMY (2017):
In K.S. Puttaswamy v. Union of India (2017) 10 SCC 1, a 9-Judge Constitution Bench unanimously declared:
1. Fundamental Inherent Right: Privacy is an inalienable, natural human right rooted in dignity, personal autonomy, and bodily/mental integrity under Article 21, and is protected across the entire spectrum of Part III freedoms.
2. Tripartite Zones of Privacy: Encompasses spatial privacy (home), informational privacy (data/surveillance), and decisional autonomy (intimate choices).

III. THE THREE-FOLD TEST FOR STATE INTRUSION:
Privacy is not absolute, but any State infringement must satisfy three cumulative hurdles:
1. Legality: Must be authorized by an enacted statutory law (executive orders insufficient).
2. Legitimate State Aim: Must pursue a legitimate public purpose (national security, crime prevention, welfare distribution).
3. Proportionality: The measure must have a rational connection to the goal, adopt the least restrictive alternative, and maintain proportionality stricto sensu.

CONCLUSION:
Puttaswamy dismantled state surveillance authoritarianism, laying the bedrock for individual liberty in digital India.`,
    scoringRubric: [
      { criterion: 'M.P. Sharma & Kharak Singh historical baggage and overruling', marks: 2.5 },
      { criterion: 'Puttaswamy 2017 9-Judge Bench autonomy & dignity ratio', marks: 3.5 },
      { criterion: '3-fold test of state intrusion (Legality, Aim, Proportionality)', marks: 3 },
      { criterion: 'Impact on modern privacy laws & conclusion', marks: 1 }
    ]
  },

  {
    id: 'mains-10m-constitutional-morality-navtej',
    title: 'Constitutional Morality vs Majoritarian Morality: Navtej Singh Johar (Section 377)',
    topicId: 'art-14-arbitrariness-equality',
    marksCategory: 10,
    examCategory: 'DJS',
    examsAppeared: ['DJS 2019, 2022', 'UP PCS-J 2018, 2023', 'UPSC Law Optional 2019, 2022'],
    typicalMarks: 10,
    targetWordLimit: '160–180 Words | Time: ~7 Mins',
    targetWordMin: 150,
    targetWordMax: 200,
    estimatedPages: '1.0 Page (~20 lines)',
    targetTimeMinutes: 7,
    questionText: `Discuss the concept of "Constitutional Morality" evolved by the Supreme Court in Navtej Singh Johar v. Union of India. How does it supersede popular or majoritarian morality in protecting minority fundamental rights?`,
    coreIssues: [
      'Dr. B.R. Ambedkar\'s conception of Constitutional Morality vs societal orthodoxy.',
      'Suresh Kumar Koushal (2013) retrograde ruling relying on majoritarian views and "minuscule fraction".',
      'Navtej Singh Johar (2018) 5-Judge Bench partially striking down Section 377 IPC.',
      'Constitutional courts must guard counter-majoritarian values.'
    ],
    examinerExpectation:
      'Candidate must contrast Suresh Koushal (2013) with Navtej Johar (2018). Explain that fundamental rights cannot be made hostage to popular public morality, and define Constitutional Morality as allegiance to constitutional values of equality, liberty, and human dignity.',
    essentialCitations: [
      'Suresh Kumar Koushal v. Naz Foundation ((2014) 1 SCC 1)',
      'Navtej Singh Johar v. Union of India ((2018) 10 SCC 1; 5-Judge Bench)',
      'Joseph Shine v. Union of India ((2019) 3 SCC 39)'
    ],
    hoverIntel: {
      topicName: 'Constitutional Morality & Section 377',
      topicPillar: 'Part III: Equality & Liberty (Articles 14, 15, 19 & 21)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Jurisprudential Core)',
      examFrequency: 'Tested in DJS, UP PCS-J, and UPSC Law Optional',
      weightagePattern: '10 Marks • 160–180 Words (1.0 Page)',
      targetTimeMinutes: 7,
      examinerTrapWarning:
        'Trap Alert: Section 377 was NOT struck down entirely! It was struck down ONLY to the extent that it criminalized consensual sexual acts between adults in private. Non-consensual acts and bestiality remain punishable under Section 377!',
      recentTrendAlert: 'Supremacy of Constitutional Morality reaffirmed in Supriyo (Marriage Equality 2023).',
      coreArticles: ['Article 14', 'Article 15', 'Article 19(1)(a)', 'Article 21'],
      benchmarkCases: ['Suresh Koushal (2014)', 'Navtej Johar (2018)', 'Joseph Shine (2019)']
    },
    answerBlueprint: {
      step1Intro: 'Define Constitutional Morality: Originated by George Grote and invoked by Dr. Ambedkar, it demands unwavering commitment to the core constitutional values of liberty, equality, and fraternity.',
      step2DoctrinalCore: 'Contrast with Majoritarian Morality: Popular morality reflects prevailing societal prejudices, orthodox traditions, and majoritarian sentiments.',
      step3PrecedentEvolution: 'Detail Navtej Singh Johar (2018, 5-Judge Bench): Overruled Suresh Koushal (2013), holding that constitutional courts must act as counter-majoritarian institutions protecting minorities from majoritarian intolerance.',
      step4Conclusion: 'Apply to Section 377: Consensual adult intimacy in private is protected under Articles 14, 15 (discrimination on sexual orientation), 19(1)(a), and 21 (dignity and privacy).'
    },
    fullModelAnswer: `I. CONSTITUTIONAL MORALITY VS POPULAR MORALITY:
In constitutional adjudication, a fundamental friction exists between:
1. Popular/Majoritarian Morality: The prevailing social ethos, traditional orthodoxies, and majority religious sentiments of society.
2. Constitutional Morality: The normative allegiance to the foundational principles of the Constitution—individual dignity, pluralism, liberty, equality, and rule of law (as propounded by Dr. B.R. Ambedkar).

II. THE REVERSAL: FROM KOUSHAL TO NAVTEJ JOHAR (2018):
In Suresh Kumar Koushal (2013), the Supreme Court reversed the Delhi High Court's Naz Foundation ruling, upholding Section 377 IPC on the regressive reasoning that LGBT persons constituted a "minuscule fraction" of the population and societal disapprobation justified criminalization.
In Navtej Singh Johar v. Union of India (2018) 10 SCC 1, a unanimous 5-Judge Constitution Bench overruled Koushal:
1. Counter-Majoritarian Role: The Court declared that constitutional courts are counter-majoritarian bastions. Fundamental rights cannot be held hostage to the shifting sands of majoritarian preference or societal prejudice.
2. Equality & Non-Discrimination: Discrimination based on sexual orientation violates Article 15(1) ("sex" includes sexual orientation).
3. Decisional Privacy & Dignity: Consensual adult sexual choices in private are protected under Article 21. Criminalizing consensual intimacy was manifestly arbitrary under Article 14.

CONCLUSION:
Constitutional Morality guarantees that the rights of vulnerable minorities are insulated from majoritarian intolerance.`,
    scoringRubric: [
      { criterion: 'Definition: Constitutional Morality vs Popular Morality', marks: 2.5 },
      { criterion: 'Koushal 2013 minuscule fraction error & overruling', marks: 2.5 },
      { criterion: 'Navtej Johar 2018 5-Judge Bench ratio (Art 14, 15, 21)', marks: 3.5 },
      { criterion: 'Counter-majoritarian judicial role synthesis', marks: 1.5 }
    ]
  },

  {
    id: 'mains-10m-clean-environment-climate-change',
    title: 'Right to Clean Environment & Climate Change under Article 21 (M.K. Ranjitsinh 2024)',
    topicId: 'art-21-due-process',
    marksCategory: 10,
    examCategory: 'DJS',
    examsAppeared: ['DJS 2024 Benchmark', 'UPSC Law Optional 2024', 'UP PCS-J 2024'],
    typicalMarks: 10,
    targetWordLimit: '160–180 Words | Time: ~7 Mins',
    targetWordMin: 150,
    targetWordMax: 200,
    estimatedPages: '1.0 Page (~20 lines)',
    targetTimeMinutes: 7,
    questionText: `Trace the expansion of Article 21 from the Right to a Pollution-Free Environment to the "Right to be Free from Adverse Effects of Climate Change" in M.K. Ranjitsinh v. Union of India (2024).`,
    coreIssues: [
      'Evolution from M.C. Mehta and Subhash Kumar recognizing clean environment under Article 21.',
      'The 3-Judge Bench landmark in M.K. Ranjitsinh (2024) recognizing the right against climate change.',
      'Balancing endangered wildlife conservation (Great Indian Bustard) with renewable solar energy commitments.'
    ],
    examinerExpectation:
      'Candidate must trace M.C. Mehta $\to$ Subhash Kumar (1991), and detail CJI Chandrachud\'s 2024 judgment in M.K. Ranjitsinh recognizing for the first time an unenumerated fundamental right to be free from adverse climate change impacts under Articles 14 and 21.',
    essentialCitations: [
      'Subhash Kumar v. State of Bihar ((1991) 1 SCC 598)',
      'Vellore Citizens\' Welfare Forum v. Union of India ((1996) 5 SCC 647)',
      'M.C. Mehta v. Kamal Nath ((1997) 1 SCC 388)',
      'M.K. Ranjitsinh v. Union of India (2024 INSC 280; (2024) 6 SCC 726)'
    ],
    hoverIntel: {
      topicName: 'Right against Climate Change (Ranjitsinh 2024)',
      topicPillar: 'Part III & Part IV: Environmental Jurisprudence (Articles 21, 48A, 51A(g))',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (2024 Landmark Benchmark)',
      examFrequency: 'Guaranteed core question for upcoming Judicial Mains & UPSC',
      weightagePattern: '10 Marks • 160–180 Words (1.0 Page)',
      targetTimeMinutes: 7,
      examinerTrapWarning:
        'Trap Alert: Ranjitsinh recognized climate change as a distinct right derived from BOTH Article 21 (right to life/health) AND Article 14 (inter-generational equity and disproportionate climate impact on marginalized communities)!',
      recentTrendAlert: 'Decided on 21 March 2024 by CJI Chandrachud Bench.',
      coreArticles: ['Article 21', 'Article 14', 'Article 48A', 'Article 51A(g)'],
      benchmarkCases: ['Subhash Kumar (1991)', 'Vellore Citizens (1996)', 'M.K. Ranjitsinh (2024)']
    },
    answerBlueprint: {
      step1Intro: 'Trace environmental genesis: Subhash Kumar (1991) and M.C. Mehta established that right to life under Article 21 includes the right to wholesome pollution-free water and air.',
      step2DoctrinalCore: 'Detail the 2024 breakthrough in M.K. Ranjitsinh v. Union of India (2024 INSC 280): Supreme Court recognized the "Right to be free from the adverse effects of climate change" as a distinct fundamental right.',
      step3PrecedentEvolution: 'Analyze the dual constitutional anchors: (1) Article 21 (climate impacts cause displacement, food shortages, disease, destroying life), (2) Article 14 (climate change disparately hits impoverished communities, violating equality).',
      step4Conclusion: 'Explain the balancing exercise: Modified a blanket ban on overhead power transmission lines in Rajasthan/Gujarat to balance protection of the Great Indian Bustard with international renewable energy obligations.'
    },
    fullModelAnswer: `I. THE EARLY ENVIRONMENTAL JURISPRUDENCE:
In Subhash Kumar (1991) and M.C. Mehta (Oleum Gas Leak, 1987), the Supreme Court expanded Article 21 to encompass the right to live in a clean, healthy, and pollution-free environment. Principles such as the Precautionary Principle, Polluter Pays, and Public Trust Doctrine were incorporated into Indian law (Vellore Citizens, 1996).

II. THE 2024 CLIMATE CHANGE BREAKTHROUGH: M.K. RANJITSINH:
In M.K. Ranjitsinh v. Union of India (2024 INSC 280), a 3-Judge Bench led by CJI D.Y. Chandrachud made global constitutional history by recognizing a distinct unenumerated right:
"The right to be free from the adverse effects of climate change is a fundamental right under Articles 14 and 21."

1. The Article 21 Nexus: Rising temperatures, extreme droughts, floods, and agricultural devastation directly imperil food security, clean water, and physical survival.
2. The Article 14 Nexus & Climate Justice: Climate change disparately impacts impoverished, tribal, and coastal communities who lack resources to adapt, violating substantive equality and intergenerational equity.
3. Sustainable Harmonization: The Court balanced the preservation of the critically endangered Great Indian Bustard with India's international commitments to transition toward renewable solar power.

CONCLUSION:
Ranjitsinh transforms environmental litigation from localized pollution control into an overarching human right to planetary survival.`,
    scoringRubric: [
      { criterion: 'Early Art. 21 environmental evolution (Subhash Kumar & Vellore Citizens)', marks: 2.5 },
      { criterion: 'M.K. Ranjitsinh 2024 recognition of right against climate change', marks: 3.5 },
      { criterion: 'Dual Article 21 & Article 14 (climate justice) foundations', marks: 2.5 },
      { criterion: 'Balancing wildlife vs renewable energy & conclusion', marks: 1.5 }
    ]
  },

  {
    id: 'mains-10m-uniform-civil-code',
    title: 'Uniform Civil Code under Article 44: Judicial Exhortations vs Legislative Action',
    topicId: 'dpsp-fundamental-duties',
    marksCategory: 10,
    examCategory: 'UP_PCSJ',
    examsAppeared: ['UP PCS-J 2016, 2023', 'Bihar Judicial 2018', 'UPSC Law Optional 2018, 2022'],
    typicalMarks: 10,
    targetWordLimit: '160–180 Words | Time: ~7 Mins',
    targetWordMin: 150,
    targetWordMax: 200,
    estimatedPages: '1.0 Page (~20 lines)',
    targetTimeMinutes: 7,
    questionText: `Trace the judicial demand for a "Uniform Civil Code" under Article 44 from Shah Bano to Sarla Mudgal and Shayara Bano. Can a court issue a Writ of Mandamus to enact a UCC?`,
    coreIssues: [
      'Directive under Article 44: State shall endeavour to secure for citizens a Uniform Civil Code.',
      'Judicial frustration over non-implementation in Shah Bano (1985) and Sarla Mudgal (1995).',
      'Conflict between Article 44 and Freedom of Religion under Articles 25 and 26.',
      'Non-justiciability: Courts cannot issue Mandamus to Parliament to legislate (Maharishi Avadhesh).'
    ],
    examinerExpectation:
      'Candidate must analyze Article 44, trace judicial remarks from Shah Bano $\to$ Sarla Mudgal $\to$ John Vallamattom $\to$ Shayara Bano, and clarify that courts cannot issue Mandamus to enact legislation, but can strike down unconstitutional personal law practices.',
    essentialCitations: [
      'Mohd. Ahmed Khan v. Shah Bano Begum ((1985) 2 SCC 556)',
      'Sarla Mudgal v. Union of India ((1995) 3 SCC 635)',
      'John Vallamattom v. Union of India ((2003) 6 SCC 611)',
      'Shayara Bano v. Union of India ((2017) 9 SCC 1)'
    ],
    hoverIntel: {
      topicName: 'Uniform Civil Code (Article 44)',
      topicPillar: 'Part IV: Directive Principles of State Policy (Article 44)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Contemporary Debate)',
      examFrequency: 'Regular in UP PCS-J, Bihar Judicial, and UPSC Law Optional',
      weightagePattern: '10 Marks • 160–180 Words (1.0 Page)',
      targetTimeMinutes: 7,
      examinerTrapWarning:
        'Trap Alert: A court CANNOT issue a Writ of Mandamus directing Parliament or a State to enact a Uniform Civil Code (Maharishi Avadhesh v. UOI 1994). Legislation is the exclusive domain of the legislature!',
      recentTrendAlert: 'Uttarakhand became the first state to enact a state Uniform Civil Code in 2024.',
      coreArticles: ['Article 44', 'Article 25', 'Article 37'],
      benchmarkCases: ['Shah Bano (1985)', 'Sarla Mudgal (1995)', 'John Vallamattom (2003)']
    },
    answerBlueprint: {
      step1Intro: 'Quote Article 44: "The State shall endeavour to secure for the citizens a Uniform Civil Code throughout the territory of India." As a DPSP under Article 37, it is non-justiciable.',
      step2DoctrinalCore: 'Trace Judicial Exhortations: (1) Shah Bano (1985, CJI Chandrachud): Regretted that Article 44 remained a dead letter, (2) Sarla Mudgal (1995, Justice Kuldip Singh): Held conversion to Islam solely to practice polygamy was an abuse of personal law, reiterating the need for UCC, (3) John Vallamattom (2003): Struck down Section 118 Indian Succession Act discriminatory to Christians.',
      step3PrecedentEvolution: 'Explain Court\'s Inability to Issue Mandamus (Maharishi Avadhesh, 1994): Courts cannot issue a writ of Mandamus directing the legislature to enact a law.',
      step4Conclusion: 'Conclude with modern piecemeal approach: In Shayara Bano (2017), the Court struck down Triple Talaq directly under Article 14 rather than waiting for a comprehensive code.'
    },
    fullModelAnswer: `I. TEXTUAL MANDATE & NON-JUSTICIABILITY:
Article 44 directs that "The State shall endeavour to secure for the citizens a Uniform Civil Code throughout the territory of India."
Being placed in Part IV, Article 44 is non-justiciable. In Maharishi Avadhesh v. Union of India (1994), the Supreme Court ruled that no Writ of Mandamus can be issued to direct Parliament or a State Legislature to enact a Uniform Civil Code, as lawmaking is the exclusive prerogative of the legislature.

II. THE TRAJECTORY OF JUDICIAL EXHORTATIONS:
Frustrated by legislative inertia, superior courts repeatedly called for a UCC:
1. Shah Bano (1985): CJI Y.V. Chandrachud observed that a common civil code would remove disparate loyalties to laws having conflicting ideologies and foster national integration.
2. Sarla Mudgal (1995): In a case where Hindu men converted to Islam solely to solemnize second marriages without dissolving the first, Justice Kuldip Singh held such marriages void under Section 494 IPC and urged the Prime Minister to revisit Article 44.
3. John Vallamattom (2003): CJI V.N. Khare reiterated that personal laws must yield to gender justice and secular governance.

III. THE MODERN JURISPRUDENTIAL REORIENTATION:
Rather than waiting for a comprehensive statutory UCC, the Supreme Court has adopted an incremental rights-based approach: testing discriminatory personal law practices directly against Part III fundamental rights (striking down Talaq-e-Biddat in Shayara Bano, 2017).

CONCLUSION:
Article 44 envisions gender equality and national cohesion; while courts cannot legislate it, they ensure personal laws do not violate fundamental rights.`,
    scoringRubric: [
      { criterion: 'Article 44 text & Maharishi Avadhesh ban on Mandamus', marks: 2.5 },
      { criterion: 'Shah Bano and Sarla Mudgal judicial exhortations', marks: 3.5 },
      { criterion: 'Piecemeal rights-based testing in Shayara Bano', marks: 2.5 },
      { criterion: 'Gender justice & national integration synthesis', marks: 1.5 }
    ]
  },

  {
    id: 'mains-10m-money-bills-speaker',
    title: 'Money Bills under Article 110 & Speaker\'s Finality: Aadhaar to Rojer Mathew',
    topicId: 'legislature-privileges-anti-defection',
    marksCategory: 10,
    examCategory: 'UPSC_LAW',
    examsAppeared: ['UPSC Law Optional 2021, 2023', 'DJS 2022', 'UP PCS-J 2023'],
    typicalMarks: 10,
    targetWordLimit: '160–180 Words | Time: ~7 Mins',
    targetWordMin: 150,
    targetWordMax: 200,
    estimatedPages: '1.0 Page (~20 lines)',
    targetTimeMinutes: 7,
    questionText: `Can the Speaker's certification of a Bill as a "Money Bill" under Article 110(3) be subjected to Judicial Review? Discuss the controversy in the Aadhaar Case and the reference to a 7-Judge Bench in Rojer Mathew.`,
    coreIssues: [
      'Exhaustive definition of Money Bill under Article 110(1) (the word "only").',
      'The finality clause under Article 110(3) vs Article 122 procedural irregularity.',
      'Bypassing the Rajya Sabha: Executive convenience vs bicameral federalism.',
      'The majority vs minority divergence in K.S. Puttaswamy (Aadhaar 2018) and reference in Rojer Mathew (2019).'
    ],
    examinerExpectation:
      'Candidate must explain Article 110(1) strict definition ("only"), contrast the majority opinion in Aadhaar (2018) with Justice Chandrachud\'s dissent calling it a "fraud on the Constitution," and detail Rojer Mathew (2019) doubting the majority and referring it to a 7-Judge Bench.',
    essentialCitations: [
      'K.S. Puttaswamy v. Union of India (Aadhaar Case) ((2019) 1 SCC 1)',
      'Rojer Mathew v. South Indian Bank Ltd. ((2020) 6 SCC 1; 5-Judge Bench)',
      'Association for Democratic Reforms v. Union of India (Electoral Bonds 2024)'
    ],
    hoverIntel: {
      topicName: 'Money Bills (Article 110) & Judicial Review',
      topicPillar: 'Part V: The Parliament (Articles 110 & 122)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Constitution Bench Reference)',
      examFrequency: 'Tested in UPSC Law Optional and DJS Civil Law',
      weightagePattern: '10 Marks • 160–180 Words (1.0 Page)',
      targetTimeMinutes: 7,
      examinerTrapWarning:
        'Trap Alert: Do not say Speaker\'s certificate under Article 110(3) is absolute! In Rojer Mathew (2019), a 5-Judge Bench held that Speaker\'s certification is subject to judicial review if it violates constitutional provisions, referring Aadhaar to 7 judges!',
      recentTrendAlert: 'Awaiting hearing before a 7-Judge Constitution Bench.',
      coreArticles: ['Article 110(1)', 'Article 110(3)', 'Article 122'],
      benchmarkCases: ['Aadhaar Case (2018)', 'Rojer Mathew (2019)']
    },
    answerBlueprint: {
      step1Intro: 'Quote Article 110(1): A Bill is deemed to be a Money Bill if it contains "only" provisions dealing with taxation, borrowings, or Consolidated Fund of India expenditure.',
      step2DoctrinalCore: 'Analyze the Bicameral Significance: Bypassing the Rajya Sabha violates bicameralism and federalism. Under Article 110(3), the Speaker\'s decision is declared "final".',
      step3PrecedentEvolution: 'Detail the Aadhaar Dispute (2018): Majority upheld Aadhaar as a Money Bill under Section 7 (subsidy from CFI); Justice Chandrachud dissented, calling the bypass of Rajya Sabha a "fraud on the Constitution".',
      step4Conclusion: 'Detail Rojer Mathew (2019, 5-Judge Bench): The Bench doubted the Aadhaar majority on the interpretation of "only" and referred the issue of Money Bills to a 7-Judge Constitution Bench.'
    },
    fullModelAnswer: `I. THE CONSTITUTIONAL DEFINITION & ARTICLE 110(1):
Under Article 110(1), a Bill is a Money Bill if it contains "ONLY" provisions dealing with specified fiscal matters: taxation, government borrowing, custody of the Consolidated Fund of India (CFI), and audit.
The Rajya Sabha cannot amend or reject a Money Bill; it can only make recommendations within 14 days. Bypassing the Upper House directly damages bicameral federalism.

II. THE FINALITY CLAUSE (ARTICLE 110(3)) & JUDICIAL REVIEW:
Article 110(3) provides that if any question arises whether a Bill is a Money Bill, the decision of the Speaker of the Lok Sabha shall be final.
However, Article 122 protects proceedings only from challenge on grounds of "mere irregularity of procedure." Substantive illegality or unconstitutionality remains subject to Judicial Review.

III. THE AADHAAR SPLIT & THE 7-JUDGE REFERENCE (ROJER MATHEW):
1. The Aadhaar Verdict (2018): The 4:1 majority upheld the passage of the Aadhaar Act as a Money Bill, reasoning that Section 7 tied benefits to CFI expenditure. Justice Chandrachud dissented, holding that the presence of non-fiscal provisions (civil registration, private access) violated the strict word "only" in Article 110, terming it a "subversion of bicameral democracy."
2. Rojer Mathew v. South Indian Bank (2019, 5-Judge Bench): While examining the passage of the Finance Act, 2017 altering Tribunal appointments, the Constitution Bench doubted the correctness of the Aadhaar majority and referred the scope of Article 110 to a 7-Judge Constitution Bench.

CONCLUSION:
The finality of the Speaker's certificate cannot override constitutional boundaries. Awaiting a 7-Judge resolution, judicial review guards bicameralism against executive expedience.`,
    scoringRubric: [
      { criterion: 'Art. 110(1) strict definition ("only") & bicameral significance', marks: 2.5 },
      { criterion: 'Art. 110(3) finality vs Art. 122 substantive illegality', marks: 2.5 },
      { criterion: 'Aadhaar (2018) split & Chandrachud fraud on constitution dissent', marks: 3 },
      { criterion: 'Rojer Mathew 2019 5-Judge reference to 7 judges', marks: 2 }
    ]
  },

  {
    id: 'mains-10m-inter-state-trade-301',
    title: 'Freedom of Trade, Commerce & Intercourse under Article 301–304: Regulatory vs Restrictive Measures',
    topicId: 'centre-state-relations-pith-substance',
    marksCategory: 10,
    examCategory: 'UP_PCSJ',
    examsAppeared: ['UP PCS-J 2014, 2018', 'Bihar Judicial 2016, 2021', 'UPSC Law Optional 2015, 2020'],
    typicalMarks: 10,
    targetWordLimit: '160–180 Words | Time: ~7 Mins',
    targetWordMin: 150,
    targetWordMax: 200,
    estimatedPages: '1.0 Page (~20 lines)',
    targetTimeMinutes: 7,
    questionText: `Discuss the scope of the Freedom of Trade, Commerce and Intercourse under Article 301. Distinguish between measures that "restrict" trade and measures that merely "regulate" or facilitate trade under the Automobile Transport doctrine.`,
    coreIssues: [
      'Article 301 guarantee: Freedom of trade throughout the territory of India.',
      'Atiabari Tea Co. (1961) direct and immediate restriction test.',
      'Automobile Transport (1962) 7-Judge Bench regulatory and compensatory tax doctrine.',
      'Jindal Stainless (2016) 9-Judge Bench dismantling compensatory tax and upholding nondiscriminatory entry taxes under Article 304(a).'
    ],
    examinerExpectation:
      'Candidate must explain Article 301, trace Atiabari $\to$ Automobile Transport (1962), and detail the 9-Judge Constitution Bench in Jindal Stainless (2016) which discarded the compensatory tax theory and established the non-discrimination test under Article 304(a).',
    essentialCitations: [
      'Atiabari Tea Co. Ltd. v. State of Assam (1961 1 SCR 809)',
      'Automobile Transport (Rajasthan) Ltd. v. State of Rajasthan (1963 1 SCR 491)',
      'Jindal Stainless Ltd. v. State of Haryana ((2017) 12 SCC 1; 9-Judge Bench)'
    ],
    hoverIntel: {
      topicName: 'Freedom of Trade (Article 301) & Entry Tax',
      topicPillar: 'Part XIII: Trade, Commerce & Intercourse (Articles 301–304)',
      examImportance: '⭐⭐⭐⭐ High Priority Core',
      examFrequency: 'Appeared in UP PCS-J, Bihar Judicial and UPSC Law Optional',
      weightagePattern: '10 Marks • 160–180 Words (1.0 Page)',
      targetTimeMinutes: 7,
      examinerTrapWarning:
        'Trap Alert: The "Compensatory Tax" doctrine of Automobile Transport (1962) was EXPLICITLY OVERRULED by the 9-Judge Bench in Jindal Stainless (2016)! Do not present compensatory taxes as current law!',
      recentTrendAlert: 'Jindal Stainless (2016) 9-Judge Bench is the governing landmark authority on entry tax.',
      coreArticles: ['Article 301', 'Article 302', 'Article 304(a)', 'Article 304(b)'],
      benchmarkCases: ['Atiabari (1961)', 'Automobile Transport (1962)', 'Jindal Stainless (2016)']
    },
    answerBlueprint: {
      step1Intro: 'Quote Article 301: Subject to Part XIII, trade, commerce and intercourse throughout the territory of India shall be free, establishing an integrated economic union.',
      step2DoctrinalCore: 'Trace Atiabari (1961): Taxes that directly and immediately restrict trade violate Article 301 unless saved by Article 304(b).',
      step3PrecedentEvolution: 'Detail Automobile Transport (1962, 7-Judge Bench): Introduced the Compensatory Tax theory (fees/taxes for roads/bridges regulate rather than restrict trade).',
      step4Conclusion: 'Detail the 9-Judge Overruling in Jindal Stainless (2016): Overruled the compensatory tax test. Taxes are not restrictions per se under Article 301 unless discriminatory under Article 304(a).'
    },
    fullModelAnswer: `I. CONSTITUTIONAL FOUNDATION OF ARTICLE 301:
Article 301 declares that "trade, commerce and intercourse throughout the territory of India shall be free." Inspired by Section 92 of the Australian Constitution, its object is to preserve the economic unity of India by breaking down inter-State tariff barriers.

II. THE EVOLUTION THROUGH HISTORIC CONSTITUTION BENCHES:

1. The Direct and Immediate Test (Atiabari Tea Co., 1961):
A 5-Judge Bench held that taxing laws fall within Article 301 if they impose a "direct and immediate restriction" on the movement of goods. Assam's carriage tax on tea moving through its roads was held to violate Article 301.

2. The Regulatory & Compensatory Tax Doctrine (Automobile Transport, 1962):
A 7-Judge Bench held that regulatory measures (traffic rules) and "compensatory taxes" (taxes levied for facilities provided, like roads and bridges) do NOT violate Article 301 because they facilitate, rather than restrict, trade.

3. The 9-Judge Bench Watershed: Jindal Stainless (2016):
In Jindal Stainless v. State of Haryana (2016), a 9-Judge Constitution Bench, by a 7:2 majority, overhauled Part XIII jurisprudence:
- Overruled Compensatory Tax Doctrine: Held the concept of "compensatory tax" judicially unworkable and alien to constitutional text.
- Non-Discriminatory Taxes are Valid: Taxes are the sovereign lifeblood of States. A state tax violates Article 301 ONLY if it discriminates between goods imported from other states and locally manufactured goods under Article 304(a). Entry taxes levied uniformly without local discrimination are fully constitutional.

CONCLUSION:
Part XIII guarantees a single unified national economic market while preserving the fiscal autonomy of States under Article 304(a).`,
    scoringRubric: [
      { criterion: 'Article 301 economic unity purpose & Australian inspiration', marks: 2 },
      { criterion: 'Atiabari 1961 direct & immediate restriction test', marks: 2.5 },
      { criterion: 'Automobile Transport 1962 compensatory tax formulation', marks: 2.5 },
      { criterion: 'Jindal Stainless 2016 9-Judge Bench overruling & conclusion', marks: 3 }
    ]
  },

  {
    id: 'mains-10m-right-to-education-art21a',
    title: 'Right to Education under Article 21A & The 25% Private School Quota (Unaided Schools)',
    topicId: 'art-21-due-process',
    marksCategory: 10,
    examCategory: 'UP_PCSJ',
    examsAppeared: ['UP PCS-J 2015, 2022', 'MP Judiciary 2017, 2021', 'UPSC Law 2018'],
    typicalMarks: 10,
    targetWordLimit: '150–180 Words | Time: ~7 Mins',
    targetWordMin: 140,
    targetWordMax: 200,
    estimatedPages: '1.0 Page (~20 lines)',
    targetTimeMinutes: 7,
    questionText: `Discuss the constitutional validity of Section 12(1)(c) of the Right of Children to Free and Compulsory Education Act, 2009 mandating a 25% quota in unaided private schools under Article 21A. Refer to Society for Unaided Private Schools and Pramati Educational Trust.`,
    coreIssues: [
      '86th Constitutional Amendment (2002) inserting Article 21A (ages 6 to 14).',
      'Section 12(1)(c) of the RTE Act mandating 25% admission for disadvantaged children in private unaided schools.',
      'Challenge under Article 19(1)(g) occupational freedom.',
      'Exemption of minority institutions under Pramati Educational Trust (2014).'
    ],
    examinerExpectation:
      'Candidate must explain Mohini Jain $\to$ Unni Krishnan $\to$ 86th Amendment inserting Article 21A. Detail Society for Unaided Private Schools (2012) upholding the 25% quota, and Pramati Educational Trust (2014) exempting aided/unaided minority schools under Article 30(1).',
    essentialCitations: [
      'Mohini Jain v. State of Karnataka ((1992) 3 SCC 666)',
      'Unni Krishnan, J.P. v. State of A.P. ((1993) 1 SCC 645)',
      'Society for Unaided Private Schools of Rajasthan v. UOI ((2012) 6 SCC 1)',
      'Pramati Educational and Cultural Trust v. Union of India ((2014) 8 SCC 1; 5-Judge Bench)'
    ],
    hoverIntel: {
      topicName: 'Right to Education (Article 21A)',
      topicPillar: 'Part III: Fundamental Rights • Education (Article 21A)',
      examImportance: '⭐⭐⭐⭐ High Priority Benchmark',
      examFrequency: 'Tested in UP PCS-J, MP Judiciary, and UPSC Law',
      weightagePattern: '10 Marks • 150–180 Words (1.0 Page)',
      targetTimeMinutes: 7,
      examinerTrapWarning:
        'Trap Alert: The RTE Act applies to private unaided NON-MINORITY schools, but is completely INAPPLICABLE to both aided and unaided Minority Institutions under Article 30(1) (Pramati Educational Trust 2014)!',
      recentTrendAlert: 'Regularly tested in connection with nursery admissions and reimbursement disputes.',
      coreArticles: ['Article 21A', 'Article 19(1)(g)', 'Article 30(1)'],
      benchmarkCases: ['Unni Krishnan (1993)', 'Society for Unaided Schools (2012)', 'Pramati Educational Trust (2014)']
    },
    answerBlueprint: {
      step1Intro: 'Trace genesis: From Mohini Jain and Unni Krishnan (1993) to the 86th Constitutional Amendment (2002) inserting Article 21A.',
      step2DoctrinalCore: 'Analyze Section 12(1)(c) RTE Act: Mandates all private schools to admit at least 25% children from weaker sections in entry class with state reimbursement.',
      step3PrecedentEvolution: 'Detail Society for Unaided Private Schools (2012): Upheld the 25% mandate as a reasonable restriction under Article 19(6) advancing substantive equality.',
      step4Conclusion: 'Detail Pramati Educational Trust (2014, 5-Judge Bench): Upheld RTE Act for non-minority private schools, but held RTE completely inapplicable to minority educational institutions (aided or unaided) under Article 30(1).'
    },
    fullModelAnswer: `I. EVOLUTION OF ARTICLE 21A:
In Mohini Jain (1992) and Unni Krishnan (1993), the Supreme Court derived the right to education from Article 21. Responding to this, Parliament enacted the 86th Constitutional Amendment (2002) inserting Article 21A:
"The State shall provide free and compulsory education to all children of the age of six to fourteen years in such manner as the State may, by law, determine."
To enforce this, Parliament enacted the RTE Act, 2009.

II. THE 25% PRIVATE SCHOOL MANDATE: SOCIETY FOR UNAIDED PRIVATE SCHOOLS (2012):
Section 12(1)(c) of the RTE Act mandates private unaided schools to reserve at least 25% of seats in Class I for children belonging to disadvantaged groups and weaker sections, reimbursed by the State:
- The 2:1 majority upheld the 25% quota as a valid reasonable restriction on private educators under Article 19(6).
- Education is a charitable public mission, not a purely commercial trade; private players must share the constitutional burden of universalizing primary education.

III. THE MINORITY EXEMPTION: PRAMATI TRUST (2014, 5-JUDGE BENCH):
In Pramati Educational Trust v. Union of India (2014), a Constitution Bench resolved the minority conflict:
- The RTE Act cannot be applied to Minority Educational Institutions (whether aided or unaided). Mandating state quotas on minority schools infringes their fundamental right to establish and administer institutions under Article 30(1).

CONCLUSION:
Article 21A successfully democratizes classroom access in non-minority schools while preserving minority institutional autonomy.`,
    scoringRubric: [
      { criterion: '86th Amendment & Unni Krishnan background', marks: 2 },
      { criterion: 'Section 12(1)(c) RTE 25% mandate & Society for Unaided Schools holding', marks: 3.5 },
      { criterion: 'Pramati Trust 2014 minority institution exemption under Art. 30(1)', marks: 3.5 },
      { criterion: 'Balanced synthesis on educational access', marks: 1 }
    ]
  },

  {
    id: 'mains-10m-witness-protection-fair-trial',
    title: 'Witness Protection & Fair Trial under Article 21: Zahira Sheikh to Mahender Chawla',
    topicId: 'art-20-22-custodial-forensics',
    marksCategory: 10,
    examCategory: 'PROSECUTION',
    examsAppeared: ['Prosecution (CBI / State APO) 2017, 2022', 'DJS Criminal Law 2018, 2023', 'Bihar APO 2021'],
    typicalMarks: 10,
    targetWordLimit: '150–180 Words | Time: ~7 Mins',
    targetWordMin: 140,
    targetWordMax: 200,
    estimatedPages: '1.0 Page (~20 lines)',
    targetTimeMinutes: 7,
    questionText: `Discuss the constitutional dimension of "Witness Protection" as a facet of the Right to Fair Trial under Article 21. How did Mahender Chawla v. Union of India transform the Witness Protection Scheme into law?`,
    coreIssues: [
      'Witnesses as the "eyes and ears of justice" (Bentham).',
      'Hostile witnesses due to intimidation and state apathy violating Article 21.',
      'The Best Bakery Case (Zahira Sheikh) retrial outside the State.',
      'Enactment of the Witness Protection Scheme, 2018 endorsed in Mahender Chawla under Article 142.'
    ],
    examinerExpectation:
      'Candidate must explain Jeremy Bentham\'s aphorism, cite Zahira Sheikh (Best Bakery 2004), and detail Mahender Chawla (2019) where the Supreme Court made the Witness Protection Scheme, 2018 binding law under Articles 141 and 142.',
    essentialCitations: [
      'Zahira Habibullah Sheikh v. State of Gujarat (Best Bakery Case) ((2004) 4 SCC 158)',
      'National Human Rights Commission v. State of Gujarat ((2009) 6 SCC 767)',
      'Mahender Chawla v. Union of India ((2019) 14 SCC 615)'
    ],
    hoverIntel: {
      topicName: 'Witness Protection & Fair Trial (Article 21)',
      topicPillar: 'Part III: Fundamental Rights • Criminal Due Process (Article 21)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Prosecution Core)',
      examFrequency: 'Direct core question in CBI PP and State APO examinations',
      weightagePattern: '10 Marks • 150–180 Words (1.0 Page)',
      targetTimeMinutes: 7,
      examinerTrapWarning:
        'Trap Alert: Fair trial is NOT a one-sided privilege of the accused alone! The victim, the witnesses, and society are equally entitled to a fair trial under Article 21 (Zahira Sheikh & Mahender Chawla)!',
      recentTrendAlert: 'Witness Protection Scheme formalized in Chapter XXIV Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023.',
      coreArticles: ['Article 21', 'Article 141', 'Article 142', 'Section 398 BNSS'],
      benchmarkCases: ['Zahira Sheikh (2004)', 'Mahender Chawla (2019)']
    },
    answerBlueprint: {
      step1Intro: 'Quote Jeremy Bentham: "Witnesses are the eyes and ears of justice." If witnesses are blinded by fear or intimidation, justice is compromised.',
      step2DoctrinalCore: 'Analyze Zahira Habibullah Sheikh (Best Bakery, 2004): Where key witnesses turned hostile under terror, the Court transferred the trial outside Gujarat, declaring that a fair trial under Article 21 belongs equally to victims and witnesses.',
      step3PrecedentEvolution: 'Detail Mahender Chawla v. Union of India (2019): The Court exercised Article 142 powers to endorse the Witness Protection Scheme, 2018, declaring it binding law across all States under Article 141.',
      step4Conclusion: 'Highlight institutional mechanisms: Threat Assessment Reports, in-camera trials, anonymity of identity, relocation, and alignment with Section 398 BNSS, 2023.'
    },
    fullModelAnswer: `I. WITNESSES AS THE BULWARK OF JUSTICE:
Jeremy Bentham observed that "witnesses are the eyes and ears of justice." In Indian criminal trials, widespread witness hostility caused by threats, coercion, and physical intimidation by powerful accused persons represented a systemic breakdown of the criminal justice system.

II. THE BILATERAL RIGHT TO FAIR TRIAL (BEST BAKERY CASE, 2004):
In Zahira Habibullah Sheikh v. State of Gujarat (2004) 4 SCC 158, the Supreme Court ruled that the Right to a Fair Trial under Article 21 is not the exclusive monopoly of the accused:
- The victim, the witnesses, and society are equally entitled to a fair trial.
- When witnesses turn hostile under coercion, the trial is a mockery. The Court ordered a complete retrial outside Gujarat to protect witnesses.

III. THE BINDING RECKONING: MAHENDER CHAWLA (2019):
In Mahender Chawla v. Union of India (2019) 14 SCC 615, where witnesses in sensational sexual assault trials were murdered and assaulted, the Supreme Court stepped in:
1. Constitutional Status of Witness Protection: Witness protection was declared an inalienable component of the rule of law and Article 21.
2. Scheme Given Force of Law: Invoking Articles 141 and 142, the Court gave the draft "Witness Protection Scheme, 2018" the force of binding statutory law across all States and Union Territories until Parliament enacted legislation.
3. Categorization & Measures: Introduced Threat Assessment Units, identity protection, witness anonymity during deposition, and installation of security devices (now codified under Section 398 BNSS, 2023).`,
    scoringRubric: [
      { criterion: 'Bentham aphorism & systemic witness hostility crisis', marks: 1.5 },
      { criterion: 'Zahira Sheikh 2004 bilateral fair trial doctrine', marks: 3 },
      { criterion: 'Mahender Chawla 2019 Article 141/142 statutory enforcement', marks: 4 },
      { criterion: 'BNSS Section 398 alignment & conclusion', marks: 1.5 }
    ]
  },

  {
    id: 'mains-10m-bail-as-rule-balchand',
    title: 'Bail Jurisprudence as a Fundamental Right: "Bail is Rule, Jail is Exception" (Balchand to Antil)',
    topicId: 'art-20-22-custodial-forensics',
    marksCategory: 10,
    examCategory: 'PROSECUTION',
    examsAppeared: ['Prosecution (CBI / State APO) 2015, 2022', 'DJS Criminal Law 2018, 2023', 'MP Judiciary 2019, 2023'],
    typicalMarks: 10,
    targetWordLimit: '150–180 Words | Time: ~7 Mins',
    targetWordMin: 140,
    targetWordMax: 200,
    estimatedPages: '1.0 Page (~20 lines)',
    targetTimeMinutes: 7,
    questionText: `Trace the constitutional trajectory of the maxim "Bail is the rule, Jail is the exception" under Article 21 from State of Rajasthan v. Balchand to Satender Kumar Antil v. CBI.`,
    coreIssues: [
      'Presumption of innocence until proven guilty as a basic human right.',
      'Justice Krishna Iyer\'s foundational formulation in State of Rajasthan v. Balchand (1977).',
      'The comprehensive bail code issued in Satender Kumar Antil v. CBI (2022).',
      'Pre-trial incarceration operating as a punitive measure violating Article 21.'
    ],
    examinerExpectation:
      'Candidate must cite Justice Krishna Iyer in State of Rajasthan v. Balchand (1977), explain Gudikanti Narasimhulu, and detail Satender Kumar Antil (2022) guidelines categorizing offences (Category A to D) and curbing unnecessary arrests under Section 41A CrPC / Section 35(3) BNSS.',
    essentialCitations: [
      'State of Rajasthan v. Balchand ((1977) 4 SCC 308)',
      'Gudikanti Narasimhulu v. Public Prosecutor ((1978) 1 SCC 240)',
      'Arnesh Kumar v. State of Bihar ((2014) 8 SCC 273)',
      'Satender Kumar Antil v. CBI ((2022) 10 SCC 51)'
    ],
    hoverIntel: {
      topicName: 'Bail Jurisprudence: Bail is Rule, Jail is Exception',
      topicPillar: 'Part III: Fundamental Rights • Personal Liberty (Article 21)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Prosecution Benchmark)',
      examFrequency: 'Top recurring question in Criminal Law papers across all States',
      weightagePattern: '10 Marks • 150–180 Words (1.0 Page)',
      targetTimeMinutes: 7,
      examinerTrapWarning:
        'Trap Alert: Detail the 3 cardinal criteria for denying bail: (1) Flight risk, (2) Tampering with evidence, (3) Threatening witnesses. If these 3 risks do not exist, pre-trial detention is punitive and violates Article 21!',
      recentTrendAlert: 'Reaffirmed in Manish Sisodia (2024) and Hemant Soren (2024) bail orders.',
      coreArticles: ['Article 21', 'Section 437/439 CrPC', 'Section 480/483 BNSS'],
      benchmarkCases: ['Balchand (1977)', 'Arnesh Kumar (2014)', 'Satender Antil (2022)']
    },
    answerBlueprint: {
      step1Intro: 'Quote the foundational aphorism: "The basic rule of our criminal jurisprudence is bail, not jail, except where there are circumstances suggestive of fleeing from justice or thwarting the course of justice" (Justice Krishna Iyer, 1977).',
      step2DoctrinalCore: 'Analyze Presumption of Innocence: Under Article 21, pre-trial incarceration without conviction operates as punishment; an accused cannot be detained as a punitive measure before trial.',
      step3PrecedentEvolution: 'Detail Arnesh Kumar (2014) and Satender Kumar Antil (2022): Supreme Court categorized offences into 4 tiers (A, B, C, D) and mandated that for Category A (punishable with 7 years or less), no routine arrest should be made without compliance with Section 41A CrPC.',
      step4Conclusion: 'Conclude with the call for a standalone "Bail Act" to end the culture of remand and restore dignity to undertrials.'
    },
    fullModelAnswer: `I. THE CONSTITUTIONAL AXIOM (BALCHAND, 1977):
In State of Rajasthan v. Balchand (1977) 4 SCC 308, Justice V.R. Krishna Iyer laid down the bedrock of Indian bail jurisprudence:
"The basic rule of our criminal jurisprudence is bail, not jail, except where there are circumstances suggestive of fleeing from justice or thwarting the course of justice."
In Gudikanti Narasimhulu (1978), the Court held that personal liberty under Article 21 is too precious to be curtailed by mechanical remand.

II. THE THREE-FOLD TEST FOR DENIAL OF BAIL:
Pre-trial detention cannot be punitive. Bail can be refused ONLY if the prosecution establishes:
1. Flight risk (likelihood of accused absconding);
2. Risk of tampering with evidence; or
3. Threatening witnesses or influencing trial.

III. THE MODERN BAIL DIRECTIVES: SATENDER KUMAR ANTIL (2022):
Recognizing that Indian prisons are congested with over 75% undertrials, the Supreme Court in Satender Kumar Antil v. CBI (2022) issued comprehensive binding directions:
1. Category-Wise Guidelines: Divided offences into Categories A (up to 7 years imprisonment), B (serious offences), C (special laws like NDPS/PMLA), and D (economic offences).
2. Category A Protections: For offences punishable up to 7 years, no mechanical arrest is permitted without adhering to Section 41/41A CrPC (now Section 35 BNSS). Bail applications must be decided without taking the accused into physical custody.
3. Call for a Standalone Bail Act: The Court urged Parliament to enact a separate Bail Act, akin to the UK Bail Act 1976.

CONCLUSION:
Depriving pre-trial liberty without trial is antithetical to Article 21. Bail safeguards the presumption of innocence.`,
    scoringRubric: [
      { criterion: 'Justice Krishna Iyer Balchand 1977 maxim & Art 21 basis', marks: 3 },
      { criterion: '3-fold criteria for denying bail (flight, tampering, threats)', marks: 2.5 },
      { criterion: 'Satender Kumar Antil 2022 categorization & arrest curbs', marks: 3.5 },
      { criterion: 'Bail Act call & conclusion', marks: 1 }
    ]
  },

  {
    id: 'mains-10m-death-penalty-mitigation',
    title: 'Death Penalty Jurisprudence & Mitigating Circumstances: Bachan Singh to Manoj (2022)',
    topicId: 'art-20-22-custodial-forensics',
    marksCategory: 10,
    examCategory: 'PROSECUTION',
    examsAppeared: ['Prosecution (CBI / State APO) 2016, 2023', 'DJS Criminal Law 2017, 2022', 'UP PCS-J 2018'],
    typicalMarks: 10,
    targetWordLimit: '160–180 Words | Time: ~7 Mins',
    targetWordMin: 150,
    targetWordMax: 200,
    estimatedPages: '1.0 Page (~20 lines)',
    targetTimeMinutes: 7,
    questionText: `Critically analyze the "Rarest of Rare Cases" doctrine formulated in Bachan Singh. How has the Supreme Court in Manoj v. State of M.P. (2022) institutionalized the mandatory collection of mitigating factors prior to sentencing?`,
    coreIssues: [
      'Constitutionality of death penalty under Section 302 IPC / Section 103 BNS (Bachan Singh 1980).',
      'The "Rarest of Rare" doctrine and the Aggravating vs Mitigating Circumstances balance sheet.',
      'Life imprisonment is the rule, death penalty is the exceptional alternative.',
      'Mandatory psychiatric evaluation, jail conduct report, and mitigation inquiry in Manoj (2022).'
    ],
    examinerExpectation:
      'Candidate must explain Bachan Singh (1980) 5-Judge Bench, detail the twin questions (no possibility of reformation, alternative option closed), and explain Manoj (2022) requiring trial courts to collect psychological evaluation and socio-economic background reports before sentencing.',
    essentialCitations: [
      'Bachan Singh v. State of Punjab ((1980) 2 SCC 684; 5-Judge Bench)',
      'Machhi Singh v. State of Punjab ((1983) 3 SCC 470)',
      'Santosh Kumar Satishbhushan Bariyar v. State of Maharashtra ((2009) 6 SCC 498)',
      'Manoj v. State of M.P. ((2023) 2 SCC 353; 3-Judge Bench)'
    ],
    hoverIntel: {
      topicName: 'Death Penalty & Mitigating Circumstances (Manoj 2022)',
      topicPillar: 'Part III: Fundamental Rights • Capital Punishment (Article 21)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Sentencing Core)',
      examFrequency: 'Regular in DJS Criminal Law, UP PCS-J, and CBI PP',
      weightagePattern: '10 Marks • 160–180 Words (1.0 Page)',
      targetTimeMinutes: 7,
      examinerTrapWarning:
        'Trap Alert: A sentencing court CANNOT look merely at the brutality of the crime! Bachan Singh mandates focusing equally on the CRIMINAL (age, socio-economic trauma, possibility of reformation). Overemphasizing crime brutality alone violates Article 21!',
      recentTrendAlert: 'Referred to a 5-Judge Constitution Bench in 2022 on same-day sentencing.',
      coreArticles: ['Article 21', 'Section 235(2) CrPC', 'Section 258 BNSS'],
      benchmarkCases: ['Bachan Singh (1980)', 'Machhi Singh (1983)', 'Manoj (2022)']
    },
    answerBlueprint: {
      step1Intro: 'Detail Bachan Singh v. State of Punjab (1980, 5-Judge Constitution Bench): Upheld death penalty under Section 302 IPC, holding it does not violate Articles 14, 19, or 21.',
      step2DoctrinalCore: 'Formulate the Rarest of Rare Test: Death penalty is exceptional. Life imprisonment is the rule. Death penalty is permissible ONLY when the alternative option of life imprisonment is unquestionably foreclosed.',
      step3PrecedentEvolution: 'Explain the Balance Sheet: Balance Aggravating Circumstances (crime brutality, vulnerability of victim) against Mitigating Circumstances (young age, poverty, remorse, probability of reformation).',
      step4Conclusion: 'Detail Manoj v. State of M.P. (2022): Trial courts must mandatory obtain a psychological evaluation, jail conduct report, and socio-economic inquiry before imposing death sentence.'
    },
    fullModelAnswer: `I. THE CONSTITUTION BENCH MANDATE: BACHAN SINGH (1980):
In Bachan Singh v. State of Punjab (1980) 2 SCC 684, a 5-Judge Constitution Bench upheld the constitutionality of capital punishment under Section 302 IPC, subject to strict procedural safeguards under Article 21:
1. Life Imprisonment is the Rule: The normal sentence for murder is life imprisonment; the death penalty is a rare, exceptional alternative.
2. The "Rarest of Rare" Formula: Death penalty can be inflicted ONLY in the "rarest of rare cases when the alternative option is unquestionably foreclosed."
3. The Twin Threshold Inquiry:
   - Is there something uncommon about the crime that renders life imprisonment inadequate?
   - Is the possibility of reformation and rehabilitation of the accused completely eliminated?

II. THE AGGRAVATING VS MITIGATING BALANCE SHEET:
Courts must evaluate not merely the brutality of the crime (Machhi Singh, 1983), but the character of the criminal:
- Mitigating Factors: Young age, mental illness, socio-economic deprivation, lack of criminal history, and probability of reform.

III. INSTITUTIONALIZATION OF MITIGATION: MANOJ V. STATE OF M.P. (2022):
Recognizing that trial courts routinely ignored mitigating evidence, a 3-Judge Bench in Manoj (2022) mandated strict pre-sentencing protocols:
- State must collect comprehensive socio-economic and psychiatric evaluation reports of the accused at the trial stage.
- Jail authorities must furnish conduct reports regarding prison behaviour and work contributions.

CONCLUSION:
Capital sentencing demands rigorous evidence showing that the offender is beyond human redemption.`,
    scoringRubric: [
      { criterion: 'Bachan Singh 1980 constitutionality & Rarest of Rare formula', marks: 3 },
      { criterion: 'Twin questions (foreclosure of life term & reformation)', marks: 2.5 },
      { criterion: 'Aggravating vs Mitigating balance sheet', marks: 2 },
      { criterion: 'Manoj 2022 mandatory psychological & jail conduct inquiry', marks: 2.5 }
    ]
  },

  // =========================================================================
  // 15 MARKS / 250–300 WORDS (TIER 3: IN-DEPTH PROBLEM & BENCHMARK CASES)
  // =========================================================================
  {
    id: 'mains-15m-peaceful-protest-shaheen-bagh',
    title: 'Right to Peaceful Protest vs Public Roads: Shaheen Bagh (Amit Sahni 2020)',
    topicId: 'art-19-speech-reasonable-restrictions',
    marksCategory: 15,
    examCategory: 'DJS',
    examsAppeared: ['DJS 2022', 'UPSC Law Optional 2021, 2023', 'UP PCS-J 2023'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~12 Mins',
    targetWordMin: 230,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~30 lines)',
    targetTimeMinutes: 12,
    questionText: `Critically examine the constitutional balance between the Right to Peaceful Assembly under Article 19(1)(b) and the Rights of Commuters and Public Convenience. Discuss the Supreme Court judgment in Amit Sahni v. Commissioner of Police (Shaheen Bagh Protest).`,
    coreIssues: [
      'Right to peaceful protest without arms under Article 19(1)(b) and free speech under Article 19(1)(a).',
      'Reasonable restrictions under Article 19(3) in the interests of public order.',
      'Indefinite occupation of public highways and communal thoroughfares.',
      'The designated protest site rule formulated in Amit Sahni (2020).'
    ],
    examinerExpectation:
      'Candidate must explain Article 19(1)(a) and 19(1)(b), cite Himat Lal K. Shah (1973) and Mazdoor Kisan Shakti Sangathan (2018), and analyze Amit Sahni (2020) establishing that public roads cannot be blocked indefinitely for protests.',
    essentialCitations: [
      'Himat Lal K. Shah v. Commissioner of Police (1973 1 SCC 227)',
      'Mazdoor Kisan Shakti Sangathan v. Union of India ((2018) 17 SCC 324)',
      'Amit Sahni v. Commissioner of Police (Shaheen Bagh) ((2020) 10 SCC 439)'
    ],
    hoverIntel: {
      topicName: 'Right to Protest & Public Roads (Shaheen Bagh)',
      topicPillar: 'Part III: Fundamental Rights • Freedom of Assembly (Article 19(1)(b))',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Contemporary Core)',
      examFrequency: 'Tested in DJS, UP PCS-J, and UPSC Law Optional',
      weightagePattern: '15 Marks • 250–300 Words (1.5 Pages)',
      targetTimeMinutes: 12,
      examinerTrapWarning:
        'Trap Alert: Peaceful protest is a fundamental right, but it is NOT absolute! Protesters have NO right to occupy public arterial roads indefinitely and disrupt the daily lives of citizens. Protests must occur at designated sites (Amit Sahni)!',
      recentTrendAlert: 'Reaffirmed in farmers protest corridor guidelines.',
      coreArticles: ['Article 19(1)(a)', 'Article 19(1)(b)', 'Article 19(3)', 'Article 21'],
      benchmarkCases: ['Himat Lal (1973)', 'MKSS (2018)', 'Amit Sahni (2020)']
    },
    answerBlueprint: {
      step1Intro: 'Quote the principle: "The right to protest is an essential safety valve in a constitutional democracy" (Himat Lal K. Shah, 1973). Peaceful assembly is protected under Article 19(1)(b).',
      step2DoctrinalCore: 'Identify the Conflict: Right to protest under Article 19(1)(a)/(b) versus Right to free movement of commuters under Article 19(1)(d) and livelihood under Article 21.',
      step3PrecedentEvolution: 'Detail Amit Sahni v. Commissioner of Police (Shaheen Bagh, 2020): Supreme Court examined the 100-day indefinite blockade of Delhi-Noida arterial highway during CAA protests.',
      step4Conclusion: 'Detail the Landmark Ruling: (1) Democracy and dissent go hand in hand, but protests must be held at designated areas, (2) Public ways cannot be occupied indefinitely, (3) Police must take action to clear roads without waiting for court orders.'
    },
    fullModelAnswer: `I. THE CONSTITUTIONAL RIGHT TO PROTEST:
In Himat Lal K. Shah (1973) and Mazdoor Kisan Shakti Sangathan (2018), the Supreme Court recognized that the right to peaceful protest, assembly, and expression under Articles 19(1)(a) and 19(1)(b) is the lifeblood of a constitutional democracy. Citizens have an inherent right to assemble peacefully without arms to voice dissent against state policies.

II. THE CLASH WITH COMMUTERS' RIGHTS (AMIT SAHNI, 2020):
During the 2019–2020 anti-CAA protests at Shaheen Bagh, Delhi, protesters occupied an arterial public highway for over 100 days, paralyzing daily traffic between Delhi and Noida, obstructing emergency ambulances, and disrupting economic trade.
In Amit Sahni v. Commissioner of Police (2020) 10 SCC 439, a 3-Judge Bench resolved the constitutional conflict:

1. Dissent is Fundamental, but Location is Regulated:
The Court held that while the right to protest is protected, it cannot be exercised anywhere and everywhere. The administration possesses constitutional authority under Article 19(3) to prescribe designated areas (e.g. Jantar Mantar or Ramlila Maidan) where protests can be peacefully organized.

2. Public Ways Cannot be Blocked Indefinitely:
Public roads, highways, and transport corridors cannot be occupied or blocked indefinitely. The rights of protesters cannot extinguish the fundamental right to free movement under Article 19(1)(d) and the right to livelihood of the wider public.

3. Administrative Duty to Act:
The Court cautioned law enforcement authorities not to hide behind the courts: it is the primary statutory duty of the police to maintain public order and remove blockades without waiting for judicial directives.

CONCLUSION:
Amit Sahni strikes a harmonious balance: democracy accommodates dissent, but dissent cannot degenerate into administrative paralysis or hijack public spaces.`,
    scoringRubric: [
      { criterion: 'Article 19(1)(a) and 19(1)(b) democratic safety valve foundation', marks: 3 },
      { criterion: 'Conflict with commuters Article 19(1)(d) and Article 21 livelihood', marks: 3.5 },
      { criterion: 'Amit Sahni (2020) Shaheen Bagh ratio (designated sites & road blockades)', marks: 5 },
      { criterion: 'Police administrative duty & harmonious conclusion', marks: 3.5 }
    ]
  },

  {
    id: 'mains-15m-electoral-bonds-invalidation',
    title: 'Electoral Bonds Scheme Invalidation: Right to Information vs Corporate Anonymity (ADR 2024)',
    topicId: 'art-19-speech-reasonable-restrictions',
    marksCategory: 15,
    examCategory: 'UPSC_LAW',
    examsAppeared: ['UPSC Law Optional 2024 Benchmark', 'DJS 2024', 'UP PCS-J 2024'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~12 Mins',
    targetWordMin: 230,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~30 lines)',
    targetTimeMinutes: 12,
    questionText: `Critically examine the unanimous 5-Judge Constitution Bench decision in Association for Democratic Reforms v. Union of India (2024) striking down the Electoral Bonds Scheme. How did the Court balance the Voter's Right to Information against Donor Privacy?`,
    coreIssues: [
      'The 2017 amendments to Finance Act, Representation of the People Act, Companies Act, and Income Tax Act introducing anonymous Electoral Bonds.',
      'Voter\'s right to know under Article 19(1)(a) (ADR 2002 and PUCL 2003).',
      'The 4-prong Proportionality Test applied to donor privacy vs voter information.',
      'Invalidation of Section 182(3) Companies Act amendment permitting unlimited loss-making corporate donations as manifestly arbitrary.'
    ],
    examinerExpectation:
      'Candidate must analyze the landmark 5-Judge Constitution Bench judgment delivered on 15 February 2024 by CJI Chandrachud. Detail the failure of the proportionality test, explain why curbing black money is not an Art 19(2) restriction, and highlight the manifest arbitrariness of removing caps on corporate funding.',
    essentialCitations: [
      'Union of India v. Association for Democratic Reforms ((2002) 5 SCC 294)',
      'People\'s Union for Civil Liberties v. Union of India ((2003) 4 SCC 399)',
      'K.S. Puttaswamy v. Union of India ((2017) 10 SCC 1)',
      'Association for Democratic Reforms v. Union of India (Electoral Bonds Case) (2024 INSC 113; 5-Judge Bench)'
    ],
    hoverIntel: {
      topicName: 'Electoral Bonds Verdict (ADR 2024)',
      topicPillar: 'Part III & Part XV: Free Speech, Elections & Equality (Articles 19(1)(a) & 14)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Historic 2024 Landmark)',
      examFrequency: 'Guaranteed top question across all upcoming 2024–2026 Mains exams',
      weightagePattern: '15 Marks • 250–300 Words (1.5 Pages)',
      targetTimeMinutes: 12,
      examinerTrapWarning:
        'Trap Alert: The Union argued that curbing black money justified donor anonymity. The Court firmly held that "curbing black money" is NOT an enumerated ground under Article 19(2)! Therefore, it could not restrict the Voter\'s Right to Information!',
      recentTrendAlert: 'Decided on 15 February 2024; ordered SBI to disclose all bond numbers, purchasers, and recipient parties.',
      coreArticles: ['Article 19(1)(a)', 'Article 19(2)', 'Article 14', 'Article 324'],
      benchmarkCases: ['ADR (2002)', 'Puttaswamy (2017)', 'Electoral Bonds Case (2024)']
    },
    answerBlueprint: {
      step1Intro: 'Introduce the Electoral Bonds Scheme (2018): Permitted anonymous political donations through SBI interest-free banking instruments, exempting disclosure under RPA, Companies Act, and IT Act.',
      step2DoctrinalCore: 'Establish the Voter\'s Right to Know (ADR 2002): An informed voter is the heart of democracy. Freedom of voting under Article 19(1)(a) includes knowing who funds political parties, exposing quid pro quo arrangements.',
      step3PrecedentEvolution: 'Apply the 4-Prong Proportionality Test: (1) Legitimate Aim: Curbing black money is not an Article 19(2) ground, (2) Suitability: Electoral trust scheme was a less restrictive alternative, (3) Proportionality: Complete anonymity completely obliterated the voter\'s fundamental right.',
      step4Conclusion: 'Detail Manifest Arbitrariness under Article 14: Removing the 7.5% net profit cap under Section 182 Companies Act allowed loss-making shell companies to funnel unlimited money, violating Article 14.'
    },
    fullModelAnswer: `I. THE CONSTITUTIONAL CHALLENGE (ADR V. UNION OF INDIA, 2024):
The Electoral Bond Scheme, 2018 introduced bearer instruments enabling individuals and corporations to donate unlimited anonymous funds to political parties via the State Bank of India (SBI). The scheme amended Section 29C of the Representation of the People Act, Section 182 of the Companies Act, and Section 13A of the Income Tax Act, eliminating mandatory disclosure.
On 15 February 2024, a unanimous 5-Judge Constitution Bench headed by CJI D.Y. Chandrachud struck down the scheme as unconstitutional.

II. THE VOTER'S RIGHT TO INFORMATION UNDER ARTICLE 19(1)(a):
1. Foundational Precedents: In ADR (2002) and PUCL (2003), the Court held that the voter's right to know the background and funding of political parties is an intrinsic facet of freedom of expression under Article 19(1)(a).
2. Deep Nexus between Money and Politics: Money influences electoral outcomes, policy formulations, and regulatory favours. Transparency is essential to expose corrupt quid pro quo arrangements.

III. FAILURE OF THE PROPORTIONALITY TEST:
The Union argued that donor anonymity was necessary to protect donor privacy and curb black money:
1. Not a Ground under Article 19(2): Curbing black money is not an enumerated ground of reasonable restriction under Article 19(2).
2. Least Restrictive Means: Anonymity failed the necessity test. Less restrictive mechanisms (e.g. Electoral Trusts with threshold disclosures) existed to channel legal banking donations without total voter blindness.

IV. MANIFEST ARBITRARINESS UNDER ARTICLE 14:
The amendment deleting the 7.5% net profit cap under Section 182 Companies Act was struck down for manifest arbitrariness: it permitted loss-making entities and corporate shell companies to funnel unlimited dark money into political campaigns.

CONCLUSION:
ADR (2024) re-anchors Indian democracy to transparency, affirming that free and fair elections require an informed electorate.`,
    scoringRubric: [
      { criterion: 'Electoral Bonds scheme mechanics & statutory exemptions', marks: 3 },
      { criterion: 'Voter Right to Information under Art. 19(1)(a) (ADR 2002)', marks: 4 },
      { criterion: 'Application of 4-prong Proportionality Test to donor privacy', marks: 4.5 },
      { criterion: 'Manifest arbitrariness under Section 182 Companies Act & conclusion', marks: 3.5 }
    ]
  },

  {
    id: 'mains-15m-inter-state-water-disputes',
    title: 'Inter-State River Water Disputes under Article 262: Exclusion of Supreme Court Jurisdiction',
    topicId: 'centre-state-relations-pith-substance',
    marksCategory: 15,
    examCategory: 'UPSC_LAW',
    examsAppeared: ['UPSC Law Optional 2017, 2022', 'Bihar Judicial 2018', 'UP PCS-J 2016'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~12 Mins',
    targetWordMin: 230,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~30 lines)',
    targetTimeMinutes: 12,
    questionText: `Examine the constitutional framework governing Inter-State River Water Disputes under Article 262 and the Inter-State River Water Disputes Act, 1956. Does the bar of jurisdiction under Article 262(2) prevent the Supreme Court from hearing Special Leave Petitions under Article 136?`,
    coreIssues: [
      'Constitutional mandate under Article 262: Adjudication of disputes relating to waters of inter-state rivers.',
      'Exclusion of Supreme Court jurisdiction under Article 131 and 262(2).',
      'The 1956 Act creating ad-hoc Water Disputes Tribunals.',
      'The landmark ruling in State of Karnataka v. State of Tamil Nadu (Cauvery 2016): Article 136 overrides the statutory bar.'
    ],
    examinerExpectation:
      'Candidate must explain Article 262, cite the Inter-State River Water Disputes Act, 1956, and detail the 3-Judge Bench ruling in Cauvery Water Disputes Tribunal (2016) where the Supreme Court held that Article 136 appellate power over tribunal awards is part of the Basic Structure and cannot be barred by Article 262.',
    essentialCitations: [
      'In re Cauvery Water Disputes Tribunal (1993 Supp (1) SCC 96)',
      'State of Karnataka v. State of Tamil Nadu (Cauvery Jurisdiction Ruling) ((2017) 3 SCC 362)',
      'State of A.P. v. State of Karnataka ((2000) 9 SCC 572)'
    ],
    hoverIntel: {
      topicName: 'Inter-State River Water Disputes (Article 262)',
      topicPillar: 'Part XI: Administrative Relations • Water Disputes (Article 262)',
      examImportance: '⭐⭐⭐⭐ High Priority Federalism',
      examFrequency: 'Tested in UPSC Law Optional and Bihar Judicial',
      weightagePattern: '15 Marks • 250–300 Words (1.5 Pages)',
      targetTimeMinutes: 12,
      examinerTrapWarning:
        'Trap Alert: While Article 262(2) bars the Supreme Court from hearing an original dispute under Article 131, it CANNOT bar the Supreme Court from exercising its constitutional appellate jurisdiction under Article 136 against the final award of a Water Tribunal (Cauvery 2016)!',
      recentTrendAlert: 'Inter-State River Water Disputes (Amendment) Bill seeking a single permanent tribunal.',
      coreArticles: ['Article 262', 'Article 131', 'Article 136'],
      benchmarkCases: ['Cauvery Reference (1991)', 'Cauvery Jurisdiction (2016)']
    },
    answerBlueprint: {
      step1Intro: 'Introduce Article 262: Empowers Parliament to provide for the adjudication of disputes with respect to the use, distribution, or control of waters of inter-state rivers.',
      step2DoctrinalCore: 'Analyze the Bar of Jurisdiction (Article 262(2)): Parliament enacted the Inter-State River Water Disputes Act, 1956, Section 11 of which bars the jurisdiction of the Supreme Court and all courts.',
      step3PrecedentEvolution: 'Detail the Cauvery Breakthrough (2016, 3-Judge Bench): Supreme Court held that an award passed by a Tribunal constituted under the 1956 Act is subject to the Supreme Court\'s Special Leave jurisdiction under Article 136.',
      step4Conclusion: 'Reaffirm Basic Structure: Judicial review under Article 136 is an untouchable basic feature; statutory finality cannot extinguish constitutional appellate oversight.'
    },
    fullModelAnswer: `I. CONSTITUTIONAL SCHEME OF ARTICLE 262:
Water in an inter-state river is a common national asset where riparians have equitable sharing rights.
Recognizing that inter-state river disputes involve volatile political, geographical, and technical complexities unsuited for ordinary civil trials, the framers designed Article 262:
1. Article 262(1): Parliament may by law provide for the adjudication of any dispute relating to the use, distribution, or control of waters of inter-state rivers or river valleys.
2. Article 262(2) (Exclusionary Bar): Parliament may by law provide that neither the Supreme Court nor any other court shall exercise jurisdiction in respect of any such dispute.

II. THE STATUTORY REGIME & THE SECTION 11 BAR:
Parliament enacted the Inter-State River Water Disputes Act, 1956:
- Section 4: Central Government constitutes an ad-hoc Tribunal when negotiations fail.
- Section 6: Tribunal award has the force of a decree of the Supreme Court.
- Section 11: Bars the Supreme Court from entertaining any suit or arbitration regarding the water dispute (displacing Article 131 original jurisdiction).

III. THE ARTICLE 136 JURISDICTIONAL BREAKTHROUGH: CAUVERY (2016):
In State of Karnataka v. State of Tamil Nadu (2017) 3 SCC 362, the riparian States challenged the maintainability of appeals against the final award of the Cauvery Tribunal:
- The Supreme Court held that the bar under Article 262(2) applies only to original water disputes, which are relegated to the Tribunal.
- Once the Tribunal adjudicates the dispute and delivers an award, the Tribunal is a "tribunal" within the territory of India under Article 136.
- The Court ruled that judicial review under Article 136 is part of the Basic Structure. Parliament cannot extinguish the Supreme Court's constitutional discretion to grant special leave against a tribunal award.

CONCLUSION:
Article 262 channels water disputes into expert tribunals, while Article 136 preserves constitutional fairness and equitable apportionment.`,
    scoringRubric: [
      { criterion: 'Art. 262(1) & (2) constitutional rationale & Art 131 displacement', marks: 4 },
      { criterion: 'Inter-State River Water Disputes Act, 1956 Section 11 bar', marks: 3 },
      { criterion: 'Cauvery 2016 landmark: Article 136 appellate jurisdiction maintainable', marks: 5 },
      { criterion: 'Basic Structure & equitable apportionment synthesis', marks: 3 }
    ]
  },

  {
    id: 'mains-15m-gst-council-cooperative-federalism',
    title: 'The GST Council under Article 279A: Cooperative Federalism & Non-Binding Decisions (Mohit Minerals)',
    topicId: 'centre-state-relations-pith-substance',
    marksCategory: 15,
    examCategory: 'UPSC_LAW',
    examsAppeared: ['UPSC Law Optional 2022, 2023', 'DJS 2023', 'UP PCS-J 2023'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~12 Mins',
    targetWordMin: 230,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~30 lines)',
    targetTimeMinutes: 12,
    questionText: `Analyze the constitutional architecture of the GST Council under Article 279A inserted by the 101st Constitutional Amendment. Are the recommendations of the GST Council binding on Parliament and State Legislatures? Discuss Union of India v. Mohit Minerals (2022).`,
    coreIssues: [
      'The 101st Constitutional Amendment (2016) introducing Goods and Services Tax.',
      'Article 246A conferring simultaneous legislative power on Parliament and States.',
      'Article 279A creating the GST Council as a federal constitutional forum.',
      'The 3-Judge Bench decision in Union of India v. Mohit Minerals (2022): Recommendations are persuasive, not binding mandates.'
    ],
    examinerExpectation:
      'Candidate must explain Article 246A (simultaneous power), Article 279A (GST Council voting arithmetic: 1/3 Union, 2/3 States), and detail the landmark ruling in Mohit Minerals (2022) holding that GST Council recommendations are non-binding persuasive guidelines, preserving legislative sovereignty.',
    essentialCitations: [
      'Union of India v. Mohit Minerals Pvt. Ltd. (2022 INSC 598; (2022) 10 SCC 700)',
      'State of West Bengal v. Union of India (1964 1 SCR 371)',
      'State of Karnataka v. Union of India ((1977) 4 SCC 608)'
    ],
    hoverIntel: {
      topicName: 'GST Council & Fiscal Federalism (Mohit Minerals)',
      topicPillar: 'Part XII: Finance, Property & Contracts (Articles 246A & 279A)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Fiscal Federalism Landmark)',
      examFrequency: 'Direct core question in UPSC Law Optional and Judicial Mains',
      weightagePattern: '15 Marks • 250–300 Words (1.5 Pages)',
      targetTimeMinutes: 12,
      examinerTrapWarning:
        'Trap Alert: Candidates mistakenly write that GST Council recommendations are legally binding on State Legislatures. The Supreme Court in Mohit Minerals (2022) unanimously held that GST Council recommendations are PERSUASIVE recommendations with only harmonizing value!',
      recentTrendAlert: 'Landmark precedent reasserting legislative sovereignty of State Assemblies.',
      coreArticles: ['Article 246A', 'Article 269A', 'Article 279A'],
      benchmarkCases: ['Mohit Minerals (2022)', 'State of West Bengal (1963)']
    },
    answerBlueprint: {
      step1Intro: 'Introduce the 101st Constitutional Amendment (2016): Radically restructured Indian fiscal federalism by replacing entry taxes, excise, and VAT with a unified Goods and Services Tax (GST).',
      step2DoctrinalCore: 'Detail Article 246A: Confers "simultaneous legislative power" upon Parliament and State Legislatures. Both possess equal sovereign competence to make laws with respect to GST.',
      step3PrecedentEvolution: 'Analyze the GST Council (Article 279A): A federal consultative body (Union has 1/3rd voting weight, States share 2/3rd, with a 3/4th majority threshold for decisions).',
      step4Conclusion: 'Detail Union of India v. Mohit Minerals (2022, Justice Chandrachud): Recommendations of the GST Council are NOT binding mandates; they possess persuasive value to foster cooperative federalism, but cannot paralyze plenary legislative sovereignty.'
    },
    fullModelAnswer: `I. THE CONSTITUTIONAL REVOLUTION OF THE 101ST AMENDMENT:
The 101st Constitutional Amendment Act (2016) fundamentally re-engineered Indian fiscal federalism:
1. Article 246A (Simultaneous Power): Article 246A discarded the traditional exclusive Seventh Schedule division for indirect taxation. Parliament and State Legislatures were conferred unique, simultaneous, and co-equal legislative competence to enact GST laws.
2. Article 279A (The GST Council): Created a permanent federal body comprising the Union Finance Minister and State Finance Ministers to make recommendations on tax slabs, exemptions, and model laws. Voting is structured such that the Union holds 1/3rd weightage, all States combined hold 2/3rd weightage, and a 3/4th majority is required to pass a resolution.

II. ARE GST COUNCIL RECOMMENDATIONS BINDING? (MOHIT MINERALS, 2022):
In Union of India v. Mohit Minerals Pvt. Ltd. (2022) 10 SCC 700, a 3-Judge Bench led by Justice D.Y. Chandrachud resolved the profound question of legislative sovereignty:
1. Recommendations are Non-Binding: The Court held that the word "recommendation" in Article 279A(4) means what it says—it is a persuasive suggestion, NOT an unappealable legislative mandate.
2. Preservation of Un-coerced Federalism: If GST Council recommendations were made legally binding, it would obliterate the simultaneous legislative power of State Legislatures under Article 246A, converting Indian federalism into an executive dictatorship.
3. Cooperative & Uncooperative Federalism: Indian federalism thrives on a dialogue where States may accept recommendations in harmony, but retain sovereign legislative power to disagree.

CONCLUSION:
Mohit Minerals preserves the delicate balance of cooperative federalism: the GST Council acts as a collaborative catalyst, not a super-legislature overriding sovereign Parliaments and Assemblies.`,
    scoringRubric: [
      { criterion: '101st Amendment & Art. 246A simultaneous legislative power', marks: 4 },
      { criterion: 'Article 279A voting arithmetic & federal structure', marks: 3 },
      { criterion: 'Mohit Minerals 2022 holding: recommendations are persuasive, not binding', marks: 5 },
      { criterion: 'Cooperative vs uncooperative federalism synthesis', marks: 3 }
    ]
  },

  {
    id: 'mains-15m-tribunals-l-chandra-kumar',
    title: 'Constitutional Status of Tribunals & Judicial Review: L. Chandra Kumar Benchmark',
    topicId: 'higher-judiciary-collegium-142',
    marksCategory: 15,
    examCategory: 'BJS',
    examsAppeared: ['Bihar Judicial 2014, 2018, 2021', 'UP PCS-J 2016, 2023', 'UPSC Law Optional 2017, 2021'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~12 Mins',
    targetWordMin: 230,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~30 lines)',
    targetTimeMinutes: 12,
    questionText: `Can Parliament by law exclude the jurisdiction of High Courts under Articles 226/227 and vest it exclusively in Administrative Tribunals? Discuss the 7-Judge Constitution Bench ruling in L. Chandra Kumar v. Union of India.`,
    coreIssues: [
      'Articles 323A and 323B inserted by 42nd Amendment (1976) enabling creation of administrative tribunals.',
      'Exclusion of High Court jurisdiction under Section 28 of the Administrative Tribunals Act, 1985.',
      'The 7-Judge Constitution Bench ruling in L. Chandra Kumar (1997).',
      'Judicial Review under Articles 226 and 32 declared an untouchable part of the Basic Structure.'
    ],
    examinerExpectation:
      'Candidate must explain S.P. Sampath Kumar (1987) alternative institutional mechanism doctrine, detail its reversal in L. Chandra Kumar (1997, 7-Judge Bench), and explain that tribunals act as courts of first instance whose decisions are mandatory subject to Division Bench scrutiny of High Courts under Article 226.',
    essentialCitations: [
      'S.P. Sampath Kumar v. Union of India ((1987) 1 SCC 124)',
      'L. Chandra Kumar v. Union of India ((1997) 3 SCC 261; 7-Judge Bench)',
      'Union of India v. R. Gandhi ((2010) 11 SCC 1)',
      'Madras Bar Association v. Union of India ((2014) 10 SCC 1)'
    ],
    hoverIntel: {
      topicName: 'Tribunals & High Court Jurisdiction (L. Chandra Kumar)',
      topicPillar: 'Part XIV-A: Tribunals & Judicial Review (Articles 323A, 323B & 226)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Constitutional Pillar)',
      examFrequency: 'Appeared in Bihar Judicial 3 times, UP PCS-J, and UPSC Law',
      weightagePattern: '15 Marks • 250–300 Words (1.5 Pages)',
      targetTimeMinutes: 12,
      examinerTrapWarning:
        'Trap Alert: A litigant CANNOT bypass the High Court and appeal directly from CAT to the Supreme Court! Under L. Chandra Kumar, all tribunal decisions MUST be challenged before a Division Bench of the High Court under Article 226 before approaching the Supreme Court!',
      recentTrendAlert: 'National Tax Tribunal (NTT) Act struck down in 2014 for violating the Chandra Kumar principles.',
      coreArticles: ['Article 323A', 'Article 323B', 'Article 226', 'Article 32'],
      benchmarkCases: ['Sampath Kumar (1987)', 'L. Chandra Kumar (1997)', 'Madras Bar Association (2014)']
    },
    answerBlueprint: {
      step1Intro: 'Introduce Articles 323A and 323B inserted by the 42nd Amendment (1976), enabling Parliament to establish administrative and tax tribunals and exclude the jurisdiction of all courts except the Supreme Court under Article 136.',
      step2DoctrinalCore: 'Trace Sampath Kumar (1987): 5-Judge Bench held tribunals could serve as effective alternative institutional mechanisms replacing High Courts.',
      step3PrecedentEvolution: 'Detail L. Chandra Kumar v. Union of India (1997, 7-Judge Bench): Unanimously struck down the exclusion of High Court jurisdiction under Article 323A(2)(d) and Section 28 of the Administrative Tribunals Act, 1985.',
      step4Conclusion: 'State the Governing Doctrine: (1) Judicial Review under Articles 226, 227, and 32 is a Basic Feature that cannot be excluded by constitutional amendment, (2) Tribunals are courts of first instance whose orders are subject to Division Bench High Court review under Art. 226.'
    },
    fullModelAnswer: `I. THE TRIBUNALIZATION PARADOX:
Articles 323A and 323B, inserted by the 42nd Constitutional Amendment (1976), empowered Parliament to set up Administrative Tribunals (e.g. CAT) and exclude the jurisdiction of all courts—including High Courts under Articles 226/227—except the Supreme Court under Article 136.
In S.P. Sampath Kumar (1987), the Court upheld this scheme on the theory that Tribunals were viable "alternative institutional mechanisms" to High Courts.

II. THE 7-JUDGE BENCH WATERSHED: L. CHANDRA KUMAR (1997):
In L. Chandra Kumar v. Union of India (1997) 3 SCC 261, a unanimous 7-Judge Constitution Bench overruled Sampath Kumar and dismantled the exclusion of High Court jurisdiction:

1. Judicial Review is an Untouchable Basic Feature:
The power of judicial review vested in the High Courts under Articles 226/227 and the Supreme Court under Article 32 is an integral and untransferable component of the Basic Structure. Neither ordinary statute nor constitutional amendment can extinguish it.

2. Subordinate Status of Tribunals:
Administrative Tribunals can test the constitutional validity of statutory rules and subordinate legislation, but CANNOT examine the validity of parent statutes under which they were created.

3. Tribunals as Courts of First Instance:
Tribunals perform a supplemental, not substitutional, role. They act as courts of first instance. However, all decisions of Tribunals are MANDATORILY subject to the supervisory writ jurisdiction of a Division Bench of the High Court under Article 226/227. No litigant can bypass the High Court and directly approach the Supreme Court under Article 136.

CONCLUSION:
L. Chandra Kumar preserved the primacy of the higher judiciary, ensuring that specialized tribunals operate under the constitutional supervision of the High Courts.`,
    scoringRubric: [
      { criterion: '42nd Amendment Articles 323A/323B & Section 28 exclusion bar', marks: 3 },
      { criterion: 'Sampath Kumar 1987 alternative mechanism doctrine', marks: 2 },
      { criterion: 'L. Chandra Kumar 7-Judge Bench Basic Structure ratio', marks: 5 },
      { criterion: 'Tribunals as courts of first instance & mandatory High Court Division Bench review', marks: 5 }
    ]
  },

  {
    id: 'mains-15m-section-66a-shreya-singhal',
    title: 'Section 66A IT Act Invalidation & The Chilling Effect on Speech: Shreya Singhal (2015)',
    topicId: 'art-19-speech-reasonable-restrictions',
    marksCategory: 15,
    examCategory: 'DJS',
    examsAppeared: ['DJS 2017, 2022', 'UP PCS-J 2018, 2023', 'UPSC Law Optional 2016, 2021'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~12 Mins',
    targetWordMin: 230,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~30 lines)',
    targetTimeMinutes: 12,
    questionText: `Critically examine the Supreme Court judgment in Shreya Singhal v. Union of India (2015) striking down Section 66A of the Information Technology Act. Explain the doctrines of "Vagueness", "Overbreadth", and the distinction between Discussion, Advocacy, and Incitement.`,
    coreIssues: [
      'Criminalization of sending offensive online messages under Section 66A IT Act.',
      'The Doctrine of Vagueness: Subjective terms ("grossly offensive", "menacing character").',
      'The Doctrine of Overbreadth & Chilling Effect on legitimate political criticism.',
      'The clear line between Discussion, Advocacy, and Incitement under Article 19(2).'
    ],
    examinerExpectation:
      'Candidate must analyze Shreya Singhal (2015), detail Justice Nariman\'s 3 stages of speech (Discussion, Advocacy, Incitement), explain the doctrines of vagueness and overbreadth, and explain why Section 66A was struck down in its entirety under Article 19(1)(a).',
    essentialCitations: [
      'Romesh Thappar v. State of Madras (1950 SCR 594)',
      'Kameshwar Singh v. State of Bihar (1962 Supp (3) SCR 369)',
      'Shreya Singhal v. Union of India ((2015) 5 SCC 1)'
    ],
    hoverIntel: {
      topicName: 'Section 66A Invalidation & Shreya Singhal',
      topicPillar: 'Part III: Fundamental Rights • Digital Free Speech (Article 19(1)(a))',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Free Speech Masterpiece)',
      examFrequency: 'Appeared in DJS, UP PCS-J, and UPSC Law Optional',
      weightagePattern: '15 Marks • 250–300 Words (1.5 Pages)',
      targetTimeMinutes: 12,
      examinerTrapWarning:
        'Trap Alert: Detail Justice Nariman\'s tripartite taxonomy: (1) Discussion, (2) Advocacy, (3) Incitement. Speech can be curbed under Article 19(2) ONLY when advocacy reaches the threshold of incitement to violence or public disorder!',
      recentTrendAlert: 'Supreme Court issued strict directions in 2022 directing police officers across India not to register FIRs under the struck-down Section 66A.',
      coreArticles: ['Article 19(1)(a)', 'Article 19(2)', 'Section 66A IT Act'],
      benchmarkCases: ['Romesh Thappar (1950)', 'Shreya Singhal (2015)']
    },
    answerBlueprint: {
      step1Intro: 'Introduce Section 66A of the IT Act, 2000: Imposed up to 3 years imprisonment for sending any electronic message that was "grossly offensive" or of a "menacing character."',
      step2DoctrinalCore: 'Explain Justice Nariman\'s Three Concepts of Free Speech: (1) Discussion (pure exchange), (2) Advocacy (persuading others of an unpopular cause), (3) Incitement (urging imminent lawless action). Only Incitement can be penalized under Article 19(2).',
      step3PrecedentEvolution: 'Analyze the Dual Doctrines: (a) Void for Vagueness (no clear standard defining what is "offensive", leaving it to police whim), (b) Overbreadth & Chilling Effect (innocent criticism and political dissent caught in the net).',
      step4Conclusion: 'Conclude with complete invalidation: Section 66A struck down in toto, liberating the Indian internet from speech policing.'
    },
    fullModelAnswer: `I. THE LEGISLATIVE OVERREACH OF SECTION 66A:
Section 66A of the Information Technology Act, 2000 criminalized the transmission of electronic messages deemed "grossly offensive," of "menacing character," or causing "annoyance, inconvenience, or insult," punishable with three years' imprisonment. Police routinely weaponized it to arrest citizens for posting political satire and critical commentary online.

II. THE THREE CONCEPTS OF SPEECH (SHREYA SINGHAL, 2015):
In Shreya Singhal v. Union of India (2015) 5 SCC 1, Justice R.F. Nariman articulated a foundational tripartite taxonomy:
1. Discussion: Exchange of ideas without persuasion—fully protected under Article 19(1)(a).
2. Advocacy: Vigorous persuasion of an unpopular, radical, or provocative view—fully protected under Article 19(1)(a).
3. Incitement: Where advocacy reaches the tipping point of inciting imminent unlawful violence or public disorder.
The Court ruled that freedom of speech can be restricted under Article 19(2) ONLY when advocacy transforms into direct incitement.

III. THE TWIN DOCTRINES OF INVALIDATION:
1. Void for Vagueness: A penal statute must define offences with reasonable certainty so ordinary citizens know what is prohibited. Terms like "offensive" or "annoying" are amorphous and subjective, differing from person to person.
2. The Doctrine of Overbreadth & Chilling Effect: Section 66A cast its net so wide that innocent speech, artistic expression, and legitimate dissent were criminalized, casting an impermissible "chilling effect" on digital expression.
3. Not Saved by Article 19(2): Section 66A lacked any proximate causal link to "public order" or "defamation."

CONCLUSION:
Shreya Singhal stands as the Magna Carta of online free speech in India, establishing that speech cannot be stifled merely because it offends or annoys the government.`,
    scoringRubric: [
      { criterion: 'Section 66A statutory framework & police abuse', marks: 3 },
      { criterion: 'Justice Nariman 3-tier taxonomy: Discussion, Advocacy, Incitement', marks: 4.5 },
      { criterion: 'Doctrines of Vagueness & Overbreadth / Chilling Effect', marks: 4.5 },
      { criterion: 'Article 19(2) proximate nexus & conclusion', marks: 3 }
    ]
  },

  {
    id: 'mains-15m-right-to-livelihood-olga-tellis',
    title: 'Right to Livelihood & Eviction of Pavement Dwellers: Olga Tellis Benchmark',
    topicId: 'art-21-due-process',
    marksCategory: 15,
    examCategory: 'UP_PCSJ',
    examsAppeared: ['UP PCS-J 2014, 2018', 'Bihar Judicial 2016, 2021', 'UPSC Law Optional 2017, 2022'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~12 Mins',
    targetWordMin: 230,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~30 lines)',
    targetTimeMinutes: 12,
    questionText: `Trace the incorporation of the "Right to Livelihood" within the Right to Life under Article 21 in Olga Tellis v. Bombay Municipal Corporation. Does the right to livelihood bar the State from removing unauthorized encroachments on public streets?`,
    coreIssues: [
      'Expansion of Article 21: Right to life means more than mere animal existence; it includes the means of livelihood.',
      'Intersection of Fundamental Rights (Art. 21) and Directive Principles (Articles 39(a) and 41).',
      'The principle of Natural Justice (Audi Alteram Partem) prior to eviction.',
      'Public convenience over private encroachment: Pavements are for pedestrians, but eviction must follow fair procedure.'
    ],
    examinerExpectation:
      'Candidate must cite CJI Y.V. Chandrachud in Olga Tellis (1985, 5-Judge Constitution Bench), explain the organic link between life and livelihood, and explain that while pavements cannot be permanently encroached, eviction requires reasonable notice, fair hearing, and alternative rehabilitation planning.',
    essentialCitations: [
      'Munn v. Illinois (94 US 113 (1877))',
      'Kharak Singh v. State of U.P. (1964 1 SCR 332)',
      'Olga Tellis v. Bombay Municipal Corporation ((1985) 3 SCC 545; 5-Judge Bench)',
      'Ahmedabad Municipal Corporation v. Nawab Khan ((1997) 11 SCC 121)'
    ],
    hoverIntel: {
      topicName: 'Right to Livelihood & Evictions (Olga Tellis)',
      topicPillar: 'Part III & Part IV: Right to Life & Socio-Economic Rights (Article 21)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Constitutional Classic)',
      examFrequency: 'Appeared in UP PCS-J, Bihar Judicial and UPSC Law Optional',
      weightagePattern: '15 Marks • 250–300 Words (1.5 Pages)',
      targetTimeMinutes: 12,
      examinerTrapWarning:
        'Trap Alert: Olga Tellis did NOT give pavement dwellers an absolute right to occupy public pavements! Pavements are for pedestrians; the Court held that removal is permissible, BUT eviction must follow a just, fair, and reasonable procedure with prior notice!',
      recentTrendAlert: 'Applied in modern anti-demolition and "bulldozer justice" guidelines.',
      coreArticles: ['Article 21', 'Article 39(a)', 'Article 41'],
      benchmarkCases: ['Olga Tellis (1985)', 'Nawab Khan (1997)']
    },
    answerBlueprint: {
      step1Intro: 'Quote CJI Y.V. Chandrachud: "The sweep of the right to life conferred by Article 21 is wide and far-reaching. Deprive a person of his livelihood and you deprive him of his life."',
      step2DoctrinalCore: 'Analyze the Organic Link: If the right to livelihood is not treated as part of the constitutional right to life, the easiest way of depriving a person of his life would be to deprive him of his means of livelihood.',
      step3PrecedentEvolution: 'Harmonize with Public Convenience: Pavements are intended for the public to walk; nobody has an absolute right to carry on private business or live on footpaths.',
      step4Conclusion: 'Detail Procedural Safeguards: Eviction without natural justice (Audi Alteram Partem) is arbitrary under Article 14. Eviction must provide reasonable notice, hearing, and alternative shelter schemes (Nawab Khan, 1997).'
    },
    fullModelAnswer: `I. THE ORGANIC SYNTHESIS: LIFE INCLUDES LIVELIHOOD:
In Olga Tellis v. Bombay Municipal Corporation (1985) 3 SCC 545, a 5-Judge Constitution Bench headed by CJI Y.V. Chandrachud delivered a landmark ruling on socio-economic rights:
- "The sweep of the right to life conferred by Article 21 is wide and far-reaching. Life means something more than mere animal existence. If the right to livelihood is not treated as part of the constitutional right to life, the easiest way of depriving a person of his life would be to deprive him of his means of livelihood to the point of abrogation."
- Fundamental Rights in Part III were harmonized with Directive Principles (Article 39(a) securing adequate means of livelihood and Article 41 right to work).

II. BALANCING LIVELIHOOD WITH PUBLIC ORDER & ENCROACHMENTS:
The Court rejected the radical argument that the right to livelihood confers an absolute right to permanently occupy public streets:
1. Primary Purpose of Pavements: Footpaths are constructed to facilitate pedestrian passage. No individual has a fundamental right to encroach upon public highways, creating public nuisance and safety hazards.
2. The Procedural Shield of Article 21: While the State has the authority to clear unauthorized encroachments under municipal laws, it cannot do so arbitrarily or summarily through bulldozer evictions.
3. Natural Justice Mandatory: Section 314 of the Bombay Municipal Corporation Act empowering commissioner to remove huts without notice was read down: fair hearing and reasonable notice before demolition are mandatory.

CONCLUSION:
Olga Tellis harmonizes urban public convenience with human empathy: unauthorized encroachments may be removed, but eviction must strictly adhere to procedural due process and rehabilitation planning.`,
    scoringRubric: [
      { criterion: 'CJI Chandrachud formulation: Life includes livelihood', marks: 4 },
      { criterion: 'Harmonization with Articles 39(a) and 41 DPSPs', marks: 2.5 },
      { criterion: 'Public purpose of footpaths vs absolute squatting claim', marks: 3.5 },
      { criterion: 'Mandatory Natural Justice (fair notice/hearing) & conclusion', marks: 5 }
    ]
  },

  {
    id: 'mains-15m-preventive-detention-art22',
    title: 'Preventive Detention Safeguards under Article 22: Advisory Boards & Unreasonable Delay',
    topicId: 'art-20-22-custodial-forensics',
    marksCategory: 15,
    examCategory: 'PROSECUTION',
    examsAppeared: ['Prosecution (CBI / State APO) 2017, 2022', 'DJS Criminal Law 2018, 2022', 'Bihar Judicial 2019'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~12 Mins',
    targetWordMin: 230,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~30 lines)',
    targetTimeMinutes: 12,
    questionText: `Critically examine the constitutional safeguards guaranteed to a preventive detainee under Article 22(4) to Article 22(7). What is the effect of an unexplained delay by the Government in considering a detainee's representation?`,
    coreIssues: [
      'Preventive detention as a necessary evil recognized in the Indian Constitution (unlike US/UK).',
      'Article 22(4) 3-month detention ceiling without Advisory Board confirmation.',
      'Article 22(5) dual mandates: Communicating grounds "as soon as may be", and affording "earliest opportunity" to make representation.',
      'Unexplained executive delay in deciding representation vitiates the detention order.'
    ],
    examinerExpectation:
      'Candidate must explain Article 22(4)-(7), detail the role of Advisory Boards, analyze the dual rights under Article 22(5), and explain established precedents (Kamleshkumar Ishwardas Patel, Rekha, and Mallada K. Sri Ram) where unexplained executive delay in deciding representations led to quashing detention orders.',
    essentialCitations: [
      'A.K. Roy v. Union of India ((1982) 1 SCC 271; 5-Judge Bench)',
      'Kamleshkumar Ishwardas Patel v. Union of India ((1995) 4 SCC 51)',
      'Rekha v. State of T.N. ((2011) 5 SCC 244)',
      'Mallada K. Sri Ram v. State of Telangana (2022 SCC OnLine SC 424)'
    ],
    hoverIntel: {
      topicName: 'Preventive Detention Safeguards (Article 22)',
      topicPillar: 'Part III: Fundamental Rights • Personal Liberty (Article 22(4)-(7))',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Prosecution Benchmark)',
      examFrequency: 'Appeared in DJS Criminal Law, CBI PP, and State APO exams',
      weightagePattern: '15 Marks • 250–300 Words (1.5 Pages)',
      targetTimeMinutes: 12,
      examinerTrapWarning:
        'Trap Alert: Preventive detention does NOT require proof beyond reasonable doubt! Because it is precautionary without trial, courts enforce procedural compliance with hyper-strict technicality. Any minor unexplained delay in deciding representation sets the detainee free!',
      recentTrendAlert: 'Supreme Court repeatedly quashes preventive detention orders where ordinary penal laws suffice.',
      coreArticles: ['Article 22(4)', 'Article 22(5)', 'Article 21'],
      benchmarkCases: ['A.K. Roy (1982)', 'Kamleshkumar Patel (1995)', 'Mallada K. Sri Ram (2022)']
    },
    answerBlueprint: {
      step1Intro: 'Introduce Preventive Detention: Incarceration without trial based on executive suspicion to prevent future prejudicial acts (NSA, PITNDPS, COFEPOSA). India is unique in constitutionalizing preventive detention in Part III.',
      step2DoctrinalCore: 'Enumerate Article 22(4) Safeguards: Maximum 3-month detention unless an Advisory Board (comprising High Court judges/qualified persons) confirms sufficient cause within 3 months.',
      step3PrecedentEvolution: 'Analyze the Dual Mandates of Article 22(5): (1) Grounds must be communicated as soon as may be in a language the detainee understands, (2) Detainee must be afforded earliest opportunity of making a representation.',
      step4Conclusion: 'Detail Unexplained Delay Ratio: The right to representation is illusory if the Government sits on it. Unexplained delay of even a few days in deciding the representation violates Article 22(5), rendering the detention void ab initio (Rekha & Mallada K. Sri Ram).'
    },
    fullModelAnswer: `I. PREVENTIVE DETENTION: A CONSTITUTIONAL ANOMALY:
Preventive detention is precautionary incarceration without charge or trial, executed to prevent future crimes. India is among the few democratic constitutions that expressly recognize peacetime preventive detention within its Fundamental Rights chapter (Article 22(3)–(7)).
Because it bypasses the ordinary procedural protections of judicial trial and rules of evidence, courts insist on literal, hyper-strict compliance with constitutional safeguards.

II. PROCEDURAL SAFEGUARDS UNDER ARTICLE 22(4) TO 22(7):
1. Advisory Board Scrutiny (Article 22(4)): No person can be detained beyond three months unless an independent Advisory Board reports, before the expiration of three months, that there is sufficient cause for such detention.
2. The Dual Mandate of Article 22(5):
   - Right to Grounds: The detaining authority must communicate the grounds of detention "as soon as may be" in a script/language the detainee understands.
   - Right to Earliest Representation: The authority must afford the detainee the "earliest opportunity of making a representation" against the order.
3. Article 22(6) Exception: Facts whose disclosure is against public interest may be withheld.

III. THE FATAL CONSEQUENCE OF UNEXPLAINED DELAY:
In Kamleshkumar Ishwardas Patel (1995) and Rekha v. State of T.N. (2011), the Supreme Court established strict jurisprudence:
- Independent Executive Consideration: The Government must consider and decide the detainee's representation expeditiously.
- Invalidation on Unexplained Delay: In Mallada K. Sri Ram (2022), the Court reaffirmed that unexplained delay in disposing of a representation breaches the core guarantee of Article 22(5). Any lethargy or bureaucratic delay automatically vitiates the detention order, entitling the detainee to immediate release on a writ of Habeas Corpus.

CONCLUSION:
Strict procedural compliance is the sole constitutional barrier against executive tyranny in preventive detention.`,
    scoringRubric: [
      { criterion: 'Preventive detention concept & hyper-strict judicial scrutiny', marks: 3 },
      { criterion: 'Article 22(4) 3-month limit & Advisory Board role', marks: 3 },
      { criterion: 'Article 22(5) dual mandates: grounds & earliest representation', marks: 4.5 },
      { criterion: 'Unexplained executive delay vitiating detention order & Habeas Corpus', marks: 4.5 }
    ]
  },

  // =========================================================================
  // 20 MARKS / 450–500 WORDS (TIER 4: COMPREHENSIVE DOCTRINES & LONG ESSAYS)
  // =========================================================================
  {
    id: 'mains-20m-basic-structure-evolution',
    title: 'The Evolution of the Basic Structure Doctrine: From Shankari Prasad to Kesavananda Bharati',
    topicId: 'basic-structure-amending-power',
    marksCategory: 20,
    examCategory: 'ALL',
    examsAppeared: ['UPSC Law Optional 2014, 2018, 2022', 'UP PCS-J 2015, 2018, 2023', 'Bihar Judicial 2016, 2021', 'DJS 2017, 2022'],
    typicalMarks: 20,
    targetWordLimit: '450–500 Words | Time: ~15 Mins',
    targetWordMin: 420,
    targetWordMax: 520,
    estimatedPages: '2.0 Pages (~42 lines)',
    targetTimeMinutes: 15,
    questionText: `Critically trace the titanic constitutional struggle between Parliament's constituent amending power under Article 368 and the Judiciary's power of judicial review from Shankari Prasad (1951) to Kesavananda Bharati (1973) and Minerva Mills (1980). Has the Basic Structure Doctrine made the Supreme Court a third chamber of the legislature?`,
    coreIssues: [
      'The textual conflict between Article 13(2) ("law" includes constitutional amendment?) and Article 368.',
      'Phase 1: Plenary amending power in Shankari Prasad (1951) and Sajjan Singh (1965).',
      'Phase 2: Judicial pendulum swing in I.C. Golak Nath (1967) declaring Fundamental Rights transcendental.',
      'Phase 3: The 24th and 25th Amendments and the historic compromise in Kesavananda Bharati (1973, 13-Judge Bench).',
      'Phase 4: Consolidation in Indira Gandhi v. Raj Narain (1975) and Minerva Mills (1980).',
      'Critical evaluation: Judicial supremacy vs democratic parliamentary legitimacy.'
    ],
    examinerExpectation:
      'Candidate must trace all 5 historical stages chronologically, explain the German origin (Dietrich Conrad), analyze the 7:6 majority in Kesavananda Bharati, define what constitutes the Basic Structure, cite Minerva Mills (1980), and critically evaluate whether it acts as an undemocratic judicial veto or a necessary constitutional safeguard.',
    essentialCitations: [
      'Shankari Prasad v. Union of India (1952 SCR 89)',
      'Sajjan Singh v. State of Rajasthan (1965 1 SCR 933)',
      'I.C. Golak Nath v. State of Punjab (1967 2 SCR 762; 11-Judge Bench)',
      'Kesavananda Bharati v. State of Kerala ((1973) 4 SCC 225; 13-Judge Bench)',
      'Indira Nehru Gandhi v. Raj Narain (1975 Supp SCC 1)',
      'Minerva Mills Ltd. v. Union of India ((1980) 3 SCC 625)'
    ],
    hoverIntel: {
      topicName: 'Evolution of Basic Structure Doctrine',
      topicPillar: 'Part XX: Amendment of the Constitution (Article 368)',
      examImportance: '⭐⭐⭐⭐⭐ Guaranteed Master Epic (Highest Weightage)',
      examFrequency: 'Asked in every single major legal examination in India',
      weightagePattern: '20 Marks • 450–500 Words (2.0 Pages)',
      targetTimeMinutes: 15,
      examinerTrapWarning:
        'Trap Alert: Acknowledge that the Basic Structure is NOT an exhaustive list! In Kesavananda, the judges gave illustrative examples (democracy, secularism, separation of powers, judicial review, federalism). Over decades, new features like rule of law and equality were added incrementally!',
      recentTrendAlert: 'NJAC (2015) and Electoral Bonds (2024) reaffirmed Basic Structure supremacy.',
      coreArticles: ['Article 368', 'Article 13', 'Article 31C'],
      benchmarkCases: ['Shankari Prasad (1951)', 'Golak Nath (1967)', 'Kesavananda (1973)', 'Minerva Mills (1980)']
    },
    answerBlueprint: {
      step1Intro: 'Introduce the core question: Does Parliament\'s amending power under Article 368 know any constitutional boundary, or can Parliament repeal the entire Constitution?',
      step2DoctrinalCore: 'Trace Phase 1 & 2: Shankari Prasad (1951) and Sajjan Singh (1965) held constituent power is plenary; "law" in Art 13(2) does not include amendments. Golak Nath (1967, 11 judges) reversed this, holding Part III transcendental.',
      step3PrecedentEvolution: 'Detail the Kesavananda Bharati Watershed (1973, 13-Judge Bench): By a 7:6 majority, the Court overruled Golak Nath, synthesizing a historic compromise: Parliament can amend ANY part of the Constitution (including Part III), BUT cannot alter its "Basic Structure".',
      step4Conclusion: 'Analyze Minerva Mills (1980) and critique: Struck down Section 55 of 42nd Amendment attempting to confer unlimited amending power on Parliament. Conclude that Basic Structure preserves constitutional identity, preventing temporary majorities from subverting democracy.'
    },
    fullModelAnswer: `I. THE TITANIC CONFLICT OVER CONSTITUENT POWER:
The most dramatic constitutional conflict in post-independence India was waged over the boundary between Parliament's amending power under Article 368 and the sanctity of Fundamental Rights under Article 13(2). Can an elected parliamentary majority use Article 368 to amend the Constitution out of existence?

II. THE FOUR HISTORICAL ACTS OF THE AMENDMENT DRAMA:

1. Act I: The Era of Plenary Parliamentary Supremacy (1951–1965):
In Shankari Prasad (1951) and Sajjan Singh (1965), the Supreme Court adopted textual literalism:
- The Court distinguished between ordinary legislative power and constituent amending power.
- Held that the word "law" in Article 13(2) refers only to ordinary legislation, not constitutional amendments passed under Article 368. Parliament had absolute power to amend any provision, including Fundamental Rights.
(However, Justice Mudholkar in Sajjan Singh presciently questioned whether the Constitution had "basic features" that could not be changed).

2. Act II: The Golak Nath Watershed (1967, 11-Judge Bench):
Alarmed by repeated land reform amendments, a 6:5 majority led by CJI Subba Rao reversed previous rulings:
- Held that Article 368 merely prescribed the procedure, not the substantive power to amend.
- Ruled that an amendment is "law" under Article 13(2); Fundamental Rights occupy a transcendental position immune from amendment.

3. Act III: The 24th Amendment & Kesavananda Bharati (1973, 13-Judge Bench):
Parliament reacted by enacting the 24th Amendment, explicitly stating that Article 13 does not apply to Article 368 amendments.
In Kesavananda Bharati (1973), a 13-Judge Bench delivered an epochal 7:6 synthesis:
- Overruled Golak Nath: Affirmed that Parliament has the constituent power to amend any part of the Constitution, including Fundamental Rights.
- Formulated the Basic Structure Doctrine: Parliament's amending power is not unlimited; it is subject to an inherent implied limitation. The word "amend" implies retaining the identity of the original document. Parliament can modify, but cannot alter, damage, or destroy the "Basic Structure" or essential identity of the Constitution (e.g. Supremacy of Constitution, Republican democracy, Secularism, Separation of powers, Federalism, Judicial Review).

4. Act IV: Consolidation in Indira Gandhi (1975) & Minerva Mills (1980):
In Indira Nehru Gandhi (1975), the Court struck down the 39th Amendment (Article 329A) which immunized the Prime Minister's election from judicial review.
In Minerva Mills (1980), the Court struck down Section 55 of the 42nd Amendment, which claimed to confer unlimited amending power on Parliament, holding that "a limited amending power is itself a basic feature of the Constitution."

III. CRITIQUE: THIRD CHAMBER OR CONSTITUTIONAL SHIELD?
Critics argue that the Basic Structure is vague, judicially subjective, and converts non-elected judges into a "third legislative chamber."
However, historical reality demonstrates that without the Basic Structure doctrine, temporary majorities during the Emergency could have converted India into an authoritarian one-party state.

CONCLUSION:
The Basic Structure Doctrine maintains the supremacy of the Constitution over the supremacy of Parliament, preserving the enduring soul of the Republic.`,
    scoringRubric: [
      { criterion: 'Textual tension: Art. 13(2) vs Art. 368 constituent power', marks: 3 },
      { criterion: 'Chronological evolution: Shankari Prasad, Sajjan Singh, and Golak Nath', marks: 5 },
      { criterion: 'Kesavananda Bharati 1973 13-Judge Bench 7:6 majority compromise', marks: 6 },
      { criterion: 'Minerva Mills 1980 limited amending power as Basic Feature', marks: 3 },
      { criterion: 'Critical appraisal (Third chamber vs Constitutional Shield)', marks: 3 }
    ]
  },

  {
    id: 'mains-20m-article-142-complete-justice',
    title: 'Article 142 "Complete Justice" Inherent Powers: Limitations & Substantive Statutory Law',
    topicId: 'higher-judiciary-collegium-142',
    marksCategory: 20,
    examCategory: 'DJS',
    examsAppeared: ['DJS 2018, 2023', 'UPSC Law Optional 2019, 2022', 'UP PCS-J 2023', 'Bihar Judicial 2021'],
    typicalMarks: 20,
    targetWordLimit: '450–500 Words | Time: ~15 Mins',
    targetWordMin: 420,
    targetWordMax: 520,
    estimatedPages: '2.0 Pages (~42 lines)',
    targetTimeMinutes: 15,
    questionText: `Analyze the nature and extent of the Supreme Court's inherent power to do "Complete Justice" under Article 142. Can the Supreme Court exercise Article 142 powers in direct contravention of substantive statutory law? Trace the shift from Prem Chand Garg to Union Carbide and Supreme Court Bar Association.`,
    coreIssues: [
      'Textual scope of Article 142(1): Power to pass decrees or orders necessary for doing complete justice.',
      'The initial limitation in Prem Chand Garg (1963): Inherent powers cannot contravene express statutory provisions.',
      'The expansion in Union Carbide (1991): Article 142 is plenary and not subject to statutory prohibitions.',
      'The corrective in Supreme Court Bar Association v. Union of India (1998): Article 142 cannot supplant substantive statutory law.',
      'Recent applications: Direct grant of divorce on irretrievable breakdown (Shilpa Sailesh 2023).'
    ],
    examinerExpectation:
      'Candidate must trace Prem Chand Garg $\to$ Union Carbide (Bhopal Gas) $\to$ Supreme Court Bar Association (1998, 5 judges) $\to$ Shilpa Sailesh (2023, 5 judges). Clarify that Article 142 is a corrective, supplemental power that cannot override fundamental statutory provisions.',
    essentialCitations: [
      'Prem Chand Garg v. Excise Commissioner, U.P. (1963 Supp (1) SCR 439)',
      'Union Carbide Corporation v. Union of India ((1991) 4 SCC 584)',
      'Supreme Court Bar Association v. Union of India ((1998) 4 SCC 409; 5-Judge Bench)',
      'Shilpa Sailesh v. Varun Sreenivasan (2023 INSC 468; 5-Judge Bench)'
    ],
    hoverIntel: {
      topicName: 'Article 142: Inherent Powers for Complete Justice',
      topicPillar: 'Part V: The Union Judiciary (Article 142)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Judiciary Benchmark)',
      examFrequency: 'Regular in DJS, UP PCS-J, and UPSC Law Optional',
      weightagePattern: '20 Marks • 450–500 Words (2.0 Pages)',
      targetTimeMinutes: 15,
      examinerTrapWarning:
        'Trap Alert: The Supreme Court CANNOT suspend an advocate\'s license under Article 142 for contempt of court, because the Advocates Act, 1961 vests professional disciplinary power exclusively in the Bar Council (Supreme Court Bar Association 1998)!',
      recentTrendAlert: 'Shilpa Sailesh (2023) held SC can grant divorce on irretrievable breakdown, dispensing with 6-month cooling period under Hindu Marriage Act.',
      coreArticles: ['Article 142', 'Article 141', 'Article 129'],
      benchmarkCases: ['Prem Chand Garg (1963)', 'Union Carbide (1991)', 'SCBA (1998)', 'Shilpa Sailesh (2023)']
    },
    answerBlueprint: {
      step1Intro: 'Quote Article 142(1): "The Supreme Court in the exercise of its jurisdiction may pass such decree or make such order as is necessary for doing complete justice in any cause or matter pending before it."',
      step2DoctrinalCore: 'Trace Phase 1: Prem Chand Garg (1963): Order under Article 142 must not be inconsistent with fundamental rights and cannot contravene express statutory provisions.',
      step3PrecedentEvolution: 'Trace Phase 2: Union Carbide (1991, Bhopal Gas): Held Article 142 powers are plenary and of constitutional origin, unconstrained by statutory prohibitions. Withdrew all criminal cases.',
      step4Conclusion: 'Trace Phase 3 & Modern Reconciliation: Supreme Court Bar Association (1998) rectified Union Carbide: Article 142 cannot supplant substantive statutory law; it is supplementary. Reaffirmed in Shilpa Sailesh (2023) for dissolving irretrievably broken marriages.'
    },
    fullModelAnswer: `I. THE CONSTITUTIONAL CHARTER OF ARTICLE 142:
Article 142(1) confers a unique, extraordinary constitutional power:
"The Supreme Court in the exercise of its jurisdiction may pass such decree or make such order as is necessary for doing complete justice in any cause or matter pending before it."
While ordinary courts are fettered by procedural technicalities, Article 142 ensures that the Supreme Court is not disabled from rendering substantial justice.

II. THE JURISPRUDENTIAL CONFLICT OVER STATUTORY STATUTES:

1. Phase I: Strict Subordination to Statute (Prem Chand Garg, 1963):
In Prem Chand Garg (1963), a 5-Judge Bench held that powers under Article 142, though wide, cannot be exercised in contravention of express statutory prohibitions:
"An order which this Court can make in order to do complete justice cannot be inconsistent with the substantive provisions of the relevant statutory laws."

2. Phase II: The Plenary Supremacy Doctrine (Union Carbide, 1991):
In the Bhopal Gas Leak Case (Union Carbide Corp. v. UOI, 1991), a 5-Judge Bench broke away from Prem Chand Garg:
- The Court held that power under Article 142 is of constitutional origin and cannot be circumscribed by ordinary statutory limitations.
- The Court terminated all criminal prosecutions against Union Carbide executives to enforce a global settlement of \$470 million.

3. Phase III: The Corrective Course in Supreme Court Bar Association (1998):
In Supreme Court Bar Association v. Union of India (1998) 4 SCC 409, a 5-Judge Constitution Bench overruled the sweeping observations in Union Carbide:
- Supplementary, Not Supplanting: Article 142 is designed to fill statutory gaps to do complete justice; it CANNOT be used to supplant, rewrite, or ignore substantive statutory law.
- Professional Discipline Limit: The Court ruled that while it can punish an advocate for contempt under Article 129, it CANNOT suspend an advocate's license to practice under Article 142, as the power of professional debarment is vested exclusively in the State Bar Council under the Advocates Act, 1961.

III. MODERN APPLICATION: DISSOLUTION OF MARRIAGE (SHILPA SAILESH, 2023):
In Shilpa Sailesh v. Varun Sreenivasan (2023 INSC 468), a 5-Judge Bench held that the Supreme Court can invoke Article 142 to grant a decree of divorce on the ground of "irretrievable breakdown of marriage," dispensing with the mandatory 6-month cooling-off period under Section 13B of the Hindu Marriage Act, without relegating parties to years of destructive litigation.

CONCLUSION:
Article 142 is the ultimate reservoir of equitable justice: a supplemental constitutional instrument that breathes life into the rule of law without demolishing statutory foundations.`,
    scoringRubric: [
      { criterion: 'Article 142(1) text & complete justice objective', marks: 3 },
      { criterion: 'Prem Chand Garg 1963 statutory limitation rule', marks: 3.5 },
      { criterion: 'Union Carbide 1991 plenary expansion & Bhopal settlement', marks: 4.5 },
      { criterion: 'Supreme Court Bar Association 1998 corrective synthesis', marks: 5 },
      { criterion: 'Shilpa Sailesh 2023 marriage dissolution application', marks: 4 }
    ]
  },

  {
    id: 'mains-20m-constitutional-secularism',
    title: 'Constitutional Secularism in India: Tolerant Amity (Sarva Dharma Sambhava) vs Western Wall of Separation',
    topicId: 'freedom-of-religion-erp',
    marksCategory: 20,
    examCategory: 'UP_PCSJ',
    examsAppeared: ['UP PCS-J 2016, 2023', 'Bihar Judicial 2016, 2021', 'UPSC Law Optional 2015, 2020'],
    typicalMarks: 20,
    targetWordLimit: '450–500 Words | Time: ~15 Mins',
    targetWordMin: 420,
    targetWordMax: 520,
    estimatedPages: '2.0 Pages (~42 lines)',
    targetTimeMinutes: 15,
    questionText: `Critically contrast the Indian concept of "Secularism" with the Western/French model of strict separation of Church and State. How did S.R. Bommai entrench Secularism as a Basic Feature of the Constitution, and how does the State legitimately reform religious practices under Article 25(2)?`,
    coreIssues: [
      'The Western model: Strict wall of separation (Jeffersonian model / French Laïcité).',
      'The Indian model: Principled distance, equal respect for all faiths (Sarva Dharma Sambhava).',
      'The State as an active reformer: Article 25(2)(b) throwing open Hindu temples to all classes.',
      'Secularism as an immutable Basic Feature in S.R. Bommai (1994).',
      'Contemporary tensions: The Essential Religious Practices test vs reform.'
    ],
    examinerExpectation:
      'Candidate must contrast Indian secularism with Western models, explain Dr. Radhakrishnan and Nehru\'s vision, detail S.R. Bommai (1994) establishing secularism as basic structure, analyze the State\'s constitutional duty to intervene for social reform under Article 25(2), and cite Shirur Mutt and Sabarimala.',
    essentialCitations: [
      'Commr., HRE v. Sri Lakshmindra Thirtha Swamiar (Shirur Mutt) (1954 SCR 1005)',
      'Sardar Syedna Taher Saifuddin v. State of Bombay (1962 Supp (2) SCR 496)',
      'S.R. Bommai v. Union of India ((1994) 3 SCC 1; 9-Judge Bench)',
      'Indian Young Lawyers Assn. v. State of Kerala (Sabarimala) ((2019) 11 SCC 1)'
    ],
    hoverIntel: {
      topicName: 'Secularism as Basic Structure & Social Reform',
      topicPillar: 'Part III & Preamble: Religious Freedom & Secularism (Articles 25–28)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Master Essay Core)',
      examFrequency: 'Recurring master essay in UPSC Law Optional and UP PCS-J',
      weightagePattern: '20 Marks • 450–500 Words (2.0 Pages)',
      targetTimeMinutes: 15,
      examinerTrapWarning:
        'Trap Alert: Indian secularism is NOT anti-religious! Unlike French Laïcité which bans all religious symbols from public spaces, Indian secularism practices "Principled Distance"—the State respects all religions equally and actively finances/regulates them for social welfare!',
      recentTrendAlert: 'Reaffirmed in Places of Worship Act challenges.',
      coreArticles: ['Preamble', 'Article 25', 'Article 26', 'Article 27', 'Article 28'],
      benchmarkCases: ['Shirur Mutt (1954)', 'S.R. Bommai (1994)', 'Sabarimala (2018)']
    },
    answerBlueprint: {
      step1Intro: 'Define the dichotomy: Western secularism (strict wall of separation between Church and State) versus the Indian model (*Sarva Dharma Sambhava*—equal respect for all religions). Added to Preamble by 42nd Amendment (1976).',
      step2DoctrinalCore: 'Analyze S.R. Bommai v. Union of India (1994, 9-Judge Bench): Secularism is an immutable component of the Basic Structure. Politics and religion cannot be mixed; a political party running a state government on unsecular manifestos can be dismissed under Article 356.',
      step3PrecedentEvolution: 'Detail the Reformist State (Article 25(2)): Unlike the West, the Indian state is not passive. Article 25(2)(b) expressly empowers the State to enact laws throwing open Hindu religious institutions of a public character to all classes and sections (eradicating caste untouchability).',
      step4Conclusion: 'Conclude with Sabarimala (2018): Modern secularism prioritizes individual human dignity and constitutional morality over regressive ecclesiastical patriarchy.'
    },
    fullModelAnswer: `I. THE CONCEPTUAL DICHOTOMY: WESTERN VS INDIAN SECULARISM:
Secularism under the Indian Constitution is fundamentally distinct from Western paradigms:
1. The Western Model (Jeffersonian / French Laïcité):
Originating in post-Reformation Europe, the Western model insists upon a rigid, impassable "wall of separation" between the Church and the State. The State is blind to religion, religion is banished from the public sphere, and the State does not aid, finance, or reform religious bodies.
2. The Indian Model (*Sarva Dharma Sambhava* & Principled Distance):
As expounded by Dr. S. Radhakrishnan, Indian secularism is not atheistic, anti-religious, or indifferent to faith. It embodies equal tolerance and respect for all religions (*Sarva Dharma Sambhava*). The State maintains "principled distance": it has no state religion, does not discriminate on religious grounds (Art. 15), yet actively intervenes to protect pluralism and reform social evils.

II. SECULARISM AS BASIC STRUCTURE: S.R. BOMMAI (1994):
Though the word "Secular" was formally inserted into the Preamble by the 42nd Amendment (1976), the 9-Judge Constitution Bench in S.R. Bommai (1994) held that secularism was an intrinsic, unalterable feature of the Basic Structure from the inception of the Republic:
1. Separation of Religion from State Politics: Freedom of religion is guaranteed to individuals and denominations, but religion cannot be introduced into secular state governance.
2. Dismissal of Unsecular Governments: If a political party in power pursues policies that subvert secularism or promote communal violence, it constitutes a failure of constitutional machinery justifying dismissal under Article 356.

III. THE STATE AS AN ACTIVE REFORMER (ARTICLE 25(2)):
Unlike Western regimes which cannot touch religious orthodoxy, the Indian Constitution deliberately mandates state reform:
- Article 25(2)(b) empowers the State to provide for social welfare and reform, and to throw open Hindu, Jain, and Sikh religious institutions to all classes and sections, eradicating historic practices of untouchability and temple exclusion (Sri Venkataramana Devaru, 1958).
- Modern Constitutional Morality (Sabarimala, 2018): The Court held that patriarchal taboos excluding women cannot claim protection under Article 25; freedom of religion must harmonize with individual dignity under Article 21.

CONCLUSION:
Indian secularism is an active constitutional charter of inclusive fraternity, guaranteeing religious freedom while empowering the State to purge discriminatory practices.`,
    scoringRubric: [
      { criterion: 'Western rigid wall separation vs Indian Sarva Dharma Sambhava', marks: 4 },
      { criterion: 'S.R. Bommai 1994 9-Judge Bench Basic Structure formulation', marks: 5 },
      { criterion: 'Article 25(2)(b) reformist mandate throwing open temples', marks: 4.5 },
      { criterion: 'Sabarimala 2018 Constitutional Morality integration', marks: 4 },
      { criterion: 'Comprehensive concluding synthesis', marks: 2.5 }
    ]
  },

  {
    id: 'mains-20m-indian-federalism-bommai',
    title: 'Federalism in the Indian Constitutional Scheme: Quasi-Federal vs Cooperative Federalism (NCT of Delhi Services 2023)',
    topicId: 'centre-state-relations-pith-substance',
    marksCategory: 20,
    examCategory: 'UPSC_LAW',
    examsAppeared: ['UPSC Law Optional 2023, 2024', 'DJS 2023', 'UP PCS-J 2023', 'Bihar Judicial 2021'],
    typicalMarks: 20,
    targetWordLimit: '450–500 Words | Time: ~15 Mins',
    targetWordMin: 420,
    targetWordMax: 520,
    estimatedPages: '2.0 Pages (~42 lines)',
    targetTimeMinutes: 15,
    questionText: `Critically evaluate the nature of Indian Federalism. Has the Constitution created a "Quasi-Federal" structure with a strong centralizing bias, or an enduring framework of "Cooperative Federalism"? Examine the 5-Judge Constitution Bench judgment in Government of NCT of Delhi v. Union of India (Services Case 2023).`,
    coreIssues: [
      'K.C. Wheare\'s description of the Indian Constitution as "Quasi-Federal".',
      'The centralizing unitary features (Emergency powers, Governor\'s appointment, Single Judiciary, Art 3 territorial redrawing).',
      'The federal basic structure in S.R. Bommai (1994).',
      'The triple chain of democratic accountability articulated by CJI Chandrachud in NCT of Delhi (2023).',
      'Asymmetric federalism and collaborative federal governance.'
    ],
    examinerExpectation:
      'Candidate must analyze K.C. Wheare\'s "Quasi-Federal" thesis, contrast it with S.R. Bommai (federalism as Basic Structure), detail the 5-Judge Bench in NCT of Delhi Services (2023) establishing the "Triple Chain of Accountability" (Civil Servants $\to$ Ministers $\to$ Legislature $\to$ Voters), and synthesize cooperative federalism.',
    essentialCitations: [
      'State of West Bengal v. Union of India (1964 1 SCR 371)',
      'S.R. Bommai v. Union of India ((1994) 3 SCC 1; 9-Judge Bench)',
      'Government of NCT of Delhi v. Union of India (2018 5-Judge Bench) ((2018) 8 SCC 501)',
      'Government of NCT of Delhi v. Union of India (Services Case 2023) (2023 INSC 518; 5-Judge Bench)'
    ],
    hoverIntel: {
      topicName: 'Indian Federalism & The Triple Chain of Accountability',
      topicPillar: 'Part XI & Part VIII: Federal Structure (Articles 246, 239AA & Seventh Schedule)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Federalism Benchmark)',
      examFrequency: 'Top recurring essay in UPSC Law Optional and State Judicial Mains',
      weightagePattern: '20 Marks • 450–500 Words (2.0 Pages)',
      targetTimeMinutes: 15,
      examinerTrapWarning:
        'Trap Alert: Detail CJI Chandrachud\'s "Triple Chain of Democratic Accountability": (1) Civil servants are accountable to the elected Cabinet, (2) The Cabinet is accountable to the elected Legislature, (3) The Legislature is accountable to the People. Severing any link destroys democracy!',
      recentTrendAlert: 'Parliament enacted the Government of National Capital Territory of Delhi (Amendment) Act, 2023 to bypass the judgment.',
      coreArticles: ['Article 1', 'Article 239AA', 'Article 246', 'Article 356'],
      benchmarkCases: ['State of West Bengal (1963)', 'S.R. Bommai (1994)', 'NCT of Delhi Services (2023)']
    },
    answerBlueprint: {
      step1Intro: 'Introduce K.C. Wheare\'s classification: Described India as "Quasi-Federal" (a unitary state with subsidiary federal features, rather than a federal state with subsidiary unitary features).',
      step2DoctrinalCore: 'Analyze Unitary Tilt: Single Constitution, unified judiciary, emergency powers under Part XVIII, Governor as central nominee, and Article 3 allowing Parliament to alter State boundaries without State consent.',
      step3PrecedentEvolution: 'Detail the Judicial Re-anchoring in S.R. Bommai (1994): 9-Judge Bench declared Federalism an indispensable component of the Basic Structure. States are not mere administrative delegates of the Union; within their spheres, States are sovereign.',
      step4Conclusion: 'Detail NCT of Delhi v. Union of India (Services Case, 2023): CJI Chandrachud expounded the "Triple Chain of Accountability" under Article 239AA: An elected government must have control over civil servants, otherwise parliamentary democracy collapses.'
    },
    fullModelAnswer: `I. THE NATURE OF INDIAN FEDERALISM: QUASI-FEDERAL OR SUI GENERIS?
Comparative jurist K.C. Wheare characterized the Indian Constitution as "Quasi-Federal"—a unitary state with subsidiary federal features. In State of West Bengal (1963), the Supreme Court conceded that Indian federalism lacks the classic sovereignty of American states.
1. The Unitary Bias:
- Non-Destructible Union of Destructible States (Article 3);
- Single integrated judicial hierarchy and all-India civil services (IAS/IPS);
- Emergency powers under Articles 352, 356, and 360 subordinating State autonomy;
- Appointment and discretionary powers of Governors under Article 200.

II. THE CONSTITUTIONAL TRANSFORMATION: S.R. BOMMAI (1994):
In S.R. Bommai v. Union of India (1994), a 9-Judge Constitution Bench settled that Federalism is an inviolable Basic Feature of the Constitution:
- States are not appendages or administrative agents of the Centre.
- Within the spheres demarcated by the Seventh Schedule, States possess independent sovereign constitutional authority. The Union cannot encroach upon State fields under the guise of national interest.

III. THE TRIPLE CHAIN OF ACCOUNTABILITY: NCT OF DELHI (SERVICES, 2023):
In Government of NCT of Delhi v. Union of India (2023 INSC 518), a unanimous 5-Judge Constitution Bench led by CJI D.Y. Chandrachud linked federalism directly with democratic accountability:
1. The Triple Chain of Accountability:
   - First Link: Civil servants are accountable to the elected Council of Ministers.
   - Second Link: The Council of Ministers is collectively accountable to the elected Legislative Assembly.
   - Third Link: The Legislative Assembly is periodically accountable to the sovereign People (voters).
If an elected State government has no administrative control over civil servants (postings, transfers, and discipline), the first link is broken, rendering elected ministers impotent and destroying democratic governance.
2. Asymmetric Federalism Validated: The Court held that Article 239AA creates a special model of asymmetric federalism where Delhi's elected government exercises executive authority over all subjects in List II (except Police, Public Order, and Land).

CONCLUSION:
Indian federalism is a dynamic framework of "Cooperative and Asymmetric Federalism." Federalism is not a mechanical division of powers, but a vital institutional safeguard for democratic representation.`,
    scoringRubric: [
      { criterion: 'K.C. Wheare Quasi-Federal thesis vs Unitary characteristics', marks: 3.5 },
      { criterion: 'S.R. Bommai 1994 declaration of Federalism as Basic Structure', marks: 4 },
      { criterion: 'NCT of Delhi 2023 Triple Chain of Democratic Accountability', marks: 5.5 },
      { criterion: 'Asymmetric federalism & cooperative governance synthesis', marks: 4 },
      { criterion: 'Comprehensive concluding evaluation', marks: 3 }
    ]
  }
];
