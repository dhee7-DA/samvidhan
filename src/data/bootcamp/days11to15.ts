import type { BootcampDay } from './bootcampTypes';

export const BOOTCAMP_DAYS_11_TO_15: BootcampDay[] = [
  // ==========================================
  // DAY 11: SERVICES, TRIBUNALS & ELECTIONS
  // ==========================================
  {
    dayNumber: 11,
    title: 'Services, Tribunals & Elections (Articles 308–329A)',
    subtitle: 'Civil Service Safeguards (Article 311), Tribunalization, Election Commission Autonomy & Voter Integrity',
    phase: 'Phase 2: The State Machinery, Judiciary & Criminal Jurisdiction',
    estimatedHours: 6,
    targetArticles: ['Article 309', 'Article 310', 'Article 311', 'Article 323A', 'Article 323B', 'Article 324', 'Article 326', 'Article 329'],
    overview: 'Day 11 explores the public administrative apparatus and democratic machinery: the Doctrine of Pleasure under Article 310, constitutional protections against arbitrary dismissal under Article 311(2) and its 3 exceptions in Tulsiram Patel, judicial review of Administrative Tribunals in L. Chandra Kumar, Election Commission selection under the landmark 2023 Constitution Bench in Anoop Baranwal, and electoral disqualifications in Lily Thomas.',
    coreConcepts: [
      {
        heading: 'Doctrine of Pleasure & Article 311 Civil Service Shield',
        articleAnchor: 'Articles 310 & 311',
        synopsis: 'Civil servants hold office during the pleasure of the President or Governor (Article 310). However, Article 311 acts as an enforceable constitutional shield against arbitrary dismissal, removal, or reduction in rank.',
        substantiveLaw: [
          'Article 311(1): A civil servant cannot be dismissed or removed by an authority subordinate to that by which he was appointed.',
          'Article 311(2): Mandatory reasonable opportunity of being heard (departmental inquiry with right to defend, cross-examine, and produce witnesses).',
          'The 3 Constitutional Exceptions under Proviso to 311(2): (a) Conviction on a criminal charge; (b) Where the disciplinary authority records reasons in writing that it is not reasonably practicable to hold an inquiry; (c) Where the President/Governor is satisfied that in the interest of the security of the State it is not expedient to hold such inquiry (Union of India v. Tulsiram Patel 1985 5-Judge Bench).'
        ],
        prosecutionAngle: 'Prosecuting officers are civil servants under the State Home Department governed directly by Article 311 disciplinary frameworks.'
      },
      {
        heading: 'Administrative Tribunals & Basic Structure',
        articleAnchor: 'Articles 323A & 323B',
        synopsis: 'Inserted by the 42nd Amendment Act, 1976 to relieve court congestion in service disputes (CAT/SAT) and specialized taxation/labor matters.',
        substantiveLaw: [
          'S.P. Sampath Kumar (1987 5-Judge Bench): Initially suggested Tribunals could be effective substitutes for High Courts.',
          'L. Chandra Kumar v. Union of India (1997 7-Judge Constitution Bench): OVERRULED Sampath Kumar. Struck down clause 2(d) of Article 323A which excluded High Court jurisdiction.',
          'Held: Tribunals are supplementary, not substitutional. Decisions of Administrative Tribunals are subject to judicial scrutiny before a Division Bench of the High Court under Articles 226/227.'
        ],
        prosecutionAngle: 'Governs service conditions, transfers, seniority disputes, and disciplinary penalties of police and prosecution officers.'
      },
      {
        heading: 'Election Commission Independence & Electoral Reform',
        articleAnchor: 'Articles 324–329',
        synopsis: 'Superintendence, direction, and control of elections vest in the Election Commission of India (ECI). Adult suffrage is guaranteed under Article 326.',
        substantiveLaw: [
          'T.N. Seshan v. Union of India (1995 5-Judge Bench): Election Commissioners are on par with the Chief Election Commissioner; ECI decisions are collegial by majority vote.',
          'Anoop Baranwal v. Union of India (2023 5-Judge Constitution Bench): Ruled that until Parliament enacts a law, appointment of CEC and ECs must be made by a committee comprising the Prime Minister, Leader of Opposition in Lok Sabha, and the Chief Justice of India to ensure political neutrality.',
          'Lily Thomas (2013): Struck down Section 8(4) RPA; convicted legislators are disqualified immediately.'
        ],
        prosecutionAngle: 'Essential for enforcing Model Code of Conduct violations, prosecuting electoral corrupt practices (bribery, booth capturing), and defending election offenses.'
      }
    ],
    landmarkEvolutionPairs: [
      {
        subject: 'Appointment & Independence of Election Commission of India',
        classicCase: {
          name: 'T.N. Seshan, CEC of India v. Union of India',
          year: 1995,
          bench: '5-Judge Bench (Ahmadi CJI)',
          ratio: 'Upheld multi-member Election Commission; held CEC and Election Commissioners are equal in status and decisions must be made by consensus or majority.'
        },
        modernCase: {
          name: 'Anoop Baranwal v. Union of India',
          year: 2023,
          bench: '5-Judge Constitution Bench (KM Joseph J)',
          ratio: 'Insulated ECI from executive monopoly. Mandated an independent selection committee (PM, Leader of Opposition, and CJI) to appoint CEC and ECs under Article 324(2).'
        },
        examApplicationNote: 'Cite Anoop Baranwal (2023) alongside subsequent parliamentary legislation (CEC Act 2023) when answering questions on institutional autonomy.'
      }
    ],
    dictionaryTerms: [
      'Doctrine of Pleasure', 'Civil Post', 'Reasonable Opportunity', 'Tribunalization', 'Substitutional vs Supplementary',
      'Superintendence of Elections', 'Model Code of Conduct', 'Adult Suffrage', 'Office of Profit', 'Sanction for Prosecution',
      'Disciplinary Proceedings', 'Departmental Inquiry', 'Quorum', 'Ultra Vires', 'Natural Justice'
    ],
    svgConceptType: 'services-tribunals',
    caseStudy: {
      title: 'Dismissal of Sub-Inspector Without Inquiry on Security Grounds',
      factualMatrix: 'Sub-Inspector Z of the J&K Police was suspected by state intelligence of leaking sensitive patrol schedules to anti-national elements. The Director General of Police (DGP) issued an order under Section 126 of the J&K Police Act read with Proviso (b) to Article 311(2) of the Constitution, dismissing SI Z from service with immediate effect without holding any regular departmental inquiry. The dismissal order simply recorded: "The undersigned is satisfied under Proviso (b) to Article 311(2) that in view of the sensitivity of border operations and grave intimidation of witnesses, it is not reasonably practicable to hold a departmental inquiry". SI Z challenged the dismissal order before the Central Administrative Tribunal (CAT) and subsequently before the High Court under Article 226, contending that: (1) The DGP did not record independent, objective factual material proving why witnesses could not be protected; (2) Proviso (b) cannot be invoked arbitrarily to bypass the natural justice requirements of Article 311(2); and (3) The ruling in Union of India v. Tulsiram Patel (1985) requires subjective satisfaction to be based on verifiable objective facts.',
      framingQuestions: [
        '1. What are the strict legal conditions governing the dispensation of an inquiry under Proviso (b) to Article 311(2) as settled in Union of India v. Tulsiram Patel (1985)?',
        '2. Is the "subjective satisfaction" of the disciplinary authority that an inquiry is "not reasonably practicable" subject to judicial review?',
        '3. Can the High Court under Article 226 quash the dismissal order if the recorded reasons are vague, subjective, or lack factual nexus?'
      ],
      statutoryApplicability: ['Article 311(2) Proviso (b)', 'Union of India v. Tulsiram Patel (1985)', 'Article 226', 'Jaswant Singh v. State of Punjab (1991)'],
      modelAnswer: '1. CONDITIONS FOR INVOKING PROVISO (B) TO ARTICLE 311(2): Under Article 311(2) Proviso (b), the requirement of a departmental inquiry can only be dispensed with if the disciplinary authority records reasons in writing that it is "not reasonably practicable" to hold such inquiry. In Union of India v. Tulsiram Patel (1985 5-Judge Bench), the Supreme Court ruled that dispensing with an inquiry is an exceptional power. The condition of it not being reasonably practicable is not a magical formula; there must be real, insurmountable obstacles (e.g. violent terror atmosphere where witnesses are being assassinated, total breakdown of civil administration).\n\n2. JUDICIAL REVIEW OF RECORDED REASONS: In Jaswant Singh v. State of Punjab (1991) and Chief Security Officer v. Singasan Rabi Das (1991), the Supreme Court held that while the decision is based on subjective satisfaction, the existence of objective material is justiciable. The disciplinary authority must place verifiable evidence on record showing why inquiry was impossible. Mere stereotyped recitals that "witnesses are afraid" without specific instances of threat or witness tampering is fatal to the order.\n\n3. ILLEGALITY OF THE DISMISSAL: Here, the DGP recorded vague recitals without recording any specific incident of witness intimidation or exploring secure/in-camera inquiry methods. The dismissal bypasses the constitutional shield of Article 311(2) without objective foundation. The High Court will quash the dismissal order, order reinstatement of SI Z without back wages pending inquiry, and direct the Department to conduct a regular inquiry with proper procedural safeguards.',
      markingRubric: [
        { criterion: 'Application of Union of India v. Tulsiram Patel (1985 5-Judge Bench)', marks: 4 },
        { criterion: 'Justiciability of recorded reasons under Jaswant Singh (1991)', marks: 3 },
        { criterion: 'Remedy of quashing and direction for regular departmental inquiry', marks: 3 }
      ]
    },
    mcqs: [
      {
        id: 'd11-q1',
        question: 'Under the landmark 5-Judge Constitution Bench ruling in Anoop Baranwal v. Union of India (2023), who did the Supreme Court mandate shall be on the selection committee for appointing the Chief Election Commissioner and Election Commissioners?',
        options: ['Prime Minister, Union Law Minister, and Speaker of Lok Sabha', 'Prime Minister, Leader of the Opposition in Lok Sabha, and the Chief Justice of India', 'Chief Justice of India and two senior-most Supreme Court Judges', 'Cabinet Secretary, Home Secretary, and Law Secretary'],
        correctIndex: 1,
        explanation: 'In Anoop Baranwal (2023), the Constitution Bench held that to ensure institutional neutrality under Article 324(2), appointments of CEC and ECs must be made on the recommendation of a Committee consisting of the Prime Minister, the Leader of the Opposition in Lok Sabha, and the Chief Justice of India.',
        articleRef: 'Article 324(2)',
        difficulty: 'Foundational'
      },
      {
        id: 'd11-q2',
        question: 'In Union of India v. Tulsiram Patel (1985 5-Judge Bench), what did the Supreme Court hold regarding the three exceptions under the second Proviso to Article 311(2)?',
        options: ['The exceptions are unconstitutional and violate natural justice', 'The exceptions are constitutionally valid, and where any of the three clauses applies, the requirement of reasonable opportunity of hearing is completely excluded', 'Civil servants can never be dismissed without Supreme Court permission', 'The exceptions only apply during National Emergency'],
        correctIndex: 1,
        explanation: 'The 5-Judge Bench held that the second proviso to Article 311(2) expressly excludes the audi alteram partem rule where an employee is convicted on criminal charges, where inquiry is not reasonably practicable, or in the interest of state security.',
        articleRef: 'Article 311(2)',
        difficulty: 'Foundational'
      },
      {
        id: 'd11-q3',
        question: 'Under Article 311(1), a member of a civil service of the Union or an all-India service or a civil service of a State cannot be dismissed or removed by:',
        options: ['Any police officer', 'An authority subordinate to that by which he was appointed', 'The Public Service Commission', 'The State Governor'],
        correctIndex: 1,
        explanation: 'Article 311(1) provides: "No person who is a member of a civil service... shall be dismissed or removed by an authority subordinate to that by which he was appointed."',
        articleRef: 'Article 311(1)',
        difficulty: 'Foundational'
      },
      {
        id: 'd11-q4',
        question: 'Under Article 310(1), members of the defence services, civil services, and all-India services hold office during the:',
        options: ['Pleasure of the Prime Minister', 'Pleasure of the President or the Governor of the State, as the case may be', 'Pleasure of the Chief Justice of India', 'Discretion of the Union Public Service Commission'],
        correctIndex: 1,
        explanation: 'Article 310(1) embodies the Doctrine of Pleasure: defense and civil servants of the Union hold office during the pleasure of the President, while civil servants of a State hold office during the pleasure of the Governor.',
        articleRef: 'Article 310(1)',
        difficulty: 'Foundational'
      },
      {
        id: 'd11-q5',
        question: 'In L. Chandra Kumar v. Union of India (1997 7-Judge Bench), what was the authoritative constitutional ruling regarding Administrative Tribunals established under Article 323A and 323B?',
        options: ['Tribunals can completely replace High Courts and their orders can only be appealed to the Supreme Court', 'Tribunals are subject to the supervisory and writ jurisdiction of the High Courts under Articles 226/227; appeals from Tribunals must go before a Division Bench of the High Court', 'Tribunals were declared unconstitutional and abolished', 'Tribunals can only decide motor accident claims'],
        correctIndex: 1,
        explanation: 'The 7-Judge Bench struck down provisions excluding High Court jurisdiction, ruling that all decisions of Tribunals under Articles 323A and 323B are subject to the scrutiny of a Division Bench of the respective High Court under Articles 226/227.',
        articleRef: 'Articles 323A & 323B & Article 226',
        difficulty: 'Foundational'
      },
      {
        id: 'd11-q6',
        question: 'Under Article 324(5), how can the Chief Election Commissioner (CEC) of India be removed from office?',
        options: ['By executive order of the Prime Minister', 'In like manner and on the like grounds as a Judge of the Supreme Court (proved misbehaviour or incapacity via Parliamentary address)', 'By a resolution passed by the Rajya Sabha alone', 'By the President at his sole personal pleasure'],
        correctIndex: 1,
        explanation: 'Article 324(5) Proviso provides that the Chief Election Commissioner shall not be removed from office except in like manner and on the like grounds as a Judge of the Supreme Court.',
        articleRef: 'Article 324(5)',
        difficulty: 'Foundational'
      },
      {
        id: 'd11-q7',
        question: 'Can an Election Commissioner or a Regional Commissioner be removed from office without the recommendation of the Chief Election Commissioner under Article 324(5)?',
        options: ['Yes, by the President at any time', 'No, they shall not be removed from office except on the recommendation of the Chief Election Commissioner', 'Only with approval of the Law Commission', 'Only through a no-confidence vote in Lok Sabha'],
        correctIndex: 1,
        explanation: 'Article 324(5) specifically provides that an Election Commissioner or Regional Commissioner shall not be removed from office except on the recommendation of the Chief Election Commissioner.',
        articleRef: 'Article 324(5)',
        difficulty: 'Intermediate'
      },
      {
        id: 'd11-q8',
        question: 'Which constitutional provision guarantees that elections to the House of the People and Legislative Assemblies of States shall be on the basis of Adult Suffrage?',
        options: ['Article 324', 'Article 325', 'Article 326', 'Article 327'],
        correctIndex: 2,
        explanation: 'Article 326 states: "The elections to the House of the People and to the Legislative Assembly of every State shall be on the basis of adult suffrage."',
        articleRef: 'Article 326',
        difficulty: 'Foundational'
      },
      {
        id: 'd11-q9',
        question: 'Which constitutional amendment lowered the voting age for elections to the Lok Sabha and State Legislative Assemblies from 21 years to 18 years under Article 326?',
        options: ['42nd Amendment Act, 1976', '44th Amendment Act, 1978', '61st Constitutional Amendment Act, 1988', '73rd Amendment Act, 1992'],
        correctIndex: 2,
        explanation: 'The 61st Constitutional Amendment Act, 1988 amended Article 326 to reduce the voting age from 21 years to 18 years.',
        articleRef: 'Article 326',
        difficulty: 'Foundational'
      },
      {
        id: 'd11-q10',
        question: 'Under Article 329(b), how can an election to either House of Parliament or to a State Legislature be called in question?',
        options: ['By filing a police FIR for electoral malpractice', 'Only by an Election Petition presented to such authority and in such manner as provided by law (High Court under RPA 1951)', 'By appealing to the President within 30 days', 'By submitting a memorandum to the Governor'],
        correctIndex: 1,
        explanation: 'Article 329(b) bars ordinary court interference in electoral matters, providing that no election shall be called in question except by an election petition presented in accordance with the Representation of the People Act, 1951.',
        articleRef: 'Article 329(b)',
        difficulty: 'Intermediate'
      },
      {
        id: 'd11-q11',
        question: 'In Mohinder Singh Gill v. Chief Election Commissioner (1978 5-Judge Bench), the Supreme Court ruled on the scope of Article 324 plenary powers. What was held?',
        options: ['ECI has zero power where no specific legislation exists', 'Article 324 is a reservoir of plenary executive and regulatory power for the conduct of free and fair elections where enacted laws are silent, subject to the rule of law', 'ECI can suspend the Constitution during elections', 'ECI is subordinate to the Cabinet during polling'],
        correctIndex: 1,
        explanation: 'Krishna Iyer J held that Article 324 operates as a vast reservoir of power enabling the Election Commission to act in unforeseen contingencies to maintain the purity of elections where statutory laws are silent.',
        articleRef: 'Article 324',
        difficulty: 'Intermediate'
      },
      {
        id: 'd11-q12',
        question: 'Under Article 312, Parliament can by law create one or more All-India Services common to the Union and the States, provided which mandatory resolution is passed?',
        options: ['Lok Sabha passes a resolution by absolute majority', 'Council of States (Rajya Sabha) declares by resolution supported by not less than two-thirds of members present and voting that it is necessary in the national interest', 'All 28 States pass joint resolutions', 'President issues an emergency proclamation'],
        correctIndex: 1,
        explanation: 'Article 312(1) confers a special federal power on the Rajya Sabha: an All-India Service can only be created if Rajya Sabha passes a resolution supported by a 2/3rd majority of members present and voting.',
        articleRef: 'Article 312',
        difficulty: 'Foundational'
      },
      {
        id: 'd11-q13',
        question: 'In Parshotam Lal Dhingra v. Union of India (1958), the Supreme Court held that the constitutional protections of Article 311 apply to:',
        options: ['Permanent civil servants only', 'Both permanent and temporary/probationary civil servants, if the termination amounts to punishment or casts a stigma', 'Private company executives', 'Defense personnel in active combat'],
        correctIndex: 1,
        explanation: 'The Supreme Court ruled that Article 311 protects both permanent and temporary civil servants if the termination of service is punitive or casts an indelible stigma upon their career.',
        articleRef: 'Article 311',
        difficulty: 'Intermediate'
      },
      {
        id: 'd11-q14',
        question: 'Which of the following bodies is charged with advising the Union Government on all matters relating to recruitment, promotions, and disciplinary matters under Article 320?',
        options: ['Staff Selection Commission (SSC)', 'Union Public Service Commission (UPSC)', 'Central Vigilance Commission (CVC)', 'NITI Aayog'],
        correctIndex: 1,
        explanation: 'Article 320 defines the functions of Public Service Commissions, mandating that the UPSC shall be consulted on all matters relating to methods of recruitment, principles of promotion, and disciplinary matters.',
        articleRef: 'Article 320',
        difficulty: 'Foundational'
      },
      {
        id: 'd11-q15',
        question: 'Under Article 316, the Chairman and other members of a State Public Service Commission are appointed by whom, and can be removed by whom under Article 317?',
        options: ['Appointed by Governor; removed by Governor', 'Appointed by Governor; removed ONLY by the President of India on reference to the Supreme Court', 'Appointed by Chief Minister; removed by High Court', 'Appointed by President; removed by Parliament'],
        correctIndex: 1,
        explanation: 'Under Article 316, members of a State PSC are appointed by the Governor. However, under Article 317, they can ONLY be removed by the President of India on grounds of misbehaviour after an inquiry by the Supreme Court.',
        articleRef: 'Articles 316 & 317',
        difficulty: 'Intermediate'
      },
      {
        id: 'd11-q16',
        question: 'In Union of India v. Association for Democratic Reforms (ADR 2002), what did the Supreme Court hold regarding the Model Code of Conduct (MCC) and candidate disclosures?',
        options: ['Candidates have a constitutional right to hide their assets', 'Voters have a Fundamental Right under Article 19(1)(a) to know candidates\' criminal antecedents, assets, liabilities, and educational qualifications', 'Only tax officers can inspect candidate assets', 'Disclosure forms are optional for independent candidates'],
        correctIndex: 1,
        explanation: 'The Supreme Court held that freedom of speech and expression includes the voter\'s right to an informed vote, mandating sworn affidavits disclosing assets, liabilities, and criminal cases.',
        articleRef: 'Article 19(1)(a) & Article 324',
        difficulty: 'Foundational'
      },
      {
        id: 'd11-q17',
        question: 'Under Article 325, no person shall be ineligible for inclusion in any general electoral roll for any constituency on grounds only of:',
        options: ['Education or wealth', 'Religion, race, caste, sex or any of them', 'Criminal history', 'Age or employment status'],
        correctIndex: 1,
        explanation: 'Article 325 ensures a single non-discriminatory electoral roll: no person shall be ineligible on grounds only of religion, race, caste, sex or any of them.',
        articleRef: 'Article 325',
        difficulty: 'Foundational'
      },
      {
        id: 'd11-q18',
        question: 'What is the consequence if the President or Governor dismisses a civil servant under Proviso (c) to Article 311(2) in the "interest of the security of the State"?',
        options: ['The inquiry is dispensed with, and reasons for dispensing need NOT be disclosed in the order if prejudicial to state security', 'The employee is immediately transferred to a foreign embassy', 'The employee must be awarded 10 years salary', 'The order requires ratification by the United Nations'],
        correctIndex: 0,
        explanation: 'Under Proviso (c) to Article 311(2), the satisfaction of the President or Governor on state security grounds dispenses with inquiry, and reasons need not be recorded in the order if security would be compromised.',
        articleRef: 'Article 311(2) Proviso (c)',
        difficulty: 'Intermediate'
      },
      {
        id: 'd11-q19',
        question: 'In Gujarat Assembly Election Case (Special Reference 1 of 2002), the Supreme Court ruled on the interplay between Article 174 (maximum 6-month gap between legislative sessions) and Article 324 (ECI power to conduct elections). What was held?',
        options: ['Article 174 overrides Article 324 and elections must be held in 6 months even during riots', 'Article 174 applies to a live functioning Assembly, not a dissolved Assembly; ECI has the constitutional responsibility under Article 324 to conduct elections when conditions are conducive', 'Elections must be held within 30 days of dissolution', 'President must appoint a military administrator'],
        correctIndex: 1,
        explanation: 'The Constitution Bench held that Article 174(1) does not apply to a dissolved Assembly; ECI under Article 324 decides the election schedule to ensure free and fair polls.',
        articleRef: 'Article 174 & Article 324',
        difficulty: 'Case Law / Advanced'
      },
      {
        id: 'd11-q20',
        question: 'Under Article 315, can two or more States agree by resolution to establish a Joint State Public Service Commission (JSPSC)?',
        options: ['No, each State must have its own separate commission', 'Yes, Parliament may by law provide for the appointment of a Joint State Public Service Commission for those States', 'Only with approval of the Inter-State Council', 'Only during President\'s Rule under Article 356'],
        correctIndex: 1,
        explanation: 'Article 315(2) enables Parliament by law to establish a Joint State Public Service Commission to serve the needs of two or more States pursuant to resolutions passed by their respective Legislatures.',
        articleRef: 'Article 315(2)',
        difficulty: 'Intermediate'
      }
    ]
  },

  // ==========================================
  // DAY 12: EMERGENCY, ARTICLE 370 & J&K REORGANISATION
  // ==========================================
  {
    dayNumber: 12,
    title: 'Emergency Provisions, Article 370 & J&K Reorganisation (Parts XVIII & XXI)',
    subtitle: 'National Emergency, President\'s Rule (Bommai 1994) & The 2023 Article 370 5-Judge Constitution Bench',
    phase: 'Phase 3: Emergency, J&K Special Provisions, Doctrines & Lineage',
    estimatedHours: 6,
    targetArticles: ['Article 352', 'Article 356', 'Article 358', 'Article 359', 'Article 360', 'Article 370', 'J&K Reorganisation Act, 2019'],
    overview: 'Day 12 focuses on national crisis governance and the territorial sovereignty of India: National Emergency under Article 352 (post-44th Amendment safeguards), President\'s Rule under Article 356 with the classic 9-Judge Bench in S.R. Bommai (1994), non-suspendable rights under Article 359, the complete historical progression of Article 370 (C.O. 272/273), the J&K Reorganisation Act 2019, repeal of the RPC, enforcement of BNS/BNSS/BSA, and the definitive 2023 5-Judge Constitution Bench ruling in In re: Article 370.',
    coreConcepts: [
      {
        heading: 'National Emergency (Article 352) & The 44th Amendment Firewall',
        articleAnchor: 'Articles 352, 358 & 359',
        synopsis: 'National Emergency can be proclaimed on grounds of War, External Aggression, or Armed Rebellion. The 44th Amendment, 1978 introduced strict democratic firewalls to prevent abuse.',
        substantiveLaw: [
          'Substituted "Armed Rebellion" for the vague term "Internal Disturbance".',
          'Mandatory written recommendation of the Union Cabinet (not Prime Minister alone).',
          'Special Majority approval within 1 month (and periodic 6-month renewal).',
          'Article 358: Article 19 is suspended automatically ONLY when Emergency is declared on war/external aggression, NOT armed rebellion.',
          'Article 359: Articles 20 (criminal safeguards) and 21 (life and personal liberty) CAN NEVER be suspended under any circumstances.',
          'Minerva Mills (1980): The proclamation of Emergency is subject to judicial review for mala fides.'
        ],
        prosecutionAngle: 'Essential for evaluating curfew orders, exceptional detention regimes, and maintaining Article 20/21 rights during civil unrest.'
      },
      {
        heading: 'President\'s Rule (Article 356) & The Bommai Framework',
        articleAnchor: 'Article 356',
        synopsis: 'Article 356 deals with the failure of constitutional machinery in a State. Historically abused by central ruling parties, it was disciplined by the 9-Judge Constitution Bench in S.R. Bommai (1994).',
        substantiveLaw: [
          'S.R. Bommai v. Union of India (1994 9-Judge Bench): Article 356 is an emergency provision, not a political weapon. Subject to strict judicial review.',
          'Legislative Assembly cannot be dissolved until Parliament approves the Presidential proclamation under Article 356(3) within 2 months.',
          'Court has power to restore the dismissed State Government and revive the dissolved Legislative Assembly if the proclamation is found mala fide (as done in Uttarakhand 2016 and Arunachal Pradesh 2016).',
          'Floor Test is the ONLY legitimate forum to test a Chief Minister\'s legislative majority, not the Governor\'s subjective assessment.'
        ],
        prosecutionAngle: 'Directly impacts state governance, central policing directives, and prosecution jurisdiction during President\'s Rule.'
      },
      {
        heading: 'Article 370 & The 2023 Constitution Bench Abrogation Benchmark',
        articleAnchor: 'Article 370 & J&K Reorganisation Act, 2019',
        synopsis: 'Article 370 was a temporary provision born out of the 1947 Instrument of Accession. On August 5–6, 2019, Constitutional Orders 272 and 273 were issued, repealing J&K\'s separate constitution and applying the Indian Constitution in entirety.',
        substantiveLaw: [
          'C.O. 272: Amended Article 367 to interpret "Constituent Assembly of the State" as "Legislative Assembly of the State".',
          'C.O. 273: Declaration that Article 370 shall cease to be operative.',
          'J&K Reorganisation Act, 2019: Reconstituted the State into two Union Territories: UT of Jammu & Kashmir (with legislature) and UT of Ladakh (without legislature).',
          'In re: Article 370 of the Constitution (Dec 2023 5-Judge Constitution Bench, Unanimous, CJI Chandrachud): (1) J&K retained NO internal sovereignty upon signing the Instrument of Accession; (2) Article 370 was always a "temporary provision" as reflected by its placement in Part XXI; (3) President had constitutional power to declare Article 370 inoperative without Constituent Assembly concurrence (which was dissolved in 1957); (4) Upheld application of the Indian Constitution in entirety to J&K.'
        ],
        prosecutionAngle: 'The cardinal J&K syllabus subject: the total replacement of the Ranbir Penal Code (RPC) and J&K CrPC by BNS, BNSS, and BSA stems directly from this constitutional integration.'
      }
    ],
    landmarkEvolutionPairs: [
      {
        subject: 'Article 370 Status & Territorial Integration of Jammu & Kashmir',
        classicCase: {
          name: 'Prem Nath Kaul (1959) & Sampat Prakash (1969)',
          year: 1969,
          bench: '5-Judge Bench (Hidayatullah CJI)',
          ratio: 'Observed that Article 370 continued to operate even after the dissolution of the J&K Constituent Assembly in 1957.'
        },
        modernCase: {
          name: 'In re: Article 370 of the Constitution (Dec 2023 Bench)',
          year: 2023,
          bench: '5-Judge Constitution Bench (Unanimous, CJI Chandrachud)',
          ratio: 'Affirmed abrogation. Held J&K held no internal sovereignty; Article 370 was temporary; President possessed full power to declare Article 370 inoperative under 370(3).'
        },
        examApplicationNote: 'Essential citation for any question touching J&K legal status, C.O. 272/273, and criminal law transitions.'
      }
    ],
    dictionaryTerms: [
      'Proclamation of Emergency', 'Armed Rebellion', 'President\'s Rule', 'Non-Suspendable Rights', 'Financial Emergency',
      'C.O. 272 and 273', 'Instrument of Accession', 'Internal Sovereignty', 'Constituent Assembly of J&K', 'Reorganisation of States',
      'Ranbir Penal Code', 'Floor Test', 'Mala Fide Proclamation', 'Subjective Satisfaction', 'Federal Supremacy'
    ],
    svgConceptType: 'emergency-370',
    caseStudy: {
      title: 'State Assembly Dissolution Under Article 356 Without Legislative Floor Test',
      factualMatrix: 'In a politically fractured State Legislative Assembly with 90 seats, the ruling party coalition held 47 seats. Following a policy dispute, an alliance partner with 6 MLAs withdrew support, bringing the ruling coalition strength to 41 (less than the majority threshold of 46). The Chief Minister immediately submitted an official letter to the Governor stating that his government retained the confidence of the House and requested the Governor to summon a special session of the Assembly within 3 days for a floor test. Instead of summoning the House, the Governor dispatched a report to the President stating that "governance cannot be carried on in accordance with the Constitution" and that horsetrading was imminent. The Union Cabinet advised the President to issue a proclamation under Article 356(1) dismissing the Chief Minister and dissolving the Legislative Assembly immediately. The dismissed Chief Minister challenged the Presidential Proclamation before the High Court and Supreme Court under Article 32, asserting that dissolution prior to parliamentary approval and without a floor test violated the 9-Judge Bench mandate in S.R. Bommai (1994).',
      framingQuestions: [
        '1. Can the State Legislative Assembly be dissolved simultaneously with the issuance of a Proclamation under Article 356(1) before Parliament approves the proclamation under Article 356(3)?',
        '2. Is the floor of the Legislative Assembly the sole constitutional forum to determine whether a government has lost its majority, or can the Governor assess it subjectively in Raj Bhavan?',
        '3. What constitutional relief can the Supreme Court grant if the proclamation under Article 356 is held to be mala fide and unconstitutional?'
      ],
      statutoryApplicability: ['Article 356(1)', 'Article 356(3)', 'Article 174', 'S.R. Bommai v. Union of India (1994)', 'Rameshwar Prasad (2006)'],
      modelAnswer: '1. DISSOLUTION PRIOR TO PARLIAMENTARY APPROVAL IS ILLEGAL: In S.R. Bommai v. Union of India (1994 9-Judge Bench), the Supreme Court laid down that while the President can suspend the Legislative Assembly upon issuing a proclamation under Article 356(1), the Assembly CANNOT be dissolved until both Houses of Parliament have approved the proclamation under Article 356(3) within 2 months. Immediate dissolution is an irreversible act of executive overreach designed to forestall judicial review and legislative scrutiny.\n\n2. FLOOR TEST IS MANDATORY: The 9-Judge Bench in S.R. Bommai unequivocally ruled that the floor of the House is the only constitutionally recognized forum to test the majority of a Ministry. A Governor has no authority to dismiss a government based on subjective speculation or Raj Bhavan assessments without putting the claim to test on the floor of the Assembly, especially when the Chief Minister expressly offered to face a floor test within 3 days.\n\n3. CONSTITUTIONAL REMEDY & RESTORATION: In S.R. Bommai (1994) as applied in Nabam Rebia (Arunachal Pradesh 2016) and Harish Rawat (Uttarakhand 2016), the Supreme Court established that the Court possesses full power under Article 142 and Article 32 to declare the Presidential proclamation void, restore the status quo ante, reinstate the dismissed Ministry, and revive the dissolved Legislative Assembly with a direction to conduct an immediate floor test. The Court will set aside the dissolution.',
      markingRubric: [
        { criterion: 'Application of S.R. Bommai (1994 9-Judge Bench) on pre-approval dissolution bar', marks: 4 },
        { criterion: 'Mandatory nature of floor test over subjective gubernatorial assessment', marks: 3 },
        { criterion: 'Power of the constitutional court to restore government and revive the Assembly', marks: 3 }
      ]
    },
    mcqs: [
      {
        id: 'd12-q1',
        question: 'In the landmark unanimous 5-Judge Constitution Bench ruling in In re: Article 370 of the Constitution (December 2023), what did the Supreme Court hold regarding the sovereignty of Jammu and Kashmir?',
        options: ['Jammu and Kashmir retained dual sovereignty', 'Jammu and Kashmir did NOT retain any element of internal sovereignty upon executing the Instrument of Accession in 1947, and the Indian Constitution applies in entirety', 'Article 370 became a permanent, unalterable basic feature', 'J&K had a right to secede from the Union'],
        correctIndex: 1,
        explanation: 'CJI Chandrachud for the 5-Judge Bench held that the State of J&K held no internal sovereignty after accession, and Article 370 was always a temporary provision situated in Part XXI of the Indian Constitution.',
        articleRef: 'Article 370 & Part XXI',
        difficulty: 'Foundational'
      },
      {
        id: 'd12-q2',
        question: 'Under the 2023 Article 370 judgment, what did the Supreme Court hold regarding the President\'s power to issue Constitutional Order 273 declaring Article 370 inoperative under Article 370(3)?',
        options: ['The President had no power because the J&K Constituent Assembly was dissolved in 1957', 'The President was fully empowered to declare Article 370 inoperative without the recommendation of the non-existent Constituent Assembly, as the provision was temporary', 'The President required approval of the United Nations', 'The power could only be exercised after a state referendum'],
        correctIndex: 1,
        explanation: 'The Supreme Court ruled that Article 370(3) did not become redundant upon the dissolution of the Constituent Assembly in 1957; the President retained unilateral constituent power to declare the temporary provision inoperative.',
        articleRef: 'Article 370(3)',
        difficulty: 'Intermediate'
      },
      {
        id: 'd12-q3',
        question: 'In S.R. Bommai v. Union of India (1994 9-Judge Bench), what did the Supreme Court rule regarding the dissolution of a State Legislative Assembly under Article 356?',
        options: ['The Assembly is dissolved automatically the moment the Governor sends a report', 'The Assembly can only be suspended initially, and CANNOT be dissolved until both Houses of Parliament approve the proclamation under Article 356(3)', 'The Assembly can be dissolved at any time by the Prime Minister', 'Judiciary cannot review Article 356 dissolutions'],
        correctIndex: 1,
        explanation: 'The 9-Judge Bench held that the Legislative Assembly can only be suspended, and dissolution cannot take place until Parliament approves the proclamation within 2 months under Article 356(3).',
        articleRef: 'Article 356(3)',
        difficulty: 'Foundational'
      },
      {
        id: 'd12-q4',
        question: 'Which constitutional amendment substituted the words "armed rebellion" for the original vague phrase "internal disturbance" in Article 352 for declaring a National Emergency?',
        options: ['42nd Amendment Act, 1976', '44th Constitutional Amendment Act, 1978', '52nd Amendment Act, 1985', '86th Amendment Act, 2002'],
        correctIndex: 1,
        explanation: 'The 44th Constitutional Amendment Act, 1978 substituted "armed rebellion" for "internal disturbance" in Article 352 to prevent political misuse of emergency provisions.',
        articleRef: 'Article 352(1)',
        difficulty: 'Foundational'
      },
      {
        id: 'd12-q5',
        question: 'Under Article 352(3) inserted by the 44th Amendment, the President can issue a proclamation of National Emergency ONLY when:',
        options: ['Advised verbally by the Prime Minister', 'The decision of the Union Cabinet (Prime Minister and other Ministers of Cabinet rank) that such a Proclamation may be issued has been communicated to him in WRITING', 'The Chief Justice of India concurs in writing', 'All State Governors pass unanimous resolutions'],
        correctIndex: 1,
        explanation: 'Article 352(3) requires a written recommendation from the Union Cabinet, eliminating unilateral decisions by the Prime Minister alone.',
        articleRef: 'Article 352(3)',
        difficulty: 'Foundational'
      },
      {
        id: 'd12-q6',
        question: 'A proclamation of National Emergency under Article 352 must be approved by both Houses of Parliament within what time limit, and by what majority?',
        options: ['Within 6 months by simple majority', 'Within 1 month by a Special Majority (majority of total membership and not less than 2/3rds of members present and voting)', 'Within 14 days by Lok Sabha only', 'Within 2 months by absolute majority'],
        correctIndex: 1,
        explanation: 'Under Article 352(4) and (6), the proclamation ceases to operate after 1 month unless approved by both Houses of Parliament by a Special Majority.',
        articleRef: 'Article 352(4) & (6)',
        difficulty: 'Intermediate'
      },
      {
        id: 'd12-q7',
        question: 'Under Article 358, the automatic suspension of Fundamental Freedoms under Article 19 occurs ONLY when a National Emergency is declared on which ground?',
        options: ['Armed rebellion', 'War or external aggression', 'Financial instability', 'Internal communal clashes'],
        correctIndex: 1,
        explanation: 'Article 358 explicitly provides that Article 19 is suspended automatically ONLY when Emergency is proclaimed on grounds of war or external aggression, and NOT on the ground of armed rebellion.',
        articleRef: 'Article 358',
        difficulty: 'Intermediate'
      },
      {
        id: 'd12-q8',
        question: 'Under Article 359, which Fundamental Rights are immune from suspension even during a National Emergency proclaimed by the President?',
        options: ['Articles 14 and 19', 'Articles 19 and 21', 'Articles 20 and 21', 'Articles 21 and 22'],
        correctIndex: 2,
        explanation: 'By virtue of the 44th Amendment Act, 1978, Article 359(1) bars the suspension of the right to move any court for the enforcement of the rights conferred by Article 20 and Article 21.',
        articleRef: 'Article 359(1)',
        difficulty: 'Foundational'
      },
      {
        id: 'd12-q9',
        question: 'What is the maximum duration for which President\'s Rule under Article 356 can remain in force in a State, with periodic 6-month Parliamentary approvals?',
        options: ['1 year', '3 years (beyond 1 year only if National Emergency is in force or Election Commission certifies difficulty in holding elections)', '5 years', 'Indefinite at the pleasure of the President'],
        correctIndex: 1,
        explanation: 'Article 356(4) and (5) establish that President\'s Rule cannot exceed 3 years in total, and continuation beyond 1 year is subject to strict conditions (National Emergency or ECI certification).',
        articleRef: 'Article 356(4) & (5)',
        difficulty: 'Intermediate'
      },
      {
        id: 'd12-q10',
        question: 'Which constitutional provision governs the proclamation of "Financial Emergency" in India?',
        options: ['Article 352', 'Article 356', 'Article 360', 'Article 365'],
        correctIndex: 2,
        explanation: 'Article 360 empowers the President to proclaim a Financial Emergency if he is satisfied that the financial stability or credit of India or any part thereof is threatened.',
        articleRef: 'Article 360',
        difficulty: 'Foundational'
      },
      {
        id: 'd12-q11',
        question: 'How many times has a Financial Emergency under Article 360 been proclaimed in India since the commencement of the Constitution in 1950?',
        options: ['Once (during the 1991 balance of payments crisis)', 'Twice (1965 and 1975)', 'Never (Zero times)', 'Three times'],
        correctIndex: 2,
        explanation: 'Financial Emergency under Article 360 has NEVER been declared in India till date.',
        articleRef: 'Article 360',
        difficulty: 'Foundational'
      },
      {
        id: 'd12-q12',
        question: 'Under Article 365, what is the constitutional effect if a State fails to comply with or give effect to any direction given in the exercise of the executive power of the Union?',
        options: ['The State Governor is removed', 'It shall be lawful for the President to hold that a situation has arisen in which the government of the State cannot be carried on in accordance with the provisions of this Constitution (triggering Article 356)', 'The Union Government can withhold GST disbursements permanently', 'The State Legislature is fined Rs 10 Crores'],
        correctIndex: 1,
        explanation: 'Article 365 creates a legal fiction: non-compliance with lawful Union executive directions empowers the President to conclude that constitutional machinery has failed under Article 356.',
        articleRef: 'Article 365 & Article 356',
        difficulty: 'Intermediate'
      },
      {
        id: 'd12-q13',
        question: 'In Rameshwar Prasad v. Union of India (Bihar Assembly Dissolution Case, 2006 5-Judge Bench), the Supreme Court struck down the dissolution of the Bihar Assembly under Article 356 because:',
        options: ['The Governor acted with extreme haste and mala fides to prevent a political party from staking a claim to form a government', 'The Assembly had completed its 5-year tenure', 'Bihar was under military rule', 'The Governor had no appointment order'],
        correctIndex: 0,
        explanation: 'The Supreme Court ruled that the Governor\'s report recommending dissolution to stall government formation was an abuse of power and unconstitutional, affirming the Bommai principles.',
        articleRef: 'Article 356',
        difficulty: 'Case Law / Advanced'
      },
      {
        id: 'd12-q14',
        question: 'Under the J&K Reorganisation Act, 2019, which of the following erstwhile laws was repealed, leading to the direct application of Central Criminal Laws in Jammu and Kashmir?',
        options: ['Ranbir Penal Code (RPC), Samvat 1989', 'The Indian Penal Code, 1860', 'The Code of Civil Procedure, 1908', 'The Evidence Act of Britain'],
        correctIndex: 0,
        explanation: 'The J&K Reorganisation Act, 2019 repealed the state-specific Ranbir Penal Code (RPC) and J&K CrPC, applying Central penal laws and now BNS, BNSS, and BSA.',
        articleRef: 'J&K Reorganisation Act, 2019',
        difficulty: 'Foundational'
      },
      {
        id: 'd12-q15',
        question: 'In ADM Jabalpur v. Shivkant Shukla (Habeas Corpus Case, 1976 5-Judge Bench), the majority held that during Emergency, citizens could not enforce Article 21. Which heroic judge delivered the lone dissent upholding liberty, which was later vindicated by the 44th Amendment and Puttaswamy (2017)?',
        options: ['Justice P.N. Bhagwati', 'Justice H.R. Khanna', 'Justice Y.V. Chandrachud', 'Justice A.N. Ray'],
        correctIndex: 1,
        explanation: 'Justice H.R. Khanna famously dissented, holding that the right to life and liberty is inherent to human existence and cannot be surrendered to the state even during emergency. His dissent was enshrined in the 44th Amendment and Puttaswamy (2017).',
        articleRef: 'Article 359 & Article 21',
        difficulty: 'Foundational'
      },
      {
        id: 'd12-q16',
        question: 'Under Article 353(b), during a proclamation of National Emergency, what happens to the legislative powers of Parliament regarding State List subjects?',
        options: ['Parliament cannot touch State subjects', 'Parliament gains plenary power to make laws conferring powers and imposing duties upon the Union or its officers, even on matters in the State List', 'State Legislatures are automatically dissolved', 'Laws must be cleared by the Supreme Court'],
        correctIndex: 1,
        explanation: 'Article 353(b) expands the legislative power of Parliament during an Emergency to include the power to make laws with respect to any matter, including State List subjects.',
        articleRef: 'Article 353(b)',
        difficulty: 'Intermediate'
      },
      {
        id: 'd12-q17',
        question: 'Under Article 355 of the Constitution, what is the duty of the Union towards every State?',
        options: ['To collect taxes and disburse subsidies', 'To protect every State against external aggression and internal disturbance and to ensure that the government of every State is carried on in accordance with the provisions of this Constitution', 'To maintain state police forces', 'To conduct annual census'],
        correctIndex: 1,
        explanation: 'Article 355 imposes a solemn duty on the Union: "to protect every State against external aggression and internal disturbance and to ensure that the government of every State is carried on in accordance with the provisions of this Constitution."',
        articleRef: 'Article 355',
        difficulty: 'Foundational'
      },
      {
        id: 'd12-q18',
        question: 'In the December 2023 Article 370 judgment, what direction did the Supreme Court issue to the Election Commission of India regarding the Union Territory of Jammu and Kashmir?',
        options: ['To conduct Assembly elections by September 30, 2024 and directed restoration of statehood as soon as possible', 'To permanently abolish elections in J&K', 'To merge J&K with Punjab', 'To convert Ladakh into a state'],
        correctIndex: 0,
        explanation: 'The 5-Judge Bench directed the Election Commission of India to conduct elections to the J&K Legislative Assembly by September 30, 2024, and emphasized the earliest restoration of statehood.',
        articleRef: 'Article 370 & J&K Reorganisation',
        difficulty: 'Foundational'
      },
      {
        id: 'd12-q19',
        question: 'During a Financial Emergency under Article 360, can the President direct the reduction of salaries and allowances of Supreme Court and High Court judges?',
        options: ['No, judicial salaries are protected by basic structure', 'Yes, Article 360(4)(b) explicitly authorizes the reduction of salaries and allowances of all or any class of persons serving the Union, including Judges of the Supreme Court and High Courts', 'Only if the Chief Justice of India agrees', 'Only for judges appointed after 2010'],
        correctIndex: 1,
        explanation: 'Article 360(4)(b) contains a rare exception, empowering the President to direct salary and allowance reductions for all Union and State public servants, including Judges of the Supreme Court and High Courts.',
        articleRef: 'Article 360(4)(b)',
        difficulty: 'Intermediate'
      },
      {
        id: 'd12-q20',
        question: 'In Nabam Rebia and Bamang Felix v. Deputy Speaker (2016 5-Judge Bench), the Supreme Court quashed President\'s Rule in Arunachal Pradesh primarily because:',
        options: ['The Governor had preponed the Assembly session without the aid and advice of the Council of Ministers, which was unconstitutional and vitiated the subsequent Article 356 proclamation', 'The Assembly building had collapsed', 'The state was in financial debt', 'The Chief Minister was abroad'],
        correctIndex: 0,
        explanation: 'The Supreme Court held that the Governor cannot summon or prepone Assembly sessions without Cabinet advice; actions taken in defiance of the Cabinet to engineer a government collapse rendered the Article 356 proclamation void.',
        articleRef: 'Article 174 & Article 356',
        difficulty: 'Case Law / Advanced'
      }
    ]
  },

  // ==========================================
  // DAY 13: AMENDING POWER, BASIC STRUCTURE & ALL 18 DOCTRINES
  // ==========================================
  {
    dayNumber: 13,
    title: 'Amending Power, Basic Structure & All 18 Doctrines (Article 368)',
    subtitle: 'From Shankari Prasad to Kesavananda, Ninth Schedule Judicial Scrutiny (I.R. Coelho) & Forensic Doctrines',
    phase: 'Phase 3: Emergency, J&K Special Provisions, Doctrines & Lineage',
    estimatedHours: 6,
    targetArticles: ['Article 368', 'Article 13', 'Article 31B', 'Ninth Schedule'],
    overview: 'Day 13 masterfully synthesizes the supreme constituent battle of Indian constitutional law: the scope of amending power under Article 368, the evolution of the Basic Structure Doctrine from Shankari Prasad (1951) to Kesavananda Bharati (1973) and Minerva Mills (1980), the judicial testing of the Ninth Schedule in I.R. Coelho (2007), and a complete operational review of all 18 constitutional doctrines featured in the Doctrines Hub.',
    coreConcepts: [
      {
        heading: 'The Great Constitutional Duel: Article 13 vs Article 368',
        articleAnchor: 'Articles 13 & 368',
        synopsis: 'The fundamental tension between parliamentary sovereignty and judicial review unfolded over three decades of epic constitutional litigation.',
        substantiveLaw: [
          'Shankari Prasad (1951 5-Judge Bench): Parliament can amend any part of the Constitution, including Part III Fundamental Rights. "Law" under Article 13(2) covers ordinary law, not constitutional amendments under Art 368.',
          'Sajjan Singh (1965 5-Judge Bench): Reaffirmed Shankari Prasad, but Mudholkar J presciently questioned whether the Constitution had basic unalterable features.',
          'I.C. Golak Nath (1967 11-Judge Bench, 6:5 Majority): OVERRULED Shankari Prasad. Held: Parliament CANNOT amend Fundamental Rights. "Law" under Art 13 includes constitutional amendments. Applied the doctrine of Prospective Overruling.',
          '24th Amendment Act, 1971: Parliament inserted Article 13(4) and Article 368(3) declaring that Article 13 does not apply to amendments under Article 368.'
        ],
        prosecutionAngle: 'Bedrock constitutional history: examiners test this chronological sequence in preliminary and mains exams.'
      },
      {
        heading: 'Kesavananda Bharati (1973) & The Basic Structure Doctrine',
        articleAnchor: 'Article 368',
        synopsis: 'On April 24, 1973, the largest bench in Indian legal history (13 Judges, 7:6 Majority) delivered the definitive doctrine of Indian constitutionalism.',
        substantiveLaw: [
          'Upheld 24th Amendment: Parliament possesses wide constituent power to amend any part of the Constitution, including Fundamental Rights.',
          'The Limitation: The constituent power under Article 368 does NOT extend to damaging, destroying, or altering the "Basic Structure" or essential framework of the Constitution.',
          'Core Basic Features: Supremacy of the Constitution, Republican and Democratic form of government, Secular character, Separation of Powers, Federalism, Judicial Review, and Dignity of the Individual.',
          'Subsequent Affirmations: Indira Nehru Gandhi v. Raj Narain (1975) (free and fair elections and Rule of Law); Minerva Mills (1980) (limited amending power is itself a basic feature); S.R. Bommai (1994) (Secularism and Federalism); NJAC Case (2015) (Independence of the Judiciary).'
        ],
        prosecutionAngle: 'The foundational benchmark governing every challenge to legislative amendments affecting public order, police administration, or fundamental rights.'
      },
      {
        heading: 'Ninth Schedule & The Post-1973 Judicial Review Rule (I.R. Coelho)',
        articleAnchor: 'Article 31B & Ninth Schedule',
        synopsis: 'Article 31B created the Ninth Schedule to immunize agrarian land reforms from judicial review under Part III. In 2007, a 9-Judge Bench disciplined the Ninth Schedule.',
        substantiveLaw: [
          'I.R. Coelho (Dead) By Lrs v. State of Tamil Nadu (2007 9-Judge Constitution Bench, Unanimous, Sabharwal CJI): Formulated the "Cut-Off Date Rule".',
          'Held: All laws inserted into the Ninth Schedule on or after April 24, 1973 (the date of Kesavananda judgment) are subject to judicial review.',
          'The Dual Test: If a Ninth Schedule law infringes Fundamental Rights in Part III to such an extent that it destroys the Basic Structure (Articles 14, 19, 21 as the core touchstone), it will be struck down despite Article 31B immunity.'
        ],
        prosecutionAngle: 'Prevents executive governments from dumping arbitrary police or property statutes into the 9th Schedule to escape judicial review.'
      }
    ],
    landmarkEvolutionPairs: [
      {
        subject: 'Amending Power of Parliament & Basic Structure Doctrine',
        classicCase: {
          name: 'I.C. Golak Nath v. State of Punjab',
          year: 1967,
          bench: '11-Judge Bench (6:5 Majority, Subba Rao CJI)',
          ratio: 'Held that Parliament had NO power under Article 368 to abridge or amend Fundamental Rights in Part III.'
        },
        modernCase: {
          name: 'Kesavananda Bharati v. State of Kerala',
          year: 1973,
          bench: '13-Judge Bench (7:6 Majority, Sikri CJI)',
          ratio: 'OVERRULED Golak Nath. Held Parliament can amend Part III, but formulated the Basic Structure Doctrine: amending power cannot destroy the essential framework.'
        },
        examApplicationNote: 'The most sacred and universally tested constitutional progression in Indian law.'
      }
    ],
    dictionaryTerms: [
      'Basic Structure Doctrine', 'Constituent Power', 'Prospective Overruling', 'Ninth Schedule Immunity', 'Special Majority',
      'Federal Ratification', 'Judicial Review', 'Separation of Powers', 'Rule of Law', 'Ultra Vires',
      'Doctrine of Eclipse', 'Doctrine of Severability', 'Pith and Substance', 'Colorable Legislation', 'Harmonious Construction'
    ],
    svgConceptType: 'basic-structure-ladder',
    caseStudy: {
      title: 'Constitutional Amendment Creating Total Judicial Immunity for Corruption Laws',
      factualMatrix: 'Confronted with multiple Supreme Court judgments striking down investigative shortcuts, Parliament passed the "Constitution (107th Amendment) Act, 2025" by a special majority under Article 368. The Amendment inserted a new Article 31E into the Constitution, providing: "Notwithstanding anything contained in this Constitution, no law enacted by Parliament providing for the prevention of public corruption, economic sabotage, and seizure of illicit assets shall be deemed to be void on the ground that it is inconsistent with or takes away or abridges any of the rights conferred by Article 14, Article 19, or Article 21, and no court including the Supreme Court shall have jurisdiction to question the validity of such law under Article 32 or 226". Furthermore, Parliament placed five new central and state anti-corruption statutes into the Ninth Schedule. A public interest federation challenged the 107th Amendment before the Supreme Court under Article 32, asserting that the amendment destroys Judicial Review, Separation of Powers, and the Basic Structure.',
      framingQuestions: [
        '1. Can Parliament by constitutional amendment under Article 368 completely exclude the judicial review powers of the Supreme Court and High Courts under Articles 32 and 226?',
        '2. Does Article 31E violate the Basic Structure Doctrine laid down in Kesavananda Bharati (1973) and Minerva Mills (1980)?',
        '3. Applying the 9-Judge Constitution Bench ruling in I.R. Coelho (2007), can laws inserted into the Ninth Schedule after April 24, 1973 be reviewed and struck down if they violate the Golden Triangle (Articles 14, 19, 21)?'
      ],
      statutoryApplicability: ['Article 368', 'Article 32', 'Article 226', 'Article 31B', 'Kesavananda Bharati (1973)', 'Minerva Mills (1980)', 'I.R. Coelho (2007)'],
      modelAnswer: '1. UNCONSTITUTIONALITY OF EXCLUDING JUDICIAL REVIEW: In Kesavananda Bharati (1973), Minerva Mills (1980), and L. Chandra Kumar (1997 7-Judge Bench), the Supreme Court unequivocally established that the power of Judicial Review vested in the High Courts under Articles 226/227 and the Supreme Court under Article 32 is an inviolable Basic Feature of the Constitution. An amendment that ousts judicial review completely destroys the system of constitutional checks and balances and is void ab initio.\n\n2. BREACH OF MINERVA MILLS PRINCIPLE: In Minerva Mills (1980), the Supreme Court struck down Section 4 of the 42nd Amendment which sought to give absolute primacy to all Directive Principles over Articles 14 and 19. The Court held that Parliament cannot use its limited amending power under Article 368 to convert itself into an absolute sovereign. By conferring total immunity on corruption statutes against Articles 14, 19, and 21, Article 31E destroys the Golden Triangle and damages the Basic Structure.\n\n3. APPLICATION OF I.R. COELHO (2007) DUAL TEST: In I.R. Coelho v. State of Tamil Nadu (2007 9-Judge Bench), the Supreme Court held that the Ninth Schedule does not provide a blind blanket immunity for laws inserted after April 24, 1973. If any Ninth Schedule statute violates Part III rights to such an extent that it destroys basic structure principles (such as personal liberty, non-arbitrariness, and judicial access), it will be struck down. Consequently, the Supreme Court will declare Article 31E and the Ninth Schedule immunity for these statutes unconstitutional and void.',
      markingRubric: [
        { criterion: 'Affirmation of Judicial Review as an unalterable Basic Feature under Kesavananda & L. Chandra Kumar', marks: 4 },
        { criterion: 'Application of Minerva Mills balance between fundamental rights and state goals', marks: 3 },
        { criterion: 'Application of I.R. Coelho (2007 9-Judge Bench) post-1973 Ninth Schedule test', marks: 3 }
      ]
    },
    mcqs: [
      {
        id: 'd13-q1',
        question: 'In Kesavananda Bharati v. State of Kerala (decided on April 24, 1973), what was the bench strength and the majority verdict that established the Basic Structure Doctrine?',
        options: ['9-Judge Bench; 5:4 Majority', '11-Judge Bench; 6:5 Majority', '13-Judge Bench; 7:6 Majority', '15-Judge Bench; Unanimous'],
        correctIndex: 2,
        explanation: 'Kesavananda Bharati was heard by a 13-Judge Constitution Bench (the largest ever assembled) and decided by a narrow 7:6 majority, establishing that Parliament\'s amending power under Article 368 cannot destroy the Basic Structure.',
        articleRef: 'Article 368',
        difficulty: 'Foundational'
      },
      {
        id: 'd13-q2',
        question: 'In I.R. Coelho (Dead) By Lrs v. State of Tamil Nadu (2007), what cut-off date did the 9-Judge Constitution Bench mandate for subjecting Ninth Schedule laws to judicial review under the Basic Structure test?',
        options: ['January 26, 1950', 'April 24, 1973 (date of Kesavananda judgment)', 'June 25, 1975', 'December 13, 1986'],
        correctIndex: 1,
        explanation: 'The 9-Judge Bench unanimously ruled that all laws inserted into the Ninth Schedule on or after April 24, 1973 are subject to judicial review, and if they violate fundamental rights so as to destroy the basic structure, they will be struck down.',
        articleRef: 'Article 31B & Ninth Schedule',
        difficulty: 'Foundational'
      },
      {
        id: 'd13-q3',
        question: 'In I.C. Golak Nath v. State of Punjab (1967), the 11-Judge Bench by a 6:5 majority invoked which American legal doctrine for the first time in India while declaring that Parliament cannot amend Fundamental Rights?',
        options: ['Doctrine of Pith and Substance', 'Doctrine of Prospective Overruling', 'Doctrine of Severability', 'Public Trust Doctrine'],
        correctIndex: 1,
        explanation: 'Subba Rao CJI applied the Doctrine of Prospective Overruling, holding that earlier constitutional amendments (1st, 4th, 17th) would remain valid for past acts, but Parliament would have no power to abridge Fundamental Rights prospectively.',
        articleRef: 'Article 368 & Article 13',
        difficulty: 'Intermediate'
      },
      {
        id: 'd13-q4',
        question: 'Under Article 368(2) Proviso, an amendment that seeks to change the representation of States in Parliament, the election of the President, or the High Court/Supreme Court powers requires:',
        options: ['Simple majority of Parliament only', 'Special majority of Parliament AND ratification by the Legislatures of not less than one-half of the States by resolutions', 'A national referendum of all citizens', 'Approval of the Prime Minister and Chief Justice of India'],
        correctIndex: 1,
        explanation: 'Article 368(2) Proviso mandates that amendments affecting federal provisions require a Special Majority in each House of Parliament and ratification by resolutions passed by not less than half of the State Legislatures.',
        articleRef: 'Article 368(2) Proviso',
        difficulty: 'Foundational'
      },
      {
        id: 'd13-q5',
        question: 'In Indira Nehru Gandhi v. Raj Narain (1975), the Supreme Court struck down Article 329A(4) (inserted by the 39th Amendment to validate Mrs. Gandhi\'s election) on what ground?',
        options: ['It was passed during a solar eclipse', 'It violated the Basic Structure by extinguishing Judicial Review and violating Free and Fair Elections and the Rule of Law', 'Raj Narain had withdrawn his petition', 'Parliament lacked quorum'],
        correctIndex: 1,
        explanation: 'The Constitution Bench applied the Basic Structure doctrine for the first time to strike down a constitutional amendment, holding that wiping out judicial review over a Prime Minister\'s election destroyed the Rule of Law and free democracy.',
        articleRef: 'Article 329A & Basic Structure',
        difficulty: 'Intermediate'
      },
      {
        id: 'd13-q6',
        question: 'In Minerva Mills Ltd. v. Union of India (1980), the Supreme Court struck down clauses (4) and (5) of Article 368 (inserted by the 42nd Amendment) because:',
        options: ['They gave infinite amending power to Parliament and sought to bar all judicial review of constitutional amendments', 'They reduced the term of Lok Sabha', 'They abolished the President\'s office', 'They eliminated state taxes'],
        correctIndex: 0,
        explanation: 'The Court held: "A limited amending power is one of the basic features of our Constitution and therefore, the limitations on that power cannot be destroyed." Clauses (4) and (5) sought to make amending power unlimited, violating basic structure.',
        articleRef: 'Article 368(4) & (5)',
        difficulty: 'Intermediate'
      },
      {
        id: 'd13-q7',
        question: 'The First Constitutional Amendment Act, 1951 introduced which two articles and a Schedule into the Constitution to protect land reform laws from judicial challenge?',
        options: ['Articles 15 and 16, Sixth Schedule', 'Articles 31A and 31B, Ninth Schedule', 'Articles 32 and 226, Seventh Schedule', 'Articles 352 and 356, Tenth Schedule'],
        correctIndex: 1,
        explanation: 'The 1st Amendment Act, 1951 inserted Article 31A, Article 31B, and the Ninth Schedule to shield agrarian zamindari abolition laws from challenges under Articles 14, 19, and 31.',
        articleRef: 'Articles 31A, 31B & Ninth Schedule',
        difficulty: 'Foundational'
      },
      {
        id: 'd13-q8',
        question: 'Which of the following is NOT recognized as a part of the Basic Structure of the Indian Constitution by Supreme Court jurisprudence?',
        options: ['Supremacy of the Constitution', 'Secularism and Federalism', 'Unfettered sovereign power of Parliament to amend any provision without judicial review', 'Judicial Review under Articles 32 and 226'],
        correctIndex: 2,
        explanation: 'Parliamentary sovereignty is NOT unlimited in India; constitutional supremacy prevails. Unfettered amending power was expressly rejected in Kesavananda and Minerva Mills.',
        articleRef: 'Article 368',
        difficulty: 'Foundational'
      },
      {
        id: 'd13-q9',
        question: 'Under the Doctrine of Harmonious Construction, what rule of interpretation must courts follow when two provisions of the Constitution appear to conflict with each other?',
        options: ['Strike down both provisions immediately', 'Constrain and interpret both provisions so as to give effect to both, avoiding making any provision dead, redundant, or superfluous', 'Prefer the provision with more words', 'Give absolute dominance to Directive Principles over Rights'],
        correctIndex: 1,
        explanation: 'Harmonious construction mandates that the Constitution must be read as a whole. Where two provisions conflict, courts must effect a reconciliation so that both can stand together without destroying either.',
        articleRef: 'Doctrines Hub',
        difficulty: 'Foundational'
      },
      {
        id: 'd13-q10',
        question: 'The Doctrine of Pith and Substance was borrowed into Indian constitutional jurisprudence from which jurisdiction?',
        options: ['United States Supreme Court', 'Canadian Constitution (Privy Council decisions on the British North America Act, 1867)', 'Australian High Court', 'French Constitutional Council'],
        correctIndex: 1,
        explanation: 'Pith and Substance originated in Canadian constitutional appeals before the Privy Council (e.g. Cushing v. Dupuy, Russell v. The Queen) and was adopted in India to resolve Seventh Schedule legislative conflicts.',
        articleRef: 'Article 246',
        difficulty: 'Intermediate'
      },
      {
        id: 'd13-q11',
        question: 'The Doctrine of Incidental or Ancillary Powers means that:',
        options: ['Parliament can pass laws on foreign countries', 'Power to legislate on a specific topic includes the power to legislate on all incidental and ancillary matters that are necessary to fulfill the statutory object', 'Police can create offenses without statutes', 'Judges can make tax policy'],
        correctIndex: 1,
        explanation: 'The doctrine provides that the grant of legislative power on a subject matter carries with it all necessary incidental powers to make the legislation effective and prevent evasion.',
        articleRef: 'Article 246',
        difficulty: 'Intermediate'
      },
      {
        id: 'd13-q12',
        question: 'Under the Doctrine of Territorial Nexus, a State Legislature can enact a law with extra-territorial application if which condition is met?',
        options: ['The State Governor is an officer of the Armed Forces', 'There is a real, substantial, and not illusory nexus between the State and the person, property, or transaction taxed/regulated', 'The State obtains consent from the United Nations', 'The extra-territorial tax is approved by Lok Sabha'],
        correctIndex: 1,
        explanation: 'In State of Bombay v. R.M.D. Chamarbaugwalla (1957) and Wallace Bros, the Supreme Court held that a State law with extra-territorial effect is valid if there is a real and substantial nexus between the taxing state and the transaction.',
        articleRef: 'Article 245',
        difficulty: 'Intermediate'
      },
      {
        id: 'd13-q13',
        question: 'The Doctrine of "Occupied Field" is applied to determine whether:',
        options: ['A stadium is full during sports', 'Parliament has evinced an intention to completely occupy the entire legislative subject matter under a Concurrent List entry, thereby ousting any conflicting State law', 'Police can search private agricultural lands without warrants', 'A foreign army has invaded territory'],
        correctIndex: 1,
        explanation: 'Occupied Field is a facet of Article 254 repugnancy: where a central enactment covers the whole subject matter and intends to be an exhaustive code, State legislation in that field is displaced.',
        articleRef: 'Article 254',
        difficulty: 'Intermediate'
      },
      {
        id: 'd13-q14',
        question: 'In Shankari Prasad v. Union of India (1951), the 5-Judge Bench upheld the validity of the First Amendment Act, 1951 by making what distinction regarding "law"?',
        options: ['Distinction between criminal law and civil law', 'Distinction between ordinary legislative law made under Article 246 (subject to Article 13) and constituent law made in exercise of sovereign amending power under Article 368 (exempt from Article 13)', 'Distinction between Hindi laws and English laws', 'Distinction between Union laws and State laws'],
        correctIndex: 1,
        explanation: 'Patanjali Sastri J held that Article 13(2) applies only to ordinary legislative laws, while Article 368 exercises constituent power, meaning constitutional amendments cannot be struck down under Article 13.',
        articleRef: 'Article 13 & Article 368',
        difficulty: 'Intermediate'
      },
      {
        id: 'd13-q15',
        question: 'The 106th Constitutional Amendment Act, 2023 (Nari Shakti Vandan Adhiniyam) inserted which articles to provide 33% reservation for women in Lok Sabha and State Legislative Assemblies?',
        options: ['Articles 15(3) and 16(3)', 'Articles 330A, 332A, and 334A', 'Articles 243D and 243T', 'Articles 338A and 338B'],
        correctIndex: 1,
        explanation: 'The 106th Amendment Act, 2023 inserted Article 330A (reservation for women in Lok Sabha), Article 332A (reservation for women in State Assemblies), and Article 334A (sunset clause and delimitation link).',
        articleRef: 'Articles 330A, 332A, 334A',
        difficulty: 'Foundational'
      },
      {
        id: 'd13-q16',
        question: 'Which constitutional amendment inserted Article 21A into the Constitution making elementary education a fundamental right for children aged 6 to 14?',
        options: ['44th Amendment Act, 1978', '73rd Amendment Act, 1992', '86th Constitutional Amendment Act, 2002', '91st Amendment Act, 2003'],
        correctIndex: 2,
        explanation: 'The 86th Constitutional Amendment Act, 2002 introduced Article 21A in Part III, amended Article 45 in Part IV, and added fundamental duty 51A(k) in Part IVA.',
        articleRef: 'Article 21A',
        difficulty: 'Foundational'
      },
      {
        id: 'd13-q17',
        question: 'In Waman Rao v. Union of India (1981), what did the Constitution Bench hold regarding the applicability of the Basic Structure doctrine to constitutional amendments and Ninth Schedule laws?',
        options: ['Basic structure applies only to post-1973 amendments; amendments made prior to April 24, 1973 are valid and immune from basic structure review', 'Basic structure applies retroactively back to 1950', 'Ninth Schedule is completely immune for all times', 'Basic structure does not apply to land reforms'],
        correctIndex: 0,
        explanation: 'Waman Rao established the cut-off date of April 24, 1973: constitutional amendments made before that date are treated as valid, while all subsequent amendments and 9th Schedule insertions must pass the Basic Structure test.',
        articleRef: 'Article 31B & Article 368',
        difficulty: 'Case Law / Advanced'
      },
      {
        id: 'd13-q18',
        question: 'Under the Doctrine of Res Judicata (codified in Section 11 CPC), can a writ petition dismissed by the High Court under Article 226 after a full contest on merits be filed afresh before the Supreme Court under Article 32 on the same facts?',
        options: ['Yes, Article 32 is a fundamental right and res judicata never applies to fundamental rights', 'No, in Daryao v. State of U.P. (1961), the Supreme Court held that the rule of res judicata applies to writ petitions under Article 32 to prevent multiplicity of litigation', 'Only if the Chief Justice gives permission', 'Only in tax disputes'],
        correctIndex: 1,
        explanation: 'In Daryao v. State of U.P. (1961 5-Judge Bench), the Supreme Court ruled that public policy demands finality in litigation; a citizen who loses an Article 226 petition on merits cannot re-agitate the same matter via Article 32 (though Habeas Corpus is an exception).',
        articleRef: 'Article 32 & Article 226',
        difficulty: 'Intermediate'
      },
      {
        id: 'd13-q19',
        question: 'Does the principle of Res Judicata apply to a petition for a writ of Habeas Corpus?',
        options: ['Yes, exactly like ordinary civil suits', 'No, in Ghulam Sarwar v. Union of India (1967) and Sunil Batra, the Supreme Court held that successive petitions for Habeas Corpus can be maintained if based on fresh grounds or continued unlawful detention', 'Only if the petitioner is a woman', 'Only during martial law'],
        correctIndex: 1,
        explanation: 'Habeas Corpus involves personal liberty under Article 21; technical rules of res judicata do not bar a fresh petition where illegal detention continues or new facts emerge.',
        articleRef: 'Article 32 & Article 21',
        difficulty: 'Intermediate'
      },
      {
        id: 'd13-q20',
        question: 'Under Article 368, does the President have the power to "veto" or return a Constitutional Amendment Bill presented to him after being passed by both Houses with the requisite majority?',
        options: ['Yes, the President can return it for reconsideration once under Article 74', 'No, by virtue of the 24th Amendment Act, 1971, the President "shall give his assent" to a Constitutional Amendment Bill and possesses NO veto power', 'The President can pocket-veto the amendment for 1 year', 'The President must refer all amendments to the Supreme Court'],
        correctIndex: 1,
        explanation: 'The 24th Amendment Act, 1971 amended Article 368(2) by substituting the words "shall give his assent thereto", eliminating any presidential veto over constitutional amendments.',
        articleRef: 'Article 368(2)',
        difficulty: 'Intermediate'
      }
    ]
  },

  // ==========================================
  // DAY 14: INTERACTIVE PRECEDENT LINEAGES & DICTIONARY SPEED-RUN
  // ==========================================
  {
    dayNumber: 14,
    title: 'Precedent Lineages & Forensic Dictionary Speed-Run (13 Tracks & 215 Terms)',
    subtitle: 'Overruling Chronologies, Evolution Vectors, Bench Strength Trajectories & Latin Maxims Blitz',
    phase: 'Phase 4: Revision Drills, Mock Exams & Mains Answer Writing',
    estimatedHours: 6,
    targetArticles: ['Articles 14, 19, 21', 'Articles 105 & 194', 'Article 226', 'Article 233', 'Article 370'],
    overview: 'Day 14 is dedicated to cementing the visual and textual memory of all 13 Precedent Lineage Tracks in the Samvidhan app, tracking the exact bench strength and overruling trajectories of classic cases, and executing a speed-run through all 215 legal terms and Latin maxims in the Legal Dictionary.',
    coreConcepts: [
      {
        heading: 'The 6 Monumental Overruling Trajectories (Exam Gold)',
        articleAnchor: 'Article 141 & Precedent Law',
        synopsis: 'A higher-strength bench can overrule a smaller bench. Quoting both the classic overruled case and the 2024 modern overruling bench is the ultimate examiner-impression strategy.',
        substantiveLaw: [
          '1. SC/ST Homogeneity: E.V. Chinnaiah (2004 5-Judge) OVERRULED by State of Punjab v. Davinder Singh (2024 7-Judge).',
          '2. Parliamentary Bribery Immunity: P.V. Narasimha Rao (1998 5-Judge) OVERRULED by Sita Soren v. Union of India (2024 7-Judge).',
          '3. Minority Statutory Incorporation: S. Azeez Basha (1967 5-Judge) OVERRULED by AMU v. Naresh Agarwal (2024 7-Judge).',
          '4. Automatic 6-Month Stay Vacation: Asian Resurfacing (2018 3-Judge) OVERRULED by High Court Bar Association Allahabad v. State of U.P. (2024 5-Judge).',
          '5. Mineral Royalty as Tax: India Cements (1990 7-Judge) OVERRULED by Mineral Area Development Authority (MADA) v. SAIL (2024 9-Judge).',
          '6. Private Property Redistribution: Justice Krishna Iyer view in Sanjeev Coke (1983 5-Judge) OVERRULED by Property Owners Association v. State of Maharashtra (2024 9-Judge).'
        ],
        prosecutionAngle: 'Mastery of these 6 overruling lines guarantees top marks in any comparative or critical analysis Mains question.'
      },
      {
        heading: 'Forensic Latin Maxims in Criminal Prosecution',
        articleAnchor: 'Indian Evidence Act / BSA & Constitution',
        synopsis: 'Latin maxims are standard forensic courtroom tools used by Prosecuting Officers when arguing bail, burden of proof, and statutory interpretation.',
        substantiveLaw: [
          'Nemo debet bis vexari pro una et eadem causa: No one should be twice vexed for the same cause (Article 20(2)).',
          'Nemo tenetur seipsum accusare: No man is bound to accuse himself (Article 20(3)).',
          'Actus curiae neminem gravabit: An act of the court shall prejudice no man (HC Bar Allahabad 2024).',
          'Delegatus non potest delegare: A delegated authority cannot further sub-delegate its sovereign power.',
          'In pari delicto potior est conditio defendentis: Where both parties are equally at fault, the defendant\'s position is stronger.'
        ],
        prosecutionAngle: 'Directly tested in JKPSC PO preliminary legal language questions and applied in bail and trial arguments.'
      },
      {
        heading: 'Hierarchical Precedent Rules (Article 141)',
        articleAnchor: 'Article 141',
        synopsis: 'The doctrine of Stare Decisis governs judicial discipline in Indian constitutional and criminal law.',
        substantiveLaw: [
          'Central Board of Dawoodi Bohra Community (2005 5-Judge Bench): (1) The law declared by a larger bench binds smaller benches; (2) A bench of co-equal strength cannot overrule another bench of equal strength—it must refer the matter to the Chief Justice for a larger bench; (3) High Courts are bound by Supreme Court rulings, even obiter dicta of Constitution Benches.'
        ],
        prosecutionAngle: 'Prevents trial judges from relying on single-judge conflicting orders when authoritative Division or Constitution Bench judgments exist.'
      }
    ],
    landmarkEvolutionPairs: [
      {
        subject: 'Judicial Precedent Hierarchy & Binding Power of Benches',
        classicCase: {
          name: 'Union of India v. Raghubir Singh',
          year: 1989,
          bench: '5-Judge Bench (Pathak CJI)',
          ratio: 'Settled that a judgment of a larger bench prevails over that of a smaller bench, irrespective of the number of judges concurring.'
        },
        modernCase: {
          name: 'Central Board of Dawoodi Bohra Community v. State of MH',
          year: 2005,
          bench: '5-Judge Bench (Lahoti CJI)',
          ratio: 'Codified the strict rules of reference: co-equal benches cannot doubt or overrule each other; reference to larger bench must follow institutional hierarchy.'
        },
        examApplicationNote: 'Cite Dawoodi Bohra when explaining why 7-Judge and 9-Judge benches were required in 2024 to overrule Chinnaiah and India Cements.'
      }
    ],
    dictionaryTerms: [
      'Stare Decisis', 'Ratio Decidendi', 'Obiter Dicta', 'Per Incuriam', 'Sub Silentio',
      'Actus Curiae Neminem Gravabit', 'Nemo Tenetur', 'Nemo Bis Vexari', 'Delegatus Non Potest Delegare', 'Ubi Jus Ibi Remedium',
      'In Pari Delicto', 'Res Ipsa Loquitur', 'Ignorantia Juris Neminem Excusat', 'Falsus in Uno Falsus in Omnibus', 'Res Judicata'
    ],
    svgConceptType: 'lineage-speedrun',
    caseStudy: {
      title: 'Conflicting Precedents in Sessions Trial and Binding Benchmark Authority',
      factualMatrix: 'During a murder trial under Section 103 BNS (former 302 IPC) before the Sessions Judge in Jammu, the defense counsel moved an application under Section 20(3) of the Constitution and Section 23 of the Bharatiya Sakshya Adhiniyam (BSA), 2023, seeking to exclude an extra-judicial confession made by the accused to a village panchayat member while in casual custody of an armed police escort. The defense cited a 2-Judge Bench judgment of the Supreme Court from 2012 which had held that any confession made while police personnel are visible in the vicinity is inadmissible. The Chief Prosecuting Officer (CPO) opposed the application, citing an 11-Judge Constitution Bench judgment from 1961 (Kathi Kalu Oghad) and a 3-Judge Bench judgment from 2020 which held that mere presence of police in the vicinity does not vitiate an independent confession unless physical or mental compulsion is demonstrated. The defense argued that the 2012 ruling being later in point of time should be preferred over the 1961 ruling.',
      framingQuestions: [
        '1. Under Article 141, when there is a conflict between a 2-Judge Bench decision and an 11-Judge Constitution Bench decision of the Supreme Court, which ruling is binding on the Sessions Court?',
        '2. Does a subsequent smaller bench judgment possess the constitutional authority to water down or deviate from an earlier larger Constitution Bench ruling?',
        '3. What is the doctrine of "Per Incuriam" in constitutional precedent hierarchy?'
      ],
      statutoryApplicability: ['Article 141', 'Article 20(3)', 'BSA 2023 Section 23', 'Central Board of Dawoodi Bohra (2005)', 'Raghubir Singh (1989)'],
      modelAnswer: '1. PRIMACY OF BENCH STRENGTH OVER RECENCY: Under Article 141, the law declared by the Supreme Court is binding on all courts within India. In Union of India v. Raghubir Singh (1989 5-Judge Bench) and Central Board of Dawoodi Bohra Community v. State of Maharashtra (2005 5-Judge Bench), the Supreme Court established the cardinal rule of Stare Decisis: the strength of the bench, and NOT the recency of the decision, is decisive. A judgment rendered by an 11-Judge Constitution Bench (Kathi Kalu Oghad 1961) or a 3-Judge Bench binds all subsequent smaller benches (including 2-Judge Division Benches).\n\n2. SMALLER BENCHES CANNOT DEVIATE: A 2-Judge Bench has no constitutional or jurisdictional competence to overrule or water down a principle settled by a larger bench. If a smaller bench differs, it can only refer the matter to the Chief Justice for a larger bench. Any observation of a 2-Judge Bench contrary to an 11-Judge Bench is per incuriam.\n\n3. DOCTRINE OF PER INCURIAM: A decision is rendered "per incuriam" (through lack of care) when it is delivered in ignorance or disregard of an authoritative larger Constitution Bench decision or binding statutory provision. Applying Dawoodi Bohra (2005), the Sessions Judge is strictly bound by the 11-Judge Bench in Kathi Kalu Oghad and the 3-Judge ruling, and must reject the defense contention. The confession will be evaluated for voluntariness rather than mechanical exclusion.',
      markingRubric: [
        { criterion: 'Application of bench strength supremacy under Article 141 (Raghubir Singh & Dawoodi Bohra)', marks: 4 },
        { criterion: 'Explanation of the Doctrine of Per Incuriam', marks: 3 },
        { criterion: 'Correct direction on the admissibility of confession in trial', marks: 3 }
      ]
    },
    mcqs: [
      {
        id: 'd14-q1',
        question: 'Under the authoritative 5-Judge Bench ruling in Central Board of Dawoodi Bohra Community v. State of Maharashtra (2005), what is the rule of Stare Decisis when a smaller bench of the Supreme Court differs with an earlier larger bench?',
        options: ['The smaller bench can overrule the larger bench if it is more recent', 'The law declared by the larger bench is binding; the smaller bench CANNOT overrule the larger bench and can only refer the matter to the Chief Justice of India for placing before a larger bench', 'The smaller bench must resign', 'The matter is decided by a coin toss'],
        correctIndex: 1,
        explanation: 'The Supreme Court ruled that institutional discipline mandates that a smaller bench is bound by a larger bench decision; if it doubts the correctness, it can only refer it to the CJI for constituting an appropriate larger bench.',
        articleRef: 'Article 141',
        difficulty: 'Foundational'
      },
      {
        id: 'd14-q2',
        question: 'What is the literal meaning and legal consequence of a judicial decision being declared "Per Incuriam"?',
        options: ['It was decided by a foreign judge', 'It was rendered through lack of care in ignorance of a binding statute or larger bench decision, and carries NO precedential value', 'It is a judgment delivered during vacation', 'It is an oral order with no written record'],
        correctIndex: 1,
        explanation: '"Per incuriam" literally means "through lack of care". A decision rendered in ignorance of a binding statutory provision or a decision of a superior/larger bench carries no binding precedential authority under Article 141.',
        articleRef: 'Article 141',
        difficulty: 'Foundational'
      },
      {
        id: 'd14-q3',
        question: 'What is the legal distinction between "Ratio Decidendi" and "Obiter Dicta" in constitutional judgments?',
        options: ['Ratio decidendi is the binding legal principle essential to the determination of the case; Obiter dicta are incidental judicial remarks not binding as precedent under Article 141', 'Ratio decidendi is written in Latin; Obiter dicta in English', 'There is no distinction; both are identical', 'Obiter dicta can be enforced by police directly'],
        correctIndex: 0,
        explanation: 'Ratio decidendi is the underlying legal reason or rule upon which the decision is founded and forms the binding precedent. Obiter dicta are incidental expressions or opinions not essential to the verdict, though highly persuasive.',
        articleRef: 'Article 141',
        difficulty: 'Foundational'
      },
      {
        id: 'd14-q4',
        question: 'The Latin maxim "Actus curiae neminem gravabit", cited by the Supreme Court in the 2024 stay expiration judgment (HC Bar Association Allahabad), means:',
        options: ['An act of the legislature shall bind everyone', 'An act of the court shall prejudice no man', 'No one can judge their own case', 'Ignorance of law is no excuse'],
        correctIndex: 1,
        explanation: '"Actus curiae neminem gravabit" is a fundamental principle of justice: an act or delay of the court shall prejudice no person. A litigant who secured a stay cannot be penalized for court backlog.',
        articleRef: 'Article 226 & Legal Maxims',
        difficulty: 'Foundational'
      },
      {
        id: 'd14-q5',
        question: 'The Latin maxim "Nemo debet esse judex in propria causa" represents which cardinal principle of Natural Justice?',
        options: ['Rule against Bias (no person shall be a judge in their own cause)', 'Rule of Fair Hearing (audi alteram partem)', 'Rule against Self-Incrimination', 'Rule of Double Jeopardy'],
        correctIndex: 0,
        explanation: '"Nemo debet esse judex in propria causa" embodies the Rule against Bias, ensuring that an adjudicator has no personal, pecuniary, or official interest in the subject matter of litigation.',
        articleRef: 'Natural Justice & Article 14',
        difficulty: 'Foundational'
      },
      {
        id: 'd14-q6',
        question: 'The Latin maxim "Delegatus non potest delegare" means:',
        options: ['A delegate can sub-delegate powers at will', 'A delegate cannot further delegate the power entrusted to him, unless expressly authorized by statute', 'Police can delegate arrest warrants to private security', 'Ministers can delegate oath taking'],
        correctIndex: 1,
        explanation: '"Delegatus non potest delegare" ensures that where a statute confers power on a specific authority relying on its judgment, that authority cannot sub-delegate the power without express legislative sanction.',
        articleRef: 'Administrative Law',
        difficulty: 'Intermediate'
      },
      {
        id: 'd14-q7',
        question: 'The Latin maxim "Ubi jus ibi remedium" means:',
        options: ['Law is blind to justice', 'Where there is a right, there is a remedy', 'Rights belong only to citizens', 'Remedies are at the discretion of the king'],
        correctIndex: 1,
        explanation: '"Ubi jus ibi remedium" is the foundational maxim of torts and constitutional remedies: where there is a legal right, the law provides a remedy for its infringement (embodied in Article 32 and Article 226).',
        articleRef: 'Article 32',
        difficulty: 'Foundational'
      },
      {
        id: 'd14-q8',
        question: 'The maxim "Falsus in uno, falsus in omnibus" (false in one thing, false in everything):',
        options: ['Is a mandatory rule of evidence applied strictly in Indian courts', 'Is NOT a rule of law in India, but merely a rule of caution; Indian courts must separate the grain from the chaff in witness testimonies', 'Applies only in murder trials', 'Automatically results in acquittal of all accused'],
        correctIndex: 1,
        explanation: 'In Ugar Ahir (1965) and subsequent rulings, the Supreme Court held that "falsus in uno, falsus in omnibus" does not apply in India. The court must endeavor to separate falsehood from truth in witness depositions.',
        articleRef: 'Evidence / BSA',
        difficulty: 'Intermediate'
      },
      {
        id: 'd14-q9',
        question: 'The maxim "Ignorantia facti excusat, ignorantia juris non excusat" means:',
        options: ['Ignorance of fact excuses, but ignorance of law does NOT excuse', 'Ignorance of law excuses all criminals', 'Neither fact nor law can be excused', 'Facts are superior to law'],
        correctIndex: 0,
        explanation: 'Ignorance of fact can be a valid criminal defense (mistake of fact in good faith under BNS), but ignorance of the law of the land excuses no one.',
        articleRef: 'BNS & Criminal Law',
        difficulty: 'Foundational'
      },
      {
        id: 'd14-q10',
        question: 'Which 2024 Constitution Bench judgment overruled the 7-Judge Bench decision in India Cements (1990) by holding that royalty on minerals is not a tax?',
        options: ['M.K. Ranjitsinh v. Union of India', 'Mineral Area Development Authority (MADA) v. Steel Authority of India (SAIL)', 'Property Owners Association v. State of Maharashtra', 'Sita Soren v. Union of India'],
        correctIndex: 1,
        explanation: 'The 9-Judge Constitution Bench in MADA v. SAIL (July 2024) overruled the 7-Judge Bench in India Cements (1990) by an 8:1 majority.',
        articleRef: 'Entry 50 List II',
        difficulty: 'Foundational'
      },
      {
        id: 'd14-q11',
        question: 'Which 2024 Constitution Bench judgment overruled the 5-Judge Bench decision in S. Azeez Basha (1967) regarding Article 30(1) minority rights?',
        options: ['Aligarh Muslim University v. Naresh Agarwal', 'State of Punjab v. Davinder Singh', 'Bilkis Yakub Rasool v. Union of India', 'High Court Bar Association Allahabad v. State of U.P.'],
        correctIndex: 0,
        explanation: 'The 7-Judge Constitution Bench in Aligarh Muslim University v. Naresh Agarwal (Nov 2024) overruled Azeez Basha (1967).',
        articleRef: 'Article 30(1)',
        difficulty: 'Foundational'
      },
      {
        id: 'd14-q12',
        question: 'Which 2024 Constitution Bench judgment overruled the 5-Judge Bench decision in P.V. Narasimha Rao (1998) regarding legislative bribery immunity?',
        options: ['Sita Soren v. Union of India', 'ADR v. Union of India (Electoral Bonds)', 'Sukanya Shantha v. Union of India', 'Frank Vitus v. NCB'],
        correctIndex: 0,
        explanation: 'The 7-Judge Constitution Bench in Sita Soren v. Union of India (March 2024) unanimously overruled P.V. Narasimha Rao (1998).',
        articleRef: 'Article 105(2)',
        difficulty: 'Foundational'
      },
      {
        id: 'd14-q13',
        question: 'Which 2024 Constitution Bench judgment overruled the 5-Judge Bench decision in E.V. Chinnaiah (2004) regarding SC/ST sub-classification?',
        options: ['State of Punjab v. Davinder Singh', 'M. Nagaraj v. Union of India', 'Janhit Abhiyan v. Union of India', 'In re Section 6A Citizenship Act'],
        correctIndex: 0,
        explanation: 'The 7-Judge Constitution Bench in State of Punjab v. Davinder Singh (August 2024) overruled E.V. Chinnaiah (2004) by a 6:1 majority.',
        articleRef: 'Article 16(4)',
        difficulty: 'Foundational'
      },
      {
        id: 'd14-q14',
        question: 'Which 2024 Constitution Bench judgment overruled the 3-Judge Bench decision in Asian Resurfacing (2018) regarding automatic stay expirations?',
        options: ['High Court Bar Association, Allahabad v. State of Uttar Pradesh', 'Prabir Purkayastha v. State (NCT of Delhi)', 'Kolkata Municipal Corporation v. Bimal Kumar Shah', 'Common Cause v. Union of India'],
        correctIndex: 0,
        explanation: 'The 5-Judge Constitution Bench in High Court Bar Association Allahabad (Feb 2024) unanimously overruled Asian Resurfacing (2018).',
        articleRef: 'Article 226',
        difficulty: 'Foundational'
      },
      {
        id: 'd14-q15',
        question: 'What is the meaning of a judgment rendered "Sub Silentio"?',
        options: ['A judgment delivered in silence without argument', 'When a particular point of law was neither brought to the attention of the court nor considered by it, though present in the case; hence it is not a binding precedent on that point', 'A judgment delivered in a closed court session', 'A judgment delivered without a signed copy'],
        correctIndex: 1,
        explanation: 'A decision passes "sub silentio" when the particular point of law was not raised, argued, or considered by the court. It does not create a binding precedent on that unconsidered issue.',
        articleRef: 'Article 141',
        difficulty: 'Intermediate'
      },
      {
        id: 'd14-q16',
        question: 'Under the Doctrine of Res Ipsa Loquitur (the thing speaks for itself), what happens to the burden of proof in negligence claims?',
        options: ['The prosecution must prove motive beyond all doubt', 'The accident is of such a nature that negligence is presumed, shifting the burden onto the defendant to explain how it occurred without his fault', 'The victim is punished for being present', 'The court dismisses the case'],
        correctIndex: 1,
        explanation: '"Res ipsa loquitur" shifts the burden of explanation onto the defendant when the accident could not ordinarily have happened without negligence in the management of things under the defendant\'s control.',
        articleRef: 'Tort & Criminal Negligence',
        difficulty: 'Intermediate'
      },
      {
        id: 'd14-q17',
        question: 'The Latin maxim "Volenti non fit injuria" means:',
        options: ['To a willing person, no legal injury is done (consent precludes recovery for harm)', 'Violence is always punishable', 'The state is immune from all wrongs', 'No injury can be compensated by money'],
        correctIndex: 0,
        explanation: '"Volenti non fit injuria" is the doctrine of voluntary assumption of risk: a person who consents to undergo a harm or risk cannot complain of legal injury.',
        articleRef: 'Tort Law & BNS',
        difficulty: 'Foundational'
      },
      {
        id: 'd14-q18',
        question: 'The Latin maxim "Injuria sine damno" means:',
        options: ['Damage without legal injury', 'Violation of a legal right without causing actual monetary damage or physical loss (gives rise to a legal action)', 'Harm caused by natural disaster', 'Damages awarded in criminal bails'],
        correctIndex: 1,
        explanation: '"Injuria sine damno" means infringement of an absolute private legal right without actual loss (e.g. Ashby v. White - qualified voter prevented from voting), which is actionable per se.',
        articleRef: 'Tort & Constitutional Rights',
        difficulty: 'Intermediate'
      },
      {
        id: 'd14-q19',
        question: 'The Latin maxim "Damnum sine injuria" means:',
        options: ['Actual financial loss or physical damage suffered WITHOUT the infringement of any legal right (not actionable in law)', 'Damage caused by police in self defense', 'Injuries caused by dangerous animals', 'Loss of reputation in fair press reporting'],
        correctIndex: 0,
        explanation: '"Damnum sine injuria" means damage without legal injury (e.g. Gloucester Grammar School case - competition causing business loss). No legal action lies because no recognized legal right was violated.',
        articleRef: 'Tort Law',
        difficulty: 'Intermediate'
      },
      {
        id: 'd14-q20',
        question: 'In the Indian judicial system, what is the binding status of an Obiter Dictum delivered by a Constitution Bench of the Supreme Court on High Courts?',
        options: ['It carries zero value and must be ignored', 'While not strictly binding as a ratio decidendi under Article 141, it carries immense judicial weight and is normally treated as binding guidance by High Courts unless in conflict with a direct ratio', 'It can only be cited in private family disputes', 'It expires after 5 years'],
        correctIndex: 1,
        explanation: 'In Oriental Insurance v. Meena Variyal (2007) and Sarwan Singh, the Supreme Court held that even obiter dicta of the Supreme Court, particularly of Constitution Benches, carry enormous weight and are entitled to the highest respect by all courts in India.',
        articleRef: 'Article 141',
        difficulty: 'Intermediate'
      }
    ]
  },

  // ==========================================
  // DAY 15: FULL-SYLLABUS SIMULATION & CITATION POLISHING
  // ==========================================
  {
    dayNumber: 15,
    title: 'Full-Syllabus Prelims Mock & Mains Citation Polishing',
    subtitle: 'High-Yield Mixed Simulation (With -0.25 Negative Marking) & Grand Mains Formulation',
    phase: 'Phase 4: Revision Drills, Mock Exams & Mains Answer Writing',
    estimatedHours: 6,
    targetArticles: ['Articles 1–395', 'Schedules 1–12', 'Amendments 1–106'],
    overview: 'Day 15 represents the culmination of the 15-day intensive bootcamp: a full-spectrum mixed diagnostic exam across all 22 Parts, 106 Amendments, and 12 Schedules, accompanied by an advanced multi-issue Mains problem testing the 4-step citation formula.',
    coreConcepts: [
      {
        heading: 'Grand Master Checklist for JKPSC PO Examination',
        articleAnchor: 'Complete Constitution',
        synopsis: 'Before entering the examination hall, every Prosecuting Officer candidate must have instant photographic recall of the following foundational anchors.',
        substantiveLaw: [
          'Part III Golden Triangle: Articles 14, 19, 21 as a unified substantive guarantee.',
          'Arrest & Custodial Safeguards: Articles 20(1), 20(2), 20(3), 22(1) written grounds, 22(2) 24 hours magistrate production, Section 35 BNSS, Section 187 BNSS.',
          'Judicial Review Architecture: Article 32 (5 writs, epistolary PIL) and Article 226 ("for any other purpose").',
          'Federal Division of Powers: Seventh Schedule (List I, II, III), Article 246, Article 248 residuary power, Article 254 Concurrent List repugnancy.',
          'Recent 2024–2025 Constitution Bench Overrulings: Sita Soren, Davinder Singh, AMU, MADA v. SAIL, HC Bar Association Allahabad, All India Judges Association (2025).'
        ],
        prosecutionAngle: 'This comprehensive mental grid allows you to answer preliminary questions in 10 seconds and structure Mains answers with precision.'
      },
      {
        heading: 'The 4-Step Mains Citation Formula (Recap)',
        articleAnchor: 'Mains Answer Writing Strategy',
        synopsis: 'To secure maximum marks from the evaluator, structure every constitutional answer according to this formula.',
        substantiveLaw: [
          'Step 1: State the constitutional article, text, and statutory anchor under BNS/BNSS.',
          'Step 2: Cite the classic foundational landmark (what everyone cites).',
          'Step 3: Introduce the modern 2024–2025 Supreme Court Constitution Bench ruling with bench strength and ratio, noting what it overruled or expanded.',
          'Step 4: Conclude with practical prosecutorial application and constitutional significance.'
        ],
        prosecutionAngle: 'Guarantees that your paper stands out from candidates citing outdated textbooks.'
      }
    ],
    landmarkEvolutionPairs: [
      {
        subject: 'Master Evolutionary Synthesis (Classic vs Modern)',
        classicCase: {
          name: 'The Classic Precedents (1950–2018)',
          year: 2018,
          bench: 'Various Benches',
          ratio: 'Berubari, Chinnaiah, P.V. Narasimha Rao, Azeez Basha, Asian Resurfacing, India Cements, Olga Tellis.'
        },
        modernCase: {
          name: 'The 2024–2025 Constitution Bench Revolution',
          year: 2024,
          bench: 'Constitution Benches (5, 7, 9 Judges)',
          ratio: 'Davinder Singh (7-J), Sita Soren (7-J), AMU (7-J), MADA v. SAIL (9-J), HC Bar Allahabad (5-J), Bulldozer Guidelines (2024), All India Judges (2025).'
        },
        examApplicationNote: 'Keep this master synthesis in mind during your final revision drill.'
      }
    ],
    dictionaryTerms: [
      'Constitutional Morality', 'Manifest Arbitrariness', 'Genesis Test', 'Due Process of Law', 'Substantive Equality',
      'Creamy Layer', 'Appropriate Government', 'Rule of Law', 'Separation of Powers', 'Basic Structure Doctrine',
      'Pith and Substance', 'Actus Curiae Neminem Gravabit', 'Nemo Tenetur', 'Ex Post Facto', 'Double Jeopardy'
    ],
    svgConceptType: 'final-mastery',
    caseStudy: {
      title: 'Grand Mock Problem: Punitive Demolition, Defective Arrest & Claim of Bribery Immunity',
      factualMatrix: 'During an election rally in Jammu, sitting MLA \'X\' allegedly received a cash bag containing Rs 25 Lakhs from a real estate lobbyist to introduce a private member bill deregulating municipal master plan zones. That night, an altercation took place outside the lobbyist\'s office, and a police constable was injured. Within 12 hours, the Special Investigation Team (SIT) raided MLA X\'s residential farmhouse. The police arrested MLA X at 3:00 AM, handing over an "Arrest Memo" mentioning Sections 109 and 191(2) of the BNS and Section 7 of the Prevention of Corruption Act (PC Act). No written grounds of arrest were furnished to X or his lawyer. Simultaneously, at 6:00 AM, the Municipal Enforcement Squad arrived with bulldozers and demolished the farmhouse\'s boundary wall, servant quarters, and front terrace, alleging violation of the Municipal Master Plan, after pasting a 1-hour spot notice. At 2:00 PM, MLA X was produced before the Magistrate. X\'s senior counsel moved for immediate discharge and bail on three grounds: (1) Under Article 194(2) and P.V. Narasimha Rao (1998), MLA X enjoys absolute immunity for legislative conduct regarding private bills; (2) The arrest and remand are unconstitutional under Article 22(1) and Prabir Purkayastha (2024) for failure to serve written grounds of arrest; and (3) The demolition is an illegal punitive act violating Article 21, Article 300A, and the Supreme Court\'s 2024 Bulldozer Guidelines. The Public Prosecutor opposed the application.',
      framingQuestions: [
        '1. Can MLA X claim legislative immunity under Article 194(2) for accepting cash to introduce a legislative bill in light of the 7-Judge Bench ruling in Sita Soren v. Union of India (2024)?',
        '2. Does the failure of the police to furnish written grounds of arrest at the time of arrest violate Article 22(1) and vitiate the remand under Prabir Purkayastha v. State (2024)?',
        '3. Are the municipal authorities and police officers liable for illegal punitive demolition under the pan-India guidelines laid down in In re: Demolition of Structures (Nov 2024)?'
      ],
      statutoryApplicability: ['Article 194(2)', 'Article 22(1)', 'Article 21', 'Article 300A', 'Sita Soren (2024)', 'Prabir Purkayastha (2024)', 'In re Demolition of Structures (Nov 2024)'],
      modelAnswer: '1. REJECTION OF LEGISLATIVE IMMUNITY UNDER SITA SOREN (2024): The plea of legislative immunity under Article 194(2) relying on P.V. Narasimha Rao (1998) must be rejected outright. In Sita Soren v. Union of India (March 2024), a unanimous 7-Judge Constitution Bench expressly overruled P.V. Narasimha Rao. The Court held that bribery under Section 7 of the PC Act is complete the moment the bribe is accepted, irrespective of whether the bill or vote is subsequently introduced. Legislative privileges under Article 194(2) do not shield criminal acts of corruption from prosecution.\n\n2. ILLEGALITY OF ARREST & VITIATION OF REMAND: The arrest and subsequent remand violate the mandatory command of Article 22(1). In Prabir Purkayastha v. State (NCT of Delhi) (May 2024), the Supreme Court ruled that grounds of arrest MUST be served in writing without delay across all penal statutes. Merely serving an arrest memo containing statutory sections does not satisfy Article 22(1). As held in Pankaj Bansal and Prabir Purkayastha, an arrest without written grounds is void ab initio, and the subsequent remand order passed by the Magistrate is vitiated, entitling the accused to release.\n\n3. ILLEGAL PUNITIVE DEMOLITION & OFFICIAL LIABILITY: The summary demolition of the farmhouse within 12 hours of the altercation after a 1-hour notice violates the binding pan-India guidelines laid down in In re: Demolition of Structures (Bulldozer Justice Guidelines, Nov 2024). Demolitions cannot be used as punitive retribution against accused persons. Authorities must give a minimum 15 days written show-cause notice by registered post, hold a personal hearing, and video-record the process. Under the 2024 guidelines, the Municipal Enforcement Officer and police officials are personally liable to pay compensation and costs of reconstruction from their own pockets, in addition to facing contempt and disciplinary inquiry.',
      markingRubric: [
        { criterion: 'Application of Sita Soren (2024 7-Judge Bench) rejecting bribery immunity', marks: 4 },
        { criterion: 'Application of Prabir Purkayastha (2024) on mandatory written grounds under Art 22(1)', marks: 3 },
        { criterion: 'Application of Nov 2024 Bulldozer Guidelines on 15-day notice and personal liability', marks: 3 }
      ]
    },
    mcqs: [
      {
        id: 'd15-q1',
        question: 'Under the 106th Constitutional Amendment Act, 2023, what percentage of seats are reserved for women in the Lok Sabha, State Legislative Assemblies, and the Legislative Assembly of NCT of Delhi?',
        options: ['25%', '33% (one-third)', '50%', '20%'],
        correctIndex: 1,
        explanation: 'The 106th Amendment Act, 2023 (Nari Shakti Vandan Adhiniyam) provides for 33% (one-third) reservation for women in Lok Sabha, State Assemblies, and Delhi Assembly under Articles 330A and 332A.',
        articleRef: 'Article 330A & 332A',
        difficulty: 'Foundational'
      },
      {
        id: 'd15-q2',
        question: 'In State of Punjab v. Davinder Singh (August 2024), what was the bench strength and the majority ratio regarding sub-classification of Scheduled Castes?',
        options: ['5-Judge Bench (Unanimous)', '7-Judge Bench (6:1 Majority)', '9-Judge Bench (8:1 Majority)', '11-Judge Bench (7:4 Majority)'],
        correctIndex: 1,
        explanation: 'State of Punjab v. Davinder Singh (2024) was decided by a 7-Judge Constitution Bench with a 6:1 majority, overruling E.V. Chinnaiah (2004).',
        articleRef: 'Article 16(4)',
        difficulty: 'Foundational'
      },
      {
        id: 'd15-q3',
        question: 'In Sita Soren v. Union of India (March 2024), the 7-Judge Constitution Bench overruled which earlier 5-Judge Bench judgment on parliamentary bribery?',
        options: ['Kihoto Hollohan v. Zachillhu (1992)', 'P.V. Narasimha Rao v. State (CBI/SPE) (1998)', 'Raja Ram Pal v. Hon\'ble Speaker (2007)', 'Subhash Desai v. Principal Secretary (2023)'],
        correctIndex: 1,
        explanation: 'The 7-Judge Bench in Sita Soren (March 2024) unanimously overruled the 1998 decision in P.V. Narasimha Rao.',
        articleRef: 'Articles 105(2) & 194(2)',
        difficulty: 'Foundational'
      },
      {
        id: 'd15-q4',
        question: 'In Aligarh Muslim University v. Naresh Agarwal (November 2024), the 7-Judge Constitution Bench overruled which 1967 decision on minority educational institutions?',
        options: ['In re Kerala Education Bill (1958)', 'S. Azeez Basha v. Union of India (1967)', 'T.M.A. Pai Foundation v. State of Karnataka (2002)', 'P.A. Inamdar v. State of Maharashtra (2005)'],
        correctIndex: 1,
        explanation: 'The 7-Judge Bench in AMU (Nov 2024) overruled the 5-Judge Bench in S. Azeez Basha (1967), instituting the Genesis Test under Article 30(1).',
        articleRef: 'Article 30(1)',
        difficulty: 'Foundational'
      },
      {
        id: 'd15-q5',
        question: 'In High Court Bar Association Allahabad v. State of U.P. (February 2024), the 5-Judge Constitution Bench held that interim stay orders granted by High Courts:',
        options: ['Automatically expire after 6 months', 'Do NOT automatically expire after 6 months or any fixed timeline, overruling Asian Resurfacing (2018)', 'Expire within 30 days unless signed by the Chief Justice', 'Can only be granted for 14 days'],
        correctIndex: 1,
        explanation: 'The 5-Judge Bench unanimously held that stay orders do not automatically lapse after 6 months, overruling Asian Resurfacing (2018).',
        articleRef: 'Article 226 & Article 142',
        difficulty: 'Foundational'
      },
      {
        id: 'd15-q6',
        question: 'In Mineral Area Development Authority (MADA) v. SAIL (July 2024), what did the 9-Judge Constitution Bench rule regarding royalty on minerals by an 8:1 majority?',
        options: ['Royalty is a tax under Entry 50 List II', 'Royalty is NOT a tax, overruling India Cements (1990); States have exclusive legislative power under Entry 50 List II to tax mineral-bearing lands', 'All royalties belong to the Union under Entry 54 List I', 'Royalty was abolished'],
        correctIndex: 1,
        explanation: 'The 9-Judge Bench held that royalty is a contractual consideration, not a tax, and affirmed the States\' sovereign power to tax mineral rights under Entry 50 List II.',
        articleRef: 'Entry 50 List II',
        difficulty: 'Foundational'
      },
      {
        id: 'd15-q7',
        question: 'In In re: Directions in the Matter of Demolition of Structures (November 2024), what mandatory pan-India rule was laid down regarding punitive state demolitions ("Bulldozer Justice")?',
        options: ['Demolitions of accused persons\' homes can be carried out within 24 hours of FIR', 'Punitive demolitions violate the Right to Shelter under Article 21 and Separation of Powers; minimum 15 days notice and hearing are mandatory, with personal financial liability on erring officers', 'Only the District Magistrate can demolish without notice', 'Police can demolish properties during search operations'],
        correctIndex: 1,
        explanation: 'The Supreme Court prohibited punitive demolitions, mandated 15-day show-cause notices, personal hearing, and held erring officials personally liable for restitution damages.',
        articleRef: 'Article 21 & Article 300A',
        difficulty: 'Foundational'
      },
      {
        id: 'd15-q8',
        question: 'In Prabir Purkayastha v. State (NCT of Delhi) (May 2024), what did the Supreme Court hold regarding the requirement of communicating grounds of arrest under Article 22(1)?',
        options: ['Grounds of arrest can be communicated orally', 'Grounds of arrest MUST be communicated in WRITING to the accused without delay, even under special penal statutes like UAPA, or the arrest and remand are void', 'Written grounds are only given after trial commences', 'Written grounds are optional for investigative agencies'],
        correctIndex: 1,
        explanation: 'The Supreme Court ruled that Article 22(1) mandates communicating grounds of arrest in writing; failure to do so vitiates the arrest and remand order.',
        articleRef: 'Article 22(1)',
        difficulty: 'Foundational'
      },
      {
        id: 'd15-q9',
        question: 'In Frank Vitus v. Narcotics Control Bureau (July 2024), the Supreme Court struck down a bail condition requiring the accused to drop a Google Maps PIN because:',
        options: ['Google Maps is a foreign application', 'Continuous live digital location tracking of an accused on bail violates the Right to Privacy under Article 21', 'Bail bonds can only be cash', 'The accused was a foreign citizen'],
        correctIndex: 1,
        explanation: 'The Supreme Court ruled that requiring 24/7 continuous digital location sharing as a bail condition infringes the fundamental Right to Privacy under Article 21.',
        articleRef: 'Article 21',
        difficulty: 'Foundational'
      },
      {
        id: 'd15-q10',
        question: 'In Bilkis Yakub Rasool v. Union of India (January 2024), the Supreme Court quashed the premature remission of 11 life convicts primarily because:',
        options: ['Convicts had not paid their fines', 'The Government of Gujarat was NOT the "appropriate Government" under Section 432(7) CrPC; the competent government was Maharashtra where the offenders were tried and sentenced', 'Life imprisonment cannot be remitted under any circumstance', 'Victims were not present during the crime'],
        correctIndex: 1,
        explanation: 'The Supreme Court quashed the remission because under Section 432(7) CrPC, the appropriate government is the State where the offenders were sentenced (Maharashtra), and Gujarat had usurped power.',
        articleRef: 'Section 432(7) CrPC & Article 21',
        difficulty: 'Foundational'
      },
      {
        id: 'd15-q11',
        question: 'In Sukanya Shantha v. Union of India (October 2024), the Supreme Court struck down caste discrimination in State Prison Manuals under which Articles?',
        options: ['Articles 14, 15, 17, 21, and 23', 'Article 19 only', 'Article 25 only', 'Article 311 only'],
        correctIndex: 0,
        explanation: 'CJI Chandrachud struck down caste-based division of prison labor (cleaning latrines to Dalits, cooking to upper castes) under Articles 14, 15, 17 (Untouchability), 21 (Dignity), and 23 (Forced Labor).',
        articleRef: 'Articles 14, 15, 17, 21, 23',
        difficulty: 'Foundational'
      },
      {
        id: 'd15-q12',
        question: 'In M.K. Ranjitsinh v. Union of India (March 2024), which right was recognized as an independent Fundamental Right under Articles 14 and 21?',
        options: ['Right against adverse impacts of climate change', 'Right to free solar power', 'Right to private tiger reserves', 'Right to commercial underground mining'],
        correctIndex: 0,
        explanation: 'The 3-Judge Bench headed by CJI Chandrachud recognized the Right to be protected against the adverse impacts of climate change under Articles 14 and 21.',
        articleRef: 'Articles 14 & 21',
        difficulty: 'Foundational'
      },
      {
        id: 'd15-q13',
        question: 'In Association for Democratic Reforms v. Union of India (February 2024), the 5-Judge Constitution Bench struck down the Electoral Bonds Scheme under which Article?',
        options: ['Article 14 equality only', 'Article 19(1)(a) Right to Information of voters', 'Article 21 Right to Privacy of corporate donors', 'Article 324 election management'],
        correctIndex: 1,
        explanation: 'The 5-Judge Bench held that anonymous Electoral Bonds violate the voter\'s fundamental Right to Information under Article 19(1)(a).',
        articleRef: 'Article 19(1)(a)',
        difficulty: 'Foundational'
      },
      {
        id: 'd15-q14',
        question: 'In All India Judges Association v. Union of India (January 2025), what did the 5-Judge Constitution Bench hold regarding direct recruitment of District Judges under Article 233(2)?',
        options: ['Subordinate civil judges can apply in the advocate quota without resigning', 'An advocate must have 7 years of active, continuous practice at the Bar as on the cut-off date, and in-service judicial officers cannot compete in the 25% direct Bar quota without resigning', 'The direct Bar quota was abolished', 'Only Senior Advocates are eligible'],
        correctIndex: 1,
        explanation: 'The 5-Judge Bench reaffirmed Dheeraj Mor (2020), holding that direct recruitment under Article 233(2) mandates 7 years of continuous active practice at the Bar.',
        articleRef: 'Article 233(2)',
        difficulty: 'Foundational'
      },
      {
        id: 'd15-q15',
        question: 'In In re Section 6A of the Citizenship Act, 1955 (Assam Accord Case, October 2024), what was the ruling of the 5-Judge Constitution Bench by a 4:1 majority?',
        options: ['Section 6A was struck down as unconstitutional', 'Upheld the constitutional validity of Section 6A, holding that the cut-off date of March 25, 1971 for grant of citizenship was a rational legislative classification under Article 11 and Article 14', 'All migrants in Assam were granted citizenship automatically', 'The Citizenship Act was declared void'],
        correctIndex: 1,
        explanation: 'The 5-Judge Bench (4:1) upheld Section 6A, ruling that the special cut-off dates under the Assam Accord were justified by humanitarian and political history.',
        articleRef: 'Article 11 & Article 14',
        difficulty: 'Intermediate'
      },
      {
        id: 'd15-q16',
        question: 'Under the 10th Schedule, when can a court intervene in disqualification proceedings pending before the Speaker?',
        options: ['At any preliminary notice stage', 'Only after the Speaker has passed a final order of disqualification, except in rare cases where the Speaker\'s deferral causes grave, irreversible constitutional injury', 'Courts can never intervene even after final order', 'Only with Governor\'s written permission'],
        correctIndex: 1,
        explanation: 'In Kihoto Hollohan (1992) and Keisham Meghachandra (2020), the Supreme Court ruled that judicial review is restricted to final orders of the Speaker, unless the Speaker fails to decide within a reasonable time causing grave injury.',
        articleRef: 'Tenth Schedule',
        difficulty: 'Intermediate'
      },
      {
        id: 'd15-q17',
        question: 'Which of the following constitutional provisions embodies the principle of "Popular Sovereignty" in the Republic of India?',
        options: ['The opening words of the Preamble: "We, the People of India"', 'Article 356 President\'s Rule', 'Article 72 Pardoning Power', 'Article 300A Right to Property'],
        correctIndex: 0,
        explanation: '"We, the People of India" establishes that political and constituent sovereignty emanates from the people of India, not from any monarch or external power.',
        articleRef: 'Preamble',
        difficulty: 'Foundational'
      },
      {
        id: 'd15-q18',
        question: 'Under Article 227 of the Constitution, the power of superintendence exercised by the High Court over all courts and tribunals in the State is:',
        options: ['Administrative superintendence only', 'Both judicial superintendence (correcting jurisdictional excess) and administrative superintendence', 'Financial audit only', 'Restricted to military courts martial'],
        correctIndex: 1,
        explanation: 'In Waryam Singh v. Amarnath (1954), the Supreme Court held that the power of superintendence under Article 227 is both judicial and administrative.',
        articleRef: 'Article 227',
        difficulty: 'Foundational'
      },
      {
        id: 'd15-q19',
        question: 'Under Article 359, who has the power to declare that the right to move any court for the enforcement of specified Fundamental Rights shall remain suspended during an Emergency?',
        options: ['The Prime Minister', 'The President of India by Order', 'The Chief Justice of India', 'The Speaker of the Lok Sabha'],
        correctIndex: 1,
        explanation: 'Article 359(1) empowers the President of India by presidential order to declare the suspension of the right to move any court for the enforcement of specified Fundamental Rights (except Articles 20 and 21).',
        articleRef: 'Article 359(1)',
        difficulty: 'Foundational'
      },
      {
        id: 'd15-q20',
        question: 'What is the standard marking deduction for each incorrect answer in the objective Preliminary stage of the JKPSC Prosecuting Officer (PO) Examination?',
        options: ['Zero negative marking', 'Minus 0.25 (-1/4th) of the marks assigned to that question', 'Minus 0.50 (-1/2) marks', 'Minus 1 full mark'],
        correctIndex: 1,
        explanation: 'In JKPSC examinations, incorrect responses in objective MCQ prelims attract a negative marking penalty of 0.25 (one-fourth) of the marks allotted to the question.',
        articleRef: 'JKPSC PO Exam Rules',
        difficulty: 'Foundational'
      }
    ]
  }
];
