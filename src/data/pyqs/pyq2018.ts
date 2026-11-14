import type { PyqQuestion } from '../pyqData';

export const PYQ_2018_DATA: PyqQuestion[] = [
  {
    id: 'jkpsc-po-2018-q1',
    year: '2018–2019',
    exam: 'JKPSC Prosecuting Officer & Judicial Mains',
    paper: 'Paper-II: Constitutional Law',
    part: 'Part A',
    marks: 50,
    questionNumber: 1,
    title: 'The New Doctrine of Equality under Article 14 — Arbitrariness vs Classification',
    questionText: `The traditional doctrine of reasonable classification under Article 14 has been superseded by the dynamic anti-arbitrariness doctrine. 

Trace the judicial evolution of Article 14 from State of West Bengal v. Anwar Ali Sarkar (1952) through E.P. Royappa v. State of Tamil Nadu (1974) to Shayara Bano v. Union of India (2017). Explain what constitutes "Manifest Arbitrariness" as a ground to strike down plenary primary legislation.`,
    topic: 'Fundamental Rights',
    relevantArticles: ['Article 14', 'Article 13', 'Article 16'],
    bootcampDay: 2,
    coreIssues: [
      'Twin-test of reasonable classification (intelligible differentia and rational nexus).',
      'The Royappa revolution: Equality as an antithesis to arbitrariness.',
      'Shayara Bano doctrine of "Manifest Arbitrariness" invalidating primary statutes.'
    ],
    landmarkPrecedents: {
      classic: 'Anwar Ali Sarkar (1952) ➔ E.P. Royappa (1974) ➔ Maneka Gandhi (1978)',
      modern2024: 'Shayara Bano (2017) 9 SCC 1 & Association for Democratic Reforms (2024)'
    },
    modelAnswer: `I. THE TRADITIONAL DOCTRINE: REASONABLE CLASSIFICATION:
In State of West Bengal v. Anwar Ali Sarkar (1952) and Ram Krishna Dalmia (1958), the Supreme Court established that while Article 14 forbids class legislation, it permits reasonable classification. To withstand constitutional scrutiny, a classification must satisfy two cumulative conditions:
1. Intelligible Differentia: The classification must be founded on an intelligible differentia which distinguishes persons or things grouped together from those left out.
2. Rational Nexus: That differentia must have a rational relation to the object sought to be achieved by the statute.

II. THE ROYAPPA PARADIGM SHIFT: EQUALITY AS NON-ARBITRARINESS:
In E.P. Royappa v. State of Tamil Nadu (1974) 4 SCC 3, Justice P.N. Bhagwati revolutionized Indian equality jurisprudence:
"Equality is a dynamic concept with many aspects and dimensions and it cannot be 'cribbed, cabined, and confined' within traditional and doctrinaire limits. From a positivistic point of view, equality is antithetic to arbitrariness. In fact, equality and arbitrariness are sworn enemies; one belongs to the rule of law in a republic while the other, to the whim and caprice of an absolute monarch. Where an act is arbitrary, it is implicit in it that it is unequal both according to political logic and constitutional law and is therefore violative of Article 14."

This was cemented in Maneka Gandhi (1978) and Ajay Hasia (1981), establishing that an administrative action that is unreasonable, irrational, or disproportionate violates Article 14 per se, without needing to establish discrimination against a comparative group.

III. MANIFEST ARBITRARINESS: INVALIDATING PRIMARY LEGISLATION (2017–2024):
Historically, under State of A.P. v. McDowell & Co. (1996), courts held that primary plenary legislation could only be struck down on two grounds: (a) lack of legislative competence, or (b) violation of fundamental rights; arbitrariness alone could not invalidate a statute enacted by Parliament.

This limitation was authoritatively dismantled in Shayara Bano v. Union of India (2017) 9 SCC 1 (Triple Talaq case), where Justice R.F. Nariman established:
1. Definition of Manifest Arbitrariness: Legislation is manifestly arbitrary when it is enacted capriciously, irrationally, without an adequate determining principle, or is unreasoned, excessive, and disproportionate.
2. Application to Primary Statutes: Manifest arbitrariness is a substantive fundamental right ground under Article 14 to strike down primary Parliamentary legislation as well as subordinate rules.
3. Recent Affirmation in ADR v. Union of India (2024): The 5-Judge Constitution Bench applied the manifest arbitrariness test to invalidate the Electoral Bonds Scheme, holding that statutory amendments to the Companies Act deleting disclosure requirements were completely disproportionate and arbitrary under Article 14.`,
    scoringRubric: [
      { criterion: 'Twin-test of reasonable classification (Anwar Ali Sarkar)', marks: 10 },
      { criterion: 'Royappa anti-arbitrariness doctrine analysis', marks: 15 },
      { criterion: 'Shayara Bano manifest arbitrariness doctrine & McDowell shift', marks: 15 },
      { criterion: 'Recent 2024 application in Electoral Bonds case', marks: 10 }
    ]
  },
  {
    id: 'jkpsc-po-2018-q2',
    year: '2018–2019',
    exam: 'JKPSC Prosecuting Officer & Judicial Mains',
    paper: 'Paper-II: Constitutional Law',
    part: 'Part A',
    marks: 50,
    questionNumber: 2,
    title: 'Preventive Detention under Article 22 & D.K. Basu Custodial Guidelines',
    questionText: `Preventive detention has been described as a "necessary evil" in the Indian constitutional architecture, yet its arbitrary execution poses the gravest threat to personal liberty.

(a) Differentiate between punitive detention and preventive detention. What are the constitutional minimum guarantees provided under Article 22(4) to 22(7)?
(b) Examine the binding nature of the D.K. Basu v. State of West Bengal (1997) arrest guidelines. How have these guidelines been incorporated into procedural criminal law?
(c) As a Prosecuting Officer, what procedural defects in the detention order would prove fatal before the High Court in a writ of Habeas Corpus?`,
    topic: 'Criminal Due Process',
    relevantArticles: ['Article 22', 'Article 21', 'Article 32', 'Article 226'],
    bootcampDay: 3,
    coreIssues: [
      'Constitutional boundaries of preventive detention under Article 22.',
      'D.K. Basu procedural guidelines on arrest and memo preparation.',
      'Grounds for quashing preventive detention orders in Habeas Corpus petitions.'
    ],
    landmarkPrecedents: {
      classic: 'A.K. Roy v. Union of India (1982) & D.K. Basu v. State of West Bengal (1997) 1 SCC 416',
      modern2024: 'Ameena Begum v. State of Telangana (2023) & Pramod Singla v. UOI (2023)'
    },
    modelAnswer: `I. PUNITIVE VS PREVENTIVE DETENTION:
1. Punitive Detention: Inflicted as a punishment for an offense committed after a fair judicial trial where guilt is proved beyond reasonable doubt before a criminal court.
2. Preventive Detention: Inflicted without a trial or criminal conviction, based purely on executive suspicion or subjective satisfaction to prevent the detainee from committing prejudicial acts in the future (public order, state security, defense).

II. CONSTITUTIONAL SAFEGUARDS UNDER ARTICLE 22:
Under Article 22(4) to 22(7), the executive's power of preventive detention is circumscribed by mandatory constitutional safeguards:
1. 3-Month Ceiling & Advisory Board (Art 22(4)): No person can be detained beyond three months unless an Advisory Board consisting of persons qualified to be High Court judges reports sufficient cause before the expiration of the three months.
2. Right to be Communicated Grounds of Detention (Art 22(5)): The detaining authority must communicate the grounds on which the order was made as soon as may be.
3. Earliest Opportunity of Representation (Art 22(5)): The detainee has an absolute constitutional right to make a representation against the detention order to the government.

III. D.K. BASU GUIDELINES & PROCEDURAL STATUTORY CODIFICATION:
In D.K. Basu v. State of West Bengal (1997) 1 SCC 416, the Supreme Court laid down 11 mandatory guidelines to prevent custodial torture and illegal detention:
1. Identification: Police officers carrying out arrest must bear clear identification and designation tags.
2. Memo of Arrest: A formal arrest memo must be prepared at the time of arrest, witnessed by at least one family member or respectable citizen of the locality, and countersigned by the arrestee.
3. Information to Relative: The arrestee is entitled to have one friend or relative informed within 8 to 12 hours of arrest.
4. Medical Examination: The arrestee must be medically examined at the time of arrest and re-examined every 48 hours by a trained doctor.
These guidelines were formally codified into statutory criminal law through Sections 41A, 41B, 41C, 41D, 50A, and 54 CrPC (Sections 35, 36, 37, 38, 47, and 53 BNSS).

IV. FATAL DEFECTS IN DETENTION ORDERS (PROSECUTORIAL AUDIT):
In a writ of Habeas Corpus, the High Court exercises strict scrutiny. The following defects prove fatal to the prosecution:
1. Delay in Considering Representation: In Pramod Singla (2023), the Supreme Court held that unexplained delay in deciding the detainee's representation renders detention unconstitutional per se.
2. Supply of Illegible Documents / Lack of Vernacular Translation: In Ameena Begum (2023), failure to supply documents in a language understood by the detainee impairs their right under Article 22(5).
3. Non-Application of Mind to Bail Status: If the detaining authority passes a detention order while the person is already in judicial custody without demonstrating an imminent likelihood of release on bail, the order is void for non-application of mind.`,
    scoringRubric: [
      { criterion: 'Distinction between punitive and preventive detention', marks: 10 },
      { criterion: 'Article 22(4) to 22(7) constitutional safeguards analysis', marks: 15 },
      { criterion: 'D.K. Basu guidelines & CrPC / BNSS statutory codification', marks: 15 },
      { criterion: 'Habeas Corpus fatal defects & recent 2023 precedents', marks: 10 }
    ]
  },
  {
    id: 'jkpsc-po-2018-q3',
    year: '2018–2019',
    exam: 'JKPSC Prosecuting Officer & Judicial Mains',
    paper: 'Paper-II: Constitutional Law',
    part: 'Part A',
    marks: 50,
    questionNumber: 3,
    title: 'Interrelationship of FRs, DPSPs, and Fundamental Duties — Minerva Mills Harmony',
    questionText: `The Indian Constitution is founded on the bedrock of the balance between Fundamental Rights (Part III) and Directive Principles of State Policy (Part IV). 

(a) Trace the judicial trajectory of the conflict between Part III and Part IV from State of Madras v. Champakam Dorairajan (1951) through the 42nd Amendment to Minerva Mills v. Union of India (1980).
(b) Discuss how the Supreme Court has utilized Directive Principles to expand the horizon of Fundamental Rights.
(c) What is the legal status and enforceability of Fundamental Duties under Article 51A? Refer to the landmark ruling in M.K. Ranjitsinh v. Union of India (2024).`,
    topic: 'Fundamental Rights',
    relevantArticles: ['Article 37', 'Article 39', 'Article 39A', 'Article 51A', 'Article 21'],
    bootcampDay: 7,
    coreIssues: [
      'Evolution from DPSP subordination (Champakam) to harmonious construction (Minerva Mills).',
      'Harmonization of Part III and Part IV: Wheels of the same chariot.',
      'Fundamental duties and the 2024 climate change judgment (M.K. Ranjitsinh).'
    ],
    landmarkPrecedents: {
      classic: 'Champakam Dorairajan (1951) ➔ Kerala Education Bill (1958) ➔ Minerva Mills (1980)',
      modern2024: 'M.K. Ranjitsinh v. Union of India (3-Judge Bench, March 2024)'
    },
    modelAnswer: `I. EVOLUTION OF THE FR–DPSP RELATIONSHIP:
1. The Early Subordination Stage (1951):
In State of Madras v. Champakam Dorairajan (1951), the Supreme Court adopted a rigid hierarchical approach, holding that Directive Principles are non-justiciable under Article 37 and must run as "subsidiary and subordinate" to Fundamental Rights. In case of conflict, Fundamental Rights prevail.

2. The Harmonious Construction Stage (1958–1973):
In Re: Kerala Education Bill (1958), the Court softened its stance by introducing the Doctrine of Harmonious Construction—courts must attempt to harmonize Part III and Part IV rather than assuming antagonism.

3. The Primacy Assault & The Minerva Mills Watershed (1980):
The 42nd Amendment, 1976 amended Article 31C to give blanket precedence to all Directive Principles over Articles 14 and 19.
In Minerva Mills Ltd. v. Union of India (1980) 3 SCC 625, the Supreme Court struck down this amendment, with Justice Chandrachud observing:
"The Indian Constitution is founded on the bedrock of the balance between Parts III and IV. To give absolute primacy to one over the other is to disturb the harmony of the Constitution. Part III and Part IV together constitute the core of commitment to social revolution. They are like the two wheels of a chariot, one no less important than the other."

II. DPSPS AS ENGINES OF EXPANSION FOR FUNDAMENTAL RIGHTS:
The judiciary has creatively read DPSPs into Article 21:
1. Article 39A (Free Legal Aid) was read into Article 21 in M.H. Hoskot (1978).
2. Article 45 (Childhood Education) was read into Article 21 in Unni Krishnan (1993), culminating in the 86th Amendment inserting Article 21A.
3. Article 48A (Environmental Protection) was integrated into the right to life in Subhash Kumar (1991) and Vellore Citizens (1996).

III. FUNDAMENTAL DUTIES (ARTICLE 51A) & M.K. RANJITSINH (2024):
Inserted by the 42nd Amendment on the recommendation of the Swaran Singh Committee, Fundamental Duties are non-justiciable per se, but serve as interpretative aids:
1. In AIIMS Students Union v. AIIMS (2002), the Court held that duties are equally important in balancing individual rights with collective welfare.
2. In M.K. Ranjitsinh v. Union of India (March 2024), a 3-Judge Bench led by CJI D.Y. Chandrachud harmonized Article 48A (DPSP), Article 51A(g) (Duty to protect nature), and Article 21 to formally recognize a constitutional "Right against the Adverse Effects of Climate Change", holding that clean environment and climate stability are non-negotiable human rights.`,
    scoringRubric: [
      { criterion: 'Champakam Dorairajan to Minerva Mills trajectory', marks: 15 },
      { criterion: 'Harmonious construction doctrine & Two wheels of a chariot metaphor', marks: 15 },
      { criterion: 'DPSP integration into Article 21 (Legal aid, education, environment)', marks: 10 },
      { criterion: 'Fundamental duties & M.K. Ranjitsinh (2024) climate rights ruling', marks: 10 }
    ]
  },
  {
    id: 'jkpsc-po-2018-q4',
    year: '2018–2019',
    exam: 'JKPSC Prosecuting Officer & Judicial Mains',
    paper: 'Paper-II: Constitutional Law',
    part: 'Part A',
    marks: 50,
    questionNumber: 4,
    title: 'Constitutional Position of the Governor — Discretion & Clemency Powers',
    questionText: `The office of the Governor has frequently emerged as a constitutional friction point between the Union and the States.

(a) Examine the constitutional status of the Governor as the executive head of a State. Is the Governor an employee or agent of the Central Government?
(b) Discuss the scope of the Governor's discretionary powers under Article 163. What are the constitutional limitations on the Governor when dealing with State Legislative Bills under Article 200?
(c) Compare the pardoning power of the Governor under Article 161 with that of the President under Article 72. How did the Supreme Court rule in Bilkis Bano v. Union of India (2024) regarding executive remission jurisdiction?`,
    topic: 'Executive & Legislature',
    relevantArticles: ['Article 153', 'Article 161', 'Article 163', 'Article 200', 'Article 72'],
    bootcampDay: 8,
    coreIssues: [
      'Constitutional independence of the Governor (Hargovind Pant).',
      'Discretionary powers under Article 163 & Assent to Bills under Article 200.',
      'Clemency under Articles 72/161 and the Bilkis Bano (2024) remission ratio.'
    ],
    landmarkPrecedents: {
      classic: 'Hargovind Pant v. Dr. Raghukul Tilak (1979) & Shamsher Singh (1974)',
      modern2024: 'State of Punjab v. Principal Secretary to Governor (2023) & Bilkis Bano v. UOI (2024)'
    },
    modelAnswer: `I. CONSTITUTIONAL STATUS OF THE GOVERNOR:
In Hargovind Pant v. Dr. Raghukul Tilak (1979) 2 SCC 458, the Supreme Court authoritatively held that the office of the Governor is not an employment under the Government of India. The Governor does not function as an agent or subordinate employee of the Union Government; rather, the Governor holds an independent constitutional office that is not subject to the administrative control or direction of the Government of India.

In Shamsher Singh v. State of Punjab (1974), the 7-Judge Constitution Bench established that under our parliamentary system, the Governor is a formal constitutional head who must act on the aid and advice of the Council of Ministers headed by the Chief Minister in all executive matters, except where the Constitution expressly vests discretion.

II. DISCRETIONARY POWERS UNDER ARTICLE 163 & ARTICLE 200 (BILL ASSENT):
Article 163(1) mandates aid and advice except where the Governor is required by or under the Constitution to exercise functions "in his discretion" (e.g. reserving bills for the President under Article 200, recommending President's Rule under Article 356, or appointing a Chief Minister in a hung assembly).

INDEFINITE WITHHOLDING OF BILLS IS UNCONSTITUTIONAL (2023):
In State of Punjab v. Principal Secretary to Governor (2023) and State of Tamil Nadu v. Governor (2023), the Supreme Court curbed the practice of Governors sitting indefinitely on bills:
1. Article 200 Options: When a bill passed by the state legislature is presented to the Governor, the Governor has only four options: (a) grant assent, (b) withhold assent, (c) return the bill with a message for reconsideration, or (d) reserve the bill for the President.
2. Mandatory Reconsideration: If the Governor withholds assent, the Governor must immediately return the bill with a message. If the Legislative Assembly re-passes the bill, with or without amendment, the Governor cannot withhold assent a second time. Sitting indefinitely on bills violates parliamentary democracy.

III. CLEMENCY POWERS: ARTICLE 161 VS ARTICLE 72:
1. Scope Comparison:
   - Article 72 (President): Pardons, reprieves, respites, or remissions for offences against Union laws, court-martial convictions, and in all cases of Death Sentence.
   - Article 161 (Governor): Pertains to offences against State laws; does NOT extend to court-martial sentences. Following the 2021 judgment in State of Haryana v. Raj Kumar, the Governor can grant pardons even in death sentence cases, but cannot suspend court-martial sentences.
2. Judicial Review of Remission — Bilkis Bano v. Union of India (Jan 2024):
In Bilkis Bano (2024), an 11-convict premature remission order was challenged:
- Appropriate Government Principle: Under Section 432 CrPC (Section 473 BNSS), the "appropriate government" competent to grant remission is the State within which the offenders were tried and sentenced (Maharashtra), not where the offence occurred (Gujarat).
- Fraud on the Court & Void Order: The Gujarat Government's remission order was declared void ab initio for usurpation of jurisdiction and suppression of facts, establishing that executive clemency must strictly adhere to the rule of law.`,
    scoringRubric: [
      { criterion: 'Hargovind Pant ratio (Governor not an agent of Union)', marks: 10 },
      { criterion: 'Article 163 discretion & Shamsher Singh parliamentary head principle', marks: 15 },
      { criterion: 'Article 200 assent timeline (State of Punjab v. Governor 2023)', marks: 10 },
      { criterion: 'Articles 72 vs 161 comparison & Bilkis Bano (2024) remission ratio', marks: 15 }
    ]
  },
  {
    id: 'jkpsc-po-2018-q5',
    year: '2018–2019',
    exam: 'JKPSC Prosecuting Officer & Judicial Mains',
    paper: 'Paper-II: Constitutional Law',
    part: 'Part B',
    marks: 50,
    questionNumber: 5,
    title: 'Parliamentary Privileges vs Criminal Law — The Sita Soren (2024) Revolution',
    questionText: `Parliamentary privileges under Article 105 and Article 194 were conceived to ensure uninhibited legislative deliberation, not to grant criminal license.

(a) Discuss the scope of parliamentary privileges and immunities under Article 105(2) and Article 194(2).
(b) Analyze the historic conflict between legislative privilege and judicial review in In re Special Reference No. 1 of 1964 (Keshav Singh) and Raja Ram Pal v. Hon'ble Speaker (2007).
(c) How did the 7-Judge Constitution Bench in Sita Soren v. Union of India (March 2024) overrule the 25-year-old precedent in P.V. Narasimha Rao (1998) regarding bribery immunity for legislators?`,
    topic: 'Executive & Legislature',
    relevantArticles: ['Article 105', 'Article 194', 'Article 19(1)(a)', 'Article 21'],
    bootcampDay: 9,
    coreIssues: [
      'Scope of constitutional immunity under Article 105(2) and 194(2).',
      'Judicial review of internal legislative proceedings (Keshav Singh & Raja Ram Pal).',
      'Overruling of P.V. Narasimha Rao: Bribery is not immune under Sita Soren (2024).'
    ],
    landmarkPrecedents: {
      classic: 'P.V. Narasimha Rao v. State (CBI) (1998) 4 SCC 626 & Raja Ram Pal (2007)',
      modern2024: 'Sita Soren v. Union of India (7-Judge Constitution Bench, March 2024)'
    },
    modelAnswer: `I. PARLIAMENTARY PRIVILEGES & CONSTITUTIONAL IMMUNITY:
Articles 105 (for Parliament) and 194 (for State Legislatures) confer two categories of privileges:
1. Freedom of Speech in Legislature (Art 105(1)): Free from ordinary restrictions under Article 19(2), subject only to the constitutional rules of procedure of the House.
2. Complete Speech & Vote Immunity (Art 105(2)): "No member of Parliament shall be liable to any proceedings in any court in respect of anything said or any vote given by him in Parliament or any committee thereof."

II. PRIVILEGES VS FUNDAMENTAL RIGHTS (KESHAV SINGH & RAJA RAM PAL):
1. In re Special Reference No. 1 of 1964 (Keshav Singh): The Supreme Court held that the legislature's power to punish for contempt is subject to judicial review. If an ordinary citizen is imprisoned for contempt of the legislature, the High Court under Article 226 has jurisdiction to examine if the committal violates Articles 21 and 22.
2. Raja Ram Pal v. Hon'ble Speaker, Lok Sabha (2007) (Cash-for-Query Case): The Court upheld Parliament's power to expel corrupt members, but affirmed that the exercise of parliamentary privilege is subject to judicial review for manifest arbitrariness or gross constitutional illegality.

III. THE 2024 WATERSHED: SITA SOREN OVERRULES P.V. NARASIMHA RAO:
1. The Flawed Doctrine of P.V. Narasimha Rao (1998):
In P.V. Narasimha Rao (1998), a 3:2 majority held that MPs who took bribes and voted in accordance with the briber's instructions were immune from criminal prosecution under Article 105(2) because the vote was cast "in Parliament." Paradoxically, an MP who accepted a bribe but did not vote was held liable to prosecution.

2. The 7-Judge Unanimous Overruling in Sita Soren (March 2024):
A unanimous 7-Judge Bench headed by CJI D.Y. Chandrachud completely overruled P.V. Narasimha Rao, laying down historic principles:
- Bribery is Independent of the Vote: The criminal offense of bribery under Section 7 of the Prevention of Corruption Act, 1988 is complete the moment the illegal gratification is accepted or agreed to be accepted. It does not depend on whether the vote is actually cast or speech delivered.
- Privileges are Functional, Not Personal: Parliamentary privilege is designed to protect collective legislative deliberation, not to grant personal impunity for criminal acts. Corruption and bribery destroy democratic probity and the basic structure.
- Dual Test of Privilege: To claim immunity under Article 105(2), the act must be tied to the collective deliberative process and essential to legislative function. Accepting a bribe is an assault on public trust and enjoys zero constitutional immunity.`,
    scoringRubric: [
      { criterion: 'Scope of Article 105(2) and Article 194(2) immunity', marks: 10 },
      { criterion: 'Keshav Singh Reference & Raja Ram Pal judicial review limits', marks: 15 },
      { criterion: 'Critique of the paradoxical 1998 P.V. Narasimha Rao majority ruling', marks: 10 },
      { criterion: 'Sita Soren (2024) 7-Judge Bench ratio & functional necessity test', marks: 15 }
    ]
  },
  {
    id: 'jkpsc-po-2018-q6',
    year: '2018–2019',
    exam: 'JKPSC Prosecuting Officer & Judicial Mains',
    paper: 'Paper-II: Constitutional Law',
    part: 'Part B',
    marks: 50,
    questionNumber: 6,
    title: 'Civil Services Safeguards — Article 311 & The Pleasure Doctrine Exceptions',
    questionText: `The Doctrine of Pleasure is an English common law import, but in India, it is subject to rigorous constitutional checks under Article 311. 

(a) Discuss the twin safeguards guaranteed to civil servants under Article 311(1) and Article 311(2).
(b) Analyze the three exceptional situations under the second proviso to Article 311(2) where an inquiry can be dispensed with.
(c) Examine the landmark ruling in Union of India v. Tulsiram Patel (1985) regarding judicial review of dismissals under the second proviso.`,
    topic: 'Administrative Law',
    relevantArticles: ['Article 310', 'Article 311', 'Article 14'],
    bootcampDay: 13,
    coreIssues: [
      'The Doctrine of Pleasure under Article 310 vs Constitutional Limitations.',
      'Procedural natural justice guarantees under Article 311(1) and (2).',
      'The three exceptional provisos (a), (b), (c) to Article 311(2) and Tulsiram Patel ratio.'
    ],
    landmarkPrecedents: {
      classic: 'Parshotam Lal Dhingra (1958) ➔ Union of India v. Tulsiram Patel (1985) 3 SCC 398',
      modern2024: 'State of Punjab v. Dr. P.L. Singla (2008) & A.P. Public Service Commission (2022)'
    },
    modelAnswer: `I. THE DOCTRINE OF PLEASURE AND ITS CONSTITUTIONAL BOUNDARIES:
Under Article 310 of the Constitution, members of the defense services, civil services of the Union, and All-India Services hold office during the pleasure of the President, and civil servants of a State hold office during the pleasure of the Governor (the English common law doctrine of "durante bene placito").

However, unlike the absolute royal prerogative in the United Kingdom, the Pleasure Doctrine in India is strictly subordinate to the constitutional safeguards enshrined in Article 311.

II. THE TWIN CONSTITUTIONAL SAFEGUARDS UNDER ARTICLE 311:
1. Subordination Shield (Article 311(1)):
No civil servant can be dismissed or removed by an authority subordinate to that by which they were appointed. An order passed by a subordinate authority is void ab initio.
2. Reasonable Opportunity / Natural Justice Shield (Article 311(2)):
No civil servant shall be dismissed, removed, or reduced in rank except after an inquiry in which they have been informed of the charges against them and given a reasonable opportunity of being heard in respect of those charges.

III. THE THREE EXCEPTIONAL SITUATIONS (SECOND PROVISO TO ARTICLE 311(2)):
Article 311(2) contains an express second proviso enumerating three specific situations where the mandatory disciplinary inquiry is dispensed with:
1. Proviso (a) — Conviction on Criminal Charge: Where a civil servant is dismissed, removed, or reduced in rank on the ground of conduct which has led to their conviction on a criminal charge by a court of competent jurisdiction.
2. Proviso (b) — Impracticability of Inquiry: Where the disciplinary authority empowered to dismiss or remove is satisfied, for reasons to be recorded by that authority in writing, that it is not reasonably practicable to hold such an inquiry.
3. Proviso (c) — Security of the State: Where the President or the Governor, as the case may be, is satisfied that in the interest of the security of the State, it is not expedient to hold such an inquiry.

IV. JUDICIAL REVIEW & THE TULSIRAM PATEL BENCHMARK (1985):
In the Constitution Bench ruling in Union of India v. Tulsiram Patel (1985) 3 SCC 398, the Supreme Court established the definitive principles:
1. Objective Recording of Reasons under Proviso (b): The disciplinary authority cannot mechanically dispense with an inquiry. The reasons recorded in writing must demonstrate real, objective impossibility (e.g. witnesses terrorized, complete breakdown of law and order). Subjective whim or administrative inconvenience is invalid.
2. Proviso (c) Subject to Limited Judicial Review: While the subjective satisfaction of the President/Governor regarding "security of the State" is based on intelligence reports, the court can examine whether the satisfaction was based on relevant material or tainted by mala fides.
3. Post-Decisional Remedy: If an inquiry was improperly dispensed with, the civil court or High Court under Article 226 has jurisdiction to quash the order of dismissal and reinstate the public servant with consequential benefits.`,
    scoringRubric: [
      { criterion: 'Pleasure doctrine (Art 310) vs Constitutional limitations', marks: 10 },
      { criterion: 'Twin safeguards under Article 311(1) and (2)', marks: 15 },
      { criterion: 'Detailed breakdown of the three provisos (a), (b), (c)', marks: 15 },
      { criterion: 'Tulsiram Patel ratio and scope of judicial review', marks: 10 }
    ]
  },
  {
    id: 'jkpsc-po-2018-q7',
    year: '2018–2019',
    exam: 'JKPSC Prosecuting Officer & Judicial Mains',
    paper: 'Paper-II: Constitutional Law',
    part: 'Part B',
    marks: 50,
    questionNumber: 7,
    title: 'Public Interest Litigation (PIL) — Locus Standi & Judicial Activism vs Overreach',
    questionText: `Public Interest Litigation (PIL) has democratized access to justice in India, but unrestricted PILs risk degenerating into "Publicity Interest Litigation" or judicial overreach.

(a) Trace the relaxation of the traditional rule of Locus Standi in S.P. Gupta v. Union of India (1981) and Bandhua Mukti Morcha (1984).
(b) Explain the concept of "Epistolary Jurisdiction" and procedural innovations devised by the Supreme Court under Article 32.
(c) Differentiate between legitimate "Judicial Activism" and impermissible "Judicial Overreach". What guidelines were laid down in State of Uttaranchal v. Balwant Singh Chaufal (2010) to curb frivolous PILs?`,
    topic: 'Judiciary & Writs',
    relevantArticles: ['Article 32', 'Article 226', 'Article 142', 'Article 39A'],
    bootcampDay: 6,
    coreIssues: [
      'Relaxation of traditional locus standi for disadvantaged classes.',
      'Epistolary jurisdiction: Treating postcards and letters as writ petitions.',
      'Judicial activism vs overreach & Balwant Singh Chaufal filtering rules.'
    ],
    landmarkPrecedents: {
      classic: 'S.P. Gupta (First Judges Case, 1981) & Bandhua Mukti Morcha (1984)',
      modern2024: 'State of Uttaranchal v. Balwant Singh Chaufal (2010) 3 SCC 402'
    },
    modelAnswer: `I. RELAXATION OF LOCUS STANDI (S.P. GUPTA & BANDHUA MUKTI MORCHA):
Under classical Anglo-Saxon jurisprudence, only a person whose specific legal right has been directly violated possesses "locus standi" (standing) to invoke judicial remedies.

In S.P. Gupta v. Union of India (1981) Supp SCC 87, Justice P.N. Bhagwati revolutionized Indian public law:
Where a legal wrong or injury is caused to a person or determinate class of persons who by reason of poverty, disability, or socially or economically disadvantaged position cannot approach the court for relief, any member of the public acting bona fide can maintain an application for an appropriate direction, order, or writ under Article 32 or 226.

In Bandhua Mukti Morcha v. Union of India (1984), the Court extended this to bonded laborers, holding that procedural technicalities cannot be permitted to thwart substantive human rights enforcement.

II. EPISTOLARY JURISDICTION & PROCEDURAL INNOVATIONS:
1. Postcards as Writ Petitions: In Sunil Batra (II) (1980), a prisoner’s handwritten letter complaining of custodial torture of a fellow prisoner was converted into a formal Habeas Corpus petition.
2. Fact-Finding Socio-Legal Commissions: In Bandhua Mukti Morcha, the Court recognized that indigent litigants cannot produce documentary proof; therefore, the Court appointed socio-legal inquiry commissions (district judges, academics, lawyers) to inspect quarries and verify facts under Article 32.

III. JUDICIAL ACTIVISM VS JUDICIAL OVERREACH:
1. Judicial Activism: Legitimate intervention by the judiciary to enforce fundamental rights when the political branches fail to discharge statutory obligations (e.g. Vishaka guidelines on sexual harassment, D.K. Basu arrest norms, or prisoner voting rights).
2. Judicial Overreach: Illegitimate judicial trespassing into core legislative or executive policymaking in violation of Separation of Powers (e.g. running municipality cleaning drives, fixing fuel prices, or directing statutory amendments).

IV. BALWANT SINGH CHAUFAL (2010) SCREENING GUIDELINES:
To prevent PIL abuse, the Supreme Court laid down eight binding guidelines:
1. Verification of Credentials: High Courts must verify the bona fides of the petitioner before entertaining a PIL.
2. Prima Facie Substance: Ensure the petition involves a genuine, substantial public grievance.
3. Rejection of Oblique Motives: PILs filed for political vendetta, commercial rivalry, personal publicity, or extortion must be dismissed with exemplary costs.`,
    scoringRubric: [
      { criterion: 'Relaxation of locus standi (S.P. Gupta & Bandhua Mukti Morcha)', marks: 15 },
      { criterion: 'Epistolary jurisdiction & socio-legal fact-finding commissions', marks: 15 },
      { criterion: 'Judicial activism vs overreach distinction & Separation of Powers', marks: 10 },
      { criterion: 'Balwant Singh Chaufal (2010) screening guidelines', marks: 10 }
    ]
  },
  {
    id: 'jkpsc-po-2018-q8',
    year: '2018–2019',
    exam: 'JKPSC Prosecuting Officer & Judicial Mains',
    paper: 'Paper-II: Constitutional Law',
    part: 'Part B',
    marks: 50,
    questionNumber: 8,
    title: 'Judicial Independence & Judicial Appointments — NJAC to Collegium System',
    questionText: `The independence of the judiciary is an integral part of the Basic Structure of the Indian Constitution, deeply intertwined with the process of appointing judges.

(a) Trace the evolution of the Collegium system through the Three Judges Cases (1981, 1993, and 1998).
(b) Critically examine the decision of the Supreme Court Advocates-on-Record Association v. Union of India (NJAC Case, 2015) striking down the 99th Constitutional Amendment Act.
(c) How did the Constitution Bench in Central Board of Dawoodi Bohra Community (2023) reiterate the binding nature of precedent and bench strength under Article 141?`,
    topic: 'Judiciary & Writs',
    relevantArticles: ['Article 124', 'Article 217', 'Article 141', 'Article 368'],
    bootcampDay: 10,
    coreIssues: [
      'Evolution from executive primacy to collegium primacy in judicial appointments.',
      'Invalidation of the 99th Constitutional Amendment and the NJAC.',
      'Precedent hierarchy and stare decisis under Article 141 (Dawoodi Bohra).'
    ],
    landmarkPrecedents: {
      classic: 'Second Judges Case (1993) & Third Judges Case (1998)',
      modern2024: 'NJAC Case (2015) 5 SCC 1 & Central Board of Dawoodi Bohra Community (2023)'
    },
    modelAnswer: `I. THE THREE JUDGES CASES & BIRTH OF THE COLLEGIUM:
Under Article 124(2) and Article 217(1), judges are appointed by the President after "consultation" with the Chief Justice of India and other judges. The meaning of "consultation" underwent three historic interpretations:
1. First Judges Case (S.P. Gupta v. UOI, 1981): 7-Judge Bench held that "consultation" does not mean "concurrence." The executive has primacy in judicial appointments, subject only to genuine consultation.
2. Second Judges Case (SCAORA v. UOI, 1993): 9-Judge Bench overruled S.P. Gupta, holding that "consultation" means "concurrence." To protect judicial independence, the CJI’s opinion has primacy, formed in consultation with the two senior-most judges of the Supreme Court (creating the Collegium).
3. Third Judges Case (Special Reference 1 of 1998): 9-Judge Bench expanded the Collegium to the CJI and four senior-most judges for Supreme Court appointments, and CJI and two senior-most judges for High Court appointments.

II. THE NJAC CASE (2015) — INVALIDATION OF THE 99TH AMENDMENT:
Parliament enacted the 99th Constitutional Amendment, 2014 creating the National Judicial Appointments Commission (NJAC) comprising the CJI, 2 senior judges, the Law Minister, and 2 eminent persons.
In Supreme Court Advocates-on-Record Association v. Union of India (2015) 5 SCC 1, a 5-Judge Constitution Bench struck down the 99th Amendment and the NJAC Act by a 4:1 majority:
1. Judicial Independence is Basic Structure: An independent judiciary requires that the appointment process must remain free from political or executive dominance.
2. The Veto Power Defect: Under the NJAC Act, any two members could veto an appointment. This meant the Law Minister and one eminent person could veto a unanimous recommendation of the judicial members, compromising judicial primacy.
3. Restoration of Collegium: The Court struck down the amendment and revived the pre-existing Collegium system.

III. PRECEDENT HIERARCHY UNDER ARTICLE 141 (DAWOODI BOHRA, 2023):
In Central Board of Dawoodi Bohra Community v. State of Maharashtra (2023), the 5-Judge Constitution Bench settled cardinal rules of Stare Decisis:
1. Bench Strength Primacy: The law declared by a larger bench of the Supreme Court is binding on all smaller benches and coordinated benches of equal strength.
2. Reference Protocol: A smaller bench cannot doubt or overrule a larger bench ruling; it can only state its reservations and request the Chief Justice of India to refer the issue to a larger bench. This strict adherence ensures legal certainty and stability.`,
    scoringRubric: [
      { criterion: 'Three Judges Cases evolution (1981, 1993, 1998)', marks: 15 },
      { criterion: 'NJAC case (2015) grounds of invalidation (Veto defect & Basic Structure)', marks: 15 },
      { criterion: 'Article 141 precedent hierarchy & Dawoodi Bohra (2023) ratio', marks: 10 },
      { criterion: 'Constitutional balance between executive checks and judicial primacy', marks: 10 }
    ]
  }
];
