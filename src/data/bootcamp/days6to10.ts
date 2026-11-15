import { DAY6_MCQS_200, DAY6_COMPREHENSION_CASE_STUDIES } from './day6';
import type { BootcampDay } from './bootcampTypes';

export const BOOTCAMP_DAYS_6_TO_10: BootcampDay[] = [
  // ==========================================
  // DAY 6: RELIGION, MINORITIES, WRITS & DPSPs
  // ==========================================
  {
    dayNumber: 6,
    title: 'Religion, Minorities, Writs & Directive Principles (Articles 25–32, Part IV)',
    subtitle: 'Essential Religious Practices, The Genesis Test in AMU (2024), Prerogative Writs & DPSP Harmonization',
    phase: 'Phase 1: Foundational Pillars & Core Rights',
    estimatedHours: 6,
    targetArticles: ['Article 25', 'Article 26', 'Article 29', 'Article 30', 'Article 32', 'Article 37', 'Article 39', 'Article 39A', 'Article 44', 'Article 51A'],
    overview: 'Day 6 covers freedom of conscience and religion, the essential religious practices test, minority educational rights under Article 30(1) with the landmark 7-Judge Bench ruling in AMU v. Naresh Agarwal (2024), the 5 Prerogative Writs under Article 32, and the dynamic balance between Fundamental Rights and Directive Principles.',
    coreConcepts: [
      {
        heading: 'Freedom of Religion & Essential Religious Practices (ERP)',
        articleAnchor: 'Articles 25 & 26',
        synopsis: 'Freedom of conscience and free profession, practice, and propagation of religion under Article 25 are subject to public order, morality, and health. Article 26 protects denominational autonomy.',
        substantiveLaw: [
          'Shirur Mutt (1954 7-Judge Bench): Formulated the "Essential Religious Practices" (ERP) doctrine: what constitutes an essential part of a religion is ascertained with reference to the doctrines of that religion itself.',
          'Shayara Bano (2017): Triple Talaq (Talaq-e-Biddat) held not an essential practice of Islam and struck down as manifestly arbitrary under Article 14.',
          'Indian Young Lawyers Association (Sabarimala 2018): Exclusion of women aged 10–50 held violative of Articles 14, 15, and 21. Constitutional morality prevails over exclusionary religious customs.'
        ],
        prosecutionAngle: 'Essential when prosecuting communal offenses under Section 196/299 BNS and evaluating customs claimed to exempt accused from criminal laws.'
      },
      {
        heading: 'Minority Rights & The "Genesis Test" in AMU (Nov 2024)',
        articleAnchor: 'Articles 29 & 30',
        synopsis: 'Article 30(1) confers a cherished fundamental right on religious and linguistic minorities to establish and administer educational institutions of their choice.',
        substantiveLaw: [
          'T.M.A. Pai Foundation (2002 11-Judge Bench): The unit for determining minority status is the State, not the whole of India. Core administrative autonomy is protected.',
          'S. Azeez Basha (1967 5-Judge Bench): Held that AMU was established by central statute (AMU Act 1920) and therefore could not claim Article 30 status.',
          'Aligarh Muslim University v. Naresh Agarwal (Nov 2024 7-Judge Bench, 4:3 Majority): Overruled Azeez Basha. Established the "Genesis Test": statutory incorporation by Parliament does not extinguish minority status. The true inquiry is who initiated, conceived, funded, and established the institution.'
        ],
        prosecutionAngle: 'Directly cited when evaluating minority institution quota disputes, state regulatory oversight, and teacher recruitment challenges.'
      },
      {
        heading: 'Prerogative Writs (Article 32) & DPSP Synergy',
        articleAnchor: 'Article 32 & Part IV',
        synopsis: 'Article 32 is the "Heart and Soul" of the Constitution (Dr. Ambedkar). It guarantees the 5 prerogative writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, and Quo Warranto.',
        substantiveLaw: [
          'Minerva Mills (1980 5-Judge Bench): Fundamental Rights and Directive Principles are the two wheels of the constitutional chariot; giving absolute primacy to one over the other upsets the balance.',
          'Article 39A: Equal justice and free legal aid, operationalized through NALSA and Legal Services Authorities Act, 1987.',
          'Article 44: Uniform Civil Code as a directive principle, frequently examined in competitive law exams.'
        ],
        prosecutionAngle: 'Prosecuting officers encounter Article 32/226 daily in Habeas Corpus petitions for missing persons, quashing petitions, and bail appeals.'
      }
    ],
    landmarkEvolutionPairs: [
      {
        subject: 'Article 30(1) Minority Educational Status & Statutory Incorporation',
        classicCase: {
          name: 'S. Azeez Basha v. Union of India',
          year: 1967,
          bench: '5-Judge Bench (Wanchoo CJI)',
          ratio: 'Held that AMU was established by Parliament via the 1920 Act, not by Muslims; statutory incorporation negates minority character under Article 30(1).'
        },
        modernCase: {
          name: 'Aligarh Muslim University v. Naresh Agarwal',
          year: 2024,
          bench: '7-Judge Constitution Bench (4:3 Majority)',
          ratio: 'OVERRULED Azeez Basha. Formal statutory incorporation by Parliament does not destroy minority status; established the substantive "Genesis Test".'
        },
        examApplicationNote: 'Mandatory exam pair for Article 30 questions. Contrast the formalistic statutory bar in Azeez Basha with the substantive Genesis Test in AMU (2024).'
      }
    ],
    dictionaryTerms: [
      'Genesis Test', 'Essential Religious Practices', 'Constitutional Morality', 'Habeas Corpus', 'Mandamus',
      'Certiorari', 'Prohibition', 'Quo Warranto', 'Uniform Civil Code', 'Legal Aid',
      'Denominational Autonomy', 'Locus Standi', 'Epistolary Jurisdiction', 'Public Interest Litigation', 'Directive Principles'
    ],
    svgConceptType: 'writs-matrix',
    caseStudy: {
      title: 'Minority College Grant-in-Aid & Centralized Admission Override',
      factualMatrix: 'St. Stephen\'s Institute of Professional Studies was established in 1924 by a Christian Charitable Society in Jammu to educate Christian minority youth. In 1975, the Institute was affiliated to the State University and received a 12% annual maintenance grant-in-aid from the State Government. In 2025, the Higher Education Department issued a binding directive: "All colleges receiving government grant-in-aid must fill 100% of undergraduate seats strictly through the State Centralized Common Admission Merit Portal, and no separate institutional interview, quota, or minority preference will be permitted". The Christian Society challenged the directive under Article 226, claiming that Article 30(1) guarantees their right to administer the institution, including reserving 50% seats for Christian students and conducting interview assessments. The State argued that: (1) Under Article 29(2), receiving state aid forfeits any preference based on religion; and (2) Under Azeez Basha, statutory affiliation subjects the college to total state regulatory control.',
      framingQuestions: [
        '1. Does receiving government grant-in-aid strip a minority institution of its right to administer and grant preferential admission to its community under Article 30(1)?',
        '2. How does the 11-Judge Constitution Bench in T.M.A. Pai Foundation (2002) reconcile Article 30(1) with Article 29(2)?',
        '3. What is the impact of the 7-Judge Bench ruling in AMU v. Naresh Agarwal (2024) on institutional autonomy?'
      ],
      statutoryApplicability: ['Article 29(2)', 'Article 30(1)', 'Article 30(2)', 'T.M.A. Pai (2002)', 'AMU v. Naresh Agarwal (2024)'],
      modelAnswer: '1. AID DOES NOT EXTINGUISH MINORITY STATUS: Under Article 30(2), the State shall not, in granting aid to educational institutions, discriminate against any educational institution on the ground that it is under the management of a minority. Receiving government aid does not alter the foundational character of a minority institution.\n\n2. RECONCILIATION BETWEEN ARTICLE 30(1) AND ARTICLE 29(2): In T.M.A. Pai Foundation v. State of Karnataka (2002 11-Judge Bench), the Supreme Court harmoniously resolved the tension between Article 30(1) (minority administration) and Article 29(2) (no denial of admission in aided institutions on grounds of religion). The Court held that an aided minority institution can admit a reasonable percentage of students from its own community (typically up to 50%) based on merit, while the remaining seats are thrown open to general merit without discrimination. Total elimination of minority preference by state executive fiat destroys the very essence of Article 30(1).\n\n3. APPLICATION OF AMU (2024) GENESIS TEST: In AMU v. Naresh Agarwal (2024), the 7-Judge Bench confirmed that administrative statutory conditions or receiving grants cannot destroy the minority genesis of an institution established by a minority community. While the State can enforce academic standards and teacher qualifications to prevent maladministration, it cannot usurp the core managerial autonomy of selecting students. Consequently, the High Court will strike down the directive as ultra vires Article 30(1) and permit 50% community quota.',
      markingRubric: [
        { criterion: 'Harmonious reconciliation of Article 30(1) and Article 29(2) under T.M.A. Pai', marks: 4 },
        { criterion: 'Application of the 2024 AMU Genesis Test and limits of State regulatory control', marks: 3 },
        { criterion: 'Distinction between permissible academic regulations vs impermissible managerial usurpation', marks: 3 }
      ]
    },
    comprehensionCaseStudies: DAY6_COMPREHENSION_CASE_STUDIES,
    mcqs: DAY6_MCQS_200
  },

  // ==========================================
  // DAY 7: UNION & STATE EXECUTIVE, CLEMENCY & REMISSION
  // ==========================================
  {
    dayNumber: 7,
    title: 'Union & State Executive, Clemency & Remission (Articles 52–78, 153–167)',
    subtitle: 'Cabinet Advice, Ordinance Powers, Governor Assent & The 2024 Bilkis Bano Remission Doctrine',
    phase: 'Phase 2: The State Machinery, Judiciary & Criminal Jurisdiction',
    estimatedHours: 6,
    targetArticles: ['Article 53', 'Article 72', 'Article 74', 'Article 123', 'Article 154', 'Article 161', 'Article 163', 'Article 200', 'Article 213'],
    overview: 'Day 7 masters the executive branch of the Union and States: the constitutional status of the President and Governor as constitutional figureheads bound by Cabinet advice, the Ordinance making power, the Governor\'s assent to legislative bills under Article 200, sovereign pardoning power (Articles 72 & 161), and the landmark 2024 ruling in Bilkis Yakub Rasool v. Union of India governing statutory remission under Section 432 CrPC (Section 473 BNSS).',
    coreConcepts: [
      {
        heading: 'The Executive as Constitutional Figurehead & Cabinet Dominance',
        articleAnchor: 'Articles 74 & 163',
        synopsis: 'India follows the Westminster parliamentary model. Executive power is vested in the President/Governor, but can only be exercised on the aid and advice of the Council of Ministers.',
        substantiveLaw: [
          'Shamsher Singh v. State of Punjab (1974 7-Judge Bench): The President and Governor are constitutional heads who must act in accordance with the advice of the Council of Ministers, save in narrow exceptional circumstances (e.g. dismissing a ministry that lost majority).',
          '42nd & 44th Amendments: Article 74(1) amended to make Cabinet advice explicitly binding on the President; President can send advice back ONCE for reconsideration, but must accept reconsidered advice.',
          'Article 200 & State of Punjab v. Principal Secretary to Governor (2023 3-Judge Bench): The Governor cannot sit indefinitely on bills passed by the State Legislature; the Governor must act "as soon as possible". If withholding assent, the bill must be returned with a message.',
          'State of Tamil Nadu v. Governor of Tamil Nadu (2024): Reaffirmed that a Governor cannot pocket-veto state legislation.'
        ],
        prosecutionAngle: 'Prosecution sanction against ministers under Section 218 BNSS (197 CrPC) requires independent assessment by the Governor if the Cabinet refuses sanction.'
      },
      {
        heading: 'Sovereign Pardoning Power & Judicial Scrutiny',
        articleAnchor: 'Articles 72 & 161',
        synopsis: 'The President (Art 72) and Governor (Art 161) possess sovereign powers to grant pardons, reprieves, respites, or remissions of punishment.',
        substantiveLaw: [
          'Difference in Scope: President can pardon in Court Martial sentences and Death Sentences across India. Governor cannot pardon death sentences (post-2021 State of Haryana v. Raj Kumar, Governor has power to commute, but sovereign full pardon belongs to President).',
          'Kehar Singh (1989 5-Judge Bench): Pardoning power is of wide amplitude, but does not alter the judicial record; it merely eliminates the penal consequences.',
          'Epuru Sudhakar (2006 2-Judge Bench): Clemency under Articles 72/161 is subject to judicial review for mala fides, extraneous political considerations, or total non-application of mind.'
        ],
        prosecutionAngle: 'Critical for advising jail authorities, processing mercy petitions, and responding to post-conviction clemency challenges.'
      },
      {
        heading: 'The 2024 Remission Revolution: Bilkis Yakub Rasool v. Union of India',
        articleAnchor: 'Section 432 CrPC / Section 473 BNSS & Article 14/21',
        synopsis: 'In January 2024, a Division Bench (B.V. Nagarathna & Ujjal Bhuyan JJ) delivered a watershed ruling on criminal remission, nullifying the premature release of 11 life convicts.',
        substantiveLaw: [
          'Statutory Competence: Under Section 432(7) CrPC, the "Appropriate Government" competent to grant remission is exclusively the Government of the State within which the offender is SENTENCED (Maharashtra), and NOT where the offense occurred (Gujarat).',
          'Order Null & Void: The Gujarat Government acted through usurpation of power, suppression of material facts, and fraud on the Court.',
          'Mandatory Presiding Judge Opinion: Section 432(2) CrPC requires mandatory opinion of the trial judge who convicted the accused.',
          'Rule of Law: The Court held that compassion cannot override the Rule of Law and victim dignity.'
        ],
        prosecutionAngle: 'A primary syllabus priority for Prosecuting Officers evaluating prisoner premature release applications and sentence computation.'
      }
    ],
    landmarkEvolutionPairs: [
      {
        subject: 'Executive Remission Competence & Judicial Scrutiny',
        classicCase: {
          name: 'Maru Ram v. Union of India',
          year: 1980,
          bench: '5-Judge Bench (Krishna Iyer J)',
          ratio: 'Upheld mandatory 14-year minimum imprisonment under Sec 433A CrPC; established that executive clemency is subject to judicial review against arbitrariness.'
        },
        modernCase: {
          name: 'Bilkis Yakub Rasool v. Union of India',
          year: 2024,
          bench: '2-Judge Bench (Nagarathna & Bhuyan JJ)',
          ratio: 'Quashed premature release of 11 life convicts. Held that under Section 432(7) CrPC, the "appropriate government" is the State of conviction (Maharashtra), not the State of crime; fraud vitiates clemency.'
        },
        examApplicationNote: 'The definitive criminal law pair for sentencing, remission, and Section 432 CrPC / 473 BNSS.'
      }
    ],
    dictionaryTerms: [
      'Pardoning Power', 'Appropriate Government', 'Remission of Sentence', 'Commutation of Sentence', 'Ordinance Raj',
      'Pleasure Doctrine', 'Sanction for Prosecution', 'Executive Action', 'Aid and Advice', 'Pocket Veto',
      'Suspensive Veto', 'Ultra Vires', 'Judicial Review', 'Separation of Powers', 'Rule of Law'
    ],
    svgConceptType: 'remission-flow',
    caseStudy: {
      title: 'Premature Remission by Transferor State without Convicting Court\'s Concurrence',
      factualMatrix: 'In a high-profile multi-state kidnapping and gang-murder case, the trial was transferred by the Supreme Court from State X (place of crime) to a Special CBI Sessions Court in State Y to ensure an impartial trial. The Special Court in State Y convicted all 5 accused and sentenced them to imprisonment for life, which was confirmed by the High Court of State Y and the Supreme Court. After serving 12 years in prison, the convicts were transferred back to a central prison in their home State X on administrative grounds. In 2025, the Government of State X, exercising powers under Section 432 CrPC (Section 473 BNSS) read with its 1998 State Remission Policy, granted premature release and pardoned the unexpired sentence of all 5 convicts without seeking the opinion of the Special CBI Sessions Judge in State Y. The surviving victim\'s family filed an Article 32 writ petition before the Supreme Court challenging the remission orders.',
      framingQuestions: [
        '1. Which Government is the "appropriate Government" competent under Section 432(7) CrPC to grant remission: State X (where crime occurred and convicts are jailed) or State Y (where the trial was conducted and sentence passed)?',
        '2. Is the opinion of the presiding judge of the convicting court under Section 432(2) CrPC mandatory before granting premature remission?',
        '3. What is the effect of the 2024 Supreme Court precedent in Bilkis Yakub Rasool v. Union of India on these remission orders?'
      ],
      statutoryApplicability: ['Section 432(1), (2), (7) CrPC', 'Section 473 BNSS', 'Article 14', 'Article 21', 'Bilkis Yakub Rasool (2024)'],
      modelAnswer: '1. JURISDICTION OF "APPROPRIATE GOVERNMENT": Under Section 432(7)(b) of the CrPC (now Section 473 BNSS), the "appropriate Government" means "the Government of the State within which the offender is sentenced". In Bilkis Yakub Rasool v. Union of India (2024 2-Judge Bench), the Supreme Court definitively resolved this issue: when a trial is transferred from one State to another, the State where the trial takes place and sentence is passed (State Y) becomes the sole competent authority to consider remission. State X has zero jurisdiction to grant remission, regardless of where the crime took place or where the convicts are currently imprisoned.\n\n2. MANDATORY OPINION OF PRESIDING JUDGE: Section 432(2) CrPC provides that the State Government, before granting remission, shall require the presiding judge of the court which convicted the offender to state his opinion with reasons. In Sangeet v. State of Haryana (2013) and Union of India v. V. Sriharan (2016 5-Judge Bench), the Supreme Court held that the opinion of the convicting judge is an essential procedural safeguard to ensure that heinous crimes against society are not arbitrarily wiped out without judicial scrutiny. Failure to obtain the judge\'s opinion vitiates the remission order.\n\n3. APPLICATION OF BILKIS YAKUB RASOOL (2024): Applying the ratio of Bilkis Bano (2024), the remission orders passed by State X are an illegal usurpation of statutory power and a nullity in law. The Supreme Court will quash the premature release orders, declare the orders void ab initio, and direct the convicts to surrender back to custody immediately to serve their life sentences in accordance with law.',
      markingRubric: [
        { criterion: 'Interpretation of "Appropriate Government" under Sec 432(7) CrPC and Bilkis Bano (2024)', marks: 4 },
        { criterion: 'Mandatory nature of trial judge\'s opinion under Section 432(2) CrPC', marks: 3 },
        { criterion: 'Quashing of usurpation of power and order to surrender back to prison', marks: 3 }
      ]
    },
    mcqs: [
      {
        id: 'd7-q1',
        question: 'Under the landmark 2024 Supreme Court ruling in Bilkis Yakub Rasool v. Union of India, which government is the "appropriate Government" competent under Section 432(7) CrPC to grant remission of sentence?',
        options: ['The State Government where the crime was committed', 'The State Government of the State within which the offender was tried and sentenced', 'The Ministry of Home Affairs, Government of India exclusively', 'The State Government where the convict was born'],
        correctIndex: 1,
        explanation: 'The Supreme Court ruled that under Section 432(7)(b) CrPC, the appropriate government is solely the Government of the State within which the offender is sentenced (Maharashtra in Bilkis case, where trial was transferred).',
        articleRef: 'Section 432(7) CrPC & Article 21',
        difficulty: 'Foundational'
      },
      {
        id: 'd7-q2',
        question: 'Under Section 432(2) of the CrPC (Section 473 BNSS), what mandatory procedural step must the State Government take before deciding an application for remission?',
        options: ['Obtain prior sanction of the President of India', 'Require the presiding judge of the court which convicted the offender to state their opinion with reasons', 'Publish the convict\'s photograph in national newspapers', 'Conduct a public referendum in the convict\'s village'],
        correctIndex: 1,
        explanation: 'Section 432(2) mandates that the appropriate Government may require the presiding judge of the convicting court to state their opinion as to whether the application should be granted or refused, accompanied by reasons.',
        articleRef: 'Section 432(2) CrPC',
        difficulty: 'Intermediate'
      },
      {
        id: 'd7-q3',
        question: 'In State of Punjab v. Principal Secretary to the Governor (2023), the 3-Judge Bench headed by CJI Chandrachud held that under Article 200, when a Bill passed by the State Legislature is presented to the Governor:',
        options: ['The Governor can pocket-veto the Bill indefinitely without taking any action', 'The Governor must act "as soon as possible", and if withholding assent, must declare reasons and return the Bill with a message to the House', 'The Governor becomes the de facto Chief Minister', 'The Governor can dissolve the Assembly immediately'],
        correctIndex: 1,
        explanation: 'The Supreme Court held that the Governor cannot sit indefinitely on bills. The Governor must exercise one of the constitutional options under Article 200 "as soon as possible" and return the bill if withholding assent.',
        articleRef: 'Article 200',
        difficulty: 'Intermediate'
      },
      {
        id: 'd7-q4',
        question: 'In Shamsher Singh v. State of Punjab (1974 7-Judge Bench), the Supreme Court ruled on the constitutional status of the President and Governor. What was the core ratio?',
        options: ['The President and Governor exercise absolute personal discretion in all executive acts', 'The President and Governor are constitutional heads who must act only upon the aid and advice of their Council of Ministers, with narrow exceptions', 'The Prime Minister is subordinate to the President in all military decisions', 'Governor has sovereign immunity from judicial review under Article 32'],
        correctIndex: 1,
        explanation: 'The 7-Judge Bench established that the President and Governors are constitutional figureheads who must act strictly on the advice of their Ministers, save in narrow exceptions like appointing a Prime Minister when no party has a majority.',
        articleRef: 'Articles 74 & 163',
        difficulty: 'Foundational'
      },
      {
        id: 'd7-q5',
        question: 'In D.C. Wadhwa v. State of Bihar (1987), the Supreme Court struck down the practice of the Bihar Governor re-promulgating ordinances repeatedly without placing them before the legislature. What doctrine was applied?',
        options: ['Doctrine of Pith and Substance', 'Colorable Exercise of Power & Fraud on the Constitution', 'Doctrine of Severability', 'Doctrine of Pleasure'],
        correctIndex: 1,
        explanation: 'The Supreme Court held that repeated re-promulgation of ordinances without legislative approval is a colorable exercise of power and a fraud on the Constitution, subverting the legislative supremacy of Parliament/Assemblies.',
        articleRef: 'Article 213',
        difficulty: 'Intermediate'
      },
      {
        id: 'd7-q6',
        question: 'Under Article 72, the President of India has the power to grant pardons in which of the following cases that are NOT available to a State Governor under Article 161?',
        options: ['Sentences punished under central economic laws', 'Punishments inflicted by a Court Martial (Military Court)', 'Civil contempt of court orders', 'Traffic fine penalties'],
        correctIndex: 1,
        explanation: 'Article 72(1)(a) grants the President exclusive power to pardon in all cases where the punishment is by a Court Martial. The Governor under Article 161 has no court-martial clemency power.',
        articleRef: 'Article 72(1)(a) & Article 161',
        difficulty: 'Foundational'
      },
      {
        id: 'd7-q7',
        question: 'In Maru Ram v. Union of India (1980), the 5-Judge Constitution Bench upheld the constitutional validity of Section 433A CrPC, which mandates that:',
        options: ['All convicts must be released after 5 years', 'A life convict sentenced for a capital offense must undergo a minimum of 14 years of actual imprisonment before premature release/remission can be considered', 'Life imprisonment means 20 years mathematically', 'Remission can only be granted by the Chief Justice'],
        correctIndex: 1,
        explanation: 'Krishna Iyer J upheld Section 433A CrPC, holding that lifers convicted of offenses punishable with death must serve at least 14 years of actual custody before statutory remission under Section 432 can take effect.',
        articleRef: 'Section 433A CrPC & Article 72',
        difficulty: 'Intermediate'
      },
      {
        id: 'd7-q8',
        question: 'In Epuru Sudhakar v. Govt. of A.P. (2006), the Supreme Court ruled that an order of pardon passed by the President under Article 72 or Governor under Article 161 can be judicially reviewed on which grounds?',
        options: ['If the order was passed without application of mind, based on extraneous political considerations, or suffered from mala fides', 'Courts can never review pardoning orders under any circumstances', 'Only if the President gives written consent for judicial review', 'Only if recommended by the Bar Council of India'],
        correctIndex: 0,
        explanation: 'The Supreme Court held that while the merits of clemency are not reviewed, the decision is subject to judicial review if it was passed without application of mind, with mala fides, or based on extraneous/caste/political considerations.',
        articleRef: 'Article 72 & Article 161',
        difficulty: 'Intermediate'
      },
      {
        id: 'd7-q9',
        question: 'Under Article 123(2), an Ordinance promulgated by the President during recess of Parliament ceases to operate at the expiration of what period from the reassembly of Parliament?',
        options: ['14 days', '6 weeks', '6 months', '90 days'],
        correctIndex: 1,
        explanation: 'Article 123(2)(a) stipulates that an Ordinance shall cease to operate at the expiration of six weeks from the reassembly of Parliament, or earlier if disapproved by resolutions of both Houses.',
        articleRef: 'Article 123(2)',
        difficulty: 'Foundational'
      },
      {
        id: 'd7-q10',
        question: 'What is the maximum life of an Ordinance promulgated by the President if Parliament does not approve it, assuming maximum 6 months gap between sessions?',
        options: ['6 weeks', '6 months', '6 months and 6 weeks', '1 year'],
        correctIndex: 2,
        explanation: 'Since the maximum interval between sessions of Parliament under Article 85(1) is 6 months, and the ordinance lasts 6 weeks after reassembly, the maximum theoretical life of an ordinance is 6 months and 6 weeks.',
        articleRef: 'Article 85 & Article 123',
        difficulty: 'Intermediate'
      },
      {
        id: 'd7-q11',
        question: 'In Krishna Kumar Singh v. State of Bihar (2017 7-Judge Bench), what was the authoritative ruling on Ordinance-making power?',
        options: ['Ordinances are superior to Acts of Parliament', 'The power to issue an Ordinance is an emergency power and not a parallel source of legislation; failure to place an Ordinance before the legislature is a serious constitutional abuse', 'An Ordinance never lapses', 'The Governor can make ordinances without Cabinet advice'],
        correctIndex: 1,
        explanation: 'D.Y. Chandrachud J held for the 7-Judge Bench that the requirement of laying an ordinance before the legislature is mandatory, and re-promulgating ordinances without legislative scrutiny is unconstitutional.',
        articleRef: 'Article 213',
        difficulty: 'Case Law / Advanced'
      },
      {
        id: 'd7-q12',
        question: 'Under Article 74(2) of the Constitution, can any court of law inquire into whether any, and if so what, advice was tendered by Ministers to the President?',
        options: ['Yes, advice can be summoned under Section 91 CrPC', 'No, the question whether any, and if so what, advice was tendered by Ministers to the President shall not be inquired into in any court', 'Only the Chief Justice of India can inspect the advice in camera', 'Only with two-thirds majority approval of Lok Sabha'],
        correctIndex: 1,
        explanation: 'Article 74(2) contains an absolute constitutional bar: "The question whether any, and if so what, advice was tendered by Ministers to the President shall not be inquired into in any court."',
        articleRef: 'Article 74(2)',
        difficulty: 'Intermediate'
      },
      {
        id: 'd7-q13',
        question: 'Under Article 75(3), the Union Council of Ministers is collectively responsible to:',
        options: ['The President of India', 'The House of the People (Lok Sabha)', 'The Council of States (Rajya Sabha)', 'The Parliament of India jointly'],
        correctIndex: 1,
        explanation: 'Article 75(3) incorporates the core Westminster principle: "The Council of Ministers shall be collectively responsible to the House of the People."',
        articleRef: 'Article 75(3)',
        difficulty: 'Foundational'
      },
      {
        id: 'd7-q14',
        question: 'Under Article 75(1A) inserted by the 91st Constitutional Amendment Act, 2003, what is the ceiling on the total number of Ministers, including the Prime Minister, in the Council of Ministers?',
        options: ['10% of total membership of Parliament', '15% of the total number of members of the House of the People (Lok Sabha)', '20% of the ruling party strength', 'A maximum fixed number of 50 ministers'],
        correctIndex: 1,
        explanation: 'Article 75(1A) caps the size of the Union Council of Ministers at 15% of the total number of members of the Lok Sabha.',
        articleRef: 'Article 75(1A)',
        difficulty: 'Foundational'
      },
      {
        id: 'd7-q15',
        question: 'In B.R. Kapur v. State of Tamil Nadu (2001), what did the Constitution Bench hold regarding the Governor\'s power to appoint a Chief Minister?',
        options: ['The Governor must blindly appoint anyone chosen by the majority party', 'The Governor cannot appoint a person as Chief Minister who is disqualified from being a member of the Legislative Assembly due to criminal conviction under Section 8(3) RPA', 'Only IAS officers can be appointed Chief Ministers', 'A convicted person can be Chief Minister for 6 months'],
        correctIndex: 1,
        explanation: 'The Supreme Court ruled that a person who is convicted of an offense and disqualified under the Representation of the People Act, 1951 cannot be appointed Chief Minister under Article 164, setting aside J. Jayalalithaa\'s appointment.',
        articleRef: 'Article 164',
        difficulty: 'Case Law / Advanced'
      },
      {
        id: 'd7-q16',
        question: 'Under Article 76, who appoints the Attorney-General for India, and what qualification must the person possess?',
        options: ['Chief Justice of India; must be a Senior Advocate', 'President; must be a person qualified to be appointed a Judge of the Supreme Court', 'Prime Minister; must have 20 years Bar practice', 'Law Minister; must be a Member of Parliament'],
        correctIndex: 1,
        explanation: 'Article 76(1) states that the President shall appoint a person who is qualified to be appointed a Judge of the Supreme Court to be Attorney-General for India.',
        articleRef: 'Article 76',
        difficulty: 'Foundational'
      },
      {
        id: 'd7-q17',
        question: 'Under Article 88, the Attorney-General for India has the right to speak and take part in proceedings of which bodies, and with what limitation?',
        options: ['Only Supreme Court; cannot enter Parliament', 'Either House of Parliament, any joint sitting, and any committee of Parliament, but without the right to vote', 'Lok Sabha only; with right to vote on money bills', 'Cabinet meetings only'],
        correctIndex: 1,
        explanation: 'Article 88 confers upon the Attorney-General the right to speak and take part in proceedings of either House or joint sittings, but does NOT confer the right to vote.',
        articleRef: 'Article 88',
        difficulty: 'Intermediate'
      },
      {
        id: 'd7-q18',
        question: 'In Kehar Singh v. Union of India (1989), the Constitution Bench held that in exercising pardoning powers under Article 72, the President:',
        options: ['Can scrutinize the evidence afresh and come to a different conclusion from that arrived at by the court of law', 'Is bound by the judicial findings of fact and cannot examine evidence', 'Can only grant pardon if the victim\'s family agrees', 'Must consult the Chief Justice of India in writing'],
        correctIndex: 0,
        explanation: 'Pathak CJI held that in exercising Article 72, the President can look into the evidence afresh and determine whether the case merits mercy, independent of the strict judicial conclusions.',
        articleRef: 'Article 72',
        difficulty: 'Intermediate'
      },
      {
        id: 'd7-q19',
        question: 'Under Article 163(2), if any question arises whether any matter is or is not a matter in respect of which the Governor is required to act in his discretion, whose decision is final?',
        options: ['The decision of the Chief Minister', 'The decision of the Governor in his discretion shall be final, and its validity cannot be called in question', 'The decision of the Speaker of the Legislative Assembly', 'The decision of the High Court Collegium'],
        correctIndex: 1,
        explanation: 'Article 163(2) provides that the decision of the Governor in his discretion shall be final, and the validity of anything done by the Governor shall not be called in question on the ground that he ought or ought not to have acted in his discretion.',
        articleRef: 'Article 163(2)',
        difficulty: 'Intermediate'
      },
      {
        id: 'd7-q20',
        question: 'Can the President or Governor grant a pardon or remission to an accused person BEFORE conviction while the trial or investigation is still pending?',
        options: ['No, pardon can only be granted after final conviction by the highest appellate court', 'Yes, the language of Articles 72 and 161 is wide enough to encompass pardon at any time after the commission of the offense, even before trial or verdict', 'Only during martial law', 'Only with approval of the trial judge'],
        correctIndex: 1,
        explanation: 'In K.M. Nanavati v. State of Bombay (1961) and established constitutional jurisprudence, pardoning power can be exercised at any time after the commission of an offense, including during trial or before conviction, though it is exercised with great restraint.',
        articleRef: 'Articles 72 & 161',
        difficulty: 'Case Law / Advanced'
      }
    ]
  },

  // ==========================================
  // DAY 8: PARLIAMENT, PRIVILEGES & ANTI-DEFECTION
  // ==========================================
  {
    dayNumber: 8,
    title: 'Parliament, Legislative Privileges & Anti-Defection (Articles 79–122, 168–212, 10th Sched)',
    subtitle: 'Money Bills, Speaker Powers, The 2024 Sita Soren Bribery Overruling & 10th Schedule Tribunalization',
    phase: 'Phase 2: The State Machinery, Judiciary & Criminal Jurisdiction',
    estimatedHours: 6,
    targetArticles: ['Article 79', 'Article 105', 'Article 110', 'Article 194', 'Article 199', 'Article 212', 'Tenth Schedule'],
    overview: 'Day 8 explores the legislative engine of India: legislative procedure, definition of Money Bills under Article 110/199, parliamentary privileges under Articles 105 and 194, the historic 7-Judge Constitution Bench ruling in Sita Soren v. Union of India (March 2024) overruling P.V. Narasimha Rao, and the anti-defection framework under the Tenth Schedule in Kihoto Hollohan and Subhash Desai (2023).',
    coreConcepts: [
      {
        heading: 'Parliamentary Privileges & The 2024 Sita Soren Overruling',
        articleAnchor: 'Articles 105 & 194',
        synopsis: 'Articles 105(2) and 194(2) protect lawmakers from legal proceedings in respect of anything said or any vote given in the House. For 26 years, P.V. Narasimha Rao (1998) shielded MPs who took bribes to vote. In March 2024, a 7-Judge Constitution Bench unanimously overruled it.',
        substantiveLaw: [
          'P.V. Narasimha Rao (1998 5-Judge Bench, 3:2): Held that MPs who accepted bribes and cast their votes enjoyed immunity under Article 105(2).',
          'Sita Soren v. Union of India (March 2024 7-Judge Bench, CJI Chandrachud, Unanimous): EXPRESSLY OVERRULED P.V. Narasimha Rao.',
          'Core Ratio: Bribery is complete upon acceptance of the bribe, before any speech or vote occurs. Bribery is not essential to the functioning of the legislature; it subverts democracy.',
          'Immunity under Articles 105(2) and 194(2) does not shield lawmakers from criminal prosecution under the Prevention of Corruption Act, 1988.'
        ],
        prosecutionAngle: 'A landmark criminal-constitutional victory: prosecutors can now prosecute any MP/MLA for taking bribes for legislative votes or speeches without constitutional immunity bars.'
      },
      {
        heading: 'Money Bills & Judicial Review of Speaker Certification',
        articleAnchor: 'Articles 110 & 199',
        synopsis: 'A Money Bill can only be introduced in Lok Sabha and does not require Rajya Sabha concurrence. Article 110(1) contains an exhaustive list of matters.',
        substantiveLaw: [
          'Article 110(1): A Bill is a Money Bill if it contains "only" provisions dealing with taxes, borrowing, Consolidated Fund withdrawals, and incidental matters.',
          'Article 110(3): Speaker\'s decision on whether a Bill is a Money Bill is final.',
          'Puttaswamy (Aadhaar 2018): Majority upheld Aadhaar as a Money Bill under Section 7 subsidies; D.Y. Chandrachud J dissented, holding bypassing Rajya Sabha was fraud on the Constitution. The question has been referred to a 7-Judge Bench in Roger Mathew (2020).'
        ],
        prosecutionAngle: 'Understanding statutory enactment challenges is crucial when defending special penal statutes passed via Finance Acts.'
      },
      {
        heading: 'Anti-Defection Law (Tenth Schedule)',
        articleAnchor: 'Tenth Schedule & Article 102(2)',
        synopsis: 'The 52nd Amendment Act, 1985 introduced the Tenth Schedule to curb political horse-trading ("Aaya Ram, Gaya Ram").',
        substantiveLaw: [
          'Grounds of Disqualification: (1) Voluntarily giving up party membership; (2) Voting or abstaining contrary to party whip without prior permission; (3) Independent member joining a political party; (4) Nominated member joining a party after 6 months.',
          'Kihoto Hollohan (1992 5-Judge Bench): Upheld Tenth Schedule, but held that the Speaker acts as a statutory Tribunal. Speaker\'s final disqualification orders are subject to judicial review under Articles 136 and 226.',
          'Subhash Desai v. Principal Secretary, Governor of MH (2023 5-Judge Bench): Speaker must decide disqualification petitions within a reasonable time; Governor cannot order a floor test without objective proof that the incumbent government lost majority; the legislative party whip is issued by the political party, not an isolated legislative faction.'
        ],
        prosecutionAngle: 'Essential for understanding disqualification proceedings and ministerial authority over prosecution sanction.'
      }
    ],
    landmarkEvolutionPairs: [
      {
        subject: 'Legislative Bribery & Constitutional Immunity under Articles 105(2) & 194(2)',
        classicCase: {
          name: 'P.V. Narasimha Rao v. State (CBI/SPE)',
          year: 1998,
          bench: '5-Judge Bench (3:2 Majority)',
          ratio: 'Held that MPs who accepted bribes and cast their votes enjoyed absolute immunity under Article 105(2) from criminal prosecution.'
        },
        modernCase: {
          name: 'Sita Soren v. Union of India',
          year: 2024,
          bench: '7-Judge Constitution Bench (Unanimous, CJI Chandrachud)',
          ratio: 'UNANIMOUSLY OVERRULED P.V. Narasimha Rao. Bribery is complete upon acceptance and has zero immunity under Articles 105 and 194; criminal prosecution under PC Act proceeds.'
        },
        examApplicationNote: 'The single most impressive 2024 anti-corruption constitutional citation for your exam answer.'
      }
    ],
    dictionaryTerms: [
      'Parliamentary Privilege', 'Bribery Immunity', 'Money Bill', 'Speaker\'s Tribunal', 'Whip',
      'Anti-Defection', 'Voluntarily Giving Up Membership', 'Floor Test', 'No-Confidence Motion', 'Dissolution of House',
      'Prorogation', 'Adjournment Sine Die', 'Consolidated Fund', 'Contingency Fund', 'Judicial Review of Speaker'
    ],
    svgConceptType: 'privilege-bribery',
    caseStudy: {
      title: 'MLA Bribery in Rajya Sabha Election & Claim of Immunity',
      factualMatrix: 'During biennial elections to the Council of States (Rajya Sabha) from a State Legislative Assembly, an MLA was caught on hidden camera accepting a cash bribe of Rs 1.5 Crores from an independent candidate in exchange for casting her first preference vote in his favor. However, on the voting day, the MLA cast her vote for the official candidate of her own party instead of the bribe-giver. The Anti-Corruption Bureau (ACB) registered a criminal case against the MLA under Section 7 of the Prevention of Corruption Act, 1988 and Section 171E of the BNS. The MLA filed a petition under Section 528 BNSS (former 482 CrPC) read with Article 226 before the High Court to quash the FIR, arguing that: (1) Under Article 194(2), no member of a Legislature is liable to any proceedings in any court in respect of anything said or any vote given by her in the Legislature; (2) Under the 5-Judge Bench ruling in P.V. Narasimha Rao (1998), voting conduct inside the Assembly is immune from police prosecution; and (3) She did not even vote for the bribe-giver, so no criminal act was completed in the House.',
      framingQuestions: [
        '1. Does Article 194(2) grant immunity to a legislator from criminal prosecution for taking a bribe in connection with voting in the House or Rajya Sabha elections?',
        '2. Does the offense of bribery depend on whether the lawmaker actually voted in accordance with the corrupt agreement?',
        '3. How does the unanimous 7-Judge Constitution Bench decision in Sita Soren v. Union of India (2024) apply to this case?'
      ],
      statutoryApplicability: ['Article 105(2)', 'Article 194(2)', 'Section 7 PC Act', 'Sita Soren v. Union of India (2024)', 'P.V. Narasimha Rao (1998)'],
      modelAnswer: '1. OVERRULING OF P.V. NARASIMHA RAO: The MLA\'s reliance on P.V. Narasimha Rao (1998) is completely futile. In March 2024, a unanimous 7-Judge Constitution Bench of the Supreme Court in Sita Soren v. Union of India expressly overruled the 26-year-old majority decision in P.V. Narasimha Rao. The 7-Judge Bench held that the parliamentary privileges under Articles 105(2) and 194(2) are intended to protect the collective deliberation and fearlessness of legislators, and were never intended to shield criminal acts of corruption.\n\n2. BRIBERY IS AN INDEPENDENT OFFENSE COMPLETE UPON ACCEPTANCE: In Sita Soren (2024), the Supreme Court ruled that the offense of bribery under the Prevention of Corruption Act, 1988 is complete the moment the public servant accepts, agrees to accept, or attempts to obtain an undue advantage. The offense does not depend on whether the vote is actually cast, or whether the vote is cast in favor of the bribe-giver or against him. The subsequent voting behavior in the House is completely immaterial to criminal culpability.\n\n3. NO IMMUNITY UNDER ARTICLE 194(2): The Court held that the phrase "in respect of" in Article 194(2) must be interpreted purposively. Accepting a bribe to vote is fundamentally destructive of democratic representative governance and cannot be treated as essential to the exercise of legislative functions. Therefore, Articles 105(2) and 194(2) do not confer immunity from criminal prosecution under the PC Act. The High Court will dismiss the quashing petition and direct the criminal trial to proceed.',
      markingRubric: [
        { criterion: 'Accurate citation and analysis of the 7-Judge Bench ruling in Sita Soren (2024)', marks: 4 },
        { criterion: 'Explanation of when the offense of bribery is complete (independent of voting behavior)', marks: 3 },
        { criterion: 'Rejection of immunity under Article 194(2) for corruption under PC Act', marks: 3 }
      ]
    },
    mcqs: [
      {
        id: 'd8-q1',
        question: 'In the landmark 7-Judge Constitution Bench ruling in Sita Soren v. Union of India (March 2024), what was held regarding parliamentary immunity for bribery under Articles 105(2) and 194(2)?',
        options: ['Lawmakers enjoy absolute immunity from prosecution if they actually vote in the House', 'Lawmakers enjoy NO immunity under Articles 105(2) or 194(2) from criminal prosecution for accepting bribes to vote or speak, expressly overruling P.V. Narasimha Rao (1998)', 'Only the Speaker of the House can try lawmakers for bribery', 'Immunity applies only to Rajya Sabha biennial elections'],
        correctIndex: 1,
        explanation: 'The 7-Judge Bench unanimously overruled P.V. Narasimha Rao (1998), holding that bribery is not essential to casting a vote and lawmakers enjoy zero constitutional immunity from criminal prosecution under the PC Act.',
        articleRef: 'Articles 105(2) & 194(2)',
        difficulty: 'Foundational'
      },
      {
        id: 'd8-q2',
        question: 'According to the Supreme Court in Sita Soren (2024), at what point is the criminal offense of bribery under the Prevention of Corruption Act complete?',
        options: ['Only after the legislator casts their vote in the House', 'The moment the legislator accepts, agrees to accept, or attempts to obtain an undue advantage, regardless of whether the vote is actually cast', 'Only after the Speaker grants prosecution sanction', 'Only if the legislative bill passes into law'],
        correctIndex: 1,
        explanation: 'The Supreme Court ruled that bribery is complete upon acceptance or agreement to receive the bribe. Subsequent voting in the House is irrelevant to the criminal offense.',
        articleRef: 'Articles 105 & 194 & PC Act',
        difficulty: 'Intermediate'
      },
      {
        id: 'd8-q3',
        question: 'Under Article 110(1) of the Constitution, a Bill is deemed to be a Money Bill if it contains:',
        options: ['Any provision imposing any fine or pecuniary penalty', 'Provisions dealing ONLY with the imposition, abolition, remission, alteration, or regulation of any tax, borrowing of money, or Consolidated Fund matters', 'Any educational reform policy', 'Provisions for defense procurement'],
        correctIndex: 1,
        explanation: 'Article 110(1) uses the word "only": a Bill is a Money Bill if it contains only provisions dealing with the 6 specified fiscal matters in sub-clauses (a) to (g). Article 110(2) specifically excludes bills imposing fines or license fees.',
        articleRef: 'Article 110(1)',
        difficulty: 'Foundational'
      },
      {
        id: 'd8-q4',
        question: 'Under Article 109, what is the role and power of the Rajya Sabha (Council of States) in respect of a Money Bill?',
        options: ['Rajya Sabha can reject or amend a Money Bill', 'Rajya Sabha cannot reject or amend a Money Bill; it can only make recommendations within 14 days, which Lok Sabha may accept or reject', 'Rajya Sabha has co-equal veto power with Lok Sabha', 'Rajya Sabha must pass the Money Bill by special majority'],
        correctIndex: 1,
        explanation: 'Article 109(2) stipulates that Rajya Sabha must return a Money Bill within 14 days with recommendations. Lok Sabha can accept or reject any recommendation. If not returned in 14 days, it is deemed passed by both Houses.',
        articleRef: 'Article 109',
        difficulty: 'Foundational'
      },
      {
        id: 'd8-q5',
        question: 'Under Article 108, a Joint Sitting of both Houses of Parliament can be summoned by the President to resolve a deadlock on:',
        options: ['Money Bills and Ordinary Bills', 'Ordinary Bills and Financial Bills (Category II), but NOT on Money Bills or Constitutional Amendment Bills', 'Constitutional Amendment Bills only', 'All Bills including Money Bills'],
        correctIndex: 1,
        explanation: 'Article 108 applies to ordinary legislative deadlocks. Joint sitting CANNOT be summoned for a Money Bill (governed by Art 109) or for a Constitutional Amendment Bill under Article 368.',
        articleRef: 'Article 108',
        difficulty: 'Intermediate'
      },
      {
        id: 'd8-q6',
        question: 'Who presides over a Joint Sitting of Parliament summoned by the President under Article 108?',
        options: ['The Chairman of the Rajya Sabha (Vice-President of India)', 'The Speaker of the House of the People (Lok Sabha)', 'The Prime Minister of India', 'The Senior-most Member of Parliament'],
        correctIndex: 1,
        explanation: 'Under Article 118(4), the Speaker of the Lok Sabha presides at a joint sitting of the two Houses (or in his absence, the Deputy Speaker or person determined by rules).',
        articleRef: 'Article 118(4)',
        difficulty: 'Foundational'
      },
      {
        id: 'd8-q7',
        question: 'Under the Tenth Schedule (Anti-Defection Law), who is the competent adjudicating authority to decide disqualification petitions against members of a House?',
        options: ['The Chief Election Commissioner', 'The Chairman or the Speaker of the respective House', 'The Supreme Court of India directly', 'The Governor of the State'],
        correctIndex: 1,
        explanation: 'Paragraph 6 of the Tenth Schedule provides that any question regarding disqualification of a member shall be referred for the decision of the Chairman or the Speaker of such House.',
        articleRef: 'Tenth Schedule Paragraph 6',
        difficulty: 'Foundational'
      },
      {
        id: 'd8-q8',
        question: 'In Kihoto Hollohan v. Zachillhu (1992), the 5-Judge Constitution Bench struck down Paragraph 7 of the Tenth Schedule (which excluded judicial review) on what constitutional ground?',
        options: ['It was passed without the mandatory ratification of half of the State Legislatures under Article 368(2) Proviso', 'Anti-defection is contrary to democracy', 'The Speaker has no legal qualification', 'MPs cannot be regulated by constitutional schedules'],
        correctIndex: 0,
        explanation: 'Paragraph 7 sought to curtail the writ jurisdiction of High Courts and the Supreme Court under Articles 136 and 226, which required ratification by at least half of the State Legislatures under Article 368(2) Proviso. Having not been ratified, Paragraph 7 was severed and struck down.',
        articleRef: 'Tenth Schedule & Article 368',
        difficulty: 'Case Law / Advanced'
      },
      {
        id: 'd8-q9',
        question: 'In Kihoto Hollohan (1992), what status was attributed to the Speaker when deciding disqualification petitions under the Tenth Schedule?',
        options: ['The Speaker acts as an ordinary administrative officer exempt from law', 'The Speaker acts as a statutory Tribunal, whose final decisions are subject to judicial review under Articles 136, 226, and 227', 'The Speaker acts as a sovereign monarch', 'The Speaker operates as an appellate division of the High Court'],
        correctIndex: 1,
        explanation: 'The Supreme Court held that the Speaker deciding defection petitions acts as a Tribunal. While courts will not intervene at an interlocutory stage, the final order is subject to judicial review for jurisdictional error, mala fides, or natural justice violation.',
        articleRef: 'Tenth Schedule & Article 226',
        difficulty: 'Intermediate'
      },
      {
        id: 'd8-q10',
        question: 'In Subhash Desai v. Principal Secretary, Governor of Maharashtra (2023 5-Judge Bench), what did the Supreme Court hold regarding the power of a Governor to order a floor test?',
        options: ['The Governor can order a floor test at any time upon receiving complaints from opposition leaders', 'The Governor cannot order a floor test unless there is objective material before him indicating that the incumbent government has lost majority confidence', 'The Governor has unguided discretion under Article 163', 'A floor test can only be ordered during financial emergency'],
        correctIndex: 1,
        explanation: 'CJI Chandrachud ruled that the Governor cannot act on internal party factional disputes to topple a government; a floor test can only be ordered when there is objective material demonstrating loss of confidence in the Assembly.',
        articleRef: 'Article 174 & Tenth Schedule',
        difficulty: 'Intermediate'
      },
      {
        id: 'd8-q11',
        question: 'Which constitutional amendment deleted the "split" defense (1/3rd split) under Paragraph 3 of the Tenth Schedule to prevent wholesale group defections?',
        options: ['86th Amendment Act, 2002', '91st Constitutional Amendment Act, 2003', '97th Amendment Act, 2011', '104th Amendment Act, 2020'],
        correctIndex: 1,
        explanation: 'The 91st Constitutional Amendment Act, 2003 deleted Paragraph 3 of the Tenth Schedule, eliminating the 1/3rd split defense. Now, only a merger of two-thirds of the legislative party is recognized as an exception to defection.',
        articleRef: 'Tenth Schedule Paragraph 4',
        difficulty: 'Foundational'
      },
      {
        id: 'd8-q12',
        question: 'Under Paragraph 4 of the Tenth Schedule, a merger of a political party is deemed to have taken place only if not less than what proportion of members of the legislature party agree to such merger?',
        options: ['One-third (1/3rd)', 'One-half (1/2)', 'Two-thirds (2/3rds)', 'Three-fourths (3/4ths)'],
        correctIndex: 2,
        explanation: 'Paragraph 4(2) of the Tenth Schedule requires that not less than two-thirds of the members of the legislature party concerned must agree to the merger to escape disqualification.',
        articleRef: 'Tenth Schedule Paragraph 4(2)',
        difficulty: 'Foundational'
      },
      {
        id: 'd8-q13',
        question: 'In Raja Ram Pal v. Hon\'ble Speaker, Lok Sabha (Cash-for-Query Case, 2007 5-Judge Bench), what did the Supreme Court hold regarding Parliament\'s power to expel corrupt members?',
        options: ['Parliament has no power to expel any elected member', 'Parliament possesses the inherent constitutional power under Article 105(3) to expel members for corrupt conduct, and such expulsion is subject to judicial review against gross illegality', 'Expulsion can only be done by the President', 'Expulsion is barred by the Tenth Schedule'],
        correctIndex: 1,
        explanation: 'The Constitution Bench held that Parliament has the power under Article 105 to expel members who took money to ask questions in Parliament, and while courts respect legislative autonomy, expulsion orders are subject to judicial review for patent illegality.',
        articleRef: 'Article 105',
        difficulty: 'Intermediate'
      },
      {
        id: 'd8-q14',
        question: 'In M.S.M. Sharma v. Sri Krishna Sinha (Searchlight Case, 1959), what was the conflict between Fundamental Rights and Legislative Privileges?',
        options: ['Article 19(1)(a) freedom of press vs Assembly\'s privilege to prohibit publication of expunged proceedings', 'Article 21 vs military arrest', 'Article 14 vs tax exemptions', 'Article 25 vs assembly timings'],
        correctIndex: 0,
        explanation: 'The Supreme Court harmoniously construed Articles 19(1)(a) and 194(3), holding that the House\'s internal privilege to prohibit publication of its expunged debates prevailed over the general freedom of the press.',
        articleRef: 'Article 19(1)(a) & Article 194',
        difficulty: 'Intermediate'
      },
      {
        id: 'd8-q15',
        question: 'In Special Reference No. 1 of 1964 (Keshav Singh Case 7-Judge Bench), the Supreme Court ruled that:',
        options: ['Legislature has absolute sovereignty over High Court judges', 'The power of the legislature to punish for contempt is subject to the Fundamental Rights under Article 21, and High Court judges issuing interim bail to a person committed for contempt do not commit contempt of the House', 'Citizens cannot approach courts against arrest by the Speaker', 'Privileges override the entire Constitution'],
        correctIndex: 1,
        explanation: 'The 7-Judge Bench firmly established that the legislative power of contempt is subject to judicial review under Articles 21 and 226, shielding judges and citizens from arbitrary legislative arrest.',
        articleRef: 'Article 194 & Article 226',
        difficulty: 'Case Law / Advanced'
      },
      {
        id: 'd8-q16',
        question: 'Under Article 105(1) and 194(1), Freedom of Speech in Parliament and State Legislatures is subject to which constitutional limitations?',
        options: ['Article 19(2) reasonable restrictions only', 'The provisions of the Constitution and the rules and standing orders regulating the procedure of the House', 'The Penal Code provisions', 'Prior censorship by the President'],
        correctIndex: 1,
        explanation: 'Articles 105(1) and 194(1) explicitly provide that freedom of speech in the Legislature is subject to the provisions of the Constitution and the rules regulating legislative procedure, and is wider than ordinary citizen speech under 19(1)(a).',
        articleRef: 'Article 105(1)',
        difficulty: 'Intermediate'
      },
      {
        id: 'd8-q17',
        question: 'Under Article 122 and Article 212 of the Constitution, can the validity of any proceedings in Parliament or a State Legislature be called in question in a court on the ground of any alleged irregularity of procedure?',
        options: ['Yes, on all procedural grounds', 'No, the validity of proceedings shall not be called in question on the ground of any alleged irregularity of procedure', 'Only if certified by the Governor', 'Only if challenged by the Prime Minister'],
        correctIndex: 1,
        explanation: 'Articles 122(1) and 212(1) provide constitutional immunity against judicial review on grounds of mere "irregularity of procedure", though substantive illegality or unconstitutionality remains reviewable.',
        articleRef: 'Article 122 & Article 212',
        difficulty: 'Intermediate'
      },
      {
        id: 'd8-q18',
        question: 'Under Article 102(1) and Article 191(1), a person is disqualified from being chosen as, and for being, a member of either House if they hold any "office of profit" under the Government. What is the constitutional purpose of this bar?',
        options: ['To ensure legislators remain poor', 'To eliminate the conflict of interest between legislative independence and executive patronage or financial subservience', 'To prevent members from owning real estate', 'To ensure only lawyers become legislators'],
        correctIndex: 1,
        explanation: 'In Shibu Soren (2001) and Jaya Bachchan (2006), the Supreme Court ruled that the disqualification for holding an office of profit is aimed at maintaining legislative independence from executive influence.',
        articleRef: 'Article 102(1)(a)',
        difficulty: 'Intermediate'
      },
      {
        id: 'd8-q19',
        question: 'In Lily Thomas v. Union of India (2013), the Supreme Court struck down Section 8(4) of the Representation of the People Act, 1951, which previously allowed convicted MPs/MLAs a 3-month grace period to appeal without disqualification. What was the result?',
        options: ['All convicted legislators are disqualified immediately upon conviction for offenses carrying 2+ years imprisonment', 'Convicted legislators can remain ministers for life', 'Disqualification only occurs after Supreme Court decides appeal', 'Convictions can be erased by the Speaker'],
        correctIndex: 0,
        explanation: 'The Supreme Court struck down Section 8(4) as ultra vires Article 102(1)(e), holding that disqualification takes effect immediately upon conviction and sentence of 2 or more years.',
        articleRef: 'Article 102(1)(e)',
        difficulty: 'Foundational'
      },
      {
        id: 'd8-q20',
        question: 'Under Article 84 and Article 173, what is the minimum age prescribed for a citizen to be qualified to be chosen as a member of the House of the People (Lok Sabha) and the Council of States (Rajya Sabha) respectively?',
        options: ['21 years for Lok Sabha; 25 years for Rajya Sabha', '25 years for Lok Sabha; 30 years for Rajya Sabha', '30 years for Lok Sabha; 35 years for Rajya Sabha', '25 years for both Houses'],
        correctIndex: 1,
        explanation: 'Under Article 84(b), a person must be not less than 25 years of age for the Lok Sabha (and State Legislative Assembly), and not less than 30 years of age for the Rajya Sabha (and State Legislative Council).',
        articleRef: 'Article 84(b) & Article 173(b)',
        difficulty: 'Foundational'
      }
    ]
  },

  // ==========================================
  // DAY 9: UNION & STATE JUDICIARY, WRITS 226 & SUBORDINATE COURTS
  // ==========================================
  {
    dayNumber: 9,
    title: 'Union & State Judiciary, Writs 226 & Subordinate Courts (Articles 124–147, 214–237)',
    subtitle: 'The Collegium System, Overruling Asian Resurfacing (2024), District Judge Eligibility (2025) & Quashing Writs',
    phase: 'Phase 2: The State Machinery, Judiciary & Criminal Jurisdiction',
    estimatedHours: 6,
    targetArticles: ['Article 124', 'Article 136', 'Article 141', 'Article 142', 'Article 214', 'Article 226', 'Article 227', 'Article 233'],
    overview: 'Day 9 analyzes the judicial branch of India: appointment of Supreme Court and High Court judges (First, Second, Third Judges Cases, NJAC), Article 142 extraordinary equity power, High Court plenary writ jurisdiction under Article 226, the landmark 5-Judge Bench ruling in High Court Bar Association Allahabad (2024) overruling automatic stay expirations, and the 2025 Constitution Bench ruling in All India Judges Association on Article 233 Bar practice requirements.',
    coreConcepts: [
      {
        heading: 'Judicial Appointments & Independence (Collegium vs NJAC)',
        articleAnchor: 'Articles 124 & 217',
        synopsis: 'Judicial independence is a basic feature of the Constitution. The appointment mechanism evolved through the Three Judges Cases, culminating in the striking down of the 99th Amendment (NJAC) in 2015.',
        substantiveLaw: [
          'First Judges Case (S.P. Gupta 1981): "Consultation" does not mean concurrence; executive has primacy.',
          'Second Judges Case (SCAORA 1993 9-Judge Bench): Overruled S.P. Gupta. "Consultation" means CONCURRENCE; primacy rests with CJI and senior-most judges.',
          'Third Judges Case (Special Ref 1998): Expanded Collegium to CJI + 4 senior-most judges for Supreme Court appointments, and CJI + 2 judges for High Courts.',
          'NJAC Case (SCAORA 2015 5-Judge Bench, 4:1): Struck down the 99th Amendment and NJAC Act as an impermissible assault on Judicial Independence (Basic Structure).'
        ],
        prosecutionAngle: 'Prosecuting officers look to High Court Collegium transfers and recommendations when tracking sessions trial jurisdiction and judicial vacancies.'
      },
      {
        heading: 'High Court Writs (Article 226) & The 2024 Stay Expiration Overruling',
        articleAnchor: 'Articles 226, 227 & 142',
        synopsis: 'Article 226 is wider than Article 32: it issues writs for Fundamental Rights AND "for any other purpose". High Courts exercise superintendence under Article 227 and inherent criminal quashing under Section 528 BNSS (former 482 CrPC).',
        substantiveLaw: [
          'State of Haryana v. Bhajan Lal (1992): 7 classic categories where High Court under Article 226 / 482 CrPC can quash an FIR to prevent abuse of process.',
          'Whirlpool Corp (1998): 3 exceptions where alternative statutory remedies do not bar Article 226: (1) Fundamental right breach; (2) Natural justice violation; (3) Order wholly without jurisdiction.',
          'Asian Resurfacing (2018 3-Judge Bench): Directed that all High Court stays of trial automatically expire after 6 months.',
          'High Court Bar Association Allahabad v. State of U.P. (Feb 2024 5-Judge Bench, Unanimous): EXPRESSLY OVERRULED Asian Resurfacing. Held: Article 142 cannot be used to impose blanket administrative clocks; High Court stays do NOT automatically expire; an interim stay remains valid until heard and vacated on judicial merits.'
        ],
        prosecutionAngle: 'A vital everyday courtroom rule: trial magistrates cannot proceed with a stayed trial simply because 6 months elapsed.'
      },
      {
        heading: 'Subordinate Courts & District Judge Appointments (2025 Ruling)',
        articleAnchor: 'Articles 233, 234 & 235',
        synopsis: 'Article 233 governs the appointment, posting, and promotion of District Judges. Control over subordinate judiciary vests in the High Court under Article 235.',
        substantiveLaw: [
          'Chandra Mohan (1966): Consultation with the High Court under Article 233 is mandatory to shield trial judges from executive control.',
          'Dheeraj Mor (2020 3-Judge Bench): Judicial officers in the subordinate judiciary cannot compete in the 25% direct recruitment Bar quota without resigning.',
          'All India Judges Association v. Union of India (Jan 2025 5-Judge Constitution Bench): Reaffirmed Dheeraj Mor. Mandated that direct recruitment under Article 233(2) requires 7 years of continuous, active practice at the Bar as on the cut-off date. Serving magistrates have their own promotional channel and cannot double-dip into the advocate quota.'
        ],
        prosecutionAngle: 'Directly impacts Prosecuting Officers and practicing advocates preparing for Higher Judicial Service (District Judge) examinations.'
      }
    ],
    landmarkEvolutionPairs: [
      {
        subject: 'Automatic Expiration of High Court Stays of Trial under Article 226/142',
        classicCase: {
          name: 'Asian Resurfacing of Road Agency v. CBI',
          year: 2018,
          bench: '3-Judge Bench (Goel J)',
          ratio: 'Held that interim stay orders granted by High Courts automatically vacate in 6 months unless extended by reasoned order.'
        },
        modernCase: {
          name: 'High Court Bar Association Allahabad v. State of U.P.',
          year: 2024,
          bench: '5-Judge Constitution Bench (Unanimous, CJI Chandrachud)',
          ratio: 'UNANIMOUSLY OVERRULED Asian Resurfacing. Stays never automatically lapse; High Courts are constitutional courts of record and cannot be tied to automatic temporal clocks.'
        },
        examApplicationNote: 'Mandatory exam pair for Article 226 and judicial delay questions.'
      }
    ],
    dictionaryTerms: [
      'Collegium System', 'Court of Record', 'Judicial Review', 'Contempt of Court', 'Interim Stay',
      'Automatic Vacation', 'Judicial Superintendence', 'Direct Bar Quota', 'Subordinate Judiciary', 'Complete Justice',
      'Advisory Jurisdiction', 'Special Leave Petition', 'Inherent Powers', 'Quashing of FIR', 'Alternative Remedy'
    ],
    svgConceptType: 'judiciary-hierarchy',
    caseStudy: {
      title: 'Trial Resumption After 6 Months Under Overruled Asian Resurfacing Doctrine',
      factualMatrix: 'In a corruption prosecution under Section 13(1)(b) of the Prevention of Corruption Act, the Special Anti-Corruption Judge in Jammu framed charges against Mr. D, a senior engineer. Mr. D filed a petition under Section 528 BNSS (former 482 CrPC) read with Article 226 before the High Court, asserting that the prosecution lacked mandatory sanction under Section 19 of the PC Act. On March 1, 2024, the High Court issued notice and passed an interim order: "Further proceedings in Special Case No. 12/2023 before the Trial Court shall remain stayed until further orders". On October 15, 2024 (7.5 months later), the Special Public Prosecutor filed an application before the Special Judge submitting that since more than 6 months had elapsed and no extension order was produced by the accused, the High Court stay stood automatically vacated in terms of the Supreme Court\'s 3-Judge Bench ruling in Asian Resurfacing of Road Agency v. CBI (2018). The Special Judge accepted the Prosecutor\'s submission, declared the stay vacated, issued non-bailable warrants against Mr. D, and scheduled prosecution witness examination. Mr. D immediately moved the High Court challenging the trial court\'s order.',
      framingQuestions: [
        '1. Does an interim stay of criminal trial granted by a High Court automatically vacate upon the expiry of 6 months in light of the 5-Judge Constitution Bench ruling in High Court Bar Association Allahabad (Feb 2024)?',
        '2. Can the Supreme Court under Article 142 issue directions that fix automatic temporal limits on stay orders granted by High Courts?',
        '3. Was the Special Judge legally justified in proceeding with the trial despite the High Court\'s operative interim stay order?'
      ],
      statutoryApplicability: ['Article 226', 'Article 227', 'Article 142', 'High Court Bar Association Allahabad (2024)', 'Asian Resurfacing (2018)'],
      modelAnswer: '1. OVERRULING OF ASIAN RESURFACING BY 5-JUDGE BENCH: The Special Public Prosecutor\'s reliance on Asian Resurfacing of Road Agency (2018) is completely bad in law. In High Court Bar Association, Allahabad v. State of Uttar Pradesh (February 2024), a unanimous 5-Judge Constitution Bench of the Supreme Court expressly overruled Asian Resurfacing. The Constitution Bench held that interim stay orders granted by High Courts do NOT automatically vacate upon the expiry of 6 months or any fixed timeline.\n\n2. LIMITS OF ARTICLE 142 & STATUS OF HIGH COURTS: The Supreme Court held that Article 142 confers jurisdiction to do "complete justice" between the parties before the Court, but cannot be used to issue blanket administrative fiats that fetter judicial discretion. High Courts are independent constitutional courts of record possessing plenary jurisdiction under Articles 226 and 227, and are not subordinate to the Supreme Court administratively. Automatic vacation of a stay without a judicial hearing offends natural justice and the maxim "actus curiae neminem gravabit" (an act of the court shall prejudice no man).\n\n3. ILLEGALITY OF SPECIAL JUDGE\'S ORDER: A stay of proceedings granted by the High Court "until further orders" remains in full legal force until it is specifically heard, modified, or vacated by the High Court by a judicial order. The Special Judge committed a grave jurisdictional error in declaring the stay vacated and issuing non-bailable warrants. The High Court will set aside the trial court\'s order, recall the warrants, and reiterate that the stay remains operative until final disposal of the quashing petition.',
      markingRubric: [
        { criterion: 'Accurate citation and analysis of 5-Judge Bench in HC Bar Association Allahabad (2024)', marks: 4 },
        { criterion: 'Constitutional status of High Courts and limits of Article 142 automatic deadlines', marks: 3 },
        { criterion: 'Invalidity of trial resumption and application of actus curiae neminem gravabit', marks: 3 }
      ]
    },
    mcqs: [
      {
        id: 'd9-q1',
        question: 'In High Court Bar Association, Allahabad v. State of Uttar Pradesh (February 2024), the 5-Judge Constitution Bench unanimously overruled which 2018 decision regarding court stay orders?',
        options: ['Asian Resurfacing of Road Agency Pvt. Ltd. v. CBI (2018)', 'Whirlpool Corporation v. Registrar of Trade Marks (1998)', 'L. Chandra Kumar v. Union of India (1997)', 'Common Cause v. Union of India (2018)'],
        correctIndex: 0,
        explanation: 'In February 2024, the 5-Judge Constitution Bench unanimously overruled Asian Resurfacing (2018), holding that High Court stays of proceedings do NOT automatically expire after 6 months.',
        articleRef: 'Article 226 & Article 142',
        difficulty: 'Foundational'
      },
      {
        id: 'd9-q2',
        question: 'Under the 2024 ruling in High Court Bar Association Allahabad, why can the Supreme Court NOT use Article 142 to impose automatic 6-month stay expiration deadlines on High Courts?',
        options: ['High Courts are constitutional courts of plenary jurisdiction and are not administratively subordinate to the Supreme Court', 'Automatic vacation without hearing violates natural justice and the doctrine of actus curiae neminem gravabit', 'Article 142 cannot be used to enact substantive procedural legislation', 'All of the above collectively'],
        correctIndex: 3,
        explanation: 'All three reasons were affirmed: High Courts are independent constitutional courts of record, automatic deadlines without hearing violate natural justice, and Article 142 cannot enact broad procedural legislation.',
        articleRef: 'Article 142 & Article 226',
        difficulty: 'Intermediate'
      },
      {
        id: 'd9-q3',
        question: 'In All India Judges Association v. Union of India (January 2025 5-Judge Constitution Bench), what was held regarding in-service judicial officers competing for District Judge posts under Article 233(2)?',
        options: ['In-service judicial officers CANNOT compete in the 25% direct recruitment advocate quota without resigning, affirming Dheeraj Mor (2020)', 'In-service judicial officers can compete in all quotas simultaneously', 'The advocate quota was abolished', 'Only High Court clerks can be appointed District Judges'],
        correctIndex: 0,
        explanation: 'The 5-Judge Bench reaffirmed Dheeraj Mor, holding that Article 233(2) requires 7 years of continuous practice at the Bar as an active advocate; serving subordinate judges have their own promotion quota and cannot compete in the direct Bar quota.',
        articleRef: 'Article 233(2)',
        difficulty: 'Foundational'
      },
      {
        id: 'd9-q4',
        question: 'In Supreme Court Advocates-on-Record Association v. Union of India (Second Judges Case, 1993 9-Judge Bench), the Supreme Court overruled S.P. Gupta (1981) and established that:',
        options: ['The executive has complete primacy in judicial appointments', 'The word "consultation" in Article 124(2) means "concurrence", and the opinion of the Chief Justice of India has primacy', 'Judges are appointed by public elections', 'Law Minister has the final casting vote in collegium meetings'],
        correctIndex: 1,
        explanation: 'The 9-Judge Bench held that "consultation" means concurrence, and the Chief Justice of India\'s recommendation, formulated in consultation with senior colleagues, has decisive primacy to protect judicial independence.',
        articleRef: 'Article 124(2)',
        difficulty: 'Foundational'
      },
      {
        id: 'd9-q5',
        question: 'In Supreme Court Advocates-on-Record Association v. Union of India (NJAC Case, 2015), the 5-Judge Constitution Bench struck down the 99th Constitutional Amendment Act and the National Judicial Appointments Commission (NJAC) Act because:',
        options: ['The Bill was not signed by the President', 'The presence of the Union Law Minister and two eminent persons infringed upon the Independence of the Judiciary, which is an inviolable Basic Feature', 'The salary of judges was reduced', 'Parliament lacked competence to discuss judges'],
        correctIndex: 1,
        explanation: 'The 4:1 majority held that judicial primacy in appointments is an integral part of the Independence of the Judiciary, which is part of the Basic Structure. The NJAC gave the executive a veto over judicial appointments, rendering it unconstitutional.',
        articleRef: 'Article 124A & Basic Structure',
        difficulty: 'Foundational'
      },
      {
        id: 'd9-q6',
        question: 'Under Article 141 of the Constitution of India, the law declared by the Supreme Court shall be binding upon:',
        options: ['Only the High Courts in India', 'All courts within the territory of India', 'Only subordinate civil courts', 'Only administrative tribunals'],
        correctIndex: 1,
        explanation: 'Article 141 states: "The law declared by the Supreme Court shall be binding on all courts within the territory of India."',
        articleRef: 'Article 141',
        difficulty: 'Foundational'
      },
      {
        id: 'd9-q7',
        question: 'Under Article 142(1), the Supreme Court in the exercise of its jurisdiction may pass such decree or make such order as is necessary for:',
        options: ['Dismissing political leaders', '"Doing complete justice in any cause or matter pending before it"', 'Amending Part III of the Constitution', 'Increasing the number of judges'],
        correctIndex: 1,
        explanation: 'Article 142(1) confers plenary equity powers on the Supreme Court to pass any order necessary for "doing complete justice in any cause or matter pending before it".',
        articleRef: 'Article 142(1)',
        difficulty: 'Foundational'
      },
      {
        id: 'd9-q8',
        question: 'Under Article 143, the President may refer a question of law or fact of public importance to the Supreme Court for its Advisory Opinion. What is the binding nature of the Supreme Court\'s opinion on the President?',
        options: ['It is legally binding like a judgment under Article 141', 'It is purely advisory and not binding on the President, though it carries high persuasive weight', 'The President is removed if he disregards the advice', 'The opinion must be approved by the Lok Sabha'],
        correctIndex: 1,
        explanation: 'The opinion rendered by the Supreme Court under Article 143 is purely advisory and not a binding decree, though it possesses immense moral and judicial authority.',
        articleRef: 'Article 143',
        difficulty: 'Intermediate'
      },
      {
        id: 'd9-q9',
        question: 'In L. Chandra Kumar v. Union of India (1997 7-Judge Bench), the Supreme Court held that the power of judicial review under Article 226 (High Courts) and Article 32 (Supreme Court) over administrative tribunals:',
        options: ['Can be excluded by a constitutional amendment', 'Is an integral and essential feature of the Basic Structure of the Constitution and can never be excluded', 'Only applies to military courts martial', 'Is optional at the discretion of the Tribunal Chairman'],
        correctIndex: 1,
        explanation: 'The 7-Judge Bench struck down provisions excluding High Court writ jurisdiction, declaring that judicial review under Articles 226/227 and Article 32 is part of the inviolable Basic Structure.',
        articleRef: 'Article 226 & Article 323A',
        difficulty: 'Foundational'
      },
      {
        id: 'd9-q10',
        question: 'In Whirlpool Corporation v. Registrar of Trade Marks (1998), the Supreme Court laid down which 3 classic exceptions where an alternative statutory remedy does NOT bar a writ petition under Article 226?',
        options: ['(1) Tax refunds, (2) Property mutations, (3) Police complaints', '(1) Enforcement of Fundamental Rights, (2) Violation of Natural Justice, (3) Order passed wholly without jurisdiction', '(1) Civil disputes, (2) Criminal bails, (3) Election petitions', '(1) Armed forces, (2) Foreign citizens, (3) Industrial strikes'],
        correctIndex: 1,
        explanation: 'Whirlpool established the 3 golden exceptions: writ petitions are maintainable despite alternative remedies where: (1) fundamental rights are violated, (2) natural justice is breached, or (3) proceedings are wholly without jurisdiction.',
        articleRef: 'Article 226',
        difficulty: 'Foundational'
      },
      {
        id: 'd9-q11',
        question: 'In State of Haryana v. Bhajan Lal (1992), the Supreme Court laid down 7 illustrative categories where the High Court can exercise powers under Article 226 or Section 482 CrPC (now Section 528 BNSS) to:',
        options: ['Quash an FIR or criminal complaint to prevent abuse of process of any court', 'Award the death penalty without trial', 'Grant promotions to police officers', 'Cancel driving licenses'],
        correctIndex: 0,
        explanation: 'Bhajan Lal (1992) is the universal authority governing the quashing of criminal proceedings under Article 226 and inherent powers where allegations do not disclose any cognizable offense or are manifestly malicious.',
        articleRef: 'Article 226 & Section 528 BNSS',
        difficulty: 'Foundational'
      },
      {
        id: 'd9-q12',
        question: 'What is the key constitutional distinction between the writ jurisdiction of the High Court under Article 226 and the supervisory jurisdiction under Article 227?',
        options: ['Article 226 is original writ jurisdiction to remedy rights; Article 227 is supervisory jurisdiction to keep subordinate courts and tribunals within the bounds of their authority', 'Article 227 is only for military courts', 'Article 226 cannot quash orders', 'There is no distinction; they are identical'],
        correctIndex: 0,
        explanation: 'In Waryam Singh and Shalini Shyam Shetty, the Supreme Court held that Article 226 is original writ power, while Article 227 is supervisory power exercised sparingly to correct patent jurisdictional errors of lower courts and tribunals.',
        articleRef: 'Articles 226 & 227',
        difficulty: 'Intermediate'
      },
      {
        id: 'd9-q13',
        question: 'Under Article 235 of the Constitution, the control over district courts and courts subordinate thereto, including postings, promotions, and grant of leave, vests in:',
        options: ['The State Law Minister', 'The Governor of the State', 'The High Court', 'The Public Service Commission'],
        correctIndex: 2,
        explanation: 'Article 235 provides that the control over district courts and courts subordinate thereto shall be vested in the High Court to maintain the complete independence of the subordinate judiciary from executive control.',
        articleRef: 'Article 235',
        difficulty: 'Foundational'
      },
      {
        id: 'd9-q14',
        question: 'Under Article 233(2), what is the minimum qualifying period of practice as an advocate or pleader required for direct recruitment as a District Judge?',
        options: ['3 years', '5 years', '7 years', '10 years'],
        correctIndex: 2,
        explanation: 'Article 233(2) mandates that a person shall only be eligible to be appointed a district judge if he has been for not less than seven years an advocate or a pleader and is recommended by the High Court.',
        articleRef: 'Article 233(2)',
        difficulty: 'Foundational'
      },
      {
        id: 'd9-q15',
        question: 'In Chandra Mohan v. State of U.P. (1966), what did the Constitution Bench hold regarding executive appointment of District Judges without High Court consultation under Article 233?',
        options: ['The executive has unguided discretion', 'Consultation with the High Court is mandatory, and the High Court\'s opinion carries decisive weight to preserve judicial independence', 'Consultation is optional', 'Appointments can be made through political party recommendations'],
        correctIndex: 1,
        explanation: 'Subba Rao CJI ruled that consultation with the High Court under Article 233 is a mandatory constitutional requirement to shield trial judges from executive patronage.',
        articleRef: 'Article 233',
        difficulty: 'Intermediate'
      },
      {
        id: 'd9-q16',
        question: 'Under Article 129 and Article 215, the Supreme Court and High Courts respectively are declared to be "Courts of Record". What are the two primary legal attributes of a Court of Record?',
        options: ['(1) Its records have evidentiary value and cannot be questioned when produced; and (2) It possesses inherent power to punish for contempt of itself', 'It must record all court hearings on audio cassettes', 'It can never reverse its own previous judgments', 'It must maintain files for 500 years'],
        correctIndex: 0,
        explanation: 'A Court of Record possesses: (1) its acts and judicial proceedings are enrolled for a perpetual memory and testimony; and (2) it has inherent constitutional power to punish for contempt of itself.',
        articleRef: 'Articles 129 & 215',
        difficulty: 'Intermediate'
      },
      {
        id: 'd9-q17',
        question: 'Under Article 136 of the Constitution, the Supreme Court may grant Special Leave to Appeal (SLP) against any judgment, decree, sentence, or order from:',
        options: ['Only High Courts in civil cases', 'Any court or tribunal in the territory of India (except Armed Forces courts/tribunals)', 'Only constitutional bench orders', 'Only central administrative tribunals'],
        correctIndex: 1,
        explanation: 'Article 136 confers plenary discretionary appellate power to grant SLP against any determination by any court or tribunal in India, with the sole exception under 136(2) of any court or tribunal constituted under armed forces laws.',
        articleRef: 'Article 136',
        difficulty: 'Foundational'
      },
      {
        id: 'd9-q18',
        question: 'In In re Prashant Bhushan & Anr. (2020), the Supreme Court examined its contempt jurisdiction under Article 129. What was held regarding the balance between free speech and scandalizing the court?',
        options: ['Judges can never be criticized under any circumstances', 'Scurrilous, malicious attacks that shake public confidence in the institution of the judiciary exceed fair criticism and constitute criminal contempt under Article 129', 'All contempt proceedings require prior approval of the Prime Minister', 'Contempt of court was abolished by the 44th Amendment'],
        correctIndex: 1,
        explanation: 'The Supreme Court ruled that while constructive criticism is protected, attributing corrupt motives to the institution or Chief Justice undermines public trust in the administration of justice and attracts criminal contempt.',
        articleRef: 'Article 129 & Article 19(2)',
        difficulty: 'Intermediate'
      },
      {
        id: 'd9-q19',
        question: 'Under Article 226(2), can a High Court issue a writ against a person, authority, or Government located OUTSIDE its territorial state boundaries?',
        options: ['Never under any circumstances', 'Yes, if the cause of action arises, wholly or in part, within the territorial limits of that High Court', 'Only if the Chief Justice of India transfers the case', 'Only if the respondent consents in writing'],
        correctIndex: 1,
        explanation: 'Article 226(2) was inserted by the 15th Amendment Act, 1963: the High Court can issue writs against external authorities if the cause of action arose, wholly or in part, within its territorial jurisdiction (Navinchandra N. Majithia).',
        articleRef: 'Article 226(2)',
        difficulty: 'Intermediate'
      },
      {
        id: 'd9-q20',
        question: 'What is the retirement age of a Supreme Court Judge under Article 124(2) and a High Court Judge under Article 217(1) respectively?',
        options: ['60 years for High Court; 62 years for Supreme Court', '62 years for High Court; 65 years for Supreme Court', '65 years for High Court; 68 years for Supreme Court', '65 years for both'],
        correctIndex: 1,
        explanation: 'Under Article 217(1), a High Court Judge holds office until the age of 62 years. Under Article 124(2), a Supreme Court Judge holds office until the age of 65 years.',
        articleRef: 'Article 124(2) & Article 217(1)',
        difficulty: 'Foundational'
      }
    ]
  },

  // ==========================================
  // DAY 10: FEDERALISM, REPUGNANCY & MINERAL TAXATION
  // ==========================================
  {
    dayNumber: 10,
    title: 'Federalism, Repugnancy & Mineral Taxation (Articles 245–300A, 7th Sched)',
    subtitle: 'Legislative Competence, Article 254 Repugnancy, Overruling India Cements in MADA (2024) & Article 300A Property Rights',
    phase: 'Phase 2: The State Machinery, Judiciary & Criminal Jurisdiction',
    estimatedHours: 6,
    targetArticles: ['Article 245', 'Article 246', 'Article 248', 'Article 254', 'Article 265', 'Article 300A', 'Seventh Schedule'],
    overview: 'Day 10 investigates the federal balance of powers: territorial nexus under Article 245, subject-matter distribution under the Seventh Schedule, the classic doctrines of Pith and Substance, Colorable Legislation, resolving Repugnancy under Article 254, the monumental 9-Judge Bench ruling in MADA v. SAIL (July 2024) holding that royalty is not a tax, and the 7 property sub-rights recognized in Bimal Kumar Shah (2024) under Article 300A.',
    coreConcepts: [
      {
        heading: 'Legislative Distribution & Classic Interpretation Doctrines',
        articleAnchor: 'Articles 245 & 246, 7th Schedule',
        synopsis: 'Parliament has power to make laws for the whole or any part of India (with extra-territorial operation), while State Legislatures make laws for their States. Subject matters are divided into List I (Union - 97 entries), List II (State - 66 entries), and List III (Concurrent - 47 entries). Article 248 gives residuary powers exclusively to Parliament.',
        substantiveLaw: [
          'Doctrine of Territorial Nexus: State law is valid if there is a real and substantial nexus between the State and the subject matter/transaction (Tata Iron & Steel Co. v. State of Bihar).',
          'Doctrine of Pith and Substance: True nature and character of legislation is examined; if it falls substantially within competence, incidental encroachment into another list does not invalidate it (F.N. Balsara 1951, Prafulla Kumar Mukherjee 1947).',
          'Doctrine of Colorable Legislation: "What cannot be done directly cannot be done indirectly." Examines legislative competence, not legislative motives (K.C. Gajapati Narayan Deo 1953).'
        ],
        prosecutionAngle: 'Prosecuting officers invoke Pith and Substance when defending State criminal procedural amendments and police regulations from challenges of encroaching on Union subjects.'
      },
      {
        heading: 'Resolving Repugnancy under Article 254',
        articleAnchor: 'Article 254',
        synopsis: 'Repugnancy arises exclusively in List III (Concurrent List) where both Parliament and State Legislature enact conflicting laws on the same subject.',
        substantiveLaw: [
          'General Rule under 254(1): If a State law in List III is inconsistent with or repugnant to a Parliamentary law, the Parliamentary law prevails and the State law is void to the extent of repugnancy (Zaverbhai Amaidas 1954).',
          'Exception under 254(2): If the State law was reserved for the consideration of the President and received Presidential assent, the State law prevails in that State.',
          'Proviso to 254(2): Parliament can at any time enact subsequent legislation adding to, amending, varying, or repealing such State law.'
        ],
        prosecutionAngle: 'Essential when determining whether State amendments to the Criminal Procedure Code or Penal Code (BNSS/BNS) remain operative post-central codification.'
      },
      {
        heading: 'The 2024 Mineral Taxation Revolution (9-Judge Bench in MADA)',
        articleAnchor: 'Entry 50 List II vs Entry 54 List I',
        synopsis: 'In July 2024, a 9-Judge Constitution Bench (8:1 Majority, CJI Chandrachud) delivered a landmark ruling in Mineral Area Development Authority (MADA) v. Steel Authority of India (SAIL).',
        substantiveLaw: [
          'EXPRESSLY OVERRULED India Cements (1990 7-Judge Bench) and Kesoram Industries (2004 5-Judge Bench).',
          'Held: Royalty on extracted minerals is NOT a tax; it is a contractual consideration paid by the mining leaseholder to the owner of the mineral (State/lessor) for the privilege of extracting minerals.',
          'State Competence Restored: Entry 50 of List II empowers States to tax mineral-bearing lands, and this power is not denuded by Parliament\'s MMDR Act, 1957 under Entry 54 List I.'
        ],
        prosecutionAngle: 'A top-tier 2024 fiscal federalism ruling that reshapes natural resource litigation and revenue enforcement.'
      }
    ],
    landmarkEvolutionPairs: [
      {
        subject: 'Taxation of Minerals & Royalty under Entry 50 List II',
        classicCase: {
          name: 'India Cements Ltd. v. State of Tamil Nadu',
          year: 1990,
          bench: '7-Judge Bench (Sabyasachi Mukharji CJI)',
          ratio: 'Held that royalty is a tax; hence States cannot levy additional cesses or taxes on mineral rights under Entry 50 List II.'
        },
        modernCase: {
          name: 'Mineral Area Development Authority (MADA) v. SAIL',
          year: 2024,
          bench: '9-Judge Constitution Bench (8:1 Majority, CJI Chandrachud)',
          ratio: 'OVERRULED India Cements. Royalty is NOT a tax; States have sovereign power under Entry 50 List II to levy taxes on mineral rights and land.'
        },
        examApplicationNote: 'Mandatory exam pair for fiscal federalism, legislative competence, and Seventh Schedule.'
      }
    ],
    dictionaryTerms: [
      'Pith and Substance', 'Colorable Legislation', 'Doctrine of Repugnancy', 'Occupied Field', 'Residuary Powers',
      'Territorial Nexus', 'Incidental Encroachment', 'Harmonious Construction', 'Royalty', 'Eminent Domain',
      'Consolidated Fund', 'Public Account', 'Finance Commission', 'Goods and Services Tax', 'Presidential Assent'
    ],
    svgConceptType: 'federal-tax-hierarchy',
    caseStudy: {
      title: 'State Mineral Development Cess on Mining Leases & Repugnancy Challenge',
      factualMatrix: 'The State of Jharkhand enacted the "Jharkhand Mineral Rights and Mining Land Tax Act, 2025" under Entry 50 of List II (State List), levying a 4% development tax on the annual value of extracted coal and iron ore from mining lands within the State. Several central public sector undertakings (including SAIL and Coal India) and private leaseholders challenged the Act before the High Court, asserting that: (1) Parliament has enacted the Mines and Minerals (Development and Regulation) Act, 1957 (MMDR Act) under Entry 54 of List I, fully occupying the field of mineral regulation; (2) In India Cements (1990), a 7-Judge Bench held that royalty is a tax, meaning any additional cess on mineral output is an impermissible double tax; and (3) Under Article 254, the State Act is repugnant to Section 9 of the MMDR Act which fixes royalties.',
      framingQuestions: [
        '1. Is royalty on extracted minerals in the nature of a tax under the constitutional scheme?',
        '2. Does Parliament\'s regulation of mines under Entry 54 List I (MMDR Act) strip the State Legislature of its constitutional power to tax mineral rights under Entry 50 List II?',
        '3. How does the 9-Judge Constitution Bench decision in MADA v. SAIL (July 2024) resolve this controversy?'
      ],
      statutoryApplicability: ['Entry 50 List II', 'Entry 54 List I', 'Article 246', 'Article 254', 'MADA v. SAIL (2024)', 'India Cements (1990)'],
      modelAnswer: '1. ROYALTY IS NOT A TAX: In Mineral Area Development Authority (MADA) v. Steel Authority of India (July 2024 9-Judge Constitution Bench), the Supreme Court categorically overruled the 34-year-old 7-Judge Bench decision in India Cements Ltd. (1990). The 9-Judge Bench held by an 8:1 majority that royalty payable under Section 9 of the MMDR Act is NOT a tax. Royalty is a contractual consideration paid by the lessee to the lessor (the owner of the minerals) for the right to extract and enjoy property. Since royalty is not a tax, a state cess on minerals does not constitute a double tax.\n\n2. LEGISLATIVE COMPETENCE UNDER ENTRY 50 LIST II: Entry 50 of List II grants States exclusive power to levy "Taxes on mineral rights subject to any limitations imposed by Parliament by law relating to mineral development". The Court ruled that regulatory power over mines under Entry 54 of List I (MMDR Act) is distinct from the taxing power under Entry 50 of List II. General regulatory statutes cannot be read as subsuming or destroying the sovereign taxing power of States. The MMDR Act does not contain any specific limitation prohibiting States from taxing mineral land.\n\n3. NO REPUGNANCY UNDER ARTICLE 254: Repugnancy under Article 254 can only arise between laws in the Concurrent List (List III). Since the Jharkhand Act was enacted under Entry 50 of List II (exclusive State List), Article 254 has no application. The State Legislature had full competence to enact the tax. Consequently, the High Court will uphold the Jharkhand Mineral Tax Act as constitutionally valid.',
      markingRubric: [
        { criterion: 'Application of the 9-Judge Bench ruling in MADA v. SAIL (2024)', marks: 4 },
        { criterion: 'Distinction between regulatory power (Entry 54 List I) vs taxing power (Entry 50 List II)', marks: 3 },
        { criterion: 'Inapplicability of Article 254 repugnancy to exclusive State List taxation', marks: 3 }
      ]
    },
    mcqs: [
      {
        id: 'd10-q1',
        question: 'In the historic 9-Judge Constitution Bench ruling in Mineral Area Development Authority (MADA) v. SAIL (July 2024), what was held regarding royalty on minerals?',
        options: ['Royalty is a tax under Entry 50 List II', 'Royalty is NOT a tax; it is a contractual consideration paid by the lessee to the lessor for mineral extraction, expressly overruling India Cements (1990)', 'Royalty belongs exclusively to the Central Government', 'Royalty can only be fixed by the Supreme Court'],
        correctIndex: 1,
        explanation: 'In July 2024, the 9-Judge Constitution Bench (8:1) overruled India Cements (1990), holding that royalty is not a tax, and affirmed States\' legislative power under Entry 50 List II to tax mineral-bearing lands.',
        articleRef: 'Entry 50 List II & Entry 54 List I',
        difficulty: 'Foundational'
      },
      {
        id: 'd10-q2',
        question: 'Under the Doctrine of Pith and Substance, what do courts examine when a statute enacted by a Legislature under one List is challenged for encroaching upon an entry in another List?',
        options: ['The political motive of the lawmakers', 'The true nature and character (substance) of the legislation; if it falls substantially within competence, incidental encroachment does not invalidate it', 'Whether the Governor approved the bill unanimously', 'Whether the statute generates revenue'],
        correctIndex: 1,
        explanation: 'Pith and Substance (F.N. Balsara, Prafulla Kumar) mandates examining the true essence of the statute. If the primary subject lies within legislative competence, incidental encroachment into another list is permissible.',
        articleRef: 'Article 246',
        difficulty: 'Foundational'
      },
      {
        id: 'd10-q3',
        question: 'In K.C. Gajapati Narayan Deo v. State of Orissa (1953), the Supreme Court explained the Doctrine of Colorable Legislation through which famous maxim?',
        options: ['"Audi alteram partem"', '"What cannot be done directly, cannot also be done indirectly"', '"Nemo debet esse judex in propria causa"', '"Actus curiae neminem gravabit"'],
        correctIndex: 1,
        explanation: 'Colorable legislation is based on the maxim "what cannot be done directly cannot be done indirectly". It applies when a legislature dresses up a law to appear within its competence when in substance it exceeds its constitutional power.',
        articleRef: 'Article 246',
        difficulty: 'Foundational'
      },
      {
        id: 'd10-q4',
        question: 'Under Article 254(1), if a law enacted by a State Legislature on a subject in the Concurrent List (List III) is repugnant to a law enacted by Parliament, what is the constitutional consequence?',
        options: ['The State law prevails automatically', 'The Parliamentary law prevails, and the State law is void to the extent of the repugnancy', 'Both laws are struck down', 'The President must dissolve the State Assembly'],
        correctIndex: 1,
        explanation: 'Article 254(1) incorporates the general rule of federal supremacy in the Concurrent List: Parliamentary law prevails over inconsistent State law, rendering the State law void to the extent of repugnancy.',
        articleRef: 'Article 254(1)',
        difficulty: 'Foundational'
      },
      {
        id: 'd10-q5',
        question: 'Under Article 254(2), how can a State law on a Concurrent List subject prevail over an earlier conflicting Parliamentary law within that particular State?',
        options: ['By passing the law with a two-thirds majority in the Assembly', 'If the State law was reserved for the consideration of the President and has received Presidential assent', 'By declaring a state of emergency', 'By order of the Chief Justice of the High Court'],
        correctIndex: 1,
        explanation: 'Article 254(2) provides that if a State Act on a Concurrent subject is reserved for Presidential consideration and receives Presidential assent, it prevails in that State over earlier inconsistent central laws.',
        articleRef: 'Article 254(2)',
        difficulty: 'Foundational'
      },
      {
        id: 'd10-q6',
        question: 'Even after a State law receives Presidential assent under Article 254(2), what power does Parliament retain under the Proviso to Article 254(2)?',
        options: ['Parliament can never touch that State law again', 'Parliament can at any time enact subsequent legislation adding to, amending, varying, or repealing the State law', 'Parliament must compensate the State treasury', 'Parliament can only intervene during wartime'],
        correctIndex: 1,
        explanation: 'The Proviso to Article 254(2) empowers Parliament to enact at any time any law with respect to the same matter, including a law adding to, amending, varying, or repealing the law so made by the State Legislature.',
        articleRef: 'Article 254(2) Proviso',
        difficulty: 'Intermediate'
      },
      {
        id: 'd10-q7',
        question: 'Under Article 248 of the Constitution of India, who possesses the exclusive power to make laws with respect to any residuary matter not enumerated in the Concurrent List or State List?',
        options: ['State Legislatures', 'Parliament of India', 'The President of India by decree', 'The Inter-State Council'],
        correctIndex: 1,
        explanation: 'Article 248 vests exclusive residuary legislative powers (including imposing taxes not mentioned in List II or III) in the Parliament of India (corresponding to Entry 97 List I).',
        articleRef: 'Article 248',
        difficulty: 'Foundational'
      },
      {
        id: 'd10-q8',
        question: 'Under Article 249, Parliament can legislate on a matter in the State List (List II) in the national interest, provided which condition is met?',
        options: ['The President issues a proclamation of war', 'The Rajya Sabha (Council of States) passes a resolution supported by not less than two-thirds of members present and voting', 'All State Governors submit a joint petition', 'The Supreme Court certifies the Bill as urgent'],
        correctIndex: 1,
        explanation: 'Article 249(1) authorizes Parliament to legislate on State List matters if Rajya Sabha declares by a resolution supported by not less than two-thirds of the members present and voting that it is necessary in the national interest.',
        articleRef: 'Article 249',
        difficulty: 'Intermediate'
      },
      {
        id: 'd10-q9',
        question: 'In Kolkata Municipal Corporation v. Bimal Kumar Shah (2024), what did the Supreme Court hold regarding the Right to Property under Article 300A?',
        options: ['Article 300A is a dead letter with no judicial protection', 'Article 300A is a vital human right and constitutional right; the Court recognized 7 sub-rights protecting citizens against arbitrary compulsory state acquisition', 'State can confiscate private property without compensation or notice', 'Article 300A is enforceable only by foreign investors'],
        correctIndex: 1,
        explanation: 'The Supreme Court in May 2024 held that Article 300A is a human right and laid down 7 sub-rights: right to notice, right to be heard, right to reasoned decision, duty to acquire only for public purpose, fair compensation, efficient completion, and physical rehabilitation.',
        articleRef: 'Article 300A',
        difficulty: 'Foundational'
      },
      {
        id: 'd10-q10',
        question: 'In Property Owners Association v. State of Maharashtra (2024 9-Judge Bench), the Supreme Court overruled earlier views of Justice Krishna Iyer regarding Article 39(b). What was the core ruling?',
        options: ['All private property belongs to the State', 'Not all privately owned resources qualify as "material resources of the community" under Article 39(b) for state redistribution; each asset must be examined for public utility, scarcity, and community impact', 'Private companies cannot own real estate', 'Article 39(b) was repealed by the 44th Amendment'],
        correctIndex: 1,
        explanation: 'The 9-Judge Bench (7:2) held that private property cannot be mechanically treated as "material resources of the community" under Article 39(b); whether a private asset qualifies depends on its nature, community impact, and scarcity.',
        articleRef: 'Article 39(b) & Article 300A',
        difficulty: 'Case Law / Advanced'
      },
      {
        id: 'd10-q11',
        question: 'Under Article 265 of the Constitution, what is the fundamental constitutional rule regarding the imposition and collection of taxes?',
        options: ['Taxes can be levied by verbal orders of the Finance Minister', '"No tax shall be levied or collected except by authority of law"', 'Taxes can be collected retrospectively without legislation', 'Municipalities can levy income tax on residents'],
        correctIndex: 1,
        explanation: 'Article 265 contains a sacred fiscal command: "No tax shall be levied or collected except by authority of law", meaning an executive order cannot impose a tax without an express Act of the legislature.',
        articleRef: 'Article 265',
        difficulty: 'Foundational'
      },
      {
        id: 'd10-q12',
        question: 'Article 279A, inserted by the 101st Constitutional Amendment Act, 2016, constituted which body to make recommendations on Goods and Services Tax (GST)?',
        options: ['The Planning Commission', 'The GST Council', 'The Central Board of Direct Taxes', 'The Monetary Policy Committee'],
        correctIndex: 1,
        explanation: 'The 101st Amendment Act, 2016 inserted Article 279A, establishing the Goods and Services Tax Council headed by the Union Finance Minister and comprising State Finance Ministers.',
        articleRef: 'Article 279A',
        difficulty: 'Foundational'
      },
      {
        id: 'd10-q13',
        question: 'In Union of India v. Mohit Minerals Pvt. Ltd. (2022 3-Judge Bench), what did the Supreme Court hold regarding the recommendations of the GST Council under Article 279A?',
        options: ['GST Council recommendations are executive commands absolutely binding on Parliament and State Legislatures', 'GST Council recommendations have persuasive value; Parliament and State Legislatures possess simultaneous co-equal powers to legislate on GST under Article 246A', 'State Legislatures cannot discuss GST', 'GST Council decisions are immune from judicial review'],
        correctIndex: 1,
        explanation: 'The Supreme Court affirmed cooperative federalism, ruling that recommendations of the GST Council are not binding edicts; Parliament and State Legislatures possess simultaneous legislative competence under Article 246A.',
        articleRef: 'Article 246A & Article 279A',
        difficulty: 'Intermediate'
      },
      {
        id: 'd10-q14',
        question: 'Under Article 280, the Finance Commission is constituted by the President of India at the expiration of every:',
        options: ['Year', '3 years', '5 years (or earlier as the President considers necessary)', '10 years'],
        correctIndex: 2,
        explanation: 'Article 280(1) mandates that the President shall, within two years from the commencement of the Constitution and thereafter at the expiration of every fifth year or at such earlier time as he considers necessary, constitute a Finance Commission.',
        articleRef: 'Article 280',
        difficulty: 'Foundational'
      },
      {
        id: 'd10-q15',
        question: 'Under Article 250, Parliament has the power to legislate on any matter in the State List (List II) while:',
        options: ['A proclamation of National Emergency (Article 352) is in operation', 'The President is traveling abroad', 'The Supreme Court is in summer vacation', 'A general census is being conducted'],
        correctIndex: 0,
        explanation: 'Article 250 empowers Parliament to make laws for the whole or any part of India with respect to any matter in the State List while a Proclamation of Emergency is in operation.',
        articleRef: 'Article 250',
        difficulty: 'Foundational'
      },
      {
        id: 'd10-q16',
        question: 'Under Article 252, if the Legislatures of two or more States pass resolutions requesting Parliament to enact a law on a State List subject, what is the effect?',
        options: ['Parliament can enact such an Act, which applies to those States and any other State that subsequently adopts it', 'The State Assemblies are dissolved', 'The subject matter is permanently transferred to List I', 'The Act requires confirmation by the United Nations'],
        correctIndex: 0,
        explanation: 'Article 252 allows Parliament to legislate on State subjects by consent of two or more States. The resulting Act applies to consenting States and can only be amended or repealed by Parliament, not by the State Legislatures.',
        articleRef: 'Article 252',
        difficulty: 'Intermediate'
      },
      {
        id: 'd10-q17',
        question: 'Under Article 253, Parliament has power to make any law for the whole or any part of the territory of India for implementing any treaty, agreement, or convention with any other country, notwithstanding anything in:',
        options: ['Part III of the Constitution', 'The distribution of legislative powers in Article 246 (Parliament can legislate even on State List subjects to implement treaties)', 'The United Nations Charter', 'The criminal procedure codes'],
        correctIndex: 1,
        explanation: 'Article 253 enables Parliament to legislate on subjects in the State List if necessary to implement international treaties, conventions, or agreements with foreign nations.',
        articleRef: 'Article 253',
        difficulty: 'Intermediate'
      },
      {
        id: 'd10-q18',
        question: 'In State of Bombay v. F.N. Balsara (1951), the Bombay Prohibition Act was challenged for encroaching upon import and export of liquor across borders (List I). The Supreme Court upheld the Act applying which doctrine?',
        options: ['Doctrine of Pith and Substance', 'Doctrine of Eclipse', 'Basic Structure Doctrine', 'Doctrine of Severability'],
        correctIndex: 0,
        explanation: 'The Supreme Court held that the pith and substance of the Act was intoxicating liquors (Entry 8 List II), and any incidental effect on import/export under List I did not invalidate the State law.',
        articleRef: 'Article 246',
        difficulty: 'Intermediate'
      },
      {
        id: 'd10-q19',
        question: 'In Zaverbhai Amaidas v. State of Bombay (1954), what was the test applied for determining Repugnancy under Article 254?',
        options: ['Whether the laws were printed in the same official gazette', 'Whether both laws occupy the same field on a Concurrent subject, and there is an direct conflict such that obeying one means disobeying the other', 'Whether both laws were signed by the same Governor', 'Whether the fine amount is identical'],
        correctIndex: 1,
        explanation: 'The Supreme Court held that repugnancy arises when two enactments operate in the same field in the Concurrent List and cannot stand together, or where Parliament evinces an intention to occupy the entire field.',
        articleRef: 'Article 254',
        difficulty: 'Intermediate'
      },
      {
        id: 'd10-q20',
        question: 'Under Article 266, all revenues received by the Government of India, all loans raised by that Government, and all moneys received in repayment of loans form one consolidated fund called:',
        options: ['The Contingency Fund of India', 'The Consolidated Fund of India', 'The Public Account of India', 'The Prime Minister\'s Relief Fund'],
        correctIndex: 1,
        explanation: 'Article 266(1) constitutes the Consolidated Fund of India, out of which no moneys can be appropriated except in accordance with law and for the purposes provided in the Constitution.',
        articleRef: 'Article 266(1)',
        difficulty: 'Foundational'
      }
    ]
  }
];
