export interface Schedule7ListEntry {
  entryNumber: string | number;
  subject: string;
  notes: string;
  isHighYield: boolean;
}

export interface Schedule7List {
  name: string;
  hindiName: string;
  originalCount: number;
  currentCount: number;
  exclusivePowerArticle: string;
  highYieldEntries: Schedule7ListEntry[];
  taxingEntries: string[];
  examinerTraps: string[];
}

export const SCHEDULE_7_LISTS: Record<'union' | 'state' | 'concurrent', Schedule7List> = {
  union: {
    name: 'List I (Union List)',
    hindiName: 'संघ सूची',
    originalCount: 97,
    currentCount: 100,
    exclusivePowerArticle: 'Article 246(1)',
    highYieldEntries: [
      { entryNumber: 1, subject: 'Defence of India', notes: 'Armed forces, naval, military and air forces', isHighYield: true },
      { entryNumber: 6, subject: 'Atomic energy and mineral resources', notes: 'Exclusively central authority', isHighYield: true },
      { entryNumber: 9, subject: 'Preventive detention for reasons connected with Defence, Foreign Affairs, or security of India', notes: 'Distinguish from Entry 3 Concurrent List (security of State)', isHighYield: true },
      { entryNumber: 10, subject: 'Foreign Affairs and diplomatic representation', notes: 'All international matters', isHighYield: true },
      { entryNumber: 14, subject: 'Entering into treaties and agreements with foreign countries', notes: 'Enforced via Article 253', isHighYield: true },
      { entryNumber: 22, subject: 'Railways', notes: 'State police handles railway policing under List II, but railways is List I', isHighYield: true },
      { entryNumber: 23, subject: 'National Highways', notes: 'Declared by or under law made by Parliament', isHighYield: true },
      { entryNumber: 36, subject: 'Currency, coinage and legal tender; foreign exchange', notes: 'Monetary policy', isHighYield: true },
      { entryNumber: 45, subject: 'Banking', notes: 'Regulation of banks and financial institutions', isHighYield: true },
      { entryNumber: 77, subject: 'Constitution, organisation, jurisdiction and powers of the Supreme Court', notes: 'Exclusively Union List', isHighYield: true },
      { entryNumber: 78, subject: 'Constitution and organisation of High Courts', notes: 'HIGH YIELD TRAP: High Court constitution is List I, but administration of justice is List III!', isHighYield: true },
      { entryNumber: 82, subject: 'Taxes on income other than agricultural income', notes: 'Agricultural income tax belongs exclusively to States (List II Entry 46)', isHighYield: true },
      { entryNumber: 97, subject: 'Residuary Powers: Any other matter not enumerated in List II or List III', notes: 'Article 248 vests all residuary legislative & taxing powers in Parliament', isHighYield: true }
    ],
    taxingEntries: [
      'Entry 82: Income Tax (non-agricultural)',
      'Entry 83: Customs duties (including export duties)',
      'Entry 84: Union Excise duties (manufacture of petroleum, tobacco)',
      'Entry 85: Corporation Tax',
      'Entry 86: Taxes on capital value of assets of individuals and companies',
      'Entry 87: Estate duty in respect of property other than agricultural land'
    ],
    examinerTraps: [
      'TRAP 1: Residuary Power (Entry 97 & Art 248) belongs EXCLUSIVELY to Parliament. In the USA and Australia, residuary powers belong to the States!',
      'TRAP 2: Constitution and organisation of High Courts is in the UNION LIST (Entry 78), not the State List! However, "Administration of justice" is in the Concurrent List (Entry 11A).',
      'TRAP 3: Income tax on AGRICULTURAL INCOME is strictly in the State List (Entry 46); Parliament CANNOT levy income tax on agricultural income under Entry 82!'
    ]
  },
  state: {
    name: 'List II (State List)',
    hindiName: 'राज्य सूची',
    originalCount: 66,
    currentCount: 61,
    exclusivePowerArticle: 'Article 246(3)',
    highYieldEntries: [
      { entryNumber: 1, subject: 'Public Order (but not including use of naval, military or air forces)', notes: 'Primary state police responsibility', isHighYield: true },
      { entryNumber: 2, subject: 'Police (including railway and village police)', notes: 'Subject to Entry 2A of List I', isHighYield: true },
      { entryNumber: 3, subject: 'Officers and servants of the High Court; procedure in rent and revenue courts', notes: 'State authority', isHighYield: false },
      { entryNumber: 4, subject: 'Prisons, reformatories, Borstal institutions', notes: 'State prison management', isHighYield: true },
      { entryNumber: 5, subject: 'Local government (Municipalities, Panchayats, improvement trusts)', notes: 'Basis for 73rd/74th amendments', isHighYield: true },
      { entryNumber: 6, subject: 'Public health and sanitation; hospitals and dispensaries', notes: 'State health infrastructure', isHighYield: true },
      { entryNumber: 8, subject: 'Intoxicating liquors (production, manufacture, possession, sale)', notes: 'State liquor excise and prohibition authority', isHighYield: true },
      { entryNumber: 14, subject: 'Agriculture, including agricultural education and research', notes: 'Pest prevention and plant diseases', isHighYield: true },
      { entryNumber: 18, subject: 'Land (rights in or over land, land tenures, landlord and tenant relations)', notes: 'Key for land reforms and tenancy', isHighYield: true },
      { entryNumber: 34, subject: 'Betting and gambling', notes: 'State regulation of lotteries/gambling', isHighYield: true },
      { entryNumber: 46, subject: 'Taxes on agricultural income', notes: 'Exclusive state tax power', isHighYield: true },
      { entryNumber: 49, subject: 'Taxes on lands and buildings (Property Tax)', notes: 'Local municipal revenue basis', isHighYield: true },
      { entryNumber: 51, subject: 'State excise duties on alcoholic liquors for human consumption and opium', notes: 'Outside GST purview', isHighYield: true }
    ],
    taxingEntries: [
      'Entry 45: Land revenue',
      'Entry 46: Taxes on agricultural income',
      'Entry 49: Taxes on lands and buildings (Property tax)',
      'Entry 51: State excise duties on alcohol for human consumption',
      'Entry 53: Taxes on consumption or sale of electricity',
      'Entry 54: Taxes on sale of petroleum crude, high speed diesel, petrol, natural gas, aviation turbine fuel, and alcoholic liquor for human consumption',
      'Entry 59: Tolls',
      'Entry 62: Taxes on luxuries, including entertainment, betting and gambling'
    ],
    examinerTraps: [
      'TRAP 1: The 42nd Amendment (1976) TRANSFERRED 5 SUBJECTS from the State List to the Concurrent List: (1) Education, (2) Forests, (3) Weights and Measures, (4) Protection of wild animals and birds, and (5) Administration of justice.',
      'TRAP 2: Police and Public Health remain purely in the STATE LIST.',
      'TRAP 3: Alcohol for human consumption is kept EXCLUSIVELY with States for both excise (Entry 51) and sales tax (Entry 54), entirely outside GST under Art 279A.'
    ]
  },
  concurrent: {
    name: 'List III (Concurrent List)',
    hindiName: 'समवर्ती सूची',
    originalCount: 47,
    currentCount: 52,
    exclusivePowerArticle: 'Article 246(2)',
    highYieldEntries: [
      { entryNumber: 1, subject: 'Criminal Law (excluding offences against laws with respect to List I or List II matters)', notes: 'IPC / Bharatiya Nyaya Sanhita', isHighYield: true },
      { entryNumber: 2, subject: 'Criminal Procedure (CrPC / Bharatiya Nagarik Suraksha Sanhita)', notes: 'Both Parliament and States can legislate', isHighYield: true },
      { entryNumber: 3, subject: 'Preventive detention for reasons connected with the security of a State, public order, or supplies', notes: 'Concurrent jurisdiction', isHighYield: true },
      { entryNumber: 5, subject: 'Marriage and divorce; infants and minors; adoption; wills; succession', notes: 'Personal laws / Uniform Civil Code', isHighYield: true },
      { entryNumber: '11A', subject: 'Administration of justice; constitution and organisation of all courts, EXCEPT the Supreme Court and High Courts', notes: 'TRANSFERRED FROM STATE LIST BY 42ND CAA 1976', isHighYield: true },
      { entryNumber: '17A', subject: 'Forests', notes: 'TRANSFERRED FROM STATE LIST BY 42ND CAA 1976 (Forest Conservation Act 1980)', isHighYield: true },
      { entryNumber: '17B', subject: 'Protection of wild animals and birds', notes: 'TRANSFERRED FROM STATE LIST BY 42ND CAA 1976 (Wildlife Protection Act 1972)', isHighYield: true },
      { entryNumber: 20, subject: 'Economic and social planning', notes: 'Planning Commission / NITI Aayog policy scope', isHighYield: true },
      { entryNumber: 22, subject: 'Trade unions; industrial and labour disputes', notes: 'Labour laws and social security', isHighYield: true },
      { entryNumber: 25, subject: 'Education, including technical education, medical education and universities', notes: 'TRANSFERRED FROM STATE LIST BY 42ND CAA 1976 (RTE Act, UGC, NEET)', isHighYield: true },
      { entryNumber: '33A', subject: 'Weights and measures except establishment of standards', notes: 'TRANSFERRED FROM STATE LIST BY 42ND CAA 1976', isHighYield: true },
      { entryNumber: 38, subject: 'Electricity', notes: 'Electricity Act 2003', isHighYield: true }
    ],
    taxingEntries: [
      'Entry 44: Stamp duties other than duties or fees collected by means of judicial stamps, but not including rates of stamp duty'
    ],
    examinerTraps: [
      'TRAP 1: The Concept of the Concurrent List was BORROWED FROM THE AUSTRALIAN CONSTITUTION.',
      'TRAP 2: In case of a conflict between a Central Law and a State Law on a Concurrent List subject, CENTRAL LAW NORMALLY PREVAILS under Article 254(1).',
      'TRAP 3: THE PRESIDENTIAL EXCEPTION: If a State law receives the ASSENT OF THE PRESIDENT under Article 254(2), the State law PREVAILS in that State! (However, Parliament can still override it later under the proviso).'
    ]
  }
};

export interface GatewayException {
  article: string;
  name: string;
  condition: string;
  parliamentaryProcedure: string;
  durationOfLaw: string;
  canConsentingStatesRepeal: string;
  landmarkContext: string;
  examinerTrap: string;
}

export const FIVE_PARLIAMENT_GATEWAYS: GatewayException[] = [
  {
    article: 'Article 249',
    name: 'Legislation in National Interest on Rajya Sabha Resolution',
    condition: 'Rajya Sabha declares by resolution that it is necessary or expedient in the national interest that Parliament should make laws on a matter in the State List.',
    parliamentaryProcedure: 'Special Majority in RAJYA SABHA ONLY: Supported by not less than TWO-THIRDS (2/3rd) of members present and voting. (Lok Sabha does not pass this initiating resolution).',
    durationOfLaw: 'Resolution remains in force for MAX 1 YEAR at a time (can be renewed repeatedly for 1 year each). Once the resolution ceases to be in force, the parliamentary law LAPSES SIX MONTHS after expiry.',
    canConsentingStatesRepeal: 'States still retain power to make laws on that subject, but in case of inconsistency, Parliament’s law prevails (Art 251).',
    landmarkContext: 'Protects national interest while maintaining federal legitimacy through the Council of States.',
    examinerTrap: 'TRAP: Resolution requires 2/3rd of members PRESENT AND VOTING in the RAJYA SABHA ONLY. Lok Sabha approval is NOT needed for the initiating resolution (though Lok Sabha votes on the bill subsequently).'
  },
  {
    article: 'Article 250',
    name: 'Legislation During Proclamation of National Emergency',
    condition: 'While a Proclamation of National Emergency under Article 352 is in operation.',
    parliamentaryProcedure: 'Parliament acquires plenary, concurrent power to make laws for the whole or any part of the territory of India on ANY subject in the State List.',
    durationOfLaw: 'The law ceases to have effect on the expiration of a period of SIX MONTHS after the emergency proclamation has ceased to operate.',
    canConsentingStatesRepeal: 'State Legislature can still make laws, but parliamentary law prevails during the emergency (Art 251).',
    landmarkContext: 'Unitary shift during external aggression or war.',
    examinerTrap: 'TRAP: State Legislatures are NOT dissolved or suspended under Art 250! They continue to exist and can make laws, but their laws are subordinate to parliamentary laws if repugnant.'
  },
  {
    article: 'Article 252',
    name: 'Legislation by Consent of Two or More States',
    condition: 'When the Legislatures of TWO OR MORE STATES pass resolutions requesting Parliament to enact a law on a State List subject.',
    parliamentaryProcedure: 'Resolutions passed by the Legislative Assemblies (and Councils where applicable) of at least two States. Parliament then enacts the law, which applies to those consenting States and any other State that subsequently adopts it by resolution.',
    durationOfLaw: 'Remains in force until amended or repealed by PARLIAMENT.',
    canConsentingStatesRepeal: 'HIGH YIELD TRAP: The consenting States CANNOT amend or repeal this law! Under Article 252(2), ANY AMENDMENT OR REPEAL MUST BE DONE BY PARLIAMENT ALONE, completely stripping the consenting States of their power over that statute!',
    landmarkContext: 'Wild Life (Protection) Act 1972, Water (Prevention and Control of Pollution) Act 1974, Urban Land (Ceiling and Regulation) Act 1976 were all passed under Article 252.',
    examinerTrap: 'BIGGEST PRELIMS TRAP: Once States surrender their power under Article 252, they CANNOT unilaterally amend or repeal the resulting Act! Only PARLIAMENT can amend or repeal an Art 252 statute.'
  },
  {
    article: 'Article 253',
    name: 'Legislation to Implement International Treaties and Agreements',
    condition: 'To implement any treaty, agreement, or convention with any foreign country or countries, or any decision made at any international conference, association, or body.',
    parliamentaryProcedure: 'Parliament can enact legislation on ANY State List subject for the whole or any part of India. NO CONSENT OF THE STATES IS REQUIRED!',
    durationOfLaw: 'Normal plenary statute duration (permanent until repealed).',
    canConsentingStatesRepeal: 'States have no power to override or obstruct.',
    landmarkContext: 'United Nations (Privileges and Immunities) Act 1947, Anti-Hijacking Act, TRIPS-compliant Patent amendments, Environmental legislation (Environment Protection Act 1986 passed to implement Stockholm Conference 1972).',
    examinerTrap: 'TRAP: Parliament does NOT need the permission, resolution, or concurrence of ANY State government to make laws on a State subject to fulfill international treaty obligations under Article 253!'
  },
  {
    article: 'Article 356',
    name: 'Legislation Under President’s Rule (State Emergency)',
    condition: 'When a Proclamation of President’s Rule under Article 356 is in operation in a State.',
    parliamentaryProcedure: 'President declares that the powers of the Legislature of the State shall be exercisable by or under the authority of Parliament (Art 356(1)(b)). Parliament usually delegates this power to the President (Art 357).',
    durationOfLaw: 'Under 44th CAA 1978, laws made by Parliament or President during President’s Rule DO NOT automatically lapse upon the end of President’s Rule. They continue until altered, repealed, or amended by the re-established State Legislature.',
    canConsentingStatesRepeal: 'The re-elected State Legislature can amend or repeal it.',
    landmarkContext: 'Direct federal substitution during constitutional machinery failure.',
    examinerTrap: 'TRAP: Laws made during President’s Rule DO NOT automatically expire when President’s Rule ends! They continue in force until the State Legislature chooses to alter or repeal them.'
  }
];
