import type { VisualBlueprintSpec } from './visualBlueprintsTypes';

export const TRACK_3_JUDICIARY_BLUEPRINTS: VisualBlueprintSpec[] = [
  {
    id: 'judicial-appointment-judges-cases',
    title: 'Judicial Appointments: First, Second, Third Judges Cases & NJAC Strike-Down',
    category: 'Judicial Independence',
    track: 'Judiciary & Doctrines',
    articles: 'Articles 124(2), 217 & 99th Amd',
    summary: '4-station evolution from Executive Primacy (1981) to 9-Judge Collegium Primacy (1993/1998) and the 2015 Basic Structure invalidation of NJAC.',
    topology: 'flowchart',
    rootLabel: 'APPOINTMENT POWER',
    rootSub: '"Consultation" Meaning Evolution',
    edgeFlowTag: '1981 – 2015',
    footerRule: 'Under Arts 124/217, "Collegium" is nowhere in the text — evolved via judicial interpretation holding "consultation" = binding "concurrence" of CJI + 4 Senior-Most SC Judges (2 SC for HC transfers/appts -> 4 for Transfers!).',
    nodes: [
      {
        id: 'jc-first',
        badge: 'FIRST JUDGES (1981)',
        title: 'S.P. Gupta v. UOI (Executive Primacy)',
        subtitle: '"Consultation" != "Concurrence"',
        tag: '7-Judge 4:3 Majority',
        edgeLabel: 'Overruled 1993',
        rule: 'Held Art 124 "consultation" meant merely exchanging views; Executive could override CJI opinion when appointing SC/HC judges. Coincided with Post-Emergency Executive dominance.',
        callouts: [
          'Executive (Union Govt) retained final veto over judicial names',
          'Broadened PIL locus standi rules in the same landmark judgment',
          'Overruled decisively 12 years later by Second Judges Case'
        ],
        landmarkCase: 'S.P. Gupta v. President of India (1981)',
        examTrap: 'Exam Note: Remember S.P. Gupta ALSO birthed Indian Public Interest Litigation locus expansion even while losing on Judicial Primacy!'
      , colorKey: 'rose'
      },
      {
        id: 'jc-second',
        badge: 'SECOND JUDGES (1993)',
        title: 'SC AoR Association v. UOI (Collegium Birth)',
        subtitle: 'CJI + 2 Senior-Most Judges Concurrence',
        tag: '9-Judge 7:2 Bench',
        edgeLabel: '1993 Flip',
        rule: 'Overruled First Judges Case: Institutional independence demands CJI primacy ("Consultation" = "Concurrence"), exercised jointly with TWO senior-most SC Judges.',
        callouts: [
          'First formal Collegium mechanism (1 CJI + 2 Senior Judges)',
          'Established "Senior-Most Judge Convention" for CJI appointment!',
          'Individual opinion of CJI alone without consulting peers is invalid'
        ],
        landmarkCase: 'Supreme Court Advocates-on-Record Assn v. UOI (1993)',
        examTrap: 'CJI CANNOT act individually as a monarch — even in 1993 Collegium required CJI + 2 senior colleagues!'
      , colorKey: 'sky'
      },
      {
        id: 'jc-third',
        badge: 'THIRD JUDGES (1998)',
        title: 'Art 143 Ref.: CJI + 4 Collegium Structure',
        subtitle: '1+4 for SC/HC Transfers; 1+2 for HC Appointments',
        tag: '9-Judge Unanimous',
        edgeLabel: '1998 Expansion',
        rule: 'On Presidential Art 143 Reference, SC expanded Collegium to CJI + 4 Senior-Most SC Judges (plus judge conversant with concerned HC). If even 2 Collegium judges object -> recommendation STOPS!',
        callouts: [
          'SC Appointments: CJI + 4 Senior-Most SC Judges',
          'HC Judge Transfer (Art 222): CJI + 4 Senior-Most Judges + CJs of both HCs',
          'HC Initial Appointment (Art 217): SC Collegium = CJI + 2 Senior-Most Judges (after HC 1+2 Chief Justice proposal!)'
        ],
        landmarkCase: 'In re Special Reference No. 1 of 1998 (9-Judge Bench)',
        examTrap: 'SHARPEST NUMERAL TRAP: SC Collegium = 1+4 (5 Judges) for SC Appoints & HC Transfers, BUT 1+2 (3 Judges) for HC Initial Appointments!'
      , colorKey: 'emerald'
      },
      {
        id: 'jc-njac',
        badge: 'FOURTH JUDGES (2015)',
        title: '99th Amendment / NJAC Struck Down (4:1)',
        subtitle: 'Violated Judicial Independence Basic Structure',
        tag: 'Collegium Restored',
        edgeLabel: 'Basic Structure',
        rule: '99th Amd inserted Arts 124A–124C creating 6-member NJAC (CJI, 2 Sr Judges, Law Minister, 2 "Eminent Persons"). SC 4:1 Bench struck down ENTIRE amendment as Law Minister + 2 lay members veto destroyed Judicial Primacy.',
        callouts: [
          'Justice Chelameswar lone dissent upholding NJAC',
          'Rare instance of striking down a Constitution Amendment Act in entirety',
          'SC subsequently invited MoP (Memorandum of Procedure) reforms'
        ],
        landmarkCase: 'SC Advocates-on-Record Assn v. UOI (NJAC Case 2015)',
        examTrap: 'Notice: Constitution STILL uses NO fixed Minimum Age for SC or HC Judge appointments (only Retirement Age: 65 SC / 62 HC)!'
      , colorKey: 'violet'
      }
    ]
  },
  {
    id: 'judge-removal-impeachment-124',
    title: 'Judges Enquiry Act 1968 & Art 124(4): 5-Stage Removal of SC & HC Judges',
    category: 'Judicial Accountability',
    track: 'Judiciary & Doctrines',
    articles: 'Articles 124(4)–(5) & 217',
    summary: 'Orbital procedure clock showing why NO Supreme Court or High Court judge in India has ever been formally removed — 100 LS/50 RS triggers, 3-member probe & same-session Special Majority.',
    topology: 'cycle-sequence',
    rootLabel: 'JUDGE REMOVAL (124(4))',
    rootSub: 'Proved Misbehaviour or Incapacity Only',
    edgeFlowTag: '1968 ACT CLOCK',
    footerRule: 'Notice "Impeachment" word is NEVER used for Judges in Constitution (reserved ONLY for President Art 61)! Removal Motion MUST pass BOTH Houses in the EXACT SAME SESSION.',
    nodes: [
      {
        id: 'rem-1-sign',
        badge: 'STAGE 1 · THRESHOLD',
        title: 'Notice Signed by 100 LS or 50 RS MPs',
        subtitle: 'Speaker / Chairman May Admit OR Refuse',
        tag: 'Either House Start',
        edgeLabel: 'Notice',
        rule: 'Under Judges (Inquiry) Act 1968 (made under Art 124(5)), removal motion starts in EITHER House when signed by >=100 Lok Sabha MPs OR >=50 Rajya Sabha MPs.',
        callouts: [
          'Presiding Officer (Speaker/Chairman) holds discretion to admit or reject',
          'Once admitted, motion DOES NOT lapse on Lok Sabha dissolution? Wait — Committee inquiry survives, though House must still vote same session after report!',
          '2 exclusive grounds: Proved Misbehaviour OR Incapacity (Art 124(4))'
        ],
        landmarkCase: 'Sub-Committee on Judicial Accountability (1991) 5-Judge Bench',
        examTrap: 'Does Constitution specify Judges Removal inquiry steps in Art 124? NO — Art 124(5) delegated procedure to Parliament’s Judges (Inquiry) Act 1968!'
      , colorKey: 'sky'
      },
      {
        id: 'rem-2-probe',
        badge: 'STAGE 2 · 3-MEMBER PANEL',
        title: 'Statutory Inquiry Committee Verification',
        subtitle: 'CJI/SC Judge + HC Chief Justice + Distinguished Jurist',
        tag: 'Guilty Gatekeeper',
        edgeLabel: 'Investigation',
        rule: 'Admitted motion obliges Speaker/Chair to form 3-member Committee: (1) CJI or SC Judge, (2) Chief Justice of a High Court, (3) Distinguished Jurist. If acquitted -> process STOPS immediately!',
        callouts: [
          'If Judge found NOT GUILTY -> Parliament CANNOT proceed further!',
          'Judge receives full right to legal defence during panel trial',
          'Applies identically to Chief Election Commissioner & CAG!'
        ],
        landmarkCase: 'Sarojini Ramaswami v. Union of India (1992)',
        examTrap: 'IF the 3-member Judges Committee acquits the judge of Misbehaviour/Incapacity, even 100% of Parliament CANNOT override and remove the judge!'
      , colorKey: 'violet'
      },
      {
        id: 'rem-3-vote',
        badge: 'STAGE 3 · ART 124(4)',
        title: 'Same-Session Special Majority in BOTH Houses',
        subtitle: '>50% Total Membership + >=2/3 Present & Voting',
        tag: 'Same Session Lock!',
        edgeLabel: 'Same Session',
        rule: 'Committee guilty report + Motion must pass BOTH Lok Sabha and Rajya Sabha in the EXACT SAME SESSION by Special Majority (>50% Total AND >=2/3 Present & Voting).',
        callouts: [
          'NO Joint Sitting allowed under Art 108 if Houses disagree',
          'Applies equally to SC Judges (Art 124(4)) and High Court Judges (Art 217(1)(b))',
          'Only Art 121 lifts Parliamentary shield to debate judge conduct once motion is admitted!'
        ],
        landmarkCase: 'Justice V. Ramaswami (1993 LS abstention failed majority)',
        examTrap: 'HIGH-YIELD COMPARISON: Special Majority Type 2 (>50% Total + 2/3 P&V) Same Session = Judge Removal (compare Pres. Impeachment = 2/3 of TOTAL House).'
      , colorKey: 'rose'
      },
      {
        id: 'rem-4-order',
        badge: 'STAGE 4 · WARRANT',
        title: 'Presidential Removal Order',
        subtitle: 'Address Presented in Same Session -> Order Issued',
        tag: 'Zero Removals Yet',
        edgeLabel: 'Pres. Assent',
        rule: 'Following same-session address from both Houses, President issues Warrant removing Judge from office.',
        callouts: [
          'Ramaswami (1993) failed voting in LS (Congress abstained)',
          'Soumitra Sen (Calcutta HC 2011) & P.D. Dinakaran resigned BEFORE final voting',
          'ZERO SC/HC Judges have ever been formally removed by Presidential Warrant in Indian history!'
        ],
        landmarkCase: 'Justice V. Ramaswami (1993) & Soumitra Sen (2011)',
        examTrap: 'In-House Enquiry Procedure formulated by SC (1997 Restatement of Values) runs parallel for minor misconduct/transfer below Art 124(4) threshold.'
      , colorKey: 'emerald'
      }
    ]
  },
  {
    id: 'high-court-superintendence-226-227',
    title: 'High Courts Architecture: Art 226 Writs vs Art 227 Superintendence & Art 228',
    category: 'High Courts Jurisdiction',
    track: 'Judiciary & Doctrines',
    articles: 'Articles 214 – 231',
    summary: 'Matrix dividing High Court extraordinary Part III/legal writ power (226) from administrative & judicial superintendence over subordinate courts & tribunals (227) and transfer of constitutional questions (228).',
    topology: 'matrix-split',
    rootLabel: 'HIGH COURTS DUAL CONSTITUTIONAL ROLE (ARTS 226–228)',
    rootSub: 'Wider Subject Matter Than SC (Art 32) • Common HC Option (7th Amd 1956)',
    edgeFlowTag: '226 vs 227',
    footerRule: 'Art 226 issues WRITS even against Executive Authorities ("any other purpose"), whereas Art 227 reaches ONLY Subordinate Courts & Tribunals inside State territory (excluding Armed Forces Tribunals!).',
    nodes: [
      {
        id: 'hc-226',
        badge: 'ART 226 · WRITS',
        title: 'Enforce Fundamental + Ordinary Legal Rights',
        subtitle: '"For Any Other Purpose" Makes HC Wider Than SC Art 32',
        tag: 'Discretionary Relief',
        side: 'left',
        rule: 'HC issues 5 writs both for Part III Fundamental Rights AND "for any other purpose" (statutory/legal rights). Cause-of-action jurisdiction (15th Amd 1963 Art 226(2)) reaches even authorities outside State if cause partly arose within!',
        callouts: [
          'Cannot be curtailed even during National Emergency under Art 358/359 outside suspended rights',
          'Whirlpool Rule (1998): Alternate remedy rule is self-imposed, NOT bar if natural justice or vires violated',
          '15th Amd 1963 also raised HC Judge retirement age from 60 -> 62!'
        ],
        landmarkCase: 'Whirlpool Corp (1998) & L. Chandra Kumar (1997 Basic Structure)',
        examTrap: 'Notice: Right to move SC under Art 32 is ITSELF a Fundamental Right (obligatory), whereas Art 226 is Constitutional Discretionary Writ Power (yet Basic Structure per Chandra Kumar!).'
      , colorKey: 'sky'
      },
      {
        id: 'hc-227',
        badge: 'ART 227 · SUPERINTENDENCE',
        title: 'Judicial & Administrative Control Over Courts/Tribunals',
        subtitle: 'Keeps Subordinate Courts Inside Bounds of Jurisdiction',
        tag: 'Excludes Military Courts',
        side: 'left',
        rule: 'Covers BOTH judicial AND administrative superintendence over ALL subordinate civil/criminal courts & tribunals within State (excluding military Courts-Martial 227(4)).',
        callouts: [
          'Notice: Tribunals under Art 323A/323B stay subject to Division Bench Art 226/227 (Chandra Kumar)',
          'Can act SUO MOTU under Art 227 (Art 226 requires aggrieved party application!)',
          '42nd Amendment trimmed Art 227 over Tribunals -> 44th Amendment restored it!'
        ],
        landmarkCase: 'Surya Dev Rai (2003) & Radhey Shyam v. Chhabi Nath (2015 3J)',
        examTrap: 'SUPREME DISTINCTION (Radhey Shyam 2015): Judicial orders of Civil Courts CANNOT be challenged via Art 226 Certiorari writ — ONLY under Art 227 supervisory jurisdiction!'
      , colorKey: 'violet'
      },
      {
        id: 'hc-228-230',
        badge: 'ART 228 & COMMON HC',
        title: 'Withdrawing Cases (228) & Multi-State HCs (230–231)',
        subtitle: 'Substantial Constitutional Question Transfer + 7th Amd',
        tag: '25 High Courts Today',
        side: 'right',
        rule: 'Under Art 228, if a subordinate court pending case involves substantial question of Constitutional interpretation, HC MUST withdraw the case to decide the issue or whole case.',
        callouts: [
          '7th Amendment (1956) Art 231 enabled ONE Common High Court for 2+ States (e.g., Bombay, Guwahati, Punjab & Haryana)',
          'Parliament alone can extend or exclude HC jurisdiction over Union Territories (Art 230; 8/9 UTs share HCs)',
          'Only Delhi & J&K have dedicated High Courts among UTs!'
        ],
        landmarkCase: 'Articles 228, 230, 231 & 7th Amendment Act 1956',
        examTrap: 'Notice: Salaries of HC Judges are charged on CONSOLIDATED FUND OF STATE (Art 202), BUT PENSIONS of HC Judges are charged on CONSOLIDATED FUND OF INDIA (Art 112)!'
      , colorKey: 'emerald'
      },
      {
        id: 'hc-222-trans',
        badge: 'ARTS 217 & 222–224A',
        title: 'Transfer, Acting, Additional & Retired Judges',
        subtitle: 'CJI + 4 Collegium for Transfer; Art 224A Ad-Hoc Backlog',
        tag: 'National Judicial Mobility',
        side: 'right',
        rule: 'President transfers HC judges after consulting CJI (Collegium = 1+4 + CJs of sender/receiver HCs). President appoints Additional Judges (<=2 yrs) & Acting CJ; HC CJ (with President prior consent) calls Retired HC Judge (Art 224A).',
        callouts: [
          'High Court Judge qualification: 10 yrs Judicial Office OR 10 yrs HC Advocate (NO Eminent Jurist!)',
          'Oath of HC Judge administered by STATE GOVERNOR (resignation addressed to PRESIDENT!)',
          'Post-retirement bar: Permanent HC judge can ONLY plead before SC & OTHER HCs (Art 220 via 7th Amd!)'
        ],
        landmarkCase: 'Lok Prahari v. Union of India (2021 — Activating Art 224A)',
        examTrap: 'CLASSIC CONFUSION: Who administers Oath to High Court Judge? GOVERNOR. Who Appoints & accepts Resignation & Removes HC Judge? PRESIDENT!'
      , colorKey: 'rose'
      }
    ]
  },
  {
    id: 'subordinate-district-judiciary-233',
    title: 'Subordinate & District Judiciary: Arts 233–237 & AIJA (2025) Standards',
    category: 'District & Grassroots Judiciary',
    track: 'Judiciary & Doctrines',
    articles: 'Articles 233 – 237',
    summary: 'Hierarchy pyramid tracking District Judge appointment (Governor + High Court), 7-yr Advocate rule, Art 235 Total High Court Control & 2025 SC eligibility norms.',
    topology: 'pyramid-hierarchy',
    rootLabel: 'SUBORDINATE COURTS (PART VI CH VI)',
    rootSub: 'State Subject + Total High Court Supervision (Art 235)',
    edgeFlowTag: 'ART 233–235 CONTROL',
    footerRule: 'Art 235 vests TOTAL control over District Judges & subordinate judiciary (postings, promotions, leave & discipline) exclusively in the HIGH COURT — shielding trial courts from Ministers!',
    nodes: [
      {
        id: 'dj-233',
        badge: 'ART 233 · DISTRICT JUDGE',
        title: 'Governor + High Court Direct Appointment',
        subtitle: 'Elevation From Service OR Direct 7-Yr Bar Member',
        tag: 'Recommendation Mandatory',
        rule: 'District Judges appointed/promoted by Governor ONLY in consultation with HIGH COURT (Chandra Mohan 1966 held HC recommendation binding!). Direct Bar candidates need >=7 years Advocate standing + HC recommendation.',
        callouts: [
          'Includes City Civil, Sessions, Additional District & Chief Presidency Magistrates (Art 236(a))',
          'Dheeraj Mor (2020 3J): Serving judicial officers CANNOT compete in the 7-yr Bar direct-recruitment quota under Art 233(2)!',
          '2025 AIJA Judgment restored minimum 3-year Bar practice condition for entry Civil Judge (Jr Div) exam!'
        ],
        landmarkCase: 'All India Judges Association (May 2025) & Dheeraj Mor (2020)',
        examTrap: '2025 CONSTITUTIONAL BENCHMARK: SC restored the mandatory 3-YEAR BAR PRACTICE prerequisite for fresh Civil Judge (Junior Division) aspirants in May 2025!'
      , colorKey: 'sky'
      },
      {
        id: 'sub-234',
        badge: 'ART 234 · ENTRY JUDGES',
        title: 'Recruitment Below District Judge',
        subtitle: 'Governor + SPSC + High Court Rules',
        tag: 'Civil Judge / Munsiff / JMFC',
        rule: 'Other judicial service persons appointed by Governor strictly per rules framed AFTER consulting State Public Service Commission AND High Court.',
        callouts: [
          'Two parallel wings: Civil Side (District/Sub-Judge/Munsiff) & Criminal Side (Sessions/CJM/JMFC)',
          'Same presiding District Judge sits as District Judge (Civil) & Sessions Judge (Criminal)!',
          'National Judicial Pay Commission ensures uniform pay scales'
        ],
        landmarkCase: 'State of Bihar v. Bal Mukund Sah (2000 5J)',
        examTrap: 'State Legislature cannot unilaterally override HC-consulted Judicial Service rules for reservations without consulting HC (Bal Mukund Sah)!'
      , colorKey: 'emerald'
      },
      {
        id: 'hc-235-ctrl',
        badge: 'ART 235 · HC SHIELD',
        title: 'Exclusive Administrative Control by High Court',
        subtitle: 'Discipline, Transfers, Promotions (Dismissal = Gov + HC)',
        tag: 'Art 50 Realized',
        rule: 'Art 235 vests complete control over posting, promotion, leave & disciplinary inquiry of District Courts inside HIGH COURT; formal dismissal order issued by Governor MUST strictly follow HC binding advice!',
        callouts: [
          'Realizes Directive Principle Article 50 (Separation of Judiciary from Executive)',
          'Executive Ministers/Secretaries have ZERO transfer power over trial judges',
          'High Court alone grants/refuses extensions up to statutory age'
        ],
        landmarkCase: 'Samsher Singh (1974) & Madan Mohan Choudhary (1999)',
        examTrap: 'Remember NALSA / Gram Nyayalayas Act 2008 & Lok Adalats (Art 39A) operate as grassroots ADR tiers below/alongside Civil Judges!'
      , colorKey: 'violet'
      },
      {
        id: 'art-237-mag',
        badge: 'ART 237 · EXECUTIVE MAGS',
        title: 'Extension of Part VI Controls by Public Notification',
        subtitle: 'Governor Can Bring Specific Executive Magistrates Under HC',
        tag: 'Post-1973 CrPC Integration',
        rule: 'Empowers Governor to notify application of Judicial Service Part VI Ch VI provisions directly to specified classes of Magistrates in State Executive.',
        callouts: [
          'Completed 1973 CrPC divorce of Judicial Magistrates vs District Collector Magistrates',
          'Executive Magistrates retain ONLY preventive BNSS Sec 126–163 public peace duties',
          'BNSS trial jurisdiction remains purely with HC-controlled Judiciary'
        ],
        landmarkCase: 'Art 50 & CrPC 1973 / BNSS 2023 Separation Framework',
        examTrap: 'Judicial Magistrates NEVER report to the District Collector / DM — they report exclusively to CJM / District Judge / High Court!'
      , colorKey: 'rose'
      }
    ]
  },
  {
    id: 'tribunals-art323a-323b',
    title: 'Administrative & Statutory Tribunals (Arts 323A/323B) & Chandra Kumar Bridge',
    category: 'Quasi-Judicial Architecture',
    track: 'Judiciary & Doctrines',
    articles: 'Part XIV-A (Arts 323A & 323B)',
    summary: 'Explains 42nd Amendment Tribunal origins, subject distinctions between 323A (Public Services, Parliament only) vs 323B (Tax/Land/IP, Both), and the L. Chandra Kumar High Court Division-Bench review rule.',
    topology: 'flowchart',
    rootLabel: 'PART XIV-A TRIBUNALS',
    rootSub: 'Added by 42nd Amendment Act 1976',
    edgeFlowTag: 'L. CHANDRA KUMAR',
    footerRule: 'Chandra Kumar (1997 7-Judge) struck down clauses excluding HC 226/227 & SC 32 review: ALL Tribunal orders MUST first go to a DIVISION BENCH of the jurisdictional HIGH COURT before approaching SC!',
    nodes: [
      {
        id: 'tr-323a',
        badge: 'ART 323A · SERVICES ONLY',
        title: 'Public Services Tribunals (CAT / SAT)',
        subtitle: 'Parliament ONLY • 1 Centre + 1 Per State Hierarchy',
        tag: 'Administrative Tribunals Act 1985',
        edgeLabel: 'Services Track',
        rule: 'Authorizes ONLY PARLIAMENT to establish Administrative Tribunals for recruitment & service conditions of public servants (Union, State, Local, PSU). No hierarchy allowed within 323A.',
        callouts: [
          'Central Administrative Tribunal (CAT) created 1985 on Swaran Singh / Shah Comm lines',
          'Follows Principles of Natural Justice rather than strict CPC 1908 / Evidence rules!',
          'DOES NOT cover Armed Forces, SC/HC Staff, or Parliamentary Secretariat Staff!'
        ],
        landmarkCase: 'S.P. Sampath Kumar (1987) — Initially equated to HC, later altered',
        examTrap: 'WHO CAN CREATE 323A TRIBUNALS? ONLY PARLIAMENT (even State Administrative Tribunals / SATs are created by Central Govt on State request under 1985 Act — NOT State Assembly laws)!'
      , colorKey: 'sky'
      },
      {
        id: 'tr-323b',
        badge: 'ART 323B · BROAD TOPICS',
        title: 'Multi-Subject Tribunals (Tax, Land, Rent, IP, Election)',
        subtitle: 'BOTH Parliament & State Assemblies Within Competence',
        tag: 'Hierarchy Permitted',
        edgeLabel: 'Multi-Topic Track',
        rule: 'Allows BOTH Parliament AND State Legislatures (within List competence) to create multi-tier Tribunals for Taxes, Foreign Exchange, Labour Disputes, Land Reforms, Elections, Essential Goods, Urban Ceiling.',
        callouts: [
          'Unlike 323A, 323B permits hierarchy of appellate tribunals (e.g. NCLT -> NCLAT / ITAT)',
          'Tribunals Reforms Act 2021 consolidated film/IPAB panels back to HCs',
          'Independence safeguards struck down executive control in Madras Bar Assn (2014, 2020, 2021)'
        ],
        landmarkCase: 'Madras Bar Association v. Union of India (2014 & 2021)',
        examTrap: 'CHECK 3 INVARIANT DIFFERENCES: 323A = Services ONLY + Parliament ONLY + NO Hierarchy; 323B = Any Listed Subject + Both Parl/State + Hierarchy Allowed!'
      , colorKey: 'violet'
      },
      {
        id: 'tr-ckumar',
        badge: 'CHANDRA KUMAR 1997 (7J)',
        title: 'Struck Down Art 323A(2)(d) & 323B(3)(d) Review Bar',
        subtitle: 'HC Division Bench Mandatory Intermediate Appellate Filter',
        tag: 'Basic Structure Held',
        edgeLabel: 'HC Filter',
        rule: '7-Judge Unanimous Bench held judicial review under Arts 226/227 (HC) and Art 32 (SC) IS INVIOLABLE BASIC STRUCTURE. Tribunals supplement (never supplant!) High Courts.',
        callouts: [
          'Tribunal can examine vires of parent/other statutes EXCEPT its own enabling statute!',
          'Aggrieved litigant CANNOT bypass HC directly to SC via Art 136 — MUST first go to DIVISION BENCH (2 Judges) of High Court!',
          'Single Judge of HC CANNOT hear appeal against Tribunal orders'
        ],
        landmarkCase: 'L. Chandra Kumar v. Union of India (1997) 7-Judge Bench',
        examTrap: 'SHARP APPEAL RULE: CAT / Tribunal Order -> High Court DIVISION BENCH (Art 226/227) -> Supreme Court (Art 136)!'
      , colorKey: 'emerald'
      },
      {
        id: 'tr-indep',
        badge: 'ROGER MATHEW & MBA',
        title: 'Executive Capture Shield (Tenure & Selection)',
        subtitle: 'Min 5-Yr Term + Equal Search Panel Voting Power',
        tag: 'Rule of Law Guard',
        edgeLabel: 'Safeguard',
        rule: 'SC struck down short 3-yr terms & Executive-dominated search committees in Rojer Mathew (2019) & Madras Bar Assn (2021): minimum 4–5 yr stable tenure & judicial casting vote mandatory.',
        callouts: [
          'Chairpersons & Members cannot rely on Secretary’s administrative favours',
          'Separate National Tribunals Commission (NTC) mandated by SC',
          'Technical Members cannot outnumber Judicial Members on Benches deciding pure law'
        ],
        landmarkCase: 'Rojer Mathew (2019) & Madras Bar Association (2021)',
        examTrap: 'Note: Parliament CANNOT bypass L. Chandra Kumar Basic Structure simply by enacting Money Bills re-barring HC jurisdiction!'
      , colorKey: 'rose'
      }
    ]
  },
  {
    id: 'curative-review-art137',
    title: 'Judicial Finality Chain: Appeal -> Art 137 Review -> Rupa Hurra Curative Petition',
    category: 'Appellate & Review Ladder',
    track: 'Judiciary & Doctrines',
    articles: 'Articles 132–137 & 145',
    summary: 'Finality pipeline in the Supreme Court tracing Ordinary/Constitutional Appeals (132–136), Review Petitions within 30 days (137), and last-resort Curative Remedies (142).',
    topology: 'cycle-sequence',
    rootLabel: 'SC FINALITY LADDER',
    rootSub: 'Arts 132–137 + Rupa Hurra 2002',
    edgeFlowTag: 'FINAL REMEDIES',
    footerRule: 'No statute provides "Curative Petition" — Rupa Ashok Hurra (2002 5-Judge) forged it from Article 137 + Article 142 Complete Justice for gross miscarriage of justice!',
    nodes: [
      {
        id: 'app-132-136',
        badge: 'STAGE 1 · ARTS 132–136',
        title: 'Constitutional, Civil, Criminal & SLP Appeals',
        subtitle: 'Art 134A Certificate vs Art 136 Discretionary Leave',
        tag: 'Primary Appeal',
        edgeLabel: 'Judgment',
        rule: 'Appeals arrive under Art 132 (Constitutional Law), Art 133 (Civil General Importance — 30th Amd removed Rs 20,000 limit!), Art 134 (Criminal Acq -> Death/Life), or Art 136 plenary SLP.',
        callouts: [
          'Art 134A (44th Amd): HC decides Oral/Application Certificate IMMEDIATELY upon judgment delivery',
          'Constitution Bench hearing Art 132/143 requires MINIMUM 5 Judges (Art 145(3))!',
          'Art 141 binds all lower Indian courts ("ratio decidendi", NOT obiter/per incuriam)'
        ],
        landmarkCase: 'Bengal Immunity (1955) — SC itself NOT bound by own earlier ruling',
        examTrap: 'How many Judges minimum to decide a substantial question of Constitutional interpretation under Art 145(3)? FIVE JUDGES minimum!'
      , colorKey: 'sky'
      },
      {
        id: 'rev-137',
        badge: 'STAGE 2 · ART 137',
        title: 'Review Petition (Within 30 Days)',
        subtitle: 'Same Judges • Error Apparent on Face of Record',
        tag: 'In-Chamber Rule',
        edgeLabel: '< 30 Days',
        rule: 'SC reviews its own order under Art 137 + Art 145 rules STRICTLY within 30 days ONLY on: (a) Discovery of crucial new evidence, (b) Mistake/error apparent on record, OR (c) Sufficient analogous reason.',
        callouts: [
          'Heard BY CIRCULATION in Chambers (NO automatic oral hearing!)',
          'EXCEPTION: Mohd. Arif (2014 5-Judge) held Death Penalty Review Petitions MUST get mandatory 30-min Open Court Oral Hearing!',
          'Cannot re-argue merits as an appeal in disguise'
        ],
        landmarkCase: 'Mohd. Arif v. Registrar, Supreme Court (2014 Death Review Rule)',
        examTrap: 'PRELIMS SPECIALTY: Review petitions are decided silently in Judges’ Chambers by circulation — ONLY Death-Sentence Reviews guarantee open-court oral argument!'
      , colorKey: 'violet'
      },
      {
        id: 'cur-2002',
        badge: 'STAGE 3 · RUPA HURRA',
        title: 'Curative Petition (Absolute Final Filter)',
        subtitle: '3 Senior-Most Judges + Authors of Impugned Ruling',
        tag: 'Art 142 Origin (2002)',
        edgeLabel: 'After Review Dismissed',
        rule: 'Created by 5-Judge Bench in Rupa Ashok Hurra (2002): heard ONLY AFTER Review Petition dismissal via Art 137 when natural justice (audi alteram) OR judge bias caused manifest injustice.',
        callouts: [
          'MUST carry certification from a Senior Advocate justifying curative grounds',
          'Circulated before 3 senior-most SC Judges (incl. CJI) + original bench judges still serving',
          'Recent Landmark: DMRC v. Delhi Airport Metro (2024) overturned Rs 8,000 Cr award via Curative Petition!'
        ],
        landmarkCase: 'Rupa Ashok Hurra v. Ashok Hurra (2002) & DMRC Curative (2024)',
        examTrap: 'Is Curative Petition explicitly named anywhere in Article 137? NO — evolved by SC under inherent Art 142 Complete Justice jurisdiction in 2002!'
      , colorKey: 'rose'
      },
      {
        id: 'clex-72',
        badge: 'STAGE 4 · ART 72 BRIDGE',
        title: 'Mercy Petition Outside Judicial Finality',
        subtitle: 'Co-Extensive Constitutional Clemency Track',
        tag: 'Independent Executive Aid',
        edgeLabel: 'Art 72 / 161',
        rule: 'Separate from judicial review ladder: convict may petition President/Governor on Cabinet advice. Maru Ram & Kehar Singh confirm Art 72 is independent re-evaluation of mercy, not judicial appeal.',
        callouts: [
          'Inordinate unexplained delay on Art 72 justifies Art 32 commutation (Shatrughan Chauhan 2014)',
          'Epuru Sudhakar confirms judicial review for non-application of mind/bias',
          'Closes circle of Constitutional remedies & mercy'
        ],
        landmarkCase: 'Shatrughan Chauhan v. Union of India (2014)',
        examTrap: 'Rejection of Mercy Petition under Art 72 CAN still face Art 32/226 review if delayed inexplicably or tainted by political mala fides (Epuru Sudhakar 2006)!'
      , colorKey: 'emerald'
      }
    ]
  },
  {
    id: 'pil-epistolary-locus-standi',
    title: 'Public Interest Litigation (PIL) Mechanics: Relaxed Locus & Continuing Mandamus',
    category: 'Judicial Access Revolution',
    track: 'Judiciary & Doctrines',
    articles: 'Articles 32 & 226',
    summary: 'Hub architecture illustrating how 1980s Supreme Court dismantled rigid Roman locus standi to enable Postcard/Epistolary Writs, Amicus Curiae, and Continuing Mandamus.',
    topology: 'hub-spoke',
    rootLabel: 'PIL ARCHITECTURE',
    rootSub: 'Pro Bono Publico • Bhagwati & Krishna Iyer JJ',
    edgeFlowTag: 'ACCESS JUSTICE',
    footerRule: 'PIL is strictly restricted to genuine public injury (NO personal, service, tax evasion or publicity-seeking busybody petitions — Balwant Singh Chaufal 2010 guidelines!).',
    nodes: [
      {
        id: 'pil-locus',
        badge: 'ORIGIN · 1979–81',
        title: 'Relaxed Locus Standi (Representative Action)',
        subtitle: 'Any Public-Spirited Citizen Speaks for Voiceless',
        tag: 'Hussainara + S.P. Gupta',
        edgeLabel: 'No Injury Needed',
        rule: 'Normally ONLY aggrieved victim can sue; in Hussainara Khatoon (1979 undertrials) & S.P. Gupta (1981), SC allowed third parties bona fide acting on behalf of indigent/disadvantaged groups.',
        callouts: [
          'Breaks colonial adversarial straitjacket into non-adversarial social inquiry',
          'Bypasses poverty, illiteracy & fear barriers to Supreme Court',
          'Wait: Service / disciplinary matters are STRICTLY EXCLUDED from PIL (Duryodhan Sahu)!'
        ],
        landmarkCase: 'Hussainara Khatoon (1979) & Mumbai Kamgar Sabha (1976)',
        examTrap: 'Service matters (government employee transfers/promotions) CAN NEVER be challenged through a Public Interest Litigation!'
      , colorKey: 'sky'
      },
      {
        id: 'pil-epist',
        badge: 'EPISTOLARY · LETTERS',
        title: 'Epistolary Jurisdiction (Postcard / Telegram)',
        subtitle: 'Letters to Judge Treated Directly as Art 32 Writs',
        tag: 'Zero Court Fee Formality',
        edgeLabel: 'Letter = Petition',
        rule: 'Letters, postcards or newspaper reports highlighting human rights abuse (Bandhua Mukti Morcha bonded labourers; Sunil Batra prisoner torture) treated automatically as Writ Petitions.',
        callouts: [
          'Court appoints Socio-Legal Fact-Finding Commissions to gather ground proof',
          'SC PIL Cell screens letters under 1988 Guidelines before bench listing',
          'Converted Art 32(1) ("appropriate proceedings") into flexible citizen gateway'
        ],
        landmarkCase: 'Bandhua Mukti Morcha v. Union of India (1984)',
        examTrap: 'Who is known as the Father of Indian PIL? Justice P.N. Bhagwati (alongside pioneer Justice V.R. Krishna Iyer)!'
      , colorKey: 'emerald'
      },
      {
        id: 'pil-mandamus',
        badge: 'CONTINUING MANDAMUS',
        title: 'Continuing Mandamus & Structural Remedies',
        subtitle: 'Interim Directions + Periodic Compliance Monitoring',
        tag: 'Vineet Narain Model',
        edgeLabel: 'Live Tracking',
        rule: 'Instead of disposing a petition in one day, SC keeps petition alive for years issuing incremental monitoring directions (e.g. CBI Jain Hawala in Vineet Narain; Godavarman forests; CNG Delhi pollution).',
        callouts: [
          'Appoints independent Amicus Curiae (Friend of Court) to brief non-partisan law',
          'Forges constitutional compensation / guidelines (Vishaka Guidelines 1997)',
          'Risk: Judicial Overreach when courts enter executive budgeting or policy'
        ],
        landmarkCase: 'Vineet Narain v. Union of India (1998)',
        examTrap: 'Watch distinction: Continuing Mandamus issues monitoring directions over executive lapses; Judicial Overreach happens if courts rewrite statutes directly (though Vishaka stepped into void under Art 141).'
      , colorKey: 'violet'
      },
      {
        id: 'pil-abuse',
        badge: 'CHAUFAL (2010) CURBS',
        title: 'Fines Against Publicity / Private Interest Litigation',
        subtitle: 'Exemplary Costs & Credentials Mandatory',
        tag: 'Blackmail Safeguard',
        edgeLabel: 'Chaufal Filter',
        rule: 'In State of Uttaranchal v. Balwant Singh Chaufal (2010), SC ordered all HCs to frame PIL rules verifying petitioner credentials, bona fides, zero oblique motive & heavy exemplary costs for abuse.',
        callouts: [
          'Distinguished "Public Interest Litigation" from "Private/Publicity/Politics Interest Litigation"',
          'Must annex authentic empirical data, not unverified clippings',
          'Preserves PIL credibility & reduces docket congestion'
        ],
        landmarkCase: 'State of Uttaranchal v. Balwant Singh Chaufal (2010)',
        examTrap: 'Notice: A PIL can ONLY be filed in HIGH COURT (Art 226) or SUPREME COURT (Art 32) — Subordinate/District Civil Courts CANNOT hear PILs under CPC!'
      , colorKey: 'rose'
      }
    ]
  },
  {
    id: 'doctrine-pith-and-substance',
    title: 'Doctrines of Pith & Substance vs Colourable Legislation',
    category: 'Federal Legislative Interpretation',
    track: 'Judiciary & Doctrines',
    articles: 'Article 246 & 7th Schedule',
    summary: 'Equilibrium scale saving statutes from accidental federal overlap (Pith & Substance) while striking down disguised legislative encroachment (Colourable Legislation).',
    topology: 'balance-beam',
    rootLabel: '7TH SCHEDULE LEGISLATIVE COMPETENCE SCALE',
    rootSub: 'True Character ("What Is It Really About?") vs Disguised Competence Fraud',
    edgeFlowTag: 'ART 246 FILTER',
    footerRule: 'BOTH doctrines concern LEGISLATIVE COMPETENCE under Art 246 (NOT legislative mala fides!): Colourable = "Cannot do indirectly what Constitution bars doing directly."',
    nodes: [
      {
        id: 'dps-pith',
        badge: 'SHIELD · PITH & SUBSTANCE',
        title: 'Look to True Substance & Object, Not Incidental Spillover',
        subtitle: 'Saves State/Union Laws Crossing List Boundaries',
        tag: 'Prafulla Kumar (PC 1947)',
        rule: 'If a legislature’s law in its "pith and substance" falls squarely inside its assigned List (Union I / State II / Concurrent III), it remains VALID even though it incidentally trenches upon another List!',
        callouts: [
          'Prafulla Kumar Mukherjee (1947): Bengal Moneylenders Act valid under State List despite touching Negotiable Instruments (List I)',
          'State of Bombay v. F.N. Balsara (1951): Bombay Prohibition Act upheld under State List Intoxicating Liquors despite List I import spillover',
          'State of Rajasthan v. G. Chawla (1959): Loudspeaker volume ban upheld under Public Health (List II) despite Broadcasting (List I)'
        ],
        landmarkCase: 'Prafulla Kumar (1947) & State of Bombay v. F.N. Balsara (1951)',
        examTrap: 'Why does India need Pith & Substance? Because 7th Schedule entries are NOT watertight mathematical boxes; rigid invalidation would paralyze law-making!'
      , colorKey: 'emerald'
      },
      {
        id: 'dps-incid',
        badge: 'ANCILLARY TEST',
        title: 'Incidental Encroachment Extent Reveals Motive',
        subtitle: 'Degree of Invasion Tests Bona Fide Character',
        tag: 'Not Quantitative Cap',
        rule: 'Extent of encroachment into the forbidden List matters strictly as evidence of whether legislature genuinely stayed in its List or tried a sham takeover.',
        callouts: [
          'Harmonizes with List entries receiving widest liberal construction (United Provinces v. Atiqa Begum)',
          'Applies ALSO within Concurrent List checks & GST entries',
          'Works hand-in-hand with Harmonious Construction between List I & List II'
        ],
        landmarkCase: 'State of Karnataka v. Ranganatha Reddy (1977)',
        examTrap: 'Pith & Substance is a CONSERVING doctrine (saves laws); Colourable Legislation is an INVALIDATING doctrine (strikes down disguised fraud on competence)!'
      , colorKey: 'sky'
      },
      {
        id: 'dps-colorable',
        badge: 'SWORD · COLOURABLE LEG.',
        title: 'Disguised Encroachment (Quando Aliquid Prohibetur)',
        subtitle: 'Competence Fraud Under Art 246 — ZERO Motive Inquiry!',
        tag: 'Gajapati Narayan Deo 1953',
        rule: '"What cannot be done directly cannot also be done indirectly." When legislature lacks Entry competence yet dresses up a bill in deceptive wording to appear competent, courts pierce the veil and strike it down.',
        callouts: [
          'K.C. Gajapati Narayan Deo v. State of Orissa (1953): Seminal 5-Judge ruling clarifying Colourable Legislation has NOTHING to do with bona fides/mala fides of MPs!',
          'Even an evil-motivated statute IS valid if Legislature had Art 246 competence; even a saintly statute FAILS if it lacked competence!',
          'D.C. Wadhwa (1987): Repeated Bihar Governor Ordinance repromulgation held "fraud on Constitution" / colourable exercise'
        ],
        landmarkCase: 'K.C. Gajapati Narayan Deo v. State of Orissa (1953)',
        examTrap: 'MOST MISUNDERSTOOD RULE IN CONSTITUTION: "Colourable Legislation" NEVER tests whether Parliament had good or bad intentions — it ONLY tests COMPETENCE disguised in sham form!'
      , colorKey: 'rose'
      },
      {
        id: 'dps-ancillary',
        badge: 'ANCILLARY POWERS',
        title: 'Doctrine of Implied & Ancillary Powers',
        subtitle: 'Power to Legislate Tax Includes Penalties Against Evasion',
        tag: 'Entry Elasticity',
        rule: 'Grant of plenary legislative power over an Entry carries every ancillary/incidental step reasonably necessary to enforce that law effectively (e.g. search/seizure or penalty provisions inside a Tax Act).',
        callouts: [
          'R.S. Joshi v. Ajit Mills (1977): Forfeiture of illegal sales tax upheld as ancillary power',
          'Prevents sterile literal reading of 7th Schedule subject nouns',
          'Balanced against List I Entry 97 Residuary Power of Parliament'
        ],
        landmarkCase: 'R.S. Joshi v. Ajit Mills Ltd. (1977)',
        examTrap: 'Check List Entries 97 (List I Union) & Art 248: Unlike US/Australia (States keep residuary), Indian PARLIAMENT holds exclusive Residuary legislative + taxation power!'
      , colorKey: 'violet'
      }
    ]
  },
  {
    id: 'doctrine-harmonious-construction',
    title: 'Doctrines of Harmonious Construction & Art 254 Repugnancy',
    category: 'Statutory & Constitutional Interpretation',
    track: 'Judiciary & Doctrines',
    articles: 'Articles 254(1), 254(2) & Lists',
    summary: 'Balances conflicting constitutional provisions (Parts III vs IV; List I vs List II; Arts 105 vs 194) and unpacks the 3-step Deep Chand / Hoechst Repugnancy test on Concurrent List clashes.',
    topology: 'balance-beam',
    rootLabel: 'CONFLICT RESOLUTION: HARMONY vs REPUGNANCY',
    rootSub: 'Step 1: Attempt Reconciliation (Harmony) -> Step 2: Check Competence -> Step 3: Art 254',
    edgeFlowTag: 'REPUGNANCY TEST',
    footerRule: 'Art 254(2) Magic Reversal: If State Concurrent-List law gets PRESIDENTIAL ASSENT, it PREVAILS IN THAT STATE over earlier Parliament law — yet Parliament can STILL pass a later law overriding it!',
    nodes: [
      {
        id: 'dh-harmony',
        badge: 'FIRST RULE · HARMONY',
        title: 'Harmonious Construction (Neither Rendered Dead)',
        subtitle: 'Read Statute/Constitution as Integrated Organic Whole',
        tag: 'Venkataramana Devaru 1958',
        rule: 'When two constitutional clauses or List entries clash, courts avoid head-on collision and interpret both so EACH retains meaningful effect without reducing one to "useless lumber".',
        callouts: [
          'Classic Venkataramana Devaru (1958): Harmonized Art 25(2)(b) temple entry reform WITH Art 26(b) denomination exclusionary rites on special festivals',
          'Minerva Mills (1980): Harmonized FR (Part III) & DPSP (Part IV) as two chariot wheels',
          'Searchlight Case (1959): Harmonized Art 19(1)(a) & Art 194(3) via specific-over-general lex specialis'
        ],
        landmarkCase: 'Venkataramana Devaru v. State of Mysore (1958)',
        examTrap: 'Courts apply Harmonious Construction FIRST to reconcile seemingly clashing provisions before declaring any invalidity or repugnancy!'
      , colorKey: 'emerald'
      },
      {
        id: 'dh-repug1',
        badge: 'ART 254(1) · LIST III',
        title: 'Repugnancy Applies Strictly Inside Concurrent List',
        subtitle: 'Union Law Prevails Over Conflicting State Concurrent Law',
        tag: 'Three Deep Chand Tests',
        rule: 'Article 254 applies ONLY when BOTH Union & State laws occupy the SAME Concurrent List (List III) field (Hoechst Pharmaceuticals 1983)! If State law sits purely in List II, Art 254 does NOT apply (check Art 246 non-obstante instead!).',
        callouts: [
          'Deep Chand (1959) 3 Tests for Repugnancy: (1) Direct irreconcilable conflict ("Obey one = break other"); (2) Parliament intended "exhaustive complete code" occupying the field; (3) Both laws cover identical subject-matter',
          'Extent of repugnancy alone becomes void (severability applied)',
          'Pre-existing law before 1950 also covered by 254(1)'
        ],
        landmarkCase: 'Deep Chand (1959) & M. Karunanidhi v. Union of India (1979)',
        examTrap: 'NUMBER ONE ART 254 TRAP: Art 254 applies ONLY to CONCURRENT LIST (List III) clashes! Clashes between List I & List II fall under Art 246(1) & Pith & Substance!'
      , colorKey: 'sky'
      },
      {
        id: 'dh-repug2',
        badge: 'ART 254(2) · ASSENT',
        title: 'Presidential Assent Override & Parliamentary Counter-Override',
        subtitle: 'Art 254(2) Exception + Art 254(2) Proviso!',
        tag: 'Zaverbhai Rule',
        rule: 'If State Legislature’s Concurrent-List Bill is reserved by Governor for PRESIDENT and receives PRESIDENTIAL ASSENT, the State law PREVAILS INSIDE THAT STATE despite prior repugnant Parliamentary law.',
        callouts: [
          'HOWEVER under 254(2) PROVISO: Parliament retains power to enact a SUBSEQUENT law adding to, amending, varying or REPEALING that President-assented State law! (Zaverbhai Amaidas 1954)',
          'Applies strictly within territorial limits of that consenting State',
          'Requires express reservation specifying repugnancy to President under Art 254(2)!'
        ],
        landmarkCase: 'Zaverbhai Amaidas v. State of Bombay (1954)',
        examTrap: 'Wait: Even if President approved a State law under Art 254(2), CAN Parliament later amend or REPEAL that State Act directly? YES — explicitly allowed by the Proviso to Art 254(2)!'
      , colorKey: 'rose'
      },
      {
        id: 'dh-246-non',
        badge: 'ART 246(1) · OVERRIDE',
        title: 'Federal Non-Obstante Hierarchy (List I > III > II)',
        subtitle: '"Notwithstanding Anything in Clauses (2) and (3)"',
        tag: 'Clear Precedence Ladder',
        rule: 'If Pith & Substance genuinely leaves an irreconcilable collision between Union List (List I), Concurrent List (List III) & State List (List II), Art 246 enforces strict supremacy: List I > List III > List II!',
        callouts: [
          'Union List (List I) carries supreme overriding non-obstante priority over BOTH III & II',
          'Concurrent List (List III) carries non-obstante priority over State List (List II)',
          'Applies solely when harmonious reading fails completely (Hoechst 1983)'
        ],
        landmarkCase: 'Hoechst Pharmaceuticals v. State of Bihar (1983)',
        examTrap: 'Remember the federal hierarchy rule: Union List beats Concurrent List, Concurrent List beats State List!'
      , colorKey: 'violet'
      }
    ]
  },
  {
    id: 'doctrine-territorial-nexus',
    title: 'Doctrine of Territorial Nexus & Extra-Territorial Power (Art 245 & GVK 2011)',
    category: 'Territorial Reach of Laws',
    track: 'Judiciary & Doctrines',
    articles: 'Article 245(1) & (2)',
    summary: 'Radial map contrasting Parliament’s Art 245(2) extra-territorial immunity (subject to GVK real nexus with India!) against State Legislatures strict intra-State territorial nexus standard.',
    topology: 'hub-spoke',
    rootLabel: 'ARTICLE 245 NEXUS',
    rootSub: 'Union (Global w/ India Link) vs State (Nexus Only)',
    edgeFlowTag: 'NEXUS STANDARD',
    footerRule: 'Under Art 245(2), NO law of Parliament is invalid merely for extra-territorial operation — YET GVK Industries (2011 5-Judge) holds Parliament cannot pass laws with ZERO real nexus to India!',
    nodes: [
      {
        id: 'tn-union',
        badge: 'ART 245(2) · PARLIAMENT',
        title: 'Parliament Extra-Territorial Reach & GVK Limit',
        subtitle: 'Binds Indian Citizens / Ships / Aircraft Abroad + Nexus Guard',
        tag: 'GVK Industries 2011 (5J)',
        edgeLabel: 'Union Global',
        rule: 'Only Parliament (NEVER State Legislatures!) can legislate for persons/property/crimes outside India (e.g. Income Tax, BNS offences abroad by citizens). GVK (2011) clarified it still MUST have a genuine nexus with India/national interest.',
        callouts: [
          'GVK Industries v. ITO (2011 5-Judge): Parliament cannot legislate purely on foreign actors with ZERO impact/nexus to India',
          'Binds Indian citizens & foreign entities doing business impacting India (IT Act, FEMA, PMLA)',
          'Enforceability within India stays binding on Indian courts even if foreign execution lags'
        ],
        landmarkCase: 'GVK Industries Ltd. v. Income Tax Officer (2011) 5-Judge Bench',
        examTrap: 'Can a State Assembly ever claim extra-territorial immunity under Art 245(2)? NEVER — Art 245(2) saves ONLY PARLIAMENT laws, while States MUST pass strict Territorial Nexus!'
      , colorKey: 'sky'
      },
      {
        id: 'tn-rmdc',
        badge: 'RMDC (1957) · STATES',
        title: 'Twin-Prong State Territorial Nexus Test',
        subtitle: '(1) Real & Not Illusory Connection + (2) Liability Relatable to Connection',
        tag: 'Cross-Border Tax Standard',
        edgeLabel: '2-Prong State Test',
        rule: 'State law can tax/regulate an out-of-state entity ONLY IF: (1) Territorial connection between State and thing sought to be taxed is real/sufficient, not illusory; AND (2) Liability imposed bears direct relation to that nexus.',
        callouts: [
          'State of Bombay v. RMDC (1957): Bangalore newspaper prize competition printed/sold in Bangalore, YET wide circulation/collection in Bombay supplied sufficient nexus for Bombay tax!',
          'Tata Iron & Steel (1958): Bihar could tax sales even when goods moved if core sale ingredients occurred inside Bihar (prior to CST/GST limits!)',
          'Wallace Bros (1948 PC): Majority profit earned in India created nexus to tax British firm'
        ],
        landmarkCase: 'State of Bombay v. R.M.D. Chamarbaugwala (1957)',
        examTrap: 'State law is NOT automatically void merely because part of transaction spills outside border — if RMDC 2-prong nexus passes, State tax/law stands!'
      , colorKey: 'emerald'
      },
      {
        id: 'tn-limitations',
        badge: 'ART 286 & GST LOCK',
        title: 'Constitutional Restraints on State Cross-Border Taxes',
        subtitle: 'Art 286 Bars States Taxing Imports/Exports & Inter-State Supply',
        tag: '6th & 101st Amd',
        edgeLabel: 'Art 286 Curbs',
        rule: 'Even if territorial nexus exists, Art 286 forbids States from taxing outside-state sales or international imports/exports (Parliament levies IGST under Art 269A!).',
        callouts: [
          'IGST on inter-state supply collected exclusively by Union & apportioned via GST Council',
          '5th & 6th Schedule Governors also hold territorial power to skip/modify Parliamentary/State laws for Tribal Areas!',
          'High Seas / Territorial Waters belong to Union (Art 297!)'
        ],
        landmarkCase: 'Articles 286, 269A & 297',
        examTrap: 'Check Art 297: Minerals, lands & resources under India’s Territorial Waters (12 NM), Continental Shelf & EEZ (200 NM) vest SOLELY in the UNION OF INDIA (never coastal States)!'
      , colorKey: 'rose'
      },
      {
        id: 'tn-excess-deleg',
        badge: 'ART 245 + IN RE DELHI',
        title: 'Limits on Delegated / Subordinate Legislation',
        subtitle: 'Cannot Delegate "Essential Legislative Function"',
        tag: 'In re Delhi Laws 1951',
        edgeLabel: 'Delegation Rule',
        rule: 'In re Delhi Laws Act (1951 7J): Legislature can delegate procedural details, conditional effective dates & rules, BUT CANNOT abdicate essential legislative policy-making nor allow Executive to repeal core Act unchecked.',
        callouts: [
          'Subordinate legislation faces DOUBLE challenge: ultra vires Parent Act AND ultra vires Constitution!',
          'Includes Henry VIII clauses (narrowly scrutinized by courts)',
          'Subordinate rules CANNOT levy tax without express parent statute sanction'
        ],
        landmarkCase: 'In re Delhi Laws Act, 1912 (1951) 7-Judge Bench',
        examTrap: 'Executive CANNOT create taxes or criminal offences through pure notification/delegated rule unless expressly authorized by clear Legislative policy!'
      , colorKey: 'violet'
      }
    ]
  },
  {
    id: 'doctrine-prospective-overruling',
    title: 'Doctrines of Prospective Overruling, Reading Down & Art 32 Res Judicata',
    category: 'Judicial Remedial Techniques',
    track: 'Judiciary & Doctrines',
    articles: 'Arts 32, 141 & 142',
    summary: 'Illustrates how Supreme Court alone limits overruling prospectively (Golaknath 1967), saves statutes via Reading Down (Navtej), and prevents infinite re-litigation under Art 32.',
    topology: 'flowchart',
    rootLabel: 'JUDICIAL TECHNIQUES',
    rootSub: 'Preserve Certainty & Constitutionality',
    edgeFlowTag: 'SC REMEDIAL CRAFT',
    footerRule: 'IMPORTANT HIERARCHY RULE: ONLY THE SUPREME COURT (NOT High Courts under Art 226!) can invoke the Doctrine of Prospective Overruling (Golaknath 1967)!',
    nodes: [
      {
        id: 'dpo-prosp',
        badge: 'GOLAKNATH (1967) · SC ONLY',
        title: 'Doctrine of Prospective Overruling',
        subtitle: 'Old Wrong Precedent Void ONLY Going Forward (Protects Chaos)',
        tag: 'Wait: US Origin (Cardozo)',
        edgeLabel: 'Future Only',
        rule: 'Normally overruling works retrospectively from inception (Blackstonian rule). Subba Rao CJI imported American Prospective Overruling in Golaknath (1967) so invalidated past Constitutional Amendments remained untouched while future ones stayed barred.',
        callouts: [
          '3 Golaknath Limits: (1) Applies ONLY to Constitutional matters (later expanded carefully to Mandal 1992 / Mineral Tax 2024!), (2) Invoked ONLY by SUPREME COURT, (3) Scope of retro-relief fixed by SC itself',
          'MADA v. SAIL (2024 9-Judge): Applied prospective recovery cutoff (April 2005) on billions in past State mining taxes!',
          'Indra Sawhney (1992): Made Art 16(4) non-promotion ruling effective 5 years prospectively!'
        ],
        landmarkCase: 'I.C. Golak Nath (1967) & MADA v. SAIL (Aug 2024 9-Judge)',
        examTrap: 'NUMBER ONE TRAP: Can a High Court declare its judgment will operate ONLY "prospectively"? NO — ONLY the Supreme Court possesses Prospective Overruling jurisdiction!'
      , colorKey: 'rose'
      },
      {
        id: 'dpo-readdown',
        badge: 'READING DOWN · PRESERVE',
        title: 'Reading Down vs Reading In',
        subtitle: 'Narrow Statutory Meaning to Keep Act Constitutional',
        tag: 'Navtej / Kedar Nath',
        edgeLabel: 'Save Statute',
        rule: 'Before striking down an entire provision, courts presume constitutionality and narrow ambiguous wording ("Read Down") so it complies with Part III — applied in Kedar Nath Singh (1962 Sedition -> incitement to violence ONLY) & Navtej Johar (2018).',
        callouts: [
          'Kedar Nath Singh (1962): Saved Sec 124A IPC by reading down sedition solely to violent incitement',
          'Navtej Singh Johar (2018): Read down Sec 377 IPC excluding consenting adults',
          'Courts shy away from "Reading In" new words unless minimal severance fails'
        ],
        landmarkCase: 'Kedar Nath Singh (1962) & Navtej Singh Johar (2018)',
        examTrap: 'If statutory text is unambiguously unconstitutional with zero scope for narrow construction, courts CANNOT rewrite it — must strike down!'
      , colorKey: 'emerald'
      },
      {
        id: 'dpo-resjud',
        badge: 'DARYAO (1961) · FINALITY',
        title: 'Res Judicata Between Art 226 & Art 32',
        subtitle: 'Cannot File Art 32 After HC Dismissed Art 226 on Merits!',
        tag: 'Appeal Under 136 Instead',
        edgeLabel: 'Finality Bar',
        rule: 'In Daryao v. State of U.P. (1961), SC held if High Court dismissed an Art 226 petition on MERITS after hearing, citizen CANNOT file a fresh Art 32 writ in SC on same issue — must Appeal HC order via Art 136! (EXCEPTION: Habeas Corpus detention writs!)',
        callouts: [
          'Technical dismissal (laches / alternate remedy / withdrawal) does NOT trigger Res Judicata bar',
          'CRITICAL EXCEPTION: HABEAS CORPUS is IMMUNE from strict Res Judicata (Ghulam Sarwar 1967)!',
          'Constructive Res Judicata also restricts piecemeal split claims'
        ],
        landmarkCase: 'Daryao v. State of U.P. (1961) & Ghulam Sarwar (1967)',
        examTrap: 'GOLD EXAM DISTINCTION: HC dismisses Art 226 writ on merits -> Art 32 barred by Res Judicata EXCEPT when the writ is HABEAS CORPUS (unlawful detention)!'
      , colorKey: 'sky'
      },
      {
        id: 'dpo-perinc',
        badge: 'STARE DECISIS & BENCH RULE',
        title: 'Binding Bench Hierarchy (Pranay Sethi / Trimurthi)',
        subtitle: 'Smaller Bench CANNOT Disagree With Larger Bench!',
        tag: 'Judicial Discipline',
        edgeLabel: 'Co-Equal Check',
        rule: 'Under Art 141, smaller bench MUST follow larger bench; co-equal bench MUST either follow equal bench OR refer disagreement to Chief Justice for LARGER BENCH (Pranay Sethi 2017).',
        callouts: [
          'Per Incuriam = Judgment delivered ignoring a direct binding statute or larger binding precedent (not binding!)',
          'Sub Silentio = Point passing silently without argument holds zero precedent value',
          'Shrimanth Balasaheb / Keshav Mills outline rare grounds to convene larger review'
        ],
        landmarkCase: 'National Insurance Co v. Pranay Sethi (2017 5J)',
        examTrap: 'Can a 3-Judge SC Bench explicitly overrule an earlier 3-Judge SC Bench? NO — must refer the conflict to a 5-Judge Bench via CJI!'
      , colorKey: 'violet'
      }
    ]
  },
  {
    id: 'doctrine-waiver-pleasure-310',
    title: 'Doctrines of Non-Waiver of FRs (Basheshar Nath) & Constitutional Pleasure (310)',
    category: 'Foundational Constitutional Doctrines',
    track: 'Judiciary & Doctrines',
    articles: 'Articles 13, 14, 310 & 311',
    summary: 'Matrix contrasting US Waiver vs Indian Non-Waiver of Fundamental Rights alongside Royal Pleasure inheritance constrained by Art 311 natural justice.',
    topology: 'matrix-split',
    rootLabel: 'NON-WAIVER (PART III) vs PLEASURE DOCTRINE (PART XIV)',
    rootSub: 'State Bound Forever Against FR Waiver • Ministers/Civil Servants Pleasure Limits',
    edgeFlowTag: 'WAIVER vs PLEASURE',
    footerRule: 'Basheshar Nath (1959 5J): Fundamental Rights are NOT mere personal bargains — Indian citizens CANNOT contract away or waive any Fundamental Right (unlike US Constitution!).',
    nodes: [
      {
        id: 'dwp-waiver',
        badge: 'BASHEESHAR NATH (1959)',
        title: 'No Waiver of Fundamental Rights (All Part III)',
        subtitle: 'Art 13(2) Direct Prohibition Binds State Absolutely',
        tag: 'Differs From US Law',
        side: 'left',
        rule: 'Taxpayer who earlier agreed to Income Tax settlement under Section 8A challenged it once statute fell under Art 14. SC held even voluntary consent/waiver CANNOT validate State infringement of Part III.',
        callouts: [
          'US citizens CAN waive Fifth Amendment silence or jury rights; Indian citizens CANNOT waive Part III!',
          'Behram Khurshid (1955) initially said only non-public FRs non-waivable -> Basheshar Nath extended Non-Waiver cleanly across Part III (specifically Arts 14–21)',
          'Reason: Deep literacy & economic asymmetry in free India prevents coerced consent'
        ],
        landmarkCase: 'Basheshar Nath v. Commissioner of Income Tax (1959 5-Judge)',
        examTrap: 'Wait: What about STATUTORY or CONTRACTUAL legal rights outside Part III? Those CAN be waived (e.g., arbitration notice), ONLY Constitutional FUNDAMENTAL RIGHTS cannot!'
      , colorKey: 'emerald'
      },
      {
        id: 'dwp-estoppel',
        badge: 'PROMISSORY ESTOPPEL',
        title: 'Promissory Estoppel Against Government (Limitation)',
        subtitle: 'Govt Bound by Clear Reliance Unless Public Interest Demands',
        tag: 'Motilal Padampat 1979',
        side: 'left',
        rule: 'Where Government makes clear unequivocal promise knowing citizen changes position in reliance (e.g. tax holiday), Govt IS bound — UNLESS overriding public interest / statutory bar exists! (NEVER applies against LEGISLATURE!).',
        callouts: [
          'Promissory Estoppel binds EXECUTIVE action — NEVER stops Parliament/Assembly from passing laws!',
          'Wait: Legitimate Expectation gives fair hearing right, not substantive right against policy shift',
          'Cannot compel Govt to execute an ultra vires / illegal promise'
        ],
        landmarkCase: 'M.P. Sugar Mills v. State of U.P. (1979)',
        examTrap: 'CRITICAL EXAM CONTRAST: Can Promissory Estoppel stop Parliament from repealing a tax exemption by Act? NO — Estoppel binds ONLY Executive discretion, NEVER Legislation!'
      , colorKey: 'sky'
      },
      {
        id: 'dwp-pleasure',
        badge: 'ART 310 · ROYAL PREROGATIVE',
        title: 'Doctrine of Pleasure (Adapted From UK Crown)',
        subtitle: 'Defence Personnel Hold Pure Pleasure; Civil Servants Protected!',
        tag: 'Subject to Art 311',
        side: 'right',
        rule: 'Derived from UK Latin "durante bene placito" (Ministers, AG, Governors, Civil/Defence members hold office during President/Governor pleasure). In India, Art 310 is NOT absolute — explicitly checked by Art 311 for CIVIL posts!',
        callouts: [
          'Armed Forces / Civilian Defence Staff: Governed solely by Art 310 (ZERO Art 311 shield!)',
          'Civil Servants (IAS/IPS/IRS/State Civil): Protected by Art 311(1) Subordinate Bar & 311(2) Fair Inquiry!',
          'EXCLUDED from Pleasure altogether (independent security): SC/HC Judges, CAG, CEC, UPSC Chair & Members!'
        ],
        landmarkCase: 'Union of India v. Tulsiram Patel (1985 5-Judge)',
        examTrap: 'WHO HOLDS NO PLEASURE BAR? Defence personnel get ZERO Art 311 shield; SC/HC Judges, CAG, CEC & UPSC Members sit OUTSIDE Art 310 Pleasure completely!'
      , colorKey: 'rose'
      },
      {
        id: 'dwp-governor-pl',
        badge: 'B.P. SINGHAL (2010)',
        title: 'Governor / Election Comm. Arbitrary Sacking Shield',
        subtitle: '"Pleasure" Is Not Arbitrary Whim (Reasoned Inquiry Required)',
        tag: '5-Judge Constitutional Guard',
        side: 'right',
        rule: 'For constitutional heads like Governors holding Presidential pleasure (Art 156), B.P. Singhal (2010) barred en-masse political sackings upon ruling-party change — removal needs compelling constitutional/ethics reasons (except ideological sync!).',
        callouts: [
          'Difference in Art 324(5) CEC vs ECs: CEC gets SC-Judge parity protection; Other ECs depend on CEC recommendation (NOT presidential whim alone — TN Seshan 1995)',
          'Ministers serve purely political pleasure under Art 75(2)/164(1) (PM/CM discretion)',
          'Contractual civil servants enjoy notice/severance protection under Art 310(2)'
        ],
        landmarkCase: 'B.P. Singhal v. Union of India (2010)',
        examTrap: 'Note: For Judges, CAG & CEC, Constitution forbids "Pleasure"; only Ministers, AG/AdvG, Governors & Defence hold active Pleasure doctrine!'
      , colorKey: 'violet'
      }
    ]
  },
  {
    id: 'judicial-review-vs-activism',
    title: 'Judicial Review vs Judicial Activism vs Judicial Overreach & Restraint',
    category: 'Separation of Powers',
    track: 'Judiciary & Doctrines',
    articles: 'Arts 13, 32, 136, 142 & 226',
    summary: '4-tier normative spectrum distinguishing constitutionally mandated Judicial Review (Basic Structure) from PIL Judicial Activism and illegitimate Judicial Overreach.',
    topology: 'pyramid-hierarchy',
    rootLabel: 'JUDICIAL POWER SPECTRUM',
    rootSub: 'Review (Duty) -> Activism (Access) -> Overreach (Policy Breach)',
    edgeFlowTag: 'SEPARATION GUARD',
    footerRule: 'Judicial Review is EXPLICIT Basic Structure duty (Minerva Mills); Judicial Activism bridges legislative vacuum temporarily (Vishaka); Judicial Overreach violates Separation of Powers!',
    nodes: [
      {
        id: 'jr-base',
        badge: 'TIER 1 · MANDATE',
        title: 'Judicial Review (Arts 13, 32, 131–136, 226, 246)',
        subtitle: 'Testing Executive & Legislative Acts Against Constitution',
        tag: 'Implicit & Explicit Duty',
        rule: 'Constitutional power of SC & HCs to declare any legislation or executive order ultra vires if it breaches Fundamental Rights, Federal Distribution (Art 246), or Basic Structure (Art 368).',
        callouts: [
          'US Marbury v. Madison (1803) implied it; Indian Art 13 makes it EXPLICIT!',
          'Includes 3 arms: Constitutional Amendment review, Legislative review, Administrative review',
          'Indian Judicial Review ("Procedure Established by Law" + Due Process) is narrower than US raw Due Process yet broader in social reach!'
        ],
        landmarkCase: 'Minerva Mills (1980) & State of Madras v. V.G. Row (1952 "Sentinel on qui vive")',
        examTrap: 'Does the exact phrase "Judicial Review" appear in the text of Indian Constitution? NO — though Arts 13, 32, 131–136, 226 & 246 expressly embed it!'
      , colorKey: 'emerald'
      },
      {
        id: 'jr-activ',
        badge: 'TIER 2 · PROACTIVE GAP-FILL',
        title: 'Judicial Activism (PIL, Directions & Rights Expansion)',
        subtitle: 'Stepping Into Legislative Vacuum Until Parliament Acts',
        tag: 'Vishaka / Prakash Singh',
        rule: 'Proactive interpretation expanding dormant text (e.g. reading privacy, clean air, speedy trial into Art 21) and issuing binding interim guidelines until Parliament enacts statute (Art 141).',
        callouts: [
          'Vishaka (1997): Framed sexual harassment workplace guidelines -> codified into POSH Act 2013!',
          'D.K. Basu (1997): Framed 11 arrest safeguards -> inserted into CrPC!',
          'Prakash Singh (2006): Police reforms tenure security'
        ],
        landmarkCase: 'Vishaka v. State of Rajasthan (1997) & Prakash Singh (2006)',
        examTrap: 'Remember: Vishaka guidelines under Art 141 operated validly ONLY UNTIL Parliament enacted the statutory POSH Act 2013!'
      , colorKey: 'sky'
      },
      {
        id: 'jr-over',
        badge: 'TIER 3 · WARNING ZONE',
        title: 'Judicial Overreach (Encroaching Policy / Legislature)',
        subtitle: 'When Courts Direct Statutes, Budgets, Highways or Censorship',
        tag: 'Divisional Manager Aravali 2007',
        rule: 'Crosses Separation of Powers (Ram Jawaya Kapur 1955) when judges create permanent administrative bodies, alter statutory budgets, ban highway liquor (500m), or impose cinema National Anthem decrees bypassing Legislature.',
        callouts: [
          'Shyam Narayan Chouksey (2018) rolled back mandatory pre-movie anthem order!',
          'Divisional Manager Aravali Golf Club (2007): Courts CANNOT create new posts or substitute wisdom of Parliament',
          'Judges lack democratic accountability & fiscal implementation apparatus'
        ],
        landmarkCase: 'Divisional Manager, Aravali Golf Club v. Chander Hass (2007)',
        examTrap: 'Separation of Powers in India avoids strict "watertight" division (Executive sits inside Parliament!) yet strictly bars Courts from taking over policy-making!'
      , colorKey: 'rose'
      },
      {
        id: 'jr-restraint',
        badge: 'TIER 4 · SELF-RESTRAINT',
        title: 'Judicial Restraint & Political Question Standards',
        subtitle: 'Deference on Economics, Defence & Foreign Policy',
        tag: 'BALCO / Small-Scale Deference',
        rule: 'Courts exercise maximum restraint in macroeconomic disinvestment (BALCO 2001), defence procurement (Rafale 2018), demonetization (Vivek Narayan 2023 4:1) & fiscal policy — examining process, not economic wisdom.',
        callouts: [
          'BALCO (2001): Economic policy choices belong solely to Executive & Parliament unless mala fide/unconstitutional',
          'Vivek Narayan Sharma (2023 Demonetization 4:1): Courts check statutory compliance & proportionality, not monetary policy soundness',
          'Avoids "Judicial Despotism" preserving inter-organ harmony'
        ],
        landmarkCase: 'BALCO Employees Union (2001) & Vivek Narayan Sharma (2023)',
        examTrap: 'Note: India rejected US rigid "Political Question" abstention in Art 356/368 cases (Bommai 1994) — if constitutional norms are breached, political stakes never block review!'
      , colorKey: 'violet'
      }
    ]
  },
  {
    id: 'contempt-of-court-art129-215',
    title: 'Courts of Record (Arts 129 & 215): Civil vs Criminal Contempt vs Free Speech',
    category: 'Judicial Authority & Speech',
    track: 'Judiciary & Doctrines',
    articles: 'Articles 129, 215 & 19(2)',
    summary: 'Equilibrium scale balancing institutional dignity & unobstructed justice (Contempt Act 1971) against Fair Criticism, Truth Defence (2006 Amd) & Free Speech.',
    topology: 'balance-beam',
    rootLabel: 'COURT DIGNITY (129/215) vs FAIR CRITICISM (19(1)(a))',
    rootSub: 'Power Derived Directly From Constitution • Cannot Be Abolished by Ordinary Statute',
    edgeFlowTag: 'CONTEMPT CHECK',
    footerRule: 'Supreme Court (Art 129) & High Courts (Art 215) are COURTS OF RECORD: (1) Perpetual memory/evidentiary records, AND (2) Inherent power to punish contempt of self AND subordinate courts!',
    nodes: [
      {
        id: 'ct-record',
        badge: 'ARTS 129 & 215',
        title: 'Meaning of "Court of Record"',
        subtitle: 'Perpetual Binding Records + Inherent Contempt Jurisdiction',
        tag: 'Cannot Be Repealed By Parl.',
        rule: 'Proceedings preserved perpetually as unquestioned legal memory; BOTH SC (Art 129) & HCs (Art 215) hold plenary inherent power to punish for contempt (Act 1971 merely regulates procedure!).',
        callouts: [
          'Wait: Word "Civil Contempt" & "Criminal Contempt" are defined in CONTEMPT OF COURTS ACT 1971 — NOT in the Constitution!',
          'Supreme Court ALSO punishes contempt of ALL Indian High Courts & Subordinate Courts across India (Art 129 read with Delhi Judicial Service Assn 1991)!',
          'High Courts also punish contempt of subordinate District Courts in State (Sec 10, 1971 Act)'
        ],
        landmarkCase: 'Delhi Judicial Service Assn v. State of Gujarat (1991)',
        examTrap: 'TRAP CHECK: Does Constitution define "Civil" or "Criminal" Contempt? NO! Does Supreme Court only punish contempt of ITSELF? NO — also of High Courts & District Courts nationwide!'
      , colorKey: 'sky'
      },
      {
        id: 'ct-civil-crim',
        badge: '1971 ACT · BIFURCATION',
        title: 'Civil Disobedience vs Criminal Scandalizing',
        subtitle: 'Wilful Order Breach vs Scandalizing / Obstruction',
        tag: 'Sec 2(b) vs 2(c)',
        rule: 'Civil Contempt (s.2(b)): Wilful disobedience of judgment/decree/undertaking. Criminal Contempt (s.2(c)): Publication/act that (i) scandalizes/lowers authority of court, (ii) prejudices fair trial, OR (iii) obstructs administration of justice.',
        callouts: [
          'Sub-judice prejudice covers media trials interfering directly with ongoing bench',
          '2006 Amendment Act inserted "Truth & Bona Fide Public Interest" as VALID DEFENCE in Section 13(b)!',
          'Punishment cap under 1971 Act: Simple imprisonment <= 6 months and/or fine <= Rs 2,000 (SC Bar Assn 1998: cannot suspend advocate’s licence under Art 129!)'
        ],
        landmarkCase: 'Supreme Court Bar Assn v. Union of India (1998 5-Judge)',
        examTrap: 'HUGE EXAM RULE (SC Bar Assn 1998): In contempt, SC CANNOT strip/suspend an advocate’s licence under Art 142/129 — only Bar Council of India holds disciplinary suspension authority!'
      , colorKey: 'rose'
      },
      {
        id: 'ct-criticism',
        badge: 'SPEECH SAFEGUARD · S.5',
        title: 'Fair Criticism of Judgment vs Malicious Attack on Judges',
        subtitle: 'Prashant Bhushan (2020) & Mulgaokar Rules',
        tag: 'Mulgaokar Caution',
        rule: 'Sec 5 permits fair, reasonable criticism of judicial acts on merits; contempt triggers ONLY when sweeping mala fide motives are attributed to institution/judges impairing public confidence in Rule of Law.',
        callouts: [
          'In re S. Mulgaokar (1978): Broad judicial shoulders should shrug off temperate criticism',
          'In re Prashant Bhushan (2020): Reaffirmed scandalizing criminal contempt remains valid 19(2) restriction',
          'Private individual criminal contempt petitions need PRIOR WRITTEN CONSENT of Attorney General / Advocate General (Sec 15)!'
        ],
        landmarkCase: 'In re Prashant Bhushan (2020) & In re S. Mulgaokar (1978)',
        examTrap: 'Before a private citizen can move High Court/SC to prosecute Criminal Contempt (unless Court initiates Suo Motu!), prior AG / Advocate General consent is MANDATORY under s.15!'
      , colorKey: 'violet'
      },
      {
        id: 'ct-limits',
        badge: 'ART 142(2) · INVESTIGATION',
        title: 'Inherent Powers to Secure Attendance & Discovery',
        subtitle: 'National Uniform Writs Execution',
        tag: '1-Yr Limitation Sec 20',
        rule: 'Under Sec 20 of 1971 Act, contempt proceedings must be initiated within ONE YEAR from alleged contempt date; Courts treat unconditional apology as mitigating factor (if bona fide & earliest).',
        callouts: [
          '1-year statutory limitation applies even to suo motu contempt initiation (Pallav Sheth 2001)',
          'Subordinate Courts CANNOT punish contempt of themselves except summary Sec 228 IPC / BNS interruption — must refer to High Court!',
          'Balances judicial authority against free press accountability'
        ],
        landmarkCase: 'Pallav Sheth v. Custodian (2001) 3-Judge Bench',
        examTrap: 'Remember: High Court & Supreme Court alone hold Constitutional Court of Record status (District/Magistrate Courts do NOT).'
      , colorKey: 'emerald'
      }
    ]
  },
  {
    id: 'constitutional-morality-transformative',
    title: 'Transformative Constitutionalism & Constitutional Morality Framework',
    category: 'Jurisprudential Philosophy',
    track: 'Judiciary & Doctrines',
    articles: 'Ambedkar CAD -> Navtej -> NCT Delhi',
    summary: 'Conceptual hub linking Dr. B.R. Ambedkar’s Nov 4, 1948 Constitutional Morality address to modern Supreme Court rulings elevating Liberty/Dignity over majoritarian prejudice.',
    topology: 'hub-spoke',
    rootLabel: 'CONSTITUTIONAL MORALITY',
    rootSub: 'Ambedkar • Grote • Organic Charter',
    edgeFlowTag: 'TRANSFORMATIVE LENS',
    footerRule: 'Constitutional Morality means paramount reverence for the forms, equality, fraternity & dignity of the Constitution — trump-card defeating majoritarian "Social/Public Morality"!',
    nodes: [
      {
        id: 'cm-ambedkar',
        badge: 'ORIGIN · NOV 4 1948',
        title: 'Dr. Ambedkar’s Constituent Assembly Address',
        subtitle: 'Citing George Grote (Athens): Non-Top Soil Must Be Cultivated',
        tag: 'CAD Vol VII',
        edgeLabel: '1948 Foundation',
        rule: 'Moving Draft Constitution on Nov 4 1948, Dr. Ambedkar warned: "Constitutional morality is NOT a natural sentiment. It has to be cultivated... Democracy in India is only a top-dressing on an Indian soil, which is essentially undemocratic."',
        callouts: [
          'Defined Grote’s Constitutional Morality: Reverence for constitutional forms + peaceful obedience + respect for minority opposition freedom',
          'Rejected copying "administrative details" fear because without constitutional morality, form flips into autocracy',
          'Directly revived in 21st-century Supreme Court jurisprudence'
        ],
        landmarkCase: 'Constituent Assembly Debates (Nov 4, 1948)',
        examTrap: 'WHO popularized "Constitutional Morality" in the Constituent Assembly citing Greek historian George Grote? Dr. B.R. Ambedkar!'
      , colorKey: 'accent'
      },
      {
        id: 'cm-navtej',
        badge: 'COUNTER-MAJORITY · 2018',
        title: 'Constitutional vs Popular / Social Morality',
        subtitle: 'Navtej Singh Johar (2018) Sec 377 Ruling',
        tag: 'Discrete Minorities Shield',
        edgeLabel: 'Defeats Prejudice',
        rule: 'Unanimous 5-Judge Bench struck down criminalization of consenting same-sex intimacy holding fundamental rights NEVER depend on popular opinion polls or social taboo.',
        callouts: [
          'Naz Foundation (2009 Delhi HC) first deployed Constitutional Morality inside Part III',
          'Navtej Johar (2018): Rights of discrete & insular minorities cannot yield to majoritarian morality',
          'Constitution transforms entrenched feudal, caste & patriarchal social hierarchies'
        ],
        landmarkCase: 'Navtej Singh Johar v. Union of India (2018) 5-Judge Bench',
        examTrap: 'Notice: Under Arts 19(2)/(4) & 25, "morality" MUST be read as CONSTITUTIONAL MORALITY (equality, fraternity, liberty) — NOT Victorian or orthodox majoritarian taboos!'
      , colorKey: 'violet'
      },
      {
        id: 'cm-nctd',
        badge: 'INSTITUTIONAL · NCT DELHI',
        title: 'Institutional Constitutional Morality (NCT Delhi 2018/2023)',
        subtitle: 'Good Faith, Restraint & Collaborative Federal Governance',
        tag: 'Executive Restraint Rule',
        edgeLabel: 'Federal Trust',
        rule: 'In Government of NCT Delhi v. UOI (2018 & 2023 5J), SC applied Constitutional Morality to Centre-State/LG relations: unwritten constitutional silence MUST foster cooperative democracy, not executive sabotage!',
        callouts: [
          'Requires institutional respect, anti-arbitrariness & fiduciary trust by high offices (Manoj Narula 2014)',
          'Applies to Governor Art 200 prompt assent & Speaker Art 102 neutrality',
          'Curbs structural abuse ("constitutional silences" filled with democratic good faith)'
        ],
        landmarkCase: 'Govt of NCT of Delhi v. Union of India (2018 & 2023 5J)',
        examTrap: 'Constitutional Morality governs BOTH (1) Citizen Fundamental Rights against majoritarian prejudice AND (2) Inter-organ Governance conduct (LG/Governor/Ministers)!'
      , colorKey: 'sky'
      },
      {
        id: 'cm-sabarimala',
        badge: 'TRANSFORMATIVE · SABARIMALA',
        title: 'Transformative Constitutionalism (Preamble Manifesto)',
        subtitle: 'Constitution as Instrument of Positive Social Reconstruction',
        tag: 'Living Tree Growth',
        edgeLabel: 'Social Liberation',
        rule: 'Unlike conservative constitutions preserving status quo, the Indian Constitution actively seeks to annihilate caste (Art 17), economic feudalism (Art 23), and gender subordination (Arts 15, 25).',
        callouts: [
          'Joseph Shine (2018): Dismantled colonial wife-as-property Adultery Sec 497',
          'Joseph Shine / Vineeta Sharma (2020) / Babita Puniya (2020): Substantive gender agency',
          'Treats Constitution as an organic, evolving charter ("Living Tree")'
        ],
        landmarkCase: 'Sabarimala (2018) & Secretary Defence v. Babita Puniya (2020)',
        examTrap: 'Check wording: Transformative Constitutionalism uses text (Preamble Fraternity + Arts 14–17) to dismantle unjust private social power!'
      , colorKey: 'emerald'
      }
    ]
  }
];
