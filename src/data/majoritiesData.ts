export interface MajorityTypeDetail {
  id: string;
  name: string;
  hindiName: string;
  codeName: string;
  formula: string;
  quorumRule: string;
  difficultyRating: 'Standard' | 'Tricky' | 'Ultra-Trap';
  description: string;
  appliedActions: string[];
  examinerTraps: string[];
  exampleMath: string;
}

export interface ConstitutionalActionItem {
  id: string;
  actionTitle: string;
  category: 'Executive' | 'Legislature' | 'Judiciary' | 'Emergency' | 'Federal & Amendments';
  articlesInvolved: string[];
  majorityRequiredId: string;
  housesInvolved: 'Lok Sabha Only' | 'Rajya Sabha Only' | 'Both Houses Separately' | 'Both Houses or Joint Sitting' | 'State Assembly';
  keyNuance: string;
  examinerTrap: string;
}

export interface MajorityQuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  trapAlert: string;
}

export const MAJORITY_TYPES_DATA: MajorityTypeDetail[] = [
  {
    id: 'simple',
    name: 'Simple Majority (Ordinary Majority)',
    hindiName: 'साधारण बहुमत',
    codeName: 'Simple Majority',
    formula: '> 50% of members present and voting in the House',
    quorumRule: 'Subject to Quorum (at least 1/10th of total membership of the House under Article 100(3))',
    difficultyRating: 'Standard',
    description: 'The standard voting rule in parliamentary proceedings unless a specific constitutional provision dictates otherwise. Does not account for abstentions or absent members.',
    exampleMath: 'If Lok Sabha total seats = 543, but only 300 members are present and voting, a Simple Majority requires only 151 votes.',
    appliedActions: [
      'Passing Ordinary Bills, Money Bills, and Financial Bills (Arts 107, 109, 117)',
      'Confidence Motion / No-Confidence Motion / Censure Motion / Adjournment Motion',
      'Approval of President’s Rule (State Emergency under Art 356)',
      'Approval of Financial Emergency (Art 360)',
      'Disapproval of National Emergency by Lok Sabha (Art 352(8) 44th CAA)',
      'Election of Speaker & Deputy Speaker of Lok Sabha (Art 93)',
      'Election of Deputy Chairman of Rajya Sabha (Art 89)',
      'Lok Sabha agreement to remove Vice-President (Art 67(b))',
      'Creation, reorganization, or boundary changes of States (Arts 2, 3, 4)',
      'Abolition or Creation of Legislative Councils by Parliament (Art 169(1) Parliamentary stage)',
      'State ratification of Constitutional Amendment Bills under Article 368(2) proviso'
    ],
    examinerTraps: [
      'TRAP 1: State Legislatures ratify federal constitutional amendments (Art 368 proviso) by a SIMPLE MAJORITY, NOT a special majority!',
      'TRAP 2: Disapproval of National Emergency requires ONLY a Simple Majority in the LOK SABHA (Art 352(8)), whereas approval requires a Special Majority in BOTH Houses (Art 352(4)).',
      'TRAP 3: State reorganization under Article 3 (even redrawing internal state borders) requires ONLY a Simple Majority in Parliament, despite its drastic federal impact!'
    ]
  },
  {
    id: 'effective',
    name: 'Effective Majority (All the Then Members)',
    hindiName: 'प्रभावी बहुमत',
    codeName: 'Effective Majority',
    formula: '> 50% of the Effective Strength (Total Sanctioned Strength minus Vacancies)',
    quorumRule: 'Calculated strictly on actual sitting members; vacant seats (death, resignation, disqualification) are subtracted before computing 50%.',
    difficultyRating: 'Ultra-Trap',
    description: 'Referred to in the Constitution as "a majority of all the then members". Primarily designed to protect presiding officers from casual removal while allowing removal when actual current membership favors it.',
    exampleMath: 'If Rajya Sabha sanctioned strength = 245, but there are 5 vacancies (effective strength = 240), an Effective Majority requires > 120 (i.e. at least 121 votes), regardless of how many members attend the sitting.',
    appliedActions: [
      'Removal of the Vice-President / Chairman of Rajya Sabha (Resolution initiated & passed in Rajya Sabha under Art 67(b))',
      'Removal of the Deputy Chairman of Rajya Sabha (Art 90(c))',
      'Removal of the Speaker and Deputy Speaker of Lok Sabha (Art 94(c))',
      'Removal of the Speaker and Deputy Speaker of State Legislative Assembly (Art 179(c))',
      'Removal of the Chairman and Deputy Chairman of State Legislative Council (Art 183(c))'
    ],
    examinerTraps: [
      'BIGGEST EXAM TRAP: The removal of the Vice-President is initiated and passed in the RAJYA SABHA by an EFFECTIVE MAJORITY, but agreed to in the LOK SABHA by a SIMPLE MAJORITY (Art 67(b))!',
      'TRAP 2: Candidates often confuse Effective Majority with Absolute Majority. Effective majority excludes vacancies; absolute majority counts the full sanctioned strength including vacancies.',
      'TRAP 3: Presiding officers (Speaker, Chairman) are NOT removed by simple majority or 2/3rd special majority — they are strictly governed by Effective Majority.'
    ]
  },
  {
    id: 'absolute',
    name: 'Absolute Majority',
    hindiName: 'पूर्ण बहुमत',
    codeName: 'Absolute Majority',
    formula: '> 50% of the Total Sanctioned Strength of the House',
    quorumRule: 'Fixed threshold based on total seats; vacancies and absenteeism are NOT subtracted.',
    difficultyRating: 'Standard',
    description: 'Requires more than 50% of the total constitutional strength of the house. Used in government formation, and serves as the baseline floor in Article 368 amendments.',
    exampleMath: 'In Lok Sabha with 543 seats, Absolute Majority is always 272 votes, even if 100 members are absent.',
    appliedActions: [
      'Claiming majority to form the Government / Council of Ministers',
      'Baseline condition (Prong 1) of Special Majority under Article 368(2) and Article 124(4)'
    ],
    examinerTraps: [
      'TRAP: On its own, an Absolute Majority is never used to pass ordinary legislation or constitutional amendments; it always acts as the minimum safety floor alongside a 2/3rd voting test.'
    ]
  },
  {
    id: 'special-type-1',
    name: 'Special Majority Type 1: Art 249 & Art 312',
    hindiName: 'विशेष बहुमत (प्रकार 1: राज्य सभा 2/3 उपस्थित एवं मतदान)',
    codeName: 'Special Majority (Art 249/312)',
    formula: '≥ 2/3rd of the members present and voting in the RAJYA SABHA ONLY',
    quorumRule: 'Requires standard quorum in Rajya Sabha (25 members), but 2/3rd of those voting must vote in favor.',
    difficultyRating: 'Tricky',
    description: 'A special federal power vested exclusively in the Council of States (Rajya Sabha) to authorize national legislative intervention or create All-India Services.',
    exampleMath: 'If 150 members of Rajya Sabha are present and voting, not less than 100 members must vote in favor (150 × 2/3 = 100).',
    appliedActions: [
      'Empowering Parliament to legislate on a State List subject in national interest (Art 249)',
      'Creation of one or more new All-India Services common to Union and States (Art 312)'
    ],
    examinerTraps: [
      'TRAP 1: Lok Sabha DOES NOT pass the initiating resolution under Art 249 or Art 312! The resolution is passed by the RAJYA SABHA ALONE as the representative house of States.',
      'TRAP 2: This majority does NOT require > 50% of total membership. It requires strictly 2/3rd of members present and voting.'
    ]
  },
  {
    id: 'special-type-2',
    name: 'Special Majority Type 2: Art 368 / Judicial Removals',
    hindiName: 'विशेष बहुमत (प्रकार 2: कुल सदस्य संख्या का बहुमत + 2/3 उपस्थित एवं मतदान)',
    codeName: 'Special Majority (Art 368/Judicial Removals)',
    formula: 'Twin Test: (1) > 50% of the TOTAL MEMBERSHIP of the House + (2) ≥ 2/3rd of members present and voting',
    quorumRule: 'Both conditions must be satisfied independently in EACH House separately.',
    difficultyRating: 'Ultra-Trap',
    description: 'The standard special majority used for constitutional amendments, high constitutional impeachments (Judges, CAG, CEC), and national emergencies.',
    exampleMath: 'In Lok Sabha (543 seats): Must secure at least 272 votes (absolute majority test). If 360 members are present and voting, 2/3rd = 240. But because 272 is required for total membership, 240 is insufficient! At least 272 votes must be secured.',
    appliedActions: [
      'Constitutional Amendment Bills not affecting federal structure (Art 368(2))',
      'Removal of Supreme Court Judge (Art 124(4))',
      'Removal of High Court Judge (Art 217(1) read with Art 124(4))',
      'Removal of Comptroller and Auditor-General of India (CAG) (Art 148(1))',
      'Removal of Chief Election Commissioner (CEC) (Art 324(5))',
      'Approval and 6-month extension of National Emergency (Art 352(4) modified by 44th CAA)',
      'State Legislative Assembly resolution for the Creation or Abolition of a State Legislative Council (Art 169(1) Assembly stage)'
    ],
    examinerTraps: [
      'TRAP 1: Election Commissioners (other than CEC) are NOT removed by this majority! They are removed by the President on the RECOMMENDATION of the CEC (Art 324(5) second proviso).',
      'TRAP 2: National Emergency was originally approved by simple majority; the 44th CAA 1978 UPGRADED it to this Special Majority to prevent misuse.',
      'TRAP 3: No Joint Sitting is permitted under Article 368 for constitutional amendments; both Houses must pass it independently.'
    ]
  },
  {
    id: 'special-type-3',
    name: 'Special Majority Type 3: Presidential Impeachment (Art 61)',
    hindiName: 'विशेष बहुमत (प्रकार 3: सदन की कुल सदस्य संख्या का 2/3)',
    codeName: 'Special Majority (Art 61)',
    formula: '≥ 2/3rd of the TOTAL MEMBERSHIP of the House',
    quorumRule: 'Present and voting numbers are irrelevant. Strictly computed on the total sanctioned seats of the House.',
    difficultyRating: 'Ultra-Trap',
    description: 'The most stringent and demanding majority requirement in the entire Indian Constitution, reserved solely for the removal of the Head of the Republic.',
    exampleMath: 'In Lok Sabha (543 seats), 2/3rd of total membership = 362 votes. Even if 400 members attend and 350 vote in favor (87.5% of present), the motion FAILS because 362 is the unbreakable floor.',
    appliedActions: [
      'Impeachment of the President of India on ground of "Violation of the Constitution" (Art 61(2)(b) & 61(4))'
    ],
    examinerTraps: [
      'BIGGEST EXAM TRAP: Supreme Court judges and the President DO NOT share the same removal majority! SC Judge = Total majority + 2/3rd present & voting (Art 124(4)). President = 2/3rd of TOTAL MEMBERSHIP (Art 61).',
      'TRAP 2: Prior notice for President impeachment must be signed by at least 1/4th of the total members of the initiating House and give 14 days notice.',
      'TRAP 3: Nominated MPs vote in President impeachment, but cannot vote in President election.'
    ]
  },
  {
    id: 'special-with-states',
    name: 'Special Majority Type 2 + 50% State Ratification',
    hindiName: 'विशेष बहुमत + 50% राज्यों की संपुष्टि',
    codeName: 'Special Majority + State Ratification',
    formula: 'Special Majority Type 2 in both Houses of Parliament + Ratification by resolutions of ≥ 50% of State Legislatures',
    quorumRule: 'State legislatures pass the ratification resolution by a SIMPLE MAJORITY.',
    difficultyRating: 'Ultra-Trap',
    description: 'Mandatory for amendments touching the federal equilibrium under the proviso to Article 368(2).',
    exampleMath: 'If India has 28 States, at least 14 State Legislatures must pass resolutions approving the amendment before it is presented to the President.',
    appliedActions: [
      'Manner of election of President (Arts 54, 55)',
      'Extent of executive power of Union and States (Arts 73, 162)',
      'Provisions relating to the Supreme Court and High Courts (Chapter IV of Part V, Chapter V of Part VI, Art 241)',
      'Distribution of legislative powers between Union and States (7th Schedule)',
      'Representation of States in Parliament (4th Schedule)',
      'Article 368 itself (provisions governing the amendment process)'
    ],
    examinerTraps: [
      'TRAP 1: The Constitution prescribes NO TIME LIMIT within which State Legislatures must ratify the amendment.',
      'TRAP 2: State Legislatures ratify by SIMPLE MAJORITY, not special majority.',
      'TRAP 3: Once a State gives its ratification, the Constitution is silent on whether it can withdraw it; judicial consensus is that ratification cannot be unilaterally revoked.'
    ]
  }
];

export const CONSTITUTIONAL_ACTIONS_CATALOG: ConstitutionalActionItem[] = [
  {
    id: 'act-1',
    actionTitle: 'Passing an Ordinary or Money Bill',
    category: 'Legislature',
    articlesInvolved: ['Art 107', 'Art 109', 'Art 110'],
    majorityRequiredId: 'simple',
    housesInvolved: 'Both Houses or Joint Sitting',
    keyNuance: 'Money bills can only be introduced in Lok Sabha; Rajya Sabha has only 14 days recommendatory window.',
    examinerTrap: 'No joint sitting for Money Bills or Constitutional Amendment Bills.'
  },
  {
    id: 'act-2',
    actionTitle: 'Impeaching the President of India',
    category: 'Executive',
    articlesInvolved: ['Article 61'],
    majorityRequiredId: 'special-type-3',
    housesInvolved: 'Both Houses Separately',
    keyNuance: 'Sole ground: "Violation of the Constitution". Requires 14 days prior notice signed by 1/4th members of initiating house.',
    examinerTrap: 'Requires 2/3rd of TOTAL membership in each House, unlike SC Judge removal which requires 2/3rd of members present & voting.'
  },
  {
    id: 'act-3',
    actionTitle: 'Removing the Vice-President of India',
    category: 'Executive',
    articlesInvolved: ['Article 67(b)'],
    majorityRequiredId: 'effective',
    housesInvolved: 'Both Houses Separately',
    keyNuance: 'Initiated and passed by Rajya Sabha by Effective Majority; agreed to by Lok Sabha by Simple Majority.',
    examinerTrap: 'Candidates often mark 2/3rd special majority or assume Lok Sabha also needs effective majority. Lok Sabha only needs a simple majority!'
  },
  {
    id: 'act-4',
    actionTitle: 'Removing a Supreme Court or High Court Judge',
    category: 'Judiciary',
    articlesInvolved: ['Article 124(4)', 'Article 217(1)'],
    majorityRequiredId: 'special-type-2',
    housesInvolved: 'Both Houses Separately',
    keyNuance: 'Grounds: "Proved misbehaviour or incapacity" under Judges (Inquiry) Act 1968.',
    examinerTrap: 'Requires address presented to President in the SAME SESSION with Special Majority (Art 368 type).'
  },
  {
    id: 'act-5',
    actionTitle: 'Removing the Speaker or Deputy Speaker of Lok Sabha',
    category: 'Legislature',
    articlesInvolved: ['Article 94(c)'],
    majorityRequiredId: 'effective',
    housesInvolved: 'Lok Sabha Only',
    keyNuance: '14 days notice required. Speaker does not preside during consideration of removal resolution (Art 96).',
    examinerTrap: 'Passed by majority of all the then members (Effective Majority), NOT simple majority.'
  },
  {
    id: 'act-6',
    actionTitle: 'Approving / Extending National Emergency (Art 352)',
    category: 'Emergency',
    articlesInvolved: ['Article 352(4)'],
    majorityRequiredId: 'special-type-2',
    housesInvolved: 'Both Houses Separately',
    keyNuance: '44th CAA 1978 upgraded this from simple majority to special majority (total majority + 2/3 present & voting) within 1 month.',
    examinerTrap: 'Disapproving National Emergency requires only a SIMPLE MAJORITY in LOK SABHA (Art 352(8)).'
  },
  {
    id: 'act-7',
    actionTitle: 'Approving President’s Rule (Art 356) or Financial Emergency (Art 360)',
    category: 'Emergency',
    articlesInvolved: ['Article 356(3)', 'Article 360(2)'],
    majorityRequiredId: 'simple',
    housesInvolved: 'Both Houses Separately',
    keyNuance: 'Requires approval within 2 months (Art 356) or 2 months (Art 360) by simple majority.',
    examinerTrap: 'Candidates assume all emergencies require special majority. Arts 356 and 360 require ONLY SIMPLE MAJORITY.'
  },
  {
    id: 'act-8',
    actionTitle: 'Empowering Parliament to Legislate on State List (National Interest)',
    category: 'Federal & Amendments',
    articlesInvolved: ['Article 249'],
    majorityRequiredId: 'special-type-1',
    housesInvolved: 'Rajya Sabha Only',
    keyNuance: 'Valid for 1 year at a time; parliamentary law ceases 6 months after resolution expires.',
    examinerTrap: 'Lok Sabha does not pass the initiating resolution! Rajya Sabha passes it by 2/3rd present and voting.'
  },
  {
    id: 'act-9',
    actionTitle: 'Creating a New All-India Service (like Indian Judicial Service)',
    category: 'Federal & Amendments',
    articlesInvolved: ['Article 312'],
    majorityRequiredId: 'special-type-1',
    housesInvolved: 'Rajya Sabha Only',
    keyNuance: 'Rajya Sabha initiates resolution by 2/3rd present and voting; Parliament then enacts law.',
    examinerTrap: 'Like Art 249, initiating power belongs exclusively to the Rajya Sabha.'
  },
  {
    id: 'act-10',
    actionTitle: 'Creating or Abolishing a State Legislative Council (Vidhan Parishad)',
    category: 'Legislature',
    articlesInvolved: ['Article 169(1)'],
    majorityRequiredId: 'special-type-2',
    housesInvolved: 'State Assembly',
    keyNuance: 'State Assembly passes resolution by Special Majority (Art 368 type); Parliament then passes an Act by SIMPLE MAJORITY (Art 169(3)).',
    examinerTrap: 'Parliament’s law under Art 169 is NOT deemed an amendment under Art 368 and requires only a Simple Majority!'
  },
  {
    id: 'act-11',
    actionTitle: 'Amending the 7th Schedule or Election of President',
    category: 'Federal & Amendments',
    articlesInvolved: ['Article 368(2) Proviso'],
    majorityRequiredId: 'special-with-states',
    housesInvolved: 'Both Houses Separately',
    keyNuance: 'Requires Special Majority in Parliament + ratification by 50% of State Legislatures by Simple Majority.',
    examinerTrap: 'States ratify by simple majority, not special majority.'
  }
];

export const MAJORITY_DRILL_QUESTIONS: MajorityQuizQuestion[] = [
  {
    id: 'mq-1',
    question: 'A resolution for the removal of the Vice-President of India under Article 67(b) must be passed by which of the following majorities?',
    options: [
      'Special Majority of 2/3rd members present and voting in both Houses',
      'Effective Majority in Rajya Sabha and Simple Majority in Lok Sabha',
      'Absolute Majority in both Houses of Parliament',
      'Effective Majority in both the Rajya Sabha and the Lok Sabha'
    ],
    correctAnswer: 'Effective Majority in Rajya Sabha and Simple Majority in Lok Sabha',
    explanation: 'Article 67(b) states that a Vice-President may be removed by a resolution of the Council of States passed by a majority of all the then members (Effective Majority) and agreed to by the House of the People (Simple Majority).',
    trapAlert: 'Candidates assume both Houses require the same majority, or confuse it with Presidential impeachment.'
  },
  {
    id: 'mq-2',
    question: 'Which of the following majorities is strictly required for the impeachment of the President of India under Article 61?',
    options: [
      'A majority of total membership and 2/3rd of members present and voting',
      'Not less than two-thirds (2/3rd) of the TOTAL MEMBERSHIP of each House',
      'Simple majority in Lok Sabha followed by unanimous approval of Supreme Court bench',
      'Effective majority of all the then members of Parliament'
    ],
    correctAnswer: 'Not less than two-thirds (2/3rd) of the TOTAL MEMBERSHIP of each House',
    explanation: 'Article 61(2)(b) requires a majority of not less than two-thirds of the total membership of the House. This is the toughest majority in the Constitution.',
    trapAlert: 'Do not confuse with SC Judge removal under Art 124(4), which requires 2/3rd of present & voting!'
  },
  {
    id: 'mq-3',
    question: 'When a State Legislative Assembly passes a resolution requesting Parliament to abolish or create a Legislative Council under Article 169, what majority is required in Parliament to enact the law?',
    options: [
      'Special Majority under Article 368',
      'Simple Majority of members present and voting',
      'Special Majority of 2/3rd members present and voting in Rajya Sabha only',
      'Ratification by half of the other State Assemblies'
    ],
    correctAnswer: 'Simple Majority of members present and voting',
    explanation: 'Article 169(3) explicitly declares that no such law made by Parliament shall be deemed to be an amendment of this Constitution for the purposes of Article 368. Hence, Parliament passes it by an ordinary SIMPLE MAJORITY!',
    trapAlert: 'The State Assembly requires a Special Majority, but Parliament requires only a Simple Majority!'
  },
  {
    id: 'mq-4',
    question: 'Under the 44th Constitutional Amendment Act, 1978, a Proclamation of National Emergency under Article 352 must be approved by each House of Parliament by which majority?',
    options: [
      'Simple majority of members present and voting',
      'Majority of total membership and not less than 2/3rd of members present and voting',
      'Effective majority of sitting members',
      'Unanimous consent of the Cabinet'
    ],
    correctAnswer: 'Majority of total membership and not less than 2/3rd of members present and voting',
    explanation: 'Prior to 1978, a simple majority was sufficient. The 44th CAA amended Article 352(4) to require a Special Majority (Art 368 type: absolute majority + 2/3rd present and voting) in each House.',
    trapAlert: 'Remember: National Emergency approval = Special Majority. President’s Rule approval (Art 356) = Simple Majority.'
  },
  {
    id: 'mq-5',
    question: 'Under Article 368(2) proviso, when a Constitutional Amendment touches federal provisions (like the 7th Schedule), what majority is required in the State Legislatures to ratify the Bill?',
    options: [
      'Special Majority of 2/3rd of members present and voting',
      'Effective majority of all the then members',
      'Simple Majority of members present and voting',
      'Unanimous resolution passed by both Assembly and Council'
    ],
    correctAnswer: 'Simple Majority of members present and voting',
    explanation: 'The proviso to Article 368(2) states that the amendment must be ratified by resolutions passed by the Legislatures of not less than one-half of the States. In the State Legislatures, these resolutions are passed by an ordinary Simple Majority.',
    trapAlert: 'One of the most persistent traps in UPSC Prelims. Candidates assume federal ratification requires a special majority in states.'
  }
];
