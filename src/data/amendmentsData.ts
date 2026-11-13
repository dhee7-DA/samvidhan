export interface ConstitutionalAmendment {
  number: number;
  year: number;
  title: string;
  primeMinisterOrEra: string;
  articlesAffected: string[];
  keyObjectives: string;
  significance: string;
  landmarkJudicialImpact?: string;
}

export const AMENDMENTS_DATA: ConstitutionalAmendment[] = [
  {
    number: 1,
    year: 1951,
    title: 'First Constitutional Amendment Act',
    primeMinisterOrEra: 'Jawaharlal Nehru',
    articlesAffected: ['Article 15', 'Article 19', 'Article 31A', 'Article 31B', 'Ninth Schedule'],
    keyObjectives: 'Overcome judicial invalidation of land reform (Zamindari abolition) laws and reservation orders in cases like State of Madras v. Champakam Dorairajan and Kameshwar Singh.',
    significance: 'Inserted Ninth Schedule & Article 31B immunizing listed laws from Part III challenge. Added reasonable restrictions to Art 19(1)(a) (public order, friendly foreign relations, incitement). Inserted Art 15(4) for advancement of socially and educationally backward classes.',
    landmarkJudicialImpact: 'Upheld by 5-Judge Constitution Bench in Shankari Prasad v. Union of India (1951).'
  },
  {
    number: 7,
    year: 1956,
    title: 'Seventh Constitutional Amendment Act',
    primeMinisterOrEra: 'Jawaharlal Nehru',
    articlesAffected: ['Article 1', 'Article 153', 'Article 170', 'Article 214', 'First Schedule', 'Part VII repealed'],
    keyObjectives: 'Implement the recommendations of the States Reorganisation Commission (Fazal Ali Commission) based on linguistic lines.',
    significance: 'Abolished classification of States into Part A, Part B, Part C, and Part D; instituted 14 States and 6 Union Territories. Repealed Part VII. Provided for appointment of the same person as Governor for two or more States (Art 153) and establishment of common High Courts for two or more States (Art 214/231).'
  },
  {
    number: 24,
    year: 1971,
    title: 'Twenty-Fourth Constitutional Amendment Act',
    primeMinisterOrEra: 'Indira Gandhi',
    articlesAffected: ['Article 13', 'Article 368'],
    keyObjectives: 'Nullify the Supreme Court ruling in I.C. Golak Nath v. State of Punjab (1967) which barred Parliament from abridging Fundamental Rights.',
    significance: 'Inserted Art 13(4) and Art 368(3) clarifying that nothing in Article 13 applies to constitutional amendments under Article 368. Made Presidential assent to a Constitutional Amendment Bill mandatory.',
    landmarkJudicialImpact: 'Upheld in Kesavananda Bharati (1973), which simultaneously formulated the Basic Structure Doctrine.'
  },
  {
    number: 25,
    year: 1971,
    title: 'Twenty-Fifth Constitutional Amendment Act',
    primeMinisterOrEra: 'Indira Gandhi',
    articlesAffected: ['Article 31', 'Article 31C'],
    keyObjectives: 'Subordinate property rights to Directive Principles and protect socialist nationalization laws.',
    significance: 'Substituted the word "compensation" with "amount" under Art 31(2). Inserted Article 31C giving primacy to Articles 39(b) and (c) over Articles 14, 19, and 31.',
    landmarkJudicialImpact: 'The second part of Article 31C barring judicial review was struck down in Kesavananda Bharati (1973).'
  },
  {
    number: 42,
    year: 1976,
    title: 'Forty-Second Constitutional Amendment Act ("Mini-Constitution")',
    primeMinisterOrEra: 'Indira Gandhi (Internal Emergency)',
    articlesAffected: ['Preamble', 'Part IV-A (Art 51A)', 'Part XIV-A (Arts 323A-B)', 'Articles 31C, 74, 368'],
    keyObjectives: 'Massive overhaul of the Constitution following Swaran Singh Committee recommendations, asserting total Parliamentary sovereignty.',
    significance: 'Added words "SOCIALIST", "SECULAR", and "INTEGRITY" to the Preamble. Added Part IV-A (Fundamental Duties) and Part XIV-A (Tribunals). Transferred 5 subjects (Education, Forests, Weights/Measures, Wildlife, Administration of Justice) from State List to Concurrent List. Bound President to cabinet advice.',
    landmarkJudicialImpact: 'Clauses immunizing amendments from judicial review were struck down in Minerva Mills (1980).'
  },
  {
    number: 44,
    year: 1978,
    title: 'Forty-Fourth Constitutional Amendment Act',
    primeMinisterOrEra: 'Morarji Desai (Janata Party)',
    articlesAffected: ['Article 19(1)(f) deleted', 'Article 31 deleted', 'Article 300A inserted', 'Articles 352, 356, 358, 359'],
    keyObjectives: 'Eradicate emergency abuse loopholes, restore civil liberties, and demote property rights.',
    significance: 'Replaced "internal disturbance" with "armed rebellion" in Art 352. Mandated written Cabinet recommendation for National Emergency. Formally abolished Right to Property as a Fundamental Right, moving it to Article 300A as a legal right. Ensured Articles 20 and 21 can never be suspended during any emergency.'
  },
  {
    number: 52,
    year: 1985,
    title: 'Fifty-Second Constitutional Amendment Act (Anti-Defection Law)',
    primeMinisterOrEra: 'Rajiv Gandhi',
    articlesAffected: ['Article 102', 'Article 191', 'Tenth Schedule'],
    keyObjectives: 'Curb the menace of political floor-crossing and defections ("Aaya Ram, Gaya Ram" culture).',
    significance: 'Inserted Tenth Schedule setting grounds for disqualification of legislators who voluntarily give up party membership or vote against party whip. Presiding officer decision held final.',
    landmarkJudicialImpact: 'Kihoto Hollohan (1992) struck down the bar on judicial review; held Speaker acts as a tribunal subject to High Court/Supreme Court review.'
  },
  {
    number: 61,
    year: 1988,
    title: 'Sixty-First Constitutional Amendment Act',
    primeMinisterOrEra: 'Rajiv Gandhi',
    articlesAffected: ['Article 326'],
    keyObjectives: 'Enfranchise the youth of the nation by expanding voting rights.',
    significance: 'Lowered the minimum voting age for elections to the Lok Sabha and State Legislative Assemblies from 21 years to 18 years.'
  },
  {
    number: 69,
    year: 1991,
    title: 'Sixty-Ninth Constitutional Amendment Act',
    primeMinisterOrEra: 'P.V. Narasimha Rao',
    articlesAffected: ['Article 239AA', 'Article 239AB'],
    keyObjectives: 'Grant representative democratic status to the Union Territory of Delhi based on Balakrishnan Committee recommendations.',
    significance: 'Designated the Union Territory of Delhi as the National Capital Territory (NCT) of Delhi. Created a 70-member Legislative Assembly and Council of Ministers headed by Chief Minister, reserving Police, Public Order, and Land to the Union.'
  },
  {
    number: 73,
    year: 1992,
    title: 'Seventy-Third Constitutional Amendment Act (Panchayati Raj)',
    primeMinisterOrEra: 'P.V. Narasimha Rao',
    articlesAffected: ['Part IX (Articles 243 to 243-O)', 'Eleventh Schedule'],
    keyObjectives: 'Fulfill Article 40 DPSP by granting constitutional status and uniform architecture to rural local self-governments.',
    significance: 'Mandated 3-tier Panchayati Raj in all states; introduced 33% reservation for women across seats and chairmanships; created State Election Commissions and State Finance Commissions; added Eleventh Schedule with 29 functional items.'
  },
  {
    number: 74,
    year: 1992,
    title: 'Seventy-Fourth Constitutional Amendment Act (Nagarpalika)',
    primeMinisterOrEra: 'P.V. Narasimha Rao',
    articlesAffected: ['Part IX-A (Articles 243P to 243ZG)', 'Twelfth Schedule'],
    keyObjectives: 'Revitalize and provide constitutional protection to urban local self-governments (Municipalities).',
    significance: 'Constitutionalized Nagar Panchayats, Municipal Councils, and Municipal Corporations; instituted Wards Committees and District Planning Committees; added Twelfth Schedule with 18 functional matters.'
  },
  {
    number: 86,
    year: 2002,
    title: 'Eighty-Sixth Constitutional Amendment Act (Right to Education)',
    primeMinisterOrEra: 'Atal Bihari Vajpayee',
    articlesAffected: ['Article 21A inserted', 'Article 45 substituted', 'Article 51A(k) inserted'],
    keyObjectives: 'Translate the DPSP on free education into an enforceable Fundamental Right for children.',
    significance: 'Inserted Article 21A making free and compulsory education a Fundamental Right for children between 6 and 14 years. Replaced Article 45 DPSP with early childhood care (0-6 yrs). Added 11th Fundamental Duty under Article 51A(k) for parents/guardians.'
  },
  {
    number: 91,
    year: 2003,
    title: 'Ninety-First Constitutional Amendment Act',
    primeMinisterOrEra: 'Atal Bihari Vajpayee',
    articlesAffected: ['Article 75(1A)', 'Article 164(1A)', 'Tenth Schedule'],
    keyObjectives: 'Limit the jumbo size of ministries and strengthen the Anti-Defection Law.',
    significance: 'Capped total Council of Ministers (including PM/CM) to maximum 15% of total membership of Lok Sabha / State Assembly (minimum 12 for State). Omitted the one-third split defense in Tenth Schedule; only two-thirds merger remains valid.'
  },
  {
    number: 99,
    year: 2014,
    title: 'Ninety-Ninth Constitutional Amendment Act (NJAC) [Struck Down]',
    primeMinisterOrEra: 'Narendra Modi',
    articlesAffected: ['Article 124A', 'Article 124B', 'Article 124C'],
    keyObjectives: 'Replace the judicial Collegium system for appointment of Supreme Court and High Court judges with a National Judicial Appointments Commission (NJAC).',
    significance: 'Composed of CJI, 2 senior judges, Union Law Minister, and 2 eminent persons. First constitutional amendment in Indian history to be struck down entirely.',
    landmarkJudicialImpact: 'Declared unconstitutional and void by a 4:1 majority in Supreme Court Advocates-on-Record Association (NJAC Case, 2015) for violating judicial independence.'
  },
  {
    number: 101,
    year: 2016,
    title: 'One Hundred and First Constitutional Amendment Act (GST)',
    primeMinisterOrEra: 'Narendra Modi',
    articlesAffected: ['Article 246A inserted', 'Article 269A inserted', 'Article 279A inserted', 'Seventh Schedule amended'],
    keyObjectives: 'Introduce the unified Goods and Services Tax (GST) across India, subsuming multiple central and state indirect taxes.',
    significance: 'Created concurrent legislative competence under Art 246A; created the Goods and Services Tax Council under Article 279A as a cooperative federal voting engine.'
  },
  {
    number: 102,
    year: 2018,
    title: 'One Hundred and Second Constitutional Amendment Act (NCBC)',
    primeMinisterOrEra: 'Narendra Modi',
    articlesAffected: ['Article 338B inserted', 'Article 342A inserted', 'Article 366(26C)'],
    keyObjectives: 'Confer full constitutional status on the National Commission for Backward Classes (NCBC).',
    significance: 'Elevated NCBC on par with NCSC (Art 338) and NCST (Art 338A), granting it powers to investigate welfare safeguards and advise on SEBC policies.'
  },
  {
    number: 103,
    year: 2019,
    title: 'One Hundred and Third Constitutional Amendment Act (EWS)',
    primeMinisterOrEra: 'Narendra Modi',
    articlesAffected: ['Article 15(6) inserted', 'Article 16(6) inserted'],
    keyObjectives: 'Provide affirmative action reservations for Economically Weaker Sections (EWS) of citizens not covered by SC, ST, or OBC quotas.',
    significance: 'Permitted up to 10% reservation in educational institutions (including private unaided) and public employment based purely on economic criteria over and above the existing 50% reservation ceiling.',
    landmarkJudicialImpact: 'Upheld by 3:2 majority in Janhit Abhiyan v. Union of India (2022).'
  },
  {
    number: 104,
    year: 2020,
    title: 'One Hundred and Fourth Constitutional Amendment Act',
    primeMinisterOrEra: 'Narendra Modi',
    articlesAffected: ['Article 334'],
    keyObjectives: 'Extend legislative reservation for SCs and STs while discontinuing Anglo-Indian nominations.',
    significance: 'Extended political seat reservations for Scheduled Castes and Scheduled Tribes in Lok Sabha and State Legislative Assemblies for another 10 years (until 2030); ceased nomination of Anglo-Indian members under Articles 331 and 333.'
  },
  {
    number: 105,
    year: 2021,
    title: 'One Hundred and Fifth Constitutional Amendment Act',
    primeMinisterOrEra: 'Narendra Modi',
    articlesAffected: ['Article 338B', 'Article 342A', 'Article 366'],
    keyObjectives: 'Clarify and restore the power of State Governments to identify and specify their own State list of Socially and Educationally Backward Classes (SEBCs/OBCs).',
    significance: 'Passed unanimously to undo the interpretation of the Maratha reservation judgment (Jaishree Laxmanrao Patil 2021), preserving state autonomy in identifying regional backward classes.'
  },
  {
    number: 106,
    year: 2023,
    title: 'One Hundred and Sixth Constitutional Amendment Act (Nari Shakti Vandan Adhiniyam)',
    primeMinisterOrEra: 'Narendra Modi',
    articlesAffected: ['Article 239AA amended', 'Article 330A inserted', 'Article 332A inserted', 'Article 334A inserted'],
    keyObjectives: 'Provide 33% reservation for women in the Lok Sabha, State Legislative Assemblies, and NCT of Delhi Assembly.',
    significance: 'Historic women’s reservation law enacted during the inaugural special session in the new Parliament building. Reserves one-third of all directly elected seats in Lok Sabha and State Assemblies for women for a period of 15 years, taking effect after the subsequent census and delimitation exercise.'
  }
];
