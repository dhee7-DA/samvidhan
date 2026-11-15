import type { BootcampComprehensionCaseStudy } from '../bootcampTypes';

export const DAY2_COMPREHENSION_CASE_STUDIES: BootcampComprehensionCaseStudy[] = [
  {
    "id": "d2-cs-1",
    "title": "Case Study 1: Sub-Classification within Scheduled Castes & The Davinder Singh Threshold",
    "legalTheme": "Sub-Classification within Scheduled Castes under Article 16(4) vs. Article 341 Presidential List",
    "factualMatrix": "The State of Punjab enacted the \"Punjab Scheduled Castes (Affirmative Action and Rationalisation of Benefits) Act, 2025\". Section 4(1) of the Act divided the existing 25% Scheduled Caste reservation quota in state public employment into two equal compartments: 12.5% reserved as a first preference for \"Balmikis and Mazhabi Sikhs\", and the remaining 12.5% for \"Other Scheduled Castes\". The State Government defended the legislation by producing an exhaustive, empirical report prepared by a High-Powered Judicial Commission, which demonstrated that over the last 50 years, two relatively advanced sub-castes had cornered 82% of all Class I and Class II government jobs under the SC quota, while the Balmiki and Mazhabi communities, who were engaged in traditional sanitation and manual scavenging work, held an abysmal 0.6% representation in gazetted posts.\n\nAn association representing the non-Balmiki Scheduled Castes challenged the Act before the High Court of Punjab & Haryana, praying for a declaration of invalidity on three primary grounds: (1) In E.V. Chinnaiah v. State of A.P. (2004), a 5-Judge Constitution Bench held that Scheduled Castes notified under Article 341 form a single, monolithic, homogenous class that cannot be sub-divided by any State Legislature; (2) Sub-classification amounts to tinkering with and amending the Presidential List, which is the exclusive prerogative of Parliament under Article 341(2); and (3) Creating micro-quotas within SCs destroys inter-se equality under Article 14.",
    "framingQuestions": [
      "1. Is the State Legislature competent under Article 16(4) to sub-classify Scheduled Castes to provide preferential sub-quotas in light of the 7-Judge Bench ruling in State of Punjab v. Davinder Singh (2024)?",
      "2. Does sub-classification of Scheduled Castes alter, amend, or vary the Presidential List notified under Article 341 of the Constitution?",
      "3. What constitutional standard of empirical proof and quantifiable data must the State satisfy before enacting a sub-classification policy?"
    ],
    "statutoryApplicability": [
      "Article 14",
      "Article 15(4)",
      "Article 16(4)",
      "Article 341",
      "State of Punjab v. Davinder Singh (2024 7-Judge Bench)"
    ],
    "modelAnswer": "1. STATE COMPETENCE UNDER ARTICLE 16(4): The challenge founded on E.V. Chinnaiah (2004) must fail completely. In August 2024, a 7-Judge Constitution Bench of the Supreme Court in State of Punjab v. Davinder Singh expressly OVERRULED E.V. Chinnaiah by a 6:1 majority. Chief Justice D.Y. Chandrachud and Justice B.R. Gavai established that the Scheduled Castes are NOT a homogenous, monolithic class. Centuries of historical oppression have produced profound inter-se inequalities and varying degrees of backwardness within the Scheduled Castes. Article 16(4) is an enabling provision embodying substantive equality; it empowers the State to identify the most deprived sub-groups and provide them preferential sub-quotas so that affirmative action is not captured exclusively by advanced sub-castes.\n\n2. ARTICLE 341 DISTINCTION (IDENTIFICATION VS ALLOCATION): The Supreme Court in Davinder Singh (2024) drew a fundamental constitutional distinction between the \"identification\" of castes under Article 341 and the \"allocation of benefits\" under Article 16(4). Under Article 341, the President notifies the castes for the purpose of the Constitution, and Parliament alone has the power under Article 341(2) to include or exclude a caste. Sub-classification does NOT include or exclude any caste from the Presidential List; it merely apportions reservation percentages among castes already notified. Therefore, Section 4(1) of the Punjab Act does not usurp Parliamentary power under Article 341.\n\n3. CONSTITUTIONAL REQUIREMENT OF QUANTIFIABLE DATA: Sub-classification cannot be an exercise of political whim or electoral appeasement. The Supreme Court laid down two strict constitutional safeguards: (a) The State must demonstrate through objective, quantifiable empirical data that the beneficiary sub-group is inadequately represented in public services; and (b) The State cannot allot 100% of the quota to a sub-category to the total exclusion of other SC communities. Here, the High-Powered Commission's report conclusively proved that Balmikis held only 0.6% of posts; hence, the Punjab Act satisfies the constitutional threshold and is valid.",
    "markingRubric": [
      {
        "criterion": "Authoritative analysis and citation of State of Punjab v. Davinder Singh (2024 7-Judge Bench) overruling Chinnaiah",
        "marks": 4
      },
      {
        "criterion": "Constitutional distinction between Article 341 identification and Article 16(4) quota allocation",
        "marks": 3
      },
      {
        "criterion": "Application of the quantifiable empirical data test and rejection of arbitrary executive whim",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d2-cs1-q1",
        "question": "Which earlier Constitution Bench decision was expressly overruled by the 7-Judge Bench in State of Punjab v. Davinder Singh (2024)?",
        "options": [
          "M.R. Balaji v. State of Mysore (1963)",
          "E.V. Chinnaiah v. State of Andhra Pradesh (2004 5-Judge Bench)",
          "T. Devadasan v. Union of India (1964)",
          "Indra Sawhney v. Union of India (1992)"
        ],
        "correctIndex": 1,
        "explanation": "In Davinder Singh (2024), the 7-Judge Bench overruled the 5-Judge Bench ruling in E.V. Chinnaiah (2004), which had wrongly held that Scheduled Castes are an indivisible monolith.",
        "articleRef": "Articles 16(4) & 341",
        "testedDimension": "Article Threshold"
      },
      {
        "id": "d2-cs1-q2",
        "question": "Under the doctrine laid down in Davinder Singh (2024), does state sub-classification of Scheduled Castes violate Article 341 of the Constitution?",
        "options": [
          "Yes, any division of SCs amends the Presidential List",
          "No, because Article 341 pertains only to the identification of castes by the President/Parliament, while Article 16(4) empowers the State to allocate reservation benefits among already identified castes",
          "Yes, unless approved by a 2/3rd majority of Parliament",
          "Only if the Governor vetoes the bill"
        ],
        "correctIndex": 1,
        "explanation": "The Supreme Court held that Article 341 creates the pool of beneficiaries, whereas Article 16(4) deals with affirmative measure allocation. Sub-classification does not touch the Presidential notification.",
        "articleRef": "Article 341",
        "testedDimension": "Legal Doctrine"
      },
      {
        "id": "d2-cs1-q3",
        "question": "What is the mandatory prerequisite that a State Government must satisfy before creating a sub-quota within Scheduled Castes under Article 16(4)?",
        "options": [
          "The State must obtain concurrence from the National Commission for Minorities",
          "The State must produce quantifiable empirical data establishing that the preferred sub-caste suffers from severe inadequacy of representation in public employment",
          "The State must declare a financial emergency",
          "The State must dissolve the State Legislative Council"
        ],
        "correctIndex": 1,
        "explanation": "Chief Justice Chandrachud and Justice Gavai held that sub-classification cannot be based on political discretion; it must be backed by verifiable, quantifiable data showing inadequate representation.",
        "articleRef": "Article 16(4)",
        "testedDimension": "Landmark Ratio"
      },
      {
        "id": "d2-cs1-q4",
        "question": "Under Davinder Singh (2024), can a State Legislature reserve 100% of the entire Scheduled Caste quota exclusively for a single favored sub-caste?",
        "options": [
          "Yes, the State has plenary authority over reservations",
          "No, the Supreme Court specifically held that the State cannot create a 100% monopoly for one sub-caste, as it would wholly exclude other SC groups and violate Article 14",
          "Yes, if recommended by a High-Powered Commission",
          "Yes, for a maximum period of 5 years"
        ],
        "correctIndex": 1,
        "explanation": "The Supreme Court ruled that sub-classification cannot be used to completely exclude other SC communities from the quota; reasonable apportionment must be maintained.",
        "articleRef": "Articles 14 & 16(4)",
        "testedDimension": "Judicial Remedy"
      }
    ],
    "caseNumber": 1
  },
  {
    "id": "d2-cs-2",
    "title": "Case Study 2: Creamy Layer Application to Scheduled Castes and Scheduled Tribes",
    "legalTheme": "Extension of the Creamy Layer Exclusion to SC/ST Promotional Cadres",
    "factualMatrix": "The State of Rajasthan issued a service notification governing promotions in the State Commercial Taxes Department. The notification implemented Article 16(4A) by providing a 16% promotional quota with consequential seniority for Scheduled Caste officers. However, the notification included Clause 6, which incorporated a \"Creamy Layer Bar\": it provided that any Scheduled Caste officer whose annual family income from non-agricultural sources exceeded Rs 12 Lakhs per annum, or whose parents were Class-I / Group-A gazetted officers, shall be excluded from claiming promotional reservation and must compete solely on general merit.\n\nAn association of senior SC gazetted officers challenged Clause 6 before the High Court, contending that: (1) The Creamy Layer principle was formulated in Indra Sawhney (1992) exclusively for Other Backward Classes (OBCs) and cannot be applied to Scheduled Castes; (2) Scheduled Castes suffer from the immutable social stigma of untouchability, which does not vanish with economic wealth; and (3) Applying the creamy layer to SCs reduces the availability of candidates for higher administrative posts and violates Article 16(4A). The State defended Clause 6 by citing the observations of the Constitution Bench in M. Nagaraj (2006), Jarnail Singh (2018), and the 7-Judge Bench ruling in State of Punjab v. Davinder Singh (2024).",
    "framingQuestions": [
      "1. Does the Creamy Layer exclusion principle constitutionally apply to Scheduled Castes and Scheduled Tribes in promotional reservations under Article 16(4A)?",
      "2. Does excluding the Creamy Layer from SC reservations violate the Presidential notification under Article 341?",
      "3. How does the exclusion of affluent SC officers further the constitutional objective of substantive equality under Article 14 and Article 16(1)?"
    ],
    "statutoryApplicability": [
      "Article 14",
      "Article 16(1)",
      "Article 16(4A)",
      "Article 341",
      "M. Nagaraj (2006)",
      "Jarnail Singh (2018)",
      "State of Punjab v. Davinder Singh (2024)"
    ],
    "modelAnswer": "1. APPLICABILITY OF CREAMY LAYER TO SC/ST: The challenge to Clause 6 must fail. While Indra Sawhney (1992) initially applied the Creamy Layer to OBCs, the 5-Judge Constitution Bench in M. Nagaraj (2006) and Jarnail Singh (2018) decisively extended the Creamy Layer principle to SCs and STs in matters of promotional reservations under Article 16(4A). In Jarnail Singh (2018), Justice Nariman held that the Creamy Layer is a constitutional principle flowing directly from Article 14 equality; when an individual has reached the highest economic and social strata, their children cannot be treated as socially disabled for competing against impoverished members of their community. This was emphatically reiterated by 4 judges of the 7-Judge Bench in State of Punjab v. Davinder Singh (2024), where Justice B.R. Gavai noted that children of IAS/IPS officers belonging to SCs do not suffer the same disadvantages as children of rural manual scavengers.\n\n2. NO CONFLICT WITH ARTICLE 341: Applying the Creamy Layer does not tinker with the Presidential List under Article 341. A person excluded under the Creamy Layer remains a member of the Scheduled Caste for all civil, social, and statutory purposes (e.g. protection under the SC/ST PoA Act and political representation under Article 330/332). The Creamy Layer only operates as an economic gatekeeper for the distribution of public employment benefits under Article 16(4A).\n\n3. PROMOTION OF SUBSTANTIVE EQUALITY: Equality under Article 14 demands that unequals must not be treated equally. If affluent, second-generation high-earning SC families are allowed to continuously corner all promotional seats, the truly impoverished and disadvantaged members of the Scheduled Castes who remain trapped in generational poverty will never rise. Therefore, Clause 6's income threshold of Rs 12 Lakhs is constitutionally valid and furthers real substantive equality.",
    "markingRubric": [
      {
        "criterion": "Analysis of Jarnail Singh (2018) and Davinder Singh (2024) applying Creamy Layer to SC/ST promotions",
        "marks": 4
      },
      {
        "criterion": "Harmonization of Article 341 social identity with Article 16(4A) economic gatekeeping",
        "marks": 3
      },
      {
        "criterion": "Doctrinal application of substantive equality and prevention of quota monopolization",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d2-cs2-q1",
        "question": "In which landmark 5-Judge Constitution Bench decision was the Creamy Layer principle first applied to Scheduled Castes and Scheduled Tribes in promotional quotas?",
        "options": [
          "State of Madras v. Champakam Dorairajan (1951)",
          "M. Nagaraj v. Union of India (2006)",
          "M.R. Balaji v. State of Mysore (1963)",
          "T. Devadasan v. Union of India (1964)"
        ],
        "correctIndex": 1,
        "explanation": "In M. Nagaraj (2006), the 5-Judge Constitution Bench held that the Creamy Layer principle applies to SCs and STs in promotional reservations under Article 16(4A), later affirmed in Jarnail Singh (2018).",
        "articleRef": "Article 16(4A)",
        "testedDimension": "Article Threshold"
      },
      {
        "id": "d2-cs2-q2",
        "question": "What did the 5-Judge Bench in Jarnail Singh v. Lachhmi Narain Gupta (2018) hold regarding the relationship between the Creamy Layer and Article 14?",
        "options": [
          "Creamy Layer is an unconstitutional concept that violates the Basic Structure",
          "The Creamy Layer principle is an essential facet of the Equality clause under Article 14; treating forward elements of a backward class equally with backward elements violates Article 14",
          "Creamy Layer applies only to private sector jobs",
          "Creamy Layer can only be fixed by the Governor"
        ],
        "correctIndex": 1,
        "explanation": "Nariman J held that the Creamy Layer is part of the core equality code under Articles 14 and 16(1). If the creamy layer is not excluded, unequals are treated as equals.",
        "articleRef": "Articles 14 & 16",
        "testedDimension": "Legal Doctrine"
      },
      {
        "id": "d2-cs2-q3",
        "question": "Does the exclusion of a person from reservation benefits under the Creamy Layer result in their removal from the Presidential List of Scheduled Castes under Article 341?",
        "options": [
          "Yes, they lose their SC status permanently",
          "No, they remain members of the Scheduled Caste for all other legal and constitutional purposes; only the economic benefit of public job reservation under Article 16 is withheld",
          "They become General Category for 10 years only",
          "The President must issue a gazette notification of removal"
        ],
        "correctIndex": 1,
        "explanation": "Creamy layer exclusion is an employment gatekeeper under Article 16, not a stripping of caste identity or protection under Article 341 or the SC/ST PoA Act.",
        "articleRef": "Articles 16(4) & 341",
        "testedDimension": "Landmark Ratio"
      },
      {
        "id": "d2-cs2-q4",
        "question": "In State of Punjab v. Davinder Singh (2024), what was the view of the majority judges regarding the implementation of the Creamy Layer for SCs and STs?",
        "options": [
          "The State must identify the creamy layer among SCs and STs to prevent affirmative benefits from being captured by elite families",
          "Creamy layer for SCs is forbidden by the Constitution",
          "Creamy layer can only be implemented after a national referendum",
          "Only income above Rs 50 Lakhs can be considered creamy layer"
        ],
        "correctIndex": 0,
        "explanation": "Four judges (Gavai, Nath, Sharma, Mithal JJ) in Davinder Singh (2024) held that the State must evolve a mechanism to identify the creamy layer among SCs/STs to achieve genuine equality.",
        "articleRef": "Article 16(4)",
        "testedDimension": "Judicial Remedy"
      }
    ],
    "caseNumber": 2
  },
  {
    "id": "d2-cs-3",
    "title": "Case Study 3: The 50% Reservation Ceiling & Extraordinary Circumstances",
    "legalTheme": "The 50% Reservation Cap under Indra Sawhney and Exceptional Breaches",
    "factualMatrix": "The State of Deccan enacted the \"Deccan Socially and Educationally Backward Classes (Reservation in Public Posts and Educational Seats) Act, 2024\". The Act created a separate 16% reservation quota for the agrarian \"Kshatriya-Patil\" community. Prior to this enactment, the State already had 50% reservation (15% SC, 7.5% ST, and 27.5% OBC). With the addition of the 16% Patil quota, total reservations in the State escalated to 66%. The State Government defended the legislation on the basis of a report submitted by the State Backward Classes Commission, which found that 70% of Patil families were engaged in small-scale farming, suffered from rural indebtedness, and had a higher rate of school dropouts after Class 10.\n\nA group of medical aspirants and civil service aspirants filed a writ petition under Article 32 before the Supreme Court, challenging the Act as unconstitutional on the ground that it directly breaches the 50% ceiling rule established by the 9-Judge Constitution Bench in Indra Sawhney v. Union of India (1992). The State contended in response that: (1) The 50% limit was only an obiter dictum; (2) The Commission proved social and educational backwardness; and (3) Extraordinary circumstances justified breaching the 50% cap.",
    "framingQuestions": [
      "1. Is the 50% reservation ceiling laid down in Indra Sawhney (1992) a binding constitutional rule or merely directory?",
      "2. What constitutes \"extraordinary circumstances\" permitting a State to breach the 50% reservation ceiling under Article 16(4)?",
      "3. Applying the 5-Judge Constitution Bench ruling in the Maratha Reservation Case (Jaishri Laxmanrao Patil 2021), is the Deccan Act constitutionally valid?"
    ],
    "statutoryApplicability": [
      "Article 14",
      "Article 15(4)",
      "Article 16(4)",
      "Indra Sawhney v. Union of India (1992 9-Judge Bench)",
      "Jaishri Laxmanrao Patil v. Chief Minister, Maharashtra (2021 5-Judge Bench)"
    ],
    "modelAnswer": "1. BINDING CONSTITUTIONAL STATUS OF THE 50% CEILING: In Indra Sawhney (1992 9-Judge Bench), the Supreme Court firmly established that reservations under Article 16(4) cannot exceed 50%. This rule is not a mere directory guideline; it is a binding constitutional limitation designed to balance substantive equality with formal merit under Articles 14 and 16(1). In Jaishri Laxmanrao Patil (Maratha Reservation Case, 2021), a unanimous 5-Judge Constitution Bench refused to refer Indra Sawhney to an 11-Judge Bench and emphatically reiterated that the 50% ceiling is binding constitutional law across the territory of India.\n\n2. MEANING OF \"EXTRAORDINARY CIRCUMSTANCES\": In Indra Sawhney (1992), Justice Jeevan Reddy recognized a very narrow exception: the 50% cap could be relaxed only in \"extraordinary situations\" inherent in the remote, far-flung, and inaccessible areas of the country (such as isolated tribes living in border or jungle regions who are totally out of the mainstream of national life). In Jaishri Laxmanrao Patil (2021), the Court held that the mere fact that a large community constitutes 30% of the population or is engaged in agriculture and facing economic distress does NOT constitute an \"extraordinary situation\" to breach the 50% ceiling.\n\n3. INVALIDITY OF THE DECCAN ACT: Applying Jaishri Laxmanrao Patil (2021), the Deccan Act is unconstitutional and void. The Patil community is a mainstream dominant agrarian group with substantial social, political, and economic presence. Agrarian distress or educational dropouts cannot justify obliterating the 50% ceiling. Consequently, escalating reservations to 66% destroys the guarantee of equality under Article 16(1) and is ultra vires Part III.",
    "markingRubric": [
      {
        "criterion": "Authoritative application of Indra Sawhney (1992) and Jaishri Laxmanrao Patil (2021 Maratha Case)",
        "marks": 4
      },
      {
        "criterion": "Precise legal definition of \"extraordinary circumstances\" (remote/isolated vs mainstream agrarian)",
        "marks": 3
      },
      {
        "criterion": "Constitutional balancing between Article 16(1) merit and Article 16(4) affirmative action",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d2-cs3-q1",
        "question": "In which landmark 9-Judge Constitution Bench case was the 50% reservation ceiling formally cemented into Indian constitutional law?",
        "options": [
          "State of Kerala v. N.M. Thomas (1976)",
          "Indra Sawhney v. Union of India (1992)",
          "Kesavananda Bharati v. State of Kerala (1973)",
          "Minerva Mills v. Union of India (1980)"
        ],
        "correctIndex": 1,
        "explanation": "In Indra Sawhney (1992), the 9-Judge Bench held that reservations under Article 16(4) cannot exceed 50%, ensuring balance between affirmative action and merit.",
        "articleRef": "Article 16(4)",
        "testedDimension": "Article Threshold"
      },
      {
        "id": "d2-cs3-q2",
        "question": "In Jaishri Laxmanrao Patil (2021), what did the 5-Judge Bench decide regarding the plea to refer Indra Sawhney (1992) to a larger 11-Judge Bench?",
        "options": [
          "Referred the matter to an 11-Judge Bench immediately",
          "Unanimously refused to refer Indra Sawhney to a larger Bench, holding that the 50% limit is well-settled, robust, and represents sound constitutional law",
          "Allowed States to fix 75% reservation",
          "Abolished all OBC reservations"
        ],
        "correctIndex": 1,
        "explanation": "All five judges in the Maratha Case (2021) unanimously held that there was no ground to revisit or refer the 50% ceiling laid down in Indra Sawhney.",
        "articleRef": "Article 16(4)",
        "testedDimension": "Legal Doctrine"
      },
      {
        "id": "d2-cs3-q3",
        "question": "Under the exception recognized in Indra Sawhney (1992), what constitutes an \"extraordinary situation\" permitting a relaxation of the 50% ceiling?",
        "options": [
          "A community threatening a statewide agitation or strike",
          "Far-flung and remote areas where populations are completely outside the mainstream of national life (e.g. isolated tribal communities in border regions)",
          "General economic recession in the State",
          "A State election manifesto commitment"
        ],
        "correctIndex": 1,
        "explanation": "The Supreme Court restricted the exception strictly to far-flung, remote, inaccessible regions where populations need extraordinary integration.",
        "articleRef": "Article 16(4)",
        "testedDimension": "Landmark Ratio"
      },
      {
        "id": "d2-cs3-q4",
        "question": "Can agrarian distress or population size of a mainstream community justify breaching the 50% reservation cap according to Jaishri Laxmanrao Patil (2021)?",
        "options": [
          "Yes, if recommended by a State Commission",
          "No, the Supreme Court specifically held that population size and agricultural distress do not constitute extraordinary circumstances under Indra Sawhney",
          "Yes, up to a maximum of 70%",
          "Yes, with Presidential assent under Article 254(2)"
        ],
        "correctIndex": 1,
        "explanation": "The 5-Judge Bench held that mainstream communities sharing in political and social power cannot claim extraordinary circumstances to breach the 50% cap.",
        "articleRef": "Article 16(4)",
        "testedDimension": "Judicial Remedy"
      }
    ],
    "caseNumber": 3
  },
  {
    "id": "d2-cs-4",
    "title": "Case Study 4: 10% EWS Reservation & Non-Inclusion of SC/ST/OBCs",
    "legalTheme": "The 103rd Constitutional Amendment Act, 2019 and Janhit Abhiyan (2022)",
    "factualMatrix": "Parliament enacted the Constitution (One Hundred and Third Amendment) Act, 2019, which inserted Clause (6) into Article 15 and Clause (6) into Article 16. These provisions enabled the State to provide up to 10% reservation in educational institutions (including private unaided institutions) and public employment for \"Economically Weaker Sections (EWS)\" of citizens. However, the explanation to both clauses expressly excluded citizens belonging to the Scheduled Castes (SCs), Scheduled Tribes (STs), and Other Backward Classes (OBCs) from the benefit of the EWS quota.\n\nA public interest litigation was filed before the Supreme Court challenging the constitutional validity of the 103rd Amendment. The petitioners contended that: (1) Economic status alone cannot be the sole criterion for affirmative action under the Indian Constitution; (2) Excluding SCs, STs, and OBCs from the 10% EWS quota discriminates against the poorest among them purely on the basis of caste and religion, violating the core equality code of Article 14 and destroying the Basic Structure; and (3) Imposing the 10% EWS quota on top of the existing 50% reservations breaches the 50% ceiling rule established in Indra Sawhney.",
    "framingQuestions": [
      "1. Can economic criteria alone form a valid basis for classification and reservation under the Indian Constitution?",
      "2. Does the exclusion of SCs, STs, and non-creamy layer OBCs from the EWS quota violate the Basic Structure or Article 14?",
      "3. Does the 10% EWS reservation violate the 50% ceiling rule established in Indra Sawhney (1992)?"
    ],
    "statutoryApplicability": [
      "Article 14",
      "Article 15(6)",
      "Article 16(6)",
      "103rd Constitutional Amendment Act, 2019",
      "Janhit Abhiyan v. Union of India (2022 5-Judge Bench)"
    ],
    "modelAnswer": "1. ECONOMIC DISADVANTAGE AS A VALID BASIS: In Janhit Abhiyan v. Union of India (2022 5-Judge Bench 3:2), the Supreme Court upheld the constitutional validity of the 103rd Amendment. Justices Dinesh Maheshwari, Bela Trivedi, and J.B. Pardiwala held that economic disadvantage is a constitutionally recognized form of backwardness. The Preamble itself promises \"Justice, social, economic and political\". Affirmative action is not restricted to remedying historical caste discrimination; it can validly be deployed to eradicate systemic economic poverty and provide equal opportunity to economically marginalized citizens.\n\n2. VALIDITY OF EXCLUDING SC/ST/OBC: The majority rejected the argument that excluding SCs, STs, and OBCs violates the Basic Structure or Article 14. The Court reasoned that SCs, STs, and OBCs already constitute a separate, protected compartment enjoying affirmative reservations under Articles 15(4), 15(5), and 16(4) (accounting for 49.5% of seats). Permitting them to also access the 10% EWS quota would amount to double-dipping and would frustrate the specific purpose of the 103rd Amendment, which was designed to uplift those who were hitherto unrepresented and unprotected by any affirmative action.\n\n3. INDRA SAWHNEY 50% CEILING INAPPLICABLE: The 50% ceiling rule laid down in Indra Sawhney (1992) was formulated specifically for caste-based reservations under Articles 15(4) and 16(4). The 103rd Amendment introduced an independent, distinct constitutional code under Articles 15(6) and 16(6). The 50% ceiling was never intended to be an immutable barrier against constitutional amendments addressing economic vulnerability. Consequently, the 10% EWS quota is constitutionally valid.",
    "markingRubric": [
      {
        "criterion": "Deep analysis of Janhit Abhiyan (2022 5-Judge Bench 3:2 majority ratio)",
        "marks": 4
      },
      {
        "criterion": "Constitutional justification for excluding SC/ST/OBC (prevention of double benefit and distinct compartments)",
        "marks": 3
      },
      {
        "criterion": "Distinction between statutory 50% cap on social quotas vs constitutional amendment for economic quotas",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d2-cs4-q1",
        "question": "Which Constitutional Amendment Act inserted Article 15(6) and Article 16(6) to introduce 10% EWS reservation?",
        "options": [
          "93rd Constitutional Amendment Act, 2005",
          "101st Constitutional Amendment Act, 2016",
          "102nd Constitutional Amendment Act, 2018",
          "103rd Constitutional Amendment Act, 2019"
        ],
        "correctIndex": 3,
        "explanation": "The 103rd Constitutional Amendment Act, 2019 introduced Articles 15(6) and 16(6) to provide up to 10% reservation for Economically Weaker Sections.",
        "articleRef": "Articles 15(6) & 16(6)",
        "testedDimension": "Article Threshold"
      },
      {
        "id": "d2-cs4-q2",
        "question": "In Janhit Abhiyan v. Union of India (2022), what was the bench strength and voting split that upheld the 103rd Constitutional Amendment?",
        "options": [
          "9-Judge Bench (Unanimous)",
          "5-Judge Bench (3:2 Majority)",
          "7-Judge Bench (5:2 Majority)",
          "3-Judge Bench (2:1 Majority)"
        ],
        "correctIndex": 1,
        "explanation": "A 5-Judge Constitution Bench upheld the EWS amendment by a 3:2 majority (Maheshwari, Trivedi, and Pardiwala JJ in majority; Lalit CJI and Bhat J dissenting).",
        "articleRef": "Articles 15(6) & 16(6)",
        "testedDimension": "Legal Doctrine"
      },
      {
        "id": "d2-cs4-q3",
        "question": "Why did the majority in Janhit Abhiyan hold that excluding SCs, STs, and OBCs from EWS does not violate Article 14?",
        "options": [
          "Because SCs, STs, and OBCs already receive comprehensive affirmative reservations under Articles 15(4) and 16(4), and preventing double benefit maintains balanced classification",
          "Because SCs and STs are not citizens of India",
          "Because poverty does not exist among SCs and STs",
          "Because Parliament can strip any community of rights"
        ],
        "correctIndex": 0,
        "explanation": "The majority held that SCs/STs/OBCs form a separate class that already enjoys 49.5% affirmative action; excluding them from EWS prevents an unfair double benefit.",
        "articleRef": "Articles 14 & 15(6)",
        "testedDimension": "Landmark Ratio"
      },
      {
        "id": "d2-cs4-q4",
        "question": "Does the 10% EWS reservation apply to private unaided educational institutions under Article 15(6)?",
        "options": [
          "No, private unaided schools are completely exempt",
          "Yes, Article 15(6)(b) expressly covers private educational institutions, whether aided or unaided, other than minority educational institutions",
          "Only with the consent of the School Management Committee",
          "Only for primary schools"
        ],
        "correctIndex": 1,
        "explanation": "Article 15(6)(b) applies to private educational institutions, whether aided or unaided, except Article 30(1) minority educational institutions.",
        "articleRef": "Article 15(6)(b)",
        "testedDimension": "Judicial Remedy"
      }
    ],
    "caseNumber": 4
  },
  {
    "id": "d2-cs-5",
    "title": "Case Study 5: Manifest Arbitrariness & Equality under Article 14",
    "legalTheme": "The Doctrine of Manifest Arbitrariness to Strike Down Primary Legislation",
    "factualMatrix": "The State Legislature of Greenfield enacted the \"Greenfield Public Safety and Habitual Offender Interception Act, 2025\". Section 8 of the Act provided that any person accused of an economic offence involving more than Rs 1 Crore could be subjected to preventive house arrest for a period of up to 6 months upon the unconfirmed satisfaction of a District Magistrate, with no right to legal representation, no right to inspect the adverse intelligence reports, and no judicial review before the High Court for 180 days. Furthermore, Section 12 provided that if the accused failed to prove their innocence during this detention, their entire commercial and residential properties would stand automatically forfeited to the State without a trial.\n\nA prominent business executive detained under Section 8 filed an Article 32 writ petition challenging the Act as unconstitutional. The State Solicitor General argued that: (1) Courts can only strike down primary legislation on the grounds of legislative incompetence or violation of express fundamental rights, not on vague notions of arbitrariness; (2) The traditional test of reasonable classification under Anwar Ali Sarkar (1952) was satisfied because large economic offenders form an intelligible differentia; and (3) The State has plenary power to deter economic sabotage.",
    "framingQuestions": [
      "1. Can a plenary statute enacted by Parliament or a State Legislature be struck down on the ground of \"Manifest Arbitrariness\" under Article 14?",
      "2. What is the constitutional definition and scope of the \"Manifest Arbitrariness\" doctrine as articulated in Shayara Bano, Navtej Johar, and Joseph Shine?",
      "3. Applying Article 14 and Article 21, is Section 8 and Section 12 of the Greenfield Act constitutionally sustainable?"
    ],
    "statutoryApplicability": [
      "Article 14",
      "Article 21",
      "E.P. Royappa v. State of Tamil Nadu (1974)",
      "Shayara Bano v. Union of India (2017 5-Judge Bench)",
      "Joseph Shine v. Union of India (2018 5-Judge Bench)"
    ],
    "modelAnswer": "1. MANIFEST ARBITRARINESS APPLIES TO PRIMARY STATUTES: The State's argument that primary legislation cannot be challenged on arbitrariness is obsolete. In Shayara Bano (2017 5-Judge Bench), the Supreme Court decisively held that plenary legislation passed by Parliament or State Legislatures can be struck down under Article 14 if it suffers from \"manifest arbitrariness\". Reaffirming this in Navtej Singh Johar (2018) and Joseph Shine (2018), the Court overruled earlier restrictive views (such as McDowell & Co.), holding that the guarantee of equality under Article 14 protects citizens against arbitrary statutes as well as arbitrary executive orders.\n\n2. DOCTRINAL DEFINITION: In Shayara Bano (2017), Justice Rohinton Nariman articulated the test: \"Manifest arbitrariness must be something done by the legislature capriciously, irrationally and/or without adequate determining principle. Also, when something is done which is excessive and disproportionate, such action would be manifestly arbitrary.\" A law that reverses fundamental constitutional axioms without rational necessity or eliminates basic procedural safeguards fails Article 14.\n\n3. UNCONSTITUTIONALITY OF SECTIONS 8 & 12: Sections 8 and 12 of the Greenfield Act are textbook instances of manifest arbitrariness. (a) Denying access to adverse material and legal counsel while imposing 6-month preventive house arrest for non-violent economic offences is drastically disproportionate and capricious; (b) Automatic civil death and property forfeiture without trial reverses the core rule of law and presumption of innocence without any determining principle; and (c) Ousting High Court writ jurisdiction violates the Basic Structure (L. Chandra Kumar). Consequently, Sections 8 and 12 are ultra vires Article 14 and Article 21.",
    "markingRubric": [
      {
        "criterion": "Evolution of the Manifest Arbitrariness doctrine from Royappa to Shayara Bano and Joseph Shine",
        "marks": 4
      },
      {
        "criterion": "Overruling of the McDowell doctrine regarding review of primary legislation under Article 14",
        "marks": 3
      },
      {
        "criterion": "Application of the proportionality and determining-principle tests to quash the draconian provisions",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d2-cs5-q1",
        "question": "Which earlier decision restricting the review of primary legislation on arbitrariness was clarified and overcome in Shayara Bano (2017)?",
        "options": [
          "State of A.P. v. McDowell & Co. (1996)",
          "A.K. Gopalan v. State of Madras (1950)",
          "Golak Nath v. State of Punjab (1967)",
          "Minerva Mills v. Union of India (1980)"
        ],
        "correctIndex": 0,
        "explanation": "In Shayara Bano (2017), Justice Nariman clarified that the restrictive observations in State of A.P. v. McDowell & Co. (1996) were incorrect; primary legislation can indeed be struck down for manifest arbitrariness.",
        "articleRef": "Article 14",
        "testedDimension": "Article Threshold"
      },
      {
        "id": "d2-cs5-q2",
        "question": "How did Justice Rohinton Nariman define \"Manifest Arbitrariness\" in Shayara Bano v. Union of India (2017)?",
        "options": [
          "Anything that offends the ruling political party",
          "Something done by the legislature capriciously, irrationally, without adequate determining principle, or which is excessive and disproportionate",
          "Any statute not translated into regional languages",
          "Any law that increases taxation"
        ],
        "correctIndex": 1,
        "explanation": "Justice Nariman formulated the definitive test: manifest arbitrariness is legislation that is capricious, irrational, devoid of determining principle, or grossly disproportionate.",
        "articleRef": "Article 14",
        "testedDimension": "Legal Doctrine"
      },
      {
        "id": "d2-cs5-q3",
        "question": "In Joseph Shine v. Union of India (2018), which penal provision was struck down on the ground of manifest arbitrariness and gender stereotyping under Article 14?",
        "options": [
          "Section 377 IPC (Unnatural offences)",
          "Section 497 IPC (Adultery)",
          "Section 302 IPC (Murder)",
          "Section 124A IPC (Sedition)"
        ],
        "correctIndex": 1,
        "explanation": "In Joseph Shine (2018), the 5-Judge Constitution Bench struck down Section 497 IPC (Adultery) as manifestly arbitrary and discriminatory against women under Articles 14 and 15.",
        "articleRef": "Articles 14 & 15",
        "testedDimension": "Landmark Ratio"
      },
      {
        "id": "d2-cs5-q4",
        "question": "Can a state statute completely oust the writ jurisdiction of the High Court under Article 226 for 180 days?",
        "options": [
          "Yes, if the state faces an economic emergency",
          "No, because judicial review under Articles 226 and 32 is an inviolable part of the Basic Structure of the Constitution that cannot be abrogated by ordinary legislation (L. Chandra Kumar 1997)",
          "Yes, with Governor's approval",
          "Only for economic offences"
        ],
        "correctIndex": 1,
        "explanation": "In L. Chandra Kumar (1997 7-Judge Bench), the Supreme Court held that the writ jurisdiction of High Courts under Article 226 is part of the Basic Structure and cannot be ousted by statute.",
        "articleRef": "Article 226 & Article 14",
        "testedDimension": "Judicial Remedy"
      }
    ],
    "caseNumber": 5
  },
  {
    "id": "d2-cs-6",
    "title": "Case Study 6: Domicile & Residence Bars in Public Recruitment",
    "legalTheme": "Article 16(2) Domicile Bar and Exclusive Parliamentary Competence under Article 16(3)",
    "factualMatrix": "The State Government of Vindhya issued a notification inviting applications for 5,000 posts of Village Development Officers (VDOs) and Panchayat Secretaries. The notification contained Clause 4, which mandated: \"Only candidates who are bona fide domicile residents of the State of Vindhya and have continuously resided in the concerned revenue district for not less than 10 years shall be eligible to apply. Applications from candidates belonging to other States of India shall be summarily rejected.\" \n\nThe State Government defended the 100% domicile requirement on the grounds that: (1) Village Development Officers must be intimately familiar with local dialects, rural customs, and tribal traditions of the specific district; (2) The State suffered from acute rural unemployment; and (3) Under Article 162, the executive power of the State is co-extensive with legislative power and allows protective measures for local youth. Several qualified graduates residing in neighboring States and from other districts within Vindhya filed an Article 226 writ petition before the High Court challenging Clause 4 as a direct violation of Article 16(2).",
    "framingQuestions": [
      "1. Does the State Government possess executive or legislative competence to prescribe \"residence\" or \"domicile\" as an eligibility requirement for public employment under Article 16?",
      "2. What is the scope of Parliamentary competence under Article 16(3) regarding residence criteria, and can residence be prescribed for a district or sub-region within a State?",
      "3. In light of A.V.S. Narasimha Rao (1969) and Kailash Chand Sharma (2002), is Clause 4 constitutionally valid?"
    ],
    "statutoryApplicability": [
      "Article 14",
      "Article 16(1)",
      "Article 16(2)",
      "Article 16(3)",
      "A.V.S. Narasimha Rao v. State of A.P. (1969 5-Judge Bench)",
      "Kailash Chand Sharma v. State of Rajasthan (2002)"
    ],
    "modelAnswer": "1. INCOMPETENCE OF STATE GOVERNMENT: Clause 4 is blatantly unconstitutional. Article 16(2) expressly bars discrimination in public employment on the grounds of \"descent, place of birth, residence or any of them\". The only exception to this rule is Article 16(3), which enables \"Parliament\" (and emphatically NOT State Legislatures or State Executives) to make a law prescribing residence requirements. A State Government has zero constitutional competence to introduce domicile or residence-based reservations or eligibility bars (Kailash Chand Sharma v. State of Rajasthan 2002).\n\n2. PARLIAMENTARY LIMITATION (STATE AS A WHOLE): Even Parliament's power under Article 16(3) is strictly limited. In A.V.S. Narasimha Rao v. State of A.P. (1969 5-Judge Bench), the Supreme Court struck down Section 3 of the Public Employment Act, holding that Article 16(3) allows Parliament to prescribe residence within a State as a whole, but does NOT permit carving out district-level or regional residence requirements (such as for the Telangana region). Carving up a State into district-wise enclaves destroys common Indian citizenship.\n\n3. UNCONSTITUTIONALITY OF CLAUSE 4: Clause 4 commits a double constitutional infraction: (a) It was issued by the State Executive without Parliamentary legislation; and (b) It restricts recruitment to local residents of a specific revenue district, creating 100% parochial reservation. While requiring knowledge of local dialects is a permissible qualification, excluding Indian citizens purely on the basis of residence or domicile violates the non-negotiable command of Article 16(2) and Article 14. Clause 4 must be quashed.",
    "markingRubric": [
      {
        "criterion": "Clear identification of Article 16(2) prohibition of \"residence\" and \"place of birth\"",
        "marks": 4
      },
      {
        "criterion": "Rigorous analysis of Article 16(3) reserving power exclusively to Parliament (not States)",
        "marks": 3
      },
      {
        "criterion": "Application of A.V.S. Narasimha Rao (1969) barring district-level or sub-state residence quotas",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d2-cs6-q1",
        "question": "Under Article 16(3), who is constitutionally empowered to prescribe a requirement of residence prior to appointment to public posts?",
        "options": [
          "The State Legislative Assembly by a 2/3rd majority",
          "The Governor in consultation with the State Public Service Commission",
          "Parliament alone by law",
          "The Union Ministry of Home Affairs by executive order"
        ],
        "correctIndex": 2,
        "explanation": "Article 16(3) explicitly vests the power to create residence qualifications exclusively in Parliament by law, completely barring State Legislatures and Executives.",
        "articleRef": "Article 16(3)",
        "testedDimension": "Article Threshold"
      },
      {
        "id": "d2-cs6-q2",
        "question": "In A.V.S. Narasimha Rao v. State of A.P. (1969), what was the Supreme Court's holding regarding residential requirements within a part of a State?",
        "options": [
          "Parliament can prescribe residence for any district, taluk, or village",
          "Article 16(3) allows residence requirements for a State as a whole, but does NOT permit residence requirements for a district or sub-region within a State",
          "States can prescribe 100% district quotas for primary schools",
          "Residence qualifications are totally barred in India"
        ],
        "correctIndex": 1,
        "explanation": "Chief Justice Hidayatullah held that Article 16(3) speaks of residence within the State as a whole, not within a pocket, district, or sub-region of a State.",
        "articleRef": "Article 16(3)",
        "testedDimension": "Legal Doctrine"
      },
      {
        "id": "d2-cs6-q3",
        "question": "Which two grounds of non-discrimination appear in Article 16(2) for public employment that are NOT found in Article 15(1)?",
        "options": [
          "Caste and Sex",
          "Descent and Residence",
          "Religion and Race",
          "Place of birth and Domicile"
        ],
        "correctIndex": 1,
        "explanation": "Article 16(2) contains two additional protected grounds absent in Article 15(1): \"Descent\" and \"Residence\".",
        "articleRef": "Articles 15(1) & 16(2)",
        "testedDimension": "Landmark Ratio"
      },
      {
        "id": "d2-cs6-q4",
        "question": "Can a State Government legitimately require candidates to demonstrate proficiency in the local State language for public employment?",
        "options": [
          "No, language requirements violate Article 16(2)",
          "Yes, because \"language\" is not a prohibited ground in Article 16(2), and knowing the local language is a genuine occupational requirement for effective public service",
          "Only for judicial officers",
          "Only with approval of the Official Language Commission"
        ],
        "correctIndex": 1,
        "explanation": "Prescribing proficiency in the official language of the State is valid because language is not listed in Article 16(2) and is necessary for administrative efficiency.",
        "articleRef": "Article 16(1) & Article 16(2)",
        "testedDimension": "Judicial Remedy"
      }
    ],
    "caseNumber": 6
  },
  {
    "id": "d2-cs-7",
    "title": "Case Study 7: Carry-Forward Rule & Backlog Vacancy Calculations",
    "legalTheme": "The Carry-Forward Rule, Backlog Calculations, and Article 16(4B)",
    "factualMatrix": "In the State Public Works Department, there are 200 sanctioned posts of Assistant Executive Engineers. In the recruitment year 2021, 30 posts were reserved for Scheduled Castes and Scheduled Tribes, but owing to the non-availability of eligible candidates who met the minimum qualifying standard, 25 reserved posts remained unfilled. In 2022, another 15 reserved posts remained unfilled. In 2024, the Department conducted a Special Recruitment Drive to fill all 40 carried-forward backlog reserved vacancies, alongside 60 regular vacancies arising in the current year 2024 (of which 30 were reserved and 30 were unreserved). \n\nConsequently, the Department advertised a total of 100 vacancies: 70 reserved vacancies (40 backlog + 30 current) and 30 unreserved vacancies. An unreserved candidate who secured 78% marks was denied appointment, while a reserved candidate who secured 44% was appointed against the 70th reserved vacancy. The unreserved candidate filed a writ petition challenging the entire recruitment on the ground that 70 out of 100 posts (70%) were reserved, violating the 50% reservation ceiling laid down in Indra Sawhney (1992) and relying on the classic ruling in T. Devadasan v. Union of India (1964).",
    "framingQuestions": [
      "1. How did the 81st Constitutional Amendment Act, 2000 neutralize the ruling in T. Devadasan v. Union of India (1964)?",
      "2. What is the constitutional mechanism of treating carried-forward vacancies as a \"separate class\" under Article 16(4B)?",
      "3. Applying M. Nagaraj v. Union of India (2006), does the 70% reservation in the Special Recruitment Drive violate the 50% ceiling rule?"
    ],
    "statutoryApplicability": [
      "Article 14",
      "Article 16(1)",
      "Article 16(4)",
      "Article 16(4B)",
      "T. Devadasan v. Union of India (1964 5-Judge Bench)",
      "M. Nagaraj v. Union of India (2006 5-Judge Bench)"
    ],
    "modelAnswer": "1. NEUTRALIZATION OF T. DEVADASAN: In T. Devadasan (1964 5-Judge Bench), the Supreme Court struck down the \"Carry-Forward Rule\", holding that accumulating unfilled vacancies of previous years to current vacancies resulted in 64.4% reservation, destroying equality of opportunity under Article 16(1). To overcome Devadasan and Indra Sawhney's strict 50% annual limitation, Parliament enacted the 81st Constitutional Amendment Act, 2000, inserting Article 16(4B).\n\n2. SEPARATE CLASS MECHANISM UNDER ARTICLE 16(4B): Article 16(4B) explicitly provides that unfilled reserved vacancies of a year, which are carried forward to succeeding years, \"shall be considered as a separate class of vacancies\" and \"shall not be considered together with the vacancies of the year in which they are being filled up for determining the ceiling of fifty per cent. reservation on total number of vacancies of that year.\" Thus, backlog vacancies are constitutionally ring-fenced from the current year's calculation.\n\n3. CONSTITUTIONAL VALIDITY OF 70% RECRUITMENT: In M. Nagaraj (2006 5-Judge Bench), the Supreme Court upheld the constitutional validity of Article 16(4B), holding that it does not violate the Basic Structure. Applying Article 16(4B) to the present facts:\n(a) The 40 backlog vacancies from 2021/2022 are treated as an independent separate class; \n(b) The 50% ceiling applies strictly to the 60 current vacancies of 2024, of which exactly 30 are reserved (50%);\n(c) The fact that total appointments in that recruitment drive result in 70 reserved out of 100 advertised vacancies does not violate the 50% rule because 40 of those vacancies belong to prior years. The challenge must be dismissed.",
    "markingRubric": [
      {
        "criterion": "Detailed historical progression from T. Devadasan (1964) to the 81st Amendment Act, 2000",
        "marks": 4
      },
      {
        "criterion": "Precise constitutional mechanics of the \"separate class\" formula under Article 16(4B)",
        "marks": 3
      },
      {
        "criterion": "Application of M. Nagaraj (2006) upholding Article 16(4B) and validating the Special Recruitment Drive",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d2-cs7-q1",
        "question": "Which landmark 5-Judge Bench ruling in 1964 struck down the Carry-Forward Rule when backlog vacancies led to 64.4% reservation?",
        "options": [
          "State of Madras v. Champakam Dorairajan (1951)",
          "T. Devadasan v. Union of India (1964)",
          "M.R. Balaji v. State of Mysore (1963)",
          "Bhikaji Narain Dhakras v. State of M.P. (1955)"
        ],
        "correctIndex": 1,
        "explanation": "In T. Devadasan (1964), the Supreme Court struck down the carry-forward rule because it exceeded the 50% reservation ceiling in subsequent years.",
        "articleRef": "Article 16(1)",
        "testedDimension": "Article Threshold"
      },
      {
        "id": "d2-cs7-q2",
        "question": "Which Constitutional Amendment Act inserted Article 16(4B) into the Constitution to protect carried-forward backlog vacancies?",
        "options": [
          "77th Amendment Act, 1995",
          "81st Amendment Act, 2000",
          "85th Amendment Act, 2001",
          "93rd Amendment Act, 2005"
        ],
        "correctIndex": 1,
        "explanation": "The 81st Constitutional Amendment Act, 2000 inserted Article 16(4B) to treat unfilled backlog vacancies as a separate class exempt from the 50% ceiling.",
        "articleRef": "Article 16(4B)",
        "testedDimension": "Legal Doctrine"
      },
      {
        "id": "d2-cs7-q3",
        "question": "Under Article 16(4B), how is the 50% reservation ceiling computed when a Special Recruitment Drive includes both current and backlog vacancies?",
        "options": [
          "On the aggregate total of all vacancies combined",
          "Strictly on the regular vacancies of that current recruitment year, totally excluding the carried-forward backlog vacancies",
          "On the average of the last 10 years",
          "By the Union Public Service Commission at its discretion"
        ],
        "correctIndex": 1,
        "explanation": "Article 16(4B) mandates that the 50% ceiling is applied strictly to current year vacancies, without combining backlog vacancies.",
        "articleRef": "Article 16(4B)",
        "testedDimension": "Landmark Ratio"
      },
      {
        "id": "d2-cs7-q4",
        "question": "In M. Nagaraj v. Union of India (2006), the constitutional validity of Article 16(4B) was:",
        "options": [
          "Struck down as violative of the Basic Structure",
          "Upheld as constitutionally valid, holding that it does not obliterate the 50% ceiling for normal annual recruitments",
          "Referred to a 9-Judge Bench",
          "Suspended for 10 years"
        ],
        "correctIndex": 1,
        "explanation": "M. Nagaraj (2006) upheld Article 16(4B), holding that the 50% ceiling applies to the current year's vacancies and does not destroy the constitutional balance.",
        "articleRef": "Article 16(4B)",
        "testedDimension": "Judicial Remedy"
      }
    ],
    "caseNumber": 7
  },
  {
    "id": "d2-cs-8",
    "title": "Case Study 8: Consequential Seniority vs. The Catch-Up Rule",
    "legalTheme": "Consequential Seniority under Article 16(4A) and Nullification of the Catch-Up Rule",
    "factualMatrix": "In the State Revenue Service, Candidate A (General Category) and Candidate B (Scheduled Caste) were selected as Naib Tehsildars in 2010. On the initial merit list, Candidate A stood at Rank 5, while Candidate B stood at Rank 45. In 2015, when vacancies arose in the promotional post of Tehsildar, Candidate B was granted an accelerated promotion to Tehsildar on a roster point under the State's SC quota, while Candidate A was not promoted due to lack of general vacancies. In 2018, Candidate A was also promoted to Tehsildar upon a general vacancy arising.\n\nIn 2024, promotions were due from Tehsildar to Sub-Divisional Magistrate (SDM). Candidate A claimed seniority over Candidate B in the Tehsildar cadre by invoking the judicial \"Catch-Up Rule\" established in Union of India v. Virpal Singh Chauhan (1995) and Ajit Singh (II) (1999). However, the State Government issued a seniority list placing Candidate B above Candidate A, citing Rule 14 of the State Service Rules, enacted pursuant to the 85th Constitutional Amendment Act, 2001, which granted \"consequential seniority\" to roster-promoted SC/ST employees. Candidate A challenges Rule 14 before the High Court.",
    "framingQuestions": [
      "1. What was the \"Catch-Up Rule\" propounded in Virpal Singh Chauhan (1995) and Ajit Singh (II) (1999)?",
      "2. How did the 85th Constitutional Amendment Act, 2001 nullify the Catch-Up Rule in Article 16(4A)?",
      "3. Applying M. Nagaraj (2006) and B.K. Pavitra (II) (2019), who is entitled to seniority in the Tehsildar cadre?"
    ],
    "statutoryApplicability": [
      "Article 14",
      "Article 16(1)",
      "Article 16(4A)",
      "85th Constitutional Amendment Act, 2001",
      "Union of India v. Virpal Singh Chauhan (1995)",
      "Ajit Singh (II) v. State of Punjab (1999 5-Judge Bench)",
      "M. Nagaraj v. Union of India (2006 5-Judge Bench)",
      "B.K. Pavitra (II) v. Union of India (2019)"
    ],
    "modelAnswer": "1. THE JUDICIAL \"CATCH-UP RULE\": In Virpal Singh Chauhan (1995) and Ajit Singh (II) (1999 5-Judge Bench), the Supreme Court ruled that a roster-point promotion is an accelerated promotion to a post, but does not confer \"seniority\" in the promotional cadre. Therefore, when a senior general category candidate is subsequently promoted to that same higher cadre, they \"catch up\" and regain their original seniority over the roster-promoted junior candidate.\n\n2. NULLIFICATION BY 85TH AMENDMENT: To overcome the Catch-Up Rule, Parliament enacted the 85th Constitutional Amendment Act, 2001, which amended Article 16(4A) with retrospective effect from June 17, 1995, specifically inserting the words: \"with consequential seniority to any class\". Article 16(4A) thus constitutionally empowers the State to enact rules providing that a reserved candidate promoted on a roster point retains their seniority in the promotional post from the date of their promotion.\n\n3. CONSTITUTIONALITY & APPLICABILITY: In M. Nagaraj (2006), the 5-Judge Constitution Bench upheld the validity of the 85th Amendment, holding that consequential seniority is an enabling constitutional power that does not violate the Basic Structure. In B.K. Pavitra (II) (2019), the Supreme Court affirmed that where a State has enacted a statutory rule (here, Rule 14) granting consequential seniority, that rule is fully operative. Candidate B was promoted in 2015, while Candidate A was promoted in 2018. Under the valid statutory rule of consequential seniority enabled by Article 16(4A), Candidate B entered the cadre 3 years earlier and retains seniority over Candidate A. Candidate A's challenge must be dismissed.",
    "markingRubric": [
      {
        "criterion": "Clear explanation of the Catch-Up Rule in Virpal Singh Chauhan and Ajit Singh (II)",
        "marks": 4
      },
      {
        "criterion": "Role of the 85th Amendment Act, 2001 inserting \"consequential seniority\" in Article 16(4A)",
        "marks": 3
      },
      {
        "criterion": "Application of M. Nagaraj (2006) and B.K. Pavitra (II) (2019) to uphold Candidate B's seniority",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d2-cs8-q1",
        "question": "What was the core principle of the \"Catch-Up Rule\" established in Ajit Singh (II) v. State of Punjab (1999)?",
        "options": [
          "Reserved candidates must catch up to the qualifying examination cut-off",
          "A senior general candidate promoted later catches up and regains their original seniority over an earlier roster-promoted reserved candidate in the promotional cadre",
          "All vacancies must be filled within 6 months",
          "Seniority is decided strictly by age"
        ],
        "correctIndex": 1,
        "explanation": "Under the Catch-up Rule, roster promotion gave accelerated promotion to a post, but not cadre seniority; the senior general candidate regained seniority upon promotion.",
        "articleRef": "Article 16(4A)",
        "testedDimension": "Article Threshold"
      },
      {
        "id": "d2-cs8-q2",
        "question": "Which Constitutional Amendment Act inserted the phrase \"with consequential seniority\" into Article 16(4A)?",
        "options": [
          "77th Amendment Act, 1995",
          "81st Amendment Act, 2000",
          "82nd Amendment Act, 2000",
          "85th Amendment Act, 2001"
        ],
        "correctIndex": 3,
        "explanation": "The 85th Constitutional Amendment Act, 2001 amended Article 16(4A) with retrospective effect from 1995 to add \"with consequential seniority\".",
        "articleRef": "Article 16(4A)",
        "testedDimension": "Legal Doctrine"
      },
      {
        "id": "d2-cs8-q3",
        "question": "Is \"consequential seniority\" an automatic fundamental right that an SC/ST employee can demand without any state rule or policy?",
        "options": [
          "Yes, it flows automatically from Article 16(1)",
          "No, Article 16(4A) is merely an ENABLING provision; the State must have an express statutory service rule or policy providing for consequential seniority (M. Nagaraj 2006)",
          "Yes, if approved by the Public Service Commission",
          "Yes, after 10 years of service"
        ],
        "correctIndex": 1,
        "explanation": "In M. Nagaraj (2006), the Supreme Court clarified that Article 16(4A) is an enabling provision, not an automatic self-executing fundamental right.",
        "articleRef": "Article 16(4A)",
        "testedDimension": "Landmark Ratio"
      },
      {
        "id": "d2-cs8-q4",
        "question": "In B.K. Pavitra (II) v. Union of India (2019), why did the Supreme Court uphold the Karnataka Consequential Seniority Act?",
        "options": [
          "Because the State proved that general candidates had surrendered their seniority",
          "Because the State government appointed the Ratna Prabha Committee which produced quantifiable empirical data showing inadequate representation of SC/STs in promotional cadres",
          "Because M. Nagaraj was overruled",
          "Because Karnataka has an independent Constitution"
        ],
        "correctIndex": 1,
        "explanation": "Chandrachud J upheld the Karnataka Act because the State complied with Nagaraj by generating empirical quantifiable data via the Ratna Prabha Committee.",
        "articleRef": "Article 16(4A)",
        "testedDimension": "Judicial Remedy"
      }
    ],
    "caseNumber": 8
  },
  {
    "id": "d2-cs-9",
    "title": "Case Study 9: Gender Equality & Substantive Accommodation in Armed Forces",
    "legalTheme": "Elimination of Gender Stereotyping and Indirect Discrimination in Uniformed Services",
    "factualMatrix": "The Union Ministry of Defence issued a policy governing the grant of Permanent Commission (PC) to Women Short Service Commissioned (SSC) Officers in the Indian Army. While male SSC officers were routinely considered for Permanent Commission upon completing 10 years of service, women SSC officers were initially excluded from Permanent Commission altogether, and subsequently offered only extension of Short Service Commission up to 14 years without pensionary benefits. The Ministry defended this differential treatment before the courts citing: (1) Physiological differences between male and female officers; (2) The hardship of isolated border deployments; (3) The cultural unacceptability of women commanding all-male combat troops; and (4) Domestic commitments of women officers (motherhood and child-rearing).\n\nFurthermore, when the Supreme Court directed evaluation for Permanent Commission in Ministry of Defence v. Babita Puniya (2020), the Army applied medical fitness benchmarks (SHAPE-1) designed for 25-year-old male recruits to women officers who were now between 45 and 50 years of age, resulting in the disqualification of a majority of women officers. The women officers approached the Supreme Court in Lt. Col. Nitisha v. Union of India (2021).",
    "framingQuestions": [
      "1. Can biological differences, domestic obligations, and societal stereotypes justify denying equality of opportunity to women under Articles 14, 15(1), and 16(2)?",
      "2. What is the doctrine of \"Indirect Discrimination\" established in Lt. Col. Nitisha (2021) under Article 14?",
      "3. Does Article 33 of the Constitution completely immunize armed forces service regulations from judicial review under Part III?"
    ],
    "statutoryApplicability": [
      "Article 14",
      "Article 15(1)",
      "Article 16(1)",
      "Article 16(2)",
      "Article 33",
      "Ministry of Defence v. Babita Puniya (2020)",
      "Lt. Col. Nitisha v. Union of India (2021)"
    ],
    "modelAnswer": "1. REJECTION OF GENDER STEREOTYPES: In Ministry of Defence v. Babita Puniya (2020), the Supreme Court struck down the blanket exclusion of women officers from Permanent Commission. Justice D.Y. Chandrachud held that reliance on gender stereotypes—attributing domestic obligations, motherhood, and biological frailty exclusively to women—is an insult to the dignity of women officers who had served with distinction in sensitive border zones. Such patriarchal arguments violate the core promise of equality under Articles 14, 15(1), and 16(2).\n\n2. DOCTRINE OF INDIRECT DISCRIMINATION: In Lt. Col. Nitisha (2021), the Supreme Court formulated the doctrine of \"Indirect Discrimination\" under Article 14. Formal equality treats everyone identically, but substantive equality demands examining the real-world impact of facially neutral rules. Evaluating 45-year-old women officers on medical criteria designed for 25-year-old men appeared neutral on paper, but produced a disproportionate, systemic adverse impact on women officers who were denied earlier evaluation purely due to the Army's past discriminatory policies. The Court struck down this evaluation mechanism and ordered fresh consideration with systemic accommodation.\n\n3. LIMITATION OF ARTICLE 33: While Article 33 empowers Parliament to modify fundamental rights for the Armed Forces to ensure proper discharge of duties and maintenance of discipline, it does not confer a blanket license to violate the Rule of Law or perpetuate irrational gender discrimination. Arbitrary denial of career progression unrelated to operational efficiency is fully amenable to judicial review under Article 32 and Article 226.",
    "markingRubric": [
      {
        "criterion": "Doctrinal analysis of Babita Puniya (2020) rejecting biological determinism and patriarchal stereotypes",
        "marks": 4
      },
      {
        "criterion": "Articulation of the doctrine of \"Indirect Discrimination\" and substantive equality in Lt. Col. Nitisha (2021)",
        "marks": 3
      },
      {
        "criterion": "Harmonization of Article 33 armed forces restrictions with Article 14 judicial review",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d2-cs9-q1",
        "question": "In Ministry of Defence v. Babita Puniya (2020), what historic relief was granted to Women Short Service Commissioned Officers by the Supreme Court?",
        "options": [
          "Exemption from military fitness exams",
          "Entitlement to Permanent Commission on par with male officers in all 10 non-combat streams, with consequential promotions and pensionary benefits",
          "Immediate retirement with Rs 1 Crore bonus",
          "Automatic promotion to Major General"
        ],
        "correctIndex": 1,
        "explanation": "Chandrachud J ordered that women SSC officers be granted Permanent Commission on par with men in 10 streams, rejecting patriarchal arguments.",
        "articleRef": "Articles 14 & 16",
        "testedDimension": "Article Threshold"
      },
      {
        "id": "d2-cs9-q2",
        "question": "How was the concept of \"Indirect Discrimination\" defined by the Supreme Court in Lt. Col. Nitisha (2021)?",
        "options": [
          "Discrimination that occurs secretly without written orders",
          "Where an institutional rule, though neutral on its face, operates in a manner that disproportionately disadvantages a protected group due to underlying historical or systemic biases",
          "Discrimination between officers of different regiments",
          "Discrimination caused by foreign governments"
        ],
        "correctIndex": 1,
        "explanation": "In Nitisha (2021), the Court held that indirect discrimination looks at the real-world adverse impact of facially neutral benchmarks on protected classes.",
        "articleRef": "Article 14",
        "testedDimension": "Legal Doctrine"
      },
      {
        "id": "d2-cs9-q3",
        "question": "Does Article 33 of the Constitution permit the Government to deny fundamental rights to Armed Forces personnel through executive orders without a Parliamentary statute?",
        "options": [
          "Yes, the Cabinet has absolute prerogative over defence",
          "No, Article 33 explicitly provides that ONLY Parliament by law can restrict or modify fundamental rights for armed forces members",
          "Yes, during peacetime only",
          "The Chief of Army Staff can do so by internal circular"
        ],
        "correctIndex": 1,
        "explanation": "Article 33 strictly mandates that any modification or restriction of fundamental rights for the Armed Forces must be enacted by \"Parliament by law\".",
        "articleRef": "Article 33",
        "testedDimension": "Landmark Ratio"
      },
      {
        "id": "d2-cs9-q4",
        "question": "Which of the following is an INCORRECT statement regarding gender equality in the Armed Forces post-Babita Puniya and Nitisha?",
        "options": [
          "Women officers are entitled to command appointments in non-combat streams",
          "Women officers can be evaluated on obsolete physical standards designed for young recruits when their evaluation was delayed by decades of state delay",
          "Stereotypical domestic assumptions cannot be a ground to deny career progression",
          "Women officers are entitled to full pensionary benefits upon fulfilling required service"
        ],
        "correctIndex": 1,
        "explanation": "In Nitisha (2021), the Court expressly struck down the application of rigid young-male medical fitness standards to delayed women candidates.",
        "articleRef": "Article 14 & Article 15",
        "testedDimension": "Judicial Remedy"
      }
    ],
    "caseNumber": 9
  },
  {
    "id": "d2-cs-10",
    "title": "Case Study 10: Abolition of Untouchability & Hate Speech as an Article 17 Constitutional Tort",
    "legalTheme": "Horizontal Enforcement of Article 17 and Positive State Obligations against Caste Subjugation",
    "factualMatrix": "In the village of Shivapuram, members of the dominant landed caste convened a village assembly and issued a resolution prohibiting members of the Dalit community from: (1) Entering the sanctum sanctorum of the village temple; (2) Wearing footwear or riding bicycles on the paved village public road; and (3) Utilizing the public community hall constructed out of Member of Parliament Local Area Development (MPLAD) funds. When a young Dalit college student rode his motorcycle past the village square, he was intercepted by a mob, stripped, assaulted, and forced to perform humiliating acts of servitude while being subjected to casteist slurs.\n\nThe local police station initially refused to register an FIR, advising the victim to settle the dispute amicably through the village elders. The victim's family approached the High Court through a writ petition under Article 226 seeking: (a) Immediate registration of an FIR and arrest of the culprits under the Protection of Civil Rights Act, 1955 and the SC/ST (Prevention of Atrocities) Act, 1989; (b) Compensation of Rs 25 Lakhs against the State for violation of Article 17 and Article 21; and (c) A writ of mandamus directing the district administration to enforce unhindered temple entry and road access.",
    "framingQuestions": [
      "1. Is Article 17 of the Constitution horizontally enforceable against private citizens, and what is the positive duty of the State to prevent and penalize caste discrimination?",
      "2. Can an award of public law compensation be granted under Article 226 for a violation of fundamental rights under Article 17 and Article 21?",
      "3. Applying State of Karnataka v. Appa Balu Ingale (1993) and Section 3 of the Protection of Civil Rights Act, 1955, what mandatory directions will the High Court issue?"
    ],
    "statutoryApplicability": [
      "Article 14",
      "Article 15(2)",
      "Article 17",
      "Article 21",
      "Article 35(a)(ii)",
      "Protection of Civil Rights Act, 1955",
      "Scheduled Castes and the Scheduled Tribes (Prevention of Atrocities) Act, 1989",
      "State of Karnataka v. Appa Balu Ingale (1993)"
    ],
    "modelAnswer": "1. HORIZONTAL ENFORCEMENT & POSITIVE STATE DUTY: Article 17 is unique among fundamental rights: it is an absolute, non-derogable command that abolishes \"Untouchability\" in all forms. It is directly enforceable against private citizens (horizontal effect). As held in State of Karnataka v. Appa Balu Ingale (1993), Article 17 imposes a positive constitutional obligation on the State and its police machinery to actively dismantle caste tyranny. Police inaction or encouraging \"amicable settlement\" of untouchability crimes constitutes a direct dereliction of constitutional duty and renders the police officers criminally liable under Section 4 of the SC/ST (PoA) Act.\n\n2. PUBLIC LAW COMPENSATION FOR CONSTITUTIONAL TORT: Under Article 226 and Article 32, the High Court has plenary jurisdiction to award public law compensation against the State where state authorities fail to protect a citizen's fundamental rights under Article 17 and Article 21 (Nilabati Behera v. State of Orissa and D.K. Basu). The brutal public humiliation, assault, and police refusal to register an FIR violated the victim's right to life with dignity under Article 21 and freedom from untouchability under Article 17. The High Court will award interim monetary compensation of Rs 10 Lakhs to the victim, payable by the State Government, with liberty to recover the same from delinquent police officers.\n\n3. MANDATORY STATUTORY & WRIT DIRECTIONS: Applying Appa Balu Ingale (1993) and Section 3 and Section 4 of the Protection of Civil Rights Act, 1955:\n(a) The High Court will issue a mandamus directing the immediate registration of an FIR under Section 3(1)(r), 3(1)(s), 3(1)(za) of the SC/ST (PoA) Act and Sections 3, 4, 7 of the PCR Act, with investigation assigned to a Special Cell headed by an officer not below the rank of DSP;\n(b) The Court will direct the District Magistrate and Superintendent of Police to provide 24/7 security to the Dalit community and ensure immediate, unhindered temple entry and public road access;\n(c) Disciplinary proceedings will be initiated against the Station House Officer for willful neglect of duties under Section 4 of the SC/ST (PoA) Act.",
    "markingRubric": [
      {
        "criterion": "Analysis of Article 17 horizontal application and positive State obligation citing Appa Balu Ingale (1993)",
        "marks": 4
      },
      {
        "criterion": "Application of public law compensation doctrine for constitutional tort under Article 21 and Article 17",
        "marks": 3
      },
      {
        "criterion": "Concrete prosecutorial and statutory remedies under PCR Act 1955 and SC/ST (PoA) Act 1989",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d2-cs10-q1",
        "question": "Under Article 17, is the Fundamental Right abolishing \"Untouchability\" enforceable against private individuals?",
        "options": [
          "No, fundamental rights can only be enforced against \"the State\" under Article 12",
          "Yes, Article 17 is an absolute constitutional right that operates horizontally against both private individuals and the State",
          "Only if the private individuals are government contractors",
          "Only in Union Territories"
        ],
        "correctIndex": 1,
        "explanation": "Article 17, along with Article 15(2), 23, and 24, operates directly against private individuals (horizontal effect).",
        "articleRef": "Article 17",
        "testedDimension": "Article Threshold"
      },
      {
        "id": "d2-cs10-q2",
        "question": "What statutory presumption is incorporated under Section 12 of the Protection of Civil Rights Act, 1955 when an offence is committed against a member of a Scheduled Caste?",
        "options": [
          "The court presumes the accused is innocent until proven guilty beyond all doubt",
          "The court SHALL PRESUME that the act was committed on the ground of \"Untouchability\", placing the burden on the accused to rebut the presumption",
          "The court presumes that the complainant filed a false case",
          "The case must be transferred to a civil court"
        ],
        "correctIndex": 1,
        "explanation": "Section 12 of the PCR Act, 1955 creates a statutory reverse-burden presumption that the act was committed on the ground of untouchability.",
        "articleRef": "Article 17 & PCR Act 1955",
        "testedDimension": "Legal Doctrine"
      },
      {
        "id": "d2-cs10-q3",
        "question": "In State of Karnataka v. Appa Balu Ingale (1993), what did the Supreme Court hold regarding the role of the Judiciary in enforcing Article 17?",
        "options": [
          "Courts should encourage out-of-court settlements in caste violence",
          "The judiciary has a positive constitutional duty to vigorously interpret penal laws to eradicate the social cancer of untouchability and secure human rights to Dalits",
          "Untouchability offences cannot be tried in criminal courts",
          "The Act is non-justiciable"
        ],
        "correctIndex": 1,
        "explanation": "The Supreme Court ruled that Article 17 is a cornerstone of human rights and courts must eliminate caste discrimination through strict statutory enforcement.",
        "articleRef": "Article 17",
        "testedDimension": "Landmark Ratio"
      },
      {
        "id": "d2-cs10-q4",
        "question": "Can the High Court award monetary compensation under Article 226 against the State for failing to protect a citizen from untouchability and caste violence?",
        "options": [
          "No, compensation can only be awarded through a civil suit for torts",
          "Yes, under the doctrine of Public Law Compensation for Constitutional Torts, the High Court can award interim compensation for breach of Articles 17 and 21 (Nilabati Behera)",
          "Only if the President sanctions it",
          "Compensation cannot exceed Rs 1,000"
        ],
        "correctIndex": 1,
        "explanation": "Under Nilabati Behera and D.K. Basu, constitutional courts can grant monetary compensation in writ proceedings for violation of fundamental rights.",
        "articleRef": "Article 17 & Article 226",
        "testedDimension": "Judicial Remedy"
      }
    ],
    "caseNumber": 10
  }
];
