import type { MainsMasterQuestion } from '../types/mainsQuestionTypes';

export const MAINS_MASTER_QUESTIONS: MainsMasterQuestion[] = [
  // =========================================================================
  // 5 MARKS / 100–120 WORDS (TIER 1: CRISP DOCTRINAL BENCHMARKS)
  // =========================================================================
  {
    id: 'mains-5m-eclipse',
    title: 'Doctrine of Eclipse under Article 13(1)',
    topicId: 'art-13-judicial-review-doctrines',
    marksCategory: 5,
    examCategory: 'UP_PCSJ',
    examsAppeared: ['UP PCS-J 2015, 2018', 'MP Judiciary 2017, 2021', 'Rajasthan Judicial 2019'],
    typicalMarks: 5,
    targetWordLimit: '100–120 Words | Time: ~4 Mins',
    targetWordMin: 90,
    targetWordMax: 130,
    estimatedPages: '0.5 Page (~12 lines)',
    targetTimeMinutes: 4,
    questionText: 'Write a short note on the "Doctrine of Eclipse" under Article 13(1) of the Constitution of India. Does it apply to post-constitutional laws?',
    coreIssues: [
      'Meaning of "void" in Article 13(1) for pre-constitutional statutes.',
      'Dormant vs still-born law distinction.',
      'Non-applicability to post-constitutional statutes against citizens (Deep Chand).'
    ],
    examinerExpectation:
      'Candidate must explain that pre-constitutional laws violating Part III do not die; they are merely overshadowed by Fundamental Rights. Once the shadow is removed by constitutional amendment, the law becomes active again.',
    essentialCitations: [
      'Behram Khurshed Pesikaka v. State of Bombay (1955 1 SCR 613)',
      'Bhikaji Narain Dhakras v. State of M.P. (AIR 1955 SC 781)',
      'Deep Chand v. State of U.P. (AIR 1959 SC 648)',
      'State of Gujarat v. Ambica Mills ((1974) 4 SCC 656)'
    ],
    hoverIntel: {
      topicName: 'Doctrine of Eclipse & Article 13(1)',
      topicPillar: 'Part III: Fundamental Rights • Judicial Review',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Short Note)',
      examFrequency: 'Tested 6 times in UP PCS-J, MP Judiciary & RJS Mains',
      weightagePattern: '5 Marks • 100–120 Words (0.5 Page)',
      targetTimeMinutes: 4,
      examinerTrapWarning:
        'Trap Alert: Candidates often claim Eclipse applies to all laws. Clearly state that under Deep Chand (1959), post-constitutional laws violating FRs are still-born and void ab initio; Eclipse cannot revive them for citizens!',
      recentTrendAlert: 'Frequently paired with Doctrine of Severability in 10-mark split questions.',
      coreArticles: ['Article 13(1)', 'Article 13(2)', 'Article 19(1)(g)'],
      benchmarkCases: ['Bhikaji Narain (1955)', 'Deep Chand (1959)', 'Ambica Mills (1974)']
    },
    answerBlueprint: {
      step1Intro: 'Define Article 13(1) mandate: pre-constitutional laws inconsistent with Fundamental Rights are void to the extent of inconsistency.',
      step2DoctrinalCore: 'Explain Bhikaji Narain ratio: "Void" does not mean repealed; the law remains dormant (in eclipse) until an amendment lifts the shadow.',
      step3PrecedentEvolution: 'Distinguish pre vs post-constitutional laws: Deep Chand held post-constitutional laws violating FRs are still-born (void ab initio).',
      step4Conclusion: 'State the non-citizen qualification in Ambica Mills (1974): a post-constitutional law remains valid against non-citizens/corporations.'
    },
    fullModelAnswer: `I. TEXTUAL FOUNDATION & DOCTRINAL MEANING:
Article 13(1) provides that pre-constitutional laws inconsistent with Fundamental Rights (FRs) are "void to the extent of such inconsistency."
In Bhikaji Narain Dhakras v. State of M.P. (AIR 1955 SC 781), the Supreme Court evolved the Doctrine of Eclipse:
- A pre-constitutional statute violating Part III is not dead or repealed ab initio.
- It remains dormant, overshadowed (eclipsed) by the paramount Fundamental Right.
- If a constitutional amendment removes the inconsistency, the shadow falls off, and the statute automatically revives without fresh legislative enactment.

II. APPLICATION TO POST-CONSTITUTIONAL LAWS:
Under Article 13(2), the State is prohibited from making any law taking away Part III rights.
1. Deep Chand v. State of U.P. (1959): The Supreme Court held that post-constitutional laws violating FRs are still-born and void ab initio due to lack of legislative competence; hence, the Doctrine of Eclipse cannot resuscitate them.
2. Ambica Mills Qualification (1974): However, such a law remains dormant, not totally dead; it continues to operate against non-citizens who cannot claim fundamental rights under Article 19.`,
    scoringRubric: [
      { criterion: 'Article 13(1) text & Bhikaji Narain dormant law formulation', marks: 2 },
      { criterion: 'Deep Chand still-born distinction for post-constitutional laws', marks: 2 },
      { criterion: 'Ambica Mills non-citizen qualification & synthesis', marks: 1 }
    ]
  },

  {
    id: 'mains-5m-severability',
    title: 'Doctrine of Severability under Article 13',
    topicId: 'art-13-judicial-review-doctrines',
    marksCategory: 5,
    examCategory: 'DJS',
    examsAppeared: ['DJS 2016, 2022', 'UP PCS-J 2013, 2018', 'Bihar Judicial 2016'],
    typicalMarks: 5,
    targetWordLimit: '100–120 Words | Time: ~4 Mins',
    targetWordMin: 90,
    targetWordMax: 130,
    estimatedPages: '0.5 Page (~12 lines)',
    targetTimeMinutes: 4,
    questionText: 'Explain the "Doctrine of Severability" under Article 13 with the help of the "Legislative Intent Test" laid down in R.M.D. Chamarbaugwalla.',
    coreIssues: [
      'Meaning of "to the extent of the inconsistency / contravention".',
      'The blue-pencil test in constitutional adjudication.',
      'Legislative intent test: Would legislature have enacted the valid part independently?'
    ],
    examinerExpectation:
      'Examiner expects citation of R.M.D. Chamarbaugwalla (1957) and the rule that if unconstitutional provisions are inextricably intertwined with valid ones, the entire statute collapses.',
    essentialCitations: [
      'A.K. Gopalan v. State of Madras (1950 SCR 88)',
      'R.M.D. Chamarbaugwalla v. Union of India (1957 SCR 930)',
      'Minerva Mills v. Union of India ((1980) 3 SCC 625)'
    ],
    hoverIntel: {
      topicName: 'Doctrine of Severability',
      topicPillar: 'Part III: Fundamental Rights • Judicial Review',
      examImportance: '⭐⭐⭐⭐ High Priority Recurring',
      examFrequency: 'Appeared in DJS Civil Law, UP PCS-J Law Paper I',
      weightagePattern: '5 Marks • 100–120 Words (0.5 Page)',
      targetTimeMinutes: 4,
      examinerTrapWarning:
        'Trap Alert: Do not stop at saying "valid part is saved". Explain the Test of Inextricability: if cutting the invalid clause alters the statutory scheme, the whole Act must be struck down.',
      recentTrendAlert: 'Recently applied in striking down Section 57 Aadhaar Act (private entity access).',
      coreArticles: ['Article 13(1)', 'Article 13(2)'],
      benchmarkCases: ['A.K. Gopalan (1950)', 'R.M.D. Chamarbaugwalla (1957)']
    },
    answerBlueprint: {
      step1Intro: 'Quote the phrase "to the extent of such contravention" in Article 13(1) and 13(2).',
      step2DoctrinalCore: 'Explain that courts do not strike down entire statutes if offensive clauses can be severed without mutilating the core enactment.',
      step3PrecedentEvolution: 'Detail R.M.D. Chamarbaugwalla 2-step test: (a) Textual severability (Blue Pencil), (b) Substantive legislative intent.',
      step4Conclusion: 'Conclude with Gopalan (severing Section 14) and Minerva Mills (severing unconstitutional parts of 42nd Amendment).'
    },
    fullModelAnswer: `I. CONSTITUTIONAL FOUNDATION & PURPOSE:
Article 13 mandates that a statute is void only "to the extent of inconsistency or contravention." Courts do not strike down an entire statute if unconstitutional clauses can be cleanly severed from valid provisions.

II. THE CHAMARBAUGWALLA LEGISLATIVE INTENT TEST:
In R.M.D. Chamarbaugwalla v. Union of India (1957 SCR 930), the Supreme Court synthesized the rules of severability:
1. Blue-Pencil Test: Can the invalid provision be excised without rewriting the remaining statutory text?
2. Legislative Intent Test: If the valid and invalid parts are so inextricably bound that the legislature would not have enacted the valid part alone, the entire statute must fall.
3. Substantial Residue: If what remains after excision is a complete, operable code fulfilling legislative intent, it survives.

APPLICATION: In A.K. Gopalan (1950), Section 14 of Preventive Detention Act was severed, saving the rest. In Aadhaar Case (2018), Section 57 was cleanly excised without invalidating the core statute.`,
    scoringRubric: [
      { criterion: 'Article 13 textual mandate "to the extent of contravention"', marks: 1.5 },
      { criterion: 'Chamarbaugwalla 3-part test of inextricably bound clauses', marks: 2.5 },
      { criterion: 'Judicial application (Gopalan or Aadhaar example)', marks: 1 }
    ]
  },

  {
    id: 'mains-5m-quo-warranto',
    title: 'Writ of Quo Warranto & Locus Standi',
    topicId: 'writs-judicial-review-142',
    marksCategory: 5,
    examCategory: 'BJS',
    examsAppeared: ['Bihar Judicial 2014, 2018', 'DJS 2015, 2022', 'UP PCS-J 2016'],
    typicalMarks: 5,
    targetWordLimit: '100–120 Words | Time: ~4 Mins',
    targetWordMin: 90,
    targetWordMax: 130,
    estimatedPages: '0.5 Page (~12 lines)',
    targetTimeMinutes: 4,
    questionText: 'What are the essential conditions for issuing a Writ of Quo Warranto? Does the traditional rule of Locus Standi apply to Quo Warranto petitions?',
    coreIssues: [
      'Substantive public office of statutory or constitutional creation.',
      'Usurper occupying office without legal qualifications.',
      'Relaxation of locus standi: any member of the public can maintain the petition.'
    ],
    examinerExpectation:
      'Candidate must state the 3 essential conditions and explicitly highlight that unlike other writs, petitioner need not have suffered personal injury.',
    essentialCitations: [
      'University of Mysore v. C.D. Govinda Rao (AIR 1965 SC 491)',
      'B.R. Kapur v. State of Tamil Nadu ((2001) 7 SCC 231)',
      'Central Electricity Supply Utility v. Dhobei Sahoo ((2014) 1 SCC 161)'
    ],
    hoverIntel: {
      topicName: 'Writ of Quo Warranto & Relaxed Locus Standi',
      topicPillar: 'Part III & Part VI: Writs (Articles 32 & 226)',
      examImportance: '⭐⭐⭐⭐ High Priority Conceptual',
      examFrequency: 'Regular in Bihar & Delhi Judicial Services',
      weightagePattern: '5 Marks • 100–120 Words (0.5 Page)',
      targetTimeMinutes: 4,
      examinerTrapWarning:
        'Trap Alert: Mention that Quo Warranto cannot lie against private offices (e.g., private company managing director) or purely contractual posts.',
      recentTrendAlert: 'Applied in B.R. Kapur (Jayalalithaa Chief Minister appointment despite conviction).',
      coreArticles: ['Article 32', 'Article 226'],
      benchmarkCases: ['University of Mysore (1965)', 'B.R. Kapur (2001)', 'Dhobei Sahoo (2014)']
    },
    answerBlueprint: {
      step1Intro: 'Define Quo Warranto ("by what authority"): a prerogative writ challenging usurper of public office.',
      step2DoctrinalCore: 'List 3 essential conditions laid down in University of Mysore v. Govinda Rao (1965).',
      step3PrecedentEvolution: 'Explain unique locus standi rule: petitioner acts as relator protecting public interest, no personal injury needed.',
      step4Conclusion: 'Cite B.R. Kapur (2001) where appointment of a convicted person as Chief Minister was quashed via Quo Warranto.'
    },
    fullModelAnswer: `I. MEANING & OBJECTIVE:
Quo Warranto ("By what authority") is a prerogative writ issued under Articles 32 and 226 to prevent unlawful usurpation of a public office by an unqualified person.

II. ESSENTIAL CONDITIONS (University of Mysore v. Govinda Rao, 1965):
1. Public Office: The office must be of a substantive public character created by the Constitution, statute, or statutory rules (cannot lie against private commercial posts).
2. Continuous Usurpation: The respondent must be in actual physical occupation of the office.
3. Lack of Legal Title: The appointment must violate mandatory constitutional or statutory qualifications.

III. EXCEPTION TO LOCUS STANDI:
Unlike Mandamus or Certiorari, the strict doctrine of Locus Standi does NOT apply to Quo Warranto.
As held in Central Electricity Supply Utility v. Dhobei Sahoo (2014), any citizen or member of the public can file a petition as a "relator," because the public at large has a right to ensure that public offices are not held by usurpers. In B.R. Kapur (2001), appointment of a convicted person as Chief Minister was quashed via Quo Warranto.`,
    scoringRubric: [
      { criterion: 'Definition & 3 conditions in University of Mysore', marks: 2.5 },
      { criterion: 'Relaxed locus standi rule & citizen as relator', marks: 1.5 },
      { criterion: 'Landmark precedent (B.R. Kapur or Dhobei Sahoo)', marks: 1 }
    ]
  },

  {
    id: 'mains-5m-curative',
    title: 'Curative Petitions under Article 142',
    topicId: 'higher-judiciary-collegium-142',
    marksCategory: 5,
    examCategory: 'DJS',
    examsAppeared: ['DJS 2017, 2023', 'UPSC Law Optional 2018, 2022', 'UP PCS-J 2023'],
    typicalMarks: 5,
    targetWordLimit: '100–120 Words | Time: ~4 Mins',
    targetWordMin: 90,
    targetWordMax: 130,
    estimatedPages: '0.5 Page (~12 lines)',
    targetTimeMinutes: 4,
    questionText: 'Trace the constitutional basis of "Curative Petitions" in the Supreme Court. On what exceptional grounds can a Curative Petition be entertained under Rupa Ashok Hurra?',
    coreIssues: [
      'Inherent powers under Article 142 (complete justice) vs finality of litigation.',
      'Remedy after dismissal of Review Petition under Article 137.',
      'Strict conditions: Bias / Natural Justice violation, and Senior Advocate certification.'
    ],
    examinerExpectation:
      'Must cite Rupa Ashok Hurra (2002) 5-Judge Bench, the Article 137 vs 142 interplay, and the mandatory procedural safeguard of Senior Advocate certification.',
    essentialCitations: [
      'Rupa Ashok Hurra v. Ashok Hurra ((2002) 4 SCC 388)',
      'Union of India v. Union Carbide Corp ((2023) SCC OnLine SC 264)',
      'Delhi Airport Metro Express v. DMRC (2024 INSC 292)'
    ],
    hoverIntel: {
      topicName: 'Curative Petitions & Article 142',
      topicPillar: 'Part V: The Union Judiciary (Articles 137 & 142)',
      examImportance: '⭐⭐⭐⭐ High Priority Conceptual',
      examFrequency: 'Tested in DJS, UPSC Law Optional and CLAT PG',
      weightagePattern: '5 Marks • 100–120 Words (0.5 Page)',
      targetTimeMinutes: 4,
      examinerTrapWarning:
        'Trap Alert: Curative petition is NOT a second review petition. It cannot be filed without first exhausting and having a Review Petition dismissed under Art. 137.',
      recentTrendAlert: 'Applied in DMRC v. Delhi Airport Metro (2024) to correct grave miscarriage of justice in arbitration.',
      coreArticles: ['Article 137', 'Article 142', 'Article 145'],
      benchmarkCases: ['Rupa Ashok Hurra (2002)', 'DMRC v. DAMEPL (2024)']
    },
    answerBlueprint: {
      step1Intro: 'Explain conflict between finality of judgments (interest reipublicae) and prevention of manifest injustice.',
      step2DoctrinalCore: 'Identify Article 142 inherent powers invoked after dismissal of Review Petition under Article 137.',
      step3PrecedentEvolution: 'Detail Rupa Ashok Hurra (2002) criteria: (1) Natural Justice violation, (2) Apprehension of bias by judge.',
      step4Conclusion: 'Mention procedural gate: Certificate by Senior Advocate and circulation to 3 senior-most judges + judges of original bench.'
    },
    fullModelAnswer: `I. CONSTITUTIONAL GENESIS:
Article 137 provides for review of Supreme Court judgments, subject to Article 145 rules. To balance finality of litigation with prevention of grave miscarriage of justice, a 5-Judge Constitution Bench in Rupa Ashok Hurra v. Ashok Hurra (2002) 4 SCC 388 evolved the extraordinary device of "Curative Petition" under the Court's inherent powers under Article 142 to do complete justice.

II. EXCEPTIONAL GROUNDS FOR ENTERTAINING CURATIVE PETITIONS:
A curative petition lies only after a review petition under Article 137 has been dismissed, on two rare grounds:
1. Violation of Natural Justice: Where the petitioner was not served notice and an adverse order was passed without a hearing.
2. Judicial Bias: Where a judge failed to disclose a conflict of interest, creating a real apprehension of bias.

III. PROCEDURAL SAFEGUARDS:
- Must contain a Senior Advocate certification verifying genuine grounds.
- Examined in circulation by a bench comprising the Chief Justice, the two senior-most judges, and the judges who passed the original order (if available). Recently reaffirmed in DMRC v. DAMEPL (2024).`,
    scoringRubric: [
      { criterion: 'Interplay of Art. 137 review & Art. 142 complete justice in Rupa Hurra', marks: 2 },
      { criterion: 'Dual substantive grounds (Natural justice breach & Judicial bias)', marks: 2 },
      { criterion: 'Senior advocate certificate & circulation safeguards', marks: 1 }
    ]
  },

  // =========================================================================
  // 10 MARKS / 150–200 WORDS (TIER 2: STANDARD JUDICIAL & PROSECUTION BENCHMARKS)
  // =========================================================================
  {
    id: 'mains-10m-ex-post-facto',
    title: 'Article 20(1): Protection against Ex-Post Facto Criminal Laws',
    topicId: 'art-20-22-custodial-forensics',
    marksCategory: 10,
    examCategory: 'PROSECUTION',
    examsAppeared: ['UP APO / Prosecution 2015, 2020', 'Bihar APO 2018, 2022', 'DJS 2018', 'MP Judiciary 2019'],
    typicalMarks: 10,
    targetWordLimit: '150–180 Words | Time: ~7 Mins',
    targetWordMin: 140,
    targetWordMax: 200,
    estimatedPages: '1.0 Page (~20 lines)',
    targetTimeMinutes: 7,
    questionText: 'Critically analyze the scope of Article 20(1) of the Constitution. Does the protection against ex-post facto laws extend to procedural alterations, changes in rules of evidence, and preventive detention?',
    coreIssues: [
      'Dual limbs of Article 20(1): retrospective conviction and enhanced penalty.',
      'Distinction between substantive criminal law and procedural alterations.',
      'Non-application to preventive detention, civil liabilities, and beneficial retrospectivity.'
    ],
    examinerExpectation:
      'Candidate must analyze the 2 distinct protections in 20(1), quote Rao Shiv Bahadur Singh and Kedar Nath, and explain that procedural laws (like trial venue or evidence rules) can be retrospective.',
    essentialCitations: [
      'Kedar Nath v. State of W.B. (AIR 1953 SC 404)',
      'Rao Shiv Bahadur Singh v. State of V.P. (AIR 1953 SC 394)',
      'Rattan Lal v. State of Punjab (AIR 1965 SC 444)',
      'Union of India v. Sukumar Pyne (AIR 1966 SC 1206)'
    ],
    hoverIntel: {
      topicName: 'Article 20(1) & Ex-Post Facto Safeguards',
      topicPillar: 'Part III: Fundamental Rights • Criminal Jurisprudence',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Prosecution Core)',
      examFrequency: 'Direct recurring question across all State APP/APO and DJS exams',
      weightagePattern: '10 Marks • 150–180 Words (1.0 Page)',
      targetTimeMinutes: 7,
      examinerTrapWarning:
        'Trap Alert: Candidates forget "Beneficial Retrospectivity" (Rattan Lal 1965). If a new law reduces punishment or provides probation, the accused CAN claim its retroactive benefit!',
      recentTrendAlert: 'Extremely critical for transition from IPC/CrPC to BNS/BNSS 2023.',
      coreArticles: ['Article 20(1)', 'Article 21'],
      benchmarkCases: ['Kedar Nath (1953)', 'Rao Shiv Bahadur (1953)', 'Rattan Lal (1965)']
    },
    answerBlueprint: {
      step1Intro: 'Quote Article 20(1) dual prohibition: (a) No conviction except for violation of law in force at commission, (b) No penalty greater than that prescribed at commission.',
      step2DoctrinalCore: 'Define substantive criminal protection: Rao Shiv Bahadur Singh held law in force means factual law, not deemed retrospective law.',
      step3PrecedentEvolution: 'Detail procedural exception: Sukumar Pyne held procedure and rules of evidence do not create vested rights and can be retrospective.',
      step4Conclusion: 'State Rattan Lal exception: ex-post facto rule does not bar beneficial retroactive amendments reducing sentence.'
    },
    fullModelAnswer: `I. TEXTUAL MANDATE OF ARTICLE 20(1):
Article 20(1) incorporates the Roman maxim *Nullum crimen, nulla poena sine lege* through two distinct constitutional shields:
1. Retrospective Conviction Bar: No person shall be convicted of any offence except for violation of a "law in force" at the time of the commission of the act.
2. Enhanced Penalty Bar: No person shall be subjected to a penalty greater than that which might have been inflicted under the law in force at the time of the commission.
In Rao Shiv Bahadur Singh (1953), the Supreme Court ruled that "law in force" means actual, factual law existing on that date, not law introduced by retrospective fiction.

II. SCOPE & LIMITATIONS:
1. Substantive vs Procedural Laws:
In Union of India v. Sukumar Pyne (1966), the Supreme Court clarified that Article 20(1) protects only substantive criminal liability. No accused has a vested right in a particular forum or procedure. Amendments altering procedural rules, trial venues, or modes of inquiry can apply retrospectively, provided they do not infringe Article 21 fairness.
2. Rules of Evidence: Changes in rules of evidence (e.g., standard of proof or admissibility) are procedural and not hit by Article 20(1).
3. Preventive Detention: Article 20(1) applies only to punitive trials for "offences"; preventive detention is precautionary, not punitive, and falls outside Article 20(1).
4. Beneficial Retrospectivity (Rattan Lal v. State of Punjab, 1965):
The prohibition is against ex-post facto burdens. If an amendment reduces the sentence or extends probation benefits, the accused is entitled to claim the retrospective advantage.

CONCLUSION:
Article 20(1) shields citizens against state-engineered retrospective criminalisation, while permitting procedural reforms and beneficial penal reductions.`,
    scoringRubric: [
      { criterion: 'Dual limbs of Art. 20(1) & Rao Shiv Bahadur Singh principle', marks: 3 },
      { criterion: 'Procedural vs Substantive law distinction (Sukumar Pyne)', marks: 3 },
      { criterion: 'Preventive detention & rules of evidence exclusion', marks: 2 },
      { criterion: 'Beneficial retrospectivity doctrine in Rattan Lal', marks: 2 }
    ]
  },

  {
    id: 'mains-10m-double-jeopardy',
    title: 'Article 20(2) Double Jeopardy vs Section 300 CrPC / Section 248 BNSS',
    topicId: 'art-20-22-custodial-forensics',
    marksCategory: 10,
    examCategory: 'PROSECUTION',
    examsAppeared: ['UP PCS-J 2016, 2023', 'Bihar APO 2019', 'DJS Criminal Law 2022', 'CBI PP 2021'],
    typicalMarks: 10,
    targetWordLimit: '150–180 Words | Time: ~7 Mins',
    targetWordMin: 140,
    targetWordMax: 200,
    estimatedPages: '1.0 Page (~20 lines)',
    targetTimeMinutes: 7,
    questionText: `Compare the scope of the constitutional protection against "Double Jeopardy" under Article 20(2) with the statutory rule under Section 300 CrPC (Section 248 BNSS). Is departmental punishment a bar to subsequent criminal trial?`,
    coreIssues: [
      'Constitutional rule: "prosecuted and punished" (Autrefois convict only).',
      'Statutory rule in CrPC/BNSS: Includes both Autrefois acquit and Autrefois convict.',
      'Departmental/administrative penalties do not constitute judicial prosecution.'
    ],
    examinerExpectation:
      'Candidate must explicitly highlight that Art. 20(2) covers only prior conviction, whereas Section 300 CrPC / 248 BNSS covers both prior acquittal and conviction. Cite Maqbool Hussain and Venkataraman.',
    essentialCitations: [
      'Maqbool Hussain v. State of Bombay (1953 SCR 730)',
      'S.A. Venkataraman v. Union of India (1954 SCR 1150)',
      'State of Tamil Nadu v. Nalini ((1999) 5 SCC 253)'
    ],
    hoverIntel: {
      topicName: 'Double Jeopardy: Art. 20(2) vs Sec 300 CrPC',
      topicPillar: 'Part III: Fundamental Rights • Criminal Safeguards',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Prosecution Core)',
      examFrequency: 'Appeared repeatedly in CBI PP, State APO and DJS Mains',
      weightagePattern: '10 Marks • 150–180 Words (1.0 Page)',
      targetTimeMinutes: 7,
      examinerTrapWarning:
        'Trap Alert: If an accused was ACQUITTED in trial 1, they CANNOT claim Article 20(2) (because Art 20(2) requires both prosecution AND punishment). They must seek protection under Section 300 CrPC / Sec 248 BNSS!',
      recentTrendAlert: 'Frequently tested in connection with PMLA proceedings following predicate offence acquittal.',
      coreArticles: ['Article 20(2)', 'Section 300 CrPC', 'Section 248 BNSS'],
      benchmarkCases: ['Maqbool Hussain (1953)', 'S.A. Venkataraman (1954)']
    },
    answerBlueprint: {
      step1Intro: 'Define the Common Law maxim: *Nemo debet bis vexari pro una et eadem causa* (no one should be vexed twice for the same cause).',
      step2DoctrinalCore: 'Analyze Article 20(2) requirements: Person must have been both "prosecuted" AND "punished" before a judicial court/tribunal.',
      step3PrecedentEvolution: 'Contrast with Section 300 CrPC (Sec 248 BNSS): statutory rule is wider; bars second trial on prior conviction OR prior acquittal.',
      step4Conclusion: 'Apply Venkataraman (1954): Departmental enquiry by commissioner is not a judicial court; criminal trial thereafter is fully valid.'
    },
    fullModelAnswer: `I. DOCTRINAL DISTINCTION: ART. 20(2) VS SEC. 300 CrPC / SEC. 248 BNSS:
Both provisions embody the maxim *Nemo debet bis vexari pro una et eadem causa*, but differ drastically in scope:
1. Constitutional Protection (Article 20(2)):
Article 20(2) states: "No person shall be prosecuted and punished for the same offence more than once."
- Narrow Scope: Incorporates ONLY the plea of *Autrefois Convict* (prior conviction).
- A person who was prosecuted and ACQUITTED in a prior trial cannot claim Article 20(2) protection.
2. Statutory Rule (Section 300 CrPC / Section 248 BNSS):
- Much Wider Scope: Incorporates both *Autrefois Acquit* and *Autrefois Convict*.
- A person once convicted OR acquitted by a competent court cannot be retried for the same offence or on the same facts.

II. PROSECUTION BEFORE A "COURT" & DEPARTMENTAL INQUIRIES:
To attract Article 20(2), the previous proceeding must be before a court of law or judicial tribunal:
1. Customs & Revenue Confiscations (Maqbool Hussain v. State of Bombay, 1953): Confiscation of smuggled gold by Sea Customs authorities is an administrative action in rem, not judicial prosecution. Subsequent prosecution under FERA was held valid.
2. Departmental Dismissal (S.A. Venkataraman v. Union of India, 1954): Dismissal of a public servant following an inquiry under Public Servants (Inquiries) Act is an administrative/disciplinary finding, not a criminal conviction. A subsequent prosecution under the Prevention of Corruption Act does NOT violate Article 20(2).

CONCLUSION:
Article 20(2) is a specialized constitutional shield against repeated judicial convictions, whereas Section 300 CrPC provides complete procedural immunity against retrial after acquittal.`,
    scoringRubric: [
      { criterion: 'Article 20(2) Autrefois convict vs Sec 300 CrPC dual coverage', marks: 4 },
      { criterion: 'Maqbool Hussain judicial prosecution definition', marks: 2 },
      { criterion: 'Venkataraman departmental inquiry ratio', marks: 3 },
      { criterion: 'Clear analytical conclusion', marks: 1 }
    ]
  },

  {
    id: 'mains-10m-erp-doctrine',
    title: 'Essential Religious Practices (ERP) Test under Article 25',
    topicId: 'freedom-of-religion-erp',
    marksCategory: 10,
    examCategory: 'DJS',
    examsAppeared: ['DJS 2018, 2022', 'UP PCS-J 2018, 2023', 'UPSC Law Optional 2019, 2022'],
    typicalMarks: 10,
    targetWordLimit: '160–180 Words | Time: ~7 Mins',
    targetWordMin: 150,
    targetWordMax: 200,
    estimatedPages: '1.0 Page (~20 lines)',
    targetTimeMinutes: 7,
    questionText: 'Explain the origin and scope of the "Essential Religious Practices" (ERP) Test under Article 25. Has this test led to the judiciary assuming the role of a religious cleric?',
    coreIssues: [
      'Genesis in Shirur Mutt (1954): Doctrine of Essentiality.',
      'Shift from what believers consider essential to what the Court considers essential.',
      'Criticism of judicial clericalism in Sabarimala (2018) and Hijab case (2022).'
    ],
    examinerExpectation:
      'Candidate must trace Shirur Mutt (1954), cite Sabarimala (2018), and critique the test: whether judges should examine religious scriptures or adopt constitutional morality.',
    essentialCitations: [
      'Commr., Hindu Religious Endowments v. Sri Lakshmindra Thirtha Swamiar (Shirur Mutt) (1954 SCR 1005)',
      'Shayara Bano v. Union of India ((2017) 9 SCC 1)',
      'Indian Young Lawyers Assn. v. State of Kerala (Sabarimala) ((2019) 11 SCC 1)',
      'Fathima Tasneem v. State of Kerala (Hijab Ruling 2022)'
    ],
    hoverIntel: {
      topicName: 'Essential Religious Practices (ERP) Doctrine',
      topicPillar: 'Part III: Fundamental Rights • Religious Freedom',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Current Benchmark)',
      examFrequency: 'Appeared in DJS 2022, UP PCS-J 2023, UPSC Law 2022',
      weightagePattern: '10 Marks • 160–180 Words (1.0 Page)',
      targetTimeMinutes: 7,
      examinerTrapWarning:
        'Trap Alert: Do not take a personal religious stance. Frame the answer strictly through constitutional jurisprudence: Shirur Mutt vs Constitutional Morality in Sabarimala.',
      recentTrendAlert: 'Currently referred to a 9-Judge Constitution Bench in Kantaru Rajeevaru (Sabarimala review).',
      coreArticles: ['Article 25', 'Article 26'],
      benchmarkCases: ['Shirur Mutt (1954)', 'Sabarimala (2018)', 'Shayara Bano (2017)']
    },
    answerBlueprint: {
      step1Intro: 'State the scope of Article 25(1): Freedom of conscience and profession, practice, and propagation of religion, subject to public order, morality, and health.',
      step2DoctrinalCore: 'Detail Shirur Mutt (1954): What constitutes an essential part of a religion is determined with reference to the doctrines of that religion itself.',
      step3PrecedentEvolution: 'Critique the shift: In later cases (e.g. Sabarimala 2018, Triple Talaq 2017), courts required proof that without the practice, the religion itself ceases to exist.',
      step4Conclusion: 'Conclude with Justice Chandrachud\'s formulation in Sabarimala: ERP test must yield to Constitutional Morality, individual dignity, and gender equality.'
    },
    fullModelAnswer: `I. GENESIS OF THE DOCTRINE (SHIRUR MUTT, 1954):
Under Article 25(1), religious freedom is guaranteed subject to public order, morality, health, and other provisions of Part III. In Commr., HRE v. Sri Lakshmindra Thirtha Swamiar (Shirur Mutt, 1954), the Supreme Court laid down that Article 25 protects not only religious beliefs, but also acts done in pursuance of religion.
To separate secular activities from religious practices, the Court formulated the "Essential Religious Practices" (ERP) Test: only practices fundamental and essential to the core tenets of a religion enjoy constitutional immunity.

II. THE SHIFT TOWARDS JUDICIAL CLERICALISM:
Over decades, the application of ERP underwent a controversial transformation:
1. From Subjective Faith to Objective Judicial Determination: Initially, Shirur Mutt held that essentiality must be judged from the perspective of the religious denomination itself.
2. The Test of Inextricability: In Durgah Committee (1961) and later rulings, the Court assumed the role of theological arbiter, requiring communities to prove that if the practice were abandoned, the religion itself would fundamentally alter or dissolve. In Shayara Bano (2017), Talaq-e-biddat was held non-essential because it was not mandated in the Quran.

III. CONSTITUTIONAL MORALITY AS THE NEW CORRECTIVE:
In Indian Young Lawyers Assn. (Sabarimala, 2018), the majority held that excluding women aged 10–50 was not an essential religious practice, declaring that the ERP test cannot override the overarching constitutional values of human dignity (Art. 21) and gender equality (Art. 15).

CONCLUSION:
While ERP prevented secular commercial practices from hijacking constitutional protections, excessive theological scrutiny risks judicial overreach. The emerging paradigm rightly anchors religious freedom to Constitutional Morality rather than ecclesiastical arbitration.`,
    scoringRubric: [
      { criterion: 'Shirur Mutt 1954 origin & core formulation of ERP', marks: 3 },
      { criterion: 'Evolution of test of inextricability & theological critique', marks: 3 },
      { criterion: 'Sabarimala & Constitutional Morality transition', marks: 3 },
      { criterion: 'Balanced jurisprudential conclusion', marks: 1 }
    ]
  },

  {
    id: 'mains-10m-governor-assent',
    title: "Governor's Discretionary Power under Article 200 in Granting Assent to Bills",
    topicId: 'union-state-executive-ordinances',
    marksCategory: 10,
    examCategory: 'UPSC_LAW',
    examsAppeared: ['UPSC Law Optional 2023', 'DJS 2023', 'UP PCS-J 2023', 'BJS 2022'],
    typicalMarks: 10,
    targetWordLimit: '160–180 Words | Time: ~7 Mins',
    targetWordMin: 150,
    targetWordMax: 200,
    estimatedPages: '1.0 Page (~20 lines)',
    targetTimeMinutes: 7,
    questionText: `Can a Governor indefinitely sit on Bills passed by an elected State Legislature? Discuss the constitutional choices available under Article 200 in light of the 2023 Supreme Court ruling in State of Punjab v. Principal Secretary to Governor.`,
    coreIssues: [
      'Constitutional options under Article 200: Assent, Withhold, Reserve for President, or Return.',
      'Interpretation of "as soon as possible" in the first proviso to Article 200.',
      'Governor cannot defeat parliamentary democracy by pocket veto.'
    ],
    examinerExpectation:
      'Candidate must cite CJI Chandrachud\'s 2023 ruling in State of Punjab. Clarify that withholding assent MUST be accompanied by returning the bill to the Assembly; Governor has no pocket veto.',
    essentialCitations: [
      'Shamsher Singh v. State of Punjab ((1974) 2 SCC 831)',
      'State of Punjab v. Principal Secretary to Governor of Punjab (2023 INSC 1018)',
      'State of Tamil Nadu v. Governor of Tamil Nadu (2023 SCC OnLine SC 1618)'
    ],
    hoverIntel: {
      topicName: "Governor's Assent under Article 200",
      topicPillar: 'Part VI: The State Executive & Legislature (Article 200)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Recent 2023 Benchmark)',
      examFrequency: 'Appeared in UPSC 2023 & State Judicial Mains 2023',
      weightagePattern: '10 Marks • 160–180 Words (1.0 Page)',
      targetTimeMinutes: 7,
      examinerTrapWarning:
        'Trap Alert: Many think the Governor can simply "withhold assent" and kill a bill. The 2023 Punjab ruling held that withholding assent is strictly linked to returning the Bill under the first proviso!',
      recentTrendAlert: 'Benchmark 2023 rulings: State of Punjab & State of Tamil Nadu on gubernatorial inaction.',
      coreArticles: ['Article 200', 'Article 174', 'Article 163'],
      benchmarkCases: ['Shamsher Singh (1974)', 'Punjab Governor Case (2023)']
    },
    answerBlueprint: {
      step1Intro: 'State Article 200 mandate: 4 constitutional courses open to Governor when a Bill is presented.',
      step2DoctrinalCore: 'Analyze the phrase "withholds assent therefrom": Governor cannot withhold assent in an arbitrary vacuum; must return the bill.',
      step3PrecedentEvolution: 'Detail CJI Chandrachud\'s 2023 Punjab judgment: Governor is a titular constitutional head, not an elected lawmaker.',
      step4Conclusion: 'Reiterate that if the House repasses the returned Bill, with or without amendment, the Governor "shall not withhold assent".'
    },
    fullModelAnswer: `I. THE CONSTITUTIONAL MANDATE OF ARTICLE 200:
When a Bill passed by the State Legislature is presented to the Governor, Article 200 outlines four constitutional courses:
1. Grant Assent;
2. Declare that he Withholds Assent;
3. Reserve the Bill for the consideration of the President; or
4. Return the Bill (if not a Money Bill) to the House with a message for reconsideration.

II. THE 2023 SUPREME COURT BENCHMARK (State of Punjab v. Principal Secretary):
In State of Punjab v. Principal Secretary to Governor (2023 INSC 1018), a 3-Judge Bench led by CJI D.Y. Chandrachud eliminated the misconception of an unfettered gubernatorial "pocket veto":
1. No Indefinite Inaction: The phrase "as soon as possible" in the first proviso demands immediate action. The Governor cannot immobilize the legislative process by sitting on bills indefinitely.
2. Withholding Assent is Coupled with Returning: The Court held that withholding assent under the substantive part of Article 200 is not a standalone veto. If the Governor withholds assent, he MUST mandatory follow the first proviso and return the Bill with a message requesting reconsideration.
3. Subordination to Elected Legislature: If the Legislature repasses the Bill (with or without amendment), the second proviso explicitly mandates that the Governor "shall not withhold assent therefrom."

CONCLUSION:
Under parliamentary democracy (Shamsher Singh, 1974), the Governor is a non-elected constitutional head bound by the aid and advice of the Council of Ministers. The Governor cannot usurp the democratic will of the elected legislature.`,
    scoringRubric: [
      { criterion: 'Four constitutional options under Article 200', marks: 2.5 },
      { criterion: 'Punjab Governor (2023) interpretation of withholding assent & first proviso', marks: 4 },
      { criterion: 'Second proviso mandatory assent on repassage', marks: 2 },
      { criterion: 'Democratic legitimacy & Shamsher Singh alignment', marks: 1.5 }
    ]
  },

  {
    id: 'mains-10m-sita-soren',
    title: 'Parliamentary Privileges vs Criminal Law: Cash-for-Votes Overruled',
    topicId: 'legislature-privileges-anti-defection',
    marksCategory: 10,
    examCategory: 'DJS',
    examsAppeared: ['DJS 2024 Benchmark', 'UPSC Law Optional 2024', 'UP PCS-J 2024'],
    typicalMarks: 10,
    targetWordLimit: '160–180 Words | Time: ~7 Mins',
    targetWordMin: 150,
    targetWordMax: 200,
    estimatedPages: '1.0 Page (~20 lines)',
    targetTimeMinutes: 7,
    questionText: `Does parliamentary privilege under Article 105(2) and Article 194(2) protect a legislator from criminal prosecution for taking a bribe to vote or speak in the House? Examine the 7-Judge Constitution Bench decision in Sita Soren v. Union of India (2024).`,
    coreIssues: [
      'P.V. Narasimha Rao (1998) 3:2 majority granting immunity to bribe-takers who cast their vote.',
      'The 7-Judge Constitution Bench unanimous overruling in Sita Soren (2024).',
      'The "Necessity Test" for parliamentary privilege and completed nature of the offence of bribery.'
    ],
    examinerExpectation:
      'Candidate must explain the paradox of P.V. Narasimha Rao, detail the 2024 7-Judge Bench ruling in Sita Soren, and emphasize that bribery is complete the moment money is accepted, independent of parliamentary action.',
    essentialCitations: [
      'P.V. Narasimha Rao v. State (CBI/SPE) ((1998) 4 SCC 626)',
      'Sita Soren v. Union of India (2024 INSC 165; 2024 SCC OnLine SC 229)',
      'Special Reference No. 1 of 1964 (Keshav Singh) (1965 1 SCR 413)'
    ],
    hoverIntel: {
      topicName: 'Parliamentary Privileges & Bribery Prosecution',
      topicPillar: 'Part V & VI: Union & State Legislature (Articles 105 & 194)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Landmark 2024 7-Judge Bench)',
      examFrequency: 'Guaranteed core question for 2024–2026 Mains across all States',
      weightagePattern: '10 Marks • 160–180 Words (1.0 Page)',
      targetTimeMinutes: 7,
      examinerTrapWarning:
        'Trap Alert: Be precise: Sita Soren was decided by a unanimous 7-Judge Bench led by CJI Chandrachud, overruling the 3:2 majority in P.V. Narasimha Rao (1998).',
      recentTrendAlert: 'Decided on March 4, 2024; established that legislative bribery subverts constitutional morality.',
      coreArticles: ['Article 105(2)', 'Article 194(2)', 'Prevention of Corruption Act, 1988'],
      benchmarkCases: ['P.V. Narasimha Rao (1998)', 'Sita Soren (2024)']
    },
    answerBlueprint: {
      step1Intro: 'Quote Article 105(2)/194(2): "No member shall be liable to any proceedings in any court in respect of anything said or any vote given by him in Parliament."',
      step2DoctrinalCore: 'Critique the bizarre anomaly in P.V. Narasimha Rao (1998): MPs who took bribe and voted were immune, but MP Ajit Singh who took bribe and abstained was prosecuted.',
      step3PrecedentEvolution: 'Detail the 7-Judge Bench verdict in Sita Soren (2024): (a) Offence of bribery is complete upon acceptance of bribe, (b) Privilege protects collective deliberation, not criminal corruption.',
      step4Conclusion: 'Conclude with the "Necessity Test": Parliamentary privilege extends only to what is necessary for a legislator to function freely without fear of executive harassment.'
    },
    fullModelAnswer: `I. THE PARADOXICAL LEGACY OF P.V. NARASIMHA RAO (1998):
Articles 105(2) and 194(2) grant legislators immunity from judicial proceedings "in respect of anything said or any vote given."
In P.V. Narasimha Rao v. State (1998), a 3:2 majority held that MPs who accepted bribes and voted to defeat a no-confidence motion were constitutionally immune from prosecution under the Prevention of Corruption Act (PC Act), whereas an MP who took money but did not vote was liable. This created an indefensible moral paradox where actual performance of a corrupt bargain conferred criminal immunity.

II. THE UNANIMOUS 7-JUDGE OVERRULING: SITA SOREN (2024):
In Sita Soren v. Union of India (2024 INSC 165), a 7-Judge Constitution Bench unanimously overruled Narasimha Rao on cardinal grounds:
1. Independent Consummation of Bribery: Under Section 7 of the PC Act, the offence of bribery is complete the moment illegal gratification is accepted or agreed to. Whether the legislator subsequently speaks, votes, or abstains is immaterial to criminal liability.
2. The "Two-Fold Necessity Test": Privileges are not personal immunities for criminal misconduct; they are functional shields necessary to protect the collective deliberative freedom of the House. Shielding corruption is not necessary for legislative functioning.
3. Subversion of Constitutional Democracy: Corruption destroys democratic legitimacy and constitutional morality.

CONCLUSION:
Articles 105 and 194 cannot be weaponized as charters of impunity. Bribe-taking by a legislator is a serious criminal offence subject to ordinary courts.`,
    scoringRubric: [
      { criterion: 'P.V. Narasimha Rao (1998) majority doctrine & paradox', marks: 3 },
      { criterion: 'Sita Soren (2024) 7-judge unanimous overruling', marks: 4 },
      { criterion: 'Consummation of bribery & the Two-Fold Necessity Test', marks: 2 },
      { criterion: 'Constitutional Morality synthesis', marks: 1 }
    ]
  },

  // =========================================================================
  // 15 MARKS / 250–300 WORDS (TIER 3: IN-DEPTH PROBLEM & BENCHMARK CASES)
  // =========================================================================
  {
    id: 'mains-15m-art12-state',
    title: 'Definition of "State" under Article 12: Private Entities, BCCI & Educational Bodies',
    topicId: 'art-12-state-writ-maintainability',
    marksCategory: 15,
    examCategory: 'DJS',
    examsAppeared: ['DJS 2017, 2022', 'UP PCS-J 2016, 2018', 'Bihar Judicial 2018, 2021', 'UPSC Law 2019'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~12 Mins',
    targetWordMin: 230,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~30 lines)',
    targetTimeMinutes: 12,
    questionText: `Trace the evolution of the test for determining "Other Authorities" under Article 12 from Ajay Hasia to Pradeep Kumar Biswas. Can a writ petition under Article 32 be maintained against the Board of Control for Cricket in India (BCCI) or an unaided private school?`,
    coreIssues: [
      'Ajay Hasia 6-factor test of "instrumentality or agency of State".',
      'Pradeep Kumar Biswas modern test: Deep, pervasive and functional control, not merely regulatory.',
      'BCCI status: Held not "State" under Art 12 (Zee Telefilms), but amenable to Article 226 for public functions.'
    ],
    examinerExpectation:
      'Candidate must trace Electricity Board $\to$ Ajay Hasia $\to$ Pradeep Kumar Biswas 7-Judge Bench. Contrast Article 32 (strict Article 12 State) with Article 226 (public duty/function test in Zee Telefilms and Janet Jeyapaul).',
    essentialCitations: [
      'Rajasthan State Electricity Board v. Mohan Lal (1967 3 SCR 377)',
      'Ramana Dayaram Shetty v. International Airport Authority ((1979) 3 SCC 489)',
      'Ajay Hasia v. Khalid Mujib Sehravardi ((1981) 1 SCC 722)',
      'Pradeep Kumar Biswas v. Indian Institute of Chemical Biology ((2002) 5 SCC 111)',
      'Zee Telefilms Ltd. v. Union of India ((2005) 4 SCC 649)'
    ],
    hoverIntel: {
      topicName: 'Article 12: State & Instrumentality Test',
      topicPillar: 'Part III: Fundamental Rights • State Definition (Article 12)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Master Foundation)',
      examFrequency: 'Regularly tested in DJS, UP PCS-J, and Bihar Judicial Mains',
      weightagePattern: '15 Marks • 250–300 Words (1.5 Pages)',
      targetTimeMinutes: 12,
      examinerTrapWarning:
        'Trap Alert: Do not confuse Article 32 with Article 226! A writ under Art 32 against BCCI is DISMISSED (BCCI is not Art 12 State), but a writ under Art 226 lies for public duties (Zee Telefilms).',
      recentTrendAlert: 'Pradeep Kumar Biswas (7-Judge Bench) remains the authoritative standard overruling Sabhajit Tewary.',
      coreArticles: ['Article 12', 'Article 32', 'Article 226'],
      benchmarkCases: ['Ajay Hasia (1981)', 'Pradeep Kumar Biswas (2002)', 'Zee Telefilms (2005)']
    },
    answerBlueprint: {
      step1Intro: 'Define Article 12 components: Government, Parliament, State Legislature, Local Authorities, and "Other Authorities".',
      step2DoctrinalCore: 'Trace Ajay Hasia (1981) 6-factor test (financial share capital, state aid, monopoly status, deep control, public functions, dept transfer).',
      step3PrecedentEvolution: 'Detail Pradeep Kumar Biswas (2002) 7-Judge Bench recalibration: The control must be functionally, financially, and administratively DOMINATING.',
      step4Conclusion: 'Apply to BCCI (Zee Telefilms) and Private Schools: Not State under Article 12 (Art 32 barred), but amenable to Article 226 when discharging public duty.'
    },
    fullModelAnswer: `I. TEXTUAL FRAMEWORK & THE DILEMMA OF "OTHER AUTHORITIES":
Article 12 defines "the State" for Part III enforcement to include the Government, Parliament, State Legislatures, Local Authorities, and "Other Authorities" within India or under Government control. Because fundamental rights run primarily against the State, defining "Other Authorities" is the primary threshold in public law.

II. THE CLASSICAL INSTRUMENTALITY DOCTRINE: AJAY HASIA (1981):
In Ajay Hasia v. Khalid Mujib (1981), Justice P.N. Bhagwati synthesized prior rulings into a 6-factor test to determine if a body is an "instrumentality or agency of the State":
1. Entire share capital held by Government;
2. Extensive financial assistance meeting almost entire expenditure;
3. State-conferred monopoly status;
4. Deep and pervasive State control;
5. Functions of public importance closely related to governmental functions;
6. Transfer of a government department to a corporation.

III. THE MODERN RECALIBRATION: PRADEEP KUMAR BISWAS (2002, 7-JUDGE BENCH):
Recognizing that Ajay Hasia was being applied too mechanically, a 7-Judge Bench in Pradeep Kumar Biswas v. Indian Institute of Chemical Biology (2002) overruled Sabhajit Tewary and formulated a more stringent test:
- The inquiry is not whether the entity is a statutory body or company, but whether it is "functionally, financially, and administratively dominated by or under the pervasive control of the Government."
- Mere regulatory control under a statute (such as companies or societies registration) does not make an entity "State."

IV. APPLICATION TO BCCI & PRIVATE UNAIDED SCHOOLS:
1. BCCI (Zee Telefilms v. UOI, 2005): A 5-Judge Bench held that BCCI is NOT "State" under Article 12 because it receives no state funding, holds no state monopoly by statute, and the government has no administrative control over its management. Consequently, a Writ under Article 32 is NOT maintainable. However, because it selects the Indian national team and regulates sport, it discharges a "public function," making it amenable to High Court jurisdiction under Article 226.
2. Private Unaided Schools (St. Mary's Education Society, 2022): Discharging an educational function makes them subject to Article 226 regarding public duties (e.g. RTE compliance), but not under Article 32, nor for purely private service contract disputes.

CONCLUSION:
Article 12 requires pervasive governmental dominance for Part III enforcement, whereas Article 226 focuses on the public nature of the function performed.`,
    scoringRubric: [
      { criterion: 'Article 12 textual components & Ajay Hasia 6-factor test', marks: 4 },
      { criterion: 'Pradeep Kumar Biswas 7-Judge Bench pervasive dominance standard', marks: 5 },
      { criterion: 'BCCI status analysis (Zee Telefilms: Art 32 barred vs Art 226 allowed)', marks: 4 },
      { criterion: 'Private unaided educational institutions & conclusion', marks: 2 }
    ]
  },

  {
    id: 'mains-15m-sub-classification',
    title: 'Sub-Classification within Scheduled Castes & The Creamy Layer (Davinder Singh 2024)',
    topicId: 'art-14-arbitrariness-equality',
    marksCategory: 15,
    examCategory: 'UP_PCSJ',
    examsAppeared: ['UP PCS-J 2024 Benchmark', 'DJS 2024', 'UPSC Law Optional 2024'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~12 Mins',
    targetWordMin: 230,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~30 lines)',
    targetTimeMinutes: 12,
    questionText: `Can a State Government create sub-classifications within Scheduled Castes and Scheduled Tribes for preferential reservation? Discuss the 7-Judge Constitution Bench ruling in State of Punjab v. Davinder Singh (2024) and examine whether the "Creamy Layer" principle applies to SC/STs.`,
    coreIssues: [
      'The homogenous class doctrine in E.V. Chinnaiah (2005).',
      'The 7-Judge Bench verdict in Davinder Singh (2024) overruling Chinnaiah.',
      'Article 341 vs Article 16(4) legislative competence.',
      'Application of the Creamy Layer doctrine to SC/STs.'
    ],
    examinerExpectation:
      'Candidate must explain the conflict between E.V. Chinnaiah (2005) and Davinder Singh (2024). Emphasize that sub-classification must be backed by empirical data, cannot exclude any caste completely (100% reservation), and analyze the Creamy Layer consensus.',
    essentialCitations: [
      'Indra Sawhney v. Union of India (1992 Supp (3) SCC 217)',
      'E.V. Chinnaiah v. State of A.P. ((2005) 1 SCC 394)',
      'M. Nagaraj v. Union of India ((2006) 8 SCC 212)',
      'Jarnail Singh v. Lachhmi Narain Gupta ((2018) 10 SCC 396)',
      'State of Punjab v. Davinder Singh (2024 INSC 562; 7-Judge Bench)'
    ],
    hoverIntel: {
      topicName: 'SC/ST Sub-Classification & Creamy Layer',
      topicPillar: 'Part III: Fundamental Rights • Equality Code (Articles 14, 15, 16, 341)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Landmark 2024 7-Judge Bench)',
      examFrequency: 'Guaranteed top question for upcoming Judicial Mains & UPSC',
      weightagePattern: '15 Marks • 250–300 Words (1.5 Pages)',
      targetTimeMinutes: 12,
      examinerTrapWarning:
        'Trap Alert: Clarify that sub-classification does NOT empower the State to tinker with the Presidential List under Article 341! It only allocates preference within the existing quota under Article 16(4).',
      recentTrendAlert: 'Decided on August 1, 2024 by 6:1 majority (overruling 20-year precedent).',
      coreArticles: ['Article 14', 'Article 16(4)', 'Article 341', 'Article 342'],
      benchmarkCases: ['E.V. Chinnaiah (2005)', 'Jarnail Singh (2018)', 'Davinder Singh (2024)']
    },
    answerBlueprint: {
      step1Intro: 'Introduce Articles 14, 16(4), and 341. Mention the 20-year conflict originating from E.V. Chinnaiah (2005).',
      step2DoctrinalCore: 'Analyze E.V. Chinnaiah holding: SCs constitute a single, indivisible homogenous class; sub-classification violates Article 341.',
      step3PrecedentEvolution: 'Detail Davinder Singh (2024, 7-Judge Bench): SCs are not a monolith; substantive equality requires preferential treatment for more depressed groups.',
      step4Conclusion: 'Explain empirical requirements and the application of Creamy Layer to SC/STs as articulated in separate concurring opinions.'
    },
    fullModelAnswer: `I. THE CONSTITUTIONAL IMPASSE: CHINNAIAH (2005):
Under Article 341, the President notifies the list of Scheduled Castes (SCs). In E.V. Chinnaiah v. State of A.P. (2005), a 5-Judge Bench held that the Presidential List creates a single, indivisible, homogenous class. Any sub-classification by a State Legislature allocating separate quotas (e.g. for Valmikis or Mazhabi Sikhs) was held unconstitutional for tinkering with Article 341 and violating Article 14.

II. THE 7-JUDGE BENCH WATERSHED: DAVINDER SINGH (2024):
In State of Punjab v. Davinder Singh (2024 INSC 562), a 7-Judge Constitution Bench, by a 6:1 majority, expressly overruled E.V. Chinnaiah, establishing profound constitutional principles:
1. Substantive Equality over Formal Equality: SCs and STs are not a socially homogenous monolith. Deep internal inequalities exist, where the most marginalized sub-groups remain unrepresented despite decades of reservations.
2. Article 341 vs Article 16(4) Competence: Article 341 deals exclusively with "identification" of castes for the Presidential list, which Parliament alone can alter. In contrast, Article 16(4) deals with "affirmative action and representation," empowering States to design nuanced quotas without removing any caste from the Presidential list.
3. Strict Empirical Safeguards: The State cannot sub-classify arbitrarily or on political whim. It must justify preferential quotas through verifiable, empirical data showing inadequate representation. Furthermore, it cannot allocate 100% of the quota to one sub-caste, completely excluding others.

III. THE CREAMY LAYER RECKONING:
Four judges in concurring opinions affirmed that the "Creamy Layer" principle—originally recognized for OBCs in Indra Sawhney (1992) and extended to promotions in Jarnail Singh (2018)—must apply to SC/STs. Children of affluent, high-ranking SC/ST officers who have reached equality cannot continuously corner affirmative action benefits to the detriment of truly impoverished members.

CONCLUSION:
Davinder Singh aligns reservation law with real-world social reality, ensuring affirmative action reaches the weakest of the weak.`,
    scoringRubric: [
      { criterion: 'Chinnaiah homogenous class doctrine & Art. 341 prohibition', marks: 4 },
      { criterion: 'Davinder Singh 7-Judge Bench ratio (Art 341 vs 16(4) distinction)', marks: 5 },
      { criterion: 'Empirical data condition & anti-exclusion safeguards', marks: 3 },
      { criterion: 'Creamy Layer extension to SC/STs & conclusion', marks: 3 }
    ]
  },

  {
    id: 'mains-15m-arrest-pankaj-bansal',
    title: 'Arrest Safeguards under Article 22(1): Written Grounds in PMLA & UAPA',
    topicId: 'art-20-22-custodial-forensics',
    marksCategory: 15,
    examCategory: 'PROSECUTION',
    examsAppeared: ['Prosecution (CBI / NIA / State APP) 2024', 'DJS 2024', 'UP PCS-J 2024'],
    typicalMarks: 15,
    targetWordLimit: '250–300 Words | Time: ~12 Mins',
    targetWordMin: 230,
    targetWordMax: 320,
    estimatedPages: '1.5 Pages (~30 lines)',
    targetTimeMinutes: 12,
    questionText: `Analyze the constitutional mandate under Article 22(1) requiring an arresting officer to inform the arrested person of the "grounds of arrest as soon as may be." Discuss the impact of Pankaj Bansal (2023) and Prabir Purkayastha (2024) regarding furnishing written grounds in PMLA and UAPA cases.`,
    coreIssues: [
      'Constitutional right under Article 22(1) to be informed of grounds of arrest.',
      'Oral reading vs furnishing physical written grounds of arrest.',
      'Application to special penal statutes (PMLA Section 19 and UAPA).',
      'Remand order passed without written grounds is illegal and entitles accused to release.'
    ],
    examinerExpectation:
      'Candidate must explain Article 22(1), cite Pankaj Bansal (2023) under PMLA and Prabir Purkayastha (2024) under UAPA, and emphasize that communicating grounds in writing is an inviolable constitutional safeguard enabling effective bail application.',
    essentialCitations: [
      'D.K. Basu v. State of W.B. ((1997) 1 SCC 416)',
      'Vijay Madanlal Choudhary v. Union of India (2022 SCC OnLine SC 929)',
      'Pankaj Bansal v. Union of India (2023 INSC 866; (2023) 10 SCC 431)',
      'Prabir Purkayastha v. State (NCT of Delhi) (2024 INSC 413)'
    ],
    hoverIntel: {
      topicName: 'Article 22(1) & Written Grounds of Arrest',
      topicPillar: 'Part III: Fundamental Rights • Personal Liberty (Articles 21 & 22)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Prosecution Benchmark)',
      examFrequency: 'Directly tested across 2024 Prosecution & Judicial Mains exams',
      weightagePattern: '15 Marks • 250–300 Words (1.5 Pages)',
      targetTimeMinutes: 12,
      examinerTrapWarning:
        'Trap Alert: Mere oral reading or showing the arrest memo is INSUFFICIENT under Pankaj Bansal and Prabir Purkayastha. A written copy must be physically furnished to the accused!',
      recentTrendAlert: 'Prabir Purkayastha (May 2024) extended Pankaj Bansal rules to UAPA terror offences.',
      coreArticles: ['Article 21', 'Article 22(1)', 'Section 19 PMLA', 'Section 43B UAPA'],
      benchmarkCases: ['D.K. Basu (1997)', 'Pankaj Bansal (2023)', 'Prabir Purkayastha (2024)']
    },
    answerBlueprint: {
      step1Intro: 'Quote Article 22(1): "No person who is arrested shall be detained in custody without being informed, as soon as may be, of the grounds for such arrest."',
      step2DoctrinalCore: 'Explain purpose of communicating grounds: enables accused to consult legal counsel and draft an effective bail petition.',
      step3PrecedentEvolution: 'Detail Pankaj Bansal (2023): Reading aloud or showing arrest memo is unconstitutional; written grounds must be furnished without delay.',
      step4Conclusion: 'Conclude with Prabir Purkayastha (2024, UAPA): Failure to furnish written grounds renders the arrest and subsequent remand void ab initio, warranting immediate release.'
    },
    fullModelAnswer: `I. CONSTITUTIONAL FOUNDATION OF ARTICLE 22(1):
Article 22(1) confers a fundamental safeguard upon every arrested person:
"No person who is arrested shall be detained in custody without being informed, as soon as may be, of the grounds for such arrest nor shall he be denied the right to consult, and to be defended by, a legal practitioner of his choice."
In D.K. Basu (1997), the Supreme Court emphasized that personal liberty under Article 21 cannot be curtailed without strict procedural transparency.

II. THE WRITTEN MANDATE IN PMLA: PANKAJ BANSAL (2023):
Under Section 19 of the Prevention of Money Laundering Act (PMLA), the Enforcement Directorate (ED) routinely practiced reading out the grounds of arrest or obtaining a signature on an arrest memo without handing over a copy.
In Pankaj Bansal v. Union of India (2023) 10 SCC 431, the Supreme Court declared this practice unconstitutional:
1. Constitutional Purpose: The right to know the grounds is meaningless if the accused cannot understand the precise allegations to seek legal counsel or apply for bail under the stringent Section 45 PMLA twin conditions.
2. Mandatory Written Copy: The ED must furnish a written copy of the grounds of arrest to the accused at the time of arrest as a matter of course. Oral communication or mere inspection violates Article 22(1).

III. EXPANSION TO UAPA: PRABIR PURKAYASTHA (2024):
In Prabir Purkayastha v. State (NCT of Delhi) (2024 INSC 413), a 2-Judge Bench extended the Pankaj Bansal doctrine to arrests under the Unlawful Activities (Prevention) Act (UAPA):
1. Inviolable Right: The right to written grounds under Article 22(1) applies equally to anti-terror laws.
2. Vitiation of Custodial Remand: Because written grounds were not supplied before the remand order was passed, the arrest and subsequent judicial remand were declared illegal, and the accused was ordered to be released immediately.

CONCLUSION:
Pankaj Bansal and Prabir Purkayastha reaffirm that special statutory regimes cannot dilute bedrock constitutional safeguards. Written communication of grounds of arrest is an uncompromisable condition precedent for lawful detention.`,
    scoringRubric: [
      { criterion: 'Article 22(1) constitutional text & purpose (bail and counsel)', marks: 4 },
      { criterion: 'Pankaj Bansal 2023 ruling under Section 19 PMLA', marks: 4 },
      { criterion: 'Prabir Purkayastha 2024 extension to UAPA & invalidation of remand', marks: 5 },
      { criterion: 'Synthesis on procedural due process under Art. 21/22', marks: 2 }
    ]
  },

  // =========================================================================
  // 20–25 MARKS / 450–550 WORDS (TIER 4: COMPREHENSIVE DOCTRINES & LONG ESSAYS)
  // =========================================================================
  {
    id: 'mains-20m-due-process-triangle',
    title: 'Article 21: Evolution from Gopalan to Maneka Gandhi & The Due Process Shift',
    topicId: 'art-21-due-process',
    marksCategory: 20,
    examCategory: 'ALL',
    examsAppeared: ['DJS 2014, 2017, 2022', 'UP PCS-J 2013, 2018, 2023', 'Bihar Judicial 2016, 2021', 'UPSC Law Optional 2015, 2020'],
    typicalMarks: 20,
    targetWordLimit: '450–550 Words | Time: ~16 Mins',
    targetWordMin: 420,
    targetWordMax: 560,
    estimatedPages: '2.0–2.2 Pages (~44 lines)',
    targetTimeMinutes: 16,
    questionText: `"The expression 'procedure established by law' in Article 21 has been judicially interpreted to mean 'just, fair and reasonable procedure', thus bringing the American concept of Substantive Due Process into Indian Constitutional Law through the back door." Critically examine this statement with reference to landmark judicial pronouncements.`,
    coreIssues: [
      'Contrast between A.K. Gopalan (formalistic literalism) and Maneka Gandhi (integrated fundamental rights reading).',
      'Whether Indian courts apply Substantive Due Process or a distinct Indian model of Procedural Due Process.',
      'Interlinking of Articles 14, 19, and 21 (The Golden Triangle).'
    ],
    examinerExpectation:
      'Candidates must trace the shift from Gopalan (1950) to Maneka Gandhi (1978). Mention Justice Krishna Iyer and Justice Bhagwati\'s formulations. Clarify that while the constituent assembly intentionally rejected American substantive due process, Maneka imported its substantive guarantees through Article 14 fairness.',
    essentialCitations: [
      'A.K. Gopalan v. State of Madras (1950 SCR 88)',
      'Maneka Gandhi v. Union of India ((1978) 1 SCC 248)',
      'Sunil Batra v. Delhi Administration ((1978) 4 SCC 494)',
      'K.S. Puttaswamy v. Union of India ((2017) 10 SCC 1)'
    ],
    hoverIntel: {
      topicName: 'Article 21 & The Substantive Due Process Shift',
      topicPillar: 'Part III: Fundamental Rights • Right to Life (Articles 14, 19 & 21)',
      examImportance: '⭐⭐⭐⭐⭐ Guaranteed Super-Core Rank #1',
      examFrequency: 'Repeated 12+ times across DJS, UP PCS-J, Bihar, UPSC Law',
      weightagePattern: '20 Marks • 450–550 Words (2.0–2.2 Pages)',
      targetTimeMinutes: 16,
      examinerTrapWarning:
        'Trap Alert: Do not omit the Constituent Assembly history! Mentioning B.N. Rau\'s consultation with US Justice Felix Frankfurter (which removed "due process" originally) is mandatory for top quartile marks.',
      recentTrendAlert: 'Puttaswamy (2017) and M.K. Ranjitsinh (2024, Right against climate change) cemented Substantive Due Process.',
      coreArticles: ['Article 21', 'Article 14', 'Article 19'],
      benchmarkCases: ['A.K. Gopalan (1950)', 'Maneka Gandhi (1978)', 'Puttaswamy (2017)']
    },
    answerBlueprint: {
      step1Intro: 'Define Article 21 text and Constituent Assembly debates (Rau-Frankfurter interaction removing "Due Process").',
      step2DoctrinalCore: 'Explain Gopalan\'s silo doctrine where Article 19 and 21 were treated as mutually exclusive compartments.',
      step3PrecedentEvolution: 'Detail Maneka Gandhi\'s synthesis: procedure must not be arbitrary, fanciful or oppressive; it must satisfy the test of Article 14 reasonableness.',
      step4Conclusion: 'Conclude with Puttaswamy (2017) confirming that privacy and human dignity require substantive judicial review of statutory laws.'
    },
    fullModelAnswer: `I. TEXTUAL GENESIS & THE CONSTITUENT ASSEMBLY COMPROMISE:
Article 21 provides that "No person shall be deprived of his life or personal liberty except according to procedure established by law." Originally, the Drafting Committee borrowed the American 5th and 14th Amendment phrase "due process of law." However, following B.N. Rau's consultation with US Supreme Court Justice Felix Frankfurter, who warned against judicial overreach observed during the Lochner era, the Constituent Assembly consciously substituted "due process" with the British-derived phrase "procedure established by law."

II. THE FORMALIST EPOCH: A.K. GOPALAN (1950):
In A.K. Gopalan v. State of Madras (1950), the Supreme Court adopted a strict textual positivism. Chief Justice Kania held that "law" meant state-made enacted law, and "procedure established by law" meant whatever procedure the legislature prescribed, however harsh or deficient in natural justice. The Court ruled that Articles 19 and 21 operated in mutually exclusive water-tight compartments; preventive detention under Article 21 could not be tested against the freedoms in Article 19.

III. THE TRANSFORMATIONAL WATERSHED: MANEKA GANDHI (1978):
In Maneka Gandhi v. Union of India (1978), a 7-Judge Bench dismantled Gopalan's silo theory. Justice P.N. Bhagwati formulated the doctrine of the "Golden Triangle," ruling that Articles 14, 19, and 21 form an organic trinity. Consequently:
1. The procedure depriving personal liberty cannot be arbitrary, fanciful, or oppressive; it must be "just, fair, and reasonable."
2. The principle of natural justice (Audi Alteram Partem) is an intrinsic, unwritten component of Article 21 via Article 14.
As Justice Krishna Iyer memorably observed in Sunil Batra (1978), "procedure" does not mean any enacted decree; it means "civilized procedure" imbued with constitutional fairness.

IV. MODERN FRONTIER: SUBSTANTIVE DUE PROCESS CONFIRMED:
While Indian jurisprudence originally claimed to adopt only "procedural fairness," the Supreme Court has unequivocally embraced substantive due process:
1. Substantive Rights: In Mithu v. State of Punjab (1983), the Court struck down Section 303 IPC (mandatory death penalty) not on procedure, but because the substantive punishment was unjust and barbaric.
2. In K.S. Puttaswamy (2017, 9-Judge Bench), Justice Chandrachud settled the controversy, affirming that post-Maneka, the Indian Constitution incorporates Substantive Due Process: any law affecting life or liberty must withstand the tests of legality, legitimate state aim, and proportionality.

CONCLUSION:
Through creative judicial interpretation, Article 21 has evolved from a fragile shield against executive illegality into a powerful judicial sword against unfair legislative enactments.`,
    scoringRubric: [
      { criterion: 'Constituent Assembly debates & Rau-Frankfurter history', marks: 4 },
      { criterion: 'A.K. Gopalan silo theory & literal positivism', marks: 4 },
      { criterion: 'Maneka Gandhi synthesis & Golden Triangle test', marks: 6 },
      { criterion: 'Mithu & Puttaswamy substantive due process crystallization', marks: 6 }
    ]
  },

  {
    id: 'mains-20m-manifest-arbitrariness',
    title: 'Article 14: Manifest Arbitrariness as a Ground to Strike Down Primary Legislation',
    topicId: 'art-14-arbitrariness-equality',
    marksCategory: 20,
    examCategory: 'ALL',
    examsAppeared: ['DJS 2019, 2022', 'UP PCS-J 2018, 2023', 'UPSC Law Optional 2019, 2022', 'CLAT PG 2021, 2023'],
    typicalMarks: 20,
    targetWordLimit: '450–500 Words | Time: ~15 Mins',
    targetWordMin: 420,
    targetWordMax: 520,
    estimatedPages: '2.0 Pages (~42 lines)',
    targetTimeMinutes: 15,
    questionText: `Can plenary legislation enacted by Parliament or a State Legislature be invalidated on the sole ground of "Manifest Arbitrariness" under Article 14? Trace the journey from McDowell & Co. to Shayara Bano and Navtej Singh Johar.`,
    coreIssues: [
      'The traditional test of reasonable classification vs E.P. Royappa\'s anti-arbitrariness doctrine.',
      'The restriction imposed in State of A.P. v. McDowell & Co. (1996) that plenary legislation cannot be struck down on arbitrariness alone.',
      'The revival and crystallization of Manifest Arbitrariness by Justice Nariman in Shayara Bano (2017).'
    ],
    examinerExpectation:
      'Must explain the difference between ordinary subordinate legislation review and primary statute review. Define what constitutes "Manifest Arbitrariness" (something done capriciously, irrationally, without determining principle, or excessive/disproportionate).',
    essentialCitations: [
      'State of W.B. v. Anwar Ali Sarkar (1952 SCR 284)',
      'E.P. Royappa v. State of Tamil Nadu ((1974) 4 SCC 3)',
      'State of A.P. v. McDowell & Co. ((1996) 3 SCC 709)',
      'Shayara Bano v. Union of India ((2017) 9 SCC 1)',
      'Navtej Singh Johar v. Union of India ((2018) 10 SCC 1)'
    ],
    hoverIntel: {
      topicName: 'Article 14 & Manifest Arbitrariness Doctrine',
      topicPillar: 'Part III: Fundamental Rights • Equality Code (Article 14)',
      examImportance: '⭐⭐⭐⭐⭐ Guaranteed Super-Core Rank #2',
      examFrequency: 'Appeared in DJS 2022, UP PCS-J 2023, UPSC Law 2022',
      weightagePattern: '20 Marks • 450–500 Words (2.0 Pages)',
      targetTimeMinutes: 15,
      examinerTrapWarning:
        'Trap Alert: Candidates confuse subordinate legislation with plenary statutes. McDowell held arbitrariness applies only to subordinate rules; Shayara Bano expressly declared McDowell per incuriam and extended it to Acts of Parliament!',
      recentTrendAlert: 'Applied in Electoral Bonds Case (2024) to strike down Section 182 Companies Act amendments.',
      coreArticles: ['Article 14', 'Article 13'],
      benchmarkCases: ['Royappa (1974)', 'McDowell (1996)', 'Shayara Bano (2017)', 'Electoral Bonds (2024)']
    },
    answerBlueprint: {
      step1Intro: 'Introduce Article 14 equality and the dual doctrines: Reasonable Classification and Non-Arbitrariness.',
      step2DoctrinalCore: 'Analyze the conflict: McDowell held statutes can only be invalidated for lack of legislative competence or violation of FRs, not arbitrariness.',
      step3PrecedentEvolution: 'Showcase Shayara Bano where Justice Nariman reviewed McDowell, declaring it per incuriam, and held manifest arbitrariness is facet of Article 14.',
      step4Conclusion: 'Reaffirm application in Navtej Johar (striking Section 377 IPC) and Joseph Shine (striking Section 497 IPC).'
    },
    fullModelAnswer: `I. THE DUAL FOUNDATIONS OF ARTICLE 14:
Article 14 incorporates two distinct doctrines:
1. The Traditional Doctrine (Classification Test): Originating in Anwar Ali Sarkar (1952), a statute is valid if based on (a) Intelligible Differentia, and (b) a Rational Nexus to the statutory objective.
2. The Dynamic Doctrine (Anti-Arbitrariness): Propounded by Justice Bhagwati in E.P. Royappa (1974), equality is an activist dynamic concept antithetical to arbitrariness: "Where an act is arbitrary, it is implicit that it is unequal both according to political logic and constitutional law."

II. THE JUDICIAL RETRENCHMENT: McDOWELL & CO. (1996):
For decades, courts readily struck down executive and subordinate actions for arbitrariness, but hesitated to apply it to primary plenary legislation. In State of A.P. v. McDowell & Co. (1996), a 3-Judge Bench led by Justice B.P. Jeevan Reddy held that an Act of Parliament or State Legislature can only be struck down on two grounds:
1. Lack of legislative competence under the Seventh Schedule; or
2. Violation of any fundamental right in Part III.
The Court categorically asserted: "No enactment can be struck down by just saying that it is arbitrary or unreasonable."

III. THE WATERSHED SHIFT: SHAYARA BANO (2017):
In Shayara Bano v. Union of India (2017), the Supreme Court invalidated the practice of Talaq-e-Biddat. Justice R.F. Nariman, writing for the majority on Article 14, reviewed decades of precedent and declared the McDowell proposition to be per incuriam and incorrect in law.
Justice Nariman defined "Manifest Arbitrariness" as:
- Something done by the legislature capriciously, irrationally, or without determining principle; or
- Something done which is excessive and disproportionate.
If a statute exhibits manifest arbitrariness, it directly infringes Article 14 and must be struck down as ultra vires.

IV. CONSOLIDATION IN SUBSEQUENT CONSTITUTION BENCH VERDICTS:
The doctrine has become an established constitutional ground:
1. Navtej Singh Johar v. Union of India (2018): Section 377 IPC was partially struck down because criminalizing consensual adult intimacy was manifestly arbitrary and lacked determining principle.
2. Joseph Shine v. Union of India (2018): Section 497 IPC (adultery) was invalidated for manifest arbitrariness due to its paternalistic and discriminatory assumptions.
3. Electoral Bonds Case (2024): The 5-Judge Bench confirmed that statutes exempting political funding disclosures failed the test of proportionality and manifest arbitrariness.

CONCLUSION:
"Manifest Arbitrariness" now stands firmly recognized as an independent, substantive ground of constitutional invalidation for primary legislation, completing the journey from Royappa's vision to binding law.`,
    scoringRubric: [
      { criterion: 'Classification test vs Royappa anti-arbitrariness doctrine', marks: 5 },
      { criterion: 'McDowell restriction on striking primary legislation', marks: 4 },
      { criterion: 'Shayara Bano definition of Manifest Arbitrariness', marks: 6 },
      { criterion: 'Subsequent application (Navtej Johar, Joseph Shine, Electoral Bonds)', marks: 5 }
    ]
  },

  {
    id: 'mains-20m-collegium-system',
    title: 'The Collegium System vs NJAC: Judicial Independence as Basic Structure',
    topicId: 'higher-judiciary-collegium-142',
    marksCategory: 20,
    examCategory: 'UPSC_LAW',
    examsAppeared: ['UPSC Law Optional 2016, 2021', 'UP PCS-J 2016, 2023', 'DJS 2019, 2022'],
    typicalMarks: 20,
    targetWordLimit: '450–500 Words | Time: ~15 Mins',
    targetWordMin: 420,
    targetWordMax: 520,
    estimatedPages: '2.0 Pages (~42 lines)',
    targetTimeMinutes: 15,
    questionText: `Critically trace the evolution of the Judges Appointment jurisprudence from the First Judges Case to the Fourth Judges Case (NJAC ruling). Did the invalidation of the 99th Constitutional Amendment create a judicial primacy that compromises democratic accountability?`,
    coreIssues: [
      'Interpretation of "Consultation" under Article 124(2) and Article 217(1).',
      'Evolution through First (S.P. Gupta), Second (Advocates-on-Record 1993), and Third (1998 Advisory) Judges Cases.',
      'The 99th Amendment & NJAC Act struck down in the Fourth Judges Case (2015).',
      'Judicial Independence as an inviolable feature of the Basic Structure.'
    ],
    examinerExpectation:
      'Candidates must trace all 4 Judges cases, explain the shift from executive supremacy to judicial primacy, analyze Justice Khehar\'s majority reasoning in NJAC, and provide a balanced constitutional critique regarding transparency and the Memorandum of Procedure (MoP).',
    essentialCitations: [
      'S.P. Gupta v. Union of India (First Judges Case) (1981 Supp SCC 87)',
      'Supreme Court Advocates-on-Record Assn. v. Union of India (Second Judges Case) ((1993) 4 SCC 441)',
      'Special Reference No. 1 of 1998 (Third Judges Case) ((1998) 7 SCC 739)',
      'Supreme Court Advocates-on-Record Assn. v. Union of India (NJAC Case) ((2016) 5 SCC 1)'
    ],
    hoverIntel: {
      topicName: 'Judicial Appointments & The NJAC Verdict',
      topicPillar: 'Part V: The Union Judiciary (Articles 124 & 217)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Institutional Benchmark)',
      examFrequency: 'Major question in UPSC Law, UP PCS-J, and DJS Mains',
      weightagePattern: '20 Marks • 450–500 Words (2.0 Pages)',
      targetTimeMinutes: 15,
      examinerTrapWarning:
        'Trap Alert: Acknowledge Justice Chelameswar\'s lone dissent in the NJAC ruling criticizing lack of transparency in the Collegium, followed by the Court\'s own order to reform the Memorandum of Procedure (MoP).',
      recentTrendAlert: 'Continues to be at the center of executive-judiciary debates in Parliament and Court.',
      coreArticles: ['Article 124(2)', 'Article 217(1)', 'Article 368'],
      benchmarkCases: ['S.P. Gupta (1981)', 'SCAORA (1993)', 'Third Judges (1998)', 'NJAC Case (2015)']
    },
    answerBlueprint: {
      step1Intro: 'Quote Article 124(2) text: President appoints Supreme Court judges "after consultation with such Judges of the Supreme Court and High Courts as the President may deem necessary."',
      step2DoctrinalCore: 'Trace the first three cases: (1) S.P. Gupta (executive primacy), (2) Second Judges (consultation means concurrence), (3) Third Judges (collegium expanded to CJI + 4 senior-most judges).',
      step3PrecedentEvolution: 'Analyze Fourth Judges Case (2015): 99th Amendment struck down because Law Minister and civil society presence on NJAC destroyed judicial independence.',
      step4Conclusion: 'Conclude on democratic accountability vs judicial independence and the ongoing need for an objective, transparent MoP.'
    },
    fullModelAnswer: `I. TEXTUAL FOUNDATION & THE INTERPRETIVE CONFLICT:
Article 124(2) provides that judges of the Supreme Court shall be appointed by the President after "consultation" with such judges as deemed necessary. For four decades, Indian constitutional history grappled with whether "consultation" implies executive primacy or judicial concurrence.

II. THE EVOLUTION THROUGH THREE JUDGES CASES:
1. First Judges Case (S.P. Gupta v. UOI, 1981): A 7-Judge Bench held that "consultation" does not mean "concurrence." The Central Government possessed final decision-making power, establishing executive supremacy in appointments.
2. Second Judges Case (SCAORA v. UOI, 1993, 9-Judge Bench): In a 7:2 ruling, the Court reversed S.P. Gupta. It held that to protect the independence of the judiciary—a basic feature of the Constitution—"consultation" must mean "concurrence." The Chief Justice of India (CJI) represents the collective opinion of the judiciary, creating the "Collegium System" (CJI + 2 senior-most judges).
3. Third Judges Case (Special Reference No. 1 of 1998, 9-Judge Bench): On presidential reference under Article 143, the Court expanded the Supreme Court collegium to the CJI and the four senior-most puisne judges, establishing strict norms of plural consultation.

III. THE FOURTH JUDGES CASE (NJAC RULING, 2015):
To remedy the opaque, self-selecting collegium, Parliament enacted the 99th Constitutional Amendment (2014) creating the National Judicial Appointments Commission (NJAC), comprising the CJI, two senior judges, the Law Minister, and two eminent persons.
In SCAORA v. Union of India (2016) 5 SCC 1, a 4:1 majority struck down the 99th Amendment and NJAC Act:
1. Independence as Basic Feature: Judicial independence requires that judicial appointments remain free from executive interference or veto.
2. Veto Power Threat: The presence of the Union Law Minister and two eminent persons (who could jointly veto any candidate) infringed judicial primacy.
3. Separation of Powers: Entrusting appointments to an executive-influenced commission violated the separation of powers under Article 50.

IV. DEMOCRATIC ACCOUNTABILITY CRITIQUE:
Justice Chelameswar, in his lone dissent, highlighted that the Collegium functions with opacity, nepotism, and zero public scrutiny. Even the majority acknowledged institutional shortcomings, directing the framing of a new Memorandum of Procedure (MoP) incorporating eligibility criteria and transparency.

CONCLUSION:
The Fourth Judges Case entrenched judicial primacy as an indispensable component of the Basic Structure. However, true constitutional legitimacy requires expediting a transparent, merit-based MoP that preserves independence while ensuring institutional accountability.`,
    scoringRubric: [
      { criterion: 'Text of Art. 124(2) & First Judges Case (S.P. Gupta) executive primacy', marks: 4 },
      { criterion: 'Second & Third Judges cases (Collegium creation & expansion)', marks: 5 },
      { criterion: 'NJAC 99th Amendment & Fourth Judges Case majority ratio (Basic Structure)', marks: 6 },
      { criterion: 'Chelameswar dissent & Memorandum of Procedure (MoP) critique', marks: 5 }
    ]
  },

  {
    id: 'mains-25m-art20-3-forensics',
    title: 'Article 20(3): Compulsory Forensic Inquiries & Self-Incrimination Privilege',
    topicId: 'art-20-22-custodial-forensics',
    marksCategory: 25,
    examCategory: 'PROSECUTION',
    examsAppeared: ['State Prosecution Exams (UP APO, Bihar APO, JKPSC PO)', 'DJS Criminal Law 2015, 2019', 'RJS 2016, 2021', 'CBI APP 2022'],
    typicalMarks: 25,
    targetWordLimit: '500–550 Words | Time: ~18 Mins',
    targetWordMin: 480,
    targetWordMax: 560,
    estimatedPages: '2.5 Pages (~50 lines)',
    targetTimeMinutes: 18,
    questionText: `A Magistrate orders an accused in a sensational murder investigation to undergo compulsory narco-analysis, polygraph test, and to provide brain electrical fingerprints and voice samples. The accused challenges the order under Article 20(3) and Article 21. Decide the constitutional validity of each direction.`,
    coreIssues: [
      'Scope of the phrase "compelled to be a witness against himself" in Article 20(3).',
      'The physical evidence vs testimonial communication boundary established in Kathi Kalu Oghad.',
      'Involuntary administration of neuro-scientific investigative techniques violating mental privacy under Selvi.',
      'Judicial authorization of voice samples under Ritesh Sinha.'
    ],
    examinerExpectation:
      'Examiner expects clear bifurcation: (1) Narco, Polygraph, BEAP are unconstitutional if involuntary (Selvi); (2) Voice samples, fingerprints, handwriting are constitutional because they are non-testimonial identification data (Kathi Kalu Oghad & Ritesh Sinha).',
    essentialCitations: [
      'M.P. Sharma v. Satish Chandra (1954 SCR 1077)',
      'State of Bombay v. Kathi Kalu Oghad (1962 (3) SCR 10)',
      'Selvi v. State of Karnataka ((2010) 7 SCC 263)',
      'Ritesh Sinha v. State of U.P. ((2019) 8 SCC 1)'
    ],
    hoverIntel: {
      topicName: 'Article 20(3) & Forensic Neuro-Testing',
      topicPillar: 'Part III: Fundamental Rights • Criminal Safeguards (Articles 20 & 21)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Prosecution Core)',
      examFrequency: 'Appeared in CBI PP, State APO and DJS Criminal Law',
      weightagePattern: '25 Marks • 500–550 Words (2.5 Pages)',
      targetTimeMinutes: 18,
      examinerTrapWarning:
        'Trap Alert: Candidates fail to explain that even if narco-analysis is taken voluntarily, statements CANNOT be admitted as confessions under Sec 25/26 Evidence Act / BSA!',
      recentTrendAlert: 'Ritesh Sinha (2019) & Section 349 BNSS authorising magistrate to order voice samples.',
      coreArticles: ['Article 20(3)', 'Article 21', 'Section 53 CrPC', 'Section 349 BNSS'],
      benchmarkCases: ['Kathi Kalu Oghad (1961)', 'Selvi (2010)', 'Ritesh Sinha (2019)']
    },
    answerBlueprint: {
      step1Intro: 'Define Article 20(3) tripartite criteria: Accused person, Compulsion, and Testimonial character.',
      step2DoctrinalCore: 'Apply Kathi Kalu Oghad physical vs testimonial dichotomy: self-incrimination applies to statements conveying personal knowledge.',
      step3PrecedentEvolution: 'Apply Selvi: involuntary narco/polygraph intrudes into mental privacy under Art 21 and amounts to compelled testimony under Art 20(3).',
      step4Conclusion: 'Validate voice sample under Ritesh Sinha (2019) as legitimate identification data under Section 53 CrPC / Section 349 BNSS.'
    },
    fullModelAnswer: `I. CONSTITUTIONAL THRESHOLD OF ARTICLE 20(3):
Article 20(3) guarantees: "No person accused of any offence shall be compelled to be a witness against himself." To invoke this protection, three essential components must co-exist:
1. The person must be an accused at the time of compulsion;
2. There must be compulsion (coercion, duress, or involuntary judicial mandate);
3. The compulsion must relate to imparting "testimonial evidence" against oneself.

II. THE DOCTRINAL BOUNDARY: PHYSICAL VS TESTIMONIAL EVIDENCE:
In the landmark 11-Judge Bench decision in State of Bombay v. Kathi Kalu Oghad (1961), the Supreme Court established the cardinal distinction:
- "To be a witness" means imparting knowledge involving the personal cognitive awareness of the accused (Testimonial Evidence).
- In contrast, producing physical objects, giving fingerprints, bodily measurements, handwriting exemplars, or showing the body are non-testimonial identification evidence outside the protection of Article 20(3).

III. INVOLUNTARY NEURO-SCIENTIFIC INVESTIGATIVE TECHNIQUES (SELVI RATIO):
In Selvi v. State of Karnataka (2010) 7 SCC 263, a 3-Judge Bench examined the constitutional validity of involuntary Narco-analysis, Polygraph (Lie-Detector), and Brain Electrical Activation Profile (BEAP):
1. Involuntary Administration Violates Article 20(3): The Court held that narco-analysis chemically induces a hypnotic trance extracting statements without conscious volition. Similarly, polygraph and brain-mapping measure cognitive electrical responses conveying personal knowledge. Forcing an accused to undergo these tests constitutes compelled testimonial self-incrimination.
2. Involuntary Tests Violate Article 21 (Mental Privacy & Bodily Integrity): The Court held that Article 21 encompasses "mental privacy" and autonomy over one's thought process. Compulsory intrusion into the mind constitutes cruel, inhuman, and degrading treatment.
3. Voluntary Exception: If an accused voluntarily consents after receiving independent legal advice and recording before a Magistrate (NHRC Guidelines 2000), tests may be administered. However, the resulting statements cannot be admitted as substantive confessions; only subsequent physical discoveries under Section 27 Evidence Act (Section 23 BSA) are admissible.

IV. JUDICIAL DIRECTION FOR VOICE EXEMPLARS (RITESH SINHA RATIO):
In Ritesh Sinha v. State of U.P. (2019) 8 SCC 1, a 3-Judge Bench held that directing an accused to give voice samples does not violate Article 20(3). A voice sample is used purely for forensic acoustic comparison (identification data), not for extracting the substantive truth of what is said. Under Article 142 (and now Section 349 BNSS, 2023), Magistrates possess statutory and inherent authority to order voice exemplars.

JUDICIAL DECISION ON MAGISTRATE'S ORDER:
1. Compulsory Narco-analysis, Polygraph, and BEAP: UNCONSTITUTIONAL AND VOID under Articles 20(3) and 21 (Selvi).
2. Direction for Voice Samples: CONSTITUTIONALLY VALID AND ENFORCEABLE (Ritesh Sinha).`,
    scoringRubric: [
      { criterion: 'Article 20(3) tripartite criteria & Kathi Kalu Oghad physical vs testimonial dichotomy', marks: 7 },
      { criterion: 'Selvi v. State of Karnataka analysis (Narco, Polygraph, BEAP & Mental Privacy)', marks: 8 },
      { criterion: 'Ritesh Sinha voice sample distinction & BNSS alignment', marks: 5 },
      { criterion: 'Definitive judicial conclusion on each direction ordered by Magistrate', marks: 5 }
    ]
  },

  {
    id: 'mains-20m-certiorari-prohibition',
    title: 'Writ of Certiorari vs Prohibition & Maintainability against Private Bodies',
    topicId: 'writs-judicial-review-142',
    marksCategory: 20,
    examCategory: 'BJS',
    examsAppeared: ['Bihar Judicial 2014, 2018, 2021', 'UP PCS-J 2015, 2018', 'DJS 2017', 'UPSC Law Optional 2016, 2021'],
    typicalMarks: 20,
    targetWordLimit: '450–500 Words | Time: ~15 Mins',
    targetWordMin: 420,
    targetWordMax: 520,
    estimatedPages: '2.0 Pages (~42 lines)',
    targetTimeMinutes: 15,
    questionText: `Distinguish between a Writ of Prohibition and a Writ of Certiorari. Under what circumstances can a High Court issue a Writ under Article 226 against a private entity or unaided educational institution?`,
    coreIssues: [
      'Stage of intervention: Prohibition is preventive (during pending proceedings), Certiorari is corrective (quashing completed orders).',
      'Grounds for Certiorari: Lack of jurisdiction, excess of jurisdiction, violation of Natural Justice, and Error of Law apparent on the face of the record.',
      'Definition of "person or authority" in Article 226 being wider than "State" under Article 12.'
    ],
    examinerExpectation:
      'Candidates must cite Syed Yakoob for Certiorari grounds. For private bodies, explain that the test is not who the entity is, but the nature of the duty performed (Public Duty doctrine in Andi Muktha Sadguru and Janet Jeyapaul).',
    essentialCitations: [
      'Hari Vishnu Kamath v. Syed Ahmad Ishaque (1955 1 SCR 1104)',
      'Syed Yakoob v. K.S. Radhakrishnan (AIR 1964 SC 477)',
      'Andi Muktha Sadguru v. V.R. Rudani ((1989) 2 SCC 691)',
      'Janet Jeyapaul v. SRM University ((2015) 16 SCC 530)',
      'Zee Telefilms Ltd. v. Union of India ((2005) 4 SCC 649)'
    ],
    hoverIntel: {
      topicName: 'Certiorari vs Prohibition & Private Entities',
      topicPillar: 'Part III & Part VI: Writs & Judicial Review (Articles 32 & 226)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Judiciary Core)',
      examFrequency: 'Appeared in Bihar Judicial 3 times, UP PCS-J, and DJS',
      weightagePattern: '20 Marks • 450–500 Words (2.0 Pages)',
      targetTimeMinutes: 15,
      examinerTrapWarning:
        'Trap Alert: Do not state that Article 226 can enforce any private contract! St. Mary\'s Education Society (2022) affirmed that purely private employment contracts without statutory status cannot be agitated under Art 226.',
      recentTrendAlert: 'Public duty doctrine continuously applied to private deemed universities.',
      coreArticles: ['Article 32', 'Article 226'],
      benchmarkCases: ['Hari Vishnu Kamath (1955)', 'Syed Yakoob (1964)', 'Andi Muktha (1989)']
    },
    answerBlueprint: {
      step1Intro: 'Define prerogative writs derived from English common law and incorporated into Articles 32 and 226.',
      step2DoctrinalCore: 'Tabulate the differences between Prohibition (early arrest of jurisdiction) and Certiorari (quashing record).',
      step3PrecedentEvolution: 'Analyze the Public Duty test: Article 226 extends to "any person or authority" discharging positive public obligations.',
      step4Conclusion: 'Conclude that purely private commercial contracts cannot be enforced via Article 226 unless imbued with public law character.'
    },
    fullModelAnswer: `I. COMPARATIVE DISTINCTION: WRIT OF PROHIBITION VS CERTIORARI:
Both writs are judicial remedies of English common law origin issued by superior courts to subordinate courts, tribunals, and quasi-judicial bodies. As established in Hari Vishnu Kamath (1955), they differ primarily in the stage of intervention:

1. Stage of Issuance:
   - Prohibition is a PREVENTIVE remedy. It is issued during the pendency of proceedings to stop a tribunal from continuing with unauthorized proceedings.
   - Certiorari is a CORRECTIVE remedy. It is issued after the tribunal has concluded proceedings and delivered a final decision, calling up the record to quash it.
2. Objective:
   - Prohibition arrests jurisdiction before judgment.
   - Certiorari quashes an ultra vires order and obliterates its legal effect.
3. Common Grounds of Issuance (Syed Yakoob v. K.S. Radhakrishnan, 1964):
   - Absence or excess of jurisdiction;
   - Violation of principles of natural justice (Audi Alteram Partem or Nemo Judex);
   - Fraud or patent error of law apparent on the face of the record (not mere erroneous appreciation of facts).

II. WRIT MAINTAINABILITY AGAINST PRIVATE BODIES UNDER ARTICLE 226:
Unlike Article 32, which is confined to the enforcement of Fundamental Rights against the "State" under Article 12, Article 226 empowers High Courts to issue writs to:
"any person or authority, including in appropriate cases, any Government... for the enforcement of any of the rights conferred by Part III and for any other purpose."

1. The "Public Duty" Functional Test:
In Andi Muktha Sadguru v. V.R. Rudani (1989) 2 SCC 691, the Supreme Court ruled that the form of the body is irrelevant; what matters is the nature of the duty imposed. If a private entity performs a public function or owes a statutory/public obligation to the public at large, a writ of Mandamus or Certiorari lies against it.
2. Application to Unaided Educational Institutions:
- Imparting Education is a Public Function: In Janet Jeyapaul v. SRM University (2015), the Supreme Court held that a deemed private university imparting education discharges a public function. Hence, a writ petition challenging the wrongful termination of a professor was maintainable.
- Limitations on Maintainability: In Zee Telefilms v. UOI (2005) and St. Mary's Education Society (2022), the Court clarified that purely private employment contracts devoid of statutory backing or private commercial disputes cannot be agitated under Article 226. The action challenged must have direct nexus with the public duty.

CONCLUSION:
While Prohibition prevents judicial excess and Certiorari cures it, Article 226 transcends rigid institutional tests, holding any private entity accountable whenever it breaches a positive public law duty.`,
    scoringRubric: [
      { criterion: 'Tabular distinction: Prohibition vs Certiorari (stages & objectives)', marks: 6 },
      { criterion: 'Grounds of Certiorari (Syed Yakoob criteria)', marks: 4 },
      { criterion: 'Public Duty test under Article 226 (Andi Muktha & Janet Jeyapaul)', marks: 6 },
      { criterion: 'Exceptions for purely private/commercial contracts (Zee Telefilms)', marks: 4 }
    ]
  },

  {
    id: 'mains-20m-basic-structure-coelho',
    title: 'The Basic Structure Doctrine & The 9th Schedule Shield (I.R. Coelho Twin Tests)',
    topicId: 'basic-structure-amending-power',
    marksCategory: 20,
    examCategory: 'UPSC_LAW',
    examsAppeared: ['UPSC Law Optional 2014, 2018, 2022', 'UP PCS-J 2016, 2023', 'Bihar Judicial 2018', 'Haryana Judicial 2019'],
    typicalMarks: 20,
    targetWordLimit: '450–500 Words | Time: ~16 Mins',
    targetWordMin: 420,
    targetWordMax: 520,
    estimatedPages: '2.0 Pages (~42 lines)',
    targetTimeMinutes: 16,
    questionText: `Discuss the evolution of the Basic Structure Doctrine. Can a statute included in the Ninth Schedule of the Constitution be subjected to Judicial Review after April 24, 1973? Explain the "Rights Test" and "Essence of the Rights Test" laid down in I.R. Coelho.`,
    coreIssues: [
      'The constituent power compromise in Kesavananda Bharati (1973).',
      'The blanket immunity originally envisaged under Article 31B and the 1st Amendment (1951).',
      'The 9-Judge Constitution Bench ruling in I.R. Coelho v. State of Tamil Nadu (2007).'
    ],
    examinerExpectation:
      'Must state the April 24, 1973 cut-off date. Explain that post-1973 laws do not get blanket immunity. Clearly distinguish between the Rights Test (direct violation of Part III) and Essence of Rights Test (whether that violation damages the constitutional basic structure).',
    essentialCitations: [
      'Kesavananda Bharati v. State of Kerala ((1973) 4 SCC 225)',
      'Minerva Mills Ltd. v. Union of India ((1980) 3 SCC 625)',
      'Waman Rao v. Union of India ((1981) 2 SCC 362)',
      'I.R. Coelho v. State of Tamil Nadu ((2007) 2 SCC 1)'
    ],
    hoverIntel: {
      topicName: 'Basic Structure & 9th Schedule (I.R. Coelho)',
      topicPillar: 'Part XX: Amendment of Constitution (Article 368 & 31B)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Constitutional Masterpiece)',
      examFrequency: 'Tested in almost every alternate UPSC Law and State Judicial exam',
      weightagePattern: '20 Marks • 450–500 Words (2.0 Pages)',
      targetTimeMinutes: 16,
      examinerTrapWarning:
        'Trap Alert: Candidates forget to state the exact cut-off date: 24th April 1973 (the date Kesavananda was delivered). Pre-1973 additions are protected; post-1973 additions must pass Coelho twin tests!',
      recentTrendAlert: 'Frequently cited whenever States seek to place 50%+ reservation laws in the Ninth Schedule.',
      coreArticles: ['Article 368', 'Article 31B', 'Article 13'],
      benchmarkCases: ['Kesavananda (1973)', 'Waman Rao (1981)', 'I.R. Coelho (2007)']
    },
    answerBlueprint: {
      step1Intro: 'State the premise of Kesavananda: Parliament can amend any part of the Constitution without altering its basic identity.',
      step2DoctrinalCore: 'Explain Article 31B\'s original agrarian purpose and subsequent executive misuse as a constitutional dustbin.',
      step3PrecedentEvolution: 'Detail the 9-Judge bench verdict in I.R. Coelho: Pre-1973 9th schedule entries immune; post-1973 entries open to review.',
      step4Conclusion: 'Elaborate the Rights Test vs Essence of Rights Test and how Articles 14, 19, and 21 form the golden core of basic structure.'
    },
    fullModelAnswer: `I. GENESIS & JUDICIAL EVOLUTION OF THE BASIC STRUCTURE DOCTRINE:
The conflict over Parliament's amending power under Article 368 progressed through four historical stages:
1. Shankari Prasad (1951) & Sajjan Singh (1965): The Court held that constituent amending power under Article 368 was plenary and not subject to the Article 13(2) prohibition against abridging Fundamental Rights.
2. I.C. Golaknath (1967, 11-Judge Bench): In a 6:5 verdict, the Court reversed course, holding that Fundamental Rights held a transcendental position immune from constitutional amendment.
3. Kesavananda Bharati v. State of Kerala (1973, 13-Judge Bench): By a 7:6 majority, the Supreme Court struck a historic synthesis:
   - Parliament has the power to amend any provision of the Constitution, including Part III.
   - However, this power is subject to an inherent implied limitation: Parliament cannot alter, damage, or destroy the "Basic Structure" or essential identity of the Constitution.

II. THE NINTH SCHEDULE DILEMMA & ARTICLE 31B:
Article 31B, inserted by the 1st Constitutional Amendment (1951), created the Ninth Schedule to immunize agrarian land reform statutes from challenge under Articles 14, 19, and 31.
However, executive and legislative practice gradually abused this shield by placing statutes having no connection to land reforms (such as reservation statutes, election laws, and commercial monopolies) into the Ninth Schedule to escape judicial review. In Waman Rao (1981), the Court held that laws inserted after Kesavananda Bharati were open to challenge, but operational clarity remained elusive.

III. THE 9-JUDGE BENCH WATERSHED: I.R. COELHO (2007):
In I.R. Coelho v. State of Tamil Nadu (2007) 2 SCC 1, a unanimous 9-Judge Constitution Bench settled the constitutional position:
1. The Cut-Off Date of 24th April 1973: All laws inserted into the Ninth Schedule prior to 24th April 1973 remain fully immune from challenge.
2. Post-1973 Laws Subject to Judicial Review: Any amendment inserting a statute into the Ninth Schedule on or after 24th April 1973 does not enjoy blanket immunity. It can be challenged for violating the Basic Structure.
3. The Twin Tests Formulated by Coelho:
   - The Rights Test: Does the impugned statute violate any Fundamental Right in Part III (specifically Articles 14, 19, and 21)?
   - The Essence of the Rights Test: If Part III is violated, the Court inquires further: Does this infringement touch upon or destroy the "essential character" or basic structure of the Constitution?
The Court affirmed that Articles 14, 19, and 21 constitute the golden core of constitutional identity. If a Ninth Schedule law destroys the essence of these rights, it will be invalidated.

CONCLUSION:
I.R. Coelho established that Article 31B cannot be converted into a constitutional black hole. Judicial Review is an untouchable basic feature, and Parliament cannot achieve by ordinary statute placed in the 9th Schedule what it is forbidden from doing through constitutional amendment.`,
    scoringRubric: [
      { criterion: 'Evolution of Basic Structure (Shankari Prasad to Kesavananda)', marks: 7 },
      { criterion: 'Article 31B original intent & subsequent legislative abuse', marks: 5 },
      { criterion: 'I.R. Coelho 24 April 1973 cut-off date principle', marks: 5 },
      { criterion: 'Detailed breakdown: Rights Test vs Essence of Rights Test', marks: 8 }
    ]
  },

  {
    id: 'mains-20m-digital-free-speech',
    title: 'Freedom of Speech in the Digital Era & The Proportionality Standard',
    topicId: 'art-19-speech-reasonable-restrictions',
    marksCategory: 20,
    examCategory: 'DJS',
    examsAppeared: ['DJS 2022', 'UPSC Law Optional 2021, 2023', 'CLAT PG 2020, 2022', 'UP PCS-J 2023'],
    typicalMarks: 20,
    targetWordLimit: '450–500 Words | Time: ~15 Mins',
    targetWordMin: 420,
    targetWordMax: 520,
    estimatedPages: '2.0 Pages (~42 lines)',
    targetTimeMinutes: 15,
    questionText: `"Freedom of speech and expression through the medium of internet is an integral part of Article 19(1)(a)." In the light of this observation in Anuradha Bhasin, evaluate the constitutional validity of indefinite internet shutdowns under the Temporary Suspension of Telecom Services Rules.`,
    coreIssues: [
      'Recognition of digital expression as fundamental right under Article 19(1)(a) and trade under Article 19(1)(g).',
      'The impermissibility of indefinite suspensions of internet connectivity.',
      'Application of the 4-tier Proportionality Test to administrative orders.'
    ],
    examinerExpectation:
      'Must quote Anuradha Bhasin (2020). Detail the 4 limbs of the Proportionality Test: Legitimate state goal, Rational connection, Necessity/Least restrictive measure, and Proportionality stricto sensu.',
    essentialCitations: [
      'Modern Dental College v. State of M.P. ((2016) 7 SCC 353)',
      'K.S. Puttaswamy v. Union of India ((2017) 10 SCC 1)',
      'Anuradha Bhasin v. Union of India ((2020) 3 SCC 637)',
      'Foundation for Media Professionals v. UT of J&K ((2020) 5 SCC 746)'
    ],
    hoverIntel: {
      topicName: 'Digital Speech & The 4-Tier Proportionality Test',
      topicPillar: 'Part III: Fundamental Rights • Speech & Expression (Article 19)',
      examImportance: '⭐⭐⭐⭐⭐ Ultra High Yield (Modern Benchmark)',
      examFrequency: 'Appeared in DJS 2022, UPSC Law 2023, CLAT PG',
      weightagePattern: '20 Marks • 450–500 Words (2.0 Pages)',
      targetTimeMinutes: 15,
      examinerTrapWarning:
        'Trap Alert: Detail all 4 prongs of the Proportionality Test: (1) Legitimate State Aim, (2) Rational Connection, (3) Necessity / Least Restrictive Alternative, (4) Balancing / Proportionality stricto sensu!',
      recentTrendAlert: 'Mandatory review committee scrutiny reaffirmed in Telecom Suspension Amendment Rules.',
      coreArticles: ['Article 19(1)(a)', 'Article 19(1)(g)', 'Article 19(2)'],
      benchmarkCases: ['Shreya Singhal (2015)', 'Puttaswamy (2017)', 'Anuradha Bhasin (2020)']
    },
    answerBlueprint: {
      step1Intro: 'Affirm the constitutional principle: Medium of expression changes with technology, but Article 19(1)(a) protection remains robust.',
      step2DoctrinalCore: 'Analyze Anuradha Bhasin findings: Indefinite suspension of telecom/internet is illegal; review committees must publish orders.',
      step3PrecedentEvolution: 'Explain the Proportionality Test imported from German constitutional jurisprudence via Modern Dental College and Puttaswamy.',
      step4Conclusion: 'Conclude with procedural safeguards: Proactive disclosure of suspension orders enables judicial review under Article 226.'
    },
    fullModelAnswer: `I. CONSTITUTIONAL STATUS OF DIGITAL COMMUNICATION:
In Anuradha Bhasin v. Union of India (2020) 3 SCC 637, a 3-Judge Bench resolved the constitutional status of internet access. The Supreme Court held that freedom of speech and expression under Article 19(1)(a) and the freedom to practice any trade or business under Article 19(1)(g) through the medium of the internet are constitutionally protected fundamental rights.
While internet access per se was not declared a standalone fundamental right, the internet was recognized as an indispensable medium through which constitutional freedoms are realized in the 21st century.

II. INSUFFICIENT STATUTORY FOUNDATION & INDEFINITE SUSPENSIONS:
The State's power to restrict internet communications under the Temporary Suspension of Telecom Services (Public Emergency or Public Safety) Rules, 2017 is strictly bounded:
1. Indefinite Shutdown is Ultra Vires: An order suspending telecom/internet services cannot be indefinite. The suspension can only be for a temporary duration and must state reasons.
2. Mandatory Publication of Orders: Secret executive orders violate the Rule of Law. Every suspension order passed under Section 144 CrPC or the Telecom Rules must be published proactively in the public domain so that citizens can challenge it before High Courts under Article 226.
3. Review Committee Scrutiny: Orders must be periodically scrutinized by the statutory Review Committee under Rule 2(6) within five working days.

III. THE 4-PRONG PROPORTIONALITY TEST:
Importing the proportionality doctrine from Modern Dental College (2016) and Puttaswamy (2017), the Court mandated that any executive encroachment on communicative freedoms must satisfy four cumulative prongs:
1. Legitimate State Aim: The measure must pursue an objective authorized by Article 19(2) (e.g., sovereignty, integrity, or public order).
2. Rational Connection: There must be a demonstrable causal nexus between shutting down internet services and preventing public disorder.
3. Necessity / Least Restrictive Alternative: The State must evaluate whether less invasive measures (e.g., restricting only 4G high-speed data while keeping 2G alive, blocking specific extremist URLs, or geographic geofencing) could neutralize the security threat.
4. Proportionality Stricto Sensu: The societal benefit of the restriction must outweigh the severe collateral harm inflicted on healthcare, education, trade, and ordinary civic life.

CONCLUSION:
Blanket, unreasoned, and indefinite internet shutdowns fail the constitutional tests of legality and proportionality. Anuradha Bhasin transformed administrative convenience into a legally accountable process subject to judicial review.`,
    scoringRubric: [
      { criterion: 'Recognition of Internet communication under Art 19(1)(a) & 19(1)(g)', marks: 5 },
      { criterion: 'Anuradha Bhasin rules: Indefinite shutdowns ultra vires & order publication', marks: 5 },
      { criterion: '4-tier Proportionality Test application to administrative curbs', marks: 6 },
      { criterion: 'Review committee safeguards & procedural accountability', marks: 4 }
    ]
  }
];

