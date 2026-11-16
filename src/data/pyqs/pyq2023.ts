import type { PyqQuestion } from '../pyqData';

export const PYQ_2023_DATA: PyqQuestion[] = [
  {
    id: 'jkpsc-2023-q1',
    year: '2023',
    exam: 'JKPSC Prosecuting Officer (Main) Examination',
    paper: 'Paper-II (Constitutional Law & Criminal Procedure)',
    part: 'Part A',
    marks: 20,
    questionNumber: 1,
    title: 'Digital Compulsion & Article 20(3) in Smartphone Extractions',
    questionText: 'Discuss whether an order compelling an accused to unlock a password-protected smartphone or provide biometric access violates the guarantee against self-incrimination under Article 20(3). Critically evaluate in light of Kathi Kalu Oghad (1961), Selvi (2010), and the BSA 2023 provisions.',
    topic: 'Criminal Due Process',
    relevantArticles: ['Article 20(3)', 'Article 21'],
    bootcampDay: 3,
    coreIssues: [
      'Whether passwords constitute personal testimonial knowledge or non-testimonial physical evidence.',
      'Application of Selvi v. State of Karnataka regarding mental privacy and forcible information retrieval.',
      'Evidentiary admissibility under Section 63 BSA 2023 for digital electronic evidence.'
    ],
    landmarkPrecedents: {
      classic: 'State of Bombay v. Kathi Kalu Oghad (1961) 11-Judge Bench',
      modern2024: 'Virendra Khanna v. State of Karnataka (2021) & Celir LLP (2024)'
    },
    modelAnswer: `1. CONSTITUTIONAL THRESHOLD UNDER ARTICLE 20(3):
Article 20(3) embodies the maxim *Nemo tenetur seipsum accusare* (no person shall be compelled to be a witness against himself). The essential prerequisites established in M.P. Sharma (1954) are:
(a) The person must be an accused of an offence at the time of compulsion;
(b) There must be compulsion or coercion applied;
(c) The compulsion must result in conveying testimonial response.

2. THE PHYSICAL SPECIMEN VS TESTIMONIAL KNOWLEDGE TEST:
The 11-Judge Constitution Bench in Kathi Kalu Oghad (1961) drew a critical distinction between:
- Conveying physical evidence (fingerprints, handwriting specimens, blood, bodily measurements): Does NOT impart personal mental knowledge; does not violate Art 20(3).
- Imparting mental knowledge (statements, secrets, passwords): Communicating contents of the mind constitutes testimonial response.

3. PASSWORD EXTRACTION AND SELVI (2010):
In Selvi v. State of Karnataka (2010), a 3-Judge Bench held that compelled disclosure of mental contents violates Article 20(3) and the right to privacy under Article 21. Disclosing an alphanumeric password requires searching cognitive memory to convey information that exists solely within the accused's mind.
Conversely, several High Courts (Karnataka in Virendra Khanna 2021; Delhi High Court in CBI v. Sanjeev Kumar) have distinguished alphanumeric passwords from biometric unlocking (fingerprint/face ID), holding that directing an accused to place a finger on a sensor is analogous to physical fingerprinting under Kathi Kalu Oghad.

4. BHARATIYA SAKSHYA ADHINIYAM (BSA) 2023 COMPLIANCE:
Under Section 63 of BSA 2023, electronic records are primary evidence. However, Section 63 does not override Part III constitutional safeguards. An investigative extraction must:
(a) Rest on a specific, non-sweeping judicial warrant;
(b) Exclude irrelevant privileged personal communications;
(c) Adhere to the four-pronged proportionality test in K.S. Puttaswamy (2017).

5. CONCLUSION:
Compelling disclosure of mental alphanumeric passcodes violates Article 20(3). Where biometric unlocking is sought, it must be sanctioned under a bounded judicial warrant with hash-verified audit trails to prevent investigative planting and preserve Article 21 due process.`,
    scoringRubric: [
      { criterion: 'Art 20(3) 3-fold threshold & Kathi Kalu Oghad analysis', marks: 5 },
      { criterion: 'Cognitive mental knowledge vs physical evidence distinction in Selvi', marks: 5 },
      { criterion: 'Contemporary judicial distinction between passwords and biometrics', marks: 5 },
      { criterion: 'Statutory electronic evidence safeguards under BSA 2023 & Puttaswamy', marks: 5 }
    ]
  },
  {
    id: 'jkpsc-2023-q2',
    year: '2023',
    exam: 'JKPSC Prosecuting Officer (Main) Examination',
    paper: 'Paper-II (Constitutional Law & Criminal Procedure)',
    part: 'Part A',
    marks: 15,
    questionNumber: 2,
    title: 'Abrogation of Article 370 & Reorganization Jurisprudence',
    questionText: 'Examine the constitutional validity of the abrogation of Article 370 and the reorganization of Jammu & Kashmir under Article 3. Discuss the 5-Judge Constitution Bench ruling in In re Article 370 of the Constitution (2023).',
    topic: 'Federalism & Emergency',
    relevantArticles: ['Article 370', 'Article 3', 'Article 356', 'Article 367'],
    bootcampDay: 13,
    coreIssues: [
      'Whether Article 370 was temporary or had attained permanent constitutional status.',
      'Validity of amending Article 367 via Article 370(1)(d) to substitute "Constituent Assembly" with "Legislative Assembly".',
      'Limits of Presidential exercise of powers under Article 356 during President\'s Rule.',
      'Reorganization of a State into Union Territories under Article 3.'
    ],
    landmarkPrecedents: {
      classic: 'Prem Nath Kaul (1959); Sampat Prakash (1970)',
      modern2024: 'In re Article 370 of the Constitution (2023) 5-Judge Constitution Bench'
    },
    modelAnswer: `1. TEMPORARY NATURE OF ARTICLE 370:
The 5-Judge Constitution Bench (unanimous 5:0, Chandrachud C.J.) held that Article 370 was an interim, transitional arrangement:
- Placed in Part XXI ("Temporary, Transitional and Special Provisions").
- Historical record shows it was intended to ease accession pending constituent drafting.
- Overruled the submission that Article 370 had acquired permanent status upon the dissolution of the J&K Constituent Assembly in 1957.

2. INVALIDITY OF INDIRECT AMENDMENT VIA ARTICLE 367:
The Court held that Constitutional Order (CO) 272, in so far as it used Article 370(1)(d) to amend Article 367 (interpretation clause) to substitute "Constituent Assembly of J&K" with "Legislative Assembly of J&K", was ULTRA VIRES:
- An interpretive clause cannot be used to indirectly modify substantive constitutional provisions when the substantive route is barred (*colorable exercise of constituent power*).

3. PRESIDENTIAL POWER UNDER ARTICLE 370(3):
Notwithstanding the invalidity of the Article 367 amendment, the Court upheld the ultimate abrogation under Article 370(3) via CO 273:
- Held the President's power to issue a declaration under Article 370(3) did not freeze upon dissolution of the Constituent Assembly.
- The requirement for recommendation was a procedural condition precedent that became redundant once the body ceased to exist.

4. REORGANIZATION UNDER ARTICLE 3:
Regarding the conversion of the State into Union Territories:
- The Court left open whether Parliament can extinguish statehood under Article 3, in light of the Solicitor General's solemn undertaking that statehood of J&K will be restored.
- Upheld the carving out of Ladakh as a Union Territory under Article 3(a).
- Directed the Election Commission of India to conduct elections by September 30, 2024.

5. CONCLUSION:
The abrogation was upheld on the foundational doctrine of constitutional integration and undivided sovereignty of the Union of India, settling seven decades of asymmetric federal constitutional debate.`,
    scoringRubric: [
      { criterion: 'Temporary character analysis under Part XXI', marks: 4 },
      { criterion: 'Doctrine of Colorable Legislation applied to Art 367 amendment', marks: 4 },
      { criterion: 'Presidential powers under Art 370(3) post-Constituent Assembly dissolution', marks: 4 },
      { criterion: 'Article 3 reorganization findings and judicial directions', marks: 3 }
    ]
  }
];
