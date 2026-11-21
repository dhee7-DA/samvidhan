export interface OverruledCase {
  caseName: string;
  year: number;
  citation: string;
  benchStrength: string;
  presidingJudges?: string;
  historicalContext: string;
  theFlawedRatio: string;
  whyItFailed: string;
  consequences: string;
}

export interface ModernRuling {
  caseName: string;
  shortName?: string;
  year: number;
  citation: string;
  benchStrength: string;
  presidingJudges: string;
  verdictDate: string;
  theSettledRatio: string;
  constitutionalArticles: string[];
  doctrinalShift: string;
  keyTakeawayForMains: string;
}

export interface PrecedentClash {
  id: string;
  title: string;
  tagline: string;
  topicPillar: string;
  overrulingMagnitude:
    | '7-Judge Overruling'
    | '9-Judge Overruling'
    | '13-Judge Overruling'
    | '5-Judge Re-anchoring'
    | '5-Judge Overruling';
  yearOverruled: number;
  oldCase: OverruledCase;
  newCase: ModernRuling;
  linkedMainsQuestionId?: string;
  summaryTable: {
    parameter: string;
    oldLaw: string;
    newLaw: string;
  }[];
}

export const PRECEDENT_CLASHES_DATA: PrecedentClash[] = [
  {
    id: 'clash-sita-soren-pv-narasimha',
    title: 'The Cash-for-Votes Immunity Overruled: Bribery Has No Parliamentary Protection',
    tagline: '7-Judge Constitution Bench unanimously terminates 26 years of criminal immunity for bribe-taking lawmakers.',
    topicPillar: 'Part V: Parliamentary Privileges (Articles 105 & 194) vs Rule of Law',
    overrulingMagnitude: '7-Judge Overruling',
    yearOverruled: 2024,
    oldCase: {
      caseName: 'P.V. Narasimha Rao v. State (CBI/SPE)',
      year: 1998,
      citation: '(1998) 4 SCC 626',
      benchStrength: '5-Judge Constitution Bench (3:2 Split)',
      presidingJudges: 'S.P. Bharucha, Rajendra Babu JJ. (Majority); S.C. Agarwal, A.S. Anand JJ. (Dissent)',
      historicalContext:
        'In 1993, the minority Narasimha Rao government faced a No-Confidence Motion. Several JMM MPs allegedly accepted bribes to vote against the motion, defeating it. They were subsequently chargesheeted by the CBI under the Prevention of Corruption Act, 1988.',
      theFlawedRatio:
        'The majority held that Articles 105(2) and 194(2) conferred absolute immunity from criminal prosecution for anything said or any vote given in Parliament. Hence, MPs who accepted bribes and voted were immune. Perversely, MP Ajit Singh, who took a bribe but abstained from voting, could be prosecuted!',
      whyItFailed:
        'Created a grotesque moral paradox: dishonest MPs who fulfilled their corrupt bargain enjoyed constitutional immunity, while bribe-takers who had a change of conscience and did not vote were prosecuted.',
      consequences:
        'For 26 years, parliamentary privilege operated as an illicit shield for legislative corruption, eroding public faith in representative democracy.'
    },
    newCase: {
      caseName: 'Sita Soren v. Union of India',
      shortName: 'Sita Soren',
      year: 2024,
      citation: '2024 INSC 165 / (2024) 5 SCC 629',
      benchStrength: '7-Judge Constitution Bench (Unanimous 7-0)',
      presidingJudges: 'D.Y. Chandrachud CJI, A.S. Bopanna, M.M. Sundresh, P.S. Narasimha, J.B. Pardiwala, Sanjay Kumar, Manoj Misra JJ.',
      verdictDate: 'March 4, 2024',
      theSettledRatio:
        'Articles 105(2) and 194(2) do not protect bribery. Bribery under Section 7 of the Prevention of Corruption Act is complete the moment undue advantage is agreed upon or accepted. It is entirely independent of whether the vote is cast or how it is cast.',
      constitutionalArticles: ['Article 105(2)', 'Article 194(2)', 'Article 14', 'Article 19(1)(a)'],
      doctrinalShift:
        'Necessity Test: Parliamentary privileges exist only to protect fearlessness in collective democratic deliberation. Accepting a bribe does not enhance parliamentary debate; it subverts democratic integrity.',
      keyTakeawayForMains:
        'Parliamentary privileges are a shield for democratic speech, not a sword to execute criminal acts. Bribery erodes the basic structure of representative governance.'
    },
    linkedMainsQuestionId: 'mains-20m-parliamentary-privilege-sita-soren',
    summaryTable: [
      {
        parameter: 'Immunity for Bribe-Taking',
        oldLaw: 'Protected under Art 105(2) if the legislator actually voted as agreed.',
        newLaw: 'Completely unshielded. Bribery is a complete criminal offence the moment cash is taken.'
      },
      {
        parameter: 'Nexus with Legislative Vote',
        oldLaw: 'Vote cast established a "nexus" creating absolute immunity.',
        newLaw: 'Irrelevant. The criminal transaction is independent of whether the vote is cast.'
      },
      {
        parameter: 'Scope of Privilege',
        oldLaw: 'Blanket personal shield for all conduct inside the House.',
        newLaw: 'Functional test: Only conduct strictly necessary for collective legislative deliberation is immune.'
      }
    ]
  },
  {
    id: 'clash-davinder-singh-chinnaiah',
    title: 'Sub-Classification within Scheduled Castes: Substantive Equality Trumps Monolithic Formalism',
    tagline: '7-Judge Bench overrules 20-year-old Chinnaiah precedent, validating preferential quotas and creamy layer exclusion for SCs/STs.',
    topicPillar: 'Part III: Equality Code & Affirmative Action (Articles 14, 15(4), 16(4), 341)',
    overrulingMagnitude: '7-Judge Overruling',
    yearOverruled: 2024,
    oldCase: {
      caseName: 'E.V. Chinnaiah v. State of Andhra Pradesh',
      year: 2005,
      citation: '(2005) 1 SCC 394',
      benchStrength: '5-Judge Constitution Bench (Unanimous)',
      presidingJudges: 'N. Santosh Hegde J. for the Bench',
      historicalContext:
        'Andhra Pradesh enacted the Scheduled Castes (Rationalisation of Reservations) Act, 2000 dividing 57 SC communities into Groups A, B, C, D to ensure that extremely marginalized groups (like Rellis) received fair representation instead of more advanced sub-castes.',
      theFlawedRatio:
        'Held that the Scheduled Castes notified by the President under Article 341 form a single, indivisible "homogeneous class". Any State law sub-dividing them encroached upon Parliament\'s exclusive power under Article 341(2) to amend the Presidential List.',
      whyItFailed:
        'Ignored ground social realities. The SC category is socially and economically heterogeneous. A few advanced sub-castes cornered 90% of reservations, leaving sewer-cleaners and manual scavengers destitute.',
      consequences:
        'State governments across Punjab, Haryana, Tamil Nadu, and AP were barred from giving targeted relief to the weakest Dalit sub-groups for two decades.'
    },
    newCase: {
      caseName: 'State of Punjab v. Davinder Singh',
      shortName: 'Davinder Singh',
      year: 2024,
      citation: '2024 INSC 562 / (2024) 8 SCC 1',
      benchStrength: '7-Judge Constitution Bench (6:1 Majority)',
      presidingJudges: 'D.Y. Chandrachud CJI, B.R. Gavai, Vikram Nath, Bela M. Trivedi (dissenting), Pankaj Mithal, Manoj Misra, Satish Chandra Sharma JJ.',
      verdictDate: 'August 1, 2024',
      theSettledRatio:
        'Article 341 identification does not create an untouchable homogeneous monolith. Sub-classification within SCs is constitutionally valid under Articles 14 and 16(4) to achieve substantive equality. States may grant preference provided it is backed by empirical data and does not appropriate 100% of the quota.',
      constitutionalArticles: ['Article 14', 'Article 15(4)', 'Article 16(4)', 'Article 341', 'Article 342'],
      doctrinalShift:
        'Substantive Equality vs Formal Equality: Equality requires treating unequals unequally. A majority of 4 judges also affirmed that the Creamy Layer principle must apply to SCs/STs to weed out the affluent.',
      keyTakeawayForMains:
        'Affirmative action is an engine of genuine equality, not caste privilege. Sub-classification channels affirmative action to the most oppressed tiers without altering the Presidential List.'
    },
    linkedMainsQuestionId: 'mains-10m-sc-subclassification-davinder-singh',
    summaryTable: [
      {
        parameter: 'Nature of SC Category',
        oldLaw: 'Single, indivisible, monolithic homogeneous class.',
        newLaw: 'Heterogeneous group with deep inter-se historical and socio-economic disparities.'
      },
      {
        parameter: 'State Power to Sub-Classify',
        oldLaw: 'Zero competence. Impermissible tinkering with Article 341.',
        newLaw: 'Full competence under Articles 15(4) and 16(4) based on empirical data.'
      },
      {
        parameter: 'Creamy Layer in SCs/STs',
        oldLaw: 'Completely inapplicable to Scheduled Castes.',
        newLaw: 'Endorsed by majority judges to prevent elite capture of reservation benefits.'
      }
    ]
  },
  {
    id: 'clash-mada-india-cements',
    title: 'Royalty is NOT a Tax: State Legislative Sovereignty on Mineral Lands Restored',
    tagline: '9-Judge Constitution Bench overrules 35-year-old typographical error in India Cements, securing fiscal federalism.',
    topicPillar: 'Part XI & Seventh Schedule: Legislative & Taxing Powers (List I Entry 54 vs List II Entry 49 & 50)',
    overrulingMagnitude: '9-Judge Overruling',
    yearOverruled: 2024,
    oldCase: {
      caseName: 'India Cements Ltd. v. State of Tamil Nadu',
      year: 1990,
      citation: '(1990) 1 SCC 12',
      benchStrength: '7-Judge Constitution Bench (Unanimous)',
      presidingJudges: 'Sabyasachi Mukharji CJI for the Bench',
      historicalContext:
        'Tamil Nadu levied a cess on royalty paid by mining lessees. The cement company challenged the cess, arguing that royalty is itself a tax and the field was occupied by Parliament under the MMDR Act, 1957.',
      theFlawedRatio:
        'The 7-Judge Bench famously stated: "Royalty is a tax, and as such a cess on royalty is a tax on tax." This single line was later admitted to be a typographical error, but remained binding precedent.',
      whyItFailed:
        'Royalty is a contractual or statutory payment made by a lessee to the mineral owner for extracting resources. A tax is a sovereign compulsory extraction. Confusing the two crippled States\' revenue-generating powers.',
      consequences:
        'Mineral-rich States (Jharkhand, Odisha, Chhattisgarh) were legally paralyzed from taxing multi-billion dollar mining conglomerates operating on their lands.'
    },
    newCase: {
      caseName: 'Mineral Area Development Authority (MADA) v. SAIL',
      shortName: 'MADA (Minerals)',
      year: 2024,
      citation: '2024 INSC 554 / (2024) 8 SCC 315',
      benchStrength: '9-Judge Constitution Bench (8:1 Majority)',
      presidingJudges: 'D.Y. Chandrachud CJI, Hrishikesh Roy, Abhay S. Oka, B.V. Nagarathna (dissenting), J.B. Pardiwala, Manoj Misra, Ujjal Bhuyan, Satish Chandra Sharma, Augustine George Masih JJ.',
      verdictDate: 'July 25, 2024',
      theSettledRatio:
        'Royalty is NOT a tax. Royalty is consideration paid to the lessor. Entry 50 of List II empowers States to tax mineral rights. Entry 49 of List II empowers States to tax mineral-bearing lands. The MMDR Act regulatory power under Entry 54 List I does not divest States of their taxing powers.',
      constitutionalArticles: ['Article 246', 'Seventh Schedule List I Entry 54', 'List II Entry 49 & 50'],
      doctrinalShift:
        'Fiscal Federalism Re-anchored: Regulatory powers (List I) and taxing powers (List II) are distinct and mutually exclusive. Parliament cannot extinguish State taxing power by mere regulatory implication.',
      keyTakeawayForMains:
        'States possess sovereign fiscal autonomy over their natural wealth. Taxing power is the lifeblood of cooperative federalism.'
    },
    linkedMainsQuestionId: 'mains-10m-mineral-rights-taxation-mada',
    summaryTable: [
      {
        parameter: 'Legal Character of Royalty',
        oldLaw: '"Royalty is a tax" (India Cements 1990).',
        newLaw: 'Royalty is consideration/rent for mineral extraction, NOT a tax.'
      },
      {
        parameter: 'State Power to Tax Mineral Land',
        oldLaw: 'Pre-empted by Central MMDR Act under List I Entry 54.',
        newLaw: 'Vested in States under List II Entry 49 (Land) and Entry 50 (Mineral rights).'
      },
      {
        parameter: 'Fiscal Federalism Impact',
        oldLaw: 'Centralization of mining revenues in the Union.',
        newLaw: 'Restoration of State revenue mobilization; retrospective collection allowed from 2005.'
      }
    ]
  },
  {
    id: 'clash-puttaswamy-mp-sharma-kharak-singh',
    title: 'The Right to Privacy: From Physical Search Immunity to Inalienable Fundamental Right',
    tagline: '9-Judge Bench overrules M.P. Sharma and Kharak Singh, enshrining Privacy in the Golden Triangle of Part III.',
    topicPillar: 'Part III: Fundamental Rights • Right to Privacy & Human Dignity (Article 21)',
    overrulingMagnitude: '9-Judge Overruling',
    yearOverruled: 2017,
    oldCase: {
      caseName: 'M.P. Sharma (1954) & Kharak Singh (1962)',
      year: 1954,
      citation: 'AIR 1954 SC 300 & AIR 1963 SC 1295',
      benchStrength: '8-Judge & 6-Judge Benches',
      presidingJudges: 'M.C. Mahajan CJI (1954) & B.P. Sinha CJI (1962)',
      historicalContext:
        'In M.P. Sharma, Dalmia group offices were searched under warrants. In Kharak Singh, UP Police conducted midnight domiciliary visits to monitor a history-sheeter\'s house.',
      theFlawedRatio:
        'M.P. Sharma held that the Constitution makers did not recognize privacy as a fundamental right analogous to the American 4th Amendment. Kharak Singh majority struck down midnight knocking but held that personal liberty under Art 21 did not include privacy.',
      whyItFailed:
        'Reflected a narrow, literalist reading of the Constitution that viewed privacy merely as physical trespass rather than personal autonomy, bodily integrity, and informational self-determination.',
      consequences:
        'Created legal uncertainty where conflicting 2-judge and 3-judge benches debated privacy for 50 years, culminating in the Aadhaar biometric challenge.'
    },
    newCase: {
      caseName: 'Justice K.S. Puttaswamy (Retd.) v. Union of India',
      shortName: 'Puttaswamy (Privacy)',
      year: 2017,
      citation: '(2017) 10 SCC 1',
      benchStrength: '9-Judge Constitution Bench (Unanimous 9-0)',
      presidingJudges: 'J.S. Khehar CJI, J. Chelameswar, S.A. Bobde, R.K. Agrawal, R.F. Nariman, A.M. Sapre, D.Y. Chandrachud, S.K. Kaul, S. Abdul Nazeer JJ.',
      verdictDate: 'August 24, 2017',
      theSettledRatio:
        'The Right to Privacy is an intrinsic, fundamental facet of the Right to Life and Personal Liberty under Article 21 and the entire Part III matrix. M.P. Sharma and Kharak Singh are explicitly overruled to the extent they denied privacy as a fundamental right.',
      constitutionalArticles: ['Article 14', 'Article 19', 'Article 21'],
      doctrinalShift:
        'Three-Fold Proportionality Test: Any State infringement of privacy must satisfy: (1) Legality (backed by valid law), (2) Legitimate State Aim, and (3) Proportionality (least intrusive means).',
      keyTakeawayForMains:
        'Privacy is not an elitist luxury; it is the constitutional guarantee of individual dignity, bodily autonomy, and freedom of thought in a digital republic.'
    },
    linkedMainsQuestionId: 'mains-10m-privacy-three-fold-test',
    summaryTable: [
      {
        parameter: 'Constitutional Status of Privacy',
        oldLaw: 'No fundamental right to privacy exists in the Indian Constitution.',
        newLaw: 'Inalienable Fundamental Right anchored in Articles 14, 19, and 21.'
      },
      {
        parameter: 'State Surveillance Scrutiny',
        oldLaw: 'Permissible administrative discretion under police regulations.',
        newLaw: 'Strict three-fold scrutiny: Legality, Legitimate Aim, and Proportionality.'
      },
      {
        parameter: 'Dimensions of Privacy',
        oldLaw: 'Confined to physical property trespass.',
        newLaw: 'Spatial privacy, bodily autonomy, and informational self-determination.'
      }
    ]
  },
  {
    id: 'clash-navtej-johar-suresh-koushal',
    title: 'Decriminalization of Section 377: Constitutional Morality Prevails over Majoritarian Dogma',
    tagline: '5-Judge Bench overrules Suresh Koushal, affirming sexual orientation as an intrinsic facet of human dignity.',
    topicPillar: 'Part III: Equality, Non-Discrimination & Personal Liberty (Articles 14, 15, 19, 21)',
    overrulingMagnitude: '5-Judge Re-anchoring',
    yearOverruled: 2018,
    oldCase: {
      caseName: 'Suresh Kumar Koushal v. Naz Foundation',
      year: 2013,
      citation: '(2014) 1 SCC 1',
      benchStrength: '2-Judge Bench',
      presidingJudges: 'G.S. Singhvi and S.J. Mukhopadhaya JJ.',
      historicalContext:
        'The Delhi High Court in 2009 (Naz Foundation) decriminalized consensual adult homosexual acts under Section 377 IPC. Religious groups appealed to the Supreme Court.',
      theFlawedRatio:
        'The Supreme Court reversed the Delhi HC, ruling that the LGBT community constitutes a "minuscule fraction of the population" whose rights do not warrant striking down a pre-constitutional law. The Court deferred entirely to Parliament.',
      whyItFailed:
        'Adopted majoritarian populism. Constitutional courts are designed specifically to protect minority rights against majoritarian prejudice, not defer fundamental rights to legislative headcounts.',
      consequences:
        'Re-criminalized millions of queer citizens, subjecting them to blackmail, extortion, societal stigma, and arbitrary police harassment for five dark years.'
    },
    newCase: {
      caseName: 'Navtej Singh Johar v. Union of India',
      shortName: 'Navtej Johar',
      year: 2018,
      citation: '(2018) 1 SCC 1',
      benchStrength: '5-Judge Constitution Bench (Unanimous 5-0)',
      presidingJudges: 'Dipak Misra CJI, R.F. Nariman, A.M. Khanwilkar, D.Y. Chandrachud, Indu Malhotra JJ.',
      verdictDate: 'September 6, 2018',
      theSettledRatio:
        'Section 377 IPC is unconstitutional insofar as it criminalizes consensual sexual acts between adults in private. Suresh Koushal is overruled. Discrimination based on sexual orientation violates Articles 14, 15(1) ("sex" includes orientation), 19(1)(a), and 21.',
      constitutionalArticles: ['Article 14', 'Article 15', 'Article 19(1)(a)', 'Article 21'],
      doctrinalShift:
        'Constitutional Morality vs Popular Morality: Courts must enforce constitutional values (equality, liberty, fraternity) even if they run contrary to traditional majoritarian sentiments.',
      keyTakeawayForMains:
        'The Constitution is an organic, transformative document. State discrimination against consensual adult intimacy is arbitrary and destroys human dignity.'
    },
    linkedMainsQuestionId: 'mains-10m-constitutional-morality',
    summaryTable: [
      {
        parameter: 'Judicial Philosophy',
        oldLaw: 'Majoritarian deference: "Minuscule fraction" needs no judicial remedy.',
        newLaw: 'Constitutional Morality: Counter-majoritarian duty to protect every citizen\'s dignity.'
      },
      {
        parameter: 'Interpretation of "Sex" in Art 15',
        oldLaw: 'Restricted strictly to biological sex (male/female).',
        newLaw: 'Encompasses sexual orientation and gender identity.'
      },
      {
        parameter: 'Consensual Intimacy Status',
        oldLaw: 'Cognizable criminal offence punishable with life imprisonment.',
        newLaw: 'Fundamental right protected under privacy, dignity, and bodily autonomy.'
      }
    ]
  },
  {
    id: 'clash-maneka-gandhi-ak-gopalan',
    title: 'The Great Constitutional Metamorphosis: Procedure Established by Law vs Substantive Due Process',
    tagline: '7-Judge Bench overrules Gopalan\'s silos theory, birthing the Golden Triangle (Articles 14, 19, 21).',
    topicPillar: 'Part III: The Golden Triangle & Substantive Due Process (Articles 14, 19, 21)',
    overrulingMagnitude: '7-Judge Overruling',
    yearOverruled: 1978,
    oldCase: {
      caseName: 'A.K. Gopalan v. State of Madras',
      year: 1950,
      citation: 'AIR 1950 SC 27',
      benchStrength: '6-Judge Constitution Bench',
      presidingJudges: 'H.J. Kania CJI, Saiyid Fazl Ali (dissenting), Patanjali Sastri, M.C. Mahajan, B.K. Mukherjea, S.R. Das JJ.',
      historicalContext:
        'Communist leader A.K. Gopalan was detained under the Preventive Detention Act, 1950. He challenged the detention, arguing that detention deprived him of free movement under Art 19 and personal liberty under Art 21 without a fair trial.',
      theFlawedRatio:
        'The majority held that Fundamental Rights are mutually exclusive "water-tight compartments" (Silos Theory). "Procedure established by law" under Article 21 meant ANY validly enacted statute passed by the Legislature, regardless of whether the procedure was fair, just, or cruel.',
      whyItFailed:
        'Reduced personal liberty to formalistic British parliamentary supremacy. If Parliament enacted an oppressive or barbaric law, courts could not strike it down under Article 21.',
      consequences:
        'Led directly to the dark abuses of the 1975 Emergency and the ADM Jabalpur (Habeas Corpus) tragedy.'
    },
    newCase: {
      caseName: 'Maneka Gandhi v. Union of India',
      shortName: 'Maneka Gandhi',
      year: 1978,
      citation: '(1978) 1 SCC 248',
      benchStrength: '7-Judge Constitution Bench (Unanimous)',
      presidingJudges: 'M.H. Beg CJI, Y.V. Chandrachud, P.N. Bhagwati, V.R. Krishna Iyer, N.L. Untwalia, P.S. Kailasam, S. Murtaza Fazal Ali JJ.',
      verdictDate: 'January 25, 1978',
      theSettledRatio:
        'A.K. Gopalan is definitively overruled. Fundamental Rights are not isolated silos; they form an interrelated, unified code (The Golden Triangle). The procedure under Article 21 cannot be arbitrary or oppressive; it must be "just, fair, and reasonable", incorporating American Substantive Due Process.',
      constitutionalArticles: ['Article 14', 'Article 19', 'Article 21'],
      doctrinalShift:
        'Birth of Substantive Due Process: Natural Justice (Audi alteram partem) is an organic requirement of Article 21. Any law curtailing liberty must satisfy the test of Article 14 non-arbitrariness and Article 19 reasonableness.',
      keyTakeawayForMains:
        'Article 21 was transformed from a passive guarantee against executive lawlessness into an expansive reservoir of unenumerated human rights (clean air, legal aid, privacy, dignity).'
    },
    linkedMainsQuestionId: 'mains-15m-golden-triangle-maneka',
    summaryTable: [
      {
        parameter: 'Interrelation of Rights',
        oldLaw: 'Water-tight compartments (Silos Theory): Art 19 and 21 are mutually exclusive.',
        newLaw: 'The Golden Triangle: Articles 14, 19, and 21 must be read together as an integrated whole.'
      },
      {
        parameter: 'Procedure Established by Law',
        oldLaw: 'Any formal enactment passed by the Legislature satisfies Art 21.',
        newLaw: 'Substantive Due Process: Procedure must be just, fair, and reasonable, not oppressive.'
      },
      {
        parameter: 'Natural Justice in Personal Liberty',
        oldLaw: 'No constitutional requirement of audi alteram partem in legislation.',
        newLaw: 'Natural justice is an inalienable component of Article 21.'
      }
    ]
  },
  {
    id: 'clash-jindal-stainless-automobile-transport',
    title: 'Abolition of the Compensatory Tax Theory: Reconciling Entry Tax with National Economic Unity',
    tagline: '9-Judge Bench overrules Automobile Transport, holding taxes are not restrictions per se under Part XIII.',
    topicPillar: 'Part XIII: Trade, Commerce and Intercourse (Articles 301–304) vs State Fiscal Powers',
    overrulingMagnitude: '9-Judge Overruling',
    yearOverruled: 2016,
    oldCase: {
      caseName: 'Automobile Transport (Rajasthan) Ltd. v. State of Rajasthan',
      year: 1962,
      citation: 'AIR 1962 SC 1406',
      benchStrength: '7-Judge Constitution Bench (4:3 Split)',
      presidingJudges: 'S.K. Das, J.L. Kapur, A.K. Sarkar, M. Hidayatullah JJ.',
      historicalContext:
        'Rajasthan imposed a motor vehicle tax. Operators claimed it restricted inter-state trade under Article 301. The Court sought a formula to allow States to fund road construction without violating Article 301.',
      theFlawedRatio:
        'Created the judicial concept of "Compensatory Taxes": Taxes levied to provide infrastructure or maintenance of facilities facilitating trade do not violate Article 301 and do not require Presidential sanction under Article 304(b).',
      whyItFailed:
        'The term "compensatory tax" does not exist in the constitutional text. Determining whether a tax mathematically compensated trade caused 50 years of chaotic, contradictory litigation over State entry taxes.',
      consequences:
        'Every State tax on movement of goods was challenged as non-compensatory, tying up tens of thousands of crores in court escrow accounts.'
    },
    newCase: {
      caseName: 'Jindal Stainless Ltd. v. State of Haryana',
      shortName: 'Jindal Stainless',
      year: 2016,
      citation: '(2017) 12 SCC 1',
      benchStrength: '9-Judge Constitution Bench (7:2 Majority)',
      presidingJudges: 'T.S. Thakur CJI, A.K. Sikri, S.A. Bobde, Shiva Kirti Singh, N.V. Ramana, R. Banumathi, A.M. Khanwilkar JJ. (Majority); D.Y. Chandrachud, Ashok Bhushan JJ. (Dissenting)',
      verdictDate: 'November 11, 2016',
      theSettledRatio:
        'The Compensatory Tax theory is judicially illegitimate and overruled. Taxes per se are not restrictions on trade under Article 301. Article 301 is violated ONLY if a tax discriminates between goods imported from other States and goods manufactured locally. Non-discriminatory entry tax is valid under Article 304(a).',
      constitutionalArticles: ['Article 301', 'Article 302', 'Article 304(a)', 'Article 304(b)'],
      doctrinalShift:
        'Strict Textualism & Economic Federalism: Reconciled national economic integration with the sovereign revenue power of States to fund infrastructure and public services.',
      keyTakeawayForMains:
        'Paved the constitutional path for the Goods and Services Tax (GST) regime, cementing India as an integrated common market without subverting State taxing powers.'
    },
    linkedMainsQuestionId: 'mains-15m-interstate-trade-part-xiii',
    summaryTable: [
      {
        parameter: 'Compensatory Tax Doctrine',
        oldLaw: 'Judicially invented concept: Taxes facilitating trade are exempt from Art 301.',
        newLaw: 'Buried and overruled. Taxes are sovereign contributions, not restrictions per se.'
      },
      {
        parameter: 'Touchstone of Article 301 Violation',
        oldLaw: 'Direct and immediate impedance or failure of mathematical compensation.',
        newLaw: 'Facial or operational discrimination against outside goods under Article 304(a).'
      },
      {
        parameter: 'State Entry Tax Validity',
        oldLaw: 'Invalid unless exact expenditure on road facilities was proven.',
        newLaw: 'Valid, provided the rate is non-discriminatory between local and imported goods.'
      }
    ]
  },
  {
    id: 'clash-kesavananda-shankari-prasad-golaknath',
    title: 'The Basic Structure Triumph: From Absolute Amending Omnipotence to Inviolable Constitutional Identity',
    tagline: '13-Judge Bench establishes the Basic Structure Doctrine, preserving democracy against parliamentary authoritarianism.',
    topicPillar: 'Part XX: Amendment of the Constitution (Article 368) vs Basic Structure',
    overrulingMagnitude: '13-Judge Overruling',
    yearOverruled: 1973,
    oldCase: {
      caseName: 'Shankari Prasad (1951) & Sajjan Singh (1965)',
      year: 1951,
      citation: 'AIR 1951 SC 458 & AIR 1965 SC 845',
      benchStrength: '5-Judge Constitution Benches',
      presidingJudges: 'H.J. Kania CJI (1951) & P.B. Gajendragadkar CJI (1965)',
      historicalContext:
        'Zamindars challenged the 1st and 17th Constitutional Amendments curtailing property rights, arguing that constitutional amendments are "laws" within the meaning of Article 13(2) and cannot take away Part III rights.',
      theFlawedRatio:
        'Held that Parliament\'s constituent power to amend the Constitution under Article 368 was plenary and boundless. "Law" in Article 13(2) referred only to ordinary legislation, not constitutional amendments. Parliament could abrogate any fundamental right at will.',
      whyItFailed:
        'Granted a transient 2/3rds parliamentary majority the unrestricted power to rewrite the Constitution, abolish fundamental freedoms, declare a one-party state, or erase judicial review.',
      consequences:
        'Led to political brinkmanship, triggering the radical counter-swing in Golak Nath (1967, 11 judges) which completely froze constitutional amendments to Part III.'
    },
    newCase: {
      caseName: 'Kesavananda Bharati v. State of Kerala',
      shortName: 'Kesavananda',
      year: 1973,
      citation: '(1973) 4 SCC 225',
      benchStrength: '13-Judge Constitution Bench (7:6 Majority)',
      presidingJudges: 'S.M. Sikri CJI, J.M. Shelat, K.S. Hegde, A.N. Grover, B. Jaganmohan Reddy, D.G. Palekar, H.R. Khanna, A.K. Mukherjea, K.K. Mathew, M.H. Beg, S.N. Dwivedi, Y.V. Chandrachud JJ.',
      verdictDate: 'April 24, 1973',
      theSettledRatio:
        'Parliament possesses wide power to amend any provision of the Constitution (including Part III), but constituent power does NOT include the power to alter, destroy, or abrogate the "Basic Structure" or essential framework of the Constitution. Golak Nath was overruled; Shankari Prasad\'s absolute sovereignty doctrine was terminated.',
      constitutionalArticles: ['Article 13(2)', 'Article 368', 'Preamble'],
      doctrinalShift:
        'The Basic Structure Doctrine: The power to amend is not the power to destroy. Core pillars (Rule of Law, Judicial Review, Federalism, Secularism, Free & Fair Elections) are inviolable.',
      keyTakeawayForMains:
        'The greatest constitutional victory in the common law world. Preserved Indian democracy by ensuring that Parliament is a creature of the Constitution, not its master.'
    },
    linkedMainsQuestionId: 'mains-20m-basic-structure-evolution',
    summaryTable: [
      {
        parameter: 'Parliament\'s Amending Power',
        oldLaw: 'Unlimited, sovereign omnipotence. Could abolish any or all fundamental rights.',
        newLaw: 'Bounded constituent power. Cannot alter the core identity (Basic Structure).'
      },
      {
        parameter: 'Article 13 vs Article 368',
        oldLaw: 'Amendments are not "laws" under Art 13(2); immune from judicial review.',
        newLaw: 'Amendments subject to judicial review on the touchstone of Basic Structure.'
      },
      {
        parameter: 'Supremacy in the Republic',
        oldLaw: 'Parliamentary supremacy (British model).',
        newLaw: 'Constitutional supremacy: The Constitution is supreme over all three organs.'
      }
    ]
  },
  {
    id: 'clash-joseph-shine-sowmithri-vishnu',
    title: 'Adultery Struck Down: Dismantling Patriarchal Ownership of Women under Criminal Law',
    tagline: '5-Judge Bench overrules Sowmithri Vishnu, holding that marriage cannot strip a woman of constitutional agency.',
    topicPillar: 'Part III: Equality, Gender Justice & Autonomy (Articles 14, 15, 21)',
    overrulingMagnitude: '5-Judge Re-anchoring',
    yearOverruled: 2018,
    oldCase: {
      caseName: 'Sowmithri Vishnu v. Union of India',
      year: 1985,
      citation: '(1985) Supp SCC 137',
      benchStrength: '3-Judge Bench',
      presidingJudges: 'Y.V. Chandrachud CJI, R.S. Pathak, A.N. Sen JJ.',
      historicalContext:
        'Section 497 IPC criminalized adultery: a man could prosecute another man for having sexual intercourse with his wife without his consent. A woman could neither prosecute an unfaithful husband nor be prosecuted.',
      theFlawedRatio:
        'Upholding Section 497, the Court held that it was designed to protect the sanctity of the marital home. Treating the husband as the aggrieved party was justified because the wife was the "victim" of the seducer.',
      whyItFailed:
        'Embedded the medieval concept that a wife is the chattel/property of her husband. If the husband consented to his wife having intercourse with another man, no offence was committed, proving that the law protected the husband\'s proprietary interest, not marital sanctity.',
      consequences:
        'Treated married women as devoid of independent sexual agency and constitutional equality for over 30 years.'
    },
    newCase: {
      caseName: 'Joseph Shine v. Union of India',
      shortName: 'Joseph Shine',
      year: 2018,
      citation: '(2019) 3 SCC 39',
      benchStrength: '5-Judge Constitution Bench (Unanimous 5-0)',
      presidingJudges: 'Dipak Misra CJI, R.F. Nariman, A.M. Khanwilkar, D.Y. Chandrachud, Indu Malhotra JJ.',
      verdictDate: 'September 27, 2018',
      theSettledRatio:
        'Section 497 IPC and Section 198(2) CrPC are unconstitutional and struck down. Adultery can be a civil ground for divorce, but criminalizing it violates Articles 14, 15(1), and 21. Sowmithri Vishnu and V. Revathi are overruled.',
      constitutionalArticles: ['Article 14', 'Article 15', 'Article 21'],
      doctrinalShift:
        'Constitutional Rejection of Patriarchal Paternalism: Marriage does not mean ceding autonomy to one\'s spouse. A woman has an independent legal personality protected by Article 21.',
      keyTakeawayForMains:
        'The State cannot deploy penal sanctions into the private domain of marital infidelity where no public harm exists. Criminal law cannot enforce patriarchal fidelity.'
    },
    linkedMainsQuestionId: 'mains-15m-marital-rape-exception',
    summaryTable: [
      {
        parameter: 'Legal Character of Adultery',
        oldLaw: 'Cognizable criminal offence against the husband\'s proprietary rights.',
        newLaw: 'Purely a civil matrimonial wrong (ground for divorce).'
      },
      {
        parameter: 'Gender Parity under Article 14 & 15',
        oldLaw: 'Protected under Article 15(3) as a beneficial provision for women.',
        newLaw: 'Paternalistic stereotyping violating Article 14 and Article 15(1).'
      },
      {
        parameter: 'Agency of Married Women',
        oldLaw: 'Wife regarded as property of the husband.',
        newLaw: 'Autonomous constitutional individual endowed with equal agency and dignity.'
      }
    ]
  },
  {
    id: 'clash-common-cause-gian-kaur',
    title: 'The Right to Die with Dignity: From Criminalized Suicide to Living Wills & Passive Euthanasia',
    tagline: '5-Judge Bench re-interprets Gian Kaur, declaring the right to a dignified dying process under Article 21.',
    topicPillar: 'Part III: Right to Life, Bodily Autonomy & Dignified Death (Article 21)',
    overrulingMagnitude: '5-Judge Re-anchoring',
    yearOverruled: 2018,
    oldCase: {
      caseName: 'Gian Kaur v. State of Punjab',
      year: 1996,
      citation: '(1996) 2 SCC 648',
      benchStrength: '5-Judge Constitution Bench',
      presidingJudges: 'J.S. Verma J. for the Bench',
      historicalContext:
        'A 2-judge bench in P. Rathinam (1994) struck down Section 309 IPC (attempted suicide), holding that the right to live includes the right to die. The State appealed to a 5-Judge Constitution Bench in Gian Kaur.',
      theFlawedRatio:
        'The 5-Judge Bench overruled P. Rathinam and upheld Section 309 IPC, holding that "Right to Life" is a natural right, whereas suicide is an unnatural extinction of life. However, the Court left ambiguous whether terminally ill vegetative patients had a right to withdraw life support.',
      whyItFailed:
        'Equated natural death with medicalized vegetative agony. Hospitals kept brain-dead patients mechanically alive on ventilators for years against the patient\'s prior wishes.',
      consequences:
        'Doctors feared murder prosecutions under Section 302/304 IPC for disconnecting ventilators of brain-dead patients.'
    },
    newCase: {
      caseName: 'Common Cause (A Regd. Society) v. Union of India',
      shortName: 'Common Cause',
      year: 2018,
      citation: '(2018) 5 SCC 1 & (2023) 3 SCC 414',
      benchStrength: '5-Judge Constitution Bench (Unanimous)',
      presidingJudges: 'Dipak Misra CJI, A.K. Sikri, A.M. Khanwilkar, D.Y. Chandrachud, Ashok Bhushan JJ.',
      verdictDate: 'March 9, 2018 (Modified January 24, 2023)',
      theSettledRatio:
        'The Right to Die with Dignity is an integral part of the Right to Life under Article 21. Adult citizens have a fundamental right of bodily autonomy to execute an "Advance Medical Directive" (Living Will) directing doctors not to prolong their terminal vegetative state with artificial support. Passive euthanasia is lawful.',
      constitutionalArticles: ['Article 21', 'Article 14'],
      doctrinalShift:
        'Self-Determination in Medical Decisions: Active euthanasia remains illegal, but passive withdrawal of futile treatment honors the patient\'s bodily sovereignty.',
      keyTakeawayForMains:
        'Life under Article 21 means a life of human dignity, not mere biological vegetative existence. The dying process is the culminating phase of life itself.'
    },
    linkedMainsQuestionId: 'mains-10m-living-wills-passive-euthanasia',
    summaryTable: [
      {
        parameter: 'Right to Die with Dignity',
        oldLaw: 'Ambiguous; suicide criminalized under Section 309 IPC.',
        newLaw: 'Passive euthanasia and living wills recognized as fundamental rights under Art 21.'
      },
      {
        parameter: 'Advance Medical Directives',
        oldLaw: 'Not recognized in Indian law.',
        newLaw: 'Enforceable under Article 21; execution procedure simplified in 2023.'
      },
      {
        parameter: 'Active vs Passive Distinction',
        oldLaw: 'Unclear distinction; withdrawal risked criminal prosecution.',
        newLaw: 'Active euthanasia is criminal; passive withdrawal of futile life support is lawful.'
      }
    ]
  },
  {
    id: 'clash-electoral-bonds-adr',
    title: 'The Electoral Bonds Scheme Struck Down: Voter\'s Right to Know Overrules Corporate Anonymity',
    tagline: '5-Judge Constitution Bench unanimously strikes down the 2018 Electoral Bonds scheme and opaque amendments to RPA, Companies Act, and Income Tax Act.',
    topicPillar: 'Part III: Freedom of Speech and Expression & Right to Information (Article 19(1)(a)) vs Dark Money',
    overrulingMagnitude: '5-Judge Overruling',
    yearOverruled: 2024,
    oldCase: {
      caseName: 'Union of India (Electoral Bonds Scheme, 2018 & Finance Act Amendments)',
      year: 2018,
      citation: 'Gazette Notification G.S.R. 20(E) / Section 31(3) RBI Act',
      benchStrength: 'Executive Scheme & Statutory Amendments (Interim stays declined 2019–2021)',
      presidingJudges: 'S.A. Bobde CJI (Interim orders refusing stay)',
      historicalContext:
        'In 2017, the Union introduced the Electoral Bonds Scheme via the Finance Act. It removed the 7.5% profit cap on corporate donations, eliminated the requirement for companies to declare recipient political parties in balance sheets, and allowed anonymous bearer instruments issued via SBI.',
      theFlawedRatio:
        'The Union defended the scheme on the grounds that donor confidentiality was essential to protect donors from political retribution and to channel political funding into formal banking channels away from black money.',
      whyItFailed:
        'Failed the four-pronged Proportionality Test: violated the fundamental right to information of voters under Article 19(1)(a). Allowed loss-making and shell companies to channel unlimited secret donations into ruling parties.',
      consequences:
        'Created severe informational asymmetry: the ruling executive through SBI and law enforcement could identify donors, while citizens, opposition parties, and the electorate were kept entirely in the dark.'
    },
    newCase: {
      caseName: 'Association for Democratic Reforms (ADR) v. Union of India',
      shortName: 'ADR (Bonds)',
      year: 2024,
      citation: '2024 INSC 113 / (2024) 4 SCC 1',
      benchStrength: '5-Judge Constitution Bench (Unanimous 5-0)',
      presidingJudges: 'D.Y. Chandrachud CJI, Sanjiv Khanna, B.R. Gavai, J.B. Pardiwala, Manoj Misra JJ.',
      verdictDate: 'February 15, 2024',
      theSettledRatio:
        'The right to information under Article 19(1)(a) is not restricted to administrative state affairs; it extends directly to the ballot box. Voters require knowledge of the financial backers of political parties to detect quid pro quo policy favours. Unlimited corporate funding violates free and fair elections, an essential facet of democracy.',
      constitutionalArticles: ['Article 19(1)(a)', 'Article 14', 'Article 324', 'Article 21'],
      doctrinalShift:
        'Voter Autonomy & Strict Proportionality: Privacy of political affiliation cannot shield purely commercial corporate contributions. The citizen\'s right to an informed vote overrides corporate secrecy.',
      keyTakeawayForMains:
        'Money in politics directly influences state policy. Transparency in electoral financing is a prerequisite for democratic accountability under Article 19(1)(a).'
    },
    linkedMainsQuestionId: 'mains-15m-electoral-bonds-proportionality-test',
    summaryTable: [
      {
        parameter: 'Corporate Contribution Caps',
        oldLaw: 'Unlimited without cap; loss-making shell entities permitted.',
        newLaw: 'Deletion of 7.5% profit cap struck down as manifestly arbitrary.'
      },
      {
        parameter: 'Donor Anonymity',
        oldLaw: 'SBI bearer bonds kept donor identities secret from the public.',
        newLaw: 'Struck down; full public disclosure of bond purchaser and recipient party mandated.'
      },
      {
        parameter: 'Voter\'s Right to Know',
        oldLaw: 'Subordinated to donor privacy and curbing cash transactions.',
        newLaw: 'Held to be an inviolable fundamental right under Article 19(1)(a).'
      }
    ]
  },
  {
    id: 'clash-shayara-bano-narasu-appa',
    title: 'Triple Talaq (Talaq-e-Biddat) Struck Down: Manifest Arbitrariness Overrules Personal Law Immunity',
    tagline: '5-Judge Constitution Bench invalidates instantaneous divorce, expanding Article 14 review to statutory personal law practices.',
    topicPillar: 'Part III: Right to Equality (Article 14), Gender Justice & Freedom of Religion (Article 25)',
    overrulingMagnitude: '5-Judge Re-anchoring',
    yearOverruled: 2017,
    oldCase: {
      caseName: 'State of Bombay v. Narasu Appa Mali',
      year: 1952,
      citation: 'AIR 1952 Bom 84',
      benchStrength: '2-Judge High Court Bench (Chagla CJ & Gajendragadkar J)',
      presidingJudges: 'M.C. Chagla CJ & P.B. Gajendragadkar J.',
      historicalContext:
        'In 1952, the Bombay Prevention of Hindu Bigamous Marriages Act was challenged as discriminatory because it banned Hindu polygamy while leaving Muslim polygamy untouched. The High Court sought to insulate traditional personal practices from constitutional review.',
      theFlawedRatio:
        'Held that uncodified personal laws are not "laws in force" under Article 13(1) of the Constitution, effectively immunizing religious personal practices from Fundamental Rights scrutiny.',
      whyItFailed:
        'Created an untouchable sanctuary where gender-discriminatory practices, arbitrary unilateral repudiation, and feudal customs continued unhindered under the cloak of religious freedom.',
      consequences:
        'Muslim women subjected to Talaq-e-Biddat (instantaneous triple divorce via post, phone, or SMS) were left destitute with no legal recourse or constitutional remedy for 65 years.'
    },
    newCase: {
      caseName: 'Shayara Bano v. Union of India',
      shortName: 'Shayara Bano',
      year: 2017,
      citation: '(2017) 9 SCC 1',
      benchStrength: '5-Judge Constitution Bench (3:2 Majority)',
      presidingJudges: 'J.S. Khehar CJI, Kurian Joseph, R.F. Nariman, U.U. Lalit, S. Abdul Nazeer JJ.',
      verdictDate: 'August 22, 2017',
      theSettledRatio:
        'Talaq-e-Biddat is arbitrary, whimsical, and capricious. What is bad in theology cannot be good in constitutional law. Justice Nariman formulated the landmark "Manifest Arbitrariness" test under Article 14: statutory personal provisions that are irrational, capricious, or lack determining principle are void.',
      constitutionalArticles: ['Article 14', 'Article 15(1)', 'Article 21', 'Article 25(1)'],
      doctrinalShift:
        'The Manifest Arbitrariness Doctrine: Expanded Article 14 beyond mere reasonable classification to strike down any state action or statutory custom that is unreasonable or without adequate determining principle.',
      keyTakeawayForMains:
        'Fundamental Rights under Part III are paramount over discriminatory personal law practices. Religious freedom under Article 25 is expressly subject to public order, morality, health, and other Fundamental Rights.',
    },
    linkedMainsQuestionId: 'mains-15m-manifest-arbitrariness-shayara-bano',
    summaryTable: [
      {
        parameter: 'Constitutional Scrutiny of Personal Practices',
        oldLaw: 'Insulated from Part III review under the Narasu Appa Mali doctrine.',
        newLaw: 'Subject to Article 14, 15, and 21 scrutiny.'
      },
      {
        parameter: 'Validity of Talaq-e-Biddat',
        oldLaw: 'Enforceable as valid under Section 2 of Shariat Act, 1937.',
        newLaw: 'Declared void ab initio and unconstitutional under Article 14.'
      },
      {
        parameter: 'Scope of Article 14',
        oldLaw: 'Restricted to reasonable classification and intelligible differentia.',
        newLaw: 'Expanded to invalidate any measure exhibiting "Manifest Arbitrariness".'
      }
    ]
  },
  {
    id: 'clash-sabarimala-devaru',
    title: 'The Sabarimala Verdict: Constitutional Morality Overrules Patriarchal Temple Exclusion',
    tagline: '5-Judge Constitution Bench opens Sabarimala temple to women of all ages, ruling that biological exclusion violates equality and dignity.',
    topicPillar: 'Part III: Freedom of Conscience (Article 25), Denominational Rights (Article 26) & Anti-Untouchability (Article 17)',
    overrulingMagnitude: '5-Judge Re-anchoring',
    yearOverruled: 2018,
    oldCase: {
      caseName: 'Sri Venkataramana Devaru v. State of Mysore',
      year: 1958,
      citation: '1958 SCR 895 / AIR 1958 SC 255',
      benchStrength: '5-Judge Constitution Bench',
      presidingJudges: 'T.L. Venkatarama Ayyar J. for the Bench',
      historicalContext:
        'Venkataramana Devaru examined whether a denominational temple of Gowda Saraswat Brahmins could exclude other castes based on religious texts, harmonizing Article 26(b) denominational autonomy with Article 25(2)(b) social reform.',
      theFlawedRatio:
        'The Court permitted denominational practices to restrict worship rights to specific ceremonies and classes, placing heavy reliance on scriptural orthodoxy rather than fundamental individual rights.',
      whyItFailed:
        'Allowed religious customs to institutionalize biological and gender stigma (such as menstruation taboos) as protected "essential religious practices" under Article 26(b).',
      consequences:
        'Rule 3(b) of the Kerala Places of Public Worship Rules, 1965 systematically barred all women aged 10–50 from entering the Sabarimala shrine.'
    },
    newCase: {
      caseName: 'Indian Young Lawyers Association v. State of Kerala (Sabarimala Case)',
      shortName: 'Sabarimala',
      year: 2018,
      citation: '(2019) 11 SCC 1',
      benchStrength: '5-Judge Constitution Bench (4:1 Majority)',
      presidingJudges: 'Dipak Misra CJI, R.F. Nariman, A.M. Khanwilkar, D.Y. Chandrachud JJ. (Indu Malhotra J. dissenting)',
      verdictDate: 'September 28, 2018',
      theSettledRatio:
        'Devotion cannot be subjected to gender discrimination. Lord Ayyappa devotees do not constitute a separate religious denomination under Article 26. Exclusion based on physiological factors like menstruation violates Article 14 (Equality), Article 15 (Non-discrimination), and Article 21 (Dignity). Menstrual exclusion also perpetuates a form of social untouchability under Article 17.',
      constitutionalArticles: ['Article 14', 'Article 15', 'Article 17', 'Article 21', 'Article 25(1)'],
      doctrinalShift:
        'Constitutional Morality: Overrides popular morality, sectarian customs, and patriarchal traditions. The individual is the foundational unit of the Constitution, not the religious collective.',
      keyTakeawayForMains:
        'Freedom of religion under Article 25 is an individual right, subject to equality and human dignity. Denominational autonomy under Article 26 cannot extinguish an individual woman\'s right to pray.'
    },
    linkedMainsQuestionId: 'mains-15m-constitutional-morality-sabarimala',
    summaryTable: [
      {
        parameter: 'Basis of Exclusion',
        oldLaw: 'Preserved as traditional customary denominational rule under Art 26(b).',
        newLaw: 'Struck down as violative of Articles 14, 15, and 21.'
      },
      {
        parameter: 'Status of Ayyappa Devotees',
        oldLaw: 'Treated as a distinct denomination with absolute ritual autonomy.',
        newLaw: 'Held to be ordinary Hindu worshippers, not a separate religious denomination.'
      },
      {
        parameter: 'Constitutional Morality vs Custom',
        oldLaw: 'Customary traditions respected if rooted in historical lore.',
        newLaw: 'Constitutional morality decisively trumps religious conservatism.'
      }
    ]
  },
  {
    id: 'clash-njac-fourth-judges-case',
    title: 'The NJAC Overruling: Independence of the Judiciary and the Revival of the Collegium',
    tagline: '5-Judge Bench strikes down the 99th Constitutional Amendment Act, declaring primacy of the Chief Justice as part of the Basic Structure.',
    topicPillar: 'Part V: Independence of Judiciary (Articles 124 & 217) & Separation of Powers',
    overrulingMagnitude: '5-Judge Overruling',
    yearOverruled: 2015,
    oldCase: {
      caseName: 'S.P. Gupta v. Union of India (First Judges Case)',
      year: 1981,
      citation: '(1981) Supp SCC 87 / AIR 1982 SC 149',
      benchStrength: '7-Judge Constitution Bench (4:3 Majority)',
      presidingJudges: 'P.N. Bhagwati J. for the Majority',
      historicalContext:
        'During the post-Emergency era, the executive transferred High Court judges without their consent and superseded senior judges. S.P. Gupta challenged the Union Government\'s absolute power over judicial appointments.',
      theFlawedRatio:
        'Held that "consultation" in Article 124(2) does not mean "concurrence". The Central Government had the ultimate power to reject the CJI\'s recommendation for cogent reasons, giving executive absolute primacy.',
      whyItFailed:
        'Exposed the judiciary to political interference, partisan appointments, and executive pressure, directly undermining judicial independence.',
      consequences:
        'Overruled in Second Judges Case (1993, 9-J) and Third Judges Case (1998, 9-J), which created the Collegium system. Parliament attempted to overturn this via the 99th CAA (NJAC) in 2014.'
    },
    newCase: {
      caseName: 'Supreme Court Advocates-on-Record Association v. Union of India (NJAC Case)',
      shortName: 'NJAC (Collegium)',
      year: 2015,
      citation: '(2016) 5 SCC 1',
      benchStrength: '5-Judge Constitution Bench (4:1 Majority)',
      presidingJudges: 'J.S. Khehar, J. Chelameswar (dissenting), M.B. Lokur, Kurian Joseph, A.K. Goel JJ.',
      verdictDate: 'October 16, 2015',
      theSettledRatio:
        'The 99th Constitutional Amendment Act and the NJAC Act, 2014 are unconstitutional and void. Independence of the judiciary is an inviolable basic feature of the Constitution. Giving the Law Minister and two "eminent persons" veto power over judicial appointments violates the separation of powers and compromises the independence of courts.',
      constitutionalArticles: ['Article 124(2)', 'Article 217(1)', 'Article 50', 'Basic Structure Doctrine'],
      doctrinalShift:
        'Primacy of Judiciary in Appointments: Judicial independence is not merely an institutional privilege; it is a fundamental guarantee to citizens that the umpire between citizens and the State is independent.',
      keyTakeawayForMains:
        'Judicial primacy in appointments is inextricably linked to the basic structure. The executive cannot be a judge in its own cause as the largest litigant before the courts.'
    },
    linkedMainsQuestionId: 'mains-15m-njac-collegium-judicial-independence',
    summaryTable: [
      {
        parameter: 'Judicial Appointment Authority',
        oldLaw: 'Executive had ultimate veto (S.P. Gupta) / Shared NJAC Commission (2014).',
        newLaw: 'Supreme Court Collegium has primacy; NJAC declared unconstitutional.'
      },
      {
        parameter: 'Status of "Consultation" in Art 124',
        oldLaw: 'Consultation meant simple exchange of views, not agreement.',
        newLaw: 'Consultation requires concurrence of the CJI and senior Collegium judges.'
      },
      {
        parameter: 'Executive Participation',
        oldLaw: 'Union Law Minister given permanent seat and veto in the 6-member NJAC.',
        newLaw: 'Executive veto struck down as dangerous threat to the Basic Structure.'
      }
    ]
  },
  {
    id: 'clash-subhash-desai-nabam-rebia',
    title: 'The Maharashtra Political Crisis: Speaker\'s Disqualification Powers & Governor\'s Floor Test Limits',
    tagline: '5-Judge Constitution Bench re-examines Nabam Rebia (2016), restricting Governor\'s power to topple elected governments under Tenth Schedule.',
    topicPillar: 'Tenth Schedule (Anti-Defection Law) & Discretionary Powers of the Governor (Article 163 & 174)',
    overrulingMagnitude: '5-Judge Re-anchoring',
    yearOverruled: 2023,
    oldCase: {
      caseName: 'Nabam Rebia and Bamang Felix v. Deputy Speaker, Arunachal Pradesh',
      year: 2016,
      citation: '(2016) 8 SCC 1',
      benchStrength: '5-Judge Constitution Bench',
      presidingJudges: 'J.S. Khehar, Dipak Misra, J. Chelameswar, Madan B. Lokur, P.C. Ghose JJ.',
      historicalContext:
        'In Arunachal Pradesh in 2015, rebel Congress MLAs issued a notice under Article 179(c) for the removal of the Speaker, and the Governor advanced the Assembly session without the Chief Minister\'s aid and advice.',
      theFlawedRatio:
        'The 5-Judge Bench held that a Speaker cannot initiate or proceed with disqualification proceedings under the Tenth Schedule against rebel MLAs if a notice for the Speaker\'s own removal is pending.',
      whyItFailed:
        'Created an exploitable legal loophole: defecting rebel MLAs could easily immunize themselves from disqualification by simply sending a frivolous removal notice against the Speaker under Article 179(c).',
      consequences:
        'Allowed rebel factions in Maharashtra (2022) to paralyze the Speaker\'s anti-defection authority, split parties, and force government changes.'
    },
    newCase: {
      caseName: 'Subhash Desai v. Principal Secretary, Governor of Maharashtra',
      shortName: 'Subhash Desai',
      year: 2023,
      citation: '2023 INSC 516 / (2023) 8 SCC 333',
      benchStrength: '5-Judge Constitution Bench (Unanimous 5-0)',
      presidingJudges: 'D.Y. Chandrachud CJI, M.R. Shah, Krishna Murari, Hima Kohli, P.S. Narasimha JJ.',
      verdictDate: 'May 11, 2023',
      theSettledRatio:
        'Referred Nabam Rebia to a 7-Judge Bench to prevent the abuse of Speaker removal notices. Crucially ruled that the Governor has no constitutional authority to enter the political arena or order a floor test based solely on internal party rifts. The political party (Whip & Leader) controls the legislative party, not vice versa. Factional dissent does not equal defection immunity.',
      constitutionalArticles: ['Tenth Schedule', 'Article 163', 'Article 174', 'Article 179(c)'],
      doctrinalShift:
        'Democracy & Party System Integrity: The Tenth Schedule binds legislators to the political party that sponsored them, not to ad-hoc factions. The Governor\'s discretionary powers under Article 163 are narrow and non-political.',
      keyTakeawayForMains:
        'The Governor cannot use floor tests to precipitate the fall of a government unless there is objective material showing loss of confidence on the floor of the House. The Tenth Schedule was meant to curb defections, not facilitate them.'
    },
    linkedMainsQuestionId: 'mains-15m-tenth-schedule-speaker-governor-maharashtra',
    summaryTable: [
      {
        parameter: 'Speaker\'s Disqualification Power',
        oldLaw: 'Paralyzed if a notice for Speaker removal was pending (Nabam Rebia).',
        newLaw: 'Held problematic and referred to 7-Judge Bench; Speaker remains the sole constitutional arbiter.'
      },
      {
        parameter: 'Governor\'s Floor Test Discretion',
        oldLaw: 'Governor could call floor test citing internal party correspondence.',
        newLaw: 'Strictly illegal; Governor cannot act without objective proof of government loss of majority.'
      },
      {
        parameter: 'Political Party vs Legislative Wing',
        oldLaw: 'Ambiguity allowed legislative rebels to claim the whip.',
        newLaw: 'The original Political Party appoints the Whip and Leader, not the defecting legislative faction.'
      }
    ]
  },
  {
    id: 'clash-second-judges-sp-gupta',
    title: 'The Birth of the Collegium: "Consultation" Means "Concurrence" in Judicial Appointments',
    tagline: '9-Judge Constitution Bench overrules 7-Judge S.P. Gupta, wresting appointment primacy from executive discretion.',
    topicPillar: 'Part V: Appointment of Judges (Articles 124 & 217) & Separation of Powers',
    overrulingMagnitude: '9-Judge Overruling',
    yearOverruled: 1993,
    oldCase: {
      caseName: 'S.P. Gupta v. Union of India (First Judges Case)',
      year: 1981,
      citation: '(1981) Supp SCC 87 / AIR 1982 SC 149',
      benchStrength: '7-Judge Constitution Bench (4:3 Majority)',
      presidingJudges: 'P.N. Bhagwati J. for the Majority',
      historicalContext:
        'During the post-Emergency era, the executive actively transferred High Court judges without their consent and superseded senior judges. S.P. Gupta challenged the Union Government\'s claim of absolute control over judicial appointments.',
      theFlawedRatio:
        'Held that "consultation" in Article 124(2) and 217(1) does not mean "concurrence". The Central Government had the ultimate power to reject the CJI\'s recommendation for cogent reasons, granting the executive complete primacy in judicial appointments.',
      whyItFailed:
        'Subordinated the judiciary to political patronage, resulting in partisan judicial appointments, executive pressure on judges, and the risk of a "committed judiciary".',
      consequences:
        'For 12 years, judicial vacancies and High Court transfers were dictated by the Union Law Ministry, eroding public confidence in judicial neutrality.'
    },
    newCase: {
      caseName: 'Supreme Court Advocates-on-Record Association v. Union of India (Second Judges Case)',
      shortName: 'Second Judges (Collegium)',
      year: 1993,
      citation: '(1993) 4 SCC 441',
      benchStrength: '9-Judge Constitution Bench (7:2 Majority)',
      presidingJudges: 'J.S. Verma J. for the Majority; A.M. Ahmadi, M.M. Punchhi JJ. (Dissenting)',
      verdictDate: 'October 6, 1993',
      theSettledRatio:
        'S.P. Gupta is overruled. In the appointment of judges to the Supreme Court and High Courts, the opinion of the Chief Justice of India enjoys primacy. "Consultation" requires institutional consensus ("concurrence"), formed in consultation with the two senior-most judges of the Supreme Court (expanded to four in Third Judges Case 1998). No appointment can be made by the executive if the CJI dissents.',
      constitutionalArticles: ['Article 124(2)', 'Article 217(1)', 'Article 50', 'Article 141'],
      doctrinalShift:
        'Judicial Primacy & Independence: The Chief Justice speaks not as an individual but as the head of an institutional Collegium. The executive\'s role is confined strictly to checking antecedents and integrity.',
      keyTakeawayForMains:
        'Independence of the judiciary requires institutional control over its own appointments. The word "consultation" must be interpreted purposively to effectuate the constitutional design of separation of powers.'
    },
    linkedMainsQuestionId: 'mains-15m-collegium-system-evolution',
    summaryTable: [
      {
        parameter: 'Interpretation of "Consultation" in Art 124',
        oldLaw: 'Simple discussion; executive held final decision-making power.',
        newLaw: 'Institutional concurrence; CJI Collegium opinion has binding primacy.'
      },
      {
        parameter: 'Executive Primacy vs Judicial Primacy',
        oldLaw: 'Executive primacy (First Judges Case).',
        newLaw: 'Judicial Collegium primacy (Second & Third Judges Cases).'
      },
      {
        parameter: 'Institutional Mechanism',
        oldLaw: 'Unfettered discretion of the Prime Minister and Law Minister.',
        newLaw: 'Structured institutional consensus of CJI and senior-most puisne judges.'
      }
    ]
  },
  {
    id: 'clash-puttaswamy-adm-jabalpur',
    title: 'The Burial of ADM Jabalpur: Fundamental Rights Inviolable Even During Emergency',
    tagline: '9-Judge Bench in Puttaswamy formally overrules the infamous 1976 Habeas Corpus judgment, vindicating Justice H.R. Khanna\'s heroic dissent.',
    topicPillar: 'Part III & Part XVIII: Right to Life (Article 21) & Emergency Inviolability (Articles 358 & 359)',
    overrulingMagnitude: '9-Judge Overruling',
    yearOverruled: 2017,
    oldCase: {
      caseName: 'ADM Jabalpur v. Shivkant Shukla (Habeas Corpus Case)',
      year: 1976,
      citation: '(1976) 2 SCC 521 / AIR 1976 SC 1207',
      benchStrength: '5-Judge Constitution Bench (4:1 Majority)',
      presidingJudges: 'A.N. Ray CJI, M.H. Beg, P.N. Bhagwati, Y.V. Chandrachud JJ. (Majority); H.R. Khanna J. (Dissenting)',
      historicalContext:
        'During the June 1975 Internal Emergency, thousands of political leaders, journalists, and dissidents were jailed without trial under MISA. High Courts across India entertained Habeas Corpus petitions under Art 226. The Indira Gandhi regime appealed to the Supreme Court.',
      theFlawedRatio:
        'The 4-Judge majority held that upon the issuance of a Presidential Order under Article 359(1), no person had any locus standi to approach any court for a writ of habeas corpus to challenge the legality or mala fides of an order of detention.',
      whyItFailed:
        'Surrendered judicial review and the rule of law to executive dictatorship. Reduced life and liberty to a revocable gift of the State rather than an inalienable human right.',
      consequences:
        'Over 100,000 citizens were detained indefinitely without trial or judicial oversight, widely regarded as the darkest hour in Indian judicial history.'
    },
    newCase: {
      caseName: 'Justice K.S. Puttaswamy (Retd.) v. Union of India (Overruling ADM Jabalpur)',
      shortName: 'ADM Burial (Puttaswamy)',
      year: 2017,
      citation: '(2017) 10 SCC 1',
      benchStrength: '9-Judge Constitution Bench (Unanimous 9-0)',
      presidingJudges: 'J.S. Khehar CJI, J. Chelameswar, S.A. Bobde, R.K. Agrawal, R.F. Nariman, A.M. Sapre, D.Y. Chandrachud, S.K. Kaul, S. Abdul Nazeer JJ.',
      verdictDate: 'August 24, 2017',
      theSettledRatio:
        'ADM Jabalpur is formally and unequivocally overruled. Justice H.R. Khanna\'s lone dissent was the correct law: the right to life and personal liberty is not a bounty conferred by the State or the Constitution; it inheres in every human being by virtue of existence. Even during an Emergency, the State has no authority to extinguish life or liberty without the sanction of law. (Reinforced by the 44th Amendment Act 1978 amending Art 359 to insulate Arts 20 & 21).',
      constitutionalArticles: ['Article 21', 'Article 20', 'Article 359', 'Article 226', 'Article 32'],
      doctrinalShift:
        'Natural Law & Human Dignity: Fundamental rights are anterior to the State. Constitutional courts cannot abandon their role as protectors of life and liberty, irrespective of state emergencies.',
      keyTakeawayForMains:
        'The rule of law is absolute. Justice H.R. Khanna sacrificed the Chief Justiceship of India to uphold the inviolability of human life against executive absolutism.'
    },
    linkedMainsQuestionId: 'mains-15m-adm-jabalpur-hr-khanna-puttaswamy',
    summaryTable: [
      {
        parameter: 'Right to Life during Emergency',
        oldLaw: 'Suspended completely; executive could detain or execute without judicial redress.',
        newLaw: 'Inalienable; Articles 20 and 21 can never be suspended under Article 359.'
      },
      {
        parameter: 'Habeas Corpus Availability',
        oldLaw: 'Courts barred from examining whether detention was illegal or mala fide.',
        newLaw: 'Judicial review under Articles 32 and 226 remains active to prevent state lawlessness.'
      },
      {
        parameter: 'Source of Fundamental Rights',
        oldLaw: 'Conferred solely by statutory text; revocable by the sovereign.',
        newLaw: 'Inherent natural human rights anterior to the Constitution.'
      }
    ]
  },
  {
    id: 'clash-sr-bommai-rajasthan',
    title: 'The S.R. Bommai Revolution: Judicial Review of President\'s Rule (Article 356) & Mandatory Floor Test',
    tagline: '9-Judge Constitution Bench overrules State of Rajasthan, halting arbitrary dissolution of State assemblies and establishing Secularism as Basic Structure.',
    topicPillar: 'Part XVIII: Emergency Provisions • State Emergency (Article 356) & Federalism',
    overrulingMagnitude: '9-Judge Overruling',
    yearOverruled: 1994,
    oldCase: {
      caseName: 'State of Rajasthan v. Union of India',
      year: 1977,
      citation: '(1977) 3 SCC 592 / AIR 1977 SC 1361',
      benchStrength: '7-Judge Constitution Bench',
      presidingJudges: 'M.H. Beg CJI, Y.V. Chandrachud, P.N. Bhagwati, P.K. Goswami, A.C. Gupta, N.L. Untwalia, S. Murtaza Fazal Ali JJ.',
      historicalContext:
        'In 1977, the newly elected Janata Party government at the Centre summarily dismissed nine Congress-ruled State Legislative Assemblies using Article 356, arguing that the ruling party had lost the mandate of the electorate in national elections.',
      theFlawedRatio:
        'Held that the satisfaction of the President under Article 356 was subjective and primarily a "political question". Courts could not question the sufficiency or basis of the material, effectively granting the Union executive carte blanche to dissolve State assemblies.',
      whyItFailed:
        'Turned Article 356 into a partisan political weapon for central governments to dissolve rival State governments, reducing federal autonomy to a hollow promise.',
      consequences:
        'Between 1950 and 1994, Article 356 was invoked over 100 times, frequently to settle political vendettas against democratically elected State chief ministers.'
    },
    newCase: {
      caseName: 'S.R. Bommai v. Union of India',
      shortName: 'S.R. Bommai',
      year: 1994,
      citation: '(1994) 3 SCC 1',
      benchStrength: '9-Judge Constitution Bench (Unanimous on core principles)',
      presidingJudges: 'P.B. Sawant, Kuldip Singh, S. Ratnavel Pandian, A.M. Ahmadi, J.S. Verma, K. Ramaswamy, S.C. Agrawal, B.P. Jeevan Reddy, S. Mohan JJ.',
      verdictDate: 'March 11, 1994',
      theSettledRatio:
        'State of Rajasthan is overruled. The Presidential proclamation under Article 356 is subject to judicial review. The Court can examine whether the material was relevant and not mala fide. Crucially: (1) The Legislative Assembly cannot be dissolved until Parliament approves the proclamation; (2) The floor of the Assembly is the ONLY forum to test majority; (3) If the proclamation is found unconstitutional, the Court has the power to restore the dismissed State Government and Assembly.',
      constitutionalArticles: ['Article 356', 'Article 355', 'Article 163', 'Article 174', 'Basic Structure: Federalism & Secularism'],
      doctrinalShift:
        'Restoration of Federalism & Floor Test Supremacy: Governors cannot evaluate ministry majorities in raj bhavans; testing confidence on the floor of the House is an absolute constitutional imperative.',
      keyTakeawayForMains:
        'Federalism and Secularism are inalienable parts of the Basic Structure. Any State policy that attacks secularism justifies dismissal under Article 356.'
    },
    linkedMainsQuestionId: 'mains-15m-sr-bommai-federalism-article-356',
    summaryTable: [
      {
        parameter: 'Judicial Review of Art 356',
        oldLaw: 'Non-justiciable political question; subjective executive satisfaction immune.',
        newLaw: 'Fully justiciable; courts examine relevancy and bona fides of material.'
      },
      {
        parameter: 'Timing of Assembly Dissolution',
        oldLaw: 'Governor could dissolve Assembly immediately upon President\'s signature.',
        newLaw: 'Assembly can only be kept under suspended animation until Parliament approves.'
      },
      {
        parameter: 'Forum for Testing Majority',
        oldLaw: 'Governor\'s subjective assessment in Raj Bhavan.',
        newLaw: 'Mandatory floor test on the floor of the Legislative Assembly.'
      }
    ]
  },
  {
    id: 'clash-ir-coelho-ninth-schedule',
    title: 'The Ninth Schedule Immunity Pierced: Basic Structure Governs All Constitutional Amendments',
    tagline: '9-Judge Constitution Bench unanimously holds that laws placed in the Ninth Schedule after April 24, 1973 are subject to judicial review.',
    topicPillar: 'Part III & Part XX: Ninth Schedule (Article 31B) vs Basic Structure Doctrine',
    overrulingMagnitude: '9-Judge Overruling',
    yearOverruled: 2007,
    oldCase: {
      caseName: 'Waman Rao v. Union of India (1981) & Shankari Prasad / Sajjan Singh',
      year: 1981,
      citation: '(1981) 2 SCC 362',
      benchStrength: '5-Judge Constitution Bench',
      presidingJudges: 'Y.V. Chandrachud CJI, P.N. Bhagwati, V.R. Krishna Iyer, V.D. Tulzapurkar, A.P. Sen JJ.',
      historicalContext:
        'Article 31B created the Ninth Schedule to insulate land reform legislation from challenges under Articles 14, 19, and 31. Over decades, Parliament abused the schedule by stuffing over 284 disparate laws (including election laws, mining laws, and reservation quotas) into it to immunize them from judicial scrutiny.',
      theFlawedRatio:
        'Waman Rao upheld Ninth Schedule protection, leaving ambiguous whether ordinary statutes placed in the Ninth Schedule by post-1973 constitutional amendments could be invalidated if they violated Part III fundamental rights.',
      whyItFailed:
        'Allowed the Legislature to bypass the Basic Structure Doctrine simply by adding ordinary statutes to the Ninth Schedule laundry basket, effectively subverting judicial review.',
      consequences:
        'Controversial laws exceeding 50% reservation quotas (e.g. Tamil Nadu 69% quota Act) were sheltered in the Ninth Schedule to escape Supreme Court scrutiny.'
    },
    newCase: {
      caseName: 'I.R. Coelho (Dead) by LRs v. State of Tamil Nadu',
      shortName: 'I.R. Coelho (9th Sched)',
      year: 2007,
      citation: '(2007) 2 SCC 1',
      benchStrength: '9-Judge Constitution Bench (Unanimous 9-0)',
      presidingJudges: 'Y.K. Sabharwal CJI, Ashok Bhan, Arijit Pasayat, B.P. Singh, S.H. Kapadia, C.K. Thakker, P.K. Balasubramanyan, Altamas Kabir, D.K. Jain JJ.',
      verdictDate: 'January 11, 2007',
      theSettledRatio:
        'All constitutional amendments and laws inserted into the Ninth Schedule on or after April 24, 1973 (date of Kesavananda Bharati) are subject to judicial review on the touchstone of the Basic Structure. The Court formulated the "Rights Test" (Direct Effect & Impact Test): if an inserted law abrogates or damages the essence of any fundamental right in the Golden Triangle (Articles 14, 19, 21), it is unconstitutional.',
      constitutionalArticles: ['Article 31B', 'Article 368', 'Article 13', 'Article 14', 'Article 19', 'Article 21'],
      doctrinalShift:
        'Dual Constitutional Test: Validating an amendment inserting a law into the 9th Schedule requires passing both the Essence of Fundamental Rights test and the Basic Structure test. No statutory black hole can exist outside judicial review.',
      keyTakeawayForMains:
        'Judicial review is a basic feature of the Constitution. Parliament cannot use its constituent amending power under Article 368 to create an untouchable legislative sanctuary.'
    },
    linkedMainsQuestionId: 'mains-15m-ir-coelho-ninth-schedule-review',
    summaryTable: [
      {
        parameter: 'Ninth Schedule Immunity Post-1973',
        oldLaw: 'Blanket constitutional shield under Article 31B.',
        newLaw: 'Subject to judicial review on the touchstone of the Basic Structure.'
      },
      {
        parameter: 'Test of Invalidation',
        oldLaw: 'Article 13 violation barred under Article 31B.',
        newLaw: '"Rights Test": Laws violating the Golden Triangle (Arts 14, 19, 21) are struck down.'
      },
      {
        parameter: 'Judicial Review Scope',
        oldLaw: 'Judiciary locked out from inspecting statutes once gazetted into 9th Schedule.',
        newLaw: 'No legislation can be placed outside the reach of judicial review.'
      }
    ]
  },
  {
    id: 'clash-bengal-immunity-united-motors',
    title: 'The First Supreme Overruling: Freedom from Own Precedent & Inter-State Trade Taxation',
    tagline: '7-Judge Constitution Bench overrules United Motors (1953), establishing that the Supreme Court is not bound by its own erroneous rulings.',
    topicPillar: 'Article 141 (Law Declared by Supreme Court) & Article 286 (Restrictions on Sales Tax)',
    overrulingMagnitude: '7-Judge Overruling',
    yearOverruled: 1955,
    oldCase: {
      caseName: 'State of Bombay v. United Motors (India) Ltd.',
      year: 1953,
      citation: '1953 SCR 1069 / AIR 1953 SC 252',
      benchStrength: '5-Judge Constitution Bench (4:1 Majority)',
      presidingJudges: 'Patanjali Sastri CJI, B.K. Mukherjea, S.R. Das, Ghulam Hasan JJ. (Majority); Vivian Bose J. (Dissenting)',
      historicalContext:
        'Bombay State levied sales tax on motor vehicles delivered inside Bombay from manufacturers outside the State. The dispute centered on whether Article 286(1)(a) explanation allowed the consuming State to tax inter-state sales.',
      theFlawedRatio:
        'Held that by legal fiction, the Explanation to Article 286(1)(a) converted an inter-state sale into an intra-state sale in the delivery State, permitting multiple States to impose cascading sales taxes on goods moving across borders.',
      whyItFailed:
        'Created commercial chaos: a merchant manufacturing in Bengal or Bihar was exposed to overlapping tax assessments and audits from half a dozen different States where goods were delivered.',
      consequences:
        'Threatened the fledgling economic unity of newly independent India, sparking immediate business disruption across inter-state commerce.'
    },
    newCase: {
      caseName: 'Bengal Immunity Co. Ltd. v. State of Bihar',
      shortName: 'Bengal Immunity',
      year: 1955,
      citation: '(1955) 2 SCR 603 / AIR 1955 SC 661',
      benchStrength: '7-Judge Constitution Bench (4:3 Majority)',
      presidingJudges: 'S.R. Das, N.H. Bhagwati, B. Jagannadhadas, Syed Jafar Imam JJ. (Majority); Vivian Bose, B.P. Sinha JJ. (Dissenting)',
      verdictDate: 'September 6, 1955',
      theSettledRatio:
        'United Motors is explicitly overruled. First: The Supreme Court of India is NOT bound by its previous decisions. Unlike the British House of Lords (London Tramways rule), the Supreme Court has the sovereign duty under Article 141 to correct its own errors when necessary for the public good. Second: No State can tax an inter-state sale under Article 286 unless Parliament specifically authorizes it by law. (This led directly to the Constitution 6th Amendment Act 1956 and the Central Sales Tax Act).',
      constitutionalArticles: ['Article 141', 'Article 286', 'Article 301', 'Seventh Schedule List I Entry 92A'],
      doctrinalShift:
        'Living Jurisprudence & Stare Decisis Limits: Stare decisis is a rule of convenience, not a constitutional straitjacket. Perpetuation of a demonstrable constitutional error is worse than the inconvenience of overruling it.',
      keyTakeawayForMains:
        'Article 141 binds all courts in India, but does NOT bind the Supreme Court itself. The Court has an inherent duty to overrule precedents that impair economic unity or fundamental rights.'
    },
    linkedMainsQuestionId: 'mains-10m-stare-decisis-article-141',
    summaryTable: [
      {
        parameter: 'Is Supreme Court Bound by Its Own Decisions?',
        oldLaw: 'Strict stare decisis borrowed from English House of Lords.',
        newLaw: 'Supreme Court can overrule its own erroneous precedents to prevent injustice.'
      },
      {
        parameter: 'Taxation of Inter-State Sales',
        oldLaw: 'Delivery State could levy sales tax via legal fiction.',
        newLaw: 'Completely barred without prior Parliamentary legislation under Article 286.'
      },
      {
        parameter: 'Economic Impact',
        oldLaw: 'Cascading multi-state tax compliance burden.',
        newLaw: 'Protection of national common market; led to Central Sales Tax Act, 1956.'
      }
    ]
  }
];
