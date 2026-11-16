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
  | 'schedules'
  | 'doctrines'
  | 'landmark-cases'
  | 'amendments'
  | 'master-shuffle';

export interface GameDeck {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'Constitutional Parts' | 'Constitutional Architecture' | 'Jurisprudence & Precedents' | 'Grand Shuffle';
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

// THE 12 SCHEDULES OF THE CONSTITUTION
export const MATCH_PAIRS_SCHEDULES: TileCardPair[] = [
  {
    id: 'sch-1',
    articleNumber: 'Schedule I',
    articleLabel: 'First Schedule',
    conceptLabel: 'Territories of 28 States & 8 Union Territories',
    part: 'Schedules',
    explanation: 'Lists the names of the States and Union Territories and their respective territorial extents.',
    mnemonicHint: 'T in TEARS: Territories.'
  },
  {
    id: 'sch-2',
    articleNumber: 'Schedule II',
    articleLabel: 'Second Schedule',
    conceptLabel: 'Salaries & Emoluments of Constitutional Dignitaries',
    part: 'Schedules',
    explanation: 'Salaries of President, Governors, Judges of SC/HC, CAG, Speaker, and Chairman.',
    mnemonicHint: 'E in TEARS: Emoluments & Salaries.'
  },
  {
    id: 'sch-3',
    articleNumber: 'Schedule III',
    articleLabel: 'Third Schedule',
    conceptLabel: 'Forms of Oaths & Solemn Affirmations',
    part: 'Schedules',
    explanation: 'Prescribed oath formats for Ministers, Judges, MPs, MLAs, and CAG before entering office.',
    mnemonicHint: 'A in TEARS: Affirmations & Oaths.'
  },
  {
    id: 'sch-4',
    articleNumber: 'Schedule IV',
    articleLabel: 'Fourth Schedule',
    conceptLabel: 'Allocation of Rajya Sabha Seats to States & UTs',
    part: 'Schedules',
    explanation: 'Distribution of the 238 state and UT representative seats in the Council of States.',
    mnemonicHint: 'R in TEARS: Rajya Sabha Seat Quotas.'
  },
  {
    id: 'sch-5',
    articleNumber: 'Schedule V',
    articleLabel: 'Fifth Schedule',
    conceptLabel: 'Administration of Scheduled Areas & STs (10 States)',
    part: 'Schedules',
    explanation: 'Tribes Advisory Councils and Governor\'s special powers across mainland scheduled areas.',
    mnemonicHint: 'S in TEARS: Scheduled Areas.'
  },
  {
    id: 'sch-6',
    articleNumber: 'Schedule VI',
    articleLabel: 'Sixth Schedule',
    conceptLabel: 'Tribal Autonomous District Councils (Assam, Meghalaya, Tripura, Mizoram)',
    part: 'Schedules',
    explanation: 'Autonomous District Councils (ADCs) in AMTM north-eastern tribal areas with legislative powers.',
    mnemonicHint: 'O in OF: Other Tribal Areas (AMTM).'
  },
  {
    id: 'sch-7',
    articleNumber: 'Schedule VII',
    articleLabel: 'Seventh Schedule',
    conceptLabel: 'Federal Legislative Lists (Union, State, Concurrent)',
    part: 'Schedules',
    explanation: 'List I (Union: 100 items), List II (State: 61 items), and List III (Concurrent: 52 items).',
    mnemonicHint: 'F in OF: Federal Lists.'
  },
  {
    id: 'sch-8',
    articleNumber: 'Schedule VIII',
    articleLabel: 'Eighth Schedule',
    conceptLabel: '22 Officially Recognized Languages of India',
    part: 'Schedules',
    explanation: 'Originally 14 languages; expanded to 22 by 21st, 71st, and 92nd Constitutional Amendments.',
    mnemonicHint: 'O in OLD: Official Languages.'
  },
  {
    id: 'sch-9',
    articleNumber: 'Schedule IX',
    articleLabel: 'Ninth Schedule',
    conceptLabel: 'Validation of Land Reform Acts (Article 31B)',
    part: 'Schedules',
    explanation: 'Immunized listed laws from Part III challenge (subject to I.R. Coelho 2007 judicial review cutoff).',
    mnemonicHint: 'L in OLD: Land Reform Immunities.'
  },
  {
    id: 'sch-10',
    articleNumber: 'Schedule X',
    articleLabel: 'Tenth Schedule',
    conceptLabel: 'Anti-Defection Law for Legislators (52nd Amd 1985)',
    part: 'Schedules',
    explanation: 'Disqualification of MPs and MLAs on ground of defection; Speaker decisions reviewable under Kihoto Hollohan.',
    mnemonicHint: 'D in OLD: Defection Disqualifications.'
  },
  {
    id: 'sch-11',
    articleNumber: 'Schedule XI',
    articleLabel: 'Eleventh Schedule',
    conceptLabel: '29 Functional Subjects of Panchayats (73rd Amd 1992)',
    part: 'Schedules',
    explanation: 'Endows rural local self-governments with powers over agriculture, water, rural housing, and health.',
    mnemonicHint: 'P in PM: Panchayats (29 subjects).'
  },
  {
    id: 'sch-12',
    articleNumber: 'Schedule XII',
    articleLabel: 'Twelfth Schedule',
    conceptLabel: '18 Urban Functional Subjects of Municipalities (74th Amd 1992)',
    part: 'Schedules',
    explanation: 'Urban planning, water supply, town roads, and public sanitation for urban local bodies.',
    mnemonicHint: 'M in PM: Municipalities (18 subjects).'
  }
];

// THE 10 LANDMARK CONSTITUTIONAL DOCTRINES
export const MATCH_PAIRS_DOCTRINES: TileCardPair[] = [
  {
    id: 'doc-basic-structure',
    articleNumber: 'Basic Structure',
    articleLabel: 'Basic Structure Doctrine',
    conceptLabel: 'Kesavananda Bharati (1973) & Minerva Mills (1980)',
    part: 'Doctrines',
    explanation: 'Parliament cannot destroy or emasculate the core identity of the Constitution under Article 368.',
    mnemonicHint: 'The unbreachable judicial shield.'
  },
  {
    id: 'doc-pith-substance',
    articleNumber: 'Pith & Substance',
    articleLabel: 'Doctrine of Pith and Substance',
    conceptLabel: 'State of Bombay v. F.N. Balsara (1951)',
    part: 'Doctrines',
    explanation: 'True nature and character of a law determines validity, disregarding incidental list encroachments.',
    mnemonicHint: 'Core substance over incidental overlap.'
  },
  {
    id: 'doc-severability',
    articleNumber: 'Severability',
    articleLabel: 'Doctrine of Severability',
    conceptLabel: 'R.M.D.C. v. Union of India (1957) & A.K. Gopalan',
    part: 'Doctrines',
    explanation: 'Only the unconstitutional provision is struck down if the valid portion can operate independently.',
    mnemonicHint: 'Cut the bad part, keep the good.'
  },
  {
    id: 'doc-eclipse',
    articleNumber: 'Eclipse',
    articleLabel: 'Doctrine of Eclipse',
    conceptLabel: 'Bhikaji Narain Dhakras v. State of M.P. (1955)',
    part: 'Doctrines',
    explanation: 'Pre-1950 laws violating Part III are shadowed/dormant; they revive once the constitutional impediment is lifted.',
    mnemonicHint: 'Sun covered by moon, revives later.'
  },
  {
    id: 'doc-colorable',
    articleNumber: 'Colorable Law',
    articleLabel: 'Doctrine of Colorable Legislation',
    conceptLabel: 'K.C. Gajapati Narayan Deo v. State of Orissa (1953)',
    part: 'Doctrines',
    explanation: 'What cannot be done directly cannot be done indirectly; tests constitutional legislative competence.',
    mnemonicHint: 'Disguised transgression of power.'
  },
  {
    id: 'doc-nexus',
    articleNumber: 'Territorial Nexus',
    articleLabel: 'Doctrine of Territorial Nexus',
    conceptLabel: 'Tata Iron & Steel Co. v. State of Bihar (1958)',
    part: 'Doctrines',
    explanation: 'State laws can have extra-territorial application if there is a real, legitimate connection with the State.',
    mnemonicHint: 'Real connection across state borders.'
  },
  {
    id: 'doc-harmonious',
    articleNumber: 'Harmonious Construction',
    articleLabel: 'Doctrine of Harmonious Construction',
    conceptLabel: 'Sri Venkataramana Devaru v. State of Mysore (1958)',
    part: 'Doctrines',
    explanation: 'Conflicting provisions must be read together so effect is given to both without rendering either dead letter.',
    mnemonicHint: 'Reconcile two clashing clauses.'
  },
  {
    id: 'doc-pleasure',
    articleNumber: 'Pleasure Doctrine',
    articleLabel: 'The Doctrine of Pleasure',
    conceptLabel: 'Union of India v. Tulsiram Patel (1985) & Art 310',
    part: 'Doctrines',
    explanation: 'Civil posts held at the pleasure of President/Governor subject to Article 311 procedural inquiry shields.',
    mnemonicHint: 'Crown privilege tempered by inquiry.'
  },
  {
    id: 'doc-eminent-domain',
    articleNumber: 'Eminent Domain',
    articleLabel: 'Doctrine of Eminent Domain',
    conceptLabel: 'K.T. Plantation Pvt. Ltd. v. State of Karnataka (2011)',
    part: 'Doctrines',
    explanation: 'Sovereign power of the State to acquire private property for public use subject to statutory authority of law.',
    mnemonicHint: 'State acquisition for public utility.'
  },
  {
    id: 'doc-promissory-estoppel',
    articleNumber: 'Promissory Estoppel',
    articleLabel: 'Doctrine of Promissory Estoppel',
    conceptLabel: 'Motilal Padampat Sugar Mills v. State of U.P. (1979)',
    part: 'Doctrines',
    explanation: 'The Government is bound by promises it makes where citizens alter their position relying upon the promise.',
    mnemonicHint: 'State cannot back out of clear promises.'
  }
];

// THE TOP 12 LANDMARK JUDGMENTS
export const MATCH_PAIRS_LANDMARK_JUDGMENTS: TileCardPair[] = [
  {
    id: 'case-kesavananda',
    articleNumber: '1973 Case',
    articleLabel: 'Kesavananda Bharati (1973)',
    conceptLabel: 'Basic Structure Doctrine (13-Judge Bench)',
    part: 'Judgments',
    explanation: 'Held that Parliament\'s constituent power cannot destroy the basic features of the Constitution.',
    mnemonicHint: 'Largest 13-Judge Bench in history.'
  },
  {
    id: 'case-maneka',
    articleNumber: '1978 Case',
    articleLabel: 'Maneka Gandhi v. UOI (1978)',
    conceptLabel: 'Golden Triangle & Just, Fair, Reasonable Due Process (Art 21)',
    part: 'Judgments',
    explanation: 'Interlinked Articles 14, 19, and 21 into the Golden Triangle and established substantive due process.',
    mnemonicHint: 'Passport impounding redefined personal liberty.'
  },
  {
    id: 'case-indra-sawhney',
    articleNumber: '1992 Case',
    articleLabel: 'Indra Sawhney v. UOI (1992)',
    conceptLabel: '50% Reservation Ceiling & Creamy Layer Exclusion',
    part: 'Judgments',
    explanation: 'Upheld 27% OBC reservations with creamy layer exclusion and strict 50% quota ceiling.',
    mnemonicHint: 'Mandal Commission landmark.'
  },
  {
    id: 'case-bommai',
    articleNumber: '1994 Case',
    articleLabel: 'S.R. Bommai v. UOI (1994)',
    conceptLabel: 'Judicial Review of Article 356 & Assembly Floor Test Mandatory',
    part: 'Judgments',
    explanation: 'Made President\'s Rule subject to strict judicial scrutiny and made the floor test on the assembly floor sole proof of majority.',
    mnemonicHint: 'Ended arbitrary dismissal of state cabinets.'
  },
  {
    id: 'case-puttaswamy',
    articleNumber: '2017 Case',
    articleLabel: 'K.S. Puttaswamy v. UOI (2017)',
    conceptLabel: 'Right to Privacy as a Fundamental Right under Article 21 (9-Judge)',
    part: 'Judgments',
    explanation: 'Unanimous 9-Judge bench ruling that privacy is intrinsic to life and personal liberty, establishing proportionality test.',
    mnemonicHint: 'Informational & bodily privacy bedrock.'
  },
  {
    id: 'case-minerva',
    articleNumber: '1980 Case',
    articleLabel: 'Minerva Mills v. UOI (1980)',
    conceptLabel: 'Harmony Between Rights & DPSPs as Basic Structure',
    part: 'Judgments',
    explanation: 'Struck down 42nd Amendment clauses immunizing constitutional amendments from judicial review.',
    mnemonicHint: 'Two wheels of the constitutional chariot.'
  },
  {
    id: 'case-shayara-bano',
    articleNumber: '2017 Case',
    articleLabel: 'Shayara Bano v. UOI (2017)',
    conceptLabel: 'Invalidation of Instant Triple Talaq (Talaq-e-Biddat)',
    part: 'Judgments',
    explanation: 'Declared instant triple talaq unconstitutional for being manifestly arbitrary under Article 14.',
    mnemonicHint: 'Manifest arbitrariness doctrine.'
  },
  {
    id: 'case-navtej-johar',
    articleNumber: '2018 Case',
    articleLabel: 'Navtej Singh Johar v. UOI (2018)',
    conceptLabel: 'Decriminalization of Section 377 & Constitutional Morality',
    part: 'Judgments',
    explanation: 'Overruled Suresh Koushal; held that criminalizing consensual adult same-sex relations violates Articles 14, 15, 19, and 21.',
    mnemonicHint: 'Constitutional morality over majoritarian social morality.'
  },
  {
    id: 'case-sita-soren',
    articleNumber: '2024 Case',
    articleLabel: 'Sita Soren v. Union of India (2024)',
    conceptLabel: 'No Parliamentary Privilege Immunity for Taking Bribes (Art 105/194)',
    part: 'Judgments',
    explanation: '7-Judge bench overruled P.V. Narasimha Rao; bribery for casting votes in legislative chambers is not protected by privilege.',
    mnemonicHint: 'Bribery is never parliamentary business.'
  },
  {
    id: 'case-art-370',
    articleNumber: '2023 Case',
    articleLabel: 'In Re: Article 370 of the Constitution (2023)',
    conceptLabel: 'Upheld Complete Constitutional Integration of Jammu & Kashmir',
    part: 'Judgments',
    explanation: '5-Judge bench held J&K held no internal sovereignty after accession; upheld C.O. 272 & 273.',
    mnemonicHint: 'Asymmetric autonomy transition settled.'
  },
  {
    id: 'case-selvi',
    articleNumber: '2010 Case',
    articleLabel: 'Selvi v. State of Karnataka (2010)',
    conceptLabel: 'Involuntary Narco-Analysis Violates Article 20(3) Self-Incrimination',
    part: 'Judgments',
    explanation: 'Involuntary polygraph, brain mapping, or narco tests violate mental privacy and testimonial compulsion safeguards.',
    mnemonicHint: 'Mental privacy is inviolable.'
  },
  {
    id: 'case-janhit-abhiyan',
    articleNumber: '2022 Case',
    articleLabel: 'Janhit Abhiyan v. UOI (2022)',
    conceptLabel: 'Upheld 103rd Amendment 10% EWS Reservation',
    part: 'Judgments',
    explanation: '5-Judge bench upheld economic criteria alone for reservations under Articles 15(6) and 16(6).',
    mnemonicHint: 'Economic backwardness recognized.'
  }
];

// HISTORIC CONSTITUTIONAL AMENDMENTS
export const MATCH_PAIRS_AMENDMENTS: TileCardPair[] = [
  {
    id: 'amd-1',
    articleNumber: '1st Amd',
    articleLabel: '1st Amendment (1951)',
    conceptLabel: 'Inserted Ninth Schedule, Art 31A/B & Art 15(4) Reservations',
    part: 'Amendments',
    explanation: 'Overcame Champakam Dorairajan and Kameshwar Singh; protected Zamindari abolition laws from Part III challenge.',
    mnemonicHint: 'The first constituent reaction.'
  },
  {
    id: 'amd-7',
    articleNumber: '7th Amd',
    articleLabel: '7th Amendment (1956)',
    conceptLabel: 'States Reorganisation along Linguistic Lines & Abolished Part VII',
    part: 'Amendments',
    explanation: 'Fazal Ali Commission implementation; 14 States & 6 UTs created; common High Courts established.',
    mnemonicHint: 'The Linguistic map of India.'
  },
  {
    id: 'amd-24',
    articleNumber: '24th Amd',
    articleLabel: '24th Amendment (1971)',
    conceptLabel: 'Affirmed Constituent Amending Power & Mandatory Presidential Assent',
    part: 'Amendments',
    explanation: 'Nullified Golak Nath; clarified nothing in Art 13 applies to Art 368 amendments.',
    mnemonicHint: 'Parliament strikes back after Golak Nath.'
  },
  {
    id: 'amd-42',
    articleNumber: '42nd Amd',
    articleLabel: '42nd Amendment (1976)',
    conceptLabel: 'The Mini-Constitution: Preamble Socialist/Secular & Part IV-A Duties',
    part: 'Amendments',
    explanation: 'Swaran Singh Committee; bound President to cabinet advice; added Fundamental Duties and Administrative Tribunals.',
    mnemonicHint: 'The Mini-Constitution of 1976.'
  },
  {
    id: 'amd-44',
    articleNumber: '44th Amd',
    articleLabel: '44th Amendment (1978)',
    conceptLabel: 'Abolished Art 19(1)(f) Property Right & Added "Armed Rebellion"',
    part: 'Amendments',
    explanation: 'Restored civil liberties; replaced internal disturbance with armed rebellion; Arts 20 & 21 made non-suspendable.',
    mnemonicHint: 'The Democratic Restoration amendment.'
  },
  {
    id: 'amd-52',
    articleNumber: '52nd Amd',
    articleLabel: '52nd Amendment (1985)',
    conceptLabel: 'Introduced Tenth Schedule Anti-Defection Law',
    part: 'Amendments',
    explanation: 'Curbed political floor-crossing; presiding officer disqualification mechanism.',
    mnemonicHint: 'Aaya Ram, Gaya Ram ended.'
  },
  {
    id: 'amd-61',
    articleNumber: '61st Amd',
    articleLabel: '61st Amendment (1988)',
    conceptLabel: 'Reduced Voting Age from 21 to 18 Years in Article 326',
    part: 'Amendments',
    explanation: 'Empowered youth with Universal Adult Suffrage at 18 years.',
    mnemonicHint: 'Youth ballot revolution.'
  },
  {
    id: 'amd-73',
    articleNumber: '73rd Amd',
    articleLabel: '73rd Amendment (1992)',
    conceptLabel: 'Constitutional Status to Panchayati Raj (Part IX & 11th Schedule)',
    part: 'Amendments',
    explanation: 'Mandatory 3-tier Panchayats, State Election Commission, State Finance Commission, and 33% women quota.',
    mnemonicHint: 'Grassroots rural self-government.'
  },
  {
    id: 'amd-74',
    articleNumber: '74th Amd',
    articleLabel: '74th Amendment (1992)',
    conceptLabel: 'Constitutional Status to Municipalities (Part IX-A & 12th Schedule)',
    part: 'Amendments',
    explanation: 'Nagar Panchayats, Municipal Councils, Municipal Corporations, and Wards Committees.',
    mnemonicHint: 'Urban municipal empowerment.'
  },
  {
    id: 'amd-86',
    articleNumber: '86th Amd',
    articleLabel: '86th Amendment (2002)',
    conceptLabel: 'Inserted Article 21A Right to Free & Compulsory Education',
    part: 'Amendments',
    explanation: 'Elevated education for ages 6–14 into an enforceable fundamental right and added 51A(k) duty.',
    mnemonicHint: 'Education fundamental charter.'
  },
  {
    id: 'amd-91',
    articleNumber: '91st Amd',
    articleLabel: '91st Amendment (2003)',
    conceptLabel: '15% Cabinet Size Ceiling in Lok Sabha and State Assemblies',
    part: 'Amendments',
    explanation: 'Council of Ministers cannot exceed 15% of total membership of Lower House; barred defectors from cabinet berths.',
    mnemonicHint: 'Cabinet expansion cap.'
  },
  {
    id: 'amd-101',
    articleNumber: '101st Amd',
    articleLabel: '101st Amendment (2016)',
    conceptLabel: 'Goods and Services Tax (GST) & GST Council (Art 279A)',
    part: 'Amendments',
    explanation: 'One Nation One Tax: concurrent legislative competence under 246A and constitutional voting body under 279A.',
    mnemonicHint: 'Fiscal federal revolution.'
  },
  {
    id: 'amd-103',
    articleNumber: '103rd Amd',
    articleLabel: '103rd Amendment (2019)',
    conceptLabel: '10% EWS Reservation under Articles 15(6) and 16(6)',
    part: 'Amendments',
    explanation: 'Economic criteria affirmative action in educational admissions and public employment.',
    mnemonicHint: 'Economically weaker sections.'
  },
  {
    id: 'amd-106',
    articleNumber: '106th Amd',
    articleLabel: '106th Amendment (2023)',
    conceptLabel: 'Nari Shakti Vandan Adhiniyam: 33% Women Quota in LS & Assemblies',
    part: 'Amendments',
    explanation: 'Inserted Arts 330A, 332A, and 334A reserving one-third seats for women for 15-year period.',
    mnemonicHint: 'Women\'s parliamentary reservation.'
  }
];

export const GAME_DECKS: GameDeck[] = [
  // 1. Part-wise Core Constitutional Decks
  {
    id: 'part3-rights',
    title: 'Part III: Fundamental Rights & Writs',
    description: 'Master Articles 12 to 35, reasonable restrictions, and the 5 prerogative writs.',
    icon: 'Shield',
    category: 'Constitutional Parts',
    pairs: MATCH_PAIRS_PART3
  },
  {
    id: 'part4-dpsp',
    title: 'Part IV & IV-A: DPSPs & Duties',
    description: 'Directive Principles, welfare socialist directives, UCC, and the 11 Fundamental Duties.',
    icon: 'Scale',
    category: 'Constitutional Parts',
    pairs: MATCH_PAIRS_PART4_DPSP
  },
  {
    id: 'part5-union',
    title: 'Part V: The Union Executive & Judiciary',
    description: 'President, Cabinet, Ordinances, Parliament quorum, and Supreme Court powers.',
    icon: 'Building2',
    category: 'Constitutional Parts',
    pairs: MATCH_PAIRS_PART5_UNION
  },
  {
    id: 'part6-federal',
    title: 'Part VI & XI: States & Federal Relations',
    description: 'High Courts, Governor, Legislative Lists, River Water disputes, and Delhi 239AA.',
    icon: 'GitBranch',
    category: 'Constitutional Parts',
    pairs: MATCH_PAIRS_FEDERAL_SPECIAL.filter(p => ['Part VI', 'Part VIII', 'Part XI'].includes(p.part))
  },
  {
    id: 'part-special',
    title: 'Emergency, Finance, Services & Amendments',
    description: 'Arts 280, 300A, 311, 324, 352, 356, 359, and 368 Basic Structure ceiling.',
    icon: 'Zap',
    category: 'Constitutional Parts',
    pairs: MATCH_PAIRS_FEDERAL_SPECIAL.filter(p => !['Part VI', 'Part VIII', 'Part XI'].includes(p.part))
  },

  // 2. Specialized Constitutional Topics
  {
    id: 'schedules',
    title: 'The 12 Schedules (TEARS OF OLD PM)',
    description: 'Territories, Emoluments, Affirmations, Rajya Sabha, Tribal regimes, Official Languages, and Anti-Defection.',
    icon: 'Calendar',
    category: 'Constitutional Architecture',
    pairs: MATCH_PAIRS_SCHEDULES
  },
  {
    id: 'amendments',
    title: 'Constitutional Amendments (1 to 106)',
    description: 'The monumental constitutional shifts: 1st, 24th, 42nd, 44th, 52nd, 73rd, 86th, 101st, 103rd, and 106th.',
    icon: 'GitCommit',
    category: 'Constitutional Architecture',
    pairs: MATCH_PAIRS_AMENDMENTS
  },
  {
    id: 'doctrines',
    title: '10 Landmark Constitutional Doctrines',
    description: 'Basic Structure, Pith & Substance, Severability, Eclipse, Colorable Law, and Territorial Nexus.',
    icon: 'Scale',
    category: 'Jurisprudence & Precedents',
    pairs: MATCH_PAIRS_DOCTRINES
  },
  {
    id: 'landmark-cases',
    title: 'Top Supreme Court Landmark Judgments',
    description: 'Kesavananda, Maneka Gandhi, Indra Sawhney, S.R. Bommai, Puttaswamy, Navtej Johar, and Sita Soren.',
    icon: 'Award',
    category: 'Jurisprudence & Precedents',
    pairs: MATCH_PAIRS_LANDMARK_JUDGMENTS
  },

  // 3. Grand Shuffle
  {
    id: 'master-shuffle',
    title: 'All-Constitution Grand Shuffle (1 to 395)',
    description: 'The ultimate constitutional master drill shuffling articles, doctrines, schedules, and case laws.',
    icon: 'Sparkles',
    category: 'Grand Shuffle',
    pairs: [
      ...MATCH_PAIRS_PART3,
      ...MATCH_PAIRS_PART4_DPSP,
      ...MATCH_PAIRS_PART5_UNION,
      ...MATCH_PAIRS_FEDERAL_SPECIAL,
      ...MATCH_PAIRS_SCHEDULES,
      ...MATCH_PAIRS_DOCTRINES,
      ...MATCH_PAIRS_LANDMARK_JUDGMENTS,
      ...MATCH_PAIRS_AMENDMENTS
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
export function createGameTiles(deckTheme: string, pairCount: number): GameTile[] {
  const deck = GAME_DECKS.find(d => d.id === deckTheme) || GAME_DECKS[0];
  const selectedPairs = shuffleArray(deck.pairs).slice(0, Math.min(pairCount, deck.pairs.length));

  const tiles: GameTile[] = [];

  selectedPairs.forEach((pair, idx) => {
    // Article / Lead Tile
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

// Web Audio Sound Effects Synthesizer (Zero Dependencies)
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
