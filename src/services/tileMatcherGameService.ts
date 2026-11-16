export interface TileCardPair {
  id: string;
  articleNumber: string;
  articleLabel: string;
  conceptLabel: string;
  part: string;
  explanation: string;
  mnemonicHint?: string;
}

export interface GameTile {
  uid: string; // unique tile identifier in the grid
  pairId: string;
  type: 'article' | 'concept';
  content: string;
  subContent?: string;
  part: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export type DeckTheme =
  | 'part3-rights'
  | 'part4-dpsp'
  | 'part5-union'
  | 'part6-federal'
  | 'part-special'
  | 'master-shuffle';

export interface GameDeck {
  id: DeckTheme;
  title: string;
  description: string;
  icon: string;
  pairs: TileCardPair[];
}

export const MATCH_PAIRS_PART3: TileCardPair[] = [
  {
    id: 'art-12',
    articleNumber: '12',
    articleLabel: 'Article 12',
    conceptLabel: 'Definition of "State" & Agency Test',
    part: 'Part III',
    explanation: 'Defines the State for writ enforcement; covers Govt, Parliament, local bodies, and instrumentalities (Ajay Hasia test).',
    mnemonicHint: '12 = Who can you sue for Fundamental Rights?'
  },
  {
    id: 'art-13',
    articleNumber: '13',
    articleLabel: 'Article 13',
    conceptLabel: 'Judicial Review, Eclipse & Severability',
    part: 'Part III',
    explanation: 'Any pre- or post-constitutional law in conflict with Part III is void to the extent of inconsistency.',
    mnemonicHint: '13 = The Unlucky 13 for unconstitutional statutes.'
  },
  {
    id: 'art-14',
    articleNumber: '14',
    articleLabel: 'Article 14',
    conceptLabel: 'Equality Before Law & Non-Arbitrariness',
    part: 'Part III',
    explanation: 'Guarantees equality before law and equal protection; Royappa doctrine strikes down state arbitrariness.',
    mnemonicHint: '14 = The Great Equalizer.'
  },
  {
    id: 'art-15',
    articleNumber: '15',
    articleLabel: 'Article 15',
    conceptLabel: 'Non-Discrimination & SEBC / EWS Quotas',
    part: 'Part III',
    explanation: 'Bars discrimination on 5 grounds; affirmative action under 15(4), 15(5), and 15(6) EWS.',
    mnemonicHint: '15 = 5 grounds of non-discrimination (Religion, Race, Caste, Sex, Place of Birth).'
  },
  {
    id: 'art-16',
    articleNumber: '16',
    articleLabel: 'Article 16',
    conceptLabel: 'Public Employment Equality & 50% Rule',
    part: 'Part III',
    explanation: 'Equal opportunity in public employment; reservations for backward classes subject to Indra Sawhney limits.',
    mnemonicHint: '16 = Sweet 16 enters Govt Service.'
  },
  {
    id: 'art-17',
    articleNumber: '17',
    articleLabel: 'Article 17',
    conceptLabel: 'Abolition of Untouchability (Absolute)',
    part: 'Part III',
    explanation: 'Untouchability abolished in all forms; enforceable against private individuals.',
    mnemonicHint: '17 = Danger (Khatra) for Untouchability.'
  },
  {
    id: 'art-19-1-a',
    articleNumber: '19(1)(a)',
    articleLabel: 'Article 19(1)(a)',
    conceptLabel: 'Freedom of Speech & Media Independence',
    part: 'Part III',
    explanation: 'Guarantees freedom of speech and expression, including press, dissent, and silent demonstration.',
    mnemonicHint: '19(1)(a) = Air your thoughts freely.'
  },
  {
    id: 'art-19-2',
    articleNumber: '19(2)',
    articleLabel: 'Article 19(2)',
    conceptLabel: 'Reasonable Restrictions on Free Speech',
    part: 'Part III',
    explanation: 'Permits 8 grounds of restriction: sovereignty, security, public order, decency, contempt, defamation, incitement, friendly states.',
    mnemonicHint: '19(2) = The 8 statutory fences on speech.'
  },
  {
    id: 'art-20-1',
    articleNumber: '20(1)',
    articleLabel: 'Article 20(1)',
    conceptLabel: 'Ex-Post Facto Retrospective Penal Bar',
    part: 'Part III',
    explanation: 'No conviction under retrospective criminal law or penalty greater than that applicable at time of offence.',
    mnemonicHint: '20(1) = 1st protection: Cannot punish past actions with new laws.'
  },
  {
    id: 'art-20-2',
    articleNumber: '20(2)',
    articleLabel: 'Article 20(2)',
    conceptLabel: 'Double Jeopardy (Autrefois Convict)',
    part: 'Part III',
    explanation: 'No person shall be prosecuted and punished for the same offence more than once.',
    mnemonicHint: '20(2) = 2nd protection: No 2 trials for 1 crime.'
  },
  {
    id: 'art-20-3',
    articleNumber: '20(3)',
    articleLabel: 'Article 20(3)',
    conceptLabel: 'Right Against Self-Incrimination',
    part: 'Part III',
    explanation: 'No person accused of an offence shall be compelled to be a witness against himself (Selvi v. State of Karnataka).',
    mnemonicHint: '20(3) = 3rd protection: You cannot be forced to testify against yourself.'
  },
  {
    id: 'art-21',
    articleNumber: '21',
    articleLabel: 'Article 21',
    conceptLabel: 'Life, Dignity, Privacy & Due Process',
    part: 'Part III',
    explanation: 'Expansive reservoir of dignity, privacy, fair procedure, speedy trial, and clean environment (Maneka & Puttaswamy).',
    mnemonicHint: '21 = The Golden Article of Life & Liberty.'
  },
  {
    id: 'art-21A',
    articleNumber: '21A',
    articleLabel: 'Article 21A',
    conceptLabel: 'Free & Compulsory Education (6–14 Yrs)',
    part: 'Part III',
    explanation: 'Inserted by 86th Amd 2002; statutory root of Right to Education (RTE) Act 2009.',
    mnemonicHint: '21A = 21 + Academy (Education for kids).'
  },
  {
    id: 'art-22',
    articleNumber: '22',
    articleLabel: 'Article 22',
    conceptLabel: '24-Hour Magistrate Production & Detention Limits',
    part: 'Part III',
    explanation: 'Grounds of arrest, lawyer consultation, 24-hr presentation before Magistrate, and Preventive Detention safeguards.',
    mnemonicHint: '22 = Catch-22 of arrest and detention.'
  },
  {
    id: 'art-23',
    articleNumber: '23',
    articleLabel: 'Article 23',
    conceptLabel: 'Prohibition of Begar & Human Trafficking',
    part: 'Part III',
    explanation: 'Prohibits human trafficking, forced labour, and begar; enforceable against both State and private actors.',
    mnemonicHint: '23 = Freedom from forced labor.'
  },
  {
    id: 'art-24',
    articleNumber: '24',
    articleLabel: 'Article 24',
    conceptLabel: 'Ban on Child Labour Under 14 in Factories',
    part: 'Part III',
    explanation: 'Prohibits employment of children below 14 years in factories, mines, or hazardous employment.',
    mnemonicHint: '24 = 24/7 protection for young children.'
  },
  {
    id: 'art-25',
    articleNumber: '25',
    articleLabel: 'Article 25',
    conceptLabel: 'Freedom of Conscience & Essential Religious Practices',
    part: 'Part III',
    explanation: 'Individual right to freely profess, practise, and propagate religion subject to public order, morality, and health.',
    mnemonicHint: '25 = Personal faith & conscience.'
  },
  {
    id: 'art-26',
    articleNumber: '26',
    articleLabel: 'Article 26',
    conceptLabel: 'Denominational Autonomy over Religious Property',
    part: 'Part III',
    explanation: 'Collective right of religious denominations to manage their own affairs in matters of religion and own property.',
    mnemonicHint: '26 = Denominational collective rights.'
  },
  {
    id: 'art-32',
    articleNumber: '32',
    articleLabel: 'Article 32',
    conceptLabel: 'Supreme Court Prerogative Writs (Heart & Soul)',
    part: 'Part III',
    explanation: 'Fundamental right to move Supreme Court for Habeas Corpus, Mandamus, Prohibition, Quo Warranto, and Certiorari.',
    mnemonicHint: '32 = Dr. Ambedkar: The very Heart and Soul of the Constitution.'
  }
];

export const MATCH_PAIRS_PART4_DPSP: TileCardPair[] = [
  {
    id: 'art-37',
    articleNumber: '37',
    articleLabel: 'Article 37',
    conceptLabel: 'DPSPs Fundamental in Governance though Non-Justiciable',
    part: 'Part IV',
    explanation: 'Directive Principles cannot be enforced by court writs, but are fundamental in the governance of the country.',
    mnemonicHint: '37 = Shield of Governance without court enforceability.'
  },
  {
    id: 'art-38',
    articleNumber: '38',
    articleLabel: 'Article 38',
    conceptLabel: 'Social Order for Promotion of People\'s Welfare',
    part: 'Part IV',
    explanation: 'Directs State to promote justice: social, economic, and political, and minimize income inequalities.',
    mnemonicHint: '38 = Welfare state blueprint.'
  },
  {
    id: 'art-39b',
    articleNumber: '39(b)',
    articleLabel: 'Article 39(b)',
    conceptLabel: 'Equitable Distribution of Material Resources',
    part: 'Part IV',
    explanation: 'Ownership and control of community material resources distributed to subserve the common good.',
    mnemonicHint: '39(b) = Resources distributed to Best serve public good.'
  },
  {
    id: 'art-39c',
    articleNumber: '39(c)',
    articleLabel: 'Article 39(c)',
    conceptLabel: 'Prevention of Wealth Concentration',
    part: 'Part IV',
    explanation: 'Operation of economic system must not result in concentration of wealth to common detriment.',
    mnemonicHint: '39(c) = Anti-Concentration of wealth.'
  },
  {
    id: 'art-39d',
    articleNumber: '39(d)',
    articleLabel: 'Article 39(d)',
    conceptLabel: 'Equal Pay for Equal Work for Men & Women',
    part: 'Part IV',
    explanation: 'Mandates equal wage remuneration for both men and women performing equal work.',
    mnemonicHint: '39(d) = Gender wage parity.'
  },
  {
    id: 'art-39A',
    articleNumber: '39A',
    articleLabel: 'Article 39A',
    conceptLabel: 'Equal Justice & Free Legal Aid (NALSA)',
    part: 'Part IV',
    explanation: 'Added by 42nd Amd 1976; statutory cornerstone of Legal Services Authorities Act & Lok Adalats.',
    mnemonicHint: '39A = Access to Advocates for the poor.'
  },
  {
    id: 'art-40',
    articleNumber: '40',
    articleLabel: 'Article 40',
    conceptLabel: 'Organisation of Village Panchayats (Gandhian)',
    part: 'Part IV',
    explanation: 'Gandhian directive to organize village panchayats as autonomous units of self-government.',
    mnemonicHint: '40 = Village Gram Swaraj.'
  },
  {
    id: 'art-43A',
    articleNumber: '43A',
    articleLabel: 'Article 43A',
    conceptLabel: 'Workers\' Participation in Industrial Management',
    part: 'Part IV',
    explanation: 'Added by 42nd Amd 1976; measures to secure labour participation in management boards.',
    mnemonicHint: '43A = Assembly of workers in boardrooms.'
  },
  {
    id: 'art-43B',
    articleNumber: '43B',
    articleLabel: 'Article 43B',
    conceptLabel: 'Promotion of Autonomous Co-operative Societies',
    part: 'Part IV',
    explanation: 'Added by 97th Amd 2011; state support for voluntary formation and democratic control of cooperatives.',
    mnemonicHint: '43B = Brotherhood of Co-operatives.'
  },
  {
    id: 'art-44',
    articleNumber: '44',
    articleLabel: 'Article 44',
    conceptLabel: 'Uniform Civil Code for the Citizens (UCC)',
    part: 'Part IV',
    explanation: 'State shall endeavour to secure for the citizens a uniform civil code across India.',
    mnemonicHint: '44 = Two identical 4s (Uniformity).'
  },
  {
    id: 'art-45',
    articleNumber: '45',
    articleLabel: 'Article 45',
    conceptLabel: 'Early Childhood Care & Education Below 6 Years',
    part: 'Part IV',
    explanation: 'Substituted by 86th Amd 2002; early childhood care and pre-school education until 6 years.',
    mnemonicHint: '45 = Focus on age under 6.'
  },
  {
    id: 'art-48A',
    articleNumber: '48A',
    articleLabel: 'Article 48A',
    conceptLabel: 'Protection of Environment, Forests & Wildlife',
    part: 'Part IV',
    explanation: 'Added by 42nd Amd 1976; duty of the State to protect forests, wildlife, and natural environment.',
    mnemonicHint: '48A = Green Air and forests.'
  },
  {
    id: 'art-50',
    articleNumber: '50',
    articleLabel: 'Article 50',
    conceptLabel: 'Separation of Judiciary from Executive',
    part: 'Part IV',
    explanation: 'Mandates institutional independence of judicial officers from executive magistracy.',
    mnemonicHint: '50 = 50-50 Split between Judiciary and Executive.'
  },
  {
    id: 'art-51A',
    articleNumber: '51A',
    articleLabel: 'Article 51A',
    conceptLabel: '11 Fundamental Duties of Citizens',
    part: 'Part IV-A',
    explanation: 'Added by 42nd (10 duties) and 86th (11th duty) Amendments; civic code of conduct.',
    mnemonicHint: '51A = Active civic duties.'
  }
];

export const MATCH_PAIRS_PART5_UNION: TileCardPair[] = [
  {
    id: 'art-52',
    articleNumber: '52',
    articleLabel: 'Article 52',
    conceptLabel: 'There Shall Be a President of India',
    part: 'Part V',
    explanation: 'Creates the constitutional office of the President as de jure Head of the Republic.',
    mnemonicHint: '52 = Supreme Head of State.'
  },
  {
    id: 'art-54',
    articleNumber: '54',
    articleLabel: 'Article 54',
    conceptLabel: 'Presidential Electoral College (Elected MPs & MLAs)',
    part: 'Part V',
    explanation: 'Comprises elected members of both Houses of Parliament and elected members of State Assemblies and Delhi/Puducherry.',
    mnemonicHint: '54 = Who casts votes for President.'
  },
  {
    id: 'art-61',
    articleNumber: '61',
    articleLabel: 'Article 61',
    conceptLabel: 'Impeachment of President (2/3 Special Majority)',
    part: 'Part V',
    explanation: 'Removal for violation of the Constitution; requires 2/3 of total membership in both Houses.',
    mnemonicHint: '61 = Ultimate trial of the President.'
  },
  {
    id: 'art-72',
    articleNumber: '72',
    articleLabel: 'Article 72',
    conceptLabel: 'Presidential Pardons & Death Sentence Remissions',
    part: 'Part V',
    explanation: 'Pardoning power covering court-martial verdicts and all death sentences.',
    mnemonicHint: '72 = Divine Clemency of the President.'
  },
  {
    id: 'art-74',
    articleNumber: '74',
    articleLabel: 'Article 74',
    conceptLabel: 'Council of Ministers Advice & One-Time Reconsideration',
    part: 'Part V',
    explanation: 'President acts on cabinet advice; 44th Amd proviso allows sending back advice once.',
    mnemonicHint: '74 = Cabinet supremacy brake.'
  },
  {
    id: 'art-75-3',
    articleNumber: '75(3)',
    articleLabel: 'Article 75(3)',
    conceptLabel: 'Collective Responsibility of Cabinet to Lok Sabha',
    part: 'Part V',
    explanation: 'Ministers swim and sink together; fall of ministry upon losing confidence in Lok Sabha.',
    mnemonicHint: '75(3) = Heartbeat of Parliamentary Democracy.'
  },
  {
    id: 'art-76',
    articleNumber: '76',
    articleLabel: 'Article 76',
    conceptLabel: 'Attorney-General for India & Highest Law Officer',
    part: 'Part V',
    explanation: 'Chief legal adviser to Union Govt; right of audience in all Indian courts.',
    mnemonicHint: '76 = Union Govt\'s Top Counsel.'
  },
  {
    id: 'art-100',
    articleNumber: '100',
    articleLabel: 'Article 100',
    conceptLabel: 'Quorum of Parliament (One-Tenth Rule)',
    part: 'Part V',
    explanation: 'Mandatory 10% attendance of total membership to constitute a sitting of either House.',
    mnemonicHint: '100 = 10% of 100 is 10 (Quorum).'
  },
  {
    id: 'art-105',
    articleNumber: '105',
    articleLabel: 'Article 105',
    conceptLabel: 'Parliamentary Privileges & Legislative Speech Immunity',
    part: 'Part V',
    explanation: 'Speech immunity inside Parliament; bribery exception established in Sita Soren (2024).',
    mnemonicHint: '105 = Immunity within the Chambers.'
  },
  {
    id: 'art-108',
    articleNumber: '108',
    articleLabel: 'Article 108',
    conceptLabel: 'Joint Sitting of Both Houses (Speaker Presiding)',
    part: 'Part V',
    explanation: 'Deadlock resolution on Ordinary Bills; summoned by President, presided by Lok Sabha Speaker.',
    mnemonicHint: '108 = Emergency ambulance call for stalled bills.'
  },
  {
    id: 'art-110',
    articleNumber: '110',
    articleLabel: 'Article 110',
    conceptLabel: 'Definition of Money Bills & Conclusive Certificate',
    part: 'Part V',
    explanation: 'Taxation, borrowing, Consolidated Fund outlays; conclusive certificate of Lok Sabha Speaker.',
    mnemonicHint: '110 = Money matter sovereign.'
  },
  {
    id: 'art-123',
    articleNumber: '123',
    articleLabel: 'Article 123',
    conceptLabel: 'Presidential Ordinances During Recess of Parliament',
    part: 'Part V',
    explanation: 'Temporary executive legislation; ceases 6 weeks from reassembly of Parliament.',
    mnemonicHint: '1-2-3 = Quick emergency law by the President.'
  },
  {
    id: 'art-124',
    articleNumber: '124',
    articleLabel: 'Article 124',
    conceptLabel: 'Establishment of Supreme Court & Collegium System',
    part: 'Part V',
    explanation: 'CJI and Supreme Court judges appointment and removal procedure; 65-year tenure.',
    mnemonicHint: '124 = Apex Judicial Court.'
  },
  {
    id: 'art-131',
    articleNumber: '131',
    articleLabel: 'Article 131',
    conceptLabel: 'Exclusive Federal Original Jurisdiction of Supreme Court',
    part: 'Part V',
    explanation: 'Exclusive disputes between Union and States or between two or more States.',
    mnemonicHint: '131 = Federal arena.'
  },
  {
    id: 'art-136',
    articleNumber: '136',
    articleLabel: 'Article 136',
    conceptLabel: 'Special Leave to Appeal (SLP Plenary Power)',
    part: 'Part V',
    explanation: 'Plenary discretionary appellate power against any judgment or order of any court or tribunal.',
    mnemonicHint: '136 = The Universal Appellate Gateway.'
  },
  {
    id: 'art-141',
    articleNumber: '141',
    articleLabel: 'Article 141',
    conceptLabel: 'Law Declared by Supreme Court Binding on All Courts',
    part: 'Part V',
    explanation: 'Doctrine of binding precedent (stare decisis) enforceable nationwide.',
    mnemonicHint: '141 = Law of the Land.'
  },
  {
    id: 'art-142',
    articleNumber: '142',
    articleLabel: 'Article 142',
    conceptLabel: 'Inherent Equitable Power to Do Complete Justice',
    part: 'Part V',
    explanation: 'Supreme Court power to issue orders necessary to accomplish complete justice.',
    mnemonicHint: '142 = Complete Justice reservoir.'
  },
  {
    id: 'art-143',
    articleNumber: '143',
    articleLabel: 'Article 143',
    conceptLabel: 'Presidential Advisory Reference to Supreme Court',
    part: 'Part V',
    explanation: 'President consults Supreme Court on substantial questions of law or public fact.',
    mnemonicHint: '143 = CJI advisory consultation.'
  },
  {
    id: 'art-148',
    articleNumber: '148',
    articleLabel: 'Article 148',
    conceptLabel: 'Comptroller and Auditor-General of India (CAG)',
    part: 'Part V',
    explanation: 'Independent guardian of public purse auditing Union and State receipts and expenditures.',
    mnemonicHint: '148 = Watchdog of public funds.'
  }
];

export const MATCH_PAIRS_FEDERAL_SPECIAL: TileCardPair[] = [
  {
    id: 'art-214',
    articleNumber: '214',
    articleLabel: 'Article 214',
    conceptLabel: 'High Courts for States & Common High Courts',
    part: 'Part VI',
    explanation: 'Establishes a High Court for each State; Parliament can create common High Courts.',
    mnemonicHint: '214 = State apex judicial bench.'
  },
  {
    id: 'art-226',
    articleNumber: '226',
    articleLabel: 'Article 226',
    conceptLabel: 'High Court Writs (Rights & Any Other Purpose)',
    part: 'Part VI',
    explanation: 'High Court writ jurisdiction; broader in scope than Art 32 as it covers ordinary legal rights.',
    mnemonicHint: '226 = Dual-scope State writ power.'
  },
  {
    id: 'art-227',
    articleNumber: '227',
    articleLabel: 'Article 227',
    conceptLabel: 'High Court Superintendence Over All Subordinate Courts',
    part: 'Part VI',
    explanation: 'Administrative and judicial superintendence over all lower courts and tribunals.',
    mnemonicHint: '227 = Supervisory eye of the High Court.'
  },
  {
    id: 'art-239AA',
    articleNumber: '239AA',
    articleLabel: 'Article 239AA',
    conceptLabel: 'Special Governance Provisions for NCT of Delhi',
    part: 'Part VIII',
    explanation: 'Delhi Legislative Assembly excluding Public Order, Police, and Land.',
    mnemonicHint: '239AA = National Capital governance charter.'
  },
  {
    id: 'art-246',
    articleNumber: '246',
    articleLabel: 'Article 246',
    conceptLabel: 'Seventh Schedule 3 Lists (Union, State, Concurrent)',
    part: 'Part XI',
    explanation: 'Division of legislative subject-matter between Union List I, State List II, and Concurrent List III.',
    mnemonicHint: '246 = The 3 Legislative Lists.'
  },
  {
    id: 'art-248',
    articleNumber: '248',
    articleLabel: 'Article 248',
    conceptLabel: 'Residuary Legislative Powers Vested in Parliament',
    part: 'Part XI',
    explanation: 'Exclusive power to make laws on subjects not enumerated in Concurrent or State Lists.',
    mnemonicHint: '248 = Leftover legislative basket.'
  },
  {
    id: 'art-254',
    articleNumber: '254',
    articleLabel: 'Article 254',
    conceptLabel: 'Doctrine of Repugnancy in Concurrent List',
    part: 'Part XI',
    explanation: 'Central law prevails over state law in Concurrent List unless state law has Presidential assent.',
    mnemonicHint: '254 = Repugnancy referee.'
  },
  {
    id: 'art-262',
    articleNumber: '262',
    articleLabel: 'Article 262',
    conceptLabel: 'Adjudication of Inter-State River Water Disputes',
    part: 'Part XI',
    explanation: 'Tribunal adjudication of river disputes; Parliament can exclude Supreme Court jurisdiction.',
    mnemonicHint: '262 = River water tribunal.'
  },
  {
    id: 'art-280',
    articleNumber: '280',
    articleLabel: 'Article 280',
    conceptLabel: 'Finance Commission for Vertical & Horizontal Devolution',
    part: 'Part XII',
    explanation: 'Quinquennial presidential body recommending tax-sharing between Union and States.',
    mnemonicHint: '280 = Tax-sharing calculator.'
  },
  {
    id: 'art-300A',
    articleNumber: '300A',
    articleLabel: 'Article 300A',
    conceptLabel: 'Constitutional Human Right to Property (Post-44th)',
    part: 'Part XII',
    explanation: 'No person shall be deprived of his property save by authority of law (shifted from Part III).',
    mnemonicHint: '300A = Property demoted from Fundamental to Legal Right.'
  },
  {
    id: 'art-311',
    articleNumber: '311',
    articleLabel: 'Article 311',
    conceptLabel: 'Civil Servants: No Subordinate Dismissal & Inquiry',
    part: 'Part XIV',
    explanation: 'Procedural shield: no dismissal by subordinate authority and mandatory departmental inquiry.',
    mnemonicHint: '311 = Bureaucrat\'s armor.'
  },
  {
    id: 'art-324',
    articleNumber: '324',
    articleLabel: 'Article 324',
    conceptLabel: 'Election Commission of India (Superintendence & Control)',
    part: 'Part XV',
    explanation: 'Autonomous constitutional repository for conducting Lok Sabha, Rajya Sabha, and State polls.',
    mnemonicHint: '324 = Ballot Guardian.'
  },
  {
    id: 'art-326',
    articleNumber: '326',
    articleLabel: 'Article 326',
    conceptLabel: 'Universal Adult Suffrage (Voting Age 18+)',
    part: 'Part XV',
    explanation: 'Constitutional voting right for every citizen aged 18+ (lowered from 21 by 61st Amd 1988).',
    mnemonicHint: '326 = Every adult gets a vote.'
  },
  {
    id: 'art-352',
    articleNumber: '352',
    articleLabel: 'Article 352',
    conceptLabel: 'National Emergency (War, Aggression, Armed Rebellion)',
    part: 'Part XVIII',
    explanation: 'Proclaimed on written Cabinet advice; requires 1-month Special Majority parliamentary approval.',
    mnemonicHint: '352 = Nation under threat.'
  },
  {
    id: 'art-356',
    articleNumber: '356',
    articleLabel: 'Article 356',
    conceptLabel: 'President\'s Rule in States (S.R. Bommai Standard)',
    part: 'Part XVIII',
    explanation: 'Failure of constitutional machinery; floor test mandatory; 1-year ceiling under 44th Amd.',
    mnemonicHint: '356 = State Government dismissal.'
  },
  {
    id: 'art-359',
    articleNumber: '359',
    articleLabel: 'Article 359',
    conceptLabel: 'Articles 20 & 21 Immune from Emergency Suspension',
    part: 'Part XVIII',
    explanation: '44th Amd 1978 barred suspension of rights to life, liberty, and criminal protections during emergencies.',
    mnemonicHint: '359 = Unbreakable shield for 20 & 21.'
  },
  {
    id: 'art-368',
    articleNumber: '368',
    articleLabel: 'Article 368',
    conceptLabel: 'Constituent Amending Power & Basic Structure Ceiling',
    part: 'Part XX',
    explanation: 'Power of Parliament to amend the Constitution bounded by the Basic Structure Doctrine.',
    mnemonicHint: '368 = The Living Constitution Engine.'
  },
  {
    id: 'art-370',
    articleNumber: '370',
    articleLabel: 'Article 370',
    conceptLabel: 'Temporary Provisions for J&K [Inoperative]',
    part: 'Part XXI',
    explanation: 'Asymmetric special status rendered inoperative by C.O. 272 & 273 in August 2019.',
    mnemonicHint: '370 = Inoperative temporary provision.'
  }
];

export const GAME_DECKS: GameDeck[] = [
  {
    id: 'part3-rights',
    title: 'Part III: Fundamental Rights & Writs',
    description: 'Master Articles 12 to 35, reasonable restrictions, and the 5 prerogative writs.',
    icon: 'Shield',
    pairs: MATCH_PAIRS_PART3
  },
  {
    id: 'part4-dpsp',
    title: 'Part IV & IV-A: DPSPs & Duties',
    description: 'Directive Principles, welfare socialist directives, UCC, and the 11 Fundamental Duties.',
    icon: 'Scale',
    pairs: MATCH_PAIRS_PART4_DPSP
  },
  {
    id: 'part5-union',
    title: 'Part V: The Union Executive & Judiciary',
    description: 'President, Cabinet, Ordinances, Parliament quorum, and Supreme Court powers.',
    icon: 'Building2',
    pairs: MATCH_PAIRS_PART5_UNION
  },
  {
    id: 'part6-federal',
    title: 'Part VI & XI: States & Federal Relations',
    description: 'High Courts, Governor, Legislative Lists, River Water disputes, and Delhi 239AA.',
    icon: 'GitBranch',
    pairs: MATCH_PAIRS_FEDERAL_SPECIAL.filter(p => ['Part VI', 'Part VIII', 'Part XI'].includes(p.part))
  },
  {
    id: 'part-special',
    title: 'Emergency, Finance, Services & Amendments',
    description: 'Arts 280, 300A, 311, 324, 352, 356, 359, and 368 Basic Structure ceiling.',
    icon: 'Zap',
    pairs: MATCH_PAIRS_FEDERAL_SPECIAL.filter(p => !['Part VI', 'Part VIII', 'Part XI'].includes(p.part))
  },
  {
    id: 'master-shuffle',
    title: 'All-Constitution Grand Shuffle (1 to 395)',
    description: 'The ultimate constitutional master drill across all 26 Parts of the Constitution.',
    icon: 'Sparkles',
    pairs: [
      ...MATCH_PAIRS_PART3,
      ...MATCH_PAIRS_PART4_DPSP,
      ...MATCH_PAIRS_PART5_UNION,
      ...MATCH_PAIRS_FEDERAL_SPECIAL
    ]
  }
];

// Helper to shuffle an array (Fisher-Yates)
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Generate tiles for a round
export function createGameTiles(deckTheme: DeckTheme, pairCount: number): GameTile[] {
  const deck = GAME_DECKS.find(d => d.id === deckTheme) || GAME_DECKS[0];
  const selectedPairs = shuffleArray(deck.pairs).slice(0, Math.min(pairCount, deck.pairs.length));

  const tiles: GameTile[] = [];

  selectedPairs.forEach((pair, idx) => {
    // Article Number Tile
    tiles.push({
      uid: `tile-${pair.id}-art-${idx}`,
      pairId: pair.id,
      type: 'article',
      content: pair.articleLabel,
      subContent: pair.part,
      part: pair.part,
      isFlipped: false,
      isMatched: false
    });

    // Concept / Doctrine Tile
    tiles.push({
      uid: `tile-${pair.id}-concept-${idx}`,
      pairId: pair.id,
      type: 'concept',
      content: pair.conceptLabel,
      subContent: pair.mnemonicHint,
      part: pair.part,
      isFlipped: false,
      isMatched: false
    });
  });

  return shuffleArray(tiles);
}

// Simple Web Audio Sound Effects Synthesizer (Zero Dependencies)
class AudioSynthesizer {
  private ctx: AudioContext | null = null;

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  playMatchSound() {
    const ctx = this.getContext();
    if (!ctx) return;
    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.1); // E5
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.2); // G5
      osc.frequency.exponentialRampToValueAtTime(1046.5, now + 0.3); // C6

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.45);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.45);
    } catch {
      // Audio fallback silent
    }
  }

  playMismatchSound() {
    const ctx = this.getContext();
    if (!ctx) return;
    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.exponentialRampToValueAtTime(120, now + 0.18);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.22);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.22);
    } catch {
      // Audio fallback silent
    }
  }

  playVictorySound() {
    const ctx = this.getContext();
    if (!ctx) return;
    try {
      const notes = [523.25, 659.25, 783.99, 1046.5, 1318.51];
      notes.forEach((freq, i) => {
        const now = ctx.currentTime + i * 0.1;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.4);
      });
    } catch {
      // Audio fallback silent
    }
  }
}

export const audioSynth = new AudioSynthesizer();
