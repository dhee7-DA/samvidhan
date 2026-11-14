export interface DayModuleLinks {
  dayNumber: number;
  parts: {
    id: string;
    partNumber: string;
    title: string;
    articlesRange: string;
  }[];
  primarySvg: {
    id: string;
    title: string;
    category: string;
    articles: string;
  };
  doctrines: {
    id: string;
    name: string;
    leadCase: string;
  }[];
  landmarkTopicFilter: string;
  landmarkCases: string[];
  amendments: {
    number: number;
    year: number;
    title: string;
  }[];
  schedules?: {
    number: number;
    roman: string;
    title: string;
  }[];
}

export const BOOTCAMP_DAY_MODULE_LINKS: Record<number, DayModuleLinks> = {
  1: {
    dayNumber: 1,
    parts: [
      { id: 'part-1', partNumber: 'Part I', title: 'The Union and its Territory', articlesRange: 'Articles 1 – 4' },
      { id: 'part-2', partNumber: 'Part II', title: 'Citizenship', articlesRange: 'Articles 5 – 11' },
      { id: 'part-3', partNumber: 'Part III', title: 'Definition of State (Fundamental Rights)', articlesRange: 'Article 12' }
    ],
    primarySvg: {
      id: 'preamble-arch',
      title: 'The Preamble Architecture',
      category: 'Foundational Philosophy',
      articles: 'Preamble, Articles 1 – 4'
    },
    doctrines: [
      { id: 'basic-structure', name: 'Basic Structure Doctrine', leadCase: 'Kesavananda Bharati (1973)' },
      { id: 'harmonious-construction', name: 'Harmonious Construction', leadCase: 'In re Berubari Union (1960)' }
    ],
    landmarkTopicFilter: 'basic-structure',
    landmarkCases: ['In re Berubari Union (1960)', 'Kesavananda Bharati (1973)', 'Pradeep Kumar Biswas (2002)', 'Ajay Hasia (1981)'],
    amendments: [
      { number: 1, year: 1951, title: 'First Amendment: Formative State Powers' },
      { number: 7, year: 1956, title: 'Seventh Amendment: Linguistic States Reorganization' },
      { number: 42, year: 1976, title: '42nd Amendment: Socialist, Secular, Integrity in Preamble' }
    ],
    schedules: [
      { number: 1, roman: 'I', title: 'Names of States and Union Territories with territorial extent' },
      { number: 4, roman: 'IV', title: 'Allocation of seats in Council of States (Rajya Sabha)' }
    ]
  },
  2: {
    dayNumber: 2,
    parts: [
      { id: 'part-3', partNumber: 'Part III', title: 'Fundamental Rights: Right to Equality & Laws Inconsistent', articlesRange: 'Articles 13 – 18' }
    ],
    primarySvg: {
      id: 'writs-matrix',
      title: 'Constitutional Equality & Writs Matrix',
      category: 'Equality & Remedies',
      articles: 'Articles 13, 14, 15, 16'
    },
    doctrines: [
      { id: 'severability', name: 'Doctrine of Severability', leadCase: 'R.M.D. Chamarbaugwalla (1957)' },
      { id: 'eclipse', name: 'Doctrine of Eclipse', leadCase: 'Bhikaji Narain Dhakras (1955)' },
      { id: 'waiver', name: 'Doctrine of Waiver of Fundamental Rights', leadCase: 'Basheshar Nath (1959)' }
    ],
    landmarkTopicFilter: 'equality',
    landmarkCases: ['State of Punjab v. Davinder Singh (2024)', 'Indra Sawhney (1992)', 'E.P. Royappa (1974)', 'Jarnail Singh (2018)', 'M. Nagaraj (2006)'],
    amendments: [
      { number: 77, year: 1995, title: 'Article 16(4A) Reservation in Promotion for SC/ST' },
      { number: 81, year: 2000, title: 'Article 16(4B) Carry-forward Backlog Rule (50% Exemption)' },
      { number: 103, year: 2019, title: '10% Economically Weaker Sections (EWS) Quota in 15(6) & 16(6)' }
    ]
  },
  3: {
    dayNumber: 3,
    parts: [
      { id: 'part-3', partNumber: 'Part III', title: 'Fundamental Rights: Right to Freedom & Preventive Detention', articlesRange: 'Articles 19 & 22' }
    ],
    primarySvg: {
      id: 'criminal-pipeline',
      title: 'Criminal-Constitutional Safeguards Pipeline',
      category: 'Criminal Due Process',
      articles: 'Articles 19(1)(a), 21 & 22'
    },
    doctrines: [
      { id: 'basic-structure', name: 'Democratic Freedoms as Basic Feature', leadCase: 'Shreya Singhal (2015)' },
      { id: 'harmonious-construction', name: 'Proportionality & Reasonable Restriction Balance', leadCase: 'Anuradha Bhasin (2020)' }
    ],
    landmarkTopicFilter: 'speech-expression',
    landmarkCases: ['Anuradha Bhasin v. UOI (2020)', 'Shreya Singhal (2015)', 'Kaushal Kishor v. State of UP (2023)', 'Bennett Coleman (1972)'],
    amendments: [
      { number: 1, year: 1951, title: 'Added "Public Order" & "Incitement to offence" to Art 19(2)' },
      { number: 16, year: 1963, title: 'Added "Sovereignty and Integrity of India" to Art 19(2)' },
      { number: 44, year: 1978, title: 'Restructured Preventive Detention Safeguards in Art 22' }
    ]
  },
  4: {
    dayNumber: 4,
    parts: [
      { id: 'part-3', partNumber: 'Part III', title: 'Fundamental Rights: Life, Liberty & Criminal Safeguards', articlesRange: 'Articles 20 & 21' }
    ],
    primarySvg: {
      id: 'article-21-evolution',
      title: 'Article 21 Evolution (Gopalan to Puttaswamy)',
      category: 'Fundamental Rights',
      articles: 'Articles 20 & 21'
    },
    doctrines: [
      { id: 'basic-structure', name: 'Substantive Due Process / Golden Triangle', leadCase: 'Maneka Gandhi (1978)' },
      { id: 'basic-structure', name: 'Right to Privacy as Inalienable Natural Right', leadCase: 'K.S. Puttaswamy (2017)' }
    ],
    landmarkTopicFilter: 'life-liberty',
    landmarkCases: ['Prabir Purkayastha v. State (2024)', 'Pankaj Bansal v. UOI (2023)', 'K.S. Puttaswamy (2017)', 'Maneka Gandhi (1978)', 'Selvi v. State of Karnataka (2010)'],
    amendments: [
      { number: 44, year: 1978, title: 'Articles 20 & 21 made non-suspendable during Emergency under Art 359' },
      { number: 86, year: 2002, title: 'Inserted Article 21A: Right to Free and Compulsory Education' }
    ]
  },
  5: {
    dayNumber: 5,
    parts: [
      { id: 'part-3', partNumber: 'Part III', title: 'Fundamental Rights: Freedom of Religion & Minority Protections', articlesRange: 'Articles 25 – 30' }
    ],
    primarySvg: {
      id: 'basic-structure-evolution',
      title: 'Secularism & Basic Structure Evolution',
      category: 'Secularism & Minorities',
      articles: 'Articles 25 – 30'
    },
    doctrines: [
      { id: 'basic-structure', name: 'Secularism as Inviolable Structural Pillar', leadCase: 'S.R. Bommai (1994)' },
      { id: 'harmonious-construction', name: 'Essential Religious Practices (ERP) Test', leadCase: 'Shirur Mutt (1954)' }
    ],
    landmarkTopicFilter: 'secularism',
    landmarkCases: ['Aligarh Muslim University (AMU) Case (2024)', 'Executive Demolition Guidelines / Bulldozer Judgment (2024)', 'Shayara Bano (2017)', 'Sabarimala (2018)', 'T.M.A. Pai Foundation (2002)'],
    amendments: [
      { number: 42, year: 1976, title: 'Formally enshrined "SECULAR" in the Preamble' }
    ]
  },
  6: {
    dayNumber: 6,
    parts: [
      { id: 'part-3', partNumber: 'Part III', title: 'Fundamental Rights: Remedies & High Court Writs', articlesRange: 'Articles 32, 33, 34, 35 & 226' }
    ],
    primarySvg: {
      id: 'writs-matrix',
      title: 'The 5 Constitutional Writs Matrix',
      category: 'Constitutional Remedies',
      articles: 'Articles 32 & 226'
    },
    doctrines: [
      { id: 'basic-structure', name: 'Judicial Review under Arts 32 & 226 is Basic Structure', leadCase: 'L. Chandra Kumar (1997)' },
      { id: 'harmonious-construction', name: 'Epistolary Jurisdiction & PIL Relaxations', leadCase: 'Bandhua Mukti Morcha (1984)' }
    ],
    landmarkTopicFilter: 'judicial-review',
    landmarkCases: ['L. Chandra Kumar (1997)', 'Bandhua Mukti Morcha (1984)', 'Minerva Mills (1980)', 'Daryao v. State of UP (1961)', 'Kesavananda Bharati (1973)'],
    amendments: [
      { number: 42, year: 1976, title: 'Attempted truncation of Art 226 jurisdiction (Later restored by 44th)' },
      { number: 44, year: 1978, title: 'Restored High Court writ powers under Article 226' }
    ]
  },
  7: {
    dayNumber: 7,
    parts: [
      { id: 'part-4', partNumber: 'Part IV', title: 'Directive Principles of State Policy', articlesRange: 'Articles 36 – 51' },
      { id: 'part-4a', partNumber: 'Part IV-A', title: 'Fundamental Duties', articlesRange: 'Article 51A' }
    ],
    primarySvg: {
      id: 'clemency-architecture',
      title: 'Executive Clemency & Statutory Remission Primacy',
      category: 'State Policy & Executive Clemency',
      articles: 'Articles 39A, 48A, 72, 161'
    },
    doctrines: [
      { id: 'harmonious-construction', name: 'Harmony between Fundamental Rights and DPSPs', leadCase: 'Minerva Mills (1980)' },
      { id: 'basic-structure', name: 'Environmental Rule of Law & Climate Rights', leadCase: 'M.K. Ranjitsinh (2024)' }
    ],
    landmarkTopicFilter: 'dpsp',
    landmarkCases: ['Bilkis Bano v. Union of India (2024)', 'M.K. Ranjitsinh (Right against Climate Change, 2024)', 'Minerva Mills (1980)', 'Champakam Dorairajan (1951)'],
    amendments: [
      { number: 42, year: 1976, title: 'Added Arts 39A (Free Legal Aid), 43A (Workers), 48A (Environment) & Part IV-A (Duties)' },
      { number: 86, year: 2002, title: 'Added 11th Fundamental Duty 51A(k) on education' }
    ]
  },
  8: {
    dayNumber: 8,
    parts: [
      { id: 'part-5', partNumber: 'Part V', title: 'The Union: Chapter I (The Executive) & Chapter III (Ordinance Power)', articlesRange: 'Articles 52 – 78 & 123' }
    ],
    primarySvg: {
      id: 'separation-powers',
      title: 'Separation of Powers & Executive Checks',
      category: 'Governance Mechanics',
      articles: 'Articles 50, 53, 74, 75, 123'
    },
    doctrines: [
      { id: 'harmonious-construction', name: 'Aid and Advice Binding on Executive Head', leadCase: 'Shamsher Singh (1974)' },
      { id: 'colorable-legislation', name: 'Non-Repromulgation of Ordinances as Fraud on Constitution', leadCase: 'D.C. Wadhwa (1987)' }
    ],
    landmarkTopicFilter: 'union-executive',
    landmarkCases: ['State of Punjab v. Principal Secretary to Governor (2023)', 'D.C. Wadhwa (1987)', 'Krishna Kumar Singh (2017)', 'Kehar Singh (1989)', 'Shamsher Singh (1974)'],
    amendments: [
      { number: 42, year: 1976, title: 'Made Council of Ministers advice strictly binding on the President' },
      { number: 44, year: 1978, title: 'Empowered President to return advice once for Cabinet reconsideration' }
    ]
  },
  9: {
    dayNumber: 9,
    parts: [
      { id: 'part-5', partNumber: 'Part V', title: 'The Union: Chapter II (Parliament & Legislative Procedures)', articlesRange: 'Articles 79 – 122' }
    ],
    primarySvg: {
      id: 'legislative-passage',
      title: 'Legislative Bill Passage & Veto Architecture',
      category: 'Parliamentary Procedure',
      articles: 'Articles 105, 107 – 111, 112'
    },
    doctrines: [
      { id: 'basic-structure', name: 'Parliamentary Immunity does not Shield Bribery', leadCase: 'Sita Soren (7-Judge, 2024)' },
      { id: 'basic-structure', name: 'Internal Parliamentary Proceedings & Judicial Scrutiny', leadCase: 'Raja Ram Pal (2007)' }
    ],
    landmarkTopicFilter: 'parliamentary-privilege',
    landmarkCases: ['Sita Soren v. Union of India (7-Judge Bench, 2024)', 'P.V. Narasimha Rao (1998)', 'Raja Ram Pal (2007)', 'Keshav Singh (1965)'],
    amendments: [
      { number: 52, year: 1985, title: 'Tenth Schedule (Anti-Defection Law)' },
      { number: 91, year: 2003, title: 'Capped Ministry Size at 15% & Barred Split Defense in Defection' }
    ],
    schedules: [
      { number: 10, roman: 'X', title: 'Provisions as to disqualification on ground of defection' }
    ]
  },
  10: {
    dayNumber: 10,
    parts: [
      { id: 'part-5', partNumber: 'Part V', title: 'The Union: Chapter IV (The Union Judiciary & Supreme Court)', articlesRange: 'Articles 124 – 147' }
    ],
    primarySvg: {
      id: 'precedent-lineage',
      title: 'Precedent Lineage & Judicial Evolution',
      category: 'Judicial Precedent',
      articles: 'Articles 124, 129, 136, 141, 142'
    },
    doctrines: [
      { id: 'prospective-overruling', name: 'Precedent Hierarchy & Binding Force of Stare Decisis', leadCase: 'Dawoodi Bohra (2023)' },
      { id: 'basic-structure', name: 'Automatic Stay Lapse Declared Unconstitutional', leadCase: 'High Court Bar Assn Allahabad (2024)' }
    ],
    landmarkTopicFilter: 'judiciary',
    landmarkCases: ['High Court Bar Assn. Allahabad v. State of UP (2024)', 'Central Board of Dawoodi Bohra Community (2023)', 'Rupa Ashok Hurra (2002)', 'NJAC Case (2015)', 'Second Judges Case (1993)'],
    amendments: [
      { number: 99, year: 2014, title: 'National Judicial Appointments Commission (NJAC) - Struck down as unconstitutional' }
    ]
  },
  11: {
    dayNumber: 11,
    parts: [
      { id: 'part-6', partNumber: 'Part VI', title: 'The States: High Courts & Subordinate Judiciary', articlesRange: 'Articles 152 – 237' },
      { id: 'part-8', partNumber: 'Part VIII', title: 'The Union Territories (including NCT Delhi)', articlesRange: 'Articles 239 – 242' }
    ],
    primarySvg: {
      id: 'asymmetric-federalism',
      title: 'State Governance & Asymmetric Federalism',
      category: 'State & UT Governance',
      articles: 'Articles 214 – 237, 239AA'
    },
    doctrines: [
      { id: 'harmonious-construction', name: 'High Court Power of Superintendence over all Subordinate Tribunals', leadCase: 'L. Chandra Kumar (1997)' },
      { id: 'basic-structure', name: 'Independence of Subordinate Judiciary is Basic Structure', leadCase: 'All India Judges Assn (2002)' }
    ],
    landmarkTopicFilter: 'states-governance',
    landmarkCases: ['State (NCT of Delhi) v. Union of India (2023)', 'All India Judges Association (2002)', 'Chandra Mohan v. State of UP (1966)', 'Shamsher Singh (1974)'],
    amendments: [
      { number: 69, year: 1991, title: 'Inserted Article 239AA: Special Provisions for National Capital Territory of Delhi' }
    ]
  },
  12: {
    dayNumber: 12,
    parts: [
      { id: 'part-11', partNumber: 'Part XI', title: 'Relations Between Union and States: Legislative & Administrative', articlesRange: 'Articles 245 – 263' },
      { id: 'part-12', partNumber: 'Part XII', title: 'Finance, Property, Contracts and Suits', articlesRange: 'Articles 264 – 300A' }
    ],
    primarySvg: {
      id: 'federal-relations',
      title: 'Federal 7th Schedule & Overriding Vectors',
      category: 'Federal Architecture',
      articles: 'Articles 245 – 255, 269A, 279A'
    },
    doctrines: [
      { id: 'pith-and-substance', name: 'Doctrine of Pith and Substance', leadCase: 'State of Bombay v. F.N. Balsara (1951)' },
      { id: 'colorable-legislation', name: 'Mineral Royalty is NOT a Tax (State Legislative Primacy)', leadCase: 'MADA v. SAIL (9-Judge, 2024)' },
      { id: 'territorial-nexus', name: 'Doctrine of Territorial Nexus', leadCase: 'State of Bihar v. Charusila Dasi (1959)' }
    ],
    landmarkTopicFilter: 'federalism',
    landmarkCases: ['Mineral Area Development Authority (MADA) v. SAIL (9-Judge, 2024)', 'State of WB v. Kesoram Industries (2004)', 'Mohit Minerals (GST Council, 2022)', 'Hoechst Pharmaceuticals (1983)'],
    amendments: [
      { number: 101, year: 2016, title: 'Goods and Services Tax (GST): Inserted Arts 246A, 269A & 279A' }
    ],
    schedules: [
      { number: 7, roman: 'VII', title: 'Union List (List I), State List (List II), and Concurrent List (List III)' }
    ]
  },
  13: {
    dayNumber: 13,
    parts: [
      { id: 'part-14', partNumber: 'Part XIV', title: 'Services Under Union and States: Article 311 Safeguards', articlesRange: 'Articles 308 – 323' },
      { id: 'part-14a', partNumber: 'Part XIV-A', title: 'Tribunals: Administrative & Other Tribunals', articlesRange: 'Articles 323A – 323B' },
      { id: 'part-15', partNumber: 'Part XV', title: 'Elections: Election Commission Independence', articlesRange: 'Articles 324 – 329' }
    ],
    primarySvg: {
      id: 'civil-services-safeguards',
      title: 'Civil Services Safeguards & Article 311',
      category: 'Public Administration',
      articles: 'Articles 310, 311, 312, 324'
    },
    doctrines: [
      { id: 'pleasure-doctrine', name: 'Doctrine of Pleasure & Art 311 Provisos', leadCase: 'Union of India v. Tulsiram Patel (1985)' },
      { id: 'basic-structure', name: 'Free and Fair Elections & Judicial Review over Tribunals', leadCase: 'L. Chandra Kumar (1997)' }
    ],
    landmarkTopicFilter: 'civil-services',
    landmarkCases: ['Union of India v. Tulsiram Patel (1985)', 'Anoop Baranwal v. Union of India (ECI Appointments, 2023)', 'Association for Democratic Reforms (Electoral Bonds, 2024)', 'L. Chandra Kumar (1997)'],
    amendments: [
      { number: 42, year: 1976, title: 'Inserted Part XIV-A: Articles 323A & 323B for Tribunals' }
    ]
  },
  14: {
    dayNumber: 14,
    parts: [
      { id: 'part-18', partNumber: 'Part XVIII', title: 'Emergency Provisions: National, State & Financial Emergencies', articlesRange: 'Articles 352 – 360' }
    ],
    primarySvg: {
      id: 'emergency-matrix',
      title: 'Emergency Matrix & Rights Suspension Gauge',
      category: 'Crisis Governance',
      articles: 'Articles 352, 356, 358, 359, 360'
    },
    doctrines: [
      { id: 'basic-structure', name: 'Article 356 Proclamation Subject to Judicial Review', leadCase: 'S.R. Bommai v. Union of India (1994)' },
      { id: 'basic-structure', name: 'Immunity of Articles 20 & 21 from Presidential Suspension', leadCase: '44th Amendment & Puttaswamy (2017)' }
    ],
    landmarkTopicFilter: 'emergency',
    landmarkCases: ['S.R. Bommai v. Union of India (9-Judge Bench, 1994)', 'Rameshwar Prasad v. UOI (2006)', 'ADM Jabalpur v. Shivkant Shukla (1976 - Overruled)'],
    amendments: [
      { number: 44, year: 1978, title: 'Overhauled Emergency: Substituted "armed rebellion", mandated written Cabinet advice, safeguarded Arts 20 & 21' }
    ]
  },
  15: {
    dayNumber: 15,
    parts: [
      { id: 'part-20', partNumber: 'Part XX', title: 'Amendment of the Constitution: Article 368 Engine', articlesRange: 'Article 368' },
      { id: 'part-21', partNumber: 'Part XXI', title: 'Temporary, Transitional & Special Provisions (Article 370)', articlesRange: 'Articles 369 – 392' }
    ],
    primarySvg: {
      id: 'amendment-pipeline',
      title: 'Article 368 Amendment Engine & Basic Structure Shield',
      category: 'Constituent Power',
      articles: 'Articles 368, 370, 371'
    },
    doctrines: [
      { id: 'basic-structure', name: 'Basic Structure Doctrine as Absolute Boundary on Constituent Power', leadCase: 'Kesavananda Bharati (1973)' },
      { id: 'basic-structure', name: 'Ninth Schedule Laws Post-1973 Subject to Fundamental Rights Test', leadCase: 'I.R. Coelho (9-Judge, 2007)' }
    ],
    landmarkTopicFilter: 'amendment-doctrine',
    landmarkCases: ['In re Article 370 of the Constitution (5-Judge Bench, 2023)', 'I.R. Coelho v. State of TN (2007)', 'Minerva Mills (1980)', 'Kesavananda Bharati (1973)', 'Shankari Prasad (1951)'],
    amendments: [
      { number: 24, year: 1971, title: 'Affirmed Parliament constituent power to amend any part under Art 368' },
      { number: 42, year: 1976, title: 'Attempted unlimited constituent power (Clauses 4 & 5 struck down in Minerva Mills)' },
      { number: 106, year: 2023, title: 'Nari Shakti Vandan Adhiniyam: 33% Women Reservation in Lok Sabha & State Assemblies' }
    ],
    schedules: [
      { number: 9, roman: 'IX', title: 'Validation of certain Acts and Regulations (Subject to I.R. Coelho test post-24 April 1973)' }
    ]
  }
};
