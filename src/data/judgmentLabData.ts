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
  }
];
