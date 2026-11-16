export type FlashcardDeckType = 'articles' | 'cases' | 'amendments' | 'maxims';

export interface Flashcard {
  id: string;
  deck: FlashcardDeckType;
  front: string;
  subheading?: string;
  category: string;
  back: {
    coreRule: string;
    statutoryDetails: string;
    statutoryAnchor?: string;
    precedentRef?: string;
  };
  box: number; // 1 to 4 (4 = Mastered)
  lastReviewed: number | null;
  nextReview: number;
  reps: number;
}

const STORAGE_KEY = 'samvidhan_flashcards_v1';

export const INITIAL_FLASHCARDS: Flashcard[] = [
  // 1. ARTICLES DECK
  {
    id: 'art-12',
    deck: 'articles',
    category: 'Fundamental Rights',
    subheading: 'Definition of "The State"',
    front: 'Article 12: Which entities qualify as "The State"?',
    back: {
      coreRule: 'Includes Government and Parliament of India, Government and Legislature of each State, all local authorities, and other authorities under the control of the GoI.',
      statutoryDetails: 'R.D. Shetty (1979) laid down the 5-point agency/instrumentality test. Private bodies with deep and pervasive State control qualify; purely private bodies (e.g. Zee Telefilms / BCCI) do not.',
      statutoryAnchor: 'Article 12, Part III',
      precedentRef: 'R.D. Shetty v. International Airport Authority (1979); Zee Telefilms v. UOI (2005)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'art-13',
    deck: 'articles',
    category: 'Fundamental Rights',
    subheading: 'Judicial Review & Inconsistency',
    front: 'Article 13(2): What is the constitutional consequence of an ordinary law that abridges Part III?',
    back: {
      coreRule: 'The State shall not make any law taking away or abridging Part III rights; any law made in contravention shall, to the extent of contravention, be void ab initio.',
      statutoryDetails: 'Forms the bedrock of Judicial Review. Doctrine of Severability (Art 13(1)&(2)) separates the unconstitutional clause. Doctrine of Eclipse applies to pre-constitutional laws.',
      statutoryAnchor: 'Article 13(1), (2), (3)',
      precedentRef: 'State of Madras v. V.G. Row (1952); Deep Chand v. State of U.P. (1959)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'art-14',
    deck: 'articles',
    category: 'Fundamental Rights',
    subheading: 'Equality & Arbitrariness',
    front: 'Article 14: What are the two distinct doctrines governing Equality before Law?',
    back: {
      coreRule: '1. Traditional Reasonable Classification Test (intelligible differentia + rational nexus). 2. Modern Non-Arbitrariness Doctrine (manifest arbitrariness strikes down arbitrary state action).',
      statutoryDetails: 'Equality is dynamic and antithetical to arbitrariness. Confirmed in Royappa and expanded in Shayara Bano to strike down plenary primary legislation.',
      statutoryAnchor: 'Article 14, Part III',
      precedentRef: 'E.P. Royappa (1974); Maneka Gandhi (1978); Shayara Bano (2017)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'art-20-1',
    deck: 'articles',
    category: 'Criminal Safeguards',
    subheading: 'Ex-Post Facto Law',
    front: 'Article 20(1): Does protection against ex-post facto laws apply to civil and tax liabilities?',
    back: {
      coreRule: 'No. Article 20(1) strictly applies to criminal convictions and criminal penalties only.',
      statutoryDetails: 'Civil laws, retrospective taxation, and procedural/evidentiary changes do not violate Article 20(1), provided substantive penal liability is not created retrospectively.',
      statutoryAnchor: 'Article 20(1), Part III',
      precedentRef: 'Kedar Nath v. State of West Bengal (1953); Hathising Mfg. Co. (1960)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'art-20-3',
    deck: 'articles',
    category: 'Criminal Safeguards',
    subheading: 'Right Against Self-Incrimination',
    front: 'Article 20(3): Can an accused be compelled to give voice exemplars, handwriting samples, or biometric data?',
    back: {
      coreRule: 'Yes. Article 20(3) protects only against testimonial compulsion (conveying personal knowledge). Non-testimonial physical evidence is admissible.',
      statutoryDetails: '11-Judge Bench in Kathi Kalu Oghad (1961) held physical specimens do not impart testimonial knowledge. Selvi (2010) held narco-analysis and lie-detectors violate Article 20(3) as testimonial compulsion.',
      statutoryAnchor: 'Article 20(3), Part III',
      precedentRef: 'State of Bombay v. Kathi Kalu Oghad (1961); Selvi v. State of Karnataka (2010)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'art-21',
    deck: 'articles',
    category: 'Fundamental Rights',
    subheading: 'Right to Life & Personal Liberty',
    front: 'Article 21: How did Maneka Gandhi (1978) transform "Procedure Established by Law"?',
    back: {
      coreRule: 'Subsumed Substantive Due Process into Article 21. Any procedure depriving life or personal liberty must be just, fair, reasonable, and non-oppressive, not arbitrary.',
      statutoryDetails: 'Overruled the narrow textualist reading of A.K. Gopalan (1950). Established the Golden Triangle interconnectedness between Articles 14, 19, and 21.',
      statutoryAnchor: 'Article 21, Part III',
      precedentRef: 'Maneka Gandhi v. Union of India (1978); K.S. Puttaswamy v. UOI (2017)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'art-32',
    deck: 'articles',
    category: 'Constitutional Remedies',
    subheading: 'Heart & Soul of Constitution',
    front: 'Article 32 vs Article 226: What are the jurisdictional distinctions?',
    back: {
      coreRule: 'Article 32 is itself a Fundamental Right maintainable ONLY for enforcement of Part III. Article 226 is wider, maintainable for Fundamental Rights AND "any other legal purpose".',
      statutoryDetails: 'Supreme Court cannot refuse Article 32 arbitrarily (Romesh Thappar). High Courts have territorial limitations under Art 226(1) and cause of action limits under Art 226(2).',
      statutoryAnchor: 'Articles 32 & 226',
      precedentRef: 'Romesh Thappar (1950); L. Chandra Kumar v. UOI (1997)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'art-72-161',
    deck: 'articles',
    category: 'Executive Clemency',
    subheading: 'Pardoning Powers',
    front: 'Article 72 & 161: Can the Governor pardon a sentence of death?',
    back: {
      coreRule: 'Under Article 161 as amended and settled by the Supreme Court in 2021, the Governor CAN commute or remit a sentence of death, but the President under Article 72 retains concurrent and exclusive federal jurisdiction.',
      statutoryDetails: 'Clemency is exercised on mandatory aid and advice of the Council of Ministers (Maru Ram). It is subject to limited judicial review on grounds of mala fides or arbitrariness (Epuru Sudhakar).',
      statutoryAnchor: 'Articles 72 & 161',
      precedentRef: 'Kehar Singh (1989); Epuru Sudhakar (2006); State of Haryana v. Raj Kumar (2021)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'art-123-213',
    deck: 'articles',
    category: 'Ordinance Power',
    subheading: 'Emergency Legislative Power',
    front: 'Articles 123 & 213: When does an Ordinance cease to operate?',
    back: {
      coreRule: 'Ceases to operate 6 weeks from the reassembly of Parliament / State Legislature, or earlier if disapproved by resolutions.',
      statutoryDetails: 'Cannot be promulgated if both Houses are in session. Re-promulgation of ordinances without legislative ratification is a subversion of democracy (D.C. Wadhwa; Krishna Kumar Singh).',
      statutoryAnchor: 'Articles 123(2)(a) & 213(2)(a)',
      precedentRef: 'D.C. Wadhwa (1987); Krishna Kumar Singh v. State of Bihar (2017)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'art-356',
    deck: 'articles',
    category: 'Emergency Provisions',
    subheading: 'President’s Rule',
    front: 'Article 356: Under S.R. Bommai (1994), when can the Legislative Assembly be dissolved?',
    back: {
      coreRule: 'The Legislative Assembly can only be dissolved AFTER parliamentary approval of the Proclamation under Article 356(3). Until then, it can only be suspended.',
      statutoryDetails: 'Presidential satisfaction is subject to judicial review. If court finds the proclamation invalid, it has the constitutional power to restore the dismissed ministry and dissolved assembly.',
      statutoryAnchor: 'Article 356(1), (3)',
      precedentRef: 'S.R. Bommai v. Union of India (1994); Rameshwar Prasad (2006)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },

  // 2. LANDMARK CASES DECK
  {
    id: 'case-kesavananda',
    deck: 'cases',
    category: 'Basic Structure',
    subheading: '13-Judge Constitution Bench',
    front: 'Kesavananda Bharati v. State of Kerala (1973)',
    back: {
      coreRule: 'Parliament has wide constituent power to amend any part of the Constitution under Article 368, but CANNOT alter, damage, or destroy its Basic Structure.',
      statutoryDetails: 'Decided by 7:6 majority. Overruled Golak Nath. Held Fundamental Rights can be amended so long as basic democratic and federal pillars remain intact.',
      statutoryAnchor: 'Article 368 vs Part III',
      precedentRef: '(1973) 4 SCC 225'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'case-puttaswamy',
    deck: 'cases',
    category: 'Right to Privacy',
    subheading: '9-Judge Constitution Bench',
    front: 'Justice K.S. Puttaswamy (Retd.) v. Union of India (2017)',
    back: {
      coreRule: 'Right to Privacy is a Fundamental Right guaranteed under Article 21, natural to human dignity and autonomy.',
      statutoryDetails: 'Unanimous 9:0 ruling overruling M.P. Sharma (1954) and Kharak Singh (1962). Laid down the 4-pronged proportionality test for state infringement: Legitimate State Aim, Suitability, Necessity, and Strict Proportionality.',
      statutoryAnchor: 'Article 21 & Part III',
      precedentRef: '(2017) 10 SCC 1'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'case-shayara-bano',
    deck: 'cases',
    category: 'Triple Talaq & Manifest Arbitrariness',
    subheading: '5-Judge Constitution Bench',
    front: 'Shayara Bano v. Union of India (2017)',
    back: {
      coreRule: 'Talaq-e-biddat (instant triple talaq) declared unconstitutional and void for being manifestly arbitrary under Article 14.',
      statutoryDetails: 'Justice Nariman articulated that primary legislation or personal law recognized by statute can be struck down for "manifest arbitrariness" if done whimsically, without determining principle, or disproportionately.',
      statutoryAnchor: 'Articles 14 & 25',
      precedentRef: '(2017) 9 SCC 1'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'case-navtej-johar',
    deck: 'cases',
    category: 'Decriminalization of Sec 377',
    subheading: '5-Judge Constitution Bench',
    front: 'Navtej Singh Johar v. Union of India (2018)',
    back: {
      coreRule: 'Decriminalized consensual adult same-sex relations by reading down Section 377 IPC as violative of Articles 14, 15, 19, and 21.',
      statutoryDetails: 'Overruled Suresh Kumar Koushal (2014). Affirmed Constitutional Morality over popular morality and recognized sexual orientation as intrinsic to human dignity.',
      statutoryAnchor: 'Articles 14, 15, 19, 21',
      precedentRef: '(2018) 10 SCC 1'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'case-minerva-mills',
    deck: 'cases',
    category: 'Harmonious Construction',
    subheading: '5-Judge Constitution Bench',
    front: 'Minerva Mills Ltd. v. Union of India (1980)',
    back: {
      coreRule: 'Indian Constitution is founded on the bedrock of balance between Part III (Fundamental Rights) and Part IV (Directive Principles of State Policy).',
      statutoryDetails: 'Struck down Clauses (4) and (5) of Article 368 inserted by 42nd Amendment which sought to give unlimited amending power and exclude judicial review. Struck down unguided primacy of DPSPs over Art 14 & 19.',
      statutoryAnchor: 'Articles 14, 19, 31C, 368',
      precedentRef: '(1980) 3 SCC 625'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },

  // 3. AMENDMENTS DECK
  {
    id: 'amend-42',
    deck: 'amendments',
    category: 'Mini-Constitution',
    subheading: 'Year: 1976',
    front: '42nd Constitutional Amendment Act, 1976: Key Structural Invasions',
    back: {
      coreRule: 'Added "Socialist, Secular, Integrity" to Preamble. Inserted Part IVA (Fundamental Duties, Art 51A), Part XIVA (Tribunals, Arts 323A-323B).',
      statutoryDetails: 'Attempted to curb judicial review under Art 368 and subordinate Fundamental Rights to DPSPs under Art 31C (both struck down in Minerva Mills).',
      statutoryAnchor: 'Preamble, Arts 31C, 51A, 323A, 368',
      precedentRef: 'Minerva Mills v. UOI (1980)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'amend-44',
    deck: 'amendments',
    category: 'Restoration of Liberty',
    subheading: 'Year: 1978',
    front: '44th Constitutional Amendment Act, 1978: Key Remedial Safeguards',
    back: {
      coreRule: 'Replaced "internal disturbance" with "armed rebellion" in Art 352. Mandated written cabinet advice for Proclamation of Emergency.',
      statutoryDetails: 'Made Articles 20 and 21 non-suspendable during National Emergency under Art 359. Deleted Right to Property from Part III (Art 19(1)(f) and Art 31) and relocated to Art 300A as a legal right.',
      statutoryAnchor: 'Articles 352, 358, 359, 300A',
      precedentRef: 'A.D.M. Jabalpur legislative override'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'amend-52-91',
    deck: 'amendments',
    category: 'Anti-Defection Law',
    subheading: 'Years: 1985 & 2003',
    front: '52nd & 91st Amendment Acts: Anti-Defection & Council Size',
    back: {
      coreRule: '52nd Amendment inserted 10th Schedule. 91st Amendment deleted the 1/3rd split exemption and capped Council of Ministers to 15% of lower house.',
      statutoryDetails: 'Tenth Schedule disqualifies members for voluntarily giving up party membership or voting contrary to party whip. Kihoto Hollohan (1992) upheld validity while subjecting Speaker\'s final decision to judicial review.',
      statutoryAnchor: 'Articles 75(1A), 164(1A), 10th Schedule',
      precedentRef: 'Kihoto Hollohan v. Zachillhu (1992)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'amend-101',
    deck: 'amendments',
    category: 'Fiscal Federalism',
    subheading: 'Year: 2016',
    front: '101st Constitutional Amendment Act, 2016: GST Regime',
    back: {
      coreRule: 'Substituted traditional indirect tax separation with concurrent taxation power under Article 246A and created GST Council under Article 279A.',
      statutoryDetails: 'In Mohit Minerals (2022), the Supreme Court ruled that GST Council recommendations are persuasive/recommendatory, not binding on Parliament or State Legislatures, preserving cooperative federalism.',
      statutoryAnchor: 'Articles 246A, 269A, 279A',
      precedentRef: 'Union of India v. Mohit Minerals Pvt. Ltd. (2022)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'amend-103',
    deck: 'amendments',
    category: 'Affirmative Action',
    subheading: 'Year: 2019',
    front: '103rd Constitutional Amendment Act, 2019: 10% EWS Quota',
    back: {
      coreRule: 'Inserted Articles 15(6) and 16(6) allowing up to 10% reservation for Economically Weaker Sections (EWS) of citizens other than SC/ST/OBC.',
      statutoryDetails: 'Upheld by 3:2 majority in Janhit Abhiyan (2022). Held economic criteria alone is a valid basis of classification and the 50% ceiling rule from Indra Sawhney is not inflexible.',
      statutoryAnchor: 'Articles 15(6) & 16(6)',
      precedentRef: 'Janhit Abhiyan v. Union of India (2022)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },

  // 4. LATIN MAXIMS DECK
  {
    id: 'maxim-stare-decisis',
    deck: 'maxims',
    category: 'Precedent Doctrine',
    subheading: 'Latin Maxim',
    front: 'Stare decisis et non quieta movere',
    back: {
      coreRule: 'To stand by things decided and not disturb what is settled.',
      statutoryDetails: 'Forms the foundation of Article 141 (law declared by Supreme Court binding on all courts in India). Ensures legal certainty, consistency, and institutional predictability.',
      statutoryAnchor: 'Article 141 Constitution of India',
      precedentRef: 'Keshav Mills Co. Ltd. v. CIT (1965)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'maxim-audi-alteram',
    deck: 'maxims',
    category: 'Natural Justice',
    subheading: 'Latin Maxim',
    front: 'Audi alteram partem',
    back: {
      coreRule: 'Listen to the other side; no person shall be condemned unheard.',
      statutoryDetails: 'Twin pillar of Natural Justice along with Nemo judex in causa sua. Read into Article 14 and Article 21 in Maneka Gandhi (1978). Applies even to purely administrative action.',
      statutoryAnchor: 'Articles 14, 21, 311',
      precedentRef: 'A.K. Kraipak v. UOI (1969); Maneka Gandhi (1978)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'maxim-per-incuriam',
    deck: 'maxims',
    category: 'Judicial Discipline',
    subheading: 'Latin Maxim',
    front: 'Per incuriam',
    back: {
      coreRule: 'Through lack of care; a judicial decision given in ignorance or forgetfulness of a binding statutory provision or a decision of a coordinate/higher bench.',
      statutoryDetails: 'A judgment rendered per incuriam does not possess binding force under the doctrine of precedent and is not binding on subordinate or coordinate benches.',
      statutoryAnchor: 'Article 141',
      precedentRef: 'State of U.P. v. Synthetics and Chemicals Ltd. (1991)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'maxim-pith-substance',
    deck: 'maxims',
    category: 'Legislative Competence',
    subheading: 'Legal Doctrine',
    front: 'Doctrine of Pith and Substance',
    back: {
      coreRule: 'To examine the true nature and character of legislation to determine which Legislative List under Seventh Schedule it belongs to, disregarding incidental encroachments.',
      statutoryDetails: 'Saves an enactment from constitutional invalidity if in substance it falls within the legislature\'s competent field, even if it incidentally trenches upon a subject reserved for another legislature.',
      statutoryAnchor: 'Article 246 & Seventh Schedule',
      precedentRef: 'Prafulla Kumar Mukherjee v. Bank of Commerce, Khulna (1947)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'maxim-habeas-corpus',
    deck: 'maxims',
    category: 'Prerogative Writs',
    subheading: 'Writ Doctrine',
    front: 'Habeas Corpus ("That you have the body")',
    back: {
      coreRule: 'Prerogative writ directed to produce an illegally detained person before the court and show legal cause for their detention.',
      statutoryDetails: 'Can be issued against state authorities as well as private individuals. Normal rule of locus standi is relaxed; any relative or friend can file. Non-derogable right under Article 21.',
      statutoryAnchor: 'Articles 32 & 226',
      precedentRef: 'Sunil Batra (1980); Nilabati Behera (1993)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  }
];

export const getStoredFlashcards = (): Flashcard[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_FLASHCARDS));
      return INITIAL_FLASHCARDS;
    }
    const parsed: Flashcard[] = JSON.parse(raw);
    // Merge new cards if any exist in INITIAL_FLASHCARDS that aren't in stored
    const existingIds = new Set(parsed.map((c) => c.id));
    let hasNew = false;
    INITIAL_FLASHCARDS.forEach((card) => {
      if (!existingIds.has(card.id)) {
        parsed.push(card);
        hasNew = true;
      }
    });
    if (hasNew) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
    }
    return parsed;
  } catch (e) {
    console.error('Failed to load flashcards', e);
    return INITIAL_FLASHCARDS;
  }
};

export const saveFlashcards = (cards: Flashcard[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
  } catch (e) {
    console.error('Failed to save flashcards', e);
  }
};

export type GradeQuality = 'again' | 'hard' | 'good' | 'easy';

export const reviewCard = (cardId: string, grade: GradeQuality): Flashcard[] => {
  const cards = getStoredFlashcards();
  const index = cards.findIndex((c) => c.id === cardId);
  if (index === -1) return cards;

  const card = cards[index];
  const now = Date.now();
  let nextBox = card.box;
  let intervalDays = 1;

  switch (grade) {
    case 'again':
      nextBox = 1;
      intervalDays = 0; // immediate / today
      break;
    case 'hard':
      nextBox = Math.max(1, card.box);
      intervalDays = 1;
      break;
    case 'good':
      nextBox = Math.min(4, card.box + 1);
      intervalDays = nextBox === 2 ? 3 : nextBox === 3 ? 7 : 14;
      break;
    case 'easy':
      nextBox = Math.min(4, card.box + 2);
      intervalDays = nextBox >= 4 ? 21 : 10;
      break;
  }

  const updatedCard: Flashcard = {
    ...card,
    box: nextBox,
    lastReviewed: now,
    nextReview: now + intervalDays * 24 * 60 * 60 * 1000,
    reps: card.reps + 1,
  };

  cards[index] = updatedCard;
  saveFlashcards(cards);
  return cards;
};

export const resetFlashcards = (): Flashcard[] => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_FLASHCARDS));
  return INITIAL_FLASHCARDS;
};
