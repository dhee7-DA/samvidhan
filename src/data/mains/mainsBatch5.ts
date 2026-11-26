import type { MainsMasterQuestion } from '../../types/mainsQuestionTypes';

export const MAINS_BATCH_5: MainsMasterQuestion[] = [
  // =========================================================================
  // 1. GOVERNOR'S ASSENT TO BILLS UNDER ARTICLE 200 (2023-2024 JURISPRUDENCE)
  // =========================================================================
  {
    id: 'mains-15m-governor-assent-art200',
    title: "Governor's Assent to Bills under Article 200 & Constitutional Deadlocks",
    topicId: 'art-200-governor-veto-assent',
    marksCategory: 15,
    examCategory: 'UPSC_GS2',
    examsAppeared: ['UPSC CSE Mains GS-2 2023, 2024', 'Punjab Judicial Service 2024', 'Tamil Nadu Judicial 2024'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~11 Mins',
    targetWordMin: 240,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~35 lines)',
    targetTimeMinutes: 11,
    questionText: 'Critically analyze the constitutional options available to the Governor under Article 200 when a bill passed by the State Legislature is presented for assent. Does the phrase "as soon as possible" permit indefinite pocket veto? Discuss in light of State of Punjab v. Principal Secretary to Governor (2023) and State of Tamil Nadu v. Governor (2024).',
    coreIssues: [
      'Four constitutional pathways under Article 200: Assent, Withhold assent, Return bill with message, or Reserve for President.',
      'First Proviso to Article 200: Meaning of "as soon as possible" and the binding nature of repassed bills.',
      'Whether the Governor can withhold assent without returning the bill (State of Punjab 2023).',
      'Federal friction: Constitutional morality, Sarkaria & Punchhi recommendations, and Article 163 discretion limits.'
    ],
    examinerExpectation:
      'Candidate must explain the four textual choices in Article 200. Cite the 3-Judge Bench ruling in State of Punjab (2023) per Chandrachud CJI: Governor cannot sit indefinitely on bills; withholding assent obligates returning the bill to legislature under the First Proviso. Mention the Tamil Nadu (2024) timeline directions and Sarkaria/Punchhi recommendations.',
    essentialCitations: [
      'State of Punjab v. Principal Secretary to Governor ((2023) INSC 1008)',
      'State of Tamil Nadu v. Governor of Tamil Nadu (2024 SCC OnLine SC 450)',
      'Shamsher Singh v. State of Punjab ((1974) 2 SCC 831)',
      'Sarkaria Commission Report (1988, Ch. V)',
      'Punchhi Commission on Centre-State Relations (2010)'
    ],
    hoverIntel: {
      topicName: "Governor's Assent to Bills (Article 200)",
      topicPillar: 'Part VI: State Executive & Federal Friction (Articles 163 & 200)',
      examImportance: '⭐⭐⭐⭐⭐ Guaranteed Core (UPSC GS-2 & Judiciary)',
      examFrequency: 'Direct question in UPSC 2023 GS-2 and multiple State Judicial papers',
      weightagePattern: '15 Marks • 250 Words (1.5 Pages)',
      targetTimeMinutes: 11,
      examinerTrapWarning:
        'Trap Alert: Candidates often mistakenly argue that the Governor has an absolute "pocket veto". Clarify that the Supreme Court in State of Punjab (2023) ruled that if the Governor withholds assent, he MUST follow the proviso and return the bill for reconsideration!',
      recentTrendAlert: 'Supreme Court 2023–2024 warnings against Governors paralyzing state legislative processes.',
      coreArticles: ['Article 200', 'Article 163', 'Article 174', 'Article 361'],
      benchmarkCases: ['State of Punjab (2023)', 'State of Tamil Nadu (2024)', 'Shamsher Singh (1974)']
    },
    answerBlueprint: {
      step1Intro: 'Textual Framework of Article 200: When a bill passed by the state legislature is presented to the Governor, four distinct courses are open: (1) declare assent; (2) withhold assent; (3) return the bill (if not a Money Bill) with a message; or (4) reserve it for the President under the Second Proviso.',
      step2DoctrinalCore: 'Substantive Mandate of the First Proviso: The phrase "as soon as possible" imposes a constitutional duty of promptitude. The Governor cannot act as an elected legislature\'s rival. If the Assembly repasses the bill with or without amendment, the Governor "shall not withhold assent therefrom".',
      step3PrecedentEvolution: 'Judicial Clarification in State of Punjab (2023) & Tamil Nadu (2024): D.Y. Chandrachud CJI held that withholding assent under Art. 200 is intrinsically coupled with the duty to return the bill to the House under the first proviso. The Governor cannot exercise an indefinite pocket veto or stall parliamentary democracy.',
      step4Conclusion: 'Way Forward & Institutional Reform: Constitutional conventions require the Governor to function as a constitutional figurehead (Shamsher Singh). Sarkaria Commission (6 months limit) and Punchhi Commission recommendations should be codified into a binding timeline.'
    },
    fullModelAnswer: `I. TEXTUAL PATHWAYS UNDER ARTICLE 200:
When a bill passed by the State Legislative Assembly (or both Houses) is presented to the Governor, Article 200 prescribes four exclusive constitutional options:
1. Grant Assent: The bill becomes an Act.
2. Withhold Assent: The bill fails to become law.
3. Return the Bill (First Proviso): If not a Money Bill, return it "as soon as possible" with a message requesting reconsideration. If repassed by the House (with or without amendment), the Governor "shall not withhold assent therefrom."
4. Reserve for President (Second Proviso): Mandatory if the bill derogates from High Court powers, or discretionary on federal conflict questions.

II. THE "POCKET VETO" CONTROVERSY & RATIO IN STATE OF PUNJAB (2023):
In State of Punjab v. Principal Secretary to Governor (2023), the Governor sat on four crucial bills passed in a reconvened session, questioning the Speaker's adjournment. A 3-Judge Bench headed by CJI D.Y. Chandrachud established:
1. No Indefinite Inaction: The expression "as soon as possible" conveys constitutional urgency. The Governor cannot hold an indefinite pocket veto over bills enacted by elected representatives.
2. Interconnection of Withholding and Returning: The Court held that withholding assent is not an end in itself; it triggers the obligation under the First Proviso to return the bill to the Legislature for reconsideration.
3. Parliamentary Sovereignty: Once the Legislature repasses the returned bill, assent is mandatory. The Governor cannot nullify legislative will through indefinite sitting.

III. INSTITUTIONAL REPERCUSSIONS & STATE OF TAMIL NADU (2024):
In State of Tamil Nadu v. Governor (2024), the Supreme Court deprecated the practice of Governors reserving bills for the President *after* they were repassed by the Assembly, calling it contrary to constitutional morality.
- Commissions' Consensus: The Sarkaria Commission (1988) recommended a maximum time limit of six months for Governor's assent, while the Punchhi Commission (2010) urged that Governors be held to fixed operational timelines.

CONCLUSION:
In a parliamentary democracy governed by cabinet responsibility (Shamsher Singh v. State of Punjab, 1974), the Governor is a titular head. Article 200 cannot be weaponized as an executive veto to paralyze the democratic legislative mandate of a State.`,
    scoringRubric: [
      { criterion: 'Four constitutional options under Article 200 & First Proviso mandate', marks: 3.5 },
      { criterion: 'State of Punjab (2023) ratio on pocket veto & mandatory return', marks: 4 },
      { criterion: 'State of Tamil Nadu (2024) repassing dynamics & constitutional morality', marks: 3.5 },
      { criterion: 'Sarkaria/Punchhi commission reforms and Shamsher Singh constitutional balance', marks: 4 }
    ]
  },

  // =========================================================================
  // 2. TENTH SCHEDULE & SUBHASH DESAI (MAHARASHTRA POLITICAL CRISIS 2023)
  // =========================================================================
  {
    id: 'mains-15m-subhash-desai-tenth-schedule',
    title: "Tenth Schedule, Political Party vs Legislature Party & Speaker's Impartiality",
    topicId: 'tenth-schedule-anti-defection',
    marksCategory: 15,
    examCategory: 'UPSC_GS2',
    examsAppeared: ['UPSC CSE Mains GS-2 2023', 'DJS 2024', 'UP PCS-J 2023', 'Maharashtra Judicial 2024'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~11 Mins',
    targetWordMin: 240,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~35 lines)',
    targetTimeMinutes: 11,
    questionText: 'Distinguish between the "Political Party" and the "Legislature Party" under the Tenth Schedule. How did the Constitution Bench in Subhash Desai v. Principal Secretary (2023) resolve the conflict between Nabam Rebia and the Speaker\'s disqualification jurisdiction?',
    coreIssues: [
      'Difference between Political Party (original party) and Legislature Party (elected MLAs/MPs) under Paragraph 1(b) & 1(c) of Tenth Schedule.',
      'Who appoints the Whip and the Leader of the House under Paragraph 2(1)(b).',
      'The dilemma of Nabam Rebia (2016): Speaker disabled from deciding disqualifications when facing a removal notice.',
      'Subhash Desai (2023) reference to a 7-Judge Bench and interim safeguards against frivolous removal notices.'
    ],
    examinerExpectation:
      'Candidate must clearly elucidate that the Tenth Schedule links defection to the original "Political Party", not the breakaway "Legislature Party". Cite Subhash Desai (2023, 5-Judge Bench per Chandrachud CJI) holding that the Whip is appointed by the Political Party. Detail why Nabam Rebia was referred to 7 judges to prevent MLAs from disabling the Speaker by issuing frivolous notices under Art. 179(c).',
    essentialCitations: [
      'Subhash Desai v. Principal Secretary, Governor of Maharashtra ((2023) 7 SCC 1)',
      'Kihoto Hollohan v. Zachillhu (1992 Supp (2) SCC 651)',
      'Nabam Rebia v. Deputy Speaker ((2016) 8 SCC 1)',
      'Keisham Meghachandra Singh v. Hon\'ble Speaker, Manipur ((2020) SCC OnLine SC 55)'
    ],
    hoverIntel: {
      topicName: 'Tenth Schedule & Subhash Desai Ruling (2023)',
      topicPillar: 'Parliamentary Form of Government & Anti-Defection (Tenth Schedule)',
      examImportance: '⭐⭐⭐⭐⭐ High Yield Constitution Bench Ruling',
      examFrequency: 'Direct problem in UPSC 2023 GS-2 and 2024 Judicial exams',
      weightagePattern: '15 Marks • 250 Words (1.5 Pages)',
      targetTimeMinutes: 11,
      examinerTrapWarning:
        'Trap Alert: Do not state that the Legislature Party can appoint its own whip independently! Subhash Desai firmly held that the Whip and Party Leader MUST be appointed by the Political Party, not an insulated splinter faction of MLAs!',
      recentTrendAlert: 'Referred Nabam Rebia to a 7-Judge Bench to prevent the misuse of Article 179(c) notices.',
      coreArticles: ['Tenth Schedule (Paragraphs 1, 2, 4, 6)', 'Article 179(c)', 'Article 212'],
      benchmarkCases: ['Subhash Desai (2023)', 'Nabam Rebia (2016)', 'Kihoto Hollohan (1992)']
    },
    answerBlueprint: {
      step1Intro: 'The Tenth Schedule Architecture: Inserted by the 52nd CAA (1985) to combat the evil of political defection. Paragraph 1 defines "Political Party" (the registered political party) and "Legislature Party" (the group consisting of all elected members of that House).',
      step2DoctrinalCore: 'Primacy of the Political Party over Legislature Party: Under Paragraph 2(1)(b), a member is disqualified if they vote contrary to the direction of the "Political Party". In Subhash Desai (2023), the 5-Judge Bench ruled that the whip and legislative leader are authorized by the political party, not the legislative party, preventing hostile takeover by an elected cabal.',
      step3PrecedentEvolution: 'Revisiting Nabam Rebia (2016): Nabam Rebia held that a Speaker cannot adjudicate disqualification petitions if a notice for his own removal under Article 179(c) is pending. Subhash Desai recognized that this creates a moral hazard—defectors issue notices to freeze the Speaker. The Bench referred Nabam Rebia to a 7-Judge Bench.',
      step4Conclusion: 'Call for Independent Tribunal: Keisham Meghachandra (2020) and 2nd ARC recommended taking disqualification petitions away from the partisan Speaker and transferring them to an independent quasi-judicial tribunal or Election Commission.'
    },
    fullModelAnswer: `I. POLITICAL PARTY VS. LEGISLATURE PARTY:
Paragraph 1 of the Tenth Schedule creates a critical dichotomy:
- "Political Party" [Para 1(b)]: The original registered organization whose ticket the candidate contested upon and made commitments to the electorate.
- "Legislature Party" [Para 1(c)]: The parliamentary cohort composed of members elected to that specific House.

In Subhash Desai v. Principal Secretary (2023), the Constitution Bench held:
1. Primacy of the Political Party: To sever the link between the political party and legislative members violates democratic accountability. A legislature party cannot claim to be independent of the parent party that fielded it.
2. Appointment of Whip & Leader: The authorization to issue binding whips [Para 2(1)(b)] emanates from the Political Party. The Speaker erred in recognizing a whip chosen solely by the breakaway legislative faction.

II. THE NABAM REBIA DILEMMA & RESOLUTION:
In Nabam Rebia (2016), the Supreme Court ruled that a Speaker cannot proceed with disqualification proceedings against members under the Tenth Schedule if a notice of intention to move a resolution for the Speaker's removal under Article 179(c) is pending.
- The Strategic Loophole: Subhash Desai noted that MLAs facing imminent disqualification issue an Article 179(c) notice against the Speaker to freeze disciplinary action, toppling governments with impunity.
- Reference to 7-Judge Bench: While holding that the Governor's floor test in Maharashtra was illegal because there were no objective materials indicating the Ministry lost majority, the Bench could not restore status quo ante because Uddhav Thackeray resigned without facing the floor. It formally referred Nabam Rebia to a 7-Judge Bench to resolve the constitutional impasse.

III. INSTITUTIONAL REFORM:
In Keisham Meghachandra (2020), the Court noted that partisan Speakers often sit on disqualification petitions indefinitely. A constitutional amendment creating an independent permanent tribunal (headed by a retired Supreme Court judge) is essential to preserve the spirit of Kihoto Hollohan (1992).`,
    scoringRubric: [
      { criterion: 'Distinction between Political Party and Legislature Party & Whip authority', marks: 4 },
      { criterion: 'Subhash Desai (2023) ratio on floor test illegality & parent party primacy', marks: 4 },
      { criterion: 'Nabam Rebia (2016) dilemma and reference to 7-Judge Bench', marks: 4 },
      { criterion: 'Evaluation of Speaker\'s role & Keisham Meghachandra reform roadmap', marks: 3 }
    ]
  },

  // =========================================================================
  // 3. ELECTORAL BONDS UNCONSTITUTIONALITY (ADR V. UOI 2024)
  // =========================================================================
  {
    id: 'mains-15m-electoral-bonds-adr-2024',
    title: "Unconstitutionality of Electoral Bonds Scheme: Article 19(1)(a) vs Corporate Anonymity",
    topicId: 'art-19-fundamental-freedoms',
    marksCategory: 15,
    examCategory: 'UPSC_GS2',
    examsAppeared: ['UPSC CSE Mains GS-2 2024', 'DJS Mains 2024', 'CLAT PG 2024', 'UPSC Law Optional 2024'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~11 Mins',
    targetWordMin: 240,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~35 lines)',
    targetTimeMinutes: 11,
    questionText: 'Test the Electoral Bonds Scheme on the anvil of the Right to Information under Article 19(1)(a) and the Doctrine of Proportionality. How did the 5-Judge Constitution Bench in Association for Democratic Reforms (ADR) v. Union of India (2024) balance voter transparency against donor privacy?',
    coreIssues: [
      'Article 19(1)(a): Right to Information as a facet of freedom of speech and expression (PUCL and ADR 2002).',
      'Doctrine of Proportionality: Legitimacy of aim, rational connection, least restrictive measure, and balancing of rights.',
      'Quid pro quo corruption risk: Removal of corporate profit caps under Section 182 Companies Act.',
      'Information asymmetry: Ruling party having de facto access to SBI donor logs while the public remains blinded.'
    ],
    examinerExpectation:
      'Candidate must explain the voter\'s right to know under Art. 19(1)(a). Apply the 4-prong proportionality test (Modern Dental College / Puttaswamy). Detail why curbing black money failed the least-intrusive-means prong (e.g. Electoral Trusts already existed). Address the striking down of amendments to Section 29C RPA, Section 182 Companies Act, and Section 31(3) RBI Act.',
    essentialCitations: [
      'Association for Democratic Reforms v. Union of India ((2024) 5 SCC 1)',
      'Union of India v. Association for Democratic Reforms ((2002) 5 SCC 294)',
      'PUCL v. Union of India ((2003) 4 SCC 399)',
      'K.S. Puttaswamy v. Union of India ((2017) 10 SCC 1, Proportionality Standard)'
    ],
    hoverIntel: {
      topicName: 'Electoral Bonds & Voter Right to Know (ADR 2024)',
      topicPillar: 'Part III: Freedom of Speech & Electoral Democracy (Article 19(1)(a))',
      examImportance: '⭐⭐⭐⭐⭐ Historic 5-Judge Constitution Bench Ruling',
      examFrequency: 'Top anticipated question across all UPSC & Judiciary Mains',
      weightagePattern: '15 Marks • 250 Words (1.5 Pages)',
      targetTimeMinutes: 11,
      examinerTrapWarning:
        'Trap Alert: Do not merely criticize political funding! You must frame the answer around the 4 prongs of the Proportionality Standard and explain why donor privacy under Article 21 cannot trump voter transparency under Article 19(1)(a) for corporate political donations!',
      recentTrendAlert: 'All amendments to RPA, Companies Act, and IT Act via Finance Act 2017 declared unconstitutional.',
      coreArticles: ['Article 19(1)(a)', 'Article 14', 'Article 21', 'Article 324'],
      benchmarkCases: ['ADR (2024)', 'ADR (2002)', 'Puttaswamy (2017)']
    },
    answerBlueprint: {
      step1Intro: 'Constitutional Genesis of Voter\'s Right to Know: In ADR (2002) and PUCL (2003), the Supreme Court declared that voter information regarding candidates is a fundamental right under Article 19(1)(a). Freedom of expression encompasses the right to receive information to cast an informed ballot.',
      step2DoctrinalCore: 'The Proportionality Test: The 5-Judge Constitution Bench in ADR v. Union of India (2024) tested the Electoral Bonds Scheme against the 4-prong proportionality standard: (1) Legitimate State Goal (Curbing black money); (2) Rational Connection; (3) Necessity / Least Restrictive Measure; (4) Balancing.',
      step3PrecedentEvolution: 'Failure on the Touchstone of Proportionality: The Scheme failed the third prong because less restrictive alternatives existed (e.g. Electoral Trusts and direct digital donations with transparency). Striking down Section 182(1) Companies Act amendment, Court held that removing the 7.5% profit cap allowed loss-making shell companies to funnel unlimited dark money.',
      step4Conclusion: 'Democratic Imperative: Asymmetrical information where the incumbent government can trace SBI issuance while the voter is kept blind destroys the level playing field under Article 14 and free and fair elections (Basic Structure).'
    },
    fullModelAnswer: `I. RIGHT TO INFORMATION AS A PARTICIPATORY RIGHT:
In Association for Democratic Reforms (2002) and PUCL (2003), the Supreme Court cemented that the right to know about candidates and political parties is intrinsic to Article 19(1)(a). The voter's informed franchise is the cornerstone of democratic governance.

II. APPLICATION OF THE PROPORTIONALITY STANDARD (ADR V. UOI 2024):
A unanimous 5-Judge Constitution Bench headed by CJI D.Y. Chandrachud invalidated the Electoral Bonds Scheme applying the 4-prong proportionality test:
1. Legitimate Goal: The Union argued the scheme curbed unaccounted cash in politics. The Court accepted this as a legitimate goal.
2. Rational Connection: Anonymity had a rational nexus to encouraging banking transactions over cash.
3. Necessity (Least Intrusive Means): The Scheme collapsed on this test. Less restrictive mechanisms already existed—such as the Electoral Trust scheme and digital disclosure thresholds—which curb black money without completely extinguishing transparency.
4. Balancing of Rights: The State pitted donor privacy under Article 21 against the voter's right to know under Article 19(1)(a). The Court held that corporate donations are inherently transactional (quid pro quo); corporate donors cannot assert privacy rights to conceal political contributions that shape legislative policies.

III. STRIKING DOWN OF STATUTORY AMENDMENTS:
1. Section 29C Representation of the People Act: Exemption of bonds from ECI reporting was declared arbitrary and unconstitutional.
2. Section 182 Companies Act, 2013: Removal of the 7.5% net profit cap and disclosure requirements allowed shell companies to serve as conduits for unbounded political funding.
3. Section 31(3) RBI Act: Authorized issuance of bearer bonds was struck down.

CONCLUSION:
The ADR (2024) judgment reaffirms that transparency is not an impediment to democracy but its lifeblood. Denying voters knowledge of political financiers while the state apparatus possesses audit trails destroys the level playing field mandated by Article 14 and the Basic Structure.`,
    scoringRubric: [
      { criterion: 'Article 19(1)(a) voter\'s right to know genesis (ADR 2002 & PUCL)', marks: 3.5 },
      { criterion: 'Systematic application of 4-prong proportionality test', marks: 4.5 },
      { criterion: 'Analysis of Section 182 Companies Act & corporate quid pro quo', marks: 3.5 },
      { criterion: 'Information asymmetry, Article 14 level playing field & conclusion', marks: 3.5 }
    ]
  },

  // =========================================================================
  // 4. RIGHT AGAINST CLIMATE CHANGE (M.K. RANJITSINH 2024)
  // =========================================================================
  {
    id: 'mains-15m-climate-change-ranjitsinh-2024',
    title: "Fundamental Right to be Free from Adverse Effects of Climate Change",
    topicId: 'art-21-right-to-life-liberty',
    marksCategory: 15,
    examCategory: 'UPSC_GS2',
    examsAppeared: ['UPSC CSE Mains GS-2 2024', 'DJS 2024', 'CLAT PG 2024', 'UP PCS-J 2024'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~11 Mins',
    targetWordMin: 240,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~35 lines)',
    targetTimeMinutes: 11,
    questionText: 'Examine how the Supreme Court recognized a distinct fundamental right to be free from the adverse effects of climate change under Articles 14 and 21 in M.K. Ranjitsinh v. Union of India (2024). How does this ruling balance environmental conservation with India\'s international commitments to green energy transitions?',
    coreIssues: [
      'Expansion of Article 21 beyond right to clean environment to explicitly encompass climate change.',
      'Intersection of Article 14 (inter-generational equity, environmental justice) with Article 21 (right to health and survival).',
      'The conflict between protecting the endangered Great Indian Bustard (GIB) and India\'s solar/renewable energy commitments.',
      'Balancing ecological preservation against global climate obligations (Paris Agreement).'
    ],
    examinerExpectation:
      'Candidate must analyze the 3-Judge Bench decision in M.K. Ranjitsinh (2024 per Chandrachud CJI). Explain the shift from clean environment (Subhash Kumar / M.C. Mehta) to a recognized right against climate change. Explain how Court modified its earlier blanket underground power transmission order to balance GIB conservation with national solar power generation goals.',
    essentialCitations: [
      'M.K. Ranjitsinh v. Union of India ((2024) 6 SCC 493)',
      'Subhash Kumar v. State of Bihar ((1991) 1 SCC 598)',
      'Virender Gaur v. State of Haryana ((1995) 2 SCC 577)',
      'M.C. Mehta v. Union of India ((1987) 4 SCC 463)'
    ],
    hoverIntel: {
      topicName: 'Climate Change Fundamental Right (Ranjitsinh 2024)',
      topicPillar: 'Part III: Right to Life, Dignity & Environmental Jurisprudence (Articles 14 & 21)',
      examImportance: '⭐⭐⭐⭐⭐ Contemporary Constitutional Landmark',
      examFrequency: 'Guaranteed high-yield across UPSC GS-2 & Environmental Law essays',
      weightagePattern: '15 Marks • 250 Words (1.5 Pages)',
      targetTimeMinutes: 11,
      examinerTrapWarning:
        'Trap Alert: Do not view this case merely as a wildlife conservation case about the Great Indian Bustard! The Supreme Court used this case to officially read an independent Fundamental Right against Climate Change into Articles 14 and 21!',
      recentTrendAlert: 'First explicit Supreme Court recognition of a distinct right against climate change in Indian jurisprudence.',
      coreArticles: ['Article 21', 'Article 14', 'Article 48A', 'Article 51A(g)'],
      benchmarkCases: ['M.K. Ranjitsinh (2024)', 'Subhash Kumar (1991)', 'Virender Gaur (1995)']
    },
    answerBlueprint: {
      step1Intro: 'Evolution of Green Jurisprudence: The Indian judiciary transitioned from statutory environmentalism to constitutional rights by reading the Right to a Healthy Environment into Article 21 (Subhash Kumar 1991, Virender Gaur 1995) backed by DPSPs (Article 48A) and Fundamental Duties (Article 51A(g)).',
      step2DoctrinalCore: 'The Doctrinal Leap in M.K. Ranjitsinh (2024): A 3-Judge Bench held that the right to a clean environment is no longer adequate to address the multi-dimensional crisis of global warming. The Court explicitly recognized a fundamental right to be free from the adverse effects of climate change under Articles 14 and 21.',
      step3PrecedentEvolution: 'Articles 14 & 21 Matrix: Under Article 21, life is threatened by climate-induced food scarcity, extreme weather, and disease vectors. Under Article 14, vulnerable communities bear disproportionate environmental harm, violating equality and inter-generational equity.',
      step4Conclusion: 'Balancing Conservation vs Transition: The Court modified its earlier blanket ban on overhead power lines in the habitat of the Great Indian Bustard, appointing an expert committee to harmonize species protection with India\'s international climate targets (solar power transition).'
    },
    fullModelAnswer: `I. CONSTITUTIONAL PROGRESSION OF ENVIRONMENTAL RIGHTS:
While Part III lacks an explicit environmental right, the Supreme Court progressively derived it:
- Subhash Kumar v. State of Bihar (1991): Right to pollution-free water and air recognized as a facet of Article 21.
- Constitutional Vectors: Articles 48A (Duty of State to protect the environment) and 51A(g) (Duty of citizens to show compassion for living creatures) served as normative interpretative aids.

II. THE EMERGENCE OF A RIGHT AGAINST CLIMATE CHANGE (RANJITSINH 2024):
In M.K. Ranjitsinh v. Union of India (2024), while reviewing an order requiring all power lines in Rajasthan and Gujarat to go underground to protect the critically endangered Great Indian Bustard (GIB), CJI D.Y. Chandrachud established:
1. Distinct Right under Article 21: The right to life includes the right to health and sustained existence. Climate change threatens clean air, food security, and drinking water availability. Thus, citizens have a distinct right to be free from the adverse impacts of climate change.
2. Equality Nexus under Article 14: Climate disruption affects indigenous populations, agricultural labor, and marginalized communities with severe asymmetry. Denial of equal protection against climate fallout violates Article 14 and the doctrine of inter-generational equity.
3. International Alignment: This aligns Indian constitutional law with the Paris Agreement and international human rights jurisprudence (UNGA Resolution 76/300 declaring clean environment a universal human right).

III. BALANCING ENERGY TRANSITION AND ECOLOGICAL PRESERVATION:
The Union demonstrated that mandatory undergrounding of high-voltage transmission lines was technically unfeasible and would derail India's target of achieving 500 GW of non-fossil fuel capacity by 2030.
- Sustainable Harmonization: The Court avoided an absolutist conservation approach, appointing an expert committee to determine undergrounding only in critical GIB zones while permitting overhead lines with bird diverters in non-critical sectors.

CONCLUSION:
Ranjitsinh (2024) marks the transition from micro-environmental protection to macro-climate governance, elevating climate resilience into an actionable fundamental right while calibrating it with sustainable development.`,
    scoringRubric: [
      { criterion: 'Judicial evolution from Subhash Kumar to modern constitutional rights', marks: 3 },
      { criterion: 'Doctrinal analysis of Article 21 (survival) and Article 14 (equity) in Ranjitsinh', marks: 4.5 },
      { criterion: 'Harmonization between GIB protection and solar energy commitments', marks: 4 },
      { criterion: 'International treaty linkage (Paris Agreement) & sustainable development', marks: 3.5 }
    ]
  },

  // =========================================================================
  // 5. SC SUB-CLASSIFICATION (DAVINDER SINGH 7-JUDGE BENCH 2024)
  // =========================================================================
  {
    id: 'mains-20m-sc-sub-classification-davinder-singh-2024',
    title: "Sub-Classification of Scheduled Castes and the Creamy Layer Question",
    topicId: 'art-16-equality-opportunity-public-employment',
    marksCategory: 20,
    examCategory: 'UPSC_GS2',
    examsAppeared: ['UPSC CSE Mains GS-2 2024', 'DJS 2024', 'UP PCS-J 2024', 'Bihar Judicial 2024'],
    typicalMarks: 20,
    targetWordLimit: '350–400 Words | Time: ~15 Mins',
    targetWordMin: 320,
    targetWordMax: 420,
    estimatedPages: '2.0 Pages (~45 lines)',
    targetTimeMinutes: 15,
    questionText: 'Critically analyze the 7-Judge Constitution Bench decision in State of Punjab v. Davinder Singh (2024) overruling E.V. Chinnaiah (2005). Does sub-classification of Scheduled Castes tinker with the Presidential List under Article 341? Examine the debate on extending the "Creamy Layer" principle to Scheduled Castes.',
    coreIssues: [
      'The homogeneity fallacy of E.V. Chinnaiah (2005): Whether Scheduled Castes form a single monolithic homogeneous class.',
      'Article 341 vs Articles 15(4) and 16(4): Difference between identification of SCs and distribution of affirmative benefits.',
      'Substantive equality under Article 14: Treating unequals equally perpetuates inequality (Indra Sawhney).',
      'The Creamy Layer debate: Concurring opinions of Gavai, Khanna, and Nagarathna JJ. regarding exclusion of advanced SC segments.'
    ],
    examinerExpectation:
      'Candidate must explain E.V. Chinnaiah (2005) which barred sub-classification. Detail the 6:1 majority in Davinder Singh (2024) per Chandrachud CJI: State legislative competence under Arts 15(4)/16(4) allows sub-classification to give preferential reservation to more marginalized sub-groups (e.g. Valmikis and Mazhabi Sikhs), provided backed by empirical data. Elaborate the Creamy Layer discussion and Justice Bela Trivedi\'s dissent.',
    essentialCitations: [
      'State of Punjab v. Davinder Singh ((2024) INSC 562, 7-Judge Bench)',
      'E.V. Chinnaiah v. State of Andhra Pradesh ((2005) 1 SCC 394, Overruled)',
      'Indra Sawhney v. Union of India (1992 Supp (3) SCC 217)',
      'Jarnail Singh v. Lachhmi Narain Gupta ((2018) 10 SCC 396)'
    ],
    hoverIntel: {
      topicName: 'SC Sub-Classification & Creamy Layer (Davinder Singh 2024)',
      topicPillar: 'Part III: Affirmative Action, Equality & Social Justice (Articles 14, 15, 16, 341)',
      examImportance: '⭐⭐⭐⭐⭐ Historic 7-Judge Constitution Bench Ruling',
      examFrequency: 'Guaranteed 20-mark essay across UPSC GS-2, Law Optional, and Judiciary Mains',
      weightagePattern: '20 Marks • 350–400 Words (2 Pages)',
      targetTimeMinutes: 15,
      examinerTrapWarning:
        'Trap Alert: Clarify that sub-classification does NOT empower States to add or remove castes from the Presidential list under Article 341! The President alone identifies castes; the State merely grades affirmative action benefits under Article 16(4) based on empirical backwardness!',
      recentTrendAlert: '6:1 majority upheld state sub-classification; 4 judges backed creamy layer exclusion.',
      coreArticles: ['Article 341', 'Article 14', 'Article 15(4)', 'Article 16(4)', 'Article 335'],
      benchmarkCases: ['Davinder Singh (2024)', 'E.V. Chinnaiah (2005)', 'Indra Sawhney (1992)']
    },
    answerBlueprint: {
      step1Intro: 'Historical Context & The Chinnaiah Barrier: In E.V. Chinnaiah (2005), a 5-Judge Bench held that the Presidential notification under Article 341 creates a single monolithic and homogeneous class of Scheduled Castes, which cannot be fractured or sub-classified by State legislatures.',
      step2DoctrinalCore: 'Overruling of Chinnaiah in Davinder Singh (2024): By a 6:1 majority, the 7-Judge Bench overruled Chinnaiah. Substantive equality under Article 14 requires differential treatment for unequals within the SC category. Caste discrimination exists on a graded hierarchy; more disadvantaged sub-groups (e.g. sanitation workers) have been squeezed out by advanced sub-castes.',
      step3PrecedentEvolution: 'Reconciling Article 341 with Article 16(4): The majority distinguished between "identification" (exclusive Union domain under Art. 341) and "affirmative distribution" (State competence under Art. 16(4)). States cannot exclude a caste from the list or allocate 100% reservation to one sub-group, but may create sub-categories backed by quantifiable empirical data.',
      step4Conclusion: 'The Creamy Layer Controversy: Four judges (Gavai, Vikram Nath, Sharma, and Khanna JJ.) observed that identifying a creamy layer within SCs/STs is constitutionally necessary to reach the truly downtrodden. Justice Bela Trivedi dissented, arguing that judicial sub-classification rewrites Article 341.'
    },
    fullModelAnswer: `I. THE CONSTITUTIONAL DILEMMA AND E.V. CHINNAIAH:
In E.V. Chinnaiah v. State of Andhra Pradesh (2005), the Supreme Court struck down the Andhra Pradesh Scheduled Castes (Rationalisation of Reservations) Act, 2000, holding:
1. Monolithic Category: The Presidential List notified under Article 341 creates an indivisible, homogeneous class of Scheduled Castes.
2. Lack of State Competence: Any sub-classification amounts to "tinkering" with the Presidential list, violating Article 341(2) which vests amendment powers exclusively in Parliament.

II. THE DOCTRINAL OVERRULING IN DAVINDER SINGH (2024):
In State of Punjab v. Davinder Singh (2024), a 7-Judge Constitution Bench (6:1) overruled Chinnaiah, establishing:
1. Substantive Equality (Article 14): Substantive equality mandates that equals be treated equally and unequals unequally. The Scheduled Castes do not form a socially or economically homogeneous group. Centuries of caste oppression created graded inequality even within SCs, resulting in specific communities (e.g., Mazhabi Sikhs, Valmikis, Arunthathiyars) being completely unrepresented in public services.
2. Demarcation between Article 341 and Article 16(4):
   - Article 341 governs "Identification" for constitutional status, which remains untouched.
   - Article 16(4) governs "Affirmative Action Strategy", empowering the State to structure preferential quotas to achieve adequate representation. Sub-classification does not exclude any caste from the Presidential list; it only apportions seats based on degrees of backwardness.
3. Constitutional Guardrails:
   - The State must base sub-classification on verifiable, quantifiable empirical data.
   - The State cannot grant 100% reservation of the quota to a single sub-category, thereby excluding others entirely.
   - Decisions are subject to judicial review.

III. THE CREAMY LAYER DEBATE:
Four judges in the majority (led by Justice B.R. Gavai) observed that the "Creamy Layer" principle—established in Indra Sawhney (1992) for OBCs and affirmed in Jarnail Singh (2018) for SC/ST promotions—must apply to Scheduled Castes in direct recruitment.
- Rationale: Children of high-ranking civil servants or affluent SC families no longer suffer the same systemic educational and economic deprivations as rural, manual-scavenging families. To deny creamy layer exclusion perpetuates intra-caste elite capture.
- Dissenting View: Justice Bela Trivedi dissented, arguing that any tampering with the homogeneous identity of Article 341 without constitutional amendment is ultra vires.

CONCLUSION:
Davinder Singh represents a shift from formalistic equality to distributive social justice. By permitting evidence-backed sub-classification and urging creamy layer filtering, the Constitution Bench aligned affirmative action with the real socio-economic needs of the most marginalized.`,
    scoringRubric: [
      { criterion: 'E.V. Chinnaiah ratio & monolithic homogeneity doctrine', marks: 4 },
      { criterion: 'Constitutional distinction between Article 341 (identification) and 16(4) (distribution)', marks: 5 },
      { criterion: 'Substantive equality under Article 14 and empirical data guardrails', marks: 4 },
      { criterion: 'Creamy layer extension debate (Gavai J. rationale vs Trivedi J. dissent)', marks: 4.5 },
      { criterion: 'Synthesis, social justice perspective, and structured conclusion', marks: 2.5 }
    ]
  },

  // =========================================================================
  // 6. PARLIAMENTARY PRIVILEGES & BRIBERY (SITA SOREN 7-JUDGE BENCH 2024)
  // =========================================================================
  {
    id: 'mains-15m-parliamentary-privilege-sita-soren-2024',
    title: "Parliamentary Privileges vs Criminal Bribery: Overruling of P.V. Narasimha Rao",
    topicId: 'art-105-parliamentary-privileges',
    marksCategory: 15,
    examCategory: 'UPSC_GS2',
    examsAppeared: ['UPSC CSE Mains GS-2 2024', 'DJS 2024', 'UP PCS-J 2024', 'CLAT PG 2024'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~11 Mins',
    targetWordMin: 240,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~35 lines)',
    targetTimeMinutes: 11,
    questionText: 'Examine the scope of immunity granted to legislators under Articles 105(2) and 194(2) of the Constitution. How did the 7-Judge Constitution Bench in Sita Soren v. Union of India (2024) overrule the majority judgment in P.V. Narasimha Rao (1998)?',
    coreIssues: [
      'Scope of Articles 105(2) and 194(2): Immunity for "anything said or any vote given in Parliament/Legislature".',
      'The paradoxical majority ratio in P.V. Narasimha Rao (1998): Lawmakers who took bribes and voted got immunity, while those who took bribes but did not vote were prosecuted.',
      'Sita Soren (2024): Bribery is complete the moment the illegal gratification is accepted, independent of parliamentary performance.',
      'Test of Necessity: Privileges exist to protect parliamentary independence, not to foster criminal immunity.'
    ],
    examinerExpectation:
      'Candidate must analyze Articles 105(2) and 194(2). Contrast P.V. Narasimha Rao (1998, 3:2 majority) with the unanimous 7-Judge Bench ruling in Sita Soren (2024 per Chandrachud CJI). Explain the dual tests: (1) offence of bribery under Sec 7 PC Act is independent of vote; (2) "nexus test" (privilege is confined to actions necessary for collective deliberation, not criminal acts).',
    essentialCitations: [
      'Sita Soren v. Union of India ((2024) 5 SCC 629, 7-Judge Bench)',
      'P.V. Narasimha Rao v. State (CBI/SPE) ((1998) 4 SCC 626, Overruled)',
      'Raja Ram Pal v. Hon\'ble Speaker, Lok Sabha ((2007) 3 SCC 184)',
      'State of Kerala v. K. Ajitha ((2021) 17 SCC 318)'
    ],
    hoverIntel: {
      topicName: 'Parliamentary Immunity & Bribery (Sita Soren 2024)',
      topicPillar: 'Union & State Legislatures • Legislative Privileges (Articles 105 & 194)',
      examImportance: '⭐⭐⭐⭐⭐ Landmark 7-Judge Constitution Bench Ruling',
      examFrequency: 'Direct question across UPSC Mains GS-2, Law Optional, and Judicial Mains',
      weightagePattern: '15 Marks • 250 Words (1.5 Pages)',
      targetTimeMinutes: 11,
      examinerTrapWarning:
        'Trap Alert: Do not suggest that the Court curtailed parliamentary free speech! Emphasize that free speech inside the House remains absolute; what was denied immunity is the independent extraterritorial criminal offence of accepting a bribe!',
      recentTrendAlert: 'Unanimous 7-judge decision ending a 26-year-old constitutional anomaly.',
      coreArticles: ['Article 105(2)', 'Article 194(2)', 'Prevention of Corruption Act, 1988'],
      benchmarkCases: ['Sita Soren (2024)', 'P.V. Narasimha Rao (1998)', 'Raja Ram Pal (2007)']
    },
    answerBlueprint: {
      step1Intro: 'Constitutional Charter of Privileges: Articles 105(2) (Parliament) and 194(2) (State Assemblies) provide that no member shall be liable to any proceedings in any court "in respect of anything said or any vote given by him" in the legislature.',
      step2DoctrinalCore: 'The Absurdity of P.V. Narasimha Rao (1998): A 3:2 majority held that MPs who took bribes and cast their vote as agreed were immune from criminal prosecution under the Prevention of Corruption Act (PC Act) because their vote was protected by Art. 105(2), while an MP who took money but failed to vote lacked immunity.',
      step3PrecedentEvolution: 'The Overruling in Sita Soren (2024): A 7-Judge Constitution Bench unanimously overruled Narasimha Rao on two decisive legal grounds: (1) Time of Commission: Bribery under Section 7 of the PC Act is complete upon acceptance/agreement to receive illegal gratification; subsequent voting is irrelevant; (2) The Functional Nexus Test: Parliamentary privileges protect only what is necessary for collective deliberation, not criminal corruption.',
      step4Conclusion: 'Constitutional Morality: Corruption by legislators subverts representative democracy. Criminal law applies equally inside and outside legislative walls unless strictly covered by legitimate parliamentary function.'
    },
    fullModelAnswer: `I. TEXTUAL MANDATE OF ARTICLES 105(2) AND 194(2):
Articles 105(2) and 194(2) confer immunity on lawmakers: "No member of Parliament/Legislature shall be liable to any proceedings in any court in respect of anything said or any vote given by him in Parliament..."
The objective was to insulate legislators from executive coercion and enable fearless debate without civil or criminal intimidation.

II. THE ANOMALY OF P.V. NARASIMHA RAO (1998):
In P.V. Narasimha Rao v. State (1998), dealing with the JMM bribery scandal, a 3:2 majority held:
- Lawmakers who accepted bribes and voted according to the agreement enjoyed absolute constitutional immunity because the phrase "in respect of" was given wide elasticity.
- Conversely, Ajit Singh (who accepted the bribe but did not vote) was held liable to prosecution.
This created a bizarre constitutional paradox: an MP who executed a corrupt bargain inside the House was shielded by the Constitution, while an MP who reneged was prosecuted.

III. THE RATIO DECIDENDI IN SITA SOREN (2024):
In Sita Soren v. Union of India (2024), a unanimous 7-Judge Bench headed by CJI D.Y. Chandrachud overruled Narasimha Rao:
1. Nature of the Offence of Bribery:
   Under Section 7 of the Prevention of Corruption Act, 1988, the offence of bribery is complete the moment an illegal gratification is obtained or agreed upon. It does not depend on whether the vote was subsequently cast, or how it was cast.
2. The Functional / Essentiality Test:
   Privileges are not personal immunities for individual lawmakers; they are functional protections necessary for the collective legislature to exercise its deliberative duties. Bribery has no functional nexus to fearless parliamentary debate.
3. Democratic Integrity and Constitutional Morality:
   The Court ruled that corrupt legislators subvert democratic integrity. A reading of Article 105(2) that licenses bribery destroys the basic structure of the Constitution.

CONCLUSION:
Sita Soren establishes that parliamentary privilege cannot be converted into an enclave of criminal impunity. The rule of law and legislative probity are harmonized, ensuring that the ballot of the lawmaker is cast for public good rather than private commerce.`,
    scoringRubric: [
      { criterion: 'Textual analysis of Articles 105(2) and 194(2) purpose', marks: 3 },
      { criterion: 'Critique of P.V. Narasimha Rao (1998) majority paradox', marks: 4 },
      { criterion: 'Analysis of Sita Soren (2024) two-fold legal grounds (Sec 7 PC Act & functional nexus)', marks: 5 },
      { criterion: 'Impact on rule of law, constitutional morality & clean politics', marks: 3 }
    ]
  },

  // =========================================================================
  // 7. BULLDOZER JUSTICE & DUE PROCESS (DEMOLITION GUIDELINES 2024)
  // =========================================================================
  {
    id: 'mains-15m-bulldozer-justice-demolition-guidelines-2024',
    title: 'Executive Demolitions ("Bulldozer Justice"), Separation of Powers, and Article 21',
    topicId: 'art-21-right-to-life-liberty',
    marksCategory: 15,
    examCategory: 'UPSC_GS2',
    examsAppeared: ['UPSC CSE Mains GS-2 2024', 'DJS 2024', 'UP PCS-J 2024', 'CLAT PG 2024'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~11 Mins',
    targetWordMin: 240,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~35 lines)',
    targetTimeMinutes: 11,
    questionText: 'Can the Executive demolish the residential or commercial properties of persons merely accused of criminal offences without violating the Rule of Law and Article 21? Discuss in light of the pan-India guidelines framed by the Supreme Court in In Re: Directions in the matter of Demolition of Structures (2024).',
    coreIssues: [
      'Separation of Powers: The Executive cannot adjudicate guilt or execute punitive corporal penalties.',
      'Right to Shelter and Housing as intrinsic to Right to Life under Article 21 (Olga Tellis and Chameli Singh).',
      'Collective punishment: Demolition of ancestral homes penalizes innocent family members for the alleged crime of one person.',
      'Mandatory procedural due process: 15-day show cause notice, personal hearing, reasoned order, and appellate window.'
    ],
    examinerExpectation:
      'Candidate must explain why punitive executive demolitions ("Bulldozer justice") violate Separation of Powers, Rule of Law, and Article 21. Detail the 2024 Supreme Court guidelines issued by Justices B.R. Gavai and K.V. Viswanathan: 15 days notice, registered post, digital portal upload, video recording of demolition, and personal liability / restitution by errant officials.',
    essentialCitations: [
      'In Re: Directions in the matter of Demolition of Structures (2024 INSC 866)',
      'Olga Tellis v. Bombay Municipal Corporation ((1985) 3 SCC 545)',
      'Chameli Singh v. State of U.P. ((1996) 2 SCC 549)',
      'Maneka Gandhi v. Union of India ((1978) 1 SCC 248)'
    ],
    hoverIntel: {
      topicName: 'Bulldozer Justice & Demolition Guidelines (2024)',
      topicPillar: 'Part III: Due Process, Separation of Powers & Rule of Law (Articles 14, 21, 300A)',
      examImportance: '⭐⭐⭐⭐⭐ High Yield Constitutional Civil Liberties Case',
      examFrequency: 'Top trending question in UPSC Mains and Judicial Criminal Law papers',
      weightagePattern: '15 Marks • 250 Words (1.5 Pages)',
      targetTimeMinutes: 11,
      examinerTrapWarning:
        'Trap Alert: Ensure you note that the guidelines do NOT apply to encroachments on public roads, footpaths, water bodies, or railways, or where a competent court has ordered demolition!',
      recentTrendAlert: 'Pan-India binding guidelines invoking Article 142 to prevent punitive executive demolitions.',
      coreArticles: ['Article 21', 'Article 14', 'Article 300A', 'Article 50', 'Article 142'],
      benchmarkCases: ['Demolition Guidelines (2024)', 'Olga Tellis (1985)', 'Maneka Gandhi (1978)']
    },
    answerBlueprint: {
      step1Intro: 'Constitutional Anathema of Punitive Demolitions: The practice of using bulldozers to demolish the properties of accused persons undermines the foundational constitutional doctrines of Separation of Powers (Article 50), Rule of Law (Article 14), and Right to Shelter (Article 21).',
      step2DoctrinalCore: 'Usurpation of Judicial Functions: The Executive cannot act as judge, jury, and executioner. Even a convicted criminal cannot have their house demolished unless authorized under municipal town planning laws after full procedural compliance.',
      step3PrecedentEvolution: 'Pan-India Guidelines Framed in 2024: Justices B.R. Gavai and K.V. Viswanathan formulated mandatory safeguards under Article 142: (1) Minimum 15-day show cause notice by registered post and affixed on property; (2) Time-stamped digital portal registry; (3) Personal hearing and speaking order; (4) Appellate window of 15 days before demolition; (5) Mandatory video recording of demolition.',
      step4Conclusion: 'Accountability and Restitution: Officials executing illegal demolitions will be held personally liable for damages, face contempt of court, and bear the cost of property restitution from their salaries.'
    },
    fullModelAnswer: `I. THE CONSTITUTIONAL CHALLENGE TO "BULLDOZER JUSTICE":
Punitive state demolition of homes belonging to accused or convicted persons violates three bedrock constitutional principles:
1. Separation of Powers (Article 50): Adjudicating guilt and awarding punishment is an exclusively judicial function. The Executive cannot unilaterally pronounce an accused guilty and administer extra-judicial retribution.
2. Rule of Law & Non-Arbitrariness (Article 14): Selective targeting of properties without following municipal statutory procedures is a state-sponsored abuse of power.
3. Right to Shelter (Article 21): In Olga Tellis (1985) and Chameli Singh (1996), the Supreme Court declared the right to shelter an integral part of human dignity. Demolishing a dwelling inflicts collective punishment on innocent family members, violating natural justice.

II. MANDATORY PAN-INDIA GUIDELINES (IN RE: DEMOLITION OF STRUCTURES 2024):
Invoking Article 142, a Bench comprising Justices B.R. Gavai and K.V. Viswanathan issued binding pan-India directives:
1. Minimum 15-Day Prior Notice: No demolition can occur without a 15-day show-cause notice sent via registered post and conspicuously affixed on the property.
2. Digital Portal Disclosure: Within 3 days of issuance, all notices must be uploaded to a designated municipal portal with geo-tagged verification.
3. Opportunity for Personal Hearing: The authority must hear the owner, record minutes, and pass a speaking order addressing all objections.
4. Mandatory 15-Day Appellate Window: Even after passing an eviction order, demolition cannot proceed for 15 days to allow the owner to approach appellate courts.
5. Videography and Accountability: Demolitions must be videographed. Officials acting in violation of these directions will face contempt proceedings, prosecution, and personal financial liability for rebuilding the structure.

EXCEPTIONS:
These guidelines do not protect unauthorized encroachments on public roads, footpaths, railway tracks, or water bodies.

CONCLUSION:
The 2024 guidelines reaffirm that the chilling specter of the bulldozer cannot replace the majesty of the law. Procedural due process under Article 21 (Maneka Gandhi) is an unyielding shield against executive excesses.`,
    scoringRubric: [
      { criterion: 'Violation of Separation of Powers (Art 50) and Rule of Law (Art 14)', marks: 3.5 },
      { criterion: 'Article 21 Right to Shelter & Olga Tellis/Chameli Singh jurisprudence', marks: 3.5 },
      { criterion: 'Systematic breakdown of the 5-step 2024 Demolition Guidelines', marks: 5 },
      { criterion: 'Exceptions, official accountability & constitutional synthesis', marks: 3 }
    ]
  },

  // =========================================================================
  // 8. ABROGATION OF ARTICLE 370 (CONSTITUTION BENCH 2023)
  // =========================================================================
  {
    id: 'mains-20m-art370-abrogation-constitution-bench-2023',
    title: 'Abrogation of Article 370, Asymmetric Federalism & Reorganization of States',
    topicId: 'art-370-special-status-jk',
    marksCategory: 20,
    examCategory: 'UPSC_GS2',
    examsAppeared: ['UPSC CSE Mains GS-2 2024', 'DJS 2024', 'UP PCS-J 2024', 'CLAT PG 2024'],
    typicalMarks: 20,
    targetWordLimit: '350–400 Words | Time: ~15 Mins',
    targetWordMin: 320,
    targetWordMax: 420,
    estimatedPages: '2.0 Pages (~45 lines)',
    targetTimeMinutes: 15,
    questionText: 'Critically analyze the 5-Judge Constitution Bench verdict in In Re: Article 370 of the Constitution (2023). How did the Court examine: (a) The temporary nature of Article 370; (b) The use of Article 367 to amend Article 370(3); and (c) The reorganization of a State into Union Territories under Article 3 during President\'s Rule?',
    coreIssues: [
      'Temporary status of Article 370: Historical context, placement in Part XXI, and dissolution of the J&K Constituent Assembly in 1957.',
      'The procedural sleight of hand: Amending Article 367 (interpretation clause) via C.O. 272 to substitute "Constituent Assembly" with "Legislative Assembly".',
      'The invocation of Article 370(3) via C.O. 273 declaring Article 370 inoperative.',
      'Article 3 Reorganization: Diminution of an entire State into two Union Territories (J&K and Ladakh) during President\'s Rule under Article 356.'
    ],
    examinerExpectation:
      'Candidate must dissect the 5-Judge Constitution Bench judgment (unanimous per Chandrachud CJI, Kaul J., Khanna J.). Explain: (1) J&K retained no internal sovereignty post-accession; (2) Art 370 was temporary; (3) Court struck down the amendment of Art 367 as ultra vires (colorable exercise), BUT upheld C.O. 273 because the President could act directly under Art 370(3); (4) Upheld Ladakh UT under Art 3, leaving J&K statehood question open upon Solicitor General\'s assurance.',
    essentialCitations: [
      'In Re: Article 370 of the Constitution ((2024) 4 SCC 1, 5-Judge Bench)',
      'Prem Nath Kaul v. State of J&K (AIR 1959 SC 749)',
      'Sampat Prakash v. State of J&K (AIR 1970 SC 1118)',
      'S.R. Bommai v. Union of India ((1994) 3 SCC 1)'
    ],
    hoverIntel: {
      topicName: 'Article 370 Abrogation & Federalism (2023)',
      topicPillar: 'Federalism, Asymmetric Autonomy & Emergency Powers (Articles 370, 356, 3, 367)',
      examImportance: '⭐⭐⭐⭐⭐ Historic 5-Judge Constitution Bench Verdict',
      examFrequency: 'Guaranteed core across UPSC GS-2 and all Judicial Services examinations',
      weightagePattern: '20 Marks • 350–400 Words (2 Pages)',
      targetTimeMinutes: 15,
      examinerTrapWarning:
        'Trap Alert: Did the Supreme Court uphold the use of Article 367 to amend Article 370? NO! The Court explicitly declared the modification of Article 367 UNCONSTITUTIONAL (colorable exercise). However, it upheld the abrogation on an independent ground: the President possessed plenary power under Article 370(3) once the Constituent Assembly ceased to exist!',
      recentTrendAlert: 'Ordered ECI to conduct elections by Sept 30, 2024, and directed restoration of statehood.',
      coreArticles: ['Article 370', 'Article 367', 'Article 356', 'Article 3', 'Article 1'],
      benchmarkCases: ['Article 370 Judgment (2023)', 'S.R. Bommai (1994)', 'Sampat Prakash (1970)']
    },
    answerBlueprint: {
      step1Intro: 'Constitutional Architecture of Article 370: Incorporated as an interim arrangement under Part XXI ("Temporary, Transitional and Special Provisions"). Following the dissolution of the J&K Constituent Assembly in 1957, debate persisted whether Article 370 acquired permanent status.',
      step2DoctrinalCore: 'The 2023 Constitution Bench Findings on Sovereignty: The 5-Judge Bench held that Jammu & Kashmir did not retain an element of sovereignty upon executing the Instrument of Accession (1947). Article 1 binds J&K inextricably as an integral part of India; Section 3 of the J&K Constitution itself reaffirmed this.',
      step3PrecedentEvolution: 'Dissecting C.O. 272 and C.O. 273: (1) Invalidity of C.O. 272 (Art. 367 Route): The Court held that amending the interpretation clause (Art. 367) to substitute "Constituent Assembly" with "Legislative Assembly" was an unconstitutional, indirect modification of Article 370(3); (2) Upholding C.O. 273: However, the President was entitled to unilaterally declare Article 370 inoperative under Art. 370(3) because the requirement of Constituent Assembly recommendation became defunct upon its dissolution in 1957.',
      step4Conclusion: 'Article 3 Reorganization & Federalism Concerns: The Court upheld the carving out of Ladakh as a Union Territory under Article 3, but avoided ruling on whether Parliament can demote an entire State into UTs by accepting the Union\'s solemn undertaking to restore J&K\'s statehood.'
    },
    fullModelAnswer: `I. SOVEREIGNTY AND THE NATURE OF ARTICLE 370:
In In Re: Article 370 of the Constitution (2023), a unanimous 5-Judge Constitution Bench addressed three pivotal constitutional pillars:
1. No Retained Sovereignty: The Court held that J&K held no internal sovereignty after Maharaja Hari Singh signed the Instrument of Accession and Yuvraj Karan Singh issued the 1949 proclamation declaring the Indian Constitution supreme. Asymmetric federalism does not equate to sovereignty.
2. Temporary Character: Article 370 was placed in Part XXI as a "temporary" provision due to prevailing wartime conditions and the awaiting of the J&K Constituent Assembly. Its placement, marginal note, and historical context confirm it never achieved permanent status.

II. THE VALIDITY OF PROCEDURAL MECHANISMS (C.O. 272 & C.O. 273):
1. Invalidity of the Article 367 Route (C.O. 272):
   The President issued C.O. 272 under Article 370(1)(d), amending Article 367 (interpretation clause) to provide that "Constituent Assembly of J&K" in Article 370(3) shall read as "Legislative Assembly of J&K".
   - Judicial Verdict: The Supreme Court struck this down as ultra vires. An interpretation clause cannot be manipulated to substantively amend the amendment mechanism of Article 370(3). What cannot be done directly cannot be done indirectly (Doctrine of Colourable Legislation).
2. Validity of Unilateral Abrogation under Article 370(3) (C.O. 273):
   Despite invalidating the Article 367 route, the Court upheld the abrogation. It held that the dissolution of the J&K Constituent Assembly in 1957 did not render Article 370(3) redundant. The President's power to issue a notification declaring Article 370 inoperative survived and could be exercised unilaterally.

III. ARTICLE 3 REORGANIZATION AND PRESIDENT'S RULE (ARTICLE 356):
Petitioners argued that during President's Rule under Article 356, the Union cannot effect irreversible constitutional transformations or extinguish a State under Article 3.
- Standard of Judicial Review: Following S.R. Bommai (1994), the Court held that the exercise of power by the President during emergency is subject to judicial review, but actions taken cannot be invalidated merely because they have permanent consequences.
- Reorganization under Article 3:
  1. Carving out the Union Territory of Ladakh under Article 3 was upheld under the Explanation to Article 3.
  2. The Court refrained from deciding whether Parliament can extinguish an entire State into a Union Territory, taking on record the Solicitor General's solemn assurance that statehood of J&K will be restored.

CONCLUSION:
The judgment reaffirms the paramountcy of Article 1 and national integration while establishing that asymmetric federalism must operate within the overarching supremacy of the Indian constitutional matrix.`,
    scoringRubric: [
      { criterion: 'Internal sovereignty and temporary character of Article 370', marks: 4 },
      { criterion: 'Critical analysis of C.O. 272 / Article 367 invalidation (colorable legislation)', marks: 5.5 },
      { criterion: 'President\'s independent unilateral power under Article 370(3) / C.O. 273', marks: 4.5 },
      { criterion: 'Article 3 statehood downgrade question and Article 356 standards (Bommai)', marks: 4 },
      { criterion: 'Balanced federalism appraisal and structured conclusion', marks: 2 }
    ]
  },

  // =========================================================================
  // 9. ELECTION COMMISSION APPOINTMENT ACT 2023 (ANOOP BARANWAL FALLOUT)
  // =========================================================================
  {
    id: 'mains-15m-eci-appointment-act-2023',
    title: "Independence of the Election Commission: The 2023 Appointment Act vs Anoop Baranwal",
    topicId: 'art-324-election-commission-elections',
    marksCategory: 15,
    examCategory: 'UPSC_GS2',
    examsAppeared: ['UPSC CSE Mains GS-2 2024', 'DJS 2024', 'UP PCS-J 2024', 'UPSC Law Optional 2024'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~11 Mins',
    targetWordMin: 240,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~35 lines)',
    targetTimeMinutes: 11,
    questionText: 'Trace the constitutional journey of Article 324(2) regarding the appointment of Election Commissioners. Critically evaluate the Chief Election Commissioner and other Election Commissioners Act, 2023 in light of the 5-Judge Constitution Bench ruling in Anoop Baranwal v. Union of India (2023).',
    coreIssues: [
      'Constitutional silence in Article 324(2): "Subject to the provisions of any law made in that behalf by Parliament".',
      'The interregnum doctrine in Anoop Baranwal (2023): Inclusion of Chief Justice of India (CJI) in the selection committee.',
      'The 2023 Statutory Composition: Prime Minister, Union Cabinet Minister, and Leader of Opposition (2:1 executive majority).',
      'Exclusion of CJI: Whether executive dominance in the selection panel violates institutional independence (Basic Structure).'
    ],
    examinerExpectation:
      'Candidate must explain Article 324(2) legislative vacuum for 73 years. Detail the Anoop Baranwal (2023) stop-gap panel (PM + CJI + LoP) designed to ensure an independent umpire. Analyze the 2023 Act replacing CJI with a Cabinet Minister. Address the constitutional challenge: Can Parliament enact a law departing from the Court\'s interim committee? Cite Jaya Thakur v. Union of India (2024 refusal to stay).',
    essentialCitations: [
      'Anoop Baranwal v. Union of India ((2023) 6 SCC 161, 5-Judge Bench)',
      'Jaya Thakur v. Union of India ((2024) 4 SCC 344)',
      'T.N. Seshan v. Union of India ((1995) 4 SCC 611)',
      '255th Law Commission Report on Electoral Reforms (2015)'
    ],
    hoverIntel: {
      topicName: 'ECI Appointments & The 2023 Act (Anoop Baranwal)',
      topicPillar: 'Part XV: Elections & Constitutional Bodies (Article 324)',
      examImportance: '⭐⭐⭐⭐⭐ High Yield UPSC GS-2 Institutional Friction Topic',
      examFrequency: 'Direct recurring topic across UPSC Mains and Law Optional',
      weightagePattern: '15 Marks • 250 Words (1.5 Pages)',
      targetTimeMinutes: 11,
      examinerTrapWarning:
        'Trap Alert: Do not state that the 2023 Act violated a constitutional decree of the Supreme Court! The Supreme Court in Anoop Baranwal explicitly stated that its selection committee (including the CJI) was an INTERIM measure operative ONLY "until Parliament makes a law" under Article 324(2)!',
      recentTrendAlert: 'Supreme Court in Jaya Thakur (2024) declined to stay the 2023 Act for general elections.',
      coreArticles: ['Article 324(2)', 'Article 324(5)', 'Article 14', 'Article 50'],
      benchmarkCases: ['Anoop Baranwal (2023)', 'Jaya Thakur (2024)', 'T.N. Seshan (1995)']
    },
    answerBlueprint: {
      step1Intro: 'The Legislative Void in Article 324(2): Article 324(2) mandates that the appointment of the CEC and ECs shall be made by the President, "subject to the provisions of any law made in that behalf by Parliament." For over 73 years, Parliament failed to enact such a law, leaving appointments entirely to executive discretion.',
      step2DoctrinalCore: 'The Anoop Baranwal Interregnum (2023): A 5-Judge Constitution Bench ruled that an election commission beholden to the executive cannot ensure free and fair elections (a Basic Structure feature). It directed that until Parliament legislates, appointments must be made on the advice of a committee comprising the PM, CJI, and Leader of Opposition (LoP).',
      step3PrecedentEvolution: 'The 2023 Statutory Response: Parliament enacted the Chief Election Commissioner and other Election Commissioners (Appointment, Conditions of Service and Term of Office) Act, 2023. The Act established a Selection Committee comprising: (1) Prime Minister; (2) A Union Cabinet Minister; (3) Leader of Opposition/Single Largest Party. The CJI was substituted with a Cabinet Minister.',
      step4Conclusion: 'Constitutional Scrutiny & Way Forward: While Parliament was constitutionally competent to legislate, reducing the panel to a 2:1 executive majority revives concerns of executive hegemony. The 255th Law Commission recommendation (a balanced collegium) remains the gold standard for independent electoral oversight.'
    },
    fullModelAnswer: `I. THE CONSTITUTIONAL FRAMEWORK OF ARTICLE 324(2):
Article 324(2) states that the Election Commission shall consist of the Chief Election Commissioner (CEC) and other Commissioners, appointed by the President "subject to the provisions of any law made in that behalf by Parliament."
- The Historical Default: For over seven decades, no parliamentary law was enacted. Appointments were made entirely by the Union Executive on the advice of the Prime Minister under Article 74, creating institutional vulnerability.

II. THE LANDMARK RULING IN ANOOP BARANWAL (2023):
In Anoop Baranwal v. Union of India (2023), a unanimous 5-Judge Constitution Bench headed by Justice K.M. Joseph held:
1. Democracy and the Basic Structure: Free and fair elections are an indispensable feature of the Basic Structure. The Election Commission must be fiercely independent and insulated from the executive of the day.
2. The Interim Committee: Invoking Article 142 to fill the legislative vacuum, the Court directed that appointments be made by a 3-member committee:
   - Prime Minister of India
   - Leader of Opposition in the Lok Sabha (or leader of the largest opposition party)
   - Chief Justice of India (CJI)
3. Explicit Caveat: The Court explicitly stated that this formulation was an interim stop-gap "until Parliament enacts a law under Article 324(2)."

III. THE 2023 STATUTORY ENACTMENT:
Parliament exercised its constituent power under Article 324(2) by passing the Chief Election Commissioner and other Election Commissioners Act, 2023:
1. Selection Committee: Comprises the Prime Minister (Chairperson), a Union Cabinet Minister nominated by the PM, and the Leader of the Opposition.
2. Search Committee: Headed by the Cabinet Secretary.
3. Service Conditions: Retains equivalence with Supreme Court judges regarding protection from removal under Article 324(5).

IV. CONSTITUTIONAL SCRUTINY & JAYA THAKUR (2024):
Critics challenged the Act, contending that replacing the CJI with a Cabinet Minister creates an inherent 2:1 executive majority, neutralizing the independent umpire concept.
In Jaya Thakur v. Union of India (2024), the Supreme Court refused to stay the Act, observing:
- Separation of Powers: The Court cannot invalidate a parliamentary statute merely because it does not mirror a judicial suggestion, provided the law is within legislative competence and does not violate fundamental rights.

CONCLUSION:
Institutional independence relies not solely on judicial presence in selection, but on statutory protection against post-retirement lures and secure tenure under Article 324(5). Codifying selection criteria into law marks a formal step forward, though executive self-restraint is vital for electoral integrity.`,
    scoringRubric: [
      { criterion: 'Historical context of Article 324(2) legislative silence', marks: 3 },
      { criterion: 'Anoop Baranwal (2023) ratio on free & fair elections & interim committee', marks: 4.5 },
      { criterion: 'Provisions of the 2023 Act & controversy over CJI exclusion', marks: 4 },
      { criterion: 'Jaya Thakur (2024) judicial review limits & institutional conclusion', marks: 3.5 }
    ]
  },

  // =========================================================================
  // 10. ARTICLE 142 DIVORCE ON IRRETRIEVABLE BREAKDOWN (SHILPA SAILESH 2023)
  // =========================================================================
  {
    id: 'mains-15m-art142-divorce-shilpa-sailesh-2023',
    title: 'Article 142 Powers: Irretrievable Breakdown of Marriage & Inherent Limitations',
    topicId: 'art-142-complete-justice',
    marksCategory: 15,
    examCategory: 'DJS',
    examsAppeared: ['DJS 2023, 2024', 'UPSC Law Optional 2023', 'UP PCS-J 2023'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~11 Mins',
    targetWordMin: 240,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~35 lines)',
    targetTimeMinutes: 11,
    questionText: 'Can the Supreme Court grant a decree of divorce on the ground of "Irretrievable Breakdown of Marriage" under Article 142(1) without relegating parties to family courts? Examine the scope and inherent limitations of the "Complete Justice" power in light of Shilpa Sailesh v. Varun Sreenivasan (2023).',
    coreIssues: [
      'Scope of Article 142(1): Plenary equitable jurisdiction to pass decrees necessary for doing "complete justice".',
      'The statutory barrier: Hindu Marriage Act, 1955 does not recognize "irretrievable breakdown" as a statutory ground.',
      'Waiving the mandatory 6-month cooling-off period under Section 13B(2) of the Hindu Marriage Act.',
      'Limitations on Article 142: Inherent boundaries established in Prem Chand Garg and Supreme Court Bar Association.'
    ],
    examinerExpectation:
      'Candidate must analyze the 5-Judge Constitution Bench ruling in Shilpa Sailesh (2023). Detail: (1) Court can dissolve marriage on irretrievable breakdown under Art 142; (2) Can dispense with the 6-month waiting period under Sec 13B(2) HMA; (3) Emphasize that Art 142 cannot be claimed as a matter of right (discretionary extraordinary power); (4) Reiterate that Art 142 cannot supplant substantive statutory law.',
    essentialCitations: [
      'Shilpa Sailesh v. Varun Sreenivasan ((2023) 10 SCC 433, 5-Judge Bench)',
      'Supreme Court Bar Association v. Union of India ((1998) 4 SCC 409)',
      'Prem Chand Garg v. Excise Commissioner (AIR 1963 SC 996)',
      'Amardeep Singh v. Harveen Kaur ((2017) 8 SCC 746)'
    ],
    hoverIntel: {
      topicName: 'Article 142 & Irretrievable Breakdown (Shilpa Sailesh 2023)',
      topicPillar: 'Supreme Court Extraordinary Powers & Family Law (Article 142)',
      examImportance: '⭐⭐⭐⭐⭐ High Yield Judicial Services Milestone',
      examFrequency: 'Direct question in DJS and State Judicial Mains Civil Law papers',
      weightagePattern: '15 Marks • 250 Words (1.5 Pages)',
      targetTimeMinutes: 11,
      examinerTrapWarning:
        'Trap Alert: Do not assert that High Courts or Family Courts can grant divorce on "irretrievable breakdown"! The Supreme Court clarified that this power is EXCLUSIVE to the Supreme Court under Article 142; subordinate courts remain strictly bound by the fault/mutual consent grounds in the Hindu Marriage Act!',
      recentTrendAlert: 'Constitution Bench guidelines framed to prevent mechanical dissolution.',
      coreArticles: ['Article 142(1)', 'Article 136', 'Section 13B Hindu Marriage Act, 1955'],
      benchmarkCases: ['Shilpa Sailesh (2023)', 'SCBA v. UOI (1998)', 'Prem Chand Garg (1963)']
    },
    answerBlueprint: {
      step1Intro: 'Plenary Nature of Article 142(1): Article 142(1) empowers the Supreme Court to pass any decree or order necessary for doing "complete justice in any cause or matter pending before it." It is an equitable corrective mechanism unhindered by procedural statutes.',
      step2DoctrinalCore: 'The Jurisprudential Conflict: The Hindu Marriage Act (HMA), 1955 recognizes only fault-based grounds (Section 13) and mutual consent (Section 13B). Despite Law Commission recommendations (71st & 217th Reports), Parliament did not add "irretrievable breakdown of marriage" (IBM) as a statutory ground.',
      step3PrecedentEvolution: 'Shilpa Sailesh (2023) Constitution Bench Holdings: A 5-Judge Bench resolved: (1) The Supreme Court can grant divorce on the ground of IBM using Article 142(1); (2) It can waive the mandatory 6-month statutory waiting period under Section 13B(2); (3) It laid down illustrative factors (cohabitation period, litigation duration, alimony, custody) to determine dead marriages.',
      step4Conclusion: 'Inherent Limitations: Article 142 is not an unfettered charter (Supreme Court Bar Association 1998). It cannot be claimed as a matter of right by parties; it is a remedy of last resort to prevent emotional and institutional cruelty.'
    },
    fullModelAnswer: `I. PLENARY DIMENSIONS OF ARTICLE 142(1):
Article 142(1) vests the Supreme Court with an extraordinary equitable jurisdiction to pass such decree or order as is necessary for doing "complete justice" in any cause or matter.
In Supreme Court Bar Association v. Union of India (1998), the Court clarified that while Article 142 cannot be used to supplant substantive statutory law or build a new edifice outside the statute, it can supplement the law to do justice where strict statutory application causes irreparable hardship.

II. THE SHILPA SAILESH RULING (2023 CONSTITUTION BENCH):
In Shilpa Sailesh v. Varun Sreenivasan (2023), a 5-Judge Constitution Bench addressed whether the Court could dissolve a dead marriage without sending parties through protracted trial court litigation:
1. Power to Dissolve on Irretrievable Breakdown (IBM):
   The Court affirmed that it has the power under Article 142(1) to dissolve a marriage on the ground of irretrievable breakdown, even if one spouse opposes it, where the marriage is emotionally dead and beyond repair.
2. Dispensing with Cooling-Off Period:
   The mandatory six-month waiting period under Section 13B(2) of the Hindu Marriage Act, 1955 is directory, not mandatory (affirming Amardeep Singh, 2017). The Supreme Court can waive this period if efforts at reconciliation have completely failed.
3. Illustrative Factors for Ascertaining Breakdown:
   The Court formulated objective criteria:
   - Duration of cohabitation vs duration of separation.
   - Nature and history of pending litigations.
   - Genuine attempts at mediation by elders or court counselors.
   - Financial arrangements and maintenance for spouse and children.

III. INHERENT LIMITATIONS AND JUDICIAL CAUTION:
1. Remedy of Last Resort: Article 142 cannot be invoked as a shortcut. Parties cannot approach the Supreme Court directly under Article 32 seeking divorce on IBM.
2. Subordinate Courts Barred: High Courts under Article 226 and Family Courts have no jurisdiction to grant divorce on IBM; they remain strictly bounded by statutory grounds.

CONCLUSION:
Shilpa Sailesh (2023) humanizes matrimonial jurisprudence. By exercising Article 142 to dissolve de facto dead marriages, the Supreme Court prevented the law from being an instrument of institutional harassment while maintaining strict judicial guardrails.`,
    scoringRubric: [
      { criterion: 'Constitutional scope and limits of Article 142 (SCBA & Prem Chand Garg)', marks: 3.5 },
      { criterion: 'Shilpa Sailesh (2023) ratio on irretrievable breakdown & Section 13B waiver', marks: 4.5 },
      { criterion: 'Objective criteria formulated by the Constitution Bench', marks: 3.5 },
      { criterion: 'Exclusive jurisdiction vs trial courts & judicial restraint conclusion', marks: 3.5 }
    ]
  },

  // =========================================================================
  // 11. GST COUNCIL FISCAL FEDERALISM (MOHIT MINERALS 2022)
  // =========================================================================
  {
    id: 'mains-15m-gst-council-fiscal-federalism-mohit-minerals',
    title: 'Fiscal Federalism & GST Council Voting Architecture: Union-State Dynamics',
    topicId: 'art-279a-gst-council',
    marksCategory: 15,
    examCategory: 'UPSC_GS2',
    examsAppeared: ['UPSC CSE Mains GS-2 2022, 2023', 'UPSC Law Optional 2023', 'DJS 2024'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~11 Mins',
    targetWordMin: 240,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~35 lines)',
    targetTimeMinutes: 11,
    questionText: 'Are the recommendations of the GST Council binding on Parliament and State Legislatures? Analyze the constitutional interplay between Article 246A and Article 279A in light of Union of India v. Mohit Minerals Pvt. Ltd. (2022). How does the voting structure reflect cooperative federalism?',
    coreIssues: [
      'Simultaneous legislative power under Article 246A: Non-obstante clause over Article 246.',
      'Nature of Article 279A recommendations: Are GST Council recommendations binding or recommendatory?',
      'Voting Architecture: One-third weightage to Union, two-thirds to all States combined; 75% majority requirement (de facto Union veto).',
      'Cooperative vs Uncooperative Federalism: Legislative autonomy of States in indirect taxation.'
    ],
    examinerExpectation:
      'Candidate must analyze the 101st Constitutional Amendment. Explain Article 246A conferring simultaneous legislative competence. Dissect Mohit Minerals (2022 per Chandrachud J.): GST Council recommendations possess persuasive, not binding, value upon legislatures. Detail the voting mathematics: Union (33.3%) + small coalition of states can veto any proposal, while States alone cannot pass any resolution without Union support.',
    essentialCitations: [
      'Union of India v. Mohit Minerals Pvt. Ltd. ((2022) 10 SCC 700)',
      'State of West Bengal v. Committee for Protection of Democratic Rights ((2010) 3 SCC 571)',
      '101st Constitutional Amendment Act, 2016'
    ],
    hoverIntel: {
      topicName: 'GST Council & Fiscal Federalism (Mohit Minerals 2022)',
      topicPillar: 'Part XII: Finance, Taxation & Fiscal Federalism (Articles 246A & 279A)',
      examImportance: '⭐⭐⭐⭐⭐ High Yield Fiscal Federalism Landmark',
      examFrequency: 'Repeated core question in UPSC Mains GS-2 and Law Optional',
      weightagePattern: '15 Marks • 250 Words (1.5 Pages)',
      targetTimeMinutes: 11,
      examinerTrapWarning:
        'Trap Alert: Candidates often mistakenly argue that GST Council recommendations are binding mandates on state assemblies! Cite Mohit Minerals (2022) which categorically held that GST Council recommendations are persuasive/advisory; treating them as binding would destroy the simultaneous legislative power under Article 246A!',
      recentTrendAlert: 'Highlighted "Uncooperative Federalism" as a valid constitutional mechanism for states to contest central policies.',
      coreArticles: ['Article 246A', 'Article 269A', 'Article 279A', 'Article 280'],
      benchmarkCases: ['Mohit Minerals (2022)', '101st CAA Jurisprudence']
    },
    answerBlueprint: {
      step1Intro: 'The 101st Constitutional Amendment Revolution: Substituted the traditional separated taxing powers of the Seventh Schedule with Article 246A, which confers simultaneous legislative power on Parliament and State Legislatures to make laws with respect to goods and services tax (GST).',
      step2DoctrinalCore: 'The Nature of Article 279A Recommendations: In Union of India v. Mohit Minerals (2022), the Supreme Court resolved the controversy over whether GST Council decisions bind legislatures. Justice Chandrachud held that recommendations under Article 279A(4) are recommendatory and possess persuasive value, fostering dialogue rather than legislative subordination.',
      step3PrecedentEvolution: 'Voting Asymmetry & Cooperative Federalism: Under Article 279A(9), every decision requires a 3/4th (75%) weighted majority. The Union holds 1/3rd (33.33%) voting weight, while all States combined hold 2/3rds (66.67%). Result: The Union possesses a unilateral veto (since 100% - 33.33% = 66.67% < 75%), whereas States cannot carry a measure without Union concurrence.',
      step4Conclusion: 'Embracing Uncooperative Federalism: Mohit Minerals acknowledged that democracy flourishes when constituent units disagree. Dialogue between the Union and States must be nurtured through constitutional collaboration rather than coercive uniformity.'
    },
    fullModelAnswer: `I. THE DUAL CONSTITUTIONAL SCHEME (ARTICLE 246A VS 279A):
The 101st Constitutional Amendment Act, 2016 restructured Indian fiscal federalism:
1. Article 246A (Simultaneous Power): Unlike the exclusive distribution in the Seventh Schedule, Article 246A grants concurrent, simultaneous power to both Parliament and State Legislatures to levy GST. It contains no non-obstante clause subordinating States to Parliament in intra-state supplies.
2. Article 279A (The GST Council): Established a joint constitutional forum to "make recommendations" on rates, exemptions, and threshold limits.

II. RATIO IN UNION OF INDIA V. MOHIT MINERALS (2022):
Dealing with the levy of IGST on ocean freight, a 3-Judge Bench held:
1. Non-Binding Nature of Recommendations:
   The word "recommendation" in Article 279A(4) must be given its ordinary meaning. The GST Council's decisions are not binding legal mandates on Parliament or State Legislatures.
2. Legislative Supremacy:
   If GST Council decisions were deemed legally binding, Article 246A would be rendered redundant, eroding the legislative sovereignty of State Assemblies. The Council functions as a collaborative deliberative body, not a parallel supreme legislature.
3. Uncooperative Federalism Recognized:
   The Court observed that federalism is not a static monolith. The Constitution accommodates "uncooperative federalism", where States legitimately challenge the Centre to renegotiate federal compacts.

III. THE VOTING ARCHITECTURE (ARTICLE 279A(9)):
Decisions of the Council require a 75% majority of the weighted votes of members present and voting:
- Central Government: Weighted at 1/3rd (33.33%) of total votes.
- All State Governments Combined: Weighted at 2/3rds (66.67%) of total votes.
Constitutional Consequences:
- The Centre enjoys a structural veto: No decision can pass without Central support, as States collectively can muster at most 66.67%.
- States require Central consensus: Conversely, the Centre needs the support of at least 19 States to reach 75%.

CONCLUSION:
Mohit Minerals balances fiscal unity with legislative federalism. While harmonized taxation is an economic necessity, the GST Council must operate through persuasion and consensus rather than constitutional coercion.`,
    scoringRubric: [
      { criterion: 'Textual analysis of Article 246A simultaneous legislative power', marks: 3.5 },
      { criterion: 'Mohit Minerals (2022) ratio on recommendatory status of Art 279A', marks: 4.5 },
      { criterion: 'Analysis of weighted voting mathematics & Central veto power', marks: 4 },
      { criterion: 'Cooperative vs uncooperative federalism synthesis and conclusion', marks: 3 }
    ]
  },

  // =========================================================================
  // 12. DELHI SERVICES & ARTICLE 239AA (2023 CONSTITUTION BENCH & ACT)
  // =========================================================================
  {
    id: 'mains-15m-delhi-services-art239aa-conflict',
    title: 'Constitutional Status of GNCTD under Article 239AA: Services and Federal Balance',
    topicId: 'art-239aa-special-provisions-delhi',
    marksCategory: 15,
    examCategory: 'UPSC_GS2',
    examsAppeared: ['UPSC CSE Mains GS-2 2023, 2024', 'DJS 2024', 'UP PCS-J 2023'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~11 Mins',
    targetWordMin: 240,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~35 lines)',
    targetTimeMinutes: 11,
    questionText: 'Analyze the constitutional tug-of-war over control of civil services in the National Capital Territory of Delhi. Contrast the 5-Judge Constitution Bench ruling in Govt. of NCT of Delhi v. Union of India (2023) with the Government of National Capital Territory of Delhi (Amendment) Act, 2023.',
    coreIssues: [
      'Article 239AA(3)(a): Legislative assembly powers over State List and Concurrent List except Entries 1 (Public Order), 2 (Police), and 18 (Land).',
      'Control over Entry 41 (State Public Services): Triple chain of accountability (Civil Service -> Council of Ministers -> Legislative Assembly -> Electorate).',
      'The May 2023 Constitution Bench ratio affirming GNCTD control over bureaucracy.',
      'The GNCTD Amendment Act, 2023: Creation of National Capital Civil Service Authority (NCCSA) and overriding powers to the Lieutenant Governor.'
    ],
    examinerExpectation:
      'Candidate must explain Article 239AA. Detail the May 2023 5-Judge Constitution Bench judgment (CJI Chandrachud): Democratic accountability requires elected ministers to control civil servants in departments within their legislative competence (Entry 41). Contrast this with the 2023 Amendment Act enacting Section 45D and establishing the NCCSA with LG veto. Mention reference to a larger bench.',
    essentialCitations: [
      'Govt. of NCT of Delhi v. Union of India ((2023) 9 SCC 1, Services Bench)',
      'Govt. of NCT of Delhi v. Union of India ((2018) 8 SCC 501, 5-Judge Bench)',
      'Government of National Capital Territory of Delhi (Amendment) Act, 2023'
    ],
    hoverIntel: {
      topicName: 'Article 239AA & Delhi Services Dispute (2023)',
      topicPillar: 'Part VIII: Union Territories & Asymmetric Federalism (Article 239AA)',
      examImportance: '⭐⭐⭐⭐⭐ High Yield Constitutional Conflict Essay',
      examFrequency: 'Featured in UPSC Mains GS-2 2023 and multiple Delhi Judicial exams',
      weightagePattern: '15 Marks • 250 Words (1.5 Pages)',
      targetTimeMinutes: 11,
      examinerTrapWarning:
        'Trap Alert: Be precise about what Article 239AA(3)(a) excludes! It excludes ONLY three entries: Public Order (Entry 1), Police (Entry 2), and Land (Entry 18). It does NOT exclude Entry 41 (State Public Services)!',
      recentTrendAlert: 'The constitutional validity of the 2023 Amendment Act is referred to a 5-Judge Constitution Bench.',
      coreArticles: ['Article 239AA', 'Article 239AB', 'Entry 41 List II', 'Article 73'],
      benchmarkCases: ['GNCTD (2023)', 'GNCTD (2018)']
    },
    answerBlueprint: {
      step1Intro: 'The Sui Generis Status of Delhi: Inserted via the 69th CAA (1991), Article 239AA confers a hybrid status on Delhi—a Union Territory with a democratically elected Legislative Assembly and Cabinet. Under Art. 239AA(3)(a), the Assembly can legislate on List II and List III except Public Order (Entry 1), Police (Entry 2), and Land (Entry 18).',
      step2DoctrinalCore: 'The Triple Chain of Accountability (May 2023 Ruling): A unanimous 5-Judge Constitution Bench held that civil servants must be accountable to the elected ministers; ministers are accountable to the legislature; and the legislature is accountable to the electorate. Severing control over civil servants (Entry 41) strips elected ministers of administrative governance.',
      step3PrecedentEvolution: 'The Legislative Counter-Strike (2023 Amendment Act): Following the verdict, the Union promulgated an Ordinance (later enacted as GNCTD Amendment Act, 2023), establishing the National Capital Civil Service Authority (NCCSA) comprising the Chief Minister and two senior Union-appointed bureaucrats, with final veto power vested in the Lieutenant Governor.',
      step4Conclusion: 'Federalism and Democratic Governance: While Article 239AA(3)(b) empowers Parliament to make laws for Delhi on any subject, completely divesting an elected government of executive control tests the boundaries of representative democracy and federal trust.'
    },
    fullModelAnswer: `I. CONSTITUTIONAL ARCHITECTURE OF ARTICLE 239AA:
The 69th Constitutional Amendment Act, 1991 carved out a unique model for the National Capital Territory:
- Representative Assembly: Article 239AA created an elected Legislative Assembly and a Council of Ministers headed by a Chief Minister.
- Explicit Carve-Outs [Art. 239AA(3)(a)]: The Assembly can legislate on all subjects in the State List and Concurrent List EXCEPT:
  1. Public Order (Entry 1)
  2. Police (Entry 2)
  3. Land (Entry 18)
All other entries, including Entry 41 (State Public Services), remain within the legislative and executive competence of the elected government.

II. THE 2023 CONSTITUTION BENCH VERDICT:
In Govt. of NCT of Delhi v. Union of India (May 2023), a unanimous 5-Judge Bench headed by CJI D.Y. Chandrachud ruled:
1. Triple Chain of Democratic Accountability:
   The Court held that representative democracy operates on a threefold chain:
   - Civil servants are accountable to the elected Minister.
   - The Minister is accountable to the Legislative Assembly.
   - The Assembly is accountable to the sovereign electorate.
   If civil servants function without answering to the elected Minister, the democratic chain is broken, and cabinet governance is rendered an illusion.
2. Control over "Services":
   The Court declared that executive control over officers posted in departments under the Delhi Government (excluding Police, Public Order, and Land) belongs to the elected GNCTD, not the Lieutenant Governor.

III. THE STATUTORY COUNTER-MEASURE (2023 AMENDMENT ACT):
Parliament invoked Article 239AA(7) and enacted the GNCTD (Amendment) Act, 2023:
1. National Capital Civil Service Authority (NCCSA):
   Created a statutory body comprising the Chief Minister (Chairman), the Chief Secretary of Delhi, and the Principal Home Secretary (both Union-appointed). Decisions are taken by majority vote, allowing the two bureaucrats to outvote the Chief Minister.
2. Lieutenant Governor's Absolute Veto:
   The LG is given final discretion to accept or reject the recommendations of the NCCSA, effectively transferring control of services back to the Centre.

CONCLUSION:
The Delhi governance dispute tests the limits of cooperative federalism. While Delhi is the national capital requiring Union security safeguards, extinguishing elected executive authority over civil servants challenges the constitutional morality articulated in the 2018 and 2023 Constitution Bench verdicts.`,
    scoringRubric: [
      { criterion: 'Article 239AA textual carve-outs and sui generis status of Delhi', marks: 3.5 },
      { criterion: 'May 2023 Constitution Bench ratio & "Triple Chain of Accountability"', marks: 4.5 },
      { criterion: 'Provisions of the 2023 Amendment Act (NCCSA structure & LG veto)', marks: 4 },
      { criterion: 'Federal balance, constitutional morality & current legal posture', marks: 3 }
    ]
  },

  // =========================================================================
  // 13. CRIMINALIZATION OF POLITICS & SECTION 8(4) RPA (LILY THOMAS)
  // =========================================================================
  {
    id: 'mains-15m-criminalization-politics-sec8-rpa',
    title: 'Criminalization of Politics: Disqualification under Section 8 RPA and Lily Thomas',
    topicId: 'art-102-disqualification-mps-mlas',
    marksCategory: 15,
    examCategory: 'UPSC_GS2',
    examsAppeared: ['UPSC CSE Mains GS-2 2023, 2024', 'DJS 2023', 'UP PCS-J 2023'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~11 Mins',
    targetWordMin: 240,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~35 lines)',
    targetTimeMinutes: 11,
    questionText: 'Analyze the constitutional mechanism of disqualification of legislators upon criminal conviction. How did the Supreme Court in Lily Thomas v. Union of India (2013) invalidate Section 8(4) of the Representation of the People Act, 1951? Examine the impact of stay on conviction vs stay on sentence.',
    coreIssues: [
      'Articles 102(1)(e) and 191(1)(e): Constitutional disqualification under laws enacted by Parliament.',
      'Section 8(1), 8(2), and 8(3) of the RPA, 1951: Conviction for specified offences or sentences of 2+ years.',
      'Section 8(4) of the RPA: 3-month immunity window for sitting MPs/MLAs to file an appeal.',
      'Invalidation of Section 8(4) in Lily Thomas (2013) on lack of legislative competence.',
      'Distinction between stay of sentence (Sec 389 CrPC/Sec 430 BNSS) and stay of conviction (Rahul Gandhi v. Purnesh Modi 2023).'
    ],
    examinerExpectation:
      'Candidate must explain Articles 102(1)(e) & 191(1)(e). Detail Lily Thomas (2013 per Patnaik J.): Parliament cannot create differential disqualification thresholds between candidates and sitting members. Analyze the Lok Prahari (2018) and Rahul Gandhi (2023) clarification: only an explicit judicial stay on the CONVICTION revives membership; a mere suspension of sentence does not erase disqualification.',
    essentialCitations: [
      'Lily Thomas v. Union of India ((2013) 7 SCC 653)',
      'Lok Prahari v. Election Commission of India ((2018) 16 SCC 321)',
      'Public Interest Foundation v. Union of India ((2018) 10 SCC 1)',
      'Rahul Gandhi v. Purnesh Modi ((2024) 2 SCC 595)'
    ],
    hoverIntel: {
      topicName: 'Disqualification of Lawmakers (Lily Thomas & Sec 8 RPA)',
      topicPillar: 'Electoral Law & Legislative Integrity (Articles 102, 191, RPA 1951)',
      examImportance: '⭐⭐⭐⭐⭐ High Yield UPSC GS-2 & Judiciary Core',
      examFrequency: 'Direct question in UPSC GS-2 and Judicial criminal/civil law papers',
      weightagePattern: '15 Marks • 250 Words (1.5 Pages)',
      targetTimeMinutes: 11,
      examinerTrapWarning:
        'Trap Alert: Candidates confuse suspension of sentence with stay of conviction! Disqualification under Section 8(3) operates automatically on conviction. Only an appellate STAY ON CONVICTION (not mere bail or suspension of execution of sentence under Sec 389 CrPC) suspends the disqualification!',
      recentTrendAlert: 'Clarified by 3-Judge Bench in Rahul Gandhi (2023) regarding Section 8(3) maximum sentence misuse.',
      coreArticles: ['Article 102(1)(e)', 'Article 191(1)(e)', 'Section 8 RPA 1951'],
      benchmarkCases: ['Lily Thomas (2013)', 'Lok Prahari (2018)', 'Rahul Gandhi (2023)']
    },
    answerBlueprint: {
      step1Intro: 'Constitutional Matrix of Disqualification: Articles 102(1)(e) and 191(1)(e) empower Parliament to prescribe disqualifications for membership of Parliament and State Assemblies respectively. Under Section 8(3) of the Representation of the People Act (RPA), 1951, a person convicted of any offence and sentenced to imprisonment for not less than two years stands disqualified from the date of conviction plus six years post-release.',
      step2DoctrinalCore: 'The Invalidation of Section 8(4) in Lily Thomas (2013): Section 8(4) provided a special 3-month immunity shield for sitting legislators: if an MP/MLA filed an appeal within 3 months, disqualification did not take effect until the appeal was disposed of. In Lily Thomas (2013), the Supreme Court held Section 8(4) ultra vires. Articles 102(1)(e) and 191(1)(e) do not permit Parliament to introduce a discriminatory distinction protecting sitting members while immediately barring new candidates.',
      step3PrecedentEvolution: 'Stay of Conviction vs. Suspension of Sentence: In Lok Prahari (2018) and Rahul Gandhi v. Purnesh Modi (2023), the Court clarified: (1) Mere suspension of execution of sentence or grant of bail does not lift disqualification; (2) The appellate court must explicitly stay the conviction under Section 389 CrPC/Sec 430 BNSS on extraordinary grounds, upon which the disqualification becomes dormant.',
      step4Conclusion: 'Democratic Cleanse vs Legislative Malice: Immediate disqualification sanitizes politics, but appellate courts must scrutinize whether maximum defamation sentences are politically engineered to trigger Section 8(3) automatic disqualification.'
    },
    fullModelAnswer: `I. CONSTITUTIONAL AND STATUTORY MATRIX:
Articles 102(1)(e) and 191(1)(e) authorize Parliament to lay down disqualifications for holding legislative office.
Under Section 8(3) of the Representation of the People Act, 1951 (RPA):
- A lawmaker convicted of any criminal offence and sentenced to not less than two years of imprisonment is disqualified from the date of conviction.
- The disqualification continues during imprisonment and for a further period of six years following release.

II. THE RATIO DECIDENDI IN LILY THOMAS (2013):
Section 8(4) of the RPA historically granted a 3-month grace period to sitting MPs and MLAs: if an appeal or revision was filed within 90 days, the disqualification did not take effect until the final disposal of the appeal.
In Lily Thomas v. Union of India (2013), a 2-Judge Bench (Patnaik and Mukhopadhaya, JJ.) held Section 8(4) unconstitutional:
1. Lack of Legislative Competence: Articles 102(1)(e) and 191(1)(e) use the identical formulation for candidates and sitting members. Parliament has no constitutional competence under the Seventh Schedule to create a special shield protecting sitting legislators from automatic vacation of seat under Articles 101(3)(a) and 190(3)(a).
2. Immediate Disqualification: Disqualification takes effect automatically at the moment of conviction and sentencing.

III. STAY OF CONVICTION VS. SUSPENSION OF SENTENCE:
The operationalization of Lily Thomas generated procedural controversies:
1. Mere Suspension of Sentence Insufficient:
   Under Section 389 CrPC (now Section 430 BNSS), an appellate court routinely suspends the sentence and grants bail. In Lok Prahari (2018), the Supreme Court ruled that suspension of sentence does NOT erase the conviction; the disqualification remains active.
2. Requirement of Explicit Stay on Conviction:
   Disqualification is arrested ONLY if the appellate court exercises its rare power to pass an express order staying the conviction itself.
3. The Rahul Gandhi Ruling (2023):
   In Rahul Gandhi v. Purnesh Modi (2023), a 3-Judge Bench stayed the conviction in a criminal defamation case, noting that the trial judge awarded the maximum sentence of 2 years without assigning reasons, which triggered the threshold of Section 8(3) and deprived an entire parliamentary constituency of representation.

CONCLUSION:
Lily Thomas eliminated political shelter for convicted felons. While automatic disqualification safeguards legislative sanctity, the judiciary must vigilantly guard against the weaponization of maximum sentences to disenfranchise elected representatives.`,
    scoringRubric: [
      { criterion: 'Articles 102(1)(e), 191(1)(e) and Section 8(3) RPA statutory scheme', marks: 3.5 },
      { criterion: 'Lily Thomas (2013) constitutional reasoning on Section 8(4) invalidity', marks: 4.5 },
      { criterion: 'Distinction between suspension of sentence and stay of conviction (Lok Prahari & Rahul Gandhi)', marks: 4 },
      { criterion: 'Democratic accountability, representation concerns & conclusion', marks: 3 }
    ]
  },

  // =========================================================================
  // 14. UNIFORM CIVIL CODE (ARTICLE 44) VS RELIGIOUS FREEDOM (ARTS 25-26)
  // =========================================================================
  {
    id: 'mains-15m-ucc-art44-pluralism-clash',
    title: 'Uniform Civil Code under Article 44 vs Religious Autonomy under Articles 25 and 26',
    topicId: 'art-44-uniform-civil-code',
    marksCategory: 15,
    examCategory: 'UPSC_GS2',
    examsAppeared: ['UPSC CSE Mains GS-2 2023, 2024', 'UP PCS-J 2023', 'DJS 2024', 'UPSC Law Optional 2024'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~11 Mins',
    targetWordMin: 240,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~35 lines)',
    targetTimeMinutes: 11,
    questionText: 'Is the implementation of a Uniform Civil Code (UCC) under Article 44 reconcilable with freedom of conscience and religious management under Articles 25 and 26? Critically examine with reference to Shayara Bano, the 21st Law Commission Consultation Paper, and the Uttarakhand UCC model.',
    coreIssues: [
      'Directive Principle of State Policy: Article 44 ("State shall endeavour to secure for the citizens a uniform civil code").',
      'Fundamental Rights tension: Article 25(1) (Freedom of conscience & profession of religion) vs secular civil laws.',
      'Article 25(2)(a): State power to regulate or restrict economic, financial, political or other secular activities associated with religious practice.',
      'Gender Justice: Article 14 (Equality) and Article 15(1) (Non-discrimination on sex) trumping personal law patriarchy.',
      'The 21st Law Commission view (UCC "neither necessary nor desirable at this stage") vs piecemeal reforms (Uttarakhand Act 2024).'
    ],
    examinerExpectation:
      'Candidate must balance Article 44 (DPSP) with Articles 25 & 26 (FRs). Explain the "secular activity" carve-out under Art 25(2)(a) (marriage, succession, adoption are secular civil transactions, not essential religious practices). Detail judicial exhortations from Shah Bano (1985), Sarla Mudgal (1995), John Vallamattom (2003), and Shayara Bano (2017). Contrast with 21st Law Commission\'s emphasis on eliminating discrimination within personal laws rather than enforcing uniform codification.',
    essentialCitations: [
      'Shah Bano Begum v. Mohd. Ahmed Khan ((1985) 2 SCC 556)',
      'Sarla Mudgal v. Union of India ((1995) 3 SCC 635)',
      'John Vallamattom v. Union of India ((2003) 6 SCC 611)',
      'Shayara Bano v. Union of India ((2017) 9 SCC 1)',
      '21st Law Commission Consultation Paper on Reform of Family Law (2018)'
    ],
    hoverIntel: {
      topicName: 'Uniform Civil Code (Article 44) & Gender Justice',
      topicPillar: 'Part IV: DPSPs & Pluralism (Articles 44, 25, 26, 14, 15)',
      examImportance: '⭐⭐⭐⭐⭐ High Yield National Debate Essay',
      examFrequency: 'Top recurring essay in UPSC GS-2 and Judicial Mains Civil Law papers',
      weightagePattern: '15 Marks • 250 Words (1.5 Pages)',
      targetTimeMinutes: 11,
      examinerTrapWarning:
        'Trap Alert: Avoid taking a partisan political stance! Frame the answer strictly through the prism of Gender Justice (Articles 14, 15, 21), the Essential Religious Practices (ERP) test, and the distinction between religious doctrine and secular civil transactions under Article 25(2)(a)!',
      recentTrendAlert: 'Uttarakhand became the first state post-independence to enact a UCC in 2024.',
      coreArticles: ['Article 44', 'Article 25', 'Article 26', 'Article 14', 'Article 15'],
      benchmarkCases: ['Shayara Bano (2017)', 'Shah Bano (1985)', 'Sarla Mudgal (1995)']
    },
    answerBlueprint: {
      step1Intro: 'Constitutional Tension between Article 44 and Part III: Article 44 directs the State to endeavour to secure for all citizens a Uniform Civil Code (UCC) throughout India. However, religious minorities perceive mandatory uniformity as an encroachment upon Articles 25 (freedom of religion) and 26 (freedom to manage religious affairs).',
      step2DoctrinalCore: 'The Carve-out under Article 25(2)(a) and the ERP Test: Article 25(1) is explicitly subject to public order, morality, health, and other provisions of Part III. Article 25(2)(a) empowers the State to regulate secular activities associated with religion. Matters of marriage, succession, inheritance, and maintenance are civil status rights, not essential religious practices (ERP) core to theological faith.',
      step3PrecedentEvolution: 'Judicial Exhortations: (1) Shah Bano (1985): Y.V. Chandrachud CJI regretted that Article 44 remained a "dead letter"; (2) Sarla Mudgal (1995): Bigamous conversion to Islam to escape monogamy struck down; (3) Shayara Bano (2017): Triple Talaq struck down as manifestly arbitrary under Article 14.',
      step4Conclusion: 'Law Commission vs Uttarakhand Model: The 21st Law Commission (2018) warned that uniform law should not mean uniform culture, urging internal amendments to end gender discrimination. The Uttarakhand UCC (2024) codified marriage, succession, and mandatory live-in registration, illustrating the tension between uniform gender justice and personal liberty.'
    },
    fullModelAnswer: `I. THE CONSTITUTIONAL DILEMMA:
Article 44 of the Directive Principles of State Policy (Part IV) enjoins: "The State shall endeavour to secure for the citizens a uniform civil code throughout the territory of India."
This directive intersects directly with Part III fundamental rights:
- Article 25: Freedom of conscience, profession, practice, and propagation of religion.
- Article 26: Freedom of religious denominations to manage their own affairs in matters of religion.

II. THE DOCTRINAL RESOLUTION: SECULAR REGULATION & GENDER JUSTICE:
1. Article 25(2)(a) Secular Carve-Out:
   Freedom of religion under Article 25 is not absolute; it is subject to public order, morality, health, and other Part III rights. Article 25(2)(a) specifically empowers the State to legislate upon economic, financial, or other secular activities associated with religious practices. Civil laws governing marriage, divorce, maintenance, and inheritance are secular legal transactions, not theological rituals.
2. The Essential Religious Practices (ERP) Test:
   In Shayara Bano v. Union of India (2017), the Supreme Court struck down Talaq-e-Biddat (instant triple talaq), holding that practices that violate gender equality under Article 14 and dignity under Article 21 cannot claim immunity as essential religious practices.

III. JUDICIAL MILESTONES ON ARTICLE 44:
- Mohd. Ahmed Khan v. Shah Bano Begum (1985): SC held that Section 125 CrPC applies universally to all citizens regardless of religion, emphasizing that Article 44 fosters national integration.
- Sarla Mudgal v. Union of India (1995) & Lily Thomas (2000): SC held that a Hindu husband cannot convert to Islam solely to contract a second marriage without dissolving the first, calling upon the Union to enact a UCC to prevent legal evasion.
- John Vallamattom v. Union of India (2003): Struck down Section 118 of the Indian Succession Act as discriminatory against Christians.

IV. COMPETING REFORM PATHWAYS:
1. 21st Law Commission Report (2018): Concluded that a uniform civil code is "neither necessary nor desirable at this stage." It recommended reforming individual personal laws internally to eliminate gender discrimination, preserving cultural pluralism.
2. The Uttarakhand UCC Model (2024): First state to operationalize UCC, standardizing marriage age, prohibiting polygamy, mandating equal inheritance for daughters, and introducing controversial compulsory registration for live-in relationships.

CONCLUSION:
The true constitutional soul of Article 44 is Gender Justice rather than majoritarian homogenization. Harmonizing Article 44 with Article 25 requires shedding patriarchal inequities across all personal laws while safeguarding diverse cultural identities.`,
    scoringRubric: [
      { criterion: 'Constitutional tension between Article 44 (DPSP) and Articles 25/26 (FRs)', marks: 3.5 },
      { criterion: 'Article 25(2)(a) secular activity demarcation & Essential Religious Practice test', marks: 4 },
      { criterion: 'Analysis of key case law (Shah Bano, Sarla Mudgal, Shayara Bano)', marks: 4 },
      { criterion: '21st Law Commission critique vs Uttarakhand UCC model & balanced conclusion', marks: 3.5 }
    ]
  },

  // =========================================================================
  // 15. PASSIVE EUTHANASIA & LIVING WILLS (COMMON CAUSE 2023)
  // =========================================================================
  {
    id: 'mains-15m-passive-euthanasia-common-cause-2023',
    title: 'Right to Die with Dignity, Passive Euthanasia & Simplified 2023 Guidelines',
    topicId: 'art-21-right-to-life-liberty',
    marksCategory: 15,
    examCategory: 'DJS',
    examsAppeared: ['DJS 2023, 2024', 'UPSC Law Optional 2023', 'UP PCS-J 2024'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~11 Mins',
    targetWordMin: 240,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~35 lines)',
    targetTimeMinutes: 11,
    questionText: 'Trace the judicial evolution from Gian Kaur to Common Cause (2018) recognizing the Right to Die with Dignity under Article 21. Why did the Constitution Bench in 2023 modify its earlier guidelines to make Advance Medical Directives (Living Wills) practically workable?',
    coreIssues: [
      'The negative vs positive right debate: Does Right to Life under Article 21 include Right to Die (P. Rathinam vs Gian Kaur)?',
      'Distinction between Active Euthanasia (illegal) and Passive Euthanasia (withdrawing life support).',
      'Common Cause (2018): Right to die with dignity as an intrinsic facet of Article 21 and recognition of Advance Medical Directives (Living Wills).',
      'The 2023 Modification Bench: Removing the bureaucratic hurdles (Judicial Magistrate counter-signing, convoluted medical boards) that rendered 2018 guidelines unworkable.'
    ],
    examinerExpectation:
      'Candidate must trace: (1) Gian Kaur (1996) overruling P. Rathinam; (2) Aruna Shanbaug (2011) permitting passive euthanasia under High Court supervision; (3) Common Cause (2018, 5-Judge Bench) recognizing right to die with dignity; (4) The 2023 5-Judge modification order per Justice K.M. Joseph easing living will execution before a notary instead of Magistrate and cutting medical board response time to 48 hours.',
    essentialCitations: [
      'Common Cause (A Regd. Society) v. Union of India ((2018) 5 SCC 1, 5-Judge Bench)',
      'Common Cause v. Union of India ((2023) SCC OnLine SC 99, Modification Order)',
      'Gian Kaur v. State of Punjab ((1996) 2 SCC 648)',
      'Aruna Ramchandra Shanbaug v. Union of India ((2011) 4 SCC 454)'
    ],
    hoverIntel: {
      topicName: 'Passive Euthanasia & Living Wills (Common Cause 2023)',
      topicPillar: 'Part III: Right to Life, Bodily Autonomy & Bioethics (Article 21)',
      examImportance: '⭐⭐⭐⭐⭐ High Yield Bioethical Constitutional Jurisprudence',
      examFrequency: 'Repeated core problem in Judicial Mains and UPSC Law Optional',
      weightagePattern: '15 Marks • 250 Words (1.5 Pages)',
      targetTimeMinutes: 11,
      examinerTrapWarning:
        'Trap Alert: Do not state that ACTIVE euthanasia (administering a lethal injection) is legal in India! Only PASSIVE euthanasia (withholding or withdrawing artificial life support systems from a terminally ill patient in irreversible coma) is legally permitted!',
      recentTrendAlert: 'The 2023 Constitution Bench overhauled procedure, eliminating cumbersome magistrate approval.',
      coreArticles: ['Article 21', 'Article 14', 'Article 19(1)(a)'],
      benchmarkCases: ['Common Cause (2018)', 'Common Cause (2023)', 'Gian Kaur (1996)']
    },
    answerBlueprint: {
      step1Intro: 'Evolution of Article 21 and Euthanasia: In Gian Kaur (1996), a 5-Judge Bench held that the "right to life" under Article 21 does not include the "right to die". However, the Court distinguished suicide from the right of a dying patient in a persistent vegetative state to die with human dignity without unnatural vegetative prolongation.',
      step2DoctrinalCore: 'The Landmark 2018 Common Cause Judgment: A 5-Judge Constitution Bench recognized: (1) Right to die with dignity is an inseparable part of Article 21; (2) Passive euthanasia is legally valid; (3) An adult of sound mind has the autonomy to execute an "Advance Medical Directive" (Living Will) directing that medical treatment be withheld if they become terminally ill.',
      step3PrecedentEvolution: 'The 2023 Simplification Bench (K.M. Joseph J.): The 2018 guidelines were so cumbersome (requiring Judicial Magistrate counter-signatures and double 3-doctor boards) that not a single living will could be operationalized. In 2023, the Court modified the rules: (a) Execution before a notary/gazetted officer replaces Magistrate; (b) Medical board timeline capped at 48 hours; (c) Inclusion of digital registries.',
      step4Conclusion: 'Balancing Autonomy vs Sanctity of Life: Respecting bodily integrity and informed refusal of futile treatment preserves dignity at the end of life while robust safeguards prevent euthanasia abuse.'
    },
    fullModelAnswer: `I. JUDICIAL EVOLUTION OF ARTICLE 21 & RIGHT TO DIE:
1. P. Rathinam (1994) vs. Gian Kaur (1996):
   In P. Rathinam, the Supreme Court declared Section 309 IPC (attempt to suicide) unconstitutional. In Gian Kaur (1996), a 5-Judge Bench overruled Rathinam, holding that the "right to life" does not encompass a "right to die". However, the Court distinguished between terminating an otherwise active life (suicide) and the right of a dying patient to have the process of dying accompanied by human dignity.
2. Aruna Shanbaug (2011):
   The Supreme Court permitted passive euthanasia (withdrawing life support) for a patient in a permanent vegetative state (PVS), but made High Court approval mandatory under Article 226.

II. THE 2018 COMMON CAUSE CHARTER:
In Common Cause v. Union of India (2018), a unanimous 5-Judge Constitution Bench ruled:
- Decisional Autonomy: An individual's right to bodily integrity, self-determination, and personal privacy under Article 21 (Puttaswamy) includes the right to refuse futile medical intervention.
- Advance Medical Directives (Living Wills): An adult possessing legal capacity can document advance instructions specifying whether life-sustaining systems should be withdrawn in terminal irreversible conditions.

III. THE 2023 SIMPLIFICATION ORDER:
The 2018 procedure proved practically unworkable due to excessive bureaucratic friction. In 2023, a 5-Judge Bench headed by Justice K.M. Joseph substantially simplified the guidelines:
1. Execution of Living Will:
   - 2018: Required presence of two attesting witnesses and counter-signature by a Judicial Magistrate of First Class (JMFC).
   - 2023 Modification: Can now be executed before a Notary Public or Gazetted Officer in the presence of two witnesses, dispensing with court visits.
2. Hospital Medical Board (Primary & Secondary):
   - Primary Medical Board (treating hospital) and Secondary Board must each include a nominee of the Chief District Medical Officer.
   - The time limit for boards to convey their opinion on withdrawing life support was capped at 48 hours to prevent prolonged suffering.
3. Custody of Directive: The document is uploaded to the National Health Digital Record and preserved with local municipal bodies.

CONCLUSION:
Common Cause (2023) harmonizes medical technology with human dignity. By demystifying the living will procedure, the Supreme Court ensured that the constitutional right to die with dignity does not remain an abstract paper decree for terminally ill citizens.`,
    scoringRubric: [
      { criterion: 'Evolution from Gian Kaur to Aruna Shanbaug and Article 21 dignity', marks: 3.5 },
      { criterion: 'Common Cause (2018) foundational ratio on bodily autonomy & Living Wills', marks: 4 },
      { criterion: 'Specific procedural simplifications introduced in the 2023 Modification Order', marks: 4.5 },
      { criterion: 'Bioethical balance between state interest in life and individual autonomy', marks: 3 }
    ]
  },

  // =========================================================================
  // 16. INTER-STATE RIVER WATER DISPUTES (ARTICLE 262)
  // =========================================================================
  {
    id: 'mains-15m-river-water-disputes-art262',
    title: 'Inter-State River Water Disputes (Article 262) & Bar on Court Jurisdiction',
    topicId: 'art-262-inter-state-water-disputes',
    marksCategory: 15,
    examCategory: 'UPSC_GS2',
    examsAppeared: ['UPSC CSE Mains GS-2 2022, 2023', 'UPSC Law Optional 2023', 'Karnataka Judicial 2024'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~11 Mins',
    targetWordMin: 240,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~35 lines)',
    targetTimeMinutes: 11,
    questionText: 'Explain the constitutional mechanism for resolving Inter-State River Water Disputes under Article 262. Does the constitutional bar under Article 262(2) completely oust the jurisdiction of the Supreme Court under Article 136? Discuss in light of the Cauvery Water Disputes rulings.',
    coreIssues: [
      'Constitutional distribution: Entry 17 List II (State List: water supplies, irrigation) vs Entry 56 List I (Union List: regulation and development of inter-state rivers in public interest).',
      'Article 262(1): Parliament may by law provide for the adjudication of any dispute regarding inter-state waters.',
      'Article 262(2): Parliament may by law provide that neither the Supreme Court nor any other court shall exercise jurisdiction in respect of any such dispute (Section 11 Inter-State River Water Disputes Act, 1956).',
      'The Supreme Court\'s assertion of jurisdiction: Cauvery Water Disputes Tribunal (1993 Reference) and Cauvery Appeals (2018) affirming that Article 136 plenary appellate power cannot be ousted by ordinary statute.'
    ],
    examinerExpectation:
      'Candidate must analyze Article 262 and the 1956 Act. Address the jurisdictional conflict: Section 11 of the 1956 Act bars court jurisdiction. Explain how the Supreme Court in the Cauvery Water Disputes (2018) held that while it cannot adjudicate raw water allocation directly as an original trial court, once a Tribunal delivers an award, Article 136 plenary appellate jurisdiction is fully attracted to review the award for legal and constitutional errors.',
    essentialCitations: [
      'In Re: Cauvery Water Disputes Tribunal (1993 Supp (1) SCC 96, Presidential Reference)',
      'State of Karnataka v. State of Tamil Nadu ((2018) 4 SCC 1, Cauvery Judgment)',
      'Inter-State River Water Disputes Act, 1956 (Section 11)',
      'Sarkaria Commission Report on Centre-State Relations (1988, Ch. XVII)'
    ],
    hoverIntel: {
      topicName: 'Inter-State Water Disputes (Article 262 & Cauvery)',
      topicPillar: 'Part XI: Federal Relations & Inter-State Coordination (Article 262)',
      examImportance: '⭐⭐⭐⭐⭐ High Yield Federal Dispute Essay',
      examFrequency: 'Every 2 years in UPSC Mains GS-2 and Law Optional Paper',
      weightagePattern: '15 Marks • 250 Words (1.5 Pages)',
      targetTimeMinutes: 11,
      examinerTrapWarning:
        'Trap Alert: Candidates often mistakenly write that Article 131 (Original Jurisdiction) applies to water disputes! Article 131 is EXPLICITLY subject to Article 262; the Supreme Court cannot hear river water disputes under Article 131! Supreme Court intervention occurs ONLY through Article 136 (Special Leave Appeals against Tribunal awards)!',
      recentTrendAlert: 'Inter-State River Water Disputes (Amendment) Bill seeking a standalone single permanent tribunal.',
      coreArticles: ['Article 262', 'Article 131', 'Article 136', 'Entry 56 List I', 'Entry 17 List II'],
      benchmarkCases: ['Cauvery Judgment (2018)', 'Cauvery Reference (1993)']
    },
    answerBlueprint: {
      step1Intro: 'Legislative Competence & Article 262: Water is a State subject under Entry 17, List II, but subject to Entry 56, List I (Union regulation of inter-state rivers). Recognizing that river disputes are highly politicized, Article 262 empowers Parliament to enact adjudication laws and explicitly bar court jurisdiction under Article 262(2).',
      step2DoctrinalCore: 'The Statutory Architecture of the 1956 Act: Parliament enacted the Inter-State River Water Disputes Act, 1956. Section 11 ousts the jurisdiction of the Supreme Court and all other courts over water disputes referred to an ad-hoc Tribunal. The Tribunal\'s final award has the force of a decree of the Supreme Court.',
      step3PrecedentEvolution: 'Article 136 Override in Cauvery (2018): In State of Karnataka v. State of Tamil Nadu (2018), a 3-Judge Bench resolved the jurisdictional debate: (1) Article 131 original jurisdiction is expressly barred by Article 262; (2) However, Article 136 is an extraordinary constitutional appellate power forming part of the Basic Structure. Parliament cannot bar Article 136 through ordinary statute (Section 11). Once a Tribunal renders an award, the Supreme Court can review it under Art. 136.',
      step4Conclusion: 'Systemic Delays & Structural Reforms: Ad-hoc tribunals take decades (Cauvery took 28 years). The pending Inter-State River Water Disputes (Amendment) Bill proposes a single permanent tribunal with fixed timelines (2 years) and institutional data collection to foster cooperative river basin management.'
    },
    fullModelAnswer: `I. THE CONSTITUTIONAL ARCHITECTURE OF ARTICLE 262:
Water federalism in India is governed by a delicate constitutional balance:
- Entry 17, List II: Grants States competence over water supplies, irrigation, and drainage.
- Entry 56, List I: Grants Parliament paramount power to regulate and develop inter-state rivers in the public interest.

Recognizing that river disputes inflame sub-national passions, the framers created Article 262:
1. Article 262(1): Parliament may by law provide for the adjudication of any dispute or complaint with respect to the use, distribution, or control of inter-state waters.
2. Article 262(2): Parliament may by law provide that neither the Supreme Court nor any other court shall exercise jurisdiction in respect of any such dispute.
- Exclusion of Article 131: The non-obstante opening of Article 131 explicitly excludes inter-state river disputes from the original jurisdiction of the Supreme Court.

II. THE STATUTORY BARRIER: SECTION 11 OF THE 1956 ACT:
Pursuant to Article 262, Parliament enacted the Inter-State River Water Disputes (ISRWD) Act, 1956:
- Section 4: Central Government constitutes an ad-hoc Tribunal when negotiated settlement fails.
- Section 11: Bar of Jurisdiction: Neither the Supreme Court nor any other court shall entertain or exercise jurisdiction over any water dispute referred to a Tribunal.

III. THE JURISDICTIONAL HARMONIZATION UNDER ARTICLE 136 (CAUVERY 2018):
When the Cauvery Water Disputes Tribunal delivered its final award in 2007, riparian States filed Special Leave Petitions under Article 136. The Union objected, citing Section 11.
In State of Karnataka v. State of Tamil Nadu (2018), Dipak Misra CJI delivered a landmark clarification:
1. Article 136 Plenary Nature: Article 136 is an extraordinary constitutional power vested in the Supreme Court to grant leave against any tribunal order. It forms part of the Basic Structure and cannot be abrogated by ordinary parliamentary statute.
2. Demarcation of Roles: The Supreme Court cannot act as an original court of investigation to apportion water liters; that is the technical domain of the Tribunal. However, once the Tribunal renders an award, judicial review under Article 136 is fully available to correct errors of law, breach of natural justice, or perverse allocation.

CONCLUSION:
Article 262 shields water disputes from premature judicial politicization, but Article 136 ensures that final awards adhere to constitutional fairness. Implementing the Sarkaria Commission\'s recommendation for a permanent water tribunal and creating statutory River Basin Authorities are essential for sustainable hydro-federalism.`,
    scoringRubric: [
      { criterion: 'Constitutional distribution of legislative powers (Entry 17 List II vs Entry 56 List I)', marks: 3.5 },
      { criterion: 'Article 262 provisions and Section 11 ISRWD Act jurisdictional bar', marks: 4 },
      { criterion: 'Article 136 plenary review powers over Tribunal awards (Cauvery 2018)', marks: 4.5 },
      { criterion: 'Evaluation of tribunal delays, Sarkaria recommendations & conclusion', marks: 3 }
    ]
  },

  // =========================================================================
  // 17. ORDINANCE MAKING POWER (KRISHNA KUMAR SINGH 7-JUDGE BENCH 2017)
  // =========================================================================
  {
    id: 'mains-15m-ordinance-krishna-kumar-singh',
    title: 'Ordinance-Making Powers (Articles 123 & 213): Executive Lawmaking as Fraud on the Constitution',
    topicId: 'art-123-ordinance-making-power',
    marksCategory: 15,
    examCategory: 'UPSC_GS2',
    examsAppeared: ['UPSC CSE Mains GS-2 2022, 2023', 'DJS 2023', 'UP PCS-J 2023', 'Bihar Judicial 2024'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~11 Mins',
    targetWordMin: 240,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~35 lines)',
    targetTimeMinutes: 11,
    questionText: 'Is the ordinance-making power under Articles 123 and 213 a parallel source of law-making for the Executive? Examine how the 7-Judge Constitution Bench in Krishna Kumar Singh v. State of Bihar (2017) curtailed the practice of repromulgation and established judicial review over executive satisfaction.',
    coreIssues: [
      'Constitutional preconditions: Both Houses not in session, and President/Governor satisfied that circumstances exist requiring immediate action.',
      'Temporary emergency character vs parallel legislative track.',
      'Repromulgation of ordinances without legislative tabling: The Bihar Sanskrit Schools saga.',
      'Ratio of Krishna Kumar Singh (2017): Repromulgation is a fraud on the Constitution and subverts legislative supremacy.',
      'Mandatory tabling requirement: Ordinances cease to operate 6 weeks from reassembly; failure to lay is a constitutional violation.'
    ],
    examinerExpectation:
      'Candidate must explain Articles 123/213. Detail D.C. Wadhwa (1987) which condemned repromulgation. Dissect the 7-Judge Bench ruling in Krishna Kumar Singh (2017 per Chandrachud J.): (1) Ordinance power is emergency and conditional; (2) Executive satisfaction is subject to judicial review for bad faith; (3) Mandatory obligation to table ordinance before legislature; (4) Repromulgation is subversion of parliamentary democracy.',
    essentialCitations: [
      'Krishna Kumar Singh v. State of Bihar ((2017) 3 SCC 1, 7-Judge Bench)',
      'D.C. Wadhwa v. State of Bihar ((1987) 1 SCC 378)',
      'A.K. Roy v. Union of India ((1982) 1 SCC 271)',
      'R.C. Cooper v. Union of India ((1970) 1 SCC 248)'
    ],
    hoverIntel: {
      topicName: 'Ordinance Power & Repromulgation (Krishna Kumar Singh)',
      topicPillar: 'Union & State Executive • Extraordinary Lawmaking (Articles 123 & 213)',
      examImportance: '⭐⭐⭐⭐⭐ High Yield Constitutional Separation of Powers',
      examFrequency: 'Appears every 2 years in UPSC Mains GS-2 and Judicial Services',
      weightagePattern: '15 Marks • 250 Words (1.5 Pages)',
      targetTimeMinutes: 11,
      examinerTrapWarning:
        'Trap Alert: Candidates often claim that an ordinance automatically creates permanent legal rights that survive after the ordinance lapses! Krishna Kumar Singh categorically clarified that rights created by an ordinance do NOT automatically survive its lapse unless the legislature enacts a saving statute or the rights are irreversibly vested!',
      recentTrendAlert: '7-Judge Bench affirmed judicial review of executive satisfaction.',
      coreArticles: ['Article 123', 'Article 213', 'Article 50', 'Article 174'],
      benchmarkCases: ['Krishna Kumar Singh (2017)', 'D.C. Wadhwa (1987)', 'R.C. Cooper (1970)']
    },
    answerBlueprint: {
      step1Intro: 'Constitutional Architecture of Articles 123 and 213: Vests the President and Governors with the extraordinary power to promulgate ordinances during legislative recess when satisfied that "circumstances exist which render it necessary for him to take immediate action." It is an emergency power, not a parallel legislative substitute.',
      step2DoctrinalCore: 'The Repromulgation Scourge and D.C. Wadhwa (1987): In Bihar, successive governments bypassed the legislature by repromulgating ordinances for decades (the Bihar Sanskrit Education Ordinance was repromulgated repeatedly from 1989 to 1992). In D.C. Wadhwa (1987), the Supreme Court struck down repromulgation as a colorable exercise of power and a fraud on the Constitution.',
      step3PrecedentEvolution: 'The 7-Judge Benchmark in Krishna Kumar Singh (2017): A 7-Judge Constitution Bench ruled: (1) Mandatory Tabling: An ordinance MUST be laid before the legislature; failure to do so is a serious constitutional violation; (2) Judicial Review: The subjective satisfaction of the executive is justiciable; (3) Survival of Rights: Rights created by an unapproved ordinance do not survive its lapse unless irreversible or in public interest; (4) Repromulgation is Unconstitutional.',
      step4Conclusion: 'Democratic Imperative: Law-making belongs exclusively to the elected legislature (Article 50). Using ordinances to evade parliamentary debate strikes at the heart of representative democracy.'
    },
    fullModelAnswer: `I. EXTRAORDINARY AND CONDITIONAL NATURE OF ORDINANCE POWER:
Articles 123 (President) and 213 (Governor) provide that an ordinance may be promulgated only when:
1. Both Houses (or one House in bicameral states) are not in session; and
2. The President/Governor is satisfied that circumstances exist requiring immediate action.
- Not a Parallel Source: The power is emergency in character, designed to handle unforeseen exigencies, and cannot be used as an executive substitute for parliamentary debate.

II. THE EVOLUTION FROM D.C. WADHWA TO KRISHNA KUMAR SINGH:
1. D.C. Wadhwa v. State of Bihar (1987):
   The Supreme Court exposed that the Bihar government had promulgated 256 ordinances between 1967 and 1981, repromulgating them mechanically without placing them before the Assembly. The Court declared such mechanical repromulgation a "fraud on the Constitution."
2. Krishna Kumar Singh v. State of Bihar (2017, 7-Judge Constitution Bench):
   Dealing with the repromulgation of the Bihar Non-Government Sanskrit Schools Ordinance over several years, the 7-Judge Bench per D.Y. Chandrachud J. conclusively established:
   - Mandatory Laying: Placing an ordinance before the legislature is a mandatory constitutional duty. The executive cannot treat the ordinance as self-sustaining law.
   - Fraud on the Constitution: Repromulgation without tabling or legislative sanction subverts parliamentary supremacy and constitutes an unconstitutional usurpation of legislative power.
   - Judicial Review of Executive Satisfaction: The Court can scrutinize whether the "satisfaction" was arrived at on relevant material or whether it was an oblique exercise of power.
   - Survival of Rights Test: An ordinance that ceases to operate does not automatically leave behind enduring legal rights. Rights survive only if their reversal is practically impossible (e.g. executed transfers) or contrary to public interest.

III. INSTITUTIONAL REPERCUSSIONS:
An ordinance is valid only for six weeks from the reassembly of the legislature [Art. 123(2)(a)]. If the executive repeatedly bypasses the legislature, the Separation of Powers (Article 50) is dissolved, transforming the executive into an autocratic law-maker.

CONCLUSION:
Krishna Kumar Singh restores constitutional primacy to the legislature. The ordinance power is a temporary constitutional bridge, not a permanent administrative highway to circumvent democratic legislative scrutiny.`,
    scoringRubric: [
      { criterion: 'Articles 123 & 213 textual conditions and emergency rationale', marks: 3.5 },
      { criterion: 'Historical critique of repromulgation & D.C. Wadhwa (1987) ratio', marks: 3.5 },
      { criterion: 'Detailed breakdown of Krishna Kumar Singh (2017) 7-Judge Bench holdings', marks: 5 },
      { criterion: 'Separation of powers, survival of rights test & conclusion', marks: 3 }
    ]
  },

  // =========================================================================
  // 18. SEDITION (124A IPC VS 152 BNS & VOMBATKERE)
  // =========================================================================
  {
    id: 'mains-15m-sedition-124a-ipc-bns-152',
    title: 'Sedition Jurisprudence: Section 124A IPC vs Section 152 BNS and Article 19(1)(a)',
    topicId: 'art-19-fundamental-freedoms',
    marksCategory: 15,
    examCategory: 'UPSC_GS2',
    examsAppeared: ['UPSC CSE Mains GS-2 2023, 2024', 'DJS 2023', 'UP PCS-J 2024', 'UPSC Law Optional 2024'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~11 Mins',
    targetWordMin: 240,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~35 lines)',
    targetTimeMinutes: 11,
    questionText: 'Trace the judicial evolution of the law of Sedition from Kedar Nath Singh (1962) to the historic freeze in S.G. Vombatkere (2022). How does Section 152 of the Bharatiya Nyaya Sanhita (BNS), 2023 address the tension between State Security and Freedom of Speech under Article 19(1)(a)?',
    coreIssues: [
      'Colonial origin of Section 124A IPC (Macaulay\'s draft, Queen Empress v. Bal Gangadhar Tilak).',
      'The Kedar Nath Singh (1962) narrowing: Sedition valid ONLY if speech incites imminent public disorder or violence.',
      'Misuse and chilling effect: Rampant registration of FIRs for peaceful dissent and criticism of government.',
      'The S.G. Vombatkere (2022) interim freeze: Supreme Court directing all pending trials and new FIRs under Sec 124A to be kept in abeyance.',
      'Section 152 Bharatiya Nyaya Sanhita (BNS), 2023: Deletion of the word "sedition" and replacement with "acts endangering sovereignty, unity, and integrity of India".'
    ],
    examinerExpectation:
      'Candidate must trace: (1) Section 124A colonial roots; (2) Kedar Nath Singh (1962, 5-Judge Bench) reading down sedition to incitement of violence; (3) S.G. Vombatkere (2022) freezing the law; (4) Detailed comparative analysis with Section 152 BNS 2023 (omits "disaffection towards government", but broadens terms to "subversive activities" and enhances minimum punishment from 3 to 7 years).',
    essentialCitations: [
      'Kedar Nath Singh v. State of Bihar (AIR 1962 SC 955, 5-Judge Bench)',
      'S.G. Vombatkere v. Union of India ((2022) 7 SCC 433)',
      'Shreya Singhal v. Union of India ((2015) 5 SCC 1)',
      '279th Law Commission Report on Usage of the Law of Sedition (2023)'
    ],
    hoverIntel: {
      topicName: 'Sedition, BNS Section 152 & Free Speech (Vombatkere)',
      topicPillar: 'Part III: Freedom of Speech & Reasonable Restrictions (Article 19)',
      examImportance: '⭐⭐⭐⭐⭐ High Yield Free Speech Essay',
      examFrequency: 'Top recurring topic in UPSC Mains GS-2 and Judicial Mains papers',
      weightagePattern: '15 Marks • 250 Words (1.5 Pages)',
      targetTimeMinutes: 11,
      examinerTrapWarning:
        'Trap Alert: Do not assert that Section 152 of the new BNS completely decriminalized sedition! While the word "sedition" is dropped and comments expressing disapprobation without violence are excluded, Section 152 penalizes acts endangering sovereignty/unity with HIGHER sentences (up to 7 years or life)!',
      recentTrendAlert: 'Law Commission 279th Report recommended retaining the law with procedural safeguards.',
      coreArticles: ['Article 19(1)(a)', 'Article 19(2)', 'Section 124A IPC', 'Section 152 BNS'],
      benchmarkCases: ['Kedar Nath Singh (1962)', 'S.G. Vombatkere (2022)', 'Shreya Singhal (2015)']
    },
    answerBlueprint: {
      step1Intro: 'The Colonial Legacy of Sedition: Section 124A IPC was inserted in 1870 by the British colonial administration to suppress the Indian freedom movement (prosecutions of Tilak and Gandhi). It penalized bringing the government into "hatred or contempt" or exciting "disaffection".',
      step2DoctrinalCore: 'The Kedar Nath Compromise (1962): A 5-Judge Constitution Bench upheld Section 124A but read it down strictly: criticism of government measures, however harsh, does not constitute sedition unless accompanied by incitement to violence or an intention to create public disorder.',
      step3PrecedentEvolution: 'Chilling Effect & The Vombatkere Freeze (2022): Due to rampant police misuse against journalists, students, and citizens, a 3-Judge Bench in S.G. Vombatkere (2022) issued historic interim orders freezing Section 124A, directing governments not to register FIRs or continue trials under it while the Union re-examined the statute.',
      step4Conclusion: 'The Shift to Section 152 BNS: Section 152 of Bharatiya Nyaya Sanhita, 2023 replaces sedition with "Acts endangering sovereignty, unity and integrity of India." While it removes archaic terms like "disaffection", vague formulations like "subversive activities" and enhanced minimum sentences (7 years) require strict judicial interpretation adhering to Shreya Singhal (clear and present danger).'
    },
    fullModelAnswer: `I. COLONIAL ORIGINS AND THE KEDAR NATH (1962) DOCTRINE:
Section 124A was inserted into the Indian Penal Code in 1870. Mahatma Gandhi described it as "the prince among the political sections of the IPC designed to suppress the liberty of the citizen."
In Kedar Nath Singh v. State of Bihar (1962), a 5-Judge Constitution Bench harmonized Section 124A with Article 19(1)(a) and 19(2):
- Narrowing Construction: The Court held that penalizing mere strong words of disapprobation against the government violates free speech.
- The Violence Test: Section 124A is attracted ONLY when the words, signs, or representations have the pernicious tendency to create public disorder or incite violence.

II. CHILLING EFFECT AND THE HISTORIC FREEZE IN VOMBATKERE (2022):
Despite Kedar Nath, the law was chronically misused to silence democratic dissent.
In S.G. Vombatkere v. Union of India (2022), a 3-Judge Bench headed by NV Ramana CJI noted that colonial-era sedition was incompatible with modern constitutional civil liberties. The Court passed unprecedented interim directions:
1. Re-examination: The Union Government was permitted time to reconsider the law.
2. Judicial Freeze: Directed Centre and States to keep all pending investigations, trials, and proceedings under Section 124A in abeyance.
3. Bar on New FIRs: Directed police authorities not to register any fresh FIR under Section 124A.

III. THE STATUTORY METAMORPHOSIS: SECTION 152 OF BHARATIYA NYAYA SANHITA (BNS):
The BNS, 2023 formally repealed Section 124A IPC and introduced Section 152:
- Positive Changes:
  1. The word "Sedition" is expunged.
  2. The archaic colonial phrases "hatred", "contempt", and "disaffection towards the Government established by law" are deleted.
  3. Explanation explicitly protects comments expressing disapprobation of government actions through lawful means without inciting violence.
- Continued Concerns:
  1. Broader Nomenclature: Section 152 penalizes acts that "excite secession or armed rebellion or subversive activities, or endanger sovereignty or unity." The term "subversive activities" lacks statutory definition.
  2. Enhanced Penalties: The minimum punishment is escalated from 3 years to 7 years imprisonment (or life imprisonment).

CONCLUSION:
Dissent is the safety valve of democracy. While the State possesses legitimate authority to punish violent secession under Article 19(2), the constitutional judiciary must ensure that Section 152 BNS is not weaponized to resurrect colonial speech-policing under a new statutory nomenclature.`,
    scoringRubric: [
      { criterion: 'Colonial genesis of Section 124A IPC and free speech conflict', marks: 3 },
      { criterion: 'Kedar Nath (1962) public disorder and incitement to violence test', marks: 4 },
      { criterion: 'S.G. Vombatkere (2022) interim stay and reasons for constitutional freeze', marks: 4 },
      { criterion: 'Comparative analysis of Section 152 BNS 2023 & constitutional safeguards', marks: 4 }
    ]
  },

  // =========================================================================
  // 19. PREVENTIVE DETENTION (ARTICLE 22 & PRAMOD SINGLA 2023)
  // =========================================================================
  {
    id: 'mains-15m-preventive-detention-pramod-singla-art22',
    title: 'Preventive Detention Jurisprudence: Constitutional Safeguards under Article 22',
    topicId: 'art-22-protection-against-arrest-detention',
    marksCategory: 15,
    examCategory: 'DJS',
    examsAppeared: ['DJS 2023, 2024', 'UP PCS-J 2023', 'UPSC Law Optional 2023', 'BJS 2024'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~11 Mins',
    targetWordMin: 240,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~35 lines)',
    targetTimeMinutes: 11,
    questionText: '"Preventive detention is a sinister power vested in the executive, and the procedural safeguards under Article 22 must be strictly construed." Discuss this statement with reference to Pramod Singla v. Union of India (2023) and Ameena Begum v. State of Telangana (2023). Distinguish between "Public Order" and "Law and Order".',
    coreIssues: [
      'The constitutional anomaly: Part III enshrining preventive detention alongside Fundamental Rights (Article 22(3) to 22(7)).',
      'The procedural safeguard trinity under Article 22(5): Communication of grounds "as soon as may be", and earliest opportunity of making an effective representation.',
      'Strict construction: Delay in disposing representation or non-supply of legible translated documents vitiates detention.',
      'The jurisdictional distinction: "Law and Order" (ordinary crime dealt with by ordinary bail/penal law) vs "Public Order" (crimes affecting community equilibrium) in Ameena Begum (2023).'
    ],
    examinerExpectation:
      'Candidate must explain Article 22(3) excluding detenus from normal arrest rights (24-hour magistrate production). Detail procedural safeguards under Art 22(5). Cite Pramod Singla (2023 per Krishna Murari J.): Every procedural lapse must tilt in favor of personal liberty. Detail Ameena Begum (2023 per Gavai J.) distinguishing Public Order from Law and Order: preventive detention cannot substitute ordinary criminal prosecution.',
    essentialCitations: [
      'Pramod Singla v. Union of India ((2023) SCC OnLine SC 441)',
      'Ameena Begum v. State of Telangana ((2023) 9 SCC 587)',
      'Rekha v. State of Tamil Nadu ((2011) 5 SCC 244)',
      'Ram Manohar Lohia v. State of Bihar (AIR 1966 SC 740)'
    ],
    hoverIntel: {
      topicName: 'Preventive Detention (Article 22 & Pramod Singla)',
      topicPillar: 'Part III: Protection Against Arbitrary Arrest & Detention (Article 22)',
      examImportance: '⭐⭐⭐⭐⭐ High Yield Criminal Due Process Essay',
      examFrequency: 'Every year in State Judicial Services Criminal Law & Constitution papers',
      weightagePattern: '15 Marks • 250 Words (1.5 Pages)',
      targetTimeMinutes: 11,
      examinerTrapWarning:
        'Trap Alert: Candidates often argue that courts can re-evaluate the factual sufficiency of grounds of detention! The Supreme Court cannot examine the sufficiency of executive material; judicial review is strictly confined to whether PROCEDURAL SAFEGUARDS under Article 22(5) were complied with and whether subjective satisfaction was bona fide!',
      recentTrendAlert: 'Supreme Court quashed multiple detention orders in 2023 for failure to supply legible documents.',
      coreArticles: ['Article 22(4)', 'Article 22(5)', 'Article 21', 'Article 19'],
      benchmarkCases: ['Pramod Singla (2023)', 'Ameena Begum (2023)', 'Rekha (2011)']
    },
    answerBlueprint: {
      step1Intro: 'Constitutional Paradox of Article 22: India is among the few democratic constitutions that explicitly institutionalizes preventive detention in its bill of rights (Part III). Clauses (1) and (2) grant protections against arrest, but Clause (3)(b) categorically strips preventive detainees of the right to counsel and 24-hour magistrate production.',
      step2DoctrinalCore: 'Strict Compliance with Article 22(5) Safeguards: Because detention occurs on executive suspicion without a judicial trial, the procedural safeguards in Article 22(5) are sacrosanct: (1) Grounds of detention must be communicated; (2) Detenu must be afforded the earliest opportunity of making a representation; (3) All relied-upon documents must be supplied in a language the detenu understands.',
      step3PrecedentEvolution: 'Pramod Singla (2023) and Ameena Begum (2023): In Pramod Singla, the Supreme Court held that procedural safeguards are the only bulwark against administrative tyranny; any delay in deciding representations invalidates detention. In Ameena Begum, the Court reaffirmed Ram Manohar Lohia: ordinary criminal offences fall under "law and order" and must be tackled via normal penal processes; preventive detention cannot be invoked merely because police fear the accused might get bail.',
      step4Conclusion: 'Liberty as the Default: As held in Rekha (2011), preventive detention is an exceptional draconian device. Strict adherence to Article 21 due process is the sole guarantee against preventive incarceration becoming executive punishment.'
    },
    fullModelAnswer: `I. THE CONSTITUTIONAL FRAMEWORK OF ARTICLE 22:
Preventive detention is imprisonment without trial, based on executive suspicion of future prejudicial activity.
While Articles 22(1) and 22(2) provide the right to consult a lawyer and production before a magistrate within 24 hours, Article 22(3)(b) explicitly denies these safeguards to preventive detainees.
To counterbalance this draconian power, Article 22(5) imposes dual constitutional duties on the detaining authority:
1. Communication of Grounds: Disclose the grounds on which the detention order was passed as soon as may be.
2. Effective Representation: Afford the detenu the earliest opportunity to make a representation against the order.

II. STRICT PROCEDURAL CONSTRUCTION (PRAMOD SINGLA 2023):
In Pramod Singla v. Union of India (2023), the Supreme Court quashed a COFEPOSA detention order due to unexplained delay in disposing of the detenu's representation, establishing:
1. Procedural Safeguards are Absolute:
   Since preventive detention bypasses the criminal trial, procedural requirements are the only constitutional barrier protecting personal liberty under Article 21. Any departure from procedure vitiates the order.
2. Supply of Documents in Comprehensible Language:
   Supplying illegible, untranslated, or incomplete copies of relied-upon documents violates Article 22(5) because it cripples the detenu's capacity to draft an effective representation.

III. "LAW AND ORDER" VS. "PUBLIC ORDER" (AMEENA BEGUM 2023):
Executive authorities frequently invoke preventive detention laws (e.g. Goonda Acts) for ordinary thefts, cheating, or chain-snatching.
In Ameena Begum v. State of Telangana (2023), the Supreme Court reiterated the concentric circles doctrine formulated in Ram Manohar Lohia (1966):
- Law and Order: Every criminal offence disturbs law and order, affecting individuals. It must be addressed by ordinary penal statutes and normal bail proceedings.
- Public Order: An act affects public order only when it disturbs the even tempo of the life of the community at large, creating widespread panic or communal disruption.
The Court ruled that preventive detention cannot be resorted to merely because the police fail to secure convictions or anticipate that an accused may obtain bail.

CONCLUSION:
Preventive detention is a constitutionally sanctioned anomaly. In a republic governed by the rule of law, executive convenience cannot supplant the judicial trial. As held in Rekha v. State of Tamil Nadu (2011), liberty must remain the rule, and preventive detention an exceptionally scrutinized exception.`,
    scoringRubric: [
      { criterion: 'Article 22 structure (exclusion under 22(3) vs safeguards under 22(5))', marks: 3.5 },
      { criterion: 'Pramod Singla (2023) ratio on strict procedural compliance & document supply', marks: 4 },
      { criterion: 'Distinction between Law and Order vs Public Order (Ameena Begum & Ram Manohar Lohia)', marks: 4.5 },
      { criterion: 'Personal liberty under Article 21 and judicial restraint on executive overreach', marks: 3 }
    ]
  },

  // =========================================================================
  // 20. RESERVATIONS IN PROMOTIONS (NAGARAJ & JARNAIL SINGH)
  // =========================================================================
  {
    id: 'mains-15m-reservation-promotions-nagaraj-jarnail',
    title: 'Reservation in Promotions and Consequential Seniority: Articles 16(4A) and 16(4B)',
    topicId: 'art-16-equality-opportunity-public-employment',
    marksCategory: 15,
    examCategory: 'UPSC_GS2',
    examsAppeared: ['UPSC CSE Mains GS-2 2022, 2024', 'DJS 2023', 'UP PCS-J 2023', 'UPSC Law Optional 2024'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~11 Mins',
    targetWordMin: 240,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~35 lines)',
    targetTimeMinutes: 11,
    questionText: 'Trace the constitutional amendments enacted to overturn the bar on reservations in promotions laid down in Indra Sawhney. How did the 5-Judge Constitution Bench in Jarnail Singh (2018) modify the mandatory prerequisites established in M. Nagaraj (2006)?',
    coreIssues: [
      'Indra Sawhney (1992): Prohibited reservations in promotions under Article 16(4), holding reservation applies only to initial appointments.',
      'Constitutional Amendments: 77th CAA (inserting Art. 16(4A)), 81st CAA (Art. 16(4B) carry-forward vacancies), and 85th CAA (consequential seniority).',
      'The M. Nagaraj (2006) three-prong test: (1) Quantifiable data on backwardness; (2) Quantifiable data on inadequacy of representation; (3) Administrative efficiency under Article 335.',
      'Jarnail Singh (2018) modification: Striking down the backwardness data requirement for SC/STs as contrary to Indra Sawhney, while applying the Creamy Layer exclusion to promotions.'
    ],
    examinerExpectation:
      'Candidate must explain the journey from Indra Sawhney to Articles 16(4A) & 16(4B). Detail M. Nagaraj (2006) upholding the amendments but imposing the 3-condition fetter. Dissect Jarnail Singh (2018 per Nariman J.): (1) Nagaraj erred in requiring data on SC/ST backwardness (since Presidential notification under Art 341 presumes backwardness); (2) Affirmed creamy layer applies to promotions; (3) Jarnail Singh II (2022) clarifying cadre, not state, is the unit for inadequacy data.',
    essentialCitations: [
      'Indra Sawhney v. Union of India (1992 Supp (3) SCC 217)',
      'M. Nagaraj v. Union of India ((2006) 8 SCC 212)',
      'Jarnail Singh v. Lachhmi Narain Gupta ((2018) 10 SCC 396)',
      'Jarnail Singh v. Lachhmi Narain Gupta ((2022) 10 SCC 595, Jarnail Singh II)'
    ],
    hoverIntel: {
      topicName: 'Reservations in Promotions (Nagaraj & Jarnail Singh)',
      topicPillar: 'Part III: Public Employment & Affirmative Action (Articles 16(4A), 16(4B), 335)',
      examImportance: '⭐⭐⭐⭐⭐ High Yield Constitutional Reservation Jurisprudence',
      examFrequency: 'Direct question in UPSC GS-2 and Judicial Services exams',
      weightagePattern: '15 Marks • 250 Words (1.5 Pages)',
      targetTimeMinutes: 11,
      examinerTrapWarning:
        'Trap Alert: Candidates often mistakenly claim Jarnail Singh dispensed with all quantifiable data! Jarnail Singh dispensed ONLY with data proving "backwardness" of SC/STs; the State is STILL strictly required to produce quantifiable data proving "inadequacy of representation" in that specific cadre!',
      recentTrendAlert: 'Jarnail Singh II (2022) affirmed that the "cadre" is the constitutional unit for assessing inadequacy.',
      coreArticles: ['Article 16(4)', 'Article 16(4A)', 'Article 16(4B)', 'Article 335', 'Article 341'],
      benchmarkCases: ['Indra Sawhney (1992)', 'M. Nagaraj (2006)', 'Jarnail Singh (2018)']
    },
    answerBlueprint: {
      step1Intro: 'The Indra Sawhney Prohibition: In Indra Sawhney (1992), a 9-Judge Bench held that Article 16(4) permits affirmative action only at the entry level of public employment, barring reservations in promotions because promotion within service demands individual merit.',
      step2DoctrinalCore: 'The Legislative Counter-Offensive: Parliament enacted successive constitutional amendments: (1) 77th CAA (1995): Inserted Article 16(4A) enabling reservations in promotions for SCs/STs; (2) 85th CAA (2001): Added "with consequential seniority"; (3) 81st CAA (2000): Inserted Article 16(4B) exempting carry-forward backlog vacancies from the 50% ceiling.',
      step3PrecedentEvolution: 'The Nagaraj (2006) Conditions and Jarnail Singh (2018) Correction: In M. Nagaraj (2006), the Court upheld the amendments but imposed three mandatory preconditions on States: (1) Collection of quantifiable data on backwardness; (2) Quantifiable data on inadequacy of representation; (3) Compliance with Article 335 efficiency. In Jarnail Singh (2018), Nariman J. held that requiring proof of backwardness for SC/STs contradicted the 9-Judge Bench in Indra Sawhney, invalidating that requirement while applying the creamy layer principle to promotions.',
      step4Conclusion: 'Cadre-wise Data in Jarnail Singh II (2022): The Supreme Court refused to lay down a yardstick for inadequacy, holding that the "cadre" (specific post grade) is the operative unit for data collection, preserving the balance between social justice and administrative efficiency (Article 335).'
    },
    fullModelAnswer: `I. THE CONSTITUTIONAL GENESIS:
In Indra Sawhney v. Union of India (1992), the 9-Judge Constitution Bench ruled that Article 16(4) does not permit reservation in promotions, reasoning that while affirmative action ensures equal entry opportunities, promotions must reward on-the-job merit.
Parliament intervened through successive amendments:
1. 77th Amendment (1995): Inserted Article 16(4A), enabling the State to provide reservation in promotion for SCs and STs if inadequately represented.
2. 85th Amendment (2001): Conferred "consequential seniority" to SC/ST promotees.
3. 81st Amendment (2000): Inserted Article 16(4B), permitting carry-forward of unfilled backlog vacancies without being bound by the 50% ceiling rule.

II. THE M. NAGARAJ BENCHMARK (2006):
In M. Nagaraj v. Union of India (2006), a 5-Judge Bench upheld the constitutional validity of Articles 16(4A) and 16(4B), but made their exercise conditional upon the State demonstrating three "compelling reasons" backed by empirical data:
1. Demonstrating Backwardness of the class.
2. Demonstrating Inadequacy of Representation in public employment.
3. Maintaining Overall Efficiency of administration as mandated by Article 335.

III. THE DOCTRINAL CORRECTION IN JARNAIL SINGH (2018):
In Jarnail Singh v. Lachhmi Narain Gupta (2018), a 5-Judge Constitution Bench per R.F. Nariman J. modified Nagaraj:
1. Backwardness Requirement Invalidated:
   The Court held that Nagaraj directly contradicted the 9-Judge Bench in Indra Sawhney by requiring data on backwardness of SCs/STs. The Presidential List under Articles 341 and 342 creates an irrebuttable constitutional presumption of backwardness; requiring fresh state-level proof was an unconstitutional hurdle.
2. Creamy Layer Applied to SC/ST Promotions:
   The Court ruled that the Creamy Layer principle is an axiom of equality under Articles 14 and 16(1). If the affluent elite within SC/ST communities corner promotional reservations, the truly disadvantaged remain stagnant.
3. Inadequacy of Representation Retained:
   The State must still produce quantifiable data proving that SCs/STs are inadequately represented in the specific cadre. In Jarnail Singh II (2022), the Court clarified that "cadre" (and not the entire service) is the relevant unit for assessing inadequacy.

CONCLUSION:
Articles 16(4A) and 16(4B) are enabling provisions, not fundamental rights to promotion. Jarnail Singh balances substantive representation of historically marginalized communities with the constitutional imperative of administrative efficiency under Article 335.`,
    scoringRubric: [
      { criterion: 'Indra Sawhney bar and 77th/81st/85th Constitutional Amendment provisions', marks: 3.5 },
      { criterion: 'M. Nagaraj (2006) three-prong quantifiable data test analysis', marks: 4 },
      { criterion: 'Jarnail Singh (2018) modification (backwardness deletion & creamy layer extension)', marks: 4.5 },
      { criterion: 'Cadre-wise unit under Jarnail Singh II (2022) & Article 335 balance', marks: 3 }
    ]
  },

  // =========================================================================
  // 21. BASIC STRUCTURE & NINTH SCHEDULE (I.R. COELHO 9-JUDGE BENCH 2007)
  // =========================================================================
  {
    id: 'mains-20m-basic-structure-ir-coelho',
    title: 'Basic Structure Doctrine and Ninth Schedule Immunity: The Twin-Test of I.R. Coelho',
    topicId: 'art-368-amendment-basic-structure',
    marksCategory: 20,
    examCategory: 'UPSC_GS2',
    examsAppeared: ['UPSC CSE Mains GS-2 2022, 2024', 'DJS 2024', 'UP PCS-J 2023', 'UPSC Law Optional 2023'],
    typicalMarks: 20,
    targetWordLimit: '350–400 Words | Time: ~15 Mins',
    targetWordMin: 320,
    targetWordMax: 420,
    estimatedPages: '2.0 Pages (~45 lines)',
    targetTimeMinutes: 15,
    questionText: 'Trace the judicial evolution of Article 31B and the Ninth Schedule from Shankari Prasad to Waman Rao. How did the unanimous 9-Judge Constitution Bench in I.R. Coelho v. State of Tamil Nadu (2007) establish the "Rights Test" and the "Essence of the Right Test" to subject Ninth Schedule laws to Basic Structure scrutiny?',
    coreIssues: [
      'Article 31B: Constitutional blanket immunity protecting Ninth Schedule statutes from challenge under Part III.',
      'The expansion of Ninth Schedule from 13 agrarian reform laws (1951) to 284+ commercial, regulatory, and reservation statutes.',
      'The cut-off date established in Waman Rao (1981): April 24, 1973 (Kesavananda Bharati verdict date).',
      'The 9-Judge Bench ruling in I.R. Coelho (2007): No blanket immunity; Ninth Schedule laws inserted after April 24, 1973 are subject to judicial review.',
      'The Twin-Test: "Rights Test" vs "Essence of the Right / Impact Test" on the touchstone of Articles 14, 19, and 21 (The Golden Triangle).'
    ],
    examinerExpectation:
      'Candidate must trace Shankari Prasad (1951), Sajjan Singh (1965), Golak Nath (1967), Kesavananda (1973), and Waman Rao (1981). Dissect I.R. Coelho (2007, 9-Judge Bench per Sabharwal CJI): (1) Any constitutional amendment inserting laws into the Ninth Schedule after April 24, 1973 must pass the Basic Structure test; (2) Explain the difference between direct violation of Part III (permissible under Art 31B) and destroying the "essence of the fundamental rights" forming basic structure; (3) Emphasize Judicial Review and Golden Triangle (Arts 14, 19, 21) as inviolable basic structure features.',
    essentialCitations: [
      'I.R. Coelho v. State of Tamil Nadu ((2007) 2 SCC 1, 9-Judge Bench)',
      'Kesavananda Bharati v. State of Kerala ((1973) 4 SCC 225)',
      'Waman Rao v. Union of India ((1981) 2 SCC 362)',
      'Minerva Mills Ltd. v. Union of India ((1980) 3 SCC 625)',
      'Shankari Prasad Singh Deo v. Union of India (AIR 1951 SC 458)'
    ],
    hoverIntel: {
      topicName: 'Ninth Schedule & Basic Structure (I.R. Coelho 2007)',
      topicPillar: 'Part XX: Amendment of the Constitution & Basic Structure (Articles 368 & 31B)',
      examImportance: '⭐⭐⭐⭐⭐ Monumental 9-Judge Constitution Bench Masterpiece',
      examFrequency: 'Guaranteed 20-mark essay in UPSC Mains GS-2, Law Optional, and Judicial Mains',
      weightagePattern: '20 Marks • 350–400 Words (2 Pages)',
      targetTimeMinutes: 15,
      examinerTrapWarning:
        'Trap Alert: Candidates often mistakenly argue that I.R. Coelho abolished Article 31B or declared the Ninth Schedule unconstitutional! It did NOT! Article 31B remains valid; however, statutes placed in the Ninth Schedule after April 24, 1973 no longer enjoy absolute immunity—they must not destroy the Basic Structure!',
      recentTrendAlert: 'The definitive benchmark testing reservation laws (e.g. Tamil Nadu 69% quota Act) in the Ninth Schedule.',
      coreArticles: ['Article 31B', 'Article 368', 'Ninth Schedule', 'Article 14', 'Article 19', 'Article 21'],
      benchmarkCases: ['I.R. Coelho (2007)', 'Kesavananda Bharati (1973)', 'Waman Rao (1981)']
    },
    answerBlueprint: {
      step1Intro: 'Historical Genesis of Article 31B and Ninth Schedule: Inserted by the 1st Constitutional Amendment Act, 1951 to insulate urgent zamindari abolition and agrarian land reform laws from judicial nullification under Fundamental Rights (Articles 14, 19, 31).',
      step2DoctrinalCore: 'The Degradation into a Constitutional Safe-Haven: Over decades, the Ninth Schedule expanded from 13 agrarian statutes to over 284 laws, including non-agrarian statutes, anti-defection laws, nationalization acts, and the Tamil Nadu 69% Reservation Act, converting Article 31B into a parallel, unreviewable vault.',
      step3PrecedentEvolution: 'From Waman Rao (1981) to I.R. Coelho (2007): In Waman Rao, the Court drew a line of demarcation: amendments prior to Kesavananda Bharati (April 24, 1973) are immune, but post-1973 amendments are open to challenge. In I.R. Coelho (2007), a unanimous 9-Judge Bench consolidated the jurisprudence, laying down that every law inserted into the Ninth Schedule post-April 24, 1973 must satisfy the Basic Structure test.',
      step4Conclusion: 'The Twin-Test Formulated in I.R. Coelho: (1) Form of Law irrelevant; (2) "Impact / Effect Test": Does the statute infringe the Golden Triangle (Articles 14, 19, 21)? (3) "Essence of the Rights Test": If the infringement damages the core essence of these rights, the constitutional amendment inserting the law into the Ninth Schedule is void.'
    },
    fullModelAnswer: `I. HISTORICAL GENESIS AND COLONIAL LAND REDISTRIBUTION:
Article 31B and the Ninth Schedule were introduced by the First Constitutional Amendment Act, 1951.
- Original Purpose: To protect progressive agrarian and zamindari abolition statutes from judicial invalidation under Fundamental Rights (Articles 14, 19, and 31).
- Non-Obstante Immunity: Article 31B provided that no Act listed in the Ninth Schedule shall be deemed void on the ground that it is inconsistent with or takes away any of the rights in Part III.
- Institutional Degeneration: Over time, successive governments utilized the Ninth Schedule as a constitutional black hole, packing it with over 284 diverse statutes—ranging from corporate monopolies to the Tamil Nadu 69% Reservation Act—seeking absolute immunity from judicial review.

II. THE EVOLUTION LEADING TO THE 9-JUDGE BENCH:
1. Kesavananda Bharati (1973): Established that Parliament's amending power under Article 368 is not unlimited; it cannot alter or destroy the Basic Structure of the Constitution.
2. Waman Rao v. Union of India (1981): Introduced the cut-off date of April 24, 1973 (the date of Kesavananda). Ninth Schedule amendments made before this date were deemed valid, but those made on or after April 24, 1973 were held open to judicial review.
3. The Reference in I.R. Coelho: Ambiguities in Waman Rao and Minerva Mills (1980) regarding the precise standard of judicial review necessitated the 9-Judge Constitution Bench.

III. RATIO DECIDENDI OF I.R. COELHO V. STATE OF TAMIL NADU (2007):
A unanimous 9-Judge Bench headed by CJI Y.K. Sabharwal laid down the definitive constitutional doctrine:
1. No Blanket Immunity for Post-1973 Laws:
   All constitutional amendments by which additions are made to the Ninth Schedule on or after April 24, 1973 are subject to the test of the Basic Structure.
2. Judicial Review is Part of Basic Structure:
   Article 31B is an enabling device, not a blanket immunity card. The power of judicial review under Articles 32 and 226 cannot be ousted by ordinary or constituent legislation.
3. The Twin-Test: "Rights Test" and "Essence of the Right Test":
   - The Rights Test: Examines whether the statute violates any fundamental right.
   - The Essence of the Right / Effect Test: Even if a statute violates a specific fundamental right, it is not automatically invalid under Article 31B. However, if the impact of the statute destroys the "essence of the fundamental rights"—specifically the Golden Triangle of Articles 14, 19, and 21—it damages the Basic Structure, and the constitutional amendment inserting it into the Ninth Schedule is void ab initio.

CONCLUSION:
I.R. Coelho represents the zenith of constitutional supremacy over legislative sovereignty. It established that Parliament cannot expand its constituent power under Article 368 into a power to create a parallel, untouchable enclave that eviscerates the fundamental liberties of the citizen.`,
    scoringRubric: [
      { criterion: 'Genesis of Article 31B, zamindari abolition & expansion of Ninth Schedule', marks: 4 },
      { criterion: 'Evolution through Shankari Prasad, Waman Rao cut-off date (April 24, 1973)', marks: 4.5 },
      { criterion: 'Detailed breakdown of I.R. Coelho 9-Judge Bench ratio (judicial review supremacy)', marks: 5 },
      { criterion: 'Explanation of the Twin-Test ("Rights Test" vs "Essence of the Right / Impact Test")', marks: 4.5 },
      { criterion: 'Synthesis of Golden Triangle (Arts 14, 19, 21) and structured conclusion', marks: 2 }
    ]
  },

  // =========================================================================
  // 22. SLP JURISDICTION UNDER ARTICLE 136 (GATEKEEPING & MATHAI V. GEORGE)
  // =========================================================================
  {
    id: 'mains-15m-slp-art136-gatekeeping',
    title: 'Special Leave Petitions under Article 136: Plenary Extraordinary Jurisdiction vs Overburdened Docket',
    topicId: 'art-136-special-leave-petition',
    marksCategory: 15,
    examCategory: 'DJS',
    examsAppeared: ['DJS 2023, 2024', 'UP PCS-J 2023', 'UPSC Law Optional 2024'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~11 Mins',
    targetWordMin: 240,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~35 lines)',
    targetTimeMinutes: 11,
    questionText: 'Analyze the plenary scope and discretionary limits of the Supreme Court\'s jurisdiction under Article 136 of the Constitution. Has the liberal admission of Special Leave Petitions converted the constitutional court into a regular court of appeal? Discuss with reference to Mathai @ Joby v. George (2010).',
    coreIssues: [
      'Plenary scope: "Notwithstanding anything in this Chapter, the Supreme Court may... grant special leave to appeal from any judgment, decree, sentence or order in any cause or matter passed by any court or tribunal".',
      'The lone exception: Article 136(2) explicitly excludes armed forces tribunals.',
      'Discretionary character: Article 136 does not confer a right of appeal; it confers only a right to apply for special leave.',
      'Docket explosion: SLPs constituting over 70% of the Supreme Court\'s incoming litigation, drowning its constitutional function.',
      'Mathai @ Joby v. George (2010): Suggesting guidelines to restrict Article 136 to substantial questions of law, gross miscarriage of justice, and constitutional interpretation.'
    ],
    examinerExpectation:
      'Candidate must explain Article 136 untrammeled wording. Highlight that it is an extraordinary residuary power, not a regular court of appeal. Contrast Pritam Singh (1950 - to be exercised sparingly) with contemporary docket reality. Discuss Mathai @ Joby v. George (2010 per Markandey Katju J.) and the Law Commission/NCRWC recommendations advocating National Courts of Appeal to preserve Supreme Court as a Constitution Court.',
    essentialCitations: [
      'Pritam Singh v. The State (AIR 1950 SC 169)',
      'Mathai @ Joby v. George ((2010) 4 SCC 358)',
      'Chandi Prasad Chokhani v. State of Bihar (AIR 1961 SC 1708)',
      'Kunhayammed v. State of Kerala ((2000) 6 SCC 359)'
    ],
    hoverIntel: {
      topicName: 'Special Leave Petitions & Docket Crisis (Article 136)',
      topicPillar: 'Part V: The Union Judiciary • Plenary Appellate Jurisdiction (Article 136)',
      examImportance: '⭐⭐⭐⭐⭐ High Yield Judicial Services Milestone',
      examFrequency: 'Direct question in DJS and State Judicial Mains Civil/Constitutional papers',
      weightagePattern: '15 Marks • 250 Words (1.5 Pages)',
      targetTimeMinutes: 11,
      examinerTrapWarning:
        'Trap Alert: Candidates often treat dismissal of an SLP in limine (without reasons) as an affirmation of the High Court judgment on merits! Clarify under Kunhayammed (2000) that dismissing an SLP at the threshold does NOT invoke the doctrine of merger; it merely signifies the Court declined to exercise discretionary jurisdiction!',
      recentTrendAlert: 'Calls for Regional Benches or National Courts of Appeal to filter SLP influx.',
      coreArticles: ['Article 136', 'Article 132', 'Article 133', 'Article 134', 'Article 141'],
      benchmarkCases: ['Pritam Singh (1950)', 'Mathai v. George (2010)', 'Kunhayammed (2000)']
    },
    answerBlueprint: {
      step1Intro: 'Textual Breadth of Article 136: Opens with a non-obstante clause overriding Chapter IV. The Supreme Court may, in its discretion, grant special leave to appeal against any judgment, determination, sentence or order in any cause or matter passed by any court or tribunal in India (except armed forces tribunals under Art 136(2)).',
      step2DoctrinalCore: 'An Extraordinary Power, Not a Universal Right of Appeal: In Pritam Singh (1950), the Supreme Court ruled that Article 136 is an exceptional power to be exercised sparingly only where substantial and grave injustice has occurred. Unlike Articles 132-134, Article 136 does not grant litigants a vested right of appeal.',
      step3PrecedentEvolution: 'The Docket Crisis and Mathai @ Joby v. George (2010): The unrestricted entertainability of SLPs has flooded the Supreme Court with commercial disputes, landlord-tenant evictions, and bail matters. In Mathai @ Joby v. George (2010), Katju and Misra JJ. warned that the Supreme Court was degenerating into a regular court of appeal, suggesting strict gatekeeping criteria.',
      step4Conclusion: 'Institutional Reformation: The 229th Law Commission Report and NCRWC recommended establishing 4 Regional Courts of Appeal to decide final statutory appeals, reserving the Delhi Supreme Court exclusively for Constitutional Bench references, federal disputes (Art 131), and landmark public law questions.'
    },
    fullModelAnswer: `I. PLENARY ARCHITECTURE OF ARTICLE 136:
Article 136(1) provides: "Notwithstanding anything in this Chapter, the Supreme Court may, in its discretion, grant special leave to appeal from any judgment, decree, determination, sentence or order in any cause or matter passed or made by any court or tribunal in the territory of India."
- Singular Limitation [Art. 136(2)]: Armed Forces Tribunals (courts-martial) are explicitly excluded from Article 136 jurisdiction.
- Untrammeled Elasticity: Unlike Articles 132-134 which require certificates of fitness from High Courts, Article 136 is an independent, non-statutory prerogative of the Supreme Court.

II. DOCTRINAL NATURE: PRITAM SINGH AND KUNHAYAMMED:
1. Exceptional Jurisdiction:
   In Pritam Singh v. The State (1950), the Court held that Article 136 is a residual, reserve power to be exercised with the greatest caution and only in cases where grave injustice has been occasioned.
2. Two-Stage Process & Doctrine of Merger:
   In Kunhayammed v. State of Kerala (2000), the Court clarified:
   - Stage 1 (SLP Petition): Court decides whether to grant leave. Dismissal at this stage (in limine) does not merge the lower court order; it only means the Court declined to exercise discretion.
   - Stage 2 (Post-Leave Appeal): Once leave is granted, the petition converts into a civil/criminal appeal, attracting the doctrine of merger.

III. THE CRISIS OF INSTITUTIONAL DILUTION (MATHAI V. GEORGE 2010):
Liberal admission of SLPs has resulted in over 70% of the Court's docket consisting of special leave petitions, diverting judicial bandwidth from 5-Judge Constitution Benches:
- Ratio of Mathai @ Joby v. George (2010): Justices Markandey Katju and R.M. Lodha observed that the Supreme Court was rapidly collapsing under routine litigation. The Bench proposed restricting Article 136 admissions to:
  1. Matters involving substantial questions of constitutional interpretation.
  2. Cases of shocking, gross miscarriage of justice.
  3. Cases involving striking down of central or state statutes.
  4. Conflict between High Courts on significant legal questions.

CONCLUSION:
The Supreme Court was designed as an apex constitutional referee, not an ordinary appellate correction bureau for daily trial errors. Implementing the 229th Law Commission recommendations for National Courts of Appeal is crucial to restore Article 136 to its true status as an extraordinary constitutional sanctuary.`,
    scoringRubric: [
      { criterion: 'Article 136 textual breadth, non-obstante clause & Armed Forces exclusion', marks: 3.5 },
      { criterion: 'Pritam Singh (1950) exceptional standard vs contemporary docket explosion', marks: 4 },
      { criterion: 'Kunhayammed (2000) two-stage process & doctrine of merger distinction', marks: 3.5 },
      { criterion: 'Mathai v. George (2010) gatekeeping critique, Law Commission reforms & conclusion', marks: 4 }
    ]
  },

  // =========================================================================
  // 23. CIVIL SERVICES PROTECTIONS UNDER ARTICLE 311 (TULSIRAM PATEL)
  // =========================================================================
  {
    id: 'mains-15m-civil-services-art311-exceptions',
    title: 'Doctrine of Pleasure (Article 310) and Safeguards under Article 311 Second Proviso',
    topicId: 'art-311-dismissal-civil-servants',
    marksCategory: 15,
    examCategory: 'UPSC_GS2',
    examsAppeared: ['UPSC CSE Mains GS-2 2022, 2024', 'UP PCS-J 2023', 'DJS 2024'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~11 Mins',
    targetWordMin: 240,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~35 lines)',
    targetTimeMinutes: 11,
    questionText: 'Analyze the constitutional relationship between the Doctrine of Pleasure under Article 310 and the safeguards provided to civil servants under Article 311. Under what exceptional circumstances can an inquiry be dispensed with under the Second Proviso to Article 311(2)? Discuss with reference to Union of India v. Tulsiram Patel (1985).',
    coreIssues: [
      'Doctrine of Pleasure (Article 310): Civil servants holding office during the pleasure of the President or Governor.',
      'Constitutional safeguards under Article 311(1) (No dismissal by subordinate authority) and 311(2) (Reasonable opportunity of being heard).',
      'The Second Proviso to Article 311(2): The three exceptional clauses (a), (b), and (c) dispensing with departmental inquiry.',
      'Clause (a): Conviction on a criminal charge.',
      'Clause (b): Authority satisfied that it is not reasonably practicable to hold an inquiry (reasons recorded in writing).',
      'Clause (c): President/Governor satisfied that in the interest of the security of the State it is not expedient to hold inquiry.',
      'Tulsiram Patel (1985) Constitution Bench: Balancing civil service tenure with state security and administrative necessity.'
    ],
    examinerExpectation:
      'Candidate must explain Article 310 and its qualification by Article 311. Detail the twin safeguards under Art 311(1) and 311(2). Dissect the Second Proviso exceptions (a, b, c). Analyze the 5-Judge Constitution Bench ruling in Union of India v. Tulsiram Patel (1985 per Madon J.): dispensing with inquiry under the proviso does not violate natural justice; subjective satisfaction under clause (c) cannot be questioned on merits, but mala fides can be challenged.',
    essentialCitations: [
      'Union of India v. Tulsiram Patel ((1985) 3 SCC 398, 5-Judge Bench)',
      'Satyavir Singh v. Union of India ((1985) 4 SCC 252)',
      'Jaswant Singh v. State of Punjab ((1991) 1 SCC 362)',
      'State of Bihar v. Abdul Majid (AIR 1954 SC 245)'
    ],
    hoverIntel: {
      topicName: 'Civil Services & Article 311 Second Proviso (Tulsiram Patel)',
      topicPillar: 'Part XIV: Services under the Union and the States (Articles 310 & 311)',
      examImportance: '⭐⭐⭐⭐⭐ High Yield Administrative Law & Constitution Essay',
      examFrequency: 'Every 2 years in UPSC Mains GS-2 and Judicial Services exams',
      weightagePattern: '15 Marks • 250 Words (1.5 Pages)',
      targetTimeMinutes: 11,
      examinerTrapWarning:
        'Trap Alert: Candidates often mistakenly argue that reasons for dispensing with inquiry must be recorded in writing for ALL three clauses of the Second Proviso! Clarify: Clause (b) requires reasons to be recorded in writing; Clause (c) (Security of the State) does NOT require disclosure of reasons to the employee!',
      recentTrendAlert: 'Judicial review remains available if reasons recorded under Clause (b) are flimsy or arbitrary.',
      coreArticles: ['Article 310', 'Article 311(1)', 'Article 311(2)', 'Article 14'],
      benchmarkCases: ['Tulsiram Patel (1985)', 'Jaswant Singh (1991)', 'Satyavir Singh (1985)']
    },
    answerBlueprint: {
      step1Intro: 'The Constitutional Compromise: Article 310 incorporates the English common law "Doctrine of Pleasure", stating that civil servants hold office during the pleasure of the President (Union) or Governor (State). However, unlike in the UK, this pleasure is not absolute; it is expressly conditioned by Article 311.',
      step2DoctrinalCore: 'Twin Safeguards of Article 311: (1) Article 311(1): A civil servant cannot be dismissed or removed by an authority subordinate to that by which they were appointed; (2) Article 311(2): No dismissal, removal, or reduction in rank can take place without an inquiry affording a reasonable opportunity of being heard.',
      step3PrecedentEvolution: 'The Second Proviso Exceptions (Clauses a, b, c): An inquiry can be dispensed with only under three strict constitutional exceptions: (a) Conviction on a criminal charge; (b) Where the disciplinary authority records in writing that it is not reasonably practicable to hold an inquiry (e.g. witnesses terrorized); (c) Where the President/Governor is satisfied that in the interest of the security of the State, holding an inquiry is inexpedient.',
      step4Conclusion: 'The Tulsiram Patel Benchmark (1985): A 5-Judge Bench held that the Second Proviso is an integral constitutional mandate overriding natural justice (audi alteram partem). However, as reaffirmed in Jaswant Singh (1991), the subjective satisfaction under Clause (b) is justiciable—it cannot be a pretext to bypass inquiry on frivolous grounds.'
    },
    fullModelAnswer: `I. DOCTRINE OF PLEASURE AND ITS CONSTITUTIONAL LIMITS:
Under Article 310, civil servants hold office during the "pleasure" of the President (for Union services) or the Governor (for State services).
However, Article 310 is expressly subject to Article 311, which creates substantive constitutional safeguards against arbitrary dismissal:
1. Article 311(1): No civil servant can be dismissed or removed by an authority subordinate to the appointing authority.
2. Article 311(2): No civil servant can be dismissed, removed, or reduced in rank except after an inquiry in which they are informed of charges and given a reasonable opportunity of being heard.

II. THE THREE EXCEPTIONS UNDER ARTICLE 311(2) SECOND PROVISO:
The requirement of holding a departmental inquiry is dispensed with in three specific constitutional contingencies:
1. Clause (a) - Criminal Conviction:
   Where a person is dismissed, removed, or reduced in rank on the ground of conduct which has led to their conviction on a criminal charge by a court of law.
2. Clause (b) - Practical Impossibility:
   Where the disciplinary authority is satisfied, for reasons to be recorded by that authority in writing, that it is not reasonably practicable to hold such inquiry (e.g., where witnesses or inquiry officers are intimidated or terrorized by the delinquent official).
3. Clause (c) - Security of the State:
   Where the President or Governor is satisfied that in the interest of the security of the State, it is not expedient to hold such inquiry. Here, subjective satisfaction of the President/Governor on ministerial advice is paramount.

III. RATIO IN UNION OF INDIA V. TULSIRAM PATEL (1985):
A 5-Judge Constitution Bench headed by Justice D.P. Madon upheld dismissals of government employees who engaged in violent strikes, laying down:
1. Exclusion of Natural Justice: The Second Proviso expressly excludes the rules of natural justice (audi alteram partem). Where a constitutional provision expressly excludes natural justice, courts cannot reintroduce it through interpretative activism.
2. Subjective Satisfaction under Clause (c): The satisfaction under Clause (c) belongs to the President/Governor; it cannot be questioned on the grounds of insufficiency of intelligence materials.
3. Judicial Review under Clause (b): However, the Court clarified in Jaswant Singh v. State of Punjab (1991) that the subjective satisfaction under Clause (b) is subject to judicial review: the recorded reasons must be based on objective facts showing real impracticability, not mere administrative convenience or subjective whim.

CONCLUSION:
Article 311 balances tenure security for honest civil servants with the sovereign imperative of state security. The Second Proviso is a constitutional emergency brake, to be used as a rare exception rather than an administrative shortcut to bypass due process.`,
    scoringRubric: [
      { criterion: 'Doctrine of Pleasure under Article 310 and its limitation by Article 311', marks: 3.5 },
      { criterion: 'Twin procedural safeguards under Article 311(1) and 311(2)', marks: 3.5 },
      { criterion: 'Systematic analysis of the three exceptions in the Second Proviso (a, b, c)', marks: 4.5 },
      { criterion: 'Tulsiram Patel (1985) & Jaswant Singh (1991) standards of judicial review', marks: 3.5 }
    ]
  },

  // =========================================================================
  // 24. PREAMBLE & SECULARISM CHALLENGE (BALRAM SINGH 2024)
  // =========================================================================
  {
    id: 'mains-15m-preamble-secularism-challenge-2024',
    title: 'Preamble Amendability, 42nd Amendment Inclusions, and Basic Structure',
    topicId: 'preamble-philosophy-basic-structure',
    marksCategory: 15,
    examCategory: 'UPSC_GS2',
    examsAppeared: ['UPSC CSE Mains GS-2 2024', 'DJS 2024', 'UP PCS-J 2024', 'CLAT PG 2024'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~11 Mins',
    targetWordMin: 240,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~35 lines)',
    targetTimeMinutes: 11,
    questionText: 'Can the Preamble to the Constitution be amended under Article 368? Examine the constitutional validity of the inclusion of the words "Socialist" and "Secular" by the 42nd Amendment Act, 1976 in light of Kesavananda Bharati, S.R. Bommai, and the Supreme Court\'s ruling in Balram Singh v. Union of India (2024).',
    coreIssues: [
      'Preamble as part of the Constitution: Berubari Union (1960, not part) overruled by Kesavananda Bharati (1973, integral part).',
      'Amendability of Preamble under Article 368: Preamble can be amended provided its Basic Features are not destroyed or emasculated.',
      'The 42nd Constitutional Amendment Act, 1976: Substitution of "Sovereign Democratic Republic" with "Sovereign Socialist Secular Democratic Republic".',
      'The challenge in Balram Singh (2024): Petitioners argued that adding words retroactively alter the adoption date (26th November 1949).',
      'Supreme Court\'s dismissal in 2024: Secularism and socialism (in the Indian sense of welfare and fraternity) are foundational pillars; their explicit codification in 1976 did not alter the pre-existing constitutional fabric.'
    ],
    examinerExpectation:
      'Candidate must trace: (1) Berubari Union (1960) vs Kesavananda Bharati (1973); (2) Kesavananda holding that Preamble is amendable under Article 368 subject to Basic Structure; (3) S.R. Bommai (1994, 9-Judge Bench) holding secularism was ALWAYS part of basic structure before 1976; (4) Balram Singh (2024 per Sanjiv Khanna J.) dismissing the challenge to the 42nd CAA, affirming that "secularism" reflects equal respect for all faiths (Sarva Dharma Sambhava) and cannot be unpicked.',
    essentialCitations: [
      'In Re: Berubari Union ((1960) 3 SCR 250, Overruled)',
      'Kesavananda Bharati v. State of Kerala ((1973) 4 SCC 225)',
      'S.R. Bommai v. Union of India ((1994) 3 SCC 1, 9-Judge Bench)',
      'Balram Singh v. Union of India ((2024) SCC OnLine SC 2840)'
    ],
    hoverIntel: {
      topicName: 'Preamble Amendability & Secularism (Balram Singh 2024)',
      topicPillar: 'Preamble & Foundational Philosophy (Preamble & Article 368)',
      examImportance: '⭐⭐⭐⭐⭐ High Yield Constitutional Core Essay',
      examFrequency: 'Direct question across UPSC GS-2, Law Optional, and Judiciary Mains',
      weightagePattern: '15 Marks • 250 Words (1.5 Pages)',
      targetTimeMinutes: 11,
      examinerTrapWarning:
        'Trap Alert: Candidates often mistakenly argue that India became a "secular" state only in 1976 with the 42nd Amendment! State forcefully citing S.R. Bommai (1994) that India was ALWAYS a secular state since 1950 by virtue of Articles 25-28 and Article 14; the 42nd Amendment merely made explicit what was already implicit!',
      recentTrendAlert: 'Supreme Court in 2024 firmly rejected petitions seeking deletion of "Secular" and "Socialist".',
      coreArticles: ['Preamble', 'Article 368', 'Article 25', 'Article 14', 'Article 38'],
      benchmarkCases: ['Balram Singh (2024)', 'S.R. Bommai (1994)', 'Kesavananda (1973)']
    },
    answerBlueprint: {
      step1Intro: 'The Preamble as the Key to the Mind of the Makers: In Berubari Union (1960), the Supreme Court held that the Preamble is not part of the Constitution and cannot be amended. However, in Kesavananda Bharati (1973), the majority overruled Berubari, declaring the Preamble to be an integral part of the Constitution and amendable under Article 368, provided the Basic Structure is preserved.',
      step2DoctrinalCore: 'The 42nd Constitutional Amendment Act, 1976: Under Section 2 of the 42nd CAA, Parliament amended the Preamble by adding the words "Socialist", "Secular", and "and Integrity".',
      step3PrecedentEvolution: 'Secularism as Inherent Basic Structure (S.R. Bommai 1994): A 9-Judge Constitution Bench ruled that Secularism was not a new creation of 1976; it was embedded in the constitutional architecture since January 26, 1950 through Articles 14, 15, 16, 25, 26, 27, and 28. The 42nd Amendment merely made explicit what was already organically inherent.',
      step4Conclusion: 'The 2024 Verdict in Balram Singh: Dismissing petitions challenging the words "Socialist" and "Secular", a Bench headed by Justice Sanjiv Khanna held: (1) Parliament possessed full constituent power under Article 368 to amend the Preamble; (2) The amendment does not alter the historical date of adoption; (3) Indian socialism denotes a welfare state promoting equality of opportunity, and secularism denotes Sarva Dharma Sambhava.'
    },
    fullModelAnswer: `I. PREAMBLE: STATUS AND AMENDABILITY:
1. Rejection of Berubari (1960):
   In In Re: Berubari Union (1960), the Supreme Court erroneously viewed the Preamble as an ornamental preface, holding it was not part of the Constitution.
2. The Watershed in Kesavananda Bharati (1973):
   A 13-Judge Bench held that the Preamble is an integral part of the Constitution, having been voted upon by the Constituent Assembly like any other constitutional provision.
   - Amendability under Article 368: The Court affirmed that the Preamble can be amended under Article 368, but subject to the Basic Structure doctrine: Parliament cannot erase or mutilate the fundamental values (Liberty, Equality, Justice, and Fraternity) enshrined in it.

II. THE 42ND CONSTITUTIONAL AMENDMENT (1976) & S.R. BOMMAI (1994):
The 42nd Amendment altered the description from "Sovereign Democratic Republic" to "Sovereign Socialist Secular Democratic Republic", and added "and Integrity".
- The 9-Judge Bench in S.R. Bommai v. Union of India (1994):
  The Court decisively held that Secularism is a foundational feature of the Basic Structure. India did not suddenly become secular on December 18, 1976; the secular character was already woven into Part III (Articles 25–28, 14, 15) and Part IV (Article 44). The 42nd Amendment merely articulated what was already an indisputable constitutional reality.

III. THE 2024 CHALLENGE IN BALRAM SINGH V. UNION OF INDIA:
In 2024, petitions were filed seeking deletion of "Socialist" and "Secular", arguing that inserting these words in 1976 was historically inaccurate as they were not adopted by the Constituent Assembly on November 26, 1949.
The Supreme Court (Sanjiv Khanna and Sanjay Kumar, JJ.) dismissed the challenge, holding:
1. Valid Exercise of Constituent Power:
   Parliament was fully competent under Article 368 to amend the Preamble. An amendment takes effect prospectively from the date of enactment and does not falsify the historical date of adoption.
2. Meaning of Socialism in India:
   "Socialism" in the Indian constitutional context does not denote Marxist state-ownership of means of production, but a democratic welfare state striving for social justice and elimination of inequality (Excel Wear v. Union of India).
3. Meaning of Secularism:
   "Secularism" reflects the unique Indian ethos of equal respect for all faiths (*Sarva Dharma Sambhava*), neutrality of the State, and protection of religious minorities.

CONCLUSION:
The Preamble is the guiding beacon of constitutional interpretation. The inclusion of "Secular" and "Socialist" in 1976 strengthened, rather than diluted, the constitutional promise of dignity, equality, and fraternity.`,
    scoringRubric: [
      { criterion: 'Overruling of Berubari (1960) by Kesavananda Bharati (1973) on Preamble status', marks: 3.5 },
      { criterion: '42nd Amendment inclusions and S.R. Bommai (1994) ratio on inherent secularism', marks: 4 },
      { criterion: 'Analysis of Balram Singh (2024) ruling on prospective validity and constituent power', marks: 4 },
      { criterion: 'Doctrinal definition of Indian Socialism and Secularism & conclusion', marks: 3.5 }
    ]
  },

  // =========================================================================
  // 25. DELIMITATION 2026 & FEDERAL ASYMMETRY
  // =========================================================================
  {
    id: 'mains-15m-delimitation-federal-representation-2026',
    title: 'The 2026 Delimitation Conundrum: Demographic Asymmetry, Federalism, and Article 81',
    topicId: 'art-81-composition-lok-sabha',
    marksCategory: 15,
    examCategory: 'UPSC_GS2',
    examsAppeared: ['UPSC CSE Mains GS-2 2023, 2024', 'UPSC Law Optional 2024'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~11 Mins',
    targetWordMin: 240,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~35 lines)',
    targetTimeMinutes: 11,
    questionText: 'Examine the constitutional framework governing the delimitation of parliamentary constituencies under Articles 81 and 82. Critically analyze the impending 2026 Delimitation freeze lift: How does the tension between demographic representation ("One Person, One Vote") and Federal Equilibrium challenge Indian democracy?',
    coreIssues: [
      'Constitutional mandate: Article 81(2)(a) (Ratio between seats and population shall be constant across all States).',
      'Article 82: Readjustment of allocation of seats after each census by an independent Delimitation Commission.',
      'The successive freezes: 42nd CAA (1976) freezing seat allocation until 2000 census; 84th CAA (2001) extending the freeze until the first census taken after 2026.',
      'Demographic divergence: Southern States successfully curtailed population growth (TFR below replacement 1.7), while Northern States (UP, Bihar, MP, Rajasthan) expanded in population.',
      'The Federal dilemma: If delimitation occurs strictly by population, Southern States lose significant parliamentary share despite superior governance; if frozen permanently, "One Person, One Vote" (Article 14) is distorted.'
    ],
    examinerExpectation:
      'Candidate must explain Articles 81 and 82. Detail why seats were frozen by 42nd and 84th Amendments (to avoid penalizing states implementing family planning). Explain the demographic cliff: strictly population-based delimitation would increase Lok Sabha strength in northern states and reduce the political leverage of southern states. Discuss potential solutions: capping Lok Sabha seats, strengthening Rajya Sabha representation on the US Senate equality model, or financial compensation.',
    essentialCitations: [
      '84th Constitutional Amendment Act, 2001',
      '87th Constitutional Amendment Act, 2003',
      'Sarkaria Commission on Centre-State Relations (1988)',
      'National Commission to Review the Working of the Constitution (NCRWC, 2002)'
    ],
    hoverIntel: {
      topicName: 'Delimitation 2026 & Federal Asymmetry (Article 81 & 82)',
      topicPillar: 'Part V: The Parliament & Federal Representation (Articles 81 & 82)',
      examImportance: '⭐⭐⭐⭐⭐ High Yield UPSC GS-2 Federalism Essay',
      examFrequency: 'Top anticipated constitutional topic in UPSC Mains GS-2',
      weightagePattern: '15 Marks • 250 Words (1.5 Pages)',
      targetTimeMinutes: 11,
      examinerTrapWarning:
        'Trap Alert: Distinguish between the 84th and 87th Amendments! The 84th Amendment froze the INTER-STATE seat allocation until post-2026, while the 87th Amendment allowed INTRA-STATE boundary readjustment based on the 2001 census without changing total state seats!',
      recentTrendAlert: 'Construction of the new Parliament building designed for 888 Lok Sabha seats.',
      coreArticles: ['Article 81', 'Article 82', 'Article 170', 'Article 14'],
      benchmarkCases: ['Delimitation Freeze Jurisprudence', 'Sarkaria Commission Findings']
    },
    answerBlueprint: {
      step1Intro: 'The Constitutional Mandate under Articles 81 and 82: Article 81(2)(a) mandates that the ratio between the number of Lok Sabha seats allocated to each State and its population shall, as far as practicable, be the same throughout India. Article 82 provides for readjustment of seat allocation after each decennial census by a Delimitation Commission.',
      step2DoctrinalCore: 'The History of Constitutional Freezes: The 42nd Amendment (1976) froze inter-state seat allocations at the 1971 census levels until the year 2000, so that States aggressively implementing National Family Planning policies would not be penalized with reduced parliamentary clout. The 84th Amendment (2001) extended this freeze until the first census taken after 2026.',
      step3PrecedentEvolution: 'The Impending Post-2026 Crisis: Over the last 50 years, the demographic trajectory of India diverged sharply. Southern States (Kerala, Tamil Nadu, Andhra Pradesh, Karnataka) successfully achieved Total Fertility Rates (TFR) below replacement level (1.7–1.8), while Northern States (UP, Bihar) maintained higher fertility rates. A purely population-based readjustment would shift parliamentary hegemony overwhelmingly to the Hindi heartland, breeding deep federal alienation.',
      step4Conclusion: 'Ways Forward for Federal Harmony: Solutions include: (1) Reforming the Rajya Sabha to grant equal or weighted representation to all States regardless of population (on the US Senate model); (2) Retaining a permanent cap on state-wise Lok Sabha quotas while increasing internal seats; (3) Increasing legislative devolution and state autonomy to counter central majoritarianism.'
    },
    fullModelAnswer: `I. THE CONSTITUTIONAL FRAMEWORK OF ARTICLES 81 AND 82:
1. Article 81(2)(a) (Proportionality of Representation):
   Mandates that there shall be allotted to each State a number of seats in the Lok Sabha in such manner that the ratio between that number and the population of the State is, so far as practicable, the same for all States.
2. Article 82 (Readjustment after Census):
   Directs that upon completion of each decennial census, the allocation of seats in the Lok Sabha and the division of each State into territorial constituencies shall be readjusted by an independent statutory Delimitation Commission.

II. THE HISTORY OF DELIMITATION FREEZES:
- The 42nd Amendment Act (1976): Froze the inter-state allocation of seats based on the 1971 Census until the 2000 Census to ensure that States implementing national family planning programmes were not penalized with diminished parliamentary representation.
- The 84th Amendment Act (2001): Extended the freeze on the total number of seats allocated to each State until the first census taken after the year 2026.
- The 87th Amendment Act (2003): Permitted rationalization of internal constituency boundaries within a State based on the 2001 Census, without altering the State's aggregate seat quota.

III. THE POST-2026 FEDERAL DILEMMA:
When the post-2026 Census figures are operationalized, Indian democracy faces a profound constitutional clash:
1. The Principle of Democratic Equality ("One Person, One Vote"):
   Currently, an MP in Uttar Pradesh represents over 3 million citizens, whereas an MP in Kerala represents around 1.8 million. A strict application of Article 81(2) demands that parliamentary seats expand proportionally to reflect real population weight.
2. The Federal Balance:
   Southern States successfully brought their Total Fertility Rate (TFR) below replacement levels (≈1.7), contributing disproportionately to national GDP and tax revenues. Northern States, on account of population growth, would see massive seat gains. If Lok Sabha expands from 543 to over 800 seats, the Southern States' collective representation could drop from ~24% to below 18%, creating intense political alienation.

IV. CONSTITUTIONAL REFORM PATHWAYS:
1. Re-imagining the Rajya Sabha (Federal Chamber):
   Unlike the US Senate (where each state gets 2 senators regardless of size), the Rajya Sabha allocates seats based on population (Fourth Schedule). Amending the Fourth Schedule to grant equal or minimum guaranteed representation to each State in the Upper House could serve as a check on lower-house demographic dominance.
2. Capping Aggregate State Allocations:
   Delimitation can proceed internally within each State to correct intra-state malapportionment while capping the inter-state seat ratio for another generation.

CONCLUSION:
Democracy is not merely a majoritarian numbers game; it is a federal compact based on trust. Resolving the 2026 Delimitation puzzle requires a statesmanlike balance between individual voter equality (Article 14) and the preservation of federal equilibrium (Basic Structure).`,
    scoringRubric: [
      { criterion: 'Textual analysis of Articles 81, 82 and the proportional representation formula', marks: 3.5 },
      { criterion: 'Historical rationale of 42nd & 84th CAA freezes (family planning protection)', marks: 3.5 },
      { criterion: 'Analysis of demographic divergence and threat to federal equilibrium', marks: 4.5 },
      { criterion: 'Constructive constitutional solutions (Rajya Sabha reform & federal balance)', marks: 3.5 }
    ]
  }
];

