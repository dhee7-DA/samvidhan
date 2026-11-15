import type { BootcampMCQ } from '../bootcampTypes';

export const DAY1_MCQS_ROUND_2: BootcampMCQ[] = [
  {
    id: 'd1-r2-q1',
    round: 'Landmark Precedents',
    question: 'In the landmark Presidential Reference In re Berubari Union (1960), an 8-Judge Bench of the Supreme Court held that:',
    options: [
      'The Preamble is an integral part of the Constitution and confers substantive powers on Parliament',
      'The Preamble is not a part of the Constitution and can never be regarded as the source of any substantive power',
      'Parliament can cede Indian territory to a foreign nation under Article 3 without a constitutional amendment',
      'Article 13(2) does not apply to state legislation'
    ],
    correctIndex: 1,
    explanation: 'In In re Berubari Union (1960), the Supreme Court held that the Preamble is not part of the Constitution and is not a source of substantive legislative powers. This view was later explicitly overruled in Kesavananda Bharati (1973).',
    articleRef: 'Preamble & Article 3',
    difficulty: 'Foundational'
  },
  {
    id: 'd1-r2-q2',
    round: 'Landmark Precedents',
    question: 'In In re Berubari Union (1960), what was the Supreme Court\'s ruling regarding the cession of Indian territory (Berubari Enclave No. 12) to Pakistan?',
    options: [
      'Parliament can cede territory by ordinary law under Article 3(c) by diminishing state area',
      'Cession of national territory to a foreign sovereign is outside the scope of Article 3 and can only be effected by an amendment of the Constitution under Article 368',
      'The Prime Minister can cede territory via executive agreement without parliamentary approval',
      'Cession is strictly unconstitutional even by constitutional amendment'
    ],
    correctIndex: 1,
    explanation: 'The Supreme Court ruled that Article 3 only deals with internal reorganization of Indian territory. Ceding national territory to a foreign State requires an amendment under Article 368 (which led to the 9th Constitutional Amendment Act, 1960).',
    articleRef: 'Article 3 & Article 368',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r2-q3',
    round: 'Landmark Precedents',
    question: 'In Ram Kishore Sen v. Union of India (1966) and Maganbhai Ishwarbhai Patel (1969), how did the Supreme Court distinguish Berubari regarding international borders?',
    options: [
      'Overruled Berubari completely',
      'Held that a settlement or demarcation of a disputed international boundary does NOT amount to cession of territory and can be implemented by executive action without Article 368 amendment',
      'Held that all boundary adjustments require a 2/3rd majority plus state ratification',
      'Held that the military can demarcate borders without civilian cabinet approval'
    ],
    correctIndex: 1,
    explanation: 'The Court held that settling an undemarcated disputed boundary is a recognition of existing pre-existing sovereignty rather than cession. Hence, an Article 368 amendment is not required unless undisputed Indian territory is surrendered.',
    articleRef: 'Article 1 & Article 3',
    difficulty: 'Case Law / Advanced'
  },
  {
    id: 'd1-r2-q4',
    round: 'Landmark Precedents',
    question: 'In Union of India v. Sukumar Sengupta (1990), regarding the "Teen Bigha Corridor" lease to Bangladesh, what did the Supreme Court hold?',
    options: [
      'Leasing sovereign territory is void ab initio',
      'Conferring mere vehicular transit rights or perpetual lease without transferring sovereign title does NOT amount to cession of territory and does not require Article 368 amendment',
      'Requires a constitutional amendment under Article 368',
      'Requires unanimous consent of the West Bengal Legislative Assembly'
    ],
    correctIndex: 1,
    explanation: 'The Supreme Court held that granting transit facilities across the Teen Bigha corridor without transferring sovereign ownership did not amount to cession, and therefore could be effected without amending the Constitution.',
    articleRef: 'Article 1 & Article 368',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r2-q5',
    round: 'Landmark Precedents',
    question: 'In Kesavananda Bharati v. State of Kerala (1973, 13-Judge Bench), what was the landmark ratio regarding the constitutional status of the Preamble?',
    options: [
      'The Preamble is an unamendable divine code',
      'The Preamble is an integral part of the Constitution, embodies the fundamental goals and Basic Structure, and can be amended under Article 368 provided the Basic Structure is not destroyed',
      'Reaffirmed the Berubari view that the Preamble is not part of the Constitution',
      'The Preamble has no legal significance in constitutional interpretation'
    ],
    correctIndex: 1,
    explanation: 'Overruling Berubari, the 13-Judge Bench unanimously held that the Preamble was voted on and adopted as part of the Constitution by the Constituent Assembly. It can be amended under Article 368 without altering the Basic Structure.',
    articleRef: 'Preamble & Article 368',
    difficulty: 'Foundational'
  },
  {
    id: 'd1-r2-q6',
    round: 'Landmark Precedents',
    question: 'In S.R. Bommai v. Union of India (1994, 9-Judge Bench), which concepts in the Preamble were explicitly held to be part of the "Basic Structure" of the Constitution?',
    options: [
      'Secularism, Federalism, and Democracy',
      'Only the word "Socialist"',
      'Capitalism and Free Market',
      'Unitary supremacy of the Central Government'
    ],
    correctIndex: 0,
    explanation: 'In S.R. Bommai (1994), the 9-Judge Bench ruled that Secularism, Federalism, and Democracy are inviolable parts of the Basic Structure of the Indian Constitution as reflected in the Preamble.',
    articleRef: 'Preamble & Article 356',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r2-q7',
    round: 'Landmark Precedents',
    question: 'In Babulal Parate v. State of Bombay (1960), what did the Supreme Court hold regarding the Proviso to Article 3?',
    options: [
      'Parliament cannot introduce any bill without written consent of the State Assembly',
      'Once a Bill is referred to the State Legislature, any subsequent amendments made in Parliament do NOT require a fresh reference to the State Assembly, and the state\'s views are purely advisory',
      'A fresh reference is mandatory for every single word changed in Parliament',
      'The State Legislature has a pocket veto over Article 3 bills'
    ],
    correctIndex: 1,
    explanation: 'The Supreme Court ruled that Article 3 Proviso requires reference of the original Bill. If Parliament amends the Bill during passage, a fresh reference to the State Legislature is not constitutionally necessary.',
    articleRef: 'Article 3 Proviso',
    difficulty: 'Case Law / Advanced'
  },
  {
    id: 'd1-r2-q8',
    round: 'Landmark Precedents',
    question: 'In In re Article 370 of the Constitution (2023, 5-Judge Constitution Bench), what observation was made regarding Parliament\'s power under Article 3 during President\'s Rule?',
    options: [
      'Parliament can never alter state boundaries during President\'s Rule',
      'The Union Government gave a solemn undertaking that statehood for Jammu & Kashmir would be restored, leaving open whether a State can be permanently converted into a Union Territory under Article 3',
      'Parliament has unlimited power to abolish all States and turn India into a single Union Territory',
      'Article 3 cannot be invoked during peacetime'
    ],
    correctIndex: 1,
    explanation: 'In the Article 370 judgment (Dec 2023), the 5-Judge Bench noted the Solicitor General\'s undertaking that statehood of J&K would be restored, leaving the broader question of whether Article 3 permits complete conversion of a State into a UT open, while upholding the carving out of Ladakh as a UT.',
    articleRef: 'Article 3 & Article 370',
    difficulty: 'Case Law / Advanced'
  },
  {
    id: 'd1-r2-q9',
    round: 'Landmark Precedents',
    question: 'In Sukhdev Singh v. Bhagatram (1975), which statutory bodies were held to be "the State" under Article 12?',
    options: [
      'Oil and Natural Gas Commission (ONGC), Life Insurance Corporation (LIC), and Industrial Finance Corporation (IFC)',
      'BCCI and Indian Olympic Association',
      'Tata Sons and Reliance Industries',
      'Private unaided charitable dispensaries'
    ],
    correctIndex: 0,
    explanation: 'In Sukhdev Singh (1975), a Constitution Bench held that statutory corporations created by statutes (ONGC, LIC, IFC) having rules and regulations with the force of law are authorities under Article 12.',
    articleRef: 'Article 12',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r2-q10',
    round: 'Landmark Precedents',
    question: 'The modern test of "instrumentality or agency of the State" under Article 12 was first comprehensively formulated by Justice P.N. Bhagwati in:',
    options: [
      'A.K. Gopalan v. State of Madras (1950)',
      'Ramana Dayaram Shetty v. International Airport Authority of India (1979)',
      'Kesavananda Bharati v. State of Kerala (1973)',
      'Minerva Mills v. Union of India (1980)'
    ],
    correctIndex: 1,
    explanation: 'In Ramana Dayaram Shetty (1979), Justice Bhagwati laid down the foundational functional and financial parameters to determine whether a corporation or society is an "instrumentality or agency" of the Government.',
    articleRef: 'Article 12',
    difficulty: 'Foundational'
  },
  {
    id: 'd1-r2-q11',
    round: 'Landmark Precedents',
    question: 'In Ajay Hasia v. Khalid Mujib (1981, 5-Judge Bench), the Supreme Court synthesized how many cumulative/indicative factors to test whether an entity is State under Article 12?',
    options: [
      '3 Factors',
      '6 Factors',
      '10 Factors',
      '12 Factors'
    ],
    correctIndex: 1,
    explanation: 'Ajay Hasia laid down the famous 6-factor test: (1) Entire share capital held by Govt; (2) Deep and pervasive state control; (3) State financial assistance; (4) Monopoly status; (5) Functions of public importance; (6) Department transferred to corporation.',
    articleRef: 'Article 12',
    difficulty: 'Foundational'
  },
  {
    id: 'd1-r2-q12',
    round: 'Landmark Precedents',
    question: 'Which 7-Judge Constitution Bench decision in 2002 reconsidered and refined the Ajay Hasia test and overruled Sabhajit Tewary (1975)?',
    options: [
      'T.M.A. Pai Foundation v. State of Karnataka',
      'Pradeep Kumar Biswas v. Indian Institute of Chemical Biology (2002) 5 SCC 111',
      'P.A. Inamdar v. State of Maharashtra',
      'I.R. Coelho v. State of Tamil Nadu'
    ],
    correctIndex: 1,
    explanation: 'In Pradeep Kumar Biswas (2002), a 7-Judge Bench by 5:2 majority overruled Sabhajit Tewary, held CSIR to be an instrumentality of State, and formulated the test of whether the body is "financially, functionally, and administratively dominated by or under the pervasive control of the Government".',
    articleRef: 'Article 12',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r2-q13',
    round: 'Landmark Precedents',
    question: 'In Zee Telefilms Ltd. v. Union of India (2005, 5-Judge Bench), what was the ruling regarding the Board of Control for Cricket in India (BCCI)?',
    options: [
      'BCCI is State under Article 12 because cricket is of supreme public importance',
      'BCCI is NOT State under Article 12 as it is not created by statute and lacks deep financial/administrative governmental control, but it is amenable to High Court writ jurisdiction under Article 226 for discharging public duties',
      'BCCI is immune from both Article 12 and Article 226',
      'BCCI was ordered to be dissolved by the Court'
    ],
    correctIndex: 1,
    explanation: 'In Zee Telefilms (2005), the 5-Judge Bench held by 3:2 majority that BCCI is not "the State" under Article 12, but affirmed that a writ under Article 226 lies against it for arbitrary actions in discharge of its public functions.',
    articleRef: 'Article 12 & Article 226',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r2-q14',
    round: 'Landmark Precedents',
    question: 'In Janet Jeyapaul v. SRM University (2015), the Supreme Court held that:',
    options: [
      'Private universities are completely immune from writ jurisdiction',
      'A deemed private university imparting higher education discharges a public function, and a writ petition under Article 226 is maintainable against it by an employee',
      'Article 226 only applies to government schools',
      'Writ petitions require prior sanction of the UGC Chairman'
    ],
    correctIndex: 1,
    explanation: 'The Supreme Court ruled that imparting higher education is an essential public function; hence, an unaided deemed university is amenable to writ jurisdiction under Article 226.',
    articleRef: 'Article 226 & Article 12',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r2-q15',
    round: 'Landmark Precedents',
    question: 'The "Doctrine of Eclipse" was first enunciated by the Supreme Court in which landmark judgment?',
    options: [
      'A.K. Gopalan v. State of Madras (1950)',
      'Bhikaji Narain Dhakras v. State of Madhya Pradesh (1955) 2 SCR 589',
      'Kathi Kalu Oghad (1961)',
      'Golak Nath v. State of Punjab (1967)'
    ],
    correctIndex: 1,
    explanation: 'In Bhikaji Narain Dhakras (1955), the Supreme Court formulated the Doctrine of Eclipse: pre-constitutional laws that violate fundamental rights are not dead; they are overshadowed/eclipsed and revive when the constitutional barrier is removed.',
    articleRef: 'Article 13(1)',
    difficulty: 'Foundational'
  },
  {
    id: 'd1-r2-q16',
    round: 'Landmark Precedents',
    question: 'In Bhikaji Narain Dhakras (1955), how did the C.P. and Berar Motor Vehicles (Amendment) Act, 1948 revive?',
    options: [
      'By re-enactment by Parliament',
      'By the 1st Constitutional Amendment Act, 1951, which amended Article 19(6) allowing the State to create transport monopolies, thereby lifting the eclipse',
      'By order of the Governor',
      'By proclamation of Emergency'
    ],
    correctIndex: 1,
    explanation: 'The 1948 pre-constitutional statute creating state transport monopoly was eclipsed on 26 Jan 1950 by Art 19(1)(g). When the 1st Amendment (1951) amended Art 19(6) to permit state monopolies, the shadow was removed and the Act became operative without re-enactment.',
    articleRef: 'Article 13(1) & Article 19(6)',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r2-q17',
    round: 'Landmark Precedents',
    question: 'In Deep Chand v. State of U.P. (1959) and Mahendra Lal Jaini (1963), what did the Supreme Court hold regarding the applicability of the Doctrine of Eclipse to post-constitutional laws?',
    options: [
      'The Doctrine of Eclipse applies equally to both pre-constitutional and post-constitutional laws',
      'The Doctrine of Eclipse applies ONLY to pre-constitutional laws under Article 13(1); a post-constitutional law made in breach of Article 13(2) is stillborn (dead at birth) and cannot be revived by a subsequent constitutional amendment',
      'Post-constitutional laws can be revived by presidential executive order',
      'Eclipse applies only to taxation statutes'
    ],
    correctIndex: 1,
    explanation: 'In Deep Chand (1959) and Mahendra Lal Jaini (1963), the Supreme Court ruled that Article 13(2) is an absolute fetter on legislative competence. A post-constitutional law violating Part III is a stillborn law and a total nullity ab initio that cannot be revived by eclipse.',
    articleRef: 'Article 13(2)',
    difficulty: 'Case Law / Advanced'
  },
  {
    id: 'd1-r2-q18',
    round: 'Landmark Precedents',
    question: 'In State of Gujarat v. Ambica Mills (1974), what exception was recognized regarding a post-constitutional law violating Article 19 in respect of non-citizens/corporations?',
    options: [
      'A post-constitutional law violating Article 19 is not stillborn vis-a-vis non-citizens and corporate entities who do not possess fundamental rights under Article 19',
      'Corporations are citizens of India',
      'Article 19 applies to foreign multinationals',
      'Ambica Mills overruled Deep Chand'
    ],
    correctIndex: 0,
    explanation: 'In Ambica Mills (1974), Justice Mathew held that a law violating Article 19 is void only against citizens. Since a non-citizen or corporation possesses no Article 19 rights, the statute is not a nullity as regards them, creating a qualified eclipse.',
    articleRef: 'Article 13(2) & Article 19',
    difficulty: 'Case Law / Advanced'
  },
  {
    id: 'd1-r2-q19',
    round: 'Landmark Precedents',
    question: 'The seminal rules governing the "Doctrine of Severability" were authoritatively laid down by the Supreme Court in:',
    options: [
      'R.M.D. Chamarbaugwalla v. Union of India (1957) SCR 930',
      'Shankari Prasad v. Union of India (1951)',
      'A.K. Roy v. Union of India (1982)',
      'Maneka Gandhi v. Union of India (1978)'
    ],
    correctIndex: 0,
    explanation: 'In R.M.D. Chamarbaugwalla (1957), Justice Venkatarama Ayyar formulated 7 comprehensive propositions on Severability: if valid and invalid provisions are distinct and the legislature would have enacted the valid part independently, the valid portion survives.',
    articleRef: 'Article 13',
    difficulty: 'Foundational'
  },
  {
    id: 'd1-r2-q20',
    round: 'Landmark Precedents',
    question: 'In R.M.D. Chamarbaugwalla (1957), how did the Supreme Court apply the Doctrine of Severability to the Prize Competitions Act, 1955?',
    options: [
      'Struck down the entire Act',
      'Severed gambling prize competitions (which have no trade protection under Art 19(1)(g)) from competitions involving substantial skill, upholding the Act regarding gambling',
      'Held that gambling is a fundamental right',
      'Declared that severability does not apply to commercial laws'
    ],
    correctIndex: 1,
    explanation: 'The Court held that the definition of "prize competition" could be severed so that it applied to competitions of a gambling nature without affecting competitions requiring substantial skill.',
    articleRef: 'Article 13 & Article 19(1)(g)',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r2-q21',
    round: 'Landmark Precedents',
    question: 'In Basheshar Nath v. CIT (1959), which Fundamental Right did the assessee purport to waive, and what did the Supreme Court hold?',
    options: [
      'Article 21 right to life; Court permitted waiver',
      'Article 14 equality right; Court held that Fundamental Rights in Part III are matters of high public policy and cannot be waived by any citizen',
      'Article 19 freedom of trade; Court held all economic rights can be waived',
      'Article 25 right to religion; Court permitted waiver by settlement'
    ],
    correctIndex: 1,
    explanation: 'In Basheshar Nath (1959), a Constitution Bench held that an assessee who settled tax liabilities under an unconstitutional statute could not be said to have waived his Article 14 rights, as fundamental rights cannot be waived in India.',
    articleRef: 'Article 13 & Article 14',
    difficulty: 'Case Law / Advanced'
  },
  {
    id: 'd1-r2-q22',
    round: 'Landmark Precedents',
    question: 'In Som Prakash Rekhi v. Union of India (1981), which entity was held to be State under Article 12 using the "lifting the corporate veil" doctrine?',
    options: [
      'Bharat Petroleum Corporation Limited (BPCL)',
      'Tata Motors',
      'State Bank of India',
      'Infosys Technologies'
    ],
    correctIndex: 0,
    explanation: 'In Som Prakash Rekhi (1981), Justice Krishna Iyer held that BPCL, though a registered government company, was an alter ego and instrumentality of the Central Government under Article 12, piercing the corporate veil.',
    articleRef: 'Article 12',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r2-q23',
    round: 'Landmark Precedents',
    question: 'In Central Inland Water Transport Corporation v. Brojo Nath Ganguly (1986), what did the Supreme Court hold regarding arbitrary employment termination rules?',
    options: [
      'Private companies can fire employees at will',
      'Rule 9(i) of the Corporation permitting termination of a permanent employee without reasons on 3 months\' notice was arbitrary, violative of Article 14, and void under Section 23 of the Contract Act',
      'Article 14 does not apply to employment contracts',
      'Public corporations have absolute immunity'
    ],
    correctIndex: 1,
    explanation: 'The Court held that the Government corporation was "State" under Article 12 and its unconscionable "hire and fire" clause was opposed to public policy and violative of Article 14.',
    articleRef: 'Article 12 & Article 14',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r2-q24',
    round: 'Landmark Precedents',
    question: 'In Ujjam Bai v. State of U.P. (1962, 7-Judge Bench), what was the ruling regarding judicial/quasi-judicial orders and Article 12?',
    options: [
      'A quasi-judicial authority acting with jurisdiction cannot commit a breach of Fundamental Rights merely by an erroneous interpretation of a valid law',
      'All tax assessment orders violate Article 19',
      'Quasi-judicial authorities are not authorities under Article 12',
      'Article 32 lies directly against every tax officer\'s factual calculation'
    ],
    correctIndex: 0,
    explanation: 'The 7-Judge Bench held that an order of assessment made by an authority acting quasi-judicially within its jurisdiction under a valid statute does not violate fundamental rights merely because it is mistaken on facts or law.',
    articleRef: 'Article 12 & Article 32',
    difficulty: 'Case Law / Advanced'
  },
  {
    id: 'd1-r2-q25',
    round: 'Landmark Precedents',
    question: 'In Naresh Shridhar Mirajkar v. State of Maharashtra (1967, 9-Judge Bench), the Supreme Court ruled that:',
    options: [
      'High Court judicial orders can be challenged by writ under Article 32 for violating Article 19(1)(a)',
      'A judicial order passed by a superior court of competent jurisdiction prohibiting court reporting of evidence cannot be challenged under Article 32 as violating Fundamental Rights',
      'Judges are personally liable under Article 12',
      'Court proceedings must never be in camera'
    ],
    correctIndex: 1,
    explanation: 'A 9-Judge Bench held that judicial orders of High Courts are not amenable to writ petitions under Article 32, confirming that superior judiciary acting judicially is not "the State" under Article 12.',
    articleRef: 'Article 12 & Article 32',
    difficulty: 'Case Law / Advanced'
  },
  {
    id: 'd1-r2-q26',
    round: 'Landmark Precedents',
    question: 'In A.R. Antulay v. R.S. Nayak (1988, 7-Judge Bench), how did the Supreme Court qualify Mirajkar regarding judicial directions?',
    options: [
      'Completely overruled Mirajkar',
      'Held that if a bench of the Supreme Court itself violates fundamental rights (Article 14 and 21) by giving directions contrary to statutory trial procedures, the Court has inherent power ex debito justitiae to correct its own error',
      'Held that criminal trials cannot be transferred',
      'Held that MPs are not public servants'
    ],
    correctIndex: 1,
    explanation: 'In Antulay (1988), the 7-Judge Bench held that no court, not even the Supreme Court, can pass an order that violates a citizen\'s fundamental rights; such an order is a nullity and must be recalled ex debito justitiae.',
    articleRef: 'Article 12, 14, 21',
    difficulty: 'Case Law / Advanced'
  },
  {
    id: 'd1-r2-q27',
    round: 'Landmark Precedents',
    question: 'In Rupa Ashok Hurra v. Ashok Hurra (2002, 5-Judge Constitution Bench), what remedy was created against final judgments of the Supreme Court?',
    options: [
      'Writ of Habeas Corpus under Article 32',
      'The "Curative Petition" under the inherent powers of the Supreme Court (Article 142) to prevent miscarriage of justice or bias',
      'Appeal to the President of India',
      'Review Petition before the High Court'
    ],
    correctIndex: 1,
    explanation: 'The Supreme Court confirmed that no Article 32 writ lies against a final judgment of the Supreme Court, but created the remedy of "Curative Petition" under Article 142 on grounds of violation of natural justice or judicial bias.',
    articleRef: 'Article 12, 32, 142',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r2-q28',
    round: 'Landmark Precedents',
    question: 'In Mangal Singh v. Union of India (1967), what did the Supreme Court clarify regarding Parliament\'s supplemental powers under Article 4?',
    options: [
      'Parliament can abolish the High Court of a new State and deny citizens judicial remedies',
      'Power to make supplemental and incidental laws under Article 4 does not authorize Parliament to violate the basic constitutional framework of a democratic State with legislative, executive, and judicial organs',
      'Parliament can suspend elections permanently in newly formed States',
      'Article 4 powers are superior to Article 368'
    ],
    correctIndex: 1,
    explanation: 'The Supreme Court held that while Article 4 allows consequential adjustments, it does not permit Parliament to set up a State that does not conform to the democratic constitutional pattern of the Constitution.',
    articleRef: 'Article 4',
    difficulty: 'Case Law / Advanced'
  },
  {
    id: 'd1-r2-q29',
    round: 'Landmark Precedents',
    question: 'In Golak Nath v. State of Punjab (1967, 11-Judge Bench), what was Chief Justice Subba Rao\'s majority ratio regarding Article 13 and Article 368?',
    options: [
      'Article 368 gives sovereign amending power immune from Article 13',
      'An amendment under Article 368 is "law" within the meaning of Article 13(2), and therefore Parliament has no power to abridge or take away Fundamental Rights',
      'The Preamble is unamendable',
      'Fundamental Rights can be abolished by presidential ordinance'
    ],
    correctIndex: 1,
    explanation: 'By a 6:5 majority, Golak Nath held that an amendment under Article 368 is an ordinary legislative enactment ("law" under Article 13(2)) and cannot abridge Fundamental Rights.',
    articleRef: 'Article 13(2) & Article 368',
    difficulty: 'Foundational'
  },
  {
    id: 'd1-r2-q30',
    round: 'Landmark Precedents',
    question: 'In Shankari Prasad v. Union of India (1951) and Sajjan Singh (1965), what was the Supreme Court\'s initial view on the word "law" in Article 13(2)?',
    options: [
      'The word "law" includes constitutional amendments under Article 368',
      'The word "law" in Article 13(2) refers only to ordinary rules/statutes enacted in legislative capacity, not to constituent amendments passed under Article 368',
      'Fundamental Rights are immutable',
      'Judicial review of amendments is a basic feature'
    ],
    correctIndex: 1,
    explanation: 'In Shankari Prasad and Sajjan Singh, the Court held that constituent amending power under Article 368 was distinct from legislative power, and "law" in Article 13(2) did not include constitutional amendments.',
    articleRef: 'Article 13(2) & Article 368',
    difficulty: 'Foundational'
  },
  {
    id: 'd1-r2-q31',
    round: 'Landmark Precedents',
    question: 'In Minerva Mills Ltd. v. Union of India (1980), what did the Supreme Court hold regarding the relationship between Part III and Part IV?',
    options: [
      'Part IV has complete supremacy over Part III',
      'Part III and Part IV are like two wheels of a chariot, and the balance between Fundamental Rights and Directive Principles is an essential feature of the Basic Structure',
      'Directive Principles are legally unenforceable illusions',
      'Fundamental Rights can be extinguished for economic planning'
    ],
    correctIndex: 1,
    explanation: 'In Minerva Mills (1980), Justice Chandrachud poetically stated that the harmony and balance between Fundamental Rights and Directive Principles of State Policy is an essential element of the Basic Structure of the Constitution.',
    articleRef: 'Preamble, Part III & Part IV',
    difficulty: 'Foundational'
  },
  {
    id: 'd1-r2-q32',
    round: 'Landmark Precedents',
    question: 'In State of Karnataka v. Ranganatha Reddy (1977) and Sanjeev Coke (1983), the Supreme Court interpreted "material resources of the community" in Article 39(b) in relation to the Preamble word "Socialist" to include:',
    options: [
      'Only state-owned forest land',
      'Both public and privately owned resources distributed to subserve the common good',
      'Only mineral resources in the sea',
      'Only government treasury funds'
    ],
    correctIndex: 1,
    explanation: 'Justice Krishna Iyer held that "material resources of the community" embraced private resources as well, reflecting the socialist goals of the Preamble.',
    articleRef: 'Preamble & Article 39(b)',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r2-q33',
    round: 'Landmark Precedents',
    question: 'In Property Owners Association v. State of Maharashtra (9-Judge Constitution Bench, Nov 2024), how did Chief Justice Chandrachud redefine "material resources of the community" under Article 39(b)?',
    options: [
      'Overruled Justice Krishna Iyer\'s broad doctrine; held that not all privately owned property can be automatically considered "material resources of the community"',
      'Declared that all private homes belong to the government',
      'Struck down Article 39(b)',
      'Held that the Preamble word Socialist was unconstitutional'
    ],
    correctIndex: 0,
    explanation: 'In Nov 2024, the 9-Judge Bench held that private property does not automatically qualify as material resources of the community under Article 39(b); whether it qualifies depends on public impact, scarcity, and community necessity.',
    articleRef: 'Preamble & Article 39(b)',
    difficulty: 'Case Law / Advanced'
  },
  {
    id: 'd1-r2-q34',
    round: 'Landmark Precedents',
    question: 'In Excel Wear v. Union of India (1978), the Supreme Court examined the word "Socialist" in the Preamble and held that:',
    options: [
      'India is a totalitarian communist state where private ownership is prohibited',
      'The concept of socialism in India is democratic socialism advocating a mixed economy, not complete nationalization or expropriation of private property',
      'Private factory owners have no rights',
      'Socialist was an unconstitutional insertion'
    ],
    correctIndex: 1,
    explanation: 'In Excel Wear (1978), the Supreme Court held that adding the word "Socialist" does not justify totalitarian nationalization; India’s socialism envisages a mixed economy protecting both private and public sectors.',
    articleRef: 'Preamble',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r2-q35',
    round: 'Landmark Precedents',
    question: 'In Aruna Roy v. Union of India (2002), how did the Supreme Court interpret "Secularism" in the Preamble in the context of value-based religious education?',
    options: [
      'Secularism means anti-religious instruction',
      'Secularism in India does not mean hostility to religion; it means equal respect for all religions ("Sarva Dharma Sambhava") and study of religious philosophies to promote national tolerance',
      'Teaching about any religion is strictly unconstitutional',
      'Only minority religions can be taught in schools'
    ],
    correctIndex: 1,
    explanation: 'In Aruna Roy (2002), the Supreme Court held that secularism does not mean a passive or negative separation from religion, but positive secularism promoting mutual understanding among all faiths.',
    articleRef: 'Preamble & Article 28',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r2-q36',
    round: 'Landmark Precedents',
    question: 'In G. Sundarrajan v. Union of India (2013, Kudankulam Nuclear Plant Case), what was the Preamble balance struck by the Supreme Court?',
    options: [
      'Economic development at the cost of life is permitted',
      'The Court balanced the Preamble goal of economic/social progress with the Article 21 right to life, holding that national safety and environmental safeguards must be strictly certified for nuclear projects',
      'Nuclear energy is banned under the Preamble',
      'Local panchayats have a veto over atomic energy'
    ],
    correctIndex: 1,
    explanation: 'The Supreme Court emphasized that larger public interest, national energy security, and technological advancement must be harmonized with environmental safety under Article 21.',
    articleRef: 'Preamble & Article 21',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r2-q37',
    round: 'Landmark Precedents',
    question: 'In Binny Ltd. v. V. Sadasivan (2005), regarding writ jurisdiction against private entities under Article 226, the Supreme Court held:',
    options: [
      'Writs lie against all private companies regardless of duty',
      'A private body is amenable to Article 226 only when it is discharging a public function or duty, and the challenged action has direct nexus with that public duty; purely private contractual employment disputes cannot be entertained under Article 226',
      'Writs never lie against private bodies under any circumstances',
      'Only the Supreme Court can issue writs against private bodies'
    ],
    correctIndex: 1,
    explanation: 'The Supreme Court held that for Article 226 to apply to a non-statutory body, the function must be public in character, and the breach must relate to that public duty.',
    articleRef: 'Article 226 & Article 12',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r2-q38',
    round: 'Landmark Precedents',
    question: 'In St. Mary\'s Education Society v. Rajendra Prasad Shekar (2022), the Supreme Court reaffirmed that an unaided private minority school:',
    options: [
      'Is State under Article 12',
      'Discharges a public function in imparting education, but a dispute regarding termination of a teacher devoid of statutory rules is a private employment contract not amenable to Article 226',
      'Is immune from criminal law',
      'Must get its syllabus approved by the Governor'
    ],
    correctIndex: 1,
    explanation: 'The Supreme Court held that although teaching is a public function, individual service contracts of teachers in unaided private schools are private contracts outside Article 226 unless backed by statutory mandates.',
    articleRef: 'Article 226 & Article 12',
    difficulty: 'Case Law / Advanced'
  },
  {
    id: 'd1-r2-q39',
    round: 'Landmark Precedents',
    question: 'In K.K. Kochunni v. State of Madras (1960), what did the Supreme Court hold regarding the application of the Doctrine of Severability to administrative orders?',
    options: [
      'Severability applies only to plenary Acts of Parliament, not executive orders',
      'Severability applies equally to statutes, delegated legislation, and administrative notifications',
      'Severability cannot save any part of an order',
      'Executive orders are always void ab initio'
    ],
    correctIndex: 1,
    explanation: 'The Court ruled that the Doctrine of Severability applies across all forms of "law" under Article 13(3)(a), including statutory orders and executive rules.',
    articleRef: 'Article 13(3)(a)',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r2-q40',
    round: 'Landmark Precedents',
    question: 'In Behram Khurshed Pesikaka v. State of Bombay (1955), how did the Constitution Bench interpret the declaration of a statute as unconstitutional under Article 13(1)?',
    options: [
      'The statute remains valid until the Governor assents to its deletion',
      'Once a statute is declared void for violating Part III, it is notionally effaced from the statute book as regards the enforcement of fundamental rights, and no citizen can be convicted under that void section',
      'Citizens can still be convicted if the crime occurred before the judgment',
      'The judgment has only prospective political effect'
    ],
    correctIndex: 1,
    explanation: 'In Behram Khurshed (1955), Chief Justice Mahajan held that a declaration of voidness under Article 13(1) strips the statute of its legal force; it is effaced and cannot sustain a criminal prosecution.',
    articleRef: 'Article 13(1)',
    difficulty: 'Case Law / Advanced'
  }
];
