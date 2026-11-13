import type { ArticleItem } from '../types/constitution';

export const PART_14_SERVICES_EXPANDED: ArticleItem[] = [
  // CHAPTER I: SERVICES
  {
    number: '309',
    title: 'Recruitment & Conditions of Service of Public Servants',
    summary: 'Empowers Parliament and State Legislatures to regulate the recruitment and conditions of service of public servants, authorizing the President and Governors to frame service rules until legislative acts are enacted.',
    plainEnglish: 'The rules governing how civil servants, police officers, and government employees are hired, promoted, and retired are set by law or by administrative service rules issued by the President or Governor.',
    textSnippet: 'Subject to the provisions of this Constitution, Acts of the appropriate Legislature may regulate the recruitment, and conditions of service of persons appointed, to public services and posts.',
    realWorldScenario: 'Pending enactment of a new comprehensive State Civil Services Act, the Governor frames the Jammu & Kashmir Prosecuting Officer Service Rules under the proviso to Article 309. These rules govern exam eligibility, probation, seniority, and promotion rosters.',
    prosecutionNote: 'Prosecution service rules (e.g., qualifying law degree, age limits, qualifying service) framed under the Article 309 proviso carry statutory force and can only be challenged if they violate Articles 14, 16, or 21.',
    clauses: [
      {
        clause: 'Plenary Legislative Authority',
        explanation: 'The Legislature has primary authority to regulate public employment conditions through Acts of Parliament or State Assemblies.',
        example: 'All India Services Act, 1951.'
      },
      {
        clause: 'Article 309 Proviso (President/Governor Rulemaking Power)',
        explanation: 'Enables the Executive to frame binding statutory service rules having the force of law until legislative enactments are made.',
        example: 'Central Civil Services (Classification, Control and Appeal) Rules.'
      }
    ],
    exceptions: ['Rules framed under Article 309 must be "subject to the provisions of this Constitution" and cannot violate Fundamental Rights (Arts 14, 16).'],
    landmarkCases: [
      {
        caseName: 'B.S. Vadera v. Union of India',
        year: 1969,
        bench: 'Constitution Bench',
        summary: 'Vaidialingam J held that rules framed by the President under the proviso to Article 309 have full statutory effect and can operate retrospectively, provided they do not violate Part III rights.',
        significance: 'Established the statutory character of Article 309 service rules.'
      },
      {
        caseName: 'State of Karnataka v. Umadevi (3)',
        year: 2006,
        bench: '5-Judge Bench',
        summary: 'Held that public employment must strictly conform to Article 309 rules and constitutional mandates of Articles 14 and 16; regularizing backdoor, contractual, or ad-hoc appointments without open competitive selection is illegal.',
        significance: 'Ended arbitrary regularization of public service appointments.'
      }
    ],
    doctrineLinks: ['Merit-Based Public Employment', 'Statutory Rulemaking Competence']
  },
  {
    number: '310',
    title: 'Tenure of Office & The Doctrine of Pleasure',
    summary: 'Codifies the historic British Doctrine of Pleasure: Public servants hold office during the pleasure of the President (Union) or Governor (State), subject to the overriding constitutional safeguards of Article 311.',
    plainEnglish: 'In theory, all civil and military officers serve at the pleasure of the head of state. However, unlike British monarchs who could sack anyone on a whim, the Indian Constitution strictly hedges this pleasure with Article 311 safeguards.',
    textSnippet: 'Every person who is a member of a defence service or of a civil service... holds office during the pleasure of the President or the Governor.',
    realWorldScenario: 'Can a Chief Minister immediately sack a public prosecutor or police officer without issuing a chargesheet merely because the officer refused to withdraw a criminal prosecution against a politician? No! While tenure is formally during pleasure under Article 310, that pleasure is strictly hedged and curtailed by the mandatory protections of Article 311.',
    prosecutionNote: 'The pleasure of the President or Governor is an executive function exercised solely on cabinet advice under Article 74 or 163, not personal discretion.',
    clauses: [
      {
        clause: '310(1) Sovereign Pleasure Framework',
        explanation: 'Every member of the defense services, civil services, or All-India Services holds office during the pleasure of the constitutional head of state.',
        example: 'Defense personnel (Army, Navy, Air Force) serving under Presidential commission.'
      },
      {
        clause: '310(2) Compensation for Premature Termination',
        explanation: 'Authorizes compensation in special contract appointments where the post is abolished before expiry of the agreed term.',
        example: 'Contractual technical advisors terminated before contract conclusion.'
      }
    ],
    exceptions: ['Judges of Supreme Court (Art 124), High Courts (Art 217), CAG (Art 148), and CEC (Art 324) are completely exempt from the Doctrine of Pleasure and can only be removed via parliamentary impeachment.'],
    landmarkCases: [
      {
        caseName: 'State of Bihar v. Abdul Majid',
        year: 1954,
        bench: '5-Judge Bench',
        summary: 'Mahajan CJ held that the rule of English law that a civil servant cannot sue the Crown for arrears of salary has no application in India; Indian civil servants can sue the government for unpaid salary.',
        significance: 'Departed from the absolute feudal British Crown pleasure doctrine.'
      },
      {
        caseName: 'Union of India v. Tulsiram Patel',
        year: 1985,
        bench: '5-Judge Bench',
        summary: 'Madon J authoritatively analyzed the interaction between Article 310 and Article 311, holding that Article 311 operates as a constitutional proviso and restriction on the Doctrine of Pleasure.',
        significance: 'Harmonized sovereign pleasure with public service security.'
      }
    ],
    doctrineLinks: ['Doctrine of Pleasure', 'Constitutional Provisos']
  },
  {
    number: '311',
    title: 'Dismissal, Removal & Reduction in Rank (The Twin Civil Service Shields)',
    summary: 'The cornerstone protective shield of Indian civil servants: Bars dismissal by an authority subordinate to the appointing authority, mandates a formal departmental inquiry with reasonable opportunity of defense, and specifies three strictly guarded exceptions.',
    plainEnglish: 'A government servant cannot be dismissed or demoted by an officer junior to the one who appointed them, and cannot be sacked without a fair departmental inquiry where they can examine evidence and defend themselves, except in 3 rare cases (criminal conviction, extreme impracticability, or national security).',
    textSnippet: 'No person who is a member of a civil service... shall be dismissed or removed by an authority subordinate to that by which he was appointed... and no such person shall be dismissed or removed or reduced in rank except after an inquiry in which he has been informed of the charges against him and given a reasonable opportunity of being heard.',
    realWorldScenario: 'A sub-inspector of police is appointed by the Deputy Inspector General (DIG). The Superintendent of Police (SP), who is subordinate to the DIG, issues an order dismissing the sub-inspector after a corruption allegation. Is the dismissal valid? No! Under Article 311(1), dismissal by an authority subordinate to the appointing authority is illegal and void ab initio.',
    prosecutionNote: 'A critical intersection between criminal law and service law: Under Article 311(2) Proviso (a), once a public servant is convicted on a criminal charge by a court of law, the disciplinary authority can dismiss them immediately without conducting any departmental inquiry!',
    clauses: [
      {
        clause: '311(1) Appointing Authority Shield',
        explanation: 'No civil servant can be dismissed or removed by any authority subordinate in rank to the authority that appointed them.',
        example: 'A government officer appointed by the Governor cannot be dismissed by a District Collector.'
      },
      {
        clause: '311(2) Reasonable Opportunity of Defense (Inquiry)',
        explanation: 'Mandates a departmental inquiry where the employee is provided written charges, access to documents, and right to cross-examine witnesses.',
        example: 'Conducting a formal departmental disciplinary proceeding under CCS (CCA) Rules.'
      },
      {
        clause: '311(2) Proviso (a): Criminal Conviction Exemption',
        explanation: 'No inquiry required where an officer is dismissed on the ground of conduct which led to their conviction on a criminal charge by a competent court.',
        example: 'Immediate summary dismissal of a government servant upon conviction for bribery under PC Act.'
      },
      {
        clause: '311(2) Proviso (b): Impracticability Exemption',
        explanation: 'Inquiry dispensed with where the disciplinary authority records reasons in writing showing it is not reasonably practicable to hold an inquiry (e.g. witnesses terrorized).',
        example: 'Dismissing an organized crime-linked official whose associates threaten witnesses.'
      },
      {
        clause: '311(2) Proviso (c): National Security Exemption',
        explanation: 'Inquiry dispensed with where the President or Governor is satisfied that in the interest of the security of the State it is not expedient to hold an inquiry.',
        example: 'Sacking an intelligence officer or border security official found leaking military secrets to a foreign power.'
      }
    ],
    exceptions: ['Applies strictly to civil posts; defense personnel, military officers, and casual/contractual workers are excluded from Article 311 protections.'],
    landmarkCases: [
      {
        caseName: 'Union of India v. Tulsiram Patel',
        year: 1985,
        bench: '5-Judge Bench',
        summary: 'Madon J settled the law on the three exceptions to Article 311(2): Ruled that dispensing with inquiry under Provisos (a), (b), and (c) does not violate natural justice; reasons recorded under Proviso (b) must be genuine and are subject to judicial review.',
        significance: 'The definitive textbook authority on Article 311 disciplinary dismissals.'
      },
      {
        caseName: 'Managing Director, ECIL v. B. Karunakar',
        year: 1993,
        bench: 'Constitution Bench',
        summary: 'Held that the delinquent employee is entitled to receive a copy of the Inquiry Officer\'s inquiry report and submit representation before the disciplinary authority passes the final punishment order.',
        significance: 'Made supplying inquiry report a mandatory element of reasonable opportunity.'
      }
    ],
    doctrineLinks: ['Twin Shields of Civil Services', 'Natural Justice in Administrative Action', 'Criminal Conviction Summary Dismissal']
  },
  {
    number: '312',
    title: 'All-India Services (IAS, IPS & IFS)',
    summary: 'Empowers Parliament to create new All-India Services common to both the Union and the States, conditional upon the Council of States (Rajya Sabha) passing a resolution supported by at least two-thirds of members present and voting.',
    plainEnglish: 'The federal mechanism for the elite civil services (IAS, IPS, Indian Forest Service). A new All-India Service can only be created if the Rajya Sabha (representing the States) passes a 2/3 resolution giving permission.',
    textSnippet: 'If the Council of States has declared by resolution supported by not less than two-thirds of the members present and voting that it is necessary... Parliament may by law provide for the creation of one or more all-India services common to the Union and the States.',
    realWorldScenario: 'To improve judicial administration across the nation, proposals have been mooted to create an All-India Judicial Service (AIJS) under Article 312. If the Rajya Sabha passes a 2/3 resolution, Parliament can enact an Act creating the service, though state judicial independence concerns have sparked debate.',
    prosecutionNote: 'Officers of the Indian Police Service (IPS) holding top posts (DGP, IGP, SSP) are members of an All-India Service whose cadre management is shared between the State Government and the Union Home Ministry.',
    clauses: [
      {
        clause: '312(1) Federal Origin Rule',
        explanation: 'Unique Rajya Sabha federal veto: Central government cannot unilaterally create a new All-India Service without state consensus reflected in a 2/3 Rajya Sabha resolution.',
        example: 'Creation of the Indian Forest Service (IFS) in 1966.'
      },
      {
        clause: '312(2) Existing Services Recognition',
        explanation: 'Deemed the Indian Administrative Service (IAS) and Indian Police Service (IPS) as services created under this Article at the commencement of the Constitution.',
        example: 'Constitutional continuity of Sardar Patel’s "steel frame".'
      },
      {
        clause: '312(3) All-India Judicial Service (AIJS) Proviso',
        explanation: 'Added by the 42nd Amendment: AIJS cannot include any post inferior to that of a District Judge (Art 233).',
        example: 'Constitutional safeguard protecting subordinate magistrate appointments.'
      }
    ],
    exceptions: ['All-India Services are common to both Union and States, but disciplinary actions involving dismissal/removal can only be executed by the Central Government (appointing authority).'],
    landmarkCases: [
      {
        caseName: 'D.S. Garewal v. State of Punjab',
        year: 1959,
        bench: 'Constitution Bench',
        summary: 'Upheld the constitutional validity of the All-India Services Act, 1951, ruling that delegating rulemaking authority to the Central Government to frame service regulations was constitutional.',
        significance: 'Validated the statutory and administrative structure of All-India Services.'
      }
    ],
    doctrineLinks: ['Steel Frame of Indian Administration', 'Federal Service Dual-Control']
  },

  // CHAPTER II: PUBLIC SERVICE COMMISSIONS
  {
    number: '315',
    title: 'Public Service Commissions for the Union & States (UPSC & State PSCs)',
    summary: 'Mandates an independent constitutional Public Service Commission for the Union (UPSC) and for each State (such as the Jammu and Kashmir Public Service Commission - JKPSC), or a Joint Commission for two or more states.',
    plainEnglish: 'The independent constitutional watchdog agencies that conduct competitive examinations and select candidates for civil services, police, and prosecutorial posts on pure merit without political favoritism.',
    textSnippet: 'There shall be a Public Service Commission for the Union and a Public Service Commission for each State.',
    realWorldScenario: 'The Jammu and Kashmir Public Service Commission (JKPSC) conducts the competitive examination for the recruitment of Prosecuting Officers (PO) and civil service officers under Article 315(1), functioning as an autonomous constitutional body shielded from executive interference.',
    prosecutionNote: 'The selection process for Prosecuting Officers conducted by the State Public Service Commission cannot be bypassed by backdoor ad-hoc appointments; recruitment rules must strictly follow Article 315.',
    clauses: [
      {
        clause: '315(1) Mandatory Independent Commission',
        explanation: 'Permanent constitutional body for meritocratic examination and recruitment.',
        example: 'Union Public Service Commission (UPSC) and JKPSC.'
      },
      {
        clause: '315(2) Joint Public Service Commission (JSPSC)',
        explanation: 'Two or more states may agree that one Joint Commission shall serve their recruitment needs, enacted by Parliamentary statute.',
        example: 'Inter-state joint civil service recruitment bodies.'
      }
    ],
    exceptions: ['The Governor of a State may request the UPSC to serve all or any of the needs of the State with the approval of the President (Art 315(4)).'],
    landmarkCases: [
      {
        caseName: 'State of U.P. v. Manbodhan Lal Srivastava',
        year: 1957,
        bench: 'Constitution Bench',
        summary: 'Held that Public Service Commissions are independent constitutional advisory bodies whose advice should not be arbitrarily discarded without recording cogent reasons.',
        significance: 'Established the high constitutional weight of PSC recommendations.'
      }
    ],
    doctrineLinks: ['Constitutional Independence of Watchdog Bodies', 'Meritocratic Public Selection']
  },
  {
    number: '320',
    title: 'Functions of Public Service Commissions',
    summary: 'Enumerates the constitutional duties of Public Service Commissions: conducting examinations for appointments, and mandatory consultation on recruitment methods, promotions, transfers, and disciplinary actions against public servants.',
    plainEnglish: 'The PSC conducts exams and interviews. The government is constitutionally required to consult the PSC on service rules, promotions, and major disciplinary penalties (dismissal or demotion) against officers.',
    textSnippet: 'It shall be the duty of the Union and the State Public Service Commissions to conduct examinations for appointments to the services of the Union and the services of the State.',
    realWorldScenario: 'A senior civil servant or police officer faces a major penalty of compulsory retirement. Before passing the final punishment order, the State Government must forward the entire inquiry record to the State Public Service Commission for its advice under Article 320(3)(c).',
    prosecutionNote: 'While consultation with the PSC under Article 320(3)(c) is mandatory, the advice tendered by the PSC is advisory and not legally binding on the government, though non-acceptance requires recording reasons tabled before the Legislature.',
    clauses: [
      {
        clause: '320(1) Competitive Examinations Mandate',
        explanation: 'Conducting competitive written exams, interviews, and physical standards tests for public recruitment.',
        example: 'JKPSC Prosecuting Officer (PO) Prelims and Mains examinations.'
      },
      {
        clause: '320(3) Mandatory Consultation Topics',
        explanation: 'Consultation on (a) recruitment methods; (b) suitability for promotion/transfer; (c) disciplinary matters affecting an employee; (d) claims for reimbursement of legal defense costs.',
        example: 'Seeking UPSC/SPSC advice on major departmental penalty proposals.'
      }
    ],
    exceptions: ['The President or Governor may make regulations specifying matters in which it shall not be necessary for a Public Service Commission to be consulted.'],
    landmarkCases: [
      {
        caseName: 'State of U.P. v. Manbodhan Lal Srivastava',
        year: 1957,
        bench: 'Constitution Bench',
        summary: 'Held that the word "shall" in Article 320(3) is directory and not mandatory in the sense that failure to consult the PSC does not render a government disciplinary order null and void, though consultation is a constitutional duty.',
        significance: 'Clarified the legal effect of non-consultation with the Public Service Commission.'
      }
    ],
    doctrineLinks: ['Consultative Procedural Safeguards', 'Advisory Constitutional Function']
  }
];
