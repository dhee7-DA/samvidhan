// Writs Emergency Room Dataset for SAMVIDHAN Arcade
// 10 realistic citizen emergency situations requiring correct Prerogative Writ stamps

export type WritType =
  | 'habeas-corpus'
  | 'mandamus'
  | 'quo-warranto'
  | 'certiorari'
  | 'prohibition'
  | 'dismissed-no-writ';

export interface WritCase {
  id: string;
  citizenName: string;
  role: string;
  emergencyTitle: string;
  distressPlea: string;
  factualBackground: string;
  correctWrit: WritType;
  governingArticles: string;
  keyPrecedent: string;
  rationale: string;
  whyOthersFail: string;
}

export const WRIT_CASES: WritCase[] = [
  {
    id: 'writ-case-1',
    citizenName: 'Fatima Begum',
    role: 'Distressed Sister of Detainee',
    emergencyTitle: 'Midnight Police Abduction Without Magistrate Remand',
    distressPlea:
      '"My 22-year-old brother was picked up in an unmarked van at midnight 72 hours ago by local crime branch officers. They refuse to tell us where he is being kept, no FIR has been supplied, and he has not been produced before any Judicial Magistrate!"',
    factualBackground:
      'Article 22(2) strictly mandates production of every arrested individual before the nearest Magistrate within 24 hours of arrest, excluding journey time. Continued detention without judicial remand is unlawful custody.',
    correctWrit: 'habeas-corpus',
    governingArticles: 'Article 32 & 226 / Article 21 & 22(2)',
    keyPrecedent: 'Rudal Sah v. State of Bihar (1983) & D.K. Basu (1997)',
    rationale:
      'Habeas Corpus ("You shall have the body") lies against unlawful custody by police or private individuals, commanding the custodian to produce the prisoner and justify the legal basis of detention.',
    whyOthersFail:
      'Mandamus compels performance of public statutory duty; Certiorari quashes judicial/quasi-judicial orders. Neither orders immediate bodily liberation from illegal physical confinement.'
  },
  {
    id: 'writ-case-2',
    citizenName: 'Ramesh Patel',
    role: 'Ward Resident & Community Health Worker',
    emergencyTitle: 'Municipal Corporation Refuses Mandatory Sewage Cleaning',
    distressPlea:
      '"For 6 months, open raw sewage has flooded our residential colony, causing severe dengue and cholera outbreaks. The Municipal Corporation Act imposes a mandatory statutory duty on the Commissioner to maintain drainage, but the department flatly refuses to act, claiming fund shortage!"',
    factualBackground:
      'The municipal authority is bound by statute to maintain civic hygiene. While budgetary priorities are administrative, performing basic statutory duties essential to life and public health is mandatory.',
    correctWrit: 'mandamus',
    governingArticles: 'Article 32 & 226 / Article 21 (Right to Health & Decent Environment)',
    keyPrecedent: 'Municipal Council, Ratlam v. Vardhichand (1980) AIR 1622',
    rationale:
      'Mandamus ("We command") issues to compel a public official, corporation, or inferior tribunal to perform a specific statutory public duty which they have failed or refused to execute.',
    whyOthersFail:
      'Habeas corpus requires unlawful bodily detention; Quo Warranto requires usurpation of an office; Certiorari requires a quasi-judicial order to quash.'
  },
  {
    id: 'writ-case-3',
    citizenName: 'Dr. Sunita Deshmukh',
    role: 'Senior Professor of Jurisprudence',
    emergencyTitle: 'Politically Appointed Vice Chancellor Lacking Statutory Qualifications',
    distressPlea:
      '"The Chancellor has appointed a local political party treasurer as the Vice Chancellor of the State University. The State University Act strictly mandates that a VC must possess a minimum 10 years experience as Professor and scholarly publications. The appointee does not even hold a Master’s degree!"',
    factualBackground:
      'A substantive public office of an independent statutory university has been usurped by an individual who completely fails the eligibility criteria prescribed by primary legislation.',
    correctWrit: 'quo-warranto',
    governingArticles: 'Article 226 / Statutory University Enactment',
    keyPrecedent: 'Central Electricity Supply Utility of Odisha v. Dhobei Sahoo (2014) 1 SCC 161',
    rationale:
      'Quo Warranto ("By what authority?") inquires into the legality of the claim which a party asserts to an office or franchise, ousting any person who unlawfully usurps a substantive public office created by statute.',
    whyOthersFail:
      'Mandamus enforces duties; Habeas corpus frees persons; Certiorari quashes adjudicatory decisions. Only Quo Warranto ousts an ineligible usurper from public office.'
  },
  {
    id: 'writ-case-4',
    citizenName: 'Anand Kumar',
    role: 'Small Dairy Farmer',
    emergencyTitle: 'District Revenue Officer Expropriates Farm Without Notice or Hearing',
    distressPlea:
      '"The Sub-Divisional Magistrate passed an ex-parte order seizing my 3-acre ancestral agricultural land, declaring it state pasture, without giving me any show-cause notice, summons, or opportunity to be heard. My title deeds were ignored!"',
    factualBackground:
      'A quasi-judicial authority passed a final confiscatory order in flagrant breach of the principles of natural justice (Audi Alteram Partem), depriving a citizen of property and livelihood without procedural fairness.',
    correctWrit: 'certiorari',
    governingArticles: 'Article 226 / Article 14 & 300A (Natural Justice)',
    keyPrecedent: 'A.K. Kraipak v. Union of India (1969) & Menaka Gandhi (1978)',
    rationale:
      'Certiorari ("To be more fully informed") quashes an order already passed by an inferior court, tribunal, or quasi-judicial authority when it is passed without jurisdiction, in excess of jurisdiction, or in violation of natural justice.',
    whyOthersFail:
      'Prohibition applies before the final order is passed to halt proceedings. Once the adverse order has been passed, Certiorari is the sole remedy to quash and nullify it.'
  },
  {
    id: 'writ-case-5',
    citizenName: 'Meera Sen',
    role: 'Civil Litigant',
    emergencyTitle: 'Tribunal Continues Trial After Matter Stayed by High Court',
    distressPlea:
      '"The High Court stayed all further proceedings before the State Administrative Tribunal regarding our service dispute. In open defiance, the Tribunal bench has scheduled final arguments tomorrow and announced it will deliver a final order this week!"',
    factualBackground:
      'An inferior tribunal is actively continuing judicial proceedings in patent lack/excess of jurisdiction while an explicit judicial stay order is operative, but before final judgment has been entered.',
    correctWrit: 'prohibition',
    governingArticles: 'Article 226 / Contempt & Jurisdictional Discipline',
    keyPrecedent: 'Hari Vishnu Kamath v. Syed Ahmad Ishaque (1955) 1 SCR 1104',
    rationale:
      'Prohibition ("We forbid") is a preventive writ issued to an inferior court or tribunal to stop them from continuing proceedings that exceed their jurisdiction or violate judicial discipline before a final decree is passed.',
    whyOthersFail:
      'Certiorari is corrective (quashes after final order); Prohibition is preventive (halts ongoing trials before final order). Mandamus cannot compel a judge on how to decide a judicial trial.'
  },
  {
    id: 'writ-case-6',
    citizenName: 'Vikram Joshi',
    role: 'Commercial Contractor',
    emergencyTitle: 'Private Bank Rejects Business Loan Under Private Contract',
    distressPlea:
      '"A private commercial bank arbitrarily terminated my sanctioned business credit line for my manufacturing unit, citing internal risk scoring. I want the Supreme Court under Article 32 to issue a writ forcing the bank to disburse the loan!"',
    factualBackground:
      'The dispute arises purely out of a commercial contract with a private entity not performing a statutory public function, and does not qualify as "State" under Article 12.',
    correctWrit: 'dismissed-no-writ',
    governingArticles: 'Article 12 & 32 / Indian Contract Act',
    keyPrecedent: 'Federal Bank Ltd. v. Sagar Thomas (2003) 10 SCC 733',
    rationale:
      'WRIT DISMISSED: Prerogative writs under Article 32 do not lie against purely private banking institutions for private contractual grievances. The remedy lies in ordinary civil court for breach of contract.',
    whyOthersFail:
      'Article 32 is reserved exclusively for the enforcement of Part III fundamental rights against the State or entities discharging sovereign public duties.'
  },
  {
    id: 'writ-case-7',
    citizenName: 'Kavita Nair',
    role: 'Victim of Cyber Harassment',
    emergencyTitle: 'Local Police Refuses to Register Mandatory FIR for Stalking',
    distressPlea:
      '"I submitted a formal written complaint with evidence that an unknown stalker is sending death threats and leaked deepfake pictures. The Station House Officer refuses to register an FIR or assign a case number, telling me to solve it personally!"',
    factualBackground:
      'When information disclosing a cognizable offense is laid before an officer in charge of a police station, registration of FIR is mandatory under Section 154 CrPC / 173 BNSS.',
    correctWrit: 'mandamus',
    governingArticles: 'Article 226 & 21 / Sec 154 CrPC',
    keyPrecedent: 'Lalita Kumari v. Govt. of U.P. (Constitution Bench 2014) 2 SCC 1',
    rationale:
      'Mandamus issues to command the police officer to perform their mandatory statutory duty under the Lalita Kumari Constitution Bench doctrine to register an FIR for cognizable crimes.',
    whyOthersFail:
      'No final judicial order exists to quash (ruling out Certiorari); no unlawful physical detention exists (ruling out Habeas Corpus).'
  },
  {
    id: 'writ-case-8',
    citizenName: 'Devraj Singh',
    role: 'Convicted Inmate through Counsel',
    emergencyTitle: 'Challenging Regular Conviction by Sessions Court via Article 32',
    distressPlea:
      '"I was convicted of fraud by the Sessions Court after a full 3-year trial and sentenced to 4 years imprisonment. I am filing a Habeas Corpus petition directly in the Supreme Court under Article 32 to declare my jail term void and release me immediately!"',
    factualBackground:
      'The petitioner is detained pursuant to a judgment and order of conviction passed by a competent court of criminal jurisdiction.',
    correctWrit: 'dismissed-no-writ',
    governingArticles: 'Article 32 / Code of Criminal Procedure',
    keyPrecedent: 'Col. Dr. B. Ramachandra Rao v. State of Orissa (1972) 3 SCC 256',
    rationale:
      'WRIT DISMISSED: A writ of Habeas Corpus does not lie when the detention is in execution of a sentence of imprisonment passed by a competent court of law. The proper remedy is statutory criminal appeal, not Article 32.',
    whyOthersFail:
      'Judicial orders of competent criminal courts cannot be attacked collaterally as "unlawful custody" under Habeas Corpus without exhausting regular appellate remedies.'
  }
];
