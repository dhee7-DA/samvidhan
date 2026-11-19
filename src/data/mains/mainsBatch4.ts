import type { MainsMasterQuestion } from '../../types/mainsQuestionTypes';

export const MAINS_BATCH_4: MainsMasterQuestion[] = [
  // =========================================================================
  // 5 MARKS / 100–120 WORDS (TIER 1: CRISP DOCTRINAL BENCHMARKS)
  // =========================================================================
  {
    id: 'mains-5m-nemo-judex-bias',
    title: 'Rule Against Bias (Nemo Judex In Causa Sua) & Real Likelihood Test',
    topicId: 'art-14-equality-arbitrariness',
    marksCategory: 5,
    examCategory: 'UP_PCSJ',
    examsAppeared: ['UP PCS-J 2013, 2018', 'DJS 2017', 'BJS 2020'],
    typicalMarks: 5,
    targetWordLimit: '100–120 Words | Time: ~4 Mins',
    targetWordMin: 90,
    targetWordMax: 130,
    estimatedPages: '0.5 Page (~12 lines)',
    targetTimeMinutes: 4,
    questionText: 'Explain the rule against bias (nemo judex in causa sua). What is the "real likelihood of bias" test established in A.K. Kraipak v. Union of India?',
    coreIssues: [
      'Pecuniary, personal, and subject-matter bias.',
      'A.K. Kraipak extension of natural justice to quasi-judicial and administrative inquiries.',
      'The reasonable apprehension test vs actual suspicion of bias.'
    ],
    examinerExpectation:
      'Candidate must explain the maxim nemo judex in causa sua. Emphasize that actual bias is NOT required; a reasonable suspicion in the mind of an ordinary person suffices. Cite A.K. Kraipak (1969) and Manak Lal (1957).',
    essentialCitations: [
      'Manak Lal v. Prem Chand (AIR 1957 SC 425)',
      'A.K. Kraipak v. Union of India ((1969) 2 SCC 262)',
      'Ranjan Dwivedi v. CBI ((2012) 8 SCC 495)'
    ],
    hoverIntel: {
      topicName: 'Rule Against Bias & Real Likelihood Test',
      topicPillar: 'Part III: Article 14 & Principles of Natural Justice',
      examImportance: '⭐⭐⭐⭐ High Priority Conceptual',
      examFrequency: 'Direct recurring short note in UP PCS-J, DJS, and BJS',
      weightagePattern: '5 Marks • 100–120 Words (0.5 Page)',
      targetTimeMinutes: 4,
      examinerTrapWarning:
        'Trap Alert: Do not spend time proving "actual bias". The Supreme Court has repeatedly held that the test is NOT whether bias actually influenced the decision, but whether a reasonable person would suspect bias ("Justice must not only be done, but manifestly seen to be done").',
      recentTrendAlert: 'Frequently examined in context of administrative selection boards and departmental enquiry officers.',
      coreArticles: ['Article 14', 'Article 21'],
      benchmarkCases: ['Manak Lal (1957)', 'A.K. Kraipak (1969)']
    },
    answerBlueprint: {
      step1Intro: 'Define Nemo Judex In Causa Sua: No person should be a judge in their own cause, which guarantees an impartial adjudicator.',
      step2DoctrinalCore: 'Categories of Bias: Pecuniary (any financial stake, however small, disqualifies ipso facto), personal, and subject-matter.',
      step3PrecedentEvolution: 'A.K. Kraipak v. Union of India (1969): An acting Chief Conservator was a member of the UPSC selection committee selecting candidates for Indian Forest Service while being a candidate himself. Held: Natural justice applies to administrative inquiries; conflict of interest vitiates the entire list.',
      step4Conclusion: 'State the "Real Likelihood Test": The court inquires whether a reasonable man with knowledge of the facts would apprehend bias.'
    },
    fullModelAnswer: `The maxim "Nemo judex in causa sua" (no one should be a judge in their own cause) is the first pillar of Natural Justice implicit within Article 14.

1. Three Forms of Bias:
- Pecuniary Bias: Any financial interest, however trivial, completely disqualifies the adjudicator (Dimes v. Grand Junction Canal).
- Personal Bias: Arising from friendship, kinship, or professional rivalry.
- Subject-Matter/Official Bias: Pre-determined policy bias.

2. A.K. Kraipak v. Union of India (1969):
The Constitution Bench erased the artificial divide between administrative and quasi-judicial functions. An acting Chief Conservator of Forests participated in a Selection Board for the All-India Forest Service while being a competitor himself. Even though he recused himself when his own name was evaluated, the Supreme Court invalidated the selections:
"The test is not whether he was actually biased, but whether there is a real likelihood of bias—a reasonable apprehension in the mind of an ordinary prudent observer."

Conclusion: Actual prejudice need not be proved; justice must manifestly be seen to be done.`,
    scoringRubric: [
      { criterion: 'Statement and explanation of Nemo Judex In Causa Sua', marks: 1 },
      { criterion: 'Classification of Pecuniary vs Personal vs Official bias', marks: 1 },
      { criterion: 'Facts, ratio, and benchmark holding in A.K. Kraipak (1969)', marks: 2 },
      { criterion: 'Real likelihood vs actual bias distinction', marks: 1 }
    ]
  },
  {
    id: 'mains-5m-right-to-travel-abroad',
    title: 'Right to Travel Abroad & Passport Impoundment under Article 21',
    topicId: 'art-21-right-to-life-liberty',
    marksCategory: 5,
    examCategory: 'DJS',
    examsAppeared: ['DJS 2015, 2019', 'UP PCS-J 2016', 'RJS 2021'],
    typicalMarks: 5,
    targetWordLimit: '100–120 Words | Time: ~4 Mins',
    targetWordMin: 90,
    targetWordMax: 130,
    estimatedPages: '0.5 Page (~12 lines)',
    targetTimeMinutes: 4,
    questionText: 'Is the right to travel abroad a Fundamental Right under the Constitution of India? Discuss the grounds on which a passport can be impounded in light of Maneka Gandhi v. Union of India.',
    coreIssues: [
      'Right to travel abroad as an integral facet of "personal liberty" under Article 21.',
      'Contrast between Article 19(1)(d) (inter-state travel within India) and Article 21 (overseas travel).',
      'Section 10(3)(c) Passports Act, 1967 and the requirement of post-decisional hearing.'
    ],
    examinerExpectation:
      'Candidate must distinguish Satwant Singh Sawhney (1967) and Maneka Gandhi (1978). Emphasize that while movement inside India is Art 19(1)(d), overseas travel is Art 21. Impoundment requires fair procedure (audi alteram partem).',
    essentialCitations: [
      'Satwant Singh Sawhney v. D. Ramarathnam (AIR 1967 SC 1836)',
      'Maneka Gandhi v. Union of India ((1978) 1 SCC 248)',
      'Priya Parameswaran Pillai v. Union of India (2015 SCC OnLine Del 7987)'
    ],
    hoverIntel: {
      topicName: 'Right to Travel Abroad & Passport Impoundment',
      topicPillar: 'Part III: Fundamental Rights • Right to Personal Liberty (Article 21)',
      examImportance: '⭐⭐⭐⭐ High Yield Core Rule',
      examFrequency: 'Frequently tested in DJS and High Court Judicial Mains',
      weightagePattern: '5 Marks • 100–120 Words (0.5 Page)',
      targetTimeMinutes: 4,
      examinerTrapWarning:
        'Trap Alert: Candidates mistakenly cite Article 19(1)(d) for overseas travel! Article 19(1)(d) protects travel "throughout the territory of India". The right to travel abroad is exclusively protected under Article 21!',
      recentTrendAlert: 'Tested alongside Look Out Circulars (LOCs) issued by CBI/ED restricting foreign travel.',
      coreArticles: ['Article 19(1)(d)', 'Article 21'],
      benchmarkCases: ['Satwant Singh Sawhney (1967)', 'Maneka Gandhi (1978)']
    },
    answerBlueprint: {
      step1Intro: 'Clarify Constitutional Text: Art 19(1)(d) applies only within India; travel abroad is anchored in "personal liberty" under Art 21.',
      step2DoctrinalCore: 'Satwant Singh Sawhney (1967): Refusal to issue a passport without law violates Article 21, prompting enactment of the Passports Act, 1967.',
      step3PrecedentEvolution: 'Maneka Gandhi (1978): Impounding passport under Section 10(3)(c) "in the interests of general public" without assigning reasons violates Audi Alteram Partem and Article 21.',
      step4Conclusion: 'Remedy of Post-Decisional Hearing: Where prior notice defeats impoundment, an immediate post-decisional hearing must be granted.'
    },
    fullModelAnswer: `1. Constitutional Anchor:
Article 19(1)(d) secures the right to move freely "throughout the territory of India". The right to go abroad is not covered by Article 19(1)(d) but is an integral facet of "personal liberty" under Article 21 (Satwant Singh Sawhney v. D. Ramarathnam, 1967).

2. Maneka Gandhi v. Union of India (1978):
The petitioner's passport was impounded by the Central Government under Section 10(3)(c) of the Passports Act, 1967 "in public interest" without furnishing reasons or prior notice.
- A 7-Judge Constitution Bench held that any law depriving personal liberty must prescribe a procedure that is just, fair, and reasonable, not arbitrary or oppressive.
- Natural justice (Audi alteram partem) is an essential component of Article 21. Even if pre-decisional hearing is excluded to avoid flight risk, an immediate post-decisional hearing is mandatory.

Conclusion: Overseas travel cannot be curtailed arbitrarily. Impoundment must be backed by valid statutory grounds and a fair hearing.`,
    scoringRubric: [
      { criterion: 'Distinction between Article 19(1)(d) and Article 21 for travel', marks: 1.5 },
      { criterion: 'Satwant Singh Sawhney & Passports Act, 1967 foundation', marks: 1 },
      { criterion: 'Maneka Gandhi ratio on arbitrary impoundment & just procedure', marks: 1.5 },
      { criterion: 'Post-decisional hearing requirement', marks: 1 }
    ]
  },
  {
    id: 'mains-5m-double-jeopardy-art-20-2',
    title: 'Double Jeopardy under Article 20(2) vs Issue Estoppel & Departmental Actions',
    topicId: 'art-20-protection-offences',
    marksCategory: 5,
    examCategory: 'PROSECUTION',
    examsAppeared: ['UP APP 2015, 2020', 'CBI Public Prosecutor 2018', 'DJS 2019'],
    typicalMarks: 5,
    targetWordLimit: '100–120 Words | Time: ~4 Mins',
    targetWordMin: 90,
    targetWordMax: 130,
    estimatedPages: '0.5 Page (~12 lines)',
    targetTimeMinutes: 4,
    questionText: 'Discuss the scope of protection against Double Jeopardy under Article 20(2) of the Constitution. Does departmental inquiry bar subsequent criminal prosecution for the same misconduct?',
    coreIssues: [
      'Ingredients of Article 20(2): Prosecution AND punishment before a court or judicial tribunal.',
      'Comparison with Section 300 CrPC / Section 337 BNSS (Autrefois convict and autrefois acquit).',
      'Departmental/administrative penalties vs criminal prosecution.'
    ],
    examinerExpectation:
      'Candidate must highlight that Art 20(2) requires BOTH prosecution AND punishment (autrefois convict only). Autrefois acquit is protected under Section 300 CrPC / 337 BNSS, not Article 20(2). Cite Maqbool Hussain (1953) and S.A. Venkataraman (1954).',
    essentialCitations: [
      'Maqbool Hussain v. State of Bombay (AIR 1953 SC 325)',
      'S.A. Venkataraman v. Union of India (AIR 1954 SC 375)',
      'State of Tamil Nadu v. Thiru K.V. Perumal ((1996) 5 SCC 474)'
    ],
    hoverIntel: {
      topicName: 'Double Jeopardy: Article 20(2) vs Section 300 CrPC',
      topicPillar: 'Part III: Protection in Respect of Conviction for Offences (Article 20)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Prosecution Favorite)',
      examFrequency: 'Every alternate year in APP/APO and Judicial Services Mains',
      weightagePattern: '5 Marks • 100–120 Words (0.5 Page)',
      targetTimeMinutes: 4,
      examinerTrapWarning:
        'Trap Alert: Article 20(2) does NOT protect against prior acquittal! The phrase is "prosecuted and punished". Section 300 CrPC protects against prior acquittal (autrefois acquit). Memorize this difference!',
      recentTrendAlert: 'Tested when public servants face parallel departmental dismissal and CBI chargesheets.',
      coreArticles: ['Article 20(2)', 'Section 300 CrPC / Sec 337 BNSS'],
      benchmarkCases: ['Maqbool Hussain (1953)', 'S.A. Venkataraman (1954)']
    },
    answerBlueprint: {
      step1Intro: 'Define Article 20(2): "No person shall be prosecuted and punished for the same offence more than once" (incorporates maxim Nemo debet bis vexari pro una et eadem causa).',
      step2DoctrinalCore: 'Two Mandatory Conditions: (1) Prosecution before a Court of Law or judicial tribunal, and (2) An order of punishment inflicted.',
      step3PrecedentEvolution: 'Maqbool Hussain (1953) & S.A. Venkataraman (1954): Confiscation of gold by Customs authorities or dismissal under Public Servants (Inquiries) Act is administrative, not a criminal conviction. A subsequent trial under IPC/FERA is NOT barred.',
      step4Conclusion: 'Contrast with CrPC: Art 20(2) embodies only "autrefois convict"; Section 300 CrPC / Sec 337 BNSS is wider and protects "autrefois acquit" as well.'
    },
    fullModelAnswer: `Article 20(2) codifies the common law doctrine of double jeopardy: "No person shall be prosecuted and punished for the same offence more than once."

1. Essential Ingredients:
- The accused must have been prosecuted before a Court of Law or judicial tribunal.
- The proceeding must have culminated in a punishment.
- The second proceeding must be for the identical "offence".

2. Departmental Action is Not Prosecution:
In Maqbool Hussain v. State of Bombay (1953) and S.A. Venkataraman v. Union of India (1954), the Supreme Court held that administrative tribunals or departmental inquiries do not constitute a "Court of Law".
- Confiscation under the Customs Act or dismissal from civil service is an administrative penalty, not a criminal trial.
- Hence, criminal prosecution under IPC/Prevention of Corruption Act following departmental dismissal does NOT violate Article 20(2).

Crucial Distinction: Article 20(2) applies only to prior conviction (autrefois convict). Section 300 CrPC (Sec 337 BNSS) is broader, barring retrial upon both conviction and acquittal (autrefois acquit).`,
    scoringRubric: [
      { criterion: 'Ingredients of Article 20(2) (Prosecution AND Punishment)', marks: 1.5 },
      { criterion: 'Maqbool Hussain & Venkataraman departmental inquiry ratio', marks: 1.5 },
      { criterion: 'Art 20(2) (conviction only) vs Sec 300 CrPC / BNSS (acquittal & conviction)', marks: 1.5 },
      { criterion: 'Doctrinal clarity and concise legal phrasing', marks: 0.5 }
    ]
  },
  {
    id: 'mains-5m-doctrine-of-eclipse',
    title: 'Doctrine of Eclipse: Pre-Constitution vs Post-Constitution Laws',
    topicId: 'art-13-judicial-review-doctrines',
    marksCategory: 5,
    examCategory: 'UP_PCSJ',
    examsAppeared: ['UP PCS-J 2012, 2016', 'BJS 2018', 'MP Judiciary 2019'],
    typicalMarks: 5,
    targetWordLimit: '100–120 Words | Time: ~4 Mins',
    targetWordMin: 90,
    targetWordMax: 130,
    estimatedPages: '0.5 Page (~12 lines)',
    targetTimeMinutes: 4,
    questionText: 'Explain the Doctrine of Eclipse under Article 13 of the Constitution. Does the doctrine apply to post-constitutional laws? Refer to Bhikaji and Deep Chand.',
    coreIssues: [
      'Article 13(1) and pre-constitutional laws (shadowed/dormant, not void ab initio).',
      'Article 13(2) and post-constitutional laws (born dead/stillborn).',
      'Bhikaji Narain Dhakras vs Deep Chand and Mahendra Lal Jain.'
    ],
    examinerExpectation:
      'Candidate must explain that pre-constitutional laws inconsistent with Part III are overshadowed by fundamental rights (moribund/dormant). When constitutional obstacle is removed, the law becomes active again without re-enactment (Bhikaji). For post-constitutional laws, Art 13(2) renders them still-born (Deep Chand).',
    essentialCitations: [
      'Bhikaji Narain Dhakras v. State of M.P. (AIR 1955 SC 781)',
      'Deep Chand v. State of U.P. (AIR 1959 SC 648)',
      'Mahendra Lal Jaini v. State of U.P. (AIR 1963 SC 1019)'
    ],
    hoverIntel: {
      topicName: 'Doctrine of Eclipse: Pre vs Post-Constitution Laws',
      topicPillar: 'Part III: Article 13 & Doctrinal Scrutiny',
      examImportance: '⭐⭐⭐⭐ Standard High Yield Short Note',
      examFrequency: 'Direct question in UP PCS-J, MP Judiciary, and Bihar Judiciary',
      weightagePattern: '5 Marks • 100–120 Words (0.5 Page)',
      targetTimeMinutes: 4,
      examinerTrapWarning:
        'Trap Alert: Does Eclipse apply to post-constitutional laws against non-citizens? Supreme Court in Deep Chand and Mahendra Lal settled that a post-constitutional law contravening Part III is a still-born law (void ab initio); it cannot be revived by eclipse!',
      recentTrendAlert: 'Frequently paired with Doctrine of Severability in Mains Paper I.',
      coreArticles: ['Article 13(1)', 'Article 13(2)'],
      benchmarkCases: ['Bhikaji Narain Dhakras (1955)', 'Deep Chand (1959)']
    },
    answerBlueprint: {
      step1Intro: 'Concept: An existing pre-constitutional law inconsistent with Fundamental Rights is not dead, but remains dormant/shadowed under an eclipse.',
      step2DoctrinalCore: 'Bhikaji Narain Dhakras (1955): CP Transport Act 1947 monopolized motor transport, violating Art 19(1)(g). When Art 19(6) was amended by the 1st Amendment 1951, the eclipse was lifted and the law became enforceable without fresh legislation.',
      step3PrecedentEvolution: 'Application to Post-Constitution Laws: Art 13(2) bars the State from enacting laws abridging rights. Such a law is still-born (void ab initio).',
      step4Conclusion: 'Deep Chand (1959) & Mahendra Lal Jain (1963): Settled that the Doctrine of Eclipse applies only to pre-constitutional laws under Article 13(1), not post-constitutional laws under Article 13(2).'
    },
    fullModelAnswer: `1. Doctrinal Definition:
The Doctrine of Eclipse states that a pre-constitutional law inconsistent with Fundamental Rights is not dead or wiped out from the statute book; it is merely overshadowed and remains in a dormant/moribund state (eclipsed).

2. Bhikaji Narain Dhakras v. State of M.P. (1955):
The CP & Berar Motor Vehicles Amendment Act, 1947 enabled the State to create a transport monopoly, violating Article 19(1)(g). After the Constitution (1st Amendment) Act, 1951 amended Article 19(6) permitting State monopolies:
- The Supreme Court held that the constitutional impediment was removed.
- The shadow fell away, and the Act became operational immediately without fresh enactment.

3. Post-Constitutional Laws (Article 13(2)):
Under Article 13(2), the State lacks legislative competence to make laws taking away Part III rights.
- In Deep Chand v. State of U.P. (1959) and Mahendra Lal Jaini (1963), the Supreme Court ruled that post-constitutional laws violative of Part III are "still-born" (void ab initio) and cannot be revived by the Doctrine of Eclipse.`,
    scoringRubric: [
      { criterion: 'Explanation of Eclipse metaphor and Article 13(1) dormancy', marks: 1.5 },
      { criterion: 'Bhikaji facts and removal of constitutional shadow by amendment', marks: 1.5 },
      { criterion: 'Inapplicability to post-constitutional laws (Deep Chand / Mahendra Lal)', marks: 1.5 },
      { criterion: 'Legal terminology and structural conciseness', marks: 0.5 }
    ]
  },
  {
    id: 'mains-5m-separation-of-powers',
    title: 'Separation of Powers in the Indian Constitution: Rigid or Functional?',
    topicId: 'basic-structure-doctrine',
    marksCategory: 5,
    examCategory: 'UPSC_LAW',
    examsAppeared: ['UPSC Law Optional 2014, 2019', 'DJS 2016', 'UP PCS-J 2018'],
    typicalMarks: 5,
    targetWordLimit: '100–120 Words | Time: ~4 Mins',
    targetWordMin: 90,
    targetWordMax: 130,
    estimatedPages: '0.5 Page (~12 lines)',
    targetTimeMinutes: 4,
    questionText: 'Does the Indian Constitution adopt a rigid Separation of Powers like the US Constitution? Discuss with reference to Ram Jawaya Kapur and Indira Nehru Gandhi.',
    coreIssues: [
      'Montesquieu doctrine of separation of powers vs Indian functional differentiation.',
      'Parliamentary executive (Ministers drawn from Legislature) vs presidential isolation.',
      'Separation of powers as part of the Basic Structure (Indira Gandhi).'
    ],
    examinerExpectation:
      'Candidate must state clearly: The Indian Constitution does NOT adopt a rigid separation of powers (unlike USA). It adopts a system of functional differentiation with checks and balances. Cite Ram Jawaya Kapur (1955) and Indira Nehru Gandhi (1975).',
    essentialCitations: [
      'Ram Jawaya Kapur v. State of Punjab (AIR 1955 SC 549)',
      'Indira Nehru Gandhi v. Raj Narain (AIR 1975 SC 2299)',
      'Asif Hameed v. State of J&K (AIR 1989 SC 1899)'
    ],
    hoverIntel: {
      topicName: 'Separation of Powers: Functional vs Rigid',
      topicPillar: 'Constitutional Architecture & Basic Structure',
      examImportance: '⭐⭐⭐⭐ Standard Constitutional Essay Anchor',
      examFrequency: 'Frequently tested in UPSC Law and Judicial Services Paper I',
      weightagePattern: '5 Marks • 100–120 Words (0.5 Page)',
      targetTimeMinutes: 4,
      examinerTrapWarning:
        'Trap Alert: Do not state that separation of powers does not exist in India! Separation of powers DOES exist and is part of the Basic Structure (Indira Gandhi 1975), but it is "functional separation with checks and balances", not structural water-tight compartments!',
      recentTrendAlert: 'Frequently raised in debates over judicial overreach vs executive accountability.',
      coreArticles: ['Article 50', 'Article 121', 'Article 122', 'Article 361'],
      benchmarkCases: ['Ram Jawaya Kapur (1955)', 'Indira Nehru Gandhi (1975)']
    },
    answerBlueprint: {
      step1Intro: 'Contrast with US Model: Unlike the United States, India does not enforce a rigid, water-tight separation of powers.',
      step2DoctrinalCore: 'Ram Jawaya Kapur (1955): Chief Justice Mukherjea observed that while the Constitution does not recognize absolute division of functions, it differentiates the three organs functionally.',
      step3PrecedentEvolution: 'Overlap Examples: Executive is part of the Legislature (Cabinet system); President exercises legislative ordinance powers (Art 123); Judiciary exercises rule-making powers (Art 145).',
      step4Conclusion: 'Basic Structure Status: In Indira Nehru Gandhi v. Raj Narain (1975), Beg J. and Chandrachud J. held that separation of powers is an essential feature of the Basic Structure, operating through mutual checks and balances.'
    },
    fullModelAnswer: `Unlike the United States Constitution, the Indian Constitution does not adopt a rigid, water-tight Separation of Powers.

1. Functional Differentiation (Ram Jawaya Kapur, 1955):
CJI B.K. Mukherjea held:
"The Indian Constitution has not indeed recognised the doctrine of separation of powers in its absolute rigidity, but the functions of the different parts or branches of the Government have been sufficiently differentiated."

2. Checks and Balances:
There is broad institutional interdependence:
- The Executive (Council of Ministers) is drawn from and collectively responsible to the Legislature (Article 75(3)).
- The Executive exercises legislative functions via Ordinances (Article 123/213).
- The Judiciary exercises Judicial Review over legislative and executive acts, while Parliament can impeach judges (Article 124(4)).

Conclusion: In Indira Nehru Gandhi v. Raj Narain (1975), the Supreme Court ruled that Separation of Powers is an inviolable Basic Feature of the Constitution, preserving institutional equilibrium through checks and balances rather than isolation.`,
    scoringRubric: [
      { criterion: 'Rejection of rigid Montesquieu model vs US model', marks: 1 },
      { criterion: 'Ram Jawaya Kapur (1955) functional differentiation holding', marks: 1.5 },
      { criterion: 'Illustration of institutional overlap & checks and balances', marks: 1.5 },
      { criterion: 'Indira Nehru Gandhi (1975) Basic Structure validation', marks: 1 }
    ]
  },
  {
    id: 'mains-5m-doctrine-of-severability',
    title: 'Doctrine of Severability & Article 13(1): The R.M.D.C. Rules',
    topicId: 'art-13-judicial-review-doctrines',
    marksCategory: 5,
    examCategory: 'BJS',
    examsAppeared: ['BJS 2014, 2019', 'UP PCS-J 2015', 'MP Judiciary 2021'],
    typicalMarks: 5,
    targetWordLimit: '100–120 Words | Time: ~4 Mins',
    targetWordMin: 90,
    targetWordMax: 130,
    estimatedPages: '0.5 Page (~12 lines)',
    targetTimeMinutes: 4,
    questionText: 'What is the Doctrine of Severability? Discuss the tests laid down by Venkatarama Ayyar J. in R.M.D.C. v. Union of India for separating valid provisions from invalid ones.',
    coreIssues: [
      'The phrase "to the extent of such inconsistency" in Article 13.',
      'Severability in application vs structural severability.',
      'The legislative intent test laid down in R.M.D.C. (1957).'
    ],
    examinerExpectation:
      'Candidate must explain Article 13: only the offending provision is void, not the entire statute, provided valid and invalid portions are separable. List Venkatarama Ayyar J.\'s test in R.M.D.C. (1957) and A.K. Gopalan (1950) Section 14.',
    essentialCitations: [
      'A.K. Gopalan v. State of Madras (AIR 1950 SC 27)',
      'R.M.D.C. v. Union of India (AIR 1957 SC 628)',
      'Motor General Traders v. State of A.P. ((1984) 1 SCC 222)'
    ],
    hoverIntel: {
      topicName: 'Doctrine of Severability & R.M.D.C. Rules',
      topicPillar: 'Part III: Article 13 & Legislative Invalidation',
      examImportance: '⭐⭐⭐⭐ Standard Judicial Services Short Note',
      examFrequency: 'Direct question in Bihar Judiciary, UP PCS-J, and MP Judiciary',
      weightagePattern: '5 Marks • 100–120 Words (0.5 Page)',
      targetTimeMinutes: 4,
      examinerTrapWarning:
        'Trap Alert: If the valid and invalid parts are so inextricably intertwined that one cannot survive without the other, the WHOLE statute falls! State this exception clearly to score maximum points.',
      recentTrendAlert: 'Applied in striking down unconstitutional clauses of electoral laws and arbitration statutes.',
      coreArticles: ['Article 13(1)', 'Article 13(2)'],
      benchmarkCases: ['A.K. Gopalan (1950)', 'R.M.D.C. (1957)']
    },
    answerBlueprint: {
      step1Intro: 'Constitutional Basis: Derived from the phrase "to the extent of the contravention" under Article 13(1) and (2).',
      step2DoctrinalCore: 'A.K. Gopalan (1950): Section 14 of Preventive Detention Act barred disclosing grounds to court. SC struck down Section 14 while preserving the rest of the Act.',
      step3PrecedentEvolution: 'R.M.D.C. v. Union of India (1957): Venkatarama Ayyar J. formulated the definitive 3-step test: (1) Intention of the legislature is paramount, (2) If valid and invalid parts are distinct and separable, the valid survives, (3) If they form an inextricably connected single scheme, the whole Act falls.',
      step4Conclusion: 'Conclusion: Severability preserves the democratic will of the legislature while amputating unconstitutional portions.'
    },
    fullModelAnswer: `The Doctrine of Severability is anchored in the words "to the extent of such inconsistency / contravention" under Article 13(1) & (2). The entire statute is not invalidated if the unconstitutional part can be amputated without destroying the legislative scheme.

1. Early Application (A.K. Gopalan, 1950):
Section 14 of the Preventive Detention Act, 1950 (preventing disclosure of detention grounds before a court) was declared unconstitutional. The Court severed Section 14 and upheld the remainder of the Act.

2. R.M.D.C. v. Union of India (1957) Tests:
Venkatarama Ayyar J. laid down the benchmark criteria:
- Legislative Intent: Would the Legislature have enacted the valid part independently without the invalid part?
- Inextricable Union: If the valid and invalid provisions are so interwoven that they form an inseparable scheme, the entire statute must fall.
- Textual vs Substantive: Even if provisions are in the same section, severability applies if their subject matters are distinct.

Conclusion: Severability acts as a judicial scalpel, excising only diseased statutory provisions while saving valid democratic enactments.`,
    scoringRubric: [
      { criterion: 'Textual foundation under Article 13 ("to the extent of")', marks: 1 },
      { criterion: 'A.K. Gopalan (1950) Section 14 severance example', marks: 1 },
      { criterion: 'R.M.D.C. (1957) three-step test of legislative intention', marks: 2 },
      { criterion: 'Inextricable connection exception when whole Act falls', marks: 1 }
    ]
  },
  {
    id: 'mains-5m-curative-petition-art-142',
    title: 'Curative Petition Jurisprudence under Article 142: Rupa Ashok Hurra Rules',
    topicId: 'art-142-complete-justice-powers',
    marksCategory: 5,
    examCategory: 'DJS',
    examsAppeared: ['DJS 2018', 'UPSC Law Optional 2021', 'UP PCS-J 2022'],
    typicalMarks: 5,
    targetWordLimit: '100–120 Words | Time: ~4 Mins',
    targetWordMin: 90,
    targetWordMax: 130,
    estimatedPages: '0.5 Page (~12 lines)',
    targetTimeMinutes: 4,
    questionText: 'What is a "Curative Petition"? Under what circumstances can the Supreme Court entertain a curative petition after dismissal of a review petition? Refer to Rupa Ashok Hurra.',
    coreIssues: [
      'Finality of Supreme Court judgments under Article 137 vs inherent duty to prevent miscarriage of justice under Article 142.',
      'Exhaustion of Review Petition as a condition precedent.',
      'Strict procedural safeguards: senior counsel certification and circulation to senior-most judges.'
    ],
    examinerExpectation:
      'Candidate must cite Rupa Ashok Hurra v. Ashok Hurra (2002, 5-Judge Bench). Grounds: (1) Violation of Natural Justice (audi alteram partem), or (2) Apprehension of bias by the judge. Mention senior advocate certification requirement.',
    essentialCitations: [
      'Rupa Ashok Hurra v. Ashok Hurra ((2002) 4 SCC 388)',
      'Union of India v. Union Carbide Corp. (Bhopal Gas Curative, 2023)',
      'DMRC v. Delhi Airport Metro Express Pvt. Ltd. (2024 INSC 290)'
    ],
    hoverIntel: {
      topicName: 'Curative Petition under Article 142',
      topicPillar: 'Part V: The Union Judiciary • Inherent Remedial Jurisdiction',
      examImportance: '⭐⭐⭐⭐ High Yield Procedural Milestone',
      examFrequency: 'Frequently tested in DJS and UPSC Law Optional',
      weightagePattern: '5 Marks • 100–120 Words (0.5 Page)',
      targetTimeMinutes: 4,
      examinerTrapWarning:
        'Trap Alert: A curative petition CANNOT be filed directly! It is maintainable ONLY after a review petition under Article 137 has been dismissed, and must be certified by a Senior Advocate!',
      recentTrendAlert: 'Recently invoked in DMRC v. DAMEPL (2024) where SC set aside a ₹8000 Crore arbitral award to prevent gross miscarriage of justice.',
      coreArticles: ['Article 137', 'Article 142', 'Article 145'],
      benchmarkCases: ['Rupa Ashok Hurra (2002)', 'DMRC v. DAMEPL (2024)']
    },
    answerBlueprint: {
      step1Intro: 'Genesis: Born out of the constitutional tension between finality of litigation (res judicata) and the Supreme Court\'s duty to cure gross miscarriage of justice under Article 142.',
      step2DoctrinalCore: 'Rupa Ashok Hurra (2002, 5-Judge Bench): Inherent power to reconsider final judgments even after dismissal of review petition under Article 137.',
      step3PrecedentEvolution: 'Narrow Grounds: (1) Gross violation of natural justice (party not served/heard), or (2) Judge failed to disclose interest/bias.',
      step4Conclusion: 'Procedural Filter: Must be certified by a Senior Advocate, examined by the 3 senior-most judges plus the judges who passed the original order, heard in chambers first.'
    },
    fullModelAnswer: `A Curative Petition is a non-statutory remedy devised by the Supreme Court under Article 142 to prevent abuse of process and gross miscarriage of justice after a Review Petition under Article 137 has been dismissed.

1. Rupa Ashok Hurra v. Ashok Hurra (2002, 5-Judge Bench):
The Court reconciled finality of judgments with the duty to do complete justice:
Grounds for Entertaining Curative Petition:
- Violation of Natural Justice: The petitioner was not served with notice or denied an opportunity of being heard.
- Bias of Judge: The adjudicating judge failed to disclose a conflict of interest.

2. Mandatory Procedural Filters:
- Must state that grounds were taken in the Review Petition and dismissed by circulation.
- Must be certified by a Senior Advocate confirming fulfillment of Rupa Hurra conditions.
- Circulated to a Bench of three senior-most judges plus judges who passed the judgment (if available).

Recent Application: In DMRC v. DAMEPL (2024), the Supreme Court exercised curative jurisdiction to set aside an ₹8,000-crore arbitral award, reiterating that curative jurisdiction cures manifest judicial errors resulting in grave public injustice.`,
    scoringRubric: [
      { criterion: 'Definition and reconciliation of Art 137 finality with Art 142', marks: 1.5 },
      { criterion: 'Rupa Ashok Hurra (2002) 2 substantive grounds (Natural justice / Bias)', marks: 1.5 },
      { criterion: 'Procedural filters (Senior Counsel certificate / Chamber circulation)', marks: 1.5 },
      { criterion: 'Recent 2024 DMRC precedent', marks: 0.5 }
    ]
  },
  {
    id: 'mains-5m-right-to-property-300a',
    title: 'Article 300A: Right to Property as a Human Right & Due Process of Law',
    topicId: 'art-300a-property-human-right',
    marksCategory: 5,
    examCategory: 'UP_PCSJ',
    examsAppeared: ['UP PCS-J 2016, 2022', 'DJS 2018', 'BJS 2021'],
    typicalMarks: 5,
    targetWordLimit: '100–120 Words | Time: ~4 Mins',
    targetWordMin: 90,
    targetWordMax: 130,
    estimatedPages: '0.5 Page (~12 lines)',
    targetTimeMinutes: 4,
    questionText: 'Discuss the nature and scope of the Right to Property under Article 300A after the 44th Constitutional Amendment. Is it a mere statutory right or a constitutional human right? Refer to Vidya Devi.',
    coreIssues: [
      'Shift from Part III Fundamental Right (Art 19(1)(f) & 31) to Part XII Constitutional Right (Art 300A).',
      'The expression "save by authority of law" requiring just and fair statutory authorization.',
      'Recognition as a Human Right in Vidya Devi (2020) and Sukh Dutt Ratra (2022).'
    ],
    examinerExpectation:
      'Candidate must explain 44th Amendment Act, 1978. While no longer a Fundamental Right, Art 300A is a constitutional right and a recognized Human Right. The State cannot dispossess a citizen without lawful procedure and compensation. Cite Vidya Devi (2020) and K.T. Plantation (2011).',
    essentialCitations: [
      'K.T. Plantation Pvt. Ltd. v. State of Karnataka ((2011) 9 SCC 1)',
      'Vidya Devi v. State of H.P. ((2020) 2 SCC 569)',
      'Kolkata Municipal Corp. v. Bimal Kumar Shah (2024 INSC 420)'
    ],
    hoverIntel: {
      topicName: 'Article 300A: Property as a Human Right',
      topicPillar: 'Part XII: Right to Property (Article 300A)',
      examImportance: '⭐⭐⭐⭐ High Yield Constitutional Evolution',
      examFrequency: 'Direct question in UP PCS-J, DJS, and BJS Mains',
      weightagePattern: '5 Marks • 100–120 Words (0.5 Page)',
      targetTimeMinutes: 4,
      examinerTrapWarning:
        'Trap Alert: Do not describe Article 300A as a "second-class right"! The Supreme Court has repeatedly held that Article 300A is an indispensable Human Right under international covenants, and the State cannot dispossess citizens by executive fiat or delay compensation.',
      recentTrendAlert: 'Extensively applied in 2024 judgments striking down illegal bulldozing and delayed land acquisition compensation.',
      coreArticles: ['Article 300A', 'Article 21'],
      benchmarkCases: ['K.T. Plantation (2011)', 'Vidya Devi (2020)', 'Bimal Kumar Shah (2024)']
    },
    answerBlueprint: {
      step1Intro: '44th Amendment Act, 1978: Deleted Article 19(1)(f) and Article 31, inserting Article 300A into Part XII: "No person shall be deprived of his property save by authority of law."',
      step2DoctrinalCore: 'K.T. Plantation (2011): "Authority of law" is not mere executive decree or arbitrary legislation; it must satisfy the requirements of public purpose and just compensation.',
      step3PrecedentEvolution: 'Vidya Devi v. State of H.P. (2020): An illiterate widow dispossessed without acquisition proceedings for 42 years. Held: Right to property is a human right under Article 300A; the State cannot claim adverse possession against its own citizens.',
      step4Conclusion: 'Bimal Kumar Shah (2024): SC formulated seven sub-rights under Art 300A including right to notice, hearing, reasoned order, and fair compensation.'
    },
    fullModelAnswer: `1. Constitutional Transformation:
The Constitution (44th Amendment) Act, 1978 deleted property from Part III (Articles 19(1)(f) and 31) and re-anchored it as Article 300A in Part XII: "No person shall be deprived of his property save by authority of law."

2. Elevation to Human Right (Vidya Devi, 2020):
In Vidya Devi v. State of H.P. (2020), the Supreme Court ruled that while property ceased to be a Fundamental Right, it remains a valuable Constitutional Right and an internationally recognized Human Right.
- The State cannot grab private land by executive decree or plead adverse possession against its citizens.
- Forcible dispossession without paying fair compensation violates the Rule of Law and Article 21.

3. Seven Sub-Rights (Bimal Kumar Shah, 2024):
In Kolkata Municipal Corp. (2024), the Supreme Court held that Article 300A mandates seven procedural safeguards:
(i) Right to notice, (ii) Right to be heard, (iii) Reasoned decision, (iv) Public purpose demonstration, (v) Fair compensation, (vi) Efficient process, and (vii) Physical possession in accordance with law.`,
    scoringRubric: [
      { criterion: '44th Amendment legislative history and Article 300A text', marks: 1 },
      { criterion: 'K.T. Plantation (2011) interpretation of "authority of law"', marks: 1 },
      { criterion: 'Vidya Devi (2020) human right declaration and adverse possession bar', marks: 1.5 },
      { criterion: 'Bimal Kumar Shah (2024) seven procedural rights under Art 300A', marks: 1.5 }
    ]
  },

  // =========================================================================
  // 10 MARKS / 200–250 WORDS (TIER 2: STANDARD MAINS CORE QUESTIONS)
  // =========================================================================
  {
    id: 'mains-10m-sedition-vombatkere',
    title: 'Sedition under Section 124A IPC / Section 152 BNS and Article 19(1)(a)',
    topicId: 'art-19-1-a-free-speech',
    marksCategory: 10,
    examCategory: 'PROSECUTION',
    examsAppeared: ['UPSC Law Optional 2021, 2023', 'DJS 2022', 'UP APP 2023'],
    typicalMarks: 10,
    targetWordLimit: '200–250 Words | Time: ~7 Mins',
    targetWordMin: 180,
    targetWordMax: 260,
    estimatedPages: '1.0 Page (~22 lines)',
    targetTimeMinutes: 7,
    questionText: 'Critically examine the constitutional validity of the offence of Sedition in light of Article 19(1)(a) and 19(2). Trace the judicial journey from Kedar Nath Singh to the interim order in S.G. Vombatkere, and assess Section 152 of Bharatiya Nyaya Sanhita (BNS).',
    coreIssues: [
      'Chilling effect on free speech and democratic dissent under Article 19(1)(a).',
      'The "incitement to violence or public disorder" test laid down in Kedar Nath Singh (1962).',
      'S.G. Vombatkere (2022) order staying registration of FIRs and investigations.',
      'Comparison with Section 152 Bharatiya Nyaya Sanhita (BNS), 2023 ("acts endangering sovereignty, unity, and integrity of India").'
    ],
    examinerExpectation:
      'Candidate must contrast Niharendu Dutt Majumdar (Federal Court) with Sadashiv Narayan (Privy Council). Explain how Kedar Nath (1962) saved Section 124A by reading it down to require incitement to violence. Discuss S.G. Vombatkere (2022) stay order and Section 152 BNS replacing sedition.',
    essentialCitations: [
      'Kedar Nath Singh v. State of Bihar (AIR 1962 SC 955)',
      'Balwant Singh v. State of Punjab ((1995) 3 SCC 214)',
      'S.G. Vombatkere v. Union of India ((2022) 7 SCC 633)'
    ],
    hoverIntel: {
      topicName: 'Sedition vs Free Speech: Kedar Nath to Section 152 BNS',
      topicPillar: 'Part III: Freedom of Speech and Expression (Article 19(1)(a) & 19(2))',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield Hot Topic',
      examFrequency: 'Repeatedly tested in UPSC Law, DJS, and State APP Exams',
      weightagePattern: '10 Marks • 200–250 Words (1.0 Page)',
      targetTimeMinutes: 7,
      examinerTrapWarning:
        'Trap Alert: Merely shouting slogans without violence or public disorder does NOT constitute sedition! Cite Balwant Singh (1995) (Khalistan slogans after Indira Gandhi assassination held not seditious) to demonstrate mastery.',
      recentTrendAlert: 'The Bharatiya Nyaya Sanhita, 2023 repealed Section 124A and introduced Section 152 targeting sovereignty threats without using the word "sedition".',
      coreArticles: ['Article 19(1)(a)', 'Article 19(2)'],
      benchmarkCases: ['Kedar Nath Singh (1962)', 'Balwant Singh (1995)', 'S.G. Vombatkere (2022)']
    },
    answerBlueprint: {
      step1Intro: 'Colonial Legacy vs Constitutional Democracy: Section 124A IPC was drafted by Macaulay to suppress Indian nationalism, penalizing disaffection against the British Crown.',
      step2DoctrinalCore: 'Kedar Nath Singh (1962, 5-Judge Bench): Saved the section by reading it down: Mere criticism of government policy or strong words are protected by Article 19(1)(a). It becomes an offence ONLY when words have a pernicious tendency to incite public disorder or armed insurrection.',
      step3PrecedentEvolution: 'Balwant Singh (1995) & Misuse: Raising casual slogans without provoking public disorder is not sedition. Rampant misuse led the Supreme Court in S.G. Vombatkere (2022) to keep Section 124A in abeyance, ordering governments not to register fresh FIRs.',
      step4Conclusion: 'Legislative Overhaul in BNS: Section 152 BNS omits the word "sedition" but criminalizes acts endangering sovereignty, unity, and integrity of India, requiring judicial adherence to the Kedar Nath incitement standard.'
    },
    fullModelAnswer: `I. COLONIAL ORIGIN VS DEMOCRATIC DISSENT:
Section 124A IPC was a colonial instrument devised to silence political dissent. The Privy Council in Emperor v. Sadashiv Narayan (1947) ruled that mere bad feelings towards the government constituted sedition, regardless of violence.

II. THE KEDAR NATH BALANCING TEST (1962):
A 5-Judge Constitution Bench in Kedar Nath Singh v. State of Bihar (1962) rescued Section 124A from unconstitutionality under Article 19(1)(a) by reading it down strictly:
- A citizen has a fundamental right to criticize, disapprove, and comment upon government actions so long as they do not incite violence.
- Section 124A applies ONLY when speech has the clear tendency or intention to generate "public disorder or incitement to violence".
In Balwant Singh v. State of Punjab (1995), casual slogan-shouting ("Khalistan Zindabad") after Prime Minister Indira Gandhi's assassination was held not to be sedition because it did not trigger violence or public disturbance.

III. THE ABEYANCE ORDER: S.G. VOMBATKERE (2022):
Noting widespread abuse and the colonial vintage of the law, a 3-Judge Bench led by CJI N.V. Ramana in S.G. Vombatkere v. Union of India (2022) directed that:
- Section 124A IPC be kept in abeyance.
- All pending trials, appeals, and proceedings be stayed.
- The Union and States refrain from filing any fresh FIRs under Section 124A.

IV. SECTION 152 BHARATIYA NYAYA SANHITA (BNS), 2023:
The BNS omitted the word "sedition" and enacted Section 152 ("Acts endangering sovereignty, unity, and integrity of India"). While dropping colonial phraseology, Section 152 must be interpreted through the prism of Kedar Nath: constitutional speech can never be criminalized unless it actively incites violence or insurrection.`,
    scoringRubric: [
      { criterion: 'Historical contrast: Sadashiv Narayan vs Kedar Nath reading down', marks: 2.5 },
      { criterion: 'Kedar Nath ratio (incitement to violence/public disorder requirement)', marks: 3 },
      { criterion: 'Balwant Singh (1995) and Vombatkere (2022) abeyance order', marks: 2.5 },
      { criterion: 'Analysis of Section 152 BNS and concluding synthesis', marks: 2 }
    ]
  },
  {
    id: 'mains-10m-sc-subclassification-davinder-singh',
    title: 'Sub-Classification within Scheduled Castes & Creamy Layer: State of Punjab v. Davinder Singh',
    topicId: 'art-15-16-reservations-equality',
    marksCategory: 10,
    examCategory: 'UP_PCSJ',
    examsAppeared: ['UP PCS-J 2024 Model', 'UPSC Law Optional 2024', 'BJS 2024'],
    typicalMarks: 10,
    targetWordLimit: '200–250 Words | Time: ~7 Mins',
    targetWordMin: 180,
    targetWordMax: 260,
    estimatedPages: '1.0 Page (~22 lines)',
    targetTimeMinutes: 7,
    questionText: 'Can the State sub-classify Scheduled Castes for the purpose of granting preferential reservation? Discuss the 7-Judge Constitution Bench judgment in State of Punjab v. Davinder Singh (2024) overruling E.V. Chinnaiah. Does the "creamy layer" principle apply to SCs/STs?',
    coreIssues: [
      'Homogeneity vs heterogeneity within the Presidential List under Article 341.',
      'Overruling of E.V. Chinnaiah v. State of A.P. (2005).',
      'Articles 14, 15(4), 16(4) as facets of substantive equality and proportional representation.',
      'Application of Creamy Layer exclusion to Scheduled Castes and Scheduled Tribes.'
    ],
    examinerExpectation:
      'Candidate must explain E.V. Chinnaiah (2005) (held SCs are a single homogeneous class, no sub-classification allowed). Detail how the 7-Judge Bench in Davinder Singh (2024) overruled it, holding SCs are not homogeneous. States can sub-classify based on empirical data, and creamy layer exclusion was endorsed by majority judges.',
    essentialCitations: [
      'E.V. Chinnaiah v. State of A.P. ((2005) 1 SCC 394)',
      'Jarnail Singh v. Lachhmi Narain Gupta ((2018) 10 SCC 396)',
      'State of Punjab v. Davinder Singh (2024 INSC 562, 7-Judge Bench)'
    ],
    hoverIntel: {
      topicName: 'Sub-Classification within SCs & Creamy Layer (Davinder Singh 2024)',
      topicPillar: 'Part III: Equality & Affirmative Action (Articles 14, 15, 16, 341)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra Landmark 2024 Ruling',
      examFrequency: 'Top anticipated question for upcoming 2024-2026 Mains Exams',
      weightagePattern: '10 Marks • 200–250 Words (1.0 Page)',
      targetTimeMinutes: 7,
      examinerTrapWarning:
        'Trap Alert: Sub-classification CANNOT result in 100% reservation for a sub-caste, nor can the State delete any caste from the Presidential List! The State can only allot preferential quotas within the existing quota based on empirical data.',
      recentTrendAlert: '7-Judge Bench delivered on August 1, 2024 (6:1 majority led by CJI D.Y. Chandrachud).',
      coreArticles: ['Article 14', 'Article 15(4)', 'Article 16(4)', 'Article 341'],
      benchmarkCases: ['E.V. Chinnaiah (2005)', 'Jarnail Singh (2018)', 'Davinder Singh (2024)']
    },
    answerBlueprint: {
      step1Intro: 'The Dilemma: E.V. Chinnaiah (2005) held that the Presidential List under Article 341 forms a single homogeneous class that States cannot subdivide without tinkering with Article 341.',
      step2DoctrinalCore: 'Davinder Singh (2024, 7-Judge Bench - 6:1): Overruled Chinnaiah. SCs are not a monolithic homogeneous entity; severe inter-se backwardness exists (e.g. Valmikis and Mazhabi Sikhs vs other groups). Substantive equality under Article 14 requires differential treatment for unequal groups.',
      step3PrecedentEvolution: 'Two Strict Constitutional Safeguards: (1) State must produce quantifiable empirical data proving inadequate representation, (2) State cannot allocate 100% of the quota to one sub-caste or exclude others entirely.',
      step4Conclusion: 'Creamy Layer Milestone: A concurring majority (4 out of 7 judges) held that the Creamy Layer principle must apply to SCs and STs to ensure reservation benefits reach the truly marginalized.'
    },
    fullModelAnswer: `I. THE CONFLICT: E.V. CHINNAIAH OVERRULED:
In E.V. Chinnaiah v. State of A.P. (2005), a 5-Judge Bench held that Scheduled Castes enumerated in the Presidential Notification under Article 341 form a single, indivisible "homogeneous class", and any State legislation sub-dividing them violates Article 341.

II. THE HISTORIC RULING: DAVINDER SINGH (2024):
In State of Punjab v. Davinder Singh (2024 INSC 562), a 7-Judge Constitution Bench (6:1 majority) overruled Chinnaiah:
1. Heterogeneity within SCs: The Presidential List under Article 341 is merely for the purpose of identification. Social reality reveals profound intra-caste hierarchy and varying degrees of historical disadvantage among different Dalit communities (e.g., Valmikis vs other SC groups).
2. Substantive Equality (Articles 14 & 16(4)): Equality requires treating unequals unequally. Denying sub-classification allows dominant sub-castes to corner the lion's share of affirmative action, defeating the egalitarian objective of reservations.

III. CONSTITUTIONAL LIMITATIONS ON STATE POWER:
- Empirical Data: Sub-classification cannot be guided by administrative whim or political appeasement; it must rest on verifiable empirical data of inadequate representation.
- No Total Exclusion: The State cannot appropriate 100% of the SC quota for one sub-group or exclude any caste from the Presidential pool.

IV. CREAMY LAYER EXCLUSION IN SCs/STs:
Four judges (Justices B.R. Gavai, Vikram Nath, Pankaj Mithal, and Satish Chandra Sharma) expressly held that the "Creamy Layer" principle must be extended to SCs and STs. Children of affluent SC/ST families who have overcome social stigmas cannot compete on equal terms with the impoverished brethren of their community.`,
    scoringRubric: [
      { criterion: 'E.V. Chinnaiah (2005) homogeneous class ratio', marks: 2 },
      { criterion: 'Davinder Singh (2024) majority reasoning on substantive equality', marks: 3 },
      { criterion: 'Safeguards: Empirical data and prohibition on 100% appropriation', marks: 2.5 },
      { criterion: 'Extension of Creamy Layer principle to SCs/STs', marks: 2.5 }
    ]
  },
  {
    id: 'mains-10m-mineral-rights-taxation-mada',
    title: 'State Legislative Powers on Mineral Rights & Royalties: MADA v. SAIL (2024)',
    topicId: 'art-246-seventh-schedule-federalism',
    marksCategory: 10,
    examCategory: 'UPSC_LAW',
    examsAppeared: ['UPSC Law Optional 2024 Model', 'DJS 2024', 'UP PCS-J 2024'],
    typicalMarks: 10,
    targetWordLimit: '200–250 Words | Time: ~7 Mins',
    targetWordMin: 180,
    targetWordMax: 260,
    estimatedPages: '1.0 Page (~22 lines)',
    targetTimeMinutes: 7,
    questionText: 'Is royalty on minerals a "tax"? Examine whether State Legislatures have the legislative competence to tax mineral-bearing lands under Entry 49 and Entry 50 of List II. Discuss the 9-Judge Constitution Bench ruling in Mineral Area Development Authority (MADA) v. SAIL (2024).',
    coreIssues: [
      'Overruling of India Cements v. State of Tamil Nadu (1990).',
      'Distinction between royalty (contractual consideration) and tax (compulsory extraction of public authority).',
      'Interaction between Entry 54 List I (MMDR Act, 1957) and Entry 49 & Entry 50 List II.',
      'Fiscal Federalism and financial autonomy of mineral-rich States.'
    ],
    examinerExpectation:
      'Candidate must explain India Cements (1990) typographical/legal error treating royalty as tax. Detail how the 9-Judge Bench in MADA (2024, 8:1) overruled it, declaring royalty is NOT a tax. States possess plenary power under List II Entry 50 to tax minerals and Entry 49 to tax mineral-bearing land.',
    essentialCitations: [
      'India Cements Ltd. v. State of Tamil Nadu ((1990) 1 SCC 12)',
      'State of W.B. v. Kesoram Industries Ltd. ((2004) 10 SCC 201)',
      'Mineral Area Development Authority (MADA) v. SAIL (2024 INSC 554, 9-Judge Bench)'
    ],
    hoverIntel: {
      topicName: 'Mineral Rights, Royalty & Fiscal Federalism (MADA 2024)',
      topicPillar: 'Part XI & Seventh Schedule: Legislative Competence & Fiscal Federalism',
      examImportance: '⭐⭐⭐⭐⭐ Historic 9-Judge Bench Landmark',
      examFrequency: 'Direct expected essay in UPSC Law Optional and Judicial Mains',
      weightagePattern: '10 Marks • 200–250 Words (1.0 Page)',
      targetTimeMinutes: 7,
      examinerTrapWarning:
        'Trap Alert: Do not state that Parliament has no power over minerals! Parliament controls regulatory development under List I Entry 54 through the MMDR Act. However, taxing power is separate from regulatory power; taxation on mineral lands belongs to the States under List II Entry 49 & 50!',
      recentTrendAlert: 'Decided on July 25, 2024 (8:1 majority led by CJI D.Y. Chandrachud; Justice B.V. Nagarathna dissented).',
      coreArticles: ['Article 246', 'List I Entry 54', 'List II Entry 49 & 50'],
      benchmarkCases: ['India Cements (1990)', 'Kesoram Industries (2004)', 'MADA v. SAIL (2024)']
    },
    answerBlueprint: {
      step1Intro: 'The 35-Year Controversy: India Cements (1990, 7-Judge Bench) mistakenly held that "royalty is a tax", crippling State powers to raise revenue from mining operations.',
      step2DoctrinalCore: 'Royalty vs Tax: CJI Chandrachud for the 8:1 majority in MADA (2024) held that royalty is a contractual consideration paid to the lessor/landowner for extracting minerals; tax is a compulsory exaction by public authority for public purposes. Royalty is NOT a tax.',
      step3PrecedentEvolution: 'Constitutional Competence: Under Entry 50 List II, States have the sovereign power to tax mineral rights. Under Entry 49 List II, States can tax lands and buildings, which includes mineral-bearing lands.',
      step4Conclusion: 'Fiscal Federalism Impact: Re-established the fiscal autonomy of mineral-rich States (Jharkhand, Odisha, Chhattisgarh), permitting retrospective recovery from April 1, 2005 onwards.'
    },
    fullModelAnswer: `I. THE CONSTITUTIONAL IMPASSE & INDIA CEMENTS:
In India Cements Ltd. v. State of Tamil Nadu (1990), a 7-Judge Bench held that "royalty is a tax". Consequently, it was assumed that Parliament's enactment of the Mines and Minerals (Development and Regulation) Act, 1957 under Entry 54 List I occupied the entire field, divesting States of the power to levy taxes on minerals.

II. THE HISTORIC OVERRULING: MADA v. SAIL (2024):
On July 25, 2024, a 9-Judge Constitution Bench (8:1 majority) in Mineral Area Development Authority (MADA) v. Steel Authority of India resolved the 35-year conflict:
1. Royalty is NOT a Tax:
- Royalty is a contractual/statutory return paid by a mining lessee to the mineral owner (private or State) for parting with minerals.
- Tax is an enforced contribution extracted by sovereign authority for public purposes. They are fundamentally distinct in concept and incidence.
2. Legislative Competence under Seventh Schedule:
- Entry 50 of List II explicitly grants State Legislatures power to tax "mineral rights", subject only to any regulatory limitation imposed by Parliament by law. The MMDR Act contains no explicit tax prohibition.
- Entry 49 of List II authorizes States to tax "lands and buildings", which encompasses mineral-bearing land as well as surface land.

III. IMPACT ON FISCAL FEDERALISM:
The Supreme Court restored vital fiscal decentralization. Mineral-rich States like Jharkhand, Odisha, and Chhattisgarh are constitutionally entitled to tap their natural resource base to fund social development, subject to non-discriminatory statutory frameworks.`,
    scoringRubric: [
      { criterion: 'India Cements (1990) error and constitutional conflict', marks: 2 },
      { criterion: 'Distinction between royalty and tax in MADA (2024)', marks: 3 },
      { criterion: 'Analysis of Entry 50 & Entry 49 List II vs Entry 54 List I', marks: 3 },
      { criterion: 'Significance for fiscal federalism & state resource mobilization', marks: 2 }
    ]
  },
  {
    id: 'mains-10m-living-wills-passive-euthanasia',
    title: 'Right to Die with Dignity & Living Wills: Advance Medical Directives Procedure',
    topicId: 'art-21-right-to-life-liberty',
    marksCategory: 10,
    examCategory: 'DJS',
    examsAppeared: ['DJS 2018, 2023', 'UPSC Law Optional 2019', 'UP PCS-J 2023'],
    typicalMarks: 10,
    targetWordLimit: '200–250 Words | Time: ~7 Mins',
    targetWordMin: 180,
    targetWordMax: 260,
    estimatedPages: '1.0 Page (~22 lines)',
    targetTimeMinutes: 7,
    questionText: 'Trace the judicial recognition of the "Right to Die with Dignity" under Article 21. Explain the distinction between active and passive euthanasia, and outline the simplified guidelines for Advance Medical Directives (Living Wills) laid down in Common Cause (2023).',
    coreIssues: [
      'Evolution from Gian Kaur (1996) and Aruna Shanbaug (2011) to Common Cause (2018).',
      'Active euthanasia (positive lethal act - illegal) vs passive euthanasia (withholding life support - legal).',
      'Advance Medical Directives (Living Wills) under Article 21.',
      'The 2023 5-Judge Bench procedural simplification dispensing with JMFC countersigning.'
    ],
    examinerExpectation:
      'Candidate must distinguish active from passive euthanasia. Explain how Common Cause (2018) recognized the right to die with dignity as part of Article 21. Detail the 2023 modification which streamlined the cumbersome 2018 procedure (replacing JMFC attestation with gazetted notary and reducing review timelines).',
    essentialCitations: [
      'Gian Kaur v. State of Punjab ((1996) 2 SCC 648)',
      'Aruna Ramchandra Shanbaug v. Union of India ((2011) 4 SCC 454)',
      'Common Cause (A Regd. Society) v. Union of India ((2018) 5 SCC 1 & (2023) 3 SCC 414)'
    ],
    hoverIntel: {
      topicName: 'Right to Die with Dignity & Living Wills (2023 Guidelines)',
      topicPillar: 'Part III: Right to Life and Personal Liberty (Article 21)',
      examImportance: '⭐⭐⭐⭐⭐ High Yield Medical-Legal Landmark',
      examFrequency: 'Frequently tested in DJS and High Court Judicial Mains',
      weightagePattern: '10 Marks • 200–250 Words (1.0 Page)',
      targetTimeMinutes: 7,
      examinerTrapWarning:
        'Trap Alert: Active euthanasia and assisted suicide remain ILLEGAL under Indian law! Only PASSIVE euthanasia (withdrawal of artificial life-prolonging treatments in terminal vegetative states) is lawful under Article 21.',
      recentTrendAlert: 'The 2023 modification eliminated the requirement for Judicial Magistrate countersigning, making Living Wills practical.',
      coreArticles: ['Article 21'],
      benchmarkCases: ['Aruna Shanbaug (2011)', 'Common Cause (2018 & 2023)']
    },
    answerBlueprint: {
      step1Intro: 'Evolutionary Trajectory: Gian Kaur (1996) clarified that the right to life does not include the right to commit suicide, but includes the right to die with human dignity.',
      step2DoctrinalCore: 'Active vs Passive: Aruna Shanbaug (2011) legalized passive euthanasia under judicial supervision. Active euthanasia (lethal injection) remains criminal culpable homicide.',
      step3PrecedentEvolution: 'Common Cause (2018): 5-Judge Bench declared that an adult of sound mind has a constitutional right under Article 21 to refuse invasive medical treatment and execute an Advance Medical Directive (Living Will).',
      step4Conclusion: '2023 Procedural Reform: Overcame cumbersome hurdles: Replaced Judicial Magistrate attestation with execution before a Notary/Gazetted Officer; Hospital Primary and Secondary Medical Boards must decide within 48 hours.'
    },
    fullModelAnswer: `I. CONSTITUTIONAL EVOLUTION OF ARTICLE 21:
In Gian Kaur v. State of Punjab (1996), the Constitution Bench held that while Article 21 does not include a "right to be killed", it encompasses the right to a dignified dying process rather than lingering in terminal agony.

II. ACTIVE VS PASSIVE EUTHANASIA:
In Aruna Shanbaug v. Union of India (2011), the Supreme Court distinguished:
- Active Euthanasia: Administration of a lethal substance to cause death. This remains illegal and constitutes an offence under the Penal Code.
- Passive Euthanasia: Withholding or withdrawing medical treatment, artificial nutrition, or mechanical ventilators that merely prolong the biological dying process of a brain-dead/PVS patient. Passive euthanasia is lawful.

III. LIVING WILLS: COMMON CAUSE (2018):
A 5-Judge Constitution Bench led by CJI Dipak Misra affirmed that bodily autonomy and self-determination are core components of Article 21. Citizens possess the fundamental right to execute an "Advance Medical Directive" (Living Will) directing doctors not to administer artificial life support if afflicted with irreversible terminal illness.

IV. 2023 SIMPLIFICATION OF GUIDELINES:
Finding the 2018 procedure unworkable, a Constitution Bench in Common Cause (2023) modified the directives:
1. Execution: Living Will can now be executed before an attested Notary Public or Gazetted Officer (dispensing with the Judicial Magistrate 1st Class).
2. Two-Tier Medical Board:
   - Primary Medical Board (treating physician + 2 specialists): Must examine within 48 hours.
   - Secondary Medical Board (registered hospital board): Must concur within 48 hours.
3. Rapid Recourse: If permission is refused, the family can approach the High Court under Article 226 for urgent review.`,
    scoringRubric: [
      { criterion: 'Gian Kaur to Aruna Shanbaug doctrinal lineage', marks: 2 },
      { criterion: 'Precise distinction: Active vs Passive euthanasia', marks: 2.5 },
      { criterion: 'Common Cause (2018) recognition of bodily autonomy under Art 21', marks: 2.5 },
      { criterion: '2023 Procedural modifications (Notary attestation & 48-hr boards)', marks: 3 }
    ]
  },
  {
    id: 'mains-10m-self-incrimination-narco-dna',
    title: 'Article 20(3) Right Against Self-Incrimination: Polygraph, Narco-Analysis & DNA Testing',
    topicId: 'art-20-protection-offences',
    marksCategory: 10,
    examCategory: 'PROSECUTION',
    examsAppeared: ['UP APP 2018, 2022', 'CBI Public Prosecutor 2021', 'DJS 2022'],
    typicalMarks: 10,
    targetWordLimit: '200–250 Words | Time: ~7 Mins',
    targetWordMin: 180,
    targetWordMax: 260,
    estimatedPages: '1.0 Page (~22 lines)',
    targetTimeMinutes: 7,
    questionText: 'Examine the constitutional validity of involuntary Narco-analysis, Polygraph tests, and Brain-mapping in light of Article 20(3) and Article 21. Contrast these tests with the collection of physical samples and DNA profiling with reference to Selvi and Kathi Kalu Oghad.',
    coreIssues: [
      'Article 20(3) ingredients: Person accused of an offence, compelled to be a witness against himself.',
      'Testimonial compulsion vs physical/biological evidence.',
      'Selvi v. State of Karnataka (2010): Involuntary neuro-scientific tests violate mental privacy and Article 20(3).',
      'Kathi Kalu Oghad (1961) and Section 53/53A CrPC (Sec 51/52 BNSS): Fingerprints, handwriting, and DNA do not violate Article 20(3).'
    ],
    examinerExpectation:
      'Candidate must contrast State of Bombay v. Kathi Kalu Oghad (1961, 11-Judge Bench) with Selvi v. State of Karnataka (2010, 3-Judge Bench). Physical evidence (DNA, fingerprints) conveys no mental thoughts and is constitutional. Involuntary narco/polygraph forces mental testimony, violating Art 20(3) and Art 21.',
    essentialCitations: [
      'State of Bombay v. Kathi Kalu Oghad (AIR 1961 SC 1808)',
      'Selvi v. State of Karnataka ((2010) 7 SCC 263)',
      'K.S. Puttaswamy v. Union of India ((2017) 10 SCC 1)'
    ],
    hoverIntel: {
      topicName: 'Self-Incrimination: Narco & Polygraph vs DNA & Biometrics',
      topicPillar: 'Part III: Protection in Respect of Conviction (Articles 20(3) & 21)',
      examImportance: '⭐⭐⭐⭐⭐ High Yield Criminal-Constitutional Nexus',
      examFrequency: 'Every alternate year in APP, CBI Prosecutor, and Judicial Mains',
      weightagePattern: '10 Marks • 200–250 Words (1.0 Page)',
      targetTimeMinutes: 7,
      examinerTrapWarning:
        'Trap Alert: Do not say DNA testing violates Article 20(3)! Kathi Kalu Oghad (11 judges) established that taking physical body materials does not amount to being a witness against oneself. Only communicative/mental statements are protected!',
      recentTrendAlert: 'Tested alongside the Criminal Procedure (Identification) Act, 2022 authorizing biometric measurements.',
      coreArticles: ['Article 20(3)', 'Article 21', 'Section 53 CrPC / Sec 51 BNSS'],
      benchmarkCases: ['Kathi Kalu Oghad (1961)', 'Selvi (2010)']
    },
    answerBlueprint: {
      step1Intro: 'Constitutional Shield: Article 20(3) protects against "compelled testimonial transmission": (1) Accused person, (2) Compulsion, (3) Witness against oneself.',
      step2DoctrinalCore: 'Kathi Kalu Oghad (1961, 11-Judge Bench): Drew the vital boundary between "physical evidence" and "testimonial evidence". Compelling an accused to give handwriting, fingerprints, or blood does not convey knowledge or thought; hence, it is constitutional.',
      step3PrecedentEvolution: 'Selvi v. State of Karnataka (2010): 3-Judge Bench examined involuntary Narco-Analysis, Lie Detector (Polygraph), and BEAP (Brain Mapping): (1) Involuntary administration violates mental privacy under Article 21, (2) Extracted statements constitute compelled testimony under Article 20(3), rendering them inadmissible.',
      step4Conclusion: 'Subsequent Discovery under Section 27 Evidence Act: If information leads to discovery of physical facts, those physical facts are admissible, but the involuntary confession remains barred.'
    },
    fullModelAnswer: `Article 20(3) guarantees that "No person accused of any offence shall be compelled to be a witness against himself." This privilege against self-incrimination is reinforced by the right to privacy under Article 21.

I. PHYSICAL VS TESTIMONIAL EVIDENCE: KATHI KALU OGHAD (1961):
An 11-Judge Constitution Bench in State of Bombay v. Kathi Kalu Oghad held that "to be a witness" means conveying knowledge through communicative acts or statements.
- Giving fingerprints, palm impressions, handwriting exemplars, or bodily material (blood/semen for DNA) is purely physical evidence.
- Physical material is immutable and does not involve conscious mental testimony. Hence, Section 53/53A CrPC (Sec 51/52 BNSS) authorizing non-consensual bodily examination does not violate Article 20(3).

II. INVOLUNTARY SCIENTIFIC TESTS: SELVI (2010):
In Selvi v. State of Karnataka (2010), a 3-Judge Bench held that involuntary Narco-analysis, Polygraph tests, and Brain Fingerprinting (BEAP) violate Articles 20(3) and 21:
1. Violation of Mental Privacy: Intrusive chemical administration (sodium pentothal) or electroencephalograph probes forcibly intrude upon the accused's subconscious mind, violating personal autonomy and bodily integrity under Article 21.
2. Compelled Testimony: Even if questions are neutral, the test forces the subject to reveal mental contents without conscious control, violating Article 20(3).
3. Voluntary Exception: If an accused voluntarily submits with informed consent and judicial oversight, test results cannot be treated as a confession, but physical objects discovered pursuant to statements are admissible under Section 27 of the Evidence Act.`,
    scoringRubric: [
      { criterion: 'Ingredients of Article 20(3) and testimonial compulsion scope', marks: 2 },
      { criterion: 'Kathi Kalu Oghad (1961) physical vs testimonial evidence distinction', marks: 3 },
      { criterion: 'Selvi (2010) invalidation of involuntary narco/polygraph under Art 20(3) & 21', marks: 3 },
      { criterion: 'Voluntary testing and Section 27 Evidence Act exception', marks: 2 }
    ]
  },
  {
    id: 'mains-10m-njac-collegium-judicial-primacy',
    title: 'Judicial Independence & the NJAC Judgment: Primacy of CJI & Collegium Evolution',
    topicId: 'basic-structure-doctrine',
    marksCategory: 10,
    examCategory: 'UPSC_LAW',
    examsAppeared: ['UPSC Law Optional 2016, 2020', 'DJS 2017', 'UP PCS-J 2018'],
    typicalMarks: 10,
    targetWordLimit: '200–250 Words | Time: ~7 Mins',
    targetWordMin: 180,
    targetWordMax: 260,
    estimatedPages: '1.0 Page (~22 lines)',
    targetTimeMinutes: 7,
    questionText: 'Critically analyze the 99th Constitutional Amendment and the National Judicial Appointments Commission (NJAC) Act, 2014. On what constitutional grounds did the Supreme Court strike them down in the Fourth Judges Case (2015)?',
    coreIssues: [
      'Evolution of the Collegium system: First Judges (1981), Second Judges (1993), Third Judges (1998).',
      'The 99th Constitutional Amendment Act, 2014 creating the 6-member NJAC (Article 124A).',
      'Judicial Independence as part of the Basic Structure of the Constitution.',
      'Presence of Union Law Minister and two "eminent persons" with veto power.'
    ],
    examinerExpectation:
      'Candidate must trace the Judges Cases. Explain the NJAC composition under Art 124A. Discuss the Fourth Judges Case (2015, 4:1): Judicial primacy in appointments is an indispensable component of Judicial Independence, which forms part of the Basic Structure. Executive veto invalidates the amendment.',
    essentialCitations: [
      'S.P. Gupta v. Union of India (First Judges Case, 1981 Supp SCC 87)',
      'Supreme Court Advocates-on-Record Assn v. UOI (Second Judges Case, (1993) 4 SCC 441)',
      'Supreme Court Advocates-on-Record Assn v. UOI (NJAC / Fourth Judges Case, (2016) 5 SCC 1)'
    ],
    hoverIntel: {
      topicName: 'NJAC & Judicial Independence: The Fourth Judges Case (2015)',
      topicPillar: 'Part V: The Union Judiciary • Independence & Appointments (Article 124)',
      examImportance: '⭐⭐⭐⭐⭐ Classic Constitutional Benchmark',
      examFrequency: 'Frequently tested in UPSC Law and State Judicial Mains',
      weightagePattern: '10 Marks • 200–250 Words (1.0 Page)',
      targetTimeMinutes: 7,
      examinerTrapWarning:
        'Trap Alert: Do not forget Justice J. Chelameswar\'s sole dissent! While 4 judges struck down NJAC, Chelameswar J. dissented, criticizing the Collegium as opaque, non-accountable, and plagued by nepotic trade-offs.',
      recentTrendAlert: 'Persisting friction between the Central Government and Supreme Court over the Memorandum of Procedure (MoP).',
      coreArticles: ['Article 124', 'Article 124A (struck down)', 'Article 217'],
      benchmarkCases: ['Second Judges Case (1993)', 'Third Judges Case (1998)', 'NJAC Case (2015)']
    },
    answerBlueprint: {
      step1Intro: 'The Constitutional Mandate: Article 124(2) originally required the President to appoint judges in "consultation" with the Chief Justice of India.',
      step2DoctrinalCore: 'Judges Cases Trajectory: First Judges (1981 - executive primacy); Second Judges (1993 - consultation means concurrence, creating Collegium); Third Judges (1998 - 1+4 Collegium plurality).',
      step3PrecedentEvolution: 'The 99th Amendment & NJAC Act, 2014: Created a 6-member NJAC (CJI + 2 senior judges + Law Minister + 2 eminent persons), where any 2 members held a veto.',
      step4Conclusion: 'Fourth Judges Case (2015, 4:1): Kehar J. held that Judicial Primacy in appointments is an organic component of Judicial Independence (Basic Structure). Allowing the Law Minister (the largest litigant) and two lay persons to veto judicial recommendations violated the Basic Structure.'
    },
    fullModelAnswer: `I. EVOLUTION OF THE COLLEGIUM:
Article 124(2) states that Supreme Court judges are appointed by the President after "consultation" with the CJI:
- First Judges Case (1981): "Consultation" does not mean concurrence; Executive had primacy.
- Second Judges Case (1993): Overruled 1981; "consultation" means concurrence to protect judicial independence.
- Third Judges Case (1998): Expanded the Collegium to the CJI and four senior-most judges.

II. THE 99TH AMENDMENT & NJAC COMPOSITION:
To replace the opaque Collegium, Parliament enacted the 99th Constitutional Amendment (inserting Articles 124A, 124B, 124C) and the NJAC Act, 2014, establishing a 6-member Commission:
1. Chief Justice of India (Chairperson);
2. Two senior-most Supreme Court judges;
3. Union Minister of Law and Justice;
4. Two "eminent persons" (nominated by CJI, PM, and Leader of Opposition).
Crucial Rule: If any two members vetoed a recommendation, the appointment could not proceed.

III. RATIO OF FOURTH JUDGES CASE (2015, 4:1 MAJORITY):
A 5-Judge Constitution Bench declared the 99th Amendment and NJAC Act unconstitutional:
1. Judicial Independence as Basic Structure: Judicial independence is an inviolable facet of the Basic Structure. Primacy of the Judiciary in judicial appointments is an essential prerequisite of an independent judiciary.
2. Executive Participation as Litigant: The Union Government is the single largest litigant in the country. Giving the Law Minister and two non-judicial eminent persons a veto power over judicial selections creates an intolerable conflict of interest.

Dissent: Justice Chelameswar dissented, holding that the Collegium lacked transparency and checks and balances, and that executive participation did not destroy basic structure.`,
    scoringRubric: [
      { criterion: 'Evolution through 1st, 2nd, and 3rd Judges Cases', marks: 2.5 },
      { criterion: 'Structure and veto power of NJAC under 99th Amendment', marks: 2 },
      { criterion: 'Fourth Judges Case majority ratio (Judicial Primacy & Basic Structure)', marks: 3.5 },
      { criterion: 'Critique & Justice Chelameswar dissent', marks: 2 }
    ]
  },
  {
    id: 'mains-10m-governor-assent-art-200',
    title: 'Governor\'s Power to Withhold Assent to Bills under Article 200: State of Punjab (2023)',
    topicId: 'art-246-seventh-schedule-federalism',
    marksCategory: 10,
    examCategory: 'UP_PCSJ',
    examsAppeared: ['UP PCS-J 2024 Model', 'UPSC Law Optional 2024', 'DJS 2024'],
    typicalMarks: 10,
    targetWordLimit: '200–250 Words | Time: ~7 Mins',
    targetWordMin: 180,
    targetWordMax: 260,
    estimatedPages: '1.0 Page (~22 lines)',
    targetTimeMinutes: 7,
    questionText: 'Can a Governor exercise a "pocket veto" by withholding assent to Bills indefinitely? Examine the scope of powers of the Governor under Article 200 in light of State of Punjab v. Principal Secretary to Governor (2023).',
    coreIssues: [
      'Four options under Article 200: Assent, withhold assent, reserve for President, return to House.',
      'Meaning of the first proviso: "as soon as possible".',
      'Whether the Governor can withhold assent without returning the Bill to the Legislature.',
      'Governor as a constitutional titular head vs unelected obstruction.'
    ],
    examinerExpectation:
      'Candidate must explain the four paths under Article 200. Cite CJI Chandrachud\'s ruling in State of Punjab (2023): A Governor CANNOT sit on Bills. Withholding assent must immediately be followed by returning the Bill with a message. If the House passes it again, the Governor MUST give assent. Pocket veto does not exist.',
    essentialCitations: [
      'Shamsher Singh v. State of Punjab ((1974) 2 SCC 831)',
      'State of Punjab v. Principal Secretary to Governor (2023 INSC 1018)',
      'State of Tamil Nadu v. Governor of Tamil Nadu (2024)'
    ],
    hoverIntel: {
      topicName: 'Governor\'s Assent under Article 200 (State of Punjab 2023)',
      topicPillar: 'Part VI: The States • State Legislature & Executive (Article 200)',
      examImportance: '⭐⭐⭐⭐⭐ High Yield Constitutional Hotspot',
      examFrequency: 'Direct expected essay in upcoming Judicial Mains and UPSC Law',
      weightagePattern: '10 Marks • 200–250 Words (1.0 Page)',
      targetTimeMinutes: 7,
      examinerTrapWarning:
        'Trap Alert: A Governor cannot say "I withhold assent" and bury the Bill! The Supreme Court held that withholding assent is inextricably tied to returning the Bill under the proviso. Withholding without returning is unconstitutional!',
      recentTrendAlert: 'Litigated extensively across Punjab, Tamil Nadu, and Kerala in 2023-2024.',
      coreArticles: ['Article 163', 'Article 200', 'Article 201'],
      benchmarkCases: ['Shamsher Singh (1974)', 'State of Punjab (2023)']
    },
    answerBlueprint: {
      step1Intro: 'Constitutional Role: The Governor is a constitutional figurehead who acts on the aid and advice of the Council of Ministers (Shamsher Singh, 1974).',
      step2DoctrinalCore: 'Four Alternatives under Article 200: (1) Declare assent, (2) Withhold assent, (3) Reserve for the consideration of the President, or (4) Return the Bill with a message requesting reconsideration under the Proviso.',
      step3PrecedentEvolution: 'State of Punjab v. Principal Secretary (2023, 3-Judge Bench): CJI Chandrachud ruled that the Governor cannot sit on Bills indefinitely. "Withholding assent" under the substantive clause must be accompanied by returning the Bill under the first proviso.',
      step4Conclusion: 'Mandatory Assent on Re-passage: Once the elected Legislative Assembly re-passes the Bill (with or without amendments), the Governor is constitutionally bound to grant assent.'
    },
    fullModelAnswer: `I. THE CONSTITUTIONAL ARCHITECTURE OF ARTICLE 200:
When a Bill is passed by the State Legislature, Article 200 presents the Governor with four distinct courses:
1. Grant assent;
2. Withhold assent;
3. Reserve the Bill for the consideration of the President (mandatory if it derogates High Court powers);
4. Return the Bill (if not a Money Bill) to the Legislature with a message for reconsideration "as soon as possible".

II. NO "POCKET VETO": STATE OF PUNJAB (2023):
In State of Punjab v. Principal Secretary to Governor (2023 INSC 1018), the Supreme Court resolved the constitutional friction where Governors sat on passed legislation indefinitely:
1. Rejection of Pocket Veto: The Governor cannot exercise a pocket veto. An unelected Governor cannot thwart the legislative will of the elected representatives of the people in a parliamentary democracy.
2. Inextricable Link: The power to "withhold assent" cannot be exercised in a vacuum. If the Governor chooses to withhold assent, they MUST immediately trigger the first proviso and return the Bill with reasons for reconsideration.
3. Mandatory Assent: If the State Legislature reconsiders and passes the Bill again, the Governor has NO discretion left and "shall not withhold assent therefrom".

Conclusion: The phrase "as soon as possible" conveys constitutional urgency. The Governor cannot act as an adversarial gatekeeper against State Legislatures.`,
    scoringRubric: [
      { criterion: 'Four constitutional options available to the Governor under Art 200', marks: 2.5 },
      { criterion: 'State of Punjab (2023) rejection of "pocket veto"', marks: 3 },
      { criterion: 'Mandatory return of Bill and binding nature of re-passage', marks: 2.5 },
      { criterion: 'Democratic accountability and Shamsher Singh constitutional synthesis', marks: 2 }
    ]
  },
  {
    id: 'mains-10m-equal-pay-equal-work',
    title: 'Equal Pay for Equal Work: Constitutional Enforceability under Article 14 & 39(d)',
    topicId: 'dpsp-art-36-51-implementation',
    marksCategory: 10,
    examCategory: 'BJS',
    examsAppeared: ['BJS 2016, 2021', 'UP PCS-J 2015', 'MP Judiciary 2018'],
    typicalMarks: 10,
    targetWordLimit: '200–250 Words | Time: ~7 Mins',
    targetWordMin: 180,
    targetWordMax: 260,
    estimatedPages: '1.0 Page (~22 lines)',
    targetTimeMinutes: 7,
    questionText: 'Is the principle of "Equal Pay for Equal Work" an enforceable Fundamental Right or a non-justiciable Directive Principle? Discuss the interplay between Article 14, Article 16, and Article 39(d) with reference to Randhir Singh and Jagjit Singh.',
    coreIssues: [
      'Article 39(d) Directive Principle read into Article 14 and 16.',
      'Randhir Singh (1982): Elevating equal pay to a constitutional right.',
      'State of Punjab v. Jagjit Singh (2017): Extending equal pay to temporary, contractual, and ad-hoc employees.',
      'Limitations: Reasonable classification based on qualifications, responsibilities, and experience.'
    ],
    examinerExpectation:
      'Candidate must explain that while Art 39(d) is not directly enforceable per se (Art 37), reading it alongside Art 14 and 16 makes "Equal Pay for Equal Work" an enforceable fundamental right (Randhir Singh). Highlight Jagjit Singh (2017) extending it to temporary/contractual staff doing identical work.',
    essentialCitations: [
      'Randhir Singh v. Union of India ((1982) 1 SCC 618)',
      'State of Haryana v. Charanjit Singh ((2006) 9 SCC 321)',
      'State of Punjab v. Jagjit Singh ((2017) 1 SCC 148)'
    ],
    hoverIntel: {
      topicName: 'Equal Pay for Equal Work: DPSP to Fundamental Right',
      topicPillar: 'Part III & Part IV: Articles 14, 16 & 39(d)',
      examImportance: '⭐⭐⭐⭐ High Yield Socio-Economic Jurisprudence',
      examFrequency: 'Frequently tested in Bihar Judiciary and UP PCS-J',
      weightagePattern: '10 Marks • 200–250 Words (1.0 Page)',
      targetTimeMinutes: 7,
      examinerTrapWarning:
        'Trap Alert: Equal pay cannot be claimed mechanically! If there are qualitative differences in educational qualifications, mode of recruitment, or responsibilities, differential pay is valid (Charanjit Singh 2006).',
      recentTrendAlert: 'Extensively invoked by contractual government teachers, nurses, and ad-hoc staff across States.',
      coreArticles: ['Article 14', 'Article 16', 'Article 39(d)'],
      benchmarkCases: ['Randhir Singh (1982)', 'Jagjit Singh (2017)']
    },
    answerBlueprint: {
      step1Intro: 'Constitutional Nexus: Article 39(d) directs the State to secure equal pay for equal work for both men and women. Though non-justiciable under Article 37, it derives enforceability through Articles 14 and 16.',
      step2DoctrinalCore: 'Randhir Singh v. Union of India (1982, Chinnappa Reddy J.): Equal pay for equal work is not a mere abstract slogan; it is an enforceable constitutional goal deduced from the Preamble and Articles 14 and 16.',
      step3PrecedentEvolution: 'Jagjit Singh (2017, Jagdish Singh Khehar J.): Applied the doctrine to daily-wagers, ad-hoc, and contractual workers: Paying lesser wages to temporary employees performing identical duties as regular employees constitutes exploitative "forced labour" under Article 23.',
      step4Conclusion: 'Strict Caveats: The doctrine requires wholesome identity of work, responsibilities, and qualifications, not mechanical parity.'
    },
    fullModelAnswer: `I. THE CONSTITUTIONAL BRIDGE:
Article 39(d) in Part IV directs the State to ensure "equal pay for equal work for both men and women". While Directive Principles are non-enforceable per se (Article 37), the Supreme Court has integrated Article 39(d) into the fundamental rights guarantees of Article 14 (Equality) and Article 16 (Equality of opportunity in public employment).

II. RANDHIR SINGH V. UNION OF INDIA (1982):
CJI O. Chinnappa Reddy firmly constitutionalized the doctrine:
"Equal pay for equal work is not a mere demagogic slogan. It is a constitutional goal which must be read into Articles 14 and 16 in the light of the Preamble and Article 39(d)."
Where all relevant things are equal, persons discharging identical responsibilities under the same employer cannot be treated unequally in pay scales.

III. EXTENSION TO TEMPORARY WORKERS: JAGJIT SINGH (2017):
In State of Punjab v. Jagjit Singh (2017), a 2-Judge Bench extended the doctrine to daily-wagers, casual, and contractual employees:
- An employee engaged for the same work cannot be paid less merely because they are temporary.
- Forcing a desperate person to work for a depressed wage while discharging the exact burden of a regular worker is an involuntary exploitation of dignity, violative of Article 21 and 23.

IV. JUDICIAL LIMITATIONS:
Parity is not automatic. The burden of proof lies on the claimant to establish complete identity in qualifications, selection mode, job risks, and functional accountability (State of Haryana v. Charanjit Singh, 2006).`,
    scoringRubric: [
      { criterion: 'Harmonious construction of Article 39(d) with Articles 14 & 16', marks: 2.5 },
      { criterion: 'Randhir Singh (1982) foundational ratio', marks: 2.5 },
      { criterion: 'Jagjit Singh (2017) application to contractual/ad-hoc employees', marks: 3 },
      { criterion: 'Limitations: Qualitative difference, qualifications, and burden of proof', marks: 2 }
    ]
  },
  {
    id: 'mains-10m-freedom-of-association-strikes',
    title: 'Freedom of Association under Article 19(1)(c) & Right to Strike',
    topicId: 'art-19-1-a-free-speech',
    marksCategory: 10,
    examCategory: 'UP_PCSJ',
    examsAppeared: ['UP PCS-J 2014, 2019', 'DJS 2018', 'UPSC Law Optional 2020'],
    typicalMarks: 10,
    targetWordLimit: '200–250 Words | Time: ~7 Mins',
    targetWordMin: 180,
    targetWordMax: 260,
    estimatedPages: '1.0 Page (~22 lines)',
    targetTimeMinutes: 7,
    questionText: 'Does the Fundamental Right to form associations under Article 19(1)(c) carry with it the right to strike or collective bargaining? Discuss with reference to All India Bank Employees\' Assn and T.K. Rangarajan.',
    coreIssues: [
      'Concomitant rights theory: Does the right to form a union include the right to achieve the union\'s objectives?',
      'All India Bank Employees\' Assn (1962): Striking down the concomitant rights doctrine.',
      'T.K. Rangarajan v. Govt. of Tamil Nadu (2003): No fundamental, statutory, or moral right to strike for government servants.',
      'Permissible restrictions under Article 19(4) (sovereignty, integrity, public order, morality).'
    ],
    examinerExpectation:
      'Candidate must explain that Art 19(1)(c) protects only the formation of associations/unions. It does NOT include a fundamental right to strike or collective bargaining. Cite All India Bank Employees\' Assn (1962) and T.K. Rangarajan (2003). Strikes can only be statutory rights under Industrial Disputes Act.',
    essentialCitations: [
      'All India Bank Employees\' Assn v. National Industrial Tribunal (AIR 1962 SC 171)',
      'O.K. Ghosh v. E.X. Joseph (AIR 1963 SC 812)',
      'T.K. Rangarajan v. Government of Tamil Nadu ((2003) 6 SCC 581)'
    ],
    hoverIntel: {
      topicName: 'Freedom of Association & The Right to Strike',
      topicPillar: 'Part III: Six Democratic Freedoms (Article 19(1)(c) & 19(4))',
      examImportance: '⭐⭐⭐⭐ Standard Labor-Constitutional Question',
      examFrequency: 'Frequently tested in UP PCS-J, DJS, and UPSC Law Optional',
      weightagePattern: '10 Marks • 200–250 Words (1.0 Page)',
      targetTimeMinutes: 7,
      examinerTrapWarning:
        'Trap Alert: Candidates often claim that striking is a fundamental right. It is NOT! The right to strike is at best a controlled statutory right under the Industrial Disputes Act, 1947, never a Fundamental Right under Part III!',
      recentTrendAlert: 'Frequently invoked in strikes by doctors, lawyers, and municipal transport unions.',
      coreArticles: ['Article 19(1)(c)', 'Article 19(4)', 'Article 33'],
      benchmarkCases: ['All India Bank Employees (1962)', 'T.K. Rangarajan (2003)']
    },
    answerBlueprint: {
      step1Intro: 'Constitutional Scope: Article 19(1)(c) guarantees to all citizens the right "to form associations or unions or co-operative societies", subject to reasonable restrictions under Article 19(4).',
      step2DoctrinalCore: 'Rejection of Concomitant Rights: All India Bank Employees\' Assn (1962, 5-Judge Bench): The right to form unions does not guarantee that the union will achieve its objects, nor does it guarantee an uninhibited right to strike or collective bargaining.',
      step3PrecedentEvolution: 'T.K. Rangarajan (2003, 2-Judge Bench): Government servants have no fundamental, legal, or moral right to strike: Strikes paralyze society, cause grave public disruption, and destroy governance.',
      step4Conclusion: 'Statutory Character: The right to strike exists only as a qualified statutory right under labor statutes (such as the Industrial Disputes Act, 1947 / Industrial Relations Code), strictly subject to statutory notice and conciliation.'
    },
    fullModelAnswer: `I. ARTICLE 19(1)(c) AND THE THEORY OF CONCOMITANT RIGHTS:
Article 19(1)(c) protects the right of citizens "to form associations or unions". Trade unions argued that this right must include the right to make the union effective through collective bargaining, demonstration, and strikes.

II. ALL INDIA BANK EMPLOYEES\' ASSN (1962):
A 5-Judge Constitution Bench rejected the "concomitant rights" theory:
- Article 19(1)(c) ends with the formation of the association.
- It does not guarantee that the association shall fulfill every one of its objects.
- If the right to strike were held to be a fundamental right under Article 19(1)(c), it could only be restricted on the narrow grounds of Article 19(4) (sovereignty, integrity, public order, morality), paralyzing public regulation.

III. T.K. RANGARAJAN V. GOVT. OF TAMIL NADU (2003):
When two lakh government employees went on an indefinite strike, the Supreme Court took a stern stance:
1. No Fundamental Right: Employees have no fundamental right under Part III to resort to strike.
2. No Moral or Equitable Right: Government servants are paid out of public revenue to serve society; holding the community to ransom by halting essential services is morally indefensible.
3. Redressal Mechanism: Grievances must be redressed through Administrative Tribunals and grievance machinery, not coercive strikes.

Conclusion: In India, the right to strike is not a Fundamental Right. It is merely a conditional statutory right under labor laws, conditioned by mandatory notice periods and prohibition during conciliation.`,
    scoringRubric: [
      { criterion: 'Constitutional scope of Article 19(1)(c) and grounds in 19(4)', marks: 2 },
      { criterion: 'All India Bank Employees\' Assn (1962) rejection of concomitant rights', marks: 3 },
      { criterion: 'T.K. Rangarajan (2003) ratio on government strikes', marks: 3 },
      { criterion: 'Statutory vs fundamental right distinction', marks: 2 }
    ]
  },
  {
    id: 'mains-10m-doctrine-of-pleasure-art-310-311',
    title: 'Doctrine of Pleasure & Constitutional Safeguards for Civil Servants: Articles 310 & 311',
    topicId: 'art-311-civil-servants-protections',
    marksCategory: 10,
    examCategory: 'UPSC_LAW',
    examsAppeared: ['UPSC Law Optional 2015, 2021', 'UP PCS-J 2016', 'BJS 2018'],
    typicalMarks: 10,
    targetWordLimit: '200–250 Words | Time: ~7 Mins',
    targetWordMin: 180,
    targetWordMax: 260,
    estimatedPages: '1.0 Page (~22 lines)',
    targetTimeMinutes: 7,
    questionText: 'Explain the Doctrine of Pleasure under Article 310. How is it qualified by the constitutional safeguards provided under Article 311? Discuss the exceptions under the second proviso to Article 311(2) in light of Union of India v. Tulsiram Patel.',
    coreIssues: [
      'Common law Crown pleasure vs Indian constitutional doctrine under Article 310.',
      'Two twin safeguards under Article 311(1) (subordination bar) and 311(2) (reasonable opportunity of being heard).',
      'The 42nd Amendment deleting the second stage representation on penalty.',
      'Three exceptions under the Second Proviso (conviction, impracticability, security of State) and Tulsiram Patel (1985).'
    ],
    examinerExpectation:
      'Candidate must explain Article 310 and how Article 311 acts as a constitutional rider/exception to pleasure. Explain Art 311(1) and 311(2). Detail the three clauses of the Second Proviso (a, b, c) and cite Tulsiram Patel (1985, 5-Judge Bench).',
    essentialCitations: [
      'Parshotam Lal Dhingra v. Union of India (AIR 1958 SC 36)',
      'Union of India v. Tulsiram Patel ((1985) 3 SCC 398)',
      'Jaswant Singh v. State of Punjab ((1991) 1 SCC 362)'
    ],
    hoverIntel: {
      topicName: 'Doctrine of Pleasure & Article 311 Safeguards',
      topicPillar: 'Part XIV: Services under the Union and the States (Articles 310 & 311)',
      examImportance: '⭐⭐⭐⭐⭐ High Yield Services Landmark',
      examFrequency: 'Every 2 years in UPSC Law Optional and Judicial Services Paper II',
      weightagePattern: '10 Marks • 200–250 Words (1.0 Page)',
      targetTimeMinutes: 7,
      examinerTrapWarning:
        'Trap Alert: The 42nd Constitutional Amendment Act, 1976 DELETED the second opportunity to show cause against the proposed penalty! Today, the civil servant is entitled to be heard only on the charges during the inquiry, NOT on the quantum of punishment!',
      recentTrendAlert: 'Invoked in dismissals of police officers and civil servants involved in anti-national activities under Art 311(2)(c).',
      coreArticles: ['Article 310', 'Article 311(1)', 'Article 311(2)'],
      benchmarkCases: ['Parshotam Lal Dhingra (1958)', 'Tulsiram Patel (1985)']
    },
    answerBlueprint: {
      step1Intro: 'Doctrine of Pleasure (Article 310): Derived from Latin "durante bene placito regis"—civil servants hold office during the pleasure of the President or Governor.',
      step2DoctrinalCore: 'Constitutional Fetters (Article 311): Article 311 restricts executive pleasure with two mandatory shields: (1) Art 311(1): Cannot be dismissed by an authority subordinate to the appointing authority; (2) Art 311(2): Mandatory departmental inquiry informing charges and giving reasonable opportunity of being heard.',
      step3PrecedentEvolution: 'Second Proviso to Article 311(2) (Three Exceptions): (a) Dismissal on criminal conviction, (b) Recording reasons in writing that it is not reasonably practicable to hold inquiry, (c) In the interest of the security of the State.',
      step4Conclusion: 'Tulsiram Patel (1985, 5-Judge Bench): Validated the second proviso, holding that dispensing with natural justice in these 3 categories is justified by public interest, subject to limited judicial review for mala fides.'
    },
    fullModelAnswer: `I. DOCTRINE OF PLEASURE: ARTICLE 310:
Article 310 incorporates the English common law maxim that public servants hold office during the pleasure of the President or the Governor. However, in India, pleasure is not unfettered; it is subject to constitutional limitations, primarily Article 311.

II. THE TWIN SAFEGUARDS OF ARTICLE 311:
Article 311 provides two non-negotiable protections to members of civil services:
1. Article 311(1): Subordination Bar: A civil servant cannot be dismissed or removed by an authority subordinate to that by which they were appointed.
2. Article 311(2): Reasonable Opportunity: No civil servant shall be dismissed, removed, or reduced in rank except after an inquiry in which they are informed of the charges and given a reasonable opportunity of being heard. (Note: The 42nd Amendment 1976 abolished the second-stage representation against punishment).

III. EXCEPTIONS UNDER THE SECOND PROVISO: TULSIRAM PATEL (1985):
Under the second proviso to Article 311(2), the inquiry can be dispensed with in three situations:
- Clause (a): Dismissal based on conviction on a criminal charge.
- Clause (b): Where the disciplinary authority records in writing that it is "not reasonably practicable" to hold an inquiry (e.g., witnesses terrorized).
- Clause (c): Where the President or Governor is satisfied that in the "interest of the security of the State", it is not expedient to hold an inquiry.

In Union of India v. Tulsiram Patel (1985), a 5-Judge Bench upheld these exceptions, ruling that the principles of natural justice can be excluded by explicit constitutional provisions to safeguard public interest, subject to judicial review against mala fide action.`,
    scoringRubric: [
      { criterion: 'Explanation of Article 310 Doctrine of Pleasure', marks: 2 },
      { criterion: 'Twin safeguards under Article 311(1) and 311(2)', marks: 3 },
      { criterion: 'Three exceptions under the Second Proviso (a, b, c)', marks: 2.5 },
      { criterion: 'Tulsiram Patel (1985) constitutional justification & judicial review', marks: 2.5 }
    ]
  },

  // =========================================================================
  // 15 MARKS / 300–350 WORDS (TIER 3: ADVANCED PROBLEMS & STRUCTURAL ESSAYS)
  // =========================================================================
  {
    id: 'mains-15m-marital-rape-exception',
    title: 'Constitutional Validity of Marital Rape Exception: Articles 14, 19, and 21',
    topicId: 'art-21-right-to-life-liberty',
    marksCategory: 15,
    examCategory: 'DJS',
    examsAppeared: ['DJS 2022, 2024', 'UPSC Law Optional 2023', 'UP PCS-J 2023'],
    typicalMarks: 15,
    targetWordLimit: '300–350 Words | Time: ~11 Mins',
    targetWordMin: 280,
    targetWordMax: 380,
    estimatedPages: '1.5 Pages (~35 lines)',
    targetTimeMinutes: 11,
    questionText: 'Critically examine the constitutional validity of Exception 2 to Section 375 IPC (now Exception to Section 63 BNS) which exempts sexual intercourse by a man with his own wife from the definition of rape. Test the provision on the touchstone of Articles 14, 19(1)(a), and 21 of the Constitution with reference to Independent Thought and the Delhi High Court Split Verdict (2022).',
    coreIssues: [
      'Hale\'s Doctrine of implied irrevocable matrimonial consent vs modern constitutional morality.',
      'Article 14: Intelligible differentia between married and unmarried women regarding bodily autonomy.',
      'Article 21: Right to bodily integrity, sexual autonomy, and dignity (Puttaswamy and Joseph Shine).',
      'Independent Thought (2017) striking down child marital rape exception.',
      'Delhi High Court Split Verdict (2022) between Justice Rajiv Shakdher and Justice C. Hari Shankar.'
    ],
    examinerExpectation:
      'Candidate must analyze the colonial roots (Sir Matthew Hale). Test Exception 2 under Art 14 (arbitrary classification), Art 21 (bodily integrity, Puttaswamy, Navtej Johar, Joseph Shine). Detail Independent Thought (2017) and the Delhi HC split verdict (Shakdher J. striking it down vs Hari Shankar J. upholding it).',
    essentialCitations: [
      'Independent Thought v. Union of India ((2017) 10 SCC 800)',
      'K.S. Puttaswamy v. Union of India ((2017) 10 SCC 1)',
      'Joseph Shine v. Union of India ((2019) 3 SCC 39)',
      'RIT Foundation v. Union of India (2022 SCC OnLine Del 1404)'
    ],
    hoverIntel: {
      topicName: 'Marital Rape Exception: Articles 14 & 21 Analysis',
      topicPillar: 'Part III: Right to Equality, Bodily Autonomy & Dignity (Articles 14 & 21)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield Landmark Debate',
      examFrequency: 'Top recurring essay in DJS and UPSC Law Optional',
      weightagePattern: '15 Marks • 300–350 Words (1.5 Pages)',
      targetTimeMinutes: 11,
      examinerTrapWarning:
        'Trap Alert: Do not take an emotional or partisan tone! Answer strictly using constitutional benchmarks: test of reasonable classification under Article 14, bodily autonomy under Article 21, and the ratio of Joseph Shine (marriage does not strip woman of constitutional agency).',
      recentTrendAlert: 'Pending before a 3-Judge Constitution Bench of the Supreme Court of India.',
      coreArticles: ['Article 14', 'Article 15', 'Article 21'],
      benchmarkCases: ['Independent Thought (2017)', 'Joseph Shine (2019)', 'Delhi HC Split (2022)']
    },
    answerBlueprint: {
      step1Intro: 'Statutory Context & Colonial Origin: Exception 2 to Section 375 IPC (now Exception 2 to Section 63 BNS) excludes non-consensual sexual intercourse by a husband with his wife (above 18). Rooted in 17th-century doctrine of Sir Matthew Hale that marriage constitutes irrevocable matrimonial consent.',
      step2DoctrinalCore: 'Article 14 Challenge: Fails the twin test of reasonable classification: It creates an arbitrary distinction between married and unmarried women who suffer the identical violation of bodily integrity. Marriage cannot extinguish a woman\'s fundamental right to say "No".',
      step3PrecedentEvolution: 'Article 21 & Precedents: (1) Independent Thought (2017): SC struck down the exception for minor wives between 15-18; (2) Puttaswamy (2017): Privacy protects spatial, informational, and decisional autonomy over one\'s body; (3) Joseph Shine (2019): Striking down adultery, SC held marriage does not subordinate woman\'s persona to her husband.',
      step4Conclusion: 'The Delhi HC Split (2022): Shakdher J. held the exception unconstitutional as an affront to dignity; Hari Shankar J. upheld it, citing preservation of the institution of marriage and legislative domain. The matter awaits definitive constitutional determination.'
    },
    fullModelAnswer: `I. STATUTORY MATRIX AND COLONIAL GENESIS:
Exception 2 to Section 375 of the Indian Penal Code (retained in Section 63 of Bharatiya Nyaya Sanhita, 2023) provides: "Sexual intercourse or sexual acts by a man with his own wife, the wife not being under eighteen years of age, is not rape."
This immunity reflects the 17th-century common law dictum of Chief Justice Matthew Hale: "The husband cannot be guilty of a rape committed by himself upon his lawful wife, for by their mutual matrimonial consent and contract the wife hath given up herself in this kind unto her husband, which she cannot retract."

II. THE CONSTITUTIONAL SCRUTINY:
1. Article 14 (Equality & Non-Arbitrariness):
The provision fails the twin test of reasonable classification:
- It creates an artificial differentiation between married and unmarried women. A woman who is raped by a stranger has criminal recourse; if subjected to identical forcible non-consensual penetration by her spouse, the law denies her the protection of rape law.
- The differentia has no rational nexus to the object of the law, which is the prohibition of non-consensual sexual violence. Marriage cannot operate as an unconstitutional license to commit non-consensual violence.

2. Article 21 (Bodily Autonomy, Privacy, and Dignity):
- In K.S. Puttaswamy v. Union of India (2017), a 9-Judge Bench declared that bodily integrity and decisional autonomy are core constituents of privacy. A woman's right to control her own body cannot be surrendered upon entering marriage.
- In Joseph Shine v. Union of India (2019), the Supreme Court struck down criminal adultery (Section 497 IPC), stating: "A woman does not enter marriage as the property of her husband. Matrimonial sanctity cannot be preserved at the altar of female dignity and equality."

3. The Stepping Stone: Independent Thought (2017):
In Independent Thought v. Union of India, the Supreme Court struck down the exception protecting child-rape of wives between 15 and 18 years, establishing that statutory exceptions cannot override fundamental rights to bodily integrity.

III. THE DELHI HIGH COURT SPLIT VERDICT (2022):
In RIT Foundation v. Union of India (2022), the Division Bench delivered a split verdict:
- Justice Rajiv Shakdher struck down Exception 2, ruling that non-consensual sex is rape regardless of matrimonial ties, and denying rape charges violates Articles 14 and 21.
- Justice C. Hari Shankar upheld the exception, reasoning that marriage involves reciprocal conjugal obligations, that the distinction between married and unmarried intercourse is an intelligible differentia, and that creating an offence of marital rape is a legislative prerogative.

CONCLUSION:
The doctrine of implied marital consent belongs to an archaic era of patriarchy. A modern constitutional democracy governed by Articles 14 and 21 cannot permit marriage to serve as a complete shield for non-consensual sexual violence.`,
    scoringRubric: [
      { criterion: 'Colonial origin (Hale doctrine) and statutory matrix in IPC/BNS', marks: 2.5 },
      { criterion: 'Article 14 analysis (arbitrary classification & intelligible differentia)', marks: 3.5 },
      { criterion: 'Article 21 privacy, bodily autonomy, Puttaswamy, & Joseph Shine', marks: 4 },
      { criterion: 'Independent Thought (2017) and Delhi HC Split Verdict (2022)', marks: 3.5 },
      { criterion: 'Constitutional balance and concise conclusion', marks: 1.5 }
    ]
  },
  {
    id: 'mains-15m-extradition-sovereign-assurances',
    title: 'Extradition Jurisprudence, Dual Criminality & Sovereign Assurances under Constitutional Lens',
    topicId: 'art-21-right-to-life-liberty',
    marksCategory: 15,
    examCategory: 'PROSECUTION',
    examsAppeared: ['CBI Public Prosecutor 2019, 2023', 'UPSC Law Optional 2022', 'DJS 2023'],
    typicalMarks: 15,
    targetWordLimit: '300–350 Words | Time: ~11 Mins',
    targetWordMin: 280,
    targetWordMax: 380,
    estimatedPages: '1.5 Pages (~35 lines)',
    targetTimeMinutes: 11,
    questionText: 'Analyze the legal principles governing Extradition under the Extradition Act, 1962 with special emphasis on the "Rule of Speciality", "Dual Criminality", and Sovereign Assurances. How far are Indian Courts bound by sovereign assurances given to foreign states regarding sentence limits? Discuss with reference to Abu Salem v. State of Maharashtra.',
    coreIssues: [
      'Dual Criminality: Offence must be criminal in both requesting and requested States.',
      'Rule of Speciality (Section 21 Extradition Act): Fugitive can be tried only for the specific offences for which extradition was granted.',
      'Sovereign Assurances given under international diplomacy (e.g. assurance against death penalty or life imprisonment exceeding 25 years).',
      'Abu Salem v. State of Maharashtra (2022): Separation of powers between judicial sentencing and executive compliance with sovereign pledges.'
    ],
    examinerExpectation:
      'Candidate must define the core doctrines: Dual Criminality, Political Offence exception, and Rule of Speciality (Sec 21). Focus heavily on Abu Salem (2022, 2-Judge Bench): Courts must pass sentence according to statutory law, but the Executive/President under Art 72 is bound to honor the 25-year sovereign assurance upon completion of the term.',
    essentialCitations: [
      'Smt. Dayawanti v. Union of India (1987 Del HC)',
      'Abu Salem Abdul Kayyum Ansari v. State of Maharashtra ((2011) 11 SCC 214)',
      'Abu Salem v. State of Maharashtra (2022 INSC 704 / (2022) 8 SCC 315)'
    ],
    hoverIntel: {
      topicName: 'Extradition, Rule of Speciality & Sovereign Assurances (Abu Salem 2022)',
      topicPillar: 'International Law & Criminal Jurisprudence (Articles 21, 72, Extradition Act)',
      examImportance: '⭐⭐⭐⭐⭐ High Yield Prosecution Landmark',
      examFrequency: 'Direct problem in CBI Prosecutor and Judicial Mains Paper',
      weightagePattern: '15 Marks • 300–350 Words (1.5 Pages)',
      targetTimeMinutes: 11,
      examinerTrapWarning:
        'Trap Alert: Did the Supreme Court reduce Abu Salem\'s life sentence to 25 years? NO! The Court held that the JUDICIARY cannot alter a mandatory life sentence based on executive promises; however, the EXECUTIVE (President under Art 72) is bound to remit the sentence once 25 years elapse!',
      recentTrendAlert: 'Extensively applied in ongoing extradition proceedings of Vijay Mallya, Nirav Modi, and Tahawwur Rana.',
      coreArticles: ['Article 21', 'Article 72', 'Article 161', 'Section 21 Extradition Act'],
      benchmarkCases: ['Abu Salem (2011)', 'Abu Salem (2022)']
    },
    answerBlueprint: {
      step1Intro: 'Extradition Foundation: Extradition is the formal surrender of an accused or convicted person by one State to another pursuant to treaty or reciprocity under the Extradition Act, 1962.',
      step2DoctrinalCore: 'Two Cornerstone Doctrines: (1) Dual Criminality (the act must constitute an extraditable crime in both nations); (2) Rule of Speciality (Section 21 Extradition Act: The extradited person cannot be tried for any offence committed prior to surrender other than the extradited offence).',
      step3PrecedentEvolution: 'The Abu Salem Dilemma: India extradited 1993 Mumbai blasts convict Abu Salem from Portugal in 2005 upon a solemn sovereign assurance given by Deputy Prime Minister L.K. Advani that he would not face death or imprisonment exceeding 25 years.',
      step4Conclusion: 'Supreme Court Ruling in Abu Salem (2022): Sanjay Kishan Kaul J. demarcated constitutional roles: Courts must apply domestic penal statutes independently and sentence according to law (life imprisonment). However, the Government of India is bound by sovereign estoppel under international law, and the President under Article 72 must remit the sentence upon completion of 25 years.'
    },
    fullModelAnswer: `I. FUNDAMENTAL DOCTRINES OF EXTRADITION:
Extradition under the Extradition Act, 1962 is rooted in international comity and treaty obligations, governed by three core principles:
1. Principle of Dual Criminality: The alleged conduct must constitute an actionable criminal offence under the penal laws of both the requesting State (India) and the requested State.
2. Political Offence Exception (Section 31(a)): Extradition is barred if the offence is of a political character.
3. Rule of Speciality (Section 21): A fugitive surrendered by a foreign State can be prosecuted ONLY for the specific offences for which extradition was granted, and cannot be detained or tried for any other prior offence without the consent of the extraditing country.

II. SOVEREIGN ASSURANCES AND JUDICIAL INDEPENDENCE:
When India sought the extradition of gangster Abu Salem from Portugal in 2002, the Portuguese Constitution prohibited extradition for offences carrying the death penalty or indefinite life imprisonment. The Government of India, through the Deputy Prime Minister, tendered a "Sovereign Assurance" that Salem would not be sentenced to death or imprisoned for a term exceeding 25 years.
Salem was subsequently convicted for the 1993 Bombay Blasts and sentenced to life imprisonment under TADA/IPC. He appealed, contending that the Indian courts were bound by the 25-year sovereign assurance.

III. RATIO OF ABU SALEM V. STATE OF MAHARASHTRA (2022):
A 2-Judge Bench of the Supreme Court (Sanjay Kishan Kaul and M.M. Sundresh, JJ.) clarified the separation of powers between judicial sentencing and executive diplomacy:
1. Judiciary is Not Bound by Executive Assurances:
Judicial sentencing is governed strictly by the domestic statute. The judiciary cannot alter or truncate a lawful sentence of life imprisonment merely because the Executive gave a diplomatic undertaking to a foreign power.
2. Sovereign Commitment Must be Honored by Executive:
The Executive is bound by the doctrine of sovereign estoppel and international comity. The assurance given to Portugal represents the word of the Republic of India.
3. Constitutional Reconciliation via Article 72:
The Supreme Court held that once the 25-year period of incarceration is completed (taking into account custody from 2005 to 2030), the Executive Government is constitutionally obligated to advise the President/Governor to exercise powers of commutation/remission under Articles 72/161 to release the convict.`,
    scoringRubric: [
      { criterion: 'Explanation of Dual Criminality, Political Offence, & Rule of Speciality', marks: 3.5 },
      { criterion: 'Facts and constitutional issue of Portugal sovereign assurance in Abu Salem', marks: 3.5 },
      { criterion: 'Judicial sentencing vs executive sovereign assurance demarcation', marks: 4 },
      { criterion: 'Reconciliation via Articles 72/161 clemency and international comity', marks: 4 }
    ]
  },
  {
    id: 'mains-15m-interstate-trade-part-xiii',
    title: 'Freedom of Inter-State Trade and Commerce under Part XIII (Articles 301–304) vs State Regulatory Powers',
    topicId: 'art-246-seventh-schedule-federalism',
    marksCategory: 15,
    examCategory: 'UPSC_LAW',
    examsAppeared: ['UPSC Law Optional 2017, 2021', 'DJS 2018', 'UP PCS-J 2022'],
    typicalMarks: 15,
    targetWordLimit: '300–350 Words | Time: ~11 Mins',
    targetWordMin: 280,
    targetWordMax: 380,
    estimatedPages: '1.5 Pages (~35 lines)',
    targetTimeMinutes: 11,
    questionText: 'Critically analyze the constitutional framework governing freedom of trade, commerce, and intercourse under Part XIII of the Constitution. Trace the judicial conflict from Atiabari and Automobile Transport to the 9-Judge Bench decision in Jindal Stainless Ltd. (2016).',
    coreIssues: [
      'Article 301: Free trade throughout the territory of India.',
      'Parliament\'s powers under Articles 302 and 303 (public interest, non-discrimination).',
      'State powers under Article 304(a) (non-discriminatory taxes on imported goods) and Article 304(b) (reasonable restrictions in public interest with Presidential sanction).',
      'The "Compensatory Tax Theory" of Automobile Transport overruled in Jindal Stainless (2016).'
    ],
    examinerExpectation:
      'Candidate must trace Part XIII: Article 301 guarantee vs State taxing power. Detail Atiabari (1961 - direct and immediate impediment test) and Automobile Transport (1962 - compensatory tax exception). Detail how the 9-Judge Bench in Jindal Stainless (2016, 7:2) buried compensatory tax doctrine, holding taxes are not restrictions per se unless discriminatory under Art 304(a).',
    essentialCitations: [
      'Atiabari Tea Co. v. State of Assam (AIR 1961 SC 232)',
      'Automobile Transport (Rajasthan) Ltd. v. State of Rajasthan (AIR 1962 SC 1406)',
      'Jindal Stainless Ltd. v. State of Haryana ((2017) 12 SCC 1, 9-Judge Bench)'
    ],
    hoverIntel: {
      topicName: 'Freedom of Inter-State Trade & Entry Tax (Part XIII & Jindal Stainless)',
      topicPillar: 'Part XIII: Trade, Commerce and Intercourse within the Territory of India (Articles 301–307)',
      examImportance: '⭐⭐⭐⭐⭐ High Yield Constitutional Essay',
      examFrequency: 'Every 2-3 years in UPSC Law Optional and Higher Judicial Mains',
      weightagePattern: '15 Marks • 300–350 Words (1.5 Pages)',
      targetTimeMinutes: 11,
      examinerTrapWarning:
        'Trap Alert: Do not cite the "Compensatory Tax" doctrine as valid law today! The 9-Judge Constitution Bench in Jindal Stainless (2016) explicitly OVERRULED Automobile Transport and abolished the concept of compensatory tax!',
      recentTrendAlert: 'Critical foundation for GST federalism and unified national market jurisprudence.',
      coreArticles: ['Article 301', 'Article 302', 'Article 303', 'Article 304'],
      benchmarkCases: ['Atiabari Tea Co. (1961)', 'Automobile Transport (1962)', 'Jindal Stainless (2016)']
    },
    answerBlueprint: {
      step1Intro: 'Economic Unity Objective: Part XIII was designed to prevent regional economic Balkanization, ensuring that India remains a single economic unit (Article 301: "trade, commerce and intercourse... shall be free").',
      step2DoctrinalCore: 'Historical Division: (1) Atiabari (1961, 5-Judge Bench): Taxes that directly and immediately restrict flow of trade violate Art 301; (2) Automobile Transport (1962, 7-Judge Bench): Created the judicial concept of "Compensatory Taxes" (taxes facilitating trade, like road upkeep, are exempt from Art 301).',
      step3PrecedentEvolution: 'The 9-Judge Resolution in Jindal Stainless (2016, 7:2): Overruled Automobile Transport. Taxes are not restrictions per se under Article 301; they are sovereign fiscal impositions. Article 301 is violated only if a tax is facially or operationally DISCRIMINATORY between local goods and goods imported from other States.',
      step4Conclusion: 'Article 304(a) Balance: States can levy Entry Tax provided the rate does not discriminate against outside goods. Economic unity co-exists with fiscal federalism.'
    },
    fullModelAnswer: `I. THE CONSTITUTIONAL SCHEME OF PART XIII:
The objective of Part XIII is to dismantle provincial economic barriers and ensure free movement of goods across India:
- Article 301: Proclaims that trade, commerce, and intercourse throughout India shall be free.
- Article 302: Authorizes Parliament to impose restrictions in the "public interest".
- Article 304(a): Permits States to levy non-discriminatory taxes on goods imported from other States similar to local goods.
- Article 304(b): Empowers States to impose reasonable restrictions in public interest, subject to previous Presidential sanction.

II. THE HISTORICAL EVOLUTION:
1. Atiabari Tea Co. v. State of Assam (1961):
A 5-Judge Bench held that taxing laws are not outside Part XIII. If a tax operates directly and immediately to restrict the physical flow of goods across State borders, it violates Article 301 unless saved by Article 304(b).
2. Automobile Transport v. State of Rajasthan (1962):
A 7-Judge Bench devised the "Compensatory Tax Theory": Taxes levied to provide infrastructure or maintenance of facilities (e.g. roads, bridges) that facilitate trade do not violate Article 301 and do not need Presidential assent.

III. THE 9-JUDGE BENCH WATERSHED: JINDAL STAINLESS (2016):
In Jindal Stainless Ltd. v. State of Haryana (2017), a 9-Judge Bench (7:2 majority led by CJI T.S. Thakur) definitively settled the law on Entry Tax:
1. Overruling Compensatory Tax: The Court buried the "compensatory tax" theory, holding that it had no textual basis in the Constitution and resulted in insurmountable judicial confusion.
2. Tax is Not a Restriction: Taxation per se is an attribute of sovereign federal power. A non-discriminatory tax does not violate Article 301.
3. The Non-Discrimination Benchmark (Article 304(a)): Article 301 is violated only if a tax discriminates against goods imported from sister States to protect local industry. If the tax applies uniformly to both locally manufactured and imported goods, it is valid under Article 304(a).

Conclusion: Jindal Stainless reconciled national economic integration with the fiscal autonomy of States, providing the conceptual foundation for India's unified Goods and Services Tax (GST) regime.`,
    scoringRubric: [
      { criterion: 'Structure of Part XIII: Articles 301, 302, 304(a) & 304(b)', marks: 3 },
      { criterion: 'Atiabari direct and immediate test vs Automobile Transport compensatory doctrine', marks: 3.5 },
      { criterion: 'Jindal Stainless (2016) 9-Judge Bench ratio (overruling compensatory tax)', marks: 4.5 },
      { criterion: 'Article 304(a) non-discrimination test and GST federalism impact', marks: 4 }
    ]
  },
  {
    id: 'mains-15m-same-sex-marriage-supriyo',
    title: 'Marriage Equality, Civil Union & Institutional Competence: Supriyo v. Union of India (2023)',
    topicId: 'art-21-right-to-life-liberty',
    marksCategory: 15,
    examCategory: 'DJS',
    examsAppeared: ['DJS 2024', 'UPSC Law Optional 2024', 'UP PCS-J 2024'],
    typicalMarks: 15,
    targetWordLimit: '300–350 Words | Time: ~11 Mins',
    targetWordMin: 280,
    targetWordMax: 380,
    estimatedPages: '1.5 Pages (~35 lines)',
    targetTimeMinutes: 11,
    questionText: 'Is the right to marry a Fundamental Right under Part III of the Constitution? Critically examine the 5-Judge Constitution Bench judgment in Supriyo @ Supriya Chakraborty v. Union of India (2023). Analyze the debate on judicial law-making versus legislative domain regarding the Special Marriage Act, 1954.',
    coreIssues: [
      'Whether Article 21 includes a constitutional right to marry.',
      'Interpretation of Special Marriage Act, 1954: Gender-neutral reading vs statutory disruption.',
      'Right to Civil Union and Queer Adoption (CARA Regulations).',
      'Institutional competence and separation of powers: Judiciary vs Parliament.'
    ],
    examinerExpectation:
      'Candidate must analyze the 5-Judge Bench in Supriyo (2023): Unanimous holding that there is NO unqualified fundamental right to marry under Part III. 3:2 majority (Bhat, Hima Kohli, Pardiwala JJ. vs Chandrachud CJI & Kaul J.) holding that creating a civil union or modifying adoption regulations falls in Parliament\'s domain.',
    essentialCitations: [
      'Navtej Singh Johar v. Union of India ((2018) 1 SCC 1)',
      'Shafin Jahan v. Asokan K.M. ((2018) 16 SCC 368)',
      'Supriyo @ Supriya Chakraborty v. Union of India (2023 INSC 920 / (2023) 10 SCC 1)'
    ],
    hoverIntel: {
      topicName: 'Same-Sex Marriage & Civil Union: Supriyo (2023)',
      topicPillar: 'Part III: Equality, Liberty and Separation of Powers (Articles 14, 19, 21)',
      examImportance: '⭐⭐⭐⭐⭐ Historic 5-Judge Constitutional Ruling',
      examFrequency: 'Top contemporary question in DJS and UPSC Law Optional',
      weightagePattern: '15 Marks • 300–350 Words (1.5 Pages)',
      targetTimeMinutes: 11,
      examinerTrapWarning:
        'Trap Alert: Do not write that the Supreme Court was unanimous on all points! The Court was UNANIMOUS (5-0) that marriage is NOT a fundamental right and SMA cannot be re-written; however, it was SPLIT (3-2) on whether queer couples have a right to recognized "civil unions" and adoption rights under CARA!',
      recentTrendAlert: 'The Central Government constituted a high-level committee headed by the Cabinet Secretary to examine administrative rights of queer partners.',
      coreArticles: ['Article 14', 'Article 19(1)(a)', 'Article 21'],
      benchmarkCases: ['Navtej Johar (2018)', 'Shafin Jahan (2018)', 'Supriyo (2023)']
    },
    answerBlueprint: {
      step1Intro: 'The Petitioners\' Case: Following the decriminalization of homosexuality in Navtej Johar (2018) and recognition of intimacy in Puttaswamy (2017), queer petitioners sought recognition of same-sex marriage under the Special Marriage Act, 1954 (SMA).',
      step2DoctrinalCore: 'Unanimous Findings (5-0): (1) There is no unqualified fundamental right to marry; marriage is a creature of statute or personal law. (2) The SMA cannot be rewritten by judicial interpretation to substitute "spouse" for "husband/wife", as it would disrupt hundreds of interconnected statutory provisions (succession, maintenance, domestic violence).',
      step3PrecedentEvolution: 'The 3:2 Split on Civil Union & Adoption: Minority (CJI Chandrachud & Kaul J.) recognized a right to enter into civil unions and struck down CARA regulations barring unmarried couples from adopting. Majority (Bhat, Hima Kohli, Pardiwala JJ.) held that creating legal status for unions and altering adoption criteria belongs exclusively to Parliament.',
      step4Conclusion: 'Institutional Competence: The Court recognized the right against discrimination for queer persons and recorded the Union\'s undertaking to form a committee to address administrative entitlements.'
    },
    fullModelAnswer: `I. CONTEXT & THE CONSTITUTIONAL CHALLENGE:
Following Navtej Singh Johar (2018) (decriminalization of Section 377 IPC) and Shafin Jahan (2018) (autonomy to choose partner), queer petitioners approached the Supreme Court seeking legal recognition of same-sex marriages under the Special Marriage Act (SMA), 1954, claiming denial of marital status violated Articles 14, 15, 19, and 21.

II. UNANIMOUS HOLDINGS (5-0 BENCH):
A 5-Judge Constitution Bench headed by CJI D.Y. Chandrachud unanimously held:
1. No Fundamental Right to Marry: The Constitution does not guarantee an unqualified fundamental right to marry. Marriage is a social institution regulated by personal laws and state enactments.
2. Judicial Restraint under SMA: The Court cannot replace binary terms ("man/woman", "husband/wife") in the SMA with gender-neutral words ("spouse/person"). Rewriting the SMA would create a cascade of unintended legal anomalies across divorce, inheritance, maintenance, and domestic violence laws, transgressing the boundary of judicial legislation.

III. THE 3:2 SPLIT ON CIVIL UNIONS AND ADOPTION:
The Bench fractured sharply on legal recognition of partnerships and adoption:
- Minority (CJI Chandrachud & Kaul J.): Held that the right to enter into a civil union and cohabit is an intrinsic component of Article 21. They struck down Regulation 5(3) of CARA guidelines, holding that excluding unmarried queer couples from joint adoption is discriminatory.
- Majority (Justices S. Ravindra Bhat, Hima Kohli, and J.B. Pardiwala): Ruled that the Court cannot mandate the State to create a new legal status of "civil union". The regulation of family structures and adoption criteria involves multifaceted social choices that belong solely to the Legislature.

IV. OUTCOME AND DIRECTIONS:
The Court unanimously affirmed that transgender persons in heterosexual relationships have the right to marry under existing laws. The Court accepted the Solicitor General's assurance that a high-level Cabinet Committee will formulate administrative protections (banking, pensions, hospital visitation) for queer couples.`,
    scoringRubric: [
      { criterion: 'Context from Navtej Johar and nature of the challenge to SMA', marks: 2.5 },
      { criterion: 'Unanimous 5-0 holdings: No fundamental right to marry & limits on rewriting SMA', marks: 4 },
      { criterion: 'Detailed analysis of the 3:2 split on Civil Unions and CARA adoption', marks: 4.5 },
      { criterion: 'Separation of powers synthesis and executive committee outcome', marks: 4 }
    ]
  },
  {
    id: 'mains-15m-cbi-ed-sanction-prosecution',
    title: 'CBI, ED & Statutory Investigating Agencies: Independence, Sanction for Prosecution & Judicial Scrutiny',
    topicId: 'art-21-right-to-life-liberty',
    marksCategory: 15,
    examCategory: 'PROSECUTION',
    examsAppeared: ['CBI Public Prosecutor 2021, 2023', 'DJS 2022', 'UP APP 2023'],
    typicalMarks: 15,
    targetWordLimit: '300–350 Words | Time: ~11 Mins',
    targetWordMin: 280,
    targetWordMax: 380,
    estimatedPages: '1.5 Pages (~35 lines)',
    targetTimeMinutes: 11,
    questionText: 'Discuss the constitutional and statutory safeguards governing the independent functioning of premier investigation agencies like the CBI and the Enforcement Directorate (ED). Analyze the requirement of prior sanction under Section 197 CrPC / Section 218 BNSS and Section 19 of the Prevention of Corruption Act in light of Vineet Narain and recent judgments.',
    coreIssues: [
      'Vineet Narain v. Union of India (1998): Insulating investigation agencies from executive interference (CVC oversight and fixed tenure).',
      'The single directive controversy (Section 6A DSPE Act struck down in Subramanian Swamy).',
      'Sanction for prosecution: Section 197 CrPC (Sec 218 BNSS) and Section 19 PC Act—purpose and exceptions.',
      'Vijay Madanlal Choudhary (2022) and Manish Sisodia (2024): Judicial oversight over arrest, prolonged detention, and speedy trial under PMLA.'
    ],
    examinerExpectation:
      'Candidate must explain Vineet Narain (1998) tenure protection and statutory independence. Discuss Section 6A DSPE Act invalidation (Subramanian Swamy 2014). Detail the rationale of sanction for prosecution (protecting honest officers vs shield for corruption). Cite Manish Sisodia (2024) establishing that PMLA twin bail conditions cannot trump Article 21 speedy trial.',
    essentialCitations: [
      'Vineet Narain v. Union of India ((1998) 1 SCC 226)',
      'Subramanian Swamy v. Director, CBI ((2014) 8 SCC 682)',
      'Vijay Madanlal Choudhary v. Union of India (2022 SCC OnLine SC 929)',
      'Manish Sisodia v. Directorate of Enforcement (2024 INSC 595)'
    ],
    hoverIntel: {
      topicName: 'CBI, ED & Sanction for Prosecution: Powers & Judicial Bounds',
      topicPillar: 'Part III & Part V: Criminal Due Process, Rule of Law & Agency Independence',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield Prosecution Core',
      examFrequency: 'Every year in CBI Public Prosecutor and State APP/APO Mains',
      weightagePattern: '15 Marks • 300–350 Words (1.5 Pages)',
      targetTimeMinutes: 11,
      examinerTrapWarning:
        'Trap Alert: Prior sanction is NOT required for corrupt acts that have no nexus with official duty! Bribes, extortion, and laundering money can NEVER form part of the discharge of official functions!',
      recentTrendAlert: 'Stringent statutory bail conditions under Section 45 PMLA balanced against Article 21 by Supreme Court in Manish Sisodia (2024).',
      coreArticles: ['Article 14', 'Article 21', 'Sec 197 CrPC / 218 BNSS', 'Sec 19 PC Act'],
      benchmarkCases: ['Vineet Narain (1998)', 'Subramanian Swamy (2014)', 'Manish Sisodia (2024)']
    },
    answerBlueprint: {
      step1Intro: 'The Dilemma of Investigating Agencies: Balancing effective law enforcement against corruption and financial crime with the imperative of protecting citizens from selective political harassment.',
      step2DoctrinalCore: 'Vineet Narain (1998, 3-Judge Bench): Laid down guidelines to insulate CBI and ED: (1) Statutory status to CVC, (2) Minimum 2-year fixed tenure for Directors, (3) Striking down the Single Directive requiring prior government approval for investigating senior officers (reiterated in Subramanian Swamy 2014 striking down Sec 6A DSPE Act).',
      step3PrecedentEvolution: 'Sanction for Prosecution (Section 197 CrPC / 218 BNSS & Section 19 PC Act): A protective shield to insulate public servants from frivolous prosecution for acts done in discharge of official duty. However, taking bribes or falsifying records cannot claim the cover of official duty.',
      step4Conclusion: 'PMLA and Article 21 Oversight: In Manish Sisodia (2024) and Prem Prakash (2024), the Supreme Court ruled that stringent bail filters (Section 45 PMLA) cannot eclipse the fundamental right to a speedy trial under Article 21.'
    },
    fullModelAnswer: `I. INSTITUTIONAL INDEPENDENCE: VINEET NARAIN (1998):
In Vineet Narain v. Union of India (1998), the Supreme Court addressed political interference in premier investigating agencies (CBI and ED):
1. CVC Oversight: The Central Vigilance Commission was accorded statutory superintendence over the CBI for corruption inquiries.
2. Fixed Tenure: Directors of CBI and ED were granted a minimum statutory tenure of two years, free from arbitrary transfer.
3. Striking Down Prior Permission: The "Single Directive" requiring executive approval before probing officers of Joint Secretary rank and above was quashed. When Parliament re-enacted this bar as Section 6A of the DSPE Act, a Constitution Bench in Subramanian Swamy v. Director, CBI (2014) struck it down as violative of Article 14, holding that corruption by high officials cannot enjoy privileged immunity.

II. SANCTION FOR PROSECUTION (SECTION 197 CrPC / 218 BNSS & SEC 19 PC ACT):
1. Purpose: Sanction is an essential filter to protect honest public servants from retaliatory, vexatious litigation.
2. The Reasonable Connection Test: Sanction is attracted ONLY when the alleged act is reasonably connected to the discharge of official duties (Matajog Dobey, 1956).
- If a police officer opens fire to quell a riot, Section 197 protects them.
- However, accepting a bribe, siphoning public funds, or fabricating records is NEVER part of official duty; no prior sanction is required for such corrupt acts.
3. Statutory Timeframe: In Subramanian Swamy (2012), the Court set a 3-month deadline for sanctioning authorities to decide sanction requests, preventing pocket vetos.

III. PMLA POWERS AND ARTICLE 21 SPEEDY TRIAL:
While Vijay Madanlal Choudhary (2022) upheld the stringent twin bail conditions of Section 45 PMLA, recent 2024 judgments have re-anchored criminal justice in Article 21:
- In Manish Sisodia v. Directorate of Enforcement (2024 INSC 595), the Supreme Court reiterated that "Bail is the rule, jail is the exception," even under special statutes.
- Prolonged incarceration without trial violates Article 21, and statutory bail restrictions cannot override the constitutional guarantee of liberty and speedy justice.`,
    scoringRubric: [
      { criterion: 'Vineet Narain (1998) guidelines and CVC/tenure safeguards', marks: 3.5 },
      { criterion: 'Subramanian Swamy (2014) striking down Section 6A DSPE Act', marks: 3.5 },
      { criterion: 'Sanction jurisprudence: Reasonable connection test & exceptions for corruption', marks: 4 },
      { criterion: 'PMLA Section 45 vs Article 21 speedy trial (Manish Sisodia 2024)', marks: 4 }
    ]
  },

  // =========================================================================
  // 20 MARKS+ / 450–550 WORDS (TIER 4: COMPREHENSIVE CONSTITUTIONAL SYNTHESIS)
  // =========================================================================
  {
    id: 'mains-20m-bulldozer-justice-demolitions',
    title: 'Constitutionalism, Rule of Law & "Bulldozer Justice": Pan-India Demolition Directives (2024)',
    topicId: 'art-21-right-to-life-liberty',
    marksCategory: 20,
    examCategory: 'UP_PCSJ',
    examsAppeared: ['UP PCS-J 2024 Model', 'DJS 2024', 'UPSC Law Optional 2024'],
    typicalMarks: 20,
    targetWordLimit: '450–500 Words | Time: ~15 Mins',
    targetWordMin: 400,
    targetWordMax: 550,
    estimatedPages: '2.0 Pages (~45 lines)',
    targetTimeMinutes: 15,
    questionText: 'Can the State demolish the residential or commercial properties of an accused or convict as an extra-legal punitive measure? Examine the constitutional validity of "Bulldozer Justice" on the anvil of the Rule of Law, Separation of Powers, and Article 21. Discuss the landmark Pan-India guidelines issued by the Supreme Court in In Re: Directions in the Matter of Demolition of Structures (2024).',
    coreIssues: [
      'Rule of law and prohibition on State lawlessness (Articles 14 and 21).',
      'Separation of Powers: Executive cannot usurp the judicial power of punishment.',
      'Shelter as a fundamental right under Article 21 (Olga Tellis and Chameli Singh).',
      'Collective punishment violating individual criminal responsibility.',
      'The 2024 Pan-India Supreme Court directives: 15-day notice, digital portal, personal hearing, videography, and officer restitution.'
    ],
    examinerExpectation:
      'Candidate must analyze the 2024 Bench ruling (Justices B.R. Gavai and K.V. Viswanathan). Emphasize: (1) Executive cannot act as judge and executioner; (2) Demolishing homes of accused is collective punishment against innocent family members; (3) Right to shelter under Art 21; (4) Detailed 2024 guidelines: 15-day notice, registered post, digital geo-tagging, personal hearing, videography, and personal restitution by guilty officers.',
    essentialCitations: [
      'Olga Tellis v. Bombay Municipal Corporation ((1985) 3 SCC 545)',
      'Chameli Singh v. State of U.P. ((1996) 2 SCC 549)',
      'In Re: Directions in the Matter of Demolition of Structures (2024 INSC 866)'
    ],
    hoverIntel: {
      topicName: 'Bulldozer Justice & Pan-India Demolition Directives (2024)',
      topicPillar: 'Part III: Rule of Law, Due Process & Right to Shelter (Articles 14 & 21)',
      examImportance: '⭐⭐⭐⭐⭐ Historic 2024 Constitutional Landmark',
      examFrequency: 'Guaranteed flagship question in upcoming Judicial Mains and UPSC Law',
      weightagePattern: '20 Marks • 450–500 Words (2.0 Pages)',
      targetTimeMinutes: 15,
      examinerTrapWarning:
        'Trap Alert: The Supreme Court did NOT bar demolition of unauthorized encroachments on public roads, footpaths, or water bodies! Clarify that the guidelines apply to punitive demolitions against accused persons and municipal violations in private properties!',
      recentTrendAlert: 'Supreme Court delivered the judgment on November 13, 2024, warning of contempt and personal salary recovery against bulldozing officers.',
      coreArticles: ['Article 14', 'Article 21', 'Article 300A'],
      benchmarkCases: ['Olga Tellis (1985)', 'Chameli Singh (1996)', 'Demolition Directives (2024)']
    },
    answerBlueprint: {
      step1Intro: 'The Phenomenon of Bulldozer Justice: The emerging executive practice of summarily demolishing the homes and establishments of persons accused of criminal offences without prior notice or trial.',
      step2DoctrinalCore: 'Constitutional Violations: (1) Subversion of Rule of Law & Separation of Powers: The Executive cannot adjudicate guilt or pronounce punishment. (2) Collective Punishment: Demolishing a dwelling renders elderly parents, spouses, and children homeless for the alleged crime of one family member, violating criminal jurisprudence.',
      step3PrecedentEvolution: 'Right to Shelter under Article 21: Olga Tellis (1985) and Chameli Singh (1996) recognized that the right to life encompasses the right to shelter and dignified livelihood. Article 300A bars dispossession without authority of law.',
      step4Conclusion: 'Pan-India Directives (November 13, 2024): Justices B.R. Gavai and K.V. Viswanathan laid down binding nationwide directions: (i) Minimum 15-day prior notice by registered post and pasted on premises; (ii) Creation of a digital portal; (iii) Mandatory personal hearing and reasoned order; (iv) 15-day breathing space after final order; (v) Videography of demolition; (vi) Personal liability of officers (restitution from salary and contempt) for violations.'
    },
    fullModelAnswer: `I. THE CONSTITUTIONAL CHALLENGE:
In recent years, State authorities increasingly deployed municipal bulldozers to demolish the homes and shops of persons accused of crimes immediately following communal clashes or public protests. This summary executive action—euphemistically termed "Bulldozer Justice"—was challenged before the Supreme Court as a blatant negation of the Rule of Law.

II. CONSTITUTIONAL FOUNDATIONS TRANSGRESSED:
1. Separation of Powers and Executive Usurpation:
Under the constitutional scheme, the Executive investigates offences, the Judiciary determines guilt, and punishment is executed strictly as sanctioned by penal statutes.
- No law authorizes the demolition of a person's home merely because they are accused or convicted of a crime.
- When the Executive assumes the mantle of prosecutor, judge, and executioner, the Rule of Law is subverted by authoritarian fiat.
2. Inadmissible Collective Punishment:
A residential house rarely belongs exclusively to the accused; it shelters aging parents, spouses, and minor children. Demolishing the home inflicts collective punishment upon innocent family members, violating the basic canon of individual criminal responsibility.
3. The Right to Shelter under Article 21:
In Olga Tellis (1985) and Chameli Singh (1996), the Supreme Court established that the right to shelter is an essential facet of the Right to Life with dignity. Summarily destroying a home leaves citizens destitute, directly violating Article 21 and Article 300A.

III. THE LANDMARK PAN-INDIA GUIDELINES (NOVEMBER 13, 2024):
In In Re: Directions in the Matter of Demolition of Structures (2024 INSC 866), a Bench comprising Justices B.R. Gavai and K.V. Viswanathan exercised powers under Article 142 to lay down mandatory pan-India procedural safeguards:
1. Mandatory 15-Day Prior Notice:
No demolition can occur without at least 15 days' written notice, served by registered post and conspicuously pasted on the property. The notice must specify the exact nature of the municipal violation, unauthorized construction area, and hearing date.
2. Digital Portal Integration:
Every municipal authority must establish a public digital portal within three months, uploading all demolition notices, responses, and orders with geo-tagging.
3. Personal Hearing and Reasoned Order:
The designated authority must conduct a personal hearing, record the noticee's objections, and pass a detailed speaking order. Demolition cannot proceed if compounding is permissible under municipal bylaws.
4. 15-Day Post-Order Buffer Period:
Even after a final rejection order, no demolition can take place for 15 days, providing the aggrieved citizen a fair window to seek judicial redress before the appellate court or High Court.
5. Videography and Personal Officer Liability:
The demolition process must be fully videographed. Any officer executing demolitions in violation of these guidelines will be held personally liable for restitution, cost of reconstruction from their personal salary, and contempt of court.

Exceptions: The guidelines do not shield unauthorized encroachments on public roads, footpaths, railway tracks, or water bodies.

CONCLUSION:
The Supreme Court restored constitutional sanity by ruling that the Executive cannot usurp judicial functions. The rule of law must prevail over the rule of the bulldozer.`,
    scoringRubric: [
      { criterion: 'Constitutional critique: Rule of law, separation of powers, collective punishment', marks: 4.5 },
      { criterion: 'Article 21 right to shelter & Article 300A property safeguards (Olga Tellis)', marks: 4 },
      { criterion: 'Detailed breakdown of the 2024 Pan-India 15-day notice and hearing directives', marks: 5.5 },
      { criterion: 'Personal financial & contempt liability on delinquent officers', marks: 3 },
      { criterion: 'Exceptions for public roads and overarching constitutional synthesis', marks: 3 }
    ]
  },
  {
    id: 'mains-20m-environmental-jurisprudence-public-trust',
    title: 'The Evolution of Environmental Jurisprudence: Public Trust Doctrine, Precautionary Principle & Climate Rights',
    topicId: 'art-21-right-to-life-liberty',
    marksCategory: 20,
    examCategory: 'UPSC_LAW',
    examsAppeared: ['UPSC Law Optional 2018, 2022', 'UP PCS-J 2018', 'DJS 2024'],
    typicalMarks: 20,
    targetWordLimit: '450–500 Words | Time: ~15 Mins',
    targetWordMin: 400,
    targetWordMax: 550,
    estimatedPages: '2.0 Pages (~45 lines)',
    targetTimeMinutes: 15,
    questionText: 'Trace the judicial evolution of Environmental Jurisprudence in India under Article 21 and 48A. Discuss the incorporation of the "Public Trust Doctrine", "Precautionary Principle", "Polluter Pays Principle", and the newly recognized "Right against Adverse Climate Change" in M.K. Ranjitsinh (2024).',
    coreIssues: [
      'Constitutionalization of environmental law: Article 21, 48A (State duty), and 51A(g) (fundamental duty of citizens).',
      'Absolute Liability (M.C. Mehta Oleum Gas, 1987) replacing Rylands v. Fletcher.',
      'Public Trust Doctrine in M.C. Mehta (Kamal Nath, 1997): State as trustee of natural resources.',
      'Precautionary and Polluter Pays Principles in Vellore Citizens (1996).',
      'M.K. Ranjitsinh v. Union of India (2024): 3-Judge Bench recognizing Right to be Free from Adverse Effects of Climate Change under Articles 14 and 21.'
    ],
    examinerExpectation:
      'Candidate must trace the trajectory: Article 21 expansion -> Absolute Liability (M.C. Mehta) -> Precautionary & Polluter Pays (Vellore Citizens) -> Public Trust Doctrine (Kamal Nath) -> Intergenerational Equity. Crown the answer with M.K. Ranjitsinh (2024, CJI Chandrachud) recognizing the distinct right against climate change.',
    essentialCitations: [
      'M.C. Mehta v. Union of India (Oleum Gas Leak, (1987) 1 SCC 395)',
      'Vellore Citizens\' Welfare Forum v. UOI ((1996) 5 SCC 647)',
      'M.C. Mehta v. Kamal Nath ((1997) 1 SCC 388)',
      'M.K. Ranjitsinh v. Union of India (2024 INSC 280)'
    ],
    hoverIntel: {
      topicName: 'Environmental Jurisprudence & The 2024 Climate Rights Landmark',
      topicPillar: 'Part III & Part IV: Articles 21, 48A, 51A(g) & Sustainable Development',
      examImportance: '⭐⭐⭐⭐⭐ High Yield Master Synthesis Essay',
      examFrequency: 'Every year in UPSC Law Optional and Higher Judicial Services',
      weightagePattern: '20 Marks • 450–500 Words (2.0 Pages)',
      targetTimeMinutes: 15,
      examinerTrapWarning:
        'Trap Alert: Do not stop at Vellore Citizens! You must include the April 2024 Constitution Bench judgment in M.K. Ranjitsinh, where the Supreme Court for the FIRST TIME declared the "Right against the adverse effects of climate change" as an independent Fundamental Right!',
      recentTrendAlert: 'Extensively discussed in ongoing debates balancing green energy infrastructure (solar lines) with biodiversity preservation (Great Indian Bustard).',
      coreArticles: ['Article 14', 'Article 21', 'Article 48A', 'Article 51A(g)'],
      benchmarkCases: ['Oleum Gas (1987)', 'Vellore Citizens (1996)', 'Kamal Nath (1997)', 'M.K. Ranjitsinh (2024)']
    },
    answerBlueprint: {
      step1Intro: 'Constitutional Triangle: Environmental protection is grounded in the triad of Article 21 (right to clean environment), Article 48A (DPSP: State duty to protect environment), and Article 51A(g) (Fundamental Duty of every citizen).',
      step2DoctrinalCore: 'The Core Common Law Doctrines: (1) Absolute Liability (M.C. Mehta 1987 - no exceptions for hazardous industries); (2) Polluter Pays & Precautionary Principle (Vellore Citizens 1996 - lack of scientific certainty cannot postpone environmental action); (3) Public Trust Doctrine (Kamal Nath 1997 - rivers, forests, and seashores held in trust for the public; cannot be privatized).',
      step3PrecedentEvolution: 'The 2024 Frontier: M.K. Ranjitsinh v. Union of India (2024, 3-Judge Bench led by CJI Chandrachud): Addressed underground power lines in Rajasthan threatening the endangered Great Indian Bustard. The Court explicitly recognized that the right to life under Article 21 and equality under Article 14 encompass a distinct "Right to be free from the adverse effects of climate change".',
      step4Conclusion: 'Intergenerational Equity: The jurisprudence has progressed from reactive pollution cleanup to proactive climate justice, protecting both present and future generations.'
    },
    fullModelAnswer: `I. THE CONSTITUTIONAL TRIAD:
The Indian Constitution contains a unique constitutional framework for ecological preservation, woven through:
- Article 21: Expanded to include the fundamental right to a clean, wholesome, and pollution-free environment (Subhash Kumar v. State of Bihar, 1991).
- Article 48A (42nd Amendment, 1976): Directs the State to protect and improve the environment, forests, and wildlife.
- Article 51A(g): Imposes a fundamental duty upon every citizen to protect the natural environment.

II. THE CLASSIC DOCTRINAL PILLARS:
1. Absolute Liability (M.C. Mehta v. Union of India, 1987):
In the Oleum Gas Leak case, CJI P.N. Bhagwati rejected the 19th-century exceptions to strict liability in Rylands v. Fletcher. Enterprises engaged in hazardous activities owe an absolute and non-delegable duty to the community; liability is strict and unbounded by statutory caps.
2. Precautionary and Polluter Pays Principles (Vellore Citizens, 1996):
CJI Kuldip Singh integrated customary international law into Article 21:
- Precautionary Principle: Environmental measures must anticipate, prevent, and attack the causes of environmental degradation. Where there are threats of serious damage, lack of full scientific certainty shall not be used as a reason for postponing cost-effective preventive measures.
- Polluter Pays Principle: Financial costs of preventing, controlling, and repairing damage rest on the polluter, including compensation to victims.
3. Public Trust Doctrine (M.C. Mehta v. Kamal Nath, 1997):
The Supreme Court held that natural resources—rivers, seashores, forests, and air—are held by the State in sovereign public trust for the enjoyment of the public at large. The State cannot convert ecological public trust property into private commercial ownership (striking down a motel lease on river Beas).

III. THE CLIMATE RIGHTS BREAKTHROUGH: M.K. RANJITSINH (2024):
In M.K. Ranjitsinh v. Union of India (2024 INSC 280), a 3-Judge Bench led by CJI D.Y. Chandrachud addressed the conflict between overhead power transmission lines for solar projects and the survival of the critically endangered Great Indian Bustard:
1. Autonomous Right Against Climate Change:
The Supreme Court elevated climate change from an environmental concern to a non-negotiable Fundamental Right:
"Articles 21 and 14 encompass a distinct fundamental right to be free from the adverse effects of climate change. The right to health and a clean environment cannot be realized without climate stability."
2. Climate Justice and Equality:
The Court noted that climate change disproportionately impacts marginalized populations, rural communities, and vulnerable ecosystems, violating Article 14 substantive equality.
3. Harmonious Balance:
The Court balanced biodiversity preservation with international commitments under the Paris Agreement to achieve net-zero carbon emissions, appointing an expert committee to identify underground cabling routes.

CONCLUSION:
Indian environmental jurisprudence has evolved from tortious compensation into an ecocentric rights paradigm. M.K. Ranjitsinh establishes India as a global judicial pioneer in constitutionalizing climate justice for current and unborn generations.`,
    scoringRubric: [
      { criterion: 'Constitutional framework: Articles 21, 48A, and 51A(g)', marks: 3 },
      { criterion: 'Absolute Liability doctrine in Oleum Gas (1987)', marks: 3 },
      { criterion: 'Precautionary, Polluter Pays (Vellore), & Public Trust (Kamal Nath) doctrines', marks: 5 },
      { criterion: 'Detailed breakdown of M.K. Ranjitsinh (2024) Climate Rights recognition', marks: 6 },
      { criterion: 'Intergenerational equity and concluding global significance', marks: 3 }
    ]
  },
  {
    id: 'mains-20m-parliamentary-privilege-sita-soren',
    title: 'Parliamentary Privileges vs Fundamental Rights: Searchlights, Keshav Singh to Sita Soren (2024)',
    topicId: 'art-105-194-parliamentary-privileges',
    marksCategory: 20,
    examCategory: 'UPSC_LAW',
    examsAppeared: ['UPSC Law Optional 2019, 2024', 'DJS 2024', 'UP PCS-J 2024'],
    typicalMarks: 20,
    targetWordLimit: '450–500 Words | Time: ~15 Mins',
    targetWordMin: 400,
    targetWordMax: 550,
    estimatedPages: '2.0 Pages (~45 lines)',
    targetTimeMinutes: 15,
    questionText: 'Analyze the constitutional relationship between Parliamentary Privileges under Articles 105 & 194 and Fundamental Rights under Part III. Trace the jurisprudence through Searchlights, Keshav Singh, and Raja Rampal, culminating in the 7-Judge Constitution Bench judgment in Sita Soren v. Union of India (2024) overruling P.V. Narasimha Rao.',
    coreIssues: [
      'Constitutional text of Article 105(2) and Article 194(2): Immunity for "anything said or any vote given".',
      'The Searchlight Case (1959): Privileges held not subject to Article 19(1)(a).',
      'Special Reference No. 1 of 1964 (Keshav Singh): Privileges subject to Article 21 and judicial scrutiny.',
      'Raja Rampal (2007): Legislative expulsion of corrupt MPs subject to limited judicial review.',
      'The Cash-for-Votes Overruling: Sita Soren (2024, 7-Judge Bench) unanimously overruling P.V. Narasimha Rao (1998) on bribery immunity.'
    ],
    examinerExpectation:
      'Candidate must trace the constitutional trajectory: Art 105/194 vs Part III. Discuss Searchlights (1959) and Keshav Singh (1964). Explain P.V. Narasimha Rao (1998, 3:2) which granted absurd immunity to bribe-takers who cast their vote. Detail how the 7-Judge Bench in Sita Soren (2024) unanimously overruled it, holding bribery is not protected by parliamentary privilege.',
    essentialCitations: [
      'M.S.M. Sharma v. Sri Krishna Sinha (Searchlight I, AIR 1959 SC 395)',
      'Special Reference No. 1 of 1964 (Keshav Singh, AIR 1965 SC 745)',
      'P.V. Narasimha Rao v. State (CBI/SPE) ((1998) 4 SCC 626)',
      'Raja Rampal v. Hon\'ble Speaker, Lok Sabha ((2007) 3 SCC 184)',
      'Sita Soren v. Union of India (2024 INSC 165, 7-Judge Bench)'
    ],
    hoverIntel: {
      topicName: 'Parliamentary Privileges & Bribery: Sita Soren Overruling (2024)',
      topicPillar: 'Part V & Part VI: Legislative Powers, Privileges & Immunities (Articles 105 & 194)',
      examImportance: '⭐⭐⭐⭐⭐ Historic 7-Judge Bench Landmark',
      examFrequency: 'Top recurring essay in UPSC Law Optional and Judicial Services',
      weightagePattern: '20 Marks • 450–500 Words (2.0 Pages)',
      targetTimeMinutes: 15,
      examinerTrapWarning:
        'Trap Alert: In P.V. Narasimha Rao (1998), the majority created a paradoxical anomaly: bribe-takers who voted were immune, but those who did not vote could be prosecuted! Highlight how Sita Soren (2024) eliminated this perverse anomaly!',
      recentTrendAlert: 'Delivered unanimously on March 4, 2024 by a 7-Judge Bench led by CJI D.Y. Chandrachud.',
      coreArticles: ['Article 105', 'Article 194', 'Article 21', 'Section 7/13 PC Act'],
      benchmarkCases: ['Searchlight (1959)', 'P.V. Narasimha Rao (1998)', 'Sita Soren (2024)']
    },
    answerBlueprint: {
      step1Intro: 'Constitutional Shield: Articles 105(2) and 194(2) guarantee that no legislator shall be liable in any court "in respect of anything said or any vote given by him in the Legislature."',
      step2DoctrinalCore: 'Early Judicial Interplay with Part III: (1) Searchlight I (1959): Majority held privileges prevail over free speech under Art 19(1)(a); (2) Keshav Singh (1964, 7-Judge Bench): Privileges are subordinate to Fundamental Rights under Articles 20 and 21, and High Court has jurisdiction to review detention orders issued by Speakers; (3) Raja Rampal (2007): Legislative expulsion of MPs taking cash for queries is subject to judicial review for legality.',
      step3PrecedentEvolution: 'The P.V. Narasimha Rao (1998) Blunder: A 3:2 majority held that MPs who took bribes and voted in a No-Confidence Motion were immune under Art 105(2), while Ajit Singh (who took a bribe but did not vote) was liable to prosecution. This created an absurd moral hazard.',
      step4Conclusion: 'The Sita Soren Watershed (2024, 7-Judge Bench): Unanimously overruled P.V. Narasimha Rao: (i) Bribery is complete the moment the bribe is accepted; it is independent of whether the vote is cast; (ii) Privileges are intended to protect democratic deliberation, not create a class of citizens immune from criminal law; (iii) Bribery destroys the moral foundation of representative democracy.'
    },
    fullModelAnswer: `I. CONSTITUTIONAL PROVISIONS AND OBJECTIVE:
Articles 105(2) and 194(2) grant immunity to Members of Parliament and State Legislatures:
"No member of Parliament shall be liable to any proceedings in any court in respect of anything said or any vote given by him in Parliament or any committee thereof."
The purpose of this privilege is to enable legislators to speak and vote fearlessly without dread of civil or criminal reprisals.

II. THE EVOLUTION: PRIVILEGES VS FUNDAMENTAL RIGHTS:
1. Searchlight I (M.S.M. Sharma, 1959):
A 5-Judge Bench held that parliamentary privilege under Article 194(3) was not subject to Article 19(1)(a) free speech. However, Subba Rao J. dissented, arguing that privileges must yield to fundamental rights.
2. Keshav Singh\'s Reference (1964):
A 7-Judge Bench clarified that the Legislature does not possess absolute sovereignty like the British House of Commons. Where a citizen is arrested for legislative contempt, the High Court possesses jurisdiction under Article 226 to examine whether the arrest violates Article 21 or Article 22.
3. Raja Rampal (Cash-for-Queries, 2007):
A Constitution Bench held that Parliament possesses power to expel corrupt members, but expulsion orders are subject to judicial review to test if they violate constitutional guarantees.

III. THE PARADOXICAL LEGACY OF P.V. NARASIMHA RAO (1998):
In P.V. Narasimha Rao v. State (1998), JMM MPs accepted bribes to defeat a No-Confidence Motion against the Rao government:
- A 3:2 majority held that MPs who accepted bribes and voted enjoyed absolute immunity under Article 105(2) because the bribe was "in respect of" a vote given.
- Perversely, MP Ajit Singh, who accepted a bribe but abstained from voting, could be prosecuted because he did not cast a vote! The judgment created an intolerable paradox: bribe-takers who fulfilled their corrupt bargain were immune, while those who broke it were prosecuted.

IV. THE OVERRULING: SITA SOREN V. UNION OF INDIA (2024):
In March 2024, a unanimous 7-Judge Constitution Bench led by CJI D.Y. Chandrachud in Sita Soren v. Union of India (2024 INSC 165) overruled P.V. Narasimha Rao:
1. Nature of the Offence: Bribery under Section 7 of the Prevention of Corruption Act is complete the moment undue advantage is accepted. It is entirely immaterial whether the legislator subsequently speaks, votes, or abstains.
2. The Necessity Test for Privilege: Parliamentary privilege extends only to actions necessary for the collective functioning and deliberative independence of the House. Accepting a bribe does not enhance legislative freedom; it destroys legislative integrity.
3. Democracy and Rule of Law: Corruption and bribery erode representative democracy. Articles 105 and 194 were never intended to construct an enclave of criminal immunity for elected representatives.

CONCLUSION:
Sita Soren establishes that parliamentary privilege is a shield for democratic debate, not a sword to strike down the Rule of Law. No constitutional functionary stands above the criminal law of India.`,
    scoringRubric: [
      { criterion: 'Text and constitutional objective of Articles 105(2) & 194(2)', marks: 3 },
      { criterion: 'Searchlight (1959), Keshav Singh (1964), & Raja Rampal (2007) evolution', marks: 4.5 },
      { criterion: 'P.V. Narasimha Rao (1998) majority error and moral paradox', marks: 4 },
      { criterion: 'Sita Soren (2024) 7-Judge Bench ratio (bribery independent of vote)', marks: 5.5 },
      { criterion: 'Rule of Law, anti-corruption, and constitutional integrity synthesis', marks: 3 }
    ]
  }
];
