import type { ConstitutionalDoctrine } from '../types/constitution';

export const DOCTRINES_DATA: ConstitutionalDoctrine[] = [
  {
    id: 'basic-structure',
    name: 'Basic Structure Doctrine',
    origin: 'German jurist Prof. Dietrich Conrad; introduced by N.A. Palkhivala in Kesavananda Bharati.',
    leadCase: 'Kesavananda Bharati v. State of Kerala (1973)',
    essence: 'Parliament has wide constituent power to amend any provision of the Constitution under Article 368, but it cannot alter, destroy, or emasculate the core fundamental framework or structural identity of the Constitution.',
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
