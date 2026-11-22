export interface JudgeArchetype {
  id: string;
  name: string;
  title: string;
  archetype: string;
  avatar: string;
  biasDescription: string;
  preferredArguments: string[];
  dislikedArguments: string[];
}

export interface ArgumentCard {
  id: string;
  title: string;
  cardType: 'DOCTRINE' | 'PRECEDENT' | 'PROPORTIONALITY' | 'STATUTE';
  quote: string;
  citation: string;
  petitionerPower: number; // 1-10
  respondentPower: number; // 1-10
  targetJudges: string[]; // judgeIds who love this card
  antagonistJudges: string[]; // judgeIds who reject this card
  description: string;
}

export interface MootInterlocutoryQuestion {
  judgeId: string;
  questionText: string;
  timeLimitSec: number;
  options: {
    id: string;
    text: string;
    isOptimalForPetitioner: boolean;
    isOptimalForRespondent: boolean;
    judgeReaction: string;
  }[];
}

export interface MootCaseDossier {
  id: string;
  caseTitle: string;
  popularName: string;
  year: number;
  coreArticles: string[];
  backgroundStory: string;
  petitionerBrief: string;
  respondentBrief: string;
  round1Prompt: string;
  round2Prompt: string;
  interlocutoryChallenge: MootInterlocutoryQuestion;
  benchmarkPrecedent: string;
  actualSupremeCourtVerdict: string;
}

// =========================================================================
// 1. THE 5-JUDGE CONSTITUTION BENCH ARCHETYPES
// =========================================================================
export const BENCH_JUDGES: JudgeArchetype[] = [
  {
    id: 'judge-living-const',
    name: 'Justice D.Y. Chandrachud',
    title: 'Chief Justice of India (Presiding)',
    archetype: 'The Living Constitutionalist',
    avatar: '👨‍⚖️',
    biasDescription: 'Receptive to constitutional morality, proportionality, transformative equality, and human rights expansiveness.',
    preferredArguments: ['PROPORTIONALITY', 'DOCTRINE'],
    dislikedArguments: ['Blind executive expediency', 'Obsolete mechanical textualism']
  },
  {
    id: 'judge-strict-text',
    name: 'Justice Bela M. Trivedi',
    title: 'Senior Puisne Judge',
    archetype: 'The Strict Textualist / Originalist',
    avatar: '👩‍⚖️',
    biasDescription: 'Insists on verbatim statutory clauses and strict legislative intent; refuses to create new constitutional exceptions.',
    preferredArguments: ['STATUTE'],
    dislikedArguments: ['Unbounded judicial expansion', 'Subjective constitutional morality']
  },
  {
    id: 'judge-social-justice',
    name: 'Justice B.R. Gavai',
    title: 'Puisne Judge',
    archetype: 'The Substantive Equality & Affirmative Action Jurist',
    avatar: '👨‍⚖️',
    biasDescription: 'Champions substantive equality over formal equality; receptive to sub-classification and grassroots social reality.',
    preferredArguments: ['DOCTRINE', 'PRECEDENT'],
    dislikedArguments: ['Formal equality that freezes historical disadvantage']
  },
  {
    id: 'judge-pragmatist',
    name: 'Justice Sanjiv Khanna',
    title: 'Puisne Judge',
    archetype: 'The Pragmatic Institution-Builder',
    avatar: '👨‍⚖️',
    biasDescription: 'Tests remedies for workable feasibility, financial balance, administrative practicality, and electoral transparency.',
    preferredArguments: ['PROPORTIONALITY', 'STATUTE'],
    dislikedArguments: ['Ivory-tower academic doctrines lacking real-world enforcement']
  },
  {
    id: 'judge-federalism',
    name: 'Justice Surya Kant',
    title: 'Puisne Judge',
    archetype: 'The Federal Balance & Procedural Due Process Jurist',
    avatar: '👨‍⚖️',
    biasDescription: 'Zealously guards State legislative autonomy under the Seventh Schedule and enforces strict procedural safeguards.',
    preferredArguments: ['STATUTE', 'PRECEDENT'],
    dislikedArguments: ['Centralization that treats State Assemblies as subordinate departments']
  }
];

// =========================================================================
// 2. MOOT CASE DOSSIERS
// =========================================================================
export const MOOT_CASES: MootCaseDossier[] = [
  {
    id: 'moot-case-electoral-bonds',
    caseTitle: 'Association for Democratic Reforms (ADR) v. Union of India',
    popularName: 'The Electoral Bonds Constitutional Challenge',
    year: 2024,
    coreArticles: ['Article 19(1)(a)', 'Article 14', 'Article 21'],
    backgroundStory:
      'The Union Government enacted the Electoral Bond Scheme via amendments to the RPA, Companies Act, and Income Tax Act, removing donor transparency and the 7.5% profit cap on corporate donations, claiming to eradicate cash black money.',
    petitionerBrief:
      'The Scheme fundamentally extinguishes the voter\'s fundamental Right to Information under Article 19(1)(a), enabling quid pro quo corruption and creating an unlevel electoral playing field contrary to the basic feature of free and fair elections.',
    respondentBrief:
      'The State has a compelling legitimate interest in incentivizing clean banking-channel donations and protecting political donors from post-electoral retribution and state harassment, satisfying the proportionality test.',
    round1Prompt:
      'Round 1: Open your case on the scope of the voter\'s Article 19(1)(a) right versus donor privacy. Select your lead constitutional card:',
    round2Prompt:
      'Round 2: Address the 4-prong Proportionality Test (Legitimate Goal, Rational Nexus, Necessity, and Balancing). Play your decisive submission:',
    interlocutoryChallenge: {
      judgeId: 'judge-living-const',
      questionText:
        'Counsel, the Solicitor General argues that donor anonymity is essential to protect citizens from political retribution by rival parties. Does Article 19(1)(a) completely eclipse informational privacy?',
      timeLimitSec: 15,
      options: [
        {
          id: 'ans-1',
          text: 'Voter transparency is supreme; under the Proportionality Test, the Least Restrictive Measure exists (e.g. Electoral Trusts) which achieves clean money without blindfolding the electorate.',
          isOptimalForPetitioner: true,
          isOptimalForRespondent: false,
          judgeReaction: 'The Chief Justice nods in agreement: "Precisely, the scheme fails the Necessity prong."'
        },
        {
          id: 'ans-2',
          text: 'Donors have an absolute right to commercial secrecy under Article 21 that overrides parliamentary election transparency.',
          isOptimalForPetitioner: false,
          isOptimalForRespondent: true,
          judgeReaction: 'Justice Khanna frowns: "Commercial secrecy cannot trump democratic accountability."'
        },
        {
          id: 'ans-3',
          text: 'The Election Commission has unlimited administrative power to publish what it wants regardless of the statute.',
          isOptimalForPetitioner: false,
          isOptimalForRespondent: false,
          judgeReaction: 'Justice Trivedi interrupts: "Administrative power cannot operate outside statutory boundaries, Counsel!"'
        }
      ]
    },
    benchmarkPrecedent: 'Association for Democratic Reforms v. Union of India ((2024) 5 SCC 1)',
    actualSupremeCourtVerdict:
      'Unanimous 5:0 Verdict authored by CJI Chandrachud and Justice Sanjiv Khanna striking down the Electoral Bond Scheme as violative of Article 19(1)(a).'
  },
  {
    id: 'moot-case-governor-assent',
    caseTitle: 'State of Punjab v. Principal Secretary to Governor',
    popularName: 'The Governor\'s Pocket Veto & Legislative Deadlock',
    year: 2023,
    coreArticles: ['Article 200', 'Article 163', 'Article 174', 'Article 212'],
    backgroundStory:
      'The Governor of Punjab withheld assent to bills passed by the State Assembly and refused to act on them, claiming that the assembly session reconvened by the Speaker was illegal. Governance came to a standstill.',
    petitionerBrief:
      'The Governor cannot sit on bills passed by an elected legislature indefinitely. Under the First Proviso to Article 200, if the Governor withholds assent, he MUST return the bill "as soon as possible", and upon reconsideration, he has no veto.',
    respondentBrief:
      'Article 200 does not prescribe a rigid timetable. The Governor has independent discretion under Article 163(2) and can withhold assent to unconstitutional or procedurally flawed legislative proceedings without judicial mandamus.',
    round1Prompt:
      'Round 1: Challenge the Governor\'s claim of unfettered pocket veto under Article 200. Deploy your foundational constitutional principle:',
    round2Prompt:
      'Round 2: Address whether the Speaker\'s adjournment of the House sine die and subsequent reconvening is justiciable under Article 212:',
    interlocutoryChallenge: {
      judgeId: 'judge-federalism',
      questionText:
        'Counsel! Can the Governor simply withhold assent under the substantive clause of Article 200 and refuse to return the bill to the Legislature under the Proviso?',
      timeLimitSec: 15,
      options: [
        {
          id: 'ans-gov-1',
          text: 'NO, My Lords! Withholding assent is inextricably linked to the mandatory return under the First Proviso. Withholding without returning is an unconstitutional pocket veto subverting parliamentary democracy.',
          isOptimalForPetitioner: true,
          isOptimalForRespondent: false,
          judgeReaction: 'Justice Surya Kant nods: "A constitutional Governor cannot be an unelected super-legislature."'
        },
        {
          id: 'ans-gov-2',
          text: 'YES, the Governor has royal prerogative inherited from the Government of India Act 1935 to bury any state bill.',
          isOptimalForPetitioner: false,
          isOptimalForRespondent: false,
          judgeReaction: 'The entire Bench recoils: "Colonial prerogatives have no place in our constitutional republic!"'
        },
        {
          id: 'ans-gov-3',
          text: 'The Governor represents the Union and acts as an executive check to maintain national unity above state legislatures.',
          isOptimalForPetitioner: false,
          isOptimalForRespondent: true,
          judgeReaction: 'Justice Trivedi notes: "The Governor is a constitutional head, not a political gatekeeper."'
        }
      ]
    },
    benchmarkPrecedent: 'State of Punjab v. Principal Secretary to Governor ((2023) 10 SCC 1)',
    actualSupremeCourtVerdict:
      'Unanimous 3-Judge Bench per Chandrachud CJI holding that a Governor cannot sit on bills indefinitely and withholding assent mandatorily triggers returning the bill to the House.'
  },
  {
    id: 'moot-case-bribery-immunity',
    caseTitle: 'Sita Soren v. Union of India',
    popularName: 'Overruling Legislative Bribery Immunity (P.V. Narasimha Rao Review)',
    year: 2024,
    coreArticles: ['Article 105(2)', 'Article 194(2)', 'Sec 7 Prevention of Corruption Act'],
    backgroundStory:
      'An MLA accepted a bribe to vote for an independent candidate in the Rajya Sabha election, but ultimately voted for her own party candidate. She claimed absolute criminal immunity under Article 194(2) relying on the 1998 5-judge precedent in P.V. Narasimha Rao.',
    petitionerBrief:
      'Parliamentary privilege under Articles 105(2) and 194(2) was designed to protect fearless legislative debate and democratic deliberation, NOT to confer criminal immunity for taking bribes to subvert the vote. Bribery is complete upon acceptance.',
    respondentBrief:
      'Stare decisis demands upholding the 25-year settled precedent in P.V. Narasimha Rao. The phrase "in respect of anything said or any vote given" creates an expansive constitutional immunity shielding legislators from executive harassment.',
    round1Prompt:
      'Round 1: Challenge the ratio in P.V. Narasimha Rao (1998). How does bribery relate to the core nexus of legislative speech?',
    round2Prompt:
      'Round 2: Address the statutory criminal offence under the Prevention of Corruption Act versus constitutional privileges:',
    interlocutoryChallenge: {
      judgeId: 'judge-strict-text',
      questionText:
        'Counsel, Article 105(2) says no MP shall be liable to any proceedings "in respect of anything said or any vote given". How can criminal courts try a legislator without violating the plain textual immunity?',
      timeLimitSec: 15,
      options: [
        {
          id: 'ans-bribe-1',
          text: 'Because the criminal offence of bribery under the PC Act is complete the moment the bribe is accepted! It is independent of whether the vote is subsequently cast or speech delivered.',
          isOptimalForPetitioner: true,
          isOptimalForRespondent: false,
          judgeReaction: 'Justice Trivedi concedes: "The criminal act occurs outside the legislative chamber."'
        },
        {
          id: 'ans-bribe-2',
          text: 'Parliamentary privileges expire automatically whenever a criminal charge sheet is filed by the CBI.',
          isOptimalForPetitioner: false,
          isOptimalForRespondent: false,
          judgeReaction: 'Justice Khanna shakes his head: "Privileges are constitutional; police cannot extinguish them."'
        },
        {
          id: 'ans-bribe-3',
          text: 'P.V. Narasimha Rao correctly recognized that politicians need immunity from corrupt accusations to maintain a stable government.',
          isOptimalForPetitioner: false,
          isOptimalForRespondent: true,
          judgeReaction: 'The Chief Justice interjects: "Stability founded on corruption is the antithesis of constitutional democracy!"'
        }
      ]
    },
    benchmarkPrecedent: 'Sita Soren v. Union of India ((2024) 5 SCC 629)',
    actualSupremeCourtVerdict:
      'Unanimous 7:0 7-Judge Constitution Bench explicitly overruling P.V. Narasimha Rao (1998) and holding bribery is not protected by Articles 105(2) or 194(2).'
  }
];

// =========================================================================
// 3. ARGUMENT CARDS DECK
// =========================================================================
export const ARGUMENT_CARDS_DECK: ArgumentCard[] = [
  {
    id: 'card-proportionality-test',
    title: 'The 4-Prong Proportionality Strike',
    cardType: 'PROPORTIONALITY',
    quote: '"Every state measure encroaching on Fundamental Rights must prove: Legitimate Goal, Rational Nexus, Least Restrictive Measure, and Balancing."',
    citation: 'Modern Dental College (2016) & K.S. Puttaswamy (2017)',
    petitionerPower: 9,
    respondentPower: 4,
    targetJudges: ['judge-living-const', 'judge-pragmatist'],
    antagonistJudges: ['judge-strict-text'],
    description: 'Devastating against blanket executive bans and secrecy schemes lacking least restrictive alternatives.'
  },
  {
    id: 'card-manifest-arbitrariness',
    title: 'Doctrine of Manifest Arbitrariness',
    cardType: 'DOCTRINE',
    quote: '"Plenary legislation can be struck down under Article 14 if it is capricious, irrational, or lacks determining constitutional principle."',
    citation: 'Shayara Bano v. Union of India ((2017) 9 SCC 1)',
    petitionerPower: 8,
    respondentPower: 3,
    targetJudges: ['judge-living-const', 'judge-social-justice'],
    antagonistJudges: ['judge-strict-text'],
    description: 'Blows past old McDowell restrictions and strikes at irrational legislative exemptions.'
  },
  {
    id: 'card-presumption-constitutionality',
    title: 'Presumption of Constitutionality',
    cardType: 'STATUTE',
    quote: '"The Court must always presume that the Legislature understands and correctly appreciates the needs of its own people."',
    citation: 'Ram Krishna Dalmia v. Justice Tendolkar (AIR 1958 SC 538)',
    petitionerPower: 3,
    respondentPower: 9,
    targetJudges: ['judge-strict-text', 'judge-federalism'],
    antagonistJudges: ['judge-living-const'],
    description: 'The golden shield for the Solicitor General defending validly enacted parliamentary statutes.'
  },
  {
    id: 'card-basic-structure-supremacy',
    title: 'Basic Structure Invalidation Doctrine',
    cardType: 'PRECEDENT',
    quote: '"Parliament has wide amending power, but cannot emasculate the basic institutional identity of democratic governance."',
    citation: 'Kesavananda Bharati v. State of Kerala ((1973) 4 SCC 225)',
    petitionerPower: 10,
    respondentPower: 2,
    targetJudges: ['judge-living-const', 'judge-social-justice', 'judge-federalism'],
    antagonistJudges: ['judge-strict-text'],
    description: 'The ultimate constitutional nuclear option to strike down amendments destroying judicial review or free elections.'
  },
  {
    id: 'card-compelling-state-interest',
    title: 'Compelling State Interest & Public Order',
    cardType: 'STATUTE',
    quote: '"Individual liberties must yield to national integrity, economic security, and the overriding prevention of corruption."',
    citation: 'Subramanian Swamy v. Union of India ((2016) 7 SCC 221)',
    petitionerPower: 4,
    respondentPower: 8,
    targetJudges: ['judge-strict-text', 'judge-pragmatist'],
    antagonistJudges: ['judge-living-const'],
    description: 'Strong state defense establishing valid public order restrictions under Article 19(2).'
  },
  {
    id: 'card-stare-decisis-stability',
    title: 'Doctrine of Stare Decisis & Legal Certainty',
    cardType: 'PRECEDENT',
    quote: '"Settled law should not be lightly disrupted merely because another bench takes an alternative view."',
    citation: 'Bengal Immunity Co. v. State of Bihar (AIR 1955 SC 661)',
    petitionerPower: 3,
    respondentPower: 9,
    targetJudges: ['judge-strict-text', 'judge-pragmatist'],
    antagonistJudges: ['judge-social-justice'],
    description: 'Shields longstanding precedents (like PV Narasimha Rao or Chinnaiah) from being overturned.'
  },
  {
    id: 'card-substantive-equality',
    title: 'Substantive Equality & Transformative Redress',
    cardType: 'DOCTRINE',
    quote: '"Treating unequals as equals perpetuates inequality. Equality is a dynamic concept demanding progressive affirmative action."',
    citation: 'E.P. Royappa (1974) & State of Punjab v. Davinder Singh (2024)',
    petitionerPower: 9,
    respondentPower: 5,
    targetJudges: ['judge-social-justice', 'judge-living-const'],
    antagonistJudges: ['judge-strict-text'],
    description: 'Overcomes formalistic equality arguments and justifies state affirmative sub-classification.'
  },
  {
    id: 'card-federal-compact',
    title: 'Cooperative Federalism & State Autonomy',
    cardType: 'DOCTRINE',
    quote: '"The Union and the States are co-equal partners in the constitutional schema; States are not appendages of the Centre."',
    citation: 'S.R. Bommai (1994) & State of Punjab (2023)',
    petitionerPower: 8,
    respondentPower: 4,
    targetJudges: ['judge-federalism', 'judge-living-const'],
    antagonistJudges: ['judge-pragmatist'],
    description: 'Defends state assembly sovereignty against gubernatorial delay and central encroachments.'
  }
];
