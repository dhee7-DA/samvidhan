export interface ForensicWord {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  category: string;
  meaning: string;
  example: string;
  legalContext?: string;
  synonyms?: string[];
}

export const FORENSIC_VOCABULARY: Record<string, ForensicWord> = {
  promulgate: {
    word: "promulgate",
    phonetic: "/ˈprɒm.əl.ɡeɪt/",
    partOfSpeech: "verb",
    category: "Constitutional & Legislative",
    meaning: "To officially proclaim, publish, or put a law, ordinance, or administrative decree into formal legal effect.",
    example: "Under Article 123, the President may promulgate an Ordinance when both Houses of Parliament are prorogued and immediate action is warranted.",
    legalContext: "Used extensively in Articles 123 and 213 regarding Presidential and Gubernatorial ordinances.",
    synonyms: ["enact", "proclaim", "decree", "issue"]
  },
  prorogue: {
    word: "prorogue",
    phonetic: "/prəˈrəʊɡ/",
    partOfSpeech: "verb",
    category: "Parliamentary Procedure",
    meaning: "To terminate a legislative session of Parliament or State Assembly without dissolving the House itself.",
    example: "The Governor issued a formal notification under Article 174(2)(a) to prorogue the monsoon session of the Legislative Assembly.",
    legalContext: "Articles 85(2)(a) and 174(2)(a). Differs from 'adjournment' (which pauses a sitting) and 'dissolution' (which ends the life of the assembly).",
    synonyms: ["suspend", "recess", "discontinue"]
  },
  derogate: {
    word: "derogate",
    phonetic: "/ˈdɛr.ə.ɡeɪt/",
    partOfSpeech: "verb",
    category: "Constitutional Law",
    meaning: "To take away from, detract, diminish, or partially repeal the authority, scope, or force of a law or fundamental guarantee.",
    example: "Article 13(2) mandates that the State shall not make any law which takes away or derogates from the Fundamental Rights conferred by Part III.",
    legalContext: "Article 13(2), Article 21, and international human rights covenants regarding non-derogable rights.",
    synonyms: ["detract", "diminish", "curtail", "abridge"]
  },
  repugnancy: {
    word: "repugnancy",
    phonetic: "/rɪˈpʌɡ.nən.si/",
    partOfSpeech: "noun",
    category: "Federal Relations",
    meaning: "An irreconcilable direct conflict or contradiction between two laws enacted by different legislative bodies over the same subject matter.",
    example: "Under Article 254(1), where a State enactment in List III is directly repugnant to a Central statute, the parliamentary law prevails and the State law is void to the extent of repugnancy.",
    legalContext: "Article 254 and M. Karunanidhi v. Union of India (1979).",
    synonyms: ["inconsistency", "contradiction", "conflict", "clash"]
  },
  abeyance: {
    word: "abeyance",
    phonetic: "/əˈbeɪ.əns/",
    partOfSpeech: "noun",
    category: "Judicial & Administrative",
    meaning: "A state of temporary disuse, suspension, dormancy, or postponement pending a future contingency or adjudication.",
    example: "The High Court ordered the disciplinary recovery proceedings to be kept in abeyance until the criminal appeal is conclusively decided.",
    legalContext: "Often applied to executive orders, disqualification petitions, or recovery notices stayed by courts.",
    synonyms: ["suspension", "dormancy", "moratorium", "freeze"]
  },
  fetter: {
    word: "fetter",
    phonetic: "/ˈfɛt.ər/",
    partOfSpeech: "verb",
    category: "Administrative & Constitutional",
    meaning: "To restrain, bind, restrict, or place an unlawful pre-condition on the exercise of statutory or constitutional discretion.",
    example: "An administrative tribunal cannot fetter its discretionary jurisdiction by rigidly adhering to an internal circular that conflicts with the governing statute.",
    legalContext: "Rule against fettering discretion in Administrative Law (Associated Provincial Picture Houses v. Wednesbury Corp).",
    synonyms: ["shackle", "hamper", "constrain", "restrict"]
  },
  vitiate: {
    word: "vitiate",
    phonetic: "/ˈvɪʃ.i.eɪt/",
    partOfSpeech: "verb",
    category: "Criminal & Procedural",
    meaning: "To spoil, impair the quality of, invalidate, corrupt, or render completely void in the eye of law.",
    example: "Failure of the police to supply written grounds of arrest to the accused at the time of detention under Article 22(1) vitiates the entire remand order ab initio (Prabir Purkayastha 2024).",
    legalContext: "Sections 460 and 461 CrPC / BNSS (irregularities which do and do not vitiate proceedings).",
    synonyms: ["invalidate", "nullify", "corrupt", "taint"]
  },
  subsume: {
    word: "subsume",
    phonetic: "/səbˈsjuːm/",
    partOfSpeech: "verb",
    category: "Legal Interpretation",
    meaning: "To include, absorb, or incorporate a specific rule, element, or right under a broader, more comprehensive legal category.",
    example: "In Mohit Minerals (2022), the Supreme Court ruled that ocean freight transportation is subsumed within the CIF valuation of imported goods at customs clearance.",
    legalContext: "Commonly used when evaluating fundamental rights incorporated into Article 21 (e.g., right to privacy, clean air, speedy trial).",
    synonyms: ["incorporate", "absorb", "encompass", "include"]
  },
  indefeasible: {
    word: "indefeasible",
    phonetic: "/ˌɪn.dɪˈfiː.zə.bəl/",
    partOfSpeech: "adjective",
    category: "Criminal Procedure",
    meaning: "Not capable of being forfeited, lost, voided, annulled, or taken away by executive discretion.",
    example: "Once the statutory 60 or 90 days elapse without a chargesheet being filed, the accused acquires an indefeasible right to default bail under Section 187 BNSS (Bikramjit Singh 2020).",
    legalContext: "Default bail under Section 167(2) CrPC / Section 187 BNSS and M. Ravindran v. Directorate of Revenue Intelligence (2020).",
    synonyms: ["inalienable", "unforfeitable", "absolute", "invulnerable"]
  },
  puisne: {
    word: "puisne",
    phonetic: "/ˈpjuː.ni/",
    partOfSpeech: "adjective",
    category: "Judicial Hierarchy",
    meaning: "Junior or associate in rank; designating all sitting judges of a Superior Court other than the Chief Justice.",
    example: "The Collegium for appointments to the Supreme Court comprises the Chief Justice of India and the four senior-most puisne judges of the apex court.",
    legalContext: "Articles 124(2) and 217(1) governing appointment of Supreme Court and High Court judges.",
    synonyms: ["associate", "junior", "subordinate"]
  },
  plenary: {
    word: "plenary",
    phonetic: "/ˈpliː.nər.i/",
    partOfSpeech: "adjective",
    category: "Constitutional Law",
    meaning: "Full, complete, absolute, and unqualified in power, scope, or jurisdiction.",
    example: "Article 142 confers plenary powers upon the Supreme Court to pass any decree or order necessary for doing complete justice in any cause pending before it.",
    legalContext: "Article 142 (complete justice) and Article 246 (legislative competence of Parliament).",
    synonyms: ["absolute", "unlimited", "exhaustive", "complete"]
  },
  quash: {
    word: "quash",
    phonetic: "/kwɒʃ/",
    partOfSpeech: "verb",
    category: "Judicial Remedies",
    meaning: "To reject, vacate, void, or officially declare an FIR, chargesheet, summons, or subordinate judicial order null and unenforceable.",
    example: "The High Court exercised its inherent powers under Section 528 BNSS (former 482 CrPC) to quash the malicious criminal complaint alleging cheating where the dispute was purely civil.",
    legalContext: "Section 528 BNSS, Article 226, and State of Haryana v. Bhajan Lal (1992).",
    synonyms: ["annul", "nullify", "invalidate", "void"]
  },
  adjudicate: {
    word: "adjudicate",
    phonetic: "/əˈdʒuː.dɪ.keɪt/",
    partOfSpeech: "verb",
    category: "Judicial Procedure",
    meaning: "To hear evidence, examine statutory provisions, and make a formal judicial judgment or determination regarding a disputed matter.",
    example: "The Speaker acts as an administrative tribunal when adjudicating disqualification petitions under Paragraph 6 of the Tenth Schedule (Kihoto Hollohan 1992).",
    legalContext: "Adjudication of civil suits, criminal charges, and inter-state water disputes under Article 262.",
    synonyms: ["judge", "decide", "arbitrate", "determine"]
  },
  remand: {
    word: "remand",
    phonetic: "/rɪˈmɑːnd/",
    partOfSpeech: "noun / verb",
    category: "Criminal Procedure",
    meaning: "The judicial commitment of an arrested accused person to authorized police custody or judicial prison custody pending investigation or trial.",
    example: "A Magistrate cannot mechanically grant police remand on a printed form; the Magistrate must record speaking reasons demonstrating application of mind under Section 187 BNSS.",
    legalContext: "Section 187 BNSS (former Section 167 CrPC) and Article 22(2).",
    synonyms: ["custody order", "committal", "detention"]
  },
  cognizance: {
    word: "cognizance",
    phonetic: "/ˈkɒɡ.nɪ.zəns/",
    partOfSpeech: "noun",
    category: "Criminal Procedure",
    meaning: "The judicial notice or initial consideration taken by a Magistrate of an alleged offence to initiate criminal proceedings against the accused.",
    example: "Cognizance is taken of the 'offence', not of the 'offender'; once a Magistrate takes cognizance on a police report, any perpetrator involved can be summoned.",
    legalContext: "Section 210 BNSS (former Section 190 CrPC) and Chief Enforcement Officer v. Videocon (2008).",
    synonyms: ["judicial notice", "recognition", "jurisdiction"]
  },
  exigent: {
    word: "exigent",
    phonetic: "/ˈɛk.sɪ.dʒənt/",
    partOfSpeech: "adjective",
    category: "Administrative & Constitutional",
    meaning: "Pressing, urgent, critical, or requiring immediate emergency action without customary delays.",
    example: "Police may enter and search premises without a prior judicial warrant only in exigent circumstances where contraband or weapons are at imminent risk of destruction.",
    legalContext: "Doctrine of exigent circumstances in search and seizure jurisprudence under Article 21.",
    synonyms: ["urgent", "pressing", "critical", "acute"]
  },
  surplusage: {
    word: "surplusage",
    phonetic: "/ˈsɜː.pləs.ɪdʒ/",
    partOfSpeech: "noun",
    category: "Statutory Interpretation",
    meaning: "Superfluous, redundant, or unnecessary matter in a statute or legal pleading that may be struck out without affecting validity.",
    example: "The cardinal rule of statutory interpretation dictates that the legislature does not waste words; courts must avoid treating any constitutional phrase as mere surplusage.",
    legalContext: "Rule against surplusage in Constitutional Interpretation (R.S. Nayak v. A.R. Antulay 1984).",
    synonyms: ["redundancy", "excess", "superfluity"]
  },
  concurrence: {
    word: "concurrence",
    phonetic: "/kənˈkʌr.əns/",
    partOfSpeech: "noun",
    category: "Constitutional Law",
    meaning: "Agreement, consensus, or mandatory assent required between two constitutional authorities before an official act can take legal effect.",
    example: "In the Second Judges Case (1993), the Supreme Court ruled that 'consultation' with the Chief Justice of India under Article 124(2) means 'concurrence' of the Collegium.",
    legalContext: "Articles 124(2), 217(1), and Article 370 concurrence clauses.",
    synonyms: ["agreement", "assent", "consensus", "approval"]
  },
  acquittal: {
    word: "acquittal",
    phonetic: "/əˈkwɪt.əl/",
    partOfSpeech: "noun",
    category: "Criminal Law",
    meaning: "A formal judicial verdict declaring that an accused person is free from a criminal charge and has not been proven guilty beyond reasonable doubt.",
    example: "Following an honorable acquittal by the Sessions Court, the accused is entitled to immediate restoration of his fundamental liberty and service pension.",
    legalContext: "Section 255 BNSS (former 232/235 CrPC) and Article 20(2).",
    synonyms: ["absolution", "exoneration", "clearance"]
  },
  discharge: {
    word: "discharge",
    phonetic: "/dɪsˈtʃɑːdʒ/",
    partOfSpeech: "noun / verb",
    category: "Criminal Procedure",
    meaning: "An order releasing the accused before framing of charges because the allegations and prosecution records disclose no ground for proceeding.",
    example: "The Sessions Judge allowed the application for discharge under Section 250 BNSS (former 227 CrPC), finding that the prosecution evidence disclosed no prima facie case.",
    legalContext: "Section 250 BNSS (Session trials) and Section 262 BNSS (Magistrate warrant trials).",
    synonyms: ["dismissal", "release", "dropping charges"]
  },
  manifest: {
    word: "manifest",
    phonetic: "/ˈmæn.ɪ.fɛst/",
    partOfSpeech: "adjective",
    category: "Judicial Review",
    meaning: "Clear, obvious, apparent, plain, and unmistakable to the eye or mind without need for elaborate proof.",
    example: "A legislative enactment may be struck down under Article 14 on the ground of 'manifest arbitrariness' if it is irrational, capricious, or lacks an adequate determining principle (Shayara Bano 2017).",
    legalContext: "Manifest Arbitrariness doctrine under Article 14 (Shayara Bano 2017 and Joseph Shine 2018).",
    synonyms: ["blatant", "patent", "evident", "unmistakable"]
  },
  unassailable: {
    word: "unassailable",
    phonetic: "/ˌʌn.əˈseɪ.lə.bəl/",
    partOfSpeech: "adjective",
    category: "Evidence & Jurisprudence",
    meaning: "Unable to be attacked, questioned, doubted, defeated, or disputed; conclusively settled.",
    example: "The chain of circumstantial evidence forged by ballistics and recovery was so unassailable that it pointed solely to the guilt of the accused.",
    legalContext: "Sharad Birdhichand Sarda v. State of Maharashtra (1984) - five golden principles of circumstantial evidence.",
    synonyms: ["impregnable", "indisputable", "conclusive", "ironclad"]
  },
  cogent: {
    word: "cogent",
    phonetic: "/ˈkəʊ.dʒənt/",
    partOfSpeech: "adjective",
    category: "Evidence Law",
    meaning: "Clear, logical, convincing, compelling, and intellectually authoritative.",
    example: "A preventive detention order cannot be justified on vague apprehensions; the detaining authority must possess cogent material showing that ordinary criminal bail is insufficient.",
    legalContext: "Bail and preventive detention scrutiny under Article 22(5) (Rekha v. State of T.N. 2011).",
    synonyms: ["compelling", "persuasive", "forceful", "authoritative"]
  },
  amorphous: {
    word: "amorphous",
    phonetic: "/əˈmɔː.fəs/",
    partOfSpeech: "adjective",
    category: "Constitutional Theory",
    meaning: "Lacking a definite clear shape, structure, boundary, or fixed legal formulation.",
    example: "Critics initially argued that the Basic Structure doctrine was too amorphous, but fifty years of jurisprudence have firmly crystallised its core pillars (Kesavananda Bharati 1973).",
    legalContext: "Evolution of Basic Structure and Public Interest Litigation boundaries.",
    synonyms: ["shapeless", "vague", "indeterminate", "ill-defined"]
  },
  clemency: {
    word: "clemency",
    phonetic: "/ˈklɛm.ən.si/",
    partOfSpeech: "noun",
    category: "Executive Powers",
    meaning: "Executive grace, mercy, or leniency granted to a convicted prisoner to reduce, postpone, or forgive punishment.",
    example: "The President's constitutional clemency power under Article 72 is an executive sovereign safeguard to correct judicial errors and prevent human suffering.",
    legalContext: "Articles 72 and 161 (Kehar Singh 1989 and Epuru Sudhakar 2006).",
    synonyms: ["mercy", "pardon", "leniency", "compassion"]
  },
  remission: {
    word: "remission",
    phonetic: "/rɪˈmɪʃ.ən/",
    partOfSpeech: "noun",
    category: "Criminal Sentencing",
    meaning: "The reduction of the duration of a sentence without altering its legal character (e.g., reducing 10 years rigorous imprisonment to 7 years).",
    example: "Under Section 473 BNSS (former 432 CrPC), the State Government where the sentence was passed is the sole Appropriate Government empowered to grant remission (Bilkis Bano 2024).",
    legalContext: "Section 473 BNSS, Articles 72/161, and Union of India v. V. Sriharan (2016).",
    synonyms: ["reduction", "mitigation", "shortening"]
  },
  commutation: {
    word: "commutation",
    phonetic: "/ˌkɒm.jʊˈteɪ.ʃən/",
    partOfSpeech: "noun",
    category: "Criminal Sentencing",
    meaning: "The legal substitution of a heavier penalty imposed on an offender to a lighter, less severe form of punishment (e.g. death to life imprisonment).",
    example: "The Governor commuted the convict's death sentence to life imprisonment under Article 161 after taking into account prolonged unconstitutional delay on death row.",
    legalContext: "Section 474 BNSS (former 433 CrPC) and Shatrughan Chauhan v. Union of India (2014).",
    synonyms: ["substitution", "reduction", "mitigation"]
  },
  estoppel: {
    word: "estoppel",
    phonetic: "/ɪˈstɒp.əl/",
    partOfSpeech: "noun",
    category: "Evidence Law",
    meaning: "A legal principle preventing a party from asserting a fact or claim contrary to what they previously established or represented by word or conduct.",
    example: "Under Section 121 BSA 2023 (former Section 115 IEA), a landlord who represented that a flat had clear title is estopped from denying the tenant's lawful tenancy rights.",
    legalContext: "Section 121 Bharatiya Sakshya Adhiniyam, 2023. Note: There is NO estoppel against the Constitution or a statute (Olga Tellis 1985).",
    synonyms: ["preclusion", "bar", "impediment"]
  },
  laches: {
    word: "laches",
    phonetic: "/ˈleɪ.tʃɪz/",
    partOfSpeech: "noun",
    category: "Equity & Writ Jurisdiction",
    meaning: "Unreasonable, inexcusable delay in pursuing a legal claim that prejudices the opposing party, resulting in the denial of equitable writ relief.",
    example: "The High Court dismissed the writ petition challenging a land acquisition notification issued fifteen years prior on the ground of gross unexplained laches.",
    legalContext: "Discretionary grounds for refusing relief under Article 226/32 (Tridip Rajbanshi v. State of Assam).",
    synonyms: ["undue delay", "dilatoriness", "procrastination"]
  },
  injunction: {
    word: "injunction",
    phonetic: "/ɪnˈdʒʌŋk.ʃən/",
    partOfSpeech: "noun",
    category: "Civil & Judicial Relief",
    meaning: "An authoritative court order prohibiting a party from committing an unlawful act or compelling them to perform a specific restorative act.",
    example: "The Civil Judge granted a temporary injunction under Order 39 CPC restraining the municipality from demolishing the shop until the ownership suit was decided.",
    legalContext: "Specific Relief Act, 1963 Sections 36–42 and Order 39 Code of Civil Procedure, 1908.",
    synonyms: ["stay order", "restraining order", "prohibition", "decree"]
  }
};
