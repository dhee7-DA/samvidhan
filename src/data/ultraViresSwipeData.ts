export interface UltraViresScenario {
  id: string;
  situation: string;
  verdict: 'INTRA_VIRES' | 'ULTRA_VIRES'; // INTRA_VIRES = Constitutional, ULTRA_VIRES = Unconstitutional
  primaryArticle: string;
  governingPrecedentOrRule: string;
  oneLineRatio: string;
  category: 'Fundamental Rights' | 'Executive & Emergency' | 'Judiciary & Writs' | 'Parliament & Elections' | 'Federalism';
}

export const ULTRA_VIRES_DECK: UltraViresScenario[] = [
  {
    id: 'uv-1',
    situation:
      'Police arrest a citizen under Section 66A of the IT Act for posting political satire online.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 19(1)(a)',
    governingPrecedentOrRule: 'Shreya Singhal v. Union of India (2015)',
    oneLineRatio:
      'Section 66A was struck down for being unconstitutionally vague and creating an impermissible chilling effect on free speech.',
    category: 'Fundamental Rights'
  },
  {
    id: 'uv-2',
    situation:
      'President of India returns a Money Bill passed by Parliament for legislative reconsideration under Article 111.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 111',
    governingPrecedentOrRule: 'Article 111 Proviso',
    oneLineRatio:
      'Article 111 explicitly bars the President from returning a Money Bill; the President must either grant or withhold assent.',
    category: 'Parliament & Elections'
  },
  {
    id: 'uv-3',
    situation:
      'A state legislature passes an amendment imposing criminal jail sentences with retrospective effect.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 20(1)',
    governingPrecedentOrRule: 'Kedar Nath v. State of West Bengal (1953)',
    oneLineRatio:
      'Article 20(1) establishes an absolute constitutional embargo against ex-post facto penal enactments.',
    category: 'Fundamental Rights'
  },
  {
    id: 'uv-4',
    situation:
      'Governor reserves a state bill for Presidential consideration because it derogates from the powers of the High Court.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Article 200',
    governingPrecedentOrRule: 'Article 200 Second Proviso',
    oneLineRatio:
      'Reservation is constitutionally mandatory if a bill endangers the constitutional position and powers of the High Court.',
    category: 'Federalism'
  },
  {
    id: 'uv-5',
    situation:
      'Parliament inserts clauses (4) and (5) into Article 368 declaring that constitutional amendments cannot be reviewed by any court.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 368',
    governingPrecedentOrRule: 'Minerva Mills v. Union of India (1980)',
    oneLineRatio:
      'Clauses (4) and (5) were struck down because judicial review of constitutional amendments is an unalterable basic feature.',
    category: 'Judiciary & Writs'
  },
  {
    id: 'uv-6',
    situation:
      'Supreme Court invokes Article 142 to dissolve a marriage on grounds of irretrievable breakdown without waiting for statutory cooling periods.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Article 142',
    governingPrecedentOrRule: 'Shilpa Sailesh v. Varun Sreenivasan (2023)',
    oneLineRatio:
      'Inherent powers under Article 142 allow the apex court to do complete justice unfettered by procedural waiting periods.',
    category: 'Judiciary & Writs'
  },
  {
    id: 'uv-7',
    situation:
      'A State enacts legislation reserving 75% of private-sector factory jobs exclusively for local state domiciles.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 16(2) & Article 19(1)(g)',
    governingPrecedentOrRule: 'IMT Industrial Association v. State of Haryana (2023)',
    oneLineRatio:
      'States cannot build artificial geographical walls in private employment, violating equal citizenship across India.',
    category: 'Fundamental Rights'
  },
  {
    id: 'uv-8',
    situation:
      'Election Commission directs all contesting candidates to publicly disclose their criminal antecedents in widely circulated newspapers.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Article 324',
    governingPrecedentOrRule: 'Public Interest Foundation v. Union of India (2018)',
    oneLineRatio:
      'Voters have a fundamental right to know candidates’ criminal records under Article 19(1)(a) enforced via Article 324.',
    category: 'Parliament & Elections'
  },
  {
    id: 'uv-9',
    situation:
      'Assembly Speaker sits indefinitely for 2 years on a Tenth Schedule anti-defection disqualification petition without deciding.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Tenth Schedule',
    governingPrecedentOrRule: 'Keisham Meghachandra Singh v. Speaker (2020)',
    oneLineRatio:
      'The Speaker acting as a tribunal must decide defection petitions within a reasonable period, ordinarily 3 months.',
    category: 'Parliament & Elections'
  },
  {
    id: 'uv-10',
    situation:
      'Union dissolves a State Legislative Assembly under Article 356 before the proclamation has been approved by both Houses of Parliament.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 356(3)',
    governingPrecedentOrRule: 'S.R. Bommai v. Union of India (1994)',
    oneLineRatio:
      'The State Assembly can only be kept in suspended animation; dissolution cannot take place prior to parliamentary approval.',
    category: 'Executive & Emergency'
  },
  {
    id: 'uv-11',
    situation:
      'During a National Emergency under Article 352, Parliament extends the duration of the Lok Sabha by 1 year at a time.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Article 83(2)',
    governingPrecedentOrRule: 'Article 83(2) Proviso',
    oneLineRatio:
      'The Constitution explicitly authorizes Parliament to extend the life of Lok Sabha by law for up to 1 year at a time during emergency.',
    category: 'Parliament & Elections'
  },
  {
    id: 'uv-12',
    situation:
      'High Court issues a writ of Mandamus directing the Union Government to enact a Uniform Civil Code under Article 44.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 37 & Article 226',
    governingPrecedentOrRule: 'Maharshi Avadhesh v. Union of India (1994)',
    oneLineRatio:
      'Directive Principles are non-justiciable; courts cannot issue writs commanding Parliament or State Legislatures to enact laws.',
    category: 'Judiciary & Writs'
  },
  {
    id: 'uv-13',
    situation:
      'State invokes Article 365 to impose President’s Rule after a State ignores Union directions on national highway construction.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Article 365 & Article 257',
    governingPrecedentOrRule: 'Article 365 read with Article 356',
    oneLineRatio:
      'Failure to comply with lawful Union executive directions under Article 257 empowers the President to deem it a constitutional breakdown.',
    category: 'Executive & Emergency'
  },
  {
    id: 'uv-14',
    situation:
      'A sitting Member of Parliament claims immunity under Article 105(2) from criminal prosecution for taking a cash bribe to vote on a bill.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 105(2)',
    governingPrecedentOrRule: 'Sita Soren v. Union of India (2024)',
    oneLineRatio:
      '7-Judge Bench unanimously held that bribery is complete upon acceptance and is never protected by legislative privilege.',
    category: 'Parliament & Elections'
  },
  {
    id: 'uv-15',
    situation:
      'State Government classifies Scheduled Castes into sub-quotas to ensure benefits reach more disadvantaged sub-castes using empirical data.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Article 16(4)',
    governingPrecedentOrRule: 'State of Punjab v. Davinder Singh (2024)',
    oneLineRatio:
      '7-Judge Bench ruled that sub-classification within SCs is constitutionally permissible under Article 16(4) to advance substantive equality.',
    category: 'Fundamental Rights'
  },
  {
    id: 'uv-16',
    situation:
      'Police confiscate a citizen’s passport indefinitely under an uncanalized executive circular without notice or hearing.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 21',
    governingPrecedentOrRule: 'Maneka Gandhi v. Union of India (1978)',
    oneLineRatio:
      'Procedure depriving personal liberty must be just, fair, and reasonable, incorporating natural justice (audi alteram partem).',
    category: 'Fundamental Rights'
  },
  {
    id: 'uv-17',
    situation:
      'Parliament enacts an ordinary statute declaring that a final judgment of the Supreme Court between two private parties is null and void.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 141 & Article 142',
    governingPrecedentOrRule: 'Medical Council of India v. State of Kerala (2019)',
    oneLineRatio:
      'Legislature can cure statutory defects retrospectively, but cannot directly overturn or set aside judicial decrees.',
    category: 'Judiciary & Writs'
  },
  {
    id: 'uv-18',
    situation:
      'Election Commission bans opinion polls during the 48 hours preceding the conclusion of polling across phases.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Article 324 & Section 126A RPA',
    governingPrecedentOrRule: 'Section 126A Representation of the People Act, 1951',
    oneLineRatio:
      'Reasonable restriction in the interest of free, fair, and un-coerced voting environment.',
    category: 'Parliament & Elections'
  },
  {
    id: 'uv-19',
    situation:
      'Governor withholds assent to a bill repassed by the State Legislative Assembly without any changes.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 200',
    governingPrecedentOrRule: 'State of Punjab v. Principal Secretary (2023)',
    oneLineRatio:
      'First proviso to Article 200 mandates that if the bill is passed again by the House, the Governor shall not withhold assent.',
    category: 'Federalism'
  },
  {
    id: 'uv-20',
    situation:
      'President invokes Article 359 during a National Emergency to suspend a citizen’s right to move court for enforcement of Article 20.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 359(1)',
    governingPrecedentOrRule: '44th Constitutional Amendment Act, 1978',
    oneLineRatio:
      'Articles 20 and 21 are explicitly non-derogable and cannot be suspended under Article 359 even during martial law or emergency.',
    category: 'Executive & Emergency'
  }
];

export function getRandomUltraViresQueue(count = 15): UltraViresScenario[] {
  const shuffled = [...ULTRA_VIRES_DECK].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
