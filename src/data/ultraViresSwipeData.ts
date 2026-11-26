export interface UltraViresScenario {
  id: string;
  situation: string;
  verdict: 'INTRA_VIRES' | 'ULTRA_VIRES'; // INTRA_VIRES = Constitutional, ULTRA_VIRES = Unconstitutional
  primaryArticle: string;
  governingPrecedentOrRule: string;
  oneLineRatio: string;
  category: 'Fundamental Rights' | 'Executive & Emergency' | 'Judiciary & Writs' | 'Parliament & Elections' | 'Federalism';
}

export const ULTRA_VIRES_DECK: UltraViresScenario[] = [
  {
    id: 'uv-1',
    situation:
      'Police arrest a citizen under Section 66A of the IT Act for posting political satire online.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 19(1)(a)',
    governingPrecedentOrRule: 'Shreya Singhal v. Union of India (2015)',
    oneLineRatio:
      'Section 66A was struck down for being unconstitutionally vague and creating an impermissible chilling effect on free speech.',
    category: 'Fundamental Rights'
  },
  {
    id: 'uv-2',
    situation:
      'President of India returns a Money Bill passed by Parliament for legislative reconsideration under Article 111.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 111',
    governingPrecedentOrRule: 'Article 111 Proviso',
    oneLineRatio:
      'Article 111 explicitly bars the President from returning a Money Bill; the President must either grant or withhold assent.',
    category: 'Parliament & Elections'
  },
  {
    id: 'uv-3',
    situation:
      'A state legislature passes an amendment imposing criminal jail sentences with retrospective effect.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 20(1)',
    governingPrecedentOrRule: 'Kedar Nath v. State of West Bengal (1953)',
    oneLineRatio:
      'Article 20(1) establishes an absolute constitutional embargo against ex-post facto penal enactments.',
    category: 'Fundamental Rights'
  },
  {
    id: 'uv-4',
    situation:
      'Governor reserves a state bill for Presidential consideration because it derogates from the powers of the High Court.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Article 200',
    governingPrecedentOrRule: 'Article 200 Second Proviso',
    oneLineRatio:
      'Reservation is constitutionally mandatory if a bill endangers the constitutional position and powers of the High Court.',
    category: 'Federalism'
  },
  {
    id: 'uv-5',
    situation:
      'Parliament inserts clauses (4) and (5) into Article 368 declaring that constitutional amendments cannot be reviewed by any court.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 368',
    governingPrecedentOrRule: 'Minerva Mills v. Union of India (1980)',
    oneLineRatio:
      'Clauses (4) and (5) were struck down because judicial review of constitutional amendments is an unalterable basic feature.',
    category: 'Judiciary & Writs'
  },
  {
    id: 'uv-6',
    situation:
      'Supreme Court invokes Article 142 to dissolve a marriage on grounds of irretrievable breakdown without waiting for statutory cooling periods.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Article 142',
    governingPrecedentOrRule: 'Shilpa Sailesh v. Varun Sreenivasan (2023)',
    oneLineRatio:
      'Inherent powers under Article 142 allow the apex court to do complete justice unfettered by procedural waiting periods.',
    category: 'Judiciary & Writs'
  },
  {
    id: 'uv-7',
    situation:
      'A State enacts legislation reserving 75% of private-sector factory jobs exclusively for local state domiciles.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 16(2) & Article 19(1)(g)',
    governingPrecedentOrRule: 'IMT Industrial Association v. State of Haryana (2023)',
    oneLineRatio:
      'States cannot build artificial geographical walls in private employment, violating equal citizenship across India.',
    category: 'Fundamental Rights'
  },
  {
    id: 'uv-8',
    situation:
      'Election Commission directs all contesting candidates to publicly disclose their criminal antecedents in widely circulated newspapers.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Article 324',
    governingPrecedentOrRule: 'Public Interest Foundation v. Union of India (2018)',
    oneLineRatio:
      'Voters have a fundamental right to know candidates’ criminal records under Article 19(1)(a) enforced via Article 324.',
    category: 'Parliament & Elections'
  },
  {
    id: 'uv-9',
    situation:
      'Assembly Speaker sits indefinitely for 2 years on a Tenth Schedule anti-defection disqualification petition without deciding.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Tenth Schedule',
    governingPrecedentOrRule: 'Keisham Meghachandra Singh v. Speaker (2020)',
    oneLineRatio:
      'The Speaker acting as a tribunal must decide defection petitions within a reasonable period, ordinarily 3 months.',
    category: 'Parliament & Elections'
  },
  {
    id: 'uv-10',
    situation:
      'Union dissolves a State Legislative Assembly under Article 356 before the proclamation has been approved by both Houses of Parliament.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 356(3)',
    governingPrecedentOrRule: 'S.R. Bommai v. Union of India (1994)',
    oneLineRatio:
      'The State Assembly can only be kept in suspended animation; dissolution cannot take place prior to parliamentary approval.',
    category: 'Executive & Emergency'
  },
  {
    id: 'uv-11',
    situation:
      'During a National Emergency under Article 352, Parliament extends the duration of the Lok Sabha by 1 year at a time.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Article 83(2)',
    governingPrecedentOrRule: 'Article 83(2) Proviso',
    oneLineRatio:
      'The Constitution explicitly authorizes Parliament to extend the life of Lok Sabha by law for up to 1 year at a time during emergency.',
    category: 'Parliament & Elections'
  },
  {
    id: 'uv-12',
    situation:
      'High Court issues a writ of Mandamus directing the Union Government to enact a Uniform Civil Code under Article 44.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 37 & Article 226',
    governingPrecedentOrRule: 'Maharshi Avadhesh v. Union of India (1994)',
    oneLineRatio:
      'Directive Principles are non-justiciable; courts cannot issue writs commanding Parliament or State Legislatures to enact laws.',
    category: 'Judiciary & Writs'
  },
  {
    id: 'uv-13',
    situation:
      'State invokes Article 365 to impose President’s Rule after a State ignores Union directions on national highway construction.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Article 365 & Article 257',
    governingPrecedentOrRule: 'Article 365 read with Article 356',
    oneLineRatio:
      'Failure to comply with lawful Union executive directions under Article 257 empowers the President to deem it a constitutional breakdown.',
    category: 'Executive & Emergency'
  },
  {
    id: 'uv-14',
    situation:
      'A sitting Member of Parliament claims immunity under Article 105(2) from criminal prosecution for taking a cash bribe to vote on a bill.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 105(2)',
    governingPrecedentOrRule: 'Sita Soren v. Union of India (2024)',
    oneLineRatio:
      '7-Judge Bench unanimously held that bribery is complete upon acceptance and is never protected by legislative privilege.',
    category: 'Parliament & Elections'
  },
  {
    id: 'uv-15',
    situation:
      'State Government classifies Scheduled Castes into sub-quotas to ensure benefits reach more disadvantaged sub-castes using empirical data.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Article 16(4)',
    governingPrecedentOrRule: 'State of Punjab v. Davinder Singh (2024)',
    oneLineRatio:
      '7-Judge Bench ruled that sub-classification within SCs is constitutionally permissible under Article 16(4) to advance substantive equality.',
    category: 'Fundamental Rights'
  },
  {
    id: 'uv-16',
    situation:
      'Police confiscate a citizen’s passport indefinitely under an uncanalized executive circular without notice or hearing.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 21',
    governingPrecedentOrRule: 'Maneka Gandhi v. Union of India (1978)',
    oneLineRatio:
      'Procedure depriving personal liberty must be just, fair, and reasonable, incorporating natural justice (audi alteram partem).',
    category: 'Fundamental Rights'
  },
  {
    id: 'uv-17',
    situation:
      'Parliament enacts an ordinary statute declaring that a final judgment of the Supreme Court between two private parties is null and void.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 141 & Article 142',
    governingPrecedentOrRule: 'Medical Council of India v. State of Kerala (2019)',
    oneLineRatio:
      'Legislature can cure statutory defects retrospectively, but cannot directly overturn or set aside judicial decrees.',
    category: 'Judiciary & Writs'
  },
  {
    id: 'uv-18',
    situation:
      'Election Commission bans opinion polls during the 48 hours preceding the conclusion of polling across phases.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Article 324 & Section 126A RPA',
    governingPrecedentOrRule: 'Section 126A Representation of the People Act, 1951',
    oneLineRatio:
      'Reasonable restriction in the interest of free, fair, and un-coerced voting environment.',
    category: 'Parliament & Elections'
  },
  {
    id: 'uv-19',
    situation:
      'Governor withholds assent to a bill repassed by the State Legislative Assembly without any changes.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 200',
    governingPrecedentOrRule: 'State of Punjab v. Principal Secretary (2023)',
    oneLineRatio:
      'First proviso to Article 200 mandates that if the bill is passed again by the House, the Governor shall not withhold assent.',
    category: 'Federalism'
  },
  {
    id: 'uv-20',
    situation:
      'President invokes Article 359 during a National Emergency to suspend a citizen’s right to move court for enforcement of Article 20.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 359(1)',
    governingPrecedentOrRule: '44th Constitutional Amendment Act, 1978',
    oneLineRatio:
      'Articles 20 and 21 are explicitly non-derogable and cannot be suspended under Article 359 even during martial law or emergency.',
    category: 'Executive & Emergency'
  },
  {
    id: 'uv-21',
    situation: 'A State Legislature enacts a law sub-classifying Scheduled Castes in State jobs based on quantifiable empirical data of inadequate representation without excluding any SC caste.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Article 16(4)',
    governingPrecedentOrRule: 'State of Punjab v. Davinder Singh (2024, 7-Judge Bench)',
    oneLineRatio: 'Overruling E.V. Chinnaiah, the 7-Judge Bench upheld empirical sub-classification under Art 16(4) as it does not alter the Art 341 list.',
    category: 'Fundamental Rights'
  },
  {
    id: 'uv-22',
    situation: 'A High Court entertains a Writ of Certiorari under Article 226 to quash a Civil Court\'s interim injunction order in a private property suit.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Articles 226 & 227',
    governingPrecedentOrRule: 'Radhey Shyam v. Chhabi Nath (2015)',
    oneLineRatio: 'Judicial orders of Civil Courts are not amenable to Art 226 writ jurisdiction; challenge lies only under Art 227 or CPC appeal/revision.',
    category: 'Judiciary & Writs'
  },
  {
    id: 'uv-23',
    situation: 'Police arrest an accused under UAPA/BNS and hand over a generic printed arrest memo containing only "reasons for arrest" without written factual grounds.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 22(1)',
    governingPrecedentOrRule: 'Prabir Purkayastha v. State (NCT of Delhi) (2024)',
    oneLineRatio: 'Written factual "grounds of arrest" must be furnished to the arrestee under Art 22(1); failure vitiates both arrest and remand.',
    category: 'Fundamental Rights'
  },
  {
    id: 'uv-24',
    situation: 'A State Government imposes a tax on mineral-bearing land and mineral rights under State List Entries 49 & 50 in addition to central MMDR royalties.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Seventh Schedule List II Entries 49 & 50',
    governingPrecedentOrRule: 'MADA v. SAIL (2024, 9-Judge Bench)',
    oneLineRatio: 'Royalty is contractual consideration, not a tax; States retain plenary competence under Entries 49 & 50 to tax mineral rights and land.',
    category: 'Federalism'
  },
  {
    id: 'uv-25',
    situation: 'Parliament passes an Electoral Bonds Scheme allowing anonymous, unlimited corporate political donations exempt from public disclosure.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 19(1)(a)',
    governingPrecedentOrRule: 'Association for Democratic Reforms v. Union of India (2024, 5-Judge Bench)',
    oneLineRatio: 'Anonymous electoral bonds violate voters\' right to information under Art 19(1)(a) and fail the proportionality test.',
    category: 'Parliament & Elections'
  },
  {
    id: 'uv-26',
    situation: 'An MP accepts a cash bribe to cast a vote in Parliament and claims immunity from criminal prosecution under Article 105(2).',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 105(2)',
    governingPrecedentOrRule: 'Sita Soren v. Union of India (2024, 7-Judge Bench)',
    oneLineRatio: 'Overruling P.V. Narasimha Rao (1998), the 7-Judge Bench held bribery is not protected by parliamentary privilege.',
    category: 'Parliament & Elections'
  },
  {
    id: 'uv-27',
    situation: 'A Municipal Corporation takes physical possession of private land for road widening under an executive resolution without any acquisition law or compensation.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 300A',
    governingPrecedentOrRule: 'Kolkata Municipal Corp v. Bimal Kumar Shah (2024)',
    oneLineRatio: 'Deprivation of property under Art 300A requires enacted law and seven mandatory procedural safeguards including notice, hearing, and fair compensation.',
    category: 'Fundamental Rights'
  },
  {
    id: 'uv-28',
    situation: 'A State Governor keeps 6 Bills passed by the Assembly pending on his desk for 2 years without either granting assent, returning them, or reserving them.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 200',
    governingPrecedentOrRule: 'State of Punjab v. Principal Secretary to the Governor (2023)',
    oneLineRatio: 'A Governor cannot exercise a pocket veto under Article 200 and must act "as soon as possible".',
    category: 'Executive & Emergency'
  },
  {
    id: 'uv-29',
    situation: 'The Supreme Court invokes Article 142 to directly dissolve a broken marriage on irretrievable breakdown without forcing parties to wait 6 months under Section 13B HMA.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Article 142',
    governingPrecedentOrRule: 'Shilpa Sailesh v. Varun Sreenivasan (2023, 5-Judge Bench)',
    oneLineRatio: 'Article 142 empowers the Supreme Court to do complete justice by dissolving irretrievably broken marriages and waiving cooling-off periods.',
    category: 'Judiciary & Writs'
  },
  {
    id: 'uv-30',
    situation: 'The Union Government re-promulgates an Ordinance 7 times in a row over 3 years without ever placing it before Parliament for approval.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 123',
    governingPrecedentOrRule: 'Krishna Kumar Singh v. State of Bihar (2017, 7-Judge Bench)',
    oneLineRatio: 'Repeated re-promulgation of Ordinances bypassing the legislature is a fraud on the Constitution.',
    category: 'Executive & Emergency'
  },
  {
    id: 'uv-31',
    situation: 'Parliament enacts a Constitutional Amendment inserting a law into the Ninth Schedule that violates the right to equality and judicial review.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 31B & Basic Structure',
    governingPrecedentOrRule: 'I.R. Coelho v. State of Tamil Nadu (2007, 9-Judge Bench)',
    oneLineRatio: 'Post-April 24, 1973 Ninth Schedule insertions enjoy no immunity if they damage the Basic Structure (Arts 14, 19, 21).',
    category: 'Judiciary & Writs'
  },
  {
    id: 'uv-32',
    situation: 'A State Legislature passes a law providing 10% EWS reservation in State colleges excluding SCs, STs, and OBCs already covered by vertical quotas.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Article 15(6)',
    governingPrecedentOrRule: 'Janhit Abhiyan v. Union of India (2022, 5-Judge Bench)',
    oneLineRatio: 'The 103rd Amendment EWS quota based on economic criteria does not violate the Basic Structure.',
    category: 'Fundamental Rights'
  },
  {
    id: 'uv-33',
    situation: 'Police subject an unwilling suspect to an involuntary narco-analysis and brain-mapping test to extract a confession.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 20(3) & Article 21',
    governingPrecedentOrRule: 'Selvi v. State of Karnataka (2010)',
    oneLineRatio: 'Involuntary narco-analysis, polygraph, and BEAP tests violate testimonial self-incrimination protection and mental privacy.',
    category: 'Fundamental Rights'
  },
  {
    id: 'uv-34',
    situation: 'A Magistrate directs an accused to provide a physical voice sample for spectrographic comparison with a recorded call.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Article 20(3)',
    governingPrecedentOrRule: 'Ritesh Sinha v. State of Uttar Pradesh (2019)',
    oneLineRatio: 'Providing a voice sample is non-testimonial physical identification, akin to fingerprints or handwriting, not barred by Art 20(3).',
    category: 'Fundamental Rights'
  },
  {
    id: 'uv-35',
    situation: 'A State Government imposes a blanket, indefinite internet shutdown across an entire district without publishing reasoned periodic review orders.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 19(1)(a) & 19(1)(g)',
    governingPrecedentOrRule: 'Anuradha Bhasin v. Union of India (2020)',
    oneLineRatio: 'Indefinite internet suspension is impermissible; orders must be published, proportionate, and periodically reviewed every 7 working days.',
    category: 'Fundamental Rights'
  },
  {
    id: 'uv-36',
    situation: 'Parliament passes an ordinary law by Simple Majority under Article 3 to reorganize one State into two new States.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Articles 3 & 4',
    governingPrecedentOrRule: 'Article 4(2)',
    oneLineRatio: 'Internal reorganization of States under Article 3 requires only a Simple Majority and is not an Article 368 amendment.',
    category: 'Federalism'
  },
  {
    id: 'uv-37',
    situation: 'The Union Executive cedes an inhabited border enclave to a neighbouring country via an executive treaty without an Article 368 Constitutional Amendment.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Articles 1, 3 & 368',
    governingPrecedentOrRule: 'In re Berubari Union (1960)',
    oneLineRatio: 'Ceding sovereign Indian territory to a foreign state requires a Constitutional Amendment under Article 368.',
    category: 'Federalism'
  },
  {
    id: 'uv-38',
    situation: 'A retired Comptroller and Auditor-General (CAG) accepts appointment as Chairman of a State Finance Commission after leaving office.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 148(4)',
    governingPrecedentOrRule: 'Article 148(4) Constitutional Bar',
    oneLineRatio: 'Article 148(4) prohibits the CAG from holding any further office under the Union or any State Government after retirement.',
    category: 'Executive & Emergency'
  },
  {
    id: 'uv-39',
    situation: 'A Disciplinary Authority dismisses a permanent civil servant without holding an inquiry under Art 311(2)(b) merely recording "inquiry is inconvenient".',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 311(2)(b)',
    governingPrecedentOrRule: 'Union of India v. Tulsiram Patel (1985)',
    oneLineRatio: 'Dispensing with inquiry requires objective, contemporaneous reasons showing impossibility/impracticability, not mere administrative convenience.',
    category: 'Executive & Emergency'
  },
  {
    id: 'uv-40',
    situation: 'A Departmental Inquiry dismisses a government servant for bribery, and the CBI simultaneously prosecutes him in a Special Court for the same bribery.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Article 20(2)',
    governingPrecedentOrRule: 'S.A. Venkataraman v. Union of India (1954)',
    oneLineRatio: 'Departmental disciplinary action is not a judicial "prosecution and punishment", so criminal trial does not violate Article 20(2).',
    category: 'Fundamental Rights'
  },
  {
    id: 'uv-41',
    situation: 'A State Legislature enacts a law on a Concurrent List subject that conflicts with an earlier Central Act, after reserving it and obtaining Presidential Assent.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Article 254(2)',
    governingPrecedentOrRule: 'Article 254(2) Exception',
    oneLineRatio: 'A State law on a List III matter that receives Presidential Assent prevails within that State over an earlier Central law.',
    category: 'Federalism'
  },
  {
    id: 'uv-42',
    situation: 'The Rajya Sabha passes a resolution by 2/3rds of members present and voting authorizing Parliament to legislate on a State List subject in the national interest for 1 year.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Article 249',
    governingPrecedentOrRule: 'Article 249(1)',
    oneLineRatio: 'Article 249 empowers the Rajya Sabha by a 2/3rds present-and-voting resolution to temporarily unlock State List jurisdiction for Parliament.',
    category: 'Federalism'
  },
  {
    id: 'uv-43',
    situation: 'The President declares a National Emergency under Article 352 based solely on an oral telephonic request from the Prime Minister without Cabinet approval.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 352(3)',
    governingPrecedentOrRule: '44th Constitutional Amendment Act, 1978',
    oneLineRatio: 'Article 352(3) mandates a written recommendation from the Union Cabinet before the President can proclaim a National Emergency.',
    category: 'Executive & Emergency'
  },
  {
    id: 'uv-44',
    situation: 'A Governor dissolves the State Legislative Assembly immediately upon proclaiming President\'s Rule under Article 356 before Parliament approves the proclamation.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 356',
    governingPrecedentOrRule: 'S.R. Bommai v. Union of India (1994)',
    oneLineRatio: 'Under Bommai, the State Assembly may only be kept in suspended animation and cannot be dissolved until both Houses of Parliament approve the Art 356 proclamation.',
    category: 'Executive & Emergency'
  },
  {
    id: 'uv-45',
    situation: 'A High Court refuses to entertain a Writ Petition under Article 226 because the petitioner has an equally efficacious statutory appeal available.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Article 226',
    governingPrecedentOrRule: 'Whirlpool Corp v. Registrar of Trade Marks (1998)',
    oneLineRatio: 'Article 226 is discretionary; High Courts may relegate litigants to alternative statutory remedies unless Fundamental Rights, natural justice, or jurisdiction are breached.',
    category: 'Judiciary & Writs'
  },
  {
    id: 'uv-46',
    situation: 'The Supreme Court refuses to hear an Article 32 petition alleging violation of Article 21 solely because the petitioner did not first approach the High Court.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 32',
    governingPrecedentOrRule: 'Romesh Thappar v. State of Madras (1950)',
    oneLineRatio: 'Article 32 is itself a Fundamental Right; the Supreme Court is the protector and guarantor of Fundamental Rights and cannot decline jurisdiction merely for bypassing the HC.',
    category: 'Judiciary & Writs'
  },
  {
    id: 'uv-47',
    situation: 'A non-minority private unaided school refuses to admit EWS children under the 25% RTE quota claiming violation of Article 19(1)(g).',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Articles 21A & 19(6)',
    governingPrecedentOrRule: 'Society for Unaided Private Schools (2012) & Pramati (2014)',
    oneLineRatio: 'The 25% RTE quota is a valid reasonable restriction under Art 19(6) on non-minority private schools to advance Article 21A.',
    category: 'Fundamental Rights'
  },
  {
    id: 'uv-48',
    situation: 'A State Government mandates 25% RTE EWS reservation in an unaided Minority Educational Institution.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 30(1)',
    governingPrecedentOrRule: 'Pramati Educational & Cultural Trust v. Union of India (2014)',
    oneLineRatio: 'Applying the 25% RTE quota to minority schools (aided or unaided) infringes their minority character protected under Article 30(1).',
    category: 'Fundamental Rights'
  },
  {
    id: 'uv-49',
    situation: 'The Speaker of a State Assembly disqualifies 5 MLAs under the Tenth Schedule, and the MLAs file a Writ Petition under Article 226 challenging the order.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Tenth Schedule Para 6 & Article 226',
    governingPrecedentOrRule: 'Kihoto Hollohan v. Zachillhu (1992)',
    oneLineRatio: 'The Speaker acts as a tribunal under the Tenth Schedule; final disqualification orders are subject to judicial review under Arts 226/136.',
    category: 'Judiciary & Writs'
  },
  {
    id: 'uv-50',
    situation: 'A High Court issues a Writ of Mandamus directing the Speaker of the Assembly to decide a pending Tenth Schedule disqualification petition within 3 months.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Tenth Schedule & Article 226',
    governingPrecedentOrRule: 'Keisham Meghachandra Singh v. Hon\'ble Speaker Manipur (2020)',
    oneLineRatio: 'Speakers must decide disqualification petitions within a reasonable time (ordinarily 3 months), and courts can issue time-bound directions.',
    category: 'Judiciary & Writs'
  },
  {
    id: 'uv-51',
    situation: 'A State Legislature creates a State Law amending Co-operative Societies\' governance rules without 50% State ratification under Parliament\'s 97th Amendment Part IXB.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Article 243ZH & Article 368(2) Proviso',
    governingPrecedentOrRule: 'Union of India v. Rajendra N. Shah (2021)',
    oneLineRatio: 'Part IXB was struck down as applied to State co-operative societies for lack of 50% State ratification, leaving States\' List II Entry 32 power intact.',
    category: 'Federalism'
  },
  {
    id: 'uv-52',
    situation: 'The Union Government establishes a Tribunal replacing High Court jurisdiction and bars all High Court review under Articles 226 and 227.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Articles 226, 227 & 323A/323B',
    governingPrecedentOrRule: 'L. Chandra Kumar v. Union of India (1997, 7-Judge Bench)',
    oneLineRatio: 'Judicial review by High Courts under Arts 226/227 is part of the Basic Structure and cannot be excluded by any tribunal statute or amendment.',
    category: 'Judiciary & Writs'
  },
  {
    id: 'uv-53',
    situation: 'Parliament passes a Constitutional Amendment by Special Majority without State ratification to modify the procedure for electing the President of India.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 368(2) Proviso (Articles 54 & 55)',
    governingPrecedentOrRule: 'P-E-J-S-L-A Federal Entrenchment Rule',
    oneLineRatio: 'Amending Presidential election provisions (Arts 54/55) requires Special Majority PLUS ratification by at least half of the State Legislatures.',
    category: 'Federalism'
  },
  {
    id: 'uv-54',
    situation: 'A State Legislature passes a resolution by Special Majority requesting Parliament to abolish its Legislative Council, and Parliament passes the Act by Simple Majority.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Article 169',
    governingPrecedentOrRule: 'Article 169(1) & (3)',
    oneLineRatio: 'While the State Assembly needs a Special Majority to propose abolition/creation of a Council, Parliament enacts it by Simple Majority (not an Art 368 amendment).',
    category: 'Parliament & Elections'
  },
  {
    id: 'uv-55',
    situation: 'A citizen files a Quo-Warranto writ petition challenging the appointment of an unqualified person to a statutory public office despite having no personal injury.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Articles 32 & 226',
    governingPrecedentOrRule: 'University of Mysore v. Govinda Rao (1963)',
    oneLineRatio: 'Quo-Warranto relaxes strict locus standi; any interested citizen can challenge usurpation of a substantive public office.',
    category: 'Judiciary & Writs'
  },
  {
    id: 'uv-56',
    situation: 'A police officer produces a petty theft accused before a Magistrate in iron handcuffs without prior permission of the Magistrate.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 21',
    governingPrecedentOrRule: 'Prem Shankar Shukla v. Delhi Administration (1980)',
    oneLineRatio: 'Handcuffing without compelling recorded necessity and prior judicial permission violates human dignity under Article 21.',
    category: 'Fundamental Rights'
  },
  {
    id: 'uv-57',
    situation: 'A citizen writes a critical newspaper editorial on a Supreme Court judgment using temperate, reasoned legal critique.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Article 19(1)(a)',
    governingPrecedentOrRule: 'Fair Criticism Principle (Contempt of Courts Act, Sec 5)',
    oneLineRatio: 'Fair, temperate criticism of judicial acts is protected speech under Art 19(1)(a) and does not constitute criminal contempt.',
    category: 'Fundamental Rights'
  },
  {
    id: 'uv-58',
    situation: 'A State Government bans a book nationwide solely on the ground that a small group threatened protests, without any imminent incitement to violence.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 19(1)(a) & 19(2)',
    governingPrecedentOrRule: 'S. Rangarajan v. P. Jagjivan Ram (1989)',
    oneLineRatio: 'The State cannot succumb to heckler\'s veto; free expression can only be restricted when the threat to public order is proximate like a "spark in a powder keg".',
    category: 'Fundamental Rights'
  },
  {
    id: 'uv-59',
    situation: 'A Municipality levies a toll/tax on local shops solely through an executive Mayor\'s circular without any statutory backing from State law.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 265',
    governingPrecedentOrRule: 'Article 265 ("No tax save by authority of law")',
    oneLineRatio: 'Every tax levy and collection must be backed by valid enacted legislation; executive circulars cannot impose taxes.',
    category: 'Federalism'
  },
  {
    id: 'uv-60',
    situation: 'An accused is arrested at 10 AM and produced before the nearest Magistrate at 11 AM the next day after a 3-hour road journey from a remote forest.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Article 22(2)',
    governingPrecedentOrRule: 'Article 22(2) Journey Time Exclusion',
    oneLineRatio: 'Article 22(2) mandates production within 24 hours EXCLUDING journey time; 25 hours minus 3 hours journey = 22 hours, which is valid.',
    category: 'Fundamental Rights'
  },
  {
    id: 'uv-61',
    situation: 'An Investigating Officer files a 3-page incomplete chargesheet on the 89th day solely to block default bail while key forensic investigation is still incomplete.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 21 & Sec 167(2) CrPC / 187 BNSS',
    governingPrecedentOrRule: 'Ritu Chhabaria v. Union of India (2023)',
    oneLineRatio: 'Filing a piecemeal/incomplete chargesheet as a ruse cannot defeat an accused\'s indefeasible right to default bail under Art 21.',
    category: 'Fundamental Rights'
  },
  {
    id: 'uv-62',
    situation: 'A State Government passes a law reserving 100% of teaching posts in Scheduled Area schools exclusively for local Scheduled Tribe candidates.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Articles 14 & 16',
    governingPrecedentOrRule: 'Chebrolu Leela Prasad Rao v. State of A.P. (2020, 5-Judge Bench)',
    oneLineRatio: '100% reservation is unconstitutional and violates equality under Arts 14 & 16 and the 50% ceiling.',
    category: 'Fundamental Rights'
  },
  {
    id: 'uv-63',
    situation: 'A private citizen challenges the appointment of Election Commissioners solely by the Prime Minister without a statutory law under Article 324(2).',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Article 324(2)',
    governingPrecedentOrRule: 'Anoop Baranwal v. Union of India (2023, 5-Judge Bench)',
    oneLineRatio: 'SC held Art 324(2) envisioned a parliamentary law; pending law, a high-powered committee (PM, LoP, CJI) was mandated (later replaced by 2023 Act).',
    category: 'Parliament & Elections'
  },
  {
    id: 'uv-64',
    situation: 'A State Legislature passes a law levying a tax on inter-state sale of goods that directly discriminates against goods imported from other States.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Articles 301 & 304(a)',
    governingPrecedentOrRule: 'Jindal Stainless Ltd. v. State of Haryana (2017, 9-Judge Bench)',
    oneLineRatio: 'Non-discriminatory taxes do not offend Art 301, but discriminatory taxes favouring local goods over out-of-state goods violate Art 304(a).',
    category: 'Federalism'
  },
  {
    id: 'uv-65',
    situation: 'Parliament passes an ordinary Act by Simple Majority to establish a common High Court for two States and one Union Territory.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Article 231',
    governingPrecedentOrRule: 'Article 231(1)',
    oneLineRatio: 'Article 231 empowers Parliament by law to establish a common High Court for two or more States or States and a UT.',
    category: 'Judiciary & Writs'
  },
  {
    id: 'uv-66',
    situation: 'A State Government refuses to hold Panchayat elections for 2 years after the 5-year term expires without any statutory or constitutional basis.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 243E(3)',
    governingPrecedentOrRule: 'Kishansing Tomar v. Municipal Corp. Ahmedabad (2006)',
    oneLineRatio: 'Article 243E/243U mandates elections BEFORE expiry of the 5-year term (or within 6 months of dissolution); indefinite delay is unconstitutional.',
    category: 'Federalism'
  },
  {
    id: 'uv-67',
    situation: 'A High Court entertains a writ petition challenging the delimitation of Panchayat constituencies after the election notification has been issued.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 243O',
    governingPrecedentOrRule: 'Article 243O Constitutional Bar',
    oneLineRatio: 'Article 243O bars judicial interference in Panchayat delimitation and requires election challenges solely via election petitions.',
    category: 'Parliament & Elections'
  },
  {
    id: 'uv-68',
    situation: 'A terminally ill patient executes a valid Living Will (Advance Medical Directive) refusing life-prolonging mechanical ventilation.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Article 21',
    governingPrecedentOrRule: 'Common Cause v. Union of India (2018, 5-Judge Bench)',
    oneLineRatio: 'Right to die with dignity (passive euthanasia and living wills) is an integral part of Article 21.',
    category: 'Fundamental Rights'
  },
  {
    id: 'uv-69',
    situation: 'Police prosecute consenting adults under Section 377 IPC for private consensual same-sex relations.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Articles 14, 15, 19 & 21',
    governingPrecedentOrRule: 'Navtej Singh Johar v. Union of India (2018, 5-Judge Bench)',
    oneLineRatio: 'Criminalising consensual adult sexual conduct violates dignity, equality, privacy, and expression under Arts 14, 15, 19, and 21.',
    category: 'Fundamental Rights'
  },
  {
    id: 'uv-70',
    situation: 'A husband prosecutes a third party for criminal adultery under Section 497 IPC treating the wife as chattel.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Articles 14, 15(1) & 21',
    governingPrecedentOrRule: 'Joseph Shine v. Union of India (2018, 5-Judge Bench)',
    oneLineRatio: 'Section 497 IPC was struck down as manifestly arbitrary and patriarchal, violating women\'s sexual autonomy and equality.',
    category: 'Fundamental Rights'
  },
  {
    id: 'uv-71',
    situation: 'A woman of menstruating age (10–50) is barred by law from entering a public temple.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Articles 14, 15, 17, 21 & 25',
    governingPrecedentOrRule: 'Indian Young Lawyers Association v. State of Kerala (Sabarimala, 2018)',
    oneLineRatio: 'Exclusion based on physiological attributes violates Art 25(1) equal entitlement to worship and constitutional morality.',
    category: 'Fundamental Rights'
  },
  {
    id: 'uv-72',
    situation: 'A Muslim husband pronounces instant triple talaq (Talaq-e-Biddat) to irrevocably divorce his wife.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 14',
    governingPrecedentOrRule: 'Shayara Bano v. Union of India (2017, 5-Judge Bench)',
    oneLineRatio: 'Instant triple talaq is not an essential religious practice and is manifestly arbitrary under Article 14.',
    category: 'Fundamental Rights'
  },
  {
    id: 'uv-73',
    situation: 'Parliament enacts a law overriding a Supreme Court judgment by simply declaring the judgment void without curing the underlying legal defect.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Separation of Powers & Basic Structure',
    governingPrecedentOrRule: 'Madras Bar Association v. Union of India (2021)',
    oneLineRatio: 'While Parliament can cure the statutory basis of a judgment, a bare legislative declaration overruling a judicial verdict violates separation of powers.',
    category: 'Judiciary & Writs'
  },
  {
    id: 'uv-74',
    situation: 'A State Government imposes a uniform GST-compliant tax on lotteries and gambling across all States without GST Council binding compulsion.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Articles 246A & 279A',
    governingPrecedentOrRule: 'Union of India v. Mohit Minerals (2022)',
    oneLineRatio: 'Under Art 246A, Parliament and States hold simultaneous power; GST Council recommendations are persuasive, preserving legislative sovereignty.',
    category: 'Federalism'
  },
  {
    id: 'uv-75',
    situation: 'A candidate is appointed as Chief Minister of a State for 6 months despite not being an MLA, and upon failing to get elected, resigns and is immediately reappointed for another 6 months.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 164(4)',
    governingPrecedentOrRule: 'S.R. Chaudhuri v. State of Punjab (2001)',
    oneLineRatio: 'Reappointing a non-legislator for consecutive 6-month terms without election is a subversion of Art 164(4) and parliamentary democracy.',
    category: 'Parliament & Elections'
  },
  {
    id: 'uv-76',
    situation: 'The Prime Minister advises the President to dissolve the Lok Sabha after losing a vote of confidence, and the President invites the Leader of the Opposition to explore an alternative majority first.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Articles 74 & 85(2)(b)',
    governingPrecedentOrRule: 'Constitutional Convention & Sarkaria Commission',
    oneLineRatio: 'A defeated Council of Ministers\' advice to dissolve Lok Sabha is not binding if a viable alternative government can be formed.',
    category: 'Executive & Emergency'
  },
  {
    id: 'uv-77',
    situation: 'Parliament enacts a retrospective tax validation law curing a procedural defect pointed out by a High Court.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Articles 245 & 265',
    governingPrecedentOrRule: 'Shri Prithvi Cotton Mills v. Broach Borough Municipality (1969)',
    oneLineRatio: 'A legislature can enact a validating law curing the defect pointed out by a court, as Art 20(1) does not bar retrospective civil/tax laws.',
    category: 'Federalism'
  },
  {
    id: 'uv-78',
    situation: 'A State Legislature passes a law conferring jurisdiction on the Supreme Court to hear appeals in State municipal tax disputes.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 138 & List I Entry 77',
    governingPrecedentOrRule: 'Article 138 (Parliament Exclusive Power)',
    oneLineRatio: 'Only Parliament (not a State Legislature) can enlarge the jurisdiction of the Supreme Court under Article 138.',
    category: 'Judiciary & Writs'
  },
  {
    id: 'uv-79',
    situation: 'The Central Government directs a State Government under Article 256 to ensure compliance with Parliamentary laws relating to railway property protection.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Articles 256 & 257',
    governingPrecedentOrRule: 'Article 256 Administrative Relations',
    oneLineRatio: 'The Union executive has constitutional power under Arts 256-257 to issue directions to States to ensure compliance with Central laws and protect national infrastructure.',
    category: 'Federalism'
  },
  {
    id: 'uv-80',
    situation: 'The President invokes Article 356 in a State solely because the ruling party at the Centre won a landslide in the Lok Sabha elections.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 356',
    governingPrecedentOrRule: 'S.R. Bommai v. Union of India (1994)',
    oneLineRatio: 'Lok Sabha election results do not establish failure of State constitutional machinery; dissolving a State government on that ground is mala fide.',
    category: 'Executive & Emergency'
  },
  {
    id: 'uv-81',
    situation: 'A High Court orders a State Government to constitute a District Planning Committee under Article 243ZD after 10 years of inaction.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Article 243ZD',
    governingPrecedentOrRule: 'Article 243ZD Mandatory Constitutional Duty',
    oneLineRatio: 'Article 243ZD uses "shall be constituted in every State at the district level", creating a mandatory constitutional obligation enforceable by Mandamus.',
    category: 'Judiciary & Writs'
  },
  {
    id: 'uv-82',
    situation: 'A State Government appoints a District Judge directly from the Bar without consulting the High Court.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 233(1)-(2)',
    governingPrecedentOrRule: 'Chandra Mohan v. State of U.P. (1966) & Dheeraj Mor (2020)',
    oneLineRatio: 'Article 233 mandates effective consultation with/recommendation of the High Court for District Judge appointments to preserve judicial independence.',
    category: 'Judiciary & Writs'
  },
  {
    id: 'uv-83',
    situation: 'A retired Supreme Court Judge appears as an Advocate arguing a commercial appeal before a High Court.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 124(7)',
    governingPrecedentOrRule: 'Article 124(7) Absolute Practice Bar',
    oneLineRatio: 'A retired Supreme Court Judge is barred from pleading or acting in ANY court or before ANY authority within the territory of India.',
    category: 'Judiciary & Writs'
  },
  {
    id: 'uv-84',
    situation: 'A retired Permanent High Court Judge practices as a Senior Advocate before the Supreme Court and before a High Court other than the one where he served.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Article 220',
    governingPrecedentOrRule: 'Article 220 (7th Amendment)',
    oneLineRatio: 'Under Article 220, a retired permanent HC Judge cannot practice in the same HC or subordinate courts, but CAN practice before the Supreme Court and other High Courts.',
    category: 'Judiciary & Writs'
  },
  {
    id: 'uv-85',
    situation: 'The Lok Sabha passes a No-Confidence Motion against a single Union Minister (Health Minister) without expressing no-confidence in the Prime Minister.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 75(3)',
    governingPrecedentOrRule: 'Rule 198 Lok Sabha & Collective Responsibility',
    oneLineRatio: 'Under Article 75(3) collective responsibility, a No-Confidence Motion lies only against the ENTIRE Council of Ministers, not an individual minister.',
    category: 'Parliament & Elections'
  },
  {
    id: 'uv-86',
    situation: 'Parliament passes a law under Article 35 prescribing punishments for acts declared offences under Article 17 (Untouchability) and Article 23 (Forced Labour).',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Article 35(a)(ii)',
    governingPrecedentOrRule: 'Article 35 Exclusive Parliamentary Power',
    oneLineRatio: 'Article 35 grants Parliament (and denies State Legislatures) exclusive power to enact criminal laws enforcing Arts 17, 23, and 32(3).',
    category: 'Fundamental Rights'
  },
  {
    id: 'uv-87',
    situation: 'A State Legislature passes an Act prescribing 5 years\' imprisonment for practising untouchability under Article 17.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 35(a)(ii)',
    governingPrecedentOrRule: 'Article 35(a)(ii) Embargo on State Legislatures',
    oneLineRatio: 'Article 35 vests exclusive power in Parliament to prescribe punishments for Part III offences like Arts 17 and 23, divesting State Legislatures.',
    category: 'Federalism'
  },
  {
    id: 'uv-88',
    situation: 'A University established by a Central Act in 1920 claims Minority Institution status under Article 30(1) based on historical Muslim founding.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Article 30(1)',
    governingPrecedentOrRule: 'AMU v. Naresh Agarwal (2024, 7-Judge Bench)',
    oneLineRatio: 'Overruling Azeez Basha (1968), the 7-Judge Bench held statutory incorporation does not automatically forfeit Art 30(1) minority character if established by the minority.',
    category: 'Fundamental Rights'
  },
  {
    id: 'uv-89',
    situation: 'The Union Executive uses Article 253 to enact an environmental law implementing an international climate treaty even though part of the subject lies in State List.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Article 253',
    governingPrecedentOrRule: 'Article 253 Treaty Implementation Power',
    oneLineRatio: 'Article 253 gives Parliament plenary power to legislate on any subject (including State List) to implement international treaties and conventions.',
    category: 'Federalism'
  },
  {
    id: 'uv-90',
    situation: 'A State Government enacts a law taxing inter-state river water flowing through a central dam without Parliamentary sanction.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 262 & List I Entry 56',
    governingPrecedentOrRule: 'In re Cauvery Water Disputes Tribunal (1991)',
    oneLineRatio: 'No State can unilaterally appropriate or obstruct inter-state river waters to defeat a Parliamentary tribunal\'s award under Article 262.',
    category: 'Federalism'
  },
  {
    id: 'uv-91',
    situation: 'The President promulgates an Ordinance modifying a Fundamental Right during peacetime when Parliament is in recess.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Articles 13(3)(a) & 123',
    governingPrecedentOrRule: 'Article 13(2) & R.C. Cooper (1970)',
    oneLineRatio: 'An Ordinance under Art 123 is "law" under Art 13(3)(a) and is co-extensive with Parliament\'s legislative power; it cannot abridge Fundamental Rights.',
    category: 'Executive & Emergency'
  },
  {
    id: 'uv-92',
    situation: 'A High Court Chief Justice transfers a District Judge to a remote posting in the public interest after Full Court administrative deliberation.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Article 235',
    governingPrecedentOrRule: 'Article 235 Control over Subordinate Courts',
    oneLineRatio: 'Article 235 vests complete administrative control, posting, promotion, and discipline over District and subordinate judges in the High Court.',
    category: 'Judiciary & Writs'
  },
  {
    id: 'uv-93',
    situation: 'A State Legislature passes a resolution imposing a 1-year moratorium on High Court judges\' salaries during normal peacetime.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 221 & Article 360(4)(b)',
    governingPrecedentOrRule: 'Article 221(2) Proviso',
    oneLineRatio: 'Salaries and allowances of Judges cannot be varied to their disadvantage after appointment except during a Financial Emergency under Article 360.',
    category: 'Judiciary & Writs'
  },
  {
    id: 'uv-94',
    situation: 'A State Government imposes President\'s Rule recommendation because the Governor personally dislikes the Chief Minister\'s populist welfare budget.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 356',
    governingPrecedentOrRule: 'S.R. Bommai v. Union of India (1994)',
    oneLineRatio: 'Testing majority on the floor of the Assembly is the mandatory constitutional norm; subjective political dislike cannot justify Art 356.',
    category: 'Executive & Emergency'
  },
  {
    id: 'uv-95',
    situation: 'An accused is tried a second time for an identical theft offence after having been acquitted on merits in an earlier completed trial before a competent Magistrate.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Section 300 CrPC / Sec 337 BNSS (Autrefois Acquit)',
    governingPrecedentOrRule: 'Section 300 CrPC vs Article 20(2)',
    oneLineRatio: 'While Art 20(2) covers only autrefois convict, Section 300 CrPC / 337 BNSS bars retrial after both prior conviction AND prior acquittal.',
    category: 'Fundamental Rights'
  },
  {
    id: 'uv-96',
    situation: 'A State Government directs all primary schools in the State to provide mother-tongue instruction facilities to linguistic minority children.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Article 350A',
    governingPrecedentOrRule: 'Article 350A (7th Amendment, 1956)',
    oneLineRatio: 'Article 350A explicitly directs every State and local authority to provide mother-tongue primary instruction to linguistic minorities.',
    category: 'Fundamental Rights'
  },
  {
    id: 'uv-97',
    situation: 'Parliament passes a Constitutional Amendment removing Judicial Review and Free & Fair Elections from the Constitution.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 368 & Basic Structure',
    governingPrecedentOrRule: 'Kesavananda Bharati (1973) & Minerva Mills (1980)',
    oneLineRatio: 'Parliament\'s amending power under Art 368 is limited and cannot destroy Basic Structure pillars like Judicial Review and Democracy.',
    category: 'Judiciary & Writs'
  },
  {
    id: 'uv-98',
    situation: 'A Rajya Sabha MP switches political parties in violation of the party whip without a 2/3rds merger, and the Chairman disqualifies him under the Tenth Schedule.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Article 102(2) & Tenth Schedule',
    governingPrecedentOrRule: 'Tenth Schedule Para 2(1)(b) & 91st Amendment',
    oneLineRatio: 'Voting contrary to party whip without prior permission or 2/3rds merger triggers mandatory disqualification under the Tenth Schedule.',
    category: 'Parliament & Elections'
  },
  {
    id: 'uv-99',
    situation: 'A State Government establishes an autonomous District Council in Meghalaya with legislative powers over village forests and customary law.',
    verdict: 'INTRA_VIRES',
    primaryArticle: 'Article 244(2) & Sixth Schedule',
    governingPrecedentOrRule: 'Sixth Schedule (AMTM States)',
    oneLineRatio: 'Article 244(2) and the Sixth Schedule expressly empower Autonomous District Councils in Assam, Meghalaya, Tripura, and Mizoram.',
    category: 'Federalism'
  },
  {
    id: 'uv-100',
    situation: 'The Central Government passes an executive order declaring Hindi as the sole mandatory language for all Supreme Court judgments without Parliamentary legislation.',
    verdict: 'ULTRA_VIRES',
    primaryArticle: 'Article 348(1)',
    governingPrecedentOrRule: 'Article 348(1) Language of SC/HC',
    oneLineRatio: 'Article 348(1) mandates English for all Supreme Court proceedings and judgments until Parliament by law provides otherwise.',
    category: 'Judiciary & Writs'
  }
];

export function getRandomUltraViresQueue(count = 15): UltraViresScenario[] {
  const shuffled = [...ULTRA_VIRES_DECK].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
