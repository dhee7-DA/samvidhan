import type { ConstitutionalDoctrine } from '../types/constitution';

export const DOCTRINES_DATA: ConstitutionalDoctrine[] = [
  {
    id: 'basic-structure',
    name: 'Basic Structure Doctrine',
    origin: 'German jurist Prof. Dietrich Conrad; introduced by N.A. Palkhivala in Kesavananda Bharati.',
    leadCase: 'Kesavananda Bharati v. State of Kerala (1973)',
    essence: 'Parliament has wide constituent power to amend any provision of the Constitution under Article 368, but it cannot alter, destroy, or emasculate the core fundamental framework or structural identity of the Constitution.',
    plainEnglish: 'Parliament can amend any part of the Constitution to adapt to changing times, but it cannot destroy the Constitution itself. Think of it as a house: you can repaint the rooms, build extra floors, or replace doors, but you are not allowed to knock down the load-bearing pillars that keep the building standing.',
    analogy: 'Architectural Pillar Analogy: If you hire a renovator to upgrade your heritage bungalow, they can modernize the wiring and install solar panels. But if they smash the foundational basement pillars holding up the roof, the whole house collapses. The Supreme Court acts as the heritage inspector who stops Parliament from removing foundational pillars like Judicial Review, Secularism, and Free Elections.',
    realWorldScenario: 'In 1975, during the Emergency, Parliament passed the 39th Amendment declaring that the election of the Prime Minister could never be challenged in any court of law. In Indira Nehru Gandhi v. Raj Narain (1975), the Supreme Court struck down this clause using the Basic Structure doctrine, ruling that "free and fair elections" and "judicial review" are foundational pillars that even a 100% parliamentary majority cannot wipe away.',
    simpleJudgeQuestions: [
      'Is the constitutional value being affected a load-bearing pillar (e.g. Democracy, Rule of Law, Judicial Review, Federalism)?',
      'Does this constitutional amendment fundamentally damage, dismantle, or neuter that essential pillar?',
      'If yes: strike down the amendment as unconstitutional (ultra vires constituent power).'
    ],
    testMechanism: [
      'Identification of core constitutional value (e.g. Rule of Law, Secularism, Judicial Review, Federalism).',
      'Impact test: Does the constitutional amendment damage or dismantle that essential institutional pillar?',
      'If yes, the amendment is ultra vires and void to that extent.'
    ],
    applicabilityInIndia: 'Universal judicial shield against authoritarian constitutional revisions. Used to invalidate 39th Amendment (Indira Gandhi case), 42nd Amendment clauses (Minerva Mills), and 99th Amendment NJAC (NJAC case 2015).',
    constitutionalArticles: ['Article 368', 'Article 13', 'Article 32'],
    exceptions: ['Does not apply to ordinary statutes; applies exclusively to constitutional amendments.']
  },
  {
    id: 'pith-and-substance',
    name: 'Doctrine of Pith and Substance',
    latinTerm: 'Substantia et Natura',
    origin: 'Canadian constitutional law (Privy Council interpretations of the British North America Act).',
    leadCase: 'State of Bombay v. F.N. Balsara (1951)',
    essence: 'When a law enacted by a legislature is challenged on the ground that it encroaches upon a field reserved for another legislature under the Seventh Schedule, the court examines the true nature, character, and primary substance of the legislation rather than incidental encroachments.',
    plainEnglish: 'When deciding whether a State or Central government has the legal authority to pass a law, courts look at the TRUE CORE PURPOSE of the law, not minor side effects. If the heart of the law belongs to the State List, the law is completely valid even if it accidentally brushes against something on the Union List.',
    analogy: 'Fruit Salad Analogy: If you order a tropical fruit salad and the chef garnishes it with two chocolate chips on top, you still bought a fruit salad, not a chocolate dessert. Similarly, if a State passes a law to regulate rural money lenders (State List) and it happens to affect promissory notes (Union List), the core "pith and substance" is agriculture and money lending—so the law stands.',
    realWorldScenario: 'The State of Bombay passed the Bombay Prohibition Act to ban alcoholic liquor (State List Entry 8). Importers argued this unconstitutionally interfered with foreign liquor imports and customs duties (Union List Entry 41). In State of Bombay v. F.N. Balsara (1951), the Supreme Court upheld the law, holding that its true "pith and substance" was public health and alcohol regulation in the State, and the impact on imports was merely incidental.',
    simpleJudgeQuestions: [
      'What is the true subject matter and primary aim of this law in real life?',
      'Does that primary subject matter legitimately fall within the list of the legislature that passed it?',
      'Is the encroachment onto the other government\'s list merely an incidental side-effect rather than a disguised takeover?'
    ],
    testMechanism: [
      'Ascertain the primary object, scope, and direct legal effect of the impugned enactment.',
      'Check if the core subject matter legitimately falls within the legislative competence of the enacting legislature.',
      'Incidental and ancillary trespassing into an adjoining list does not invalidate the statute if the pith and substance is within competence.'
    ],
    applicabilityInIndia: 'Primary rule for resolving federal legislative overlap between List I (Union) and List II (State). Applied in Prafulla Kumar Mukherjee v. Bank of Commerce (1947) and Balsara (1951).',
    constitutionalArticles: ['Article 246', 'Seventh Schedule'],
    exceptions: ['Cannot save a statute if the encroachment is substantial and direct rather than merely incidental.']
  },
  {
    id: 'colorable-legislation',
    name: 'Doctrine of Colorable Legislation',
    latinTerm: 'Quando aliquid prohibetur ex directo, prohibetur et per obliquum',
    origin: 'Common law maxim: "What cannot be done directly cannot be done indirectly."',
    leadCase: 'K.C. Gajapati Narayan Deo v. State of Orissa (1953)',
    essence: 'A legislature cannot transgress constitutional limitations by disguising a prohibited subject matter under the cloak of a permitted legislative power. The question is one of competence, not legislative motive or bona fides.',
    plainEnglish: 'You cannot do secretly or indirectly what the Constitution strictly forbids you from doing directly. A legislature cannot paint a prohibited law with pretty colors or give it a misleading title to fool the court into thinking it has the power to pass it.',
    analogy: 'The Trojan Horse / Disguised Donkey: If you paint black and white stripes on a donkey and call it a zebra at the zoo gate, it is still a donkey. If a State Legislature lacks the constitutional power to confiscate private property without compensation, it cannot pass a tax law with a 99.9% confiscatory rate and pretend "it is just a routine tax". The court pulls off the disguise.',
    realWorldScenario: 'In K.C. Gajapati Narayan Deo v. State of Orissa (1953), an estate abolition law calculated compensation based on an artificial formula of agricultural net income, effectively reducing compensation to zero for certain landlords. The landlords alleged "colorable legislation". The court scrutinized whether the legislature had real power; it held that while motives cannot be questioned, if a statute wears a disguise to evade constitutional limitations, it will be struck down.',
    simpleJudgeQuestions: [
      'Does the legislature have the direct constitutional power to enact the real substance of this law?',
      'Is the chosen legislative form or title a cosmetic disguise concealing a forbidden objective?',
      'Looking past the title, what is the actual practical legal effect on citizens\' rights?'
    ],
    testMechanism: [
      'Scrutinize the true legal operation, real substance, and practical consequence of the enactment.',
      'Disregard outward labels, statutory titles, or preambles if the actual effect achieves an unconstitutional end.',
      'Motive is irrelevant: the sole inquiry is whether the legislature possessed the constitutional power to enact the law.'
    ],
    applicabilityInIndia: 'Used in land acquisition and taxation challenges to prevent covert confiscation or unauthorized jurisdictional expansion.',
    constitutionalArticles: ['Article 246', 'Article 31 (historic)', 'Article 300A'],
    exceptions: ['Does not examine bona fides or alleged political malice; strictly tests jurisdictional competence.']
  },
  {
    id: 'severability',
    name: 'Doctrine of Severability',
    latinTerm: 'Separatio Legis',
    origin: 'American and English constitutional jurisprudence.',
    leadCase: 'R.M.D. Chamarbaugwalla v. Union of India (1957)',
    essence: 'If a portion of a statute violates fundamental rights or constitutional limitations, the court does not declare the entire statute void if the unconstitutional portion can be severed from the valid provisions without destroying the legislative scheme.',
    plainEnglish: 'If one bad section of a 50-page law violates Fundamental Rights, the court will surgically cut out just that offending section and save the remaining 49 pages—as long as the remaining pages can still stand on their own two feet and make practical sense.',
    analogy: 'Surgical Resection / Rotten Apple: If a surgeon finds an appendix that is inflamed, they remove the appendix; they do not kill the patient. In statutory law, Article 13 says laws are void "to the extent of the inconsistency". The judge takes a scalpel, amputates Section 14, and allows Sections 1 to 13 and 15 to 50 to keep functioning smoothly.',
    realWorldScenario: 'In A.K. Gopalan v. State of Madras (1950), Section 14 of the Preventive Detention Act prohibited a detained citizen from disclosing the grounds of their detention to any court. The Supreme Court held that Section 14 directly destroyed judicial review and violated Fundamental Rights. Instead of canceling the whole Preventive Detention Act, the Court cleanly severed Section 14 and saved the rest of the statute.',
    simpleJudgeQuestions: [
      'Can the unconstitutional section be physically or logically separated from the rest of the statute?',
      'If the bad section is deleted, does the remaining law still make coherent, workable sense?',
      'Would the legislature still have passed the surviving part if it knew the bad part was going to be struck down?'
    ],
    testMechanism: [
      'Check whether the valid and invalid provisions are so inextricably intertwined that one cannot survive without the other.',
      'Inquire whether the legislature would have enacted the valid part standing alone.',
      'If what remains forms a complete, workable, independent code, the valid part is preserved and only the invalid portion is struck down.'
    ],
    applicabilityInIndia: 'Fundamental operational canon of Article 13(1) and 13(2) ("to the extent of such inconsistency, be void"). Applied in A.K. Gopalan (Section 14 severed) and Kihato Hollohan (Paragraph 7 severed).',
    constitutionalArticles: ['Article 13(1)', 'Article 13(2)', 'Article 254'],
    exceptions: ['If the remaining valid part is truncated, meaningless, or fundamentally alters the legislative intent, the entire statute collapses.']
  },
  {
    id: 'eclipse',
    name: 'Doctrine of Eclipse',
    latinTerm: 'Obscuratio Legis',
    origin: 'Indian Supreme Court jurisprudence on pre-constitutional laws.',
    leadCase: 'Bhikaji Narain Dhakras v. State of Madhya Pradesh (1955)',
    essence: 'A pre-constitutional law inconsistent with fundamental rights is not dead or void ab initio from its inception; it remains dormant and overshadowed by the shadow of the fundamental right. If the constitutional hurdle is removed by amendment, the law springs back into active operation without reenactment.',
    plainEnglish: 'Pre-1950 British-era laws did not die on 26 January 1950 if they conflicted with Fundamental Rights; they simply went to sleep in the shadows. Like the sun during a solar eclipse, the law is still there, just blocked. If Parliament later amends the Constitution to remove that block, the old law wakes up automatically without needing to be passed again.',
    analogy: 'Solar Eclipse Analogy: When the moon passes between the Earth and the sun, the daytime sky turns dark. The sun has not ceased to exist; it is merely overshadowed. The moment the moon shifts away, bright sunlight returns instantly. A pre-1950 motor vehicle act went under the shadow of Article 19(1)(g); once the First Amendment permitted state transport monopolies, the shadow moved away and the law sprang back to life.',
    realWorldScenario: 'In Bhikaji Narain v. State of M.P. (1955), a 1947 Central Provinces Act allowed the provincial government to monopolize motor transport. When the Constitution arrived in 1950, this violated citizens\' right to trade under Art 19(1)(g) and went dormant. In 1951, the 1st Amendment changed Art 19(6) to allow state monopolies. The Supreme Court held that the 1947 Act woke up immediately and became enforceable without the State having to pass a new law.',
    simpleJudgeQuestions: [
      'Was the law validly passed BEFORE January 26, 1950?',
      'Did it conflict with Part III Fundamental Rights so that it was overshadowed under Article 13(1)?',
      'Has a subsequent constitutional amendment removed the conflict, lifting the shadow and reviving the statute?'
    ],
    testMechanism: [
      'Check if the law was validly enacted prior to January 26, 1950.',
      'Confirm that the conflict with Part III renders it unenforceable (in shadow).',
      'If subsequent constitutional amendment removes the incompatibility, the shadow recedes and the law revives automatically.'
    ],
    applicabilityInIndia: 'Governs pre-constitutional laws under Article 13(1). Deep Chand v. State of UP held that post-constitutional laws under Art 13(2) are stillborn and cannot be revived by eclipse.',
    constitutionalArticles: ['Article 13(1)'],
    exceptions: ['Does not apply to post-constitutional laws enacted in violation of fundamental rights (which are void ab initio).']
  },
  {
    id: 'territorial-nexus',
    name: 'Doctrine of Territorial Nexus',
    latinTerm: 'Nexus Territorialis',
    origin: 'Privy Council in Wallace Brothers & Co. v. Commissioner of Income Tax (1948).',
    leadCase: 'State of Bombay v. R.M.D. Chamarbaugwala (1957)',
    essence: 'A state legislature has extraterritorial operation over persons, objects, or transactions outside its borders provided there is a real, substantial, and not illusory connection (nexus) between the state and the subject matter of legislation.',
    plainEnglish: 'A State government\'s laws usually only apply inside its own borders. However, if an outsider company based in another state does business, collects money, or causes direct effects inside your state, your State can legally tax or regulate them because of that real, practical connection (nexus).',
    analogy: 'Throwing a Stone Across the River: You stand on the bank of State A and throw a rock across the border that breaks a window in State B. You cannot claim "State B police have no jurisdiction over me because my feet were in State A!" The physical impact and real connection occurred in State B. The same applies when an out-of-state app or publisher targets customers inside a state.',
    realWorldScenario: 'A Bangalore newspaper printed crossword prize competitions, but thousands of entry forms and entry fees were collected from readers living inside the State of Bombay through local collection agents. Bombay imposed a betting and gambling tax on the Bangalore company. In State of Bombay v. R.M.D. Chamarbaugwala (1957), the Supreme Court upheld the tax, ruling that the huge circulation and fee collection in Bombay formed a real and substantial territorial nexus.',
    simpleJudgeQuestions: [
      'Is there a real, genuine, and substantial connection between the State and the outside entity/activity?',
      'Is the tax or regulation directly related to that specific connection, rather than an arbitrary nationwide grab?',
      'If yes: the state law has valid extraterritorial reach.'
    ],
    testMechanism: [
      'The connection between the enacting state and the subject matter/activity must be real, substantial, and pertinent.',
      'The liability or burden imposed must be directly pertinent to that connection.',
      'If both tests are fulfilled, the law is valid even if it affects persons outside state boundaries.'
    ],
    applicabilityInIndia: 'Extensively applied in state taxation statutes, prize competitions, gambling regulations, and sales taxes.',
    constitutionalArticles: ['Article 245(1)', 'Article 245(2)'],
    exceptions: ['Cannot be invoked if the nexus is fanciful, remote, or nonexistent. Parliament alone has plenary extraterritorial authority under Art 245(2).']
  },
  {
    id: 'harmonious-construction',
    name: 'Doctrine of Harmonious Construction',
    origin: 'Traditional canon of statutory interpretation applied to constitutional design.',
    leadCase: 'Sri Venkataramana Devaru v. State of Mysore (1958)',
    essence: 'When two provisions of the Constitution or statute conflict with each other and cannot be easily reconciled, they must be interpreted harmoniously so that effect is given to both provisions rather than rendering either dead or redundant.',
    plainEnglish: 'When two constitutional clauses seem to clash head-on, judges must not let one clause kill the other. Instead, they must interpret both clauses together with compromise and balance, so both provisions can live side by side in harmony.',
    analogy: 'Two People in a Narrow Corridor: If two people walk down a narrow hallway from opposite ends, one does not have to throw the other out the window. Both step slightly sideways, shoulder to shoulder, and walk past smoothly. The court will never assume the Constitution intended to contradict itself or write meaningless words.',
    realWorldScenario: 'In Sri Venkataramana Devaru v. State of Mysore (1958), a denominational temple argued that Article 26(b) gave it absolute autonomy to decide who enters its inner sanctum, while the State argued Article 25(2)(b) mandates throwing open all Hindu public temples to all classes of Hindus. The Supreme Court applied Harmonious Construction: the public has a general right to worship, but the denomination can protect specific sacred ritual hours, reconciling both Articles.',
    simpleJudgeQuestions: [
      'Do the two sections appear to collide or produce opposite results?',
      'Can we define specific operational boundaries for each section so that neither becomes dead letter law?',
      'Does our balanced interpretation preserve the underlying constitutional purpose of both clauses?'
    ],
    testMechanism: [
      'Identify apparent tension between two constitutional mandates (e.g. Article 25(2)(b) public temple entry vs Article 26(b) religious denomination autonomy).',
      'Avoid head-on collision or total subordination of one clause.',
      'Carve out respective spheres of operation so that both provisions coexist in operational equilibrium.'
    ],
    applicabilityInIndia: 'Regulates tensions between Part III (Fundamental Rights) and Part IV (Directive Principles) as well as overlapping entries in the Seventh Schedule.',
    constitutionalArticles: ['Part III and Part IV', 'Seventh Schedule', 'Article 25 and 26'],
    exceptions: ['Cannot be pushed to the point of distorting the clear, unequivocal wording of a paramount provision.']
  },
  {
    id: 'prospective-overruling',
    name: 'Doctrine of Prospective Overruling',
    origin: 'American jurisprudence (Justice Cardozo in Great Northern Railway v. Sunburst Oil).',
    leadCase: 'I.C. Golak Nath v. State of Punjab (1967)',
    essence: 'When a court overrules an established constitutional interpretation, it holds that the new constitutional interpretation will operate only prospectively from the date of the decision, leaving all past transactions, titles, and completed acts undisturbed.',
    plainEnglish: 'Normally, when the Supreme Court declares a rule, it applies to the past as well as the future. But under Prospective Overruling, the Court announces: "Starting today, the law changes for tomorrow onwards. But everything that happened in the past under the old rule remains valid and will not be disturbed."',
    analogy: 'The New Speed Limit Sign: Imagine the city council changes the speed limit on a highway from 100 km/h to 60 km/h starting Monday morning. Traffic police cannot send fines to people who drove at 90 km/h last Friday! The new restriction only applies to drivers going forward from Monday.',
    realWorldScenario: 'In I.C. Golak Nath (1967), an 11-Judge Bench ruled that Parliament had no power to amend Fundamental Rights. However, over the previous 17 years, thousands of land redistribution laws had been passed and millions of acres transferred. If the judgment had been retroactive, all those property titles would have disintegrated into chaos. Chief Justice Subba Rao invoked Prospective Overruling: all past amendments were saved; only future amendments were barred.',
    simpleJudgeQuestions: [
      'Would applying the new ruling backwards in time cause massive legal chaos, undo thousands of settled property deals, or destabilize society?',
      'Is the Supreme Court exercising its exceptional constitutional discretion under Article 142?',
      'Has the Court clearly stated that this new rule takes effect only from the date of the verdict?'
    ],
    testMechanism: [
      'Can be invoked only by the Supreme Court in the exercise of its constitutional discretion.',
      'Requires substantial disruption of long-settled legal transactions if retrospective invalidation were allowed.',
      'Explicitly declares the cut-off date from which the new judicial rule takes binding effect.'
    ],
    applicabilityInIndia: 'Used in Golak Nath (1967) to avoid destabilizing thousands of land reform titles settled under earlier interpretations.',
    constitutionalArticles: ['Article 141', 'Article 142'],
    exceptions: ['High Courts cannot formulate prospective overruling; exclusively reserved for the Supreme Court.']
  },
  {
    id: 'doctrine-of-pleasure',
    name: 'Doctrine of Pleasure & Civil Servant Safeguards',
    latinTerm: 'Durante Bene Placito',
    origin: 'English common law constitutional convention of the Crown.',
    leadCase: 'Union of India v. Tulsiram Patel (1985)',
    essence: 'Civil servants hold office during the pleasure of the President or Governor under Article 310, but this pleasure is constitutionally hedged by mandatory procedural protections under Article 311 (reasonable opportunity of being heard).',
    plainEnglish: 'In theory, government officers and police serve "at the pleasure" of the President or Governor (meaning they can be dismissed anytime). But in reality, India\'s Constitution puts an iron shield around honest civil servants under Article 311: you cannot be dismissed without written charges, an inquiry, and a fair hearing.',
    analogy: 'The Sovereign Landlord with an Ironclad Lease: An emperor may claim "This castle is mine, and you live here only while I am pleased!" But the lease contract says the emperor cannot evict you unless a magistrate proves you broke the rules and gives you a chance to defend yourself in open court. Article 311 is that constitutional lease agreement protecting civil servants from political vendettas.',
    realWorldScenario: 'A minister is angry at an honest district collector or police officer who refused an illegal order and orders the officer sacked on the spot. Under Article 311, the officer cannot be sacked arbitrarily. They must be given a written chargesheet, an independent inquiry officer must examine the evidence, and the officer has the right to cross-examine witnesses before any dismissal can happen.',
    simpleJudgeQuestions: [
      'Was the civil servant dismissed by someone lower in rank than the authority who originally appointed them (violating Art 311(1))?',
      'Were they given a fair departmental hearing with a reasonable opportunity to defend themselves (violating Art 311(2))?',
      'If an exception was invoked (national security or conviction), was the reason recorded in writing with genuine justification?'
    ],
    testMechanism: [
      'General rule: Civil post tenure is during pleasure of the President or Governor.',
      'Article 311(1) Shield: No civil servant shall be dismissed by an authority subordinate to that by which they were appointed.',
      'Article 311(2) Shield: Mandatory departmental inquiry with reasonable opportunity to defend against specific charges.',
      'Article 311(2) Second Proviso Exceptions: Conviction on criminal charge, impracticability of inquiry (recorded in writing), or security of the State.'
    ],
    applicabilityInIndia: 'Foundational framework for all Indian administrative and civil service disciplinary actions.',
    constitutionalArticles: ['Article 310', 'Article 311', 'Article 312'],
    exceptions: ['Does not apply to defense personnel or civilian employees of defense services.']
  },
  {
    id: 'eminent-domain',
    name: 'Doctrine of Eminent Domain and Public Trust',
    latinTerm: 'Dominium Eminens',
    origin: 'Hugo Grotius (1625) and classic natural law jurisprudence.',
    leadCase: 'M.C. Mehta v. Kamal Nath (1997)',
    essence: 'The inherent sovereign power of the State to expropriate private property for public purpose upon payment of compensation, balanced against the Public Trust Doctrine which obligates the State to hold natural resources in trust for the public.',
    plainEnglish: 'The government has the sovereign power to take private land for a necessary public purpose (like building a highway, hospital, or railway line), provided it pays lawful compensation. However, the government DOES NOT own nature—rivers, beaches, and protected forests are held in trust for the public and can never be gifted away to private resort builders.',
    analogy: 'The Highway vs the Ocean Beach: If the country needs a new metro line, the government can purchase your plot at fair value for the greater public good (Eminent Domain). But if a politician wants to sell an entire public beach or divert a natural river to build a private five-star luxury resort, the Public Trust Doctrine steps in: the State is merely the caretaker of nature, not its private owner.',
    realWorldScenario: 'In M.C. Mehta v. Kamal Nath (1997), a commercial motel company associated with a former Union Minister diverted the flow of the pristine Beas River in Himachal Pradesh to build luxury facilities and protect the motel from seasonal floods. The Supreme Court applied the Public Trust Doctrine, held that the riverbed belongs to the public and nature, canceled the lease, ordered the motel to pay damages, and restored the riverbed.',
    simpleJudgeQuestions: [
      'Is private land being acquired for a legitimate, genuine PUBLIC PURPOSE under valid statutory authority?',
      'Has fair, legal compensation been provided to the property owner under Article 300A?',
      'Does the government action involve natural public commons (rivers, forests, shores) that the State must safeguard as trustee for future generations?'
    ],
    testMechanism: [
      'Public purpose requirement: Expropriation must serve a genuine collective social or developmental need.',
      'Authority of law: Can only be done through valid enacted statute, not arbitrary executive fiat (Article 300A).',
      'Public Trust: Natural ecosystems (rivers, sea shores, forests) cannot be converted to private commercial ownership.'
    ],
    applicabilityInIndia: 'Article 300A constitutional right to property and environmental jurisprudence under Article 21.',
    constitutionalArticles: ['Article 300A', 'Article 21', 'Article 48A'],
    exceptions: ['Private property can be regulated under police powers for health or safety without full commercial compensation.']
  }
];
