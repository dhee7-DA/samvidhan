export interface HighYieldAmendment {
  number: number;
  year: number;
  title: string;
  hindiTitle?: string;
  keyArticlesAltered: string[];
  coreExamTakeaways: string[];
  landmarkJudicialCase?: string;
  examinerTraps: string[];
  frequencyRank: '⭐⭐⭐⭐⭐ Tier 1 (Must-Know)' | '⭐⭐⭐⭐ Tier 2 (High-Yield)';
}

export const TOP_25_HIGH_YIELD_AMENDMENTS: HighYieldAmendment[] = [
  {
    number: 1,
    year: 1951,
    title: '1st Amendment Act (1951)',
    keyArticlesAltered: ['Article 15(4)', 'Article 19(2)', 'Article 19(6)', 'Article 31A', 'Article 31B', '9th Schedule'],
    coreExamTakeaways: [
      'Inserted 9th Schedule to shield agrarian land reform laws from judicial review on fundamental rights grounds.',
      'Inserted Article 15(4) providing special provisions for advancement of socially and educationally backward classes (overcoming Champakam Dorairajan 1951).',
      'Added three new restrictions to Article 19(2): "Public order", "Friendly relations with foreign states", and "Incitement to an offence", while inserting the word "reasonable" before restrictions.'
    ],
    landmarkJudicialCase: 'State of Madras v. Champakam Dorairajan (1951) & Shankari Prasad v. UOI (1951)',
    examinerTraps: [
      'TRAP 1: The word "REASONABLE" was NOT in the original 1950 text of Art 19(2); it was inserted by the 1st CAA 1951 to make restrictions justiciable!',
      'TRAP 2: In I.R. Coelho (2007), SC held laws placed in the 9th Schedule after 24 April 1973 (Kesavananda date) are open to judicial review on basic structure.'
    ],
    frequencyRank: '⭐⭐⭐⭐⭐ Tier 1 (Must-Know)'
  },
  {
    number: 7,
    year: 1956,
    title: '7th Amendment Act (1956)',
    keyArticlesAltered: ['Part VII abolished', 'Articles 153', 'Article 230', 'Article 231', 'Article 258A', 'Article 350A', 'Article 350B'],
    coreExamTakeaways: [
      'Implemented the State Reorganisation Act 1956 based on Fazal Ali Commission: abolished the four-fold classification of States (Part A, B, C, D) and created 14 States and 6 Union Territories.',
      'Amended Article 153: Allowed appointment of the SAME PERSON as Governor for TWO OR MORE STATES.',
      'Amended Articles 230 & 231: Empowered Parliament to establish a COMMON HIGH COURT for two or more States (e.g. Punjab & Haryana High Court, Bombay High Court).',
      'Inserted Article 350A (mother tongue instruction at primary stage) and Article 350B (Special Officer for Linguistic Minorities).'
    ],
    examinerTraps: [
      'TRAP: One person can be Governor of multiple states, and one High Court can serve multiple states/UTs — both introduced by 7th CAA 1956.'
    ],
    frequencyRank: '⭐⭐⭐⭐⭐ Tier 1 (Must-Know)'
  },
  {
    number: 24,
    year: 1971,
    title: '24th Amendment Act (1971)',
    keyArticlesAltered: ['Article 13(4)', 'Article 368(2)'],
    coreExamTakeaways: [
      'Passed to neutralize the 11-judge bench ruling in I.C. Golaknath (1967) which held Parliament cannot amend Fundamental Rights.',
      'Inserted Article 13(4) and Article 368(3) clarifying that "law" in Article 13 does NOT include a constitutional amendment under Article 368.',
      'Made it OBLIGATORY for the President to give assent to a Constitution Amendment Bill ("shall give his assent").'
    ],
    landmarkJudicialCase: 'I.C. Golaknath (1967) overruled by Kesavananda Bharati (1973)',
    examinerTraps: [
      'TRAP: President HAS NO VETO over a Constitution Amendment Bill (cannot withhold or return it). Made mandatory by 24th CAA 1971!'
    ],
    frequencyRank: '⭐⭐⭐⭐⭐ Tier 1 (Must-Know)'
  },
  {
    number: 25,
    year: 1971,
    title: '25th Amendment Act (1971)',
    keyArticlesAltered: ['Article 31(2)', 'Article 31C'],
    coreExamTakeaways: [
      'Curtailed fundamental right to property and substituted the word "amount" for "compensation" to prevent courts from demanding market value.',
      'Inserted Article 31C: Declared that no law giving effect to DPSPs under Article 39(b) and 39(c) shall be deemed void on the ground that it violates Articles 14, 19, or 31.',
      'The second part of Art 31C ("no law containing a declaration... shall be called in question in any court") was STRUCK DOWN in Kesavananda Bharati (1973) as taking away judicial review.'
    ],
    landmarkJudicialCase: 'Kesavananda Bharati v. State of Kerala (1973)',
    examinerTraps: [
      'TRAP: Only the FIRST PART of Art 31C (saving laws giving effect to Art 39(b) & (c)) survived in Kesavananda; the ouster of judicial review was struck down.'
    ],
    frequencyRank: '⭐⭐⭐⭐ Tier 2 (High-Yield)'
  },
  {
    number: 42,
    year: 1976,
    title: '42nd Amendment Act (1976) — "The Mini-Constitution"',
    keyArticlesAltered: ['Preamble', 'Part IVA (Art 51A)', 'Part XIVA (Arts 323A/B)', 'Article 31C', 'Article 74(1)', 'Article 368(4)/(5)', '7th Schedule'],
    coreExamTakeaways: [
      'Added three words to the Preamble: "SOCIALIST", "SECULAR", and "INTEGRITY".',
      'Inserted Part IVA (Article 51A) containing 10 Fundamental Duties on the recommendation of the Swaran Singh Committee.',
      'Inserted Part XIVA: Administrative Tribunals (Art 323A) and Tribunals for other matters (Art 323B).',
      'Made the President strictly bound by the advice of the Council of Ministers under Article 74(1).',
      'Transferred 5 subjects from State List to Concurrent List: Education, Forests, Weights & Measures, Protection of wild animals/birds, Administration of justice.',
      'Inserted clauses (4) & (5) in Article 368 claiming unlimited constituent power without judicial review (struck down in Minerva Mills 1980).'
    ],
    landmarkJudicialCase: 'Minerva Mills v. Union of India (1980) struck down Art 368(4)/(5) & extended Art 31C',
    examinerTraps: [
      'TRAP 1: The Swaran Singh Committee recommended 8 duties; 42nd CAA enacted 10 duties; 86th CAA added the 11th duty (51A(k)).',
      'TRAP 2: 42nd CAA attempted to place all DPSPs above Arts 14 and 19; this blanket primacy was struck down in Minerva Mills.'
    ],
    frequencyRank: '⭐⭐⭐⭐⭐ Tier 1 (Must-Know)'
  },
  {
    number: 44,
    year: 1978,
    title: '44th Amendment Act (1978) — "Democratic Restoration"',
    keyArticlesAltered: ['Article 31 / 19(1)(f) deleted', 'Article 300A', 'Article 74(1) Proviso', 'Article 352', 'Article 356', 'Article 358', 'Article 359'],
    coreExamTakeaways: [
      'Deleted Right to Property from Part III (Arts 19(1)(f) and 31) and re-enacted it as a Constitutional Right under Article 300A in Part XII.',
      'Inserted Proviso to Article 74(1): Empowered the President to SEND BACK advice of the Council of Ministers ONCE for reconsideration, though bound if returned.',
      'National Emergency (Art 352): Replaced "internal disturbance" with "ARMED REBELLION"; made WRITTEN communication of the Union Cabinet mandatory; reduced approval window to 1 MONTH by SPECIAL MAJORITY.',
      'Article 359 safeguard: Enforcement of Articles 20 and 21 CAN NEVER BE SUSPENDED, even during emergency!',
      'Article 358 safeguard: Article 19 is automatically suspended ONLY for war or external aggression, NEVER for armed rebellion.'
    ],
    landmarkJudicialCase: 'Overruled A.D.M. Jabalpur effect; K.T. Plantation (2011 on Art 300A)',
    examinerTraps: [
      'TRAP 1: Post-44th CAA, Right to Property is a CONSTITUTIONAL/LEGAL right under Art 300A, NOT a Fundamental Right.',
      'TRAP 2: President can return cabinet advice for reconsideration ONLY ONCE. If sent back, President MUST accept.',
      'TRAP 3: Arts 20 & 21 are completely immune from suspension under Article 359.'
    ],
    frequencyRank: '⭐⭐⭐⭐⭐ Tier 1 (Must-Know)'
  },
  {
    number: 52,
    year: 1985,
    title: '52nd Amendment Act (1985) — Anti-Defection Law',
    keyArticlesAltered: ['Article 101', 'Article 102(2)', 'Article 190', 'Article 191(2)', '10th Schedule'],
    coreExamTakeaways: [
      'Introduced the 10th Schedule to disqualify MPs and MLAs for defecting to another political party.',
      'Disqualification grounds: (1) Voluntarily giving up membership of political party, (2) Voting contrary to party whip without prior permission, (3) Nominated member joining a party after 6 months, (4) Independent member joining ANY party.',
      'Decision on disqualification vested in the Chairman / Speaker of the House.',
      'Paragraph 7 (barring courts from reviewing Speaker’s decision) was STRUCK DOWN in Kihoto Hollohan (1992).'
    ],
    landmarkJudicialCase: 'Kihoto Hollohan v. Zachillhu (1992 - Speaker acts as tribunal, subject to judicial review)',
    examinerTraps: [
      'TRAP 1: Speaker acts as a TRIBUNAL when deciding 10th Schedule petitions; decision is subject to judicial review under Arts 136 and 226.',
      'TRAP 2: An independent elected member is disqualified if they join ANY political party at any time!'
    ],
    frequencyRank: '⭐⭐⭐⭐⭐ Tier 1 (Must-Know)'
  },
  {
    number: 61,
    year: 1988,
    title: '61st Amendment Act (1988) — Voting Age Reduction',
    keyArticlesAltered: ['Article 326'],
    coreExamTakeaways: [
      'Lowered the voting age for elections to the Lok Sabha and State Legislative Assemblies from 21 years to 18 years.',
      'Enacted under the Rajiv Gandhi government, came into force on 28 March 1989.'
    ],
    examinerTraps: [
      'TRAP: Lowered voting age from 21 to 18 under Article 326. Right to Vote is a STATUTORY right (RPA 1951), not a fundamental right.'
    ],
    frequencyRank: '⭐⭐⭐⭐ Tier 2 (High-Yield)'
  },
  {
    number: 69,
    year: 1991,
    title: '69th Amendment Act (1991) — NCT of Delhi',
    keyArticlesAltered: ['Article 239AA', 'Article 239AB'],
    coreExamTakeaways: [
      'Designated the Union Territory of Delhi as the "National Capital Territory of Delhi" (NCTD) with a Legislative Assembly and Council of Ministers.',
      'Legislative Assembly can make laws on State and Concurrent List matters EXCEPT: (1) Public Order, (2) Police, and (3) Land (all three reserved for Union/Lt. Governor).',
      'Council of Ministers capped at 10% of total assembly strength (7 ministers including CM).'
    ],
    landmarkJudicialCase: 'Govt of NCT of Delhi v. Union of India (2018 & 2023 Constitution Benches)',
    examinerTraps: [
      'TRAP 1: The 3 excluded state subjects for Delhi Assembly are: Public Order (Entry 1), Police (Entry 2), and Land (Entry 18).',
      'TRAP 2: Delhi Council of Ministers is capped at 10% (Art 239AA(4)), unlike the 15% cap for states under Art 164(1A).'
    ],
    frequencyRank: '⭐⭐⭐⭐ Tier 2 (High-Yield)'
  },
  {
    number: 73,
    year: 1992,
    title: '73rd Amendment Act (1992) — Panchayati Raj',
    keyArticlesAltered: ['Part IX (Articles 243 to 243-O)', '11th Schedule (29 Functional Subjects)'],
    coreExamTakeaways: [
      'Gave constitutional status to Panchayati Raj Institutions (PRIs); gave practical shape to Article 40 DPSP.',
      'Mandated 3-tier system in all states with population over 20 lakhs (Gram, Intermediate, District).',
      'Mandatory 1/3rd reservation for women (Art 243D) and proportionate reservation for SCs and STs.',
      'Fixed 5-year tenure; reconstitution elections must be completed before expiry or within 6 months of dissolution.',
      'Created State Election Commission (Art 243K) and State Finance Commission (Art 243I).'
    ],
    examinerTraps: [
      'TRAP 1: 11th Schedule has TWENTY-NINE (29) functional items (12th Schedule has 18).',
      'TRAP 2: 1/3rd reservation for women in Panchayats is a CONSTITUTIONAL MINIMUM (many states like Bihar have raised it to 50% under state law).'
    ],
    frequencyRank: '⭐⭐⭐⭐⭐ Tier 1 (Must-Know)'
  },
  {
    number: 74,
    year: 1992,
    title: '74th Amendment Act (1992) — Urban Local Bodies (Municipalities)',
    keyArticlesAltered: ['Part IXA (Articles 243P to 243ZG)', '12th Schedule (18 Functional Subjects)'],
    coreExamTakeaways: [
      'Constitutionalized Urban Local Bodies (Nagar Panchayats, Municipal Councils, Municipal Corporations).',
      'Mandatory 1/3rd reservation for women, 5-year tenure, State Election Commission, and State Finance Commission.',
      'Mandated constitution of Ward Committees (for areas having population over 3 lakhs) and District Planning Committees (Art 243ZD).'
    ],
    examinerTraps: [
      'TRAP: 12th Schedule has EIGHTEEN (18) functional items. Wards committees mandatory for population > 3 lakhs.'
    ],
    frequencyRank: '⭐⭐⭐⭐⭐ Tier 1 (Must-Know)'
  },
  {
    number: 86,
    year: 2002,
    title: '86th Amendment Act (2002) — Right to Education',
    keyArticlesAltered: ['Article 21A', 'Article 45', 'Article 51A(k)'],
    coreExamTakeaways: [
      'Inserted Article 21A: Made free and compulsory education for all children between ages 6 and 14 a FUNDAMENTAL RIGHT.',
      'Substituted Article 45 DPSP: Early childhood care and education for all children until age 6.',
      'Added the 11th Fundamental Duty (Article 51A(k)): Duty of parent/guardian to provide education opportunities between ages 6 and 14.',
      'Led to enactment of Right of Children to Free and Compulsory Education Act (RTE Act 2009).'
    ],
    landmarkJudicialCase: 'Mohini Jain (1992), Unni Krishnan (1993), Society for Unaided Private Schools (2012)',
    examinerTraps: [
      'TRAP: Art 21A applies to children between ages SIX (6) and FOURTEEN (14) years, not from birth. Birth to 6 years is covered under DPSP Art 45.'
    ],
    frequencyRank: '⭐⭐⭐⭐⭐ Tier 1 (Must-Know)'
  },
  {
    number: 89,
    year: 2003,
    title: '89th Amendment Act (2003) — NCSC & NCST Bifurcation',
    keyArticlesAltered: ['Article 338', 'Article 338A'],
    coreExamTakeaways: [
      'Bifurcated the erstwhile combined National Commission for SCs and STs into two separate constitutional bodies:',
      '1. National Commission for Scheduled Castes (NCSC) under Article 338.',
      '2. National Commission for Scheduled Tribes (NCST) under Article 338A.'
    ],
    examinerTraps: [
      'TRAP: Both NCSC and NCST have 1 Chairperson, 1 Vice-Chairperson, and 3 Members appointed by President by warrant under hand and seal.'
    ],
    frequencyRank: '⭐⭐⭐⭐ Tier 2 (High-Yield)'
  },
  {
    number: 91,
    year: 2003,
    title: '91st Amendment Act (2003) — 15% Cabinet Cap & Defection Reform',
    keyArticlesAltered: ['Article 75(1A)', 'Article 164(1A)', '10th Schedule Paragraph 3 deleted'],
    coreExamTakeaways: [
      'CAPPED COUNCIL OF MINISTERS: Total number of ministers (including PM/CM) cannot exceed 15% of total membership of the Lok Sabha / State Legislative Assembly.',
      'Constitutional floor for States: Number of ministers in a State shall NOT BE LESS THAN 12 (proviso to Art 164(1A)).',
      'DEFECTION REFORM: Deleted Paragraph 3 of the 10th Schedule, removing the "one-third split defense". Now, a split in a party is no longer an exception; ONLY a 2/3rd merger is protected!'
    ],
    examinerTraps: [
      'TRAP 1: The 15% cap is calculated on the strength of the LOWER HOUSE (Lok Sabha / Assembly), NOT both Houses!',
      'TRAP 2: In States, there is a minimum floor of 12 ministers. A state cabinet cannot have fewer than 12 ministers.'
    ],
    frequencyRank: '⭐⭐⭐⭐⭐ Tier 1 (Must-Know)'
  },
  {
    number: 97,
    year: 2011,
    title: '97th Amendment Act (2011) — Cooperative Societies',
    keyArticlesAltered: ['Article 19(1)(c)', 'Article 43B', 'Part IXB (Articles 243ZH to 243ZT)'],
    coreExamTakeaways: [
      'Added the word "cooperative societies" to Article 19(1)(c) making formation of cooperatives a Fundamental Right.',
      'Inserted Article 43B DPSP promoting voluntary formation and democratic control of cooperatives.',
      'Inserted Part IXB governing cooperative societies.',
      'PARTIAL STRIKE DOWN: In Union of India v. Rajendra Shah (2021), the Supreme Court struck down Part IXB in so far as it applies to STATE cooperatives because it touched an exclusive State subject (Entry 32 List II) without ratification by half of the states under Art 368(2) proviso! Part IXB remains valid only for multi-state cooperatives.'
    ],
    landmarkJudicialCase: 'Union of India v. Rajendra Shah (2021 - 3-Judge Bench)',
    examinerTraps: [
      'TRAP: Part IXB was partially struck down because it lacked state ratification under Art 368(2) proviso, but Art 19(1)(c) and Art 43B remain intact.'
    ],
    frequencyRank: '⭐⭐⭐⭐ Tier 2 (High-Yield)'
  },
  {
    number: 99,
    year: 2014,
    title: '99th Amendment Act (2014) — NJAC (Struck Down)',
    keyArticlesAltered: ['Article 124A', 'Article 124B', 'Article 124C', 'Article 217'],
    coreExamTakeaways: [
      'Created the National Judicial Appointments Commission (NJAC) to replace the Supreme Court Collegium system for appointing judges.',
      'STRUCK DOWN ENTIRELY: In Supreme Court Advocates-on-Record Association (4th Judges Case 2015), a 5-judge Constitution Bench by 4:1 majority struck down the 99th CAA and NJAC Act 2014 as UNCONSTITUTIONAL and violating the Basic Structure (Judicial Independence).',
      'The Collegium system was revived.'
    ],
    landmarkJudicialCase: 'Supreme Court Advocates-on-Record Association v. UOI (2015 - 4th Judges Case)',
    examinerTraps: [
      'TRAP: The 99th Amendment is completely VOID and unconstitutional. The Collegium system remains the law of the land.'
    ],
    frequencyRank: '⭐⭐⭐⭐⭐ Tier 1 (Must-Know)'
  },
  {
    number: 101,
    year: 2016,
    title: '101st Amendment Act (2016) — Goods and Services Tax (GST)',
    keyArticlesAltered: ['Article 246A', 'Article 269A', 'Article 279A', 'Deleted Art 268A'],
    coreExamTakeaways: [
      'Subsumed central and state indirect taxes into a single Goods and Services Tax (GST).',
      'Inserted Article 246A: Vests concurrent power in Parliament and State Legislatures to make laws with respect to GST (unique non-hierarchical tax power).',
      'Inserted Article 269A: IGST on inter-state supply levied by Centre and apportioned between Centre and States.',
      'Inserted Article 279A: Established the constitutional federal body — GST Council.'
    ],
    landmarkJudicialCase: 'Union of India v. Mohit Minerals (2022 - GST recommendations are not binding on Parliament/States)',
    examinerTraps: [
      'TRAP 1: Article 246A creates concurrent, simultaneous power, NOT subordinate power! Both Centre and States have simultaneous powers.',
      'TRAP 2: Voting weightage in GST Council: Centre has 1/3rd, States combined have 2/3rd. Decisions require 3/4th (75%) majority.'
    ],
    frequencyRank: '⭐⭐⭐⭐⭐ Tier 1 (Must-Know)'
  },
  {
    number: 102,
    year: 2018,
    title: '102nd Amendment Act (2018) — NCBC Constitutional Status',
    keyArticlesAltered: ['Article 338B', 'Article 342A', 'Article 366(26C)'],
    coreExamTakeaways: [
      'Conferred constitutional status on the National Commission for Backward Classes (NCBC) under Article 338B (previously statutory under 1993 Act).',
      'Inserted Article 342A empowering the President to specify the socially and educationally backward classes (SEBCs).'
    ],
    landmarkJudicialCase: 'Jaishri Laxmanrao Patil (Maratha Reservation Case 2021)',
    examinerTraps: [
      'TRAP: SC ruled in Maratha case that only the President could identify SEBCs post-102nd CAA. Parliament subsequently passed the 105th CAA (2021) to restore States’ power to identify their own SEBCs!'
    ],
    frequencyRank: '⭐⭐⭐⭐ Tier 2 (High-Yield)'
  },
  {
    number: 103,
    year: 2019,
    title: '103rd Amendment Act (2019) — 10% EWS Reservation',
    keyArticlesAltered: ['Article 15(6)', 'Article 16(6)'],
    coreExamTakeaways: [
      'Provided up to 10% reservation for Economically Weaker Sections (EWS) of citizens other than SC, ST, and SEBCs in educational institutions and public employment.',
      'Permits EWS reservation in private unaided educational institutions (except minority institutions under Art 30).',
      'Breached the 50% reservation ceiling established in Indra Sawhney (1992).'
    ],
    landmarkJudicialCase: 'Janhit Abhiyan v. Union of India (2022 - 5-Judge Bench 3:2 majority upheld 103rd CAA)',
    examinerTraps: [
      'TRAP: In Janhit Abhiyan (2022), SC held the 50% ceiling in Indra Sawhney applied only to caste-based reservations, and economic criteria alone can form a valid basis for classification.'
    ],
    frequencyRank: '⭐⭐⭐⭐⭐ Tier 1 (Must-Know)'
  },
  {
    number: 104,
    year: 2020,
    title: '104th Amendment Act (2020) — SC/ST Extension & Anglo-Indian Discontinuation',
    keyArticlesAltered: ['Article 334'],
    coreExamTakeaways: [
      'Extended the reservation of seats for Scheduled Castes and Scheduled Tribes in the Lok Sabha and State Legislative Assemblies for another 10 years (until 25 January 2030).',
      'DISCONTINUED NOMINATION of Anglo-Indian members to the Lok Sabha (Art 331) and State Legislative Assemblies (Art 333) by not extending their reservation!'
    ],
    examinerTraps: [
      'TRAP: Anglo-Indian nominated seats in Lok Sabha (2 seats) and State Assemblies (1 seat) were DISCONTINUED by 104th CAA 2020 by letting the sunset clause expire.'
    ],
    frequencyRank: '⭐⭐⭐⭐ Tier 2 (High-Yield)'
  },
  {
    number: 105,
    year: 2021,
    title: '105th Amendment Act (2021) — Restoration of State OBC Lists',
    keyArticlesAltered: ['Article 338B(9)', 'Article 342A', 'Article 366(26C)'],
    coreExamTakeaways: [
      'Clarified and restored the power of STATE GOVERNMENTS to identify and maintain their own state lists of Socially and Educationally Backward Classes (SEBCs/OBCs).',
      'Overcame the interpretation of the Supreme Court in the Maratha Reservation judgment (2021) which held that 102nd CAA gave sole authority to the President.'
    ],
    examinerTraps: [
      'TRAP: State Governments can prepare and maintain their own state OBC lists for state jobs and admissions (restored by 105th CAA).'
    ],
    frequencyRank: '⭐⭐⭐⭐ Tier 2 (High-Yield)'
  },
  {
    number: 106,
    year: 2023,
    title: '106th Amendment Act (2023) — Nari Shakti Vandan Adhiniyam (Women’s Reservation)',
    keyArticlesAltered: ['Article 239AA(2)(b)', 'Article 330A', 'Article 332A', 'Article 334A'],
    coreExamTakeaways: [
      'Reserves ONE-THIRD (33%) of seats for women in the Lok Sabha (Art 330A), State Legislative Assemblies (Art 332A), and Delhi Legislative Assembly (Art 239AA).',
      'Includes 33% sub-reservation for SC and ST women within the SC/ST quota.',
      'SUNSET & COMMENCEMENT: Takes effect after the first delimitation exercise conducted post the first Census after commencement. Has a sunset clause of 15 YEARS from commencement (extendable by Parliament).'
    ],
    examinerTraps: [
      'TRAP 1: Women’s reservation applies to Lok Sabha and State Assemblies, but DOES NOT apply to the Rajya Sabha or State Legislative Councils!',
      'TRAP 2: Takes effect only AFTER a post-commencement Census and subsequent delimitation are carried out.'
    ],
    frequencyRank: '⭐⭐⭐⭐⭐ Tier 1 (Must-Know)'
  }
];
