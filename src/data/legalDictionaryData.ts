import type { LegalTerm } from '../types/dictionary';

export const LEGAL_DICTIONARY: LegalTerm[] = [
  // ==================== CRIMINAL LAW TERMS ====================
  {
    term: 'Cognizable Offence',
    aliases: ['cognizable', 'cognizable offence', 'cognizable offense', 'cognizable offences', 'cognizable cases', 'cognizable case'],
    category: 'Criminal Law',
    phoneticOrLiteral: 'From Latin "Cognoscere" (to know, investigate, or take official judicial notice)',
    detailedMeaning: 'A serious category of criminal offence where a police officer has statutory authority to arrest the accused person without an arrest warrant from a Magistrate, and can immediately initiate investigation and register a First Information Report (FIR) without needing prior court permission.',
    easyExample: 'If a man shoots someone or robs a bank right in front of a police station, the police do NOT need to run to a magistrate to get a written warrant first. They can immediately chase, arrest the shooter on the spot, and register an FIR because murder and armed robbery are severe "cognizable" offences. For minor matters like simple defamation or verbal insults (non-cognizable), police cannot arrest without a judge’s warrant.',
    statutoryOrCaseRef: 'Section 2(1)(g) BNSS 2023 (formerly Section 2(c) CrPC 1973) read with First Schedule',
    relatedArticles: ['Article 21', 'Article 22']
  },
  {
    term: 'Non-Cognizable Offence',
    aliases: ['non-cognizable', 'non cognizable', 'non-cognizable offence', 'non-cognizable offense'],
    category: 'Criminal Law',
    phoneticOrLiteral: 'Offences outside immediate unilateral police cognizance',
    detailedMeaning: 'A category of relatively less serious criminal offences where a police officer has no authority to arrest the suspect without a warrant issued by a judicial magistrate, and cannot start an investigation without a specific direction from the magistrate under Section 174 BNSS (Section 155 CrPC).',
    easyExample: 'If someone publicly insults or defames a businessman, the businessman goes to the police station. The police will record it in a Daily Diary / Non-Cognizable Report (NCR), but they CANNOT arrest the accused or start an investigation until the complainant approaches the Magistrate and the Magistrate orders the police to investigate.',
    statutoryOrCaseRef: 'Section 2(1)(o) BNSS 2023 (formerly Section 2(l) CrPC)',
    relatedArticles: ['Article 21', 'Article 22']
  },
  {
    term: 'Bailable Offence',
    aliases: ['bailable', 'bailable offence', 'bailable offense'],
    category: 'Criminal Law',
    phoneticOrLiteral: 'Entitled to release upon bail as an absolute legal right',
    detailedMeaning: 'An offence shown as bailable in the First Schedule of the procedural code or made bailable by any other law. In bailable offences, grant of bail is an absolute, non-discretionary statutory right of the accused; neither the police officer nor the Magistrate can refuse bail if the accused is ready to furnish the required bail bond and surety.',
    easyExample: 'A driver accidentally scratches someone’s car and gets into a minor scuffle (causing simple hurt). This is a bailable offence. The moment the driver reaches the police station or court and provides a local friend as surety with a bail bond, the police/magistrate MUST release him immediately. They cannot keep him behind bars because bail is his absolute legal right.',
    statutoryOrCaseRef: 'Section 2(1)(a) BNSS 2023 (formerly Section 2(a) CrPC) read with Section 478 BNSS (Sec 436 CrPC)',
    relatedArticles: ['Article 21']
  },
  {
    term: 'Non-Bailable Offence',
    aliases: ['non-bailable', 'non bailable', 'non-bailable offence', 'non-bailable offense'],
    category: 'Criminal Law',
    phoneticOrLiteral: 'Bail is not a matter of right, but judicial discretion',
    detailedMeaning: 'Any offence that is not bailable. Contrary to popular misconception, "non-bailable" does NOT mean bail can never be granted; it means bail is NOT an automatic right. The accused must convince the Court of Session, High Court, or Magistrate, which exercises judicial discretion based on the gravity of the crime, tampering risk, and flight risk.',
    easyExample: 'A person is arrested for commercial drug trafficking or kidnapping for ransom. They cannot demand immediate release from the police station as a right. Their lawyer must file a formal bail application before the Sessions Judge or High Court, proving they won’t threaten witnesses or run away. The Judge has full discretion to either grant or reject bail.',
    statutoryOrCaseRef: 'Section 480 & 482 BNSS 2023 (formerly Sections 437 & 439 CrPC)',
    relatedArticles: ['Article 21']
  },
  {
    term: 'Anticipatory Bail',
    aliases: ['anticipatory bail', 'pre-arrest bail'],
    category: 'Criminal Law',
    phoneticOrLiteral: 'Direction to release a person on bail in anticipation of arrest',
    detailedMeaning: 'A pre-arrest judicial shield granted by the Sessions Court or High Court directing that if a person is arrested on accusation of having committed a non-bailable offence, they shall be released on bail immediately at the point of arrest.',
    easyExample: 'A doctor is falsely threatened by a disgruntled patient with a fabricated criminal case of extortion and assault. Before police can knock on his door and put him in handcuffs, the doctor’s lawyer moves the High Court for Anticipatory Bail. The High Court grants it with conditions. Now, if the police come to arrest the doctor, they cannot throw him in a lockup; they must release him on the spot upon taking his bond.',
    statutoryOrCaseRef: 'Section 482 BNSS 2023 (formerly Section 438 CrPC); Gurbaksh Singh Sibbia (1980 5-Judge Bench)',
    relatedArticles: ['Article 21']
  },
  {
    term: 'Police Custody vs Judicial Custody',
    aliases: ['police custody', 'judicial custody', 'remand'],
    category: 'Criminal Law',
    phoneticOrLiteral: 'Remand to physical police investigation lockup vs district central prison',
    detailedMeaning: 'Police custody means the accused is physically detained in the lockup of a police station under direct interrogation of investigating officers (permitted only for limited initial periods, usually up to 15 days). Judicial custody means the accused is in the custody of the court, lodged in a regular jail (prison) under the jail superintendent, where police cannot interrogate without court permission.',
    easyExample: 'When an accused is caught with a stolen weapon, the magistrate remands him to "Police Custody" for 3 days so the police can take him to recover the hidden loot. Once recovery is done, the magistrate sends him to "Judicial Custody" (Central Jail). In judicial custody, police officers cannot touch or interrogate him without an express written order from the judge.',
    statutoryOrCaseRef: 'Section 187 BNSS 2023 (formerly Section 167 CrPC)',
    relatedArticles: ['Article 21', 'Article 22(2)']
  },
  {
    term: 'Taking Cognizance',
    aliases: ['cognizance', 'taking cognizance', 'took cognizance'],
    category: 'Criminal Law',
    phoneticOrLiteral: 'From Latin "Cognoscere" (judicial application of mind to suspected commission of offence)',
    detailedMeaning: 'The preliminary judicial step where a Magistrate or Judge applies their judicial mind to the facts stated in an FIR, police charge sheet, or private complaint for the purpose of initiating judicial criminal proceedings against the suspects.',
    easyExample: 'When police complete an investigation and file a 500-page charge sheet, the trial doesn’t start immediately. The Magistrate must first sit down, read the evidence, and officially decide whether a criminal offence is actually made out on paper. When the Magistrate signs an order saying "Cognizance is taken under Section 302 and summons issued", the judicial trial officially begins.',
    statutoryOrCaseRef: 'Section 210 BNSS 2023 (formerly Section 190 CrPC)',
    relatedArticles: ['Article 21']
  },
  {
    term: 'Charge Sheet / Final Police Report',
    aliases: ['charge sheet', 'chargesheet', 'police report', 'final report'],
    category: 'Criminal Law',
    phoneticOrLiteral: 'Formal accusation dossier concluding statutory police investigation',
    detailedMeaning: 'The comprehensive statutory final report prepared by an investigating police officer under Section 193 BNSS (Section 173 CrPC) sent to the Magistrate, detailing the nature of the information, names of parties, witnesses, seized weapons, forensic reports, and whether the accused appears to have committed the alleged crime.',
    easyExample: 'After investigating a bank fraud for 80 days, interrogating witnesses, and examining CCTV footage, the police bind all witness statements, forensic audits, and evidence into a formal document called a "Charge Sheet" and submit it to the Magistrate, requesting the court to put the accused on trial.',
    statutoryOrCaseRef: 'Section 193 BNSS 2023 (formerly Section 173(2) CrPC)',
    relatedArticles: ['Article 21', 'Article 22']
  },
  {
    term: 'Double Jeopardy',
    aliases: ['double jeopardy', 'nemo debet bis vexari'],
    category: 'Criminal Law',
    phoneticOrLiteral: 'From Latin "Nemo debet bis vexari pro una et eadem causa" (No one should be twice vexed for the same cause)',
    detailedMeaning: 'A fundamental constitutional shield guaranteeing that no person shall be prosecuted and punished for the same criminal offence more than once. It applies only when there has been a prior prosecution AND conviction/punishment before a competent criminal court.',
    easyExample: 'A cashier steals ₹5 lakhs from a company. The Magistrate convicts him of theft and sentences him to 1 year in jail. After he serves his full 1 year and comes out of prison, the police CANNOT file a second case against him for that identical theft of ₹5 lakhs. However, if the bank fired him from his job (departmental enquiry), that is not a criminal punishment, so departmental firing plus criminal jail does NOT violate double jeopardy.',
    statutoryOrCaseRef: 'Article 20(2) Constitution of India; Section 300 CrPC / Section 337 BNSS; Maqbool Hussain (1953)',
    relatedArticles: ['Article 20(2)']
  },
  {
    term: 'Self-Incrimination',
    aliases: ['self-incrimination', 'self incrimination', 'nemo tenetur seipsum accusare'],
    category: 'Criminal Law',
    phoneticOrLiteral: 'From Latin "Nemo tenetur seipsum accusare" (No person is bound to accuse himself)',
    detailedMeaning: 'The fundamental constitutional right of an accused person not to be compelled by police, investigators, or courts to be a witness against himself or make statements that incriminate him in a criminal offence.',
    easyExample: 'Police arrest a suspect in a high-profile robbery and try to subject him to involuntary Narco-analysis (truth serum), Brain-Mapping, or lie-detector tests to force a confession. In Selvi v. State of Karnataka (2010), the 3-Judge Bench held this is unconstitutional: forcing a suspect to undergo involuntary brain tests violates the right against self-incrimination under Article 20(3). Taking physical fingerprints or handwriting samples, however, is allowed.',
    statutoryOrCaseRef: 'Article 20(3) Constitution of India; Selvi v. State of Karnataka (2010); Nandini Satpathy (1978)',
    relatedArticles: ['Article 20(3)', 'Article 21']
  },
  {
    term: 'Ex-Post Facto Law',
    aliases: ['ex-post facto', 'ex post facto', 'retrospective penal law'],
    category: 'Criminal Law',
    phoneticOrLiteral: 'From Latin "Ex post facto" (From a thing done afterward / retrospective operation)',
    detailedMeaning: 'A law that criminalizes an act that was completely legal when it was performed, or that increases the punishment for an offence beyond what was prescribed at the time the offence was committed. Article 20(1) places an ironclad constitutional ban on retroactive criminal legislation.',
    easyExample: 'On Monday, flying an unregistered toy drone in a public park is completely legal. On Wednesday, Parliament passes a law making flying drones a crime punishable by 2 years in prison. The police CANNOT arrest you on Friday for flying your drone on Monday! You can only be punished under laws that were active on the exact date and time you committed the act.',
    statutoryOrCaseRef: 'Article 20(1) Constitution of India; Kedar Nath v. State of West Bengal (1953)',
    relatedArticles: ['Article 20(1)']
  },
  {
    term: 'Preventive Detention',
    aliases: ['preventive detention', 'detention without trial'],
    category: 'Criminal Law',
    phoneticOrLiteral: 'Detaining a person not as punishment for a past crime, but to prevent future danger',
    detailedMeaning: 'The detention of a person without a formal criminal charge or trial, executed by the executive government under preventive statutes (e.g. PSA, UAPA, COFEPOSA) to prevent the person from acting in any manner prejudicial to state security, defense, or public order.',
    easyExample: 'Unlike normal arrests (where police arrest someone because they already broke a shop window or stole a car), preventive detention locks up a suspected kingpin or terror operative before they can carry out an imminent bomb blast or mass riot. Because there is no trial, Article 22 provides strict constitutional safeguards: grounds must be communicated quickly, and an independent Advisory Board must review the detention within 3 months.',
    statutoryOrCaseRef: 'Article 22(3)–(7) Constitution of India; A.K. Roy (1982); Rekha v. State of T.N. (2011)',
    relatedArticles: ['Article 22', 'Article 21']
  },

  // ==================== LATIN MAXIMS & DOCTRINES ====================
  {
    term: 'Ratio Decidendi',
    aliases: ['ratio decidendi', 'ratio', 'the ratio'],
    category: 'Latin Maxims',
    phoneticOrLiteral: 'Latin: "The reason or rationale for the decision"',
    detailedMeaning: 'The essential legal principle, rule, or reasoning upon which a court bases its final decision on the core issues before it. It is ONLY the ratio decidendi of a Supreme Court or High Court judgment that creates binding legal precedent (stare decisis) under Article 141.',
    easyExample: 'A Supreme Court bench writes a 200-page judgment on whether privacy is a fundamental right. The judges spend 50 pages discussing philosophy, poetry, and foreign history (obiter dicta). But on page 190, they formulate the rule: "Right to privacy is an intrinsic part of the right to life and personal liberty under Article 21". That single core holding is the "Ratio Decidendi", and every judge across India is bound to follow it.',
    statutoryOrCaseRef: 'Article 141 Constitution of India; State of Orissa v. Sudhansu Sekhar Misra (1968)',
    relatedArticles: ['Article 141']
  },
  {
    term: 'Obiter Dicta',
    aliases: ['obiter dicta', 'obiter dictum', 'obiter'],
    category: 'Latin Maxims',
    phoneticOrLiteral: 'Latin: "Things said by the way or in passing"',
    detailedMeaning: 'Incidental observations, philosophical remarks, or hypothetical illustrations expressed by a judge in an opinion that are not essential to the determination of the legal issues in dispute. Unlike ratio decidendi, obiter dicta does NOT create binding precedent under Article 141, though it carries high persuasive value.',
    easyExample: 'While delivering a judgment on whether an Aadhaar card is required for welfare rations, a judge remarks: "In my personal view, modern smartphones collect too much user metadata". That side remark about smartphones is "Obiter Dicta"—it has nothing to do with resolving the case before the court, so police and lower courts are not legally bound by it.',
    statutoryOrCaseRef: 'Article 141 Constitution of India; Director of Settlements, A.P. v. M.R. Apparao (2002)',
    relatedArticles: ['Article 141']
  },
  {
    term: 'Per Incuriam',
    aliases: ['per incuriam', 'rendered per incuriam'],
    category: 'Latin Maxims',
    phoneticOrLiteral: 'Latin: "Through lack of care / in ignorance of binding law"',
    detailedMeaning: 'A judicial decision rendered in ignorance or forgetfulness of an express statutory provision or a binding decision of a superior court or larger bench on the same point. A judgment rendered per incuriam loses its precedential authority and is not binding under Article 141.',
    easyExample: 'A 2-Judge Bench of the Supreme Court declares that a police officer can arrest without warrant in a certain minor offence, completely overlooking a 1980 5-Judge Constitution Bench ruling and an express statutory amendment saying the exact opposite. Because the 2-judge bench forgot the binding 5-judge precedent, its ruling is "Per Incuriam" (delivered in inadvertent ignorance) and lower courts do not have to follow it.',
    statutoryOrCaseRef: 'Article 141 Constitution of India; State of U.P. v. Synthetics and Chemicals Ltd. (1991)',
    relatedArticles: ['Article 141']
  },
  {
    term: 'Stare Decisis',
    aliases: ['stare decisis', 'doctrine of precedent', 'binding precedent'],
    category: 'Latin Maxims',
    phoneticOrLiteral: 'Latin: "Stare decisis et non quieta movere" (To stand by things decided and not disturb what is settled)',
    detailedMeaning: 'The fundamental legal doctrine of precedent: once a court has laid down a principle of law applicable to a certain state of facts, courts in the same jurisdiction and subordinate courts must adhere to that principle in all subsequent similar cases to maintain certainty, predictability, and stability in the law.',
    easyExample: 'If the Supreme Court ruled in 1978 that Article 21 requires a fair and reasonable procedure, a Magistrate hearing a trial in 2026 cannot say: "I disagree with 1978, I will invent my own trial rules". Under Stare Decisis, the law is settled, and all courts must respect the settled legal foundation.',
    statutoryOrCaseRef: 'Article 141 Constitution of India; Keshav Mills Co. Ltd. v. CIT (1965)',
    relatedArticles: ['Article 141']
  },
  {
    term: 'Habeas Corpus',
    aliases: ['habeas corpus', 'writ of habeas corpus'],
    category: 'Latin Maxims',
    phoneticOrLiteral: 'Latin: "Produce the body / You shall have the body"',
    detailedMeaning: 'The great constitutional prerogative writ issued by the Supreme Court (Art 32) or High Court (Art 226) commanding a person, jailer, or police authority who has detained another person to produce the body of the prisoner before the court to inspect the legal grounds of detention, and release the detainee if the detention is unlawful.',
    easyExample: 'A college student is picked up by plainclothes police officers without an FIR and kept secretly in an interrogation room for 48 hours without being produced before a Magistrate. The student’s parents file a Writ of Habeas Corpus in the High Court. The High Court immediately issues an emergency order commanding the Police Commissioner: "Produce the student in court within 3 hours or face contempt!" If no lawful arrest warrant is shown, the judge sets the student free on the spot.',
    statutoryOrCaseRef: 'Article 32 & 226 Constitution of India; Sunil Batra (1980); ADM Jabalpur (overruled in Puttaswamy)',
    relatedArticles: ['Article 32', 'Article 226', 'Article 21', 'Article 22']
  },
  {
    term: 'Mandamus',
    aliases: ['mandamus', 'writ of mandamus'],
    category: 'Latin Maxims',
    phoneticOrLiteral: 'Latin: "We command"',
    detailedMeaning: 'A prerogative judicial writ issued by a superior court commanding an inferior court, tribunal, board, corporation, or public authority to perform a public or statutory duty that is imposed upon it by law and which it has wrongfully refused or failed to perform.',
    easyExample: 'A candidate clears the JKPSC Prosecuting Officer exam with Rank 1 and passes police verification, but the state home department arbitrarily sits on his appointment letter for 10 months without any lawful reason. The candidate files a Writ of Mandamus in the High Court. The High Court issues a writ commanding the Home Secretary: "You hold a public office and have a legal duty to issue the appointment letter. Issue it within 2 weeks!"',
    statutoryOrCaseRef: 'Articles 32 and 226 Constitution of India; Gujarat State Financial Corp. v. Lotus Hotels (1983)',
    relatedArticles: ['Article 32', 'Article 226']
  },
  {
    term: 'Quo Warranto',
    aliases: ['quo warranto', 'writ of quo warranto'],
    category: 'Latin Maxims',
    phoneticOrLiteral: 'Latin: "By what warrant or authority?"',
    detailedMeaning: 'A judicial writ issued by a superior court inquiring into the legality of the claim which a party asserts to a substantive public office, franchise, or liberty. If the respondent cannot show lawful title or eligibility qualifications to hold the public office, the court ousts them from that office.',
    easyExample: 'The statutory rules require that the Vice-Chancellor of a State University must be an eminent professor with at least 10 years of university teaching experience. The State Government appoints a politician’s friend who only holds a high-school diploma. Any citizen can file a Writ of Quo Warranto asking: "By what legal warrant are you sitting in this constitutional public chair?" The High Court quashes the appointment and removes the impostor.',
    statutoryOrCaseRef: 'Articles 32 and 226 Constitution of India; University of Mysore v. Govinda Rao (1965)',
    relatedArticles: ['Article 32', 'Article 226']
  },
  {
    term: 'Certiorari',
    aliases: ['certiorari', 'writ of certiorari'],
    category: 'Latin Maxims',
    phoneticOrLiteral: 'Latin: "To be certified / made more certain"',
    detailedMeaning: 'A corrective prerogative writ issued by a superior court to an inferior court, tribunal, or quasi-judicial body to transmit the records of pending or concluded proceedings to the superior court, so that the legality of the order can be reviewed, and quashed if it suffers from lack of jurisdiction, excess of jurisdiction, or violation of natural justice.',
    easyExample: 'A district land revenue tribunal arbitrarily seizes a farmer\'s ancestral land in a 10-minute secret hearing without serving him notice or giving him a chance to be heard. The farmer petitions the High Court under Article 226 for a Writ of Certiorari. The High Court calls for the file, sees the glaring violation of Natural Justice, and crushes (quashes) the tribunal’s order to zero.',
    statutoryOrCaseRef: 'Articles 32 and 226 Constitution of India; Syed Yakoob v. K.S. Radhakrishnan (1964)',
    relatedArticles: ['Article 32', 'Article 226']
  },
  {
    term: 'Prohibition (Writ)',
    aliases: ['writ of prohibition', 'prohibition'],
    category: 'Latin Maxims',
    phoneticOrLiteral: 'Latin: "Prohibere" (To forbid or prevent)',
    detailedMeaning: 'A preventive writ issued by a superior court to an inferior court or tribunal forbidding it from continuing proceedings in a matter over which it has no legal jurisdiction or is proceeding in blatant violation of the rules of natural justice. While Certiorari cures an order already made, Prohibition prevents an illegal order from being made.',
    easyExample: 'A Consumer Disputes Forum begins conducting a criminal murder trial against a hospital doctor. A Consumer Forum has zero statutory power to try homicide! Before the Forum can deliver a bizarre verdict, the doctor approaches the High Court for a Writ of Prohibition. The High Court issues an order commanding the Consumer Forum: "Stop proceedings immediately! You have no jurisdiction to try criminal charges."',
    statutoryOrCaseRef: 'Articles 32 and 226 Constitution of India; S. Govinda Menon v. Union of India (1967)',
    relatedArticles: ['Article 32', 'Article 226']
  },
  {
    term: 'Ultra Vires',
    aliases: ['ultra vires'],
    category: 'Latin Maxims',
    phoneticOrLiteral: 'Latin: "Beyond the powers"',
    detailedMeaning: 'An act, rule, regulation, or statute done or enacted beyond the legal authority, constitutional jurisdiction, or statutory powers granted to the acting body. Anything done ultra vires is null, void, and of no legal effect from inception.',
    easyExample: 'A municipal corporation has power by law to issue street vending licenses. One day, the municipal council passes a resolution saying: "Anyone who commits theft on city streets will be sent to 5 years rigorous imprisonment by the Municipal Mayor". This resolution is completely "Ultra Vires" because a city municipality has no constitutional authority to pass penal codes or sentence people to prison. Courts will strike it down as dead.',
    statutoryOrCaseRef: 'Article 13 Constitution of India; Express Newspapers (1958)',
    relatedArticles: ['Article 13', 'Article 245']
  },
  {
    term: 'Intra Vires',
    aliases: ['intra vires'],
    category: 'Latin Maxims',
    phoneticOrLiteral: 'Latin: "Within the powers"',
    detailedMeaning: 'An act, statutory regulation, or executive decree done or enacted strictly within the scope of legal competence, constitutional authority, and statutory jurisdiction conferred upon the body.',
    easyExample: 'Parliament passes a law imposing income tax on corporate profits. Under Entry 82 of the Union List (Seventh Schedule), Parliament has express constitutional power to levy taxes on income. Therefore, the Income Tax Act is fully "Intra Vires" the legislative competence of Parliament.',
    statutoryOrCaseRef: 'Article 246 read with Seventh Schedule',
    relatedArticles: ['Article 246']
  },
  {
    term: 'Audi Alteram Partem',
    aliases: ['audi alteram partem', 'rule of fair hearing', 'natural justice'],
    category: 'Latin Maxims',
    phoneticOrLiteral: 'Latin: "Hear the other side / Listen to both parties"',
    detailedMeaning: 'The cardinal first principle of Natural Justice: no person should be condemned, penalized, or deprived of their rights, liberties, or property without being given adequate prior notice and a reasonable, fair opportunity to state their case and defend themselves.',
    easyExample: 'A university receives an anonymous letter claiming a student cheated in an exam. Without calling the student, showing the evidence, or asking for an explanation, the Dean cancels the student’s degree. This is a textbook violation of "Audi Alteram Partem". The High Court will immediately overturn the cancellation because no one can be punished behind their back without a fair hearing.',
    statutoryOrCaseRef: 'Maneka Gandhi v. Union of India (1978); A.K. Kraipak v. Union of India (1969)',
    relatedArticles: ['Article 14', 'Article 21', 'Article 311']
  },
  {
    term: 'Nemo Judex In Causa Sua',
    aliases: ['nemo judex in causa sua', 'rule against bias'],
    category: 'Latin Maxims',
    phoneticOrLiteral: 'Latin: "No one should be a judge in their own cause"',
    detailedMeaning: 'The second pillar of Natural Justice: the rule against bias. A judge, inquiry officer, or decision-maker must be completely impartial and disinterested. If there is a real likelihood of personal, pecuniary, or subject-matter bias, the adjudicator is disqualified from hearing the case.',
    easyExample: 'A company institutes a disciplinary inquiry against an employee for theft. The person appointed as the "Inquiry Officer" to judge the case is the very manager whose personal wallet was stolen! The manager cannot be the judge in his own cause because his personal bias is inevitable. The inquiry is void.',
    statutoryOrCaseRef: 'A.K. Kraipak v. Union of India (1969); Gullapalli Nageswara Rao (1959)',
    relatedArticles: ['Article 14', 'Article 21']
  },
  {
    term: 'Suo Motu',
    aliases: ['suo motu', 'suo moto'],
    category: 'Latin Maxims',
    phoneticOrLiteral: 'Latin: "On its own motion / of its own accord"',
    detailedMeaning: 'An act of judicial authority taken by a court or constitutional commission on its own initiative without requiring any formal petition, lawsuit, or application from a private citizen or prosecutor.',
    easyExample: 'The Chief Justice reads a horrifying newspaper report in the morning about toxic gas leaking from a chemical factory into a nearby residential colony and hospital. The court doesn’t wait for a victim to hire a lawyer and file a writ. The High Court takes "Suo Motu" cognizance of the newspaper article, treats it as a writ petition, and issues emergency orders to the state government to rescue the victims.',
    statutoryOrCaseRef: 'Articles 32 and 226 Constitution of India',
    relatedArticles: ['Article 32', 'Article 226', 'Article 21']
  },
  {
    term: 'In Limine',
    aliases: ['in limine'],
    category: 'Latin Maxims',
    phoneticOrLiteral: 'Latin: "At the threshold / at the very beginning"',
    detailedMeaning: 'A preliminary dismissal or disposal of a legal petition, appeal, or objection by a court at the very outset without entering into a detailed hearing on the substantive merits of the dispute.',
    easyExample: 'A petitioner files a 1,000-page Special Leave Petition in the Supreme Court challenging a high court order. The bench glances at the cause title, notices that the petitioner failed to disclose previous identical petitions, and dismisses the petition "In Limine" (at the threshold on day one) within 2 minutes without issuing notice to the other side.',
    statutoryOrCaseRef: 'Order XXI Supreme Court Rules; Kunhayammed v. State of Kerala (2000)',
    relatedArticles: ['Article 136']
  },
  {
    term: 'Sub Judice',
    aliases: ['sub judice'],
    category: 'Latin Maxims',
    phoneticOrLiteral: 'Latin: "Under judicial consideration"',
    detailedMeaning: 'A matter or case currently pending before a court of law or judicial officer for decision. Under legal convention, public discussion, media trials, or parliamentary debates on sub judice matters are restrained if they create a real risk of prejudicing a fair trial.',
    easyExample: 'During a sensitive murder trial, a television news channel hosts a live studio show voting on whether the accused is guilty or innocent. Because the trial is currently ongoing before the Sessions Court ("Sub Judice"), conducting a public media trial that could influence witnesses or prejudice the judge can amount to criminal contempt of court.',
    statutoryOrCaseRef: 'Contempt of Courts Act, 1971; Article 129 & 215 Constitution of India',
    relatedArticles: ['Article 19(2)', 'Article 129']
  },
  {
    term: 'Locus Standi',
    aliases: ['locus standi', 'standing'],
    category: 'Latin Maxims',
    phoneticOrLiteral: 'Latin: "A place of standing / the right to bring an action"',
    detailedMeaning: 'The legal capacity or standing of an individual or entity to institute proceedings in a court of law. Traditionally, only an aggrieved person whose personal legal rights were infringed had locus standi. In India, Public Interest Litigation (PIL) revolutionized this by relaxing locus standi for public causes.',
    easyExample: 'Historically, if a jailer beat a poor illiterate prisoner, only the prisoner could file a case. But in the 1980s, the Supreme Court relaxed "Locus Standi": any public-spirited lawyer or NGO (like Sunil Batra) can write a simple postcard to the Supreme Court on behalf of bonded laborers, prisoners, or abused children, and the Court will entertain it.',
    statutoryOrCaseRef: 'S.P. Gupta v. Union of India (1981); Bandhua Mukti Morcha (1984)',
    relatedArticles: ['Article 32', 'Article 226']
  },
  {
    term: 'Curative Petition',
    aliases: ['curative petition', 'curative'],
    category: 'Constitutional Law',
    phoneticOrLiteral: 'Remedy born out of Article 142 inherent plenary power',
    detailedMeaning: 'The ultimate, extraordinary post-review constitutional remedy invented by the 5-Judge Constitution Bench in Rupa Ashok Hurra (2002) to prevent abuse of court process and cure gross miscarriage of justice after a review petition has already been dismissed under Article 137.',
    easyExample: 'After losing an appeal and losing a review petition in the Supreme Court, a litigant discovers that one of the judges who decided the case held personal financial shares in the winning corporate party. Because there was gross judge bias violating natural justice, the litigant can file a final "Curative Petition" supported by a Senior Advocate\'s certificate, which is examined by the CJI and the senior-most judges.',
    statutoryOrCaseRef: 'Rupa Ashok Hurra v. Ashok Hurra (2002 5-Judge Bench) read with Articles 137 & 142',
    relatedArticles: ['Article 137', 'Article 142']
  },
  {
    term: 'Pith and Substance',
    aliases: ['pith and substance', 'doctrine of pith and substance'],
    category: 'Constitutional Law',
    phoneticOrLiteral: 'The true nature and character of legislation',
    detailedMeaning: 'A constitutional doctrine used to determine which legislative list (Union, State, or Concurrent) an enacted statute belongs to, by examining its true essence and substance rather than its incidental encroachment into another list.',
    easyExample: 'A State Legislature enacts a law banning alcohol sales within the state (Entry 8 State List - intoxicating liquors). A foreign liquor importer sues, arguing that banning alcohol affects import/export (Entry 41 Union List). The Supreme Court applies "Pith and Substance" in Balsara (1951): the core purpose of the law is public health and liquor control in the state; the effect on import is merely incidental, so the law is valid!',
    statutoryOrCaseRef: 'State of Bombay v. F.N. Balsara (1951); Article 246 Seventh Schedule',
    relatedArticles: ['Article 246']
  },
  {
    term: 'Colorable Legislation',
    aliases: ['colorable legislation', 'doctrine of colorable legislation'],
    category: 'Constitutional Law',
    phoneticOrLiteral: 'Latin: "Quando aliquid prohibetur ex directo, prohibetur et per obliquum" (What cannot be done directly cannot be done indirectly)',
    detailedMeaning: 'A doctrine checking whether a legislature, lacking constitutional power to enact a law on a particular subject, has enacted it under the false appearance, disguise, or "color" of an authorized legislative entry.',
    easyExample: 'A state legislature wants to seize a private coal mine without paying compensation, but the Constitution requires compensation. So the state passes a "Tax Law" imposing a 99.9% tax on that specific coal mine to bankrupt it and force forfeiture. The Supreme Court strikes this down as "Colorable Legislation": the legislature dressed up an illegal confiscation in the disguise of a tax entry.',
    statutoryOrCaseRef: 'K.C. Gajapati Narayan Deo v. State of Orissa (1953)',
    relatedArticles: ['Article 245', 'Article 246']
  },
  {
    term: 'Doctrine of Severability',
    aliases: ['severability', 'doctrine of severability'],
    category: 'Constitutional Law',
    phoneticOrLiteral: 'Separating the rotten part of a statute while saving the sound part',
    detailedMeaning: 'A constitutional rule of statutory interpretation under Article 13: if a specific section or clause of an Act violates Fundamental Rights, the entire Act is not struck down. If the unconstitutional section can be cleanly cut away (severed) leaving a viable, independent statute, only the offending clause is declared void.',
    easyExample: 'Parliament passes a 50-clause Consumer Protection Act. Clause 25 unconstitutionally states that consumers cannot hire lawyers. The Supreme Court doesn’t burn the entire 50-clause Act; it applies "Severability", surgically cuts out Clause 25, and allows the remaining 49 clauses to continue operating as valid law.',
    statutoryOrCaseRef: 'Article 13(1) & (2) Constitution of India; A.K. Gopalan (1950); R.M.D. Chamarbaugwalla (1957)',
    relatedArticles: ['Article 13']
  },
  {
    term: 'Doctrine of Eclipse',
    aliases: ['doctrine of eclipse', 'eclipse doctrine'],
    category: 'Constitutional Law',
    phoneticOrLiteral: 'Dormancy under the shadow of a Fundamental Right',
    detailedMeaning: 'A constitutional rule regarding pre-constitutional laws: a pre-1950 law that is inconsistent with a Part III Fundamental Right does not become dead or void ab initio; it remains in a dormant state (eclipsed) like a sun during an eclipse. If a constitutional amendment removes the shadow, the law automatically revives without needing to be re-enacted.',
    easyExample: 'A 1930 colonial statute gave the government a monopoly over motor transport. On 26 January 1950, Article 19(1)(g) (freedom of trade) came into force, creating an eclipse over the 1930 monopoly law. In 1951, the 1st Constitutional Amendment added Article 19(6) allowing state monopolies. The eclipse lifted, and the 1930 law immediately sprang back to life (Bhikaji Narain Dhakras 1955).',
    statutoryOrCaseRef: 'Article 13(1) Constitution of India; Bhikaji Narain Dhakras v. State of M.P. (1955)',
    relatedArticles: ['Article 13(1)']
  },
  {
    term: 'Basic Structure Doctrine',
    aliases: ['basic structure', 'basic structure doctrine'],
    category: 'Constitutional Law',
    phoneticOrLiteral: 'The indestructible constitutional core',
    detailedMeaning: 'The historic doctrine established by the 13-Judge Constitution Bench in Kesavananda Bharati (1973): Parliament possesses plenary power to amend any part of the Constitution under Article 368, but it cannot alter, destroy, or emasculate the basic foundation and essential structural pillars of the Constitution (such as democracy, secularism, rule of law, judicial review, federalism).',
    easyExample: 'Even if a political party wins a 100% majority in Lok Sabha and Rajya Sabha, they CANNOT pass a constitutional amendment declaring India a military dictatorship or abolishing the Supreme Court. Such an amendment would destroy the "Basic Structure", and the Supreme Court will instantly strike it down.',
    statutoryOrCaseRef: 'Kesavananda Bharati v. State of Kerala (1973 13-Judge Bench); Minerva Mills (1980)',
    relatedArticles: ['Article 368']
  },
  {
    term: 'Sovereign Immunity',
    aliases: ['sovereign immunity', 'tortious liability of state'],
    category: 'Constitutional Law',
    phoneticOrLiteral: 'Colonial maxim: "Rex non potest peccare" (The King can do no wrong)',
    detailedMeaning: 'The legal defence that the State cannot be sued or held liable for civil wrongs (torts) committed by its servants in the exercise of sovereign functions. In modern Indian constitutional law, the Supreme Court has drastically curtailed sovereign immunity by granting compensation under Articles 32 and 226 for fundamental rights violations.',
    easyExample: 'Police seize 500 grams of gold from a merchant on suspicion of smuggling and keep it in a police malkhana. A corrupt police head-constable steals the gold and flees. In 1965 (Kasturi Lal), the Supreme Court allowed sovereign immunity. But today, under Nilabati Behera (1993), sovereign immunity is dead for human rights violations: if police custody leads to death or disappearance, the State must pay compensation to the victim’s family.',
    statutoryOrCaseRef: 'Article 300 Constitution of India; Kasturi Lal (1965); Nilabati Behera (1993)',
    relatedArticles: ['Article 300', 'Article 21']
  },

  // ==================== PARLIAMENTARY & EXECUTIVE TERMS ====================
  {
    term: 'Quorum',
    aliases: ['quorum', 'parliamentary quorum'],
    category: 'Parliamentary & Governance',
    phoneticOrLiteral: 'Latin: "Of whom" - minimum statutory attendance requirement',
    detailedMeaning: 'The minimum number of members of a legislative house or committee whose presence is mandatory to constitute a valid meeting and conduct official legislative business. Under Article 100(3), quorum in either House of Parliament is fixed at one-tenth (10%) of the total membership.',
    easyExample: 'In the Lok Sabha with 543 seats, at least 55 MPs must be sitting in the chamber. If only 40 MPs show up on a Friday afternoon, the Speaker cannot take up voting on bills; the Speaker must ring the division bells or adjourn the House until 55 members are present.',
    statutoryOrCaseRef: 'Article 100(3) & (4) Constitution of India; Article 189(3) for State Assemblies',
    relatedArticles: ['Article 100', 'Article 189']
  },
  {
    term: 'Office of Profit',
    aliases: ['office of profit', 'disqualification office of profit'],
    category: 'Parliamentary & Governance',
    phoneticOrLiteral: 'Holding a governmental position capable of yielding pecuniary profit',
    detailedMeaning: 'A position under the Government of India or a State Government that yields financial gain, salary, honorarium, or patronage. Holding an unexempted office of profit creates an automatic constitutional disqualification for being chosen as, or for being, an MP or MLA under Articles 102(1)(a) and 191(1)(a).',
    easyExample: 'An elected MP is appointed chairperson of a state film development corporation that provides a salary, government bungalow, and official car. In Jaya Bachchan (2006), the Supreme Court held that the test is whether the office is capable of yielding profit, not whether the MP actually took the salary. Because the post carried perks, she was disqualified from Parliament.',
    statutoryOrCaseRef: 'Articles 102(1)(a) and 191(1)(a); Jaya Bachchan v. Union of India (2006)',
    relatedArticles: ['Article 102', 'Article 191']
  },
  {
    term: 'Prorogation',
    aliases: ['prorogation', 'prorogue', 'prorogued'],
    category: 'Parliamentary & Governance',
    phoneticOrLiteral: 'Latin: "Prorogare" (To prolong or defer)',
    detailedMeaning: 'The termination of a legislative session of Parliament or State Assembly by the President or Governor under Article 85/174. Unlike an adjournment (which pauses a sitting for hours or days), prorogation formally ends the session. In India, prorogation does NOT cause pending bills to lapse.',
    easyExample: 'When the Monsoon Session finishes all its scheduled debates, the Speaker first adjourns the House sine die. Then, the President issues a formal notification "proroguing" Parliament. The session is closed, and MPs go back to their constituencies until the Winter Session is summoned.',
    statutoryOrCaseRef: 'Article 85(2)(a) & Article 174(2)(a) Constitution of India',
    relatedArticles: ['Article 85', 'Article 174', 'Article 107']
  },
  {
    term: 'Dissolution of the House',
    aliases: ['dissolution', 'dissolve parliament', 'dissolved'],
    category: 'Parliamentary & Governance',
    phoneticOrLiteral: 'Extinction of the legislative life of the chamber',
    detailedMeaning: 'The formal termination of the existence of the House of the People (Lok Sabha) or State Legislative Assembly, ending the mandate of all sitting members and necessitating fresh general elections. Rajya Sabha and Legislative Councils, being permanent bodies, are never subject to dissolution.',
    easyExample: 'When the Lok Sabha completes its 5-year constitutional term (or when the Prime Minister loses a majority and recommends mid-term polls), the President dissolves the Lok Sabha. All sitting MPs lose their seats, and nationwide general elections are conducted.',
    statutoryOrCaseRef: 'Article 83(2) & Article 85(2)(b) Constitution of India',
    relatedArticles: ['Article 83', 'Article 85', 'Article 107']
  },
  {
    term: 'Adjournment Sine Die',
    aliases: ['adjournment sine die', 'sine die'],
    category: 'Parliamentary & Governance',
    phoneticOrLiteral: 'Latin: "Without assigning a day"',
    detailedMeaning: 'Terminating a sitting of Parliament or a State Legislature without naming a specific date or time for the next meeting. Executed by the presiding officer (Speaker or Chairman) at the end of a session prior to formal presidential prorogation.',
    easyExample: 'During daily sessions, the Speaker says: "The House is adjourned till 11 AM tomorrow". But on the last day of the session, the Speaker says: "The House stands adjourned sine die" (meaning the House is paused indefinitely without an assigned date).',
    statutoryOrCaseRef: 'Parliamentary Rules of Procedure and Conduct of Business',
    relatedArticles: ['Article 85', 'Article 118']
  },
  {
    term: 'Money Bill',
    aliases: ['money bill', 'money bills'],
    category: 'Parliamentary & Governance',
    phoneticOrLiteral: 'Exclusive fiscal statute under Article 110',
    detailedMeaning: 'A special category of bill that deals exclusively with the imposition, abolition, or regulation of taxes, borrowing of money by the Union Government, or outlays from the Consolidated Fund of India. It can only be introduced in the Lok Sabha with Presidential recommendation, and the Rajya Sabha cannot reject or amend it.',
    easyExample: 'A bill imposing a new corporate wealth tax or withdrawing money for government salaries is a Money Bill. It is introduced only in Lok Sabha. Once passed, it goes to Rajya Sabha. Rajya Sabha has only 14 days to suggest changes; whether Rajya Sabha approves it or not, the bill is deemed passed and sent to the President.',
    statutoryOrCaseRef: 'Article 110 Constitution of India; Aadhaar Case (Puttaswamy 2018)',
    relatedArticles: ['Article 109', 'Article 110']
  },
  {
    term: 'Consolidated Fund of India',
    aliases: ['consolidated fund', 'consolidated fund of india'],
    category: 'Parliamentary & Governance',
    phoneticOrLiteral: 'The sovereign revenue treasury of the Republic',
    detailedMeaning: 'The primary constitutional financial reservoir established under Article 266(1) into which all revenues received by the Government of India, all loans raised, and all loan repayments are deposited. Not a single rupee can be withdrawn from this fund except under an Appropriation Act passed by Parliament.',
    easyExample: 'Every time you pay GST, income tax, or customs duties, that money flows into the "Consolidated Fund of India". The Central Government cannot simply write a cheque from this fund to build a dam or buy military jets without introducing an Appropriation Bill in the Lok Sabha and getting Parliament’s legislative vote.',
    statutoryOrCaseRef: 'Article 266(1) & Article 114 Constitution of India',
    relatedArticles: ['Article 266', 'Article 114']
  },
  {
    term: 'Contingency Fund of India',
    aliases: ['contingency fund', 'contingency fund of india'],
    category: 'Parliamentary & Governance',
    phoneticOrLiteral: 'Imprest treasury reserve for unforeseen emergencies',
    detailedMeaning: 'An emergency imprest fund established under Article 267 placed at the disposal of the President of India to make advances for meeting unforeseen, urgent expenditures pending authorization by Parliament through supplementary appropriations.',
    easyExample: 'A massive sudden earthquake strikes a state while Parliament is not in session. Immediate relief operations require ₹1,000 crores today. The government cannot wait 2 months for Parliament to meet and pass an appropriation act. The President authorizes an advance from the "Contingency Fund" immediately. When Parliament meets next month, it passes an act to replenish the fund.',
    statutoryOrCaseRef: 'Article 267 Constitution of India; Contingency Fund of India Act, 1950',
    relatedArticles: ['Article 267']
  },
  {
    term: 'Ordinance',
    aliases: ['ordinance', 'promulgate ordinance', 'ordinances'],
    category: 'Parliamentary & Governance',
    phoneticOrLiteral: 'Temporary executive legislation during parliamentary recess',
    detailedMeaning: 'An extraordinary temporary law promulgated by the President (Art 123) or Governor (Art 213) when the legislature is not in session and urgent circumstances exist. An Ordinance has the same legal force as an Act of Parliament, but ceases to operate 6 weeks after the legislature reassembles.',
    easyExample: 'During Parliament\'s summer break, a sudden national financial crisis breaks out requiring immediate emergency regulations. The President signs an "Ordinance" which has the full force of a regular law. When Parliament reconvenes in July, Parliament must pass a bill within 6 weeks, or the ordinance automatically dies.',
    statutoryOrCaseRef: 'Article 123 & 213 Constitution of India; D.C. Wadhwa (1987); Krishna Kumar Singh (2017)',
    relatedArticles: ['Article 123', 'Article 213']
  },
  {
    term: 'Impeachment',
    aliases: ['impeachment', 'impeaching', 'impeached'],
    category: 'Parliamentary & Governance',
    phoneticOrLiteral: 'From Old French "Empêcher" - formal constitutional trial of high dignitaries',
    detailedMeaning: 'A quasi-judicial constitutional procedure by which Parliament charges, investigates, and removes high constitutional dignitaries (President under Art 61 for "violation of the Constitution", and Supreme Court/High Court judges under Art 124(4) for "proven misbehaviour or incapacity") by a super-majority vote.',
    easyExample: 'If a President actively tries to subvert the Constitution, a charge is signed by 1/4th members of one House. If passed by 2/3rd total membership of that House, the other House investigates. If the second House also passes the resolution by a 2/3rd majority of its total membership, the President is immediately removed from office.',
    statutoryOrCaseRef: 'Article 61 (President) & Article 124(4) (Judges) Constitution of India',
    relatedArticles: ['Article 61', 'Article 124', 'Article 217']
  },
  {
    term: 'Doctrine of Pleasure',
    aliases: ['doctrine of pleasure', 'pleasure of the president', 'pleasure doctrine'],
    category: 'Parliamentary & Governance',
    phoneticOrLiteral: 'From Latin "Durante bene placito" (During the good pleasure of the Sovereign)',
    detailedMeaning: 'The constitutional principle borrowed from British law where civil servants and certain constitutional officers (Ministers, Attorney-General, Governors) hold their posts during the pleasure of the President or Governor, meaning they can theoretically be removed without showing cause, subject to constitutional safeguards like Article 311 for civil servants.',
    easyExample: 'State Governors and the Attorney-General serve at the "pleasure of the President". When a new government takes power at the Centre, the Prime Minister advises the President to replace the Attorney-General and Governors. Because they hold office at pleasure, they do not have fixed 5-year guarantees like judges.',
    statutoryOrCaseRef: 'Article 310 & 311 Constitution of India; B.P. Singhal (2010); Tulsiram Patel (1985)',
    relatedArticles: ['Article 310', 'Article 311', 'Article 156']
  },

  // ==================== PREAMBLE & CORE CONSTITUTIONAL PRINCIPLES ====================
  {
    term: 'Sovereign',
    aliases: ['sovereign', 'sovereignty'],
    category: 'Constitutional Law',
    phoneticOrLiteral: 'Supreme, independent, and unconstrained authority',
    detailedMeaning: 'India is internally supreme and externally free from any outside control, foreign domination, or superior authority. No external nation or body (e.g. the British Crown or United Nations) can dictate laws or policies to the Republic of India.',
    easyExample: 'If a foreign power tries to order India to cancel an election or hand over territory, India can outright refuse. Because India is "Sovereign", our Parliament and Constitution hold ultimate domestic power, answerable to no foreign king, country, or corporation.',
    statutoryOrCaseRef: 'Preamble; Synthetics & Chemicals Ltd. v. State of U.P. (1990)',
    relatedArticles: ['Preamble', 'Article 1']
  },
  {
    term: 'Socialist',
    aliases: ['socialist', 'socialism', 'democratic socialism'],
    category: 'Constitutional Law',
    phoneticOrLiteral: 'Democratic socialism aiming to eliminate poverty, ignorance, disease, and inequality',
    detailedMeaning: 'Added by the 42nd Constitutional Amendment (1976). Indian socialism is a unique democratic blend of Marxism and Gandhian philosophy (leaning heavily toward Gandhian socialism), envisioning a mixed economy where the state works to end income disparity and provide social welfare rather than abolishing private property entirely.',
    easyExample: 'The government runs public buses, government hospitals providing free healthcare, and welfare ration shops (PDS) alongside private hospitals and private car companies. The goal is that the poor are not crushed by pure unbridled capitalism.',
    statutoryOrCaseRef: 'Preamble; D.S. Nakara v. Union of India (1983 5-Judge Bench)',
    relatedArticles: ['Preamble', 'Article 38', 'Article 39']
  },
  {
    term: 'Secular',
    aliases: ['secular', 'secularism', 'sarva dharma sambhava'],
    category: 'Constitutional Law',
    phoneticOrLiteral: 'Sarva Dharma Sambhava — equal respect for all religions without an official state religion',
    detailedMeaning: 'Added by the 42nd Amendment (1976), though intrinsic to Articles 25–28 from inception. Unlike Western negative secularism (strict wall of separation between church and state), Indian secularism is positive: the State has no official religion, treats all religions equally, and reserves the right to intervene to eliminate regressive social evils (like untouchability or dowry).',
    easyExample: 'The Indian Government does not declare Hinduism, Islam, or Christianity as the "State Religion". A Muslim, Hindu, Sikh, Christian, or Atheist has the exact same right to run for Prime Minister, open schools, or worship freely without State discrimination.',
    statutoryOrCaseRef: 'S.R. Bommai v. Union of India (1994 9-Judge Bench); Part of Basic Structure',
    relatedArticles: ['Preamble', 'Article 25', 'Article 26', 'Article 27', 'Article 28']
  },
  {
    term: 'Democratic',
    aliases: ['democratic', 'democracy', 'representative democracy'],
    category: 'Constitutional Law',
    phoneticOrLiteral: 'Rule of the people, by the people, for the people',
    detailedMeaning: 'A system of representative parliamentary government founded on universal adult suffrage (one person, one vote), periodic free and fair elections, rule of law, and an independent judiciary. Political democracy is intertwined with social and economic democracy.',
    easyExample: 'Every 5 years, every adult citizen over 18—from a billionaire industrialist to a roadside tea vendor—gets exactly one ballot vote of equal value to elect the government. If citizens are unhappy with their leaders, they can vote them out of office peacefully.',
    statutoryOrCaseRef: 'Preamble; Indira Nehru Gandhi v. Raj Narain (1975 5-Judge Bench)',
    relatedArticles: ['Preamble', 'Article 326']
  },
  {
    term: 'Republic',
    aliases: ['republic', 'republican'],
    category: 'Constitutional Law',
    phoneticOrLiteral: 'From Latin "Res publica" (Public affair) — an elected Head of State, not a hereditary monarch',
    detailedMeaning: 'A constitutional polity where supreme power resides in the people, public offices are open to all citizens without hereditary privilege, and the Head of State (the President of India) is elected by the people\'s representatives for a fixed term, rather than inheriting power by birth (unlike the British monarchy).',
    easyExample: 'In Britain, King Charles became King simply because his mother was Queen (hereditary monarchy). In India, any ordinary citizen—like Dr. A.P.J. Abdul Kalam or Droupadi Murmu—can be elected President of India through constitutional elections.',
    statutoryOrCaseRef: 'Preamble; Kesavananda Bharati (1973)',
    relatedArticles: ['Preamble', 'Article 54', 'Article 56']
  },
  {
    term: 'Justice',
    aliases: ['justice', 'social justice', 'economic justice', 'political justice'],
    category: 'Constitutional Law',
    phoneticOrLiteral: 'Fairness and rectification across Social, Economic, and Political spheres',
    detailedMeaning: 'The highest solemn promise of the Preamble, borrowed from the Russian Revolution (1917). It encompasses: Social Justice (eliminating caste, gender, and communal discrimination), Economic Justice (bridging vast wealth chasms), and Political Justice (equal political rights and access to governance).',
    easyExample: 'Social justice ensures a Dalit student cannot be denied admission to a law college; economic justice ensures minimum wage laws; political justice ensures every citizen can contest elections without property qualification.',
    statutoryOrCaseRef: 'Preamble; Air India Statutory Corp. v. United Labour Union (1997)',
    relatedArticles: ['Preamble', 'Article 38', 'Article 39A']
  },
  {
    term: 'Liberty',
    aliases: ['liberty', 'liberty of thought'],
    category: 'Constitutional Law',
    phoneticOrLiteral: 'Absence of arbitrary restraints combined with conditions for individual development',
    detailedMeaning: 'The fundamental guarantee of freedom of thought, expression, belief, faith, and worship, borrowed from the French Revolution (1789). Liberty in the Indian Constitution is not absolute license to do whatever one pleases, but regulated freedom balanced against public order, morality, and national security.',
    easyExample: 'You have the liberty to criticize government policies in newspaper articles or tweets, or choose to practice Buddhism or Islam, without fear of arbitrary police arrest, so long as you do not incite riots or violence.',
    statutoryOrCaseRef: 'Preamble; Maneka Gandhi v. Union of India (1978)',
    relatedArticles: ['Preamble', 'Article 19', 'Article 21', 'Article 25']
  },
  {
    term: 'Equality',
    aliases: ['equality', 'equality of status', 'equality before law'],
    category: 'Constitutional Law',
    phoneticOrLiteral: 'Absence of special privileges and provision of equal opportunity for all',
    detailedMeaning: 'The dual constitutional principle of "Equality before Law" (negative concept from Britain: no one is above the law) and "Equal Protection of the Laws" (positive concept from America: equals must be treated equally). It strikes down unreasoned arbitrariness and demands affirmative action to lift historically marginalized classes.',
    easyExample: 'If a traffic police officer catches someone jumping a red light, both a high-ranking politician and an auto-rickshaw driver must receive the exact same traffic ticket. Furthermore, the State can create special reservations for underprivileged students to give them an equal starting line.',
    statutoryOrCaseRef: 'Articles 14–18; E.P. Royappa (1974); Maneka Gandhi (1978)',
    relatedArticles: ['Preamble', 'Article 14', 'Article 15', 'Article 16']
  },
  {
    term: 'Fraternity',
    aliases: ['fraternity', 'brotherhood'],
    category: 'Constitutional Law',
    phoneticOrLiteral: 'A sense of common brotherhood and psychological unity transcending narrow barriers',
    detailedMeaning: 'Dr. B.R. Ambedkar stressed that without fraternity, liberty and equality cannot coexist. Fraternity fosters emotional integration and unity across diverse religions, languages, and castes, ensuring both individual dignity and national unity/integrity.',
    easyExample: 'Even though an Indian citizen from Kashmir speaks Kashmiri and an Indian from Kerala speaks Malayalam, fraternity is the shared civic bond that makes them recognize each other as fellow equal citizens of one single homeland.',
    statutoryOrCaseRef: 'Preamble; Nandini Sundar v. State of Chhattisgarh (2011)',
    relatedArticles: ['Preamble', 'Article 51A(e)']
  },
  {
    term: 'Rule of Law',
    aliases: ['rule of law', 'supremacy of law'],
    category: 'Constitutional Law',
    phoneticOrLiteral: 'Dicey\'s Doctrine: Absolute supremacy of regular law over arbitrary prerogative',
    detailedMeaning: 'The governance foundation holding that no individual—whether the Prime Minister, Police Chief, or President—is above the law, and every executive action must be authorized by valid law. It prohibits arbitrary despotism and guarantees fair, equal legal procedures for all.',
    easyExample: 'Police cannot bulldoze a suspect’s house or throw someone in prison purely because a Chief Minister or Minister ordered it verbally. Every action must follow due statutory procedure established by law.',
    statutoryOrCaseRef: 'A.K. Kraipak (1969); Indira Nehru Gandhi (1975); Basic Structure pillar',
    relatedArticles: ['Article 14', 'Article 21']
  },
  {
    term: 'Judicial Review',
    aliases: ['judicial review', 'power of judicial review'],
    category: 'Constitutional Law',
    phoneticOrLiteral: 'Inherent judicial power to examine constitutionality of legislative and executive acts',
    detailedMeaning: 'The constitutional mechanism whereby the Supreme Court (Art 32) and High Courts (Art 226) review legislative enactments and executive orders, striking them down as null and void (ultra vires) if they violate Fundamental Rights or any provision of the Constitution.',
    easyExample: 'Parliament passes a law prohibiting journalists from publishing government audit reports. A journalist files a writ under Article 32. The Supreme Court reviews the statute, finds it violates free speech under Article 19(1)(a), and strikes the law down completely.',
    statutoryOrCaseRef: 'Marbury v. Madison (1803); L. Chandra Kumar v. Union of India (1997 7-Judge Bench)',
    relatedArticles: ['Article 13', 'Article 32', 'Article 226']
  },
  {
    term: 'Separation of Powers',
    aliases: ['separation of powers', 'doctrine of separation of powers'],
    category: 'Constitutional Law',
    phoneticOrLiteral: 'Montesquieu\'s tripartite institutional balance: Legislature, Executive, Judiciary',
    detailedMeaning: 'The structural constitutional principle where the Legislature makes laws, the Executive administers and executes laws, and the Judiciary interprets laws and adjudicates disputes. While India does not follow strict water-tight separation like the US, it maintains a robust system of checks and balances.',
    easyExample: 'Judges cannot write new criminal statutes (that is Parliament’s job), the Prime Minister cannot overturn a murder acquittal (that is the court’s job), and Parliament cannot dismiss a judge without a two-thirds impeachment vote.',
    statutoryOrCaseRef: 'Kesavananda Bharati (1973); Indira Gandhi v. Raj Narain (1975)',
    relatedArticles: ['Article 50', 'Article 121', 'Article 122', 'Article 211', 'Article 212']
  },
  {
    term: 'Writ / Prerogative Writs',
    aliases: ['writs', 'writ', 'prerogative writs', 'writ petition'],
    category: 'Constitutional Law',
    phoneticOrLiteral: 'From Old English "Gewrit" (formal written judicial order under royal seal)',
    detailedMeaning: 'Extraordinary constitutional remedies issued by the Supreme Court (Article 32) and High Courts (Article 226) to enforce Fundamental Rights and correct administrative injustice. The 5 constitutional writs are Habeas Corpus, Mandamus, Prohibition, Certiorari, and Quo Warranto.',
    easyExample: 'If a municipal corporation illegally cancels a vendor’s trading license without notice or reason, the vendor doesn’t need to wait 10 years in a subordinate civil court; they file a "Writ Petition" in the High Court under Article 226, and the High Court immediately orders the municipal corporation to explain its conduct.',
    statutoryOrCaseRef: 'Article 32 & Article 226 Constitution of India',
    relatedArticles: ['Article 32', 'Article 226']
  },
  {
    term: 'Fundamental Rights',
    aliases: ['fundamental rights', 'fundamental right'],
    category: 'Constitutional Law',
    phoneticOrLiteral: 'Magna Carta of India — judicially enforceable foundational liberties in Part III',
    detailedMeaning: 'The basic civil liberties guaranteed to all citizens (and in some cases non-citizens) under Articles 12 to 35, enforceable directly against the State before the Supreme Court under Article 32. They are essential for the preservation of human dignity, equality, and democratic freedom.',
    easyExample: 'If the government passes an order banning women from working night shifts in IT companies, an affected engineer can petition the Supreme Court directly because her Fundamental Right against gender discrimination (Article 15) and right to livelihood (Article 21) are infringed.',
    statutoryOrCaseRef: 'Part III Constitution of India; Maneka Gandhi (1978)',
    relatedArticles: ['Article 12', 'Article 13', 'Article 14', 'Article 19', 'Article 21', 'Article 32']
  },
  {
    term: 'Directive Principles of State Policy',
    aliases: ['directive principles', 'dpsp', 'directive principle'],
    category: 'Constitutional Law',
    phoneticOrLiteral: 'Instruments of Instructions for establishing a socio-economic Welfare State',
    detailedMeaning: 'Constitutional guidelines and socio-economic goals enshrined in Part IV (Articles 36 to 51) borrowed from Ireland. While not directly enforceable by courts (non-justiciable under Article 37), they are fundamental in the governance of the country and guide courts in interpreting Fundamental Rights.',
    easyExample: 'When Parliament passed the Maternity Benefit Act or the Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA), it was fulfilling the Directive Principles under Article 41 (Right to work) and Article 42 (Maternity relief).',
    statutoryOrCaseRef: 'Part IV Constitution of India; Minerva Mills v. UOI (1980)',
    relatedArticles: ['Article 36', 'Article 37', 'Article 38', 'Article 39', 'Article 44']
  },

  // ==================== CRIMINAL PROCEDURE & PROSECUTORIAL TERMS ====================
  {
    term: 'First Information Report (FIR)',
    aliases: ['first information report', 'fir'],
    category: 'Criminal Law',
    phoneticOrLiteral: 'The statutory threshold document initiating criminal investigation in cognizable crimes',
    detailedMeaning: 'The earliest information given to an officer in charge of a police station relating to the commission of a cognizable offence, recorded under Section 173 BNSS 2023 (Section 154 CrPC). Registration of an FIR is mandatory whenever information discloses the commission of a cognizable offence.',
    easyExample: 'A shopkeeper’s store is broken into at midnight and ₹2 lakhs in cash is stolen. The shopkeeper rushes to the police station. The police duty officer must immediately record his statement in the official book, register an FIR, hand him a free copy, and start investigating. In Lalita Kumari (2014), the Supreme Court ruled that police cannot refuse to register an FIR for cognizable crimes.',
    statutoryOrCaseRef: 'Section 173 BNSS 2023 (formerly Section 154 CrPC); Lalita Kumari v. Govt of UP (2014 5-Judge Bench)',
    relatedArticles: ['Article 21']
  },
  {
    term: 'Bail & Bail Bond',
    aliases: ['bail', 'bail bond', 'surety'],
    category: 'Criminal Law',
    phoneticOrLiteral: 'From Old French "Baillier" (To deliver / entrust into safe keeping)',
    detailedMeaning: 'The temporary or conditional release of an accused person awaiting trial or appeal, upon their undertaking (personal bond) with or without financial guarantors (sureties) that they will appear in court whenever required and not tamper with evidence or flee justice.',
    easyExample: 'A person is arrested on suspicion of fraud. Instead of sitting in jail for 2 years while the trial drags on, the court grants him bail upon signing a ₹50,000 bond with his brother standing as "surety" (guarantor). If the accused skips court, the brother forfeits the ₹50,000 to the government.',
    statutoryOrCaseRef: 'BNSS 2023 Chapter XXXV (CrPC Chapter XXXIII); Babu Singh v. State of UP (1978)',
    relatedArticles: ['Article 21']
  },
  {
    term: 'Remand',
    aliases: ['remand', 'remanded'],
    category: 'Criminal Law',
    phoneticOrLiteral: 'From Latin "Remandare" (To send back into custody under judicial order)',
    detailedMeaning: 'The judicial order by a Magistrate sending an arrested person back into custody (either police custody or judicial custody) when the police cannot complete an investigation within the statutory 24-hour window under Section 187 BNSS (Section 167 CrPC) and Article 22(2).',
    easyExample: 'Police arrest a burglary suspect on Monday morning. By Tuesday morning (24 hours), they must produce him physically before the Judicial Magistrate. If police need 2 more days to find the hidden stash of stolen jewelry, the Magistrate signs a "Remand Order" allowing 2 days of police custody.',
    statutoryOrCaseRef: 'Section 187 BNSS 2023 (formerly Section 167 CrPC); Article 22(2) Constitution',
    relatedArticles: ['Article 21', 'Article 22(2)']
  },
  {
    term: 'Investigation vs Inquiry vs Trial',
    aliases: ['investigation', 'inquiry', 'trial', 'criminal trial'],
    category: 'Criminal Law',
    phoneticOrLiteral: 'The three distinct chronological stages of criminal procedure',
    detailedMeaning: '1. Investigation: Conducted exclusively by police officers to collect evidence (arrests, searches, interrogations, forensic tests). 2. Inquiry: Conducted by a Magistrate or Court (not police) prior to framing charges to examine whether a prima facie case exists. 3. Trial: The judicial determination of guilt or innocence before a competent court concluding in acquittal or conviction.',
    easyExample: 'Police searching for weapons, taking fingerprints, and recording statements is the "Investigation". The Magistrate reviewing the chargesheet to see if a real case exists is the "Inquiry". The courtroom examination of witnesses under oath, arguments by the prosecutor, and final judgment is the "Trial".',
    statutoryOrCaseRef: 'BNSS 2023 Section 2(1)(l), (m), and Chapter XIX–XXII',
    relatedArticles: ['Article 21']
  },
  {
    term: 'Discharge vs Acquittal',
    aliases: ['discharge', 'acquittal', 'acquitted', 'discharged'],
    category: 'Criminal Law',
    phoneticOrLiteral: 'Pre-trial dismissal for lack of prima facie case vs post-trial verdict of innocence',
    detailedMeaning: 'Discharge occurs before trial: if the Magistrate or Sessions Court finds that the charge sheet does not disclose even a prima facie case against the accused, they are discharged without framing charges. Acquittal occurs after a full judicial trial: after examining all prosecution evidence and witnesses, the court finds the accused not guilty beyond reasonable doubt.',
    easyExample: 'If police charge someone with theft, but CCTV footage clearly shows they were out of the country on that date, the judge will "Discharge" them immediately without making them endure a multi-year trial. If a trial actually takes place and witnesses fail to prove guilt, the judge delivers an "Acquittal". An acquitted person is protected by Double Jeopardy; a discharged person can theoretically be recharged if fresh evidence emerges.',
    statutoryOrCaseRef: 'Section 250 & 255 BNSS (CrPC Sec 227 & 232); State of Karnataka v. L. Muniswamy (1977)',
    relatedArticles: ['Article 20(2)', 'Article 21']
  },
  {
    term: 'Compoundable Offence',
    aliases: ['compoundable', 'compoundable offence', 'compounding'],
    category: 'Criminal Law',
    phoneticOrLiteral: 'Statutory settlement and compromise of criminal offences between victim and accused',
    detailedMeaning: 'A class of offences specified in Section 359 BNSS (Section 320 CrPC) where the victim and accused can reach a compromise or settlement. Compounding has the complete legal effect of an acquittal of the accused person.',
    easyExample: 'Two neighbors get into a shouting match and one slaps the other (causing simple hurt). Later, they apologize, shake hands, and sign a compromise agreement in court. Because simple hurt is a "compoundable offence", the court allows them to compound it, which completely ends the criminal case with the effect of an acquittal.',
    statutoryOrCaseRef: 'Section 359 BNSS 2023 (formerly Section 320 CrPC)',
    relatedArticles: ['Article 21']
  },
  {
    term: 'Dying Declaration',
    aliases: ['dying declaration'],
    category: 'Criminal Law',
    phoneticOrLiteral: 'Nemo moriturus praesumitur mentiri — A dying man is presumed not to lie',
    detailedMeaning: 'A statement made by a person as to the cause of their death or as to any of the circumstances of the transaction which resulted in their death, admissible as substantive evidence under Section 26(a) BSA 2023 (Section 32(1) Indian Evidence Act 1872). It can form the sole basis of conviction if found truthful and voluntary.',
    easyExample: 'A victim is severely burned in a dowry attack. While in hospital, a Magistrate and doctor record her statement where she explicitly names her in-laws as having poured kerosene. Even though the victim dies and cannot be cross-examined in court, her "Dying Declaration" is powerful admissible evidence that can convict the accused.',
    statutoryOrCaseRef: 'Section 26(a) Bharatiya Sakshya Adhiniyam, 2023 (Sec 32(1) IEA); Sharad Birdhichand Sarda (1984)',
    relatedArticles: ['Article 21']
  },
  {
    term: 'Test Identification Parade (TIP)',
    aliases: ['test identification parade', 'tip'],
    category: 'Criminal Law',
    phoneticOrLiteral: 'Corroborative forensic identity test under Section 54 BNSS / Section 9 BSA',
    detailedMeaning: 'A procedural investigative drill conducted usually in prison before a Magistrate where a suspect is placed among several innocent dummy persons of similar age and appearance, and an eyewitness who saw the stranger committing the crime is asked to pick out the perpetrator.',
    easyExample: 'A masked robber enters a bank and shoots a guard. An eyewitness caught a 5-second glimpse of his face. When police arrest a suspect 2 weeks later, they place him in a lineup of 8 similar-looking men in jail. The eyewitness enters and points to the suspect. This successful "TIP" strongly corroborates the witness\'s courtroom testimony.',
    statutoryOrCaseRef: 'Section 54 BNSS 2023 (Sec 54A CrPC) read with Section 9 Bharatiya Sakshya Adhiniyam, 2023',
    relatedArticles: ['Article 21']
  },
  {
    term: 'Magna Carta',
    aliases: ['magna carta', 'magna carta of india', 'lex magna'],
    category: 'Constitutional Law',
    phoneticOrLiteral: 'Latin: "Great Charter of Freedoms" (1215 English royal charter)',
    detailedMeaning: 'The historic 1215 English royal charter forced upon King John by feudal barons at Runnymede, establishing the foundational global doctrine that the King/Sovereign is not above the law. In Indian jurisprudence, Part III (Fundamental Rights) is universally venerated by the Supreme Court as the "Magna Carta of India" because it guarantees inviolable civil liberties and judicial remedies enforceable against the State.',
    easyExample: 'In medieval England, the King could seize anyone\'s land or execute them on a whim until the Magna Carta forced the King to obey the law of the land. In modern India, Part III of the Constitution serves as our Magna Carta: the police, ministers, or government cannot arbitrarily arrest you, censor your speech, or confiscate your home without strict due process of law.',
    statutoryOrCaseRef: 'Part III Constitution of India; A.K. Gopalan (1950); Maneka Gandhi (1978)',
    relatedArticles: ['Part III', 'Article 21', 'Article 32']
  },
  {
    term: 'Bill of Rights',
    aliases: ['bill of rights', 'us bill of rights'],
    category: 'Constitutional Law',
    phoneticOrLiteral: 'Constitutional catalog of inalienable citizen immunities',
    detailedMeaning: 'Originally the first 10 amendments to the United States Constitution (1791), which served as the primary comparative inspiration for Dr. B.R. Ambedkar and the drafting committee when crafting Part III (Fundamental Rights). Unlike the US Bill of Rights which phrases rights in absolute terms, the Indian Constitution deliberately incorporates explicit reasonable restrictions directly within the clauses.',
    easyExample: 'When India gained freedom, the framers studied the American Bill of Rights to ensure no future Indian government could ever silence free speech or seize printing presses, adapting those American guarantees into our Fundamental Rights.',
    statutoryOrCaseRef: 'Part III Constitution of India; Constituent Assembly Debates (1948–49)',
    relatedArticles: ['Part III', 'Article 19', 'Article 21']
  },
  {
    term: 'Karachi Resolution (1931)',
    aliases: ['karachi resolution', 'karachi resolution (1931)', 'karachi session'],
    category: 'Constitutional Law',
    phoneticOrLiteral: 'The historic 1931 Congress blueprint for Fundamental Rights and National Economic Policy',
    detailedMeaning: 'A historic resolution adopted at the Karachi Session of the Indian National Congress in March 1931, presided over by Sardar Vallabhbhai Patel and drafted by Pt. Jawaharlal Nehru with Mahatma Gandhi. It was the first formal political declaration in colonial India committing to free speech, religious freedom, universal adult franchise, equality before law, and workers\' rights, directly shaping Parts III & IV of the Constitution.',
    easyExample: 'Nearly 20 years before the Indian Constitution was written, freedom fighters met at Karachi in 1931 and pledged that a free India would grant equal rights to every citizen, eliminate caste untouchability, and guarantee religious freedom for all.',
    statutoryOrCaseRef: 'Karachi Congress Session (March 1931); Constituent Assembly Objective Resolution',
    relatedArticles: ['Preamble', 'Part III', 'Part IV']
  },
  {
    term: 'Golden Triangle',
    aliases: ['golden triangle', 'golden triangle of the constitution'],
    category: 'Constitutional Law',
    phoneticOrLiteral: 'The synergistic constitutional trinity: Articles 14, 19, and 21',
    detailedMeaning: 'The foundational constitutional doctrine established in Maneka Gandhi (1978) and Minerva Mills (1980) holding that Articles 14 (Equality), 19 (Six Freedoms), and 21 (Life and Liberty) do not operate as separate silos, but form an intertwined, organic whole. Any law depriving personal liberty must simultaneously satisfy Article 14 (non-arbitrariness) and Article 19 (reasonableness).',
    easyExample: 'If the government passes a law saying "The State can cancel any citizen\'s passport without giving reasons", the State cannot defend it by saying "We followed an official statute". The law must pass all three corners of the Golden Triangle: it must not be arbitrary (Art 14), must be a reasonable restriction (Art 19), and must be just and fair (Art 21).',
    statutoryOrCaseRef: 'Maneka Gandhi v. Union of India (1978 7-Judge Bench); Minerva Mills (1980 5-Judge Bench)',
    relatedArticles: ['Article 14', 'Article 19', 'Article 21']
  },
  {
    term: 'Reasonable Restrictions',
    aliases: ['reasonable restrictions', 'reasonable restriction'],
    category: 'Constitutional Law',
    phoneticOrLiteral: 'Judicially reviewable statutory boundaries under Article 19(2)–(6)',
    detailedMeaning: 'The doctrine that fundamental freedoms guaranteed under Article 19(1) are not absolute licenses. The State can impose reasonable restrictions on narrow statutory grounds (e.g. sovereignty/integrity of India, public order, decency, morality). The restriction must satisfy the doctrine of proportionality and have a direct nexus with the statutory objective.',
    easyExample: 'You have freedom of speech under Article 19(1)(a), but that does not allow you to give a speech inciting a mob to burn down a public building. The State can arrest you under "reasonable restrictions" to preserve public order.',
    statutoryOrCaseRef: 'Article 19(2)–(6) Constitution of India; Chintaman Rao (1951); Anuradha Bhasin (2020)',
    relatedArticles: ['Article 19']
  },
  {
    term: 'Civil Liberties',
    aliases: ['civil liberties', 'civil liberty'],
    category: 'Constitutional Law',
    phoneticOrLiteral: 'Individual rights and legal protections against state overreach',
    detailedMeaning: 'Basic individual freedoms guaranteed by law and the Constitution that protect citizens from arbitrary governmental interference, including freedom of speech, assembly, movement, conscience, privacy, and personal liberty.',
    easyExample: 'Your freedom to walk peacefully in the street, criticize government policy online, keep your phone calls private, and not be detained without being told why are your fundamental civil liberties.',
    statutoryOrCaseRef: 'Part III Constitution of India; K.S. Puttaswamy (2017 9-Judge Bench)',
    relatedArticles: ['Article 19', 'Article 21']
  }
];
