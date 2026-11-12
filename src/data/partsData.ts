import type { ConstitutionPart } from '../types/constitution';

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
    articles: [
      {
        number: '1',
        title: 'Name and territory of the Union',
        summary: 'Designates the nation as "India, that is Bharat" and characterizes it as a Union of States rather than a Federation of States.',
        textSnippet: 'India, that is Bharat, shall be a Union of States. Territory comprises States, Union Territories, and acquired lands.',
        clauses: [
          { clause: '1(1)', explanation: 'Affirms dual nomenclature: India (modern international) and Bharat (historical/indigenous).' },
          { clause: '1(2)', explanation: 'States and territories are cataloged in the First Schedule.' },
          { clause: '1(3)', explanation: 'Territory encompasses territories of States, Union territories, and territories that may be acquired.' }
        ]
      },
      {
        number: '2',
        title: 'Admission or establishment of new States',
        summary: 'Vests Parliament with legislative authority to admit into the Union or establish new States on terms it deems fit.',
        textSnippet: 'Parliament may by law admit into the Union, or establish, new States on such terms and conditions as it thinks fit.',
        clauses: [
          { clause: 'Main', explanation: 'Pertains strictly to external territories that were not previously part of the Indian Union (e.g. Sikkim entry via 35th/36th Amendments).' }
        ]
      },
      {
        number: '3',
        title: 'Formation of new States and alteration of areas, boundaries or names',
        summary: 'Empowers Parliament to alter state borders, bifurcate states, merge units, or change names via simple legislative enactment.',
        textSnippet: 'Parliament may by law form a new State, alter the area, boundaries or name of any existing State.',
        clauses: [
          { clause: 'Proviso (a)', explanation: 'A Bill under Article 3 can only be introduced on the prior recommendation of the President.' },
          { clause: 'Proviso (b)', explanation: 'President must refer the bill to the affected state legislature for views; however, Parliament is not bound by the state legislature opinion.' }
        ]
      },
      {
        number: '4',
        title: 'Laws made under Articles 2 and 3 to provide for amendment of First and Fourth Schedules',
        summary: 'Clarifies that laws enacted under Article 2 and 3 do not constitute constitutional amendments under Article 368.',
        textSnippet: 'No such law as aforesaid shall be deemed to be an amendment of this Constitution for the purposes of article 368.'
      }
    ]
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
    svgDiagramId: 'citizenship-tree',
    articles: [
      {
        number: '5',
        title: 'Citizenship at the commencement of the Constitution',
        summary: 'Conferred citizenship on individuals having domicile in India who were born in India, whose parents were born in India, or who were resident for 5+ years.',
        textSnippet: 'Every person who has his domicile in the territory of India and was born or ordinarily resident.'
      },
      {
        number: '9',
        title: 'Persons voluntarily acquiring citizenship of a foreign State not to be citizens',
        summary: 'Enforces strict single citizenship; taking allegiance to another sovereign automatically terminates Indian citizenship.',
        textSnippet: 'No person shall be a citizen of India if he has voluntarily acquired the citizenship of any foreign State.'
      },
      {
        number: '11',
        title: 'Parliament to regulate the right of citizenship by law',
        summary: 'Plenary constitutional mandate enabling Parliament to create, amend, or terminate citizenship rights (led to Citizenship Act 1955).',
        textSnippet: 'Nothing in the foregoing provisions shall derogate from the power of Parliament to make any provision with respect to the acquisition and termination of citizenship.'
      }
    ]
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
        caseName: 'A.K. Gopalan v. State of Madras (1950)',
        year: 1950,
        bench: '6-Judge Bench',
        summary: 'Early formalist reading: held that Article 21 required only formal procedure established by law, viewing Articles 19 and 21 as mutually exclusive silos.',
        significance: 'Represented the literalist era of Indian constitutional jurisprudence, later overturned.'
      },
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
    articles: [
      {
        number: '12',
        title: 'Definition of State for Part III',
        summary: 'Defines the entities against which fundamental rights can be asserted, including government, parliament, local bodies, and instrumentalities.',
        textSnippet: 'The State includes the Government and Parliament of India, Government and Legislature of each State, and all local or other authorities.',
        clauses: [
          { clause: 'Local Authorities', explanation: 'Municipalities, Panchayats, District Boards, Improvement Trusts.' },
          { clause: 'Other Authorities', explanation: 'Ajay Hasia Test: Deep and pervasive state control, financial support, monopoly status makes an agency a State instrumentality.' }
        ]
      },
      {
        number: '13',
        title: 'Laws inconsistent with or in derogation of Fundamental Rights',
        summary: 'The operational engine of Judicial Review: strikes down pre-constitutional and post-constitutional laws that abridge Fundamental Rights.',
        textSnippet: 'All laws in force in the territory of India immediately before the commencement of this Constitution, in so far as they are inconsistent with the provisions of this Part, shall, to the extent of such inconsistency, be void.',
        clauses: [
          { clause: '13(1)', explanation: 'Pre-constitutional laws: Doctrine of Eclipse applies (dormant until constitutional block is removed).' },
          { clause: '13(2)', explanation: 'Post-constitutional laws: Void ab initio to the extent of contravention (Doctrine of Severability).' },
          { clause: '13(3)', explanation: 'Defines law expansively: includes ordinances, orders, bye-laws, rules, regulations, and customs.' }
        ]
      },
      {
        number: '14',
        title: 'Equality before law and equal protection of the laws',
        summary: 'Guarantees both formal equality before the law (UK origin) and substantive equal protection of laws (US origin) within India.',
        textSnippet: 'The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.',
        clauses: [
          { clause: 'Doctrine of Classification', explanation: 'Permits differential treatment if based on intelligible differentia with a rational nexus to the statutory objective.' },
          { clause: 'Anti-Arbitrariness Doctrine', explanation: 'Royappa and Maneka Gandhi rule: Equality is dynamic; any state action that is arbitrary violates Article 14.' }
        ]
      },
      {
        number: '19',
        title: 'Protection of certain rights regarding freedom of speech, etc.',
        summary: 'Secures six basic civil liberties to citizens, subject to calibrated, exhaustive reasonable restrictions.',
        textSnippet: 'All citizens shall have the right (a) to freedom of speech and expression; (b) to assemble peaceably; (c) to form associations; (d) to move freely; (e) to reside and settle; (g) to practise any profession.',
        clauses: [
          { clause: '19(1)(a) to 19(1)(g)', explanation: 'Six democratic freedoms guaranteed strictly to Indian citizens (not foreigners or corporations).' },
          { clause: '19(2) Restrictions', explanation: 'Sovereignty, security, public order, decency, morality, contempt of court, defamation, incitement to an offence.' }
        ]
      },
      {
        number: '21',
        title: 'Protection of life and personal liberty',
        summary: 'The expansive reservoir of constitutional humanism: life means more than animal existence; it encompasses dignity, privacy, and health.',
        textSnippet: 'No person shall be deprived of his life or personal liberty except according to procedure established by law.',
        clauses: [
          { clause: 'Substantive Due Process', explanation: 'Post-Maneka Gandhi jurisprudence ensures that statutory procedures must be just, fair, and reasonable, not oppressive.' },
          { clause: 'Unremovable Core', explanation: 'Under 44th Amendment 1978, enforcement of Article 21 cannot be suspended even during a National Emergency (Art 359).' }
        ]
      },
      {
        number: '32',
        title: 'Remedies for enforcement of rights conferred by this Part',
        summary: 'Dubbed by Dr. Ambedkar as the "heart and soul" of the Constitution; grants right to petition the Supreme Court directly for writ remedies.',
        textSnippet: 'The right to move the Supreme Court by appropriate proceedings for the enforcement of the rights conferred by this Part is guaranteed.',
        clauses: [
          { clause: 'Extraordinary Writs', explanation: 'Power to issue Habeas Corpus, Mandamus, Prohibition, Quo Warranto, and Certiorari.' },
          { clause: 'Basic Structure', explanation: 'Judicial review under Article 32 is an inviolable feature of the Basic Structure (L. Chandra Kumar).' }
        ]
      }
    ]
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
        caseName: 'State of Madras v. Champakam Dorairajan (1951)',
        year: 1951,
        bench: '7-Judge Bench',
        summary: 'Held that Directive Principles cannot override Fundamental Rights; in case of conflict, Fundamental Rights prevail.',
        significance: 'Early doctrine of Fundamental Right supremacy, prompted the 1st Constitutional Amendment.'
      },
      {
        caseName: 'Minerva Mills Ltd. v. Union of India (1980)',
        year: 1980,
        bench: '5-Judge Bench',
        summary: 'The balance between Part III and Part IV is a core element of the Basic Structure; one cannot be subordinated to the other.',
        significance: 'Formalized the doctrine of Harmonious Construction between Fundamental Rights and Directive Principles.'
      }
    ],
    svgDiagramId: 'part3-part4-balance',
    articles: [
      {
        number: '38',
        title: 'State to secure a social order for the promotion of welfare of the people',
        summary: 'Mandates the State to promote welfare by securing social, economic, and political justice, and minimizing income inequalities.',
        textSnippet: 'The State shall strive to promote the welfare of the people by securing and protecting as effectively as it may a social order in which justice, social, economic and political, shall inform all the institutions of the national life.'
      },
      {
        number: '39A',
        title: 'Equal justice and free legal aid',
        summary: 'Added by the 42nd Amendment (1976); mandates free legal assistance to ensure justice is not denied due to economic hardship (basis of NALSA).',
        textSnippet: 'The State shall secure that the operation of the legal system promotes justice on a basis of equal opportunity, and shall, in particular, provide free legal aid.'
      },
      {
        number: '44',
        title: 'Uniform civil code for the citizens',
        summary: 'Directs the State to endeavor to secure for citizens a Uniform Civil Code across India in civil matters like marriage, divorce, and inheritance.',
        textSnippet: 'The State shall endeavour to secure for the citizens a uniform civil code throughout the territory of India.'
      },
      {
        number: '50',
        title: 'Separation of judiciary from executive',
        summary: 'Mandates systemic institutional separation of judicial functions from the administrative executive branch in public services.',
        textSnippet: 'The State shall take steps to separate the judiciary from the executive in the public services of the State.'
      }
    ]
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
    svgDiagramId: 'fundamental-duties-compass',
    articles: [
      {
        number: '51A',
        title: 'Fundamental duties of citizens',
        summary: 'Enumerates 11 obligations including respecting the Constitution, defending the country, protecting the environment, and promoting scientific temper.',
        textSnippet: 'It shall be the duty of every citizen of India to abide by the Constitution, cherish noble ideals, defend the nation, and protect the natural environment.',
        clauses: [
          { clause: '51A(a)', explanation: 'Respect the National Flag and National Anthem.' },
          { clause: '51A(h)', explanation: 'Develop scientific temper, humanism, and spirit of inquiry.' },
          { clause: '51A(k)', explanation: 'Duty of parent/guardian to provide educational opportunities to children between 6 and 14 years (86th Amd 2002).' }
        ]
      }
    ]
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
      },
      {
        caseName: 'Supreme Court Advocates-on-Record v. Union of India (NJAC Case 2015)',
        year: 2015,
        bench: '5-Judge Bench',
        summary: 'Struck down the 99th Constitutional Amendment and the National Judicial Appointments Commission (NJAC) Act as violating judicial independence.',
        significance: 'Reaffirmed the Collegium system for judicial appointments as part of the Basic Structure.'
      }
    ],
    svgDiagramId: 'separation-of-powers',
    articles: [
      {
        number: '53',
        title: 'Executive power of the Union',
        summary: 'Vests executive power in the President, exercised directly or through subordinate officers in accordance with the Constitution.',
        textSnippet: 'The executive power of the Union shall be vested in the President and shall be exercised by him either directly or through officers subordinate to him.'
      },
      {
        number: '61',
        title: 'Procedure for impeachment of the President',
        summary: 'Outlines the stringent quasi-judicial procedure for removal on grounds of "violation of the Constitution" (requires 2/3 total membership in both houses).',
        textSnippet: 'When a President is to be impeached for violation of the Constitution, the charge shall be preferred by either House of Parliament.'
      },
      {
        number: '74',
        title: 'Council of Ministers to aid and advise President',
        summary: 'Mandates that the President act in accordance with the advice of the Council of Ministers, with a singular proviso to return advice once for reconsideration.',
        textSnippet: 'There shall be a Council of Ministers with the Prime Minister at the head to aid and advise the President who shall, in the exercise of his functions, act in accordance with such advice.'
      },
      {
        number: '110',
        title: 'Definition of "Money Bills"',
        summary: 'Exclusively defines bills containing provisions dealing with taxation, borrowing, and Consolidated Fund outlays; certified definitively by the Speaker.',
        textSnippet: 'A Bill shall be deemed to be a Money Bill if it contains only provisions dealing with all or any of the matters specified in sub-clauses (a) to (g).'
      },
      {
        number: '124',
        title: 'Establishment and constitution of the Supreme Court',
        summary: 'Foundational provision establishing the Supreme Court, qualifications of judges, and judicial tenure until age 65.',
        textSnippet: 'There shall be a Supreme Court of India consisting of a Chief Justice of India and such other Judges as Parliament may prescribe.'
      },
      {
        number: '143',
        title: 'Power of President to consult Supreme Court',
        summary: 'Advisory jurisdiction: President can refer questions of law or fact of public importance to the Supreme Court for its opinion.',
        textSnippet: 'If it appears to the President that a question of law or fact has arisen, or is likely to arise, he may refer the question to that Court for consideration.'
      }
    ]
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
    articles: [
      {
        number: '153',
        title: 'Governors of States',
        summary: 'Provides for a Governor for each State; the same person can be appointed Governor for two or more states (7th Amd 1956).',
        textSnippet: 'There shall be a Governor for each State.'
      },
      {
        number: '163',
        title: 'Council of Ministers to aid and advise Governor',
        summary: 'Governor acts on ministerial advice except where the Constitution explicitly requires exercise of discretionary judgment.',
        textSnippet: 'There shall be a Council of Ministers with the Chief Minister at the head to aid and advise the Governor except in so far as he is required to exercise his functions in his discretion.'
      },
      {
        number: '226',
        title: 'Power of High Courts to issue certain writs',
        summary: 'Grants plenary power to High Courts to issue writs not only for Fundamental Rights but also for any other legal right.',
        textSnippet: 'Every High Court shall have powers to issue directions, orders or writs for the enforcement of any of the rights conferred by Part III and for any other purpose.'
      }
    ]
  },
  {
    id: 'part-9',
    partNumber: 'Part IX',
    title: 'The Panchayats & Municipalities',
    articlesRange: 'Articles 243 – 243ZG',
    category: 'Governance',
    description: 'Institutionalizes decentralized grassroots democracy through the 73rd and 74th Amendments, establishing mandatory three-tier Panchayats and Urban Local Bodies.',
    historicalBackground: 'Realizes Article 40 DPSP directive; introduced through landmark 1992 constitutional amendments spearheaded by the Balwant Rai Mehta and L.M. Singhvi committee reports.',
    keyPrinciples: [
      'Mandatory five-year regular elections supervised by autonomous State Election Commissions.',
      '33% constitutional reservation of seats for women (including for chairperson posts).',
      'Constitution of State Finance Commissions every five years to review financial devolution.'
    ],
    landmarkCases: [
      {
        caseName: 'K. Krishna Murthy v. Union of India (2010)',
        year: 2010,
        bench: '5-Judge Bench',
        summary: 'Upheld political reservations in local self-governments, establishing that the 50% reservation ceiling applies to local bodies as well.',
        significance: 'Balanced affirmative representation with equal protection thresholds.'
      }
    ],
    svgDiagramId: 'local-governance',
    articles: [
      {
        number: '243B',
        title: 'Constitution of Panchayats',
        summary: 'Mandates constitution of Panchayats at the village, intermediate, and district levels in every state.',
        textSnippet: 'There shall be constituted in every State, Panchayats at the village, intermediate and district levels.'
      },
      {
        number: '243D',
        title: 'Reservation of seats',
        summary: 'Guarantees reserved seats for SCs and STs proportionate to population, and not less than one-third total seats for women.',
        textSnippet: 'Not less than one-third of the total number of seats to be filled by direct election in every Panchayat shall be reserved for women.'
      }
    ]
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
    articles: [
      {
        number: '246',
        title: 'Subject-matter of laws made by Parliament and by Legislatures of States',
        summary: 'Establishes three legislative lists: Union List (exclusive Parliament), State List (exclusive State), and Concurrent List (both).',
        textSnippet: 'Parliament has exclusive power to make laws with respect to any of the matters enumerated in List I in the Seventh Schedule.'
      },
      {
        number: '248',
        title: 'Residuary powers of legislation',
        summary: 'Grants exclusive competence to Parliament to enact laws on any matter not enumerated in the Concurrent or State Lists.',
        textSnippet: 'Parliament has exclusive power to make any law with respect to any matter not enumerated in the Concurrent List or State List.'
      },
      {
        number: '249',
        title: 'Power of Parliament to legislate with respect to a matter in the State List in the national interest',
        summary: 'Allows Parliament to legislate on State List if Rajya Sabha passes a resolution supported by 2/3 members present and voting.',
        textSnippet: 'If the Council of States has declared by resolution supported by not less than two-thirds of the members present and voting that it is necessary in the national interest.'
      },
      {
        number: '254',
        title: 'Inconsistency between laws made by Parliament and laws made by the Legislatures of States',
        summary: 'Doctrine of Repugnancy: Central law prevails over State law in Concurrent List unless State law received Presidential assent.',
        textSnippet: 'If any provision of a law made by the Legislature of a State is repugnant to any provision of a law made by Parliament, the law made by Parliament shall prevail.'
      }
    ]
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
        caseName: 'ADM Jabalpur v. Shivkant Shukla (1976)',
        year: 1976,
        bench: '5-Judge Bench',
        summary: 'Infamous Habeas Corpus case: majority held that during emergency, personal liberty under Art 21 cannot be enforced in court. Dissent by Justice H.R. Khanna.',
        significance: 'Corrected by 44th Amendment 1978 and formally overruled in Puttaswamy (2017).'
      },
      {
        caseName: 'S.R. Bommai v. Union of India (1994)',
        year: 1994,
        bench: '9-Judge Bench',
        summary: 'Article 356 proclamation is subject to judicial review; assembly cannot be dissolved until Parliament approves; secularism is basic structure.',
        significance: 'Drastically checked the partisan abuse of President\'s Rule against elected state governments.'
      }
    ],
    svgDiagramId: 'emergency-matrix',
    articles: [
      {
        number: '352',
        title: 'Proclamation of Emergency',
        summary: 'Allows President to declare National Emergency on grounds of war, external aggression, or armed rebellion (written advice required).',
        textSnippet: 'If the President is satisfied that a grave emergency exists whereby the security of India or of any part of the territory thereof is threatened, whether by war or external aggression or armed rebellion.'
      },
      {
        number: '356',
        title: 'Provisions in case of failure of constitutional machinery in States',
        summary: 'Imposes President’s Rule on report of Governor or otherwise; State executive is suspended and legislative powers shift to Parliament.',
        textSnippet: 'If the President, on receipt of a report from the Governor of a State or otherwise, is satisfied that a situation has arisen in which the government of the State cannot be carried on in accordance with the provisions of this Constitution.'
      },
      {
        number: '359',
        title: 'Suspension of the enforcement of the rights conferred by Part III during emergencies',
        summary: 'Empowers President to suspend right to move court for enforcement of specified FRs, explicitly excluding Articles 20 and 21.',
        textSnippet: 'Where a Proclamation of Emergency is in operation, the President may by order declare that the right to move any court for the enforcement of such of the rights conferred by Part III (except articles 20 and 21) shall remain suspended.'
      }
    ]
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
      },
      {
        caseName: 'Indira Nehru Gandhi v. Raj Narain (1975)',
        year: 1975,
        bench: '5-Judge Bench',
        summary: 'Struck down Article 329A(4) inserted by 39th Amendment which placed prime ministerial election disputes beyond judicial review.',
        significance: 'First practical application of the Basic Structure doctrine to strike down an amendment.'
      },
      {
        caseName: 'I.R. Coelho v. State of Tamil Nadu (2007)',
        year: 2007,
        bench: '9-Judge Bench (Unanimous)',
        summary: 'Laws inserted into the Ninth Schedule after April 24, 1973 are subject to judicial review if they violate fundamental rights that form part of the Basic Structure.',
        significance: 'Closed the constitutional loophole of using the Ninth Schedule as an absolute immunizing vault.'
      }
    ],
    svgDiagramId: 'amendment-pipeline',
    articles: [
      {
        number: '368',
        title: 'Power of Parliament to amend the Constitution and procedure therefor',
        summary: 'Comprehensive constituent mechanism specifying the procedure and scope for constitutional amendments.',
        textSnippet: 'Parliament may in exercise of its constituent power amend by way of addition, variation or repeal any provision of this Constitution in accordance with the procedure laid down in this article.',
        clauses: [
          { clause: '368(1)', explanation: 'Affirms Parliament constituent power to amend any provision.' },
          { clause: '368(2)', explanation: 'Special majority requirement: Majority of total membership + 2/3 of members present and voting in each house separately.' },
          { clause: '368(2) Proviso', explanation: 'Federal clauses require additional ratification by resolutions passed by not less than half of State Legislatures.' }
        ]
      }
    ]
  }
];
