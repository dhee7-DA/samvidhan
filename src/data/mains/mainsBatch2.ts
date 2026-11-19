import type { MainsMasterQuestion } from '../../types/mainsQuestionTypes';

export const MAINS_BATCH_2: MainsMasterQuestion[] = [
  // =========================================================================
  // 5 MARKS / 100–120 WORDS (TIER 1: CRISP DOCTRINAL BENCHMARKS)
  // =========================================================================
  {
    id: 'mains-5m-pith-substance',
    title: 'Doctrine of Pith and Substance under Article 246',
    topicId: 'centre-state-relations-pith-substance',
    marksCategory: 5,
    examCategory: 'BJS',
    examsAppeared: ['Bihar Judicial 2016, 2021', 'UP PCS-J 2015, 2018', 'MP Judiciary 2019'],
    typicalMarks: 5,
    targetWordLimit: '100–120 Words | Time: ~4 Mins',
    targetWordMin: 90,
    targetWordMax: 130,
    estimatedPages: '0.5 Page (~12 lines)',
    targetTimeMinutes: 4,
    questionText: 'Explain the "Doctrine of Pith and Substance" in resolving legislative conflicts between Union and State Lists under the Seventh Schedule.',
    coreIssues: [
      'Incidental encroachment vs substantial legislative competence.',
      'Examining the true nature, character, and pith of the enactment.',
      'Saving beneficial legislation from being declared ultra vires.'
    ],
    examinerExpectation:
      'Candidate must explain that courts look at the true substance of the law, not its incidental encroachment. Cite Prafulla Kumar Mukherjee and State of Bombay v. F.N. Balsara.',
    essentialCitations: [
      'Prafulla Kumar Mukherjee v. Bank of Commerce, Khulna (AIR 1947 PC 60)',
      'State of Bombay v. F.N. Balsara (1951 SCR 682)',
      'State of Rajasthan v. G. Chawla (AIR 1959 SC 544)'
    ],
    hoverIntel: {
      topicName: 'Doctrine of Pith and Substance',
      topicPillar: 'Part XI: Legislative Relations (Article 246 & Seventh Schedule)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Short Note Core)',
      examFrequency: 'Tested repeatedly in Bihar Judicial, UP PCS-J, and MP Judiciary',
      weightagePattern: '5 Marks • 100–120 Words (0.5 Page)',
      targetTimeMinutes: 4,
      examinerTrapWarning:
        'Trap Alert: Incidental encroachment is permitted ONLY if the pith and substance falls within the legislature\'s assigned List. If encroachment is substantial, the Act is void!',
      recentTrendAlert: 'Applied recently in state mining tax validity disputes under Entry 49/50 List II.',
      coreArticles: ['Article 246', 'Seventh Schedule'],
      benchmarkCases: ['Prafulla Kumar (1947)', 'F.N. Balsara (1951)', 'G. Chawla (1959)']
    },
    answerBlueprint: {
      step1Intro: 'Define the doctrine: derived from Canadian constitutional law to preserve legislative federal balance.',
      step2DoctrinalCore: 'Explain that when an enactment is challenged for encroaching upon another List, courts ascertain its true nature and character ("pith and substance").',
      step3PrecedentEvolution: 'Detail Prafulla Kumar (1947): Bengal Money Lenders Act was in pith and substance "Money Lending" (List II), incidental encroachment on "Promissory Notes" (List I) did not invalidate it.',
      step4Conclusion: 'Reiterate F.N. Balsara: incidental overlap does not diminish legislative competence if substance is intra vires.'
    },
    fullModelAnswer: `I. ORIGIN & CONSTITUTIONAL PURPOSE:
Borrowed from Canadian jurisprudence, the Doctrine of Pith and Substance is applied under Article 246 to resolve overlapping legislative entries in the Seventh Schedule. Because subjects cannot be divided into watertight compartments, incidental encroachment by one legislature into another's field is inevitable.

II. THE "TRUE NATURE AND CHARACTER" TEST:
When a statute's validity is challenged:
1. True Nature: The Court examines the statute as a whole—its object, scope, and operational effects—to determine its true "pith and substance" (core essence).
2. Incidental Overlap Saved: If the substance falls within the enacting legislature's assigned field, incidental encroachment into another List will NOT render it ultra vires.

LANDMARK PRECEDENTS:
- Prafulla Kumar Mukherjee v. Bank of Commerce (1947): The Privy Council held that Bengal Money Lenders Act fell in pith and substance under "Money Lending" (State List); its incidental effect on promissory notes (Central List) was valid.
- State of Bombay v. F.N. Balsara (1951): Prohibition Act primarily regulated intoxicating liquors (List II); incidental impact on imports (List I) did not invalidate the Act.`,
    scoringRubric: [
      { criterion: 'Art. 246 purpose & non-watertight list theory', marks: 1.5 },
      { criterion: 'True nature & character test for incidental encroachment', marks: 2 },
      { criterion: 'Prafulla Kumar Mukherjee or Balsara citation', marks: 1.5 }
    ]
  },

  {
    id: 'mains-5m-colourable-legislation',
    title: 'Doctrine of Colourable Legislation',
    topicId: 'centre-state-relations-pith-substance',
    marksCategory: 5,
    examCategory: 'BJS',
    examsAppeared: ['Bihar Judicial 2014, 2018', 'MP Judiciary 2017, 2021', 'UP PCS-J 2016'],
    typicalMarks: 5,
    targetWordLimit: '100–120 Words | Time: ~4 Mins',
    targetWordMin: 90,
    targetWordMax: 130,
    estimatedPages: '0.5 Page (~12 lines)',
    targetTimeMinutes: 4,
    questionText: 'What is meant by the Doctrine of Colourable Legislation? Explain the maxim "What cannot be done directly cannot be done indirectly."',
    coreIssues: [
      'Maxim: Quando aliquid prohibetur ex directo, prohibetur et per obliquum.',
      'Question of legislative competence, NOT legislative motive or malice.',
      'Disguising an ultra vires act under the covert cloak of an intra vires power.'
    ],
    examinerExpectation:
      'Candidate must state the Latin maxim, cite K.C. Gajapati Narayan Deo (1953), and clarify that colourable legislation is strictly a question of legislative power/competence, not bona fides or mala fides.',
    essentialCitations: [
      'K.C. Gajapati Narayan Deo v. State of Orissa (1954 SCR 1)',
      'State of Bihar v. Kameshwar Singh (1952 SCR 889)',
      'R.S. Joshi v. Ajit Mills ((1977) 4 SCC 98)'
    ],
    hoverIntel: {
      topicName: 'Doctrine of Colourable Legislation',
      topicPillar: 'Part XI: Legislative Powers (Article 246)',
      examImportance: '⭐⭐⭐⭐ High Priority Conceptual',
      examFrequency: 'Appeared in Bihar Judicial 3 times and UP PCS-J',
      weightagePattern: '5 Marks • 100–120 Words (0.5 Page)',
      targetTimeMinutes: 4,
      examinerTrapWarning:
        'Trap Alert: Candidates mistakenly argue that "mala fides" or bad motive of legislators makes a law colourable. Courts NEVER inquire into legislative motive; colourable legislation is purely lack of legislative power disguised covertly!',
      recentTrendAlert: 'Regular short note companion to Pith and Substance.',
      coreArticles: ['Article 246', 'Article 245'],
      benchmarkCases: ['K.C. Gajapati (1953)', 'Kameshwar Singh (1952)', 'R.S. Joshi (1977)']
    },
    answerBlueprint: {
      step1Intro: 'State the foundational maxim: *Quando aliquid prohibetur ex directo, prohibetur et per obliquum* (what cannot be done directly cannot be done indirectly).',
      step2DoctrinalCore: 'Explain that the doctrine applies when a legislature, lacking competence to enact a law, disguises it under another entry where it appears competent.',
      step3PrecedentEvolution: 'Detail K.C. Gajapati Narayan Deo (1953): The whole doctrine resolves itself into the question of legislative competence, not malice or bad motive.',
      step4Conclusion: 'Cite State of Bihar v. Kameshwar Singh: A law passed ostensibly to fix compensation that was illusory and devised to confiscate property was struck down as colourable.'
    },
    fullModelAnswer: `I. MAXIM & FOUNDATIONAL MEANING:
The Doctrine of Colourable Legislation is founded on the maxim:
*Quando aliquid prohibetur ex directo, prohibetur et per obliquum*—"What cannot be done directly, cannot be done indirectly."
It refers to a covert legislative transgression where a legislature, lacking constitutional competence to legislate on a subject, disguises its enactment under an apparent power it legitimately possesses.

II. COMPETENCE VS MOTIVE (K.C. GAJAPATI RATIO):
In K.C. Gajapati Narayan Deo v. State of Orissa (1953), the Supreme Court laid down cardinal rules:
1. Purely a Question of Competence: The doctrine is tied solely to legislative power. If the legislature has the competence to enact the law, its bona fides or mala fides (motives) are completely irrelevant.
2. Form vs Substance: Courts look past the decorative title or form of the statute to uncover its real substantive operation.

APPLICATION: In State of Bihar v. Kameshwar Singh (1952), a statutory formula claiming to calculate compensation, but engineered to yield zero compensation, was invalidated as a colourable fraud on the Constitution.`,
    scoringRubric: [
      { criterion: 'Latin maxim & definition of covert transgression', marks: 1.5 },
      { criterion: 'K.C. Gajapati principle: Competence vs Motive distinction', marks: 2 },
      { criterion: 'Kameshwar Singh illusory compensation illustration', marks: 1.5 }
    ]
  },

  {
    id: 'mains-5m-habeas-corpus',
    title: 'Writ of Habeas Corpus & The Overruling of ADM Jabalpur',
    topicId: 'writs-judicial-review-142',
    marksCategory: 5,
    examCategory: 'PROSECUTION',
    examsAppeared: ['DJS 2018, 2022', 'UP PCS-J 2016', 'Bihar APO 2019', 'UPSC Law 2018'],
    typicalMarks: 5,
    targetWordLimit: '100–120 Words | Time: ~4 Mins',
    targetWordMin: 90,
    targetWordMax: 130,
    estimatedPages: '0.5 Page (~12 lines)',
    targetTimeMinutes: 4,
    questionText: 'Explain the nature and scope of the Writ of Habeas Corpus. Can a Habeas Corpus petition be suspended during a National Emergency after Puttaswamy?',
    coreIssues: [
      'Meaning of Habeas Corpus ("Have the body").',
      'Production of detainee before court to examine legality of detention.',
      'The infamy of ADM Jabalpur and its express burial in Puttaswamy (2017).'
    ],
    examinerExpectation:
      'Candidate must explain Habeas Corpus, mention that after the 44th Amendment Articles 20 and 21 cannot be suspended under Article 359, and cite Puttaswamy (2017) burying ADM Jabalpur.',
    essentialCitations: [
      'ADM Jabalpur v. Shivkant Shukla ((1976) 2 SCC 521)',
      'Sunil Batra v. Delhi Administration ((1980) 3 SCC 488)',
      'K.S. Puttaswamy v. Union of India ((2017) 10 SCC 1)'
    ],
    hoverIntel: {
      topicName: 'Writ of Habeas Corpus',
      topicPillar: 'Part III & Part VI: Writs & Personal Liberty (Articles 32 & 226)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Liberty Core)',
      examFrequency: 'Core recurring question across DJS, Prosecution, and UPSC Law',
      weightagePattern: '5 Marks • 100–120 Words (0.5 Page)',
      targetTimeMinutes: 4,
      examinerTrapWarning:
        'Trap Alert: Be definitive: ADM Jabalpur is DEAD. The 44th Constitutional Amendment (1978) amended Article 359 so Articles 20 and 21 can NEVER be suspended. Puttaswamy (2017) formally overruled the majority judgment.',
      recentTrendAlert: 'Frequently applied to check preventive detention compliance (e.g. NSA / PSA).',
      coreArticles: ['Article 32', 'Article 226', 'Article 21', 'Article 359'],
      benchmarkCases: ['ADM Jabalpur (1976)', 'Sunil Batra (1980)', 'Puttaswamy (2017)']
    },
    answerBlueprint: {
      step1Intro: 'Define Habeas Corpus ("Produce the body"): an ancient common law prerogative writ commanding the jailor to produce the detainee.',
      step2DoctrinalCore: 'State the Court\'s inquiry: whether the detention is authorized by valid law, without procedural infraction or mala fides.',
      step3PrecedentEvolution: 'Address emergency suspension: The 44th Amendment barred suspension of Articles 20 and 21 under Article 359.',
      step4Conclusion: 'Conclude with Puttaswamy (2017, 9-Judge Bench) expressly overruling the majority in ADM Jabalpur and vindicating Justice H.R. Khanna\'s dissent.'
    },
    fullModelAnswer: `I. NATURE & SCOPE:
Habeas Corpus ("You have the body") is a high prerogative writ issued under Articles 32 and 226 commanding the detaining authority to produce the incarcerated person before the Court to justify the legal cause of detention.
If the detention lacks legal sanction, violates statutory procedures (e.g. Art. 22 safeguards), or is tainted with mala fides, the Court orders immediate release. In Sunil Batra (1980), the Court expanded Habeas Corpus to protect prisoners against custodial torture and solitary confinement.

II. NON-SUSPENDABILITY DURING EMERGENCY:
1. The Dark Era of ADM Jabalpur (1976): A 4:1 majority held that during an Emergency under Article 359, no citizen had locus standi to seek Habeas Corpus for illegal detention.
2. The 44th Amendment (1978) Shield: Parliament amended Article 359 to mandate that enforcement of Articles 20 and 21 can NEVER be suspended during an Emergency.
3. The Puttaswamy Overruling (2017): A 9-Judge Bench formally declared ADM Jabalpur per incuriam, adopting Justice H.R. Khanna's heroic dissent: Life and personal liberty are inalienable human rights that pre-exist the Constitution.`,
    scoringRubric: [
      { criterion: 'Definition, scope & Sunil Batra custodial expansion', marks: 2 },
      { criterion: '44th Amendment bar on suspending Articles 20 and 21', marks: 1.5 },
      { criterion: 'Puttaswamy 2017 formal overruling of ADM Jabalpur', marks: 1.5 }
    ]
  },

  {
    id: 'mains-5m-mandamus',
    title: 'Writ of Mandamus: Discretionary vs Mandatory Public Duties',
    topicId: 'writs-judicial-review-142',
    marksCategory: 5,
    examCategory: 'UP_PCSJ',
    examsAppeared: ['UP PCS-J 2013, 2018', 'Bihar Judicial 2016, 2021', 'MP Judiciary 2018'],
    typicalMarks: 5,
    targetWordLimit: '100–120 Words | Time: ~4 Mins',
    targetWordMin: 90,
    targetWordMax: 130,
    estimatedPages: '0.5 Page (~12 lines)',
    targetTimeMinutes: 4,
    questionText: 'Under what circumstances can a Writ of Mandamus be issued? Can Mandamus be issued to enforce an executive discretion or policy decision?',
    coreIssues: [
      'Meaning of Mandamus ("We command").',
      'Prerequisites: Legal right in petitioner, corresponding public duty in authority, and prior demand and refusal.',
      'Mandamus compels exercise of discretion, but cannot dictate the manner of discretion.'
    ],
    examinerExpectation:
      'Candidate must state the 3 prerequisites, cite State of M.P. v. Mandawar or Comptroller & Auditor General v. K.S. Jagannathan, and explain that Mandamus cannot enforce discretionary privileges.',
    essentialCitations: [
      'State of M.P. v. G.C. Mandawar (1955 1 SCR 599)',
      'Mani Subrat Jain v. State of Haryana ((1977) 1 SCC 486)',
      'Comptroller & Auditor General v. K.S. Jagannathan ((1986) 2 SCC 679)'
    ],
    hoverIntel: {
      topicName: 'Writ of Mandamus & Public Duties',
      topicPillar: 'Part III & Part VI: Writs (Articles 32 & 226)',
      examImportance: '⭐⭐⭐⭐ High Priority Conceptual',
      examFrequency: 'Tested in UP PCS-J, Bihar Judicial and MP Judiciary',
      weightagePattern: '5 Marks • 100–120 Words (0.5 Page)',
      targetTimeMinutes: 4,
      examinerTrapWarning:
        'Trap Alert: A court can issue Mandamus directing an authority to CONSIDER an application (compelling exercise of discretion), but CANNOT order it to grant the relief in a specific discretionary manner!',
      recentTrendAlert: 'Frequently tested in civil service promotion and tender award disputes.',
      coreArticles: ['Article 32', 'Article 226'],
      benchmarkCases: ['G.C. Mandawar (1955)', 'Mani Subrat Jain (1977)', 'K.S. Jagannathan (1986)']
    },
    answerBlueprint: {
      step1Intro: 'Define Mandamus ("We Command"): a prerogative order issued to any public authority or inferior tribunal commanding performance of a public/statutory duty.',
      step2DoctrinalCore: 'List 3 essential conditions: (1) Legal right in applicant, (2) Mandatory public legal duty in respondent, (3) Demand for justice and denial thereof.',
      step3PrecedentEvolution: 'Address discretion vs duty: In Mani Subrat Jain (1977), held no Mandamus lies unless there is a legally enforceable right, not a mere hope or expectation.',
      step4Conclusion: 'Conclude with Mandawar (1955): Mandamus cannot compel the executive to exercise non-statutory discretion in a particular way.'
    },
    fullModelAnswer: `I. NATURE & THREE PREREQUISITES:
Writ of Mandamus ("We Command") is issued under Articles 32 and 226 to command a public officer, corporation, or tribunal to perform a specific statutory or public duty.
To maintain Mandamus, three conditions must co-exist:
1. Legal Right: The petitioner must possess a judicially enforceable legal right;
2. Mandatory Public Duty: The respondent must owe a corresponding mandatory legal/statutory duty (not a purely private or contractual duty);
3. Demand and Refusal: The applicant must have made a formal demand for justice which was refused or ignored.

II. DISCRETIONARY VS MANDATORY DUTIES:
1. Mere Expectation Insufficient (Mani Subrat Jain, 1977): Mandamus cannot lie to enforce a mere hope, interest, or policy guideline devoid of statutory force.
2. Discretion Cannot be Dictated (State of M.P. v. Mandawar, 1955): Where the law confers executive discretion (e.g. granting dearness allowance), the Court CANNOT issue Mandamus commanding the government to grant it. The Court can only command the authority to *consider and decide* the matter according to law.`,
    scoringRubric: [
      { criterion: 'Definition & 3 prerequisites (right, duty, demand & refusal)', marks: 2 },
      { criterion: 'Mani Subrat Jain enforceable right vs hope distinction', marks: 1.5 },
      { criterion: 'Mandawar discretion limit (compelling consideration vs dictating result)', marks: 1.5 }
    ]
  },

  {
    id: 'mains-5m-fundamental-duties',
    title: 'Fundamental Duties under Article 51A: Legal Enforceability & Value',
    topicId: 'dpsp-fundamental-duties',
    marksCategory: 5,
    examCategory: 'UPSC_LAW',
    examsAppeared: ['UPSC Law Optional 2017, 2021', 'UP PCS-J 2016, 2022', 'MP Judiciary 2019'],
    typicalMarks: 5,
    targetWordLimit: '100–120 Words | Time: ~4 Mins',
    targetWordMin: 90,
    targetWordMax: 130,
    estimatedPages: '0.5 Page (~12 lines)',
    targetTimeMinutes: 4,
    questionText: 'Examine the constitutional significance of Fundamental Duties under Article 51A. Though non-enforceable per se, how have courts used them to interpret constitutional validity?',
    coreIssues: [
      'Inserted by 42nd Amendment (1976) on Swaran Singh Committee recommendation.',
      'Non-justiciable nature (no direct writ of mandamus to enforce).',
      'Interpretive device: Used to assess "reasonableness" under Article 19 restrictions.'
    ],
    examinerExpectation:
      'Candidate must explain Swaran Singh Committee origin, state that while non-enforceable per se, duties serve as interpretive aids to assess reasonableness of restrictions under Art 19. Cite AIIMS Students Union.',
    essentialCitations: [
      'AIIMS Students Union v. AIIMS ((2002) 1 SCC 428)',
      'State of Gujarat v. Mirzapur Moti Kureshi Kassab Jamat ((2005) 8 SCC 534)',
      'Shyam Narayan Chouksey v. Union of India ((2018) 2 SCC 574)'
    ],
    hoverIntel: {
      topicName: 'Fundamental Duties & Interpretive Value',
      topicPillar: 'Part IV-A: Fundamental Duties (Article 51A)',
      examImportance: '⭐⭐⭐⭐ High Priority Conceptual',
      examFrequency: 'Appeared in UPSC Law Optional and UP PCS-J',
      weightagePattern: '5 Marks • 100–120 Words (0.5 Page)',
      targetTimeMinutes: 4,
      examinerTrapWarning:
        'Trap Alert: Do not say Fundamental Duties have zero legal weight! Courts routinely hold that a restriction on Fundamental Rights is "reasonable" if it seeks to enforce a Fundamental Duty under Art. 51A (Mirzapur Moti Kureshi).',
      recentTrendAlert: 'National Anthem case (Shyam Narayan Chouksey) modified mandatory cinema standing.',
      coreArticles: ['Article 51A', 'Article 19(2)-(6)', 'Article 14'],
      benchmarkCases: ['AIIMS Students Union (2002)', 'Mirzapur Moti Kureshi (2005)']
    },
    answerBlueprint: {
      step1Intro: 'Introduce Part IV-A: Inserted by 42nd Amendment (1976) on Swaran Singh Committee recommendations (expanded to 11 duties by 86th Amendment).',
      step2DoctrinalCore: 'State legal nature: Non-justiciable per se (cannot issue Mandamus directly against citizens to perform duties).',
      step3PrecedentEvolution: 'Detail judicial deployment: In Mirzapur Moti Kureshi (2005), 7-Judge Bench held that in assessing "reasonableness" of restrictions under Art 19, Art 51A duties must be considered.',
      step4Conclusion: 'Quote AIIMS Students Union (2002): Fundamental duties are not meaningless; they are the normative ballast of the welfare state.'
    },
    fullModelAnswer: `I. GENESIS & LEGAL NATURE:
Inserted by the 42nd Amendment (1976) following the Swaran Singh Committee report, Part IV-A (Article 51A) contains 11 Fundamental Duties. Like Directive Principles, they are non-justiciable per se—no writ of Mandamus lies to compel a citizen to perform a duty in the absence of enabling statutory law (e.g. Wildlife Protection Act or Prevention of Insults to National Honour Act).

II. JUDICIAL INTERPRETIVE VALUE:
Despite lacking direct enforceability, the Supreme Court has transformed Article 51A into a powerful constitutional compass:
1. Benchmark of Reasonableness: In State of Gujarat v. Mirzapur Moti Kureshi (2005, 7-Judge Bench), the Court held that while testing the "reasonableness" of restrictions on Fundamental Rights under Article 19(2)–(6), the Court must consider whether the restriction advances a Fundamental Duty under Article 51A(g) (compassion for living creatures).
2. Normative Constitutional Ballast: In AIIMS Students Union v. AIIMS (2002), the Court declared: "Fundamental duties, though not enforceable by a writ of the court, are yet very valuable as they provide the normative foundation for constitutional interpretation."`,
    scoringRubric: [
      { criterion: '42nd Amendment history & non-justiciable statutory distinction', marks: 1.5 },
      { criterion: 'Reasonableness test under Art 19 (Mirzapur Moti Kureshi)', marks: 2 },
      { criterion: 'AIIMS Students Union normative foundation synthesis', marks: 1.5 }
    ]
  },

  {
    id: 'mains-5m-territorial-nexus',
    title: 'Doctrine of Territorial Nexus under Article 245',
    topicId: 'centre-state-relations-pith-substance',
    marksCategory: 5,
    examCategory: 'UP_PCSJ',
    examsAppeared: ['UP PCS-J 2015, 2018', 'Bihar Judicial 2018', 'UPSC Law 2017'],
    typicalMarks: 5,
    targetWordLimit: '100–120 Words | Time: ~4 Mins',
    targetWordMin: 90,
    targetWordMax: 130,
    estimatedPages: '0.5 Page (~12 lines)',
    targetTimeMinutes: 4,
    questionText: 'Explain the "Doctrine of Territorial Nexus" under Article 245. Can a State Legislature make laws with extra-territorial operation?',
    coreIssues: [
      'Plenary extra-territorial power of Parliament vs bounded state legislative territory.',
      'State law operating extra-territorially if there is a real, substantial connection.',
      'Dual conditions: Connection must be real, and liability must be pertinent to that connection.'
    ],
    examinerExpectation:
      'Candidate must state Art 245(2) (Parliament alone has plenary extra-territorial power). State laws are territorial, but valid extra-territorially IF a real and substantial nexus exists. Cite Tata Iron & Steel and State of Bombay v. R.M.D.C.',
    essentialCitations: [
      'State of Bombay v. R.M.D. Chamarbaugwala (AIR 1957 SC 699)',
      'Tata Iron & Steel Co. v. State of Bihar (1958 SCR 1355)',
      'GVK Inds. Ltd. v. Income Tax Officer ((2011) 4 SCC 36)'
    ],
    hoverIntel: {
      topicName: 'Doctrine of Territorial Nexus',
      topicPillar: 'Part XI: Legislative Powers (Article 245)',
      examImportance: '⭐⭐⭐⭐ High Priority Conceptual',
      examFrequency: 'Appeared in UP PCS-J, Bihar Judicial and UPSC Law',
      weightagePattern: '5 Marks • 100–120 Words (0.5 Page)',
      targetTimeMinutes: 4,
      examinerTrapWarning:
        'Trap Alert: Parliament has express power under Article 245(2) to pass extra-territorial laws without nexus. A STATE legislature has NO plenary extra-territorial power; it requires a demonstrable real and substantial territorial nexus!',
      recentTrendAlert: 'Critical for state tax disputes on e-commerce and inter-state lotteries.',
      coreArticles: ['Article 245(1)', 'Article 245(2)'],
      benchmarkCases: ['R.M.D.C. (1957)', 'Tata Iron & Steel (1958)', 'GVK Industries (2011)']
    },
    answerBlueprint: {
      step1Intro: 'Quote Article 245: Parliament can make laws for whole or part of India; State Legislature can make laws for whole or part of the State.',
      step2DoctrinalCore: 'Distinguish Parliament (Art 245(2) extra-territorial law cannot be questioned) from State Legislatures.',
      step3PrecedentEvolution: 'Explain Territorial Nexus in R.M.D.C. (1957): State laws can touch outside entities if: (a) Connection is real and not illusory, (b) Liability is pertinent to the connection.',
      step4Conclusion: 'Cite TISCO (1958): Sale within Bihar gave sufficient territorial nexus to levy tax even though goods were consumed outside.'
    },
    fullModelAnswer: `I. CONSTITUTIONAL PROVISIONS (ARTICLE 245):
Article 245(1) demarcates the territorial boundaries: Parliament may legislate for the whole or any part of India, while a State Legislature legislates for its State.
Under Article 245(2), no Act of Parliament shall be deemed invalid on the ground of having extra-territorial operation. In contrast, a State Legislature has no plenary extra-territorial competence.

II. THE TERRITORIAL NEXUS EXCEPTION FOR STATES:
A State law can validly operate extra-territorially if there exists a "real and substantial territorial nexus" between the State and the person, object, or transaction taxed or regulated.
In State of Bombay v. R.M.D. Chamarbaugwala (1957), the Supreme Court laid down twin requirements:
1. The connection must be real and substantial, not fanciful or illusory.
2. The liability imposed must be pertinent to that connection.
(Newspaper prize competition printed in Bangalore but widely distributed and collected in Bombay provided sufficient nexus for Bombay to tax).
In TISCO v. State of Bihar (1958), the presence of goods within Bihar during manufacture created valid territorial nexus to tax sales completed elsewhere.`,
    scoringRubric: [
      { criterion: 'Article 245(1) & (2) Parliament vs State boundary distinction', marks: 1.5 },
      { criterion: 'Twin nexus requirements in R.M.D. Chamarbaugwala', marks: 2 },
      { criterion: 'TISCO or R.M.D.C. factual illustration', marks: 1.5 }
    ]
  },

  // =========================================================================
  // 10 MARKS / 150–180 WORDS (TIER 2: STANDARD JUDICIAL & PROSECUTION BENCHMARKS)
  // =========================================================================
  {
    id: 'mains-10m-ews-reservation',
    title: 'EWS Reservation (103rd Amendment) & The 50% Ceiling Rule (Janhit Abhiyan)',
    topicId: 'art-14-arbitrariness-equality',
    marksCategory: 10,
    examCategory: 'UPSC_LAW',
    examsAppeared: ['UPSC Law Optional 2022, 2023', 'DJS 2023', 'UP PCS-J 2023', 'CLAT PG 2023'],
    typicalMarks: 10,
    targetWordLimit: '160–180 Words | Time: ~7 Mins',
    targetWordMin: 150,
    targetWordMax: 200,
    estimatedPages: '1.0 Page (~20 lines)',
    targetTimeMinutes: 7,
    questionText: `Does the 103rd Constitutional Amendment providing 10% reservation for Economically Weaker Sections (EWS) violate the Basic Structure by excluding SC/ST/OBCs and breaching the 50% ceiling? Discuss Janhit Abhiyan v. Union of India.`,
    coreIssues: [
      'Articles 15(6) and 16(6) enabling economic criteria alone for reservations.',
      'Exclusion of communities covered under Articles 15(4), 15(5), and 16(4).',
      'Breach of the 50% ceiling rule laid down in Indra Sawhney.'
    ],
    examinerExpectation:
      'Candidate must explain the 3:2 majority ruling in Janhit Abhiyan (2022). Economic criteria alone can form a valid basis; the 50% rule is not inflexible; exclusion of SC/ST/OBC prevents double benefit.',
    essentialCitations: [
      'Indra Sawhney v. Union of India (1992 Supp (3) SCC 217)',
      'M. Nagaraj v. Union of India ((2006) 8 SCC 212)',
      'Janhit Abhiyan v. Union of India ((2023) 5 SCC 1; 2022 INSC 1164)'
    ],
    hoverIntel: {
      topicName: '103rd Amendment (EWS) & Basic Structure',
      topicPillar: 'Part III: Fundamental Rights • Reservation Jurisprudence',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Recent Constitution Bench)',
      examFrequency: 'Direct core question in UPSC Law 2023 and State Judicial Mains',
      weightagePattern: '10 Marks • 160–180 Words (1.0 Page)',
      targetTimeMinutes: 7,
      examinerTrapWarning:
        'Trap Alert: Clarify that Janhit Abhiyan was a 3:2 split verdict. Justice Maheshwari, Bela Trivedi, and Pardiwala upheld it; CJI Lalit and Justice Bhat dissented on the ground that excluding the poorest of SC/STs violates equality.',
      recentTrendAlert: 'Landmark precedent confirming that the 50% ceiling is not an immutable basic feature.',
      coreArticles: ['Article 15(6)', 'Article 16(6)', 'Article 14'],
      benchmarkCases: ['Indra Sawhney (1992)', 'Janhit Abhiyan (2022)']
    },
    answerBlueprint: {
      step1Intro: 'Introduce 103rd Amendment (2019) inserting Articles 15(6) and 16(6) granting up to 10% reservation for EWS based solely on economic criteria.',
      step2DoctrinalCore: 'Analyze the 50% ceiling issue: Majority held the 50% limit in Indra Sawhney applied only to caste/socially backward classes, not an inflexible constitutional rule.',
      step3PrecedentEvolution: 'Analyze exclusion of SC/ST/OBCs: Held not discriminatory because they already enjoy affirmative action benefits under Arts 15(4) and 16(4).',
      step4Conclusion: 'Mention the 3:2 split in Janhit Abhiyan (2022) upholding the amendment as a tool for substantive equality.'
    },
    fullModelAnswer: `I. CONSTITUTIONAL INNOVATION OF THE 103RD AMENDMENT:
The 103rd Constitutional Amendment (2019) inserted Articles 15(6) and 16(6), enabling up to 10% reservations in educational institutions and public employment for Economically Weaker Sections (EWS), other than those covered under Articles 15(4), 15(5), and 16(4).

II. THE 3:2 VERDICT IN JANHIT ABHIYAN V. UNION OF INDIA (2022):
In a 3:2 majority verdict, a 5-Judge Constitution Bench upheld the validity of the 103rd Amendment against basic structure challenges:
1. Economic Criteria as Sole Basis: The majority held that reservation is an instrument of affirmative action, not confined exclusively to caste. Poverty is a debilitating disability; creating an economic classification does not damage the Basic Structure.
2. The 50% Ceiling Rule: The 50% limit formulated in Indra Sawhney (1992) applies to reservations for socially and educationally backward classes under Articles 15(4) and 16(4). It was not intended to be an immutable, inflexible ceiling binding Parliament's constituent amending power under Article 368.
3. Exclusion of SC/ST/OBCs Justified: The exclusion of SC/ST/OBCs from the EWS quota does not violate Article 14. They already enjoy dedicated constitutional protections under preexisting quotas; permitting them into EWS would create double reservation.

MINORITY DISSENT:
CJI U.U. Lalit and Justice Ravindra Bhat dissented, holding that excluding the poorest citizens solely because they belong to SC/ST categories operates as constitutional discrimination.

CONCLUSION:
Janhit Abhiyan confirms that economic deprivation is an independent constitutional ground for state support, reshaping the contours of equality in India.`,
    scoringRubric: [
      { criterion: '103rd Amendment provisions (Art 15(6) & 16(6))', marks: 2.5 },
      { criterion: 'Janhit Abhiyan majority on economic criteria & 50% ceiling', marks: 4 },
      { criterion: 'Justification for excluding SC/ST/OBCs & Bhat dissent', marks: 2.5 },
      { criterion: 'Synthesis on substantive equality', marks: 1 }
    ]
  },

  {
    id: 'mains-10m-reservations-in-promotion',
    title: 'Reservation in Promotion & Cadre-Wise Empirical Data: Nagaraj to Jarnail Singh',
    topicId: 'art-14-arbitrariness-equality',
    marksCategory: 10,
    examCategory: 'DJS',
    examsAppeared: ['DJS 2017, 2022', 'UP PCS-J 2018, 2023', 'UPSC Law Optional 2019, 2021'],
    typicalMarks: 10,
    targetWordLimit: '160–180 Words | Time: ~7 Mins',
    targetWordMin: 150,
    targetWordMax: 200,
    estimatedPages: '1.0 Page (~20 lines)',
    targetTimeMinutes: 7,
    questionText: `Critically trace the constitutional parameters for providing reservations in promotion for SC/STs under Article 16(4A). How did Jarnail Singh (2018) modify the "backwardness data" requirement laid down in M. Nagaraj?`,
    coreIssues: [
      'Article 16(4A) inserted by 77th Amendment and consequential seniority (85th Amendment).',
      'The 3 Nagaraj prerequisites: Backwardness data, Inadequacy of representation, and Administrative efficiency (Art 335).',
      'Jarnail Singh modification: Presumption of backwardness for SC/STs, but collection of quantifiable data on inadequate representation in the specific cadre.'
    ],
    examinerExpectation:
      'Candidate must detail M. Nagaraj (2006) 3 conditions, explain that Jarnail Singh (2018) removed the requirement to prove backwardness for SC/STs, but retained cadre-wise quantifiable data on inadequate representation and applied the Creamy Layer.',
    essentialCitations: [
      'Indra Sawhney v. Union of India (1992 Supp (3) SCC 217)',
      'M. Nagaraj v. Union of India ((2006) 8 SCC 212)',
      'Jarnail Singh v. Lachhmi Narain Gupta ((2018) 10 SCC 396)',
      'Jarnail Singh v. Lachhmi Narain Gupta (Jarnail Singh II) ((2022) 10 SCC 595)'
    ],
    hoverIntel: {
      topicName: 'Reservation in Promotion & Article 16(4A)',
      topicPillar: 'Part III: Fundamental Rights • Equality in Public Employment',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Judiciary Core)',
      examFrequency: 'Tested in DJS Civil Law, UP PCS-J, and UPSC Law Optional',
      weightagePattern: '10 Marks • 160–180 Words (1.0 Page)',
      targetTimeMinutes: 7,
      examinerTrapWarning:
        'Trap Alert: Do not say Jarnail Singh removed ALL quantifiable data requirements! It removed data on "backwardness" (since SC/STs are presumed backward), but strictly RETAINED the requirement of quantifiable data on "inadequacy of representation in the cadre"!',
      recentTrendAlert: 'Reaffirmed in Jarnail Singh II (2022): Cadre, not entire service, is the unit for calculating representation.',
      coreArticles: ['Article 16(4A)', 'Article 16(4B)', 'Article 335'],
      benchmarkCases: ['Indra Sawhney (1992)', 'M. Nagaraj (2006)', 'Jarnail Singh (2018)']
    },
    answerBlueprint: {
      step1Intro: 'Trace Article 16(4A): Parliament inserted Art 16(4A) (77th Amendment) and consequential seniority (85th Amendment) to overturn Indra Sawhney\'s ban on promotions.',
      step2DoctrinalCore: 'Analyze M. Nagaraj (2006): Upheld Art 16(4A) but imposed 3 mandatory conditions: (1) Quantifiable data of backwardness, (2) Inadequacy of representation, (3) Maintenance of efficiency (Art 335).',
      step3PrecedentEvolution: 'Detail Jarnail Singh (2018, 5-Judge Bench): Struck down the requirement of proving backwardness as contrary to Indra Sawhney (SCs/STs are historically backward).',
      step4Conclusion: 'Highlight Jarnail Singh II (2022): Cadre-wise data is mandatory, and the Creamy Layer applies at promotion stage.'
    },
    fullModelAnswer: `I. CONSTITUTIONAL BACKGROUND OF ARTICLE 16(4A):
In Indra Sawhney (1992), the Supreme Court ruled that Article 16(4) does not permit reservations in promotion. To counter this, Parliament enacted the 77th Constitutional Amendment (1995) inserting Article 16(4A), and the 85th Amendment (2001) conferring "consequential seniority" on promoted SC/ST employees.

II. THE THREE-FOLD TEST IN M. NAGARAJ (2006):
In M. Nagaraj v. Union of India (2006), a 5-Judge Constitution Bench upheld the validity of Articles 16(4A) and 16(4B), but conditioned their exercise upon the State collecting verifiable quantifiable data showing:
1. Backwardness of the beneficiary class;
2. Inadequacy of their representation in public services; and
3. Maintenance of overall administrative efficiency under Article 335.

III. THE CORRECTION IN JARNAIL SINGH (2018):
In Jarnail Singh v. Lachhmi Narain Gupta (2018), a 5-Judge Bench unanimously modified Nagaraj:
1. Backwardness Requirement Invalidated: Requiring the State to collect data on the backwardness of SC/STs violated the 9-Judge Bench in Indra Sawhney. Once included in the Presidential List under Articles 341/342, backwardness is a constitutional presumption.
2. Inadequacy of Representation Retained: The State MUST still collect quantifiable data proving inadequate representation in the specific "cadre" where promotion is sought (Jarnail Singh II, 2022).
3. Creamy Layer Applied: The Court applied the Creamy Layer doctrine to promotions, holding that affluent SC/ST officers cannot deny opportunities to backward brethren.

CONCLUSION:
Reservations in promotion require cadre-specific empirical proof of underrepresentation while harmonizing efficiency under Article 335.`,
    scoringRubric: [
      { criterion: 'Art. 16(4A) background & Indra Sawhney promotion ban', marks: 2.5 },
      { criterion: 'M. Nagaraj 3 quantifiable data conditions', marks: 3 },
      { criterion: 'Jarnail Singh modification of backwardness data & Creamy Layer', marks: 3.5 },
      { criterion: 'Cadre-wise unit under Jarnail Singh II (2022)', marks: 1 }
    ]
  },

  {
    id: 'mains-10m-commercial-speech',
    title: 'Commercial Speech & Advertising as Free Expression under Article 19(1)(a)',
    topicId: 'art-19-speech-reasonable-restrictions',
    marksCategory: 10,
    examCategory: 'DJS',
    examsAppeared: ['DJS 2016, 2022', 'UPSC Law Optional 2018, 2021', 'UP PCS-J 2015'],
    typicalMarks: 10,
    targetWordLimit: '150–180 Words | Time: ~7 Mins',
    targetWordMin: 140,
    targetWordMax: 200,
    estimatedPages: '1.0 Page (~20 lines)',
    targetTimeMinutes: 7,
    questionText: `Trace the evolution of "Commercial Speech" and advertisements under Article 19(1)(a) of the Constitution from Hamdard Dawakhana to Tata Press. To what extent can the State restrict commercial advertising?`,
    coreIssues: [
      'Initial exclusion of commercial speech in Hamdard Dawakhana (1960).',
      'The modern shift in Tata Press (1995): Commercial speech protects the consumer\'s right to know.',
      'Restrictions must strictly fall under Article 19(2), including misleading or deceptive advertisements.'
    ],
    examinerExpectation:
      'Candidate must contrast Hamdard Dawakhana (advertisement as trade without free speech element) with Tata Press (advertisement as dissemination of information). Mention that misleading ads can be regulated under Article 19(2).',
    essentialCitations: [
      'Hamdard Dawakhana v. Union of India (1960 2 SCR 671)',
      'Indian Express Newspapers v. Union of India ((1985) 1 SCC 641)',
      'Tata Press Ltd. v. Mahanagar Telephone Nigam Ltd. ((1995) 5 SCC 139)'
    ],
    hoverIntel: {
      topicName: 'Commercial Speech & Article 19(1)(a)',
      topicPillar: 'Part III: Fundamental Rights • Freedom of Speech (Article 19)',
      examImportance: '⭐⭐⭐⭐ High Priority Conceptual',
      examFrequency: 'Appeared in DJS Civil Law and UPSC Law Optional',
      weightagePattern: '10 Marks • 150–180 Words (1.0 Page)',
      targetTimeMinutes: 7,
      examinerTrapWarning:
        'Trap Alert: Deceptive, false, or misleading advertisements do NOT enjoy Article 19(1)(a) protection. The State can ban them under consumer protection laws and Article 19(2) public interest!',
      recentTrendAlert: 'Frequently cited in recent misleading advertisements cases against pharmaceutical and FMCG brands.',
      coreArticles: ['Article 19(1)(a)', 'Article 19(1)(g)', 'Article 19(2)'],
      benchmarkCases: ['Hamdard Dawakhana (1960)', 'Tata Press (1995)']
    },
    answerBlueprint: {
      step1Intro: 'Frame the constitutional question: Is a commercial advertisement mere commerce under Article 19(1)(g) or speech under Article 19(1)(a)?',
      step2DoctrinalCore: 'Detail Hamdard Dawakhana (1960): Ads for magic remedies were treated as purely commercial, lacking communicative social value.',
      step3PrecedentEvolution: 'Explain the watershed shift in Tata Press (1995): 3-Judge Bench held commercial speech is protected under Article 19(1)(a) because it educates the consumer and enables democratic economic choice.',
      step4Conclusion: 'State limitations: Advertisements that are deceptive, misleading, or promote harmful/illegal goods (e.g. tobacco) enjoy no constitutional protection.'
    },
    fullModelAnswer: `I. THE INITIAL EXCLUSION: HAMDARD DAWAKHANA (1960):
In Hamdard Dawakhana v. Union of India (1960), the Supreme Court held that commercial advertisements promoting magic remedies had no relationship with freedom of speech. The Court ruled that advertising was merely an adjunct of business under Article 19(1)(g), and because its object was purely commercial profit, it lacked the social and political value protected under Article 19(1)(a).

II. THE TRANSFORMATION: TATA PRESS LTD. V. MTNL (1995):
In a landmark 3-Judge Bench ruling in Tata Press Ltd. v. MTNL (1995), the Supreme Court reversed this narrow view, holding that "Commercial Speech" is an integral component of Article 19(1)(a):
1. Consumer's Right to Know: Commercial speech disseminates vital information regarding products, prices, and availability, enabling consumers to make informed choices in a democratic free market economy.
2. Economic Viability of Free Press: Advertising revenue is the financial backbone of an independent print and electronic media (Indian Express, 1985).

III. BOUNDARIES OF PROTECTION:
Commercial speech is not absolute and is subject to Article 19(2):
- Misleading, false, or deceptive advertising falls outside constitutional protection.
- Advertisements for hazardous substances (e.g. narcotics, liquor, or prohibited medications) can be completely banned by the State.

CONCLUSION:
Tata Press elevated commercial speech from mere commerce into a constitutionally protected democratic flow of public information.`,
    scoringRubric: [
      { criterion: 'Hamdard Dawakhana narrow commercial exclusion', marks: 3 },
      { criterion: 'Tata Press 1995 transformation & Consumer Right to Know', marks: 4 },
      { criterion: 'Article 19(2) limits on deceptive/misleading advertising', marks: 2 },
      { criterion: 'Synthesized conclusion', marks: 1 }
    ]
  },

  {
    id: 'mains-10m-custodial-violence-compensation',
    title: 'Public Law Compensation for Custodial Violence under Article 21',
    topicId: 'art-20-22-custodial-forensics',
    marksCategory: 10,
    examCategory: 'PROSECUTION',
    examsAppeared: ['Prosecution (CBI / State APO) 2017, 2022', 'DJS 2018, 2023', 'Bihar Judicial 2019'],
    typicalMarks: 10,
    targetWordLimit: '150–180 Words | Time: ~7 Mins',
    targetWordMin: 140,
    targetWordMax: 200,
    estimatedPages: '1.0 Page (~20 lines)',
    targetTimeMinutes: 7,
    questionText: `Discuss the evolution of "Public Law Compensation" for custodial death and unlawful imprisonment under Article 21 and Article 32. Does the sovereign immunity of the State shield tortious acts of police officers?`,
    coreIssues: [
      'Evolution from Kasturi Lal sovereign immunity to Rudul Sah public law remedy.',
      'Distinction between private law damages in tort and public law compensation under Article 32/226.',
      'Sovereign immunity is inapplicable to violations of fundamental rights (Nilabati Behera).'
    ],
    examinerExpectation:
      'Candidate must explain how Rudul Sah (1983) broke away from Kasturi Lal (1965). Detail Nilabati Behera (1993) establishing that public law compensation is a constitutional remedy independent of civil suits.',
    essentialCitations: [
      'Kasturi Lal v. State of U.P. (AIR 1965 SC 1039)',
      'Rudul Sah v. State of Bihar ((1983) 4 SCC 141)',
      'Nilabati Behera v. State of Orissa ((1993) 2 SCC 746)',
      'D.K. Basu v. State of W.B. ((1997) 1 SCC 416)'
    ],
    hoverIntel: {
      topicName: 'Custodial Violence & Public Law Compensation',
      topicPillar: 'Part III: Fundamental Rights • Right to Life (Article 21)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Prosecution Core)',
      examFrequency: 'Regular in State APO/Prosecution and DJS Criminal Law',
      weightagePattern: '10 Marks • 150–180 Words (1.0 Page)',
      targetTimeMinutes: 7,
      examinerTrapWarning:
        'Trap Alert: Candidates confuse civil suits in tort with Article 32 compensation. Public law compensation is NOT a tort damage; it is a constitutional redressal under Public Law to which Sovereign Immunity cannot be pleaded!',
      recentTrendAlert: 'Reaffirmed in D.K. Basu custodial death compliance orders.',
      coreArticles: ['Article 21', 'Article 32', 'Article 226'],
      benchmarkCases: ['Kasturi Lal (1965)', 'Rudul Sah (1983)', 'Nilabati Behera (1993)']
    },
    answerBlueprint: {
      step1Intro: 'Contrast the feudal doctrine of Sovereign Immunity (Kasturi Lal, 1965) with modern constitutional rights under Article 21.',
      step2DoctrinalCore: 'Detail Rudul Sah (1983): Supreme Court awarded compensation under Article 32 for 14 years of illegal detention, holding monetary relief is essential to make Article 21 meaningful.',
      step3PrecedentEvolution: 'Detail Nilabati Behera (1993): In custodial death, the defence of sovereign immunity is alien to public law; monetary compensation is a penal-reparative constitutional obligation.',
      step4Conclusion: 'Conclude with D.K. Basu (1997) formalizing institutional guidelines and personal liability of delinquent police officers.'
    },
    fullModelAnswer: `I. THE DEMISE OF SOVEREIGN IMMUNITY:
In Kasturi Lal (1965), the Supreme Court shielded the State under the archaic doctrine that sovereign functions immunize the State from torts committed by police officers.
However, in the post-Maneka era, the Supreme Court recognized that constitutional fundamental rights under Article 21 cannot be extinguished by common law sovereign immunity.

II. THE EMERGENCE OF PUBLIC LAW COMPENSATION:
1. Rudul Sah v. State of Bihar (1983): Where an accused was kept incarcerated for 14 years after his acquittal, Chief Justice Chandrachud awarded monetary compensation under Article 32, ruling that merely ordering release without compensation would render Article 21 a "mockery and a mere ropes of sand."
2. Nilabati Behera v. State of Orissa (1993): In a custodial death case, the Court articulated the doctrinal boundary:
   - Public Law vs Private Law: Awarding compensation under Articles 32 and 226 is a constitutional remedy based on strict liability, entirely independent of civil damages in tort.
   - Sovereign Immunity Inapplicable: The State cannot raise the defence of sovereign immunity in proceedings for violation of fundamental rights under Part III.
3. D.K. Basu v. State of W.B. (1997): Custodial violence was declared a direct blow to the rule of law, making delinquent officers personally liable for reimbursement.

CONCLUSION:
Public law compensation operates as an indispensable constitutional corrective, ensuring the State bears strict financial liability for police excesses.`,
    scoringRubric: [
      { criterion: 'Kasturi Lal sovereign immunity vs modern constitutional shift', marks: 2.5 },
      { criterion: 'Rudul Sah (1983) groundbreaking Article 32 compensation', marks: 3 },
      { criterion: 'Nilabati Behera strict liability & public law distinction', marks: 3.5 },
      { criterion: 'D.K. Basu personal accountability synthesis', marks: 1 }
    ]
  },

  {
    id: 'mains-10m-handcuffing-solitary',
    title: 'Handcuffing & Solitary Confinement as Violations of Article 21',
    topicId: 'art-20-22-custodial-forensics',
    marksCategory: 10,
    examCategory: 'PROSECUTION',
    examsAppeared: ['Prosecution (UP APO, CBI APP) 2018, 2021', 'MP Judiciary 2018, 2022', 'DJS 2017'],
    typicalMarks: 10,
    targetWordLimit: '150–180 Words | Time: ~7 Mins',
    targetWordMin: 140,
    targetWordMax: 200,
    estimatedPages: '1.0 Page (~20 lines)',
    targetTimeMinutes: 7,
    questionText: `Discuss the constitutional validity of routine handcuffing of undertrial prisoners and solitary confinement in prisons. Refer to Prem Shankar Shukla and Sunil Batra.`,
    coreIssues: [
      'Handcuffing is prima facie degrading and inhumane under Article 21.',
      'Exceptional circumstances test: Well-grounded apprehension of escape or violence.',
      'Solitary confinement under Section 73 IPC / Prison Act without judicial sanction.'
    ],
    examinerExpectation:
      'Candidate must cite Prem Shankar Shukla v. Delhi Administration (1980) regarding the ban on routine irons/handcuffs, and Sunil Batra v. Delhi Administration (1978) regarding solitary confinement of death row inmates.',
    essentialCitations: [
      'Sunil Batra v. Delhi Administration ((1978) 4 SCC 494)',
      'Prem Shankar Shukla v. Delhi Administration ((1980) 3 SCC 526)',
      'Citizen for Democracy v. State of Assam ((1995) 3 SCC 743)'
    ],
    hoverIntel: {
      topicName: 'Prisoners Rights: Handcuffing & Solitary Confinement',
      topicPillar: 'Part III: Fundamental Rights • Prisoners Dignity (Article 21)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Prosecution Core)',
      examFrequency: 'Direct practical question in Prosecution and Criminal Judiciary papers',
      weightagePattern: '10 Marks • 150–180 Words (1.0 Page)',
      targetTimeMinutes: 7,
      examinerTrapWarning:
        'Trap Alert: Handcuffing is NOT completely illegal in 100% of cases! It can be used IF there is credible recorded evidence of dangerous flight risk or violence, AND prior judicial permission from the Magistrate is obtained!',
      recentTrendAlert: 'Recently debated in light of BNSS Section 43(3) provisions on handcuffing.',
      coreArticles: ['Article 21', 'Article 14', 'Section 43(3) BNSS'],
      benchmarkCases: ['Sunil Batra (1978)', 'Prem Shankar Shukla (1980)', 'Citizen for Democracy (1995)']
    },
    answerBlueprint: {
      step1Intro: 'Affirm the core constitutional doctrine: "Convicts are not for that reason non-persons" (Sunil Batra). Prison walls do not keep out Fundamental Rights.',
      step2DoctrinalCore: 'Analyze Handcuffing (Prem Shankar Shukla, 1980): Routine handcuffing is an arbitrary assault on human dignity under Articles 14 and 21.',
      step3PrecedentEvolution: 'Detail the Exception: Only when an accused exhibits credible violence or escape propensity, with reasons recorded in writing and approved by the Magistrate (Citizen for Democracy, 1995).',
      step4Conclusion: 'Analyze Solitary Confinement (Sunil Batra, 1978): Imposing solitary confinement on a death-row convict prior to the rejection of clemency is cruel and unconstitutional.'
    },
    fullModelAnswer: `I. PRISONERS RETAIN CONSTITUTIONAL DIGNITY:
In Sunil Batra (1978), the Supreme Court settled the foundational premise: "Convicts are not by mere reason of conviction denuded of fundamental rights." Personal liberty under Article 21 continues to shield incarcerated persons against barbaric or dehumanizing custodial treatment.

II. THE BAN ON ROUTINE HANDCUFFING (PREM SHANKAR SHUKLA, 1980):
In Prem Shankar Shukla v. Delhi Admn. (1980), Justice Krishna Iyer held that routine handcuffing is an arbitrary assault on human dignity violating Articles 14, 19, and 21:
1. Rule against Handcuffing: Handcuffs are prima facie inhumane and degrading.
2. The Strict Exception: Handcuffs can be applied ONLY if the police establish clear, objective material showing that the accused is a desperate character prone to violence or escape.
3. Mandatory Judicial Oversight: In Citizen for Democracy v. State of Assam (1995), the Court mandated that reasons must be recorded in writing and prior permission obtained from the Magistrate.

III. SOLITARY CONFINEMENT (SUNIL BATRA, 1978):
The Court struck down Section 30(2) of the Prisons Act, which subjected condemned prisoners to solitary confinement. A person sentenced to death cannot be put in solitary confinement until the sentence of death has become irrevocable (i.e. after exhaustion of all judicial appeals and presidential mercy petitions). Imposing cellular isolation violates Article 21 bodily and mental integrity.`,
    scoringRubric: [
      { criterion: 'Sunil Batra non-person doctrine & prisoners dignity', marks: 2.5 },
      { criterion: 'Prem Shankar Shukla rule against routine handcuffs & exceptions', marks: 4 },
      { criterion: 'Citizen for Democracy magistrate permission mandate', marks: 1.5 },
      { criterion: 'Sunil Batra invalidation of premature solitary confinement', marks: 2 }
    ]
  },

  {
    id: 'mains-10m-pardoning-power',
    title: 'Pardoning Powers of President & Governor: Judicial Review Limits',
    topicId: 'union-state-executive-ordinances',
    marksCategory: 10,
    examCategory: 'UPSC_LAW',
    examsAppeared: ['UPSC Law Optional 2017, 2022', 'DJS 2018, 2023', 'UP PCS-J 2018'],
    typicalMarks: 10,
    targetWordLimit: '160–180 Words | Time: ~7 Mins',
    targetWordMin: 150,
    targetWordMax: 200,
    estimatedPages: '1.0 Page (~20 lines)',
    targetTimeMinutes: 7,
    questionText: `Compare the pardoning powers of the President under Article 72 with the Governor under Article 161. On what limited grounds can the exercise or non-exercise of clemency be subjected to Judicial Review?`,
    coreIssues: [
      'Textual scope: President covers court-martial and death sentences; Governor now covers death sentences post-2021 amendment/ruling.',
      'Exercise of power on aid and advice of the Council of Ministers (Maru Ram).',
      'Grounds for Judicial Review: Non-application of mind, extraneous considerations, political bias, or inordinate delay.'
    ],
    examinerExpectation:
      'Candidate must explain Art 72 vs 161, cite Kehar Singh, Epuru Sudhakar (2006) for grounds of judicial review, and Shatrughan Chauhan (2014) for inordinate delay commuting death sentences.',
    essentialCitations: [
      'Maru Ram v. Union of India ((1981) 1 SCC 107)',
      'Kehar Singh v. Union of India ((1989) 1 SCC 204)',
      'Epuru Sudhakar v. Govt. of A.P. ((2006) 8 SCC 161)',
      'Shatrughan Chauhan v. Union of India ((2014) 3 SCC 1)',
      'A.G. Perarivalan v. State ((2022) 8 SCC 604)'
    ],
    hoverIntel: {
      topicName: 'Pardoning Powers & Judicial Review',
      topicPillar: 'Part V & VI: Executive Clemency (Articles 72 & 161)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Executive Core)',
      examFrequency: 'Regular in UPSC Law Optional, DJS, and UP PCS-J',
      weightagePattern: '10 Marks • 160–180 Words (1.0 Page)',
      targetTimeMinutes: 7,
      examinerTrapWarning:
        'Trap Alert: In 2021 (State of Haryana v. Raj Kumar), the Supreme Court clarified that the Governor CAN pardon a death sentence under Article 161, superseding Section 433A CrPC!',
      recentTrendAlert: 'Applied in A.G. Perarivalan (2022) where 30-year incarceration and governor inaction led to release under Art 142.',
      coreArticles: ['Article 72', 'Article 161', 'Article 21'],
      benchmarkCases: ['Kehar Singh (1989)', 'Epuru Sudhakar (2006)', 'Shatrughan Chauhan (2014)']
    },
    answerBlueprint: {
      step1Intro: 'Introduce Articles 72 (President) and 161 (Governor) conferring executive clemency (pardon, reprieves, respites, remissions).',
      step2DoctrinalCore: 'Analyze constitutional nature: In Maru Ram (1981), held that the power is exercised on the aid and advice of the Council of Ministers, not personal executive whim.',
      step3PrecedentEvolution: 'Detail Judicial Review (Epuru Sudhakar, 2006): Court cannot examine the merits, but will intervene if order is passed without application of mind, on extraneous/political considerations, or with mala fides.',
      step4Conclusion: 'Cite Shatrughan Chauhan (2014) and Perarivalan (2022): Inordinate, unexplained executive delay in deciding mercy petitions is a supervening ground to commute death penalty under Article 21.'
    },
    fullModelAnswer: `I. TEXTUAL COMPARISON: ARTICLE 72 VS ARTICLE 161:
- Article 72: Empowers the President to grant pardons, reprieves, respites, or remissions for offences against Union laws, punishments by Courts-Martial, and all cases where sentence is of death.
- Article 161: Empowers the Governor for offences against State laws. In State of Haryana v. Raj Kumar (2021), the Court settled that the Governor's clemency power under Article 161 overrides Section 433A CrPC and extends to death convicts.

II. AID AND ADVICE MANDATE (MARU RAM, 1981):
Clemency is an executive function of the State, not a personal prerogative. The President or Governor acts strictly on the binding aid and advice of the Council of Ministers.

III. GROUNDS OF JUDICIAL REVIEW (EPURU SUDHAKAR, 2006):
While the merits of a clemency decision are non-justiciable, a 2-Judge Bench in Epuru Sudhakar v. Govt. of A.P. (2006) held that pardons are subject to limited judicial review on established grounds:
1. Passed without application of mind;
2. Tainted with mala fides or political favoritism;
3. Founded on extraneous or irrelevant considerations;
4. Relevant material kept out of consideration.

IV. UNEXPLAINED EXECUTIVE DELAY (SHATRUGHAN CHAUHAN, 2014):
In Shatrughan Chauhan (2014), the Court ruled that inordinate, unexplained executive delay in disposing of mercy petitions constitutes agonizing torture violating Article 21, warranting automatic commutation of death penalty into life imprisonment. In Perarivalan (2022), Governor's inaction caused the Court to order release under Article 142.`,
    scoringRubric: [
      { criterion: 'Art. 72 vs Art. 161 comparison & Raj Kumar 2021 clarification', marks: 2.5 },
      { criterion: 'Aid and advice mandate in Maru Ram', marks: 2 },
      { criterion: 'Epuru Sudhakar 4 grounds of judicial review', marks: 3 },
      { criterion: 'Shatrughan Chauhan delay ratio & conclusion', marks: 2.5 }
    ]
  },

  {
    id: 'mains-10m-ordinance-repromulgation',
    title: 'Re-promulgation of Ordinances as a Fraud on the Constitution (Krishna Kumar Singh)',
    topicId: 'union-state-executive-ordinances',
    marksCategory: 10,
    examCategory: 'UP_PCSJ',
    examsAppeared: ['UP PCS-J 2016, 2023', 'Bihar Judicial 2018', 'UPSC Law Optional 2017, 2022'],
    typicalMarks: 10,
    targetWordLimit: '160–180 Words | Time: ~7 Mins',
    targetWordMin: 150,
    targetWordMax: 200,
    estimatedPages: '1.0 Page (~20 lines)',
    targetTimeMinutes: 7,
    questionText: `Can the Executive repeatedly re-promulgate Ordinances without placing them before the Legislature? Examine the 7-Judge Constitution Bench decision in Krishna Kumar Singh v. State of Bihar (2017).`,
    coreIssues: [
      'Articles 123 and 213 emergency law-making powers of the Executive.',
      'Mandatory constitutional condition: Placing ordinances before the Legislature upon reassembly.',
      'Re-promulgation without legislative scrutiny is a fraud on the Constitution (D.C. Wadhwa and Krishna Kumar Singh).'
    ],
    examinerExpectation:
      'Candidate must explain the emergency nature of ordinance power, cite D.C. Wadhwa (1987), and detail the 7-Judge Bench ruling in Krishna Kumar Singh (2017) declaring re-promulgation an institutional fraud and invalidating the enduring rights theory.',
    essentialCitations: [
      'D.C. Wadhwa v. State of Bihar ((1987) 1 SCC 378)',
      'Krishna Kumar Singh v. State of Bihar ((2017) 3 SCC 1; 7-Judge Bench)'
    ],
    hoverIntel: {
      topicName: 'Ordinance Making & Re-promulgation',
      topicPillar: 'Part V & VI: Executive Legislative Powers (Articles 123 & 213)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Constitutional Bench)',
      examFrequency: 'Appeared in UP PCS-J, Bihar Judicial and UPSC Law Optional',
      weightagePattern: '10 Marks • 160–180 Words (1.0 Page)',
      targetTimeMinutes: 7,
      examinerTrapWarning:
        'Trap Alert: Candidates fail to explain the fate of acts done under an expired ordinance. Krishna Kumar Singh held that an ordinance does NOT create permanent, enduring rights unless the legislature enacts a saving clause!',
      recentTrendAlert: 'Landmark 7-Judge Bench authority upholding parliamentary supremacy.',
      coreArticles: ['Article 123', 'Article 213', 'Article 174'],
      benchmarkCases: ['D.C. Wadhwa (1987)', 'Krishna Kumar Singh (2017)']
    },
    answerBlueprint: {
      step1Intro: 'Define the nature of ordinance power under Articles 123 and 213: An emergency power to deal with unforeseen contingencies when the Legislature is not in session.',
      step2DoctrinalCore: 'Cite D.C. Wadhwa (1987): Where Bihar promulgated 256 ordinances repeatedly over 14 years, the Court called it an "ordinance raj" and a subversion of the democratic legislative process.',
      step3PrecedentEvolution: 'Detail the 7-Judge Bench in Krishna Kumar Singh (2017): (a) Laying requirement is mandatory, (b) Re-promulgation is a constitutional fraud, (c) Executive cannot usurp law-making.',
      step4Conclusion: 'Explain the "Enduring Rights" test: Rights created by an expired ordinance do not survive automatically; they expire with the ordinance unless the legislature ratifies them.'
    },
    fullModelAnswer: `I. NATURE OF ORDINANCE-MAKING POWER:
Articles 123 and 213 empower the President and Governor to promulgate Ordinances when Parliament or State Legislature is in recess and circumstances exist requiring "immediate action." This is an emergency, transitional legislative power, not a parallel source of lawmaking.

II. THE ABUSE: "ORDINANCE RAJ" IN D.C. WADHWA (1987):
In D.C. Wadhwa v. State of Bihar (1987), the State of Bihar kept 256 ordinances alive for up to 14 years by mechanically re-promulgating them without ever introducing Bills before the Legislature. The Supreme Court held that re-promulgation without legislative debate is a fraud on the Constitution.

III. THE 7-JUDGE BENCH WATERSHED: KRISHNA KUMAR SINGH (2017):
In Krishna Kumar Singh v. State of Bihar (2017), a 7-Judge Constitution Bench settled the law conclusively:
1. Mandatory Constitutional Duty to Lay: Placing an ordinance before the Legislature is an inviolable constitutional obligation under Articles 123(2) and 213(2). Failure to lay the ordinance constitutes a constitutional infraction.
2. Re-promulgation is a Subversion of Democracy: Repeated re-promulgation of an ordinance without legislative debate subverts the principle of parliamentary supremacy and separation of powers.
3. No Permanent Enduring Rights: Rights created by an un-ratified ordinance do not survive permanently. Whether actions survive depends on whether undoing them is impossible or causes grave public injury.

CONCLUSION:
Ordinance power cannot replace parliamentary deliberation. Re-promulgation is an impermissible fraud that renders the resulting laws ultra vires.`,
    scoringRubric: [
      { criterion: 'Emergency transitional nature of Art. 123/213', marks: 2 },
      { criterion: 'D.C. Wadhwa 1987 initial condemnation of Ordinance Raj', marks: 2.5 },
      { criterion: 'Krishna Kumar Singh 7-Judge Bench mandatory laying rule & fraud ratio', marks: 4 },
      { criterion: 'Enduring rights doctrine & conclusion', marks: 1.5 }
    ]
  },

  {
    id: 'mains-10m-speedy-trial',
    title: 'Right to Speedy Trial as an Inalienable Fundamental Right under Article 21',
    topicId: 'art-20-22-custodial-forensics',
    marksCategory: 10,
    examCategory: 'PROSECUTION',
    examsAppeared: ['Prosecution (CBI / State APO) 2016, 2022', 'DJS 2017, 2022', 'MP Judiciary 2019'],
    typicalMarks: 10,
    targetWordLimit: '150–180 Words | Time: ~7 Mins',
    targetWordMin: 140,
    targetWordMax: 200,
    estimatedPages: '1.0 Page (~20 lines)',
    targetTimeMinutes: 7,
    questionText: `Trace the evolution of the "Right to Speedy Trial" as an unenumerated fundamental right under Article 21. Does protracted delay entitle an undertrial accused to bail despite statutory restrictions under special laws?`,
    coreIssues: [
      'Hussainara Khatoon (1979) birth of the right to speedy trial for undertrials.',
      'A.R. Antulay (1992) balancing test: No fixed mathematical time limit, but systematic delays examined.',
      'Overriding statutory bail bars (NDPS / UAPA / PMLA) due to prolonged incarceration (Satender Kumar Antil & K.A. Najeeb).'
    ],
    examinerExpectation:
      'Candidate must trace Hussainara Khatoon $\to$ A.R. Antulay Constitution Bench $\to$ Union of India v. K.A. Najeeb (2021) and Satender Kumar Antil (2022), showing that Article 21 overrides statutory restrictions when trial delay is chronic.',
    essentialCitations: [
      'Hussainara Khatoon (I) v. Home Secretary, State of Bihar ((1980) 1 SCC 81)',
      'A.R. Antulay v. R.S. Nayak ((1992) 1 SCC 225)',
      'Union of India v. K.A. Najeeb ((2021) 3 SCC 713)',
      'Satender Kumar Antil v. CBI ((2022) 10 SCC 51)'
    ],
    hoverIntel: {
      topicName: 'Right to Speedy Trial & Bail',
      topicPillar: 'Part III: Fundamental Rights • Criminal Justice (Article 21)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Prosecution Benchmark)',
      examFrequency: 'Appeared in DJS Criminal Law, CBI PP, and State APO exams',
      weightagePattern: '10 Marks • 150–180 Words (1.0 Page)',
      targetTimeMinutes: 7,
      examinerTrapWarning:
        'Trap Alert: A.R. Antulay (Constitution Bench) expressly rejected laying down a rigid chronological deadline (e.g. 2 years) for trials. Courts apply a contextual balancing test between prejudice to accused and gravity of crime!',
      recentTrendAlert: 'Applied in K.A. Najeeb (UAPA) and Manish Sisodia (2024 PMLA) granting bail for delayed trial.',
      coreArticles: ['Article 21', 'Section 436A CrPC', 'Section 479 BNSS'],
      benchmarkCases: ['Hussainara Khatoon (1979)', 'A.R. Antulay (1992)', 'K.A. Najeeb (2021)', 'Satender Kumar Antil (2022)']
    },
    answerBlueprint: {
      step1Intro: 'Quote the principle: "Speedy trial is the essence of criminal justice; delay in trial is itself denial of justice."',
      step2DoctrinalCore: 'Trace origin in Hussainara Khatoon (1979): Justice Bhagwati held procedure depriving liberty without speedy trial is not "just, fair, or reasonable" under Article 21.',
      step3PrecedentEvolution: 'Explain A.R. Antulay (1992): 5-Judge Bench refused to fix rigid timeframes, formulating a balancing test (length of delay, reasons, accused\'s conduct, prejudice).',
      step4Conclusion: 'Detail modern breakthrough: K.A. Najeeb (2021) & Satender Kumar Antil (2022): Constitutional right under Article 21 overrides statutory bail restrictions (Section 43D(5) UAPA or Section 45 PMLA) when timely trial is impossible.'
    },
    fullModelAnswer: `I. CONSTITUTIONAL GENESIS:
In Hussainara Khatoon v. Home Secretary, Bihar (1979), the Supreme Court discovered the "Right to Speedy Trial" as an inalienable component of Article 21. Justice P.N. Bhagwati held that an undertrial languishing in jail for periods exceeding the maximum sentence for the offence represents a breakdown of constitutional procedure.

II. THE BALANCING CRITERIA IN A.R. ANTULAY (1992):
A 5-Judge Constitution Bench in A.R. Antulay v. R.S. Nayak (1992) declined to specify rigid mathematical time limits, formulating a four-factor balancing test:
1. Length of delay;
2. Justification/cause for delay advanced by prosecution;
3. Accused's assertion of right (or contributory delay by defense);
4. Prejudice caused to the accused (incarceration and social stigma).

III. OVERRIDING STATUTORY BAIL BARS (NAJEEB & ANTIL):
The modern frontier applies Article 21 against rigid statutory bail bars:
1. UAPA & PMLA Incarceration: In Union of India v. K.A. Najeeb (2021), the Supreme Court held that statutory restrictions on bail (Section 43D(5) UAPA) cannot override the fundamental right to speedy trial under Article 21. If timely trial is impossible and the accused has suffered prolonged incarceration, constitutional courts must grant bail.
2. Satender Kumar Antil v. CBI (2022): The Court reaffirmed that prolonged undertrial detention violates human dignity and directed strict adherence to bail guidelines and Section 436A CrPC (now Section 479 BNSS).`,
    scoringRubric: [
      { criterion: 'Hussainara Khatoon (1979) genesis under Art. 21', marks: 2.5 },
      { criterion: 'A.R. Antulay 4-factor balancing test', marks: 3 },
      { criterion: 'K.A. Najeeb & Satender Antil overriding statutory bars (UAPA/PMLA)', marks: 3.5 },
      { criterion: 'Synthesis with modern BNSS / undertrial reforms', marks: 1 }
    ]
  },

  // =========================================================================
  // 15 MARKS / 250–300 WORDS (TIER 3: IN-DEPTH PROBLEM & BENCHMARK CASES)
  // =========================================================================
  {
    id: 'mains-15m-passive-euthanasia',
    title: 'Passive Euthanasia, Advance Medical Directives & The Right to Die with Dignity',
    topicId: 'art-21-due-process',
    marksCategory: 15,
    examCategory: 'DJS',
    examsAppeared: ['DJS 2018, 2023', 'UP PCS-J 2018, 2023', 'UPSC Law Optional 2019, 2022'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~12 Mins',
    targetWordMin: 230,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~30 lines)',
    targetTimeMinutes: 12,
    questionText: `Trace the constitutional recognition of the "Right to Die with Dignity" from Gian Kaur to Common Cause (2018). Distinguish between Active and Passive Euthanasia and explain the simplified guidelines for Advance Medical Directives (Living Wills) issued in 2023.`,
    coreIssues: [
      'Gian Kaur (1996) holding that right to life does NOT include right to die (Section 306 IPC valid).',
      'Aruna Shanbaug (2011) first permitting passive euthanasia under High Court parens patriae supervision.',
      'Common Cause (2018) 5-Judge Constitution Bench recognizing Living Wills under Article 21 autonomy.',
      'The 2023 modification removing cumbersome judicial magistrate hurdles.'
    ],
    examinerExpectation:
      'Candidate must trace Gian Kaur $\to$ Aruna Shanbaug $\to$ Common Cause (2018), clearly distinguish Active Euthanasia (illegal) from Passive Euthanasia (legal), and mention the 2023 procedural simplification of living wills.',
    essentialCitations: [
      'P. Rathinam v. Union of India ((1994) 3 SCC 394)',
      'Gian Kaur v. State of Punjab ((1996) 2 SCC 648)',
      'Aruna Ramchandra Shanbaug v. Union of India ((2011) 4 SCC 454)',
      'Common Cause v. Union of India ((2018) 5 SCC 1; 5-Judge Bench)',
      'Common Cause v. Union of India (2023 Guidelines Modification) ((2023) 8 SCC 414)'
    ],
    hoverIntel: {
      topicName: 'Right to Die with Dignity & Living Wills',
      topicPillar: 'Part III: Fundamental Rights • Right to Life (Article 21)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Constitution Bench)',
      examFrequency: 'Tested in DJS, UP PCS-J, and UPSC Law Optional',
      weightagePattern: '15 Marks • 250–300 Words (1.5 Pages)',
      targetTimeMinutes: 12,
      examinerTrapWarning:
        'Trap Alert: Active euthanasia (administering lethal injection) remains a criminal homicide in India! ONLY Passive euthanasia (withdrawing artificial life-support) is constitutionally legal under Common Cause!',
      recentTrendAlert: 'The Supreme Court modified its cumbersome 2018 guidelines in January 2023 to make execution of Living Wills practical.',
      coreArticles: ['Article 21', 'Section 306 IPC / Sec 108 BNS'],
      benchmarkCases: ['Gian Kaur (1996)', 'Aruna Shanbaug (2011)', 'Common Cause (2018)', 'Common Cause (2023)']
    },
    answerBlueprint: {
      step1Intro: 'Define the constitutional journey: P. Rathinam (1994) decriminalized suicide, but Gian Kaur (1996, 5-Judge Bench) held right to life does not include right to be killed.',
      step2DoctrinalCore: 'Distinguish Active vs Passive: In Aruna Shanbaug (2011), the Court allowed withdrawal of life-support (passive euthanasia) for patients in Permanent Vegetative State (PVS).',
      step3PrecedentEvolution: 'Detail Common Cause (2018, 5-Judge Constitution Bench): Declared right to die with dignity an integral part of Article 21, validating Advance Medical Directives (Living Wills).',
      step4Conclusion: 'Detail 2023 simplified guidelines: Replaced the cumbersome Judicial Magistrate notarization with a simple notary/gazetted officer attestation and streamlined hospital medical boards.'
    },
    fullModelAnswer: `I. THE JUDICIAL EVOLUTION (GIAN KAUR TO ARUNA SHANBAUG):
1. Gian Kaur v. State of Punjab (1996, 5-Judge Bench): The Court overruled P. Rathinam, holding that Article 21 guarantees the "right to live with human dignity," but does NOT encompass the "right to die." The right to life is an affirmative natural right; terminating life artificially is antithetical to it. Section 306 IPC (abetment of suicide) was upheld.
2. Aruna Shanbaug v. Union of India (2011): A 2-Judge Bench distinguished between:
   - Active Euthanasia (positive injection of lethal drugs)—Illegal and criminal homicide.
   - Passive Euthanasia (withholding or withdrawing life-sustaining treatment allowing nature to take its course)—Held permissible under the strict parens patriae supervision of the High Court.

II. THE CONSTITUTION BENCH BREAKTHROUGH: COMMON CAUSE (2018):
In Common Cause v. Union of India (2018), a unanimous 5-Judge Constitution Bench ruled that:
1. Dignity in Dying: Article 21 encompasses individual autonomy, bodily integrity, and the right to die with dignity. Forcing a terminally ill patient in vegetative state to survive on invasive artificial life-support violates dignity.
2. Recognition of Living Wills: The Court legalized Advance Medical Directives (Living Wills), enabling mentally competent individuals to declare in advance that if they become terminally ill with no hope of recovery, life-support must be withdrawn.

III. THE 2023 SIMPLIFIED GUIDELINES:
Because the 2018 procedural requirements were hopelessly cumbersome, a 5-Judge Bench modified them in January 2023:
- Living Wills need only be executed before a Notary or Gazetted Officer (removing the mandatory Judicial Magistrate counter-signature).
- Approval procedure inside hospitals was streamlined into Primary and Secondary Medical Boards with strict 48-hour timelines.

CONCLUSION:
Common Cause establishes that dying with peace and dignity is the ultimate expression of human autonomy under Article 21.`,
    scoringRubric: [
      { criterion: 'Gian Kaur (1996) vs Aruna Shanbaug (2011) distinction', marks: 4 },
      { criterion: 'Active vs Passive Euthanasia legal boundary', marks: 3 },
      { criterion: 'Common Cause (2018) 5-Judge Bench Article 21 autonomy ratio', marks: 4 },
      { criterion: '2023 Simplified Guidelines on Living Wills & conclusion', marks: 4 }
    ]
  },

  {
    id: 'mains-15m-minority-institutions',
    title: 'Minority Educational Rights under Article 30(1): Autonomy vs State Regulation',
    topicId: 'minority-rights-art-29-30',
    marksCategory: 15,
    examCategory: 'UP_PCSJ',
    examsAppeared: ['UP PCS-J 2016, 2023', 'UPSC Law Optional 2018, 2021', 'Bihar Judicial 2018'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~12 Mins',
    targetWordMin: 230,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~30 lines)',
    targetTimeMinutes: 12,
    questionText: `Discuss the extent of regulatory control the State can exercise over aided and unaided Minority Educational Institutions under Article 30(1). Can the State mandate national entrance tests like NEET on minority medical colleges?`,
    coreIssues: [
      'Fundamental right of religious and linguistic minorities to establish and administer educational institutions.',
      'Aided vs Unaided institutions distinction in T.M.A. Pai and P.A. Inamdar.',
      'State power to regulate academic standards, teacher qualifications, and national merit tests (Christian Medical College 2020).'
    ],
    examinerExpectation:
      'Candidate must explain Article 30(1), trace T.M.A. Pai (11-Judge Bench) and P.A. Inamdar (7-Judge Bench), and analyze Christian Medical College, Vellore (2020) upholding NEET as a regulatory measure ensuring academic merit without violating minority autonomy.',
    essentialCitations: [
      'In re Kerala Education Bill (1959 SCR 995)',
      'T.M.A. Pai Foundation v. State of Karnataka ((2002) 8 SCC 481; 11-Judge Bench)',
      'P.A. Inamdar v. State of Maharashtra ((2005) 6 SCC 537; 7-Judge Bench)',
      'Christian Medical College, Vellore v. Union of India ((2020) 8 SCC 705)'
    ],
    hoverIntel: {
      topicName: 'Minority Educational Institutions & Article 30',
      topicPillar: 'Part III: Fundamental Rights • Cultural & Educational Rights (Article 30)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Judiciary Core)',
      examFrequency: 'Tested in UP PCS-J, UPSC Law Optional, and Bihar Judicial',
      weightagePattern: '15 Marks • 250–300 Words (1.5 Pages)',
      targetTimeMinutes: 12,
      examinerTrapWarning:
        'Trap Alert: Article 30(1) is an absolute right on paper, but it is NOT immune from regulatory oversight! Regulations to maintain academic excellence, welfare of staff, and national merit tests (NEET) are valid and binding!',
      recentTrendAlert: 'Christian Medical College (2020) confirmed that NEET applies uniformly to minority institutions.',
      coreArticles: ['Article 30(1)', 'Article 29', 'Article 15(5)'],
      benchmarkCases: ['Kerala Education Bill (1958)', 'T.M.A. Pai (2002)', 'P.A. Inamdar (2005)', 'CMC Vellore (2020)']
    },
    answerBlueprint: {
      step1Intro: 'Quote Article 30(1): "All minorities, whether based on religion or language, shall have the right to establish and administer educational institutions of their choice."',
      step2DoctrinalCore: 'Trace T.M.A. Pai Foundation (2002, 11-Judge Bench): Right to administer is not a right to maladminister; regulations in national interest are permissible.',
      step3PrecedentEvolution: 'Analyze Aided vs Unaided (P.A. Inamdar, 2005): Unaided private minority institutions enjoy maximum autonomy; State cannot impose reservations, but can enforce fee transparency and non-exploitation.',
      step4Conclusion: 'Apply Christian Medical College, Vellore (2020): NEET was upheld because common national testing checks commercialization, ensures merit, and does not abridge minority administrative rights.'
    },
    fullModelAnswer: `I. TEXTUAL MANDATE & OBJECTIVE:
Article 30(1) provides an exceptional charter of minority protection: "All minorities, whether based on religion or language, shall have the right to establish and administer educational institutions of their choice."
In In re Kerala Education Bill (1958), the Supreme Court emphasized that Article 30 is intended to foster confidence in minorities that their distinct cultural identity and educational aspirations are secure.

II. AUTONOMY VS PERMISSIBLE REGULATION (T.M.A. PAI & P.A. INAMDAR):
1. Right to Administer is Not a Right to Maladminister: In T.M.A. Pai Foundation (2002, 11-Judge Bench), the Court established that Article 30(1) is not absolute. The State can enforce regulatory measures to maintain academic excellence, prescribe minimum faculty qualifications, enforce labour laws, and prevent financial maladministration.
2. Aided vs Unaided Institutions (P.A. Inamdar, 2005, 7-Judge Bench):
   - Unaided Minority Institutions: Enjoy greater autonomy. The State cannot enforce reservation quotas on them (Article 15(5) expressly exempts minority institutions).
   - Aided Minority Institutions: Once state financial aid is accepted, institutions cannot refuse admission to non-minority students solely on ground of religion (Article 29(2)), and the State can regulate admission quotas.

III. UNIFORM ENTRANCE EXAMINATIONS: CMC VELLORE (2020):
In Christian Medical College, Vellore v. Union of India (2020) 8 SCC 705, a 3-Judge Bench resolved whether mandating NEET violates Article 30(1):
- The Court upheld the mandatory application of NEET to all minority medical institutions.
- Regulating Admissions for Merit: A uniform national entrance exam does not alter the minority character; it eliminates corruption, capitation fees, and unfair admission tests, ensuring merit-based selection.

CONCLUSION:
Article 30(1) guarantees protection against majoritarian encroachment, but accommodates regulatory frameworks that advance national standards and meritocracy.`,
    scoringRubric: [
      { criterion: 'Article 30(1) purpose & Kerala Education Bill origin', marks: 3 },
      { criterion: 'T.M.A. Pai 11-Judge Bench balance: administration vs maladministration', marks: 4 },
      { criterion: 'Aided vs Unaided institutional dichotomy in P.A. Inamdar', marks: 4 },
      { criterion: 'CMC Vellore 2020 NEET ruling & synthesis', marks: 4 }
    ]
  },

  {
    id: 'mains-15m-anti-defection-speaker',
    title: 'Anti-Defection Law (Tenth Schedule): Speaker Disqualification & Floor Tests (Subhash Desai 2023)',
    topicId: 'legislature-privileges-anti-defection',
    marksCategory: 15,
    examCategory: 'UPSC_LAW',
    examsAppeared: ['UPSC Law Optional 2023', 'DJS 2023', 'UP PCS-J 2023', 'CLAT PG 2023'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~12 Mins',
    targetWordMin: 230,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~30 lines)',
    targetTimeMinutes: 12,
    questionText: `Can a Speaker facing a notice for removal decide disqualification petitions under the Tenth Schedule? Critically examine the 5-Judge Constitution Bench ruling in Subhash Desai v. Principal Secretary (Maharashtra Political Crisis 2023) and the reference to reconsider Nabam Rebia.`,
    coreIssues: [
      'The fetter imposed in Nabam Rebia (2016): Speaker cannot decide disqualification if a resolution for removal under Art 179(c) is pending.',
      'Subhash Desai (2023) critique: Nabam Rebia created a loophole where rebel MLAs stall disqualification by issuing frivolous removal notices.',
      'Governor calling a floor test without objective internal rebellion data.',
      'Reference to a 7-Judge Bench.'
    ],
    examinerExpectation:
      'Candidate must explain the dilemma between Nabam Rebia (2016) and Subhash Desai (2023). Clarify that the Speaker must decide who represents the political party based on the original party, not the legislative party, and explain why Nabam Rebia is referred to 7 judges.',
    essentialCitations: [
      'Kihoto Hollohan v. Zachillhu (1992 Supp (2) SCC 651)',
      'Nabam Rebia v. Deputy Speaker, Arunachal Pradesh ((2016) 8 SCC 1)',
      'Keisham Meghachandra Singh v. Speaker, Manipur ((2020) SCC OnLine SC 55)',
      'Subhash Desai v. Principal Secretary, Governor of Maharashtra (2023 INSC 516; (2024) 2 SCC 155)'
    ],
    hoverIntel: {
      topicName: 'Tenth Schedule & Speaker Disqualification',
      topicPillar: 'Tenth Schedule & Legislature (Articles 179 & 191)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Landmark 2023 5-Judge Bench)',
      examFrequency: 'Guaranteed core question in UPSC Law Optional and State Judicial Mains',
      weightagePattern: '15 Marks • 250–300 Words (1.5 Pages)',
      targetTimeMinutes: 12,
      examinerTrapWarning:
        'Trap Alert: The Court in Subhash Desai held that the Governor had NO objective material to order a floor test, but REFUSED to reinstate Uddhav Thackeray as Chief Minister because he had resigned voluntarily before facing the floor test!',
      recentTrendAlert: 'Nabam Rebia referred to a 7-Judge Constitution Bench to settle the Speaker removal dilemma.',
      coreArticles: ['Tenth Schedule', 'Article 174', 'Article 179(c)', 'Article 212'],
      benchmarkCases: ['Kihoto Hollohan (1992)', 'Nabam Rebia (2016)', 'Subhash Desai (2023)']
    },
    answerBlueprint: {
      step1Intro: 'Introduce Tenth Schedule (52nd Amendment 1985) designed to combat the "Aaya Ram, Gaya Ram" political defection menace.',
      step2DoctrinalCore: 'Analyze Nabam Rebia (2016): Held that the Speaker cannot adjudicate Tenth Schedule disqualifications when a notice for the Speaker\'s own removal under Article 179(c) is pending.',
      step3PrecedentEvolution: 'Detail Subhash Desai (2023, 5-Judge Constitution Bench): (a) Nabam Rebia was misused by defecting MLAs to paralyze the Speaker, (b) Political Party (original) is paramount over Legislative Party (MLAs), (c) Governor cannot precipitate government collapse.',
      step4Conclusion: 'Conclude with the reference to a 7-Judge Bench to reconcile Article 179(c) with Tenth Schedule accountability.'
    },
    fullModelAnswer: `I. THE CONSTITUTIONAL DILEMMA:
The Tenth Schedule entrusts the Speaker with judicial powers to adjudicate disqualifications for defection (Kihoto Hollohan, 1992).
In Nabam Rebia (2016), a 5-Judge Bench held that a Speaker cannot proceed with disqualification petitions against MLAs if a notice of intention to move a resolution for the Speaker's own removal is pending under Article 179(c). This was designed to prevent a partisan Speaker from altering House arithmetic to survive.

II. THE ABUSE REVEALED IN SUBHASH DESAI (2023):
In Subhash Desai v. Principal Secretary (Maharashtra Political Crisis, 2023 INSC 516), a 5-Judge Constitution Bench headed by CJI D.Y. Chandrachud identified grave systemic hazards in Nabam Rebia:
1. Weapon of Immunity: Defecting MLAs routinely subverted the anti-defection law by issuing frivolous removal notices against the Speaker under Article 179(c), effectively immunizing themselves from disqualification proceedings.
2. Political Party Over Legislative Party: The Court ruled that the Tenth Schedule recognizes the "Political Party" (the registered party organization), NOT the "Legislature Party" (elected MLAs). The Speaker must determine who is the authorized whip based on the political party's constitution, not a breakaway faction of MLAs.
3. Illegality of Governor's Action: The Governor erred in calling a floor test based solely on internal party dissatisfaction, as political dissent within a party does not imply loss of majority on the floor of the House.

III. THE REMEDY & 7-JUDGE REFERENCE:
Although the Court held the Governor's floor test illegal, it declined to reinstate the previous Ministry because the Chief Minister had resigned voluntarily without facing the Assembly.
Recognizing that Nabam Rebia creates an unworkable constitutional conflict, the Bench referred it to a 7-Judge Constitution Bench to re-determine the Speaker's jurisdiction under Article 179(c).

CONCLUSION:
Subhash Desai restores primacy to political party accountability, checking the weaponization of procedural loopholes under the Tenth Schedule.`,
    scoringRubric: [
      { criterion: 'Tenth Schedule purpose & Nabam Rebia 2016 fetter on Speaker', marks: 4 },
      { criterion: 'Subhash Desai 2023 critique & Political Party vs Legislature Party distinction', marks: 5 },
      { criterion: 'Governor\'s role in floor tests & voluntary resignation holding', marks: 3 },
      { criterion: 'Reference to 7-Judge Constitution Bench & conclusion', marks: 3 }
    ]
  },

  {
    id: 'mains-15m-quashing-fir-226',
    title: 'Quashing of Malicious Criminal Proceedings & FIRs under Article 226 & Section 482 CrPC',
    topicId: 'art-20-22-custodial-forensics',
    marksCategory: 15,
    examCategory: 'PROSECUTION',
    examsAppeared: ['Prosecution (CBI / State APO) 2018, 2023', 'DJS Criminal Law 2017, 2022', 'Bihar APO 2022'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~12 Mins',
    targetWordMin: 230,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~30 lines)',
    targetTimeMinutes: 12,
    questionText: `Analyze the parameters laid down in State of Haryana v. Bhajan Lal for quashing criminal proceedings and FIRs under Article 226 and Section 482 CrPC (Section 528 BNSS). Can a High Court grant an order of "No Coercive Steps" while refusing to quash an FIR?`,
    coreIssues: [
      'Inherent powers under Section 482 CrPC / Section 528 BNSS and extraordinary constitutional writ power under Article 226.',
      'The 7 illustrative categories formulated in State of Haryana v. Bhajan Lal (1992).',
      'The practice of granting blanket interim protection against arrest while dismissing or keeping quashing petitions pending (Neeharika Infrastructure 2021).'
    ],
    examinerExpectation:
      'Candidate must enumerate the key Bhajan Lal (1992) categories (no prima facie offence, statutory bar, manifest malice), cite R.P. Kapur, and detail the 3-Judge Bench ruling in M/s Neeharika Infrastructure (2021) condemning blanket "no coercive steps" orders.',
    essentialCitations: [
      'R.P. Kapur v. State of Punjab (1960 3 SCR 388)',
      'State of Haryana v. Bhajan Lal (1992 Supp (1) SCC 335)',
      'M/s Neeharika Infrastructure Pvt. Ltd. v. State of Maharashtra ((2021) 19 SCC 401)',
      'State of U.P. v. Golam Sarwar (2024 INSC 226)'
    ],
    hoverIntel: {
      topicName: 'Quashing FIRs: Bhajan Lal & Neeharika Principles',
      topicPillar: 'Part VI: High Court Jurisdiction (Article 226 & Sec 482 CrPC / Sec 528 BNSS)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Prosecution Benchmark)',
      examFrequency: 'Appeared in DJS Criminal Law, CBI PP, and State APO exams',
      weightagePattern: '15 Marks • 250–300 Words (1.5 Pages)',
      targetTimeMinutes: 12,
      examinerTrapWarning:
        'Trap Alert: A High Court CANNOT pass a blanket order of "no coercive action" or "not to arrest" under Sec 482 without giving recorded reasons. In Neeharika Infrastructure (2021), the Supreme Court condemned such orders as backdoor anticipatory bail!',
      recentTrendAlert: 'Directly aligned with Section 528 Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023.',
      coreArticles: ['Article 226', 'Section 482 CrPC', 'Section 528 BNSS'],
      benchmarkCases: ['Bhajan Lal (1992)', 'Neeharika Infrastructure (2021)']
    },
    answerBlueprint: {
      step1Intro: 'Define the power: High Courts exercise extraordinary writ powers under Article 226 and inherent powers under Section 482 CrPC (Section 528 BNSS) to prevent abuse of judicial process and secure ends of justice.',
      step2DoctrinalCore: 'Detail Bhajan Lal (1992) 7 categories: (1) Allegations do not disclose cognizable offence, (2) Allegations absurd and inherently improbable, (3) Express legal bar in statute, (4) Malicious prosecution with an ulterior motive.',
      step3PrecedentEvolution: 'Detail the Neeharika Infrastructure (2021, 3-Judge Bench) ruling on interim relief: Police have statutory right to investigate under CrPC/BNSS; courts cannot stay investigation or grant blanket "no arrest" protection casually.',
      step4Conclusion: 'Conclude with exceptional nature: Quashing is an exception, not the rule. Courts do not conduct a mini-trial at the threshold FIR stage.'
    },
    fullModelAnswer: `I. CONSTITUTIONAL & STATUTORY JURISDICTION:
High Courts possess twin jurisdictions to quash criminal proceedings: extraordinary constitutional powers under Article 226 and inherent statutory powers under Section 482 CrPC (now Section 528 BNSS, 2023). These powers are exercised ex debito justitiae to prevent abuse of court process and secure the ends of justice.

II. THE SEVEN PILLARS OF STATE OF HARYANA V. BHAJAN LAL (1992):
The Supreme Court formulated illustrative categories where quashing is warranted:
1. No Cognizable Offence Disclosed: Where allegations in the FIR, taken at face value, do not prima facie constitute any offence.
2. Inherently Improbable: Where allegations are so absurd and inherently improbable that no prudent person can conclude there is sufficient ground for proceeding.
3. Express Statutory Bar: Where there is an express legal bar engrafted in the Code or special Act (e.g. lack of prior sanction under Sec 197 CrPC / Sec 218 BNSS).
4. Manifest Malice: Where a criminal proceeding is manifestly attended with mala fides, maliciously instituted with an ulterior motive for wreaking vengeance due to private grudge.

III. THE "NO COERCIVE STEPS" FALLACY: NEEHARIKA INFRASTRUCTURE (2021):
In M/s Neeharika Infrastructure v. State of Maharashtra (2021) 19 SCC 401, a 3-Judge Bench condemned the widespread judicial practice of High Courts passing blanket orders of "no coercive action" or "investigation shall continue but accused shall not be arrested":
1. Backdoor Anticipatory Bail: Such orders circumvent the statutory prerequisites of Section 438 CrPC (Section 482 BNSS).
2. Interfere with Police Prerogative: Police have a statutory duty to investigate cognizable offences under Chapter XII CrPC / BNSS. Courts cannot interdict investigation without recording reasoned prima facie grounds.

CONCLUSION:
Quashing is an extraordinary power to be exercised with great circumspection. Courts must avoid conducting a premature mini-trial at the threshold stage.`,
    scoringRubric: [
      { criterion: 'Art. 226 vs Sec. 482 CrPC / Sec. 528 BNSS jurisdiction', marks: 3 },
      { criterion: 'Bhajan Lal 1992 illustrative categories (malice, improbability, legal bar)', marks: 5 },
      { criterion: 'Neeharika Infrastructure 2021 ban on blanket "no coercive steps" orders', marks: 5 },
      { criterion: 'Principle against threshold mini-trials & conclusion', marks: 2 }
    ]
  },

  {
    id: 'mains-15m-repugnancy-art254',
    title: 'Repugnancy between Central & State Laws under Article 254',
    topicId: 'centre-state-relations-pith-substance',
    marksCategory: 15,
    examCategory: 'UP_PCSJ',
    examsAppeared: ['UP PCS-J 2016, 2023', 'Bihar Judicial 2018, 2021', 'UPSC Law Optional 2019, 2022'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~12 Mins',
    targetWordMin: 230,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~30 lines)',
    targetTimeMinutes: 12,
    questionText: `Explain the mechanism for resolving Repugnancy between Central and State laws under Article 254. When does a State law prevail over a prior Parliamentary enactment in the Concurrent List, and can Parliament overturn it?`,
    coreIssues: [
      'Scope of Article 254: Confined strictly to Concurrent List (List III) enactments.',
      'The 3 tests of Repugnancy laid down in M. Karunanidhi v. Union of India.',
      'Article 254(2) exception: Presidential assent saves State law within that State.',
      'Proviso to Article 254(2): Parliament can subsequent enact law adding to, amending, or repealing the State law.'
    ],
    examinerExpectation:
      'Candidate must explain Article 254(1) and (2), cite M. Karunanidhi (1979) 3 tests of repugnancy, and highlight that Parliament can override the Presidential assent exception by enacting a subsequent law under the proviso.',
    essentialCitations: [
      'Deep Chand v. State of U.P. (AIR 1959 SC 648)',
      'Zaverbhai Amaidas v. State of Bombay (1955 1 SCR 799)',
      'M. Karunanidhi v. Union of India ((1979) 3 SCC 431)',
      'Forum for People\'s Collective Efforts v. State of W.B. ((2021) 8 SCC 599)'
    ],
    hoverIntel: {
      topicName: 'Repugnancy under Article 254',
      topicPillar: 'Part XI: Legislative Relations • Concurrent List (Article 254)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Federalism Core)',
      examFrequency: 'Regularly tested in UP PCS-J, Bihar Judicial, and UPSC Law Optional',
      weightagePattern: '15 Marks • 250–300 Words (1.5 Pages)',
      targetTimeMinutes: 12,
      examinerTrapWarning:
        'Trap Alert: Article 254 applies ONLY when both Central and State laws fall in the Concurrent List (List III)! If a State law encroaches on List I, it is void for lack of competence under Article 246, not for repugnancy under Article 254!',
      recentTrendAlert: 'West Bengal Housing Industry Regulation Act struck down in 2021 for repugnancy with Central RERA.',
      coreArticles: ['Article 254(1)', 'Article 254(2)', 'Article 246'],
      benchmarkCases: ['Zaverbhai (1954)', 'M. Karunanidhi (1979)', 'Forum for Peoples Collective Efforts (2021)']
    },
    answerBlueprint: {
      step1Intro: 'Quote Article 254(1): If any provision of a State law is repugnant to a law made by Parliament on a Concurrent List subject, the Parliamentary law prevails and the State law is void to the extent of repugnancy.',
      step2DoctrinalCore: 'Detail M. Karunanidhi (1979) 3 tests of Repugnancy: (1) Direct conflict between provisions, (2) Impossibility of simultaneous obedience, (3) Parliamentary intent to occupy the entire field exhaustively.',
      step3PrecedentEvolution: 'Analyze the Article 254(2) Exception: If a State law receives the President\'s Assent, it prevails in that State over the prior Central law.',
      step4Conclusion: 'Detail Proviso to Article 254(2): Parliament can at any time enact a subsequent law adding to, amending, varying, or repealing the State law (e.g. West Bengal RERA conflict in 2021).'
    },
    fullModelAnswer: `I. CONSTITUTIONAL SCOPE (ARTICLE 254(1)):
Article 254 resolves conflicts between Parliamentary laws and State enactments regarding matters enumerated in the Concurrent List (List III). Under Article 254(1), if a State law is repugnant to an Act of Parliament, the Parliamentary law prevails, and the State law is void to the extent of the repugnancy.
(If a law encroaches on List I, the issue is competence under Article 246, not repugnancy).

II. THE THREE TESTS OF REPUGNANCY (M. KARUNANIDHI, 1979):
In M. Karunanidhi v. Union of India (1979) 3 SCC 431, the Supreme Court synthesized the tests:
1. Direct Conflict: An express collision exists between the provisions such that they cannot stand together.
2. Impossibility of Joint Obedience: Obedience to the State law necessarily results in disobedience of the Parliamentary law.
3. Occupied Field Doctrine: Parliament intended to make a complete, exhaustive, and exclusive code on the subject. Even if there is no direct collision, the State law is void because Parliament occupied the entire field.

III. THE ARTICLE 254(2) EXCEPTION & THE PARLIAMENTARY COUNTER-OVERRIDE:
1. The Presidential Assent Shield (Article 254(2)): Where a State law on a Concurrent subject is reserved for the consideration of the President under Article 200 and receives the President's Assent, the State law prevails in that State over an earlier Parliamentary enactment.
2. The Proviso Override: The Proviso to Article 254(2) restores national legislative supremacy: Parliament can at any subsequent time enact a fresh law regarding the same matter, adding to, amending, varying, or repealing the State law.

APPLICATION: In Forum for People's Collective Efforts v. State of W.B. (2021), the Supreme Court struck down the West Bengal Housing Industry Regulation Act (WB-HIRA) because Parliament had comprehensively occupied the field by enacting RERA, 2016.`,
    scoringRubric: [
      { criterion: 'Article 254(1) mandate & List III limitation', marks: 3 },
      { criterion: 'M. Karunanidhi 3 tests of repugnancy & Occupied Field doctrine', marks: 5 },
      { criterion: 'Article 254(2) Presidential Assent exception', marks: 3.5 },
      { criterion: 'Proviso to Art. 254(2) Parliamentary override & WB-HIRA application', marks: 3.5 }
    ]
  },

  {
    id: 'mains-15m-election-commission-autonomy',
    title: 'Appointment & Independence of Election Commission: Anoop Baranwal (2023) & The 2023 Act',
    topicId: 'elections-ec-autonomy',
    marksCategory: 15,
    examCategory: 'UPSC_LAW',
    examsAppeared: ['UPSC Law Optional 2023, 2024', 'DJS 2023', 'UP PCS-J 2023'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~12 Mins',
    targetWordMin: 230,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~30 lines)',
    targetTimeMinutes: 12,
    questionText: `Discuss the constitutional mandate of Article 324 regarding the independence of the Election Commission of India. Examine the 5-Judge Constitution Bench ruling in Anoop Baranwal (2023) and analyze the controversy surrounding the Chief Election Commissioner Act, 2023.`,
    coreIssues: [
      'Article 324(2) parliamentary law-making silence for 73 years.',
      'The 5-Judge Constitution Bench in Anoop Baranwal (2023) instituting a selection committee (PM, CJI, Leader of Opposition).',
      'The subsequent enactment of the Chief Election Commissioner Act, 2023 replacing the CJI with a Union Cabinet Minister.',
      'Free and fair elections as part of the Basic Structure.'
    ],
    examinerExpectation:
      'Candidate must detail Article 324, analyze Justice Joseph\'s majority judgment in Anoop Baranwal (2023) creating the interim committee with the CJI, critique the 2023 Parliamentary Act replacing the CJI with a Minister, and evaluate the Basic Structure doctrine.',
    essentialCitations: [
      'T.N. Seshan, CEC of India v. Union of India ((1995) 4 SCC 611)',
      'Anoop Baranwal v. Union of India ((2023) 6 SCC 161; 5-Judge Bench)',
      'Association for Democratic Reforms v. Union of India (2024 INSC 224)'
    ],
    hoverIntel: {
      topicName: 'Election Commission Autonomy & Appointments',
      topicPillar: 'Part XV: Elections & Constitutional Bodies (Article 324)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Major Current Benchmark)',
      examFrequency: 'Guaranteed top question in UPSC Law Optional and Judicial Mains',
      weightagePattern: '15 Marks • 250–300 Words (1.5 Pages)',
      targetTimeMinutes: 12,
      examinerTrapWarning:
        'Trap Alert: The Court in Anoop Baranwal explicitly stated its 3-member committee (PM, CJI, LoP) was an interim measure "until Parliament makes a law by statute". Parliament subsequently enacted the 2023 Act, creating an executive-majority committee!',
      recentTrendAlert: 'Chief Election Commissioner Act, 2023 challenged before the Supreme Court under Basic Structure.',
      coreArticles: ['Article 324(2)', 'Article 324(5)', 'Article 14'],
      benchmarkCases: ['T.N. Seshan (1995)', 'Anoop Baranwal (2023)']
    },
    answerBlueprint: {
      step1Intro: 'Quote Article 324(2): Appointment of CEC and ECs by the President, "subject to the provisions of any law made in that behalf by Parliament." For 73 years, no law was enacted, leaving appointments to executive discretion.',
      step2DoctrinalCore: 'Detail Anoop Baranwal (2023, 5-Judge Constitution Bench): Free and fair elections are part of the Basic Structure; an executive-dependent Commission cannot guarantee democracy.',
      step3PrecedentEvolution: 'Detail the Anoop Baranwal Collegium: Directed that appointments be made on recommendation of a 3-member committee: Prime Minister, Leader of Opposition, and Chief Justice of India.',
      step4Conclusion: 'Analyze the Chief Election Commissioner Act, 2023: Parliament enacted a statute substituting the CJI with a Cabinet Minister nominated by the PM, giving the Executive a 2:1 majority.'
    },
    fullModelAnswer: `I. THE 73-YEAR CONSTITUTIONAL VACUUM:
Article 324(2) provides that appointments of the Chief Election Commissioner (CEC) and Election Commissioners (ECs) shall be made by the President, "subject to the provisions of any law made in that behalf by Parliament."
Despite the Constituent Assembly's clear expectation, Parliament failed to enact an appointment law for over seven decades, leaving appointments to the unilateral choice of the ruling Union Executive.

II. THE CONSTITUTION BENCH INTERVENTION: ANOOP BARANWAL (2023):
In Anoop Baranwal v. Union of India (2023) 6 SCC 161, a unanimous 5-Judge Constitution Bench headed by Justice K.M. Joseph held:
1. Democracy & Free Elections as Basic Structure: The Election Commission is the guardian of democracy. An election commission beholden to the ruling executive destroys the level playing field.
2. The Interim Selection Committee: Invoking Article 142 to fill the legislative vacuum, the Court directed that CEC and ECs shall be selected by a 3-member committee comprising:
   - The Prime Minister;
   - The Leader of Opposition (or leader of largest opposition party) in Lok Sabha; and
   - The Chief Justice of India.
This arrangement was to continue "until Parliament enacts a law."

III. THE CHIEF ELECTION COMMISSIONER ACT, 2023:
Parliament responded by passing the Chief Election Commissioner and other Election Commissioners (Appointment, Conditions of Service and Term of Office) Act, 2023:
- Replaced the CJI: The Act substituted the Chief Justice of India with a Union Cabinet Minister nominated by the Prime Minister.
- Executive Dominance Restored: The selection committee now comprises the PM, a Cabinet Minister, and the Leader of Opposition, permanently guaranteeing a 2:1 majority to the ruling Executive.

CONCLUSION:
While Parliament exercised its express powers under Article 324(2), the exclusion of an independent judicial arbiter reopens the question of institutional neutrality under the Basic Structure.`,
    scoringRubric: [
      { criterion: 'Article 324(2) text & 73-year legislative vacuum', marks: 3 },
      { criterion: 'Anoop Baranwal (2023) ratio: Free elections as Basic Structure', marks: 4 },
      { criterion: 'The interim 3-member committee (PM, LoP, CJI)', marks: 4 },
      { criterion: 'Analysis of the 2023 Parliamentary Act replacing CJI & conclusion', marks: 4 }
    ]
  },

  {
    id: 'mains-15m-pil-locus-standi',
    title: 'Public Interest Litigation (PIL): Epistolary Jurisdiction vs Abuse of Process',
    topicId: 'writs-judicial-review-142',
    marksCategory: 15,
    examCategory: 'BJS',
    examsAppeared: ['Bihar Judicial 2016, 2021', 'UP PCS-J 2015, 2018', 'UPSC Law Optional 2017, 2022'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~12 Mins',
    targetWordMin: 230,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~30 lines)',
    targetTimeMinutes: 12,
    questionText: `Trace the evolution of Public Interest Litigation (PIL) and Epistolary Jurisdiction in India. How has the Supreme Court balanced access to justice for marginalized citizens against frivolous "Publicity Interest Litigation"? Refer to Balwant Singh Chaufal.`,
    coreIssues: [
      'Relaxation of traditional Anglo-Saxon Locus Standi in S.P. Gupta (Judges Transfer Case 1981).',
      'Epistolary jurisdiction: Treating letters, postcards, and telegrams as writ petitions (Bandhua Mukti Morcha).',
      'The degenerative phase: Abuse of PIL for extortion, political vendetta, or corporate rivalry.',
      'The 8-point regulatory guidelines in State of Uttaranchal v. Balwant Singh Chaufal (2010).'
    ],
    examinerExpectation:
      'Candidate must explain Justice Bhagwati\'s transformation of Article 32, cite S.P. Gupta, Bandhua Mukti Morcha, and detail the 8 guidelines in Balwant Singh Chaufal (2010) to weed out vexatious petitions with exemplary costs.',
    essentialCitations: [
      'Mumbai Kamgar Sabha v. Abdulbhai Faizullabhai ((1976) 3 SCC 832)',
      'S.P. Gupta v. Union of India (1981 Supp SCC 87)',
      'Bandhua Mukti Morcha v. Union of India ((1984) 3 SCC 161)',
      'State of Uttaranchal v. Balwant Singh Chaufal ((2010) 3 SCC 402)'
    ],
    hoverIntel: {
      topicName: 'Public Interest Litigation (PIL) & Locus Standi',
      topicPillar: 'Part III: Enforcement of Rights • Article 32 / 226',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Judiciary Core)',
      examFrequency: 'Appeared in Bihar Judicial 3 times, UP PCS-J, and UPSC Law',
      weightagePattern: '15 Marks • 250–300 Words (1.5 Pages)',
      targetTimeMinutes: 12,
      examinerTrapWarning:
        'Trap Alert: Detail the 3 historical phases of PIL categorized in Balwant Singh Chaufal: (1) Human rights of prisoners/bonded labourers, (2) Environmental protection, (3) Transparency/probity in governance and filtering abuse!',
      recentTrendAlert: 'Exemplary costs regularly imposed on frivolous PILs seeking publicity.',
      coreArticles: ['Article 32', 'Article 226', 'Article 39A'],
      benchmarkCases: ['S.P. Gupta (1981)', 'Bandhua Mukti Morcha (1984)', 'Balwant Singh Chaufal (2010)']
    },
    answerBlueprint: {
      step1Intro: 'Define the paradigm shift: Traditional Anglo-Saxon jurisprudence insisted that only a person suffering legal injury could approach court (strict locus standi).',
      step2DoctrinalCore: 'Detail S.P. Gupta (1981, Justice Bhagwati): Where a legal wrong is done to a class of persons who, by reason of poverty or disability, cannot approach the Court, any member of the public acting bona fide can maintain an action under Article 32 or 226.',
      step3PrecedentEvolution: 'Explain Epistolary Jurisdiction (Bandhua Mukti Morcha, 1984): Procedural shackles relaxed; Court acts upon letters and postcards to rescue bonded labourers.',
      step4Conclusion: 'Analyze Balwant Singh Chaufal (2010) guidelines: Verification of petitioner credentials, filtering private vendetta / publicity interest litigation, and imposing exemplary costs.'
    },
    fullModelAnswer: `I. THE CONSTITUTIONAL REVOLUTION (S.P. GUPTA, 1981):
Traditional common law required the petitioner to have a direct personal interest (strict Locus Standi). In India, where millions were disenfranchised by poverty, illiteracy, and systemic oppression, strict standing made Article 32 accessible only to the affluent.
In S.P. Gupta v. Union of India (1981), Justice P.N. Bhagwati revolutionized public law:
- Any member of the public acting bona fide can invoke Articles 32 and 226 to redress a public wrong or injury inflicted upon persons who, by reason of poverty, disability, or socially disadvantaged position, cannot approach the court themselves.

II. EPISTOLARY JURISDICTION:
In Bandhua Mukti Morcha (1984) and Sunil Batra, the Court shed hyper-technical formalities:
- Letters, telegrams, and newspaper reports detailing human rights violations were treated as formal writ petitions.
- Socio-legal commissions of inquiry were appointed by the Court to gather factual evidence.

III. DEGENERATION & THE CHAUFAL REGULATORY GUIDELINES (2010):
Over time, the noble tool degenerated into "Publicity Interest Litigation," "Private Inquisitorial Litigation," and commercial blackmail.
In State of Uttaranchal v. Balwant Singh Chaufal (2010) 3 SCC 402, the Supreme Court formulated an 8-point code to curb abuse:
1. Verification of Credentials: Courts must verify the bona fides and philanthropic background of the petitioner.
2. Screening for Ulterior Motive: Ensure no oblique motive, private vendetta, or corporate rivalry is disguised as public interest.
3. Genuine Public Harm: The petition must involve substantial public interest, not hypothetical grievances.
4. Exemplary Deterrent Costs: Frivolous petitions wasting judicial time must be dismissed with heavy exemplary costs.

CONCLUSION:
PIL democratized constitutional remedies, transforming the Supreme Court into the "Supreme Court for Indians," while the Chaufal guidelines preserve its institutional sanctity.`,
    scoringRubric: [
      { criterion: 'Traditional locus standi vs S.P. Gupta 1981 revolution', marks: 4 },
      { criterion: 'Epistolary jurisdiction & Bandhua Mukti Morcha evidence gathering', marks: 3.5 },
      { criterion: 'Degeneration into publicity/private litigation', marks: 2.5 },
      { criterion: 'Balwant Singh Chaufal 2010 guidelines & conclusion', marks: 5 }
    ]
  },

  // =========================================================================
  // 20 MARKS / 450–500 WORDS (TIER 4: COMPREHENSIVE DOCTRINES & LONG ESSAYS)
  // =========================================================================
  {
    id: 'mains-20m-president-rule-bommai',
    title: 'President\'s Rule under Article 356 & Judicial Review: S.R. Bommai Benchmark',
    topicId: 'emergency-provisions-art-356',
    marksCategory: 20,
    examCategory: 'BJS',
    examsAppeared: ['Bihar Judicial 2014, 2018, 2021', 'UP PCS-J 2016, 2023', 'UPSC Law Optional 2016, 2021'],
    typicalMarks: 20,
    targetWordLimit: '450–500 Words | Time: ~15 Mins',
    targetWordMin: 420,
    targetWordMax: 520,
    estimatedPages: '2.0 Pages (~42 lines)',
    targetTimeMinutes: 15,
    questionText: `Critically examine the scope of Judicial Review over Presidential Proclamations under Article 356 in the light of the 9-Judge Constitution Bench ruling in S.R. Bommai v. Union of India. Can a dissolved State Legislative Assembly be revived by the Court?`,
    coreIssues: [
      'Meaning of "failure of constitutional machinery" in a State.',
      'Subjective satisfaction of the President based on Governor\'s report or otherwise.',
      'Justiciability of the proclamation and burden of proof on the Union.',
      'The Floor of the House as the sole constitutional arena for testing majority.',
      'Secularism as a Basic Feature justifying dismissal of communal governments.',
      'Power of the Court to restore a dismissed government and revive a dissolved Assembly.'
    ],
    examinerExpectation:
      'Candidate must trace Article 356 history, explain State of Rajasthan (1977) limited review, analyze the 9-Judge Bench in S.R. Bommai (1994) establishing full judicial review of material, mandatory floor tests, secularism as basic structure, and the power of status quo ante revival.',
    essentialCitations: [
      'State of Rajasthan v. Union of India ((1977) 3 SCC 592)',
      'S.R. Bommai v. Union of India ((1994) 3 SCC 1; 9-Judge Bench)',
      'Rameshwar Prasad (VI) v. Union of India ((2006) 2 SCC 1)',
      'Nabam Rebia v. Deputy Speaker, Arunachal Pradesh ((2016) 8 SCC 1)'
    ],
    hoverIntel: {
      topicName: 'Article 356 & S.R. Bommai Precedent',
      topicPillar: 'Part XVIII: Emergency Provisions • Federalism (Article 356)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Federalism Landmark)',
      examFrequency: 'Tested in Bihar Judicial, UP PCS-J, and UPSC Law Optional',
      weightagePattern: '20 Marks • 450–500 Words (2.0 Pages)',
      targetTimeMinutes: 15,
      examinerTrapWarning:
        'Trap Alert: The Legislative Assembly CANNOT be dissolved immediately upon issuing an Article 356 proclamation! It can only be suspended until Parliament approves the proclamation under Article 356(3)!',
      recentTrendAlert: 'Applied in Uttarakhand (2016) and Arunachal Pradesh (2016) to restore dismissed governments.',
      coreArticles: ['Article 356', 'Article 355', 'Article 74(2)'],
      benchmarkCases: ['State of Rajasthan (1977)', 'S.R. Bommai (1994)', 'Rameshwar Prasad (2006)']
    },
    answerBlueprint: {
      step1Intro: 'Quote Dr. B.R. Ambedkar\'s hope that Article 356 would remain a "dead letter," contrasting it with its frequent political abuse over 100+ times.',
      step2DoctrinalCore: 'Analyze the 9-Judge Constitution Bench in S.R. Bommai (1994): Proclamation is justiciable; the subjective satisfaction of the President is based on objective material.',
      step3PrecedentEvolution: 'Detail the 5 landmark Bommai principles: (1) Floor test is mandatory, (2) Assembly suspended, not dissolved, until Parliamentary approval, (3) Secularism is Basic Structure, (4) Court can restore status quo ante, (5) Article 74(2) does not bar scrutiny of underlying material.',
      step4Conclusion: 'Highlight subsequent applications in Rameshwar Prasad (2006) and Nabam Rebia (2016) demonstrating that federalism is an untouchable basic structure.'
    },
    fullModelAnswer: `I. HISTORICAL ABUSE & THE DEATH OF THE "DEAD LETTER":
During the Constituent Assembly debates, Dr. B.R. Ambedkar expressed the hope that the drastic emergency powers under Article 356 would remain a "dead letter," invoked only as a last resort. Instead, post-independence history witnessed over 100 invocations, where ruling parties at the Centre dismissed political rivals in the States with impunity. In State of Rajasthan (1977), the Supreme Court conceded that the President's subjective satisfaction was largely non-justiciable.

II. THE 9-JUDGE BENCH WATERSHED: S.R. BOMMAI V. UNION OF INDIA (1994):
In S.R. Bommai v. Union of India (1994) 3 SCC 1, a 9-Judge Constitution Bench established revolutionary constitutional safeguards:

1. Judicial Review of Subjective Satisfaction:
The satisfaction of the President under Article 356 is not personal or unreviewable. While courts cannot examine the sufficiency of advice, they possess full jurisdiction to examine whether "objective material" existed to warrant the conclusion that the government of the State cannot be carried on in accordance with the Constitution.
Article 74(2) merely bars inquiry into the actual ministerial advice tendered, but does NOT shield the underlying factual material (e.g. Governor's report) from judicial scrutiny.

2. Floor Test is the Sole Constitutional Barometer:
The assessment of whether a Ministry enjoys majority confidence CANNOT be judged privately in the Governor's Raj Bhavan or by the Union Cabinet. The floor of the Legislative Assembly is the ONLY constitutional arena to determine majority.

3. Assembly Cannot be Dissolved Before Parliamentary Approval:
The President has no constitutional power to dissolve the State Legislative Assembly simultaneously with issuing the Proclamation under Article 356(1). The Assembly can only be kept in suspended animation until both Houses of Parliament approve the Proclamation under Article 356(3).

4. Power of Restoration (Status Quo Ante):
If the Court strikes down the Proclamation as unconstitutional and ultra vires, it possesses plenary constitutional power to restore the dismissed State Government and revive the dissolved Legislative Assembly to its status quo ante.

5. Secularism as a Basic Feature:
The Court held that Secularism is an immutable component of the Basic Structure. If a State Government pursues unsecular policies or instigates communal violence, it constitutes a subversion of constitutional machinery, justifying invocation of Article 356 (upholding dismissal of BJP governments in MP, Rajasthan, and HP post-Babri demolition).

III. MODERN CONSOLIDATION:
The Bommai principles were reaffirmed in Rameshwar Prasad (Bihar Assembly dissolution, 2006) and Nabam Rebia (Arunachal Pradesh, 2016), where dismissed governments were judicially restored.

CONCLUSION:
S.R. Bommai transformed Article 356 from an instrument of majoritarian federal aggression into a tightly bounded, judicially accountable constitutional exception.`,
    scoringRubric: [
      { criterion: 'Historical abuse & Ambedkar dead-letter intent', marks: 3 },
      { criterion: 'Justiciability of objective material & Art. 74(2) distinction', marks: 4.5 },
      { criterion: 'Mandatory floor test & assembly suspended animation rule', marks: 5 },
      { criterion: 'Status quo ante restoration power & secularism as Basic Structure', marks: 5 },
      { criterion: 'Rameshwar Prasad & Nabam Rebia consolidation', marks: 2.5 }
    ]
  },

  {
    id: 'mains-20m-fr-dpsp-harmonious',
    title: 'Harmonious Construction between Fundamental Rights and Directive Principles: Champakam to Minerva Mills',
    topicId: 'dpsp-fundamental-duties',
    marksCategory: 20,
    examCategory: 'UP_PCSJ',
    examsAppeared: ['UP PCS-J 2013, 2018, 2023', 'Bihar Judicial 2016, 2021', 'UPSC Law Optional 2015, 2020'],
    typicalMarks: 20,
    targetWordLimit: '450–500 Words | Time: ~15 Mins',
    targetWordMin: 420,
    targetWordMax: 520,
    estimatedPages: '2.0 Pages (~42 lines)',
    targetTimeMinutes: 15,
    questionText: `Critically trace the constitutional relationship between Fundamental Rights (Part III) and Directive Principles of State Policy (Part IV) from Champakam Dorairajan to Minerva Mills. "To give absolute primacy to one over the other is to tilt the constitutional balance." Elaborate.`,
    coreIssues: [
      'The initial strict subordination of DPSPs in State of Madras v. Champakam Dorairajan (1951).',
      'The progressive shift towards Harmonious Construction in In re Kerala Education Bill (1958).',
      'The 25th and 42nd Amendments seeking to subordinate Fundamental Rights to DPSPs (Article 31C).',
      'The definitive synthesis in Minerva Mills (1980): The balance between Part III and Part IV is a Basic Feature.'
    ],
    examinerExpectation:
      'Candidate must trace Champakam $\to$ Kerala Education Bill $\to$ Kesavananda $\to$ Minerva Mills (1980), quote Justice Chandrachud\'s famous metaphor of "two wheels of a chariot," and explain that Parts III and IV form an integrated social charter.',
    essentialCitations: [
      'State of Madras v. Champakam Dorairajan (1951 SCR 525)',
      'In re Kerala Education Bill (1959 SCR 995)',
      'Kesavananda Bharati v. State of Kerala ((1973) 4 SCC 225)',
      'Minerva Mills Ltd. v. Union of India ((1980) 3 SCC 625)',
      'Unni Krishnan, J.P. v. State of A.P. ((1993) 1 SCC 645)'
    ],
    hoverIntel: {
      topicName: 'Harmonious Construction: Part III vs Part IV',
      topicPillar: 'Part III & Part IV: The Constitutional Bedrock',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Jurisprudential Classic)',
      examFrequency: 'Core recurring essay across UP PCS-J, Bihar Judicial, and UPSC Law Optional',
      weightagePattern: '20 Marks • 450–500 Words (2.0 Pages)',
      targetTimeMinutes: 15,
      examinerTrapWarning:
        'Trap Alert: Quote the exact Minerva Mills metaphor by CJI Y.V. Chandrachud: Parts III and IV are like the "two wheels of a chariot". Giving absolute primacy to one over the other is to tilt the constitutional balance!',
      recentTrendAlert: 'Consistently applied in modern socio-economic rights (e.g. right to education, health, and clean environment).',
      coreArticles: ['Article 37', 'Article 13', 'Article 31C'],
      benchmarkCases: ['Champakam Dorairajan (1951)', 'Kesavananda (1973)', 'Minerva Mills (1980)']
    },
    answerBlueprint: {
      step1Intro: 'Quote Granville Austin: Fundamental Rights and Directive Principles are the "conscience of the Constitution," designed to foster social revolution.',
      step2DoctrinalCore: 'Stage 1: Strict Subordination in Champakam Dorairajan (1951): Article 37 declares DPSPs non-enforceable; hence, DPSPs must run as subservient to Part III.',
      step3PrecedentEvolution: 'Stage 2: Harmonious Construction in Kerala Education Bill (1958) and Kesavananda (1973): Courts must harmonize the two without destroying either.',
      step4Conclusion: 'Stage 3: The Minerva Mills (1980) Climax: 42nd Amendment subordinated all FRs to all DPSPs via Art 31C. Struck down because the delicate balance between Part III and Part IV is itself a Basic Structure feature.'
    },
    fullModelAnswer: `I. THE CONSTITUTIONAL DILEMMA & "CONSCIENCE OF THE CONSTITUTION":
Constitutional historian Granville Austin characterized Fundamental Rights (Part III) and Directive Principles of State Policy (Part IV) as the "conscience of the Constitution." While Part III secures civil and political negative liberties against State intrusion, Part IV commands the State to implement positive socio-economic welfare.
However, Article 37 expressly states that Directive Principles "shall not be enforceable by any court," yet declares them "fundamental in the governance of the country." This inherent tension triggered a four-decade judicial struggle over primacy.

II. THE FOUR HISTORICAL PHASES OF JURISPRUDENTIAL EVOLUTION:

1. Phase I: Formalistic Subordination (Champakam Dorairajan, 1951):
In State of Madras v. Champakam Dorairajan (1951), the Supreme Court adopted a strict textual positivism. Chief Justice Kania held that because DPSPs are expressly non-enforceable, they cannot override enforceable Fundamental Rights:
"The Directive Principles have to conform to and run as subsidiary to the Chapter on Fundamental Rights."

2. Phase II: The Doctrine of Harmonious Construction (Kerala Education Bill, 1958):
Recognizing the social paralysis caused by Champakam, Chief Justice S.R. Das in In re Kerala Education Bill (1958) formulated the Doctrine of Harmonious Construction:
The Court must not perceive an irreconcilable conflict between Part III and Part IV. Courts must harmonize the two, adopting that interpretation which gives maximum effect to both without rendering either redundant.

3. Phase III: The Legislative Aggression & Article 31C:
Parliament enacted the 25th Amendment (1971) inserting Article 31C to immunize laws implementing Article 39(b) and (c) from challenges under Articles 14, 19, and 31. In Kesavananda Bharati (1973), the Court upheld this limited immunity, affirming that Parts III and IV are complementary.
However, through the 42nd Amendment (1976), Parliament drastically expanded Article 31C to declare that ANY law implementing ANY Directive Principle could not be challenged for violating Articles 14 or 19, thereby asserting complete legislative supremacy over fundamental freedoms.

4. Phase IV: The Definitive Synthesis in Minerva Mills (1980):
In Minerva Mills Ltd. v. Union of India (1980) 3 SCC 625, a Constitution Bench struck down the expanded Article 31C as destructive of the Basic Structure.
Chief Justice Y.V. Chandrachud formulated the enduring constitutional metaphor:
"The Constitution is founded on the bedrock of the balance between Parts III and IV. To give absolute primacy to one over the other is to tilt the constitutional balance. They are like two wheels of a chariot, one no less important than the other. You cannot destroy the freedom of the individual to achieve the socio-economic welfare of the community."

III. MODERN EXPANSION:
In Unni Krishnan (1993) and Puttaswamy (2017), the Court demonstrated that Fundamental Rights must be interpreted in light of DPSPs, transforming non-enforceable directives (e.g. Art. 45 education, Art. 47 health, Art. 48A environment) into enforceable fundamental rights under Article 21.

CONCLUSION:
Parts III and IV are organic twins. Harmony between individual liberty and social justice is the bedrock of Indian constitutionalism.`,
    scoringRubric: [
      { criterion: 'Granville Austin conscience of constitution & Art 37 tension', marks: 3 },
      { criterion: 'Champakam Dorairajan subsidiary status doctrine', marks: 3.5 },
      { criterion: 'Kerala Education Bill harmonious construction & Art 31C history', marks: 4.5 },
      { criterion: 'Minerva Mills 1980 chariot metaphor & Basic Structure balance', marks: 6 },
      { criterion: 'Modern integration into Article 21 & conclusion', marks: 3 }
    ]
  },

  {
    id: 'mains-20m-civil-servants-art311',
    title: 'Civil Servants\' Safeguards under Article 311 & The Second Proviso Exceptions (Tulsiram Patel)',
    topicId: 'services-art-311-doctrine-pleasure',
    marksCategory: 20,
    examCategory: 'UP_PCSJ',
    examsAppeared: ['UP PCS-J 2015, 2018, 2023', 'Bihar Judicial 2016, 2021', 'UPSC Law Optional 2016, 2022'],
    typicalMarks: 20,
    targetWordLimit: '450–500 Words | Time: ~15 Mins',
    targetWordMin: 420,
    targetWordMax: 520,
    estimatedPages: '2.0 Pages (~42 lines)',
    targetTimeMinutes: 15,
    questionText: `Discuss the constitutional safeguards available to civil servants under Article 311 of the Constitution against arbitrary dismissal, removal, or reduction in rank. Examine the exceptional circumstances under the Second Proviso where an inquiry can be dispensed with, in light of Union of India v. Tulsiram Patel.`,
    coreIssues: [
      'The Doctrine of Pleasure under Article 310 derived from English common law (durante bene placito).',
      'Constitutional limitations on the Doctrine of Pleasure under Article 311(1) and 311(2).',
      'The 3 exceptions under the Second Proviso: (a) Criminal conviction, (b) Practicability of inquiry, (c) Security of the State.',
      'The 5-Judge Constitution Bench ruling in Union of India v. Tulsiram Patel (1985).'
    ],
    examinerExpectation:
      'Candidate must explain Article 310 vs 311, detail the procedural safeguards in 311(2) (inquiry and reasonable opportunity), analyze the 3 clauses of the Second Proviso, cite Tulsiram Patel (1985), and explain the scope of judicial review over dispensing with inquiries.',
    essentialCitations: [
      'Parshotam Lal Dhingra v. Union of India (1958 SCR 828)',
      'Union of India v. Tulsiram Patel ((1985) 3 SCC 398; 5-Judge Bench)',
      'Satyavir Singh v. Union of India ((1985) 4 SCC 252)',
      'Jaswant Singh v. State of Punjab ((1991) 1 SCC 362)'
    ],
    hoverIntel: {
      topicName: 'Article 311: Civil Servants & The Second Proviso',
      topicPillar: 'Part XIV: Services under Union & States (Articles 310 & 311)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Services Core)',
      examFrequency: 'Tested in UP PCS-J, Bihar Judicial, and UPSC Law Optional',
      weightagePattern: '20 Marks • 450–500 Words (2.0 Pages)',
      targetTimeMinutes: 15,
      examinerTrapWarning:
        'Trap Alert: Dispensing with an inquiry under Second Proviso Clause (b) requires RECORDING REASONS in writing! A mere subjective ipse dixit that inquiry is not practical will be struck down by the Court (Jaswant Singh)!',
      recentTrendAlert: 'Strict judicial scrutiny over dismissal of government servants in security-sensitive zones without inquiry.',
      coreArticles: ['Article 310', 'Article 311(1)', 'Article 311(2)'],
      benchmarkCases: ['Dhingra (1958)', 'Tulsiram Patel (1985)', 'Jaswant Singh (1991)']
    },
    answerBlueprint: {
      step1Intro: 'Introduce Article 310: The Doctrine of Pleasure (civil servants hold office during the pleasure of the President or Governor).',
      step2DoctrinalCore: 'Detail Article 311 safeguards: (1) Clause (1): No dismissal by an authority subordinate to appointing authority, (2) Clause (2): Mandatory departmental inquiry and reasonable opportunity of being heard.',
      step3PrecedentEvolution: 'Analyze the Second Proviso to Article 311(2) (Tulsiram Patel, 1985): Three exceptional situations where inquiry is totally dispensed with: Clause (a) Criminal conviction, Clause (b) Impracticability of holding inquiry, Clause (c) Expediency in the interests of State security.',
      step4Conclusion: 'Explain Judicial Review limits: Courts cannot question the policy, but will quash dispensations based on no material, mala fides, or arbitrary whims (Jaswant Singh).'
    },
    fullModelAnswer: `I. DOCTRINE OF PLEASURE & CONSTITUTIONAL LIMITATIONS:
Under Article 310, India adopts the English common law Doctrine of Pleasure (*durante bene placito*): civil servants hold office during the pleasure of the President or the Governor.
However, to insulate public administration from the spoils system and executive caprice, the Constitution creates substantive restrictions under Article 311:

1. Substantive Safeguards under Article 311:
- Article 311(1) (Appointing Authority Rule): No civil servant can be dismissed or removed by an authority subordinate to that by which they were appointed.
- Article 311(2) (Audi Alteram Partem): No civil servant can be dismissed, removed, or reduced in rank except after an inquiry in which they are informed of the charges and given a reasonable opportunity of being heard.

II. THE SECOND PROVISO EXCEPTIONS & DISPENSING WITH INQUIRY:
The Second Proviso to Article 311(2) carves out three exceptional circumstances where the constitutional requirement of an inquiry is entirely dispensed with:

1. Clause (a) — Conviction on a Criminal Charge:
Where a civil servant is dismissed or removed on the ground of conduct which has led to their conviction on a criminal charge by a competent court. (The departmental punishment must relate to the criminal conduct, not mere mechanical removal).

2. Clause (b) — Impracticability of Holding an Inquiry:
Where the disciplinary authority is satisfied, for reasons to be recorded in writing, that it is not reasonably practicable to hold an inquiry (e.g. witnesses or inquiry officers are terrorized, intimidated, or physically threatened by the delinquent servant).

3. Clause (c) — Interests of the Security of the State:
Where the President or Governor is satisfied that in the interest of the security of the State, it is not expedient to hold an inquiry.

III. THE 5-JUDGE BENCH LANDMARK: TULSIRAM PATEL (1985):
In Union of India v. Tulsiram Patel (1985) 3 SCC 398, a 5-Judge Constitution Bench settled the constitutional scope:
1. Natural Justice Excluded: The principles of natural justice are excluded by express constitutional mandate under the Second Proviso. Public interest and administrative necessity override the individual servant's right to an inquiry.
2. Judicial Review of Clause (b) & (c):
   - Under Clause (b), recording reasons in writing is a mandatory condition precedent. If reasons are illusory, non-existent, or extraneous, the order will be struck down (Jaswant Singh v. State of Punjab, 1991).
   - Under Clause (c), the satisfaction of the President/Governor is subjective, but if challenged, the Union must prove that objective material existed concerning state security.

CONCLUSION:
Article 311 balances the tenure security of civil servants with the sovereign imperative of efficient, uncompromised public governance.`,
    scoringRubric: [
      { criterion: 'Article 310 Doctrine of Pleasure vs Art. 311 limitations', marks: 3 },
      { criterion: 'Article 311(1) appointing authority & 311(2) inquiry safeguards', marks: 4 },
      { criterion: 'Detailed breakdown of Second Proviso Clauses (a), (b), and (c)', marks: 5 },
      { criterion: 'Tulsiram Patel (1985) 5-Judge Bench ratio on natural justice exclusion', marks: 5 },
      { criterion: 'Judicial review standards & Jaswant Singh exception', marks: 3 }
    ]
  },

  {
    id: 'mains-20m-abrogation-art-370',
    title: 'Abrogation of Article 370 & Asymmetric Federalism: The 2023 Constitution Bench Judgment',
    topicId: 'federalism-special-provisions-art370',
    marksCategory: 20,
    examCategory: 'UPSC_LAW',
    examsAppeared: ['UPSC Law Optional 2024', 'DJS 2024 Benchmark', 'All-India Judicial 2024'],
    typicalMarks: 20,
    targetWordLimit: '450–500 Words | Time: ~15 Mins',
    targetWordMin: 420,
    targetWordMax: 520,
    estimatedPages: '2.0 Pages (~42 lines)',
    targetTimeMinutes: 15,
    questionText: `Critically evaluate the 5-Judge Constitution Bench ruling in In re Article 370 of the Constitution (2023). Did Jammu & Kashmir retain any internal sovereignty after accession, and was the conversion of the State into Union Territories under Article 3 constitutionally valid?`,
    coreIssues: [
      'The temporary vs permanent status of Article 370 in the constitutional scheme.',
      'The sovereignty question: Did the Instrument of Accession preserve internal sovereignty?',
      'The interpretation of Article 370(3) recommendation of "Constituent Assembly of the State".',
      'The exercise of state constituent power by Parliament during President\'s Rule under Article 356.',
      'Reorganization under Article 3: Converting a State into Union Territories without the views of the State Legislature.'
    ],
    examinerExpectation:
      'Candidate must analyze the unanimous 5-Judge Bench judgment delivered on 11 December 2023 by CJI D.Y. Chandrachud. Detail the findings on sovereignty, the temporary nature of Article 370, the invalidation of the indirect amendment via Article 367, but the upholding of abrogation under Article 370(3), and the direction to restore statehood.',
    essentialCitations: [
      'Prem Nath Kaul v. State of J&K (1959 Supp (2) SCR 270)',
      'Sampat Prakash v. State of J&K (1969 2 SCR 365)',
      'Mohd. Maqbool Damnoo v. State of J&K ((1972) 1 SCC 536)',
      'In re Article 370 of the Constitution (2023 INSC 1058; 5-Judge Bench)'
    ],
    hoverIntel: {
      topicName: 'Article 370 Abrogation & Constitutional Verdict',
      topicPillar: 'Part XXI: Temporary & Special Provisions (Article 370 & Federalism)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Historic 2023 Constitution Bench)',
      examFrequency: 'Guaranteed benchmark question for all upcoming judicial and civil services papers',
      weightagePattern: '20 Marks • 450–500 Words (2.0 Pages)',
      targetTimeMinutes: 15,
      examinerTrapWarning:
        'Trap Alert: Be technically accurate! The Court struck down C.O. 272 amending Article 367 (holding that "Constituent Assembly" could not be amended to mean "Legislative Assembly"), BUT nonetheless upheld the abrogation because the President had independent power under Article 370(3)!',
      recentTrendAlert: 'Decided on 11 December 2023; ordered elections by September 2024 and restoration of statehood.',
      coreArticles: ['Article 370', 'Article 356', 'Article 3', 'Article 1'],
      benchmarkCases: ['Prem Nath Kaul (1959)', 'Sampat Prakash (1969)', 'In re Article 370 (2023)']
    },
    answerBlueprint: {
      step1Intro: 'State the premise of Article 370: Placed in Part XXI under "Temporary, Transitional and Special Provisions," governing J&K\'s asymmetric constitutional integration.',
      step2DoctrinalCore: 'Address the Sovereignty Question: The 5-Judge Bench held J&K surrendered all sovereignty upon signing the Instrument of Accession and accepting Article 1.',
      step3PrecedentEvolution: 'Analyze the Constitution Bench Findings (Dec 11, 2023): (a) Article 370 was always temporary, (b) C.O. 272 altering Art 367 was ultra vires, (c) President could exercise Art 370(3) unilaterally after dissolution of J&K Constituent Assembly, (d) Exercise of power under Article 356 was valid.',
      step4Conclusion: 'Analyze Reorganization under Article 3: Left the question of converting State to UT open due to Solicitor General\'s undertaking to restore statehood, but directed elections by Sept 30, 2024.'
    },
    fullModelAnswer: `I. THE CONSTITUTIONAL CHALLENGE:
On 5th August 2019, the President issued Constitution Orders (C.O. 272 and C.O. 273), effectively abrogating the special status of Jammu and Kashmir under Article 370, followed by the J&K Reorganisation Act, 2019 bifurcating the State into two Union Territories. In In re Article 370 of the Constitution (2023 INSC 1058), a unanimous 5-Judge Constitution Bench led by CJI D.Y. Chandrachud upheld the constitutional validity of the abrogation.

II. THE CORE CONSTITUTIONAL HOLDINGS:

1. No Internal Sovereignty Retained:
The Court held that the State of Jammu and Kashmir surrendered complete sovereignty upon executing the Instrument of Accession in October 1947 and accepting the proclamation of Yuvraj Karan Singh declaring that the Constitution of India would govern the relationship.
Article 1 declared J&K an integral part of India. Unlike classical federalism, Article 370 was an instance of "asymmetric federalism," not a recognition of dual sovereignty.

2. Article 370 was Inherently Temporary:
The Court held that Article 370 was temporary on two grounds:
- Historical Context: Promulgated due to wartime conditions in the State.
- Textual Placement: Placed explicitly in Part XXI titled "Temporary, Transitional and Special Provisions."
The dissolution of the J&K Constituent Assembly in 1957 did not freeze Article 370 into permanence.

3. The C.O. 272 / Article 367 Invalidation vs C.O. 273 Validity:
- C.O. 272 Held Ultra Vires: The Court struck down the use of Article 367 to amend the phrase "Constituent Assembly of the State" in Article 370(3) to mean "Legislative Assembly." The Executive cannot achieve by indirect interpretive amendment what it cannot do directly under Article 370.
- C.O. 273 Upheld: However, the Court upheld the ultimate abrogation under C.O. 273, holding that the President possessed unilateral constituent power under Article 370(3) to declare Article 370 inoperative once the Constituent Assembly ceased to exist.

4. Actions under President's Rule (Article 356):
The Court rejected the argument that the Union cannot take irreversible decisions during President's Rule. Following Bommai, the exercise of state constituent power by Parliament on behalf of the State Legislature is valid unless actuated by mala fides.

5. State Reorganization under Article 3 & Direction:
Accepting the Solicitor General's solemn undertaking that statehood would be restored to J&K at the earliest, the Court did not adjudicate the constitutionality of converting a State into a Union Territory. However, it directed the Election Commission of India to conduct elections by September 30, 2024.

CONCLUSION:
The 2023 judgment firmly completes the legal and constitutional integration of J&K into the Indian Union, affirming the indivisible sovereignty of the Republic.`,
    scoringRubric: [
      { criterion: 'Instrument of Accession & surrender of internal sovereignty', marks: 4 },
      { criterion: 'Temporary nature of Article 370 & Part XXI placement', marks: 3.5 },
      { criterion: 'C.O. 272 Article 367 invalidation vs Article 370(3) abrogation validity', marks: 5 },
      { criterion: 'Article 356 powers during President\'s Rule & Bommai compliance', marks: 4 },
      { criterion: 'Article 3 Reorganization holding & election direction', marks: 3.5 }
    ]
  }
];
