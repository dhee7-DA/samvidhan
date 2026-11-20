export interface WorkoutCardPair {
  unionArticle: string;
  unionTitle: string;
  stateArticle: string;
  stateTitle: string;
  formula: string;
  keyDifference: string;
}

export interface WorkoutCase {
  caseName: string;
  citation: string;
  bench: string;
  year: number;
  goldenQuote: string;
  examTakeaway: string;
}

export interface WorkoutTrap {
  assertion: string;
  isTrue: boolean;
  trapType: string;
  articleAnchor: string;
  explanation: string;
}

export interface WorkoutQuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface DailyWorkout {
  dayId: number;
  title: string;
  themePillar: string;
  articlePair: WorkoutCardPair;
  landmarkCase: WorkoutCase;
  examinerTrap: WorkoutTrap;
  rapidDrill: WorkoutQuizQuestion[];
}

export const DAILY_WORKOUTS: DailyWorkout[] = [
  {
    dayId: 1,
    title: 'Executive Clemency & Mercy Jurisdiction',
    themePillar: 'Union vs State Executive',
    articlePair: {
      unionArticle: 'Article 72',
      unionTitle: 'President Pardon Powers',
      stateArticle: 'Article 161',
      stateTitle: 'Governor Pardon Powers',
      formula: '+89 Rule (72 + 89 = 161)',
      keyDifference: 'President can pardon death sentences and military court-martial sentences; Governor CANNOT pardon death sentences (only suspend/remit) nor court-martial verdicts.'
    },
    landmarkCase: {
      caseName: 'Kehar Singh v. Union of India',
      citation: '(1989) 1 SCC 204',
      bench: '5-Judge Constitution Bench',
      year: 1989,
      goldenQuote: 'The pardoning power under Article 72 is of widest amplitude. The President can scrutinize evidence afresh, but acts strictly on the advice of the Council of Ministers.',
      examTakeaway: 'Presidential pardon is subject to judicial review only on limited grounds: non-application of mind, mala fides, or extraneous considerations.'
    },
    examinerTrap: {
      assertion: 'A Governor under Article 161 can grant a complete absolute pardon for a death penalty sentence if the state Cabinet recommends it.',
      isTrue: false,
      trapType: 'Pardon Jurisdiction Trap',
      articleAnchor: 'Articles 72 & 161',
      explanation: 'FALSE! The power to grant an absolute pardon for death sentences is exclusively vested in the President under Article 72. Under Article 161, a Governor can only suspend, remit, or commute a death sentence, but cannot grant an absolute pardon.'
    },
    rapidDrill: [
      {
        question: 'Under which provision does the President exercise clemency regarding sentences passed by a Court Martial?',
        options: ['Article 72(1)(a)', 'Article 72(1)(c)', 'Article 161', 'Article 143'],
        correctIndex: 0,
        explanation: 'Article 72(1)(a) specifically grants the President power over court-martial punishments. The Governor has no such jurisdiction.'
      },
      {
        question: 'Which landmark 2014 judgment held that unexplained executive delay in deciding mercy petitions is a ground for commuting death penalty to life imprisonment?',
        options: ['Shatrughan Chauhan v. Union of India', 'Bachan Singh v. State of Punjab', 'Machhi Singh v. State of Punjab', 'Maru Ram v. Union of India'],
        correctIndex: 0,
        explanation: 'In Shatrughan Chauhan (2014), a 3-Judge bench held supervening delay in disposing mercy petitions constitutes violation of Article 21, warranting commutation.'
      },
      {
        question: 'Can the President grant an oral personal hearing to a condemned prisoner filing a mercy petition?',
        options: ['Yes, it is a mandatory constitutional right', 'No, Kehar Singh held there is no right to an oral hearing', 'Yes, but only with Supreme Court approval', 'Only if the prisoner is an alien'],
        correctIndex: 1,
        explanation: 'In Kehar Singh (1989), the Constitution Bench settled that there is no right to an oral personal hearing before the President under Article 72.'
      }
    ]
  },
  {
    dayId: 2,
    title: 'Council of Ministers & Cabinet Responsibility',
    themePillar: 'Parliamentary Executive Structure',
    articlePair: {
      unionArticle: 'Article 74',
      unionTitle: 'Union Council of Ministers to aid & advise President',
      stateArticle: 'Article 163',
      stateTitle: 'State Council of Ministers to aid & advise Governor',
      formula: '+89 Rule (74 + 89 = 163)',
      keyDifference: 'The President has NO discretionary power explicitly in Art 74 (44th Amd added 1-time reconsideration). But the Governor has constitutional discretion under Art 163(1) and Art 163(2).'
    },
    landmarkCase: {
      caseName: 'Shamsher Singh v. State of Punjab',
      citation: '(1974) 2 SCC 831',
      bench: '7-Judge Constitution Bench',
      year: 1974,
      goldenQuote: 'The President and Governor are constitutional or formal heads. They exercise their powers and functions only with and on the advice of their ministers.',
      examTakeaway: 'The President and Governor do not exercise personal executive authority. The real executive power resides in the Cabinet collectively responsible to the legislature.'
    },
    examinerTrap: {
      assertion: 'The advice tendered by Ministers to the President or Governor can be inquired into by the Supreme Court during judicial review.',
      isTrue: false,
      trapType: 'Cabinet Advice Immunity Trap',
      articleAnchor: 'Articles 74(2) & 163(3)',
      explanation: 'FALSE! Articles 74(2) and 163(3) create an absolute bar: the question whether any, and if so what, advice was tendered by Ministers shall not be inquired into by any court. However, in S.R. Bommai, the Court clarified that the material on which the advice was based IS open to judicial scrutiny.'
    },
    rapidDrill: [
      {
        question: 'Which Constitutional Amendment empowered the President to require the Council of Ministers to reconsider its advice once?',
        options: ['42nd Amendment Act, 1976', '44th Amendment Act, 1978', '91st Amendment Act, 2003', '52nd Amendment Act, 1985'],
        correctIndex: 1,
        explanation: 'The 44th Amendment (1978) inserted the proviso to Article 74(1), allowing the President to return advice once for reconsideration.'
      },
      {
        question: 'If any question arises whether any matter is or is not a matter regarding which the Governor is required to act in discretion, whose decision is final?',
        options: ['The President of India', 'The Governor in his sole discretion', 'The Chief Justice of the High Court', 'The State Legislative Assembly'],
        correctIndex: 1,
        explanation: 'Under Article 163(2), the decision of the Governor in his discretion shall be final, and the validity of anything done by the Governor shall not be called into question.'
      },
      {
        question: 'Under the 91st Amendment Act, what is the maximum percentage ceiling for the Council of Ministers (including PM/CM)?',
        options: ['10% of total House strength', '15% of total Lower House strength', '20% of total Parliament strength', '12% of total voting members'],
        correctIndex: 1,
        explanation: 'Articles 75(1A) and 164(1A) cap the Council of Ministers at 15% of the total strength of the Lok Sabha or Legislative Assembly, with a minimum of 12 ministers for States.'
      }
    ]
  },
  {
    dayId: 3,
    title: 'Top Legal Advisors & Right of Audience',
    themePillar: 'Constitutional Law Officers',
    articlePair: {
      unionArticle: 'Article 76',
      unionTitle: 'Attorney-General for India',
      stateArticle: 'Article 165',
      stateTitle: 'Advocate-General for the State',
      formula: '+89 Rule (76 + 89 = 165)',
      keyDifference: 'Attorney-General must be qualified to be appointed a Supreme Court Judge (Art 124(3)); Advocate-General must be qualified to be a High Court Judge (Art 217(2)). AG has right of audience in ALL courts across India.'
    },
    landmarkCase: {
      caseName: 'B.P. Singhal v. Union of India',
      citation: '(2010) 6 SCC 331',
      bench: '5-Judge Constitution Bench',
      year: 2010,
      goldenQuote: 'The doctrine of pleasure cannot be a license to act arbitrarily or whimsically without any compelling reason.',
      examTakeaway: 'Both AG and Advocate-General hold office during the pleasure of the President/Governor, but arbitrary removal without reason is subject to judicial review.'
    },
    examinerTrap: {
      assertion: 'The Attorney-General of India has the right to vote in Parliament during joint sittings of both Houses.',
      isTrue: false,
      trapType: 'Parliamentary Right to Vote Trap',
      articleAnchor: 'Article 88',
      explanation: 'FALSE! Under Article 88, the Attorney-General has the right to speak and take part in proceedings of either House or any Parliamentary committee, but WITHOUT the right to vote.'
    },
    rapidDrill: [
      {
        question: 'Under which Article does the Attorney-General have the right of audience in all courts in the territory of India?',
        options: ['Article 76(1)', 'Article 76(3)', 'Article 88', 'Article 105'],
        correctIndex: 1,
        explanation: 'Article 76(3) explicitly declares that in the performance of his duties, the Attorney-General shall have right of audience in all courts in the territory of India.'
      },
      {
        question: 'What is the corresponding Article for the Advocate-General speaking in the State Legislature?',
        options: ['Article 165', 'Article 177', 'Article 194', 'Article 166'],
        correctIndex: 1,
        explanation: 'Article 177 gives the Advocate-General the right to speak and take part in state legislative proceedings without a right to vote (+89 from Article 88: 88 + 89 = 177!).'
      },
      {
        question: 'Is the Attorney-General a full-time government servant or civil servant?',
        options: ['Yes, classified under Central Civil Services', 'No, he is not debarred from private legal practice', 'Yes, barred from all outside practice', 'Only when appointed on contract'],
        correctIndex: 1,
        explanation: 'The Attorney-General is not a full-time government servant and is not debarred from private practice, provided he does not advise or hold briefs against the Government of India.'
      }
    ]
  },
  {
    dayId: 4,
    title: 'Ordinance Making Powers & Executive Legislation',
    themePillar: 'Exceptional Legislative Authority',
    articlePair: {
      unionArticle: 'Article 123',
      unionTitle: 'President Ordinance Power',
      stateArticle: 'Article 213',
      stateTitle: 'Governor Ordinance Power',
      formula: '+90 Rule (123 + 90 = 213)',
      keyDifference: 'Article 123 falls in Chapter III (+90 Rule). Both require houses to not be in session and immediate action required. Governor needs Presidential instruction for certain subjects under Art 213(1) proviso.'
    },
    landmarkCase: {
      caseName: 'Krishna Kumar Singh v. State of Bihar',
      citation: '(2017) 3 SCC 1',
      bench: '7-Judge Constitution Bench',
      year: 2017,
      goldenQuote: 'The re-promulgation of ordinances without placing them before the legislature is a fraud on the Constitution and a subversion of democratic legislative process.',
      examTakeaway: 'Ordinance power is conditional, not an alternate plenary source of law. An ordinance that lapses without approval does not create irreversible permanent rights.'
    },
    examinerTrap: {
      assertion: 'An Ordinance promulgated by the President remains valid for an indefinite period until both Houses meet and pass a resolution disapproving it.',
      isTrue: false,
      trapType: 'Ordinance Lifespan Trap',
      articleAnchor: 'Article 123(2)(a)',
      explanation: 'FALSE! An Ordinance ceases to operate at the expiration of 6 WEEKS from the reassembly of Parliament, or earlier if disapproved. The maximum life of an ordinance without Parliamentary session is 6 months + 6 weeks.'
    },
    rapidDrill: [
      {
        question: 'In which landmark case did the Supreme Court first rule against the mass re-promulgation of ordinances in Bihar?',
        options: ['D.C. Wadhwa v. State of Bihar (1987)', 'A.K. Roy v. Union of India (1982)', 'R.K. Garg v. Union of India (1981)', 'Indira Gandhi v. Raj Narain (1975)'],
        correctIndex: 0,
        explanation: 'In D.C. Wadhwa (1987), the Constitution Bench held that repeated re-promulgation of ordinances without legislative passage is unconstitutional and a fraud on the Constitution.'
      },
      {
        question: 'Under Article 123(1), what is the prerequisite condition for the President to promulgate an Ordinance?',
        options: ['Both Houses must be dissolved', 'At least one House of Parliament is not in session', 'The Prime Minister must declare a financial crisis', 'The Supreme Court must grant prior leave'],
        correctIndex: 1,
        explanation: 'An ordinance can be issued when either of the two Houses is not in session, because an ordinary law cannot be enacted without both Houses.'
      },
      {
        question: 'Which Constitutional Amendment removed the 38th Amendment clause that made Presidential satisfaction in issuing an ordinance non-justiciable?',
        options: ['42nd Amendment', '44th Amendment', '52nd Amendment', '61st Amendment'],
        correctIndex: 1,
        explanation: 'The 44th Amendment (1978) deleted clause (4) of Article 123, restoring judicial review over whether conditions for issuing an ordinance actually existed.'
      }
    ]
  },
  {
    dayId: 5,
    title: 'Basic Structure Doctrine & The Limits of Amending Power',
    themePillar: 'Constituent Power vs Judicial Review',
    articlePair: {
      unionArticle: 'Article 368',
      unionTitle: 'Parliamentary Power to Amend Constitution',
      stateArticle: 'Article 13(2)',
      stateTitle: 'Laws in derogation of Fundamental Rights void',
      formula: 'The Dialectical Pair',
      keyDifference: 'Article 368 confers constituent amending power. Article 13(2) governs ordinary laws. Kesavananda held Art 368 cannot alter the unamendable Basic Structure.'
    },
    landmarkCase: {
      caseName: 'Kesavananda Bharati v. State of Kerala',
      citation: '(1973) 4 SCC 225',
      bench: '13-Judge Special Bench (7:6 Majority)',
      year: 1973,
      goldenQuote: 'The word "amendment" postulates that the Constitution must survive without loss of its identity. Parliament cannot alter the basic structure or framework.',
      examTakeaway: 'The largest bench in Indian history (13 judges) settled that constituent power is bounded by implied constitutional limitations.'
    },
    examinerTrap: {
      assertion: 'Any constitutional amendment that amends Fundamental Rights is per se invalid and automatically violates the Basic Structure.',
      isTrue: false,
      trapType: 'Basic Structure Scope Trap',
      articleAnchor: 'Article 368 & Part III',
      explanation: 'FALSE! Parliament CAN amend Fundamental Rights under Article 368, provided such an amendment does not destroy or abrogate the Basic Structure (e.g., 86th Amd added Art 21A, 103rd Amd added Art 15(6)/16(6), both upheld).'
    },
    rapidDrill: [
      {
        question: 'Which constitutional amendment sought to eliminate judicial review of amendments by adding clauses (4) and (5) to Article 368?',
        options: ['24th Amendment', '42nd Amendment', '44th Amendment', '99th Amendment'],
        correctIndex: 1,
        explanation: 'The 42nd Amendment (1976) inserted Art 368(4) and (5) asserting unlimited amending power. Both clauses were struck down in Minerva Mills (1980).'
      },
      {
        question: 'In which case did the Supreme Court hold that all laws placed in the Ninth Schedule after 24th April 1973 are subject to judicial review?',
        options: ['I.R. Coelho v. State of Tamil Nadu (2007)', 'Waman Rao v. Union of India (1981)', 'Indira Gandhi v. Raj Narain (1975)', 'S.P. Sampath Kumar (1987)'],
        correctIndex: 0,
        explanation: 'In I.R. Coelho (2007), a 9-Judge Bench held Ninth Schedule laws post-Kesavananda must satisfy the Basic Structure test if they violate Arts 14, 19, or 21.'
      },
      {
        question: 'Which judge provided the decisive 7th majority vote in Kesavananda Bharati by propounding the Basic Structure Doctrine?',
        options: ['Sikri C.J.', 'H.R. Khanna J.', 'K.S. Hegde J.', 'A.N. Ray J.'],
        correctIndex: 1,
        explanation: 'Justice H.R. Khanna delivered the pivotal judgment holding that amending power does not extend to abrogating the democratic, secular, and republican identity of the Constitution.'
      }
    ]
  }
];

export function getTodayWorkout(): DailyWorkout {
  // Use day of year or day of month for cyclic daily workout
  const now = new Date();
  const dayOfMonth = now.getDate();
  const index = (dayOfMonth - 1) % DAILY_WORKOUTS.length;
  return DAILY_WORKOUTS[index];
}
