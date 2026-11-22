export interface SocraticArgumentChoice {
  id: string;
  thesisTitle: string;
  candidateOpeningStatement: string;
  jurisprudentialPhilosophy: 'Textualist' | 'Purposive / Living Constitutionalist' | 'Harmonious Construction' | 'Originalist / Historical';
  juristCounterThrust: string;
  identifiedFallacy: {
    fallacyName: string;
    fallacyExplanation: string;
  };
  rebuttalDilemma: string;
  rebuttalOptions: {
    id: string;
    statement: string;
    isOptimalSynthesis: boolean;
    examinerVerdict: string;
    depthGainPct: number;
  }[];
  concludingSynthesisRatio: {
    benchCitation: string;
    rulingRatio: string;
    mainsAnswerBlueprint: {
      introduction: string;
      conflictAnalysis: string;
      harmoniousResolution: string;
      contemporaryRelevance: string;
    };
  };
}

export interface SocraticParadoxDossier {
  id: string;
  trackNumber: number;
  title: string;
  subtitle: string;
  constitutionalPillar: string;
  coreArticles: string[];
  examinerPersona: {
    name: string;
    title: string;
    avatar: string;
    reputation: string;
  };
  theConundrumHook: string;
  detailedContext: string;
  conflictingAuthorities: {
    sideA: { caseOrText: string; coreHolding: string };
    sideB: { caseOrText: string; coreHolding: string };
  };
  argumentPaths: SocraticArgumentChoice[];
  keyLatinMaxim: string;
  highYieldExamTip: string;
}

export const SOCRATIC_PARADOXES: SocraticParadoxDossier[] = [
  {
    id: 'paradox-1-basic-structure',
    trackNumber: 1,
    title: 'The Constituent Power Paradox',
    subtitle: 'Can Parliament amend Article 368 to abolish the Basic Structure?',
    constitutionalPillar: 'Constituent Power vs Judicial Review',
    coreArticles: ['Article 368', 'Article 13(2)'],
    examinerPersona: {
      name: 'Jurist H.M. Seervai',
      title: 'Constitutional Scholar & Advocate-General Emeritus',
      avatar: '👨‍⚖️',
      reputation: 'Formidable scholar of constitutional law; demands exact textual and doctrinal rigor.'
    },
    theConundrumHook:
      'Article 368 states in clear, unqualified terms that Parliament may, in exercise of its "constituent power", amend by way of addition, variation or repeal ANY provision of this Constitution. The words "Basic Structure" do not appear anywhere in the 395 Articles. How can an unelected Court place a perpetual limitation on the constituent sovereignty of the people represented in Parliament?',
    detailedContext:
      'Between 1951 and 1973, the Supreme Court oscillated wildly. In Sankari Prasad (1951) and Sajjan Singh (1965), it held that constituent power is unlimited. In Golaknath (1967), an 11-judge bench held that constitutional amendments are "laws" under Article 13(2) and cannot abridge Fundamental Rights. In Kesavananda Bharati (1973), a 13-judge bench crafted the Basic Structure doctrine as a middle path.',
    conflictingAuthorities: {
      sideA: {
        caseOrText: 'Article 368(1) & Sankari Prasad (1951)',
        coreHolding: 'Constituent power to amend includes repeal of any provision; Parliament is sovereign.'
      },
      sideB: {
        caseOrText: 'Kesavananda Bharati (1973) & Minerva Mills (1980)',
        coreHolding: 'Power to amend does not include power to destroy; a creature of the Constitution cannot abolish the creator.'
      }
    },
    keyLatinMaxim: 'Delegatus non potest delegare & Nemo dat quod non habet',
    highYieldExamTip:
      'In Mains, never argue that Parliament has zero amending power. Emphasize Justice Khanna’s distinction between "amendment" (which preserves constitutional identity) and "destruction/replacement" (which requires a fresh Constituent Assembly).',
    argumentPaths: [
      {
        id: 'arg-1a-textual',
        thesisTitle: 'Absolute Parliamentary Sovereignty (Textualist Path)',
        candidateOpeningStatement:
          'My submission is that the text of Article 368 is unambiguous. "Constituent power" represents the will of the sovereign people. Limiting it by an unwritten doctrine places the unelected judiciary above the elected representatives of 1.4 billion citizens.',
        jurisprudentialPhilosophy: 'Textualist',
        juristCounterThrust:
          'A bold submission, Counsel! But pray tell: if Parliament possesses unfettered constituent power to repeal "any" provision, could a temporary two-thirds parliamentary majority tomorrow pass a 1-line amendment abolishing elections, proclaiming a lifelong dictatorship, and extinguishing the Supreme Court? On your logic, would the Constitution have to submit meekly to its own assassination?',
        identifiedFallacy: {
          fallacyName: 'The Formalism Suicide Trap',
          fallacyExplanation:
            'Conflating the constituent power derived from the Constitution with the original constituent power that framed the Constitution. A limited amending power cannot enlarge itself into unlimited power.'
        },
        rebuttalDilemma:
          'How do you reconcile the plain text of Article 368 with the existential necessity of preventing constitutional suicide?',
        rebuttalOptions: [
          {
            id: 'reb-1a-1',
            statement:
              'A constitutional amendment is an exercise of limited derivative power, not original sovereign constituent power; the power to "amend" inherently implies that the original framework survives.',
            isOptimalSynthesis: true,
            examinerVerdict:
              'Spot on! That is the very soul of Justice H.R. Khanna’s controlling ratio in Kesavananda Bharati.',
            depthGainPct: 40
          },
          {
            id: 'reb-1a-2',
            statement:
              'The remedy lies purely in popular political revolution at the ballot box, not in judicial interference.',
            isOptimalSynthesis: false,
            examinerVerdict:
              'Dangerous, Counsel! If the amendment abolishes future elections, what ballot box remains for the citizens?',
            depthGainPct: 10
          }
        ],
        concludingSynthesisRatio: {
          benchCitation: 'Minerva Mills Ltd. v. Union of India ((1980) 3 SCC 625)',
          rulingRatio:
            'A limited amending power is itself one of the basic features of our Constitution. Therefore, the limitation on that power cannot be destroyed. Parliament cannot under Article 368 convert a limited power into an unlimited one.',
          mainsAnswerBlueprint: {
            introduction:
              'Introduce Article 368 as conferring derivative constituent power rather than original constituent power.',
            conflictAnalysis:
              'Trace the clash between parliamentary sovereignty (Sankari Prasad) and fundamental rights immutability (Golaknath).',
            harmoniousResolution:
              'Explain how Kesavananda Bharati resolved this by distinguishing between "amendment" (identity-preserving reform) and "abrogation" (destruction of basic pillars).',
            contemporaryRelevance:
              'Cite Minerva Mills and NJAC (2015) to demonstrate that judicial review of constitutional amendments protects democratic continuity.'
          }
        }
      },
      {
        id: 'arg-1b-living',
        thesisTitle: 'Institutional Balance & Inherent Limitations (Harmonious Path)',
        candidateOpeningStatement:
          'The Constitution is not an ordinary statute; it is an organic document based on foundational pillars—Democracy, Secularism, Rule of Law, and Federalism. The amending power under Article 368 is a creature of the Constitution; the creature cannot murder its creator.',
        jurisprudentialPhilosophy: 'Harmonious Construction',
        juristCounterThrust:
          'A noble thought, Senior Counsel! But let me turn the sword: Who decides what constitutes a "basic feature"? If the basic structure is not defined in the text, does this doctrine not hand seven judges an unguided, subjective veto over every progressive constitutional reform passed by Parliament?',
        identifiedFallacy: {
          fallacyName: 'The Subjectivity Vulnerability',
          fallacyExplanation:
            'Failure to articulate objective legal criteria for what constitutes a Basic Feature risks reducing constitutional law to judicial discretion.'
        },
        rebuttalDilemma:
          'How do you defend the Basic Structure doctrine from the charge that it is subjective judicial legislation?',
        rebuttalOptions: [
          {
            id: 'reb-1b-1',
            statement:
              'The basic features are derived from the structural preamble and structural architecture of the Constitution (Democracy, Federalism, Secularism, Judicial Independence), which have been consistently recognized across 50 years of Constitution Benches.',
            isOptimalSynthesis: true,
            examinerVerdict:
              'Masterfully argued! Preambular vision anchored in constitutional structure cures the risk of subjectivity.',
            depthGainPct: 45
          },
          {
            id: 'reb-1b-2',
            statement:
              'Judges are guided by their personal conscience and natural justice, which is superior to written law.',
            isOptimalSynthesis: false,
            examinerVerdict:
              'Never say this in a judicial interview, Counsel! Personal conscience cannot replace the text and institutional structure of the Constitution.',
            depthGainPct: 5
          }
        ],
        concludingSynthesisRatio: {
          benchCitation: 'Kesavananda Bharati v. State of Kerala ((1973) 4 SCC 225)',
          rulingRatio:
            'The word "amendment" in Article 368 carries the inherent limitation that the identity and basic structure of the Constitution cannot be damaged or destroyed.',
          mainsAnswerBlueprint: {
            introduction:
              'Define the Basic Structure doctrine as an implied structural limitation on constituent power.',
            conflictAnalysis:
              'Address the tension between majoritarian democracy and constitutional democracy.',
            harmoniousResolution:
              'Show that the doctrine does not freeze the Constitution; it permits 99% of amendments while acting as a shield against totalitarian takeover.',
            contemporaryRelevance:
              'Reference the striking down of Article 329A(4) in Indira Nehru Gandhi (1975) and Section 55 of 42nd CAA in Minerva Mills (1980).'
          }
        }
      }
    ]
  },
  {
    id: 'paradox-2-due-process',
    trackNumber: 2,
    title: 'The Due Process Subterfuge',
    subtitle: 'Did Maneka Gandhi resurrect American Due Process through the back door?',
    constitutionalPillar: 'Personal Liberty & The Golden Triangle',
    coreArticles: ['Article 21', 'Article 14', 'Article 19'],
    examinerPersona: {
      name: 'Jurist Nani Palkhivala',
      title: 'Doyen of the Constitutional Bar',
      avatar: '⚖️',
      reputation: 'Eloquent defender of fundamental liberties and the Golden Triangle.'
    },
    theConundrumHook:
      'The Constituent Assembly explicitly rejected "Due Process of Law" in Draft Article 15 after Sir B.N. Rau relayed Justice Felix Frankfurter’s warning. The Framers deliberately chose the Japanese phrase: "procedure established by law". In A.K. Gopalan (1950), the Supreme Court respected this intent. How, then, in Maneka Gandhi (1978), could the Court hold that the procedure must be "just, fair, and reasonable", effectively installing substantive due process without a constitutional amendment?',
    detailedContext:
      'In A.K. Gopalan (1950), the Court held that Article 19, 21, and 22 were watertight compartments ("silo approach"). If a law complied with formal enactment, courts could not test its substantive fairness. This mechanical literalism culminated in the dark ADM Jabalpur (1976) habeas corpus tragedy. In Maneka Gandhi (1978), Justice Bhagwati dismantled the silo theory, birthing the Golden Triangle.',
    conflictingAuthorities: {
      sideA: {
        caseOrText: 'Article 21 Text & A.K. Gopalan (1950)',
        coreHolding: '"Procedure established by law" means formally enacted lex; courts cannot inquire into reasonableness.'
      },
      sideB: {
        caseOrText: 'Maneka Gandhi (1978) & K.S. Puttaswamy (2017)',
        coreHolding: 'The procedure cannot be arbitrary; Articles 14, 19, and 21 interlace to guarantee substantive fairness.'
      }
    },
    keyLatinMaxim: 'Lex injusta non est lex & Audi alteram partem',
    highYieldExamTip:
      'In GS2/Mains, explain the semantic shift: "Procedure established by law" means law that is valid, and under Article 13, a law is only valid if it complies with Article 14 (non-arbitrariness) and Article 19 (reasonableness). Thus, substantive fairness is derived through the Golden Triangle, not American Lochnerism.',
    argumentPaths: [
      {
        id: 'arg-2a-silo',
        thesisTitle: 'The Semantic Interlocking Strategy (Golden Triangle)',
        candidateOpeningStatement:
          'My Lords, Maneka Gandhi did not defy the Constituent Assembly; it harmonized Article 21 with Article 14. Under Article 13, "law" must be constitutionally valid. A law that is arbitrary violates Article 14. Therefore, any procedure that is arbitrary cannot be a "law" under Article 21.',
        jurisprudentialPhilosophy: 'Purposive / Living Constitutionalist',
        juristCounterThrust:
          'Ingenious, Counsel! But does this not equate our judicial review with the American "substantive due process" that Justice Frankfurter warned against? Are our judges now empowered to strike down socio-economic policies simply because they personally view the statute as "unfair"?',
        identifiedFallacy: {
          fallacyName: 'The Laissez-Faire Equivalence Fallacy',
          fallacyExplanation:
            'Assuming Indian substantive reasonableness is identical to American Lochner-era economic due process, ignoring India’s Directive Principles anchor.'
        },
        rebuttalDilemma:
          'How does Indian post-Maneka jurisprudence avoid the American trap of striking down progressive welfare laws?',
        rebuttalOptions: [
          {
            id: 'reb-2a-1',
            statement:
              'Indian courts anchor Article 21 in the Directive Principles of State Policy (Part IV), using substantive due process exclusively to protect human dignity, bodily autonomy, and privacy, while according broad deference to socio-economic welfare statutes.',
            isOptimalSynthesis: true,
            examinerVerdict:
              'Magnificent! That is precisely how Puttaswamy and Olga Tellis distinguished Indian human-rights due process from American corporate Lochnerism.',
            depthGainPct: 45
          },
          {
            id: 'reb-2a-2',
            statement:
              'Judges simply exercise unrestrained judicial activism whenever they feel the executive has acted unfairly.',
            isOptimalSynthesis: false,
            examinerVerdict:
              'Unrestrained activism invites institutional crisis. You must ground your answer in constitutional principles.',
            depthGainPct: 10
          }
        ],
        concludingSynthesisRatio: {
          benchCitation: 'K.S. Puttaswamy v. Union of India ((2017) 10 SCC 1)',
          rulingRatio:
            'The procedure under Article 21 must withstand the test of all other Fundamental Rights, especially Articles 14 and 19. It must satisfy the 4-prong test of proportionality: legitimate aim, rational nexus, least restrictive measure, and balancing of rights.',
          mainsAnswerBlueprint: {
            introduction:
              'Contrast the formalistic A.K. Gopalan interpretation with the transformative Maneka Gandhi shift.',
            conflictAnalysis:
              'Explain why the Framers omitted "Due Process" (fear of judicial veto on land reforms) and how ADM Jabalpur exposed the vulnerability of mechanical textualism.',
            harmoniousResolution:
              'Elucidate the Golden Triangle: Article 21 (liberty) + Article 14 (anti-arbitrariness) + Article 19 (reasonableness).',
            contemporaryRelevance:
              'Showcase modern unenumerated rights: Right to Privacy (Puttaswamy), Right to Clean Environment (M.C. Mehta), Right to Die with Dignity (Common Cause).'
          }
        }
      }
    ]
  },
  {
    id: 'paradox-3-governor-veto',
    trackNumber: 3,
    title: 'The Gubernatorial Pocket Veto Enigma',
    subtitle: 'Can a Governor sit on state bills indefinitely under Article 200?',
    constitutionalPillar: 'Federalism & Responsible Parliamentary Government',
    coreArticles: ['Article 200', 'Article 163', 'Article 201'],
    examinerPersona: {
      name: 'Justice P.B. Gajendragadkar',
      title: 'Former Chief Justice of India',
      avatar: '🏛️',
      reputation: 'Staunch champion of federal harmony and parliamentary supremacy.'
    },
    theConundrumHook:
      'Article 200 presents a Governor with three options when a bill is passed: give assent, withhold assent, or reserve the bill for the President. But it does NOT prescribe a numerical deadline (like 14 days or 30 days); it merely says the Governor may return the bill "as soon as possible". If the Governor chooses to withhold assent and neither assents nor returns the bill, can the Supreme Court fix a judicially created deadline without violating the separation of powers?',
    detailedContext:
      'In recent years (2022–2024), Governors in Punjab, Tamil Nadu, Telangana, and Kerala withheld assent to dozens of state bills for months, creating legislative paralysis. In State of Punjab v. Principal Secretary (2023), a 3-judge bench led by CJI Chandrachud held that a Governor cannot use a pocket veto to strangle an elected legislature.',
    conflictingAuthorities: {
      sideA: {
        caseOrText: 'Article 200 Text & Executive Discretion',
        coreHolding: 'The Constitution provides no judicial clock; Governor is constitutional head and link to Union.'
      },
      sideB: {
        caseOrText: 'State of Punjab v. Principal Secretary (2023)',
        coreHolding: '"As soon as possible" conveys constitutional urgency; an unelected Governor cannot defeat parliamentary democracy.'
      }
    },
    keyLatinMaxim: 'Salus populi suprema lex & Quod per me non possum, nec per alium',
    highYieldExamTip:
      'In Mains, reference Shamsher Singh (1974) to establish that the Governor is a titular head acting on the aid and advice of the Cabinet under Article 163, save in exceptional independent situations.',
    argumentPaths: [
      {
        id: 'arg-3a-parliamentary',
        thesisTitle: 'Primacy of Cabinet Government & Judicial Promptitude',
        candidateOpeningStatement:
          'In a Westminster parliamentary democracy, real sovereign power rests with the elected Council of Ministers and Legislative Assembly. The Governor is a non-elected constitutional head. Allowing an indefinite pocket veto would reduce elected state legislatures to advisory bodies under an imperial viceroy.',
        jurisprudentialPhilosophy: 'Harmonious Construction',
        juristCounterThrust:
          'A compelling democratic argument, Counsel! But what if the State Legislature passes an unconstitutional bill that directly undermines the High Court or national sovereignty? Does Article 200 not deliberately give the Governor discretion to pause rash populist legislation and seek Presidential review under Article 201?',
        identifiedFallacy: {
          fallacyName: 'The Absolute Discretion Fallacy',
          fallacyExplanation:
            'Treating the power to pause or reserve as a license to permanently kill legislation by inaction without constitutional accountability.'
        },
        rebuttalDilemma:
          'How do you reconcile the Governor’s protective constitutional duty with the mandate of responsible cabinet governance?',
        rebuttalOptions: [
          {
            id: 'reb-3a-1',
            statement:
              'If the Governor withholds assent, he must mandatorily return the bill to the Assembly under the first proviso "as soon as possible". If the Assembly repasses it with or without amendment, the Governor HAS NO DISCRETION and must grant assent.',
            isOptimalSynthesis: true,
            examinerVerdict:
              'Flawless! That is the exact statutory mechanics enforced in State of Punjab (2023).',
            depthGainPct: 50
          },
          {
            id: 'reb-3a-2',
            statement:
              'The Governor can be removed immediately by the Chief Minister through state impeachment.',
            isOptimalSynthesis: false,
            examinerVerdict:
              'Completely wrong! Governors hold office during the pleasure of the President (Article 156), not the State Assembly.',
            depthGainPct: 0
          }
        ],
        concludingSynthesisRatio: {
          benchCitation: 'State of Punjab v. Principal Secretary to Governor ((2023) 14 SCC 285)',
          rulingRatio:
            'A Governor cannot withhold action indefinitely. Withholding assent must immediately trigger the return of the bill to the House. If repassed, the Governor is constitutionally bound to assent. The Governor cannot become a competitor to the elected government.',
          mainsAnswerBlueprint: {
            introduction:
              'Outline Article 200 options and the constitutional role of the Governor as established in Shamsher Singh.',
            conflictAnalysis:
              'Discuss the tension between gubernatorial check on ultra vires state laws vs democratic paralysis by inaction.',
            harmoniousResolution:
              'Explain the proviso mechanism: withholding assent is not a dead end; it requires immediate reconsideration by the House.',
            contemporaryRelevance:
              'Cite recommendations of Sarkaria Commission (6 months limit) and Punchhi Commission on Article 200 reforms.'
          }
        }
      }
    ]
  },
  {
    id: 'paradox-4-sub-classification',
    trackNumber: 4,
    title: 'The Sub-Classification Revolution',
    subtitle: 'Can States sub-classify Scheduled Castes without violating Article 341?',
    constitutionalPillar: 'Substantive Equality & Affirmative Action',
    coreArticles: ['Article 16(4)', 'Article 14', 'Article 341', 'Article 342A'],
    examinerPersona: {
      name: 'Justice B.R. Gavai',
      title: 'Supreme Court Jurist',
      avatar: '👨‍⚖️',
      reputation: 'Champion of substantive equality, sub-classification, and grassroots social reality.'
    },
    theConundrumHook:
      'Article 341(2) unambiguously commands that Parliament alone may by law include or exclude any caste from the Presidential List of Scheduled Castes. In E.V. Chinnaiah (2005), a 5-judge bench held that the SC list constitutes a single monolithic class that cannot be splintered by state legislatures. How, then, in August 2024, did a 7-Judge Constitution Bench in State of Punjab v. Davinder Singh overrule Chinnaiah and permit States to create sub-quotas within SCs?',
    detailedContext:
      'Certain sub-castes within Scheduled Castes (e.g. Valmikis, Mazhabi Sikhs, Madigas) remained severely underrepresented for 75 years because more educationally advanced Dalit groups captured the lion’s share of affirmative action benefits. In August 2024, Chief Justice Chandrachud and a 7-Judge Bench delivered a historic 6:1 verdict authorizing sub-classification based on quantifiable empirical data.',
    conflictingAuthorities: {
      sideA: {
        caseOrText: 'Article 341 & E.V. Chinnaiah (2005)',
        coreHolding: 'Scheduled Castes are a homogeneous class; state sub-classification violates Article 341(2).'
      },
      sideB: {
        caseOrText: 'State of Punjab v. Davinder Singh (2024)',
        coreHolding: 'Sub-classification within SCs does not tinker with Article 341 list; it ensures substantive equality under Article 16(4).'
      }
    },
    keyLatinMaxim: 'Lex non requirit verificari quod apparet curiae & Proportionalitas',
    highYieldExamTip:
      'Distinguish carefully: State legislatures cannot add or remove any caste from the Presidential List (which remains Parliament’s sole monopoly under Art 341). Sub-classification only determines the degree of preference for employment under Art 16(4).',
    argumentPaths: [
      {
        id: 'arg-4a-substantive',
        thesisTitle: 'Substantive Equality & The Non-Monolithic Reality',
        candidateOpeningStatement:
          'Equality is dynamic. Treating unequal sub-castes within Scheduled Castes as equal freezes historical privilege. Sub-classification does not alter the Article 341 Presidential list; it merely provides preferential channelization under Article 16(4) based on empirical backwardness data.',
        jurisprudentialPhilosophy: 'Purposive / Living Constitutionalist',
        juristCounterThrust:
          'Sharp reasoning, Counsel! But what prevents state politicians from using sub-classification for cynical electoral vote-bank gerrymandering, breaking Dalit solidarity and carving up sub-quotas without empirical proof?',
        identifiedFallacy: {
          fallacyName: 'The Vote-Bank Gerrymandering Risk',
          fallacyExplanation:
            'Permitting executive discretion without mandatory empirical data and judicial review creates arbitrary patronage.'
        },
        rebuttalDilemma:
          'What constitutional checks did the 7-Judge Bench impose to prevent arbitrary political sub-classification?',
        rebuttalOptions: [
          {
            id: 'reb-4a-1',
            statement:
              'The State must produce quantifiable empirical data of inadequate representation; it cannot allocate 100% of seats to one sub-caste, and the decision is fully subject to judicial review under Articles 14 and 16.',
            isOptimalSynthesis: true,
            examinerVerdict:
              'Spot on! That is the core safeguard laid down by CJI Chandrachud and Justice Gavai.',
            depthGainPct: 50
          },
          {
            id: 'reb-4a-2',
            statement:
              'States have unreviewable sovereign discretion to classify castes as they see fit.',
            isOptimalSynthesis: false,
            examinerVerdict:
              'Categorically incorrect! Discretion without judicial review violates the Basic Structure.',
            depthGainPct: 0
          }
        ],
        concludingSynthesisRatio: {
          benchCitation: 'State of Punjab v. Davinder Singh ((2024) INSC 562 / 7-Judge Bench)',
          rulingRatio:
            'Scheduled Castes are not a monolithic, indivisible class. Sub-classification by States under Articles 15(4) and 16(4) is constitutionally permissible to achieve substantive equality, provided it is backed by empirical data and does not breach Article 341(2).',
          mainsAnswerBlueprint: {
            introduction:
              'Explain the tension between formal equality (monolithic SC list) and substantive equality (unequal access to opportunities).',
            conflictAnalysis:
              'Compare the reasoning in E.V. Chinnaiah (2005) with Indra Sawhney (1992) on sub-classification of OBCs.',
            harmoniousResolution:
              'Clarify the jurisdictional distinction between "identification" (Article 341 - Parliament) and "channelization of reservations" (Article 16(4) - States).',
            contemporaryRelevance:
              'Discuss the majority observations on applying the "creamy layer" principle to Scheduled Castes to ensure benefits reach the most downtrodden.'
          }
        }
      }
    ]
  },
  {
    id: 'paradox-5-collegium',
    trackNumber: 5,
    title: 'The Collegium Conundrum',
    subtitle: 'How did "Consultation" in Article 124(2) become binding "Concurrence"?',
    constitutionalPillar: 'Separation of Powers & Judicial Independence',
    coreArticles: ['Article 124(2)', 'Article 217(1)', 'Article 50'],
    examinerPersona: {
      name: 'Jurist Fali S. Nariman',
      title: 'Senior Advocate & Constitutional Statesman',
      avatar: '📜',
      reputation: 'Legendary senior counsel who argued the Second Judges Case and NJAC Case.'
    },
    theConundrumHook:
      'Article 124(2) states that Supreme Court judges shall be appointed by the President after "consultation" with such Judges as the President may deem necessary. In the Constituent Assembly, Dr. Ambedkar explicitly rejected giving the Chief Justice an individual veto. Yet in the Second Judges Case (1993), the Supreme Court ruled that "consultation" means "concurrence", creating the Collegium system. Is this legitimate judicial interpretation or judicial usurpation of text?',
    detailedContext:
      'In First Judges Case (S.P. Gupta, 1981), the SC held that executive had ultimate supremacy. This led to arbitrary transfers and political supersessions. In Second Judges (1993) and Third Judges (1998), the SC held that Judicial Independence is part of the Basic Structure, requiring primacy for the CJI and senior judges. In 2015, the SC struck down the 99th CAA (NJAC), preserving the Collegium.',
    conflictingAuthorities: {
      sideA: {
        caseOrText: 'Article 124(2) Text & S.P. Gupta (1981)',
        coreHolding: '"Consultation" does not mean concurrence; executive is democratically accountable.'
      },
      sideB: {
        caseOrText: 'Second Judges (1993) & NJAC Case (2015)',
        coreHolding: 'Judicial independence is a basic feature; executive primacy in judicial appointments subverts the rule of law.'
      }
    },
    keyLatinMaxim: 'Nemo debet esse judex in propria causa & Fiat justitia ruat caelum',
    highYieldExamTip:
      'In Mains, present a balanced critique: defend the need for judicial independence while addressing valid concerns about Collegium opacity, lack of diversity, and the need for a transparent Memorandum of Procedure (MoP).',
    argumentPaths: [
      {
        id: 'arg-5a-independence',
        thesisTitle: 'Judicial Independence as Non-Negotiable Basic Structure',
        candidateOpeningStatement:
          'Judicial independence cannot survive if the executive holds a veto over who sits on the bench. The executive is the largest single litigant in India. If the litigant chooses the judge, the very concept of an independent judiciary under Article 50 and the Basic Structure collapses.',
        jurisprudentialPhilosophy: 'Purposive / Living Constitutionalist',
        juristCounterThrust:
          'Passionate advocacy, Counsel! But does any other major democracy in the world allow judges to appoint judges in secret, camera-free conclaves without democratic scrutiny? Does this not violate the fundamental democratic principle of checks and balances?',
        identifiedFallacy: {
          fallacyName: 'The Judicial Self-Perpetuation Paradox',
          fallacyExplanation:
            'Preserving judicial independence through an insular mechanism that lacks accountability and transparency.'
        },
        rebuttalDilemma:
          'How can the Collegium system be reformed without compromising judicial independence from executive dominance?',
        rebuttalOptions: [
          {
            id: 'reb-5a-1',
            statement:
              'Through an institutionalized, transparent Secretariat and objective criteria in the Memorandum of Procedure (MoP), ensuring published vacancy timelines and integrity vetting while retaining judicial primacy to prevent executive packing.',
            isOptimalSynthesis: true,
            examinerVerdict:
              'A mature, statesmanlike resolution! Exactly what the Supreme Court recommended in the post-NJAC orders.',
            depthGainPct: 50
          },
          {
            id: 'reb-5a-2',
            statement:
              'Abolish the judiciary’s role entirely and let the Law Minister appoint all judges directly.',
            isOptimalSynthesis: false,
            examinerVerdict:
              'That directly violates the Basic Structure doctrine affirmed in NJAC (2015)!',
            depthGainPct: 0
          }
        ],
        concludingSynthesisRatio: {
          benchCitation: 'Supreme Court Advocates-on-Record Assn v. Union of India ((2016) 5 SCC 1 / NJAC Case)',
          rulingRatio:
            'Judicial independence is a foundational pillar of the Basic Structure. The presence of the Law Minister and civil society nominees with veto power on the NJAC compromised judicial independence and violated the separation of powers.',
          mainsAnswerBlueprint: {
            introduction:
              'Trace the evolution across First (1981), Second (1993), Third (1998), and Fourth (2015) Judges Cases.',
            conflictAnalysis:
              'Explain the dialectic: Textual literalism ("consultation") vs Functional necessity (insulating judges from executive vengeance).',
            harmoniousResolution:
              'Detail the Collegium composition: CJI + 4 senior-most judges for SC, CJI + 2 senior-most for HCs.',
            contemporaryRelevance:
              'Analyze the unresolved Memorandum of Procedure (MoP) negotiations and judicial vacancies.'
          }
        }
      }
    ]
  },
  {
    id: 'paradox-6-legislative-bribery',
    trackNumber: 6,
    title: 'The Legislative Bribery & Immunity Clash',
    subtitle: 'Does Article 105(2) shield lawmakers who take bribes to vote in Parliament?',
    constitutionalPillar: 'Parliamentary Privileges vs Rule of Law',
    coreArticles: ['Article 105(2)', 'Article 194(2)', 'Article 14'],
    examinerPersona: {
      name: 'Chief Justice D.Y. Chandrachud',
      title: 'Chief Justice of India',
      avatar: '👨‍⚖️',
      reputation: 'Living constitutionalist with emphasis on constitutional morality, integrity, and anti-corruption.'
    },
    theConundrumHook:
      'Article 105(2) confers sweeping immunity: "No member of Parliament shall be liable to any proceedings in any court in respect of anything said or any vote given by him in Parliament". In P.V. Narasimha Rao (1998), a 5-Judge Bench held that MPs who accepted bribes and cast their votes were completely immune from criminal bribery charges! How did the 7-Judge Bench in Sita Soren (2024) dismantle this bizarre anomaly without violating the plain text of Article 105(2)?',
    detailedContext:
      'For 26 years, the ruling in P.V. Narasimha Rao stood as a moral stain on Indian constitutional jurisprudence: an MP who took a bribe and voted was immune, while an MP who took a bribe but abstained or spoke against the bribe could be prosecuted! In March 2024, a unanimous 7-Judge Bench overruled Narasimha Rao in Sita Soren v. Union of India.',
    conflictingAuthorities: {
      sideA: {
        caseOrText: 'Article 105(2) & P.V. Narasimha Rao (1998)',
        coreHolding: '"In respect of" has wide meaning; courts cannot inquire into corrupt motives behind legislative voting.'
      },
      sideB: {
        caseOrText: 'Sita Soren v. Union of India (2024)',
        coreHolding: 'The crime of bribery is complete the moment the bribe is accepted; parliamentary privilege protects legislative function, not criminality.'
      }
    },
    keyLatinMaxim: 'Nemo punitur pro alieno delicto & In pari delicto potior est conditio defendentis',
    highYieldExamTip:
      'In Mains, emphasize the test of "functional necessity": Parliamentary privileges exist solely to enable legislators to deliberate fearlessly, not to place them in an enclave above ordinary criminal law.',
    argumentPaths: [
      {
        id: 'arg-6a-functional',
        thesisTitle: 'The Functional Necessity Test & Consummation of Bribery',
        candidateOpeningStatement:
          'Privileges are not personal immunities; they are functional shields. The offense of bribery under Section 7 of the Prevention of Corruption Act is completed the moment illegal gratification is accepted, independent of how the vote is subsequently cast. Immunity under Article 105(2) does not attach to independent criminal acts.',
        jurisprudentialPhilosophy: 'Purposive / Living Constitutionalist',
        juristCounterThrust:
          'Well argued, Counsel! But what if a hostile ruling executive uses police agencies to fabricate bribery charges against opposition MPs to intimidate them right before a crucial vote of confidence? Does Article 105(2) not exist precisely to stop police interference in parliamentary voting?',
        identifiedFallacy: {
          fallacyName: 'The Chilling Effect Apprehension',
          fallacyExplanation:
            'Confusing legitimate parliamentary speech with corrupt criminal conspiracies; fear of executive abuse cannot justify blanket criminal immunity.'
        },
        rebuttalDilemma:
          'How does the Sita Soren doctrine prevent malicious executive intimidation of legislators while ensuring corrupt MPs are prosecuted?',
        rebuttalOptions: [
          {
            id: 'reb-6a-1',
            statement:
              'The court applies the two-fold functional necessity test: privilege extends ONLY to collective deliberations necessary to discharge legislative duties. Corruption destroys the foundation of parliamentary democracy and can never be a protected function.',
            isOptimalSynthesis: true,
            examinerVerdict:
              'Unanimous bench approval! You have quoted the exact ratio of the 7-Judge Bench in Sita Soren.',
            depthGainPct: 50
          },
          {
            id: 'reb-6a-2',
            statement:
              'The Speaker alone should decide whether a bribe was taken, without any police or court intervention.',
            isOptimalSynthesis: false,
            examinerVerdict:
              'The Speaker has no jurisdiction to conduct criminal investigations or impose penal imprisonment under the PC Act!',
            depthGainPct: 5
          }
        ],
        concludingSynthesisRatio: {
          benchCitation: 'Sita Soren v. Union of India ((2024) 5 SCC 625 / 7-Judge Bench)',
          rulingRatio:
            'Overruled P.V. Narasimha Rao (1998). Bribery is not protected by parliamentary privilege under Article 105(2) or 194(2). The offense of bribery is complete the moment undue advantage is accepted. Privileges must pass the test of functional necessity.',
          mainsAnswerBlueprint: {
            introduction:
              'Define the constitutional purpose of parliamentary privileges under Article 105 and 194.',
            conflictAnalysis:
              'Critique the absurd paradox created by the majority in P.V. Narasimha Rao (1998).',
            harmoniousResolution:
              'Explain the dual test laid down in Sita Soren: (1) Does the privilege protect a necessary legislative function? (2) Does the criminal act destroy democratic integrity?',
            contemporaryRelevance:
              'Highlight how Sita Soren restores public faith in electoral and legislative integrity.'
          }
        }
      }
    ]
  }
];

export interface SocraticProgressState {
  currentParadoxId: string;
  depthScorePct: number; // 0 to 100%
  completedParadoxIds: string[];
  totalFallaciesSpotted: number;
}
