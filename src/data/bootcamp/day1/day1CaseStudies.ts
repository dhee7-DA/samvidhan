import type { BootcampComprehensionCaseStudy } from '../bootcampTypes';

export const DAY1_COMPREHENSION_CASE_STUDIES: BootcampComprehensionCaseStudy[] = [
  {
    id: 'd1-cs-1',
    caseNumber: 1,
    title: 'The Berubari Enclave Exchange & Cession of National Territory',
    legalTheme: 'Articles 1, 3 & 368 — Cession of Territory vs Boundary Demarcation',
    factualMatrix: `The Union Government of India entered into an international bilateral treaty with a neighbouring sovereign nation to settle long-standing border disputes. Under Article IV of the Treaty, India agreed to transfer absolute sovereign title and physical possession of three undisputed inhabited revenue villages in State X (total area 15 sq. km) to the foreign nation in exchange for simplified border patrol protocols. Parliament introduced the "Border Territorial Readjustment Bill" under Article 3(c) of the Constitution to "diminish the area of State X". The State Legislature of State X passed a unanimous resolution condemning the transfer. A public interest writ petition was filed before the Supreme Court challenging the Bill as ultra vires Article 3.`,
    framingQuestions: [
      '1. Can Parliament cede undisputed Indian territory to a foreign State by an ordinary enactment under Article 3(c)?',
      '2. What is the constitutional distinction between ceding national territory and demarcating an undemarcated disputed boundary?',
      '3. What constitutional procedure is mandatory to execute the transfer of sovereign territory?'
    ],
    statutoryApplicability: ['Article 1(3)', 'Article 3(c)', 'Article 73', 'Article 368'],
    modelAnswer: `1. ARTICLE 3 ENCOMPASSES ONLY INTERNAL REORGANIZATION: In the landmark Presidential Reference In re Berubari Union (1960), an 8-Judge Bench held that Article 3(c) ("diminishing the area of any State") applies solely to the internal rearrangement of constituent units within the territory of India. It does NOT authorize Parliament to cede national territory to a foreign sovereign.

2. CESSION VS BOUNDARY DEMARCATION: In Ram Kishore Sen (1966) and Maganbhai Ishwarbhai Patel (1969), the Supreme Court distinguished between cession and boundary settlement. Demarcating an undemarcated or disputed boundary is an ascertainment of pre-existing sovereign borders executable by Union executive power under Article 73. However, transferring undisputed sovereign Indian territory constitutes "cession".

3. CONSTITUTIONAL AMENDMENT MANDATORY UNDER ARTICLE 368: Transferring undisputed sovereign territory diminishes the "Territory of India" specified in Article 1(3) and the First Schedule. Such transfer can ONLY be effected by a Constitutional Amendment under Article 368 (as was done via the 9th Amendment for Berubari and the 100th Amendment for the Indo-Bangladesh enclaves in 2015). The proposed ordinary bill under Article 3 is unconstitutional and void.`,
    markingRubric: [
      { criterion: 'Application of In re Berubari Union (1960) ratio on Article 3 scope', marks: 4 },
      { criterion: 'Doctrinal distinction: Cession vs Boundary Demarcation (Maganbhai Patel)', marks: 3 },
      { criterion: 'Mandatory Article 368 procedure & First Schedule amendment', marks: 3 }
    ],
    comprehensionMCQs: [
      {
        id: 'd1-cs1-q1',
        testedDimension: 'Article Threshold',
        question: 'Under which constitutional provision must the transfer of undisputed sovereign Indian territory to a foreign nation be enacted?',
        options: ['Article 3(c) by simple majority', 'Article 368 by constitutional amendment', 'Article 73 by executive notification', 'Article 2 by presidential decree'],
        correctIndex: 1,
        explanation: 'In re Berubari Union (1960) settled that ceding national territory requires an amendment of the Constitution under Article 368.'
      },
      {
        id: 'd1-cs1-q2',
        testedDimension: 'Legal Doctrine',
        question: 'Why does Article 3(c) NOT authorize cession of Indian territory to a foreign power?',
        options: [
          'Because Article 3 deals solely with internal reorganization among constituent States of the Union',
          'Because State Governors have a pocket veto',
          'Because Article 3 requires UN ratification',
          'Because Article 3 applies only to Union Territories'
        ],
        correctIndex: 0,
        explanation: 'Article 3 is intended for the internal reorganization of the domestic map of India, not for extinguishing national sovereignty over territory.'
      },
      {
        id: 'd1-cs1-q3',
        testedDimension: 'Landmark Ratio',
        question: 'How did the Supreme Court in Maganbhai Ishwarbhai Patel (1969) distinguish Berubari?',
        options: [
          'It completely overruled Berubari',
          'It held that demarcating a disputed international boundary does NOT constitute cession and can be done by executive action',
          'It held that all treaties require a 2/3rd state assembly ratification',
          'It held that borders cannot be demarcated without army approval'
        ],
        correctIndex: 1,
        explanation: 'Maganbhai held that settling an undemarcated disputed boundary is not cession and does not require Article 368 amendment.'
      },
      {
        id: 'd1-cs1-q4',
        testedDimension: 'Judicial Remedy',
        question: 'What order will the Supreme Court pass regarding the Border Territorial Readjustment Bill introduced under Article 3?',
        options: [
          'Dismiss the PIL as premature',
          'Declare the Bill ultra vires Article 3 and direct that cession requires Article 368 compliance',
          'Direct the State Legislature to conduct a referendum',
          'Order the army to take over State X'
        ],
        correctIndex: 1,
        explanation: 'The Supreme Court will declare that Parliament cannot proceed under Article 3 and must follow Article 368.'
      }
    ]
  },
  {
    id: 'd1-cs-2',
    caseNumber: 2,
    title: 'Unilateral State Division & Non-Binding Assembly Views',
    legalTheme: 'Article 3 Proviso & Article 4 — State Reorganization & Consultative Federalism',
    factualMatrix: `To address regional developmental imbalances, Parliament introduced the "State of Kalinga Reorganization Bill" to divide State K into two separate States: North Kalinga and South Kalinga. Pursuant to the Proviso to Article 3, the President referred the Bill to the Legislative Assembly of State K, granting 30 days to express its views. On Day 25, the Assembly unanimously passed a statutory resolution opposing the division and forwarded its negative views. Undeterred, Parliament debated the Bill, amended several district boundaries on the floor of the House without making a fresh reference to State K, and passed the Bill by a simple majority. The Chief Minister of State K challenged the Act before the Supreme Court, arguing violation of federalism and the Proviso to Article 3.`,
    framingQuestions: [
      '1. Is Parliament constitutionally bound by the negative views of the State Legislature under the Proviso to Article 3?',
      '2. Does a subsequent amendment of boundary clauses on the floor of Parliament mandate a fresh presidential reference to the State Assembly?',
      '3. Does passing a State Reorganization Act by a simple majority violate Article 368?'
    ],
    statutoryApplicability: ['Article 1(1)', 'Article 3 Proviso', 'Article 4(2)', 'Article 368'],
    modelAnswer: `1. NON-BINDING NATURE OF STATE ASSEMBLY VIEWS: In Babulal Parate v. State of Bombay (1960), the Supreme Court ruled that the requirement under the Proviso to Article 3 is merely to give an opportunity to the State Legislature to express its views. Parliament is under no legal or constitutional obligation to accept those views. Consultation does not mean concurrence.

2. SUBSEQUENT AMENDMENTS IN PARLIAMENT DO NOT REQUIRE FRESH REFERENCE: In Babulal Parate (1960), the Court categorically held that once a Bill has been referred to the State Legislature, any amendments subsequently introduced and adopted on the floor of Parliament do not necessitate a fresh reference back to the State Legislature. Such a requirement would paralyze parliamentary legislative procedure.

3. SIMPLE MAJORITY VALIDATED UNDER ARTICLE 4(2): Article 4(2) expressly dictates that laws made under Article 2 or Article 3 shall NOT be deemed to be amendments of the Constitution under Article 368. Consequently, passage by a simple majority of members present and voting is constitutionally valid. The challenge by State K must be dismissed.`,
    markingRubric: [
      { criterion: 'Application of Babulal Parate (1960) ratio on consultative views', marks: 4 },
      { criterion: 'Ruling on floor amendments without fresh reference', marks: 3 },
      { criterion: 'Constitutional effect of Article 4(2) simple majority exemption', marks: 3 }
    ],
    comprehensionMCQs: [
      {
        id: 'd1-cs2-q1',
        testedDimension: 'Article Threshold',
        question: 'Under Article 3 Proviso, the constitutional obligation of the President is:',
        options: [
          'To obtain the mandatory consent of the State Assembly',
          'To refer the Bill to the State Legislature for expressing its views within a specified period',
          'To conduct a public referendum',
          'To seek prior approval of the Inter-State Council'
        ],
        correctIndex: 1,
        explanation: 'The Proviso requires referral for expressing views; it does not mandate obtaining the assembly\'s consent.'
      },
      {
        id: 'd1-cs2-q2',
        testedDimension: 'Legal Doctrine',
        question: 'How is the nature of the Indian Union described in light of Parliament\'s Article 3 power?',
        options: [
          'An indestructible Union of indestructible States',
          'An indestructible Union of destructible States',
          'A destructible Union of indestructible States',
          'A loose confederation of sovereign republics'
        ],
        correctIndex: 1,
        explanation: 'India is an indestructible Union of destructible States because Parliament can redraw state boundaries unilaterally under Article 3.'
      },
      {
        id: 'd1-cs2-q3',
        testedDimension: 'Landmark Ratio',
        question: 'What did the Supreme Court hold in Babulal Parate v. State of Bombay (1960)?',
        options: [
          'Floor amendments in Parliament require a fresh reference to the State',
          'Floor amendments in Parliament do NOT require a fresh reference, and the State\'s views are non-binding',
          'State Reorganization Acts require a 2/3rd majority',
          'State assemblies have absolute veto power'
        ],
        correctIndex: 1,
        explanation: 'Babulal Parate held that subsequent amendments in Parliament do not require fresh referral to the State Assembly.'
      },
      {
        id: 'd1-cs2-q4',
        testedDimension: 'Judicial Remedy',
        question: 'How will the Supreme Court decide the Chief Minister\'s challenge to the State of Kalinga Reorganization Act?',
        options: [
          'Quash the Act for lack of state assembly consent',
          'Dismiss the challenge and uphold the Act as constitutionally valid',
          'Direct the Governor to dissolve Parliament',
          'Order a recount of votes in Parliament'
        ],
        correctIndex: 1,
        explanation: 'The Supreme Court will dismiss the challenge and uphold the Act based on Article 3 and Article 4(2).'
      }
    ]
  },
  {
    id: 'd1-cs-3',
    caseNumber: 3,
    title: 'The Municipal Parking Wheel-Clamping Concessionaire',
    legalTheme: 'Article 12 — Agency / Instrumentality of State & Public Regulatory Powers',
    factualMatrix: `The Municipal Corporation of Metropolis incorporated "Metropolis Smart Mobility Ltd." under the Companies Act, retaining 51% equity shares while selling 49% to private financial investors. The Board of Directors comprised 3 municipal nominees and 2 private directors. By a concession agreement, the Corporation delegated its entire statutory traffic regulation, roadside parking enforcement, wheel-clamping, and impounding powers to the company. The company hired private security personnel who clamped the vehicle of Mr. R, an advocate, outside the High Court without notice, demanding ₹5,000 cash fine without issuing an official municipal compounding receipt. When Mr. R filed an Article 226 writ challenging the fine as arbitrary, the company argued it was a private commercial joint venture outside Article 12.`,
    framingQuestions: [
      '1. Does Metropolis Smart Mobility Ltd. satisfy the 6-factor test of Ajay Hasia and the domination test of Pradeep Kumar Biswas to be an instrumentality of State under Article 12?',
      '2. Can sovereign penal and regulatory powers (such as impounding property and levying fines) be privatized without statutory authority?',
      '3. Is a writ under Article 226 maintainable against the entity under the Andi Mukta public duty doctrine?'
    ],
    statutoryApplicability: ['Article 12', 'Article 14', 'Article 226', 'Motor Vehicles Act, 1988'],
    modelAnswer: `1. INSTRUMENTALITY UNDER ARTICLE 12: In Ajay Hasia (1981) and Pradeep Kumar Biswas (2002 7-Judge Bench), the Supreme Court ruled that an entity is an instrumentality of State if it is financially, functionally, and administratively dominated by the Government. Here, the Municipal Corporation owns 51% majority share capital, controls board composition (3 out of 5 directors), and transferred its statutory regulatory department to the company. It is squarely "the State" under Article 12.

2. ILLICIT DELEGATION OF PENAL REGULATORY POWERS: Depriving citizens of property (clamping/towing) and imposing pecuniary fines are sovereign police powers. Under Article 265 and Article 300A, no penalty or deprivation of property can occur except under express authority of law. A public authority cannot bypass constitutional guarantees by outsourcing coercive sovereign functions to private contractors (Ramana Dayaram Shetty).

3. WRIT MAINTAINABILITY UNDER ARTICLE 226: In Andi Mukta Sadguru (1989), the Court held that the form of the body is irrelevant; Article 226 reaches any person or authority discharging a "public function". Regulating traffic and public roads is quintessentially a public duty. The writ is maintainable, the arbitrary fine must be quashed, and compensation ordered.`,
    markingRubric: [
      { criterion: 'Application of Ajay Hasia & Pradeep Kumar Biswas 6-factor test', marks: 4 },
      { criterion: 'Analysis of delegation of coercive sovereign powers under Art 300A', marks: 3 },
      { criterion: 'Scope of Article 226 public duty doctrine (Andi Mukta)', marks: 3 }
    ],
    comprehensionMCQs: [
      {
        id: 'd1-cs3-q1',
        testedDimension: 'Article Threshold',
        question: 'Under what constitutional concept does a private incorporated company fall within Article 12?',
        options: [
          'Doctrine of Pleasure',
          'Instrumentality or Agency of the State',
          'Doctrine of Sovereign Immunity',
          'Territorial Nexus'
        ],
        correctIndex: 1,
        explanation: 'A company falls under Article 12 if it qualifies as an "instrumentality or agency of the State" under the Ramana Dayaram Shetty and Ajay Hasia tests.'
      },
      {
        id: 'd1-cs3-q2',
        testedDimension: 'Legal Doctrine',
        question: 'What is the governing test established in Pradeep Kumar Biswas (2002 7-Judge Bench)?',
        options: [
          'The entity must be created directly by an Act of Parliament',
          'The body must be financially, functionally, and administratively dominated by the Government',
          'The entity must have 100% government ownership',
          'The employees must hold civil posts under Article 311'
        ],
        correctIndex: 1,
        explanation: 'Pradeep Kumar Biswas held that the test is whether the body is financially, functionally, and administratively dominated by the Government.'
      },
      {
        id: 'd1-cs3-q3',
        testedDimension: 'Landmark Ratio',
        question: 'In Andi Mukta Sadguru (1989), what was the decisive factor for issuing a writ under Article 226?',
        options: [
          'The corporate form of the institution',
          'The nature of the public duty imposed on the body',
          'Whether the body was audited by the CAG',
          'Whether the body had received presidential approval'
        ],
        correctIndex: 1,
        explanation: 'Andi Mukta established that Article 226 looks at the nature of the public duty performed, not the formal incorporation of the body.'
      },
      {
        id: 'd1-cs3-q4',
        testedDimension: 'Judicial Remedy',
        question: 'What order will the High Court pass on Mr. R\'s writ petition?',
        options: [
          'Dismiss the petition as a private contractual matter',
          'Quash the ₹5,000 fine as arbitrary and issue a writ of mandamus enforcing regulatory guidelines',
          'Direct Mr. R to pay the fine in installment',
          'Transfer the car to the private company'
        ],
        correctIndex: 1,
        explanation: 'The High Court will quash the arbitrary penalty under Article 14 and issue mandamus directing lawful regulatory compliance.'
      }
    ]
  },
  {
    id: 'd1-cs-4',
    caseNumber: 4,
    title: 'The Unaided Deemed University Professor Dismissal',
    legalTheme: 'Article 12 & Article 226 — Private Educational Bodies & Public Functions',
    factualMatrix: `Dr. S, an Associate Professor of Bio-Technology at "Pacific Deemed University" (a privately established, non-statutory institution notified under Section 3 of the UGC Act), published an academic paper exposing financial irregularities in the university trust. The Vice-Chancellor issued an order summarily terminating Dr. S\'s services without issuing a charge-sheet, without conducting a domestic inquiry, and in violation of UGC Mandatory Regulations, 2018. Dr. S filed a writ petition under Article 226 before the High Court seeking reinstatement and quashing of the termination order. The University objected to maintainability, contending that as an unaided private deemed university receiving no government grants, it was not "the State" under Article 12 and its employment contracts were purely private.`,
    framingQuestions: [
      '1. Is an unaided private deemed university "the State" under Article 12 of the Constitution?',
      '2. Can an Article 226 writ lie against a private deemed university for breach of mandatory statutory UGC Regulations?',
      '3. How does the Supreme Court\'s ruling in Janet Jeyapaul (2015) apply to this employment termination?'
    ],
    statutoryApplicability: ['Article 12', 'Article 14', 'Article 226', 'UGC Act, 1956'],
    modelAnswer: `1. ARTICLE 12 AMENABILITY: An unaided private deemed university is generally not "the State" under Article 12 unless it is financially and administratively dominated by the Government (Zee Telefilms). However, its status under Article 12 does not conclude its amenability to Article 226.

2. IMPARTING HIGHER EDUCATION IS A PUBLIC FUNCTION: In Janet Jeyapaul v. SRM University (2015), the Supreme Court held that an unaided deemed university imparting higher education discharges a public function of high public importance. Where an institution functions under the statutory notification of the UGC Act and is bound by UGC Regulations, its actions are imbued with a public character.

3. WRIT MAINTAINABILITY UNDER ARTICLE 226: In Janet Jeyapaul (2015) and Binny Ltd. (2005), the Court held that while ordinary private master-servant contracts are not amenable to Article 226, where a termination violates mandatory statutory regulations (such as UGC Regulations having the force of law), a writ under Article 226 is maintainable. The High Court will quash the summary termination for violation of natural justice and statutory rules.`,
    markingRubric: [
      { criterion: 'Distinction between Article 12 (State) and Article 226 (Public Duty)', marks: 3 },
      { criterion: 'Application of Janet Jeyapaul (2015) deemed university precedent', marks: 4 },
      { criterion: 'Violation of mandatory statutory UGC regulations as ground for writ', marks: 3 }
    ],
    comprehensionMCQs: [
      {
        id: 'd1-cs4-q1',
        testedDimension: 'Article Threshold',
        question: 'Under which provision is a writ maintainable against a non-State entity discharging public functions?',
        options: ['Article 32 only', 'Article 226 of the Constitution', 'Article 136 only', 'Article 311'],
        correctIndex: 1,
        explanation: 'Article 226 is wider than Article 32 and can be issued to "any person or authority" discharging public duties.'
      },
      {
        id: 'd1-cs4-q2',
        testedDimension: 'Legal Doctrine',
        question: 'Why is imparting higher education treated differently from ordinary private commercial employment?',
        options: [
          'Because teachers are civil servants under Article 311',
          'Because education is a recognized public function directly impacting public welfare and governed by statutory standards',
          'Because private universities are owned by the President',
          'Because education does not require contracts'
        ],
        correctIndex: 1,
        explanation: 'Education is an essential public function; when governed by statutory regulations, public law discipline applies.'
      },
      {
        id: 'd1-cs4-q3',
        testedDimension: 'Landmark Ratio',
        question: 'In Janet Jeyapaul v. SRM University (2015), the Supreme Court ruled that:',
        options: [
          'Deemed universities are completely private and immune from writs',
          'A deemed university imparting education discharges a public function, and a writ petition by a lecturer is maintainable',
          'UGC Regulations are voluntary guidelines',
          'Only the Governor can dismiss professors'
        ],
        correctIndex: 1,
        explanation: 'Janet Jeyapaul upheld writ maintainability against deemed universities violating statutory UGC standards.'
      },
      {
        id: 'd1-cs4-q4',
        testedDimension: 'Judicial Remedy',
        question: 'What order should the High Court issue regarding Dr. S\'s summary termination?',
        options: [
          'Dismiss the writ and direct him to the civil court',
          'Quash the termination order for violation of mandatory UGC Regulations and natural justice',
          'Order the university to close down',
          'Direct Dr. S to tender an unconditional apology'
        ],
        correctIndex: 1,
        explanation: 'The High Court will quash the unlawful termination order and direct adherence to statutory procedure.'
      }
    ]
  },
  {
    id: 'd1-cs-5',
    caseNumber: 5,
    title: 'The Pre-Constitutional Transport Monopoly & The Doctrine of Eclipse',
    legalTheme: 'Article 13(1) & Article 19(6) — Pre-Constitutional Validity & Lifting of Eclipse',
    factualMatrix: `In 1948, the Provincial Government of Central Province enacted the "Provincial Road Transport Act, 1948", empowering the State to create an exclusive monopoly in motor transport services. On 26th January 1950, the Constitution commenced, and private operators challenged the Act, contending that the statutory monopoly violated their fundamental right under Article 19(1)(g). Before any judicial decision, Parliament enacted the 1st Constitutional Amendment Act in June 1951, amending Article 19(6) to allow the State to create trade and transport monopolies. In 1953, the State Transport Authority issued notifications under the 1948 Act taking over all private bus routes. A private operator, Mr. B, challenged the notifications, arguing that the 1948 Act became void on 26 Jan 1950 and remained dead, requiring fresh re-enactment.`,
    framingQuestions: [
      '1. Did the 1948 Act become void ab initio (dead from birth) on 26th January 1950 under Article 13(1)?',
      '2. What is the operational effect of the "Doctrine of Eclipse" on pre-constitutional laws?',
      '3. Did the 1st Constitutional Amendment Act, 1951 lift the shadow of unconstitutionality without fresh legislative re-enactment?'
    ],
    statutoryApplicability: ['Article 13(1)', 'Article 19(1)(g)', 'Article 19(6)', '1st Constitutional Amendment, 1951'],
    modelAnswer: `1. PRE-CONSTITUTIONAL LAWS ARE NOT VOID AB INITIO: In Keshavan Madhava Menon (1951) and Bhikaji Narain Dhakras v. State of M.P. (1955), the Supreme Court ruled that pre-constitutional laws were validly enacted by a competent legislature. Article 13(1) is prospective; it does not wipe out pre-constitutional laws from the statute book. They are void only "to the extent of such inconsistency" with Part III.

2. THE DOCTRINE OF ECLIPSE: Under the Doctrine of Eclipse, an inconsistent pre-constitutional statute is not dead; it remains in a dormant or morbid condition, overshadowed by the fundamental right. It remains operative as regards pre-constitutional rights and liabilities and non-citizens who cannot invoke Article 19.

3. LIFTING OF ECLIPSE BY CONSTITUTIONAL AMENDMENT: When Parliament amended Article 19(6) via the 1st Constitutional Amendment (1951) permitting state monopolies, the constitutional shadow was removed. The 1948 Act was freed from the eclipse and became fully operative and enforceable from the date of the amendment without any fresh legislative re-enactment. The 1953 route takeover notifications are fully valid.`,
    markingRubric: [
      { criterion: 'Explanation of prospective operation of Article 13(1) (Keshavan Menon)', marks: 3 },
      { criterion: 'Formulation of the Doctrine of Eclipse (Bhikaji Narain Dhakras)', marks: 4 },
      { criterion: 'Revival of statute post-1st Amendment without fresh enactment', marks: 3 }
    ],
    comprehensionMCQs: [
      {
        id: 'd1-cs5-q1',
        testedDimension: 'Article Threshold',
        question: 'Under which provision does the Doctrine of Eclipse apply to pre-constitutional laws?',
        options: ['Article 13(1)', 'Article 13(2)', 'Article 13(3)', 'Article 368'],
        correctIndex: 0,
        explanation: 'Article 13(1) applies to pre-constitutional laws in force prior to 26 Jan 1950, forming the basis of the Doctrine of Eclipse.'
      },
      {
        id: 'd1-cs5-q2',
        testedDimension: 'Legal Doctrine',
        question: 'What happens to a pre-constitutional statute under the Doctrine of Eclipse?',
        options: [
          'It is permanently erased from the statute book for all purposes',
          'It remains dormant/shadowed by fundamental rights, but revives when the constitutional barrier is removed',
          'It is automatically converted into an Ordinance',
          'It applies only during an emergency'
        ],
        correctIndex: 1,
        explanation: 'The statute is not dead; it remains dormant and revives once the constitutional inconsistency is removed.'
      },
      {
        id: 'd1-cs5-q3',
        testedDimension: 'Landmark Ratio',
        question: 'In Bhikaji Narain Dhakras (1955), which amendment lifted the eclipse on state transport monopolies?',
        options: ['42nd Amendment Act, 1976', '1st Constitutional Amendment Act, 1951', '44th Amendment Act, 1978', '24th Amendment Act, 1971'],
        correctIndex: 1,
        explanation: 'The 1st Amendment Act, 1951 amended Article 19(6) to permit state monopolies, thereby lifting the eclipse.'
      },
      {
        id: 'd1-cs5-q4',
        testedDimension: 'Judicial Remedy',
        question: 'What will be the outcome of Mr. B\'s challenge to the 1953 notifications?',
        options: [
          'The challenge is dismissed and the notifications are upheld as valid',
          'The notifications are struck down as void ab initio',
          'The State must pay compensation to all private operators',
          'The 1948 Act must be sent to the President for fresh assent'
        ],
        correctIndex: 0,
        explanation: 'The challenge is dismissed because the 1948 Act revived and was fully valid when the notifications were issued.'
      }
    ]
  },
  {
    id: 'd1-cs-6',
    caseNumber: 6,
    title: 'The Post-Constitutional Stillborn Mineral Licensing Statute',
    legalTheme: 'Article 13(2) — Post-Constitutional Laws & The Inapplicability of Eclipse',
    factualMatrix: `In 1965 (post-constitution), State Legislature Y enacted the "State Mineral Processing Act, 1965". Section 7 of the Act authorized the State Mining Department to seize private mineral refining plants without notice, without hearing, and without paying compensation, in direct violation of Article 14, 19(1)(g), and Article 31 (as it then existed). In 1968, the High Court struck down Section 7 as unconstitutional. In 1978, the 44th Constitutional Amendment Act deleted the Fundamental Right to Property from Part III. Following this amendment, the State Mining Department issued fresh seizure orders in 1980 under the struck-down Section 7, arguing that the deletion of Article 31 "lifted the eclipse" and revived Section 7 without requiring fresh legislation. An aggrieved mine owner challenged the seizure.`,
    framingQuestions: [
      '1. Does the Doctrine of Eclipse apply to post-constitutional statutes enacted in contravention of Article 13(2)?',
      '2. What is the constitutional status of a post-constitutional law made in violation of Part III (Deep Chand and Mahendra Lal Jaini)?',
      '3. Can a subsequent constitutional amendment revive a post-constitutional stillborn law without fresh enactment?'
    ],
    statutoryApplicability: ['Article 13(2)', 'Article 14', 'Article 19(1)(g)', '44th Constitutional Amendment, 1978'],
    modelAnswer: `1. INAPPLICABILITY OF ECLIPSE TO POST-CONSTITUTIONAL LAWS: In Deep Chand v. State of U.P. (1959) and Mahendra Lal Jaini v. State of U.P. (1963), the Supreme Court authoritatively settled that the Doctrine of Eclipse applies ONLY to pre-constitutional laws under Article 13(1). It has NO application to post-constitutional laws governed by Article 13(2).

2. POST-CONSTITUTIONAL VIOLATIONS ARE STILLBORN (NULLITY AB INITIO): Article 13(2) creates an absolute total prohibition on legislative competence: "The State shall not make any law which takes away or abridges Part III." A law made in contravention of this prohibition is born dead (a stillborn law). It is a complete nullity from its inception, devoid of any legal existence.

3. SUBSEQUENT AMENDMENTS CANNOT REVIVE A STILLBORN LAW: Because Section 7 was a nullity from its inception, the subsequent 44th Amendment in 1978 could not infuse life into a dead law. A shadow cannot be lifted from something that never legally existed. The State cannot issue seizure orders under Section 7 without enacting a completely fresh statutory law. The 1980 seizure orders are illegal and void.`,
    markingRubric: [
      { criterion: 'Doctrinal rule: Eclipse applies to Article 13(1) and NOT Article 13(2)', marks: 3 },
      { criterion: 'Application of Deep Chand (1959) & Mahendra Lal Jaini (1963) stillborn doctrine', marks: 4 },
      { criterion: 'Inability of subsequent constitutional amendments to revive dead statutes', marks: 3 }
    ],
    comprehensionMCQs: [
      {
        id: 'd1-cs6-q1',
        testedDimension: 'Article Threshold',
        question: 'Which constitutional provision governs the invalidity of post-constitutional laws violating Part III?',
        options: ['Article 13(1)', 'Article 13(2)', 'Article 13(4)', 'Article 368'],
        correctIndex: 1,
        explanation: 'Article 13(2) expressly bars the State from enacting post-constitutional laws that abridge Fundamental Rights.'
      },
      {
        id: 'd1-cs6-q2',
        testedDimension: 'Legal Doctrine',
        question: 'What is the legal status of a post-constitutional law made in contravention of Article 13(2)?',
        options: [
          'It is temporarily dormant under eclipse',
          'It is a stillborn law and a total nullity ab initio',
          'It remains valid until repealed by Parliament',
          'It is valid against non-citizens only'
        ],
        correctIndex: 1,
        explanation: 'Under Deep Chand (1959), a post-constitutional law violating Part III is born dead and is a nullity ab initio.'
      },
      {
        id: 'd1-cs6-q3',
        testedDimension: 'Landmark Ratio',
        question: 'In Mahendra Lal Jaini (1963), the Supreme Court ruled that:',
        options: [
          'The Doctrine of Eclipse revives post-constitutional laws after amendment',
          'The Doctrine of Eclipse does not apply to post-constitutional laws, which require fresh re-enactment',
          'Article 13(2) does not apply to state land laws',
          'High Courts cannot invalidate post-constitutional statutes'
        ],
        correctIndex: 1,
        explanation: 'Mahendra Lal Jaini reaffirmed that post-constitutional laws cannot be revived by eclipse and must be freshly enacted.'
      },
      {
        id: 'd1-cs6-q4',
        testedDimension: 'Judicial Remedy',
        question: 'What order will the court pass regarding the 1980 mineral seizure orders?',
        options: [
          'Uphold the seizure under the 44th Amendment',
          'Quash the seizure orders as Section 7 was a nullity that could not be revived without fresh enactment',
          'Direct the mine owner to apply for a fresh license',
          'Order the mine owner to pay damages to the Mining Department'
        ],
        correctIndex: 1,
        explanation: 'The court will quash the seizure orders as Section 7 is non-existent in law.'
      }
    ]
  },
  {
    id: 'd1-cs-7',
    caseNumber: 7,
    title: 'The Severability of Commercial Betting & Skill Competitions',
    legalTheme: 'Article 13 — Doctrine of Severability & R.M.D. Chamarbaugwalla Rules',
    factualMatrix: `State Z enacted the "Prize Competitions and Lotteries Control Act, 2021". Section 2(d) of the Act defined "Prize Competition" broadly as "any competition in which prizes are offered for the solving of puzzles, crosswords, number games, or missing words, whether depending on skill or chance." Section 4 imposed a blanket penal ban on all prize competitions, making it a non-bailable offence. An association of competitive crossword puzzle publishers challenged the Act, proving that crossword solving requires substantial vocabulary, cognitive intelligence, and literary skill. The High Court found that banning skill competitions violated Article 19(1)(g). The State Advocate General argued that even if skill competitions are protected, gambling prize competitions of chance can be severed and penalized under the Act.`,
    framingQuestions: [
      '1. What are the governing rules of the Doctrine of Severability laid down in R.M.D. Chamarbaugwalla (1957)?',
      '2. Can an unconstitutional composite statutory definition be severed by the court without redrafting the statute?',
      '3. Does commercial gambling enjoy protection as a fundamental right to trade under Article 19(1)(g)?'
    ],
    statutoryApplicability: ['Article 13', 'Article 19(1)(g)', 'Article 19(6)'],
    modelAnswer: `1. GAMBLING IS RES EXTRA COMMERCIUM: In State of Bombay v. R.M.D. Chamarbaugwalla (1957), the Supreme Court held that gambling, betting, and lotteries are vices (res extra commercium) and do not constitute "trade, commerce or intercourse" under Article 19(1)(g) or Article 301. Citizens have no fundamental right to gamble.

2. SEVERABILITY OF COMPOSITE DEFINITION: In R.M.D. Chamarbaugwalla v. Union of India (1957), the Constitution Bench formulated 7 seminal rules of severability:
- If the valid and invalid provisions are distinct and separable, the valid part will be upheld.
- The test is whether the legislature would have enacted the valid part if it knew the invalid part would be struck down.
- Severability can apply to a composite definition if its application to gambling is distinct from its application to skill competitions.

3. COURT\'S RULING: The Court will apply severability: Section 2(d) and Section 4 will be struck down ONLY in so far as they apply to competitions involving substantial skill (protecting the publishers under Article 19(1)(g)), while preserving the penal ban on competitions of a gambling nature. The entire Act does not fall.`,
    markingRubric: [
      { criterion: 'Classification of gambling as res extra commercium under Art 19(1)(g)', marks: 3 },
      { criterion: 'Application of R.M.D. Chamarbaugwalla (1957) severability rules', marks: 4 },
      { criterion: 'Excision of unconstitutional part while saving gambling regulation', marks: 3 }
    ],
    comprehensionMCQs: [
      {
        id: 'd1-cs7-q1',
        testedDimension: 'Article Threshold',
        question: 'Under which constitutional phrase in Article 13 is the Doctrine of Severability anchored?',
        options: ['"Laws in force"', '"To the extent of such inconsistency"', '"Unless the context otherwise requires"', '"In accordance with law"'],
        correctIndex: 1,
        explanation: 'The phrase "to the extent of such inconsistency/contravention" in Article 13(1) and 13(2) is the textual basis of Severability.'
      },
      {
        id: 'd1-cs7-q2',
        testedDimension: 'Legal Doctrine',
        question: 'Does commercial gambling enjoy fundamental right protection under Article 19(1)(g)?',
        options: [
          'Yes, all commercial businesses are protected under Article 19(1)(g)',
          'No, gambling is res extra commercium and outside the protection of Article 19(1)(g)',
          'Protected only if licensed by the State',
          'Protected if 28% GST is paid'
        ],
        correctIndex: 1,
        explanation: 'Gambling is res extra commercium and carries no fundamental right protection (Chamarbaugwalla 1957).'
      },
      {
        id: 'd1-cs7-q3',
        testedDimension: 'Landmark Ratio',
        question: 'What is the cardinal test of legislative intention in R.M.D. Chamarbaugwalla (1957)?',
        options: [
          'Whether the Governor approved the bill',
          'Whether the legislature would have enacted the valid part independently had it known the invalid part was void',
          'Whether the opposition voted in favor',
          'Whether the statute was passed within 30 days'
        ],
        correctIndex: 1,
        explanation: 'The test is whether the legislature would have enacted the valid remainder independently.'
      },
      {
        id: 'd1-cs7-q4',
        testedDimension: 'Judicial Remedy',
        question: 'What order will the High Court pass regarding the 2021 Act?',
        options: [
          'Strike down the entire 2021 Act as completely void',
          'Sever the definition, holding the ban inapplicable to skill competitions, while upholding the ban on gambling lotteries',
          'Order the crossword publishers to obtain gambling licenses',
          'Dismiss the publishers\' writ petition'
        ],
        correctIndex: 1,
        explanation: 'The Court will sever the application of the Act, protecting skill competitions while keeping the gambling ban alive.'
      }
    ]
  },
  {
    id: 'd1-cs-8',
    caseNumber: 8,
    title: 'The National Cricket Regulatory Board Monopoly',
    legalTheme: 'Article 12 & Article 226 — Monopoly Sporting Federations & Public Functions',
    factualMatrix: `The "National Cricket Control Board" (NCCB) is a society registered under the Societies Registration Act. It receives zero financial grants from the Government of India, holds all its own assets, and its office bearers are elected by state associations. However, the NCCB selects the national cricket team representing India internationally, controls all telecast rights, regulates competitive cricket across the country, and uses the national flag and emblem on team jerseys. When NCCB arbitrarily terminated the media broadcasting rights of "Sat-Net TV" without reasons and blacklisted the channel, Sat-Net TV filed an Article 32 writ petition before the Supreme Court and an alternative Article 226 writ before the High Court. NCCB contended it was a purely private society immune from writ jurisdiction.`,
    framingQuestions: [
      '1. Does NCCB qualify as "the State" under Article 12 applying the Zee Telefilms (2005) Constitution Bench standard?',
      '2. Can an Article 32 writ petition be maintained against NCCB before the Supreme Court?',
      '3. Is NCCB amenable to the writ jurisdiction of the High Court under Article 226 for arbitrary exercise of public functions?'
    ],
    statutoryApplicability: ['Article 12', 'Article 14', 'Article 19(1)(g)', 'Article 32', 'Article 226'],
    modelAnswer: `1. NCCB IS NOT STATE UNDER ARTICLE 12: In Zee Telefilms Ltd. v. Union of India (2005 5-Judge Bench), the Supreme Court examined the exact status of the BCCI. The Court held that since the body is not created by statute, the Government holds no share capital, provides no financial assistance, and exercises no deep and pervasive administrative control, it is NOT an instrumentality of State under Article 12.

2. ARTICLE 32 PETITION NOT MAINTAINABLE: Article 32 is strictly confined to the enforcement of Fundamental Rights against "the State" defined in Article 12. Because NCCB does not fall within Article 12, an Article 32 writ petition directly before the Supreme Court is not maintainable.

3. ARTICLE 226 WRIT LIES BEFORE HIGH COURT: In Zee Telefilms (2005) and BCCI v. Cricket Association of Bihar (2015), the Court affirmed that NCCB exercises a state-conferred de facto monopoly, selects national teams representing India, and discharges public functions of immense national impact. Therefore, while not State under Article 12, it is amenable to Article 226. The High Court will entertain the writ to examine if the media termination was arbitrary under public law standards.`,
    markingRubric: [
      { criterion: 'Application of Zee Telefilms (2005) ratio excluding body from Art 12', marks: 4 },
      { criterion: 'Inadmissibility of Article 32 writ against non-Article 12 entity', marks: 3 },
      { criterion: 'Affirmation of Article 226 writ maintainability for public functions', marks: 3 }
    ],
    comprehensionMCQs: [
      {
        id: 'd1-cs8-q1',
        testedDimension: 'Article Threshold',
        question: 'Why is an Article 32 writ petition barred against a private sports monopoly like NCCB?',
        options: [
          'Because sports disputes must go to FIFA',
          'Because Article 32 enforces fundamental rights strictly against "the State" as defined in Article 12',
          'Because Article 32 applies only during emergencies',
          'Because cricket is not recognized in the Constitution'
        ],
        correctIndex: 1,
        explanation: 'Article 32 remedies are available solely against "the State" under Article 12; non-Article 12 bodies cannot be sued under Article 32.'
      },
      {
        id: 'd1-cs8-q2',
        testedDimension: 'Legal Doctrine',
        question: 'Under what doctrine can a High Court issue a writ against NCCB under Article 226?',
        options: [
          'Doctrine of Sovereign Immunity',
          'Public Duty / Public Function Doctrine',
          'Doctrine of Pleasure',
          'Doctrine of Pith and Substance'
        ],
        correctIndex: 1,
        explanation: 'Under the Public Function Doctrine, any entity performing public functions impacting the public at large is amenable to Article 226.'
      },
      {
        id: 'd1-cs8-q3',
        testedDimension: 'Landmark Ratio',
        question: 'What was the majority holding in Zee Telefilms Ltd. v. Union of India (2005)?',
        options: [
          'BCCI is State under Article 12 and amenable to Article 32',
          'BCCI is NOT State under Article 12, but amenable to Article 226 High Court writ jurisdiction',
          'BCCI is immune from all judicial review',
          'BCCI must be nationalized'
        ],
        correctIndex: 1,
        explanation: 'Zee Telefilms held BCCI is not State under Article 12, but amenable to Article 226 for discharging public duties.'
      },
      {
        id: 'd1-cs8-q4',
        testedDimension: 'Judicial Remedy',
        question: 'What procedural order should the courts pass on Sat-Net TV\'s petitions?',
        options: [
          'Dismiss both Article 32 and Article 226 petitions',
          'Dismiss the Article 32 petition as non-maintainable, but entertain the Article 226 writ in the High Court on merits',
          'Allow the Article 32 petition directly',
          'Direct criminal prosecution of NCCB officials'
        ],
        correctIndex: 1,
        explanation: 'The Supreme Court will dismiss the Article 32 petition, while the High Court will hear the Article 226 writ on merits.'
      }
    ]
  },
  {
    id: 'd1-cs-9',
    caseNumber: 9,
    title: 'Constitutional Amendment of the Preamble & Basic Structure',
    legalTheme: 'Preamble & Article 368 — Constituent Power & Basic Structure Limits',
    factualMatrix: `Parliament passes the "Constitution (128th Amendment) Act" by a special 2/3rd majority under Article 368. The Amendment seeks to alter the Preamble by deleting the words "SECULAR" and "SOCIALIST", and replacing the phrase "SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC" with "SOVEREIGN THEOCRATIC REPUBLIC", while simultaneously declaring a particular religion as the official State religion of India. A confederation of civil liberties organizations challenges the Amendment before a 9-Judge Constitution Bench of the Supreme Court, alleging that the amendment destroys the Basic Structure of the Indian Constitution. The Attorney General argues that since the 42nd Amendment added "Socialist" and "Secular" to the Preamble in 1976, Parliament has unlimited constituent amending power to delete or alter any word in the Preamble under Article 368.`,
    framingQuestions: [
      '1. Is the Preamble subject to the amending power of Parliament under Article 368 (Kesavananda Bharati)?',
      '2. What is the scope of implied constitutional limitations on Parliament\'s constituent amending power?',
      '3. Can Secularism and Democracy be deleted from the Preamble, and does replacing them with a "Theocratic Republic" damage the Basic Structure (S.R. Bommai)?'
    ],
    statutoryApplicability: ['Preamble', 'Article 25', 'Article 368', '42nd Amendment Act, 1976'],
    modelAnswer: `1. PREAMBLE IS AMENDABLE BUT BOUND BY BASIC STRUCTURE: In Kesavananda Bharati v. State of Kerala (1973), the 13-Judge Bench held that the Preamble is an integral part of the Constitution and can be amended under Article 368. However, Parliament\'s constituent power is bounded by an implied limitation: it cannot alter, damage, or destroy the Basic Structure or essential identity of the Constitution.

2. SECULARISM AS UNTOUCHABLE BASIC FEATURE: In S.R. Bommai v. Union of India (1994 9-Judge Bench), the Supreme Court unequivocally ruled that Secularism is an unalterable Basic Feature of the Indian Constitution. Secularism was not created by the 42nd Amendment; it was an inherent constitutional identity from 1950. The State has no religion, and equal treatment of all faiths ("Sarva Dharma Sambhava") cannot be abridged.

3. UNCONSTITUTIONALITY OF THE AMENDMENT: Converting India from a "Democratic Republic" into a "Theocratic Republic" obliterates democratic equality, freedom of conscience (Article 25), and secularism. In Minerva Mills (1980), the Court held that Parliament cannot use its limited amending power under Article 368 to expand that power into an unlimited sovereign power to destroy constitutional identity. The 128th Amendment is ultra vires Article 368, unconstitutional, and void.`,
    markingRubric: [
      { criterion: 'Application of Kesavananda Bharati (1973) ratio on Preamble amendability', marks: 4 },
      { criterion: 'Affirmation of Secularism as Basic Structure under S.R. Bommai (1994)', marks: 3 },
      { criterion: 'Striking down the amendment under Minerva Mills (1980) limited amending power rule', marks: 3 }
    ],
    comprehensionMCQs: [
      {
        id: 'd1-cs9-q1',
        testedDimension: 'Article Threshold',
        question: 'Under which provision is the Preamble amended by Parliament?',
        options: ['Article 368', 'Article 4', 'Article 13(2)', 'Article 366'],
        correctIndex: 0,
        explanation: 'The Preamble is part of the Constitution and can only be amended under Article 368 (Kesavananda Bharati 1973).'
      },
      {
        id: 'd1-cs9-q2',
        testedDimension: 'Legal Doctrine',
        question: 'What is the governing constitutional limitation on Parliament when amending the Preamble?',
        options: [
          'Doctrine of Severability',
          'Basic Structure Doctrine',
          'Doctrine of Eclipse',
          'Territorial Nexus'
        ],
        correctIndex: 1,
        explanation: 'Any amendment under Article 368 is subject to the judicial review of the Basic Structure Doctrine.'
      },
      {
        id: 'd1-cs9-q3',
        testedDimension: 'Landmark Ratio',
        question: 'In S.R. Bommai (1994), what was the 9-Judge Bench ruling on Secularism?',
        options: [
          'Secularism is a temporary political compromise',
          'Secularism is an integral and inviolable component of the Basic Structure of the Constitution',
          'Secularism applies only to minority communities',
          'Secularism was abolished by the 44th Amendment'
        ],
        correctIndex: 1,
        explanation: 'S.R. Bommai established that Secularism is an inviolable basic feature of the Constitution.'
      },
      {
        id: 'd1-cs9-q4',
        testedDimension: 'Judicial Remedy',
        question: 'What will be the verdict of the 9-Judge Constitution Bench on the 128th Amendment?',
        options: [
          'Uphold the amendment under sovereign parliamentary supremacy',
          'Strike down the amendment as unconstitutional for destroying Secularism and the Basic Structure',
          'Refer the amendment to a national plebiscite',
          'Advise the President to dissolve Parliament'
        ],
        correctIndex: 1,
        explanation: 'The Supreme Court will strike down the amendment as unconstitutional and void for destroying the Basic Structure.'
      }
    ]
  },
  {
    id: 'd1-cs-10',
    caseNumber: 10,
    title: 'State Assembly Dissolution During Article 3 Reference',
    legalTheme: 'Article 3 Proviso & Article 356 — State Reorganization During President\'s Rule',
    factualMatrix: `The Union Government proposed to reorganize State M into two Union Territories. Before the Article 3 Bill could be referred to the State Legislative Assembly, political instability led to the imposition of President\'s Rule under Article 356 in State M, and the State Assembly was dissolved by the President. While President\'s Rule was active, the President referred the Article 3 Reorganization Bill to Parliament itself (which exercised the powers of the State Legislature under Article 356(1)(b)). Parliament debated and approved the Bill on behalf of the dissolved State Assembly and proceeded to enact the Reorganization Act by simple majority. Aggrieved former legislators challenged the Act, contending that dissolving the Assembly to bypass the mandatory reference under the Proviso to Article 3 constitutes a fraud on the Constitution.`,
    framingQuestions: [
      '1. Can Parliament exercise the consultative powers of a State Legislature under Article 3 during President\'s Rule?',
      '2. Does the dissolution of a State Legislative Assembly render an Article 3 reorganization unconstitutional?',
      '3. How did the 5-Judge Constitution Bench in In re Article 370 (2023) address state reorganization and conversion into Union Territories?'
    ],
    statutoryApplicability: ['Article 3 Proviso', 'Article 4(2)', 'Article 356', 'In re Article 370 (2023)'],
    modelAnswer: `1. EXERCISE OF STATE POWERS BY PARLIAMENT UNDER ARTICLE 356: Under Article 356(1)(b), when President\'s Rule is declared, the powers of the State Legislature are declaratorily exercisable by or under the authority of Parliament. However, whether the consultative function under the Proviso to Article 3 can be substituted by Parliament itself is a matter of profound constitutional friction.

2. IN RE ARTICLE 370 (2023 CONSTITUTION BENCH RATIO): In In re Article 370 (December 2023), a unanimous 5-Judge Constitution Bench headed by CJI D.Y. Chandrachud addressed the reorganization of Jammu & Kashmir under Article 3 during President\'s Rule:
- The Court held that views expressed under the Proviso to Article 3 are non-binding and consultative only (reaffirming Babulal Parate).
- Parliament can exercise the powers of the State Legislature under Article 356(1)(b).
- The Court accepted the Solicitor General\'s solemn undertaking that statehood would be restored, thereby upholding the carving out of Ladakh as a Union Territory, while refraining from laying down an absolute rule on permanently converting States into UTs.

3. FRAUD ON THE CONSTITUTION TEST: If the executive imposes Article 356 solely with the collateral objective of bypassing state opposition to Article 3 reorganization, such action is subject to judicial review under S.R. Bommai (1994) for malafide exercise of emergency power. However, where emergency imposition is otherwise valid, the absence of an active assembly does not freeze Parliament\'s reorganizing powers under Article 3. The Act is constitutionally sustainable.`,
    markingRubric: [
      { criterion: 'Interplay between Article 3 Proviso and Article 356(1)(b)', marks: 4 },
      { criterion: 'Application of In re Article 370 (2023 5-Judge Bench) precedent', marks: 3 },
      { criterion: 'Constitutional scrutiny of malafide use of emergency powers (S.R. Bommai)', marks: 3 }
    ],
    comprehensionMCQs: [
      {
        id: 'd1-cs10-q1',
        testedDimension: 'Article Threshold',
        question: 'Under which provision does Parliament exercise the powers of a State Legislature during President\'s Rule?',
        options: ['Article 352', 'Article 356(1)(b)', 'Article 360', 'Article 248'],
        correctIndex: 1,
        explanation: 'Article 356(1)(b) explicitly provides that the powers of the State Legislature shall be exercisable by or under the authority of Parliament.'
      },
      {
        id: 'd1-cs10-q2',
        testedDimension: 'Legal Doctrine',
        question: 'What is the constitutional status of state assembly views under the Proviso to Article 3?',
        options: [
          'Mandatory veto power',
          'Consultative and non-binding on Parliament',
          'Binding if passed by a 2/3rd majority',
          'Must be ratified by the Governor'
        ],
        correctIndex: 1,
        explanation: 'As reaffirmed in In re Article 370 (2023) and Babulal Parate (1960), the views of the state assembly are purely consultative.'
      },
      {
        id: 'd1-cs10-q3',
        testedDimension: 'Landmark Ratio',
        question: 'In In re Article 370 (Dec 2023), what did the 5-Judge Constitution Bench hold regarding the carving out of Union Territories?',
        options: [
          'Held that Article 3 can never be invoked during President\'s Rule',
          'Upholding the carving out of Ladakh as a Union Territory under Article 3, while recording the Union\'s undertaking to restore statehood',
          'Struck down the J&K Reorganisation Act in toto',
          'Declared Article 3 unconstitutional'
        ],
        correctIndex: 1,
        explanation: 'The 5-Judge Bench upheld the carving out of the UT of Ladakh and accepted the Union\'s undertaking to restore J&K statehood.'
      },
      {
        id: 'd1-cs10-q4',
        testedDimension: 'Judicial Remedy',
        question: 'Can the dissolution of a State Assembly under Article 356 be reviewed by courts for malafide intent?',
        options: [
          'No, presidential proclamation under Article 356 is completely immune from judicial review',
          'Yes, under S.R. Bommai (1994), emergency proclamations are subject to judicial review for malafides or extraneous considerations',
          'Only if the Governor consents to judicial review',
          'Only after the emergency has expired'
        ],
        correctIndex: 1,
        explanation: 'S.R. Bommai (1994) established that Article 356 proclamations are open to judicial review for malafides and constitutional fraud.'
      }
    ]
  }
];
