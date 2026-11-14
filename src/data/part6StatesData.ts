import type { ArticleItem } from '../types/constitution';

export const PART_6_STATES_EXPANDED: ArticleItem[] = [
  // CHAPTER II: THE STATE EXECUTIVE
  {
    number: '153',
    title: 'Governors of States (7th Amendment Dual-State Office)',
    summary: 'Mandates a Governor for each State, enabling one person to be appointed Governor for two or more States under the 7th Constitutional Amendment, 1956.',
    plainEnglish: 'Every State has a Governor as its constitutional head. One Governor can simultaneously serve two or more States (e.g. Punjab and Haryana).',
    textSnippet: 'There shall be a Governor for each State: Provided that nothing in this article shall prevent the appointment of the same person as Governor for two or more States.',
    realWorldScenario: 'During a vacancy in a neighboring state, the President appoints the Governor of Assam to also discharge the functions of the Governor of Nagaland. This is constitutionally authorized by the 7th Amendment proviso to Article 153.',
    prosecutionNote: 'All executive actions of the State Government are expressed to be taken in the name of the Governor under Article 166, including prosecution sanction orders under Section 218 BNSS (former 197 CrPC).',
    clauses: [
      {
        clause: 'Constitutional Head of the State',
        explanation: 'Analogous to the President at the Centre. Represents the federal bond between Union and State while acting as titular head of the State Government.',
        example: 'Delivering the annual address to the joint session of the State Legislature.'
      }
    ],
    exceptions: ['Governor is not an employee of the Central Government; it is an independent constitutional office (Hargovind Pant).'],
    landmarkCases: [
      {
        caseName: 'Hargovind Pant v. Dr. Raghukul Tilak',
        year: 1979,
        bench: 'Constitution Bench',
        summary: 'Held that the office of the Governor is not an employment under the Government of India; it is an independent constitutional office not subordinate to or subservient to the Centre.',
        significance: 'Affirmed the independent constitutional status of the Governor.'
      }
    ],
    doctrineLinks: ['Constitutional Head of State', 'Dual-State Gubernatorial Proviso']
  },
  {
    number: '156',
    title: 'Term of Office of Governor & Doctrine of Pleasure',
    summary: 'The Governor holds office during the pleasure of the President (subject to a normal 5-year term). Landmark ruling in B.P. Singhal limits arbitrary dismissal upon regime change.',
    plainEnglish: 'The Governor serves a 5-year term, but can be removed earlier by the President. However, the Central Government cannot arbitrarily sack a Governor merely because a new political party won elections.',
    textSnippet: 'The Governor shall hold office during the pleasure of the President... Subject to the foregoing provisions of this article, a Governor shall hold office for a term of five years from the date on which he enters upon his office.',
    realWorldScenario: 'A new ruling coalition comes to power at the Centre and summarily dismisses 10 State Governors appointed by the previous government without stating any cause. Is this valid? No! The 5-Judge Bench in B.P. Singhal (2010) ruled that while the President can remove a Governor, the removal cannot be arbitrary, capricious, or based on political difference.',
    prosecutionNote: 'Under Article 361, the Governor enjoys absolute immunity from criminal proceedings, arrest, and imprisonment in any court during their term of office.',
    clauses: [
      {
        clause: '156(1) Doctrine of Pleasure',
        explanation: 'The President can withdraw pleasure at any time, but withdrawal of pleasure must be based on valid, compelling reasons (corruption, treason, mental infirmity), not political hostility.',
        example: 'B.P. Singhal: Central Government must justify removal if challenged in court.'
      },
      {
        clause: '156(3) 5-Year Term & Holding Over',
        explanation: 'A Governor continues to hold office, notwithstanding the expiration of their 5-year term, until their successor enters upon the office.',
        example: 'Ensures zero gubernatorial vacancy in the state executive.'
      }
    ],
    exceptions: ['Immunity under Article 361 ceases the moment the Governor steps down or their term ends.'],
    landmarkCases: [
      {
        caseName: 'B.P. Singhal v. Union of India',
        year: 2010,
        bench: '5-Judge Bench',
        summary: 'Raveendran, J. held that the President’s power to remove a Governor is not unfettered. A Governor cannot be removed on the ground that they are out of sync with the policies of the Central Government. Removal is subject to judicial review for arbitrariness.',
        significance: 'Historic check protecting federal gubernatorial independence from political vendetta.'
      }
    ],
    doctrineLinks: ['Doctrine of Pleasure', 'Judicial Review of Presidential Pleasure', 'Federal Continuity']
  },
  {
    number: '161',
    title: 'Power of Governor to Grant Pardons and Remissions',
    summary: 'Vests the Governor with sovereign clemency power to grant pardons, reprieves, respites, and remissions, or to suspend, remit, or commute sentences for offences against State laws.',
    plainEnglish: 'The Governor can forgive a convict, reduce their prison time, or commute their sentence for crimes governed by State executive laws. The Governor acts on the advice of the State Cabinet.',
    textSnippet: 'The Governor of a State shall have the power to grant pardons, reprieves, respites or remissions of punishment or to suspend, remit or commute the sentence of any person convicted of any offence against any law relating to a matter to which the executive power of the State extends.',
    realWorldScenario: 'A convict sentenced to life imprisonment completes 20 years in jail and petitions the Governor for premature release. The State Cabinet advises the Governor to grant remission. The Governor sits on the file for 2 years. Can the Supreme Court intervene? Yes! In A.G. Perarivalan (2022), the Supreme Court held that the Governor is bound by cabinet advice and exercised Article 142 to release the convict directly.',
    prosecutionNote: 'Vital distinction for prosecutors: (1) Governor has power over offences under laws where State executive power extends (List II and Concurrent List matters); (2) Governor cannot pardon a Court Martial sentence (President only under Art 72); (3) In Perarivalan (2022) and Satpal (2021), the Supreme Court clarified that the Governor can commute a death sentence under Article 161, but the power to grant a complete pardon for death penalty rests exclusively with the President under Article 72.',
    clauses: [
      {
        clause: 'Scope of Gubernatorial Clemency',
        explanation: 'Encompasses: (1) Pardon, (2) Commutation, (3) Remission, (4) Respite, and (5) Reprieve. Exercised strictly on the mandatory advice of the State Council of Ministers (Maru Ram).',
        example: 'State premature release policy remitting sentences of lifers who served 14 years.'
      },
      {
        clause: 'Article 161 vs Statutory Section 473 BNSS (former 433A CrPC)',
        explanation: 'Article 161 is a constitutional power that overrides statutory restrictions like Section 473 BNSS (which mandates serving 14 years before remission). The Governor’s constitutional power cannot be limited by statute (State of Haryana v. Raj Kumar).',
        example: 'Governor remitting sentence before 14 years completion.'
      },
      {
        clause: 'Judicial Review of Governor’s Pardon',
        explanation: 'Amenable to judicial review if exercised arbitrarily, on political bias, or without cabinet advice (Epuru Sudhakar).',
        example: 'Quashing remission granted to a political activist convicted of murdering an opposition leader.'
      }
    ],
    exceptions: [
      'Cannot pardon court-martial sentences.',
      'Bound strictly by the advice of the State Council of Ministers.'
    ],
    landmarkCases: [
      {
        caseName: 'A.G. Perarivalan v. State (Rajiv Gandhi Assassination)',
        year: 2022,
        bench: '3-Judge Bench',
        summary: 'Held that the Governor is bound by the State Cabinet’s advice under Article 161; the Governor cannot refer an Article 161 matter to the President where the offence falls under state executive power. Ordered immediate release under Art 142.',
        significance: 'Historic verdict confirming that the Governor cannot sit on or derail state cabinet clemency advice.'
      },
      {
        caseName: 'State of Haryana v. Raj Kumar @ Bittu',
        year: 2021,
        bench: '2-Judge Bench',
        summary: 'Held that the Governor’s constitutional power under Article 161 overrides Section 433A of the Code of Criminal Procedure (mandating 14 years actual imprisonment); the constitutional power cannot be restricted by statutory law.',
        significance: 'Affirmed the supremacy of constitutional clemency over procedural statutory bars.'
      },
      {
        caseName: 'Epuru Sudhakar v. Govt. of A.P.',
        year: 2006,
        bench: '2-Judge Bench',
        summary: 'Kapadia, J. held that the exercise of clemency under Article 161 is subject to judicial review if it is shown that the Governor was influenced by political bias or caste considerations, or acted without application of mind.',
        significance: 'Established judicial review over state executive pardons.'
      }
    ],
    doctrineLinks: ['Gubernatorial Clemency', 'Cabinet Advice Primacy in Pardon', 'Supremacy over Statutory Remission Bars']
  },
  {
    number: '163',
    title: 'Council of Ministers to Aid and Advise Governor (Discretionary Powers)',
    summary: 'Mandates a Council of Ministers with the Chief Minister at the head to aid and advise the Governor, except in matters where the Constitution requires the Governor to act in personal discretion.',
    plainEnglish: 'The Chief Minister and Cabinet govern the State. The Governor must follow their advice, except in very rare situations explicitly spelled out in the Constitution.',
    textSnippet: 'There shall be a Council of Ministers with the Chief Minister at the head to aid and advise the Governor in the exercise of his functions, except in so far as he is by or under this Constitution required to exercise his functions or any of them in his discretion.',
    realWorldScenario: 'A state Governor summons an assembly session or orders a floor test against the advice of the Chief Minister without objective proof that the government lost majority. Is this legal? No! In Nabam Rebia (2016) and Subhash Desai (Maharashtra Crisis 2023), the Supreme Court ruled that the Governor has no unguided discretion to summon or dismiss assemblies.',
    prosecutionNote: 'Prosecution sanction against a Minister or public servant under Section 218 BNSS (former 197 CrPC) requires Governor’s independent assessment if the Cabinet refuses sanction against its own Ministers (Madhya Pradesh Special Police Establishment v. State of M.P.).',
    clauses: [
      {
        clause: '163(1) General Rule: Cabinet Advice Binding',
        explanation: 'Like the President, the Governor is a constitutional figurehead. Advice of the State Council of Ministers is binding on all ordinary governmental functions.',
        example: 'Passing executive government orders and fiscal allocations.'
      },
      {
        clause: '163(2) Scope of Governor’s Discretion',
        explanation: 'Narrow constitutional exceptions: (1) Reserving a Bill for Presidential consideration (Art 200); (2) Recommending President’s Rule (Art 356); (3) Appointing CM in a hung assembly; (4) Dismissing a ministry that has lost majority on the floor of the House; (5) Granting prosecution sanction against Ministers where Cabinet has bias.',
        example: 'Ordering a composite floor test in a hung assembly.'
      }
    ],
    exceptions: ['Discretionary powers are subject to judicial review for mala fides (Nabam Rebia & Subhash Desai).'],
    landmarkCases: [
      {
        caseName: 'Nabam Rebia and Bamang Felix v. Deputy Speaker, Arunachal Pradesh Assembly',
        year: 2016,
        bench: '5-Judge Bench',
        summary: 'Unanimously ruled that the Governor cannot summon, prorogue, or dissolve the legislative assembly without the aid and advice of the Council of Ministers headed by the Chief Minister; held that Article 163 discretion is severely circumscribed.',
        significance: 'The modern definitive precedent curbing gubernatorial executive overreach.'
      },
      {
        caseName: 'Subhash Desai v. Principal Secretary, Governor of Maharashtra',
        year: 2023,
        bench: '5-Judge Bench',
        summary: 'Held that the Governor was not justified in calling for a floor test without objective material demonstrating that the incumbent government had lost the confidence of the House; internal party dissent does not authorize the Governor to call a floor test.',
        significance: 'Set strict empirical standards for floor tests and gubernatorial interventions.'
      }
    ],
    doctrineLinks: ['Gubernatorial Discretionary Limits', 'Constitutional Figurehead', 'Objective Floor Test Mandate']
  },
  {
    number: '165',
    title: 'The Advocate-General for the State',
    summary: 'Establishes the highest law officer in the State Government, appointed by the Governor, who advises the State upon legal matters and has right of audience in all State courts.',
    plainEnglish: 'The Advocate-General is the State Government’s chief lawyer. They represent the State in the High Court and advise the Chief Minister and Cabinet on constitutional law.',
    textSnippet: 'The Governor of each State shall appoint a person who is qualified to be appointed a Judge of a High Court to be Advocate-General for the State.',
    realWorldScenario: 'A state law is challenged in the High Court for violating fundamental rights. The Advocate-General appears on behalf of the State to defend the constitutionality of the statute under Article 165.',
    prosecutionNote: 'The Advocate-General enjoys the right of audience in all courts in the State, and under Article 177 has the right to speak in both Houses of the State Legislature without voting rights.',
    clauses: [
      {
        clause: 'Qualifications & Appointment',
        explanation: 'Must be qualified to be appointed a Judge of a High Court (citizen, 10 years judicial office or 10 years advocate in High Court). Appointed by the Governor on Cabinet advice.',
        example: 'Holds office during the pleasure of the Governor (Article 165(3)).'
      }
    ],
    exceptions: ['Holds office during the pleasure of the Governor; usually resigns when the State Government changes.'],
    landmarkCases: [
      {
        caseName: 'M.T. Khan v. Govt. of A.P.',
        year: 2004,
        bench: '2-Judge Bench',
        summary: 'Held that the constitutional office of the Advocate-General is singular under Article 165; the State cannot appoint "Additional Advocates General" with constitutional status under Art 165 without statutory authorization.',
        significance: 'Preserved the unique constitutional stature of the Advocate-General.'
      }
    ],
    doctrineLinks: ['Chief Law Officer of State', 'Right of Audience in State Courts']
  },

  // CHAPTER III: THE STATE LEGISLATURE
  {
    number: '200',
    title: 'Assent to Bills and Reservation for the President (The Assent Engine)',
    summary: 'Governs the passage of State Bills: Governor must grant assent, return the bill, or reserve it for the President. Landmark ruling in State of Punjab (2023) bars sitting indefinitely on bills.',
    plainEnglish: 'When a State Assembly passes a bill, the Governor must sign it, return it with suggestions, or send it to the President. The Governor CANNOT indefinitely sit on a bill to kill it.',
    textSnippet: 'When a Bill has been passed by the Legislative Assembly of a State... it shall be presented to the Governor and the Governor shall declare either that he assents to the Bill or that he withholds assent therefrom or that he reserves the Bill for the consideration of the President: Provided that the Governor may, as soon as possible... return the Bill...',
    realWorldScenario: 'A State Governor keeps 10 bills passed by the elected State Assembly pending for over 2 years without signing or returning them. Can the State Government approach the Supreme Court? Yes! In State of Punjab v. Governor (2023), the Supreme Court ruled that a Governor cannot sit on bills indefinitely; the phrase "as soon as possible" imposes a mandatory constitutional duty of urgency.',
    prosecutionNote: 'A State penal statute (such as state amendments to criminal procedure or local crime acts) has no legal force until it receives gubernatorial assent under Art 200 (or Presidential Assent under Art 201 if reserved due to Concurrent List repugnancy under Art 254(2)).',
    clauses: [
      {
        clause: 'Four Constitutional Options Before Governor',
        explanation: '(1) Give assent (Bill becomes Law); (2) Withhold assent (Rare - must return it under proviso); (3) Return the Bill for reconsideration (Suspensive Veto - cannot be used for Money Bills); (4) Reserve the Bill for the consideration of the President.',
        example: 'Returning a university amendment bill for reconsideration.'
      },
      {
        clause: 'Mandatory Assent on Re-Passage',
        explanation: 'If the Assembly passes the returned Bill again with or without amendments, the Governor "shall not withhold assent therefrom".',
        example: 'State Assembly re-passes the bill; Governor is constitutionally forced to assent.'
      },
      {
        clause: 'Mandatory Reservation for President (Second Proviso)',
        explanation: 'The Governor MUST reserve for the President any Bill which in their opinion derogates from the powers of the High Court so as to endanger its constitutional position.',
        example: 'A state bill seeking to curtail the contempt powers or jurisdiction of the High Court.'
      }
    ],
    exceptions: ['Governor cannot return a Money Bill for reconsideration.'],
    landmarkCases: [
      {
        caseName: 'State of Punjab v. Principal Secretary to Governor of Punjab',
        year: 2023,
        bench: '3-Judge Bench',
        summary: 'CJI Chandrachud ruled that the Governor cannot act as an unelected veto over elected legislatures. If a Governor withholds assent under Article 200, they MUST return the bill to the legislature "as soon as possible". Sitting on bills indefinitely is a subversion of constitutional democracy.',
        significance: 'Historic verdict dismantling the pocket veto practice of State Governors.'
      },
      {
        caseName: 'State of Tamil Nadu v. Governor of Tamil Nadu',
        year: 2024,
        bench: '3-Judge Bench',
        summary: 'Held that once a State Legislature re-passes a bill returned by the Governor, the Governor CANNOT subsequently reserve that bill for the President; assent is mandatory under the first proviso to Article 200.',
        significance: 'Blocked secondary referral tactics after legislative re-adoption.'
      }
    ],
    doctrineLinks: ['Gubernatorial Assent Engine', 'Bar on Pocket Veto', 'Legislative Supremacy in State Law']
  },
  {
    number: '201',
    title: 'Bills Reserved for Consideration of the President',
    summary: 'Governs State Bills reserved by the Governor for Presidential consideration. Essential mechanism for resolving Centre-State legislative conflicts and Article 254(2) repugnancy.',
    plainEnglish: 'When the Governor reserves a State bill for the President, the Central Cabinet reviews it. The President can sign it, reject it, or send it back. No time limit is prescribed for the President.',
    textSnippet: 'When a Bill is reserved by a Governor for the consideration of the President, the President shall declare either that he assents to the Bill or that he withholds assent therefrom: Provided that, where the Bill is not a Money Bill, the President may direct the Governor to return the Bill to the House...',
    realWorldScenario: 'A State passes a law amending criminal procedure regarding bail for local offences. Because criminal law is in the Concurrent List (List III) and conflicts with the central BNSS, the Governor reserves the Bill for the President. If the President gives assent under Article 201, the State law prevails in that State under Article 254(2).',
    prosecutionNote: 'Crucial for Prosecuting Officers in State-specific criminal amendments: If a State criminal amendment received Presidential Assent under Article 201, the State provision prevails over the general central provision within that State territory (Article 254(2)).',
    clauses: [
      {
        clause: 'Presidential Options on State Bills',
        explanation: 'President may assent, withhold assent, or direct return to the State Assembly. If re-passed by the State Assembly, the President is NOT bound to give assent (unlike the Governor).',
        example: 'State agricultural or tenancy bills reserved for central review.'
      }
    ],
    exceptions: ['President can withhold assent even if the State Legislature re-passes the bill.'],
    landmarkCases: [
      {
        caseName: 'Kaiser-I-Hind Pvt. Ltd. v. National Textile Corporation',
        year: 2002,
        bench: '5-Judge Bench',
        summary: 'Held that for a State law to prevail over a Central law under Article 254(2) via Article 201 Presidential Assent, there must be an active, pointed consideration by the President of the specific repugnancy.',
        significance: 'Established that Presidential Assent under Article 201 requires express disclosure of the statutory conflict.'
      }
    ],
    doctrineLinks: ['Repugnancy Cure under Art 254(2)', 'Presidential Scrutiny of State Legislation']
  },

  // CHAPTER IV: LEGISLATIVE POWER OF GOVERNOR
  {
    number: '213',
    title: 'Power of Governor to Promulgate Ordinances',
    summary: 'Empowers the Governor to promulgate temporary Ordinances when the State Legislature is in recess. Bounded by strict 6-week expiry and the constitutional bar on re-promulgation (D.C. Wadhwa).',
    plainEnglish: 'When the State Assembly is not sitting, the Governor can issue emergency Ordinances on the Cabinet’s advice. But using ordinances repeatedly to bypass the Assembly is an unconstitutional fraud.',
    textSnippet: 'If at any time, except when the Legislative Assembly of a State is in session... the Governor is satisfied that circumstances exist which render it necessary for him to take immediate action, he may promulgate such Ordinances as the circumstances appear to him to require.',
    realWorldScenario: 'The State Government wants to increase municipal taxes but knows the Assembly will oppose it. It waits for the Assembly to adjourn, issues an Ordinance, and when it nears expiry, issues the exact same ordinance 10 times consecutively over 5 years. Is this valid? No! In D.C. Wadhwa and Krishna Kumar Singh, the Supreme Court declared repeated re-promulgation a fraud on the Constitution.',
    prosecutionNote: 'Prosecution cannot be initiated under an Ordinance that has lapsed without legislative adoption unless the expired ordinance contained a savings clause preserving past actions.',
    clauses: [
      {
        clause: '213(1) Pre-requisites & Presidential Instructions',
        explanation: 'State Assembly must be in recess. For certain ordinances (bills requiring Presidential instructions under Art 213(1) proviso, e.g. Concurrent List laws), the Governor must obtain prior instructions from the President.',
        example: 'Promulgating state public health emergency measures.'
      },
      {
        clause: '213(2) 6-Week Expiry Rule',
        explanation: 'Must be laid before the State Legislative Assembly upon reassembly. Automatically lapses 6 weeks after reassembly or earlier if disapproved by resolution.',
        example: 'Maximum life is 6 months + 6 weeks.'
      }
    ],
    exceptions: ['Cannot be promulgated when the Legislative Assembly (or both Houses in a bicameral state) is in session.'],
    landmarkCases: [
      {
        caseName: 'D.C. Wadhwa v. State of Bihar',
        year: 1987,
        bench: '5-Judge Bench',
        summary: 'Bhagwati, CJI struck down the re-promulgation of 256 ordinances in Bihar between 1967 and 1981; held that ordinance-making power cannot be converted into an enduring parallel legislative engine. It is a fraud on the Constitution.',
        significance: 'Historic watershed ending the practice of "Ordinance Raj" in Indian states.'
      },
      {
        caseName: 'Krishna Kumar Singh v. State of Bihar',
        year: 2017,
        bench: '7-Judge Bench',
        summary: 'Reaffirmed D.C. Wadhwa; held that laying ordinances before the legislature is a mandatory constitutional duty. Rights created by an un-tabled expired ordinance do not survive permanently.',
        significance: 'Settled that executive failure to place ordinances before the assembly invalidates all derived enduring rights.'
      }
    ],
    doctrineLinks: ['Gubernatorial Ordinance Engine', 'Fraud on the Constitution', 'Ordinance Expiry Mechanics']
  },

  // CHAPTER V: THE HIGH COURTS IN THE STATES
  {
    number: '214',
    title: 'High Courts for States',
    summary: 'Establishes a High Court for each State as the apex judicial institution in the State, guaranteeing independent judicial administration within the federal unit.',
    plainEnglish: 'Every State has a High Court at the top of its judicial ladder. Parliament can establish a common High Court for two or more States (e.g. Punjab & Haryana High Court; Bombay High Court covering Maharashtra & Goa).',
    textSnippet: 'There shall be a High Court for each State.',
    realWorldScenario: 'Under Article 231, Parliament establishes the Gauhati High Court with jurisdiction over Assam, Nagaland, Mizoram, and Arunachal Pradesh. This common High Court satisfies the mandate of Article 214 for all four states.',
    prosecutionNote: 'High Courts possess plenary constitutional supervision over all Prosecuting Officers, Sessions Judges, and Judicial Magistrates within their territorial boundaries.',
    clauses: [
      {
        clause: 'Mandatory State Apex Court',
        explanation: 'Ensures an unbroken hierarchy of justice across the Republic.',
        example: '25 High Courts currently functioning across India.'
      }
    ],
    exceptions: ['Parliament may establish a common High Court for two or more States under Article 231.'],
    landmarkCases: [
      {
        caseName: 'High Court of Judicature at Bombay v. Shirishkumar Rangrao Patil',
        year: 1997,
        bench: '2-Judge Bench',
        summary: 'Emphasized that High Courts are constitutional bastions of independence, ensuring that justice is administered without fear or favor in the States.',
        significance: 'Affirmed the independent status of High Courts as non-subordinate constitutional bodies.'
      }
    ],
    doctrineLinks: ['State Judicial Independence', 'Common High Court Mechanism']
  },
  {
    number: '215',
    title: 'High Courts to be Courts of Record (Inherent Contempt Powers)',
    summary: 'Declares every High Court a Court of Record with unquestioned evidentiary authority and inherent power to punish for contempt of itself and subordinate courts.',
    plainEnglish: 'The High Court’s judgments are permanent legal records. It has inherent constitutional power to punish, fine, or jail anyone who commits contempt of court or attacks the authority of the judiciary.',
    textSnippet: 'Every High Court shall be a court of record and shall have all the powers of such a court including the power to punish for contempt of itself.',
    realWorldScenario: 'A litigant throws a shoe at a trial magistrate or threatens a witness in open court. The High Court initiates suo motu contempt proceedings under Article 215 to punish the offender and protect the subordinate magistrate. This inherent power cannot be abridged by ordinary statutes.',
    prosecutionNote: 'High Court contempt powers under Article 215 extend over the entire state subordinate judiciary and criminal courts (T. Sudhakar Prasad).',
    clauses: [
      {
        clause: 'Inherent Power to Punish Contempt',
        explanation: 'Like Article 129 for the Supreme Court, Article 215 grants inherent, constitutional contempt powers that cannot be limited by the Contempt of Courts Act, 1971.',
        example: 'Punishing public officials for willful disobedience to High Court writ directions.'
      }
    ],
    exceptions: ['Fair and objective reporting and constructive criticism of concluded judgments is protected.'],
    landmarkCases: [
      {
        caseName: 'T. Sudhakar Prasad v. Govt. of A.P.',
        year: 2001,
        bench: '5-Judge Bench',
        summary: 'Held that the contempt jurisdiction of the High Court under Article 215 is an inherent part of its constitutional status as a Court of Record and cannot be abrogated or limited by ordinary parliamentary legislation.',
        significance: 'Secured inherent contempt power of High Courts against legislative dilution.'
      }
    ],
    doctrineLinks: ['Court of Record', 'Inherent Contempt Jurisdiction of High Courts']
  },
  {
    number: '226',
    title: 'Power of High Courts to Issue Certain Writs (The People’s Forum)',
    summary: 'The primary constitutional bulwark of civil liberty. Empowers High Courts to issue writs not only for Fundamental Rights, but "for any other purpose" (ordinary legal rights). Wider in scope than Article 32.',
    plainEnglish: 'The High Court can issue 5 Writs (Habeas Corpus, Mandamus, etc.) to protect your Fundamental Rights AND any other legal right. It is the most accessible, powerful court for ordinary citizens.',
    textSnippet: 'Notwithstanding anything in article 32 every High Court shall have power, throughout the territories in relation to which it exercises jurisdiction, to issue to any person or authority, including in appropriate cases, any Government, within those territories directions, orders or writs, including writs in the nature of habeas corpus, mandamus, prohibition, quo warranto and certiorari, or any of them, for the enforcement of any of the rights conferred by Part III and for any other purpose.',
    realWorldScenario: 'Police register a completely false, politically motivated criminal FIR against a citizen where the allegations, even if accepted 100% as true, do not disclose any criminal offence. The citizen files a writ petition under Article 226 read with Section 528 BNSS (former 482 CrPC). The High Court applies the 7 golden tests of Bhajan Lal and quashes the FIR.',
    prosecutionNote: 'The single most important provision for a Prosecuting Officer: (1) Article 226 is invoked daily to challenge arrests, search warrants, bail rejections, FIRs, and chargesheets; (2) "For any other purpose" means High Courts can enforce ordinary statutory rights, unlike Article 32 which is limited to Part III; (3) Inherent quashing of criminal proceedings under Section 528 BNSS is routinely co-invoked with Article 226.',
    clauses: [
      {
        clause: 'Wider Reach than Article 32 ("For Any Other Purpose")',
        explanation: 'Article 32 can only be invoked for Fundamental Rights. Article 226 can be invoked for Fundamental Rights AND for enforcement of any statutory, contractual, or common-law legal right.',
        example: 'Quashing an arbitrary administrative tax penalty or illegal municipal demolition.'
      },
      {
        clause: 'Territorial Nexus & Cause of Action (226(2))',
        explanation: 'High Court can issue writs against an authority outside its state boundaries if the cause of action arises, wholly or in part, within its territorial jurisdiction (226(2)).',
        example: 'Navinchandra N. Majithia: FIR registered in Mumbai can be challenged in Meghalaya if material transactions occurred in Meghalaya.'
      },
      {
        clause: 'Quashing of Criminal Proceedings (The Bhajan Lal Doctrine)',
        explanation: 'High Court exercises supervisory and inherent jurisdiction to prevent abuse of the process of any court and to secure the ends of justice.',
        example: 'Quashing an FIR where civil debt dispute is maliciously painted as criminal cheating.'
      }
    ],
    exceptions: [
      'Discretionary remedy: High Court generally refuses to entertain writ petitions where an effective, efficacious alternative statutory remedy exists (except for fundamental right violations or natural justice breaches).',
      'Article 226 is a constitutional right, not a fundamental right (unlike Article 32).'
    ],
    landmarkCases: [
      {
        caseName: 'High Court Bar Association, Allahabad v. State of Uttar Pradesh',
        year: 2024,
        bench: '5-Judge Constitution Bench (Unanimous)',
        summary: 'Overruled Asian Resurfacing (2018). Held that interim stay orders granted by High Courts in civil/criminal cases do not automatically expire after 6 months without a judicial hearing.',
        significance: 'Reaffirmed the constitutional autonomy and plenary writ jurisdiction of High Courts under Article 226; SC cannot set automatic administrative clocks via Article 142.'
      },
      {
        caseName: 'State of Haryana v. Bhajan Lal',
        year: 1992,
        bench: '2-Judge Bench',
        summary: 'Formulated the 7 classic categories where the High Court under Article 226 / Section 482 CrPC (now Section 528 BNSS) can quash an FIR or criminal complaint to prevent abuse of process.',
        significance: 'The universally cited bible on quashing criminal proceedings in Indian law.'
      },
      {
        caseName: 'L. Chandra Kumar v. Union of India',
        year: 1997,
        bench: '7-Judge Bench',
        summary: 'Held that the writ jurisdiction of the High Court under Article 226 is an integral part of the Basic Structure of the Constitution and can never be excluded by constitutional amendment or tribunalization.',
        significance: 'Enshrined High Court writ power as untouchable by constitutional amendment.'
      },
      {
        caseName: 'Whirlpool Corporation v. Registrar of Trade Marks',
        year: 1998,
        bench: '2-Judge Bench',
        summary: 'Laid down the 3 exceptions where alternative statutory remedies do not bar Article 226: (1) Enforcement of Fundamental Rights; (2) Violation of Natural Justice; (3) Order wholly without jurisdiction.',
        significance: 'The core precedent on maintainability of writ petitions despite alternative statutory forums.'
      }
    ],
    doctrineLinks: ['Writs for Any Other Purpose', 'The Bhajan Lal Quashing Doctrine', 'Basic Structure Judicial Review', 'Alternative Efficacious Remedy Rule']
  },
  {
    number: '227',
    title: 'Power of Superintendence over all Courts and Tribunals by the High Court',
    summary: 'Vests administrative and judicial superintendence in the High Court over all subordinate courts and statutory tribunals within its territory, ensuring lower courts stay within their jurisdiction.',
    plainEnglish: 'The High Court is the superintendent and watchdog of every trial court, magistrate court, and tribunal in the State, making sure lower judges do not exceed their legal boundaries.',
    textSnippet: 'Every High Court shall have superintendence over all courts and tribunals throughout the territories in relation to which it exercises jurisdiction.',
    realWorldScenario: 'A Magistrate grants bail to an accused in a heinous terror case despite an express statutory bar, committing a patent jurisdictional error. Can the High Court intervene under Article 227? Yes! Under Article 227, the High Court exercises judicial superintendence to correct patent errors of law and jurisdictional overreach.',
    prosecutionNote: 'Prosecuting Officers invoke Article 227 to challenge interlocutory orders of trial judges that cause gross failure of justice and are not appealable under ordinary procedural law.',
    clauses: [
      {
        clause: 'Dual Superintendence: Judicial & Administrative',
        explanation: 'Encompasses both judicial revision (correcting lower court jurisdictional excess, patent perversity) and administrative supervision (call for returns, inspect records, frame rules).',
        example: 'Inspecting prison undertrial registers and trial court pending case dockets.'
      },
      {
        clause: 'Distinction from Article 226',
        explanation: 'Article 226 is primarily an original writ jurisdiction for remedy; Article 227 is a supervisory jurisdiction over subordinate courts and tribunals (Waryam Singh).',
        example: 'Correcting an illegal remand order where no appeal lies.'
      }
    ],
    exceptions: ['Does not apply to any court or tribunal constituted by or under any law relating to the Armed Forces (Military Court Martial).'],
    landmarkCases: [
      {
        caseName: 'Waryam Singh v. Amarnath',
        year: 1954,
        bench: 'Constitution Bench',
        summary: 'Das, J. held that the power of superintendence under Article 227 is both judicial and administrative; it is to be exercised sparingly to keep subordinate courts within the bounds of their authority, and not to correct mere errors of fact.',
        significance: 'The foundational benchmark governing Article 227 supervisory jurisdiction.'
      },
      {
        caseName: 'Shalini Shyam Shetty v. Rajendra Shankar Patil',
        year: 2010,
        bench: '2-Judge Bench',
        summary: 'Reiterated that Article 227 cannot be invoked like a routine civil revision or appeal; it is reserved for grave dereliction of duty, patent flagrant injustice, or total absence of jurisdiction.',
        significance: 'Cautioned against converting supervisory petitions into backdoor appeals.'
      }
    ],
    doctrineLinks: ['Superintendence over Subordinate Judiciary', 'Supervisory vs Original Jurisdiction', 'Patent Jurisdictional Error']
  },

  // CHAPTER VI: SUBORDINATE COURTS
  {
    number: '233',
    title: 'Appointment of District Judges',
    summary: 'Governs the appointment, posting, and promotion of District Judges by the Governor in mandatory consultation with the High Court.',
    plainEnglish: 'District and Sessions Judges are appointed by the Governor, but the High Court’s recommendation is mandatory to protect the independence of trial judges.',
    textSnippet: 'Appointments of persons to be, and the posting and promotion of, district judges in any State shall be made by the Governor of the State in consultation with the High Court exercising jurisdiction in relation to such State.',
    realWorldScenario: 'Can the State Law Minister unilaterally appoint their preferred advocate as a District and Sessions Judge without the High Court’s recommendation? No! Under Article 233, "consultation" with the High Court is mandatory, and the High Court’s view carries decisive weight (Chandra Mohan case).',
    prosecutionNote: 'District Judges preside over the Sessions Court—the highest trial court for prosecuting heinous criminal offences (murder, rape, corruption).',
    clauses: [
      {
        clause: '233(1) Mandatory High Court Consultation',
        explanation: 'The Governor must consult the High Court; executive cannot unilaterally appoint judicial officers without High Court concurrence.',
        example: 'Promotions from Senior Civil Judge cadre to District Judge cadre.'
      },
      {
        clause: '233(2) Direct Recruitment from Bar',
        explanation: 'A person not already in State service must have been for not less than seven years an advocate or a pleader and must be recommended by the High Court for appointment.',
        example: 'Direct recruitment quota (25%) for practicing advocates in Higher Judicial Service (HJS).'
      }
    ],
    exceptions: ['Full-time government servants who are not practicing advocates are not eligible for direct Bar recruitment (Dheeraj Mor).'],
    landmarkCases: [
      {
        caseName: 'All India Judges Association v. Union of India (District Judges Appointment Bench)',
        year: 2025,
        bench: '5-Judge Constitution Bench',
        summary: 'Reaffirmed Dheeraj Mor (2020). Held that serving judicial officers in the subordinate judiciary cannot compete in the 25% direct recruitment advocate quota under Article 233(2) without resigning.',
        significance: 'Mandated 7 years of continuous and active practice at the Bar for direct recruitment as District Judge, protecting the dedicated Bar quota.'
      },
      {
        caseName: 'Chandra Mohan v. State of U.P.',
        year: 1966,
        bench: 'Constitution Bench',
        summary: 'Subba Rao, CJI held that consultation with the High Court under Article 233 is a mandatory constitutional requirement to ensure the independence of the subordinate judiciary from the executive.',
        significance: 'Shielded subordinate judicial appointments from political and executive patronage.'
      },
      {
        caseName: 'Dheeraj Mor v. Hon’ble High Court of Delhi',
        year: 2020,
        bench: '3-Judge Bench',
        summary: 'Held that serving judicial officers from the lower cadre cannot compete for the 25% direct recruitment quota reserved exclusively for practicing advocates with 7 years at the Bar under Article 233(2).',
        significance: 'Preserved the separation between Bar recruitment and promotional service tracks.'
      }
    ],
    doctrineLinks: ['Subordinate Judicial Independence', 'Mandatory High Court Concurrence']
  },
  {
    number: '235',
    title: 'Control over Subordinate Courts (Complete High Court Autonomy)',
    summary: 'Vests the comprehensive administrative, disciplinary, and promotional control over all district courts and subordinate judicial magistrates exclusively in the High Court.',
    plainEnglish: 'The State Government cannot suspend, transfer, or discipline a trial judge or magistrate. The High Court has 100% disciplinary control over all lower courts.',
    textSnippet: 'The control over district courts and courts subordinate thereto including the posting and promotion of, and the grant of leave to, persons belonging to the judicial service of a State and holding any post inferior to the post of district judge shall be vested in the High Court...',
    realWorldScenario: 'A state bureaucrat orders the suspension and disciplinary inquiry of a Judicial Magistrate for passing an adverse bail order against the police. Is the bureaucrat’s order valid? No! Under Article 235, control over subordinate courts is vested exclusively in the High Court. The executive has zero disciplinary jurisdiction over judges (Nripendra Nath Bagchi).',
    prosecutionNote: 'Vital for Prosecuting Officers: Guarantees that the Judicial Magistrates before whom prosecutors argue cases are completely immune from executive or police pressure, ensuring an impartial trial.',
    clauses: [
      {
        clause: 'Comprehensive High Court Control',
        explanation: 'Covers postings, transfers, promotions, grant of leave, disciplinary proceedings, and compulsory retirement. The Governor merely formally signs orders initiated by the High Court.',
        example: 'Annual general transfers of Judicial Magistrates ordered by the High Court Full Court.'
      }
    ],
    exceptions: ['Formal dismissal or removal of a District Judge is executed by the Governor upon the High Court’s binding recommendation.'],
    landmarkCases: [
      {
        caseName: 'State of West Bengal v. Nripendra Nath Bagchi',
        year: 1966,
        bench: 'Constitution Bench',
        summary: 'Hidayatullah, J. ruled that the word "control" in Article 235 is comprehensive; it includes disciplinary jurisdiction over all subordinate judicial officers, completely excluding the State Government.',
        significance: 'The foundational precedent establishing total High Court autonomy over subordinate courts.'
      },
      {
        caseName: 'Chief Justice of A.P. v. L.V.A. Dixitulu',
        year: 1979,
        bench: '5-Judge Bench',
        summary: 'Reiterated that Article 235 was deliberately enacted to eliminate executive interference in the subordinate judiciary, giving practical meaning to Article 50 separation.',
        significance: 'Integrated Article 235 with the constitutional separation of powers.'
      }
    ],
    doctrineLinks: ['Total High Court Control over Lower Judiciary', 'Article 50 Practical Separation', 'Insulation from Executive Discipline']
  }
];
