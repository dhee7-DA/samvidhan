import type { QuizQuestion } from '../types/constitution';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Which of the following Fundamental Rights CANNOT be suspended even during the proclamation of a National Emergency under Article 352?',
    options: [
      'Articles 19 and 20',
      'Articles 20 and 21',
      'Articles 21 and 22',
      'Articles 14 and 19'
    ],
    correctIndex: 1,
    explanation: 'By virtue of the 44th Constitutional Amendment Act, 1978, the President cannot suspend the right to move the court for the enforcement of Fundamental Rights guaranteed under Article 20 (Protection against conviction) and Article 21 (Right to life and personal liberty) under Article 359.',
    articleRef: 'Article 359',
    difficulty: 'Foundational',
    topic: 'Emergency Provisions'
  },
  {
    id: 'q2',
    question: 'Which prerogative writ can be sought by any interested citizen without having to prove direct personal locus standi?',
    options: [
      'Mandamus',
      'Certiorari',
      'Quo-Warranto',
      'Prohibition'
    ],
    correctIndex: 2,
    explanation: 'Quo-Warranto ("By what authority") tests whether an individual has usurped a substantive public office created by statute. Unlike other writs which require an aggrieved petitioner, Quo-Warranto can be invoked by any citizen as a relator.',
    articleRef: 'Articles 32 and 226',
    difficulty: 'Intermediate',
    topic: 'Fundamental Rights & Writs'
  },
  {
    id: 'q3',
    question: 'In which landmark case did the Supreme Court hold that the balance between Fundamental Rights (Part III) and Directive Principles (Part IV) is an essential feature of the Basic Structure?',
    options: [
      'Sajjan Singh v. State of Rajasthan (1965)',
      'Minerva Mills Ltd. v. Union of India (1980)',
      'Golak Nath v. State of Punjab (1967)',
      'Shankari Prasad v. Union of India (1951)'
    ],
    correctIndex: 1,
    explanation: 'In Minerva Mills (1980), CJI Y.V. Chandrachud observed that the Indian Constitution is founded on the bedrock of the balance between Part III and Part IV. To give absolute primacy to one over the other is to upset the harmonious equilibrium of the constitutional chariot.',
    articleRef: 'Article 368 and Part III/IV',
    difficulty: 'Judiciary/UPSC Level',
    topic: 'Basic Structure & Doctrines'
  },
  {
    id: 'q4',
    question: 'Under Article 3, when a Bill for the reorganization of state boundaries is referred by the President to the affected State Legislature for its views, what is the constitutional effect of the State Legislature\'s opinion?',
    options: [
      'It is legally binding on Parliament',
      'Parliament can only proceed if the State Legislature passes a unanimous resolution',
      'Parliament is not bound by the views of the State Legislature and may accept or reject them',
      'The Bill lapses if the State Legislature rejects it within 30 days'
    ],
    correctIndex: 2,
    explanation: 'Under Article 3, the President must refer the Bill to the affected State Legislature for its views within a specified period, but Parliament is NOT bound by the State Legislature’s opinion. India is an indestructible Union of destructible States.',
    articleRef: 'Article 3',
    difficulty: 'Intermediate',
    topic: 'Union & Territory'
  },
  {
    id: 'q5',
    question: 'Which constitutional mechanism permits Parliament to enact legislation on a subject listed exclusively in the State List (List II) during peace time?',
    options: [
      'When the President issues an executive ordinance under Article 123',
      'When the Rajya Sabha passes a resolution supported by 2/3 of members present and voting under Article 249',
      'When the Lok Sabha passes a simple majority resolution in public interest',
      'When the NITI Aayog recommends legislative action'
    ],
    correctIndex: 1,
    explanation: 'Under Article 249, if the Council of States (Rajya Sabha) declares by resolution supported by not less than two-thirds of members present and voting that it is necessary in the national interest, Parliament can enact laws with respect to that matter in the State List for up to one year at a time.',
    articleRef: 'Article 249',
    difficulty: 'Judiciary/UPSC Level',
    topic: 'Centre-State Relations'
  },
  {
    id: 'q6',
    question: 'The "Creamy Layer" principle for excluding socially advanced individuals among Other Backward Classes (OBCs) from reservation was formulated in which landmark judgment?',
    options: [
      'M. Nagaraj v. Union of India (2006)',
      'Indra Sawhney v. Union of India (1992)',
      'Jarnail Singh v. Lachhmi Narain Gupta (2018)',
      'Ashoka Kumar Thakur v. Union of India (2008)'
    ],
    correctIndex: 1,
    explanation: 'In the 9-Judge Bench Mandal verdict (Indra Sawhney v. Union of India, 1992), the Supreme Court upheld 27% reservation for backward classes but directed that the socially and economically advanced members among them ("creamy layer") must be weeded out.',
    articleRef: 'Article 16(4)',
    difficulty: 'Intermediate',
    topic: 'Fundamental Rights & Equality'
  },
  {
    id: 'q7',
    question: 'The Doctrine of Pith and Substance is primarily invoked in Indian Constitutional Law to resolve which legal dilemma?',
    options: [
      'Conflicts between Fundamental Rights and Directive Principles',
      'Apparent encroachment between the legislative lists of the Seventh Schedule',
      'Disputes between the President and the Council of Ministers',
      'Contempt of court proceedings against civil servants'
    ],
    correctIndex: 1,
    explanation: 'The Doctrine of Pith and Substance examines the true nature, character, and primary substance of an enactment. If the core subject matter legitimately falls within the enacting legislature\'s competence, incidental trespassing into an adjoining list under the Seventh Schedule does not invalidate the statute.',
    articleRef: 'Article 246',
    difficulty: 'Judiciary/UPSC Level',
    topic: 'Constitutional Doctrines'
  },
  {
    id: 'q8',
    question: 'What is the maximum period within which a proclamation of National Emergency (Article 352) must be approved by both Houses of Parliament?',
    options: [
      '14 days by Simple Majority',
      '1 month (30 days) by Special Majority',
      '2 months by Simple Majority',
      '6 months by Special Majority'
    ],
    correctIndex: 1,
    explanation: 'Following the 44th Amendment 1978, a proclamation of National Emergency must be approved by resolutions of both Houses of Parliament within one month (30 days) by a Special Majority (majority of total membership + 2/3 of members present and voting).',
    articleRef: 'Article 352(4)',
    difficulty: 'Foundational',
    topic: 'Emergency Provisions'
  },
  {
    id: 'q9',
    question: 'Under Article 10 of the Constitution, the continuance of the rights of citizenship of any person who is a citizen under Part II is subject to:',
    options: [
      'A Presidential Ordinance only',
      'The provisions of any law that may be made by Parliament',
      'A resolution of the State Legislative Assembly',
      'Approval by the Election Commission of India'
    ],
    correctIndex: 1,
    explanation: 'Article 10 guarantees continuance of citizenship for every person who is or is deemed to be a citizen under Part II, subject to the provisions of any law that may be made by Parliament (read with Article 11, which led to the Citizenship Act, 1955).',
    articleRef: 'Article 10',
    difficulty: 'Foundational',
    topic: 'Citizenship (Part II)'
  },
  {
    id: 'q10',
    question: 'Which Article empowers Parliament to indemnify any person in respect of acts done in connection with the maintenance or restoration of order in any area where martial law was in force?',
    options: [
      'Article 33',
      'Article 34',
      'Article 35',
      'Article 359'
    ],
    correctIndex: 1,
    explanation: 'Article 34 empowers Parliament by law to indemnify any person in the service of the Union or of a State or any other person in respect of any act done during the operation of martial law, and to validate sentences, punishments, or forfeitures ordered under martial law.',
    articleRef: 'Article 34',
    difficulty: 'Intermediate',
    topic: 'Fundamental Rights & Writs'
  },
  {
    id: 'q11',
    question: 'Which of the following statements regarding the Comptroller and Auditor-General of India (CAG) under Article 148 is INCORRECT?',
    options: [
      'The CAG is appointed by the President by warrant under his hand and seal',
      'The CAG can be removed in like manner and on the like grounds as a Judge of the Supreme Court',
      'After ceasing to hold office, the CAG is eligible for further office under the Government of India if approved by the Prime Minister',
      'The administrative expenses of the office of the CAG are charged upon the Consolidated Fund of India'
    ],
    correctIndex: 2,
    explanation: 'Article 148(4) imposes an absolute constitutional bar: the CAG shall NOT be eligible for further office either under the Government of India or under the Government of any State after ceasing to hold office.',
    articleRef: 'Article 148',
    difficulty: 'Judiciary/UPSC Level',
    topic: 'Union Executive & Constitutional Bodies'
  },
  {
    id: 'q12',
    question: 'Under Article 214, "There shall be a High Court for each State." However, Parliament may establish a common High Court for two or more States or a Union Territory under:',
    options: [
      'Article 214 Proviso',
      'Article 231',
      'Article 227',
      'Article 241(4)'
    ],
    correctIndex: 1,
    explanation: 'While Article 214 states there shall be a High Court for each State, Article 231 (inserted by the 7th Constitutional Amendment Act, 1956) empowers Parliament by law to establish a common High Court for two or more States or for two or more States and a Union Territory.',
    articleRef: 'Article 214',
    difficulty: 'Intermediate',
    topic: 'Judiciary & High Courts'
  },
  {
    id: 'q13',
    question: 'Under Article 239 of the Constitution, every Union Territory is administered by:',
    options: [
      'The Governor of the adjoining State ex-officio',
      'The President acting, to such extent as he thinks fit, through an administrator appointed by him',
      'The Union Home Secretary directly without an administrator',
      'The Chief Justice of the respective High Court'
    ],
    correctIndex: 1,
    explanation: 'Article 239(1) vests the administration of every Union Territory in the President acting, to such extent as he thinks fit, through an administrator to be appointed by him with such designation as he may specify (e.g., Lieutenant Governor or Administrator).',
    articleRef: 'Article 239',
    difficulty: 'Foundational',
    topic: 'Union Territories'
  },
  {
    id: 'q14',
    question: 'Which Article empowers Parliament by law to constitute a High Court for a Union Territory or declare any court in such territory to be a High Court?',
    options: [
      'Article 239A',
      'Article 240',
      'Article 241',
      'Article 242'
    ],
    correctIndex: 2,
    explanation: 'Article 241 empowers Parliament to constitute a High Court for a Union Territory (for example, the High Court of Delhi) or declare any court in any such territory to be a High Court for all or any of the purposes of the Constitution.',
    articleRef: 'Article 241',
    difficulty: 'Intermediate',
    topic: 'Union Territories'
  },
  {
    id: 'q15',
    question: 'Under Article 243B (Part IX), Panchayats at the intermediate level may NOT be constituted in a State having a population not exceeding:',
    options: [
      'Ten lakhs',
      'Twenty lakhs',
      'Twenty-five lakhs',
      'Fifty lakhs'
    ],
    correctIndex: 1,
    explanation: 'Article 243B(2) provides a population exception to the three-tier Panchayati Raj structure: Panchayats at the intermediate level may not be constituted in a State having a population not exceeding twenty lakhs.',
    articleRef: 'Article 243B',
    difficulty: 'Intermediate',
    topic: 'Local Governance (Part IX & IXA)'
  },
  {
    id: 'q16',
    question: 'Under Article 243D, not less than what fraction of the total number of seats to be filled by direct election in every Panchayat (and of offices of Chairpersons) must be reserved for women?',
    options: [
      'One-fourth',
      'One-third',
      'One-half',
      'Two-fifths'
    ],
    correctIndex: 1,
    explanation: 'Article 243D(3) & (4) mandate that not less than one-third (including the number of seats reserved for women belonging to SCs and STs) of total seats and Chairperson offices in every Panchayat shall be reserved for women.',
    articleRef: 'Article 243D',
    difficulty: 'Foundational',
    topic: 'Local Governance (Part IX & IXA)'
  },
  {
    id: 'q17',
    question: 'If a Panchayat is dissolved before the expiration of its five-year duration under Article 243E, an election to constitute a Panchayat shall be completed before the expiry of:',
    options: [
      '3 months from the date of its dissolution',
      '6 months from the date of its dissolution (unless the remainder of the period is less than 6 months)',
      '1 year from the date of its dissolution',
      '90 days from the Governor\'s notification'
    ],
    correctIndex: 1,
    explanation: 'Article 243E(3)(b) requires elections within 6 months of premature dissolution. However, under the proviso, where the remainder of the period for which the dissolved Panchayat would have continued is less than 6 months, it is not necessary to hold any election for the remainder.',
    articleRef: 'Article 243E',
    difficulty: 'Intermediate',
    topic: 'Local Governance (Part IX & IXA)'
  },
  {
    id: 'q18',
    question: 'Article 243O bars interference by courts in electoral matters of Panchayats, specifically declaring that:',
    options: [
      'Only the Supreme Court can hear Panchayat election petitions',
      'The validity of any law relating to delimitation of constituencies or allotment of seats shall not be called in question in any court, and election disputes lie only via an election petition',
      'High Courts can stay Panchayat elections at any stage under Article 226',
      'The State Election Commissioner has final non-justiciable judicial power'
    ],
    correctIndex: 1,
    explanation: 'Mirroring Article 329 for Parliament/State Legislatures, Article 243O(a) bars judicial challenge to delimitation laws and Article 243O(b) mandates that no Panchayat election shall be called in question except by an election petition presented to such authority as prescribed by State Legislature.',
    articleRef: 'Article 243O',
    difficulty: 'Judiciary/UPSC Level',
    topic: 'Local Governance (Part IX & IXA)'
  },
  {
    id: 'q19',
    question: 'Under Article 243Q (Part IXA), which of the following is NOT one of the three constitutionally prescribed types of Municipalities?',
    options: [
      'Nagar Panchayat (transitional area)',
      'Municipal Council (smaller urban area)',
      'Municipal Corporation (larger urban area)',
      'Cantonment Board (military urban area)'
    ],
    correctIndex: 3,
    explanation: 'Article 243Q(1) mandates Nagar Panchayat, Municipal Council, and Municipal Corporation. Cantonment Boards are governed by the Cantonments Act, 2006 under Entry 3 of the Union List, not Part IXA.',
    articleRef: 'Article 243Q',
    difficulty: 'Foundational',
    topic: 'Local Governance (Part IX & IXA)'
  },
  {
    id: 'q20',
    question: 'Under Article 243T, reservation of seats for Scheduled Castes and Scheduled Tribes in Municipalities is governed by:',
    options: [
      'Fixed 22.5% quota nationwide',
      'Proportion of SC/ST population in that Municipal area to the total population of that area, with at least 1/3rd reserved for SC/ST women',
      'Governor\'s discretionary order without population linkage',
      'Only Article 16(4) criteria'
    ],
    correctIndex: 1,
    explanation: 'Article 243T(1)-(2) links SC/ST seat reservation in Municipalities directly to their population proportion in that municipal area, with not less than one-third of those reserved seats reserved for women belonging to SCs/STs.',
    articleRef: 'Article 243T',
    difficulty: 'Intermediate',
    topic: 'Local Governance (Part IX & IXA)'
  },
  {
    id: 'q21',
    question: 'Which Article mandates the constitution of a District Planning Committee (DPC) in every State at the district level to consolidate plans prepared by Panchayats and Municipalities?',
    options: [
      'Article 243Y',
      'Article 243ZD',
      'Article 243ZE',
      'Article 243ZH'
    ],
    correctIndex: 1,
    explanation: 'Article 243ZD mandates a District Planning Committee (with at least four-fifths of members elected by and from the elected members of the Panchayat at district level and Municipalities in the district). Article 243ZE covers Metropolitan Planning Committees.',
    articleRef: 'Article 243ZD',
    difficulty: 'Judiciary/UPSC Level',
    topic: 'Local Governance (Part IX & IXA)'
  },
  {
    id: 'q22',
    question: 'Part IXB (The Co-operative Societies, Articles 243ZH–243ZT) was inserted by the 97th Amendment Act, 2011. In Union of India v. Rajendra N. Shah (2021), the Supreme Court held:',
    options: [
      'The entire 97th Amendment was struck down as violating Basic Structure',
      'Part IXB is unconstitutional insofar as it applies to State co-operative societies (for want of 50% State ratification under Art 368(2) Proviso), while surviving for Multi-State Co-operative Societies',
      'Part IXB requires only Simple Majority',
      'Co-operative Societies fall under List I entirely'
    ],
    correctIndex: 1,
    explanation: 'In Rajendra N. Shah (2021), the Supreme Court applied the doctrine of severability: because Co-operative Societies are in State List Entry 32, amending State powers required ratification by half the States under Art 368(2) Proviso. Thus Part IXB was struck down for State societies but upheld for Multi-State Co-operative Societies.',
    articleRef: 'Article 243ZH',
    difficulty: 'Judiciary/UPSC Level',
    topic: 'Local Governance (Part IX & IXA)'
  },
  {
    id: 'q23',
    question: 'Under Article 244 and the Fifth & Sixth Schedules, which four North-Eastern States are governed by the Sixth Schedule (Autonomous District Councils)?',
    options: [
      'Assam, Nagaland, Manipur, Mizoram',
      'Assam, Meghalaya, Tripura, Mizoram',
      'Arunachal Pradesh, Meghalaya, Tripura, Sikkim',
      'Assam, Manipur, Tripura, Arunachal Pradesh'
    ],
    correctIndex: 1,
    explanation: 'Article 244(2) applies the Sixth Schedule exclusively to the tribal areas in Assam, Meghalaya, Tripura, and Mizoram (AMTM). All other Scheduled Areas in other States fall under Article 244(1) and the Fifth Schedule.',
    articleRef: 'Article 244',
    difficulty: 'Foundational',
    topic: 'Scheduled & Tribal Areas'
  },
  {
    id: 'q24',
    question: 'Article 244A (inserted by the 22nd Constitutional Amendment Act, 1969) empowers Parliament by law to form an autonomous State comprising certain tribal areas in:',
    options: [
      'Nagaland',
      'Assam',
      'Manipur',
      'Jharkhand'
    ],
    correctIndex: 1,
    explanation: 'Article 244A provides for the formation of an autonomous State comprising certain tribal areas in Assam and creation of a local Legislature or Council of Ministers therefor.',
    articleRef: 'Article 244A',
    difficulty: 'Judiciary/UPSC Level',
    topic: 'Scheduled & Tribal Areas'
  },
  {
    id: 'q25',
    question: 'Following the 104th Constitutional Amendment Act, 2019 (effective Jan 2020), Article 330 and Article 334:',
    options: [
      'Extended both SC/ST reservation and Anglo-Indian nomination for another 10 years',
      'Extended SC/ST seat reservation in Lok Sabha and State Assemblies up to 2030, while allowing Anglo-Indian nomination (Arts 331/333) to lapse',
      'Abolished SC/ST reservations in Lok Sabha',
      'Introduced 33% women reservation under Article 330'
    ],
    correctIndex: 1,
    explanation: 'The 104th Amendment extended reservation of seats for SCs and STs in the Lok Sabha (Art 330) and State Legislative Assemblies (Art 332) up to 25 January 2030 (80 years from commencement), while discontinuing the special Anglo-Indian nomination provisions.',
    articleRef: 'Article 330',
    difficulty: 'Intermediate',
    topic: 'Special Provisions & Classes'
  },
  {
    id: 'q26',
    question: 'Under Article 338, 338A, and 338B, the three separate National Commissions exist for:',
    options: [
      'SCs (338), Minorities (338A), Women (338B)',
      'SCs (338), STs (338A - 89th Amendment), and Socially & Educationally Backward Classes / NCBC (338B - 102nd Amendment)',
      'OBCs (338), EWS (338A), Linguistic Minorities (338B)',
      'SCs (338), STs (338A), Linguistic Minorities (338B)'
    ],
    correctIndex: 1,
    explanation: 'Article 338 establishes the NCSC; the 89th Amendment (2003) bifurcated it to add Article 338A (NCST); and the 102nd Amendment (2018) inserted Article 338B conferring constitutional status on the National Commission for Backward Classes (NCBC).',
    articleRef: 'Article 338',
    difficulty: 'Foundational',
    topic: 'Special Provisions & Classes'
  },
  {
    id: 'q27',
    question: 'Under Article 343(1) of the Constitution, the official language of the Union shall be:',
    options: [
      'Hindi in any script and Devanagari numerals',
      'Hindi in Devanagari script, with the international form of Indian numerals for official purposes',
      'English and Sanskrit jointly',
      'Hindustani in Perso-Arabic and Devanagari scripts'
    ],
    correctIndex: 1,
    explanation: 'Article 343(1) declares that the official language of the Union shall be Hindi in Devanagari script, and the form of numerals to be used for the official purposes of the Union shall be the international form of Indian numerals.',
    articleRef: 'Article 343',
    difficulty: 'Foundational',
    topic: 'Official Language (Part XVII)'
  },
  {
    id: 'q28',
    question: 'Under Article 345, who has the power to adopt any one or more of the languages in use in a State (or Hindi) as the official language(s) of that State?',
    options: [
      'The President of India on advice of the Home Minister',
      'The Legislature of the State by law',
      'The Governor in his individual discretion',
      'The Parliament under List I'
    ],
    correctIndex: 1,
    explanation: 'Article 345 empowers the Legislature of a State by law to adopt any one or more of the languages in use in the State or Hindi as the language or languages to be used for all or any of the official purposes of that State.',
    articleRef: 'Article 345',
    difficulty: 'Intermediate',
    topic: 'Official Language (Part XVII)'
  },
  {
    id: 'q29',
    question: 'Under Article 348(1), until Parliament by law otherwise provides, all proceedings in the Supreme Court and in every High Court (and authoritative texts of Bills/Acts) shall be in:',
    options: [
      'Hindi in Devanagari script',
      'The English language',
      'The regional language of the State concerned',
      'Both English and Hindi mandatorily'
    ],
    correctIndex: 1,
    explanation: 'Article 348(1) mandates English for all Supreme Court and High Court proceedings and authoritative statutory texts, unless Parliament provides otherwise. Under Art 348(2), a Governor with previous consent of the President may authorise Hindi/State language in High Court proceedings (excluding judgments/decrees/orders unless statutory provision exists).',
    articleRef: 'Article 348',
    difficulty: 'Intermediate',
    topic: 'Official Language (Part XVII)'
  },
  {
    id: 'q30',
    question: 'Which Constitutional Amendment inserted Article 350A (requiring every State and local authority to endeavour to provide adequate facilities for instruction in the mother-tongue at the primary stage of education to linguistic minority children)?',
    options: [
      '1st Amendment Act, 1951',
      '7th Constitutional Amendment Act, 1956',
      '42nd Amendment Act, 1976',
      '86th Amendment Act, 2002'
    ],
    correctIndex: 1,
    explanation: 'Both Article 350A (mother-tongue primary instruction) and Article 350B (Special Officer for Linguistic Minorities) were inserted by the 7th Constitutional Amendment Act, 1956 following the States Reorganisation Commission recommendations.',
    articleRef: 'Article 350A',
    difficulty: 'Judiciary/UPSC Level',
    topic: 'Official Language (Part XVII)'
  },
  {
    id: 'q31',
    question: 'Which Article gives the Constitution its short title ("This Constitution may be called the Constitution of India")?',
    options: [
      'Article 1',
      'Article 393',
      'Article 394',
      'Article 395'
    ],
    correctIndex: 1,
    explanation: 'Article 393 (Part XXII) provides the short title: "This Constitution may be called the Constitution of India." Article 394 governs commencement (26 Nov 1949 for 16 provisional articles; 26 Jan 1950 for the rest).',
    articleRef: 'Article 393',
    difficulty: 'Foundational',
    topic: 'Short Title & Commencement (Part XXII)'
  },
  {
    id: 'q32',
    question: 'Article 394A, providing for an authoritative text of the Constitution in the Hindi language, was inserted by which Constitutional Amendment?',
    options: [
      '42nd Amendment Act, 1976',
      '58th Constitutional Amendment Act, 1987',
      '71st Amendment Act, 1992',
      '92nd Amendment Act, 2003'
    ],
    correctIndex: 1,
    explanation: 'The 58th Constitutional Amendment Act, 1987 inserted Article 394A authorizing the President to publish an authoritative translation of the Constitution and every amendment in Hindi, carrying the same meaning as the English text.',
    articleRef: 'Article 394A',
    difficulty: 'Judiciary/UPSC Level',
    topic: 'Short Title & Commencement (Part XXII)'
  },
  {
    id: 'q33',
    question: 'Under Article 395, which British statutes were expressly repealed upon the commencement of the Constitution of India?',
    options: [
      'Only the Government of India Act, 1935',
      'The Indian Independence Act, 1947 and the Government of India Act, 1935 (with amending/supplementing Acts), saving the Abolition of Privy Council Jurisdiction Act, 1949',
      'The Regulating Act, 1773 and Indian Penal Code, 1860',
      'The Government of India Acts of 1919 and 1935 only'
    ],
    correctIndex: 1,
    explanation: 'Article 395 repealed the Indian Independence Act, 1947 and the Government of India Act, 1935 (except the Abolition of Privy Council Jurisdiction Act, 1949), thereby snapping the legal umbilical cord with the British Parliament and establishing autochthonous constitutional supremacy.',
    articleRef: 'Article 395',
    difficulty: 'Intermediate',
    topic: 'Short Title & Commencement (Part XXII)'
  },
  {
    id: 'q34',
    question: 'In State of Punjab v. Davinder Singh (2024, 7-Judge Bench), the Supreme Court overruled E.V. Chinnaiah (2004) and held that:',
    options: [
      'Scheduled Castes form a single homogenous class under Article 341 that cannot be sub-classified',
      'States are empowered under Articles 15(4) & 16(4) to sub-classify Scheduled Castes based on empirical data of inadequate representation without altering the Art 341 Presidential List',
      'Reservation ceilings under Indra Sawhney are completely abolished',
      'Only Parliament can sub-classify SCs by an Art 368 amendment'
    ],
    correctIndex: 1,
    explanation: 'By a 6:1 majority, the 7-Judge Bench in Davinder Singh (2024) distinguished "identification" under Art 341 from "benefit allocation" under Art 16(4), permitting empirical sub-classification while barring 100% exclusion of any sub-caste.',
    articleRef: 'Articles 16(4) & 341',
    difficulty: 'Judiciary/UPSC Level',
    topic: 'Fundamental Rights & Writs'
  },
  {
    id: 'q35',
    question: 'In Property Owners Association v. State of Maharashtra (2024, 9-Judge Bench), the Supreme Court overruled Ranganatha Reddy / Sanjeev Coke to hold that:',
    options: [
      'All private property automatically constitutes "material resources of the community" under Article 39(b)',
      'Not all privately owned property is a "material resource of the community" under Article 39(b); whether a private resource qualifies depends on nature, scarcity, impact on community well-being, and Public Trust doctrine',
      'Article 31C stands completely repealed',
      'Right to Property is restored as a Fundamental Right under Article 19(1)(f)'
    ],
    correctIndex: 1,
    explanation: 'An 8:1 majority of the 9-Judge Bench rejected Justice Krishna Iyer\'s sweeping observation in Ranganatha Reddy, holding that "material resources of the community" under Art 39(b) cannot mechanically sweep in every private asset.',
    articleRef: 'Article 39(b) & 31C',
    difficulty: 'Judiciary/UPSC Level',
    topic: 'Constitutional Doctrines'
  },
  {
    id: 'q36',
    question: 'In Mineral Area Development Authority (MADA) v. SAIL (2024, 9-Judge Bench), overriding India Cement (1990), the Supreme Court ruled that:',
    options: [
      'Royalty paid on minerals is a tax exclusively within Union List Entry 54',
      'Royalty is a contractual consideration, NOT a tax; hence States retain legislative competence under State List Entries 49 & 50 to tax mineral-bearing land and mineral rights',
      'States cannot levy any tax on land',
      'Parliament has plenary power over all mining royalties under Article 248'
    ],
    correctIndex: 1,
    explanation: 'The 9-Judge Bench (8:1) held that royalty is contractual consideration paid by a lessee for extracting minerals, not a tax, restoring State fiscal autonomy under Entries 49 and 50 of List II.',
    articleRef: 'Seventh Schedule (List II Entries 49 & 50)',
    difficulty: 'Judiciary/UPSC Level',
    topic: 'Federalism & 7th Schedule'
  },
  {
    id: 'q37',
    question: 'In Radhey Shyam v. Chhabi Nath (2015, 3-Judge Bench), overruling Surya Dev Rai (2003), the Supreme Court settled a crucial procedural rule for Judicial Officers:',
    options: [
      'Judicial orders of Civil Courts are amenable to Writ of Certiorari under Article 226',
      'Judicial orders of Civil Courts are NOT amenable to a writ jurisdiction under Article 226; challenge lies only under Article 227 supervisory jurisdiction or statutory appeal/revision',
      'Article 227 is abolished for civil disputes',
      'High Courts can issue Mandamus to District Judges on judicial merits'
    ],
    correctIndex: 1,
    explanation: 'Radhey Shyam v. Chhabi Nath (2015) drew a strict jurisdictional line: civil court judicial orders cannot be challenged via Certiorari under Article 226; only supervisory jurisdiction under Article 227 (or CPC appeal/revision) applies.',
    articleRef: 'Articles 226 & 227',
    difficulty: 'Judiciary/UPSC Level',
    topic: 'Judiciary & High Courts'
  },
  {
    id: 'q38',
    question: 'In Prabir Purkayastha v. State (NCT of Delhi) (2024), interpreting Article 22(1), the Supreme Court held that failure to supply:',
    options: [
      'Oral reasons at the time of conviction vitiates the trial',
      'Written "grounds of arrest" (specific factual basis, distinct from generic "reasons for arrest") to the arrestee renders the arrest and subsequent remand illegal',
      'A copy of the chargesheet before FIR registration is mandatory',
      'Bail bonds within 1 hour of arrest is a fundamental right'
    ],
    correctIndex: 1,
    explanation: 'Extending Pankaj Bansal (2023) to all penal statutes including UAPA/BNS, the Supreme Court in Prabir Purkayastha (2024) held that written grounds of arrest must be served under Art 22(1) to enable effective legal representation at remand.',
    articleRef: 'Article 22(1)',
    difficulty: 'Judiciary/UPSC Level',
    topic: 'Fundamental Rights & Writs'
  },
  {
    id: 'q39',
    question: 'Under Article 200, as clarified in State of Punjab v. Principal Secretary to the Governor (2023), when a State Legislature re-passes a Bill returned by the Governor under the first proviso:',
    options: [
      'The Governor may reserve it indefinitely or withhold assent a second time',
      'The Governor SHALL NOT withhold assent therefrom',
      'The Bill automatically lapses after 6 months',
      'The Chief Minister must resign'
    ],
    correctIndex: 1,
    explanation: 'The Supreme Court held that a Governor cannot exercise a "pocket veto" by sitting on Bills indefinitely, and once a non-Money Bill is returned and repassed by the Assembly, the Governor is constitutionally bound not to withhold assent.',
    articleRef: 'Article 200',
    difficulty: 'Intermediate',
    topic: 'Federalism & State Executive'
  },
  {
    id: 'q40',
    question: 'Under Article 311(2) Proviso, when may a civil servant be dismissed or removed WITHOUT holding a departmental inquiry?',
    options: [
      'Whenever the Minister orally directs',
      '(a) Conviction on a criminal charge, (b) Authority records in writing why inquiry is not reasonably practicable, or (c) President/Governor is satisfied in interest of security of State',
      'Only during a Financial Emergency under Article 360',
      'Whenever the employee is on probation for less than 5 years'
    ],
    correctIndex: 1,
    explanation: 'Second Proviso to Article 311(2) lists three strict exceptions (clauses a, b, c). In Union of India v. Tulsiram Patel (1985), the SC held that written reasons under clause (b) are subject to judicial review for mala fides or arbitrariness.',
    articleRef: 'Article 311(2)',
    difficulty: 'Judiciary/UPSC Level',
    topic: 'Services under Union & States'
  },
  {
    id: 'q41',
    question: 'Under Article 263, who is empowered to establish an Inter-State Council if at any time it appears that public interests would be served thereby?',
    options: [
      'The Prime Minister by executive memo',
      'The President of India by order',
      'The Rajya Sabha by a 2/3rd resolution',
      'The Chief Justice of India'
    ],
    correctIndex: 1,
    explanation: 'Article 263 empowers the President to establish an Inter-State Council to inquire into and advise upon inter-state disputes and coordinate policy (established permanently in 1990 on Sarkaria Commission recommendation).',
    articleRef: 'Article 263',
    difficulty: 'Foundational',
    topic: 'Federalism & Centre-State Relations'
  },
  {
    id: 'q42',
    question: 'Which Article empowers the President to refer any question of law or fact of public importance to the Supreme Court for its Advisory Opinion?',
    options: [
      'Article 136',
      'Article 141',
      'Article 142',
      'Article 143'
    ],
    correctIndex: 3,
    explanation: 'Article 143 confers Advisory Jurisdiction on the Supreme Court. Under Art 143(1) (public importance), the SC may decline to advise; under Art 143(2) (pre-Constitution treaty/covenant disputes), the SC is bound to tender its opinion.',
    articleRef: 'Article 143',
    difficulty: 'Foundational',
    topic: 'Judiciary & Supreme Court'
  },
  {
    id: 'q43',
    question: 'Under Article 110(3), if any question arises whether a Bill is a Money Bill or not, whose decision thereon is final?',
    options: [
      'The President of India',
      'The Speaker of the House of the People (Lok Sabha)',
      'The Chairman of the Rajya Sabha',
      'The Finance Minister'
    ],
    correctIndex: 1,
    explanation: 'Article 110(3) makes the Speaker of the Lok Sabha\'s certification final, though in Rojer Mathew (2019) & Aadhaar (2018), the Supreme Court affirmed that gross constitutional fraud in Money Bill certification remains subject to judicial review.',
    articleRef: 'Article 110',
    difficulty: 'Intermediate',
    topic: 'Parliament & Legislative Procedure'
  },
  {
    id: 'q44',
    question: 'Which Article grants the Supreme Court "Original and Exclusive Jurisdiction" in any dispute between the Government of India and one or more States, or between two or more States?',
    options: [
      'Article 131',
      'Article 132',
      'Article 136',
      'Article 262'
    ],
    correctIndex: 0,
    explanation: 'Article 131 gives the Supreme Court exclusive original federal jurisdiction in Centre-State and Inter-State disputes involving legal rights, excluding pre-Constitution treaties (proviso) and inter-state river water disputes barred under Article 262.',
    articleRef: 'Article 131',
    difficulty: 'Intermediate',
    topic: 'Federalism & Judiciary'
  },
  {
    id: 'q45',
    question: 'Under Article 279A (inserted by the 101st Amendment Act, 2016), what is the voting weightage of the Central Government and all State Governments combined in the GST Council?',
    options: [
      'Centre 50%, States 50%',
      'Centre 1/3rd, States 2/3rds, with decisions requiring a 3/4th majority of weighted votes cast',
      'Centre 2/3rds, States 1/3rd',
      'Equal one-vote-per-member without Centre weightage'
    ],
    correctIndex: 1,
    explanation: 'Under Article 279A(9), decisions of the GST Council require a 3/4th majority of weighted votes cast: the Centre has 1/3rd weightage and all States combined have 2/3rds weightage. In Mohit Minerals (2022), the SC held GST Council recommendations are persuasive, not binding on Parliament/States.',
    articleRef: 'Article 279A',
    difficulty: 'Judiciary/UPSC Level',
    topic: 'Finance & Property (Part XII)'
  },
  {
    id: 'q46',
    question: 'Under Article 300A (inserted by the 44th Amendment Act, 1978), "No person shall be deprived of his property save by authority of law." In Kolkata Municipal Corporation v. Bimal Kumar Shah (2024), the SC held that Art 300A implicitly guarantees:',
    options: [
      'Only that an executive order cannot take property',
      'Seven procedural sub-rights including notice, right to be heard, reasoned order, public purpose, fair compensation, efficient acquisition, and conclusion within timeline',
      'Restoration of Article 31 as a Fundamental Right',
      'Zero compensation if acquisition is for infrastructure'
    ],
    correctIndex: 1,
    explanation: 'In Kolkata Municipal Corp v. Bimal Kumar Shah (2024), the Supreme Court elevated Article 300A beyond mere statutory formality, holding that a valid law depriving property must satisfy seven mandatory constitutional sub-rights of fairness and compensation.',
    articleRef: 'Article 300A',
    difficulty: 'Judiciary/UPSC Level',
    topic: 'Finance & Property (Part XII)'
  },
  {
    id: 'q47',
    question: 'Which Article empowers Parliament by law to adjudicate inter-State river water disputes and bar the jurisdiction of the Supreme Court and all other courts?',
    options: [
      'Article 261',
      'Article 262',
      'Article 263',
      'Article 280'
    ],
    correctIndex: 1,
    explanation: 'Article 262(1)-(2) empowers Parliament to provide for adjudication of any dispute regarding waters of any inter-State river or river valley and exclude Supreme Court jurisdiction (exercised via the Inter-State River Water Disputes Act, 1956).',
    articleRef: 'Article 262',
    difficulty: 'Foundational',
    topic: 'Federalism & Centre-State Relations'
  },
  {
    id: 'q48',
    question: 'Under the Tenth Schedule (Anti-Defection Law, inserted by 52nd Amendment 1985), as modified by the 91st Amendment Act 2003, a split by one-third of a legislature party:',
    options: [
      'Still protects defectors from disqualification',
      'Was DELETED by the 91st Amendment; only a merger of at least two-thirds of the legislature party protects from disqualification',
      'Requires approval of the President',
      'Applies only to Rajya Sabha members'
    ],
    correctIndex: 1,
    explanation: 'Paragraph 3 of the Tenth Schedule (1/3rd split exemption) was omitted by the 91st Amendment Act, 2003. Currently, only a merger under Paragraph 4 with at least 2/3rds of the legislature party agreeing avoids disqualification.',
    articleRef: 'Tenth Schedule & Art 102(2)',
    difficulty: 'Intermediate',
    topic: 'Parliament & Anti-Defection'
  }
];
