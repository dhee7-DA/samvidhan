// Constitution Bench Petitions Dataset for Chief Justice Bench Simulator
// Real-world & landmark constitutional crises where the player sits as Chief Justice of India

export interface BenchOption {
  id: string;
  label: string;
  isCorrect: boolean;
  explanation: string;
}

export interface BenchPetition {
  id: string;
  caseTitle: string;
  citation: string;
  benchSize: number;
  docketTheme: string;
  briefSummary: string;
  petitioner: string;
  petitionerArguments: string[];
  respondent: string;
  respondentArguments: string[];
  articleOptions: BenchOption[];
  precedentOptions: BenchOption[];
  doctrineOptions: BenchOption[];
  decreeOptions: {
    id: string;
    decreeText: string;
    isCorrect: boolean;
    unanimous: boolean;
    feedback: string;
    dissentingNote?: string;
    democracyDelta: number;
    ruleOfLawDelta: number;
    rightsDelta: number;
  }[];
  historicContext: string;
}

export const BENCH_PETITIONS: BenchPetition[] = [
  {
    id: 'bench-internet-blackout',
    caseTitle: 'Digital Rights Foundation & Anr. v. State of Euphoria & Ors.',
    citation: 'WP (Civil) No. 101 of 2026',
    benchSize: 5,
    docketTheme: 'Civil Liberties vs Public Order',
    briefSummary:
      'The State Home Department ordered an indefinite and blanket suspension of mobile internet and telecom services across 4 districts citing student protests and rumors of civil unrest. The ban has remained active for 68 consecutive days without publication of orders or independent review.',
    petitioner: 'Senior Advocate Ms. Arundhati Roy-Chowdhury (for Citizens & Press)',
    petitionerArguments: [
      'Freedom of speech and expression under Article 19(1)(a) explicitly includes the medium of the internet in modern democracy.',
      'Article 21 guarantees the right to profession, healthcare, and education—all brought to a standstill by blanket internet shutoff.',
      'An indefinite order without periodic review is per se disproportionate and violates the doctrine of least restrictive means.'
    ],
    respondent: 'Solicitor General of India (for State Government)',
    respondentArguments: [
      'The State possesses sovereign police powers to preserve public order and prevent imminent violence under Article 19(2).',
      'Modern digital disinformation spreads with viral velocity; surgical blocking is technically impossible during volatile mob mobilization.',
      'Judiciary should defer to the executive on ground-level intelligence assessments.'
    ],
    articleOptions: [
      {
        id: 'art-19-21',
        label: 'Article 19(1)(a) [Speech via Internet], 19(2) [Public Order], & Article 21 [Livelihood/Liberty]',
        isCorrect: true,
        explanation: 'Internet access is constitutionally protected as an integral medium of expression under Art. 19(1)(a) and livelihood under Art. 21.'
      },
      {
        id: 'art-246-sch7',
        label: 'Article 246 & Seventh Schedule List II (Public Order competence only)',
        isCorrect: false,
        explanation: 'While legislative competence exists, it does not exempt the State from Part III fundamental rights scrutiny.'
      },
      {
        id: 'art-352-emerg',
        label: 'Article 352 (Proclamation of National Emergency)',
        isCorrect: false,
        explanation: 'No National Emergency was declared under Art. 352; this is peacetime executive action under Sec 144 / Telecom Rules.'
      }
    ],
    precedentOptions: [
      {
        id: 'anuradha-bhasin',
        label: 'Anuradha Bhasin v. Union of India (2020) & Shreya Singhal (2015)',
        isCorrect: true,
        explanation: 'Anuradha Bhasin ruled that indefinite suspension of internet is illegal under Art. 19 and mandated transparency and periodic 7-day review.'
      },
      {
        id: 'ak-gopalan',
        label: 'A.K. Gopalan v. State of Madras (1950)',
        isCorrect: false,
        explanation: 'Gopalan held Art. 19 and 21 are mutually exclusive silos—an outdated doctrine explicitly overruled by Maneka Gandhi.'
      },
      {
        id: 'adm-jabalpur',
        label: 'ADM Jabalpur v. Shivkant Shukla (1976)',
        isCorrect: false,
        explanation: 'ADM Jabalpur held fundamental rights can be extinguished by state necessity—long since overruled by Puttaswamy as a dark chapter.'
      }
    ],
    doctrineOptions: [
      {
        id: 'proportionality-test',
        label: 'Four-Pronged Proportionality Test (Legitimate Aim, Suitability, Necessity, Balancing)',
        isCorrect: true,
        explanation: 'The modern standard for testing restrictions on fundamental rights formulated in Modern Dental College and Puttaswamy.'
      },
      {
        id: 'doctrine-of-eclipse',
        label: 'Doctrine of Eclipse (Pre-constitutional shadow laws)',
        isCorrect: false,
        explanation: 'Eclipse deals with pre-1950 statutes overshadowed by fundamental rights, not contemporary telecom orders.'
      },
      {
        id: 'pith-and-substance',
        label: 'Doctrine of Pith and Substance',
        isCorrect: false,
        explanation: 'Pith and Substance resolves federal legislative overlaps between Union and State lists, not civil liberties violations.'
      }
    ],
    decreeOptions: [
      {
        id: 'decree-proportionality',
        decreeText:
          'ISSUE WRIT OF MANDAMUS: Quash the indefinite shutdown. Declare internet access an integral conduit of Art. 19(1)(a) & 21. Any suspension must satisfy the 4-prong Proportionality Test, cannot be indefinite, must be published openly, and must undergo mandatory Review Committee scrutiny every 7 working days.',
        isCorrect: true,
        unanimous: true,
        feedback: 'Magnificent juristic ruling! You faithfully applied Anuradha Bhasin and Puttaswamy, safeguarding democratic rights while balancing security.',
        democracyDelta: 25,
        ruleOfLawDelta: 30,
        rightsDelta: 35
      },
      {
        id: 'decree-blanket-uphold',
        decreeText:
          'DISMISS PETITION: Defer completely to executive discretion. The State is best positioned to judge public order and internet may remain shut down until peace is restored.',
        isCorrect: false,
        unanimous: false,
        feedback: 'Executive deference without proportionality eviscerates fundamental rights.',
        dissentingNote: 'Justice H.R. Khanna Dissent: "Liberty cannot be preserved if courts abdicate judicial review to executive fiat whenever public order is invoked!"',
        democracyDelta: -20,
        ruleOfLawDelta: -25,
        rightsDelta: -30
      }
    ],
    historicContext: 'Grounded in Anuradha Bhasin v. Union of India (2020) 3 SCC 637 and Internet Freedom Foundation jurisprudence.'
  },
  {
    id: 'bench-basic-structure',
    caseTitle: 'Supreme Court Advocates-on-Record v. Union of India (NJAC Re-Enactment Challenge)',
    citation: 'WP (Civil) No. 204 of 2026',
    benchSize: 5,
    docketTheme: 'Separation of Powers & Judicial Independence',
    briefSummary:
      'Parliament unanimously passed the Constitution (107th Amendment) Act, inserting Article 124D to replace the Collegium system with an Executive-dominated Commission where 2 political nominees hold a binding veto over all Supreme Court and High Court judicial appointments, barring judicial review of all judicial transfers.',
    petitioner: 'Senior Advocate Mr. Fali S. Nariman Memorial Bar (for Petitioners)',
    petitionerArguments: [
      'Independence of the judiciary is an unalterable foundational pillar forming part of the Basic Structure of the Constitution.',
      'Conferring an absolute executive veto over judge selection violates the doctrine of Separation of Powers under Article 50.',
      'Article 368 gives constituent power to amend, but not the power to damage or emasculate foundational checks and balances.'
    ],
    respondent: 'Attorney General for India (for Union of India)',
    respondentArguments: [
      'Parliament represents the sovereign democratic will of 1.4 billion citizens; judges cannot appoint fellow judges in an opaque club.',
      'Article 368 contains no explicit textual limitation restricting parliamentary amending power.',
      'Executive participation brings transparency, broad representation, and public accountability to the bench.'
    ],
    articleOptions: [
      {
        id: 'art-368-124-50',
        label: 'Article 368 [Amending Power], Article 124 [Judicial Appointments], & Article 50 [Separation of Powers]',
        isCorrect: true,
        explanation: 'The clash between parliamentary amending power and judicial independence as a basic feature.'
      },
      {
        id: 'art-14-tax',
        label: 'Article 265 [Taxes not to be imposed save by authority of law]',
        isCorrect: false,
        explanation: 'Taxation powers have no relevance to the constitutional appointment of superior judges.'
      },
      {
        id: 'art-311-serv',
        label: 'Article 311 [Civilian Public Service Protections]',
        isCorrect: false,
        explanation: 'Article 311 governs ordinary civil servants, not constitutional judges under Chapter IV Part V.'
      }
    ],
    precedentOptions: [
      {
        id: 'kesavananda-njac',
        label: 'Kesavananda Bharati (1973), Minerva Mills (1980), & Supreme Court AOR (NJAC 2015)',
        isCorrect: true,
        explanation: 'These landmark decisions established that Parliament cannot alter the Basic Structure, and judicial primacy in appointments preserves judicial independence.'
      },
      {
        id: 'shankari-prasad',
        label: 'Shankari Prasad v. Union of India (1951)',
        isCorrect: false,
        explanation: 'Shankari Prasad held Parliament can amend even Fundamental Rights without limits—an approach rejected since 1973.'
      },
      {
        id: 'berubari-case',
        label: 'In re Berubari Union (1960)',
        isCorrect: false,
        explanation: 'Berubari concerned boundary treaties and cession of territory, not judicial appointments.'
      }
    ],
    doctrineOptions: [
      {
        id: 'basic-structure-doc',
        label: 'Basic Structure Doctrine (Dietrich Conrad / Palkhivala / Kesavananda)',
        isCorrect: true,
        explanation: 'Limits constituent power from abolishing core features like Judicial Independence and Separation of Powers.'
      },
      {
        id: 'doctrine-colorable',
        label: 'Doctrine of Colorable Legislation alone',
        isCorrect: false,
        explanation: 'Colorable legislation tests legislative competence under Seventh Schedule, not constitutional amendments under Art. 368.'
      },
      {
        id: 'doctrine-severability',
        label: 'Territorial Nexus Doctrine',
        isCorrect: false,
        explanation: 'Territorial nexus tests whether state laws have extraterritorial connections.'
      }
    ],
    decreeOptions: [
      {
        id: 'decree-strike-down-njac',
        decreeText:
          'STRIKE DOWN ARTICLE 124D AS ULTRA VIRES: Declare that Judicial Independence is an inviolable basic feature of the Constitution. Executive veto power over judge selection destroys the institutional independence of the judiciary and violates Article 50 & 368. Strike down the amendment in its entirety.',
        isCorrect: true,
        unanimous: true,
        feedback: 'Masterful constitutional judgment upholding Kesavananda Bharati and the inviolability of Judicial Independence!',
        democracyDelta: 30,
        ruleOfLawDelta: 35,
        rightsDelta: 25
      },
      {
        id: 'decree-uphold-amendment',
        decreeText:
          'UPHOLD AMENDMENT: Hold that Parliament holds absolute constituent sovereignty under Article 368 and judges cannot invalidate a constitutional amendment passed by unanimous vote.',
        isCorrect: false,
        unanimous: false,
        feedback: 'Surrendering the Basic Structure leaves the Constitution vulnerable to total dismantlement.',
        dissentingNote: 'Justice Fazl Ali / Khanna Dissent: "The Constitution is the supreme law, not Parliament. Without judicial review, the fundamental rights of citizens are mere ropes of sand!"',
        democracyDelta: -30,
        ruleOfLawDelta: -35,
        rightsDelta: -25
      }
    ],
    historicContext: 'Grounded in Kesavananda Bharati (1973) 4 SCC 225 and Supreme Court Advocates-on-Record Association (NJAC) (2016) 5 SCC 1.'
  },
  {
    id: 'bench-governor-veto',
    caseTitle: 'State Legislative Assembly of Punjab & Anr. v. Governor of the State',
    citation: 'Special Reference No. 05 of 2026',
    benchSize: 5,
    docketTheme: 'Federalism & Legislative Autonomy',
    briefSummary:
      'The Governor of a State has sat upon 12 Bills passed by the democratically elected State Legislative Assembly for over 22 months, neither granting assent, nor reserving them for the President, nor returning them with messages under Article 200, effectively paralyzing state governance.',
    petitioner: 'Senior Counsel for the State of Punjab & Speaker of the Assembly',
    petitionerArguments: [
      'Under the scheme of Article 200, the Governor is not a super-legislature with an indefinite "pocket veto".',
      'The phrase "as soon as possible" in the first proviso to Article 200 requires swift return of non-Money Bills.',
      'Constitutional morality and parliamentary democracy mean the Governor, as a nominal constitutional head, must act on the aid and advice of the Council of Ministers.'
    ],
    respondent: 'Senior Counsel for the Office of the Governor',
    respondentArguments: [
      'Article 200 prescribes no fixed calendar deadline (e.g. 30 days) for the Governor to act.',
      'Article 361 provides absolute personal immunity: the Governor is not answerable to any court for the exercise of powers and duties of office.',
      'The Governor must apply independent mind to check unconstitutional state legislation before giving assent.'
    ],
    articleOptions: [
      {
        id: 'art-200-163-361',
        label: 'Article 200 [Assent to Bills], Article 163 [Council of Ministers], & Article 361 [Gubernatorial Immunity]',
        isCorrect: true,
        explanation: 'Article 200 defines the Governor\'s 3 constitutional courses of action upon receiving a bill passed by the state legislature.'
      },
      {
        id: 'art-356-emergency',
        label: 'Article 356 [Failure of Constitutional Machinery in States]',
        isCorrect: false,
        explanation: 'President\'s rule under Art. 356 was not imposed; the issue is active pocket vetoing of ordinary bills.'
      },
      {
        id: 'art-280-finance',
        label: 'Article 280 [Finance Commission]',
        isCorrect: false,
        explanation: 'Article 280 concerns federal tax devolution, not gubernatorial assent.'
      }
    ],
    precedentOptions: [
      {
        id: 'punjab-governor-shamsher',
        label: 'State of Punjab v. Principal Secretary to Governor (2023) & Shamsher Singh (1974)',
        isCorrect: true,
        explanation: 'CJ D.Y. Chandrachud ruled in 2023 that Governors cannot sit on bills indefinitely to derail state legislatures; Shamsher Singh established Governor is a constitutional figurehead.'
      },
      {
        id: 'sr-bommai',
        label: 'S.R. Bommai v. Union of India (1994)',
        isCorrect: false,
        explanation: 'Bommai established judicial review over Art. 356 proclamations, not Art. 200 bill assents.'
      },
      {
        id: 'nabam-rebia',
        label: 'Minerva Mills v. Union of India (1980)',
        isCorrect: false,
        explanation: 'Minerva Mills concerned Art. 31C and Basic Structure, not gubernatorial assent timelines.'
      }
    ],
    doctrineOptions: [
      {
        id: 'doc-constitutional-morality',
        label: 'Constitutional Morality & Cabinet Form of Government (Westminster Parliamentary Scheme)',
        isCorrect: true,
        explanation: 'In a parliamentary democracy, the unelected Governor cannot nullify laws enacted by elected representatives through inaction.'
      },
      {
        id: 'doc-pith-substance',
        label: 'Doctrine of Pith and Substance',
        isCorrect: false,
        explanation: 'The validity of the bills\' subject matter is not the issue—the inaction of the Governor is.'
      },
      {
        id: 'doc-res-judicata',
        label: 'Doctrine of Res Judicata',
        isCorrect: false,
        explanation: 'Procedural estoppel between parties has no role here.'
      }
    ],
    decreeOptions: [
      {
        id: 'decree-direct-governor',
        decreeText:
          'ISSUE CONSTITUTIONAL DECLARATION: Hold that Governors cannot exercise an open-ended pocket veto. Under Article 200, if a Governor decides to withhold assent, they MUST return the Bill "as soon as possible" with a message. Inaction subverts parliamentary democracy. Direct the Governor to dispose of the pending Bills within 4 weeks.',
        isCorrect: true,
        unanimous: true,
        feedback: 'Splendid decision! Enforces the binding ratio of the 2023 Punjab Governor judgment and protects federal democracy.',
        democracyDelta: 30,
        ruleOfLawDelta: 25,
        rightsDelta: 20
      },
      {
        id: 'decree-dismiss-governor',
        decreeText:
          'DISMISS PETITION: Hold that Article 361 completely bars the judiciary from enquiring into gubernatorial inaction, leaving the Governor with unrestricted discretionary time.',
        isCorrect: false,
        unanimous: false,
        feedback: 'Immunity under Art. 361 does not prevent the Court from examining the constitutionality of inaction that paralyzes the legislature.',
        dissentingNote: 'Judicial Dissent: "To allow an unelected nominee to paralyze a state assembly transforms constitutional democracy into gubernatorial hegemony."',
        democracyDelta: -30,
        ruleOfLawDelta: -25,
        rightsDelta: -20
      }
    ],
    historicContext: 'Grounded in State of Punjab v. Principal Secretary to Governor of Punjab (2023) SCC OnLine SC 1571.'
  },
  {
    id: 'bench-biometric-transit',
    caseTitle: 'Citizens For Privacy & Anr. v. Union of India & Airport Authority',
    citation: 'WP (Civil) No. 312 of 2026',
    benchSize: 5,
    docketTheme: 'Right to Privacy & Digital Surveillance',
    briefSummary:
      'The Ministry of Civil Aviation issued an executive circular making continuous facial recognition and biometric profiling mandatory for boarding all domestic flights and accessing railway platforms. No statutory act was enacted by Parliament, and biometric data is shared with private vendor cloud servers for 3 years.',
    petitioner: 'Senior Advocate Mr. Gopal Sankaranarayanan (for Privacy Advocates)',
    petitionerArguments: [
      'The 9-judge bench in Puttaswamy held that Informational Privacy and Bodily Autonomy are fundamental rights under Article 21.',
      'Any restriction on privacy requires a statutory law passed by legislature—an executive circular fails the first test of legality.',
      'Storing biometric data with commercial third-party vendors for 3 years fails data minimization and proportionality.'
    ],
    respondent: 'Additional Solicitor General of India (for Ministry)',
    respondentArguments: [
      'Aviation and railway security are critical sovereign security concerns requiring swift contactless threat identification.',
      'Travelers surrender minor expectations of privacy when entering high-security transport zones.',
      'The scheme is technically efficient, reducing boarding queues from 45 minutes to 5 minutes.'
    ],
    articleOptions: [
      {
        id: 'art-21-14-19',
        label: 'Article 21 [Informational Privacy & Bodily Integrity] & Article 14 [Arbitrariness]',
        isCorrect: true,
        explanation: 'Mandatory biometric collection directly implicates informational privacy and bodily autonomy under Article 21.'
      },
      {
        id: 'art-301-trade',
        label: 'Article 301 [Freedom of Trade and Intercourse]',
        isCorrect: false,
        explanation: 'Interstate trade provisions do not address personal biometric surveillance.'
      },
      {
        id: 'art-312-services',
        label: 'Article 312 [All-India Services]',
        isCorrect: false,
        explanation: 'All-India Services have no application to airport passenger biometric scanning.'
      }
    ],
    precedentOptions: [
      {
        id: 'puttaswamy-aadhaar',
        label: 'Justice K.S. Puttaswamy (Privacy-9J, 2017) & Aadhaar (5J, 2018)',
        isCorrect: true,
        explanation: 'Established the 3-fold requirement for privacy infringements: Legality (statutory law), Legitimate State Aim, and Proportionality with Data Minimization.'
      },
      {
        id: 'mp-sharma',
        label: 'M.P. Sharma v. Satish Chandra (1954)',
        isCorrect: false,
        explanation: 'M.P. Sharma ruled there was no fundamental right to privacy in the Indian Constitution—expressly overruled in 2017.'
      },
      {
        id: 'kharak-singh',
        label: 'Kharak Singh v. State of U.P. (1963) Majority Opinion',
        isCorrect: false,
        explanation: 'The majority in Kharak Singh denied privacy rights; Subba Rao J.\'s dissent became law in Puttaswamy.'
      }
    ],
    doctrineOptions: [
      {
        id: 'doc-puttaswamy-triple-test',
        label: 'Puttaswamy Triple Test: Legality (Statute), Legitimate Aim, & Proportionality (Data Minimization)',
        isCorrect: true,
        explanation: 'Executive notifications cannot abridge Article 21 without primary legislative authorization and safeguards.'
      },
      {
        id: 'doc-severability',
        label: 'Doctrine of Severability',
        isCorrect: false,
        explanation: 'Severability removes invalid clauses from statutes, but here there is no statute at all.'
      },
      {
        id: 'doc-ancillary-powers',
        label: 'Doctrine of Ancillary Powers',
        isCorrect: false,
        explanation: 'Ancillary powers govern legislative list interpretations, not fundamental rights limitations.'
      }
    ],
    decreeOptions: [
      {
        id: 'decree-quash-facial-recog',
        decreeText:
          'QUASH EXECUTIVE CIRCULAR: Hold that any compulsory biometric surveillance abridges Article 21 and must fail without an explicit statutory Act enacted by Parliament. Even for security, data retention with private vendors without strict minimization violates Proportionality. Make facial recognition strictly voluntary with valid alternative ID.',
        isCorrect: true,
        unanimous: true,
        feedback: 'Flawless judicial reasoning upholding the historic Puttaswamy privacy doctrine!',
        democracyDelta: 20,
        ruleOfLawDelta: 30,
        rightsDelta: 35
      },
      {
        id: 'decree-uphold-efficiency',
        decreeText:
          'UPHOLD CIRCULAR: Hold that convenience, queue reduction, and transport security override abstract privacy concerns in transit hubs.',
        isCorrect: false,
        unanimous: false,
        feedback: 'Administrative convenience can never justify bypassing the Article 21 statutory law requirement.',
        dissentingNote: 'Justice Chandrachud / Chelameswar Dissent: "Privacy is not a luxury or an elitist construct. Administrative speed cannot eclipse constitutional liberty!"',
        democracyDelta: -15,
        ruleOfLawDelta: -25,
        rightsDelta: -35
      }
    ],
    historicContext: 'Grounded in Justice K.S. Puttaswamy v. Union of India (2017) 10 SCC 1.'
  }
];
