export interface PrelimsTrap {
  trapStatement: string;
  isFalse: boolean; // true if the statement is a false trap, false if it's a surprising true fact
  whyItTraps: string;
  correctRule: string;
  provisoOrClause: string;
  landmarkCase?: string;
}

export interface PrelimsMcq {
  id: string;
  examSource: string;
  questionText: string;
  options: { key: 'A' | 'B' | 'C' | 'D'; text: string }[];
  correctOption: 'A' | 'B' | 'C' | 'D';
  examinerExplanation: string;
  trapWarning?: string;
}

export interface MainsBlueprint {
  questionTitle: string;
  examSource: string;
  targetWordLimit: string;
  coreIssues: string[];
  step1Intro: string;
  step2DoctrinalCore: string;
  step3Precedents: string;
  step4Conclusion: string;
  examinerScoringTips: string[];
}

export interface ArticleExamIntel {
  articleNumber: string;
  articleTitle: string;
  yieldLevel: 'Ultra High-Yield' | 'High-Yield' | 'Medium-Yield';
  frequencyScore: string;
  traps: PrelimsTrap[];
  prelimsMcqs: PrelimsMcq[];
  mainsBlueprint?: MainsBlueprint;
}

export const ARTICLE_EXAM_INTEL_REGISTRY: Record<string, ArticleExamIntel> = {
  '12': {
    articleNumber: '12',
    articleTitle: 'Definition of State',
    yieldLevel: 'Ultra High-Yield',
    frequencyScore: 'Appeared 9 times in UPSC & Judicial Services',
    traps: [
      {
        trapStatement: 'BCCI and private universities exercising public functions are automatically "State" under Article 12.',
        isFalse: true,
        whyItTraps: 'Candidates confuse Article 226 (amenability to High Court writs for public duties) with Article 12 (State for Part III Fundamental Rights).',
        correctRule: 'BCCI is NOT State under Art 12, though it is amenable to Art 226 writ jurisdiction because it performs a public function.',
        provisoOrClause: 'Art. 12 ("Other authorities")',
        landmarkCase: 'Zee Telefilms v. Union of India (2005) & Ajay Hasia (1981)'
      },
      {
        trapStatement: 'The Indian Judiciary is never considered "State" under Article 12 in any capacity.',
        isFalse: true,
        whyItTraps: 'Candidates overlook the distinction between judicial acts and administrative acts.',
        correctRule: 'When exercising administrative functions (e.g., staff appointments), the Judiciary IS State under Art 12. In judicial functions, writ of certiorari lies from superior to inferior courts, but courts are not State.',
        provisoOrClause: 'Art. 12 Judicial interpretation',
        landmarkCase: 'Naresh Shridhar Mirajkar (1967) & Rupa Ashok Hurra (2002)'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-12-1',
        examSource: 'UPSC CSE Prelims / DJS Prelims',
        questionText: 'Which of the following bodies is NOT "State" within the meaning of Article 12 of the Constitution of India?',
        options: [
          { key: 'A', text: 'Oil and Natural Gas Corporation (ONGC)' },
          { key: 'B', text: 'Board of Control for Cricket in India (BCCI)' },
          { key: 'C', text: 'Life Insurance Corporation of India (LIC)' },
          { key: 'D', text: 'Delhi Transport Corporation (DTC)' }
        ],
        correctOption: 'B',
        examinerExplanation: 'In Zee Telefilms v. UOI (2005), the 5-judge Constitution Bench held that BCCI is not financially, functionally, or administratively dominated by the government, and therefore is not "State" under Article 12.',
        trapWarning: 'Do not confuse Art 12 with Art 226. High Court can issue writ against BCCI, but Part III rights cannot be directly enforced under Art 32 against BCCI.'
      }
    ],
    mainsBlueprint: {
      questionTitle: 'Analyze the evolving jurisprudence of "other authorities" under Article 12 in the era of privatization and statutory outsourcing.',
      examSource: 'UPSC CSE Mains GS-2 / Law Optional (15 Marks / 250 Words)',
      targetWordLimit: '250 Words (15 Marks)',
      coreIssues: ['Functional and financial control test', 'Pradeep Kumar Biswas cumulative test', 'Public function vs State instrument'],
      step1Intro: 'Define Article 12. Highlight that the expression "other authorities" is open-ended and deliberately left flexible by the framers to guard fundamental rights against emerging public power.',
      step2DoctrinalCore: 'Trace doctrinal evolution: From restrictive ejusdem generis (University of Madras) to instrumentality test in RD Shetty (1979) and 6-factor Ajay Hasia test (1981). Explain Pradeep Kumar Biswas (2002) which replaced rigid formula with deep and pervasive state control.',
      step3Precedents: 'Cite: 1. RD Shetty (Airport Authority), 2. Ajay Hasia, 3. Pradeep Kumar Biswas (CSIR is State), 4. Zee Telefilms (BCCI is not State under Art 12).',
      step4Conclusion: 'Conclude that as the State retreats from direct enterprise into regulatory capitalism, courts must apply functional hybrid tests under Art 226 while maintaining stability under Art 12.',
      examinerScoringTips: ['Explicitly mention the 7-judge bench ruling in Pradeep Kumar Biswas.', 'Distinguish between Art 12 status and Art 226 writ amenability.']
    }
  },
  '14': {
    articleNumber: '14',
    articleTitle: 'Equality before Law & Equal Protection of the Laws',
    yieldLevel: 'Ultra High-Yield',
    frequencyScore: 'Guaranteed core: 15+ appearances across all major exams',
    traps: [
      {
        trapStatement: 'Equality before the law and Equal protection of the laws are identical concepts borrowed from British Common Law.',
        isFalse: true,
        whyItTraps: 'Candidates overlook the differing philosophical and constitutional lineages of the two expressions.',
        correctRule: '"Equality before the law" is negative concept (British Common Law), meaning absence of privilege. "Equal protection of the laws" is positive concept (US 14th Amendment), meaning equal treatment under equal circumstances.',
        provisoOrClause: 'Art. 14 clauses',
        landmarkCase: 'State of West Bengal v. Anwar Ali Sarkar (1952)'
      },
      {
        trapStatement: 'A plenary legislation enacted by Parliament can NEVER be struck down merely on the ground of "Manifest Arbitrariness".',
        isFalse: true,
        whyItTraps: 'Older judgments (McDowell 1996) said arbitrariness applies only to executive action, but modern law has reversed this.',
        correctRule: 'In Shayara Bano (2017) and Navtej Johar (2018), the Supreme Court definitively ruled that primary parliamentary legislation CAN be struck down for Manifest Arbitrariness under Article 14.',
        provisoOrClause: 'Art. 14 Arbitrariness Doctrine',
        landmarkCase: 'Shayara Bano (2017) & Joseph Shine (2018)'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-14-1',
        examSource: 'UPSC CSE Prelims / UP PCS-J Prelims',
        questionText: 'Under Article 14, a classification is constitutionally valid only if it satisfies which of the following two tests?',
        options: [
          { key: 'A', text: 'Executive discretion and parliamentary debate' },
          { key: 'B', text: 'Intelligible differentia and rational nexus to the legislative object' },
          { key: 'C', text: 'National interest and public order convenience' },
          { key: 'D', text: 'Historical necessity and presidential recommendation' }
        ],
        correctOption: 'B',
        examinerExplanation: 'The classical twin test of reasonable classification requires: (1) Intelligible differentia distinguishing those grouped together from others, and (2) Rational relation between differentia and object sought to be achieved.',
        trapWarning: 'Remember that while classification is the traditional test, the Royappa / Maneka Gandhi doctrine recognizes equality as an antithesis to arbitrariness.'
      }
    ],
    mainsBlueprint: {
      questionTitle: 'Evaluate the transition of Article 14 from the "reasonable classification" doctrine to "manifest arbitrariness" and substantive equality.',
      examSource: 'Judicial Services Mains / UPSC Law Optional (20 Marks / 300 Words)',
      targetWordLimit: '300 Words (20 Marks)',
      coreIssues: ['Anwar Ali Sarkar twin test', 'EP Royappa dynamic concept', 'Shayara Bano manifest arbitrariness', 'Substantive equality in Navtej Johar'],
      step1Intro: 'State that Article 14 embodies both negative equality (no arbitrary privilege) and positive equality (affirmative state duty). It is part of the Golden Triangle (Arts 14, 19, 21).',
      step2DoctrinalCore: 'Phase 1: Formal equality via Anwar Ali Sarkar (intelligible differentia + rational nexus). Phase 2: Royappa (1974) & Maneka Gandhi (1978) — Bhagwati J: "Equality is dynamic, an activist principle that cannot be cabined within traditional classification." Phase 3: Manifest arbitrariness (Shayara Bano 2017).',
      step3Precedents: 'Cite: Anwar Ali Sarkar (1952), EP Royappa (1974), Shayara Bano (2017 - Nariman J), Navtej Johar (2018 - Chandrachud J on substantive equality).',
      step4Conclusion: 'Conclude that Article 14 has transformed from a mathematical comparison into a guarantor of human dignity and substantive justice against capricious state actions.',
      examinerScoringTips: ['Must cite Nariman J in Shayara Bano for manifest arbitrariness.', 'Highlight the Golden Triangle relationship with Articles 19 and 21.']
    }
  },
  '19': {
    articleNumber: '19',
    articleTitle: 'Protection of Six Fundamental Freedoms',
    yieldLevel: 'Ultra High-Yield',
    frequencyScore: 'Core Prelims & Mains Staple (Appeared 14 times)',
    traps: [
      {
        trapStatement: 'Non-citizens and foreign tourists in India can enforce freedom of speech and expression under Article 19(1)(a).',
        isFalse: true,
        whyItTraps: 'Candidates assume speech freedom applies to all persons like Article 21.',
        correctRule: 'Article 19 rights are available EXCLUSIVELY to CITIZENS of India ("All citizens shall have the right to..."). Foreign nationals cannot claim Art 19.',
        provisoOrClause: 'Art. 19(1) opening words',
        landmarkCase: 'Hans Muller of Nurenburg v. Superintendent (1955)'
      },
      {
        trapStatement: 'The Right to Strike is a constitutionally protected Fundamental Right under Article 19(1)(c) (Freedom to form associations/unions).',
        isFalse: true,
        whyItTraps: 'Candidates equate the right to form a trade union with the right to declare a strike.',
        correctRule: 'The right to form associations/unions does NOT include the fundamental right to strike or declare lockouts.',
        provisoOrClause: 'Art. 19(1)(c)',
        landmarkCase: 'All India Bank Employees Association (1962) & TK Rangarajan v. Tamil Nadu (2002)'
      },
      {
        trapStatement: 'During a National Emergency declared under Article 352 on grounds of "Armed Rebellion", Article 19 is automatically suspended under Article 358.',
        isFalse: true,
        whyItTraps: 'Candidates forget the historic amendment made by the 44th CAA in 1978.',
        correctRule: 'Post-44th Amendment (1978), Article 19 is automatically suspended ONLY if emergency is declared for war or external aggression, NEVER for armed rebellion!',
        provisoOrClause: 'Art. 358(1) Proviso (44th CAA)',
        landmarkCase: 'Minerva Mills v. Union of India (1980)'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-19-1',
        examSource: 'UPSC CSE Prelims 2014 & 2017',
        questionText: 'Under Article 19(2) of the Constitution, which of the following is NOT an enumerated ground for imposing reasonable restrictions on Freedom of Speech?',
        options: [
          { key: 'A', text: 'Public order' },
          { key: 'B', text: 'Security of the State' },
          { key: 'C', text: 'Administrative convenience' },
          { key: 'D', text: 'Decency or morality' }
        ],
        correctOption: 'C',
        examinerExplanation: 'The 8 grounds in Art 19(2) are: Sovereignty & integrity of India, Security of the State, Friendly relations with foreign States, Public order, Decency or morality, Contempt of court, Defamation, and Incitement to an offence. "Administrative convenience" is NOT a ground.',
        trapWarning: 'Restrictions on Art 19(1)(a) can ONLY be justified on the exact 8 grounds listed in Art 19(2). Any other ground (like administrative convenience or budget) is unconstitutional per se.'
      }
    ],
    mainsBlueprint: {
      questionTitle: 'Examine the proportionality test applied by Indian constitutional courts when testing reasonable restrictions under Article 19(2).',
      examSource: 'UPSC CSE Mains GS-2 / DJS Mains (15 Marks / 250 Words)',
      targetWordLimit: '250 Words (15 Marks)',
      coreIssues: ['Chintaman Rao baseline', 'Modern 4-prong proportionality doctrine', 'Internet shutdowns & Anuradha Bhasin'],
      step1Intro: 'Define Art 19(1)(a) and the exhaustive nature of Art 19(2) grounds. Emphasize that restrictions must be "reasonable", not arbitrary or excessive.',
      step2DoctrinalCore: 'Explain Proportionality Test: 1. Legitimate State Aim, 2. Rational Connection, 3. Least Restrictive Measure (Necessity), 4. Balancing of impact on rights vs societal benefit (Modern South African / German test adopted in India).',
      step3Precedents: 'Cite: 1. Shreya Singhal (2015 - Sec 66A IT Act struck down), 2. Modern Dental College (2016 - 4-prong test), 3. Anuradha Bhasin (2020 - Internet suspension orders must satisfy proportionality).',
      step4Conclusion: 'Conclude that proportionality has shifted judicial review from assessing mere legislative competence to evaluating whether the state has chosen the least invasive means.',
      examinerScoringTips: ['Mention the 4 prongs of proportionality explicitly.', 'Must cite Anuradha Bhasin (2020) for free speech and internet access.']
    }
  },
  '20': {
    articleNumber: '20',
    articleTitle: 'Protection in respect of Conviction for Offences',
    yieldLevel: 'Ultra High-Yield',
    frequencyScore: 'Extremely high frequency in Judicial Services & Prelims (Appeared 11 times)',
    traps: [
      {
        trapStatement: 'Article 20(1) (Ex-post facto law) prohibits the retrospective application of civil liability, taxes, or preventive detention laws.',
        isFalse: true,
        whyItTraps: 'Candidates assume retrospective prohibition applies to all laws.',
        correctRule: 'Article 20(1) applies EXCLUSIVELY to criminal criminalization and penal punishments. Retrospective taxes, civil laws, or preventive detention orders are constitutionally permissible.',
        provisoOrClause: 'Art. 20(1)',
        landmarkCase: 'Kedar Nath v. State of West Bengal (1953) & Mohan Lal v. State of Rajasthan (2015)'
      },
      {
        trapStatement: 'Departmental inquiry or disciplinary action by an employer following a criminal court acquittal violates Double Jeopardy under Article 20(2).',
        isFalse: true,
        whyItTraps: 'Candidates conflate administrative disciplinary proceedings with criminal prosecution.',
        correctRule: 'Double Jeopardy under Art 20(2) requires prosecution and punishment before a "Court of Law or Judicial Tribunal". Departmental proceedings are NOT a judicial prosecution.',
        provisoOrClause: 'Art. 20(2)',
        landmarkCase: 'Maqbool Hussain (1953) & SA Venkataraman (1954)'
      },
      {
        trapStatement: 'Compulsory taking of finger impressions, handwriting samples, or blood samples from an accused violates Article 20(3) (Self-Incrimination).',
        isFalse: true,
        whyItTraps: 'Candidates confuse giving physical evidence with providing testimonial compulsion.',
        correctRule: 'Article 20(3) protects against "testimonial compulsion" (conveying personal knowledge). Giving physical measurements, DNA, handwriting, or fingerprints does NOT violate Art 20(3).',
        provisoOrClause: 'Art. 20(3)',
        landmarkCase: 'State of Bombay v. Kathi Kalu Oghad (1961 - 11 Judge Bench) & Selvi (2010)'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-20-1',
        examSource: 'UPSC CSE Prelims / MP Judiciary',
        questionText: 'Under Article 20(3) of the Indian Constitution, the protection against self-incrimination applies to:',
        options: [
          { key: 'A', text: 'Any person summoned as a witness in a civil dispute' },
          { key: 'B', text: 'A person accused of an offence against whom an FIR or complaint is registered' },
          { key: 'C', text: 'Customs officers interrogating a passenger under Customs Act' },
          { key: 'D', text: 'Any citizen appearing before an administrative inquiry committee' }
        ],
        correctOption: 'B',
        examinerExplanation: 'The protection under Art 20(3) is available only to a person "accused of an offence". A witness or person being interrogated under regulatory acts (customs, FERA) is not an accused until formal accusation is made.',
        trapWarning: 'Remember Selvi (2010): Involuntary Narco-analysis, polygraph, and brain-mapping violate Art 20(3) and Art 21.'
      }
    ]
  },
  '21': {
    articleNumber: '21',
    articleTitle: 'Protection of Life and Personal Liberty',
    yieldLevel: 'Ultra High-Yield',
    frequencyScore: 'Highest yielding article in Indian Constitutional Law (25+ appearances)',
    traps: [
      {
        trapStatement: 'The Indian Constitution explicitly contains the American expression "Due Process of Law" in Article 21.',
        isFalse: true,
        whyItTraps: 'The Supreme Court read substantive due process into Art 21, but the verbatim statutory text uses "Procedure established by law".',
        correctRule: 'The statutory text uses "Procedure established by law" (borrowed from Art 31 of 1946 Japanese Constitution). However, in Maneka Gandhi (1978), the Supreme Court interpreted it to mean procedure must be "just, fair, and reasonable", effectively importing substantive due process.',
        provisoOrClause: 'Art. 21 statutory text',
        landmarkCase: 'AK Gopalan (1950) overruled by Maneka Gandhi (1978)'
      },
      {
        trapStatement: 'Article 21 is available only to citizens of India.',
        isFalse: true,
        whyItTraps: 'Confusing Article 19 (citizens only) with Article 21 (all persons).',
        correctRule: 'Article 21 protects "No PERSON shall be deprived...". It applies to citizens, foreign tourists, refugees, and undertrial prisoners alike.',
        provisoOrClause: 'Art. 21 ("No person")',
        landmarkCase: 'Chairman, Railway Board v. Chandrima Das (2000)'
      },
      {
        trapStatement: 'Article 21 can be suspended during a Proclamation of Financial Emergency or National Emergency.',
        isFalse: true,
        whyItTraps: 'Pre-1978 ADM Jabalpur ruling confusion.',
        correctRule: 'Post-44th Constitutional Amendment (1978), the enforcement of Articles 20 and 21 can NEVER be suspended under Article 359, even during war or external aggression.',
        provisoOrClause: 'Art. 359(1) as amended by 44th CAA',
        landmarkCase: 'Puttaswamy (2017) & ADM Jabalpur (1976)'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-21-1',
        examSource: 'UPSC CSE Prelims 2018 & 2021',
        questionText: 'Which one of the following rights is protected under Article 21 of the Constitution of India?',
        options: [
          { key: 'A', text: 'Right to strike and boycott work' },
          { key: 'B', text: 'Right to privacy and bodily autonomy' },
          { key: 'C', text: 'Right to acquire and hold property as a fundamental right' },
          { key: 'D', text: 'Right of foreign nationals to settle permanently anywhere in India' }
        ],
        correctOption: 'B',
        examinerExplanation: 'In KS Puttaswamy v. UOI (2017 - 9 Judge Bench), the Supreme Court unanimously held that the Right to Privacy is an intrinsic part of the right to life and personal liberty under Article 21.',
        trapWarning: 'Right to strike is not even an Art 19 right, property is under 300A, and settling permanently is restricted to citizens under 19(1)(e).'
      }
    ],
    mainsBlueprint: {
      questionTitle: '"Article 21 has evolved from a statutory guarantee against executive tyranny into a charter of human dignity." Discuss with reference to landmark judicial decisions.',
      examSource: 'UPSC CSE Mains GS-2 / UP PCS-J Mains (20 Marks / 300 Words)',
      targetWordLimit: '300 Words (20 Marks)',
      coreIssues: ['AK Gopalan literalism', 'Maneka Gandhi golden triangle', 'Substantive due process', 'Expansion into socio-economic rights'],
      step1Intro: 'Quote Article 21 verbatim. Note that while Dr. Ambedkar accepted B.N. Rau’s formula "procedure established by law", the judiciary has transformed it into a substantive fountain of fundamental human rights.',
      step2DoctrinalCore: 'Contrast AK Gopalan (1950 - silo theory, procedure meant any enacted law) with Maneka Gandhi (1978 - procedural and substantive due process: procedure must be just, fair, and reasonable, tested against Arts 14 and 19).',
      step3Precedents: 'Enumerate expanded facets: 1. Clean Environment (Subhash Kumar / MC Mehta), 2. Livelihood (Olga Tellis), 3. Free Legal Aid (Hussainara Khatoon), 4. Privacy (Puttaswamy 2017), 5. Dignified Dying (Common Cause 2018).',
      step4Conclusion: 'Conclude that Article 21 serves as the constitutional anchor of transformative constitutionalism, ensuring life means more than mere animal existence.',
      examinerScoringTips: ['Mention the phrase "mere animal existence vs life with dignity" (Francis Coralie Mullin).', 'Cite Puttaswamy 9-judge bench explicitly.']
    }
  },
  '32': {
    articleNumber: '32',
    articleTitle: 'Remedies for enforcement of Fundamental Rights (Constitutional Writs)',
    yieldLevel: 'Ultra High-Yield',
    frequencyScore: 'Appeared in almost every judicial prelims and UPSC exam',
    traps: [
      {
        trapStatement: 'The Supreme Court can refuse to hear an Article 32 petition if an equally efficacious alternative remedy exists in the High Court under Article 226.',
        isFalse: true,
        whyItTraps: 'Candidates confuse High Court discretionary writ jurisdiction with Supreme Court fundamental right remedy.',
        correctRule: 'Article 32 is ITSELF a Fundamental Right (guaranteed in Part III). The Supreme Court is the protector and guarantor of fundamental rights and CANNOT refuse relief solely on alternative remedy grounds.',
        provisoOrClause: 'Art. 32(1)',
        landmarkCase: 'Romesh Thappar (1950) & Daryao v. State of UP (1961)'
      },
      {
        trapStatement: 'An Article 32 petition can be filed directly to challenge an ordinary infringement of legal, contract, or statutory rights.',
        isFalse: true,
        whyItTraps: 'Candidates confuse Article 32 with Article 226.',
        correctRule: 'Article 32 lies EXCLUSIVELY for the enforcement of Part III Fundamental Rights. For ordinary statutory, contractual, or other legal rights, only Article 226 (High Court) lies.',
        provisoOrClause: 'Art. 32(1) & (2)',
        landmarkCase: 'Ramdas Shenoy v. Chief Officers (1974)'
      },
      {
        trapStatement: 'The Supreme Court can issue a writ of Quo Warranto only upon a petition filed by an aggrieved party whose personal legal right has been violated.',
        isFalse: true,
        whyItTraps: 'Candidates assume traditional locus standi applies to all 5 writs.',
        correctRule: 'Habeas Corpus and Quo Warranto are major exceptions to locus standi: ANY member of the public can petition for Quo Warranto against an usurper of public office without proving personal grievance.',
        provisoOrClause: 'Art. 32(2) Quo Warranto',
        landmarkCase: 'GD Karkare v. TL Shevde (1952) & BR Kapur (2001)'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-32-1',
        examSource: 'UPSC CSE Prelims 2016 & 2020',
        questionText: 'Which of the following statements correctly distinguishes Article 32 from Article 226?',
        options: [
          { key: 'A', text: 'Article 32 is wider than Article 226 because Supreme Court has all-India jurisdiction' },
          { key: 'B', text: 'Article 226 is wider in subject-matter because High Courts can issue writs for fundamental rights as well as ordinary legal rights' },
          { key: 'C', text: 'Article 32 can be invoked for ordinary statutory violations whereas Article 226 cannot' },
          { key: 'D', text: 'Article 32 is discretionary whereas Article 226 is a mandatory fundamental right' }
        ],
        correctOption: 'B',
        examinerExplanation: 'While the territorial reach of SC is wider, the subject-matter jurisdiction of High Courts under Art 226 is wider because it covers "for the enforcement of any of the rights conferred by Part III AND for any other purpose" (ordinary legal/statutory rights).',
        trapWarning: 'Art 32 is a Fundamental Right (mandatory); Art 226 is a constitutional power (discretionary).'
      }
    ]
  },
  '72': {
    articleNumber: '72',
    articleTitle: 'Pardoning Power of the President',
    yieldLevel: 'Ultra High-Yield',
    frequencyScore: 'Classic Prelims & Mains trap item (Appeared 10+ times)',
    traps: [
      {
        trapStatement: 'The President exercises pardoning power under Article 72 in personal discretion without the aid and advice of the Council of Ministers.',
        isFalse: true,
        whyItTraps: 'Candidates perceive clemency as an imperial prerogative of the head of state.',
        correctRule: 'The President DOES NOT act in personal discretion. Clemency is exercised strictly on the binding aid and advice of the Union Home Ministry / Council of Ministers under Article 74.',
        provisoOrClause: 'Art. 72 read with Art. 74',
        landmarkCase: 'Maru Ram (1980) & Kehar Singh (1989)'
      },
      {
        trapStatement: 'The Governor of a State has co-extensive power with the President to pardon a death sentence under Article 161.',
        isFalse: true,
        whyItTraps: 'A classic examiner trap. Governors can commute, but cannot pardon death.',
        correctRule: 'The Governor CANNOT grant a full PARDON for a death sentence. The power to pardon death belongs EXCLUSIVELY to the President under Article 72. Governor can only suspend, remit, or commute a death penalty.',
        provisoOrClause: 'Art. 72(1)(c) vs Art. 161',
        landmarkCase: 'Maru Ram (1980) & Shatrughan Chauhan (2014)'
      },
      {
        trapStatement: 'Presidential decisions under Article 72 are completely immune from judicial review under any circumstances.',
        isFalse: true,
        whyItTraps: 'Clemency is executive grace, so candidates assume it is non-justiciable.',
        correctRule: 'Presidential pardons ARE subject to limited judicial review on grounds of: non-application of mind, mala fides, extraneous considerations, or unexplained inordinate delay (which can commute death to life imprisonment).',
        provisoOrClause: 'Art. 72 Judicial Review',
        landmarkCase: 'Epuru Sudhakar (2006) & Shatrughan Chauhan (2014)'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-72-1',
        examSource: 'UPSC CSE Prelims / DJS Prelims',
        questionText: 'Under Article 72, which of the following is EXCLUSIVELY within the pardoning jurisdiction of the President and NOT available to the Governor under Article 161?',
        options: [
          { key: 'A', text: 'Power to commute a life sentence' },
          { key: 'B', text: 'Power to grant pardon in respect of punishment by a Court Martial' },
          { key: 'C', text: 'Power to remit a sentence of rigorous imprisonment' },
          { key: 'D', text: 'Power to grant reprieve in pregnancy cases' }
        ],
        correctOption: 'B',
        examinerExplanation: 'Only the President has the power to grant pardon, reprieve, respite, or remission in cases of punishment by a Court Martial (Art 72(1)(a)). Governor has zero clemency power over Armed Forces / Court Martial convictions.',
        trapWarning: 'Also remember: Full pardon of death sentence is exclusively with President (Art 72(1)(c)).'
      }
    ]
  },
  '108': {
    articleNumber: '108',
    articleTitle: 'Joint Sitting of Both Houses of Parliament',
    yieldLevel: 'Ultra High-Yield',
    frequencyScore: 'Classic Prelims elimination staple',
    traps: [
      {
        trapStatement: 'A Joint Sitting under Article 108 is presided over by the Chairman of the Rajya Sabha (Vice-President).',
        isFalse: true,
        whyItTraps: 'Candidates think VP is senior in precedence, so VP should preside.',
        correctRule: 'The Chairman of Rajya Sabha NEVER presides over a Joint Sitting because the VP is NOT a member of either House! Under Art 118(4), the SPEAKER of Lok Sabha presides (or Deputy Speaker, or Deputy Chairman of RS in succession).',
        provisoOrClause: 'Art. 118(4) & Art. 108',
        landmarkCase: 'Constitutional Parliamentary Rules'
      },
      {
        trapStatement: 'A Joint Sitting can be convened to break a legislative deadlock on a Constitution Amendment Bill.',
        isFalse: true,
        whyItTraps: 'Candidates confuse Ordinary Bills with Amendment Bills.',
        correctRule: 'There is NO provision for a Joint Sitting for Constitution Amendment Bills (Art. 368 requires separate special majority in each house) or Money Bills (Art. 109/110). It applies ONLY to Ordinary & Financial Bills.',
        provisoOrClause: 'Art. 108 & Art. 368',
        landmarkCase: 'Shankari Prasad (1951)'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-108-1',
        examSource: 'UPSC CSE Prelims 2012 & 2015',
        questionText: 'A deadlock between the Lok Sabha and the Rajya Sabha calls for a Joint Sitting of Parliament under Article 108 during the passage of:',
        options: [
          { key: 'A', text: 'Ordinary Legislation only' },
          { key: 'B', text: 'Money Bill only' },
          { key: 'C', text: 'Constitution Amendment Bill only' },
          { key: 'D', text: 'Both Ordinary Legislation and Constitution Amendment Bill' }
        ],
        correctOption: 'A',
        examinerExplanation: 'Joint sitting under Article 108 is available ONLY for Ordinary Bills (and Financial Bills Type I & II). It cannot be summoned for Money Bills (where Lok Sabha has override power) or Constitution Amendment Bills (which must be passed separately by each House).',
        trapWarning: 'Joint sitting has only been held 3 times in Indian history: Dowry Prohibition (1961), Banking Service Commission Repeal (1978), and POTA (2002).'
      }
    ]
  },
  '110': {
    articleNumber: '110',
    articleTitle: 'Definition of "Money Bills"',
    yieldLevel: 'Ultra High-Yield',
    frequencyScore: 'High-yield Prelims MCQ staple (Aadhaar / Electoral Bonds context)',
    traps: [
      {
        trapStatement: 'A bill dealing with the imposition or increase of local license fees and fines by municipal corporations is classified as a Money Bill.',
        isFalse: true,
        whyItTraps: 'Candidates see "fees and money" and mark Money Bill.',
        correctRule: 'Article 110(2) explicitly provides that a bill shall NOT be deemed to be a Money Bill by reason only that it provides for the imposition of fines, pecuniary penalties, or local license fees.',
        provisoOrClause: 'Art. 110(2)',
        landmarkCase: 'Aadhaar Judgment (Puttaswamy II 2018)'
      },
      {
        trapStatement: 'The Speaker’s certificate endorsing a bill as a Money Bill is conclusive and completely immune from judicial review in the Supreme Court.',
        isFalse: true,
        whyItTraps: 'Article 110(3) says the decision of Speaker is final, but finality does not oust judicial review.',
        correctRule: 'While Speaker has primacy, in the Aadhaar Case (Puttaswamy 2018) and Rojer Mathew (2019), the Supreme Court ruled that the Speaker’s certification of a Money Bill is subject to judicial review if it violates constitutional provisions.',
        provisoOrClause: 'Art. 110(3) & Art. 122',
        landmarkCase: 'Puttaswamy (Aadhaar 2018) & Rojer Mathew (2019)'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-110-1',
        examSource: 'UPSC CSE Prelims 2018',
        questionText: 'Regarding a Money Bill, which of the following statements is NOT correct?',
        options: [
          { key: 'A', text: 'A bill shall be deemed to be a Money Bill if it contains only provisions dealing with the imposition, abolition, remission, alteration, or regulation of any tax' },
          { key: 'B', text: 'A Money Bill has provisions for the custody of the Consolidated Fund of India or the Contingency Fund of India' },
          { key: 'C', text: 'A Money Bill can be introduced in either House of Parliament' },
          { key: 'D', text: 'A Money Bill is certified by the Speaker of the Lok Sabha' }
        ],
        correctOption: 'C',
        examinerExplanation: 'Under Article 109(1), a Money Bill can ONLY be introduced in the Lok Sabha upon the prior recommendation of the President. It can NEVER be introduced in the Rajya Sabha.',
        trapWarning: 'Rajya Sabha has only 14 days to make recommendations on a Money Bill, which Lok Sabha may accept or reject.'
      }
    ]
  },
  '123': {
    articleNumber: '123',
    articleTitle: 'Ordinance Making Power of the President',
    yieldLevel: 'Ultra High-Yield',
    frequencyScore: 'Classic judicial services & UPSC question (Appeared 12 times)',
    traps: [
      {
        trapStatement: 'The President can promulgate an ordinance to amend the Constitution of India during recess of Parliament.',
        isFalse: true,
        whyItTraps: 'Candidates know an ordinance has "same force and effect as an Act of Parliament" and assume Parliament can amend the constitution, so an ordinance can too.',
        correctRule: 'An Ordinance CANNOT amend the Constitution. Article 368 mandates that constitutional amendments must be passed by Parliament through the constituent legislative process. Ordinance power is co-extensive only with ordinary legislative powers.',
        provisoOrClause: 'Art. 123(2) & Art. 368',
        landmarkCase: 'AK Roy v. Union of India (1982)'
      },
      {
        trapStatement: 'An ordinance remains valid indefinitely until both Houses of Parliament vote to pass a resolution disapproving it.',
        isFalse: true,
        whyItTraps: 'Candidates misunderstand the automatic expiry clock.',
        correctRule: 'An ordinance automatically lapses SIX WEEKS from the reassembly of Parliament, unless approved earlier. Maximum life without parliamentary approval is 6 months (gap between sessions) + 6 weeks = 7.5 months.',
        provisoOrClause: 'Art. 123(2)(a)',
        landmarkCase: 'DC Wadhwa v. State of Bihar (1987)'
      },
      {
        trapStatement: 'Re-promulgation of ordinances without placing them before the legislature is a valid constitutional convention during ongoing political necessity.',
        isFalse: true,
        whyItTraps: 'State governments frequently re-promulgate ordinances, confusing actual practice with legality.',
        correctRule: 'Repeated re-promulgation of ordinances without placing them before the legislature is a FRAUD ON THE CONSTITUTION and subversion of democratic legislative process.',
        provisoOrClause: 'Art. 123 & Art. 213',
        landmarkCase: 'DC Wadhwa (1987) & Krishna Kumar Singh v. State of Bihar (2017 - 7 Judge Bench)'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-123-1',
        examSource: 'UPSC CSE Prelims / UP PCS-J',
        questionText: 'Under Article 123, what is the maximum duration an Ordinance promulgated by the President can remain in force without being approved by Parliament?',
        options: [
          { key: 'A', text: '6 weeks' },
          { key: 'B', text: '6 months' },
          { key: 'C', text: '6 months and 6 weeks' },
          { key: 'D', text: '1 year' }
        ],
        correctOption: 'C',
        examinerExplanation: 'Under Article 85, the maximum permitted gap between two parliamentary sessions is 6 months. Once Parliament reassembles, the ordinance lapses after 6 weeks (Art 123(2)(a)). Thus, maximum theoretical lifespan is 6 months + 6 weeks = ~7.5 months.',
        trapWarning: '6 weeks runs from the date of reassembly, NOT from the date of promulgation!'
      }
    ],
    mainsBlueprint: {
      questionTitle: '"The ordinance-making power was conceived as an emergency life-raft, not a parallel legislative cruise liner." Critically examine the abuse of executive ordinances in light of D.C. Wadhwa and Krishna Kumar Singh.',
      examSource: 'UPSC CSE Mains GS-2 / DJS Mains (15 Marks / 250 Words)',
      targetWordLimit: '250 Words (15 Marks)',
      coreIssues: ['Executive law-making vs Parliamentary supremacy', 'Re-promulgation as fraud on Constitution', 'Legal effect of lapsed ordinances'],
      step1Intro: 'Quote Article 123. Highlight that ordinance power is an extraordinary executive power conditioned upon: (1) Parliament in recess, and (2) Satisfaction of immediate action necessity.',
      step2DoctrinalCore: 'Discuss abuse: Executive bypassing legislative scrutiny. In D.C. Wadhwa (1987), Bihar promulgated 256 ordinances over 14 years without legislative enactment. Re-promulgation creates an "executive rule by decree".',
      step3Precedents: 'Cite: 1. R.C. Cooper (1970 - President satisfaction is justiciable), 2. A.K. Roy (1982), 3. D.C. Wadhwa (1987 - fraud on constitution), 4. Krishna Kumar Singh (2017 - 7-Judge bench holding failure to place ordinance before legislature is fatal; rights created by expired ordinance do not survive indefinitely).',
      step4Conclusion: 'Conclude that legislative supremacy is a basic feature; ordinances must remain strictly confined to emergent contingencies where waiting for Parliament is catastrophic.',
      examinerScoringTips: ['Must cite the 7-judge bench ruling in Krishna Kumar Singh (2017).', 'Use the phrase "fraud on the Constitution" coined in D.C. Wadhwa.']
    }
  },
  '148': {
    articleNumber: '148',
    articleTitle: 'Comptroller and Auditor-General of India (CAG)',
    yieldLevel: 'Ultra High-Yield',
    frequencyScore: 'Guaranteed Prelims staple on Constitutional Bodies',
    traps: [
      {
        trapStatement: 'The CAG holds office during the pleasure of the President of India.',
        isFalse: true,
        whyItTraps: 'Candidates assume all senior constitutional functionaries appointed by President serve at pleasure.',
        correctRule: 'CAG has constitutional tenure security! CAG can be removed ONLY in like manner and on the like grounds as a Judge of the Supreme Court (proved misbehaviour or incapacity via parliamentary address under Art 124(4)).',
        provisoOrClause: 'Art. 148(1)',
        landmarkCase: 'Constitutional Body Safeguard'
      },
      {
        trapStatement: 'After demitting office, the CAG is eligible for appointment as Governor of a State or Chairman of UPSC.',
        isFalse: true,
        whyItTraps: 'Candidates confuse CAG with other officials who have partial eligibility.',
        correctRule: 'Article 148(4) creates an ABSOLUTE BAR: The CAG shall NOT be eligible for further office either under the Government of India or under the Government of any State after ceasing to hold office.',
        provisoOrClause: 'Art. 148(4)',
        landmarkCase: 'Constitutional Independence Mandate'
      },
      {
        trapStatement: 'The administrative expenses of the office of the CAG are subject to the annual vote of Parliament in the Union Budget.',
        isFalse: true,
        whyItTraps: 'Candidates overlook the "charged expenditure" constitutional protection.',
        correctRule: 'Under Art 148(6), all administrative expenses, salaries, and pensions of CAG and staff are CHARGED upon the Consolidated Fund of India and are non-votable by Parliament.',
        provisoOrClause: 'Art. 148(6)',
        landmarkCase: 'Consolidated Fund Protection'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-148-1',
        examSource: 'UPSC CSE Prelims 2016 & 2019',
        questionText: 'Which of the following statements regarding the Comptroller and Auditor General of India (CAG) is/are correct?\n1. CAG is appointed by the President by warrant under his hand and seal.\n2. CAG can be removed from office on the grounds and manner as a Judge of the Supreme Court.\n3. CAG is eligible for further office under the Government of India after retirement.',
        options: [
          { key: 'A', text: '1 and 2 only' },
          { key: 'B', text: '2 and 3 only' },
          { key: 'C', text: '1 and 3 only' },
          { key: 'D', text: '1, 2 and 3' }
        ],
        correctOption: 'A',
        examinerExplanation: 'Statements 1 and 2 are correct under Art 148(1). Statement 3 is false because Art 148(4) strictly debars CAG from any further government appointment.',
        trapWarning: 'Remember tenure: 6 years or up to 65 years of age, whichever is earlier.'
      }
    ]
  },
  '226': {
    articleNumber: '226',
    articleTitle: 'Power of High Courts to issue certain Writs',
    yieldLevel: 'Ultra High-Yield',
    frequencyScore: 'Appeared in all State Judicial Service Exams & UPSC',
    traps: [
      {
        trapStatement: 'Article 226 is narrower in scope than Article 32 in every respect because High Courts are subordinate to the Supreme Court.',
        isFalse: true,
        whyItTraps: 'Candidates equate judicial hierarchy with writ scope.',
        correctRule: 'Subject-matter scope of Article 226 is BROADER than Article 32! While Art 32 lies ONLY for Fundamental Rights, Art 226 lies for Fundamental Rights AND "for any other purpose" (ordinary statutory/legal rights).',
        provisoOrClause: 'Art. 226(1) ("and for any other purpose")',
        landmarkCase: 'Chandrachud CJ in Fertilizer Corporation Kamgar Union (1981)'
      },
      {
        trapStatement: 'A High Court can issue a writ to an authority located outside its territorial jurisdiction under no circumstances.',
        isFalse: true,
        whyItTraps: 'Candidates overlook the 15th Constitutional Amendment (1963) which added clause (2).',
        correctRule: 'Under Article 226(2), a High Court CAN issue writs to an authority outside its territorial jurisdiction if the CAUSE OF ACTION, wholly or in part, arises within its territorial jurisdiction.',
        provisoOrClause: 'Art. 226(2) (15th CAA)',
        landmarkCase: 'Navinchandra N. Majithia v. State of Maharashtra (2000)'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-226-1',
        examSource: 'Judicial Services Prelims / UPSC',
        questionText: 'Under Article 226 of the Constitution of India, High Courts can issue writs for the enforcement of:',
        options: [
          { key: 'A', text: 'Fundamental Rights only' },
          { key: 'B', text: 'Fundamental Rights as well as ordinary Legal Rights' },
          { key: 'C', text: 'Directive Principles of State Policy only' },
          { key: 'D', text: 'International Treaties only' }
        ],
        correctOption: 'B',
        examinerExplanation: 'The words "and for any other purpose" in Art 226(1) empower High Courts to issue writs for the enforcement of common law rights, statutory rights, and legal rights, in addition to Fundamental Rights.',
        trapWarning: 'However, unlike Art 32 which is a Fundamental Right itself, remedy under Art 226 is discretionary.'
      }
    ]
  },
  '280': {
    articleNumber: '280',
    articleTitle: 'Finance Commission',
    yieldLevel: 'Ultra High-Yield',
    frequencyScore: 'Classic Prelims topic (Appeared 11 times)',
    traps: [
      {
        trapStatement: 'The recommendations made by the Finance Commission under Article 280 are constitutionally binding on the Central Government.',
        isFalse: true,
        whyItTraps: 'Candidates assume recommendations of a constitutional body carry statutory binding force.',
        correctRule: 'Recommendations of the Finance Commission are ADVISORY IN NATURE only. The Constitution nowhere declares them to be binding, although by convention governments accept major devolution formulas.',
        provisoOrClause: 'Art. 280 & Art. 281',
        landmarkCase: 'State of Karnataka v. Union of India (1977)'
      },
      {
        trapStatement: 'The Finance Commission is a permanent standing body that functions continuously like the Election Commission.',
        isFalse: true,
        whyItTraps: 'Candidates confuse permanent bodies with periodic quasi-judicial commissions.',
        correctRule: 'The Finance Commission is a QUINQUENNIAL (intermittent) body constituted by the President every fifth year (or earlier as needed). It dissolves once its report is submitted.',
        provisoOrClause: 'Art. 280(1)',
        landmarkCase: 'Constitutional Mandate'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-280-1',
        examSource: 'UPSC CSE Prelims 2011 & 2015',
        questionText: 'With reference to the Finance Commission of India, which of the following statements is correct?',
        options: [
          { key: 'A', text: 'It encourages the inflow of foreign capital for infrastructure development' },
          { key: 'B', text: 'It facilitates proper distribution of finances among the Public Sector Undertakings' },
          { key: 'C', text: 'It ensures transparency in financial administration of autonomous bodies' },
          { key: 'D', text: 'It recommends the distribution of net proceeds of taxes between Union and States and principles governing grants-in-aid' }
        ],
        correctOption: 'D',
        examinerExplanation: 'Under Article 280(3), the core mandate is: (a) distribution of net tax proceeds between Centre and States (vertical) and among States (horizontal), and (b) principles governing grants-in-aid under Art 275.',
        trapWarning: 'FC has 1 Chairman + 4 other members appointed by President, with qualifications determined by Parliament via Finance Commission Act 1951.'
      }
    ]
  },
  '324': {
    articleNumber: '324',
    articleTitle: 'Superintendence, direction and control of Elections (Election Commission)',
    yieldLevel: 'Ultra High-Yield',
    frequencyScore: 'Huge contemporary focus (Anoop Baranwal 2023 / CEC Act 2023)',
    traps: [
      {
        trapStatement: 'Other Election Commissioners (ECs) can be removed from office only in like manner and on like grounds as a Judge of the Supreme Court, exactly like the Chief Election Commissioner (CEC).',
        isFalse: true,
        whyItTraps: 'The single most common Prelims trap on Election Commission.',
        correctRule: 'Under Article 324(5) Proviso, ONLY the CEC has judge-like removal protection. Other Election Commissioners can be removed by the President ON THE RECOMMENDATION OF THE CEC without parliamentary impeachment!',
        provisoOrClause: 'Art. 324(5) Second Proviso',
        landmarkCase: 'TN Seshan v. Union of India (1995)'
      },
      {
        trapStatement: 'The Election Commission of India conducts elections for Panchayats and Municipalities across the States.',
        isFalse: true,
        whyItTraps: 'Candidates confuse ECI with State Election Commissions (SECs).',
        correctRule: 'ECI conducts elections for Parliament, State Legislatures, President, and Vice-President ONLY. Elections to Panchayats (Art 243K) and Municipalities (Art 243ZA) are conducted exclusively by STATE ELECTION COMMISSIONS.',
        provisoOrClause: 'Art. 324(1) vs Art. 243K',
        landmarkCase: 'Kishan Singh Tomar (2006)'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-324-1',
        examSource: 'UPSC CSE Prelims 2017 & 2023',
        questionText: 'Consider the following statements regarding the Election Commission of India:\n1. The Election Commission of India is a five-member body.\n2. Union Ministry of Home Affairs decides the election schedule for both general elections and bye-elections.\n3. Election Commission resolves disputes relating to splits/mergers of recognized political parties.\nWhich of the statements given above is/are correct?',
        options: [
          { key: 'A', text: '1 and 2 only' },
          { key: 'B', text: '2 only' },
          { key: 'C', text: '2 and 3 only' },
          { key: 'D', text: '3 only' }
        ],
        correctOption: 'D',
        examinerExplanation: 'Statement 1 is incorrect: ECI is currently a 3-member body (1 CEC + 2 ECs). Statement 2 is incorrect: ECI decides election schedule independently. Statement 3 is correct: Under Symbols Order 1968, ECI resolves party split/merger disputes.',
        trapWarning: 'In Anoop Baranwal (2023), SC created a selection committee of PM + CJI + LoP, which was later modified by Parliament in CEC Act 2023 to PM + Union Minister + LoP.'
      }
    ]
  },
  '356': {
    articleNumber: '356',
    articleTitle: 'Provisions in case of failure of constitutional machinery in States (President’s Rule)',
    yieldLevel: 'Ultra High-Yield',
    frequencyScore: 'Classic federalism exam staple (SR Bommai context)',
    traps: [
      {
        trapStatement: 'The President can dissolve the State Legislative Assembly immediately upon issuing a Proclamation under Article 356.',
        isFalse: true,
        whyItTraps: 'Candidates overlook the landmark binding guideline of SR Bommai (1994).',
        correctRule: 'Upon issuing an Art 356 proclamation, the President can only SUSPEND the Legislative Assembly. The Assembly CANNOT be dissolved until Parliament approves the proclamation within 2 months!',
        provisoOrClause: 'Art. 356(3) & SR Bommai guidelines',
        landmarkCase: 'S.R. Bommai v. Union of India (1994 - 9 Judge Bench)'
      },
      {
        trapStatement: 'A Proclamation under Article 356 requires approval by a Special Majority in Parliament just like Article 352.',
        isFalse: true,
        whyItTraps: 'Candidates confuse National Emergency (Art 352) with President’s Rule (Art 356).',
        correctRule: 'Article 356 requires approval by a SIMPLE MAJORITY in both Houses within 2 months. Article 352 requires approval by a SPECIAL MAJORITY (Type 2) within 1 month.',
        provisoOrClause: 'Art. 356(3) vs Art. 352(4)',
        landmarkCase: 'Constitutional Majorities Table'
      },
      {
        trapStatement: 'President’s Rule under Article 356 can be extended beyond 1 year up to 3 years by normal parliamentary resolution at any time.',
        isFalse: true,
        whyItTraps: 'Candidates forget the strict twin conditions of Article 356(5) (44th CAA).',
        correctRule: 'Extension beyond 1 year requires TWO strict conditions: (1) National Emergency in operation, and (2) Election Commission certifies difficulty in holding elections.',
        provisoOrClause: 'Art. 356(5) (44th CAA)',
        landmarkCase: '44th Amendment Restraint'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-356-1',
        examSource: 'UPSC CSE Prelims 2018',
        questionText: 'If the President of India exercises his power under Article 356 of the Constitution in respect of a particular State, then:',
        options: [
          { key: 'A', text: 'The Assembly of the State is automatically dissolved' },
          { key: 'B', text: 'The powers of the Legislature of that State shall be exercisable by or under the authority of Parliament' },
          { key: 'C', text: 'Article 19 is suspended in that State' },
          { key: 'D', text: 'The President can make laws to amend the Constitution for that State' }
        ],
        correctOption: 'B',
        examinerExplanation: 'Under Article 356(1)(b), the President declares that the powers of the Legislature of the State shall be exercisable by or under the authority of Parliament. Assembly is not automatically dissolved, Art 19 is not suspended, and Constitution cannot be amended.',
        trapWarning: 'In S.R. Bommai, SC held that secularism is a basic feature, and floor test in the Assembly is the only constitutional way to test majority.'
      }
    ],
    mainsBlueprint: {
      questionTitle: '"Article 356, intended by Dr. Ambedkar as a dead letter, has been weaponized as a deadly weapon." Analyze how S.R. Bommai institutionalized judicial safeguards against its arbitrary invocation.',
      examSource: 'UPSC CSE Mains GS-2 / Judiciary Mains (15 Marks / 250 Words)',
      targetWordLimit: '250 Words (15 Marks)',
      coreIssues: ['Constitutional breakdown threshold', 'S.R. Bommai guidelines', 'Floor test primacy', 'Judicial review of presidential satisfaction'],
      step1Intro: 'Quote Dr. Ambedkar’s quote in Constituent Assembly that Article 356 should remain a "dead letter". Note that it was invoked over 100 times before 1994, frequently for partisan political dismissals.',
      step2DoctrinalCore: 'Analyze S.R. Bommai (1994 - 9-judge bench) principles: 1. Proclamation is subject to judicial review; 2. Material upon which satisfaction is based can be scrutinized; 3. Assembly cannot be dissolved until Parliament approves; 4. Court can restore dismissed government and dissolved assembly if proclamation is mala fide (Rameshwar Prasad 2006, Nabam Rebia 2016).',
      step3Precedents: 'Cite: 1. S.R. Bommai (1994), 2. Rameshwar Prasad (Bihar 2006), 3. Nabam Rebia (Arunachal Pradesh 2016 - Governor cannot summon house without CM advice).',
      step4Conclusion: 'Conclude that Bommai transformed federalism from political discretion into a judicially protected basic feature, making arbitrary imposition virtually impossible today.',
      examinerScoringTips: ['Mention the floor test requirement on the floor of the House.', 'Cite Sarkaria Commission recommendations on Article 356.']
    }
  },
  '368': {
    articleNumber: '368',
    articleTitle: 'Power of Parliament to amend the Constitution and procedure therefor',
    yieldLevel: 'Ultra High-Yield',
    frequencyScore: 'Foundational pillar of all constitutional law exams',
    traps: [
      {
        trapStatement: 'A Constitution Amendment Bill under Article 368 can be introduced in either House of Parliament or in a State Legislative Assembly.',
        isFalse: true,
        whyItTraps: 'Candidates confuse ratification by states with right to introduce an amendment.',
        correctRule: 'Under Article 368(2), an amendment can be initiated ONLY by introduction of a Bill in EITHER HOUSE OF PARLIAMENT, and NEVER in a State Legislature.',
        provisoOrClause: 'Art. 368(2)',
        landmarkCase: 'Constitutional Amending Power'
      },
      {
        trapStatement: 'The President can exercise suspensive veto or withhold assent to a Constitutional Amendment Bill passed under Article 368.',
        isFalse: true,
        whyItTraps: 'Candidates assume presidential assent is discretionary for all bills under Art 111.',
        correctRule: 'Under the 24th Amendment (1971), the President HAS NO VETO over a Constitution Amendment Bill. Article 368(2) specifies that the President "SHALL GIVE HIS ASSENT thereto".',
        provisoOrClause: 'Art. 368(2) (24th CAA 1971)',
        landmarkCase: 'Kesavananda Bharati (1973)'
      },
      {
        trapStatement: 'Parliament under its constituent power in Article 368 can amend any part of the Constitution, including abolishing the Basic Structure.',
        isFalse: true,
        whyItTraps: 'The 42nd CAA attempted to make amendment power unlimited, but it was struck down.',
        correctRule: 'In Kesavananda Bharati (1973) and Minerva Mills (1980), SC held that Parliament’s amending power is LIMITED. A limited amending power is itself a basic feature; Parliament cannot turn limited power into unlimited power.',
        provisoOrClause: 'Art. 368 Basic Structure Limitation',
        landmarkCase: 'Kesavananda Bharati (1973) & Minerva Mills (1980)'
      }
    ],
    prelimsMcqs: [
      {
        id: 'mcq-368-1',
        examSource: 'UPSC CSE Prelims 2020',
        questionText: 'Consider the following statements:\n1. A Constitutional Amendment Bill prior permission of the President of India is required.\n2. A Constitutional Amendment Bill cannot be sent for reconsideration by the President.\n3. There is no provision for a Joint Sitting in case of deadlock on a Constitutional Amendment Bill.\nWhich of the statements given above are correct?',
        options: [
          { key: 'A', text: '1 and 2 only' },
          { key: 'B', text: '2 and 3 only' },
          { key: 'C', text: '1 and 3 only' },
          { key: 'D', text: '1, 2 and 3' }
        ],
        correctOption: 'B',
        examinerExplanation: 'Statement 1 is incorrect: Prior permission of President is NOT required to introduce a Constitution Amendment Bill (unlike Money Bills or Art 3 Bills). Statement 2 is correct (24th CAA: President must give assent). Statement 3 is correct (no joint sitting under Art 368).',
        trapWarning: 'Notice how examiners combine prior recommendation, veto power, and joint sitting in one MCQ.'
      }
    ]
  }
};

export const lookupExamIntelForArticle = (articleNum: string): ArticleExamIntel | null => {
  const clean = articleNum.trim().toUpperCase().replace(/^ART(\.?)\s*/i, '');
  return ARTICLE_EXAM_INTEL_REGISTRY[clean] || null;
};
