import type { VisualBlueprintSpec } from './visualBlueprintsTypes';

export const TRACK_1_RIGHTS_BLUEPRINTS: VisualBlueprintSpec[] = [
  {
    id: 'art-12-state-test',
    title: 'Article 12: "State" Definition & Ajay Hasia 6-Factor Test',
    category: 'Fundamental Rights Threshold',
    track: 'Rights & Remedies',
    articles: 'Article 12',
    summary: 'How courts test whether an autonomous body, PSU, society, or sports federation is "The State" subject to writ jurisdiction under Part III.',
    topology: 'hub-spoke',
    rootLabel: 'ARTICLE 12',
    rootSub: 'State = Instrumentality Test',
    edgeFlowTag: '6-PRONG CHECK',
    footerRule: 'Even a private society becomes "State" if government exercises deep & pervasive financial, functional, and administrative control (Pradeep Biswas 2002).',
    nodes: [
      {
        id: 'exec-legis',
        badge: 'BRANCH 1',
        title: 'Govt & Parliament / State Legis.',
        subtitle: 'Executive + Union/State Legislatures',
        tag: 'Sovereign Organs',
        edgeLabel: 'Explicit Text',
        rule: 'Includes President, Governors, Councils of Ministers, Union Parliament, and all State Legislatures when enacting statutes or issuing executive orders.',
        callouts: [
          'Includes statutory notifications & delegated rules',
          'Judiciary when acting judicially is excluded (Naresh Mirajkar 1966)',
          'Judiciary acting administratively (staff rules) IS State (Riju Prasad)'
        ],
        landmarkCase: 'Naresh Shridhar Mirajkar v. State of Maharashtra (1966)',
        examTrap: 'Exam Trap: "Supreme Court sitting on judicial side" is NOT "State" under Art 12 for writ challenge via another Art 32 petition!'
      , colorKey: 'sky'
      },
      {
        id: 'local-auth',
        badge: 'BRANCH 2',
        title: 'Local Authorities',
        subtitle: 'Panchayats, Municipalities, Port Trusts',
        tag: 'Statutory Power',
        edgeLabel: 'Tax & Bye-Laws',
        rule: 'Authorities legally empowered to administer local areas, levy local taxes, and frame enforceable bye-laws as held in Rashid Ahmed and Mohammad Yasin.',
        callouts: [
          'Includes Municipal Corporations, Zilla Parishads & Improvement Trusts',
          'Must possess autonomous power to enforce penalties',
          'University Academic Councils & Housing Boards fall under Local/Other Authorities'
        ],
        landmarkCase: 'Union of India v. R.C. Jain (1981) 5-Test Standard',
        examTrap: 'Body must satisfy dual test: separate legal existence + defined territorial governance + power to raise own local funds.'
      , colorKey: 'emerald'
      },
      {
        id: 'ajay-finance',
        badge: 'AJAY HASIA 1-2',
        title: 'Share Capital & Financial Funding',
        subtitle: 'Entire Shareholding + Entire Expenditure',
        tag: 'Monetary Control',
        edgeLabel: 'Funding Prong',
        rule: 'Prongs 1 & 2 of Ajay Hasia v. Khalid Mujib (1981): Whether entire share capital is held by Government OR State financial assistance meets almost entire expenditure.',
        callouts: [
          'PSU corporations like ONGC, SAIL, LIC (Sukhdev Singh 1975)',
          'CSIR (7-Judge Pradeep Biswas Bench overruled Sabhajit Tewary)',
          'Grant-in-aid alone without structural control does not automatically convert'
        ],
        landmarkCase: 'Ajay Hasia v. Khalid Mujib (1981) & Pradeep Kumar Biswas (2002)',
        examTrap: 'Cumulative consideration matters: no single prong by itself is conclusive; courts weigh cumulative dominance!'
      , colorKey: 'violet'
      },
      {
        id: 'ajay-monopoly',
        badge: 'AJAY HASIA 3-4',
        title: 'State-Protected Monopoly & Control',
        subtitle: 'Statutory Monopoly + Deep Control',
        tag: 'Pervasive Dominance',
        edgeLabel: 'Control Prong',
        rule: 'Prongs 3 & 4: Enjoys State-conferred or State-protected monopoly status AND presence of deep & pervasive State control over board appointments and policy.',
        callouts: [
          'Board dissolution or director veto by Ministry triggers "State"',
          'BCCI failed "Article 12 State" test (Zee Telefilms 2005 3:2) since no State funding/monopoly law exists',
          'HOWEVER BCCI performs "Public Function" so amenable to Art 226 High Court writ!'
        ],
        landmarkCase: 'Zee Telefilms Ltd. v. Union of India (2005) 5-Judge Bench',
        examTrap: 'MOST TESTED DISTINCTION: BCCI is NOT "State" under Art 12 (no Art 32 petition), yet amenable to Art 226 writ because of "public function"!'
      , colorKey: 'rose'
      },
      {
        id: 'public-function',
        badge: 'AJAY HASIA 5-6',
        title: 'Public Functions & Govt Dept Transfer',
        subtitle: 'Closely Related Governmental Functions',
        tag: 'Sovereign Transfer',
        edgeLabel: 'Functional Test',
        rule: 'Prongs 5 & 6: Functions of public importance closely allied to sovereign functions OR conversion of an erstwhile government department into a corporation.',
        callouts: [
          'Applies to International Airport Authority (Ramana Dayaram Shetty 1979)',
          'Includes Nationalized Banks & Public Universities',
          'Private unaided schools performing public duty of education can face Art 226 review'
        ],
        landmarkCase: 'R.D. Shetty v. International Airport Authority (1979)',
        examTrap: 'NCERT was held NOT State in Chander Mohan Khanna (1991) despite education role because control was autonomous & non-monopolistic.'
      , colorKey: 'accent'
      }
    ]
  },
  {
    id: 'art-13-review-doctrines',
    title: 'Article 13: Eclipse, Severability & Waiver Doctrines',
    category: 'Judicial Review Filters',
    track: 'Rights & Remedies',
    articles: 'Article 13(1) – (4)',
    summary: 'How Pre-Constitutional (13(1)) and Post-Constitutional (13(2)) laws are tested, severed, eclipsed, or shielded from Art 368 amendments.',
    topology: 'flowchart',
    rootLabel: 'ARTICLE 13',
    rootSub: 'Constitutional Consistency Filter',
    edgeFlowTag: 'VALIDITY CHECK',
    footerRule: 'Pre-Constitution laws offending Part III merely enter dormant "Eclipse" (can revive after amendment); Post-Constitution laws offending Part III are stillborn / void ab initio.',
    nodes: [
      {
        id: 'art-13-1',
        badge: 'ART 13(1) · ECLIPSE',
        title: 'Pre-1950 Law & Doctrine of Eclipse',
        subtitle: 'Dormant — Not Erased From Statute',
        tag: 'Shadow Rule',
        edgeLabel: 'If Pre-1950',
        rule: 'Laws existing before 26 Jan 1950 violating Part III become inoperative (overshadowed by Fundamental Rights), NOT void ab initio.',
        callouts: [
          'If a subsequent constitutional amendment lifts the shadow, the law automatically revives (Bhikaji Narain 1955)',
          'Applies prospectively only (Keshavan Madhava Menon 1951)',
          'Pre-1950 offences continue unaffected'
        ],
        landmarkCase: 'Bhikaji Narain Dhakras v. State of M.P. (1955)',
        examTrap: 'TRAP: Does Eclipse apply to Post-1950 laws? Deep Chand (1959) said NO for citizens, but Ambica Mills (1974) held YES against non-citizens!'
      , colorKey: 'sky'
      },
      {
        id: 'art-13-2',
        badge: 'ART 13(2) · AB INITIO',
        title: 'Post-1950 Laws Void Ab Initio',
        subtitle: 'Stillborn Lack of Competence',
        tag: 'Injunction',
        edgeLabel: 'If Post-1950',
        rule: 'The State "shall not make any law" taking away or abridging Part III. A violating post-1950 law is void ab initio — unenforceable against citizens.',
        callouts: [
          'Wait: For non-citizens where Art 19 does not apply (like corporations), law remains valid against them (Ambica Mills)',
          'Includes ordinances, bye-laws, notifications & custom (Art 13(3))',
          'Includes personal law statutory codifications'
        ],
        landmarkCase: 'State of Gujarat v. Shri Ambica Mills (1974)',
        examTrap: 'Corporations are NOT citizens under Part III (Art 19), though individual shareholders can challenge jointly (Bennett Coleman).'
      , colorKey: 'rose'
      },
      {
        id: 'severability',
        badge: 'SEVERABILITY',
        title: 'Doctrine of Severability',
        subtitle: 'Surgically Excise Invalid Provisions',
        tag: 'Savings Test',
        edgeLabel: 'Partial Void',
        rule: 'If the unconstitutional clause can be separated without destroying legislative intent, ONLY the offending fragment falls while the rest survives.',
        callouts: [
          'Test: Would Legislature have enacted the valid part alone?',
          'If inextricably bound together, entire Act fails (Romesh Thappar)',
          'Applied in R.M.D. Chamarbaugwalla (1957) & Kihoto Hollohan (1992)'
        ],
        landmarkCase: 'R.M.D. Chamarbaugwalla v. Union of India (1957)',
        examTrap: 'In Kihoto Hollohan (1992), SC severed ONLY Paragraph 7 of 10th Schedule (barring judicial review) while saving all anti-defection provisions!'
      , colorKey: 'emerald'
      },
      {
        id: 'art-13-4',
        badge: 'ART 13(3) & (4)',
        title: '"Law" Definition & 24th Amendment',
        subtitle: 'Statutory Law vs Art 368 Constituent Power',
        tag: '24th Amd Guard',
        edgeLabel: 'Art 368 Track',
        rule: 'Art 13(3) defines "law" broadly (ordinance, rule, custom); 24th Amendment inserted Art 13(4) stating Art 13 does NOT apply to Art 368 Amendments — upheld subject to Basic Structure.',
        callouts: [
          'Personal laws uncodified rule debated in Narasu Appa Mali vs Shayara Bano',
          'Judiciary administrative orders are NOT "law" unless legislative',
          'Basic Structure acts as higher shield outside Art 13(4)'
        ],
        landmarkCase: 'Kesavananda Bharati (1973) upholding Art 13(4)',
        examTrap: 'Fundamental Rights CANNOT be waived by any citizen (Basheshar Nath 1959) — Part III is a constitutional command to the State!'
      , colorKey: 'violet'
      }
    ]
  },
  {
    id: 'art-14-equality-evolution',
    title: 'Article 14: From Nexus Classification to Manifest Arbitrariness',
    category: 'Right to Equality',
    track: 'Rights & Remedies',
    articles: 'Article 14',
    summary: 'Interactive scale balancing Formal British Classification (1952) against E.P. Royappa’s Dynamic Anti-Arbitrariness and Nariman J.’s Manifest Arbitrariness.',
    topology: 'balance-beam',
    rootLabel: 'ARTICLE 14 EQUILIBRIUM',
    rootSub: 'Equality Before Law (UK) + Equal Protection (US)',
    edgeFlowTag: 'SCRUTINY PIVOT',
    footerRule: 'Equality Before Law (negative obligation: no special privilege, Rule of Law) harmonizes with Equal Protection of Laws (positive obligation: like treated alike).',
    nodes: [
      {
        id: 'anwar-ali',
        badge: 'ANWAR ALI (1952)',
        title: 'Two-Prong Classification Test',
        subtitle: 'Intelligible Differentia + Rational Nexus',
        tag: 'Old Classification',
        rule: 'While Art 14 forbids class legislation, it permits reasonable classification IF: (1) Founded on intelligible differentia distinguishing grouped from left out, AND (2) Rational relation to statutory object.',
        callouts: [
          'Both prongs MUST pass simultaneously (Saurabh Chaudri 2003)',
          'Presumption of constitutionality rests with State unless patently hostile',
          'Single-person Act can be valid if treating class of one (Chiranjit Lal)'
        ],
        landmarkCase: 'State of West Bengal v. Anwar Ali Sarkar (1952)',
        examTrap: 'Art 14 protects "any person" (citizens + foreigners + juristic corporations), NOT just citizens!'
      , colorKey: 'sky'
      },
      {
        id: 'royappa-1974',
        badge: 'ROYAPPA (1974)',
        title: 'Dynamic Anti-Arbitrariness',
        subtitle: 'Equality & Arbitrariness Are Sworn Enemies',
        tag: 'Substantive Shift',
        rule: 'Justice Bhagwati liberated Art 14 from "cribbed, cabined and confined" classification pigeonholes: ANY arbitrary executive act violates Art 14 even without a comparator group.',
        callouts: [
          'Wednesbury unreasonableness test merged into administrative review',
          'Required non-arbitrariness in tenders, contracts & public employment',
          'Later applied in Maneka Gandhi (1978)'
        ],
        landmarkCase: 'E.P. Royappa v. State of Tamil Nadu (1974)',
        examTrap: 'Remember: For decades after McDowell (1996), SC doubted whether PRIMARY legislation could be struck down just for arbitrariness — until Shayara Bano (2017)!'
      , colorKey: 'violet'
      },
      {
        id: 'shayara-manifest',
        badge: 'SHAYARA (2017)',
        title: 'Manifest Arbitrariness Doctrine',
        subtitle: 'Plenary Statutes Reviewed for Capriciousness',
        tag: 'Legislative Review',
        rule: 'Nariman J. settled that even an Act of Parliament can be struck down under Art 14 if it is irrational, capricious, excessive, or lacks an adequate determining principle.',
        callouts: [
          'Overruled State of A.P. v. McDowell (1996) immunity for statutes',
          'Used to strike down instant triple talaq, Section 377 (Navtej), Section 497 (Joseph Shine), Electoral Bonds (2024)',
          'Applies strictly where disproportion/irrationality is manifest'
        ],
        landmarkCase: 'Shayara Bano (2017) & Electoral Bonds Bench (2024)',
        examTrap: 'CRITICAL DISTINCTION: "Equality Before Law" comes from A.V. Dicey (British); "Equal Protection of Laws" comes from US 14th Amendment!'
      , colorKey: 'emerald'
      },
      {
        id: 'dicey-exceptions',
        badge: 'EXCEPTIONS · ART 361',
        title: 'Constitutional Immunities vs Rule of Law',
        subtitle: 'Arts 361, 105, 194 & 31C Carve-outs',
        tag: 'Structural Carveout',
        rule: 'Dicey’s Rule of Law admits explicit constitutional exceptions: President & Governors enjoy Art 361 criminal immunity in office; MPs/MLAs hold Art 105/194 legislative speech protection.',
        callouts: [
          'Art 361 bars arrest or criminal proceedings against sitting President/Governor',
          'Civil relief against Governor requires 2 months prior written notice',
          'Foreign diplomats & UN envoys carry sovereign immunity'
        ],
        landmarkCase: 'Rameshwar Prasad (2006) — Immunity does not shield mala fide Art 356 reports',
        examTrap: 'While Governor enjoys personal immunity under Art 361(1), Courts CAN quash Governor’s unconstitutional orders on grounds of mala fides!'
      , colorKey: 'rose'
      }
    ]
  },
  {
    id: 'art-17-18-social-equality',
    title: 'Articles 17 & 18: Untouchability Abolition & Titles Prohibition',
    category: 'Horizontal Fundamental Rights',
    track: 'Rights & Remedies',
    articles: 'Articles 17 & 18',
    summary: 'Horizontal rights operating directly against private citizens alongside non-compoundable criminal liability and Republic vs Royal titles distinction.',
    topology: 'matrix-split',
    rootLabel: 'HORIZONTAL & REPUBLICAN EQUALITY (ARTS 17–18)',
    rootSub: 'Direct Civic Code • No Exception Clause in Bare Text',
    edgeFlowTag: 'SOCIAL BAR',
    footerRule: 'Article 17 is an ABSOLUTE right enforceable against private individuals with zero "reasonable restriction" exceptions in the text of Part III.',
    nodes: [
      {
        id: 'art-17-abs',
        badge: 'ARTICLE 17 · LEFT',
        title: 'Absolute Abolition of Untouchability',
        subtitle: 'Enforceable Against Private & State Action',
        tag: 'Zero Exceptions',
        side: 'left',
        rule: '"Untouchability" is abolished and its practice in any form is forbidden. Enforcement of any disability shall be an offence punishable in accordance with law.',
        callouts: [
          'Text does NOT define "Untouchability" (historical caste pollution practices)',
          'Protection of Civil Rights Act 1955 & SC/ST (PoA) Act 1989 enacted via Art 35',
          'State owes proactive duty to stop social boycotts (PUDR v. UOI)'
        ],
        landmarkCase: 'Indian Young Lawyers Assn v. State of Kerala (Sabarimala 2018)',
        examTrap: 'Chandrachud J. in Sabarimala held Art 17 reaches exclusion based on notions of purity/pollution, NOT just historical caste!'
      , colorKey: 'emerald'
      },
      {
        id: 'art-17-statute',
        badge: 'ARTICLE 35 LINK',
        title: 'Exclusive Parliament Criminal Legislation',
        subtitle: 'State Legislatures Barred From Defining Offence',
        tag: 'Parliament Only',
        side: 'left',
        rule: 'Under Article 35, ONLY Parliament (not State Legislatures) can prescribe uniform criminal punishments for Article 17 offences across India.',
        callouts: [
          'Untouchability (Offences) Act 1955 renamed Protection of Civil Rights Act 1976',
          'Conviction under PCR Act disqualifies candidate from Parliament/Assembly (RPA s.8)',
          'Anticipatory bail bar in SC/ST PoA upheld in Prathvi Raj Chauhan (2020)'
        ],
        landmarkCase: 'State of Karnataka v. Appa Balu Ingale (1993)',
        examTrap: 'Word "Untouchability" is enclosed in inverted commas ("Untouchability") in Art 17 — signifying historical caste construct, not literal quarantine!'
      , colorKey: 'sky'
      },
      {
        id: 'art-18-titles',
        badge: 'ARTICLE 18 · RIGHT',
        title: 'Prohibition of Hereditary Titles',
        subtitle: 'Bars Nobility Titles (18(1)–(4))',
        tag: 'Directory / Civic',
        side: 'right',
        rule: 'State shall not confer any title except military or academic distinction. Citizens cannot accept foreign titles (18(2)); non-citizens holding State office of profit need Presidential consent for foreign titles/presents (18(3)–(4)).',
        callouts: [
          'Bans colonial hereditary ranks (Rai Bahadur, Maharaja, Knighthood prefixes)',
          'Exception: Military (Param Vir Chakra, Major) & Academic (Dr., Prof.)',
          'Contains NO criminal penalty in Constitution or Art 35'
        ],
        landmarkCase: 'Balaji Raghavan v. Union of India (1996) 5-Judge Bench',
        examTrap: 'Art 18 is strictly DIRECTORY (not backed by automatic statutory penalty), unlike Art 17 which mandates criminal punishment!'
      , colorKey: 'violet'
      },
      {
        id: 'bharat-ratna',
        badge: 'BALAJI RAGHAVAN',
        title: 'National Awards: Merit != Title',
        subtitle: 'Bharat Ratna, Padma Vibhushan Constitutionality',
        tag: 'Prefix Ban Rule',
        side: 'right',
        rule: 'In Balaji Raghavan (1996), SC upheld National Awards (Bharat Ratna / Padma Awards instituted 1954) as Constitutional under Art 51A(j) excellence.',
        callouts: [
          'Awards recognize merit & national service — NOT hereditary nobility',
          'Awardees CANNOT use "Bharat Ratna" or "Padma Shri" as prefixes or suffixes to names',
          'Misuse as prefix risks forfeiture of award'
        ],
        landmarkCase: 'Balaji Raghavan v. Union of India (1996)',
        examTrap: 'High-Yield Trap: Can a Padma Shri winner print "Padma Shri X" on visiting cards or letterheads? NO — using National Awards as name prefixes violates Art 18!'
      , colorKey: 'rose'
      }
    ]
  },
  {
    id: 'art-19-six-freedoms',
    title: 'Article 19(1)(a)–(g) & Asymmetric Restriction Grounds',
    category: 'Democratic Freedoms',
    track: 'Rights & Remedies',
    articles: 'Article 19(1) to (6)',
    summary: 'Mapped radial chart separating the 6 protected citizen freedoms and pairing each with its exact exhaustive sub-clause restriction matrix under 19(2)–(6).',
    topology: 'hub-spoke',
    rootLabel: 'ARTICLE 19',
    rootSub: 'Citizens Only • 6 Freedoms',
    edgeFlowTag: 'EXHAUSTIVE CLAUSES',
    footerRule: 'State CANNOT invent extra "public interest" grounds outside Clauses (2)–(6). Art 19 automatically suspends ONLY under Art 352 War/External Aggression (not Armed Rebellion!).',
    nodes: [
      {
        id: 'f-speech',
        badge: '19(1)(a) & 19(2)',
        title: 'Speech, Press & Internet',
        subtitle: 'Restricted by 8 Grounds in 19(2)',
        tag: 'Public Order != L&O',
        edgeLabel: '8 Grounds Only',
        rule: 'Includes right to know, silence (Bijoe Emmanuel), flag hoisting (Naveen Jindal), press circulation (Sakal Papers), and internet access (Anuradha Bhasin).',
        callouts: [
          '8 Exhaustive Grounds in 19(2): Sovereignty/Integrity, Security, Foreign Relations, Public Order, Decency/Morality, Contempt, Defamation, Incitement',
          '1st Amendment added "Public Order", "Friendly Relations", "Incitement"; 16th Amd added "Sovereignty & Integrity"',
          'Sec 66A IT Act struck down as vague in Shreya Singhal (2015)'
        ],
        landmarkCase: 'Romesh Thappar (1950), Shreya Singhal (2015), Kaushal Kishor (2023)',
        examTrap: 'HUGE TRAP: "General Public Interest" is NOT a valid restriction ground on Free Speech under 19(2) — unlike 19(5) & 19(6)!'
      , colorKey: 'sky'
      },
      {
        id: 'f-assembly',
        badge: '19(1)(b) & 19(3)',
        title: 'Peaceable Assembly Without Arms',
        subtitle: 'Grounds: Sovereignty & Public Order Only',
        tag: 'No Right to Strike',
        edgeLabel: '2 Grounds Only',
        rule: 'Right to hold public meetings, demonstrations & processions peacefully and unarmed. Does NOT include right to block public roads indefinitely (Shaheen Bagh 2020) or strike (T.K. Rangarajan 2003).',
        callouts: [
          'Only 2 grounds in 19(3): Sovereignty/Integrity + Public Order',
          'Sec 144 CrPC / BNSS 163 preventive orders must pass proportionality',
          'Bans armed marches except constitutional exceptions (Kirpans in Art 25)'
        ],
        landmarkCase: 'Amit Sahni v. Commissioner of Police (Shaheen Bagh 2020)',
        examTrap: 'Notice Bandh is illegal (CPI(M) v. Bharat Kumar 1998); Peaceful Bandh/Hartal distinction turns on coercion!'
      , colorKey: 'emerald'
      },
      {
        id: 'f-assoc',
        badge: '19(1)(c) & 19(4)',
        title: 'Associations, Unions & Cooperatives',
        subtitle: '97th Amd Added "Co-operative Societies"',
        tag: '3 Grounds',
        edgeLabel: '97th Amd 2011',
        rule: 'Freedom to form political parties, companies, trade unions & cooperative societies (added by 97th Amendment 2011). Includes negative freedom NOT to join.',
        callouts: [
          '3 Grounds in 19(4): Sovereignty/Integrity, Public Order, Morality',
          'Right to form union != fundamental right of union recognition or industrial strike',
          'Rajendra Shah (2021) struck down Part IXB on intra-state cooperatives but kept 19(1)(c) word intact!'
        ],
        landmarkCase: 'Damyanti Naranga (1971) & All India Bank Employees (1962)',
        examTrap: '"Co-operative Societies" in 19(1)(c) survived Rajendra Shah (2021) 2:1 verdict!'
      , colorKey: 'violet'
      },
      {
        id: 'f-move-res',
        badge: '19(1)(d)(e) & (5)',
        title: 'Movement & Residence Across India',
        subtitle: 'Grounds: General Public & Scheduled Tribes',
        tag: 'Inner Line Safeguard',
        edgeLabel: 'Tribal Shield',
        rule: 'Guarantees internal national mobility (external travel abroad falls under Art 21 Maneka Gandhi!). Restricted under 19(5) ONLY in General Public Interest or Protection of Scheduled Tribes.',
        callouts: [
          'Art 19(1)(d) = Free movement across India; Art 21 = Right to travel abroad',
          'Justifies Inner Line Permits (ILP) in North-East & externment of habitual offenders',
          'Art 19(1)(e) right to settle anywhere except protected Fifth/Sixth Schedule belts'
        ],
        landmarkCase: 'Kharak Singh (1962) & State of U.P. v. Kaushaliya (1964)',
        examTrap: 'Right to obtain a Passport and travel OUT of India is under ARTICLE 21 (Satwant Singh / Maneka), NOT Article 19(1)(d)!'
      , colorKey: 'rose'
      },
      {
        id: 'f-prof',
        badge: '19(1)(g) & 19(6)',
        title: 'Profession, Occupation, Trade & Business',
        subtitle: 'Grounds: Public Interest + State Monopoly',
        tag: 'No Res Extra Commercium',
        edgeLabel: 'Monopoly OK',
        rule: 'Protects lawful trades/professions. State may prescribe technical qualifications, total/partial State monopoly (1st Amd), or ban noxious trades (liquor, gambling — Khoday Distilleries).',
        callouts: [
          'Hawking on streets subject to regulatory zones is a valid 19(1)(g) right (Sodan Singh)',
          'Right to close down a loss-making enterprise is part of 19(1)(g) (Excel Wear 1978)',
          'Art 19(1)(f) Property deleted by 44th Amendment (1978)'
        ],
        landmarkCase: 'Chintaman Rao (1951) & Sodan Singh v. NDMC (1989)',
        examTrap: 'There is NO fundamental right to trade in liquor or lotteries (Res Extra Commercium doctrine)!'
      , colorKey: 'accent'
      }
    ]
  },
  {
    id: 'art-20-criminal-immunity',
    title: 'Article 20: Ex-Post Facto, Double Jeopardy & Self-Incrimination',
    category: 'Criminal Constitutional Immunity',
    track: 'Rights & Remedies',
    articles: 'Article 20(1), (2) & (3)',
    summary: 'Non-suspendable criminal shields (44th Amd): barring retroactive penal crimes, dual judicial prosecutions, and testimonial compulsion.',
    topology: 'pyramid-hierarchy',
    rootLabel: 'ARTICLE 20 INVARIANT SHIELD',
    rootSub: 'Never Suspends Even in Emergency (Art 359)',
    edgeFlowTag: 'TRIPLE SHIELD',
    footerRule: 'Under 44th Amendment (1978), Articles 20 & 21 can NEVER be suspended by President even during National Emergency under Article 359.',
    nodes: [
      {
        id: 'a20-expost',
        badge: 'ART 20(1)',
        title: 'No Ex-Post Facto Criminal Law',
        subtitle: 'Bars Retroactive Crime & Higher Penalty',
        tag: 'Civil Tax Retro OK',
        rule: 'No person shall be convicted of any offence except for violation of a law in force at the time of commission, NOR subjected to a penalty greater than that applicable then.',
        callouts: [
          'ONLY bars criminal conviction & enhanced punishment — civil/tax retrospective laws ARE valid!',
          'Beneficial retroactive reduction in punishment IS permitted (Rattan Lal 1965)',
          'Preventive detention and disciplinary inquiries are outside Art 20(1)'
        ],
        landmarkCase: 'Kedar Nath Bajoria (1953) & Rattan Lal v. State of Punjab (1965)',
        examTrap: 'BIGGEST TRAP: Ex-post facto prohibition applies ONLY to SUBSTANTIVE criminal law/penalty — NOT to procedural or evidence rules, and NOT to tax laws!'
      , colorKey: 'sky'
      },
      {
        id: 'a20-double',
        badge: 'ART 20(2)',
        title: 'No Double Jeopardy (Nemo Debet)',
        subtitle: 'Both "Prosecuted AND Punished"',
        tag: 'Cumulative Twin Test',
        rule: 'No person shall be prosecuted AND punished for the same offence more than once. Narrower than US/UK "autrefois acquit" rule!',
        callouts: [
          'Applies ONLY when accused was BOTH prosecuted AND punished by a judicial court/tribunal',
          'Departmental disciplinary inquiry or Customs confiscation (Maqbool Hussain) is NOT judicial prosecution',
          'Sec 300 CrPC / BNSS 337 gives wider statutory protection including acquittal bar'
        ],
        landmarkCase: 'Maqbool Hussain v. State of Bombay (1953) & S.A. Venkataraman',
        examTrap: 'If an accused is prosecuted AND ACQUITTED, Art 20(2) does NOT bar a retrial (statutory BNSS Sec 337 bars it, NOT Art 20(2)!)!'
      , colorKey: 'violet'
      },
      {
        id: 'a20-selfincrim',
        badge: 'ART 20(3)',
        title: 'Protection Against Self-Incrimination',
        subtitle: 'No Accused Compelled to Be a Witness',
        tag: 'Kathi Kalu + Selvi',
        rule: 'No person accused of any offence shall be compelled to be a witness against himself. Protects mental testimony, NOT physical forensic samples.',
        callouts: [
          'Kathi Kalu Oghad (11-Judge 1961): Fingerprints, DNA, blood, voice & handwriting samples do NOT violate Art 20(3)',
          'Selvi v. State of Karnataka (2010): Involuntary Narco-analysis, Polygraph & Brain Mapping VIOLATE Art 20(3) & Art 21!',
          'Must be formally "accused of an offence" when statement is compelled (Nandini Satpathy)'
        ],
        landmarkCase: 'State of Bombay v. Kathi Kalu Oghad (1961) & Selvi (2010)',
        examTrap: 'Compelled DNA / blood / voice test = VALID (Kathi Kalu); Involuntary Lie-detector / Narco test = INVALID (Selvi)!'
      , colorKey: 'emerald'
      },
      {
        id: 'a20-non-susp',
        badge: '44TH AMD · 359',
        title: 'Absolute Emergency Non-Suspendability',
        subtitle: 'Art 20 + Art 21 Immune Under Art 359',
        tag: 'All Persons (incl. Aliens)',
        rule: 'Post-44th Amendment (1978), President cannot suspend enforcement rights for Articles 20 and 21 under Article 359.',
        callouts: [
          'Applies equally to citizens and foreign nationals',
          'Overruled Emergency suspension logic of ADM Jabalpur (1976)',
          'Anchored in Basic Structure human dignity'
        ],
        landmarkCase: '44th Amendment Act 1978 & Puttaswamy (2017)',
        examTrap: 'Available to "all persons" — even foreign nationals and corporations (for ex-post facto tax/criminal distinction).'
      , colorKey: 'rose'
      }
    ]
  },
  {
    id: 'art-22-preventive-detention',
    title: 'Article 22: Arrest Safeguards vs. Preventive Detention Clock',
    category: 'Personal Liberty Exceptions',
    track: 'Rights & Remedies',
    articles: 'Article 22(1) – (7)',
    summary: 'Clockwork breakdown contrasting punitive arrest rights under 22(1)–(2) against the 3-month Advisory Board preventive detention cycle.',
    topology: 'cycle-sequence',
    rootLabel: 'ARTICLE 22',
    rootSub: 'Punitive (24h) vs Preventive (3 Mo)',
    edgeFlowTag: 'DETENTION CLOCK',
    footerRule: 'Clauses 22(1)–(2) (Grounds + Lawyer + 24-Hr Magistrate) apply ONLY to punitive arrest; 22(3) EXPLICITLY EXCLUDES Enemy Aliens & Preventive Detainees!',
    nodes: [
      {
        id: 'punitive-1',
        badge: 'STAGE 1 · 22(1)',
        title: 'Grounds & Counsel Right',
        subtitle: 'Inform Grounds + Lawyer of Choice',
        tag: 'Mandatory at Arrest',
        edgeLabel: 'At Arrest',
        rule: 'Any person arrested under ordinary criminal law MUST be informed of grounds of arrest in writing/language understood (Pankaj Bansal 2023) and consulted by legal practitioner of choice.',
        callouts: [
          'Applies instantly on formal arrest or restraint (D.K. Basu Guidelines)',
          'Applies to PMLA arrests too (Pankaj Bansal 2023 & Prabir Purkayastha 2024)',
          'Excluded for enemy aliens & preventive detention (22(3))'
        ],
        landmarkCase: 'Pankaj Bansal v. Union of India (2023) & Prabir Purkayastha (2024)',
        examTrap: 'Court-ordered arrest warrants and civil tax recovery arrests are outside 22(1)–(2) (State of Punjab v. Ajaib Singh).'
      , colorKey: 'sky'
      },
      {
        id: 'punitive-2',
        badge: 'STAGE 2 · 22(2)',
        title: '24-Hour Magistrate Production',
        subtitle: 'Excludes Journey Time from Arrest Place',
        tag: 'Strict Custody Lock',
        edgeLabel: '< 24 Hours',
        rule: 'Arrested person must be produced before nearest Judicial Magistrate within 24 hours (excluding necessary travel time). No further detention without Magistrate order.',
        callouts: [
          'Violation converts detention into unlawful custody warranting Habeas Corpus',
          'Includes physical exhaustion & medical check mandates',
          'Prevents secret police lock-up torture'
        ],
        landmarkCase: 'Joginder Kumar (1994) & Arnesh Kumar (2014)',
        examTrap: 'Remember: Travel time from place of arrest to Magistrate court IS excluded when computing the 24-hour ceiling!'
      , colorKey: 'emerald'
      },
      {
        id: 'prev-board',
        badge: 'STAGE 3 · 22(4)',
        title: '3-Month Detention & Advisory Board',
        subtitle: 'Sitting / Former High Court Judges Panel',
        tag: 'Max 3 Mo Without Board',
        edgeLabel: 'Within 3 Mo',
        rule: 'Preventive detention CANNOT exceed 3 months unless an Advisory Board (qualified to be High Court Judges) certifies sufficient cause before expiry.',
        callouts: [
          '44th Amendment sought to cut 3 months to 2 months — NEVER NOTIFIED YET!',
          'Both Parliament (Defence, Foreign Affairs — Entry 9 List I) & States/Parl (Public Order, Supplies — Entry 3 List III) can legislate',
          'Detainee has NO right to lawyer before Advisory Board (A.K. Roy 1982)'
        ],
        landmarkCase: 'A.K. Roy v. Union of India (1982) 5-Judge Bench',
        examTrap: 'CRITICAL CONSTITUTIONAL FACT: Text mentions "two months" in 44th Amd Sec 3, but because Govt never notified it, the effective constitutional period REMAINS THREE MONTHS!'
      , colorKey: 'rose'
      },
      {
        id: 'prev-rep',
        badge: 'STAGE 4 · 22(5)-(7)',
        title: 'Representation & Parliament Ceiling',
        subtitle: 'Grounds + Opportunity Unless Public Interest',
        tag: 'Reviewable Subjectivity',
        edgeLabel: 'Art 22(5)',
        rule: 'Authority must communicate detention grounds as soon as possible and afford earliest opportunity to make representation, though facts against public interest may be withheld (22(6)).',
        callouts: [
          'Unexplained delay in deciding representation vitiates detention (Rekha v. State of T.N. 2011)',
          'Parliament alone can prescribe max period via 22(7)',
          'NSA 1980, COFEPOSA, PITNDPS operate within Art 22'
        ],
        landmarkCase: 'Rekha v. State of Tamil Nadu (2011)',
        examTrap: 'Art 22(5) requires subjective satisfaction of detaining authority + strict procedural compliance: preventive detention is exception, not substitute for ordinary trial!'
      , colorKey: 'violet'
      }
    ]
  },
  {
    id: 'art-23-24-exploitation',
    title: 'Articles 23 & 24: Forced Labour, Trafficking & Child Labour',
    category: 'Right Against Exploitation',
    track: 'Rights & Remedies',
    articles: 'Articles 23 & 24',
    summary: 'Human dignity safeguards equating sub-minimum wage payment to "forced labour" (PUDR Asiad) alongside hazardous employment prohibitions for minors.',
    topology: 'flowchart',
    rootLabel: 'ARTS 23 & 24',
    rootSub: 'Exploitation Prohibition • All Persons',
    edgeFlowTag: 'HORIZONTAL MANDATE',
    footerRule: 'Both Articles 23 and 24 apply vertically against the State AND horizontally against private contractors, factories, and households.',
    nodes: [
      {
        id: 'trafficking',
        badge: 'ART 23(1) · BEGAR',
        title: 'Ban on Trafficking & Begar',
        subtitle: 'Forced Labour Including Sub-Minimum Wage',
        tag: 'Economic Compulsion',
        edgeLabel: 'PUDR Rule',
        rule: 'Prohibits human trafficking, begar (unpaid compulsory labour), and other forms of forced labour. Contravention is an offence punishable under Bonded Labour System (Abolition) Act 1976.',
        callouts: [
          'Begar = involuntary work extracted without remuneration',
          'Includes Devadasi system, debt bondage, and forced prostitution (Immoral Traffic Act)',
          'Also protects foreign nationals within India'
        ],
        landmarkCase: 'Sanjit Roy v. State of Rajasthan (1983) — Famine relief workers must earn minimum wage!',
        examTrap: 'Paying BELOW statutory minimum wage due to hunger/poverty compulsion equals "FORCED LABOUR" under Art 23 even if worker "signed" voluntarily!'
      , colorKey: 'rose'
      },
      {
        id: 'pudr-asiad',
        badge: 'ASIAD GAMES RULE',
        title: 'Economic Force Counts as Compulsion',
        subtitle: 'No "Free Consent" Beneath Hunger Line',
        tag: 'State Vicarious Duty',
        edgeLabel: 'Enforced',
        rule: 'In PUDR (Asiad Workers 1982), Justice Bhagwati held physical violence isn’t needed: compulsion arising from hunger and poverty nullifies "voluntary" wage contracts.',
        callouts: [
          'Union Govt held responsible even when private contractors underpaid construction workers',
          'Prisoners sentenced to rigorous imprisonment CANNOT be denied equitable wages (State of Gujarat v. Hon’ble HC 1998)',
          'PIL locus directly admitted via letter writ'
        ],
        landmarkCase: 'People’s Union for Democratic Rights v. Union of India (1982)',
        examTrap: 'Yes — rigorous-imprisonment convicts performing jail labour MUST still be paid equitable wages after deducting maintenance!'
      , colorKey: 'sky'
      },
      {
        id: 'art-23-2',
        badge: 'ART 23(2) EXCEPTION',
        title: 'Compulsory Public Purpose Service',
        subtitle: 'Allowed Without Caste/Class Discrimination',
        tag: 'Sole Carve-Out',
        edgeLabel: 'State Service',
        rule: 'State may impose compulsory service for public purposes (e.g. military conscription, civic crisis mobilization), provided NO discrimination occurs ONLY on grounds of religion, race, caste, or class.',
        callouts: [
          'Notice "SEX" is notably NOT listed among the 4 prohibited grounds in Art 23(2) text!',
          'State does NOT have to pay remuneration for compulsory public service under 23(2)',
          'Applies strictly for genuine national/public purpose'
        ],
        landmarkCase: 'Constituent Assembly Art 23(2) Debate',
        examTrap: 'SHARP PRELIMS TRAP: The 4 grounds listed in Art 23(2) are Religion, Race, Caste, Class (SEX & PLACE OF BIRTH are NOT in Art 23(2) text!).'
      , colorKey: 'emerald'
      },
      {
        id: 'art-24-child',
        badge: 'ARTICLE 24 · <14 YRS',
        title: 'Prohibition of Child Employment',
        subtitle: 'No Under-14 in Factory, Mine or Hazard',
        tag: 'M.C. Mehta + 2016 Act',
        edgeLabel: 'Under-14 Bar',
        rule: 'No child below 14 years shall be employed in any factory, mine, or engaged in any other hazardous employment. Linked closely with Art 21A Right to Education (6–14 yrs).',
        callouts: [
          '2016 Child Labour Amendment banned ALL occupations for under-14 (except safe after-school family enterprises / audio-visual arts)',
          'M.C. Mehta Sivakasi (1996): Rs 20,000 offending-employer Child Welfare Rehabilitation Corpus',
          'Adolescents (14–18) barred from hazardous occupations under 2016 Act'
        ],
        landmarkCase: 'M.C. Mehta v. State of Tamil Nadu (Sivakasi Fireworks 1996)',
        examTrap: 'Art 24 prohibits "hazardous employment" even in text, while the 2016 statutory amendment extended the ban across nearly all child occupations under 14.'
      , colorKey: 'violet'
      }
    ]
  },
  {
    id: 'art-25-28-secularism-erd',
    title: 'Articles 25–28: Essential Religious Practices & Secularism Balance',
    category: 'Freedom of Religion',
    track: 'Rights & Remedies',
    articles: 'Articles 25, 26, 27 & 28',
    summary: 'Equilibrium scale weighing individual freedom of conscience and denominational autonomy (26) against Public Order, Morality, Health & Social Reform.',
    topology: 'balance-beam',
    rootLabel: 'INDIAN SECULARISM (SARVA DHARMA SAMABHAVA)',
    rootSub: 'Principled Distance Model • Not Strict Western Wall of Separation',
    edgeFlowTag: 'ART 25–26 TEST',
    footerRule: 'Art 25 covers individuals (subject also to "other Part III provisions"!), while Art 26 covers Religious Denominations (Shirur Mutt 3-prong test).',
    nodes: [
      {
        id: 'art-25-scope',
        badge: 'ART 25(1)-(2)',
        title: 'Freedom of Conscience & Propagation',
        subtitle: 'Profess, Practice & Propagate != Forced Conversion',
        tag: 'Stanislaus Rule',
        rule: 'All persons (incl. foreigners) equally entitled to freedom of conscience and right freely to profess, practice and propagate religion — subject to Public Order, Morality, Health & OTHER Part III rights.',
        callouts: [
          'Stainislaus (1977): "Propagate" = transmit tenets by exposition, NOT fundamental right to convert others!',
          'Art 25(2)(a): Regulates secular/financial activities linked to religion',
          'Art 25(2)(b): Social welfare & throwing open Hindu temples to all classes (incl. Sikhs, Jains, Buddhists)'
        ],
        landmarkCase: 'Rev. Stanislaus v. State of M.P. (1977) & Bijoe Emmanuel (1986)',
        examTrap: 'Notice Art 25 is explicitly "subject to the other provisions of Part III" (unlike Art 26!), enabling Equality (Arts 14–15) reforms!'
      , colorKey: 'sky'
      },
      {
        id: 'erp-test',
        badge: 'SHIRUR MUTT TO SABARIMALA',
        title: 'Essential Religious Practices (ERP) Test',
        subtitle: 'Integral Core vs Peripheral Superstition',
        tag: 'Court Theological Filter',
        rule: 'Only practices essential and integral to the religion — without which the religion’s core identity alters — earn Part III immunity (Shirur Mutt 1954).',
        callouts: [
          'Tandava dance in public streets held non-essential (Ananda Marga 2004)',
          'Cow sacrifice on Bakr-Id held optional/non-essential (Quareshi 1958)',
          'Sabarimala (2018) 4:1 vs 9-Judge Bench review on Judicial ERP Limits!'
        ],
        landmarkCase: 'Shirur Mutt (1954) & Sabarimala 4:1 Bench (2018)',
        examTrap: 'Art 26 does NOT mention "subject to other provisions of Part III", creating direct tension with Arts 14/15/17 — referred to 9-Judge Bench!'
      , colorKey: 'violet'
      },
      {
        id: 'art-26-denom',
        badge: 'ART 26 · DENOMINATION',
        title: 'Denominational Rights (3-Prong Test)',
        subtitle: 'Common Faith + Organization + Distinct Name',
        tag: 'Aurobindo Test',
        rule: 'Every religious denomination or section has rights to establish charitable institutions, manage religious affairs, and own/administer property per law.',
        callouts: [
          'Ramakrishna Mission = Religious Denomination; Aurobindo Society & Ayyappans (per Sabarimala majority) failed 3-prong test',
          'Secular administration of temple property CAN be taken over by State (Subramanian Swamy 2014)',
          'Only religious affairs stay immune from State takeover'
        ],
        landmarkCase: 'S.P. Mittal v. Union of India (1983) 3-Prong Test',
        examTrap: 'State CAN regulate or audit temple finances and secular management, as long as it does NOT abolish a denomination’s right to administer entirely!'
      , colorKey: 'emerald'
      },
      {
        id: 'art-27-28',
        badge: 'ARTS 27 & 28 · FISCAL/EDU',
        title: 'No Religious Tax (27) & 4 School Tiers (28)',
        subtitle: 'Tax Ban (Fee OK) & Instruction Tiers',
        tag: 'Tax != Service Fee',
        rule: 'Art 27 prohibits compelling taxes specifically to promote any religion (Regulatory "Fee" for pilgrim amenities IS valid!). Art 28 bans religious instruction in wholly State-funded institutions.',
        callouts: [
          'Art 27 bars TAXES (general revenue); does NOT bar FEE for temple audit or Haj/Amarnath facilities (Prafulla Goradia 2011)',
          'Art 28 Four Tiers: (1) Wholly State-funded -> Ban; (2) State-administered Endowment -> Allowed; (3) Recognized -> Optional (Consent); (4) Aided -> Optional',
          'Moral/value education respecting all faiths != sectarian religious instruction (Aruna Roy 2002)'
        ],
        landmarkCase: 'Prafulla Goradia v. Union of India (2011) & Aruna Roy (2002)',
        examTrap: 'Art 28 allows mandatory religious instruction ONLY in Type 2 institutions (administered by State but established under a Trust/Endowment requiring it)!'
      , colorKey: 'rose'
      }
    ]
  },
  {
    id: 'art-29-30-minority-institutions',
    title: 'Articles 29 & 30: Cultural Safeguards & Minority Institution Autonomy',
    category: 'Cultural & Educational Rights',
    track: 'Rights & Remedies',
    articles: 'Articles 29 & 30',
    summary: 'Matrix contrasting broader Section of Citizens protection (Art 29) against Religious & Linguistic Minority Administration Rights (Art 30 + AMU 2024).',
    topology: 'matrix-split',
    rootLabel: 'CULTURAL & EDUCATIONAL RIGHTS (ARTS 29–30)',
    rootSub: '"Minority" Defined State-Wise (T.M.A. Pai) • Not Defined in Text',
    edgeFlowTag: 'MINORITY TEST',
    footerRule: 'After AMU 7-Judge Bench (2024 overruling Azeez Basha), an institution retains Art 30 "established" status if minorities founded/conceptualized it even if recognized by Parliament statute.',
    nodes: [
      {
        id: 'art-29-any',
        badge: 'ARTICLE 29 · ALL CITIZENS',
        title: 'Any Section of Citizens (Incl. Majority)',
        subtitle: 'Conserve Distinct Language, Script, Culture',
        tag: 'Covers Majority Too!',
        side: 'left',
        rule: 'Art 29(1) protects ANY section of citizens (not just minorities!) having a distinct language, script or culture. Art 29(2) bars admission discrimination on 4 grounds ONLY in State-maintained/aided institutions.',
        callouts: [
          '4 prohibited grounds in 29(2): Religion, Race, Caste, Language (Note: SEX & PLACE OF BIRTH excluded!)',
          'Political promises to conserve language cannot be corrupt electoral practice under RPA (Jagdev Singh 1965)',
          'D.A.V. College Jalandhar held Hindus in Punjab ARE a minority under Art 30!'
        ],
        landmarkCase: 'Jagdev Singh Sidhanti (1965) & D.A.V. College Punjab (1971)',
        examTrap: 'HUGE EXAM TRAP: The word "Minority" appears in the marginal heading of Art 29, NOT inside the operative text of Art 29(1) ("any section of the citizens")!'
      , colorKey: 'sky'
      },
      {
        id: 'art-30-stateunit',
        badge: 'T.M.A. PAI RULE',
        title: 'State Is Unit for Defining Minority',
        subtitle: 'Linguistic & Religious Only (No Ethnic/Caste)',
        tag: '50% Population Anchor',
        side: 'left',
        rule: 'In T.M.A. Pai Foundation (11-Judge 2002), SC held that because reorganization of states followed linguistic boundaries, BOTH linguistic and religious minorities are determined STATE-WISE (not nationally).',
        callouts: [
          'Article 30 recognizes ONLY Religious & Linguistic minorities',
          'Constitution does NOT numerically define "Minority" anywhere',
          '30(1A) 44th Amendment ensures fair compensation if Minority school property is compulsorily acquired'
        ],
        landmarkCase: 'T.M.A. Pai Foundation v. State of Karnataka (2002) 11-Judge Bench',
        examTrap: 'Maladministration is NEVER a right under Art 30: State CAN regulate teacher qualifications, hygiene, academic standards & fairness!'
      , colorKey: 'violet'
      },
      {
        id: 'art-30-autonomy',
        badge: 'ART 30 · ADMINISTER',
        title: 'Right to Establish AND Administer',
        subtitle: 'Unaided vs Aided Regulation Spectrum',
        tag: 'No SC/ST/OBC Quota Mandate',
        side: 'right',
        rule: 'Minority institutions are exempt from reservation mandates under Article 15(5) (Ashoka Kumar Thakur 2008 & Pramati 2014) and RTE Act 25% free seats rule (Pramati).',
        callouts: [
          'Unaided Minority institutions enjoy maximum autonomy over admissions (merit/transparent) and fees (non-profiteering)',
          'Can reserve up to ~50% seats for own minority community (St. Stephen’s 1992 modified by Pai)',
          'State aid cannot force surrender of fundamental minority character (Art 30(2))'
        ],
        landmarkCase: 'Pramati Educational & Cultural Trust v. UOI (2014) 5-Judge Bench',
        examTrap: 'Under Art 15(5) & 15(6) (93rd & 103rd Amds), BOTH Aided and Unaided Minority Institutions are constitutionally EXEMPT from caste & EWS reservation quotas!'
      , colorKey: 'emerald'
      },
      {
        id: 'amu-2024',
        badge: 'AMU 7-JUDGE (2024)',
        title: 'Aligarh Muslim University Indicia Test',
        subtitle: 'Azeez Basha (1967) Overruled 4:3',
        tag: 'Statutory Incorporation OK',
        side: 'right',
        rule: 'In Aligarh Muslim University v. Naresh Agarwal (Nov 2024, 4:3 majority led by CJI Chandrachud), SC overruled Azeez Basha (1967): an institution created before/via central statute does NOT forfeit Art 30 merely by statutory recognition.',
        callouts: [
          'Real test: Who conceived, funded, and brought the nucleus institution into existence?',
          'Minority administration need not remain exclusively minority after establishment',
          'Does NOT require institution to teach solely religious courses'
        ],
        landmarkCase: 'Aligarh Muslim University v. Naresh Agarwal (2024) 7-Judge Bench',
        examTrap: '2024 UPGRADE: Do NOT say statutory incorporation bars Art 30 status — that 1967 Azeez Basha rule was expressly OVERRULED in November 2024!'
      , colorKey: 'rose'
      }
    ]
  },
  {
    id: 'right-to-property-300a',
    title: 'Right to Property Journey: Art 19(1)(f) -> 31 -> 300A (2024)',
    category: 'Constitutional & Legal Rights',
    track: 'Rights & Remedies',
    articles: 'Arts 31A–31C & 300A',
    summary: 'Complete journey from Fundamental Right conflict (1950–1978) to 44th Amendment Constitutional Legal Right & Bimal Kumar Shah (2024) 7-sub-rights.',
    topology: 'flowchart',
    rootLabel: 'PROPERTY EVOLUTION',
    rootSub: 'FR Clash -> Constitutional Legal Right',
    edgeFlowTag: '1950 – 2024',
    footerRule: 'Art 300A protects ALL persons (not citizens only): deprivation requires valid statutory law (NOT executive order!), and Bimal Kumar Shah (2024) mandates 7 procedural sub-rights.',
    nodes: [
      {
        id: 'prop-1951',
        badge: 'STAGE 1 · ARTS 19(1)(f)/31',
        title: '1950–78 Fundamental Right Conflicts',
        subtitle: 'Zamindari Abolition & Bank Nationalisation',
        tag: '1st, 4th, 25th Amds',
        edgeLabel: 'Amendments',
        rule: 'Original Articles 19(1)(f) and 31 collided with land reforms (Kameshwar Singh), sparking 1st Amd (Arts 31A, 31B, 9th Sch), 4th Amd (compensation non-justiciability), and 25th Amd ("amount" after R.C. Cooper 1970).',
        callouts: [
          '1st Amendment 1951 created 9th Schedule protective umbrella',
          'Bella Banerjee (1954): "Compensation" required full market equivalent',
          'R.C. Cooper (Bank Nationalisation 1970) demanded illusory-amount check'
        ],
        landmarkCase: 'R.C. Cooper v. Union of India (1970) 11-Judge Bench',
        examTrap: 'Savings: Articles 31A, 31B (9th Schedule), and 31C STILL remain inside Part III even after Art 31 itself was repealed!'
      , colorKey: 'rose'
      },
      {
        id: 'prop-44th',
        badge: 'STAGE 2 · 44TH AMD 1978',
        title: 'Demotion to Article 300A (Part XII)',
        subtitle: 'No Longer Fundamental Right (No Direct Art 32)',
        tag: 'Constitutional Right',
        edgeLabel: '1978 Shift',
        rule: '44th Amendment repealed Arts 19(1)(f) & 31 and inserted Art 300A: "No person shall be deprived of his property save by authority of law." Writs move from Art 32 to Art 226 High Court.',
        callouts: [
          'Executive order alone CANNOT take citizen property (Bishambhar Dayal)',
          'Still binds State legislature to enact valid statute',
          'Retained compensation exceptions ONLY for Minorities (Art 30(1A)) & Personal Ceiling Cultivation (Art 31A(1) 2nd proviso)'
        ],
        landmarkCase: 'Jilubhai Nanbhai Khachar v. State of Gujarat (1995)',
        examTrap: 'Property is a "Constitutional & Legal Right" (also Human Right per Hari Krishna Mandir), NOT merely an ordinary statutory right — only Parliament via 368 can alter 300A!'
      , colorKey: 'sky'
      },
      {
        id: 'prop-39b-2024',
        badge: 'STAGE 3 · ART 39(b) 2024',
        title: 'Property Owners Assn (9-Judge 2024)',
        subtitle: 'Private Property != Material Resource Automatically',
        tag: 'Overruled Krishna Iyer J.',
        edgeLabel: 'Nov 2024 Bench',
        rule: '9-Judge Bench led by CJI Chandrachud (8:1) overruled Justice Krishna Iyer’s Ranganatha Reddy (1977) view: ALL private property is NOT automatically "material resources of community" under Art 39(b); context-specific criteria apply.',
        callouts: [
          'Affirmed Art 31C protects Art 39(b)/(c) laws ONLY per pre-Minerva Mills unamended text',
          'Private resources qualify under 39(b) only based on scarcity, impact & public character',
          'Rejected rigid ideological socialism in favor of balanced mixed economy'
        ],
        landmarkCase: 'Property Owners Association v. State of Maharashtra (Nov 2024, 9-Judge)',
        examTrap: 'HIGH-YIELD 2024 UPDATE: Art 31C remains VALID in its unamended Kesavananda scope (protecting Art 39(b)/(c)), NOT dead!'
      , colorKey: 'violet'
      },
      {
        id: 'bimal-2024',
        badge: 'STAGE 4 · BIMAL SHAH 2024',
        title: '7 Mandatory Procedural Rights in 300A',
        subtitle: 'Notice, Hearing, Reasons, Public Purpose & Compensation',
        tag: 'Due Process in 300A',
        edgeLabel: '2024 Doctrine',
        rule: 'In Kolkata Municipal Corp v. Bimal Kumar Shah (May 2024), SC held a valid statute alone is insufficient — "authority of law" requires 7 minimum procedural safeguards.',
        callouts: [
          '1. Notice (Right to be told); 2. Hearing (Right to object); 3. Reasoned Decision',
          '4. Demonstrable Public Purpose; 5. Fair Compensation (restitution);',
          '6. Efficient Conduct Timeline; 7. Formal Conclusion & Possession Vesting'
        ],
        landmarkCase: 'Kolkata Municipal Corp v. Bimal Kumar Shah (2024)',
        examTrap: 'Absent fair procedure & restitutionary compensation, even a statutory acquisition can be struck down directly under Art 300A!'
      , colorKey: 'emerald'
      }
    ]
  },
  {
    id: 'dpsp-trinity-taxonomy',
    title: 'Part IV Directive Principles: Socialist, Gandhian & Liberal Taxonomy',
    category: 'Directive Principles of State Policy',
    track: 'Rights & Remedies',
    articles: 'Articles 36 to 51',
    summary: 'Structural pyramid sorting all Directive Principles into ideological streams alongside all Articles added by 42nd, 44th, 86th & 97th Amendments.',
    topology: 'pyramid-hierarchy',
    rootLabel: 'PART IV DPSP ARCHITECTURE',
    rootSub: 'Borrowed from Ireland (Art 45) • Novel Feature (Ambedkar)',
    edgeFlowTag: '3 IDEOLOGICAL STREAMS',
    footerRule: 'Art 37 declares DPSPs non-justiciable by courts yet "fundamental in the governance of the country" — Positive obligations on the State, unlike negative FR prohibitions.',
    nodes: [
      {
        id: 'dpsp-36-37',
        badge: 'ART 36 & 37 BASE',
        title: 'Foundation, State Definition & Non-Justiciability',
        subtitle: 'Art 36 Imports Art 12; Art 37 Instrument of Instructions',
        tag: 'Gov. of India Act 1935',
        rule: 'Art 36 states "the State" in Part IV carries the exact same meaning as Art 12 in Part III. Art 37 echoes 1935 Act’s Instrument of Instructions.',
        callouts: [
          'Resembles Government of India Act 1935 "Instrument of Instructions" (Ambedkar)',
          'Cannot strike down a law solely for contradicting DPSP, yet courts validate reasonable restrictions via DPSPs',
          'Socio-economic democracy companion to Part III political democracy'
        ],
        landmarkCase: 'State of Kerala v. N.M. Thomas (1976)',
        examTrap: 'Yes — Constitution text does NOT divide DPSPs into "Socialist / Gandhian / Liberal"; that taxonomy is purely analytical!'
      , colorKey: 'accent'
      },
      {
        id: 'dpsp-soc',
        badge: 'STREAM 1 · SOCIALIST',
        title: 'Socialist & Welfare Principles',
        subtitle: 'Arts 38, 39, 39A, 41, 42, 43, 43A & 47',
        tag: 'Economic Justice',
        rule: 'Aims at social/economic justice: minimize income inequalities (38(2) via 44th Amd), equal pay for equal work (39(d)), free legal aid (39A via 42nd Amd), living wages & worker participation (43A via 42nd Amd).',
        callouts: [
          'Art 39(b)&(c): Equitable material ownership & prevent wealth concentration',
          'Art 39A: Basis of NALSA & Legal Services Authorities Act 1987',
          'Art 41–42: Work, maternity relief (Maternity Benefit Act), old age assistance'
        ],
        landmarkCase: 'Randhir Singh (1982) — Equal Pay read via 14, 16 & 39(d)',
        examTrap: 'Remember: 42nd Amd added Art 39(f) healthy development of children, Art 39A, Art 43A, and Art 48A! 44th Amd added Art 38(2)!'
      , colorKey: 'sky'
      },
      {
        id: 'dpsp-gan',
        badge: 'STREAM 2 · GANDHIAN',
        title: 'Gandhian Decentralisation & Rural Pillars',
        subtitle: 'Arts 40, 43, 43B, 46, 47 & 48',
        tag: 'Gram Swaraj',
        rule: 'Embodies Mahatma Gandhi’s reconstruction programme: Village Panchayats (40 -> 73rd Amd), cottage industries (43), cooperative societies (43B -> 97th Amd), SC/ST education (46), prohibition (47), ban on cow slaughter (48).',
        callouts: [
          'Art 40 realized into Part IX constitutional Panchayats (1992)',
          'Art 43B added by 97th Amendment Act 2011 (Cooperatives)',
          'Art 48 prohibition of slaughter of cows, calves & milch cattle upheld (Quareshi / Mirzapur Moti Kureshi 2005)'
        ],
        landmarkCase: 'State of Gujarat v. Mirzapur Moti Kureshi (2005) 7-Judge Bench',
        examTrap: 'Art 47 appears in BOTH Socialist (nutrition/public health) & Gandhian (intoxicating drinks/drugs prohibition) classifications!'
      , colorKey: 'emerald'
      },
      {
        id: 'dpsp-lib',
        badge: 'STREAM 3 · LIBERAL',
        title: 'Liberal-Intellectual & Global Directives',
        subtitle: 'Arts 44, 45, 48, 48A, 49, 50 & 51',
        tag: 'UCC, Environment & Peace',
        rule: 'Uniform Civil Code (44), early childhood care below age 6 (45 -> 86th Amd), scientific agriculture (48), forests & wildlife (48A -> 42nd Amd), monuments (49), Executive-Judiciary separation (50), international peace (51).',
        callouts: [
          '86th Amd (2002) changed Art 45 target to age 0–6 (after moving 6–14 to Art 21A)',
          'Art 50 executed via CrPC 1973 removing executive magistrates from trial judging',
          'Art 51 directs State to foster respect for International Law & Treaty Arbitration'
        ],
        landmarkCase: 'Vishaka v. State of Rajasthan (1997) — Imported CEDAW via Art 51(c)',
        examTrap: 'Note OTHER Directives OUTSIDE Part IV exist too: Art 335 (SC/ST admin efficiency), Art 350A (mother tongue instruction), Art 351 (Hindi development)!'
      , colorKey: 'violet'
      }
    ]
  },
  {
    id: 'fundamental-duties-part-iva',
    title: 'Part IVA (Art 51A): Fundamental Duties, Origins & Statutory Enforcement',
    category: 'Citizenship & Duties',
    track: 'Rights & Remedies',
    articles: 'Article 51A(a) – (k)',
    summary: 'Architectural hub showing Swaran Singh Committee recommendations vs enacted 11 duties, USSR origins, Verma Committee enforcement statutes, and Art 51A(k).',
    topology: 'hub-spoke',
    rootLabel: 'ARTICLE 51A',
    rootSub: 'Citizens Only • 11 Duties',
    edgeFlowTag: 'PART IVA MAP',
    footerRule: 'Fundamental Duties are non-justiciable directly by writs, yet Courts use them to test "reasonableness" of restrictions and Parliament enforces them via Penal Statutes (Verma Committee 1999).',
    nodes: [
      {
        id: 'fd-swaran',
        badge: 'SWARAN SINGH 1976',
        title: '42nd Amendment Origins (vs Rejected Clauses)',
        subtitle: 'Added 10 Duties; Rejected Tax Duty & Penalty',
        tag: 'USSR Model',
        edgeLabel: '1976 Origin',
        rule: 'Congress-appointed Sardar Swaran Singh Committee recommended Part IVA (8 duties), enacted via 42nd Amendment (1976) with 10 clauses. Parliament DROPPED tax-payment duty & criminal penalty suggestions.',
        callouts: [
          'Original 1950 Constitution had ZERO Fundamental Duties',
          'Inspired by Soviet Constitution (USSR) & Japanese civic charters',
          'Only India & Japan among major democracies include explicit constitutional Duties chapter'
        ],
        landmarkCase: 'AIIMS Students Union v. AIIMS (2002) — Equally important touchstone',
        examTrap: 'FREQUENT PRELIMS TRAP: "Duty to pay taxes" was recommended by Swaran Singh Committee, REJECTED by Parliament — it is NOT in Art 51A!'
      , colorKey: 'rose'
      },
      {
        id: 'fd-citizens',
        badge: 'CIVIC & NATIONAL · (a)-(d)',
        title: 'Constitution, Flag, Freedom Struggle & Defence',
        subtitle: 'Clauses 51A(a) to 51A(d)',
        tag: 'Respect != Singing Force',
        edgeLabel: 'Clauses (a)-(d)',
        rule: '(a) Abide Constitution, respect Flag & Anthem; (b) Cherish noble ideals of freedom struggle; (c) Uphold sovereignty, unity & integrity; (d) Defend country & render national service when called.',
        callouts: [
          'Prevention of Insults to National Honour Act 1971 enforces 51A(a)',
          'Bijoe Emmanuel (1986): Standing respectfully without singing satisfies Anthem duty',
          'Non-citizens are NOT bound by Article 51A'
        ],
        landmarkCase: 'Bijoe Emmanuel v. State of Kerala (1986) & Shyam Narayan Chouksey (2018)',
        examTrap: 'Available strictly to "every citizen of India" — foreigners in India have ZERO Fundamental Duties under Art 51A!'
      , colorKey: 'sky'
      },
      {
        id: 'fd-harmony',
        badge: 'HUMANIST · (e)-(h)',
        title: 'Harmony, Women Dignity, Culture & Science',
        subtitle: 'Clauses 51A(e) to 51A(h)',
        tag: 'Scientific Temper',
        edgeLabel: 'Clauses (e)-(h)',
        rule: '(e) Promote harmony & renounce practices derogatory to women’s dignity; (f) Value rich heritage of composite culture; (g) Protect forests, lakes, rivers, wildlife & compassion for living creatures; (h) Develop scientific temper, humanism & spirit of inquiry.',
        callouts: [
          'M.C. Mehta (1988) enforced compulsory weekly 1-hour environment education via 51A(g)!',
          'Wildlife Protection Act 1972 & Environment Act 1986 operationalize (g)',
          '51A(e) guides gender equality rulings (Sabarimala / Triple Talaq)'
        ],
        landmarkCase: 'M.C. Mehta v. Union of India (1988) & Ramlila Maidan (2012)',
        examTrap: 'Verify exact wording: "Protect and improve the natural environment" is BOTH in Art 48A (DPSP) AND Art 51A(g) (Duty)!'
      , colorKey: 'emerald'
      },
      {
        id: 'fd-excell',
        badge: 'CIVIC & 86TH · (i)-(k)',
        title: 'Public Property, Excellence & 11th Duty (2002)',
        subtitle: 'Clauses 51A(i), (j) & (k)',
        tag: 'Parent Education Duty',
        edgeLabel: '2002 Addition',
        rule: '(i) Safeguard public property & abjure violence; (j) Strive towards excellence in individual & collective activity; (k) Parent/Guardian duty to provide education opportunities for child aged 6–14 years.',
        callouts: [
          '51A(k) inserted by 86th Amendment Act 2002 (forming 21A-45-51A(k) education triad)',
          'Ramlila Maidan Incident (2012) read 51A(i) alongside Destruction of Public Property Act 1984',
          'Verma Committee (1999) catalogued statutes already penalizing breach of duties'
        ],
        landmarkCase: '86th Constitutional Amendment Act, 2002 & Verma Committee Report',
        examTrap: '86th Amd (2002) put duty on PARENT/GUARDIAN under 51A(k) — NOT on the State (the State duty is in Art 21A & 45)!'
      , colorKey: 'violet'
      }
    ]
  },
  {
    id: 'armed-forces-martial-law-33-34',
    title: 'Articles 33, 34 & 35: Armed Forces Curbs, Martial Law & Parliament Reserve',
    category: 'Structural Part III Exceptions',
    track: 'Rights & Remedies',
    articles: 'Articles 33, 34 & 35',
    summary: 'Matrix dividing Parliamentary modification of military/intelligence Part III rights (33), Martial Law indemnity Acts (34), and uniform Part III penal power (35).',
    topology: 'matrix-split',
    rootLabel: 'STRUCTURAL PART III EXCEPTIONS (ARTS 33–35)',
    rootSub: 'Parliament Exclusive Competence Only — State Assemblies Excluded',
    edgeFlowTag: 'ARMY & SECURITY',
    footerRule: '"Martial Law" is NEVER defined in the Constitution; unlike Art 352 National Emergency, Art 34 merely allows Parliament AFTERWARDS to indemnify actions in martial-law areas.',
    nodes: [
      {
        id: 'art-33-scope',
        badge: 'ARTICLE 33 · PARLIAMENT',
        title: 'Restricting Armed Forces & Intelligence FRs',
        subtitle: 'Army, Police, IB/RAW & Forces Support Staff',
        tag: '50th Amd Expansion',
        side: 'left',
        rule: 'Parliament alone (NOT State Legislatures!) may by law restrict or abrogate Fundamental Rights of: (a) Armed Forces, (b) Forces maintaining public order (Police/CAPFs), (c) Intelligence Bureaus, (d) Armed Forces telecom staff.',
        callouts: [
          '50th Amendment Act (1984) expanded Art 33 to cover Intelligence Agencies & Telecom',
          'Covers even civilian non-combatant staff (cooks, barbers, tailors in Army — Ous Kutilingal 1971)',
          'Enacted via Army Act 1950, Navy Act, Air Force Act (excludes unionization/political rallies)'
        ],
        landmarkCase: 'R. Viswan v. Union of India (1983) & Ous Kutilingal (1971)',
        examTrap: 'State Police forces belong to State List, YET ONLY PARLIAMENT (not State Assemblies!) can curtail their Part III rights under Article 33!'
      , colorKey: 'sky'
      },
      {
        id: 'art-33-immune',
        badge: 'COURT MARTIAL RULE',
        title: 'Court-Martial Exclusion Under Art 136(2)',
        subtitle: 'Art 227 & Art 136 Bar vs Art 32/226 Review',
        tag: 'Judicial Boundary',
        side: 'left',
        rule: 'Art 33 empowers laws protecting Court Martial discipline, while Art 136(2) & 227(4) bar Special Leave Petitions/Superintendence over military tribunals — YET High Courts & SC retain Writ review (Art 32/226) for jurisdictional error or bias!',
        callouts: [
          'Armed Forces Tribunal (AFT) rulings can still be tested by HC Art 226 writs (Balkrishna Ram 2019)',
          'Art 33 bars "unrestricted speech/unions" to safeguard military discipline',
          'Law made under Art 33 cannot be challenged as violating Part III'
        ],
        landmarkCase: 'Union of India v. Maj. Gen. Shri Kant Sharma / Balkrishna Ram (2019)',
        examTrap: 'PRELIMS GOLD: Armed Forces Tribunal (AFT) orders ARE reviewable by High Court under Art 226 (and now statutory appeal to SC), even though Art 227 excludes military tribunals!'
      , colorKey: 'violet'
      },
      {
        id: 'art-34-martial',
        badge: 'ARTICLE 34 · INDEMNITY',
        title: 'Martial Law & Parliamentary Indemnity Act',
        subtitle: 'Suspended Ordinary Courts vs Post-Facto Validation',
        tag: 'Emergency != Martial Law',
        side: 'right',
        rule: 'While Martial Law is in force in any area of India, Parliament may pass an Act of Indemnity legalizing punishments, property seizures, or sentences executed by military authorities.',
        callouts: [
          'Martial Law suspends ordinary civil law & civilian courts locally — NOT explicitly declared under any single Constitution clause',
          'National Emergency (Art 352) keeps ordinary courts functioning & extends across Centre-State powers; Martial Law deals strictly with restoring order in a turbulent zone',
          'Supreme Court held declaration of Martial Law does NOT automatically suspend Habeas Corpus writs!'
        ],
        landmarkCase: 'ADM Jabalpur / Constituent Assembly Debates (Art 34)',
        examTrap: 'Comparison: National Emergency has detailed Art 352 text & alters federal distribution; Martial Law has NO authorization procedure in the Constitution (only Art 34 indemnity)!'
      , colorKey: 'rose'
      },
      {
        id: 'art-35-uniform',
        badge: 'ARTICLE 35 · PARL LOCK',
        title: 'Exclusive Parliament Reserve for FR Crimes',
        subtitle: 'Arts 16(3), 32(3), 33, 34, 17 & 23',
        tag: 'Zero State Divergence',
        side: 'right',
        rule: 'Ensures absolute national uniformity across Part III punishments and modifications by vesting exclusive law-making competence in Parliament even on State-domain topics like residence quotas or police!',
        callouts: [
          'Art 16(3): Residence condition in State public jobs (Andhra/Telangana Art 371D)',
          'Art 32(3): Empowering local courts with writ power',
          'Arts 17 & 23: Criminalizing Untouchability & Trafficking/Begar uniformly'
        ],
        landmarkCase: 'Protection of Civil Rights Act 1955 & Bonded Labour Act 1976',
        examTrap: 'Article 35 explicitly OVERRIDES anything else in the Constitution so State Assemblies cannot water down Part III offences!'
      , colorKey: 'emerald'
      }
    ]
  }
];
