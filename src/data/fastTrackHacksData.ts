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
