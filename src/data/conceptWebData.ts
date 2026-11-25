export interface ConceptEdge {
  from: string;
  to: string;
  relation: string; // e.g. 'Interprets', 'Established', 'Overruled', 'Inserted', 'Enforces', 'Harmonizes', 'Bridges', 'Struck Down'
  description?: string;
}

export interface ConceptNode {
  id: string;
  label: string;
  category: 'article' | 'case' | 'doctrine' | 'amendment';
  cluster: 'preamble' | 'liberty' | 'equality' | 'dpsp' | 'basic_structure' | 'federalism' | 'judiciary' | 'remedies';
  x: number;
  y: number;
  articleAnchor?: string;
  summary: string;
  keyHoldings: string[];
  connections: string[];
}

export const CONCEPT_NODES: ConceptNode[] = [
  // --- PREAMBLE CLUSTER ---
  {
    id: 'preamble',
    label: 'The Preamble',
    category: 'doctrine',
    cluster: 'preamble',
    x: 515,
    y: 92,
    articleAnchor: 'Key to Constitution • Enacted 26 Nov 1949',
    summary: 'The solemn resolution of the Sovereign, Socialist, Secular, Democratic Republic securing Justice, Liberty, Equality, and Fraternity.',
    keyHoldings: [
      'Held to be an integral part of the Constitution in Kesavananda Bharati (1973)',
      'Not a source of substantive power or limitation on legislature, but aids interpretation',
      'Can be amended under Art 368 without destroying Basic Structure'
    ],
    connections: ['objective-resolution', 'kesavananda', 'berubari', 'amd-42', 'art-14', 'art-21']
  },
  {
    id: 'objective-resolution',
    label: 'Objective Resolution',
    category: 'doctrine',
    cluster: 'preamble',
    x: 375,
    y: 84,
    articleAnchor: 'Moved by Pt. Nehru on 13 Dec 1946',
    summary: 'The foundational constitutional manifesto setting out the guiding philosophy, federal structure, and social ideals of free India.',
    keyHoldings: [
      'Adopted unanimously by the Constituent Assembly on 22 Jan 1947',
      'Direct structural blueprint for the text of the Preamble'
    ],
    connections: ['preamble']
  },
  {
    id: 'berubari',
    label: 'Berubari Union (1960)',
    category: 'case',
    cluster: 'preamble',
    x: 440,
    y: 168,
    articleAnchor: '8-Judge Constitution Bench (Reference)',
    summary: 'Erroneously held that the Preamble is NOT a part of the Constitution, though it is a key to open the mind of the makers.',
    keyHoldings: [
      'Overruled by Kesavananda Bharati (1973)',
      'Held cession of territory to foreign state requires Art 368 amendment'
    ],
    connections: ['preamble', 'kesavananda']
  },
  {
    id: 'amd-42',
    label: '42nd Amendment (1976)',
    category: 'amendment',
    cluster: 'preamble',
    x: 665,
    y: 84,
    articleAnchor: 'The "Mini-Constitution"',
    summary: 'Inserted the words "Socialist", "Secular", and "Integrity" into the Preamble, inserted Part IVA (Fundamental Duties), and sought unlimited amending power.',
    keyHoldings: [
      'Sections 4 and 55 struck down in Minerva Mills (1980)',
      'Secularism and Socialism affirmed as basic features in Bommai and Excel Wear'
    ],
    connections: ['preamble', 'art-368', 'minerva-mills']
  },

  // --- LIBERTY & GOLDEN TRIANGLE CLUSTER ---
  {
    id: 'art-21',
    label: 'Article 21',
    category: 'article',
    cluster: 'liberty',
    x: 535,
    y: 355,
    articleAnchor: 'Part III • Life & Personal Liberty',
    summary: 'Protection of life and personal liberty. No person shall be deprived of his life or personal liberty except according to procedure established by law.',
    keyHoldings: [
      'Expanded into Substantive Due Process in Maneka Gandhi (1978)',
      'Right to Privacy recognized as inalienable fundamental right in Puttaswamy (2017)',
      'Right to clean environment, livelihood (Olga Tellis), and medical care'
    ],
    connections: ['golden-triangle', 'maneka', 'gopalan', 'puttaswamy', 'privacy', 'art-21a', 'art-14', 'art-19', 'art-32', 'mc-mehta', 'preamble', 'substantive-due-process', 'proportionality', 'navtej-johar', 'constitutional-morality', 'art-37', 'art-142']
  },
  {
    id: 'art-14',
    label: 'Article 14',
    category: 'article',
    cluster: 'equality',
    x: 340,
    y: 295,
    articleAnchor: 'Part III • Equality Before Law',
    summary: 'Equality before law and equal protection of the laws within the territory of India.',
    keyHoldings: [
      'Two-Prong Reasonable Classification Test (Anwar Ali Sarkar)',
      'Antithesis of arbitrariness (E.P. Royappa)',
      'Doctrine of Manifest Arbitrariness (Shayara Bano)'
    ],
    connections: ['golden-triangle', 'art-21', 'art-15', 'art-16', 'shayara-bano', 'manifest-arbitrariness', 'navtej-johar', 'constitutional-morality', 'preamble', 'basic-structure']
  },
  {
    id: 'art-19',
    label: 'Article 19',
    category: 'article',
    cluster: 'liberty',
    x: 680,
    y: 275,
    articleAnchor: 'Part III • 6 Democratic Freedoms',
    summary: 'Protection of 6 fundamental freedoms: speech & expression, assembly, association, movement, residence, and profession.',
    keyHoldings: [
      'Interpenetrates with Articles 14 & 21 (Golden Triangle)',
      'Proportionality test applies to reasonable restrictions under 19(2)–(6)',
      'Internet freedom protected in Anuradha Bhasin (2020)'
    ],
    connections: ['golden-triangle', 'art-21', 'maneka', 'proportionality', 'art-14']
  },
  {
    id: 'golden-triangle',
    label: 'Golden Triangle',
    category: 'doctrine',
    cluster: 'liberty',
    x: 535,
    y: 232,
    articleAnchor: 'Trinity of Human Rights',
    summary: 'Articles 14, 19, and 21 do not operate in mutually exclusive silos; they form a single organic trinity of fundamental rights.',
    keyHoldings: [
      'Overruled Gopalan exclusivity doctrine in Maneka Gandhi (1978)',
      'Any law depriving liberty must be non-arbitrary (Art 14) and reasonable (Art 19)'
    ],
    connections: ['art-14', 'art-19', 'art-21', 'maneka']
  },
  {
    id: 'gopalan',
    label: 'A.K. Gopalan (1950)',
    category: 'case',
    cluster: 'liberty',
    x: 415,
    y: 420,
    articleAnchor: '6-Judge Constitution Bench [OVERRULED]',
    summary: 'Narrow textualist ruling holding "procedure established by law" means purely enacted positive state law, not natural justice or due process.',
    keyHoldings: [
      'Held Articles 19 and 21 are mutually exclusive compartments',
      'Overruled decisively by 7 judges in Maneka Gandhi (1978)'
    ],
    connections: ['art-21', 'maneka']
  },
  {
    id: 'maneka',
    label: 'Maneka Gandhi (1978)',
    category: 'case',
    cluster: 'liberty',
    x: 535,
    y: 465,
    articleAnchor: '7-Judge Constitution Bench',
    summary: 'Monumental ruling that procedure depriving liberty must satisfy the test of being "just, fair, and reasonable", establishing Indian Substantive Due Process.',
    keyHoldings: [
      'Overruled A.K. Gopalan textualism',
      'Infused natural justice (audi alteram partem) into Article 21',
      'Birthing of the Golden Triangle'
    ],
    connections: ['art-21', 'gopalan', 'golden-triangle', 'substantive-due-process', 'art-19', 'puttaswamy']
  },
  {
    id: 'substantive-due-process',
    label: 'Substantive Due Process',
    category: 'doctrine',
    cluster: 'liberty',
    x: 395,
    y: 505,
    articleAnchor: 'Substantive Fairness Standard',
    summary: 'Courts scrutinize not merely the procedural enactment of a law, but its intrinsic substantive fairness, justice, and proportionality.',
    keyHoldings: [
      'Breathed into Art 21 despite Constituent Assembly deletion of American phrase',
      'Shield against arbitrary executive action and disproportionate punishments'
    ],
    connections: ['maneka', 'art-21', 'proportionality']
  },
  {
    id: 'puttaswamy',
    label: 'Puttaswamy (2017)',
    category: 'case',
    cluster: 'liberty',
    x: 665,
    y: 435,
    articleAnchor: '9-Judge Unanimous Bench',
    summary: 'Unanimously declared the Right to Privacy an intrinsic fundamental right under Article 21 and Part III.',
    keyHoldings: [
      'Overruled M.P. Sharma (1954) & Kharak Singh (1962)',
      'Formulated 4-prong proportionality standard for state intrusions',
      'Affirmed informational self-determination, spatial privacy, and bodily autonomy'
    ],
    connections: ['art-21', 'maneka', 'privacy', 'proportionality']
  },
  {
    id: 'privacy',
    label: 'Right to Privacy',
    category: 'doctrine',
    cluster: 'liberty',
    x: 710,
    y: 520,
    articleAnchor: 'Inalienable Human Dignity',
    summary: 'The constitutional guarantee of personal autonomy, bodily integrity, spatial sanctuary, and informational self-determination.',
    keyHoldings: [
      'Protected under Article 21 as essential core of human dignity',
      'Explicitly overruled ADM Jabalpur (1976) majority ruling'
    ],
    connections: ['puttaswamy', 'art-21', 'proportionality']
  },
  {
    id: 'proportionality',
    label: 'Proportionality Test',
    category: 'doctrine',
    cluster: 'liberty',
    x: 575,
    y: 555,
    articleAnchor: '4-Prong Standard',
    summary: '1. Legality (Statutory sanction) 2. Legitimate State Aim 3. Suitability / Rational Nexus 4. Necessity & Balancing.',
    keyHoldings: [
      'Standard test for evaluating state infringement of fundamental rights',
      'Adopted globally across modern democratic constitutional courts'
    ],
    connections: ['puttaswamy', 'substantive-due-process', 'privacy', 'art-21', 'art-19']
  },
  {
    id: 'art-21a',
    label: 'Article 21A',
    category: 'article',
    cluster: 'liberty',
    x: 680,
    y: 175,
    articleAnchor: 'Right to Free & Compulsory Education',
    summary: 'State shall provide free and compulsory education to all children aged 6 to 14 years.',
    keyHoldings: [
      'Inserted by 86th Constitutional Amendment Act, 2002',
      'Substantive fulfillment of Directive Principle Article 45'
    ],
    connections: ['art-21', 'amd-86']
  },
  {
    id: 'amd-86',
    label: '86th Amendment (2002)',
    category: 'amendment',
    cluster: 'liberty',
    x: 795,
    y: 175,
    articleAnchor: 'Education Rights Amendment',
    summary: 'Historic amendment inserting Article 21A, substituting DPSP Article 45, and adding Fundamental Duty 51A(k).',
    keyHoldings: [
      'Elevated elementary education to justiciable Fundamental Right',
      'Tripartite synergy between Part III, IV, and IVA'
    ],
    connections: ['art-21a']
  },
  {
    id: 'mc-mehta',
    label: 'M.C. Mehta (1987)',
    category: 'case',
    cluster: 'liberty',
    x: 460,
    y: 585,
    articleAnchor: '5-Judge Bench (Oleum Gas Leak)',
    summary: 'Laid down the Doctrine of Absolute Liability for hazardous industrial activities, freeing Indian tort law from Rylands v Fletcher exceptions.',
    keyHoldings: [
      'Linked right to healthy environment directly to Article 21',
      'Empowered Supreme Court under Article 32 to forge new remedial tools'
    ],
    connections: ['art-21', 'art-32']
  },

  // --- EQUALITY & SOCIAL JUSTICE CLUSTER ---
  {
    id: 'art-15',
    label: 'Article 15',
    category: 'article',
    cluster: 'equality',
    x: 225,
    y: 295,
    articleAnchor: 'Prohibition of Discrimination',
    summary: 'Prohibition of discrimination on grounds only of religion, race, caste, sex, or place of birth.',
    keyHoldings: [
      'Enables special provisions for women, children (15(3)), and backward classes (15(4), 15(5))',
      '103rd Amd added 15(6) enabling 10% EWS quota'
    ],
    connections: ['art-14', 'art-16', 'indra-sawhney', 'navtej-johar', 'amd-103']
  },
  {
    id: 'art-16',
    label: 'Article 16',
    category: 'article',
    cluster: 'equality',
    x: 115,
    y: 375,
    articleAnchor: 'Public Employment Equality',
    summary: 'Equality of opportunity in public employment. Prohibits discrimination on 7 specified grounds.',
    keyHoldings: [
      'Clauses 16(4), 16(4A), 16(4B) are enabling provisions for affirmative action',
      'Indra Sawhney settled creamy layer exclusion and 50% ceiling'
    ],
    connections: ['art-14', 'art-15', 'indra-sawhney', 'ceiling-50', 'creamy-layer', 'amd-103']
  },
  {
    id: 'indra-sawhney',
    label: 'Indra Sawhney (1992)',
    category: 'case',
    cluster: 'equality',
    x: 115,
    y: 485,
    articleAnchor: '9-Judge Constitution Bench (Mandal Case)',
    summary: 'Upholding 27% OBC quota while instituting creamy layer exclusion and 50% reservation ceiling.',
    keyHoldings: [
      'Affirmed backwardness can be identified primarily by caste',
      'Mandated 50% ceiling rule except in extraordinary remote areas',
      'Excluded creamy layer from affirmative action benefits'
    ],
    connections: ['art-15', 'art-16', 'ceiling-50', 'creamy-layer', 'janhit-abhiyan']
  },
  {
    id: 'ceiling-50',
    label: '50% Ceiling Rule',
    category: 'doctrine',
    cluster: 'equality',
    x: 110,
    y: 600,
    articleAnchor: 'Reservation Balance Standard',
    summary: 'The constitutional balancing rule preventing affirmative action from swallowing the general rule of merit.',
    keyHoldings: [
      'Laid down in Balaji (1963) and reaffirmed in Indra Sawhney (1992)',
      'Janhit Abhiyan (2022) held 10% EWS quota does not breach 50% cap because 50% applies to SEBC/OBC/SC/ST'
    ],
    connections: ['indra-sawhney', 'art-16', 'janhit-abhiyan']
  },
  {
    id: 'creamy-layer',
    label: 'Creamy Layer Rule',
    category: 'doctrine',
    cluster: 'equality',
    x: 240,
    y: 450,
    articleAnchor: 'Economic Exclusion Standard',
    summary: 'Exclusion of socially and economically advanced members among backward classes from reservation benefits.',
    keyHoldings: [
      'Rooted in equality under Article 14: equals cannot be treated unequally',
      'Extended to SC/ST promotions in Jarnail Singh (2018)'
    ],
    connections: ['indra-sawhney', 'art-16']
  },
  {
    id: 'amd-103',
    label: '103rd Amendment (2019)',
    category: 'amendment',
    cluster: 'equality',
    x: 105,
    y: 180,
    articleAnchor: '10% EWS Reservation',
    summary: 'Inserted Articles 15(6) and 16(6) providing up to 10% reservation for Economically Weaker Sections (EWS) of citizens.',
    keyHoldings: [
      'Upheld 3:2 by 5-Judge Bench in Janhit Abhiyan (2022)',
      'Affirmed economic criteria alone can form a valid basis for classification'
    ],
    connections: ['art-15', 'art-16', 'janhit-abhiyan']
  },
  {
    id: 'janhit-abhiyan',
    label: 'Janhit Abhiyan (2022)',
    category: 'case',
    cluster: 'equality',
    x: 105,
    y: 275,
    articleAnchor: '5-Judge Constitution Bench (3:2 Majority)',
    summary: 'Upheld the constitutional validity of the 103rd Amendment (EWS Quota). Held economic criteria can be a basis of affirmative action.',
    keyHoldings: [
      'Held EWS quota does not violate Basic Structure',
      'Held 50% ceiling in Indra Sawhney is not inflexible for economic categories'
    ],
    connections: ['amd-103', 'indra-sawhney', 'ceiling-50']
  },
  {
    id: 'shayara-bano',
    label: 'Shayara Bano (2017)',
    category: 'case',
    cluster: 'equality',
    x: 235,
    y: 178,
    articleAnchor: '5-Judge Constitution Bench (3:2 Majority)',
    summary: 'Struck down instant triple talaq (talaq-e-biddat) as unconstitutional for violating Article 14.',
    keyHoldings: [
      'Articulated Doctrine of Manifest Arbitrariness under Article 14',
      'Settled that primary plenary legislation can be reviewed for arbitrariness'
    ],
    connections: ['art-14', 'manifest-arbitrariness']
  },
  {
    id: 'manifest-arbitrariness',
    label: 'Manifest Arbitrariness',
    category: 'doctrine',
    cluster: 'equality',
    x: 330,
    y: 192,
    articleAnchor: 'Substantive Article 14 Scrutiny',
    summary: 'Legislation or executive action that is irrational, capricious, lacking determining principle, or disproportionate violates Article 14.',
    keyHoldings: [
      'Codified by Nariman J. in Shayara Bano (2017)',
      'Applied to strike down Section 377 IPC in Navtej Johar (2018)'
    ],
    connections: ['shayara-bano', 'art-14', 'navtej-johar']
  },
  {
    id: 'navtej-johar',
    label: 'Navtej Johar (2018)',
    category: 'case',
    cluster: 'equality',
    x: 255,
    y: 82,
    articleAnchor: '5-Judge Constitution Bench',
    summary: 'Decriminalized consensual adult same-sex intimacy by reading down Section 377 IPC under Articles 14, 15, 19, and 21.',
    keyHoldings: [
      'Championed Transformative Constitutionalism & Constitutional Morality',
      'Held sexual orientation is a prohibited ground of discrimination under Art 15'
    ],
    connections: ['art-14', 'art-15', 'art-21', 'manifest-arbitrariness', 'constitutional-morality']
  },
  {
    id: 'constitutional-morality',
    label: 'Constitutional Morality',
    category: 'doctrine',
    cluster: 'equality',
    x: 115,
    y: 82,
    articleAnchor: 'Counter-Majoritarian Ideal',
    summary: 'The supreme commitment to constitutional values (equality, liberty, dignity) which triumphs over majoritarian or societal morality.',
    keyHoldings: [
      'Derived from Dr. B.R. Ambedkar\'s Constituent Assembly addresses',
      'Cornerstone of Sabarimala, Navtej Johar, and NCT Delhi rulings'
    ],
    connections: ['navtej-johar', 'art-14', 'art-21']
  },

  // --- DPSPS & CHARIOT HARMONY CLUSTER ---
  {
    id: 'art-37',
    label: 'Article 37',
    category: 'article',
    cluster: 'dpsp',
    x: 625,
    y: 650,
    articleAnchor: 'Part IV • Fundamental in Governance',
    summary: 'DPSPs shall not be enforceable by any court, but the principles therein are nevertheless fundamental in the governance of the country.',
    keyHoldings: [
      'Directive Principles guide the interpretation of Fundamental Rights',
      'State has duty to apply these principles in making laws'
    ],
    connections: ['art-21', 'chariot-harmony']
  },
  {
    id: 'chariot-harmony',
    label: 'Chariot Wheels Doctrine',
    category: 'doctrine',
    cluster: 'dpsp',
    x: 785,
    y: 648,
    articleAnchor: 'Part III & Part IV Harmony',
    summary: 'Fundamental Rights and Directive Principles are two wheels of a chariot. To give absolute primacy to one over the other destroys constitutional balance.',
    keyHoldings: [
      'Established in Minerva Mills (1980) striking down blanket Art 31C primacy',
      'Harmonious construction between individual liberty and social goals'
    ],
    connections: ['minerva-mills', 'art-37', 'basic-structure']
  },

  // --- BASIC STRUCTURE & AMENDING POWER CLUSTER ---
  {
    id: 'art-368',
    label: 'Article 368',
    category: 'article',
    cluster: 'basic_structure',
    x: 905,
    y: 285,
    articleAnchor: 'Part XX • Amending Power',
    summary: 'Parliament\'s constituent power to amend by way of addition, variation or repeal any provision of this Constitution.',
    keyHoldings: [
      'Requires Special Majority (Type 2: 2/3 Present & Voting + Absolute Majority)',
      'Federal provisions require 50% State Legislature ratification',
      'Subject to implied constitutional limitation: The Basic Structure'
    ],
    connections: ['kesavananda', 'basic-structure', 'shankari-prasad', 'golak-nath', 'minerva-mills', 'amd-42']
  },
  {
    id: 'shankari-prasad',
    label: 'Shankari Prasad (1951)',
    category: 'case',
    cluster: 'basic_structure',
    x: 1025,
    y: 265,
    articleAnchor: '5-Judge Bench [OVERRULED]',
    summary: 'Held constituent power under Art 368 is distinct from ordinary law under Art 13(2); Parliament can amend any Part III right without limit.',
    keyHoldings: [
      'Overruled in Golak Nath (1967)',
      'Absolute Parliamentary sovereignty period'
    ],
    connections: ['art-368', 'golak-nath']
  },
  {
    id: 'golak-nath',
    label: 'Golak Nath (1967)',
    category: 'case',
    cluster: 'basic_structure',
    x: 1020,
    y: 395,
    articleAnchor: '11-Judge Bench (6:5) [OVERRULED]',
    summary: 'Held constitutional amendments are "law" under Art 13(2) and Parliament CANNOT abridge Fundamental Rights.',
    keyHoldings: [
      'Overruled Shankari Prasad & Sajjan Singh',
      'Introduced Doctrine of Prospective Overruling',
      'Overruled by Kesavananda Bharati in 1973'
    ],
    connections: ['art-368', 'kesavananda', 'shankari-prasad']
  },
  {
    id: 'kesavananda',
    label: 'Kesavananda (1973)',
    category: 'case',
    cluster: 'basic_structure',
    x: 895,
    y: 455,
    articleAnchor: '13-Judge Special Bench (7:6 Majority)',
    summary: 'The greatest ruling in Indian history. Overruled Golak Nath, affirmed amending power under Art 368, but held Parliament cannot alter the Basic Structure.',
    keyHoldings: [
      'Overruled Golak Nath (1967) and Berubari Union (1960)',
      'Upheld 24th Amendment confirming constituent amending power',
      'Created eternal constitutional guardrails preserving democratic republic'
    ],
    connections: ['art-368', 'basic-structure', 'golak-nath', 'minerva-mills', 'ir-coelho', 'preamble', 'berubari']
  },
  {
    id: 'basic-structure',
    label: 'Basic Structure Doctrine',
    category: 'doctrine',
    cluster: 'basic_structure',
    x: 810,
    y: 355,
    articleAnchor: 'Implied Constitutional Limitations',
    summary: 'Implied limitations on amending power preserving core pillars: Supremacy of Constitution, Democracy, Secularism, Federalism, Separation of Powers, Judicial Review.',
    keyHoldings: [
      'Cannot be repealed or damaged even by unanimous Parliamentary vote',
      'Applied in Indira Gandhi (1975), Minerva Mills (1980), Bommai (1994), and NJAC (2015)'
    ],
    connections: ['kesavananda', 'art-368', 'minerva-mills', 'sr-bommai', 'ir-coelho', 'art-32', 'art-14', 'chariot-harmony']
  },
  {
    id: 'minerva-mills',
    label: 'Minerva Mills (1980)',
    category: 'case',
    cluster: 'basic_structure',
    x: 985,
    y: 545,
    articleAnchor: '5-Judge Constitution Bench',
    summary: 'Struck down Clauses (4) and (5) of Article 368 which sought to grant unlimited amending power and exclude judicial review.',
    keyHoldings: [
      'Held that the limited amending power of Parliament is itself a Basic Feature',
      'Part III and Part IV are like two wheels of a chariot'
    ],
    connections: ['basic-structure', 'art-368', 'amd-42', 'kesavananda', 'chariot-harmony']
  },
  {
    id: 'ir-coelho',
    label: 'I.R. Coelho (2007)',
    category: 'case',
    cluster: 'basic_structure',
    x: 845,
    y: 555,
    articleAnchor: '9-Judge Unanimous Bench',
    summary: 'Settled that all laws placed in the Ninth Schedule after April 24, 1973 (Kesavananda date) are subject to judicial review against the Basic Structure.',
    keyHoldings: [
      'Ninth Schedule cannot be an immunity vacuum',
      'If a 9th Schedule law damages basic structure via Arts 14, 19, or 21, it shall be struck down'
    ],
    connections: ['basic-structure', 'kesavananda']
  },

  // --- FEDERALISM, EMERGENCY & JUDICIARY CLUSTER ---
  {
    id: 'art-356',
    label: 'Article 356',
    category: 'article',
    cluster: 'federalism',
    x: 960,
    y: 178,
    articleAnchor: 'President\'s Rule in States',
    summary: 'Proclamation on failure of constitutional machinery in States. Imposed on Governor\'s report or otherwise.',
    keyHoldings: [
      'Ceases after 2 months unless approved by Parliament',
      'Floor test on floor of House is sole constitutional metric (S.R. Bommai)',
      'Assembly cannot be dissolved until Parliament approves'
    ],
    connections: ['sr-bommai', 'floor-test']
  },
  {
    id: 'sr-bommai',
    label: 'S.R. Bommai (1994)',
    category: 'case',
    cluster: 'federalism',
    x: 970,
    y: 78,
    articleAnchor: '9-Judge Constitution Bench',
    summary: 'Monumental federalism ruling curbing the political misuse of Article 356 and establishing judicial review of Presidential proclamations.',
    keyHoldings: [
      'Federalism and Secularism are Basic Features of the Constitution',
      'Floor test is the ONLY legitimate test of a ministry\'s majority',
      'Courts have power to restore a dismissed ministry and resurrect dissolved assembly'
    ],
    connections: ['art-356', 'floor-test', 'basic-structure']
  },
  {
    id: 'floor-test',
    label: 'Floor Test Mandate',
    category: 'doctrine',
    cluster: 'federalism',
    x: 825,
    y: 72,
    articleAnchor: 'Democratic Majority Verification',
    summary: 'The democratic requirement that majority support of a government must be demonstrated strictly on the floor of the House, not through Raj Bhavan subjective memos.',
    keyHoldings: [
      'Reiterated in Rameshwar Prasad (2006) and Maharashtra political crisis (2023)',
      'Protects elected governments against central executive usurpation'
    ],
    connections: ['sr-bommai', 'art-356']
  },
  {
    id: 'art-32',
    label: 'Article 32',
    category: 'article',
    cluster: 'remedies',
    x: 345,
    y: 555,
    articleAnchor: 'Part III • Constitutional Remedies',
    summary: 'Right to move Supreme Court for enforcement of Fundamental Rights. Dr. Ambedkar called it the Heart and Soul of the Constitution.',
    keyHoldings: [
      'Guaranteed as a Fundamental Right itself, unlike Article 226',
      'Empowered with 5 prerogative writs',
      'Declared part of Basic Structure in L. Chandra Kumar (1997)'
    ],
    connections: ['art-226', 'prerogative-writs', 'art-21', 'basic-structure', 'mc-mehta', 'art-142']
  },
  {
    id: 'art-226',
    label: 'Article 226',
    category: 'article',
    cluster: 'remedies',
    x: 225,
    y: 648,
    articleAnchor: 'High Court Writ Jurisdiction',
    summary: 'High Courts writ jurisdiction for enforcement of Fundamental Rights AND "for any other purpose" (wider than Art 32).',
    keyHoldings: [
      'High Courts have territorial jurisdiction across the State or where cause of action arises (Art 226(2))',
      'Extraordinary discretionary remedy'
    ],
    connections: ['art-32', 'prerogative-writs']
  },
  {
    id: 'prerogative-writs',
    label: '5 Prerogative Writs',
    category: 'doctrine',
    cluster: 'remedies',
    x: 230,
    y: 542,
    articleAnchor: 'Habeas Corpus, Mandamus, Certiorari, Prohibition, Quo Warranto',
    summary: 'Prerogative writs to protect liberty, enforce public duties, restrain excess jurisdiction, and challenge unlawful usurpers of public offices.',
    keyHoldings: [
      'Crown prerogative origin adapted into written constitutional bill of rights',
      'Potent weapon against administrative excess'
    ],
    connections: ['art-32', 'art-226']
  },
  {
    id: 'art-142',
    label: 'Article 142',
    category: 'article',
    cluster: 'judiciary',
    x: 365,
    y: 655,
    articleAnchor: 'Complete Justice Jurisdiction',
    summary: 'Supreme Court in the exercise of its jurisdiction may pass such decree or make such order as is necessary for doing complete justice in any cause or matter.',
    keyHoldings: [
      'Plenary power not limited by ordinary procedural statutes',
      'Cannot be used to override substantive statutory or constitutional provisions (Supreme Court Bar Association)'
    ],
    connections: ['art-32', 'art-21']
  }
];

export const CONCEPT_EDGES: ConceptEdge[] = [
  // Preamble relations
  { from: 'objective-resolution', to: 'preamble', relation: 'Blueprinted', description: 'Objective Resolution was verbatim foundation for Preamble' },
  { from: 'berubari', to: 'preamble', relation: 'Narrowed', description: 'Berubari held Preamble was NOT part of Constitution' },
  { from: 'kesavananda', to: 'berubari', relation: 'Overruled', description: 'Kesavananda overruled Berubari, affirming Preamble IS part of Constitution' },
  { from: 'amd-42', to: 'preamble', relation: 'Amended', description: '42nd Amd added Socialist, Secular, and Integrity' },
  { from: 'amd-42', to: 'art-368', relation: 'Expanded', description: '42nd Amd attempted to remove judicial review over Art 368' },
  { from: 'preamble', to: 'art-14', relation: 'Embodies', description: 'Preamble Equality of status & opportunity manifests in Art 14' },
  { from: 'preamble', to: 'art-21', relation: 'Anchors', description: 'Preamble Liberty of thought, expression & belief anchors Art 21' },
  { from: 'kesavananda', to: 'preamble', relation: 'Elevated', description: 'Held Preamble is integral part & basic structure indicator' },

  // Golden Triangle & Liberty
  { from: 'golden-triangle', to: 'art-14', relation: 'Interpenetrates', description: 'Art 14 non-arbitrariness infuses into Art 21' },
  { from: 'golden-triangle', to: 'art-19', relation: 'Interpenetrates', description: 'Art 19 reasonableness binds Art 21' },
  { from: 'golden-triangle', to: 'art-21', relation: 'Interpenetrates', description: 'Life & personal liberty must be tested against 14 & 19' },
  { from: 'art-14', to: 'art-21', relation: 'Infuses', description: 'Article 14 fairness governs deprivation of Art 21 liberty' },
  { from: 'art-19', to: 'art-21', relation: 'Harmonizes', description: 'Reasonable restrictions test binds Art 21 restrictions' },
  { from: 'art-19', to: 'proportionality', relation: 'Governed by', description: 'Restrictions under 19(2)-(6) face proportionality scrutiny' },
  { from: 'maneka', to: 'golden-triangle', relation: 'Birthed', description: 'Maneka Gandhi formulated the Golden Triangle doctrine' },
  { from: 'maneka', to: 'gopalan', relation: 'Overruled', description: 'Maneka struck down Gopalan textual silos' },
  { from: 'gopalan', to: 'art-21', relation: 'Constricted', description: 'Gopalan read Art 21 narrowly as pure enacted procedure' },
  { from: 'maneka', to: 'art-21', relation: 'Interprets', description: 'Infused natural justice and fair procedure into Art 21' },
  { from: 'maneka', to: 'art-19', relation: 'Coupled', description: 'Linked Art 19 freedoms directly with Art 21 due process' },
  { from: 'maneka', to: 'substantive-due-process', relation: 'Established', description: 'Established Indian substantive due process' },
  { from: 'puttaswamy', to: 'maneka', relation: 'Extended', description: 'Built privacy upon Maneka dignity & due process core' },
  { from: 'substantive-due-process', to: 'art-21', relation: 'Guarantees', description: 'Requires laws affecting liberty to be just, fair & reasonable' },
  { from: 'substantive-due-process', to: 'proportionality', relation: 'Requires', description: 'Fairness requires means-ends rational proportionality' },
  { from: 'puttaswamy', to: 'art-21', relation: 'Interprets', description: 'Recognized Privacy as intrinsic Part III right' },
  { from: 'puttaswamy', to: 'privacy', relation: 'Affirmed', description: 'Overruled M.P. Sharma & Kharak Singh' },
  { from: 'privacy', to: 'art-21', relation: 'Anchored in', description: 'Privacy stems directly from Art 21 dignity & liberty' },
  { from: 'privacy', to: 'proportionality', relation: 'Tested by', description: 'Privacy intrusions must clear 4-prong test' },
  { from: 'puttaswamy', to: 'proportionality', relation: 'Codified', description: 'Adopted 4-prong proportionality standard' },
  { from: 'proportionality', to: 'art-21', relation: 'Standard for', description: 'Scrutinizes state intrusions into personal liberty' },
  { from: 'art-21a', to: 'art-21', relation: 'Derived from', description: 'Education is essential component of dignified life' },
  { from: 'amd-86', to: 'art-21a', relation: 'Inserted', description: '86th Amendment inserted Article 21A' },
  { from: 'mc-mehta', to: 'art-21', relation: 'Expanded', description: 'Right to pollution-free environment under Art 21' },
  { from: 'mc-mehta', to: 'art-32', relation: 'Expanded Writs', description: 'SC crafted compensatory jurisprudence under Art 32' },

  // Equality Cluster
  { from: 'art-15', to: 'art-14', relation: 'Specializes', description: 'Art 15 is specific application of Art 14 equality' },
  { from: 'art-16', to: 'art-14', relation: 'Specializes', description: 'Art 16 is specific equality in public employment' },
  { from: 'art-16', to: 'art-15', relation: 'Parallel', description: 'Twin anti-discrimination & affirmative action clauses' },
  { from: 'indra-sawhney', to: 'art-15', relation: 'Interprets', description: 'Settled backward class classification principles' },
  { from: 'indra-sawhney', to: 'art-16', relation: 'Interprets', description: 'Mandal case settled Art 16(4) affirmative action rules' },
  { from: 'indra-sawhney', to: 'ceiling-50', relation: 'Established', description: 'Imposed 50% reservation ceiling' },
  { from: 'ceiling-50', to: 'art-16', relation: 'Caps', description: 'Balances Art 16(4) quota against Art 16(1) merit equality' },
  { from: 'indra-sawhney', to: 'creamy-layer', relation: 'Established', description: 'Excluded creamy layer from reservations' },
  { from: 'creamy-layer', to: 'art-16', relation: 'Refines', description: 'Ensures forward elites in OBCs do not crowd out truly backward' },
  { from: 'amd-103', to: 'art-15', relation: 'Inserted', description: 'Added 15(6) for EWS' },
  { from: 'amd-103', to: 'art-16', relation: 'Inserted', description: 'Added 16(6) for EWS' },
  { from: 'janhit-abhiyan', to: 'amd-103', relation: 'Upheld', description: 'Upheld 10% EWS quota 3:2' },
  { from: 'janhit-abhiyan', to: 'indra-sawhney', relation: 'Distinguished', description: 'Clarified Indra Sawhney 50% cap is not rigid for EWS' },
  { from: 'janhit-abhiyan', to: 'ceiling-50', relation: 'Harmonized', description: 'Held 50% cap applies only to SEBC/OBC/SC/ST' },
  { from: 'shayara-bano', to: 'art-14', relation: 'Interprets', description: 'Struck down triple talaq under Article 14' },
  { from: 'shayara-bano', to: 'manifest-arbitrariness', relation: 'Articulated', description: 'Codified Manifest Arbitrariness standard' },
  { from: 'manifest-arbitrariness', to: 'art-14', relation: 'Tests', description: 'Irrational laws fail substantive Art 14 equality' },
  { from: 'navtej-johar', to: 'art-14', relation: 'Enforced', description: 'Held Section 377 irrational and discriminatory' },
  { from: 'navtej-johar', to: 'art-15', relation: 'Expanded', description: 'Protected sexual orientation against sex discrimination' },
  { from: 'navtej-johar', to: 'manifest-arbitrariness', relation: 'Applied', description: 'Struck down Section 377 IPC for manifest arbitrariness' },
  { from: 'navtej-johar', to: 'constitutional-morality', relation: 'Affirmed', description: 'Constitutional morality defeats majoritarian prejudice' },
  { from: 'navtej-johar', to: 'art-21', relation: 'Enriched', description: 'Queer dignity and intimate choice protected under Art 21' },
  { from: 'constitutional-morality', to: 'art-14', relation: 'Animates', description: 'Counter-majoritarian equal protection mandate' },
  { from: 'constitutional-morality', to: 'art-21', relation: 'Animates', description: 'Protects minority autonomy against societal hostility' },

  // DPSP & Harmony
  { from: 'art-37', to: 'art-21', relation: 'Guides', description: 'Directive principles inform substantive scope of liberty' },
  { from: 'chariot-harmony', to: 'art-37', relation: 'Harmonizes', description: 'Part III & Part IV are two wheels of chariot' },
  { from: 'chariot-harmony', to: 'basic-structure', relation: 'Core Pillar', description: 'FR-DPSP harmony is an essential basic feature' },
  { from: 'minerva-mills', to: 'chariot-harmony', relation: 'Formulated', description: 'Minerva Mills struck down blanket primacy of DPSPs' },

  // Basic Structure & Amending Power
  { from: 'art-368', to: 'basic-structure', relation: 'Bounded by', description: 'Amending power is limited by Basic Structure' },
  { from: 'art-14', to: 'basic-structure', relation: 'Enters', description: 'Equal protection & rule of law form part of Basic Structure' },
  { from: 'shankari-prasad', to: 'art-368', relation: 'Widened', description: 'Held amendments are not law under Art 13' },
  { from: 'golak-nath', to: 'shankari-prasad', relation: 'Overruled', description: 'Golak Nath held Art 368 cannot touch Part III' },
  { from: 'golak-nath', to: 'art-368', relation: 'Capped', description: 'Deemed Art 368 merely procedural, bars FR curtailment' },
  { from: 'kesavananda', to: 'golak-nath', relation: 'Overruled', description: 'Overruled Golak Nath, created Basic Structure Doctrine' },
  { from: 'kesavananda', to: 'art-368', relation: 'Defined', description: 'Upheld constituent power while preserving basic identity' },
  { from: 'kesavananda', to: 'basic-structure', relation: 'Birthed', description: 'Created Basic Structure Doctrine' },
  { from: 'minerva-mills', to: 'basic-structure', relation: 'Fortified', description: 'Limited amending power is itself basic feature' },
  { from: 'minerva-mills', to: 'art-368', relation: 'Restricted', description: 'Invalidated Clauses (4) and (5) removing judicial review' },
  { from: 'minerva-mills', to: 'kesavananda', relation: 'Applied', description: 'Enforced Kesavananda limits on 42nd Amendment' },
  { from: 'minerva-mills', to: 'amd-42', relation: 'Struck Down', description: 'Struck down clauses (4) and (5) of Article 368' },
  { from: 'ir-coelho', to: 'basic-structure', relation: 'Shielded', description: 'Post-1973 9th Schedule laws subject to basic structure review' },
  { from: 'ir-coelho', to: 'kesavananda', relation: 'Anchored in', description: '24 April 1973 Kesavananda cutoff governs 9th Schedule review' },

  // Federalism, Emergency & Remedies
  { from: 'sr-bommai', to: 'art-356', relation: 'Curbed', description: 'Bommai established judicial review of Art 356' },
  { from: 'sr-bommai', to: 'floor-test', relation: 'Mandated', description: 'Floor test is sole constitutional gauge of majority' },
  { from: 'floor-test', to: 'art-356', relation: 'Guards', description: 'Prevents premature dismissal without House vote' },
  { from: 'sr-bommai', to: 'basic-structure', relation: 'Enriched', description: 'Declared Federalism and Secularism are basic features' },
  { from: 'art-32', to: 'prerogative-writs', relation: 'Enforces', description: 'Art 32 empowers Supreme Court with 5 writs' },
  { from: 'art-226', to: 'prerogative-writs', relation: 'Enforces', description: 'Art 226 empowers High Courts with 5 writs' },
  { from: 'art-32', to: 'art-226', relation: 'Coordinates', description: 'Twin Constitutional writ jurisdictions (Part III vs Wider Scope)' },
  { from: 'art-32', to: 'art-21', relation: 'Remedy for', description: 'Art 32 directly enforces Art 21 violations' },
  { from: 'art-32', to: 'basic-structure', relation: 'Part of', description: 'Judicial review under Art 32 is a basic feature' },
  { from: 'art-142', to: 'art-32', relation: 'Augments', description: 'Power to do complete justice in any cause' },
  { from: 'art-142', to: 'art-21', relation: 'Protects', description: 'Used to remedy fundamental rights gaps equitably' }
];

/**
 * Breadth-First-Search (BFS) Path Finder:
 * Discovers the shortest connective legal bridge between any 2 constitutional concepts.
 */
export function findConstitutionalPath(
  startId: string,
  endId: string
): { pathNodeIds: string[]; pathEdges: ConceptEdge[]; rationale: string } | null {
  if (startId === endId) {
    return { pathNodeIds: [startId], pathEdges: [], rationale: 'Start and target concept are identical.' };
  }

  const queue: string[][] = [[startId]];
  const visited = new Set<string>([startId]);

  // Build adjacency list
  const adj = new Map<string, string[]>();
  CONCEPT_NODES.forEach((n) => adj.set(n.id, []));

  CONCEPT_EDGES.forEach((e) => {
    adj.get(e.from)?.push(e.to);
    adj.get(e.to)?.push(e.from); // undirected traversal
  });

  let shortestPath: string[] | null = null;

  while (queue.length > 0) {
    const currentPath = queue.shift()!;
    const currentNode = currentPath[currentPath.length - 1];

    if (currentNode === endId) {
      shortestPath = currentPath;
      break;
    }

    const neighbors = adj.get(currentNode) || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([...currentPath, neighbor]);
      }
    }
  }

  if (!shortestPath) return null;

  // Retrieve edges for this path
  const pathEdges: ConceptEdge[] = [];
  for (let i = 0; i < shortestPath.length - 1; i++) {
    const u = shortestPath[i];
    const v = shortestPath[i + 1];
    const edge =
      CONCEPT_EDGES.find((e) => (e.from === u && e.to === v) || (e.from === v && e.to === u)) || {
        from: u,
        to: v,
        relation: 'Connected to'
      };
    pathEdges.push(edge);
  }

  const startNode = CONCEPT_NODES.find((n) => n.id === startId);
  const endNode = CONCEPT_NODES.find((n) => n.id === endId);

  const rationale = `Connective Bridge: ${startNode?.label} is linked to ${endNode?.label} across ${shortestPath.length - 1} doctrinal ${
    shortestPath.length - 1 === 1 ? 'leap' : 'leaps'
  } through ${shortestPath
    .map((id) => CONCEPT_NODES.find((n) => n.id === id)?.label)
    .join(' -> ')}.`;

  return { pathNodeIds: shortestPath, pathEdges, rationale };
}
