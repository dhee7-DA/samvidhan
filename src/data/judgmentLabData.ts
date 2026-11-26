export interface JudicialProblem {
  id: string;
  type: 'Civil Judgment' | 'Criminal Judgment';
  title: string;
  examOrigin: string; // e.g. "DJS Mains 2023 / UP PCS-J Paper III"
  marksWeightage: number; // e.g. 40 or 50
  plaintOrChargesheetSummary: string;
  writtenStatementOrDefenseSummary: string;
  admittedFacts: string[];
  disputedFacts: string[];
  modelFramedIssuesOrCharges: {
    number: number;
    issueText: string;
    issueType: 'Issue of Fact' | 'Issue of Law' | 'Mixed Issue' | 'Formal Charge';
    burdenOfProof: string; // e.g. "Burden on Plaintiff (Section 101 Evidence Act)"
  }[];
  keyStatutes: string[];
  keyPrecedents: string[];
  modelJudgment: {
    courtTitle: string;
    caseNumber: string;
    parties: {
      plaintiffOrState: string;
      defendantOrAccused: string;
    };
    briefPleadings: string;
    marshallingOfEvidence: string;
    issueWiseFindings: {
      issueNumber: number;
      finding: string;
      reasoning: string;
    }[];
    operativeOrder: string;
  };
  scoringGuide: {
    dimension: string;
    marks: number;
    tips: string;
  }[];
}

export const JUDGMENT_LAB_DATA: JudicialProblem[] = [
  {
    id: 'judgment-civil-eviction-bonafide',
    type: 'Civil Judgment',
    title: 'Civil Suit for Eviction on Ground of Bona Fide Requirement & Arrears of Rent',
    examOrigin: 'Delhi Judicial Service (DJS) & UP PCS-J Past Benchmark',
    marksWeightage: 50,
    plaintOrChargesheetSummary:
      'Plaintiff is the absolute owner and landlord of commercial premises bearing Shop No. 4, Connaught Place, New Delhi, let out to the Defendant on a monthly tenancy at ₹15,000/- per month. Plaintiff seeks eviction on two grounds: (1) Willful default in payment of rent from January 2022 to December 2023 despite statutory notice of demand under Section 106 Transfer of Property Act; (2) Bona fide requirement under Delhi Rent Control law for his son who completed B.Com and intends to start a chartered consultancy firm. Plaintiff asserts he has no other reasonably suitable commercial accommodation in Delhi.',
    writtenStatementOrDefenseSummary:
      'Defendant admits the tenancy and monthly rent of ₹15,000/- but denies being in arrears. Defendant pleads that rent was tendered via post/bearer which the Plaintiff maliciously refused to accept to create a manufactured ground of default. Regarding bona fide requirement, Defendant asserts Plaintiff owns two vacant commercial shops in Karol Bagh and that the son is currently employed in a multinational consultancy at Gurugram, rendering the alleged requirement a mere pretense.',
    admittedFacts: [
      'Relationship of landlord and tenant between Plaintiff and Defendant.',
      'Rate of rent at ₹15,000/- per month.',
      'Receipt of statutory notice of termination dated 15.11.2023 under Section 106 T.P. Act.'
    ],
    disputedFacts: [
      'Whether the Defendant committed willful default in paying rent for 24 months.',
      'Whether Plaintiff requires the premises bona fide for starting a commercial venture for his son.',
      'Whether Plaintiff owns reasonably suitable alternative commercial accommodation in Karol Bagh.'
    ],
    modelFramedIssuesOrCharges: [
      {
        number: 1,
        issueText: 'Whether the Defendant has committed willful default in payment of legally recoverable arrears of rent from January 2022 to December 2023? (OPP)',
        issueType: 'Issue of Fact',
        burdenOfProof: 'Onus on Plaintiff (Section 101/102 Evidence Act / BSA)'
      },
      {
        number: 2,
        issueText: 'Whether the Plaintiff requires the suit premises bona fide for the commercial establishment of his unemployed dependant son? (OPP)',
        issueType: 'Issue of Fact',
        burdenOfProof: 'Onus on Plaintiff'
      },
      {
        number: 3,
        issueText: 'Whether the Plaintiff possesses suitable alternative commercial accommodation in Karol Bagh or elsewhere in NCT of Delhi? (OPD)',
        issueType: 'Issue of Fact',
        burdenOfProof: 'Onus on Defendant (Section 103/106 Evidence Act / BSA)'
      },
      {
        number: 4,
        issueText: 'Whether the statutory notice under Section 106 of the Transfer of Property Act, 1882 was validly issued and served? (OPP)',
        issueType: 'Issue of Law',
        burdenOfProof: 'Onus on Plaintiff'
      },
      {
        number: 5,
        issueText: 'Relief and costs?',
        issueType: 'Mixed Issue',
        burdenOfProof: 'Court determination'
      }
    ],
    keyStatutes: [
      'Delhi Rent Control Act, 1958 (Section 14(1)(a) & 14(1)(e))',
      'Transfer of Property Act, 1882 (Section 106)',
      'Bharatiya Sakshya Adhiniyam, 2023 / Indian Evidence Act, 1872 (Sections 101, 102, 106)'
    ],
    keyPrecedents: [
      'Satyawati Sharma v. Union of India ((2008) 5 SCC 287) - Commercial premises bona fide eviction',
      'Sarwan Dass Bange v. Ram Prakash ((2010) 167 DLT 80) - Landlord is the best judge of requirement',
      'Dattatraya Laxman Kamble v. Abdul Rasul Patel ((1999) 4 SCC 1) - Bona fide requirement'
    ],
    modelJudgment: {
      courtTitle: 'IN THE COURT OF SENIOR CIVIL JUDGE (CENTRAL), TIS HAZARI COURTS, DELHI',
      caseNumber: 'Civil Suit No. 412/2023',
      parties: {
        plaintiffOrState: 'Sh. Ramesh Chandra Gupta (Plaintiff)',
        defendantOrAccused: 'M/s National Traders through Sole Proprietor Sh. Anil Verma (Defendant)'
      },
      briefPleadings:
        'The Plaintiff has instituted the present suit for recovery of possession, arrears of rent amounting to ₹3,60,000/-, and mesne profits against the Defendant tenant in respect of Shop No. 4, Connaught Place, New Delhi. The tenancy was terminated vide legal notice dated 15.11.2023.',
      marshallingOfEvidence:
        'Plaintiff examined himself as PW-1 and tendered bank passbook (Ex. PW-1/1), notice with postal receipt and tracking report (Ex. PW-1/2 to PW-1/4), and Son\'s B.Com degree (Ex. PW-1/5). In cross-examination, PW-1 admitted the Karol Bagh property is owned by a partnership firm in which he has a 10% share and is occupied by long-term manufacturing tenants. Defendant examined himself as DW-1 but admitted in cross-examination that he neither sent a money order nor deposited rent in court under Section 27 DRC Act upon the alleged refusal.',
      issueWiseFindings: [
        {
          issueNumber: 1,
          finding: 'Decided in favour of the Plaintiff.',
          reasoning:
            'Tenant who alleges tender and refusal of rent must prove valid tender through banking channels or money order, followed by statutory deposit under Section 27. Oral assertion without bank or postal deposit cannot substantiate plea of tender. Default is established.'
        },
        {
          issueNumber: 2,
          finding: 'Decided in favour of the Plaintiff.',
          reasoning:
            'It is well settled that the landlord is the sole arbiter of his domestic and commercial needs. The son has an educational qualification and desires to commence business. The tenant cannot dictate that the landlord\'s son must continue private employment or seek alternatives (Sarwan Dass Bange, 2010).'
        },
        {
          issueNumber: 3,
          finding: 'Decided in favour of the Plaintiff and against Defendant.',
          reasoning:
            'The burden of proving alternative accommodation lay upon the Defendant. DW-1 failed to produce title deeds or municipal tax receipts showing exclusive vacant possession by the Plaintiff in Karol Bagh.'
        },
        {
          issueNumber: 4,
          finding: 'Decided in favour of the Plaintiff.',
          reasoning:
            'Notice dispatched to correct tenanted address by registered post with signed AD card fulfills the statutory presumption under Section 27 General Clauses Act and Section 106 T.P. Act.'
        }
      ],
      operativeOrder:
        'Decree for eviction is hereby passed in favour of the Plaintiff and against the Defendant. Defendant is granted two months to vacate and hand over vacant peaceful physical possession of Shop No. 4, Connaught Place, New Delhi. Decree for recovery of arrears of rent ₹3,60,000/- with interest @ 6% p.a. is also passed in favour of Plaintiff. Costs awarded.'
    },
    scoringGuide: [
      { dimension: 'Formulation of Issues (Order XIV CPC)', marks: 10, tips: 'Place proper onus (OPP/OPD). Don\'t combine distinct causes of action into one issue.' },
      { dimension: 'Marshalling of Oral & Documentary Evidence', marks: 15, tips: 'Critique testimony of PW-1 vs DW-1. Cite specific exhibits (Ex. PW-1/1).' },
      { dimension: 'Statutory Application & Landmark Precedents', marks: 15, tips: 'Apply Satyawati Sharma and Sarwan Dass Bange on landlord supremacy of choice.' },
      { dimension: 'Operative Decree & Relief Clause', marks: 10, tips: 'Clear direction on time for handover (2 months), interest rates, and signature format.' }
    ]
  },
  {
    id: 'judgment-criminal-murder-circumstantial',
    type: 'Criminal Judgment',
    title: 'Trial for Offence of Murder under Section 302 IPC / Section 103 BNS: Circumstantial Evidence & Last Seen Theory',
    examOrigin: 'UP PCS-J Mains & MP Judiciary Benchmark',
    marksWeightage: 50,
    plaintOrChargesheetSummary:
      'The State through PS Civil Lines, Prayagraj filed a chargesheet against accused Suresh under Section 302 IPC (Sec 103(1) BNS) for the murder of deceased Vijay. The prosecution case is founded on circumstantial evidence: (1) Last Seen Theory: PW-2 saw the deceased boarding the accused\'s motorcycle on the evening of 10.03.2023; (2) Motive: Accused owed ₹5,00,000/- to deceased which he refused to repay; (3) Recovery: On 12.03.2023, pursuant to disclosure under Section 27 Evidence Act (Sec 23 BSA), the blood-stained weapon (iron rod) and deceased\'s mobile phone were recovered from a culvert at the instance of the accused; (4) FSL Report confirming human blood of Group \'B\' matching the deceased.',
    writtenStatementOrDefenseSummary:
      'Accused pleaded not guilty and claimed false implication by village rivals. Under Section 313 CrPC (Sec 351 BNSS), accused stated that he was at his shop in Naini the entire evening and that the recovery was planted by police from an open, accessible public place.',
    admittedFacts: [
      'Homicidal death of deceased Vijay caused by ante-mortem craniocerebral damage due to heavy blunt force.',
      'Post-mortem examination conducted by PW-1 Medical Officer.'
    ],
    disputedFacts: [
      'Whether the deceased was last seen alive in the exclusive company of the accused proximate to time of death.',
      'Whether the recovery of the iron rod and mobile phone satisfies Section 27 Evidence Act / Section 23 BSA.',
      'Whether the chain of circumstantial evidence is complete and inconsistent with the innocence of the accused.'
    ],
    modelFramedIssuesOrCharges: [
      {
        number: 1,
        issueText:
          'CHARGE: That you, on or about the 10th day of March, 2023, between 8:00 PM and 10:00 PM at Forest Road, Prayagraj, did commit murder by intentionally or knowingly causing the death of Vijay by striking his head with an iron rod, and thereby committed an offence punishable under Section 302 IPC (Section 103(1) BNS), within the cognizance of this Court of Session.',
        issueType: 'Formal Charge',
        burdenOfProof: 'Prosecution must prove guilt beyond all reasonable doubt'
      }
    ],
    keyStatutes: [
      'Indian Penal Code, 1860 (Section 300, 302) / Bharatiya Nyaya Sanhita, 2023 (Section 103)',
      'Indian Evidence Act, 1872 (Section 8 Motive, Section 27 Discovery, Section 106) / BSA 2023',
      'Code of Criminal Procedure, 1973 (Section 211, 235, 313) / BNSS 2023'
    ],
    keyPrecedents: [
      'Sharad Birdhichand Sarda v. State of Maharashtra ((1984) 4 SCC 116) - 5 Golden Principles (Panchsheel) of circumstantial evidence',
      'Bodhella Ramkunwar v. State of M.P. ((2005) 5 SCC 249) - Last Seen Theory limitations',
      'Pulukuri Kottaya v. King-Emperor (AIR 1947 PC 67) - Section 27 discovery parameters'
    ],
    modelJudgment: {
      courtTitle: 'IN THE COURT OF SESSIONS JUDGE, PRAYAGRAJ, UTTAR PRADESH',
      caseNumber: 'Sessions Trial No. 188/2023',
      parties: {
        plaintiffOrState: 'State of Uttar Pradesh (Prosecution)',
        defendantOrAccused: 'Suresh s/o Ram Lal (Accused)'
      },
      briefPleadings:
        'The accused stands charged for committing the murder of Vijay on 10.03.2023 by inflicting fatal craniocerebral injuries with an iron rod. The prosecution examined 8 witnesses. Post-mortem report (Ex. P-1) proves homicidal death.',
      marshallingOfEvidence:
        'PW-2 is the last-seen witness who saw the deceased ride pillion with accused at 7:30 PM. Medical evidence establishes death occurred between 8:30 PM and 10:00 PM (gap of only 1-2 hours). Accused offered no explanation under Section 313 CrPC regarding when he parted company (Section 106 Evidence Act). PW-4 independent panch witness proved recovery of blood-stained rod and deceased\'s phone from concealed culvert pursuant to disclosure (Ex. P-8). FSL Report (Ex. P-12) confirmed blood group \'B\' matching deceased on rod.',
      issueWiseFindings: [
        {
          issueNumber: 1,
          finding: 'Accused found GUILTY under Section 302 IPC / Section 103(1) BNS.',
          reasoning:
            'Applying the five golden principles of Sharad Birdhichand Sarda: (1) Motive established through bank debit slips (Ex. P-5); (2) Proximity of last seen with death shifts burden under Sec 106; (3) Recovery of weapon and victim\'s personal belongings from concealed spot known exclusively to accused under Sec 27; (4) Biological corroboration by FSL. The chain of circumstances is complete and incompatible with any hypothesis of innocence.'
        }
      ],
      operativeOrder:
        'The accused Suresh is hereby CONVICTED for the offence punishable under Section 302 IPC. Heard on question of sentence. The case does not fall within the "rarest of rare" category (Bachan Singh). Accused is sentenced to rigorous imprisonment for LIFE and to pay a fine of ₹25,000/-, in default of payment of fine to undergo further rigorous imprisonment for 6 months. Benefit of set-off under Section 428 CrPC granted. Weapon confiscated.'
    },
    scoringGuide: [
      { dimension: 'Formulation of Criminal Charge (Sec 211 CrPC)', marks: 10, tips: 'Specify name of victim, date, time, weapon, and exact penal clause.' },
      { dimension: 'Application of Circumstantial Evidence Panchsheel', marks: 15, tips: 'Must cite Sharad Birdhichand Sarda (1984) and link every link in the chain.' },
      { dimension: 'Section 27 Evidence Act & Section 106 Analysis', marks: 15, tips: 'Analyze Pulukuri Kottaya: Fact discovered vs confession.' },
      { dimension: 'Separate Sentencing Hearing & Operative Order', marks: 10, tips: 'Must demonstrate hearing on sentence (Sec 235(2) CrPC) before pronouncing life imprisonment.' }
    ]
  },
  {
    id: 'judgment-civil-specific-performance',
    type: 'Civil Judgment',
    title: 'Civil Suit for Specific Performance of Agreement to Sell Immovable Property',
    examOrigin: 'Delhi Judicial Service (DJS) & MP Higher Judicial Service',
    marksWeightage: 40,
    plaintOrChargesheetSummary:
      'Plaintiff instituted suit for Specific Performance of registered Agreement to Sell dated 12.01.2022 in respect of residential plot in Rohini, Delhi. Total sale consideration was ₹60,00,000/-, of which ₹15,00,000/- was paid as earnest money. The balance ₹45,00,000/- was payable at the time of execution of sale deed on or before 12.07.2022. Plaintiff asserts he appeared before the Sub-Registrar on 12.07.2022 with a demand draft of ₹45,00,000/-, marked his attendance, and issued legal notice, but Defendant failed to execute the deed due to rising market rates.',
    writtenStatementOrDefenseSummary:
      'Defendant admits the agreement and earnest money of ₹15,00,000/-. However, Defendant contends that time was of the essence of the contract and that Plaintiff failed to produce bank statements proving he possessed the balance ₹45,00,000/- prior to the last date. Defendant claims Plaintiff\'s financial incapacity breached Section 16(c) of the Specific Relief Act.',
    admittedFacts: [
      'Execution of registered Agreement to Sell dated 12.01.2022.',
      'Receipt of ₹15,00,000/- earnest money by the Defendant.'
    ],
    disputedFacts: [
      'Whether time was the essence of the contract.',
      'Whether Plaintiff was ready and willing to perform his part of the contract throughout under Section 16(c).',
      'Whether Defendant is liable to execute the sale deed or forfeit the earnest money.'
    ],
    modelFramedIssuesOrCharges: [
      {
        number: 1,
        issueText: 'Whether time was the essence of the contract in the Agreement to Sell dated 12.01.2022? (OPD)',
        issueType: 'Issue of Law',
        burdenOfProof: 'Onus on Defendant'
      },
      {
        number: 2,
        issueText: 'Whether the Plaintiff has been continuously ready and willing to perform his essential obligations under the contract as mandated by Section 16(c) of the Specific Relief Act, 1963? (OPP)',
        issueType: 'Issue of Fact',
        burdenOfProof: 'Onus on Plaintiff'
      },
      {
        number: 3,
        issueText: 'Whether the Plaintiff is entitled to a decree of Specific Performance, or in the alternative, refund of earnest money with interest? (OPP)',
        issueType: 'Mixed Issue',
        burdenOfProof: 'Onus on Plaintiff'
      },
      {
        number: 4,
        issueText: 'Relief and costs?',
        issueType: 'Mixed Issue',
        burdenOfProof: 'Court determination'
      }
    ],
    keyStatutes: [
      'Specific Relief Act, 1963 (Section 10, 16(c), 20 post-2018 Amendment)',
      'Indian Contract Act, 1872 (Section 55 - Time as essence)'
    ],
    keyPrecedents: [
      'Chand Rani v. Kamal Rani ((1993) 1 SCC 519, Constitution Bench) - In sale of immovable property, time is presumed not to be of the essence',
      'Syed Dhasthageer v. T.R. Gopalakrishnan Chetty ((2000) 1 SCC 579) - Substantive readiness vs mechanical language',
      'Sughar Singh v. Hari Singh (2021 SCC OnLine SC 975) - Post-2018 amendment specific performance is mandatory, not discretionary'
    ],
    modelJudgment: {
      courtTitle: 'IN THE COURT OF ADDITIONAL DISTRICT JUDGE, NORTH DISTRICT, ROHINI COURTS, DELHI',
      caseNumber: 'Civil Suit No. 89/2022',
      parties: {
        plaintiffOrState: 'Sh. Rajesh Khanna (Plaintiff)',
        defendantOrAccused: 'Sh. Surender Pal Singh (Defendant)'
      },
      briefPleadings:
        'Suit for Specific Performance of registered Agreement to Sell dated 12.01.2022 for residential plot measuring 200 sq. yards in Sector 15, Rohini, Delhi.',
      marshallingOfEvidence:
        'PW-1 proved bank statement showing fixed deposit of ₹50 Lakhs encashable on demand, and certified slip from Sub-Registrar\'s office recording physical presence with Demand Draft on 12.07.2022. DW-1 admitted in cross-examination that he did not attend Sub-Registrar\'s office on the stipulated date.',
      issueWiseFindings: [
        {
          issueNumber: 1,
          finding: 'Decided in favour of Plaintiff.',
          reasoning:
            'Constitution Bench in Chand Rani settled that in contracts relating to immovable property, time is normally not of the essence unless expressly stipulated with severe forfeiture clauses. Merely fixing a date does not make time the essence.'
        },
        {
          issueNumber: 2,
          finding: 'Decided in favour of Plaintiff.',
          reasoning:
            'Section 16(c) readiness (financial capacity) and willingness (mental intention) proved continuously. The Plaintiff held liquid funds and marked attendance with draft.'
        },
        {
          issueNumber: 3,
          finding: 'Decided in favour of Plaintiff.',
          reasoning:
            'Following the Specific Relief (Amendment) Act, 2018, Section 10 replaces discretionary relief with mandatory specific performance where statutory conditions are fulfilled.'
        }
      ],
      operativeOrder:
        'Suit decreed with costs. Defendant is directed to execute the registered Sale Deed in favour of the Plaintiff within 45 days upon receiving the balance consideration of ₹45,00,000/- deposited in Court. If Defendant fails, the Court Registrar shall execute the conveyance.'
    },
    scoringGuide: [
      { dimension: 'Framing of Section 16(c) Readiness and Willingness Issue', marks: 10, tips: 'Must use words "ready and willing continuously".' },
      { dimension: 'Chand Rani Constitution Bench Doctrine on Time as Essence', marks: 10, tips: 'Explain why real estate presumption is against time being essence.' },
      { dimension: '2018 Specific Relief Amendment (Mandatory Specific Performance)', marks: 10, tips: 'Cite Section 10 amendment taking away court\'s discretion.' },
      { dimension: 'Conveyance Decree Clause', marks: 10, tips: 'Provide default mechanism (Court Commissioner executes deed if defendant defaults).' }
    ]
  },
  {
    id: 'judgment-civil-art226-vs-227-injunction',
    type: 'Civil Judgment',
    title: 'High Court Bench Order: Maintainability Under Article 226 vs 227 Against Civil Court Injunction Order',
    examOrigin: 'Higher Judicial Service (HJS / DJS) Constitutional & CPC Bench Paper',
    marksWeightage: 50,
    plaintOrChargesheetSummary:
      'Petitioner-Defendant filed a Writ Petition styled under Article 226 of the Constitution before the High Court challenging an interlocutory order passed by the Civil Judge (Senior Division) rejecting an application for temporary injunction under Order XXXIX Rules 1 & 2 CPC in a pending title suit. Petitioner contends the Civil Judge ignored registered revenue records and committed a manifest error of law.',
    writtenStatementOrDefenseSummary:
      'Respondent-Plaintiff raises a preliminary objection to maintainability: (1) A judicial order passed by a Civil Court is NOT amenable to a Writ of Certiorari under Article 226 in view of Radhey Shyam v. Chhabi Nath (2015); (2) Even under Article 227, supervisory jurisdiction should not be invoked when an efficacious statutory appeal lies under Order XLIII Rule 1(r) CPC.',
    admittedFacts: [
      'Impugned order was passed judicially by a regular Civil Court (Civil Judge, Senior Division) under Order XXXIX Rules 1 & 2 CPC.',
      'The petition before the High Court is filed expressly invoking Article 226 writ jurisdiction.',
      'No statutory Miscellaneous Civil Appeal under Order XLIII Rule 1(r) CPC was filed before the District Judge.'
    ],
    disputedFacts: [
      'Whether a Writ of Certiorari under Article 226 is maintainable against a judicial order of a Civil Court.',
      'Whether extraordinary supervisory jurisdiction under Article 227 should be exercised bypassing the statutory appeal under Order XLIII Rule 1(r) CPC.'
    ],
    modelFramedIssuesOrCharges: [
      {
        number: 1,
        issueText: 'Whether a Writ Petition under Article 226 of the Constitution is maintainable against an interlocutory judicial order passed by a Civil Court under Order XXXIX Rules 1 & 2 CPC?',
        issueType: 'Issue of Law',
        burdenOfProof: 'Burden on Petitioner to establish Constitutional Maintainability'
      },
      {
        number: 2,
        issueText: 'Whether, in the alternative, the High Court ought to exercise supervisory jurisdiction under Article 227 despite the availability of an alternative statutory appeal under Order XLIII Rule 1(r) read with Section 104 CPC?',
        issueType: 'Issue of Law',
        burdenOfProof: 'Burden on Petitioner to show exceptional jurisdictional error / lack of alternative remedy'
      }
    ],
    keyStatutes: [
      'Constitution of India — Articles 226 & 227',
      'Code of Civil Procedure, 1908 — Order XXXIX Rules 1 & 2, Order XLIII Rule 1(r), Section 104'
    ],
    keyPrecedents: [
      'Radhey Shyam v. Chhabi Nath, (2015) 5 SCC 423 (overruling Surya Dev Rai on Art 226)',
      'Shalini Shyam Shetty v. Rajendra Shankar Patil, (2010) 8 SCC 329 (scope of Art 227)',
      'Virudhunagar Hindu Nadargal Dharma Paribalana Sabai v. Tuticorin Educational Society, (2019) 9 SCC 538 (CPC appellate remedy bars Art 227)'
    ],
    modelJudgment: {
      courtTitle: 'IN THE HIGH COURT OF JUDICATURE AT NEW DELHI (CIVIL EXTRAORDINARY JURISDICTION)',
      caseNumber: 'W.P.(C) No. 1408 of 2025',
      parties: {
        plaintiffOrState: 'M/s Aakash Infrastructure Pvt. Ltd. (Petitioner)',
        defendantOrAccused: 'Raghavendra & Ors. (Respondents)'
      },
      briefPleadings:
        'Challenge under Article 226 to an interlocutory order dated 04.01.2025 passed by the Civil Judge (Senior Division) refusing ad-interim injunction under Order XXXIX Rules 1 & 2 CPC.',
      marshallingOfEvidence:
        'Perusal of the certified copy of the impugned order confirms it is a reasoned judicial order passed in a pending civil suit after hearing both sides. No exceptional patent lack of jurisdiction is shown on the face of the record.',
      issueWiseFindings: [
        {
          issueNumber: 1,
          finding: 'Decided against Petitioner. Petition under Article 226 is NOT maintainable.',
          reasoning:
            'The 3-Judge Bench in Radhey Shyam v. Chhabi Nath (2015) expressly overruled Surya Dev Rai and settled that judicial orders of Civil Courts are not amenable to a writ of certiorari under Article 226. Civil Courts are not "inferior tribunals" or executive authorities amenable to writ certiorari.'
        },
        {
          issueNumber: 2,
          finding: 'Decided against Petitioner. Supervisory power under Article 227 declined.',
          reasoning:
            'Under Order XLIII Rule 1(r) CPC, an appealable remedy lies before the District Judge. As held in Virudhunagar Hindu Nadargal (2019) and Shalini Shyam Shetty (2010), when the CPC provides a specific statutory appellate remedy, High Courts must refrain from exercising supervisory jurisdiction under Article 227 unless there is a total lack of jurisdiction.'
        }
      ],
      operativeOrder:
        'Preliminary objection upheld. The Writ Petition is dismissed as not maintainable with liberty to the Petitioner to prefer an appeal under Order XLIII Rule 1(r) CPC before the competent District Court within 30 days. No order as to costs.'
    },
    scoringGuide: [
      { dimension: 'Applying Radhey Shyam v. Chhabi Nath (Art 226 vs 227)', marks: 15, tips: 'Clearly state Surya Dev Rai is overruled and explain why Civil Court orders are not amenable to Art 226.' },
      { dimension: 'Alternative Statutory Remedy (Order XLIII Rule 1(r) CPC)', marks: 15, tips: 'Cite Order XLIII Rule 1(r) + Virudhunagar rule restraining Art 227 interference.' },
      { dimension: 'Issue Framing & Liberty Clause in Operative Order', marks: 10, tips: 'Dismiss on maintainability while granting liberty to file statutory appeal with limitation protection.' },
      { dimension: 'Judicial Structure & Concise Tone', marks: 10, tips: 'Avoid merits adjudication once preliminary maintainability bar succeeds.' }
    ]
  },
  {
    id: 'judgment-criminal-art20-22-remand-safeguards',
    type: 'Criminal Judgment',
    title: 'Magistrate Remand Order: Written Grounds of Arrest (Art 22(1)) & Compelled Device Passcode (Art 20(3))',
    examOrigin: 'DJS / UP PCS-J Criminal Procedure & Constitutional Safeguards Benchmark',
    marksWeightage: 50,
    plaintOrChargesheetSummary:
      'Investigating Officer produces Accused X before the Judicial Magistrate seeking 7 days Police Custody Remand in an economic offences FIR (punishable up to 7 years). IO also moves an application seeking a judicial direction compelling the accused to disclose his smartphone biometric/alphanumeric passcode and give a voice sample. Case diary shows no written "grounds of arrest" were handed to the accused; only a printed arrest memo listing FIR sections was signed.',
    writtenStatementOrDefenseSummary:
      'Defence Counsel opposes remand and the device-unlocking application on two constitutional grounds: (1) Under Prabir Purkayastha (2024) and Article 22(1), failure to furnish written grounds of arrest vitiates both arrest and remand; (2) Compelling disclosure of a device passcode violates the protection against self-incrimination under Article 20(3) (Selvi v. State of Karnataka), though voice sample per Ritesh Sinha (2019) stands on a distinct footing.',
    admittedFacts: [
      'Accused X was arrested on 10.02.2025 and produced within 24 hours under Article 22(2).',
      'Only a standard Arrest Memo mentioning FIR number and penal sections was served; no separate written "grounds of arrest" document was supplied.',
      'IO seeks compelled disclosure of smartphone passcode and a voice exemplar.'
    ],
    disputedFacts: [
      'Whether failure to supply written grounds of arrest renders the arrest and remand prayer invalid under Article 22(1).',
      'Whether a Magistrate can compel an accused to reveal a testimonial smartphone passcode under Article 20(3), as distinguished from a physical voice sample.'
    ],
    modelFramedIssuesOrCharges: [
      {
        number: 1,
        issueText: 'Whether the arrest and prayer for Police Custody Remand are vitiated for non-supply of written "grounds of arrest" in violation of Article 22(1) and BNSS / CrPC safeguards?',
        issueType: 'Issue of Law',
        burdenOfProof: 'Burden on Prosecution / IO to prove strict Article 22(1) compliance'
      },
      {
        number: 2,
        issueText: 'Whether compelling the accused to disclose an alphanumeric smartphone passcode violates Article 20(3) (self-incrimination), and how it differs from taking a voice sample?',
        issueType: 'Issue of Law',
        burdenOfProof: 'Constitutional Bar under Article 20(3) examined by Court'
      }
    ],
    keyStatutes: [
      'Constitution of India — Articles 20(3), 21 & 22(1)–(2)',
      'Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 — Sections 35, 47, 187 (corresponding to Sections 41, 50, 167 CrPC)'
    ],
    keyPrecedents: [
      'Prabir Purkayastha v. State (NCT of Delhi), (2024) 8 SCC 254 (mandatory written grounds of arrest)',
      'Arnesh Kumar v. State of Bihar, (2014) 8 SCC 273 (no mechanical arrest/remand for <= 7 yr offences)',
      'Selvi v. State of Karnataka, (2010) 7 SCC 263 (mental/testimonial compulsion barred under Art 20(3))',
      'Ritesh Sinha v. State of Uttar Pradesh, (2019) 8 SCC 1 (voice sample permitted as physical exemplar)'
    ],
    modelJudgment: {
      courtTitle: 'IN THE COURT OF THE JUDICIAL MAGISTRATE FIRST CLASS, PATIALA HOUSE, NEW DELHI',
      caseNumber: 'FIR No. 88/2025 · Remand & Misc. Application',
      parties: {
        plaintiffOrState: 'State (Through Economic Offences Wing)',
        defendantOrAccused: 'Accused X'
      },
      briefPleadings:
        'IO seeks 7-day Police Custody Remand along with directions to unlock seized smartphone and obtain voice exemplar.',
      marshallingOfEvidence:
        'Case diary and arrest memo examined in open Court. The arrest memo merely reproduces statutory sections without any factual "grounds of arrest" communicated in writing to the accused or his counsel.',
      issueWiseFindings: [
        {
          issueNumber: 1,
          finding: 'Decided in favour of Accused. Remand prayer rejected for breach of Article 22(1).',
          reasoning:
            'In Prabir Purkayastha (2024), the Supreme Court held that "grounds of arrest" must be furnished in writing to the accused to enable meaningful legal consultation under Article 22(1). Mere "reasons for arrest" or FIR numbers in an arrest memo do not satisfy this constitutional mandate, and further Arnesh Kumar guidelines apply to offences punishable up to 7 years.'
        },
        {
          issueNumber: 2,
          finding: 'Passcode compulsion refused under Art 20(3); Voice exemplar stands on separate statutory footing.',
          reasoning:
            'Revealing a secret password stored solely in the accused\'s mind constitutes testimonial compulsion barred by Article 20(3) and Selvi (2010), whereas a physical voice sample is non-testimonial identification permissible under Ritesh Sinha (2019) — though moot here since arrest itself stands vitiated.'
        }
      ],
      operativeOrder:
        'Application for Police Custody Remand is dismissed; arrest is declared illegal for non-compliance with Article 22(1). Accused X is directed to be released forthwith on furnishing personal bond of ₹25,000/-, without prejudice to lawful investigation. Application for compelled passcode disclosure is dismissed.'
    },
    scoringGuide: [
      { dimension: 'Prabir Purkayastha (2024) Distinction: Grounds vs Reasons of Arrest', marks: 15, tips: 'Explain why written factual grounds are mandatory under Art 22(1) across all penal laws.' },
      { dimension: 'Arnesh Kumar & Anti-Mechanical Remand Duty of Magistrate', marks: 10, tips: 'Record independent judicial scrutiny of case diary for <= 7 year offences.' },
      { dimension: 'Article 20(3) Passcode (Selvi) vs Voice Sample (Ritesh Sinha)', marks: 15, tips: 'Contrast mental testimonial knowledge vs physical identification exemplar.' },
      { dimension: 'Operative Release Order & Bond', marks: 10, tips: 'Ensure unlawful custody ends immediately while preserving lawful investigation.' }
    ]
  },
  {
    id: 'judgment-criminal-default-bail-art21',
    type: 'Criminal Judgment',
    title: 'Indefeasible Right to Default Bail under Art 21 & Incomplete Chargesheet',
    examOrigin: 'DJS / RJS / MPJS Criminal Bench Benchmark',
    marksWeightage: 40,
    plaintOrChargesheetSummary:
      'Accused A was arrested on 01.01.2024 for offences under Sections 420/467/468/120B IPC (punishable up to life imprisonment; 90-day statutory investigation period). On the 89th day, the Investigating Officer filed a 4-page "preliminary chargesheet" without forensic handwriting reports or sanction, explicitly stating "investigation is continuing under Section 173(8) CrPC". On the 92nd day, Accused A moved an application for Statutory/Default Bail under Section 167(2) CrPC (Section 187(3) BNSS), offering to furnish solvent sureties.',
    writtenStatementOrDefenseSummary:
      'The Public Prosecutor opposed Default Bail contending that: (1) a chargesheet was already filed on the 89th day before the 90-day period expired; (2) supplementary investigation under Section 173(8) CrPC is statutorily permitted and does not render the initial report incomplete; and (3) Accused A filed no bail application on the 91st day.',
    admittedFacts: [
      'Accused A was remanded to custody on 01.01.2024; 90 days expired on 31.03.2024.',
      'Investigating Officer filed a partial report on 29.03.2024 noting that CFSL report and core witness statements were still awaited.',
      'Accused A filed the Section 167(2) default bail application on 02.04.2024 (92nd day).'
    ],
    disputedFacts: [
      'Whether filing a piecemeal/preliminary chargesheet solely to defeat the 90-day clock extinguishes the indefeasible right to default bail.'
    ],
    modelFramedIssuesOrCharges: [
      {
        number: 1,
        issueText: 'Whether an incomplete/preliminary chargesheet filed without completing material investigation defeats the accused\'s indefeasible right to Default Bail under Article 21 and Section 167(2) CrPC?',
        issueType: 'Issue of Law',
        burdenOfProof: 'Statutory & Constitutional Duty on Court / Prosecution'
      },
      {
        number: 2,
        issueText: 'Whether the Magistrate is bound to grant bail once the accused applies before a complete police report is filed?',
        issueType: 'Mixed Issue',
        burdenOfProof: 'Burden on Prosecution to show complete investigation within 90 days'
      }
    ],
    keyStatutes: [
      'Article 21, Constitution of India',
      'Section 167(2) & Section 173(2)/(8) CrPC (Section 187(3) & 193 BNSS)'
    ],
    keyPrecedents: [
      'Ritu Chhabaria v. Union of India (2023)',
      'M. Ravindran v. Intelligence Officer, DRI (2020)',
      'Uday Mohanlal Acharya v. State of Maharashtra (2001)'
    ],
    modelJudgment: {
      courtTitle: 'IN THE COURT OF THE CHIEF JUDICIAL MAGISTRATE',
      caseNumber: 'Bail Application No. 114 of 2024',
      parties: { plaintiffOrState: 'State', defendantOrAccused: 'Accused A' },
      briefPleadings: 'Application under Section 167(2) CrPC seeking statutory default bail after expiry of 90 days.',
      marshallingOfEvidence: 'Case diary dated 29.03.2024 shows neither specimen signatures nor CFSL report were collected, and the IO explicitly sought time to complete basic investigation.',
      issueWiseFindings: [
        {
          issueNumber: 1,
          finding: 'Decided in favour of Accused A.',
          reasoning: 'In Ritu Chhabaria (2023) and M. Ravindran (2020), the Supreme Court held that default bail under Section 167(2) is an integral facet of personal liberty under Article 21. Investigating agencies cannot file an incomplete/piecemeal chargesheet as a ruse merely to frustrate the 60/90-day statutory clock.'
        },
        {
          issueNumber: 2,
          finding: 'Right crystallized on 02.04.2024 upon filing bail application.',
          reasoning: 'Since no complete police report under Section 173(2) had been filed on the date Accused A availed his right by applying and offering bail, his right became indefeasible under Uday Mohanlal Acharya (2001).'
        }
      ],
      operativeOrder: 'Default Bail application is allowed. Accused A shall be released on furnishing bail bond of ₹50,000/- with one solvent surety of like amount, subject to cooperating with further investigation.'
    },
    scoringGuide: [
      { dimension: 'Linkage of Section 167(2) Default Bail to Article 21', marks: 15, tips: 'Cite M. Ravindran (2020) and Ritu Chhabaria (2023) on ruse chargesheets.' },
      { dimension: 'Crystallization of Indefeasible Right', marks: 15, tips: 'Apply Uday Mohanlal Acharya: right accrues on expiry + availing by application.' },
      { dimension: 'Operative Bail Conditions', marks: 10, tips: 'Impose reasonable bond without turning statutory bail into punitive detention.' }
    ]
  },
  {
    id: 'judgment-civil-art311-dismissal-inquiry',
    type: 'Civil Judgment',
    title: 'Civil Suit / Writ Challenge to Dismissal of Civil Servant without Inquiry under Art 311(2)(b)',
    examOrigin: 'UP HJS / DJS Service & Constitutional Law Benchmark',
    marksWeightage: 40,
    plaintOrChargesheetSummary:
      'Plaintiff, a confirmed Sub-Inspector of Police, was dismissed from service by the Superintendent of Police without holding any departmental inquiry, invoking Proviso (b) to Article 311(2) of the Constitution. The dismissal order merely stated: "Given the serious nature of bribery allegations, holding a regular departmental inquiry is not reasonably practicable."',
    writtenStatementOrDefenseSummary:
      'The State contended that Article 311(2) second proviso clause (b) confers subjective satisfaction on the disciplinary authority, which is final under Article 311(3), and that witnesses would be intimidated by a police officer if an inquiry were held.',
    admittedFacts: [
      'Plaintiff held a permanent civil post under the State.',
      'No charge-memo, show-cause notice, or oral inquiry was conducted prior to dismissal.',
      'The impugned order contained only a single bald sentence citing "seriousness of allegations".'
    ],
    disputedFacts: [
      'Whether the disciplinary authority validly dispensed with the inquiry under Article 311(2)(b) with objective recorded reasons.'
    ],
    modelFramedIssuesOrCharges: [
      {
        number: 1,
        issueText: 'Whether the impugned dismissal order violates Article 311(2) for want of objective, contemporaneous reasons under Proviso (b)?',
        issueType: 'Issue of Law',
        burdenOfProof: 'Burden on State/Disciplinary Authority (Union of India v. Tulsiram Patel)'
      },
      {
        number: 2,
        issueText: 'Whether Article 311(3) finality bars judicial review of mala fide or arbitrary dispensation of inquiry?',
        issueType: 'Issue of Law',
        burdenOfProof: 'Legal Issue'
      }
    ],
    keyStatutes: ['Article 311(2) & 311(3), Constitution of India', 'Article 14, Constitution of India'],
    keyPrecedents: ['Union of India v. Tulsiram Patel (1985)', 'Jaswant Singh v. State of Punjab (1991)'],
    modelJudgment: {
      courtTitle: 'IN THE COURT OF THE CIVIL JUDGE (SENIOR DIVISION)',
      caseNumber: 'Civil Suit No. 88 of 2024',
      parties: { plaintiffOrState: 'Sub-Inspector X (Plaintiff)', defendantOrAccused: 'State & Superintendent of Police' },
      briefPleadings: 'Suit for declaration that dismissal order dated 10.02.2024 is null, void, and violative of Article 311(2).',
      marshallingOfEvidence: 'DW-1 (SP) admitted in cross-examination that no witness had complained of intimidation and no separate reasons were recorded in the official file.',
      issueWiseFindings: [
        {
          issueNumber: 1,
          finding: 'Decided in favour of Plaintiff.',
          reasoning: 'In Tulsiram Patel (1985) and Jaswant Singh (1991), the Supreme Court held that dispensing with an inquiry under Art 311(2)(b) cannot rest on the ipse dixit of the authority. Seriousness of allegation is never a ground to bypass inquiry; objective reasons showing impossibility/impracticability must exist on record.'
        },
        {
          issueNumber: 2,
          finding: 'Judicial review is available despite Art 311(3).',
          reasoning: 'Article 311(3) does not oust judicial review where satisfaction is based on no material, irrelevant grounds, or colourable exercise of power.'
        }
      ],
      operativeOrder: 'Suit is decreed. Dismissal order dated 10.02.2024 is declared void ab initio. Plaintiff is entitled to reinstatement with liberty to the Department to hold a regular departmental inquiry in accordance with law.'
    },
    scoringGuide: [
      { dimension: 'Tulsiram Patel & Jaswant Singh Objective Reason Test', marks: 15, tips: 'Explain why "seriousness of charge" is not "impracticability of inquiry".' },
      { dimension: 'Scope of Judicial Review under Article 311(3)', marks: 15, tips: 'Clarify that finality yields to judicial review for arbitrary/no-evidence orders.' },
      { dimension: 'Balanced Operative Decree', marks: 10, tips: 'Quash illegal order while preserving State\'s liberty to conduct a fresh inquiry.' }
    ]
  },
  {
    id: 'judgment-civil-art300a-property-acquisition',
    type: 'Civil Judgment',
    title: 'Deprivation of Private Land without Statutory Procedure under Article 300A',
    examOrigin: 'Higher Judicial Services (HJS) Constitutional & Property Benchmark',
    marksWeightage: 40,
    plaintOrChargesheetSummary:
      'Plaintiff is the recorded bhumidhar/owner of 2 acres of agricultural land. The State Public Works Department constructed a highway widening strip over 0.5 acres of Plaintiff\'s land pursuant to an executive circular of the District Collector, without issuing any notification under the Right to Fair Compensation and Transparency in Land Acquisition, Rehabilitation and Resettlement Act, 2013 or paying compensation.',
    writtenStatementOrDefenseSummary:
      'The State pleaded that: (1) Right to Property ceased to be a Fundamental Right after the 44th Amendment, 1978; (2) the highway serves overriding public purpose; and (3) the Plaintiff delayed approaching the Court by 3 years, attracting laches.',
    admittedFacts: [
      'Plaintiff holds registered title over the 2-acre parcel.',
      'PWD took physical possession of 0.5 acres without any statutory acquisition notification or compensation award.'
    ],
    disputedFacts: [
      'Whether an executive circular satisfies "authority of law" under Article 300A.',
      'Whether a 3-year delay defeats a constitutional property claim.'
    ],
    modelFramedIssuesOrCharges: [
      {
        number: 1,
        issueText: 'Whether taking possession of private land by executive circular violates Article 300A of the Constitution?',
        issueType: 'Issue of Law',
        burdenOfProof: 'Burden on State to show statutory authority'
      },
      {
        number: 2,
        issueText: 'Whether delay of 3 years bars relief against forcible State dispossession without compensation?',
        issueType: 'Mixed Issue',
        burdenOfProof: 'Burden on State'
      }
    ],
    keyStatutes: ['Article 300A, Constitution of India', 'RFCTLARR Act, 2013'],
    keyPrecedents: [
      'Vidya Devi v. State of Himachal Pradesh (2020)',
      'Kolkata Municipal Corporation v. Bimal Kumar Shah (2024)'
    ],
    modelJudgment: {
      courtTitle: 'IN THE COURT OF THE DISTRICT JUDGE',
      caseNumber: 'Civil Suit No. 210 of 2024',
      parties: { plaintiffOrState: 'Landowner P (Plaintiff)', defendantOrAccused: 'State PWD & District Collector' },
      briefPleadings: 'Suit for mandatory injunction and compensation for illegal occupation of 0.5 acres without acquisition.',
      marshallingOfEvidence: 'Revenue Khasra/Khatauni entries (Ex. P-1) prove Plaintiff\'s title; PWD site map (Ex. D-1) admits road construction without acquisition award.',
      issueWiseFindings: [
        {
          issueNumber: 1,
          finding: 'Decided in favour of Plaintiff.',
          reasoning: 'Under Article 300A, "law" means enacted legislation, never an executive circular. As held in Kolkata Municipal Corp v. Bimal Kumar Shah (2024), Art 300A embeds seven mandatory procedural safeguards including notice, hearing, public purpose, and fair compensation.'
        },
        {
          issueNumber: 2,
          finding: 'Plea of laches rejected.',
          reasoning: 'In Vidya Devi (2020), the Supreme Court held that a welfare State cannot plead adverse possession or laches to legitimise forcible expropriation of a citizen\'s land without compensation.'
        }
      ],
      operativeOrder: 'Suit is decreed. Defendants shall initiate formal acquisition proceedings under the RFCTLARR Act, 2013 and disburse compensation with statutory solatium and interest within 4 months, failing which possession shall be restored to Plaintiff.'
    },
    scoringGuide: [
      { dimension: 'Meaning of "Authority of Law" & 7 Sub-Rights (Bimal Kumar Shah 2024)', marks: 15, tips: 'Distinguish enacted statute from executive circular.' },
      { dimension: 'Rejection of State Laches/Adverse Possession (Vidya Devi 2020)', marks: 15, tips: 'Explain continuing wrong in forcible dispossession.' },
      { dimension: 'Pragmatic Public-Interest Decree', marks: 10, tips: 'Direct statutory acquisition + compensation rather than immediate road demolition.' }
    ]
  },
  {
    id: 'judgment-criminal-art19-hate-speech-defamation',
    type: 'Criminal Judgment',
    title: 'Criminal Complaint under Section 356 BNS (Defamation) vs Article 19(1)(a) Fair Criticism',
    examOrigin: 'DJS / BJS Criminal & Constitutional Speech Benchmark',
    marksWeightage: 40,
    plaintOrChargesheetSummary:
      'Complainant, a Municipal Ward Councillor, filed a private criminal complaint under Section 356 BNS (formerly Section 499/500 IPC) against Journalist J for publishing an investigative article titled "Potholes and Missing Funds" alleging that municipal road repair funds for Ward 12 were diverted to unverified contractors, citing RTI replies.',
    writtenStatementOrDefenseSummary:
      'Accused J pleaded Exception 1 (Truth for Public Good) and Exception 3 (Conduct of Public Servant touching Public Question) to Section 356 BNS, invoking Article 19(1)(a) press freedom.',
    admittedFacts: [
      'Accused J authored and published the article on 05.05.2024.',
      'The article relied on certified RTI work-order documents showing zero tarmac laid despite ₹40 Lakhs billed.'
    ],
    disputedFacts: [
      'Whether the publication was made in good faith for public good or with malice to defame Complainant.'
    ],
    modelFramedIssuesOrCharges: [
      {
        number: 1,
        issueText: 'Whether Accused J committed criminal defamation under Section 356 BNS by publishing the RTI-based investigative report?',
        issueType: 'Formal Charge',
        burdenOfProof: 'Complainant to prove imputation & mens rea; Accused to show Exception by preponderance'
      },
      {
        number: 2,
        issueText: 'Whether good-faith journalism on public expenditure is protected by Exception 3 read with Article 19(1)(a)?',
        issueType: 'Mixed Issue',
        burdenOfProof: 'Accused (preponderance of probabilities)'
      }
    ],
    keyStatutes: ['Article 19(1)(a) & 19(2), Constitution of India', 'Section 356 BNS (Sections 499/500 IPC)'],
    keyPrecedents: ['Subramanian Swamy v. Union of India (2016)', 'Romesh Thappar v. State of Madras (1950)', 'Shreya Singhal v. Union of India (2015)'],
    modelJudgment: {
      courtTitle: 'IN THE COURT OF THE METROPOLITAN MAGISTRATE',
      caseNumber: 'Complaint Case No. 412 of 2024',
      parties: { plaintiffOrState: 'Complainant C', defendantOrAccused: 'Journalist J (Accused)' },
      briefPleadings: 'Private complaint alleging criminal defamation over investigative municipal report.',
      marshallingOfEvidence: 'DW-1 proved certified RTI reply (Ex. DW-1/A) showing funds released without physical road completion certificate. No personal vendetta was shown in cross-examination.',
      issueWiseFindings: [
        {
          issueNumber: 1,
          finding: 'Accused J acquitted.',
          reasoning: 'While criminal defamation under Section 356 BNS was upheld in Subramanian Swamy (2016) as a reasonable restriction under Art 19(2), it cannot be weaponised to stifle bona fide investigative reporting on public funds.'
        },
        {
          issueNumber: 2,
          finding: 'Protected under Exception 1 & Exception 3 read with Art 19(1)(a).',
          reasoning: 'Accused verified facts via official RTI records prior to publication, establishing due care, good faith, and public good.'
        }
      ],
      operativeOrder: 'Accused J is acquitted of the offence punishable under Section 356 BNS. Bail bonds cancelled.'
    },
    scoringGuide: [
      { dimension: 'Balancing Article 19(1)(a) with Art 19(2) Reputation (Subramanian Swamy)', marks: 15, tips: 'Note that criminal defamation is constitutional, but subject to strict statutory exceptions.' },
      { dimension: 'Application of Good Faith & Preponderance Standard', marks: 15, tips: 'Explain why Accused need only prove Exceptions by preponderance, not beyond reasonable doubt.' },
      { dimension: 'Operative Acquittal Order', marks: 10, tips: 'Record clear acquittal and discharge of sureties.' }
    ]
  },
  {
    id: 'judgment-civil-art25-26-essential-practice',
    type: 'Civil Judgment',
    title: 'Temple Administration Dispute: Secular Management (Art 25(2)(a)) vs Denominational Autonomy (Art 26)',
    examOrigin: 'UP PCS-J / KJS Constitutional & Civil Benchmark',
    marksWeightage: 40,
    plaintOrChargesheetSummary:
      'Plaintiffs, hereditary trustees of a 300-year-old public temple, sued to restrain the State Hindu Religious Endowments Board from appointing an Executive Officer to audit temple hundi collections and manage sanitation/queue facilities, claiming violation of Article 26(b) and 26(d).',
    writtenStatementOrDefenseSummary:
      'The State Board pleaded that: (1) the temple is a public religious institution open to all Hindus and not a distinct religious denomination; and (2) financial audit and crowd management are secular administrative functions regulable under Article 25(2)(a).',
    admittedFacts: [
      'The State Board did not interfere with daily puja, archaka rituals, or religious ceremonies.',
      'The appointment was strictly confined to financial accounting and civic amenities.'
    ],
    disputedFacts: [
      'Whether Plaintiffs establish a separate "religious denomination" under Article 26.',
      'Whether secular financial regulation infringes religious freedom.'
    ],
    modelFramedIssuesOrCharges: [
      {
        number: 1,
        issueText: 'Whether the Plaintiffs\' temple constitutes a "religious denomination" within Article 26 of the Constitution?',
        issueType: 'Mixed Issue',
        burdenOfProof: 'Burden on Plaintiffs (S.P. Mittal 3-fold test)'
      },
      {
        number: 2,
        issueText: 'Whether State appointment of an Executive Officer for financial audit and secular management violates Articles 25 & 26?',
        issueType: 'Issue of Law',
        burdenOfProof: 'Burden on Plaintiffs'
      }
    ],
    keyStatutes: ['Articles 25(2)(a) & 26(b), (d), Constitution of India'],
    keyPrecedents: [
      'Commissioner, HRE v. Sri Lakshmindra Thirtha Swamiar (Shirur Mutt, 1954)',
      'S.P. Mittal v. Union of India (1983)',
      'Sri Adi Visheshwara of Kashi Vishwanath Temple v. State of U.P. (1997)'
    ],
    modelJudgment: {
      courtTitle: 'IN THE COURT OF THE CIVIL JUDGE (SENIOR DIVISION)',
      caseNumber: 'Original Suit No. 55 of 2024',
      parties: { plaintiffOrState: 'Hereditary Trustees', defendantOrAccused: 'State Endowments Commissioner' },
      briefPleadings: 'Suit for permanent injunction restraining appointment of Executive Officer for secular temple administration.',
      marshallingOfEvidence: 'PW-1 admitted the temple follows mainstream Hindu worship without a distinct creed or separate organisation, and that daily rituals remain untouched by the Executive Officer.',
      issueWiseFindings: [
        {
          issueNumber: 1,
          finding: 'Decided against Plaintiffs.',
          reasoning: 'Under S.P. Mittal (1983), a religious denomination must have (i) common faith, (ii) common organisation, and (iii) a distinctive name. A general public Hindu temple does not satisfy this test.'
        },
        {
          issueNumber: 2,
          finding: 'Decided in favour of State Board.',
          reasoning: 'Following Shirur Mutt (1954) and Kashi Vishwanath (1997), while essential religious practices are protected, secular financial and administrative management of religious endowments is validly regulable by the State under Article 25(2)(a).'
        }
      ],
      operativeOrder: 'Suit is dismissed. It is clarified that the Executive Officer shall not interfere in religious rituals or archaka appointment.'
    },
    scoringGuide: [
      { dimension: 'S.P. Mittal 3-Fold Test for Religious Denomination', marks: 15, tips: 'List all 3 prongs clearly.' },
      { dimension: 'Shirur Mutt Distinction: Religious Practice vs Secular Administration', marks: 15, tips: 'Distinguish Art 25(2)(a) secular regulation from Art 26(b) core faith.' },
      { dimension: 'Protective Clarification in Operative Order', marks: 10, tips: 'Safeguard religious rituals even while dismissing the injunction.' }
    ]
  },
  {
    id: 'judgment-criminal-art20-double-jeopardy',
    type: 'Criminal Judgment',
    title: 'Plea of Autrefois Convict / Double Jeopardy (Art 20(2)) in Departmental vs Criminal Trial',
    examOrigin: 'BJS / MPJS / RJS Criminal Law Benchmark',
    marksWeightage: 40,
    plaintOrChargesheetSummary:
      'Accused Clerk was caught accepting a ₹20,000/- bribe in a trap proceeding. Before the criminal trial concluded, the Department held a disciplinary inquiry on the same facts and imposed the penalty of dismissal from service. In the Special CBI Court, Accused filed an application for discharge under Article 20(2) and Section 300 CrPC (Section 337 BNSS) claiming he has already been punished once for the same offence.',
    writtenStatementOrDefenseSummary:
      'Prosecution opposed discharge, arguing that a departmental inquiry is neither a "prosecution" before a court of law nor a judicial "punishment" within the meaning of Article 20(2).',
    admittedFacts: [
      'Accused was dismissed in a departmental disciplinary proceeding on the same bribery allegation.',
      'No prior criminal trial before a Court or Judicial Magistrate had taken place.'
    ],
    disputedFacts: [
      'Whether a departmental dismissal bars a subsequent criminal prosecution under Article 20(2).'
    ],
    modelFramedIssuesOrCharges: [
      {
        number: 1,
        issueText: 'Whether departmental dismissal from service constitutes "prosecution and punishment" for an offence under Article 20(2) so as to bar a criminal trial?',
        issueType: 'Issue of Law',
        burdenOfProof: 'Burden on Accused to establish ingredients of Art 20(2) / Sec 300 CrPC'
      }
    ],
    keyStatutes: ['Article 20(2), Constitution of India', 'Section 300 CrPC (Section 337 BNSS)', 'Prevention of Corruption Act, 1988'],
    keyPrecedents: [
      'Maqbool Hussain v. State of Bombay (1953)',
      'S.A. Venkataraman v. Union of India (1954)',
      'State of Bihar v. Murad Ali Khan (1988)'
    ],
    modelJudgment: {
      courtTitle: 'IN THE COURT OF THE SPECIAL JUDGE (PC ACT)',
      caseNumber: 'CBI Case No. 19 of 2024',
      parties: { plaintiffOrState: 'State (CBI)', defendantOrAccused: 'Accused Clerk' },
      briefPleadings: 'Discharge application invoking Article 20(2) double jeopardy bar.',
      marshallingOfEvidence: 'Dismissal order (Ex. A-1) was passed by an administrative disciplinary officer under Service Rules, not by a criminal court.',
      issueWiseFindings: [
        {
          issueNumber: 1,
          finding: 'Discharge application dismissed.',
          reasoning: 'In Maqbool Hussain (1953) and S.A. Venkataraman (1954), the Supreme Court held that Article 20(2) applies ONLY when the accused was (i) prosecuted before a Court of Law or judicial tribunal, AND (ii) punished by such Court. A departmental inquiry under service rules is administrative in nature and does not attract Article 20(2) or Section 300 CrPC.'
        }
      ],
      operativeOrder: 'Application under Article 20(2) read with Section 300 CrPC is dismissed. Matter is fixed for framing of formal charges.'
    },
    scoringGuide: [
      { dimension: 'Conjunctive Test under Article 20(2) ("Prosecuted AND Punished")', marks: 15, tips: 'Explain why both prosecution and punishment must be judicial.' },
      { dimension: 'Maqbool Hussain & Venkataraman Ratio', marks: 15, tips: 'Distinguish administrative/customs penalties from court conviction.' },
      { dimension: 'Section 300 CrPC / 337 BNSS Contrast', marks: 10, tips: 'Note that Sec 300 covers both autrefois acquit and autrefois convict, unlike Art 20(2).' }
    ]
  },
  {
    id: 'judgment-civil-art226-vs-arbitration',
    type: 'Civil Judgment',
    title: 'Maintainability of Civil Suit / Writ Challenge against Section 16 Arbitral Tribunal Order',
    examOrigin: 'DJS Commercial & Constitutional Bench Benchmark',
    marksWeightage: 40,
    plaintOrChargesheetSummary:
      'Plaintiff Contractor entered into a works contract containing an arbitration clause. During arbitration proceedings, the Sole Arbitrator dismissed Plaintiff\'s application under Section 16 of the Arbitration and Conciliation Act, 1996 objecting to jurisdiction. Instead of awaiting the final award, Plaintiff filed a Civil Suit seeking a declaration that the Arbitral Tribunal lacked jurisdiction.',
    writtenStatementOrDefenseSummary:
      'Defendant Corporation moved an application under Order VII Rule 11(d) CPC seeking rejection of the plaint as barred by Section 5 and Section 16(6) of the 1996 Act.',
    admittedFacts: [
      'Arbitration agreement is admitted between parties.',
      'Arbitrator rejected Section 16 jurisdictional objection; final award is not yet passed.'
    ],
    disputedFacts: [
      'Whether a Civil Suit is maintainable to challenge an interim Section 16 rejection of jurisdictional plea.'
    ],
    modelFramedIssuesOrCharges: [
      {
        number: 1,
        issueText: 'Whether the Civil Suit is barred by Section 5 and Section 16(6) of the Arbitration and Conciliation Act, 1996 read with Order VII Rule 11(d) CPC?',
        issueType: 'Issue of Law',
        burdenOfProof: 'Legal Issue on Plaint averments'
      }
    ],
    keyStatutes: ['Section 5, Section 16(5)-(6), Section 34, Arbitration Act 1996', 'Order VII Rule 11(d) CPC', 'Articles 226 & 227'],
    keyPrecedents: ['SBP & Co. v. Patel Engineering Ltd. (2005)', 'Deep Industries Ltd. v. ONGC (2020)'],
    modelJudgment: {
      courtTitle: 'IN THE COURT OF THE COMMERCIAL CIVIL JUDGE',
      caseNumber: 'CS (Comm) No. 72 of 2024',
      parties: { plaintiffOrState: 'Contractor P', defendantOrAccused: 'Infrastructure Corp D' },
      briefPleadings: 'Suit challenging Arbitrator\'s Section 16 order; Defendant seeks rejection under O.7 R.11(d) CPC.',
      marshallingOfEvidence: 'Plaint itself admits existence of arbitration clause and pending arbitral proceedings.',
      issueWiseFindings: [
        {
          issueNumber: 1,
          finding: 'Plaint rejected under Order VII Rule 11(d) CPC.',
          reasoning: 'Under Section 16(5)-(6) of the 1996 Act, if the Arbitrator rejects a jurisdictional objection, the arbitration must continue and the aggrieved party can challenge the final award under Section 34. Section 5 imposes an express bar on civil court intervention. Even High Court interference under Art 226/227 is confined to "patently lacking inherent jurisdiction" (Deep Industries 2020).'
        }
      ],
      operativeOrder: 'Application under Order VII Rule 11(d) CPC is allowed. Plaint is rejected as barred by law, with liberty to Plaintiff to raise all objections under Section 34 after the final award.'
    },
    scoringGuide: [
      { dimension: 'Section 5 Non-Intervention Mandate & Kompetenz-Kompetenz', marks: 15, tips: 'Explain why Section 16(6) defers challenge until Section 34 stage.' },
      { dimension: 'SBP & Deep Industries Threshold', marks: 15, tips: 'Contrast Civil Suit bar vs exceptional Art 227 patent-lack-of-jurisdiction threshold.' },
      { dimension: 'Order VII Rule 11(d) Decree Form', marks: 10, tips: 'Rejection of plaint is a decree under Sec 2(2) CPC.' }
    ]
  },
  {
    id: 'judgment-civil-art14-16-compassionate-appointment',
    type: 'Civil Judgment',
    title: 'Compassionate Appointment Claim after 12 Years vs Article 14 & 16 Public Employment Equality',
    examOrigin: 'UP PCS-J / RJS Service & Constitutional Benchmark',
    marksWeightage: 40,
    plaintOrChargesheetSummary:
      'Plaintiff\'s father, a Class IV government employee, passed away in harness in 2012 when Plaintiff was 10 years old. Upon attaining majority in 2020 and completing graduation in 2024, Plaintiff sued for a mandatory injunction directing the State to appoint him on compassionate grounds.',
    writtenStatementOrDefenseSummary:
      'State pleaded that compassionate appointment is an exception to Article 14 and 16 meant strictly to tide over immediate financial destitution, and cannot be claimed as a vested hereditary right 12 years after the employee\'s death.',
    admittedFacts: [
      'Employee died in 2012; family received terminal pensionary benefits.',
      'Suit was instituted in 2024, 12 years after death.'
    ],
    disputedFacts: [
      'Whether compassionate appointment can be claimed upon attaining majority after 12 years.'
    ],
    modelFramedIssuesOrCharges: [
      {
        number: 1,
        issueText: 'Whether Plaintiff has an enforceable constitutional or legal right to compassionate appointment 12 years after the death of the employee?',
        issueType: 'Issue of Law',
        burdenOfProof: 'Burden on Plaintiff'
      }
    ],
    keyStatutes: ['Articles 14 & 16(1), Constitution of India'],
    keyPrecedents: ['Umesh Kumar Nagpal v. State of Haryana (1994)', 'State of West Bengal v. Debabrata Tiwari (2023)'],
    modelJudgment: {
      courtTitle: 'IN THE COURT OF THE CIVIL JUDGE (SENIOR DIVISION)',
      caseNumber: 'Civil Suit No. 134 of 2024',
      parties: { plaintiffOrState: 'Applicant Y', defendantOrAccused: 'State of U.P.' },
      briefPleadings: 'Suit for mandatory injunction seeking compassionate appointment after attaining majority.',
      marshallingOfEvidence: 'Family survived 12 years with family pension and agricultural income; no immediate penury exists in 2024.',
      issueWiseFindings: [
        {
          issueNumber: 1,
          finding: 'Decided against Plaintiff.',
          reasoning: 'In Umesh Kumar Nagpal (1994) and Debabrata Tiwari (2023), the Supreme Court held that public employment must ordinarily comply with Articles 14 and 16. Compassionate appointment is a narrow exception to relieve immediate financial crisis; it is not a vested right or heritable estate that can be reserved until a minor attains majority a decade later.'
        }
      ],
      operativeOrder: 'Suit is dismissed without costs.'
    },
    scoringGuide: [
      { dimension: 'Article 14/16 Rule vs Narrow Exception', marks: 15, tips: 'Cite Umesh Kumar Nagpal & Debabrata Tiwari (2023).' },
      { dimension: 'Purpose of Immediate Penury Relief', marks: 15, tips: 'Explain why passage of 12 years extinguishes immediacy.' },
      { dimension: 'No Heritable Right to Public Office', marks: 10, tips: 'Contrast compassionate relief with descent-based discrimination barred by Art 16(2).' }
    ]
  },
  {
    id: 'judgment-civil-art254-federal-repugnancy',
    type: 'Civil Judgment',
    title: 'Federal Repugnancy Challenge: State Rent Amendment vs Central Model Act under Art 254(2)',
    examOrigin: 'HJS / DJS Federalism & Legislative Competence Benchmark',
    marksWeightage: 40,
    plaintOrChargesheetSummary:
      'Plaintiff Landlord filed an eviction suit relying on a Central Act (Concurrent List Entry 6/7) prescribing a 1-year summary eviction procedure. Defendant Tenant contended that a subsequent State Amendment Act, which received Presidential Assent under Article 254(2), mandates a 3-year protection period for tenants.',
    writtenStatementOrDefenseSummary:
      'Plaintiff argued that Central law always prevails over State law under Article 254(1), whereas Defendant relied on the State Act\'s Presidential Assent under Article 254(2).',
    admittedFacts: [
      'Both enactments fall under the Concurrent List (List III).',
      'The State Amendment Act is subsequent and expressly received the President\'s assent under Article 254(2).'
    ],
    disputedFacts: [
      'Which enactment governs the eviction proceeding in the State.'
    ],
    modelFramedIssuesOrCharges: [
      {
        number: 1,
        issueText: 'Whether the subsequent State Amendment Act having received Presidential Assent under Article 254(2) prevails over the earlier Central Act within the State?',
        issueType: 'Issue of Law',
        burdenOfProof: 'Legal Issue'
      }
    ],
    keyStatutes: ['Article 254(1) & 254(2), Constitution of India', 'Seventh Schedule List III'],
    keyPrecedents: ['M. Karunanidhi v. Union of India (1979)', 'Hoechst Pharmaceuticals v. State of Bihar (1983)'],
    modelJudgment: {
      courtTitle: 'IN THE COURT OF THE RENT CONTROLLER / CIVIL JUDGE',
      caseNumber: 'Eviction Petition No. 67 of 2024',
      parties: { plaintiffOrState: 'Landlord L', defendantOrAccused: 'Tenant T' },
      briefPleadings: 'Eviction petition raising Concurrent List repugnancy under Article 254.',
      marshallingOfEvidence: 'Gazette notification (Ex. D-1) proves Presidential Assent dated 14.08.2023 under Article 254(2).',
      issueWiseFindings: [
        {
          issueNumber: 1,
          finding: 'State Amendment Act prevails within the State.',
          reasoning: 'While Article 254(1) normally gives primacy to Central law in the Concurrent List, Article 254(2) carves out an express federal exception: if a State law on a Concurrent List matter has been reserved for and receives the President\'s assent, it prevails in that State over an earlier Central law (unless Parliament subsequently enacts another overriding law under the Proviso to Art 254(2)).'
        }
      ],
      operativeOrder: 'Eviction petition is dismissed as premature under the prevailing State Amendment Act.'
    },
    scoringGuide: [
      { dimension: 'M. Karunanidhi 3-Prong Test of Repugnancy', marks: 15, tips: 'Explain direct collision, exhaustive code, and irreconcilability.' },
      { dimension: 'Article 254(1) vs Article 254(2) Presidential Assent Exception', marks: 15, tips: 'Also mention Parliament\'s Proviso power to override later.' },
      { dimension: 'Operative Dismissal', marks: 10, tips: 'Apply prevailing State statute cleanly.' }
    ]
  },
  {
    id: 'judgment-criminal-art21-handcuffing-custodial',
    type: 'Criminal Judgment',
    title: 'Magisterial Inquiry on Illegal Handcuffing & Unexplained Custodial Injuries under Article 21',
    examOrigin: 'DJS / BJS / UP PCS-J Human Rights & Criminal Benchmark',
    marksWeightage: 40,
    plaintOrChargesheetSummary:
      'When Accused M was produced before the Duty Magistrate within 24 hours of arrest for an alleged theft (Section 303 BNS), he was brought in iron handcuffs and bore fresh contusions on his back. The Investigating Officer filed no judicial permission for handcuffing and claimed Accused M slipped while running.',
    writtenStatementOrDefenseSummary:
      'Accused M\'s legal aid counsel alleged custodial torture during overnight interrogation and illegal handcuffing in violation of Supreme Court guidelines.',
    admittedFacts: [
      'Accused M was produced in handcuffs without prior permission of the Magistrate.',
      'Arrest memo recorded "no visible injuries" at the time of arrest, whereas production MLC showed fresh blunt contusions.'
    ],
    disputedFacts: [
      'Whether the police committed illegal handcuffing and custodial violence.'
    ],
    modelFramedIssuesOrCharges: [
      {
        number: 1,
        issueText: 'Whether handcuffing Accused M without prior judicial permission violated Article 21 and Prem Shankar Shukla guidelines?',
        issueType: 'Issue of Law',
        burdenOfProof: 'Burden on Police to show extreme necessity'
      },
      {
        number: 2,
        issueText: 'What mandatory steps must the Magistrate take regarding fresh custodial injuries under D.K. Basu and Section 54 CrPC (53 BNSS)?',
        issueType: 'Mixed Issue',
        burdenOfProof: 'Burden on Police to explain injuries'
      }
    ],
    keyStatutes: ['Article 21, Constitution of India', 'Section 54 CrPC / Section 53 BNSS', 'Section 176(1A) CrPC / 196 BNSS'],
    keyPrecedents: ['Prem Shankar Shukla v. Delhi Administration (1980)', 'D.K. Basu v. State of West Bengal (1997)', 'Citizens for Democracy v. State of Assam (1995)'],
    modelJudgment: {
      courtTitle: 'IN THE COURT OF THE DUTY JUDICIAL MAGISTRATE',
      caseNumber: 'Misc. Custodial Inquiry No. 12 of 2024',
      parties: { plaintiffOrState: 'State (Police)', defendantOrAccused: 'Accused M' },
      briefPleadings: 'Production report and legal aid complaint alleging illegal handcuffing and custodial assault.',
      marshallingOfEvidence: 'Arrest Memo (no injury) contrasted with Production MLC (3 fresh dorsal contusions) creates strong adverse inference against custodial safety.',
      issueWiseFindings: [
        {
          issueNumber: 1,
          finding: 'Handcuffing declared illegal and unconstitutional.',
          reasoning: 'In Prem Shankar Shukla (1980) and Citizens for Democracy (1995), the Supreme Court held that handcuffing is prima facie inhuman and violative of Article 21 unless prior Magistrate permission is obtained on clear evidence of escape risk.'
        },
        {
          issueNumber: 2,
          finding: 'Medical Board & Departmental/Judicial Inquiry ordered.',
          reasoning: 'Under D.K. Basu (1997), police are strictly accountable for injuries sustained in custody.'
        }
      ],
      operativeOrder: 'Handcuffs ordered removed forthwith. Accused M remanded to Judicial Custody (not Police Custody) with immediate medical treatment at District Hospital. Copy of order sent to SP and District Judge for action against erring officers.'
    },
    scoringGuide: [
      { dimension: 'Prem Shankar Shukla & Citizens for Democracy Handcuffing Ban', marks: 15, tips: 'Cite mandatory prior Magisterial permission.' },
      { dimension: 'D.K. Basu & Arrest Memo vs MLC Contradiction', marks: 15, tips: 'Explain shifting burden on police for custodial injuries.' },
      { dimension: 'Protective Magisterial Directions', marks: 10, tips: 'Refuse police custody remand and ensure medical care + accountability.' }
    ]
  },
  {
    id: 'judgment-civil-art21a-ews-admission',
    type: 'Civil Judgment',
    title: 'Enforcement of 25% EWS/Disadvantaged Group Quota in Private Unaided School under Art 21A & RTE Act',
    examOrigin: 'DJS Civil & Constitutional Benchmark',
    marksWeightage: 40,
    plaintOrChargesheetSummary:
      'Minor Plaintiff (through guardian) belonging to the Economically Weaker Section was allotted a seat in Class I at Defendant Private Unaided School under the 25% quota under Section 12(1)(c) of the RTE Act, 2009. Defendant School refused admission claiming it is a private unaided institution protected under Article 19(1)(g) and that the State had not reimbursed previous years\' fees.',
    writtenStatementOrDefenseSummary:
      'Defendant School pleaded that forcing it to admit non-paying students violates its fundamental right to carry on occupation under Article 19(1)(g) and that State reimbursement default absolves its statutory duty.',
    admittedFacts: [
      'Defendant is a non-minority private unaided school.',
      'Plaintiff holds a valid Directorate of Education lottery allotment letter.'
    ],
    disputedFacts: [
      'Whether a non-minority private unaided school can refuse RTE 25% quota admission citing Art 19(1)(g) or State reimbursement delay.'
    ],
    modelFramedIssuesOrCharges: [
      {
        number: 1,
        issueText: 'Whether Section 12(1)(c) of the RTE Act, 2009 applies to non-minority private unaided schools as a reasonable restriction under Article 19(6) read with Article 21A?',
        issueType: 'Issue of Law',
        burdenOfProof: 'Legal Issue'
      },
      {
        number: 2,
        issueText: 'Whether delay in State fee reimbursement entitles the School to deny admission to an allotted child?',
        issueType: 'Mixed Issue',
        burdenOfProof: 'Burden on Defendant School'
      }
    ],
    keyStatutes: ['Articles 21A, 19(1)(g) & 19(6), Constitution of India', 'Section 12(1)(c) & 12(2), RTE Act, 2009'],
    keyPrecedents: ['Society for Unaided Private Schools of Rajasthan v. Union of India (2012)', 'Pramati Educational & Cultural Trust v. Union of India (2014)'],
    modelJudgment: {
      courtTitle: 'IN THE COURT OF THE CIVIL JUDGE',
      caseNumber: 'Civil Suit No. 199 of 2024',
      parties: { plaintiffOrState: 'Minor Student S', defendantOrAccused: 'XYZ Public School' },
      briefPleadings: 'Suit for mandatory injunction directing admission under 25% EWS/DG quota.',
      marshallingOfEvidence: 'Ex. P-1 confirms valid EWS income certificate and DoE allotment slip; Defendant admitted it is a non-minority unaided school.',
      issueWiseFindings: [
        {
          issueNumber: 1,
          finding: 'Decided in favour of Plaintiff.',
          reasoning: 'In Society for Unaided Private Schools (2012) and Pramati (2014, 5-Judge Bench), the Supreme Court upheld Section 12(1)(c) for all non-minority unaided schools (excluding only minority institutions under Art 30(1)) as a valid social-obligation restriction under Art 19(6) advancing Art 21A.'
        },
        {
          issueNumber: 2,
          finding: 'Reimbursement delay does not justify denying admission.',
          reasoning: 'The School\'s remedy for delayed reimbursement lies against the State under Section 12(2) RTE Act, not by turning away an eligible child.'
        }
      ],
      operativeOrder: 'Suit is decreed. Defendant School is directed to grant immediate admission to Minor Plaintiff in Class I under the 25% RTE quota, with liberty to claim statutory reimbursement from the State Education Department.'
    },
    scoringGuide: [
      { dimension: 'Pramati (2014) Distinction: Minority vs Non-Minority Unaided Schools', marks: 15, tips: 'Clarify Art 30(1) exemption vs Art 19(6) applicability.' },
      { dimension: 'Separation of Student Right from State Reimbursement', marks: 15, tips: 'Child cannot suffer for inter-se fiscal dispute between School and State.' },
      { dimension: 'Mandatory Injunction & Liberty', marks: 10, tips: 'Direct immediate admission while preserving Section 12(2) reimbursement claim.' }
    ]
  }
];
