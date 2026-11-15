import type { BootcampMCQ } from '../bootcampTypes';

export const DAY1_MCQS_ROUND_5: BootcampMCQ[] = [
  {
    id: 'd1-r5-q1',
    round: 'Applied Courtroom',
    question: `A Municipal Corporation outsources its roadside vehicle-clamping and towing enforcement to a registered private company where the Corporation holds 51% equity shares. The private company levies on-the-spot penal fines without issuing compounding receipts. An aggrieved driver files an Article 226 writ challenging the penalties as arbitrary. The private company raises a preliminary objection that it is not "State" under Article 12. As a counsel or judge, how would you resolve the objection?`,
    options: [
      'Sustain the objection because the entity is incorporated under the Companies Act and has private shareholders',
      'Overrule the objection: applying the Pradeep Kumar Biswas functional test and Andi Mukta public duty doctrine, the entity is an instrumentality of State discharging sovereign penal regulatory powers, making the writ maintainable',
      'Dismiss the petition with directions to file a civil suit for recovery',
      'Direct the driver to approach the consumer forum'
    ],
    correctIndex: 1,
    explanation: 'A private joint venture with 51% municipal equity discharging sovereign regulatory and penal powers satisfies the functional/administrative domination test (Pradeep Kumar Biswas 2002) and public duty test (Andi Mukta 1989).',
    articleRef: 'Article 12 & Article 226',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r5-q2',
    round: 'Applied Courtroom',
    question: `An accused is prosecuted under Section 4 of a State Gambling Act passed in 1948 (pre-constitutional). The section created a complete monopoly in favor of the State transport fleet. In 1952, the accused challenges the ongoing prosecution on the ground that the 1948 section was eclipsed by Article 19(1)(g) on 26 Jan 1950. However, in 1951, Parliament enacted the 1st Constitutional Amendment amending Article 19(6) allowing state monopolies. What is the status of the prosecution?`,
    options: [
      'The prosecution must be quashed because the Act was void ab initio',
      'The prosecution is valid: under the Doctrine of Eclipse (Bhikaji Narain), the 1st Amendment lifted the shadow of unconstitutionality, and the 1948 pre-constitutional Act became fully operative without fresh re-enactment',
      'The State must obtain sanction from the High Court',
      'The accused must be compensated for malicious prosecution'
    ],
    correctIndex: 1,
    explanation: 'Under Bhikaji Narain (1955), pre-constitutional laws do not become dead; when the 1st Amendment amended Article 19(6), the eclipse was lifted and the law revived for all prosecutions post-amendment.',
    articleRef: 'Article 13(1) & Article 19(6)',
    difficulty: 'Case Law / Advanced'
  },
  {
    id: 'd1-r5-q3',
    round: 'Applied Courtroom',
    question: `A State Legislature enacts a Police Special Powers Act in 1962 (post-constitutional) authorizing warrantless detention for 14 days without producing before a Magistrate, directly violating Article 22(2). In 1978, the State argues that the statute should be treated as "dormant under the Doctrine of Eclipse" until an amendment validates it. As a Prosecuting Officer, how would you advise the State Home Department?`,
    options: [
      'Advise that the Doctrine of Eclipse protects the 1962 Act',
      'Advise that under Deep Chand (1959) and Mahendra Lal Jaini (1963), a post-constitutional law violating Part III is stillborn and a nullity ab initio; the Doctrine of Eclipse cannot revive it, and a completely fresh statutory enactment is mandatory',
      'Advise that an executive notification can cure the defect',
      'Advise that the Governor can issue a pardon to validate the law'
    ],
    correctIndex: 1,
    explanation: 'Article 13(2) deprives the legislature of competence to enact laws violating Part III. Such post-constitutional laws are born dead (stillborn) and cannot be revived by eclipse (Deep Chand 1959).',
    articleRef: 'Article 13(2)',
    difficulty: 'Case Law / Advanced'
  },
  {
    id: 'd1-r5-q4',
    round: 'Applied Courtroom',
    question: `A practicing advocate is debarred from practicing in High Court by an order of the State Bar Council without issuing a show cause notice. The advocate files an Article 32 writ petition directly before the Supreme Court. The Bar Council argues that it is a statutory professional council, not "the State" under Article 12. Decide.`,
    options: [
      'The objection is valid because the Bar Council is an autonomous professional guild',
      'The objection is rejected: the Bar Council is a statutory authority established by an Act of Parliament (Advocates Act, 1961) discharging public statutory functions, falling squarely within "other authorities" under Article 12',
      'The petition is dismissed for lack of territorial jurisdiction',
      'The advocate must refer the matter to arbitration'
    ],
    correctIndex: 1,
    explanation: 'Statutory bodies created by Parliament (like Bar Councils, Medical Councils, and ICAI) exercising statutory disciplinary powers fall within "other authorities" under Article 12.',
    articleRef: 'Article 12 & Article 32',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r5-q5',
    round: 'Applied Courtroom',
    question: `During the bifurcation of a State under an Article 3 Reorganization Act, an accused committed an offence in District D before the appointed day. After the appointed day, District D becomes part of the newly formed State Y. The accused argues that the Sessions Court of District D in State Y lacks jurisdiction because the offence was committed against the laws of the erstwhile State X. How will the court decide?`,
    options: [
      'The accused must be acquitted because State X no longer has territorial jurisdiction',
      'The court will reject the objection: by virtue of supplemental and savings provisions enacted under Article 4, pending criminal proceedings and offenses committed prior to the appointed day continue under the transitional provisions of the Reorganization Act',
      'The trial must be transferred to the Supreme Court',
      'The accused must be re-arrested by State Y police'
    ],
    correctIndex: 1,
    explanation: 'Article 4 empowers Parliament to make all necessary supplemental, incidental, and consequential provisions, including saving jurisdiction over pending criminal trials across bifurcated territories.',
    articleRef: 'Article 4',
    difficulty: 'Case Law / Advanced'
  },
  {
    id: 'd1-r5-q6',
    round: 'Applied Courtroom',
    question: `An accused facing trial for economic fraud enters into a written compromise with the Investigating Officer, agreeing to waive his Article 20(3) right against self-incrimination in exchange for a recommendation of lenient bail. At trial, the Prosecutor seeks to introduce the self-incriminatory confession, citing the written waiver. How should the Magistrate rule?`,
    options: [
      'Admit the confession because the accused freely and voluntarily waived his constitutional right',
      'Reject the confession: under Basheshar Nath v. CIT (1959), Fundamental Rights cannot be waived by any person in India, and any agreement waiving Article 20(3) is an absolute constitutional nullity',
      'Admit the confession only if signed before two independent witnesses',
      'Admit the confession if the Public Prosecutor countersigns it'
    ],
    correctIndex: 1,
    explanation: 'Fundamental Rights are not private property rights; they are constitutional commands in the public interest. The Doctrine of Waiver does not apply to Part III (Basheshar Nath 1959).',
    articleRef: 'Article 13 & Article 20(3)',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r5-q7',
    round: 'Applied Courtroom',
    question: `A State Transport Authority issues a tender condition stating that only entities whose directors belong to a particular religious community may bid for bus route permits. When challenged under Article 14 and 15, the Authority argues that the condition was issued as an internal administrative guideline, not a statutory "law" under Article 13(3)(a), and therefore cannot be struck down under Article 13(2). Decide.`,
    options: [
      'Sustain the Authority\'s argument because guidelines are non-statutory',
      'Reject the argument: under Article 12, the Transport Authority is State, and under Article 13(3)(a), "law" includes any order, regulation, or notification; even if purely administrative, state action cannot violate Articles 14 and 15 (Ramana Dayaram Shetty)',
      'Direct the parties to file a civil suit for damages',
      'Dismiss the challenge as religious practices are protected'
    ],
    correctIndex: 1,
    explanation: 'The State cannot escape fundamental rights compliance by acting through administrative orders; all executive actions of "the State" under Article 12 must comply with Article 14 (Ramana Dayaram Shetty 1979).',
    articleRef: 'Article 12 & Article 13(3)(a)',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r5-q8',
    round: 'Applied Courtroom',
    question: `Parliament introduces a Bill under Article 3 to detach two districts from State A and merge them into State B. The President refers the Bill to State A\'s Legislature giving it 45 days. The Assembly passes a unanimous resolution vehemently opposing the detachment. Parliament ignores the resolution, passes the Bill by a simple majority, and the President assents. State A challenges the Act before the Supreme Court. What will be the outcome?`,
    options: [
      'The Act will be declared unconstitutional because federalism requires state consent',
      'The challenge will be dismissed: under Article 3 and Babulal Parate (1960), the requirement is only to obtain the views of the State Legislature, which are non-binding on Parliament',
      'The Supreme Court will order a referendum in the two districts',
      'The President will be directed to withhold his assent'
    ],
    correctIndex: 1,
    explanation: 'Under the Proviso to Article 3, consultation does not mean concurrence. Parliament has plenary authority to reorganize States irrespective of state assembly opposition (Babulal Parate 1960).',
    articleRef: 'Article 3 Proviso',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r5-q9',
    round: 'Applied Courtroom',
    question: `A state statute regulates "public prize competitions". Section 2 defines competitions to include both gambling lotteries and competitions requiring substantial journalistic skill. The Supreme Court finds the restriction on skill competitions unconstitutional under Article 19(1)(g). The State Prosecutor argues that the section should be severed so the statute continues to prosecute gambling lotteries. Can the court sever the clause?`,
    options: [
      'No, because gambling and skill were included in the same definition sentence',
      'Yes: applying R.M.D. Chamarbaugwalla (1957), if the legislative intention was to control commercial gambling, the unconstitutional application to skill competitions can be severed, leaving the gambling prosecution valid',
      'No, the court must strike down the entire statute and await parliamentary re-enactment',
      'Only if the Governor issues an ordinance'
    ],
    correctIndex: 1,
    explanation: 'In R.M.D. Chamarbaugwalla (1957), the Supreme Court severed the application of the Prize Competitions Act, 1955, upholding its penal enforcement against gambling lotteries.',
    articleRef: 'Article 13 & Article 19(1)(g)',
    difficulty: 'Case Law / Advanced'
  },
  {
    id: 'd1-r5-q10',
    round: 'Applied Courtroom',
    question: `A municipal corporation establishes a registered charitable hospital society. The Government nominates 100% of the governing council and provides 95% of its operating budget. An employee of the hospital is summarily terminated without an inquiry. The employee files a writ under Article 32. The hospital claims it is an independent society registered under the Societies Registration Act. Will the Supreme Court entertain the writ?`,
    options: [
      'No, registered societies can never be State under Article 12',
      'Yes: applying the 6-factor test in Ajay Hasia (1981) and Pradeep Kumar Biswas (2002), the hospital is functionally, financially, and administratively dominated by the State, making it an instrumentality of State under Article 12',
      'No, the employee must approach the Labour Court under the Industrial Disputes Act only',
      'Yes, but only under Article 21'
    ],
    correctIndex: 1,
    explanation: 'Corporate or societal form is irrelevant if the body is financially and administratively dominated by the State (Ajay Hasia 1981, Pradeep Kumar Biswas 2002).',
    articleRef: 'Article 12',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r5-q11',
    round: 'Applied Courtroom',
    question: `An Indian business firm enters into an agreement with the Government of India surrendering its border land for an international border demarcation with a neighbouring country under a bilateral boundary treaty. A PIL is filed claiming that the Government cannot give up Indian land without an amendment under Article 368. How will the court decide based on Maganbhai Ishwarbhai Patel (1969)?`,
    options: [
      'Issue an injunction stopping the boundary demarcation',
      'Dismiss the PIL: a bonafide demarcation and settlement of an undemarcated disputed boundary does not constitute cession of territory and can be implemented by the executive without Article 368 amendment',
      'Direct Parliament to hold a joint sitting under Article 108',
      'Order the land to be returned to the business firm'
    ],
    correctIndex: 1,
    explanation: 'Settlement of a disputed boundary is not cession of territory. It falls within the executive power of the Union under Article 73 and does not require a constitutional amendment (Maganbhai Ishwarbhai Patel 1969).',
    articleRef: 'Article 1 & Article 73',
    difficulty: 'Case Law / Advanced'
  },
  {
    id: 'd1-r5-q12',
    round: 'Applied Courtroom',
    question: `A District Collector issues a circular directing all schools in the district to mandatorily collect a special religious development cess for renovating a local ancient shrine, threatening to cancel school licenses on default. An unaided private school challenges the circular. As a Judicial Magistrate or Judge, on what grounds would you strike down the circular under Article 13?`,
    options: [
      'The circular is valid because ancient heritage must be preserved',
      'The circular is unconstitutional: it violates Article 27 (freedom from taxes for promotion of any particular religion) and Article 13(2), because the executive cannot impose religious taxes by administrative circular',
      'The circular can only be challenged by the shrine trustees',
      'The school must pay 50% under protest'
    ],
    correctIndex: 1,
    explanation: 'Under Article 27, no person can be compelled to pay taxes for the promotion of any particular religion. An executive circular attempting to do so violates Part III and is void under Article 13(2).',
    articleRef: 'Article 13(2) & Article 27',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r5-q13',
    round: 'Applied Courtroom',
    question: `A State Government company terminates a permanent engineer by invoking a service rule that allows termination without assigning any reasons upon paying one month\'s salary. The engineer challenges the termination under Article 14. The company argues that the contract of employment was entered into freely by the engineer. How will the court rule?`,
    options: [
      'Uphold the termination on the principle of freedom of contract',
      'Strike down the service rule and quash the termination: applying Central Inland Water Transport Corp. v. Brojo Nath Ganguly (1986), such unconscionable "hire and fire" clauses in public employment violate Article 14 and public policy',
      'Direct the company to pay 6 months\' salary instead of 1 month',
      'Dismiss the challenge because the employee accepted the initial appointment letter'
    ],
    correctIndex: 1,
    explanation: 'Public sector instrumentalities cannot enforce arbitrary, one-sided termination rules; such clauses violate Article 14 and are void under Section 23 Contract Act (Brojo Nath Ganguly 1986).',
    articleRef: 'Article 12 & Article 14',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r5-q14',
    round: 'Applied Courtroom',
    question: `A criminal accused is charged under a 1935 colonial penal regulation for publishing political criticism against the government. At trial in 1953, the Magistrate notices that the 1935 colonial section directly contravenes Article 19(1)(a). The Public Prosecutor argues that since the regulation was enacted before 1950, it remains fully enforceable. How must the Magistrate decide?`,
    options: [
      'Convict the accused because pre-constitutional laws cannot be challenged by citizens',
      'Discharge/acquit the accused: under Article 13(1) and Behram Khurshed Pesikaka (1955), the pre-constitutional regulation became void and unenforceable to the extent of its inconsistency with Article 19(1)(a) on 26 Jan 1950',
      'Refer the matter to the Governor for presidential sanction',
      'Stay the trial indefinitely'
    ],
    correctIndex: 1,
    explanation: 'Pre-constitutional penal laws inconsistent with Fundamental Rights became void upon the commencement of the Constitution; no criminal conviction can be sustained under an unconstitutional section (Behram Khurshed 1955).',
    articleRef: 'Article 13(1)',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r5-q15',
    round: 'Applied Courtroom',
    question: `An uncodified tribal custom allows village elders to forcibly expel any resident who marries outside the caste community. When challenged under Article 21, the village council argues that unwritten customs are personal cultural practices, not statutory "law" made by the State under Article 13(2). How will the constitutional court resolve this?`,
    options: [
      'Accept the village council\'s argument because customs are private traditions',
      'Reject the argument: Article 13(3)(a) explicitly defines "law" to include "custom or usage having in the territory of India the force of law"; any custom violating fundamental rights is void under Article 13(1) and 13(2)',
      'Direct the police to enforce the customary expulsion',
      'Allow expulsion if approved by 75% of villagers'
    ],
    correctIndex: 1,
    explanation: 'Customs and usages having the force of law fall directly under Article 13(3)(a). If they violate Fundamental Rights (such as Articles 14, 15, or 21), they are unconstitutional and void.',
    articleRef: 'Article 13(3)(a)',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r5-q16',
    round: 'Applied Courtroom',
    question: `A State Reorganization Bill proposing to rename State X as State Y is introduced in the Lok Sabha. The opposition raises a point of order that the Bill is unconstitutional because it was not passed by a special 2/3rd majority under Article 368. As the Secretary-General of the Lok Sabha, how would you advise the Speaker?`,
    options: [
      'Advise that the Bill must be voted upon under Article 368 special majority',
      'Advise that under Article 4(2), laws enacted under Article 3 are passed by a simple majority and are expressly deemed NOT to be amendments of the Constitution under Article 368',
      'Advise that state names cannot be altered by Parliament',
      'Advise that a national referendum is mandatory'
    ],
    correctIndex: 1,
    explanation: 'Article 4(2) expressly exempts laws under Article 3 from Article 368; a simple majority in each House is sufficient.',
    articleRef: 'Article 3(e) & Article 4(2)',
    difficulty: 'Foundational'
  },
  {
    id: 'd1-r5-q17',
    round: 'Applied Courtroom',
    question: `A private deemed university affiliated to UGC terminates an associate professor without holding a disciplinary inquiry. The professor files an Article 226 writ petition before the High Court. The university contends that as a private educational body receiving no government grant-in-aid, it is immune from writ jurisdiction. Decide based on Janet Jeyapaul (2015).`,
    options: [
      'Dismiss the writ because unaided private institutions are never amenable to Article 226',
      'Maintain the writ petition: imparting higher education is a public function, and an entity discharging a public duty is amenable to Article 226 regarding actions touching that public character',
      'Transfer the matter to the consumer forum',
      'Order the professor to pay costs to the university'
    ],
    correctIndex: 1,
    explanation: 'In Janet Jeyapaul v. SRM University (2015), the Supreme Court confirmed that deemed universities imparting education perform a public function amenable to Article 226.',
    articleRef: 'Article 226 & Article 12',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r5-q18',
    round: 'Applied Courtroom',
    question: `An accused person is arrested under a state preventive detention law. The detention order does not communicate the grounds of detention for 25 days. The detaining authority argues that the delay was due to administrative staff shortages during elections. As a Judicial Magistrate or High Court Judge hearing Habeas Corpus, what order will you pass?`,
    options: [
      'Grant an extension of time to the State to furnish grounds',
      'Declare the detention illegal and direct immediate release: Article 22(5) guarantees the earliest communication of grounds; unexplained administrative delay renders the detention unconstitutional and void',
      'Impose a fine on the jail superintendent and keep the accused in custody',
      'Direct the accused to apply for regular bail under Section 437 CrPC / 480 BNSS'
    ],
    correctIndex: 1,
    explanation: 'Failure to communicate grounds of detention expeditiously violates the mandatory constitutional safeguard of Article 22(5), rendering the detention illegal per se.',
    articleRef: 'Article 22(5)',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r5-q19',
    round: 'Applied Courtroom',
    question: `A public sector enterprise (PSE) registered under the Companies Act issues a tender for procuring raw material. It arbitrarily rejects the lowest compliant bidder without assigning reasons and awards the contract to a favored competitor. Can the aggrieved bidder invoke Article 14 against the PSE in a writ under Article 226?`,
    options: [
      'No, government companies have unrestricted commercial freedom in private tenders',
      'Yes: as State under Article 12, a public sector enterprise must act fairly, transparently, and without arbitrariness in all contractual matters (Ramana Dayaram Shetty 1979)',
      'Only if the contract value exceeds ₹100 Crores',
      'Only if the bidder is a foreign corporation'
    ],
    correctIndex: 1,
    explanation: 'State instrumentalities under Article 12 cannot act arbitrarily even in commercial or contractual matters; their actions must satisfy Article 14 fairness (Ramana Dayaram Shetty 1979).',
    articleRef: 'Article 12 & Article 14',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r5-q20',
    round: 'Applied Courtroom',
    question: `A judicial magistrate passes an ex-parte injunction order restraining a newspaper from publishing investigative reports on a pending criminal trial. The newspaper files an Article 32 writ petition directly before the Supreme Court claiming infringement of Article 19(1)(a). Will the Article 32 petition be entertained based on Naresh Mirajkar (1967)?`,
    options: [
      'Yes, because freedom of press is a sacred fundamental right',
      'No: under Naresh Mirajkar (1967), judicial orders passed by a competent court cannot be challenged by an Article 32 writ petition; the remedy is an appeal or revision under regular appellate procedures',
      'Yes, but only before a 5-Judge Constitution Bench',
      'The petition will be converted into a contempt proceeding against the newspaper'
    ],
    correctIndex: 1,
    explanation: 'Judicial orders of courts cannot be challenged as violating Fundamental Rights through Article 32 writs; judicial decisions are corrected through appeals, not writ petitions (Naresh Mirajkar 1967).',
    articleRef: 'Article 12 & Article 32',
    difficulty: 'Case Law / Advanced'
  },
  {
    id: 'd1-r5-q21',
    round: 'Applied Courtroom',
    question: `An enactment containing 50 sections is challenged before the High Court. Section 12 is found to violate Article 14. If Section 12 is deleted, the remaining 49 sections can be smoothly operated as a complete legislative scheme without creating any statutory ambiguity. How should the court rule applying R.M.D. Chamarbaugwalla?`,
    options: [
      'Strike down all 50 sections to maintain legislative purity',
      'Apply the Doctrine of Severability: strike down only Section 12 as void, while upholding the validity of the remaining 49 sections',
      'Direct Parliament to re-enact the statute within 6 months',
      'Suspend the entire Act until the next election'
    ],
    correctIndex: 1,
    explanation: 'Under the Doctrine of Severability, if the invalid section is separable and its deletion does not disrupt the legislative intent or operation of the remaining statute, only the invalid section is excised.',
    articleRef: 'Article 13',
    difficulty: 'Foundational'
  },
  {
    id: 'd1-r5-q22',
    round: 'Applied Courtroom',
    question: `A citizen of India arrested for an economic offence claims that he has entered into an agreement with the State agreeing to waive his right to be produced before a Magistrate within 24 hours under Article 22(2). What must the Magistrate do upon learning of this agreement?`,
    options: [
      'Accept the agreement and remand the accused for 30 days without physical production',
      'Declare the agreement illegal and void: constitutional safeguards under Article 22(2) are mandatory and cannot be waived by an accused under any circumstances',
      'Sanction the Investigating Officer to keep the accused in private detention',
      'Refer the contract to the Law Commission'
    ],
    correctIndex: 1,
    explanation: 'Constitutional criminal safeguards under Article 22(2) are non-derogable public rights that cannot be waived by any private agreement (Basheshar Nath 1959).',
    articleRef: 'Article 13 & Article 22(2)',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r5-q23',
    round: 'Applied Courtroom',
    question: `A municipal corporation terminates a private parking contractor for alleged breach of contractual terms. The contractor files an Article 226 writ petition seeking specific performance of the commercial parking agreement. How should the High Court deal with the writ petition?`,
    options: [
      'Issue a writ of mandamus enforcing the private commercial contract',
      'Dismiss the writ petition: purely private commercial disputes involving contractual interpretation devoid of any public law element cannot be enforced through writ jurisdiction under Article 226',
      'Order the municipal corporation to compensate the contractor without trial',
      'Transfer the matter to the Supreme Court'
    ],
    correctIndex: 1,
    explanation: 'As held in Radhakrishna Agarwal (1977) and Bareilly Development Authority (1989), Article 226 is not a forum for enforcing non-statutory commercial contracts where ordinary civil remedies lie.',
    articleRef: 'Article 226 & Article 12',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r5-q24',
    round: 'Applied Courtroom',
    question: `A State Legislature passes an amendment to its Rent Control Act in 1965 (post-constitutional) which infringes Article 14. In 1985, Parliament passes a constitutional amendment placing the State Rent Act in the Ninth Schedule under Article 31B. The tenant challenges the 1965 Act in 2008. Can the tenant invoke I.R. Coelho (2007) to challenge the Act?`,
    options: [
      'No, because Ninth Schedule laws are completely immune from judicial review',
      'Yes: under I.R. Coelho (2007), all laws placed in the Ninth Schedule post-April 24, 1973 are open to judicial review on the ground of violating Fundamental Rights and damaging the Basic Structure',
      'Only if the President sanctions the challenge',
      'Only if the rent exceeds ₹50,000 per month'
    ],
    correctIndex: 1,
    explanation: 'Under I.R. Coelho (2007), laws inserted into the Ninth Schedule on or after 24 April 1973 are subject to the Rights Test and Essence of Rights Test under the Basic Structure Doctrine.',
    articleRef: 'Article 31B & Article 368',
    difficulty: 'Case Law / Advanced'
  },
  {
    id: 'd1-r5-q25',
    round: 'Applied Courtroom',
    question: `A private unaided school dismisses a bus driver without an inquiry. The driver files an Article 226 writ petition in the High Court. The school objects to maintainability. How will the court decide applying St. Mary\'s Education Society (2022)?`,
    options: [
      'Maintain the writ petition because education is a public function',
      'Dismiss the writ petition: while school education is a public function, the employment contract of non-teaching staff in an unaided private school is purely a private contractual master-servant dispute lacking public duty character',
      'Direct the State Education Board to absorb the bus driver',
      'Issue a writ of Habeas Corpus'
    ],
    correctIndex: 1,
    explanation: 'In St. Mary\'s Education Society (2022), the Supreme Court clarified that employment disputes of non-statutory staff in private schools do not involve a public duty and are not amenable to Article 226.',
    articleRef: 'Article 226 & Article 12',
    difficulty: 'Case Law / Advanced'
  },
  {
    id: 'd1-r5-q26',
    round: 'Applied Courtroom',
    question: `A municipal council bylaw prohibits roadside food stalls within 100 meters of religious places. A vendor challenges the bylaw under Article 19(1)(g) and Article 14. The Municipality argues that municipal bylaws are subordinate rules, not "law" under Article 13. Decide.`,
    options: [
      'Bylaws are immune from Article 13 review',
      'Bylaws are explicitly included in the definition of "law" under Article 13(3)(a) and are subject to judicial review for compliance with Part III',
      'Only central statutes are law under Article 13',
      'Municipal bylaws can only be reviewed by the Mayor'
    ],
    correctIndex: 1,
    explanation: 'Article 13(3)(a) expressly includes "bye-law" in the definition of law. Subordinate legislation violating Fundamental Rights is void under Article 13(2).',
    articleRef: 'Article 13(3)(a)',
    difficulty: 'Foundational'
  },
  {
    id: 'd1-r5-q27',
    round: 'Applied Courtroom',
    question: `A State passes an Act carving out a new Autonomous Hill District from an existing district. An individual files a PIL claiming that Article 3 applies only to carving out new States, not internal district reorganisation. How will the court rule?`,
    options: [
      'The PIL is valid because Article 3 governs all municipal and district boundaries',
      'The PIL is dismissed: Article 3 governs the reorganization of "States" and "Union Territories"; internal creation of districts within a State falls within the plenary legislative competence of the State Legislature under the Seventh Schedule',
      'The matter must be referred to the Delimitation Commission',
      'The Governor alone can create districts'
    ],
    correctIndex: 1,
    explanation: 'Article 3 deals with the constituent units of the Indian Union (States and UTs). Internal division of districts within a state is governed by state legislation, not Article 3.',
    articleRef: 'Article 3 & Seventh Schedule',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r5-q28',
    round: 'Applied Courtroom',
    question: `A pre-constitutional law of 1942 penalizes criticism of the monarch. In 1954, a citizen is prosecuted for an anti-government speech delivered in 1953. The prosecution argues that since the 1942 Act was validly enacted before the Constitution, the court cannot invalidate it under Article 13(1). Decide as a Magistrate.`,
    options: [
      'Convict the citizen because pre-1950 statutes have statutory immunity',
      'Discharge the accused: by virtue of Article 13(1), the 1942 provision became void on 26 Jan 1950 to the extent it conflicts with Article 19(1)(a); no prosecution can be initiated for acts committed post-1950 under an eclipsed law',
      'Sentence the citizen to simple imprisonment only',
      'Refer the file to the High Court under Article 228'
    ],
    correctIndex: 1,
    explanation: 'Under Article 13(1), pre-constitutional laws inconsistent with Part III became void from the commencement of the Constitution. Post-1950 conduct cannot be prosecuted under an unconstitutional section.',
    articleRef: 'Article 13(1)',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r5-q29',
    round: 'Applied Courtroom',
    question: `A public university rejects the admission of a transgender applicant on the ground that the university prospectus only recognizes "Male" and "Female" genders. The applicant files a writ petition under Article 32 citing the Preamble and Article 14. How should the court decide based on NALSA (2014)?`,
    options: [
      'Dismiss the petition as prospectus rules are binding private guidelines',
      'Allow the petition: the university is State under Article 12, and gender identity is an integral aspect of human dignity and equality under Articles 14 and 21 as affirmed in NALSA v. UOI (2014)',
      'Direct the applicant to seek admission in a private college',
      'Advise the applicant to file a representation to the Governor'
    ],
    correctIndex: 1,
    explanation: 'State universities under Article 12 must uphold equality and human dignity. Discrimination based on gender identity violates Article 14 and Article 21 (NALSA 2014).',
    articleRef: 'Article 12, 14, 21',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r5-q30',
    round: 'Applied Courtroom',
    question: `The Union Government signs an international treaty agreeing to lease a 500-meter border corridor to a neighbouring nation for 99 years for civilian transit without transferring sovereign title. A petitioner challenges the treaty under Article 368 citing In re Berubari Union. How will the court decide based on Sukumar Sengupta (1990)?`,
    options: [
      'Quash the lease as a surrender of national sovereignty',
      'Dismiss the challenge: granting transit facilities or a lease without transferring sovereign ownership does not amount to cession of territory; hence, no Article 368 constitutional amendment is required (Sukumar Sengupta 1990)',
      'Direct Parliament to ratify the lease by 2/3rd majority',
      'Order the army to take over the corridor'
    ],
    correctIndex: 1,
    explanation: 'As held in Sukumar Sengupta (1990, Teen Bigha case), leasing transit rights without relinquishing sovereign title does not constitute cession of territory.',
    articleRef: 'Article 1 & Article 368',
    difficulty: 'Case Law / Advanced'
  },
  {
    id: 'd1-r5-q31',
    round: 'Applied Courtroom',
    question: `A State Electricity Distribution Company (DISCOM), established as a wholly-owned government corporation, disconnects electricity to an industrial factory without issuing statutory notice under the Electricity Act. Can the industrial factory maintain a writ petition under Article 226 challenging the arbitrary disconnection?`,
    options: [
      'No, because electricity supply is a purely private commercial contract',
      'Yes: a government-owned DISCOM is State under Article 12, and disconnecting essential utilities arbitrarily violates Article 14 and statutory procedures, making Article 226 maintainable',
      'Only if the factory employs more than 500 workers',
      'Only if the dispute is first submitted to the Ombudsman'
    ],
    correctIndex: 1,
    explanation: 'Wholly-owned government DISCOMs are instrumentalities of State under Article 12; arbitrary denial of essential public utilities violates Article 14 and is subject to Article 226 review.',
    articleRef: 'Article 12 & Article 226',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r5-q32',
    round: 'Applied Courtroom',
    question: `A police officer detains an accused in police lockup for 48 hours without producing him before a Magistrate, falsely claiming that "Saturday and Sunday were court holidays and do not count under Article 22(2)". What is the correct legal position?`,
    options: [
      'The police officer is correct; judicial holidays are excluded from the 24-hour limit',
      'The detention is completely illegal: Article 22(2) mandates production within 24 hours excluding ONLY the journey time; if courts are closed, the accused must be produced at the Magistrate\'s residential office',
      'The police can hold an accused for 72 hours with DSP approval',
      'Production is only required for non-bailable offences'
    ],
    correctIndex: 1,
    explanation: 'Article 22(2) excludes ONLY the time necessary for the journey from the place of arrest. Court holidays do not extend police detention; duty Magistrates are available at residential offices.',
    articleRef: 'Article 22(2)',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r5-q33',
    round: 'Applied Courtroom',
    question: `During the pendency of a murder trial, a Sessions Judge notices that Section 303 IPC (mandatory death penalty for life convicts) was struck down by the Supreme Court in Mithu v. State of Punjab (1983). The Prosecutor argues that Mithu was a constitutional law case that does not bind criminal trial judges in ordinary sessions cases. How must the Sessions Judge rule?`,
    options: [
      'Follow the statutory IPC text and award mandatory death sentence',
      'Reject the Prosecutor\'s submission: under Article 141 and Article 13(2), a law declared unconstitutional by the Supreme Court is void ab initio and no court in India can enforce a struck-down section',
      'Refer the matter to the Law Minister',
      'Impose a death penalty subject to confirmation by the High Court'
    ],
    correctIndex: 1,
    explanation: 'Under Article 141, the law declared by the Supreme Court is binding on all courts in India. An invalid section struck down under Article 13(2) is non-existent in law.',
    articleRef: 'Article 13(2) & Article 141',
    difficulty: 'Foundational'
  },
  {
    id: 'd1-r5-q34',
    round: 'Applied Courtroom',
    question: `A private contractor builds a national highway under a Build-Operate-Transfer (BOT) concession agreement with the National Highways Authority of India (NHAI). The contractor unlawfully assaults commuters at toll plazas. When an aggrieved commuter files a writ under Article 226 against the contractor, can the High Court entertain the writ?`,
    options: [
      'No, because the contractor is a private incorporated company',
      'Yes, for the limited purpose of enforcing public toll safety guidelines, because the contractor is discharging a public function delegated by a statutory authority (NHAI) under Article 226',
      'Writs can only be filed against the Minister of Road Transport',
      'Commuters must file a consumer complaint only'
    ],
    correctIndex: 1,
    explanation: 'Where a private concessionaire discharges delegated statutory sovereign/public functions (toll collection on national highways), it is amenable to Article 226 regarding public obligations (Andi Mukta 1989).',
    articleRef: 'Article 226 & Article 12',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r5-q35',
    round: 'Applied Courtroom',
    question: `An executive circular is issued by a State Education Department stating that teachers in government schools who wear traditional headgear will face immediate suspension without inquiry. The circular has no statutory backing under any Act. A teacher challenges the suspension. As a judge, how will you decide under Article 13?`,
    options: [
      'Uphold the suspension because dress codes promote uniformity',
      'Quash the circular: non-statutory executive instructions cannot abridge Fundamental Rights under Article 19, 21, and 25 (Bijoe Emmanuel 1986); any restriction must be backed by a valid "law" under Article 13',
      'Direct the teacher to wear modern attire',
      'Advise the school to hold a student poll'
    ],
    correctIndex: 1,
    explanation: 'Restrictions on fundamental rights must be authorized by a valid legislative "law", not arbitrary non-statutory executive instructions (Bijoe Emmanuel 1986).',
    articleRef: 'Article 13 & Article 25',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r5-q36',
    round: 'Applied Courtroom',
    question: `A State Reorganization Act splits State A into State A and State B. The Act contains a provision allocating all assets of the erstwhile State to State A and all liabilities to State B. State B challenges this provision before the Supreme Court under Article 4. What will the Court decide?`,
    options: [
      'Dismiss the challenge because Parliament has absolute discretion under Article 4',
      'Entertain the challenge: while Article 4 allows supplemental and consequential financial adjustments, Parliament cannot enact an arbitrary, unconstitutional scheme that violates Article 14 and basic federal equality (Mangal Singh 1967)',
      'Advise the States to negotiate a commercial loan',
      'Appoint a private chartered accountant to divide assets'
    ],
    correctIndex: 1,
    explanation: 'Article 4 supplemental powers are bounded by the Basic Structure and Article 14 fairness; Parliament cannot enact an absurd or unconstitutionally discriminatory scheme (Mangal Singh 1967).',
    articleRef: 'Article 4 & Article 14',
    difficulty: 'Case Law / Advanced'
  },
  {
    id: 'd1-r5-q37',
    round: 'Applied Courtroom',
    question: `An accused person charged with a cyber crime is ordered by the Investigating Officer to disclose his encrypted password. The accused refuses, claiming protection under Article 20(3). The Prosecutor argues that disclosing a password is non-testimonial physical evidence like giving a key to a safe. What is the constitutional distinction?`,
    options: [
      'Passwords are physical evidence and must be disclosed',
      'Compelling an accused to disclose a mental thought/passcode conveys cognitive knowledge from his mind, attracting Article 20(3) and mental privacy under Selvi (2010), unlike providing physical biometric impressions (fingerprints) which are physical evidence',
      'Article 20(3) does not apply to cyber crimes',
      'The accused must be detained until he reveals the password'
    ],
    correctIndex: 1,
    explanation: 'Under Selvi (2010) and Kathi Kalu Oghad (1961), compelling disclosure of mental contents (passwords/PINs) involves personal cognitive awareness (testimonial evidence) protected by Article 20(3).',
    articleRef: 'Article 20(3) & Article 21',
    difficulty: 'Case Law / Advanced'
  },
  {
    id: 'd1-r5-q38',
    round: 'Applied Courtroom',
    question: `A petitioner files a PIL under Article 32 challenging an amendment to the Preamble that deleted the word "Socialist" and inserted "Welfare-Oriented". The Union Government argues that since the Preamble was already amended once by the 42nd Amendment, Parliament has absolute constituent power to modify or delete any Preamble word. How will the Constitution Bench decide?`,
    options: [
      'Uphold the government\'s contention of unlimited amending power',
      'Examine the challenge under the Basic Structure Doctrine: under Kesavananda Bharati (1973), while the Preamble can be amended, any amendment that alters, damages, or destroys the Basic Structure (e.g. social justice and secularism) is unconstitutional and void',
      'Hold that the Preamble cannot be amended at all',
      'Order a national plebiscite'
    ],
    correctIndex: 1,
    explanation: 'The Preamble embodies the Basic Structure. Any amendment to the Preamble is subject to the judicial review of the Basic Structure Doctrine (Kesavananda Bharati 1973).',
    articleRef: 'Preamble & Article 368',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r5-q39',
    round: 'Applied Courtroom',
    question: `A local Municipal Corporation passes an order demolishing a registered slum settlement without issuing any prior notice or hearing, leaving 500 families homeless in freezing winter. The residents approach the High Court under Article 226. The Corporation argues that slum dwellers are encroachers with no property rights under Article 300A. What order should the High Court pass?`,
    options: [
      'Dismiss the petition because encroachers have no rights',
      'Stay the demolition and direct rehabilitation: applying Olga Tellis v. Bombay Municipal Corporation (1985), the right to life under Article 21 encompasses the right to livelihood and shelter; procedural natural justice (notice and opportunity of hearing) must be complied with prior to eviction',
      'Direct the police to arrest the slum dwellers',
      'Order the municipal officers to pay rent to the encroachers'
    ],
    correctIndex: 1,
    explanation: 'In Olga Tellis (1985), the Supreme Court ruled that right to life under Article 21 includes livelihood and shelter, and eviction without procedural fairness violates natural justice and Article 21.',
    articleRef: 'Article 12 & Article 21',
    difficulty: 'Intermediate'
  },
  {
    id: 'd1-r5-q40',
    round: 'Applied Courtroom',
    question: `A statutory university created by a State Act expels a student without serving a charge-sheet or conducting a disciplinary inquiry. When the student files a writ under Article 226, the university argues that university disciplinary proceedings are internal domestic matters outside judicial review. Decide.`,
    options: [
      'Accept the university\'s argument of complete domestic autonomy',
      'Quash the expulsion: as a statutory university, it is State under Article 12; all disciplinary proceedings must conform to the principles of natural justice (Audi Alteram Partem), and arbitrary expulsion violates Article 14',
      'Direct the student to apologize in writing',
      'Direct the Governor to decide the student\'s grade'
    ],
    correctIndex: 1,
    explanation: 'Statutory universities are "the State" under Article 12. Domestic disciplinary inquiries affecting students\' careers must strictly adhere to the principles of natural justice and Article 14.',
    articleRef: 'Article 12 & Article 14',
    difficulty: 'Foundational'
  }
];
