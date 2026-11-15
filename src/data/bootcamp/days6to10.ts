import { DAY9_MCQS_200, DAY9_COMPREHENSION_CASE_STUDIES } from './day9';
import { DAY8_MCQS_200, DAY8_COMPREHENSION_CASE_STUDIES } from './day8';
import { DAY7_MCQS_200, DAY7_COMPREHENSION_CASE_STUDIES } from './day7';
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
    comprehensionCaseStudies: DAY7_COMPREHENSION_CASE_STUDIES,
    mcqs: DAY7_MCQS_200
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
    comprehensionCaseStudies: DAY8_COMPREHENSION_CASE_STUDIES,
    mcqs: DAY8_MCQS_200
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
    comprehensionCaseStudies: DAY9_COMPREHENSION_CASE_STUDIES,
    mcqs: DAY9_MCQS_200
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
