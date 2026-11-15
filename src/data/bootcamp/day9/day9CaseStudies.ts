import type { BootcampComprehensionCaseStudy } from '../bootcampTypes';

export const DAY9_COMPREHENSION_CASE_STUDIES: BootcampComprehensionCaseStudy[] = [
  {
    "id": "d9-cs-1",
    "caseNumber": 1,
    "title": "High Court Bar Association Allahabad v. State of U.P. (2024): Overruling Automatic Vacation of Stays",
    "legalTheme": "Articles 215, 226, 142, Inherent Powers of High Courts, Natural Justice, Overruling Asian Resurfacing (2018)",
    "factualMatrix": "In 2018, a 3-Judge Bench of the Supreme Court in Asian Resurfacing of Road Agency Pvt. Ltd. v. CBI laid down a rigid directive under Article 142: in all pending civil and criminal proceedings where an interim stay on trial has been granted by a High Court or any court, the stay shall automatically lapse upon the expiry of six months from the date of the order, unless extended by a reasoned order passed before the six-month period expires. This order was directed to apply across all courts throughout India without requiring any formal application for vacation from the opposite party.\n\nFollowing this directive, trial courts across India began resuming proceedings and framing charges despite valid interim orders of High Courts, simply because High Courts—struggling with staggering pendency and administrative delays—could not take up stay-extension applications within the rigid 6-month deadline. Aggrieved litigants were forced to face trials or non-bailable warrants despite having meritorious stay orders.\n\nThe High Court Bar Association of Allahabad challenged this practice, asserting that an interim order passed after hearing parties cannot be extinguished automatically without a judicial application of mind. A 3-Judge Bench of the Supreme Court noted grave constitutional difficulties and referred the matter to a 5-Judge Constitution Bench. On February 29, 2024, the Constitution Bench delivered a unanimous judgment answering whether Article 142 permits the Supreme Court to fix an automatic expiration clock on judicial orders passed by High Courts.",
    "framingQuestions": [
      "1. Does the Supreme Court have the constitutional authority under Article 142 to direct that interim orders granted by High Courts shall automatically expire after six months?",
      "2. What is the constitutional status of High Courts under Articles 214 and 215, and can they be treated as subordinate tribunals subject to procedural deadlines imposed by the Supreme Court?",
      "3. How does the doctrine of automatic vacation of stay violate the fundamental principles of natural justice (audi alteram partem)?"
    ],
    "statutoryApplicability": [
      "Article 215 (High Courts as Courts of Record)",
      "Article 226 (Power of High Courts to issue certain writs)",
      "Article 142 (Enforcement of decrees and orders of Supreme Court)",
      "Section 482 CrPC / Section 528 BNSS (Inherent powers of High Court)",
      "High Court Bar Association Allahabad v. State of U.P. (2024 5-Judge Bench)",
      "Asian Resurfacing of Road Agency Pvt. Ltd. v. CBI (2018 3-Judge Bench)"
    ],
    "modelAnswer": "1. NO AUTOMATIC VACATION OF STAY UNDER ARTICLE 142:\nThe 5-Judge Constitution Bench unanimously overruled Asian Resurfacing (2018). The Supreme Court held that Article 142 confers extraordinary power to do 'complete justice' between the parties before the Court, but it cannot be used to pass judicial legislation or issue sweeping administrative diktats binding upon all High Courts. Fixing a mechanical time-limit of six months, after which an interim stay stands automatically vacated without judicial order, is an impermissible exercise of judicial power that amounts to creating a legislative clock.\n\n2. HIGH COURTS ARE INDEPENDENT CONSTITUTIONAL COURTS:\nThe Court emphasized that under the Indian constitutional architecture, High Courts are not subordinate courts or tribunals under the administrative superintendence of the Supreme Court. A High Court is a constitutional court of record established under Article 214 and endowed with inherent powers under Article 215. The power of a High Court to grant, modify, or extend interim relief in exercise of its constitutional jurisdiction under Article 226 or inherent powers under Section 482 CrPC (now Section 528 BNSS) cannot be fettered or terminated by an executive-like diktat of the Supreme Court under Article 142.\n\n3. VIOLATION OF AUDI ALTERAM PARTEM:\nAn order of interim stay is granted after judicial scrutiny. If such an order automatically lapses merely due to court delays or institutional inability to list an extension application, a litigant is penalized for an act of the court (actus curiae neminem gravabit). Terminating a stay without giving the beneficiary an opportunity of being heard constitutes a blatant violation of natural justice. The proper procedure is for the opposite party to apply for vacation of the stay under Article 226(3) or general procedural law, followed by a reasoned judicial determination.",
    "markingRubric": [
      {
        "criterion": "Clear explanation of the unanimous overruling of Asian Resurfacing (2018) by the 5-Judge Bench in Feb 2024",
        "marks": 4
      },
      {
        "criterion": "Constitutional analysis of High Courts as independent Courts of Record under Art. 215 vs. limits of Art. 142",
        "marks": 3
      },
      {
        "criterion": "Application of natural justice and the maxim actus curiae neminem gravabit to interim relief",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d9-cs1-q1",
        "testedDimension": "Landmark Ratio",
        "articleRef": "Article 142 & 215",
        "question": "In High Court Bar Association Allahabad v. State of U.P. (February 2024), what did the 5-Judge Constitution Bench rule regarding interim stays granted by High Courts?",
        "options": [
          "It held that stays automatically expire in 3 months instead of 6 months",
          "It unanimously overruled Asian Resurfacing (2018), ruling that stays do NOT automatically expire after 6 months and Article 142 cannot be used to set automatic legislative clocks on High Courts",
          "It reaffirmed that all High Court stays must be renewed every six months by the Supreme Court",
          "It held that High Courts have no power to stay trial proceedings under any circumstance"
        ],
        "correctIndex": 1,
        "explanation": "The 5-Judge Constitution Bench held that interim orders granted by High Courts do not automatically lapse after 6 months, overruling Asian Resurfacing."
      },
      {
        "id": "d9-cs1-q2",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Article 142",
        "question": "What core limitation on the Supreme Court's plenary powers under Article 142 was articulated in the 2024 High Court Bar Association Allahabad judgment?",
        "options": [
          "Article 142 can be exercised only during national emergencies",
          "Article 142 powers can only be invoked by the Chief Justice sitting alone",
          "Article 142 cannot be used to pass judicial legislation, substitute statutory regimes, or impose universal procedural deadlines that extinguish judicial orders without a hearing",
          "Article 142 is strictly subordinate to Central Government executive notifications"
        ],
        "correctIndex": 2,
        "explanation": "The Bench clarified that Article 142 is meant for complete justice in an individual case before the Court, not for laying down blanket legislative-style expiration clocks."
      },
      {
        "id": "d9-cs1-q3",
        "testedDimension": "Article Threshold",
        "articleRef": "Articles 214 & 215",
        "question": "How does the Indian Constitution define the structural relationship between High Courts and the Supreme Court as reiterated in this judgment?",
        "options": [
          "High Courts are administrative departments under the direct control of the Supreme Court Registry",
          "High Courts are autonomous constitutional courts of record under Article 215 and not subordinate tribunals to the Supreme Court",
          "High Courts derive all their powers solely from Supreme Court rules framed under Article 145",
          "High Court orders have no legal validity until affirmed by a Supreme Court Chamber Judge"
        ],
        "correctIndex": 1,
        "explanation": "Under the Constitution, High Courts are coordinate constitutional courts of record (Art. 215) and not subordinate courts or tribunals under the Supreme Court's administrative control."
      },
      {
        "id": "d9-cs1-q4",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Article 226(3)",
        "question": "What is the legitimate constitutional remedy for an aggrieved party seeking vacation of an ex-parte interim stay granted by a High Court under Article 226?",
        "options": [
          "File an application under Article 226(3), which the High Court must dispose of within two weeks, failing which the stay is dealt with judicially rather than vacated automatically by a blanket decree",
          "Lodge a police complaint against the petitioner",
          "Approach the Governor under Article 161 for administrative stay revocation",
          "Move a contempt petition against the High Court Judge under Article 215"
        ],
        "correctIndex": 0,
        "explanation": "Article 226(3) specifically provides a constitutional mechanism for applying for vacation of ex-parte interim orders, requiring a judicial decision rather than automatic extinction."
      }
    ]
  },
  {
    "id": "d9-cs-2",
    "caseNumber": 2,
    "title": "All India Judges Association (2025) & Dheeraj Mor (2020): District Judge Direct Bar Quota Eligibility",
    "legalTheme": "Article 233(2), Direct Recruitment vs Promotion, Separation of Quotas, 7 Years Continuous Active Bar Practice",
    "factualMatrix": "Article 233(2) of the Constitution provides that a person not already in the service of the Union or of the State shall only be eligible to be appointed a District Judge if he has been for not less than seven years an advocate or a pleader and is recommended by the High Court for appointment.\n\nSeveral High Courts across India issued notifications inviting applications for direct recruitment to the Higher Judicial Service (District Judges) against the 25% Bar quota. Multiple serving judicial officers belonging to the Subordinate Judicial Service (such as Civil Judges and Judicial Magistrates), who had completed 7 or more years of practice as advocates prior to entering judicial service, applied for these direct recruit vacancies.\n\nThe High Courts rejected their applications, holding that under Article 233(2), direct recruitment is strictly reserved for practicing advocates at the Bar. The serving judicial officers filed writ petitions arguing that the phrase 'has been for not less than seven years an advocate' is satisfied since they practiced for 7 years before joining the bench, and the phrase 'not already in the service' refers to non-judicial administrative services, not the judicial service itself. In Dheeraj Mor v. Hon'ble High Court of Delhi (2020 3-Judge Bench) and reaffirmed by a 5-Judge Bench in All India Judges Association (January 2025), the Supreme Court definitively resolved this controversy.",
    "framingQuestions": [
      "1. What is the true interpretation of the phrase 'has been for not less than seven years an advocate' in Article 233(2)? Does it require continuous active practice at the date of application?",
      "2. Does the constitutional bar in Article 233(2)—'is not already in the service of the Union or of the State'—apply to members of the Subordinate Judicial Service?",
      "3. What are the three distinct quotas governing appointment to the Higher Judicial Service under the All India Judges Association framework?"
    ],
    "statutoryApplicability": [
      "Article 233(1) & (2) (Appointment of District Judges)",
      "Article 234 (Recruitment of persons other than district judges to the judicial service)",
      "Article 235 (Control over subordinate courts)",
      "Dheeraj Mor v. Hon'ble High Court of Delhi (2020 3-Judge Bench)",
      "All India Judges Association v. Union of India (2002 3-Judge & 2025 5-Judge Bench)"
    ],
    "modelAnswer": "1. REQUIREMENT OF CONTINUOUS 7 YEARS PRACTICE AS ON CUT-OFF DATE:\nThe Supreme Court in Dheeraj Mor (2020), affirmed in All India Judges Association (2025), held that the expression 'has been for not less than seven years an advocate' in Article 233(2) requires continuous active practice at the Bar as an advocate for 7 years as on the cut-off date of the application. The past experience as an advocate of a person who has subsequently joined judicial service ceases to qualify as 'advocate practice' because a judicial officer is an employee of the State and has surrendered his license to practice under the Bar Council Rules.\n\n2. BAR APPLIES TO SUBORDINATE JUDICIAL OFFICERS:\nThe words 'not already in the service of the Union or of the State' in Article 233(2) encompass both civil administrative services and the subordinate judicial service. A person who is already in judicial service cannot seek appointment as a District Judge through the direct recruitment Bar quota. To permit serving judicial officers to compete with practicing advocates for the 25% Bar quota would erode the very purpose of infusing fresh legal acumen from the active Bar into the Higher Judicial Service.\n\n3. THREE CHANNELS OF PROMOTION/APPOINTMENT:\nUnder the All India Judges Association (2002) framework as maintained by the Supreme Court:\n(a) 50% quota for regular promotion on the basis of seniority-cum-merit from Civil Judges (Senior Division);\n(b) 25% quota for accelerated promotion through a Limited Departmental Competitive Examination (LDCE) strictly for Civil Judges with requisite minimum judicial service;\n(c) 25% quota for direct recruitment exclusively from the practicing Bar under Article 233(2). Serving judicial officers cannot jump between these channels without resigning from service prior to application.",
    "markingRubric": [
      {
        "criterion": "Interpretation of Article 233(2) requiring continuous active 7 years Bar practice on the cut-off date",
        "marks": 4
      },
      {
        "criterion": "Application of 'not already in the service' bar to serving subordinate judicial officers",
        "marks": 3
      },
      {
        "criterion": "Delineation of the three 50%-25%-25% recruitment streams under the All India Judges Association framework",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d9-cs2-q1",
        "testedDimension": "Landmark Ratio",
        "articleRef": "Article 233(2)",
        "question": "In Dheeraj Mor (2020) and All India Judges Association (Jan 2025), what did the Supreme Court hold regarding serving Civil Judges applying for direct recruitment as District Judges?",
        "options": [
          "Serving Civil Judges are permitted to apply in the direct Bar quota if they have 7 years combined experience",
          "Serving Civil Judges are strictly barred from applying for the 25% direct Bar quota under Article 233(2); they can only advance through the 50% regular promotion or 25% LDCE quota",
          "Serving Civil Judges can apply if they obtain permission from the Governor",
          "Serving Civil Judges are granted automatic promotion without taking any examination"
        ],
        "correctIndex": 1,
        "explanation": "The Supreme Court ruled that Article 233(2) is strictly reserved for continuous active practicing advocates; serving judicial officers cannot apply under the direct Bar quota."
      },
      {
        "id": "d9-cs2-q2",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Article 233(2)",
        "question": "What does the phrase 'has been for not less than seven years an advocate' in Article 233(2) mean according to constitutional interpretation?",
        "options": [
          "Cumulative 7 years of practice at any point in one's life, even with 10 years of gap",
          "Continuous active practice at the Bar for at least seven years as of the cut-off date for submission of applications",
          "Holding an LL.B. degree for 7 years without actual appearance in court",
          "Working as a legal researcher in a law firm for 7 years"
        ],
        "correctIndex": 1,
        "explanation": "It requires continuous, active legal practice at the Bar as an advocate for not less than 7 years up to the cut-off date."
      },
      {
        "id": "d9-cs2-q3",
        "testedDimension": "Article Threshold",
        "articleRef": "Article 233 & 234",
        "question": "What is the constitutional distinction between 'District Judge' appointments under Article 233 and 'other judicial appointments' under Article 234?",
        "options": [
          "District Judges are appointed by the President, whereas other judges are appointed by the Prime Minister",
          "District Judges are appointed by the Governor in consultation with the High Court under Art 233; other judicial officers are appointed by the Governor after consultation with the State Public Service Commission and the High Court under Art 234",
          "There is no constitutional distinction between the two cadres",
          "Article 234 applies only to appointments in Union Territories"
        ],
        "correctIndex": 1,
        "explanation": "Article 233 governs District Judge appointments via High Court consultation; Article 234 governs recruitment of persons other than District Judges via SPSC and HC."
      },
      {
        "id": "d9-cs2-q4",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Article 233",
        "question": "If a serving Civil Judge wishes to compete for the 25% direct recruitment Bar quota under Article 233(2), what must he do before applying?",
        "options": [
          "Obtain an NOC from the Chief Minister",
          "He cannot qualify merely by obtaining leave; he must unconditionally resign from judicial service and resume active practice at the Bar for 7 continuous years",
          "File an interlocutory application before the Supreme Court under Article 32",
          "Take an oath of office before the Advocate General"
        ],
        "correctIndex": 1,
        "explanation": "Because an advocate ceases practice upon entering judicial service, a serving officer cannot compete without resigning and completing the requisite active continuous practice at the Bar."
      }
    ]
  },
  {
    "id": "d9-cs-3",
    "caseNumber": 3,
    "title": "The Three Judges Cases (1981-1998) & NJAC Case (2015): The Collegium & Judicial Independence",
    "legalTheme": "Articles 124(2), 217(1), 99th Constitutional Amendment, NJAC Act 2014, Basic Structure Doctrine, Judicial Primacy",
    "factualMatrix": "The mechanism for appointing judges to the Supreme Court and High Courts underwent three dramatic phases:\n1. S.P. Gupta v. Union of India (First Judges Case, 1981 7-Judge Bench): Held that 'consultation' in Articles 124(2) and 217(1) does not mean 'concurrence', establishing executive primacy in judicial appointments.\n2. Supreme Court Advocates-on-Record Association v. UOI (Second Judges Case, 1993 9-Judge Bench): Overruled S.P. Gupta, holding that 'consultation' means 'concurrence' and judicial opinion has primacy to safeguard judicial independence. Created the Collegium (CJI + 2 senior-most judges).\n3. Special Reference No. 1 of 1998 (Third Judges Case, 1998 9-Judge Bench): Expanded the Collegium to CJI + 4 senior-most judges for Supreme Court appointments, and CJI + 2 senior-most judges for High Court appointments.\n\nIn 2014, Parliament passed the Constitution (Ninety-Ninth Amendment) Act, 2014 and the National Judicial Appointments Commission (NJAC) Act, 2014, replacing the Collegium with a 6-member body: CJI (Chairperson), two senior-most SC judges, the Union Law Minister, and two eminent persons nominated by a committee (CJI, PM, Leader of Opposition). Crucially, if any two members opposed a recommendation, the NJAC could not recommend that candidate.\n\nThe 99th Amendment and NJAC Act were challenged in Supreme Court Advocates-on-Record Association v. Union of India (Fourth Judges Case, 2015). By a 4:1 majority (Khehar, Lokur, Kurian Joseph, Goel JJ; Chelameswar J dissenting), the 5-Judge Constitution Bench declared the 99th Amendment and NJAC Act unconstitutional and revived the Collegium system.",
    "framingQuestions": [
      "1. Why did the 4:1 majority strike down the 99th Constitutional Amendment and NJAC Act, 2014 as violating the Basic Structure?",
      "2. What is the constitutional significance of 'primacy of the judiciary' in the appointment of judges as recognized in the Second and Fourth Judges Cases?",
      "3. What is the composition and operational rule of the Collegium under the 1998 Third Judges Case for Supreme Court appointments?"
    ],
    "statutoryApplicability": [
      "Article 124(2) & Article 217(1)",
      "Constitution (Ninety-Ninth Amendment) Act, 2014 (struck down)",
      "National Judicial Appointments Commission Act, 2014 (struck down)",
      "S.P. Gupta v. Union of India (1981 7-Judge Bench)",
      "SCAORA v. Union of India (1993 9-Judge Bench)",
      "Special Reference No. 1 of 1998 (1998 9-Judge Bench)",
      "SCAORA v. Union of India (NJAC Case, 2015 5-Judge Bench)"
    ],
    "modelAnswer": "1. VIOLATION OF BASIC STRUCTURE (JUDICIAL INDEPENDENCE):\nThe 4:1 majority held that the independence of the judiciary is an inviolable basic feature of the Constitution. Under the NJAC structure, the Law Minister was an ex-officio member, and any two members could veto an appointment. This meant that the executive, combined with one 'eminent person', could veto any unanimous choice of the Chief Justice and senior-most judges. Because the Government is the single largest litigant before the courts, granting the executive a decisive veto over judicial appointments directly undermines judicial independence and the doctrine of separation of powers.\n\n2. PRIMACY OF JUDICIAL OPINION:\nThe Second Judges Case (1993) established that the consultation process under Articles 124(2) and 217(1) must give primacy to the institutional view of the judiciary represented by the CJI and senior colleagues. Judicial primacy does not mean individual CJI hegemony, but an institutional consensus. The NJAC scheme destroyed this primacy by reducing the judiciary to a minority or vulnerable block within a composite commission.\n\n3. COLLEGIUM COMPOSITION AND WORKING (1998 ADVISORY OPINION):\nUnder the Third Judges Case (1998):\n(a) For Supreme Court appointments: CJI + 4 senior-most Puisne Judges of the Supreme Court. If the CJI does not consult the 4 senior-most judges, the recommendation has no legal effect. If two judges give adverse opinions, the CJI cannot forward the recommendation.\n(b) For High Court appointments: CJI + 2 senior-most Puisne Judges of the Supreme Court, in consultation with the Chief Justice of the concerned High Court.\n(c) The executive can return a recommendation once for reconsideration with reasons; but if the Collegium unanimously reiterates the name, the appointment must be made by convention.",
    "markingRubric": [
      {
        "criterion": "Thorough reasoning behind striking down the 99th Amendment and NJAC in the Fourth Judges Case (2015)",
        "marks": 4
      },
      {
        "criterion": "Explanation of Judicial Independence as part of the Basic Structure and need for judicial primacy",
        "marks": 3
      },
      {
        "criterion": "Exact composition and operational rules of the Collegium under Special Reference No. 1 of 1998",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d9-cs3-q1",
        "testedDimension": "Landmark Ratio",
        "articleRef": "Articles 124(2) & 217(1)",
        "question": "In the NJAC Case (SCAORA v. Union of India, 2015), what was the decisive ratio of the 4:1 majority in striking down the 99th Constitutional Amendment?",
        "options": [
          "The President did not give assent to the constitutional amendment bill",
          "Judicial independence is a basic feature of the Constitution, and allowing the executive and two eminent persons a veto over judicial selections severely compromises this independence",
          "Parliament lacks the legislative competence to amend Article 124 under any circumstance",
          "The Law Minister cannot be an advocate of the High Court"
        ],
        "correctIndex": 1,
        "explanation": "The 4:1 majority held that the NJAC structure compromised judicial independence—an inviolable basic feature—by giving the executive a veto over judicial appointments."
      },
      {
        "id": "d9-cs3-q2",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Article 124(2)",
        "question": "How did the 9-Judge Bench in the Second Judges Case (1993) re-interpret the term 'consultation' in Articles 124(2) and 217(1)?",
        "options": [
          "It held that consultation means mere polite communication without any binding value",
          "It held that consultation means concurrence, and the opinion of the Chief Justice of India representing the judiciary has institutional primacy",
          "It held that consultation refers exclusively to consulting the Attorney General of India",
          "It held that consultation is optional for High Court appointments"
        ],
        "correctIndex": 1,
        "explanation": "The Second Judges Case held that 'consultation' implies 'concurrence', giving primacy to the institutional view of the judiciary."
      },
      {
        "id": "d9-cs3-q3",
        "testedDimension": "Article Threshold",
        "articleRef": "Article 124(2) & Special Reference 1998",
        "question": "What is the mandatory composition of the Supreme Court Collegium for recommending appointments to the Supreme Court as laid down in the 1998 Advisory Opinion?",
        "options": [
          "Chief Justice of India and the two senior-most Supreme Court judges",
          "Chief Justice of India and the four senior-most Puisne Judges of the Supreme Court",
          "Chief Justice of India, the Union Law Minister, and the senior-most judge",
          "All sitting judges of the Supreme Court"
        ],
        "correctIndex": 1,
        "explanation": "Under the Third Judges Case (Special Reference No. 1 of 1998), the SC Collegium for Supreme Court appointments consists of the CJI + 4 senior-most Puisne Judges."
      },
      {
        "id": "d9-cs3-q4",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Article 124(2)",
        "question": "If the Central Government has adverse Intelligence Bureau (IB) inputs against a candidate recommended by the Collegium, what is the established constitutional recourse?",
        "options": [
          "The Government can unilaterally reject the candidate without informing the Collegium",
          "The Government can return the recommendation to the Collegium once with reasons and material; but if the Collegium unanimously reiterates the recommendation, the appointment must be processed",
          "The Government can issue an ordinance disqualifying the candidate",
          "The President can refer the candidate's character to the Parliament Public Accounts Committee"
        ],
        "correctIndex": 1,
        "explanation": "Under the established Collegium norms, the Union can return the recommendation once for reconsideration; if reiterated unanimously, the appointment must be made."
      }
    ]
  },
  {
    "id": "d9-cs-4",
    "caseNumber": 4,
    "title": "State of Haryana v. Bhajan Lal (1992): Quashing under Art. 226 / Sec 528 BNSS (Sec 482 CrPC)",
    "legalTheme": "Article 226, Section 482 CrPC (Section 528 BNSS), FIR Quashing, Inherent Powers, Seven Golden Principles",
    "factualMatrix": "In 1987, Dharam Pal filed a complaint against Bhajan Lal (former Chief Minister of Haryana) alleging that Bhajan Lal accumulated enormous properties disproportionate to his known sources of income by abusing his official position. The police registered an FIR under Section 5(2) of the Prevention of Corruption Act, 1947 and Sections 161 and 165 of the IPC.\n\nBhajan Lal filed a writ petition under Articles 226 and 227 before the Punjab and Haryana High Court seeking the quashing of the FIR and the entire investigation. The High Court quashed the FIR, holding that the allegations were motivated by political vendetta and that the statutory requirements for investigation were not complied with.\n\nThe State of Haryana appealed to the Supreme Court. The Supreme Court set aside the High Court's judgment, holding that the High Court exceeded its jurisdiction by evaluating the veracity and genuineness of allegations at the threshold stage. However, to provide authoritative guidance for High Courts exercising jurisdiction under Article 226 or Section 482 CrPC (now Section 528 BNSS), Justice S. Ratnavel Pandian formulated the landmark 'Seven Categories' of cases where extraordinary or inherent powers may be exercised to quash an FIR or criminal proceeding.",
    "framingQuestions": [
      "1. What are the key categories laid down in Bhajan Lal where a High Court is justified in quashing an FIR or criminal complaint under Article 226 or inherent powers?",
      "2. Why is the High Court prohibited from conducting a 'mini-trial' or evaluating defense evidence when entertaining a quashing petition at the FIR stage?",
      "3. What is the constitutional relationship between the police's statutory power of investigation and the High Court's writ jurisdiction under Article 226?"
    ],
    "statutoryApplicability": [
      "Article 226 (High Court writ jurisdiction)",
      "Section 482 CrPC / Section 528 BNSS (Inherent powers of High Court)",
      "Section 156 CrPC / Section 175 BNSS (Police officer's power to investigate)",
      "State of Haryana v. Bhajan Lal (1992 Supp (1) SCC 335)",
      "Neeharika Infrastructure Pvt. Ltd. v. State of Maharashtra (2021 3-Judge Bench)"
    ],
    "modelAnswer": "1. SEVEN CATEGORIES OF BHAJAN LAL (1992):\nThe Supreme Court held that the extraordinary power under Article 226 or inherent power under Section 482 CrPC (Section 528 BNSS) can be exercised sparingly and in rarest of rare cases to prevent abuse of the process or secure ends of justice. The seven illustrative categories are:\n1. Where allegations in the FIR, even taken at face value, do not prima facie constitute any offense;\n2. Where allegations do not disclose a cognizable offense justifying police investigation under Section 156(1) CrPC;\n3. Where uncontroverted allegations in the FIR and evidence collected do not disclose commission of any offense;\n4. Where allegations constitute only a non-cognizable offense, barring police investigation without Magistrate order under Section 155(2) CrPC;\n5. Where allegations are so absurd and inherently improbable that no prudent person can reach a just conclusion;\n6. Where there is an express legal bar engrafted in any provision of the Code or Act (e.g., lack of sanction);\n7. Where a criminal proceeding is manifestly attended with mala fide or instituted maliciously with an ulterior motive for wreaking vengeance.\n\n2. NO MINI-TRIAL AT THE THRESHOLD:\nThe Court reiterated that at the FIR stage, the High Court cannot appreciate evidence, evaluate disputed defense documents, or determine whether allegations will ultimately stand proven at trial. Doing so usurps the statutory function of the investigating agency and the trial court.\n\n3. POLICE INVESTIGATION VS. WRIT JURISDICTION:\nUnder the statutory scheme (King Emperor v. Khwaja Nazir Ahmad 1944 reaffirmed in Bhajan Lal), the field of investigation is reserved exclusively for the police. The judiciary does not interfere with an ongoing investigation into a cognizable offense unless the proceedings fall squarely within one of the exceptional categories above.",
    "markingRubric": [
      {
        "criterion": "Accurate recitation and analysis of the 7 illustrative Bhajan Lal quashing categories",
        "marks": 4
      },
      {
        "criterion": "Explanation of the prohibition against appreciating evidence or conducting mini-trials under Art. 226 / Sec 482",
        "marks": 3
      },
      {
        "criterion": "Judicial restraint regarding the police's statutory prerogative to investigate cognizable offenses",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d9-cs4-q1",
        "testedDimension": "Landmark Ratio",
        "articleRef": "Article 226 & Sec 482 CrPC / 528 BNSS",
        "question": "In State of Haryana v. Bhajan Lal (1992), what standard did the Supreme Court establish for High Courts exercising quashing powers under Article 226 or inherent powers?",
        "options": [
          "Quashing should be granted automatically whenever the accused alleges political bias",
          "The power to quash an FIR must be exercised sparingly and in the rarest of rare cases, strictly adhering to seven illustrative categories without evaluating defense evidence",
          "High Courts have no jurisdiction to quash an FIR before a charge-sheet is filed",
          "The High Court must examine all defense witnesses before deciding a quashing petition"
        ],
        "correctIndex": 1,
        "explanation": "Bhajan Lal established that quashing an FIR is an extraordinary remedy to be exercised sparingly in rarest of rare cases within 7 defined categories."
      },
      {
        "id": "d9-cs4-q2",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Section 528 BNSS / Article 226",
        "question": "Which of the following is strictly prohibited for a High Court when hearing a petition under Article 226 or Section 482 CrPC (Section 528 BNSS) to quash an FIR?",
        "options": [
          "Examining whether the FIR discloses the ingredients of a cognizable offense",
          "Conducting a mini-trial, assessing the credibility of witnesses, or relying on disputed defense documents",
          "Checking whether an express statutory bar like lack of valid sanction applies",
          "Determining whether the allegations are manifestly malicious"
        ],
        "correctIndex": 1,
        "explanation": "A High Court cannot evaluate evidence, adjudicate contested facts, or hold a mini-trial at the quashing stage."
      },
      {
        "id": "d9-cs4-q3",
        "testedDimension": "Article Threshold",
        "articleRef": "Article 226 vs Section 482 CrPC / 528 BNSS",
        "question": "What is the structural relationship between Article 226 and Section 482 CrPC (Section 528 BNSS) in criminal quashing proceedings?",
        "options": [
          "Article 226 is a constitutional power whereas Section 482 CrPC / Section 528 BNSS is statutory; both can be invoked to quash proceedings to prevent abuse of judicial process",
          "Section 482 CrPC overrides and repeals Article 226 in criminal matters",
          "Article 226 cannot be invoked in any criminal matter whatsoever",
          "Section 482 can only be exercised with prior sanction of the Advocate General"
        ],
        "correctIndex": 0,
        "explanation": "Article 226 is an overriding constitutional power and Section 482/528 is inherent statutory power; both coexist to prevent abuse of process and secure ends of justice."
      },
      {
        "id": "d9-cs4-q4",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Section 528 BNSS",
        "question": "If an FIR discloses a purely civil commercial contract breach without any dishonest intention at inception, what is the appropriate remedy for the accused?",
        "options": [
          "File an appeal before the Gram Nyayalaya",
          "Approach the High Court under Article 226 or Section 482 CrPC (Section 528 BNSS) for quashing on the ground that civil disputes are being given a criminal cloak",
          "Surrender before the District Magistrate and seek executive pardon",
          "File a complaint before the Human Rights Commission"
        ],
        "correctIndex": 1,
        "explanation": "Under Bhajan Lal Category 1 and 3, converting a purely civil dispute into criminal proceedings without ingredients of an offense is a classic ground for quashing under Art 226 / Sec 482."
      }
    ]
  },
  {
    "id": "d9-cs-5",
    "caseNumber": 5,
    "title": "Whirlpool Corporation v. Registrar of Trade Marks (1998): Exceptions to Alternative Statutory Remedies",
    "legalTheme": "Article 226, Exhaustion of Alternative Remedies, Rule of Discretion vs Rule of Jurisdiction, Certiorari & Prohibition",
    "factualMatrix": "Whirlpool Corporation, a US-based multinational, was the registered proprietor of the trademark 'WHIRLPOOL' in India for electrical appliances. The registration was renewed up to 1977 but lapsed due to non-payment of renewal fees. In 1986, an Indian company filed an application for registration of the mark 'WHIRLPOOL'. Whirlpool opposed the application.\n\nSubsequently, the Registrar of Trade Marks, Mumbai issued a show-cause notice to Whirlpool proposing to cancel its earlier trademark certificate. Under the Trade and Merchandise Marks Act, 1958, an statutory appeal was provided to the High Court against any order of the Registrar. However, before the Registrar could pass a final order, Whirlpool approached the Bombay High Court under Article 226 seeking a writ of prohibition to restrain the Registrar from proceeding, contending that the notice was issued wholly without jurisdiction.\n\nThe single judge and the Division Bench of the High Court dismissed the writ petition at the threshold, holding that since the Trade and Merchandise Marks Act provided a complete statutory code with an appellate mechanism, the writ petition was not maintainable. Whirlpool appealed to the Supreme Court. In a celebrated judgment, the Supreme Court ruled on whether the existence of an alternative statutory remedy is an absolute bar to maintaining a writ petition under Article 226.",
    "framingQuestions": [
      "1. Is the rule of exhaustion of alternative statutory remedies an absolute bar of jurisdiction or a rule of judicial discretion?",
      "2. What are the three well-recognized exceptions where an Article 226 writ petition is maintainable notwithstanding an efficacious alternative remedy?",
      "3. When does a writ of prohibition lie against a quasi-judicial authority?"
    ],
    "statutoryApplicability": [
      "Article 226(1) & (2) (Power of High Courts to issue writs)",
      "Trade and Merchandise Marks Act, 1958",
      "Whirlpool Corporation v. Registrar of Trade Marks, Mumbai (1998 8 SCC 1)",
      "Harbanslal Sahnia v. Indian Oil Corpn. Ltd. (2003 2 SCC 107)",
      "Radha Krishan Industries v. State of H.P. (2021 6 SCC 771)"
    ],
    "modelAnswer": "1. RULE OF DISCRETION, NOT JURISDICTIONAL BAR:\nThe Supreme Court held that the existence of an alternative statutory remedy does not operate as an absolute constitutional bar or deprive the High Court of its jurisdiction under Article 226. It is a rule of judicial policy, convenience, self-restraint, and discretion. The jurisdiction of the High Court under Article 226 is plenary and vast, and cannot be curtailed by an ordinary statute.\n\n2. THREE RECOGNIZED EXCEPTIONS:\nJustice S. Saghir Ahmad laid down the three classic contingencies where a High Court may entertain an Article 226 writ petition despite an alternative statutory remedy:\n(a) Where the writ petition has been filed for the enforcement of any of the Fundamental Rights guaranteed under Part III of the Constitution;\n(b) Where there has been a complete violation of the principles of natural justice (e.g., ex-parte order passed without notice or hearing);\n(c) Where the order or proceedings are wholly without jurisdiction or the vires of an Act is challenged.\n(A fourth exception recognized in Harbanslal Sahnia is where the proceedings are an abuse of the process of law or actuated by mala fides).\n\n3. WRIT OF PROHIBITION:\nA writ of prohibition is an extraordinary judicial remedy issued by a superior court to prevent an inferior court or quasi-judicial tribunal from usurping a jurisdiction with which it is not legally vested, or from acting in excess of its jurisdiction. Where a statutory authority acts without jurisdiction from the very inception, a party is not compelled to submit to the illegal proceedings and wait for an adverse final order before seeking relief.",
    "markingRubric": [
      {
        "criterion": "Delineation between rule of discretion and constitutional jurisdiction under Article 226",
        "marks": 4
      },
      {
        "criterion": "Precise articulation of the three Whirlpool exceptions (Fundamental Rights, Natural Justice, Want of Jurisdiction)",
        "marks": 4
      },
      {
        "criterion": "Application of writs of prohibition and certiorari to quasi-judicial actions",
        "marks": 2
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d9-cs5-q1",
        "testedDimension": "Landmark Ratio",
        "articleRef": "Article 226",
        "question": "In Whirlpool Corporation v. Registrar of Trade Marks (1998), what did the Supreme Court hold regarding the exhaustion of alternative statutory remedies?",
        "options": [
          "An alternative statutory remedy is an absolute jurisdictional bar that strips the High Court of power under Article 226",
          "It is a rule of discretion and convenience, not an absolute constitutional bar, and does not oust High Court jurisdiction under Article 226 in three specific contingencies",
          "The High Court can only entertain a writ if the applicant pays a 50% statutory deposit",
          "Writ petitions under Article 226 can never be filed against trademark authorities"
        ],
        "correctIndex": 1,
        "explanation": "The Supreme Court established that alternative remedy is a rule of self-restraint and discretion, not a constitutional bar of jurisdiction."
      },
      {
        "id": "d9-cs5-q2",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Article 226",
        "question": "Which of the following is NOT one of the three classic exceptions to the alternative remedy rule laid down in Whirlpool Corporation (1998)?",
        "options": [
          "Enforcement of any of the Fundamental Rights under Part III",
          "Complete violation of the principles of natural justice",
          "Proceedings or orders wholly without jurisdiction or challenge to statutory vires",
          "The applicant is an influential multinational corporation"
        ],
        "correctIndex": 3,
        "explanation": "The three exceptions are: (1) FR violation, (2) Natural justice violation, (3) Lack of jurisdiction / ultra vires. Corporate stature is completely irrelevant."
      },
      {
        "id": "d9-cs5-q3",
        "testedDimension": "Article Threshold",
        "articleRef": "Article 226(2)",
        "question": "Under Article 226(2), on what territorial basis can a High Court issue writs against a central authority located outside its state boundaries?",
        "options": [
          "Only if the Central Government provides express written consent",
          "If the cause of action wholly or in part arises within the territorial limits of that High Court",
          "Only if the Supreme Court grants a special transfer leave",
          "High Courts have no power outside their state borders under any condition"
        ],
        "correctIndex": 1,
        "explanation": "Under Article 226(2) (introduced by 15th Amendment), a High Court can issue writs outside its territory if the cause of action arises wholly or in part within its jurisdiction."
      },
      {
        "id": "d9-cs5-q4",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Article 226",
        "question": "If a statutory authority initiates adjudication proceedings under a law that has already been declared unconstitutional, what writ should the aggrieved citizen seek?",
        "options": [
          "A writ of Quo Warranto",
          "A writ of Prohibition to restrain the authority from proceeding wholly without jurisdiction, followed by Certiorari to quash the notice",
          "A writ of Habeas Corpus",
          "An election petition before the High Court"
        ],
        "correctIndex": 1,
        "explanation": "Prohibition lies to restrain an inferior tribunal from acting without jurisdiction, and Certiorari quashes the unconstitutional notice."
      }
    ]
  },
  {
    "id": "d9-cs-6",
    "caseNumber": 6,
    "title": "L. Chandra Kumar v. Union of India (1997): Judicial Review as an Untruncatable Basic Feature",
    "legalTheme": "Articles 323A, 323B, 226, 227, 32, Exclusion of Judicial Review, Tribunals as Supplemental Courts, Overruling Sampath Kumar",
    "factualMatrix": "By the Constitution (Forty-Second Amendment) Act, 1976, Parliament inserted Part XIV-A comprising Articles 323A and 323B. Article 323A empowered Parliament to establish Administrative Tribunals for resolving disputes regarding recruitment and conditions of service of public servants. Crucially, Article 323A(2)(d) and Article 323B(3)(d) authorized Parliament and State Legislatures to exclude the jurisdiction of all courts, including the High Courts under Articles 226 and 227, with the sole exception of the Supreme Court under Article 136.\n\nPursuant to Article 323A, Parliament enacted the Administrative Tribunals Act, 1985. Section 28 of the Act excluded the jurisdiction of all courts, including High Courts, regarding service matters covered by the Central Administrative Tribunal (CAT).\n\nIn S.P. Sampath Kumar v. UOI (1987), a 5-Judge Constitution Bench upheld the exclusion of High Court jurisdiction, ruling that Tribunals could act as an effective institutional substitute for High Courts provided they had sufficient independence. However, widespread concerns arose regarding the efficacy, independence, and competence of tribunals. Multiple petitions were filed challenging the exclusion of High Court review. A 7-Judge Constitution Bench was constituted in L. Chandra Kumar v. Union of India (1997) to decide whether the power of judicial review of High Courts under Articles 226/227 can be excluded by constitutional amendment.",
    "framingQuestions": [
      "1. Did the 7-Judge Constitution Bench in L. Chandra Kumar hold that judicial review under Articles 226/227 and 32 is part of the Basic Structure?",
      "2. Why were the exclusionary clauses in Articles 323A(2)(d), 323B(3)(d), and Section 28 of the Administrative Tribunals Act declared unconstitutional?",
      "3. What is the constitutional role of statutory Tribunals: are they substitutes or supplemental bodies to the High Courts?"
    ],
    "statutoryApplicability": [
      "Article 323A & 323B (Part XIV-A, Tribunals)",
      "Article 226 & 227 (High Court powers of writs and superintendence)",
      "Article 32 & 136 (Supreme Court constitutional jurisdiction)",
      "Section 28 Administrative Tribunals Act, 1985 (struck down in part)",
      "L. Chandra Kumar v. Union of India (1997 3 SCC 261, 7-Judge Bench)",
      "S.P. Sampath Kumar v. Union of India (1987 1 SCC 124, 5-Judge Bench)"
    ],
    "modelAnswer": "1. JUDICIAL REVIEW IS AN UNTOUCHABLE BASIC FEATURE:\nThe 7-Judge Constitution Bench unanimously held that the power of judicial review vested in the High Courts under Articles 226 and 227 and in the Supreme Court under Article 32 is an integral and essential feature of the Constitution, constituting part of its Basic Structure. Neither Parliament through ordinary legislation nor through a constitutional amendment under Article 368 can extinguish or truncate this judicial review.\n\n2. OVERRULING OF SAMPATH KUMAR & UNCONSTITUTIONALITY OF EXCLUSION CLAUSES:\nThe Court expressly overruled Sampath Kumar (1987). It struck down Article 323A(2)(d) and Article 323B(3)(d) to the extent they excluded the jurisdiction of the High Courts under Articles 226/227 and the Supreme Court under Article 32. Consequently, Section 28 of the Administrative Tribunals Act, 1985 and similar exclusionary provisions in state tribunal statutes were declared unconstitutional.\n\n3. TRIBUNALS ARE SUPPLEMENTAL, NOT SUBSTITUTIONAL:\nThe Court ruled that Tribunals established under Articles 323A and 323B cannot be treated as full substitutes for the High Courts. Instead, they act as supplemental courts of first instance. Tribunals have the competence to test the validity of subordinate legislation and executive rules (except the parent Act under which they are created). However, all decisions of Tribunals are compulsorily subject to scrutiny before a Division Bench of the High Court having territorial jurisdiction under Articles 226 and 227. A litigant cannot directly leapfrog from a Tribunal to the Supreme Court under Article 136 bypassing the High Court.",
    "markingRubric": [
      {
        "criterion": "Judicial review under Articles 226/227 and 32 affirmed as an inviolable Basic Feature",
        "marks": 4
      },
      {
        "criterion": "Invalidation of exclusionary clauses in 323A(2)(d), 323B(3)(d), and Section 28 of the 1985 Act",
        "marks": 3
      },
      {
        "criterion": "Clarification of Tribunals as supplemental courts of first instance subject to High Court Division Bench review",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d9-cs6-q1",
        "testedDimension": "Landmark Ratio",
        "articleRef": "Articles 226, 227 & 323A",
        "question": "In L. Chandra Kumar v. Union of India (1997), what did the 7-Judge Constitution Bench decide regarding the exclusion of High Court writ jurisdiction over Tribunals?",
        "options": [
          "It upheld the complete exclusion of High Court jurisdiction under Article 323A",
          "It struck down the exclusionary clauses, holding that judicial review under Articles 226/227 is a Basic Feature that cannot be excluded even by constitutional amendment",
          "It held that Tribunals can replace the Supreme Court",
          "It ruled that Administrative Tribunals are unconstitutional and ordered their dissolution"
        ],
        "correctIndex": 1,
        "explanation": "The 7-Judge Bench ruled that judicial review under Articles 226/227 and 32 is part of the Basic Structure and cannot be excluded."
      },
      {
        "id": "d9-cs6-q2",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Part XIV-A & Article 226",
        "question": "What is the structural role assigned to Administrative Tribunals vis-a-vis High Courts post L. Chandra Kumar?",
        "options": [
          "Tribunals are sovereign bodies completely exempt from judicial review",
          "Tribunals act as supplemental bodies of first instance, and all their orders must be challenged before a Division Bench of the High Court under Article 226/227",
          "Tribunal decisions can only be reviewed by the Union Cabinet",
          "Tribunals are branches of the District Sessions Courts"
        ],
        "correctIndex": 1,
        "explanation": "Tribunals act as supplemental bodies of first instance; their decisions are subject to scrutiny before a Division Bench of the High Court."
      },
      {
        "id": "d9-cs6-q3",
        "testedDimension": "Article Threshold",
        "articleRef": "Article 323A & 323B",
        "question": "Can an Administrative Tribunal adjudicate the constitutional validity of its own parent enactment under which it was created?",
        "options": [
          "Yes, it has plenary power to strike down its parent Act",
          "No, a Tribunal cannot question the constitutional validity of its parent Act; such challenge lies exclusively before the High Court or Supreme Court",
          "Yes, but only if approved by the Tribunal Chairman sitting alone",
          "Yes, if the Attorney General gives an advisory opinion"
        ],
        "correctIndex": 1,
        "explanation": "As held in L. Chandra Kumar, a Tribunal cannot test the validity of the very parent statute under which it is created; only High Courts and SC can."
      },
      {
        "id": "d9-cs6-q4",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Article 136 vs Article 226",
        "question": "An employee aggrieved by an order of the Central Administrative Tribunal (CAT) seeks to file a Special Leave Petition directly before the Supreme Court under Article 136. Is this maintainable?",
        "options": [
          "Yes, Article 136 permits direct appeal from any tribunal at all times",
          "No; under L. Chandra Kumar, the litigant must first approach the Division Bench of the High Court under Article 226/227, unless an extraordinary exception is shown",
          "Yes, provided the petition is filed within 30 days",
          "No, because CAT orders are final and not subject to any court review"
        ],
        "correctIndex": 1,
        "explanation": "Under L. Chandra Kumar, an aggrieved party cannot bypass the High Court Division Bench to directly approach the Supreme Court under Article 136."
      }
    ]
  },
  {
    "id": "d9-cs-7",
    "caseNumber": 7,
    "title": "Rupa Ashok Hurra v. Ashok Hurra (2002): The Curative Petition Doctrine",
    "legalTheme": "Articles 137, 142, 32, Inherent Powers of Supreme Court, Prevention of Abuse of Process, Curative Jurisdiction",
    "factualMatrix": "Ashok Hurra and Rupa Hurra were married in 1970. Due to irreconcilable matrimonial differences, they filed a joint petition for divorce by mutual consent under Section 13B of the Hindu Marriage Act, 1955 before the trial court. However, before the expiry of the statutory six-month period, the wife withdrew her consent. The husband continued to pursue the proceedings.\n\nThe matter eventually reached the Supreme Court. In 1997, a 2-Judge Bench of the Supreme Court exercised its plenary power under Article 142 to dissolve the marriage, holding that the marriage was emotionally dead and broken down irretrievably, despite the wife's vehement objection that her consent had been formally revoked.\n\nThe wife filed a review petition under Article 137, which was dismissed by circulation. Having exhausted the remedy of review, she filed a writ petition under Article 32 of the Constitution, arguing that the judgment violated her fundamental rights under Articles 14 and 21.\n\nA 3-Judge Bench referred the matter to a 5-Judge Constitution Bench to determine two vital questions: (1) Whether a writ petition under Article 32 is maintainable against a final judgment of the Supreme Court; and (2) Whether the Supreme Court has inherent jurisdiction to reconsider its final judgment after the dismissal of a review petition to prevent manifest miscarriage of justice. On April 10, 2002, the 5-Judge Constitution Bench delivered its unanimous verdict.",
    "framingQuestions": [
      "1. Can a writ petition under Article 32 lie against a final judgment or order of the Supreme Court?",
      "2. What is the jurisprudential foundation of the 'Curative Petition' created in Rupa Ashok Hurra?",
      "3. What are the strict substantive grounds and procedural filters required to maintain a Curative Petition?"
    ],
    "statutoryApplicability": [
      "Article 137 (Review of judgments or orders by the Supreme Court)",
      "Article 142 (Plenary power of the Supreme Court to do complete justice)",
      "Article 32 (Remedies for enforcement of fundamental rights)",
      "Rupa Ashok Hurra v. Ashok Hurra (2002 4 SCC 388, 5-Judge Bench)",
      "Naresh Shridhar Mirajkar v. State of Maharashtra (1966 9-Judge Bench)"
    ],
    "modelAnswer": "1. ARTICLE 32 DOES NOT LIE AGAINST SUPREME COURT JUDGMENTS:\nThe 5-Judge Constitution Bench reaffirmed the principle laid down in Naresh Mirajkar (1966): a judicial order passed by a superior court of record cannot be challenged under Article 32 as violating Fundamental Rights. A judgment of the Supreme Court cannot be subjected to a collateral writ attack under Article 32, as the Supreme Court is not an inferior tribunal.\n\n2. CREATION OF THE CURATIVE JURISDICTION:\nBalancing the need for finality of litigation (res judicata) against the higher duty to prevent manifest injustice, the Court held that under its inherent plenary powers (derived from Articles 137 and 142), the Supreme Court has the power to reconsider its final judgments even after the dismissal of a review petition through a 'Curative Petition'. This is an exceptional remedy reserved to prevent abuse of the process of the court and cure gross miscarriage of justice.\n\n3. SUBSTANTIVE GROUNDS & PROCEDURAL SAFEGUARDS:\nThe Court established strict parameters to prevent floodgates:\n(a) Substantive Grounds (strictly limited to two):\n  (i) Violation of principles of natural justice (e.g., party was not served or not heard before an adverse order was passed);\n  (ii) Bias or lack of disclosure by the judge (e.g., judge had a financial or personal interest in the subject matter or party).\n(b) Procedural Safeguards:\n  (i) The petitioner must specifically state that the grounds were taken in the review petition and dismissed by circulation;\n  (ii) The petition must be accompanied by a certificate of a Senior Advocate verifying that the requirements are satisfied;\n  (iii) The curative petition is first circulated to a Bench of the three senior-most judges and the judges who passed the original judgment (if available); only if a majority concludes the matter needs hearing is it listed in open court. If found vexatious, exemplary costs may be imposed.",
    "markingRubric": [
      {
        "criterion": "Rejection of Article 32 writ petitions against Supreme Court judgments based on Naresh Mirajkar",
        "marks": 3
      },
      {
        "criterion": "Constitutional basis of Curative Jurisdiction under Articles 137 and 142",
        "marks": 3
      },
      {
        "criterion": "Detailed specification of the two substantive grounds (natural justice and bias) and four procedural safeguards",
        "marks": 4
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d9-cs7-q1",
        "testedDimension": "Landmark Ratio",
        "articleRef": "Articles 137 & 142",
        "question": "In Rupa Ashok Hurra v. Ashok Hurra (2002), how did the 5-Judge Constitution Bench resolve the conflict between finality of judgments and gross miscarriage of justice?",
        "options": [
          "It held that judgments of the Supreme Court can be appealed to the President of India",
          "It invented the 'Curative Petition' under inherent powers (Articles 137 & 142) as a rare post-review remedy to prevent gross miscarriage of justice",
          "It ruled that any disappointed litigant can file an Article 32 petition against an SC judgment",
          "It held that review petitions can be filed an unlimited number of times"
        ],
        "correctIndex": 1,
        "explanation": "The Supreme Court devised the 'Curative Petition' under inherent powers to correct grave miscarriage of justice after review is dismissed."
      },
      {
        "id": "d9-cs7-q2",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Article 32 & 142",
        "question": "Why did the Supreme Court hold that an Article 32 writ petition is NOT maintainable against a final judgment of the Supreme Court itself?",
        "options": [
          "Because the Supreme Court does not have Article 32 powers in civil disputes",
          "Because a judicial order passed by a superior court of record cannot be impugned as violating Fundamental Rights through collateral writ proceedings",
          "Because Article 32 applies only against police officials",
          "Because Article 32 was repealed by the 44th Constitutional Amendment"
        ],
        "correctIndex": 1,
        "explanation": "Under the doctrine reaffirmed from Naresh Mirajkar, a judicial order of a superior court of record cannot be challenged under Article 32."
      },
      {
        "id": "d9-cs7-q3",
        "testedDimension": "Article Threshold",
        "articleRef": "Article 137",
        "question": "What are the two exclusive substantive grounds on which a Curative Petition can be entertained by the Supreme Court?",
        "options": [
          "Discovery of any new legal argument or change of counsel",
          "(1) Violation of principles of natural justice (party not heard), or (2) Apprehension of judicial bias/undisclosed conflict of interest",
          "Financial distress of the petitioner or sympathy",
          "Dissenting opinion by one of the High Court judges"
        ],
        "correctIndex": 1,
        "explanation": "The only two grounds are: (1) violation of audi alteram partem (not heard), and (2) judge bias / failure to disclose conflict."
      },
      {
        "id": "d9-cs7-q4",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Supreme Court Rules & Art 142",
        "question": "What mandatory procedural requirement must accompany the filing of every Curative Petition before the Supreme Court?",
        "options": [
          "A certificate signed by the Attorney General of India",
          "A certificate by a Senior Advocate certifying that the strict parameters laid down in Rupa Ashok Hurra are satisfied",
          "An approval resolution from the Bar Association of India",
          "A cash deposit of â‚¹10 Lakhs in the Registry"
        ],
        "correctIndex": 1,
        "explanation": "A curative petition must be accompanied by a certification from a Senior Advocate confirming fulfillment of the Rupa Ashok Hurra requirements."
      }
    ]
  },
  {
    "id": "d9-cs-8",
    "caseNumber": 8,
    "title": "Article 142: Scope & Boundaries from A.R. Antulay to Shilpa Sailesh",
    "legalTheme": "Article 142, Complete Justice, Prohibition on Bypassing Express Statutes, A.R. Antulay (1988), Shilpa Sailesh (2023)",
    "factualMatrix": "Article 142(1) of the Constitution empowers the Supreme Court to pass such decree or make such order as is necessary for doing complete justice in any cause or matter pending before it. Over the decades, the boundaries of this extraordinary plenary power have generated profound constitutional jurisprudence:\n\n1. Prem Chand Garg v. Excise Commissioner (1962 5-Judge Bench): Held that an order under Article 142 cannot be inconsistent with or contravene express statutory provisions.\n2. A.R. Antulay v. R.S. Nayak (1988 7-Judge Constitution Bench): In 1984, a 5-Judge Bench of the Supreme Court, seeking speedy trial, directed that the corruption trial of former Maharashtra CM A.R. Antulay be transferred from the Special Judge under the Criminal Law Amendment Act, 1952 to the Bombay High Court. In 1988, a 7-Judge Bench held that this direction violated Antulay's fundamental rights under Articles 14 and 21 by depriving him of his statutory right of appeal to the High Court, and was wholly without jurisdiction. The 7-Judge Bench ruled that Article 142 cannot override fundamental rights or statutory jurisdiction.\n3. Supreme Court Bar Association v. UOI (1998 5-Judge Bench): Clarified that Article 142 is curative, complementary, and supplementary; it cannot be used to build a new legal edifice or ignore substantive statutory laws.\n4. Shilpa Sailesh v. Varun Sreenivasan (2023 5-Judge Constitution Bench): Addressed whether the Supreme Court under Article 142 can grant a decree of divorce on the ground of irretrievable breakdown of marriage, and whether it can waive the statutory 6-month cooling-off period under Section 13B(2) of the Hindu Marriage Act, 1955.",
    "framingQuestions": [
      "1. What is the fundamental limitation placed upon Article 142 in A.R. Antulay (1988) and Supreme Court Bar Association (1998)?",
      "2. Can the Supreme Court under Article 142 grant divorce on the ground of irretrievable breakdown of marriage even when the statute does not recognize it?",
      "3. Can the 6-month statutory waiting period under Section 13B(2) of the Hindu Marriage Act be waived under Article 142?"
    ],
    "statutoryApplicability": [
      "Article 142(1) (Enforcement of decrees and orders of Supreme Court)",
      "Articles 14 and 21 (Fundamental rights to equality and fair trial)",
      "Section 13B(2) Hindu Marriage Act, 1955",
      "A.R. Antulay v. R.S. Nayak (1988 2 SCC 602, 7-Judge Bench)",
      "Supreme Court Bar Association v. Union of India (1998 4 SCC 409)",
      "Shilpa Sailesh v. Varun Sreenivasan (2023 SCC OnLine SC 544, 5-Judge Bench)"
    ],
    "modelAnswer": "1. CONSTITUTIONAL BOUNDARIES OF ARTICLE 142:\nAs established in A.R. Antulay (1988) and SCBA (1998), the plenary power under Article 142 is not unbridled or tyrannical. It is subject to two absolute constitutional limitations:\n(a) Article 142 cannot be used to violate Fundamental Rights guaranteed under Part III of the Constitution (as occurred when Antulay was deprived of his statutory forum of appeal);\n(b) Article 142 cannot be used to bypass or override express statutory prohibitions or rewrite substantive legislative enactments. It can fill statutory lacunae and supply procedural flesh, but cannot supplant substantive statutory rights.\n\n2. DIVORCE ON IRRETRIEVABLE BREAKDOWN UNDER ARTICLE 142 (SHILPA SAILESH 2023):\nThe 5-Judge Constitution Bench in Shilpa Sailesh held that the Supreme Court has the power under Article 142(1) to dissolve a marriage on the ground of 'irretrievable breakdown of marriage', even though this ground is not formally enacted in the Hindu Marriage Act, 1955. The Court ruled that where a marriage has completely broken down beyond any possibility of reconciliation, forcing the parties to remain legally tied causes extreme cruelty and injustice. Doing complete justice warrants dissolving the dead legal relationship.\n\n3. WAIVER OF 6-MONTH COOLING-OFF PERIOD:\nThe Constitution Bench in Shilpa Sailesh affirmed that the 6-month waiting period prescribed under Section 13B(2) of the Hindu Marriage Act is directory and procedural, not mandatory. If the Court is satisfied after evaluating the factors (such as duration of separation, past mediation efforts, financial settlement) that all reconciliation efforts have failed and the cooling-off period will only prolong agony, the Supreme Court under Article 142 can waive the 6-month period and grant an immediate decree of divorce by mutual consent.",
    "markingRubric": [
      {
        "criterion": "Detailed analysis of limits on Art. 142 established in A.R. Antulay (1988) regarding Fundamental Rights and statutory appeals",
        "marks": 4
      },
      {
        "criterion": "Evaluation of the 5-Judge Bench ruling in Shilpa Sailesh (2023) regarding irretrievable breakdown of marriage",
        "marks": 3
      },
      {
        "criterion": "Legal justification for waiving the Section 13B(2) cooling-off period as directory under Art. 142",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d9-cs8-q1",
        "testedDimension": "Landmark Ratio",
        "articleRef": "Article 142 & Articles 14/21",
        "question": "In the 7-Judge Constitution Bench decision in A.R. Antulay v. R.S. Nayak (1988), why were the Supreme Court's earlier transfer directions declared void and per incuriam?",
        "options": [
          "Because the transfer order was not signed by the President of India",
          "Because directing a criminal trial to be held by the High Court deprived the accused of his statutory right of appeal to the High Court, violating Articles 14 and 21; Article 142 cannot override fundamental rights",
          "Because corruption offenses can never be tried by a High Court Judge",
          "Because the accused was an elected Member of the Legislative Assembly"
        ],
        "correctIndex": 1,
        "explanation": "The 7-Judge Bench held that Article 142 cannot be exercised in violation of fundamental rights or to strip an accused of statutory appellate remedies."
      },
      {
        "id": "d9-cs8-q2",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Article 142",
        "question": "In Shilpa Sailesh v. Varun Sreenivasan (2023), what did the 5-Judge Constitution Bench rule regarding the dissolution of marriage under Article 142?",
        "options": [
          "The Supreme Court has no power to grant divorce under any circumstance",
          "The Supreme Court can grant a decree of divorce on the ground of irretrievable breakdown of marriage and waive the 6-month statutory waiting period under Section 13B(2) HMA to do complete justice",
          "Divorce can only be granted if both parties pay compensation to the State",
          "Only the High Court has inherent power to dissolve marriages under Article 142"
        ],
        "correctIndex": 1,
        "explanation": "Shilpa Sailesh established that the Supreme Court can dissolve marriage on irretrievable breakdown and waive the 13B(2) cooling-off period under Art 142."
      },
      {
        "id": "d9-cs8-q3",
        "testedDimension": "Article Threshold",
        "articleRef": "Article 142 vs High Court Powers",
        "question": "Does a High Court possess powers equivalent to Article 142 of the Supreme Court for doing 'complete justice'?",
        "options": [
          "Yes, Article 226 gives High Courts the exact same plenary power as Article 142",
          "No, the power under Article 142 is unique and exclusive to the Supreme Court of India; High Courts do not possess Article 142 plenary jurisdiction",
          "Yes, under Section 151 CPC High Courts have identical powers to Article 142",
          "Yes, when sitting as a Full Bench of five judges"
        ],
        "correctIndex": 1,
        "explanation": "The extraordinary plenary power under Article 142 is explicitly and exclusively conferred upon the Supreme Court, not High Courts."
      },
      {
        "id": "d9-cs8-q4",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Article 142",
        "question": "Can an aggrieved party approach the High Court under Article 226 requesting it to grant a divorce directly on the ground of irretrievable breakdown of marriage relying on Shilpa Sailesh?",
        "options": [
          "Yes, High Courts are bound to grant divorce on that ground",
          "No, the power to grant divorce on irretrievable breakdown is an exercise of Article 142 plenary power restricted to the Supreme Court; High Courts cannot grant divorce on this non-statutory ground",
          "Yes, provided the Chief Justice of the High Court approves",
          "Yes, in commercial division benches"
        ],
        "correctIndex": 1,
        "explanation": "High Courts do not have Article 142 powers; hence, they cannot grant divorce on the non-statutory ground of irretrievable breakdown of marriage."
      }
    ]
  },
  {
    "id": "d9-cs-9",
    "caseNumber": 9,
    "title": "Supreme Court Bar Association v. UOI (1998): Contempt Powers vs. Professional Discipline",
    "legalTheme": "Articles 129 & 215, Advocates Act 1961, Criminal Contempt, In Re Vinay Chandra Mishra Overruling, Disciplinary Autonomy of Bar Councils",
    "factualMatrix": "In 1994, during proceedings before a Division Bench of the Supreme Court, Senior Advocate and then-President of the Bar Association, Vinay Chandra Mishra, engaged in abrasive and confrontational conduct toward a sitting judge. The Supreme Court initiated criminal contempt proceedings.\n\nIn In Re: Vinay Chandra Mishra (1995 2 SCC 584), a 3-Judge Bench convicted him of criminal contempt of court under Article 129. In addition to sentencing him to simple imprisonment (which was suspended), the Court suspended his license to practice as an advocate for a period of three years and stripped him of his elective office in the Bar Council.\n\nThe Supreme Court Bar Association (SCBA) filed a writ petition challenging this judgment. The SCBA argued that: (1) The power to punish for contempt under Articles 129 and 215 does not include the power to suspend or revoke an advocate's license to practice law; and (2) The power of professional disciplinary action is exclusively vested in the State Bar Councils and Bar Council of India under the Advocates Act, 1961. A 5-Judge Constitution Bench was constituted to examine whether the inherent powers of a Court of Record under Article 129 extend to punishing an advocate by suspending his license.",
    "framingQuestions": [
      "1. Did the 5-Judge Constitution Bench in SCBA v. Union of India (1998) overrule In Re: Vinay Chandra Mishra (1995)?",
      "2. What is the scope and nature of the contempt power of a Court of Record under Articles 129 and 215?",
      "3. Why can the Supreme Court or High Court not suspend an advocate's license in exercise of its contempt jurisdiction?"
    ],
    "statutoryApplicability": [
      "Article 129 (Supreme Court to be a Court of Record)",
      "Article 215 (High Courts to be Courts of Record)",
      "Contempt of Courts Act, 1971",
      "Sections 35, 36, 37, 38 Advocates Act, 1961",
      "In Re: Vinay Chandra Mishra (1995 2 SCC 584, 3-Judge Bench)",
      "Supreme Court Bar Association v. Union of India (1998 4 SCC 409, 5-Judge Bench)"
    ],
    "modelAnswer": "1. OVERRULING OF VINAY CHANDRA MISHRA:\nThe 5-Judge Constitution Bench unanimously overruled the ratio of In Re: Vinay Chandra Mishra (1995). The Court held that the power to punish for contempt of court, though inherent and constitutional under Articles 129 and 215, does not empower the Supreme Court or a High Court to suspend or revoke an advocate's license to practice law as a punitive sanction for contempt.\n\n2. INHERENT POWER OF A COURT OF RECORD:\nUnder Articles 129 and 215, the Supreme Court and High Courts are Courts of Record endowed with summary inherent powers to punish for contempt of themselves. This power is designed to uphold the majesty of law, ensure the administration of justice, and protect the court from scandalization or obstruction. However, the punishments permissible under contempt jurisdiction are those recognized by law (e.g., imprisonment, fine, or demanding an apology).\n\n3. EXCLUSIVE DISCIPLINARY DOMAIN OF BAR COUNCILS:\nThe Advocates Act, 1961 is a complete and exclusive statutory code governing the legal profession. Under Sections 35, 36, and 37 of the Act, the power to discipline an advocate for professional misconduct—including suspending or removing his name from the state roll—is vested exclusively in the Disciplinary Committees of the State Bar Councils and the Bar Council of India. The Court cannot usurp this statutory jurisdiction by invoking Article 129 or Article 142. The Court can, however, refer the conduct of the contemnor-advocate to the Bar Council for disciplinary action, or debar him from appearing before that specific court until he purges his contempt.",
    "markingRubric": [
      {
        "criterion": "Constitutional analysis of the overruling of In Re: Vinay Chandra Mishra by the 5-Judge Bench",
        "marks": 4
      },
      {
        "criterion": "Demarcation between contempt of court jurisdiction (Arts. 129/215) and statutory professional discipline",
        "marks": 3
      },
      {
        "criterion": "Exclusive role of Bar Councils under Sections 35-37 Advocates Act, 1961 vs permissible court contempt sanctions",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d9-cs9-q1",
        "testedDimension": "Landmark Ratio",
        "articleRef": "Articles 129, 215 & Advocates Act 1961",
        "question": "In Supreme Court Bar Association v. Union of India (1998), what was the landmark ruling regarding the suspension of an advocate's license for contempt of court?",
        "options": [
          "The Supreme Court can permanently cancel an advocate's license without hearing him",
          "The Supreme Court and High Courts under Articles 129/215 CANNOT suspend or revoke an advocate's license as a punishment for contempt; that power belongs exclusively to the Bar Councils under the Advocates Act, 1961",
          "The Bar Council has no power over advocates who commit contempt in court",
          "Only the Union Law Minister can suspend an advocate's practice license"
        ],
        "correctIndex": 1,
        "explanation": "The 5-Judge Bench held that contempt power does not include the power to suspend an advocate's license, which is the exclusive domain of Bar Councils."
      },
      {
        "id": "d9-cs9-q2",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Article 129 & 215",
        "question": "What distinction did the Supreme Court draw between 'punishing for contempt' and 'debarring an advocate from appearing until purging contempt'?",
        "options": [
          "There is no distinction; both are identical punishments under the Advocates Act",
          "Suspending a license is professional discipline; preventing an advocate from appearing in court until he purges his contempt is an inherent regulatory measure to protect courtroom decorum",
          "Debarring an advocate requires an act of Parliament",
          "The Court cannot prevent an advocate from appearing under any circumstances"
        ],
        "correctIndex": 1,
        "explanation": "Preventing appearance until contempt is purged is a protective regulatory power, whereas suspending a professional license is a disciplinary power."
      },
      {
        "id": "d9-cs9-q3",
        "testedDimension": "Article Threshold",
        "articleRef": "Articles 129 & 215",
        "question": "What does the constitutional status of a 'Court of Record' under Articles 129 and 215 entail?",
        "options": [
          "Its records are preserved forever as conclusive evidence, and it possesses inherent power to determine its own jurisdiction and punish for contempt of itself",
          "It must record all proceedings on magnetic audio tapes",
          "Its judgments can only be published by the Government Printing Press",
          "It can only hear cases related to land revenue records"
        ],
        "correctIndex": 0,
        "explanation": "A Court of Record's records have conclusive evidentiary value, and it possesses inherent constitutional power to punish for contempt of itself."
      },
      {
        "id": "d9-cs9-q4",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Advocates Act 1961",
        "question": "If an advocate is convicted of criminal contempt for scandalizing a court, what legitimate step can the Supreme Court take regarding his professional license?",
        "options": [
          "Order the immediate public burning of his degree",
          "Direct that a copy of the judgment be forwarded to the Bar Council of India or State Bar Council to initiate disciplinary proceedings under Section 35 of the Advocates Act",
          "Direct the local police to cancel his Bar enrollment number",
          "Confiscate his law library"
        ],
        "correctIndex": 1,
        "explanation": "The Court can bring the contemnor's conduct to the notice of the relevant Bar Council for statutory disciplinary action under Section 35."
      }
    ]
  },
  {
    "id": "d9-cs-10",
    "caseNumber": 10,
    "title": "Chandra Mohan (1966) & Nripendra Nath Bagchi (1966): Separation of Subordinate Courts",
    "legalTheme": "Articles 233, 235, 50, Judicial Independence, Separation of Judiciary from Executive, High Court Control over Subordinate Courts",
    "factualMatrix": "In the 1960s, the State of Uttar Pradesh framed the U.P. Higher Judicial Service Rules providing for the recruitment of District Judges. Under these rules, a selection committee consisting of two High Court Judges and the Judicial Secretary to the Government screened candidates. The rules permitted executive officers (such as Revenue Officers, Sales Tax Officers, and Executive Magistrates) to be recruited to the Higher Judicial Service under the quota for persons 'in the service of the Union or of the State' under Article 233(2).\n\nChandra Mohan, an officer in the existing judicial service, challenged the appointments of these executive officers as District Judges. In Chandra Mohan v. State of U.P. (1966 5-Judge Bench), the Supreme Court examined whether executive magistrates and administrative officers could be appointed District Judges under Article 233.\n\nSimultaneously, in State of West Bengal v. Nripendra Nath Bagchi (1966 5-Judge Bench), an Additional District and Sessions Judge was subjected to disciplinary proceedings initiated by the State Government without the concurrence of the High Court. The executive argued that under Article 310 (doctrine of pleasure) and Article 311, the Governor as the appointing authority possessed the exclusive power to conduct disciplinary inquiries against District Judges. The Supreme Court decided whether the High Court or the executive government possesses disciplinary control over subordinate judicial officers under Article 235.",
    "framingQuestions": [
      "1. What is the meaning of the phrase 'service of the Union or of the State' in Article 233(2) as interpreted in Chandra Mohan?",
      "2. What is the scope and depth of 'control over subordinate courts' vested in the High Court under Article 235 as established in Nripendra Nath Bagchi?",
      "3. How do Articles 233 to 237 operationalize the directive principle of Separation of the Judiciary from the Executive (Article 50)?"
    ],
    "statutoryApplicability": [
      "Article 50 (Separation of judiciary from executive)",
      "Article 233 (Appointment of district judges)",
      "Article 235 (Control over subordinate courts)",
      "Article 311 (Dismissal, removal or reduction in rank)",
      "Chandra Mohan v. State of U.P. (1966 5-Judge Bench)",
      "State of West Bengal v. Nripendra Nath Bagchi (1966 5-Judge Bench)",
      "Chief Justice of A.P. v. L.V.A. Dixitulu (1979 5-Judge Bench)"
    ],
    "modelAnswer": "1. SERVICE MEANS JUDICIAL SERVICE ONLY (CHANDRA MOHAN 1966):\nThe 5-Judge Constitution Bench in Chandra Mohan held that the expression 'service of the Union or of the State' in Article 233(2) means judicial service exclusively. It does not mean civil administrative or executive service. The constitutional scheme was consciously enacted to protect the subordinate judiciary from executive encroachment. Allowing executive officers to be appointed as District Judges without qualifying as practicing advocates or subordinate judicial officers violates Article 233 and the core constitutional principle of judicial independence.\n\n2. EXCLUSIVE HIGH COURT CONTROL UNDER ARTICLE 235 (NRIPENDRA NATH BAGCHI 1966):\nThe 5-Judge Bench in Nripendra Nath Bagchi held that the word 'control' in Article 235 is comprehensive and plenary. It vests the complete administrative, operational, and disciplinary control of the subordinate judiciary exclusively in the High Court. This includes:\n(a) Postings, promotions, transfers, and confirmation of judicial officers;\n(b) Grant of leave and assessment of judicial performance;\n(c) Initiation, inquiry, and conduct of disciplinary proceedings.\nThe Governor retains only the formal act of issuing appointment orders and final orders of dismissal, removal, or reduction in rank pursuant to Article 311, but the Governor is bound by the recommendation of the High Court. The executive has zero authority to conduct independent disciplinary inquiries against judicial officers.\n\n3. CONSTITUTIONAL REALIZATION OF ARTICLE 50:\nArticles 233 to 237 form a self-contained constitutional code designed to insulate the subordinate judiciary from political and executive influence. By subordinating all lower judges solely to the High Court (Art. 235) and mandating High Court consultation for appointments (Art. 233 & 234), the Constitution translated the Directive Principle in Article 50 (separation of judiciary from executive) into an enforceable structural reality.",
    "markingRubric": [
      {
        "criterion": "Interpretation of 'service of the State' in Art. 233(2) restricted to judicial service in Chandra Mohan",
        "marks": 4
      },
      {
        "criterion": "Scope of exclusive High Court 'control' over subordinate judiciary under Art. 235 in Nripendra Nath Bagchi",
        "marks": 4
      },
      {
        "criterion": "Structural enforcement of Article 50 (separation of powers) through Chapter VI of Part VI",
        "marks": 2
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d9-cs10-q1",
        "testedDimension": "Landmark Ratio",
        "articleRef": "Article 233(2) & 50",
        "question": "In Chandra Mohan v. State of U.P. (1966), what did the Supreme Court rule regarding the eligibility of executive officers to be appointed as District Judges?",
        "options": [
          "Executive officers can be appointed District Judges if they clear an interview with the Chief Minister",
          "The expression 'service of the State' in Article 233(2) means judicial service only; executive and administrative officers cannot be appointed District Judges through this route",
          "All IAS and IPS officers are automatically qualified to be District Judges",
          "Executive magistrates can be appointed District Judges if approved by the Law Commission"
        ],
        "correctIndex": 1,
        "explanation": "The Constitution Bench held that 'service' in Article 233(2) means judicial service, preventing executive infiltration into the judiciary."
      },
      {
        "id": "d9-cs10-q2",
        "testedDimension": "Legal Doctrine",
        "articleRef": "Article 235",
        "question": "In State of West Bengal v. Nripendra Nath Bagchi (1966), what was the Supreme Court's ruling on the scope of the High Court's 'control' under Article 235?",
        "options": [
          "Control is restricted to fixing courtroom working hours",
          "'Control' under Article 235 is comprehensive and exclusive, vesting full disciplinary authority, postings, transfers, and inquiries over subordinate judges solely in the High Court",
          "The State Government has concurrent disciplinary authority with the High Court",
          "Control belongs to the Governor and the High Court plays only an advisory role"
        ],
        "correctIndex": 1,
        "explanation": "Control under Article 235 is comprehensive and exclusive to the High Court, encompassing postings, promotions, transfers, and disciplinary inquiries."
      },
      {
        "id": "d9-cs10-q3",
        "testedDimension": "Article Threshold",
        "articleRef": "Articles 233, 235 & 311",
        "question": "Under the constitutional framework, who passes the formal order of dismissal or removal of a District Judge, and on whose recommendation?",
        "options": [
          "The Chief Justice of India passes the order on the recommendation of the Governor",
          "The Governor passes the formal order of dismissal, but is constitutionally bound to act strictly in accordance with the recommendation of the High Court",
          "The State Cabinet passes the order directly without consulting the High Court",
          "The Bar Council of India passes the order"
        ],
        "correctIndex": 1,
        "explanation": "The Governor is the formal appointing authority under Art. 311, but is bound by the High Court's disciplinary recommendation under Art. 235."
      },
      {
        "id": "d9-cs10-q4",
        "testedDimension": "Judicial Remedy",
        "articleRef": "Article 235",
        "question": "If a State Government initiates a departmental inquiry against a Judicial Magistrate through its vigilance department without High Court sanction, what is the legal fate of that inquiry?",
        "options": [
          "It is completely valid under the Governor's pleasure doctrine",
          "It is wholly unconstitutional, ultra vires Article 235, and void ab initio as an encroachment on High Court exclusive superintendence",
          "It is valid if confirmed by a cabinet subcommittee",
          "It is valid if the Magistrate was appointed before 1976"
        ],
        "correctIndex": 1,
        "explanation": "Under Article 235 and Nripendra Nath Bagchi, the executive has zero authority to conduct disciplinary inquiries against judicial officers; any such inquiry is void ab initio."
      }
    ]
  }
];
