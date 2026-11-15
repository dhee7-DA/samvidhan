import type { BootcampDay } from './bootcampTypes';
import { DAY1_MCQS_200, DAY1_COMPREHENSION_CASE_STUDIES } from './day1';
import { DAY2_MCQS_200, DAY2_COMPREHENSION_CASE_STUDIES } from './day2';
import { DAY3_MCQS_200, DAY3_COMPREHENSION_CASE_STUDIES } from './day3';
import { DAY4_MCQS_200, DAY4_COMPREHENSION_CASE_STUDIES } from './day4';
import { DAY5_MCQS_200, DAY5_COMPREHENSION_CASE_STUDIES } from './day5';

export const BOOTCAMP_DAYS_1_TO_5: BootcampDay[] = [
  // ==========================================
  // DAY 1: PREAMBLE, TERRITORY & CITIZENSHIP
  // ==========================================
  {
    dayNumber: 1,
    title: 'Preamble, Territory, Citizenship & Definition of State',
    subtitle: 'Constitutional Foundations, Judicial Review & Article 12 Instrumentality',
    phase: 'Phase 1: Foundational Pillars & Core Rights',
    estimatedHours: 6,
    targetArticles: ['Preamble', 'Article 1', 'Article 2', 'Article 3', 'Article 4', 'Article 5', 'Article 9', 'Article 11', 'Article 12', 'Article 13'],
    overview: 'Day 1 establishes the bedrock architecture of the Indian Republic: the nature of the Preamble as part of the Basic Structure, the indestructible Union of destructible States, single citizenship, the expansive definition of "State" under Article 12, and judicial review under Article 13.',
    coreConcepts: [
      {
        heading: 'Preamble as the Guiding Key to Constitutional Interpretation',
        articleAnchor: 'Preamble',
        synopsis: 'The Preamble embodies the philosophy and core values of the Constitution. It was held not to be part of the Constitution in Berubari (1960), but Kesavananda Bharati (1973) decisively held that the Preamble is an integral part of the Constitution and can be amended under Article 368 without altering the Basic Structure.',
        substantiveLaw: [
          '42nd Amendment Act 1976 added three words: "Socialist", "Secular", and "Integrity".',
          'S.R. Bommai (1994) affirmed Secularism as an unalterable Basic Feature of the Constitution.',
          'Preamble is neither a source of legislative power nor a limitation upon power, but acts as a lodestar for resolving statutory ambiguities.'
        ],
        prosecutionAngle: 'Prosecuting officers cite the Preamble when establishing the social purpose of penal statutes and arguing against bail in offenses threatening secular communal harmony or national integrity.'
      },
      {
        heading: 'Territory of the Union & Reorganisation of States',
        articleAnchor: 'Articles 1–4',
        synopsis: 'India is an "Indestructible Union of Destructible States". Parliament possesses plenary power under Article 3 to form new States, alter boundaries, and change state names by a simple majority, without requiring the State Legislature\'s consent.',
        substantiveLaw: [
          'Article 1: "India, that is Bharat, shall be a Union of States."',
          'Article 2: Admission or establishment of new States (external territories).',
          'Article 3: Formation of new States and alteration of areas/names (internal reorganisation).',
          'Article 4: Laws under Articles 2 and 3 do not require constitutional amendment under Article 368.'
        ],
        prosecutionAngle: 'Governed the constitutional restructuring of Jammu & Kashmir under the J&K Reorganisation Act, 2019, abolishing special status and reconstituting the territory into Union Territories.'
      },
      {
        heading: 'Instrumentality of the State & Judicial Review',
        articleAnchor: 'Articles 12 & 13',
        synopsis: 'Article 12 defines against whom Fundamental Rights can be enforced. Article 13 provides the tooth to Part III by declaring any law inconsistent with Fundamental Rights to be void ab initio.',
        substantiveLaw: [
          'Ajay Hasia (1981): 6-factor test for "other authorities" (deep and pervasive State financial, functional, and administrative control).',
          'Doctrine of Severability: Only the offending portion of a statute is struck down if the valid portion can operate independently (A.K. Gopalan, R.M.D. Chamarbaugwalla).',
          'Doctrine of Eclipse: Pre-constitutional laws violating Part III are not dead, but remain dormant/eclipsed until a constitutional amendment removes the shadow (Bhikaji Narain).'
        ],
        prosecutionAngle: 'Crucial for defending police manuals, state prosecution directives, and detention orders against writ challenges under Article 226/32.'
      }
    ],
    landmarkEvolutionPairs: [
      {
        subject: 'Status of the Preamble in Constitutional Hierarchy',
        classicCase: {
          name: 'In re Berubari Union and Exchange of Enclaves',
          year: 1960,
          bench: '8-Judge Bench (Gajendragadkar J)',
          ratio: 'Held that the Preamble is NOT a part of the Constitution and confers no substantive power.'
        },
        modernCase: {
          name: 'Kesavananda Bharati v. State of Kerala',
          year: 1973,
          bench: '13-Judge Bench (7:6 Majority)',
          ratio: 'Overruled Berubari. Held that Preamble is an integral part of the Constitution, embodies the Basic Structure, and can be amended under Article 368 without destroying its core ethos.'
        },
        examApplicationNote: 'Always cite Kesavananda alongside S.R. Bommai (1994) to demonstrate that the Preamble reflects the unalterable constitutional identity of India.'
      }
    ],
    dictionaryTerms: [
      'Actus Reus', 'Mens Rea', 'Audi Alteram Partem', 'Ultra Vires', 'Doctrine of Eclipse',
      'Doctrine of Severability', 'Basic Structure Doctrine', 'Locus Standi', 'Certiorari', 'Habeas Corpus',
      'Mandamus', 'Quo Warranto', 'Colorable Legislation', 'Judicial Review', 'Sovereignty'
    ],
    svgConceptType: 'territory-citizenship',
    caseStudy: {
      title: 'Municipal Parking Toll Enforcement & Article 12 Amenability',
      factualMatrix: 'The City Municipal Corporation outsourced the entire roadside parking collection, vehicle wheel-clamping, and towing enforcement of Srinagar commercial districts to "Apex Private Urban Mobility Ltd.", a private joint-venture company where the Corporation held 51% equity shares and nominated 3 of the 5 board directors. The private company deployed armed bouncers, levied exorbitant on-the-spot penalty fines without statutory notice, and clamped vehicles arbitrarily without issuing compounding receipts under the Motor Vehicles Act. Mr. T, a practicing advocate whose car was clamped outside the High Court, filed a writ under Article 226 challenging the fines as arbitrary and violative of Articles 14 and 21. The private company objected, arguing that as a registered private company under the Companies Act, it was not "the State" under Article 12 and therefore immune from Fundamental Rights writ petitions.',
      framingQuestions: [
        '1. Does Apex Private Urban Mobility Ltd. qualify as an "instrumentality or agency of the State" under Article 12 applying the Ajay Hasia and Pradeep Kumar Biswas principles?',
        '2. Can sovereign police/regulatory powers (such as impounding property, towing, and levying penal fines) be outsourced to private commercial entities without express statutory sanction?',
        '3. Is the writ petition maintainable under Article 226 even if the entity claims to be non-statutory?'
      ],
      statutoryApplicability: ['Article 12', 'Article 14', 'Article 21', 'Article 226', 'Motor Vehicles Act, 1988'],
      modelAnswer: '1. AMENABILITY UNDER ARTICLE 12: Applying the 6-factor test in Ajay Hasia v. Khalid Mujib (1981) as refined in Pradeep Kumar Biswas v. Indian Institute of Chemical Biology (2002 7-Judge Bench), an entity is an "authority" under Article 12 if it is functionally, financially, and administratively dominated by the Government. Here, the Municipal Corporation holds 51% equity (majority ownership), nominates 3 out of 5 directors (administrative control), and has delegated a statutory municipal/police function (traffic regulation and parking fines). Thus, the company is an instrumentality of the State under Article 12.\n\n2. ILLEGAL DELEGATION OF SOVEREIGN PENAL POWERS: Sovereign powers involving detention of private property (wheel-clamping/towing) and imposition of pecuniary penalties can only be exercised under express authority of law (Article 265 and Article 300A). In Zee Telefilms (2005) and Ramana Dayaram Shetty (1979), the Supreme Court held that public authorities cannot bypass constitutional discipline by outsourcing sovereign regulatory powers to private agents.\n\n3. WRIT JURISDICTION UNDER ARTICLE 226: Unlike Article 32 which is limited to Part III enforcement, Article 226 empowers High Courts to issue writs to "any person or authority... for any other purpose". In Andi Mukta Sadguru (1989), the Court held that wherever an entity discharges a "public duty", mandamus lies regardless of corporate status. Consequently, the High Court will entertain the writ, quash the arbitrary penalties, and direct regulatory compliance.',
      markingRubric: [
        { criterion: 'Application of Ajay Hasia & Pradeep Kumar Biswas 6-factor test', marks: 4 },
        { criterion: 'Analysis of delegation of sovereign penal/coercive powers under Art 300A', marks: 3 },
        { criterion: 'Scope of Article 226 writ jurisdiction over private bodies performing public duties (Andi Mukta)', marks: 3 }
      ]
    },
    comprehensionCaseStudies: DAY1_COMPREHENSION_CASE_STUDIES,
    mcqs: DAY1_MCQS_200
  },

  // ==========================================
  // DAY 2: RIGHT TO EQUALITY & AFFIRMATIVE ACTION
  // ==========================================
  {
    dayNumber: 2,
    title: 'Right to Equality & Affirmative Action (Articles 14–18)',
    subtitle: 'Rule of Law, Non-Arbitrariness, Creamy Layer & 2024 SC/ST Sub-Classification',
    phase: 'Phase 1: Foundational Pillars & Core Rights',
    estimatedHours: 6,
    targetArticles: ['Article 14', 'Article 15', 'Article 16', 'Article 17', 'Article 18', 'Article 341'],
    overview: 'Day 2 tackles the cornerstone of Indian constitutionalism: Equality before the law, dynamic non-arbitrariness, protective discrimination, reservations in public employment, the creamy layer doctrine, and the historic 7-Judge Bench ruling in State of Punjab v. Davinder Singh (2024).',
    coreConcepts: [
      {
        heading: 'Dual Facets of Article 14: Classification vs. Dynamic Non-Arbitrariness',
        articleAnchor: 'Article 14',
        synopsis: 'Article 14 guarantees "Equality before the law" (negative English concept) and "Equal protection of the laws" (affirmative American concept). It permits reasonable classification, but unguided, arbitrary state action is antithetical to equality.',
        substantiveLaw: [
          'Old Doctrine (Anwar Ali Sarkar 1952): Two-fold test of Reasonable Classification: (1) Intelligible differentia, and (2) Rational nexus to the legislative object.',
          'New Dynamic Doctrine (E.P. Royappa 1974 & Maneka Gandhi 1978): "Equality is a dynamic concept with many aspects and dimensions and it cannot be \'cribbed, cabined and confined\' within traditional limits. Equality and arbitrariness are sworn enemies."',
          'Shayara Bano (2017) & Joseph Shine (2018): "Manifest Arbitrariness" recognized as an independent ground to strike down plenary primary legislation under Article 14.'
        ],
        prosecutionAngle: 'Prosecuting officers use Article 14 classification principles to defend special criminal trial procedures, fast-track courts for heinous crimes, and statutory reverse-burden clauses (e.g. NDPS, POCSO, PMLA).'
      },
      {
        heading: 'Protective Discrimination & Reservation Architecture',
        articleAnchor: 'Articles 15 & 16',
        synopsis: 'Articles 15(4), 15(5), 15(6), 16(4), 16(4A), 16(4B), and 16(6) are not exceptions to equality, but emphatic restatements of substantive equality to uplift historically disadvantaged sections.',
        substantiveLaw: [
          'Indra Sawhney (1992 9-Judge Bench): Upheld 27% OBC quota; ruled reservations cannot exceed 50%; mandated exclusion of the "Creamy Layer"; barred reservations in promotions.',
          '77th & 81st Amendments: Inserted Article 16(4A) (consequential seniority in promotions for SC/ST) and Article 16(4B) (carry-forward rule exempt from 50% cap).',
          'M. Nagaraj (2006 5-Judge Bench): Upheld 16(4A) subject to the State demonstrating quantifiable data on backwardness, inadequate representation, and administrative efficiency (Article 335).',
          'Janhit Abhiyan (2022 5-Judge Bench): Upheld the 103rd Amendment granting 10% EWS quota, holding that the 50% ceiling applies to caste reservations, not economic criteria.'
        ],
        prosecutionAngle: 'Directly impacts prosecuting officer eligibility rosters, higher judicial services direct recruitment quotas, and departmental promotion committees.'
      },
      {
        heading: 'The 2024 Revolution: Sub-Classification & Creamy Layer in SCs/STs',
        articleAnchor: 'Article 16(4) & Article 341',
        synopsis: 'In August 2024, a 7-Judge Constitution Bench in State of Punjab v. Davinder Singh revolutionized Indian affirmative action jurisprudence by overruling E.V. Chinnaiah (2004).',
        substantiveLaw: [
          'Overruled Chinnaiah 6:1: Scheduled Castes do NOT constitute a single homogenous monolithic class.',
          'States have constitutional power under Article 16(4) to sub-classify SCs to provide preferential sub-quotas to more marginalized groups (e.g. Valmikis, Mazhabis, Arunthathiyars).',
          'Sub-classification does NOT tinker with the Presidential List under Article 341.',
          'Crucial Ratio: 4 of the majority judges held that the "Creamy Layer" principle must be applied to SCs and STs to prevent elite capture of affirmative action.'
        ],
        prosecutionAngle: 'A top-tier citation for Mains answers: distinguishes candidate answers from candidates citing outdated 2004 law.'
      }
    ],
    landmarkEvolutionPairs: [
      {
        subject: 'Sub-Classification within Scheduled Castes & The Creamy Layer',
        classicCase: {
          name: 'E.V. Chinnaiah v. State of Andhra Pradesh',
          year: 2004,
          bench: '5-Judge Bench (Santosh Hegde J)',
          ratio: 'Held that SCs notified under Article 341 form a single homogenous indivisible class. States have NO power under Article 16(4) to sub-classify or grant preferential quotas.'
        },
        modernCase: {
          name: 'State of Punjab v. Davinder Singh',
          year: 2024,
          bench: '7-Judge Constitution Bench (6:1 Majority)',
          ratio: 'EXPRESSLY OVERRULED Chinnaiah. Held that SCs are heterogeneous; States possess competence under Article 16(4) to create sub-quotas backed by empirical data; affirmed Creamy Layer application to SC/STs.'
        },
        examApplicationNote: 'Mandatory exam pair for any question on Article 14, 16, or affirmative action. Citing Chinnaiah without noting Davinder Singh results in loss of marks.'
      }
    ],
    dictionaryTerms: [
      'Substantive Equality', 'Intelligible Differentia', 'Rational Nexus', 'Manifest Arbitrariness',
      'Creamy Layer', 'Protective Discrimination', 'Rule of Law', 'Sub-classification', 'Carry-Forward Rule',
      'Consequential Seniority', 'Eminent Domain', 'Res Judicata', 'Stare Decisis', 'Obiter Dicta', 'Ratio Decidendi'
    ],
    svgConceptType: 'equality-tree',
    caseStudy: {
      title: 'State Sub-Quotas for Mahadalits & Creamy Layer Challenge',
      factualMatrix: 'The State of Jammu & Kashmir enacted the "J&K Backward & Deprived Scheduled Castes (Affirmative Action) Act, 2025". Section 3 of the Act divided the existing 8% Scheduled Caste reservation quota into two equal compartments: 4% reserved exclusively for "Category-A (Extremely Deprived SCs - Safai Karamcharis, Manual Sweepers, and Balmiki communities)" and 4% for "Category-B (Remaining SC communities)". The Act was backed by an exhaustive State Empirical Survey demonstrating that 85% of all government employment under the SC quota had been monopolized by two relatively advanced sub-castes, while Valmiki communities held only 0.4% representation. Furthermore, Section 5 of the Act introduced an income exclusion of Rs 12 Lakhs per annum (Creamy Layer) for both SC sub-categories. An association of SC officers challenged the Act before the High Court, contending that: (1) The State legislature lacks competence to sub-divide the Presidential List under Article 341; (2) Chinnaiah (2004) bars micro-classification within SCs; and (3) Creamy layer cannot constitutionally be applied to SCs who suffered millennia of untouchability.',
      framingQuestions: [
        '1. Is the State competent to sub-classify Scheduled Castes under Article 16(4) in light of the 7-Judge Bench ruling in State of Punjab v. Davinder Singh (2024)?',
        '2. Does the creation of preferential sub-quotas alter or amend the Presidential Order under Article 341?',
        '3. Can the State validly apply the Creamy Layer exclusion principle to Scheduled Castes?'
      ],
      statutoryApplicability: ['Article 14', 'Article 15(4)', 'Article 16(4)', 'Article 341', 'State of Punjab v. Davinder Singh (2024)'],
      modelAnswer: '1. CONSTITUTIONAL COMPETENCE TO SUB-CLASSIFY: The challenge based on E.V. Chinnaiah (2004) is completely untenable. A 7-Judge Constitution Bench of the Supreme Court in State of Punjab v. Davinder Singh (2024) expressly overruled Chinnaiah. The Court held that Scheduled Castes do not form a single indivisible homogenous class. Profound intra-caste inequalities exist. Under Article 16(4), the State is competent to sub-classify SCs to achieve substantive equality, provided such sub-classification is backed by quantifiable empirical data proving inadequate representation of the sub-group. Here, the State conducted an exhaustive survey demonstrating 0.4% representation; hence, Section 3 is constitutionally valid.\n\n2. NO INFRINGEMENT OF ARTICLE 341: In Davinder Singh (2024), the Supreme Court drew a sharp distinction between the identification of castes under Article 341 (which is the exclusive prerogative of the President/Parliament) and the allocation of reservation benefits under Article 16(4) (which belongs to the States). Sub-classification does not add or remove any caste from the Presidential List; it merely apportions benefits among already notified castes. Therefore, Article 341 is not breached.\n\n3. VALIDITY OF CREAMY LAYER EXCLUSION IN SCs: In Davinder Singh (2024), four judges of the 7-Judge Bench (Gavai, Nath, Sharma, and Mithal JJ) categorically affirmed that the Creamy Layer principle—originally applied to OBCs in Indra Sawhney (1992) and Nagaraj (2006)—must be extended to SCs and STs. Substantive equality mandates that those who have overcome backwardness and reached affluent socioeconomic status should step aside so that truly impoverished brethren can access affirmative benefits. Consequently, Section 5\'s Creamy Layer bar of Rs 12 Lakhs is constitutionally valid.',
      markingRubric: [
        { criterion: 'Clear citation and application of State of Punjab v. Davinder Singh (2024 7-Judge Bench)', marks: 4 },
        { criterion: 'Distinction between Article 341 identification vs Article 16(4) allocation of quotas', marks: 3 },
        { criterion: 'Constitutional justification for applying Creamy Layer to SCs/STs', marks: 3 }
      ]
    },
    comprehensionCaseStudies: DAY2_COMPREHENSION_CASE_STUDIES,
    mcqs: DAY2_MCQS_200
  },

  // ==========================================
  // DAY 3: SIX FUNDAMENTAL FREEDOMS (ARTICLE 19)
  // ==========================================
  {
    dayNumber: 3,
    title: 'Six Fundamental Freedoms & Reasonable Restrictions (Article 19)',
    subtitle: 'Free Speech, Press Autonomy, Internet Rights, Electoral Transparency & Hate Speech',
    phase: 'Phase 1: Foundational Pillars & Core Rights',
    estimatedHours: 6,
    targetArticles: ['Article 19(1)(a)', 'Article 19(1)(b)', 'Article 19(1)(c)', 'Article 19(1)(d)', 'Article 19(1)(e)', 'Article 19(1)(g)', 'Article 19(2)–(6)'],
    overview: 'Day 3 explores the bedrock civil liberties under Article 19: freedom of speech and expression, peaceful assembly, association, movement, residence, and profession. Special focus is placed on the 8 exhaustive grounds of reasonable restrictions under 19(2), digital speech in Shreya Singhal, internet rights in Anuradha Bhasin, horizontal speech in Kaushal Kishor (2023), and the unconstitutionality of Electoral Bonds (2024).',
    coreConcepts: [
      {
        heading: 'Freedom of Speech & The 8 Exhaustive Grounds of Restriction',
        articleAnchor: 'Article 19(1)(a) & 19(2)',
        synopsis: 'Freedom of speech is the mother of all liberties. However, unlike the US First Amendment, Article 19(1)(a) is subject to 8 specific, exhaustive grounds of reasonable restrictions in Article 19(2).',
        substantiveLaw: [
          'The 8 Exhaustive Grounds under 19(2): (1) Sovereignty and integrity of India, (2) Security of the State, (3) Friendly relations with foreign States, (4) Public order, (5) Decency or morality, (6) Contempt of court, (7) Defamation, (8) Incitement to an offence.',
          'Romesh Thappar (1950): "Public order" is not synonymous with mere law and order; it requires an apprehension of public peace disruption.',
          'Shreya Singhal (2015): Struck down Section 66A IT Act. Distinguished between "Discussion", "Advocacy", and "Incitement". Only incitement justifies state criminal restriction.',
          'Proportionality Test (Modern Standard): Restriction must have a legitimate aim, rational connection, minimal impairment (least intrusive measure), and balance of impact.'
        ],
        prosecutionAngle: 'Essential for prosecuting hate speech (Sec 196 BNS), criminal defamation, sedition/subversive acts (Sec 152 BNS), and defending police preventive orders under Section 163 BNSS.'
      },
      {
        heading: 'Right to Information & Electoral Transparency',
        articleAnchor: 'Article 19(1)(a)',
        synopsis: 'Freedom of speech encompasses the right to know and receive information. Without informed citizens, democratic voting is an empty ritual.',
        substantiveLaw: [
          'Union of India v. ADR (2002 3-Judge Bench): Voters have a Fundamental Right under Article 19(1)(a) to know the criminal antecedents, assets, and education of candidates.',
          'PUCL (2003) & NOTA Case (2013): Upheld secrecy of voting and the right to register negative vote (None of the Above) under Article 19(1)(a).',
          'ADR v. Union of India (Electoral Bonds Case, Feb 2024 5-Judge Bench): Unanimously struck down the Electoral Bond Scheme. Anonymity in political donations deprives voters of their Right to Information regarding corporate influence on policy.'
        ],
        prosecutionAngle: 'Citing the 2024 Electoral Bonds judgment displays mastery over the expansion of Article 19(1)(a) into political and campaign transparency.'
      },
      {
        heading: 'Internet Rights & Digital Speech Governance',
        articleAnchor: 'Article 19(1)(a) & 19(1)(g)',
        synopsis: 'Modern commerce, profession, and speech occur over the internet. Blanket or indefinite internet blackouts violate Article 19.',
        substantiveLaw: [
          'Anuradha Bhasin v. Union of India (2020 3-Judge Bench): Freedom of speech and trade over the internet is constitutionally protected under Article 19(1)(a) and 19(1)(g).',
          'Indefinite internet shutdowns are impermissible; shutdown orders must satisfy the test of necessity and proportionality, and review committee orders must be published.',
          'Kaushal Kishor (2023 5-Judge Bench): Article 19(1)(a) can be enforced horizontally against private individuals; no additional restrictions beyond 19(2) can be imposed on speech of Ministers.'
        ],
        prosecutionAngle: 'Directly impacts prosecuting officers handling cybercrime, telecom interception orders, and preventive public order restrictions.'
      }
    ],
    landmarkEvolutionPairs: [
      {
        subject: 'Voter Information & Political Transparency under Article 19(1)(a)',
        classicCase: {
          name: 'Union of India v. Association for Democratic Reforms (ADR)',
          year: 2002,
          bench: '3-Judge Bench (M.B. Shah J)',
          ratio: 'Held that voters have a fundamental right under Article 19(1)(a) to know candidates\' criminal antecedents, assets, and liabilities.'
        },
        modernCase: {
          name: 'Association for Democratic Reforms v. Union of India (Electoral Bonds)',
          year: 2024,
          bench: '5-Judge Constitution Bench (Unanimous, CJI Chandrachud)',
          ratio: 'Applied ADR (2002) to party finances. Struck down anonymous Electoral Bonds because voter\'s Right to Information under Article 19(1)(a) extends to knowing who funds political parties.'
        },
        examApplicationNote: 'Cite ADR (2002) as the foundational seed and Electoral Bonds (2024) as the modern Constitution Bench fruition.'
      }
    ],
    dictionaryTerms: [
      'Freedom of Speech', 'Chilling Effect', 'Proportionality Test', 'Public Order', 'Incitement to Offence',
      'Horizontal Application', 'Manifest Arbitrariness', 'Defamation', 'Contempt of Court', 'Seditions Law',
      'Prior Restraint', 'Injunction', 'Freedom of Association', 'Reasonable Restrictions', 'Right to Information'
    ],
    svgConceptType: 'freedoms-grid',
    caseStudy: {
      title: 'Indefinite Mobile Internet Suspension in Border District',
      factualMatrix: 'Following localized student protests over fee hikes in a sensitive border district of J&K, the District Magistrate issued an order under the Temporary Suspension of Telecom Services (Public Emergency or Public Safety) Rules, 2017 read with Section 163 BNSS (former Section 144 CrPC), completely suspending all 4G/5G mobile internet and broadband connectivity throughout the entire district "until further notice". The order cited "preventing anti-national propaganda and rumors". No periodic review was conducted by the Review Committee, and the order was not published in public newspapers or the district portal. A group of independent investigative journalists and e-commerce traders challenged the suspension under Article 226 before the High Court, asserting that their livelihood and reporting were crippled for 45 consecutive days.',
      framingQuestions: [
        '1. Is the freedom to access the internet and conduct trade online protected under Articles 19(1)(a) and 19(1)(g) of the Constitution?',
        '2. Does an "indefinite" suspension of internet services comply with the proportionality and procedural guidelines settled in Anuradha Bhasin v. Union of India (2020)?',
        '3. Can the State refuse to publish internet suspension orders citing public security?'
      ],
      statutoryApplicability: ['Article 19(1)(a)', 'Article 19(1)(g)', 'Article 19(2)', 'Anuradha Bhasin (2020)', 'Telecom Suspension Rules 2017'],
      modelAnswer: '1. CONSTITUTIONAL STATUS OF INTERNET ACCESS: In Anuradha Bhasin v. Union of India (2020), a 3-Judge Bench of the Supreme Court categorically ruled that freedom of speech and expression through the medium of the internet is an integral part of Article 19(1)(a). Similarly, the right to carry on any trade, business, or occupation over the internet is constitutionally protected under Article 19(1)(g). Such rights can only be curtailed under valid statutory authority satisfying the reasonable restrictions in Articles 19(2) and 19(6).\n\n2. ILLEGALITY OF INDEFINITE SUSPENSION: In Anuradha Bhasin, the Court held that an indefinite suspension of telecom services is impermissible. Orders suspending the internet must adhere to the principle of Proportionality (Modern 4-prong test: legitimate purpose, rational nexus, necessity/least intrusive measure, and balanced impact). The executive must consider graded restrictions (e.g. blocking specific URLs or throttling speeds to 2G) rather than blanket total blackouts. A 45-day continuous blackout for student protests is disproportionate.\n\n3. MANDATORY PUBLICATION & PROCEDURAL BREACH: The Supreme Court held that the State cannot keep suspension orders secret. All orders suspending internet access must be published promptly to enable affected citizens to exercise their constitutional right of judicial review under Article 226. Furthermore, the Review Committee must meet within 5 working days to assess necessity. Here, the failure to publish the order and absence of periodic review renders the DM\'s order ultra vires and unconstitutional.',
      markingRubric: [
        { criterion: 'Recognition of internet rights under Articles 19(1)(a) & 19(1)(g) (Anuradha Bhasin)', marks: 4 },
        { criterion: 'Application of the 4-prong Proportionality Test against blanket shutdowns', marks: 3 },
        { criterion: 'Procedural mandates of publication and mandatory Review Committee timelines', marks: 3 }
      ]
    },
    comprehensionCaseStudies: DAY3_COMPREHENSION_CASE_STUDIES,
    mcqs: DAY3_MCQS_200
  },

  // ==========================================
  // DAY 4: CRIMINAL SAFEGUARDS (ARTICLES 20 & 22)
  // ==========================================
  {
    dayNumber: 4,
    title: 'Criminal Safeguards, Arrest & Custodial Rights (Articles 20 & 22)',
    subtitle: 'Ex-Post Facto, Double Jeopardy, Self-Incrimination, Written Grounds of Arrest & 2024 Bail Protections',
    phase: 'Phase 1: Foundational Pillars & Core Rights',
    estimatedHours: 6,
    targetArticles: ['Article 20(1)', 'Article 20(2)', 'Article 20(3)', 'Article 22(1)', 'Article 22(2)', 'Article 22(4)–(7)'],
    overview: 'Day 4 represents the vital heart of the Prosecuting Officer examination: procedural criminal safeguards, protection against retrospective penal laws, double jeopardy, right against self-incrimination, narco/polygraph limits, mandatory written grounds of arrest, and limits on police surveillance in bail conditions.',
    coreConcepts: [
      {
        heading: 'The Triad of Article 20: Inviolable Criminal Protections',
        articleAnchor: 'Article 20',
        synopsis: 'Article 20 cannot be suspended even during a National Emergency under Article 359 (44th Amendment). It protects every accused person against state prosecution abuse.',
        substantiveLaw: [
          'Article 20(1) Ex-Post Facto Law: No person shall be convicted of any offence except for violation of a law in force at the time of the commission of the act, nor subjected to a greater penalty than that which might have been inflicted. (Rattan Lal v. State of Punjab: Beneficial retrospective laws CAN apply to an accused).',
          'Article 20(2) Double Jeopardy: "Nemo debet bis vexari pro una et eadem causa" (No one should be twice vexed for one and the same cause). Requires both prosecution AND punishment before a competent judicial court (Maqbool Hussain). Disciplinary departmental inquiry does not bar criminal trial.',
          'Article 20(3) Right Against Self-Incrimination: "Nemo tenetur seipsum accusare". Protects an accused from being compelled to be a witness against himself.',
          'Kathi Kalu Oghad (1961 11-Judge Bench): Giving handwriting exemplars, fingerprints, or bodily measurements is NOT self-incrimination because they do not convey personal knowledge.',
          'Selvi v. State of Karnataka (2010 3-Judge Bench): Involuntary administration of Narco-Analysis, Polygraph Lie-Detector, or BEAP Brain Mapping violates Article 20(3) and Article 21 personal liberty.'
        ],
        prosecutionAngle: 'Essential for evaluating witness examination under Section 180 BNSS (former 161 CrPC), polygraph applications, and confession admissibility under BSA 2023.'
      },
      {
        heading: 'Article 22 Arrest Safeguards & 2024 Written Grounds Mandate',
        articleAnchor: 'Article 22(1) & 22(2)',
        synopsis: 'Article 22 safeguards personal liberty against executive arrest: right to know grounds of arrest, right to legal counsel of choice, and mandatory production before a Magistrate within 24 hours.',
        substantiveLaw: [
          'Article 22(1): No person arrested shall be detained without being informed, as soon as may be, of the grounds for such arrest, nor denied the right to consult and be defended by a legal practitioner.',
          'Article 22(2): Mandatory production before the nearest Magistrate within 24 hours (excluding journey time). Failure to produce makes further custody illegal (Manoj v. State of M.P.).',
          'D.K. Basu (1997) & Arnesh Kumar (2014): Mandatory notice under Sec 41A CrPC (Sec 35 BNSS) before arrest for offenses punishable up to 7 years.',
          'Prabir Purkayastha v. State (NCT of Delhi) (May 2024 2-Judge Bench): Applied Pankaj Bansal (PMLA) across ALL criminal statutes and UAPA: Grounds of arrest MUST be communicated IN WRITING without delay to the accused and their advocate. Merely serving an arrest memo or citing statutory sections violates Article 22(1) and vitiates remand.'
        ],
        prosecutionAngle: 'Prosecuting officers must examine remand applications to confirm that written grounds were served; absence of written communication results in immediate discharge or bail.'
      },
      {
        heading: 'Bail Conditions & Digital Surveillance Protections (2024)',
        articleAnchor: 'Article 21 & Section 480/483 BNSS',
        synopsis: 'Bail conditions cannot destroy the essence of personal liberty or subject an accused on bail to perpetual surveillance.',
        substantiveLaw: [
          'Frank Vitus v. Narcotics Control Bureau (July 2024 2-Judge Bench, Oka & Bhuyan JJ): Struck down bail conditions requiring an accused to drop a Google Maps live location PIN or share 24/7 continuous GPS tracking with police.',
          'Held: Constant digital tracking violates the Right to Privacy under Article 21. Bail conditions must be reasonable, proportionate, and directed solely at securing trial attendance and preventing tampering.'
        ],
        prosecutionAngle: 'Prosecuting officers cannot seek perpetual digital tracking or unrealistic embassy assurances as bail conditions.'
      }
    ],
    landmarkEvolutionPairs: [
      {
        subject: 'Communication of Grounds of Arrest under Article 22(1)',
        classicCase: {
          name: 'D.K. Basu v. State of West Bengal',
          year: 1997,
          bench: '2-Judge Bench (Anand J)',
          ratio: 'Laid down 11 mandatory guidelines on arrest memos, inspection memos, medical examinations, and notifying relatives.'
        },
        modernCase: {
          name: 'Prabir Purkayastha v. State (NCT of Delhi)',
          year: 2024,
          bench: '2-Judge Bench (Gavai & Mehta JJ)',
          ratio: 'Revolutionized Article 22(1). Mandated that grounds of arrest MUST be communicated in WRITING to the accused without delay across all criminal laws and UAPA; oral intimation is invalid.'
        },
        examApplicationNote: 'The single most critical criminal-constitutional pair for a Prosecuting Officer exam. Connect Article 22(1) with Section 35 BNSS and Prabir Purkayastha.'
      }
    ],
    dictionaryTerms: [
      'Ex Post Facto', 'Double Jeopardy', 'Self-Incrimination', 'Remand', 'Custodial Remand',
      'Transit Remand', 'Arrest Memo', 'Default Bail', 'Anticipatory Bail', 'Preventive Detention',
      'Advisory Board', 'Confession', 'Police Custody', 'Judicial Custody', 'Compounding of Offence'
    ],
    svgConceptType: 'criminal-shield',
    caseStudy: {
      title: 'Arrest under Special Penal Statute without Written Grounds',
      factualMatrix: 'Acting on intelligence reports of subversive funding, the Anti-Terror Special Cell arrested Mr. R, a local businessman, under Section 13/18 of the UAPA and Section 152 of the Bharatiya Nyaya Sanhita (BNS). At the time of arrest at 11:00 PM, the arresting officer served an "Arrest Memo" which stated: "Arrested in Case FIR No. 42/2025 under Sections 13/18 UAPA and Sec 152 BNS". The officer orally read out that Mr. R was suspected of financing unlawful assemblies, but no separate written document setting out the factual allegations or evidence was given to Mr. R or his family. The next morning at 10:00 AM (within 11 hours), Mr. R was produced before the Judicial Magistrate. The Magistrate remanded Mr. R to 7 days police custody without Mr. R\'s counsel being supplied the written remand grounds. On the 3rd day, Mr. R\'s counsel filed a Habeas Corpus petition under Article 226 before the High Court, asserting that the arrest and remand were void ab initio for non-compliance with Article 22(1) and the recent Supreme Court ruling in Prabir Purkayastha (2024). The State Public Prosecutor argued that oral communication of grounds was sufficient and UAPA being an anti-terror statute does not require written grounds before remand.',
      framingQuestions: [
        '1. Does Article 22(1) mandate the communication of grounds of arrest in writing, even under special penal statutes like the UAPA?',
        '2. What is the legal distinction between an "Arrest Memo" listing penal sections and the "Grounds of Arrest"?',
        '3. Does the failure to serve written grounds of arrest vitiate the subsequent remand order passed by the Magistrate, entitling the accused to release?'
      ],
      statutoryApplicability: ['Article 22(1)', 'Section 35 BNSS', 'UAPA, 1967', 'Prabir Purkayastha v. State (2024)', 'Pankaj Bansal v. UOI (2023)'],
      modelAnswer: '1. MANDATORY WRITTEN GROUNDS UNDER ARTICLE 22(1): In Prabir Purkayastha v. State (NCT of Delhi) (May 2024), a Division Bench of the Supreme Court categorically held that the fundamental right under Article 22(1) to be informed of the grounds of arrest applies equally to arrests under special penal statutes like the UAPA and PMLA as it does to general offenses under BNS/IPC. The Court explicitly ruled that the grounds of arrest MUST be furnished in writing without delay so that the accused can effectively consult legal counsel and contest detention.\n\n2. ARREST MEMO VS. GROUNDS OF ARREST: Merely handing over an arrest memo containing statutory sections (e.g. "Sections 13/18 UAPA") or orally telling the accused what he is suspected of does NOT satisfy Article 22(1). An arrest memo only notes the factum and time of arrest. The "grounds of arrest" require a clear, written statement of the factual allegations, specific acts attributed, and material upon which the arrest is predicated.\n\n3. EFFECT ON REMAND ORDER & RIGHT TO RELEASE: In Prabir Purkayastha (2024), the Supreme Court ruled that when an arrest is effected without serving written grounds, the arrest itself is unconstitutional and void ab initio. A subsequent remand order passed by the Magistrate cannot cure the initial constitutional illegality. The remand order is vitiated for non-application of mind to Article 22(1). Consequently, the High Court will declare the arrest and detention unlawful and direct the immediate release of Mr. R from custody.',
      markingRubric: [
        { criterion: 'Application of Prabir Purkayastha (2024) and Article 22(1) mandate for written grounds', marks: 4 },
        { criterion: 'Distinction between statutory arrest memo vs substantive factual grounds of arrest', marks: 3 },
        { criterion: 'Vitiation of subsequent judicial remand order and direction of release', marks: 3 }
      ]
    },
    comprehensionCaseStudies: DAY4_COMPREHENSION_CASE_STUDIES,
    mcqs: DAY4_MCQS_200
  },

  // ==========================================
  // DAY 5: LIFE, LIBERTY, SHELTER & UNTOUCHABILITY
  // ==========================================
  {
    dayNumber: 5,
    title: 'Life, Liberty, Shelter & Untouchability (Articles 21, 21A, 17, 23)',
    subtitle: 'Golden Triangle, Anti-Bulldozer Guidelines (2024), Prison Labor Abolition (2024) & Climate Rights (2024)',
    phase: 'Phase 1: Foundational Pillars & Core Rights',
    estimatedHours: 6,
    targetArticles: ['Article 21', 'Article 21A', 'Article 17', 'Article 23', 'Article 24', 'Article 300A'],
    overview: 'Day 5 investigates the most expansive right in the Indian Constitution: Article 21 Right to Life and Personal Liberty, the Golden Triangle (Articles 14, 19, 21), the 2024 pan-India anti-demolition guidelines ("Bulldozer Justice"), abolition of caste discrimination in prisons under Sukanya Shantha (2024), climate constitutionalism in M.K. Ranjitsinh (2024), and the prohibition of human trafficking and forced labor under Article 23.',
    coreConcepts: [
      {
        heading: 'The Metamorphosis of Article 21 & The Golden Triangle',
        articleAnchor: 'Article 21',
        synopsis: 'From the narrow, literal "procedure established by law" in A.K. Gopalan (1950) to the expansive substantive due process in Maneka Gandhi (1978). Article 21 cannot be read in isolation; it must satisfy Articles 14 and 19 (The Golden Triangle).',
        substantiveLaw: [
          'A.K. Gopalan (1950): Watertight compartment theory rejected. Held that "procedure established by law" meant any enacted law, however harsh.',
          'Maneka Gandhi (1978 7-Judge Bench): Overruled Gopalan. Procedure depriving personal liberty must be "just, fair, and reasonable", and not fanciful, oppressive, or arbitrary.',
          'Expanded Facets of Article 21: Right to privacy (Puttaswamy 2017), right to clean environment (M.C. Mehta 1987), right against adverse climate change (M.K. Ranjitsinh 2024), right to medical care (Parmanand Katara 1989), right to speedy trial (Hussainara Khatoon 1979), right to legal aid (M.H. Hoskot 1978).'
        ],
        prosecutionAngle: 'Prosecuting officers must ensure that all procedural steps in investigation, seizure, and remand comply with fairness and natural justice to avoid evidence exclusion.'
      },
      {
        heading: 'Right to Shelter & Anti-Demolition Guidelines (Nov 2024)',
        articleAnchor: 'Articles 21, 14, 300A',
        synopsis: 'The Supreme Court in November 2024 dealt a decisive blow to executive punitive demolitions ("Bulldozer Justice"), anchoring the Right to Shelter in Article 21 and the doctrine of separation of powers.',
        substantiveLaw: [
          'Olga Tellis (1985 5-Judge Bench): Right to life includes the right to livelihood and shelter; summary demolition without notice violates Article 21.',
          'In re: Demolition of Structures (Bulldozer Guidelines, Nov 2024 2-Judge Bench, Gavai & Viswanathan JJ): Condemned punitive demolitions as unconstitutional executive overreach. The executive cannot act as judge and punitively demolish properties of an accused or convict.',
          'Mandatory Pan-India Guidelines: (1) Minimum 15 days show-cause notice registered by speed post and pasted on premises; (2) Personal hearing before quasi-judicial authority; (3) Digital portal with municipal records; (4) Mandatory videography of demolition; (5) Erring officials held personally liable for restitution and contempt.'
        ],
        prosecutionAngle: 'A top-tier 2024 precedent: distinguishes candidates who know the latest administrative law constraints on state police and municipal machinery.'
      },
      {
        heading: 'Abolition of Untouchability & Prison Labor Segregation (Oct 2024)',
        articleAnchor: 'Articles 17, 15, 23, 21',
        synopsis: 'In October 2024, a 3-Judge Bench in Sukanya Shantha v. Union of India struck down caste-based division of labor and segregation in State Prison Manuals.',
        substantiveLaw: [
          'Article 17 completely abolishes "Untouchability". Article 23 prohibits "begar" and other forced labor.',
          'PUDR v. Union of India (Asiad Workers 1982): Taking labor under economic compulsion or below minimum wages constitutes prohibited "forced labor" under Article 23.',
          'Sukanya Shantha v. Union of India (Oct 2024 CJI Chandrachud): Struck down prison manual rules in UP, Rajasthan, MP, and WB allocating latrine cleaning/sweeping to lower castes and cooking to upper castes. Held: assigning menial labor on caste lines is a direct manifestation of Untouchability (Art 17) and forced labor (Art 23).'
        ],
        prosecutionAngle: 'Directly impacts prison administration, jail inspection by judicial magistrates, and human rights oversight of correctional homes.'
      }
    ],
    landmarkEvolutionPairs: [
      {
        subject: 'Right to Shelter & Anti-Demolition Due Process',
        classicCase: {
          name: 'Olga Tellis v. Bombay Municipal Corporation',
          year: 1985,
          bench: '5-Judge Bench (Y.V. Chandrachud CJI)',
          ratio: 'Held that Right to Life includes Right to Livelihood and Shelter. Pavement dwellers cannot be evicted without procedural natural justice.'
        },
        modernCase: {
          name: 'In re: Directions in Demolition of Structures (Bulldozer Guidelines)',
          year: 2024,
          bench: '2-Judge Bench (Gavai & Viswanathan JJ)',
          ratio: 'Outlawed punitive demolitions of accused persons\' homes. Mandated 15-day notice, hearing, and personal restitution liability on erring officers under Article 21 & 300A.'
        },
        examApplicationNote: 'Pair Olga Tellis (1985) directly with the 2024 Bulldozer Guidelines when answering any question on Article 21, shelter, or separation of powers.'
      }
    ],
    dictionaryTerms: [
      'Right to Shelter', 'Procedure Established by Law', 'Due Process of Law', 'Untouchability', 'Begar',
      'Forced Labor', 'Golden Triangle', 'Absolute Liability', 'Strict Liability', 'Public Trust Doctrine',
      'Precautionary Principle', 'Polluter Pays Principle', 'Custodial Torture', 'Speedy Trial', 'Free Legal Aid'
    ],
    svgConceptType: 'due-process-flow',
    caseStudy: {
      title: 'Punitive Demolition of Accused\'s Residential Dwelling',
      factualMatrix: 'Following a communal altercation in an industrial town, an FIR was registered against Mr. K for alleged rioting and assault under Section 191(2) BNS. Within 24 hours of the FIR registration, the Municipal Commissioner, accompanied by heavy police reinforcement and bulldozers, arrived at Mr. K\'s two-story ancestral home where his elderly parents, wife, and minor children resided. The Commissioner pasted a back-dated notice on the outer gate alleging that the ground floor porch was an unauthorized building encroachment, gave the family 30 minutes to vacate their personal belongings, and razed the entire two-story house to the ground while the local police prevented the family from filming the demolition. When Mr. K\'s wife challenged the demolition before the High Court seeking compensation and prosecution of the officials, the Municipal Corporation argued that: (1) The structure had violated municipal building bylaws; and (2) Municipal Acts authorize summary removal of encroachments on public notice without lengthy court hearings.',
      framingQuestions: [
        '1. Can the State or municipal authorities punitively demolish the residential home of an individual merely because he is accused of a crime?',
        '2. Does summary administrative demolition without 15-day notice and hearing violate the binding guidelines laid down in In re: Demolition of Structures (Bulldozer Guidelines, Nov 2024)?',
        '3. Can the High Court order personal financial restitution and disciplinary action against the erring Municipal Commissioner and police officers?'
      ],
      statutoryApplicability: ['Article 21', 'Article 14', 'Article 300A', 'Olga Tellis (1985)', 'In re Demolition of Structures (Nov 2024)'],
      modelAnswer: '1. UNCONSTITUTIONALITY OF PUNITIVE DEMOLITIONS: In In re: Directions in the Matter of Demolition of Structures (Bulldozer Justice Guidelines, Nov 2024), a Division Bench of the Supreme Court held that the executive branch cannot usurp the judicial function of adjudicating guilt and punishment. An accused is presumed innocent until proven guilty by a competent court of law. Demolishing the home of an accused or convict as a punitive measure violates the Separation of Powers, Rule of Law, and the Right to Shelter guaranteed under Article 21.\n\n2. VIOLATION OF BINDING PAN-INDIA GUIDELINES: The Supreme Court laid down mandatory guidelines that govern all municipal and state authorities: (a) No demolition can be carried out without giving a minimum 15 days prior show-cause notice sent by registered post and pasted on the property; (b) The notice must specify the exact nature of unauthorized construction and grounds for demolition; (c) The noticee must be given a personal hearing before a designated appellate authority; (d) All proceedings must be video-recorded and uploaded onto a digital portal. Pasting a 30-minute notice to raze a full two-story ancestral home is a brazen, criminal contempt of the Supreme Court mandate.\n\n3. PERSONAL RESTITUTION & OFFICIAL ACCOUNTABILITY: The Supreme Court explicitly held that whenever a property is demolished in violation of the guidelines, the erring municipal and police officers shall be held PERSONALLY liable to pay for the complete reconstruction of the demolished structure and restitution of damages from their own pockets, in addition to disciplinary proceedings and contempt of court. The High Court will direct the State to reconstruct the house at the personal cost of the Municipal Commissioner and award exemplary compensation.',
      markingRubric: [
        { criterion: 'Application of In re: Demolition of Structures (Nov 2024) and separation of powers', marks: 4 },
        { criterion: 'Identification of procedural violations (15-day notice, hearing, videography)', marks: 3 },
        { criterion: 'Personal financial liability and restitution on erring executive officers', marks: 3 }
      ]
    },
    comprehensionCaseStudies: DAY5_COMPREHENSION_CASE_STUDIES,
    mcqs: DAY5_MCQS_200
  }
];
