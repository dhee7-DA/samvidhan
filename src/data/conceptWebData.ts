export interface ConceptNode {
  id: string;
  label: string;
  category: 'article' | 'case' | 'doctrine' | 'amendment';
  cluster: 'liberty' | 'equality' | 'basic_structure' | 'federalism' | 'remedies';
  x: number;
  y: number;
  articleAnchor?: string;
  summary: string;
  keyHoldings: string[];
  connections: string[];
}

export const CONCEPT_NODES: ConceptNode[] = [
  // --- CENTER: LIBERTY & GOLDEN TRIANGLE ---
  {
    id: 'art-21',
    label: 'Article 21',
    category: 'article',
    cluster: 'liberty',
    x: 500,
    y: 320,
    articleAnchor: 'Part III • Fundamental Rights',
    summary: 'Protection of life and personal liberty. No person shall be deprived of his life or personal liberty except according to procedure established by law.',
    keyHoldings: [
      'Expanded into substantive due process in Maneka Gandhi (1978)',
      'Right to Privacy recognized as inalienable fundamental right in Puttaswamy (2017)',
      'Right to clean environment, livelihood, and medical aid'
    ],
    connections: ['golden-triangle', 'maneka', 'puttaswamy', 'privacy', 'art-21a', 'art-14', 'art-19', 'art-32']
  },
  {
    id: 'art-14',
    label: 'Article 14',
    category: 'article',
    cluster: 'equality',
    x: 340,
    y: 260,
    articleAnchor: 'Part III • Fundamental Rights',
    summary: 'Equality before law and equal protection of the laws within the territory of India.',
    keyHoldings: [
      'Two-Prong Reasonable Classification Test (Anwar Ali Sarkar)',
      'Antithesis of arbitrariness (E.P. Royappa)',
      'Doctrine of Manifest Arbitrariness (Shayara Bano)'
    ],
    connections: ['golden-triangle', 'art-21', 'art-15', 'art-16', 'shayara-bano', 'manifest-arbitrariness', 'navtej-johar']
  },
  {
    id: 'art-19',
    label: 'Article 19',
    category: 'article',
    cluster: 'liberty',
    x: 660,
    y: 260,
    articleAnchor: 'Part III • 6 Democratic Freedoms',
    summary: 'Protection of 6 freedoms: speech & expression, assembly, association, movement, residence, and profession, subject to reasonable restrictions under clauses (2)–(6).',
    keyHoldings: [
      'Interpenetrates with Articles 14 & 21 (Golden Triangle)',
      'Proportionality test applies to restrictions under 19(2)',
      'Internet access as medium of speech protected (Anuradha Bhasin)'
    ],
    connections: ['golden-triangle', 'art-21', 'maneka', 'proportionality']
  },
  {
    id: 'golden-triangle',
    label: 'Golden Triangle',
    category: 'doctrine',
    cluster: 'liberty',
    x: 500,
    y: 210,
    summary: 'Articles 14, 19, and 21 do not operate in mutually exclusive silos; they form a single organic trinity of fundamental rights.',
    keyHoldings: [
      'Overruled Gopalan exclusivity doctrine in Maneka Gandhi (1978)',
      'Any law depriving liberty must be non-arbitrary (Art 14) and reasonable (Art 19)'
    ],
    connections: ['art-14', 'art-19', 'art-21', 'maneka']
  },
  {
    id: 'maneka',
    label: 'Maneka Gandhi (1978)',
    category: 'case',
    cluster: 'liberty',
    x: 500,
    y: 420,
    articleAnchor: '7-Judge Constitution Bench',
    summary: 'Landmark ruling that procedure depriving liberty must be "just, fair, and reasonable", establishing Indian Substantive Due Process.',
    keyHoldings: [
      'Overruled A.K. Gopalan textualism',
      'Infused natural justice (audi alteram partem) into Article 21',
      'Birthing of the Golden Triangle'
    ],
    connections: ['art-21', 'golden-triangle', 'substantive-due-process', 'art-19']
  },
  {
    id: 'substantive-due-process',
    label: 'Substantive Due Process',
    category: 'doctrine',
    cluster: 'liberty',
    x: 380,
    y: 450,
    summary: 'Courts scrutinize not merely the procedural enactment of a law, but its intrinsic substantive fairness, justice, and proportionality.',
    keyHoldings: [
      'Breathed into Art 21 despite Constituent Assembly deletion of American clause',
      'Direct shield against draconian criminal procedure'
    ],
    connections: ['maneka', 'art-21', 'proportionality']
  },
  {
    id: 'puttaswamy',
    label: 'Puttaswamy (2017)',
    category: 'case',
    cluster: 'liberty',
    x: 630,
    y: 430,
    articleAnchor: '9-Judge Unanimous Bench',
    summary: 'Unanimously declared the Right to Privacy an intrinsic fundamental right under Article 21 and Part III.',
    keyHoldings: [
      'Overruled M.P. Sharma (1954) & Kharak Singh (1962)',
      'Formulated 4-prong proportionality standard for privacy infringements',
      'Affirmed informational, spatial, and decisional privacy'
    ],
    connections: ['art-21', 'privacy', 'proportionality']
  },
  {
    id: 'privacy',
    label: 'Right to Privacy',
    category: 'doctrine',
    cluster: 'liberty',
    x: 740,
    y: 480,
    summary: 'The constitutional guarantee of personal autonomy, bodily integrity, and informational self-determination.',
    keyHoldings: [
      'Protected under Article 21 as core human dignity',
      'Overruled ADM Jabalpur majority view on basic human rights'
    ],
    connections: ['puttaswamy', 'art-21', 'proportionality']
  },
  {
    id: 'proportionality',
    label: 'Proportionality Test',
    category: 'doctrine',
    cluster: 'liberty',
    x: 550,
    y: 520,
    summary: '4-Prong Standard: 1. Legality (law), 2. Legitimate State Aim, 3. Rational Nexus / Suitability, 4. Least intrusive measure & balance.',
    keyHoldings: [
      'Standard test for state interference in fundamental rights',
      'Modern gold standard across Commonwealth jurisdictions'
    ],
    connections: ['puttaswamy', 'maneka', 'privacy', 'art-21']
  },
  {
    id: 'art-21a',
    label: 'Article 21A',
    category: 'article',
    cluster: 'liberty',
    x: 620,
    y: 140,
    articleAnchor: 'Part III • Fundamental Right to Education',
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
    x: 750,
    y: 110,
    summary: 'Historic education amendment inserting Article 21A, modifying DPSP Article 45, and adding Fundamental Duty 51A(k).',
    keyHoldings: [
      'Elevated elementary education to justiciable Fundamental Right',
      'Tripartite synergy between Part III, IV, and IVA'
    ],
    connections: ['art-21a']
  },

  // --- EQUALITY & SOCIAL JUSTICE CLUSTER ---
  {
    id: 'art-15',
    label: 'Article 15',
    category: 'article',
    cluster: 'equality',
    x: 210,
    y: 200,
    articleAnchor: 'Part III • Prohibition of Discrimination',
    summary: 'Prohibition of discrimination on grounds only of religion, race, caste, sex, or place of birth.',
    keyHoldings: [
      'Enables special provisions for women, children (15(3)), and backward classes (15(4), 15(5))',
      '103rd Amd added 15(6) for Economically Weaker Sections (EWS)'
    ],
    connections: ['art-14', 'art-16', 'indra-sawhney', 'navtej-johar']
  },
  {
    id: 'art-16',
    label: 'Article 16',
    category: 'article',
    cluster: 'equality',
    x: 130,
    y: 280,
    articleAnchor: 'Part III • Public Employment Equality',
    summary: 'Equality of opportunity in matters of public employment. Prohibits discrimination on 7 specified grounds.',
    keyHoldings: [
      'Clauses 16(4), 16(4A), 16(4B) are enabling provisions for affirmative action',
      'Indra Sawhney settled creamy layer exclusion and 50% ceiling'
    ],
    connections: ['art-14', 'art-15', 'indra-sawhney', 'ceiling-50']
  },
  {
    id: 'indra-sawhney',
    label: 'Indra Sawhney (1992)',
    category: 'case',
    cluster: 'equality',
    x: 90,
    y: 380,
    articleAnchor: '9-Judge Constitution Bench',
    summary: 'The landmark Mandal Case upholding 27% OBC quota while instituting the creamy layer exclusion and 50% reservation ceiling.',
    keyHoldings: [
      'Affirmed backwardness can be identified primarily by caste',
      'Mandated 50% ceiling rule except in extraordinary remote areas',
      'Excluded creamy layer from reservation benefits'
    ],
    connections: ['art-15', 'art-16', 'ceiling-50']
  },
  {
    id: 'ceiling-50',
    label: '50% Ceiling Rule',
    category: 'doctrine',
    cluster: 'equality',
    x: 80,
    y: 480,
    summary: 'The constitutional balancing rule preventing affirmative action from subsuming the general rule of merit.',
    keyHoldings: [
      'Laid down in Balaji and reaffirmed in Indra Sawhney',
      'Janhit Abhiyan (2022) held 10% EWS quota does not breach 50% cap because 50% applies to SEBC/OBC/SC/ST'
    ],
    connections: ['indra-sawhney', 'art-16']
  },
  {
    id: 'shayara-bano',
    label: 'Shayara Bano (2017)',
    category: 'case',
    cluster: 'equality',
    x: 230,
    y: 110,
    articleAnchor: '5-Judge Constitution Bench',
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
    x: 340,
    y: 110,
    summary: 'Legislation or executive action that is irrational, capricious, lacking determining principle, or disproportionate violates Article 14.',
    keyHoldings: [
      'Codified by Nariman J. in Shayara Bano',
      'Applied to strike down Section 377 IPC in Navtej Johar'
    ],
    connections: ['shayara-bano', 'art-14', 'navtej-johar']
  },
  {
    id: 'navtej-johar',
    label: 'Navtej Johar (2018)',
    category: 'case',
    cluster: 'equality',
    x: 320,
    y: 40,
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
    x: 480,
    y: 50,
    summary: 'The supreme commitment to constitutional values (equality, liberty, dignity) which triumphs over majoritarian or societal morality.',
    keyHoldings: [
      'Derived from Dr. B.R. Ambedkar\'s Constituent Assembly addresses',
      'Cornerstone of Sabarimala, Navtej Johar, and NCT Delhi rulings'
    ],
    connections: ['navtej-johar', 'art-14', 'art-21']
  },

  // --- WRITS & REMEDIES CLUSTER ---
  {
    id: 'art-32',
    label: 'Article 32',
    category: 'article',
    cluster: 'remedies',
    x: 330,
    y: 570,
    articleAnchor: 'Part III • Constitutional Remedies',
    summary: 'Right to move the Supreme Court for enforcement of Fundamental Rights. Dr. Ambedkar called it the Heart and Soul of the Constitution.',
    keyHoldings: [
      'Guaranteed as a Fundamental Right itself, unlike Article 226',
      'Empowered with 5 prerogative writs',
      'Declared part of Basic Structure in L. Chandra Kumar (1997)'
    ],
    connections: ['art-226', 'prerogative-writs', 'art-21', 'basic-structure']
  },
  {
    id: 'art-226',
    label: 'Article 226',
    category: 'article',
    cluster: 'remedies',
    x: 200,
    y: 590,
    articleAnchor: 'Part VI • High Court Writ Jurisdiction',
    summary: 'High Courts writ jurisdiction for enforcement of Fundamental Rights AND "for any other purpose" (wider than Art 32).',
    keyHoldings: [
      'High Courts have territorial jurisdiction across the State (Art 226(1)) or where cause of action arises (Art 226(2))',
      'Discretionary extraordinary remedy'
    ],
    connections: ['art-32', 'prerogative-writs']
  },
  {
    id: 'prerogative-writs',
    label: '5 Prerogative Writs',
    category: 'doctrine',
    cluster: 'remedies',
    x: 180,
    y: 500,
    summary: 'Habeas Corpus (unlawful detention), Mandamus (public duty), Prohibition (lower tribunal stay), Certiorari (quash orders), Quo Warranto (office title).',
    keyHoldings: [
      'Borrowed from English common law crown prerogative',
      'Foundational bedrock of constitutional administrative law'
    ],
    connections: ['art-32', 'art-226']
  },

  // --- BASIC STRUCTURE & AMENDING POWER CLUSTER ---
  {
    id: 'art-368',
    label: 'Article 368',
    category: 'article',
    cluster: 'basic_structure',
    x: 850,
    y: 320,
    articleAnchor: 'Part XX • Amendment of Constitution',
    summary: 'Parliament\'s constituent power to amend by way of addition, variation or repeal any provision of this Constitution.',
    keyHoldings: [
      'Requires Special Majority (Type 2: 2/3 Present & Voting + Absolute Majority)',
      'Federal provisions require 50% State Legislature ratification',
      'Subject to implied constitutional limitation: The Basic Structure'
    ],
    connections: ['kesavananda', 'basic-structure', 'golak-nath', 'minerva-mills', 'amd-42']
  },
  {
    id: 'kesavananda',
    label: 'Kesavananda (1973)',
    category: 'case',
    cluster: 'basic_structure',
    x: 860,
    y: 430,
    articleAnchor: '13-Judge Special Bench (7:6 Majority)',
    summary: 'The greatest constitutional ruling in Indian history. Held Parliament cannot alter or destroy the Basic Structure of the Constitution.',
    keyHoldings: [
      'Overruled Golak Nath (1967)',
      'Upheld 24th Amendment affirming constituent amending power',
      'Created eternal constitutional guardrails on majoritarian amendments'
    ],
    connections: ['art-368', 'basic-structure', 'golak-nath', 'minerva-mills', 'ir-coelho']
  },
  {
    id: 'basic-structure',
    label: 'Basic Structure Doctrine',
    category: 'doctrine',
    cluster: 'basic_structure',
    x: 770,
    y: 370,
    summary: 'Implied constitutional limitations on amending power preserving core pillars: Supremacy, Democracy, Secularism, Federalism, Separation of Powers, Judicial Review.',
    keyHoldings: [
      'Cannot be repealed or amended by Parliament',
      'Applied in Indira Gandhi, Minerva Mills, S.R. Bommai, and NJAC'
    ],
    connections: ['kesavananda', 'art-368', 'minerva-mills', 'sr-bommai', 'ir-coelho', 'art-32']
  },
  {
    id: 'golak-nath',
    label: 'Golak Nath (1967)',
    category: 'case',
    cluster: 'basic_structure',
    x: 940,
    y: 410,
    articleAnchor: '11-Judge Constitution Bench (6:5 Majority)',
    summary: 'Held that constitutional amendments are "law" under Article 13(2) and Parliament CANNOT abridge Fundamental Rights.',
    keyHoldings: [
      'Overruled Shankari Prasad & Sajjan Singh',
      'Introduced Doctrine of Prospective Overruling',
      'Overruled by Kesavananda Bharati in 1973'
    ],
    connections: ['art-368', 'kesavananda']
  },
  {
    id: 'minerva-mills',
    label: 'Minerva Mills (1980)',
    category: 'case',
    cluster: 'basic_structure',
    x: 880,
    y: 530,
    articleAnchor: '5-Judge Constitution Bench',
    summary: 'Struck down Clauses (4) and (5) of Article 368 which sought to grant unlimited amending power and exclude judicial review.',
    keyHoldings: [
      'Held that the limited amending power of Parliament is itself a Basic Feature',
      'Part III and Part IV are like two wheels of a chariot'
    ],
    connections: ['basic-structure', 'art-368', 'amd-42', 'kesavananda']
  },
  {
    id: 'amd-42',
    label: '42nd Amendment (1976)',
    category: 'amendment',
    cluster: 'basic_structure',
    x: 940,
    y: 260,
    summary: 'Known as the "Mini-Constitution". Added Socialist, Secular, Integrity to Preamble, inserted Part IVA (Fundamental Duties), and sought unlimited amending power.',
    keyHoldings: [
      'Sections 4 and 55 struck down in Minerva Mills (1980)',
      'Substantially modified and balanced by 44th Amendment Act, 1978'
    ],
    connections: ['art-368', 'minerva-mills']
  },
  {
    id: 'ir-coelho',
    label: 'I.R. Coelho (2007)',
    category: 'case',
    cluster: 'basic_structure',
    x: 770,
    y: 570,
    articleAnchor: '9-Judge Unanimous Bench',
    summary: 'Settled that all laws placed in the Ninth Schedule after April 24, 1973 (Kesavananda date) are subject to judicial review against the Basic Structure.',
    keyHoldings: [
      'Ninth Schedule cannot be an immunity vacuum',
      'If a 9th Schedule law damages basic structure via Arts 14, 19, or 21, it shall be struck down'
    ],
    connections: ['basic-structure', 'kesavananda']
  },

  // --- FEDERALISM & EMERGENCY CLUSTER ---
  {
    id: 'art-356',
    label: 'Article 356',
    category: 'article',
    cluster: 'federalism',
    x: 860,
    y: 170,
    articleAnchor: 'Part XVIII • President\'s Rule in States',
    summary: 'Proclamation on failure of constitutional machinery in States. Imposed on Governor\'s report or otherwise.',
    keyHoldings: [
      'Ceases after 2 months unless approved by Parliament',
      'Floor test on floor of House is sole constitutional metric (S.R. Bommai)',
      'Assembly cannot be dissolved until Parliament approves'
    ],
    connections: ['sr-bommai', 'floor-test', 'basic-structure']
  },
  {
    id: 'sr-bommai',
    label: 'S.R. Bommai (1994)',
    category: 'case',
    cluster: 'federalism',
    x: 880,
    y: 80,
    articleAnchor: '9-Judge Constitution Bench',
    summary: 'Monumental federalism ruling curbing the political misuse of Article 356 and establishing judicial review of Presidential proclamations.',
    keyHoldings: [
      'Federalism and Secularism are Basic Features of the Constitution',
      'Floor test is the ONLY legitimate test of a ministry\'s majority',
      'Courts have power to restore a dismissed ministry and dissolve unconstitutional proclamations'
    ],
    connections: ['art-356', 'floor-test', 'basic-structure']
  },
  {
    id: 'floor-test',
    label: 'Floor Test Mandate',
    category: 'doctrine',
    cluster: 'federalism',
    x: 740,
    y: 50,
    summary: 'The democratic requirement that majority support of a government must be demonstrated strictly on the floor of the Legislative Assembly, not through Raj Bhavan subjective memos.',
    keyHoldings: [
      'Reiterated in Rameshwar Prasad (2006) and Shiv Sena split (2023)',
      'Cornerstone of responsible cabinet government'
    ],
    connections: ['sr-bommai', 'art-356']
  }
];
