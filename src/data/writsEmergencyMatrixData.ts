export interface WritMatrixItem {
  id: string;
  name: string;
  latinMeaning: string;
  literalTranslation: string;
  targetCategory: 'Personal Liberty' | 'Public Duty' | 'Constitutional Office' | 'Judicial Restraint' | 'Judicial Quashing';
  locusStandi: string;
  canThirdPartyApply: boolean;
  liesAgainst: string[];
  doesNotLieAgainst: string[];
  scopeUnderArt32: string;
  scopeUnderArt226: string;
  groundConditions: string[];
  landmarkPrecedents: {
    caseName: string;
    year: number;
    ratio: string;
  }[];
  examinerTraps: string[];
}

export const WRITS_MATRIX_DATA: WritMatrixItem[] = [
  {
    id: 'habeas-corpus',
    name: 'Habeas Corpus',
    latinMeaning: 'Habeas Corpus ad Subjiciendum',
    literalTranslation: 'You shall have the body',
    targetCategory: 'Personal Liberty',
    locusStandi: 'EXCEPTIONALLY RELAXED: Anyone can apply on behalf of the detained person (friend, relative, social worker, or prisoner postcard/letter treating it as PIL).',
    canThirdPartyApply: true,
    liesAgainst: [
      'State authorities (Police, Military, Prison officers, Investigation agencies)',
      'PRIVATE INDIVIDUALS (Unique writ: Habeas Corpus is the ONLY writ that lies against private persons holding someone in illegal confinement!)'
    ],
    doesNotLieAgainst: [
      'Where detention is in accordance with the order of a competent Court of Law',
      'Where detention is for contempt of Court or Parliament',
      'Where the person detained is outside the territorial jurisdiction of the Court (unless cause of action arose within it)'
    ],
    scopeUnderArt32: 'Supreme Court cannot refuse relief if custody is unlawful; Art 32 is a mandatory fundamental right.',
    scopeUnderArt226: 'High Court can issue writ across its territorial jurisdiction; broad powers including interim bail and compensation.',
    groundConditions: [
      'Detention without authority of law (e.g. failure to produce before magistrate within 24 hours under Art 22(2)).',
      'Detention in violation of mandatory constitutional procedural safeguards under Art 21 and 22.',
      'Mala fide or arbitrary arrest by police or private detention (e.g. unlawful detention of spouse/child).'
    ],
    landmarkPrecedents: [
      {
        caseName: 'Rudal Sah v. State of Bihar',
        year: 1983,
        ratio: 'Supreme Court awarded monetary compensation under Article 32 for illegal detention of 14 years after acquittal, establishing constitutional tort compensation.'
      },
      {
        caseName: 'D.K. Basu v. State of West Bengal',
        year: 1997,
        ratio: 'Laid down 11 mandatory guidelines for arrest, memo of arrest, information to relatives, and medical examination to prevent custodial torture.'
      },
      {
        caseName: 'Sunil Batra v. Delhi Administration',
        year: 1980,
        ratio: 'Expanded Habeas Corpus into a tool against custodial brutality inside prison; writ lies not only for total release, but to liberate prisoners from inhuman conditions.'
      }
    ],
    examinerTraps: [
      'TRAP 1: Habeas Corpus is the ONLY writ that can be issued against a PRIVATE INDIVIDUAL (e.g. father holding adult daughter in illegal confinement). Mandamus, Certiorari, and Prohibition CANNOT lie against purely private persons.',
      'TRAP 2: In A.D.M. Jabalpur (1976), SC held Habeas Corpus was not available during Emergency. THIS WAS OVERRULED by the 44th CAA (1978) which made Arts 20 & 21 non-suspendable, and formally buried in Puttaswamy (2017).',
      'TRAP 3: Habeas corpus does NOT lie where detention is executed under a valid warrant or judicial custody order passed by a competent court.'
    ]
  },
  {
    id: 'mandamus',
    name: 'Mandamus',
    latinMeaning: 'Mandamus',
    literalTranslation: 'We Command',
    targetCategory: 'Public Duty',
    locusStandi: 'STRICT LOCUS STANDI: Applicant must have a legal right to enforce the performance of the statutory public duty.',
    canThirdPartyApply: false,
    liesAgainst: [
      'Public officials and government departments',
      'Statutory corporations and municipal bodies',
      'Inferior courts or tribunals that refuse to exercise jurisdiction vested in them',
      'Government itself'
    ],
    doesNotLieAgainst: [
      'President of India or Governor of a State for the exercise of their official duties (absolute constitutional bar under Art 361(1))',
      'Private individuals or private commercial entities (unless performing a statutory public function)',
      'To enforce private contractual obligations without statutory backing',
      'To enforce non-statutory executive instructions or departmental guidelines',
      'To compel the legislature to enact a law'
    ],
    scopeUnderArt32: 'Enforces statutory/public duties essential to Part III rights.',
    scopeUnderArt226: 'Wider scope: Compels performance of any mandatory public or statutory duty.',
    groundConditions: [
      'Existence of a clear, mandatory statutory duty (not discretionary).',
      'Applicant must have made a prior demand for performance, and the authority must have refused/ignored it (Demand and Refusal rule).'
    ],
    landmarkPrecedents: [
      {
        caseName: 'Municipal Council, Ratlam v. Vardhichand',
        year: 1980,
        ratio: 'Krishna Iyer J: Municipality cannot plead lack of funds to avoid statutory duty of public sanitation; Mandamus issued to construct drainage under Art 21.'
      },
      {
        caseName: 'Gujarat State Financial Corporation v. Lotus Hotels',
        year: 1983,
        ratio: 'Mandamus lies against a statutory corporation to compel performance of an obligation where promissory estoppel creates a public duty.'
      }
    ],
    examinerTraps: [
      'TRAP 1: Mandamus CANNOT be issued against the President of India or a State Governor personally (Article 361(1)).',
      'TRAP 2: Mandamus does NOT lie to direct Parliament or a State Assembly to enact a law, nor can it be issued to enforce a purely discretionary power.',
      'TRAP 3: Mandamus requires a prior demand and refusal before approaching the court, unless a demand would be obviously futile.'
    ]
  },
  {
    id: 'quo-warranto',
    name: 'Quo Warranto',
    latinMeaning: 'Quo Warranto',
    literalTranslation: 'By what warrant or authority?',
    targetCategory: 'Constitutional Office',
    locusStandi: 'EXCEPTIONALLY RELAXED: ANY member of the public can apply! No personal injury or grievance is required because the public has an interest in ensuring only legally qualified individuals hold public office.',
    canThirdPartyApply: true,
    liesAgainst: [
      'A person who unlawfully usurps or holds a PUBLIC OFFICE of a substantive nature created by the Constitution or statute (e.g. Attorney General, Vice-Chancellor of statutory university, Judge, Advocate General).'
    ],
    doesNotLieAgainst: [
      'Private offices (e.g. managing director of a private company or society)',
      'Offices of a temporary or ministerial tenure held at will',
      'Where the person is duly qualified and appointed according to law'
    ],
    scopeUnderArt32: 'Directly ousts usurper of constitutional/public offices violating fundamental rights.',
    scopeUnderArt226: 'Frequently invoked in High Courts to challenge political/statutory appointments.',
    groundConditions: [
      'The office must be public, created by Constitution or statute.',
      'The office must be substantive (not temporary/at pleasure of an employer).',
      'The holder must not possess mandatory statutory qualifications.'
    ],
    landmarkPrecedents: [
      {
        caseName: 'B.R. Kapur v. State of Tamil Nadu',
        year: 2001,
        ratio: 'Supreme Court issued Quo Warranto ousting J. Jayalalithaa from Chief Ministership because she had been convicted and sentenced to over 2 years, rendering her disqualified under Representation of the People Act 1951.'
      },
      {
        caseName: 'University of Mysore v. C.D. Govinda Rao',
        year: 1965,
        ratio: 'Laid down the 4 essential conditions for Quo Warranto: office must be public, substantive, created by statute, and holder in illegal occupation.'
      }
    ],
    examinerTraps: [
      'TRAP 1: Like Habeas Corpus, Quo Warranto does NOT require personal locus standi; any citizen can file it as relator.',
      'TRAP 2: Quo Warranto CANNOT issue for a private post or company directorship, only for a public office created by statute or Constitution.',
      'TRAP 3: In B.R. Kapur (2001), SC held a non-legislator appointed Chief Minister/Minister who is disqualified from contesting under RPA cannot hold office; Quo Warranto lies.'
    ]
  },
  {
    id: 'prohibition',
    name: 'Prohibition',
    latinMeaning: 'Prohibition',
    literalTranslation: 'To forbid / Stay proceedings',
    targetCategory: 'Judicial Restraint',
    locusStandi: 'Party to the pending proceeding before inferior court/tribunal.',
    canThirdPartyApply: false,
    liesAgainst: [
      'Subordinate Courts, Magistrates, and Quasi-Judicial Tribunals (e.g. Tax Tribunal, Service Tribunal, NGT) WHILE PROCEEDINGS ARE PENDING.'
    ],
    doesNotLieAgainst: [
      'Legislative bodies or Parliament',
      'Administrative/Executive authorities performing purely executive functions',
      'Private bodies or individuals',
      'Proceedings that have already concluded (once an order is passed, Certiorari lies, not Prohibition!)'
    ],
    scopeUnderArt32: 'Prevents inferior bodies from proceeding in violation of Fundamental Rights.',
    scopeUnderArt226: 'Enforces jurisdictional discipline across subordinate state judiciary and tribunals.',
    groundConditions: [
      'Total absence or excess of jurisdiction.',
      'Violation of principles of natural justice (audi alteram partem / bias).',
      'Unconstitutionality of the statute conferring jurisdiction.'
    ],
    landmarkPrecedents: [
      {
        caseName: 'East India Commercial Co. v. Collector of Customs',
        year: 1962,
        ratio: 'Prohibition issues to prevent an inferior tribunal from usurping jurisdiction not vested in it, commanding it not to exceed the bounds of its authority.'
      }
    ],
    examinerTraps: [
      'TRAP 1: TIMING TRAP: Prohibition is PREVENTIVE (issues while case is pending). Certiorari is REMEDIAL/CURATIVE (issues AFTER the order has been passed to quash it).',
      'TRAP 2: Prohibition does NOT lie against purely administrative officers or legislative bodies.'
    ]
  },
  {
    id: 'certiorari',
    name: 'Certiorari',
    latinMeaning: 'Certiorari',
    literalTranslation: 'To be certified / To be informed',
    targetCategory: 'Judicial Quashing',
    locusStandi: 'Aggrieved party whose rights have been prejudiced by a judicial or quasi-judicial order.',
    canThirdPartyApply: false,
    liesAgainst: [
      'Inferior Courts and Quasi-Judicial Tribunals',
      'Administrative authorities when exercising quasi-judicial powers affecting rights of citizens'
    ],
    doesNotLieAgainst: [
      'Purely legislative bodies enacting primary law',
      'Purely private individuals or companies'
    ],
    scopeUnderArt32: 'Quashes unconstitutional orders violating Part III rights.',
    scopeUnderArt226: 'Supervisory corrective jurisdiction quashing orders of subordinate tribunals.',
    groundConditions: [
      'Lack or excess of jurisdiction.',
      'Violation of principles of natural justice.',
      'Error of law apparent on the face of the record (not mere error of fact!).'
    ],
    landmarkPrecedents: [
      {
        caseName: 'Syed Yakoob v. K.S. Radhakrishnan',
        year: 1964,
        ratio: 'Certiorari lies for an "error of law apparent on the face of the record", but NOT for an error of fact or erroneous evaluation of evidence. Writ court does not sit as an appellate court!'
      },
      {
        caseName: 'Hari Vishnu Kamath v. Ahmad Ishaque',
        year: 1955,
        ratio: 'Exhaustively distinguished Prohibition (issues before trial) from Certiorari (issues after decision to quash records).'
      }
    ],
    examinerTraps: [
      'TRAP 1: A writ of Certiorari is NOT an appeal! The High Court will NOT re-appreciate evidence or correct a mere factual mistake. It only corrects jurisdictional excess, natural justice breach, or a patent error of law on the face of the record.',
      'TRAP 2: In AK Kraipak (1969), SC held the dividing line between an administrative power and quasi-judicial power has become thin; natural justice applies to administrative actions as well.'
    ]
  }
];

export interface EmergencyMatrixItem {
  type: string;
  article: string;
  hindiName: string;
  grounds: string;
  cabinetAdvice: string;
  approvalWindow: string;
  approvalMajority: string;
  durationPerExtension: string;
  maxLifespan: string;
  revocationProcedure: string;
  effectOnFundamentalRights: string;
  effectOnFederalism: string;
  timesInvoked: string;
  keyAmendments: string;
  examinerTraps: string[];
}

export const EMERGENCY_TRIO_DATA: EmergencyMatrixItem[] = [
  {
    type: 'National Emergency',
    article: 'Article 352',
    hindiName: 'राष्ट्रीय आपातकाल',
    grounds: 'War, External Aggression, or Armed Rebellion (44th CAA 1978 substituted "armed rebellion" for "internal disturbance").',
    cabinetAdvice: 'CRITICAL 44th CAA SAFEGUARD: President can issue proclamation ONLY after receiving written communication of the decision of the UNION CABINET (Prime Minister + other Cabinet Ministers). Oral advice by PM alone is unconstitutional!',
    approvalWindow: 'MUST be approved by both Houses within ONE MONTH (30 days) from the date of issue (reduced from 2 months by 44th CAA).',
    approvalMajority: 'SPECIAL MAJORITY (Type 2): Majority of total membership of each House AND not less than 2/3rd of members present and voting (44th CAA).',
    durationPerExtension: '6 MONTHS at a time, with subsequent Special Majority approvals.',
    maxLifespan: 'INDEFINITE (no maximum upper limit, as long as Parliament approves every 6 months by Special Majority).',
    revocationProcedure: 'By President at any time. ALSO, under 44th CAA, Lok Sabha can force revocation by passing a resolution with SIMPLE MAJORITY (if 1/10th members requisition a special sitting).',
    effectOnFundamentalRights: 'Art. 358: Automatic suspension of Art. 19 ONLY if emergency is on grounds of war or external aggression (NEVER for armed rebellion). Art. 359: Presidential Order can suspend enforcement of other rights, but Articles 20 and 21 can NEVER BE SUSPENDED under any circumstance!',
    effectOnFederalism: 'Unitary transformation: Parliament can make laws on any State List subject (Art 250); Union executive can give executive directions on any matter; State government is NOT suspended (functions concurrently under Centre).',
    timesInvoked: '3 times: 1962 (Chinese aggression), 1971 (Indo-Pak war), and 1975 (Internal disturbance by Indira Gandhi).',
    keyAmendments: '38th CAA (1975) made it non-justiciable; 44th CAA (1978) restored judicial review, introduced written cabinet advice, 1-month approval, 2/3rd special majority, and protected Arts 20 & 21.',
    examinerTraps: [
      'TRAP 1: The word "CABINET" appears in the Constitution in Article 352(3) ONLY (inserted by 44th CAA), nowhere else!',
      'TRAP 2: Approval requires 1 MONTH (not 2 months), and SPECIAL MAJORITY (not simple majority).',
      'TRAP 3: Article 19 is NOT suspended if emergency is declared on grounds of "armed rebellion" (44th CAA).'
    ]
  },
  {
    type: "President's Rule (State Emergency)",
    article: 'Article 356 & 365',
    hindiName: 'राष्ट्रपति शासन (संवैधानिक तंत्र की विफलता)',
    grounds: 'Art 356: Failure of constitutional machinery in State (Governor report or otherwise). Art 365: Failure of State to comply with or give effect to Union executive directions.',
    cabinetAdvice: 'Normal Council of Ministers advice to the President (no mandatory written cabinet sign-off).',
    approvalWindow: 'MUST be approved by both Houses of Parliament within TWO MONTHS (60 days) from date of issue.',
    approvalMajority: 'SIMPLE MAJORITY in both Houses (majority of members present and voting).',
    durationPerExtension: '6 MONTHS at a time, up to a maximum of 1 year normally.',
    maxLifespan: 'MAXIMUM 3 YEARS (Constitutional ceiling). Extension beyond 1 year requires: (1) National Emergency in operation, and (2) Election Commission certificate that elections cannot be held.',
    revocationProcedure: 'By the President at any time by subsequent proclamation; does not require parliamentary approval.',
    effectOnFundamentalRights: 'ZERO EFFECT on Fundamental Rights! No fundamental right can be suspended or altered during President’s Rule.',
    effectOnFederalism: 'Dismissal of State Council of Ministers; State Legislative Assembly is suspended (cannot be dissolved until Parliament approves under S.R. Bommai); Parliament exercises powers of State Legislature.',
    timesInvoked: '130+ times. First imposed in Punjab (1951). Severely restricted post-S.R. Bommai (1994).',
    keyAmendments: '44th CAA restricted extensions beyond 1 year via Art 356(5); S.R. Bommai (1994) 9-judge bench made proclamation fully justiciable.',
    examinerTraps: [
      'TRAP 1: Approval is by SIMPLE MAJORITY within 2 MONTHS (do not confuse with Art 352 special majority / 1 month).',
      'TRAP 2: S.R. Bommai guideline: State Assembly CANNOT be dissolved immediately upon proclamation! It can only be suspended. Dissolution is permitted only AFTER Parliament approves the proclamation within 2 months.',
      'TRAP 3: Has absolutely NO effect on Fundamental Rights of citizens in the State.'
    ]
  },
  {
    type: 'Financial Emergency',
    article: 'Article 360',
    hindiName: 'वित्तीय आपातकाल',
    grounds: 'Threat to the financial stability or credit of India or of any part of the territory thereof.',
    cabinetAdvice: 'Normal Council of Ministers advice to the President.',
    approvalWindow: 'MUST be approved by both Houses of Parliament within TWO MONTHS (60 days).',
    approvalMajority: 'SIMPLE MAJORITY in both Houses.',
    durationPerExtension: 'Operates INDEFINITELY until revoked by the President (does not require periodic 6-month parliamentary re-approvals!).',
    maxLifespan: 'Indefinite until revoked by President.',
    revocationProcedure: 'By the President at any time by subsequent proclamation.',
    effectOnFundamentalRights: 'ZERO EFFECT on Fundamental Rights.',
    effectOnFederalism: 'Union can direct States on financial propriety; can require all Money Bills passed by State Legislatures to be reserved for Presidential consideration; can reduce salaries of ALL public servants, INCLUDING JUDGES OF SUPREME COURT AND HIGH COURTS (Art 360(4)(b)).',
    timesInvoked: 'NEVER INVOKED in Indian history (0 times).',
    keyAmendments: '38th CAA made it final; 44th CAA restored judicial review.',
    examinerTraps: [
      'TRAP 1: Financial Emergency has NEVER been declared in India (not even during the 1991 Balance of Payments crisis).',
      'TRAP 2: During Financial Emergency, the President can reduce the salaries and allowances of Supreme Court and High Court Judges (one of the very few constitutional exceptions to judicial salary protection under Art 125/221)!',
      'TRAP 3: Once approved by Parliament within 2 months, it continues INDEFINITELY until revoked; it does NOT need 6-month renewal resolutions like Art 352 or 356.'
    ]
  }
];
