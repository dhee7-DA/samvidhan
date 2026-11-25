import type { VisualBlueprintSpec } from './visualBlueprintsTypes';

export const TRACK_4_FEDERAL_BLUEPRINTS: VisualBlueprintSpec[] = [
  {
    id: 'centre-state-legislative-overrides',
    title: '5 Extraordinary Pathways: When Parliament Legislates on State List (Art 249–356)',
    category: 'Federal Legislative Override',
    track: 'Federalism & Local Gov',
    articles: 'Articles 249, 250, 252, 253 & 356',
    summary: 'Radial map contrasting the 5 exact conditions, voting thresholds, expiration clocks, and State-legislature power effects when Parliament enters State List.',
    topology: 'hub-spoke',
    rootLabel: 'STATE LIST OVERRIDES',
    rootSub: '5 Articles Empowering Parliament',
    edgeFlowTag: 'LIST II EXCEPTIONS',
    footerRule: 'UNDER ARTS 249, 250 & 356 States STILL retain concurrent legislative power (Union prevails on conflict), EXCEPT under ART 252 (Consenting States) where States SURRENDER amendment/repeal power forever to Parliament!',
    nodes: [
      {
        id: 'ov-249',
        badge: 'ART 249 · RAJYA SABHA',
        title: 'National Interest (RS Resolution 2/3 Present & Voting)',
        subtitle: 'Valid 1 Yr Each Renewal • Expires 6 Mo After End',
        tag: 'Only RS Trigger!',
        edgeLabel: '1 Yr Renewable',
        rule: 'Rajya Sabha alone (exclusive Federal chamber power!) passes resolution by NOT LESS THAN 2/3rd Present & Voting declaring national interest -> Parliament legislates on that List II item.',
        callouts: [
          'Resolution remains active 1 year (renewable unlimited times 1 yr each)',
          'Parliament law ceases to have effect 6 MONTHS after resolution ends',
          'State Legislature CAN still legislate simultaneously (Parliament law simply prevails if repugnant)'
        ],
        landmarkCase: 'Article 249 Exclusive Rajya Sabha Power',
        examTrap: 'SHARP QUOTA CHECK: Art 249 requires >=2/3rd OF MEMBERS PRESENT AND VOTING (notice it does NOT require >50% Total Membership!).'
      , colorKey: 'sky'
      },
      {
        id: 'ov-250',
        badge: 'ART 250 · ART 352 EMERG.',
        title: 'During National Emergency Proclamation',
        subtitle: 'Covers Entire List II • Ceases 6 Mo Post-Revocation',
        tag: 'Unitary Conversion',
        edgeLabel: 'Emergency',
        rule: 'While National Emergency (Art 352) operates, Parliament acquires automatic power to make laws across ALL List II subjects nationwide (or restricted part under 42nd Amd).',
        callouts: [
          'State Assemblies are NOT suspended/dissolved during Art 352 — continue legislating simultaneously!',
          'Union law prevails over conflicting State law while Emergency holds',
          'Laws expire 6 MONTHS after National Emergency ceases to operate'
        ],
        landmarkCase: 'Article 250 Temporary Emergency Shift',
        examTrap: 'State Assemblies remain ACTIVE under National Emergency Art 352 (unlike President’s Rule Art 356!) — Parliament merely gains concurrent override power!'
      , colorKey: 'rose'
      },
      {
        id: 'ov-252',
        badge: 'ART 252 · STATE CONSENT',
        title: 'On Request of 2 or More States (Irreversible!)',
        subtitle: 'States Lose Right to Amend or Repeal Forever!',
        tag: 'Permanent Transfer',
        edgeLabel: '>= 2 States Ask',
        rule: 'If 2+ State Legislatures pass resolution requesting Parliament to enact a uniform law (e.g. Wildlife Protection Act 1972, Water Pollution Act 1974, Prize Competitions), Parliament legislates — other States can adopt later.',
        callouts: [
          'UNIQUE EFFECT: Such an Act CANNOT be amended or repealed by ANY participating State Legislature — ONLY PARLIAMENT can amend or repeal it!!',
          'Never expires automatically!',
          'Transplantation of Human Organs Act 1994 also passed via Art 252'
        ],
        landmarkCase: 'Wildlife Protection Act 1972 & Water Act 1974 (Art 252)',
        examTrap: 'HIGHEST-YIELD ART 252 TRAP: Across all 5 overrides, ONLY Art 252 PERMANENTLY strips consenting State Assemblies of power to amend or repeal that Act!'
      , colorKey: 'emerald'
      },
      {
        id: 'ov-253',
        badge: 'ART 253 · TREATIES',
        title: 'Implementing International Treaties & Agreements',
        subtitle: 'Zero State Consent Needed • Valid Even on List II',
        tag: 'Geneva / Paris Treaties',
        edgeLabel: 'Global Pact',
        rule: 'Parliament can enact any law across ALL of India (or any State) to implement ANY treaty, agreement, convention or international conference decision without State approval.',
        callouts: [
          'Examples: UN Privileges Act 1947, Geneva Conventions Act, Anti-Hijacking Act, TRIPS amendments',
          'Executive signs treaty under Art 73 -> Parliament converts into domestic municipal law under Art 253',
          'Wait: Treaty ceding Indian territory still needs Art 368 Amendment (Berubari 1960)!'
        ],
        landmarkCase: 'Maganbhai Ishwarbhai Patel (1969) & Berubari (1960)',
        examTrap: 'Remember India follows DUALISM: International treaty does NOT automatically become enforceable domestic law without an Art 253 Act of Parliament!'
      , colorKey: 'violet'
      },
      {
        id: 'ov-356',
        badge: 'ART 356 / 357 · PRES RULE',
        title: 'During President’s Rule in State',
        subtitle: 'Parliament / President Assumes Suspended Assembly Power',
        tag: 'Surpasses 356 Period!',
        edgeLabel: 'Post-356 Life',
        rule: 'Under Art 356 + 357, State Assembly powers exercise via Parliament (or President delegated under 357(1)). CRITICALLY: Laws enacted during President’s Rule DO NOT EXPIRE when Art 356 ends — they remain valid until State Assembly repeals/alters them!',
        callouts: [
          'Notice contrast: Art 249/250 laws die in 6 months; Art 356/357 laws SURVIVE indefinitely after President’s Rule ends until State Assembly actively repeals them!',
          'Even State Budget gets voted by Lok Sabha during Art 356!',
          'Cannot alter High Court powers during President’s Rule'
        ],
        landmarkCase: 'Articles 356(1)(b) & 357(2)',
        examTrap: 'COUNTER-INTUITIVE RULE: When President’s Rule ends in a State, do laws made by Parliament during President’s Rule expire in 6 months? NO! They continue FOREVER unless repealed by restored State Assembly!'
      , colorKey: 'accent'
      }
    ]
  },
  {
    id: 'centre-state-admin-directions-256',
    title: 'Administrative Relations (Arts 256–263): Union Directions, Art 365 & Delegation',
    category: 'Executive Federalism',
    track: 'Federalism & Local Gov',
    articles: 'Articles 256, 257, 258 & 365',
    summary: 'Directional pipeline mapping Centre’s executive authority to bind State administration, Art 365 failure trigger for Art 356, mutual Art 258/258A delegation, and All-India Services.',
    topology: 'flowchart',
    rootLabel: 'EXECUTIVE FEDERALISM',
    rootSub: 'Arts 256–258A & 365 Sanction',
    edgeFlowTag: 'CENTRE DIRECTIONS',
    footerRule: 'Article 365 Sanction: If ANY State fails to comply with Union’s lawful Executive Directions under Arts 256/257/339, it triggers a lawful presumption of "constitutional machinery failure" justifying Art 356 President’s Rule!',
    nodes: [
      {
        id: 'adm-256',
        badge: 'ART 256 · COMPLIANCE',
        title: 'General Duty Not to Impede Union Laws',
        subtitle: 'Union Issues Binding Directions Ensuring Parliamentary Enforcement',
        tag: 'Union Executive Primacy',
        edgeLabel: 'General Rule',
        rule: 'Executive power of every State must ensure compliance with Parliamentary laws; Union executive power extends to issuing necessary directions to States.',
        callouts: [
          'Includes enforcing Central GST, CAA/Citizenship, Disaster Management & Criminal Laws',
          'State cannot instruct District Magistrates to defy validly enacted Union Acts',
          'Sarkaria Commission urged dialogue before invoking coercion'
        ],
        landmarkCase: 'S.R. Bommai (1994) discussing Art 256 limits',
        examTrap: 'Union cannot issue arbitrary political directions bypassing valid Constitutional bounds — direction must tie strictly to executing Parliamentary law or Art 257 infrastructure!'
      , colorKey: 'sky'
      },
      {
        id: 'adm-257',
        badge: 'ART 257 · INFRASTRUCTURE',
        title: 'Railways, National Highways & Strategic Telecom',
        subtitle: 'Plus Extra Cost Compensation Paid by Union to State',
        tag: 'Railways Security (257(3))',
        edgeLabel: 'Specific Duty',
        rule: 'State executive power CANNOT impede Union executive power; Union specifically directs State on constructing/maintaining national/military communications & protecting Railways (257(3)).',
        callouts: [
          'Extra financial burden incurred by State on Railways/Communication -> Union MUST compensate State (determined by CJI-appointed Arbitrator if disputed — 257(4)!)',
          'Covers National Highways (NHs declared by Parliament under List I Entry 23)',
          'Mirror Art 339(2): Union can direct State on Tribal Welfare schemes!'
        ],
        landmarkCase: 'Article 257(1)–(4) Compensation Mechanism',
        examTrap: 'WHO resolves cost compensation disputes between Union and State under Art 257(4) or 258(3)? An Arbitrator appointed by the CHIEF JUSTICE OF INDIA!'
      , colorKey: 'emerald'
      },
      {
        id: 'adm-258',
        badge: 'ARTS 258 & 258A · ENTRUST',
        title: 'Mutual Delegation: President vs Parliament',
        subtitle: 'Consent Needed for Executive Act; NO Consent via Parliament Law!',
        tag: '7th Amd Added 258A',
        edgeLabel: 'Delegation Track',
        rule: 'Art 258(1): PRESIDENT (with State GOVT consent) entrusts Union executive duties to State. Art 258(2): PARLIAMENT by law CAN unilaterally confer duties on States WITHOUT State consent! Art 258A (7th Amd): GOVERNOR (with Union consent) entrusts State duties to Union!',
        callouts: [
          'Note asymmetric trigger: President needs State Consent; Parliament Law needs ZERO State Consent!',
          '7th Amd (1956) plugged original asymmetry via Art 258A allowing States to delegate UP to Union (e.g. CBI/NHAI local projects)',
          'Includes All-India Services (Art 312) where immediate control rests with State & ultimate control (dismissal) with Union!'
        ],
        landmarkCase: '7th Constitutional Amendment Act, 1956 (Art 258A)',
        examTrap: 'HIGHEST ART 258 TRAP: President entrusting Union executive duty to a State REQUIRES State Consent (258(1)); PARLIAMENT enacting a law conferring executive duty on a State requires NO State Consent (258(2))!'
      , colorKey: 'violet'
      },
      {
        id: 'adm-365',
        badge: 'ART 365 · TRIGGER',
        title: 'Failure to Comply Enables Art 356 President’s Rule',
        subtitle: 'Coercive Federal Enforcement Lever',
        tag: 'Part XVIII Link',
        edgeLabel: 'Sanction Trigger',
        rule: 'Where any State fails to comply with or give effect to directions given in exercise of Union executive power, it becomes lawful for President to hold that State governance cannot proceed per Constitution -> triggers Art 356!',
        callouts: [
          'Part XIX Miscellaneous sanction (outside Part XI) empowering Part XVIII emergency',
          'Must follow prior notice/warning per Sarkaria & Punchhi Commission safeguards',
          'Justiciable under S.R. Bommai mala fides & proportionality tests'
        ],
        landmarkCase: 'S.R. Bommai (1994) & Sarkaria Commission (1988)',
        examTrap: 'Note location: Where is Art 365 situated? Inside PART XIX (Miscellaneous), NOT inside Part XI or XVIII Emergency!'
      , colorKey: 'rose'
      }
    ]
  },
  {
    id: 'inter-state-water-councils-262-263',
    title: 'Inter-State Disputes: Art 262 Water Tribunals vs Art 263 Council & Zonal Councils',
    category: 'Cooperative Federal Organs',
    track: 'Federalism & Local Gov',
    articles: 'Articles 262 & 263 + SRC Act',
    summary: 'Matrix dividing statutory-court-excluding Water Tribunals (262 — bypasses Art 131 & 136!) from Constitutional Inter-State Council (263 — 1990) & Statutory Zonal Councils (1956).',
    topology: 'matrix-split',
    rootLabel: 'INTER-STATE COORDINATION & DISPUTES (ARTS 262–263)',
    rootSub: 'Constitutional vs Extra-Judicial Arbitral Mechanisms',
    edgeFlowTag: 'FEDERAL MECHANICS',
    footerRule: 'Art 262(2) allows Parliament to BAR Supreme Court & ALL Courts (even Art 131!) over River Water disputes; YET in Cauvery (2018), SC entertained statutory SLP Art 136 ONLY against Tribunal’s final Award interpretation!',
    nodes: [
      {
        id: 'iw-262',
        badge: 'ART 262 · RIVER WATER',
        title: 'Inter-State River Water Disputes (Parliament Bar Rule)',
        subtitle: 'ISWD Act 1956 + River Boards Act 1956',
        tag: 'Bypasses Art 131!',
        side: 'left',
        rule: 'Art 262(1): Parliament by law provides adjudication of inter-state river/valley water use disputes. Art 262(2): Parliament MAY provide NO court (not even Supreme Court!) exercises jurisdiction over such dispute.',
        callouts: [
          'Sec 11 of Inter-State River Water Disputes Act 1956 EXCLUDES SC Art 131 original jurisdiction!',
          '2002 Amendment mandated Tribunal constitution within 1 yr & Award within 3 yrs (+2 ext)',
          'HOWEVER Cauvery (2018) & Mullaperiyar held Art 136 SLP remains open against final Award execution/legal errors!'
        ],
        landmarkCase: 'State of Karnataka v. State of T.N. (Cauvery Water 2018)',
        examTrap: 'ART 131 EXCLUSION TRAP: Inter-State Water Disputes CANNOT go to Supreme Court via Original Jurisdiction Art 131 — they MUST first go to Art 262 Statutory Tribunal (though Art 136 appeal vs Final Award was entertained in Cauvery 2018)!'
      , colorKey: 'sky'
      },
      {
        id: 'iw-faith',
        badge: 'ART 261 · FULL FAITH',
        title: 'Full Faith & Credit + Public Acts Verification',
        subtitle: 'Civil Judgments Binding Nationwide (Not Criminal Decrees!)',
        tag: 'Federal Recognition',
        side: 'left',
        rule: 'Art 261 grants Full Faith & Credit across India to public acts, records & judicial proceedings of Union & every State. Civil court final decrees anywhere in India execute anywhere else in India!',
        callouts: [
          'Notice limit: Full execution reciprocity covers CIVIL court decrees — penal criminal jurisdiction stays strictly territorial per BNSS rules!',
          'Covers marriage certificates, land deeds & statutory records uniformly',
          'Borrowed cleanly from US/Australian Federal Constitutions'
        ],
        landmarkCase: 'Article 261 Constitutional Comity',
        examTrap: 'Verify rule: Art 261(3) enforcement ("executed anywhere in India") covers "Final judgments or orders delivered by CIVIL courts" — NOT foreign/sister-State penal prosecutions directly!'
      , colorKey: 'violet'
      },
      {
        id: 'iw-263',
        badge: 'ART 263 · CONSTITUTIONAL',
        title: 'Inter-State Council (Set Up 1990 by VP Singh Govt)',
        subtitle: 'PM Chair + All CMs + 6 Union Ministers (Permanent Recommendatory)',
        tag: 'Sarkaria Commission 1988',
        side: 'right',
        rule: 'Art 263 authorizes President to create Inter-State Council to inquire/advise upon inter-state disputes, investigate common interests & recommend policy coordination (unlike Art 131 binding court decrees, Art 263 is PURELY ADVISORY!).',
        callouts: [
          'Established formally in 1990 by Presidential Order on Sarkaria Commission advice (Standing Committee since 1996)',
          'Composition: Prime Minister (Chairman), CMs of ALL States & Assembly UTs, LG/Admin of other UTs, 6 Union Cabinet Ministers (Home Minister chairs Standing Committee!)',
          'Note: Art 263 enables BOTH advisory councils like Central Health Council & Inter-State Council'
        ],
        landmarkCase: 'Sarkaria Commission Report (1988) & 1990 Presidential Order',
        examTrap: 'DON’T CONFUSE CHAIRMEN: Inter-State Council (Art 263) Chairman = PRIME MINISTER. Zonal Councils Chairman = UNION HOME MINISTER!'
      , colorKey: 'emerald'
      },
      {
        id: 'iw-zonal',
        badge: 'STATUTORY · SRC ACT 1956',
        title: '6 Zonal Councils (Union Home Minister Chairs All)',
        subtitle: '5 via SRC Act 1956 + North-Eastern Council Act 1971',
        tag: 'Not Constitutional Body!',
        side: 'right',
        rule: 'Created by STATUTE (States Reorganisation Act 1956 — NOT Art 263 Constitution!) for Northern, Central, Eastern, Western & Southern zones; plus Separate North-Eastern Council (NEC Act 1971 for 8 States incl. Sikkim added 2002!).',
        callouts: [
          'Union HOME MINISTER serves as Common Chairman of ALL 5 Zonal Councils (and NEC ex-officio since 2018!)',
          'State Chief Ministers rotate yearly as Vice-Chairmen',
          'Includes 2 Other Ministers per State + Chief Secretaries & NITI Aayog advisor (no vote!)'
        ],
        landmarkCase: 'States Reorganisation Act, 1956 (Part III) & NEC Act 1971',
        examTrap: 'MAJOR CLASSIFICATION TRAP: Inter-State Council = CONSTITUTIONAL Body (Art 263, Chaired by PM); Zonal Councils = STATUTORY Bodies (SRC Act 1956, Chaired by Union Home Minister)!'
      , colorKey: 'rose'
      }
    ]
  },
  {
    id: 'trade-commerce-art301-307',
    title: 'Freedom of Inter-State Trade & Commerce (Arts 301–307) & Jindal Stainless',
    category: 'Economic Federalism',
    track: 'Federalism & Local Gov',
    articles: 'Articles 301 – 307 (Part XIII)',
    summary: 'Equilibrium scale tracing the shift from Atiabari/Automobile "Compensatory Tax" exception (1962) to Jindal Stainless 9-Judge (2017) Non-Discriminatory Entry Tax standard.',
    topology: 'balance-beam',
    rootLabel: 'ECONOMIC UNION (ART 301) vs STATE TAX AUTONOMY (ARTS 302–304)',
    rootSub: 'One Nation One Market Free Flow vs Legitimate State Public-Interest Taxes',
    edgeFlowTag: 'PART XIII PIVOT',
    footerRule: 'JINDAL STAINLESS 9-JUDGE (2017) OVERRULED ATIABARI & AUTOMOBILE TRANSPORT: Non-discriminatory Entry Taxes generally DO NOT violate Art 301 freedom ("compensatory tax" doctrine abolished)!',
    nodes: [
      {
        id: 'tc-301',
        badge: 'ART 301 · COMMON MARKET',
        title: 'Trade, Commerce & Intercourse Throughout India Free',
        subtitle: 'Protects BOTH Inter-State & Intra-State Flow (Not Just Citizens!)',
        tag: 'Sec 92 Australian Root',
        rule: 'Art 301 guarantees free commercial movement throughout India (covers goods, people & business flow, including inside a State unlike purely US Commerce Clause). Notice Art 19(1)(g) covers ONLY Citizens; Art 301 covers ALL corporations & merchants too!',
        callouts: [
          'Bars State protectionist tariff walls, border checkpost blockades & transit tolls',
          'Art 19(1)(g) is Fundamental Right enforced via Art 32; Art 301 is Constitutional Legal Right outside Part III!',
          'Excludes illegal gambling/lotteries (Chamarbaugwalla)'
        ],
        landmarkCase: 'Atiabari Tea Co (1961) & Jindal Stainless (2017)',
        examTrap: 'Notice difference: Art 19(1)(g) = Citizens Only + Part III Art 32 Writ; Art 301 = Trade/Corporations + Inter-State Market Guarantee (Part XIII -> Art 226/Civil suit)!'
      , colorKey: 'sky'
      },
      {
        id: 'tc-auto',
        badge: 'AUTO TRANSPORT (1962)',
        title: 'Old Rule: Regulatory Measures & Compensatory Taxes',
        subtitle: 'Valid Only If Directly Trading Benefit Returned (Road Taxes)',
        tag: 'Overruled in 2017!',
        rule: 'Atiabari (1961) held ANY tax directly impeding movement violates Art 301; Automobile Transport (1962) carved out "Compensatory Tax" exception for tolls paying for roads/bridges — standing for 55 years.',
        callouts: [
          'Caused massive litigation over State "Entry Taxes" on goods',
          'Forced States to mathematically prove quid-pro-quo facilities matching tax revenue',
          'Expressly abolished by 9-Judge Bench in Jindal Stainless (2017)!'
        ],
        landmarkCase: 'Automobile Transport (Rajasthan) Ltd. v. State of Rajasthan (1962)',
        examTrap: 'DO NOT cite "Compensatory Tax test" as current law — Jindal Stainless (9-Judge 2017) explicitly ABOLISHED it!'
      , colorKey: 'rose'
      },
      {
        id: 'tc-jindal',
        badge: 'JINDAL STAINLESS (2017 · 9J)',
        title: 'Taxes Are Valid Unless Discriminatory Against Out-of-State Goods',
        subtitle: 'Article 304(a) Non-Discrimination Standard Restored',
        tag: '7:2 Constitutional Shift',
        rule: '9-Judge Bench ruled non-discriminatory Entry/Sales Taxes per se NEVER violate Art 301 (Art 301 catches ONLY taxes directly discriminating against outside goods or erecting artificial internal trade barriers).',
        callouts: [
          'State taxes CANNOT discriminate between local goods & imported goods from sister States (Art 304(a))',
          'Taxation is an essential sovereign fiscal power, not automatically a trade impediment',
          'Art 101st GST Amendment synchronized Part XIII with National One-Tax Market!'
        ],
        landmarkCase: 'Jindal Stainless Ltd. v. State of Haryana (2017) 9-Judge Bench',
        examTrap: 'CURRENT LAW: Entry tax is constitutional WITHOUT needing "Compensatory" quid-pro-quo math, as long as it taxes local & out-of-state goods equally under 304(a)!'
      , colorKey: 'emerald'
      },
      {
        id: 'tc-302-304',
        badge: 'ARTS 302–307 · RESTRICTIONS',
        title: 'Parliament (No Discrimination) vs State (Pres. Prior Sanction!)',
        subtitle: 'Art 304(b) Requires PREVIOUS Presidential Sanction Before Intro',
        tag: 'Art 307 Authority Unused',
        rule: 'Art 302: Parliament restricts trade in public interest (cannot favour one State over another except scarcity under 303(2)!). Art 304(b): State restricts trade in public interest ONLY WITH PRIOR PRESIDENTIAL SANCTION (255 saves post-hoc Presidential assent!).',
        callouts: [
          'State Bill under Art 304(b) needs prior Presidential recommendation in Assembly (unlike 304(a) tax parity!)',
          'Art 305 saves existing pre-1950 & State Monopoly laws',
          'Art 307 authorizes Parliament to establish Inter-State Trade Authority (never strictly set up!)'
        ],
        landmarkCase: 'Articles 302, 303, 304 & 307',
        examTrap: 'Notice Art 303(2) Scarcity Escape: Parliament (NOT States!) can give preference to one State ONLY to deal with acute scarcity of goods!'
      , colorKey: 'violet'
      }
    ]
  },
  {
    id: 'finance-commission-tax-devolution',
    title: 'Fiscal Federalism Devolution: Arts 268, 269, 270, 275 & Finance Commission (280)',
    category: 'Tax Sharing & Grants',
    track: 'Federalism & Local Gov',
    articles: 'Articles 268 – 281',
    summary: '4-tier devolution pyramid mapping Union-collected/State-retained duties (268), IGST (269A), Central Shareable Pool (270), Cesses Exclusion, and Statutory vs Discretionary Grants (275 vs 282).',
    topology: 'pyramid-hierarchy',
    rootLabel: 'VERTICAL & HORIZONTAL TAX DEVOLUTION',
    rootSub: 'Arts 268–281 • 80th, 88th & 101st Amendments',
    edgeFlowTag: 'FINANCE COMMISSION',
    footerRule: 'SHARP FISCAL EXCLUSION: Surcharges (Art 271) & Cesses go 100% to UNION Consolidated Fund — States get ZERO share of Art 271 Cesses/Surcharges from Divisible Pool (Art 270)!',
    nodes: [
      {
        id: 'fc-280',
        badge: 'ART 280 · QUASI-JUDICIAL',
        title: 'Finance Commission (Chair + 4 Members; 5-Yr Cycle)',
        subtitle: 'Balances Vertical (41%) & Horizontal (Formula) Shares',
        tag: 'Advisory Weight (Art 281)',
        rule: 'Constituted every 5 yrs (or earlier — 16th FC chaired by Dr. Arvind Panagariya!) to recommend: (a) Net proceeds Vertical split Centre-States; (b) Horizontal formula across States; (c) Art 275 Grants-in-Aid; (d) Augmenting State CFI for Panchayats/Municipalities.',
        callouts: [
          'Qualifications determined by PARLIAMENT (Finance Commission Act 1951): Chair (public affairs) + 4 members (HC Judge qual., Fin/Admin, Accounts, Economics)',
          'Recommendations are ADVISORY ONLY (not legally binding, yet historically respected)',
          'Report laid before both Houses with Explanatory Memorandum (Art 281)'
        ],
        landmarkCase: 'Articles 280–281 + 15th & 16th Finance Commissions',
        examTrap: 'CHECK LOCAL BODIES CLAUSE (73rd/74th Amds): Art 280(3)(bb)/(c) added FC duty to recommend measures augmenting State CFI to fund Panchayats & Municipalities based on SFC reports!'
      , colorKey: 'accent'
      },
      {
        id: 'fc-270-pool',
        badge: 'ART 270 · DIVISIBLE POOL',
        title: 'Central Taxes Shared With States (41% 15th FC) & Cess Bar',
        subtitle: '80th Amendment Unified All Central Taxes (Except 268/269/271)',
        tag: '101st Amd CGST Included',
        rule: 'Post-80th Amd (2000), ALL Union taxes/duties (Income Tax, Corporate Tax, Customs, Union Excise, CGST & Centre-portion of IGST) enter SINGLE Divisible Pool distributed per Art 280 — EXCEPT Art 268, 269 & Art 271 Cesses/Surcharges!',
        callouts: [
          'Art 271 Surcharges & Cesses: 100% Union ONLY (Note: No Art 271 surcharge permitted on GST after 101st Amd — replaced by temporary GST Compensation Cess!)',
          '15th FC Horizontal Criteria: Income Distance (45%), 2011 Population (15%), Area (15%), Forest & Ecology (10%), Demographic Performance (12.5%), Tax Effort (2.5%)',
          '88th Amd added Art 268A Service Tax -> Repealed by 101st GST Amendment!'
        ],
        landmarkCase: '80th (2000) & 101st (2016) Fiscal Amendments',
        examTrap: 'TWO TOP TRAPS: (1) Union Surcharges & Cesses (Art 271) are EXCLUDED from Divisible Pool! (2) GST CANNOT attract Art 271 Surcharges!'
      , colorKey: 'sky'
      },
      {
        id: 'fc-268-269',
        badge: 'ARTS 268 & 269A',
        title: 'Duties Collected & Appropriated by States (268) vs IGST (269A)',
        subtitle: 'Stamp Duties (268) vs Inter-State Consignment & IGST',
        tag: '101st Amd Overhaul',
        rule: 'Art 268: Stamp duties levied by Union, YET collected & retained 100% by States (never enters CFI!). Art 269: Inter-State Sale/Consignment taxes levied & collected by Union, yet assigned to States. Art 269A: IGST levied/collected by Union & apportioned per GST Council.',
        callouts: [
          'Notice medicinal/toilet duties with alcohol moved out of 268 via 101st Amd',
          'Art 268 proceeds do NOT even enter Consolidated Fund of India!',
          'Taxes on Professions/Trades (Art 276) capped at Rs 2,500/year per person!'
        ],
        landmarkCase: 'Articles 268, 269, 269A & 276',
        examTrap: 'CHECK CONSTITUTIONAL CAP: Max Professional Tax a State or Municipality can levy under Art 276(2) is Rs 2,500 per annum (raised from Rs 250 by 60th Amd 1988)!'
      , colorKey: 'emerald'
      },
      {
        id: 'fc-275-282',
        badge: 'ART 275 vs 282 · GRANTS',
        title: 'Statutory Grants (Art 275) vs Discretionary CSS (Art 282)',
        subtitle: 'Finance Commission Guided Need vs Unfettered Scheme Grants',
        tag: 'Centrally Sponsored Schemes',
        rule: 'Art 275: Statutory grants charged on CFI ONLY to States "in need of assistance" (on FC advice — e.g. Revenue Deficit Grants & Special Tribal 5th/6th Sch Grants!). Art 282: Both Centre & States can grant money for ANY "public purpose" even outside their List!',
        callouts: [
          'Wait: All centrally sponsored schemes (MGNREGA, PMAY, PMGSY) flow via ART 282 (Discretionary Grants), which historically eclipsed Art 275!',
          'Art 275 Grants under 1st Proviso for ST Welfare in Scheduled Areas are mandatory sums',
          'Unlike Art 275, Art 282 needs NO Finance Commission recommendation!'
        ],
        landmarkCase: 'Bhim Singh v. Union of India (2010 — Upheld MPLADS via Art 282!)',
        examTrap: 'PRELIMS CLASSIC: MPLADS & Centrally Sponsored Schemes rely legally on ARTICLE 282 (Discretionary Grants for "public purpose"), NOT Art 275!'
      , colorKey: 'violet'
      }
    ]
  },
  {
    id: 'borrowing-powers-immunities-285-293',
    title: 'Intergovernmental Tax Immunity (Arts 285/289) & Borrowing Limits (292–293)',
    category: 'Sovereign Credit & Immunities',
    track: 'Federalism & Local Gov',
    articles: 'Articles 285, 289, 292 & 293',
    summary: 'Matrix contrasting symmetrical immunity between Union & State sovereign properties (excluding State commercial trading & Indirect GST/Customs!) and Central control over State borrowing.',
    topology: 'matrix-split',
    rootLabel: 'TAX IMMUNITY (285 vs 289) & BORROWING LIMITS (292 vs 293)',
    rootSub: 'Direct Property Exemption vs Indirect Tax Liability • Sovereign Debt Restraint',
    edgeFlowTag: 'FISCAL IMMUNITIES',
    footerRule: 'CRITICAL CONTRAST: Union commercial undertakings enjoy Art 285 State-tax immunity UNLESS Parliament consents, whereas STATE commercial businesses enjoy ZERO automatic Art 289 immunity unless Parliament exempts!',
    nodes: [
      {
        id: 'ti-285',
        badge: 'ART 285 · UNION IMMUNE',
        title: 'Union Property Exempt From ALL State & Municipal Taxes',
        subtitle: 'Includes Both Union Sovereign & Union Departmental Assets',
        tag: 'Wait: PSUs Taxable!',
        side: 'left',
        rule: 'Property of Union shall be exempt from ALL taxes imposed by a State or local body (Property Tax, Municipal cess), UNLESS Parliament by law provides otherwise.',
        callouts: [
          'Wait: Service charges for municipal water/garbage services ARE payable by Union properties, NOT property taxes!',
          'CRITICAL CARVE-OUT: Statutory Corporations / Government Companies (SAIL, BHEL, NTPC, ONGC) are separate juristic entities — THEY DO NOT GET ART 285 IMMUNITY!',
          'Only direct Union ownership (Railways, Post, Defence buildings) enjoys immunity'
        ],
        landmarkCase: 'Electronics Corp of India (2011 5J) & Sea Customs Act (1963 9J)',
        examTrap: 'ARE PSUs like ONGC or SAIL exempt from State Municipal Property Tax under Art 285? NO — separate companies are NOT "property of Union"!'
      , colorKey: 'sky'
      },
      {
        id: 'ti-289',
        badge: 'ART 289 · STATE ASYMMETRY',
        title: 'State Exempt Only On Direct Property/Income — NOT Indirect Customs/Excise or Commerce!',
        subtitle: 'Parliament CAN Tax State Commercial Businesses (289(2))',
        tag: 'In re Sea Customs Act 1963',
        side: 'left',
        rule: 'Art 289(1) exempts State Property & Income from Union DIRECT taxation — YET: (1) Under 289(2), Union CAN tax State commercial trade/business (e.g. State Road Transport); (2) Sea Customs Act (1963 9-Judge) held Immunity NEVER covers INDIRECT taxes like Customs, Union Excise & GST!',
        callouts: [
          'State importing machinery pays full Customs Duty & GST (indirect taxes fall on transaction/import event, not property ownership!)',
          'Parliament may pass law exempting purely incidental non-commercial trade',
          'Asymmetry tilts fiscal supremacy noticeably toward Union'
        ],
        landmarkCase: 'In re Sea Customs Act, 1878 (1963) 9-Judge Bench',
        examTrap: 'TWO TRAPS: (1) States pay INDIRECT Customs/GST taxes! (2) Union can tax State-run commercial transport/liquor corporations under Art 289(2)!'
      , colorKey: 'rose'
      },
      {
        id: 'br-292',
        badge: 'ART 292 · UNION BORROWING',
        title: 'Union Borrows BOTH Inside India & Outside Abroad',
        subtitle: 'Security of Consolidated Fund of India • Zero Ceilings Enacted',
        tag: 'FRBM Statutory Disciplines',
        side: 'right',
        rule: 'Union executive power extends to borrowing both within India AND abroad from foreign govts/multilateral banks (World Bank/IMF/ADB) upon security of CFI within statutory limits fixed by Parliament (FRBM Act 2003).',
        callouts: [
          'Only UNION can raise external sovereign foreign currency loans!',
          'Parliament has power to set statutory fiscal deficit ceilings (FRBM)',
          'Can also issue Sovereign Guarantees for Union enterprises'
        ],
        landmarkCase: 'Article 292 & FRBM Act 2003',
        examTrap: 'Notice: States CANNOT borrow abroad externally! ALL external sovereign foreign loans are exclusively raised by Union (or routed through Centre)!'
      , colorKey: 'emerald'
      },
      {
        id: 'br-293',
        badge: 'ART 293 · STATE LIMITS',
        title: 'States Can Borrow ONLY Inside India (+ Consent Needed If Indebted to Centre!)',
        subtitle: 'Art 293(3) Enables Union Borrowing Ceiling Control Over States',
        tag: '2024 Kerala Debt Dispute',
        side: 'right',
        rule: 'Art 293(1): State can borrow ONLY WITHIN INDIA upon State CFI. Art 293(3): So long as State owes ANY pending loan or guarantee to Government of India, it CANNOT raise a single rupee without CENTRAL CONSENT!',
        callouts: [
          'Every Indian State currently owes Union debt -> virtually ALL State net borrowing limits (3–3.5% GSDP) face Central consent under Art 293(3)!',
          'State off-budget borrowings (SPVs/Corporations backed by CFI) count toward Art 293(3) caps',
          '2024 Kerala v. Union of India Art 131 suit challenged Central Art 293 borrowing caps -> referred to 5-Judge Constitution Bench!'
        ],
        landmarkCase: 'State of Kerala v. Union of India (April 2024 Referral to 5-Judge Bench)',
        examTrap: 'HIGH-YIELD RECENT CONTROVERSY: Why does Centre restrict how much a State can borrow from domestic open market? Because Art 293(3) bars States owing Centre debt from borrowing ANYWHERE without Union consent!'
      , colorKey: 'violet'
      }
    ]
  },
  {
    id: 'ut-governance-art239aa-delhi',
    title: 'Union Territories Architecture: Art 239AA Delhi Triple Exclusion & 2023 Services Rulings',
    category: 'Asymmetric UT Federalism',
    track: 'Federalism & Local Gov',
    articles: 'Articles 239 – 241',
    summary: 'Decision pipeline separating Administrator-run UTs from Elected-Assembly UTs (Puducherry/Delhi/J&K) and the constitutional clash over Delhi Entry 41 Services & GNCTD Act.',
    topology: 'flowchart',
    rootLabel: 'UNION TERRITORIES (PART VIII)',
    rootSub: 'Sui Generis Hybrid Model • 8 UTs',
    edgeFlowTag: 'ART 239AA CLASH',
    footerRule: 'Art 239AA (69th Amd 1991): Delhi Assembly legislates across List II & III EXCEPT THREE EXCLUDED ENTRIES (Entry 1 Public Order, Entry 2 Police, Entry 18 Land) — while Services (Entry 41) sparked 2023 Constitution Bench!',
    nodes: [
      {
        id: 'ut-types',
        badge: 'PART VIII · 8 UTs',
        title: 'Administered UTs vs Legislative UTs',
        subtitle: 'Puducherry (239A), Delhi (239AA) & J&K (Statutory 2019 Act)',
        tag: 'President Admin.',
        edgeLabel: 'UT Tiers',
        rule: '5 UTs (Chandigarh, Ladakh, Lakshadweep, DNH&DD, A&N) lack Assemblies & are run by Administrator/LG (President issues Art 240 Regulations having effect of Parliament Act!). Delhi, Puducherry & J&K have Elected Assemblies + CMs.',
        callouts: [
          'Only Delhi (since 1991 Art 239AA) & Puducherry (since 1962 Art 239A) have Constitutional Assemblies; J&K Assembly rests under J&K Reorganisation Act 2019 (Parliament Art 239A statute!)',
          'Art 240 Regulation Power: After PUDUCHERRY/DELHI Assemblies dissolve/suspend, President makes Art 240 Regulations for them too (A&N, Ladakh, Lakshadweep, DNH&DD continuous!)',
          'Only Delhi & Puducherry MLAs vote in Presidential Election (J&K status under statutory transition!)'
        ],
        landmarkCase: '69th Amendment Act 1991 & In re Article 370 (Dec 2023 5-Judge)',
        examTrap: 'WHO CAN VOTE IN PRESIDENTIAL ELECTION AMONG UTs? Text of Art 54 Explanation (70th Amd 1992) names ONLY elected MLAs of DELHI & PUDUCHERRY!'
      , colorKey: 'sky'
      },
      {
        id: 'ut-delhi-ex',
        badge: 'ART 239AA · TRIPLE EXCL.',
        title: 'Delhi Assembly: Excludes Public Order, Police & Land',
        subtitle: 'Union Parliament Concurrent Power Over ALL Delhi Matters!',
        tag: '10% Minister Cap (Max 7)',
        edgeLabel: '3 Exclusions',
        rule: 'NCT Delhi Assembly enjoys List II & List III competence EXCEPT Entries 1 (Public Order), 2 (Police) & 18 (Land) — AND Parliament retains overriding power to pass ANY Delhi law even on List II subjects (239AA(3)(b))!',
        callouts: [
          'Cabinet size cap for Delhi = 10% of 70 MLAs = MAX 7 MINISTERS (incl. CM), NOT 15%!',
          'CM of Delhi appointed by PRESIDENT (not LG!), other Ministers by President on CM advice',
          'Under 239AA(4), on "difference of opinion" LG refers to President — 2018 5J Bench warned LG cannot refer trivial/routine matters to obstruct!'
        ],
        landmarkCase: 'Govt of NCT of Delhi v. Union of India (2018 5-Judge Constitution Bench)',
        examTrap: 'MEMORIZE DELHI NUMBERS: Max Ministers = 10% of Assembly (7, NOT 15% / 12!); 3 Excluded State Entries = Public Order (1), Police (2), Land (18)!'
      , colorKey: 'rose'
      },
      {
        id: 'ut-serv-2023',
        badge: '2023 5-JUDGE VERDICT',
        title: 'Entry 41 (Services): Triple Chain of Accountability',
        subtitle: 'SC Gave Control to Elected Delhi Govt -> Overridden by Parliament 2023 Act',
        tag: 'Ongoing 5J Scrutiny',
        edgeLabel: 'Services Tug',
        rule: 'May 2023 5-Judge Bench ruled Delhi Govt holds executive control over bureaucrats (Entry 41 Services) via Civil Servants -> Ministers -> Assembly -> Voters chain. Months later, Parliament passed GNCTD (Amendment) Act 2023 creating NCCSA under Art 239AA(3)(b)/(7)!',
        callouts: [
          'Art 239AA(7)(a) empowers Parliament to supplement Art 239AA without Art 368',
          '2023 Amendment vested final transfer override in LG via NCCSA (CM + Chief Secy + Home Secy)',
          'Constitutional validity of 2023 GNCTD Act pending before Supreme Court Constitution Bench'
        ],
        landmarkCase: 'GNCTD v. Union of India (May 2023 5-Judge Bench)',
        examTrap: 'Check wording: Even though 2023 SC Bench gave Services to Delhi Govt under Entry 41, Art 239AA(3)(b) STILL grants Parliament overriding legislative power over Delhi!’'
      , colorKey: 'violet'
      },
      {
        id: 'ut-hc-241',
        badge: 'ART 241 · COURTS & ADMIN',
        title: 'High Courts for UTs (Delhi 1966) & Madras Exception',
        subtitle: 'Parliament Constitutes or Attaches Neighbouring HC',
        tag: '8 High Court Shares',
        edgeLabel: 'Judicial Link',
        rule: 'Art 241 empowers Parliament to establish a separate HC for a UT (Delhi 1966) or extend existing State HC jurisdiction (e.g. Bombay -> DNH&DD; Madras -> Puducherry; Kerala -> Lakshadweep; Calcutta -> A&N; P&H -> Chandigarh).',
        callouts: [
          'Administered UTs rely heavily on Home Ministry (MHA) consolidated grants',
          'Special 239B empowers UT Administrator to issue Ordinances only on prior Presidential instructions',
          'Unlike Governor, UT Administrator/LG is directly Presidential Constitutional Agent'
        ],
        landmarkCase: 'Article 241 High Court Extension Framework',
        examTrap: 'Which UTs have their OWN dedicated High Courts? ONLY DELHI (1966) and JAMMU & KASHMIR (combined J&K + Ladakh HC)!'
      , colorKey: 'emerald'
      }
    ]
  },
  {
    id: 'fifth-vs-sixth-schedule-tribal',
    title: '5th Schedule (10 States, TAC & Governor) vs 6th Schedule (AMTM Autonomous Councils)',
    category: 'Tribal Autonomous Governance',
    track: 'Federalism & Local Gov',
    articles: 'Article 244(1) & (2) + Sch 5 & 6',
    summary: 'Clean side-by-side matrix comparing 5th Schedule Presidential/Governor assimilation framework across 10 mainland States against 6th Schedule Autonomous District Councils in Assam, Meghalaya, Tripura & Mizoram.',
    topology: 'matrix-split',
    rootLabel: 'SCHEDULED AREAS & TRIBAL AUTONOMY (ART 244)',
    rootSub: '5th Schedule (10 Mainland States) vs 6th Schedule (AMTM North-East States)',
    edgeFlowTag: 'SCH 5 vs SCH 6',
    footerRule: 'MNEMONIC LOCK: 6th Schedule applies STRICTLY to 4 STATES ONLY — "AMTM" (Assam, Meghalaya, Tripura, Mizoram) — NOT Manipur, Nagaland, or Arunachal Pradesh!',
    nodes: [
      {
        id: 't5-area',
        badge: '5TH SCHEDULE · ART 244(1)',
        title: 'President Declares Scheduled Areas (10 States)',
        subtitle: 'Governor Submits Annual Report + TAC (20 Members)',
        tag: 'AP, CG, GJ, HP, JH, MP, MH, OD, RJ, TS',
        side: 'left',
        rule: 'President declares/alters Scheduled Areas after consulting State Governor. Union executive power extends to issuing binding Tribal Welfare directions. Each State forms a Tribes Advisory Council (TAC): <=20 members (3/4ths must be ST MLAs!).',
        callouts: [
          'Governor can direct ANY Parliamentary or State Act SHALL NOT APPLY or apply with modifications in Scheduled Area (with or without President approval depending on Regulation!)',
          'Governor makes PEACE & GOOD GOVT Regulations (banning land transfer/moneylending) — REQUIRES TAC consultation + PRESIDENTIAL ASSENT!',
          'Same-line PESA Act 1996 governs Panchayat democracy across 5th Schedule villages'
        ],
        landmarkCase: 'Samatha v. State of Andhra Pradesh (1997 — Tribal Land Transfer Shield)',
        examTrap: 'MEMORIZE 5TH SCH QUOTAS: TAC has max 20 members, THREE-FOURTHS (3/4ths) must be Scheduled Tribe MLAs in the State Assembly!'
      , colorKey: 'sky'
      },
      {
        id: 't5-samatha',
        badge: 'SAMATHA & PESA BAR',
        title: 'Tribal Land Alienation Prohibition (5th Sch)',
        subtitle: 'Governor Regulations Override General Mining/Transfer Laws',
        tag: 'Chebrolu Leela 2020 Check',
        side: 'left',
        rule: 'Under 5th Sch Para 5(2), Governor Regulations can prohibit or restrict transfer of land by or among STs and regulate moneylenders. In Samatha (1997), SC held even "person" includes State leasing tribal land to private mining firms!',
        callouts: [
          'BALCO (2001) limited Samatha strictly where 5th Sch Andhra-style statutory bar exists vs MP',
          'Chebrolu Leela Prasad Rao (2020 5J): Struck down 100% ST-only school teacher quota under 5th Sch Para 5(1) as violating Art 14/16 equality!',
          'Governor’s Para 5(1) modification power CANNOT override Basic Fundamental Rights!'
        ],
        landmarkCase: 'Chebrolu Leela Prasad Rao v. State of A.P. (2020 5-Judge)',
        examTrap: 'Notice: Can Governor use 5th Schedule powers to declare 100% job reservation? NO — Chebrolu (2020) confirmed 5th Sch powers must respect Art 14/16 50% ceiling!'
      , colorKey: 'violet'
      },
      {
        id: 't6-amtm',
        badge: '6TH SCHEDULE · AMTM',
        title: '10 Autonomous District Councils (ADCs) in 4 States',
        subtitle: 'Assam, Meghalaya, Tripura & Mizoram ONLY',
        tag: 'Self-Governing Legislative Councils',
        side: 'right',
        rule: 'Provides genuine grass-roots legislative, judicial & fiscal autonomy via Autonomous District Councils (ADCs — up to 30 members: 26 elected for 5 yrs + 4 nominated by Governor!). Governor organizes/alters ADC boundaries directly (NOT President!).',
        callouts: [
          'WAIT LOOK WHO ALTERS BOUNDARIES: In 5th Schedule, PRESIDENT declares Scheduled Areas. In 6th Schedule, GOVERNOR creates/alters Autonomous Districts!',
          'Who stops Central/State laws in 6th Schedule? In ASSAM -> GOVERNOR directs Central & State Acts; In MEGHALAYA, TRIPURA, MIZORAM -> PRESIDENT directs Central Acts & GOVERNOR directs State Acts!!',
          'Acts of Parliament/State on ADC subjects (forests, shifting cult, village police, marriage, inheritance) apply ONLY if ADC passes them!'
        ],
        landmarkCase: 'Article 244(2) & Paragraph 12/12AA/12B Splits',
        examTrap: 'WORLD-CLASS PRELIMS TRAP: (1) Manipur, Nagaland & Arunachal are NOT in 6th Schedule! (2) 5th Sch areas declared by PRESIDENT; 6th Sch Autonomous Districts organized by GOVERNOR!'
      , colorKey: 'emerald'
      },
      {
        id: 't6-powers',
        badge: 'ADC COURT & FISCAL',
        title: 'Legislative, Village Courts & Mineral Royalties',
        subtitle: 'ADCs Collect Land Revenue, Local Taxes & Royalties',
        tag: 'Governor Financial Check',
        side: 'right',
        rule: 'ADCs constitute Village Councils & District Courts trying suits exclusively between ST parties (appeals skip regular magistrates directly to HC/ADC!); receive royalties from mineral prospecting licences settled at Governor’s discretion (Art 163)!',
        callouts: [
          'Assam (3 ADCs: Bodoland, Karbi Anglong, Dima Hasao); Meghalaya (3: Khasi, Jaintia, Garo); Tripura (1: Tripura Tribal); Mizoram (3: Chakma, Lai, Mara) -> Total 10!',
          'Disputes between ADC & State Govt over Mineral Royalty share settled SOLELY by GOVERNOR (in his Art 163 Constitutional Discretion!)',
          'Para 11/12 allows District & Regional Council Budgets & Governor-appointed Commissions'
        ],
        landmarkCase: '6th Schedule Paras 3–9 & 14 Autonomous Framework',
        examTrap: 'Total ADCs under 6th Schedule = 10 across AMTM (3 Assam + 3 Meghalaya + 3 Mizoram + 1 Tripura). Bodoland Territorial Council runs up to 46 members by special Para amendment!'
      , colorKey: 'rose'
      }
    ]
  },
  {
    id: 'cooperative-societies-part-ixb',
    title: 'Part IX-B Cooperatives (97th Amd): Multi-State vs Intra-State Post-Rajendra Shah (2021)',
    category: 'Cooperative Federalism',
    track: 'Federalism & Local Gov',
    articles: 'Art 19(1)(c), 43B & Part IX-B',
    summary: 'Decision flowchart tracing 97th Amendment invalidation under Art 368(2) State Ratification defect — saving Multi-State Cooperatives while restoring State supremacy over Local Cooperatives.',
    topology: 'flowchart',
    rootLabel: '97TH AMD · PART IX-B',
    rootSub: 'Cooperatives Federal Split (2011 -> 2021)',
    edgeFlowTag: 'ART 368(2) CHECK',
    footerRule: 'Union of India v. Rajendra N. Shah (July 2021 3-Judge 2:1): Part IX-B struck down ONLY FOR INTRA-STATE CO-OPERATIVES for skipping 50% State Ratification under Art 368(2) — SURVIVED for Multi-State & UT Cooperatives!',
    nodes: [
      {
        id: 'co-97th',
        badge: '97TH AMD · 2011 TRIO',
        title: 'Inserted Fundamental Right, DPSP & Part IX-B',
        subtitle: 'Art 19(1)(c) + Art 43B + Arts 243ZH–243ZT',
        tag: 'Cooperatives Constitutionalized',
        edgeLabel: '2011 Enacted',
        rule: '97th Amendment (2011) gave cooperatives triple constitutional stature: (1) Right to form cooperative society in Art 19(1)(c), (2) Promotion duty in Art 43B, (3) 13 detailed regulatory provisions in Part IX-B (Board size <=21, 5-yr term, 1 SC/ST + 2 Women seats).',
        callouts: [
          'Enacted solely by Special Majority in Parliament WITHOUT seeking 50% State Legislature ratification!',
          'Prescribed uniform election, audit, supersession (max 6 months) & annual general meeting timelines',
          'Challenged in Gujarat HC for directly invading State List Entry 32 ("Co-operative societies")!'
        ],
        landmarkCase: '97th Constitutional Amendment Act, 2011',
        examTrap: 'Which List contains ordinary intra-state "Co-operative societies"? STATE LIST Entry 32! (Whereas Multi-State Cooperative Societies fall under Union List Entry 44!)'
      , colorKey: 'sky'
      },
      {
        id: 'co-ratify',
        badge: 'ART 368(2) DEFECT',
        title: 'Mandatory 50% State Ratification Missing!',
        subtitle: 'Directly Curbed State Legislative Power Over List II Entry 32',
        tag: 'Unratified Federal Cut',
        edgeLabel: 'Fatal Omission',
        rule: 'Under Art 368(2) Proviso, ANY constitutional amendment making changes in Seventh Schedule Lists MUST be ratified by NOT LESS THAN HALF of State Legislatures BEFORE Presidential assent.',
        callouts: [
          'Notice Contrast: 73rd/74th Amendments (Panchayats/Municipalities) WERE ratified by >50% States; 97th Amendment SKIPPED State ratification!',
          'Part IX-B forced States to restrict board sizes, supersession terms & audit deadlines',
          'Gujarat High Court struck down entire Part IX-B in 2013 -> Union appealed to SC'
        ],
        landmarkCase: 'Rajendra N. Shah v. Union of India (Gujarat HC 2013 -> SC 2021)',
        examTrap: 'Procedural Gold: Even if an amendment adds a NEW Part (rather than editing 7th Schedule words directly), if it SUBSTANTIALLY curtails List II state domain, Art 368(2) State Ratification IS MANDATORY!'
      , colorKey: 'rose'
      },
      {
        id: 'co-sever',
        badge: 'RAJENDRA SHAH (2021 · 2:1)',
        title: 'Doctrine of Severability Saved Multi-State Co-ops!',
        subtitle: 'Part IX-B Void ONLY for Intra-State; Valid for Multi-State & UTs',
        tag: '243ZR & 243ZS Survive',
        edgeLabel: 'Severed Scope',
        rule: 'Justice Nariman’s majority held 97th Amd violated Art 368(2) ONLY regarding Single-State cooperatives. Multi-State Cooperative Societies (Entry 44 List I -> Art 243ZR) & UTs (Art 243ZS) fall cleanly within Parliament competence!',
        callouts: [
          'Intra-State Cooperatives -> State Legislatures regain free sovereign authority (Part IX-B void for them)',
          'Multi-State Cooperatives (IFFCO, KRIBHCO etc. spanning >1 State) -> Part IX-B FULLY VALID & ENFORCEABLE!',
          'BOTH Art 19(1)(c) ("co-operative societies") & Art 43B DPSP remained 100% INTACT!'
        ],
        landmarkCase: 'Union of India v. Rajendra N. Shah (July 2021 3-Judge 2:1)',
        examTrap: 'NUMBER ONE CO-OP EXAM QUESTION: Did SC strike down Part IX-B completely? NO! SC severed it: Part IX-B STILL applies to Multi-State Cooperatives (243ZR) & Union Territories (243ZS) — plus Art 19(1)(c) & Art 43B remain valid!'
      , colorKey: 'emerald'
      },
      {
        id: 'co-ministry',
        badge: 'POST-2021 · SAHAKAR SE SAMRIDDHI',
        title: 'Ministry of Cooperation & 2023 MSCS Amendment',
        subtitle: 'Cooperative Election Authority & Ombudsman Rules',
        tag: 'Multi-State Strengthening',
        edgeLabel: 'Modern Era',
        rule: 'Union created dedicated Ministry of Cooperation (2021) & Multi-State Co-operative Societies (Amendment) Act 2023 reinforcing Part IX-B electoral/audit norms on Multi-State entities.',
        callouts: [
          'Reserves 2 Women & 1 SC/ST seat on Multi-State Co-op boards (mirroring 243ZJ)',
          'Establishes independent Co-operative Election Authority for multi-state polls',
          'State cooperative federations remain governed purely by respective State Co-op Acts'
        ],
        landmarkCase: 'MSCS (Amendment) Act, 2023',
        examTrap: 'Remember: Cooperative Societies appearing in THREE places in Constitution — Art 19(1)(c), Art 43B & Part IX-B!'
      , colorKey: 'violet'
      }
    ]
  },
  {
    id: 'gram-sabha-pesa-decentralisation',
    title: 'PESA Act 1996 & Gram Sabha Resource Sovereignty in 5th Schedule Areas',
    category: 'Tribal Local Self-Governance',
    track: 'Federalism & Local Gov',
    articles: 'Art 243M(4)(b) + PESA 1996',
    summary: 'Circular accountability map highlighting why ordinary Part IX Panchayats skip 5th Schedule until modified by PESA — giving Gram Sabha statutory control over minor minerals, forests & acquisition.',
    topology: 'cycle-sequence',
    rootLabel: 'PESA GRAM SABHA',
    rootSub: 'Bhuria Committee • Art 243M(4)(b)',
    edgeFlowTag: 'TRIBAL SELF-RULE',
    footerRule: 'Under Art 243M, 73rd Amendment Part IX DOES NOT APPLY automatically to 5th/6th Schedule Areas, Nagaland, Meghalaya, Mizoram, Hill areas of Manipur & Darjeeling Gorkha Hill Council!',
    nodes: [
      {
        id: 'ps-243m',
        badge: 'EXCLUDED BELTS · 243M',
        title: 'Why Ordinary Panchayats Skip Scheduled Areas',
        subtitle: 'Extended Exclusively via Parliamentary Law (PESA 1996)',
        tag: '10 Fifth-Sch States Only',
        edgeLabel: 'Art 243M Exception',
        rule: 'Art 243M excludes Part IX from 5th & 6th Schedules + Nagaland, Meghalaya, Mizoram. Art 243M(4)(b) authorizes Parliament to extend Part IX to Scheduled Areas with exceptions/modifications -> enacted PESA 1996!',
        callouts: [
          'Covers ONLY 5th Schedule Tribal Areas across 10 States (NOT 6th Schedule AMTM!)',
          'Notice: Urban Municipal equivalent (MESA Bill for 74th Amd under Art 243ZC) has STILL NOT BEEN ENACTED!',
          'Enacted on Dileep Singh Bhuria Committee report (1995)'
        ],
        landmarkCase: 'Article 243M(1)–(4) & Bhuria Committee 1995',
        examTrap: 'CRITICAL DISTINCTION: PESA extends PART IX (Rural Panchayats) to 5th Schedule ONLY — has Parliament enacted its urban Part IX-A sister MESA for Scheduled Cities? STILL PENDING / NOT ENACTED!'
      , colorKey: 'rose'
      },
      {
        id: 'ps-gram',
        badge: 'GRAM SABHA SOVEREIGNTY',
        title: 'Competence to Safeguard Customary Law & Traditions',
        subtitle: 'Community Manages Village Markets, Intoxicants & Disputes',
        tag: 'Habitational Units',
        edgeLabel: 'Tradition Guard',
        rule: 'PESA defines "village" at habitation/hamlet community level rather than arbitrary revenue circle, empowering EVERY Gram Sabha to preserve traditions, cultural identity, customary dispute resolution & community resources.',
        callouts: [
          'Must be consulted BEFORE land acquisition in Scheduled Areas & resettlement planning!',
          'Approves ALL socio-economic plans/projects BEFORE Panchayat implementation!',
          'Certifies utilization of funds spent by Gram Panchayat!'
        ],
        landmarkCase: 'Orissa Mining Corp v. MoEF (Niyamgiri Gram Sabha 2013)',
        examTrap: 'In Niyamgiri (2013), SC held Gram Sabha consent/cultural assessment under Forest Rights Act + PESA spirit was decisive against Vedanta bauxite mining!'
      , colorKey: 'emerald'
      },
      {
        id: 'ps-minerals',
        badge: 'MINERALS & MINOR FOREST',
        title: 'MFP Ownership, Moneylending & Minor Mineral Consent',
        subtitle: 'Gram Sabha Recommendation Mandatory for Quarry/Minor Minerals',
        tag: 'Resource Veto',
        edgeLabel: 'Resource Power',
        rule: 'Endows Panchayats/Gram Sabhas with: (1) Ownership of Minor Forest Produce (MFP — tendu leaves, bamboo, mahua); (2) Power to prevent & restore alienated ST land; (3) Prior recommendation MANDATORY for granting Minor Mineral prospecting leases/auctions!',
        callouts: [
          'Wait: PESA mandates prior Gram Sabha consultation for MINOR minerals (sand, stone, granite) — NOT Major Minerals (coal/iron ore under MMDR)!',
          'Power to enforce prohibition / restrict sale & consumption of intoxicants',
          'Control over village markets & tribal moneylending regulations'
        ],
        landmarkCase: 'PESA Act Sec 4(k), 4(l), 4(m)',
        examTrap: 'CHECK PRECISION: PESA Sec 4(k)/(l) gives mandatory prior recommendation specifically for MINOR MINERALS (quarrying/concessions) & local water bodies!'
      , colorKey: 'sky'
      },
      {
        id: 'ps-quota',
        badge: 'MIN 50% ST & CHAIRS',
        title: 'Reservation Safeguards in PESA Panchayats',
        subtitle: 'Min 50% Seats + ALL Chairperson Posts Reserved for STs!',
        tag: 'SC Confirmed Union Rule',
        edgeLabel: '100% Chair Quota',
        rule: 'PESA Section 4(g) mandates Scheduled Tribe seat reservation proportional to population (MINIMUM 50% ALWAYS!) AND reserves ALL CHAIRPERSON POSTS at EVERY PESA tier strictly for Scheduled Tribes! (Upheld by SC in Union v. Rakesh Kumar 2010!).',
        callouts: [
          'Rakesh Kumar (2010): Upheld 100% ST Chairperson mandate as affirmative protective modification under Art 243M(4)(b) — immune from 50% Indra Sawhney bar!',
          'State Govt may nominate unrepresented STs in Intermediate/District levels (up to 1/10th)',
          'Protects local democracy from non-tribal local capture'
        ],
        landmarkCase: 'Union of India v. Rakesh Kumar (2010 3-Judge Bench)',
        examTrap: 'YES — under PESA Sec 4(g), ALL Chairperson posts at ALL 3 tiers in 5th Schedule PESA areas are 100% reserved for STs (upheld by SC)!'
      , colorKey: 'violet'
      }
    ]
  },
  {
    id: 'municipal-finance-mpc-dpc',
    title: 'Urban Governance Planning: Art 243ZD DPC vs Art 243ZE MPC & Municipal Bonds',
    category: 'Urban Decentralisation',
    track: 'Federalism & Local Gov',
    articles: 'Articles 243ZD, 243ZE, 243X & 243Y',
    summary: '4-tier structural hierarchy linking State-mandated District Planning Committees (4/5th elected!) & Metropolitan Planning Committees (2/3rd elected!) to Municipal Fiscal Autonomy.',
    topology: 'pyramid-hierarchy',
    rootLabel: '74TH AMD FISCAL & PLANNING ENGINE',
    rootSub: 'Arts 243ZD (DPC) & 243ZE (MPC) Compulsory Provisions',
    edgeFlowTag: 'INTEGRATED PLANS',
    footerRule: 'FRACTION TRAP: District Planning Committee (Art 243ZD) requires 4/5th (80%) elected from District Panchayats + Municipalities; Metropolitan Planning Committee (Art 243ZE) requires 2/3rd (66.7%)!',
    nodes: [
      {
        id: 'mp-dpc',
        badge: 'ART 243ZD · COMPULSORY',
        title: 'District Planning Committee (4/5ths Elected)',
        subtitle: 'Consolidates ALL Panchayat & Municipal District Plans',
        tag: '4/5th Quota Lock',
        rule: 'Every State SHALL constitute a District Planning Committee (DPC) at district level to consolidate plans prepared by Rural Panchayats & Urban Municipalities into one Draft District Development Plan.',
        callouts: [
          'MUST comprise NOT LESS THAN 4/5ths elected by and from District Zilla Parishad & Municipal Councillors (in rural-urban population ratio!)',
          'Balancing spatial development, water/resource sharing, infrastructure & environment',
          'Forwards consolidated District Plan directly to State Government!'
        ],
        landmarkCase: 'Article 243ZD(1)–(4) Constitutional Mandate',
        examTrap: 'MEMORIZE THE RATIO SPLIT: DPC = FOUR-FIFTHS (4/5 = 80%) elected; MPC = TWO-THIRDS (2/3 = 66.7%) elected!'
      , colorKey: 'sky'
      },
      {
        id: 'mp-mpc',
        badge: 'ART 243ZE · METRO >= 10L',
        title: 'Metropolitan Planning Committee (2/3rds Elected)',
        subtitle: 'Mandatory for Metro Areas With Population >= 10 Lakhs',
        tag: '2/3rd Quota Lock',
        rule: 'Mandatory in EVERY Metropolitan Area (having population of 10 LAKHS or more across 2+ Municipalities/Panchayats per 243P(c)). Considers State/Central investment priorities alongside local plans.',
        callouts: [
          'MUST comprise NOT LESS THAN 2/3rds elected by Municipal Councillors & Gram Panchayat Chairs in Metro area!',
          'Remaining 1/3rd includes Union, State & institutional planning experts',
          'Missing/weakened MPC implementation remains major hurdle for Indian urban governance (15th FC urged compliance!)'
        ],
        landmarkCase: 'Article 243ZE & Art 243P(c) (10 Lakh Metro Defn.)',
        examTrap: 'What defines a "Metropolitan Area" under Art 243P(c)? Area having >= 10 LAKHS population, spanning 1+ districts and containing 2+ Municipalities/Panchayats!'
      , colorKey: 'violet'
      },
      {
        id: 'mp-wards',
        badge: 'ART 243S · WARDS',
        title: 'Wards Committees (>= 3 Lakhs Cities)',
        subtitle: 'Proximity Participation Inside Big Corporations',
        tag: 'Threshold >= 3L',
        rule: 'Mandatory constitution of Wards Committees within territorial area of a Municipality having population of THREE LAKHS (3,00,000) or more!',
        callouts: [
          'State Legislature fixes composition, territorial bounds & how Chair is filled',
          'Ensures granular citizen oversight over sanitation, streetlights & ward budgets',
          'Distinct from Municipal Nagar Panchayat / Council / Corporation 3-tier sizing'
        ],
        landmarkCase: 'Article 243S(1)–(4)',
        examTrap: 'WATCH ALL 3 URBAN THRESHOLDS TOGETHER: Wards Committee = 3 Lakhs (243S); Metro Area/MPC = 10 Lakhs (243ZE); No-Reservation Small Rural Population = 20 Lakhs no mid-tier Panchayat (243B)!'
      , colorKey: 'emerald'
      },
      {
        id: 'mp-243x-fin',
        badge: 'ARTS 243X & 243Y',
        title: 'Urban Taxation, State Finance Commission & Bonds',
        subtitle: 'Property Tax, Stamp Duty Devolution & Market Borrowing Limits',
        tag: 'SEBI Muni Bonds',
        rule: 'Art 243X empowers State Legislatures to authorize Municipalities to levy/collect local taxes (Property tax, Octroi replacement, Parking/Advertisement) and receive Grants-in-Aid from State CFI guided every 5 yrs by State Finance Commission (Art 243Y/243-I).',
        callouts: [
          '15th Finance Commission conditioned urban health/air-quality grants on Audited Accounts + Property Tax floor!',
          'Creditworthy Municipal Corporations (Pune, Indore, Ahmedabad, Lucknow) raise green Municipal Bonds under SEBI rules',
          'Yet 74th Amd left municipal borrowing & functional devolution DISCRETIONARY to States!'
        ],
        landmarkCase: 'Articles 243W, 243X, 243Y & 12th Schedule (18 Items)',
        examTrap: '11th Schedule (Panchayats) has 29 functional items; 12th Schedule (Municipalities) has 18 functional items — neither automatically vests powers without State statute!'
      , colorKey: 'rose'
      }
    ]
  },
  {
    id: 'reorganisation-states-timeline-1956',
    title: 'States Reorganisation Engine: Dhar -> JVP -> Fazl Ali (7th Amd 1956) -> Modern States',
    category: 'Territorial Federalism',
    track: 'Federalism & Local Gov',
    articles: 'Articles 3 & 4 + 7th Amendment',
    summary: 'Historical cycle tracing post-1947 boundary integration: rejection of pure linguistic criterion (Dhar & JVP), Potti Sriramulu fast (Andhra 1953), Fazl Ali (1956), and 29->28/8 transformation.',
    topology: 'cycle-sequence',
    rootLabel: 'STATES EVOLUTION',
    rootSub: 'Part A/B/C/D -> 14 States + 6 UTs -> 28 + 8',
    edgeFlowTag: '1948 – 2019',
    footerRule: '7th Amendment Act 1956 + States Reorganisation Act 1956 abolished four-fold Part A/B/C/D classification, creating 14 States & 6 UTs on balanced Administrative + Linguistic unity!',
    nodes: [
      {
        id: 'sr-dhar-jvp',
        badge: '1948 · DHAR & JVP',
        title: 'Dhar Commission & JVP Rejected "Language Only"',
        subtitle: 'Prioritized Administrative Convenience & National Unity First',
        tag: 'Both Rejected Language',
        edgeLabel: '1948–49',
        rule: 'S.K. Dhar Commission (June 1948) & Congress JVP Committee (Nehru, Patel, Pattabhi Sitaramayya, Dec 1948) both REJECTED pure linguistic reorganization fearing post-Partition centrifugal fracture.',
        callouts: [
          '1950 Original Union held 29 units in 4 unequal Parts: A (9 British Governors’ Prov.), B (9 Princely States), C (10 Chief Commissioners), D (A&N)',
          '1953 Crisis: Potti Sriramulu’s 56-day hunger strike death forced creation of ANDHRA STATE (1st linguistic State, Oct 1953) carved from Madras!',
          'Triggered nationwide linguistic agitation forcing Fazl Ali appointment'
        ],
        landmarkCase: 'Creation of Andhra State (Oct 1, 1953)',
        examTrap: 'Which was India’s FIRST Linguistic State created in 1953 BEFORE Fazl Ali Report? ANDHRA STATE (not Andhra Pradesh — Telangana merged later in 1956)!'
      , colorKey: 'rose'
      },
      {
        id: 'sr-fazl',
        badge: '1953–56 · FAZL ALI',
        title: 'States Reorganisation Commission (Fazl Ali + Panikkar + Kunzru)',
        subtitle: 'Accepted Language as Factor — Rejected "One Language One State"',
        tag: '7th Amd + SRC Act 1956',
        edgeLabel: '1956 Overhaul',
        rule: '3-member Fazl Ali Commission (1953–55: Fazl Ali, K.M. Panikkar, H.N. Kunzru) set 4 criteria: Unity/Security, Linguistic/Cultural homogeneity, Financial/Administrative viability, Five-Year Plan welfare. Abolished Parts A–D via 7th Amd -> 14 States & 6 UTs!',
        callouts: [
          'Rejected strict "One Language, One State" formula',
          'Created Kerala, merged Hyderabad Telangana -> Andhra Pradesh, created Madhya Pradesh, reorganized Karnataka (Mysore)',
          '7th Amendment inserted Arts 258A, 350A (mother tongue), 350B & Common High Courts (Art 231)!'
        ],
        landmarkCase: '7th Constitutional Amendment & States Reorganisation Act 1956',
        examTrap: 'MEMORIZE THE 3 NAMES: Fazl Ali (Chair), K.M. Panikkar, H.N. Kunzru -> 14 States & 6 UTs on Nov 1, 1956!'
      , colorKey: 'emerald'
      },
      {
        id: 'sr-60-87',
        badge: '1960–1987 · EXPANSION',
        title: 'Bifurcations: Bombay (15th GJ), Nagaland (16th), Punjab/HR (17th) & North-East',
        subtitle: 'Sikkim (35th Associate -> 36th Full 22nd State 1975)',
        tag: 'Portuguese/French Treaties',
        edgeLabel: '1960–87 Growth',
        rule: 'Maharashtra & Gujarat split (1960); Nagaland (1963); Haryana & Chandigarh UT via Shah Commission (1966); HP (1971); Manipur, Tripura & Meghalaya (1972); Sikkim (36th Amd 1975 Art 371F); Mizoram, Arunachal & Goa (25th State 1987).',
        callouts: [
          'Puducherry, Daman & Diu, Dadra & Nagar Haveli, Goa acquired from France/Portugal & governed via Art 240/Act before statehood',
          'Sikkim briefly made "Associate State" via Art 2A (35th Amd 1974) -> upgraded to 22nd full State & 2A repealed by 36th Amd (1975)!',
          'Goa (1987) split from Daman & Diu (25th State)'
        ],
        landmarkCase: '36th Amendment Act 1975 (Sikkim 22nd State)',
        examTrap: 'Remember Sikkim transition: 35th Amd = Associate State (Art 2A); 36th Amd (1975) = Full 22nd State + Art 371F!'
      , colorKey: 'sky'
      },
      {
        id: 'sr-2000-19',
        badge: '2000–2019 · MODERN 28+8',
        title: '2000 Trio, Telangana (2014) & J&K/Ladakh (2019)',
        subtitle: '2020 Merger: Dadra & Nagar Haveli + Daman & Diu = 8 UTs',
        tag: 'Current 28 States + 8 UTs',
        edgeLabel: 'Modern Map',
        rule: 'Chhattisgarh (MP), Uttarakhand (UP) & Jharkhand (Bihar) born Nov 2000 (Administrative efficiency/tribal focus); Telangana carved from AP (2014); J&K state converted into J&K (with Assembly) & Ladakh UTs (2019); DNH & DD merged Jan 2020 -> 28 States + 8 UTs.',
        callouts: [
          'Notice SC In re Article 370 (Dec 2023) left Art 3 question open on whether Parliament can downgrade full State into UT temporarily -> directed J&K Statehood restoration!',
          'DNH + Daman & Diu merged in Jan 2020 reducing UTs from 9 -> 8',
          'All accomplished via Simple Majority under Articles 3 & 4!'
        ],
        landmarkCase: 'In re: Article 370 (Dec 2023 5-Judge Constitution Bench)',
        examTrap: 'CURRENT OFFICIAL INDIA COUNT: 28 States and 8 Union Territories (NOT 29/7 or 28/9 — remember J&K Reorg + DNH/DD 2020 merger!).'
      , colorKey: 'violet'
      }
    ]
  },
  {
    id: 'property-liability-torts-art294-300',
    title: 'Union & State Contractual/Tortious Liability: Arts 294–300 & Sovereign Immunity',
    category: 'State Legal Personality',
    track: 'Federalism & Local Gov',
    articles: 'Articles 294 – 300',
    summary: 'Equilibrium scale tracing how Indian courts shrunk colonial "Sovereign Immunity" (Kasturi Lal 1965) via Nagendra Rao (1994) & Article 21 Custodial Torture Compensation (Nilabati Behera).',
    topology: 'balance-beam',
    rootLabel: 'CROWN IMMUNITY ("KING CAN DO NO WRONG") vs CITIZEN TORT REDRESS (ART 300)',
    rootSub: 'Strict Written Contracts (Art 299) & Sovereign vs Non-Sovereign Tort Distinction',
    edgeFlowTag: 'ART 299–300 TEST',
    footerRule: 'While Art 300 still nominally links tort defence to Pre-1950 East India Co. / Dominion sovereign acts, Supreme Court awards FULL Art 32/226 Public Law Compensation whenever Art 21 is breached (Nilabati Behera)!',
    nodes: [
      {
        id: 'plt-299',
        badge: 'ART 299 · CONTRACTS',
        title: 'Strict 3-Prong Execution Mandate (Void Otherwise!)',
        subtitle: 'In President/Governor Name + By Authorized Officer + Written Form',
        tag: 'Mandatory Rule!',
        rule: 'Every contract by Union/State MUST: (1) Be expressed in name of President or Governor, (2) Executed in prescribed manner, AND (3) Signed by authorized person. Failure renders contract VOID (non-enforceable)!',
        callouts: [
          'Protection shield: Neither President/Governor NOR officer is personally liable (Art 299(2))',
          'Wait: If Govt enjoys benefit of a void/defective Art 299 contract, Section 70 Indian Contract Act ("Quantum Meruit" unjust enrichment) STILL obliges State to pay!',
          'Applies to contracts made in executive power — NOT statutory licences/tenders strictly governed by statute'
        ],
        landmarkCase: 'State of West Bengal v. B.K. Mondal (1962) & Mulamchand (1968)',
        examTrap: 'CHECK SUBTLETY: Defectively signed Art 299 contract is VOID (cannot be ratified retroactively!), YET citizen can recover reasonable price under Section 70 Contract Act for benefits enjoyed by State!'
      , colorKey: 'sky'
      },
      {
        id: 'plt-300-sue',
        badge: 'ART 300 · "UNION OF INDIA"',
        title: 'Juristic Personality to Sue & Be Sued',
        subtitle: 'Never Sue "Government of India" — Sue "Union of India"!',
        tag: 'State Succession',
        rule: 'Art 300 declares Union of India may sue or be sued by the name "Union of India" and a State by the name "State of [Name]" — inheriting rights & liabilities from Dominion/Provinces (Arts 294–295).',
        callouts: [
          'Art 296: Property without rightful heir/owner (Escheat / Lapse / Bona Vacantia) vests in State (if situated inside State) or Union (otherwise!)',
          'Art 298: Union & State Governments hold full executive power to carry on ANY commercial trade or business & enter contracts!',
          'Art 297 vests all Offshore EEZ / Continental Shelf / Sea-bed minerals purely in UNION'
        ],
        landmarkCase: 'Articles 294–300 Property & Succession Rules',
        examTrap: 'Who owns ESCHEAT / BONA VACANTIA (ownerless abandoned property) inside a State under Art 296? The STATE Government (not Union!) — unless situated outside State/Union asset!'
      , colorKey: 'emerald'
      },
      {
        id: 'plt-kasturi',
        badge: 'TORT · KASTURI vs NAGENDRA RAO',
        title: 'Shrinking "Sovereign Immunity" in Negligence Torts',
        subtitle: 'P&O Steam (1861) -> Vidhyawati -> Kasturi Lal -> Nagendra Rao (1994)',
        tag: 'Welfare State Liability',
        rule: 'Kasturi Lal (1965) excused State for police stealing seized gold under "sovereign police duty". N. Nagendra Rao (1994) shrunk sovereign immunity STRICTLY to Defence, Foreign Affairs & Martial Law — holding modern welfare functions FULLY LIABLE!',
        callouts: [
          'State of Rajasthan v. Vidhyawati (1962): Govt Jeep hitting pedestrian held Non-Sovereign -> State liable!',
          'Nagendra Rao (1994): Statutory confiscation without negligence defence makes State liable',
          'Distinction virtually dissolved for commercial, civic & administrative harms'
        ],
        landmarkCase: 'N. Nagendra Rao v. State of A.P. (1994) & Vidhyawati (1962)',
        examTrap: 'Notice contrast: Civil Tort negligence still nominally inspects "Sovereign function" (though narrowed sharply in Nagendra Rao), whereas Public Law Art 21 Writs recognize ZERO Sovereign Immunity!'
      , colorKey: 'violet'
      },
      {
        id: 'plt-21-comp',
        badge: 'PUBLIC LAW TORT · NILABATI',
        title: 'Strict Liability Constitutional Tort Under Art 32/226',
        subtitle: 'ZERO Sovereign Immunity for Custodial Death or Illegal Detention',
        tag: 'Rudal Shah & Nilabati',
        rule: 'In Rudal Shah (1983 illegal 14-yr jail) & Nilabati Behera (1993 police custody death), SC created strict Public Law Monetary Compensation completely BYPASSING Art 300 Sovereign Immunity!',
        callouts: [
          'Private Civil Suit (Art 300/CPC) can still claim damages alongside Public Law remedy',
          'State holds vicarious liability AND can recover compensation from guilty policemen/officers',
          'Confirmed recently in Bulldozer Justice (Nov 2024) demolition punitive compensation!'
        ],
        landmarkCase: 'Nilabati Behera v. State of Orissa (1993) & Rudal Shah (1983)',
        examTrap: 'GOLDEN TEST: Can State EVER plead "Sovereign Immunity" as a defence against compensation in an Art 32 / Art 226 Fundamental Rights writ petition? ABSOLUTELY NEVER (Nilabati Behera)!'
      , colorKey: 'rose'
      }
    ]
  },
  {
    id: 'niti-aayog-cooperative-federalism',
    title: 'Planning Commission / NDC Era -> NITI Aayog & Competitive Cooperative Federalism',
    category: 'Institutional Federal Evolution',
    track: 'Federalism & Local Gov',
    articles: 'Cabinet Resolution + Arts 263/280/279A',
    summary: 'Matrix contrasting Planning Commission’s centralized top-down fund allocation (1950–2014) against NITI Aayog’s Zero-Fund Think Tank + Governing Council model (Jan 2015).',
    topology: 'matrix-split',
    rootLabel: 'FROM CENTRAL PLANNING TO COOPERATIVE FEDERALISM (2015)',
    rootSub: 'Extra-Constitutional Executive Bodies • Neither Financed by Art 280',
    edgeFlowTag: 'PC vs NITI AAYOG',
    footerRule: 'BOTH Planning Commission (1950) & NITI Aayog (Jan 1, 2015) are NON-CONSTITUTIONAL, NON-STATUTORY executive bodies created by Union Cabinet Resolution — NITI Aayog holds ZERO power to allocate funds!',
    nodes: [
      {
        id: 'na-pc',
        badge: '1950–2014 · PLANNING COMM.',
        title: 'Command-Model Allocation & "Super-Cabinet" Overlap',
        subtitle: 'Controlled Discretionary Plan Grants (Art 282) Bypassing Art 280',
        tag: 'Top-Down Five-Year Plans',
        side: 'left',
        rule: 'Planning Commission (formed Mar 1950 via Cabinet Resolution with PM as Chair) dictated Five-Year Plans & Gadgil-Formula Plan Grants to States, overlapping & shrinking Finance Commission (Art 280)!',
        callouts: [
          'National Development Council (NDC, Aug 1952): All CMs sat under PM strictly to rubber-stamp Plans',
          'States had ZERO permanent equal role in framing initial Planning Commission policy ("One-size-fits-all")',
          'Abolished Aug 2014 after 12th Five-Year Plan transition'
        ],
        landmarkCase: 'Cabinet Resolution 1950 & Administrative Reforms Commissions',
        examTrap: 'CHECK CONSTITUTIONAL STATUS: Was Planning Commission OR National Development Council (NDC) ever constitutional or statutory? NEITHER — purely Executive Cabinet Resolutions!'
      , colorKey: 'rose'
      },
      {
        id: 'na-fc-overlap',
        badge: 'PRE-2015 FRICTION',
        title: 'Plan vs Non-Plan Expenditure Distortion',
        subtitle: 'Art 280 Handled Non-Plan Only; PC Handled Plan Grants',
        tag: 'Ended 2017 Budget Merger!',
        side: 'left',
        rule: 'Historically Art 280 Finance Commission reviewed only "Non-Plan" maintenance budgets while Planning Commission controlled glamorous "Plan" grants — distorted fiscal priorities until Plan/Non-Plan division ended 2017–18!',
        callouts: [
          'Finance Ministry absorbed all Art 282 capital/grant allocations after 2015',
          '14th Finance Commission jumped States’ tax share 32% -> 42% (adjusted 41% post-J&K 2019!)',
          'Restored Art 280 Finance Commission as undisputed federal financial arbiter'
        ],
        landmarkCase: '14th Finance Commission (2015) & 2017 Budget Merger',
        examTrap: 'Which year merged "Plan & Non-Plan" expenditure alongside Rail Budget merger? 2017–18 Union Budget!'
      , colorKey: 'sky'
      },
      {
        id: 'na-niti',
        badge: 'JAN 1, 2015 · NITI AAYOG',
        title: 'National Institution for Transforming India (Think Tank)',
        subtitle: 'Zero Fund Power • Team India + Competitive Federalism',
        tag: 'PM Chair + Governing Council',
        side: 'right',
        rule: 'Established Jan 1, 2015 by Cabinet Resolution as a bottom-up policy Think Tank promoting Cooperative Federalism ("Team India") & Competitive Federalism (SDG Index, Aspirational Districts, Health/Innovation Indices).',
        callouts: [
          'Governing Council: PM (Chair) + All State CMs + Assembly UT CMs + LG of other UTs! (No more top-down NDC separation!)',
          'Regional Councils formed for specific multi-state crises/issues chaired by PM or Vice-Chair',
          'ZERO power to allocate Central funds/grants to Ministries or States!'
        ],
        landmarkCase: 'Union Cabinet Resolution (Jan 1, 2015)',
        examTrap: 'MOST TESTED COMPARISON FEATURE: NITI Aayog CANNOT allocate funds or approve State budgets — unlike the old Planning Commission!'
      , colorKey: 'emerald'
      },
      {
        id: 'na-279a-coop',
        badge: 'CO-OP TRINITY',
        title: 'Modern Federal Institutions: GST Council + ISC + NITI',
        subtitle: 'Art 279A Constitutional Consensus vs NITI Knowledge Indices',
        tag: 'Competitive Indices',
        side: 'right',
        rule: 'Pairs NITI Aayog policy benchmarks with Constitutional GST Council (Art 279A: 1/3 Union + 2/3 States voting, Mohit Minerals 2022 persuasive consensus) & Finance Commission (Art 280).',
        callouts: [
          'Aspirational Districts / Blocks Programme measures real-time outcome KPIs',
          'Atal Innovation Mission & Digital Public Infrastructure blueprints',
          'Ex-Officio Union Ministers on NITI: Max 4 nominated by PM (+ Special Invitees)'
        ],
        landmarkCase: 'Union of India v. Mohit Minerals (2022 Cooperative Federalism)',
        examTrap: 'Check Governing Council parity: Does NITI Aayog Vice-Chairperson hold Cabinet Minister rank? YES (appointed by PM, equivalent to Cabinet Minister)!'
      , colorKey: 'violet'
      }
    ]
  },
  {
    id: 'border-treaty-implementation-253',
    title: 'International Treaties, Boundary Demarcation & Territory Cession (Art 253 vs 368)',
    category: 'Sovereignty & International Law',
    track: 'Federalism & Local Gov',
    articles: 'Articles 1, 3, 51, 73, 253 & 368',
    summary: 'Decision flowchart tracing how India’s Executive enters treaties (Art 73), when domestic statute is needed (Art 253), when Executive settlement suffices (Maganbhai 1969), and when Art 368 is compulsory (Berubari 1960 & 100th Amd 2015).',
    topology: 'flowchart',
    rootLabel: 'FOREIGN TREATY ROUTING',
    rootSub: 'Executive Pact (Art 73) -> Domestic Check',
    edgeFlowTag: 'BERUBARI vs MAGANBHAI',
    footerRule: 'GOLDEN BOUNDARY DISTINCTION: Settling a pre-existing disputed border (no Indian territory ceded) requires ONLY EXECUTIVE ORDER (Maganbhai 1969); Ceding Indian territory to a foreign nation REQUIRES ART 368 AMENDMENT (Berubari 1960 & 100th Amd 2015)!',
    nodes: [
      {
        id: 'bt-art73',
        badge: 'STEP 1 · ART 73 EXECUTIVE',
        title: 'President Signs Treaties Without Prior Parliament Vote',
        subtitle: 'Executive Competence Mirrors Union List Entry 14',
        tag: 'Differs From US Senate!',
        edgeLabel: 'Treaty Signed',
        rule: 'Under Art 73 read with Entry 14 List I, Executive (Cabinet acting in President’s name) negotiates & ratifies international treaties WITHOUT prior Congressional/Senate approval (unlike US Constitution Art II!).',
        callouts: [
          'Covers defence treaties, extradition agreements, trade pacts (WTO/FTAs) & climate accords',
          'Parliament can pass law regulating treaty power, yet has NEVER fettered Art 73 treaty signing',
          'Art 51(c) inspires respect for international treaty obligations'
        ],
        landmarkCase: 'Union of India v. Azadi Bachao Andolan (2003 — DTAA Validity)',
        examTrap: 'CONTRAST INDIA vs USA: US treaties need 2/3rd Senate advice & consent; Indian Executive signs treaties directly under Art 73!'
      , colorKey: 'sky'
      },
      {
        id: 'bt-art253',
        badge: 'STEP 2 · ART 253 DUALISM',
        title: 'Rights/Tax Impact Needs Art 253 Parliamentary Act',
        subtitle: 'Dualist Rule: Treaty Doesn’t Automatically Alter Citizen Rights',
        tag: 'Jolly George Rule',
        edgeLabel: 'If Rights/Law Hit',
        rule: 'If a treaty curtails citizen rights, modifies Indian statutory law, or spends public money from CFI, Parliament MUST pass a statute under Art 253 (overrides State List II automatically!).',
        callouts: [
          'Vishaka (1997): Only non-conflicting UN covenants (CEDAW) read as harmonious aid when domestic law is silent',
          'If Indian Parliamentary Act expressly contradicts a Treaty -> Domestic Statute PREVAILS inside Indian courts (Gramophone Co 1984)!',
          'Special Tax Exception: Income Tax Act Sec 90 pre-delegated DTAA treaties so Cabinet can notify them without fresh Act!'
        ],
        landmarkCase: 'Jolly George Varghese (1980) & Gramophone Co. v. Birendra Bahadur (1984)',
        examTrap: 'If a signed UN Treaty directly conflicts with an existing Indian Act of Parliament, WHICH prevails inside Indian courts? THE INDIAN ACT OF PARLIAMENT!'
      , colorKey: 'violet'
      },
      {
        id: 'bt-magan',
        badge: 'STEP 3A · MAGANBHAI (1969)',
        title: 'Fixing Disputed Border Lines = Executive Order Only!',
        subtitle: 'Rann of Kutch Tribunal Settlement Needed NO Amendment/Statute',
        tag: 'No Cession Involved',
        edgeLabel: 'Disputed Line',
        rule: 'In Maganbhai Ishwarbhai Patel (1969), SC upheld India implementing International Tribunal Rann of Kutch Award by simple Executive action because ascertaining an ambiguous boundary does NOT constitute ceding existing Indian territory!',
        callouts: [
          'No Art 368 Amendment & no Art 3 statute required where sovereign territory wasn’t unambiguously India’s',
          'Distinguished sharply from Berubari where settled West Bengal territory passed to East Pakistan',
          'Executive authority resolves vague demarcation lines smoothly'
        ],
        landmarkCase: 'Maganbhai Ishwarbhai Patel v. Union of India (1969 5-Judge)',
        examTrap: 'CHECK THIS PAIR: Settlement of ambiguous border dispute = EXECUTIVE ACTION ONLY (Maganbhai 1969); Actual cession of Indian sovereign land = ART 368 AMENDMENT (Berubari 1960)!'
      , colorKey: 'emerald'
      },
      {
        id: 'bt-berubari',
        badge: 'STEP 3B · BERUBARI (1960)',
        title: 'Ceding Indian Territory to Foreign Nation = Art 368 Only!',
        subtitle: '9th Amd (1960) & 100th Amd (2015 Bangladesh Enclaves)',
        tag: 'Article 3 Insufficient!',
        edgeLabel: 'Cession -> 368',
        rule: 'Article 3 authorizes internal adjustment/diminishing of State area within India ONLY — NOT surrendering national soil to another country! Cession requires a Constitutional Amendment amending Schedule 1 under Article 368.',
        callouts: [
          'Berubari Reference (1960) -> Parliament passed 9th Amendment Act 1960',
          'India-Bangladesh Land Boundary Agreement (111 enclaves to BD, 51 to India) -> Enacted via 100th Amendment Act 2015!',
          'Note: Acquiring NEW external foreign land falls under Art 2 / Art 368 & 1st Schedule'
        ],
        landmarkCase: 'In re Berubari Union (1960) & 100th Amendment Act 2015',
        examTrap: 'Art 3 can diminish a State to create another Indian State/UT by Simple Majority; diminishing INDIA’S sovereign territory to a foreign state demands ARTICLE 368!'
      , colorKey: 'rose'
      }
    ]
  }
];
