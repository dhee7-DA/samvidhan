import { DAY15_MCQS_200, DAY15_COMPREHENSION_CASE_STUDIES } from './day15';
import { DAY14_MCQS_200, DAY14_COMPREHENSION_CASE_STUDIES } from './day14';
import { DAY13_MCQS_200, DAY13_COMPREHENSION_CASE_STUDIES } from './day13';
import { DAY12_MCQS_200, DAY12_COMPREHENSION_CASE_STUDIES } from './day12';
import { DAY11_MCQS_200, DAY11_COMPREHENSION_CASE_STUDIES } from './day11';
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
    comprehensionCaseStudies: DAY11_COMPREHENSION_CASE_STUDIES,
    mcqs: DAY11_MCQS_200
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
    comprehensionCaseStudies: DAY12_COMPREHENSION_CASE_STUDIES,
    mcqs: DAY12_MCQS_200
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
    comprehensionCaseStudies: DAY13_COMPREHENSION_CASE_STUDIES,
    mcqs: DAY13_MCQS_200
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
    comprehensionCaseStudies: DAY14_COMPREHENSION_CASE_STUDIES,
    mcqs: DAY14_MCQS_200
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
    comprehensionCaseStudies: DAY15_COMPREHENSION_CASE_STUDIES,
    mcqs: DAY15_MCQS_200
  }
];
