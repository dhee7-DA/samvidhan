import type { ComparativeCountry } from '../types/constitution';

export const COMPARATIVE_DATA: ComparativeCountry[] = [
  {
    country: 'United Kingdom',
    code: 'GBR',
    flagEmoji: '🇬🇧',
    borrowedFeatures: [
      {
        feature: 'Parliamentary Form of Government (Westminster Model)',
        constitutionalArticles: 'Articles 74, 75, 163, 164',
        indianAdaptation: 'Executive is drawn from and responsible to the Legislature, but India adopted an elected President rather than a hereditary Crown.'
      },
      {
        feature: 'Rule of Law (A.V. Dicey conception)',
        constitutionalArticles: 'Article 14',
        indianAdaptation: 'Absence of arbitrary power and equality before law, fortified by written constitutional supremacy rather than British Parliamentary sovereignty.'
      },
      {
        feature: 'Prerogative Writs System',
        constitutionalArticles: 'Articles 32 and 226',
        indianAdaptation: 'Writs (Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo-Warranto) are constitutionally guaranteed fundamental remedies, not discretionary royal remedies.'
      },
      {
        feature: 'Single Citizenship & Bicameralism',
        constitutionalArticles: 'Articles 9, 79, 168',
        indianAdaptation: 'Single national citizenship to combat regional fissiparous tendencies; bicameral Parliament with distinct federal representation.'
      }
    ]
  },
  {
    country: 'United States of America',
    code: 'USA',
    flagEmoji: '🇺🇸',
    borrowedFeatures: [
      {
        feature: 'Fundamental Rights (Bill of Rights)',
        constitutionalArticles: 'Articles 12 – 35 (Part III)',
        indianAdaptation: 'Enumerated explicitly with bounded, codified reasonable restrictions in text, unlike absolute US phrasing conditioned by judicial police power.'
      },
      {
        feature: 'Independent Judiciary & Judicial Review',
        constitutionalArticles: 'Articles 13, 32, 136, 142, 226',
        indianAdaptation: 'Integrated unified judicial pyramid rather than separate dual federal and state court systems.'
      },
      {
        feature: 'Impeachment of the President & Removal of Judges',
        constitutionalArticles: 'Articles 61, 124(4), 217',
        indianAdaptation: 'Rigorous quasi-judicial two-thirds total membership thresholds in both parliamentary chambers.'
      },
      {
        feature: 'Vice-President as Ex-Officio Chairman of Upper House',
        constitutionalArticles: 'Article 64',
        indianAdaptation: 'Modeled directly on the US Senate structure; Vice-President presides over the Rajya Sabha.'
      }
    ]
  },
  {
    country: 'Ireland',
    code: 'IRL',
    flagEmoji: '🇮🇪',
    borrowedFeatures: [
      {
        feature: 'Directive Principles of State Policy',
        constitutionalArticles: 'Articles 36 – 51 (Part IV)',
        indianAdaptation: 'Adapted from the 1937 Irish Constitution (which borrowed from Spain); non-justiciable affirmative socio-economic goals of governance.'
      },
      {
        feature: 'Nomination of Members to Rajya Sabha',
        constitutionalArticles: 'Article 80(3)',
        indianAdaptation: 'President nominates 12 distinguished members possessing special knowledge in Literature, Science, Art, and Social Service.'
      },
      {
        feature: 'Method of Election of the President',
        constitutionalArticles: 'Articles 54 and 55',
        indianAdaptation: 'Proportional representation by means of the single transferable vote with calculated state-population vote weighting.'
      }
    ]
  },
  {
    country: 'Canada',
    code: 'CAN',
    flagEmoji: '🇨🇦',
    borrowedFeatures: [
      {
        feature: 'Federation with a Strong Centre (Quasi-Federal)',
        constitutionalArticles: 'Article 1, 248, 356',
        indianAdaptation: 'K.C. Wheare described India as "Quasi-Federal". Central government possesses overriding legislative and emergency powers.'
      },
      {
        feature: 'Vesting of Residuary Powers in the Centre',
        constitutionalArticles: 'Article 248, Entry 97 List I',
        indianAdaptation: 'Unlike the US and Australia where residuary powers lie with states, India vested all unlisted powers in the Union Parliament.'
      },
      {
        feature: 'Appointment of State Governors by the Centre',
        constitutionalArticles: 'Article 155',
        indianAdaptation: 'Governors are nominated by the President of India rather than popularly elected by the state population.'
      },
      {
        feature: 'Advisory Jurisdiction of the Supreme Court',
        constitutionalArticles: 'Article 143',
        indianAdaptation: 'President may refer substantial questions of law or fact to the Supreme Court for non-binding advisory determination.'
      }
    ]
  },
  {
    country: 'Australia',
    code: 'AUS',
    flagEmoji: '🇦🇺',
    borrowedFeatures: [
      {
        feature: 'Concurrent List of Legislative Subjects',
        constitutionalArticles: 'Seventh Schedule, List III',
        indianAdaptation: 'Shared legislative domain where both Parliament and States can enact statutes; central repugnancy rule applies under Art 254.'
      },
      {
        feature: 'Freedom of Trade, Commerce, and Intercourse',
        constitutionalArticles: 'Articles 301 – 307 (Part XIII)',
        indianAdaptation: 'Modeled on Section 92 of the Australian Constitution, ensuring unimpeded economic trade across state boundaries.'
      },
      {
        feature: 'Joint Sitting of the Two Houses of Parliament',
        constitutionalArticles: 'Article 108',
        indianAdaptation: 'Mechanics to resolve deadlocks over ordinary bills, presided over by the Speaker of the Lok Sabha.'
      }
    ]
  },
  {
    country: 'Weimar Republic of Germany',
    code: 'DEU',
    flagEmoji: '🇩🇪',
    borrowedFeatures: [
      {
        feature: 'Suspension of Fundamental Rights during Emergency',
        constitutionalArticles: 'Articles 358 and 359',
        indianAdaptation: 'Suspension of enforcement of rights, but shielded Articles 20 and 21 permanently after the 44th Amendment 1978.'
      }
    ]
  },
  {
    country: 'USSR (Soviet Union)',
    code: 'RUS',
    flagEmoji: '🇷🇺',
    borrowedFeatures: [
      {
        feature: 'Fundamental Duties',
        constitutionalArticles: 'Article 51A (Part IV-A)',
        indianAdaptation: 'Added by 42nd Amendment 1976 on Swaran Singh Committee recommendation to emphasize civic duties alongside democratic rights.'
      },
      {
        feature: 'Ideal of Justice (Social, Economic, and Political)',
        constitutionalArticles: 'Preamble, Article 38',
        indianAdaptation: 'Rooted in the egalitarian aspirations of the 1917 Russian Revolution.'
      }
    ]
  },
  {
    country: 'South Africa',
    code: 'ZAF',
    flagEmoji: '🇿🇦',
    borrowedFeatures: [
      {
        feature: 'Procedure for Amendment of the Constitution',
        constitutionalArticles: 'Article 368',
        indianAdaptation: 'Special majority voting mechanics and state ratification thresholds.'
      },
      {
        feature: 'Election of Members of the Rajya Sabha',
        constitutionalArticles: 'Article 80(4)',
        indianAdaptation: 'Elected by the elected members of the Legislative Assembly of each State by proportional representation with single transferable vote.'
      }
    ]
  },
  {
    country: 'France',
    code: 'FRA',
    flagEmoji: '🇫🇷',
    borrowedFeatures: [
      {
        feature: 'Republic and Ideals of Liberty, Equality, and Fraternity',
        constitutionalArticles: 'Preamble',
        indianAdaptation: 'Enshrines an elected head of state and egalitarian ideals stemming from the French Revolution of 1789.'
      }
    ]
  },
  {
    country: 'Government of India Act, 1935',
    code: 'GOI',
    flagEmoji: '🏛️',
    borrowedFeatures: [
      {
        feature: 'Structural Blueprint & Administrative Details',
        constitutionalArticles: 'Over 250 provisions (Parts V, VI, XI, XII, XVIII)',
        indianAdaptation: 'Federal scheme, Office of Governor, Judiciary structure, Public Service Commissions, Emergency administrative provisions.'
      }
    ]
  }
];
