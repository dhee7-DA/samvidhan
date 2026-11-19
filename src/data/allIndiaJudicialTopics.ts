export interface AllIndiaTopicFrequency {
  id: string;
  rank: number;
  title: string;
  frequencyScore: number; // percentage (e.g. 24)
  frequencyTier: 'Tier 1: Guaranteed Super-Core' | 'Tier 2: High Probability Recurring' | 'Tier 3: Specialized Regular';
  testedExams: string[];
  coreArticles: string[];
  whyExaminersLoveIt: string;
  recurringThemes: string[];
  benchmarkCases: {
    classic: string;
    modern2024: string;
  };
  sampleQuestionSnippet: string;
}

import { MAINS_MASTER_QUESTIONS } from './mainsQuestionsData';
import type { MainsMasterQuestion } from '../types/mainsQuestionTypes';

export type CommonJudiciaryQuestion = MainsMasterQuestion;

export { MAINS_MASTER_QUESTIONS };


export const ALL_INDIA_TOPIC_FREQUENCIES: AllIndiaTopicFrequency[] = [
  {
    id: 'art-21-due-process',
    rank: 1,
    title: 'Article 21 & Criminal Due Process (The Golden Triangle)',
    frequencyScore: 24,
    frequencyTier: 'Tier 1: Guaranteed Super-Core',
    testedExams: [
      'Delhi Judicial Service (DJS)',
      'UP PCS-J (Mains)',
      'Bihar Judicial Services (BPSC)',
      'UPSC CSE Law Optional',
      'Rajasthan Judicial Service (RJS)',
      'MP Judicial Service (Civil Judge)',
      'CBI / NIA Public Prosecutor Exams'
    ],
    coreArticles: ['Article 21', 'Article 14', 'Article 19', 'Article 20', 'Article 22'],
    whyExaminersLoveIt:
      'Tests whether the candidate understands the shift from formalistic British positivism (A.K. Gopalan) to substantive American due process (Maneka Gandhi), and how modern constitutional benches derive unenumerated human rights.',
    recurringThemes: [
      'Procedure Established by Law vs Substantive Due Process',
      'Right to Privacy as an Inalienable Fundamental Right (Puttaswamy 9-Judge Bench)',
      'Death Penalty Jurisprudence & Mitigating Circumstances (Bachan Singh, Manoj 2022)',
      'Speedy Trial & Custodial Undertrial Incarceration (Hussainara Khatoon, Satender Kumar Antil 2022)',
      'Right to Die with Dignity & Passive Euthanasia (Common Cause 2018 & 2023 Guidelines)'
    ],
    benchmarkCases: {
      classic: 'A.K. Gopalan (1950) ➔ Maneka Gandhi (1978) ➔ Sunil Batra (1980)',
      modern2024: 'K.S. Puttaswamy (2017) ➔ Satender Kumar Antil (2022) ➔ M.K. Ranjitsinh (2024 Climate Right)'
    },
    sampleQuestionSnippet:
      '"Article 21 has expanded from a guarantee against physical restraint to an expansive charter of human dignity." Trace the judicial evolution and explain if India has adopted American substantive due process.'
  },
  {
    id: 'art-14-arbitrariness-equality',
    rank: 2,
    title: 'Article 14 & The Dynamic Equality Code (Articles 14–18)',
    frequencyScore: 18,
    frequencyTier: 'Tier 1: Guaranteed Super-Core',
    testedExams: [
      'UP PCS-J (Mains)',
      'Delhi Judicial Service (DJS)',
      'Bihar Judicial Services (BPSC)',
      'UPSC CSE Law Optional',
      'MP Civil Judge',
      'CLAT PG / LL.M Entrance'
    ],
    coreArticles: ['Article 14', 'Article 15', 'Article 16'],
    whyExaminersLoveIt:
      'Separates candidates who merely cite the traditional reasonable classification test from those who master the anti-arbitrariness doctrine and modern manifest arbitrariness standard.',
    recurringThemes: [
      'Reasonable Classification Test (Intelligible Differentia & Rational Nexus) vs Anti-Arbitrariness',
      'Manifest Arbitrariness as an independent ground to invalidate primary parliamentary legislation',
      'Sub-classification within Scheduled Castes / Scheduled Tribes (State of Punjab v. Davinder Singh 2024 7-Judge Bench)',
      'Creamy Layer Doctrine & Reservation Limits (Indra Sawhney, M. Nagaraj, Jarnail Singh)',
      'Substantive Equality vs Formal Equality in Gender and Transgender Rights (Navtej Johar, NALSA)'
    ],
    benchmarkCases: {
      classic: 'Anwar Ali Sarkar (1952) ➔ E.P. Royappa (1974) ➔ Indra Sawhney (1992)',
      modern2024: 'Shayara Bano (2017) ➔ Navtej Singh Johar (2018) ➔ State of Punjab v. Davinder Singh (7-Judge Bench 2024)'
    },
    sampleQuestionSnippet:
      '"Equality is an antithesis to arbitrariness. In one sense, it will be found that where there is an arbitrary act, there is denial of equality." Critically examine the doctrine of Manifest Arbitrariness.'
  },
  {
    id: 'art-20-22-custodial-forensics',
    rank: 3,
    title: 'Constitutional Safeguards in Criminal Justice (Articles 20 & 22)',
    frequencyScore: 15,
    frequencyTier: 'Tier 1: Guaranteed Super-Core',
    testedExams: [
      'State Prosecution Exams (UP APO, Bihar APO, JKPSC PO, MP ADPO)',
      'Delhi Judicial Service (DJS Criminal Law / GK Paper)',
      'Rajasthan Judicial Service',
      'CBI / NIA Prosecutor Exams'
    ],
    coreArticles: ['Article 20(1)', 'Article 20(2)', 'Article 20(3)', 'Article 22(1)–(7)'],
    whyExaminersLoveIt:
      'Directly applicable to daily magistrate courtroom work and public prosecutor duties: admissibility of forensic tests, confessions, double jeopardy, and remand compliance.',
    recurringThemes: [
      'Right Against Self-Incrimination (Article 20(3)) & Scientific Investigations (Narco, Polygraph, Brain Mapping)',
      'Physical vs Testimonial Evidence (Kathi Kalu Oghad & Voice Exemplars in Ritesh Sinha)',
      'Ex-Post Facto Laws (Article 20(1)) & Beneficial Legislation Exception (Rattan Lal)',
      'Autrefois Acquit / Convict & Departmental vs Judicial Proceedings (Maqbool Hussain)',
      'Preventive Detention Safeguards (Article 22) & Arrest Guidelines (D.K. Basu & Arnesh Kumar)'
    ],
    benchmarkCases: {
      classic: 'State of Bombay v. Kathi Kalu Oghad (1961) ➔ Nandini Satpathy (1978) ➔ D.K. Basu (1997)',
      modern2024: 'Selvi v. State of Karnataka (2010) ➔ Ritesh Sinha (2019) ➔ Prabir Purkayastha (2024 Grounds of Arrest)'
    },
    sampleQuestionSnippet:
      'Can an accused person be compelled by court order to undergo narco-analysis or provide DNA and voice samples? Analyze under Article 20(3) and Article 21.'
  },
  {
    id: 'writs-judicial-review-142',
    rank: 4,
    title: 'Judicial Review, Writ Jurisdiction (Articles 32 & 226) & Article 142',
    frequencyScore: 13,
    frequencyTier: 'Tier 1: Guaranteed Super-Core',
    testedExams: [
      'Delhi Judicial Service (DJS)',
      'Bihar Judicial Services (BPSC)',
      'UP PCS-J',
      'West Bengal Judicial Service',
      'UPSC CSE Law Optional'
    ],
    coreArticles: ['Article 32', 'Article 226', 'Article 136', 'Article 142'],
    whyExaminersLoveIt:
      'Judicial service candidates must know the jurisdictional boundaries between the Supreme Court and High Courts, the exact grounds for each prerogative writ, and the limits of extraordinary judicial power.',
    recurringThemes: [
      'Comparison between Article 32 (Fundamental Right) and Article 226 (Constitutional / Legal Right)',
      'The Five Prerogative Writs: Grounds, Maintainability, and Locus Standi',
      'Maintainability of Writs against Private Bodies performing Public Duties (Zee Telefilms, Janet Jeyapaul)',
      'Scope and Limitations of Article 142 "Complete Justice" (Cannot override express statutory bars)',
      'Public Interest Litigation (PIL): Epistolary jurisdiction and prevention of frivolous abuse (Balwant Singh Chaufal)'
    ],
    benchmarkCases: {
      classic: 'Syed Yakoob (1964) ➔ Bandhua Mukti Morcha (1984) ➔ Supreme Court Bar Association (1998)',
      modern2024: 'High Court Bar Association Allahabad v. State of U.P. (5-Judge Bench 2024 on stay vacation) ➔ Shilpa Sailesh (2023 on Art 142 divorce)'
    },
    sampleQuestionSnippet:
      '"The writ jurisdiction under Article 226 is wider than under Article 32." Discuss. Explain whether the Supreme Court under Article 142 can bypass statutory limitations.'
  },
  {
    id: 'basic-structure-amending-power',
    rank: 5,
    title: 'Basic Structure Doctrine & Amending Power (Article 368)',
    frequencyScore: 11,
    frequencyTier: 'Tier 2: High Probability Recurring',
    testedExams: [
      'UPSC CSE Law Optional (Almost every alternate year)',
      'UP PCS-J (Mains)',
      'Bihar Judicial Services (BPSC)',
      'Haryana Civil Service (Judicial Branch)'
    ],
    coreArticles: ['Article 368', 'Article 13(2)', 'Article 31B', 'Ninth Schedule'],
    whyExaminersLoveIt:
      'The quintessential constitutional law essay question evaluating a student’s historical grasp of constituent power, judicial supremacy, and constitutional constitutionalism.',
    recurringThemes: [
      'Constituent Power vs Ordinary Legislative Power (Article 13(2) vs Article 368)',
      'The Amending Power Saga: Shankari Prasad (1951) to Kesavananda Bharati (1973)',
      'Implied Limitations on Constituent Power & Identification of Basic Features',
      'Article 31B & Ninth Schedule Immunity: The Twin Tests of I.R. Coelho (2007)',
      'Attempted Amending Overreach: Invalidation of Clauses (4) & (5) of Article 368 (Minerva Mills 1980)'
    ],
    benchmarkCases: {
      classic: 'Shankari Prasad (1951) ➔ Golaknath (1967) ➔ Kesavananda Bharati (1973) ➔ Minerva Mills (1980)',
      modern2024: 'I.R. Coelho v. State of Tamil Nadu (2007) ➔ In re Article 370 (2023 5-Judge Bench)'
    },
    sampleQuestionSnippet:
      'Can Parliament, in exercise of its constituent power under Article 368, alter the federal character or judicial review mechanism of the Indian Constitution? Discuss with reference to leading case laws.'
  },
  {
    id: 'art-19-speech-reasonable-restrictions',
    rank: 6,
    title: 'Freedom of Speech & Fundamental Freedoms (Article 19 & Proportionality)',
    frequencyScore: 8,
    frequencyTier: 'Tier 2: High Probability Recurring',
    testedExams: [
      'Delhi Judicial Service (DJS)',
      'UPSC CSE Law Optional',
      'UP PCS-J',
      'CLAT PG'
    ],
    coreArticles: ['Article 19(1)(a)–(g)', 'Article 19(2)–(6)'],
    whyExaminersLoveIt:
      'High contemporary relevance: internet blackouts, hate speech, trial by media, commercial expression, and horizontal enforcement against private entities.',
    recurringThemes: [
      'Freedom of Speech in the Digital Era & Right to Internet (Anuradha Bhasin 2020)',
      'Exhaustive Grounds of Reasonable Restriction under Article 19(2) (Cannot add new grounds)',
      'The Four-Pronged Doctrine of Proportionality (Legitimate goal, Rational nexus, Least intrusive measure, Balancing)',
      'Horizontal Application of Article 19 & 21 against Non-State Actors (Kaushal Kishor 2023)',
      'Commercial Speech and Right to Know (Tata Press, ADR 2002, Electoral Bonds Case 2024)'
    ],
    benchmarkCases: {
      classic: 'Romesh Thappar (1950) ➔ Shreya Singhal (2015) ➔ Tata Press (1995)',
      modern2024: 'Anuradha Bhasin (2020) ➔ Kaushal Kishor (2023) ➔ ADR v. Union of India (Electoral Bonds 2024 5-Judge Bench)'
    },
    sampleQuestionSnippet:
      'Examine whether freedom of speech and expression includes the right to access the internet. Under what circumstances can the State shut down internet services in an area?'
  },
  {
    id: 'federalism-legislative-relations-emergency',
    rank: 7,
    title: 'Federal Relations & Emergency Provisions (Articles 245–254 & 356)',
    frequencyScore: 5,
    frequencyTier: 'Tier 3: Specialized Regular',
    testedExams: [
      'Bihar Judicial Services (BPSC - Compulsory Paper)',
      'UP PCS-J',
      'UPSC CSE Law Optional'
    ],
    coreArticles: ['Article 245', 'Article 246', 'Article 254', 'Article 356'],
    whyExaminersLoveIt:
      'Tests statutory interpretation doctrines: Pith and Substance, Territorial Nexus, Colorable Legislation, and Repugnancy under Article 254.',
    recurringThemes: [
      'Distribution of Legislative Powers: Seventh Schedule & Doctrine of Pith and Substance',
      'Repugnancy between Central and State Enactments under Article 254 (M. Karunanidhi)',
      'Judicial Review of Article 356 President\'s Rule & Dissolution of Legislative Assemblies (S.R. Bommai)',
      'Fiscal Federalism & State Taxation Powers (Mineral Area Development Authority 9-Judge Bench 2024)'
    ],
    benchmarkCases: {
      classic: 'Prafulla Kumar (1947) ➔ S.R. Bommai (1994) ➔ M. Karunanidhi (1979)',
      modern2024: 'State of West Bengal v. Union of India (Article 131 suit 2024) ➔ MADA v. SAIL (9-Judge Bench 2024)'
    },
    sampleQuestionSnippet:
      'Explain the Doctrine of Repugnancy under Article 254. When will a State law prevail over a Central law on a Concurrent List subject?'
  },
  {
    id: 'executive-ordinance-clemency-governor',
    rank: 8,
    title: 'Executive Discretion, Ordinances & Pardoning Powers (Articles 72, 123, 161)',
    frequencyScore: 4,
    frequencyTier: 'Tier 3: Specialized Regular',
    testedExams: [
      'UP PCS-J',
      'Bihar Judicial Services',
      'Delhi Judicial Service',
      'UPSC CSE Law Optional'
    ],
    coreArticles: ['Article 72', 'Article 123', 'Article 161', 'Article 163', 'Article 200'],
    whyExaminersLoveIt:
      'Examines constitutional separation of powers, executive excess, and judicial review of high discretionary executive prerogatives.',
    recurringThemes: [
      'Ordinance-Making Power as Extraordinary Power & Fraud on the Constitution (D.C. Wadhwa, Krishna Kumar Singh 2017)',
      'Judicial Review of Presidential & Gubernatorial Pardons (Maru Ram, Epuru Sudhakar, Bilkis Bano 2024)',
      'Governor\'s Assent to Bills passed by State Assembly & Withholding Discretion (State of Punjab 2023)'
    ],
    benchmarkCases: {
      classic: 'D.C. Wadhwa (1987) ➔ Maru Ram (1980) ➔ Kehar Singh (1989)',
      modern2024: 'Krishna Kumar Singh (2017) ➔ State of Punjab v. Governor (2023) ➔ Bilkis Bano v. Union of India (2024)'
    },
    sampleQuestionSnippet:
      '"Ordinance-making power is conditional and subject to judicial review." Discuss whether repromulgation of ordinances without placing them before the legislature is constitutional.'
  },
  {
    id: 'religion-secularism-minorities',
    rank: 9,
    title: 'Freedom of Religion & Minority Educational Rights (Articles 25–30)',
    frequencyScore: 3,
    frequencyTier: 'Tier 3: Specialized Regular',
    testedExams: [
      'Delhi Judicial Service',
      'UPSC CSE Law Optional',
      'UP PCS-J'
    ],
    coreArticles: ['Article 25', 'Article 26', 'Article 29', 'Article 30'],
    whyExaminersLoveIt:
      'Tests candidate understanding of the Essential Religious Practices (ERP) doctrine, constitutional morality vs public order/morality, and minority institutional autonomy.',
    recurringThemes: [
      'Essential Religious Practices (ERP) Test & Judicial Interpretation (Shirur Mutt, Sabarimala)',
      'Constitutional Morality vs Popular Religious Sentiments',
      'Minority Educational Rights under Article 30(1) (TMA Pai, Inamdar, AMU 2024 7-Judge Bench)',
      'Relationship between Fundamental Rights and Uniform Civil Code (Article 44)'
    ],
    benchmarkCases: {
      classic: 'Commr., Hindu Religious Endowments v. Sri Shirur Mutt (1954) ➔ T.M.A. Pai Foundation (2002)',
      modern2024: 'Indian Young Lawyers Association (Sabarimala 2018) ➔ Aligarh Muslim University (AMU 7-Judge Bench 2024)'
    },
    sampleQuestionSnippet:
      'Discuss the scope of the Essential Religious Practices test evolved by the Supreme Court. Does Article 25 protect every practice claimed to be religious by a community?'
  }
];

export const COMMON_JUDICIARY_QUESTIONS: CommonJudiciaryQuestion[] = MAINS_MASTER_QUESTIONS;
