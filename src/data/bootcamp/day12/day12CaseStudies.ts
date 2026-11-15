import type { BootcampComprehensionCaseStudy } from '../bootcampTypes';

export const DAY12_COMPREHENSION_CASE_STUDIES: BootcampComprehensionCaseStudy[] = [
  {
    "id": "d12-cs-1",
    "caseNumber": 1,
    "title": "S.R. Bommai v. Union of India (1994): Judicial Review of Article 356, Secularism & Assembly Restoration",
    "legalTheme": "Article 356 Justiciability, Secularism as Basic Structure, Mandatory Floor Test & Restoration of Status Quo Ante",
    "factualMatrix": "Between 1989 and 1992, President's Rule was imposed in multiple States under varying circumstances: in Karnataka (1989), Chief Minister S.R. Bommai's government was dismissed after 19 MLAs defected, even though Bommai offered to prove his majority on the floor within 24 hours; in Meghalaya and Nagaland, ministries were dismissed without floor tests; and following the demolition of the Babri Masjid in December 1992, the Union Government dismissed the BJP-led state governments in Madhya Pradesh, Rajasthan, and Himachal Pradesh on the ground that the Chief Ministers and ruling party cadres had openly supported banned religious organizations, violating the constitutional pledge of secularism.\n\nThe dismissed Chief Ministers and legislators challenged the Article 356 proclamations. A 9-Judge Constitution Bench was convened to authoritatively determine:\n(1) Whether the satisfaction of the President under Article 356 is justiciable;\n(2) What is the scope of judicial review over the Governor's report and Cabinet advice under Article 74(2);\n(3) Whether a Legislative Assembly can be dissolved prior to parliamentary ratification under Article 356(3);\n(4) Whether Secularism is part of the Basic Structure such that its violation by a State Government justifies dismissal under Article 356; and\n(5) What relief can constitutional courts grant if an Article 356 proclamation is held unconstitutional.",
    "framingQuestions": [
      "1. Is the presidential proclamation under Article 356 justiciable, and what are the permissible grounds of judicial review?",
      "2. Can a State Legislative Assembly be dissolved before both Houses of Parliament have ratified the proclamation under Article 356(3)?",
      "3. What is the constitutional significance of Secularism as a component of the Basic Structure in the context of Article 356?",
      "4. What plenary remedial power does the Supreme Court possess if an Article 356 proclamation is declared unconstitutional?"
    ],
    "statutoryApplicability": [
      "Article 356 (President's Rule in States)",
      "Article 74(2) (Confidentiality of Cabinet advice vs non-confidentiality of factual material)",
      "Article 164 (Collective responsibility & floor test)",
      "Preamble & Article 25 (Secularism as Basic Structure)",
      "S.R. Bommai v. Union of India (1994 3 SCC 1, 9-Judge Bench)"
    ],
    "modelAnswer": "1. JUSTICIABILITY & GROUNDS OF JUDICIAL REVIEW:\nThe 9-Judge Constitution Bench held that a Proclamation under Article 356(1) is subject to judicial review. While the subjective satisfaction of the President cannot be substituted by the Court, the Court can examine:\n(a) Whether there was any relevant material before the President to form the satisfaction;\n(b) Whether the material was wholly extraneous or irrelevant to the failure of constitutional machinery;\n(c) Whether the exercise of power was vitiated by mala fides or improper motives.\nThe Court cannot examine the adequacy, sufficiency, or weight of the material. Further, Article 74(2) bars inquiry into the actual ministerial advice tendered, but does NOT bar judicial inspection of the material (including the Governor's report) upon which the advice was founded.\n\n2. DISSOLUTION OF LEGISLATIVE ASSEMBLY:\nThe Court held that the President should NOT dissolve the State Legislative Assembly until both Houses of Parliament have approved the Proclamation under Article 356(3). Until parliamentary approval is obtained (within two months), the President can only suspend the Assembly. Premature dissolution creates an irreversible democratic fait accompli if Parliament subsequently disapproves the proclamation.\n\n3. SECULARISM AS BASIC STRUCTURE:\nThe 9-Judge Bench unanimously held that Secularism is an essential feature of the Basic Structure of the Constitution. A State Government is constitutionally bound to act in accordance with secularism. If a State Government actively pursues communal policies, supports banned religious-communal outfits, or subverts secular governance, it amounts to a breakdown of constitutional machinery within Article 356, justifying dismissal even if the Ministry commands a numerical majority in the Assembly.\n\n4. REMEDY OF RESTORATION (STATUS QUO ANTE):\nThe Court established the path-breaking doctrine that if an Article 356 proclamation is held unconstitutional, the Court has the constitutional power under Article 142/226 to restore the status quo ante: it can reactivate the dismissed Ministry and revive the dissolved Legislative Assembly, nullifying the illegal dismissal.",
    "markingRubric": [
      {
        "criterion": "Analysis of justiciability of Article 356 and distinction between Article 74(2) advice and underlying material",
        "marks": 3
      },
      {
        "criterion": "Principle regarding timing of Assembly dissolution and requirement of parliamentary ratification",
        "marks": 2
      },
      {
        "criterion": "Doctrinal exposition of Secularism as Basic Structure justifying dismissal under Article 356",
        "marks": 3
      },
      {
        "criterion": "Power of constitutional courts to grant status quo ante and restore dissolved assemblies",
        "marks": 2
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d12-cs1-q1",
        "testedDimension": "Landmark Ratio",
        "articleRef": "Article 356 & S.R. Bommai (1994)",
        "question": "In S.R. Bommai v. Union of India (1994), what did the 9-Judge Constitution Bench hold regarding the timing of dissolving a State Legislative Assembly under Article 356?",
        "options": [
          "The Assembly can be dissolved immediately upon issuing the proclamation to avoid political corruption",
          "The Assembly should not be dissolved until both Houses of Parliament approve the proclamation under Article 356(3); till then it can only be suspended",
          "The Assembly can only be dissolved after holding a public referendum in the State",
          "The Assembly can never be dissolved under any circumstance"
        ],
        "correctIndex": 1,
        "explanation": "The 9-Judge Bench held that the President can only keep the Assembly in suspended animation until Parliament approves the proclamation under Article 356(3). Dissolving it prior to parliamentary ratification is impermissible."
      },
      {
        "id": "d12-cs1-q2",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Preamble & Article 356",
        "question": "Why was the dismissal of the BJP state governments in MP, Rajasthan, and HP upheld in S.R. Bommai despite them having legislative majorities?",
        "options": [
          "Because the governments had exhausted their budgetary allocations",
          "Because Secularism is an integral component of the Basic Structure, and any State Government acting contrary to or subverting secularism causes a breakdown of constitutional governance",
          "Because the Governors had resigned voluntarily",
          "Because the Election Commission recommended immediate polls"
        ],
        "correctIndex": 1,
        "explanation": "The Court ruled that Secularism is a basic feature of the Constitution. A State Government cannot pursue anti-secular policies; doing so amounts to a failure of constitutional machinery, justifying Article 356 regardless of numerical strength."
      },
      {
        "id": "d12-cs1-q3",
        "testedDimension": "Article Threshold",
        "articleRef": "Article 74(2) & Article 356",
        "question": "How did the 9-Judge Bench in Bommai interpret the bar under Article 74(2) when the Union Government was asked to produce the basis of President's Rule?",
        "options": [
          "Article 74(2) provides total, blanket immunity to all files and records related to Cabinet advice",
          "Article 74(2) bars inquiry only into the actual advice tendered by Ministers to the President, but does NOT bar judicial inspection of the material and facts upon which that advice was based",
          "Article 74(2) applies only to peacetime, not to emergency proclamations",
          "The Court held that the Governor's report is an official secret under the Official Secrets Act"
        ],
        "correctIndex": 1,
        "explanation": "Bommai clarified that while the ministerial advice is confidential under Article 74(2), the objective material (including the Governor's report) upon which the advice was tendered is not immune from judicial scrutiny."
      },
      {
        "id": "d12-cs1-q4",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Article 356 & Article 142",
        "question": "What landmark remedial power was affirmed in S.R. Bommai if an Article 356 proclamation is declared unconstitutional by the court?",
        "options": [
          "The Court can only award token monetary compensation to the ousted Chief Minister",
          "The Court has the constitutional power to restore status quo ante by reviving the dissolved Legislative Assembly and restoring the dismissed Ministry to office",
          "The Court must order the Governor to be imprisoned for contempt",
          "The Court can only advise the President to issue a fresh proclamation"
        ],
        "correctIndex": 1,
        "explanation": "The Supreme Court affirmed that it has the power to restore status quo ante, reviving the dissolved Assembly and restoring the dismissed government, as subsequently applied in Nabam Rebia (2016)."
      }
    ]
  },
  {
    "id": "d12-cs-2",
    "caseNumber": 2,
    "title": "In Re: Article 370 of the Constitution (2023): Sovereignty, Asymmetric Federalism & Abrogation Mechanics",
    "legalTheme": "Extinction of J&K Sovereignty, Temporary Nature of Article 370, Unilateral Presidential Power under 370(3), Ultra Vires use of Article 367, Article 3 Reorganisation",
    "factualMatrix": "On August 5, 2019, the President of India issued Constitutional Order (CO) 272 under Article 370(1), which applied all provisions of the Indian Constitution to the State of Jammu and Kashmir. Crucially, CO 272 added a clause to Article 367 (interpretation clause) stating that the phrase 'Constituent Assembly of the State' in the proviso to Article 370(3) shall be read as 'Legislative Assembly of the State'. Since J&K was under President's Rule under Article 356, Parliament exercised the powers of the State Legislative Assembly and recommended the abrogation of Article 370.\n\nOn August 6, 2019, the President issued CO 273 under Article 370(3), declaring that all clauses of Article 370 shall cease to be operative. Concurrently, Parliament enacted the Jammu and Kashmir Reorganisation Act, 2019, bifurcating the State into two Union Territories: the UT of Jammu and Kashmir (with a legislature) and the UT of Ladakh (without a legislature).\n\nA batch of writ petitions was filed challenging the constitutionality of CO 272, CO 273, and the Reorganisation Act. A 5-Judge Constitution Bench headed by Chief Justice D.Y. Chandrachud heard the matter and delivered a unanimous verdict on December 11, 2023.",
    "framingQuestions": [
      "1. Did the State of Jammu and Kashmir retain any element of sovereignty after accession to the Indian Union?",
      "2. Was Article 370 a temporary provision or did it acquire permanent status upon the dissolution of the J&K Constituent Assembly in 1957?",
      "3. Was the modification of Article 367 by CO 272 to amend Article 370(3) constitutionally valid?",
      "4. Could the President unilaterally exercise power under Article 370(3) to declare Article 370 inoperative without a recommendation from the J&K Constituent Assembly?"
    ],
    "statutoryApplicability": [
      "Article 370 (Temporary provisions with respect to J&K)",
      "Article 367 (Interpretation)",
      "Article 3 (Formation of new States & Union Territories)",
      "Instrument of Accession (October 1947) & Yuvraj Karan Singh Proclamation (November 1949)",
      "In Re: Article 370 of the Constitution (2023 5-Judge Constitution Bench)"
    ],
    "modelAnswer": "1. COMPLETE SURRENDER OF SOVEREIGNTY:\nThe 5-Judge Constitution Bench held that the State of Jammu and Kashmir did not retain any element of sovereignty, internal or external, upon its accession to India. Paragraph 1 of the Proclamation issued by Yuvraj Karan Singh on November 25, 1949 explicitly stated that the Constitution of India would govern the relationship. Section 3 of the J&K Constitution reaffirmed that J&K is and shall be an integral part of the Union of India.\n\n2. ARTICLE 370 WAS TEMPORARY:\nThe Court held that Article 370 was temporary from its inception. This was demonstrated by: (a) Its express placement in Part XXI titled 'Temporary, Transitional and Special Provisions'; (b) The marginal note ('Temporary provisions with respect to the State of Jammu and Kashmir'); and (c) The historical context of wartime conditions preventing immediate full constitutional integration in 1947.\n\n3. INVALIDITY OF CO 272 AMENDMENT TO ARTICLE 367:\nThe Court held that paragraph 2 of CO 272 (which amended Article 367 to equate 'Constituent Assembly' with 'Legislative Assembly') was ultra vires and invalid. An interpretation clause under Article 367 cannot be used to indirectly alter the character or substantive requirements of Article 370(3). What cannot be done directly under the Constitution cannot be done indirectly through an interpretation clause.\n\n4. UNILATERAL PRESIDENTIAL POWER UNDER ARTICLE 370(3):\nDespite holding the Article 367 route invalid, the Supreme Court UPHELD the abrogation under CO 273. The Court held that the dissolution of the J&K Constituent Assembly in 1957 did not freeze or extinguish the President's unilateral power under Article 370(3). To hold that Article 370 became permanent because the Constituent Assembly dissolved would frustrate the constitutional goal of complete integration. The President retained plenary power under Article 370(3) to declare it inoperative.",
    "markingRubric": [
      {
        "criterion": "Analysis of external and internal sovereignty surrender upon accession and 1949 proclamation",
        "marks": 3
      },
      {
        "criterion": "Textual and contextual justification for temporary nature of Article 370",
        "marks": 2
      },
      {
        "criterion": "Doctrinal rationale for striking down the use of Article 367 in CO 272",
        "marks": 3
      },
      {
        "criterion": "Justification of presidential power under Article 370(3) post-1957",
        "marks": 2
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d12-cs2-q1",
        "testedDimension": "Landmark Ratio",
        "articleRef": "Article 370 & Sovereignty",
        "question": "In the December 2023 Article 370 judgment, what did the 5-Judge Constitution Bench hold regarding the sovereignty of Jammu and Kashmir?",
        "options": [
          "J&K retained internal sovereignty under a dual-federalism model",
          "J&K surrendered all sovereignty upon accession and retained no element of internal or external sovereignty outside the Constitution of India",
          "J&K was a semi-autonomous protectorate",
          "Sovereignty was shared equally between the President and the Governor"
        ],
        "correctIndex": 1,
        "explanation": "The Constitution Bench unanimously ruled that J&K retained no sovereignty whatsoever. Accession and the 1949 Proclamation completely extinguished residual sovereignty."
      },
      {
        "id": "d12-cs2-q2",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Article 367 & Article 370(3)",
        "question": "Why did the Supreme Court hold that the amendment of Article 367 by CO 272 was unconstitutional?",
        "options": [
          "Because the President had not consulted the Chief Justice of India",
          "Because an interpretation clause (Article 367) cannot be used to indirectly amend or alter the substantive requirements of Article 370(3) (colorable exercise of power)",
          "Because Article 367 can only be amended by a two-thirds majority in Rajya Sabha",
          "Because the Governor had refused to sign the order"
        ],
        "correctIndex": 1,
        "explanation": "The Court applied the principle that what cannot be done directly cannot be done indirectly: an interpretation clause under Article 367 cannot amend the substantive text of Article 370(3)."
      },
      {
        "id": "d12-cs2-q3",
        "testedDimension": "Article Threshold",
        "articleRef": "Article 370(3)",
        "question": "What happened to the President's power under Article 370(3) after the J&K Constituent Assembly dissolved in 1957 without making a recommendation?",
        "options": [
          "The power lapsed permanently and Article 370 became an unalterable permanent feature",
          "The President retained the unilateral plenary power to declare Article 370 inoperative, as the power did not freeze or die with the Constituent Assembly",
          "The power transferred automatically to the British Crown",
          "The power could only be exercised by holding a nationwide referendum"
        ],
        "correctIndex": 1,
        "explanation": "The Court held that the dissolution of the Constituent Assembly did not eliminate the President's power under Article 370(3); holding otherwise would turn a temporary provision into a permanent one."
      },
      {
        "id": "d12-cs2-q4",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Article 3 & J&K Reorganisation",
        "question": "What specific democratic timeline did the Supreme Court mandate in its December 2023 verdict regarding Jammu & Kashmir?",
        "options": [
          "Mandated holding of Assembly elections by September 30, 2024 and directed restoration of statehood as soon as possible",
          "Directed that J&K remain a Union Territory permanently",
          "Ordered immediate municipal elections within 15 days",
          "Directed that Ladakh be reunited with J&K"
        ],
        "correctIndex": 0,
        "explanation": "The Court directed the Election Commission of India to conduct elections to the J&K Legislative Assembly by September 30, 2024, and emphasized early restoration of statehood."
      }
    ]
  },
  {
    "id": "d12-cs-3",
    "caseNumber": 3,
    "title": "ADM Jabalpur v. Shivkant Shukla (1976) & K.S. Puttaswamy (2017): Article 21 Inviolability & Emergency",
    "legalTheme": "Suspension of Remedies under Article 359, Justice Khanna's Lone Dissent, 44th Amendment Firewall, Right to Life as Pre-Constitutional & Non-Derogable",
    "factualMatrix": "Following the declaration of National Emergency on June 25, 1975 on grounds of 'internal disturbance', the President issued an Order under Article 359(1) declaring that the right of any person to move any court for the enforcement of the rights conferred by Article 14, Article 21, and Article 22 was suspended. Thousands of political leaders, journalists, and citizens were detained without trial under the Maintenance of Internal Security Act (MISA).\n\nSeveral High Courts (including Allahabad, Bombay, Delhi, and Madhya Pradesh) held that despite the Article 359 order, petitions for habeas corpus were maintainable to challenge detentions that were mala fide, without statutory authority, or ultra vires. The Union of India appealed to the Supreme Court.\n\nIn ADM Jabalpur v. Shivkant Shukla (1976), a 5-Judge Constitution Bench ruled 4:1 (A.N. Ray CJ, M.H. Beg, P.N. Bhagwati, and Y.V. Chandrachud JJ in the majority; H.R. Khanna J dissenting) that no person had any locus standi to move any writ petition under Article 226 for habeas corpus challenging detention during emergency. Forty-one years later, in Justice K.S. Puttaswamy (Retd.) v. Union of India (2017), a 9-Judge Constitution Bench formally revisited and overruled ADM Jabalpur.",
    "framingQuestions": [
      "1. What was the constitutional reasoning of the majority in ADM Jabalpur (1976)?",
      "2. What was the core jurisprudential foundation of Justice H.R. Khanna's historic dissent?",
      "3. How did the 44th Constitutional Amendment Act, 1978 alter the architecture of Article 359?",
      "4. On what grounds did the 9-Judge Bench in K.S. Puttaswamy (2017) overrule ADM Jabalpur?"
    ],
    "statutoryApplicability": [
      "Article 21 (Protection of life and personal liberty)",
      "Article 359(1) (Suspension of enforcement of Part III rights)",
      "44th Constitutional Amendment Act, 1978 (Insulation of Articles 20 & 21)",
      "ADM Jabalpur v. Shivkant Shukla (1976 2 SCC 521, 5-Judge Bench)",
      "Justice K.S. Puttaswamy (Retd.) v. Union of India (2017 10 SCC 1, 9-Judge Bench)"
    ],
    "modelAnswer": "1. THE MAJORITY RULING IN ADM JABALPUR:\nThe majority held that:\n(a) Article 21 is the sole repository of the right to life and personal liberty under the Indian legal system;\n(b) A Presidential Order under Article 359(1) creating a blanket suspension of the right to move courts for enforcement of Article 21 completely strips citizens of locus standi;\n(c) No writ petition under Article 226 for habeas corpus could be entertained, even to examine whether the detention was mala fide, outside the statute, or based on mistaken identity.\n\n2. JUSTICE H.R. KHANNA'S HISTORIC DISSENT:\nJustice H.R. Khanna delivered a historic dissent based on natural law and the Rule of Law:\n(a) The right to life and personal liberty is not a gift or bounty of the Constitution; it is an inherent, inalienable human right that pre-exists the Constitution;\n(b) Even in the absence of Article 21, the State has no power to deprive a person of life or liberty without the authority of law;\n(c) The Rule of Law is the antithesis of arbitrariness. Article 359 only bars moving courts for enforcement of fundamental rights, but does NOT bar courts from examining whether executive action is sanctioned by a valid statute.\n\n3. THE 44TH AMENDMENT FIREWALL:\nVindicating Justice Khanna's dissent, Parliament enacted the 44th Constitutional Amendment Act, 1978, inserting the express words '(except articles 20 and 21)' into Article 359(1). Consequently, the right to move any court for the enforcement of Article 20 (fair trial safeguards) and Article 21 (life and liberty) can NEVER be suspended by any Presidential Order, rendering habeas corpus permanently available.\n\n4. OVERRULING IN PUTTASWAMY (2017):\nIn Puttaswamy (2017), the 9-Judge Bench formally and unanimously overruled ADM Jabalpur. The Court observed that the majority judgments in ADM Jabalpur were 'deeply flawed', ignored constitutional supremacy, and subordinated human dignity to executive whim. Justice Khanna's dissent was recognized as representing the true constitutional law of India.",
    "markingRubric": [
      {
        "criterion": "Critique of majority reasoning in ADM Jabalpur regarding Article 21 repository doctrine",
        "marks": 3
      },
      {
        "criterion": "Doctrinal exposition of Justice H.R. Khanna's dissent on Rule of Law and pre-constitutional rights",
        "marks": 3
      },
      {
        "criterion": "Statutory effect of 44th Amendment on Article 359(1)",
        "marks": 2
      },
      {
        "criterion": "Ratio and constitutional significance of Puttaswamy overruling ADM Jabalpur",
        "marks": 2
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d12-cs3-q1",
        "testedDimension": "Landmark Ratio",
        "articleRef": "Article 21 & ADM Jabalpur",
        "question": "In ADM Jabalpur (1976), what was the central holding of the 4-Judge majority regarding Article 21?",
        "options": [
          "Article 21 is a non-derogable human right enforceable even in martial law",
          "Article 21 was the sole repository of the right to life and personal liberty, and its suspension under Article 359 completely barred habeas corpus petitions even against mala fide detentions",
          "High Courts had exclusive jurisdiction over emergency detentions",
          "Detenus were entitled to bail within 48 hours"
        ],
        "correctIndex": 1,
        "explanation": "The majority held that Article 21 was the exclusive repository of life and liberty, and upon its suspension under Article 359, no court could examine any detention order, even if illegal or mala fide."
      },
      {
        "id": "d12-cs3-q2",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Article 21 & Rule of Law (Khanna Dissent)",
        "question": "What fundamental jurisprudential proposition did Justice H.R. Khanna articulate in his lone dissent in ADM Jabalpur?",
        "options": [
          "The President is above the law during emergency",
          "The right to life and liberty is an inalienable human right pre-existing the Constitution; the State has no authority to deprive liberty without valid statutory sanction, and the Rule of Law survives emergency",
          "Parliament should be abolished during emergency",
          "Habeas corpus is a discretionary political remedy"
        ],
        "correctIndex": 1,
        "explanation": "Justice Khanna held that the right to life is pre-constitutional and inalienable. The State cannot deprive liberty without valid law, and the Rule of Law remains binding."
      },
      {
        "id": "d12-cs3-q3",
        "testedDimension": "Article Threshold",
        "articleRef": "Article 359(1) & 44th Amendment",
        "question": "How did the 44th Constitutional Amendment Act, 1978 permanently eliminate the possibility of another ADM Jabalpur ruling?",
        "options": [
          "By abolishing Article 352 completely",
          "By explicitly inserting the words '(except articles 20 and 21)' into Article 359(1), making life and personal liberty non-suspendable under any Presidential Order",
          "By transferring emergency powers to the Chief Justice of India",
          "By making detention orders appealable to the United Nations"
        ],
        "correctIndex": 1,
        "explanation": "The 44th Amendment expressly amended Article 359(1) to state '(except articles 20 and 21)', ensuring that the right to enforce life and fair trial protections can never be suspended."
      },
      {
        "id": "d12-cs3-q4",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Article 21 & K.S. Puttaswamy (2017)",
        "question": "In which 9-Judge Constitution Bench judgment was the majority decision in ADM Jabalpur formally overruled as deeply flawed?",
        "options": [
          "Kesavananda Bharati v. State of Kerala (1973)",
          "Justice K.S. Puttaswamy (Retd.) v. Union of India (2017)",
          "Maneka Gandhi v. Union of India (1978)",
          "Navtej Singh Johar v. Union of India (2018)"
        ],
        "correctIndex": 1,
        "explanation": "In K.S. Puttaswamy (2017), the 9-Judge Constitution Bench unanimously and formally overruled ADM Jabalpur, declaring Justice Khanna's dissent to be the true constitutional law."
      }
    ]
  },
  {
    "id": "d12-cs-4",
    "caseNumber": 4,
    "title": "Rameshwar Prasad (VI) v. Union of India (2006): Governor's Mala Fides & Assembly Dissolution",
    "legalTheme": "Dissolution of Assembly before First Meeting, Governor Buta Singh's Report, Abuse of Article 356, Preemption of Government Formation & Judicial Remedies",
    "factualMatrix": "In the February 2005 Bihar Legislative Assembly elections, no political party or pre-poll alliance secured a majority in the 243-member House. On March 7, 2005, the Governor recommended President's Rule under Article 356, keeping the newly elected Assembly in suspended animation. The newly elected MLAs were not even sworn in, and the Assembly had not met.\n\nIn May 2005, reports emerged that the Janata Dal (United) and BJP alliance was on the verge of securing the support of a breakaway faction of Lok Janshakti Party (LJP) MLAs and independent members to cross the majority mark of 122. Before the alliance could formally submit letters of support to the Governor, Governor Buta Singh sent two urgent reports to the President on May 21 and May 22, alleging that horse-trading of MLAs was underway using illegal money power to cobble up a majority, and recommended the immediate dissolution of the Assembly.\n\nAt midnight on May 23, 2005, the Union Cabinet approved the recommendation, and the President issued a proclamation under Article 356 dissolving the Bihar Assembly. Rameshwar Prasad and other MLAs filed writ petitions under Article 32 challenging the dissolution as unconstitutional, mala fide, and an abuse of gubernatorial power. A 5-Judge Constitution Bench heard the challenge.",
    "framingQuestions": [
      "1. Can a Governor recommend dissolution of an Assembly on the suspicion of horse-trading before any party has been given an opportunity to prove majority?",
      "2. What is the standard of proof required to establish mala fides against a Governor's recommendation under Article 356?",
      "3. Is the Governor's assessment of political morality a valid ground to dissolve an elected Assembly?",
      "4. Why did the Supreme Court, despite holding the dissolution unconstitutional, decline to restore the dissolved Bihar Assembly?"
    ],
    "statutoryApplicability": [
      "Article 356 (Proclamation of President's Rule)",
      "Article 174 (Dissolution of Legislative Assembly)",
      "Article 361 (Protection of Governor)",
      "S.R. Bommai v. Union of India (1994 3 SCC 1)",
      "Rameshwar Prasad (VI) v. Union of India (2006 2 SCC 1, 5-Judge Bench)"
    ],
    "modelAnswer": "1. PREEMPTION OF GOVERNMENT FORMATION IS UNCONSTITUTIONAL:\nThe 5-Judge Constitution Bench held that the Governor's recommendation to dissolve the Assembly was unconstitutional and an abuse of power. The Governor has no constitutional authority to preempt a political party or coalition from staking a claim to form a government on subjective suspicions or unverified allegations of horse-trading. The floor of the House is the only constitutional forum to test majority support.\n\n2. STANDARD OF MALA FIDES & IRRELEVANT GROUNDS:\nThe Court held that the Governor's reports were based on wholly irrelevant and extraneous material. Governor Buta Singh acted with extreme and undue haste to forestall the JD(U)-BJP coalition from claiming power. While personal mala fides against the Governor could not result in him being sued due to Article 361 immunity, the gubernatorial action suffered from legal mala fides (exercise of power for an unauthorized purpose), rendering the Presidential Proclamation void.\n\n3. GOVERNOR IS NOT AN ARBITER OF POLITICAL MORALITY:\nThe Court observed that the Governor cannot assume the mantle of an arbiter of political morality. If MLAs defect or break away, the constitutional mechanism to address defection is the Tenth Schedule administered by the Speaker, not preemptive dissolution of the Assembly by the Governor.\n\n4. DECLINING RESTORATION (STATUS QUO ANTE):\nAlthough the dissolution was declared unconstitutional, the Court declined to restore the dissolved Assembly. By the time the final judgment was delivered, the Election Commission had already notified fresh elections, nominations had closed, and polling was imminent. In the interest of democratic finality and avoiding chaos, the Court allowed fresh elections to proceed, where the electorate gave a decisive mandate.",
    "markingRubric": [
      {
        "criterion": "Constitutional analysis of preemptive dissolution and floor test primacy",
        "marks": 3
      },
      {
        "criterion": "Application of legal mala fides doctrine to Governor Buta Singh's reports",
        "marks": 3
      },
      {
        "criterion": "Demarcation between Governor's role and Tenth Schedule anti-defection mechanism",
        "marks": 2
      },
      {
        "criterion": "Justification for declining status quo ante due to advanced electoral schedule",
        "marks": 2
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d12-cs4-q1",
        "testedDimension": "Landmark Ratio",
        "articleRef": "Article 356 & Rameshwar Prasad (2006)",
        "question": "In Rameshwar Prasad (VI) v. Union of India (2006), why did the 5-Judge Constitution Bench hold the dissolution of the Bihar Assembly to be unconstitutional?",
        "options": [
          "Because the Governor had forgotten to send an official copy of the report",
          "Because the Governor recommended dissolution in undue haste solely to prevent a viable coalition from staking a claim to form a government, which was a mala fide abuse of power",
          "Because the Assembly had already completed 5 years",
          "Because the President had not consulted the Election Commission"
        ],
        "correctIndex": 1,
        "explanation": "The Supreme Court held that Governor Buta Singh acted with undue haste to stall government formation on unverified suspicions of horse-trading, which constituted legal mala fides."
      },
      {
        "id": "d12-cs4-q2",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Tenth Schedule & Article 356",
        "question": "How did the Supreme Court in Rameshwar Prasad address the Governor's justification that dissolution was necessary to prevent defection and horse-trading?",
        "options": [
          "The Court agreed that Governors have plenary police powers to stop defections",
          "The Court held that the Governor is not an arbiter of political morality; defection is governed strictly by the Tenth Schedule under the Speaker, and cannot be preempted by dissolving the House",
          "The Court held that all post-poll alliances are unconstitutional",
          "The Court held that MLAs who switch parties must be detained immediately"
        ],
        "correctIndex": 1,
        "explanation": "The Court ruled that issues of defection belong to the Tenth Schedule before the Speaker. The Governor cannot use subjective morality to dissolve an elected Assembly."
      },
      {
        "id": "d12-cs4-q3",
        "testedDimension": "Article Threshold",
        "articleRef": "Article 361 & Rameshwar Prasad",
        "question": "What did the Court clarify regarding the personal immunity of Governor Buta Singh under Article 361 when his conduct was challenged?",
        "options": [
          "The Governor lost immunity and was sentenced to pay fine",
          "The Governor enjoyed complete personal immunity from being answerable to the Court, but the Court was fully entitled to scrutinize his report and hold the action to be vitiated by legal mala fides",
          "Article 361 completely barred the Court from reading the Governor's report",
          "The Governor was directed to appear in the witness box"
        ],
        "correctIndex": 1,
        "explanation": "Article 361 shields the Governor personally from court proceedings, but does NOT prevent the Court from examining the validity and bona fides of the Governor's report and recommendations."
      },
      {
        "id": "d12-cs4-q4",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Article 356 Restoration Doctrine",
        "question": "Why did the Supreme Court in Rameshwar Prasad NOT restore the dissolved Bihar Assembly despite holding the dissolution unconstitutional?",
        "options": [
          "Because the Supreme Court has no power to restore dissolved assemblies under any circumstance",
          "Because fresh elections had already been notified, nominations had closed, and the electoral process was too far advanced to be unwound without democratic disruption",
          "Because the former Chief Minister had passed away",
          "Because the Union Government refused to comply"
        ],
        "correctIndex": 1,
        "explanation": "The Court recognized that while restoration is an available remedy under Bommai, it declined to grant it because fresh elections were already underway and rolling back the process would cause democratic chaos."
      }
    ]
  },
  {
    "id": "d12-cs-5",
    "caseNumber": 5,
    "title": "Nabam Rebia v. Deputy Speaker (2016): Gubernatorial Discretion, Article 174 & Status Quo Ante",
    "legalTheme": "Governor's Discretion under Article 163, Summoning & Preponing Assembly under Article 174, Removal of Speaker, President's Rule Quashed & Complete Restoration",
    "factualMatrix": "In November 2015, a severe political crisis developed in Arunachal Pradesh. Out of 47 Congress MLAs in the 60-member Assembly, 21 MLAs rebelled against Chief Minister Nabam Tuki. The rebel MLAs and 11 BJP MLAs submitted a notice of resolution for the removal of Speaker Nabam Rebia. The next regular session of the Assembly was scheduled for January 14, 2016.\n\nOn December 9, 2015, Governor J.P. Rajkhowa, acting completely without the aid and advice of the Chief Minister or Council of Ministers, issued an executive order preponing the Assembly session from January 14, 2016 to December 16, 2015. The Governor also issued a 'message' directing that the resolution for the removal of the Speaker be taken up as the first item of business, and directed the Deputy Speaker (a rebel) to preside.\n\nThe Speaker locked the Assembly premises. The Deputy Speaker and rebel MLAs held a session in a community hall, removed the Speaker, and passed a resolution 'removing' Chief Minister Nabam Tuki. Shortly thereafter, the Union Government imposed President's Rule under Article 356 in Arunachal Pradesh. The ousted Chief Minister and Speaker challenged the Governor's actions and President's Rule before the Supreme Court. A 5-Judge Constitution Bench heard the dispute.",
    "framingQuestions": [
      "1. Does the Governor possess independent discretionary power under Article 163 to summon or prepone an Assembly session under Article 174 without Cabinet advice?",
      "2. Can the Governor dictate the legislative agenda of the Assembly or direct how proceedings shall be conducted?",
      "3. Can a Speaker facing a notice of removal under Article 179(c) adjudicate Tenth Schedule disqualification petitions against MLAs?",
      "4. What final relief was granted by the Supreme Court upon declaring the Governor's actions and Article 356 proclamation unconstitutional?"
    ],
    "statutoryApplicability": [
      "Article 163 (Council of Ministers to aid and advise Governor)",
      "Article 174 (Sessions of State Legislature, summoning & proroguing)",
      "Article 175 (Governor's message to House)",
      "Article 179(c) (Removal of Speaker)",
      "Nabam Rebia & Bamang Felix v. Deputy Speaker (2016 8 SCC 1, 5-Judge Bench)"
    ],
    "modelAnswer": "1. NO DISCRETION UNDER ARTICLE 174:\nThe 5-Judge Constitution Bench held that the Governor has NO independent discretionary power under Article 163 to summon, prorogue, or prepone the session of the Legislative Assembly under Article 174. The Governor is a constitutional figurehead and must act strictly on the aid and advice of the Chief Minister and Council of Ministers. The only rare exception is when the government has demonstrably lost its majority on the floor and refuses to summon the House.\n\n2. GOVERNOR CANNOT DICTATE ASSEMBLY AGENDA:\nThe Court held that the Governor's order fixing the agenda of the House (directing removal of the Speaker as the first item) and ordering the Deputy Speaker to preside was a flagrant violation of the constitutional separation of powers. Under Article 208, the Assembly has exclusive competence to frame its rules of procedure, and the Governor cannot meddle in internal legislative business under the guise of sending a 'message' under Article 175.\n\n3. SPEAKER'S POWER DURING REMOVAL NOTICE:\nThe Court held that when a notice of intention to move a resolution for the removal of the Speaker is pending under Article 179(c), the Speaker cannot adjudicate Tenth Schedule disqualification petitions against MLAs who gave that notice, until the question of the Speaker's own continuance is resolved by the House. (Note: This specific proposition was later referred to a 7-Judge Bench in Subhash Desai 2023).\n\n4. UNPRECEDENTED STATUS QUO ANTE:\nThe Supreme Court quashed all actions of the Governor, held the unapproved community hall session void, quashed the subsequent Proclamation of President's Rule under Article 356, and ordered the complete restoration of the status quo ante. The dismissed Nabam Tuki Government was immediately reinstated to office, demonstrating the full remedial reach of the Bommai doctrine.",
    "markingRubric": [
      {
        "criterion": "Interpretation of Article 163 and absence of gubernatorial discretion under Article 174",
        "marks": 3
      },
      {
        "criterion": "Analysis of separation of powers and invalidity of Governor dictating Assembly agenda",
        "marks": 2
      },
      {
        "criterion": "Interplay between Article 179(c) removal notice and Tenth Schedule disqualification powers",
        "marks": 2
      },
      {
        "criterion": "Significance of complete status quo ante restoration of the dismissed government",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d12-cs5-q1",
        "testedDimension": "Landmark Ratio",
        "articleRef": "Articles 163 & 174 (Nabam Rebia)",
        "question": "In Nabam Rebia (2016), what did the 5-Judge Constitution Bench hold regarding the Governor's power to prepone an Assembly session under Article 174?",
        "options": [
          "The Governor has absolute discretionary power to summon or prepone sessions whenever there is political instability",
          "The Governor can summon, prorogue, or prepone an Assembly session ONLY on the aid and advice of the Council of Ministers headed by the Chief Minister, and possesses no independent discretion in the matter",
          "The Governor must obtain prior sanction from the Union Home Ministry",
          "The Governor can prepone sessions only if the Speaker consents in writing"
        ],
        "correctIndex": 1,
        "explanation": "The Constitution Bench held that the Governor has no discretionary power under Article 174; summoning or preponing sessions can only be done on the aid and advice of the Cabinet."
      },
      {
        "id": "d12-cs5-q2",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Article 175 & Article 208",
        "question": "How did the Supreme Court characterize Governor Rajkhowa's directive fixing the removal of the Speaker as the first item of business in the Assembly?",
        "options": [
          "As a lawful exercise of supervisory constitutional authority",
          "As an unconstitutional intrusion into the exclusive domain of the Legislature and a violation of the constitutional separation of powers",
          "As a valid advisory recommendation",
          "As an order protected from review under Article 361"
        ],
        "correctIndex": 1,
        "explanation": "The Court held that the Governor has no constitutional power to dictate legislative agenda or interfere in internal parliamentary proceedings, which are governed by House rules under Article 208."
      },
      {
        "id": "d12-cs5-q3",
        "testedDimension": "Article Threshold",
        "articleRef": "Article 179(c) & Tenth Schedule",
        "question": "What rule was laid down in Nabam Rebia regarding a Speaker against whom a notice of removal under Article 179(c) is pending?",
        "options": [
          "The Speaker must be arrested immediately",
          "The Speaker cannot adjudicate Tenth Schedule disqualification petitions against MLAs while a notice of resolution for his own removal is pending",
          "The Speaker gains absolute immunity from removal",
          "The Speaker is replaced by the Chief Justice of the High Court"
        ],
        "correctIndex": 1,
        "explanation": "Nabam Rebia ruled that a Speaker cannot decide Tenth Schedule disqualifications while facing a removal notice under Article 179(c) (this was subsequently referred to a larger bench in Subhash Desai)."
      },
      {
        "id": "d12-cs5-q4",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Article 356 & Status Quo Ante",
        "question": "What historic remedy did the Supreme Court grant in Nabam Rebia (2016) upon declaring President's Rule in Arunachal Pradesh unconstitutional?",
        "options": [
          "Awarded damages of Rs 50 Lakhs to the State exchequer",
          "Ordered complete restoration of status quo ante, reinstating the dismissed Nabam Tuki Government to power",
          "Directed immediate merger of Arunachal Pradesh with Assam",
          "Ordered fresh Assembly elections within 60 days"
        ],
        "correctIndex": 1,
        "explanation": "The Supreme Court applied the Bommai restoration power, quashing President's Rule and restoring the dismissed Nabam Tuki Government status quo ante."
      }
    ]
  },
  {
    "id": "d12-cs-6",
    "caseNumber": 6,
    "title": "Subhash Desai v. Principal Secretary to Governor of Maharashtra (2023): Floor Test Limits & Tenth Schedule",
    "legalTheme": "Governor Calling Floor Test without Objective Material, Intra-Party Dissent vs Loss of Confidence, Political Party vs Legislature Party, Resignation Effect on Status Quo Ante",
    "factualMatrix": "In June 2022, a major political fissure erupted in the ruling Maha Vikas Aghadi (MVA) coalition in Maharashtra. A faction of 34 Shiv Sena MLAs led by Eknath Shinde passed a resolution declaring Shinde as their leader and expressed dissatisfaction with the coalition with Congress and NCP. They traveled to Surat and Guwahati. The Deputy Speaker recognized Ajay Choudhari as group leader and Sunil Prabhu as Whip, and issued show-cause notices for disqualification under the Tenth Schedule to 16 rebel MLAs.\n\nThe rebel MLAs approached the Supreme Court, which granted interim protection by extending the time to respond to disqualification notices. While disqualification petitions were pending, 7 independent MLAs and the Leader of Opposition submitted letters to Governor Bhagat Singh Koshyari alleging that the MVA government had lost its majority.\n\nGovernor Koshyari, relying on the letters and a resolution of the rebel faction, directed Chief Minister Uddhav Thackeray to face a floor test on June 30, 2022. The MVA challenged the floor test order. The Supreme Court declined to stay the floor test. Immediately thereafter, Chief Minister Uddhav Thackeray announced his resignation without facing the vote. Eknath Shinde was invited to form the government and proved his majority. A 5-Judge Constitution Bench heard the comprehensive challenge in Subhash Desai (2023).",
    "framingQuestions": [
      "1. Under what constitutional conditions can a Governor lawfully order a Chief Minister to undergo a floor test?",
      "2. Did Governor Koshyari have adequate objective material to order a floor test?",
      "3. What is the crucial constitutional distinction between the 'Political Party' and the 'Legislature Party' under the Tenth Schedule?",
      "4. Why did the Supreme Court refuse to restore Uddhav Thackeray to the office of Chief Minister despite holding the Governor's floor test call illegal?"
    ],
    "statutoryApplicability": [
      "Article 164 (Collective responsibility & majority)",
      "Article 174 (Governor's power to summon House)",
      "Tenth Schedule, Paragraph 2(1)(a), 2(1)(b) & Paragraph 3 (deleted)",
      "Subhash Desai v. Principal Secretary to Governor of Maharashtra (2023 5-Judge Constitution Bench)"
    ],
    "modelAnswer": "1. THRESHOLD FOR CALLING A FLOOR TEST:\nThe 5-Judge Constitution Bench held that a Governor cannot call for a floor test routinely or based on frivolous claims. The Governor must have objective, verifiable material before him indicating that the incumbent Council of Ministers has lost the confidence of the House. A floor test is an extraordinary constitutional intervention that cannot be triggered by internal party dissent.\n\n2. GOVERNOR KOSHYARI'S ACTIONS WERE UNLAWFUL:\nThe Court held that Governor Koshyari erred in calling for a floor test. The material before the Governor consisted only of a resolution by a faction of MLAs expressing discontent with the coalition partners. The MLAs had not stated that they intended to withdraw support from the government or vote against it; they merely expressed intra-party disagreement. Discontent within a political party does not justify the Governor calling for a floor test. The Governor cannot act as an umpire in internal party conflicts or use his office to precipitate the fall of an elected government.\n\n3. POLITICAL PARTY VS LEGISLATURE PARTY:\nThe Court made a profound structural clarification under the Tenth Schedule: the 'Political Party' is paramount over the 'Legislature Party'. Disqualification and party whips are governed by the political party as an organizational whole, not by an autonomous faction of elected MLAs. The Speaker cannot recognize a whip or leader appointed solely by a breakaway legislative faction without verifying the authorization of the registered political party.\n\n4. REFUSAL OF STATUS QUO ANTE DUE TO RESIGNATION:\nThe Court held that status quo ante could NOT be restored because Chief Minister Uddhav Thackeray voluntarily resigned without facing the floor test. Had he faced the floor test and been defeated as a result of an illegal gubernatorial order, the Court could have considered restoration. But the Court cannot reinstate a government that chose to step down voluntarily without letting the democratic House vote.",
    "markingRubric": [
      {
        "criterion": "Constitutional threshold and prerequisites for Governor ordering a floor test",
        "marks": 3
      },
      {
        "criterion": "Critique of Governor Koshyari's reliance on intra-party faction letters",
        "marks": 2
      },
      {
        "criterion": "Doctrinal distinction between Political Party and Legislature Party under Tenth Schedule",
        "marks": 3
      },
      {
        "criterion": "Jurisprudential explanation for why voluntary resignation precluded status quo ante",
        "marks": 2
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d12-cs6-q1",
        "testedDimension": "Landmark Ratio",
        "articleRef": "Article 164 & Floor Test Standards",
        "question": "In Subhash Desai (2023), what did the 5-Judge Constitution Bench hold regarding Governor Koshyari's decision to order a floor test?",
        "options": [
          "The Governor acted completely within his constitutional discretion",
          "The Governor had no objective material to conclude that the Chief Minister had lost majority; intra-party dissent cannot be used by the Governor to precipitate the fall of an elected government",
          "The Governor was bound by the advice of the rebel faction",
          "The Governor's decision was immune from judicial review"
        ],
        "correctIndex": 1,
        "explanation": "The Supreme Court held that internal party dissent does not indicate loss of majority. Ordering a floor test without objective proof that the Ministry lost confidence was illegal."
      },
      {
        "id": "d12-cs6-q2",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Tenth Schedule (Party vs Legislature)",
        "question": "Under the Tenth Schedule jurisprudence in Subhash Desai (2023), which entity has constitutional primacy in issuing whips and appointing leaders?",
        "options": [
          "The Legislature Party (the group of elected MLAs)",
          "The Political Party (the registered party organization as a whole)",
          "The Governor of the State",
          "The Chief Whip appointed by the High Court"
        ],
        "correctIndex": 1,
        "explanation": "The Court emphatically held that the Political Party is paramount over the Legislature Party. Whips and leaders must be authorized by the political party organization."
      },
      {
        "id": "d12-cs6-q3",
        "testedDimension": "Article Threshold",
        "articleRef": "Tenth Schedule (Split Defense)",
        "question": "Following the 91st Constitutional Amendment Act, 2003, what is the status of the 'split' defense under the Tenth Schedule?",
        "options": [
          "A split of one-third MLAs is a complete defense against disqualification",
          "The defense of a split (former Paragraph 3) was completely deleted; defection can now be shielded only by a merger of two-thirds of the members under Paragraph 4",
          "A split can be recognized by the Governor under Article 163",
          "A split requires approval of the Election Commission within 24 hours"
        ],
        "correctIndex": 1,
        "explanation": "The 91st Amendment deleted Paragraph 3 of the Tenth Schedule. A split is no longer a defense against disqualification; only a two-thirds merger under Paragraph 4 protects defectors."
      },
      {
        "id": "d12-cs6-q4",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Subhash Desai Reinstatement Holding",
        "question": "Why did the Supreme Court in Subhash Desai NOT reinstate Uddhav Thackeray as Chief Minister despite finding the Governor's floor test call unlawful?",
        "options": [
          "Because the Supreme Court has no jurisdiction over Chief Ministers",
          "Because Uddhav Thackeray did not face the floor test and voluntarily tendered his resignation before the vote, making status quo ante impossible",
          "Because fresh general elections had already taken place",
          "Because Eknath Shinde had obtained a stay from the President"
        ],
        "correctIndex": 1,
        "explanation": "The Court held that status quo ante cannot be restored when a Chief Minister chooses to resign voluntarily rather than facing the House on the floor."
      }
    ]
  },
  {
    "id": "d12-cs-7",
    "caseNumber": 7,
    "title": "Anuradha Bhasin v. Union of India (2020): Internet Shutdowns, Proportionality & Freedom of Speech",
    "legalTheme": "Right to Internet under Article 19(1)(a) & 19(1)(g), Telecom Suspension Rules 2017, Four-Pronged Proportionality Test, Duty to Publish Executive Orders",
    "factualMatrix": "On August 4, 2019, on the eve of the abrogation of Article 370, the civil administration in Jammu and Kashmir imposed severe restrictions on civilian movement under Section 144 of the CrPC and issued blanket orders shutting down mobile networks, fixed-line telephony, and all internet services across the entire Kashmir Valley and parts of Jammu.\n\nAnuradha Bhasin, executive editor of the Kashmir Times, filed a writ petition under Article 32 challenging the indefinite suspension of internet and telecom services, arguing that journalists were unable to print newspapers, report news, or exercise freedom of speech and expression under Article 19(1)(a). Concurrently, Ghulam Nabi Azad and trade representatives challenged the complete shutdown, alleging destruction of livelihoods and business under Article 19(1)(g).\n\nThe Union Government defended the shutdown citing national security, cross-border terrorism, and prevention of violent civil unrest. However, the State initially refused to place the actual suspension orders on record, claiming privilege. A 3-Judge Bench (N.V. Ramana, R. Subhash Reddy, and B.R. Gavai JJ) delivered the landmark verdict on January 10, 2020.",
    "framingQuestions": [
      "1. Does freedom of speech and expression and freedom of trade over the medium of the internet enjoy constitutional protection under Article 19?",
      "2. Can internet services be suspended indefinitely under the Temporary Suspension of Telecom Services Rules, 2017?",
      "3. What is the four-pronged Proportionality Test mandated to justify internet restrictions?",
      "4. Is the State constitutionally obligated to publish all orders restricting fundamental rights?"
    ],
    "statutoryApplicability": [
      "Article 19(1)(a) (Freedom of speech & expression over internet)",
      "Article 19(1)(g) (Right to carry on trade/business over internet)",
      "Section 5(2) of the Indian Telegraph Act, 1885",
      "Temporary Suspension of Telecom Services (Public Emergency or Public Safety) Rules, 2017",
      "Anuradha Bhasin v. Union of India (2020 3 SCC 637, 3-Judge Bench)"
    ],
    "modelAnswer": "1. CONSTITUTIONAL STATUS OF INTERNET FREEDOM:\nThe Supreme Court ruled that freedom of speech and expression (Article 19(1)(a)) and the right to practice any trade, profession, or business (Article 19(1)(g)) over the medium of the internet are constitutionally protected fundamental rights. The internet is an indispensable medium for democratic discourse, commerce, journalism, and personal life.\n\n2. INDEFINITE SUSPENSION IS ILLEGAL:\nThe Court held that an indefinite suspension of internet services is impermissible under law. The Temporary Suspension of Telecom Services Rules, 2017 do not authorize permanent or indefinite shutdowns. Suspension of internet services can only be a temporary measure for a strictly limited duration.\n\n3. THE FOUR-PRONGED PROPORTIONALITY TEST:\nAny government restriction on internet access must satisfy the doctrine of proportionality:\n(a) Legitimate Goal: The restriction must pursue a legitimate state objective (public safety or public emergency);\n(b) Suitability: The measure must have a rational nexus to achieving that objective;\n(c) Necessity (Least Restrictive Measure): The State must adopt the least invasive means available (e.g. blocking specific websites or restricting high-speed data rather than a complete blanket internet ban);\n(d) Proportionality Stricto Sensu: The benefit gained must not be disproportionately outweighed by the severe infringement of citizens' rights.\n\n4. MANDATORY PUBLICATION OF ORDERS:\nThe Court held that the State CANNOT hide behind administrative secrecy. All orders suspending telecom and internet services must be published publicly in full. Publication is an indispensable requirement of the Rule of Law so that affected citizens can understand the reasons and challenge them before constitutional courts under Article 226 or 32.",
    "markingRubric": [
      {
        "criterion": "Recognition of Article 19(1)(a) and 19(1)(g) protection over the internet",
        "marks": 2
      },
      {
        "criterion": "Doctrinal illegality of indefinite suspension under Telecom Suspension Rules",
        "marks": 3
      },
      {
        "criterion": "Elaboration of the four prongs of the Proportionality Test",
        "marks": 3
      },
      {
        "criterion": "Constitutional imperative of publication of suspension orders for judicial review",
        "marks": 2
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d12-cs7-q1",
        "testedDimension": "Landmark Ratio",
        "articleRef": "Article 19 & Anuradha Bhasin (2020)",
        "question": "In Anuradha Bhasin (2020), what was the Supreme Court's ruling regarding the constitutional status of speech and commerce over the internet?",
        "options": [
          "Internet access is a statutory privilege with no fundamental rights connection",
          "Freedom of speech and expression and the right to practice trade/business over the internet are constitutionally protected under Article 19(1)(a) and 19(1)(g)",
          "Internet shutdowns are acts of state immune from judicial review",
          "Internet access is only protected during daytime hours"
        ],
        "correctIndex": 1,
        "explanation": "The Supreme Court held that freedom of speech and the right to carry on trade over the internet enjoy full constitutional protection under Articles 19(1)(a) and 19(1)(g)."
      },
      {
        "id": "d12-cs7-q2",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Proportionality Test & Internet Shutdowns",
        "question": "Under the proportionality doctrine applied in Anuradha Bhasin, what must the State demonstrate regarding the 'necessity' of a blanket internet ban?",
        "options": [
          "That the Chief Minister approved it",
          "That no least restrictive alternative was available, and less invasive options (like blocking specific URLs or allowing 2G/broadband) were considered and found inadequate",
          "That the shutdown was cheaper than deploying additional police",
          "That the media agreed to the shutdown"
        ],
        "correctIndex": 1,
        "explanation": "Under the necessity prong, the State must prove that a total shutdown was the least restrictive measure available to achieve the security goal."
      },
      {
        "id": "d12-cs7-q3",
        "testedDimension": "Article Threshold",
        "articleRef": "Telecom Suspension Rules, 2017",
        "question": "What did the Supreme Court hold regarding the legality of an 'indefinite' suspension of internet services?",
        "options": [
          "Indefinite suspension is permissible during political transitions",
          "Indefinite suspension of telecom and internet services is impermissible under the Telecom Suspension Rules, 2017 and unconstitutional under Article 19",
          "Indefinite suspension is allowed if approved by Parliament",
          "Indefinite suspension is mandatory in border states"
        ],
        "correctIndex": 1,
        "explanation": "The Court ruled that an indefinite suspension is illegal under the statutory rules and violates the Constitution. All suspensions must be temporary and subject to periodic review."
      },
      {
        "id": "d12-cs7-q4",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Rule of Law & Publication of Orders",
        "question": "What procedural duty did the Supreme Court mandate for the State regarding telecom suspension orders?",
        "options": [
          "Keep all orders in sealed covers permanently",
          "Publish all suspension orders publicly so that aggrieved persons can exercise their constitutional right to challenge them in court",
          "Destroy the orders after 7 days",
          "Submit orders to the United Nations"
        ],
        "correctIndex": 1,
        "explanation": "The Court held that publication of executive orders is an essential element of the rule of law and natural justice, enabling judicial review by affected citizens."
      }
    ]
  },
  {
    "id": "d12-cs-8",
    "caseNumber": 8,
    "title": "Minerva Mills Ltd. v. Union of India (1980): The Limits of Emergency Amending Power",
    "legalTheme": "Striking Down Clauses (4) & (5) of Article 368, Basic Structure Doctrine, Limited Amending Power as Basic Feature, Justiciability of Presidential Satisfaction",
    "factualMatrix": "During the 1975–1977 Emergency, Parliament enacted the Constitution (Forty-second Amendment) Act, 1976, which introduced sweeping amendments to the Constitution. Crucially, Section 55 of the 42nd Amendment inserted Clauses (4) and (5) into Article 368:\n- Clause (4) provided that no constitutional amendment shall be called in question in any court on any ground;\n- Clause (5) declared that there shall be no limitation whatever on the constituent power of Parliament to amend the Constitution.\nAdditionally, the 38th and 42nd Amendments sought to immunize Presidential proclamations under Articles 352, 356, and 360 from judicial review by inserting clauses declaring the President's satisfaction to be final and conclusive.\n\nMinerva Mills, a textile undertaking whose management had been taken over by the Central Government under the Sick Textile Undertakings (Nationalisation) Act, 1974, filed a writ petition under Article 32 challenging the 42nd Amendment provisions as destructive of the Basic Structure. A 5-Judge Constitution Bench (Y.V. Chandrachud CJ, P.N. Bhagwati, A.C. Gupta, N.L. Untwalia, and P.S. Kailasam JJ) heard the case.",
    "framingQuestions": [
      "1. Can Parliament expand its amending power under Article 368 to grant itself unlimited power to amend the Constitution?",
      "2. Why is 'limited amending power' considered an essential feature of the Basic Structure?",
      "3. Is the total exclusion of judicial review over constitutional amendments and emergency proclamations constitutionally permissible?",
      "4. What is the harmonious balance between Fundamental Rights (Part III) and Directive Principles (Part IV) articulated by Chief Justice Chandrachud?"
    ],
    "statutoryApplicability": [
      "Article 368, clauses (4) and (5) (inserted by 42nd Amendment)",
      "Article 352 & Article 356 (Justiciability of Presidential satisfaction)",
      "Article 31C (as expanded by 42nd Amendment)",
      "Kesavananda Bharati v. State of Kerala (1973 4 SCC 225)",
      "Minerva Mills Ltd. v. Union of India (1980 3 SCC 625, 5-Judge Bench)"
    ],
    "modelAnswer": "1. LIMITED AMENDING POWER AS BASIC STRUCTURE:\nThe 5-Judge Constitution Bench held that Parliament cannot expand its limited amending power under Article 368 into an absolute or unlimited power. Chief Justice Y.V. Chandrachud delivered the classic aphorism: 'The donee of a limited power cannot by the exercise of that power convert the limited power into an unlimited one.' A limited amending power is one of the basic features of the Indian Constitution, and that limitation cannot be destroyed.\n\n2. INVALIDITY OF ARTICLE 368(4) & (5):\nThe Court struck down Clauses (4) and (5) of Article 368 as unconstitutional. Clause (5) attempted to confer unlimited power on Parliament to destroy the Constitution, while Clause (4) sought to banish courts from reviewing amendments. Together, they subverted the Basic Structure by extinguishing judicial review and the supremacy of the Constitution.\n\n3. JUDICIAL REVIEW IS NON-NEGOTIABLE:\nThe Court reaffirmed that Judicial Review is an indispensable basic feature of the Constitution. Any constitutional provision (such as clauses in the 38th or 42nd Amendments) that seeks to place the subjective satisfaction of the President under Article 352 or 356 beyond the scrutiny of the Supreme Court or High Courts on grounds of mala fides is unconstitutional and void.\n\n4. HARMONIOUS BALANCE BETWEEN PART III & PART IV:\nStriking down the expanded Article 31C, the Court held that the Constitution is founded on the bedrock of the balance between Fundamental Rights and Directive Principles. To give absolute primacy to Directive Principles over Fundamental Rights is to uproot the foundation of the Constitution. They are like 'two wheels of a chariot', and neither can be subordinated to the other.",
    "markingRubric": [
      {
        "criterion": "Doctrinal analysis of 'donee of a limited power' aphorism under Article 368",
        "marks": 3
      },
      {
        "criterion": "Constitutional reasoning for striking down Article 368(4) and (5)",
        "marks": 3
      },
      {
        "criterion": "Establishment of Judicial Review as an unalterable basic feature against emergency immunity",
        "marks": 2
      },
      {
        "criterion": "Exposition of the chariot wheels metaphor balancing Part III and Part IV",
        "marks": 2
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d12-cs8-q1",
        "testedDimension": "Landmark Ratio",
        "articleRef": "Article 368(4) & (5) (Minerva Mills)",
        "question": "In Minerva Mills (1980), why did the Supreme Court strike down Clauses (4) and (5) of Article 368 inserted by the 42nd Amendment?",
        "options": [
          "Because they were enacted without a quorum in Lok Sabha",
          "Because a limited amending power is a basic feature of the Constitution; Parliament as the donee of a limited power cannot convert that power into an unlimited one or destroy judicial review",
          "Because the President had not signed the amendment bill",
          "Because they conflicted with the United Nations Charter"
        ],
        "correctIndex": 1,
        "explanation": "The Court held that limited amending power is a basic feature. Parliament cannot expand its limited power into an unlimited constituent power or extinguish judicial review."
      },
      {
        "id": "d12-cs8-q2",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Part III vs Part IV Balance",
        "question": "What classic metaphor did Chief Justice Y.V. Chandrachud use in Minerva Mills to describe the relationship between Fundamental Rights and Directive Principles?",
        "options": [
          "Sword and shield",
          "Two wheels of a chariot, where to give absolute primacy to one over the other is to uproot the harmony and balance of the Constitution",
          "Master and servant",
          "Parent and child"
        ],
        "correctIndex": 1,
        "explanation": "Chief Justice Chandrachud famously wrote that Fundamental Rights and Directive Principles are like the two wheels of a chariot, neither being superior to the other."
      },
      {
        "id": "d12-cs8-q3",
        "testedDimension": "Article Threshold",
        "articleRef": "Judicial Review of Emergency Proclamations",
        "question": "What was the constitutional consequence of Minerva Mills on provisions attempting to make the President's emergency satisfaction 'final and conclusive'?",
        "options": [
          "Presidential satisfaction became completely non-justiciable",
          "Such exclusion was held unconstitutional because Judicial Review is a basic feature that cannot be taken away even during an Emergency",
          "Emergency can only be declared after a referendum",
          "The Supreme Court took over the power to proclaim emergencies"
        ],
        "correctIndex": 1,
        "explanation": "Minerva Mills cemented that judicial review is part of the basic structure. The President's satisfaction under emergency provisions cannot be made completely non-justiciable."
      },
      {
        "id": "d12-cs8-q4",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Article 31C & 42nd Amendment",
        "question": "What did the Supreme Court hold regarding the 42nd Amendment's expansion of Article 31C to give blanket protection to all Directive Principles over Articles 14 and 19?",
        "options": [
          "Upheld the expansion in full",
          "Struck down the expansion of Article 31C because subordinating Fundamental Rights wholesale to Directive Principles destroys the Basic Structure",
          "Referred the expansion to a 13-Judge Bench",
          "Modified it to apply only during Financial Emergency"
        ],
        "correctIndex": 1,
        "explanation": "The Court struck down the expanded portion of Article 31C, restoring the original position where only laws implementing Article 39(b) and 39(c) enjoyed protection."
      }
    ]
  },
  {
    "id": "d12-cs-9",
    "caseNumber": 9,
    "title": "Makhan Singh v. State of Punjab (1964): Article 359 Scope & Judicial Review of Detention",
    "legalTheme": "Suspension of Right to Move Court under Article 359 vs Retention of Substantive Rights, Ultra Vires Statutes, Mala Fides Exception, Distinction from Article 358",
    "factualMatrix": "Following the outbreak of Chinese aggression in October 1962, the President proclaimed a National Emergency under Article 352. Concurrently, Parliament enacted the Defence of India Act, 1962 and Defence of India Rules, 1962, empowering the executive to detain persons to prevent acts prejudicial to defense and public safety.\n\nOn November 3, 1962, the President issued an Order under Article 359(1) declaring that the right of any person to move any court for the enforcement of the rights conferred by Article 14, Article 21, and Article 22 shall remain suspended for the period during which the proclamation of emergency is in force.\n\nMakhan Singh and several other communists were detained across Punjab and Maharashtra. They filed writ petitions under Section 491 of the Code of Criminal Procedure, 1898 (statutory habeas corpus) before the High Courts, arguing that: (1) Section 491 is a statutory remedy independent of Article 32 or 226 and cannot be barred by an Article 359 order; (2) The Defence of India Act was ultra vires the legislature; and (3) The detentions were passed mala fide by state police. A 7-Judge Constitution Bench (P.B. Gajendragadkar, K. Subba Rao, K.N. Wanchoo, M. Hidayatullah, J.C. Shah, J.R. Mudholkar, and N. Rajagopala Ayyangar JJ) heard the historic reference.",
    "framingQuestions": [
      "1. Does an Article 359 Presidential Order bar statutory remedies like Section 491 CrPC in addition to constitutional remedies under Articles 32 and 226?",
      "2. What is the fundamental difference between the operation of Article 358 and Article 359?",
      "3. Can a detenu challenge his detention during an Article 359 order on the ground of statutory non-compliance or mala fides?",
      "4. Does an Article 359 order suspend the substantive Fundamental Rights themselves or only the judicial remedy to enforce them?"
    ],
    "statutoryApplicability": [
      "Article 358 (Suspension of provisions of Article 19)",
      "Article 359(1) (Suspension of enforcement of specified Part III rights)",
      "Section 491 of CrPC, 1898 (Statutory habeas corpus, now BNSS Section 528 analogous writ powers)",
      "Defence of India Act, 1962 & Rules",
      "Makhan Singh v. State of Punjab (1964 4 SCR 797, 7-Judge Bench)"
    ],
    "modelAnswer": "1. BAR EXTENDS TO ALL PROCEEDINGS FOR ENFORCING SPECIFIED RIGHTS:\nThe 7-Judge Bench held that the bar created by an Article 359(1) Presidential Order applies to ANY proceeding in any court (including statutory habeas corpus petitions under Section 491 of the CrPC or writ petitions under Article 226 and Article 32) if the substance of the petition seeks the enforcement of the Fundamental Rights specified in the Presidential Order. A litigant cannot bypass Article 359 merely by invoking a statutory label.\n\n2. ARTICLE 358 VS ARTICLE 359 DISTINCTION:\nThe Court drew a classic structural contrast:\n(a) Article 358 automatically suspends the provisions of Article 19 as soon as the Emergency is proclaimed; it requires no Presidential Order, applies nationwide, and suspends the substantive rights for the entire duration of the Emergency;\n(b) Article 359 does NOT automatically suspend any right; it requires a specific Presidential Order specifying the rights, the period, and the territory. Crucially, Article 359 does NOT suspend the substantive rights themselves, but only suspends the procedural right to move a court for their enforcement.\n\n3. EXCEPTIONS: MALA FIDES & ULTRA VIRES REMAINS CHALLENGEABLE:\nThe 7-Judge Bench authoritatively laid down that an Article 359 order does NOT create total immunity for executive action. A detenu can maintain a petition in court on the following grounds:\n(a) That the detention was ordered in violation of mandatory statutory provisions of the detention law;\n(b) That the detention was passed mala fide (an exercise of power in bad faith is not an exercise under the statute at all);\n(c) That the detention statute itself suffered from lack of legislative competence.\n\n4. SUBSTANTIVE RIGHTS SURVIVE:\nBecause Article 359 only suspends the judicial remedy and not the substantive right, once the Emergency is revoked, the bar to moving courts disappears, and the citizen can seek remedies (including damages for wrongful acts) if the executive acts were not immunized by a valid emergency law.",
    "markingRubric": [
      {
        "criterion": "Application of Article 359 bar to statutory habeas corpus under Section 491 CrPC",
        "marks": 3
      },
      {
        "criterion": "Textual and conceptual distinction between Article 358 and Article 359",
        "marks": 3
      },
      {
        "criterion": "Analysis of exceptions: maintainability of challenges on grounds of mala fides and statutory non-compliance",
        "marks": 2
      },
      {
        "criterion": "Consequences of suspending the remedy versus extinguishing substantive rights",
        "marks": 2
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d12-cs9-q1",
        "testedDimension": "Landmark Ratio",
        "articleRef": "Article 359 & Makhan Singh (1964)",
        "question": "In Makhan Singh (1964), what did the 7-Judge Constitution Bench hold regarding the scope of an Article 359 Presidential Order?",
        "options": [
          "It extinguishes all human rights permanently",
          "It suspends only the procedural right to move any court for the enforcement of the specified Fundamental Rights, but does NOT suspend the substantive rights themselves",
          "It applies only to proceedings in the Supreme Court, not High Courts",
          "It requires approval of the International Court of Justice"
        ],
        "correctIndex": 1,
        "explanation": "The 7-Judge Bench ruled that Article 359 suspends only the right to move courts for enforcement, without erasing the substantive fundamental rights themselves."
      },
      {
        "id": "d12-cs9-q2",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Article 358 vs Article 359",
        "question": "Which of the following is a fundamental distinction drawn in Makhan Singh between Article 358 and Article 359?",
        "options": [
          "Article 358 requires a Presidential Order, while Article 359 is automatic",
          "Article 358 automatically suspends Article 19, whereas Article 359 requires an express Presidential Order specifying which rights (other than Arts 20 & 21) are suspended",
          "Article 358 applies to courts, while Article 359 applies to tribunals",
          "Article 358 operates only during peacetime"
        ],
        "correctIndex": 1,
        "explanation": "Article 358 automatically suspends Article 19 upon proclamation of external emergency, whereas Article 359 requires a specific Presidential Order identifying the suspended rights."
      },
      {
        "id": "d12-cs9-q3",
        "testedDimension": "Article Threshold",
        "articleRef": "Mala Fides Exception under Article 359",
        "question": "According to Makhan Singh (1964), on which of the following grounds can a detenu STILL challenge his detention during an Article 359 suspension order?",
        "options": [
          "That the detention violates Article 14 (when Article 14 is specifically named in the Order)",
          "That the detention order is mala fide or passed in violation of mandatory statutory provisions of the detention enactment",
          "That the detention is too expensive for the State",
          "That the detenu wants to contest elections"
        ],
        "correctIndex": 1,
        "explanation": "The Court held that challenges based on mala fides or failure to comply with statutory mandates are NOT barred by Article 359, because an illegal or mala fide act is not an act under the statute."
      },
      {
        "id": "d12-cs9-q4",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Section 491 CrPC & Article 359",
        "question": "Can a detenu circumvent an Article 359 Presidential Order by filing a statutory habeas corpus petition under the Code of Criminal Procedure instead of a constitutional writ?",
        "options": [
          "Yes, statutory rights under CrPC can never be touched by constitutional emergency orders",
          "No, because the bar under Article 359 applies to 'the right to move any court', encompassing statutory as well as constitutional proceedings that seek enforcement of specified rights",
          "Yes, provided the petition is filed in a Magistrate's court",
          "Yes, if the detenu is a foreign citizen"
        ],
        "correctIndex": 1,
        "explanation": "The 7-Judge Bench held that the bar in Article 359 extends to 'any court' and applies equally to statutory petitions like Section 491 CrPC if the relief claimed is enforcement of the suspended rights."
      }
    ]
  },
  {
    "id": "d12-cs-10",
    "caseNumber": 10,
    "title": "Special Provisions for States (Articles 371 to 371J): Asymmetric Federalism & Regional Protection",
    "legalTheme": "Part XXI Temporary, Transitional & Special Provisions, Article 371A (Nagaland Customary Law), Article 371D (AP Presidential Order), Article 371F (Sikkim Accommodation), Article 371J (Kalyana-Karnataka)",
    "factualMatrix": "The Indian federal design is not rigidly symmetrical. To accommodate unique historical agreements, border integrations, tribal customs, and regional economic imbalances, the Constitution incorporates a sophisticated matrix of asymmetric federal provisions under Part XXI (Articles 371 to 371J).\n\nKey examples of this asymmetric architecture include:\n1. Article 371A (Nagaland, inserted by 13th Amendment, 1962): Enacts an affirmative legislative shield prohibiting Parliament from applying laws concerning Naga religious and social practices, customary law, or ownership/transfer of land, unless the Nagaland Legislative Assembly passes a resolution consenting thereto;\n2. Article 371D (Andhra Pradesh/Telangana, inserted by 32nd Amendment, 1973): Provides for equitable opportunities in public employment and education, authorizing local-cadre quotas and an Administrative Tribunal;\n3. Article 371F (Sikkim, inserted by 36th Amendment, 1975): Preserved existing laws, established special assembly composition, and authorized reserved seats for indigenous Bhutia-Lepcha communities (upheld in R.C. Poudyal 1994);\n4. Article 371J (Karnataka, inserted by 98th Amendment, 2012): Established a development board and authorized reservations in education and government jobs for the backward Hyderabad-Karnataka (Kalyana-Karnataka) region.\n\nAggrieved litigants have periodically challenged these asymmetric provisions, arguing that they violate the equality code (Articles 14, 15, and 16) or undermine national integrity. Constitutional courts have consistently evaluated these provisions under the lens of cooperative and asymmetric federalism.",
    "framingQuestions": [
      "1. What is the constitutional justification for 'asymmetric federalism' under Part XXI of the Indian Constitution?",
      "2. How does Article 371A protect the customary rights and land ownership of the Naga people against central legislation?",
      "3. Did the reservation of legislative assembly seats for Bhutia-Lepcha communities under Article 371F(f) violate secularism or equality in R.C. Poudyal (1994)?",
      "4. How does Article 371J create a constitutionally permissible exception to the rule against domicile-based public employment under Article 16(2)?"
    ],
    "statutoryApplicability": [
      "Part XXI (Temporary, Transitional and Special Provisions)",
      "Article 371A (Special provision with respect to Nagaland)",
      "Article 371D (Special provisions regarding Andhra Pradesh / Telangana)",
      "Article 371F (Special provisions regarding Sikkim)",
      "Article 371J (Special provisions for Hyderabad-Karnataka region)",
      "R.C. Poudyal v. Union of India (1994 Supp 1 SCC 324, 5-Judge Bench)"
    ],
    "modelAnswer": "1. CONSTITUTIONAL DOCTRINE OF ASYMMETRIC FEDERALISM:\nAsymmetric federalism is a structural feature of the Indian Constitution that accommodates profound cultural, historical, geographical, and economic variations among federating units. The Supreme Court has affirmed (most recently in the 2023 Article 370 ruling) that asymmetric federal arrangements under Part XXI do not compromise national unity or imply separate sovereignty; rather, they foster national integration by protecting vulnerable identities, indigenous customs, and historically backward regions.\n\n2. LEGISLATIVE SHIELD UNDER ARTICLE 371A:\nArticle 371A(1)(a) provides that no Act of Parliament in respect of:\n(i) Religious or social practices of the Nagas;\n(ii) Naga customary law and procedure;\n(iii) Administration of civil and criminal justice involving decisions according to Naga customary law;\n(iv) Ownership and transfer of land and its resources;\nshall apply to the State of Nagaland unless the Legislative Assembly of Nagaland by resolution so decides. This gives the State Assembly a constitutional veto over parliamentary enactments touching these sensitive areas.\n\n3. SIKKIM SEAT RESERVATION (R.C. POUDYAL 1994):\nIn R.C. Poudyal v. Union of India (1994 5-Judge Bench), the Supreme Court upheld the reservation of 12 seats in the Sikkim Legislative Assembly for Bhutias and Lepchas under Article 371F(f). The Court held that when a new territory is admitted into the Union under Article 2, Parliament has wide constituent power under Article 371F to make transitional and special accommodations honoring historical commitments and protecting indigenous minority populations from being overwhelmed.\n\n4. ARTICLE 371J DOMICILE RESERVATIONS:\nUnder Article 16(2), discrimination in public employment based on residence/domicile is ordinarily prohibited unless enacted by Parliament under Article 16(3). Article 371J operates as a specialized constitutional exception: it empowers the Governor of Karnataka to provide for local reservation in state government jobs and educational institutions for persons belonging to the backward Hyderabad-Karnataka region, advancing substantive equality under Articles 14, 15(4), and 16(4).",
    "markingRubric": [
      {
        "criterion": "Doctrinal rationale of asymmetric federalism within Indian constitutional unity",
        "marks": 3
      },
      {
        "criterion": "Scope of legislative shield under Article 371A for customary law and land",
        "marks": 2
      },
      {
        "criterion": "Constitutional validity of Article 371F and R.C. Poudyal holding",
        "marks": 3
      },
      {
        "criterion": "Harmonization of Article 371J with the equality code under Article 16",
        "marks": 2
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d12-cs10-q1",
        "testedDimension": "Landmark Ratio",
        "articleRef": "Article 371F & R.C. Poudyal (1994)",
        "question": "In R.C. Poudyal v. Union of India (1994), what did the 5-Judge Constitution Bench hold regarding the reservation of Assembly seats for the Bhutia-Lepcha communities under Article 371F?",
        "options": [
          "Struck it down as an unconstitutional religious quota violating Article 325",
          "Upheld the reservation as a valid exercise of Parliament's power under Article 2 and Article 371F to make special accommodations honoring historical commitments upon the accession of Sikkim",
          "Ordered Sikkim to be merged with West Bengal",
          "Held that only the Governor can sit in the Assembly"
        ],
        "correctIndex": 1,
        "explanation": "The Supreme Court upheld the seat reservations for Bhutias and Lepchas under Article 371F as a constitutionally valid accommodation of historical terms when Sikkim joined India."
      },
      {
        "id": "d12-cs10-q2",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Part XXI & Asymmetric Federalism",
        "question": "What did Chief Justice Chandrachud observe in the 2023 Article 370 verdict regarding the nature of asymmetric federalism under Articles 371 to 371J?",
        "options": [
          "Asymmetric federalism grants residual sovereignty and right of secession to States",
          "Asymmetric federalism accommodates special regional needs and diversity, but does NOT denote sovereignty; all units remain bound by the supremacy of the Indian Constitution",
          "Asymmetric federalism is contrary to the Basic Structure",
          "All special provisions will automatically expire after 10 years"
        ],
        "correctIndex": 1,
        "explanation": "The Court held that asymmetric federalism under Part XXI accommodates cultural and regional differences, but does not grant separate sovereignty."
      },
      {
        "id": "d12-cs10-q3",
        "testedDimension": "Article Threshold",
        "articleRef": "Article 371A (Nagaland)",
        "question": "Under Article 371A, which of the following subjects CANNOT be governed by an Act of Parliament in Nagaland without the approval of the Nagaland Legislative Assembly?",
        "options": [
          "Defence and national security",
          "Religious or social practices of the Nagas, Naga customary law, and ownership and transfer of land and its resources",
          "Foreign relations and passport issuance",
          "Currency and central banking"
        ],
        "correctIndex": 1,
        "explanation": "Article 371A(1)(a) requires a resolution of the Nagaland Assembly before Acts of Parliament relating to Naga social/religious practices, customary law, and land ownership can apply."
      },
      {
        "id": "d12-cs10-q4",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Article 371J & Article 16",
        "question": "What special power does Article 371J confer on the Governor of Karnataka regarding the Hyderabad-Karnataka region?",
        "options": [
          "Power to declare martial law in the region",
          "Power to establish a separate development board and provide for reservations in state government posts and educational institutions for local residents",
          "Power to levy separate custom duties on goods entering the region",
          "Power to establish a separate Supreme Court bench in Kalaburagi"
        ],
        "correctIndex": 1,
        "explanation": "Article 371J empowers the Governor to establish a development board and authorize reservations in education and government jobs for local residents of the Kalyana-Karnataka region."
      }
    ]
  }
];
