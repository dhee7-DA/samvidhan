import type { ArticleItem } from '../types/constitution';

export const PART_11_FEDERAL_EXPANDED: ArticleItem[] = [
  // CHAPTER I: LEGISLATIVE RELATIONS
  {
    number: '245',
    title: 'Territorial Extent of Laws & Extra-Territorial Nexus',
    summary: 'Defines the geographical reach of Union and State laws, empowering Parliament to make laws for all or any part of India and laws with extraterritorial operation, while State legislatures are confined to their respective state territories.',
    plainEnglish: 'Parliament can pass laws that cover the entire nation or even actions taken by Indian citizens outside India. A State Legislature can only make laws applicable within its own borders, unless an extraterritorial nexus exists.',
    textSnippet: 'Parliament may make laws for the whole or any part of the territory of India, and the Legislature of a State may make laws for the whole or any part of the State.',
    realWorldScenario: 'A state government imposes a betting tax on a newspaper printed and published in a neighboring state, but circulated heavily inside the taxing state. Does the state law apply? Yes! Under the Doctrine of Territorial Nexus (State of Bombay v. R.M.D.C.), if a sufficient connection exists between the state and the extraterritorial subject matter, the state law is valid.',
    prosecutionNote: 'Prosecutions under Central penal statutes (like BNSS, BNS, Prevention of Corruption Act, PMLA) apply across India, whereas state-specific amendments or local penal acts only apply within the territorial boundaries of that particular State.',
    clauses: [
      {
        clause: '245(1) Plenary Territorial Scope',
        explanation: 'Parliament possesses pan-India legislative competence; State legislatures are strictly bounded by provincial borders.',
        example: 'Parliament passing the Bharatiya Nyaya Sanhita applicable across the entire Union.'
      },
      {
        clause: '245(2) Extraterritorial Parliamentary Sovereignty',
        explanation: 'No Parliamentary enactment can be challenged or invalidated merely because it has extraterritorial operation.',
        example: 'Prosecuting an Indian citizen abroad for an offence committed overseas under Section 1(5) BNS.'
      }
    ],
    exceptions: ['Presidential regulations under Article 240 can modify or suspend Parliamentary laws for certain Union Territories; Fifth and Sixth Schedule tribal area modifications by Governors.'],
    landmarkCases: [
      {
        caseName: 'State of Bombay v. R.M.D.C.',
        year: 1957,
        bench: '5-Judge Bench',
        summary: 'Das CJ established the Doctrine of Territorial Nexus: A state law with extraterritorial reach is constitutional if the connection between the person or object and the taxing state is real and substantial.',
        significance: 'Leading authority on state legislative territorial competence.'
      },
      {
        caseName: 'GVK Inds. Ltd. v. Income Tax Officer',
        year: 2011,
        bench: '5-Judge Bench',
        summary: 'Clarified that Parliament can enact extraterritorial legislation only if there is a real, discernible nexus to India’s security, welfare, or national interest.',
        significance: 'Set constitutional boundaries on Article 245(2) extraterritorial legislation.'
      }
    ],
    doctrineLinks: ['Doctrine of Territorial Nexus', 'Extraterritorial Operation']
  },
  {
    number: '246',
    title: 'Subject-Matter Competence (The 3 Legislative Lists)',
    summary: 'Distributes subject-matter competence across the Seventh Schedule: List I (Union List - exclusive Parliament), List II (State List - exclusive State), and List III (Concurrent List - shared competence).',
    plainEnglish: 'The Constitution divides all governance topics into three baskets: Central topics (defense, banking, foreign affairs), State topics (police, public order, prisons), and Shared topics (criminal law, civil procedure, contracts).',
    textSnippet: 'Parliament has exclusive power to make laws with respect to any of the matters enumerated in List I in the Seventh Schedule (Union List).',
    realWorldScenario: 'A state government passes an Act regulating the prevention of liquor adulteration, but the Act also incidentally impacts interstate transportation of industrial spirits. Is the law void? No! Under the Doctrine of Pith and Substance (F.N. Balsara), if the true substance of the law falls within State competence (Entry 8 List II), incidental encroachment on Union matters does not invalidate the statute.',
    prosecutionNote: 'Criminal Law and Criminal Procedure are Entries 1 and 2 of the Concurrent List (List III), allowing both Parliament (BNSS/BNS) and State Legislatures to legislate, subject to Article 254 repugnancy rules.',
    clauses: [
      {
        clause: '246(1) Exclusive Union Domain (List I)',
        explanation: 'Parliament enjoys supreme, exclusive jurisdiction over 100 entries including defense, atomic energy, foreign affairs, currency, and interstate trade.',
        example: 'Enactment of the Unlawful Activities (Prevention) Act and Prevention of Money Laundering Act.'
      },
      {
        clause: '246(2) Concurrent Competence (List III)',
        explanation: 'Both Union and States share authority over 52 entries (criminal law, evidence, civil procedure, transfer of property, economic planning).',
        example: 'Enactment of the Bharatiya Nagarik Suraksha Sanhita (BNSS) and Bharatiya Sakshya Adhiniyam (BSA).'
      },
      {
        clause: '246(3) Exclusive State Domain (List II)',
        explanation: 'State Legislatures have exclusive lawmaking power over 61 entries including public order, police, prisons, and local government.',
        example: 'State Police Acts and State Prison Manuals.'
      },
      {
        clause: '246(4) Union Territory Lawmaking',
        explanation: 'Parliament has plenary power to make laws on any matter whatsoever (including State List matters) for Union Territories.',
        example: 'Parliament passing laws governing police and land administration in Jammu & Kashmir or Delhi.'
      }
    ],
    exceptions: ['Articles 249, 250, 252, 253, and 356 empower Parliament to enter the State List under exceptional conditions.'],
    landmarkCases: [
      {
        caseName: 'State of Bombay v. F.N. Balsara',
        year: 1951,
        bench: 'Constitution Bench',
        summary: 'Held that the Bombay Prohibition Act was valid in pith and substance under Entry 8 of List II, even though its provisions incidentally encroached upon the import and export of liquor across borders (List I).',
        significance: 'Formulated the classic Indian formulation of the Doctrine of Pith and Substance.'
      },
      {
        caseName: 'Prafulla Kumar Mukherjee v. Bank of Commerce, Khulna',
        year: 1947,
        bench: 'Privy Council',
        summary: 'Ruled that the Bengal Money Lenders Act was valid in substance as money-lending (provincial list), despite incidentally affecting promissory notes (federal list).',
        significance: 'Foundational common-law root for list-overlap interpretation.'
      }
    ],
    doctrineLinks: ['Doctrine of Pith and Substance', 'Doctrine of Colorable Legislation', 'Doctrine of Harmonious Construction']
  },
  {
    number: '248',
    title: 'Residuary Powers of Legislation',
    summary: 'Vests exclusive residuary legislative competence in Parliament, enabling it to enact legislation on any matter not enumerated in the State List or Concurrent List, including imposing taxes not listed in those lists.',
    plainEnglish: 'If a brand-new issue arises that the Constitution makers did not explicitly write in any list (such as cybercrime, space exploration, or artificial intelligence), Parliament alone has the power to pass laws on it.',
    textSnippet: 'Parliament has exclusive power to make any law with respect to any matter not enumerated in the Concurrent List or State List.',
    realWorldScenario: 'When the Information Technology Act was passed to prosecute computer fraud and digital hacking, where did Parliament get the authority? Under Entry 97 of List I read with Article 248 (Residuary Powers), since internet and cyber offenses did not exist in 1950.',
    prosecutionNote: 'Prosecutions under novel federal regulatory acts (e.g., Information Technology Act 2000, Disaster Management Act 2005) derive their foundational constitutional competence from Article 248.',
    clauses: [
      {
        clause: '248(1) Exclusive Residuary Lawmaking',
        explanation: 'Parliament can legislate on any non-cataloged subject without consulting states.',
        example: 'Enactment of the Information Technology Act, 2000.'
      },
      {
        clause: '248(2) Residuary Taxation Competence',
        explanation: 'Includes the power to levy taxes not mentioned in the State or Concurrent Lists.',
        example: 'Imposition of wealth tax on agricultural land (H.S. Dhillon) and gift tax.'
      }
    ],
    exceptions: ['Before invoking Article 248, courts must strictly verify that the subject cannot fall under any entry in the State List.'],
    landmarkCases: [
      {
        caseName: 'Union of India v. H.S. Dhillon',
        year: 1971,
        bench: '7-Judge Bench',
        summary: 'Sikri CJ held that Parliament was competent under Article 248 and Entry 97 to amend the Wealth Tax Act to include agricultural land, as the tax did not fall in the State List.',
        significance: 'Affirmed broad Parliamentary primacy in exercising residuary legislative competence.'
      },
      {
        caseName: 'Kartar Singh v. State of Punjab',
        year: 1994,
        bench: 'Constitution Bench',
        summary: 'Upheld the Terrorist and Disruptive Activities (Prevention) Act (TADA) under residuary powers, ruling that terrorism is a distinct national threat going beyond ordinary public order.',
        significance: 'Crucial for anti-terror prosecution jurisprudence.'
      }
    ],
    doctrineLinks: ['Residuary Legislative Power', 'Federal Primacy']
  },
  {
    number: '249',
    title: 'Parliamentary Lawmaking on State List in National Interest',
    summary: 'Authorizes Parliament to enact legislation on any matter enumerated in the State List if the Rajya Sabha passes a resolution supported by at least two-thirds of the members present and voting, affirming that it is necessary in the national interest.',
    plainEnglish: 'The Rajya Sabha (representing the States) can pass a resolution by a 2/3 majority declaring that a State topic has acquired national importance. Parliament can then pass laws on that State topic for up to one year.',
    textSnippet: 'If the Council of States has declared by resolution supported by not less than two-thirds of the members present and voting that it is necessary or expedient in the national interest that Parliament should make laws.',
    realWorldScenario: 'During a cross-border cattle smuggling or localized ecological crisis affecting multiple provinces, the Rajya Sabha passes a 2/3 resolution authorizing Parliament to enact a uniform conservation law on a State List subject. The resulting Parliamentary law is valid for the duration of the resolution plus 6 months.',
    prosecutionNote: 'Prosecutions initiated under a temporary Article 249 statute do not automatically lapse for offenses committed during its active period, even after the law ceases to have effect.',
    clauses: [
      {
        clause: '249(1) Rajya Sabha Special Resolution',
        explanation: 'Requires a 2/3 majority of members present and voting in the Council of States.',
        example: 'Initiating nationwide regulation of a riverine resource or agricultural commodity.'
      },
      {
        clause: '249(2) 1-Year Temporal Duration',
        explanation: 'The resolution remains in force for up to one year, but can be renewed indefinitely for 1-year intervals by passing fresh resolutions.',
        example: 'Annual extensions passed by the Rajya Sabha.'
      },
      {
        clause: '249(3) 6-Month Sunset Period',
        explanation: 'A law made under Article 249 ceases to have effect on the expiration of six months after the resolution lapses.',
        example: 'Wind-down period allowing states to resume normal legislative domain.'
      }
    ],
    exceptions: ['State legislatures continue to retain power to make laws on that subject, but in case of repugnancy, the Parliamentary law prevails under Article 251.'],
    landmarkCases: [
      {
        caseName: 'State of Karnataka v. Union of India',
        year: 1977,
        bench: '7-Judge Bench',
        summary: 'Examined the flexible nature of Indian federalism and confirmed that Parliament’s overriding avenues under Articles 249–253 reflect constitutional adaptability, not destruction of state autonomy.',
        significance: 'Validated dynamic federal mechanisms under Chapter I of Part XI.'
      }
    ],
    doctrineLinks: ['Cooperative Federalism', 'National Interest Override']
  },
  {
    number: '254',
    title: 'Inconsistency Between Central & State Laws (Doctrine of Repugnancy)',
    summary: 'Resolves legislative conflicts in the Concurrent List (List III). Parliamentary laws prevail over conflicting State laws, unless the State law was reserved for and received the assent of the President under Article 254(2).',
    plainEnglish: 'When both Parliament and a State pass conflicting laws on the same subject (like criminal law), the Central law wins. But if the State sends its bill to the President and gets Presidential Assent, the State law survives inside that State.',
    textSnippet: 'If any provision of a law made by the Legislature of a State is repugnant to any provision of a law made by Parliament... the law made by Parliament shall prevail and the law made by the Legislature of the State shall, to the extent of the repugnancy, be void.',
    realWorldScenario: 'A state legislature amends the Code of Criminal Procedure to make anticipatory bail unavailable for certain cyber offenses, while the Central BNSS allows it. If the State Act was reserved for and received Presidential Assent under Article 254(2), the State amendment prevails within that State.',
    prosecutionNote: 'Crucial for criminal prosecutors: Always check whether a state procedural amendment (e.g., non-bailable category changes, local search warrants) received Presidential Assent under Art 254(2). If yes, it overrides the general BNSS provision locally.',
    clauses: [
      {
        clause: '254(1) Central Supremacy Rule',
        explanation: 'In the Concurrent List, any State provision directly conflicting with a Parliamentary law is void to the extent of repugnancy.',
        example: 'Central penal laws overriding inconsistent local state enactments.'
      },
      {
        clause: '254(2) Presidential Assent Proviso (State Law Cure)',
        explanation: 'A State law on List III repugnant to a prior Parliamentary law will prevail in that State if it was reserved for and received Presidential Assent.',
        example: 'State amendments to BNSS, BNS, or Land Acquisition Act prevailing locally.'
      },
      {
        clause: '254(2) Proviso: Parliament’s Ultimate Trumping Power',
        explanation: 'Parliament can at any time enact subsequent legislation adding to, amending, varying, or repealing the State law that received Presidential Assent.',
        example: 'Parliament re-asserting national uniformity by passing an overriding central statute.'
      }
    ],
    exceptions: ['Article 254 applies strictly to the Concurrent List (List III); it does not apply when one law is List I and the other is List II (resolved by Pith and Substance under Art 246).'],
    landmarkCases: [
      {
        caseName: 'M. Karunanidhi v. Union of India',
        year: 1979,
        bench: '5-Judge Bench',
        summary: 'Fazal Ali J laid down the 3 tests of repugnancy: (1) Direct conflict between provisions, (2) One law permits what the other forbids, (3) Parliament intended to lay down an exhaustive code occupying the entire field.',
        significance: 'The definitive authority defining the scope and tests of constitutional repugnancy.'
      },
      {
        caseName: 'Deep Chand v. State of U.P.',
        year: 1959,
        bench: 'Constitution Bench',
        summary: 'Subba Rao J held that when Parliament enacts an exhaustive law intended to cover the whole subject-matter, any existing state law on that subject becomes void for repugnancy.',
        significance: 'Established the Doctrine of Occupied Field under Article 254.'
      },
      {
        caseName: 'Kaiser-I-Hind Pvt Ltd v. National Textile Corp.',
        year: 2002,
        bench: '5-Judge Bench',
        summary: 'Ruled that under Article 254(2), the State Government must explicitly point out the specific Central law to which the State bill is repugnant when seeking Presidential Assent; assent given in ignorance does not cure repugnancy.',
        significance: 'Mandated strict procedural transparency for Article 254(2) Presidential Assent.'
      }
    ],
    doctrineLinks: ['Doctrine of Repugnancy', 'Doctrine of Occupied Field', 'Presidential Assent Cure']
  },

  // CHAPTER II: ADMINISTRATIVE RELATIONS
  {
    number: '256',
    title: 'Obligation of States & Executive Directions by the Union',
    summary: 'Requires every State executive to ensure compliance with laws enacted by Parliament, empowering the Union Executive to give binding directions to a State to secure that compliance.',
    plainEnglish: 'States are constitutionally required to enforce Central laws. If a State refuses or delays enforcing a Central law, the Central Government can issue binding administrative orders to compel compliance.',
    textSnippet: 'The executive power of every State shall be so exercised as to ensure compliance with the laws made by Parliament... and the executive power of the Union shall extend to the giving of such directions to a State.',
    realWorldScenario: 'A state government refuses to register cases or investigate financial crimes under the Prevention of Money Laundering Act (PMLA). The Union Government issues an executive directive under Article 256 ordering state police officers to assist federal enforcement agencies.',
    prosecutionNote: 'Public prosecutors in State directorates cannot refuse to prosecute central statutes; non-compliance constitutes an administrative breach of Article 256 sanctionable under Article 365.',
    clauses: [
      {
        clause: 'Mandatory Compliance & Binding Directives',
        explanation: 'Enforces constitutional hierarchy: state administration cannot act as an obstructionist barrier against Union legislation.',
        example: 'Directives to enforce federal environmental, immigration, or telecommunication mandates.'
      }
    ],
    exceptions: ['Directives must have nexus to Parliamentary laws; the Centre cannot issue whimsical directives outside legislative authority.'],
    landmarkCases: [
      {
        caseName: 'State of Rajasthan v. Union of India',
        year: 1977,
        bench: '7-Judge Bench',
        summary: 'Held that executive directions under Article 256 are constitutional commands; persistent non-compliance provides legitimate factual foundation for invoking Article 356 (President\'s Rule) via Article 365.',
        significance: 'Linked Article 256 administrative directions with Article 365 and emergency sanctions.'
      }
    ],
    doctrineLinks: ['Administrative Hierarchy', 'Cooperative Federalism']
  },
  {
    number: '257',
    title: 'Union Control Over States in Specified Matters (National Transit & Defense)',
    summary: 'Ensures that state executive power does not impede or prejudice the executive power of the Union, specifically empowering the Centre to direct states regarding construction and maintenance of means of communication of national or military importance.',
    plainEnglish: 'The Central Government can direct states to protect national highways, strategic railways, and defense communications, and compensates the state for extra costs incurred.',
    textSnippet: 'The executive power of every State shall be so exercised as not to impede or prejudice the exercise of the executive power of the Union.',
    realWorldScenario: 'During internal unrest or border tensions, a state ignores sabotage threats to a major railway trunk line carrying defense supplies. Under Article 257(2), the Union issues binding directions to the state police to deploy armed personnel along the railway corridor.',
    prosecutionNote: 'Offenses involving destruction of national communications or railway infrastructure are prosecuted under central statutes (e.g., Railways Act, National Highways Act) where Article 257 mandates state police cooperation.',
    clauses: [
      {
        clause: '257(1) Non-Impairment Rule',
        explanation: 'State executive power must never be exercised in a way that hampers Union operations.',
        example: 'State police cannot blockade federal investigative officers executing court warrants.'
      },
      {
        clause: '257(2) Means of Communication & Railways',
        explanation: 'Directives for maintaining highways, waterways, and railway lines vital for national defense.',
        example: 'Securing strategic highways in border states.'
      },
      {
        clause: '257(4) Cost Compensation',
        explanation: 'The Union reimburses the State for additional costs incurred in carrying out these directives.',
        example: 'Central funding for state police deployed along national defense infrastructure.'
      }
    ],
    exceptions: ['Failure to comply triggers Article 365, deeming it a breakdown of constitutional machinery.'],
    landmarkCases: [
      {
        caseName: 'S.R. Bommai v. Union of India',
        year: 1994,
        bench: '9-Judge Bench',
        summary: 'Analyzed the limits of Union administrative control over States, holding that federalism is a basic structure feature and Article 257 cannot be weaponized to suppress political opposition without real constitutional breach.',
        significance: 'Maintained constitutional equilibrium in administrative center-state relations.'
      }
    ],
    doctrineLinks: ['Cooperative Administrative Federalism', 'National Infrastructure Protection']
  },
  {
    number: '262',
    title: 'Adjudication of Inter-State River Water Disputes',
    summary: 'Empowers Parliament to enact laws for adjudicating disputes relating to the waters of inter-state rivers and river valleys, and to bar the jurisdiction of the Supreme Court and all other courts over such disputes.',
    plainEnglish: 'Inter-state river water disputes cannot be handled like regular lawsuits. Parliament can create special tribunals to resolve water sharing, and can bar regular courts from interfering.',
    textSnippet: 'Parliament may by law provide for the adjudication of any dispute or complaint with respect to the use, distribution or control of the waters of, or in, any inter-State river or river valley.',
    realWorldScenario: 'When Karnataka and Tamil Nadu dispute the allocation of the Cauvery River waters, can a state file a regular civil suit in the High Court? No! Under the Inter-State River Water Disputes Act 1956 passed under Article 262, jurisdiction of regular courts is ousted, and an exclusive Water Disputes Tribunal adjudicates the dispute.',
    prosecutionNote: 'Breaches of tribunal awards can lead to criminal contempt or regulatory proceedings, but the original substantive allocation cannot be litigated in regular civil courts.',
    clauses: [
      {
        clause: '262(1) Parliamentary Adjudication Mechanism',
        explanation: 'Authorizes specialized tribunals to resolve inter-state water sharing conflicts.',
        example: 'Cauvery, Krishna, and Godavari Water Disputes Tribunals.'
      },
      {
        clause: '262(2) Exclusion of Court Jurisdiction',
        explanation: 'Allows Parliament to bar the Supreme Court and High Courts from entertaining original disputes over inter-state waters.',
        example: 'Section 11 of the Inter-State River Water Disputes Act, 1956.'
      }
    ],
    exceptions: ['While original jurisdiction over water sharing is barred, the Supreme Court can still intervene under Article 136 (Special Leave) on questions of law or violation of fundamental rights.'],
    landmarkCases: [
      {
        caseName: 'In re Cauvery Water Disputes Tribunal',
        year: 1992,
        bench: '5-Judge Bench',
        summary: 'Held that an interim order passed by a Water Disputes Tribunal is binding on parties, and an ordinance passed by a State to nullify the tribunal\'s interim order was unconstitutional and violated the rule of law.',
        significance: 'Affirmed that states cannot unilaterally nullify Article 262 tribunal awards.'
      },
      {
        caseName: 'State of Karnataka v. State of Tamil Nadu (Cauvery River Water)',
        year: 2018,
        bench: '3-Judge Bench',
        summary: 'Dipak Misra CJ ruled that inter-state river waters are national assets, and no single riparian state can claim exclusive ownership; verified Supreme Court jurisdiction under Art 136 over tribunal awards.',
        significance: 'Settled that final awards of Article 262 tribunals are subject to Supreme Court review under Art 136.'
      }
    ],
    doctrineLinks: ['Doctrine of Public Trust', 'Equitable Water Apportionment']
  },
  {
    number: '263',
    title: 'The Inter-State Council',
    summary: 'Authorizes the President to establish an Inter-State Council to inquire into disputes between States, investigate and discuss subjects of common interest, and formulate recommendations for better policy coordination.',
    plainEnglish: 'A constitutional roundtable where the Prime Minister, Union Cabinet Ministers, and all State Chief Ministers sit together to resolve policy conflicts and coordinate national programs through consensus.',
    textSnippet: 'If at any time it appears to the President that the public interests would be served by the establishment of a Council... it shall be lawful for the President by order to establish such a Council.',
    realWorldScenario: 'To formulate a synchronized national policing protocol or uniform criminal law reform across all 28 states, the Centre convenes the Inter-State Council under Article 263 to achieve federal consensus before tabling bills in Parliament.',
    prosecutionNote: 'Inter-State Council resolutions frequently shape inter-agency criminal cooperation guidelines (e.g., interstate transit remand protocols, zero FIR harmonization).',
    clauses: [
      {
        clause: 'Advisory and Inquiring Mandate',
        explanation: 'The Council investigates common socioeconomic, legal, and security issues and makes recommendations (its decisions are advisory, not legally binding).',
        example: 'Implementation of Sarkaria and Punchhi Commission recommendations on center-state relations.'
      }
    ],
    exceptions: ['The Council cannot adjudicate legal disputes that fall strictly within the Supreme Court\'s original jurisdiction under Article 131.'],
    landmarkCases: [
      {
        caseName: 'State of West Bengal v. Committee for Protection of Democratic Rights',
        year: 2010,
        bench: 'Constitution Bench',
        summary: 'Noted that while federal coordination bodies like the Inter-State Council promote consensual governance, constitutional courts retain ultimate authority to order CBI investigations in states without state consent to protect fundamental rights.',
        significance: 'Balanced inter-state consensual forums with judicial protection of Part III rights.'
      }
    ],
    doctrineLinks: ['Cooperative Federalism', 'Inter-Governmental Consultation']
  }
];
