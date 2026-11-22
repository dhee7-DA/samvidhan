export interface HookPair {
  id: string;
  topicKeyword: string; // matches topicId or keywords e.g. "governor", "tenth-schedule", "election", "federalism", "fr", "article-21"
  themeTitle: string;
  openingHooks: {
    statutoryHook: string;
    judicialHook: string;
  };
  closingHooks: {
    constitutionalMoralityHook: string;
    institutionalReformHook: string;
  };
}

export const INTRO_CONCLUSION_HOOKS_DATA: HookPair[] = [
  // =========================================================================
  // 1. EXECUTIVE & GUBERNATORIAL DISCRETION (ARTICLE 200, 163, 356)
  // =========================================================================
  {
    id: 'hooks-governor-executive',
    topicKeyword: 'governor',
    themeTitle: 'State Executive & Governor\'s Constitutional Role (Articles 163, 200, 356)',
    openingHooks: {
      statutoryHook:
        'In a parliamentary democracy governed by cabinet responsibility (Article 163), the Governor functions as a constitutional figurehead. Under Article 200, when a bill passed by the state legislature is presented, the Governor must act "as soon as possible", precluding any extra-constitutional pocket veto.',
      judicialHook:
        'As reaffirmed by the 3-Judge Bench in State of Punjab v. Principal Secretary to Governor (2023), our Constitution does not envisage the Governor as an elected legislature\'s rival. Gubernatorial inaction cannot paralyze the sovereign democratic mandate of an elected House.'
    },
    closingHooks: {
      constitutionalMoralityHook:
        'Ultimately, the office of the Governor was conceived by Dr. B.R. Ambedkar not as an imperial proconsul, but as a sage constitutional referee. Upholding constitutional morality requires that executive discretion harmonizes with, rather than supersedes, representative parliamentary democracy (Shamsher Singh v. State of Punjab).',
      institutionalReformHook:
        'Codifying the recommendations of the Sarkaria Commission (1988) and Punchhi Commission (2010)—imposing an outer limit of six months for gubernatorial assent and insulating the office from partisan dominance—is vital to preserve the cooperative equilibrium of Indian federalism.'
    }
  },

  // =========================================================================
  // 2. PARLIAMENTARY INTEGRITY & TENTH SCHEDULE
  // =========================================================================
  {
    id: 'hooks-tenth-schedule',
    topicKeyword: 'tenth-schedule',
    themeTitle: 'Anti-Defection Law, Speaker\'s Powers & Political Morality (Tenth Schedule)',
    openingHooks: {
      statutoryHook:
        'Inserted by the 52nd Constitutional Amendment Act, 1985, the Tenth Schedule was designed to purge Indian politics of unprincipled defections. Under Paragraph 2(1)(b), lawmakers owe primary constitutional fidelity to the parent "Political Party" that fielded them, rather than a breakaway legislative faction.',
      judicialHook:
        'In Subhash Desai v. Principal Secretary (2023), the 5-Judge Constitution Bench established that political democracy is built on voter commitments made by political parties. Severing the elected legislature party from its parent political organization strikes at the heart of representative accountability.'
    },
    closingHooks: {
      constitutionalMoralityHook:
        'The anti-defection framework must evolve from a tactical weapon for partisan survival into an instrument of electoral honesty. As held in Kihoto Hollohan (1992), political morality demands that a lawmaker who betrays the electoral mandate must seek fresh legitimacy from the sovereign electorate.',
      institutionalReformHook:
        'To eliminate the chronic spectacle of partisan delays, Parliament must urgently implement the 2nd ARC and Keisham Meghachandra (2020) recommendations: stripping the political Speaker of disqualification jurisdiction and vesting it in an independent permanent constitutional tribunal.'
    }
  },

  // =========================================================================
  // 3. ELECTORAL INTEGRITY & DEMOCRACY (ARTICLE 324 & 19(1)(a))
  // =========================================================================
  {
    id: 'hooks-elections-democracy',
    topicKeyword: 'election',
    themeTitle: 'Free & Fair Elections, Transparency & Electoral Bodies (Articles 324, 19(1)(a))',
    openingHooks: {
      statutoryHook:
        'Article 324 vests the superintendence, direction, and control of elections in an independent Election Commission. Free, fair, and transparent elections are an indispensable component of the Basic Structure (Indira Nehru Gandhi v. Raj Narain).',
      judicialHook:
        'In Association for Democratic Reforms (ADR 2024), the 5-Judge Constitution Bench declared that the voter\'s right to information under Article 19(1)(a) is the lifeblood of participatory democracy. Information asymmetry between the state and the citizen vitiates the constitutional level playing field.'
    },
    closingHooks: {
      constitutionalMoralityHook:
        'Democracy is meaningful only when the citizen\'s vote is an informed choice rather than a commercially manufactured consensus. Constitutional democracy demands that the integrity of the ballot box is shielded from the corrosive influence of unaccounted corporate money and executive dominance.',
      institutionalReformHook:
        'In line with the 255th Law Commission Report (2015) and Anoop Baranwal (2023), guaranteeing institutional independence for the Election Commission requires an autonomous multi-party selection collegium and uniform constitutional protection against removal under Article 324(5) for all commissioners.'
    }
  },

  // =========================================================================
  // 4. FUNDAMENTAL RIGHTS, DUE PROCESS & ARTICLE 21
  // =========================================================================
  {
    id: 'hooks-fundamental-rights-21',
    topicKeyword: 'art-21',
    themeTitle: 'Life, Personal Liberty & Substantive Due Process (Article 21)',
    openingHooks: {
      statutoryHook:
        'Article 21 guarantees that "no person shall be deprived of his life or personal liberty except according to procedure established by law." Through judicial expansion, this procedural guarantee has been elevated into substantive due process (Maneka Gandhi v. Union of India).',
      judicialHook:
        'From K.S. Puttaswamy (2017) to M.K. Ranjitsinh (2024), the Supreme Court has interpreted Article 21 as an organic, living charter of human dignity—encompassing privacy, bodily autonomy, right to die with dignity, and freedom from the adverse impacts of climate change.'
    },
    closingHooks: {
      constitutionalMoralityHook:
        'Article 21 is the pulsating heart of the Indian Constitution. In the timeless words of Justice H.R. Khanna in ADM Jabalpur (1976), the right to life and liberty is not a revocable gift of the State, but an inalienable human birthright that judicial review must fearlessly defend against executive excesses.',
      institutionalReformHook:
        'Translating expanding Article 21 jurisprudence into reality requires structural police and prison reforms, strict statutory compliance with DK Basu and 2024 Demolition guidelines, and ensuring that preventive detention remains an exceptional measure strictly bounded by Article 22.'
    }
  },

  // =========================================================================
  // 5. FEDERALISM, SEVENTH SCHEDULE & ARTICLE 246/279A
  // =========================================================================
  {
    id: 'hooks-federalism',
    topicKeyword: 'federalism',
    themeTitle: 'Cooperative & Asymmetric Federalism (Part XI, XII & Seventh Schedule)',
    openingHooks: {
      statutoryHook:
        'Indian federalism is a sui generis constitutional pact with a strong unitary bias (K.C. Wheare\'s quasi-federal model). However, through the Seventh Schedule and Article 246, the States are not administrative satellites of the Centre, but supreme within their demarcated legislative spheres (S.R. Bommai v. Union of India).',
      judicialHook:
        'In Union of India v. Mohit Minerals (2022), the Supreme Court recognized that Indian federalism is a dialogue that encompasses "uncooperative federalism", where States legitimately challenge central uniformities to renegotiate democratic autonomy within the constitutional matrix.'
    },
    closingHooks: {
      constitutionalMoralityHook:
        'Federalism is part of the basic structure of the Constitution. A vibrant democracy requires the Union to lead through constitutional consensus rather than majoritarian coercion, recognizing that the unity of India is fortified by its regional diversity.',
      institutionalReformHook:
        'Revitalizing the Inter-State Council under Article 263 as an active dispute-resolution chamber and rebalancing fiscal devolution through the Finance Commission are critical imperatives to resolve ongoing fiscal and legislative friction between the Union and the States.'
    }
  },

  // =========================================================================
  // 6. JUDICIARY, BASIC STRUCTURE & ARTICLE 142/368
  // =========================================================================
  {
    id: 'hooks-judiciary-basic-structure',
    topicKeyword: 'judiciary',
    themeTitle: 'Constitutional Supremacy, Judicial Review & Basic Structure (Articles 13, 32, 142, 368)',
    openingHooks: {
      statutoryHook:
        'Under Articles 32 and 226, the constitutional courts serve as the "protector and guarantor of fundamental rights" (Romesh Thappar). Judicial review forms an integral part of the Basic Structure that cannot be abrogated even by constituent amendment under Article 368 (Kesavananda Bharati v. State of Kerala).',
      judicialHook:
        'As established in I.R. Coelho (2007) and Supreme Court Bar Association (1998), the plenary powers under Article 142 and judicial review under Article 32 operate as the ultimate constitutional bulwark, ensuring that no statutory or executive authority can create an enclave immune from the Golden Triangle of Articles 14, 19, and 21.'
    },
    closingHooks: {
      constitutionalMoralityHook:
        'The judiciary derives its moral legitimacy not from electoral majorities, but from unflinching adherence to the Constitution. The Basic Structure doctrine ensures that while transient parliamentary majorities may change laws, the fundamental democratic soul of the Republic remains unalterable.',
      institutionalReformHook:
        'To preserve public trust, the higher judiciary must balance judicial review with institutional self-restraint, reform the opaque Collegium via a transparent Memorandum of Procedure (MoP), and establish Regional Courts of Appeal (229th Law Commission Report) to conquer the docket crisis under Article 136.'
    }
  }
];
