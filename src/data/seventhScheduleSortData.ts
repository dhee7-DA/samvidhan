// Seventh Schedule Speed Sorter Data — Article 246 Legislative Lists
// Essential for UPSC Prelims & State Judiciary jurisdiction questions

export type LegislativeList = 'union' | 'state' | 'concurrent';

export interface ScheduleItem {
  id: string;
  subject: string;
  list: LegislativeList;
  entryNumber: string;
  landmarkOrAmdt?: string;
  trapNote: string;
}

export const SEVENTH_SCHEDULE_ITEMS: ScheduleItem[] = [
  // =========================================================================
  // 1. CONCURRENT LIST (LIST III) — HIGH-YIELD & 42ND AMENDMENT TRANSFERS
  // =========================================================================
  {
    id: 'forests',
    subject: 'Forests',
    list: 'concurrent',
    entryNumber: 'Entry 17A',
    landmarkOrAmdt: '42nd Amendment Act 1976',
    trapNote: 'Originally Entry 19 of State List. Transferred to Concurrent List by 42nd Amendment to enable national conservation laws.'
  },
  {
    id: 'education',
    subject: 'Education',
    list: 'concurrent',
    entryNumber: 'Entry 25',
    landmarkOrAmdt: '42nd Amendment Act 1976',
    trapNote: 'Originally Entry 11 of State List. Transferred to Concurrent List; allowed Parliament to enact RTE Act 2009.'
  },
  {
    id: 'wild-animals',
    subject: 'Protection of Wild Animals and Birds',
    list: 'concurrent',
    entryNumber: 'Entry 17B',
    landmarkOrAmdt: '42nd Amendment Act 1976',
    trapNote: 'Shifted from State List to Concurrent List by 42nd Amendment; empowered Wildlife Protection Act.'
  },
  {
    id: 'weights-measures',
    subject: 'Weights and Measures (except establishment of standards)',
    list: 'concurrent',
    entryNumber: 'Entry 33A',
    landmarkOrAmdt: '42nd Amendment Act 1976',
    trapNote: 'Establishment of standards remains in Union List (Entry 50), but general administration is Concurrent.'
  },
  {
    id: 'subordinate-courts',
    subject: 'Administration of Justice (Constitution of Subordinate Courts)',
    list: 'concurrent',
    entryNumber: 'Entry 11A',
    landmarkOrAmdt: '42nd Amendment Act 1976',
    trapNote: 'Shifted from State List by 42nd Amendment. Supreme Court and High Courts organization remains Union List (Entry 77 & 78).'
  },
  {
    id: 'criminal-law',
    subject: 'Criminal Law (including Indian Penal Code)',
    list: 'concurrent',
    entryNumber: 'Entry 1',
    trapNote: 'Concurrent! States can amend penal provisions with Presidential assent under Article 254(2).'
  },
  {
    id: 'criminal-procedure',
    subject: 'Criminal Procedure (CrPC / BNSS)',
    list: 'concurrent',
    entryNumber: 'Entry 2',
    trapNote: 'Both Parliament and State Legislatures can legislate on criminal investigation and bail procedures.'
  },
  {
    id: 'marriage-divorce',
    subject: 'Marriage and Divorce; Infants and Minors; Adoption',
    list: 'concurrent',
    entryNumber: 'Entry 5',
    trapNote: 'Family laws and personal code legislation fall squarely in the Concurrent List.'
  },
  {
    id: 'bankruptcy',
    subject: 'Bankruptcy and Insolvency',
    list: 'concurrent',
    entryNumber: 'Entry 9',
    trapNote: 'Candidates often mistake IBC for Union List. It is Concurrent List Entry 9!'
  },
  {
    id: 'civil-procedure',
    subject: 'Civil Procedure (CPC)',
    list: 'concurrent',
    entryNumber: 'Entry 13',
    trapNote: 'Concurrent jurisdiction allows state high courts and assemblies to make local CPC amendments.'
  },
  {
    id: 'trade-unions',
    subject: 'Trade Unions; Industrial and Labor Disputes',
    list: 'concurrent',
    entryNumber: 'Entry 22',
    trapNote: 'Labor welfare, trade union registration, and factory disputes are Concurrent.'
  },
  {
    id: 'economic-social-planning',
    subject: 'Economic and Social Planning',
    list: 'concurrent',
    entryNumber: 'Entry 20',
    trapNote: 'NITI Aayog, Five-Year Plans, and State Planning Boards operate under this Concurrent entry.'
  },
  {
    id: 'electricity',
    subject: 'Electricity',
    list: 'concurrent',
    entryNumber: 'Entry 38',
    trapNote: 'Power generation, transmission, and tariff regulation are subject to both Union and State electricity acts.'
  },
  {
    id: 'price-control',
    subject: 'Price Control',
    list: 'concurrent',
    entryNumber: 'Entry 34',
    trapNote: 'Essential Commodities Act and emergency price ceilings derive power from this Concurrent entry.'
  },
  {
    id: 'stamp-duties',
    subject: 'Stamp Duties (other than rates of stamp duty on bills of exchange)',
    list: 'concurrent',
    entryNumber: 'Entry 44',
    trapNote: 'Fixing rates on bills of exchange is Union (Entry 91), but general stamp duty is Concurrent.'
  },

  // =========================================================================
  // 2. STATE LIST (LIST II) — EXCLUSIVE STATE JURISDICTION & TRAPS
  // =========================================================================
  {
    id: 'public-order',
    subject: 'Public Order (excluding use of naval, military or air forces)',
    list: 'state',
    entryNumber: 'Entry 1',
    trapNote: 'Core State power. Parliament cannot legislate on general public order inside states.'
  },
  {
    id: 'police',
    subject: 'Police (including railway and village police)',
    list: 'state',
    entryNumber: 'Entry 2',
    trapNote: 'State police departments are strictly under State jurisdiction. CBI requires state consent.'
  },
  {
    id: 'public-health',
    subject: 'Public Health and Sanitation; Hospitals and Dispensaries',
    list: 'state',
    entryNumber: 'Entry 6',
    trapNote: 'Hospitals and medical care are primary State subjects, though pandemic epidemic acts draw concurrent emergency power.'
  },
  {
    id: 'prisons',
    subject: 'Prisons, Reformatories, and Borstal Institutions',
    list: 'state',
    entryNumber: 'Entry 4',
    trapNote: 'Prison management and inmate remission rules are state-exclusive powers.'
  },
  {
    id: 'intoxicating-liquors',
    subject: 'Intoxicating Liquors (production, manufacture, possession, transport)',
    list: 'state',
    entryNumber: 'Entry 8',
    trapNote: 'Explains why Bihar and Gujarat can declare prohibition while other states levy high excise.'
  },
  {
    id: 'agriculture',
    subject: 'Agriculture (including agricultural education & research)',
    list: 'state',
    entryNumber: 'Entry 14',
    trapNote: 'Crucial in Farm Laws debate! Core farming and tenure are State List Entry 14.'
  },
  {
    id: 'water-supplies',
    subject: 'Water (supplies, irrigation, canals, drainage, embankments)',
    list: 'state',
    entryNumber: 'Entry 17',
    trapNote: 'Subject to Entry 56 of Union List (Inter-State Rivers regulation by Parliament).'
  },
  {
    id: 'land-tenure',
    subject: 'Land (rights in or over land, land tenures, collection of rents)',
    list: 'state',
    entryNumber: 'Entry 18',
    trapNote: 'Land reform and tenancy laws are exclusive State legislative powers.'
  },
  {
    id: 'fisheries',
    subject: 'Fisheries (inland and territorial waters)',
    list: 'state',
    entryNumber: 'Entry 21',
    trapNote: 'Inland and territorial waters fishing is State; fishing beyond territorial waters is Union (Entry 57).'
  },
  {
    id: 'local-government',
    subject: 'Local Government (Municipalities, Panchayats, Improvement Trusts)',
    list: 'state',
    entryNumber: 'Entry 5',
    trapNote: '73rd and 74th Amendments created constitutional status, but local government remains State List Entry 5.'
  },
  {
    id: 'betting-gambling',
    subject: 'Betting and Gambling',
    list: 'state',
    entryNumber: 'Entry 34',
    trapNote: 'Regulating online gaming, casinos, and lotteries falls under State List Entry 34.'
  },
  {
    id: 'agricultural-income-tax',
    subject: 'Taxes on Agricultural Income',
    list: 'state',
    entryNumber: 'Entry 46',
    trapNote: 'Union income tax under Article 270 strictly excludes agricultural income!'
  },
  {
    id: 'tolls',
    subject: 'Tolls',
    list: 'state',
    entryNumber: 'Entry 59',
    trapNote: 'Levy of tolls on state bridges and highways is an exclusive State power.'
  },
  {
    id: 'capitation-taxes',
    subject: 'Capitation Taxes',
    list: 'state',
    entryNumber: 'Entry 61',
    trapNote: 'Poll taxes and capitation fees fall under the State legislative list.'
  },

  // =========================================================================
  // 3. UNION LIST (LIST I) — NATIONAL DEFENSE, FINANCE & COMMERCE
  // =========================================================================
  {
    id: 'defense',
    subject: 'Defense of India and every part thereof',
    list: 'union',
    entryNumber: 'Entry 1',
    trapNote: 'Sovereign Union power across armed forces, ordnance, and national territorial defense.'
  },
  {
    id: 'atomic-energy',
    subject: 'Atomic Energy and Mineral Resources necessary for its production',
    list: 'union',
    entryNumber: 'Entry 6',
    trapNote: 'Nuclear development and radioactive ores are strictly under the Union executive.'
  },
  {
    id: 'foreign-affairs',
    subject: 'Foreign Affairs; Diplomatic Representation; Treaties',
    list: 'union',
    entryNumber: 'Entries 10-14',
    trapNote: 'Article 253 empowers Parliament to legislate even on State subjects to implement international treaties!'
  },
  {
    id: 'railways',
    subject: 'Railways',
    list: 'union',
    entryNumber: 'Entry 22',
    trapNote: 'Railway police is State (Entry 2), but the entire railway system is Union (Entry 22).'
  },
  {
    id: 'banking',
    subject: 'Banking',
    list: 'union',
    entryNumber: 'Entry 45',
    trapNote: 'All commercial banking, RBI, and monetary policy are exclusively Union.'
  },
  {
    id: 'insurance',
    subject: 'Insurance',
    list: 'union',
    entryNumber: 'Entry 47',
    trapNote: 'IRDAI and insurance regulation are strictly under Union competence.'
  },
  {
    id: 'stock-exchanges',
    subject: 'Stock Exchanges and Futures Markets',
    list: 'union',
    entryNumber: 'Entry 48',
    trapNote: 'SEBI and capital markets regulation fall exclusively under Union List Entry 48.'
  },
  {
    id: 'patents-copyright',
    subject: 'Patents, Inventions, Designs, Copyright and Trade Marks',
    list: 'union',
    entryNumber: 'Entry 49',
    trapNote: 'Intellectual property rights are strictly central to maintain national uniformity.'
  },
  {
    id: 'census',
    subject: 'Census',
    list: 'union',
    entryNumber: 'Entry 69',
    trapNote: 'National decennial census is Union. State socio-economic surveys are conducted under statistics entries.'
  },
  {
    id: 'corporation-tax',
    subject: 'Corporation Tax',
    list: 'union',
    entryNumber: 'Entry 85',
    trapNote: 'Tax on corporate profits is exclusively levied and collected by the Union.'
  },
  {
    id: 'interstate-rivers',
    subject: 'Regulation and Development of Inter-State Rivers and River Valleys',
    list: 'union',
    entryNumber: 'Entry 56',
    trapNote: 'Overrides State water entry (17). Forms the basis of Inter-State River Water Disputes Act 1956.'
  },
  {
    id: 'citizenship',
    subject: 'Citizenship, Naturalization and Aliens',
    list: 'union',
    entryNumber: 'Entry 17',
    trapNote: 'Article 11 empowers Parliament exclusively to regulate citizenship rights.'
  },
  {
    id: 'customs-duties',
    subject: 'Duties of Customs including Export Duties',
    list: 'union',
    entryNumber: 'Entry 83',
    trapNote: 'Tariffs on international imports and exports are exclusively Union revenues.'
  },
  {
    id: 'posts-telecom',
    subject: 'Posts and Telegraphs; Telephones, Wireless, Broadcasting',
    list: 'union',
    entryNumber: 'Entry 31',
    trapNote: 'Telecommunication spectrum allocation, TRAI, and postal services are exclusive Union powers.'
  }
];

export function getRandomScheduleItem(excludeIds: string[] = []): ScheduleItem {
  const available = SEVENTH_SCHEDULE_ITEMS.filter((item) => !excludeIds.includes(item.id));
  const pool = available.length > 0 ? available : SEVENTH_SCHEDULE_ITEMS;
  const idx = Math.floor(Math.random() * pool.length);
  return pool[idx];
}
