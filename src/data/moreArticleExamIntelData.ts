import type { ArticleExamIntel } from './articleExamIntelData';

export const MORE_ARTICLE_EXAM_INTEL: Record<string, ArticleExamIntel> = {
  '13': {
    articleNumber: '13',
    articleTitle: 'Laws Inconsistent with or in Derogation of Fundamental Rights',
    yieldLevel: 'Ultra High-Yield',
    frequencyScore: 'Core Prelims & Judicial Services Standard (12+ times)',
    traps: [
      {
        trapStatement: 'A constitutional amendment under Article 368 is a "law" under Article 13(2) and can be struck down for violating any fundamental right.',
        isFalse: true,
        whyItTraps: 'Candidates get confused between Golaknath (1967) and Kesavananda Bharati (1973).',
        correctRule: 'Kesavananda Bharati (1973) upheld the 24th CAA adding Art 13(4): an amendment is constituent law, NOT ordinary law under Art 13(2). It can only be struck down if it damages the Basic Structure, not merely for violating an ordinary fundamental right.',
        provisoOrClause: 'Art. 13(4) inserted by 24th CAA 1971',
        landmarkCase: 'Kesavananda Bharati v. State of Kerala (1973)'
      },
      {
        trapStatement: 'Under the Doctrine of Waiver, an Indian citizen can voluntarily waive their Fundamental Rights under Part III.',
        isFalse: true,
        whyItTraps: 'In US Constitutional Law, rights can be waived; candidates mistakenly apply US doctrine to India.',
        correctRule: 'In Basheshar Nath (1959), the Supreme Court held that Fundamental Rights in India CANNOT be waived by any citizen because they are public policy obligations enacted for the benefit of the whole community.',
        provisoOrClause: 'Doctrine of Non-Waiver of Fundamental Rights',
        landmarkCase: 'Basheshar Nath v. CIT (1959) & Behram Khurshed Pesikaka (1954)'
      },
      {
        trapStatement: 'Pre-constitutional laws violating Fundamental Rights become void ab initio (dead from the very beginning).',
        isFalse: true,
        whyItTraps: 'Candidates confuse Art 13(1) (pre-constitutional) with Art 13(2) (post-constitutional).',
        correctRule: 'Under the Doctrine of Eclipse (Bhikaji Narain Dhakras 1955), pre-constitutional laws violating Part III are NOT void ab initio; they remain dormant/eclipsed and become active again if the constitutional limitation is removed.',
        provisoOrClause: 'Article 13(1)',
        landmarkCase: 'Bhikaji Narain Dhakras v. State of M.P. (1955)'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-13-1',
        examSource: 'UPSC CSE Prelims / State Judicial Service',
        questionText: 'Which of the following doctrines is NOT applicable to Article 13 of the Constitution of India?',
        options: [
          { key: 'A', text: 'Doctrine of Severability' },
          { key: 'B', text: 'Doctrine of Eclipse' },
          { key: 'C', text: 'Doctrine of Waiver' },
          { key: 'D', text: 'Doctrine of Judicial Review' }
        ],
        correctOption: 'C',
        examinerExplanation: 'The Doctrine of Waiver does NOT apply to Indian Constitutional Law. In Basheshar Nath v. CIT (1959), SC ruled that Fundamental Rights are not merely individual privileges but public policy protections that no citizen can waive.',
        trapWarning: 'In the US, fundamental rights can be waived (e.g. plea bargaining, right to remain silent). In India, waiver is completely prohibited.'
      }
    ]
  },

  '15': {
    articleNumber: '15',
    articleTitle: 'Prohibition of Discrimination on Grounds of Religion, Race, Caste, Sex or Place of Birth',
    yieldLevel: 'Ultra High-Yield',
    frequencyScore: 'Appeared in UPSC Prelims 2017, 2021 & Mains GS-2',
    traps: [
      {
        trapStatement: 'Article 15 prohibits discrimination on the ground of "Residence".',
        isFalse: true,
        whyItTraps: 'Candidates confuse "Place of Birth" (prohibited under Art 15) with "Residence" (NOT prohibited under Art 15).',
        correctRule: 'Article 15 prohibits discrimination ONLY on grounds of Religion, Race, Caste, Sex, Place of Birth (or any of them). State governments CAN offer residential quotas in state universities/colleges (D.P. Joshi v. State of M.B. 1955).',
        provisoOrClause: 'Art. 15(1) & 15(2)',
        landmarkCase: 'D.P. Joshi v. State of Madhya Bharat (1955)'
      },
      {
        trapStatement: 'Article 15 guarantees rights exclusively enforceable against the State and never against private individuals.',
        isFalse: true,
        whyItTraps: 'Most Fundamental Rights apply only against State, but Art 15(2) is a rare horizontal right.',
        correctRule: 'Article 15(2) expressly prohibits discrimination by ANY PERSON (State or private individual) regarding access to shops, public restaurants, hotels, places of public entertainment, or wells/tanks maintained out of State funds.',
        provisoOrClause: 'Article 15(2) Horizontal Enforceability'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-15-1',
        examSource: 'UPSC CSE Prelims',
        questionText: 'Under Article 15 of the Constitution of India, discrimination by the State is prohibited on which specific grounds?',
        options: [
          { key: 'A', text: 'Religion, Race, Caste, Sex, Place of Birth, and Residence' },
          { key: 'B', text: 'Religion, Race, Caste, Sex, or Place of Birth ONLY' },
          { key: 'C', text: 'Religion, Race, Caste, Language, and Residence' },
          { key: 'D', text: 'Religion, Caste, Sex, and Economic Status' }
        ],
        correctOption: 'B',
        examinerExplanation: 'Article 15(1) contains exactly 5 grounds: Religion, Race, Caste, Sex, or Place of Birth. "Residence" is intentionally omitted from Art 15 (it is included in Art 16(2) for public employment with Art 16(3) exception). Therefore, State medical colleges can prescribe local residential domicile criteria.',
        trapWarning: 'Examiners ALWAYS slip "Residence" or "Language" into Art 15 question options to trap candidates.'
      }
    ],
    mainsBlueprint: {
      questionTitle: 'Affirmative Action under Article 15: From Champakam Dorairajan to 103rd CAA (EWS)',
      examSource: 'UPSC CSE Mains GS-2 (15 Marks / 250 Words)',
      targetWordLimit: '250 Words',
      coreIssues: [
        'Constitutional evolution of protective discrimination',
        'Balancing formal equality (Art 15(1)) with substantive equality (Arts 15(4), 15(5), 15(6))',
        'Inclusion of economic criterion without social backwardness'
      ],
      step1Intro: 'Introduce Article 15 as the embodiment of substantive equality. Note that while Art 15(1) enacts a negative prohibition against discrimination, clauses 15(3) to 15(6) construct affirmative enabling provisions for women, children, SEBCs, and EWS.',
      step2DoctrinalCore: 'Trace the constitutional amendments: 1st CAA 1951 inserted 15(4) after State of Madras v. Champakam Dorairajan struck down communal quotas; 93rd CAA 2005 inserted 15(5) covering private unaided institutions (upheld in Ashoka Kumar Thakur); 103rd CAA 2019 inserted 15(6) for 10% EWS quota (upheld in Janhit Abhiyan 2022).',
      step3Precedents: 'Cite landmark rulings: (1) Champakam Dorairajan (1951), (2) Ashoka Kumar Thakur (2008), (3) Janhit Abhiyan (2022 - economic criteria alone can form basis of affirmative action without violating basic structure).',
      step4Conclusion: 'Conclude that affirmative action in India has transitioned from caste-exclusive reparative justice to multi-dimensional substantive equality addressing both social discrimination and structural poverty.',
      examinerScoringTips: [
        'Explicitly mention 1st CAA, 93rd CAA, and 103rd CAA with respective sub-clauses.',
        'Contrast formal equality (treating unequals equally) with substantive equality (substantive justice).'
      ]
    }
  },

  '16': {
    articleNumber: '16',
    articleTitle: 'Equality of Opportunity in Matters of Public Employment',
    yieldLevel: 'Ultra High-Yield',
    frequencyScore: 'Permanent Favorite in UPSC Prelims & State Judiciary Exams',
    traps: [
      {
        trapStatement: 'State Governments have the legislative power under Article 16(3) to prescribe residential requirements for employment in state government jobs.',
        isFalse: true,
        whyItTraps: 'Candidates assume state jobs are regulated by State Legislatures under the State List.',
        correctRule: 'Under Article 16(3), ONLY PARLIAMENT by law can prescribe a requirement as to residence within a State or Union Territory prior to appointment. State Legislatures CANNOT enact domicile laws for public employment!',
        provisoOrClause: 'Article 16(3) Parliamentary Exclusivity',
        landmarkCase: 'A.V.S. Narasimha Rao v. State of A.P. (1969)'
      },
      {
        trapStatement: 'The 50% reservation ceiling laid down in Indra Sawhney is an express statutory rule written inside Article 16.',
        isFalse: true,
        whyItTraps: 'The 50% limit is so famous that aspirants assume it is written in the bare text.',
        correctRule: 'The 50% ceiling is a JUDICIALLY CREATED RULE from Indra Sawhney (1992) and M.R. Balaji (1963). The text of Art 16 contains no percentage number. The 103rd CAA 10% EWS quota operates over and above this 50% ceiling.',
        provisoOrClause: 'Art. 16(4) Judicial Interpretation',
        landmarkCase: 'Indra Sawhney (1992) & Janhit Abhiyan (2022)'
      },
      {
        trapStatement: 'Reservation in promotions for SC/ST employees is an enforceable Fundamental Right that courts can compel the Government to provide via Mandamus.',
        isFalse: true,
        whyItTraps: 'Candidates confuse an enabling provision with a fundamental right.',
        correctRule: 'Article 16(4) and 16(4A) are ENABLING PROVISIONS. The State cannot be compelled by a writ of Mandamus to provide reservations in appointments or promotions (Mukesh Kumar v. State of Uttarakhand 2020).',
        provisoOrClause: 'Arts. 16(4) & 16(4A) Enabling Nature',
        landmarkCase: 'Mukesh Kumar v. State of Uttarakhand (2020) & Jarnail Singh (2018)'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-16-1',
        examSource: 'UPSC CSE Prelims / DJS Prelims',
        questionText: 'Under Article 16(3) of the Indian Constitution, who among the following is empowered to make any law prescribing a requirement as to residence within that State prior to employment?',
        options: [
          { key: 'A', text: 'The State Legislature of that State' },
          { key: 'B', text: 'The Governor of that State' },
          { key: 'C', text: 'Parliament of India alone' },
          { key: 'D', text: 'The President in consultation with the State Public Service Commission' }
        ],
        correctOption: 'C',
        examinerExplanation: 'Article 16(3) specifically reserves this power to PARLIAMENT ALONE: "Nothing in this article shall prevent Parliament from making any law prescribing... any requirement as to residence within that State". A State Legislature cannot mandate domicile for its own public posts.',
        trapWarning: 'One of the most failed questions in State PSC exams. Candidates instinctively mark "State Legislature".'
      }
    ]
  },

  '22': {
    articleNumber: '22',
    articleTitle: 'Protection Against Arrest and Detention in Certain Cases',
    yieldLevel: 'Ultra High-Yield',
    frequencyScore: 'High Frequency in UPSC Prelims (Civil Liberties & Executive Powers)',
    traps: [
      {
        trapStatement: 'The protection under Article 22(1) and 22(2) (right to be informed of grounds, consult lawyer, produced before magistrate in 24 hours) applies to all persons detained under preventive detention laws.',
        isFalse: true,
        whyItTraps: 'Candidates miss Article 22(3) which explicitly excludes preventive detainees.',
        correctRule: 'Article 22(3) states that clauses (1) and (2) DO NOT APPLY to: (a) any enemy alien, or (b) any person detained under any law providing for PREVENTIVE DETENTION.',
        provisoOrClause: 'Article 22(3)(a) & (b) Exclusion Clause'
      },
      {
        trapStatement: 'The 44th Amendment Act (1978) reduced the maximum detention period without Advisory Board approval from 3 months to 2 months, and this 2-month rule is currently in force.',
        isFalse: true,
        whyItTraps: 'The biggest bare act trap in Indian constitutional law! The 44th CAA amended Art 22(4) to 2 months, but the Central Government NEVER NOTIFIED that specific section!',
        correctRule: 'Section 3 of the 44th Amendment was never brought into force by executive notification. Therefore, the bare act law in force TODAY STILL PRESCRIBES A 3-MONTH LIMIT, not 2 months! (A.K. Roy v. Union of India 1982).',
        provisoOrClause: 'Article 22(4) & Section 3 of 44th CAA 1978',
        landmarkCase: 'A.K. Roy v. Union of India (1982)'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-22-1',
        examSource: 'UPSC CSE Prelims',
        questionText: 'Under the preventive detention provisions of Article 22 of the Constitution of India, what is the maximum period for which a person can ordinarily be detained without obtaining the opinion of an Advisory Board?',
        options: [
          { key: 'A', text: '1 month' },
          { key: 'B', text: '2 months' },
          { key: 'C', text: '3 months' },
          { key: 'D', text: '6 months' }
        ],
        correctOption: 'C',
        examinerExplanation: 'Under Article 22(4), no law providing for preventive detention shall authorise the detention of a person for a longer period than THREE MONTHS unless an Advisory Board finds sufficient cause. Although the 44th Amendment 1978 passed a 2-month reduction, that clause was never notified by the Central Government.',
        trapWarning: 'Aspirants who read textbooks mentioning the 44th Amendment incorrectly mark 2 months. The operative statutory law remains 3 months.'
      }
    ]
  },

  '25': {
    articleNumber: '25',
    articleTitle: 'Freedom of Conscience and Free Profession, Practice and Propagation of Religion',
    yieldLevel: 'Ultra High-Yield',
    frequencyScore: 'Consistently tested in UPSC Prelims & Mains (Sabarimala, Hijab, ERP)',
    traps: [
      {
        trapStatement: 'The Right to Propagate Religion under Article 25(1) includes a fundamental right to convert another person to one’s own religion.',
        isFalse: true,
        whyItTraps: 'Candidates equate "propagation" with "conversion".',
        correctRule: 'In Rev. Stainislaus v. State of M.P. (1977), a Constitution Bench held that Art 25(1) gives the right to transmit or spread one’s religion, but DOES NOT grant a right to convert another person, as forced conversion impinges on the freedom of conscience of the other individual.',
        provisoOrClause: 'Article 25(1) ("propagate")',
        landmarkCase: 'Rev. Stainislaus v. State of M.P. (1977)'
      },
      {
        trapStatement: 'Religious freedom under Article 25 is absolute and cannot be restricted by the State for health or social welfare reasons.',
        isFalse: true,
        whyItTraps: 'Candidates overlook the opening qualifying words of Article 25(1).',
        correctRule: 'Article 25(1) is subject to Public Order, Morality, Health, and to OTHER PROVISIONS OF PART III. Under Art 25(2)(b), the State can throw open Hindu religious institutions of a public character to all classes and sections of Hindus.',
        provisoOrClause: 'Article 25(1) & 25(2)(b)',
        landmarkCase: 'Indian Young Lawyers Association (Sabarimala Case 2018)'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-25-1',
        examSource: 'UPSC CSE Prelims 2019 / 2021',
        questionText: 'Under Article 25 of the Constitution of India, the freedom of religion is subject to which of the following limitations?',
        options: [
          { key: 'A', text: 'Public order, morality, and health only' },
          { key: 'B', text: 'Public order, morality, health, and to the other provisions of Part III' },
          { key: 'C', text: 'Security of the State and friendly relations with foreign States' },
          { key: 'D', text: 'Sovereignty and integrity of India only' }
        ],
        correctOption: 'B',
        examinerExplanation: 'Article 25(1) opens with the exact words: "Subject to public order, morality and health and to the other provisions of this Part...". This means religious freedom is subordinate to other Fundamental Rights (such as Articles 14, 15, and 21), which formed the basis of the Sabarimala ruling.',
        trapWarning: 'Option A is incomplete because it omits "and to the other provisions of Part III".'
      }
    ]
  },

  '26': {
    articleNumber: '26',
    articleTitle: 'Freedom to Manage Religious Affairs',
    yieldLevel: 'High-Yield',
    frequencyScore: 'Frequently compared with Article 25 in Judicial & UPSC Mains',
    traps: [
      {
        trapStatement: 'Article 26 rights belong to every individual citizen of India.',
        isFalse: true,
        whyItTraps: 'Candidates confuse individual rights (Art 25) with collective corporate rights (Art 26).',
        correctRule: 'Article 25 protects INDIVIDUALS (all persons), whereas Article 26 protects RELIGIOUS DENOMINATIONS or sections thereof (collective institutional right).',
        provisoOrClause: 'Art. 26 ("every religious denomination")',
        landmarkCase: 'Commissioner, Hindu Religious Endowments v. Sri Lakshmindra Thirtha Swamiar (Shirur Mutt Case 1954)'
      },
      {
        trapStatement: 'Article 26, like Article 25, is subject to "other provisions of Part III".',
        isFalse: true,
        whyItTraps: 'Subtle statutory drafting difference examiners love to test!',
        correctRule: 'Article 26 is subject ONLY to Public Order, Morality, and Health. Unlike Article 25, the words "and to the other provisions of this Part" ARE NOT PRESENT in Article 26!',
        provisoOrClause: 'Article 26 Opening Clause'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-26-1',
        examSource: 'State Judicial Services / UPSC CSE Prelims',
        questionText: 'Which of the following limitations is NOT expressly mentioned in Article 26 of the Constitution of India?',
        options: [
          { key: 'A', text: 'Public order' },
          { key: 'B', text: 'Morality' },
          { key: 'C', text: 'Health' },
          { key: 'D', text: 'Other provisions of Part III' }
        ],
        correctOption: 'D',
        examinerExplanation: 'Article 26 begins: "Subject to public order, morality and health...". The phrase "and to the other provisions of this Part" exists in Article 25(1) but is ABSENT in Article 26. This precise drafting difference was debated intensely in the Sabarimala reference.',
        trapWarning: 'Examiners exploit the contrast between Art 25(1) (4 restrictions) and Art 26 (3 restrictions).'
      }
    ]
  },

  '30': {
    articleNumber: '30',
    articleTitle: 'Right of Minorities to Establish and Administer Educational Institutions',
    yieldLevel: 'Ultra High-Yield',
    frequencyScore: 'Appeared in UPSC Prelims 2018, 2020 & Mains GS-2',
    traps: [
      {
        trapStatement: 'The term "Minority" is specifically defined in Article 30 or Article 366 of the Constitution.',
        isFalse: true,
        whyItTraps: 'Candidates assume such a vital constitutional term must have a definition clause.',
        correctRule: 'The Constitution DOES NOT DEFINE "Minority" anywhere. It only recognises two types of minorities: RELIGIOUS and LINGUISTIC. In TMA Pai (2002), SC held that the unit for determining religious or linguistic minority status is the STATE, not the whole of India.',
        provisoOrClause: 'Article 30(1) ("religion or language")',
        landmarkCase: 'T.M.A. Pai Foundation v. State of Karnataka (2002)'
      },
      {
        trapStatement: 'A minority educational institution is completely immune from any state regulation or educational standards.',
        isFalse: true,
        whyItTraps: 'Candidates read "right to administer" as an absolute licence.',
        correctRule: 'The right to administer is NOT the right to maladminister. The State CAN prescribe academic standards, teacher qualifications, sanitation, and curriculum regulations even for aided or unaided minority schools.',
        provisoOrClause: 'Art. 30 Regulatory Scope',
        landmarkCase: 'In Re Kerala Education Bill (1958) & P.A. Inamdar (2005)'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-30-1',
        examSource: 'UPSC CSE Prelims',
        questionText: 'Consider the following statements regarding Article 30 of the Constitution of India:\n1. It protects both religious and linguistic minorities.\n2. The term "minority" is defined in Article 366 of the Constitution.\n3. The minority status of a community is determined with reference to the population of the whole of India.\nWhich of the statements given above is/are correct?',
        options: [
          { key: 'A', text: '1 only' },
          { key: 'B', text: '1 and 2 only' },
          { key: 'C', text: '2 and 3 only' },
          { key: 'D', text: '1, 2 and 3' }
        ],
        correctOption: 'A',
        examinerExplanation: 'Statement 1 is correct (Art 30 covers religious and linguistic minorities). Statement 2 is incorrect (minority is NOT defined anywhere in the Constitution). Statement 3 is incorrect (in TMA Pai 2002, an 11-judge bench held that minority status is determined with reference to the STATE population, as states were reorganized linguistically).',
        trapWarning: 'A 3-statement classic trap in UPSC Prelims.'
      }
    ]
  },

  '44': {
    articleNumber: '44',
    articleTitle: 'Uniform Civil Code for the Citizens',
    yieldLevel: 'Ultra High-Yield',
    frequencyScore: 'Massive Exam Focus (UPSC Prelims, Mains GS-2, Essay, Judiciary)',
    traps: [
      {
        trapStatement: 'Article 44 makes it mandatory for the judiciary to frame and enforce a Uniform Civil Code if Parliament fails to act.',
        isFalse: true,
        whyItTraps: 'Candidates see judicial pronouncements recommending UCC and assume courts can issue mandamus.',
        correctRule: 'Under Article 37, DPSPs are NON-JUSTICIABLE. The Supreme Court CANNOT issue a writ of Mandamus directing Parliament or State Legislatures to enact a Uniform Civil Code (Maharishi Avadhesh 1994).',
        provisoOrClause: 'Art. 37 & Art. 44 Non-Enforceability',
        landmarkCase: 'Maharishi Avadhesh v. Union of India (1994)'
      },
      {
        trapStatement: 'A State Legislature has no constitutional competence to enact a Uniform Civil Code for its own state.',
        isFalse: true,
        whyItTraps: 'The word "Uniform" leads aspirants to assume only Parliament can legislate.',
        correctRule: 'Entry 5 of the Concurrent List (List III) covers "Marriage and divorce; infants and minors; adoption; wills, intestacy and succession". Therefore, State Legislatures HAVE legislative competence to enact personal law codes (e.g. Uttarakhand UCC Act 2024).',
        provisoOrClause: '7th Schedule List III Entry 5'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-44-1',
        examSource: 'UPSC CSE Prelims / State PSC',
        questionText: 'Under the Seventh Schedule of the Constitution of India, matters relating to marriage, divorce, adoption, and succession fall under which List?',
        options: [
          { key: 'A', text: 'Union List (List I)' },
          { key: 'B', text: 'State List (List II)' },
          { key: 'C', text: 'Concurrent List (List III)' },
          { key: 'D', text: 'Residuary Powers under Article 248' }
        ],
        correctOption: 'C',
        examinerExplanation: 'Entry 5 of List III (Concurrent List) covers: "Marriage and divorce; infants and minors; adoption; wills, intestacy and succession; joint family and partition". Both Parliament and State Legislatures possess legislative power over personal laws.',
        trapWarning: 'Candidates often confuse Article 44 national policy with List I exclusive competence.'
      }
    ],
    mainsBlueprint: {
      questionTitle: 'Uniform Civil Code (Article 44): Balancing Pluralism, Gender Justice, and Constitutional Directive',
      examSource: 'UPSC CSE Mains GS-2 / Judiciary Mains (20 Marks / 250 Words)',
      targetWordLimit: '250 Words',
      coreIssues: [
        'Tension between Art 25 (Religious Freedom) and Art 44 (DPSP) / Art 14 & 15 (Gender Equality)',
        'Judicial nudges vs legislative reluctance',
        'Federal dimension: State UCC initiatives under List III Entry 5'
      ],
      step1Intro: 'Quote Article 44: "The State shall endeavour to secure for the citizens a uniform civil code throughout the territory of India." Note that Dr. Ambedkar characterized it as a desirable goal that should initially remain voluntary rather than coercive.',
      step2DoctrinalCore: 'Differentiate between criminal law (which is uniform across India) and personal civil laws (which vary by religious community). Explain how discriminatory personal laws on succession, polygamy, and maintenance infringe the Fundamental Rights of women under Articles 14, 15, and 21.',
      step3Precedents: 'Cite landmark rulings: (1) Shah Bano (1985 - CJI Chandrachud emphasized UCC helps national integration), (2) Sarla Mudgal (1995 - conversion to Islam solely to practice polygamy is void), (3) Shayara Bano (2017 - Triple Talaq struck down as arbitrary under Art 14).',
      step4Conclusion: 'Conclude that rather than a top-down imposition, a progressive harmonization codifying gender-just provisions across all personal laws aligns with the transformative constitutional ethos.',
      examinerScoringTips: [
        'Mention the Shah Bano, Sarla Mudgal, and Shayara Bano trio.',
        'Frame UCC as a gender-justice charter rather than a majority-minority confrontation.'
      ]
    }
  },

  '51A': {
    articleNumber: '51A',
    articleTitle: 'Fundamental Duties',
    yieldLevel: 'Ultra High-Yield',
    frequencyScore: 'Appeared in UPSC Prelims 2015, 2017, 2018, 2020, 2022',
    traps: [
      {
        trapStatement: 'The Fundamental Duties were recommended by the Justice Verma Committee and were part of the original 1950 Constitution.',
        isFalse: true,
        whyItTraps: 'Examiners swap the Swaran Singh Committee (which recommended them in 1976) with the Verma Committee (which identified legal provisions in 1999).',
        correctRule: 'Fundamental Duties were NOT in the original Constitution. They were added by the 42nd Amendment (1976) upon the recommendations of the SWARAN SINGH COMMITTEE. The Justice Verma Committee was set up in 1998–1999 to identify legal sanctions.',
        provisoOrClause: 'Part IV-A inserted by 42nd CAA 1976',
        landmarkCase: 'Swaran Singh Committee (1976) & Verma Committee (1999)'
      },
      {
        trapStatement: 'Duty to pay taxes is an enforceable Fundamental Duty enumerated under Article 51A.',
        isFalse: true,
        whyItTraps: 'The Swaran Singh Committee recommended a duty to pay taxes, but Parliament REJECTED it!',
        correctRule: 'Duty to pay taxes IS NOT in Article 51A. Swaran Singh suggested it, but it was excluded when drafting the 42nd CAA.',
        provisoOrClause: 'Article 51A Enumeration'
      },
      {
        trapStatement: 'There are currently 10 Fundamental Duties listed in Article 51A.',
        isFalse: true,
        whyItTraps: 'There were 10 originally; the 11th was added later.',
        correctRule: 'There are currently 11 Fundamental Duties. The 11th duty (51A(k) - parent/guardian to provide educational opportunities to child aged 6-14) was added by the 86th Constitutional Amendment Act, 2002.',
        provisoOrClause: 'Art. 51A(k) (86th CAA 2002)'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-51a-1',
        examSource: 'UPSC CSE Prelims 2017 / 2020',
        questionText: 'Which one of the following is NOT a Fundamental Duty under Article 51A of the Constitution of India?',
        options: [
          { key: 'A', text: 'To abide by the Constitution and respect its ideals and institutions, the National Flag and the National Anthem' },
          { key: 'B', text: 'To develop the scientific temper, humanism and the spirit of inquiry and reform' },
          { key: 'C', text: 'To cast vote in general elections' },
          { key: 'D', text: 'To safeguard public property and to abjure violence' }
        ],
        correctOption: 'C',
        examinerExplanation: 'Casting a vote in elections is a Constitutional/Legal Right (under Art 326 / RPA 1951), but it is NOT an enumerated Fundamental Duty under Article 51A. Similarly, duty to pay taxes is not in Art 51A.',
        trapWarning: 'UPSC frequently lists "Voting in elections", "Duty to pay taxes", or "Family planning" as options. None of these are in Art 51A.'
      }
    ]
  },

  '54': {
    articleNumber: '54',
    articleTitle: 'Election of President',
    yieldLevel: 'Ultra High-Yield',
    frequencyScore: 'Tested in UPSC Prelims 2018, 2023 & State PSCs',
    traps: [
      {
        trapStatement: 'Nominated members of the Rajya Sabha, Lok Sabha, and State Legislative Assemblies can vote in the election of the President of India.',
        isFalse: true,
        whyItTraps: 'Candidates confuse the Presidential election electoral college with the Presidential impeachment body.',
        correctRule: 'ONLY ELECTED MEMBERS can vote in the Presidential election: (1) Elected MPs of both Houses, (2) Elected MLAs of State Assemblies, and (3) Elected MLAs of Delhi and Puducherry Assemblies (70th CAA 1992). Nominated members CANNOT vote!',
        provisoOrClause: 'Article 54(a) & (b)'
      },
      {
        trapStatement: 'Members of State Legislative Councils (MLCs) form part of the Electoral College for the President.',
        isFalse: true,
        whyItTraps: 'Candidates overlook the word "Assembly" vs "Council".',
        correctRule: 'Members of Legislative Councils (MLCs) — whether elected or nominated — HAVE ZERO VOTING RIGHTS in the Presidential election!',
        provisoOrClause: 'Article 54 Legislative Assembly restriction'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-54-1',
        examSource: 'UPSC CSE Prelims 2023',
        questionText: 'With reference to the election of the President of India, consider the following statements:\n1. The nominated members of either House of Parliament or the Legislative Assemblies of States are not eligible to be included in the Electoral College.\n2. Members of the Legislative Councils in States with bicameral legislatures are part of the Electoral College.\nWhich of the statements given above is/are correct?',
        options: [
          { key: 'A', text: '1 only' },
          { key: 'B', text: '2 only' },
          { key: 'C', text: 'Both 1 and 2' },
          { key: 'D', text: 'Neither 1 nor 2' }
        ],
        correctOption: 'A',
        examinerExplanation: 'Statement 1 is correct: Nominated members are strictly excluded under Art 54. Statement 2 is incorrect: Members of Legislative Councils (Vidhan Parishad) have no role in Presidential election.',
        trapWarning: 'Remember the contrast: Nominated MPs CANNOT vote to ELECT the President (Art 54), but CAN vote to IMPEACH the President (Art 61)!'
      }
    ]
  },

  '61': {
    articleNumber: '61',
    articleTitle: 'Procedure for Impeachment of the President',
    yieldLevel: 'Ultra High-Yield',
    frequencyScore: 'Classic Favorite in UPSC Prelims & Judicial Service',
    traps: [
      {
        trapStatement: 'The President of India can be impeached on grounds of "proved misbehaviour or incapacity".',
        isFalse: true,
        whyItTraps: 'Examiners swap the Supreme Court Judge removal grounds ("proved misbehaviour or incapacity" under Art 124(4)) with President grounds.',
        correctRule: 'Under Article 61(1), the SOLE ground for Presidential impeachment is "VIOLATION OF THE CONSTITUTION". The Constitution does not define what constitutes "violation of the constitution".',
        provisoOrClause: 'Article 61(1)',
        landmarkCase: 'Sole ground: Violation of the Constitution'
      },
      {
        trapStatement: 'An impeachment resolution requires a majority of 2/3rd of the members present and voting in each House of Parliament.',
        isFalse: true,
        whyItTraps: 'Candidates confuse Art 368 / Art 124 majority with Art 61 majority.',
        correctRule: 'Article 61 requires the STRICTEST MAJORITY in the entire Constitution: not less than TWO-THIRDS (2/3rd) OF THE TOTAL MEMBERSHIP of each House! (Present and voting majority is completely insufficient).',
        provisoOrClause: 'Article 61(2)(b) & 61(4)'
      },
      {
        trapStatement: 'Elected MLAs of State Assemblies participate in the impeachment of the President, since they voted in the election.',
        isFalse: true,
        whyItTraps: 'Candidates assume the body that elects must be the body that impeaches.',
        correctRule: 'State MLAs HAVE NO ROLE in Presidential impeachment! Impeachment is conducted EXCLUSIVELY by Parliament. Furthermore, NOMINATED MPs of Parliament CAN vote in impeachment, even though they could not vote in the election!',
        provisoOrClause: 'Article 61 Parliamentary Exclusivity'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-61-1',
        examSource: 'UPSC CSE Prelims / State Judicial Service',
        questionText: 'Which of the following majorities is required in each House of Parliament to pass a resolution for the impeachment of the President of India under Article 61?',
        options: [
          { key: 'A', text: 'A majority of total membership and 2/3rd of members present and voting' },
          { key: 'B', text: 'A majority of not less than two-thirds (2/3rd) of the TOTAL MEMBERSHIP of the House' },
          { key: 'C', text: 'A simple majority of members present and voting' },
          { key: 'D', text: 'An absolute majority of total membership' }
        ],
        correctOption: 'B',
        examinerExplanation: 'Article 61(2)(b) mandates that the resolution must be passed by "a majority of not less than two-thirds of the total membership of the House". This is the only place in the Constitution requiring 2/3rd of TOTAL membership.',
        trapWarning: 'Option A describes Article 368 / Art 124(4). Option B is unique to Article 61.'
      }
    ]
  },

  '74': {
    articleNumber: '74',
    articleTitle: 'Council of Ministers to Aid and Advise President',
    yieldLevel: 'Ultra High-Yield',
    frequencyScore: 'Tested in UPSC Prelims 2019, 2021 & Mains GS-2',
    traps: [
      {
        trapStatement: 'The advice tendered by Ministers to the President can be enquired into by the Supreme Court under Article 32 or Article 136.',
        isFalse: true,
        whyItTraps: 'Candidates confuse judicial review of the executive order with judicial review of ministerial advice.',
        correctRule: 'Article 74(2) creates an absolute judicial bar: "The question whether any, and if so what, advice was tendered by Ministers to the President SHALL NOT BE ENQUIRED INTO IN ANY COURT." Courts can inspect the background material, but cannot inquire into the actual advice tendered (S.R. Bommai 1994).',
        provisoOrClause: 'Article 74(2)',
        landmarkCase: 'S.R. Bommai v. Union of India (1994)'
      },
      {
        trapStatement: 'The President can repeatedly send back the advice of the Council of Ministers for reconsideration as many times as desired.',
        isFalse: true,
        whyItTraps: 'Candidates forget that the 44th CAA gave the President only ONE opportunity to return advice.',
        correctRule: 'Under the 44th CAA 1978 proviso to Art 74(1), the President may require the Council of Ministers to reconsider their advice ONCE. However, if the Council resubmits the advice (with or without changes), the President MUST ACCEPT IT.',
        provisoOrClause: 'Art. 74(1) First Proviso (44th CAA 1978)',
        landmarkCase: 'Shamsher Singh v. State of Punjab (1974)'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-74-1',
        examSource: 'UPSC CSE Prelims / State PSC',
        questionText: 'Under Article 74(2) of the Constitution of India, which of the following statements is correct regarding the advice tendered by Ministers to the President?',
        options: [
          { key: 'A', text: 'It can be enquired into by the Supreme Court under Article 143' },
          { key: 'B', text: 'It can be summoned by a Joint Parliamentary Committee' },
          { key: 'C', text: 'It shall not be enquired into in any court' },
          { key: 'D', text: 'It can be reviewed by the Central Information Commission under RTI' }
        ],
        correctOption: 'C',
        examinerExplanation: 'Article 74(2) contains an explicit non-justiciability bar: "The question whether any, and if so what, advice was tendered by Ministers to the President shall not be enquired into in any court."',
        trapWarning: 'Although the background factual material can be summoned, the advice itself is immune from judicial scrutiny.'
      }
    ]
  },

  '75': {
    articleNumber: '75',
    articleTitle: 'Other Provisions as to Ministers',
    yieldLevel: 'Ultra High-Yield',
    frequencyScore: 'Very High Frequency in UPSC & State PSCs (91st CAA, Collective Responsibility)',
    traps: [
      {
        trapStatement: 'Ministers hold office during the pleasure of the Prime Minister.',
        isFalse: true,
        whyItTraps: 'Politically, PM decides; constitutionally, they hold office during the pleasure of the PRESIDENT.',
        correctRule: 'Under Article 75(2), Ministers hold office during the pleasure of the PRESIDENT (exercised on the advice of the Prime Minister).',
        provisoOrClause: 'Article 75(2)'
      },
      {
        trapStatement: 'The total number of Ministers, including the Prime Minister, in the Council of Ministers cannot exceed 15% of the total number of members of Parliament (both Lok Sabha and Rajya Sabha combined).',
        isFalse: true,
        whyItTraps: 'Examiners replace "House of the People (Lok Sabha)" with "Parliament (both Houses)".',
        correctRule: 'Under Article 75(1A) inserted by 91st CAA 2003, the 15% ceiling is calculated STRICTLY ON THE TOTAL NUMBER OF MEMBERS OF THE HOUSE OF THE PEOPLE (LOK SABHA) ONLY, not both Houses combined!',
        provisoOrClause: 'Article 75(1A) inserted by 91st CAA 2003'
      },
      {
        trapStatement: 'The Council of Ministers is collectively responsible to both the Lok Sabha and the Rajya Sabha.',
        isFalse: true,
        whyItTraps: 'Ministers can be from either House, so aspirants assume responsibility is to both Houses.',
        correctRule: 'Article 75(3) specifically states: "The Council of Ministers shall be collectively responsible to the HOUSE OF THE PEOPLE (LOK SABHA)" ONLY. A no-confidence motion can be moved ONLY in the Lok Sabha!',
        provisoOrClause: 'Article 75(3)'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-75-1',
        examSource: 'UPSC CSE Prelims / State PSC',
        questionText: 'Under Article 75(1A) of the Constitution of India, the total number of Ministers, including the Prime Minister, in the Council of Ministers shall not exceed:',
        options: [
          { key: 'A', text: '10% of the total membership of Parliament' },
          { key: 'B', text: '15% of the total number of members of the House of the People (Lok Sabha)' },
          { key: 'C', text: '15% of the total membership of both Houses of Parliament' },
          { key: 'D', text: '20% of the elected members of the Lok Sabha' }
        ],
        correctOption: 'B',
        examinerExplanation: 'The 91st Constitutional Amendment Act (2003) added Article 75(1A), capping the Council of Ministers at 15% of the total number of members of the House of the People (Lok Sabha).',
        trapWarning: 'Notice the difference: Option B specifies Lok Sabha; Option C tries to lure candidates by saying "both Houses".'
      }
    ]
  },

  '111': {
    articleNumber: '111',
    articleTitle: 'Assent to Bills (Presidential Veto)',
    yieldLevel: 'Ultra High-Yield',
    frequencyScore: 'Tested in UPSC Prelims 2019, 2021 & Mains GS-2',
    traps: [
      {
        trapStatement: 'If a Bill is passed again by both Houses after being returned by the President, the President can still withhold assent or exercise a pocket veto.',
        isFalse: true,
        whyItTraps: 'Candidates confuse ordinary bills with state bills under Art 201.',
        correctRule: 'Under the proviso to Article 111, if the bill is passed again by the Houses with or without amendment, the President "SHALL NOT WITHHOLD ASSENT THEREFROM". The President is bound to give assent (suspensive veto is overcome by simple majority).',
        provisoOrClause: 'Article 111 Proviso'
      },
      {
        trapStatement: 'The Indian Constitution prescribes a 30-day time limit for the President to give or withhold assent to a Bill passed by Parliament.',
        isFalse: true,
        whyItTraps: 'In the US Constitution, the President has 10 days. Candidates assume India has a similar deadline.',
        correctRule: 'The Indian Constitution PRESCRIBES NO TIME LIMIT for the President to act on a Bill (Art 111 merely says "as soon as possible"). This constitutional silence is what creates the "Pocket Veto" (exercised famously by President Zail Singh on the Indian Post Office Bill in 1986).',
        provisoOrClause: 'Article 111 ("as soon as possible")'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-111-1',
        examSource: 'UPSC CSE Prelims',
        questionText: 'When an ordinary Bill is presented to the President of India after being passed by both Houses, the President may:\n1. Declare assent to the Bill\n2. Withhold assent to the Bill\n3. Return the Bill for reconsideration of the Houses\n4. Send the Bill to the Supreme Court for an advisory opinion\nWhich of the actions are explicitly authorized under Article 111?',
        options: [
          { key: 'A', text: '1, 2 and 3 only' },
          { key: 'B', text: '1 and 3 only' },
          { key: 'C', text: '1, 3 and 4 only' },
          { key: 'D', text: '1, 2, 3 and 4' }
        ],
        correctOption: 'A',
        examinerExplanation: 'Article 111 gives 3 explicit choices: declare assent, declare that he withholds assent, or return the bill (if not a Money Bill) for reconsideration. Sending for advisory opinion is under Article 143, not Art 111.',
        trapWarning: 'Money Bills cannot be returned for reconsideration under Art 111.'
      }
    ]
  },

  '124': {
    articleNumber: '124',
    articleTitle: 'Establishment and Constitution of the Supreme Court',
    yieldLevel: 'Ultra High-Yield',
    frequencyScore: 'Central Axis of Judicial Examinations and UPSC Mains (Judicial Appointments & Independence)',
    traps: [
      {
        trapStatement: 'The Collegium System for appointing Supreme Court Judges is explicitly described in Article 124(2) of the Constitution.',
        isFalse: true,
        whyItTraps: 'The Collegium is so entrenched that aspirants assume it is written in the bare text.',
        correctRule: 'The word "Collegium" is NOWHERE in the text of Article 124. Article 124(2) merely says the President appoints judges "after consultation with such of the Judges of the Supreme Court and of the High Courts... as the President may deem necessary". The Collegium is a JUDICIALLY INVENTED mechanism created through the Second Judges Case (1993) and Third Judges Case (1998).',
        provisoOrClause: 'Article 124(2) Judicial Interpretation',
        landmarkCase: 'Second Judges Case (1993) & Third Judges Case (1998)'
      },
      {
        trapStatement: 'A Supreme Court Judge can be removed by an executive order of the President acting on the sole advice of the Prime Minister.',
        isFalse: true,
        whyItTraps: 'Candidates overlook the mandatory parliamentary impeachment address.',
        correctRule: 'Under Article 124(4), a Judge can be removed ONLY after an address by each House of Parliament supported by a Special Majority (majority of total membership + 2/3rd of members present and voting) is presented to the President in the SAME SESSION on grounds of "proved misbehaviour or incapacity".',
        provisoOrClause: 'Article 124(4) Removal Procedure'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-124-1',
        examSource: 'UPSC CSE Prelims / Judicial Services',
        questionText: 'Under Article 124(4) of the Constitution of India, a Judge of the Supreme Court can be removed from office on which of the following grounds?',
        options: [
          { key: 'A', text: 'Violation of the Constitution only' },
          { key: 'B', text: 'Proved misbehaviour or incapacity' },
          { key: 'C', text: 'Bankruptcy, treason, or conviction of a felony' },
          { key: 'D', text: 'Discretion of the Chief Justice of India' }
        ],
        correctOption: 'B',
        examinerExplanation: 'Article 124(4) specifies exactly two grounds: "proved misbehaviour or incapacity". In contrast, the President is impeached for "violation of the Constitution" (Art 61).',
        trapWarning: 'Examiners swap the grounds: President = Violation of Constitution; SC/HC Judges = Proved misbehaviour or incapacity.'
      }
    ],
    mainsBlueprint: {
      questionTitle: 'Evolution of Judicial Appointments in India: From Executive Primacy to the Collegium and the NJAC Fallout',
      examSource: 'UPSC CSE Mains GS-2 / Judiciary Mains (20 Marks / 250 Words)',
      targetWordLimit: '250 Words',
      coreIssues: [
        'Interpretation of "Consultation" under Article 124(2)',
        'The Four Judges Cases and the creation of the Collegium',
        'Striking down of the 99th CAA (NJAC) and the doctrine of judicial primacy'
      ],
      step1Intro: 'Quote Article 124(2): Appointment by President in consultation with CJI. Contrast original intent (executive primacy with judicial checks) with post-1993 judicial supremacy.',
      step2DoctrinalCore: 'Trace the Four Judges Cases: (1) First Judges Case (SP Gupta 1981 - "consultation does not mean concurrence", executive has primacy), (2) Second Judges Case (1993 - reversed SP Gupta; consultation means CONCURRENCE; CJI + 2 senior judges), (3) Third Judges Case (1998 - 9-judge advisory opinion expanded Collegium to CJI + 4 senior-most judges), (4) Fourth Judges Case (NJAC Case 2015 - struck down 99th CAA and NJAC Act as violating judicial independence which is part of Basic Structure).',
      step3Precedents: 'Analyze the Fourth Judges Case (2015): SC held that presence of Law Minister and two eminent persons gave executive a veto, threatening basic structure. Justice Chelameswar’s dissenting voice calling for transparency and the pending Memorandum of Procedure (MoP).',
      step4Conclusion: 'Conclude that while judicial independence is non-negotiable, institutional credibility requires objective criteria, institutional secretariats, and transparency in appointments to prevent accusations of judicial opacity.',
      examinerScoringTips: [
        'Enumerate all Four Judges Cases chronologically with bench years.',
        'Distinguish between CJI + 2 (Second Judges) and CJI + 4 (Third Judges) collegium composition.'
      ]
    }
  },

  '136': {
    articleNumber: '136',
    articleTitle: 'Special Leave to Appeal by the Supreme Court (SLP)',
    yieldLevel: 'Ultra High-Yield',
    frequencyScore: 'Classic Civil & Judicial Services Question',
    traps: [
      {
        trapStatement: 'Special Leave Petition (SLP) under Article 136 is an ordinary regular right of appeal available to all litigants.',
        isFalse: true,
        whyItTraps: 'Litigants file SLPs routinely, so aspirants assume it is an ordinary appellate right.',
        correctRule: 'Article 136 is NOT an ordinary right of appeal; it is an EXTRAORDINARY, RESIDUAL, DISCRETIONARY POWER. The Supreme Court may grant or refuse leave at its sole discretion; no litigant can demand an SLP as a matter of right.',
        provisoOrClause: 'Article 136(1) Discretionary Nature',
        landmarkCase: 'Pritam Singh v. State (1950) & Durga Shankar Mehta (1954)'
      },
      {
        trapStatement: 'The Supreme Court can grant Special Leave to Appeal against any judgment, sentence or order passed by any court or tribunal, including Military Courts and Court-Martials.',
        isFalse: true,
        whyItTraps: 'Candidates overlook Article 136(2) which contains an explicit military exception.',
        correctRule: 'Under Article 136(2), the SLP power DOES NOT APPLY to any judgment, determination, sentence or order passed by ANY COURT OR TRIBUNAL CONSTITUTED BY OR UNDER ANY LAW RELATING TO THE ARMED FORCES (Court-Martials).',
        provisoOrClause: 'Article 136(2) Armed Forces Exclusion'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-136-1',
        examSource: 'State Judicial Services / UPSC CSE Prelims',
        questionText: 'Under Article 136(2) of the Constitution of India, the Supreme Court cannot grant Special Leave to Appeal against any judgment, sentence or order passed by:',
        options: [
          { key: 'A', text: 'An Administrative Tribunal (CAT)' },
          { key: 'B', text: 'A National Company Law Appellate Tribunal (NCLAT)' },
          { key: 'C', text: 'Any court or tribunal constituted by or under any law relating to the Armed Forces' },
          { key: 'D', text: 'A High Court exercising writ jurisdiction under Article 226' }
        ],
        correctOption: 'C',
        examinerExplanation: 'Article 136(2) expressly bars the Supreme Court from granting special leave against any determination of a court or tribunal constituted under armed forces law (Court-Martials).',
        trapWarning: 'Tribunals like CAT, NGT, NCLAT ARE subject to Art 136; only military tribunals/court-martials are excluded.'
      }
    ]
  },

  '142': {
    articleNumber: '142',
    articleTitle: 'Enforcement of Decrees and Orders of Supreme Court (Complete Justice)',
    yieldLevel: 'Ultra High-Yield',
    frequencyScore: 'Very High Frequency in UPSC Prelims & Mains GS-2 (Ayodhya, Bhopal Gas, Liquor Ban)',
    traps: [
      {
        trapStatement: 'The Supreme Court can use Article 142 to override express statutory provisions or disregard constitutional limitations.',
        isFalse: true,
        whyItTraps: 'Media often describes Art 142 as an "unlimited superpower".',
        correctRule: 'In Supreme Court Bar Association v. Union of India (1998), SC held that Art 142 CANNOT be used to supplant substantive statutory law or build a new edifice where the legislature has enacted an express prohibition. It supplements law, but cannot override statutory prohibitions.',
        provisoOrClause: 'Article 142(1) Scope and Limitations',
        landmarkCase: 'Supreme Court Bar Association (1998) & Union Carbide (1991)'
      },
      {
        trapStatement: 'Article 142 powers can be exercised by both the Supreme Court and the High Courts in India.',
        isFalse: true,
        whyItTraps: 'Candidates assume High Courts have equivalent plenary powers under Art 226.',
        correctRule: 'Article 142 power to do "complete justice" is EXCLUSIVE TO THE SUPREME COURT. High Courts DO NOT possess Article 142 powers (State of H.P. v. A Parent 1985).',
        provisoOrClause: 'Article 142 Supreme Court Exclusivity'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-142-1',
        examSource: 'UPSC CSE Prelims 2019',
        questionText: 'With reference to the Constitution of India, which one of the following statements is correct regarding Article 142?',
        options: [
          { key: 'A', text: 'It empowers the Supreme Court to pass such decree or make such order as is necessary for doing complete justice in any cause or matter pending before it.' },
          { key: 'B', text: 'It allows the High Courts to exercise extraordinary inherent powers to annul parliamentary statutes.' },
          { key: 'C', text: 'It authorizes the President to override decisions of the Supreme Court in national security matters.' },
          { key: 'D', text: 'It provides for the transfer of cases from one High Court to another.' }
        ],
        correctOption: 'A',
        examinerExplanation: 'Article 142(1) explicitly states: "The Supreme Court in the exercise of its jurisdiction may pass such decree or make such order as is necessary for doing complete justice in any cause or matter pending before it...".',
        trapWarning: 'Notice that Art 142 applies strictly to the Supreme Court, never High Courts.'
      }
    ]
  },

  '143': {
    articleNumber: '143',
    articleTitle: 'Power of President to Consult Supreme Court (Advisory Jurisdiction)',
    yieldLevel: 'Ultra High-Yield',
    frequencyScore: 'Classic Favorite in UPSC Prelims & State PSCs (7+ times)',
    traps: [
      {
        trapStatement: 'The Supreme Court is constitutionally bound to give its opinion on every matter referred to it by the President under Article 143.',
        isFalse: true,
        whyItTraps: 'Examiners exploit the distinction between Clause (1) (discretionary) and Clause (2) (mandatory).',
        correctRule: 'Under Article 143(1) (matters of public importance), the Supreme Court MAY, if it thinks fit, refuse to answer (e.g. Ram Janmabhoomi Reference 1994). Only under Article 143(2) (pre-constitutional treaties and agreements) is the Court BOUND to deliver an opinion.',
        provisoOrClause: 'Article 143(1) vs 143(2)',
        landmarkCase: 'In Re Special Courts Bill (1978) & M. Ismail Faruqui (Ayodhya 1994)'
      },
      {
        trapStatement: 'The advisory opinion delivered by the Supreme Court under Article 143 is binding on the President and all Indian courts.',
        isFalse: true,
        whyItTraps: 'Candidates confuse Art 141 ("law declared by SC is binding") with Art 143 (advisory opinion).',
        correctRule: 'An advisory opinion under Article 143 is ADVISORY ONLY and NOT BINDING on the President. Furthermore, it is not "law declared" within the meaning of Article 141, although it carries high persuasive value.',
        provisoOrClause: 'Article 143 Non-Binding Nature',
        landmarkCase: 'In Re Delhi Laws Act (1951) & Cauvery Water Disputes Tribunal (1993)'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-143-1',
        examSource: 'UPSC CSE Prelims / State Judicial Service',
        questionText: 'Under Article 143 of the Constitution of India, the opinion delivered by the Supreme Court on a presidential reference is:',
        options: [
          { key: 'A', text: 'Binding on the President and on all subordinate courts under Article 141' },
          { key: 'B', text: 'Binding on the President but not on the High Courts' },
          { key: 'C', text: 'Advisory in nature and not binding on the President' },
          { key: 'D', text: 'Subject to ratification by a joint sitting of Parliament' }
        ],
        correctOption: 'C',
        examinerExplanation: 'An advisory opinion under Art 143 is non-binding advice. The President is not bound to accept or execute it, and it does not operate as binding precedent under Article 141.',
        trapWarning: 'Do not confuse Article 141 binding judgments with Article 143 advisory opinions.'
      }
    ]
  },

  '200': {
    articleNumber: '200',
    articleTitle: 'Assent to Bills by the Governor',
    yieldLevel: 'Ultra High-Yield',
    frequencyScore: 'Very High Frequency (Recent Supreme Court Punjab & Tamil Nadu Governor Rulings 2023)',
    traps: [
      {
        trapStatement: 'A Governor can indefinitely sit on a Bill passed by the State Legislature without declaring assent, withholding assent, or returning it.',
        isFalse: true,
        whyItTraps: 'Governors previously withheld action; candidates assume the constitution permits pocket veto for Governors.',
        correctRule: 'In State of Punjab v. Principal Secretary to Governor (2023), SC held that the Governor CANNOT sit on a Bill indefinitely. The Governor MUST choose one of the options in Art 200 "as soon as possible". If the Governor withholds assent, he must return it to the House with a message.',
        provisoOrClause: 'Article 200 Proviso',
        landmarkCase: 'State of Punjab v. Principal Secretary to Governor (2023)'
      },
      {
        trapStatement: 'If the State Assembly passes a returned Bill again, the Governor can still reserve it for the consideration of the President.',
        isFalse: true,
        whyItTraps: 'Candidates confuse the initial presentation with re-passage.',
        correctRule: 'Under the first proviso to Article 200, if the Bill is passed again by the Legislature with or without amendment, the Governor "SHALL NOT WITHHOLD ASSENT THEREFROM". The Governor cannot then reserve it for the President.',
        provisoOrClause: 'Article 200 First Proviso'
      },
      {
        trapStatement: 'The Governor has absolute discretion to reserve ANY Bill for the President’s consideration.',
        isFalse: false,
        whyItTraps: 'Candidates forget the one MANDATORY reservation clause.',
        correctRule: 'Under the second proviso to Article 200, the Governor MUST MANDATORILY reserve any Bill which in his opinion so derogates from the powers of the High Court as to endanger its constitutional position. This is an obligatory, non-discretionary reservation.',
        provisoOrClause: 'Article 200 Second Proviso (Mandatory Reservation)'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-200-1',
        examSource: 'UPSC CSE Prelims / State PSC',
        questionText: 'Under the second proviso to Article 200 of the Constitution of India, the Governor is MANDATED to reserve which of the following Bills for the consideration of the President?',
        options: [
          { key: 'A', text: 'Any Bill affecting the financial stability of the State' },
          { key: 'B', text: 'Any Bill which in the opinion of the Governor derogates from the powers of the High Court so as to endanger its constitutional position' },
          { key: 'C', text: 'Any Bill amending the State Public Service Commission regulations' },
          { key: 'D', text: 'Any Bill dealing with land acquisition or agricultural income' }
        ],
        correctOption: 'B',
        examinerExplanation: 'The second proviso to Article 200 makes reservation MANDATORY (not discretionary) if a Bill would so derogate from the powers of the High Court as to endanger the position which that Court is designed to fill.',
        trapWarning: 'A classic bare act question testing the difference between discretionary reservation (Art 200 body) and mandatory reservation (Art 200 second proviso).'
      }
    ]
  },

  '213': {
    articleNumber: '213',
    articleTitle: 'Power of Governor to Promulgate Ordinances',
    yieldLevel: 'Ultra High-Yield',
    frequencyScore: 'Classic Judicial Services & UPSC Mains GS-2 Topic (DC Wadhwa)',
    traps: [
      {
        trapStatement: 'The Governor can re-promulgate an ordinance repeatedly without placing it before the State Legislature.',
        isFalse: true,
        whyItTraps: 'States historically engaged in serial re-promulgations.',
        correctRule: 'In D.C. Wadhwa (1987) and Krishna Kumar Singh (2017), a 7-judge bench held that repeated re-promulgation of ordinances without bringing them before the legislature is an EXTREME FRAUD ON THE CONSTITUTION and subversion of democratic legislative processes.',
        provisoOrClause: 'Article 213(2)(a)',
        landmarkCase: 'D.C. Wadhwa (1987) & Krishna Kumar Singh v. State of Bihar (2017)'
      },
      {
        trapStatement: 'The Governor can promulgate an ordinance without the President’s instruction even if the Bill would have required Presidential assent.',
        isFalse: true,
        whyItTraps: 'Candidates overlook the mandatory instructions proviso in Art 213(1).',
        correctRule: 'Under the proviso to Art 213(1), the Governor CANNOT promulgate an ordinance without INSTRUCTIONS FROM THE PRESIDENT if: (a) a Bill containing the same provisions would have required previous presidential sanction, or (b) the Governor would have deemed it necessary to reserve it for the President.',
        provisoOrClause: 'Article 213(1) Provisos (a), (b), (c)'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-213-1',
        examSource: 'UPSC CSE Prelims / BPSC Judicial',
        questionText: 'An ordinance promulgated by the Governor of a State under Article 213 shall cease to operate at the expiration of what period from the reassembly of the State Legislature?',
        options: [
          { key: 'A', text: '6 weeks' },
          { key: 'B', text: '6 months' },
          { key: 'C', text: '30 days' },
          { key: 'D', text: '14 days' }
        ],
        correctOption: 'A',
        examinerExplanation: 'Under Article 213(2)(a), an ordinance shall cease to operate at the expiration of SIX WEEKS from the reassembly of the Legislature (or earlier if disapproved by resolutions).',
        trapWarning: 'Examiners constantly confuse candidates between "6 weeks" (lifespan after reassembly) and "6 months" (maximum interval between legislative sessions).'
      }
    ]
  },

  '239AA': {
    articleNumber: '239AA',
    articleTitle: 'Special Provisions with Respect to Delhi',
    yieldLevel: 'Ultra High-Yield',
    frequencyScore: 'Very High Frequency in UPSC Prelims & Mains (GNCTD Rulings 2018, 2023 & CAA)',
    traps: [
      {
        trapStatement: 'The Legislative Assembly of the National Capital Territory of Delhi can make laws on all subjects in the State List (List II).',
        isFalse: true,
        whyItTraps: 'Delhi has an elected Assembly and Chief Minister, but 3 vital subjects are carved out.',
        correctRule: 'Under Article 239AA(3)(a), the Delhi Assembly CANNOT make laws on three specific State List entries: (1) Entry 1: Public Order, (2) Entry 2: Police, and (3) Entry 18: Land.',
        provisoOrClause: 'Article 239AA(3)(a)'
      },
      {
        trapStatement: 'The Lieutenant Governor of Delhi is bound by the aid and advice of the Council of Ministers on matters relating to Police, Public Order, and Land.',
        isFalse: true,
        whyItTraps: 'The LG is bound on matters within the Assembly’s competence, but exercises independent executive authority on excluded matters.',
        correctRule: 'On Police, Public Order, and Land (and services under the GNCTD Amendment Act 2023), executive power rests with the Union Government / Lieutenant Governor; the Delhi Council of Ministers has no aiding/advising authority on these subjects (GNCTD v. UOI 2018 & 2023).',
        provisoOrClause: 'Article 239AA(4)',
        landmarkCase: 'Govt. of NCT of Delhi v. Union of India (2018 & 2023)'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-239aa-1',
        examSource: 'UPSC CSE Prelims / DJS Prelims',
        questionText: 'Under Article 239AA of the Constitution of India, which of the following State List subjects are EXCLUDED from the legislative competence of the Legislative Assembly of Delhi?\n1. Public Order\n2. Police\n3. Public Health and Sanitation\n4. Land\nSelect the correct answer using the code below:',
        options: [
          { key: 'A', text: '1 and 2 only' },
          { key: 'B', text: '1, 2 and 4 only' },
          { key: 'C', text: '2 and 4 only' },
          { key: 'D', text: '1, 2, 3 and 4' }
        ],
        correctOption: 'B',
        examinerExplanation: 'Article 239AA(3)(a) excludes Entries 1 (Public Order), 2 (Police), and 18 (Land) of the State List. Public health (Entry 6) is within Delhi Assembly’s competence.',
        trapWarning: 'A frequent Prelims trap. Remember the excluded trio: Public Order, Police, Land.'
      }
    ]
  },

  '262': {
    articleNumber: '262',
    articleTitle: 'Adjudication of Disputes Relating to Waters of Inter-State Rivers',
    yieldLevel: 'High-Yield',
    frequencyScore: 'Tested in UPSC Prelims (Cauvery, Krishna, Godavari disputes)',
    traps: [
      {
        trapStatement: 'The Supreme Court of India possesses original jurisdiction under Article 131 to resolve all inter-state river water sharing disputes.',
        isFalse: true,
        whyItTraps: 'Art 131 covers federal disputes between states, but Art 262 explicitly creates an exception.',
        correctRule: 'Article 262(2) empowers Parliament by law to exclude the jurisdiction of the Supreme Court or any other court over inter-state river water disputes. Section 11 of the Inter-State River Water Disputes Act 1956 explicitly BARS the jurisdiction of the Supreme Court over matters referred to a Water Tribunal!',
        provisoOrClause: 'Article 262(2) & Sec 11 of ISRWD Act 1956',
        landmarkCase: 'Cauvery Water Disputes Tribunal (1993)'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-262-1',
        examSource: 'UPSC CSE Prelims',
        questionText: 'Under Article 262 of the Constitution of India, Parliament may by law provide that:',
        options: [
          { key: 'A', text: 'All river water disputes shall be decided by the President in consultation with the Chief Justice of India' },
          { key: 'B', text: 'Neither the Supreme Court nor any other court shall exercise jurisdiction in respect of any inter-state river water dispute' },
          { key: 'C', text: 'Inter-state river waters shall automatically become central property during drought' },
          { key: 'D', text: 'The National Green Tribunal shall have exclusive jurisdiction over water sharing' }
        ],
        correctOption: 'B',
        examinerExplanation: 'Article 262(2) allows Parliament to enact a statutory bar on the jurisdiction of the Supreme Court or any other court regarding the use, distribution, or control of inter-state waters.',
        trapWarning: 'Candidates assume Art 131 gives the Supreme Court inescapable jurisdiction. Art 262 is the explicit constitutional override.'
      }
    ]
  },

  '279A': {
    articleNumber: '279A',
    articleTitle: 'Goods and Services Tax Council (GST Council)',
    yieldLevel: 'Ultra High-Yield',
    frequencyScore: 'Tested in UPSC Prelims 2017, 2022 & Mains GS-2/GS-3',
    traps: [
      {
        trapStatement: 'In the GST Council, every State has equal voting power with the Central Government, and decisions are taken by a simple majority of members present.',
        isFalse: true,
        whyItTraps: 'Examiners exploit the weighted voting formula under Art 279A(9).',
        correctRule: 'The voting formula is STRICTLY WEIGHTED: (1) The Central Government has a weight of ONE-THIRD (1/3rd) of total votes cast; (2) All State Governments combined have a weight of TWO-THIRDS (2/3rds) of total votes cast. Every decision requires a majority of not less than THREE-FOURTHS (3/4ths / 75%) of the weighted votes of members present and voting!',
        provisoOrClause: 'Article 279A(9)(a) & (b) (101st CAA 2016)'
      },
      {
        trapStatement: 'The recommendations of the GST Council are legally binding on both the Union and the State Legislatures.',
        isFalse: true,
        whyItTraps: 'Candidates assumed GST Council recommendations were statutory commands.',
        correctRule: 'In Union of India v. Mohit Minerals (2022), the Supreme Court ruled that recommendations of the GST Council are NOT LEGALLY BINDING on Parliament or State Legislatures. They have only persuasive value; Indian federalism is a dialogue where both Union and States possess simultaneous power to legislate on GST under Article 246A.',
        provisoOrClause: 'Art. 279A Nature of Recommendations',
        landmarkCase: 'Union of India v. Mohit Minerals Pvt. Ltd. (2022)'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-279a-1',
        examSource: 'UPSC CSE Prelims / State PSC',
        questionText: 'Under Article 279A of the Constitution of India, every decision of the Goods and Services Tax Council shall be taken by a majority of not less than:',
        options: [
          { key: 'A', text: 'A simple majority of the members present and voting' },
          { key: 'B', text: 'Two-thirds (2/3rd) of the weighted votes of members present and voting' },
          { key: 'C', text: 'Three-fourths (3/4th) of the weighted votes of members present and voting' },
          { key: 'D', text: 'Unanimous consensus of all participating States' }
        ],
        correctOption: 'C',
        examinerExplanation: 'Article 279A(9) requires a 3/4th (75%) majority of the weighted votes of the members present and voting. The Central Government holds 1/3rd (33.33%) weight, meaning the Centre effectively has a veto on any proposal.',
        trapWarning: 'Remember the voting math: Centre = 33.33%, States = 66.67%, Passing threshold = 75%.'
      }
    ]
  },

  '311': {
    articleNumber: '311',
    articleTitle: 'Dismissal, Removal or Reduction in Rank of Civil Servants',
    yieldLevel: 'Ultra High-Yield',
    frequencyScore: 'UPSC Mains GS-2 Permanent Standard & State PSCs',
    traps: [
      {
        trapStatement: 'A civil servant can be dismissed by an authority subordinate to the one by which they were appointed.',
        isFalse: true,
        whyItTraps: 'Candidates miss the clear constitutional prohibition in Art 311(1).',
        correctRule: 'Article 311(1) expressly prohibits this: No civil servant shall be dismissed or removed by an authority SUBORDINATE TO THAT BY WHICH HE WAS APPOINTED.',
        provisoOrClause: 'Article 311(1)'
      },
      {
        trapStatement: 'A departmental enquiry is mandatory in all circumstances before dismissing a civil servant under Article 311.',
        isFalse: true,
        whyItTraps: 'The second proviso to Article 311(2) contains 3 powerful exceptions where NO ENQUIRY IS HELD.',
        correctRule: 'Under Article 311(2) Second Proviso, enquiry is dispensable in 3 cases: (a) where dismissal is on the ground of conduct leading to CONVICTION ON A CRIMINAL CHARGE; (b) where the disciplinary authority is satisfied in writing that it is NOT REASONABLY PRACTICABLE to hold an enquiry; (c) where the President or Governor is satisfied that in the INTEREST OF THE SECURITY OF THE STATE, an enquiry is not expedient.',
        provisoOrClause: 'Article 311(2) Second Proviso (a), (b), (c)',
        landmarkCase: 'Union of India v. Tulsiram Patel (1985)'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-311-1',
        examSource: 'UPSC CSE Prelims / Judicial Services',
        questionText: 'Under Article 311(2) of the Constitution of India, the requirement of holding an inquiry before dismissing or removing a civil servant does NOT apply in which of the following circumstances?',
        options: [
          { key: 'A', text: 'Where the civil servant is convicted on a criminal charge' },
          { key: 'B', text: 'Where the disciplinary authority records in writing that it is not reasonably practicable to hold such inquiry' },
          { key: 'C', text: 'Where the President or Governor is satisfied that in the interest of the security of the State it is not expedient to hold such inquiry' },
          { key: 'D', text: 'All of the above' }
        ],
        correctOption: 'D',
        examinerExplanation: 'The second proviso to Article 311(2) lays down these three exact clauses (a, b, and c) where the civil servant can be dismissed without any departmental inquiry whatsoever (Tulsiram Patel 1985).',
        trapWarning: 'A very common Prelims question where "All of the above" is the correct answer.'
      }
    ],
    mainsBlueprint: {
      questionTitle: 'Constitutional Safeguards for Civil Servants under Article 311: Balancing Officer Security and Public Interest',
      examSource: 'UPSC CSE Mains GS-2 (15 Marks / 250 Words)',
      targetWordLimit: '250 Words',
      coreIssues: [
        'Doctrine of Pleasure (Art 310) vs Constitutional Safeguards (Art 311)',
        'Scope of Article 311(1) and Article 311(2) inquiry',
        'Exceptions under the Second Proviso and the Tulsiram Patel doctrine'
      ],
      step1Intro: 'Introduce the British Doctrine of Pleasure embodied in Article 310 (holding office at the pleasure of the President/Governor), and how Article 311 restricts this arbitrary pleasure by creating twin procedural safeguards.',
      step2DoctrinalCore: 'Analyze the twin safeguards: (1) Art 311(1) - Protection against dismissal by subordinate authorities; (2) Art 311(2) - Right to a reasonable opportunity of being heard (natural justice: audi alteram partem). Note that the 42nd CAA removed the second opportunity to show cause against the proposed penalty.',
      step3Precedents: 'Examine the Second Proviso exceptions: (a) Criminal conviction, (b) Practicability, (c) Security of State. Cite Union of India v. Tulsiram Patel (1985 - Constitution Bench held that public interest and security of the State override the individual right of inquiry; however, subjective satisfaction can be reviewed on grounds of malafides).',
      step4Conclusion: 'Conclude that Article 311 establishes a constitutional equilibrium: safeguarding honest civil servants against political vendetta while ensuring corrupt or seditious officers cannot shelter behind protracted administrative procedural delays.',
      examinerScoringTips: [
        'Mention the interaction between Article 310 (Pleasure) and Article 311 (Restrictions).',
        'Cite the landmark Tulsiram Patel (1985) Constitution Bench ruling.'
      ]
    }
  },

  '365': {
    articleNumber: '365',
    articleTitle: 'Effect of Failure to Comply with, or to Give Effect to, Directions Given by the Union',
    yieldLevel: 'Ultra High-Yield',
    frequencyScore: 'Tested in UPSC Prelims (Union-State Federal Dynamics & President\'s Rule)',
    traps: [
      {
        trapStatement: 'President’s Rule under Article 356 can only be imposed if the Governor of the State submits an official report.',
        isFalse: true,
        whyItTraps: 'Candidates overlook "or otherwise" in Art 356 and the mandatory direction enforcement mechanism in Art 365.',
        correctRule: 'Under Article 365, where any State fails to comply with or give effect to ANY DIRECTION given by the Union Government (e.g. under Arts 256 or 257), it shall be LAWFUL for the President to hold that a situation has arisen in which the government of the State cannot be carried on in accordance with the Constitution, triggering President’s Rule under Article 356 even WITHOUT a Governor’s report!',
        provisoOrClause: 'Article 365 Direct Gateway to Article 356',
        landmarkCase: 'S.R. Bommai v. Union of India (1994)'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-365-1',
        examSource: 'UPSC CSE Prelims',
        questionText: 'Under Article 365 of the Constitution of India, if any State fails to comply with or give effect to any direction given in exercise of the executive power of the Union, what is the constitutional consequence?',
        options: [
          { key: 'A', text: 'The Supreme Court initiates criminal contempt proceedings against the Chief Minister' },
          { key: 'B', text: 'The Union Finance Ministry immediately freezes all central grant disbursements' },
          { key: 'C', text: 'It shall be lawful for the President to hold that a situation has arisen in which the government of the State cannot be carried on in accordance with the Constitution' },
          { key: 'D', text: 'The Rajya Sabha must pass a resolution declaring a financial breakdown' }
        ],
        correctOption: 'C',
        examinerExplanation: 'Article 365 creates a direct statutory presumption of constitutional machinery breakdown. If a state defies lawful Union executive directions, the President can immediately impose President’s Rule under Article 356.',
        trapWarning: 'Article 365 is the primary enforcement stick of the Union over the States in India’s quasi-federal structure.'
      }
    ]
  }
};
