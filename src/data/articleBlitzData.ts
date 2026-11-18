// Article Blitz Dataset for SAMVIDHAN Arcade
// Curated pool of high-yield questions for 60-Second Rapid-Fire Article Sprint

export interface BlitzQuestion {
  id: string;
  articleNumber: string;
  title: string;
  clue: string;
  part: string;
  category: 'core' | 'rights' | 'union-state' | 'emergency-amendment';
  options: string[]; // e.g. ['Article 21', 'Article 19', 'Article 20', 'Article 22']
  correctAnswer: string;
  examTrapNote: string;
}

export const BLITZ_QUESTIONS: BlitzQuestion[] = [
  {
    id: 'blitz-14',
    articleNumber: 'Article 14',
    title: 'Equality before law',
    clue: 'Guarantees equality before law and equal protection of laws; strikes down state arbitrariness.',
    part: 'Part III',
    category: 'rights',
    options: ['Article 14', 'Article 15', 'Article 16', 'Article 19'],
    correctAnswer: 'Article 14',
    examTrapNote: 'Applies to both citizens and foreigners, unlike Art. 15, 16, 19, 29, 30 which are for citizens only.'
  },
  {
    id: 'blitz-17',
    articleNumber: 'Article 17',
    title: 'Abolition of Untouchability',
    clue: 'Abolishes untouchability and forbids its practice in any form; absolute fundamental right without exceptions.',
    part: 'Part III',
    category: 'rights',
    options: ['Article 17', 'Article 18', 'Article 15(2)', 'Article 23'],
    correctAnswer: 'Article 17',
    examTrapNote: 'Enforceable against private individuals as well as State; non-derogable.'
  },
  {
    id: 'blitz-19',
    articleNumber: 'Article 19',
    title: 'Six Democratic Freedoms',
    clue: 'Speech, assembly, association, movement, residence, and profession subject to reasonable restrictions.',
    part: 'Part III',
    category: 'rights',
    options: ['Article 19', 'Article 21', 'Article 14', 'Article 25'],
    correctAnswer: 'Article 19',
    examTrapNote: 'Available only to citizens of India; 19(1)(f) right to property was deleted by 44th Amendment 1978.'
  },
  {
    id: 'blitz-20',
    articleNumber: 'Article 20',
    title: 'Protection in respect of conviction for offences',
    clue: 'Ex-post facto laws, double jeopardy, and prohibition of self-incrimination.',
    part: 'Part III',
    category: 'rights',
    options: ['Article 20', 'Article 21', 'Article 22', 'Article 19'],
    correctAnswer: 'Article 20',
    examTrapNote: 'Cannot be suspended even during a National Emergency under Article 359 (44th Amendment).'
  },
  {
    id: 'blitz-21',
    articleNumber: 'Article 21',
    title: 'Protection of life and personal liberty',
    clue: 'No person shall be deprived of life or personal liberty except according to procedure established by law.',
    part: 'Part III',
    category: 'rights',
    options: ['Article 21', 'Article 19', 'Article 14', 'Article 22'],
    correctAnswer: 'Article 21',
    examTrapNote: 'Maneka Gandhi read "due process" and fairness into this clause; cannot be suspended during Emergency.'
  },
  {
    id: 'blitz-21a',
    articleNumber: 'Article 21A',
    title: 'Right to Education',
    clue: 'Free and compulsory education for all children aged 6 to 14 years as a Fundamental Right.',
    part: 'Part III',
    category: 'rights',
    options: ['Article 21A', 'Article 45', 'Article 51A(k)', 'Article 30'],
    correctAnswer: 'Article 21A',
    examTrapNote: 'Inserted by 86th Constitutional Amendment 2002; operationalized via RTE Act 2009.'
  },
  {
    id: 'blitz-32',
    articleNumber: 'Article 32',
    title: 'Right to Constitutional Remedies',
    clue: 'Empowers Supreme Court to issue prerogative writs (Habeas Corpus, Mandamus, etc.); Heart and Soul of Constitution.',
    part: 'Part III',
    category: 'rights',
    options: ['Article 32', 'Article 226', 'Article 136', 'Article 142'],
    correctAnswer: 'Article 32',
    examTrapNote: 'Itself a Fundamental Right (unlike Art. 226 in High Courts, which is a constitutional right).'
  },
  {
    id: 'blitz-39a',
    articleNumber: 'Article 39A',
    title: 'Equal justice and free legal aid',
    clue: 'State duty to ensure legal system promotes justice on a basis of equal opportunity and free legal aid.',
    part: 'Part IV',
    category: 'core',
    options: ['Article 39A', 'Article 39(b)', 'Article 41', 'Article 43A'],
    correctAnswer: 'Article 39A',
    examTrapNote: 'Inserted by 42nd Amendment 1976; led directly to Legal Services Authorities Act (NALSA).'
  },
  {
    id: 'blitz-40',
    articleNumber: 'Article 40',
    title: 'Organisation of village panchayats',
    clue: 'State directive to organise village panchayats and endow them with powers as units of self-government.',
    part: 'Part IV',
    category: 'core',
    options: ['Article 40', 'Article 243', 'Article 44', 'Article 48'],
    correctAnswer: 'Article 40',
    examTrapNote: 'Gandhian DPSP; later converted into statutory local governance by 73rd Amendment 1992.'
  },
  {
    id: 'blitz-44',
    articleNumber: 'Article 44',
    title: 'Uniform Civil Code for the citizens',
    clue: 'State shall endeavour to secure for the citizens a Uniform Civil Code throughout the territory of India.',
    part: 'Part IV',
    category: 'core',
    options: ['Article 44', 'Article 25', 'Article 37', 'Article 45'],
    correctAnswer: 'Article 44',
    examTrapNote: 'Non-justiciable directive; cited in Shah Bano (1985) and Sarla Mudgal (1995).'
  },
  {
    id: 'blitz-50',
    articleNumber: 'Article 50',
    title: 'Separation of judiciary from executive',
    clue: 'State shall take steps to separate the judiciary from the executive in the public services of the State.',
    part: 'Part IV',
    category: 'core',
    options: ['Article 50', 'Article 124', 'Article 51', 'Article 53'],
    correctAnswer: 'Article 50',
    examTrapNote: 'Key constitutional anchor in NJAC case (2015) supporting basic structure of judicial independence.'
  },
  {
    id: 'blitz-51a',
    articleNumber: 'Article 51A',
    title: 'Fundamental Duties',
    clue: 'Prescribes 11 moral civic obligations for citizens, including cherishing the national flag and scientific temper.',
    part: 'Part IVA',
    category: 'rights',
    options: ['Article 51A', 'Article 51', 'Article 39', 'Article 52'],
    correctAnswer: 'Article 51A',
    examTrapNote: 'Recommended by Swaran Singh Committee; inserted by 42nd Amendment (10 duties) + 86th (11th duty).'
  },
  {
    id: 'blitz-72',
    articleNumber: 'Article 72',
    title: 'Pardoning power of the President',
    clue: 'Empowers President to grant pardons, reprieves, respites or remissions of punishment, or commute sentences.',
    part: 'Part V',
    category: 'union-state',
    options: ['Article 72', 'Article 161', 'Article 74', 'Article 123'],
    correctAnswer: 'Article 72',
    examTrapNote: 'President can pardon death sentences and court-martial; Governor under Art. 161 cannot pardon court-martial.'
  },
  {
    id: 'blitz-76',
    articleNumber: 'Article 76',
    title: 'Attorney-General for India',
    clue: 'Highest law officer of the country; right of audience in all courts and right to speak in both Houses of Parliament.',
    part: 'Part V',
    category: 'union-state',
    options: ['Article 76', 'Article 165', 'Article 148', 'Article 88'],
    correctAnswer: 'Article 76',
    examTrapNote: 'Holds office during pleasure of the President; no right to vote in Parliament (Art. 88).'
  },
  {
    id: 'blitz-108',
    articleNumber: 'Article 108',
    title: 'Joint sitting of both Houses in certain cases',
    clue: 'President summons joint sitting to break legislative deadlock on ordinary or financial bills.',
    part: 'Part V',
    category: 'union-state',
    options: ['Article 108', 'Article 110', 'Article 112', 'Article 117'],
    correctAnswer: 'Article 108',
    examTrapNote: 'Presided over by Speaker of Lok Sabha; cannot be called for Money Bills or Constitutional Amendments.'
  },
  {
    id: 'blitz-110',
    articleNumber: 'Article 110',
    title: 'Definition of "Money Bills"',
    clue: 'Bills dealing exclusively with taxation, borrowing, and Consolidated Fund expenditures; certified by Speaker.',
    part: 'Part V',
    category: 'union-state',
    options: ['Article 110', 'Article 109', 'Article 112', 'Article 117'],
    correctAnswer: 'Article 110',
    examTrapNote: 'Speaker\'s certificate is conclusive under 110(3), but subject to judicial review for colourable exercise (Aadhaar case).'
  },
  {
    id: 'blitz-123',
    articleNumber: 'Article 123',
    title: 'Power of President to promulgate Ordinances',
    clue: 'Allows President to make temporary laws when either House of Parliament is not in session.',
    part: 'Part V',
    category: 'union-state',
    options: ['Article 123', 'Article 213', 'Article 72', 'Article 111'],
    correctAnswer: 'Article 123',
    examTrapNote: 'Must be approved by Parliament within 6 weeks of reassembly; cannot be repromulgated endlessly (D.C. Wadhwa).'
  },
  {
    id: 'blitz-136',
    articleNumber: 'Article 136',
    title: 'Special leave to appeal by the Supreme Court',
    clue: 'Plenary discretionary appellate power of Supreme Court to grant leave to appeal against any judgment or order in India.',
    part: 'Part V',
    category: 'union-state',
    options: ['Article 136', 'Article 131', 'Article 132', 'Article 142'],
    correctAnswer: 'Article 136',
    examTrapNote: 'Does not apply to judgments of military courts or tribunals (136(2)).'
  },
  {
    id: 'blitz-141',
    articleNumber: 'Article 141',
    title: 'Law declared by Supreme Court to be binding on all courts',
    clue: 'The law declared by the Supreme Court of India shall be binding on all courts within the territory of India.',
    part: 'Part V',
    category: 'union-state',
    options: ['Article 141', 'Article 142', 'Article 144', 'Article 143'],
    correctAnswer: 'Article 141',
    examTrapNote: 'Supreme Court itself is not bound by its earlier rulings and may overrule precedent (Bengal Immunity case).'
  },
  {
    id: 'blitz-142',
    articleNumber: 'Article 142',
    title: 'Enforcement of decrees and orders of Supreme Court',
    clue: 'Inherent equitable power to pass any decree or order necessary for doing "complete justice" in any cause.',
    part: 'Part V',
    category: 'union-state',
    options: ['Article 142', 'Article 141', 'Article 144', 'Article 136'],
    correctAnswer: 'Article 142',
    examTrapNote: 'Used in Union Carbide (Bhopal gas), Ayodhya title dispute, and dissolution of irretrievably broken marriages.'
  },
  {
    id: 'blitz-148',
    articleNumber: 'Article 148',
    title: 'Comptroller and Auditor-General of India',
    clue: 'Guardian of the Public Purse; audits all expenditures from Consolidated Fund of India and States.',
    part: 'Part V',
    category: 'union-state',
    options: ['Article 148', 'Article 280', 'Article 324', 'Article 76'],
    correctAnswer: 'Article 148',
    examTrapNote: 'Removed only on like grounds and in like manner as a Supreme Court Judge; ineligible for future Govt office.'
  },
  {
    id: 'blitz-200',
    articleNumber: 'Article 200',
    title: 'Assent to Bills by the Governor',
    clue: 'Gubernatorial assent to bills passed by state assemblies: assent, withhold, return with message, or reserve for President.',
    part: 'Part VI',
    category: 'union-state',
    options: ['Article 200', 'Article 201', 'Article 213', 'Article 163'],
    correctAnswer: 'Article 200',
    examTrapNote: 'Governor cannot sit on bills indefinitely; first proviso mandates return "as soon as possible" (Punjab Governor 2023).'
  },
  {
    id: 'blitz-226',
    articleNumber: 'Article 226',
    title: 'Power of High Courts to issue certain writs',
    clue: 'Writ jurisdiction of High Courts for the enforcement of fundamental rights AND "for any other purpose".',
    part: 'Part VI',
    category: 'union-state',
    options: ['Article 226', 'Article 32', 'Article 227', 'Article 136'],
    correctAnswer: 'Article 226',
    examTrapNote: 'Broader in scope than Art. 32 because it can issue writs for legal rights ("any other purpose"), not just Part III.'
  },
  {
    id: 'blitz-280',
    articleNumber: 'Article 280',
    title: 'Finance Commission',
    clue: 'Quasi-judicial body constituted by President every 5th year for tax devolution between Union and States.',
    part: 'Part XII',
    category: 'union-state',
    options: ['Article 280', 'Article 279A', 'Article 265', 'Article 300A'],
    correctAnswer: 'Article 280',
    examTrapNote: 'Distinct from GST Council which is under Art. 279A (inserted by 101st Amendment).'
  },
  {
    id: 'blitz-300a',
    articleNumber: 'Article 300A',
    title: 'Persons not to be deprived of property save by authority of law',
    clue: 'Right to Property as a constitutional and human right following deletion of Article 31.',
    part: 'Part XII',
    category: 'core',
    options: ['Article 300A', 'Article 31', 'Article 19(1)(f)', 'Article 301'],
    correctAnswer: 'Article 300A',
    examTrapNote: 'Not a Fundamental Right; citizen cannot approach Supreme Court directly under Art. 32 for its breach.'
  },
  {
    id: 'blitz-324',
    articleNumber: 'Article 324',
    title: 'Superintendence, direction and control of elections',
    clue: 'Vests superintendence, direction and control of elections to Parliament and State Legislatures in the Election Commission.',
    part: 'Part XV',
    category: 'core',
    options: ['Article 324', 'Article 326', 'Article 329', 'Article 325'],
    correctAnswer: 'Article 324',
    examTrapNote: 'Plenary reservoir of power in election conduct (Mohinder Singh Gill); Chief Election Commissioner has SC judge security of tenure.'
  },
  {
    id: 'blitz-352',
    articleNumber: 'Article 352',
    title: 'Proclamation of Emergency (National Emergency)',
    clue: 'Proclaimed on grounds of War, External Aggression, or Armed Rebellion.',
    part: 'Part XVIII',
    category: 'emergency-amendment',
    options: ['Article 352', 'Article 356', 'Article 360', 'Article 355'],
    correctAnswer: 'Article 352',
    examTrapNote: '44th Amendment replaced "internal disturbance" with "armed rebellion" and mandated written advice of Union Cabinet.'
  },
  {
    id: 'blitz-356',
    articleNumber: 'Article 356',
    title: 'Provisions in case of failure of constitutional machinery in States',
    clue: 'President\'s Rule in States; assumption of state executive powers and parliamentary exercise of state legislative power.',
    part: 'Part XVIII',
    category: 'emergency-amendment',
    options: ['Article 356', 'Article 352', 'Article 365', 'Article 360'],
    correctAnswer: 'Article 356',
    examTrapNote: 'S.R. Bommai (1994) established that proclamation is subject to judicial review and state assembly cannot be dissolved before parliamentary approval.'
  },
  {
    id: 'blitz-368',
    articleNumber: 'Article 368',
    title: 'Power of Parliament to amend the Constitution and procedure therefor',
    clue: 'Constituent power of Parliament to amend by way of addition, variation or repeal; subject to Basic Structure.',
    part: 'Part XX',
    category: 'emergency-amendment',
    options: ['Article 368', 'Article 13', 'Article 366', 'Article 370'],
    correctAnswer: 'Article 368',
    examTrapNote: 'Cannot be used to destroy the Basic Structure of the Constitution (Kesavananda Bharati 1973).'
  }
];
