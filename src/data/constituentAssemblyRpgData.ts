export interface AssemblyDelegateChoice {
  id: string;
  title: string;
  sponsor: string; // e.g. "Drafting Committee (Dr. B.R. Ambedkar)"
  description: string;
  argumentsFor: string;
  argumentsAgainst: string;
  impact: {
    liberty: number; // -20 to +20
    federalism: number; // -20 to +20
    executiveCapacity: number; // -20 to +20
  };
  cadHistoricalQuote: string;
  historicalSpeaker: string;
  isAdoptedConstitutionHistory: boolean;
  historicalOutcomeNote: string;
}

export interface AssemblyCrisisDilemma {
  id: string;
  number: number;
  date: string;
  debateTitle: string;
  constitutionalPillar: string;
  coreArticleRef: string;
  contextSummary: string;
  primaryKeynoteSpeakers: {
    name: string;
    role: string;
    avatar: string;
    standpoint: string;
  }[];
  choices: AssemblyDelegateChoice[];
  mainsAnalysisTakeaway: string;
}

export const ASSEMBLY_CRISES: AssemblyCrisisDilemma[] = [
  {
    id: 'crisis-1-due-process',
    number: 1,
    date: 'December 1948',
    debateTitle: 'Due Process vs. Procedure Established by Law',
    constitutionalPillar: 'Fundamental Rights (Personal Liberty)',
    coreArticleRef: 'Article 21 (Draft Article 15)',
    contextSummary:
      'Sir B.N. Rau visited the US Supreme Court where Justice Felix Frankfurter warned him that "Due Process" had enabled conservative American courts to strike down progressive labor and social welfare legislation for decades (the Lochner era). Dr. Ambedkar and K.M. Munshi initially wanted "Due Process", but Patel and civil servants feared progressive agrarian reform would be paralyzed.',
    primaryKeynoteSpeakers: [
      {
        name: 'Dr. B.R. Ambedkar',
        role: 'Chairman, Drafting Committee',
        avatar: '👨‍⚖️',
        standpoint: 'Wavered between protecting individual liberty from legislative tyranny and preventing judicial obstruction of land reform.'
      },
      {
        name: 'Sir B.N. Rau',
        role: 'Constitutional Advisor',
        avatar: '📜',
        standpoint: 'Cautioned against American substantive due process based on Justice Frankfurter’s explicit counsel.'
      },
      {
        name: 'K.M. Munshi',
        role: 'Drafting Committee Member',
        avatar: '✍️',
        standpoint: 'Passionate advocate for substantive "Due Process" to shield vulnerable citizens from police atrocities.'
      }
    ],
    choices: [
      {
        id: 'choice-1a',
        title: 'Adopt "Procedure Established by Law" (The Historical Choice)',
        sponsor: 'Alladi Krishnaswami Ayyar & Drafting Committee Revision',
        description:
          'Restrict the court to checking whether a formal procedure was duly enacted by legislature, trusting Parliament not to pass cruel laws.',
        argumentsFor:
          'Protects post-independence land reform, zamindari abolition, and planned economic development from conservative judicial vetoes.',
        argumentsAgainst:
          'Leaves citizens vulnerable to oppressive legislative enactments until Maneka Gandhi (1978) re-reads due process into Article 21.',
        impact: {
          liberty: -5,
          federalism: 0,
          executiveCapacity: +15
        },
        cadHistoricalQuote:
          '"A procedure established by law may be arbitrary, oppressive, or unjust... yet under this clause, the courts are helpless." — H.V. Kamath (Dec 6, 1948)',
        historicalSpeaker: 'H.V. Kamath',
        isAdoptedConstitutionHistory: true,
        historicalOutcomeNote:
          'Adopted in Draft Article 15 (now Article 21). Stood until the Supreme Court in Maneka Gandhi (1978) held that the procedure must be "just, fair, and reasonable", effectively introducing substantive due process via the Golden Triangle.'
      },
      {
        id: 'choice-1b',
        title: 'Adopt Strict American "Due Process of Law"',
        sponsor: 'K.M. Munshi & Thakur Das Bhargava',
        description:
          'Empower courts to strike down any criminal or personal law whose substance is deemed arbitrary or unfair by judicial reasoning.',
        argumentsFor:
          'Maximal shield against preventive detention, arbitrary police powers, and authoritarian executive overreach from day one.',
        argumentsAgainst:
          'Judges might strike down ceilings on agricultural land and social welfare laws as violating economic due process.',
        impact: {
          liberty: +20,
          federalism: +5,
          executiveCapacity: -15
        },
        cadHistoricalQuote:
          '"Due process is the only guarantee that a citizen shall not be deprived of life and liberty without hearing." — K.M. Munshi',
        historicalSpeaker: 'K.M. Munshi',
        isAdoptedConstitutionHistory: false,
        historicalOutcomeNote:
          'Heavily debated and supported by Munshi, but ultimately dropped after Sir B.N. Rau relayed Justice Frankfurter’s warning.'
      },
      {
        id: 'choice-1c',
        title: 'Bifurcated Due Process (Civil Welfare Excluded, Penal Liberty Protected)',
        sponsor: 'Compromise Proposal (Bhargava Amendment Variant)',
        description:
          'Explicitly apply substantive due process to criminal procedure and personal detention, while excluding economic property and taxation.',
        argumentsFor:
          'Harmonizes personal civil liberties with state-led agrarian restructuring.',
        argumentsAgainst:
          'Textual complexity might lead to endless jurisdictional litigation on what constitutes "economic" vs "personal" regulation.',
        impact: {
          liberty: +10,
          federalism: 0,
          executiveCapacity: +5
        },
        cadHistoricalQuote:
          '"Let not the ghost of American laissez-faire haunt Indian personal freedom." — Thakur Das Bhargava',
        historicalSpeaker: 'Thakur Das Bhargava',
        isAdoptedConstitutionHistory: false,
        historicalOutcomeNote:
          'Proposed in spirit by several delegates, but the Drafting Committee favored the crisp simplicity of the Japanese constitutional phrasing.'
      }
    ],
    mainsAnalysisTakeaway:
      'Crucial for GS2 & Judiciary: Trace the judicial trajectory from A.K. Gopalan (1950 - textual procedure established by law) to Maneka Gandhi (1978 - procedural fairness + substantive reasonableness under Arts 14, 19, 21).'
  },
  {
    id: 'crisis-2-property-rights',
    number: 2,
    date: 'September 1949',
    debateTitle: 'Right to Property & Zamindari Abolition Compensation',
    constitutionalPillar: 'Socio-Economic Justice vs Vested Rights',
    coreArticleRef: 'Article 31 & Article 19(1)(f)',
    contextSummary:
      'The Congress party had promised complete abolition of the feudal Zamindari system to empower millions of tenant farmers. However, landlords and princes argued that Article 31 must require full "just and fair market compensation" determined by independent courts, which would bankrupt the young Republic.',
    primaryKeynoteSpeakers: [
      {
        name: 'Pandit Jawaharlal Nehru',
        role: 'Prime Minister',
        avatar: '📜',
        standpoint: 'No court, no judge can stand as a third chamber of legislature to stop massive social revolution.'
      },
      {
        name: 'Sardar Vallabhbhai Patel',
        role: 'Home & Deputy Prime Minister',
        avatar: '🦁',
        standpoint: 'Insisted that commitments made to princes, investors, and landowners must be honorably compensated.'
      },
      {
        name: 'Govind Ballabh Pant',
        role: 'Premier of United Provinces',
        avatar: '🌾',
        standpoint: 'UP zamindari abolition will collapse if courts order thousands of crores in cash compensation.'
      }
    ],
    choices: [
      {
        id: 'choice-2a',
        title: 'Legislative Compensation Monopoly (Nehru-Pant Compromise)',
        sponsor: 'Jawaharlal Nehru & Drafting Committee',
        description:
          'Parliament lays down principles of compensation; courts cannot question the quantum of compensation unless it is a fraudulent farce.',
        argumentsFor:
          'Permits rapid redistribution of millions of acres of farmland to impoverished tillers without draining the national treasury.',
        argumentsAgainst:
          'Sparked immediate high-court challenges (Kameshwar Singh), forcing Nehru to enact the 1st Amendment creating the Ninth Schedule.',
        impact: {
          liberty: -5,
          federalism: +5,
          executiveCapacity: +15
        },
        cadHistoricalQuote:
          '"Eminent domain is an inherent attribute of sovereignty. Social reform cannot be bought at commercial auction." — Jawaharlal Nehru (Sep 10, 1949)',
        historicalSpeaker: 'Jawaharlal Nehru',
        isAdoptedConstitutionHistory: true,
        historicalOutcomeNote:
          'Adopted as original Article 31. Proved so litigious that the 1st, 4th, 25th, and ultimately the 44th Amendment (1978) were required to downgrade Property from a Fundamental Right to a mere constitutional right under Article 300A.'
      },
      {
        id: 'choice-2b',
        title: 'Full Judicial Review of Market Compensation (Patel Conservative Wing)',
        sponsor: 'Sardar Patel & Landholder Delegates',
        description:
          'Property cannot be expropriated without paying fair market value, fully justiciable before High Courts and Supreme Court.',
        argumentsFor:
          'Inspires massive domestic and foreign business confidence, respects sanctity of contracts and ancestral holdings.',
        argumentsAgainst:
          'Would freeze land inequality; millions of bonded tenants would remain landless serfs due to state inability to pay market rates.',
        impact: {
          liberty: +10,
          federalism: -5,
          executiveCapacity: -20
        },
        cadHistoricalQuote:
          '"If we take property without just compensation, we shake the moral foundations of the Republic." — Sardar Patel',
        historicalSpeaker: 'Sardar Patel',
        isAdoptedConstitutionHistory: false,
        historicalOutcomeNote:
          'Firmly rejected by the socialist wing of the Assembly as an intolerable barrier to social engineering.'
      },
      {
        id: 'choice-2c',
        title: 'Delete Property from Fundamental Rights in 1949 Itself',
        sponsor: 'Damodar Swarup Seth & Socialist Delegates',
        description:
          'Relegate property strictly to a statutory right from the outset, preempting 30 years of clash between Supreme Court and Parliament.',
        argumentsFor:
          'Would prevent the Golaknath, Bank Nationalisation, and Kesavananda property clashes entirely.',
        argumentsAgainst:
          'Would have caused panic among princely states and commercial classes during the critical 1949 integration window.',
        impact: {
          liberty: -10,
          federalism: 0,
          executiveCapacity: +20
        },
        cadHistoricalQuote:
          '"Why include capitalist property among sacred human liberties?" — Damodar Swarup Seth',
        historicalSpeaker: 'Damodar Swarup Seth',
        isAdoptedConstitutionHistory: false,
        historicalOutcomeNote:
          'Socialist delegates pushed this, but the Drafting Committee insisted on property protections to reassure business and princely states.'
      }
    ],
    mainsAnalysisTakeaway:
      'Landmark for GS2/Law: The 30-year constitutional tussle over Article 31 shaped India’s Basic Structure doctrine (Kesavananda Bharati, 1973) and the Ninth Schedule immunity shield.'
  },
  {
    id: 'crisis-3-emergency-powers',
    number: 3,
    date: 'August 1949',
    debateTitle: 'Presidential Rule & Emergency Powers: Articles 352 & 356',
    constitutionalPillar: 'Federalism vs National Security & Integrity',
    coreArticleRef: 'Articles 352, 356, 359 (Draft Arts 275 & 278)',
    contextSummary:
      'India was reeling from the bloody trauma of Partition, communal massacres, Pakistani infiltration into Kashmir, and communist insurrection in Telangana. The Drafting Committee proposed sweeping powers for the Union Executive to dismiss state governments (Article 356) and suspend Fundamental Rights enforcement (Article 359).',
    primaryKeynoteSpeakers: [
      {
        name: 'H.V. Kamath',
        role: 'Assembly Member (Forward Bloc)',
        avatar: '⚡',
        standpoint: 'Denounced the provisions as laying the foundation for a totalitarian police state worse than the Weimar Republic.'
      },
      {
        name: 'Alladi Krishnaswami Ayyar',
        role: 'Drafting Committee Member',
        avatar: '⚖️',
        standpoint: 'Argued that national survival precedes provincial autonomy; the primary duty of any sovereign state is preservation.'
      },
      {
        name: 'Dr. B.R. Ambedkar',
        role: 'Chairman, Drafting Committee',
        avatar: '👨‍⚖️',
        standpoint: 'Famously hoped that Article 356 would remain a "dead letter" and would be invoked only in the rarest extremes.'
      }
    ],
    choices: [
      {
        id: 'choice-3a',
        title: 'Retain Centralized Emergency with "Dead Letter" Hope (Historical)',
        sponsor: 'Dr. Ambedkar & Drafting Committee',
        description:
          'Equip Union with Article 352 (National), Article 356 (State Breakdown), and Article 359 (Suspension of remedies).',
        argumentsFor:
          'Ensured India’s physical survival during the turbulent first two decades against external aggression and centrifugal fissiparous forces.',
        argumentsAgainst:
          'Article 356 was abused over 100 times by ruling parties to topple opposition state governments until S.R. Bommai (1994) curbed it.',
        impact: {
          liberty: -15,
          federalism: -15,
          executiveCapacity: +25
        },
        cadHistoricalQuote:
          '"I hope that the President who is endowed with these powers will take proper precautions before actually suspending the administration... I hope such articles will remain a dead letter." — Dr. B.R. Ambedkar (Aug 4, 1949)',
        historicalSpeaker: 'Dr. B.R. Ambedkar',
        isAdoptedConstitutionHistory: true,
        historicalOutcomeNote:
          'Adopted as Part XVIII. Ambedkar’s "dead letter" hope proved tragically misplaced until the Supreme Court’s landmark 9-judge bench in S.R. Bommai v. Union of India (1994) imposed strict judicial review.'
      },
      {
        id: 'choice-3b',
        title: 'Abolish Article 356 (No Central Toppling of State Cabinets)',
        sponsor: 'H.V. Kamath, Shibban Lal Saksena & K.T. Shah',
        description:
          'Delete power of Union to dissolve state assemblies; state breakdowns must be resolved by state elections or governor dissolutions.',
        argumentsFor:
          'Protects genuine federal autonomy, multi-party democracy, and regional state sovereignty from New Delhi hegemony.',
        argumentsAgainst:
          'Leaves the Union paralyzed if a border state legislature faces rebellion, secessionist secession, or total collapse of constitutional order.',
        impact: {
          liberty: +15,
          federalism: +25,
          executiveCapacity: -20
        },
        cadHistoricalQuote:
          '"This is a day of shame and sorrow. With one hand we give liberty, with the other we strangle it with emergency." — H.V. Kamath',
        historicalSpeaker: 'H.V. Kamath',
        isAdoptedConstitutionHistory: false,
        historicalOutcomeNote:
          'Vehemently championed by civil libertarians but rejected because the horrors of Partition were too fresh in delegates’ minds.'
      },
      {
        id: 'choice-3c',
        title: 'Emergency Allowed Only with Mandatory Inter-State Council Concurrence',
        sponsor: 'Federalist Compromise Amendment',
        description:
          'Article 356 invocation requires prior 2/3rds concurrence from an Inter-State Council composed of all state Chief Ministers.',
        argumentsFor:
          'Injects true cooperative federalism into the emergency mechanism, preventing partisan abuse.',
        argumentsAgainst:
          'Impractical in urgent national security emergencies where speed and surprise are essential.',
        impact: {
          liberty: +5,
          federalism: +15,
          executiveCapacity: -5
        },
        cadHistoricalQuote:
          '"Federalism is not a luxury of peaceful times; it is the soul of our union." — K. Santhanam',
        historicalSpeaker: 'K. Santhanam',
        isAdoptedConstitutionHistory: false,
        historicalOutcomeNote:
          'Pushed by Madras delegates, foreshadowing the Sarkaria Commission recommendations 35 years later.'
      }
    ],
    mainsAnalysisTakeaway:
      'Indispensable for GS2 Polity: Trace the evolution of Article 356 from Ambedkar’s "Dead Letter" to the 44th Amendment reforms (1978) and judicial review in S.R. Bommai (1994).'
  },
  {
    id: 'crisis-4-governor-selection',
    number: 4,
    date: 'May–June 1949',
    debateTitle: 'Governor: Direct Popular Election vs Presidential Appointment',
    constitutionalPillar: 'Federal Architecture & Centre-State Relations',
    coreArticleRef: 'Articles 153 to 156 (Draft Article 131)',
    contextSummary:
      'The Provincial Constitution Committee originally recommended that Governors be directly elected by universal adult franchise in each province. However, delegates realized an elected Governor would clash directly with the elected Chief Minister, creating two rival centers of power in every state.',
    primaryKeynoteSpeakers: [
      {
        name: 'Jawaharlal Nehru',
        role: 'Prime Minister',
        avatar: '📜',
        standpoint: 'An elected governor will create endless friction with the Chief Minister; we need a detached statesman to link Union and State.'
      },
      {
        name: 'Alladi Krishnaswami Ayyar',
        role: 'Drafting Committee Member',
        avatar: '⚖️',
        standpoint: 'A nominated Governor preserves the parliamentary system of responsible government where executive power rests in the Cabinet.'
      },
      {
        name: 'Rohini Kumar Chaudhari',
        role: 'Delegate from Assam',
        avatar: '🏛️',
        standpoint: 'A nominated Governor appointed at the pleasure of the Centre will become an obedient agent and puppet of New Delhi.'
      }
    ],
    choices: [
      {
        id: 'choice-4a',
        title: 'Nominated by President at Pleasure (Historical Choice)',
        sponsor: 'Jawaharlal Nehru & Alladi Krishnaswami Ayyar',
        description:
          'President appoints Governor; holds office during the pleasure of the President (Article 156), acting as constitutional head and Union link.',
        argumentsFor:
          'Prevents parallel executives within the state; ensures a neutral unifier who owes allegiance to the Republic as a whole.',
        argumentsAgainst:
          'Led to gubernatorial politicization, frequent arbitrary removals on regime changes, and partisan withholding of bills (Article 200).',
        impact: {
          liberty: 0,
          federalism: -15,
          executiveCapacity: +15
        },
        cadHistoricalQuote:
          '"It would be far better if a Governor is appointed by the President. He would be detached from party politics in the province." — Jawaharlal Nehru (May 31, 1949)',
        historicalSpeaker: 'Jawaharlal Nehru',
        isAdoptedConstitutionHistory: true,
        historicalOutcomeNote:
          'Adopted as Articles 155-156. The Supreme Court in B.P. Singhal (2010) later ruled that Governors cannot be removed arbitrarily merely because the Central Government changes.'
      },
      {
        id: 'choice-4b',
        title: 'Direct Popular Election by State Voters',
        sponsor: 'Original Provincial Constitution Committee Draft',
        description:
          'The Governor is directly elected by the entire state electorate on adult franchise for a fixed 5-year term.',
        argumentsFor:
          'Absolute democratic legitimacy; Governor cannot be intimidated, summoned, or dismissed by New Delhi.',
        argumentsAgainst:
          'Total deadlock between Chief Minister and Governor; both claim democratic mandates from the people.',
        impact: {
          liberty: +5,
          federalism: +20,
          executiveCapacity: -15
        },
        cadHistoricalQuote:
          '"How can two men both elected by millions work together without jealousy?" — Dr. P.S. Deshmukh',
        historicalSpeaker: 'Dr. P.S. Deshmukh',
        isAdoptedConstitutionHistory: false,
        historicalOutcomeNote:
          'Originally drafted by the Provincial Constitution Committee, but decisively overturned after intense floor debate.'
      },
      {
        id: 'choice-4c',
        title: 'Panel Nomination with State Legislative Assembly Ratification',
        sponsor: 'Compromise Model (H.N. Kunzru & K. Santhanam)',
        description:
          'The State Legislature submits a panel of 4 eminent non-political persons, from which the President selects the Governor.',
        argumentsFor:
          'Guarantees state consent while maintaining Union appointment and preventing gubernatorial partisanship.',
        argumentsAgainst:
          'State ruling parties might pack the panel with regional partisans.',
        impact: {
          liberty: 0,
          federalism: +10,
          executiveCapacity: 0
        },
        cadHistoricalQuote:
          '"If the province has no voice in selecting its own head, federalism becomes an illusion." — H.N. Kunzru',
        historicalSpeaker: 'Hriday Nath Kunzru',
        isAdoptedConstitutionHistory: false,
        historicalOutcomeNote:
          'Debated as an alternative compromise, echoing later recommendations of the Sarkaria and Punchhi Commissions.'
      }
    ],
    mainsAnalysisTakeaway:
      'Crucial for GS2/Mains: Analyze the dual role of the Governor (Constitutional Head of State vs Agent of Centre), Shamsher Singh (1974), and recent 2024 SC judgments on Article 200 (Governor’s Pocket Veto).'
  },
  {
    id: 'crisis-5-uniform-civil-code',
    number: 5,
    date: 'November 1948',
    debateTitle: 'Uniform Civil Code: Mandatory Right vs Directive Principle',
    constitutionalPillar: 'Secularism, Gender Equality & Minority Rights',
    coreArticleRef: 'Article 44 (Draft Article 35)',
    contextSummary:
      'Women delegates (Rajkumari Amrit Kaur, Hansa Mehta) and reformers (Minoo Masani, K.M. Munshi) demanded a single uniform civil code covering marriage, divorce, and inheritance as an enforceable Fundamental Right. Muslim delegates (Pocker Sahib Bahadur, Mahboob Ali Baig) vehemently argued that personal laws are an inseparable part of religious freedom under Article 25.',
    primaryKeynoteSpeakers: [
      {
        name: 'Dr. B.R. Ambedkar',
        role: 'Law Minister & Chairman',
        avatar: '👨‍⚖️',
        standpoint: 'Personal laws cannot be kept outside state jurisdiction; religion should not govern property, marriage, and succession indefinitely.'
      },
      {
        name: 'K.M. Munshi',
        role: 'Drafting Committee Member',
        avatar: '✍️',
        standpoint: 'Religion cannot be allowed to prevent the national consolidation of a modern, egalitarian social democracy.'
      },
      {
        name: 'B. Pocker Sahib Bahadur',
        role: 'Delegate from Madras',
        avatar: '📜',
        standpoint: 'Forcing a uniform law on unwilling religious minorities violates the solemn guarantees given during freedom struggle.'
      }
    ],
    choices: [
      {
        id: 'choice-5a',
        title: 'Place in Directive Principles as Aspirational Goal (Historical)',
        sponsor: 'Dr. B.R. Ambedkar & Drafting Committee',
        description:
          'Draft Article 44 directing the state to "endeavour to secure" a UCC, but keep it non-justiciable until national consensus matures.',
        argumentsFor:
          'Prevents immediate communal polarization during traumatic post-Partition healing, while planting the constitutional milestone.',
        argumentsAgainst:
          'Remained unimplemented for 75+ years, resulting in persistent gender discrimination across religious personal laws.',
        impact: {
          liberty: +5,
          federalism: 0,
          executiveCapacity: 0
        },
        cadHistoricalQuote:
          '"No government can use its power in such a manner as to provoke the Muslim community to revolt... Sovereignty does not mean doing what is unpractical." — Dr. B.R. Ambedkar (Nov 23, 1948)',
        historicalSpeaker: 'Dr. B.R. Ambedkar',
        isAdoptedConstitutionHistory: true,
        historicalOutcomeNote:
          'Adopted as Article 44 in Part IV (DPSP). Reaffirmed repeatedly by Supreme Court in Shah Bano (1985), Sarla Mudgal (1995), and Shayara Bano (2017).'
      },
      {
        id: 'choice-5b',
        title: 'Enact UCC as an Enforceable Fundamental Right with a 10-Year Sunset',
        sponsor: 'Minoo Masani, Hansa Mehta & Rajkumari Amrit Kaur',
        description:
          'Place UCC in Part III with a 10-year transition window, making gender-equal family law judicially enforceable across all faiths.',
        argumentsFor:
          'Guarantees complete gender equality and equal inheritance for millions of women irrespective of religion from the dawn of independence.',
        argumentsAgainst:
          'Could have sparked widespread minority unrest, civil disobedience, and boycott of the new Constitution in 1950.',
        impact: {
          liberty: +15,
          federalism: -5,
          executiveCapacity: -10
        },
        cadHistoricalQuote:
          '"One of the factors that has kept India back from advancing to nationhood has been personal laws based on religion." — Minoo Masani',
        historicalSpeaker: 'Minoo Masani',
        isAdoptedConstitutionHistory: false,
        historicalOutcomeNote:
          'Masani, Mehta, and Amrit Kaur wrote a famous joint minute of dissent protesting the relegation of UCC to non-enforceable directives.'
      },
      {
        id: 'choice-5c',
        title: 'Constitutionalize Perpetual Exemption for All Religious Personal Laws',
        sponsor: 'Pocker Sahib Bahadur & Mahboob Ali Baig Amendment',
        description:
          'Insert an explicit proviso that no law shall override the personal law of any religious community without their unanimous prior consent.',
        argumentsFor:
          'Maximal reassurance to religious minorities; respects traditional pluralism and diverse indigenous customs.',
        argumentsAgainst:
          'Freezes regressive practices (e.g. child marriage, polygamy, unequal inheritance) beyond the reach of social reform legislation.',
        impact: {
          liberty: -15,
          federalism: +10,
          executiveCapacity: -10
        },
        cadHistoricalQuote:
          '"Personal law is part and parcel of religion. To interfere with it is to interfere with the right to practice religion." — Mahboob Ali Baig',
        historicalSpeaker: 'Mahboob Ali Baig',
        isAdoptedConstitutionHistory: false,
        historicalOutcomeNote:
          'Firmly rejected by Dr. Ambedkar and the Assembly, who insisted that Parliament must retain the sovereign power to reform personal laws.'
      }
    ],
    mainsAnalysisTakeaway:
      'Classic GS2/Law question: Balance between Article 25 (Religious Freedom) and Article 44 (UCC) / Article 14 (Gender Equality), examined in light of the 22nd Law Commission report and recent state enactments.'
  },
  {
    id: 'crisis-6-language-formula',
    number: 6,
    date: 'September 1949',
    debateTitle: 'National vs Official Language: The Munshi-Ayyangar Formula',
    constitutionalPillar: 'National Unity, Linguistic Pluralism & Federalism',
    coreArticleRef: 'Articles 343 to 351 & Eighth Schedule',
    contextSummary:
      'Language was the single most combustible debate in the Assembly, threatening to tear the House apart. Hindi stalwarts (Purushottam Das Tandon, Seth Govind Das) demanded immediate Hindi in Devanagari script as the sole National Language. Southern delegates (T.T. Krishnamachari, N.G. Ranga) warned that imposition of Hindi would lead to immediate secession.',
    primaryKeynoteSpeakers: [
      {
        name: 'Purushottam Das Tandon',
        role: 'Congress Veteran (UP)',
        avatar: '🗣️',
        standpoint: 'Hindi is the soul of Bharat; continuing the foreign language of our British conquerors is national humiliation.'
      },
      {
        name: 'T.T. Krishnamachari',
        role: 'Delegate from Madras',
        avatar: '🌊',
        standpoint: 'Warned that Hindi imperialism would force non-Hindi provinces to choose between subservience and separation.'
      },
      {
        name: 'K.M. Munshi & N.G. Ayyangar',
        role: 'Compromise Architects',
        avatar: '🤝',
        standpoint: 'Crafted the subtle formula: Hindi is the "Official Language of the Union" (not National Language), with English continuing for 15 years.'
      }
    ],
    choices: [
      {
        id: 'choice-6a',
        title: 'Adopt the Munshi-Ayyangar Compromise (Historical Choice)',
        sponsor: 'K.M. Munshi & N. Gopalaswami Ayyangar',
        description:
          'Hindi in Devanagari is the Official Language of the Union; English continues for 15 years; numerals in international form; Eighth Schedule lists regional languages.',
        argumentsFor:
          'Saved the Constituent Assembly from breaking up; recognized Hindi’s preeminence without alienating southern and eastern states.',
        argumentsAgainst:
          'Postponed the crisis to 1965, triggering the violent anti-Hindi agitations in Tamil Nadu until Shastri passed the Official Languages Act.',
        impact: {
          liberty: 0,
          federalism: +10,
          executiveCapacity: 0
        },
        cadHistoricalQuote:
          '"This decision has not been arrived at by a majority vote of a party... It represents the greatest common measure of agreement." — N. Gopalaswami Ayyangar (Sep 12, 1949)',
        historicalSpeaker: 'N.G. Ayyangar',
        isAdoptedConstitutionHistory: true,
        historicalOutcomeNote:
          'Adopted as Part XVII. The 15-year limit ended in 1965, but Parliament passed the Official Languages Act (1963) ensuring English continues indefinitely alongside Hindi as an associate official language.'
      },
      {
        id: 'choice-6b',
        title: 'Declare Hindi the Sole National Language with Immediate English Ban',
        sponsor: 'Seth Govind Das & Purushottam Das Tandon',
        description:
          'All Union administration, Supreme Court judgments, and central exams immediately switch to Hindi within 1 year.',
        argumentsFor:
          'Complete decolonization of official discourse; promotes a single indigenous linguistic vehicle for national identity.',
        argumentsAgainst:
          'Would have led to civil revolt in non-Hindi speaking states and immediate administrative chaos in courts and civil services.',
        impact: {
          liberty: -10,
          federalism: -25,
          executiveCapacity: -15
        },
        cadHistoricalQuote:
          '"If we want India to remain united, we cannot tolerate the badge of slavery that English represents!" — Seth Govind Das',
        historicalSpeaker: 'Seth Govind Das',
        isAdoptedConstitutionHistory: false,
        historicalOutcomeNote:
          'Defeated in the Congress party caucus by a razor-thin margin before the compromise formula was brought to the floor.'
      },
      {
        id: 'choice-6c',
        title: 'Adopt Hindustani in Both Devanagari and Urdu Scripts',
        sponsor: 'Mahatma Gandhi’s Vision (Maulana Azad & Nehru)',
        description:
          'Hindustani—the composite bazaar language spoken across North India—written in both Persian and Devanagari scripts.',
        argumentsFor:
          'Reflects India’s composite Ganga-Jamuni tehzeeb and deep syncretic linguistic heritage.',
        argumentsAgainst:
          'Partition had polarized sentiments; Hindi purists aggressively rejected the Urdu script as associated with Pakistan.',
        impact: {
          liberty: +10,
          federalism: +5,
          executiveCapacity: -5
        },
        cadHistoricalQuote:
          '"Hindustani is the language that unites heart to heart without religious sectarianism." — Maulana Abul Kalam Azad',
        historicalSpeaker: 'Maulana Azad',
        isAdoptedConstitutionHistory: false,
        historicalOutcomeNote:
          'Gandhi and Nehru passionately advocated Hindustani, but the post-Partition communal climate rendered it politically impossible to pass.'
      }
    ],
    mainsAnalysisTakeaway:
      'Key for GS1 & GS2: Linguistic reorganization (Fazl Ali Commission, 1953-56), Three-Language Formula, and the constitutional architecture of Part XVII.'
  },
  {
    id: 'crisis-7-preventive-detention',
    number: 7,
    date: 'September 1949',
    debateTitle: 'Preventive Detention: Necessary Safeguard vs Constitutional Blemish',
    constitutionalPillar: 'Rule of Law & Criminal Jurisprudence',
    coreArticleRef: 'Article 22 (Clauses 3 to 7)',
    contextSummary:
      'India is the only major democratic constitution in the world that explicitly constitutionalizes peacetime preventive detention within its chapter on Fundamental Rights. Dr. Ambedkar defended it as an unavoidable necessity given the imminent threats of communal violence and subversion, but civil libertarians were appalled.',
    primaryKeynoteSpeakers: [
      {
        name: 'Dr. B.R. Ambedkar',
        role: 'Law Minister & Chairman',
        avatar: '👨‍⚖️',
        standpoint: 'Admitted the clause was painful, but insisted that constitutionalizing safeguards (Advisory Boards) was safer than leaving it to police discretion.'
      },
      {
        name: 'Bakshi Tek Chand',
        role: 'Former Lahore HC Judge',
        avatar: '⚖️',
        standpoint: 'Denounced putting preventive detention in Fundamental Rights as a cruel contradiction in terms.'
      },
      {
        name: 'Pandit Thakur Das Bhargava',
        role: 'Assembly Member',
        avatar: '📜',
        standpoint: 'Fought tooth and nail to insert mandatory grounds disclosure and maximum detention limits.'
      }
    ],
    choices: [
      {
        id: 'choice-7a',
        title: 'Constitutionalize Detention with Advisory Board Safeguards (Historical)',
        sponsor: 'Dr. B.R. Ambedkar & Drafting Committee',
        description:
          'Permit detention without trial for up to 3 months; longer detention requires review by an Advisory Board of High Court caliber.',
        argumentsFor:
          'Prevented total breakdown during communal riots, insurgency, and cross-border terrorism without resorting to martial law.',
        argumentsAgainst:
          'Created a permanent statutory regime of preventive detention (PD Act, MISA, TADA, POTA, UAPA) frequently used against dissidents.',
        impact: {
          liberty: -15,
          federalism: 0,
          executiveCapacity: +20
        },
        cadHistoricalQuote:
          '"It is a matter of great regret that I have had to introduce this article... But we must balance individual liberty with the existence of the State." — Dr. B.R. Ambedkar (Sep 15, 1949)',
        historicalSpeaker: 'Dr. B.R. Ambedkar',
        isAdoptedConstitutionHistory: true,
        historicalOutcomeNote:
          'Adopted as Article 22(3)-(7). Safeguards were tightened by the 44th Amendment (reducing 3 months to 2 months), though parts remain unnotified.'
      },
      {
        id: 'choice-7b',
        title: 'Total Ban on Peacetime Preventive Detention',
        sponsor: 'Bakshi Tek Chand & H.V. Kamath',
        description:
          'Preventive detention allowed strictly during external war emergencies under Article 352; zero detention without formal criminal charges in peace.',
        argumentsFor:
          'Aligns Indian jurisprudence with British common law and US 4th Amendment habeas corpus protections.',
        argumentsAgainst:
          'Would leave the newborn state vulnerable to espionage, communal riots, and sabotage during initial fragile years.',
        impact: {
          liberty: +25,
          federalism: 0,
          executiveCapacity: -20
        },
        cadHistoricalQuote:
          '"You are crowning the charter of liberty with the handcuffs of preventive detention." — Bakshi Tek Chand',
        historicalSpeaker: 'Bakshi Tek Chand',
        isAdoptedConstitutionHistory: false,
        historicalOutcomeNote:
          'Strongly pressed by jurist delegates, but rejected due to executive panic over Telangana communist uprising and border tensions.'
      },
      {
        id: 'choice-7c',
        title: 'Strict Judicial Pre-Authorization for Any Detention Exceeding 14 Days',
        sponsor: 'Thakur Das Bhargava Compromise Amendment',
        description:
          'Detention beyond 14 days requires an open-court warrant signed by a High Court Judge, with right to legal counsel.',
        argumentsFor:
          'Bridges civil liberties with state security through transparent judicial oversight.',
        argumentsAgainst:
          'Executive intelligence agencies argued revealing sensitive intelligence sources to judges would blow undercover operations.',
        impact: {
          liberty: +10,
          federalism: 0,
          executiveCapacity: -5
        },
        cadHistoricalQuote:
          '"Let the executive show probable cause to an independent magistrate." — Thakur Das Bhargava',
        historicalSpeaker: 'Thakur Das Bhargava',
        isAdoptedConstitutionHistory: false,
        historicalOutcomeNote:
          'Influenced the procedural requirements in later cases like Sunil Batra and D.K. Basu guidelines.'
      }
    ],
    mainsAnalysisTakeaway:
      'High-yield topic for Criminal Law & GS2: Article 22 procedural safeguards, UAPA bail stringencies (Section 43D(5)), and constitutional scrutiny of preventive detention.'
  },
  {
    id: 'crisis-8-judicial-appointments',
    number: 8,
    date: 'May 1949',
    debateTitle: 'Judicial Appointments: Executive Discretion vs Judicial Veto',
    constitutionalPillar: 'Separation of Powers & Judicial Independence',
    coreArticleRef: 'Articles 124(2) & 217(1)',
    contextSummary:
      'How should judges of the Supreme Court and High Courts be chosen? Delegates debated whether the President (Cabinet) should have the sole veto, or whether the Chief Justice of India should hold an absolute veto. Dr. Ambedkar rejected both extremes, crafting a middle path of "mandatory consultation".',
    primaryKeynoteSpeakers: [
      {
        name: 'Dr. B.R. Ambedkar',
        role: 'Law Minister & Chairman',
        avatar: '👨‍⚖️',
        standpoint: 'Neither the Chief Justice should hold an absolute individual veto, nor should the Executive have unfettered appointment power.'
      },
      {
        name: 'K.T. Shah',
        role: 'Assembly Member',
        avatar: '🏛️',
        standpoint: 'Demanded legislative confirmation by a 2/3rds majority of Parliament, similar to US Senate confirmation.'
      },
      {
        name: 'Alladi Krishnaswami Ayyar',
        role: 'Drafting Committee Member',
        avatar: '⚖️',
        standpoint: 'Warned that legislative confirmation in India would drag the judiciary into partisan political dogfights.'
      }
    ],
    choices: [
      {
        id: 'choice-8a',
        title: 'Presidential Appointment with Mandatory Consultation (Historical Choice)',
        sponsor: 'Dr. B.R. Ambedkar & Drafting Committee',
        description:
          'President appoints judges after "consultation" with the Chief Justice and senior judges; CJI has high moral weight but not a solo veto.',
        argumentsFor:
          'Balanced executive accountability with judicial expertise, preventing judicial self-perpetuating monopoly.',
        argumentsAgainst:
          'Led to executive supersession of judges during the 1970s, prompting the Supreme Court to invent the Collegium System in the Second Judges Case (1993).',
        impact: {
          liberty: +5,
          federalism: 0,
          executiveCapacity: +5
        },
        cadHistoricalQuote:
          '"To allow the Chief Justice practically a veto upon the appointment of judges is really to transfer the authority to the Chief Justice, which we are not prepared to do." — Dr. B.R. Ambedkar (May 24, 1949)',
        historicalSpeaker: 'Dr. B.R. Ambedkar',
        isAdoptedConstitutionHistory: true,
        historicalOutcomeNote:
          'Adopted in Article 124(2). The interpretation of "consultation" vs "concurrence" sparked the First Judges Case (1981), Second Judges Case (1993 - Collegium born), and the striking down of NJAC (99th Amendment) in 2015.'
      },
      {
        id: 'choice-8b',
        title: 'Concurrence: Absolute Veto for Chief Justice of India',
        sponsor: 'Conservative Judicial Wing',
        description:
          'No judge can be appointed without the explicit formal written concurrence of the Chief Justice of India.',
        argumentsFor:
          'Completely insulates the judiciary from executive favoritism, ideological loyalty tests, and political pressure.',
        argumentsAgainst:
          'Creates an unelected, unaccountable judicial oligopoly that appoints its own successors with zero democratic checks.',
        impact: {
          liberty: +10,
          federalism: 0,
          executiveCapacity: -10
        },
        cadHistoricalQuote:
          '"Judicial independence is illusory if the executive holds the purse and the appointment sword." — Jaspat Roy Kapoor',
        historicalSpeaker: 'Jaspat Roy Kapoor',
        isAdoptedConstitutionHistory: false,
        historicalOutcomeNote:
          'Explicitly rejected by Ambedkar in 1949, yet ironically adopted by the Supreme Court itself 44 years later through judicial interpretation in the 1993 Second Judges Case!'
      },
      {
        id: 'choice-8c',
        title: 'Parliamentary Confirmation by 2/3rds Joint Session (US Model)',
        sponsor: 'Prof. K.T. Shah',
        description:
          'President nominates candidates, but each appointment must be scrutinized in public hearings and confirmed by Parliament.',
        argumentsFor:
          'Complete democratic transparency; candidates’ judicial philosophy is examined in the open daylight of public scrutiny.',
        argumentsAgainst:
          'Would politicize every judicial vacancy; candidates would cater to parliamentary majorities and regional lobbies.',
        impact: {
          liberty: -5,
          federalism: +5,
          executiveCapacity: -5
        },
        cadHistoricalQuote:
          '"Why should the selection of the guardians of our Constitution be made in secret executive chambers?" — Prof. K.T. Shah',
        historicalSpeaker: 'Prof. K.T. Shah',
        isAdoptedConstitutionHistory: false,
        historicalOutcomeNote:
          'Firmly rejected by Alladi Krishnaswami Ayyar and Ambedkar as unsuitable for India’s multi-party parliamentary democracy.'
      }
    ],
    mainsAnalysisTakeaway:
      'Essential for GS2 & Judiciary exams: The Three Judges Cases, the rise and critiques of the Collegium System, the NJAC judgment (2015), and Memorandum of Procedure (MoP).'
  },
  {
    id: 'crisis-9-privy-purses',
    number: 9,
    date: 'October 1949',
    debateTitle: 'Privy Purses & Princely Integration: Solemn Treaty vs Democratic Equality',
    constitutionalPillar: 'National Territorial Integration vs Republican Equality',
    coreArticleRef: 'Original Articles 291 & 362 (Covenants with Rulers)',
    contextSummary:
      'Sardar Patel achieved the miraculous integration of 565 princely states through persuasion, pressure, and solemn constitutional covenants promising tax-free privy purses and hereditary privileges. Socialist delegates protested that paying millions of rupees annually to former feudal autocrats violated the Preamble’s pledge of equality.',
    primaryKeynoteSpeakers: [
      {
        name: 'Sardar Vallabhbhai Patel',
        role: 'Deputy PM & States Minister',
        avatar: '🦁',
        standpoint: 'A great power does not begin its history by breaking sacred covenants made in exchange for half of India’s territory.'
      },
      {
        name: 'Damodar Swarup Seth',
        role: 'Socialist Delegate',
        avatar: '🚩',
        standpoint: 'A Republic cannot maintain a state-funded parasitic aristocracy while millions of peasants starve.'
      },
      {
        name: 'V.P. Menon',
        role: 'Secretary, Ministry of States',
        avatar: '📜',
        standpoint: 'The privy purses were a microscopic price to pay for integrating 500,000 square miles without firing a bullet.'
      }
    ],
    choices: [
      {
        id: 'choice-9a',
        title: 'Honour Constitutional Guarantees for Privy Purses (Historical Choice)',
        sponsor: 'Sardar Vallabhbhai Patel & Ministry of States',
        description:
          'Insert Articles 291 and 362 guaranteeing tax-free privy purses charged directly on the Consolidated Fund of India.',
        argumentsFor:
          'Secured peaceful, bloodless unification of the subcontinent; preserved the moral credibility and honor of the new Republic.',
        argumentsAgainst:
          'Created an anomalous constitutionally-sanctioned class of titled royalty inside a democratic republic.',
        impact: {
          liberty: 0,
          federalism: +10,
          executiveCapacity: +10
        },
        cadHistoricalQuote:
          '"It would be a breach of faith to repudiate the commitments we made when they surrendered their kingdoms to the Union." — Sardar Vallabhbhai Patel (Oct 12, 1949)',
        historicalSpeaker: 'Sardar Patel',
        isAdoptedConstitutionHistory: true,
        historicalOutcomeNote:
          'Guaranteed until 1970, when Indira Gandhi’s government derecognized rulers by presidential order (struck down in Madhav Rao Scindia). Parliament then passed the 26th Amendment (1971) permanently abolishing privy purses.'
      },
      {
        id: 'choice-9b',
        title: 'One-Time Cash Terminal Settlement (No Perpetual Purses)',
        sponsor: 'Socialist & Radical Reformers',
        description:
          'Pay princes a one-time lump sum rehabilitation grant, with zero hereditary annuities or tax exemptions for future heirs.',
        argumentsFor:
          'Upholds strict republican equality from Day 1 and prevents perpetual drain on national development funds.',
        argumentsAgainst:
          'Princes of major states (Hyderabad, Mysore, Gwalior, Travancore) might have hesitated or demanded independent UN representation.',
        impact: {
          liberty: +5,
          federalism: -10,
          executiveCapacity: -5
        },
        cadHistoricalQuote:
          '"Let us give them an honorable exit, not a perpetual pension on our children’s taxes." — Damodar Swarup Seth',
        historicalSpeaker: 'Damodar Swarup Seth',
        isAdoptedConstitutionHistory: false,
        historicalOutcomeNote:
          'Socialist delegates strongly advocated this, but Patel’s immense authority in the Assembly carried the solemn guarantees.'
      },
      {
        id: 'choice-9c',
        title: 'Privy Purses Conditioned on Regional Industrial Investment',
        sponsor: 'Industrial Development Compromise',
        description:
          'Princes receive purses only on condition that 70% is reinvested into public joint ventures, dams, and universities in their former states.',
        argumentsFor:
          'Channels feudal private wealth directly into national industrialization.',
        argumentsAgainst:
          'Complex administrative monitoring would lead to protracted litigation and evasive asset transfers.',
        impact: {
          liberty: 0,
          federalism: +5,
          executiveCapacity: +5
        },
        cadHistoricalQuote:
          '"Let the princes become trustees of national industry." — Syama Prasad Mookerjee',
        historicalSpeaker: 'S.P. Mookerjee',
        isAdoptedConstitutionHistory: false,
        historicalOutcomeNote:
          'Some princely houses did this voluntarily, but the Assembly adopted unconditional guarantees to finalize the accession treaties.'
      }
    ],
    mainsAnalysisTakeaway:
      'High relevance for Post-Independence Consolidation (GS1) & Constitutional Law (GS2): The Privy Purse cases (Madhav Rao Scindia, 1971) and the 26th Amendment.'
  },
  {
    id: 'crisis-10-preamble',
    number: 10,
    date: 'October 1949',
    debateTitle: 'The Preamble: "In the Name of God", Secularism, and Ultimate Sovereignty',
    constitutionalPillar: 'Foundational Identity & Philosophy of the Republic',
    coreArticleRef: 'The Preamble (Objective Resolution)',
    contextSummary:
      'As the Assembly finalized the Constitution, delegates turned to the Preamble. H.V. Kamath moved an amendment to begin with: "In the name of God, We, the people of India...". Shibban Lal Saksena wanted to dedicate it to Mahatma Gandhi. Hriday Nath Kunzru and others argued passionately that invoking God or a specific mortal would violate the freedom of conscience of non-believers and subvert secularism.',
    primaryKeynoteSpeakers: [
      {
        name: 'H.V. Kamath',
        role: 'Forward Bloc Leader',
        avatar: '⚡',
        standpoint: 'Moved that the spiritual soul of India must be recognized by opening the Constitution in the name of God.'
      },
      {
        name: 'Pandit Hriday Nath Kunzru',
        role: 'Senior Parliamentarian',
        avatar: '📜',
        standpoint: 'Invoking God in a legal document forces a religious oath onto citizens who may be atheists or agnostics.'
      },
      {
        name: 'Dr. Rajendra Prasad',
        role: 'President of the Assembly',
        avatar: '🏛️',
        standpoint: 'Regretted that the name of God was subjected to a division of votes on the floor of the House.'
      }
    ],
    choices: [
      {
        id: 'choice-10a',
        title: 'Begin Purely with "WE, THE PEOPLE OF INDIA" (Historical Choice)',
        sponsor: 'Objective Resolution Framework (Nehru & Drafting Committee)',
        description:
          'Locate absolute, unadulterated sovereignty in the People of India, without invoking deities or specific individuals.',
        argumentsFor:
          'Establishes an inclusive, secular republic where every citizen stands as an equal co-sovereign regardless of faith or non-faith.',
        argumentsAgainst:
          'Some traditionalists argued it made the Constitution appear overly secularized and detached from India’s civilizational ethos.',
        impact: {
          liberty: +10,
          federalism: 0,
          executiveCapacity: 0
        },
        cadHistoricalQuote:
          '"We are creating a Constitution for all peoples of India. By invoking God, we are imposing our beliefs on those who may not share them." — Pandit H.N. Kunzru (Oct 17, 1949)',
        historicalSpeaker: 'Hriday Nath Kunzru',
        isAdoptedConstitutionHistory: true,
        historicalOutcomeNote:
          'Kamath’s amendment to include God was put to a division and defeated 68 to 41. The Preamble opens cleanly with "WE, THE PEOPLE OF INDIA".'
      },
      {
        id: 'choice-10b',
        title: 'Adopt Kamath’s Amendment: "In the Name of God"',
        sponsor: 'H.V. Kamath & Traditionalist Delegates',
        description:
          'Open the Preamble with "In the name of God, We, the people of India...".',
        argumentsFor:
          'Echoes the Irish and American preambular invocations of Divine Providence; resonates with the religious soul of Bharat.',
        argumentsAgainst:
          'Sets a dangerous theological precedent that could be exploited by sectarian forces to diminish the rights of religious minorities and rationalists.',
        impact: {
          liberty: -15,
          federalism: 0,
          executiveCapacity: +5
        },
        cadHistoricalQuote:
          '"Can we not invoke the Almighty in whose presence this great nation was born?" — H.V. Kamath',
        historicalSpeaker: 'H.V. Kamath',
        isAdoptedConstitutionHistory: false,
        historicalOutcomeNote:
          'Kamath insisted on a vote despite appeals from Dr. Rajendra Prasad. When the amendment fell, Dr. Prasad lamented putting God to a vote.'
      },
      {
        id: 'choice-10c',
        title: 'Explicitly Dedicate the Constitution to Mahatma Gandhi',
        sponsor: 'Prof. Shibban Lal Saksena Amendment',
        description:
          'Open with: "Dedicated to the memory of Mahatma Gandhi, Father of the Nation, We, the people...".',
        argumentsFor:
          'Solemn national tribute to the moral architect of Indian liberation.',
        argumentsAgainst:
          'A constitutional charter belongs to the timeless citizenry, not to any individual mortal, however revered.',
        impact: {
          liberty: 0,
          federalism: 0,
          executiveCapacity: 0
        },
        cadHistoricalQuote:
          '"The Father of the Nation belongs in our hearts and actions, not as a legal preamble that courts might dissect." — J.B. Kripalani',
        historicalSpeaker: 'J.B. Kripalani',
        isAdoptedConstitutionHistory: false,
        historicalOutcomeNote:
          'Withdrawn after J.B. Kripalani gently urged the House not to subject the Mahatma’s name to parliamentary debate.'
      }
    ],
    mainsAnalysisTakeaway:
      'Foundational for GS2 & Judiciary: The Preamble as part of the Constitution (Kesavananda Bharati, 1973), its unalterable core under the Basic Structure doctrine, and the 42nd Amendment (1976).'
  }
];

export interface PlayerRpgResult {
  archetypeTitle: string;
  archetypeBadge: string;
  archetypeDescription: string;
  finalMeters: {
    liberty: number;
    federalism: number;
    executiveCapacity: number;
  };
  alignmentRate: number; // percentage match with actual 1950 Indian Constitution
  xpEarned: number;
}

export function calculateAssemblyOutcome(
  choicesMade: Record<string, string>,
  meters: { liberty: number; federalism: number; executiveCapacity: number }
): PlayerRpgResult {
  let historicalMatches = 0;
  const totalCrises = ASSEMBLY_CRISES.length;

  ASSEMBLY_CRISES.forEach((crisis) => {
    const chosenId = choicesMade[crisis.id];
    const chosenOption = crisis.choices.find((c) => c.id === chosenId);
    if (chosenOption && chosenOption.isAdoptedConstitutionHistory) {
      historicalMatches++;
    }
  });

  const alignmentRate = Math.round((historicalMatches / totalCrises) * 100);

  // Determine Archetype
  let archetypeTitle = 'The Constitutional Architect';
  let archetypeBadge = '🏛️';
  let archetypeDescription =
    'You navigated the volatile Central Hall with supreme equilibrium, balancing individual liberties, federal autonomy, and decisive executive capacity.';

  if (meters.liberty >= 75) {
    archetypeTitle = 'The Fierce Civil Libertarian';
    archetypeBadge = '🕊️';
    archetypeDescription =
      'In the spirit of H.V. Kamath and K.M. Munshi, you prioritized individual human rights and habeas corpus above all state conveniences.';
  } else if (meters.executiveCapacity >= 75) {
    archetypeTitle = 'The Bismarck of India';
    archetypeBadge = '⚡';
    archetypeDescription =
      'Like Sardar Vallabhbhai Patel and the administrative realists, you prioritized state capacity, internal security, and national survival.';
  } else if (meters.federalism >= 75) {
    archetypeTitle = 'The Champion of Provincial Autonomy';
    archetypeBadge = '🌊';
    archetypeDescription =
      'Like the Madras delegates and K. Santhanam, you fought fiercely to preserve state sovereignty and prevent New Delhi centralization.';
  }

  const xpEarned = 1500 + alignmentRate * 10;

  return {
    archetypeTitle,
    archetypeBadge,
    archetypeDescription,
    finalMeters: meters,
    alignmentRate,
    xpEarned
  };
}
