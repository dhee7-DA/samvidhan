export interface ConstitutionalDeadline {
  id: string;
  durationLabel: string;
  durationCategory: 'Hours & Days' | 'Weeks & Months' | 'Years & Tenure';
  actionTitle: string;
  constitutionalArticle: string;
  statutoryDetail: string;
  authorityInvolved: string;
  examinerTrap: string;
  difficultyRating: 'Standard' | 'High-Yield' | 'Ultra-Trap';
}

export interface DeadlineQuizItem {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  trapAlert: string;
}

export const CONSTITUTIONAL_DEADLINES_DATA: ConstitutionalDeadline[] = [
  // 1. HOURS & DAYS
  {
    id: 'dl-24h',
    durationLabel: '24 Hours',
    durationCategory: 'Hours & Days',
    actionTitle: 'Production of Arrested Person before Nearest Magistrate',
    constitutionalArticle: 'Article 22(2)',
    statutoryDetail: 'Every person arrested and detained in custody must be produced before the nearest magistrate within 24 hours of arrest, excluding the time necessary for the journey.',
    authorityInvolved: 'Police / Law Enforcement Agencies',
    examinerTrap: 'TRAP: Does NOT apply to preventive detention detainees or enemy aliens (Art 22(3))! Furthermore, travel journey time is EXCLUDED from the 24 hours.',
    difficultyRating: 'High-Yield'
  },
  {
    id: 'dl-14d-money',
    durationLabel: '14 Days',
    durationCategory: 'Hours & Days',
    actionTitle: 'Money Bill Return by Rajya Sabha',
    constitutionalArticle: 'Article 109(5)',
    statutoryDetail: 'Rajya Sabha must return a Money Bill within 14 days with recommendations. If not returned within 14 days, the Bill is deemed to have been passed by both Houses in the form passed by Lok Sabha.',
    authorityInvolved: 'Rajya Sabha (Council of States)',
    examinerTrap: 'TRAP: Lok Sabha is NOT bound to accept any of the recommendations. 14 days is the absolute maximum retention window.',
    difficultyRating: 'High-Yield'
  },
  {
    id: 'dl-14d-pres',
    durationLabel: '14 Days',
    durationCategory: 'Hours & Days',
    actionTitle: 'Prior Notice for Impeachment of the President',
    constitutionalArticle: 'Article 61(2)(a)',
    statutoryDetail: 'At least 14 days written notice must be given before moving the impeachment resolution, signed by not less than one-fourth (1/4th) of the total members of the initiating House.',
    authorityInvolved: 'Initiating House of Parliament',
    examinerTrap: 'TRAP: Notice requires 1/4th of TOTAL membership signature, but passing the resolution requires 2/3rd of TOTAL membership!',
    difficultyRating: 'Ultra-Trap'
  },
  {
    id: 'dl-14d-speaker',
    durationLabel: '14 Days',
    durationCategory: 'Hours & Days',
    actionTitle: 'Prior Notice for Removal of Speaker / Deputy Speaker / Vice-President',
    constitutionalArticle: 'Arts. 67(b), 94(c), 179(c)',
    statutoryDetail: 'No resolution for removing the Speaker/Deputy Speaker of Lok Sabha/Assembly or Vice-President of India shall be moved unless at least 14 days notice has been given of the intention to move the resolution.',
    authorityInvolved: 'Parliament / State Assembly',
    examinerTrap: 'TRAP: During the consideration of the removal resolution, the Speaker CANNOT preside, though they have the right to speak and vote in the first instance (Art 96).',
    difficultyRating: 'High-Yield'
  },

  // 2. WEEKS & MONTHS
  {
    id: 'dl-1m-emergency',
    durationLabel: '1 Month (30 Days)',
    durationCategory: 'Weeks & Months',
    actionTitle: 'Parliamentary Approval of National Emergency Proclamation',
    constitutionalArticle: 'Article 352(4)',
    statutoryDetail: 'Proclamation of National Emergency ceases to operate at the expiration of ONE MONTH unless approved by resolutions of both Houses of Parliament by Special Majority.',
    authorityInvolved: 'Both Houses of Parliament',
    examinerTrap: 'BIGGEST EXAM TRAP: The original 1950 Constitution gave 2 MONTHS. The 44th CAA 1978 REDUCED it to 1 MONTH for National Emergency, but LEFT President’s Rule (Art 356) and Financial Emergency (Art 360) at 2 MONTHS!',
    difficultyRating: 'Ultra-Trap'
  },
  {
    id: 'dl-30d-dissolved',
    durationLabel: '30 Days',
    durationCategory: 'Weeks & Months',
    actionTitle: 'Survival of Emergency Proclamations upon Lok Sabha Dissolution',
    constitutionalArticle: 'Arts. 352(4), 356(3), 360(2)',
    statutoryDetail: 'If a proclamation is issued when Lok Sabha is dissolved, or dissolution takes place during the approval window, the proclamation survives for 30 DAYS from the date on which Lok Sabha first sits after reconstitution, provided Rajya Sabha approved it.',
    authorityInvolved: 'Reconstituted Lok Sabha',
    examinerTrap: 'TRAP: Rajya Sabha MUST have approved it in the meantime; if Rajya Sabha rejects it, the proclamation dies immediately without waiting for Lok Sabha.',
    difficultyRating: 'Ultra-Trap'
  },
  {
    id: 'dl-6w-ordinance',
    durationLabel: '6 Weeks',
    durationCategory: 'Weeks & Months',
    actionTitle: 'Lifespan of Presidential & Gubernatorial Ordinances after Reassembly',
    constitutionalArticle: 'Arts. 123(2)(a) & 213(2)(a)',
    statutoryDetail: 'An ordinance ceases to operate at the expiration of SIX WEEKS from the reassembly of Parliament (or State Legislature), or earlier if disapproved by resolutions.',
    authorityInvolved: 'Parliament / State Legislature',
    examinerTrap: 'TRAP: If the two Houses reassemble on different dates, the 6 weeks period is counted from the LATER of those two dates!',
    difficultyRating: 'Ultra-Trap'
  },
  {
    id: 'dl-2m-356-360',
    durationLabel: '2 Months (60 Days)',
    durationCategory: 'Weeks & Months',
    actionTitle: 'Approval of President’s Rule (Art 356) and Financial Emergency (Art 360)',
    constitutionalArticle: 'Arts. 356(3) & 360(2)',
    statutoryDetail: 'A proclamation of President’s Rule or Financial Emergency ceases to operate after TWO MONTHS unless approved by both Houses of Parliament by a Simple Majority.',
    authorityInvolved: 'Both Houses of Parliament',
    examinerTrap: 'TRAP: National Emergency approval is 1 MONTH (Special Majority); President’s Rule and Financial Emergency approval is 2 MONTHS (Simple Majority). Examiners love swapping 1 month and 2 months!',
    difficultyRating: 'Ultra-Trap'
  },
  {
    id: 'dl-60d-absence',
    durationLabel: '60 Days',
    durationCategory: 'Weeks & Months',
    actionTitle: 'Disqualification for Seat Vacancy due to Continuous Absence',
    constitutionalArticle: 'Arts. 101(4) & 190(4)',
    statutoryDetail: 'If for a period of 60 days a member of either House of Parliament or State Legislature is absent from all meetings without permission, the House may declare the seat vacant.',
    authorityInvolved: 'Lok Sabha / Rajya Sabha / Assembly',
    examinerTrap: 'TRAP: In computing the 60 days, NO ACCOUNT is taken of any period during which the House is prorogued or adjourned for more than 4 consecutive days.',
    difficultyRating: 'High-Yield'
  },
  {
    id: 'dl-3m-preventive',
    durationLabel: '3 Months',
    durationCategory: 'Weeks & Months',
    actionTitle: 'Maximum Preventive Detention without Advisory Board Opinion',
    constitutionalArticle: 'Article 22(4)',
    statutoryDetail: 'No law providing for preventive detention shall authorise detention for longer than 3 months unless an Advisory Board finds sufficient cause.',
    authorityInvolved: 'Advisory Board (headed by HC Judges)',
    examinerTrap: 'TRAP: The 44th CAA attempted to reduce this to 2 months, but that amendment was never officially notified by the Central Government. Law today remains 3 months!',
    difficultyRating: 'Ultra-Trap'
  },
  {
    id: 'dl-6m-gap',
    durationLabel: '6 Months',
    durationCategory: 'Weeks & Months',
    actionTitle: 'Maximum Interval Between Two Sessions of Parliament / Assembly',
    constitutionalArticle: 'Arts. 85(1) & 174(1)',
    statutoryDetail: 'The President (or Governor) shall summon each House so that 6 months shall not intervene between its last sitting in one session and the date appointed for its first sitting in the next session.',
    authorityInvolved: 'President / Governor',
    examinerTrap: 'TRAP: Parliament must meet at least TWICE a year, with no more than 6 months gap between sessions.',
    difficultyRating: 'High-Yield'
  },
  {
    id: 'dl-6m-minister',
    durationLabel: '6 Months',
    durationCategory: 'Weeks & Months',
    actionTitle: 'Tenure of a Non-Legislator Minister',
    constitutionalArticle: 'Arts. 75(5) & 164(4)',
    statutoryDetail: 'A Minister who for any period of six consecutive months is not a member of either House of Parliament (or State Legislature) shall at the expiration of that period cease to be a Minister.',
    authorityInvolved: 'Prime Minister / Chief Minister / Ministers',
    examinerTrap: 'TRAP: In S.R. Chaudhuri v. State of Punjab (2001), SC held that a non-legislator CANNOT be repeatedly reappointed as Minister without getting elected.',
    difficultyRating: 'High-Yield'
  },
  {
    id: 'dl-6m-pres-vac',
    durationLabel: '6 Months',
    durationCategory: 'Weeks & Months',
    actionTitle: 'Election to Fill Vacancy in the Office of President of India',
    constitutionalArticle: 'Article 62(2)',
    statutoryDetail: 'An election to fill a vacancy caused by death, resignation, removal or otherwise in the office of President shall be held as soon as possible, and in no case later than six months from the date of occurrence of the vacancy.',
    authorityInvolved: 'Election Commission of India',
    examinerTrap: 'TRAP: In the interim, Vice-President acts as President. If Vice-President is unavailable, Chief Justice of India acts (as Justice Hidayatullah did in 1969).',
    difficultyRating: 'High-Yield'
  },
  {
    id: 'dl-7-5m-ordinance',
    durationLabel: '7.5 Months',
    durationCategory: 'Weeks & Months',
    actionTitle: 'Maximum Theoretical Lifespan of an Ordinance without Approval',
    constitutionalArticle: 'Arts. 123 & 85',
    statutoryDetail: '6 months maximum gap between two parliamentary sessions + 6 weeks after reassembly = maximum theoretical lifespan of 7.5 months (approx 222 days) if Parliament is not summoned earlier.',
    authorityInvolved: 'President / Parliament',
    examinerTrap: 'TRAP: A standard numerical trick in Prelims tests candidates on combining Art 85(1) and Art 123(2)(a).',
    difficultyRating: 'Ultra-Trap'
  },

  // 3. YEARS & TENURE
  {
    id: 'dl-1y-art249',
    durationLabel: '1 Year',
    durationCategory: 'Years & Tenure',
    actionTitle: 'Validity of Rajya Sabha Resolution under Article 249',
    constitutionalArticle: 'Article 249(2)',
    statutoryDetail: 'A resolution passed by the Rajya Sabha authorizing Parliament to legislate on a State List subject in national interest remains in force for a period NOT EXCEEDING ONE YEAR.',
    authorityInvolved: 'Rajya Sabha',
    examinerTrap: 'TRAP: It can be renewed repeatedly for 1 year each time. When it ceases, the parliamentary law lapses 6 months after expiry.',
    difficultyRating: 'High-Yield'
  },
  {
    id: 'dl-3y-356',
    durationLabel: '3 Years',
    durationCategory: 'Years & Tenure',
    actionTitle: 'Absolute Maximum Cap on President’s Rule in a State',
    constitutionalArticle: 'Article 356(4) Proviso',
    statutoryDetail: 'President’s Rule cannot be continued beyond THREE YEARS under any circumstances (unless extended by a specific constitutional amendment, as was done for Punjab).',
    authorityInvolved: 'Parliament of India',
    examinerTrap: 'TRAP: Beyond 1 year, it can only be extended if TWO conditions are met: (1) National Emergency in operation, and (2) ECI certifies elections cannot be held.',
    difficultyRating: 'Ultra-Trap'
  },
  {
    id: 'dl-5y-term',
    durationLabel: '5 Years',
    durationCategory: 'Years & Tenure',
    actionTitle: 'Normal Term of Lok Sabha, State Assemblies, President, and Governor',
    constitutionalArticle: 'Arts. 56(1), 83(2), 156(3), 172(1)',
    statutoryDetail: '5 years from the date appointed for its first meeting. During National Emergency, Lok Sabha term can be extended by Parliament by law for 1 year at a time.',
    authorityInvolved: 'Legislature & Executive',
    examinerTrap: 'TRAP: Extension cannot exceed 6 months after the National Emergency proclamation has ceased to operate.',
    difficultyRating: 'Standard'
  },
  {
    id: 'dl-6y-65y-cag',
    durationLabel: '6 Years or 65 Years',
    durationCategory: 'Years & Tenure',
    actionTitle: 'Tenure of CAG, UPSC Chairman/Members, and CEC',
    constitutionalArticle: 'Arts. 148, 316, 324',
    statutoryDetail: 'Tenure is 6 years or until attaining the age of 65 years, whichever is earlier.',
    authorityInvolved: 'CAG, UPSC, ECI',
    examinerTrap: 'TRAP: State PSC Chairman & members serve for 6 years or until 62 YEARS OF AGE (raised from 60 to 62 by 41st CAA 1976), not 65!',
    difficultyRating: 'Ultra-Trap'
  }
];

export const DEADLINES_DRILL_QUESTIONS: DeadlineQuizItem[] = [
  {
    id: 'dq-1',
    question: 'Under Article 352(4) of the Constitution of India (as amended by the 44th Amendment Act, 1978), a Proclamation of National Emergency ceases to operate unless approved by both Houses within what time frame?',
    options: ['14 days', '1 month (30 days)', '2 months (60 days)', '6 months'],
    correctAnswer: '1 month (30 days)',
    explanation: 'The 44th CAA 1978 reduced the approval period from 2 months to 1 month (30 days) to curb executive abuse. President’s Rule (Art 356) and Financial Emergency (Art 360) remain at 2 months.',
    trapAlert: 'Candidates confuse the 1-month National Emergency window with the 2-month President’s Rule window.'
  },
  {
    id: 'dq-2',
    question: 'What is the maximum period of detention authorized under Article 22(4) of the Constitution of India under a preventive detention law without obtaining the opinion of an Advisory Board?',
    options: ['30 days', '2 months', '3 months', '6 months'],
    correctAnswer: '3 months',
    explanation: 'Article 22(4) specifies a 3-month limit. The 44th Amendment 1978 passed a reduction to 2 months, but that clause was NEVER officially notified by the Central Government, leaving 3 months as the valid statutory law today.',
    trapAlert: 'The unnotified 44th CAA trap: textbook readers mark 2 months, but the operative law is 3 months.'
  },
  {
    id: 'dq-3',
    question: 'An ordinance promulgated by the President under Article 123 ceases to operate at the expiration of what period from the reassembly of Parliament?',
    options: ['6 weeks', '6 months', '30 days', '14 days'],
    correctAnswer: '6 weeks',
    explanation: 'Article 123(2)(a) mandates that an ordinance ceases to operate at the expiration of 6 weeks from the reassembly of Parliament. If the two Houses reassemble on different dates, the 6 weeks is counted from the later date.',
    trapAlert: 'Do not confuse 6 weeks (countdown after reassembly) with 6 months (maximum gap between sessions).'
  },
  {
    id: 'dq-4',
    question: 'Under Article 101(4) of the Constitution, a seat in either House of Parliament may be declared vacant if a member is absent without permission from all meetings for what continuous period?',
    options: ['30 days', '60 days', '90 days', '6 months'],
    correctAnswer: '60 days',
    explanation: 'Article 101(4) states that if a member is absent for a period of 60 days without permission, the House may declare the seat vacant. Prorogation or adjournments > 4 consecutive days are excluded from the count.',
    trapAlert: 'Days when the House is prorogued or adjourned for more than 4 consecutive days are excluded from the 60-day count.'
  },
  {
    id: 'dq-5',
    question: 'What is the maximum age limit for a Member of a State Public Service Commission (SPSC) to hold office under Article 316(2)?',
    options: ['60 years', '62 years', '65 years', '70 years'],
    correctAnswer: '62 years',
    explanation: 'Under Article 316(2), SPSC members hold office for a term of 6 years or until attaining 62 years of age (raised from 60 to 62 by the 41st CAA 1976). UPSC members hold office until 65 years.',
    trapAlert: 'UPSC = 65 years; State PSC = 62 years. High Court Judge = 62 years; Supreme Court Judge = 65 years.'
  }
];
