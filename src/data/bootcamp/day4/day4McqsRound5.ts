import type { BootcampMCQ } from '../bootcampTypes';

export const DAY4_MCQS_ROUND_5: BootcampMCQ[] = [
  {
    "id": "d4-r5-q1",
    "round": "Applied Courtroom",
    "question": "Scenario: A cybercrime investigator in Kolkata arrests an accused on a non-bailable warrant issued by a Mumbai Court. The accused is detained in a police lockup in Kolkata for 38 hours before being put on a train to Mumbai, without being produced before any local Magistrate in Kolkata. How does this impact the detention?",
    "options": [
      "The detention is completely lawful because the police officer held a valid warrant issued by a competent court in Mumbai.",
      "The detention becomes unconstitutional after the lapse of 24 hours (excluding journey time) for failure to obtain transit remand from the nearest Magistrate in Kolkata, rendering the custody unlawful under Article 22(2).",
      "The 24-hour limit applies only after the accused physically enters the territorial jurisdiction of the court that issued the warrant.",
      "The officer can regularize the custody by obtaining a post-facto transit remand via email."
    ],
    "correctIndex": 1,
    "explanation": "Under Article 22(2) and Section 58 CrPC / Section 79 BNSS, every person arrested must be produced before the nearest Magistrate within 24 hours of arrest (excluding necessary journey time). The Kolkata police cannot hold the accused beyond 24 hours without obtaining a transit remand order from the nearest Magistrate in Kolkata (Manoj v. State of M.P.).",
    "articleRef": "Article 22(2)",
    "difficulty": "Intermediate"
  },
  {
    "id": "d4-r5-q2",
    "round": "Applied Courtroom",
    "question": "Scenario: Investigating officers under the UAPA arrest an editor of a news portal. The grounds of arrest are read out orally to the accused in English, but no physical copy of the written grounds is handed over at the time of arrest or before the remand hearing. The Special Judge grants 7 days police remand. What is the legal validity of the remand order in light of Prabir Purkayastha (2024)?",
    "options": [
      "The remand order is valid because UAPA is a special anti-terror statute where national security overrides procedural formalities.",
      "The remand order is completely void and vitiated because Article 22(1) requires grounds of arrest to be communicated in writing; failure to do so invalidates the arrest and the subsequent remand.",
      "The remand order is valid because oral communication is legally sufficient compliance with Article 22(1).",
      "The remand order is valid provided the grounds are supplied along with the final charge sheet within 180 days."
    ],
    "correctIndex": 1,
    "explanation": "In Prabir Purkayastha v. State (NCT of Delhi) (May 2024), extending Pankaj Bansal (2023), the Supreme Court ruled that written grounds of arrest must be served on the accused without exception, even in UAPA cases. Failure to provide written grounds of arrest invalidates the arrest and renders any subsequent remand order void ab initio.",
    "articleRef": "Article 22(1)",
    "difficulty": "Case Law / Advanced"
  },
  {
    "id": "d4-r5-q3",
    "round": "Applied Courtroom",
    "question": "Scenario: An accused arrested under the NDPS Act is granted regular bail by the High Court subject to the condition that he must install an app and share his live Google Maps location 24/7 with the Investigating Officer. The accused challenges this condition before the Supreme Court. How will the Court rule under Frank Vitus (2024)?",
    "options": [
      "The condition is upheld because foreign or narcotics accused represent a flight risk.",
      "The condition will be struck down as unconstitutional because 24/7 real-time digital surveillance violates the fundamental right to privacy under Article 21.",
      "The condition will be upheld provided the state pays for the accused's smartphone and data charges.",
      "The condition will be modified to 12 hours of live location sharing per day."
    ],
    "correctIndex": 1,
    "explanation": "In Frank Vitus v. Narcotics Control Bureau (July 2024), the Supreme Court held that imposing a bail condition requiring the accused to share their live Google Maps location with the police officer 24/7 is an impermissible violation of the fundamental right to privacy under Article 21 and is unconstitutional.",
    "articleRef": "Article 21 & 22",
    "difficulty": "Foundational"
  },
  {
    "id": "d4-r5-q4",
    "round": "Applied Courtroom",
    "question": "Scenario: Police register an FIR against A for cheating under Section 318(2) BNS (punishable up to 3 years). Without issuing any notice to appear or recording reasons why arrest is necessary to prevent tampering, the Sub-Inspector immediately arrests A and produces him before the Magistrate seeking judicial remand. What should the Magistrate do under Arnesh Kumar and Section 35 BNSS?",
    "options": [
      "The Magistrate must mechanically remand A to judicial custody because an FIR has been registered.",
      "The Magistrate must refuse remand, release A forthwith, and initiate departmental action or contempt against the arresting officer for violating Section 35 BNSS and the Arnesh Kumar guidelines.",
      "The Magistrate must convert the offense to a non-bailable offense punishable with life imprisonment.",
      "The Magistrate must keep A in lockup until the investigating officer submits the case diary."
    ],
    "correctIndex": 1,
    "explanation": "Under Section 35 BNSS (former Section 41A CrPC) and Arnesh Kumar v. State of Bihar (2014) reaffirmed in Satender Kumar Antil (2022), for offenses punishable up to 7 years, arrest without notice is unlawful unless specific statutory conditions necessitating arrest are documented in writing. A Magistrate who authorizes detention mechanically without satisfying themselves of these conditions is liable to disciplinary proceedings.",
    "articleRef": "Article 21 & 22",
    "difficulty": "Intermediate"
  },
  {
    "id": "d4-r5-q5",
    "round": "Applied Courtroom",
    "question": "Scenario: An accused is arrested on October 1 and remanded to judicial custody. On October 25 (the 25th day of custody), the Investigating Officer discovers new electronic evidence and files an application seeking 4 days of police custody. The defense counsel argues that under Anupam Kulkarni, police custody cannot be granted after the first 15 days. How should the Magistrate decide under Section 187 BNSS?",
    "options": [
      "The Magistrate must reject the application because police custody can only be granted within the first 15 days under Indian criminal law.",
      "The Magistrate may grant police custody up to 4 days, because Section 187 BNSS permits police custody to be taken in whole or in parts during the initial 40 or 60 days, up to a total aggregate of 15 days.",
      "The Magistrate can only grant police custody if the accused gives written consent.",
      "The Magistrate must refer the matter to the High Court under Article 226."
    ],
    "correctIndex": 1,
    "explanation": "Section 187(2) and (3) of the Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 departures from the old Anupam Kulkarni rule: police custody can now be sanctioned in parts across the first 40 or 60 days, provided the cumulative period of police custody does not exceed 15 days.",
    "articleRef": "Article 22(2)",
    "difficulty": "Case Law / Advanced"
  },
  {
    "id": "d4-r5-q6",
    "round": "Applied Courtroom",
    "question": "Scenario: X is a first-time undertrial prisoner charged with an offense punishable with a maximum sentence of 3 years imprisonment. X has spent 13 months in judicial custody. X has no prior convictions and no other pending cases. X applies for bail under Section 479 BNSS. What is the legal position?",
    "options": [
      "X must remain in custody until the trial concludes because 3 years is not a long period.",
      "X is entitled to mandatory release on bail under the first proviso to Section 479(1) BNSS, having completed more than one-third (12 months) of the maximum period of imprisonment as a first-time offender.",
      "X can only be released if he deposits cash security equal to the value of the property stolen.",
      "Section 479 BNSS applies only after 50% of the sentence (18 months) is completed, even for first-time offenders."
    ],
    "correctIndex": 1,
    "explanation": "Under the first proviso to Section 479(1) BNSS (2023), a first-time offender (never previously convicted) who has undergone detention for a period extending up to one-third of the maximum period of imprisonment specified for that offense shall be released by the Court on bail.",
    "articleRef": "Article 21 & 22",
    "difficulty": "Intermediate"
  },
  {
    "id": "d4-r5-q7",
    "round": "Applied Courtroom",
    "question": "Scenario: In 2023, the maximum punishment for rash and negligent driving under Section 304A IPC was 2 years. In 2024, Parliament replaced IPC with BNS, raising the maximum penalty for certain fatal rash driving categories under Section 106(2) BNS to 10 years. D committed an accident in November 2023. At the trial in 2026, the Public Prosecutor demands a 7-year prison term under Section 106(2) BNS. How should the Court rule?",
    "options": [
      "The Court can award 7 years because trial and conviction took place after BNS came into force.",
      "The Court cannot award more than 2 years imprisonment because Article 20(1) bars the retrospective enhancement of penalties beyond what was prescribed at the time of the commission of the act.",
      "The Court can award 7 years if the victim's legal heirs file an affidavit demanding it.",
      "The Court must refer the case to the Law Commission of India."
    ],
    "correctIndex": 1,
    "explanation": "Article 20(1) guarantees that no person shall be subjected to a penalty greater than that which might have been inflicted under the law in force at the time of the commission of the offense (Kedar Nath v. State of West Bengal). The maximum penalty applicable is the 2-year term under the 2023 law.",
    "articleRef": "Article 20(1)",
    "difficulty": "Foundational"
  },
  {
    "id": "d4-r5-q8",
    "round": "Applied Courtroom",
    "question": "Scenario: A 17-year-old was convicted of theft in 1963 when probation laws did not apply to his district. Before his appeal was decided in 1964, the Probation of Offenders Act was extended to that district. The appellate court denied probation stating that on the date of the offense, the Act was not applicable. What did the Supreme Court hold in Rattan Lal v. State of Punjab regarding this issue?",
    "options": [
      "The appellate court was correct because Article 20(1) prevents any retroactive application of criminal laws.",
      "The Supreme Court reversed the decision, holding that Article 20(1) only prohibits retroactive enhancement of punishment, but does not bar retroactive beneficial legislation providing for probation or reduced penalty.",
      "The Supreme Court held that probation is a matter of administrative mercy, not judicial discretion.",
      "The Supreme Court held that the Probation of Offenders Act violated Article 14."
    ],
    "correctIndex": 1,
    "explanation": "In Rattan Lal v. State of Punjab (1965), the Supreme Court established the rule of beneficial retroactivity: an accused is entitled to the benefit of an ex-post facto statute that mitigates the punishment or provides an alternative remedial regime such as probation.",
    "articleRef": "Article 20(1)",
    "difficulty": "Case Law / Advanced"
  },
  {
    "id": "d4-r5-q9",
    "round": "Applied Courtroom",
    "question": "Scenario: Parliament passes an amendment to the Income Tax Act in 2025, imposing a retrospective civil penalty of 200% on undisclosed foreign assets held between 2020 and 2024. A taxpayer challenges this penalty as violating Article 20(1). Will the challenge succeed?",
    "options": [
      "Yes, because any retrospective financial burden is a criminal penalty under Article 20(1).",
      "No, because Article 20(1) protects strictly against retrospective penal offenses and criminal punishment, and does not apply to civil penalties or tax liabilities (Hathising Mfg. Co. v. Union of India).",
      "Yes, because the right to property is a fundamental right under Part III.",
      "No, but only if the taxpayer is a public limited company."
    ],
    "correctIndex": 1,
    "explanation": "Article 20(1) is restricted to criminal proceedings for offenses. Civil liabilities, tax assessments, and administrative penalties imposed for breach of revenue laws are not 'convictions for offenses' and can be enacted retrospectively without violating Article 20(1).",
    "articleRef": "Article 20(1)",
    "difficulty": "Intermediate"
  },
  {
    "id": "d4-r5-q10",
    "round": "Applied Courtroom",
    "question": "Scenario: Customs authorities seize smuggled gold bars from passenger M at the airport and order confiscation of the gold and a fine of Rs. 10 lakhs under the Customs Act. Six months later, the Chief Judicial Magistrate takes cognizance of a criminal complaint filed by Customs under Section 135 Customs Act for the exact same act. M moves a plea of double jeopardy under Article 20(2). What is the outcome under Maqbool Hussain?",
    "options": [
      "The plea of double jeopardy is accepted and the criminal complaint is quashed.",
      "The plea of double jeopardy is rejected because customs confiscation proceedings are administrative proceedings in rem, not a prosecution before a court of law or judicial tribunal.",
      "The plea is accepted because the fine of 10 lakhs constituted a criminal punishment.",
      "The trial court must reduce its sentence by the value of the gold confiscated."
    ],
    "correctIndex": 1,
    "explanation": "In Maqbool Hussain v. State of Bombay (1953), the Supreme Court held that proceedings before Sea Customs authorities are administrative and not a trial before a court of law. Therefore, confiscation by customs does not bar subsequent prosecution in a criminal court under Article 20(2).",
    "articleRef": "Article 20(2)",
    "difficulty": "Foundational"
  },
  {
    "id": "d4-r5-q11",
    "round": "Applied Courtroom",
    "question": "Scenario: A government engineer is accused of taking a bribe. A formal departmental inquiry is held by an Inquiry Commissioner, resulting in his dismissal from service. Subsequently, the CBI registers an FIR and charges him under the Prevention of Corruption Act. The engineer claims protection under Article 20(2). How should the court rule under S.A. Venkataraman?",
    "options": [
      "The trial is barred under Article 20(2) because dismissal is the ultimate punishment.",
      "The trial is NOT barred because a departmental inquiry is neither a prosecution nor a punishment before a court of law or judicial tribunal.",
      "The trial is barred if the departmental inquiry lasted more than one year.",
      "The trial can proceed only if the President sanctions a fresh prosecution under Article 311."
    ],
    "correctIndex": 1,
    "explanation": "In S.A. Venkataraman v. Union of India (1954), the Supreme Court held that departmental disciplinary proceedings are not a 'prosecution' before a judicial tribunal, and dismissal from service is not a 'punishment' within the meaning of Article 20(2).",
    "articleRef": "Article 20(2)",
    "difficulty": "Foundational"
  },
  {
    "id": "d4-r5-q12",
    "round": "Applied Courtroom",
    "question": "Scenario: In an extortion investigation, the police have an intercepted phone recording. The IO applies to the Judicial Magistrate for an order directing accused V to provide a voice sample in a forensic laboratory. V objects, asserting his fundamental right to silence under Article 20(3). What is the correct legal ruling under Ritesh Sinha (2019)?",
    "options": [
      "The Magistrate must reject the IO's plea because Article 20(3) bars compelling any sample from the accused's body.",
      "The Magistrate has the judicial power to direct the accused to give a voice sample, and compelling a voice sample does not violate Article 20(3) as it is physical identification data, not a testimonial statement.",
      "The Magistrate can order a voice sample only if the accused is charged under UAPA.",
      "The accused cannot be compelled to give a voice sample unless two independent witnesses sign the memo."
    ],
    "correctIndex": 1,
    "explanation": "In Ritesh Sinha v. State of U.P. (2019), a 3-Judge Bench held that a Judicial Magistrate has the power to direct an accused to furnish a voice sample, and such direction does not infringe Article 20(3) because voice characteristics are physical identification markers, not testimonial communications.",
    "articleRef": "Article 20(3)",
    "difficulty": "Intermediate"
  },
  {
    "id": "d4-r5-q13",
    "round": "Applied Courtroom",
    "question": "Scenario: An accused arrested for sexual assault refuses to allow a medical officer to collect blood and semen samples for DNA profiling under Section 51 of the BNSS, claiming his right against self-incrimination under Article 20(3) is infringed. Is the accused's objection valid?",
    "options": [
      "Yes, because drawing blood without consent is an assault and violates Article 20(3).",
      "No, because drawing blood or biological samples for DNA profiling provides physical evidence rather than personal testimonial knowledge, which is outside the scope of Article 20(3) (Kathi Kalu Oghad; Selvi).",
      "Yes, unless the victim files an application in the Supreme Court.",
      "No, but the sample can only be used if the accused admits guilt in court."
    ],
    "correctIndex": 1,
    "explanation": "Under the 11-Judge Bench ratio in Kathi Kalu Oghad and statutory provisions under Section 53/53A CrPC (now Sections 51/52 BNSS), taking biological samples, fingerprints, or bodily measurements does not compel the accused to be a 'witness' within the meaning of Article 20(3).",
    "articleRef": "Article 20(3)",
    "difficulty": "Intermediate"
  },
  {
    "id": "d4-r5-q14",
    "round": "Applied Courtroom",
    "question": "Scenario: In a high-profile murder mystery with no eyewitnesses, the trial court passes an order directing the accused to undergo an involuntary Narco-Analysis (truth serum) test at a government hospital. The accused challenges this order in the High Court. What will be the High Court's verdict under Selvi (2010)?",
    "options": [
      "The order will be upheld because finding the truth in murder cases is a paramount public interest.",
      "The order will be quashed because involuntary administration of narco-analysis violates the right against self-incrimination under Article 20(3) and the right to mental privacy under Article 21.",
      "The order will be upheld provided a magistrate is present in the operating theater.",
      "The order will be modified to an involuntary polygraph test instead."
    ],
    "correctIndex": 1,
    "explanation": "In Selvi v. State of Karnataka (2010), the Supreme Court ruled unanimously that involuntary administration of Narco-Analysis, Polygraph, and BEAP tests violates Article 20(3) (testimonial compulsion) as well as the right to personal liberty and mental privacy under Article 21.",
    "articleRef": "Article 20(3)",
    "difficulty": "Foundational"
  },
  {
    "id": "d4-r5-q15",
    "round": "Applied Courtroom",
    "question": "Scenario: An accused voluntarily undergoes a polygraph examination after being duly advised of his rights and consulting his lawyer. During the test, he voluntarily reveals the exact coordinates where the stolen jewels are buried. Based on this information, the police dig up and recover the jewels. Is this evidence admissible?",
    "options": [
      "Neither the statement nor the recovered jewels are admissible under any circumstances.",
      "The statement itself is inadmissible as substantive evidence of guilt, but the physical discovery of the jewels at the spot pointed out is admissible under Section 27 Evidence Act (Section 23 BSA) as clarified in Selvi.",
      "Both the entire polygraph graph recording and the jewels are primary evidence of murder.",
      "The jewels are admissible only if the jeweler identifies them in a test identification parade."
    ],
    "correctIndex": 1,
    "explanation": "In Selvi (2010), the Supreme Court held that while the test results cannot be admitted as confession/testimonial evidence, any physical fact or material object discovered as a consequence of voluntary test information is admissible under Section 27 Evidence Act (Section 23 BSA).",
    "articleRef": "Article 20(3)",
    "difficulty": "Case Law / Advanced"
  },
  {
    "id": "d4-r5-q16",
    "round": "Applied Courtroom",
    "question": "Scenario: A corporate director is summoned by the Enforcement Directorate (ED) under Section 50 of the PMLA to give evidence and produce company accounts. He refuses to answer questions or provide documents, asserting the right to silence under Article 20(3). Can he claim Article 20(3) at this stage?",
    "options": [
      "Yes, Article 20(3) applies to any questioning by any state authority anywhere in India.",
      "No, because at the stage of summons and inquiry under Section 50 PMLA, the person is not a person 'accused of an offense' in a formal criminal proceeding (Vijay Madanlal Choudhary v. Union of India).",
      "Yes, because the ED is equivalent to a police station.",
      "No, but only if the director has already been granted anticipatory bail."
    ],
    "correctIndex": 1,
    "explanation": "In Vijay Madanlal Choudhary (2022) and Poolpandi (1992), the Supreme Court clarified that summons proceedings under Section 50 PMLA or Section 108 Customs Act are an inquiry, not a criminal prosecution; a person summoned is not an 'accused person' and cannot invoke Article 20(3) to refuse to attend or answer.",
    "articleRef": "Article 20(3)",
    "difficulty": "Case Law / Advanced"
  },
  {
    "id": "d4-r5-q17",
    "round": "Applied Courtroom",
    "question": "Scenario: A former Chief Minister is summoned to a police station as a witness under Section 161 CrPC (Section 180 BNSS) in a corruption inquiry. The police threaten to prosecute her for disobeying public servant's orders under the penal code if she refuses to answer questions that would incriminate her in related transactions. What protection did Nandini Satpathy v. P.L. Dani grant her?",
    "options": [
      "She has no protection because Section 161 compels everyone to speak the truth.",
      "She has the constitutional right to remain silent under Article 20(3) and Section 161(2) CrPC against any question whose answer has a reasonable tendency to expose her to a criminal charge.",
      "She can only remain silent if she deposits a bond of Rs. 1 lakh with the Magistrate.",
      "Article 20(3) protects only current ministers, not former ministers."
    ],
    "correctIndex": 1,
    "explanation": "In Nandini Satpathy v. P.L. Dani (1978), the Supreme Court held that the right against self-incrimination extends to witnesses and suspects during police investigation under Section 161 CrPC (Section 180 BNSS). A person cannot be compelled to answer questions that have a tendency to incriminate them.",
    "articleRef": "Article 20(3)",
    "difficulty": "Intermediate"
  },
  {
    "id": "d4-r5-q18",
    "round": "Applied Courtroom",
    "question": "Scenario: The District Magistrate passes a preventive detention order against K under the Telangana Prevention of Dangerous Activities Act on the ground that K was involved in three instances of cheating and financial fraud against private individuals. K challenges the detention under Article 226. How will the High Court decide under Banka Sneha Sheela (2021)?",
    "options": [
      "The detention order will be upheld because cheating harms the public economy.",
      "The detention order will be quashed because cheating private individuals is a problem of 'law and order' to be handled by ordinary penal law, not a disruption of 'public order' affecting the community at large.",
      "The detention order will be converted into 3 years of rigorous imprisonment.",
      "The detention order is valid if the victims file a representation supporting the DM."
    ],
    "correctIndex": 1,
    "explanation": "In Banka Sneha Sheela v. State of Telangana (2021), the Supreme Court quashed preventive detention orders based on cheating offenses, emphasizing that ordinary criminal acts affect only 'law and order' and cannot justify the exceptional weapon of preventive detention which requires an impact on 'public order'.",
    "articleRef": "Article 22(4)",
    "difficulty": "Intermediate"
  },
  {
    "id": "d4-r5-q19",
    "round": "Applied Courtroom",
    "question": "Scenario: A detainee under the Conservation of Foreign Exchange and Prevention of Smuggling Activities Act (COFEPOSA) submits a detailed representation to the Central Government on February 1. The representation reaches the ministry on February 5, where it lies on a clerk's table without being placed before the competent deciding authority until June 20. No explanation is offered for the delay. What is the constitutional effect under Article 22(5)?",
    "options": [
      "The delay is a mere administrative irregularity and does not affect the detention order.",
      "The unexplained delay of over 4 months constitutes an incurable violation of Article 22(5), rendering the continued detention illegal and entitling the detainee to immediate release on habeas corpus.",
      "The detention period is automatically extended by 4 months to make up for lost time.",
      "The detainee is entitled only to a refund of their legal fees from the department."
    ],
    "correctIndex": 1,
    "explanation": "In Aslam Ahmed (1989) and Pramod Singla (2023), the Supreme Court reiterated that the right to make a representation under Article 22(5) includes the corresponding duty of the government to consider and dispose of it with reasonable dispatch. Unexplained delay vitiates the detention order and compels release.",
    "articleRef": "Article 22(5)",
    "difficulty": "Intermediate"
  },
  {
    "id": "d4-r5-q20",
    "round": "Applied Courtroom",
    "question": "Scenario: A truck driver who speaks and understands only Odia is placed under preventive detention. The grounds of detention and accompanying documents running into 80 pages are served on him exclusively in bureaucratic English. A constable merely reads the English document aloud. What did Harikisan v. State of Maharashtra hold regarding such communication?",
    "options": [
      "Reading aloud in English is sufficient compliance with Article 22(5).",
      "Supplying grounds in a language the detainee does not comprehend, without an effective translation, deprives the detainee of the constitutional right to make an effective representation, rendering the detention unconstitutional.",
      "The driver has a duty to learn English while in detention.",
      "The detention is valid because driving a truck requires basic knowledge of English road signs."
    ],
    "correctIndex": 1,
    "explanation": "Under Harikisan v. State of Maharashtra (1962), communication of grounds under Article 22(5) means bringing the grounds to the actual understanding of the detainee. Providing documents in a language the detainee does not understand without an accurate translation vitiates the detention.",
    "articleRef": "Article 22(5)",
    "difficulty": "Foundational"
  },
  {
    "id": "d4-r5-q21",
    "round": "Applied Courtroom",
    "question": "Scenario: A preventive detention order is issued against B in 2024 citing an isolated communal altercation that occurred in 2018, with no other incidents or criminal activity recorded in the intervening 6 years. B challenges the detention. What will the Court hold?",
    "options": [
      "The detention is valid because communal incidents never become stale.",
      "The detention is illegal because the ground is stale and has no proximate temporal nexus with the apprehension of future prejudicial activity.",
      "The detention is valid provided the Advisory Board approves it by a majority.",
      "The DM has uncontrolled subjective satisfaction that can never be examined by any court."
    ],
    "correctIndex": 1,
    "explanation": "In Lakshman Khatik v. State of West Bengal (1974) and subsequent rulings, the Supreme Court established that there must be a proximate live link between the past conduct and the detention order. Stale grounds lacking proximity snap the causal nexus and vitiate subjective satisfaction.",
    "articleRef": "Article 22(4)",
    "difficulty": "Intermediate"
  },
  {
    "id": "d4-r5-q22",
    "round": "Applied Courtroom",
    "question": "Scenario: R is currently lodged in Tihar Jail as an undertrial in a pending robbery case, where his bail application has already been rejected twice. The District Magistrate passes a preventive detention order against R without even mentioning in the grounds of detention that R is already in jail or that there is any imminent prospect of him being released on bail. How does this affect the order under Rekha v. State of T.N.?",
    "options": [
      "The detention order is perfectly valid because preventive detention is independent of judicial custody.",
      "The detention order is invalid because when a person is already in custody, the detaining authority must show awareness of that fact and have cogent material to believe there is a real likelihood of release on bail and subsequent prejudicial conduct.",
      "The detention order automatically transfers R to a military prison.",
      "The detention order replaces the ongoing robbery trial."
    ],
    "correctIndex": 1,
    "explanation": "In Rameshwar Shaw (1964) and Rekha v. State of T.N. (2011), the Supreme Court held that passing a preventive detention order against a person already in custody without showing awareness of custody and without cogent material indicating imminent likelihood of release on bail demonstrates non-application of mind, invalidating the order.",
    "articleRef": "Article 22(4)",
    "difficulty": "Case Law / Advanced"
  },
  {
    "id": "d4-r5-q23",
    "round": "Applied Courtroom",
    "question": "Scenario: An Advisory Board convenes to review the preventive detention of a detainee under the National Security Act. At the hearing, the State is represented by a Senior Public Prosecutor and two police legal advisors. The detainee requests permission to be assisted by his chosen advocate, but the Board rejects the request citing Section 11(4) of the NSA. How did A.K. Roy v. Union of India (1982) resolve this equality dilemma?",
    "options": [
      "The Supreme Court held that the detainee can never have a lawyer even if the State has fifty lawyers.",
      "The Supreme Court held that if the detaining authority is permitted legal representation before the Advisory Board, parity and Article 14 mandate that the detainee must also be permitted representation by a legal practitioner.",
      "The Supreme Court held that the Advisory Board must be disbanded.",
      "The Supreme Court held that Section 11(4) of NSA was unconstitutional in its entirety."
    ],
    "correctIndex": 1,
    "explanation": "In A.K. Roy v. Union of India (1982), the Constitution Bench held that while Article 22(3)(b) does not guarantee an absolute right to counsel before the Advisory Board, if the State engages a legal advisor or prosecutor, the principles of natural justice and Article 14 entitle the detainee to equal legal representation.",
    "articleRef": "Article 22(3) & 14",
    "difficulty": "Case Law / Advanced"
  },
  {
    "id": "d4-r5-q24",
    "round": "Applied Courtroom",
    "question": "Scenario: The Advisory Board reviews a detention case and submits a report stating that in its opinion, there is NO sufficient cause for the detention of the person. The Home Minister, relying on classified intelligence reports received the next morning, directs the detention to continue for another two months. What is the legal status of the Minister's direction under Article 22(4)?",
    "options": [
      "The Minister's direction is valid because executive authority overrides advisory committees in security matters.",
      "The Minister's direction is void and illegal; an adverse opinion of the Advisory Board is constitutionally binding on the government, which must immediately revoke the order and release the detainee.",
      "The Minister may detain the person provided he pays a daily stipend to the detainee's family.",
      "The Minister's direction is valid if ratified by the Governor within 14 days."
    ],
    "correctIndex": 1,
    "explanation": "Under Article 22(4) and the provisions of preventive detention statutes, the report of the Advisory Board stating that there is no sufficient cause is binding on the appropriate government. The government has no discretion to continue the detention and must release the person immediately.",
    "articleRef": "Article 22(4)",
    "difficulty": "Foundational"
  },
  {
    "id": "d4-r5-q25",
    "round": "Applied Courtroom",
    "question": "Scenario: Police arrest a political activist on Friday night at 11:30 PM. The police station keeps him in custody through Saturday, Sunday, and Monday morning, producing him before the regular court only at 2:00 PM on Monday (62 hours later). The IO argues that Saturday and Sunday were court holidays. What is the legal position?",
    "options": [
      "The IO is correct because court holidays stop the 24-hour clock under the General Clauses Act.",
      "The detention is illegal; court holidays do NOT suspend the 24-hour limit under Article 22(2). The police were constitutionally obligated to produce the arrestee before the Duty Magistrate at their residential office within 24 hours.",
      "The police can hold an accused for up to 72 hours if the arrest is made on a weekend.",
      "The 24-hour clock begins only when the court opens on Monday morning."
    ],
    "correctIndex": 1,
    "explanation": "Article 22(2) does not make any exception for Sundays, public holidays, or court vacations. In every district, Duty Magistrates are assigned to handle remand applications 24/7 at their residential offices or special holiday courts. Detention beyond 24 hours without magisterial order is illegal.",
    "articleRef": "Article 22(2)",
    "difficulty": "Intermediate"
  },
  {
    "id": "d4-r5-q26",
    "round": "Applied Courtroom",
    "question": "Scenario: An accused is arrested and produced before the Magistrate for remand. The accused is indigent and unrepresented. The Magistrate does not inform the accused of his right to free legal aid, appoints no legal aid counsel, and passes an order granting 7 days of police custody. What is the status of this remand order under M.H. Hoskot and Rajoo?",
    "options": [
      "The remand order is valid because legal aid is required only during the final trial, not during remand.",
      "The remand order violates the constitutional mandate of Article 21 and 22(1); the right to legal aid begins at the moment of arrest and production before the magistrate for remand.",
      "Legal aid is available only to women and juvenile accused.",
      "The Magistrate has discretion to deny legal aid if the crime is serious."
    ],
    "correctIndex": 1,
    "explanation": "In M.H. Hoskot (1978), Khatri (II) (1981), and Rajoo v. State of M.P. (2012), the Supreme Court established that the right to free legal aid under Articles 21 and 39A attaches at the time of first production for remand. A remand order passed without offering legal aid to an indigent accused is flawed.",
    "articleRef": "Article 22(1) & 21",
    "difficulty": "Intermediate"
  },
  {
    "id": "d4-r5-q27",
    "round": "Applied Courtroom",
    "question": "Scenario: T was tried for theft of a diamond ring by a Judicial Magistrate and acquitted on the merits after full trial. Two months later, the police file a fresh charge sheet before another Magistrate on the exact same incident and facts, this time labeling the charge as 'Criminal Breach of Trust' under the penal code. What plea should T raise?",
    "options": [
      "Plea of Double Jeopardy under Article 20(2).",
      "Plea of Autrefois Acquit under Section 300 CrPC / Section 337 BNSS, which bars a second trial for the same offense or on the same facts for any other offense for which a different charge might have been made.",
      "Plea of Lack of Jurisdiction under Article 32.",
      "Plea of Ex-Post Facto Law under Article 20(1)."
    ],
    "correctIndex": 1,
    "explanation": "Article 20(2) textually applies only to 'prosecuted and punished' (autrefois convict). But statutory criminal procedure under Section 300 CrPC / Section 337 BNSS protects against retrial after acquittal (autrefois acquit) for the same offense or any other offense based on the same facts.",
    "articleRef": "Article 20(2) & BNSS 337",
    "difficulty": "Case Law / Advanced"
  },
  {
    "id": "d4-r5-q28",
    "round": "Applied Courtroom",
    "question": "Scenario: D drives rashly and injures a pedestrian. D is prosecuted, convicted, and sentenced to 6 months imprisonment for rash driving causing hurt. Two months after the conviction, the victim dies in hospital as a direct result of the injuries sustained in the crash. The police now file a charge sheet against D for culpable homicide not amounting to murder. D pleads Article 20(2). Will the plea succeed?",
    "options": [
      "Yes, because D has already been prosecuted and punished for the act of rash driving.",
      "No, because the offense of culpable homicide arose only after the death occurred, which was a new consequence not in existence at the time of the first conviction; hence retrial is not barred (Section 300(3) CrPC / Section 337(3) BNSS).",
      "Yes, because no person can face two trials arising from a single motor accident.",
      "No, but only if the victim's family repays the compensation received."
    ],
    "correctIndex": 1,
    "explanation": "Under settled criminal jurisprudence and Section 300(3) CrPC (Section 337(3) BNSS), where a person is convicted of an act causing consequences which together with the act constitute a different offense from that of which he was convicted, he may be tried afterwards for that offense if the consequences had not happened at the time of conviction.",
    "articleRef": "Article 20(2)",
    "difficulty": "Case Law / Advanced"
  },
  {
    "id": "d4-r5-q29",
    "round": "Applied Courtroom",
    "question": "Scenario: An advocate is prosecuted before a Magistrate for criminal intimidation under the penal code for shouting threats at a judge, and is acquitted. Subsequently, the High Court initiates suo motu criminal contempt proceedings against the advocate for scandalizing the court based on the exact same courtroom outburst. Can the advocate claim immunity under Article 20(2)?",
    "options": [
      "Yes, because the incident and words used were identical.",
      "No, because the contempt jurisdiction of the High Court under Article 215 is a special sui generis constitutional jurisdiction to protect the administration of justice, not a penal prosecution for a statutory criminal offense.",
      "Yes, because an acquittal by a magistrate binds the High Court.",
      "No, but only if the advocate consents to apologize in open court."
    ],
    "correctIndex": 1,
    "explanation": "Contempt proceedings under Articles 129 and 215 are special summary proceedings to uphold judicial dignity and are not a criminal trial for an 'offense' under the penal law. An acquittal in an ordinary criminal trial does not bar contempt proceedings under Article 20(2) (In Re: Vinay Chandra Mishra).",
    "articleRef": "Article 20(2) & 215",
    "difficulty": "Case Law / Advanced"
  },
  {
    "id": "d4-r5-q30",
    "round": "Applied Courtroom",
    "question": "Scenario: Parliament amends procedural law to transfer all ongoing trials of financial scams from the regular Court of Session to a newly constituted Special Financial Crimes Tribunal with summary trial procedures. An accused on trial contends that transferring his trial to the summary tribunal violates Article 20(1) because the tribunal did not exist when he committed the crime. How did Rao Shiv Bahadur Singh resolve this?",
    "options": [
      "The transfer violates Article 20(1) because forum is a fundamental right.",
      "The transfer does NOT violate Article 20(1) because Article 20(1) prohibits retrospective penal laws and enhanced punishments, but creates no vested right in any specific procedure or forum of trial.",
      "The trial can be transferred only if the accused is granted double bail.",
      "The Special Tribunal cannot sit in the same state."
    ],
    "correctIndex": 1,
    "explanation": "In Rao Shiv Bahadur Singh v. State of Vindhya Pradesh (1953) and Union of India v. Sukumar Pyne (1966), the Supreme Court held that procedural changes and alterations of forum apply retrospectively to pending cases and do not violate Article 20(1).",
    "articleRef": "Article 20(1)",
    "difficulty": "Intermediate"
  },
  {
    "id": "d4-r5-q31",
    "round": "Applied Courtroom",
    "question": "Scenario: During custodial interrogation, police officers threaten an accused that his wife will be arrested unless he signs three blank papers. The accused complies. Later, the police type out a detailed confession on the signed sheets and produce it as evidence in trial. What is the constitutional and statutory fate of this document?",
    "options": [
      "It is fully admissible as an extra-judicial confession under Section 21 of the Evidence Act.",
      "It is inadmissible and barred under Article 20(3) as compelled self-incrimination, and explicitly barred under Section 25 Evidence Act (Section 23 BSA) as a confession made to a police officer.",
      "It is admissible if countersigned by the Superintendent of Police.",
      "It can be used to convict the accused if the handwriting is proven by an expert."
    ],
    "correctIndex": 1,
    "explanation": "Any confession made under threat or compulsion violates Article 20(3). Moreover, Section 25 Evidence Act (Section 23 BSA) renders any confession made to a police officer completely inadmissible in evidence.",
    "articleRef": "Article 20(3)",
    "difficulty": "Foundational"
  },
  {
    "id": "d4-r5-q32",
    "round": "Applied Courtroom",
    "question": "Scenario: MLA Bhim Singh was arrested by the police on the eve of an important Assembly session to prevent him from voting, and was kept in undisclosed custody for over 48 hours without production before a Magistrate. What historic remedy did the Supreme Court award in Bhim Singh v. State of J&K (1985)?",
    "options": [
      "A mere verbal warning to the arresting officer.",
      "Monetary compensation of Rs. 50,000 for gross violation of constitutional rights under Articles 21 and 22(2).",
      "Dissolution of the Jammu and Kashmir Legislative Assembly.",
      "Awarding the MLA permanent immunity from all future arrests."
    ],
    "correctIndex": 1,
    "explanation": "In Bhim Singh, MLA v. State of J&K (1985), the Supreme Court awarded monetary compensation under public law for the wrongful deprivation of personal liberty and breach of Article 22(2), establishing the doctrine of constitutional tort.",
    "articleRef": "Article 22(2) & 21",
    "difficulty": "Foundational"
  },
  {
    "id": "d4-r5-q33",
    "round": "Applied Courtroom",
    "question": "Scenario: An accused in custody is granted 'default bail' under Section 187(3) BNSS (former Section 167(2) CrPC) because the police failed to file the charge sheet within the prescribed 90 days. Two weeks later, the police file the charge sheet and move an application to cancel his bail and rearrest him solely on the ground that the charge sheet has now been filed. What is the judicial rule?",
    "options": [
      "Bail must be canceled automatically the moment the charge sheet is filed.",
      "Bail cannot be canceled merely because the charge sheet is filed; default bail is deemed to be regular bail under Chapter XXXV, and can only be canceled on grounds of misuse, witness tampering, or absconding (Bashir v. State of Haryana; Bikramjit Singh).",
      "The accused must surrender and apply for fresh anticipatory bail.",
      "The Magistrate can cancel bail if the public prosecutor files an objection."
    ],
    "correctIndex": 1,
    "explanation": "Once default bail is granted under Section 167(2) CrPC / Section 187(3) BNSS, it acquires the status of regular bail. It cannot be canceled merely because the investigating agency subsequently completes the investigation and files the charge sheet (Bashir; Bikramjit Singh).",
    "articleRef": "Article 21 & 22",
    "difficulty": "Case Law / Advanced"
  },
  {
    "id": "d4-r5-q34",
    "round": "Applied Courtroom",
    "question": "Scenario: A preventive detention order is based on four separate grounds. Before the High Court, the detainee proves that Ground No. 2 is completely non-existent and Ground No. 4 is vague. The detaining authority argues that under statutory severability provisions (such as Section 5A of COFEPOSA or Section 10 of NSA), the order remains valid on the remaining two valid grounds. What is the legal effect?",
    "options": [
      "The entire detention order is automatically void at common law regardless of statute.",
      "Under Section 5A COFEPOSA / Section 10 NSA, the detention order is deemed to have been made separately on each ground, and remains valid on the surviving valid grounds unless all grounds are invalidated.",
      "The detainee must be released for 30 days and re-arrested on a new order.",
      "The High Court must frame fresh grounds on behalf of the executive."
    ],
    "correctIndex": 1,
    "explanation": "Section 5A of COFEPOSA and Section 10 of NSA were specifically enacted to overcome the earlier common law rule of Shibban Lal Saksena. Under these statutory severability provisions, the invalidity or vagueness of some grounds does not invalidate the detention order if one or more valid grounds survive.",
    "articleRef": "Article 22(4) & (5)",
    "difficulty": "Case Law / Advanced"
  },
  {
    "id": "d4-r5-q35",
    "round": "Applied Courtroom",
    "question": "Scenario: Under Section 43D(2) of the UAPA, the period of remand in custody before default bail can be extended from 90 days up to 180 days by the Special Court upon a specific report of the Public Prosecutor. Does this statutory extension of custody violate Article 22(2)?",
    "options": [
      "Yes, because Article 22(2) fixes a rigid ceiling of 24 hours total custody.",
      "No, because Article 22(2) only mandates magisterial oversight within 24 hours of arrest; the subsequent duration and terms of remand custody are governed by valid statutory law enacted by Parliament.",
      "Yes, because all special statutes are subject to the 15-day limit of the BNSS.",
      "Yes, unless approved by a two-thirds majority in Parliament."
    ],
    "correctIndex": 1,
    "explanation": "Article 22(2) guarantees production before a magistrate within 24 hours. Once produced, further detention is authorized under magisterial authority according to law. The length of pre-charge sheet remand is determined by statutory criminal procedure (e.g. BNSS 187, UAPA 43D(2)), which does not violate Article 22(2).",
    "articleRef": "Article 22(2)",
    "difficulty": "Intermediate"
  },
  {
    "id": "d4-r5-q36",
    "round": "Applied Courtroom",
    "question": "Scenario: A judgment-debtor who has willfully failed to pay a civil money decree despite having means is arrested and committed to civil prison under Order XXI Rule 37 of the Code of Civil Procedure. He petitions the High Court alleging breach of Article 22(1) and (2). What will the High Court hold under State of Punjab v. Ajaib Singh?",
    "options": [
      "The petition will be allowed because no citizen can ever be imprisoned for debt under the Constitution.",
      "The petition will be dismissed because the arrest and detention protections under Article 22(1) and (2) apply to criminal offenses and penal processes, not to civil execution arrests for non-satisfaction of decrees (Ajaib Singh; Jolly George Varghese).",
      "The petition will be allowed only if the judgment-debtor is an agriculturist.",
      "The High Court will order the decree-holder to pay the debt."
    ],
    "correctIndex": 1,
    "explanation": "In State of Punjab v. Ajaib Singh (1953) and Jolly George Varghese v. Bank of Cochin (1980), the Supreme Court affirmed that arrest under a civil process in execution of a decree is not an arrest on an accusation of a criminal offense within the meaning of Article 22(1) and (2).",
    "articleRef": "Article 22(1) & (2)",
    "difficulty": "Case Law / Advanced"
  },
  {
    "id": "d4-r5-q37",
    "round": "Applied Courtroom",
    "question": "Scenario: Income tax and police authorities conduct a search of a businessman's office and seize existing accounting ledgers and private diaries containing incriminating notes written by him in his own hand. The businessman argues that using these seized private diaries as evidence against him violates Article 20(3) because it forces him to be a witness against himself. Is his argument correct?",
    "options": [
      "Yes, because any personal document written by an accused is protected by Article 20(3).",
      "No, because search and seizure of pre-existing documents does not involve testimonial compulsion to create or state anything; the documents were already in existence and were not extracted under coercion to give evidence (M.P. Sharma v. Satish Chandra; Kathi Kalu Oghad).",
      "Yes, unless the search warrant was signed by the Governor.",
      "No, but only if the businessman admits the entries are accurate."
    ],
    "correctIndex": 1,
    "explanation": "In M.P. Sharma v. Satish Chandra (1954) and Kathi Kalu Oghad (1961), the Supreme Court clarified that search and seizure of pre-existing documents under lawful process does not violate Article 20(3). The accused was not compelled to produce them or testify; they are physical materials seized by the state.",
    "articleRef": "Article 20(3)",
    "difficulty": "Case Law / Advanced"
  },
  {
    "id": "d4-r5-q38",
    "round": "Applied Courtroom",
    "question": "Scenario: A suspect in an anti-terror investigation is kept awake for 72 consecutive hours with bright strobe lights shone directly in his eyes and loud white noise played continuously until he agrees to write and sign a confession. The prosecution argues that since no physical violence or fractures occurred, Article 20(3) is not breached. What is the constitutional position under Nandini Satpathy and Selvi?",
    "options": [
      "The prosecution is correct because torture requires physical fractures or open wounds.",
      "The confession is unconstitutional and barred under Article 20(3) and 21; 'compulsion' includes mental and psychological coercion, atmospheric pressure, and physical exhaustion designed to break psychological resistance.",
      "The confession is admissible provided a doctor certifies the suspect had normal blood pressure.",
      "The confession is admissible if recorded on digital video."
    ],
    "correctIndex": 1,
    "explanation": "In Nandini Satpathy (1978) and Selvi (2010), the Supreme Court emphasized that compulsion under Article 20(3) is not restricted to physical violence; subtle psychological torture, sleep deprivation, and atmospheric pressure that overpower the will constitute compulsion.",
    "articleRef": "Article 20(3) & 21",
    "difficulty": "Foundational"
  },
  {
    "id": "d4-r5-q39",
    "round": "Applied Courtroom",
    "question": "Scenario: A foreign tourist visiting India on a tourist visa is arrested by the police on allegations of credit card fraud. Can the foreign national invoke the protections of Article 20 and Article 22(1)-(2)?",
    "options": [
      "No, because fundamental rights in Part III belong exclusively to Indian citizens.",
      "Yes, because Articles 20, 21, and 22 apply to 'any person', including foreign nationals (unless they are enemy aliens or detained under preventive detention laws).",
      "Only if their home country's embassy pays a security deposit in the Supreme Court.",
      "Only Article 20 applies to foreigners, while Article 22 applies exclusively to citizens."
    ],
    "correctIndex": 1,
    "explanation": "Articles 20, 21, and 22 protect 'any person' (citizens and foreigners alike). A foreign tourist accused of an offense enjoys full protection under Article 20 and Article 22(1) and (2) (Hans Muller of Nurenburg v. Supt., Presidency Jail). Only enemy aliens are excluded under Article 22(3)(a).",
    "articleRef": "Article 20 & 22",
    "difficulty": "Foundational"
  },
  {
    "id": "d4-r5-q40",
    "round": "Applied Courtroom",
    "question": "Scenario: An undertrial prisoner who has completed 50% of the maximum term applies for bail under Section 479(1) of the BNSS. The Public Prosecutor objects, demonstrating from the order sheets that the trial was delayed primarily because the accused repeatedly changed lawyers, sought 18 frivolous adjournments, and absconded for 3 months. How should the Court rule under the second proviso to Section 479(1)?",
    "options": [
      "The Court must release the accused regardless of delay because 50% custody creates an absolute right.",
      "The Court may refuse bail or order continued detention, because the second proviso to Section 479(1) BNSS empowers the Court to deny release where the delay in proceedings was caused by the accused person.",
      "The Court must dismiss the entire prosecution and acquit the accused.",
      "The Court must impose a death sentence for seeking frivolous adjournments."
    ],
    "correctIndex": 1,
    "explanation": "Under the second proviso to Section 479(1) BNSS, the Court may, for reasons to be recorded in writing, order continued detention of the person for a longer period than one-half of the maximum sentence, where the delay in trial has been caused by the conduct of the accused person.",
    "articleRef": "Article 21 & 22",
    "difficulty": "Intermediate"
  }
];
