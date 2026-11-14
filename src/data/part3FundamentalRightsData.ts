import type { ArticleItem } from '../types/constitution';

export const PART_3_ARTICLES_EXPANDED: ArticleItem[] = [
  {
    number: '12',
    title: 'Definition of "State" for Fundamental Rights',
    summary: 'Defines the entities against which Fundamental Rights can be enforced under Part III, covering government organs, local authorities, and statutory bodies.',
    plainEnglish: 'Determines who you can sue for violating your Fundamental Rights. If an organisation qualifies as the "State", it must respect your constitutional rights.',
    textSnippet: 'In this Part, unless the context otherwise requires, "the State" includes the Government and Parliament of India and the Government and the Legislature of each of the States and all local or other authorities within the territory of India or under the control of the Government of India.',
    realWorldScenario: 'An employee of Indian Oil Corporation or a student at a government-aided university is dismissed without a hearing. Can they file a writ under Article 32 or 226? Yes, because these public corporations and universities pass the "instrumentality of the State" test.',
    prosecutionNote: 'Crucial for determining whether actions of investigation agencies, police officers, statutory boards, or public undertakers are amenable to writ jurisdiction under Article 226/32.',
    clauses: [
      {
        clause: 'Government and Parliament of India',
        explanation: 'Encompasses the Union Executive (President, Ministers, Ministries, Police, CBI, ED) and Union Legislature (Lok Sabha, Rajya Sabha).',
        example: 'A federal ministry issues an order banning a website without due process; Article 12 applies directly.'
      },
      {
        clause: 'Government and Legislature of States',
        explanation: 'Includes State Governors, State Cabinets, State Police departments, and State Legislative Assemblies.',
        example: 'State police imposing an unconstitutional curfew or seizure is state action under Article 12.'
      },
      {
        clause: 'Local Authorities',
        explanation: 'Municipal Corporations, Panchayats, Improvement Trusts, Port Trusts, and District Boards endowed with statutory governmental powers.',
        example: 'A municipal council demolishes a shop without statutory notice; Article 14 writ applies.'
      },
      {
        clause: 'Other Authorities (Agency/Instrumentality Test)',
        explanation: 'Entities created by statute or financially, functionally, and administratively dominated by the Government (Ajay Hasia & Ramana Dayaram Shetty 6-factor test).',
        example: 'ONGC, SAIL, LIC, and CSIR are "State". Private entities like BCCI or private unassisted clubs are generally not "State" under Art 12, though amenable to Art 226 for public functions.'
      }
    ],
    exceptions: [
      'Judiciary acting purely in judicial capacity is generally not treated as "State" for Article 12 writ issuance (Naresh Shridhar Mirajkar).',
      'Purely private bodies, private schools, and private commercial enterprises without government control or public monopoly.'
    ],
    landmarkCases: [
      {
        caseName: 'Ajay Hasia v. Khalid Mujib Sehravardi',
        year: 1981,
        bench: '5-Judge Bench',
        summary: 'Established the definitive 6-factor test to determine if a society, corporation, or body is an instrumentality or agency of the State.',
        significance: 'Formulated the functional, financial, and administrative dominance test for Article 12.'
      },
      {
        caseName: 'Zee Telefilms Ltd. v. Union of India',
        year: 2005,
        bench: '5-Judge Bench',
        summary: 'Held that the Board of Control for Cricket in India (BCCI) is not "State" under Article 12, but remains amenable to Article 226 for public functions.',
        significance: 'Clarified the boundary between state monopolistic agencies and autonomous sporting bodies.'
      },
      {
        caseName: 'Pradeep Kumar Biswas v. Indian Institute of Chemical Biology',
        year: 2002,
        bench: '7-Judge Bench',
        summary: 'Overruled Sabhajit Tewary; held that CSIR is an instrumentality of State due to deep and pervasive governmental control.',
        significance: 'Reinforced the requirement of structural, financial, and operational pervasive control.'
      }
    ],
    doctrineLinks: ['Doctrine of Instrumentality of State', 'Rule of Law']
  },
  {
    number: '13',
    title: 'Laws Inconsistent with or in Derogation of Fundamental Rights',
    summary: 'The cornerstone of Judicial Review in India. Declares any pre- or post-constitutional law void to the extent of its inconsistency with Part III.',
    plainEnglish: 'The Constitution is the supreme law. Any statute, rule, ordinance, or notification that clashes with Fundamental Rights is automatically struck down.',
    textSnippet: 'All laws in force in the territory of India immediately before the commencement of this Constitution, in so far as they are inconsistent with the provisions of this Part, shall, to the extent of such inconsistency, be void.',
    realWorldScenario: 'A 1930 colonial statute allows police to arrest trade union leaders without cause. Does it survive post-1950? No. Under Article 13(1), pre-constitutional laws that violate Article 19 or 21 become dormant/void.',
    prosecutionNote: 'Prosecution cannot rely on statutory provisions or executive notifications that have been read down or invalidated under Article 13 as ultra vires Part III.',
    clauses: [
      {
        clause: '13(1) Pre-Constitutional Laws',
        explanation: 'Pre-1950 laws inconsistent with Part III are not dead from birth; they are overshadowed by the Fundamental Right (Doctrine of Eclipse). If the constitutional restriction is later lifted, the law revives.',
        example: 'Bhikaji Narain v. State of M.P.: A colonial transport monopoly law was eclipsed by Art 19(1)(g), then revived when the 1st Amendment permitted state monopoly.'
      },
      {
        clause: '13(2) Post-Constitutional Laws',
        explanation: 'The State cannot enact any law that takes away or abridges Part III rights. Any such law is born dead (void ab initio), and the Doctrine of Eclipse does not revive it.',
        example: 'Deep Chand v. State of U.P.: A post-1950 state legislation violating Fundamental Rights is stillborn.'
      },
      {
        clause: '13(3) Definition of "Law" and "Law in Force"',
        explanation: 'Includes Ordinances, orders, bye-laws, rules, regulations, notifications, customs, and usages having the force of law.',
        example: 'A government circular or municipal regulation is a "law" under Art 13 and can be quashed if it violates equality.'
      },
      {
        clause: '13(4) Constitutional Amendments (Inserted by 24th Amd 1971)',
        explanation: 'Provides that Article 13 does not apply to amendments made under Article 368. However, Kesavananda Bharati ruled that amendments remain subject to the Basic Structure Doctrine.',
        example: 'Parliament cannot use Article 368 to abrogate judicial review or core rights forming the Basic Structure.'
      }
    ],
    exceptions: [
      'Doctrine of Severability: Only the unconstitutional section of a statute is struck down if the rest can stand independently (A.K. Gopalan; RMDC case).',
      'Constitutional amendments are not ordinary laws under 13(2), but are gated by the Basic Structure Shield (Kesavananda Bharati).'
    ],
    landmarkCases: [
      {
        caseName: 'Kesavananda Bharati v. State of Kerala',
        year: 1973,
        bench: '13-Judge Bench',
        summary: 'Held that while constitutional amendments under Art 368 are not "laws" within the meaning of Art 13(2), they cannot alter the Basic Structure.',
        significance: 'Established the ultimate shield of Judicial Review over constituent amending power.'
      },
      {
        caseName: 'State of Bombay v. F.N. Balsara',
        year: 1951,
        bench: '5-Judge Bench',
        summary: 'Applied the Doctrine of Severability to the Bombay Prohibition Act; severed only the unconstitutional provisions affecting medicinal preparations.',
        significance: 'Affirmed that valid statutory provisions remain enforceable if separable from invalid clauses.'
      }
    ],
    doctrineLinks: ['Doctrine of Judicial Review', 'Doctrine of Eclipse', 'Doctrine of Severability', 'Basic Structure Doctrine']
  },
  {
    number: '14',
    title: 'Equality Before Law & Equal Protection of the Laws',
    summary: 'The bedrock of Indian constitutional democracy. Prohibits arbitrary discrimination, guarantees the Rule of Law, and demands fairness in all State actions.',
    plainEnglish: 'The State cannot treat people unfairly or arbitrarily. Likes must be treated alike, and every government action must be rational, proportional, and non-whimsical.',
    textSnippet: 'The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.',
    realWorldScenario: 'A State Government tenders a highway construction contract to the Minister’s nephew without open bidding. Can a rejected bidder challenge this? Yes. Under the new doctrine of equality (E.P. Royappa), state arbitrariness is antithetical to Article 14.',
    prosecutionNote: 'Prosecution cannot practice selective enforcement or arbitrary withdrawal of prosecution under Section 360 BNSS (former 321 CrPC) without valid, objective public interest grounds.',
    clauses: [
      {
        clause: 'Equality Before Law (Negative Concept - UK Origin)',
        explanation: 'No individual is above the law. Everyone, from the Prime Minister to an ordinary citizen, is subject to the same ordinary jurisdiction of courts (Dicey’s Rule of Law).',
        example: 'A government official who commits a criminal offence is tried before the regular court of law, not a special immune tribunal.'
      },
      {
        clause: 'Equal Protection of the Laws (Positive Concept - US Origin)',
        explanation: 'Equal treatment in equal circumstances. The State may enact affirmative action and differential treatment for distinct groups if reasonable.',
        example: 'Taxing wealthy corporations at a higher bracket than small retail vendors is permissible under equal protection.'
      },
      {
        clause: 'Old Test: Reasonable Classification (Anwar Ali Sarkar)',
        explanation: 'Classification must satisfy two conditions: (1) Intelligible Differentia distinguishing those grouped from others; (2) Rational Nexus between the differentia and the statutory object.',
        example: 'Fixing retirement age at 60 for ground staff and 58 for pilots based on flight safety reflects a rational nexus.'
      },
      {
        clause: 'New Test: Non-Arbitrariness & Proportionality (Royappa & Maneka Gandhi)',
        explanation: '"Equality is a dynamic concept with many aspects. Equality and arbitrariness are sworn enemies." Any arbitrary, capricious, or unguided state discretion violates Art 14.',
        example: 'Cancelling 122 2G telecom spectrum licenses because the first-come-first-served policy was arbitrary and lacked transparent objective criteria (CPIL case).'
      }
    ],
    exceptions: [
      'President and Governors enjoy immunity from criminal proceedings during their term of office (Article 361).',
      'Foreign diplomats and ambassadors enjoy diplomatic immunity under international conventions.',
      'Members of Parliament and State Legislatures enjoy immunity for speeches and votes cast on the floor of the House (Articles 105 & 194).'
    ],
    landmarkCases: [
      {
        caseName: 'E.P. Royappa v. State of Tamil Nadu',
        year: 1974,
        bench: '5-Judge Bench',
        summary: 'Bhagwati, J. formulated the modern doctrine of equality: Equality is antithetical to arbitrariness. When an act is arbitrary, it must involve negation of equality.',
        significance: 'Broke free from the narrow classification doctrine into substantive administrative fairness.'
      },
      {
        caseName: 'Shayara Bano v. Union of India',
        year: 2017,
        bench: '5-Judge Bench',
        summary: 'Invalidated the practice of Talaq-e-biddat (Instant Triple Talaq) as manifestly arbitrary and violative of Article 14.',
        significance: 'Enshrined "Manifest Arbitrariness" as an independent ground to strike down primary and secondary legislation.'
      }
    ],
    doctrineLinks: ['Rule of Law', 'Doctrine of Non-Arbitrariness', 'Manifest Arbitrariness', 'Doctrine of Reasonable Classification']
  },
  {
    number: '15',
    title: 'Prohibition of Discrimination on Specific Grounds',
    summary: 'Prohibits discrimination against citizens on grounds only of religion, race, caste, sex, place of birth, while enabling affirmative action for women, children, and backward classes.',
    plainEnglish: 'The government cannot treat you worse solely because of your religion, caste, gender, or birthplace, but it can create special welfare schemes for disadvantaged groups.',
    textSnippet: 'The State shall not discriminate against any citizen on grounds only of religion, race, caste, sex, place of birth or any of them.',
    realWorldScenario: 'A private restaurant owner bans customers of a particular caste from entering. Can they do this? No! Under Article 15(2), horizontal application guarantees equal access to shops, restaurants, and public wells against private individuals.',
    prosecutionNote: 'Crucial for upholding the constitutional validity of women-centric protections in criminal law, including Section 35(3) & 35(7) BNSS safeguards on female arrest and remand.',
    clauses: [
      {
        clause: '15(1) State Prohibition on Specific Grounds',
        explanation: 'The State cannot discriminate against citizens based solely on religion, race, caste, sex, or birthplace. The word "only" means discrimination based on other factors (merit, qualifications, residence) is valid.',
        example: 'D.P. Joshi v. State of M.B.: Charging higher medical college fees from non-residents was based on residence, not "place of birth", hence valid.'
      },
      {
        clause: '15(2) Horizontal Access to Public Places',
        explanation: 'No citizen can be subjected to disability or restriction regarding access to shops, public restaurants, hotels, or use of wells, tanks, and roads maintained out of state funds.',
        example: 'Preventing Dalits from using a village common well is a direct constitutional and penal violation.'
      },
      {
        clause: '15(3) Special Provisions for Women & Children',
        explanation: 'Enables protective discrimination and welfare measures exclusively for women and children.',
        example: 'Free education for girl children, maternity leave benefits, or reserving seats for women in public transport and municipal elections.'
      },
      {
        clause: '15(4) Upliftment of SEBCs, SCs, and STs (1st Amd 1951)',
        explanation: 'Added after Champakam Dorairajan to permit special educational and social advancement schemes for socially and educationally backward classes.',
        example: 'Reserving seats for SC/ST candidates in state medical and engineering colleges.'
      },
      {
        clause: '15(5) Reservations in Educational Institutions (93rd Amd 2005)',
        explanation: 'Permits admission reservations in aided or unaided private educational institutions, other than minority institutions under Article 30(1).',
        example: 'Upholding 27% OBC quota in central universities like IITs and IIMs (Ashoka Kumar Thakur).'
      },
      {
        clause: '15(6) Economically Weaker Sections (EWS) (103rd Amd 2019)',
        explanation: 'Allows up to 10% reservations for economically weaker sections of citizens other than SC/ST/OBCs in higher education admissions.',
        example: 'Income-based quota in central educational admissions (Janjit Abhiyan).'
      }
    ],
    exceptions: [
      'Protective discrimination in favour of women and children under 15(3).',
      'Affirmative action reservations in education under 15(4), 15(5), and 15(6).',
      'Minority educational institutions are exempt from reservations under 15(5).'
    ],
    landmarkCases: [
      {
        caseName: 'State of Madras v. Champakam Dorairajan',
        year: 1951,
        bench: '7-Judge Bench',
        summary: 'Struck down communal quotas in medical college admissions as violative of Art 15(1). Led directly to the 1st Amendment inserting Art 15(4).',
        significance: 'Historic catalyst for affirmative action clauses in the Indian Constitution.'
      },
      {
        caseName: 'Janjit Abhiyan v. Union of India',
        year: 2022,
        bench: '5-Judge Bench',
        summary: 'Upheld the 103rd Constitutional Amendment providing 10% reservation to Economically Weaker Sections (EWS) under Articles 15(6) and 16(6).',
        significance: 'Affirmed that economic criteria alone can form a valid basis for affirmative classification.'
      }
    ],
    doctrineLinks: ['Substantive Equality', 'Protective Discrimination']
  },
  {
    number: '16',
    title: 'Equality of Opportunity in Public Employment',
    summary: 'Guarantees equal opportunity in government jobs while balancing affirmative action quotas for backward classes, SCs, STs, and EWS.',
    plainEnglish: 'Every citizen has an equal shot at getting a government job. The State can reserve posts for under-represented backward classes, but must maintain efficiency.',
    textSnippet: 'There shall be equality of opportunity for all citizens in matters relating to employment or appointment to any office under the State.',
    realWorldScenario: 'The State Public Service Commission advertises 100 Prosecuting Officer vacancies. Can the commission disqualify someone merely because they were born in a different district? No! Article 16(2) bars discrimination based on birthplace or descent.',
    prosecutionNote: 'Prosecuting officers regularly defend PSC recruitment rules against challenges grounded in Article 16(4) carry-forward vacancies and roster points.',
    clauses: [
      {
        clause: '16(1) Equal Opportunity Principle',
        explanation: 'Every citizen has equal opportunity for recruitment, promotion, and service conditions under the State.',
        example: 'Fair and transparent competitive examination open to all qualified citizens.'
      },
      {
        clause: '16(2) Specific Prohibitions',
        explanation: 'No citizen shall be ineligible or discriminated against on grounds only of religion, race, caste, sex, descent, place of birth, or residence.',
        example: 'Disqualifying an applicant because their parents were from another state violates the prohibition against descent discrimination.'
      },
      {
        clause: '16(3) Parliamentary Residential Requirement',
        explanation: 'Parliament alone (not state legislatures) may prescribe residential requirements for employment within a State or Union Territory.',
        example: 'Public Employment (Requirement as to Residence) Act enacted by Parliament.'
      },
      {
        clause: '16(4) Backward Class Reservations',
        explanation: 'State may make provision for reservation of appointments or posts in favour of any backward class which is not adequately represented in State services.',
        example: '27% OBC reservation in Central Government services upheld in Indra Sawhney.'
      },
      {
        clause: '16(4A) & 16(4B) Promotions & Carry Forward (77th & 81st Amds)',
        explanation: 'Enables reservation in promotion with consequential seniority for SCs/STs, and treats backlog vacancies as a distinct class not subject to the 50% annual ceiling.',
        example: 'Filling 20 backlog SC posts from previous years in addition to regular recruitment (M. Nagaraj & Jarnail Singh).'
      },
      {
        clause: '16(6) EWS Public Employment Quota (103rd Amd 2019)',
        explanation: 'Enables up to 10% reservation in government appointments for Economically Weaker Sections not covered by SC/ST/OBC quotas.',
        example: '10% EWS quota in UPSC, JKPSC, and central staffing recruitments.'
      }
    ],
    exceptions: [
      'Religious office exemption under 16(5): An incumbent of a religious or denominational institution may be required to profess that particular religion.',
      'Affirmative action under 16(4), 16(4A), 16(4B), and 16(6).',
      'Overall administrative efficiency requirement under Article 335.'
    ],
    landmarkCases: [
      {
        caseName: 'State of Punjab v. Davinder Singh (SC/ST Sub-Classification Bench)',
        year: 2024,
        bench: '7-Judge Constitution Bench (6:1)',
        summary: 'Overruled E.V. Chinnaiah (2004). Held that States possess constitutional competence under Article 16(4) to sub-classify Scheduled Castes based on empirical data to give preferential benefits to more disadvantaged sub-castes.',
        significance: 'Allowed sub-classification within SCs/STs and extended the Creamy Layer exclusion principle to SCs and STs for the first time.'
      },
      {
        caseName: 'Indra Sawhney v. Union of India (Mandal Case)',
        year: 1992,
        bench: '9-Judge Bench',
        summary: 'Upheld 27% OBC reservation; established the 50% ceiling on total reservations; mandated exclusion of the "Creamy Layer"; barred reservations in promotions under 16(4).',
        significance: 'The foundational precedent governing public reservation jurisprudence in India.'
      },
      {
        caseName: 'M. Nagaraj v. Union of India',
        year: 2006,
        bench: '5-Judge Bench',
        summary: 'Upheld constitutional validity of Articles 16(4A) and 16(4B), subject to State collecting quantifiable data on backwardness, inadequate representation, and efficiency (Art 335).',
        significance: 'Calibrated promotions reservation with constitutional efficiency safeguards.'
      }
    ],
    doctrineLinks: ['Creamy Layer Doctrine', '50% Reservation Ceiling', 'Administrative Efficiency (Art 335)']
  },
  {
    number: '17',
    title: 'Abolition of Untouchability',
    summary: 'Abolishes "Untouchability" in all forms, making its practice a cognizable penal offence. One of the few absolute, non-derogable Fundamental Rights.',
    plainEnglish: 'Untouchability is completely banned. Any caste-based social boycott, temple bar, or segregation is an automatic criminal offence.',
    textSnippet: '"Untouchability" is abolished and its practice in any form is forbidden. The enforcement of any disability arising out of "Untouchability" shall be an offence punishable in accordance with law.',
    realWorldScenario: 'A village priest refuses entry to Dalit villagers into a public temple, claiming traditional customs. Can the priest be prosecuted? Yes, under Article 17 and the Protection of Civil Rights Act, 1955 and SC/ST PoA Act.',
    prosecutionNote: 'Offences under Article 17 are enforced through the SC/ST (Prevention of Atrocities) Act, 1989 and Protection of Civil Rights Act, 1955. Mandatory zero-tolerance prosecution without compromise.',
    clauses: [
      {
        clause: 'Complete Abolition',
        explanation: '"Untouchability" is not defined in the Constitution, but refers to the historic social disability imposed on certain castes by birth (Mysore High Court in Devarajiah).',
        example: 'Refusing service in a restaurant or barbershop on caste grounds is punishable.'
      },
      {
        clause: 'Penal Enforcement by Law',
        explanation: 'Enforceable horizontally against private citizens, not just against the State. Parliament enacted the Protection of Civil Rights Act, 1955 under Article 35.',
        example: 'Prosecution under Section 3 of the Protection of Civil Rights Act for preventing access to places of public worship.'
      }
    ],
    exceptions: ['None. Absolute and non-derogable right.'],
    landmarkCases: [
      {
        caseName: 'Sukanya Shantha v. Union of India (Prison Manuals Caste Case)',
        year: 2024,
        bench: '3-Judge Bench (CJI Chandrachud)',
        summary: 'Struck down caste-based division of labor in State Prison Manuals (assigning lower castes to clean latrines/sweep and upper castes to cook).',
        significance: 'Held that institutional caste discrimination in state prisons violates Article 17 (Untouchability), Article 15, Article 21, and Article 23 (Forced Labor).'
      },
      {
        caseName: 'State of Karnataka v. Appa Balu Ingale',
        year: 1993,
        bench: 'Supreme Court',
        summary: 'Affirmed that the abolition of untouchability is the cornerstone of human rights and dignity in the Indian Republic; upheld convictions for blocking access to borewells.',
        significance: 'Reinforced that Article 17 extends to all forms of social and structural caste disabilities.'
      }
    ],
    doctrineLinks: ['Human Dignity', 'Abolition of Historical Injustice']
  },
  {
    number: '18',
    title: 'Abolition of Titles',
    summary: 'Prohibits the State from conferring aristocratic titles, safeguarding republican equality and preventing an artificial nobility.',
    plainEnglish: 'India is a republic with no dukes, knights, or rajas. National civilian awards are honors, not aristocratic titles to be prefixed to your name.',
    textSnippet: 'No title, not being a military or academic distinction, shall be conferred by the State.',
    realWorldScenario: 'A recipient of the Padma Shri uses "Padma Shri Dr. Sharma" on their legal letterhead and commercial business cards. Is this allowed? No. The Supreme Court ruled in Balaji Raghavan that national honors cannot be used as titles or prefixes.',
    prosecutionNote: 'Ensures egalitarian status before the law and prevents claims of judicial or administrative privilege based on lineage or feudal titles.',
    clauses: [
      {
        clause: '18(1) Bar on State Titles',
        explanation: 'The State cannot confer any title. Military (Param Vir Chakra, Captain) and academic (Doctor, Professor) distinctions are exempt.',
        example: 'Conferring "Rai Bahadur" or "Sir" is prohibited.'
      },
      {
        clause: '18(2) Citizens Accepting Foreign Titles',
        explanation: 'No citizen of India shall accept any title from any foreign State.',
        example: 'An Indian citizen cannot accept British Knighthood.'
      },
      {
        clause: '18(3) & 18(4) Foreigners in State Service & Emoluments',
        explanation: 'Non-citizens holding an office of profit under the State cannot accept foreign titles, gifts, or offices without Presidential consent.',
        example: 'A foreign advisor in the Finance Ministry must seek President’s approval before accepting a foreign decoration.'
      }
    ],
    exceptions: ['Military decorations and academic titles.'],
    landmarkCases: [
      {
        caseName: 'Balaji Raghavan v. Union of India',
        year: 1996,
        bench: '5-Judge Bench',
        summary: 'Upheld National Awards (Bharat Ratna, Padma Vibhushan, Padma Bhushan, Padma Shri) as civilian honors, but ruled they cannot be used as prefixes or suffixes to a name.',
        significance: 'Distinguished merit-based republican honors from aristocratic titles prohibited under Article 18.'
      }
    ],
    doctrineLinks: ['Republicanism', 'Egalitarian Principle']
  },
  {
    number: '19',
    title: 'Protection of Six Fundamental Freedoms',
    summary: 'The charter of civil liberties in India. Protects speech, assembly, association, movement, residence, and profession, strictly circumscribed by reasonable restrictions.',
    plainEnglish: 'You have the freedom to speak, protest peacefully, form unions, travel anywhere in India, live anywhere, and do any lawful business, subject to sensible public order laws.',
    textSnippet: 'All citizens shall have the right— (a) to freedom of speech and expression; (b) to assemble peaceably and without arms; (c) to form associations or unions; (d) to move freely throughout the territory of India; (e) to reside and settle in any part of the territory of India; and (g) to practise any profession, or to carry on any occupation, trade or business.',
    realWorldScenario: 'An investigative journalist publishes an article exposing police corruption. The magistrate bans the newspaper citing general inconvenience. Is the ban constitutional? No! Freedom of press under 19(1)(a) can only be restricted on the 8 exhaustive grounds in 19(2) (Romesh Thappar).',
    prosecutionNote: 'Prosecution in sedition, hate speech (BNS 196/197), or public assembly cases must strictly prove clear incitement or imminent lawless action, not merely harsh criticism of the government.',
    clauses: [
      {
        clause: '19(1)(a) Freedom of Speech and Expression',
        explanation: 'Includes freedom of the press, right to know/information, right to silence, artistic expression, commercial speech, and digital expression/internet access.',
        example: 'Anuradha Bhasin (2020): Access to the internet is protected under Article 19(1)(a) for journalism and commerce.'
      },
      {
        clause: '19(2) 8 Grounds of Reasonable Restrictions on Speech',
        explanation: 'Exhaustive grounds: (1) Sovereignty & Integrity of India, (2) Security of the State, (3) Friendly relations with foreign States, (4) Public Order, (5) Decency or Morality, (6) Contempt of Court, (7) Defamation, (8) Incitement to an offence.',
        example: 'Shreya Singhal (2015): Section 66A IT Act struck down because vagueness is not a ground under 19(2).'
      },
      {
        clause: '19(1)(b) & 19(3) Peaceful Assembly without Arms',
        explanation: 'Right to hold meetings, rallies, and peaceful demonstrations. Restricted on grounds of sovereignty, integrity, and public order.',
        example: 'Amit Sahni (Shaheen Bagh 2020): Protesters cannot block public roadways and cause indefinite public hardship.'
      },
      {
        clause: '19(1)(c) & 19(4) Associations, Unions & Co-operatives',
        explanation: 'Right to form political parties, trade unions, clubs, and co-operative societies (97th Amd). Right to form does not include right to strike.',
        example: 'TK Rangarajan: Government employees have no fundamental right to go on strike.'
      },
      {
        clause: '19(1)(d), (e) & 19(5) Movement & Residence',
        explanation: 'Right to travel freely and settle anywhere in India. Restricted for general public interest and protection of Scheduled Tribes.',
        example: 'Restricting non-tribals from acquiring tribal lands in scheduled areas to protect indigenous culture.'
      },
      {
        clause: '19(1)(g) & 19(6) Profession, Trade & Business',
        explanation: 'Right to practice any lawful trade. Restricted by professional/technical qualifications and total/partial state monopoly.',
        example: 'Licensing medical doctors, or nationalising railways/atomic energy is protected under 19(6).'
      }
    ],
    exceptions: [
      'Sub-clauses (2) through (6) impose reasonable restrictions; rights are not absolute.',
      'Only citizens enjoy Article 19 freedoms; foreigners and non-citizen corporations cannot invoke Article 19 directly.'
    ],
    landmarkCases: [
      {
        caseName: 'Shreya Singhal v. Union of India',
        year: 2015,
        bench: '2-Judge Bench',
        summary: 'Struck down Section 66A of the Information Technology Act for overbreadth and chilling effect on free speech. Distinguished discussion, advocacy, and incitement.',
        significance: 'Pinnacle of digital free expression and vagueness doctrine in India.'
      },
      {
        caseName: 'Anuradha Bhasin v. Union of India',
        year: 2020,
        bench: '3-Judge Bench',
        summary: 'Held that freedom of speech and expression and trade through the internet are constitutionally protected under Articles 19(1)(a) and 19(1)(g); shutdown orders subject to proportionality.',
        significance: 'Enshrined internet access as a constitutional medium of expression and commerce.'
      },
      {
        caseName: 'Bijoe Emmanuel v. State of Kerala',
        year: 1986,
        bench: '2-Judge Bench',
        summary: 'Upheld the right of Jehovah’s Witnesses children to remain silent during the National Anthem out of genuine religious belief; right to speak includes right to silence.',
        significance: 'Protected non-speech and freedom of conscience under Article 19(1)(a).'
      }
    ],
    doctrineLinks: ['Doctrine of Reasonable Restriction', 'Proportionality Test', 'Chilling Effect', 'Clear & Present Danger']
  },
  {
    number: '20',
    title: 'Protection in Respect of Conviction for Offences',
    summary: 'The primary constitutional shield for criminal accused. Bars retroactive criminal law (20(1)), double jeopardy (20(2)), and self-incrimination (20(3)). Non-derogable even during Emergency.',
    plainEnglish: 'You cannot be punished under a law made after your act, you cannot be tried twice by a court for the same crime, and police cannot force you to confess against yourself.',
    textSnippet: 'No person shall be convicted of any offence except for violation of the law in force at the time of the commission of the act charged as an offence, nor be subjected to a penalty greater than that which might have been inflicted under the law in force at the time of the commission of the offence.',
    realWorldScenario: 'An accused is arrested for a cyber scam committed in January 2023 when the punishment was 2 years. In June 2023, the law is amended raising punishment to 7 years. Can the court sentence him to 7 years? No! Under Article 20(1), penalties cannot be retrospectively enhanced.',
    prosecutionNote: 'Vital in prosecution: (1) Ensure charges are framed under the statute active on offence date; (2) Departmental action does not bar subsequent criminal trial under 20(2); (3) Involuntary Narco/Polygraph evidence is strictly inadmissible under 20(3) (Selvi).',
    clauses: [
      {
        clause: '20(1) Ex-Post Facto Law (Non-Retroactivity)',
        explanation: 'Two shields: (1) No one can be convicted for an act that was not an offence when committed; (2) No one can be given a higher punishment than what existed when the crime was committed. Does not apply to procedural laws or civil tax statutes.',
        example: 'Kedar Nath v. State of West Bengal: Procedural change of trial venue is valid retrospectively, but enhancing fine or prison term is void.'
      },
      {
        clause: '20(2) Protection Against Double Jeopardy',
        explanation: '"No person shall be prosecuted and punished for the same offence more than once." Requires both prosecution AND punishment before a competent judicial court of law.',
        example: 'Maqbool Hussain v. State of Bombay: Confiscation of gold by Customs authorities did not bar subsequent criminal prosecution before a Magistrate because Customs is not a court.'
      },
      {
        clause: '20(3) Right Against Self-Incrimination',
        explanation: '"No person accused of any offence shall be compelled to be a witness against himself." Bars testimonial compulsion, forced confessions, and involuntary narco-analysis.',
        example: 'Selvi v. State of Karnataka (2010): Involuntary brain mapping, polygraph, and narco-analysis violate Art 20(3). However, physical evidence (handwriting, fingerprints under Kathikalu Oghad, or weapons recovered under Section 23 BSA / former 27 IEA) is admissible.'
      }
    ],
    exceptions: [
      'Beneficial retrospective criminal laws (reducing punishment or decriminalizing) apply to the accused (Rattan Lal v. State of Punjab).',
      'Article 20 cannot be suspended even during a National Emergency under Article 352 (44th Amendment 1978).'
    ],
    landmarkCases: [
      {
        caseName: 'Selvi v. State of Karnataka',
        year: 2010,
        bench: '3-Judge Bench',
        summary: 'Ruled that involuntary administration of narco-analysis, polygraph (lie-detector), and Brain Electrical Activation Profile (BEAP) tests violates Article 20(3) and Article 21 privacy.',
        significance: 'Definitive precedent guarding cognitive liberty and bodily privacy in forensic investigation.'
      },
      {
        caseName: 'State of Bombay v. Kathi Kalu Oghad',
        year: 1961,
        bench: '11-Judge Bench',
        summary: 'Held that giving thumb impressions, handwriting samples, specimen signatures, or showing one’s body for identification does not amount to being a "witness against oneself".',
        significance: 'Distinguished physical/forensic evidence collection from testimonial self-incrimination.'
      },
      {
        caseName: 'Maqbool Hussain v. State of Bombay',
        year: 1953,
        bench: 'Constitution Bench',
        summary: 'Clarified that Article 20(2) double jeopardy operates only when both prosecution and punishment have occurred before a court of law or judicial tribunal.',
        significance: 'Permitted administrative/departmental proceedings alongside criminal trials.'
      }
    ],
    doctrineLinks: ['Rule Against Double Jeopardy', 'Right Against Self-Incrimination', 'Cognitive Liberty', 'Non-Retroactivity of Penal Laws']
  },
  {
    number: '21',
    title: 'Protection of Life and Personal Liberty',
    summary: 'The beating heart of the Constitution. Interpreted broadly to include human dignity, privacy, fair trial, clean environment, medical aid, and due process.',
    plainEnglish: 'The State cannot take away your life or freedom arbitrarily. Any procedure depriving liberty must be fair, just, and reasonable, not harsh or oppressive.',
    textSnippet: 'No person shall be deprived of his life or personal liberty except according to procedure established by law.',
    realWorldScenario: 'An undertrial languishes in jail for 5 years awaiting trial for an offence with a maximum sentence of 3 years. Does this violate the Constitution? Yes! Under Hussainara Khatoon, the Right to Speedy Trial is an inalienable component of Article 21.',
    prosecutionNote: 'Every prosecutor must uphold Article 21: (1) Scrupulously follow Satender Kumar Antil (2022) bail categories; (2) Adhere to D.K. Basu arrest protocols; (3) Facilitate legal aid under Section 341 BNSS (former 304 CrPC).',
    clauses: [
      {
        clause: 'Transition from Formalism to Substantive Due Process',
        explanation: 'From A.K. Gopalan (1950 - narrow literalist interpretation) to Maneka Gandhi (1978 - procedural law must be right, just, and fair, embodying Natural Justice and substantive due process).',
        example: 'Impounding a passport without giving reasons or hearing violates Art 21.'
      },
      {
        clause: 'Right to Privacy as a Fundamental Right',
        explanation: 'K.S. Puttaswamy (2017 - 9 Judges) held privacy is an intrinsic part of life and liberty, protected under the 3-fold proportionality test: Legality, Legitimate State Aim, and Proportionality.',
        example: 'State wiretapping or biometric data collection must be sanctioned by law and proportional to legitimate security aims.'
      },
      {
        clause: 'Rights of Accused, Prisoners & Fair Trial',
        explanation: 'Right to speedy trial (Hussainara Khatoon), free legal aid (Khatri), right against custodial torture (D.K. Basu), right against public handcuffing (Prem Shankar Shukla), and bail as rule (Satender Kumar Antil).',
        example: 'Handcuffing an undertrial without recorded judicial permission is illegal.'
      },
      {
        clause: 'Expanded Facets of Dignity & Quality of Life',
        explanation: 'Right to clean environment (M.C. Mehta, Subhash Kumar), livelihood (Olga Tellis), emergency medical care (Paschim Banga Khet Mazdoor Samity), passive euthanasia/living will (Common Cause).',
        example: 'Government hospital refusing emergency treatment to an accident victim violates Art 21.'
      }
    ],
    exceptions: [
      'Deprivation permitted only by a valid law with fair, just, and reasonable procedure.',
      'Cannot be suspended even during a National Emergency under Article 352 (44th Amendment 1978).'
    ],
    landmarkCases: [
      {
        caseName: 'In re: Directions in Demolition of Structures (Bulldozer Justice Guidelines)',
        year: 2024,
        bench: '2-Judge Bench (Gavai & Viswanathan JJ)',
        summary: 'Held that the executive cannot punitively demolish properties of persons accused or convicted of crimes. Demolishing houses without due process violates the Right to Shelter under Article 21 and the separation of powers.',
        significance: 'Laid down mandatory pan-India guidelines requiring 15-day show-cause notice, personal hearing, and personal restitution liability for erring officers.'
      },
      {
        caseName: 'Frank Vitus v. Narcotics Control Bureau',
        year: 2024,
        bench: '2-Judge Bench (Oka & Bhuyan JJ)',
        summary: 'Held that a bail condition requiring an accused to drop a Google Maps PIN or share continuous live location with the police violates the Right to Privacy under Article 21.',
        significance: 'Bail conditions under CrPC/BNSS cannot subject an accused to round-the-clock digital surveillance or reduce liberty to virtual detention.'
      },
      {
        caseName: 'Maneka Gandhi v. Union of India',
        year: 1978,
        bench: '7-Judge Bench',
        summary: 'Introduced substantive "due process" into Article 21; established the Golden Triangle connecting Articles 14, 19, and 21. Procedure must be fair, just, and reasonable.',
        significance: 'Transformed Indian constitutional jurisprudence from literal formalism to vibrant substantive liberty.'
      },
      {
        caseName: 'K.S. Puttaswamy v. Union of India',
        year: 2017,
        bench: '9-Judge Bench',
        summary: 'Unanimously declared the Right to Privacy an intrinsic fundamental right under Article 21; established the proportionality test for state intrusions.',
        significance: 'Historic 9-judge verdict modernizing constitutional protection for the digital and data age.'
      },
      {
        caseName: 'D.K. Basu v. State of West Bengal',
        year: 1997,
        bench: '2-Judge Bench',
        summary: 'Laid down 11 mandatory guidelines for arrest and detention to prevent custodial torture and deaths, including memo of arrest, medical checkup, and intimation to kin.',
        significance: 'Codified procedural safeguards now embedded into BNSS Sections 35–62.'
      },
      {
        caseName: 'Satender Kumar Antil v. CBI',
        year: 2022,
        bench: '2-Judge Bench',
        summary: 'Laid down comprehensive nationwide guidelines on bail; categorized offences into A, B, C, D; reaffirmed that bail is the rule and jail is the exception under Art 21.',
        significance: 'The core contemporary manual for prosecutors and magistrates on remand and bail.'
      }
    ],
    doctrineLinks: ['Golden Triangle Doctrine', 'Substantive Due Process', 'Proportionality Test', 'Right to Dignity', 'Custodial Jurisprudence']
  },
  {
    number: '21A',
    title: 'Right to Free and Compulsory Education',
    summary: 'Guarantees free and compulsory education to all children aged 6 to 14 years. Inserted by the 86th Constitutional Amendment, 2002.',
    plainEnglish: 'Every child between 6 and 14 has a fundamental right to go to school for free. The government must provide the schools, teachers, and books.',
    textSnippet: 'The State shall provide free and compulsory education to all children of the age of six to fourteen years in such manner as the State may, by law, determine.',
    realWorldScenario: 'An unaided private school refuses to admit 25% economically weaker section children under the RTE Act. Can the school be compelled? Yes! The Supreme Court in Society for Unaided Private Schools upheld the 25% quota under Article 21A.',
    prosecutionNote: 'Operates alongside the Right of Children to Free and Compulsory Education (RTE) Act, 2009. Essential in child labour and anti-trafficking prosecution rehabilitation.',
    clauses: [
      {
        clause: 'Mandatory Obligation on State',
        explanation: 'Converts DPSP Article 45 into an enforceable Fundamental Right for children between 6 and 14 years.',
        example: 'State must build schools within accessible walking distance in rural habitations.'
      },
      {
        clause: 'Enabling Legislation: RTE Act, 2009',
        explanation: 'Mandates 25% admission quota for disadvantaged groups in entry-level classes of private unaided non-minority schools.',
        example: 'Reimbursed reservations in private primary schools.'
      }
    ],
    exceptions: ['Unaided minority educational institutions protected under Article 30(1) (Pramati Educational Trust).'],
    landmarkCases: [
      {
        caseName: 'Unni Krishnan, J.P. v. State of Andhra Pradesh',
        year: 1993,
        bench: '5-Judge Bench',
        summary: 'Held that right to education flows directly from right to life in Art 21, but limited the right up to age 14. Paved the way for the 86th Constitutional Amendment.',
        significance: 'Direct judicial progenitor of Article 21A.'
      },
      {
        caseName: 'Society for Unaided Private Schools of Rajasthan v. Union of India',
        year: 2012,
        bench: '3-Judge Bench',
        summary: 'Upheld the constitutional validity of the 25% EWS reservation under Section 12(1)(c) of the RTE Act in unaided non-minority private schools.',
        significance: 'Harmonized private educational autonomy with social redistribution under Article 21A.'
      }
    ],
    doctrineLinks: ['Transformative Constitutionalism', 'Human Capital Development']
  },
  {
    number: '22',
    title: 'Protection Against Arrest and Detention',
    summary: 'Constitutional safeguards on arrest under punitive criminal law (grounds, legal counsel, 24-hr Magistrate production) and strict procedural limits on Preventive Detention.',
    plainEnglish: 'If police arrest you, they must tell you why in writing, allow you to call your lawyer, and take you before a Judge within 24 hours. They cannot hold you indefinitely.',
    textSnippet: 'No person who is arrested shall be detained in custody without being informed, as soon as may be, of the grounds for such arrest nor shall he be denied the right to consult, and to be defended by, a legal practitioner of his choice.',
    realWorldScenario: 'Police arrest a suspect at 10 AM on Monday, withhold the reasons for arrest, and keep him at the police station until Thursday afternoon without a remand order. Is this legal? No! It directly violates Article 22(1) and 22(2). Detention after 24 hours without judicial order is illegal.',
    prosecutionNote: 'Crucial for every Prosecuting Officer: (1) Verify that Section 47/58 BNSS compliance is documented in the case diary; (2) Written grounds of arrest must be supplied contemporaneously under Pankaj Bansal (2023) and Prabir Purkayastha (2024).',
    clauses: [
      {
        clause: '22(1) Right to Know Grounds & Right to Legal Counsel',
        explanation: 'The arrested person must be informed of the grounds of arrest as soon as may be, and has the absolute right to consult and be defended by a lawyer of choice.',
        example: 'Pankaj Bansal (2023) & Prabir Purkayastha (2024): Written grounds of arrest must be furnished to the accused without exception.'
      },
      {
        clause: '22(2) Production Before Magistrate Within 24 Hours',
        explanation: 'Mandatory production before the nearest Judicial Magistrate within 24 hours of arrest, excluding journey time. Detention beyond 24 hours requires a judicial remand order (Sec 187 BNSS / former 167 CrPC).',
        example: 'State of Punjab v. Ajaib Singh: Arrest without warrant requires immediate judicial oversight within 24 hours.'
      },
      {
        clause: '22(3) Two Exceptions to Ordinary Safeguards',
        explanation: 'The protections of 22(1) and 22(2) do not apply to: (1) Enemy aliens; (2) Persons detained under preventive detention laws (UAPA, PSA, COFEPOSA).',
        example: 'An enemy alien captured during conflict cannot claim 24-hour Magistrate production.'
      },
      {
        clause: '22(4) & 22(5) Preventive Detention Safeguards',
        explanation: 'Detention beyond 3 months requires Advisory Board approval (High Court judges); grounds must be communicated to the detainee to allow representation at the earliest opportunity.',
        example: 'A.K. Roy v. Union of India: Preventive detention laws must be strictly interpreted; detainee has the right to friends assistance.'
      }
    ],
    exceptions: [
      'Enemy aliens.',
      'Preventive detention detainees under 22(3) (governed instead by 22(4)–22(7)).'
    ],
    landmarkCases: [
      {
        caseName: 'Prabir Purkayastha v. State (NCT of Delhi)',
        year: 2024,
        bench: '2-Judge Bench',
        summary: 'Held that written grounds of arrest must be furnished to the arrested person at the time of arrest even under special statutes like UAPA; failure renders arrest and remand void.',
        significance: 'Enforced contemporaneous written grounds under Article 22(1) across all criminal investigations.'
      },
      {
        caseName: 'Pankaj Bansal v. Union of India',
        year: 2023,
        bench: '2-Judge Bench',
        summary: 'Mandated that the Enforcement Directorate (ED) must furnish the grounds of arrest in writing to the accused as a constitutional mandate under Art 22(1).',
        significance: 'Ended the practice of orally reading out grounds in PMLA arrests.'
      },
      {
        caseName: 'Arnesh Kumar v. State of Bihar',
        year: 2014,
        bench: '2-Judge Bench',
        summary: 'Mandated that arrest should not be automatic in offences punishable with imprisonment up to 7 years; police must issue notice under Section 41A CrPC (now Section 35(3) BNSS).',
        significance: 'Checklisted police powers to prevent unnecessary, mechanical custodial detentions.'
      }
    ],
    doctrineLinks: ['Habeas Corpus Safeguards', 'Fair Procedure', 'Remand Jurisprudence', 'Preventive Detention Review']
  },
  {
    number: '23',
    title: 'Prohibition of Traffic in Human Beings and Forced Labour',
    summary: 'Abolishes slavery, sex trafficking, beggar (unpaid compulsory work), and bonded labour. Directly enforceable against private individuals.',
    plainEnglish: 'No one can buy or sell human beings, and no employer can force you to work without pay or below statutory minimum wages.',
    textSnippet: 'Traffic in human beings and begar and other similar forms of forced labour are prohibited and any contravention of this provision shall be an offence punishable in accordance with law.',
    realWorldScenario: 'A brick-kiln owner confiscates the identity cards of migrant laborers and forces them to work 16 hours a day to repay a generational loan. Is this legal? No! It is bonded labour and violates Article 23. Paying less than minimum wages is "forced labour" (Asiad Workers case).',
    prosecutionNote: 'Prosecution under BNS Section 143/144 (Trafficking) and Bonded Labour System (Abolition) Act, 1976. Presumption of coercion applies where workers are physically restrained.',
    clauses: [
      {
        clause: '23(1) Absolute Prohibition on Human Trafficking & Begar',
        explanation: 'Encompasses commercial sex exploitation, bonded labour, and slavery. "Forced labour" includes physical force as well as economic duress forcing work below minimum wage.',
        example: 'PUDR v. Union of India (1982): Employing construction workers below statutory minimum wage is forced labour under Article 23.'
      },
      {
        clause: '23(2) State Compulsory Service Exception',
        explanation: 'The State may impose compulsory public service for military or social needs without discrimination based on religion, race, caste, or class.',
        example: 'Compulsory military conscription or disaster relief mobilization during national calamity.'
      }
    ],
    exceptions: ['Compulsory public service imposed by the State for public purposes under 23(2).'],
    landmarkCases: [
      {
        caseName: 'Sukanya Shantha v. Union of India (Prison Forced Labor Case)',
        year: 2024,
        bench: '3-Judge Bench',
        summary: 'Held that compelling lower-caste prisoners to perform hazardous and menial labor like cleaning latrines under prison rules amounts to prohibited forced labor under Article 23.',
        significance: 'Extended Article 23 protection against State-enforced caste-based manual labor inside correctional facilities.'
      },
      {
        caseName: 'People’s Union for Democratic Rights (PUDR) v. Union of India (Asiad Workers)',
        year: 1982,
        bench: '2-Judge Bench',
        summary: 'Bhagwati, J. held that "force" under Article 23 is not limited to physical or legal force; economic compulsion forcing a person to work for less than minimum wage is "forced labour".',
        significance: 'Expanded Article 23 to protect migrant and unorganised labour against exploitative wages.'
      },
      {
        caseName: 'Bandhua Mukti Morcha v. Union of India',
        year: 1984,
        bench: '3-Judge Bench',
        summary: 'Addressed stone-quarry bonded labourers near Delhi; ordered release and rehabilitation; affirmed that State failure to free bonded labour violates Article 21 and 23.',
        significance: 'Seminal public interest litigation dismantling systemic bonded labour networks.'
      }
    ],
    doctrineLinks: ['Human Dignity', 'Economic Justice', 'Abolition of Bonded Labour']
  },
  {
    number: '24',
    title: 'Prohibition of Employment of Children in Factories, etc.',
    summary: 'Absolute bar on employing children below the age of fourteen years in factories, mines, or any hazardous employment.',
    plainEnglish: 'Children under 14 cannot be employed in factories, workshops, mines, or any dangerous trade. Childhood must be protected for schooling, not exploited in labour.',
    textSnippet: 'No child below the age of fourteen years shall be employed to work in any factory or mine or engaged in any other hazardous employment.',
    realWorldScenario: 'A firecracker factory in Sivakasi employs 12-year-old children to mix explosive chemical powders. Can the owner claim the parents gave consent? No! Article 24 is an absolute fundamental prohibition; parental consent is legally irrelevant.',
    prosecutionNote: 'Prosecuted alongside the Child and Adolescent Labour (Prohibition and Regulation) Act, 1986. Mandatory rehabilitation fund creation ordered by the Supreme Court in M.C. Mehta.',
    clauses: [
      {
        clause: 'Absolute Prohibition under Age 14',
        explanation: 'Zero tolerance for employing children under 14 in factories, mines, and hazardous occupations. Harmonized with Article 21A right to education.',
        example: 'Employing children in match factories, bidi rolling, or chemical units is a cognizable criminal offence.'
      }
    ],
    exceptions: ['Non-hazardous family enterprises or artistic performances outside school hours under statutory conditions.'],
    landmarkCases: [
      {
        caseName: 'M.C. Mehta v. State of Tamil Nadu (Child Labour Case)',
        year: 1996,
        bench: '3-Judge Bench',
        summary: 'Addressed child labour in the Sivakasi fireworks industry. Directed employer penalty of ₹20,000 per child, established the Child Labour Rehabilitation-cum-Welfare Fund, and mandated free education.',
        significance: 'Landmark judicial framework for eliminating hazardous child labour and securing educational rehabilitation.'
      }
    ],
    doctrineLinks: ['Child Rights Jurisprudence', 'Welfare State']
  },
  {
    number: '25',
    title: 'Freedom of Conscience and Free Profession, Practice, and Propagation of Religion',
    summary: 'Guarantees freedom of conscience and individual religious practice, subject to public order, morality, health, and fundamental rights (ERP Test).',
    plainEnglish: 'You have the freedom to believe in any faith, pray, and preach your religion peacefully, but you cannot commit crimes, practice untouchability, or harm public health in the name of God.',
    textSnippet: 'Subject to public order, morality and health and to the other provisions of this Part, all persons are equally entitled to freedom of conscience and the right freely to profess, practise and propagate religion.',
    realWorldScenario: 'A group uses loudspeakers at 2 AM for all-night religious chanting in a residential hospital zone. Can the police enforce sound limits? Yes! Freedom of religion under Article 25 is expressly subject to "public order, morality, and health" (Church of God in India case).',
    prosecutionNote: 'When defending state regulation of religious rites, apply the "Essential Religious Practices" (ERP) test. Only practices essential and integral to the faith are protected.',
    clauses: [
      {
        clause: '25(1) Freedom of Conscience, Profession, Practice & Propagation',
        explanation: 'Available to all persons (citizens and non-citizens). Conscience is internal faith; profession is open declaration; practice is performing rituals; propagation is explaining tenets. Propagation does NOT include forced or fraudulent conversions (Rev. Stanislaus).',
        example: 'Wearing a cross, hijab, or tilak is part of profession, subject to institutional neutral dress codes.'
      },
      {
        clause: 'Four Express Constitutional Restrictions in 25(1)',
        explanation: 'Article 25 is expressly subordinate to: (1) Public Order, (2) Morality, (3) Health, and (4) Other provisions of Part III (Fundamental Rights).',
        example: 'Human sacrifice, sati, or forced female genital mutilation can never claim Article 25 protection.'
      },
      {
        clause: '25(2)(a) Secular Activities Regulation',
        explanation: 'State may regulate financial, economic, political, or secular activities associated with religious practice.',
        example: 'Auditing temple trust funds or appointing temple executive officers.'
      },
      {
        clause: '25(2)(b) Social Welfare & Opening of Hindu Institutions',
        explanation: 'State may enact social reform laws and throw open Hindu public religious institutions to all classes and sections of Hindus (includes Sikhs, Jains, Buddhists).',
        example: 'Abolishing caste bars in temple sanctum entry or enacting Hindu Marriage reforms.'
      }
    ],
    exceptions: [
      'Explanation I: Wearing and carrying of kirpans is deemed included in the profession of the Sikh religion.',
      'Explanation II: Reference to Hindus includes persons professing the Sikh, Jaina or Buddhist religion.'
    ],
    landmarkCases: [
      {
        caseName: 'Commissioner, Hindu Religious Endowments, Madras v. Sri Lakshmindra Thirtha Swamiar (Shirur Mutt)',
        year: 1954,
        bench: '7-Judge Bench',
        summary: 'Formulated the "Essential Religious Practices" (ERP) test. What constitutes an integral part of a religion is decided by courts with reference to the doctrines of that religion itself.',
        significance: 'Origin of the Essential Religious Practices doctrine governing Indian secularism.'
      },
      {
        caseName: 'Indian Young Lawyers Association v. State of Kerala (Sabarimala Case)',
        year: 2018,
        bench: '5-Judge Bench',
        summary: 'Struck down the biological exclusion of women aged 10–50 from Sabarimala temple as violative of Articles 14, 15, and 25. Held that gender discrimination cannot be an essential religious practice.',
        significance: 'Established that religious autonomy is subordinate to constitutional morality and gender equality.'
      },
      {
        caseName: 'Rev. Stainislaus v. State of Madhya Pradesh',
        year: 1977,
        bench: '5-Judge Bench',
        summary: 'Held that the right to "propagate" religion under Article 25(1) does not include the right to convert another person by fraud, force, or allurement; upheld anti-conversion laws.',
        significance: 'Clarified the constitutional limits of religious propagation and proselytization.'
      }
    ],
    doctrineLinks: ['Essential Religious Practices Doctrine', 'Constitutional Morality', 'Positive Secularism']
  },
  {
    number: '26',
    title: 'Freedom to Manage Religious Affairs',
    summary: 'Guarantees every religious denomination the collective right to establish religious institutions, manage its own religious affairs, and own and administer property.',
    plainEnglish: 'Every religious community or sect has the collective right to run its own temples, mosques, churches, or gurudwaras and manage its trust properties.',
    textSnippet: 'Subject to public order, morality and health, every religious denomination or any section thereof shall have the right— (a) to establish and maintain institutions for religious and charitable purposes; (b) to manage its own affairs in matters of religion; (c) to own and acquire movable and immovable property; and (d) to administer such property in accordance with law.',
    realWorldScenario: 'The State passes a law seizing all temple gold and assets of a historic math and dissolving its hereditary priesthood without financial mismanagement proof. Can the math challenge this? Yes! Under Article 26(b) and (d), the denomination has autonomy over religious matters and property.',
    prosecutionNote: 'Distinguish between matters of religion (Article 26(b) - full autonomy) and administration of property (Article 26(d) - subject to secular state statutory regulation).',
    clauses: [
      {
        clause: 'Religious Denomination Criteria (Shirur Mutt Test)',
        explanation: 'To qualify as a denomination, a group must have: (1) A common faith, (2) A common organization, and (3) A distinct name (e.g. Ramakrishna Mission, Anand Margis, Sri Aurobindo Society).',
        example: 'SP Mittal v. Union of India: Auroville is not a religious denomination; secular take-over was valid.'
      },
      {
        clause: '26(b) vs 26(d) Division',
        explanation: 'Matters of religion (rituals, ceremonies, worship) cannot be interfered with by the State. But property administration under 26(d) is subject to valid state statutes.',
        example: 'Government can appoint auditors to inspect Waqf or Temple finances, but cannot change prayer rituals.'
      }
    ],
    exceptions: ['Subject to public order, morality, and health. (Note: Unlike Article 25, Article 26 is NOT expressly subject to other provisions of Part III).'],
    landmarkCases: [
      {
        caseName: 'Dr. Subramanian Swamy v. State of Tamil Nadu',
        year: 2014,
        bench: '2-Judge Bench',
        summary: 'Ruled that state management of religious institutions like the Chidambaram Natarajar Temple cannot be perpetual; government takeover can only be a temporary measure to cure maladministration.',
        significance: 'Set strict limits on government control of denominational temple administration.'
      }
    ],
    doctrineLinks: ['Denominational Autonomy', 'Secular Regulation of Religious Property']
  },
  {
    number: '27',
    title: 'Freedom as to Payment of Taxes for Promotion of Any Particular Religion',
    summary: 'Prohibits the State from compelling citizens to pay taxes whose proceeds are specifically appropriated for the promotion of any particular religion.',
    plainEnglish: 'The government cannot levy a religious tax (like the colonial Jizya) to fund temples, mosques, or churches of one specific faith. Secular state funds cannot promote religious favoritism.',
    textSnippet: 'No person shall be compelled to pay any taxes, the proceeds of which are specifically appropriated in payment of expenses for the promotion or maintenance of any particular religion or religious denomination.',
    realWorldScenario: 'A state municipality levies a "Temple Renovation Cess" on all taxpayers to fund shrines of one religion. Is this valid? No! Article 27 explicitly forbids levying taxes to promote a specific religion. However, charging a "fee" for secular services (crowd control, sanitation) at pilgrimage sites is valid.',
    prosecutionNote: 'Crucial distinction between a "Tax" (compulsory exaction for general revenue - prohibited under Art 27 if sectarian) and a "Fee" (service charge for regulatory convenience - permitted).',
    clauses: [
      {
        clause: 'Tax vs Fee Distinction (Shirur Mutt Case)',
        explanation: 'A fee charged to provide special pilgrim services, clean water, or safety at religious sites is valid because of quid pro quo (services returned), whereas a tax for religious propagation is unconstitutional.',
        example: 'Charging a fee from devotees at Amarnath or Vaishno Devi for security and medical booths is valid.'
      }
    ],
    exceptions: ['Secular fees levied for regulating pilgrim welfare or maintaining administrative sanitation.'],
    landmarkCases: [
      {
        caseName: 'Prafull Goradia v. Union of India',
        year: 2011,
        bench: '2-Judge Bench',
        summary: 'Upheld the Haj subsidy, holding that Article 27 is violated only if a substantial portion of general public tax revenue is exclusively diverted to promote one religion; marginal expenditure for pilgrim welfare does not violate Art 27.',
        significance: 'Delineated general welfare assistance from sectarian religious taxation.'
      }
    ],
    doctrineLinks: ['Secularism', 'Tax vs Fee Quid Pro Quo']
  },
  {
    number: '28',
    title: 'Freedom as to Religious Instruction in Educational Institutions',
    summary: 'Categorizes educational institutions into four types to regulate or prohibit religious instruction, balancing secular state neutrality with private educational freedom.',
    plainEnglish: 'State-funded public schools cannot teach religious doctrines. In private aided schools, no student can be forced to attend religious prayers without consent.',
    textSnippet: 'No religious instruction shall be provided in any educational institution wholly maintained out of State funds.',
    realWorldScenario: 'A government primary school wholly funded by the State introduces mandatory religious prayers and scripture reading. Is this permissible? No! Article 28(1) strictly bans religious instruction in state-maintained schools.',
    prosecutionNote: 'Differentiate between "Religious Instruction" (teaching rituals and dogmas - barred in State schools) and "Study of Religions / Moral Values" (secular academic study - permitted under Aruna Roy).',
    clauses: [
      {
        clause: 'Fourfold Classification of Educational Institutions',
        explanation: '(1) Wholly maintained by State: Religious instruction completely banned (28(1)); (2) Administered by State but established under an endowment/trust requiring religious instruction: Permitted (28(2)); (3) Recognized by State: Voluntary with consent (28(3)); (4) Aided by State funds: Voluntary with consent (28(3)).',
        example: 'A student in a convent aided school cannot be compelled to participate in chapel prayers without written parental consent.'
      }
    ],
    exceptions: ['Institutions administered by the State but established under a trust or endowment requiring religious instruction (e.g. Sanskrit colleges or Madrassas established under specific trusts).'],
    landmarkCases: [
      {
        caseName: 'Aruna Roy v. Union of India',
        year: 2002,
        bench: '3-Judge Bench',
        summary: 'Held that teaching comparative religions, universal moral values, and cultural history in schools is not "religious instruction" prohibited under Article 28; it promotes tolerance.',
        significance: 'Distinguished dogmatic indoctrination from objective secular education on world religions.'
      }
    ],
    doctrineLinks: ['Strict Secular Neutrality in State Schools', 'Voluntary Religious Consent']
  },
  {
    number: '29',
    title: 'Protection of Interests of Minorities',
    summary: 'Protects the right of any section of citizens to conserve their distinct language, script, or culture, and bars discrimination in state-aided educational admissions.',
    plainEnglish: 'Any group with a distinct language, script, or heritage has the fundamental right to preserve it. No citizen can be denied admission to a state-aided college based on caste or religion.',
    textSnippet: 'Any section of the citizens residing in the territory of India or any part thereof having a distinct language, script or culture of its own shall have the right to conserve the same.',
    realWorldScenario: 'A state university denies admission to a meritorious student solely because the student belongs to a non-Urdu linguistic group. Can this be done? No! Article 29(2) guarantees that no citizen shall be denied admission to any state-aided educational institution on grounds only of religion, race, caste, or language.',
    prosecutionNote: 'Article 29(1) protects ANY section of citizens (majority or minority), whereas Article 29(2) is an individual citizen right against discriminatory educational exclusion.',
    clauses: [
      {
        clause: '29(1) Conservation of Language, Script & Culture',
        explanation: 'Applies to any section of citizens (not restricted to traditional minorities). Includes the right to agitate and campaign for the preservation of a language.',
        example: 'Tamil, Dogri, Kashmiri, or Santhali cultural groups have an absolute right to run cultural academies.'
      },
      {
        clause: '29(2) Non-Discrimination in Educational Admissions',
        explanation: 'No citizen can be denied admission into any educational institution maintained by the State or receiving aid out of State funds on grounds only of religion, race, caste, or language.',
        example: 'A minority college receiving state grants cannot completely shut its doors to non-minority students.'
      }
    ],
    exceptions: ['Affirmative action under Article 15(4) and 15(5) qualifies the scope of Article 29(2).'],
    landmarkCases: [
      {
        caseName: 'State of Bombay v. Bombay Education Society',
        year: 1954,
        bench: 'Constitution Bench',
        summary: 'Struck down a government order barring Anglo-Indian schools from admitting students whose mother tongue was not English; held that Art 29(2) protects individual citizens from linguistic exclusion.',
        significance: 'Affirmed that Article 29(2) protects all citizens, not merely minorities.'
      }
    ],
    doctrineLinks: ['Cultural Pluralism', 'Linguistic Rights']
  },
  {
    number: '30',
    title: 'Right of Minorities to Establish and Administer Educational Institutions',
    summary: 'The charter of educational autonomy for religious and linguistic minorities. Protects the right to establish schools and colleges and prevents state discrimination in grants.',
    plainEnglish: 'Religious and linguistic minorities have the right to set up and run their own schools and colleges to preserve their identity and impart quality modern education.',
    textSnippet: 'All minorities, whether based on religion or language, shall have the right to establish and administer educational institutions of their choice.',
    realWorldScenario: 'The State Government issues an order taking over the appointment of principals and teachers in St. Stephen’s College. Can the college resist? Yes! Under Article 30(1), the administration of a minority institution (including staff selection) belongs to the minority management, subject only to basic academic standards.',
    prosecutionNote: 'Minority status is determined state-wise based on state population (T.M.A. Pai). Minority institutions are exempt from reservation quotas under Article 15(5) and the RTE Act.',
    clauses: [
      {
        clause: '30(1) Right to Establish and Administer',
        explanation: 'Covers religious and linguistic minorities. "Administer" means the management: (1) Choose governing body, (2) Appoint staff, (3) Admit students of their choice, (4) Use property and assets.',
        example: 'TMA Pai Foundation: State can regulate academic qualifications and anti-corruption measures, but cannot usurp daily management.'
      },
      {
        clause: '30(1A) Compensation for Compulsory Acquisition (44th Amd 1978)',
        explanation: 'If the State compulsorily acquires property of a minority educational institution, it must pay full market compensation so as not to abrogate the minority right.',
        example: 'Acquiring minority school land for a highway requires compensatory payment ensuring the institution can rebuild.'
      },
      {
        clause: '30(2) Non-Discrimination in State Aid',
        explanation: 'The State shall not discriminate in granting aid to educational institutions on the ground that it is under the management of a minority.',
        example: 'Government grant-in-aid cannot be withheld because an institution is run by a Christian, Muslim, or Sikh trust.'
      }
    ],
    exceptions: [
      'Regulatory standards of excellence, sanitation, labour laws, and syllabus can be imposed by the State (Frank Anthony Public School).',
      'Exempt from Article 15(5) reservation quotas and 25% RTE quota (Pramati Educational Trust).'
    ],
    landmarkCases: [
      {
        caseName: 'Aligarh Muslim University v. Naresh Agarwal (AMU Minority Status Bench)',
        year: 2024,
        bench: '7-Judge Constitution Bench (4:3)',
        summary: 'Overruled S. Azeez Basha (1967). Held that an educational institution does not lose its minority status under Article 30(1) merely because it was incorporated or recognized by an Act of Parliament.',
        significance: 'Established the "Genesis Test" to determine whether the minority community established, funded, and nurtured the institution.'
      },
      {
        caseName: 'T.M.A. Pai Foundation v. State of Karnataka',
        year: 2002,
        bench: '11-Judge Bench',
        summary: 'The magna carta of educational autonomy. Held that the unit for determining minority status is the State, not the whole of India; affirmed that minority institutions have autonomy over fees and admissions subject to merit.',
        significance: 'Historic 11-judge benchmark settling the rights of aided and unaided educational institutions.'
      },
      {
        caseName: 'P.A. Inamdar v. State of Maharashtra',
        year: 2005,
        bench: '7-Judge Bench',
        summary: 'Held that the State cannot impose reservation quotas on private unaided minority and non-minority educational institutions.',
        significance: 'Led directly to Parliament passing the 93rd Amendment inserting Article 15(5).'
      }
    ],
    doctrineLinks: ['Minority Rights Jurisprudence', 'State-Level Minority Determination', 'Educational Autonomy']
  },
  {
    number: '31A',
    title: 'Saving of Laws Providing for Acquisition of Estates, etc.',
    summary: 'Shields 5 categories of agrarian reform and economic regulation laws from challenge under Article 14 (Equality) and Article 19 (Freedoms). Inserted by the 1st Amendment, 1951.',
    plainEnglish: 'Protects land reform laws (abolition of Zamindari and ceiling laws) from being struck down by courts on grounds that they violate equality or property rights.',
    textSnippet: 'Notwithstanding anything contained in article 13, no law providing for the acquisition by the State of any estate or of any rights therein... shall be deemed to be void on the ground that it is inconsistent with, or takes away or abridges any of the rights conferred by article 14 or article 19.',
    realWorldScenario: 'A state passes an agrarian ceiling law redistributing surplus land of a feudal landlord to landless agricultural labourers. Can the landlord sue under Article 14? No. Article 31A shields agrarian reform laws from Article 14/19 challenges.',
    prosecutionNote: 'Frequently relied upon to defend state land ceiling, mining leases, and public management takeovers against constitutional writ petitions.',
    clauses: [
      {
        clause: 'Five Protected Categories',
        explanation: '(a) Acquisition of estates/rights; (b) Taking over management of property for public interest; (c) Amalgamation of two or more corporations; (d) Extinguishment or modification of rights of managing agents/directors; (e) Extinguishment/modification of mining leases.',
        example: 'Nationalising unworked coal mining leases or redistributing agricultural holdings.'
      }
    ],
    exceptions: ['State laws must receive Presidential Assent to enjoy Article 31A immunity.'],
    landmarkCases: [
      {
        caseName: 'Waman Rao v. Union of India',
        year: 1981,
        bench: '5-Judge Bench',
        summary: 'Upheld the constitutional validity of Article 31A, 31B, and 31C as measures facilitating agrarian and economic justice.',
        significance: 'Confirmed that Article 31A does not damage the Basic Structure.'
      }
    ],
    doctrineLinks: ['Agrarian Reform Shield', 'Social Redistribution']
  },
  {
    number: '31B',
    title: 'Validation of Certain Acts and Regulations (Ninth Schedule)',
    summary: 'Provides a protective umbrella to statutes placed in the Ninth Schedule, saving them from judicial invalidation under Part III. Gated by the Basic Structure Doctrine.',
    plainEnglish: 'Laws placed in the 9th Schedule were originally immune from court challenge. Since 2007, any 9th Schedule law that violates the Basic Structure can be struck down.',
    textSnippet: 'None of the Acts and Regulations specified in the Ninth Schedule nor any of the provisions thereof shall be deemed to be void, or ever to have become void, on the ground that such Act, Regulation or provision is inconsistent with, or takes away or abridges any of the rights conferred by, any provisions of this Part...',
    realWorldScenario: 'A state puts a 69% reservation law into the 9th Schedule to bypass the 50% Indra Sawhney ceiling. Does it escape judicial review? No! Under I.R. Coelho (2007), laws inserted into the 9th Schedule after 24 April 1973 are open to judicial review against the Basic Structure.',
    prosecutionNote: 'Prosecution under statutes included in the Ninth Schedule must still ensure investigative compliance with the Basic Structure core (Articles 14, 19, and 21).',
    clauses: [
      {
        clause: 'Ninth Schedule Protection Mechanism',
        explanation: 'Laws listed in the Ninth Schedule are immune from attack on the ground of violating any Fundamental Right.',
        example: 'Over 284 land reform and economic statutes currently enjoy entry in the Ninth Schedule.'
      },
      {
        clause: 'The I.R. Coelho Cut-Off (24 April 1973)',
        explanation: 'Any law added to the Ninth Schedule after the Kesavananda Bharati verdict (24 April 1973) can be challenged if it violates the golden triangle (Arts 14, 19, 21) or alters the Basic Structure.',
        example: 'Tamil Nadu 69% reservation law is subject to judicial review under the Coelho test.'
      }
    ],
    exceptions: ['Subject to the Basic Structure Doctrine (I.R. Coelho).'],
    landmarkCases: [
      {
        caseName: 'I.R. Coelho v. State of Tamil Nadu',
        year: 2007,
        bench: '9-Judge Bench',
        summary: 'Unanimously held that the Ninth Schedule does not enjoy blanket immunity. All amendments to the Constitution on or after 24 April 1973 inserting laws into the 9th Schedule must pass the "Basic Structure Test".',
        significance: 'Historic verdict reclaiming total Judicial Review over the Ninth Schedule vault.'
      }
    ],
    doctrineLinks: ['Ninth Schedule Blanket Immunity Overruled', 'Judicial Review Supremacy']
  },
  {
    number: '31C',
    title: 'Saving of Laws Giving Effect to Certain Directive Principles',
    summary: 'Protects laws implementing socialist DPSPs under Article 39(b) (material resources distribution) and 39(c) (prevention of wealth concentration) from Article 14 and 19 challenges.',
    plainEnglish: 'If Parliament makes a law to distribute national resources or prevent billionaire monopolies under Article 39(b) or (c), it cannot be struck down for violating equality.',
    textSnippet: 'Notwithstanding anything contained in article 13, no law giving effect to the policy of the State towards securing all or any of the principles laid down in clause (b) or clause (c) of article 39 shall be deemed to be void on the ground that it is inconsistent with, or takes away or abridges any of the rights conferred by article 14 or article 19...',
    realWorldScenario: 'The government nationalises private coal mines to ensure uniform national distribution of electricity fuel under Article 39(b). Private owners claim violation of Article 14. Does the law survive? Yes, Article 31C shields it from Article 14 challenge.',
    prosecutionNote: 'State must demonstrate a direct, real nexus between the statutory provisions and the objectives of Article 39(b) or 39(c) (Sanjeev Coke).',
    clauses: [
      {
        clause: 'The 25th Amendment Insertion (1971)',
        explanation: 'Granted immunity to laws securing Art 39(b) and 39(c) from Articles 14, 19, and 31. Kesavananda upheld this, but struck down the second part ("no law containing a declaration... shall be called in question in any court").',
        example: 'Courts retain the power to check whether a law genuinely has a nexus with Article 39(b) or 39(c).'
      },
      {
        clause: 'The 42nd Amendment Expansion Struck Down (Minerva Mills 1980)',
        explanation: 'Parliament tried to extend Article 31C protection to ALL directive principles. The Supreme Court struck this down in Minerva Mills, holding that elevating all DPSPs above Fundamental Rights destroys the harmony of the Constitution.',
        example: 'Only Article 39(b) and 39(c) enjoy Article 31C protection today.'
      }
    ],
    exceptions: ['Only applies to laws securing Article 39(b) and 39(c); requires Presidential Assent for state legislation.'],
    landmarkCases: [
      {
        caseName: 'Minerva Mills Ltd. v. Union of India',
        year: 1980,
        bench: '5-Judge Bench',
        summary: 'Struck down Section 4 of the 42nd Amendment expanding Art 31C. Held that the harmony and balance between Fundamental Rights and Directive Principles is an essential feature of the Basic Structure.',
        significance: 'Preserved the golden balance between individual liberties and socialist welfare.'
      },
      {
        caseName: 'Property Owners Association v. State of Maharashtra',
        year: 2024,
        bench: '9-Judge Bench',
        summary: 'Ruled that not all privately owned material resources fall automatically under "material resources of the community" in Art 39(b); held that Art 31C remains valid as upheld in Kesavananda Bharati.',
        significance: 'Historic 2024 ruling clarifying private property boundaries under Article 39(b) and Article 31C.'
      }
    ],
    doctrineLinks: ['Harmony Between Parts III & IV', 'Socialist Economic Transformation', 'Material Resources Nexus']
  },
  {
    number: '32',
    title: 'Remedies for Enforcement of Fundamental Rights (The Heart & Soul)',
    summary: 'The ultimate constitutional remedy. Guarantees the right to move the Supreme Court by appropriate proceedings for the enforcement of Part III rights through 5 Prerogative Writs.',
    plainEnglish: 'Dr. Ambedkar called Article 32 the "Heart and Soul of the Constitution". If any Fundamental Right is violated, you can walk directly into the Supreme Court for immediate protection.',
    textSnippet: 'The right to move the Supreme Court by appropriate proceedings for the enforcement of the rights conferred by this Part is guaranteed.',
    realWorldScenario: 'A political activist is secretly detained in an unrecorded location by state agents. Can their family file a petition directly in the Supreme Court? Yes! Under Article 32, a Writ of Habeas Corpus can be moved directly in the Supreme Court, bypassing trial courts.',
    prosecutionNote: 'Article 32 is itself a Fundamental Right (unlike Article 226, which is a constitutional right). The Supreme Court cannot refuse to hear a genuine Fundamental Right violation petition.',
    clauses: [
      {
        clause: '32(1) Guaranteed Fundamental Right to Move the Supreme Court',
        explanation: 'The right to approach the Supreme Court for Fundamental Right enforcement is itself a guaranteed fundamental right. The SC is the protector and guarantor of Part III.',
        example: 'Romesh Thappar: Accused or aggrieved citizen can approach the Supreme Court directly without exhausting High Court remedies.'
      },
      {
        clause: '32(2) Power to Issue Directions, Orders, or 5 Prerogative Writs',
        explanation: 'Empowers the Supreme Court to issue Habeas Corpus (produce body), Mandamus (command public duty), Prohibition (halt lower court excess), Quo-Warranto (challenge usurpation of public office), and Certiorari (quash illegal order).',
        example: 'Quashing an illegal administrative detention order through Certiorari and Habeas Corpus.'
      },
      {
        clause: 'Public Interest Litigation (PIL) & Relaxed Locus Standi',
        explanation: 'Invented by Bhagwati and Krishna Iyer, JJ. Any public-spirited citizen or organisation can approach the court on behalf of oppressed, poor, or disadvantaged groups.',
        example: 'Bandhua Mukti Morcha, Hussainara Khatoon, and MC Mehta cases were birthed through Article 32 PILs.'
      },
      {
        clause: '32(4) Non-Suspension Bar',
        explanation: 'Article 32 cannot be suspended except as otherwise provided by the Constitution (Article 359 during National Emergency).',
        example: 'Post-44th Amendment, Article 32 remains permanently active for enforcement of Articles 20 and 21 even during Emergency.'
      }
    ],
    exceptions: ['Can be suspended during a National Emergency under Article 359, except for Articles 20 and 21.'],
    landmarkCases: [
      {
        caseName: 'Prem Chand Garg v. Excise Commissioner, U.P.',
        year: 1962,
        bench: '5-Judge Bench',
        summary: 'Gajendragadkar, J. held that the right to move the Supreme Court under Article 32 is an absolute fundamental right, and even Supreme Court rules cannot impose conditions that stifle access.',
        significance: 'Cemented the inviolable status of Article 32 as a non-derogable remedial right.'
      },
      {
        caseName: 'Bandhua Mukti Morcha v. Union of India',
        year: 1984,
        bench: '3-Judge Bench',
        summary: 'Held that letters, postcards, and telegrams can be treated as writ petitions under Article 32 where fundamental rights of bonded or marginalized laborers are infringed (Epistolary Jurisdiction).',
        significance: 'Democratized access to the apex court through Public Interest Litigation.'
      }
    ],
    doctrineLinks: ['Prerogative Writs Matrix', 'Epistolary Jurisdiction', 'Public Interest Litigation (PIL)', 'Heart and Soul of Constitution']
  },
  {
    number: '33',
    title: 'Power of Parliament to Modify Rights for Armed Forces, Police, etc.',
    summary: 'Empowers Parliament to restrict or abrogate Fundamental Rights in their application to armed forces, intelligence agencies, and telecommunication personnel to maintain discipline.',
    plainEnglish: 'Soldiers, police officers, and intelligence personnel have modified fundamental rights. Parliament can ban them from forming unions, striking, or leaking operational secrets.',
    textSnippet: 'Parliament may, by law, determine to what extent any of the rights conferred by this Part shall, in their application to, the members of the Armed Forces; or the members of the Forces charged with the maintenance of public order... be restricted or abrogated so as to ensure the proper discharge of their duties and the maintenance of discipline among them.',
    realWorldScenario: 'A group of serving army officers attempts to form a national political trade union and hold public press conferences criticising military equipment. Can Parliament ban this? Yes! Under Article 33 and the Army Act, 1950, speech, assembly, and union rights of military personnel can be restricted.',
    prosecutionNote: 'Essential for Prosecuting Officers handling court-martial proceedings, Armed Forces Special Powers Act (AFSPA) matters, or police discipline cases under Police-Forces (Restriction of Rights) Act, 1966.',
    clauses: [
      {
        clause: 'Categories of Personnel Covered',
        explanation: '(a) Armed Forces (Army, Navy, Air Force); (b) Police and forces charged with public order; (c) Intelligence and counter-intelligence personnel (IB, RAW); (d) Telecommunication personnel deployed for armed/intelligence forces.',
        example: 'Restricting WhatsApp usage and political affiliation for intelligence operatives.'
      },
      {
        clause: 'Exclusive Parliamentary Power',
        explanation: 'Only Parliament (not State Legislatures) can enact laws modifying Part III rights for these forces. Parliamentary laws under Art 33 cannot be challenged under Art 13.',
        example: 'Army Act, Navy Act, Air Force Act, BSF Act, and Police-Forces (Restriction of Rights) Act, 1966.'
      }
    ],
    exceptions: ['Applies only to members of specified security, police, and intelligence forces.'],
    landmarkCases: [
      {
        caseName: 'Ram Sarup v. Union of India',
        year: 1965,
        bench: 'Constitution Bench',
        summary: 'Upheld provisions of the Army Act restricting fundamental rights of army personnel under Article 33; held that court-martial procedure is protected from Article 21 challenge.',
        significance: 'Confirmed parliamentary supremacy in tailoring military discipline under Article 33.'
      }
    ],
    doctrineLinks: ['Military Discipline Supremacy', 'Parliamentary Prerogative']
  },
  {
    number: '34',
    title: 'Restriction on Rights While Martial Law is in Force',
    summary: 'Empowers Parliament to indemnify state officials and validate sentences passed during the operation of Martial Law (military rule) in any area.',
    plainEnglish: 'If military rule (Martial Law) has to be declared in an area experiencing extreme insurrection, Parliament can pass an Indemnity Act to protect actions taken by soldiers to restore order.',
    textSnippet: 'Notwithstanding anything in the foregoing provisions of this Part, Parliament may by law indemnify any person in the service of the Union or of a State or any other person in respect of any act done by him in connection with the maintenance or restoration of order in any area... where martial law was in force...',
    realWorldScenario: 'An area suffers total civil collapse and martial law is imposed. After civil order is restored, an officer who seized vehicles during the emergency is sued for trespass. Can Parliament protect him? Yes, through an Act of Indemnity under Article 34.',
    prosecutionNote: 'Martial law is distinct from a National Emergency (Article 352). Martial law is not expressly defined in the Constitution, borrowed from the British Common Law concept of military rule.',
    clauses: [
      {
        clause: 'Indemnity and Validation Powers',
        explanation: 'Parliament may by law: (1) Indemnify any person in civil or military service for acts done to maintain or restore order; (2) Validate any sentence passed, punishment inflicted, or forfeiture ordered under martial law.',
        example: 'Passing an Act of Indemnity post-insurrection.'
      }
    ],
    exceptions: ['Requires an Act of Parliament; military commanders cannot grant themselves immunity.'],
    landmarkCases: [
      {
        caseName: 'A.D.M. Jabalpur v. Shivkant Shukla (Overruled in Puttaswamy)',
        year: 1976,
        bench: '5-Judge Bench',
        summary: 'Discussed the interplay between martial law, emergency, and habeas corpus. Formally overruled in Puttaswamy (2017), which affirmed that life and liberty cannot be extinguished even in crisis.',
        significance: 'Historic warning that executive indemnity cannot override foundational human rights.'
      }
    ],
    doctrineLinks: ['Martial Law Concept', 'Act of Indemnity']
  },
  {
    number: '35',
    title: 'Legislation to Give Effect to Fundamental Rights',
    summary: 'Vests exclusive legislative power in Parliament (excluding State Legislatures) to make penal and regulatory laws enforcing Fundamental Rights across India.',
    plainEnglish: 'Only the Central Parliament in Delhi can pass criminal laws punishing violations of Fundamental Rights (like Untouchability or Forced Labour), ensuring uniform criminal law nationwide.',
    textSnippet: 'Notwithstanding anything in this Constitution,— (a) Parliament shall have, and the Legislature of a State shall not have, power to make laws— ... for prescribing punishment for those acts which are declared to be offences under this Part...',
    realWorldScenario: 'Can a State Legislature pass a law creating a lighter punishment for practicing untouchability in its territory? No! Article 35(a)(ii) gives exclusive power to Parliament to prescribe punishments for offences under Article 17 and Article 23.',
    prosecutionNote: 'This is the constitutional engine behind the Protection of Civil Rights Act, 1955 and Bonded Labour System (Abolition) Act, 1976. Guarantees pan-India penal uniformity.',
    clauses: [
      {
        clause: '35(a) Exclusive Parliamentary Powers',
        explanation: 'Only Parliament can enact laws regarding: (1) Residential qualifications for employment under Art 16(3); (2) Empowering lower courts with writ powers under Art 32(3); (3) Armed forces modifications under Art 33; (4) Martial law indemnity under Art 34.',
        example: 'A state assembly cannot enact an indemnity act for martial law.'
      },
      {
        clause: '35(b) Continuity of Pre-Existing Laws',
        explanation: 'Any law in force immediately before commencement prescribing punishment for untouchability or forced labour remains in force until altered by Parliament.',
        example: 'Ensured seamless legal transition on 26 January 1950.'
      }
    ],
    exceptions: ['State Legislatures have zero legislative competence regarding Article 35 matters.'],
    landmarkCases: [
      {
        caseName: 'State of Karnataka v. Union of India',
        year: 1977,
        bench: '7-Judge Bench',
        summary: 'Analyzed the scope of central legislative supremacy in enforcing uniform national standards across constitutional protections.',
        significance: 'Confirmed exclusive central competence in safeguarding fundamental penal mandates.'
      }
    ],
    doctrineLinks: ['Pan-India Penal Uniformity', 'Central Legislative Supremacy in Part III']
  }
];
