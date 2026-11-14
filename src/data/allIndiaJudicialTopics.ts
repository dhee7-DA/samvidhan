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
    }
  },
  {
    id: 'common-q2',
    title: 'Article 14: Manifest Arbitrariness as a Ground to Strike Down Primary Legislation',
    topicId: 'art-14-arbitrariness-equality',
    examsAppeared: ['DJS 2019, 2022', 'UP PCS-J 2018, 2023', 'UPSC Law Optional 2019, 2022', 'CLAT PG 2021, 2023'],
    typicalMarks: 20,
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
    }
  },
  {
    id: 'common-q3',
    title: 'Article 20(3): Compulsory Forensic Inquiries & The Privilege Against Self-Incrimination',
    topicId: 'art-20-22-custodial-forensics',
    examsAppeared: ['State Prosecution Exams (UP APO, Bihar APO, JKPSC PO)', 'DJS Criminal Law 2015, 2019', 'RJS 2016, 2021', 'CBI APP 2022'],
    typicalMarks: 25,
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
    }
  },
  {
    id: 'common-q4',
    title: 'Writ of Certiorari vs Prohibition & Maintainability against Private Bodies',
    topicId: 'writs-judicial-review-142',
    examsAppeared: ['Bihar Judicial 2014, 2018, 2021', 'UP PCS-J 2015, 2018', 'DJS 2017', 'UPSC Law Optional 2016, 2021'],
    typicalMarks: 20,
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
    }
  },
  {
    id: 'common-q5',
    title: 'The Basic Structure Doctrine & The 9th Schedule Shield (I.R. Coelho Twin Tests)',
    topicId: 'basic-structure-amending-power',
    examsAppeared: ['UPSC Law Optional 2014, 2018, 2022', 'UP PCS-J 2016, 2023', 'Bihar Judicial 2018', 'Haryana Judicial 2019'],
    typicalMarks: 25,
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
    }
  },
  {
    id: 'common-q6',
    title: 'Freedom of Speech in the Digital Era & The Proportionality Standard',
    topicId: 'art-19-speech-reasonable-restrictions',
    examsAppeared: ['DJS 2022', 'UPSC Law Optional 2021, 2023', 'CLAT PG 2020, 2022', 'UP PCS-J 2023'],
    typicalMarks: 20,
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
    }
  }
];
