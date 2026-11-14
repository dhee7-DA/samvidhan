import type { PyqQuestion } from '../pyqData';

export const PYQ_2014_DATA: PyqQuestion[] = [
  {
    id: 'jkpsc-po-2014-q1',
    year: '2014–2016',
    exam: 'JKPSC Prosecuting Officer & Judicial Mains',
    paper: 'Paper-II: Constitutional Law',
    part: 'Part A',
    marks: 50,
    questionNumber: 1,
    title: 'Constitutional Safeguards in Criminal Trials — Article 20 & Forensic Tests',
    questionText: `Article 20 of the Constitution provides fundamental safeguards to individuals charged with criminal offences. 

(a) Discuss the constitutional protections against:
    (i) Ex-post facto laws (Article 20(1));
    (ii) Double jeopardy (Article 20(2));
    (iii) Self-incrimination (Article 20(3)).
(b) Examine the constitutional validity of involuntary narco-analysis, polygraph tests, and brain mapping in light of the landmark Supreme Court decision in Selvi v. State of Karnataka (2010).`,
    topic: 'Criminal Due Process',
    relevantArticles: ['Article 20(1)', 'Article 20(2)', 'Article 20(3)', 'Article 21'],
    bootcampDay: 4,
    coreIssues: [
      'Scope of protections under Article 20(1), 20(2), and 20(3).',
      'The "Right against Self-Incrimination" vs Investigative Discovery.',
      'Involuntary neuro-scientific tests as a violation of mental privacy and Article 20(3).'
    ],
    landmarkPrecedents: {
      classic: 'M.P. Sharma (1954) & Nandini Satpathy v. P.L. Dani (1978)',
      modern2024: 'Selvi v. State of Karnataka (2010) 7 SCC 263 & Ritesh Sinha v. State of UP (2019)'
    },
    modelAnswer: `I. THE TRIPARTITE PROTECTIONS UNDER ARTICLE 20:
Article 20 is one of the most critical criminal-constitutional safeguards in the Constitution. Along with Article 21, it cannot be suspended even during a National Emergency under Article 359 (as amended by the 44th Constitutional Amendment, 1978).

1. Article 20(1) — Protection Against Ex-Post Facto Laws:
No person shall be convicted of any offence except for violation of a law in force at the time of the commission of the act charged as an offence, nor be subjected to a penalty greater than that which might have been inflicted under the law in force at the time of the commission.
- Exception (Beneficial Ex-Post Facto Law): In Rattan Lal v. State of Punjab (1965), the Supreme Court ruled that an ex-post facto law that mitigates the rigors of criminal law or reduces punishment operates retrospectively in favor of the accused.

2. Article 20(2) — Protection Against Double Jeopardy:
No person shall be prosecuted and punished for the same offence more than once (embodying the common law maxim "Nemo debet bis vexari pro una et eadem causa").
- Conditions Precedent: In Maqbool Hussain v. State of Bombay (1953), the Court held that Article 20(2) applies only when the accused was previously (a) prosecuted before a court of law or judicial tribunal, and (b) punished. Administrative confiscation under Customs Act does not bar subsequent criminal prosecution.

3. Article 20(3) — Right Against Self-Incrimination:
No person accused of any offence shall be compelled to be a witness against himself (Latin: "Nemo tenetur seipsum accusare").
- Scope in Pre-Trial Investigation: In Nandini Satpathy v. P.L. Dani (1978), the Supreme Court held that the shield of Article 20(3) extends beyond the courtroom trial to police interrogation under Section 161 CrPC (Section 180 BNSS). An accused has the right to remain silent when answering questions that tend to expose them to a criminal charge.

II. THE SELVI V. STATE OF KARNATAKA WATERSHED (2010):
In Selvi v. State of Karnataka (2010) 7 SCC 263, a 3-Judge Bench resolved whether subjecting an accused to involuntary narco-analysis, polygraph (lie detector) examinations, and Brain Electrical Activation Profiles (BEAP/Brain Mapping) violates Articles 20(3) and 21.

The Supreme Court laid down the following binding ratios:
1. Involuntary Administration Violates Article 20(3): Involuntary narco-analysis involves chemical intrusion (sodium pentothal) that impairs cognitive choice, extracting testimonial responses without consent. This constitutes impermissible "testimonial compulsion."
2. Involuntary Testing Violates "Mental Privacy" under Article 21: The Court recognized for the first time that personal liberty under Article 21 encompasses "mental privacy" and autonomy over one's thought process. Forcible intrusion into the human mind violates human dignity.
3. Inadmissibility of Testimonial Statements: Statements extracted during involuntary narco or lie-detector tests cannot be admitted as substantive evidence in court.
4. Physical vs Testimonial Evidence Distinction:
   - In State of Bombay v. Kathi Kalu Oghad (1961), taking fingerprints, handwriting samples, or bodily specimens was held constitutional because they are physical evidence, not testimonial statements.
   - In Ritesh Sinha v. State of U.P. (2019), the Supreme Court extended this principle to judicial orders directing an accused to give voice samples for criminal investigation, holding it does not violate Article 20(3).
5. Section 27 Evidence Act (Section 23 BSA) Exception: If an involuntary scientific test leads to the physical discovery of a concealed weapon, stolen article, or corpse, that physical discovery is admissible, but the inculpatory verbal statement remains barred.`,
    scoringRubric: [
      { criterion: 'Article 20(1) Ex-post facto law & Rattan Lal beneficial exception', marks: 10 },
      { criterion: 'Article 20(2) Double jeopardy & Maqbool Hussain test', marks: 10 },
      { criterion: 'Article 20(3) Self-incrimination & Nandini Satpathy scope', marks: 10 },
      { criterion: 'Selvi v. State of Karnataka (Narco, Polygraph, Mental Privacy)', marks: 15 },
      { criterion: 'Physical vs Testimonial evidence distinction (Kathi Kalu & Ritesh Sinha)', marks: 5 }
    ]
  },
  {
    id: 'jkpsc-po-2014-q2',
    year: '2014–2016',
    exam: 'JKPSC Prosecuting Officer & Judicial Mains',
    paper: 'Paper-II: Constitutional Law',
    part: 'Part A',
    marks: 50,
    questionNumber: 2,
    title: 'Article 12 Definition of State & The 6-Factor Instrumentality Test',
    questionText: `The definition of "State" under Article 12 determines the operational reach of Fundamental Rights against public authorities and statutory corporations.

(a) Discuss the scope of "Other Authorities" under Article 12. Trace the judicial shift from the ejusdem generis doctrine to the concept of an instrumentality or agency of the State.
(b) Analyze the 6-factor test laid down in Ajay Hasia v. Khalid Mujib Sehravardi (1981) and its fine-tuning by the 7-Judge Constitution Bench in Pradeep Kumar Biswas v. Indian Institute of Chemical Biology (2002).
(c) Can a writ under Article 32 or Article 226 be issued against the Board of Control for Cricket in India (BCCI) or private un-aided educational institutions?`,
    topic: 'Fundamental Rights',
    relevantArticles: ['Article 12', 'Article 32', 'Article 226', 'Article 14'],
    bootcampDay: 1,
    coreIssues: [
      'Scope of "Other Authorities" in Article 12.',
      'The Ajay Hasia 6-factor test and Pradeep Kumar Biswas functional-financial-administrative test.',
      'Writ maintainability under Article 226 vs Article 32 against private bodies performing public functions.'
    ],
    landmarkPrecedents: {
      classic: 'Rajasthan State Electricity Board (1967) ➔ Ramana Dayaram Shetty (1979) ➔ Ajay Hasia (1981)',
      modern2024: 'Pradeep Kumar Biswas (7-Judge Bench, 2002) & Zee Telefilms v. UOI (2005)'
    },
    modelAnswer: `I. EVOLUTION OF "OTHER AUTHORITIES" UNDER ARTICLE 12:
Article 12 defines "the State" to include: (1) Government and Parliament of India, (2) Government and Legislature of each State, (3) all local authorities, and (4) "other authorities within the territory of India or under the control of the Government of India."

In early cases (University of Madras v. Santa Bai, 1954), courts applied the restrictive "ejusdem generis" rule, holding that "other authorities" could only mean bodies performing governmental or sovereign functions.
This was rejected in Rajasthan State Electricity Board v. Mohan Lal (1967), which held that statutory corporations created by an Act of Parliament or State legislature are "other authorities" regardless of whether they perform sovereign or commercial functions.

In Ramana Dayaram Shetty v. International Airport Authority of India (1979), Justice P.N. Bhagwati established that a corporate entity, registered society, or company, if it functions as an "instrumentality or agency of the Government", is subject to Part III.

II. THE 6-FACTOR INSTRUMENTALITY TEST (AJAY HASIA, 1981):
In Ajay Hasia v. Khalid Mujib Sehravardi (1981) 1 SCC 722, the Supreme Court formulated six cumulative indicia:
1. Entire share capital held by the Government;
2. Extensive financial assistance meeting almost the entire expenditure;
3. Monopoly status conferred or protected by the State;
4. Deep and pervasive State control;
5. Functions of public importance closely related to governmental functions;
6. Department of government transferred to a corporation.

III. THE 7-JUDGE BENCH FINE-TUNING: PRADEEP KUMAR BISWAS (2002):
In Pradeep Kumar Biswas v. Indian Institute of Chemical Biology (2002) 5 SCC 111, a 7-Judge Constitution Bench reconsidered whether the Council of Scientific and Industrial Research (CSIR) was "State":
1. Rejection of Rigid Mechanical Checklist: The Court held that the Ajay Hasia factors are illustrative guidelines, not a rigid statutory formula.
2. The Tripartite Core Test: To be an instrumentality of State under Article 12, the body must be "financially, functionally, and administratively dominated by or under the pervasive control of the Government." Such control must not be merely regulatory, but deep and pervasive. Applying this, CSIR was held to be "State."

IV. BCCI & PRIVATE BODIES PERFORMING PUBLIC FUNCTIONS:
In Zee Telefilms Ltd. v. Union of India (2005) 4 SCC 649, the 5-Judge Bench held:
1. BCCI is NOT "State" under Article 12: It receives no state funding, has no governmental monopoly conferred by statute, and operates as an autonomous registered society under private management. Therefore, a writ petition under Article 32 does NOT lie against BCCI.
2. Maintainability under Article 226: However, because BCCI performs a public function (selecting the national cricket team representing India), it is amenable to the writ jurisdiction of High Courts under Article 226 for the enforcement of public law duties.`,
    scoringRubric: [
      { criterion: 'Rejection of ejusdem generis & RSEB / Ramana Shetty evolution', marks: 10 },
      { criterion: 'Ajay Hasia 6-factor instrumentality test breakdown', marks: 15 },
      { criterion: 'Pradeep Kumar Biswas (7-Judge) financial, functional, administrative dominance test', marks: 15 },
      { criterion: 'BCCI status: Article 12 vs Article 226 distinction (Zee Telefilms)', marks: 10 }
    ]
  },
  {
    id: 'jkpsc-po-2014-q3',
    year: '2014–2016',
    exam: 'JKPSC Prosecuting Officer & Judicial Mains',
    paper: 'Paper-II: Constitutional Law',
    part: 'Part A',
    marks: 50,
    questionNumber: 3,
    title: 'Ordinance Making Power & Constitutional Fraud — D.C. Wadhwa to Krishna Kumar',
    questionText: `The Ordinance-making power under Article 123 and Article 213 was conceived as an emergency legislative power to deal with unforeseen situations when the legislature is not in session.

(a) Discuss the constitutional conditions precedent for the promulgation of an Ordinance by the President under Article 123 and the Governor under Article 213.
(b) Examine the landmark rulings in D.C. Wadhwa v. State of Bihar (1987) and Krishna Kumar Singh v. State of Bihar (2017) regarding the re-promulgation of ordinances. Why did the Supreme Court characterize repeated re-promulgation as a "fraud on the Constitution"?
(c) What is the legal effect of an ordinance that lapses without parliamentary approval? Does it create permanent rights or liabilities?`,
    topic: 'Executive & Legislature',
    relevantArticles: ['Article 123', 'Article 213', 'Article 14', 'Article 50'],
    bootcampDay: 8,
    coreIssues: [
      'Constitutional prerequisites for promulgating ordinances.',
      'Re-promulgation as an abuse of executive power and fraud on the Constitution.',
      'Legal effect of lapsed ordinances on accrued rights (Krishna Kumar Singh).'
    ],
    landmarkPrecedents: {
      classic: 'D.C. Wadhwa v. State of Bihar (1987) 1 SCC 378',
      modern2024: 'Krishna Kumar Singh v. State of Bihar (7-Judge Constitution Bench, 2017) 3 SCC 1'
    },
    modelAnswer: `I. CONSTITUTIONAL CONDITIONS PRECEDENT (ARTICLES 123 & 213):
The power to promulgate an Ordinance is an extraordinary legislative power vested in the Executive head:
1. Houses Not in Session: Under Article 123(1), both Houses of Parliament must not be in session (or under Article 213(1), the State Legislative Assembly/Council is not in session). An ordinance cannot be promulgated if the legislature is actively sitting.
2. Immediate Action Necessary: The President/Governor must be satisfied that circumstances exist which render it necessary for them to take immediate action.
3. Co-extensive Legislative Competence: The subject-matter must be within the legislative competence of Parliament (List I & III) or State Legislature (List II & III), and is subject to the same constitutional limitations as an ordinary Act (cannot abridge Fundamental Rights).
4. Mandatory Laying Before Legislature: The ordinance must be laid before Parliament/State Legislature upon its reassembly, and it automatically ceases to operate at the expiration of six weeks from the reassembly of the legislature, or earlier if disapproved.

II. RE-PROMULGATION AS A "FRAUD ON THE CONSTITUTION" (D.C. WADHWA, 1987):
In Bihar, the State executive engaged in an egregious practice: between 1967 and 1981, 256 ordinances were kept alive continuously for periods ranging from 1 to 14 years by re-promulgating them immediately after the legislative sessions adjourned, without ever placing them before the legislature as bills.
In D.C. Wadhwa v. State of Bihar (1987) 1 SCC 378, Chief Justice P.N. Bhagwati held:
"The power to promulgate an ordinance is an emergency power to be used when the legislature cannot meet. To re-promulgate ordinances repeatedly without submitting them to the legislature is a subversion of the democratic legislative process and a colourable exercise of power. It is a fraud on the Constitution, because what the Executive cannot achieve through legislative consensus, it achieves by executive fiat."

III. THE 7-JUDGE BENCH DEFINITIVE RATIO: KRISHNA KUMAR SINGH (2017):
In Krishna Kumar Singh v. State of Bihar (2017) 3 SCC 1, a 7-Judge Constitution Bench settled the constitutional jurisprudence:
1. Mandatory Laying Before the Legislature is a Constitutional Command: Laying the ordinance before the legislature under Article 213(2)(a) is mandatory. Failure to lay the ordinance before the legislature constitutes a gross constitutional violation that invalidates the ordinance.
2. Judicial Review of Subjective Satisfaction: The satisfaction of the President/Governor regarding the necessity of immediate action is not immune from judicial review. Courts can examine if the satisfaction was formed on relevant material or tainted by mala fides.
3. Legal Effect of Lapsed Ordinances:
   - An ordinance that lapses or is disapproved by the legislature does NOT automatically create permanent or enduring rights.
   - The "theory of enduring rights" was rejected. To survive the expiration of an ordinance, the accrued right must pass the Public Interest & Irreversibility Test: whether the action taken is irreversible and whether invalidating it would cause grave injustice contrary to public interest.`,
    scoringRubric: [
      { criterion: 'Conditions precedent under Articles 123 and 213', marks: 10 },
      { criterion: 'D.C. Wadhwa ratio and the concept of fraud on the Constitution', marks: 15 },
      { criterion: 'Krishna Kumar Singh (7-Judge) mandatory laying before legislature requirement', marks: 15 },
      { criterion: 'Legal status of lapsed ordinances and the public interest test', marks: 10 }
    ]
  },
  {
    id: 'jkpsc-po-2014-q4',
    year: '2014–2016',
    exam: 'JKPSC Prosecuting Officer & Judicial Mains',
    paper: 'Paper-II: Constitutional Law',
    part: 'Part A',
    marks: 50,
    questionNumber: 4,
    title: 'Principles of Natural Justice — Nemo Judex & Audi Alteram Partem in Public Law',
    questionText: `The Principles of Natural Justice are not codified statutory rules, but the unwritten conscience of constitutional and administrative adjudication.

(a) Discuss the twin pillars of Natural Justice:
    (i) Nemo judex in causa sua (Rule against Bias);
    (ii) Audi alteram partem (Right to a Fair Hearing).
(b) Examine the types of bias (pecuniary, personal, subject-matter, and policy bias) with reference to A.K. Kraipak v. Union of India (1969).
(c) Can the requirement of pre-decisional hearing be excluded on grounds of post-decisional hearing, emergency, or statutory confidentiality? Discuss in light of Maneka Gandhi (1978) and Swadeshi Cotton Mills (1981).`,
    topic: 'Administrative Law',
    relevantArticles: ['Article 14', 'Article 21', 'Article 311'],
    bootcampDay: 2,
    coreIssues: [
      'Twin pillars of Natural Justice (Rule against bias and fair hearing).',
      'The Kraipak doctrine: Dissolution of the barrier between administrative and quasi-judicial functions.',
      'Pre-decisional vs post-decisional hearing and exceptions to natural justice.'
    ],
    landmarkPrecedents: {
      classic: 'A.K. Kraipak v. Union of India (1969) 2 SCC 262 & Maneka Gandhi (1978)',
      modern2024: 'Swadeshi Cotton Mills (1981) & State Bank of India v. Rajesh Agarwal (2023)'
    },
    modelAnswer: `I. THE TWIN PILLARS OF NATURAL JUSTICE:
Natural justice represents procedural fairness rooted in Article 14 (anti-arbitrariness) and Article 21 (just, fair, and reasonable procedure):
1. Nemo Judex in Causa Sua (Rule Against Bias):
No one should be a judge in their own cause. Justice must not only be done, but must manifestly and undoubtedly be seen to be done.
2. Audi Alteram Partem (Rule of Fair Hearing):
No person should be condemned unheard. It mandates: (a) notice of the proposed action and charges, (b) adequate time to reply, (c) disclosure of materials relied upon, and (d) a reasoned order (speaking order).

II. TYPES OF BIAS & THE A.K. KRAIPAK BENCHMARK (1969):
1. Four Classic Categories of Bias:
   - Pecuniary Bias: Any financial interest, however small, disqualifies the adjudicator automatically (Dimes v. Grand Junction Canal).
   - Personal Bias: Arises from friendship, hostility, family relation, or professional rivalry.
   - Subject-Matter / Official Bias: When the adjudicator has a direct stake in the subject matter under dispute.
   - Policy Bias: Pre-determined ideological obstinacy.
2. The Kraipak Revolution (1969):
In A.K. Kraipak v. Union of India (1969) 2 SCC 262, a candidate for selection to the Indian Forest Service sat as a member of the Selection Board. Even though he did not participate when his own name was evaluated, he participated in evaluating his competitors.
The Supreme Court held:
- The dividing line between administrative power and quasi-judicial power is obliterated. The principles of natural justice apply to administrative selections as well.
- The test is not whether actual bias was exercised, but whether there is a "reasonable apprehension of bias" in the mind of a reasonable person. The selections were quashed.

III. POST-DECISIONAL HEARING & EXCEPTIONS TO NATURAL JUSTICE:
1. Post-Decisional Hearing (Maneka Gandhi, 1978):
Where an urgent executive action is necessary to prevent grave mischief (such as impounding a passport under Section 10(3)(c) of the Passports Act to prevent immediate flight), the requirement of a prior hearing can be relaxed, provided an expeditious, full-fledged post-decisional hearing is granted immediately thereafter to cure the defect.
2. Swadeshi Cotton Mills v. UOI (1981): The Court held that exclusion of pre-decisional hearing can only be implied where immediate executive action is unavoidable; even then, a post-decisional hearing is mandatory.
3. The 2023 Affirmation (SBI v. Rajesh Agarwal): In 2023, the Supreme Court held that the RBI Master Circular on Fraud Accounts cannot classify an account as fraudulent without prior notice and hearing to the borrower, affirming that civil consequences demand strict adherence to audi alteram partem.`,
    scoringRubric: [
      { criterion: 'Twin pillars of Natural Justice (Nemo judex & Audi alteram partem)', marks: 15 },
      { criterion: 'Four types of bias & A.K. Kraipak reasonable apprehension test', marks: 15 },
      { criterion: 'Post-decisional hearing concept (Maneka Gandhi & Swadeshi Cotton)', marks: 10 },
      { criterion: 'Modern 2023 banking and administrative application (SBI v. Rajesh Agarwal)', marks: 10 }
    ]
  },
  {
    id: 'jkpsc-po-2014-q5',
    year: '2014–2016',
    exam: 'JKPSC Prosecuting Officer & Judicial Mains',
    paper: 'Paper-II: Constitutional Law',
    part: 'Part B',
    marks: 50,
    questionNumber: 5,
    title: 'Delegated Legislation — Permissible Limits & Essential Legislative Functions',
    questionText: `The complexity of modern welfare governance necessitates delegated legislation, yet excessive delegation violates the principle of separation of powers.

(a) Discuss the constitutionality and necessity of Delegated Legislation in India.
(b) Explain the "Essential Legislative Functions" test laid down in In re Delhi Laws Act (1951). What functions cannot be delegated by Parliament to the Executive?
(c) What are the judicial grounds on which subordinate legislation (Rules, Regulations, Notifications) can be struck down by the High Court or Supreme Court?`,
    topic: 'Administrative Law',
    relevantArticles: ['Article 245', 'Article 246', 'Article 13', 'Article 14'],
    bootcampDay: 9,
    coreIssues: [
      'Constitutional validity of delegated legislation under Article 245.',
      'The Essential Legislative Function test (In re Delhi Laws Act).',
      'Grounds for challenging subordinate legislation in judicial review.'
    ],
    landmarkPrecedents: {
      classic: 'In re Delhi Laws Act (1951) SCR 747 & Lachmi Narain v. UOI (1976)',
      modern2024: 'Indian Express Newspapers v. UOI (1985) & Cellular Operators Assn (2016)'
    },
    modelAnswer: `I. CONSTITUTIONALITY & NECESSITY OF DELEGATED LEGISLATION:
In modern administrative states, Parliament cannot foresee every technical contingency or draft intricate local regulations. Delegated (subordinate) legislation is therefore inevitable to flesh out the skeleton of a primary statute.

In In re Delhi Laws Act (1951) SCR 747, a 7-Judge Bench established that while the Constitution does not expressly mention delegated legislation, the legislature possesses the inherent power to delegate subordinate rulemaking authority to the Executive, subject to strict constitutional boundaries.

II. THE "ESSENTIAL LEGISLATIVE FUNCTIONS" TEST:
The legislature cannot abdicate its constitutional role by effacing itself or creating a parallel legislature.
1. The Core Prohibition: "Essential legislative functions" cannot be delegated. Essential legislative function consists in the determination or choice of the legislative policy and of formally enacting that policy into a binding rule of conduct.
2. What Can Be Delegated:
   - Filling in administrative details;
   - Fixing commencement dates (conditional legislation);
   - Prescribing technical procedural forms, fees, and operational standards.
3. What Cannot Be Delegated:
   - Declaring new offenses and prescribing criminal penalties;
   - Modifying the core policy of an existing Act (Henry VIII clauses that permit the executive to amend the parent Act itself are strictly limited to removing minor transitional difficulties without touching the policy);
   - Extending the life of an expired statute.

III. JUDICIAL REVIEW OF SUBORDINATE LEGISLATION:
Unlike primary statutes (which enjoy a presumption of constitutionality), subordinate rules, regulations, and notifications can be struck down on four specific grounds:
1. Substantive Ultra Vires: The subordinate rule exceeds the rulemaking authority granted by the parent Act or conflicts with any provision of the parent statute (Lachmi Narain v. UOI, 1976).
2. Procedural Ultra Vires: The rulemaking authority failed to comply with mandatory statutory prerequisites (e.g. failure to hold prior public consultation or failure to lay the rules before Parliament where mandated).
3. Conflict with Fundamental Rights: In Cellular Operators Association of India v. TRAI (2016), the Supreme Court held that subordinate legislation that is manifestly arbitrary, unreasonable, or disproportionate violates Article 14 and will be quashed.
4. Unconstitutionality of Parent Act: If the parent Act under which the rules are framed is itself held unconstitutional, the subordinate rules collapse automatically.`,
    scoringRubric: [
      { criterion: 'Necessity & constitutional legitimacy of delegated legislation', marks: 10 },
      { criterion: 'In re Delhi Laws Act (1951) Essential Legislative Functions test', marks: 15 },
      { criterion: 'Impermissible delegation (Penal offenses, policy choice, Henry VIII clauses)', marks: 10 },
      { criterion: 'Grounds of judicial review (Substantive & Procedural ultra vires, Manifest arbitrariness)', marks: 15 }
    ]
  },
  {
    id: 'jkpsc-po-2014-q6',
    year: '2014–2016',
    exam: 'JKPSC Prosecuting Officer & Judicial Mains',
    paper: 'Paper-II: Constitutional Law',
    part: 'Part B',
    marks: 50,
    questionNumber: 6,
    title: 'Legal Aid as Fundamental Right & Undertrial Incarceration — Hussainara to NALSA',
    questionText: `Poverty must not become a barrier to justice in a sovereign socialist democratic republic.

(a) Discuss the evolution of the Right to Free Legal Aid as an inalienable component of Article 21 read with Article 39A.
(b) Examine the landmark rulings in Hussainara Khatoon (1979) and Khatri (II) v. State of Bihar (1981) regarding undertrial prisoners and the mandatory duty of Magistrates to inform the accused of their right to legal aid.
(c) As a Prosecuting Officer, how would you evaluate the constitutional compliance of prolonged undertrial custody under Section 436A CrPC (Section 479 BNSS)?`,
    topic: 'Criminal Due Process',
    relevantArticles: ['Article 21', 'Article 39A', 'Article 14', 'Article 22'],
    bootcampDay: 7,
    coreIssues: [
      'Constitutional right to free legal aid under Article 21 and 39A.',
      'Mandatory judicial duty to inform indigent accused of legal aid rights.',
      'Section 436A CrPC / Section 479 BNSS maximum undertrial detention limits.'
    ],
    landmarkPrecedents: {
      classic: 'Hussainara Khatoon (1979) ➔ M.H. Hoskot (1978) ➔ Khatri (II) (Bhagalpur Blindings, 1981)',
      modern2024: 'Re: Inhuman Conditions in 1382 Prisons (2016) & Satender Kumar Antil (2022)'
    },
    modelAnswer: `I. RIGHT TO LEGAL AID: FROM DPSP TO FUNDAMENTAL RIGHT:
Article 39A was added by the 42nd Amendment, 1976 directing the State to provide free legal aid by suitable legislation to ensure that opportunities for securing justice are not denied to any citizen by reason of economic or other disabilities.

In M.H. Hoskot v. State of Maharashtra (1978) 3 SCC 544, Justice V.R. Krishna Iyer bridged the divide between Part IV and Part III, ruling that free legal services to an indigent accused who is in custody is an indispensable component of "reasonable, fair and just procedure" under Article 21. If a prisoner is unable to afford counsel, the State must provide one at state expense.

II. HUSSAINARA KHATOON & KHATRI: THE MAGISTRATE'S AFFIRMATIVE DUTY:
1. Hussainara Khatoon v. Home Secretary, State of Bihar (1979): The Supreme Court uncovered the horrific reality of thousands of undertrial prisoners languishing in Bihar jails for periods exceeding the maximum sentence prescribed for their alleged offenses. The Court declared that the Right to a Speedy Trial is a Fundamental Right under Article 21.
2. Khatri (II) v. State of Bihar (1981) (Bhagalpur Blindings Case):
Justice P.N. Bhagwati held:
- The constitutional right to legal aid begins the moment the accused is arrested and brought before the Magistrate.
- The Judicial Magistrate is under an affirmative constitutional obligation to inform the indigent accused of their right to free legal representation at state expense. The State cannot plead financial or administrative inability to evade this command.

III. PROSECUTORIAL OVERSIGHT: SECTION 436A CRPC (SECTION 479 BNSS):
Under Section 436A CrPC (now updated and expanded under Section 479 BNSS):
1. Mandatory Release on Personal Bond: Where an undertrial prisoner has undergone detention for a period extending up to one-half of the maximum period of imprisonment specified for that offense under the law, they shall be released by the Court on their personal bond with or without sureties.
2. First-Time Offender Relief (Section 479 BNSS, 2023): For a first-time offender (never previously convicted of any offense), the detention threshold for mandatory release is reduced to one-third of the maximum sentence.
3. Prosecutorial Duty: As a Prosecuting Officer, it is an ethical and constitutional obligation not to mechanically oppose bail when an accused qualifies under Section 436A/479. The prosecutor must actively submit jail custody audit sheets to the Magistrate to uphold Article 21.`,
    scoringRubric: [
      { criterion: 'Article 39A integration into Article 21 (M.H. Hoskot ratio)', marks: 15 },
      { criterion: 'Hussainara Khatoon & Khatri affirmative duty of Magistrates', marks: 15 },
      { criterion: 'Section 436A CrPC / Section 479 BNSS maximum detention limits', marks: 10 },
      { criterion: 'Prosecutorial role in undertrial release and Satender Kumar Antil (2022) norms', marks: 10 }
    ]
  },
  {
    id: 'jkpsc-po-2014-q7',
    year: '2014–2016',
    exam: 'JKPSC Prosecuting Officer & Judicial Mains',
    paper: 'Paper-II: Constitutional Law',
    part: 'Part B',
    marks: 50,
    questionNumber: 7,
    title: 'The Basic Structure Doctrine & The 9th Schedule Judicial Shield — I.R. Coelho',
    questionText: `The Basic Structure Doctrine represents the crowning achievement of Indian constitutional jurisprudence. 

(a) Trace the judicial confrontation between Parliament and the Judiciary from Shankari Prasad (1951) to Kesavananda Bharati (1973).
(b) Can Parliament place ordinary statutes beyond the reach of Judicial Review by inserting them into the Ninth Schedule under Article 31B?
(c) Discuss the unanimous 9-Judge Constitution Bench decision in I.R. Coelho v. State of Tamil Nadu (2007) and explain the "Rights Test" and the "Essence of the Rights Test".`,
    topic: 'Amendments & Basic Structure',
    relevantArticles: ['Article 368', 'Article 13', 'Article 31B', 'Ninth Schedule'],
    bootcampDay: 15,
    coreIssues: [
      'Constituent power vs Legislative power under Article 368.',
      'The Kesavananda Bharati foundational compromise.',
      'Judicial review of the Ninth Schedule post-24 April 1973 under I.R. Coelho.'
    ],
    landmarkPrecedents: {
      classic: 'Shankari Prasad (1951) ➔ Golaknath (1967) ➔ Kesavananda Bharati (1973)',
      modern2024: 'I.R. Coelho v. State of Tamil Nadu (2007) 2 SCC 1 & In re Article 370 (2023)'
    },
    modelAnswer: `I. THE CONSTITUTIONAL BATTLE FOR SUPREMACY (1951–1973):
The evolution of the amending power under Article 368 underwent four historic stages:
1. Shankari Prasad v. Union of India (1951) & Sajjan Singh (1965): The Supreme Court held that the word "law" in Article 13(2) refers only to ordinary legislative enactments, not to constitutional amendments passed under Article 368. Parliament possessed unlimited constituent power to abridge Fundamental Rights.
2. I.C. Golaknath v. State of Punjab (11-Judge Bench, 1967): By a 6:5 majority, Chief Justice Subba Rao reversed the earlier view, holding that Article 368 merely laid down the procedure for amendment, not the substantive power. Fundamental Rights were declared transcendental and immune from amendment.
3. 24th Constitutional Amendment (1971): Parliament amended Article 13 and Article 368 to expressly provide that an amendment under Article 368 is not "law" under Article 13, asserting unlimited constituent amending authority.
4. Kesavananda Bharati v. State of Kerala (13-Judge Bench, 1973): By a 7:6 majority, the Supreme Court reached the historic synthesis:
   - Parliament has the power to amend any provision of the Constitution, including Fundamental Rights.
   - However, Parliament's amending power is subject to an implied limitation: it cannot alter, destroy, or emasculate the "Basic Structure" or essential identity of the Constitution.

II. THE NINTH SCHEDULE & ARTICLE 31B:
Article 31B was inserted by the 1st Constitutional Amendment (1951) to protect agrarian land reform statutes from being invalidated by courts on grounds of inconsistency with Fundamental Rights.
Over time, the executive and legislature began using the Ninth Schedule as a constitutional dustbin, dumping controversial statutes unrelated to land reforms to immunize them from judicial review.

III. THE 9-JUDGE BENCH WATERSHED: I.R. COELHO (2007):
In I.R. Coelho v. State of Tamil Nadu (2007) 2 SCC 1, a unanimous 9-Judge Constitution Bench settled the constitutional immunity of the Ninth Schedule:
1. Cut-Off Date of 24th April 1973: All constitutional amendments and statutes inserted into the Ninth Schedule before 24th April 1973 (the date of the Kesavananda Bharati judgment) are valid and immune from challenge.
2. Post-1973 Laws Open to Judicial Review: Any law inserted into the Ninth Schedule on or after 24th April 1973 is subject to judicial review. It does not enjoy blanket immunity.
3. The Twin Judicial Tests:
   - The Rights Test: Does the impugned statute infringe upon Fundamental Rights in Part III?
   - The Essence of the Rights Test: If a statute violates a fundamental right, does that violation damage or destroy the Basic Structure of the Constitution?
4. Articles 14, 19, and 21 as Inviolable Structural Core: The Court ruled that the principles underlying Articles 14, 19, and 21 form the foundational core of the Constitution. If a Ninth Schedule statute destroys the essence of these rights, it will be invalidated as unconstitutional, affirming that Judicial Review is an untouchable basic feature that cannot be excluded by Article 31B.`,
    scoringRubric: [
      { criterion: 'Judicial confrontation trace (Shankari Prasad to Kesavananda)', marks: 15 },
      { criterion: 'Article 31B and original intent of the Ninth Schedule', marks: 10 },
      { criterion: 'I.R. Coelho (2007) cut-off date (24 April 1973)', marks: 10 },
      { criterion: 'Rights Test vs Essence of Rights Test breakdown', marks: 15 }
    ]
  },
  {
    id: 'jkpsc-po-2014-q8',
    year: '2014–2016',
    exam: 'JKPSC Prosecuting Officer & Judicial Mains',
    paper: 'Paper-II: Constitutional Law',
    part: 'Part B',
    marks: 50,
    questionNumber: 8,
    title: 'Asymmetric Federalism & Special Provisions — In re Article 370 (2023)',
    questionText: `Indian Federalism is asymmetric in nature, incorporating diverse special provisions under Part XXI for Jammu & Kashmir and North-Eastern States under Article 371.

(a) Discuss the concept of "Asymmetric Federalism" under the Indian Constitution.
(b) Trace the constitutional history of Article 370. Why was it placed under Part XXI ("Temporary, Transitional and Special Provisions")?
(c) Examine the landmark 5-Judge Constitution Bench judgment in In re Article 370 of the Constitution (December 2023). On what constitutional grounds was Constitutional Order (C.O.) 272 and the abrogation of Article 370 upheld?`,
    topic: 'Federalism & Emergency',
    relevantArticles: ['Article 370', 'Article 371', 'Article 1', 'Article 3'],
    bootcampDay: 15,
    coreIssues: [
      'The concept of Asymmetric Federalism in India.',
      'Temporary and transitional nature of Article 370.',
      'The 2023 Constitution Bench In re Article 370 ruling on sovereignty and state reorganization.'
    ],
    landmarkPrecedents: {
      classic: 'Prem Nath Kaul (1959) ➔ Sampat Prakash (1970) ➔ Mohd. Maqbool Damnoo (1972)',
      modern2024: 'In re Article 370 of the Constitution (5-Judge Constitution Bench, Dec 2023)'
    },
    modelAnswer: `I. THE CONSTITUTIONAL CONCEPT OF ASYMMETRIC FEDERALISM:
Indian federalism does not treat all states homogeneously; it accommodates cultural, geographic, and historical diversities through "Asymmetric Federalism."
Under Part XXI (Articles 371, 371A to 371J), special autonomy and protective shields are granted to Nagaland (371A), Mizoram (371G), Maharashtra and Gujarat (371), Assam (371B), and Karnataka-Hyderabad (371J) regarding customary laws, land transfers, and legislative vetoes.

II. THE TEMPORARY CHARACTER OF ARTICLE 370:
Article 370 was incorporated to govern Jammu & Kashmir's transitional relationship with the Union of India pending constitutional integration:
1. Textual Placement in Part XXI: Placed under Part XXI, titled "Temporary, Transitional and Special Provisions". The marginal heading of Article 370 explicitly described it as "Temporary provisions with respect to the State of Jammu and Kashmir."
2. The Mechanism of C.O.s: Under Article 370(1)(d), provisions of the Indian Constitution could be extended to the State by Presidential Order with the "concurrence" of the State Government.
3. Clause (3) Cessation Mechanism: Article 370(3) empowered the President to declare that Article 370 shall cease to be operative, subject to the recommendation of the Constituent Assembly of the State.

III. THE 2023 CONSTITUTION BENCH WATERSHED: IN RE ARTICLE 370 (DEC 2023):
In December 2023, a unanimous 5-Judge Constitution Bench headed by CJI D.Y. Chandrachud upheld the constitutional validity of the abrogation of Article 370:
1. Complete Sovereignty Surrendered in 1947: The Court held that upon Maharaja Hari Singh signing the Instrument of Accession on 26 October 1947 and the issuance of the subsequent Proclamation by Yuvraj Karan Singh in 1949, the State of Jammu & Kashmir surrendered its external and internal sovereignty completely to the Dominion of India. The State retained no internal sovereignty.
2. Article 370 was Strictly Temporary: The Court held that Article 370 was an interim, transitional mechanism designed to facilitate gradual constitutional integration during wartime conditions; it was never intended to be a permanent feature.
3. Dissolution of Constituent Assembly Did Not Freeze Article 370: The Court held that the dissolution of the J&K Constituent Assembly in 1957 did not render Article 370 unamendable or permanent. The President possessed continuous constituent power under Article 370(3) to declare the provision inoperative.
4. Harmonious Application of Part III: The abrogation resulted in the unconditional application of the entire Indian Constitution, extending all Fundamental Rights and progressive central welfare statutes uniformly to the citizens of Jammu & Kashmir.`,
    scoringRubric: [
      { criterion: 'Concept of Asymmetric Federalism & Article 371 protections', marks: 10 },
      { criterion: 'Textual analysis of Article 370 in Part XXI & temporary nature', marks: 15 },
      { criterion: 'In re Article 370 (2023) ruling on sovereignty and accession', marks: 15 },
      { criterion: 'Presidential powers under Article 370(3) post-1957', marks: 10 }
    ]
  }
];
