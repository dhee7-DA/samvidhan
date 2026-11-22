export interface ConstitutionalCommission {
  id: string;
  commissionName: string;
  year: number;
  chairperson: string;
  topicPillar: string;
  relevantArticles: string[];
  keyRecommendation: string;
  quoteSnippet: string;
  examApplication: string;
}

export const CONSTITUTIONAL_COMMISSIONS_DATA: ConstitutionalCommission[] = [
  // =========================================================================
  // 1. GOVERNOR & ARTICLE 200 / 356
  // =========================================================================
  {
    id: 'sarkaria-governor-assent',
    commissionName: 'Sarkaria Commission on Centre-State Relations',
    year: 1988,
    chairperson: 'Justice R.S. Sarkaria',
    topicPillar: 'State Executive & Federal Friction (Article 200 & 163)',
    relevantArticles: ['Article 200', 'Article 201', 'Article 163'],
    keyRecommendation:
      'Recommended that the Governor must decide on legislative assent under Article 200 within a maximum period of 6 months. Withholding of assent must be a rare exception accompanied by specific reasoned messages.',
    quoteSnippet:
      'As recommended by the Sarkaria Commission (1988, Ch. V), the Governor must decide on legislative assent under Article 200 within a maximum timeframe of six months, and withholding of assent should not be used as an arbitrary executive veto.',
    examApplication: 'UPSC GS-2 & Judicial Services essays on Governor\'s pocket veto and legislative deadlocks.'
  },
  {
    id: 'punchhi-governor-timeline',
    commissionName: 'Punchhi Commission on Centre-State Relations',
    year: 2010,
    chairperson: 'Justice M.M. Punchhi',
    topicPillar: 'State Executive & Gubernatorial Discretion (Article 200 & 163)',
    relevantArticles: ['Article 200', 'Article 163', 'Article 156'],
    keyRecommendation:
      'Advocated that Governors must decide on bills within 6 months. Also recommended removing the "Doctrine of Pleasure" for Governors by amending Article 156 to introduce an impeachment procedure by State Legislatures on lines of the President.',
    quoteSnippet:
      'The Punchhi Commission (2010) urged that the Governor\'s discretion under Article 200 be bound by a strict six-month ceiling and recommended ending the unconditional "Doctrine of Pleasure" to insulate the office from partisan central dominance.',
    examApplication: 'Essays on gubernatorial independence, federalism, and Article 156 pleasure doctrine.'
  },
  {
    id: 'sarkaria-art356-last-resort',
    commissionName: 'Sarkaria Commission on Centre-State Relations',
    year: 1988,
    chairperson: 'Justice R.S. Sarkaria',
    topicPillar: 'Emergency Powers & President\'s Rule (Article 356)',
    relevantArticles: ['Article 356', 'Article 355', 'Article 365'],
    keyRecommendation:
      'President\'s Rule under Article 356 must be invoked only as a "measure of last resort" after exhausting all alternative corrective remedies under Article 355. Prior warning must be issued to the errant State.',
    quoteSnippet:
      'Following the Sarkaria Commission recommendations (endorsed in S.R. Bommai), Article 356 must remain a "dead letter" to be deployed only in extreme cases of physical breakdown or constitutional paralysis after exhausting all warnings under Article 355.',
    examApplication: 'Questions on misuse of Article 356, breakdown of constitutional machinery, and Bommai principles.'
  },
  {
    id: 'sarkaria-hung-assembly-order',
    commissionName: 'Sarkaria Commission on Centre-State Relations',
    year: 1988,
    chairperson: 'Justice R.S. Sarkaria',
    topicPillar: 'Government Formation & Hung Assemblies (Article 164 & 75)',
    relevantArticles: ['Article 164', 'Article 75'],
    keyRecommendation:
      'Laid down the strict order of preference for inviting Chief Ministers in a hung assembly: (1) Pre-poll alliance of parties; (2) Single largest party with outside support; (3) Post-poll alliance with all partners joining government; (4) Post-poll alliance with unconditional outside support.',
    quoteSnippet:
      'Under the Sarkaria Commission guidelines (affirmed in Rameshwar Prasad, 2006), the Governor is bound by a strict order of preference: a pre-poll alliance ranks first in priority, commanding precedence over a single largest party.',
    examApplication: 'Questions on hung legislatures, floor tests, and gubernatorial discretion in government formation.'
  },

  // =========================================================================
  // 2. TENTH SCHEDULE & ANTI-DEFECTION
  // =========================================================================
  {
    id: 'arc2-anti-defection-tribunal',
    commissionName: 'Second Administrative Reforms Commission (2nd ARC)',
    year: 2007,
    chairperson: 'M. Veerappa Moily',
    topicPillar: 'Parliamentary Form of Government & Anti-Defection (Tenth Schedule)',
    relevantArticles: ['Tenth Schedule', 'Article 102', 'Article 191'],
    keyRecommendation:
      'Recommended that the power to decide disqualification petitions under the Tenth Schedule should be transferred from the partisan Speaker to the President or Governor acting on the binding advice of the Election Commission (on lines of Article 103/192).',
    quoteSnippet:
      'As recommended by the 2nd ARC (4th Report on Ethics in Governance) and echoed in Keisham Meghachandra (2020), disqualification under the Tenth Schedule must be adjudicated by an independent tribunal or the Election Commission rather than a partisan Speaker.',
    examApplication: 'Mains essays on anti-defection loopholes, Speaker\'s impartiality, and Keisham Meghachandra reforms.'
  },
  {
    id: 'law-comm-170-defection-whips',
    commissionName: '170th Law Commission Report on Reform of Electoral Laws',
    year: 1999,
    chairperson: 'Justice B.P. Jeevan Reddy',
    topicPillar: 'Electoral Reforms & Anti-Defection (Tenth Schedule)',
    relevantArticles: ['Tenth Schedule (Paragraph 2(1)(b))'],
    keyRecommendation:
      'Proposed limiting the issuance of party whips under Paragraph 2(1)(b) of the Tenth Schedule ONLY to critical motions that threaten the life of the government (No-Confidence motions, Money/Finance Bills, Votes of Thanks), restoring free debate on all ordinary bills.',
    quoteSnippet:
      'In line with the 170th Law Commission Report (1999), the anti-defection whip should be confined strictly to votes threatening government survival (No-Confidence, Budgets), freeing parliamentarians to deliberate without fear of automatic disqualification.',
    examApplication: 'Questions on parliamentary democracy, legislative paralysis, and freedom of speech of lawmakers.'
  },

  // =========================================================================
  // 3. ELECTIONS & ELECTION COMMISSION (ARTICLE 324)
  // =========================================================================
  {
    id: 'law-comm-255-eci-collegium',
    commissionName: '255th Law Commission Report on Electoral Reforms',
    year: 2015,
    chairperson: 'Justice A.P. Shah',
    topicPillar: 'Part XV: Elections & Constitutional Bodies (Article 324)',
    relevantArticles: ['Article 324(2)', 'Article 324(5)'],
    keyRecommendation:
      'Recommended that the appointment of the CEC and other Election Commissioners be made on the recommendations of a 3-member collegium comprising the Prime Minister, Leader of Opposition, and the Chief Justice of India. Also urged equal constitutional removal protection for Election Commissioners under Article 324(5).',
    quoteSnippet:
      'As advocated by the 255th Law Commission Report (2015) and endorsed in Anoop Baranwal (2023), insulating the Election Commission demands an institutional collegium (PM, CJI, LoP) and uniform removal safeguards for all commissioners under Article 324(5).',
    examApplication: 'UPSC GS-2 questions on Election Commission independence, the 2023 Act, and Anoop Baranwal.'
  },
  {
    id: 'goswami-committee-electoral-funding',
    commissionName: 'Dinesh Goswami Committee on Electoral Reforms',
    year: 1990,
    chairperson: 'Dinesh Goswami',
    topicPillar: 'Electoral Democracy & Political Funding (Article 324)',
    relevantArticles: ['Article 324', 'Article 19(1)(a)'],
    keyRecommendation:
      'Recommended partial state funding of elections in kind (fuel, paper, media airtime) to eliminate black money and curb corporate quid pro quo corruption in electoral campaigns.',
    quoteSnippet:
      'To prevent corporate capture of electoral democracy (reiterated in ADR 2024), the Dinesh Goswami Committee (1990) and Indrajit Gupta Committee (1998) strongly recommended state funding of elections in kind to restore a level playing field.',
    examApplication: 'Questions on Electoral Bonds verdict, dark money in politics, and clean election financing.'
  },

  // =========================================================================
  // 4. JUDICIARY, APPOINTMENTS & ARTICLE 124/136
  // =========================================================================
  {
    id: 'ncrwc-national-judicial-commission',
    commissionName: 'National Commission to Review the Working of the Constitution (NCRWC)',
    year: 2002,
    chairperson: 'Justice M.N. Venkatachaliah',
    topicPillar: 'Union Judiciary & Judicial Appointments (Article 124)',
    relevantArticles: ['Article 124(2)', 'Article 217(1)'],
    keyRecommendation:
      'Recommended a balanced National Judicial Commission (NJC) comprising CJI, two senior SC judges, Union Law Minister, and an eminent person to ensure transparent, merit-based judicial appointments with institutional checks.',
    quoteSnippet:
      'The NCRWC (Venkatachaliah Commission, 2002) recommended a balanced National Judicial Commission to replace the opaque Collegium, harmonizing judicial independence with democratic executive accountability.',
    examApplication: 'Judicial appointments debate, Collegium reform, and Memorandum of Procedure (MoP).'
  },
  {
    id: 'law-comm-229-national-courts-appeal',
    commissionName: '229th Law Commission Report on Restructuring the Supreme Court',
    year: 2009,
    chairperson: 'Justice A.R. Lakshmanan',
    topicPillar: 'Supreme Court Docket & Article 136 Jurisprudence',
    relevantArticles: ['Article 136', 'Article 130'],
    keyRecommendation:
      'Recommended establishing four Regional Courts of Appeal (North, South, East, West) to hear routine statutory appeals and SLPs, leaving the Delhi Constitution Bench to focus exclusively on public law and constitutional interpretation.',
    quoteSnippet:
      'In line with the 229th Law Commission Report and Mathai @ Joby v. George (2010), establishing Regional Courts of Appeal is essential to rescue the Supreme Court from routine SLP docket collapse and restore its role as an apex Constitution Court.',
    examApplication: 'Article 136 overload, access to justice for southern states, and judicial pendency.'
  },

  // =========================================================================
  // 5. INTER-STATE RELATIONS & WATER DISPUTES (ARTICLE 262/263)
  // =========================================================================
  {
    id: 'sarkaria-permanent-water-tribunal',
    commissionName: 'Sarkaria Commission on Centre-State Relations',
    year: 1988,
    chairperson: 'Justice R.S. Sarkaria',
    topicPillar: 'Federal Coordination & Water Disputes (Article 262 & 263)',
    relevantArticles: ['Article 262', 'Article 263', 'Entry 56 List I'],
    keyRecommendation:
      'Recommended amending the 1956 Act to require setting up a water dispute tribunal within one year of request, making Tribunal awards automatically effective without government notification, and activating the Inter-State Council under Article 263.',
    quoteSnippet:
      'To prevent endless hydro-federal friction (Cauvery 2018), the Sarkaria Commission urged establishing permanent institutional river basin authorities and making Tribunal awards under Article 262 self-enforcing without executive delays.',
    examApplication: 'Inter-state river water disputes, federalism tensions, and Cauvery/Mahanadi disputes.'
  },

  // =========================================================================
  // 6. CIVIL SERVICES & ARTICLE 311
  // =========================================================================
  {
    id: 'arc2-civil-services-reform',
    commissionName: 'Second Administrative Reforms Commission (2nd ARC)',
    year: 2008,
    chairperson: 'M. Veerappa Moily',
    topicPillar: 'Public Services & Tenure Security (Articles 310 & 311)',
    relevantArticles: ['Article 310', 'Article 311', 'Article 312'],
    keyRecommendation:
      'Recommended amending Article 311 to align it with modern performance standards, ensuring honest civil servants are protected while corrupt officials are dealt with swiftly without procedural delays under the Second Proviso.',
    quoteSnippet:
      'The 2nd ARC (10th Report on Refurbishing Personnel Administration) urged balancing tenure safeguards under Article 311 with speedy disposal of corruption charges, preventing the constitutional shield from becoming an enclave of bureaucratic lethargy.',
    examApplication: 'Civil services reform, lateral entry, and Article 311 Second Proviso exceptions.'
  },

  // =========================================================================
  // 7. SEDITION & LAW COMMISSION REPORT 279
  // =========================================================================
  {
    id: 'law-comm-279-sedition',
    commissionName: '279th Law Commission Report on Usage of the Law of Sedition',
    year: 2023,
    chairperson: 'Justice Ritu Raj Awasthi',
    topicPillar: 'Part III: Freedom of Speech & Reasonable Restrictions (Article 19(1)(a) & 19(2))',
    relevantArticles: ['Article 19(1)(a)', 'Article 19(2)', 'Section 152 BNS'],
    keyRecommendation:
      'Recommended retaining the penal provision for anti-national acts threatening unity and integrity of India (Section 152 BNS), but introduced procedural checks: requiring preliminary inquiry by an Inspector of Police and prior sanction before FIR registration.',
    quoteSnippet:
      'As observed in the 279th Law Commission Report (2023), protecting national sovereignty under Article 19(2) justifies criminalizing violent secession, provided stringent procedural filters prevent misuse against peaceful democratic criticism.',
    examApplication: 'Questions on Sedition freeze, Section 152 BNS, and freedom of speech.'
  }
];
