import type { BootcampComprehensionCaseStudy } from '../bootcampTypes';

export const DAY14_COMPREHENSION_CASE_STUDIES: BootcampComprehensionCaseStudy[] = [
  {
    "id": "d14-cs1",
    "caseNumber": 1,
    "title": "The Stare Decisis Hierarchy: Co-Equal Benches vs Larger Benches (Article 141)",
    "legalTheme": "Precedent Hierarchy, Article 141, Stare Decisis, Larger vs Smaller Benches, Circumstantial Evidence Standards",
    "factualMatrix": "In a sensational double murder trial pending before the Principal Sessions Judge in Jammu, the prosecution relies on circumstantial evidence, including ballistics, call detail records (CDRs), and recovery of the murder weapon under Section 23 of the Bharatiya Sakshya Adhiniyam, 2023 (former Section 27 IEA). At the stage of final arguments, defense counsel moves an application urging the Sessions Court to record an immediate acquittal, citing a 2022 judgment rendered by a 2-Judge Division Bench of the Supreme Court. That 2022 judgment had held that circumstantial evidence can never be the sole basis of conviction unless corroborated by continuous, unbroken CCTV footage from the scene of crime. \n\nThe Chief Prosecuting Officer (CPO) vehemently opposes the defense application, arguing that the 2022 judgment is per incuriam and contrary to the hallowed 5-Judge Constitution Bench judgment in Govinda Reddy v. State of Mysore (1960) and the 3-Judge Bench in Sharad Birdhichand Sarda v. State of Maharashtra (1984), which laid down the classic \"Panchsheel\" (five golden principles) governing circumstantial evidence without any mandatory requirement of CCTV coverage. Defense counsel contends that under Article 141, the 2022 decision is later in point of time and must be followed as the living law of the land by all subordinate courts.",
    "statutoryApplicability": [
      "Article 141 (Binding Nature of Supreme Court Precedents)",
      "Union of India v. Raghubir Singh (1989 5-Judge Constitution Bench)",
      "Central Board of Dawoodi Bohra Community v. State of Maharashtra (2005 5-Judge Constitution Bench)",
      "Sharad Birdhichand Sarda v. State of Maharashtra (1984 3-Judge Bench)",
      "BSA 2023 Section 23 (Discovery of Fact)"
    ],
    "framingQuestions": [
      "Under Article 141 and Central Board of Dawoodi Bohra Community (2005), when a conflict arises between an earlier larger bench and a subsequent smaller bench, which precedent governs the Sessions Court?",
      "Can a 2-Judge Bench of the Supreme Court overrule, dilute, or add mandatory conditions to a legal standard settled by a 3-Judge or 5-Judge Constitution Bench?",
      "What is the procedural course mandated for a bench of the Supreme Court if it doubts the correctness of an earlier coordinate or larger bench decision?",
      "How must the Sessions Judge evaluate the evidentiary standard of circumstantial evidence in the present trial?"
    ],
    "modelAnswer": "1. BENCH STRENGTH PREVAILS OVER RECENCY UNDER ARTICLE 141: In Union of India v. Raghubir Singh (1989 5-Judge Bench, Pathak CJI) and Central Board of Dawoodi Bohra Community v. State of Maharashtra (2005 5-Judge Bench, Lahoti CJI), the Supreme Court definitively codified the rules of Stare Decisis: the authority of a judicial precedent depends upon the numerical bench strength of the court that pronounced it, and NOT upon the recency of the decision. A 3-Judge Bench decision (Sharad Birdhichand Sarda 1984) and a 5-Judge Constitution Bench (Govinda Reddy 1960) bind all subsequent 2-Judge Benches.\n\n2. SMALLER BENCHES CANNOT DILUTE LARGER BENCH HOLDINGS: A 2-Judge Bench has no constitutional or institutional competence to overrule or dilute the ratio of a larger bench. In National Insurance Co. Ltd. v. Pranay Sethi (2017 5-Judge Bench), the Court affirmed that judicial discipline mandates that smaller benches must adhere to larger bench precedents. An observation of a 2-Judge Bench contrary to a 3-Judge Bench is per incuriam.\n\n3. MANDATORY REFERENCE MECHANISM: Under Pradip Chandra Parija v. Pramod Chandra Patnaik (2002 5-Judge Bench) and Dawoodi Bohra (2005), if a 2-Judge Bench doubts the correctness of a 3-Judge Bench, it cannot directly overrule it or refer it to a 5-Judge Bench. It must refer the matter to a 3-Judge Bench; only if that 3-Judge Bench concurs in the doubt can the papers be placed before the Chief Justice of India for constituting a 5-Judge Constitution Bench.\n\n4. APPLICATION TO SESSIONS TRIAL: The Sessions Judge is strictly bound by Article 141 to follow the 3-Judge Bench in Sharad Birdhichand Sarda (1984) and Govinda Reddy (1960). The defense argument that CCTV footage is mandatory as per the 2022 2-Judge Bench must be rejected as contrary to the binding larger bench precedent. The court must evaluate the circumstantial chain based on the five golden principles.",
    "markingRubric": [
      {
        "criterion": "Primacy of bench strength over recency under Article 141 (Raghubir Singh & Dawoodi Bohra)",
        "marks": 4
      },
      {
        "criterion": "Rule of reference and incompetence of smaller benches under Pradip Chandra Parija (2002)",
        "marks": 3
      },
      {
        "criterion": "Correct application of Sharad Birdhichand Sarda Panchsheel to circumstantial evidence",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d14-cs1-q1",
        "question": "Under Article 141 and Central Board of Dawoodi Bohra Community (2005), which factor determines the binding precedential authority of a Supreme Court judgment?",
        "options": [
          "The recency of the decision in point of time",
          "The total numerical bench strength of the court that delivered the decision",
          "Whether the judgment was authored by the Chief Justice of India",
          "The volume of citations in international legal journals"
        ],
        "correctIndex": 1,
        "explanation": "Dawoodi Bohra (2005 5-Judge Bench) and Raghubir Singh (1989 5-Judge Bench) established that total bench strength is decisive. A larger bench decision binds all smaller benches regardless of recency.",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Article 141"
      },
      {
        "id": "d14-cs1-q2",
        "question": "If a 2-Judge Bench of the Supreme Court doubts the correctness of a prior 3-Judge Bench decision, what procedure must it follow under Pradip Chandra Parija (2002)?",
        "options": [
          "It can overrule the 3-Judge Bench directly if both judges agree",
          "It must refer the matter to a bench of 3 Judges; it cannot directly refer it to a 5-Judge Constitution Bench",
          "It must stay the trial court proceedings across India",
          "It must advise the President to seek an opinion under Article 143"
        ],
        "correctIndex": 1,
        "explanation": "In Pradip Chandra Parija (2002 5-Judge Bench), the Supreme Court ruled that judicial discipline requires a 2-Judge Bench doubting a 3-Judge Bench to refer it first to a 3-Judge Bench, preserving institutional hierarchy.",
        "testedDimension": "Landmark Ratio",
        "articleRef": "Article 141"
      },
      {
        "id": "d14-cs1-q3",
        "question": "What is the legal effect of a 2-Judge Bench judgment that lays down a rule contrary to an earlier 3-Judge Bench decision without noticing or referring the earlier decision?",
        "options": [
          "It automatically overrules the earlier 3-Judge Bench",
          "It is rendered per incuriam and carries no binding precedential authority under Article 141 to the extent of the conflict",
          "It becomes a Basic Structure principle",
          "It can only be challenged before the International Court of Justice"
        ],
        "correctIndex": 1,
        "explanation": "A decision rendered in ignorance or disregard of an authoritative larger bench decision is per incuriam and does not possess binding precedential value under Article 141 (MCD v. Gurnam Kaur 1989).",
        "testedDimension": "Article Threshold",
        "articleRef": "Article 141"
      },
      {
        "id": "d14-cs1-q4",
        "question": "In the present factual matrix, how should the Principal Sessions Judge rule on the defense application demanding CCTV footage?",
        "options": [
          "Grant an immediate acquittal following the 2022 2-Judge Bench",
          "Reject the application and apply the 3-Judge Bench ruling in Sharad Birdhichand Sarda (1984), evaluating whether the circumstantial chain is complete and points conclusively to the guilt of the accused",
          "Refer the murder case to the High Court under Section 438 BNSS",
          "Order the investigating officer to install CCTV cameras retrospectively"
        ],
        "correctIndex": 1,
        "explanation": "The Sessions Judge is bound under Article 141 to follow the larger bench ruling in Sharad Birdhichand Sarda (1984). The absence of CCTV footage is not fatal if the circumstantial chain satisfies the five golden principles.",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Article 141 & BSA 2023"
      }
    ]
  },
  {
    "id": "d14-cs2",
    "caseNumber": 2,
    "title": "The Doctrines of Per Incuriam and Sub Silentio in Criminal Proceedings",
    "legalTheme": "Per Incuriam Doctrine, Sub Silentio Principle, Article 141 Binding Force, Section 37 NDPS Bail Mandate, Parity Limits",
    "factualMatrix": "In a high-profile prosecution under the Narcotic Drugs and Psychotropic Substances Act, 1985 (NDPS Act) involving commercial quantity of heroin, the Special Judge NDPS rejected the regular bail application of the accused under Section 37 of the NDPS Act. The accused approached the High Court under Section 483 BNSS (former Section 439 CrPC). Before the High Court Single Judge, the defense counsel cited an earlier order of a coordinate Single Judge of the same High Court in a similar commercial quantity case, where bail was granted on the sole ground that the accused had spent 8 months in custody. \n\nIn that cited precedent, neither the defense nor the Public Prosecutor had cited Section 37 of the NDPS Act, and the learned Single Judge had made no reference whatsoever to the mandatory twin conditions (reasonable grounds for believing that the accused is not guilty, and not likely to commit any offense while on bail). The Senior Public Prosecutor opposes the bail application, contending that the precedent relied upon by the defense was delivered \"per incuriam\" of the statutory mandate of Section 37 NDPS and passed \"sub silentio\" on the core question of law. Defense counsel argues that coordinate benches are bound by stare decisis to maintain parity.",
    "statutoryApplicability": [
      "Section 37 NDPS Act, 1985 (Twin Conditions for Bail)",
      "Article 141 & High Court Precedent Rules",
      "Municipal Corporation of Delhi v. Gurnam Kaur (1989 3-Judge Bench)",
      "State of U.P. v. Synthetics and Chemicals Ltd. (1991 2-Judge Bench)",
      "State of M.P. v. Kajad (2001 2-Judge Bench)"
    ],
    "framingQuestions": [
      "What are the essential elements required to establish that a judicial decision was rendered \"Per Incuriam\"?",
      "Under Municipal Corporation of Delhi v. Gurnam Kaur (1989), what is the legal meaning and precedential effect of a decision passed \"Sub Silentio\"?",
      "Does the principle of parity require a High Court judge to follow an earlier coordinate bench order that granted bail in flagrant violation of a mandatory statutory provision?",
      "Can a High Court Single Judge decline to follow a coordinate Single Judge order if it is demonstrably per incuriam?"
    ],
    "modelAnswer": "1. ESSENTIALS OF DOCTRINE OF PER INCURIAM: A judicial decision is rendered \"per incuriam\" (through lack of care) when it is given in ignorance or forgetfulness of: (a) An express statutory provision having mandatory force of law; or (b) A binding decision of a superior court or larger bench of coordinate jurisdiction (MCD v. Gurnam Kaur 1989 3-Judge Bench). Here, the coordinate judge granted bail in a commercial quantity narcotics case in complete ignorance of Section 37 NDPS Act, rendering it per incuriam.\n\n2. DOCTRINE OF SUB SILENTIO: In MCD v. Gurnam Kaur (1989) and State of U.P. v. Synthetics and Chemicals Ltd. (1991), the Supreme Court adopted the classic common law rule: a decision passes sub silentio on a point of law when the point was neither perceived by the court, nor argued by counsel, nor considered in the judgment. A point passed sub silentio does NOT lay down a ratio decidendi and carries zero precedential authority.\n\n3. PARITY CANNOT BE FOUNDED ON ILLEGALITY: In State of M.P. v. Kajad (2001) and Union of India v. Mohanlal (2016), the Supreme Court held that Section 37 NDPS Act is mandatory. Parity is an equitable doctrine derived from Article 14. Article 14 is a positive concept; there is no negative equality. A prior illegal order passed in breach of statute cannot create an enforceable right of parity.\n\n4. POWER OF COORDINATE BENCH TO DISREGARD PER INCURIAM ORDER: While judicial discipline requires coordinate benches of the High Court to respect earlier decisions, a decision that is palpably per incuriam and passed sub silentio is not a binding precedent under the rule of stare decisis. The Single Judge is fully entitled to disregard the prior order and must independently apply the twin conditions under Section 37 NDPS Act.",
    "markingRubric": [
      {
        "criterion": "Definition and elements of Per Incuriam under MCD v. Gurnam Kaur (1989)",
        "marks": 4
      },
      {
        "criterion": "Exposition of the Doctrine of Sub Silentio (Synthetics & Chemicals 1991)",
        "marks": 3
      },
      {
        "criterion": "Rejection of negative parity under Article 14 and strict enforcement of Section 37 NDPS",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d14-cs2-q1",
        "question": "Under Municipal Corporation of Delhi v. Gurnam Kaur (1989 3-Judge Bench), when is a judicial decision said to have passed \"Sub Silentio\"?",
        "options": [
          "When the judge delivers the judgment orally without signing the transcript",
          "When the particular point of law involved in the decision was neither raised by counsel nor perceived or considered by the court",
          "When the hearing is conducted in camera without press presence",
          "When the judgment is pronounced during high court vacation"
        ],
        "correctIndex": 1,
        "explanation": "In Gurnam Kaur (1989), the Supreme Court ruled that a decision passes sub silentio when a particular point of law was neither argued by counsel nor present to the mind of the court. Such an unconsidered point does not create precedent.",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Article 141"
      },
      {
        "id": "d14-cs2-q2",
        "question": "What is the legal consequence of a decision being rendered \"Per Incuriam\"?",
        "options": [
          "The judgment must be rewritten by the Law Ministry",
          "The decision lacks binding precedential authority and courts are not bound to follow it under the doctrine of stare decisis",
          "The advocate who argued the case is barred from practice for one year",
          "The decree must be executed through the President under Article 142"
        ],
        "correctIndex": 1,
        "explanation": "A decision delivered per incuriam (in ignorance of a binding statute or superior precedent) carries no binding value and need not be followed by coordinate or subordinate courts.",
        "testedDimension": "Landmark Ratio",
        "articleRef": "Article 141"
      },
      {
        "id": "d14-cs2-q3",
        "question": "Can an accused claim bail on the ground of \"Parity\" under Article 14 by relying on an earlier bail order of a coordinate bench that was passed in direct violation of Section 37 NDPS Act?",
        "options": [
          "Yes, parity is an absolute fundamental right that overrides statutory provisions",
          "No, Article 14 guarantees positive equality; there is no concept of \"negative equality\" to perpetuate an illegal or per incuriam order",
          "Yes, if the accused deposits double the surety amount",
          "Only if the state government gives consent in writing"
        ],
        "correctIndex": 1,
        "explanation": "In State of M.P. v. Kajad (2001) and Basheshar Nath (1959), the Supreme Court settled that Article 14 embodies positive equality. An order passed in breach of a mandatory statute cannot form the basis of a claim for parity.",
        "testedDimension": "Article Threshold",
        "articleRef": "Article 14 & Section 37 NDPS"
      },
      {
        "id": "d14-cs2-q4",
        "question": "Under Suganthi Suresh Kumar v. Jagdeeshan (2002 2-Judge Bench), can a High Court Single Judge declare a judgment of the Supreme Court to be per incuriam?",
        "options": [
          "Yes, if the High Court finds an obvious factual mistake in the Supreme Court judgment",
          "No, judicial discipline under Article 141 strictly prohibits High Courts and subordinate courts from declaring a Supreme Court decision to be per incuriam",
          "Yes, but only with the prior concurrence of the High Court Collegium",
          "Only in criminal trials involving offenses punishable with death"
        ],
        "correctIndex": 1,
        "explanation": "In Suganthi Suresh Kumar (2002), the Supreme Court ruled that it is not open to High Courts or subordinate courts to hold that a decision of the Supreme Court was rendered per incuriam. Discipline under Article 141 requires lower courts to follow Supreme Court declarations.",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Article 141"
      }
    ]
  },
  {
    "id": "d14-cs3",
    "caseNumber": 3,
    "title": "The Sub-Classification in Scheduled Castes Lineage: Overruling of E.V. Chinnaiah",
    "legalTheme": "Sub-Classification of Scheduled Castes, Overruling of E.V. Chinnaiah, Articles 14 & 16(4) Substantive Equality, Creamy Layer Concept",
    "factualMatrix": "The State of Punjab enacted Section 4(5) of the Punjab Scheduled Castes and Backward Classes (Reservation in Services) Act, 2006, providing that fifty percent of the vacancies reserved for the Scheduled Castes in direct recruitment shall be offered to Balmikis and Mazhabi Sikhs, subject to their availability, by way of first preference among the Scheduled Castes. Members of other Scheduled Castes communities challenged the provision before the Punjab & Haryana High Court, arguing that under the 5-Judge Constitution Bench judgment in E.V. Chinnaiah v. State of Andhra Pradesh (2004), the Scheduled Castes specified in the Presidential List under Article 341 constitute a single homogenous and indivisible class. \n\nThe High Court struck down Section 4(5) of the Punjab Act as unconstitutional in view of the binding ratio of Chinnaiah. The State of Punjab appealed to the Supreme Court. A 5-Judge Bench doubted Chinnaiah and referred the matter to a larger Constitution Bench. On August 1, 2024, a 7-Judge Constitution Bench in State of Punjab v. Davinder Singh delivered its historic verdict by a 6:1 majority.",
    "statutoryApplicability": [
      "Articles 14, 15(4), 16(4) & 341",
      "State of Punjab v. Davinder Singh (2024 7-Judge Constitution Bench, 6:1)",
      "E.V. Chinnaiah v. State of Andhra Pradesh (2004 5-Judge Constitution Bench)",
      "Indra Sawhney v. Union of India (1992 9-Judge Constitution Bench)",
      "M. Nagaraj v. Union of India (2006 5-Judge Constitution Bench)"
    ],
    "framingQuestions": [
      "What was the primary constitutional rationale adopted by the 7-Judge Constitution Bench in State of Punjab v. Davinder Singh (2024) to overrule E.V. Chinnaiah (2004)?",
      "Does sub-classification of Scheduled Castes by a State Legislature amount to tampering with or amending the Presidential List under Article 341(2)?",
      "What were the crucial observations made by Justice B.R. Gavai and other concurring judges regarding the application of the \"Creamy Layer\" principle to Scheduled Castes?",
      "What are the mandatory constitutional limitations and safeguards imposed by the Supreme Court on the State's power to sub-classify Scheduled Castes?"
    ],
    "modelAnswer": "1. OVERRULING OF E.V. CHINNAIAH (2004): On August 1, 2024, the 7-Judge Constitution Bench (6:1 Majority, CJI Chandrachud) expressly OVERRULED E.V. Chinnaiah (2004). The majority held that the Scheduled Castes are NOT a homogenous, monolithic class. Centuries of systemic discrimination have created varied degrees of backwardness within the Scheduled Castes. Substantive equality under Article 14 and Article 16(4) permits the State to treat unequals unequally within the class.\n\n2. NO TINKERING WITH ARTICLE 341: The Court held that sub-classification for affirmative action does NOT tinker with the Presidential List under Article 341. Article 341 is an identification mechanism for conferring the status of Scheduled Caste. Sub-classification under Article 16(4) is merely a measure of proportional allocation or preference among identified castes without adding or deleting any caste from the Presidential List.\n\n3. CREAMY LAYER EXCLUSION IN SC/ST RESERVATION: In concurring opinions, Justice B.R. Gavai, Justice Vikram Nath, Justice Pankaj Mithal, and Justice Satish Chandra Sharma observed that the State must evolve a policy to identify and exclude the \"creamy layer\" among Scheduled Castes and Scheduled Tribes. Justice Gavai noted that children of affluent SC/ST families who have enjoyed elite advantages cannot be equated with the children of manual scavengers.\n\n4. CONSTITUTIONAL SAFEGUARDS AND LIMITATIONS: The 7-Judge Bench laid down two strict conditions: (a) Sub-classification cannot be based on political whims or appeasement; it must be backed by quantifiable, empirical data demonstrating inadequate representation of the favored sub-caste; (b) The State cannot allocate 100% of the SC reservation quota to a single sub-group, which would amount to total exclusion of other sub-castes.",
    "markingRubric": [
      {
        "criterion": "Doctrinal foundation of Davinder Singh (2024 7-Judge Bench) overruling Chinnaiah (2004)",
        "marks": 4
      },
      {
        "criterion": "Distinction between identification under Article 341 and allocation under Article 16(4)",
        "marks": 3
      },
      {
        "criterion": "Creamy layer observations and empirical data safeguards",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d14-cs3-q1",
        "question": "In State of Punjab v. Davinder Singh (August 1, 2024 7-Judge Bench), what was the decisive ratio overruling E.V. Chinnaiah (2004)?",
        "options": [
          "Scheduled Castes form an indivisible, homogenous group that cannot be touched by any legislature",
          "Scheduled Castes are not a monolithic homogenous group; historical disparities exist within them, and States possess constitutional competence under Articles 15(4) and 16(4) to sub-classify them for affirmative action",
          "All reservations for Scheduled Castes must be phased out within five years",
          "Only Parliament by law under Article 341(2) can grant preferential treatment to sub-castes"
        ],
        "correctIndex": 1,
        "explanation": "The 6:1 majority held that SCs are heterogeneous and unequal. To achieve true substantive equality, the State can grant preferential reservation to the most marginalized sub-groups.",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Articles 14, 16(4) & 341"
      },
      {
        "id": "d14-cs3-q2",
        "question": "How did the 7-Judge Bench in Davinder Singh (2024) reconcile State sub-classification with the Presidential List under Article 341?",
        "options": [
          "It held that Article 341 has been implicitly repealed by the 105th Amendment",
          "It held that Article 341 is solely for the identification of castes entitled to SC status, whereas sub-classification under Article 16(4) is an affirmative action mechanism that does not add, subtract, or alter the castes listed in the Presidential notification",
          "It held that State Governors can amend the Presidential List independently",
          "It held that the President must seek approval from the National Commission for SCs"
        ],
        "correctIndex": 1,
        "explanation": "Article 341 identifies the castes that constitute the class. Sub-classification does not alter membership in the list; it merely apportions reservation benefits among members based on degree of backwardness.",
        "testedDimension": "Landmark Ratio",
        "articleRef": "Article 341 & Article 16(4)"
      },
      {
        "id": "d14-cs3-q3",
        "question": "Which judge authored the solitary dissenting opinion in State of Punjab v. Davinder Singh (2024)?",
        "options": [
          "Justice B.R. Gavai",
          "Justice Vikram Nath",
          "Justice Bela M. Trivedi",
          "Justice Pankaj Mithal"
        ],
        "correctIndex": 2,
        "explanation": "Justice Bela M. Trivedi dissented, holding that the Presidential List under Article 341 cannot be sub-divided or tinkered with by State legislation without an Act of Parliament.",
        "testedDimension": "Article Threshold",
        "articleRef": "Article 341"
      },
      {
        "id": "d14-cs3-q4",
        "question": "What mandatory condition did the 7-Judge Bench impose on State Governments before implementing any sub-classification within Scheduled Castes?",
        "options": [
          "Approval by a 2/3rd majority of the State Legislative Assembly",
          "The State must produce quantifiable, empirical data demonstrating the inadequate representation of the sub-caste, and cannot allocate 100% of the quota to one sub-caste",
          "Prior clearance from the International Labour Organization (ILO)",
          "Consent of all sitting SC legislators"
        ],
        "correctIndex": 1,
        "explanation": "The Supreme Court mandated that sub-classification cannot be an arbitrary political exercise. It must be supported by empirical data proving under-representation, and must not completely shut out other SC sub-castes.",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Article 14 & Article 16(4)"
      }
    ]
  },
  {
    "id": "d14-cs4",
    "caseNumber": 4,
    "title": "Legislative Bribery & Immunity Lineage: Overruling of P.V. Narasimha Rao",
    "legalTheme": "Legislative Bribery & Corruption, Overruling of P.V. Narasimha Rao, Articles 105(2) & 194(2) Functional Privilege, Prevention of Corruption Act",
    "factualMatrix": "In 2012, during an election to the Rajya Sabha from the State of Jharkhand, an elected Member of the Legislative Assembly (MLA) belonging to the Jharkhand Mukti Morcha (JMM) allegedly accepted illegal gratification of Rs. 1.5 crores from an independent candidate in exchange for promising to cast her vote in his favor. However, on the polling day, the MLA did not cast her vote for the independent candidate; instead, she cast her vote for the official candidate fielded by her own party. \n\nThe Central Bureau of Investigation (CBI) registered a regular case against the MLA under Section 7 and Section 12 of the Prevention of Corruption Act, 1988 (PC Act) and criminal conspiracy under the Indian Penal Code. The MLA approached the High Court seeking quashing of the chargesheet, relying upon the majority verdict of the 5-Judge Constitution Bench in P.V. Narasimha Rao v. State (CBI/SPE) (1998). In that 1998 decision, a 3:2 majority had held that legislators enjoy absolute constitutional immunity under Articles 105(2) and 194(2) from criminal prosecution for taking a bribe in respect of anything said or any vote given in the House. \n\nWhen the matter reached the Supreme Court in Sita Soren v. Union of India, a 5-Judge Bench referred the case to a 7-Judge Constitution Bench to reconsider the correctness of P.V. Narasimha Rao. On March 4, 2024, the 7-Judge Bench delivered a unanimous verdict.",
    "statutoryApplicability": [
      "Articles 105(2) & 194(2) (Parliamentary & Legislative Privileges)",
      "Sita Soren v. Union of India (2024 7-Judge Constitution Bench, Unanimous)",
      "P.V. Narasimha Rao v. State (CBI/SPE) (1998 5-Judge Constitution Bench, 3:2)",
      "Prevention of Corruption Act, 1988 (Section 7)",
      "Article 14 & Rule of Law"
    ],
    "framingQuestions": [
      "What was the unanimous ratio laid down by the 7-Judge Constitution Bench in Sita Soren v. Union of India (2024) overruling P.V. Narasimha Rao (1998)?",
      "At what precise moment is the criminal offense of bribery complete under the Prevention of Corruption Act, 1988?",
      "How did the 7-Judge Bench resolve the bizarre anomaly created by the 1998 majority in P.V. Narasimha Rao?",
      "What is the true constitutional purpose of legislative privileges guaranteed under Articles 105(2) and 194(2)?"
    ],
    "modelAnswer": "1. UNANIMOUS OVERRULING OF P.V. NARASIMHA RAO: On March 4, 2024, a 7-Judge Constitution Bench headed by Chief Justice D.Y. Chandrachud unanimously OVERRULED the 3:2 majority in P.V. Narasimha Rao v. State (1998). The Court held that parliamentary privilege under Article 105(2) and legislative privilege under Article 194(2) do NOT immunize an MP or MLA from criminal prosecution for accepting a bribe to cast a vote or make a speech in the House.\n\n2. COMPLETION OF OFFENSE OF BRIBERY: The Court held that the offense of bribery under Section 7 of the Prevention of Corruption Act, 1988 is complete the moment the public servant accepts or agrees to accept undue gratification. The offense does not depend on whether the promised speech is made or the promised vote is cast. Since the criminal act occurs prior to and outside the legislative proceedings, it has no nexus with legitimate parliamentary function.\n\n3. ELIMINATION OF THE 1998 PARADOX: Under P.V. Narasimha Rao (1998), an MP who accepted a bribe and voted as promised enjoyed constitutional immunity, whereas an MP who took a bribe but listened to his conscience and did not vote was liable to be prosecuted (e.g. Ajit Singh). The 7-Judge Bench discarded this absurd result, holding that it rewarded corrupt compliance and penalized honest retreat.\n\n4. FUNCTIONAL PURPOSE OF PRIVILEGE: Articles 105(2) and 194(2) exist to protect the collective deliberative integrity of the House and ensure that lawmakers can debate fearlessly without harassment. Privilege is functional, not a personal license for corruption. Bribery destroys constitutional democracy and subverts the Rule of Law.",
    "markingRubric": [
      {
        "criterion": "Unanimous holding of Sita Soren (2024 7-Judge Bench) overruling PV Narasimha Rao",
        "marks": 4
      },
      {
        "criterion": "Point of completion of bribery under Section 7 PC Act independent of voting",
        "marks": 3
      },
      {
        "criterion": "Analysis of functional purpose of Articles 105(2)/194(2) and elimination of anomaly",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d14-cs4-q1",
        "question": "In Sita Soren v. Union of India (March 4, 2024), what was the unanimous verdict of the 7-Judge Constitution Bench regarding legislative immunity under Articles 105(2) and 194(2)?",
        "options": [
          "Legislators enjoy absolute immunity from all criminal prosecutions including murder and bribery",
          "Articles 105(2) and 194(2) do not confer immunity on legislators facing criminal prosecution for accepting bribes to make a speech or cast a vote in the legislature",
          "Immunity is available only to members of the ruling coalition",
          "Prosecution can be initiated only if approved by a referendum of voters"
        ],
        "correctIndex": 1,
        "explanation": "The 7-Judge Bench unanimously held that legislative privilege does not protect bribery. Corruption erodes the foundation of democratic governance.",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Articles 105(2) & 194(2)"
      },
      {
        "id": "d14-cs4-q2",
        "question": "Under the Prevention of Corruption Act, 1988 and the ratio in Sita Soren (2024), when is the offense of bribery complete?",
        "options": [
          "Only after the legislator casts the vote in favor of the bribe-giver",
          "The moment the legislator accepts or agrees to accept the bribe, regardless of whether the speech is made or vote is cast",
          "Only after the money is recovered by the police",
          "When the Speaker of the House certifies the vote"
        ],
        "correctIndex": 1,
        "explanation": "Bribery is complete upon agreeing to accept or accepting the illegal gratification. It does not depend on performance of the promised act.",
        "testedDimension": "Landmark Ratio",
        "articleRef": "PC Act Section 7 & Article 194(2)"
      },
      {
        "id": "d14-cs4-q3",
        "question": "What grotesque paradox of the 1998 P.V. Narasimha Rao majority verdict was specifically dismantled by the 7-Judge Bench in Sita Soren?",
        "options": [
          "Ministers were given immunity while ordinary MPs were jailed",
          "An MP who took a bribe and voted according to the corrupt pact enjoyed immunity, while an MP who took a bribe but did not vote as promised was prosecuted",
          "Judges could be tried by military courts",
          "Rajya Sabha elections were declared non-legislative"
        ],
        "correctIndex": 1,
        "explanation": "The 1998 judgment produced the absurd paradox that voting corruptly conferred immunity, while backing out of the corrupt deal made the MP liable to prosecution.",
        "testedDimension": "Article Threshold",
        "articleRef": "Articles 105(2) & 194(2)"
      },
      {
        "id": "d14-cs4-q4",
        "question": "Does the ratio in Sita Soren (2024) apply to votes cast by MLAs in elections to the Council of States (Rajya Sabha)?",
        "options": [
          "No, Rajya Sabha elections are purely executive appointments",
          "Yes, the 7-Judge Bench expressly held that votes cast in Rajya Sabha elections are part of legislative proceedings covered by the judgment, and bribery in such elections is fully punishable",
          "Only if the election takes place through secret ballot",
          "Only if the candidate is an NRI"
        ],
        "correctIndex": 1,
        "explanation": "The Supreme Court held that voting in Rajya Sabha elections falls within the ambit of legislative duty and elections; accepting bribes to vote in RS polls is fully prosecutable.",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Article 194(2) & Article 80"
      }
    ]
  },
  {
    "id": "d14-cs5",
    "caseNumber": 5,
    "title": "The Minority Educational Institution Lineage: Overruling of S. Azeez Basha",
    "legalTheme": "Article 30(1) Minority Educational Rights, Overruling of S. Azeez Basha, The Genesis Test, Statutory Incorporation vs Establishment",
    "factualMatrix": "Aligarh Muslim University (AMU) was originally established as the Muhammadan Anglo-Oriental (MAO) College in 1877 by Sir Syed Ahmad Khan to educate Muslims of India. In 1920, the Imperial Legislative Council passed the Aligarh Muslim University Act, 1920, incorporating the institution as a Central University. In 1967, a 5-Judge Constitution Bench of the Supreme Court in S. Azeez Basha v. Union of India ruled that AMU was not a minority institution under Article 30(1) because it was brought into existence by an Act of Parliament, holding that the word \"establish\" in Article 30(1) means \"to bring into existence\" and since Parliament brought AMU into existence, the Muslim community could not claim to have established it.\n\nIn 1981, Parliament amended the AMU Act to declare that AMU was established by the Muslims of India. In 2005, AMU reserved 50% seats in postgraduate medical courses for Muslim candidates. The Allahabad High Court struck down the reservation and the 1981 amendment, holding that the statutory declaration could not overturn the binding constitutional holding in Azeez Basha. The Union and AMU appealed to the Supreme Court. A 7-Judge Constitution Bench was constituted. On November 8, 2024, the Supreme Court delivered its verdict (4:3 Majority).",
    "statutoryApplicability": [
      "Article 30(1) (Right of Minorities to Establish and Administer Educational Institutions)",
      "Aligarh Muslim University v. Naresh Agarwal (2024 7-Judge Constitution Bench, 4:3)",
      "S. Azeez Basha v. Union of India (1967 5-Judge Constitution Bench)",
      "In Re Kerala Education Bill (1958 7-Judge Bench)",
      "T.M.A. Pai Foundation v. State of Karnataka (2002 11-Judge Bench)"
    ],
    "framingQuestions": [
      "What was the primary holding of the 4:3 majority in AMU v. Naresh Agarwal (2024) regarding the overruling of S. Azeez Basha (1967)?",
      "What is the \"Genesis Test\" formulated by Chief Justice D.Y. Chandrachud to determine minority status under Article 30(1)?",
      "Does the formal statutory incorporation of a university by an Act of Parliament automatically deprive it of Article 30(1) minority protection?",
      "Can an institution possessing minority status under Article 30(1) provide religious instruction or admission preference to minority community members?"
    ],
    "modelAnswer": "1. OVERRULING OF S. AZEEZ BASHA (1967): On November 8, 2024, the 7-Judge Constitution Bench (4:3 Majority, CJI Chandrachud) formally OVERRULED S. Azeez Basha (1967). The majority held that Azeez Basha committed a fundamental error by adopting an excessively formalistic interpretation that incorporation by an Act of Parliament equates to establishment by the State.\n\n2. THE GENESIS TEST: The Supreme Court formulated the \"Genesis Test\". To determine whether an educational institution is a minority institution under Article 30(1), the court must look beyond formal statutory incorporation and examine the historical genesis: (a) Who ideated the institution? (b) Who was the brain behind its establishment? (c) Whose funds and land brought it into being? (d) Was it founded primarily for the educational advancement of a religious or linguistic minority?\n\n3. STATUTORY INCORPORATION DOES NOT DESTROY MINORITY CHARACTER: The Court held that statutory incorporation is merely a legal modality to confer degree-granting powers and corporate personality. A minority community establishing an institution does not lose its Article 30(1) protection merely because it requested the State to grant it statutory recognition through an Act of Parliament.\n\n4. APPLICATION TO ADMISSION PREFERENCE: Under Article 30(1) read with In Re Kerala Education Bill (1958) and St. Stephen's College (1992), a minority educational institution is entitled to reserve seats or grant preference to candidates of its own community, subject to reasonable state regulations ensuring academic standards and merit. The question whether AMU factually satisfies the Genesis Test was remanded to a regular 3-Judge Bench.",
    "markingRubric": [
      {
        "criterion": "Overruling of S. Azeez Basha (1967 5-Judge Bench) by 7-Judge Bench in AMU (2024)",
        "marks": 4
      },
      {
        "criterion": "Exposition of the \"Genesis Test\" under Article 30(1)",
        "marks": 3
      },
      {
        "criterion": "Reconciliation of statutory incorporation with minority rights",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d14-cs5-q1",
        "question": "In Aligarh Muslim University v. Naresh Agarwal (November 8, 2024), what was the 4:3 majority holding regarding the 1967 Azeez Basha judgment?",
        "options": [
          "It affirmed Azeez Basha in all respects",
          "It expressly overruled Azeez Basha, holding that statutory incorporation by Parliament does not automatically extinguish an institution's Article 30(1) minority status",
          "It held that Article 30 applies only to schools, not universities",
          "It declared Article 30 unconstitutional under the Basic Structure"
        ],
        "correctIndex": 1,
        "explanation": "The 7-Judge Bench overruled Azeez Basha, rejecting the formalistic view that statutory incorporation strips an institution of minority character.",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Article 30(1)"
      },
      {
        "id": "d14-cs5-q2",
        "question": "What is the \"Genesis Test\" formulated by CJI Chandrachud in AMU v. Naresh Agarwal (2024)?",
        "options": [
          "Checking the percentage of foreign faculty members",
          "An inquiry into who ideated the institution, who provided the land and funds, and for whose benefit the institution was founded",
          "Verifying whether the university teaches theology in every semester",
          "Checking if the institution receives zero grants from the University Grants Commission"
        ],
        "correctIndex": 1,
        "explanation": "The Genesis Test investigates the historical origin, purpose, and founding community of the institution rather than its formal statutory shell.",
        "testedDimension": "Landmark Ratio",
        "articleRef": "Article 30(1)"
      },
      {
        "id": "d14-cs5-q3",
        "question": "Under Article 30(1), which two categories of minorities are recognized as possessing the right to establish and administer educational institutions?",
        "options": [
          "Economic and Caste minorities",
          "Religious and Linguistic minorities",
          "Regional and Political minorities",
          "Agricultural and Industrial minorities"
        ],
        "correctIndex": 1,
        "explanation": "Article 30(1) states: \"All minorities, whether based on religion or language, shall have the right to establish and administer educational institutions of their choice.\"",
        "testedDimension": "Article Threshold",
        "articleRef": "Article 30(1)"
      },
      {
        "id": "d14-cs5-q4",
        "question": "Under T.M.A. Pai Foundation (2002 11-Judge Bench), how is the minority status of a community determined?",
        "options": [
          "Nationally across the entire population of India",
          "State-wise, treating the State as the unit for determining both religious and linguistic minorities",
          "District-wise based on census tract numbers",
          "Municipality-wise based on local ward boundaries"
        ],
        "correctIndex": 1,
        "explanation": "In TMA Pai Foundation (2002 11-Judge Bench), the Supreme Court ruled that since linguistic reorganization formed States, the State is the unit for determining religious and linguistic minority status.",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Article 30(1)"
      }
    ]
  },
  {
    "id": "d14-cs6",
    "caseNumber": 6,
    "title": "Mineral Rights, Royalty and State Taxing Competence Lineage: Overruling of India Cements",
    "legalTheme": "Seventh Schedule Mineral Taxation, Overruling of India Cements, Royalty as Non-Tax Consideration, Entry 49 List II State Competence",
    "factualMatrix": "The State of Jharkhand enacted the Jharkhand Mineral Land Tax Act, levying a cess on lands holding minerals, calculated on the tonnage of mineral dispatch and surface area of the mine. Major mining public sector undertakings, including the Steel Authority of India Ltd. (SAIL), challenged the tax before the High Court. SAIL contended that the State legislature has no legislative competence to levy any tax on mineral production because: (1) In India Cements Ltd. v. State of Tamil Nadu (1990 7-Judge Constitution Bench), the Supreme Court held that \"royalty is a tax\"; (2) Parliament enacted the Mines and Minerals (Development and Regulation) Act, 1957 (MMDR Act) under Entry 54 of List I, declaring Union control over mineral regulation; and (3) Therefore, the State's taxing power under Entry 49 List II (taxes on lands and buildings) was completely denuded and occupied by the Union.\n\nThe High Court followed India Cements and struck down the tax. On appeal, a 3-Judge Bench noticed that a 5-Judge Bench in State of West Bengal v. Kesoram Industries (2004) had claimed that the statement \"royalty is a tax\" in India Cements was a typographical error. Due to this glaring conflict between a 7-Judge Bench and a 5-Judge Bench, the matter was referred to a 9-Judge Constitution Bench in Mineral Area Development Authority (MADA) v. SAIL. On July 25, 2024, the 9-Judge Bench delivered its verdict (8:1 Majority).",
    "statutoryApplicability": [
      "Entry 49, List II (Taxes on Lands and Buildings)",
      "Entry 54, List I (Regulation of Mines & Mineral Development)",
      "Entry 50, List II (Taxes on Mineral Rights subject to Parliament Limitations)",
      "MADA v. SAIL (July 25, 2024 9-Judge Constitution Bench, 8:1)",
      "India Cements Ltd. v. State of Tamil Nadu (1990 7-Judge Constitution Bench)"
    ],
    "framingQuestions": [
      "What was the 8:1 majority ratio of the 9-Judge Constitution Bench in MADA v. SAIL (2024) regarding the nature of Royalty under the MMDR Act?",
      "Does Parliament's power under Entry 54 List I strip State Legislatures of their competence to tax mineral-bearing lands under Entry 49 List II?",
      "Which judge authored the solitary dissenting opinion in MADA v. SAIL (2024)?",
      "What temporal conditions did the 9-Judge Bench impose regarding the recovery of past mineral tax arrears by States in its August 14, 2024 follow-up order?"
    ],
    "modelAnswer": "1. ROYALTY IS NOT A TAX: In MADA v. SAIL (July 25, 2024 9-Judge Bench, 8:1 Majority, CJI Chandrachud), the Supreme Court expressly OVERRULED India Cements (1990). The Court held that royalty is NOT a tax. A tax is an exaction for public purposes without quid pro quo, whereas royalty is a consideration paid by a mining lessee to the mineral owner (private or State) for the extraction of minerals.\n\n2. STATE TAXING COMPETENCE UNDER ENTRY 49 LIST II: The 9-Judge Bench ruled that Entry 54 List I is a regulatory entry, not a taxing entry. Under the constitutional scheme, regulatory entries do not encompass the power to levy taxes. State legislatures possess sovereign plenary competence under Entry 49 List II to levy taxes on \"lands and buildings\", which includes mineral-bearing land.\n\n3. SOLITARY DISSENT OF JUSTICE B.V. NAGARATHNA: Justice B.V. Nagarathna delivered the sole dissenting opinion, warning that allowing States to levy independent taxes on minerals would lead to unhealthy fiscal federalism, mineral arbitrage, and runaway economic inflation across the nation.\n\n4. PROSPECTIVE ARREARS CONDITION: In its follow-up order of August 14, 2024, the 9-Judge Bench balanced state revenue with industrial stability: (a) States cannot levy tax demands prior to April 1, 2005; (b) Arrears from April 1, 2005 to July 2024 can be recovered in equal annual installments over 12 years beginning April 1, 2026; (c) All interest and penalties on past dues were completely waived.",
    "markingRubric": [
      {
        "criterion": "Doctrinal holding in MADA (2024 9-Judge Bench) overruling India Cements (1990)",
        "marks": 4
      },
      {
        "criterion": "Distinction between regulatory power (Entry 54 List I) and taxing power (Entry 49 List II)",
        "marks": 3
      },
      {
        "criterion": "Analysis of Nagarathna J dissent and prospective recovery order",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d14-cs6-q1",
        "question": "In MADA v. SAIL (July 25, 2024 9-Judge Constitution Bench), what was the 8:1 majority holding on the nature of \"Royalty\" payable under the MMDR Act?",
        "options": [
          "Royalty is a tax under Entry 54 List I",
          "Royalty is NOT a tax; it is a consideration paid by a lessee for extracting minerals",
          "Royalty is a customs duty",
          "Royalty is a voluntary charitable contribution"
        ],
        "correctIndex": 1,
        "explanation": "Overruling India Cements (1990), the 9-Judge Bench held that royalty is not a tax; therefore, payment of royalty does not exclude State taxing power.",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Seventh Schedule & Entry 49 List II"
      },
      {
        "id": "d14-cs6-q2",
        "question": "Under which entry of the State List (List II) did the Supreme Court in MADA (2024) uphold the competence of State Legislatures to tax mineral-bearing lands?",
        "options": [
          "Entry 18 List II (Land)",
          "Entry 49 List II (Taxes on lands and buildings)",
          "Entry 54 List II (Taxes on sale of goods)",
          "Entry 60 List II (Taxes on professions)"
        ],
        "correctIndex": 1,
        "explanation": "The Supreme Court ruled that Entry 49 List II (\"Taxes on lands and buildings\") includes mineral-bearing lands, and mineral output can serve as a measure of the land's value.",
        "testedDimension": "Landmark Ratio",
        "articleRef": "Seventh Schedule List II Entry 49"
      },
      {
        "id": "d14-cs6-q3",
        "question": "Which judge authored the sole dissenting opinion in MADA v. SAIL (2024)?",
        "options": [
          "Justice B.R. Gavai",
          "Justice B.V. Nagarathna",
          "Justice Hrishikesh Roy",
          "Justice Abhay S. Oka"
        ],
        "correctIndex": 1,
        "explanation": "Justice B.V. Nagarathna dissented, holding that royalty is in the nature of a tax and MMDR Act leaves no room for States to impose levies on minerals.",
        "testedDimension": "Article Threshold",
        "articleRef": "Seventh Schedule & Entry 54 List I"
      },
      {
        "id": "d14-cs6-q4",
        "question": "Under the follow-up order dated August 14, 2024 in MADA v. SAIL, what cut-off date was fixed for the recovery of mineral tax arrears by States?",
        "options": [
          "January 26, 1950",
          "April 1, 2005 (with arrears payable in installments over 12 years without interest/penalties)",
          "July 25, 2024 only",
          "April 1, 2026"
        ],
        "correctIndex": 1,
        "explanation": "The 9-Judge Bench barred recovery for periods prior to April 1, 2005, and allowed recovery of arrears from 2005 to 2024 in 12 annual installments starting April 1, 2026.",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Article 142 & Prospective Overruling"
      }
    ]
  },
  {
    "id": "d14-cs7",
    "caseNumber": 7,
    "title": "Automatic Vacation of Interim Stay Orders: Overruling of Asian Resurfacing",
    "legalTheme": "Interim Stay Orders & High Court Article 226 Autonomy, Overruling of Asian Resurfacing, Article 142 Limits, Actus Curiae Neminem Gravabit",
    "factualMatrix": "In 2018, a 3-Judge Bench of the Supreme Court in Asian Resurfacing of Road Agency Pvt. Ltd. v. CBI issued a sweeping nationwide directive under Article 142 of the Constitution, holding that in all pending civil and criminal proceedings where an interim stay on trial has been granted by a High Court or subordinate court, the stay shall automatically expire after six months unless specifically extended by a speaking order. \n\nIn a criminal prosecution in Uttar Pradesh, the High Court under Section 482 CrPC had stayed criminal proceedings against an accused, finding a strong prima facie case of malicious prosecution. After six months had elapsed without the High Court taking up the matter due to an overwhelming backlog of cases, the Sessions Judge, relying strictly on Asian Resurfacing, issued non-bailable warrants against the accused and proceeded to frame charges. The High Court Bar Association of Allahabad challenged this practice before the Supreme Court. A 5-Judge Constitution Bench was constituted in High Court Bar Association Allahabad v. State of U.P. On February 29, 2024, the Supreme Court delivered its unanimous judgment.",
    "statutoryApplicability": [
      "Article 226 & Article 227 (High Court Writ & Superintendence Jurisdiction)",
      "Article 142 (Supreme Court Power to do Complete Justice)",
      "High Court Bar Association Allahabad v. State of U.P. (2024 5-Judge Bench, Unanimous)",
      "Asian Resurfacing of Road Agency Pvt. Ltd. v. CBI (2018 3-Judge Bench)",
      "Legal Maxim: Actus curiae neminem gravabit"
    ],
    "framingQuestions": [
      "What was the unanimous ratio of the 5-Judge Constitution Bench in HCBA Allahabad (2024) overruling Asian Resurfacing (2018)?",
      "Can the Supreme Court exercise its plenary powers under Article 142 to issue blanket legislative directives limiting the judicial powers of High Courts under Article 226?",
      "How does the Latin maxim \"Actus curiae neminem gravabit\" apply to interim stay orders in constitutional litigation?",
      "What are the constitutional parameters governing the vacation or modification of an interim stay order by a court of law?"
    ],
    "modelAnswer": "1. UNANIMOUS OVERRULING OF ASIAN RESURFACING (2018): On February 29, 2024, the 5-Judge Constitution Bench (unanimously authored by Abhay S. Oka J) expressly OVERRULED Asian Resurfacing. The Court held that fixing an automatic time-limit of six months for vacation of stay orders without hearing the parties or judicial application of mind is unconstitutional and arbitrary.\n\n2. ARTICLE 142 CANNOT SUBVERT HIGH COURT INDEPENDENCE: The Supreme Court held that High Courts are constitutional courts of record under Article 215 and not subordinate to the Supreme Court in the administrative hierarchy. Article 142 power cannot be utilized to enact judicial legislation or impose automatic expiry dates that curtail the constitutional jurisdiction of High Courts under Article 226.\n\n3. ACTUS CURIAE NEMINEM GRAVABIT: The Court invoked the cardinal Latin maxim \"Actus curiae neminem gravabit\" (an act of the court shall prejudice no man). A litigant who has satisfied the court on a prima facie case and secured an interim stay cannot be penalized or subjected to arrest simply because the High Court was unable to take up the matter due to docket congestion.\n\n4. PARAMETERS FOR VACATION OF STAY: An interim order once granted remains in force until: (a) The main proceedings are finally disposed of; or (b) An application for vacation/modification of stay is heard and decided on merits by a speaking judicial order after giving both parties a reasonable opportunity of being heard.",
    "markingRubric": [
      {
        "criterion": "Doctrinal holding in HCBA Allahabad (2024 5-Judge Bench) overruling Asian Resurfacing",
        "marks": 4
      },
      {
        "criterion": "Constitutional status of High Courts under Article 226 and limits of Article 142",
        "marks": 3
      },
      {
        "criterion": "Application of Actus curiae neminem gravabit and requirement of speaking order",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d14-cs7-q1",
        "question": "In High Court Bar Association Allahabad v. State of U.P. (February 29, 2024), what was the 5-Judge Constitution Bench ruling on automatic stay vacation?",
        "options": [
          "Stay orders automatically expire in 3 months instead of 6 months",
          "Automatic vacation of interim stay orders without application of judicial mind is unconstitutional; stays do not expire by flux of time without a reasoned judicial order",
          "High Courts have no power to grant stays in criminal cases",
          "All stays can only be granted by the Supreme Court collegium"
        ],
        "correctIndex": 1,
        "explanation": "The 5-Judge Bench held that stays cannot vanish automatically. Automatic vacation without hearing infringes natural justice and penalizes litigants for court backlogs.",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Article 226 & Article 142"
      },
      {
        "id": "d14-cs7-q2",
        "question": "Under HCBA Allahabad (2024), what is the relationship between Article 142 and the constitutional status of High Courts under Article 226?",
        "options": [
          "High Courts are subordinate courts bound by administrative circulars of the Supreme Court",
          "High Courts are constitutional courts not subordinate to the Supreme Court; Article 142 cannot be used to curtail or dictate the judicial discretion of High Courts under Article 226",
          "Article 142 gives the Supreme Court power to abolish High Court benches",
          "High Court judges must obtain permission from the CJI before granting stays"
        ],
        "correctIndex": 1,
        "explanation": "High Courts are sovereign constitutional courts within their spheres. Plenary power under Article 142 cannot be used to bypass Article 226 or legislate judicial time-limits.",
        "testedDimension": "Landmark Ratio",
        "articleRef": "Article 226 & Article 142"
      },
      {
        "id": "d14-cs7-q3",
        "question": "Which Latin maxim was centrally relied upon by the Supreme Court in HCBA Allahabad (2024) to protect litigants from automatic stay expiration?",
        "options": [
          "Caveat Emptor",
          "Actus curiae neminem gravabit (An act of the court shall prejudice no man)",
          "Falsus in uno falsus in omnibus",
          "Damnum sine injuria"
        ],
        "correctIndex": 1,
        "explanation": "Litigants who obtained a stay order cannot suffer prejudice because the court was unable to take up the matter due to docket explosion. \"Actus curiae neminem gravabit\" prevents this injustice.",
        "testedDimension": "Article Threshold",
        "articleRef": "Legal Maxims & Article 226"
      },
      {
        "id": "d14-cs7-q4",
        "question": "Under the 2024 judgment, what must a trial court do if an accused presents an interim stay order granted by the High Court more than 6 months ago?",
        "options": [
          "Issue an immediate non-bailable warrant against the accused",
          "Respect the stay order as continuing in force until formally vacated or modified by the High Court upon hearing the parties",
          "Dismiss the trial prosecution permanently",
          "Require the accused to pay Rs. 1 lakh per month of delay"
        ],
        "correctIndex": 1,
        "explanation": "Trial courts cannot treat stays as expired automatically. The stay continues until the High Court vacates or modifies it after hearing the parties.",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Article 226 & Criminal Procedure"
      }
    ]
  },
  {
    "id": "d14-cs8",
    "caseNumber": 8,
    "title": "The Privacy & Digital Surveillance Lineage: Overruling of M.P. Sharma & Kharak Singh",
    "legalTheme": "Fundamental Right to Privacy under Article 21, Overruling of M.P. Sharma & Kharak Singh, 3-Prong Proportionality Test, Article 20(3) Passcodes",
    "factualMatrix": "During an investigation into an encrypted hawala syndicate, cyber-crime police in Delhi obtained a search warrant from the Chief Metropolitan Magistrate under Section 94 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (former Section 93 CrPC). The police entered the residence of the primary suspect, seized his laptop, encrypted hard drives, and biometrically locked smartphone. The Investigating Officer (IO) demanded that the suspect provide his fingerprint to unlock the phone and also dictate the 16-character alphanumeric master password protecting his cloud-based financial ledgers. \n\nThe suspect refused, invoking his fundamental right against self-incrimination under Article 20(3) and his right to informational privacy under Article 21 as recognized in Justice K.S. Puttaswamy (2017 9-Judge Constitution Bench). The prosecution moves the court for contempt, arguing that: (1) Under the 8-Judge Bench in M.P. Sharma v. Satish Chandra (1954), search and seizure does not violate Article 20(3) because there is no fundamental right to privacy in the Indian Constitution; (2) Under the 6-Judge Bench in Kharak Singh v. State of U.P. (1962), physical surveillance and domiciliary visits by police do not infringe personal liberty.",
    "statutoryApplicability": [
      "Article 21 (Fundamental Right to Privacy & Personal Liberty)",
      "Article 20(3) (Protection Against Self-Incrimination)",
      "Justice K.S. Puttaswamy (Retd.) v. Union of India (2017 9-Judge Constitution Bench, Unanimous)",
      "M.P. Sharma v. Satish Chandra (1954 8-Judge Constitution Bench)",
      "Kharak Singh v. State of U.P. (1962 6-Judge Constitution Bench)",
      "State of Bombay v. Kathi Kalu Oghad (1961 11-Judge Constitution Bench)"
    ],
    "framingQuestions": [
      "What was the unanimous holding of the 9-Judge Constitution Bench in Puttaswamy (2017) regarding the overruling of M.P. Sharma (1954) and Kharak Singh (1962)?",
      "What is the 3-fold Proportionality Test established in Puttaswamy for any State interference with privacy?",
      "Under the 11-Judge Bench in Kathi Kalu Oghad (1961) and Selvi (2010), what is the legal distinction between compelling physical biometric impressions versus compelling mental passcodes?",
      "How does the constitutional right to privacy impact digital search and seizure of electronic devices?"
    ],
    "modelAnswer": "1. UNANIMOUS OVERRULING OF M.P. SHARMA AND KHARAK SINGH: In Justice K.S. Puttaswamy (Retd.) v. Union of India (2017 9-Judge Bench, Unanimous), the Supreme Court expressly OVERRULED the 8-Judge Bench in M.P. Sharma (1954) and the 6-Judge Bench in Kharak Singh (1962) to the extent that they held that privacy is not a fundamental right. The Court held that the right to privacy is an intrinsic part of the right to life and personal liberty under Article 21 and permeates Part III.\n\n2. THE 3-FOLD PROPORTIONALITY STANDARD: Any State intrusion into personal privacy must satisfy a threefold test: (a) Legality: There must be an existing law authorizing the intrusion; (b) Legitimate State Aim: The law must serve a legitimate state purpose (such as preventing crime or protecting national security); (c) Proportionality: The means adopted must be proportional to the object sought, being the least intrusive measure with adequate procedural safeguards against abuse.\n\n3. TESTIMONIAL COMPULSION (PASSWORDS VS BIOMETRICS): In State of Bombay v. Kathi Kalu Oghad (1961 11-Judge Bench) and Selvi v. State of Karnataka (2010 3-Judge Bench), the Supreme Court drew a sharp line: compelling physical characteristics (fingerprints, blood, DNA) is non-testimonial because they do not convey information based on personal knowledge. However, compelling an accused to disclose a password, PIN, or passphrase forces the accused to convey personal mental knowledge, which constitutes testimonial compulsion protected under Article 20(3).\n\n4. DIGITAL SEARCH PROTOCOLS: A smartphone is an intimate digital extension of a person's mind and life. Blanket, unconstrained cloning or searches without specific judicial warrants violate informational privacy. While police can seize physical hardware under a lawful warrant, they cannot compel disclosure of mental passwords under threat of penal sanction.",
    "markingRubric": [
      {
        "criterion": "Overruling of M.P. Sharma and Kharak Singh by 9-Judge Bench in Puttaswamy",
        "marks": 4
      },
      {
        "criterion": "Application of 3-fold proportionality test to digital surveillance",
        "marks": 3
      },
      {
        "criterion": "Distinction between physical biometrics and mental passcodes under Article 20(3)",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d14-cs8-q1",
        "question": "In Justice K.S. Puttaswamy (Retd.) v. Union of India (2017 9-Judge Constitution Bench), which two classic larger bench decisions were OVERRULED?",
        "options": [
          "A.K. Gopalan (1950) and Champakam Dorairajan (1951)",
          "M.P. Sharma v. Satish Chandra (1954 8-Judge) and Kharak Singh v. State of U.P. (1962 6-Judge)",
          "ADM Jabalpur (1976) and Shivkant Shukla (1976)",
          "Minerva Mills (1980) and Waman Rao (1981)"
        ],
        "correctIndex": 1,
        "explanation": "Puttaswamy (2017) overruled the 8-Judge Bench in M.P. Sharma and 6-Judge Bench in Kharak Singh, declaring privacy an inalienable fundamental right under Article 21.",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Article 21"
      },
      {
        "id": "d14-cs8-q2",
        "question": "What are the three mandatory requirements of the test laid down in Puttaswamy (2017) for any State interference with privacy?",
        "options": [
          "Approval by the Prime Minister, Chief Justice, and Leader of Opposition",
          "Legality (statutory law), Legitimate State Aim, and Proportionality (rational connection and least intrusive means)",
          "Gazette notification, 60 days public notice, and UN sanction",
          "Compensation of Rs. 10 lakhs, public hearing, and media streaming"
        ],
        "correctIndex": 1,
        "explanation": "Puttaswamy established the 3-prong test of Legality, Legitimate State Aim, and Proportionality for any state action encroaching upon privacy.",
        "testedDimension": "Landmark Ratio",
        "articleRef": "Article 21"
      },
      {
        "id": "d14-cs8-q3",
        "question": "Under the 11-Judge Constitution Bench in Kathi Kalu Oghad (1961) read with Selvi (2010), why does compelling an accused to disclose a mental passcode violate Article 20(3)?",
        "options": [
          "Because passwords are protected by copyright law",
          "Because disclosing a password conveys mental knowledge from the accused's mind, constituting \"testimonial compulsion\" prohibited by Article 20(3)",
          "Because phones are private property protected under Article 300A",
          "Because police are not authorized to use electronic devices"
        ],
        "correctIndex": 1,
        "explanation": "Testimonial compulsion under Article 20(3) bars forcing the accused to disclose personal mental knowledge. A password is an expression of mental knowledge.",
        "testedDimension": "Article Threshold",
        "articleRef": "Article 20(3)"
      },
      {
        "id": "d14-cs8-q4",
        "question": "In Puttaswamy (2017), what facets of the Right to Privacy were recognized as fundamental rights under Article 21?",
        "options": [
          "Only financial privacy in bank deposits",
          "Spatial privacy, Informational privacy, and Bodily/Decisional autonomy",
          "Only privacy of correspondence sent through the Indian Post Office",
          "Privacy is limited exclusively to married couples in private residences"
        ],
        "correctIndex": 1,
        "explanation": "Puttaswamy recognized multiple interconnected dimensions: spatial privacy, informational privacy, and bodily and decisional autonomy as integral to Article 21.",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Article 21"
      }
    ]
  },
  {
    "id": "d14-cs9",
    "caseNumber": 9,
    "title": "Adultery, Gender Autonomy & Marital Dignity Lineage: Overruling of Sowmithri Vishnu & Yusuf Abdul Aziz",
    "legalTheme": "Decriminalization of Adultery, Overruling of Yusuf Abdul Aziz & Sowmithri Vishnu, Articles 14 & 15 Manifest Arbitrariness, Gender Autonomy & Dignity",
    "factualMatrix": "Mr. X, an orthodox businessman, discovers that his wife, Mrs. Y, has been engaged in a consensual extramarital romantic and sexual relationship with Mr. Z. Infuriated, Mr. X lodges a formal criminal complaint before the Judicial Magistrate First Class under Section 497 of the Indian Penal Code (IPC), alleging adultery and enticement under Section 498 IPC. The Magistrate issues summons to Mr. Z. \n\nMr. Z files a quashing petition before the High Court, asserting that the Supreme Court of India in Joseph Shine v. Union of India (2018 5-Judge Constitution Bench) struck down Section 497 IPC as manifestly arbitrary and violative of Articles 14, 15, and 21. Mr. X's senior counsel opposes the petition, arguing that: (1) Under the 5-Judge Constitution Bench judgment in Yusuf Abdul Aziz v. State of Bombay (1954), Section 497 was upheld as a valid special provision for women under Article 15(3); (2) Under the 3-Judge Bench in Sowmithri Vishnu v. Union of India (1985), the Supreme Court held that the sanctity of marriage requires criminal punishment for outsiders who destroy the marital home; and (3) Decriminalizing adultery encourages moral breakdown of the family unit.",
    "statutoryApplicability": [
      "Articles 14, 15(1) & 21 (Equality, Non-Discrimination & Dignity)",
      "Joseph Shine v. Union of India (2018 5-Judge Constitution Bench, Unanimous)",
      "Yusuf Abdul Aziz v. State of Bombay (1954 5-Judge Constitution Bench)",
      "Sowmithri Vishnu v. Union of India (1985 3-Judge Bench)",
      "Section 497 IPC (Adultery) & Section 198(2) CrPC"
    ],
    "framingQuestions": [
      "What were the core constitutional grounds upon which the 5-Judge Bench in Joseph Shine (2018) struck down Section 497 IPC?",
      "How did the Supreme Court in Joseph Shine overrule the classic rulings in Yusuf Abdul Aziz (1954) and Sowmithri Vishnu (1985)?",
      "What did the Court hold regarding the concept of a woman as the \"property\" or \"chattel\" of her husband in marriage?",
      "Does the decriminalization of adultery eliminate adultery as a civil ground for divorce and matrimonial relief?"
    ],
    "modelAnswer": "1. UNCONSTITUTIONALITY OF SECTION 497 IPC: In Joseph Shine v. Union of India (2018 5-Judge Bench, Unanimous, Dipak Misra CJI), the Supreme Court struck down Section 497 IPC and Section 198(2) CrPC as unconstitutional. Section 497 was held to violate Article 14 (manifest arbitrariness), Article 15(1) (discrimination on grounds of sex), and Article 21 (dignity and autonomy of women).\n\n2. OVERRULING OF YUSUF ABDUL AZIZ AND SOWMITHRI VISHNU: The 5-Judge Bench expressly OVERRULED Yusuf Abdul Aziz (1954 5-Judge) and Sowmithri Vishnu (1985 3-Judge). The Court held that Article 15(3) permits \"beneficial\" provisions for women to overcome disadvantage, but cannot be invoked to perpetuate archaic, paternalistic stereotypes that treat married women as passive property devoid of sexual agency.\n\n3. DESTRUCTION OF THE CHATTEL THEORY: Under Section 497, adultery was an offense ONLY if committed without the consent or connivance of the husband. If the husband consented, no crime was committed. Thus, the law treated the wife as the exclusive chattel/property of her husband. CJI Dipak Misra famously held: \"A husband is not the master of the wife. Legal sovereignty of one sex over another is a concept unknown to our Constitution.\"\n\n4. RETENTION AS CIVIL GROUND FOR DIVORCE: The Court clarified that while adultery ceases to be a criminal offense attracting prison, it remains an unquestionable civil ground for dissolution of marriage and divorce under personal laws (Hindu Marriage Act, Special Marriage Act, etc.), as well as a ground for seeking maintenance and child custody.",
    "markingRubric": [
      {
        "criterion": "Overruling of Yusuf Abdul Aziz and Sowmithri Vishnu by 5-Judge Bench in Joseph Shine",
        "marks": 4
      },
      {
        "criterion": "Constitutional repudiation of the patriarchal chattel theory under Articles 14, 15, 21",
        "marks": 3
      },
      {
        "criterion": "Distinction between criminal offense and civil ground for divorce",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d14-cs9-q1",
        "question": "In Joseph Shine v. Union of India (2018 5-Judge Constitution Bench), which two previous Supreme Court decisions were expressly OVERRULED?",
        "options": [
          "State of Madras v. V.G. Row (1952) and Romesh Thappar (1950)",
          "Yusuf Abdul Aziz v. State of Bombay (1954 5-Judge) and Sowmithri Vishnu v. Union of India (1985 3-Judge)",
          "Maneka Gandhi (1978) and Sunil Batra (1978)",
          "Bachan Singh (1980) and Machhi Singh (1983)"
        ],
        "correctIndex": 1,
        "explanation": "Joseph Shine overruled Yusuf Abdul Aziz (1954) and Sowmithri Vishnu (1985), rejecting the archaic chattel theory of marriage.",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Articles 14, 15 & 21"
      },
      {
        "id": "d14-cs9-q2",
        "question": "Why did the Supreme Court in Joseph Shine hold that Section 497 IPC violated Article 14 on the ground of \"Manifest Arbitrariness\"?",
        "options": [
          "Because the punishment of 5 years was too light",
          "Because it made adultery an offense only when committed without the consent of the husband, treating the woman as chattel, and did not punish a married man who had relations with an unmarried woman",
          "Because it was not written in the Hindi language",
          "Because only military personnel were subjected to trial"
        ],
        "correctIndex": 1,
        "explanation": "Section 497 was manifestly arbitrary: if the husband consented, the sexual intercourse ceased to be an offense, demonstrating that the law protected the husband's ownership rights over the wife.",
        "testedDimension": "Landmark Ratio",
        "articleRef": "Article 14"
      },
      {
        "id": "d14-cs9-q3",
        "question": "How did Justice D.Y. Chandrachud in Joseph Shine (2018) characterize the effect of Section 497 IPC on a married woman's constitutional identity?",
        "options": [
          "It conferred beneficial affirmative action under Article 15(3)",
          "It destroyed a woman's sexual autonomy and personhood by subordinating her identity to her husband, reducing her to the status of a sub-human possession",
          "It gave women complete immunity from income tax",
          "It strengthened traditional joint family businesses"
        ],
        "correctIndex": 1,
        "explanation": "Justice Chandrachud observed that Section 497 deprived a married woman of agency, autonomy, and dignity under Article 21, perpetuating gender stereotypes.",
        "testedDimension": "Article Threshold",
        "articleRef": "Article 21 & Article 15"
      },
      {
        "id": "d14-cs9-q4",
        "question": "Following the judgment in Joseph Shine (2018), what is the legal status of adultery in Indian law?",
        "options": [
          "It is a bailable and compoundable criminal offense under Section 100 BNS",
          "It is completely abolished from all Indian statutes and carries zero legal consequence",
          "It is no longer a criminal offense, but continues to be a valid civil ground for divorce and matrimonial relief under personal laws",
          "It is punishable by a civil penalty of Rs. 50,000 imposed by the Magistrate"
        ],
        "correctIndex": 2,
        "explanation": "Decriminalization removes the penal sanction of imprisonment, but adultery remains an established civil ground for divorce under matrimonial statutes.",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Family Law & Article 21"
      }
    ]
  },
  {
    "id": "d14-cs10",
    "caseNumber": 10,
    "title": "The Electoral Transparency & Voter Information Lineage: From ADR (2002) to Electoral Bonds (2024)",
    "legalTheme": "Voter Right to Information under Article 19(1)(a), Electoral Bond Scheme Struck Down, Unlimited Corporate Donations Arbitrariness, Proportionality Test",
    "factualMatrix": "In 2017, Parliament introduced the Electoral Bond Scheme through the Finance Act, 2017, amending the Reserve Bank of India Act, 1934, the Representation of the People Act, 1951 (RPA), the Income Tax Act, 1961, and the Companies Act, 2013. The amendments: (1) Allowed any individual or corporate entity to purchase bearer bonds from the State Bank of India (SBI) in designated denominations and deposit them into political party accounts; (2) Created complete donor anonymity by exempting political parties from disclosing bond contributions under Section 29C RPA; (3) Removed the ceiling on corporate contributions (which was previously 7.5% of average net profits over 3 years under Section 182 Companies Act), permitting even newly-incorporated and loss-making shell companies to donate unlimited amounts; and (4) Exempted disclosure of donor identity to the Election Commission of India (ECI).\n\nThe Association for Democratic Reforms (ADR) and the Communist Party of India (Marxist) challenged the Scheme before the Supreme Court under Article 32. Petitioners relied upon the unbroken lineage of transparency precedents, starting from Union of India v. Association for Democratic Reforms (2002 3-Judge Bench) and PUCL v. Union of India (2003 3-Judge Bench), which established that the voter's right to know the background and funding of candidates and parties is an integral fundamental right under Article 19(1)(a). On February 15, 2024, a 5-Judge Constitution Bench delivered its unanimous verdict.",
    "statutoryApplicability": [
      "Article 19(1)(a) (Freedom of Speech and Voter's Right to Information)",
      "Article 14 (Equality and Arbitrariness)",
      "Association for Democratic Reforms v. Union of India (Feb 15, 2024 5-Judge Constitution Bench, Unanimous)",
      "Union of India v. Association for Democratic Reforms (2002 3-Judge Bench)",
      "People's Union for Civil Liberties (PUCL) v. Union of India (2003 3-Judge Bench)",
      "Section 29C Representation of the People Act, 1951 & Section 182 Companies Act, 2013"
    ],
    "framingQuestions": [
      "What was the unanimous ratio of the 5-Judge Constitution Bench in ADR v. Union of India (2024) striking down the Electoral Bond Scheme?",
      "How does the constitutional Right to Information under Article 19(1)(a) apply to political party funding as settled from ADR (2002) to ADR (2024)?",
      "Why did the Supreme Court hold that the amendment to Section 182 of the Companies Act, 2013 allowing unlimited corporate donations violated Article 14?",
      "What specific operational directions did the Supreme Court issue to the State Bank of India and the Election Commission of India regarding disclosure?"
    ],
    "modelAnswer": "1. UNANIMOUS VERDICT STRIKING DOWN ELECTORAL BONDS: On February 15, 2024, the 5-Judge Constitution Bench (unanimously authored by CJI Chandrachud and Sanjiv Khanna J) struck down the Electoral Bond Scheme, 2018 and the amendments to the RPA, Income Tax Act, and Companies Act as unconstitutional and void ab initio.\n\n2. VOTER'S RIGHT TO INFORMATION UNDER ARTICLE 19(1)(A): Reaffirming the 22-year lineage from ADR (2002) and PUCL (2003), the Court held that the voter's Right to Information is a fundamental right essential for participatory democracy. Voters need to know who funds political parties to evaluate whether government policies are being formulated for the public good or as quid pro quo favors for corporate donors. Anonymity of political contributions directly violates Article 19(1)(a).\n\n3. UNCONSTITUTIONALITY OF UNLIMITED CORPORATE DONATIONS: The Court struck down the amendment to Section 182(3) of the Companies Act, 2013 which removed the 7.5% profit cap. The Court held that corporate donations are purely commercial transactions aimed at securing business advantages, unlike contributions by individuals which express political affiliation. Allowing loss-making and shell companies to donate unlimited funds opened the floodgates for money laundering and regulatory capture, violating Article 14.\n\n4. MANDATORY SBI AND ECI DISCLOSURE ORDERS: The Supreme Court directed SBI to: (a) Immediately stop issuing electoral bonds; (b) Submit full details of all bonds purchased from April 12, 2019 to date (including purchase date, purchaser name, denomination, and unique alphanumeric serial numbers); (c) Disclose the political parties that redeemed each bond. ECI was directed to publish these complete details on its official website for public scrutiny.",
    "markingRubric": [
      {
        "criterion": "Affirmation of voter Right to Know under Article 19(1)(a) through the ADR (2002–2024) lineage",
        "marks": 4
      },
      {
        "criterion": "Application of proportionality test and striking down of unlimited corporate funding",
        "marks": 3
      },
      {
        "criterion": "Scope and execution of SBI and ECI transparency disclosure orders",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d14-cs10-q1",
        "question": "In Association for Democratic Reforms v. Union of India (February 15, 2024 5-Judge Constitution Bench), which fundamental right was held to be violated by the Electoral Bond Scheme?",
        "options": [
          "Article 21 Right to Clean Environment",
          "Article 19(1)(a) Freedom of Speech and Expression (encompassing the voter's fundamental Right to Information regarding political party financing)",
          "Article 25 Freedom of Conscience and Religion",
          "Article 300A Right to Property of opposition candidates"
        ],
        "correctIndex": 1,
        "explanation": "The Supreme Court unanimously held that anonymous political contributions violate the voter's fundamental right to know under Article 19(1)(a), which is vital for informed democratic voting.",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Article 19(1)(a)"
      },
      {
        "id": "d14-cs10-q2",
        "question": "In applying the Proportionality Test in ADR (2024), what did the Supreme Court hold regarding the Government's argument that donor anonymity was necessary to curb black money in elections?",
        "options": [
          "The argument was accepted and the scheme was upheld for 10 years",
          "The scheme failed the \"necessity\" and \"least restrictive means\" prongs, because curbing black money could be achieved through far less restrictive mechanisms (e.g. Electoral Trusts with public disclosure) without completely blinding voters",
          "Black money is not a legitimate state concern",
          "Only cash donations of Rs. 100 are permitted"
        ],
        "correctIndex": 1,
        "explanation": "Under the Proportionality Test, the measure must be the least restrictive. Anonymizing donations completely extinguished the voter's right to information, failing the proportionality standard.",
        "testedDimension": "Landmark Ratio",
        "articleRef": "Article 19(1)(a) & Proportionality"
      },
      {
        "id": "d14-cs10-q3",
        "question": "Why did the Supreme Court in ADR (2024) declare the amendment to Section 182(3) of the Companies Act, 2013 (removing the 7.5% profit cap on corporate donations) unconstitutional under Article 14?",
        "options": [
          "Because private companies are not allowed to open bank accounts in India",
          "Because treating profit-making companies and loss-making/shell companies alike, and permitting unlimited donations without profit thresholds, enables money laundering and corporate control of the political process",
          "Because corporate donations must be paid in gold coins",
          "Because the Companies Act cannot be amended by Parliament"
        ],
        "correctIndex": 1,
        "explanation": "Removing the cap allowed shell and loss-making companies to donate unlimited amounts, treating unequal entities equally and creating manifest arbitrariness under Article 14.",
        "testedDimension": "Article Threshold",
        "articleRef": "Article 14 & Companies Act S. 182"
      },
      {
        "id": "d14-cs10-q4",
        "question": "What specific detail did the Supreme Court mandate the State Bank of India (SBI) to disclose in order to enable citizens to match donor purchases with party redemptions?",
        "options": [
          "The income tax returns of bank managers",
          "The unique alphanumeric serial numbers embedded in each electoral bond along with purchaser identity, denomination, and redemption dates",
          "The biometric fingerprints of company CEOs",
          "The minutes of cabinet meetings approving the scheme"
        ],
        "correctIndex": 1,
        "explanation": "The Supreme Court strictly directed SBI to disclose the unique alphanumeric security numbers of each bond, allowing direct matching between donor purchasers and recipient political parties.",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Article 19(1)(a) & Article 142"
      }
    ]
  }
];
