import type { ArticleItem } from '../types/constitution';

export const PART_18_EMERGENCY_EXPANDED: ArticleItem[] = [
  {
    number: '352',
    title: 'Proclamation of National Emergency & 44th Amendment Guardrails',
    summary: 'Empowers the President to proclaim a National Emergency if satisfied that a grave emergency exists threatening the security of India or any part thereof by war, external aggression, or armed rebellion; heavily fortified by the 44th Amendment 1978 with written Cabinet advice and special majority safeguards.',
    plainEnglish: 'During wartime, foreign invasion, or armed uprising, the Central Government can declare a National Emergency. To prevent dictatorships, the 44th Amendment mandates that the Prime Minister and Cabinet must give a written decision to the President, and Parliament must approve it within 30 days by a special 2/3 majority.',
    textSnippet: 'If the President is satisfied that a grave emergency exists whereby the security of India or of any part of the territory thereof is threatened, whether by war or external aggression or armed rebellion, he may, by Proclamation, make a declaration to that effect.',
    realWorldScenario: 'In 1975, the Prime Minister advised the President to declare an internal emergency without consulting the Cabinet, leading to arbitrary arrests and suspension of fundamental rights. The 44th Amendment (1978) fundamentally altered this: substituted "internal disturbance" with "armed rebellion", required written communication from the Union Cabinet, and mandated special majority parliamentary ratification within 1 month.',
    prosecutionNote: 'During a National Emergency, criminal jurisdiction transforms significantly: Parliament can enact pan-India penal laws even on State List subjects, but criminal prosecutions can NEVER violate Articles 20 and 21 (Protection against Ex-Post Facto Laws, Double Jeopardy, Self-Incrimination, and Right to Life).',
    clauses: [
      {
        clause: '352(1) Three Exhaustive Grounds',
        explanation: 'Can only be proclaimed on grounds of: (1) War, (2) External Aggression, or (3) Armed Rebellion. "Internal disturbance" was permanently deleted by the 44th Amendment.',
        example: 'Proclamation during cross-border military conflict.'
      },
      {
        clause: '352(3) Mandatory Written Cabinet Decision',
        explanation: 'The President cannot issue a proclamation unless the decision of the Union Cabinet (Prime Minister and other Ministers of Cabinet rank) has been communicated in writing.',
        example: 'Prevents unilateral decisions by an individual Prime Minister.'
      },
      {
        clause: '352(4) 1-Month Special Majority Ratification',
        explanation: 'Must be approved by resolutions of both Houses of Parliament within one month by a special majority (majority of total membership + 2/3 present and voting).',
        example: 'Rigorous legislative scrutiny replacing simple majority.'
      },
      {
        clause: '352(5) 6-Month Renewal & Lok Sabha Disapproval',
        explanation: 'Valid for 6 months at a time. The Lok Sabha can revoke the emergency at any time by passing a simple majority resolution (352(7)-(8)).',
        example: 'Notice signed by 1/10th of Lok Sabha members forces a special session within 14 days.'
      }
    ],
    exceptions: ['Proclamation can be issued even before actual occurrence of war or aggression if the President is satisfied that imminent danger exists.'],
    landmarkCases: [
      {
        caseName: 'Minerva Mills Ltd. v. Union of India',
        year: 1980,
        bench: 'Constitution Bench',
        summary: 'Chandrachud CJ held that a presidential proclamation under Article 352 is subject to judicial review; if the proclamation is mala fide, based on wholly extraneous grounds, or absurd, the court can strike it down.',
        significance: 'Established that emergency proclamations are not immune from judicial review.'
      }
    ],
    doctrineLinks: ['Unitary Transformation of Federalism', 'Judicial Review of Emergency Powers']
  },
  {
    number: '353',
    title: 'Effect of Proclamation of Emergency (Unitary Transformation)',
    summary: 'Details the constitutional metamorphosis that occurs during a National Emergency: The Union executive power extends to directing any State on how to exercise its executive power, and Parliament acquires plenary competence to enact laws on State List subjects.',
    plainEnglish: 'When a National Emergency is declared, India automatically shifts from a federal system to a unitary system. The Central Government can command State Governments directly, and Parliament can make laws on state matters like police and local administration.',
    textSnippet: 'While a Proclamation of Emergency is in operation, then... the executive power of the Union shall extend to the giving of directions to any State as to the manner in which the executive power thereof is to be exercised.',
    realWorldScenario: 'During wartime, a border state government fails to coordinate civil defense or blackouts. Under Article 353(a), the Union Ministry of Home Affairs issues direct binding administrative orders to the state police and district magistrates to enforce wartime logistics.',
    prosecutionNote: 'Prosecutions for violations of emergency orders derive their legal validity from Central legislation enacted under Article 353(b), which overrides state laws during the active emergency period plus 6 months.',
    clauses: [
      {
        clause: '353(a) Executive Subordination of States',
        explanation: 'State governments are not dissolved, but are placed under the complete administrative direction of the Central Government.',
        example: 'Federal control over state police and civil supply networks.'
      },
      {
        clause: '353(b) Legislative Incursion into State List',
        explanation: 'Parliament can pass laws on any State List matter, and confer powers/duties on Union officers to execute them.',
        example: 'Enactment of federal defense of India and civil defense statutes.'
      }
    ],
    exceptions: ['State legislatures continue to exist and can make laws, but their laws are subject to Parliamentary paramountcy under Article 251.'],
    landmarkCases: [
      {
        caseName: 'Makhan Singh v. State of Punjab',
        year: 1964,
        bench: '7-Judge Bench',
        summary: 'Gajendragadkar CJ analyzed the scope of Article 353 and emergency legislation, establishing that emergency powers must be interpreted strictly in accordance with written constitutional limitations.',
        significance: 'Key historical precedent on emergency statutory interpretation.'
      }
    ],
    doctrineLinks: ['Unitary Transformation', 'Federal Suspension']
  },
  {
    number: '355',
    title: 'Duty of the Union to Protect States Against Aggression & Internal Disturbance',
    summary: 'Imposes a solemn constitutional duty upon the Union to protect every State against external aggression and internal disturbance, and to ensure that the government of every State is carried on in accordance with the provisions of the Constitution.',
    plainEnglish: 'The Central Government has a constitutional obligation to defend every State from foreign attacks, terror strikes, and violent internal riots, and to ensure that state governments obey the Constitution.',
    textSnippet: 'It shall be the duty of the Union to protect every State against external aggression and internal disturbance and to ensure that the government of every State is carried on in accordance with the provisions of this Constitution.',
    realWorldScenario: 'During severe armed insurgency or communal violence where state police are overwhelmed, the Union Government invokes Article 355 to deploy Central Armed Police Forces (CRPF, BSF) or the Army to restore order, serving as the constitutional justification for federal intervention.',
    prosecutionNote: 'Article 355 is the constitutional gateway and justification for invoking Article 356 (President\'s Rule) when a state government fails to maintain constitutional order.',
    clauses: [
      {
        clause: 'Twin Constitutional Duties of the Union',
        explanation: '(1) Protection against external aggression and internal disturbance; (2) Ensuring that state governance strictly complies with the Constitution.',
        example: 'Deployment of federal armed forces to protect national integration and state infrastructure.'
      }
    ],
    exceptions: ['Article 355 is a duty of the Union, not an unfettered license to arbitrarily dismantle state democratic governance.'],
    landmarkCases: [
      {
        caseName: 'Sarbananda Sonowal v. Union of India',
        year: 2005,
        bench: '3-Judge Bench',
        summary: 'Held that large-scale influx of illegal immigrants into Assam constituted "external aggression" under Article 355, striking down the IMDT Act for failing to fulfill the Union\'s duty to protect the state.',
        significance: 'Expanded the meaning of "external aggression" under Article 355 beyond traditional military invasion.'
      },
      {
        caseName: 'Naga People\'s Movement of Human Rights v. Union of India',
        year: 1998,
        bench: '5-Judge Bench',
        summary: 'Upheld the Armed Forces (Special Powers) Act (AFSPA), holding that deploying armed forces in disturbed areas is in furtherance of the Union’s duty under Article 355 to protect states from internal disturbance.',
        significance: 'Anchored AFSPA constitutionality in Article 355.'
      }
    ],
    doctrineLinks: ['Union Protective Guarantee', 'Constitutional Order Assurance']
  },
  {
    number: '356',
    title: 'Provisions in Case of Failure of Constitutional Machinery (President\'s Rule)',
    summary: 'Authorizes the President to assume the functions of the State Government and vest State legislative powers in Parliament upon receiving a report from the Governor or otherwise, if satisfied that the government cannot be carried on in accordance with the Constitution; strictly constrained by the landmark 9-Judge Bench ruling in S.R. Bommai (1994).',
    plainEnglish: 'If an elected State Government breaks down, loses its majority, or refuses to obey the Constitution, the Central Government can suspend the state government and impose President\'s Rule. However, the Supreme Court ruled in Bommai that the Assembly cannot be dissolved until Parliament approves, and the majority must always be tested on the floor of the Assembly.',
    textSnippet: 'If the President, on receipt of a report from the Governor of a State or otherwise, is satisfied that a situation has arisen in which the government of the State cannot be carried on in accordance with the provisions of this Constitution, the President may by Proclamation assume to himself all or any of the functions of the Government of the State.',
    realWorldScenario: 'A state governor unseats an elected Chief Minister without conducting a floor test, recommending President\'s Rule on claims of political instability. Is this valid? No! Under S.R. Bommai (1994) and Rameshwar Prasad (2006), dismissing an elected government without a floor test on the floor of the Legislative Assembly is illegal and will be quashed by the Supreme Court.',
    prosecutionNote: 'During President’s Rule, public prosecutors continue to represent the State; executive powers are exercised under the administration of the Governor on behalf of the President.',
    clauses: [
      {
        clause: '356(1) Ground of Invocation',
        explanation: 'Objective situation where governance in accordance with the Constitution has genuinely broken down (not mere political defeat or loss of party popularity).',
        example: 'Hung assembly where no coalition can form a viable government.'
      },
      {
        clause: '356(3) 2-Month Parliamentary Approval Rule',
        explanation: 'The proclamation lapses after two months unless approved by simple majority resolutions in both Houses of Parliament.',
        example: 'Mandatory parliamentary ratification.'
      },
      {
        clause: 'Assembly Dissolution Limitation (Bommai Rule)',
        explanation: 'The Legislative Assembly can only be kept in suspended animation; it cannot be dissolved until both Houses of Parliament have approved the proclamation.',
        example: 'Prevents irreparable dissolution before parliamentary scrutiny.'
      },
      {
        clause: '356(5) 1-Year Maximum Cap & Exceptions',
        explanation: 'Cannot extend beyond 1 year unless (a) a National Emergency is in operation, and (b) the Election Commission certifies that general elections cannot be held.',
        example: 'Strict barrier preventing prolonged federal rule without elections.'
      }
    ],
    exceptions: ['The President CANNOT assume powers vested in or exercisable by a High Court; judicial power of the state remains completely intact (Art 356(1) proviso).'],
    landmarkCases: [
      {
        caseName: 'S.R. Bommai v. Union of India',
        year: 1994,
        bench: '9-Judge Bench',
        summary: 'Historic landmark judgment: (1) Article 356 proclamation is subject to judicial review; (2) The Court can strike down mala fide proclamations and restore the dismissed state government and revived assembly; (3) Floor test is the only valid forum to determine majority; (4) Secularism is a Basic Structure feature.',
        significance: 'Drastically eliminated the partisan abuse of President\'s Rule in India.'
      },
      {
        caseName: 'Rameshwar Prasad v. Union of India',
        year: 2006,
        bench: '5-Judge Bench',
        summary: 'Struck down the dissolution of the Bihar Legislative Assembly under Article 356, holding that the Governor\'s report was based on subjective, unverified claims of horse-trading without conducting a floor test.',
        significance: 'Reinforced strict judicial scrutiny of Governor’s Article 356 reports.'
      }
    ],
    doctrineLinks: ['Judicial Review of Article 356', 'Floor Test Supremacy', 'Federal Basic Structure']
  },
  {
    number: '358',
    title: 'Suspension of Article 19 Freedoms During Emergencies',
    summary: 'Provides for the automatic suspension of the six fundamental freedoms under Article 19 during an active National Emergency, strictly restricted by the 44th Amendment to emergencies proclaimed on grounds of war or external aggression (NEVER for armed rebellion).',
    plainEnglish: 'During an external war or foreign invasion, Article 19 rights (speech, assembly, movement) are automatically paused to allow defense operations. Crucially, post-1978, Article 19 can NEVER be paused during an internal armed rebellion.',
    textSnippet: 'While a Proclamation of Emergency declaring that the security of India... is threatened by war or by external aggression is in operation, nothing in article 19 shall restrict the power of the State... to make any law or to take any executive action.',
    realWorldScenario: 'During an active border war, the government imposes media blackouts or restricts movement near defense installations. Can citizens challenge these restrictions under Article 19(1)(a) or (d)? No, because Article 19 is suspended under Article 358. However, the law must explicitly recite that it is connected to the emergency.',
    prosecutionNote: 'Prosecutions for violating wartime censorship or movement bans are protected under Article 358 only if the underlying statute recites an express nexus to the emergency.',
    clauses: [
      {
        clause: 'War/External Aggression Exclusivity',
        explanation: '44th Amendment limitation: Article 19 is suspended ONLY during war or external aggression. If emergency is proclaimed on "armed rebellion", Article 19 remains fully alive!',
        example: 'Preserves democratic speech and movement during internal security operations.'
      },
      {
        clause: 'Recital of Nexus Requirement',
        explanation: 'Added by the 44th Amendment: Only laws that contain a specific recital that they are in relation to the emergency are protected from Article 19 challenges.',
        example: 'Routine civilian laws cannot claim emergency immunity.'
      }
    ],
    exceptions: ['As soon as the emergency proclamation ceases to operate, Article 19 automatically revives, and unconstitutional pre-existing restrictions become void.'],
    landmarkCases: [
      {
        caseName: 'Bennett Coleman & Co. v. Union of India',
        year: 1972,
        bench: 'Constitution Bench',
        summary: 'Ray J held that the emergency shield under Article 358 protects only laws enacted during the emergency; it does not protect executive actions or pre-emergency laws that violate Article 19.',
        significance: 'Restricted the retroactive reach of Article 358 immunity.'
      }
    ],
    doctrineLinks: ['Automatic Rights Suspension', 'Recital of Nexus Requirement']
  },
  {
    number: '359',
    title: 'Suspension of Enforcement of Rights & Ironclad Art 20 & 21 Immunity',
    summary: 'Empowers the President by order to suspend the right to move any court for the enforcement of specified Fundamental Rights during an emergency; fortified by the 44th Amendment 1978 with an ironclad, non-derogable guarantee that the right to enforce Articles 20 and 21 can NEVER be suspended.',
    plainEnglish: 'The President can issue an order pausing the right to go to court for certain Fundamental Rights during an emergency. However, the 44th Amendment created an absolute rule: Articles 20 and 21 (Right to Life, Personal Liberty, Fair Trial, and Protection against Self-Incrimination) can NEVER be suspended under any circumstance, completely burying the infamous ADM Jabalpur ruling.',
    textSnippet: 'The President may by order declare that the right to move any court for the enforcement of such of the rights conferred by Part III (except articles 20 and 21) as may be mentioned in the order... shall remain suspended.',
    realWorldScenario: 'During an emergency, police arrest a political activist without grounds and subject them to custodial torture or indefinite detention without trial. Can the citizen file a Habeas Corpus petition under Article 32 or 226? YES! Under the 44th Amendment, Articles 20 and 21 are completely immune from suspension. Courts can issue Habeas Corpus to protect life and personal liberty even during the gravest national emergency.',
    prosecutionNote: 'A vital, high-yield criminal-constitutional principle for every prosecutor: Under Section 528 BNSS and Articles 32/226, protections under Article 20(1) (ex-post facto laws), Article 20(2) (double jeopardy), Article 20(3) (self-incrimination), and Article 21 (due process and bodily liberty) remain 100% enforceable throughout an emergency.',
    clauses: [
      {
        clause: '359(1) Presidential Order Scope',
        explanation: 'Enforcement of only those specific Fundamental Rights mentioned in the Presidential Order is suspended (does not suspend the rights themselves, only the procedural remedy).',
        example: 'Suspending enforcement of Article 14 or Article 22 in specific areas.'
      },
      {
        clause: 'Ironclad Article 20 & 21 Non-Derogable Bar',
        explanation: 'The words "(except articles 20 and 21)" permanently prohibit the President from suspending the judicial enforcement of criminal-constitutional safeguards and the right to life.',
        example: 'Habeas Corpus petitions remain active throughout any national emergency.'
      },
      {
        clause: '359(1B) Recital of Nexus Mandate',
        explanation: 'Only laws and executive actions specifically reciting an emergency connection are protected against other non-exempt Part III challenges.',
        example: 'Prevents blanket suspension of constitutional protections in ordinary matters.'
      }
    ],
    exceptions: ['Unlike Article 358 (automatic suspension of Art 19), Article 359 does not operate automatically; it requires an explicit Presidential Order specifying the rights and geographical territory.'],
    landmarkCases: [
      {
        caseName: 'A.D.M. Jabalpur v. Shivkant Shukla (Habeas Corpus Case)',
        year: 1976,
        bench: '5-Judge Bench (4:1 Verdict)',
        summary: 'Majority (Ray CJ, Beg, Sarkaria, Chandrachud JJ) infamously held that during an emergency, no citizen had locus standi to file a habeas corpus petition challenging illegal detention. Khanna J delivered his legendary lone dissent holding that the right to life and liberty is not a gift of the Constitution, but an inalienable human right that courts must enforce.',
        significance: 'Historic dark chapter, subsequently corrected by Parliament via the 44th Amendment and formally overruled by the 9-Judge Bench in K.S. Puttaswamy (2017).'
      },
      {
        caseName: 'K.S. Puttaswamy v. Union of India (Privacy Judgment)',
        year: 2017,
        bench: '9-Judge Bench',
        summary: 'All 9 judges formally buried and overruled the majority decision in ADM Jabalpur, affirming Justice H.R. Khanna’s dissent as the true constitutional law of India: The right to life and dignity under Article 21 is primordial and non-negotiable.',
        significance: 'Final constitutional vindication of fundamental rights during emergencies.'
      }
    ],
    doctrineLinks: ['Non-Derogable Human Rights', 'Habeas Corpus Indispensability', 'Overruling of ADM Jabalpur']
  },
  {
    number: '360',
    title: 'Provisions as to Financial Emergency',
    summary: 'Empowers the President to proclaim a Financial Emergency if satisfied that a situation has arisen threatening the financial stability or credit of India or any part of its territory; authorizes directions to observe financial propriety, including salary reductions for public servants and judges.',
    plainEnglish: 'If the economic stability or creditworthiness of India is in extreme jeopardy, the President can proclaim a Financial Emergency. The Central Government can then order salary reductions for all government officers, including Supreme Court and High Court judges. Notably, a Financial Emergency has NEVER been declared in India.',
    textSnippet: 'If the President is satisfied that a situation has arisen whereby the financial stability or credit of India or of any part of the territory thereof is threatened, he may by a Proclamation make a declaration to that effect.',
    realWorldScenario: 'During the 1991 severe balance-of-payments foreign exchange crisis, did India proclaim a Financial Emergency? No! Despite economic crisis, the government managed fiscal reforms without invoking Article 360. Article 360 remains unused since the adoption of the Constitution in 1950.',
    prosecutionNote: 'During a Financial Emergency, state money bills and financial bills must be reserved for Presidential consideration under Article 360(4)(a)(ii).',
    clauses: [
      {
        clause: '360(1) Subjective Satisfaction on Financial Stability',
        explanation: 'Threat to the creditworthiness or fiscal stability of India or any territory.',
        example: 'Catastrophic currency collapse or national sovereign default.'
      },
      {
        clause: '360(2) 2-Month Parliamentary Approval',
        explanation: 'Must be approved by simple majority resolutions in both Houses of Parliament within two months.',
        example: 'Standard legislative oversight mechanism.'
      },
      {
        clause: '360(4)(b) Reduction of Judicial and Civil Salaries',
        explanation: 'Authorizes reduction of salaries and allowances of all civil servants, defense personnel, and Supreme Court/High Court judges, overriding otherwise protected judicial emoluments.',
        example: 'Temporary mandatory pay reductions across all constitutional offices.'
      }
    ],
    exceptions: ['Unlike Article 352, a Financial Emergency once approved by Parliament continues indefinitely until revoked by the President; no periodic 6-month parliamentary re-approval is required.'],
    landmarkCases: [
      {
        caseName: 'Supreme Court Advocates-on-Record Association v. Union of India (NJAC Case)',
        year: 2015,
        bench: '5-Judge Bench',
        summary: 'Noted that the express provision in Article 360(4)(b) permitting reduction of judges’ salaries only during a Financial Emergency demonstrates the rigorous constitutional intent to protect judicial independence in all normal circumstances.',
        significance: 'Highlighted Article 360 as the lone constitutional exception to protected judicial compensation.'
      }
    ],
    doctrineLinks: ['Fiscal Sovereignty', 'Constitutional Financial Propriety']
  }
];
