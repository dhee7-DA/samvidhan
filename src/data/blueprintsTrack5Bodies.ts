import type { VisualBlueprintSpec } from './visualBlueprintsTypes';

export const TRACK_5_BODIES_BLUEPRINTS: VisualBlueprintSpec[] = [
  {
    id: 'cag-audit-guardianship-148',
    title: 'CAG (Arts 148–151): Independence Shields, 3 Audit Reports & PAC Link',
    category: 'Constitutional Watchdogs',
    track: 'Bodies & Mechanics',
    articles: 'Articles 148 – 151',
    summary: 'Pipeline tracing CAG’s strict single-6yr-or-65 tenure, ban on post-retirement Govt posts, distinction from UK "Comptroller" purse lock, and 3 Art 151 audit tracks.',
    topology: 'flowchart',
    rootLabel: 'CAG OF INDIA (ART 148)',
    rootSub: '"Most Important Officer" — Ambedkar',
    edgeFlowTag: 'PUBLIC PURSE GUARD',
    footerRule: 'CRITICAL INDIA vs UK CONTRAST: Indian CAG is ONLY "Auditor" (post-expenditure review AFTER money leaves CFI!), whereas UK CAG is BOTH "Comptroller + Auditor" controlling Treasury release BEFORE spend!',
    nodes: [
      {
        id: 'cag-indep',
        badge: 'ART 148 · INDEPENDENCE',
        title: 'Security of Tenure (6 Yrs / 65 Age) & Bar on Re-Office',
        subtitle: 'Removed ONLY Like SC Judge; Zero Post-Retirement Office!',
        tag: 'Single Non-Pleasure Term',
        edgeLabel: 'Safeguards',
        rule: 'Appointed by President by Warrant (6 yrs or 65 age whichever earlier); removed ONLY in same manner & grounds as SUPREME COURT JUDGE (Art 124(4)). INELIGIBLE for ANY further office under Govt of India or ANY State after retirement!',
        callouts: [
          'Salary & admin expenses of CAG staff charged directly on Consolidated Fund of India (non-votable!)',
          'Conditions of service/pay (equal to SC Judge per 1971 DPC Act) CANNOT be varied to disadvantage post-appointment',
          'Note: CAG audits BOTH Union AND State Governments — States have NO separate State AG office!'
        ],
        landmarkCase: 'Articles 148(1)–(6) & CAG (DPC) Act 1971',
        examTrap: 'TWO TOP CAG TRAPS: (1) Even though Art 148 says "holds office", CAG serves 6 yrs OR 65 age — NO Presidential Pleasure! (2) Total ban on BOTH Union AND State post-retirement jobs (even private statutory boards barred under 148(4))!'
      , colorKey: 'sky'
      },
      {
        id: 'cag-scope',
        badge: 'ART 149 · AUDIT SCOPE',
        title: 'Regularity + Propriety Audit (Does NOT Audit Secret/PSUs Equally)',
        subtitle: 'Consolidated + Contingency + Public Accounts + Autonomous Trusts',
        tag: '1976 Accounts Divorced',
        edgeLabel: 'Audit Matrix',
        rule: 'Since 1976 Departmentalization of Accounts, CAG was relieved of compiling Union accounts (kept for States!) focusing purely on Legal, Regularity & Proprietary ("wisdom/waste" discretionary) Audits across Union, States, Gov. Companies & Sec 14/15 bodies.',
        callouts: [
          'Wait: For Secret Service Expenditure, CAG CANNOT demand voucher details -> accepts administrative Secretary’s certificate!',
          'PSUs split into 3 audit regimes: Total CAG (DVC/ONGC Stat. Corp), Audit Board Supplemental (Govt Companies s.139/143 Cos Act), ZERO CAG (RBI, SBI, LIC audited privately!)',
          'May audit Local Bodies / Panchayats if requested by President/Governor (1971 Act Sec 20)'
        ],
        landmarkCase: 'Arvind Gupta (2013 — Upheld Private Telecom Revenue-Share Audit by CAG)',
        examTrap: 'WHO IS OUTSIDE DIRECT CAG AUDIT? RBI, SBI, LIC & Nationalised Banks submit strictly to private auditors; AND Secret Service Funds bypass CAG itemized scrutiny!'
      , colorKey: 'violet'
      },
      {
        id: 'cag-reports',
        badge: 'ART 151 · 3 REPORTS',
        title: 'Appropriation, Finance & Public Undertakings Reports',
        subtitle: 'Submitted to President (Parliament) & Governor (State Assembly)',
        tag: 'Laid Before Houses',
        edgeLabel: 'To President/Gov',
        rule: 'Under Art 151, CAG submits 3 distinct audit reports for Union -> President (laid before both Houses) and for each State -> Governor (laid before State Legislature): (1) Appropriation Accounts, (2) Finance Accounts, (3) Public Undertakings.',
        callouts: [
          'CAG prescribes accounting formats for Union & States with President’s advice (Art 150)',
          'Submits Article 279 certification of Net Proceeds of shared taxes (binding on Centre & States!)',
          'Cannot attend Parliament floor debates himself — depends on PAC!'
        ],
        landmarkCase: 'Articles 150, 151 & 279 Constitutional Audit Functions',
        examTrap: 'WHO certifies "Net Proceeds" of divisible taxes under Article 279 whose certificate is FINAL? The COMPTROLLER AND AUDITOR-GENERAL OF INDIA!'
      , colorKey: 'emerald'
      },
      {
        id: 'cag-pac',
        badge: 'PAC LINK · POST-MORTEM',
        title: '"Friend, Philosopher & Guide" to PAC (Post-Spend Only)',
        subtitle: 'No Pre-Withdrawal Exchequer Lock Like UK Comptroller',
        tag: 'Auditor Only vs UK',
        edgeLabel: 'PAC Examination',
        rule: 'PAC examines CAG’s 3 reports and summons ministry Secretaries based on CAG briefs. Because Indian ministries draw money directly from RBI via Finance Ministry authorizations without CAG’s prior signature, CAG acts purely "post-mortem" (unlike UK!).',
        callouts: [
          'Ambedkar noted CAG lacks prior Comptroller control over cash drawals from Consolidated Fund',
          'Exposed systemic governance failures (2G Spectrum, Coal Block, Commonwealth)',
          'Yet holds NO prosecutorial power — sanctions rest solely with Parliament/Executive'
        ],
        landmarkCase: 'Centre for PIL v. Union of India (2G Spectrum) — Regulatory Fairness',
        examTrap: 'Wait: Can CAG question the wisdom of Executive economic/policy choices? Propriety audit flags obvious waste/extravagance, NOT sovereign policy choices per se!'
      , colorKey: 'rose'
      }
    ]
  },
  {
    id: 'upsc-spsc-jpsc-architecture',
    title: 'UPSC, SPSC & JPSC (Arts 315–323): Appointment, SC Art 145 Inquiry Removal & Bar',
    category: 'Merit Recruitment Watchdogs',
    track: 'Bodies & Mechanics',
    articles: 'Articles 315 – 323',
    summary: 'Matrix contrasting UPSC (Union Constitutional), SPSC (State Constitutional — appointed by Governor, REMOVED ONLY BY PRESIDENT!), and Joint PSC (Statutory created by Parliament Act!).',
    topology: 'matrix-split',
    rootLabel: 'PUBLIC SERVICE COMMISSIONS (PART XIV CH II)',
    rootSub: '"Watchdog of Merit System in India" • 6 Yrs or 65 (UPSC) / 62 (SPSC)',
    edgeFlowTag: 'UPSC vs SPSC/JPSC',
    footerRule: 'TOP STATE TRAP: While GOVERNOR appoints SPSC Chair & Members, ONLY THE PRESIDENT (never the Governor!) can REMOVE an SPSC Member/Chair — following mandatory Supreme Court inquiry under Art 317!',
    nodes: [
      {
        id: 'psc-upsc',
        badge: 'ART 315–317 · UPSC',
        title: 'UPSC Composition, Removal & Post-Tenure Bar',
        subtitle: 'President Appoints; Max 6 Yrs / 65 Age; 50% 10-Yr Civil Servants',
        tag: 'SC Inquiry Removal (317)',
        side: 'left',
        rule: '9–11 members (constitution unfixed size -> President decides!). Half (nearly 50%) MUST have held Union/State office >=10 yrs. Removed by President for Insolvency/Paid Office/Infirmity directly OR Misbehaviour STRICTLY AFTER Supreme Court Art 145 Inquiry binds President!',
        callouts: [
          'UNIQUE REMOVAL BINDING: Unlike Art 124(4) Parliamentary impeachment, President can remove UPSC/SPSC Chair ONLY for "misbehaviour" AFTER Supreme Court inquiry advises removal (Art 317 advice IS BINDING on President!!)',
          'Governor CAN temporarily SUSPEND an SPSC Member while President refers case to SC!',
          'Post-Retirement (Art 319): UPSC Chair = BANNED from ALL further Union/State govt employment forever! UPSC Member = eligible ONLY as UPSC Chair or ANY SPSC Chair!'
        ],
        landmarkCase: 'In re Reference under Art 317 (Mehar Singh Saini 2010)',
        examTrap: 'MEMORIZE ART 317 DOUBLE GUARD: For SPSC removal -> Governor Appoints + Governor can ONLY Suspend during probe -> PRESIDENT ALONE Removes AFTER BINDING SC Inquiry!'
      , colorKey: 'sky'
      },
      {
        id: 'psc-spsc',
        badge: 'ART 316 · SPSC & JPSC',
        title: 'SPSC (6 Yrs / 62 Age) vs Statutory Joint PSC (JPSC)',
        subtitle: 'JPSC Created by Parliament on 2+ State Resolution (6 Yrs / 62)',
        tag: 'JPSC = STATUTORY!',
        side: 'left',
        rule: 'SPSC follows identical 6-yr term with 62 age cap; Governor appoints & frames conditions. JPSC (for 2+ States agreeing via Assembly resolutions) is NOT constitutional — it is a STATUTORY body created by Act of Parliament (Haryana/Punjab briefly 1966)!',
        callouts: [
          'Wait: Who appoints Chair & Members of a Joint PSC (JPSC) and receives its Annual Report? PRESIDENT appoints JPSC (Report goes to each participating State Governor)!',
          'UPSC can ALSO temporarily serve State needs on Governor request + President approval (Art 315(4))',
          'Post-Tenure SPSC Chair -> eligible ONLY as UPSC Chair/Member or OTHER SPSC Chair! SPSC Member -> UPSC Chair/Member or same/other SPSC Chair!'
        ],
        landmarkCase: 'Articles 315(2), 316, 319 & 323',
        examTrap: 'CLASSIFICATION GOLD: UPSC & SPSC = Constitutional Bodies; Joint Public Service Commission (JPSC) = STATUTORY Body (Act of Parliament via Art 315(2))!'
      , colorKey: 'violet'
      },
      {
        id: 'psc-func',
        badge: 'ART 320 · FUNCTIONS',
        title: 'Recruitment Exams & Disciplinary Advisory (Advisory Only!)',
        subtitle: 'Strictly "Recruiting Agency", NOT Cadre Management!',
        tag: 'DoPT Manages IAS Cadre',
        side: 'right',
        rule: 'Conducts IAS/IPS/IFS/Central/State exams; advises on recruitment methods, transfers, promotions & civil-service disciplinary penalties. NOTE: Advice is purely ADVISORY (failure to consult Art 320(3) does NOT automatically invalidate punishment -> Srivastava 1957)!',
        callouts: [
          'Excluded from UPSC jurisdiction: Art 16(4) Reservation policy/quotas, Chairman/Member posts, Tribunals, Diplomat posts, temporary jobs <1 yr!',
          'Classification of services, cadre allocation, training (LBSNAA) & pay rest with Ministry of Personnel (DoPT), NOT UPSC!',
          'Parliament/State can confer ADDITIONAL statutory functions on UPSC/SPSC under Art 321'
        ],
        landmarkCase: 'State of U.P. v. Manbodhan Lal Srivastava (1957 5J)',
        examTrap: 'TWO TOP ROLE CONFUSIONS: (1) UPSC does NOT fix SC/ST/OBC reservation percentages! (2) UPSC’s disciplinary advice is NOT binding on Government (though rejection goes into Annual Art 323 Report explaining why to Parliament!)'
      , colorKey: 'emerald'
      },
      {
        id: 'psc-exp',
        badge: 'ARTS 322–323 · CHARGED',
        title: 'Charged Expenses & Mandatory Rejection Explanation',
        subtitle: 'Expenses Non-Votable; Parliament Sees All Non-Accepted Advice',
        tag: 'Transparency Deterrent',
        side: 'right',
        rule: 'Art 322 charges ALL salaries, pensions & staff expenses on CFI (UPSC) / State CFI (SPSC) free from annual legislative cut. Under Art 323, every instance where Govt rejects UPSC advice MUST be explained in Annual Report tabled in Parliament!',
        callouts: [
          'Appointments Committee of Cabinet / Ministry must table justification memo for departing from UPSC recommendation',
          'Protects civil service neutrality from partisan spoils system',
          'Preserves citizen trust across merit recruitment'
        ],
        landmarkCase: 'Articles 322 & 323 Constitutional Accountability',
        examTrap: 'Even though UPSC advice under Art 320 isn’t binding, Govt cannot drop/ignore it silently — Art 323 forces public explanatory tabling in both Houses!'
      , colorKey: 'rose'
      }
    ]
  },
  {
    id: 'special-commissions-sc-st-bc-338',
    title: 'NCSC (Art 338), NCST (338A) & NCBC (338B · 102nd Amd): The Civil Court Triad',
    category: 'Social Justice Commissions',
    track: 'Bodies & Mechanics',
    articles: 'Articles 338, 338A, 338B & 342A',
    summary: 'Radial hub mapping the three twin-power constitutional commissions birthed by 65th, 89th & 102nd Amendments alongside the 105th Amendment State SEBC list restoration.',
    topology: 'hub-spoke',
    rootLabel: 'EQUALITY COMMISSIONS',
    rootSub: '338 · 338A · 338B + Civil Court Summons Power',
    edgeFlowTag: 'ART 338 TRIAD',
    footerRule: 'ALL THREE (NCSC, NCST, NCBC) possess identical CPC CIVIL COURT POWERS (summon witnesses, compel documents, affidavits) & governments MUST consult them on ALL major policy matters affecting SC/ST/SEBCs!',
    nodes: [
      {
        id: 'sc-338',
        badge: 'ART 338 · 65TH & 89TH AMDS',
        title: 'National Commission for Scheduled Castes (NCSC)',
        subtitle: 'Special Officer (1950) -> Multi-Member (65th) -> Split (89th)',
        tag: 'Chair + VC + 3 Members',
        edgeLabel: '1990 / 2003',
        rule: 'Originally a single "Special Officer" in 1950; converted into combined SC/ST Commission (65th Amd 1990); bifurcated into separate NCSC (338) & NCST (338A) via 89th Amd 2003! Investigates safeguards, specific complaints & socio-economic development.',
        callouts: [
          'Until 102nd Amd (2018), NCSC ALSO looked into Anglo-Indian & OBC complaints! (OBCs moved to NCBC 338B; NCSC still guards Anglo-Indians!)',
          'Appointed by President by Warrant; submits Annual/Special reports to President -> Parliament & concerned State Governors (Art 338(6)/(7))!',
          'Union & States MUST consult NCSC on ALL major policy affecting SCs'
        ],
        landmarkCase: '89th Constitutional Amendment Act, 2003 (Effective Feb 2004)',
        examTrap: 'Which Constitutional Commission STILL safeguards ANGLO-INDIANS under clause (10)? NCSC (Article 338(10))!'
      , colorKey: 'sky'
      },
      {
        id: 'st-338a',
        badge: 'ART 338A · 89TH AMD',
        title: 'National Commission for Scheduled Tribes (NCST)',
        subtitle: 'Chaired at Union Cabinet Rank • Focuses on PESA, MFP & Displacement',
        tag: 'Chair + VC + 3 (3 Yr Term)',
        edgeLabel: 'Forest & Land',
        rule: 'Created 2004 via 89th Amendment specifically to address distinct tribal isolation, forest rights (MFP under PESA), land alienation & mining displacement across India.',
        callouts: [
          'President notifies ST lists per State/UT under Article 342 after consulting Governor -> Changes require PARLIAMENT ACT only (cannot alter even by subsequent Presidential Order!)',
          'Possesses full Civil Court powers under Art 338A(8) — cannot pass binding final judicial injunctions though (strictly recommendatory reports!)',
          'At least one member of NCST is conventionally a woman!'
        ],
        landmarkCase: 'Milind v. State of Maharashtra (2001 — Strict Reading of Art 341/342 Lists)',
        examTrap: 'POWER CHECK: Can NCSC/NCST/NCBC cancel a recruitment or award direct compensation like a High Court? NO — they hold Civil Court SUMMONS/EVIDENCE powers ONLY for Inquiry, NOT final binding adjudication!'
      , colorKey: 'emerald'
      },
      {
        id: 'bc-338b',
        badge: 'ART 338B · 102ND AMD (2018)',
        title: 'National Commission for Backward Classes (NCBC)',
        subtitle: 'Upgraded From 1993 Statutory Body (Indra Sawhney) -> Constitutional Status',
        tag: 'Art 338B + 342A',
        edgeLabel: '2018 Upgrade',
        rule: 'Indra Sawhney (1992) ordered statutory NCBC Act 1993; 102nd Amendment (2018) repealed 1993 Act and vested NCBC with identical Constitutional status & Civil Court powers under Article 338B for Socially & Educationally Backward Classes (SEBCs).',
        callouts: [
          '5-Member Commission (Chairperson, Vice-Chair, 3 Members) appointed by President by Warrant',
          'Replaced NCSC’s transitional OBC jurisdiction',
          'Note: Examines "SEBCs" (Socially & Educationally Backward Classes), NOT strictly EWS economic quota!'
        ],
        landmarkCase: '102nd Amendment Act, 2018 (Inserted Arts 338B & 342A)',
        examTrap: 'Which Commission moved from STATUTORY (1993) to CONSTITUTIONAL (2018)? NCBC under 102nd Amendment!'
      , colorKey: 'violet'
      },
      {
        id: 'bc-105th',
        badge: 'MARATHA CASE -> 105TH AMD',
        title: '342A Clashes & 105th Amendment Restoring State OBC Lists',
        subtitle: 'Jaishri Laxmanrao (2021) Triggered Immediate 105th Amd Recovery',
        tag: 'Dual Central + State Lists',
        edgeLabel: '105th Fix (2021)',
        rule: 'In Maratha Quota Case (Jaishri Laxmanrao Patil, May 2021 5J), SC ruled 102nd Amd stripped States of power to notify State OBC lists! Parliament unanimously passed 105th Amd (Aug 2021) restoring every State/UT power to maintain its OWN State SEBC list for State jobs!',
        callouts: [
          'Art 342A(1)–(2): President notifies CENTRAL LIST only (Parliament modifies Central List)',
          'Art 342A(3) via 105th Amd: Every State/UT explicitly keeps independent power to prepare/maintain State SEBC List overriding 342A(1)!',
          'Maratha 16% quota still stayed struck down on exceeding 50% Indra Sawhney cap!'
        ],
        landmarkCase: 'Jaishri Laxmanrao Patil (2021 5J) & 105th Amendment Act 2021',
        examTrap: 'CURRENT LAW AFTER 105TH AMD (2021): BOTH Central Govt (Central List) AND State Govts (State Lists) maintain separate SEBC/OBC lists — States do NOT need Presidential approval for State SEBC lists!'
      , colorKey: 'rose'
      }
    ]
  },
  {
    id: 'statutory-vs-constitutional-bodies',
    title: 'Institutional Hierarchy Ladder: Constitutional vs Statutory vs Extra-Constitutional Bodies',
    category: 'Governance Institutions',
    track: 'Bodies & Mechanics',
    articles: 'Taxonomic Governance Map',
    summary: '4-tier authority pyramid sorting India’s core national commissions & investigative agencies by legal birth source, amendment threshold to abolish, and binding power.',
    topology: 'pyramid-hierarchy',
    rootLabel: 'INDIAN GOVERNANCE BODIES TAXONOMY',
    rootSub: 'Constitutional (Art) vs Statutory (Act) vs Executive (Resolution)',
    edgeFlowTag: 'SOURCE OF BIRTH',
    footerRule: 'EXAM TAXONOMY RULE: NHRC, CVC, Lokpal, SEBI, RBI, TRAI & NGT are STATUTORY (Acts of Parliament); CBI, NITI Aayog & Law Commission are EXTRA-CONSTITUTIONAL EXECUTIVE RESOLUTIONS!',
    nodes: [
      {
        id: 'tb-const',
        badge: 'TIER 1 · CONSTITUTIONAL',
        title: 'Constitutional Bodies (Born From Articles — Need Art 368)',
        subtitle: 'ECI (324), CAG (148), UPSC/SPSC (315), FC (280), GST (279A), NCSC/ST/BC',
        tag: 'Supreme Protection',
        rule: 'Expressly established directly inside Articles of Constitution. Cannot be abolished or structurally diluted without Art 368 Constitutional Amendment (and 50% State ratification where federal!).',
        callouts: [
          'Includes Attorney General (76), Advocate General (165), Linguistic Officer (350B)',
          'Election Commission, CAG & UPSC enjoy SC-grade removal protection',
          'Note: Inter-State Council (263) & Delimitation Commission (82) also derive from Constitutional mandates!'
        ],
        landmarkCase: 'Constitutional Scheme Across Parts V, VI, XII, XIV, XV, XVI, XVII',
        examTrap: 'FREQUENT PRELIMS LIST MIX-UP: Inter-State Council = CONSTITUTIONAL (263); Zonal Councils = STATUTORY (SRC Act 1956); NITI Aayog = EXECUTIVE!'
      , colorKey: 'emerald'
      },
      {
        id: 'tb-stat',
        badge: 'TIER 2 · STATUTORY',
        title: 'Statutory Bodies (Created by Act of Parliament)',
        subtitle: 'NHRC (1993), CVC (2003 Act), Lokpal (2013), NCW, CIC, NGT, SEBI, RBI',
        tag: 'Simple Majority Repeal',
        rule: 'Born out of specific Acts passed by Parliament (or State Assemblies). Independent within statutory charter, yet Parliament CAN amend/abolish them by Simple Majority (subject to fairness)!',
        callouts: [
          'NHRC & SHRCs: Protection of Human Rights Act 1993 (amended 2019 lowering CJI/SC judge threshold & 3-yr term!)',
          'CVC: Originated via Executive Resolution 1964 (Santhanam) -> Statutoryized via CVC Act 2003!',
          'JPSC (315(2)), Zonal Councils (1956), Lokpal (2013), NCW (1990 Act), NGT (2010 Act)'
        ],
        landmarkCase: 'Vineet Narain (1998 — Forced Statutory Status for CVC)',
        examTrap: 'ALWAYS TESTED: CVC originally started as Executive body (1964) -> given STATUTORY status by Act in 2003! NHRC, NCW, CIC, Lokpal, NGT & SEBI are ALL STATUTORY (NOT Constitutional)!'
      , colorKey: 'sky'
      },
      {
        id: 'tb-dspa-cbi',
        badge: 'TIER 3 · UNIQUE HYBRID (CBI)',
        title: 'CBI (Delhi Special Police Establishment Act 1946 + 1963 Resolution)',
        subtitle: 'Powers From 1946 Statute — Created via Home Ministry Executive Resolution!',
        tag: 'Needs State Consent (Sec 6)!',
        rule: 'Created 1963 by Ministry of Home Affairs Executive Resolution (Santhanam Committee) inheriting investigation powers purely from colonial DSPE Act 1946. Placed under Ministry of Personnel (DoPT)!',
        callouts: [
          'Under DSPE Act Sec 6, CBI CANNOT investigate inside any State without State Govt General/Specific Consent — EXCEPT when HC/SC directly orders CBI probe (West Bengal 2010 5J)!',
          'Wait: CBI falls under MINISTRY OF PERSONNEL (PMO/DoPT), NOT Home Ministry (unlike NIA/IB)!',
          'NIA (2008 Act) CAN enter ANY State nationwide WITHOUT State consent!'
        ],
        landmarkCase: 'State of West Bengal v. Committee for Protection of Democratic Rights (2010 5J)',
        examTrap: '3 CBI TRAPS: (1) Administrative Control = Ministry of Personnel (DoPT), NOT MHA! (2) Constitutional HC/SC CAN order CBI probe WITHOUT State Sec 6 consent! (3) NIA needs NO State consent!'
      , colorKey: 'rose'
      },
      {
        id: 'tb-exec',
        badge: 'TIER 4 · EXTRA-CONSTITUTIONAL',
        title: 'Executive Bodies (Cabinet / Ministry Resolutions)',
        subtitle: 'NITI Aayog (2015), Law Commission of India (3-Yr Reconstitution), NDC',
        tag: 'Pure Cabinet Creation',
        rule: 'Created purely by Executive Cabinet Resolution under Art 73 without statute or constitutional article. Serves primarily advisory, policy-research & planning coordination functions.',
        callouts: [
          'Law Commission of India: Neither Constitutional nor Statutory — executive advisory body reconstituted every 3 yrs (1st Independent Law Comm 1955 chaired by M.C. Setalvad!)',
          'NITI Aayog (Jan 2015) replaced Planning Commission (Mar 1950)',
          'Cannot summon citizens or pass punitive fines under CPC'
        ],
        landmarkCase: 'Law Commission Reports & Cabinet Secretariat Charter',
        examTrap: 'WAIT ON LAW COMMISSION: Is the Law Commission of India a Statutory body? NO — purely an Executive non-statutory advisory body under Ministry of Law!'
      , colorKey: 'violet'
      }
    ]
  },
  {
    id: 'anti-defection-10th-schedule-split',
    title: '10th Schedule Anti-Defection Engine: Whip, 2/3rd Merger & Speaker Timeline',
    category: 'Parliamentary Discipline',
    track: 'Bodies & Mechanics',
    articles: '10th Schedule (52nd & 91st Amds)',
    summary: 'Decision flowchart routing the 4 disqualification triggers (Party Member, Whip, Independent, Nominated), 91st Amendment repealing 1/3rd Split, and 2020 Keisham 3-month Speaker mandate.',
    topology: 'flowchart',
    rootLabel: '10TH SCHEDULE TEST',
    rootSub: '52nd Amd (1985) + 91st Amd (2003)',
    edgeFlowTag: 'DEFECTION ENGINE',
    footerRule: '91st Amendment Act 2003 DELETED Paragraph 3 ("1/3rd Split" loophole)! Today ONLY a >=2/3rd MERGER with another party exempts legislators — AND Presiding Officer decisions remain fully reviewable (Kihoto Hollohan)!',
    nodes: [
      {
        id: 'ad-4triggers',
        badge: 'PARAGRAPH 2 · 4 GROUNDS',
        title: 'Party, Whip (15d), Independent & Nominated (6 Mo) Rules',
        subtitle: 'Conduct Counts Even Without Formal Resignation (Ravi Naik)',
        tag: 'Applies Inside & Outside House',
        edgeLabel: 'Triggers Check',
        rule: 'Disqualified if: (a) Voluntarily gives up party membership (inferred from public anti-party rallies/letter to Governor support rival — Ravi Naik 1994!), (b) Votes/abstains contrary to Whip without prior permission & uncondoned within 15 days, (c) Independent joins ANY party post-election, (d) Nominated joins any party AFTER 6 months.',
        callouts: [
          'Notice: Independent joining ANY political party -> Immediate disqualification; Nominated joining WITHIN 6 months -> Safe (must decide in 6 months)!',
          'Note on RS / Pres / VP Elections: Kuldip Nayar (2006) clarified voting contrary to Whip in Rajya Sabha election can trigger disciplinary expulsion (though 10th Sch operates inside Legislature)!',
          'Who issues Whip? Political party (though Subhash Desai 2023 clarified REAL Political Party outside House controls Legislature Party Whip!)'
        ],
        landmarkCase: 'Ravi S. Naik (1994) & Subhash Desai v. Governor (Maharashtra 2023 5J)',
        examTrap: 'TWO TOP DIFFERENCES: Independent MLA/MP joining a party ANY day -> DISQUALIFIED! Nominated MP/MLA joining within 6 MONTHS -> EXEMPT (only after 6 months disqualified)!'
      , colorKey: 'rose'
      },
      {
        id: 'ad-exemptions',
        badge: 'PARAS 4 & 5 · EXEMPTIONS',
        title: '2/3rd Merger (91st Amd) & Presiding Officer Exemption',
        subtitle: 'Speaker / Dy Speaker / Chairman / Dy Chairman Clean Exit',
        tag: 'Para 3 Split Deleted!',
        edgeLabel: 'Check Exemption',
        rule: '91st Amendment deleted "1/3rd Split" immunity. ONLY two exemptions remain: (1) Para 4 Merger if NOT LESS THAN 2/3rds of members of Legislature Party agree to merge; (2) Para 5 Presiding Officer voluntarily resigning party on election & not joining another while in office!',
        callouts: [
          '91st Amd ALSO capped Cabinet size at 15% + banned defectors from holding Ministerships/remunerative political posts (Art 75(1B)/164(1B))!',
          'Rajendra Singh Rana (2007): Defection attaches AT DATE OF MISCONDUCT, not deferred until Speaker order',
          'Notice: Para 4 protects BOTH merging 2/3rds AND dissenting minority 1/3rd who refuse merger!'
        ],
        landmarkCase: '91st Constitutional Amendment Act 2003 & Rajendra Singh Rana (2007)',
        examTrap: 'WHAT HAPPENED TO "1/3rd SPLIT" DEFENSE? DELETED completely by 91st Amd (2003)! Even if 2/3rd of MLAs rebel inside Legislature without a real external parent party merger, they risk Subhash Desai invalidation!'
      , colorKey: 'emerald'
      },
      {
        id: 'ad-speaker',
        badge: 'KIHOTO (1992) · TRIBUNAL',
        title: 'Speaker Acts as Statutory Tribunal — Para 7 Struck Down!',
        subtitle: 'Subject to Art 136 / 226 Judicial Review AFTER Final Decision',
        tag: 'No Pre-Decision Stay',
        edgeLabel: 'Speaker Role',
        rule: 'In Kihoto Hollohan (1992 5J), SC severed & STRUCK DOWN Paragraph 7 (which barred courts from reviewing Speaker decision!) for lacking Art 368(2) State Ratification & destroying Judicial Review — Speaker functions strictly as judicial TRIBUNAL!',
        callouts: [
          'Courts CANNOT grant quia timet stay BEFORE Speaker decides (except rarest disqualification-related anomalies)',
          'Subhash Desai (2023): Question of Nabam Rebia Speaker disqualification disability pending before 7-Judge Bench!',
          'Presiding Officer decides WITHOUT fixed deadline in Constitution text itself!'
        ],
        landmarkCase: 'Kihoto Hollohan v. Zachillhu (1992) 5-Judge Bench',
        examTrap: 'Why does the Constitution STILL have NO fixed deadline written in 10th Schedule text? Because Keisham Meghachandra (2020) judicially fixed 3 months!'
      , colorKey: 'sky'
      },
      {
        id: 'ad-keisham',
        badge: 'KEISHAM (2020) · 3 MONTHS',
        title: '3-Month Speaker Deadline & ECI/Tribunal Reform Call',
        subtitle: 'SC Recommended Independent Permanent Tribunal Outside Partisan Speakers',
        tag: '3-Mo Clock Enforceable',
        edgeLabel: 'Final Remedy',
        rule: 'In Keisham Meghachandra Singh (2020), SC ruled Speakers MUST decide 10th Schedule petitions within reasonable outer ceiling of THREE MONTHS (absent exceptional grounds) and urged Parliament to vest power in an Independent Tribunal headed by retired SC/HC Judges!',
        callouts: [
          'Manipur Minister removed directly by SC invoking Art 142 after Speaker sat years on petition!',
          'Dinesh Goswami (1990) & Law Commission 170th Report echoed transferring adjudicatory role to President + ECI',
          'Curbs "Operation Lotus" / delayed floor distortion tactics'
        ],
        landmarkCase: 'Keisham Meghachandra Singh v. Hon’ble Speaker Manipur (2020)',
        examTrap: 'Wait: Even TODAY, who STILL decides 10th Schedule petitions until Parliament amends Schedule 10? The PRESIDING OFFICER (Speaker/Chairman) — NOT ECI!'
      , colorKey: 'violet'
      }
    ]
  },
  {
    id: 'delimitation-rpa-1950-1951',
    title: 'Electoral Statutes (RPA 1950 & 1951) & Delimitation Commission Finality (Art 329)',
    category: 'Election Laws',
    track: 'Bodies & Mechanics',
    articles: 'Articles 327 – 329 + RPA 50/51',
    summary: '4-stage statutory & constitutional election loop mapping Seat/Rolls (RPA 1950) vs Conduct/Corrupt Practices/Disqualification (RPA 1951), Election Petitions (HC!) & Art 329 bar.',
    topology: 'cycle-sequence',
    rootLabel: 'ELECTIONS STATUTE ENGINE',
    rootSub: 'RPA 1950 + RPA 1951 + Delimitation Act',
    edgeFlowTag: 'ART 327–329',
    footerRule: 'ART 329 BAR & FORUM RULE: NO court can halt an active election (Art 329(b) — Ponnuswami 1952), and Election Petitions post-result go FIRST TO HIGH COURT (19th Amendment Act 1966 abolished Election Tribunals)!',
    nodes: [
      {
        id: 'el-rpa50',
        badge: 'RPA 1950 · PRE-POLL PREP',
        title: 'RPA 1950: Seat Allocation, Voter Rolls & Delimitation',
        subtitle: 'Qualifying Age Dates + Residence Roll Preparation',
        tag: 'Structural Architecture',
        edgeLabel: 'Rolls & Seats',
        rule: 'Representation of the People Act 1950 deals STRICTLY with pre-election scaffolding: Allocation of seats in LS/Assemblies/Councils, Delimitation of Constituencies, Voter Qualifications, & Preparation of Electoral Rolls.',
        callouts: [
          '2021 RPA Amendment introduced FOUR qualifying dates per year (Jan 1, Apr 1, Jul 1, Oct 1) turning 18!',
          'Added voluntary Aadhaar-Voter ID linkage (Sec 23) to prune duplicate rolls',
          'Note: Actual Conduct of Elections & Corrupt Practices sit in RPA 1951 (NOT 1950!)'
        ],
        landmarkCase: 'Representation of the People Act 1950 (Sec 14 Amended 2021)',
        examTrap: 'SPLIT BETWEEN 1950 & 1951: Electoral Rolls + Seat Allocation + Delimitation = RPA 1950! Actual Polls + Candidate Disqualification + Registration of Parties + Corrupt Practices = RPA 1951!'
      , colorKey: 'sky'
      },
      {
        id: 'el-delim',
        badge: 'DELIMITATION · ART 82 & 329',
        title: 'Delimitation Commission: Force of Law & Zero Court Appeal',
        subtitle: '4 Delimitation Acts (1952, 62, 72, 2002); Art 329(a) Finality',
        tag: 'Cannot Be Modified By LS!',
        edgeLabel: 'Final Map',
        rule: 'Constituted after Decennial Census by Central Govt (headed by retired SC Judge + CEC + State ECs + 10 associate MPs/MLAs with NO vote!). Its Final Orders carry FORCE OF LAW & CANNOT be altered even by Lok Sabha or challenged in ANY court (Art 329(a))!',
        callouts: [
          'Wait: Assuring Southern fairness, 84th Amd (2001) froze total State seat counts at 1971 Census until first Census after 2026!',
          'Constituted 4 times: 1952, 1963, 1973, 2002 (plus 2020 J&K statutory panel)',
          'Parliament cannot pass resolution modifying Delimitation Order once Gazette-notified!'
        ],
        landmarkCase: 'Meghraj Kothari v. Delimitation Commission (1967)',
        examTrap: 'Can Lok Sabha debate and amend a Delimitation Commission final Order? NO — once gazetted, it has absolute finality free from Parliamentary modification & court challenge (Art 329(a))!'
      , colorKey: 'violet'
      },
      {
        id: 'el-rpa51',
        badge: 'RPA 1951 · POLLS & CRIME',
        title: 'RPA 1951: Candidate Qualifications, Party Registration & Sec 8',
        subtitle: 'Lily Thomas (2013): >=2 Yr Jail = Immediate MP/MLA Disqualification + 6 Yrs!',
        tag: 'Sec 29A Parties + Sec 8(3)',
        edgeLabel: 'Poll Integrity',
        rule: 'RPA 1951 governs election notifications, nomination, party registration (Sec 29A — notice: ECI can register parties, yet CANNOT deregister inactive parties except fraud!), Election Offences, Sec 123 Corrupt Practices & Sec 8 Criminal Disqualification.',
        callouts: [
          'Lily Thomas (2013): Struck down Sec 8(4) 3-month appeal shield -> >=2 yr conviction disqualifies IMMEDIATELY (+ 6 yrs post-release ban!)',
          'If conviction itself gets STAYED on appeal (Lok Prahari / Rahul Gandhi 2023), disqualification suspends!',
          'Association for Democratic Reforms (ADR 2002): Voters have Art 19(1)(a) Fundamental Right to know candidate’s Crime, Assets & Education affidavits!'
        ],
        landmarkCase: 'Lily Thomas (2013) & Union of India v. ADR (2002)',
        examTrap: 'TWO TOP RPA 1951 TRAPS: (1) Can ECI deregister a political party merely for never contesting elections or poor results? NO (INC v. Inst. of Social Welfare 2002)! (2) Sec 8 disqualification triggers at >=2 YEARS sentence!'
      , colorKey: 'rose'
      },
      {
        id: 'el-329b',
        badge: 'ART 329(b) · HIGH COURT',
        title: 'No Stay Once Notification Fires -> Only High Court Election Petition!',
        subtitle: 'Ponnuswami Rule + 19th Amendment (1966) HC Original Trial',
        tag: 'Within 45 Days Post-Result',
        edgeLabel: 'HC Trial Only',
        rule: 'In N.P. Ponnuswami (1952), SC ruled Art 329(b) bars ALL writs/suits interrupting elections from Notification to Declaration! Any dispute runs strictly AFTER results via Election Petition in HIGH COURT (within 45 days; 19th Amd abolished old tribunals)!',
        callouts: [
          'Appeal from High Court Election Petition lies directly as of right to SUPREME COURT (RPA s.116A)!',
          'President / Vice-President election disputes bypass HC completely -> EXCLUSIVELY Supreme Court (Art 71)!',
          'Note: Local Body Panchayat/Municipality disputes barred identically under Arts 243O & 243ZG!'
        ],
        landmarkCase: 'N.P. Ponnuswami v. Returning Officer (1952) & 19th Amendment Act 1966',
        examTrap: 'WHICH COURT HEARS ELECTION PETITIONS FIRST? MP/MLA = HIGH COURT (Original jurisdiction via 19th Amd 1966); President/VP = SUPREME COURT (Art 71 Exclusive)!'
      , colorKey: 'emerald'
      }
    ]
  },
  {
    id: 'vpat-evm-nota-model-code',
    title: 'Electoral Integrity Reforms: ECI Act 2023, VVPAT, NOTA & Model Code of Conduct',
    category: 'Modern Election Governance',
    track: 'Bodies & Mechanics',
    articles: 'Art 324 + 2023 Act + Case Law',
    summary: 'Radial map updating the ECI Selection Matrix post-Anoop Baranwal (2023) & CEC/EC Act 2023, VVPAT audit mandates (2024), NOTA (PUCL 2013), and MCC legality.',
    topology: 'hub-spoke',
    rootLabel: 'ELECTORAL REFORMS',
    rootSub: 'Art 324 Plenaries & Modern Rulings',
    edgeFlowTag: '2013 – 2024 REFORMS',
    footerRule: 'CEC & Other ECs (Appointment, Conditions of Service & Term of Office) Act 2023 replaced Baranwal’s CJI seat with a Union Cabinet Minister nominated by PM (PM + Union Minister + LoP LS)!',
    nodes: [
      {
        id: 'er-2023act',
        badge: 'BARANWAL vs 2023 ACT',
        title: 'CEC & Election Commissioners Selection Panel (Art 324(2))',
        subtitle: 'PM + Union Cabinet Minister + LoP Lok Sabha (SC Stature Protected)',
        tag: '6 Yrs / 65 Age • SC Salary',
        edgeLabel: 'Selection Act 23',
        rule: 'In Anoop Baranwal (Mar 2023 5J), SC created an interim panel (PM + LoP + CJI) UNTIL Parliament enacted a law under Art 324(2). Parliament passed CEC/EC Act Dec 2023: Search Committee (Law Minister) -> Selection Committee (PM + Union Minister + LoP Lok Sabha)!',
        callouts: [
          'Fixed Tenure = 6 Years or Age 65; Salary/Conditions equal to SUPREME COURT JUDGE (restored from initial Cabinet Secy draft)!',
          'CJI REMOVED by Act (replaced by Union Minister -> 2:1 Executive majority; pending SC scrutiny!)',
          'Still retains asymmetrical Art 324(5) Removal: CEC removed like SC Judge; Other ECs removed by President ONLY ON CEC RECOMMENDATION!'
        ],
        landmarkCase: 'Anoop Baranwal (2023 5J) & CEC/EC Appointments Act 2023',
        examTrap: 'CURRENT LAW UPDATE (DEC 2023 ACT): Does the CJI sit on the permanent Election Commissioner Selection Panel? NO — Parliament replaced CJI with a Union Cabinet Minister!'
      , colorKey: 'rose'
      },
      {
        id: 'er-nota',
        badge: 'PUCL (2013) · NOTA',
        title: 'NOTA ("None of the Above") — Right to Reject (Without Re-Poll!)',
        subtitle: 'Protects Voter Secrecy Under Art 19(1)(a) & 21',
        tag: 'No Repoll Rule Yet!',
        edgeLabel: 'PUCL 2013',
        rule: 'In PUCL v. UOI (2013), SC ordered ECI to introduce NOTA button so voters exercising negative choice preserve secret ballot equality without signing Form 49-O registers.',
        callouts: [
          'Even if NOTA polls the HIGHEST votes in India’s FPTP system, the candidate with next highest valid votes STILL WINS!',
          'NOTA does NOT trigger re-election under RPA 1951 (unlike local Maharashtra/Haryana SEC rules where Mayor/Sarpanch triggers re-poll!)',
          'Applies to Lok Sabha & State Assembly polls — Wait: SC barred NOTA in RAJYA SABHA indirect polls (Shailesh Manubhai Parmar 2018)!'
        ],
        landmarkCase: 'PUCL (2013 NOTA) & Shailesh Manubhai Parmar (2018 — No NOTA in RS)',
        examTrap: 'TWO TOP NOTA TRAPS: (1) If NOTA gets >50% or highest votes in an LS constituency, is the election cancelled? NO — runner-up wins! (2) Does NOTA apply to RAJYA SABHA elections? NO (struck down 2018)!'
      , colorKey: 'sky'
      },
      {
        id: 'er-vvpat',
        badge: 'VVPAT · 2013 TO 2024',
        title: 'EVM Architecture + 5-Booth Random VVPAT Verification',
        subtitle: 'April 2024 SC Ruling Rejected Return to Paper Ballots',
        tag: 'ADR VVPAT 2024',
        edgeLabel: 'Paper Audit',
        rule: 'Subramanian Swamy (2013) mandated Voter Verifiable Paper Audit Trail (VVPAT); Chandrababu Naidu (2019) hiked tallying from 1 -> 5 random polling booths per Assembly segment; ADR v. ECI (April 2024) upheld 100% EVM integrity while sealing SLUs for 45 days!',
        callouts: [
          'EVMs are standalone non-networked microcontrollers (M3 generation tamper-locked)',
          'VVPAT slips allow post-result manual audit across 5 random booths per Assembly segment (if discrepancy -> VVPAT PAPER SLIP COUNT PREVAILS over EVM!)',
          '2024 SC allowed top-2 defeated candidates to pay for 5% micro-controller burnt-memory check within 7 days'
        ],
        landmarkCase: 'Subramanian Swamy (2013) & ADR v. ECI (VVPAT 2024)',
        examTrap: 'IF EVM count and VVPAT paper slip tally mismatch in a polling station, WHICH count legally prevails? The VVPAT PAPER SLIP count (Election Rules 56D)!'
      , colorKey: 'emerald'
      },
      {
        id: 'er-mcc',
        badge: 'MCC · CONSENSUS CODE',
        title: 'Model Code of Conduct & Art 324 Plenary Vacuum-Fill',
        subtitle: 'Non-Statutory Voluntary Consensus Enforced via Art 324 & IPC/BNS',
        tag: 'Starts From Press Date!',
        edgeLabel: 'Announcement Day',
        rule: 'Originated in 1960 Kerala Assembly elections -> nation-wide 1971. Model Code of Conduct has NO statutory backing (neither Parliament Act nor Rule!), yet ECI enforces it strictly from MINUTE OF PRESS ANNOUNCEMENT till Results using Art 324 + IPC/BNS/RPA penalties!',
        callouts: [
          'Effective immediately on Date of Press Conference Announcement (EVEN BEFORE Gazette Notification under RPA!)',
          'Bans new welfare schemes/transfers using Govt machinery, helicopter misuse & temple/caste hate speeches',
          'Art 324 Plenary Rule (Mohinder Singh Gill 1978): Where Parliament’s law is silent, ECI holds vast Art 324 plenary power (cannot violate existing statutory Act!)'
        ],
        landmarkCase: 'Mohinder Singh Gill v. Chief Election Commissioner (1978 5J)',
        examTrap: 'TWO MCC FACTS: (1) MCC does NOT have any statutory Act backing it! (2) It takes effect on the PRESS ANNOUNCEMENT DATE (NOT on later Gazette Notification date)!'
      , colorKey: 'violet'
      },
      {
        id: 'er-bonds',
        badge: 'ELECTORAL BONDS (2024 · 5J)',
        title: 'Electoral Bonds Struck Down (Art 19(1)(a) Voter Right to Know)',
        subtitle: 'ADR v. Union of India (Feb 2024 Unanimous 5-Judge Bench)',
        tag: 'Black Money != Anonymity',
        edgeLabel: '2024 Verdict',
        rule: '5-Judge Unanimous Bench (CJI Chandrachud) struck down anonymous Electoral Bonds Scheme (Finance Act 2017 amendments to RPA s.29C, Companies Act s.182 unlimited corporate cap & IT Act) as violating Voters’ Fundamental Right to Information under Art 19(1)(a) & Manifest Arbitrariness under Art 14!',
        callouts: [
          'Curbing black money is valid aim, BUT total voter secrecy + unlimited loss-making corporate donations violated Proportionality Test!',
          'Restored pre-2017 Companies Act cap (7.5% net profit for companies >= 3 yrs old)',
          'Forced SBI disclosure of donor-to-party alpha-numeric bond mappings'
        ],
        landmarkCase: 'Association for Democratic Reforms v. Union of India (Feb 2024 5-Judge)',
        examTrap: 'HIGH-YIELD 2024 LANDMARK: Anonymous Electoral Bonds fell primarily on ART 19(1)(a) VOTER INFORMATION RIGHTS + Proportionality + Art 14 Manifest Arbitrariness!'
      , colorKey: 'accent'
      }
    ]
  },
  {
    id: 'emergency-ratification-clocks',
    title: 'Emergency Clocks: Approval Windows, Majorities & Revocation (Arts 352, 356, 360)',
    category: 'Emergency Mechanics',
    track: 'Bodies & Mechanics',
    articles: 'Articles 352, 356, 358, 359 & 360',
    summary: 'Precision procedural clock comparing the 1-month vs 2-month approval windows, Special vs Simple majorities, 3-yr ceiling & 44th Amendment revocation shields.',
    topology: 'cycle-sequence',
    rootLabel: '3 EMERGENCY CLOCKS',
    rootSub: 'Arts 352 (1 Mo) · 356 (2 Mo) · 360 (2 Mo)',
    edgeFlowTag: 'APPROVAL & LIFE',
    footerRule: '44TH AMENDMENT (1978) TIGHTENED ART 352 DRAMATICALLY: "Internal Disturbance" -> "Armed Rebellion"; Written Union Cabinet Advice Mandatory; Approval Window Cut 2 Mo -> 1 Mo; Majority Raised Simple -> Special; + 10% LS Revocation Check!',
    nodes: [
      {
        id: 'em-352',
        badge: 'ART 352 · 1 MONTH + SPECIAL',
        title: 'National Emergency (1-Month Clock • 6 Mo Renewable Infinite)',
        subtitle: 'War / External Aggression / Armed Rebellion • 44th Amd Guard',
        tag: 'No Maximum Duration Cap!',
        edgeLabel: '1 Mo Special Maj',
        rule: 'Issued ONLY on WRITTEN advice of Union Cabinet (352(3)). Must pass BOTH Houses within 1 MONTH (if LS dissolved -> 30 days after new LS sits!) by SPECIAL MAJORITY (>50% Total + 2/3 P&V). Survives 6 months per approval INDEFINITELY!',
        callouts: [
          'REVOCATION SPECIAL RULE: President can revoke anytime; OR LOK SABHA ALONE (even 1/10th LS MPs demand special 14-day sitting!) can force revocation by SIMPLE MAJORITY!',
          'Art 358: Art 19 suspends ONLY on War/External Aggression — NEVER on Armed Rebellion!',
          'Art 359: Other Part III rights (NEVER Arts 20 & 21!) suspend ONLY via Presidential Order!'
        ],
        landmarkCase: 'Minerva Mills (1980 — Art 352 Judicial Review) & 44th Amd 1978',
        examTrap: 'MEMORIZE REVOCATION ASYMMETRY: Approving Art 352 needs BOTH Houses by SPECIAL Majority; Disapproving/Revoking Art 352 needs ONLY LOK SABHA by SIMPLE Majority!'
      , colorKey: 'rose'
      },
      {
        id: 'em-356',
        badge: 'ART 356 · 2 MONTHS + SIMPLE',
        title: 'President’s Rule (2-Month Clock • 6 Mo Max 3 Yrs Cap)',
        subtitle: 'Extension Beyond 1 Yr Needs BOTH Art 352 Active + ECI Poll Impossibility!',
        tag: 'Simple Majority Approval',
        edgeLabel: '2 Mo Simple -> 3 Yr Max',
        rule: 'Approved by BOTH Houses within 2 MONTHS by SIMPLE MAJORITY. Runs 6 months each -> extends up to 1 Year normally -> BEYOND 1 YEAR (max 3 years) STRICTLY requires TWO 44th Amd conditions BOTH met: (1) Art 352 active in India/State AND (2) ECI certifies Assembly elections impossible!',
        callouts: [
          'Cannot dissolve State Assembly until BOTH Houses approve (S.R. Bommai 1994!)',
          'Zero impact on citizen Fundamental Rights under Arts 19/20/21',
          'President can revoke Art 356 unilaterally at any time without Parliament vote!'
        ],
        landmarkCase: 'S.R. Bommai (1994) & 44th Amendment (1-Yr Cap Guard)',
        examTrap: 'AFTER 1 YEAR OF PRESIDENT’S RULE (Art 356(5)): Parliament CANNOT extend past 1 yr unless BOTH (1) National Emergency Art 352 is active AND (2) ECI certifies elections impossible! (Punjab had special Amendment extensions earlier!)'
      , colorKey: 'sky'
      },
      {
        id: 'em-360',
        badge: 'ART 360 · 2 MONTHS ONCE',
        title: 'Financial Emergency (2-Month Approval -> Indefinite Until Revoked!)',
        subtitle: 'Zero Periodic 6-Month Renewal Needed • NEVER Invoked in India',
        tag: 'Cuts Govt + SC/HC Salaries!',
        edgeLabel: '2 Mo -> Infinite!',
        rule: 'Approved by BOTH Houses within 2 MONTHS by SIMPLE MAJORITY. ONCE APPROVED, CONTINUES INDEFINITELY UNTIL REVOKED BY PRESIDENT — NO repeated 6-month Parliamentary approvals required!',
        callouts: [
          'Never imposed in Indian history (avoided even during 1991 Balance of Payments crisis!)',
          'Empowers Union to direct financial canons, reserve ALL State Money/Financial Bills for President (Art 207), & cut Salaries/Allowances of Union/State Staff INCLUDING SC & HC Judges!',
          '38th Amd tried making Presidential satisfaction final -> 44th Amd restored full Judicial Review!'
        ],
        landmarkCase: 'Articles 360(1)–(4) Financial Crisis Rules',
        examTrap: 'HIGHEST ART 360 PRELIMS TRAP: How long does Financial Emergency last once Parliament approves it once in 2 months? INDEFINITELY without needing 6-month renewals — AND it IS the ONLY clause allowing salary cuts of SC/HC Judges!'
      , colorKey: 'emerald'
      },
      {
        id: 'em-358-359',
        badge: 'ARTS 358 vs 359',
        title: 'Part III Impact: Automatic Art 19 Freeze (358) vs Order Suspension (359)',
        subtitle: 'Post-44th Amd Only War Laws Carrying Clear Emergency Recital Protected',
        tag: 'Arts 20 & 21 Immune',
        edgeLabel: 'Rights Matrix',
        rule: 'Art 358 suspends Art 19 across ALL of India automatically ONLY during War/External Aggression (NOT Armed Rebellion); Art 359 suspends ONLY court-enforcement of named FRs (NEVER 20 & 21!). Post-44th Amd, only laws directly reciting Emergency tie get protection!',
        callouts: [
          'Arts 358 & 359 apply ONLY under Art 352 National Emergency (NEVER under Art 356/360)',
          'Notice: Both 358 & 359 revive rights instantly when Emergency ends (laws made ultra vires cease operating cleanly post-Emergency)',
          'ADM Jabalpur (1976) overruled constitutionally by 44th Amd & judicially by Puttaswamy (2017)'
        ],
        landmarkCase: '44th Amendment Act 1978 Safeguards',
        examTrap: 'Quick Comparison: Under Art 358, Art 19 is suspended automatically across entire India; under Art 359, Arts 20 & 21 can NEVER be suspended!'
      , colorKey: 'violet'
      }
    ]
  },
  {
    id: 'official-languages-part-xvii',
    title: 'Official Languages Architecture (Arts 343–351): Union, Courts & 22-Language 8th Schedule',
    category: 'Linguistic & Cultural Provisions',
    track: 'Bodies & Mechanics',
    articles: 'Part XVII (Arts 343 – 351)',
    summary: 'Radial map clarifying why India has NO "National Language" — tracing Official Union Languages (Hindi Devanagari + English), SC/HC English default (Art 348), 22 8th Schedule Languages & Classical status.',
    topology: 'hub-spoke',
    rootLabel: 'OFFICIAL LANGUAGES',
    rootSub: 'Part XVII • No "National Language" Text',
    edgeFlowTag: 'ARTS 343–351',
    footerRule: 'CONSTITUTION FACT: India has NO constitutional "National Language" — Art 343 calls Hindi in Devanagari script + International Indian Numerals (with English continued via 1963 Act) "OFFICIAL LANGUAGE OF THE UNION"!',
    nodes: [
      {
        id: 'ol-343',
        badge: 'ARTS 343–344 · UNION',
        title: 'Hindi (Devanagari) + English Indefinite Continuation (1963 Act)',
        subtitle: 'Official Numerals = International Form of Indian Numerals (0–9)!',
        tag: 'Official Languages Act 1963',
        edgeLabel: 'Union Language',
        rule: 'Art 343 sets Hindi in Devanagari script + International numerals as Union Official Language, with English initially for 15 yrs (till 1965). Official Languages Act 1963 (+ 1967 Amd) extended ENGLISH indefinitely until non-Hindi States concur to end!',
        callouts: [
          'Wait: Numerals for Union official purposes use INTERNATIONAL FORM ("1, 2, 3"), NOT Devanagari script numerals!',
          'Art 344 Parliamentary Language Committee (30 MPs: 20 LS + 10 RS) reviews progress',
          'B.G. Kher Commission (1955) was the First Official Language Commission'
        ],
        landmarkCase: 'Official Languages Act 1963 (Amended 1967) & Art 343(1)',
        examTrap: 'SHARPEST TRAP: Which numeral form is prescribed by Art 343(1) for official Union use? "INTERNATIONAL FORM OF INDIAN NUMERALS" (NOT Devanagari numerals)!'
      , colorKey: 'sky'
      },
      {
        id: 'ol-345',
        badge: 'ARTS 345–347 · STATES',
        title: 'State Official Languages (Need NOT Be Inside 8th Schedule!)',
        subtitle: 'Plus Art 347 Minority Language Recognition by President',
        tag: 'e.g. English in Nagaland!',
        edgeLabel: 'Regional Choice',
        rule: 'State Legislature adopts ANY 1+ languages used in State OR Hindi as official State language (e.g. Nagaland, Meghalaya, Arunachal use English; Mizoram uses Mizo — does NOT have to be in 8th Schedule!). Under Art 347, President may recognize a substantial minority population’s language inside a State!',
        callouts: [
          'Communication between Union & State (or State-to-State) uses authorized Union Link Language (English) UNLESS two States agree on Hindi (Art 346)!',
          'Art 350 entitles citizen to submit grievance redress petition in ANY language used in Union or State!',
          'Art 350A (7th Amd): Adequate facilities for MOTHER TONGUE primary education!'
        ],
        landmarkCase: 'Articles 345, 346, 347 & 350',
        examTrap: 'Can a State choose a language NOT listed in the 8th Schedule (like English in Nagaland or Mizo in Mizoram) as its State Official Language? YES under Art 345!'
      , colorKey: 'emerald'
      },
      {
        id: 'ol-348',
        badge: 'ART 348 · JUDICIARY',
        title: 'Supreme Court & High Courts English Mandate + Authorized Bills',
        subtitle: 'HC Can Use Hindi/State Language With PRESIDENT Consent (Not SC!)',
        tag: 'Only Authoritative Text = EN',
        edgeLabel: 'Courts = English',
        rule: 'Until Parliament provides otherwise, ALL Supreme Court & High Court proceedings + ALL Bills/Acts/Ordinances authoritative texts SHALL BE IN ENGLISH! Governor (with PRESIDENT’s prior consent) may authorize Hindi/State language in HC proceedings — YET judgments/decrees STILL require English unless authorized, and SC remains 100% English!',
        callouts: [
          'Today UP, Bihar, MP & Rajasthan HCs authorize Hindi arguments/judgments via 1963 Act s.7 with President consent',
          'Authoritative text of EVERY Parliament Bill, Act & Ordinance stays English (even with Hindi translation)',
          'Subordinate District Court language is set by State Government (CPC/CrPC)'
        ],
        landmarkCase: 'Article 348(1)–(3) Judicial Language Lock',
        examTrap: 'WHO consents before a State High Court can switch proceedings/judgments to Hindi/State language? State Governor WITH PRIOR CONSENT OF THE PRESIDENT OF INDIA (Art 348(2))!'
      , colorKey: 'rose'
      },
      {
        id: 'ol-8th',
        badge: '8TH SCHEDULE · 14 -> 22',
        title: '22 Eighth Schedule Languages + 11 Classical Languages (2024 Update!)',
        subtitle: 'Added: 21st (Sindhi), 71st (KMN), 92nd (BDMS) • Oct 2024: +5 Classical Languages!',
        tag: 'Arts 344 & 351 List',
        edgeLabel: '22 Sch. / 11 Class.',
        rule: 'Originally 14 languages -> 22 today: Sindhi (21st Amd 1967), Konkani-Manipuri-Nepali (71st Amd 1992), Bodo-Dogri-Maithili-Santhali (92nd Amd 2003 + Oriya->Odia 96th Amd 2011!). ENGLISH IS NOT IN 8TH SCHEDULE!',
        callouts: [
          'WAIT 2024 UPDATE: Cabinet added FIVE new Classical Languages in Oct 2024 (Marathi, Pali, Prakrit, Assamese, Bengali) alongside Tamil, Sanskrit, Kannada, Telugu, Malayalam & Odia -> TOTAL 11 CLASSICAL LANGUAGES!',
          'Note: "Classical Languages" is a Government Ministry of Culture status — NOT a Constitutional category!',
          'Art 351 directs Union to promote Hindi as link medium drawing vocabulary primarily from Sanskrit & 8th Schedule languages'
        ],
        landmarkCase: '21st, 71st, 92nd, 96th Amds & Oct 2024 Classical Cabinet Expansion',
        examTrap: 'THREE MASSIVE TRAPS: (1) Is ENGLISH in the 8th Schedule? NO! (2) Total 8th Schedule languages = 22 (remember BDMS 92nd Amd)! (3) Classical Languages (11 as of Oct 2024) are Executive Cabinet tags, NOT Constitution Schedules!'
      , colorKey: 'violet'
      }
    ]
  },
  {
    id: 'constitutional-amendments-milestones',
    title: 'High-Yield Amendments Map: 1st, 24th, 42nd, 44th, 52nd, 73rd, 86th & 101st–106th',
    category: 'Constitutional Turning Points',
    track: 'Bodies & Mechanics',
    articles: '1st to 106th Amendments',
    summary: '4-era pyramid grouping India’s 106 Constitutional Amendments into Early Agrarian Reforms, Crisis/Restoration Amendments, Decentralisation/Social Amendments, and Modern (100th–106th) Milestones.',
    topology: 'pyramid-hierarchy',
    rootLabel: '106 CONSTITUTIONAL AMENDMENTS',
    rootSub: 'Art 368 Architectural Milestones (1951–2023)',
    edgeFlowTag: '4 REFORM ERAS',
    footerRule: 'Latest 100th–106th Series: 100th Bangladesh Enclaves -> 101st GST -> 102nd NCBC -> 103rd 10% EWS -> 104th End Anglo-Indian + Extend SC/ST -> 105th State OBC List -> 106th 33% Nari Shakti!',
    nodes: [
      {
        id: 'am-era1',
        badge: 'ERA 1 · 1951–1971',
        title: 'Foundations: 1st (9th Sch), 7th (14 States), 21st & 24th Amd',
        subtitle: 'Agrarian Shield + Linguistic Map + Post-Golaknath Constituent Recovery',
        tag: 'Pre-Kesavananda',
        rule: '1st (1951): Art 15(4) backward quota, 19(2) Public Order, 31A/B & 9th Schedule! 7th (1956): 14 States + Common HCs + Art 258A! 24th (1971): Made Presidential assent to 368 Bills COMPULSORY & inserted Art 13(4)!',
        callouts: [
          '1st Amd passed by Provisional Parliament BEFORE 1st General Election!',
          '9th (1960 Berubari) & 11th (VP election valid despite vacancies) & 21st (Sindhi)',
          '26th Amd (1971) abolished Privy Purses of Princely Rulers!'
        ],
        landmarkCase: 'Shankari Prasad (1951) & Kesavananda Upholding 24th (1973)',
        examTrap: 'Which Amendment made it MANDATORY for the President to give assent to an Art 368 Constitutional Amendment Bill ("shall give")? 24th Amendment Act 1971!'
      , colorKey: 'sky'
      },
      {
        id: 'am-era2',
        badge: 'ERA 2 · 42ND vs 44TH',
        title: '42nd "Mini-Constitution" (1976) vs 44th Democratic Reset (1978)',
        subtitle: 'Socialist/Secular/Integrity + Duties vs Armed Rebellion + 300A + Art 20/21 Guard',
        tag: 'Clashing Ideologies',
        rule: '42nd (1976) inserted Preamble words, Part IVA Duties, 39A/43A/48A DPSPs, Tribunals Part XIV-A, moved 5 subjects State->Concurrent List (Education, Forests, Weights, Wildlife, Admin Justice!), & froze 1971 Census. 44th (1978) restored 5-yr LS term, made 300A legal right, inserted Cabinet Written Advice (352), "Armed Rebellion", & Art 20/21 emergency immunity!',
        callouts: [
          '5 State List subjects shifted by 42nd Amd to Concurrent List: Education, Forests, Weights & Measures, Protection of Wild Animals/Birds, & Administration of Justice (except SC/HC)',
          '42nd made Advice binding; 44th added ONE Reconsideration option!',
          '44th restored quorum, press protection (Art 361A) & judicial review over Emergency!'
        ],
        landmarkCase: 'Minerva Mills (1980 — Struck Down 42nd Amd Art 368(4)/(5))',
        examTrap: 'Remember the 5 Concurrent transfers by 42nd Amendment (1976): Education, Forests, Wildlife Protection, Weights/Measures, Lower Justice!'
      , colorKey: 'rose'
      },
      {
        id: 'am-era3',
        badge: 'ERA 3 · 1985–2011',
        title: 'Institutional Strengthening: 52nd, 61st, 69th, 73rd/74th, 86th & 91st',
        subtitle: 'Defection -> Age 18 -> Delhi -> Grassroots -> Education -> 15% Cap',
        tag: 'Modern Governance Spine',
        rule: '52nd (1985): 10th Sch Defection! 61st (1988): Voting age 21->18! 69th (1991): NCT Delhi Assembly 239AA! 73rd/74th (1992): Parts IX & IX-A Panchayats/Municipalities! 86th (2002): Art 21A Education! 91st (2003): 15% CoM cap & ended 1/3rd Split! 97th (2011): Co-ops!',
        callouts: [
          '84th (2001): Extended 1971 seat freeze to post-2026 Census',
          '89th (2003): Split NCSC (338) & NCST (338A)',
          '99th (2014): NJAC (STRUCK DOWN in entirety by SC in 2015!)'
        ],
        landmarkCase: 'NJAC 2015 (Struck 99th) & Rajendra Shah 2021 (Trimmed 97th)',
        examTrap: 'Check 61st Amd Year: Passed in 1988 (effective March 1989) cutting Art 326 voting age from 21 to 18!'
      , colorKey: 'emerald'
      },
      {
        id: 'am-era4',
        badge: 'ERA 4 · 100TH–106TH',
        title: 'Contemporary Century: 100th (LBA) to 106th (Nari Shakti 33%)',
        subtitle: '101 GST · 102 NCBC · 103 EWS · 104 SC/ST · 105 State OBC · 106 Women',
        tag: 'Latest Constitutional Wave',
        rule: '100th (2015 Bangladesh Enclaves); 101st (2016 GST + Art 279A); 102nd (2018 NCBC 338B); 103rd (2019 10% EWS); 104th (2019 End Anglo-Indian seats + Extend SC/ST till Jan 2030); 105th (2021 State OBC List recovery); 106th (2023 Women 33% in LS/Assemblies/Delhi)!',
        callouts: [
          '104th Amd extended Art 334 SC/ST reservation for 10 yrs (till Jan 2030) YET did NOT extend Anglo-Indian nominations (Art 331/333)!',
          '106th Amd becomes operative strictly AFTER post-2026 Census & Delimitation!',
          'Count keeps strict precision: 106 enacted Constitutional Amendments'
        ],
        landmarkCase: 'Janhit Abhiyan 2022 (Upheld 103rd) & 106th Women Act 2023',
        examTrap: 'MATCH NUMBERS PERFECTLY: 101=GST; 102=NCBC; 103=EWS; 104=No Anglo-Indians/SC-ST 2030; 105=State OBCs; 106=33% Women!'
      , colorKey: 'violet'
      }
    ]
  },
  {
    id: 'lokpal-cvc-vigilance-triangle',
    title: 'Anti-Corruption Architecture: Lokpal & Lokayuktas (2013), CVC & Whistleblower Web',
    category: 'Integrity Institutions',
    track: 'Bodies & Mechanics',
    articles: 'Lokpal Act 2013 & CVC Act 2003',
    summary: 'Equilibrium diagram balancing Parliamentary anti-corruption oversight (Lokpal Ombudsman over PM/Ministers/MPs) against Executive CVC vigilance & administrative separation from CBI.',
    topology: 'balance-beam',
    rootLabel: 'STATUTORY ANTI-CORRUPTION & INTEGRITY ARCHITECTURE',
    rootSub: '1st ARC (1966) Ombudsman Blueprint -> CVC Act 2003 -> Lokpal Act 2013',
    edgeFlowTag: 'INTEGRITY BALANCE',
    footerRule: 'BOTH Lokpal (2013) & CVC (2003) are STATUTORY bodies (NOT Constitutional!). Lokpal holds criminal PCA prosecution power over PM (with safeguards), Ministers & MPs; CVC oversees Civil Vigilance & CBI corruption supervision!',
    nodes: [
      {
        id: 'ac-arc',
        badge: 'ORIGIN · SANTHANAM & 1ST ARC',
        title: 'Scandinavian Ombudsman -> CVC (1964) & Lokpal (2013)',
        subtitle: 'Statutory Mandate Covering Centre & States Equally',
        tag: '5-Yr Term / 70 Age (Lokpal)',
        rule: 'Morarji Desai’s 1st Administrative Reforms Commission (1966) proposed Lokpal & Lokayuktas modeled on Ombudsman (Sweden 1809); Maharashtra passed 1st State Lokayukta (1971); Parliament enacted Lokpal & Lokayuktas Act 2013.',
        callouts: [
          'CVC set up 1964 via Executive Resolution (Santhanam Comm 1962) -> Statutoryized 2003!',
          'Note: Odisha passed first Lokayukta Bill (1970, effective 1983), while MAHARASHTRA enacted & operationalized the 1st functional Lokayukta in 1971!',
          'Lokpal Act 2013 required States to establish State Lokayuktas within 1 year!'
        ],
        landmarkCase: '1st ARC (1966) & Lokpal and Lokayuktas Act, 2013',
        examTrap: 'WHICH State was first to establish a functioning Lokayukta? MAHARASHTRA (1971)!'
      , colorKey: 'sky'
      },
      {
        id: 'ac-lokpal',
        badge: 'LOKPAL · 1 CHAIR + 8 MAX',
        title: 'Composition (50% Judicial + 50% SC/ST/OBC/Min/Women)',
        subtitle: 'Panel: PM + Speaker + LoP LS + CJI/Nominee + 1 Eminent Jurist',
        tag: 'Covers PM & All Groups A–D',
        rule: '1 Chairperson (former CJI/SC Judge/Eminent person) + up to 8 Members (50% Judicial; 50% reserved cumulatively for SC/ST/OBC/Minorities/Women!). Term: 5 YRS OR AGE 70. Removed by President after SC inquiry on >=100 MP petition!',
        callouts: [
          'Selection Committee: PM (Chair), Lok Sabha Speaker, LoP Lok Sabha, CJI (or SC judge nominee) + ONE Eminent Jurist nominated by President!',
          'JURISDICTION INCLUDES PRIME MINISTER — EXCLUDING International Relations, External/Internal Security, Public Order, Atomic Energy & Space (and needs 2/3rd Full Lokpal approval + in-camera probe)!',
          'Covers Ministers, MPs (except Art 105 inside-House votes/speeches!), Group A–D staff & Foreign-funded NGOs (>10L)'
        ],
        landmarkCase: 'Common Cause v. Union of India (2017 — Confirming Single-Largest Party LoP Rule Validity)',
        examTrap: 'HIGHEST LOKPAL DETAILS: Max Members = 8 (+ 1 Chair); Term = 5 Yrs or Age 70; 50% Judicial + 50% Social Diversity; Covers PM EXCEPT Security/Space/Foreign Affairs/Atomic Energy!'
      , colorKey: 'violet'
      },
      {
        id: 'ac-cvc',
        badge: 'CVC · 1+2 COMMISSION',
        title: 'Central Vigilance Commission (4 Yrs / 65 Age)',
        subtitle: 'Panel: PM + Union Home Minister + LoP Lok Sabha (Appointed 4 Yrs)',
        tag: 'Advisory + CBI PCA Supervision',
        rule: 'Multi-member statutory body: 1 Central Vigilance Commissioner + max 2 Vigilance Commissioners appointed by President on PM + Home Minister + LoP LS recommendation. Term: 4 YEARS or AGE 65 (no post-retirement Union/State govt job!).',
        callouts: [
          'NOTE TERM DIFFERENCE: Lokpal = 5 Yrs / 70 Age; CVC = 4 Yrs / 65 Age!',
          'Supervises CBI investigation strictly under Prevention of Corruption Act; recommends vigilance penalties via CVOs inside ministries!',
          'Removed by President ONLY after Supreme Court Art 145 reference finds misbehaviour/incapacity'
        ],
        landmarkCase: 'Vineet Narain (1998) & CVC Act, 2003',
        examTrap: 'MEMORIZE COMPARISON: CVC Term = 4 Years / Age 65; Appointed by PM + HOME MINISTER + LoP! Lokpal Term = 5 Years / Age 70!'
      , colorKey: 'emerald'
      },
      {
        id: 'ac-guard',
        badge: 'LOKPAL vs LOKAYUKTA DIFF',
        title: 'Federal Flexibility in State Lokayuktas (No Uniformity)',
        subtitle: 'States Decide Whether Own Lokayukta Covers CM & Judges',
        tag: 'Art 105 Note',
        rule: 'While Lokpal uniform federal statute applies to Centre, State Lokayuktas vary sharply by State statutes: some cover CMs unconditionally, others exclude CM or High Court Judges (never cover Supreme/HC Judges under Lokpal anyway!).',
        callouts: [
          'Lokpal CANNOT investigate Sitting or Former JUDGES of SC/HCs -> Judges governed strictly by In-House & Art 124(4)!',
          'Salaries/expenses of Lokpal charged on Consolidated Fund of India',
          'Whistle Blowers Protection Act 2014 complements administrative anti-corruption shielding'
        ],
        landmarkCase: 'State of Gujarat v. R.A. Mehta (2013 — CJI/CJ Governor Consultation Over CM Deadlock)',
        examTrap: 'Does Lokpal cover Supreme Court & High Court Judges? NO! Does Lokpal investigate offences alleged against MPs inside Parliament debates? NO (Art 105(2) shields speech, though Sita Soren stripped bribery)!'
      , colorKey: 'rose'
      }
    ]
  },
  {
    id: 'national-commissions-women-nhrc-child',
    title: 'Statutory Rights Watchdogs: NHRC (2019 Amd), NCW & NCPCR Quotas and Limits',
    category: 'Human Rights Commissions',
    track: 'Bodies & Mechanics',
    articles: 'PHRA 1993/2019 · NCW 1990 · NCPCR',
    summary: 'Matrix contrasting India’s statutory human-rights commissions — highlighting the critical 2019 NHRC amendments (CJI OR SC Judge chair, 3-yr re-eligible term, 1-yr limitation) and purely recommendatory "Toothless Tiger" powers.',
    topology: 'matrix-split',
    rootLabel: 'HUMAN RIGHTS STATUTORY WATCHDOGS (NHRC · NCW · NCPCR)',
    rootSub: 'Protection of Human Rights Act 1993 (Amended 2019) • NCW Act 1990 • CPCR Act 2005',
    edgeFlowTag: 'RIGHTS WATCHDOGS',
    footerRule: 'ALL THREE ARE PURELY ADVISORY STATUTORY COMMISSIONS: Can summon witnesses (Civil Court powers), recommend interim relief/prosecution, YET CANNOT directly punish offenders or take matters > 1 YEAR OLD (NHRC)!',
    nodes: [
      {
        id: 'hr-nhrc',
        badge: 'NHRC · 2019 AMENDMENT ACT',
        title: 'National Human Rights Commission (Chair + 5 + 7 Ex-Officio!)',
        subtitle: '2019 Amd: Retired CJI OR Any SC Judge Eligible; 3-Yr Term (70 Age)',
        tag: '6-Member Selection Panel',
        side: 'left',
        rule: 'Protection of Human Rights Act 1993 (Paris Principles compliant!). **2019 Amendment changed Chair eligibility from ONLY former CJI -> ANY former CJI OR SC Judge; cut term 5 -> 3 Years (up to Age 70, RE-ELIGIBLE!); added 3rd non-judge Member (must be 1 Woman!) & 3 more ex-officio Chairs (NCBC, NCPCR, CCPD)!**',
        callouts: [
          'Selection Committee (6 Members!): PM (Chair) + Home Minister + Lok Sabha Speaker + LoP LS + Dy Chairman RS (note: Dy Chair, NOT VP!) + LoP RS!',
          '7 EX-OFFICIO MEMBERS: Chairs of NCSC, NCST, NCBC, NCW, NCM, NCPCR & Chief Comm for PwDs!',
          'SHRC Chair post-2019: Former CJ OR Judge of ANY High Court (Note: Removed SOLELY by PRESIDENT after SC inquiry, EVEN FOR SHRC!!)'
        ],
        landmarkCase: 'Protection of Human Rights (Amendment) Act, 2019',
        examTrap: 'MEMORIZE ALL 3 NHRC 2019 REFORMS: (1) Chair can now be ANY former SC JUDGE (not only CJI)! (2) Term shortened to 3 YRS / 70 AGE + eligible for reappointment! (3) SHRC Chair/Members removed ONLY by PRESIDENT!'
      , colorKey: 'rose'
      },
      {
        id: 'hr-1yr',
        badge: 'NHRC LIMITS · ARMED FORCES',
        title: '1-Year Time Bar & Armed Forces Report Curb',
        subtitle: 'Cannot Probe Violations > 1 Yr Old; Limited Scope Over Army',
        tag: 'Recommendatory Only',
        side: 'left',
        rule: 'Under PHRA Sec 36(2), NHRC CANNOT inquire into ANY violation after expiry of ONE YEAR from date incident occurred! For Armed Forces complaints (Sec 19), NHRC can ONLY seek Central Govt report & make recommendations (Centre decides action in 3 months)!',
        callouts: [
          'Cannot inquire into matter already sub-judice before SHRC/another Commission',
          'Recommendations NOT binding (Govt informs NHRC within 1 month — 3 mo for Armed Forces — on action taken)',
          'Possesses full Civil Court inquiry power + jail/custody surprise visits'
        ],
        landmarkCase: 'Extra Judicial Execution Victim Families Assn (Manipur AFSPA Inquiry)',
        examTrap: 'CRITICAL PRELIMS LIMITS: (1) Can NHRC inquire into a 2-year-old human rights breach? NO (Sec 36(2) strict 1-YEAR bar)! (2) Does PM vs RS Chairman sit on NHRC selection panel? DEPUTY CHAIRMAN of RS sits, NOT VP/Chairman!'
      , colorKey: 'sky'
      },
      {
        id: 'hr-ncw',
        badge: 'NCW · ACT 1990 (EST. 1992)',
        title: 'National Commission for Women (Chair + 5 Members + Secy)',
        subtitle: 'Mandatory SC + ST Women Member • 3-Year Term (Central Nominated)',
        tag: 'Suo Motu Legal Review',
        side: 'right',
        rule: 'Statutory body (NCW Act 1990, formed Jan 1992): Chair + 5 Members (AT LEAST 1 SC + 1 ST member!) + Member-Secy. Investigates women’s constitutional/legal safeguards, custodial conditions, POSH/dowry laws, and funds key test litigation!',
        callouts: [
          'Appointed directly by Central Government (3-year tenure, removable by Central Govt for refusal/misconduct)',
          'Exercises Civil Court summons/discovery powers while probing violations',
          'Reviews pre-constitutional & modern gender laws proposing statutory fixes to Parliament'
        ],
        landmarkCase: 'National Commission for Women Act, 1990 (Sec 3 & 10)',
        examTrap: 'HOW LONG IS NCW TERM & MANDATORY DIVERSITY? 3 YEARS term; must include AT LEAST 1 SC AND 1 ST member!'
      , colorKey: 'violet'
      },
      {
        id: 'hr-ncpcr',
        badge: 'NCPCR · CPCR ACT 2005 (0–18)',
        title: 'National Commission for Protection of Child Rights (Est. 2007)',
        subtitle: 'Chair + 6 Members (AT LEAST 2 Women!) • Covers 0–18 Years',
        tag: 'RTE + POCSO Monitor',
        side: 'right',
        rule: 'Under CPCR Act 2005 (formed Mar 2007): Monitors child rights from AGE 0 TO 18 YEARS (UNCRC alignment!) + RTE Act 2009 & POCSO Act 2012 implementation! Composition: Chair + 6 Members (AT LEAST 2 MUST BE WOMEN!).',
        callouts: [
          'Term: 3 Years (up to 65 Age for Chair, 60 Age for Members — max 2 terms!)',
          'Note child-age distinction: Constitution Art 24 = <14; Art 21A = 6–14; NCPCR = 0–18 Years!',
          'Enjoys Civil Court powers & recommends Children’s Courts (Speedy POCSO/Juvenile checks)'
        ],
        landmarkCase: 'CPCR Act 2005 + RTE Act 2009 s.31 + POCSO Act s.44',
        examTrap: 'DON’T BLUR THE QUOTAS: NCPCR requires AT LEAST TWO WOMEN among its 6 members (3-yr term, age 0–18)! Wait — is NCPCR a Constitutional body under 21A? NO — STATUTORY body under 2005 Act!'
      , colorKey: 'emerald'
      }
    ]
  },
  {
    id: 'special-officers-minorities-350b',
    title: 'Linguistic & Minority Safeguards: Art 350A Mother Tongue & Art 350B Special Officer',
    category: 'Linguistic Minority Protection',
    track: 'Bodies & Mechanics',
    articles: 'Articles 350, 350A & 350B (7th Amd 1956)',
    summary: 'Decision flowchart distinguishing non-constitutional Statutory NCM (1992 Act covering 6 notified Religious Minorities) from CONSTITUTIONAL Special Officer for Linguistic Minorities (Art 350B, 7th Amd).',
    topology: 'flowchart',
    rootLabel: 'MINORITY ARCHITECTURE',
    rootSub: '350B (Constitutional) vs NCM (Statutory)',
    edgeFlowTag: 'LINGUISTIC vs RELIGIOUS',
    footerRule: 'MASSIVE EXAM SURPRISE: National Commission for Minorities (Religious — 1992 Act) is STATUTORY (under Minority Affairs Ministry!), whereas Commissioner for Linguistic Minorities (Art 350B, 7th Amd 1956) IS A CONSTITUTIONAL OFFICE!',
    nodes: [
      {
        id: 'lm-350',
        badge: 'ARTS 347 & 350 · GRIEVANCE',
        title: 'Right to Petition Any Official Authority in ANY Language',
        subtitle: 'Art 350 Prevents Linguistic Discrimination in Complaints',
        tag: 'Original 1950 Text',
        edgeLabel: 'Right to Submit',
        rule: 'Every person (not only citizens!) is entitled to submit representations for redress of grievances to ANY Union or State officer/authority in ANY language used in the Union or in that State.',
        callouts: [
          'Ensures administrative accessibility for non-English/non-Hindi speaking rural populations',
          'Complemented by Art 347 allowing President to mandate State recognition of minority languages',
          'Forms bedrock alongside Arts 29 & 30 cultural rights'
        ],
        landmarkCase: 'Articles 347 & 350 Constitutional Safeguards',
        examTrap: 'Notice Art 350 says "any language used in the Union OR in the State" — need NOT belong to the 8th Schedule!'
      , colorKey: 'sky'
      },
      {
        id: 'lm-350a',
        badge: 'ART 350A · 7TH AMD 1956',
        title: 'Primary Education Instruction in Mother Tongue',
        subtitle: 'Duty of State & Local Authorities + President May Direct!',
        tag: '7th Amendment Addition',
        edgeLabel: 'Primary Stage',
        rule: 'Added on States Reorganisation Commission recommendation (7th Amd 1956): Every State & local authority SHALL endeavour to provide adequate facilities for instruction in MOTHER-TONGUE at primary school stage to linguistic minority children!',
        callouts: [
          'President MAY issue binding directions to ANY State to secure such facilities',
          'Recognizes Directive force outside Part IV! (Compare 335 & 351)',
          'WAIT: State CANNOT force Mother Tongue as exclusive compulsory medium violating Parent Choice under Art 19(1)(a)/21/30 (Usha Mehta 2014 5J)!'
        ],
        landmarkCase: 'State of Karnataka v. Associated Management (Usha Mehta 2014 5-Judge)',
        examTrap: 'SUPREME COURT 5-JUDGE CHECK: State MUST offer Mother-Tongue primary facilities under Art 350A, YET CANNOT compulsorily force English-medium private schools to switch to Kannada/regional tongue!'
      , colorKey: 'emerald'
      },
      {
        id: 'lm-350b',
        badge: 'ART 350B · CONSTITUTIONAL',
        title: 'Special Officer for Linguistic Minorities (Allahabad HQ)',
        subtitle: 'Appointed by President • Submits Constitutional Reports Directly',
        tag: 'Ministry of Minority Affairs',
        edgeLabel: 'Constitution Officer',
        rule: 'Art 350B (inserted by 7th Amendment Act 1956!): President appoints Special Officer for Linguistic Minorities (Commissioner, headquartered at PRAYAGRAJ/Allahabad!) to investigate all constitutional linguistic safeguards & submit reports to President -> Parliament & State Govts.',
        callouts: [
          'Original 1950 Constitution had NO Art 350B — added by 7th Amendment 1956 post-SRC reorganization!',
          'Works administratively via Union Ministry of Minority Affairs (3 regional offices: Belgaum, Chennai, Kolkata)',
          'PURELY investigates & reports linguistic discrimination (ZERO enforcement/fine power!)'
        ],
        landmarkCase: '7th Constitutional Amendment Act, 1956 (Art 350B)',
        examTrap: 'WHERE ARE HEADQUARTERS & STATUS? Allahabad / Prayagraj; CREATED BY CONSTITUTION ART 350B (unlike Religious NCM created by statute 1992)!'
      , colorKey: 'violet'
      },
      {
        id: 'lm-ncm',
        badge: 'NCM · STATUTORY 1992',
        title: 'National Commission for Minorities (6 Notified Religions)',
        subtitle: 'Muslims, Christians, Sikhs, Buddhists, Parsis + Jains (Added 2014!)',
        tag: 'State-wise vs National',
        edgeLabel: 'Statutory Body',
        rule: 'Created by NCM Act 1992: Central Govt notifies Religious Minorities nationally — Muslims, Christians, Sikhs, Buddhists, Zoroastrians (Parsis), and JAIN community (added Jan 2014!). Currently Supreme Court examines State-level minority identification petitions (Ashwini Upadhyay / Pai rule).',
        callouts: [
          'Notice: Under T.M.A. Pai (2002) for ART 30 schools, "minority" IS determined STATE-WISE; whereas NCM Act Sec 2(c) lists 6 minorities NATIONALLY!',
          'NCM consists of Chair + Vice-Chair + 5 Members (all from notified minority communities; 3-yr term)',
          'NOT a Constitutional Commission (unlike NCSC, NCST, NCBC & 350B Linguistic Officer!)'
        ],
        landmarkCase: 'NCM Act 1992 & Bal Patil v. Union of India (2005)',
        examTrap: 'NAME THE 6 NOTIFIED MINORITIES UNDER NCM ACT: Muslims, Christians, Sikhs, Buddhists, Parsis, Jains (added 2014) — note NCM is STATUTORY, whereas Special Officer for Linguistic Minorities (350B) IS CONSTITUTIONAL!'
      , colorKey: 'rose'
      }
    ]
  },
  {
    id: 'constituent-assembly-committees',
    title: 'Constituent Assembly Blueprint: 8 Major Committees & Framing Timeline (1946–1950)',
    category: 'Constitutional Origins',
    track: 'Bodies & Mechanics',
    articles: 'Cabinet Mission Plan 1946 -> 1950',
    summary: '4-stage cycle tracing the 2 Yrs 11 Mo 18 Days Constituent Assembly journey: indirect provincial election (Nov 1946), Objectives Resolution, 8 Major Committees, and Nov 26/Jan 26 Enactment.',
    topology: 'cycle-sequence',
    rootLabel: 'CONSTITUENT ASSEMBLY',
    rootSub: '2 Yrs 11 Mo 18 Days • 11 Sessions',
    edgeFlowTag: 'FRAMING ARC',
    footerRule: 'Drafting Committee (7 Members, Aug 29 1947, Chair: Dr. B.R. Ambedkar) crafted text over 141 days across 3 Readings; Sir B.N. Rau was Constitutional Adviser (NOT an elected Assembly Member!).',
    nodes: [
      {
        id: 'ca-cabinet',
        badge: 'PHASE 1 · DEC 1946',
        title: 'Cabinet Mission Election & Dec 9/11 First Sittings',
        subtitle: '389 -> 299 Post-Partition; 1 Seat per 10 Lakh Population',
        tag: 'Indirect + PR-STV',
        edgeLabel: '1946 Formation',
        rule: 'Constituted Nov 1946 under Cabinet Mission Plan (1 seat/million; Provinces elected via PR-STV in 3 communities: General, Muslim, Sikh; Princely States nominated!). Dec 9: Dr Sachchidananda Sinha temporary Chair; Dec 11: Dr Rajendra Prasad elected President (with TWO Vice-Presidents: H.C. Mukherjee & V.T. Krishnamachari!).',
        callouts: [
          'WAIT: Constituent Assembly WAS PARTLY ELECTED (296 British India indirectly by MLAs) & PARTLY NOMINATED (93 Princely States) — NEVER elected by Universal Adult Franchise!',
          'Mahatma Gandhi & M.A. Jinnah did NOT sit in the Constituent Assembly!',
          'Sir B.N. Rau served as Constitutional Adviser; Prem Behari Narain Raizada hand-calligraphed text (Shantiniketan team led by Nandalal Bose illustrated margins!)'
        ],
        landmarkCase: 'Cabinet Mission Plan (May 1946) & Indian Independence Act 1947',
        examTrap: 'THREE CLASSIC FACT TRAPS: (1) Mahatma Gandhi was NOT a member! (2) Assembly had TWO Vice-Presidents (H.C. Mukherjee + V.T. Krishnamachari)! (3) Elephant was official Seal/Symbol of Assembly!'
      , colorKey: 'sky'
      },
      {
        id: 'ca-objres',
        badge: 'PHASE 2 · DEC 13 / JAN 22',
        title: 'Objectives Resolution & Sovereignty Independence Act',
        subtitle: 'Dual Role: Legislative Dominion Parliament (Mavlankar) vs Constitution Making (Prasad)',
        tag: 'Nov 17, 1947 Split',
        edgeLabel: 'Dual Chairmen',
        rule: 'Moved by Jawaharlal Nehru (Dec 13 1946), unanimously adopted Jan 22 1947 -> became blueprint of Preamble! After Indian Independence Act 1947 (post-Aug 1947), Assembly acted in TWO capacities: Constituent Body (chaired by Dr. Rajendra Prasad) vs Dominion Parliament (chaired by G.V. Mavlankar!).',
        callouts: [
          'Indian Independence Act 1947 made Assembly FULLY SOVEREIGN (could alter/repeal ANY British Act)!',
          'Adopted National Flag (July 22, 1947), Ratified Commonwealth membership (May 1949), National Anthem & Song (Jan 24, 1950)',
          'Post-partition strength dropped 389 -> 299 (229 Provinces + 70 Princely States)'
        ],
        landmarkCase: 'Objectives Resolution (Dec 13, 1946)',
        examTrap: 'When the Assembly met as the legislative Parliament of free India, WHO presided in the chair? G.V. MAVLANKAR (when drafting Constitution -> Dr Rajendra Prasad)!'
      , colorKey: 'emerald'
      },
      {
        id: 'ca-comms',
        badge: 'PHASE 3 · 8 MAJOR PANELS',
        title: 'Nehru (Union), Patel (FRs/States), Prasad (Rules) & Ambedkar (Drafting)',
        subtitle: 'Sub-Committees: J.B. Kripalani (FR) & H.C. Mukherjee (Minorities)',
        tag: 'Aug 29, 1947 Drafting',
        edgeLabel: 'Committees',
        rule: 'Nehru chaired Union Powers, Union Constitution & States Committee; Sardar Patel chaired Provincial Constitution + Advisory Committee on FRs, Minorities & Tribal Areas (with Sub-Committees: Kripalani FR, Mukherjee Minorities, Bordoloi NE Tribals!); Prasad chaired Steering & Rules; Ambedkar chaired 7-Member Drafting Committee.',
        callouts: [
          '7 Drafting Committee Members: Dr B.R. Ambedkar (Chair), N. Gopalaswami Ayyangar, Alladi Krishnaswami Ayyar, Dr K.M. Munshi, Syed Mohammad Saadullah, N. Madhava Rau (replaced B.L. Mitter!), T.T. Krishnamachari (replaced D.P. Khaitan!)',
          'Wait: Who chaired the "STATES COMMITTEE (Negotiating with Princely States)"? JAWAHARLAL NEHRU (NOT Sardar Patel! — Patel chaired Provincial Constitution & Advisory FR Committee!)',
          '15 Women Members sat in Assembly (incl. Sarojini Naidu, Hansa Mehta, Rajkumari Amrit Kaur, Dakshayani Velayudhan, Begum Aizaz Rasul)'
        ],
        landmarkCase: 'Drafting Committee Setup (August 29, 1947)',
        examTrap: 'MOST FAMOUS PRELIMS TRAP: Who chaired the "States Committee (for negotiating with States)"? JAWAHARLAL NEHRU (NOT Sardar Patel — check exact Laxmikanth/Assembly Committee list)!!'
      , colorKey: 'violet'
      },
      {
        id: 'ca-enact',
        badge: 'PHASE 4 · NOV 26 & JAN 26',
        title: 'Nov 26, 1949 Partial Commencement -> Jan 26, 1950 Republic Day',
        subtitle: '284 Signed • 16 Essential Articles Activated Nov 26 (Citizenship, ECI, Prov. Parl.)',
        tag: '395 Arts · 8 Schs (Orig.)',
        edgeLabel: 'Enactment',
        rule: 'Nov 26, 1949 ("Samvidhan Diwas"): 284 members signed (out of 299). Arts 5–9 (Citizenship), 60, 324 (ECI), 366, 367, 379, 380, 388, 391–393 came into force IMMEDIATELY ON NOV 26 1949! Remainder kicked in JAN 26, 1950 honouring 1930 Purna Swaraj Lahore Day.',
        callouts: [
          'Original Constitution contained Preamble + 395 Articles (22 Parts) + 8 Schedules',
          'Jan 24, 1950 Final Session: Elected Dr Rajendra Prasad as India’s FIRST President',
          'Wait: Preamble was enacted LAST AFTER entire rest of Constitution was finalized so Preamble stayed congruent with enacted articles!'
        ],
        landmarkCase: 'Article 394 Dual Commencement Clause',
        examTrap: 'WHICH Articles took effect ALREADY ON NOVEMBER 26, 1949 (under Art 394)? Citizenship (Arts 5–9), Elections Commission (Art 324), Presidential Oath (Art 60) & Provisional Parliament clauses!'
      , colorKey: 'rose'
      }
    ]
  },
  {
    id: 'indian-vs-global-constitutions',
    title: 'Global Constitutional DNA: What India Borrowed (and Adapted) From 10 Sources',
    category: 'Comparative Constitutionalism',
    track: 'Bodies & Mechanics',
    articles: '1935 Act + 9 Global Models',
    summary: 'Radial genetic blueprint tracing India’s structural foundation from GOI Act 1935 (~60% skeleton) plus UK, US, Ireland, Canada, Australia, Germany, USSR, France, Japan & South Africa.',
    topology: 'hub-spoke',
    rootLabel: 'GLOBAL CONSTITUTIONAL DNA',
    rootSub: 'GOI Act 1935 + 9 Democracies Adapted',
    edgeFlowTag: 'BORROWED & ADAPTED',
    footerRule: 'Dr. Ambedkar on "Ransacking": Nobody holds patent rights over fundamental constitutional ideas — India borrowed proven mechanisms, filtered them cleanly, and solved historical faults (like removing US strict Due Process ambiguity & creating Concurrent harmony)!',
    nodes: [
      {
        id: 'gd-1935',
        badge: 'BASE · GOI ACT 1935 (>50%)',
        title: 'Government of India Act 1935 Structural Skeleton',
        subtitle: 'Federal Scheme, Governor Office, Judiciary, PSCs, Emergency & Admin Details',
        tag: 'Largest Structural Source',
        edgeLabel: 'Base Architecture',
        rule: 'Over half the administrative provisions come directly from 1935 Act: Federal structure, Three 7th Schedule Lists scheme, Governor office, Public Service Commissions, Federal/SC framework & Emergency administrative machinery.',
        callouts: [
          'Note carefully: "Emergency PROVISIONS" (administrative survival) come from GOI Act 1935, while "SUSPENSION OF FUNDAMENTAL RIGHTS during Emergency" comes from WEIMAR GERMANY!',
          'Note on Instrument of Instructions (1935 Act) -> inspired Part IV DPSPs wording in Art 37!',
          'Kept continuity of existing colonial statutes via Art 372 subject to Art 13!'
        ],
        landmarkCase: 'Government of India Act, 1935',
        examTrap: 'SPLIT THE EMERGENCY BORROWING CAREFULLY: Administrative Emergency Mechanism = GOI ACT 1935; Suspension of Fundamental Rights during Emergency = WEIMAR CONSTITUTION (Germany)!'
      , colorKey: 'accent'
      },
      {
        id: 'gd-uk-us',
        badge: 'UK (WESTMINSTER) + USA',
        title: 'UK Parliamentary Govt / Writs vs US Fundamental Rights / Review',
        subtitle: 'Single Citizenship (UK) + Judicial Review & Impeachment (USA)',
        tag: 'Twin Pillars',
        edgeLabel: 'UK + USA',
        rule: 'From UK: Parliamentary govt, Rule of Law, Single Citizenship, Prerogative Writs, Cabinet System, Speaker, Law-making & Bicameralism. From USA: Fundamental Rights, Independent Judiciary, Judicial Review, Impeachment of President, Judge Removal & VP post!',
        callouts: [
          'Note: US gave "Equal Protection of Laws" & "Written Preamble Opening Words (We the People)"; UK gave "Equality Before Law" & Parliamentary Privileges!',
          'Wait: India REJECTED US Presidential Fixed-Tenure Executive in favour of accountable UK Cabinet system (and rejected UK Parliamentary Sovereignty in favour of Constitutional Supremacy)!',
          'Procedure Established by Law came from JAPANESE Constitution (later expanded toward Due Process in Maneka!)'
        ],
        landmarkCase: 'Constituent Assembly Parliamentary vs Presidential Debate',
        examTrap: 'WHICH country inspired "Procedure Established by Law" in Article 21? JAPAN (not UK or USA — though Gopalan later cited English statutory strictness)!'
      , colorKey: 'sky'
      },
      {
        id: 'gd-ire-can',
        badge: 'IRELAND + CANADA',
        title: 'Irish DPSPs / RS Nominations vs Canadian Strong-Centre Federation',
        subtitle: 'President Election Method (Ireland) + Residuary Union Power & SC Advisory (Canada)',
        tag: 'Unitary Tilt & Social Duty',
        edgeLabel: 'Ireland + Canada',
        rule: 'IRELAND: Directive Principles (DPSPs — borrowed originally by Ireland from Spain!), Method of Presidential Election, Nomination of 12 RS Members. CANADA: Federation with Strong Centre, Union holding Residuary Powers, Centre Appointing State Governors, SC Advisory Art 143!',
        callouts: [
          'Notice Indian "Union of States" phrase (Art 1) expressly follows Canadian terminology emphasizing indestructibility!',
          'Compare Canada (Centre holds Residuary -> India followed!) vs USA/Australia (States hold Residuary!)',
          'Governor appointed by Union President mirrors Canadian Lieutenant-Governor model'
        ],
        landmarkCase: 'Article 1, 248 (Canada) & Part IV (Ireland)',
        examTrap: 'WHO GAVE THREE ITEMS: DPSPs + Pres. Election Method + Nomination to Rajya Sabha? IRELAND! (While Election of RS Members came from SOUTH AFRICA!)'
      , colorKey: 'emerald'
      },
      {
        id: 'gd-aus-sa',
        badge: 'AUSTRALIA + SOUTH AFRICA',
        title: 'Australian Concurrent List & Joint Sitting vs SA Amendment & RS Election',
        subtitle: 'Trade Freedom Art 301 + Joint Sitting (108) vs Art 368 Procedure',
        tag: 'Flexibility + Commerce',
        edgeLabel: 'Aus + South Africa',
        rule: 'AUSTRALIA: Concurrent List (List III), Freedom of Trade/Commerce/Intercourse (Art 301), Joint Sitting of Two Houses (Art 108) & Preamble text cadence! SOUTH AFRICA: Art 368 Procedure for Constitutional Amendment + Election of Rajya Sabha Members!',
        callouts: [
          'Look closely: Joint Sitting (108) = AUSTRALIA; Parliamentary Privileges = UK',
          'Amendment Mechanism (368) = SOUTH AFRICA (balanced neither ultra-rigid US nor hyper-flexible UK)',
          'Distinguish carefully: Nomination of RS Members = IRELAND; Election of RS Members = SOUTH AFRICA!'
        ],
        landmarkCase: 'Articles 108, 246, 301 & 368',
        examTrap: 'GOLD EXAM DISTINCTION: NOMINATION of 12 RS Members = IRELAND; ELECTION of 238 RS Members = SOUTH AFRICA!'
      , colorKey: 'violet'
      },
      {
        id: 'gd-fr-ussr',
        badge: 'FRANCE + USSR (RUSSIA)',
        title: 'French Republic & Liberty-Equality-Fraternity + USSR Justice & Duties',
        subtitle: '1789 Revolutionary Triad (France) + Social/Econ/Pol Justice & 51A Duties (USSR)',
        tag: 'Preamble DNA',
        edgeLabel: 'France + USSR',
        rule: 'FRANCE: Republic concept & Preamble ideals of Liberty, Equality, Fraternity (1789 Revolution!). USSR: Ideals of Justice (Social, Economic & Political) in Preamble + Part IVA Fundamental Duties (42nd Amd 1976)!',
        callouts: [
          'Preamble merges global ideals: Opening ("We the People") = USA; Justice triad = USSR; Liberty/Equality/Fraternity = FRANCE; Language flow = AUSTRALIA!',
          'Notice how 9 global traditions integrate seamlessly without losing coherent Indian sovereignty',
          'Keeps Constitution adaptable across 75+ years of living democracy'
        ],
        landmarkCase: 'Preamble Ideological Synthesis',
        examTrap: 'SPLIT THE PREAMBLE IDEALS BY ORIGIN: Liberty/Equality/Fraternity = FRANCE; Justice (Social/Economic/Political) = USSR (Russia)!'
      , colorKey: 'rose'
      }
    ]
  }
];
