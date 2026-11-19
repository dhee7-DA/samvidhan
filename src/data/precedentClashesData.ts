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
  overrulingMagnitude: '7-Judge Overruling' | '9-Judge Overruling' | '13-Judge Overruling' | '5-Judge Re-anchoring';
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
  }
];
