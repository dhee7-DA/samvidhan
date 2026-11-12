import type { ScheduleItem } from '../types/constitution';

export const SCHEDULES_DATA: ScheduleItem[] = [
  {
    number: 1,
    roman: 'First Schedule',
    title: 'Territories of States and Union Territories',
    subject: 'Names of the States and their territorial jurisdictions; Names of the Union territories and their extent.',
    articlesCovered: 'Articles 1 and 4',
    details: [
      'Lists 28 States and 8 Union Territories.',
      'Updated whenever boundaries, areas, or names are modified by Parliament under Article 3.',
      'Includes Jammu & Kashmir Reorganisation Act 2019 and Dadra and Nagar Haveli and Daman and Diu merger 2020.'
    ],
    historicalEvolution: 'Originally had Part A, Part B, Part C, and Part D states; rationalized into States and UTs by 7th Amendment 1956.',
    mnemonicLetter: 'T',
    mnemonicKeyword: 'Territories'
  },
  {
    number: 2,
    roman: 'Second Schedule',
    title: 'Emoluments, Allowances and Privileges',
    subject: 'Provisions relating to salaries, allowances, and perquisites of key constitutional dignitaries.',
    articlesCovered: 'Articles 59(3), 65(3), 75(6), 97, 125, 148(3), 158(3), 164(5), 186, 221',
    details: [
      'President of India and Governors of States.',
      'Speaker and Deputy Speaker of Lok Sabha and Chairman/Deputy Chairman of Rajya Sabha.',
      'Judges of the Supreme Court and High Courts.',
      'Comptroller and Auditor General of India (CAG).'
    ],
    historicalEvolution: 'Prime Minister and other Ministers are notably NOT listed here (their salaries are determined by parliamentary statute under Art 75(6)).',
    mnemonicLetter: 'E',
    mnemonicKeyword: 'Emoluments'
  },
  {
    number: 3,
    roman: 'Third Schedule',
    title: 'Forms of Oaths or Affirmations',
    subject: 'Prescribed statutory texts of oaths of office and secrecy for constitutional functionaries.',
    articlesCovered: 'Articles 75(4), 99, 124(6), 148(2), 164(3), 188, 219',
    details: [
      'Union and State Ministers (Oath of Office and Oath of Secrecy).',
      'Candidates for election to Parliament and State Legislatures.',
      'Members of Parliament and Members of State Legislatures.',
      'Judges of Supreme Court and High Courts; CAG.',
      'President (Art 60), Vice-President (Art 69), and Governor (Art 159) oaths are in their respective articles, NOT in the Third Schedule.'
    ],
    historicalEvolution: 'Amended by 16th Amendment 1963 to include the phrase "uphold the sovereignty and integrity of India".',
    mnemonicLetter: 'A',
    mnemonicKeyword: 'Affirmations'
  },
  {
    number: 4,
    roman: 'Fourth Schedule',
    title: 'Allocation of Seats in the Council of States (Rajya Sabha)',
    subject: 'Distribution of Rajya Sabha seats to States and Union Territories based on population.',
    articlesCovered: 'Articles 4(1) and 80(2)',
    details: [
      'Allocation is proportionate to population census figures (unlike US Senate where each state gets equal 2 seats).',
      'Uttar Pradesh holds highest allocation (31 seats); smaller northeastern states generally have 1 seat.',
      'Only 3 UTs currently hold representation in Rajya Sabha: Delhi (3), Puducherry (1), and J&K (4).'
    ],
    historicalEvolution: 'Seats pegged to 1971 census population figures by the 84th Constitutional Amendment until first census after 2026.',
    mnemonicLetter: 'R',
    mnemonicKeyword: 'Rajya Sabha'
  },
  {
    number: 5,
    roman: 'Fifth Schedule',
    title: 'Administration of Scheduled Areas and Scheduled Tribes',
    subject: 'Special constitutional regime for administration and control of scheduled areas in 10 states.',
    articlesCovered: 'Article 244(1)',
    details: [
      'Applies to 10 States: Andhra Pradesh, Telangana, Jharkhand, Chhattisgarh, Odisha, Madhya Pradesh, Gujarat, Maharashtra, Rajasthan, Himachal Pradesh.',
      'Governor can direct that any Act of Parliament or State Legislature shall not apply or apply with exceptions.',
      'Requires constitution of Tribes Advisory Councils (TAC) consisting of up to 20 members (three-fourths being ST MLAs).'
    ],
    historicalEvolution: 'Designed to safeguard tribal customary rights, culture, and prevent land alienation to non-tribals (Samatha judgment 1997).',
    mnemonicLetter: 'S',
    mnemonicKeyword: 'Scheduled Areas'
  },
  {
    number: 6,
    roman: 'Sixth Schedule',
    title: 'Tribal Areas in Assam, Meghalaya, Tripura, and Mizoram (AMTM)',
    subject: 'Autonomous District Councils (ADCs) with extensive legislative, judicial, and financial autonomy.',
    articlesCovered: 'Articles 244(2) and 275(1)',
    details: [
      'Applies exclusively to 4 Northeastern States: Assam, Meghalaya, Tripura, Mizoram (Mnemonic: AMTM).',
      'ADCs have up to 30 members and can make laws on land, forests, village councils, inheritance, and marriage.',
      'Significantly higher degree of autonomy than Fifth Schedule areas.'
    ],
    historicalEvolution: 'Originates from the Bordoloi Sub-Committee recommendations to prevent alienation of frontier hill tribes.',
    mnemonicLetter: 'O',
    mnemonicKeyword: 'Other Tribal Areas (AMTM)'
  },
  {
    number: 7,
    roman: 'Seventh Schedule',
    title: 'Division of Legislative Powers (The Three Lists)',
    subject: 'Functional division of legislative competence between Union Parliament and State Legislatures.',
    articlesCovered: 'Article 246',
    details: [
      'List I (Union List): 100 items (originally 97) - Defence, Atomic Energy, Foreign Affairs, Railways, Banking, Currency.',
      'List II (State List): 61 items (originally 66) - Public Order, Police, Public Health, Agriculture, Local Government.',
      'List III (Concurrent List): 52 items (originally 47) - Criminal Law, Marriage, Education, Forests, Trade Unions.'
    ],
    historicalEvolution: '42nd Amendment 1976 transferred 5 subjects from State List to Concurrent List: Education, Forests, Weights & Measures, Protection of Wild Animals, and Administration of Justice.',
    mnemonicLetter: 'F',
    mnemonicKeyword: 'Federal Lists'
  },
  {
    number: 8,
    roman: 'Eighth Schedule',
    title: 'Official Recognized Languages of the Union',
    subject: 'Catalog of 22 languages recognized by the Constitution for official enrichment.',
    articlesCovered: 'Articles 344(1) and 351',
    details: [
      '22 Languages: Assamese, Bengali, Bodo, Dogri, Gujarati, Hindi, Kannada, Kashmiri, Konkani, Maithili, Malayalam, Manipuri, Marathi, Nepali, Odia, Punjabi, Sanskrit, Santali, Sindhi, Tamil, Telugu, Urdu.',
      'English is NOT listed in the Eighth Schedule despite being an official working language.',
      '6 Classical Languages: Tamil (2004), Sanskrit (2005), Telugu (2008), Kannada (2008), Malayalam (2013), Odia (2014).'
    ],
    historicalEvolution: 'Originally had 14 languages. Sindhi added by 21st Amd 1967; Konkani, Manipuri, Nepali added by 71st Amd 1992; Bodo, Dogri, Maithili, Santali added by 92nd Amd 2003.',
    mnemonicLetter: 'O',
    mnemonicKeyword: 'Official Languages'
  },
  {
    number: 9,
    roman: 'Ninth Schedule',
    title: 'Validation of Certain Acts and Regulations (Land Reforms)',
    subject: 'Statutory shield protecting specified socio-economic agrarian laws from judicial review on ground of violating Fundamental Rights.',
    articlesCovered: 'Article 31B',
    details: [
      'Inserted by the 1st Constitutional Amendment Act, 1951 by Prime Minister Jawaharlal Nehru.',
      'Originally contained 13 agrarian reform laws; now expanded to 284+ Acts.',
      'I.R. Coelho Case (2007): Supreme Court ruled that laws placed in 9th Schedule after 24 April 1973 are NOT immune to judicial review if they violate the Basic Structure.'
    ],
    historicalEvolution: 'Created to overcome judicial invalidation of Zamindari abolition laws in cases like Kameshwar Singh.',
    mnemonicLetter: 'L',
    mnemonicKeyword: 'Land Reforms'
  },
  {
    number: 10,
    roman: 'Tenth Schedule',
    title: 'Anti-Defection Law',
    subject: 'Disqualification of legislators on grounds of defection from their political parties.',
    articlesCovered: 'Articles 102(2) and 191(2)',
    details: [
      'Inserted by the 52nd Constitutional Amendment Act, 1985; amended by 91st Amendment 2003.',
      'Disqualification triggers: Voluntary resignation of party membership, or voting/abstaining contrary to party whip without prior permission.',
      'Independent member disqualified if joining any political party; nominated member disqualified if joining after 6 months.',
      '91st Amendment 2003 omitted the 1/3 split defense; only 2/3 merger of legislative party remains exempt.'
    ],
    historicalEvolution: 'Kihoto Hollohan v. Zachillhu (1992): Presiding officer acts as a tribunal; decisions are subject to judicial review.',
    mnemonicLetter: 'D',
    mnemonicKeyword: 'Defection'
  },
  {
    number: 11,
    roman: 'Eleventh Schedule',
    title: 'Powers, Authority and Responsibilities of Panchayats',
    subject: 'Catalog of 29 functional matters devolved to rural local self-governments.',
    articlesCovered: 'Article 243G',
    details: [
      'Inserted by the 73rd Constitutional Amendment Act, 1992.',
      'Encompasses 29 functional items: Agriculture, Minor Irrigation, Animal Husbandry, Fisheries, Rural Housing, Drinking Water, Roads, Poverty Alleviation, Education.',
      'Empowers State Legislatures to devolve powers to enable Panchayats to function as institutions of self-government.'
    ],
    historicalEvolution: 'Transformed rural governance from an optional policy directive (Art 40) into a constitutional institution.',
    mnemonicLetter: 'P',
    mnemonicKeyword: 'Panchayats'
  },
  {
    number: 12,
    roman: 'Twelfth Schedule',
    title: 'Powers, Authority and Responsibilities of Municipalities',
    subject: 'Catalog of 18 functional matters entrusted to urban local self-governments.',
    articlesCovered: 'Article 243W',
    details: [
      'Inserted by the 74th Constitutional Amendment Act, 1992.',
      'Encompasses 18 functional items: Urban planning, Regulation of land use, Roads and bridges, Water supply, Public health, Fire services, Urban forestry, Slum improvement.',
      'Institutes Ward Committees and District Planning Committees for integrated metropolitan development.'
    ],
    historicalEvolution: 'Complements the Eleventh Schedule by establishing urban local governance frameworks across cities and towns.',
    mnemonicLetter: 'M',
    mnemonicKeyword: 'Municipalities'
  }
];
