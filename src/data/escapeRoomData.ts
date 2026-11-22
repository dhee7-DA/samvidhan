export interface ChamberDialRiddle {
  id: string;
  chamber: number;
  title: string;
  subclause: string;
  riddleText: string;
  dialOptions: string[];
  correctAnswer: string;
  examinerExplanation: string;
  articleCitation: string;
}

export interface CircuitNode {
  id: string;
  label: string;
  article: string;
  doctrine: string;
  isCorrectRoute: boolean;
  trapWarning?: string;
}

export interface EmergencyKeypadRiddle {
  id: string;
  prompt: string;
  keypadType: 'NUMERIC' | 'CHOICE';
  correctCode?: string; // e.g. "2021" or "2"
  choices?: { key: string; label: string; isCorrect: boolean }[];
  hint: string;
  explanation: string;
  articleCitation: string;
}

export interface GhostPrecedent {
  id: string;
  caseName: string;
  year: number;
  obsoleteRatio: string;
  article: string;
  slayerCaseId: string;
}

export interface SlayerPrecedent {
  id: string;
  caseName: string;
  year: number;
  benchStrength: string;
  overrulingRatio: string;
}

// =========================================================================
// 1. CHAMBER 1: THE MAJORITY COMBINATION LOCK (ARTICLE 368 & AMENDMENT DIALS)
// =========================================================================
export const CHAMBER_1_DIALS: ChamberDialRiddle[] = [
  {
    id: 'c1-d1',
    chamber: 1,
    title: 'The Substantive Amendment Lock',
    subclause: 'Article 368(2) First Requirement',
    riddleText:
      'To pass a constitutional amendment in either House of Parliament under Article 368(2), what fraction of the total membership of the House is mandatorily required?',
    dialOptions: [
      'Simple majority of members present & voting',
      'Absolute majority of the total membership of the House',
      'Two-thirds of the total membership of the House',
      'Three-fourths of the total membership of the House'
    ],
    correctAnswer: 'Absolute majority of the total membership of the House',
    examinerExplanation:
      'Article 368(2) prescribes dual majorities: first, a majority of the total membership of each House (more than 50% of the total sanctioned seats, irrespective of vacancies); and second, not less than two-thirds of members present and voting.',
    articleCitation: 'Article 368(2)'
  },
  {
    id: 'c1-d2',
    chamber: 1,
    title: 'The Voting Threshold Dial',
    subclause: 'Article 368(2) Second Requirement',
    riddleText:
      'In addition to the majority of total membership, what proportion of members PRESENT AND VOTING must vote in favour of the amendment bill in each House?',
    dialOptions: [
      'Simple majority (50% + 1)',
      'Not less than three-fifths (60%)',
      'Not less than two-thirds (66.67%)',
      'Unanimous 100% consent'
    ],
    correctAnswer: 'Not less than two-thirds (66.67%)',
    examinerExplanation:
      'Both requirements must co-exist at the time of voting on each substantive clause of the Constitution Amendment Bill.',
    articleCitation: 'Article 368(2)'
  },
  {
    id: 'c1-d3',
    chamber: 1,
    title: 'The Federal Entrenchment Key',
    subclause: 'Proviso to Article 368(2) State Ratification',
    riddleText:
      'To amend federal provisions listed in the Proviso (such as Article 54, 55, 73, Chapter IV Part V, or the Seventh Schedule Lists), what proportion of State Legislatures must ratify the Bill?',
    dialOptions: [
      'Not less than one-third of the States',
      'Not less than one-half of the States',
      'Not less than two-thirds of the States',
      'All States unanimously'
    ],
    correctAnswer: 'Not less than one-half of the States',
    examinerExplanation:
      'The Proviso to Article 368(2) requires resolution passed by the legislatures of not less than ONE-HALF of the States before the Bill is presented to the President for assent.',
    articleCitation: 'Proviso to Article 368(2)'
  },
  {
    id: 'c1-d4',
    chamber: 1,
    title: 'The Presidential Impeachment Trap Dial',
    subclause: 'Article 61(2)(b) vs Article 368 Distinction',
    riddleText:
      'To pass a resolution impeaching the President of India for violation of the Constitution under Article 61, what majority is required in each House?',
    dialOptions: [
      'Two-thirds of members present and voting',
      'Two-thirds of the TOTAL membership of the House',
      'Absolute majority of total membership',
      'Simple majority supported by half of State Assemblies'
    ],
    correctAnswer: 'Two-thirds of the TOTAL membership of the House',
    examinerExplanation:
      'Examiner trap! Unlike Article 368, Article 61 does NOT say "present and voting". It requires not less than two-thirds of the TOTAL membership of the House—the most stringent majority in the entire Indian Constitution.',
    articleCitation: 'Article 61(2)(b)'
  }
];

// =========================================================================
// 2. CHAMBER 2: THE GOLDEN TRIANGLE CIRCUIT (ARTICLES 14, 19, 21)
// =========================================================================
export const CIRCUIT_STAGES = [
  {
    id: 'circuit-step-1',
    instruction:
      'Select the landmark judicial doctrine that fused Articles 14, 19, and 21 into an interdependent Golden Triangle, rejecting the obsolete "isolated silo" theory:',
    options: [
      {
        id: 'opt-gopalan',
        label: 'A.K. Gopalan Mutual Exclusion Principle (1950)',
        isCorrect: false,
        feedback:
          '⚡ SHORT CIRCUIT! A.K. Gopalan held Articles 19 and 21 are mutually exclusive silos. Overruled!'
      },
      {
        id: 'opt-maneka',
        label: 'Maneka Gandhi Integrated Organic Trinity (1978)',
        isCorrect: true,
        feedback:
          '🔋 CIRCUIT POWERED! Maneka Gandhi held a law depriving personal liberty under Article 21 must also satisfy the non-arbitrariness of Article 14 and reasonableness of Article 19.'
      },
      {
        id: 'opt-shriram',
        label: 'M.C. Mehta Absolute Liability Rule (1987)',
        isCorrect: false,
        feedback:
          '⚡ FALSE CONNECTION! M.C. Mehta created absolute tort liability, not the Golden Triangle of Fundamental Rights.'
      }
    ]
  },
  {
    id: 'circuit-step-2',
    instruction:
      'Under the Golden Triangle, what standard must "Procedure Established by Law" under Article 21 satisfy to prevent executive and legislative short circuits?',
    options: [
      {
        id: 'opt-formal-statute',
        label: 'Mere formal statutory enactment passed by legislature, regardless of harshness',
        isCorrect: false,
        feedback:
          '⚡ HIGH VOLTAGE OVERLOAD! Mere formal enactment was the discredited Gopalan standard.'
      },
      {
        id: 'opt-just-fair-reasonable',
        label: 'Procedure must be Right, Just, and Fair, and not arbitrary, fanciful, or oppressive',
        isCorrect: true,
        feedback:
          '🔋 CURRENT FLOWING! Bhagwati J. ruled in Maneka Gandhi that procedure must be just, fair, and reasonable, incorporating substantive due process into Article 21.'
      },
      {
        id: 'opt-executive-discretion',
        label: 'Executive discretion based on ministerial subjective satisfaction',
        isCorrect: false,
        feedback:
          '⚡ CIRCUIT BLOWN! Unbridled executive discretion violates Article 14.'
      }
    ]
  },
  {
    id: 'circuit-step-3',
    instruction:
      'Complete the trinity connection: Which modern 9-Judge Constitution Bench declared that Privacy is an intrinsic facet of Article 21 and the Golden Triangle?',
    options: [
      {
        id: 'opt-puttaswamy',
        label: 'Justice K.S. Puttaswamy (Retd.) v. Union of India (2017)',
        isCorrect: true,
        feedback:
          '⚡ TRIANGLE FULLY ENERGIZED! A unanimous 9-Judge Bench embedded privacy into Articles 14, 19, and 21.'
      },
      {
        id: 'opt-adm-jabalpur',
        label: 'ADM Jabalpur v. Shivkant Shukla (1976)',
        isCorrect: false,
        feedback:
          '⚡ DANGEROUS DISCHARGE! ADM Jabalpur denied writ remedies during emergency. Explicitly overruled in Puttaswamy!'
      },
      {
        id: 'opt-kharak-singh',
        label: 'Kharak Singh v. State of U.P. (1962)',
        isCorrect: false,
        feedback:
          '⚡ RESISTANCE FAULT! Majority in Kharak Singh held privacy was not a guaranteed fundamental right.'
      }
    ]
  }
];

// =========================================================================
// 3. CHAMBER 3: THE EMERGENCY OVERRIDE KEYPAD (ARTICLES 352, 356, 358, 359)
// =========================================================================
export const EMERGENCY_KEYPAD_RIDDLES: EmergencyKeypadRiddle[] = [
  {
    id: 'keypad-r1',
    prompt:
      '🚨 ALARM ACTIVE: Input the TWO Fundamental Right Articles that CANNOT be suspended by Presidential Order under Article 359 even during the most severe National Emergency (44th Amendment):',
    keypadType: 'NUMERIC',
    correctCode: '2021', // Articles 20 and 21
    hint: 'Enter the two consecutive article numbers back-to-back (e.g. "2021" for Art 20 & 21).',
    explanation:
      'Following the excesses of the 1975 Emergency, the 44th Constitutional Amendment (1978) amended Article 359 to explicitly mandate that the right to move any court for the enforcement of Articles 20 (protection against ex post facto, double jeopardy, self-incrimination) and 21 (life and personal liberty) can NEVER be suspended.',
    articleCitation: 'Article 359(1) as amended by 44th Amendment Act, 1978'
  },
  {
    id: 'keypad-r2',
    prompt:
      '⚠️ SECURITY TRAP: A National Emergency is proclaimed on grounds of "Armed Rebellion". Does Article 19 suspend automatically under Article 358?',
    keypadType: 'CHOICE',
    choices: [
      {
        key: 'A',
        label: 'YES, Article 19 suspends automatically on all grounds of Article 352 proclamation',
        isCorrect: false
      },
      {
        key: 'B',
        label: 'NO, Article 358 automatic suspension operates ONLY during War or External Aggression!',
        isCorrect: true
      },
      {
        key: 'C',
        label: 'Only if approved by a two-thirds majority of the Rajya Sabha within 14 days',
        isCorrect: false
      }
    ],
    hint: 'Check the 44th Amendment qualification in Article 358(1).',
    explanation:
      'By the 44th Amendment, Article 358 was restricted: Article 19 is suspended automatically ONLY when emergency is proclaimed on grounds of War or External Aggression, NOT Armed Rebellion!',
    articleCitation: 'Article 358(1)'
  },
  {
    id: 'keypad-r3',
    prompt:
      '⏱️ TIMELOCK CHALLENGE: The President proclaims President\'s Rule under Article 356 in a State. Key in how many MONTHS this proclamation remains valid without Parliamentary approval:',
    keypadType: 'NUMERIC',
    correctCode: '2', // 2 Months
    hint: 'Enter a single digit number of months (1, 2, 6, etc.).',
    explanation:
      'Under Article 356(3), a Proclamation of President\'s Rule ceases to operate at the expiration of TWO MONTHS unless approved by resolutions of both Houses of Parliament (in contrast to Article 352 which requires approval within ONE month).',
    articleCitation: 'Article 356(3)'
  }
];

// =========================================================================
// 4. CHAMBER 4: THE OVERRULED PRECEDENTS GRAVEYARD (THE FINAL EXIT)
// =========================================================================
export const GHOST_PRECEDENTS: GhostPrecedent[] = [
  {
    id: 'ghost-gopalan',
    caseName: 'A.K. Gopalan v. State of Madras',
    year: 1950,
    obsoleteRatio: 'Articles 19 and 21 are mutually exclusive water-tight silos; procedure established by law means mere lex.',
    article: 'Articles 19 & 21',
    slayerCaseId: 'slayer-maneka'
  },
  {
    id: 'ghost-adm-jabalpur',
    caseName: 'ADM Jabalpur v. Shivkant Shukla',
    year: 1976,
    obsoleteRatio: 'No citizen has locus standi to move High Court under Article 226 for habeas corpus during emergency.',
    article: 'Articles 21 & 359',
    slayerCaseId: 'slayer-puttaswamy'
  },
  {
    id: 'ghost-narasimha-rao',
    caseName: 'P.V. Narasimha Rao v. State (CBI)',
    year: 1998,
    obsoleteRatio: 'Legislators enjoy absolute criminal immunity under Article 105(2) for accepting bribes to vote.',
    article: 'Article 105(2)',
    slayerCaseId: 'slayer-sita-soren'
  },
  {
    id: 'ghost-chinnaiah',
    caseName: 'E.V. Chinnaiah v. State of A.P.',
    year: 2005,
    obsoleteRatio: 'Scheduled Castes form an indivisible monolithic class; States cannot sub-classify for preferential quota.',
    article: 'Article 341 & 16(4)',
    slayerCaseId: 'slayer-davinder-singh'
  },
  {
    id: 'ghost-berubari',
    caseName: 'In re Berubari Union Case',
    year: 1960,
    obsoleteRatio: 'The Preamble is not a part of the Constitution of India and cannot confer substantive power.',
    article: 'Preamble & Art. 368',
    slayerCaseId: 'slayer-kesavananda'
  }
];

export const SLAYER_PRECEDENTS: SlayerPrecedent[] = [
  {
    id: 'slayer-maneka',
    caseName: 'Maneka Gandhi v. Union of India',
    year: 1978,
    benchStrength: '7-Judge Bench',
    overrulingRatio: 'Procedure must be right, just and fair; Fundamental Rights form an integrated organic whole.'
  },
  {
    id: 'slayer-puttaswamy',
    caseName: 'K.S. Puttaswamy v. Union of India',
    year: 2017,
    benchStrength: '9-Judge Bench',
    overrulingRatio: 'ADM Jabalpur was discordantly flawed; life and privacy inhere in humans and are not state bounties.'
  },
  {
    id: 'slayer-sita-soren',
    caseName: 'Sita Soren v. Union of India',
    year: 2024,
    benchStrength: '7-Judge Bench',
    overrulingRatio: 'Bribery is complete upon acceptance and destroys parliamentary integrity; Article 105 confers no immunity.'
  },
  {
    id: 'slayer-davinder-singh',
    caseName: 'State of Punjab v. Davinder Singh',
    year: 2024,
    benchStrength: '7-Judge Bench (6:1)',
    overrulingRatio: 'States possess constitutional competence to sub-classify Scheduled Castes for substantive equality.'
  },
  {
    id: 'slayer-kesavananda',
    caseName: 'Kesavananda Bharati v. State of Kerala',
    year: 1973,
    benchStrength: '13-Judge Bench',
    overrulingRatio: 'Preamble is an integral part of the Constitution and constitutes the compass of the Basic Structure.'
  }
];
