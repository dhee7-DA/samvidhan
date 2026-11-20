export interface MathFormulaPair {
  id: string;
  unionArticle: number;
  unionTitle: string;
  rule: '+89' | '+90' | '+4';
  stateArticle: number;
  stateTitle: string;
  conceptualBridge: string;
  statutoryDifference: string;
  examinerTrap: string;
  landmarkCitation: string;
}

export interface MnemonicEngine {
  id: string;
  title: string;
  catchphrase: string;
  articlesCovered: string;
  category: 'Fundamental Rights' | 'Preamble & Schedules' | 'Emergency & States' | 'Judiciary & Writs';
  explanation: string;
  breakdown: { letter: string; word: string; article: string; details: string }[];
  proTip: string;
}

export interface RapidReflexDrillQuestion {
  id: string;
  question: string;
  shortcutRule: string;
  options: [string, string, string, string];
  correctIndex: number;
  explanation: string;
  formulaNote: string;
}

// =========================================================================
// 1. THE +89 AND +90 MATHEMATICAL CONVERSION PAIRS
// =========================================================================
export const MATH_FORMULA_PAIRS: MathFormulaPair[] = [
  // THE +89 RULE (Articles 72 to 111)
  {
    id: 'pardon-power',
    unionArticle: 72,
    unionTitle: 'President Pardon & Clemency Powers',
    rule: '+89',
    stateArticle: 161,
    stateTitle: 'Governor Pardon & Clemency Powers',
    conceptualBridge: 'Both possess sovereign clemency power to grant pardons, reprieves, respites or remissions.',
    statutoryDifference: 'President under Art. 72 can pardon death sentences and court-martial sentences; Governor under Art. 161 cannot pardon death sentences (can only suspend, remit or commute), nor court-martial.',
    examinerTrap: 'Governor under Art 161 has NO power to grant full pardon for a death sentence, though Governor can commute death to life.',
    landmarkCitation: 'Maru Ram (1980) & Epuru Sudhakar (2006): Clemency is subject to judicial review against arbitrariness.'
  },
  {
    id: 'com-aid-advise',
    unionArticle: 74,
    unionTitle: 'Union Council of Ministers to aid & advise President',
    rule: '+89',
    stateArticle: 163,
    stateTitle: 'State Council of Ministers to aid & advise Governor',
    conceptualBridge: 'Cabinet system where the constitutional head acts on the aid and advice of the Council of Ministers.',
    statutoryDifference: 'Article 163(1) gives the Governor explicit discretionary power ("except in so far as he is required to exercise his functions in his discretion"), whereas Article 74 contains no explicit discretionary clause.',
    examinerTrap: 'Article 74 advice is strictly binding on President (after 1 reconsideration, 44th Amend); Article 163 recognizes Governor constitutional discretion.',
    landmarkCitation: 'Shamsher Singh (1974) & Nabam Rebia (2016): Governor discretion is strictly bounded by the Constitution.'
  },
  {
    id: 'ministers-appointment',
    unionArticle: 75,
    unionTitle: 'Appointment, tenure & responsibility of Union Ministers (PM)',
    rule: '+89',
    stateArticle: 164,
    stateTitle: 'Appointment, tenure & responsibility of State Ministers (CM)',
    conceptualBridge: 'Ministers hold office during pleasure of President/Governor; Council collectively responsible to Lok Sabha/Vidhan Sabha.',
    statutoryDifference: 'Article 164(1) Proviso contains a mandatory requirement that in Bihar, MP, Chhattisgarh, and Odisha, there shall be a Minister in charge of tribal welfare.',
    examinerTrap: 'Collective responsibility is strictly to the LOWER HOUSE (Lok Sabha / Legislative Assembly), NOT to Parliament or Legislature as a whole.',
    landmarkCitation: 'U.N.R. Rao v. Indira Gandhi (1971): Council of Ministers continues even after dissolution of the House.'
  },
  {
    id: 'law-officer',
    unionArticle: 76,
    unionTitle: 'Attorney-General for India',
    rule: '+89',
    stateArticle: 165,
    stateTitle: 'Advocate-General for the State',
    conceptualBridge: 'Highest constitutional law officer appointed to advise the respective executive and perform legal duties.',
    statutoryDifference: 'AG must be qualified to be appointed Supreme Court judge (Art 76); Advocate-General must be qualified to be appointed High Court judge (Art 165).',
    examinerTrap: 'Neither AG nor Advocate-General has a vote in legislative proceedings, though both have right of audience (Arts 88 & 177).',
    landmarkCitation: 'B.P. Singhal (2010): Constitutional law officers serve during pleasure without fixed statutory security of tenure.'
  },
  {
    id: 'conduct-business',
    unionArticle: 77,
    unionTitle: 'Conduct of business of the Government of India',
    rule: '+89',
    stateArticle: 166,
    stateTitle: 'Conduct of business of the Government of a State',
    conceptualBridge: 'All executive actions shall be expressed to be taken in the name of the President/Governor.',
    statutoryDifference: 'Rules of business made by President (Union) vs Governor (State) for allocation of ministerial portfolios.',
    examinerTrap: 'Orders authenticated under Rules of Business cannot be questioned in court on the ground that it is not an order made by President/Governor.',
    landmarkCitation: 'Dattatraya Moreshwar (1952): Provisions of Arts 77 & 166 are directory, not mandatory; lack of formal name does not render order void.'
  },
  {
    id: 'cm-duties-info',
    unionArticle: 78,
    unionTitle: 'Duties of Prime Minister to furnish info to President',
    rule: '+89',
    stateArticle: 167,
    stateTitle: 'Duties of Chief Minister to furnish info to Governor',
    conceptualBridge: 'Institutional communication channel between executive head of government and constitutional head of state.',
    statutoryDifference: 'CM must communicate all decisions of Council of Ministers relating to administration and proposals for legislation to Governor.',
    examinerTrap: 'Governor has the right to require CM to submit to Council of Ministers any matter on which a decision was taken by a Minister without Council consideration.',
    landmarkCitation: 'S.R. Bommai (1994): Governor role as unbiased constitutional referee under Article 167.'
  },
  {
    id: 'legislature-constitution',
    unionArticle: 79,
    unionTitle: 'Constitution of Parliament (President + 2 Houses)',
    rule: '+89',
    stateArticle: 168,
    stateTitle: 'Constitution of Legislatures in States (Governor + Houses)',
    conceptualBridge: 'Legislature consists of the constitutional head plus the House(s).',
    statutoryDifference: 'Parliament is mandatorily bicameral (Lok Sabha + Rajya Sabha); State Legislature can be unicameral (Assembly only) or bicameral (Assembly + Legislative Council).',
    examinerTrap: 'President is an integral part of Parliament under Art. 79, exactly as Governor is an integral part of State Legislature under Art. 168.',
    landmarkCitation: 'In re Delhi Laws Act (1951): Plenary legislative authority of the tripartite Parliament.'
  },
  {
    id: 'sessions-prorogation',
    unionArticle: 85,
    unionTitle: 'Sessions of Parliament, prorogation and dissolution',
    rule: '+89',
    stateArticle: 174,
    stateTitle: 'Sessions of State Legislature, prorogation and dissolution',
    conceptualBridge: 'Constitutional head summons the House; gap between two sessions shall not exceed 6 months.',
    statutoryDifference: 'Governor can dissolve Legislative Assembly; Legislative Council (Vidhan Parishad) is a permanent body and not subject to dissolution (Art 172).',
    examinerTrap: 'The 6-month maximum inter-session gap is mandatory; failing to summon within 6 months is a constitutional violation.',
    landmarkCitation: 'State of Punjab v. Principal Secretary (2023): Speaker has sole authority over House adjournments; Governor cannot declare session illegal.'
  },
  {
    id: 'address-rights',
    unionArticle: 86,
    unionTitle: 'Right of President to address & send messages to Houses',
    rule: '+89',
    stateArticle: 175,
    stateTitle: 'Right of Governor to address & send messages to Houses',
    conceptualBridge: 'Constitutional head may address either House or both Houses assembled together and send messages.',
    statutoryDifference: 'Governor can address Assembly or Joint Session of Assembly and Council; House must consider messages with all convenient dispatch.',
    examinerTrap: 'Distinguish Art 86/175 (general right to address at any time) from Art 87/176 (Special address at first session of each year).',
    landmarkCitation: 'K.A. Mathialagan v. P. Srinivasan (1973): Governor address decorum and constitutional convention.'
  },
  {
    id: 'rights-ministers-ag',
    unionArticle: 88,
    unionTitle: 'Rights of Ministers & Attorney-General in Parliament',
    rule: '+89',
    stateArticle: 177,
    stateTitle: 'Rights of Ministers & Advocate-General in State Legislature',
    conceptualBridge: 'Right to speak in and participate in proceedings of either House or any committee thereof without membership.',
    statutoryDifference: 'Allows a Minister who is member of upper house (or not yet member) to speak in lower house, but voting is strictly restricted to home House.',
    examinerTrap: 'Ministers and AG/Advocate-General can SPEAK and participate, but CANNOT VOTE in a House of which they are not elected members.',
    landmarkCitation: 'Har Sharan Verma v. Tribhuvan Narain Singh (1971): Non-member can be appointed Minister for 6 months.'
  },
  {
    id: 'quorum-voting',
    unionArticle: 100,
    unionTitle: 'Voting in Houses, power to act notwithstanding vacancies & Quorum',
    rule: '+89',
    stateArticle: 189,
    stateTitle: 'Voting in Houses, power to act notwithstanding vacancies & Quorum (State)',
    conceptualBridge: 'Decisions taken by majority of votes; presiding officer casts vote only in case of tie (Casting Vote).',
    statutoryDifference: 'Quorum under Art 100 is 1/10th of total members. Quorum under Art 189 is 10 members or 1/10th of total members, whichever is greater.',
    examinerTrap: 'State Quorum has the "10 members OR 1/10th, whichever is greater" rule, unlike Parliament which is strictly 1/10th.',
    landmarkCitation: 'Kihoto Hollohan (1992): Presiding officer casting vote vs adjudicatory functions under 10th Schedule.'
  },
  {
    id: 'disqualifications-members',
    unionArticle: 102,
    unionTitle: 'Disqualifications for membership of Parliament',
    rule: '+89',
    stateArticle: 191,
    stateTitle: 'Disqualifications for membership of State Legislature',
    conceptualBridge: 'Office of profit, unsound mind, undischarged insolvent, foreign citizenship, disqualified by law of Parliament.',
    statutoryDifference: 'Article 102 applies to MPs (decided by President under Art 103 on ECI advice); Article 191 applies to MLAs/MLCs (decided by Governor under Art 192 on ECI advice).',
    examinerTrap: 'Anti-defection under Tenth Schedule is a separate constitutional ground incorporated via Arts 102(2) & 191(2).',
    landmarkCitation: 'Jaya Bachchan v. UOI (2006): Test for "Office of Profit" is capable of yielding pecuniary profit, not whether profit was actually received.'
  },
  {
    id: 'powers-privileges',
    unionArticle: 105,
    unionTitle: 'Powers, privileges, immunities of Parliament & MPs',
    rule: '+89',
    stateArticle: 194,
    stateTitle: 'Powers, privileges, immunities of State Legislatures & MLAs',
    conceptualBridge: 'Freedom of speech in the House; immunity from court proceedings for speech or vote given in the House.',
    statutoryDifference: 'Art 105 applies to MPs; Art 194 applies to State legislators. Both are now subject to the 2024 7-Judge Bench anti-corruption standard.',
    examinerTrap: 'Bribery is NOT protected by legislative privilege! Taking cash for voting is an offence under the PC Act.',
    landmarkCitation: 'Sita Soren v. UOI (2024) 7-Judge Bench: Overruled P.V. Narasimha Rao; bribery in voting has NO immunity under Art 105(2) or 194(2).'
  },
  {
    id: 'money-bills-def',
    unionArticle: 110,
    unionTitle: 'Definition of "Money Bills" in Parliament',
    rule: '+89',
    stateArticle: 199,
    stateTitle: 'Definition of "Money Bills" in State Legislature',
    conceptualBridge: 'Exclusive enumeration of tax imposition, borrowing, Consolidated Fund custody, and incidental financial matters.',
    statutoryDifference: 'Speaker of Lok Sabha (Art 110(4)) vs Speaker of Legislative Assembly (Art 199(4)) has the conclusive power to certify a Money Bill.',
    examinerTrap: 'A bill is NOT a Money Bill if it merely deals with fines, penalties, or license fees (explicitly barred by clause 2 of both articles).',
    landmarkCitation: 'Rojer Mathew (2020) & Aadhaar Case (2018): Speaker certificate under Art 110 is open to constitutional judicial review.'
  },
  {
    id: 'assent-bills',
    unionArticle: 111,
    unionTitle: 'Assent to Bills by President',
    rule: '+89',
    stateArticle: 200,
    stateTitle: 'Assent to Bills by Governor',
    conceptualBridge: 'Constitutional head gives assent, withholds assent, or returns non-money bill for reconsideration.',
    statutoryDifference: 'Governor under Art 200 has a 4th option that President does NOT have: Governor can reserve the bill for the consideration of the President (Art 201).',
    examinerTrap: 'Governor CANNOT indefinitely pocket veto bills passed by elected assembly; must act "as soon as possible" under Art 200 Proviso.',
    landmarkCitation: 'State of Punjab v. Governor (2023): Governor cannot sit on bills; withholding assent requires immediate return to Assembly.'
  },

  // THE +90 RULE (Articles 112 to 124)
  {
    id: 'budget-afs',
    unionArticle: 112,
    unionTitle: 'Annual Financial Statement (Union Budget)',
    rule: '+90',
    stateArticle: 202,
    stateTitle: 'Annual Financial Statement (State Budget)',
    conceptualBridge: 'Statement of estimated receipts and expenditure of the Government for the financial year.',
    statutoryDifference: 'Shows expenditure "charged" on Consolidated Fund (non-votable) vs other expenditure submitted to vote of lower house.',
    examinerTrap: 'The word "Budget" does NOT appear anywhere in the Indian Constitution! The constitutional term is "Annual Financial Statement".',
    landmarkCitation: 'State of Himachal Pradesh v. Umed Ram Sharma (1986): Budget allocations and right to life through infrastructure.'
  },
  {
    id: 'estimates-procedure',
    unionArticle: 113,
    unionTitle: 'Procedure in Parliament with respect to estimates',
    rule: '+90',
    stateArticle: 203,
    stateTitle: 'Procedure in Legislature with respect to estimates',
    conceptualBridge: 'Expenditure charged on Consolidated Fund is discussed but NOT submitted to vote; other estimates voted as Demands for Grants.',
    statutoryDifference: 'Lok Sabha (Union) vs Legislative Assembly (State) has exclusive authority to assent or refuse demands for grants.',
    examinerTrap: 'Demands for grants can ONLY be made on the recommendation of the President / Governor; no private member can introduce a grant demand.',
    landmarkCitation: 'Ram Jawaya Kapur v. State of Punjab (1955): Executive power and legislative appropriations.'
  },
  {
    id: 'appropriation-bills',
    unionArticle: 114,
    unionTitle: 'Appropriation Bills in Parliament',
    rule: '+90',
    stateArticle: 204,
    stateTitle: 'Appropriation Bills in State Legislature',
    conceptualBridge: 'No money shall be withdrawn from the Consolidated Fund except under appropriation made by law.',
    statutoryDifference: 'Introduced after grants are voted under Art 113 / 203 to legally authorize withdrawal from public treasury.',
    examinerTrap: 'No amendment can be proposed to an Appropriation Bill varying the amount or altering the destination of any grant.',
    landmarkCitation: 'Bhim Singh v. UOI (2010): MPLADS validity and appropriation mechanisms.'
  },
  {
    id: 'supplementary-grants',
    unionArticle: 115,
    unionTitle: 'Supplementary, additional or excess grants (Parliament)',
    rule: '+90',
    stateArticle: 205,
    stateTitle: 'Supplementary, additional or excess grants (State)',
    conceptualBridge: 'Passed when amount authorized by Appropriation Act is insufficient for current services, or new unexpected service arises.',
    statutoryDifference: 'Excess grants require prior scrutiny by Public Accounts Committee (PAC) before submission to House.',
    examinerTrap: 'Excess grant is voted AFTER the expenditure has already been incurred (ex-post regularisation).',
    landmarkCitation: 'Kannan Devan Hills Produce Co. (1972): Public finance control via supplementary mechanisms.'
  },
  {
    id: 'votes-on-account',
    unionArticle: 116,
    unionTitle: 'Votes on account, votes of credit and exceptional grants',
    rule: '+90',
    stateArticle: 206,
    stateTitle: 'Votes on account, votes of credit and exceptional grants (State)',
    conceptualBridge: 'Advance grant made by House to cover government expenses pending completion of regular budget passing.',
    statutoryDifference: 'Vote on account is an interim financial bridge; vote of credit is a blank cheque for unexpected war/disaster demands.',
    examinerTrap: 'Vote on account covers estimated expenditure for 2 months normally; vote of credit covers indefinite emergency expenditure.',
    landmarkCitation: 'Re Presidential Poll (1974): Financial continuity of governance.'
  },
  {
    id: 'financial-bills-special',
    unionArticle: 117,
    unionTitle: 'Special provisions as to Financial Bills (Parliament)',
    rule: '+90',
    stateArticle: 207,
    stateTitle: 'Special provisions as to Financial Bills (State)',
    conceptualBridge: 'Financial Bill (I) [Art 117(1)] contains Money Bill matters plus other matters; cannot be introduced without President recommendation.',
    statutoryDifference: 'Financial Bill (I) must be introduced in lower house only; Financial Bill (II) [Art 117(3)] can be introduced in either House.',
    examinerTrap: 'All Money Bills are Financial Bills, but NOT all Financial Bills are Money Bills!',
    landmarkCitation: 'Kedar Nath v. State of Bihar (1962): Distinguishing procedural classification of financial statutes.'
  },
  {
    id: 'ordinance-power',
    unionArticle: 123,
    unionTitle: 'Power of President to promulgate Ordinances',
    rule: '+90',
    stateArticle: 213,
    stateTitle: 'Power of Governor to promulgate Ordinances',
    conceptualBridge: 'Emergency executive legislation when House(s) not in session; ceases to operate 6 weeks from reassembly.',
    statutoryDifference: 'Governor under Art 213 cannot promulgate ordinances without Presidential instructions if bill would have required President assent.',
    examinerTrap: 'Re-promulgation of ordinances without placing before legislature is a FRAUD on the Constitution.',
    landmarkCitation: 'D.C. Wadhwa (1987) & Krishna Kumar Singh (2017) 7-Judge Bench: Ordinance power is not parallel legislature; re-promulgation is unconstitutional.'
  },
  {
    id: 'higher-judiciary',
    unionArticle: 124,
    unionTitle: 'Establishment and constitution of the Supreme Court',
    rule: '+90',
    stateArticle: 214,
    stateTitle: 'High Courts for States',
    conceptualBridge: 'Supreme Court at the apex of integrated judiciary; High Court as highest judicial court in each State.',
    statutoryDifference: 'Supreme Court retirement age is 65 years (Art 124(2)); High Court judge retirement age is 62 years (Art 217(1)).',
    examinerTrap: 'High Court judge is NOT subordinate to the Supreme Court administratively; High Court is a court of record under Art 215.',
    landmarkCitation: 'NJAC Case (2015) & Second Judges Case (1993): Judicial independence and primacy in appointment is Basic Structure.'
  }
];

// =========================================================================
// 2. THE +4 EMERGENCY RULE
// =========================================================================
export const EMERGENCY_PLUS_FOUR_DATA = {
  title: 'The +4 Rule of Constitutional Emergencies',
  formula: '352 + 4 = 356 + 4 = 360',
  description: 'The three types of emergency provisions in Part XVIII are spaced exactly 4 articles apart.',
  triad: [
    {
      article: 352,
      type: 'National Emergency',
      grounds: 'War, External Aggression, or Armed Rebellion (Internal Disturbance replaced by 44th Amend 1978)',
      majority: 'Special Majority in both Houses (2/3 present & voting + majority of total membership)',
      reviewTimeline: 'Approved within 1 month; continues for 6 months per approval',
      impactOnRights: 'Article 19 suspended automatically under Art 358 (War/Aggression only). Articles 20 & 21 can NEVER be suspended under Art 359.'
    },
    {
      article: 356,
      type: 'President\'s Rule (State Emergency)',
      grounds: 'Failure of Constitutional Machinery in State (Governor report or otherwise under Art 356, or non-compliance with central directions under Art 365)',
      majority: 'Simple Majority in both Houses of Parliament',
      reviewTimeline: 'Approved within 2 months; continues for 6 months (Max 3 years with ECI certification)',
      impactOnRights: 'No effect on Fundamental Rights; State Assembly suspended/dissolved; legislative power transferred to Parliament (S.R. Bommai 1994).'
    },
    {
      article: 360,
      type: 'Financial Emergency',
      grounds: 'Threat to financial stability or credit of India or any part of its territory',
      majority: 'Simple Majority in both Houses of Parliament',
      reviewTimeline: 'Approved within 2 months; continues indefinitely until revoked (no periodic approval required)',
      impactOnRights: 'Salaries of all public servants including Supreme Court and High Court judges can be reduced; NEVER invoked in India to date.'
    }
  ]
};

// =========================================================================
// 3. COMPLETE CONSTITUTIONAL MNEMONIC ENGINES
// =========================================================================
export const MNEMONIC_ENGINES: MnemonicEngine[] = [
  {
    id: 'schedules-tears',
    title: '12 Schedules: TEARS OF OLD PM',
    catchphrase: 'TEARS OF OLD PM',
    articlesCovered: 'Schedules 1 to 12',
    category: 'Preamble & Schedules',
    explanation: 'The universally acclaimed 12-letter mnemonic that memorizes all 12 Schedules in strict numerical order.',
    breakdown: [
      { letter: 'T', word: 'Territories', article: 'Schedule 1', details: 'Names of States and Union Territories with territorial jurisdiction.' },
      { letter: 'E', word: 'Emoluments', article: 'Schedule 2', details: 'Salaries, allowances and perks of President, Governors, Judges, CAG.' },
      { letter: 'A', word: 'Affirmations & Oaths', article: 'Schedule 3', details: 'Forms of oaths for Union Ministers, MPs, Judges, CAG (President oath is in Art 60!).' },
      { letter: 'R', word: 'Rajya Sabha Allocation', article: 'Schedule 4', details: 'Allocation of seats in the Council of States to States and UTs based on population.' },
      { letter: 'S', word: 'Scheduled Areas', article: 'Schedule 5', details: 'Administration and control of Scheduled Areas and Scheduled Tribes.' },
      { letter: 'O', word: 'Other Tribal Areas (AMTM)', article: 'Schedule 6', details: 'Tribal areas in Assam, Meghalaya, Tripura, Mizoram via Autonomous District Councils.' },
      { letter: 'F', word: 'Federal Lists (3 Lists)', article: 'Schedule 7', details: 'Division of powers: List I (Union 100), List II (State 61), List III (Concurrent 52).' },
      { letter: 'O', word: 'Official Languages (22)', article: 'Schedule 8', details: 'Originally 14; expanded to 22 by 21st (Sindhi), 71st (KMN), and 92nd (BDMS) Amendments.' },
      { letter: 'L', word: 'Land Reforms (Validation)', article: 'Schedule 9', details: 'Added by 1st Amend 1951 (Art 31B); subject to Basic Structure review post-1973 (I.R. Coelho).' },
      { letter: 'D', word: 'Defection (Anti-Defection)', article: 'Schedule 10', details: 'Added by 52nd Amend 1985 (Arts 102/191); disqualification on ground of defection.' },
      { letter: 'P', word: 'Panchayats (29 Subjects)', article: 'Schedule 11', details: 'Added by 73rd Amend 1992 (Art 243G); 29 functional matters of rural self-governance.' },
      { letter: 'M', word: 'Municipalities (18 Subjects)', article: 'Schedule 12', details: 'Added by 74th Amend 1992 (Art 243W); 18 functional matters of urban local governance.' }
    ],
    proTip: 'Watch out for Oath of President (Art 60), Vice-President (Art 69), and Governor (Art 159) — these are NOT in the 3rd Schedule!'
  },
  {
    id: 'fr-equality-edout',
    title: 'Right to Equality (Articles 14–18): E-D-O-U-T',
    catchphrase: 'E-D-O-U-T (Ed-Out)',
    articlesCovered: 'Articles 14 to 18',
    category: 'Fundamental Rights',
    explanation: 'Memorize the five equality articles in exact sequence using the E-D-O-U-T rule.',
    breakdown: [
      { letter: 'E', word: 'Equality Before Law', article: 'Article 14', details: 'Equality before law (UK) and Equal protection of the laws (USA); Rule of law.' },
      { letter: 'D', word: 'Discrimination Barred', article: 'Article 15', details: 'Prohibition of discrimination on grounds ONLY of religion, race, caste, sex, place of birth.' },
      { letter: 'O', word: 'Opportunity in Employment', article: 'Article 16', details: 'Equality of opportunity in public employment; reservations under 16(4) & 16(4A).' },
      { letter: 'U', word: 'Untouchability Abolished', article: 'Article 17', details: 'Abolition of untouchability; absolute right without any exceptions; penal offense.' },
      { letter: 'T', word: 'Titles Abolished', article: 'Article 18', details: 'Abolition of titles (except military and academic distinctions); Bharat Ratna is not a title.' }
    ],
    proTip: 'Only Article 17 is an absolute Fundamental Right that admits no statutory exception or reasonable restriction whatsoever!'
  },
  {
    id: 'fr-speech-saumrt',
    title: 'Six Freedoms (Article 19(1)): S-A-U-M-R-T',
    catchphrase: 'Speech Assembles Unions, Moves Residents to Trade (S-A-U-M-R-T)',
    articlesCovered: 'Article 19(1)(a) to 19(1)(g)',
    category: 'Fundamental Rights',
    explanation: 'The 6 democratic freedoms of every Indian citizen arranged in progressive logical life order.',
    breakdown: [
      { letter: 'S', word: 'Speech & Expression', article: 'Art. 19(1)(a)', details: 'Includes freedom of press, commercial speech, right to remain silent, internet rights.' },
      { letter: 'A', word: 'Assembly Peacefully', article: 'Art. 19(1)(b)', details: 'Right to assemble peaceably and without arms; does not include right to strike.' },
      { letter: 'U', word: 'Unions & Co-operatives', article: 'Art. 19(1)(c)', details: 'Right to form associations, trade unions, or co-operative societies (97th Amend).' },
      { letter: 'M', word: 'Movement Freely', article: 'Art. 19(1)(d)', details: 'Right to move freely throughout the territory of India (internal movement).' },
      { letter: 'R', word: 'Residence & Settlement', article: 'Art. 19(1)(e)', details: 'Right to reside and settle in any part of the territory of India.' },
      { letter: 'T', word: 'Trade & Profession', article: 'Art. 19(1)(g)', details: 'Right to practice any profession, or to carry on any occupation, trade or business.' }
    ],
    proTip: 'Clause (f) [Right to acquire, hold and dispose of property] was DELETED by the 44th Amendment Act, 1978 and shifted to Article 300A.'
  },
  {
    id: 'fr-arrest-eds',
    title: 'Criminal Safeguards (Article 20): E-D-S',
    catchphrase: 'E-D-S (Ex-post, Double, Self-incrimination)',
    articlesCovered: 'Article 20(1), 20(2), 20(3)',
    category: 'Fundamental Rights',
    explanation: 'The three constitutional shields protecting any person accused of a criminal offense.',
    breakdown: [
      { letter: 'E', word: 'Ex-Post Facto Law', article: 'Art. 20(1)', details: 'No conviction under retrospective penal law; penalty cannot be higher than that applicable at commission.' },
      { letter: 'D', word: 'Double Jeopardy', article: 'Art. 20(2)', details: 'No person shall be prosecuted and punished for the same offence more than once (Nemo debet bis vexari).' },
      { letter: 'S', word: 'Self-Incrimination', article: 'Art. 20(3)', details: 'No person accused of any offence shall be compelled to be a witness against himself.' }
    ],
    proTip: 'Under Article 359(1), Article 20 and Article 21 can NEVER be suspended, even during the gravest National Emergency!'
  },
  {
    id: 'writs-hmpcq',
    title: 'Prerogative Writs (Arts 32 & 226): H-M-P-C-Q',
    catchphrase: 'Have My Papers Checked Quick (H-M-P-C-Q)',
    articlesCovered: 'Articles 32 and 226',
    category: 'Judiciary & Writs',
    explanation: 'The 5 historic writs issued by the Supreme Court and High Courts for judicial enforcement of rights.',
    breakdown: [
      { letter: 'H', word: 'Habeas Corpus', article: 'Writs 1', details: '"To have the body" — remedy against unlawful detention by State or private individual.' },
      { letter: 'M', word: 'Mandamus', article: 'Writs 2', details: '"We command" — commands public authority to perform a mandatory statutory duty.' },
      { letter: 'P', word: 'Prohibition', article: 'Writs 3', details: '"To forbid" — issued to lower court/tribunal preventing it from exceeding jurisdiction (Preventive).' },
      { letter: 'C', word: 'Certiorari', article: 'Writs 4', details: '"To be certified" — quashes an order passed by lower tribunal without jurisdiction (Curative & Preventive).' },
      { letter: 'Q', word: 'Quo Warranto', article: 'Writs 5', details: '"By what authority" — challenges illegal usurpation of a substantive public office.' }
    ],
    proTip: 'Prohibition is preventive (issued before order passed); Certiorari is curative (issued after illegal order is already passed)!'
  },
  {
    id: 'language-amendment-math',
    title: 'Official Languages Math Formula: 21 + 71 = 92',
    catchphrase: '21 + 71 = 92 (Amendments) & 1 + 3 = 4 (Languages Added)',
    articlesCovered: '8th Schedule (14 to 22 Languages)',
    category: 'Preamble & Schedules',
    explanation: 'Mathematical equation that links all three language amendments and the exact languages added.',
    breakdown: [
      { letter: '21st', word: '21st Amendment (1967)', article: '1 Language', details: 'Added 1 language: Sindhi (Total became 15).' },
      { letter: '71st', word: '71st Amendment (1992)', article: '3 Languages (KMN)', details: 'Added 3 languages: Konkani, Manipuri, Nepali [Mnemonic: K-M-N] (Total became 18).' },
      { letter: '92nd', word: '92nd Amendment (2003)', article: '4 Languages (BDMS)', details: 'Added 4 languages: Bodo, Dogri, Maithili, Santhali [Mnemonic: B-D-M-S] (Total became 22).' }
    ],
    proTip: '21 + 71 = 92! And the languages added: 1 + 3 = 4! English is NOT one of the 22 languages in the 8th Schedule.'
  },
  {
    id: 'preamble-sssdr',
    title: 'Preamble Architecture: S-S-S-D-R & 42nd Amendment (S-S-I)',
    catchphrase: 'S-S-S-D-R (Sovereign Socialist Secular Democratic Republic)',
    articlesCovered: 'Preamble',
    category: 'Preamble & Schedules',
    explanation: 'The exact sequence of nature of the Indian State in the Preamble, and the 3 words inserted by the 42nd Amendment.',
    breakdown: [
      { letter: 'S', word: 'Sovereign', article: 'Original 1950', details: 'Supreme independent constituent authority internally and externally.' },
      { letter: 'S', word: 'Socialist', article: 'Added 1976', details: 'Democratic socialism aiming to end poverty, ignorance, and inequality of opportunity.' },
      { letter: 'S', word: 'Secular', article: 'Added 1976', details: 'Sarva Dharma Sambhava; no state religion; all religions treated with equal respect.' },
      { letter: 'D', word: 'Democratic', article: 'Original 1950', details: 'Government of the people, by the people, and for the people.' },
      { letter: 'R', word: 'Republic', article: 'Original 1950', details: 'Elected head of state (President), rejecting hereditary monarchy.' }
    ],
    proTip: 'The 42nd Amendment 1976 added exactly 3 words: Socialist, Secular, and Integrity (S-S-I)!'
  },
  {
    id: 'special-states-371',
    title: 'Articles 371 Special States Mnemonic: M-G-N-A-M-A-T-S-M-A-G-K',
    catchphrase: 'Many Great Nations Always Make Alliances To Sustain Majestic And Glorious Kingdoms',
    articlesCovered: 'Articles 371 to 371-J',
    category: 'Emergency & States',
    explanation: 'Remember all 11 Special State Provisions in Articles 371 to 371-J in strict alphabetical order of clauses.',
    breakdown: [
      { letter: '371', word: 'Maharashtra & Gujarat', article: 'Art. 371', details: 'Special development boards for Vidarbha, Marathwada, Saurashtra, Kutch.' },
      { letter: '371A', word: 'Nagaland', article: 'Art. 371A', details: 'Naga customary law, religious practices, ownership and transfer of land.' },
      { letter: '371B', word: 'Assam', article: 'Art. 371B', details: 'Committee of Assembly consisting of members from tribal areas.' },
      { letter: '371C', word: 'Manipur', article: 'Art. 371C', details: 'Hill Areas committee of the Legislative Assembly.' },
      { letter: '371D', word: 'Andhra Pradesh & Telangana', article: 'Art. 371D', details: 'Equitable opportunities in public employment and education.' },
      { letter: '371F', word: 'Sikkim', article: 'Art. 371F', details: 'Special protections on admission into the Union (36th Amendment 1975).' },
      { letter: '371G', word: 'Mizoram', article: 'Art. 371G', details: 'Mizo religious or social practices and customary law.' },
      { letter: '371H', word: 'Arunachal Pradesh', article: 'Art. 371H', details: 'Special responsibility of Governor for law and order.' },
      { letter: '371-I', word: 'Goa', article: 'Art. 371-I', details: 'Legislative Assembly to consist of not less than 30 members.' },
      { letter: '371-J', word: 'Karnataka', article: 'Art. 371-J', details: 'Hyderabad-Karnataka region special development board (98th Amend 2012).' }
    ],
    proTip: 'Article 371E governs the establishment of a Central University in Andhra Pradesh.'
  }
];

// =========================================================================
// 4. RAPID REFLEX FORMULA DRILL QUESTIONS
// =========================================================================
export const RAPID_REFLEX_QUESTIONS: RapidReflexDrillQuestion[] = [
  {
    id: 'rf-1',
    question: 'Applying the +89 Rule: What is the State counterpart article to Article 72 (President\'s Pardoning Power)?',
    shortcutRule: '72 + 89 = 161',
    options: ['Article 161', 'Article 162', 'Article 163', 'Article 164'],
    correctIndex: 0,
    explanation: 'Article 72 + 89 = Article 161 (Pardoning Power of the Governor).',
    formulaNote: 'Formula: Union Art 72 + 89 = State Art 161'
  },
  {
    id: 'rf-2',
    question: 'Applying the +89 Rule: What article defines "Money Bills" in a State Legislative Assembly if Article 110 defines it for Parliament?',
    shortcutRule: '110 + 89 = 199',
    options: ['Article 198', 'Article 199', 'Article 200', 'Article 201'],
    correctIndex: 1,
    explanation: 'Article 110 + 89 = Article 199 (Definition of "Money Bills" in State Legislature).',
    formulaNote: 'Formula: Union Art 110 + 89 = State Art 199'
  },
  {
    id: 'rf-3',
    question: 'Applying the +90 Rule: Article 123 empowers the President to promulgate Ordinances. What article empowers the Governor to promulgate Ordinances?',
    shortcutRule: '123 + 90 = 213',
    options: ['Article 211', 'Article 212', 'Article 213', 'Article 214'],
    correctIndex: 2,
    explanation: 'Article 123 + 90 = Article 213 (Governor Ordinance Making Power).',
    formulaNote: 'Formula: Union Art 123 + 90 = State Art 213'
  },
  {
    id: 'rf-4',
    question: 'Applying the +90 Rule: Article 112 mandates the Annual Financial Statement for the Union. Which article mandates it for a State?',
    shortcutRule: '112 + 90 = 202',
    options: ['Article 201', 'Article 202', 'Article 203', 'Article 204'],
    correctIndex: 1,
    explanation: 'Article 112 + 90 = Article 202 (Annual Financial Statement / State Budget).',
    formulaNote: 'Formula: Union Art 112 + 90 = State Art 202'
  },
  {
    id: 'rf-5',
    question: 'Applying the +89 Rule: Article 76 creates the office of Attorney-General for India. Which article creates the Advocate-General for a State?',
    shortcutRule: '76 + 89 = 165',
    options: ['Article 164', 'Article 165', 'Article 166', 'Article 167'],
    correctIndex: 1,
    explanation: 'Article 76 + 89 = Article 165 (Advocate-General for the State).',
    formulaNote: 'Formula: Union Art 76 + 89 = State Art 165'
  },
  {
    id: 'rf-6',
    question: 'Applying the +4 Rule of Emergencies: National Emergency is under Article 352. What are the articles for President\'s Rule and Financial Emergency?',
    shortcutRule: '352 (+4) -> 356 (+4) -> 360',
    options: [
      'Articles 354 and 358',
      'Articles 356 and 360',
      'Articles 355 and 359',
      'Articles 358 and 362'
    ],
    correctIndex: 1,
    explanation: 'Articles 352 + 4 = 356 (President\'s Rule) + 4 = 360 (Financial Emergency).',
    formulaNote: 'Formula: 352 (+4) = 356 (+4) = 360'
  },
  {
    id: 'rf-7',
    question: 'Under the TEARS OF OLD PM mnemonic, which schedule corresponds to the letter "O" (Other Tribal Areas in AMTM)?',
    shortcutRule: 'T-E-A-R-S-O (6th letter)',
    options: ['Fifth Schedule', 'Sixth Schedule', 'Seventh Schedule', 'Eighth Schedule'],
    correctIndex: 1,
    explanation: 'In TEARS OF OLD PM: 1st=T, 2nd=E, 3rd=A, 4th=R, 5th=S, 6th=O (Other Tribal Areas: Assam, Meghalaya, Tripura, Mizoram).',
    formulaNote: 'Mnemonic: T-E-A-R-S-O -> 6th Schedule'
  },
  {
    id: 'rf-8',
    question: 'Applying the language amendment math formula (21 + 71 = 92): Which 4 languages were added by the 92nd Amendment (BDMS)?',
    shortcutRule: 'B-D-M-S',
    options: [
      'Bengali, Dogri, Marathi, Sindhi',
      'Bodo, Dogri, Maithili, Santhali',
      'Bhojpuri, Dogri, Marwari, Santhali',
      'Bodo, Dogri, Malayalam, Sanskrit'
    ],
    correctIndex: 1,
    explanation: '92nd Amendment added 4 languages: Bodo, Dogri, Maithili, Santhali [Mnemonic: BDMS].',
    formulaNote: 'Formula: 92nd Amendment = B-D-M-S'
  },
  {
    id: 'rf-9',
    question: 'Using the E-D-O-U-T equality mnemonic: What does the letter "U" in Article 17 represent?',
    shortcutRule: 'E(14) - D(15) - O(16) - U(17) - T(18)',
    options: ['Uniform Civil Code', 'Union of States', 'Untouchability Abolition', 'Unsound mind disqualification'],
    correctIndex: 2,
    explanation: 'In E-D-O-U-T: Article 17 is "U" for Abolition of Untouchability.',
    formulaNote: 'Mnemonic: E-D-O-U-T -> U is Article 17'
  },
  {
    id: 'rf-10',
    question: 'Applying the +89 Rule: Article 105 protects parliamentary privileges and speech. Which article protects State Legislature privileges?',
    shortcutRule: '105 + 89 = 194',
    options: ['Article 192', 'Article 193', 'Article 194', 'Article 195'],
    correctIndex: 2,
    explanation: 'Article 105 + 89 = Article 194 (Powers, Privileges and Immunities of State Legislatures & Members).',
    formulaNote: 'Formula: Union Art 105 + 89 = State Art 194'
  }
];

// =========================================================================
// 5. MASTER CONSTITUTIONAL SHORTCUT HACKS (THE 7 CHEAT CODES)
// =========================================================================
export interface MasterCheatCode {
  id: string;
  title: string;
  formulaTag: string;
  articlesAnchored: string;
  summary: string;
  howItWorks: string;
  memoryHook: string;
  examinerTrap: string;
}

export const MASTER_CHEAT_CODES: MasterCheatCode[] = [
  {
    id: 'rule-plus-89',
    title: 'The +89 Union-to-State Power Shift',
    formulaTag: 'Art (72–111) + 89 = State Art (161–200)',
    articlesAnchored: 'Arts. 72–111 & 161–200',
    summary: 'Add 89 to any Union Executive, Legislative or Privileges article between 72 and 111 to instantly derive the corresponding State article.',
    howItWorks: 'President Pardon (72) + 89 = Governor Pardon (161). Union COM (74) + 89 = State COM (163). Attorney General (76) + 89 = Advocate General (165). Parliament Money Bill (110) + 89 = Assembly Money Bill (199). President Assent (111) + 89 = Governor Assent (200).',
    memoryHook: 'Add 89 to switch from New Delhi to State Capitals for Executive & Legislative affairs.',
    examinerTrap: 'Governor under Art 161 CANNOT pardon death sentences or court-martial sentences, unlike President under Art 72.'
  },
  {
    id: 'rule-plus-90',
    title: 'The +90 Financial & Judicial Step-Up',
    formulaTag: 'Art (112–124) + 90 = State Art (202–214)',
    articlesAnchored: 'Arts. 112–124 & 202–214',
    summary: 'Add 90 to Union Financial, Ordinance, and Supreme Court articles between 112 and 124 to reveal the matching State Financial, Ordinance, and High Court provisions.',
    howItWorks: 'Union Budget/AFS (112) + 90 = State Budget/AFS (202). Appropriation Bill (114) + 90 = State Appropriation (204). President Ordinance (123) + 90 = Governor Ordinance (213). Supreme Court (124) + 90 = High Courts for States (214).',
    memoryHook: 'Financial & Judicial matters require a +90 jump (1 point higher than executive).',
    examinerTrap: 'Supreme Court retirement age is 65 (Art 124(2)); High Court judge retirement age is 62 (Art 217(1)).'
  },
  {
    id: 'rule-reverse-subtraction',
    title: 'The Reverse -89 / -90 State-to-Union Decoder',
    formulaTag: 'State Art (161–214) − 89/90 = Union Art',
    articlesAnchored: 'Arts. 161–214 to 72–124',
    summary: 'When a State article is given in the question paper, subtract 89 or 90 to identify its Union parent provision.',
    howItWorks: 'Governor Ordinance Art. 213 − 90 = Art. 123 (President Ordinance). State Money Bill Art. 199 − 89 = Art. 110 (Union Money Bill). Advocate-General Art. 165 − 89 = Art. 76 (Attorney General).',
    memoryHook: 'If article is > 160: subtract 89 (or 90 for budget/ordinance/courts) to find the Union article.',
    examinerTrap: 'Remember the cutoff: Articles 161 to 200 subtract 89; Articles 202 to 214 subtract 90!'
  },
  {
    id: 'rule-plus-4-emergency',
    title: 'The +4 Emergency Triad Step-Up',
    formulaTag: '352 (+4) &rarr; 356 (+4) &rarr; 360',
    articlesAnchored: 'Arts. 352, 356, 360',
    summary: 'The three constitutional emergencies are spaced exactly 4 articles apart in Part XVIII.',
    howItWorks: 'Article 352 (National Emergency: War, Aggression, Armed Rebellion) + 4 = Article 356 (President\'s Rule: Constitutional machinery breakdown) + 4 = Article 360 (Financial Emergency).',
    memoryHook: '352 is National, step 4 to 356 for State, step 4 to 360 for Financial.',
    examinerTrap: 'Only Art 352 requires Special Majority; Arts 356 and 360 require only Simple Majority of Parliament!'
  },
  {
    id: 'rule-ministry-cap-91st',
    title: 'The 15% Council Size Cap & 12 Min Rule (91st Amendment)',
    formulaTag: 'Max 15% (Lok Sabha/Assembly) &bull; Min 12 (States) &bull; 10% (Delhi)',
    articlesAnchored: 'Arts. 75(1A), 164(1A), 239AA(4)',
    summary: 'Enacted by the 91st Constitutional Amendment Act, 2003 to prevent oversized jumbo cabinets.',
    howItWorks: 'Union Council of Ministers cannot exceed 15% of Lok Sabha (approx 81-82 ministers). State Council cannot exceed 15% of Legislative Assembly, but MUST have at least 12 ministers! Delhi (Art 239AA) is capped at 10% (max 7 ministers).',
    memoryHook: '91st Amendment: 15% ceiling everywhere; 12 minimum for states; 10% special cap for Delhi!',
    examinerTrap: 'The 15% limit applies to the LOWER HOUSE (Lok Sabha / Vidhan Sabha), NOT both houses combined!'
  },
  {
    id: 'rule-retirement-staircase',
    title: 'The 62 vs 65 Constitutional Age Staircase',
    formulaTag: 'High Court & State PSC = 62 &bull; Apex Court, CAG, UPSC, CEC = 65',
    articlesAnchored: 'Arts. 124, 148, 217, 316, 324',
    summary: 'The universal constitutional retirement age dividing line between State and Union apex constitutional functionaries.',
    howItWorks: 'Age 62: High Court Judges (Art 217(1)) and State Public Service Commission Members (Art 316(2)). Age 65: Supreme Court Judges (Art 124(2)), Comptroller & Auditor General (Art 148(3)), UPSC Members (Art 316(2)), and Chief Election Commissioner (6 years or 65 years).',
    memoryHook: 'State level retires at 62; Union apex level retires at 65.',
    examinerTrap: 'Tribunal Chairpersons retire at 70 and Members at 67 under modern Tribunal Reforms Act, 2021.'
  },
  {
    id: 'rule-pejsla-federal',
    title: 'P-E-J-S-L-A: Federal Ratification Formula',
    formulaTag: 'Special Majority + 50% State Assemblies Ratification (Art. 368(2) Proviso)',
    articlesAnchored: 'Article 368(2) Proviso',
    summary: 'Memorize the exact 6 entrenched federal constitutional matters requiring ratification by not less than one-half of the State Legislatures.',
    howItWorks: 'P = President election (Arts 54, 55). E = Executive power extent of Union & States (Arts 73, 162). J = Judiciary (Supreme Court & High Courts: Arts 124–147, 214–231, 241). S = Seventh Schedule Lists (List I, II, III). L = Legislative representation in Parliament (4th Schedule). A = Article 368 amending power itself!',
    memoryHook: 'P-E-J-S-L-A ("Pej-Sla"): The 6 constitutional pillars that Parliament cannot amend alone.',
    examinerTrap: 'Fundamental Rights and DPSP do NOT require State ratification; they require only Parliamentary Special Majority!'
  }
];

// =========================================================================
// 6. CONTEXTUAL ARTICLE SPEED HACK LOOKUP (FOR BARE ACT & ACROSS APP)
// =========================================================================
export interface ArticleSpeedHackIntel {
  hasHack: boolean;
  type: string;
  badge: string;
  counterpartArticle?: string;
  counterpartTitle?: string;
  formula: string;
  quickNote: string;
  examinerTrap?: string;
}

export function lookupSpeedHackForArticle(articleNumber: string | number): ArticleSpeedHackIntel | null {
  const num = parseInt(String(articleNumber).replace(/\D/g, ''), 10);
  if (isNaN(num)) return null;

  // 1. Check +89 Rule (Union to State: 72 to 111)
  const mathPairAsUnion = MATH_FORMULA_PAIRS.find((p) => p.unionArticle === num);
  if (mathPairAsUnion) {
    return {
      hasHack: true,
      type: 'math-union',
      badge: `${mathPairAsUnion.rule} Rule`,
      counterpartArticle: String(mathPairAsUnion.stateArticle),
      counterpartTitle: mathPairAsUnion.stateTitle,
      formula: `Art. ${mathPairAsUnion.unionArticle} ${mathPairAsUnion.rule} = Art. ${mathPairAsUnion.stateArticle}`,
      quickNote: `State equivalent is Article ${mathPairAsUnion.stateArticle} (${mathPairAsUnion.stateTitle}).`,
      examinerTrap: mathPairAsUnion.examinerTrap
    };
  }

  // 2. Check -89 or -90 Rule (State to Union: 161 to 214)
  const mathPairAsState = MATH_FORMULA_PAIRS.find((p) => p.stateArticle === num);
  if (mathPairAsState) {
    const reverseRule = mathPairAsState.rule === '+89' ? '-89' : '-90';
    return {
      hasHack: true,
      type: 'math-state',
      badge: `${reverseRule} Rule`,
      counterpartArticle: String(mathPairAsState.unionArticle),
      counterpartTitle: mathPairAsState.unionTitle,
      formula: `Art. ${mathPairAsState.stateArticle} ${reverseRule} = Art. ${mathPairAsState.unionArticle}`,
      quickNote: `Union equivalent is Article ${mathPairAsState.unionArticle} (${mathPairAsState.unionTitle}).`,
      examinerTrap: mathPairAsState.examinerTrap
    };
  }

  // 3. Check +4 Emergency Rule (352, 356, 360)
  if (num === 352) {
    return {
      hasHack: true,
      type: 'emergency',
      badge: '+4 Emergency Rule',
      counterpartArticle: '356',
      counterpartTitle: 'President\'s Rule (State Emergency)',
      formula: '352 (+4) -> 356 (+4) -> 360',
      quickNote: 'National Emergency (352) + 4 = President\'s Rule (356) + 4 = Financial Emergency (360).',
      examinerTrap: 'Only Art 352 requires Special Majority; Arts 356 & 360 require Simple Majority.'
    };
  }
  if (num === 356) {
    return {
      hasHack: true,
      type: 'emergency',
      badge: '+4 Emergency Rule',
      counterpartArticle: '360',
      counterpartTitle: 'Financial Emergency',
      formula: '352 (+4) -> 356 (+4) -> 360',
      quickNote: 'President\'s Rule is intermediate step (+4 from Art 352, -4 from Art 360).',
      examinerTrap: 'Floor test is mandatory before assembly dissolution (S.R. Bommai 1994).'
    };
  }
  if (num === 360) {
    return {
      hasHack: true,
      type: 'emergency',
      badge: '+4 Emergency Rule',
      counterpartArticle: '356',
      counterpartTitle: 'President\'s Rule',
      formula: '352 (+4) -> 356 (+4) -> 360',
      quickNote: 'Financial Emergency is final step (+4 from Art 356). Never invoked in India to date.',
      examinerTrap: 'Judges\' salaries can be reduced during financial emergency, notwithstanding judicial independence.'
    };
  }

  // 4. Equality E-D-O-U-T (Arts 14-18)
  if (num >= 14 && num <= 18) {
    const letters = ['E: Equality (14)', 'D: Discrimination (15)', 'O: Opportunity (16)', 'U: Untouchability (17)', 'T: Titles (18)'];
    return {
      hasHack: true,
      type: 'mnemonic',
      badge: 'E-D-O-U-T Rule',
      formula: 'E(14) - D(15) - O(16) - U(17) - T(18)',
      quickNote: `Part of the 5-pillar Right to Equality mnemonic: ${letters[num - 14]}`,
      examinerTrap: 'Only Article 17 is an absolute right with zero reasonable restrictions or exceptions.'
    };
  }

  // 5. Six Freedoms S-A-U-M-R-T (Art 19)
  if (num === 19) {
    return {
      hasHack: true,
      type: 'mnemonic',
      badge: 'S-A-U-M-R-T Rule',
      formula: 'Speech - Assembly - Union - Movement - Residence - Trade',
      quickNote: '"Speech Assembles Unions, Moves Residents to Trade". Six democratic freedoms in Article 19(1).',
      examinerTrap: 'Clause 19(1)(f) property was deleted by 44th Amendment 1978 and moved to Art 300A.'
    };
  }

  // 6. Criminal Safeguards E-D-S (Art 20)
  if (num === 20) {
    return {
      hasHack: true,
      type: 'mnemonic',
      badge: 'E-D-S Shield',
      formula: 'E(Ex-post facto) - D(Double jeopardy) - S(Self-incrimination)',
      quickNote: 'Three criminal defense shields under Article 20(1), 20(2), 20(3).',
      examinerTrap: 'Articles 20 and 21 can NEVER be suspended during a National Emergency (44th Amendment).'
    };
  }

  // 7. Prerogative Writs H-M-P-C-Q (Arts 32 & 226)
  if (num === 32 || num === 226) {
    return {
      hasHack: true,
      type: 'mnemonic',
      badge: 'H-M-P-C-Q Writs',
      counterpartArticle: num === 32 ? '226' : '32',
      counterpartTitle: num === 32 ? 'High Court Writs (Art. 226)' : 'Supreme Court Writs (Art. 32)',
      formula: 'Habeas Corpus - Mandamus - Prohibition - Certiorari - Quo Warranto',
      quickNote: '"Have My Papers Checked Quick". Art 32 is a Fundamental Right; Art 226 is wider (covers legal rights).',
      examinerTrap: 'Prohibition is preventive (before order); Certiorari is curative (after order).'
    };
  }

  // 8. Article 368 Federal Entrenchment P-E-J-S-L-A
  if (num === 368) {
    return {
      hasHack: true,
      type: 'mnemonic',
      badge: 'P-E-J-S-L-A Rule',
      formula: 'President - Executive - Judiciary - Schedules(7th) - Legislature(4th) - Article 368',
      quickNote: 'The 6 federal provisions requiring 50% State Assembly Ratification under Article 368(2) Proviso.',
      examinerTrap: 'Fundamental Rights & DPSP require only Parliamentary Special Majority, NOT state ratification!'
    };
  }

  return null;
}

// =========================================================================
// 8. CONSTITUTIONAL MAJORITIES DATA & SIMULATOR
// =========================================================================

export interface ConstitutionalMajorityTier {
  id: string;
  name: string;
  category: 'Ordinary' | 'Special Parliamentary' | 'Impeachment';
  shortFormula: string;
  fractionFormula: string;
  scopeDescription: string;
  keyUseCases: {
    provision: string;
    article: string;
    procedureNotes: string;
  }[];
  examinerTraps: string[];
  benchmarkCases: string[];
  badgeColor: string;
}

export const CONSTITUTIONAL_MAJORITY_DATA: ConstitutionalMajorityTier[] = [
  {
    id: 'simple-majority',
    name: 'Simple Majority (Ordinary Majority)',
    category: 'Ordinary',
    shortFormula: '> 50% of members present and voting',
    fractionFormula: 'P&V / 2 + 1',
    badgeColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
    scopeDescription: 'The default and most frequently used voting threshold in Parliament and State Legislatures for day-to-day legislative business.',
    keyUseCases: [
      {
        provision: 'Passing Ordinary Bills & Money Bills',
        article: 'Art. 107 & Art. 109',
        procedureNotes: 'Requires more than half of the members present and voting in each House.'
      },
      {
        provision: 'Reorganization of States / Alteration of Boundaries',
        article: 'Art. 2, 3 & 4',
        procedureNotes: 'Article 4(2) explicitly declares that laws made under Art 2 & 3 are NOT deemed amendments under Art 368.'
      },
      {
        provision: 'Approval of President’s Rule & Financial Emergency',
        article: 'Art. 356 & Art. 360',
        procedureNotes: 'National Emergency (Art 352) requires Special Majority, but Art 356 & 360 require only Simple Majority!'
      },
      {
        provision: 'Creation or Abolition of State Legislative Councils (by Parliament)',
        article: 'Art. 169(1)',
        procedureNotes: 'Parliament passes by Simple Majority, even though the State Assembly must first pass it by Special Majority.'
      },
      {
        provision: 'Ratification of Constitutional Amendment by State Assemblies',
        article: 'Art. 368(2) Proviso',
        procedureNotes: 'State legislatures ratify federal amendments by simple majority of members present and voting.'
      },
      {
        provision: 'No-Confidence Motion & Vote of Thanks on President’s Address',
        article: 'Rules of Lok Sabha / Art. 87',
        procedureNotes: 'Defeat of the government on simple majority motion in Lok Sabha triggers immediate resignation of the Cabinet.'
      }
    ],
    examinerTraps: [
      'Creation of a new State under Article 3 requires ONLY a Simple Majority, NOT an Article 368 Special Majority.',
      'Approval of President’s Rule (Art 356) requires only a Simple Majority; only National Emergency (Art 352) requires a Special Majority under the 44th Amendment.',
      'State ratification under Art 368 proviso requires only Simple Majority in State Assemblies, not 2/3rd majority.'
    ],
    benchmarkCases: [
      'Maganbhai Ishwarbhai Patel (1969): Ceding Indian territory to a foreign state requires Art 368 amendment (Berubari 1960), but settlement of boundary disputes requires only executive action or simple law.',
      'Babulal Parate (1960): State Legislature advice under Art 3 proviso is not binding on Parliament.'
    ]
  },
  {
    id: 'effective-majority',
    name: 'Effective Majority (Removal of Presiding Officers)',
    category: 'Ordinary',
    shortFormula: '> 50% of the effective strength of the House',
    fractionFormula: '(Total Seats - Vacancies) / 2 + 1',
    badgeColor: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
    scopeDescription: 'Calculated by subtracting vacant seats (deaths, resignations, disqualifications) from total sanctioned strength before taking the 50% threshold.',
    keyUseCases: [
      {
        provision: 'Removal of Vice-President of India in Rajya Sabha',
        article: 'Art. 67(b)',
        procedureNotes: 'Must be passed by Rajya Sabha by Effective Majority ("majority of all the then members") and agreed to by Lok Sabha with Simple Majority.'
      },
      {
        provision: 'Removal of Speaker & Deputy Speaker of Lok Sabha',
        article: 'Art. 94(c)',
        procedureNotes: 'Resolution passed by a majority of all the then members of the House of the People.'
      },
      {
        provision: 'Removal of Speaker & Deputy Speaker of State Legislative Assembly',
        article: 'Art. 179(c)',
        procedureNotes: 'Passed by a majority of all the then members of the State Assembly.'
      },
      {
        provision: 'Removal of Chairman & Deputy Chairman of State Legislative Council',
        article: 'Art. 183(c)',
        procedureNotes: 'Passed by a majority of all the then members of the State Council.'
      }
    ],
    examinerTraps: [
      'Vice-President removal starts ONLY in Rajya Sabha and needs Effective Majority in RS, but Lok Sabha merely agrees by Simple Majority!',
      'Do not confuse "all the then members" (Effective Majority) with "total membership" (Absolute / Art 61 Majority).'
    ],
    benchmarkCases: [
      'Nabam Rebia (2016): Speaker facing notice of removal under Art 179(c) cannot adjudicate disqualification petitions under 10th Schedule until the removal resolution is decided.'
    ]
  },
  {
    id: 'absolute-majority',
    name: 'Absolute Majority',
    category: 'Ordinary',
    shortFormula: '> 50% of the total sanctioned membership of the House',
    fractionFormula: 'Total Sanctioned Seats / 2 + 1',
    badgeColor: 'border-sky-500/30 text-sky-400 bg-sky-500/10',
    scopeDescription: 'Requires more than 50% of the entire sanctioned strength of the House, completely irrespective of vacancies or absent members.',
    keyUseCases: [
      {
        provision: 'Government Formation & Prime Ministerial Claim',
        article: 'Art. 75 & Parliamentary Convention',
        procedureNotes: 'A ruling coalition in Lok Sabha must command 272+ seats out of 543 to sustain confidence.'
      },
      {
        provision: 'Base Condition for Constitutional Amendments',
        article: 'Art. 368(2)',
        procedureNotes: 'Acts as the foundation threshold that must be satisfied concurrently with 2/3rd present & voting.'
      },
      {
        provision: 'Creation/Abolition of Legislative Council by State Assembly',
        article: 'Art. 169(1)',
        procedureNotes: 'Requires a majority of the total membership of the Assembly AND 2/3rd present and voting.'
      }
    ],
    examinerTraps: [
      'In India, a bill is NEVER passed solely on Absolute Majority alone; it is always paired with 2/3rd present & voting (forming Type 2 Special Majority).'
    ],
    benchmarkCases: [
      'S.R. Bommai (1994): The majority commanded by a Ministry must be tested on the floor of the House, not by the Governor’s subjective assessment.'
    ]
  },
  {
    id: 'special-type-1',
    name: 'Special Majority: Type 1 (Article 249 & 312)',
    category: 'Special Parliamentary',
    shortFormula: '≥ 2/3rd of members present and voting',
    fractionFormula: '≥ (2/3) × P&V',
    badgeColor: 'border-purple-500/30 text-purple-400 bg-purple-500/10',
    scopeDescription: 'Exclusive to the Rajya Sabha as the Council of States, allowing federal intervention without permanent constitutional amendment.',
    keyUseCases: [
      {
        provision: 'Parliamentary Legislation on State List in National Interest',
        article: 'Art. 249(1)',
        procedureNotes: 'Rajya Sabha passes a resolution supported by not less than 2/3rd members present & voting. Valid for 1 year at a time.'
      },
      {
        provision: 'Creation of New All-India Services (IAS, IPS, IFS)',
        article: 'Art. 312(1)',
        procedureNotes: 'Empowers Parliament to create an All-India Service common to the Union and States.'
      }
    ],
    examinerTraps: [
      'Type 1 does NOT require 50% total membership! It requires ONLY 2/3rd of members present and voting.',
      'This power belongs EXCLUSIVELY to the Rajya Sabha, reflecting its role as protector of states in federalism.'
    ],
    benchmarkCases: [
      'Kuldip Nayar v. Union of India (2006): Rajya Sabha represents the federal principle, and its special legislative gateway under Art 249/312 preserves federal balance.'
    ]
  },
  {
    id: 'special-type-2',
    name: 'Special Majority: Type 2 (Art 368 / Judge Removal)',
    category: 'Special Parliamentary',
    shortFormula: '> 50% of total membership AND ≥ 2/3rd members present & voting',
    fractionFormula: '(Total/2 + 1) AND ≥ (2/3) × P&V',
    badgeColor: 'border-[var(--accent)]/50 text-[var(--accent)] bg-[var(--accent)]/10',
    scopeDescription: 'The standard Constitutional Amendment formula. Both conditions must be satisfied simultaneously in each House separately.',
    keyUseCases: [
      {
        provision: 'Constitutional Amendments under Article 368',
        article: 'Art. 368(2)',
        procedureNotes: 'Passed in each House separately; no joint sitting (Art 108) is permissible for constitutional amendments!'
      },
      {
        provision: 'Removal of Supreme Court & High Court Judges',
        article: 'Art. 124(4) & Art. 217(1)(b)',
        procedureNotes: 'Address presented to the President after being passed by each House by Type 2 Special Majority on grounds of proved misbehavior or incapacity.'
      },
      {
        provision: 'Removal of Chief Election Commissioner & CAG',
        article: 'Art. 324(5) & Art. 148(1)',
        procedureNotes: 'Removed in like manner and on like grounds as a Judge of the Supreme Court.'
      },
      {
        provision: 'Approval of National Emergency (Post-44th Amendment)',
        article: 'Art. 352(6)',
        procedureNotes: 'Originally simple majority in 1950; 44th Amendment upgraded to Type 2 Special Majority to prevent abuse.'
      }
    ],
    examinerTraps: [
      'There is NO Joint Sitting (Art 108) for Constitutional Amendment Bills under Article 368.',
      'National Emergency (Art 352) requires Type 2 Special Majority, whereas President’s Rule (Art 356) requires only Simple Majority!',
      'Judge removal requires Type 2 Special Majority, NOT the Article 61 Presidential Impeachment majority.'
    ],
    benchmarkCases: [
      'Kesavananda Bharati (1973): Even with Type 2 Special Majority, Parliament cannot damage or destroy the Basic Structure.',
      'Minerva Mills (1980): The limited amending power under Art 368 is itself a basic feature of the Constitution.'
    ]
  },
  {
    id: 'special-type-3',
    name: 'Special Majority: Type 3 (Article 61 Impeachment)',
    category: 'Impeachment',
    shortFormula: '≥ 2/3rd of the TOTAL MEMBERSHIP of the House',
    fractionFormula: '≥ (2/3) × Total Sanctioned Seats',
    badgeColor: 'border-rose-500/50 text-rose-400 bg-rose-500/10',
    scopeDescription: 'The strictest and highest voting barrier in the Indian Constitution. Abstentions or absent members effectively count as votes against the resolution.',
    keyUseCases: [
      {
        provision: 'Impeachment of the President of India',
        article: 'Art. 61(2)(b) & Art. 61(4)',
        procedureNotes: 'Charge initiated by either House with 1/4th members signing 14-day notice, and passed by not less than 2/3rd of the TOTAL membership of that House. Investigating House must also pass by 2/3rd of TOTAL membership.'
      }
    ],
    examinerTraps: [
      'Article 61 applies EXCLUSIVELY to the President of India. SC/HC Judges, CEC, and CAG are NOT impeached under Art 61; they are removed under Art 124(4) (Type 2)!',
      'The only constitutional ground for President impeachment is "violation of the Constitution" (which is undefined in the text).',
      'Nominated members of Parliament CAN vote in Presidential Impeachment under Art 61, even though they CANNOT vote in the President\'s election under Art 54!'
    ],
    benchmarkCases: [
      'Dr. N.B. Khare (1957) & Peter Samuel Wallace (1970): Judicial review does not interfere with legislative impeachment proceedings until the final operative order is made.'
    ]
  }
];

// Calculation helper for live legislative chamber simulator
export function calculateConstitutionalMajorities(
  totalSeats: number,
  vacancies: number,
  present: number,
  voting: number
) {
  const quorum = Math.ceil(totalSeats / 10);
  const hasQuorum = present >= quorum;
  const effectiveStrength = Math.max(0, totalSeats - vacancies);

  const simpleMajority = Math.floor(voting / 2) + 1;
  const absoluteMajority = Math.floor(totalSeats / 2) + 1;
  const effectiveMajority = Math.floor(effectiveStrength / 2) + 1;
  const specialType1 = Math.ceil((2 / 3) * voting);
  const specialType2 = Math.max(absoluteMajority, Math.ceil((2 / 3) * voting));
  const specialType3 = Math.ceil((2 / 3) * totalSeats);

  return {
    quorum,
    hasQuorum,
    effectiveStrength,
    simpleMajority,
    absoluteMajority,
    effectiveMajority,
    specialType1,
    specialType2,
    specialType3
  };
}

// Bidirectional Article Solver Helper
export interface BidirectionalSolverResult {
  queryArticle: number;
  direction: 'union-to-state' | 'state-to-union' | 'emergency-triad' | 'writs-pair' | 'fundamental-right' | 'non-paired';
  rule: string;
  counterpartArticle?: number;
  counterpartTitle?: string;
  mathCalculation: string;
  conceptualBridge: string;
  statutoryDifference?: string;
  examinerTrap?: string;
  landmarkCitation?: string;
  bareActArticleNum: number;
}

export function solveBidirectionalArticleRule(queryNum: number): BidirectionalSolverResult | null {
  if (isNaN(queryNum) || queryNum < 1 || queryNum > 395) return null;

  // 1. Check if it's a Union Article in MATH_FORMULA_PAIRS
  const unionPair = MATH_FORMULA_PAIRS.find((p) => p.unionArticle === queryNum);
  if (unionPair) {
    return {
      queryArticle: queryNum,
      direction: 'union-to-state',
      rule: unionPair.rule,
      counterpartArticle: unionPair.stateArticle,
      counterpartTitle: unionPair.stateTitle,
      mathCalculation: `Union Art. ${queryNum} ${unionPair.rule} = State Art. ${unionPair.stateArticle}`,
      conceptualBridge: unionPair.conceptualBridge,
      statutoryDifference: unionPair.statutoryDifference,
      examinerTrap: unionPair.examinerTrap,
      landmarkCitation: unionPair.landmarkCitation,
      bareActArticleNum: unionPair.stateArticle
    };
  }

  // 2. Check if it's a State Article in MATH_FORMULA_PAIRS (Reverse Rule)
  const statePair = MATH_FORMULA_PAIRS.find((p) => p.stateArticle === queryNum);
  if (statePair) {
    const reverseRule = statePair.rule === '+89' ? '-89' : '-90';
    return {
      queryArticle: queryNum,
      direction: 'state-to-union',
      rule: reverseRule,
      counterpartArticle: statePair.unionArticle,
      counterpartTitle: statePair.unionTitle,
      mathCalculation: `State Art. ${queryNum} ${reverseRule === '-89' ? '- 89' : '- 90'} = Union Art. ${statePair.unionArticle}`,
      conceptualBridge: `Reverse Constitutional Conversion: State provision directly derives its architectural basis from Union counterpart Art. ${statePair.unionArticle}.`,
      statutoryDifference: statePair.statutoryDifference,
      examinerTrap: statePair.examinerTrap,
      landmarkCitation: statePair.landmarkCitation,
      bareActArticleNum: statePair.unionArticle
    };
  }

  // 3. Emergency Triad +4 (352, 356, 360)
  if (queryNum === 352 || queryNum === 356 || queryNum === 360) {
    const nextArt = queryNum === 352 ? 356 : queryNum === 356 ? 360 : 352;
    return {
      queryArticle: queryNum,
      direction: 'emergency-triad',
      rule: '+4 Triad',
      counterpartArticle: nextArt,
      counterpartTitle: queryNum === 352 ? 'President\'s Rule (State Breakdown)' : queryNum === 356 ? 'Financial Emergency' : 'National Emergency (War/Aggression)',
      mathCalculation: '352 (+4) ➔ 356 (+4) ➔ 360',
      conceptualBridge: 'The Emergency +4 Mathematical Triad connects all three sovereign emergency powers under Part XVIII.',
      statutoryDifference: 'Art 352 requires Special Majority Type 2; Art 356 & 360 require only Simple Majority. Art 352 suspends Art 19 immediately; Art 356 dissolves/suspends State Assembly.',
      examinerTrap: 'Financial Emergency (Art 360) has NEVER been declared in India since 1950.',
      landmarkCitation: 'S.R. Bommai (1994) & Minerva Mills (1980)',
      bareActArticleNum: nextArt
    };
  }

  // 4. Writs (Art 32 & 226)
  if (queryNum === 32 || queryNum === 226) {
    const counterpart = queryNum === 32 ? 226 : 32;
    return {
      queryArticle: queryNum,
      direction: 'writs-pair',
      rule: 'H-M-P-C-Q Dual Track',
      counterpartArticle: counterpart,
      counterpartTitle: queryNum === 32 ? 'High Court Prerogative Writs (Art. 226)' : 'Supreme Court Constitutional Remedies (Art. 32)',
      mathCalculation: 'Art. 32 (Supreme Court) ⟷ Art. 226 (High Court)',
      conceptualBridge: 'The twin constitutional guardians of liberty. Art 32 is itself a Fundamental Right; Art 226 is a constitutional power covering Fundamental Rights AND any other legal right.',
      statutoryDifference: 'High Court writ jurisdiction (Art 226) is WIDER in subject matter (legal rights) but NARROWER in territorial reach than SC (Art 32).',
      examinerTrap: 'Supreme Court cannot refuse an Art 32 petition (since it is guaranteed by Part III), but High Court can decline under Art 226 on grounds of alternative efficacious remedy.',
      landmarkCitation: 'L. Chandra Kumar (1997) & Bandhua Mukti Morcha (1984)',
      bareActArticleNum: counterpart
    };
  }

  // 5. Fundamental Rights (Part III: Arts 12–35)
  if (queryNum >= 12 && queryNum <= 35) {
    return {
      queryArticle: queryNum,
      direction: 'fundamental-right',
      rule: 'Part III Sovereign Guarantee',
      mathCalculation: `Article ${queryNum} (Part III Fundamental Rights)`,
      conceptualBridge: 'Fundamental Rights operate universally across the whole of India against both Union and State governments (Art. 12). No dual-state mathematical pair exists because these rights bind both levels of government equally.',
      examinerTrap: 'Articles 15, 16, 19, 29, and 30 are available ONLY to Indian Citizens; Articles 14, 20, 21, 21A, 22, 23, 24, 25, 26, 27, and 28 are available to ALL persons (including foreigners).',
      landmarkCitation: 'Maneka Gandhi (1978) & Kesavananda Bharati (1973)',
      bareActArticleNum: queryNum
    };
  }

  return {
    queryArticle: queryNum,
    direction: 'non-paired',
    rule: 'General Constitutional Provision',
    mathCalculation: `Article ${queryNum}`,
    conceptualBridge: `Article ${queryNum} is part of the sovereign constitutional framework. It does not follow the executive/legislative dual-state +89/+90 mathematical mirror.`,
    bareActArticleNum: queryNum
  };
}

