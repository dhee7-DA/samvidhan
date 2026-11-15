import type { BootcampMCQ } from '../bootcampTypes';

export const DAY1_MCQS_ROUND_3: BootcampMCQ[] = [
  {
    id: 'd1-r3-q1',
    round: 'Assertion-Reasoning',
    question: `Given below are two statements:
Assertion (A): The Parliament of India has the constitutional power to alter the boundaries of any State without obtaining the consent of that State's Legislature.
Reason (R): Under the Proviso to Article 3, the views expressed by the State Legislature are consultative only and are not binding on Parliament.`,
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctIndex: 0,
    explanation: 'Both statements are true. As settled in Babulal Parate v. State of Bombay (1960), the Indian Constitution vests plenary reorganizing power in Parliament, and the views of the State Assembly are consultative rather than binding.',
    articleRef: 'Article 3 Proviso',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r3-q2',
    round: 'Assertion-Reasoning',
    question: `Consider the following statements regarding the Preamble of the Constitution of India:
1. The Preamble is an integral part of the Constitution.
2. The Preamble can be amended under Article 368 without altering the Basic Structure.
3. The Preamble is a source of substantive legislative powers for Parliament.
Which of the statements given above are correct?`,
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2, and 3'
    ],
    correctIndex: 0,
    explanation: 'Statements 1 and 2 are correct (Kesavananda Bharati 1973). Statement 3 is incorrect because the Preamble neither confers substantive powers on Parliament nor acts as a prohibition on legislative power.',
    articleRef: 'Preamble',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r3-q3',
    round: 'Assertion-Reasoning',
    question: `Given below are two statements:
Assertion (A): An Act of Parliament reorganizing a State under Article 3 does not require compliance with the special amending procedure prescribed under Article 368.
Reason (R): Article 4(2) expressly declares that laws made under Article 2 or Article 3 shall not be deemed to be amendments of the Constitution for the purposes of Article 368.`,
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctIndex: 0,
    explanation: 'By the express constitutional fiat of Article 4(2), State Reorganization Acts are passed by a simple majority and are excluded from the Article 368 special majority requirement.',
    articleRef: 'Article 3 & Article 4(2)',
    difficulty: 'Foundational'
  },
  {
    id: 'd1-r3-q4',
    round: 'Assertion-Reasoning',
    question: `Consider the following statements regarding Article 12 of the Constitution:
1. The definition of "the State" in Article 12 applies exclusively to Part III.
2. A statutory corporation created by an Act of Parliament is an authority under Article 12.
3. The judiciary in its administrative function of staff recruitment is amenable to Article 12.
Which of the statements given above are correct?`,
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2, and 3'
    ],
    correctIndex: 3,
    explanation: 'All three statements are correct. Article 12 defines State for Part III (and Part IV via Art 36), statutory corporations are State (Sukhdev Singh), and courts in their administrative capacity are State (Naresh Mirajkar).',
    articleRef: 'Article 12',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r3-q5',
    round: 'Assertion-Reasoning',
    question: `Given below are two statements:
Assertion (A): Cession of Indian territory to a foreign State cannot be effected by Parliament by an ordinary law enacted under Article 3(c).
Reason (R): Article 3 deals solely with internal readjustment of the territories of constituent States and does not encompass the extinguishment of Indian sovereignty over its territory.`,
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctIndex: 0,
    explanation: 'As held in In re Berubari Union (1960), "diminishing the area of any State" in Article 3(c) does not authorize cession of national territory to a foreign power. Cession requires a constitutional amendment under Article 368.',
    articleRef: 'Article 3(c) & Article 368',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r3-q6',
    round: 'Assertion-Reasoning',
    question: `Consider the following statements regarding the Doctrine of Eclipse:
1. The Doctrine of Eclipse applies to pre-constitutional laws under Article 13(1).
2. An eclipsed pre-constitutional law becomes operative again without fresh enactment if the inconsistent constitutional provision is suitably amended.
3. The Doctrine of Eclipse applies fully to all post-constitutional statutes.
Which of the statements given above are correct?`,
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2, and 3'
    ],
    correctIndex: 0,
    explanation: 'Statements 1 and 2 are correct (Bhikaji Narain 1955). Statement 3 is incorrect because Deep Chand (1959) and Mahendra Lal Jaini (1963) established that post-constitutional laws violating Part III are stillborn and cannot be saved by eclipse.',
    articleRef: 'Article 13(1) & 13(2)',
    difficulty: 'Case Law / Advanced'
  },
  {
    id: 'd1-r3-q7',
    round: 'Assertion-Reasoning',
    question: `Given below are two statements:
Assertion (A): A post-constitutional statute enacted in contravention of Article 13(2) is a stillborn law and a nullity ab initio.
Reason (R): Article 13(2) imposes an absolute, total prohibition upon the legislative competence of the State regarding laws that abridge Fundamental Rights.`,
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctIndex: 0,
    explanation: 'In Deep Chand v. State of U.P. (1959), Subba Rao J. held that Article 13(2) creates an absolute incapacity on the legislature, rendering any conflicting law born dead and void ab initio.',
    articleRef: 'Article 13(2)',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r3-q8',
    round: 'Assertion-Reasoning',
    question: `Consider the following statements regarding the 6-factor test in Ajay Hasia v. Khalid Mujib (1981):
1. Financial assistance by the State must be so large as to meet almost the entire expenditure of the corporation.
2. Monopoly status of the corporation conferred or protected by the State is an indicative factor.
3. Deep and pervasive State control is a mandatory prerequisite.
4. If a department of government is transferred to a corporation, it is a strong factor indicating State instrumentality.
Which of the statements given above are correct?`,
    options: [
      '1, 2, and 3 only',
      '2, 3, and 4 only',
      '1, 2, 3, and 4',
      '1 and 4 only'
    ],
    correctIndex: 2,
    explanation: 'All 4 are explicit criteria among the 6 factors formulated by the 5-Judge Constitution Bench in Ajay Hasia v. Khalid Mujib (1981).',
    articleRef: 'Article 12',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r3-q9',
    round: 'Assertion-Reasoning',
    question: `Given below are two statements:
Assertion (A): A writ under Article 226 of the Constitution is maintainable against a purely private entity discharging public functions.
Reason (R): The expression "to any person or authority" in Article 226 is deliberately wider than "the State" defined in Article 12.`,
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctIndex: 0,
    explanation: 'In Andi Mukta Sadguru (1989) and Zee Telefilms (2005), the Supreme Court ruled that Article 226 reaches any person or authority performing a public duty, even if the body is private and not State under Article 12.',
    articleRef: 'Article 12 & Article 226',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r3-q10',
    round: 'Assertion-Reasoning',
    question: `Consider the following statements regarding the Doctrine of Severability (R.M.D. Chamarbaugwalla 1957):
1. If the valid and invalid parts of a statute are so inextricably connected that the valid part cannot stand on its own, the entire statute must be declared void.
2. The legislative intention behind enacting the statute is the cardinal guiding factor in deciding severability.
3. If after deleting the invalid portion, what remains is an entirely truncated scheme never contemplated by the legislature, the statute cannot be severed.
Which of the statements given above are correct?`,
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2, and 3'
    ],
    correctIndex: 3,
    explanation: 'All three propositions are authoritative components of the 7 severability rules laid down by Justice Venkatarama Ayyar in R.M.D. Chamarbaugwalla (1957).',
    articleRef: 'Article 13',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r3-q11',
    round: 'Assertion-Reasoning',
    question: `Given below are two statements:
Assertion (A): An Indian citizen cannot voluntarily enter into a contract with the Government waiving his fundamental right guaranteed under Article 14.
Reason (R): Fundamental Rights were enacted not merely for the benefit of individuals, but as a matter of public policy and constitutional mandate for the community as a whole.`,
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctIndex: 0,
    explanation: 'In Basheshar Nath v. CIT (1959), the Supreme Court held that the Doctrine of Waiver has no application to Fundamental Rights in India because they are rooted in public policy.',
    articleRef: 'Article 13 & Article 14',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r3-q12',
    round: 'Assertion-Reasoning',
    question: `Consider the following statements regarding the 42nd Constitutional Amendment Act, 1976:
1. It added the words "Socialist", "Secular", and "Integrity" to the Preamble.
2. It was the first and only amendment made to the Preamble to date.
3. The Supreme Court in S.R. Bommai (1994) held that Secularism was an unalterable basic feature of the Constitution even prior to the 42nd Amendment.
Which of the statements given above are correct?`,
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1, 2, and 3',
      '1 and 3 only'
    ],
    correctIndex: 2,
    explanation: 'All three statements are correct. In S.R. Bommai, the Court emphasized that the 42nd Amendment merely made explicit what was already implicit in the constitutional fabric.',
    articleRef: 'Preamble',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r3-q13',
    round: 'Assertion-Reasoning',
    question: `Given below are two statements:
Assertion (A): When Parliament introduces a Bill under Article 3 to alter the area of a Union Territory, it is not constitutionally required to refer the Bill to the Legislature of that Union Territory.
Reason (R): Explanation I to Article 3 explicitly provides that while "State" includes a Union Territory in clauses (a) to (e), in the Proviso to Article 3, "State" does NOT include a Union Territory.`,
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctIndex: 0,
    explanation: 'By virtue of the text of Explanation I to Article 3, the mandatory referral in the Proviso applies only to constituent States and not to Union Territories.',
    articleRef: 'Article 3 Proviso & Explanation I',
    difficulty: 'Case Law / Advanced'
  },
  {
    id: 'd1-r3-q14',
    round: 'Assertion-Reasoning',
    question: `Consider the following statements regarding the test laid down in Pradeep Kumar Biswas v. Indian Institute of Chemical Biology (2002):
1. It overruled the earlier decision in Sabhajit Tewary (1975).
2. The Council of Scientific and Industrial Research (CSIR) was held to be "the State" under Article 12.
3. The test is whether the body is financially, functionally, and administratively dominated by the Government.
Which of the statements given above are correct?`,
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2, and 3'
    ],
    correctIndex: 3,
    explanation: 'All three statements accurately summarize the 7-Judge Bench ruling in Pradeep Kumar Biswas (2002).',
    articleRef: 'Article 12',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r3-q15',
    round: 'Assertion-Reasoning',
    question: `Given below are two statements:
Assertion (A): The Board of Control for Cricket in India (BCCI) is not "the State" within the meaning of Article 12.
Reason (R): The Government does not hold any share capital in BCCI, does not provide financial assistance, and exercises no deep and pervasive administrative control over it.`,
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctIndex: 0,
    explanation: 'In Zee Telefilms (2005), the 5-Judge Constitution Bench applied the Pradeep Kumar Biswas criteria and held that BCCI lacks financial and administrative state domination.',
    articleRef: 'Article 12',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r3-q16',
    round: 'Assertion-Reasoning',
    question: `Consider the following statements regarding Article 13(3)(a):
1. An Ordinance promulgated by the President under Article 123 is "law" under Article 13.
2. An uncodified custom or usage having the force of law is subject to fundamental rights scrutiny under Article 13.
3. Administrative guidelines without statutory backing can take away fundamental rights.
Which of the statements given above are correct?`,
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2, and 3'
    ],
    correctIndex: 0,
    explanation: 'Statements 1 and 2 are correct. Statement 3 is false because non-statutory executive guidelines cannot abridge Fundamental Rights (Bijoe Emmanuel 1986).',
    articleRef: 'Article 13(3)(a)',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r3-q17',
    round: 'Assertion-Reasoning',
    question: `Given below are two statements:
Assertion (A): A judicial order passed by a High Court cannot be challenged through a writ petition under Article 32 as violating Fundamental Rights.
Reason (R): In Naresh Shridhar Mirajkar (1967), a 9-Judge Bench held that the superior judiciary while acting in its judicial capacity is not "the State" under Article 12.`,
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctIndex: 0,
    explanation: 'In Naresh Mirajkar (1967), the 9-Judge Bench held that superior courts acting judicially do not fall under Article 12; their judgments can only be corrected on appeal, not by an Article 32 writ.',
    articleRef: 'Article 12 & Article 32',
    difficulty: 'Case Law / Advanced'
  },
  {
    id: 'd1-r3-q18',
    round: 'Assertion-Reasoning',
    question: `Consider the following statements regarding the 24th Constitutional Amendment Act, 1971:
1. It inserted clause (4) into Article 13.
2. It inserted clause (3) into Article 368.
3. It made it obligatory for the President to give his assent to a Constitutional Amendment Bill.
Which of the statements given above are correct?`,
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2, and 3'
    ],
    correctIndex: 3,
    explanation: 'All three statements are correct. The 24th Amendment was enacted to restore constituent supremacy post-Golaknath, adding Art 13(4), Art 368(3), and substituting "shall give his assent" in Art 368(2).',
    articleRef: 'Article 13(4) & Article 368',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r3-q19',
    round: 'Assertion-Reasoning',
    question: `Given below are two statements:
Assertion (A): The Supreme Court in Kesavananda Bharati (1973) held that Parliament cannot amend the Preamble to the Constitution.
Reason (R): The Preamble is not an operative part of the Constitution and does not contain amending provisions.`,
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are false',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctIndex: 1,
    explanation: 'Both statements are false! Kesavananda Bharati held that the Preamble IS an integral part of the Constitution and CAN be amended under Article 368, provided the Basic Structure is not damaged.',
    articleRef: 'Preamble & Article 368',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r3-q20',
    round: 'Assertion-Reasoning',
    question: `Consider the following statements regarding India's federal structure under Article 1:
1. Dr. Ambedkar emphasized that the word "Union" indicates that the Indian federation is not the result of an agreement among the States.
2. No State has the constitutional right to secede from the Union of India.
3. Indian States possess sovereign territorial integrity that cannot be diminished by Parliament.
Which of the statements given above are correct?`,
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2, and 3'
    ],
    correctIndex: 0,
    explanation: 'Statements 1 and 2 are correct. Statement 3 is incorrect because Indian States have no guaranteed territorial integrity under Article 3; Parliament can diminish or alter state boundaries unilaterally.',
    articleRef: 'Article 1 & Article 3',
    difficulty: 'Foundational'
  },
  {
    id: 'd1-r3-q21',
    round: 'Assertion-Reasoning',
    question: `Given below are two statements:
Assertion (A): The word "Socialist" in the Indian Preamble does not envisage complete state ownership of all means of production or abolition of private property.
Reason (R): In Excel Wear v. Union of India (1978), the Supreme Court held that the Indian concept of socialism is "Democratic Socialism" aimed at a mixed economy where both public and private sectors coexist.`,
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctIndex: 0,
    explanation: 'Both statements are true and (R) correctly explains (A). Indian socialism emphasizes social justice and a mixed economy rather than Marxist state-monopoly capitalism.',
    articleRef: 'Preamble',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r3-q22',
    round: 'Assertion-Reasoning',
    question: `Consider the following statements regarding the 9-Judge Constitution Bench ruling in Property Owners Association (Nov 2024):
1. It overruled the expansive minority interpretation of Justice Krishna Iyer in Ranganatha Reddy (1977) and Sanjeev Coke (1983).
2. It held that all privately owned property does not automatically constitute "material resources of the community" under Article 39(b).
3. It affirmed that whether private property qualifies as community resources depends on its scarcity, public impact, and community necessity.
Which of the statements given above are correct?`,
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1, 2, and 3',
      '1 and 3 only'
    ],
    correctIndex: 2,
    explanation: 'All three statements accurately summarize the landmark Nov 2024 9-Judge Bench ruling in Property Owners Association v. State of Maharashtra.',
    articleRef: 'Preamble & Article 39(b)',
    difficulty: 'Case Law / Advanced'
  },
  {
    id: 'd1-r3-q23',
    round: 'Assertion-Reasoning',
    question: `Given below are two statements:
Assertion (A): Pre-constitutional statutes that conflict with Fundamental Rights are not rendered dead or non-existent in toto.
Reason (R): Under Article 13(1), pre-constitutional laws were validly enacted and remain valid as regards past transactions and pre-1950 liabilities; they are merely shadowed by Part III prospectively.`,
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctIndex: 0,
    explanation: 'In Keshavan Madhava Menon (1951), the Supreme Court held that Article 13(1) is not retrospective. Pre-constitutional laws were valid laws and are not completely wiped out for acts done before 26 Jan 1950.',
    articleRef: 'Article 13(1)',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r3-q24',
    round: 'Assertion-Reasoning',
    question: `Consider the following statements regarding the admission of Sikkim into the Indian Union:
1. Sikkim was initially admitted as an "Associate State" under Article 2A by the 35th Amendment Act, 1974.
2. Sikkim was elevated to a full constituent State of the Union by the 36th Amendment Act, 1975, inserting Article 371F.
3. Admission of Sikkim was an exercise of power under Article 2 of the Constitution.
Which of the statements given above are correct?`,
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1, 2, and 3',
      '1 and 3 only'
    ],
    correctIndex: 2,
    explanation: 'All three statements are historically and constitutionally accurate regarding Sikkim\'s integration into India under Article 2.',
    articleRef: 'Article 2 & 36th Amendment',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r3-q25',
    round: 'Assertion-Reasoning',
    question: `Given below are two statements:
Assertion (A): An unconstitutional portion of a statute can be severed and struck down by a court while preserving the valid remainder.
Reason (R): Article 13(1) and Article 13(2) contain the qualifying phrase "to the extent of such inconsistency" and "to the extent of the contravention".`,
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctIndex: 0,
    explanation: 'The textual mandate "to the extent of" explicitly authorizes the judicial excision of unconstitutional portions under the Doctrine of Severability.',
    articleRef: 'Article 13',
    difficulty: 'Foundational'
  },
  {
    id: 'd1-r3-q26',
    round: 'Assertion-Reasoning',
    question: `Consider the following statements regarding the meaning of "Republic" in the Preamble:
1. It signifies that the head of the State is elected, not hereditary.
2. It vests supreme political power in the people and not in a monarch.
3. All public offices are opened to every citizen without discrimination.
Which of the statements given above are correct?`,
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1, 2, and 3',
      '1 and 3 only'
    ],
    correctIndex: 2,
    explanation: 'A republic has two cardinal characteristics: absence of monarchical hereditary privilege (elected head) and opening of all public offices to every citizen equally.',
    articleRef: 'Preamble',
    difficulty: 'Foundational'
  },
  {
    id: 'd1-r3-q27',
    round: 'Assertion-Reasoning',
    question: `Given below are two statements:
Assertion (A): The views of a State Legislature under Article 3 must be obtained by the President before Parliament takes up a Bill to alter the State's territory.
Reason (R): If the President fixes a time limit of 30 days and the State Assembly fails to express its views within that period, Parliament cannot proceed with the Bill.`,
    options: [
      'Both (A) and (R) are true',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true',
      'Both (A) and (R) are false'
    ],
    correctIndex: 1,
    explanation: '(A) is true because referral is mandatory. (R) is false because if the State fails to reply within the specified period, the constitutional prerequisite is deemed satisfied and Parliament can proceed to enact the Bill.',
    articleRef: 'Article 3 Proviso',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r3-q28',
    round: 'Assertion-Reasoning',
    question: `Consider the following entities:
1. National Council of Educational Research and Training (NCERT)
2. Council of Scientific and Industrial Research (CSIR)
3. Institute of Constitutional and Parliamentary Studies (ICPS)
4. Oil and Natural Gas Commission (ONGC)
Which of the above entities have been held to be "the State" under Article 12 by the Supreme Court?`,
    options: [
      '1 and 3 only',
      '2 and 4 only',
      '1, 2, and 4 only',
      'All of the above'
    ],
    correctIndex: 1,
    explanation: 'CSIR is State (Pradeep Kumar Biswas 2002) and ONGC is State (Sukhdev Singh 1975). NCERT was held NOT to be State in Chander Mohan Khanna (1991), and ICPS was held NOT to be State in Tekraj Vasandi (1988).',
    articleRef: 'Article 12',
    difficulty: 'Case Law / Advanced'
  },
  {
    id: 'd1-r3-q29',
    round: 'Assertion-Reasoning',
    question: `Given below are two statements:
Assertion (A): A post-constitutional statute that infringes Article 19 remains completely operative against foreign corporations and non-citizens.
Reason (R): In State of Gujarat v. Ambica Mills (1974), the Supreme Court held that since non-citizens and corporate entities do not possess rights under Article 19, the law as regards them is not in contravention of Article 13(2).`,
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctIndex: 0,
    explanation: 'In Ambica Mills (1974), the Constitution Bench held that a post-constitutional law violating Article 19 is void only against citizens who possess Article 19 rights; it remains valid law as regards non-citizens and companies.',
    articleRef: 'Article 13(2) & Article 19',
    difficulty: 'Case Law / Advanced'
  },
  {
    id: 'd1-r3-q30',
    round: 'Assertion-Reasoning',
    question: `Consider the following statements regarding the expression "Fraternity" in the Preamble:
1. It was incorporated to assure both "the dignity of the individual" and "the unity and integrity of the Nation".
2. The word "Integrity" was added to the Preamble by the 42nd Amendment Act, 1976.
3. Fraternity is an essential pillar of constitutional morality as held by Dr. Ambedkar and reaffirmed in Navtej Singh Johar (2018).
Which of the statements given above are correct?`,
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1, 2, and 3',
      '1 and 3 only'
    ],
    correctIndex: 2,
    explanation: 'All three statements are correct. Fraternity is an indispensable constitutional ideal harmonizing individual human dignity with national integrity.',
    articleRef: 'Preamble',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r3-q31',
    round: 'Assertion-Reasoning',
    question: `Given below are two statements:
Assertion (A): A Curative Petition under Article 142 of the Constitution is not a second review petition.
Reason (R): In Rupa Ashok Hurra (2002), the Supreme Court held that a Curative Petition can only be entertained upon very narrow grounds such as violation of natural justice (Audi Alteram Partem) or gross judicial bias.`,
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctIndex: 0,
    explanation: 'The Curative Petition was designed in Rupa Ashok Hurra as an extraordinary last-resort remedy to cure incurable natural justice defects, not as a standard appellate forum.',
    articleRef: 'Article 142 & Article 12',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r3-q32',
    round: 'Assertion-Reasoning',
    question: `Consider the following statements regarding the territorial demarcation of international boundaries:
1. Settlement of a boundary dispute does not amount to cession of Indian territory.
2. Executive power under Article 73 is sufficient to demarcate boundary lines on the ground without an Article 368 amendment.
3. Any transfer of undisputed territory of an Indian State requires an amendment under Article 368.
Which of the statements given above are correct?`,
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1, 2, and 3',
      '1 and 3 only'
    ],
    correctIndex: 2,
    explanation: 'All three statements are correct based on the harmonized ratios of In re Berubari Union (1960) and Maganbhai Ishwarbhai Patel (1969).',
    articleRef: 'Article 1 & Article 368',
    difficulty: 'Case Law / Advanced'
  },
  {
    id: 'd1-r3-q33',
    round: 'Assertion-Reasoning',
    question: `Given below are two statements:
Assertion (A): A municipal corporation is an instrumentality of the State under Article 12.
Reason (R): Municipalities are entrusted with municipal or local funds under Section 3(31) of the General Clauses Act, 1897 and perform statutory local governance.`,
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctIndex: 0,
    explanation: 'Municipalities qualify as "local authorities" under Article 12 by virtue of the definition in Section 3(31) of the General Clauses Act.',
    articleRef: 'Article 12',
    difficulty: 'Foundational'
  },
  {
    id: 'd1-r3-q34',
    round: 'Assertion-Reasoning',
    question: `Consider the following statements:
1. In A.K. Gopalan (1950), Section 14 of the Preventive Detention Act, 1950 was severed and struck down while upholding the rest of the Act.
2. Severability can be applied to strike down a single sub-clause within a penal section.
3. If the valid remainder of an Act cannot be enforced without rewriting the statute, the court must strike down the entire Act.
Which of the statements given above are correct?`,
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2, and 3'
    ],
    correctIndex: 3,
    explanation: 'All three statements are correct applications of the Doctrine of Severability (A.K. Gopalan 1950 and Chamarbaugwalla 1957).',
    articleRef: 'Article 13',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r3-q35',
    round: 'Assertion-Reasoning',
    question: `Given below are two statements:
Assertion (A): A law made by Parliament under Article 3 can form a new State by uniting a Union territory to a part of any State.
Reason (R): Explanation II to Article 3 explicitly provides that the power conferred on Parliament under clause (a) includes the power to form a new State or Union territory by uniting a part of any State or Union territory to any other State or Union territory.`,
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctIndex: 0,
    explanation: 'Explanation II inserted by the 18th Constitutional Amendment Act, 1966 clarifies that Parliament has full power to unite any UT or part thereof with any State.',
    articleRef: 'Article 3 Explanation II',
    difficulty: 'Case Law / Advanced'
  },
  {
    id: 'd1-r3-q36',
    round: 'Assertion-Reasoning',
    question: `Consider the following statements regarding the legal term "Democratic" in the Preamble:
1. It encompasses not only political democracy, but also social and economic democracy.
2. Political democracy cannot last unless there lies at the base of it social democracy, as emphasized by Dr. B.R. Ambedkar in his closing speech to the Constituent Assembly.
3. Direct democracy devices like referendum and plebiscite are institutionalized in the Indian Constitution for amending laws.
Which of the statements given above are correct?`,
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2, and 3'
    ],
    correctIndex: 0,
    explanation: 'Statements 1 and 2 are correct. Statement 3 is incorrect because India operates on representative indirect parliamentary democracy without provisions for referendums.',
    articleRef: 'Preamble',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r3-q37',
    round: 'Assertion-Reasoning',
    question: `Given below are two statements:
Assertion (A): The Fundamental Rights in Part III of the Constitution of India are not absolute and are subject to reasonable restrictions.
Reason (R): Article 13(2) prohibits the State from making any law that takes away or abridges Fundamental Rights.`,
    options: [
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctIndex: 0,
    explanation: 'Both statements are independently true, but (R) explains the limits on State legislative power, not why Fundamental Rights are subject to reasonable restrictions.',
    articleRef: 'Part III & Article 13(2)',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r3-q38',
    round: 'Assertion-Reasoning',
    question: `Consider the following statements regarding the meaning of "Secular" in the Indian constitutional context:
1. State has no official religion.
2. All citizens are entitled to freedom of conscience and right to profess, practice, and propagate religion.
3. The State is barred from providing financial aid to religious minority educational institutions.
Which of the statements given above are correct?`,
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2, and 3'
    ],
    correctIndex: 0,
    explanation: 'Statements 1 and 2 are correct. Statement 3 is false because Article 30(2) specifically mandates that the State shall not discriminate against minority institutions in granting aid.',
    articleRef: 'Preamble, Art 25, Art 30(2)',
    difficulty: 'Foundational'
  },
  {
    id: 'd1-r3-q39',
    round: 'Assertion-Reasoning',
    question: `Given below are two statements:
Assertion (A): A private contract entered into between an employer and employee agreeing to bypass statutory safety norms is void under Article 13.
Reason (R): A purely private contract between private citizens without any statutory force is not "law" within the definition of Article 13(3)(a).`,
    options: [
      '(A) is false but (R) is true',
      '(A) is true but (R) is false',
      'Both (A) and (R) are true',
      'Both (A) and (R) are false'
    ],
    correctIndex: 0,
    explanation: '(A) is false because private contracts are void under Section 23 of the Indian Contract Act, not under Article 13. (R) is true because private contracts do not qualify as "law" under Article 13(3)(a).',
    articleRef: 'Article 13(3)(a)',
    difficulty: 'Case Law / Advanced'
  },
  {
    id: 'd1-r3-q40',
    round: 'Assertion-Reasoning',
    question: `Consider the following statements regarding the 1st Constitutional Amendment Act, 1951:
1. It amended Article 19(2) by inserting "public order" and "friendly relations with foreign States" as grounds of restriction.
2. It inserted Article 31A and Article 31B along with the Ninth Schedule.
3. It lifted the eclipse on state transport monopolies under Article 19(6), as recognized in Bhikaji Narain (1955).
Which of the statements given above are correct?`,
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1, 2, and 3',
      '1 and 3 only'
    ],
    correctIndex: 2,
    explanation: 'All three statements are correct and represent the major constitutional transformations brought about by the 1st Amendment in 1951.',
    articleRef: 'Article 13, 19, 31B',
    difficulty: 'Intermediate'
  }
];
