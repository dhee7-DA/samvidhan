import type { PyqQuestion } from '../pyqData';

export const PYQ_2022_DATA: PyqQuestion[] = [
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
The Constitution makes a deliberate textual dichotomy between rights available exclusively to "citizens" (Articles 15, 16, 19, 29, and 30) and rights guaranteed to "any person" within the territory of India (Articles 14, 20, 21, 22, 23, 24, 25, 27, and 28).

In National Human Rights Commission v. State of Arunachal Pradesh (1996) 1 SCC 742, the Supreme Court unequivocally ruled that our Constitution guarantees the right to life, personal liberty, and human dignity under Article 21 to every human being, irrespective of citizenship, nationality, or legal migration status. Therefore, Seema enjoys absolute constitutional protection against exploitation, custodial abuse, and arbitrary deprivation of liberty.

II. SUBSTANTIVE OPERATION OF ARTICLES 21 AND 23:
1. Article 23 (Prohibition of Traffic in Human Beings and Forced Labour):
Unlike most Fundamental Rights which operate as vertical shields against the State, Article 23 operates both vertically against the State and horizontally against private individuals. In Peoples Union for Democratic Rights (PUDR) v. Union of India (1982), the Supreme Court established that Article 23 strikes at any form of subjugation where a person is compelled to provide labor or sexual services against their free will. Confining a 17-year-old in a brothel constitutes an aggravated violation of Article 23, actionable directly without requiring proof of state complicity.

2. Article 21 (Dignity and Bodily Integrity of Victims):
In Budhadev Karmaskar v. State of West Bengal (2022), the Supreme Court reiterated that victims of sex trafficking cannot be treated as criminals or subjected to indignity. The right to live with human dignity under Article 21 mandates that rescued victims must be treated with empathy, provided medical and psychological assistance, and shielded from secondary trauma in the criminal justice system.

III. PROSECUTORIAL STRATEGY & COURTROOM SUBMISSIONS:
As a Prosecuting Officer representing the State before the Judicial Magistrate, the following four-tier submission must be advanced:
1. Re-classification as Protected Victim: Submit that under Section 370 IPC (Section 143 BNS) read with the Immoral Traffic (Prevention) Act, 1956 (ITPA), Seema is the victim of an international trafficking syndicate, not an offender under the Foreigners Act, 1946.
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
In A.K. Gopalan v. State of Madras (1950), the Supreme Court adopted a strict positivist interpretation of Article 21, treating Fundamental Rights as mutually exclusive silos ("the theory of separate water-tight compartments"). The phrase "procedure established by law" was held to mean any enacted state legislation, irrespective of whether the law was just, fair, or humane.

This formalist view was dismantled in Maneka Gandhi v. Union of India (1978) 1 SCC 248, where Justice P.N. Bhagwati propounded the doctrine of the "Golden Triangle." The Court established that Articles 14, 19, and 21 do not operate in isolation; rather, a law depriving a person of personal liberty under Article 21 must also satisfy the non-arbitrariness mandate of Article 14 and the reasonableness requirements of Article 19. "Procedure established by law" was judicially elevated to "due process of law"—requiring that the procedure must be just, fair, reasonable, and non-oppressive.

II. UNARTICULATED RIGHTS IN CRIMINAL JURISPRUDENCE:
Through expansive judicial interpretation, the Supreme Court has illuminated rights essential for criminal justice:
1. Right to Speedy Trial: In Hussainara Khatoon v. Home Secretary, State of Bihar (1979) and Abdul Rehman Antulay (1992), the Court recognized that prolonged incarceration of undertrials without trial violates Article 21, rendering delay an independent ground for bail.
2. Right to Free Legal Aid: In M.H. Hoskot v. State of Maharashtra (1978) and Khatri (II) v. State of Bihar (1981), the Court held that providing competent legal representation to an indigent accused from the moment of arrest is an inviolable constitutional command, reinforced by Article 39A.
3. Right against Custodial Violence: In Prem Shankar Shukla (1980) and D.K. Basu (1997), routine handcuffing was held to violate human dignity under Article 21 unless an overt propensity to escape or commit violence is established on record.

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
The State's power to restrict speech is strictly bounded by the exhaustive categories enumerated in Article 19(2) (sovereignty, integrity, security of the State, public order, decency, morality, contempt of court, defamation, or incitement to an offence).

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
    part: 'Part A',
    marks: 50,
    questionNumber: 4,
    title: 'Secularism & Essential Religious Practices (ERP) Test — Sabarimala to AMU (2024)',
    questionText: `Secularism in India is not a wall of strict separation between Church and State, but rather the principle of equal respect for all faiths ("Sarva Dharma Sambhava") coupled with reformative state intervention.

(a) Differentiate between the American doctrine of non-entanglement and the positive Indian concept of Secularism.
(b) Critically examine the "Essential Religious Practices" (ERP) Test formulated in the Shirur Mutt case (1954) and its application in Shayara Bano (2017) and Indian Young Lawyers Association (Sabarimala, 2018).
(c) How did the 7-Judge Constitution Bench in Aligarh Muslim University (AMU) Case (2024) redefine the test for determining the minority character of an educational institution under Article 30?`,
    topic: 'Fundamental Rights',
    relevantArticles: ['Article 25', 'Article 26', 'Article 29', 'Article 30'],
    bootcampDay: 5,
    coreIssues: [
      'Positive Indian secularism vs rigid Western wall of separation.',
      'Judicial determination of what constitutes an Essential Religious Practice.',
      'Minority institutional character under Article 30 post-AMU (2024).'
    ],
    landmarkPrecedents: {
      classic: 'Commissioner, Hindu Religious Endowments v. Sri Lakshmindra Thirtha Swamiar (Shirur Mutt, 1954) & S.R. Bommai (1994)',
      modern2024: 'Aligarh Muslim University Case (7-Judge Bench, Nov 2024) & Sabarimala Review Reference'
    },
    modelAnswer: `I. POSITIVE INDIAN SECULARISM VS WESTERN WALL OF SEPARATION:
In western constitutional jurisprudence (notably the United States First Amendment), secularism implies a rigid "wall of separation" between the Church and the State—the State cannot aid, regulate, or interfere in religious affairs.

In contrast, as held in S.R. Bommai v. Union of India (1994), Indian Secularism is an active, positive concept founded on "equal tolerance and respect for all religions" (Sarva Dharma Sambhava). The Indian State does not patronize any single religion, yet Articles 25(2) and 26 expressly empower the State to regulate secular activities associated with religious practices and to enact social welfare and reform measures (such as throwing open Hindu temples to all classes).

II. THE ESSENTIAL RELIGIOUS PRACTICES (ERP) TEST:
In Commissioner, HRE v. Sri Lakshmindra Thirtha Swamiar (Shirur Mutt Case, 1954), the Supreme Court established that freedom of religion under Articles 25 and 26 protects only those practices that are "essential and integral" to that religion.
1. Formulation of the Test: The court inquires whether the practice is of such a fundamental nature that if it is removed, the religion itself ceases to exist.
2. Judicial Scrutiny of Patriarchal Customs:
   - In Shayara Bano v. Union of India (2017), the 5-Judge Bench held that Talaq-e-Biddat (instant triple talaq) is not an essential religious practice in Islam, violates the Quranic scheme, and is manifestly arbitrary under Article 14.
   - In Indian Young Lawyers Association v. State of Kerala (Sabarimala Case, 2018), the Court held that the exclusionary custom barring women aged 10–50 was not an essential practice and violated constitutional morality and Article 21.

III. THE 2024 WATERSHED: AMU CASE (7-JUDGE BENCH):
In Aligarh Muslim University (AMU) v. Union of India (November 2024), a 7-Judge Constitution Bench headed by CJI D.Y. Chandrachud overruled the rigid formalist test laid down in S. Azeez Basha v. Union of India (1968):
1. Overruling of Azeez Basha: Azeez Basha had held that because AMU was established through a central statute enacted by Parliament in 1920, it could not claim minority status under Article 30(1).
2. Genesis and Idea Test: The 7-Judge Bench held that the mere fact that an institution was incorporated through a legislative enactment does not deprive it of minority status under Article 30. The courts must look behind the statutory form to examine the "genesis" of the institution:
   - Who conceived the idea and mobilized the funds?
   - Was the primary purpose to promote the educational advancement of a religious or linguistic minority?
3. Constitutional Shield: Article 30 is an affirmative equality guarantee, not a privilege. Subordinate state regulation cannot dilute the minority administrative autonomy.`,
    scoringRubric: [
      { criterion: 'Comparative analysis of Indian vs Western secularism', marks: 10 },
      { criterion: 'Shirur Mutt ERP test & application in Shayara Bano / Sabarimala', marks: 15 },
      { criterion: 'Overruling of Azeez Basha by the 2024 AMU 7-Judge Bench', marks: 15 },
      { criterion: 'Genesis and Idea test under Article 30', marks: 10 }
    ]
  },
  {
    id: 'jkpsc-po-2022-q5',
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
In State of Bombay v. F.N. Balsara (1951), the Bombay Prohibition Act was challenged because restricting the possession of liquor incidentally affected import/export of goods (a Union subject). The Supreme Court held that the pith and substance was "public health and intoxicating liquors" (State List Entry 8); incidental encroachment on Union trade did not render the law ultra vires.

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
  {
    id: 'jkpsc-po-2022-q6',
    year: '2022–2023',
    exam: 'JKPSC Prosecuting Officer (Mains)',
    paper: 'Paper-II: Constitutional Law',
    part: 'Part B',
    marks: 50,
    questionNumber: 6,
    title: 'Emergency Safeguards & Judicial Review of Article 356 — S.R. Bommai Benchmark',
    questionText: `The Emergency Provisions under Part XVIII were intended as exceptional shields to protect national integrity, yet Article 356 historically suffered severe executive misuse.

(a) Discuss the revolutionary safeguards introduced by the 44th Constitutional Amendment Act, 1978 regarding the proclamation of National Emergency under Article 352.
(b) Critically examine the landmark 9-Judge Constitution Bench ruling in S.R. Bommai v. Union of India (1994) concerning the scope and limitations of judicial review over Presidential proclamations under Article 356.
(c) Can a dissolved State Legislative Assembly be revived by the High Court or Supreme Court if the proclamation is held unconstitutional?`,
    topic: 'Federalism & Emergency',
    relevantArticles: ['Article 352', 'Article 356', 'Article 358', 'Article 359'],
    bootcampDay: 14,
    coreIssues: [
      '44th Amendment safeguards against executive dictatorship.',
      'Objective satisfaction vs subjective whim under Article 356.',
      'Judicial power to revive a dissolved legislative assembly.'
    ],
    landmarkPrecedents: {
      classic: 'State of Rajasthan v. UOI (1977) ➔ S.R. Bommai v. Union of India (1994) 3 SCC 1',
      modern2024: 'Rameshwar Prasad v. UOI (2006) & Nabam Rebia v. Deputy Speaker (2016)'
    },
    modelAnswer: `I. 44TH CONSTITUTIONAL AMENDMENT (1978) REVOLUTIONARY SAFEGUARDS:
In the aftermath of the 1975 internal emergency, the 44th Constitutional Amendment Act, 1978 introduced structural firewalls against unilateral executive authoritarianism under Article 352:
1. Substitution of Grounds: The vague phrase "internal disturbance" was deleted and substituted with "armed rebellion". Mere political agitation or law and order breakdown cannot justify a National Emergency.
2. Written Cabinet Advice Mandatory: The President can issue a proclamation only upon the unanimous written recommendation of the Union Cabinet (Prime Minister and other Cabinet Ministers), eliminating unilateral Prime Ministerial advice.
3. Stringent Parliamentary Approval: The proclamation must be approved within one month (reduced from two months) by a special majority (majority of total membership and not less than 2/3 of members present and voting) in each House of Parliament.
4. Immunity of Articles 20 and 21: Article 359 was amended to provide that the right to move any court for enforcement of Articles 20 and 21 (protection against ex-post facto laws, double jeopardy, self-incrimination, and right to life and personal liberty) can NEVER be suspended during any emergency.

II. THE S.R. BOMMAI WATERSHED (9-JUDGE BENCH, 1994):
In S.R. Bommai v. Union of India (1994) 3 SCC 1, the Supreme Court overruled State of Rajasthan (1977) and established definitive principles on Article 356:
1. Article 356 is Subject to Judicial Review: The proclamation under Article 356 is not immune from judicial review. The court can examine whether the satisfaction of the President was formed on objective, relevant material.
2. Grounds for Invalidation: A proclamation will be struck down if it is based on:
   - Malice in fact or malice in law;
   - Extraneous, irrelevant, or non-existent grounds;
   - Subjective political whim (such as dismissing a state government because another political party won general elections).
3. Floor Test is the Only Legitimate Acid Test: The strength and majority of a Chief Minister and ministry can only be tested on the floor of the Legislative Assembly, never through private headcounts by the Governor in Raj Bhavan.

III. DISSOLUTION OF ASSEMBLY & JUDICIAL POWER OF RESTORATION:
The Bommai Bench laid down an unprecedented procedural and remedial doctrine:
1. No Dissolution Prior to Parliamentary Ratification: The President cannot dissolve the State Legislative Assembly immediately upon issuing a proclamation under Article 356(1). The President can only place the Assembly under suspended animation until both Houses of Parliament approve the proclamation within two months.
2. Power to Revive and Restore: If the Court finds the proclamation unconstitutional, it has the plenary equitable power to declare the proclamation void ab initio and restore the dismissed Ministry and revive the dissolved Legislative Assembly. This was practically applied in Rameshwar Prasad (Bihar Assembly, 2006) and Nabam Rebia (Arunachal Pradesh, 2016), demonstrating that judicial review protects Indian federal democracy from executive decapitation.`,
    scoringRubric: [
      { criterion: '44th Amendment safeguards to Article 352 & 359', marks: 15 },
      { criterion: 'S.R. Bommai grounds of judicial review & floor test rule', marks: 15 },
      { criterion: 'Suspended animation requirement before parliamentary approval', marks: 10 },
      { criterion: 'Power of judicial revival of dissolved assembly (Rameshwar Prasad / Nabam Rebia)', marks: 10 }
    ]
  },
  {
    id: 'jkpsc-po-2022-q7',
    year: '2022–2023',
    exam: 'JKPSC Prosecuting Officer (Mains)',
    paper: 'Paper-II: Constitutional Law',
    part: 'Part B',
    marks: 50,
    questionNumber: 7,
    title: 'Writ Jurisdiction (Art 32 vs 226) & Inherent Powers under Article 142',
    questionText: `The writ jurisdiction represents the ultimate institutional guarantee of constitutional supremacy and human rights.

(a) Compare and contrast the writ jurisdiction of the Supreme Court under Article 32 with that of the High Courts under Article 226. Which jurisdiction is textually and substantively wider?
(b) Discuss the scope and invocation of the writs of Habeas Corpus, Mandamus, and Certiorari in criminal administration and prosecutorial oversight.
(c) Examine the constitutional contours of the Supreme Court's inherent power to do "complete justice" under Article 142. How did the 5-Judge Constitution Bench in High Court Bar Assn. Allahabad v. State of UP (2024) circumscribe Article 142 powers regarding automatic vacation of stay orders?`,
    topic: 'Judiciary & Writs',
    relevantArticles: ['Article 32', 'Article 226', 'Article 141', 'Article 142'],
    bootcampDay: 6,
    coreIssues: [
      'Comparative breadth of Article 226 vs Article 32.',
      'Application of writs in criminal procedure and custody.',
      'Limits of Article 142: High Court Bar Assn Allahabad overruling Asian Resurfacing.'
    ],
    landmarkPrecedents: {
      classic: 'L. Chandra Kumar v. Union of India (1997) & Union of India v. Asian Resurfacing (2018)',
      modern2024: 'High Court Bar Association Allahabad v. State of U.P. (5-Judge Bench, Feb 2024)'
    },
    modelAnswer: `I. COMPARATIVE ANALYSIS: ARTICLE 32 VS ARTICLE 226:
1. Substantive Breadth — Article 226 is Wider than Article 32:
   - Article 32 can be invoked exclusively for the enforcement of Fundamental Rights guaranteed under Part III.
   - Article 226 can be invoked for the enforcement of Fundamental Rights as well as "for any other purpose" (such as enforcement of ordinary legal, statutory, or administrative rights).
2. Constitutional Status — Article 32 is Itself a Fundamental Right:
   - Article 32 is placed in Part III and is itself an inalienable Fundamental Right ("the heart and soul of the Constitution", Dr. B.R. Ambedkar). The Supreme Court cannot refuse to entertain a meritorious petition under Article 32 on grounds of discretion.
   - Article 226 is a constitutional power vested in High Courts, but is discretionary in nature.
3. Territorial Reach:
   - The Supreme Court's writ runs throughout the entire sovereign territory of India.
   - The High Court's writ is territorially bounded by the State borders, extending extra-territorially only where the cause of action wholly or in part arises within its territory (Article 226(2)).

II. WRITS IN CRIMINAL INVESTIGATION & PROSECUTORIAL OVERSIGHT:
1. Habeas Corpus (Produce the Body):
Invoked against unlawful executive or private custody. In criminal procedure, it lies when:
- An arrest violates Article 22(1) (failure to communicate grounds of arrest);
- Accused is not produced before a Magistrate within 24 hours (Article 22(2));
- Detention is under a void or expired remand order.
2. Mandamus (We Command):
Compels a public authority or police officer to perform a non-discretionary statutory duty (e.g. directing police to register an FIR under Section 154 CrPC as per Lalita Kumari, or directing the state prosecutor to discharge statutory functions).
3. Certiorari (To be Certified):
Quashes judicial or quasi-judicial orders passed without jurisdiction, in excess of jurisdiction, or in violation of natural justice (e.g. quashing an illegal discharge order or an unreasoned order granting bail without jurisdiction).

III. INHERENT POWERS UNDER ARTICLE 142 & 2024 RESTRAINT:
Article 142(1) empowers the Supreme Court to pass such decree or order as is necessary for doing "complete justice in any cause or matter pending before it."
While plenary, Article 142 cannot be used to rewrite substantive law or bypass statutory prohibitions (Supreme Court Bar Association v. UOI, 1998).

THE 2024 OVERRULING: HIGH COURT BAR ASSN. ALLAHABAD (FEB 2024):
In Asian Resurfacing (2018), the Supreme Court had issued a blanket directive under Article 142 that in all civil and criminal cases where a stay had been granted on trial proceedings, the stay would automatically expire within six months unless explicitly extended.
In High Court Bar Association Allahabad v. State of U.P. (Feb 2024), a 5-Judge Constitution Bench headed by CJI D.Y. Chandrachud unanimously overruled Asian Resurfacing, holding:
1. Automatic stay expiration is unconstitutional: It arbitrarily penalizes litigants without judicial application of mind.
2. Article 142 cannot encroach upon High Courts: High Courts are independent constitutional courts of record under Article 215, not administratively subordinate to the Supreme Court. The Supreme Court cannot use Article 142 to issue blanket administrative fiats controlling High Court judicial discretion.`,
    scoringRubric: [
      { criterion: 'Article 32 vs 226 comparative analysis (Substantive vs Territorial reach)', marks: 15 },
      { criterion: 'Writs in criminal justice (Habeas Corpus, Mandamus, Certiorari)', marks: 15 },
      { criterion: 'Article 142 inherent powers & constitutional boundaries', marks: 10 },
      { criterion: 'High Court Bar Assn Allahabad (2024) 5-Judge Bench ratio', marks: 10 }
    ]
  },
  {
    id: 'jkpsc-po-2022-q8',
    year: '2022–2023',
    exam: 'JKPSC Prosecuting Officer (Mains)',
    paper: 'Paper-II: Constitutional Law',
    part: 'Part B',
    marks: 50,
    questionNumber: 8,
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
