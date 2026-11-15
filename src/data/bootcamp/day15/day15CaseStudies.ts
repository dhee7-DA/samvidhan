import type { BootcampComprehensionCaseStudy } from '../bootcampTypes';

export const DAY15_COMPREHENSION_CASE_STUDIES: BootcampComprehensionCaseStudy[] = [
  {
    "id": "d15-cs1",
    "caseNumber": 1,
    "title": "The Golden Triangle in Criminal Procedure: Digital Surveillance, Passwords & Self-Incrimination",
    "legalTheme": "Articles 14, 19, 20(3), 21, Fundamental Rights Triad, Digital Privacy, Self-Incrimination, Mobile Extraction",
    "factualMatrix": "In a high-profile economic offences and corporate cyber-fraud investigation registered under Section 318(4) of the Bharatiya Nyaya Sanhita, 2023 (former IPC 420) and Section 66 of the Information Technology Act, 2000, the State Cyber Crime Cell arrests 'Dr. X', a chief technical architect. During police remand under Section 187 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS), the Investigating Officer (IO) seizes Dr. X's biometrically secured smartphone, encrypted laptop, and hardware crypto-wallet. \n\nThe IO serves a notice directing Dr. X to:\n(i) unlock the devices using his biometric fingerprint;\n(ii) disclose alphanumeric passwords and private cryptographic seed phrases; and\n(iii) sign blank printed transcripts of WhatsApp communications purportedly recovered from a synced cloud mirror.\n\nWhen Dr. X refuses, asserting his fundamental right against self-incrimination under Article 20(3) and his right to informational privacy under Article 21, the IO files an application before the Chief Judicial Magistrate (CJM). The IO seeks a coercive order compelling Dr. X to supply passwords and provide physical fingerprint impressions to bypass lock-screens, citing Section 349 of BNSS (powers to order specimen signatures, handwriting, voice samples, or finger impressions) and Section 94 of BNSS (summons to produce documents or other things). The CJM allows the IO's application in entirety, holding that passwords are akin to physical keys to a safe and do not constitute testimonial compulsion. Dr. X files a revision petition before the High Court under Section 438 BNSS read with Article 227.",
    "statutoryApplicability": [
      "Article 20(3) (Protection Against Self-Incrimination)",
      "Article 21 (Right to Privacy & Digital Informational Autonomy - K.S. Puttaswamy 2017)",
      "State of Bombay v. Kathi Kalu Oghad (1961 11-Judge Bench)",
      "Selvi v. State of Karnataka (2010 3-Judge Bench)",
      "Virendra Khanna v. State of Karnataka (2021 Karnataka HC)",
      "BNSS 2023 Section 187 (Police Custody) & Section 349 (Specimen Samples)"
    ],
    "framingQuestions": [
      "Under Kathi Kalu Oghad (1961) and Selvi (2010), what constitutes 'to be a witness against oneself' under Article 20(3), and does disclosure of an encrypted mental password cross into testimonial compulsion?",
      "Can an accused be physically coerced to provide fingerprint/facial biometrics to unlock an encrypted mobile device under Article 20(3) and Section 349 BNSS?",
      "How does the proportionality doctrine enunciated in K.S. Puttaswamy (2017) apply to sweeping warrants compelling complete extraction of smartphone data?",
      "What is the evidentiary admissibility of data extracted in violation of constitutional privacy and self-incrimination safeguards under Section 63 BSA 2023?"
    ],
    "modelAnswer": "1. TESTIMONIAL COMPULSION VS PHYSICAL EVIDENCE UNDER ARTICLE 20(3): In State of Bombay v. Kathi Kalu Oghad (1961 11-Judge Bench), the Supreme Court drew an unassailable line between 'physical evidence' (fingerprints, handwriting, specimen signatures) and 'testimonial evidence' (statements conveying personal knowledge). In Selvi v. State of Karnataka (2010 3-Judge Bench), the Court ruled that Article 20(3) protects mental privacy; compelling an accused to impart knowledge from his mind violates the guarantee against self-incrimination. A password or alphanumeric passcode resides in the mind of the accused; compelling its disclosure is direct testimonial compulsion and violates Article 20(3).\n\n2. BIOMETRIC UNLOCKING VS PASSCODE DISCLOSURE: While Kathi Kalu Oghad permits the collection of physical impressions for identification under statutory authority (now Section 349 BNSS), compelling biometric contact to access encrypted personal data collapses the boundary between physical identification and access to private thoughts. Under the proportionality standard of Puttaswamy (2017), an indiscriminate extraction of personal correspondence violates Article 21. While biometric samples may be taken for comparative forensic identification, their coercive application to unlock personal digital repositories without judicial filters violates both Article 20(3) and Article 21.\n\n3. PROPORTIONALITY STANDARD AND SEARCH WARRANTS: In K.S. Puttaswamy (2017 9-Judge Bench), the Supreme Court laid down the 4-pronged proportionality test: (a) Legitimate state aim; (b) Rational nexus; (c) Necessity (least restrictive means); and (d) Balancing (proportionality stricto sensu). An order directing wholesale disclosure of digital vaults containing unrelated personal, medical, and privileged communications fails the necessity and balancing tests. The IO must obtain a specific, targeted warrant and conduct forensic imaging through neutral hash-verified protocols.\n\n4. CONCLUSION ON HIGH COURT REVISION: The High Court must quash the CJM's order compelling disclosure of alphanumeric passwords and seed phrases as violative of Article 20(3). The IO may, however, submit the seized devices to a notified Central/State Forensic Science Laboratory (CFSL) for decryption through technological tools under Section 94 BNSS without coercing testimonial disclosure from the accused.",
    "markingRubric": [
      {
        "criterion": "Distinction between Kathi Kalu Oghad (physical) and Selvi (mental knowledge/passwords) under Article 20(3)",
        "marks": 4
      },
      {
        "criterion": "Application of Puttaswamy 4-pronged proportionality test to digital device search and extraction",
        "marks": 3
      },
      {
        "criterion": "Statutory interface with BNSS Sections 187, 349 and appropriate judicial remedies",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d15-cs1-q1",
        "question": "Under the 11-Judge Constitution Bench ruling in State of Bombay v. Kathi Kalu Oghad (1961) and Selvi (2010), why does compelling an accused to disclose an encrypted password violate Article 20(3)?",
        "options": [
          "Because a password constitutes physical evidence equivalent to a handwriting specimen",
          "Because a password requires disclosing personal mental knowledge, crossing the threshold into testimonial compulsion",
          "Because passwords are protected by absolute property rights under Article 300A",
          "Because an accused can never be directed to produce any document whatsoever during an investigation"
        ],
        "correctIndex": 1,
        "explanation": "Selvi v. State of Karnataka (2010) held that conveying mental knowledge constitutes testimonial response. Disclosing a password requires the detenu to search his memory and impart knowledge, which is protected under Article 20(3).",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Article 20(3)"
      },
      {
        "id": "d15-cs1-q2",
        "question": "Which landmark 9-Judge Constitution Bench decision established the fundamental right to informational privacy and laid down the four-pronged proportionality test governing state intrusion?",
        "options": [
          "M.P. Sharma v. Satish Chandra (1954)",
          "Kharak Singh v. State of U.P. (1963)",
          "Justice K.S. Puttaswamy (Retd.) v. Union of India (2017)",
          "Maneka Gandhi v. Union of India (1978)"
        ],
        "correctIndex": 2,
        "explanation": "K.S. Puttaswamy (2017 9-Judge Bench) overruled M.P. Sharma (1954) and Kharak Singh (1963) to the extent they denied privacy as a fundamental right, establishing the right to informational autonomy and the 4-prong proportionality doctrine.",
        "testedDimension": "Landmark Ratio",
        "articleRef": "Article 21"
      },
      {
        "id": "d15-cs1-q3",
        "question": "Under Section 349 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS), what is the statutory scope of samples that a Magistrate may order an accused person to provide?",
        "options": [
          "Specimen signatures, handwriting, finger impressions, and voice samples for identification",
          "Social media passwords and cloud account encryption keys",
          "A confession recorded under police custody without a lawyer present",
          "Substantive written answers to interrogatories framed by the Investigating Officer"
        ],
        "correctIndex": 0,
        "explanation": "Section 349 BNSS empowers Magistrates to order specimen signatures, handwriting, finger impressions, and voice samples for the purpose of any investigation or proceeding. It does not authorize coercive extraction of passwords.",
        "testedDimension": "Article Threshold",
        "articleRef": "Article 20(3)"
      },
      {
        "id": "d15-cs1-q4",
        "question": "What is the appropriate constitutional remedy before the High Court to challenge a subordinate Magistrate's coercive order that directly infringes fundamental rights under Articles 20(3) and 21?",
        "options": [
          "A private complaint before the Sessions Court for defamation",
          "A petition under Section 528 BNSS (inherent powers) or a writ petition under Article 226/227 of the Constitution",
          "An appeal before the Supreme Court under Article 132 as of right without High Court certification",
          "A reference to the Governor under Article 161 for executive pardon"
        ],
        "correctIndex": 1,
        "explanation": "An illegal interlocutory or revisional order violating fundamental rights is challenged via Section 528 BNSS (former 482 CrPC) or Articles 226/227 before the High Court to prevent abuse of the process of any court.",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Article 226"
      }
    ]
  },
  {
    "id": "d15-cs2",
    "caseNumber": 2,
    "title": "Custodial Violence, Encounter Killings & State Liability: The Constitutional Tort Doctrine",
    "legalTheme": "Articles 21, 300, 32, 226, Sovereign Immunity Repudiation, Constitutional Tort, Custodial Deaths, PUCL Guidelines",
    "factualMatrix": "In a district in Central India, a 24-year-old youth named 'R' is picked up by a special anti-dacoity police squad without an arrest memo, without informing his family, and without recording his detention in the general police station diary. Forty-eight hours later, while still in unacknowledged police custody, R's body is discovered near a railway embankment with multiple bullet wounds and severe contusions across his torso. \n\nThe Superintendent of Police convenes a press conference asserting that R was a notorious gangster who was taken to the embankment for weapon recovery under Section 23 BSA 2023 (former Section 27 IEA). According to the police narrative, R snatched an officer's service pistol, fired at the squad, and was killed in retaliatory 'self-defense encounter' fire. \n\nThe deceased youth's mother approaches the High Court under Article 226 seeking:\n(i) an independent investigation by the Central Bureau of Investigation (CBI) or a Special Investigation Team (SIT);\n(ii) prosecution of the involved police personnel for murder under Section 103 BNS 2023; and\n(iii) constitutional exemplary compensation of ₹50,00,000 against the State Government for custodial death and gross violation of Article 21.\n\nThe State Government raises a preliminary objection, arguing that:\n(a) the petition involves disputed questions of fact that can only be adjudicated in a civil suit for damages or in a criminal trial; and\n(b) the State is protected by the sovereign immunity doctrine enunciated in Kasturi Lal Ralia Ram Jain v. State of U.P. (1965) since maintenance of law and order and anti-dacoity operations are core sovereign functions.",
    "statutoryApplicability": [
      "Article 21 (Right to Life and Personal Liberty)",
      "Article 300 (Suits and Proceedings against the Government)",
      "D.K. Basu v. State of West Bengal (1997 2-Judge Bench)",
      "PUCL v. State of Maharashtra (2014 2-Judge Bench - 16 Encounter Guidelines)",
      "Nilabati Behera v. State of Orissa (1993 3-Judge Bench)",
      "Rudul Sah v. State of Bihar (1983 3-Judge Bench)",
      "Kasturi Lal Ralia Ram Jain v. State of U.P. (1965 5-Judge Constitution Bench)"
    ],
    "framingQuestions": [
      "Does the archaic doctrine of sovereign immunity under Kasturi Lal (1965) bar constitutional courts from awarding compensation under Articles 32 and 226 for custodial death?",
      "What are the mandatory 16-point procedures prescribed in PUCL v. State of Maharashtra (2014) governing police encounter deaths?",
      "Under Nilabati Behera (1993), what is the distinction between a private law tort claim for damages and public law strict liability for constitutional tort?",
      "Can the High Court under Article 226 order an independent CBI/SIT probe when local police investigations in encounter deaths are compromised?"
    ],
    "modelAnswer": "1. SOVEREIGN IMMUNITY REPUDIATED IN CONSTITUTIONAL TORTS: In Rudul Sah v. State of Bihar (1983) and Nilabati Behera v. State of Orissa (1993 3-Judge Bench), the Supreme Court held that the defence of sovereign immunity recognized in Kasturi Lal (1965) applies only to traditional private law actions in tort. It has NO application to constitutional remedies under Articles 32 and 226 for violation of fundamental rights guaranteed under Article 21. Constitutional compensation is awarded as a public law remedy based on strict liability to provide immediate palliative relief and enforce constitutional accountability.\n\n2. MANDATORY ENCOUNTER GUIDELINES IN PUCL (2014): In People's Union for Civil Liberties v. State of Maharashtra (2014), the Supreme Court formulated 16 mandatory guidelines for investigating encounter deaths:\n(i) Mandatory registration of FIR under Section 154 CrPC (now Section 173 BNSS) whenever an encounter results in death;\n(ii) Independent investigation by the CID or another police team from a different police station headed by a senior officer;\n(iii) Mandatory magisterial inquiry under Section 176 CrPC (now Section 196 BNSS);\n(iv) Immediate intimation to the National Human Rights Commission (NHRC) / State HRC;\n(v) Seizure of weapons, preservation of gunshot residue, and videographed post-mortem by a medical board;\n(vi) No out-of-turn promotions or gallantry awards until the inquiry completely exonerates the officers.\n\n3. DISPUTED QUESTIONS OF FACT DO NOT BAR ARTICLE 226 REMEDY: When an admitted detention results in death in custody or staged encounter, the burden shifts to the State under Section 109 BSA 2023 (former Section 106 IEA) to explain what transpired within its exclusive custody. The constitutional court can award interim monetary compensation based on undisputed medical evidence without relegating the destitute mother to a protracted civil suit.\n\n4. CONCLUSION: The High Court must reject the State's preliminary objection, direct an independent SIT investigation monitored by a retired High Court Judge, and award interim constitutional compensation of ₹20,00,000 to the mother, recoverable personally from delinquent officers if proven guilty.",
    "markingRubric": [
      {
        "criterion": "Complete repudiation of Kasturi Lal sovereign immunity in Article 32/226 public law claims (Nilabati Behera)",
        "marks": 4
      },
      {
        "criterion": "Application of PUCL (2014) 16-point encounter guidelines & BNSS 196 magisterial inquiry",
        "marks": 3
      },
      {
        "criterion": "Public law strict liability vs private tort distinction and power to award exemplary damages",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d15-cs2-q1",
        "question": "In Nilabati Behera v. State of Orissa (1993), how did the Supreme Court resolve the applicability of the sovereign immunity doctrine (Kasturi Lal 1965) to custodial deaths under Article 21?",
        "options": [
          "It held that sovereign immunity protects police officers performing anti-dacoity operations from all constitutional liability",
          "It held that sovereign immunity has no application to public law remedies under Articles 32 and 226 for infringement of fundamental rights",
          "It held that the victim's family can only file an execution petition against the Union of India",
          "It reaffirmed that only civil suits under the Law of Torts can remedy custodial torture"
        ],
        "correctIndex": 1,
        "explanation": "Nilabati Behera (1993 3-Judge Bench) authoritatively established that sovereign immunity is alien to constitutional public law remedies under Articles 32/226. The State is strictly liable for violations of Article 21.",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Article 21"
      },
      {
        "id": "d15-cs2-q2",
        "question": "Under the landmark 16-point guidelines laid down in PUCL v. State of Maharashtra (2014), what is the mandatory immediate step required whenever a police encounter results in death?",
        "options": [
          "Automatic grant of out-of-turn gallantry promotions to all squad officers",
          "Registration of an FIR and independent investigation by the CID or police team from a different police station",
          "Closure of the investigation after recording an unsworn affidavit of the team leader",
          "Transfer of the case directly to the International Court of Justice"
        ],
        "correctIndex": 1,
        "explanation": "PUCL (2014) mandates that an FIR must be registered immediately and the investigation must be conducted by an independent agency like CID or a police team from another police station headed by a senior officer.",
        "testedDimension": "Landmark Ratio",
        "articleRef": "Article 21"
      },
      {
        "id": "d15-cs2-q3",
        "question": "Which landmark case first established the principle of monetary compensation for unlawful detention and violation of personal liberty under Article 32 of the Constitution?",
        "options": [
          "Rudul Sah v. State of Bihar (1983)",
          "A.K. Gopalan v. State of Madras (1950)",
          "ADM Jabalpur v. Shivkant Shukla (1976)",
          "Minerva Mills v. Union of India (1980)"
        ],
        "correctIndex": 0,
        "explanation": "Rudul Sah (1983) authored by Chandrachud CJI first pioneered compensatory jurisprudence in constitutional public law under Article 32 for illegal detention extending 14 years after acquittal.",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Article 32"
      },
      {
        "id": "d15-cs2-q4",
        "question": "Under Article 21, what is the legal threshold required for a High Court under Article 226 to transfer an investigation from state police to the Central Bureau of Investigation (CBI)?",
        "options": [
          "It can be done routinely upon the mere asking of the complainant without any exceptional circumstances",
          "Only in exceptional circumstances where the court finds that the state police investigation lacks impartiality, credibility, or instills reasonable apprehension of bias",
          "Only if the accused gives written consent to the CBI transfer",
          "Only if the President of India issues a proclamation under Article 356"
        ],
        "correctIndex": 1,
        "explanation": "State of West Bengal v. Committee for Protection of Democratic Rights (2010 5-Judge Bench) held that constitutional courts have power to transfer investigations to CBI without state consent, but it must be exercised sparingly and in exceptional circumstances to maintain public confidence.",
        "testedDimension": "Article Threshold",
        "articleRef": "Article 226"
      }
    ]
  },
  {
    "id": "d15-cs3",
    "caseNumber": 3,
    "title": "Preventive Detention & Constitutional Procedural Scrutiny: Article 22(5) vs Executive Overreach",
    "legalTheme": "Articles 22(4)–(7), 21, Preventive Detention Safeguards, Public Order vs Law and Order, Representation Delay",
    "factualMatrix": "The District Magistrate (DM) of a sensitive coastal district passes a preventive detention order against 'Z', a local trade union leader and social activist, under the Prevention of Illicit Traffic in Narcotic Drugs and Psychotropic Substances Act, 1988 (PITNDPS Act) / National Security Act, 1980 (NSA). The grounds of detention served on Z cite three instances:\n(i) Organizing a protest rally of port workers without police permission leading to traffic disruption;\n(ii) An FIR registered under Section 303(2) BNS 2023 (theft) wherein Z was already enlarged on regular bail by the Sessions Judge six months prior; and\n(iii) Secret intelligence reports alleging that Z might finance contraband trafficking, though no contraband was recovered from him.\n\nThe grounds of detention, running into 180 pages of complex English text with legal jargon, are handed to Z in prison. Z is semi-literate and understands only Gujarati. His request for a translated copy in Gujarati is summarily rejected by the Jail Superintendent as 'administrative inconvenience'. \n\nFurthermore, Z drafts a hand-written representation in Gujarati through a fellow inmate on Day 5 and submits it to the State Government. The State Government keeps the representation pending in the Home Department for 42 days without placing it before the Advisory Board, citing state legislative assembly election duties of the reviewing officers. The Advisory Board subsequently confirms the detention for a period of one year without giving Z a personal hearing or permitting his legal friend to accompany him. Z's spouse files a Habeas Corpus petition under Article 226 before the High Court.",
    "statutoryApplicability": [
      "Article 22(4) (Advisory Board Maximum Detention Thresholds)",
      "Article 22(5) (Earliest Opportunity of Making Representation & Communicating Grounds)",
      "Pramod Singla v. Union of India (2023 Supreme Court)",
      "Ameena Begum v. State of Telangana (2023 2-Judge Bench)",
      "Pebam Ningol v. State of Manipur (2010 2-Judge Bench)",
      "Rekha v. State of Tamil Nadu (2011 3-Judge Bench)"
    ],
    "framingQuestions": [
      "Does the failure to provide the grounds of detention and relied-upon documents in a language understood by the detenu vitiate the detention order under Article 22(5)?",
      "What is the constitutional effect of an unexplained 42-day delay by the State Government in considering the detenu's representation under Article 22(5)?",
      "How does the Supreme Court distinguish between 'public order' and 'law and order' in preventive detention jurisprudence (Ameena Begum 2023)?",
      "Can a preventive detention order be sustained on stale grounds where regular criminal law (bail granted) was already operating?"
    ],
    "modelAnswer": "1. NON-SUPPLY OF GROUNDS IN A KNOWN LANGUAGE FATAL UNDER ARTICLE 22(5): Article 22(5) guarantees two constitutional rights to a detenu: (a) communication of grounds as soon as may be, and (b) affording the earliest opportunity of making an effective representation. In Harikisan v. State of Maharashtra (1962 5-Judge Bench) and Powanammal v. State of T.N. (1999), the Supreme Court ruled that 'communication' means bringing home to the detenu the effective knowledge of facts. Supplying 180 pages of English documents to a detenu who only understands Gujarati without translation or oral explanation deprives him of the constitutional right to make an effective representation, rendering the detention order void ab initio.\n\n2. UNEXPLAINED DELAY IN DECIDING REPRESENTATION RENDERS DETENTION ILLEGAL: In Sarabjeet Singh Mokha v. District Magistrate, Jabalpur (2021) and Pramod Singla v. Union of India (2023), the Supreme Court reiterated that the duty of the government under Article 22(5) to decide a detenu's representation at the earliest is independent of the Advisory Board proceedings. An unexplained delay of 42 days violates the constitutional mandate of expeditious disposal, automatically invalidating further detention.\n\n3. DISTINCTION BETWEEN 'PUBLIC ORDER' AND 'LAW AND ORDER': In Ram Manohar Lohia v. State of Bihar (1966) and Ameena Begum v. State of Telangana (2023), the Supreme Court held that every breach of peace does not threaten 'public order'. While 'law and order' involves individual crimes affecting private individuals, 'public order' involves acts affecting the even tempo of the community at large. Staging a labor protest or isolated property offences fall squarely within 'law and order' and cannot justify preventive detention.\n\n4. INVOCATION OF DETENTION DESPITE BAIL: In Rekha v. State of Tamil Nadu (2011 3-Judge Bench), the Supreme Court held that where the ordinary criminal law has already taken cognizance and the accused is on bail, preventive detention cannot be mechanically resorted to unless there is cogent material that the detenu is likely to indulge in prejudicial activities while on bail and ordinary bail cancellation is insufficient. The High Court must issue a writ of Habeas Corpus and direct immediate release of Z.",
    "markingRubric": [
      {
        "criterion": "Violation of Article 22(5) due to non-translation into detenu's mother tongue (Harikisan & Powanammal)",
        "marks": 4
      },
      {
        "criterion": "Fatal impact of unexplained 42-day government delay under Pramod Singla (2023)",
        "marks": 3
      },
      {
        "criterion": "Public order vs Law and order test and Rekha (2011) bail doctrine",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d15-cs3-q1",
        "question": "Under Article 22(5) and Harikisan (1962), what is the legal consequence when grounds of detention are furnished in a language the detenu does not understand without an authentic translation?",
        "options": [
          "The detenu is presumed to have waived his right if he has a lawyer",
          "The detention order is rendered invalid and void ab initio for violating the right to make an effective representation",
          "The detention period is extended by six months to allow the jailor to translate it",
          "The High Court must dismiss the Habeas Corpus petition as premature"
        ],
        "correctIndex": 1,
        "explanation": "Communication under Article 22(5) means imparting effective knowledge. Providing documents in an unknown language impairs the right to represent, invalidating the detention.",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Article 22(5)"
      },
      {
        "id": "d15-cs3-q2",
        "question": "In Pramod Singla v. Union of India (2023), what did the Supreme Court hold regarding the government's unexplained delay in deciding a detenu's representation under Article 22(5)?",
        "options": [
          "Delay is immaterial if the Advisory Board has confirmed the detention",
          "Delay can be excused if administrative officials are engaged in election duties",
          "Unexplained delay strikes at the root of procedural safeguards and invalidates continued detention",
          "The government has an absolute period of 90 days to consider any representation"
        ],
        "correctIndex": 2,
        "explanation": "Pramod Singla (2023) reiterated that constitutional safeguards in preventive detention must be strictly observed. Unexplained administrative delay in disposing of a representation vitiates the detention.",
        "testedDimension": "Landmark Ratio",
        "articleRef": "Article 22(5)"
      },
      {
        "id": "d15-cs3-q3",
        "question": "Under the constitutional framework of Article 22(4), what is the maximum initial period for which a person may be preventively detained without obtaining the opinion of an Advisory Board?",
        "options": [
          "30 days",
          "3 months (reduced to 2 months by 44th Amendment, but unnotified)",
          "6 months",
          "1 year"
        ],
        "correctIndex": 1,
        "explanation": "Under Article 22(4) as in force, no person can be detained beyond 3 months without the approval of an Advisory Board. Although the 44th Amendment reduced it to 2 months, that clause was never notified.",
        "testedDimension": "Article Threshold",
        "articleRef": "Article 22(4)"
      },
      {
        "id": "d15-cs3-q4",
        "question": "What is the appropriate constitutional writ to challenge an illegal preventive detention order and secure the physical liberty of the detenu?",
        "options": [
          "Writ of Quo Warranto",
          "Writ of Habeas Corpus",
          "Writ of Prohibition",
          "Writ of Certiorari to the Election Commission"
        ],
        "correctIndex": 1,
        "explanation": "Habeas Corpus (to produce the body) under Article 32 (Supreme Court) or Article 226 (High Court) is the classic constitutional remedy to test the legality of physical detention.",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Article 226"
      }
    ]
  },
  {
    "id": "d15-cs4",
    "caseNumber": 4,
    "title": "Judicial Appointments, Collegium Primacy & Executive Inaction: Articles 124(2) & 217(1)",
    "legalTheme": "Articles 124, 217, Independence of Judiciary, Collegium System, Memorandum of Procedure, Pocket Veto",
    "factualMatrix": "The Supreme Court Collegium, headed by the Chief Justice of India and comprising the four senior-most puisne judges, unanimously reiterates its recommendation to elevate a senior advocate 'Advocate A' as a Judge of the High Court of Bombay. The Collegium had previously examined and overruled objections raised by the Union Ministry of Law & Justice regarding Advocate A's political opinions expressed in newspaper columns critical of government fiscal policy. \n\nDespite the explicit reiteration by the Collegium, the Union Executive takes no action on the file for over 18 months. The candidate's name is neither notified in the Gazette of India nor returned to the Collegium. At the same time, the Executive segregates the reiterated candidate from a composite batch of recommendations, notifying junior nominees while leaving Advocate A's seniority and elevation in total abeyance. \n\nA public interest litigation is instituted under Article 32 by the Advocates Association before the Supreme Court seeking:\n(i) a writ of mandamus directing the Union Government to issue the presidential warrant of appointment under Article 217(1); and\n(ii) a declaration that the Executive possesses no 'pocket veto' or power to sit indefinitely on reiterated Collegium recommendations under the Memorandum of Procedure (MoP).\n\nThe Attorney General for India argues that Article 217(1) mandates presidential discretion after 'consultation', and no mandamus can lie to compel the President to make a judicial appointment, which constitutes an executive prerogative.",
    "statutoryApplicability": [
      "Article 124(2) (Appointment of Supreme Court Judges)",
      "Article 217(1) (Appointment and Conditions of Office of High Court Judges)",
      "S.P. Gupta v. Union of India (First Judges Case 1981 7-Judge Bench)",
      "Supreme Court Advocates-on-Record Association v. UOI (Second Judges Case 1993 9-Judge Bench)",
      "Special Reference 1 of 1998 (Third Judges Case 1998 9-Judge Bench)",
      "Supreme Court Advocates-on-Record Association v. UOI (NJAC Case 2015 5-Judge Bench)",
      "Advocates Association Bengaluru v. Barun Mitra (2021 & 2023 Division Bench)"
    ],
    "framingQuestions": [
      "Under the Second (1993) and Third (1998) Judges cases, what is the legal effect of a unanimous reiteration by the Collegium after the Executive expresses reservations?",
      "Can the Union Executive exercise a 'pocket veto' or indefinitely withhold issuance of notification under Article 217(1)?",
      "Is the Executive permitted to unilaterally segregate names from a composite Collegium panel without the prior consent of the CJI?",
      "How does the principle of Judicial Independence form an unalterable facet of the Basic Structure of the Constitution?"
    ],
    "modelAnswer": "1. PRIMACY OF COLLEGIUM UPON REITERATION: In the Second Judges Case (1993 9-Judge Bench) and Third Judges Case (1998 9-Judge Bench), the Supreme Court interpreted 'consultation' in Articles 124(2) and 217(1) to mean 'concurrence' of the Chief Justice of India. The Court settled that while the Executive can request the Collegium to reconsider a recommendation once with specific reasons, if the Collegium unanimously reiterates the recommendation, the appointment MUST be made as a matter of constitutional duty.\n\n2. NO POCKET VETO UNDER THE CONSTITUTION: In Advocates Association Bengaluru v. Barun Mitra (2021/2023), the Supreme Court affirmed that the existing Memorandum of Procedure (MoP) binds the Union Executive. The Executive has no constitutional authority to sit indefinitely on reiterated recommendations or exercise a de facto 'pocket veto'. Doing so undermines the rule of law and the independence of the judiciary, which is a Basic Feature of the Constitution (NJAC Case 2015).\n\n3. PROHIBITION AGAINST UNILATERAL SEGREGATION: The Supreme Court has repeatedly held that unilateral segregation of candidates by the Executive disturbs inter-se seniority and distorts the seniority matrix determined by the Collegium. Once a composite recommendation is made, the Executive cannot pick and choose candidates without the express concurrence of the CJI.\n\n4. REMEDY AND NATURE OF WRIT: While a direct mandamus to the President to execute a warrant under his hand and seal is shielded by Article 361, the Supreme Court possesses full jurisdiction under Article 32 to direct the Union Law Ministry to process and complete the appointment in accordance with the law declared under Article 141, setting strict time-lines.",
    "markingRubric": [
      {
        "criterion": "Interpretation of 'consultation' as concurrence and binding effect of reiteration (Second & Third Judges cases)",
        "marks": 4
      },
      {
        "criterion": "Rejection of Executive 'pocket veto' and enforcement of MoP timelines (Barun Mitra 2023)",
        "marks": 3
      },
      {
        "criterion": "Judicial independence as Basic Structure (NJAC 2015) and Article 361 executive interface",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d15-cs4-q1",
        "question": "Under the 9-Judge Constitution Bench ruling in the Second Judges Case (1993) affirmed in the Third Judges Case (1998), what is the legal status of a Collegium recommendation that has been unanimously reiterated?",
        "options": [
          "It remains purely advisory and the President can permanently veto it without giving reasons",
          "It is constitutionally binding on the Union Executive and the appointment must be made",
          "It must be referred to Parliament for confirmation by a two-thirds majority",
          "It automatically lapses after 60 days of executive non-response"
        ],
        "correctIndex": 1,
        "explanation": "The Second Judges Case (1993) held that if the Collegium unanimously reiterates a recommendation after reconsidering executive inputs, the Executive is constitutionally bound to make the appointment.",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Article 217"
      },
      {
        "id": "d15-cs4-q2",
        "question": "Which 5-Judge Constitution Bench struck down the 99th Constitutional Amendment and the National Judicial Appointments Commission (NJAC) Act, 2014 as violative of Judicial Independence?",
        "options": [
          "S.P. Gupta v. Union of India (1981)",
          "Supreme Court Advocates-on-Record Association v. Union of India (2015)",
          "Shankari Prasad v. Union of India (1951)",
          "Indira Nehru Gandhi v. Raj Narain (1975)"
        ],
        "correctIndex": 1,
        "explanation": "In the Fourth Judges Case (NJAC 2015), a 4:1 majority struck down the 99th Amendment, holding that judicial primacy in appointments is essential to protect the Basic Structure doctrine.",
        "testedDimension": "Landmark Ratio",
        "articleRef": "Article 124"
      },
      {
        "id": "d15-cs4-q3",
        "question": "What is the constitutional composition of the Supreme Court Collegium for recommending appointments of High Court Judges under the Third Judges Case (1998)?",
        "options": [
          "CJI and the four senior-most puisne judges of the Supreme Court",
          "CJI and the two senior-most puisne judges of the Supreme Court",
          "CJI, Union Law Minister, and the Leader of Opposition",
          "All sitting judges of the concerned High Court"
        ],
        "correctIndex": 1,
        "explanation": "Under the Third Judges Case (1998), appointments to the Supreme Court require a 5-member Collegium (CJI + 4 senior-most judges), whereas High Court appointments and transfers require a 3-member Collegium (CJI + 2 senior-most judges).",
        "testedDimension": "Article Threshold",
        "articleRef": "Article 217"
      },
      {
        "id": "d15-cs4-q4",
        "question": "Under Article 361 of the Constitution, how is judicial review reconciled when challenging prolonged executive non-action on judicial appointments?",
        "options": [
          "The President is personally summoned and cross-examined in the Supreme Court",
          "Mandamus and directions are addressed to the Union Ministry of Law & Justice / Government of India, not to the President personally",
          "The Supreme Court issues a decree of contempt directly against the President",
          "No judicial review is permissible under any circumstances"
        ],
        "correctIndex": 1,
        "explanation": "Article 361 provides personal immunity to the President, but judicial review lies against the Government of India through its designated ministries and secretaries.",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Article 361"
      }
    ]
  },
  {
    "id": "d15-cs5",
    "caseNumber": 5,
    "title": "Speaker's Powers, Anti-Defection & Tenth Schedule Trajectories: Floor Tests & Disqualification",
    "legalTheme": "Tenth Schedule, Articles 174, 163, Speaker's Powers, Nabam Rebia, Subhash Desai, Whip Authority",
    "factualMatrix": "Following a political schism in the ruling coalition of a State Legislative Assembly consisting of 240 members, a faction of 42 Members of Legislative Assembly (MLAs) belonging to Party 'D' passes a resolution claiming to be the 'real' Party D. They appoint 'MLA K' as their group leader and write to the Governor withdrawing support from the incumbent Chief Minister 'CM S'. \n\nParty D's official party president and registered whip issue a whip directing all Party D MLAs to attend an urgent meeting at the official party headquarters. The 42 rebel MLAs defy the whip and remain camped in a hotel in a neighboring State. The party whip files a disqualification petition before the Speaker under Paragraph 2(1)(b) of the Tenth Schedule. \n\nSimultaneously, the rebel MLAs send a notice under Article 179(c) seeking the removal of the Speaker on grounds of bias. Relying on the 5-Judge Constitution Bench in Nabam Rebia (2016), the rebel MLAs argue that since a notice for his own removal is pending, the Speaker has no constitutional jurisdiction to adjudicate their disqualification petitions under the Tenth Schedule. \n\nTaking cognizance of the rebel MLAs' letters, the Governor directs CM S to face a floor test within 48 hours under Article 174. Before the floor test can occur, CM S resigns. The Governor then invites MLA K and the opposition party to form the government. The ousted faction approaches the Supreme Court under Article 32 challenging:\n(i) the Governor's order directing a floor test; and\n(ii) the restraint placed upon the Speaker from adjudicating the disqualification petitions.",
    "statutoryApplicability": [
      "Article 174 (Sessions of State Legislature & Prorogation)",
      "Article 163 (Council of Ministers to Aid and Advise Governor)",
      "Tenth Schedule Paragraph 2 (Disqualification on Ground of Defection)",
      "91st Constitutional Amendment Act, 2003 (Deletion of Paragraph 3 Split Exception)",
      "Kihoto Hollohan v. Zachillhu (1992 5-Judge Bench)",
      "Nabam Rebia v. Deputy Speaker (2016 5-Judge Bench)",
      "Subhash Desai v. Principal Secretary, Governor of Maharashtra (2023 5-Judge Constitution Bench)"
    ],
    "framingQuestions": [
      "How did the 5-Judge Constitution Bench in Subhash Desai (2023) modify or refer the proposition in Nabam Rebia (2016) regarding the Speaker's power to decide disqualifications when a removal notice is pending?",
      "Can a faction claiming a 'split' within a political party evade disqualification after the 91st Constitutional Amendment Act, 2003?",
      "Under Subhash Desai (2023), who possesses the constitutional authority to appoint the whip and leader of the House: the Political Party or the Legislative Party?",
      "Under what objective threshold can the Governor call for a floor test under Article 174 without the aid and advice of the Council of Ministers?"
    ],
    "modelAnswer": "1. RECONSIDERATION OF NABAM REBIA IN SUBHASH DESAI (2023): In Nabam Rebia (2016 5-Judge Bench), the Court had held that a Speaker cannot proceed with disqualification petitions if a notice for his removal is pending under Article 179(c). In Subhash Desai (2023 5-Judge Bench, Chandrachud CJI), the Constitution Bench held that this rule was prone to misuse by defecting MLAs to paralyze the Speaker. The Bench referred Nabam Rebia to a 7-Judge Constitution Bench, holding that in the interim, the Speaker must first determine the prima facie bonafides of the removal notice before keeping disqualification petitions in abeyance.\n\n2. SPLIT DEFENSE ABOLISHED BY 91ST AMENDMENT: The 91st Constitutional Amendment Act, 2003 deleted Paragraph 3 of the Tenth Schedule, which had previously protected a split of one-third of the members. Today, the only defense against disqualification under the Tenth Schedule is a merger under Paragraph 4, which requires at least two-thirds of the members of the legislative party to agree to merge with another political party. A standalone faction of 42 MLAs claiming an internal split cannot claim immunity from disqualification.\n\n3. PRIMACY OF POLITICAL PARTY OVER LEGISLATIVE PARTY: Subhash Desai (2023) categorically held that the Tenth Schedule links the legislator to the 'Political Party' (the party that set him up as a candidate), and NOT the 'Legislative Party' (the elected members in the House). The power to appoint the whip and the leader of the party in the House vests in the Political Party. An unauthorized faction of the legislative party cannot usurp this function.\n\n4. GOVERNOR'S DISCRETION ON FLOOR TESTS: The Governor's power under Article 174 read with Article 163 to call for a floor test is not an unbridled subjective power. In Shiv Sena (Subhash Desai 2023), the Court held that the Governor had no objective material before him to conclude that the incumbent Chief Minister had lost majority support, since an internal party dispute does not automatically mean loss of confidence in the House. However, because CM S voluntarily resigned without facing the floor test, the status quo ante could not be restored.",
    "markingRubric": [
      {
        "criterion": "Primacy of Political Party over Legislative Party in appointing whip under Subhash Desai (2023)",
        "marks": 4
      },
      {
        "criterion": "Complete abolition of split defense by 91st Amendment (Paragraph 3 deletion)",
        "marks": 3
      },
      {
        "criterion": "Objective limits on Governor's floor test power under Article 174 (Subhash Desai & Shivraj Singh Chouhan)",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d15-cs5-q1",
        "question": "In Subhash Desai v. Principal Secretary (2023 5-Judge Bench), who was held to have the authoritative constitutional power to appoint the House Whip and the Party Leader?",
        "options": [
          "The Legislative Party consisting solely of the elected MLAs",
          "The Political Party recognized by the Election Commission of India",
          "The Speaker of the Legislative Assembly at his absolute pleasure",
          "The Governor acting in his sole discretionary capacity"
        ],
        "correctIndex": 1,
        "explanation": "Subhash Desai (2023) authoritatively held that the Tenth Schedule is anchored in the 'Political Party'. To recognize the legislative party independently would sever the umbilical cord linking the legislator to the party that gave him the ticket.",
        "testedDimension": "Landmark Ratio",
        "articleRef": "Tenth Schedule"
      },
      {
        "id": "d15-cs5-q2",
        "question": "Following the 91st Constitutional Amendment Act, 2003, what is the sole defense available to members against disqualification on the ground of defection under the Tenth Schedule?",
        "options": [
          "A vertical split comprising at least one-third of the legislative party under Paragraph 3",
          "A merger with another political party supported by not less than two-thirds of the members under Paragraph 4",
          "An oral declaration of no-confidence passed in a luxury resort",
          "A letter signed by a simple majority of the regional committee"
        ],
        "correctIndex": 1,
        "explanation": "The 91st Amendment deleted Paragraph 3 (the split defense). The only surviving exception to disqualification is a merger under Paragraph 4 requiring concurrence of two-thirds of the members of the legislative party.",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Tenth Schedule"
      },
      {
        "id": "d15-cs5-q3",
        "question": "Under the landmark 5-Judge Constitution Bench decision in Kihoto Hollohan v. Zachillhu (1992), at what stage is judicial review permissible against Tenth Schedule disqualification proceedings?",
        "options": [
          "At the preliminary show-cause notice stage before the Speaker conducts hearings",
          "Only after the Speaker has rendered a final decision on disqualification, except where interlocutory orders cause grave, irreversible constitutional injury",
          "Judicial review is totally barred by Paragraph 7 of the Tenth Schedule in all cases",
          "Only after a national referendum is held under Article 368"
        ],
        "correctIndex": 1,
        "explanation": "Kihoto Hollohan (1992) held that the Speaker acts as a tribunal under the Tenth Schedule. Judicial review is available under Articles 226/136, but ordinarily only after a final decision is rendered by the Speaker.",
        "testedDimension": "Article Threshold",
        "articleRef": "Article 226"
      },
      {
        "id": "d15-cs5-q4",
        "question": "Under what circumstance did the Supreme Court in Subhash Desai (2023) decline to restore the ousted Chief Minister despite finding the Governor's floor test requisition illegal?",
        "options": [
          "Because the Governor is completely immune from civil and criminal liability under Article 361",
          "Because the Chief Minister had voluntarily submitted his resignation prior to facing the floor test on the floor of the House",
          "Because Parliament had already enacted a validating statute under Article 248",
          "Because the Election Commission of India had frozen the party's election symbol"
        ],
        "correctIndex": 1,
        "explanation": "The Court held that had the Chief Minister faced the floor test and been defeated, relief could have followed; but since he voluntarily resigned without facing the House, the Court could not reinstate a government that resigned.",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Article 174"
      }
    ]
  },
  {
    "id": "d15-cs6",
    "caseNumber": 6,
    "title": "Fiscal Federalism, GST Council & Inter-State Trade Dynamics: Articles 246A, 269A & 279A",
    "legalTheme": "Cooperative Federalism, Simultaneous Taxation, Article 246A, GST Council Nature, Mohit Minerals, Ocean Freight",
    "factualMatrix": "Under the Integrated Goods and Services Tax Act, 2017 (IGST Act), the Central Government issues Notification No. 8/2017 and Notification No. 10/2017 levying an integrated tax of 5% on the service of transportation of goods in a vessel from a place outside India up to the customs station of clearance in India (ocean freight), paid by a foreign shipping line. The notifications deem the Indian importer of goods on CIF (Cost, Insurance, and Freight) basis to be the recipient of services liable under the reverse charge mechanism. \n\nAn Indian manufacturing company 'M' imports raw chemical shipments on CIF contracts. The customs authorities assess and collect basic customs duty and IGST on the composite value of the CIF imported goods at the port of entry under Section 3(7) of the Customs Tariff Act, 1975. Simultaneously, the GST department issues a demand notice under Section 73 of the CGST Act demanding separate IGST on the estimated ocean freight component under the impugned reverse charge notifications. \n\nCompany M challenges the notifications before the High Court under Article 226, contending that:\n(i) Ocean freight is already subsumed within the CIF value subjected to customs duties and IGST, resulting in unconstitutional double taxation; and\n(ii) The tax violates the federal scheme of Article 246A.\n\nThe Central Government argues that:\n(a) The GST Council, a constitutional body established under Article 279A, unanimously recommended this reverse charge levy;\n(b) The recommendations of the GST Council possess a binding constitutional status on all State and Union legislatures; and\n(c) Under Article 246A, Parliament possesses plenary power over inter-state and import transactions.",
    "statutoryApplicability": [
      "Article 246A (Special Provision with respect to Goods and Services Tax)",
      "Article 269A (Levy and Collection of GST in course of Inter-State Trade or Commerce)",
      "Article 279A (Goods and Services Tax Council)",
      "101st Constitutional Amendment Act, 2016",
      "Union of India v. Mohit Minerals Pvt. Ltd. (2022 3-Judge Bench)",
      "Atiabari Tea Co. Ltd. v. State of Assam (1961 5-Judge Bench)",
      "Automobile Transport (Rajasthan) Ltd. v. State of Rajasthan (1962 7-Judge Bench)"
    ],
    "framingQuestions": [
      "Under Article 279A and Mohit Minerals (2022), are the recommendations of the GST Council binding or recommendatory upon Parliament and State Legislatures?",
      "How does Article 246A redefine the federal balance between the Union and the States regarding simultaneous legislative power?",
      "Can an extra-territorial service rendered by a foreign shipping line to a foreign exporter be subjected to IGST under the reverse charge mechanism on an Indian CIF importer?",
      "Does the levy of separate IGST on ocean freight in a composite CIF import violate the statutory scheme of composite supply under Section 8 of the CGST Act?"
    ],
    "modelAnswer": "1. NATURE OF GST COUNCIL RECOMMENDATIONS UNDER ARTICLE 279A: In Union of India v. Mohit Minerals Pvt. Ltd. (2022 3-Judge Bench, Chandrachud J.), the Supreme Court authoritatively held that the recommendations of the GST Council are NOT binding upon Parliament and State Legislatures. Article 279A(4) employs the word 'recommendations', which signifies a collaborative and persuasive process. To hold that the GST Council's decisions are binding would disrupt fiscal federalism and destroy the sovereign plenary law-making power conferred on legislatures under Article 246A.\n\n2. SIMULTANEOUS LEGISLATIVE POWER UNDER ARTICLE 246A: The 101st Constitutional Amendment Act, 2016 introduced Article 246A as a non-obstante clause overriding Articles 246 and 254. Unlike the traditional List-based separation where Union and States have exclusive domains, Article 246A creates a simultaneous legislative power. There is no traditional repugnancy where Union law automatically overrules State law; both legislatures possess coordinate authority, fostering 'uncooperative federalism' and dialogue.\n\n3. CIF CONTRACTS AND COMPOSITE SUPPLY: In a CIF import contract, the transportation of goods forms an inseparable, integral component of the composite supply of goods. Under Section 8 of the CGST Act, a composite supply must be taxed as a single supply of principal goods. When IGST is levied at customs clearance on the full CIF value of goods, levying a second IGST on the estimated ocean freight component under reverse charge constitutes impermissible fragmentation and double taxation.\n\n4. CONCLUSION ON NOTIFICATIONS: The Supreme Court in Mohit Minerals (2022) struck down Notification No. 8/2017 and 10/2017 as ultra vires the IGST Act, holding that an Indian importer cannot be saddled with reverse charge liability for ocean freight on CIF imports where the service was contracted and paid abroad.",
    "markingRubric": [
      {
        "criterion": "Analysis of Mohit Minerals (2022) holding GST Council recommendations to be recommendatory",
        "marks": 4
      },
      {
        "criterion": "Operation of simultaneous legislative power under Article 246A overriding Article 254 repugnancy",
        "marks": 3
      },
      {
        "criterion": "Composite supply doctrine under Section 8 CGST Act and CIF import taxability",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d15-cs6-q1",
        "question": "In Union of India v. Mohit Minerals Pvt. Ltd. (2022 3-Judge Bench), what did the Supreme Court hold regarding the legal nature of recommendations issued by the GST Council under Article 279A?",
        "options": [
          "They are absolute constitutional edicts with the status of parliamentary statutes",
          "They have persuasive value only and are recommendatory, not binding on Parliament or State Legislatures",
          "They immediately amend the Seventh Schedule of the Constitution without need for legislation",
          "They are binding on State Legislatures but optional for the Union Parliament"
        ],
        "correctIndex": 1,
        "explanation": "Mohit Minerals (2022) held that under Article 279A, GST Council recommendations are recommendatory. Both Parliament and State Legislatures possess simultaneous legislative competence under Article 246A.",
        "testedDimension": "Landmark Ratio",
        "articleRef": "Article 279A"
      },
      {
        "id": "d15-cs6-q2",
        "question": "How does the legislative architecture of Article 246A differ fundamentally from the traditional legislative distribution under Article 246 of the Constitution?",
        "options": [
          "Article 246A confers exclusive taxing power solely on the Union Parliament over all goods",
          "Article 246A provides for simultaneous legislative power to both Union and States without traditional Union supremacy or Article 254 repugnancy",
          "Article 246A transfers all sales taxation powers to the President under Article 356",
          "Article 246A abolishes State Legislatures from enacting any fiscal measures"
        ],
        "correctIndex": 1,
        "explanation": "Article 246A is a sui generis constitutional provision conferring simultaneous power on Parliament and State Legislatures to make laws with respect to goods and services tax, without a hierarchy.",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Article 246A"
      },
      {
        "id": "d15-cs6-q3",
        "question": "Which constitutional amendment introduced Article 246A, Article 269A, and Article 279A to implement the unified Goods and Services Tax (GST) regime in India?",
        "options": [
          "99th Constitutional Amendment Act, 2014",
          "101st Constitutional Amendment Act, 2016",
          "103rd Constitutional Amendment Act, 2019",
          "106th Constitutional Amendment Act, 2023"
        ],
        "correctIndex": 1,
        "explanation": "The Constitution (101st Amendment) Act, 2016 paved the way for the nationwide GST by introducing Articles 246A, 269A, and 279A.",
        "testedDimension": "Article Threshold",
        "articleRef": "Article 279A"
      },
      {
        "id": "d15-cs6-q4",
        "question": "Under Article 269A, who has the exclusive power to levy and collect Goods and Services Tax on supplies made in the course of inter-State trade or commerce?",
        "options": [
          "The State from which the goods originated exclusively",
          "The Government of India, with proceeds apportioned between the Union and States as per law enacted by Parliament",
          "The GST Council directly without parliamentary appropriation",
          "The Reserve Bank of India"
        ],
        "correctIndex": 1,
        "explanation": "Article 269A(1) provides that GST on supplies in the course of inter-State trade or commerce shall be levied and collected by the Government of India and apportioned between Union and States as provided by Parliament.",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Article 269A"
      }
    ]
  },
  {
    "id": "d15-cs7",
    "caseNumber": 7,
    "title": "Ordinance-Making Power & Executive Usurpation: Fraud on the Constitution (Articles 123 & 213)",
    "legalTheme": "Articles 123, 213, Executive Law-Making, Separation of Powers, Re-promulgation, Krishna Kumar Singh",
    "factualMatrix": "In an agrarian State facing severe financial distress, the State Legislative Assembly fails to pass a controversial Land Acquisition and Mining Concessions Bill due to intense opposition filibustering. Exactly 48 hours after the Assembly is prorogued by the Governor, the Governor issues an Ordinance under Article 213 titled the 'State Mining Exploitation Ordinance, 2024'. The Ordinance extinguishes certain ancestral tenancy rights and vests mining clearances directly in a state-owned corporation. \n\nWhen the State Legislature convenes for its budget session two months later, the Government intentionally does not lay the Ordinance before the Legislative Assembly or introduce a replacing bill, knowing that the coalition partners will defeat it. Instead, as soon as the session is prorogued after 30 days, the Governor re-promulgates the identical Ordinance. This cycle of promulgation, non-laying, prorogation, and re-promulgation is repeated consecutively five times across three years. \n\nDuring the currency of the fourth re-promulgated Ordinance, substantial mining leases are executed and private agricultural lands are compulsorily taken over. When the fifth Ordinance finally lapses due to inadvertent failure to re-promulgate within six weeks of the next legislative sitting, affected farmers and public interest bodies file a writ petition under Article 226 before the High Court. \n\nThe petitioners contend that:\n(i) Re-promulgation of ordinances without legislative approval is a fraud on the Constitution; and\n(ii) All mining concessions granted under the lapsed unconstitutional ordinances are null and void ab initio.\n\nThe State Government argues that:\n(a) The satisfaction of the Governor under Article 213 is subjective and non-justiciable; and\n(b) Rights and leases created while an ordinance was active survive even after the ordinance lapses, by virtue of Article 213(2) conferring the same force and effect as an Act of the Legislature.",
    "statutoryApplicability": [
      "Article 123 (Power of President to Promulgate Ordinances)",
      "Article 213 (Power of Governor to Promulgate Ordinances)",
      "R.C. Cooper v. Union of India (Bank Nationalisation Case 1970 11-Judge Bench)",
      "A.K. Roy v. Union of India (1982 5-Judge Constitution Bench)",
      "D.C. Wadhwa v. State of Bihar (1987 5-Judge Constitution Bench)",
      "Krishna Kumar Singh v. State of Bihar (2017 7-Judge Constitution Bench)"
    ],
    "framingQuestions": [
      "Under D.C. Wadhwa (1987) and Krishna Kumar Singh (2017), is the mechanical re-promulgation of an ordinance without placing it before the legislature a fraud on the Constitution?",
      "To what extent is the Governor's 'satisfaction' under Article 213(1) subject to judicial review?",
      "What is the legal effect of an ordinance that ceases to operate: do rights, liabilities, and leases created thereunder survive permanently as enduring rights?",
      "Does the requirement to lay an ordinance before the legislature under Article 213(2)(a) constitute a mandatory constitutional obligation?"
    ],
    "modelAnswer": "1. RE-PROMULGATION AS A FRAUD ON THE CONSTITUTION: In D.C. Wadhwa v. State of Bihar (1987 5-Judge Bench, Bhagwati CJI) and decisively reaffirmed by a 7-Judge Constitution Bench in Krishna Kumar Singh v. State of Bihar (2017, Chandrachud J.), the Supreme Court held that the ordinance-making power under Articles 123 and 213 is an extraordinary emergency power to deal with unforeseen situations when the legislature is not in session. Re-promulgating ordinances repeatedly without placing them before the elected legislature bypasses the constitutional process of legislation and constitutes a subversion of representative democracy and a fraud on the Constitution.\n\n2. JUSTICIABILITY OF EXECUTIVE SATISFACTION: In R.C. Cooper (1970) and Krishna Kumar Singh (2017), the Court affirmed that the satisfaction of the President under Article 123 or the Governor under Article 213 is not immune from judicial review. A constitutional court can examine whether the requisite satisfaction was based on any objective material or was an exercise in colorable power or malafide executive abuse.\n\n3. MANDATORY NATURE OF THE TABLING REQUIREMENT: Krishna Kumar Singh (2017) authoritatively ruled that laying the ordinance before the legislature under Article 213(2)(a) is mandatory. Failure to lay an ordinance is a serious constitutional infraction, depriving the legislature of its constitutional prerogative to approve or disapprove the measure.\n\n4. SURVIVAL OF RIGHTS AFTER LAPSE (REVERSIBILITY TEST): The 7-Judge Bench in Krishna Kumar Singh overruled earlier interpretations suggesting permanent survival of completed transactions. The Court held that an ordinance is an ephemeral, temporary law. When an ordinance ceases to operate, rights created under it do NOT automatically become enduring or permanent. Whether rights survive depends on whether undoing them is physically impossible or would cause irreversible public harm. In the present case, since the mining leases were granted under unconstitutional, fraudulently re-promulgated ordinances, they do not survive and must be revoked.",
    "markingRubric": [
      {
        "criterion": "Analysis of Krishna Kumar Singh (2017 7-Judge Bench) on re-promulgation as fraud on the Constitution",
        "marks": 4
      },
      {
        "criterion": "Mandatory constitutional duty of laying ordinances under Article 213(2)(a)",
        "marks": 3
      },
      {
        "criterion": "Reversibility doctrine regarding survival of rights and leases upon lapse of an ordinance",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d15-cs7-q1",
        "question": "In the landmark 7-Judge Constitution Bench decision in Krishna Kumar Singh v. State of Bihar (2017), what was held regarding the repeated re-promulgation of ordinances without legislative approval?",
        "options": [
          "It is a valid exercise of sovereign executive power protected by Article 361",
          "It constitutes a subversion of democratic legislative processes and a fraud on the Constitution",
          "It is permissible as long as the Governor remains in office",
          "It automatically converts the State into a Union Territory"
        ],
        "correctIndex": 1,
        "explanation": "Krishna Kumar Singh (2017 7-Judge Bench) settled that the mechanical re-promulgation of ordinances without tabling them before the legislature is an unconstitutional usurpation of legislative power and a fraud on the Constitution.",
        "testedDimension": "Landmark Ratio",
        "articleRef": "Article 213"
      },
      {
        "id": "d15-cs7-q2",
        "question": "Under Articles 123(2) and 213(2), what is the maximum duration an ordinance can remain in force after the reassembly of the Legislature, unless disapproved earlier?",
        "options": [
          "14 days",
          "6 weeks",
          "6 months",
          "90 days"
        ],
        "correctIndex": 1,
        "explanation": "Both Articles 123(2)(a) and 213(2)(a) explicitly specify that an ordinance shall cease to operate at the expiration of six weeks from the reassembly of the legislature.",
        "testedDimension": "Article Threshold",
        "articleRef": "Article 213"
      },
      {
        "id": "d15-cs7-q3",
        "question": "Under Krishna Kumar Singh (2017), what is the legal consequence if the Executive fails to lay an ordinance before the Legislature after it convenes?",
        "options": [
          "It has no legal consequence because tabling is merely directory",
          "It is a constitutional infraction that invalidates the ordinance and violates parliamentary accountability",
          "The Chief Minister is automatically disqualified under the Tenth Schedule",
          "The President must impose financial emergency under Article 360"
        ],
        "correctIndex": 1,
        "explanation": "The 7-Judge Bench held that the requirement to lay an ordinance before the legislature is mandatory. Failure to do so constitutes constitutional misconduct.",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Article 213"
      },
      {
        "id": "d15-cs7-q4",
        "question": "When an ordinance lapses or ceases to operate, what test did the Supreme Court establish in Krishna Kumar Singh (2017) to determine whether actions taken under it survive?",
        "options": [
          "The absolute perpetuity rule under the General Clauses Act",
          "The test of public interest and reversibility (whether undoing the action is impossible or causes grave public harm)",
          "The subjective choice of the incumbent Chief Minister",
          "The commercial profitability of the beneficiary private corporations"
        ],
        "correctIndex": 1,
        "explanation": "Krishna Kumar Singh established that an ordinance is an ephemeral law. Rights created do not survive automatically; survival is evaluated based on whether reversing the action is impossible or would cause irreparable public injury.",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Article 226"
      }
    ]
  },
  {
    "id": "d15-cs8",
    "caseNumber": 8,
    "title": "Constitutional Clemency, Remission & The Appropriate Government: Articles 72/161 vs State Usurpation",
    "legalTheme": "Articles 72, 161, Section 473 BNSS (CrPC 432), Appropriate Government, Bilkis Bano, Fraudulent Remission",
    "factualMatrix": "In 2002, during communal riots in State 'G', horrific offences of gang-rape, multiple murders, and destruction of evidence were perpetrated against a family. Owing to widespread intimidation of witnesses and the breakdown of fair trial guarantees in State G, the Supreme Court, invoking its plenary powers, transferred the entire trial to the Special CBI Court in the neighboring State 'M'. In 2008, the Special Sessions Judge in State M convicted 11 accused persons and sentenced them to rigorous imprisonment for life, which was confirmed by the High Court of Bombay and the Supreme Court.\n\nAfter serving 14 years of imprisonment in a central jail in State G (where they had been transferred for custody), one of the convicts approached the Supreme Court under Article 32 seeking a direction to State G to consider his premature release under its 1992 Remission Policy. In May 2022, a 2-Judge Division Bench of the Supreme Court disposed of the petition, holding that since the crime was committed in State G and the convicts were incarcerated in State G, State G was the 'appropriate government' to consider remission.\n\nRelying on this order, the Home Department of State G constituted a Jail Advisory Committee. Suppressing adverse opinions from the trial judge in State M and the CBI, State G granted premature release and remission of sentence to all 11 life convicts on August 15, 2022. \n\nThe victim files an Article 32 writ petition before the Supreme Court challenging the remission orders, joined by public-spirited civil society organizations. The petitioners contend that:\n(i) State G had no jurisdiction whatsoever to grant remission;\n(ii) The May 2022 Supreme Court order was obtained by fraud, suppression of material facts, and misrepresentation; and\n(iii) The remission orders suffered from total non-application of mind, ignoring statutory prerequisites under Section 432 CrPC (now Section 473 BNSS).",
    "statutoryApplicability": [
      "Article 72 (Pardoning Powers of the President)",
      "Article 161 (Pardoning Powers of the Governor)",
      "Section 473 BNSS 2023 (former Section 432 & 433A CrPC - Remission Powers)",
      "Union of India v. V. Sriharan @ Murugan (2016 5-Judge Constitution Bench)",
      "Epuru Sudhakar v. Govt. of A.P. (2006 2-Judge Bench)",
      "Bilkis Yakub Rasool v. Union of India (2024 2-Judge Bench - Nagarathna & Bhuyan JJ.)",
      "Kehar Singh v. Union of India (1989 5-Judge Constitution Bench)"
    ],
    "framingQuestions": [
      "Under Section 432(7) CrPC (now Section 473(7) BNSS) and V. Sriharan (2016), which government is the 'Appropriate Government' competent to grant remission: the State where the offence occurred or the State where the accused was tried and sentenced?",
      "In Bilkis Yakub Rasool v. Union of India (2024), how did the Supreme Court deal with its own earlier coordinate bench judgment of May 2022 holding State G to be the appropriate government?",
      "What are the recognized grounds of judicial review governing the exercise of statutory remission and constitutional pardoning powers under Articles 72 and 161?",
      "What is the legal effect of fraud, suppression of judicial records, and usurping jurisdiction in executive remission orders?"
    ],
    "modelAnswer": "1. JURISDICTION OF THE 'APPROPRIATE GOVERNMENT': In Union of India v. V. Sriharan @ Murugan (2016 5-Judge Constitution Bench), the Supreme Court definitively settled that under Section 432(7) CrPC (now Section 473(7) BNSS), the 'Appropriate Government' competent to remit or commute a sentence is the Government of the State within whose territorial limits the trial court that convicted and sentenced the accused is situated, and NOT the State where the crime was committed or where the prisoner is lodged. Since the trial was transferred and conducted in the State of Maharashtra (State M), the Government of State M alone had the exclusive jurisdiction to consider remission.\n\n2. NULLITY OF PREVIOUS ORDER OBTAINED BY FRAUD IN BILKIS BANO (2024): In Bilkis Yakub Rasool v. Union of India (2024, Nagarathna and Bhuyan JJ.), the Supreme Court held that its earlier May 2022 order directing State G to consider remission was a nullity and non est in the eye of law because it was obtained by fraud, suppression of the binding 5-Judge Constitution Bench in Sriharan (2016), and misrepresentation. Fraud vitiates all judicial acts (Fraus et jus nunquam cohabitant). The Court held that a coordinate bench has jurisdiction to declare an earlier order obtained by fraud to be void.\n\n3. GROUNDS OF JUDICIAL REVIEW UNDER ARTICLES 72/161 AND STATUTORY REMISSION: In Epuru Sudhakar v. Govt. of A.P. (2006) and Kehar Singh (1989), the Supreme Court ruled that while the merits of clemency are executive functions, judicial review is available on grounds of: (a) non-application of mind; (b) order passed on extraneous or irrelevant considerations; (c) malafides; (d) total lack of jurisdiction; and (e) exclusion of mandatory judicial opinion of the convicting judge under Section 432(2) CrPC.\n\n4. CONCLUSION AND RESTORATION OF RULE OF LAW: The Supreme Court quashed the premature release orders issued by State G as ultra vires and an unlawful usurpation of power. Rejecting the plea of personal liberty of the convicts, the Court held that the Rule of Law must prevail over illegal executive benevolence and directed all 11 convicts to surrender back to jail immediately.",
    "markingRubric": [
      {
        "criterion": "Correct definition of 'Appropriate Government' under V. Sriharan (2016) and BNSS 473(7)",
        "marks": 4
      },
      {
        "criterion": "Principle that fraud vitiates judicial orders and nullity of May 2022 order in Bilkis Bano (2024)",
        "marks": 3
      },
      {
        "criterion": "Grounds of judicial review over executive clemency under Epuru Sudhakar & Kehar Singh",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d15-cs8-q1",
        "question": "Under the 5-Judge Constitution Bench decision in Union of India v. V. Sriharan (2016) reaffirmed in Bilkis Bano (2024), which State Government is the 'Appropriate Government' to grant remission of sentence?",
        "options": [
          "The State where the offence was originally committed",
          "The State within whose territorial jurisdiction the accused was tried, convicted, and sentenced",
          "The State where the convict is currently incarcerated",
          "The State where the convict maintains his permanent family residence"
        ],
        "correctIndex": 1,
        "explanation": "Section 432(7) CrPC (now BNSS Section 473(7)) as interpreted in Sriharan (2016) mandates that the State where the sentence was passed by the trial court is the Appropriate Government.",
        "testedDimension": "Landmark Ratio",
        "articleRef": "Article 161"
      },
      {
        "id": "d15-cs8-q2",
        "question": "In Bilkis Yakub Rasool v. Union of India (January 2024), on what primary ground did the Supreme Court declare its own coordinate bench order of May 2022 to be a nullity?",
        "options": [
          "Because the Supreme Court has no power of judicial review in Article 32 petitions",
          "Because the order was obtained by fraud, suppression of material facts, and contrary to the binding 5-Judge Bench in V. Sriharan",
          "Because the Union Home Minister did not countersign the order",
          "Because Parliament passed an ordinance nullifying the judgment"
        ],
        "correctIndex": 1,
        "explanation": "Justice Nagarathna held that fraud vitiates all judicial proceedings. The May 2022 order was obtained by misrepresentation and suppression of Sriharan, rendering it non est and void.",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Article 32"
      },
      {
        "id": "d15-cs8-q3",
        "question": "Under Epuru Sudhakar v. Govt. of A.P. (2006), which of the following is NOT a legitimate ground for judicial review of the pardoning power exercised under Article 72 or 161?",
        "options": [
          "That the order was passed without application of mind",
          "That the order was passed on extraneous, arbitrary, or politically partisan considerations",
          "The subjective inadequacy of the President's personal emotional sympathy towards the convict",
          "That the order suffers from malafides or racial/caste prejudice"
        ],
        "correctIndex": 2,
        "explanation": "Courts will not evaluate the subjective emotional sufficiency of clemency, but will strike down orders on grounds of non-application of mind, malafides, extraneous considerations, or ultra vires jurisdiction.",
        "testedDimension": "Article Threshold",
        "articleRef": "Article 72"
      },
      {
        "id": "d15-cs8-q4",
        "question": "What final judicial remedy did the Supreme Court order in Bilkis Bano (2024) upon quashing the illegal remission orders granted to the 11 life convicts?",
        "options": [
          "Awarding nominal fines against the convicts while allowing them to remain free",
          "Ordering all 11 convicts to surrender back to jail custody to serve their life sentences",
          "Transferring the convicts to a military detention camp",
          "Directing a retrial of the 2002 riot cases from the beginning"
        ],
        "correctIndex": 1,
        "explanation": "The Supreme Court strictly held that Rule of Law must prevail, quashed the remission orders, and ordered all 11 convicts to surrender to prison authorities within two weeks.",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Article 32"
      }
    ]
  },
  {
    "id": "d15-cs9",
    "caseNumber": 9,
    "title": "Retributive 'Bulldozer Justice' vs Constitutional Due Process: Separation of Powers & Rule of Law",
    "legalTheme": "Articles 14, 21, 300A, Separation of Powers, Punitive Demolitions, Natural Justice, Officer Personal Liability",
    "factualMatrix": "In a northern State, communal clashes erupt during a religious procession in Town 'T'. Following stone-pelting, the local police register multiple FIRs against 15 named individuals under Section 191(2) BNS 2023 (rioting) and Section 109 BNS 2023 (attempt to murder). \n\nWithin 24 hours of the FIRs being lodged and before any investigation is completed or charge sheet filed, senior administrative officers and municipal commissioners publicly declare to television channels that 'rioters will not be spared and their properties will be razed to the ground'. \n\nThe following morning, municipal authorities arrive with heavy earth-moving bulldozers and armed police battalions. They paste an ante-dated back-dated notice on the outer wall of the residences belonging to the accused persons, alleging that the properties violate municipal setbacks and master plan building bylaws. Within two hours of pasting the notice and without affording any opportunity of a hearing or time to remove belongings, the residential houses and commercial shops belonging to the accused (and their joint families, including aged parents and minor children) are completely demolished. \n\nThe affected family members, rendered homeless overnight, approach the Supreme Court under Article 32, seeking:\n(i) a declaration that punitive demolitions without due process violate Articles 14, 21, and 300A;\n(ii) reconstruction of their homes at State expense; and\n(iii) prosecution and heavy personal damages against the municipal and police officers involved.\n\nThe State Government justifies its actions by arguing that the demolitions were routine municipal removals of unauthorized encroachments on public roads, and that courts should not shield illegal constructions under the guise of civil liberties.",
    "statutoryApplicability": [
      "Article 14 (Equality before Law & Non-Arbitrariness)",
      "Article 21 (Right to Shelter & Dignity - Olga Tellis 1985)",
      "Article 300A (Right to Property as a Constitutional Right)",
      "In Re Directions in the matter of Demolition of Structures (November 2024 2-Judge Bench - Gavai & Viswanathan JJ.)",
      "Olga Tellis v. Bombay Municipal Corporation (1985 5-Judge Constitution Bench)",
      "Bachan Singh v. State of Punjab (1980 5-Judge Constitution Bench)"
    ],
    "framingQuestions": [
      "Does the Executive have any constitutional authority to demolish properties of an accused or convict as a punitive or retributive measure?",
      "What are the binding nationwide procedural guidelines formulated by the Supreme Court in the November 2024 'Bulldozer Demolition' judgment?",
      "How does the demolition of joint family property violate the rights of innocent co-inhabitants under Articles 14 and 21?",
      "Can executive officers who orchestrate illegal retaliatory demolitions be made personally liable to pay compensation and restore properties out of their personal salaries?"
    ],
    "modelAnswer": "1. USURPATION OF JUDICIAL POWERS & VIOLATION OF SEPARATION OF POWERS: In In Re Directions in the matter of Demolition of Structures (November 2024, Gavai and Viswanathan JJ.), the Supreme Court unequivocally ruled that the Executive cannot act as a judge, declare an accused person guilty, and inflict collective punishment by demolishing his property. Such 'bulldozer justice' is completely alien to the Rule of Law and strikes at the core of Separation of Powers. Even for a convicted criminal, the law does not permit demolition of his home as a punitive consequence of committing a crime.\n\n2. NATIONWIDE MANDATORY PROCEDURAL GUIDELINES (NOVEMBER 2024):\nThe Supreme Court laid down comprehensive pan-India directions under Article 142:\n(i) No demolition can be carried out without issuing a prior written show-cause notice giving at least 15 days' time from the date of personal service (or registered post and digital upload);\n(ii) The notice must specify the exact nature of the unauthorized construction, provisions violated, and specific grounds for demolition;\n(iii) The designated municipal authority must grant a personal hearing, consider the occupant's reply, and pass a speaking order;\n(iv) Even if a demolition order is passed, it shall not be enforced for 15 days to allow the affected party to seek legal redress before competent courts;\n(v) The entire demolition process must be videographed, and an inspection report prepared.\n(Exception: Encroachments on public roads, footpaths, railway tracks, or water bodies).\n\n3. VIOLATION OF ARTICLES 14, 21, AND 300A: The right to shelter is an integral component of the right to life under Article 21 (Olga Tellis 1985). Collective punishment visiting innocent spouses, children, and elderly parents for the alleged criminal conduct of one family member is barbaric, arbitrary, and violates Article 14. Furthermore, property cannot be deprived without authority of law under Article 300A.\n\n4. OFFICER PERSONAL LIABILITY AND RESTITUTION: The Supreme Court held that officials who order or execute demolitions in breach of these directions shall be held guilty of contempt of court and will be personally liable for restitution, including rebuilding the property at their personal expense and paying exemplary damages deducted directly from their salaries, besides facing criminal prosecution.",
    "markingRubric": [
      {
        "criterion": "Complete condemnation of punitive executive demolitions as violation of Separation of Powers & Rule of Law",
        "marks": 4
      },
      {
        "criterion": "Pan-India mandatory 15-day notice and due process directions in November 2024 Supreme Court judgment",
        "marks": 3
      },
      {
        "criterion": "Personal liability of delinquent officers for restitution and Article 21 right to shelter (Olga Tellis)",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d15-cs9-q1",
        "question": "In the landmark November 2024 judgment on demolition of structures (Gavai & Viswanathan JJ.), what did the Supreme Court rule regarding the Executive's power to demolish homes of accused persons?",
        "options": [
          "It is a valid emergency power to curb communal violence under Article 355",
          "The Executive cannot replace the Judiciary, declare guilt, or inflict retributive demolition; doing so completely violates the Rule of Law and Separation of Powers",
          "It is permissible provided the local Member of Parliament gives written authorization",
          "It is allowed if the accused fails to obtain anticipatory bail within 24 hours"
        ],
        "correctIndex": 1,
        "explanation": "The Supreme Court held that the Executive cannot become judge, jury, and executioner. Demolishing houses of accused persons is unconstitutional and subverts the Rule of Law.",
        "testedDimension": "Landmark Ratio",
        "articleRef": "Article 21"
      },
      {
        "id": "d15-cs9-q2",
        "question": "Under the pan-India directions issued in November 2024, what is the mandatory minimum notice period that municipal authorities must give to an occupant before taking any demolition action?",
        "options": [
          "24 hours",
          "48 hours",
          "At least 15 days from the date of service of notice",
          "30 days only if the property is valued over ₹1 crore"
        ],
        "correctIndex": 2,
        "explanation": "The Supreme Court mandated that no demolition can be carried out without a prior show-cause notice providing at least 15 days to respond, followed by an additional 15-day grace period after a speaking order.",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Article 14"
      },
      {
        "id": "d15-cs9-q3",
        "question": "Which landmark 5-Judge Constitution Bench held that the 'Right to Shelter' is an essential facet of the Right to Life guaranteed under Article 21 of the Constitution?",
        "options": [
          "Olga Tellis v. Bombay Municipal Corporation (1985)",
          "ADM Jabalpur v. Shivkant Shukla (1976)",
          "A.K. Gopalan v. State of Madras (1950)",
          "Minerva Mills v. Union of India (1980)"
        ],
        "correctIndex": 0,
        "explanation": "Olga Tellis (1985 5-Judge Bench) authoritatively established that right to livelihood and right to shelter form an integral part of the right to life under Article 21.",
        "testedDimension": "Article Threshold",
        "articleRef": "Article 21"
      },
      {
        "id": "d15-cs9-q4",
        "question": "What specific punitive accountability did the Supreme Court impose upon administrative and police officers who carry out illegal demolitions in violation of constitutional due process?",
        "options": [
          "Immunity under Section 197 CrPC without any financial liability",
          "Personal liability to pay damages and reconstruct the demolished structure at their own personal expense",
          "Automatic promotion to the state secretariat",
          "Transfer to another district with full retention of administrative seniority"
        ],
        "correctIndex": 1,
        "explanation": "The Supreme Court held that delinquent officers will be prosecuted for contempt and made personally liable to restore the property and pay exemplary damages out of their own pockets.",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Article 32"
      }
    ]
  },
  {
    "id": "d15-cs10",
    "caseNumber": 10,
    "title": "Democratic Governance, Electoral Integrity & EVM-VVPAT Verification: Articles 324 & 329(b)",
    "legalTheme": "Articles 324, 329(b), 19(1)(a), Free & Fair Elections, EVM-VVPAT Verification, Electoral Integrity, ADR Judgments",
    "factualMatrix": "During the conduct of a General Election to the House of the People (Lok Sabha), civil society organizations and political candidates approach the Supreme Court under Article 32 seeking far-reaching directions to the Election Commission of India (ECI). The petitioners urge:\n(i) 100% manual counting and cross-verification of Voter Verifiable Paper Audit Trail (VVPAT) paper slips against the electronic tallies recorded in the Control Units of Electronic Voting Machines (EVMs), as opposed to the existing protocol of randomly sampling five polling stations per assembly constituency;\n(ii) A return to traditional paper ballots if 100% VVPAT counting is unfeasible; and\n(iii) Giving physical custody of the VVPAT paper slip into the hands of the voter to deposit into a secure ballot box.\n\nThe petitioners base their arguments on:\n(a) The right to know of voters under Article 19(1)(a);\n(b) The constitutional doctrine that free and fair elections are part of the Basic Structure of the Constitution; and\n(c) The fear of potential malware tampering or source code hacking in microcontroller chips embedded in the Symbol Loading Units (SLUs) and Ballot Units.\n\nThe Election Commission of India opposes the petition, submitting that:\n(1) Article 329(b) bars judicial interference in the ongoing electoral process;\n(2) Electronic Voting Machines are standalone, battery-operated computers with no internet, Wi-Fi, or Bluetooth connectivity;\n(3) Over 4 crore VVPAT slips have been sampled and matched across past general and assembly elections with zero discrepancies attributable to machine fraud; and\n(4) 100% manual slip counting would delay election results by weeks and reintroduce human counting errors and booth-capturing vulnerabilities.",
    "statutoryApplicability": [
      "Article 324 (Superintendence, Direction and Control of Elections)",
      "Article 329(b) (Bar to Interference by Courts in Electoral Matters)",
      "Article 19(1)(a) (Right to Know as facet of Freedom of Speech)",
      "Mohinder Singh Gill v. Chief Election Commissioner (1978 5-Judge Bench)",
      "Subramanian Swamy v. Election Commission of India (2013 2-Judge Bench - VVPAT Introduction)",
      "Association for Democratic Reforms v. Election Commission of India (April 2024 2-Judge Bench - Sanjiv Khanna & Dipankar Datta JJ.)",
      "Anoop Baranwal v. Union of India (2023 5-Judge Constitution Bench - ECI Selection)"
    ],
    "framingQuestions": [
      "Under ADR v. Election Commission of India (April 2024), did the Supreme Court mandate 100% VVPAT slip verification or return to paper ballots?",
      "What new technological verification safeguards and protocols did the Supreme Court introduce in April 2024 to enhance voter trust in EVM microcontrollers?",
      "How does the constitutional bar under Article 329(b) interact with the plenary power of the Supreme Court to issue directions ensuring free and fair elections under Article 32 and Article 324?",
      "What is the statutory recourse available to candidates who place second or third to challenge the integrity of microcontrollers after results are declared?"
    ],
    "modelAnswer": "1. REJECTION OF 100% VVPAT COUNTING & PAPER BALLOTS: In Association for Democratic Reforms v. Election Commission of India (April 2024 2-Judge Bench, Sanjiv Khanna and Dipankar Datta JJ.), the Supreme Court unanimously rejected the prayer for 100% physical counting of VVPAT slips and dismissed the demand to revert to paper ballots. The Court observed that blind distrust of public institutions and technology is counter-productive. Reverting to paper ballots would bring back well-documented electoral maladies such as ballot-box stuffing, booth capturing, and delayed counting.\n\n2. NEW VERIFICATION PROTOCOLS INTRODUCED IN APRIL 2024:\nTo enhance institutional transparency, the Supreme Court introduced two crucial safeguards:\n(i) Sealing and Storage of Symbol Loading Units (SLUs): The SLUs, which load party symbols into the VVPAT units, must be sealed and secured in strong rooms for a period of 45 days post-announcement of results, alongside the EVMs;\n(ii) Post-Result Microcontroller Audit: Candidates who finish second or third in the election can make a written request within 7 days of result declaration for verification of the burnt memory microcontroller chips of the EVM (Control Unit, Ballot Unit, and VVPAT) in up to 5% of EVMs per assembly segment. The verification must be conducted by the manufacturer's engineers (BEL/ECIL) in the presence of the candidate's representatives, with costs borne by the applicant (refunded if tampering is proven).\n\n3. ARTICLE 329(b) INTERACTION WITH ARTICLE 324: In Mohinder Singh Gill (1978 5-Judge Bench), the Supreme Court clarified that Article 329(b) bars judicial intervention that interrupts, delays, or stalls an election in progress. However, judicial directions that subserve and facilitate the free and fair conduct of elections without halting the poll schedule are fully permissible under Articles 32 and 226.\n\n4. CONCLUSION ON ELECTORAL INTEGRITY: The Supreme Court held that the existing architecture—comprising standalone EVMs, mock polls, administrative multi-layered sealing, and randomized 5-station VVPAT sampling—provides robust guarantees for free and fair elections while maintaining rapid result declaration.",
    "markingRubric": [
      {
        "criterion": "Analysis of ADR v. ECI (April 2024) rejecting 100% VVPAT slip counting and paper ballots",
        "marks": 4
      },
      {
        "criterion": "Specific new safeguards introduced: 45-day SLU sealing and 5% post-result microcontroller audit",
        "marks": 3
      },
      {
        "criterion": "Harmonization of Article 329(b) bar with Article 324 free and fair election mandate (Mohinder Singh Gill)",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d15-cs10-q1",
        "question": "In Association for Democratic Reforms v. Election Commission of India (April 2024), what was the Supreme Court's ruling on the demand to revert to paper ballots or conduct 100% manual VVPAT counting?",
        "options": [
          "It accepted the demand and ordered a complete return to paper ballots for all future elections",
          "It rejected both demands, holding that blind distrust of standalone EVM technology is unjustified and paper ballots lead to booth-capturing",
          "It directed that each voter be allowed to carry their VVPAT slip home as proof of voting",
          "It referred the entire electoral system to the United Nations for international supervision"
        ],
        "correctIndex": 1,
        "explanation": "The Supreme Court in ADR v. ECI (April 2024) firmly rejected reverting to paper ballots or 100% VVPAT slip counting, finding that EVMs are secure standalone systems with sufficient safeguards.",
        "testedDimension": "Landmark Ratio",
        "articleRef": "Article 324"
      },
      {
        "id": "d15-cs10-q2",
        "question": "What novel post-election verification mechanism did the Supreme Court introduce in ADR v. ECI (April 2024) for candidates securing 2nd or 3rd position?",
        "options": [
          "An immediate re-election in the entire constituency funded by the candidate",
          "A right to seek technical verification of the burnt memory microcontroller of up to 5% of EVMs per assembly segment by manufacturer engineers",
          "A mandatory CBI inquiry against the Returning Officer in every constituency",
          "An automatic seat in the Rajya Sabha as a consolation remedy"
        ],
        "correctIndex": 1,
        "explanation": "The Supreme Court enabled candidates placing second or third to apply within 7 days of results to have the microcontrollers of 5% of EVMs per assembly segment verified by engineers from BEL/ECIL.",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Article 324"
      },
      {
        "id": "d15-cs10-q3",
        "question": "Under the 5-Judge Constitution Bench in Mohinder Singh Gill v. Chief Election Commissioner (1978), how is the bar under Article 329(b) reconciled with judicial review?",
        "options": [
          "Article 329(b) prohibits any judicial challenge whatsoever even by election petition after results are announced",
          "Article 329(b) bars any judicial action that obstructs or delays the election in progress, but permits actions that facilitate or subserve the completion of the election",
          "Courts have unlimited jurisdiction to stay elections at any intermediate stage",
          "The bar applies only to municipal elections and not parliamentary polls"
        ],
        "correctIndex": 1,
        "explanation": "Mohinder Singh Gill (1978) settled that judicial review cannot be used to interrupt the election process, but any proceeding that facilitates the prompt completion of the poll is not barred by Article 329(b).",
        "testedDimension": "Article Threshold",
        "articleRef": "Article 329(b)"
      },
      {
        "id": "d15-cs10-q4",
        "question": "Under Article 329(b), through what exclusive legal remedy can the election of a returned candidate to the Lok Sabha or State Legislative Assembly be called in question?",
        "options": [
          "A civil suit for damages in the District Court",
          "An Election Petition presented to the High Court in accordance with the Representation of the People Act, 1951",
          "A memorandum submitted directly to the Prime Minister",
          "A review petition before the Election Commission of India"
        ],
        "correctIndex": 1,
        "explanation": "Article 329(b) explicitly mandates that no election to either House of Parliament or state legislature shall be called in question except by an election petition presented to such authority as provided by law (High Court under RPA 1951).",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Article 329(b)"
      }
    ]
  }
];
