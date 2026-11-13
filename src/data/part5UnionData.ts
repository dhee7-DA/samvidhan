import type { ArticleItem } from '../types/constitution';

export const PART_5_UNION_EXPANDED: ArticleItem[] = [
  // CHAPTER I: THE EXECUTIVE
  {
    number: '52',
    title: 'The President of India',
    summary: 'Establishes the office of the President as the ceremonial Head of State, the first citizen of India, and the symbol of unity and integrity of the nation.',
    plainEnglish: 'There must always be a President of India. The office can never remain vacant even for a single moment.',
    textSnippet: 'There shall be a President of India.',
    realWorldScenario: 'When a President’s 5-year term expires before an election is concluded, does the office become vacant? No! Under Article 62, the incumbent President continues in office until their successor assumes office, ensuring zero constitutional interregnum.',
    prosecutionNote: 'All executive actions of the Union Government are formally expressed to be taken in the name of the President under Article 77, but the President acts solely on cabinet advice.',
    clauses: [
      {
        clause: 'Mandatory Office',
        explanation: 'The word "shall" makes the office of the President permanent and indispensable. It represents the continuity of the sovereign Republic.',
        example: 'Constitutional continuity during general election transitions.'
      }
    ],
    exceptions: ['President is a constitutional titular head; real executive power rests with the Council of Ministers (Article 74).'],
    landmarkCases: [
      {
        caseName: 'Shamsher Singh v. State of Punjab',
        year: 1974,
        bench: '7-Judge Bench',
        summary: 'Ray, CJI ruled that the President and Governors are constitutional heads of state who must exercise their formal powers solely on the aid and advice of their Council of Ministers.',
        significance: 'Settled that India has a Westminster cabinet system, not a presidential executive.'
      }
    ],
    doctrineLinks: ['Westminster Cabinet System', 'Constitutional Head of State']
  },
  {
    number: '53',
    title: 'Executive Power of the Union and Supreme Command',
    summary: 'Vests the executive power of the Union in the President, to be exercised directly or through subordinate officers, and vests supreme command of the Defense Forces.',
    plainEnglish: 'The President is the official head of the government and supreme commander of the Army, Navy, and Air Force, but military deployments must be regulated by law.',
    textSnippet: 'The executive power of the Union shall be vested in the President and shall be exercised by him either directly or through officers subordinate to him in accordance with this Constitution.',
    realWorldScenario: 'Can the President declare war or deploy the armed forces independently without cabinet approval? No! Under Article 53(2), the exercise of supreme command is strictly regulated by law and cabinet approval.',
    prosecutionNote: 'Public prosecutors and Union investigative agencies (CBI, ED, NIA) exercise statutory powers as "officers subordinate to the President" under Article 53(1).',
    clauses: [
      {
        clause: '53(1) Vested Executive Power',
        explanation: 'Encompasses all administrative, diplomatic, treaty-making, and regulatory powers of the federal government.',
        example: 'Appointing judges, ambassadors, governors, and public officers.'
      },
      {
        clause: '53(2) Supreme Command of Defence Forces',
        explanation: 'Civilian constitutional supremacy over the military. The President is Supreme Commander, but command is regulated by Parliamentary statute (Army Act, Navy Act, Air Force Act).',
        example: 'Presidential commissioning of military officers.'
      }
    ],
    exceptions: ['Does not prevent Parliament from conferring functions by law on authorities other than the President.'],
    landmarkCases: [
      {
        caseName: 'Ram Jawaya Kapur v. State of Punjab',
        year: 1955,
        bench: '5-Judge Bench',
        summary: 'Mukherjea, CJI held that executive power is not confined to executing laws passed by Parliament; the executive can act in fields without prior statute, provided it does not infringe fundamental rights.',
        significance: 'Defined the inherent and non-statutory frontiers of executive power.'
      }
    ],
    doctrineLinks: ['Civilian Supremacy over Military', 'Inherent Executive Power']
  },
  {
    number: '72',
    title: 'Power of President to Grant Pardons, Reprieves, Respites, and Remissions',
    summary: 'Vests the President with executive clemency to grant pardons, reprieves, respites, or remissions of punishment, or to suspend, remit, or commute sentences in all court-martial cases, Union law offences, and death sentences.',
    plainEnglish: 'The President can forgive a criminal, reduce a prison sentence, or cancel a death penalty. This is an act of sovereign grace to correct judicial errors or provide humanitarian relief.',
    textSnippet: 'The President shall have the power to grant pardons, reprieves, respites or remissions of punishment or to suspend, remit or commute the sentence of any person convicted of any offence— (a) in all cases where the punishment or sentence is by a Court Martial; (b) in all cases where the punishment or sentence is for an offence against any law relating to a matter to which the executive power of the Union extends; (c) in all cases where the sentence is a sentence of death.',
    realWorldScenario: 'A convict sentenced to death for murder files a mercy petition after the Supreme Court confirms the sentence. Can the President commute the death sentence to life imprisonment? Yes! Under Article 72(1)(c), the President has sovereign clemency power over death penalties.',
    prosecutionNote: 'Vital for every Prosecuting Officer: (1) Article 72 is an executive power exercised strictly on the advice of the Home Ministry, not personal discretion; (2) Inordinate, unexplained executive delay in deciding mercy petitions is a ground for the Supreme Court to commute death to life imprisonment (Shatrughan Chauhan); (3) Clemency decisions are subject to limited judicial review for mala fides or arbitrary non-application of mind (Epuru Sudhakar).',
    clauses: [
      {
        clause: 'Five Forms of Sovereign Clemency',
        explanation: '(1) Pardon: Completely wipes out both conviction and sentence, restoring citizen status; (2) Commutation: Substitutes a harsher punishment with a lighter form (e.g. death to life imprisonment); (3) Remission: Reduces the duration of sentence without changing its character (e.g. 10 years rigorous imprisonment to 5 years); (4) Respite: Awards a lesser sentence on special grounds (e.g. pregnancy of female convict); (5) Reprieve: Temporary stay of execution (e.g. during mercy petition pendency).',
        example: 'Commuting death penalty to 20 years non-remissible imprisonment.'
      },
      {
        clause: '72(1)(a) Court Martial Cases',
        explanation: 'President alone possesses clemency powers over sentences passed by military Courts Martial. State Governors have no such power.',
        example: 'Remitting a military officer’s court-martial imprisonment.'
      },
      {
        clause: '72(1)(b) Union Executive Offences',
        explanation: 'Offences under central laws (BNS, Customs, UAPA, NDPS, Prevention of Corruption Act, PMLA).',
        example: 'Remitting sentences in central economic or security offences.'
      },
      {
        clause: '72(1)(c) Exclusive Death Sentence Clemency',
        explanation: 'All death sentences across India are amenable to Presidential pardon, whether enacted under Central or State law.',
        example: 'Mercy petitions in capital homicide cases.'
      }
    ],
    exceptions: [
      'Cabinet advice is binding (Maru Ram v. Union of India).',
      'Does not affect the Governor’s power under Article 161 to suspend, remit, or commute death sentences.'
    ],
    landmarkCases: [
      {
        caseName: 'Maru Ram v. Union of India',
        year: 1980,
        bench: '5-Judge Bench',
        summary: 'Krishna Iyer, J. held that the power under Article 72 is exercised by the President on the mandatory advice of the Central Government (Council of Ministers) and not on personal discretion.',
        significance: 'Anchored executive clemency strictly within constitutional democracy.'
      },
      {
        caseName: 'Kehar Singh v. Union of India',
        year: 1989,
        bench: '5-Judge Bench',
        summary: 'Pathak, CJI ruled that the President acts on a different plane from courts; the President can scrutinize evidence afresh and conclude that the court arrived at an erroneous verdict, without acting as an appellate court.',
        significance: 'Established that pardon is an independent sovereign review of justice.'
      },
      {
        caseName: 'Epuru Sudhakar v. Govt. of A.P.',
        year: 2006,
        bench: '2-Judge Bench',
        summary: 'Held that executive clemency under Articles 72 and 161 is subject to judicial review if challenged on grounds of non-application of mind, political favoritism, caste/religious bias, or mala fides.',
        significance: 'Ended absolute presidential immunity in pardon allocations.'
      },
      {
        caseName: 'Shatrughan Chauhan v. Union of India',
        year: 2014,
        bench: '3-Judge Bench',
        summary: 'Ruled that unexplained, excessive, and inordinate executive delay in deciding mercy petitions constitutes torture and is a supervening ground to commute death penalty to life imprisonment under Art 21.',
        significance: 'Enforced constitutional timelines on clemency decision-making.'
      }
    ],
    doctrineLinks: ['Sovereign Clemency', 'Judicial Review of Pardons', 'Executive Mercy Jurisprudence', 'Anti-Delay Human Rights Shield']
  },
  {
    number: '74',
    title: 'Council of Ministers to Aid and Advise President',
    summary: 'The operational core of the Parliamentary system. Mandates a Council of Ministers with the Prime Minister at the head to aid and advise the President, whose advice is binding.',
    plainEnglish: 'The Prime Minister and their Cabinet run the country. The President must act on their advice. The President can ask the Cabinet to reconsider once, but must sign if sent back.',
    textSnippet: 'There shall be a Council of Ministers with the Prime Minister at the head to aid and advise the President who shall, in the exercise of his functions, act in accordance with such advice.',
    realWorldScenario: 'The Cabinet advises the President to sign an emergency proclamation. The President hesitates. Can the President refuse? Under the 44th Amendment proviso to Article 74(1), the President may send it back once for reconsideration. If the Cabinet re-approves it, the President is constitutionally bound to sign.',
    prosecutionNote: 'Advice tendered by Ministers to the President cannot be inquired into by any court under Article 74(2), though the factual materials on which advice was formed can be examined by courts (S.R. Bommai).',
    clauses: [
      {
        clause: '74(1) Mandatory Advice & One-Time Reconsideration',
        explanation: 'Amended by the 42nd Amendment (1976 - advice made absolute) and 44th Amendment (1978 - President given power to return advice once for cabinet reconsideration).',
        example: 'President returning an electoral ordinance for reconsideration.'
      },
      {
        clause: '74(2) Absolute Bar on Court Inquiry into Ministerial Advice',
        explanation: 'No court has jurisdiction to inquire into what advice was tendered by Ministers to the President.',
        example: 'S.R. Bommai: Material underlying the advice is open to judicial scrutiny, but the confidential advice itself is protected.'
      }
    ],
    exceptions: ['President may act with limited constitutional discretion in appointing a Prime Minister during a hung parliament or dissolving a defeated Lok Sabha.'],
    landmarkCases: [
      {
        caseName: 'S.R. Bommai v. Union of India',
        year: 1994,
        bench: '9-Judge Bench',
        summary: 'Held that while Article 74(2) bars courts from inquiring into the advice tendered by Ministers, it does not bar the court from examining the objective material on which the advice was based.',
        significance: 'Secured judicial review over executive advice recommending President’s Rule.'
      }
    ],
    doctrineLinks: ['Binding Cabinet Advice', 'Ministerial Responsibility', 'Executive Transparency']
  },
  {
    number: '75',
    title: 'Other Provisions as to Ministers (Collective Responsibility & 15% Cap)',
    summary: 'Codifies the appointment of the Prime Minister and Ministers, collective responsibility to the Lok Sabha, the 15% cabinet size cap, and the 6-month non-member tenure.',
    plainEnglish: 'Ministers are appointed by the President on the PM’s advice. The entire Cabinet sinks or swims together—if the Lok Sabha passes a no-confidence motion, everyone resigns.',
    textSnippet: 'The Prime Minister shall be appointed by the President and the other Ministers shall be appointed by the President on the advice of the Prime Minister... The Council of Ministers shall be collectively responsible to the House of the People.',
    realWorldScenario: 'A talented economist is appointed Finance Minister without being an MP. Can they continue indefinitely? No! Under Article 75(5), they must get elected to either Lok Sabha or Rajya Sabha within 6 consecutive months, or they automatically cease to be a Minister.',
    prosecutionNote: 'Ministers hold office during the "pleasure of the President" under Article 75(2), which realistically means the pleasure of the Prime Minister.',
    clauses: [
      {
        clause: '75(1A) 15% Cabinet Size Cap (91st Amd 2003)',
        explanation: 'The total number of Ministers, including the Prime Minister, in the Council of Ministers shall not exceed 15% of the total number of members of the Lok Sabha.',
        example: 'In a 543-member Lok Sabha, the maximum size of the Central Cabinet is 81 Ministers.'
      },
      {
        clause: '75(3) Collective Responsibility to Lok Sabha',
        explanation: 'Ministers are collectively responsible to the Lok Sabha. A single defeat on a Money Bill or a No-Confidence Motion forces the entire Cabinet to resign.',
        example: 'Collective cabinet solidarity: A minister who publicly disagrees with cabinet policy must resign.'
      },
      {
        clause: '75(5) 6-Month Rule for Non-Parliamentarians',
        explanation: 'A Minister who for any period of six consecutive months is not a member of either House of Parliament ceases to be a Minister.',
        example: 'Indira Gandhi (1966) and Manmohan Singh (2004) assumed premiership before securing parliamentary seats.'
      }
    ],
    exceptions: ['Individual ministers can be dismissed by the President on the advice of the PM at any time.'],
    landmarkCases: [
      {
        caseName: 'B.R. Kapur v. State of Tamil Nadu',
        year: 2001,
        bench: '5-Judge Bench',
        summary: 'Held that a person convicted of a criminal offence and sentenced to imprisonment exceeding 2 years is disqualified from being appointed Minister/Chief Minister under Article 75/164.',
        significance: 'Precluded convicted persons from entering executive ministerial office.'
      }
    ],
    doctrineLinks: ['Collective Responsibility', 'Cabinet Solidarity', '15% Ceiling on Ministry']
  },
  {
    number: '76',
    title: 'The Attorney-General for India',
    summary: 'Establishes the office of the highest law officer in the country, who advises the Union Government on legal matters, appears in the Supreme Court, and has right of audience across all courts.',
    plainEnglish: 'The Attorney-General is the Central Government’s chief legal counsel and defender. They represent India in major constitutional battles before the Supreme Court.',
    textSnippet: 'The President shall appoint a person who is qualified to be appointed a Judge of the Supreme Court to be Attorney-General for India.',
    realWorldScenario: 'The Supreme Court is hearing a major 9-judge bench constitutional challenge to a federal statute. Who leads the Union Government’s defense? The Attorney-General for India under Article 76.',
    prosecutionNote: 'Under Article 76(3), the Attorney-General has right of audience in all courts in the territory of India, and under Article 88 has the right to speak in both Houses of Parliament without voting rights.',
    clauses: [
      {
        clause: 'Qualifications & Appointment',
        explanation: 'Must be qualified to be appointed a Judge of the Supreme Court (citizen, 5 years High Court judge or 10 years High Court advocate, or distinguished jurist).',
        example: 'Appointed by the President on cabinet advice.'
      },
      {
        clause: 'Duties & Pleasure of President',
        explanation: 'Advises the Union upon legal matters, performs constitutional legal duties, and holds office during the pleasure of the President (traditionally resigns when the government changes).',
        example: 'Representing the Union in Presidential References under Article 143.'
      }
    ],
    exceptions: ['The Attorney-General is not a full-time government servant; they are not debarred from private legal practice, provided they do not advise against the Government of India.'],
    landmarkCases: [
      {
        caseName: 'P.N. Duda v. P. Shiv Shanker',
        year: 1988,
        bench: '2-Judge Bench',
        summary: 'Examined the unique constitutional status of the Attorney-General and Solicitor-General as independent guardians of public interest in contempt of court proceedings.',
        significance: 'Highlighted the dual role of the AG as state counsel and officer of the court.'
      }
    ],
    doctrineLinks: ['Chief Law Officer of Union', 'Right of Audience Across All Courts']
  },

  // CHAPTER II: PARLIAMENT
  {
    number: '105',
    title: 'Powers, Privileges, and Immunities of Parliament and its Members',
    summary: 'Guarantees freedom of speech in Parliament, immunity from court proceedings for speeches and votes cast, and parliamentary privilege to manage internal proceedings.',
    plainEnglish: 'MPs can debate and vote freely inside Parliament without fear of police arrest or defamation lawsuits, but taking bribes to vote is NOT protected (Sita Soren 2024).',
    textSnippet: 'Subject to the provisions of this Constitution and to the rules and standing orders regulating the procedure of Parliament, there shall be freedom of speech in Parliament... No member of Parliament shall be liable to any proceedings in any court in respect of anything said or any vote given by him in Parliament...',
    realWorldScenario: 'An MP takes a ₹50 lakh bribe from a lobbyist to ask a parliamentary question in the Lok Sabha. When CBI files a corruption FIR, the MP claims absolute immunity under Article 105(2). Can the MP be prosecuted? Yes! The 7-judge Constitution Bench in Sita Soren (2024) overruled the PV Narasimha Rao verdict and held bribery is not protected under Article 105.',
    prosecutionNote: 'Crucial for Anti-Corruption and Prosecution Officers: Bribery of MPs/MLAs under the Prevention of Corruption Act, 1988 is complete the moment the bribe is accepted; Article 105(2) immunity does NOT shield criminal corruption.',
    clauses: [
      {
        clause: '105(1) Freedom of Speech in Parliament',
        explanation: 'Broader than Article 19(1)(a); not subject to 19(2) reasonable restrictions, but subject only to the constitutional rules of procedure and Article 121 (ban on discussing conduct of judges).',
        example: 'Speech on the floor of the Lok Sabha cannot be sued for criminal defamation.'
      },
      {
        clause: '105(2) Absolute Immunity for Speeches and Votes',
        explanation: 'No MP can be prosecuted in any court for anything said or any vote given in Parliament or its committees.',
        example: 'Overruled regarding bribery: Taking a bribe to cast a vote is punishable under PC Act (Sita Soren).'
      },
      {
        clause: '105(3) Other Privileges (Contempt of the House)',
        explanation: 'Parliament has power to punish members and outsiders for contempt or breach of privilege, including expulsion from the House (Raja Ram Pal).',
        example: 'Expelling an MP for cash-for-query misconduct.'
      }
    ],
    exceptions: [
      'Conduct of Supreme Court or High Court judges cannot be discussed in Parliament except on an impeachment motion (Article 121).',
      'Bribery and criminal corruption have no constitutional immunity (Sita Soren v. Union of India 2024).'
    ],
    landmarkCases: [
      {
        caseName: 'Sita Soren v. Union of India',
        year: 2024,
        bench: '7-Judge Bench (Unanimous)',
        summary: 'CJI Chandrachud unanimously overruled P.V. Narasimha Rao (1998); held that parliamentarians accepting bribes for speeches or votes cannot claim immunity under Articles 105(2) or 194(2). The offence of bribery is complete upon taking the bribe.',
        significance: 'Historic 2024 ruling purging corruption from parliamentary privilege.'
      },
      {
        caseName: 'Raja Ram Pal v. Hon’ble Speaker, Lok Sabha (Cash for Query)',
        year: 2007,
        bench: '5-Judge Bench',
        summary: 'Upheld Parliament’s power to expel members guilty of unethical conduct, while affirming that parliamentary actions remain subject to limited judicial review for gross illegality.',
        significance: 'Balanced legislative privilege with judicial review.'
      },
      {
        caseName: 'M.S.M. Sharma v. Sri Krishna Sinha (Searchlight Case)',
        year: 1959,
        bench: 'Constitution Bench',
        summary: 'Held that legislative privilege under Article 194/105 prevails over freedom of speech under Article 19(1)(a) regarding reporting expunged proceedings.',
        significance: 'Classic benchmark on legislative privilege vs media reporting.'
      }
    ],
    doctrineLinks: ['Parliamentary Privilege', 'Bribery Non-Immunity Doctrine', 'Internal Autonomy of Legislature']
  },
  {
    number: '110',
    title: 'Definition of "Money Bills"',
    summary: 'Strictly defines Money Bills as statutes dealing exclusively with taxation, government borrowing, and Consolidated Fund expenditures. Speaker’s certification is conclusive.',
    plainEnglish: 'A Money Bill deals only with taxes, government borrowing, or state treasury funds. The Rajya Sabha cannot reject it or stall it for more than 14 days, and the Lok Sabha Speaker decides whether a bill is a Money Bill.',
    textSnippet: 'A Bill shall be deemed to be a Money Bill if it contains only provisions dealing with all or any of the following matters, namely:— (a) the imposition, abolition, remission, alteration or regulation of any tax; (b) the regulation of the borrowing of money... (e) the declaring of any expenditure to be expenditure charged on the Consolidated Fund of India...',
    realWorldScenario: 'The Central Government introduces a sweeping Aadhaar surveillance and identification law as a "Money Bill" because it involves subsidies from the Consolidated Fund. Opposition challenges this, claiming non-fiscal surveillance clauses violate Article 110. The Supreme Court in the Aadhaar Case majority upheld it, but the question was referred to a 7-Judge Bench.',
    prosecutionNote: 'Prosecution in public financial offences and budget appropriations must verify that statutory levies are properly enacted under Article 110/117 fiscal procedures.',
    clauses: [
      {
        clause: 'The Word "Only" in Article 110(1)',
        explanation: 'A bill is a Money Bill if it contains ONLY fiscal matters specified in sub-clauses (a) to (g). If non-financial extraneous matters are bundled, it cannot be classified as a Money Bill.',
        example: 'Finance Act introducing new income tax slabs and customs rates.'
      },
      {
        clause: '110(3) Speaker’s Certificate Conclusive',
        explanation: 'The decision of the Speaker of the Lok Sabha on whether a Bill is a Money Bill is final. However, courts can examine whether the Speaker’s decision is colorable or in patent violation of constitutional provisions.',
        example: 'Speaker endorses Money Bill certificate before sending to Rajya Sabha.'
      },
      {
        clause: 'Rajya Sabha’s 14-Day Limit',
        explanation: 'Under Article 109, Rajya Sabha cannot reject or amend a Money Bill; it can only make recommendations within 14 days. If not returned in 14 days, the bill is deemed passed by both Houses.',
        example: 'Lok Sabha can accept or reject any Rajya Sabha recommendation.'
      }
    ],
    exceptions: ['Fines, local municipal taxes, or license fees are expressly excluded from being Money Bills under 110(2).'],
    landmarkCases: [
      {
        caseName: 'Justice K.S. Puttaswamy (Aadhaar-5J.) v. Union of India',
        year: 2018,
        bench: '5-Judge Bench',
        summary: 'Majority upheld the certification of the Aadhaar Act as a Money Bill under Article 110 because Section 7 linked authentication to government welfare subsidies; Chandrachud, J. dissented, calling it a fraud on the Constitution.',
        significance: 'High-water mark of constitutional litigation over Money Bill certification.'
      },
      {
        caseName: 'Rojer Mathew v. South Indian Bank Ltd.',
        year: 2019,
        bench: '5-Judge Bench',
        summary: 'Referred the question of whether passing tribunal restructuring laws via a Money Bill violates Article 110 to a 7-Judge Constitution Bench.',
        significance: 'Kept alive the constitutional check on executive Money Bill bypass.'
      }
    ],
    doctrineLinks: ['Money Bill Taxonomy', 'Speaker’s Conclusive Certificate', 'Bicameral Check & Rajya Sabha Role']
  },
  {
    number: '111',
    title: 'Assent to Bills and Presidential Veto Powers',
    summary: 'Governs the final legislative step: Presidential Assent. Details the three types of presidential veto: Absolute Veto, Suspensive Veto, and Pocket Veto.',
    plainEnglish: 'No bill passed by Parliament becomes law until the President signs it. The President can sign, send it back once for reconsideration, or quietly sit on it without signing.',
    textSnippet: 'When a Bill has been passed by the Houses of Parliament, it shall be presented to the President, and the President shall declare either that he assents to the Bill, or that he withholds assent therefrom: Provided that the President may, as soon as possible... return the Bill... for reconsideration...',
    realWorldScenario: 'Parliament passes a controversial Postal Bill allowing police to intercept private mail without warrant. President Zail Singh does not sign it, does not return it, and does not reject it—he simply keeps it on his desk until the government falls. This is the classic Indian "Pocket Veto" under Article 111.',
    prosecutionNote: 'A statute is not enforceable in criminal courts until Presidential Assent is granted and published in the Official Gazette.',
    clauses: [
      {
        clause: 'Three Options Before President',
        explanation: '(1) Give assent (Bill becomes an Act); (2) Withhold assent (Absolute Veto - rare, used when government resigns); (3) Return the Bill for reconsideration (Suspensive Veto - cannot be used for Money Bills).',
        example: 'Returning an electoral ordinance for reconsideration.'
      },
      {
        clause: 'Mandatory Assent on Second Passage',
        explanation: 'If the Bill is passed again by both Houses, with or without amendment, the President "shall not withhold assent therefrom".',
        example: 'Parliament re-passes a returned bill; President must sign.'
      },
      {
        clause: 'Pocket Veto (Constitutional Silence)',
        explanation: 'The Constitution prescribes no time limit for the President to give assent ("as soon as possible"). Keeping a bill pending indefinitely is a pocket veto.',
        example: 'Indian Post Office (Amendment) Bill, 1986.'
      }
    ],
    exceptions: ['President cannot return a Money Bill for reconsideration under Article 111 proviso.'],
    landmarkCases: [
      {
        caseName: 'State of Punjab v. Principal Secretary to Governor',
        year: 2023,
        bench: '3-Judge Bench',
        summary: 'CJI Chandrachud analyzed the parallel gubernatorial assent power under Article 200; held that constitutional heads cannot indefinitely sit on bills passed by elected legislatures.',
        significance: 'Set strict constitutional parameters preventing pocket veto abuse.'
      }
    ],
    doctrineLinks: ['Presidential Assent', 'Veto Powers Taxonomy', 'Suspensive vs Pocket Veto']
  },

  // CHAPTER III: LEGISLATIVE POWERS OF PRESIDENT
  {
    number: '123',
    title: 'Power of President to Promulgate Ordinances',
    summary: 'Empowers the President to promulgate temporary Ordinances when Parliament is not in session. Subject to strict expiry 6 weeks from parliamentary reassembly.',
    plainEnglish: 'If Parliament is on recess and an urgent emergency occurs, the President can issue an Ordinance with the same power as an Act of Parliament. But it dies in 6 weeks once Parliament reconvenes.',
    textSnippet: 'If at any time, except when both Houses of Parliament are in session, the President is satisfied that circumstances exist which render it necessary for him to take immediate action, he may promulgate such Ordinances as the circumstances appear to him to require.',
    realWorldScenario: 'Parliament is in recess and a sudden pandemic requires immediate national containment and budget allocation. The President promulgates an Epidemic Ordinance. This is a legitimate use of Article 123. But repeatedly re-promulgating the same ordinance without tabling it in Parliament is a fraud on the Constitution (Krishna Kumar Singh).',
    prosecutionNote: 'Criminal offences created by an Ordinance lapse if the Ordinance expires, but offences committed during its validity remain punishable unless the Ordinance provided otherwise.',
    clauses: [
      {
        clause: '123(1) Pre-Conditions for Ordinance',
        explanation: '(1) Both Houses of Parliament must NOT be in session (or at least one House is not in session); (2) President must be "satisfied" that immediate emergency circumstances exist.',
        example: 'Promulgating emergency economic stabilization rules during inter-session.'
      },
      {
        clause: '123(2) Equal Force with Act of Parliament',
        explanation: 'Has the same force and effect as an Act of Parliament. Must be laid before both Houses upon reassembly. Automatically ceases to operate 6 weeks after reassembly.',
        example: 'Maximum life of an Ordinance without re-promulgation is 6 months + 6 weeks (7.5 months).'
      },
      {
        clause: '123(3) Subject to Fundamental Rights',
        explanation: 'An Ordinance cannot violate Part III Fundamental Rights or alter the Basic Structure, exactly like an ordinary parliamentary statute.',
        example: 'An ordinance infringing free speech is void under Article 13.'
      }
    ],
    exceptions: ['Cannot be promulgated when both Houses of Parliament are actively in session.'],
    landmarkCases: [
      {
        caseName: 'Krishna Kumar Singh v. State of Bihar',
        year: 2017,
        bench: '7-Judge Bench',
        summary: 'Held that re-promulgation of ordinances without placing them before the legislature is a subversion of the democratic process and a fraud on the Constitution. The President’s satisfaction under Article 123 is subject to judicial review.',
        significance: 'Historic 7-judge ruling striking down ordinance raj.'
      },
      {
        caseName: 'D.C. Wadhwa v. State of Bihar',
        year: 1987,
        bench: '5-Judge Bench',
        summary: 'Struck down the practice of the Bihar Governor re-promulgating 256 ordinances over 14 years without passing legislation; held it was a constitutional fraud.',
        significance: 'Established that ordinance power is an exceptional emergency device, not a parallel legislative track.'
      },
      {
        caseName: 'A.K. Roy v. Union of India (National Security Ordinance)',
        year: 1982,
        bench: '5-Judge Bench',
        summary: 'Upheld the constitutional validity of the National Security Ordinance; affirmed that the President’s ordinance power is co-extensive with legislative power and amenable to judicial review for mala fides.',
        significance: 'Confirmed that ordinances are subject to judicial scrutiny.'
      }
    ],
    doctrineLinks: ['Ordinance Engine', 'Fraud on the Constitution', 'Judicial Review of Executive Satisfaction']
  },

  // CHAPTER IV: THE UNION JUDICIARY (SUPREME COURT)
  {
    number: '124',
    title: 'Establishment and Constitution of the Supreme Court (Collegium System)',
    summary: 'The constitutional blueprint of the apex judiciary. Governs the appointment of the Chief Justice and Supreme Court judges through the Collegium, qualifications, and impeachment removal.',
    plainEnglish: 'Establishes the Supreme Court of India. Judges are appointed by the President through the Collegium (CJI + 4 senior-most judges) and can only be removed by Parliament through a rigorous impeachment process.',
    textSnippet: 'There shall be a Supreme Court of India consisting of a Chief Justice of India and, until Parliament by law prescribes a larger number, of not more than thirty-three other Judges... Every Judge of the Supreme Court shall be appointed by the President by warrant under his hand and seal on the recommendation of the National Judicial Appointments Commission [Collegium]...',
    realWorldScenario: 'Parliament passes the 99th Constitutional Amendment creating the NJAC (giving the Law Minister and civil society a veto in appointing judges). The Supreme Court strikes it down in the NJAC Case (2015), ruling that judicial primacy in judge appointments is part of the Basic Structure under Article 124 read with Article 50.',
    prosecutionNote: 'Judges enjoy complete security of tenure up to age 65; salary and allowances are charged on the Consolidated Fund under Article 112(3)(d) and cannot be varied to their disadvantage.',
    clauses: [
      {
        clause: 'The Collegium System (Second & Third Judges Cases)',
        explanation: 'Consultation with the CJI in Article 124(2) means "concurrence". The CJI’s recommendation reflects the collective opinion of the 4 senior-most puisne judges of the Supreme Court.',
        example: 'Seniority convention: Senior-most judge of the SC is appointed Chief Justice of India.'
      },
      {
        clause: '124(3) Qualifications for SC Judge',
        explanation: 'Must be a citizen of India and: (a) At least 5 years a High Court Judge; OR (b) At least 10 years an advocate in a High Court; OR (c) In the opinion of the President, a distinguished jurist.',
        example: 'Direct elevation of distinguished advocates (e.g. Justice Rohinton Nariman, Justice U.U. Lalit).'
      },
      {
        clause: '124(4) & (5) Impeachment Removal Procedure',
        explanation: 'A judge can only be removed by an order of the President passed after an address by each House of Parliament supported by a Special Majority (majority of total membership + 2/3rd present and voting) on proven misbehaviour or incapacity.',
        example: 'Judges (Inquiry) Act, 1968 governs the 3-member judicial investigation committee.'
      }
    ],
    exceptions: ['Retirement age is 65 years. Retired SC judges are barred from pleading in any court in India (124(7)).'],
    landmarkCases: [
      {
        caseName: 'Supreme Court Advocates-on-Record Association v. Union of India (Second Judges Case)',
        year: 1993,
        bench: '9-Judge Bench',
        summary: 'Overruled S.P. Gupta (First Judges Case); held that "consultation" means "concurrence", establishing the primacy of the Chief Justice and the Collegium system in judicial appointments.',
        significance: 'Birthed the modern judicial Collegium system.'
      },
      {
        caseName: 'Supreme Court Advocates-on-Record Association v. Union of India (NJAC Case)',
        year: 2015,
        bench: '5-Judge Bench',
        summary: 'Struck down the 99th Constitutional Amendment and the NJAC Act as unconstitutional; held that judicial primacy in appointments is an essential facet of judicial independence and the Basic Structure.',
        significance: 'Resurrected the Collegium system against executive encroachment.'
      }
    ],
    doctrineLinks: ['Independence of Judiciary', 'Collegium System', 'Judicial Primacy in Appointments']
  },
  {
    number: '129',
    title: 'Supreme Court to be a Court of Record (Contempt Powers)',
    summary: 'Declares the Supreme Court a Court of Record with perpetual memory and evidentiary validity, possessing inherent power to punish for contempt of itself.',
    plainEnglish: 'The Supreme Court’s records are permanent legal truth. It has the constitutional power to fine or jail anyone who scandalises the court, attacks its authority, or disobeys its orders.',
    textSnippet: 'The Supreme Court shall be a court of record and shall have all the powers of such a court including the power to punish for contempt of itself.',
    realWorldScenario: 'An advocate or politician makes malicious, unsubstantiated allegations that Supreme Court judges take bribes for judgments. Can the Supreme Court initiate suo motu contempt proceedings? Yes! Under Article 129, the Court has inherent power to punish for criminal contempt to preserve public faith in the administration of justice.',
    prosecutionNote: 'Contempt powers under Article 129 are inherent constitutional powers; they cannot be restricted or abrogated even by the Contempt of Courts Act, 1971 (Zahira Habibullah Sheikh).',
    clauses: [
      {
        clause: 'Court of Record Characteristics',
        explanation: '(1) Its acts and judicial proceedings are enrolled for a perpetual memory and testimony; (2) Its records possess unquestioned evidentiary value and cannot be questioned when presented in any lower court; (3) Inherent power to punish for contempt.',
        example: 'Citing a certified Supreme Court judgment as conclusive proof of the law.'
      },
      {
        clause: 'Civil vs Criminal Contempt',
        explanation: 'Civil contempt: Willful disobedience to any judgment, decree, or order; Criminal contempt: Publication that scandalises the court, prejudices judicial proceedings, or obstructs the administration of justice.',
        example: 'In re Prashant Bhushan (2020) criminal contempt proceedings.'
      }
    ],
    exceptions: ['Fair and temperate criticism of judgments after delivery does not amount to contempt.'],
    landmarkCases: [
      {
        caseName: 'Delhi Judicial Service Association v. State of Gujarat',
        year: 1991,
        bench: '5-Judge Bench',
        summary: 'Held that the Supreme Court’s contempt power under Article 129 extends not only to contempt of itself, but also to contempt of all subordinate courts and tribunals across India.',
        significance: 'Affirmed the Supreme Court as the ultimate protector of the entire national judicial hierarchy.'
      }
    ],
    doctrineLinks: ['Court of Record', 'Inherent Contempt Jurisdiction', 'Scandalising the Court']
  },
  {
    number: '131',
    title: 'Original Jurisdiction of the Supreme Court in Federal Disputes',
    summary: 'Vests exclusive original jurisdiction in the Supreme Court to decide legal disputes between the Government of India and one or more States, or between two or more States.',
    plainEnglish: 'If the Central Government and a State Government (or two different States) get into a legal fight over constitutional powers or funds, only the Supreme Court can decide the case.',
    textSnippet: 'Subject to the provisions of this Constitution, the Supreme Court shall, to the exclusion of any other court, have original jurisdiction in any dispute— (a) between the Government of India and one or more States; or (b) between the Government of India and any State or States on one side and one or more other States on the other; or (c) between two or more States...',
    realWorldScenario: 'The State of Kerala files an Original Suit under Article 131 against the Union Government challenging the constitutionality of the Citizenship (Amendment) Act, 2019, or state borrowing limits under Article 293. This can only be heard by the Supreme Court.',
    prosecutionNote: 'Article 131 suits must involve a question of legal right, not purely political controversy. Private citizens cannot be parties to an Article 131 suit.',
    clauses: [
      {
        clause: 'Exclusive Federal Forum',
        explanation: 'High Courts have zero jurisdiction over Centre-State or Inter-State legal disputes. The dispute must involve a question of legal right (statutory or constitutional).',
        example: 'State of West Bengal v. Union of India (1963) challenging central Coal Bearing Areas Act.'
      }
    ],
    exceptions: [
      'Inter-State river water disputes excluded under Article 262.',
      'Matters referred to the Finance Commission under Article 280.',
      'Pre-constitutional treaties or covenants excluded under Article 131 proviso.'
    ],
    landmarkCases: [
      {
        caseName: 'State of Karnataka v. Union of India',
        year: 1977,
        bench: '7-Judge Bench',
        summary: 'Held that an Article 131 suit is maintainable when a State challenges the Centre’s power to appoint an inquiry commission against the State Chief Minister; affirmed expansive federal jurisdiction.',
        significance: 'The landmark interpretation of "legal right" in federal disputes.'
      }
    ],
    doctrineLinks: ['Federal Original Jurisdiction', 'Exclusive Forum Doctrine']
  },
  {
    number: '136',
    title: 'Special Leave to Appeal by the Supreme Court (SLP Plenary Power)',
    summary: 'The sweeping safety-valve jurisdiction of the Supreme Court. Grants discretion to grant special leave to appeal against any judgment, decree, sentence, or order of any court or tribunal in India.',
    plainEnglish: 'The Supreme Court can agree to hear an appeal against ANY decision of ANY court or tribunal in India if it believes grave injustice was done. It is an extraordinary, discretionary power.',
    textSnippet: 'Notwithstanding anything in this Chapter, the Supreme Court may, in its discretion, grant special leave to appeal from any judgment, decree, determination, sentence or order in any cause or matter passed or made by any court or tribunal in the territory of India.',
    realWorldScenario: 'A trial court convicts an innocent person of murder, and the High Court erroneously confirms the conviction. Even if statutory appeals are exhausted, the convict can file a Special Leave Petition (SLP) under Article 136. If gross miscarriage of justice is shown, the Supreme Court intervenes and acquits.',
    prosecutionNote: 'The most frequent battleground for Prosecuting Officers: (1) SLP is not a matter of right; it is a discretionary remedy; (2) The Supreme Court does not re-appreciate concurrent findings of fact unless perversity or shock to judicial conscience is demonstrated.',
    clauses: [
      {
        clause: 'Plenary Discretionary Jurisdiction',
        explanation: 'Unrestricted by subject-matter: covers civil, criminal, constitutional, tax, labour, and company matters. Can be invoked against interim orders as well as final judgments.',
        example: 'SLP filed against a High Court bail cancellation order.'
      },
      {
        clause: 'Two-Stage SLP Process',
        explanation: 'Stage 1: Hearing on Special Leave (determining whether a substantial legal question or grave injustice exists); Stage 2: Post-grant appellate hearing on merits.',
        example: 'Dismissal in limine at Stage 1 leaves the lower court order intact without creating Article 141 precedent.'
      }
    ],
    exceptions: ['Does not apply to any judgment, determination, sentence or order passed by any court or tribunal constituted by or under any law relating to the Armed Forces (Court Martial - Art 136(2)).'],
    landmarkCases: [
      {
        caseName: 'Pritam Singh v. The State',
        year: 1950,
        bench: 'Constitution Bench',
        summary: 'Fazl Ali, J. established the guiding principle of Article 136: It is an extraordinary power to be exercised sparingly and in exceptional cases only, where grave and substantial injustice has been done.',
        significance: 'The foundational benchmark governing the exercise of SLP discretion.'
      },
      {
        caseName: 'Kunhayammed v. State of Kerala',
        year: 2000,
        bench: '3-Judge Bench',
        summary: 'Formulated the Doctrine of Merger: Dismissal of an SLP in limine (without reasons) does not merge the lower court order, but a speaking dismissal or post-leave decision merges into a binding SC decree.',
        significance: 'Clarified the precedential effect of SLP dismissal orders.'
      }
    ],
    doctrineLinks: ['Plenary Discretionary Power', 'Doctrine of Merger', 'Safety Valve of Constitutional Justice']
  },
  {
    number: '141',
    title: 'Law Declared by Supreme Court to be Binding on All Courts (Stare Decisis)',
    summary: 'Codifies the Doctrine of Precedent in India. Mandates that the law declared by the Supreme Court shall be binding on all courts within the territory of India.',
    plainEnglish: 'When the Supreme Court rules on a point of law, that ruling becomes the supreme binding law for every High Court, District Court, Magistrate, and Tribunal in India.',
    textSnippet: 'The law declared by the Supreme Court shall be binding on all courts within the territory of India.',
    realWorldScenario: 'A Magistrate tries a bail application under the new BNSS. The defence cites the Supreme Court’s Satender Kumar Antil (2022) ruling. Can the Magistrate ignore the Supreme Court ruling and create their own bail rule? No! Under Article 141, the Magistrate is constitutionally bound to follow the Supreme Court ruling.',
    prosecutionNote: 'Core knowledge for every prosecutor: (1) Only the ratio decidendi (reason for decision) is binding under Art 141; obiter dicta carries persuasive weight; (2) A larger bench overrules a smaller bench; (3) A ruling delivered per incuriam (in ignorance of binding statute or larger precedent) loses binding authority.',
    clauses: [
      {
        clause: 'The "Law Declared" Principle',
        explanation: 'Encompasses deliberate constitutional interpretations, statutory constructions, and formulated judicial tests. The Supreme Court itself is not bound by its own past decisions (Bengal Immunity).',
        example: 'Puttaswamy privacy tests or Maneka Gandhi fair procedure rule.'
      },
      {
        clause: 'Prospective Overruling',
        explanation: 'Supreme Court can rule that its declaration of law will apply only to future cases without invalidating concluded past trials and contracts (Golak Nath & Baburam).',
        example: 'Preventing mass chaos in finalized tax assessments.'
      }
    ],
    exceptions: ['The Supreme Court itself is not bound by its earlier judgments; it can overrule them in larger benches (Bengal Immunity Co. v. State of Bihar).'],
    landmarkCases: [
      {
        caseName: 'Bengal Immunity Co. Ltd. v. State of Bihar',
        year: 1955,
        bench: '7-Judge Bench',
        summary: 'Held that while Article 141 makes SC law binding on all courts in India, the Supreme Court is not bound by its own previous decisions and can reconsider and overrule its earlier rulings to correct errors.',
        significance: 'Preserved the evolutionary dynamism of Supreme Court jurisprudence.'
      },
      {
        caseName: 'State of U.P. v. Synthetics and Chemicals Ltd.',
        year: 1991,
        bench: '2-Judge Bench',
        summary: 'Held that a decision rendered per incuriam (in ignorance of a statute or binding precedent) or sub silentio (without conscious deliberation on the legal point) does not constitute binding law under Article 141.',
        significance: 'Defined the per incuriam exception to Article 141 stare decisis.'
      }
    ],
    doctrineLinks: ['Doctrine of Stare Decisis', 'Ratio Decidendi vs Obiter Dicta', 'Per Incuriam Exception', 'Prospective Overruling']
  },
  {
    number: '142',
    title: 'Enforcement of Decrees and Orders; Power to do "Complete Justice"',
    summary: 'Vests inherent, plenary constitutional power in the Supreme Court to pass any decree or make any order necessary for doing complete justice in any cause or matter pending before it.',
    plainEnglish: 'The Supreme Court can bypass procedural hurdles and technicalities to deliver complete, substantive justice where ordinary law falls short or leaves a vacuum.',
    textSnippet: 'The Supreme Court in the exercise of its jurisdiction may pass such decree or make such order as is necessary for doing complete justice in any cause or matter pending before it, and any decree so passed or order so made shall be enforceable throughout the territory of India...',
    realWorldScenario: 'A marriage has irretrievably broken down for 15 years, but one spouse refuses to consent to mutual divorce. Under the Hindu Marriage Act, "irretrievable breakdown" is not an express statutory ground. Can the Supreme Court grant a divorce? Yes! Under Article 142, the Supreme Court dissolves the marriage to do "complete justice" (Shilpa Sailesh 2023).',
    prosecutionNote: 'Article 142 cannot be used to subvert express substantive statutory prohibitions (Supreme Court Bar Association). It created the remedy of Curative Petitions under Rupa Ashok Hurra (2002).',
    clauses: [
      {
        clause: 'Complete Justice Mandate',
        explanation: 'Enables the apex court to craft innovative remedies, fill legislative voids, order monetary compensation for fundamental rights violations, and resolve systemic deadlocks.',
        example: 'Formulating Vishaka workplace sexual harassment guidelines or cancelling 214 coal block allocations.'
      },
      {
        clause: 'Curative Petition Remedy (Rupa Ashok Hurra)',
        explanation: 'From Article 142, the Supreme Court derived the power of Curative Petitions—a final remedy after review dismissal to prevent gross miscarriage of justice or bias.',
        example: 'Curative petition heard by 3 senior-most judges + original bench judges.'
      }
    ],
    exceptions: ['Article 142 cannot be used to directly override express substantive statutory provisions (Supreme Court Bar Association v. Union of India).'],
    landmarkCases: [
      {
        caseName: 'Union Carbide Corporation v. Union of India (Bhopal Gas Tragedy)',
        year: 1991,
        bench: '5-Judge Bench',
        summary: 'Upheld $470 million mass settlement; held that Article 142 power is not bound by statutory provisions and is limited only by express constitutional prohibitions.',
        significance: 'Historic assertion of limitless remedial power under Article 142.'
      },
      {
        caseName: 'Supreme Court Bar Association v. Union of India',
        year: 1998,
        bench: '5-Judge Bench',
        summary: 'Overruled Vinay Chandra Mishra; held that Article 142 cannot be used to build a new edifice where the legislature has already built one. It cannot punish an advocate by suspending their license contrary to the Advocates Act.',
        significance: 'Calibrated Article 142 by preventing it from overriding substantive statutory schemes.'
      },
      {
        caseName: 'Rupa Ashok Hurra v. Ashok Hurra',
        year: 2002,
        bench: '5-Judge Bench',
        summary: 'Invented the remedy of "Curative Petition" under Article 142 to cure gross miscarriage of justice or violation of natural justice after a review petition has been dismissed.',
        significance: 'The ultimate post-review constitutional safety valve in Indian jurisprudence.'
      }
    ],
    doctrineLinks: ['Complete Justice Plenary Power', 'Curative Petition Jurisprudence', 'Remedial Activism']
  },
  {
    number: '143',
    title: 'Power of President to Consult Supreme Court (Advisory Jurisdiction)',
    summary: 'Empowers the President to refer questions of law or public importance to the Supreme Court for its consultative advisory opinion.',
    plainEnglish: 'If the Central Government faces a massive constitutional question or international treaty dilemma, the President can ask the Supreme Court for formal legal advice.',
    textSnippet: 'If at any time it appears to the President that a question of law or fact has arisen, or is likely to arise, which is of such a nature and of such public importance that it is expedient to obtain the opinion of the Supreme Court upon it, he may refer the question to that Court for consideration and the Court may, after such hearing as it thinks fit, report to the President its opinion thereon.',
    realWorldScenario: 'Can the President seek the Supreme Court’s advice on the constitutional validity of a proposed bill before enacting it? Yes! In In re Special Courts Bill (1978), the President referred the draft bill to the Supreme Court under Article 143 to test its procedural fairness under Article 21.',
    prosecutionNote: 'Advisory opinions under Article 143 are not binding "judgments" under Article 141, but they carry immense persuasive authority and are uniformly respected across all Indian courts.',
    clauses: [
      {
        clause: '143(1) Question of Law or Fact of Public Importance',
        explanation: 'The Supreme Court "may" report its opinion (it is not bound to answer if the reference is academic, political, or improper).',
        example: 'In re Kerala Education Bill (1958) and 2G Spectrum Presidential Reference (2012).'
      },
      {
        clause: '143(2) Pre-Constitutional Treaties & Covenants',
        explanation: 'Disputes arising out of pre-1950 treaties excluded under Article 131. In 143(2) references, the Supreme Court "shall" report its opinion (mandatory).',
        example: 'Reference regarding historic princely state merger covenants.'
      }
    ],
    exceptions: ['Supreme Court can refuse to answer a 143(1) reference if political, vague, or improper (Ayodhya Reference 1994).'],
    landmarkCases: [
      {
        caseName: 'In re Special Courts Bill',
        year: 1978,
        bench: '7-Judge Bench',
        summary: 'Chandrachud, CJI held that while advisory opinions are not binding judgments under Article 141, they carry highest persuasive value; examined due process standards under Article 21 for special courts.',
        significance: 'The leading precedent outlining the nature and value of advisory opinions.'
      },
      {
        caseName: 'M. Ismail Faruqui v. Union of India (Ayodhya Reference)',
        year: 1994,
        bench: '5-Judge Bench',
        summary: 'The Supreme Court refused to answer the Presidential Reference inquiring whether a Hindu temple stood before the Babri Masjid, holding that historical factual disputes cannot be resolved via Art 143.',
        significance: 'Confirmed that the Supreme Court can decline to answer an inappropriate Article 143(1) reference.'
      }
    ],
    doctrineLinks: ['Advisory Jurisdiction', 'Presidential Reference', 'Judicial Discretion to Decline']
  },

  // CHAPTER V: COMPTROLLER AND AUDITOR-GENERAL (CAG)
  {
    number: '148',
    title: 'Comptroller and Auditor-General of India (CAG)',
    summary: 'Establishes the independent constitutional guardian of public funds. Dr. Ambedkar called the CAG the most important officer in the Constitution of India.',
    plainEnglish: 'The CAG is the nation’s supreme auditor. Independent from the government, the CAG inspects every rupee spent by the Central and State Governments to ensure public money is not looted.',
    textSnippet: 'There shall be a Comptroller and Auditor-General of India who shall be appointed by the President by warrant under his hand and seal and shall only be removed from office in like manner and on the like grounds as a Judge of the Supreme Court.',
    realWorldScenario: 'Can the Finance Minister sack the CAG because an audit report exposed corruption in a highway project? No! Under Article 148(1), the CAG can only be removed through Parliamentary impeachment like a Supreme Court judge.',
    prosecutionNote: 'CAG audit reports tabled under Article 151 are primary investigative baselines for Anti-Corruption, CBI, and PAC (Public Accounts Committee) proceedings.',
    clauses: [
      {
        clause: 'Constitutional Independence Guarantees',
        explanation: '(1) Appointed by President; (2) Removed only by Parliamentary impeachment; (3) Ineligible for further government office after retirement (148(4)); (4) Salary charged on Consolidated Fund (148(6)).',
        example: 'Security of tenure protecting fearless public audit.'
      }
    ],
    exceptions: ['CAG audits accounts, but cannot veto executive expenditure policies in advance.'],
    landmarkCases: [
      {
        caseName: 'Arvind Gupta v. Union of India',
        year: 2013,
        bench: '2-Judge Bench',
        summary: 'Upheld the CAG’s constitutional authority to conduct performance audits to verify whether public funds were utilized efficiently and economically, and not just formal voucher auditing.',
        significance: 'Validated modern performance and propriety auditing by the CAG.'
      }
    ],
    doctrineLinks: ['Guardian of the Public Purse', 'Constitutional Accountability', 'Performance Auditing']
  }
];
