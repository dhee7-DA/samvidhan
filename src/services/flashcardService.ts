import { BARE_ACT_CATALOG } from './bareActService';
import { DETAILED_CASE_LAWS_BY_TOPIC } from '../data/caseLawsDetailedData';
import { SCHEDULES_DATA } from '../data/schedulesData';
import { DOCTRINES_DATA } from '../data/doctrinesData';
import { AMENDMENTS_DATA } from '../data/amendmentsData';
import { LEGAL_DICTIONARY } from '../data/legalDictionaryData';
import { FIFTEEN_DAY_BOOTCAMP_DATA } from '../data/bootcamp';
import type { BootcampDay } from '../data/bootcamp/bootcampTypes';

export type FlashcardDeckType =
  | 'articles'
  | 'cases'
  | 'schedules'
  | 'doctrines'
  | 'amendments'
  | 'maxims'
  | 'bootcamp'
  | 'mistakes';

export interface Flashcard {
  id: string;
  deck: FlashcardDeckType;
  front: string;
  subheading?: string;
  category: string;
  partTag?: string;
  sourceId?: string;
  isPriority?: boolean;
  isCustom?: boolean;
  pinned?: boolean;
  back: {
    coreRule: string;
    statutoryDetails: string;
    plainEnglish?: string;
    realWorldExample?: string;
    statutoryAnchor?: string;
    precedentRef?: string;
  };
  box: 1 | 2 | 3 | 4 | 5; // 1 to 5 (5 = Mastered / Permanent Synapse)
  lastReviewed: number | null;
  nextReview: number;
  reps: number;
  lapses?: number;
}

export {
  getPinnedFlashcardIds,
  togglePinFlashcardInStore,
  type CardProgressRecord,
} from './flashcardPinStore';
import {
  loadFlashcardProgressMap,
  saveFlashcardProgressMap,
  type CardProgressRecord,
} from './flashcardPinStore';

const CUSTOM_CARDS_STORAGE_KEY = 'samvidhan_flashcard_custom_v3';

export const INITIAL_FLASHCARDS: Flashcard[] = [
  // =========================================================================
  // 1. ARTICLES & THRESHOLDS DECK
  // =========================================================================
  {
    id: 'art-1',
    deck: 'articles',
    category: 'Union & Territory',
    subheading: 'Article 1',
    front: 'Article 1(1): How is the Indian polity officially characterized in the text?',
    back: {
      coreRule: '"India, that is Bharat, shall be a Union of States."',
      statutoryDetails: 'Dr. B.R. Ambedkar explained in the Constituent Assembly that "Union of States" was preferred over "Federation of States" because the Indian Federation is not the result of an agreement among states, and no state has the right to secede. India is an indestructible Union of destructible States.',
      statutoryAnchor: 'Article 1, Part I',
      precedentRef: 'State of West Bengal v. Union of India (1963)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'art-3',
    deck: 'articles',
    category: 'Union & Territory',
    subheading: 'Article 3',
    front: 'Article 3: Can Parliament reorganize a State boundary without the consent of the State Legislature?',
    back: {
      coreRule: 'Yes. Parliament has plenary legislative power under Article 3 to form new States, alter areas, or change State names by simple majority.',
      statutoryDetails: 'Under the Proviso to Article 3, the President refers the Bill to the concerned State Legislature for expressing views within a specified period. However, Parliament is NOT bound by the views of the State Legislature.',
      statutoryAnchor: 'Article 3 Proviso, Part I',
      precedentRef: 'Babulal Parate v. State of Bombay (1960); In re Berubari Union (1960)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'art-12',
    deck: 'articles',
    category: 'Fundamental Rights',
    subheading: 'Definition of "The State"',
    front: 'Article 12: Which entities qualify as "The State" for writ enforcement?',
    back: {
      coreRule: 'Includes Government and Parliament of India, Government and Legislature of each State, all local authorities, and "other authorities" under the control of GoI.',
      statutoryDetails: 'Ajay Hasia (1981) articulated the 6-factor instrumentality test: deep and pervasive State financial, administrative, and functional control, monopoly status, and public duty. Purely private bodies without statutory functions (e.g., BCCI in Zee Telefilms) do not qualify.',
      statutoryAnchor: 'Article 12, Part III',
      precedentRef: 'Ajay Hasia (1981); R.D. Shetty (1979); Zee Telefilms v. UOI (2005)'
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
    id: 'art-15',
    deck: 'articles',
    category: 'Fundamental Rights',
    subheading: 'Non-Discrimination',
    front: 'Article 15(1): What are the 5 exclusive prohibited grounds of discrimination?',
    back: {
      coreRule: 'The State shall not discriminate against any citizen on grounds ONLY of Religion, Race, Caste, Sex, Place of Birth, or any of them.',
      statutoryDetails: 'Crucial word is "ONLY". If discrimination is based on other rational grounds (such as domicile or educational qualifications) alongside one of the five, it is not hit by 15(1). Sub-clauses 15(3), 15(4), 15(5), and 15(6) provide protective affirmative action.',
      statutoryAnchor: 'Article 15(1)–(6), Part III',
      precedentRef: 'D.P. Joshi v. State of Bharat (1955); State of Madras v. Champakam Dorairajan (1951)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'art-16',
    deck: 'articles',
    category: 'Public Employment',
    subheading: 'Reservation Ceilings',
    front: 'Article 16: What is the 50% reservation ceiling established in Indra Sawhney (1992)?',
    back: {
      coreRule: 'Total reservations under Article 16(4) should not ordinarily exceed 50% of available seats in any given year, ensuring balancing with administrative efficiency (Art 335).',
      statutoryDetails: '9-Judge Bench also excluded the "Creamy Layer" from OBC quotas, held reservations apply only to initial appointments and not promotions (partially altered by 77th Amd Art 16(4A)), and held carry-forward rule cannot breach the 50% limit.',
      statutoryAnchor: 'Articles 16(1), 16(4), 16(4A), 335',
      precedentRef: 'Indra Sawhney v. Union of India (1992); M. Nagaraj (2006)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'art-17',
    deck: 'articles',
    category: 'Fundamental Rights',
    subheading: 'Abolition of Untouchability',
    front: 'Article 17: Is Article 17 enforceable against private individuals?',
    back: {
      coreRule: 'Yes. Article 17 is an absolute Fundamental Right enforceable against the State as well as private individuals and non-state entities.',
      statutoryDetails: '"Untouchability" is abolished and its practice in any form is forbidden. Enforced through the Protection of Civil Rights Act, 1955, and the SC/ST (Prevention of Atrocities) Act, 1989. Has no exceptions.',
      statutoryAnchor: 'Article 17 & Article 35',
      precedentRef: 'People\'s Union for Democratic Rights (Asiad Workers Case, 1982)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'art-19-1-a',
    deck: 'articles',
    category: 'Freedom of Speech',
    subheading: 'Article 19(1)(a) & 19(2)',
    front: 'Article 19(2): What are the 8 exhaustive grounds for restricting Freedom of Speech?',
    back: {
      coreRule: '1. Sovereignty and integrity of India, 2. Security of the State, 3. Friendly relations with foreign States, 4. Public order, 5. Decency or morality, 6. Contempt of court, 7. Defamation, 8. Incitement to an offence.',
      statutoryDetails: 'Restrictions must be "REASONABLE". The 8 grounds are EXHAUSTIVE; speech cannot be suppressed on any extraneous justification outside Article 19(2) (Romesh Thappar; Shreya Singhal).',
      statutoryAnchor: 'Article 19(1)(a) & 19(2)',
      precedentRef: 'Romesh Thappar (1950); Shreya Singhal v. UOI (2015)'
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
    id: 'art-20-2',
    deck: 'articles',
    category: 'Criminal Safeguards',
    subheading: 'Double Jeopardy',
    front: 'Article 20(2): Does Article 20(2) bar departmental or administrative disciplinary proceedings?',
    back: {
      coreRule: 'No. Article 20(2) applies only when a person is prosecuted AND punished before a judicial court or tribunal of competent criminal jurisdiction.',
      statutoryDetails: 'Departmental proceedings, revenue confiscation, and service disciplinary actions do not constitute prosecution before a judicial court. An acquitted police officer can still face departmental inquiry on the same facts (Maqbool Hussain).',
      statutoryAnchor: 'Article 20(2), Part III',
      precedentRef: 'Maqbool Hussain v. State of Bombay (1953); S.A. Venkataraman (1954)'
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
      statutoryDetails: '11-Judge Bench in Kathi Kalu Oghad (1961) held physical specimens do not impart testimonial knowledge. Selvi (2010) held involuntary narco-analysis, polygraph, and brain-mapping violate Article 20(3) as testimonial compulsion.',
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
    id: 'art-22',
    deck: 'articles',
    category: 'Arrest & Detention',
    subheading: '24-Hour Magistrate Rule',
    front: 'Article 22(2): What is the constitutional mandate upon arrest of an individual?',
    back: {
      coreRule: 'Every arrested person must be produced before the nearest magistrate within 24 hours of arrest, excluding journey time, and cannot be detained beyond that without judicial authority.',
      statutoryDetails: 'Guarantees judicial oversight over executive detention. Sub-clauses 22(4)–(7) provide the constitutional regime for Preventive Detention (maximum 3 months without Advisory Board confirmation under 44th Amd).',
      statutoryAnchor: 'Article 22(1), (2), (4)–(7)',
      precedentRef: 'D.K. Basu v. State of West Bengal (1997)'
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
    id: 'art-44',
    deck: 'articles',
    category: 'Directive Principles',
    subheading: 'Uniform Civil Code',
    front: 'Article 44: What does the Constitution state regarding the Uniform Civil Code?',
    back: {
      coreRule: '"The State shall endeavour to secure for the citizens a uniform civil code throughout the territory of India."',
      statutoryDetails: 'Placed in Part IV (non-justiciable before courts under Art 37, but fundamental in governance). Supreme Court in Shah Bano (1985), Sarla Mudgal (1995), and John Vallamattom (2003) repeatedly urged statutory implementation.',
      statutoryAnchor: 'Article 44 & Article 37',
      precedentRef: 'Shah Bano (1985); Sarla Mudgal (1995)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'art-51a',
    deck: 'articles',
    category: 'Fundamental Duties',
    subheading: 'Part IV-A',
    front: 'Article 51A: How many Fundamental Duties exist, and how were they inserted?',
    back: {
      coreRule: 'There are 11 Fundamental Duties. 10 duties were inserted by the 42nd Amendment (1976) on the Swaran Singh Committee recommendation; the 11th (education for child aged 6-14, Art 51A(k)) was added by the 86th Amendment (2002).',
      statutoryDetails: 'Duties are not directly enforceable by writs, but courts use them to interpret statutory provisions and test "reasonableness" under Article 19.',
      statutoryAnchor: 'Article 51A, Part IV-A',
      precedentRef: 'AIIMS Students\' Union v. AIIMS (2002)'
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
      coreRule: 'Under Article 161 as settled in State of Haryana v. Raj Kumar (2021), the Governor CAN commute or remit a sentence of death, but the President under Article 72 retains concurrent and exclusive federal jurisdiction.',
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
    id: 'art-74',
    deck: 'articles',
    category: 'Union Executive',
    subheading: 'Aid and Advice',
    front: 'Article 74(1): Can the President act without or against the advice of the Cabinet?',
    back: {
      coreRule: 'No. The President must act in accordance with the advice of the Council of Ministers headed by the Prime Minister. 44th Amendment proviso allows the President to require reconsideration ONCE, but the President must act on reconsidered advice.',
      statutoryDetails: 'Article 74(2) bars courts from inquiring into what advice was tendered by Ministers to the President. However, the factual material on which advice is based is subject to judicial review (S.R. Bommai).',
      statutoryAnchor: 'Article 74(1), (2)',
      precedentRef: 'Shamsher Singh v. State of Punjab (1974); S.R. Bommai (1994)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'art-105',
    deck: 'articles',
    category: 'Parliamentary Privileges',
    subheading: 'Legislative Speech Immunity',
    front: 'Article 105(2): Does speech immunity protect an MP who accepts a bribe to vote in Parliament?',
    back: {
      coreRule: 'No. 7-Judge Constitution Bench in Sita Soren (2024) unanimously overruled P.V. Narasimha Rao (1998) and held bribery is complete outside the House and receives NO immunity under Article 105(2) or 194(2).',
      statutoryDetails: 'Bribery is independent of the performance of the vote or speech. The parliamentary privilege is intended to foster collective deliberation, not subvert democratic integrity.',
      statutoryAnchor: 'Article 105(2) & Article 194(2)',
      precedentRef: 'Sita Soren v. Union of India (2024); P.V. Narasimha Rao (1998)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'art-110',
    deck: 'articles',
    category: 'Parliamentary Procedures',
    subheading: 'Money Bills',
    front: 'Article 110: What are the conclusive consequences of a Money Bill certified by the Speaker?',
    back: {
      coreRule: 'Rajya Sabha cannot reject or amend a Money Bill; it can only make recommendations within 14 days, failing which the Bill is deemed passed.',
      statutoryDetails: 'Article 110(3) states the decision of the Lok Sabha Speaker is final. However, a 7-Judge Bench reference in Roger Mathew (2019) is reviewing whether Speaker\'s certification is subject to judicial review if ordinary legislative matters are masqueraded as Money Bills (Aadhaar Case).',
      statutoryAnchor: 'Article 109 & Article 110',
      precedentRef: 'K.S. Puttaswamy (Aadhaar-5J, 2018); Roger Mathew (2019)'
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
    id: 'art-141-142',
    deck: 'articles',
    category: 'Supreme Court Powers',
    subheading: 'Law of Land & Complete Justice',
    front: 'Articles 141 & 142: How do they empower the Supreme Court?',
    back: {
      coreRule: 'Art 141: Law declared by the Supreme Court is binding on all courts within India. Art 142: Supreme Court may pass any decree or order necessary for doing "complete justice" in any cause.',
      statutoryDetails: 'Article 142 power is curative and equitable, not bound by procedural technicalities, but cannot directly contravene substantive statutory prohibitions (Supreme Court Bar Association v. UOI).',
      statutoryAnchor: 'Articles 141 & 142',
      precedentRef: 'Union Carbide (1991); Supreme Court Bar Association (1998); Shilpa Sailesh (2023)'
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
  {
    id: 'art-368',
    deck: 'articles',
    category: 'Constituent Power',
    subheading: 'Amendment of Constitution',
    front: 'Article 368: What are the three categories of constitutional amendments in India?',
    back: {
      coreRule: '1. Simple majority of Parliament (Articles 2, 3, 4, 169). 2. Special majority under Art 368(2) (majority of total membership + 2/3 present & voting). 3. Special majority + ratification by 1/2 State Legislatures (federal provisions, Art 54, 73, 162, 241, Chap IV Part V, Chap V Part VI, Chap I Part XI, Lists, Art 368).',
      statutoryDetails: 'All amendments are subject to the unbreachable ceiling of the Basic Structure Doctrine (Kesavananda Bharati).',
      statutoryAnchor: 'Article 368(1), (2)',
      precedentRef: 'Kesavananda Bharati (1973); Minerva Mills (1980)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },

  // =========================================================================
  // 2. LANDMARK PRECEDENTS DECK
  // =========================================================================
  {
    id: 'case-kesavananda',
    deck: 'cases',
    category: 'Basic Structure',
    subheading: '13-Judge Constitution Bench',
    front: 'Kesavananda Bharati v. State of Kerala (1973)',
    back: {
      coreRule: 'Parliament has wide constituent power to amend any part of the Constitution under Article 368, but CANNOT alter, damage, or destroy its Basic Structure.',
      statutoryDetails: 'Decided by 7:6 majority. Overruled Golak Nath. Held Fundamental Rights can be amended so long as basic democratic, secular, and federal pillars remain intact.',
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
      coreRule: 'Right to Privacy is a Fundamental Right guaranteed under Article 21, natural to human dignity, bodily autonomy, and informational self-determination.',
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
    id: 'case-bommai',
    deck: 'cases',
    category: 'Federalism & Article 356',
    subheading: '9-Judge Constitution Bench',
    front: 'S.R. Bommai v. Union of India (1994)',
    back: {
      coreRule: 'Federalism and Secularism are essential features of the Basic Structure. Proclamation of President\'s Rule under Article 356 is subject to judicial review.',
      statutoryDetails: 'Floor test in the Legislative Assembly is the only constitutional forum to test majority, not the Governor\'s subjective assessment. Courts can restore dissolved Assembly if proclamation is mala fide.',
      statutoryAnchor: 'Articles 356, 163, 164',
      precedentRef: '(1994) 3 SCC 1'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'case-maneka-gandhi',
    deck: 'cases',
    category: 'Substantive Due Process',
    subheading: '7-Judge Constitution Bench',
    front: 'Maneka Gandhi v. Union of India (1978)',
    back: {
      coreRule: 'Procedure established by law depriving personal liberty under Article 21 must be just, fair, reasonable, and non-arbitrary (Golden Triangle of Articles 14, 19, 21).',
      statutoryDetails: 'Right to travel abroad recognized as personal liberty. Principles of Natural Justice (Audi Alteram Partem) read into administrative impoundment of passports.',
      statutoryAnchor: 'Articles 14, 19, 21',
      precedentRef: '(1978) 1 SCC 248'
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
  {
    id: 'case-indra-sawhney',
    deck: 'cases',
    category: 'Affirmative Action',
    subheading: '9-Judge Constitution Bench',
    front: 'Indra Sawhney v. Union of India (Mandal Case, 1992)',
    back: {
      coreRule: 'Upheld 27% OBC reservation in Central Government employment subject to the exclusion of the "Creamy Layer" and a 50% overall cap on total reservations.',
      statutoryDetails: 'Held backward classes can be identified on the basis of caste plus economic/educational factors. Struck down 10% economic reservation introduced by executive memo.',
      statutoryAnchor: 'Article 16(4) & Article 340',
      precedentRef: '1992 Supp (3) SCC 217'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'case-sita-soren',
    deck: 'cases',
    category: 'Parliamentary Immunity',
    subheading: '7-Judge Constitution Bench',
    front: 'Sita Soren v. Union of India (2024)',
    back: {
      coreRule: 'Members of Parliament and State Legislatures do NOT enjoy immunity under Articles 105(2) and 194(2) from criminal prosecution for taking a bribe to vote or speak.',
      statutoryDetails: 'Unanimously overruled P.V. Narasimha Rao (1998). Held parliamentary privilege must be tested against "necessity" for legislative function; bribery destroys democracy.',
      statutoryAnchor: 'Articles 105(2) & 194(2)',
      precedentRef: '(2024) 5 SCC 629'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'case-ir-coelho',
    deck: 'cases',
    category: 'Ninth Schedule Immunity',
    subheading: '9-Judge Constitution Bench',
    front: 'I.R. Coelho v. State of Tamil Nadu (2007)',
    back: {
      coreRule: 'All statutes placed into the Ninth Schedule AFTER April 24, 1973 (Kesavananda judgment date) are subject to judicial review on the touchstone of the Basic Structure.',
      statutoryDetails: 'Ninth Schedule (Art 31B) does not confer blanket immunity. If an amendment to the Ninth Schedule destroys Fundamental Rights forming part of the basic structure, it will be invalidated.',
      statutoryAnchor: 'Article 31B & Ninth Schedule',
      precedentRef: '(2007) 2 SCC 1'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },

  // =========================================================================
  // 3. THE 12 SCHEDULES DECK (TEARS OF OLD PM)
  // =========================================================================
  {
    id: 'sch-1',
    deck: 'schedules',
    category: '12 Schedules',
    subheading: 'Letter "T"',
    front: 'First Schedule (T — Territory): What does it specify?',
    back: {
      coreRule: 'Lists the names and territorial extent of the 28 States and 8 Union Territories.',
      statutoryDetails: 'Whenever a State is created, merged, or its boundary altered under Articles 2 and 3, the First Schedule must be amended by Parliament.',
      statutoryAnchor: 'Articles 1 & 4',
      precedentRef: 'In re Berubari Union (1960)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'sch-2',
    deck: 'schedules',
    category: '12 Schedules',
    subheading: 'Letter "E"',
    front: 'Second Schedule (E — Emoluments): Who is covered under its provisions?',
    back: {
      coreRule: 'Salaries, allowances, and privileges of the President, Governors, Lok Sabha Speaker/Deputy Speaker, Rajya Sabha Chairman/Deputy Chairman, Supreme Court & High Court Judges, and the CAG.',
      statutoryDetails: 'Their salaries and allowances cannot be varied to their disadvantage during their term of office (except during Article 360 Financial Emergency).',
      statutoryAnchor: 'Articles 59(3), 65(3), 75(6), 97, 125, 148(3), 158(3), 164(5), 186, 221',
      precedentRef: 'Part D of Second Schedule (Judges)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'sch-3',
    deck: 'schedules',
    category: '12 Schedules',
    subheading: 'Letter "A"',
    front: 'Third Schedule (A — Affirmations & Oaths): Which key dignitary is NOT included?',
    back: {
      coreRule: 'The President, Vice-President, and Governors are NOT in the Third Schedule; their oaths are set out directly in substantive articles (Art 60 President, Art 69 VP, Art 159 Governor).',
      statutoryDetails: 'Third Schedule contains oath forms for Union/State Ministers, parliamentary and assembly candidates, MPs and MLAs, Supreme Court & High Court Judges, and the CAG.',
      statutoryAnchor: 'Articles 75(4), 99, 124(6), 148(2), 164(3), 188, 219',
      precedentRef: 'Har Sharan Varma (1971)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'sch-4',
    deck: 'schedules',
    category: '12 Schedules',
    subheading: 'Letter "R"',
    front: 'Fourth Schedule (R — Rajya Sabha): How are seats allocated?',
    back: {
      coreRule: 'Allocation of seats in the Council of States (Rajya Sabha) to each State and Union Territory based on population.',
      statutoryDetails: 'Unlike the US Senate (which grants equal representation of 2 seats to every state), the Indian Rajya Sabha reflects demographic asymmetry (e.g., UP has 31 seats, Sikkim has 1). Currently 233 elected + 12 nominated.',
      statutoryAnchor: 'Articles 4(1) & 80(2)',
      precedentRef: 'Kuldip Nayar v. Union of India (2006)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'sch-5',
    deck: 'schedules',
    category: '12 Schedules',
    subheading: 'Letter "S"',
    front: 'Fifth Schedule (S — Scheduled Areas): What is the Governor’s extraordinary legislative power?',
    back: {
      coreRule: 'Governor may direct that any Act of Parliament or State Legislature shall NOT apply to a Scheduled Area, or apply with modifications/exceptions.',
      statutoryDetails: 'Applies to Scheduled Areas in 10 states (excluding the 4 North-Eastern states in 6th Schedule). Governor is assisted by a Tribes Advisory Council (TAC). Supreme Court in Samatha (1997) held tribal land cannot be leased to private mining corporations.',
      statutoryAnchor: 'Article 244(1)',
      precedentRef: 'Samatha v. State of Andhra Pradesh (1997)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'sch-6',
    deck: 'schedules',
    category: '12 Schedules',
    subheading: 'Letter "O"',
    front: 'Sixth Schedule (O — Other Tribal Areas): Which 4 States are covered, and what autonomy exists?',
    back: {
      coreRule: 'Covers Assam, Meghalaya, Tripura, and Mizoram (AMTM) through autonomous District Councils and Regional Councils.',
      statutoryDetails: 'Councils have plenary power to make laws on land, forests, village councils, and customary law, and exercise civil/criminal judicial powers through tribal customary courts.',
      statutoryAnchor: 'Articles 244(2) & 275(1)',
      precedentRef: 'Sixth Schedule to the Constitution'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'sch-7',
    deck: 'schedules',
    category: '12 Schedules',
    subheading: 'Letter "F"',
    front: 'Seventh Schedule (F — Federal Lists): What are the three lists and subject distribution?',
    back: {
      coreRule: 'List I (Union List: ~100 items), List II (State List: ~61 items), and List III (Concurrent List: ~52 items).',
      statutoryDetails: 'Union List contains national priorities (defense, foreign affairs, banking, atomic energy). Residuary power under Article 248 is vested in Parliament. Repugnancy on List III resolved under Art 254.',
      statutoryAnchor: 'Article 246 & Article 248',
      precedentRef: 'Hoechst Pharmaceuticals (1983); Mohit Minerals (2022)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'sch-8',
    deck: 'schedules',
    category: '12 Schedules',
    subheading: 'Letter "O"',
    front: 'Eighth Schedule (O — Official Languages): How many languages are listed, and which was added last?',
    back: {
      coreRule: 'Lists 22 officially recognized languages. Originally 14 in 1950.',
      statutoryDetails: 'Sindhi added by 21st Amd (1967); Konkani, Manipuri, Nepali by 71st Amd (1992); Bodo, Dogri, Maithili, Santhali by 92nd Amd (2003). English is NOT in the Eighth Schedule.',
      statutoryAnchor: 'Articles 344(1) & 351',
      precedentRef: 'Hindi development directive under Art 351'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'sch-9',
    deck: 'schedules',
    category: '12 Schedules',
    subheading: 'Letter "L"',
    front: 'Ninth Schedule (L — Land Reforms & Validation): What was its original purpose and current status?',
    back: {
      coreRule: 'Inserted by 1st Amendment (1951) via Article 31B to protect agrarian land reform and abolition of Zamindari laws from Fundamental Rights challenges.',
      statutoryDetails: 'Now subject to the Basic Structure test post-1973 under I.R. Coelho (2007). Acts violating the basic structure can be invalidated despite Ninth Schedule shield.',
      statutoryAnchor: 'Article 31B',
      precedentRef: 'I.R. Coelho v. State of Tamil Nadu (2007)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'sch-10',
    deck: 'schedules',
    category: '12 Schedules',
    subheading: 'Letter "D"',
    front: 'Tenth Schedule (D — Defection): What are the grounds of disqualification?',
    back: {
      coreRule: '1. Voluntarily giving up party membership. 2. Voting or abstaining in the House contrary to party direction (whip) without prior permission. 3. Independent member joining a political party. 4. Nominated member joining a party after 6 months.',
      statutoryDetails: 'Inserted by 52nd Amendment (1985). 91st Amendment (2003) deleted the 1/3rd split defense. Kihoto Hollohan (1992) held Speaker acts as a tribunal whose final order is open to judicial review.',
      statutoryAnchor: 'Articles 102(2) & 191(2)',
      precedentRef: 'Kihoto Hollohan (1992); Nabam Rebia (2016); Subhash Desai (2023)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'sch-11-12',
    deck: 'schedules',
    category: '12 Schedules',
    subheading: 'Letters "P" & "M"',
    front: 'Eleventh & Twelfth Schedules (P — Panchayats, M — Municipalities): How many functional subjects are allocated?',
    back: {
      coreRule: 'Eleventh Schedule (73rd Amd) allocates 29 functional subjects to Panchayats. Twelfth Schedule (74th Amd) allocates 18 functional subjects to Municipalities.',
      statutoryDetails: 'Both schedules confer local self-governance mandates (agriculture, sanitation, drinking water, roads, urban planning). Enforced through State Election Commissions (Art 243K/243ZA) and State Finance Commissions (Art 243I/243Y).',
      statutoryAnchor: 'Articles 243G & 243W',
      precedentRef: '73rd & 74th Constitutional Amendment Acts, 1992'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },

  // =========================================================================
  // 4. CONSTITUTIONAL DOCTRINES DECK
  // =========================================================================
  {
    id: 'doc-basic-structure',
    deck: 'doctrines',
    category: 'Constitutional Doctrines',
    subheading: 'Basic Structure Doctrine',
    front: 'Basic Structure Doctrine: What constitutes the unalterable core of the Constitution?',
    back: {
      coreRule: 'Parliament\'s constituent power under Article 368 is limited; it cannot emasculate core pillars: Democracy, Rule of Law, Judicial Review, Secularism, Federalism, and Separation of Powers.',
      statutoryDetails: 'Born in Kesavananda Bharati (1973), applied to strike down 39th Amendment in Indira Gandhi v. Raj Narain (1975), and 42nd Amendment in Minerva Mills (1980).',
      statutoryAnchor: 'Article 368 vs Articles 13, 14, 19, 21',
      precedentRef: 'Kesavananda (1973); Indira Gandhi (1975); Minerva Mills (1980)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'doc-pith-substance',
    deck: 'doctrines',
    category: 'Constitutional Doctrines',
    subheading: 'Pith and Substance',
    front: 'Doctrine of Pith and Substance: How does it resolve legislative list overlaps?',
    back: {
      coreRule: 'To determine whether a statute is within legislative competence, courts examine its true nature and character ("pith and substance"). If it substantially falls in a competent list, incidental encroachment on another list is disregarded.',
      statutoryDetails: 'Borrowed from the Privy Council in Canadian appeals. Applied in Prafulla Kumar Mukherjee (1947) to uphold Bengal Money Lenders Act even though it incidentally affected negotiable instruments.',
      statutoryAnchor: 'Article 246 & Seventh Schedule',
      precedentRef: 'Prafulla Kumar Mukherjee (1947); State of Bombay v. F.N. Balsara (1951)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'doc-severability',
    deck: 'doctrines',
    category: 'Constitutional Doctrines',
    subheading: 'Doctrine of Severability',
    front: 'Doctrine of Severability: When is an unconstitutional provision severed rather than striking the entire statute?',
    back: {
      coreRule: 'Under Article 13(1) and (2), only the unconstitutional clauses of an enactment are void if the valid portion can operate independently and still fulfill the legislative intent.',
      statutoryDetails: 'If the valid and invalid parts are so inextricably interwoven that they cannot be separated without altering the legislative scheme, the entire enactment must be struck down (R.M.D. Chamarbaugwalla).',
      statutoryAnchor: 'Article 13(1), (2)',
      precedentRef: 'A.K. Gopalan (1950); R.M.D. Chamarbaugwalla v. UOI (1957)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'doc-eclipse',
    deck: 'doctrines',
    category: 'Constitutional Doctrines',
    subheading: 'Doctrine of Eclipse',
    front: 'Doctrine of Eclipse: What happens to a pre-constitutional law that violates Fundamental Rights?',
    back: {
      coreRule: 'A pre-constitutional law in conflict with Part III is not dead ab initio; it remains dormant / "eclipsed" by the shadow of the Fundamental Right. If a constitutional amendment removes the shadow, the law becomes active again without re-enactment.',
      statutoryDetails: 'Settled in Bhikaji Narain (1955). Deep Chand (1959) clarified that the Doctrine of Eclipse applies only to pre-constitutional laws under 13(1); post-constitutional laws under 13(2) are still-born and void ab initio.',
      statutoryAnchor: 'Article 13(1) vs 13(2)',
      precedentRef: 'Bhikaji Narain Dhakras (1955); Deep Chand (1959)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'doc-colorable',
    deck: 'doctrines',
    category: 'Constitutional Doctrines',
    subheading: 'Colorable Legislation',
    front: 'Doctrine of Colorable Legislation: "What cannot be done directly cannot be done indirectly"',
    back: {
      coreRule: 'Tests whether the legislature had the constitutional power to enact the statute, or whether it disguised an impermissible legislative purpose under the garb of a permissible power.',
      statutoryDetails: 'Colorable legislation concerns legislative competence, NOT legislative motive or bona fides. If the legislature has competence, motive is irrelevant; if it lacks competence, it cannot disguise the invasion.',
      statutoryAnchor: 'Article 246',
      precedentRef: 'K.C. Gajapati Narayan Deo v. State of Orissa (1953)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'doc-territorial-nexus',
    deck: 'doctrines',
    category: 'Constitutional Doctrines',
    subheading: 'Territorial Nexus',
    front: 'Doctrine of Territorial Nexus: When can a State Legislature make extra-territorial laws?',
    back: {
      coreRule: 'A State law with extra-territorial operation is valid if there is a real, legitimate, and substantial nexus between the subject matter of the law and the enacting State.',
      statutoryDetails: 'Under Article 245(1), a State law is normally limited to its territory. But in State of Bombay v. R.M.D. Chamarbaugwalla (1957), a tax on lotteries published outside Bombay was upheld because the prize competitions were heavily subscribed to by residents within Bombay.',
      statutoryAnchor: 'Article 245(1), (2)',
      precedentRef: 'State of Bombay v. R.M.D. Chamarbaugwalla (1957)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },

  // =========================================================================
  // 5. CONSTITUTIONAL AMENDMENTS DECK (1 to 106)
  // =========================================================================
  {
    id: 'amend-1',
    deck: 'amendments',
    category: 'First Amendment',
    subheading: 'Year: 1951',
    front: '1st Constitutional Amendment Act, 1951: What major structures did it create?',
    back: {
      coreRule: 'Inserted Ninth Schedule (Art 31B) to shield land reform laws, inserted Article 15(4) for SEBC quotas (overriding Champakam Dorairajan), and added "Public Order" & "Friendly foreign relations" to 19(2).',
      statutoryDetails: 'Enacted by the Provisional Parliament before the first general election. Shankari Prasad (1951) upheld its constitutional validity.',
      statutoryAnchor: 'Articles 15(4), 19(2), 31A, 31B, Ninth Schedule',
      precedentRef: 'Shankari Prasad Singh Deo v. UOI (1951)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'amend-24',
    deck: 'amendments',
    category: 'Constituent Supremacy',
    subheading: 'Year: 1971',
    front: '24th Constitutional Amendment Act, 1971: How did it counter Golak Nath?',
    back: {
      coreRule: 'Affirmed that Parliament can amend any part of the Constitution, including Part III, under Article 368, and declared that Article 13 does not apply to Article 368 constitutional amendments.',
      statutoryDetails: 'Made Presidential assent to Constitutional Amendment Bills mandatory (shall give assent). Upheld in Kesavananda Bharati subject to the Basic Structure ceiling.',
      statutoryAnchor: 'Article 13(4) & Article 368(1), (3)',
      precedentRef: 'Kesavananda Bharati v. State of Kerala (1973)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
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
    id: 'amend-73-74',
    deck: 'amendments',
    category: 'Local Self-Governance',
    subheading: 'Year: 1992',
    front: '73rd & 74th Amendments: Constitutionalizing Panchayati Raj & Municipalities',
    back: {
      coreRule: 'Inserted Part IX (Arts 243-243O) & Eleventh Schedule for Panchayats; Part IXA (Arts 243P-243ZG) & Twelfth Schedule for Municipalities.',
      statutoryDetails: 'Mandated 3-tier structure (Gram, Intermediate, District), 5-year fixed tenure, reservation for SC/ST and minimum 1/3rd reservation for Women, State Finance Commission, and State Election Commission.',
      statutoryAnchor: 'Parts IX & IXA, 11th & 12th Schedules',
      precedentRef: '73rd & 74th Constitutional Amendment Acts, 1992'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'amend-86',
    deck: 'amendments',
    category: 'Right to Education',
    subheading: 'Year: 2002',
    front: '86th Constitutional Amendment Act, 2002: Tripartite Education Architecture',
    back: {
      coreRule: 'Inserted Article 21A making free and compulsory education for children aged 6 to 14 a Fundamental Right. Replaced Article 45 DPSP (early childhood care up to age 6). Added 11th Fundamental Duty under Article 51A(k).',
      statutoryDetails: 'Enforced through the Right of Children to Free and Compulsory Education (RTE) Act, 2009. Upheld in Society for Unaided Private Schools v. UOI (2012).',
      statutoryAnchor: 'Articles 21A, 45, 51A(k)',
      precedentRef: 'Society for Unaided Private Schools (2012)'
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
  {
    id: 'amend-106',
    deck: 'amendments',
    category: 'Women’s Reservation',
    subheading: 'Year: 2023',
    front: '106th Constitutional Amendment Act, 2023: Nari Shakti Vandan Adhiniyam',
    back: {
      coreRule: 'Reserves 1/3rd (33%) of seats in the Lok Sabha, State Legislative Assemblies, and Delhi Assembly for Women.',
      statutoryDetails: 'Inserted Articles 330A, 332A, and 239AA(2)(b). Takes effect after the first delimitation conducted following the next census; operative for an initial period of 15 years.',
      statutoryAnchor: 'Articles 330A, 332A, 334A',
      precedentRef: '106th Constitutional Amendment Act, 2023'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },

  // =========================================================================
  // 6. LATIN MAXIMS & STATUTORY CANONS DECK
  // =========================================================================
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
    id: 'maxim-nemo-judex',
    deck: 'maxims',
    category: 'Rule Against Bias',
    subheading: 'Natural Justice',
    front: 'Nemo judex in causa sua',
    back: {
      coreRule: 'No one should be a judge in their own cause (Rule Against Bias).',
      statutoryDetails: 'Covers pecuniary bias (disqualifies automatically), personal bias, and subject-matter bias. The test is not actual bias, but real likelihood or reasonable apprehension of bias.',
      statutoryAnchor: 'Article 14 & Article 21',
      precedentRef: 'A.K. Kraipak v. UOI (1969); Gullapalli Nageswara Rao (1959)'
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
    id: 'maxim-sub-silentio',
    deck: 'maxims',
    category: 'Precedent Theory',
    subheading: 'Latin Maxim',
    front: 'Sub silentio',
    back: {
      coreRule: 'Under silence. A precedent is not binding on a proposition that was not consciously argued or considered by the court.',
      statutoryDetails: 'Where a point of law is merely passed over in silence in a judgment without conscious application of judicial mind, it does not constitute binding ratio decidendi.',
      statutoryAnchor: 'Article 141',
      precedentRef: 'Municipal Corporation of Delhi v. Gurnam Kaur (1989)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'maxim-ejusdem-generis',
    deck: 'maxims',
    category: 'Statutory Interpretation',
    subheading: 'Canon of Construction',
    front: 'Ejusdem generis ("Of the same kind or nature")',
    back: {
      coreRule: 'When general words follow specific words belonging to a distinct category or genus, the general words are restricted to the same class as the specific words.',
      statutoryDetails: 'Requires: 1. Statutory enumeration of specific words, 2. The subjects of a single identifiable genus, 3. The genus is not exhausted by the enumeration, 4. Followed by general terms.',
      statutoryAnchor: 'Canons of Statutory Construction',
      precedentRef: 'Siddeshwari Cotton Mills v. UOI (1989)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'maxim-noscitur-a-sociis',
    deck: 'maxims',
    category: 'Statutory Interpretation',
    subheading: 'Canon of Construction',
    front: 'Noscitur a sociis ("Known by its associates")',
    back: {
      coreRule: 'The meaning of a doubtful or ambiguous word in a statute is judged by the company it keeps.',
      statutoryDetails: 'Words grouped in a provision lend color and meaning to each other. Broader than ejusdem generis and applies to contextual statutory harmony.',
      statutoryAnchor: 'Canons of Statutory Construction',
      precedentRef: 'State of Assam v. R. Mahanta (1969)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  },
  {
    id: 'maxim-ubi-jus-ibi-remedium',
    deck: 'maxims',
    category: 'Remedies',
    subheading: 'Common Law Maxim',
    front: 'Ubi jus ibi remedium',
    back: {
      coreRule: 'Where there is a right, there is a remedy.',
      statutoryDetails: 'Dr. Ambedkar relied upon this maxim to design Article 32. A right without a remedy is a toothless declaration.',
      statutoryAnchor: 'Article 32 & Article 226',
      precedentRef: 'Ashby v. White (1703); Sardar Amarjit Singh Kalra (2003)'
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0
  }
];

// =========================================================================
// DYNAMIC APP-WIDE FLASHCARD CATALOG GENERATOR (ZERO DUPLICATES)
// Hydrates all 505 Bare Act Articles, 136 Landmark Cases, 12 Schedules,
// 10 Constitutional Doctrines, 20 Landmark Amendments, 215 Legal Dictionary
// Terms & Maxims, and all 15 Bootcamp Days while preserving the 71 flagship
// handcrafted cards & migrating existing SRS Box 1-5 progress seamlessly.
// =========================================================================

const normalizeKey = (value: string): string =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, '');

const normalizeArticleNum = (raw: string): string =>
  raw.replace(/^art(?:icle)?s?\.?\s*/i, '').trim().toUpperCase();

// Canonical mapping from flagship handcrafted card IDs to source items
const FLAGSHIP_ARTICLE_MAP: Record<string, { articleNum: string; part: string }> = {
  'art-1': { articleNum: '1', part: 'Part I' },
  'art-3': { articleNum: '3', part: 'Part I' },
  'art-12': { articleNum: '12', part: 'Part III' },
  'art-13': { articleNum: '13', part: 'Part III' },
  'art-14': { articleNum: '14', part: 'Part III' },
  'art-15': { articleNum: '15', part: 'Part III' },
  'art-16': { articleNum: '16', part: 'Part III' },
  'art-17': { articleNum: '17', part: 'Part III' },
  'art-19-1-a': { articleNum: '19', part: 'Part III' },
  'art-20-1': { articleNum: '20', part: 'Part III' },
  'art-20-2': { articleNum: '20', part: 'Part III' },
  'art-20-3': { articleNum: '20', part: 'Part III' },
  'art-21': { articleNum: '21', part: 'Part III' },
  'art-22': { articleNum: '22', part: 'Part III' },
  'art-32': { articleNum: '32', part: 'Part III' },
  'art-44': { articleNum: '44', part: 'Part IV' },
  'art-51a': { articleNum: '51A', part: 'Part IVA' },
  'art-72-161': { articleNum: '72', part: 'Part V' },
  'art-74': { articleNum: '74', part: 'Part V' },
  'art-105': { articleNum: '105', part: 'Part V' },
  'art-110': { articleNum: '110', part: 'Part V' },
  'art-123-213': { articleNum: '123', part: 'Part V' },
  'art-141-142': { articleNum: '141', part: 'Part V' },
  'art-356': { articleNum: '356', part: 'Part XVIII' },
  'art-368': { articleNum: '368', part: 'Part XX' },
};

const FLAGSHIP_DOCTRINE_TO_DATA_ID: Record<string, string> = {
  'doc-basic-structure': 'basic-structure',
  'doc-pith-substance': 'pith-and-substance',
  'doc-severability': 'severability',
  'doc-eclipse': 'eclipse',
  'doc-colorable': 'colorable-legislation',
  'doc-territorial-nexus': 'territorial-nexus',
};

const FLAGSHIP_AMENDMENT_NUMBER_MAP: Record<string, number[]> = {
  'amend-1': [1],
  'amend-24': [24],
  'amend-42': [42],
  'amend-44': [44],
  'amend-52-91': [52, 91],
  'amend-73-74': [73, 74],
  'amend-86': [86],
  'amend-101': [101],
  'amend-103': [103],
  'amend-106': [106],
};

// Lookup indexes populated once when catalog builds
const articleNumToCardId = new Map<string, string>();
const caseIdToCardId = new Map<string, string>();
const doctrineIdToCardId = new Map<string, string>();
const scheduleNumToCardId = new Map<number, string>();
const amendmentNumToCardId = new Map<number, string>();
const dictTermToCardId = new Map<string, string>();

let cachedMasterCatalog: Flashcard[] | null = null;

function buildMasterFlashcardCatalog(): Flashcard[] {
  if (cachedMasterCatalog) return cachedMasterCatalog;

  const catalog: Flashcard[] = [];
  const bareActByNum = new Map(BARE_ACT_CATALOG.map((a) => [normalizeArticleNum(a.number), a]));
  const doctrineById = new Map(DOCTRINES_DATA.map((d) => [d.id, d]));
  const scheduleByNum = new Map(SCHEDULES_DATA.map((s) => [s.number, s]));
  const dictByNormalized = new Map(LEGAL_DICTIONARY.map((t) => [normalizeKey(t.term), t]));

  const coveredArticleNums = new Set<string>();
  const coveredCaseKeys = new Set<string>();
  const coveredScheduleNums = new Set<number>();
  const coveredDoctrineIds = new Set<string>();
  const coveredAmendmentNums = new Set<number>();
  const coveredDictKeys = new Set<string>();

  // 1. Seed & enrich all flagship curated cards first (preserving exact IDs)
  for (const rawCard of INITIAL_FLASHCARDS) {
    // Replace combined sch-11-12 with dedicated sch-11 and sch-12 below so all 12 Schedules exist cleanly
    if (rawCard.id === 'sch-11-12') continue;

    const card: Flashcard = {
      ...rawCard,
      isPriority: true,
      back: { ...rawCard.back },
    };

    if (card.deck === 'articles') {
      const mapping = FLAGSHIP_ARTICLE_MAP[card.id];
      if (mapping) {
        card.partTag = mapping.part;
        card.sourceId = mapping.articleNum;
        coveredArticleNums.add(mapping.articleNum);
        if (!articleNumToCardId.has(mapping.articleNum)) {
          articleNumToCardId.set(mapping.articleNum, card.id);
        }
        const bare = bareActByNum.get(mapping.articleNum);
        if (bare) {
          card.back.plainEnglish = bare.plainEnglish;
          card.back.realWorldExample = bare.realWorldScenario;
        }
      }
    } else if (card.deck === 'cases') {
      const frontKey = normalizeKey(card.front.replace(/\(\d{4}\)/g, ''));
      coveredCaseKeys.add(frontKey);
      card.partTag = card.category;
      // Match to DETAILED_CASE_LAWS_BY_TOPIC if available
      for (const group of DETAILED_CASE_LAWS_BY_TOPIC) {
        const match = group.cases.find((c) => {
          const ck = normalizeKey(c.caseName);
          return frontKey.includes(ck.slice(0, 14)) || ck.includes(frontKey.slice(0, 14));
        });
        if (match) {
          card.partTag = group.name;
          card.sourceId = match.id;
          caseIdToCardId.set(match.id, card.id);
          coveredCaseKeys.add(normalizeKey(match.caseName));
          card.back.plainEnglish = match.constitutionalQuestion;
          card.back.realWorldExample = match.howCourtsApplyToday;
          break;
        }
      }
    } else if (card.deck === 'schedules') {
      const matchNum = Number(card.id.replace('sch-', ''));
      if (!Number.isNaN(matchNum)) {
        coveredScheduleNums.add(matchNum);
        scheduleNumToCardId.set(matchNum, card.id);
        card.partTag = `Schedule ${matchNum}`;
        card.sourceId = String(matchNum);
        const sch = scheduleByNum.get(matchNum);
        if (sch) {
          card.back.plainEnglish = `Mnemonic "${sch.mnemonicLetter}" (${sch.mnemonicKeyword}) — ${sch.title}: ${sch.subject}`;
          card.back.realWorldExample = sch.historicalEvolution;
        }
      }
    } else if (card.deck === 'doctrines') {
      const dataId = FLAGSHIP_DOCTRINE_TO_DATA_ID[card.id];
      if (dataId) {
        coveredDoctrineIds.add(dataId);
        doctrineIdToCardId.set(dataId, card.id);
        card.partTag = 'Constitutional Doctrines';
        card.sourceId = dataId;
        const doc = doctrineById.get(dataId);
        if (doc) {
          card.back.plainEnglish = doc.plainEnglish;
          card.back.realWorldExample = doc.realWorldScenario || doc.analogy;
        }
      }
    } else if (card.deck === 'amendments') {
      const nums = FLAGSHIP_AMENDMENT_NUMBER_MAP[card.id] || [];
      nums.forEach((n) => {
        coveredAmendmentNums.add(n);
        amendmentNumToCardId.set(n, card.id);
      });
      card.partTag = card.subheading || 'Constitutional Amendment';
      if (nums[0]) card.sourceId = String(nums[0]);
    } else if (card.deck === 'maxims') {
      card.partTag = 'Latin Maxims';
      const norm = normalizeKey(card.front.split('(')[0]);
      coveredDictKeys.add(norm);
      dictTermToCardId.set(norm, card.id);
      const dictMatch = dictByNormalized.get(norm);
      if (dictMatch) {
        card.back.plainEnglish = dictMatch.detailedMeaning;
        card.back.realWorldExample = dictMatch.easyExample;
      }
    }

    catalog.push(card);
  }

  // 2. Complete all 505 Bare Act Articles (Part I to Part XXII)
  for (const art of BARE_ACT_CATALOG) {
    const normNum = normalizeArticleNum(art.number);
    if (coveredArticleNums.has(normNum)) continue;

    const cardId = `bare-art-${art.number.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
    articleNumToCardId.set(normNum, cardId);
    coveredArticleNums.add(normNum);

    const caseRefs = art.landmarkCases?.map((c) => `${c.caseName} (${c.year})`).join('; ');
    const detailsParts = [art.statutorySnippet || art.summary];
    if (art.prosecutionNote) detailsParts.push(`Exam / Courtroom Note: ${art.prosecutionNote}`);
    if (art.exceptions && art.exceptions.length > 0) {
      detailsParts.push(`Key Exceptions: ${art.exceptions.slice(0, 2).join(' • ')}`);
    }

    catalog.push({
      id: cardId,
      deck: 'articles',
      category: art.category || art.partTitle,
      subheading: `Article ${art.number} • ${art.part}${art.isRepealed ? ' (Repealed)' : ''}`,
      partTag: art.part,
      sourceId: normNum,
      isPriority: false,
      front: `Article ${art.number}: What is the constitutional mandate of "${art.title}"?`,
      back: {
        coreRule: art.summary,
        statutoryDetails: detailsParts.join('\n\n'),
        plainEnglish: art.plainEnglish,
        realWorldExample: art.realWorldScenario,
        statutoryAnchor: `Article ${art.number}, ${art.part} (${art.partTitle})`,
        precedentRef: caseRefs || (art.doctrineLinks?.length ? `Doctrines: ${art.doctrineLinks.join(', ')}` : undefined),
      },
      box: 1,
      lastReviewed: null,
      nextReview: 0,
      reps: 0,
    });
  }

  // 3. Complete all 136 Detailed Landmark Cases across all 20 Constitutional Topics
  for (const group of DETAILED_CASE_LAWS_BY_TOPIC) {
    for (const c of group.cases) {
      const ck = normalizeKey(c.caseName);
      if (caseIdToCardId.has(c.id) || coveredCaseKeys.has(ck)) {
        if (!caseIdToCardId.has(c.id)) {
          // map duplicate case name to existing card if present
          const existing = catalog.find(
            (card) => card.deck === 'cases' && normalizeKey(card.front).includes(ck.slice(0, 14))
          );
          if (existing) caseIdToCardId.set(c.id, existing.id);
        }
        continue;
      }

      const cardId = `case-law-${c.id}`;
      caseIdToCardId.set(c.id, cardId);
      coveredCaseKeys.add(ck);

      catalog.push({
        id: cardId,
        deck: 'cases',
        category: group.name,
        subheading: `${c.benchStrength}-Judge Bench • ${c.year} • ${c.citation}`,
        partTag: group.name,
        sourceId: c.id,
        isPriority: c.benchStrength >= 7,
        front: `${c.caseName} (${c.year}): What was the constitutional question and binding ratio?`,
        back: {
          coreRule: c.majorityVerdict,
          statutoryDetails: `${c.ratioDecidendi}${c.notableDissent ? `\n\nNotable Dissent: ${c.notableDissent}` : ''}`,
          plainEnglish: `Constitutional Question: ${c.constitutionalQuestion}`,
          realWorldExample: `Modern Courtroom Application: ${c.howCourtsApplyToday}`,
          statutoryAnchor: c.constitutionalArticles.join(', '),
          precedentRef: `${c.citation} (${c.governingDoctrine})`,
        },
        box: 1,
        lastReviewed: null,
        nextReview: 0,
        reps: 0,
      });
    }
  }

  // 4. Complete all 12 Schedules (including dedicated 11th & 12th Schedule cards)
  for (const sch of SCHEDULES_DATA) {
    if (coveredScheduleNums.has(sch.number)) continue;

    const cardId = `sch-${sch.number}`;
    scheduleNumToCardId.set(sch.number, cardId);
    coveredScheduleNums.add(sch.number);

    catalog.push({
      id: cardId,
      deck: 'schedules',
      category: '12 Schedules',
      subheading: `Letter "${sch.mnemonicLetter}" — ${sch.mnemonicKeyword}`,
      partTag: `Schedule ${sch.number}`,
      sourceId: String(sch.number),
      isPriority: true,
      front: `${sch.roman} (${sch.mnemonicLetter} — ${sch.mnemonicKeyword}): What subjects & constitutional provisions does it govern?`,
      back: {
        coreRule: `${sch.title}: ${sch.subject}`,
        statutoryDetails: sch.details.join(' '),
        plainEnglish: `Remember via TEARS OF OLD PM → "${sch.mnemonicLetter}" stands for ${sch.mnemonicKeyword} (${sch.title}).`,
        realWorldExample: sch.historicalEvolution,
        statutoryAnchor: sch.articlesCovered,
        precedentRef: sch.roman,
      },
      box: 1,
      lastReviewed: null,
      nextReview: 0,
      reps: 0,
    });
  }

  // 5. Complete all 10 Constitutional Doctrines (adds the 4 missing doctrines + ELI5 analogies)
  for (const doc of DOCTRINES_DATA) {
    if (coveredDoctrineIds.has(doc.id)) continue;

    const cardId = `doc-${doc.id}`;
    doctrineIdToCardId.set(doc.id, cardId);
    coveredDoctrineIds.add(doc.id);

    catalog.push({
      id: cardId,
      deck: 'doctrines',
      category: 'Constitutional Doctrines',
      subheading: doc.latinTerm ? `${doc.name} (${doc.latinTerm})` : doc.name,
      partTag: 'Constitutional Doctrines',
      sourceId: doc.id,
      isPriority: true,
      front: `${doc.name}: What is the judicial test and constitutional essence?`,
      back: {
        coreRule: doc.essence,
        statutoryDetails: `Judicial Test: ${doc.testMechanism.join(' → ')}\n\nApplication in India: ${doc.applicabilityInIndia}`,
        plainEnglish: doc.plainEnglish,
        realWorldExample: doc.realWorldScenario || doc.analogy,
        statutoryAnchor: doc.constitutionalArticles.join(', '),
        precedentRef: doc.leadCase,
      },
      box: 1,
      lastReviewed: null,
      nextReview: 0,
      reps: 0,
    });
  }

  // 6. Complete all 106 Constitutional Amendments (1951–2023)
  for (const amd of AMENDMENTS_DATA) {
    if (coveredAmendmentNums.has(amd.number)) continue;

    const cardId = `amend-${amd.number}`;
    amendmentNumToCardId.set(amd.number, cardId);
    coveredAmendmentNums.add(amd.number);

    const ordinal =
      amd.number % 100 >= 11 && amd.number % 100 <= 13
        ? `${amd.number}th`
        : amd.number % 10 === 1
          ? `${amd.number}st`
          : amd.number % 10 === 2
            ? `${amd.number}nd`
            : amd.number % 10 === 3
              ? `${amd.number}rd`
              : `${amd.number}th`;

    catalog.push({
      id: cardId,
      deck: 'amendments',
      category: `${ordinal} Amendment (${amd.year})`,
      subheading: `${amd.category} • ${amd.primeMinisterOrEra}`,
      partTag: amd.category,
      sourceId: String(amd.number),
      isPriority: Boolean(amd.isLandmark),
      front: `${ordinal} Constitutional Amendment Act (${amd.year}): What were its core objectives and impact?`,
      back: {
        coreRule: amd.keyObjectives,
        statutoryDetails: amd.significance,
        plainEnglish: amd.plainEnglish,
        realWorldExample: amd.realWorldExample,
        statutoryAnchor: amd.articlesAffected.join(', '),
        precedentRef: amd.landmarkJudicialImpact || amd.title,
      },
      box: 1,
      lastReviewed: null,
      nextReview: 0,
      reps: 0,
    });
  }

  // 7. Complete all 215 Legal Dictionary Terms & Latin Maxims
  for (const term of LEGAL_DICTIONARY) {
    const norm = normalizeKey(term.term);
    if (coveredDictKeys.has(norm)) continue;

    const cardId = `dict-${norm}`;
    dictTermToCardId.set(norm, cardId);
    coveredDictKeys.add(norm);

    catalog.push({
      id: cardId,
      deck: 'maxims',
      category: term.category,
      subheading: term.phoneticOrLiteral || term.category,
      partTag: term.category,
      sourceId: term.term,
      isPriority: term.category === 'Latin Maxims',
      front: `${term.term}: What does this legal term/maxim mean in practice?`,
      back: {
        coreRule: term.detailedMeaning,
        statutoryDetails: term.phoneticOrLiteral
          ? `Literal / Origin: ${term.phoneticOrLiteral}`
          : `Category: ${term.category}`,
        realWorldExample: term.easyExample,
        statutoryAnchor: term.statutoryOrCaseRef || term.relatedArticles?.join(', '),
        precedentRef: term.relatedArticles?.length ? `Related: ${term.relatedArticles.join(', ')}` : undefined,
      },
      box: 1,
      lastReviewed: null,
      nextReview: 0,
      reps: 0,
    });
  }

  // 8. All 15 Bootcamp Days (Core Concepts + Landmark Evolution Pairs)
  for (const day of FIFTEEN_DAY_BOOTCAMP_DATA) {
    const dayTag = `Day ${day.dayNumber}`;
    day.coreConcepts.forEach((concept, idx) => {
      catalog.push({
        id: `bootcamp-d${day.dayNumber}-concept-${idx + 1}`,
        deck: 'bootcamp',
        category: `Day ${day.dayNumber}: ${day.title}`,
        subheading: `${concept.articleAnchor} • ${day.phase}`,
        partTag: dayTag,
        sourceId: `day-${day.dayNumber}`,
        isPriority: true,
        front: `[Day ${day.dayNumber}] ${concept.heading} (${concept.articleAnchor}): Explain the constitutional framework & exam angle.`,
        back: {
          coreRule: concept.synopsis,
          statutoryDetails: concept.substantiveLaw.join(' • '),
          realWorldExample: `Courtroom / Exam Angle: ${concept.prosecutionAngle}`,
          statutoryAnchor: concept.articleAnchor,
          precedentRef: `Bootcamp Day ${day.dayNumber} — ${day.title}`,
        },
        box: 1,
        lastReviewed: null,
        nextReview: 0,
        reps: 0,
      });
    });

    day.landmarkEvolutionPairs.forEach((pair, idx) => {
      catalog.push({
        id: `bootcamp-d${day.dayNumber}-evo-${idx + 1}`,
        deck: 'bootcamp',
        category: `Day ${day.dayNumber} Evolution`,
        subheading: `${pair.subject} • Classic → Modern`,
        partTag: dayTag,
        sourceId: `day-${day.dayNumber}`,
        isPriority: true,
        front: `[Day ${day.dayNumber}] ${pair.subject}: How did the law evolve from ${pair.classicCase.name} (${pair.classicCase.year}) to ${pair.modernCase.name} (${pair.modernCase.year})?`,
        back: {
          coreRule: `Classic (${pair.classicCase.name}, ${pair.classicCase.year}): ${pair.classicCase.ratio}`,
          statutoryDetails: `Modern (${pair.modernCase.name}, ${pair.modernCase.year}): ${pair.modernCase.ratio}`,
          plainEnglish: pair.examApplicationNote,
          realWorldExample: `Exam Tip: Contrast ${pair.classicCase.bench} with ${pair.modernCase.bench}.`,
          statutoryAnchor: `Day ${day.dayNumber} Precedent Evolution`,
          precedentRef: `${pair.classicCase.name} → ${pair.modernCase.name}`,
        },
        box: 1,
        lastReviewed: null,
        nextReview: 0,
        reps: 0,
      });
    });
  }

  cachedMasterCatalog = catalog;
  return catalog;
}

// =========================================================================
// CANONICAL ID RESOLVERS FOR APP-WIDE PINNING & DEEP-LINKING
// =========================================================================

export const getCardIdForArticle = (articleNumber: string): string => {
  buildMasterFlashcardCatalog();
  const norm = normalizeArticleNum(articleNumber);
  return articleNumToCardId.get(norm) || `bare-art-${articleNumber.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
};

export const getCardIdForCase = (caseId: string): string => {
  buildMasterFlashcardCatalog();
  return caseIdToCardId.get(caseId) || `case-law-${caseId}`;
};

export const getCardIdForDoctrine = (doctrineId: string): string => {
  buildMasterFlashcardCatalog();
  return doctrineIdToCardId.get(doctrineId) || `doc-${doctrineId}`;
};

export const getCardIdForSchedule = (scheduleNumber: number): string => {
  buildMasterFlashcardCatalog();
  return scheduleNumToCardId.get(scheduleNumber) || `sch-${scheduleNumber}`;
};

export const getCardIdForAmendment = (amendmentNumber: number): string => {
  buildMasterFlashcardCatalog();
  return amendmentNumToCardId.get(amendmentNumber) || `amend-${amendmentNumber}`;
};

export const getCardIdForDictionaryTerm = (term: string): string => {
  buildMasterFlashcardCatalog();
  const norm = normalizeKey(term);
  return dictTermToCardId.get(norm) || `dict-${norm}`;
};

// =========================================================================
// LIGHTWEIGHT V3 PROGRESS STORE (DELEGATED TO flashcardPinStore)
// =========================================================================

const loadProgressMap = loadFlashcardProgressMap;
const saveProgressMap = saveFlashcardProgressMap;

function loadCustomCards(): Flashcard[] {
  try {
    const raw = localStorage.getItem(CUSTOM_CARDS_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveCustomCards(cards: Flashcard[]): void {
  try {
    localStorage.setItem(CUSTOM_CARDS_STORAGE_KEY, JSON.stringify(cards));
  } catch (e) {
    console.error('Failed to save custom flashcards', e);
  }
}

function buildLiveMistakeCards(): Flashcard[] {
  const result: Flashcard[] = [];
  try {
    const rawMistakes = localStorage.getItem('samvidhan_mistakes_bank_v1');
    if (!rawMistakes) return result;
    const mistakes = JSON.parse(rawMistakes);
    if (!Array.isArray(mistakes)) return result;

    const seen = new Set<string>();
    for (const m of mistakes) {
      if (m.mastered) continue;
      const cardId = `mistake-${m.id || m.questionId}`;
      if (seen.has(cardId)) continue;
      seen.add(cardId);
      result.push({
        id: cardId,
        deck: 'mistakes',
        category: `Day ${m.dayNumber || 1} Error`,
        subheading: m.dayTitle || 'Mistakes Bank',
        partTag: `Day ${m.dayNumber || 1}`,
        sourceId: String(m.id || m.questionId),
        isPriority: true,
        front: m.question,
        back: {
          coreRule: m.options ? m.options[m.correctAnswer] : 'Correct answer',
          statutoryDetails: m.explanation || 'Statutory reason for this rule.',
          plainEnglish: m.explanation,
          statutoryAnchor: m.statutoryAnchor || `Day ${m.dayNumber || 1}`,
        },
        box: 1,
        lastReviewed: null,
        nextReview: 0,
        reps: 0,
        lapses: 1,
      });
    }
  } catch (e) {
    console.error('Failed to hydrate mistake flashcards', e);
  }
  return result;
}

function hydrateWithProgress(baseCards: Flashcard[], progressMap: Record<string, CardProgressRecord>): Flashcard[] {
  return baseCards.map((c) => {
    const p = progressMap[c.id];
    if (!p) return c;
    return {
      ...c,
      box: p.box,
      lastReviewed: p.lastReviewed,
      nextReview: p.nextReview,
      reps: p.reps,
      lapses: p.lapses ?? c.lapses,
      pinned: Boolean(p.pinned),
    };
  });
}

// Primary loader: full app-wide catalog + custom cards + live mistakes merged with SRS progress
export const getStoredFlashcards = (): Flashcard[] => {
  const progressMap = loadProgressMap();
  const baseCatalog = buildMasterFlashcardCatalog();
  const customCards = loadCustomCards();
  const mistakeCards = buildLiveMistakeCards();

  // Order: live mistakes & user custom cards first, then full master catalog
  const combined = [...mistakeCards, ...customCards, ...baseCatalog];
  return hydrateWithProgress(combined, progressMap);
};

// Keep backwards-compatible signature
export const saveFlashcards = (cards: Flashcard[]): void => {
  const progressMap = loadProgressMap();
  const customCards: Flashcard[] = [];
  for (const c of cards) {
    if (c.isCustom) customCards.push(c);
    if (c.reps > 0 || c.box > 1 || c.lastReviewed || c.lapses || c.pinned) {
      progressMap[c.id] = {
        box: c.box,
        lastReviewed: c.lastReviewed,
        nextReview: c.nextReview,
        reps: c.reps,
        lapses: c.lapses,
        pinned: c.pinned,
      };
    }
  }
  saveProgressMap(progressMap);
  saveCustomCards(customCards);
};

// Build a focused, live-synced SRS deck for any specific Bootcamp Day (1–15)
export const getFlashcardsForBootcampDay = (day: BootcampDay): Flashcard[] => {
  const allCards = getStoredFlashcards();
  const byId = new Map(allCards.map((c) => [c.id, c]));
  const result: Flashcard[] = [];
  const addedIds = new Set<string>();

  const pushCard = (card?: Flashcard) => {
    if (card && !addedIds.has(card.id)) {
      addedIds.add(card.id);
      result.push(card);
    }
  };

  // 1. Any unmastered Mistakes from this specific day (highest priority!)
  allCards
    .filter((c) => c.deck === 'mistakes' && c.partTag === `Day ${day.dayNumber}`)
    .forEach(pushCard);

  // 2. This day's Core Concepts & Landmark Evolution Pairs
  allCards
    .filter((c) => c.deck === 'bootcamp' && c.partTag === `Day ${day.dayNumber}`)
    .forEach(pushCard);

  // 3. This day's Target Articles (resolved directly to their Bare Act / Flagship cards!)
  for (const rawArt of day.targetArticles || []) {
    const clean = normalizeArticleNum(rawArt);
    // Handle ranges like "12–18" or single articles like "Art. 21"
    const rangeMatch = clean.match(/^(\d+)\s*[–-]\s*(\d+)$/);
    if (rangeMatch) {
      const start = Number(rangeMatch[1]);
      const end = Math.min(Number(rangeMatch[2]), start + 12);
      for (let n = start; n <= end; n++) {
        pushCard(byId.get(getCardIdForArticle(String(n))));
      }
    } else {
      const single = clean.replace(/[^0-9A-Z]/g, '');
      if (single) pushCard(byId.get(getCardIdForArticle(single)));
    }
  }

  // 4. This day's Key Legal Dictionary Terms
  for (const term of day.dictionaryTerms || []) {
    pushCard(byId.get(getCardIdForDictionaryTerm(term)));
  }

  return result;
};

// Create / Delete personal user flashcards
export const createCustomFlashcard = (input: {
  front: string;
  coreRule: string;
  statutoryDetails?: string;
  plainEnglish?: string;
  statutoryAnchor?: string;
  deck?: FlashcardDeckType;
  category?: string;
}): Flashcard[] => {
  const customCards = loadCustomCards();
  const newCard: Flashcard = {
    id: `custom-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    deck: input.deck || 'articles',
    category: input.category || 'Personal Note',
    subheading: 'Custom SRS Card',
    partTag: 'Custom',
    isPriority: true,
    isCustom: true,
    pinned: true,
    front: input.front.trim(),
    back: {
      coreRule: input.coreRule.trim(),
      statutoryDetails: (input.statutoryDetails || '').trim() || 'Personal study note.',
      plainEnglish: input.plainEnglish?.trim() || undefined,
      statutoryAnchor: input.statutoryAnchor?.trim() || 'Personal Revision Card',
    },
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0,
  };
  customCards.unshift(newCard);
  saveCustomCards(customCards);

  const progressMap = loadProgressMap();
  progressMap[newCard.id] = {
    box: 1,
    lastReviewed: null,
    nextReview: 0,
    reps: 0,
    lapses: 0,
    pinned: true,
  };
  saveProgressMap(progressMap);
  return getStoredFlashcards();
};

export const deleteCustomFlashcard = (cardId: string): Flashcard[] => {
  const customCards = loadCustomCards().filter((c) => c.id !== cardId);
  saveCustomCards(customCards);
  const progressMap = loadProgressMap();
  delete progressMap[cardId];
  saveProgressMap(progressMap);
  return getStoredFlashcards();
};

export type GradeQuality = 'again' | 'hard' | 'good' | 'easy';

/**
 * Reviews a flashcard using the 5-Box Leitner Spaced Repetition Algorithm
 * Box 1: 1 Day (Daily / Immediate retry)
 * Box 2: 3 Days
 * Box 3: 7 Days (Weekly)
 * Box 4: 14 Days (Fortnightly)
 * Box 5: 30+ Days (Permanent Synapse / Mastered)
 */
export const reviewCard = (cardId: string, grade: GradeQuality): Flashcard[] => {
  const progressMap = loadProgressMap();
  const prev = progressMap[cardId] || {
    box: 1 as const,
    lastReviewed: null,
    nextReview: 0,
    reps: 0,
    lapses: 0,
    pinned: false,
  };

  const now = Date.now();
  let nextBox: 1 | 2 | 3 | 4 | 5 = prev.box;
  let intervalDays = 1;
  let lapses = prev.lapses || 0;

  switch (grade) {
    case 'again':
      nextBox = 1; // Drops to Box 1
      intervalDays = 0; // Immediately due again today
      lapses += 1;
      break;

    case 'hard':
      nextBox = Math.max(1, prev.box) as 1 | 2 | 3 | 4 | 5;
      intervalDays = 1; // 1-day retention check
      break;

    case 'good':
      nextBox = Math.min(5, prev.box + 1) as 1 | 2 | 3 | 4 | 5;
      intervalDays = nextBox === 2 ? 3 : nextBox === 3 ? 7 : nextBox === 4 ? 14 : 30;
      break;

    case 'easy':
      nextBox = Math.min(5, prev.box + 2) as 1 | 2 | 3 | 4 | 5;
      intervalDays = nextBox >= 5 ? 35 : nextBox === 4 ? 21 : 10;
      break;
  }

  progressMap[cardId] = {
    box: nextBox,
    lastReviewed: now,
    nextReview: now + intervalDays * 24 * 60 * 60 * 1000,
    reps: prev.reps + 1,
    lapses,
    pinned: prev.pinned,
  };

  saveProgressMap(progressMap);
  recordSRSStudySession();

  return getStoredFlashcards();
};

// Reset all Leitner box progress (preserves custom cards & pins if desired, resets boxes to 1)
export const resetFlashcards = (): Flashcard[] => {
  const progressMap = loadProgressMap();
  const resetMap: Record<string, CardProgressRecord> = {};
  for (const [id, rec] of Object.entries(progressMap)) {
    if (rec.pinned) {
      resetMap[id] = {
        box: 1,
        lastReviewed: null,
        nextReview: 0,
        reps: 0,
        lapses: 0,
        pinned: true,
      };
    }
  }
  saveProgressMap(resetMap);
  return getStoredFlashcards();
};

// Sync mistakes from Mistakes Bank into Box 1 flashcards (ensures all unmastered mistakes are due immediately)
export const syncMistakesToFlashcards = (): { cards: Flashcard[]; addedCount: number } => {
  const progressMap = loadProgressMap();
  const mistakes = buildLiveMistakeCards();
  let addedCount = 0;

  for (const m of mistakes) {
    if (!progressMap[m.id]) {
      progressMap[m.id] = {
        box: 1,
        lastReviewed: null,
        nextReview: 0,
        reps: 0,
        lapses: 1,
        pinned: false,
      };
      addedCount++;
    }
  }

  if (addedCount > 0) {
    saveProgressMap(progressMap);
  }

  return { cards: getStoredFlashcards(), addedCount };
};

// Lightweight summary metrics for Sidebar & Overview badges
export const getFlashcardOverviewStats = () => {
  const cards = getStoredFlashcards();
  const now = Date.now();
  const total = cards.length;
  const reviewedCount = cards.filter((c) => c.reps > 0).length;
  const masteredCount = cards.filter((c) => c.box === 5).length;
  const pinnedCount = cards.filter((c) => c.pinned).length;
  const dueReviewedCount = cards.filter((c) => c.lastReviewed !== null && c.nextReview <= now).length;
  return {
    total,
    reviewedCount,
    masteredCount,
    pinnedCount,
    dueReviewedCount,
  };
};

// SRS Session & Daily Streak Tracking
const SRS_METRICS_KEY = 'samvidhan_srs_metrics_v1';

export interface SRSMetrics {
  totalReviews: number;
  lastReviewDate: string; // YYYY-MM-DD
  streakDays: number;
}

export const getSRSMetrics = (): SRSMetrics => {
  try {
    const raw = localStorage.getItem(SRS_METRICS_KEY);
    if (!raw) return { totalReviews: 0, lastReviewDate: '', streakDays: 0 };
    return JSON.parse(raw);
  } catch {
    return { totalReviews: 0, lastReviewDate: '', streakDays: 0 };
  }
};

const recordSRSStudySession = () => {
  try {
    const todayStr = new Date().toISOString().slice(0, 10);
    const metrics = getSRSMetrics();

    let newStreak = metrics.streakDays;
    if (!metrics.lastReviewDate) {
      newStreak = 1;
    } else if (metrics.lastReviewDate === todayStr) {
      // already counted streak for today
    } else {
      const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
      if (metrics.lastReviewDate === yesterday) {
        newStreak += 1;
      } else {
        newStreak = 1; // reset streak
      }
    }

    const updated: SRSMetrics = {
      totalReviews: metrics.totalReviews + 1,
      lastReviewDate: todayStr,
      streakDays: newStreak,
    };

    localStorage.setItem(SRS_METRICS_KEY, JSON.stringify(updated));
  } catch {
    // ignore
  }
};
