import type { ConstitutionPart } from '../types/constitution';
import { PART_1_TERRITORY_EXPANDED } from './part1TerritoryData';
import { PART_2_CITIZENSHIP_EXPANDED } from './part2CitizenshipData';
import { PART_3_ARTICLES_EXPANDED } from './part3FundamentalRightsData';
import { PART_4_DPSP_EXPANDED } from './part4DPSPData';
import { PART_4A_DUTIES_EXPANDED } from './part4aDutiesData';
import { PART_5_UNION_EXPANDED } from './part5UnionData';
import { PART_6_STATES_EXPANDED } from './part6StatesData';
import { PART_8_UTS_EXPANDED } from './part8UTsData';
import { PART_9_PANCHAYATS_EXPANDED } from './part9LocalGovernanceData';
import { PART_9A_MUNICIPALITIES_EXPANDED, PART_9B_COOPERATIVES_EXPANDED } from './part9aMunicipalitiesData';
import { PART_10_TRIBAL_EXPANDED } from './part10TribalData';
import { PART_11_FEDERAL_EXPANDED } from './part11FederalData';
import { PART_12_FINANCE_EXPANDED } from './part12FinanceData';
import { PART_13_TRADE_EXPANDED } from './part13TradeData';
import { PART_14_SERVICES_EXPANDED } from './part14ServicesData';
import { PART_14A_TRIBUNALS_EXPANDED } from './part14aTribunalsData';
import { PART_15_ELECTIONS_EXPANDED } from './part15ElectionsData';
import { PART_16_CLASSES_EXPANDED } from './part16ClassesData';
import { PART_17_LANGUAGE_EXPANDED } from './part17LanguageData';
import { PART_18_EMERGENCY_EXPANDED } from './part18EmergencyData';
import { PART_19_MISC_EXPANDED } from './part19MiscData';
import { PART_20_AMENDMENT_EXPANDED } from './part20AmendmentData';
import { PART_21_SPECIAL_EXPANDED } from './part21SpecialData';
import { PART_22_CLOSING_EXPANDED } from './part22ClosingData';

export const CONSTITUTION_PARTS: ConstitutionPart[] = [
  {
    id: 'part-1',
    partNumber: 'Part I',
    title: 'The Union and its Territory',
    articlesRange: 'Articles 1 – 4',
    category: 'Foundation',
    description: 'Defines the territorial structure of India as an indestructible Union of destructible States, and provides the constitutional mechanism for reorganizing internal state boundaries.',
    historicalBackground: 'Formulated during partition and integration of over 560 princely states. Shaped by the Dhar Commission (1948), JVP Committee (1948), and Fazal Ali Commission leading to the States Reorganisation Act 1956.',
    keyPrinciples: [
      'Indestructible Union of destructible units: Parliament can reshape states internally without their consent.',
      'Article 2 applies to admission of outside territories; Article 3 governs internal alteration.',
      'Reorganization laws under Art 3 require simple majority and are not deemed constitutional amendments under Art 368.'
    ],
    landmarkCases: [
      {
        caseName: 'In re Berubari Union (1960)',
        year: 1960,
        bench: '8-Judge Bench',
        summary: 'Cession of Indian territory to a foreign state cannot be done under Article 3; it requires a constitutional amendment under Article 368.',
        significance: 'Clarified that Article 3 only covers internal boundary realignment, not alienation of sovereignty.'
      },
      {
        caseName: 'Maganbhai Ishwarbhai Patel v. Union of India (1969)',
        year: 1969,
        bench: '5-Judge Bench',
        summary: 'Settlement of a boundary dispute does not amount to cession and can be executed by executive action.',
        significance: 'Distinguished demarcation of disputed lines from cession of established national soil.'
      }
    ],
    svgDiagramId: 'federal-relations',
    mnemonics: ['U-S-A-L: Union, States admission, Alteration, Laws consequential'],
    articles: PART_1_TERRITORY_EXPANDED
  },
  {
    id: 'part-2',
    partNumber: 'Part II',
    title: 'Citizenship',
    articlesRange: 'Articles 5 – 11',
    category: 'Foundation',
    description: 'Establishes constitutional rules for citizenship at the commencement of the Republic and entrusts subsequent citizenship law entirely to Parliamentary legislation.',
    historicalBackground: 'Drafted in the crucible of post-partition migration across West and East Pakistan, balancing domicile, ancestry, and mass refugee rehabilitation.',
    keyPrinciples: [
      'Single Citizenship: India maintains a unitary citizenship model with no dual state citizenship.',
      'Constitutional provisions only froze status on 26 January 1950; future regulation is governed by the Citizenship Act, 1955.',
      'Voluntary acquisition of foreign citizenship immediately extinguishes Indian citizenship (Art 9).'
    ],
    landmarkCases: [
      {
        caseName: 'State of UP v. Rehmatullah (1971)',
        year: 1971,
        bench: 'Constitution Bench',
        summary: 'Central Government is the exclusive statutory forum under Section 9(2) of the 1955 Act to determine voluntary acquisition of foreign nationality.',
        significance: 'Courts cannot usurp executive determination of citizenship cessation without central finding.'
      }
    ],
    articles: PART_2_CITIZENSHIP_EXPANDED
  },
  {
    id: 'part-3',
    partNumber: 'Part III',
    title: 'Fundamental Rights',
    articlesRange: 'Articles 12 – 35',
    category: 'Rights & Duties',
    description: 'The Magna Carta of India, securing enforceable civil liberties, equality, personal autonomy, religious freedom, and direct constitutional remedies through extraordinary writs.',
    historicalBackground: 'Inspired by the US Bill of Rights and the Karachi Resolution (1931). Designed to protect individuals against legislative and executive overreach.',
    keyPrinciples: [
      'Enforceable against the State (as defined in Article 12) through judicial review under Articles 32 and 226.',
      'Golden Triangle: Interconnected matrix of Articles 14, 19, and 21 (Maneka Gandhi test).',
      'Non-absolute: Freedoms under Article 19 are bounded by explicit reasonable restrictions under clauses (2) to (6).'
    ],
    landmarkCases: [
      {
        caseName: 'Maneka Gandhi v. Union of India (1978)',
        year: 1978,
        bench: '7-Judge Bench',
        summary: 'Overruled Gopalan; established that procedure under Article 21 must be just, fair, and reasonable, incorporating substantive due process.',
        significance: 'Unified Articles 14, 19, and 21 into the "Golden Triangle", revolutionizing civil liberty jurisprudence.'
      },
      {
        caseName: 'Justice K.S. Puttaswamy v. Union of India (2017)',
        year: 2017,
        bench: '9-Judge Bench (Unanimous)',
        summary: 'Right to Privacy recognized as a fundamental right emerging organically from Article 21 and Part III freedoms.',
        significance: 'Formulated the 3-fold proportionality test: Legitimate State Aim, Proportionality, and Legal Authorization.'
      }
    ],
    svgDiagramId: 'writs-matrix',
    mnemonics: ['E-F-E-R-C-R: Equality, Freedom, Exploitation, Religion, Culture/Education, Remedies'],
    articles: PART_3_ARTICLES_EXPANDED
  },
  {
    id: 'part-4',
    partNumber: 'Part IV',
    title: 'Directive Principles of State Policy',
    articlesRange: 'Articles 36 – 51',
    category: 'Rights & Duties',
    description: 'Non-justiciable socio-economic guidelines borrowed from Ireland, forming the moral compass and affirmative duties of the welfare state.',
    historicalBackground: 'Derived from the Irish Constitution (1937) and Spanish republican traditions. Intended to build economic democracy alongside political democracy.',
    keyPrinciples: [
      'Fundamental in the governance of the country (Art 37), though non-enforceable by courts.',
      'Harmonious Construction: Part III and Part IV represent two wheels of the constitutional chariot (Minerva Mills).',
      'Subdivided into Socialistic, Gandhian, and Liberal-Intellectual classifications.'
    ],
    landmarkCases: [
      {
        caseName: 'Minerva Mills Ltd. v. Union of India (1980)',
        year: 1980,
        bench: '5-Judge Bench',
        summary: 'The balance between Part III and Part IV is a core element of the Basic Structure; one cannot be subordinated to the other.',
        significance: 'Formalized the doctrine of Harmonious Construction between Fundamental Rights and Directive Principles.'
      },
      {
        caseName: 'Mohd. Ahmed Khan v. Shah Bano Begum (1985)',
        year: 1985,
        bench: '5-Judge Bench',
        summary: 'Ruled that Section 125 CrPC maintenance applies to all divorced women; underscored the urgent necessity of enacting a Uniform Civil Code under Article 44.',
        significance: 'Catalyst for secular family welfare reforms and gender justice.'
      },
      {
        caseName: 'Property Owners Association v. State of Maharashtra (2024)',
        year: 2024,
        bench: '9-Judge Bench',
        summary: 'Held that privately owned resources are not automatically "material resources of the community" under Article 39(b); affirmed Article 31C constitutional validity.',
        significance: 'Landmark 9-judge bench ruling balancing constitutional socialism with mixed-economy property rights.'
      }
    ],
    articles: PART_4_DPSP_EXPANDED
  },
  {
    id: 'part-4a',
    partNumber: 'Part IV-A',
    title: 'Fundamental Duties',
    articlesRange: 'Article 51A',
    category: 'Rights & Duties',
    description: 'Codifies eleven civic, moral, and ecological responsibilities expected of Indian citizens to cultivate patriotic fraternity.',
    historicalBackground: 'Introduced by the 42nd Amendment (1976) upon the recommendation of the Swaran Singh Committee. 11th duty added by the 86th Amendment (2002).',
    keyPrinciples: [
      'Non-justiciable directly under the Constitution, but referenced by courts to test reasonable restrictions.',
      'Enforced indirectly through specific statutes (e.g. Wildlife Protection Act, National Honour Act).',
      'Balances the rights guaranteed under Part III with civic consciousness.'
    ],
    landmarkCases: [
      {
        caseName: 'AIIMS Students Union v. AIIMS (2002)',
        year: 2002,
        bench: 'Supreme Court',
        summary: 'Fundamental duties cannot be brushed aside as unenforceable platitudes; they must be used as an interpretative tool to construe statutes.',
        significance: 'Elevated Article 51A as an active canon of constitutional interpretation.'
      }
    ],
    articles: PART_4A_DUTIES_EXPANDED
  },
  {
    id: 'part-5',
    partNumber: 'Part V',
    title: 'The Union',
    articlesRange: 'Articles 52 – 151',
    category: 'Governance',
    description: 'The structural framework of Union governance: The President, Vice-President, Prime Minister, Council of Ministers, Parliament, Supreme Court, and Comptroller & Auditor General.',
    historicalBackground: 'Synthesizes Westminster Cabinet responsibility with an elected Republican head of state and an independent Supreme Court with American-style judicial review.',
    keyPrinciples: [
      'De jure Executive (President) acts on aid and advice of de facto Executive (Council of Ministers headed by PM) under Art 74.',
      'Collective Responsibility: Council of Ministers is collectively responsible to the Lok Sabha (Art 75(3)).',
      'Bicameral Parliament with distinctive federal veto and financial differentiation (Money Bills under Art 110).'
    ],
    landmarkCases: [
      {
        caseName: 'Shamsher Singh v. State of Punjab (1974)',
        year: 1974,
        bench: '7-Judge Bench',
        summary: 'President and Governor act on ministerial advice in all constitutional functions except narrow emergency discretionary scenarios.',
        significance: 'Affirmed that the Indian President is a constitutional head, not an executive monarch.'
      }
    ],
    svgDiagramId: 'separation-of-powers',
    articles: PART_5_UNION_EXPANDED
  },
  {
    id: 'part-6',
    partNumber: 'Part VI',
    title: 'The States',
    articlesRange: 'Articles 152 – 237',
    category: 'Governance',
    description: 'Establishes the state-level constitutional apparatus: Governors, Chief Ministers, State Legislatures, High Courts, and Subordinate Courts.',
    historicalBackground: 'Replaced former Part A, B, and C states with a uniform constitutional framework across provinces under the 7th Amendment 1956.',
    keyPrinciples: [
      'Dual constitutional role of the Governor: Nominal head of the state executive and agent of the Union government.',
      'High Courts hold broader writ power under Article 226 (enforcing both Fundamental Rights and statutory legal rights) than Supreme Court under Art 32.',
      'Superintendence over subordinate judiciary vested entirely in High Courts (Art 227).'
    ],
    landmarkCases: [
      {
        caseName: 'B.P. Singhal v. Union of India (2010)',
        year: 2010,
        bench: '5-Judge Bench',
        summary: 'Governor cannot be removed arbitrarily merely because of a change of political party in power at the Centre.',
        significance: 'Placed constitutional guardrails against partisan dismissal of state governors.'
      }
    ],
    svgDiagramId: 'legislative-passage',
    articles: PART_6_STATES_EXPANDED
  },
  {
    id: 'part-7',
    partNumber: 'Part VII',
    title: 'States in Part B of the First Schedule [Repealed]',
    articlesRange: 'Article 238',
    category: 'Foundation',
    description: 'Dealt with former princely state unions governed by Rajpramukhs. Formally repealed and deleted by the 7th Constitutional Amendment Act, 1956.',
    historicalBackground: 'Abolished following the linguistic reorganization of states and Fazal Ali Commission recommendations, unifying Indian administrative geography into States and Union Territories.',
    keyPrinciples: [
      'Repealed by 7th Amendment 1956.',
      'Ended the special status of Rajpramukhs and transitional princely covenants.'
    ],
    landmarkCases: [],
    articles: [
      {
        number: '238',
        title: 'Application of provisions of Part VI to States in Part B [Repealed]',
        summary: 'Repealed by Constitution (Seventh Amendment) Act, 1956, s. 29 and Sch.',
        textSnippet: '[Repealed by Constitution (Seventh Amendment) Act, 1956].'
      }
    ]
  },
  {
    id: 'part-8',
    partNumber: 'Part VIII',
    title: 'The Union Territories',
    articlesRange: 'Articles 239 – 242',
    category: 'Governance',
    description: 'Administration of Union Territories directly by the President through Administrators or Lieutenant Governors, with special asymmetric legislative regimes for Delhi (Art 239AA) and Puducherry.',
    historicalBackground: 'Evolved from Chief Commissioners Provinces under GOI Act 1935. 69th Amendment 1991 created the National Capital Territory (NCT) of Delhi with a Legislative Assembly and Council of Ministers.',
    keyPrinciples: [
      'Administered by the President acting through an Administrator / Lieutenant Governor (Art 239).',
      'Article 239AA: Special status of National Capital Territory of Delhi; State List subjects of Public Order, Police, and Land are excluded from Delhi Assembly powers.',
      'Parliament retains plenary overriding legislative competence over Union Territories under Art 246(4).'
    ],
    landmarkCases: [
      {
        caseName: 'Govt. of NCT of Delhi v. Union of India (2018)',
        year: 2018,
        bench: '5-Judge Bench',
        summary: 'Lieutenant Governor is bound by the aid and advice of the Delhi Council of Ministers on all subjects except Police, Public Order, and Land.',
        significance: 'Reaffirmed cabinet democracy and representative governance in the capital territory.'
      },
      {
        caseName: 'Govt. of NCT of Delhi v. Union of India (Services Case 2023)',
        year: 2023,
        bench: '5-Judge Bench (CJI D.Y. Chandrachud)',
        summary: 'Elected government of Delhi has legislative and executive control over administrative civil services (Entry 41 List II), excluding public order, police, and land.',
        significance: 'Clarified triple chain of democratic accountability: civil servants to ministers, ministers to assembly, assembly to voters.'
      }
    ],
    articles: PART_8_UTS_EXPANDED
  },
  {
    id: 'part-9',
    partNumber: 'Part IX',
    title: 'The Panchayats',
    articlesRange: 'Articles 243 – 243-O',
    category: 'Governance',
    description: 'Institutionalizes decentralized rural democracy through the 73rd Amendment, establishing mandatory three-tier Panchayati Raj, regular elections, reservations for women, and State Finance Commissions.',
    historicalBackground: 'Enacted in 1992 following decades of experimentation under Balwant Rai Mehta, Ashok Mehta, and L.M. Singhvi committee blueprints.',
    keyPrinciples: [
      'Mandatory 3-tier structure: Gram, Intermediate, and District Panchayats.',
      'Minimum one-third (33%) mandatory reservation of seats and chairmanships for women.',
      'Autonomous State Election Commission and State Finance Commission (Art 243-I).'
    ],
    landmarkCases: [
      {
        caseName: 'K. Krishna Murthy v. Union of India (2010)',
        year: 2010,
        bench: '5-Judge Bench',
        summary: 'Upheld validity of reservations in local bodies while enforcing 50% vertical quota ceiling.',
        significance: 'Integrated local self-government reservations into mainstream equal protection doctrine.'
      }
    ],
    articles: PART_9_PANCHAYATS_EXPANDED
  },
  {
    id: 'part-9a',
    partNumber: 'Part IX-A',
    title: 'The Municipalities',
    articlesRange: 'Articles 243P – 243ZG',
    category: 'Governance',
    description: 'Urban local governance framework introduced by the 74th Amendment 1992, establishing Nagar Panchayats, Municipal Councils, Municipal Corporations, Ward Committees, and District Planning Committees.',
    historicalBackground: 'Introduced concurrently with the 73rd Amendment to revitalize urban civic democracy and manage rapid post-liberalization urbanization.',
    keyPrinciples: [
      'Three types of municipalities based on urban demographic scale (Nagar Panchayat, Municipal Council, Municipal Corporation).',
      'Mandatory constitution of Wards Committees in areas with population of 3 lakhs or more (Art 243S).',
      '12th Schedule lists 18 functional items devolved to municipalities.'
    ],
    landmarkCases: [
      {
        caseName: 'Suresh Mahajan v. State of Madhya Pradesh (2022)',
        year: 2022,
        bench: 'Supreme Court',
        summary: 'Constitutional mandate to conduct local body elections before the expiry of the 5-year tenure is sacrosanct and cannot be delayed.',
        significance: 'Barred states from using pending boundary delimitation as an excuse to avoid local elections.'
      }
    ],
    articles: PART_9A_MUNICIPALITIES_EXPANDED
  },
  {
    id: 'part-9b',
    partNumber: 'Part IX-B',
    title: 'The Co-operative Societies',
    articlesRange: 'Articles 243ZH – 243ZT',
    category: 'Governance',
    description: 'Constitutional recognition of cooperative societies introduced by the 97th Amendment 2011, establishing democratic member-control, maximum board tenure, and statutory audits.',
    historicalBackground: 'Inserted by 97th Constitutional Amendment (2011) along with Article 19(1)(c) right to form cooperatives and Article 43B DPSP.',
    keyPrinciples: [
      'Maximum number of directors limited to 21, with 1 reserved seat for SC/ST and 2 for women.',
      'Supreme Court partially struck down Part IX-B for intra-state cooperatives due to lack of state assembly ratification under Art 368(2) proviso.',
      'Remains fully operational for multi-state cooperative societies.'
    ],
    landmarkCases: [
      {
        caseName: 'Union of India v. Rajendra N. Shah (2021)',
        year: 2021,
        bench: '3-Judge Bench (2:1 Majority)',
        summary: 'Struck down Part IX-B to the extent it applied to intra-state cooperative societies because the 97th Amendment failed to obtain ratification from half of State Legislatures under the Art 368(2) proviso.',
        significance: 'Reaffirmed federal boundaries: cooperative societies within a state fall exclusively under State List Entry 32.'
      }
    ],
    articles: PART_9B_COOPERATIVES_EXPANDED
  },
  {
    id: 'part-10',
    partNumber: 'Part X',
    title: 'The Scheduled and Tribal Areas',
    articlesRange: 'Articles 244 – 244A',
    category: 'Special & Emergency',
    description: 'Special administrative framework for Fifth Schedule areas (10 states) and Sixth Schedule Autonomous District Councils in Assam, Meghalaya, Tripura, and Mizoram (AMTM).',
    historicalBackground: 'Derived from Excluded and Partially Excluded Areas under the GOI Act 1935 and Bordoloi Committee recommendations to preserve indigenous tribal customary governance.',
    keyPrinciples: [
      'Fifth Schedule: Tribes Advisory Councils and Governor discretionary powers to withhold parliamentary statutes.',
      'Sixth Schedule: High autonomy Autonomous District Councils (ADCs) with legislative, taxation, and judicial powers.',
      'Article 244A empowers Parliament to create an autonomous State comprising tribal areas in Assam.'
    ],
    landmarkCases: [
      {
        caseName: 'Samatha v. State of Andhra Pradesh (1997)',
        year: 1997,
        bench: '3-Judge Bench',
        summary: 'Mining leases granted to non-tribals or private companies in Scheduled Areas violate the Fifth Schedule; land can only be leased to tribals or state enterprises.',
        significance: 'Historic environmental and indigenous land rights charter in Fifth Schedule areas.'
      }
    ],
    articles: PART_10_TRIBAL_EXPANDED
  },
  {
    id: 'part-11',
    partNumber: 'Part XI',
    title: 'Relations between the Union and the States',
    articlesRange: 'Articles 245 – 263',
    category: 'Federalism',
    description: 'Delineates legislative and administrative federal boundaries between Parliament and State Legislatures, including emergency overrides and inter-state coordination.',
    historicalBackground: 'Modeled largely on the Government of India Act 1935 three-fold legislative list architecture, with strong unitary bias during crises.',
    keyPrinciples: [
      'Territorial competence (Art 245) and subject matter competence governed by the 7th Schedule.',
      'Doctrine of Pith and Substance resolves incidental encroachment across lists.',
      'Parliament retains residuary legislative powers (Art 248) and 5 extraordinary overriding avenues over State List.'
    ],
    landmarkCases: [
      {
        caseName: 'State of Bombay v. F.N. Balsara (1951)',
        year: 1951,
        bench: 'Constitution Bench',
        summary: 'Applied the Doctrine of Pith and Substance to uphold state liquor prohibition legislation despite incidental impact on import/export.',
        significance: 'Preserved state legislative sphere against technical ultra vires challenges.'
      }
    ],
    svgDiagramId: 'federal-relations',
    articles: PART_11_FEDERAL_EXPANDED
  },
  {
    id: 'part-12',
    partNumber: 'Part XII',
    title: 'Finance, Property, Contracts and Suits',
    articlesRange: 'Articles 264 – 300A',
    category: 'Federalism',
    description: 'The financial constitution of India: Tax division, GST Council (Art 279A), Finance Commission (Art 280), Consolidated & Contingency Funds, government contracts, and the constitutional Right to Property (Art 300A).',
    historicalBackground: 'Replaced rigid colonial revenue extraction with institutional fiscal federalism. 101st Amendment 2016 revolutionized indirect taxation through the GST Council; 44th Amendment 1978 demoted property from a Fundamental Right to a constitutional right under Art 300A.',
    keyPrinciples: [
      'No tax without authority of law (Art 265).',
      'Finance Commission (Art 280) appointed every 5 years for vertical and horizontal tax devolution.',
      'GST Council (Art 279A) operates as a cooperative federal voting engine: Centre holds 1/3 weight, States hold 2/3 weight; 3/4 majority required.',
      'Right to Property (Art 300A) is a human right and constitutional protection against executive expropriation without statutory authority.'
    ],
    landmarkCases: [
      {
        caseName: 'Union of India v. Mohit Minerals Pvt Ltd (2022)',
        year: 2022,
        bench: '3-Judge Bench (CJI D.Y. Chandrachud)',
        summary: 'Recommendations of the GST Council are not binding on the Union or State legislatures; cooperative federalism requires persuasive, uncoerced consensus.',
        significance: 'Preserved the legislative supremacy of Parliament and State Assemblies under the GST regime.'
      },
      {
        caseName: 'K.T. Plantation Pvt Ltd v. State of Karnataka (2011)',
        year: 2011,
        bench: '5-Judge Bench',
        summary: 'Article 300A encompasses the requirements of public purpose and fair compensation, protecting citizens against arbitrary confiscation.',
        significance: 'Elevated Article 300A from a toothless procedural clause into a substantive constitutional right.'
      }
    ],
    svgDiagramId: 'gst-fiscal-federalism',
    articles: PART_12_FINANCE_EXPANDED
  },
  {
    id: 'part-13',
    partNumber: 'Part XIII',
    title: 'Trade, Commerce and Intercourse within the Territory of India',
    articlesRange: 'Articles 301 – 307',
    category: 'Federalism',
    description: 'Guarantees freedom of inter-state trade, commerce, and intercourse across India, eliminating fiscal barriers while permitting reasonable public-interest regulations.',
    historicalBackground: 'Modeled on Section 92 of the Australian Constitution, designed to convert fragmented British India and princely territories into a unified common economic market.',
    keyPrinciples: [
      'Article 301 declares trade, commerce, and intercourse throughout India to be free.',
      'Parliament can impose non-discriminatory restrictions in the public interest (Art 302).',
      'State legislatures can impose non-discriminatory taxes on goods imported from other states (Art 304(a)) and reasonable restrictions with Presidential sanction (Art 304(b)).'
    ],
    landmarkCases: [
      {
        caseName: 'Atiabari Tea Co. v. State of Assam (1961)',
        year: 1961,
        bench: '5-Judge Bench',
        summary: 'Taxes that directly and immediately impede or restrict the free movement of goods violate Article 301 unless protected by Article 304.',
        significance: 'Formulated the "Direct and Immediate Restriction" test for inter-state taxation.'
      },
      {
        caseName: 'Automobile Transport (Rajasthan) Ltd. v. State of Rajasthan (1962)',
        year: 1962,
        bench: '7-Judge Bench',
        summary: 'Compensatory and regulatory taxes (e.g. vehicle road taxes funding highway maintenance) do not violate Article 301 freedom of trade.',
        significance: 'Created the doctrine of Regulatory & Compensatory Taxes in inter-state commerce.'
      },
      {
        caseName: 'Jindal Stainless Ltd. v. State of Haryana (2017)',
        year: 2017,
        bench: '9-Judge Bench (7:2 Majority)',
        summary: 'Overruled the strict compensatory tax doctrine; held that entry tax levied by a state does not violate Art 301 as long as it does not discriminate between domestic and imported goods under Art 304(a).',
        significance: 'Resolved a 60-year fiscal dilemma on state entry taxation.'
      }
    ],
    articles: PART_13_TRADE_EXPANDED
  },
  {
    id: 'part-14',
    partNumber: 'Part XIV',
    title: 'Services under the Union and the States',
    articlesRange: 'Articles 308 – 323',
    category: 'Governance',
    description: 'Constitutional architecture of public civil services, All-India Services (Art 312), Doctrine of Pleasure (Art 310), procedural shields against dismissal (Art 311), and the Union and State Public Service Commissions (UPSC/SPSC).',
    historicalBackground: 'Sardar Vallabhbhai Patel fought fiercely in the Constituent Assembly to preserve the All-India Services (IAS, IPS) as the "steel frame" of national unity and integrity.',
    keyPrinciples: [
      'Doctrine of Pleasure (Art 310): Civil servants hold office during the pleasure of the President or Governor.',
      'Article 311 Shield: No dismissal by an authority subordinate to appointing authority (311(1)); mandatory formal inquiry with reasonable opportunity to defend (311(2)).',
      'Article 312: Rajya Sabha has unique federal power to create new All-India Services by 2/3 resolution.',
      'Public Service Commissions (UPSC & SPSC) act as autonomous constitutional watchdogs for meritocratic recruitment.'
    ],
    landmarkCases: [
      {
        caseName: 'Union of India v. Tulsiram Patel (1985)',
        year: 1985,
        bench: '5-Judge Bench',
        summary: 'Detailed the three exceptions to Article 311(2) inquiry: criminal conviction, impracticality of holding inquiry, and national security interests.',
        significance: 'Definitive authority on civil service disciplinary dismissals in India.'
      }
    ],
    svgDiagramId: 'civil-services-safeguards',
    articles: PART_14_SERVICES_EXPANDED
  },
  {
    id: 'part-14a',
    partNumber: 'Part XIV-A',
    title: 'Tribunals',
    articlesRange: 'Articles 323A – 323B',
    category: 'Governance',
    description: 'Constitutional basis for specialized administrative and adjudicatory tribunals, introduced by the 42nd Amendment 1976 to expedite dispute resolution.',
    historicalBackground: 'Inserted by 42nd Amendment (1976) on Swaran Singh Committee recommendations to unclog regular courts. Led to the Administrative Tribunals Act 1985 (CAT and SATs).',
    keyPrinciples: [
      'Article 323A applies exclusively to public service recruitment disputes (established only by Parliament).',
      'Article 323B covers other administrative domains: taxation, foreign exchange, industrial disputes, land reforms, election disputes.',
      'Judicial review of High Courts under Art 226 and Supreme Court under Art 32 over tribunal decisions is part of the Basic Structure (*L. Chandra Kumar*).'
    ],
    landmarkCases: [
      {
        caseName: 'L. Chandra Kumar v. Union of India (1997)',
        year: 1997,
        bench: '7-Judge Bench',
        summary: 'Struck down statutory clauses excluding the writ jurisdiction of High Courts (Art 226/227) and Supreme Court (Art 32). Held that tribunals are supplementary, not substitutes for High Courts.',
        significance: 'Decisions of all tribunals (including CAT) are subject to judicial scrutiny before a Division Bench of the respective High Court.'
      },
      {
        caseName: 'Madras Bar Association v. Union of India (2014 & 2021)',
        year: 2021,
        bench: 'Constitution Bench',
        summary: 'Enforced strict structural judicial independence, tenure protections, and minimum age qualifications for tribunal members.',
        significance: 'Barred executive dominance over judicial tribunal appointments and service conditions.'
      }
    ],
    articles: PART_14A_TRIBUNALS_EXPANDED
  },
  {
    id: 'part-15',
    partNumber: 'Part XV',
    title: 'Elections',
    articlesRange: 'Articles 324 – 329A',
    category: 'Governance',
    description: 'The electoral foundation of the world’s largest democracy: Independent Election Commission of India (Art 324), Universal Adult Suffrage (Art 326), single electoral roll, and bar on court interference in electoral process.',
    historicalBackground: 'Enacted with profound faith in universal adult franchise by framers despite mass poverty and illiteracy in 1949, rejecting separate communal electorates.',
    keyPrinciples: [
      'Plenary superintendence, direction, and control of elections vested in the Election Commission of India (Art 324).',
      'Chief Election Commissioner (CEC) enjoys security of tenure equal to a Supreme Court judge (removal only by parliamentary address).',
      'Universal Adult Suffrage (Art 326): Voting age lowered from 21 to 18 by the 61st Constitutional Amendment 1988.',
      'Article 329(b): Election disputes can only be challenged via Election Petitions after results, preventing mid-poll judicial injunctions.'
    ],
    landmarkCases: [
      {
        caseName: 'Mohinder Singh Gill v. Chief Election Commissioner (1977)',
        year: 1977,
        bench: '5-Judge Bench',
        summary: 'Article 324 is an inexhaustible reservoir of power for the Election Commission where statutory election law is silent, to ensure free and fair elections.',
        significance: 'Established the plenary supplementary authority of the Election Commission of India.'
      },
      {
        caseName: 'Anoop Baranwal v. Union of India (2023)',
        year: 2023,
        bench: '5-Judge Bench (CJI K.M. Joseph)',
        summary: 'Held that appointment of Chief Election Commissioner and Election Commissioners must be made by the President on the advice of a committee comprising the Prime Minister, Leader of Opposition, and Chief Justice of India until Parliament enacted a law.',
        significance: 'Entrenched the constitutional independence of the election oversight machinery.'
      }
    ],
    svgDiagramId: 'electoral-architecture',
    articles: PART_15_ELECTIONS_EXPANDED
  },
  {
    id: 'part-16',
    partNumber: 'Part XVI',
    title: 'Special Provisions relating to Certain Classes',
    articlesRange: 'Articles 330 – 342A',
    category: 'Special & Emergency',
    description: 'Affirmative representation quotas in legislative bodies for Scheduled Castes and Scheduled Tribes, and the constitutional National Commissions: NCSC (Art 338), NCST (Art 338A), and NCBC (Art 338B).',
    historicalBackground: 'Traced to the Poona Pact (1932) between Dr. B.R. Ambedkar and Mahatma Gandhi. Originally intended for 10 years, extended periodically every decade (currently extended to 2030 by 104th Amendment 2020).',
    keyPrinciples: [
      'Political reservations for SCs and STs in Lok Sabha (Art 330) and State Assemblies (Art 332) proportionate to population.',
      '104th Amendment Act 2020: Extended SC/ST legislative reservations to 2030, but discontinued reservation for Anglo-Indian nominations under Arts 331 & 333.',
      'Constitutional status for Commissions: NCSC (Art 338), NCST (Art 338A via 89th Amd), NCBC (Art 338B via 102nd Amd 2018).',
      'Article 342A: Power of President to specify socially and educationally backward classes (SEBCs); 105th Amendment 2021 restored State powers to maintain State OBC lists.'
    ],
    landmarkCases: [
      {
        caseName: 'M. Nagaraj v. Union of India (2006)',
        year: 2006,
        bench: '5-Judge Bench',
        summary: 'Upheld constitutional validity of reservations in promotions for SCs/STs subject to quantifiable data demonstrating backwardness, inadequacy of representation, and overall administrative efficiency under Art 335.',
        significance: 'Formulated the constitutional boundary conditions for affirmative action in promotions.'
      },
      {
        caseName: 'Jarnail Singh v. Lachhmi Narain Gupta (2018)',
        year: 2018,
        bench: '5-Judge Bench',
        summary: 'Clarified Nagaraj: State does not need to collect quantifiable data on backwardness for SC/STs, but the Creamy Layer principle applies to SC/ST promotions as well.',
        significance: 'Harmonized affirmative action with the equality principle.'
      }
    ],
    articles: PART_16_CLASSES_EXPANDED
  },
  {
    id: 'part-17',
    partNumber: 'Part XVII',
    title: 'Official Language',
    articlesRange: 'Articles 343 – 351',
    category: 'Governance',
    description: 'Language of the Union (Hindi in Devanagari script, Art 343), English continuation, regional languages, language of Supreme Court & High Courts (Art 348), and directives for development of Hindi (Art 351).',
    historicalBackground: 'The Munshi-Ayyangar formula resolved contentious Constituent Assembly debates by designating Hindi as the official language of the Union while permitting English for official communications for 15 years, later extended indefinitely by the Official Languages Act 1963.',
    keyPrinciples: [
      'Official language of the Union is Hindi in Devanagari script; international form of Indian numerals is used (Art 343).',
      'Article 348: All proceedings in Supreme Court and High Courts, and all authoritative texts of parliamentary bills/acts, must be in English until Parliament provides otherwise.',
      'Article 350A: Duty of every State to provide adequate facilities for instruction in the mother-tongue at the primary stage to children belonging to linguistic minorities.',
      'Article 350B: Special Officer for Linguistic Minorities appointed by the President.',
      'Article 351: Affirmative duty of the Union to promote the spread and enrichment of Hindi.'
    ],
    landmarkCases: [
      {
        caseName: 'Union of India v. Murasoli Maran (1977)',
        year: 1977,
        bench: 'Supreme Court',
        summary: 'Presidential orders providing Hindi in-service training for Central government employees do not violate the Official Languages Act or impose disadvantage on non-Hindi speakers.',
        significance: 'Balanced Hindi promotion directives with safeguards for non-Hindi states.'
      }
    ],
    articles: PART_17_LANGUAGE_EXPANDED
  },
  {
    id: 'part-18',
    partNumber: 'Part XVIII',
    title: 'Emergency Provisions',
    articlesRange: 'Articles 352 – 360',
    category: 'Special & Emergency',
    description: 'Transformative constitutional mechanisms converting India from a federal to a unitary structure during wartime, armed rebellion, constitutional breakdown, or financial crisis.',
    historicalBackground: 'Borrowed from the Weimar Constitution of Germany and GOI Act 1935. Heavily reformed by the 44th Amendment 1978 to prevent repetition of the 1975 internal emergency abuses.',
    keyPrinciples: [
      'National Emergency (Art 352) requires written Cabinet recommendation and special majority parliamentary approval within 30 days.',
      'President’s Rule (Art 356) is subject to judicial review; floor test in assembly is mandatory (S.R. Bommai).',
      'Articles 20 and 21 can never be suspended during an emergency (ironclad rule post-44th Amendment).'
    ],
    landmarkCases: [
      {
        caseName: 'S.R. Bommai v. Union of India (1994)',
        year: 1994,
        bench: '9-Judge Bench',
        summary: 'Article 356 proclamation is subject to judicial review; assembly cannot be dissolved until Parliament approves; secularism is basic structure.',
        significance: 'Drastically checked the partisan abuse of President\'s Rule against elected state governments.'
      }
    ],
    svgDiagramId: 'emergency-matrix',
    articles: PART_18_EMERGENCY_EXPANDED
  },
  {
    id: 'part-19',
    partNumber: 'Part XIX',
    title: 'Miscellaneous',
    articlesRange: 'Articles 361 – 367',
    category: 'Governance',
    description: 'Constitutional immunities for the President and Governors (Art 361), protection of publication of parliamentary proceedings (Art 361A), bar on court interference in princely treaties (Art 363), and general interpretation clauses (Art 367).',
    historicalBackground: 'Provides operational immunity to the constitutional heads of State to ensure unbiased executive functioning without threat of criminal arrest while in office.',
    keyPrinciples: [
      'Personal immunity of President and Governors (Art 361): Not answerable to any court for exercise of duties; no criminal proceedings or arrest warrants can be issued during term.',
      'Article 365: Sanction for failure to comply with Union administrative directions; grounds for invoking Article 356.',
      'Article 367: Application of General Clauses Act 1897 for constitutional interpretation.'
    ],
    landmarkCases: [
      {
        caseName: 'Rameshwar Prasad v. Union of India (2006)',
        year: 2006,
        bench: '5-Judge Bench',
        summary: 'While Governor enjoys complete personal immunity under Art 361, actions taken by the Governor (e.g. dissolving State Assembly) are subject to judicial review for mala fides.',
        significance: 'Distinguished between personal immunity of the Governor and judicial reviewability of gubernatorial decisions.'
      }
    ],
    articles: PART_19_MISC_EXPANDED
  },
  {
    id: 'part-20',
    partNumber: 'Part XX',
    title: 'Amendment of the Constitution',
    articlesRange: 'Article 368',
    category: 'Special & Emergency',
    description: 'The constituent amending procedure of the Republic, orchestrating three tiers of amendment rigidity balanced against the judicial Basic Structure doctrine.',
    historicalBackground: 'Designed by framers to be neither as rigid as the US Constitution nor as flexible as the unwritten British Constitution. Scene of historic clashes between Parliament and the Supreme Court.',
    keyPrinciples: [
      'Constituent power distinct from ordinary legislative power.',
      'Three amendment modes: Simple majority, Special majority, and Special majority with 50% State ratifications.',
      'Basic Structure Limitation: Parliament cannot alter the fundamental structural pillars of the Constitution (Kesavananda Bharati).'
    ],
    landmarkCases: [
      {
        caseName: 'Kesavananda Bharati v. State of Kerala (1973)',
        year: 1973,
        bench: '13-Judge Bench (7:6 Verdict)',
        summary: 'Held that Article 368 empowers Parliament to amend any part of the Constitution, including Fundamental Rights, but cannot destroy or emasculate the Basic Structure.',
        significance: 'Created the Basic Structure Doctrine, the ultimate shield of constitutional supremacy in India.'
      }
    ],
    svgDiagramId: 'amendment-pipeline',
    articles: PART_20_AMENDMENT_EXPANDED
  },
  {
    id: 'part-21',
    partNumber: 'Part XXI',
    title: 'Temporary, Transitional and Special Provisions',
    articlesRange: 'Articles 369 – 392',
    category: 'Special & Emergency',
    description: 'Special asymmetric federalism provisions for 11 States (Articles 371 to 371-J) addressing regional backwardness, tribal customs, and border cultures, along with the historic abrogation of Article 370.',
    historicalBackground: 'Accommodated historical integration pacts across Jammu & Kashmir, Nagaland, Mizoram, Sikkim, Assam, Manipur, Andhra Pradesh, Gujarat, Maharashtra, Goa, and Karnataka.',
    keyPrinciples: [
      'Article 370: Special temporary status of Jammu & Kashmir, rendered inoperative on August 5-6, 2019 by Presidential Orders CO 272 and CO 273.',
      'Articles 371 to 371-J: Asymmetric Federalism protecting customary civil and criminal laws, land alienation, and development boards across 11 states.',
      'Article 371A (Nagaland) & Article 371G (Mizoram): Acts of Parliament regarding religion, social customs, and land ownership do not apply unless ratified by State Assemblies.'
    ],
    landmarkCases: [
      {
        caseName: 'In re Article 370 of the Constitution (2023)',
        year: 2023,
        bench: '5-Judge Bench (Unanimous, CJI D.Y. Chandrachud)',
        summary: 'Upheld the constitutional validity of the abrogation of Article 370 and the dissolution of Jammu & Kashmir special status. Held that J&K held no internal sovereignty once it acceded to India.',
        significance: 'Affirmed that Article 370 was an interim, temporary transition mechanism, cementing uniform constitutional integration.'
      }
    ],
    svgDiagramId: 'asymmetric-federalism',
    articles: PART_21_SPECIAL_EXPANDED
  },
  {
    id: 'part-22',
    partNumber: 'Part XXII',
    title: 'Short Title, Commencement, Authoritative Text in Hindi and Repeals',
    articlesRange: 'Articles 393 – 395',
    category: 'Foundation',
    description: 'The closing chapter of the Constitution: Short title "The Constitution of India" (Art 393), Commencement on 26 Jan 1950 (Art 394), Authoritative text in Hindi (Art 394A), and formal repeal of colonial statutes (Art 395).',
    historicalBackground: 'Concluded the drafting journey on 26 Nov 1949. Article 394 brought 16 urgent articles into immediate force, and the remaining took effect on Republic Day 26 Jan 1950.',
    keyPrinciples: [
      'Short title is officially "The Constitution of India" (Art 393).',
      'Articles 5, 6, 7, 8, 9, 60, 324, 366, 367, 379, 380, 388, 391, 392, 393, and 394 came into force immediately on 26 November 1949.',
      'Article 394A (58th Amendment 1987): Hindi authoritative text published under Presidential authority has the same legal validity as the English text.',
      'Article 395 repealed the Indian Independence Act 1947 and the Government of India Act 1935, cutting the colonial umbilical cord.'
    ],
    landmarkCases: [],
    articles: PART_22_CLOSING_EXPANDED
  }
];
