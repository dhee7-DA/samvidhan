export interface PyqQuestion {
  id: string;
  year: string;
  exam: string;
  paper: string;
  part: 'Part A' | 'Part B';
  marks: number;
  questionNumber: number;
  title: string;
  questionText: string;
  topic: 'Fundamental Rights' | 'Criminal Due Process' | 'Judiciary & Writs' | 'Executive & Legislature' | 'Federalism & Emergency' | 'Amendments & Basic Structure' | 'Administrative Law';
  relevantArticles: string[];
  bootcampDay: number;
  coreIssues: string[];
  landmarkPrecedents: {
    classic: string;
    modern2024: string;
  };
  modelAnswer: string;
  scoringRubric: {
    criterion: string;
    marks: number;
  }[];
}

export const JKPSC_MAINS_PYQ_DATA: PyqQuestion[] = [
  // ===========================================================================
  // 2022–2023 JKPSC PROSECUTING OFFICER MAINS (PAPER-II)
  // ===========================================================================
  {
    id: 'jkpsc-po-2022-q1',
    year: '2022–2023',
    exam: 'JKPSC Prosecuting Officer (Mains)',
    paper: 'Paper-II: Constitutional Law',
    part: 'Part A',
    marks: 50,
    questionNumber: 1,
    title: 'Seema Human Trafficking Problem Case — Non-Citizen Rights & Article 23',
    questionText: `Seema, a 17-year-old foreign national, was lured into India under false pretenses of employment and was subsequently confined in a brothel and subjected to commercial sexual exploitation. During a coordinated police raid, she was rescued by law enforcement authorities. 

(a) Examine the constitutional rights available to Seema under the Constitution of India, specifically addressing the scope of Articles 21 and 23.
(b) Discuss the extent to which Fundamental Rights under Part III are available to non-citizens and foreign nationals.
(c) As a Prosecuting Officer, what constitutional and statutory protections would you invoke before the Magistrate to ensure her immediate rehabilitation, witness protection, and prevention of summary deportation?`,
    topic: 'Fundamental Rights',
    relevantArticles: ['Article 21', 'Article 23', 'Article 22', 'Article 14'],
    bootcampDay: 5,
    coreIssues: [
      'Availability of Fundamental Rights to non-citizens and foreign nationals on Indian soil.',
      'Self-executing nature of Article 23 prohibiting human trafficking and forced labor.',
      'Right to dignified rehabilitation vs summary deportation under the Foreigners Act.'
    ],
    landmarkPrecedents: {
      classic: 'National Human Rights Commission v. State of Arunachal Pradesh (1996) 1 SCC 742 & Bandhua Mukti Morcha (1984)',
      modern2024: 'Budhadev Karmaskar v. State of West Bengal (2022) & Re: Exploitation of Children in Orphanages (2023)'
    },
    modelAnswer: `I. CONSTITUTIONAL STATUS OF FOREIGN NATIONALS & CITIZENSHIP THRESHOLD:
The Constitution of India makes a deliberate textual dichotomy between rights available exclusively to "citizens" (Articles 15, 16, 19, 29, and 30) and rights guaranteed to "any person" within the territory of India (Articles 14, 20, 21, 22, 23, 24, 25, 27, and 28).

In National Human Rights Commission v. State of Arunachal Pradesh (1996) 1 SCC 742, the Supreme Court unequivocally ruled that our Constitution guarantees the right to life, personal liberty, and human dignity under Article 21 to every human being, irrespective of citizenship, nationality, or legal migration status. Therefore, Seema, despite being a foreign national, enjoys absolute constitutional protection against exploitation, custodial abuse, and arbitrary deprivation of liberty.

II. SUBSTANTIVE OPERATION OF ARTICLES 21 AND 23:
1. Article 23 (Prohibition of Traffic in Human Beings and Forced Labour):
Unlike most Fundamental Rights which operate as vertical shields against the State, Article 23 operates both vertically against the State and horizontally against private individuals. In Peoples Union for Democratic Rights (PUDR) v. Union of India (1982), the Supreme Court established that Article 23 strikes at any form of subjugation where a person is compelled to provide labor or sexual services against their free will. Confining a 17-year-old in a brothel constitutes an aggravated violation of Article 23, actionable directly without requiring proof of state complicity.

2. Article 21 (Dignity and Bodily Integrity of Victims):
In Budhadev Karmaskar v. State of West Bengal (2022), the Supreme Court reiterated that victims of sex trafficking cannot be treated as criminals or subjected to indignity. The right to live with human dignity under Article 21 mandates that rescued victims must be treated with empathy, provided medical and psychological assistance, and shielded from secondary trauma in the criminal justice system.

III. PROSECUTORIAL STRATEGY & COURTROOM SUBMISSIONS:
As a Prosecuting Officer representing the State before the Judicial Magistrate, the following four-tier submission must be advanced:
1. Re-classification as Protected Victim: Submit that under Section 370 IPC (and Section 143 BNS) read with the Immoral Traffic (Prevention) Act, 1956 (ITPA), Seema is the victim of an international trafficking syndicate, not an offender under the Foreigners Act, 1946.
2. Immediate In-Camera Evidence Recording: Move an urgent application under Section 164 CrPC (Section 183 BNSS) for recording her statement in-camera to prevent witness intimidation.
3. Custody to a Recognized Protective Home: Oppose any remand to judicial or police lockup; seek an order committing her to an accredited rehabilitation shelter with consular access under statutory supervision.
4. Bar on Summary Deportation: Rely on NHRC v. State of Arunachal Pradesh to argue that deportation cannot be effected until the criminal trial concludes and her safety in the receiving country is guaranteed, thereby harmonizing Article 21 with executive immigration authority.`,
    scoringRubric: [
      { criterion: 'Classification of Fundamental Rights (Citizens vs Non-Citizens)', marks: 10 },
      { criterion: 'Analysis of Article 23 (Horizontal applicability against trafficking)', marks: 15 },
      { criterion: 'Judicial Precedents (NHRC, PUDR, Budhadev Karmaskar)', marks: 15 },
      { criterion: 'Concrete Prosecutorial Drafting & Submissions before Magistrate', marks: 10 }
    ]
  },
  {
    id: 'jkpsc-po-2022-q2',
    year: '2022–2023',
    exam: 'JKPSC Prosecuting Officer (Mains)',
    paper: 'Paper-II: Constitutional Law',
    part: 'Part A',
    marks: 50,
    questionNumber: 2,
    title: 'Expansion of Article 21 — Golden Triangle & Unarticulated Human Rights',
    questionText: `Critically analyze the transformative expansion of Article 21 of the Constitution of India from a formalist guarantee into a comprehensive reservoir of fundamental human rights. 

Discuss how the Supreme Court has read "unarticulated rights"—such as the right to privacy, right to speedy trial, and right to free legal aid—into the constitutional fabric. Refer to the doctrine of the "Golden Triangle" and recent Constitution Bench decisions.`,
    topic: 'Criminal Due Process',
    relevantArticles: ['Article 21', 'Article 14', 'Article 19', 'Article 39A'],
    bootcampDay: 4,
    coreIssues: [
      'Transition from Gopalan literalism to Maneka Gandhi substantive due process.',
      'Interlocking doctrine of the Golden Triangle (Articles 14, 19, and 21).',
      'Emergence of modern digital privacy and speedy trial jurisprudence.'
    ],
    landmarkPrecedents: {
      classic: 'A.K. Gopalan (1950) ➔ Maneka Gandhi v. Union of India (1978) 1 SCC 248',
      modern2024: 'K.S. Puttaswamy (2017) 10 SCC 1 & Prabir Purkayastha v. State (2024)'
    },
    modelAnswer: `I. THE CONSTITUTIONAL ODYSSEY: FROM GOPALAN TO MANEKA GANDHI:
In A.K. Gopalan v. State of Madras (1950), the Supreme Court adopted a strict, positivist interpretation of Article 21, treating Fundamental Rights as mutually exclusive silos ("the theory of separate water-tight compartments"). The phrase "procedure established by law" was held to mean any enacted state legislation, irrespective of whether the law was just, fair, or humane.

This formalist view was dismantled in Maneka Gandhi v. Union of India (1978) 1 SCC 248, where Justice P.N. Bhagwati propounded the doctrine of the "Golden Triangle." The Court established that Articles 14, 19, and 21 do not operate in isolation; rather, a law depriving a person of personal liberty under Article 21 must also satisfy the non-arbitrariness mandate of Article 14 and the reasonableness requirements of Article 19. "Procedure established by law" was judicially elevated to "due process of law"—requiring that the procedure must be just, fair, reasonable, and non-oppressive.

II. UNARTICULATED RIGHTS IN CRIMINAL JURISPRUDENCE:
Through expansive judicial interpretation, the Supreme Court has illuminated rights essential for the administration of criminal justice:
1. Right to Speedy Trial: In Hussainara Khatoon v. Home Secretary, State of Bihar (1979) and Abdul Rehman Antulay (1992), the Court recognized that prolonged incarceration of undertrials without trial violates Article 21, rendering delay an independent ground for bail.
2. Right to Free Legal Aid: In M.H. Hoskot v. State of Maharashtra (1978) and Khatri (II) v. State of Bihar (1981), the Court held that providing competent legal representation to an indigent accused from the moment of arrest is an inviolable constitutional command, reinforced by Article 39A.
3. Right against Custodial Violence and Handcuffing: In Prem Shankar Shukla (1980) and D.K. Basu (1997), routine handcuffing was held to violate human dignity under Article 21 unless an overt propensity to escape or commit violence is established on record.

III. THE MODERN FRONTIER: PRIVACY & ARREST DUE PROCESS (2017–2024):
1. In K.S. Puttaswamy v. Union of India (9-Judge Bench, 2017), the Supreme Court declared privacy to be a natural, foundational right under Article 21, subjecting state surveillance, biometric data collection, and search seizures to the rigorous 4-prong Proportionality Test:
   - Legitimate State Goal;
   - Rational Nexus;
   - Necessity / Least Restrictive Measure;
   - Balancing of Competing Rights.
2. In Pankaj Bansal v. UOI (2023) and Prabir Purkayastha v. State (NCT of Delhi) (2024), the Supreme Court extended Article 21 and Article 22(1) to mandate that written grounds of arrest must be furnished to the accused simultaneously with arrest, holding that verbal communication fails the constitutional standard of fair procedure.`,
    scoringRubric: [
      { criterion: 'Gopalan vs Maneka Gandhi paradigm shift & Golden Triangle', marks: 15 },
      { criterion: 'Criminal procedural unarticulated rights (Speedy trial, legal aid, custody)', marks: 15 },
      { criterion: 'Puttaswamy 4-prong proportionality test', marks: 10 },
      { criterion: 'Modern 2023-2024 Constitution Bench arrest rulings', marks: 10 }
    ]
  },
  {
    id: 'jkpsc-po-2022-q3',
    year: '2022–2023',
    exam: 'JKPSC Prosecuting Officer (Mains)',
    paper: 'Paper-II: Constitutional Law',
    part: 'Part A',
    marks: 50,
    questionNumber: 3,
    title: 'Digital Speech, Internet Blockades & Proportionality — Anuradha Bhasin Ratio',
    questionText: `The freedom of speech and expression in the 21st century is predominantly exercised through digital networks and the internet. 

In light of the landmark Supreme Court ruling in Anuradha Bhasin v. Union of India (2020), critically evaluate:
(a) Whether access to the internet is a fundamental right under Article 19(1)(a) and 19(1)(g).
(b) The constitutional validity of blanket and indefinite internet suspension orders under the Temporary Suspension of Telecom Services Rules, 2017.
(c) The application of the Doctrine of Proportionality in balancing state security against public communicative freedoms.`,
    topic: 'Fundamental Rights',
    relevantArticles: ['Article 19(1)(a)', 'Article 19(1)(g)', 'Article 19(2)', 'Article 19(6)'],
    bootcampDay: 3,
    coreIssues: [
      'Constitutional recognition of digital communication medium under Article 19.',
      'Impermissibility of indefinite executive internet suspensions.',
      'Application of the Proportionality Test to Section 144 CrPC and Telecom Rules.'
    ],
    landmarkPrecedents: {
      classic: 'Shreya Singhal v. Union of India (2015) 5 SCC 1 & Bennett Coleman (1972)',
      modern2024: 'Anuradha Bhasin v. Union of India (2020) 3 SCC 637 & Foundation for Media Professionals (2020)'
    },
    modelAnswer: `I. DIGITAL MEDIUM AS AN INALIENABLE EMBODIMENT OF ARTICLE 19:
In Anuradha Bhasin v. Union of India (2020) 3 SCC 637, a 3-Judge Bench of the Supreme Court addressed the constitutional challenge to sweeping internet shutdowns and movement curbs imposed in Jammu & Kashmir post-August 2019.

The Court held that the freedom of speech and expression under Article 19(1)(a) and the freedom to practice any profession, trade, or business under Article 19(1)(g) over the medium of the internet are constitutionally protected fundamental rights. The digital platform is not merely a tool of luxury, but the contemporary highway of commerce, journalism, education, and civic discourse.

II. CONSTITUTIONAL PARAMETERS OF REASONABLE RESTRICTIONS:
The State's power to restrict speech cannot be arbitrary; it is strictly bounded by the exhaustive categories enumerated in Article 19(2) (sovereignty, integrity, security of the State, public order, decency, morality, contempt of court, defamation, or incitement to an offence).

The Court laid down three cardinal constitutional mandates:
1. Indefinite Suspension is Ultra Vires: Complete or indefinite suspension of telecom and internet services is impermissible under the Constitution. Suspension can only be temporary and must be periodically reviewed.
2. Mandatory Publication of Orders: Any executive order restricting internet or public movement under Section 144 CrPC or the Telecom Suspension Rules, 2017 must be published in the public domain. Secret or unpublished administrative orders violate the rule of law and deprive aggrieved citizens of judicial review under Article 226/32.
3. Structured Review Committee Oversight: Orders must be subjected to weekly review by the statutory Review Committee under Rule 2(6) of the 2017 Rules to assess whether the security threat persists.

III. THE DOCTRINE OF PROPORTIONALITY APPLIED TO STATE SECURITY:
The Supreme Court mandated that state authorities must apply the Proportionality Standard before shutting down networks:
1. Least Restrictive Measure: The executive must investigate whether targeted restrictions (e.g. blocking specific extremist websites, restricting high-speed data while permitting 2G, or localized geographic geofencing) can neutralize the security threat rather than shutting down an entire province.
2. Factual Evidence of Imminent Danger: Exercise of power under Section 144 CrPC cannot be based on mere administrative apprehension. It requires concrete, demonstrable material on record indicating a real and imminent threat to public peace.
3. Prosecutorial Compliance: In state prosecution defense, the State cannot rely on boiler-plate affidavits claiming "national security" to preempt judicial review. As reiterated in Foundation for Media Professionals (2020), national security must be harmonized with constitutional proportionality.`,
    scoringRubric: [
      { criterion: 'Recognition of Internet Speech under Art 19(1)(a) & 19(1)(g)', marks: 15 },
      { criterion: 'Anuradha Bhasin core ratio (Indefinite ban ultra vires, publication mandatory)', marks: 15 },
      { criterion: 'Doctrine of Proportionality (Least intrusive measure test)', marks: 10 },
      { criterion: 'Application to Section 144 CrPC and prosecutorial defense', marks: 10 }
    ]
  },
  {
    id: 'jkpsc-po-2022-q4',
    year: '2022–2023',
    exam: 'JKPSC Prosecuting Officer (Mains)',
    paper: 'Paper-II: Constitutional Law',
    part: 'Part B',
    marks: 50,
    questionNumber: 5,
    title: 'Centre-State Legislative Relations & Federal Conflict Resolution Doctrines',
    questionText: `Federalism is a fundamental feature of the Indian Constitution, yet the constitutional schema exhibits a strong centripetal bias. 

(a) Discuss the distribution of legislative powers between the Union and the States under Articles 245 to 254 read with the Seventh Schedule.
(b) Explain with authoritative case law the doctrines of Pith and Substance, Colorable Legislation, and Repugnancy.
(c) How did the 9-Judge Constitution Bench in Mineral Area Development Authority (MADA) v. SAIL (2024) redefine State legislative taxation powers under List II?`,
    topic: 'Federalism & Emergency',
    relevantArticles: ['Article 245', 'Article 246', 'Article 248', 'Article 254', 'Seventh Schedule'],
    bootcampDay: 12,
    coreIssues: [
      'Territorial and subject-matter distribution of legislative competence.',
      'Judicial doctrines harmonizing List I, List II, and List III entries.',
      'Overruling of Kesoram / India Cements by the 2024 MADA 9-Judge Bench.'
    ],
    landmarkPrecedents: {
      classic: 'State of Bombay v. F.N. Balsara (1951) & K.C. Gajapati Narayan Deo (1953)',
      modern2024: 'Mineral Area Development Authority (MADA) v. SAIL (9-Judge Bench, 2024)'
    },
    modelAnswer: `I. SCHEME OF LEGISLATIVE DISTRIBUTION (ARTICLES 245–254):
The Constitution adopts a threefold distribution of legislative subjects in the Seventh Schedule:
- List I (Union List): 97 original entries of national importance subject to exclusive parliamentary jurisdiction (Art 246(1)).
- List II (State List): 66 original entries of regional concern under exclusive state legislative domain (Art 246(3)).
- List III (Concurrent List): 47 entries over which both Parliament and State legislatures possess concurrent power (Art 246(2)).
Under Article 248, residuary powers of legislation reside exclusively with the Union Parliament.

II. THE THREE CONSTITUTIONAL HARMONIZATION DOCTRINES:
1. Doctrine of Pith and Substance (Substantia et Natura):
When an impugned law enacted under one List incidentally trenches upon subjects falling within an adjoining List, the courts look into the true nature, character, and primary objective of the enactment.
In State of Bombay v. F.N. Balsara (1951), the Bombay Prohibition Act was challenged because restricting the possession of liquor incidentally affected the import/export of goods (a Union subject). The Supreme Court held that the pith and substance was "public health and intoxicating liquors" (State List Entry 8); incidental encroachment on Union trade did not render the law ultra vires.

2. Doctrine of Colorable Legislation:
Rooted in the Latin maxim "Quando aliquid prohibetur ex directo, prohibetur et per obliquum" (What cannot be done directly cannot be done indirectly).
In K.C. Gajapati Narayan Deo v. State of Orissa (1953), the Supreme Court clarified that this doctrine does not examine legislative motive or political bona fides. It tests pure constitutional competence: whether the legislature, while professing to act within its permitted sphere, has in substance transgressed its constitutional limits to achieve a prohibited purpose.

3. Doctrine of Repugnancy (Article 254):
Applies exclusively to conflicts between Union and State laws enacted on Concurrent List (List III) subjects.
Under Article 254(1), if a State law on a Concurrent subject is inconsistent with a Parliamentary enactment, the Parliamentary law prevails and the State law is void to the extent of the repugnancy. However, under Article 254(2), if the State law was reserved for the President's assent and received such assent, it prevails in that State, subject to Parliament enacting a subsequent overriding statute under the proviso.

III. THE 2024 WATERSHED: MADA V. SAIL (9-JUDGE BENCH):
In Mineral Area Development Authority (MADA) v. SAIL (July 2024), a 9-Judge Constitution Bench headed by CJI D.Y. Chandrachud settled a 35-year federal controversy, holding by an 8:1 majority:
1. Royalty is NOT a Tax: The Court overruled the 7-Judge Bench ruling in India Cements (1990) and affirmed that royalty paid under Section 9 of the MMDR Act is a contractual consideration for mineral extraction, not a tax.
2. State Taxation Primacy: States possess plenary legislative power under Entry 49 of List II ("Taxes on lands and buildings") and Entry 50 of List II to levy taxes on mineral-bearing lands, which cannot be extinguished by Parliament's general regulatory powers under Entry 54 of List I. This ruling reaffirmed that fiscal federalism is an indispensable structural pillar of the Constitution.`,
    scoringRubric: [
      { criterion: 'Distribution scheme (Arts 245-248, Seventh Schedule)', marks: 10 },
      { criterion: 'Doctrine of Pith and Substance (F.N. Balsara ratio)', marks: 10 },
      { criterion: 'Doctrine of Colorable Legislation & Repugnancy (Art 254)', marks: 15 },
      { criterion: 'MADA v. SAIL (2024) 9-Judge Bench analysis & fiscal federalism', marks: 15 }
    ]
  },

  // ===========================================================================
  // 2018–2019 JKPSC PROSECUTING OFFICER / JUDICIAL MAINS
  // ===========================================================================
  {
    id: 'jkpsc-po-2018-q1',
    year: '2018–2019',
    exam: 'JKPSC Prosecuting Officer & Judicial Mains',
    paper: 'Paper-II: Constitutional Law',
    part: 'Part A',
    marks: 50,
    questionNumber: 1,
    title: 'The New Doctrine of Equality under Article 14 — Arbitrariness vs Classification',
    questionText: `The traditional doctrine of reasonable classification under Article 14 has been superseded by the dynamic anti-arbitrariness doctrine. 

Trace the judicial evolution of Article 14 from State of West Bengal v. Anwar Ali Sarkar (1952) through E.P. Royappa v. State of Tamil Nadu (1974) to Shayara Bano v. Union of India (2017). Explain what constitutes "Manifest Arbitrariness" as a ground to strike down plenary primary legislation.`,
    topic: 'Fundamental Rights',
    relevantArticles: ['Article 14', 'Article 13', 'Article 16'],
    bootcampDay: 2,
    coreIssues: [
      'Twin-test of reasonable classification (intelligible differentia and rational nexus).',
      'The Royappa revolution: Equality as an antithesis to arbitrariness.',
      'Shayara Bano doctrine of "Manifest Arbitrariness" invalidating primary statutes.'
    ],
    landmarkPrecedents: {
      classic: 'Anwar Ali Sarkar (1952) ➔ E.P. Royappa (1974) ➔ Maneka Gandhi (1978)',
      modern2024: 'Shayara Bano (2017) 9 SCC 1 & Association for Democratic Reforms (2024)'
    },
    modelAnswer: `I. THE TRADITIONAL DOCTRINE: REASONABLE CLASSIFICATION:
In State of West Bengal v. Anwar Ali Sarkar (1952) and Ram Krishna Dalmia (1958), the Supreme Court established that while Article 14 forbids class legislation, it permits reasonable classification. To withstand constitutional scrutiny, a classification must satisfy two cumulative conditions:
1. Intelligible Differentia: The classification must be founded on an intelligible differentia which distinguishes persons or things grouped together from those left out.
2. Rational Nexus: That differentia must have a rational relation to the object sought to be achieved by the statute.

II. THE ROYAPPA PARADIGM SHIFT: EQUALITY AS NON-ARBITRARINESS:
In E.P. Royappa v. State of Tamil Nadu (1974) 4 SCC 3, Justice P.N. Bhagwati revolutionized Indian equality jurisprudence by propounding the "New Concept of Equality":
"Equality is a dynamic concept with many aspects and dimensions and it cannot be 'cribbed, cabined, and confined' within traditional and doctrinaire limits. From a positivistic point of view, equality is antithetic to arbitrariness. In fact, equality and arbitrariness are sworn enemies; one belongs to the rule of law in a republic while the other, to the whim and caprice of an absolute monarch. Where an act is arbitrary, it is implicit in it that it is unequal both according to political logic and constitutional law and is therefore violative of Article 14."

This was cemented in Maneka Gandhi (1978) and Ajay Hasia (1981), establishing that an administrative action that is unreasonable, irrational, or disproportionate violates Article 14 per se, without needing to establish discrimination against a comparative group.

III. MANIFEST ARBITRARINESS: INVALIDATING PRIMARY LEGISLATION (2017–2024):
Historically, under State of A.P. v. McDowell & Co. (1996), courts held that primary plenary legislation could only be struck down on two grounds: (a) lack of legislative competence, or (b) violation of fundamental rights; arbitrariness alone could not invalidate a statute enacted by Parliament.

This limitation was authoritatively dismantled in Shayara Bano v. Union of India (2017) 9 SCC 1 (Triple Talaq case), where Justice R.F. Nariman established:
1. Definition of Manifest Arbitrariness: Legislation is manifestly arbitrary when it is enacted capriciously, irrationally, without an adequate determining principle, or is unreasoned, excessive, and disproportionate.
2. Application to Primary Statutes: Manifest arbitrariness is a substantive fundamental right ground under Article 14 to strike down primary Parliamentary legislation as well as subordinate rules.
3. Recent Affirmation in ADR v. Union of India (2024): The 5-Judge Constitution Bench applied the manifest arbitrariness test to invalidate the Electoral Bonds Scheme, holding that the statutory amendments to the Companies Act deleting disclosure requirements were completely disproportionate and arbitrary under Article 14.`,
    scoringRubric: [
      { criterion: 'Twin-test of reasonable classification (Anwar Ali Sarkar)', marks: 10 },
      { criterion: 'Royappa anti-arbitrariness doctrine analysis', marks: 15 },
      { criterion: 'Shayara Bano manifest arbitrariness doctrine & McDowell shift', marks: 15 },
      { criterion: 'Recent 2024 application in Electoral Bonds case', marks: 10 }
    ]
  },
  {
    id: 'jkpsc-po-2018-q2',
    year: '2018–2019',
    exam: 'JKPSC Prosecuting Officer & Judicial Mains',
    paper: 'Paper-II: Constitutional Law',
    part: 'Part B',
    marks: 50,
    questionNumber: 6,
    title: 'Civil Services Safeguards — Article 311 & The Pleasure Doctrine Exceptions',
    questionText: `The Doctrine of Pleasure is an English common law import, but in India, it is subject to rigorous constitutional checks under Article 311. 

(a) Discuss the twin safeguards guaranteed to civil servants under Article 311(1) and Article 311(2).
(b) Analyze the three exceptional situations under the second proviso to Article 311(2) where an inquiry can be dispensed with.
(c) Examine the landmark ruling in Union of India v. Tulsiram Patel (1985) regarding judicial review of dismissals under the second proviso.`,
    topic: 'Administrative Law',
    relevantArticles: ['Article 310', 'Article 311', 'Article 14'],
    bootcampDay: 13,
    coreIssues: [
      'The Doctrine of Pleasure under Article 310 vs Constitutional Limitations.',
      'Procedural natural justice guarantees under Article 311(1) and (2).',
      'The three exceptional provisos (a), (b), (c) to Article 311(2) and Tulsiram Patel ratio.'
    ],
    landmarkPrecedents: {
      classic: 'Parshotam Lal Dhingra (1958) ➔ Union of India v. Tulsiram Patel (1985) 3 SCC 398',
      modern2024: 'State of Punjab v. Dr. P.L. Singla (2008) & A.P. Public Service Commission (2022)'
    },
    modelAnswer: `I. THE DOCTRINE OF PLEASURE AND ITS CONSTITUTIONAL BOUNDARIES:
Under Article 310 of the Constitution, members of the defense services, civil services of the Union, and All-India Services hold office during the pleasure of the President, and civil servants of a State hold office during the pleasure of the Governor (the English common law doctrine of "durante bene placito").

However, unlike the absolute royal prerogative in the United Kingdom, the Pleasure Doctrine in India is strictly subordinate to the constitutional safeguards enshrined in Article 311.

II. THE TWIN CONSTITUTIONAL SAFEGUARDS UNDER ARTICLE 311:
1. Subordination Shield (Article 311(1)):
No civil servant can be dismissed or removed by an authority subordinate to that by which they were appointed. An order passed by a subordinate authority is void ab initio.
2. Reasonable Opportunity / Natural Justice Shield (Article 311(2)):
No civil servant shall be dismissed, removed, or reduced in rank except after an inquiry in which they have been informed of the charges against them and given a reasonable opportunity of being heard in respect of those charges.

III. THE THREE EXCEPTIONAL SITUATIONS (SECOND PROVISO TO ARTICLE 311(2)):
Article 311(2) contains an express second proviso enumerating three specific situations where the mandatory disciplinary inquiry is dispensed with:
1. Proviso (a) — Conviction on Criminal Charge: Where a civil servant is dismissed, removed, or reduced in rank on the ground of conduct which has led to their conviction on a criminal charge by a court of competent jurisdiction.
2. Proviso (b) — Impracticability of Inquiry: Where the disciplinary authority empowered to dismiss or remove is satisfied, for reasons to be recorded by that authority in writing, that it is not reasonably practicable to hold such an inquiry.
3. Proviso (c) — Security of the State: Where the President or the Governor, as the case may be, is satisfied that in the interest of the security of the State, it is not expedient to hold such an inquiry.

IV. JUDICIAL REVIEW & THE TULSIRAM PATEL BENCHMARK (1985):
In the Constitution Bench ruling in Union of India v. Tulsiram Patel (1985) 3 SCC 398, the Supreme Court established the definitive principles:
1. Objective Recording of Reasons under Proviso (b): The disciplinary authority cannot mechanically dispense with an inquiry. The reasons recorded in writing must demonstrate real, objective impossibility (e.g. witnesses terrorized, complete breakdown of law and order). Subjective whim or administrative inconvenience is invalid.
2. Proviso (c) Subject to Limited Judicial Review: While the subjective satisfaction of the President/Governor regarding "security of the State" is based on intelligence reports, the court can examine whether the satisfaction was based on relevant material or tainted by mala fides.
3. Post-Decisional Remedy: If an inquiry was improperly dispensed with, the civil court or High Court under Article 226 has jurisdiction to quash the order of dismissal and reinstate the public servant with consequential benefits.`,
    scoringRubric: [
      { criterion: 'Pleasure doctrine (Art 310) vs Constitutional limitations', marks: 10 },
      { criterion: 'Twin safeguards under Article 311(1) and (2)', marks: 15 },
      { criterion: 'Detailed breakdown of the three provisos (a), (b), (c)', marks: 15 },
      { criterion: 'Tulsiram Patel ratio and scope of judicial review', marks: 10 }
    ]
  },

  // ===========================================================================
  // 2014–2016 JKPSC PROSECUTION & JUDICIAL SERVICES MAINS
  // ===========================================================================
  {
    id: 'jkpsc-po-2014-q1',
    year: '2014–2016',
    exam: 'JKPSC Prosecuting Officer & Judicial Mains',
    paper: 'Paper-II: Constitutional Law',
    part: 'Part A',
    marks: 50,
    questionNumber: 2,
    title: 'Constitutional Safeguards in Criminal Trials — Article 20 & Forensic Tests',
    questionText: `Article 20 of the Constitution provides fundamental safeguards to individuals charged with criminal offences. 

(a) Discuss the constitutional protections against:
    (i) Ex-post facto laws (Article 20(1));
    (ii) Double jeopardy (Article 20(2));
    (iii) Self-incrimination (Article 20(3)).
(b) Examine the constitutional validity of involuntary narco-analysis, polygraph tests, and brain mapping in light of the landmark Supreme Court decision in Selvi v. State of Karnataka (2010).`,
    topic: 'Criminal Due Process',
    relevantArticles: ['Article 20(1)', 'Article 20(2)', 'Article 20(3)', 'Article 21'],
    bootcampDay: 4,
    coreIssues: [
      'Scope of protections under Article 20(1), 20(2), and 20(3).',
      'The "Right against Self-Incrimination" vs Investigative Discovery.',
      'Involuntary neuro-scientific tests as a violation of mental privacy and Article 20(3).'
    ],
    landmarkPrecedents: {
      classic: 'M.P. Sharma (1954) & Nandini Satpathy v. P.L. Dani (1978)',
      modern2024: 'Selvi v. State of Karnataka (2010) 7 SCC 263 & Ritesh Sinha v. State of UP (2019)'
    },
    modelAnswer: `I. THE TRIPARTITE PROTECTIONS UNDER ARTICLE 20:
Article 20 is one of the most critical criminal-constitutional safeguards in the Constitution. Along with Article 21, it cannot be suspended even during a National Emergency under Article 359 (as amended by the 44th Constitutional Amendment, 1978).

1. Article 20(1) — Protection Against Ex-Post Facto Laws:
No person shall be convicted of any offence except for violation of a law in force at the time of the commission of the act charged as an offence, nor be subjected to a penalty greater than that which might have been inflicted under the law in force at the time of the commission.
- Exception (Beneficial Ex-Post Facto Law): In Rattan Lal v. State of Punjab (1965), the Supreme Court ruled that an ex-post facto law that mitigates the rigors of criminal law or reduces punishment operates retrospectively in favor of the accused.

2. Article 20(2) — Protection Against Double Jeopardy:
No person shall be prosecuted and punished for the same offence more than once (embodying the common law maxim "Nemo debet bis vexari pro una et eadem causa").
- Conditions Precedent: In Maqbool Hussain v. State of Bombay (1953), the Court held that Article 20(2) applies only when the accused was previously (a) prosecuted before a court of law or judicial tribunal, and (b) punished. Administrative confiscation under Customs Act does not bar subsequent criminal prosecution.

3. Article 20(3) — Right Against Self-Incrimination:
No person accused of any offence shall be compelled to be a witness against himself (Latin: "Nemo tenetur seipsum accusare").
- Scope in Pre-Trial Investigation: In Nandini Satpathy v. P.L. Dani (1978), the Supreme Court held that the shield of Article 20(3) extends beyond the courtroom trial to police interrogation under Section 161 CrPC (Section 180 BNSS). An accused has the right to remain silent when answering questions that tend to expose them to a criminal charge.

II. THE SELVI V. STATE OF KARNATAKA WATERSHED (2010):
In Selvi v. State of Karnataka (2010) 7 SCC 263, a 3-Judge Bench resolved whether subjecting an accused to involuntary narco-analysis, polygraph (lie detector) examinations, and Brain Electrical Activation Profiles (BEAP/Brain Mapping) violates Articles 20(3) and 21.

The Supreme Court laid down the following binding ratios:
1. Involuntary Administration Violates Article 20(3): Involuntary narco-analysis involves chemical intrusion (sodium pentothal) that impairs cognitive choice, extracting testimonial responses without consent. This constitutes impermissible "testimonial compulsion."
2. Involuntary Testing Violates "Mental Privacy" under Article 21: The Court recognized for the first time that personal liberty under Article 21 encompasses "mental privacy" and autonomy over one's thought process. Forcible intrusion into the human mind violates human dignity.
3. Inadmissibility of Testimonial Statements: Statements extracted during involuntary narco or lie-detector tests cannot be admitted as substantive evidence in court.
4. Physical vs Testimonial Evidence Distinction:
   - In State of Bombay v. Kathi Kalu Oghad (1961), taking fingerprints, handwriting samples, or bodily specimens was held constitutional because they are physical evidence, not testimonial statements.
   - In Ritesh Sinha v. State of U.P. (2019), the Supreme Court extended this principle to judicial orders directing an accused to give voice samples for criminal investigation, holding it does not violate Article 20(3).
5. Section 27 Evidence Act (Section 23 BSA) Exception: If an involuntary scientific test leads to the physical discovery of a concealed weapon, stolen article, or corpse, that physical discovery is admissible, but the inculpatory verbal statement remains barred.`,
    scoringRubric: [
      { criterion: 'Article 20(1) Ex-post facto law & Rattan Lal beneficial exception', marks: 10 },
      { criterion: 'Article 20(2) Double jeopardy & Maqbool Hussain test', marks: 10 },
      { criterion: 'Article 20(3) Self-incrimination & Nandini Satpathy scope', marks: 10 },
      { criterion: 'Selvi v. State of Karnataka (Narco, Polygraph, Mental Privacy)', marks: 15 },
      { criterion: 'Physical vs Testimonial evidence distinction (Kathi Kalu & Ritesh Sinha)', marks: 5 }
    ]
  },
  {
    id: 'jkpsc-po-2014-q2',
    year: '2014–2016',
    exam: 'JKPSC Prosecuting Officer & Judicial Mains',
    paper: 'Paper-II: Constitutional Law',
    part: 'Part B',
    marks: 50,
    questionNumber: 7,
    title: 'The Basic Structure Doctrine & The 9th Schedule Judicial Shield — I.R. Coelho',
    questionText: `The Basic Structure Doctrine represents the crowning achievement of Indian constitutional jurisprudence. 

(a) Trace the judicial confrontation between Parliament and the Judiciary from Shankari Prasad (1951) to Kesavananda Bharati (1973).
(b) Can Parliament place ordinary statutes beyond the reach of Judicial Review by inserting them into the Ninth Schedule under Article 31B?
(c) Discuss the unanimous 9-Judge Constitution Bench decision in I.R. Coelho v. State of Tamil Nadu (2007) and explain the "Rights Test" and the "Essence of the Rights Test".`,
    topic: 'Amendments & Basic Structure',
    relevantArticles: ['Article 368', 'Article 13', 'Article 31B', 'Ninth Schedule'],
    bootcampDay: 15,
    coreIssues: [
      'Constituent power vs Legislative power under Article 368.',
      'The Kesavananda Bharati foundational compromise.',
      'Judicial review of the Ninth Schedule post-24 April 1973 under I.R. Coelho.'
    ],
    landmarkPrecedents: {
      classic: 'Shankari Prasad (1951) ➔ Golaknath (1967) ➔ Kesavananda Bharati (1973)',
      modern2024: 'I.R. Coelho v. State of Tamil Nadu (2007) 2 SCC 1 & In re Article 370 (2023)'
    },
    modelAnswer: `I. THE CONSTITUTIONAL BATTLE FOR SUPREMACY (1951–1973):
The evolution of the amending power under Article 368 underwent four historic stages:
1. Shankari Prasad v. Union of India (1951) & Sajjan Singh (1965): The Supreme Court held that the word "law" in Article 13(2) refers only to ordinary legislative enactments, not to constitutional amendments passed under Article 368. Parliament possessed unlimited constituent power to abridge Fundamental Rights.
2. I.C. Golaknath v. State of Punjab (11-Judge Bench, 1967): By a 6:5 majority, Chief Justice Subba Rao reversed the earlier view, holding that Article 368 merely laid down the procedure for amendment, not the substantive power. Fundamental Rights were declared transcendental and immune from amendment.
3. 24th Constitutional Amendment (1971): Parliament amended Article 13 and Article 368 to expressly provide that an amendment under Article 368 is not "law" under Article 13, asserting unlimited constituent amending authority.
4. Kesavananda Bharati v. State of Kerala (13-Judge Bench, 1973): By a 7:6 majority, the Supreme Court reached the historic synthesis:
   - Parliament has the power to amend any provision of the Constitution, including Fundamental Rights.
   - However, Parliament's amending power is subject to an implied limitation: it cannot alter, destroy, or emasculate the "Basic Structure" or essential identity of the Constitution.

II. THE NINTH SCHEDULE & ARTICLE 31B:
Article 31B was inserted by the 1st Constitutional Amendment (1951) to protect agrarian land reform statutes from being invalidated by courts on grounds of inconsistency with Fundamental Rights.
Over time, the executive and legislature began using the Ninth Schedule as a constitutional dustbin, dumping controversial statutes unrelated to land reforms (such as election laws, reservation quotas, and monopolies) to immunize them from judicial review.

III. THE 9-JUDGE BENCH WATERSHED: I.R. COELHO (2007):
In I.R. Coelho v. State of Tamil Nadu (2007) 2 SCC 1, a unanimous 9-Judge Constitution Bench settled the constitutional immunity of the Ninth Schedule:
1. Cut-Off Date of 24th April 1973: All constitutional amendments and statutes inserted into the Ninth Schedule before 24th April 1973 (the date of the Kesavananda Bharati judgment) are valid and immune from challenge.
2. Post-1973 Laws Open to Judicial Review: Any law inserted into the Ninth Schedule on or after 24th April 1973 is subject to judicial review. It does not enjoy blanket immunity.
3. The Twin Judicial Tests:
   - The Rights Test: Does the impugned statute infringe upon Fundamental Rights in Part III?
   - The Essence of the Rights Test: If a statute violates a fundamental right, does that violation damage or destroy the Basic Structure of the Constitution?
4. Articles 14, 19, and 21 as Inviolable Structural Core: The Court ruled that the principles underlying Articles 14, 19, and 21 form the foundational core of the Constitution. If a Ninth Schedule statute destroys the essence of these rights, it will be invalidated as unconstitutional, affirming that Judicial Review is an untouchable basic feature that cannot be excluded by Article 31B.`,
    scoringRubric: [
      { criterion: 'Judicial confrontation trace (Shankari Prasad to Kesavananda)', marks: 15 },
      { criterion: 'Article 31B and original intent of the Ninth Schedule', marks: 10 },
      { criterion: 'I.R. Coelho (2007) cut-off date (24 April 1973)', marks: 10 },
      { criterion: 'Rights Test vs Essence of Rights Test breakdown', marks: 15 }
    ]
  }
];
