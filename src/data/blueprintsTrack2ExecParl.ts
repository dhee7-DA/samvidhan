import type { VisualBlueprintSpec } from './visualBlueprintsTypes';

export const TRACK_2_EXEC_PARL_BLUEPRINTS: VisualBlueprintSpec[] = [
  {
    id: 'vice-president-electoral-removal',
    title: 'Vice-President: Election (Art 66), Dual Roles & Removal (Art 67)',
    category: 'Union Executive',
    track: 'Executive & Parliament',
    articles: 'Articles 63 – 71',
    summary: 'Splits Vice-Presidential Electoral College (All MPs, ZERO MLAs!) and Effective Majority removal from American Vice-President analogies.',
    topology: 'matrix-split',
    rootLabel: 'VICE-PRESIDENT OF INDIA (ARTS 63–71)',
    rootSub: 'PR Single Transferable Vote • Ex-Officio Rajya Sabha Chairman',
    edgeFlowTag: '66 vs 54 CONTRAST',
    footerRule: 'President vacancy gives Indian VP up to 6 MONTHS maximum as Acting President (unlike US VP who serves full remainder term!).',
    nodes: [
      {
        id: 'vp-college',
        badge: 'ART 66 · ELECTORAL COLLEGE',
        title: 'All MPs (Elected + Nominated); NO MLAs!',
        subtitle: 'Secret Ballot • PR Single Transferable Vote',
        tag: 'Differs from President',
        side: 'left',
        rule: 'Elected by an Electoral College comprising BOTH Elected and Nominated Members of Parliament (Lok Sabha + Rajya Sabha). State MLAs have ZERO role!',
        callouts: [
          'Qualifier age: 35 yrs + qualified to be Rajya Sabha member (President needs LS eligibility!)',
          'Nomination needs 20 proposers + 20 seconders (President needs 50+50)',
          'All electoral disputes go EXCLUSIVELY to Supreme Court (Art 71)'
        ],
        landmarkCase: '11th Amendment Act 1961 (Election validity immune from House vacancies)',
        examTrap: 'CRITICAL CONTRAST: Nominated MPs VOTE in VP Election (and Pres. Impeachment), NOT Pres. Election. State MLAs vote in Pres. Election, NOT VP Election!'
      , colorKey: 'sky'
      },
      {
        id: 'vp-office',
        badge: 'ART 64 & 65 · DUAL HAT',
        title: 'Ex-Officio RS Chairman vs Acting President',
        subtitle: 'Receives Chairman’s Salary (4L), Acts <= 6 Mo',
        tag: 'US Model Contrast',
        side: 'left',
        rule: 'Serves ex-officio as Chairman of Rajya Sabha (not a member of RS; votes ONLY on tie via Casting Vote!). When acting as President under Art 65, ceases RS duties and draws Presidential salary.',
        callouts: [
          'Cannot sit in RS while discharging President functions',
          'VP draws salary strictly in capacity as Chairman of Rajya Sabha (Second Schedule)',
          'If VP post also vacant simultaneously -> Chief Justice of India acts (Presidential Discharge Act 1969)'
        ],
        landmarkCase: 'Justice Hidayatullah Precedent (1969)',
        examTrap: 'BIGGEST TRAP: VP has NO formal VP salary — pays comes as Chairman of Rajya Sabha, and during Art 65 President-acting, earns President’s emoluments!'
      , colorKey: 'emerald'
      },
      {
        id: 'vp-removal',
        badge: 'ART 67(b) · REMOVAL',
        title: 'Effective Majority RS + Simple Majority LS',
        subtitle: 'No Impeachment Word; Starts ONLY in Rajya Sabha',
        tag: '14 Days Prior Notice',
        side: 'right',
        rule: 'Can be removed BEFORE 5 years via resolution: Initiated ONLY in Rajya Sabha (14 days notice), passed by Majority of ALL THEN MEMBERS of RS (Effective Majority), and AGREED to by Lok Sabha (Simple Majority).',
        callouts: [
          'NO specific constitutional ground mentioned (unlike President "violation of Constitution")',
          'NO formal impeachment process required under Art 61 rules',
          'Also resigns by writing addressed to PRESIDENT of India'
        ],
        landmarkCase: 'Article 67(b) Constitutional Protocol',
        examTrap: 'Compare President (Starts in EITHER House, needs 2/3 TOTAL both Houses) vs VP (Starts ONLY in RS, needs RS Effective Majority + LS Simple Agreement)!'
      , colorKey: 'rose'
      },
      {
        id: 'vp-tenure',
        badge: 'ART 67 · TERM',
        title: '5-Year Term + Beyond Until Successor',
        subtitle: 'No Limit on Re-election',
        tag: 'Dr Radhakrishnan / Ansari',
        side: 'right',
        rule: 'Holds office for 5 years from entering office and continues beyond expiry until successor enters; eligible for re-election any number of times.',
        callouts: [
          'Oath administered by PRESIDENT of India (or nominee)',
          'Rajya Sabha Deputy Chairman presides when VP acts as President or during Art 67(b) removal debate (VP cannot preside during own removal)',
          'Election must be held BEFORE expiry of 5-year term'
        ],
        landmarkCase: 'Articles 68 & 69 Rules',
        examTrap: 'Just like Lok Sabha Speaker under Art 96, RS Chairman (VP) CANNOT preside while removal resolution against him is under consideration!'
      , colorKey: 'violet'
      }
    ]
  },
  {
    id: 'council-of-ministers-art74-75',
    title: 'PM & Council of Ministers: Art 74 Binding Advice, Art 75 & 91st Amd',
    category: 'Union Cabinet Mechanics',
    track: 'Executive & Parliament',
    articles: 'Articles 74, 75, 77 & 78',
    summary: '4-tier Cabinet power pyramid showing 42nd/44th Amendment advice compulsion, Collective vs Individual Responsibility, 6-month rule, and 15% 91st Amd cap.',
    topology: 'pyramid-hierarchy',
    rootLabel: 'COUNCIL OF MINISTERS (ARTS 74–78)',
    rootSub: 'Westminster Cabinet • Art 75(3) LS Accountability',
    edgeFlowTag: 'CABINET STRUCTURE',
    footerRule: 'Courts CANNOT inquire into WHAT advice Ministers tendered President (Art 74(2)), YET can review whether President/Governor acted WITHOUT advice or unconstitutionally (S.R. Bommai).',
    nodes: [
      {
        id: 'pm-keystone',
        badge: 'TIER 1 · ART 74 & 78',
        title: 'Prime Minister & 42nd/44th Binding Advice',
        subtitle: 'President Bound After One Reconsideration',
        tag: 'Keystone of Arch',
        rule: '42nd Amendment made CoM advice binding; 44th Amendment (1978) added President may require CoM to reconsider advice ONCE, after which President MUST act in accordance with reconsidered advice.',
        callouts: [
          'Art 78 Duty: PM communicates Cabinet decisions & supplies info President seeks',
          'PM may be member of EITHER Lok Sabha OR Rajya Sabha (unlike UK convention!)',
          'Resignation/death of PM automatically dissolves entire Council of Ministers'
        ],
        landmarkCase: 'Shamsher Singh v. State of Punjab (1974) & U.N.R. Rao (1971)',
        examTrap: 'Wait: CoM remains in office even AFTER Lok Sabha dissolves ("caretaker" advice — U.N.R. Rao 1971), because President ALWAYS needs a Council under Art 74!'
      , colorKey: 'accent'
      },
      {
        id: 'cabinet-tier',
        badge: 'TIER 2 · ART 352',
        title: 'Union Cabinet (Inner Core)',
        subtitle: 'Word "Cabinet" Appears ONLY in Art 352 (44th Amd)',
        tag: 'Small Decision Engine',
        rule: 'Council of Ministers (60–70 ministers: Cabinet, MoS Independent, MoS, Deputy) vs Union Cabinet (15–20 senior-most heads guiding Art 352 Emergency written advice).',
        callouts: [
          'Original 1950 text NEVER contained the word "Cabinet"!',
          '44th Amendment 1978 inserted "Cabinet" ONLY inside Article 352(3)',
          'Cabinet Committees (ACC, CCS, CCPA) are extra-constitutional but run government'
        ],
        landmarkCase: '44th Amendment Act 1978 Textual Addition',
        examTrap: 'CLASSIC EXAM TRAP: Where in the Indian Constitution is "Cabinet" defined or mentioned? ONLY in Article 352 (inserted by 44th Amd 1978)!'
      , colorKey: 'sky'
      },
      {
        id: 'resp-collective',
        badge: 'TIER 3 · ART 75(1)–(5)',
        title: 'Collective Responsibility (LS) vs Pleasure',
        subtitle: '15% Size Cap + 6-Month Non-MP Ceiling',
        tag: 'Swim & Sink Together',
        rule: 'Art 75(3): CoM is collectively responsible SOLELY to LOK SABHA (even Ministers from Rajya Sabha!). Art 75(2): Ministers hold office individually during pleasure of President (effectively PM!). Art 75(5): Non-MP minister must enter either House within 6 months.',
        callouts: [
          '91st Amendment 2003 (Art 75(1A)): Total Ministers incl. PM <= 15% of Lok Sabha strength (Delhi = 10% under 239AA!)',
          'Defector MP under 10th Schedule is DISQUALIFIED from being appointed Minister (75(1B))',
          'Individual 6-month clock CANNOT be reset by re-appointing same non-MP (S.R. Chaudhuri 2001)'
        ],
        landmarkCase: 'S.R. Chaudhuri v. State of Punjab (2001) & Har Sharan Verma',
        examTrap: 'TRAP 1: Council is collectively responsible to LOK SABHA (not Parliament!). TRAP 2: Re-appointing a non-MP after 6 months without election is UNCONSTITUTIONAL!'
      , colorKey: 'emerald'
      },
      {
        id: 'art-74-bar',
        badge: 'TIER 4 · ART 74(2)',
        title: 'Bar on Judicial Inquiry Into Advice vs Material',
        subtitle: 'Advice Confidential; Underlying Material Reviewable!',
        tag: 'S.R. Bommai Rule',
        rule: 'While courts cannot inspect confidential Cabinet advice notes under Art 74(2), Bommai held the actual MATERIAL/EVIDENCE relied on by Council of Ministers IS open to judicial review.',
        callouts: [
          'Protects Cabinet secrecy & candid collective deliberation',
          'Cannot defeat judicial scrutiny of Art 356 dismissal or Art 163 mala fides',
          'Ministers can address BOTH Houses (Art 88), vote ONLY in their own House'
        ],
        landmarkCase: 'S.R. Bommai v. Union of India (1994) & Nabam Rebia (2016)',
        examTrap: 'Can an Attorney General or Minister from Rajya Sabha speak in Lok Sabha? YES under Art 88, but vote ONLY where they are a member (AG cannot vote anywhere!).'
      , colorKey: 'violet'
      }
    ]
  },
  {
    id: 'parliament-composition-delimitation',
    title: 'Parliament Composition: Lok Sabha vs Rajya Sabha & Delimitation Freeze',
    category: 'Legislature Architecture',
    track: 'Executive & Parliament',
    articles: 'Articles 79 – 84 & Sch. 4',
    summary: 'Side-by-side matrix comparing Lok Sabha & Rajya Sabha representation, 104th Amendment Anglo-Indian abolition, and 84th/87th Delimitation Census freeze.',
    topology: 'matrix-split',
    rootLabel: 'PARLIAMENT: BICAMERAL ARCHITECTURE (ARTS 79–84)',
    rootSub: 'President + Rajya Sabha + Lok Sabha = Integral Parliament (Art 79)',
    edgeFlowTag: 'LS vs RS COMPARE',
    footerRule: 'Both Houses must clear First-Past-the-Post (LS) vs Indirect Open-Ballot PR-STV (RS); 104th Amendment ended 2 Lok Sabha Anglo-Indian nominations in 2020.',
    nodes: [
      {
        id: 'ls-house',
        badge: 'LOK SABHA · ART 81',
        title: 'House of the People (Max 550; Current 543)',
        subtitle: 'Direct FPTP Elections • Equal Population Ratio',
        tag: '104th Amd Ended 2 Nom.',
        side: 'left',
        rule: 'Up to 530 from States + 20 from Union Territories (Max 550 post-104th Amd dropping 2 Anglo-Indians!). Elected directly via Universal Adult Franchise (61st Amd 1988 cut voting age 21 -> 18).',
        callouts: [
          'Min age: 25 years; SC/ST reservations extended by 104th Amd till 2030 (NO OBC seats)',
          'Normal term: 5 years from first sitting (extended 1 yr at a time during Art 352)',
          'Art 81(2): Inter-state & intra-state population parity required'
        ],
        landmarkCase: '104th Amendment Act 2019 (Effective Jan 2020) & 61st Amd 1988',
        examTrap: 'IMPORTANT MATH UPDATE: Maximum LS strength is NOW 550 (NOT 552) because 104th Amd discontinued Art 331 Anglo-Indian nominations in Jan 2020!'
      , colorKey: 'sky'
      },
      {
        id: 'delimitation-census',
        badge: '84TH & 87TH AMDS',
        title: '2026 Seat Freeze & 2001 Census Boundaries',
        subtitle: '1971 Census Totals Frozen; 2001 Territorial Draw',
        tag: 'Art 82 & 170 Check',
        side: 'left',
        rule: '84th Amendment froze Total State Seat Allocations at 1971 Census until first census published after 2026 (protecting population-control Southern states), while 87th Amendment redrew internal constituencies using 2001 Census.',
        callouts: [
          'Total State seat count locked -> 1971 Census baseline until post-2026 census',
          'Internal constituency redraw -> 2001 Census (4th Delimitation Act 2002)',
          'Delimitation Commission orders CANNOT be challenged in any court (Art 329(a))'
        ],
        landmarkCase: 'Meghraj Kothari v. Delimitation Commission (1967)',
        examTrap: 'DO NOT MIX YEARS: Total seats per State = 1971 Census (84th Amd); Internal boundary lines + SC/ST allocation = 2001 Census (87th Amd)!'
      , colorKey: 'violet'
      },
      {
        id: 'rs-house',
        badge: 'RAJYA SABHA · ART 80',
        title: 'Council of States (Max 250; Current 245)',
        subtitle: 'Schedule 4 Allocation + 12 Nominated',
        tag: 'Permanent Continuing Chamber',
        side: 'right',
        rule: 'Max 238 State/UT reps + 12 Presidential nominees (Literature, Science, Art, Social Service). Permanent House never dissolved; 1/3rd retire every 2nd year (6-yr statutory term via RPA 1951).',
        callouts: [
          'Elected ONLY by elected MLAs of States + Delhi, Puducherry & J&K',
          'Unequal representation by population (UP 31 vs Goa 1) — differs from US Senate (equal 2 per state)',
          'Kuldip Nayar (2006) upheld 2003 Open Ballot voting & removal of State domicile condition for RS MPs!'
        ],
        landmarkCase: 'Kuldip Nayar v. Union of India (2006) 5-Judge Bench',
        examTrap: 'TWO CRITICAL TRAPS: (1) Constitution did NOT fix 6-year RS term (RPA 1951 did!). (2) Rajya Sabha candidate does NOT need to be a voter/resident of that State anymore!'
      , colorKey: 'emerald'
      },
      {
        id: 'women-res-106',
        badge: '106TH AMD · 2023',
        title: 'Nari Shakti Vandan Adhiniyam (33% Women)',
        subtitle: 'Arts 330A (LS), 332A (Vidhan Sabha) & 239AA',
        tag: 'Delimitation Trigger',
        side: 'right',
        rule: '106th Constitutional Amendment Act (2023) reserves 1/3rd seats (incl. horizontal 1/3rd inside SC/ST) in Lok Sabha, State Assemblies & Delhi — taking effect AFTER post-2026 Census + Delimitation exercise.',
        callouts: [
          '15-year sunset clause (extendable by Parliament)',
          'Applies to Lok Sabha, Assemblies & Delhi — does NOT apply to Rajya Sabha or State Legislative Councils!',
          'Rotational seats shift after subsequent delimitations'
        ],
        landmarkCase: '106th Amendment Act 2023 (128th Amendment Bill)',
        examTrap: 'PRELIMS GOLD: The 106th Amd (Women Reservation) does NOT cover Rajya Sabha or Vidhan Parishads (Upper Houses)!'
      , colorKey: 'rose'
      }
    ]
  },
  {
    id: 'mp-mla-disqualification-102',
    title: 'MP Disqualification & Vacating Seats: Art 101–103 vs 10th Schedule',
    category: 'Legislative Membership Rules',
    track: 'Executive & Parliament',
    articles: 'Articles 101 – 103 & Sch. 10',
    summary: 'Splits President+ECI constitutional disqualifications (Art 102(1)/103) from Presiding Officer Anti-Defection disqualifications (Art 102(2)/Sch 10), plus Double Membership.',
    topology: 'flowchart',
    rootLabel: 'MP QUALIFICATION FILTER',
    rootSub: 'Arts 101–103 vs 10th Schedule',
    edgeFlowTag: 'WHO DECIDES?',
    footerRule: 'President decides Art 102(1) disputes STRICTLY bound by ECI opinion (Art 103); Speaker/Chairman decides ONLY Art 102(2) Defection subject to judicial review (Kihoto Hollohan).',
    nodes: [
      {
        id: 'art-101-dual',
        badge: 'ART 101 · VACATION',
        title: 'Dual Seats, 60-Day Absence & Resignation',
        subtitle: 'LS+RS = RS Vacates in 10d; MP+MLA = MP Vacates in 14d',
        tag: 'Anti-Dual Rule',
        edgeLabel: 'Seat Vacancy',
        rule: 'Art 101 prevents holding two seats simultaneously: RS+LS elected -> indicate within 10 days (else RS falls vacant); 2 LS seats -> else both vacate; MP + MLA -> MP seat falls vacant if MLA not resigned within 14 days!',
        callouts: [
          '60 consecutive days absence without House permission can vacate seat',
          'Speaker/Chairman can refuse resignation ONLY if not voluntary/genuine (33rd Amd 1974)',
          'Double-membership rules rest partially inside Prohibition of Simultaneous Membership Rules 1950'
        ],
        landmarkCase: '33rd Constitutional Amendment Act, 1974',
        examTrap: 'MP + MLA Trap: If an MLA gets elected as MP and ignores the 14-day choice clock, it is the PARLIAMENT (MP) seat that automatically vacates — NOT the State MLA seat!'
      , colorKey: 'sky'
      },
      {
        id: 'art-102-1',
        badge: 'ART 102(1) · OFFICE',
        title: 'Office of Profit, Insolvency & RPA Crimes',
        subtitle: 'Art 103: President Acts Bindingly on ECI Opinion',
        tag: 'President + ECI Track',
        edgeLabel: 'Non-Defection',
        rule: 'Disqualified if holding Office of Profit (except Minister or Exempted Act), unsound mind, undischarged insolvent, non-citizen / foreign allegiance, or RPA 1951 disqualification (e.g. >=2 yrs conviction — Lily Thomas 2013 immediate disqualification!).',
        callouts: [
          'President MUST refer question under Art 102(1) to Election Commission & act STRICTLY on ECI opinion (Art 103)',
          'Jaya Bachchan (2006): If office carries pecuniary gain/profit (even if unclaimed!), it IS Office of Profit!',
          'Lily Thomas (2013) struck down RPA s.8(4) 3-month appeal protection'
        ],
        landmarkCase: 'Jaya Bachchan (2006) & Lily Thomas v. Union of India (2013)',
        examTrap: 'Test for Office of Profit: Power to appoint/remove + right to profit/perk attached to office — NOT whether member actually accepted the salary!'
      , colorKey: 'violet'
      },
      {
        id: 'art-102-2',
        badge: 'ART 102(2) · SCH 10',
        title: 'Anti-Defection Disqualification (Speaker/Chair)',
        subtitle: '52nd & 91st Amendments • Tribunal Role',
        tag: 'Presiding Officer',
        edgeLabel: 'Defection',
        rule: 'Covers voluntary giving up party membership (inferred from conduct even without formal resignation — Ravi Naik 1994), defying whip within 15 days uncondoned, independent joining party, or nominated joining after 6 months.',
        callouts: [
          'Deciding Authority: Presiding Officer of the House (NOT President/Governor/ECI!)',
          '91st Amendment deleted "1/3rd Split" exception; ONLY "2/3rd Merger" remains valid',
          'Keisham Meghachandra (2020): Presiding Officer should decide within 3 months max'
        ],
        landmarkCase: 'Kihoto Hollohan (1992) & Subhash Desai v. Maharashtra Governor (2023)',
        examTrap: 'WHO DECIDES: Office of Profit / Unsound Mind = President (+ ECI); Defection = Speaker / Chairman!'
      , colorKey: 'rose'
      },
      {
        id: 'art-104-penalty',
        badge: 'ART 104 · RS 500 FINE',
        title: 'Unqualified Voting & Participation Penalty',
        subtitle: 'Rs 500/day Penalty + Valid Proceedings Protected',
        tag: 'House Validity Intact',
        edgeLabel: 'Outcome Guard',
        rule: 'Sitting or voting without taking Art 99 oath or knowing one is disqualified incurs a Rs 500/day debt to the Union, while Parliamentary proceedings remain valid despite illegal vote (Art 122).',
        callouts: [
          'Even after conviction, Speaker/House proceedings aren’t invalidated retroactively',
          'Distinct from Article 193 equivalent at State Assembly level',
          'Oath before Pro-Tem Speaker precedes formal participation'
        ],
        landmarkCase: 'Articles 104 & 122 Legislative Safeguards',
        examTrap: 'In 2024/modern practice Art 104 text STILL specifies Rs 500/day civil debt to Union!'
      , colorKey: 'emerald'
      }
    ]
  },
  {
    id: 'parliamentary-privileges-105',
    title: 'Article 105: Parliamentary Privileges & Sita Soren (2024) Bribery Ruling',
    category: 'Legislative Immunities',
    track: 'Executive & Parliament',
    articles: 'Articles 105, 194 & 122',
    summary: 'Equilibrium scale weighing legislative independence (speech & vote protection) against bribery criminal accountability after 7-Judge Sita Soren (2024).',
    topology: 'balance-beam',
    rootLabel: 'PARLIAMENTARY PRIVILEGES BALANCE (ARTS 105 & 194)',
    rootSub: 'Freedom of Speech in House vs Judicial & Criminal Accountability',
    edgeFlowTag: 'IMMUNITY FRONTIER',
    footerRule: 'MARCH 2024 LANDMARK: Unanimous 7-Judge Bench in Sita Soren OVERRULED P.V. Narasimha Rao (1998) — Bribery is NEVER shielded by Arts 105(2)/194(2) even if MP votes as bribed!',
    nodes: [
      {
        id: 'p105-individual',
        badge: 'INDIVIDUAL · 105(2)',
        title: 'Absolute Inside-House Speech & Publication Shield',
        subtitle: 'Subject Only to Rules & Speaker (Art 121 Judge Guard)',
        tag: 'No Defamation Suit',
        rule: 'No MP shall be liable to ANY court proceedings in respect of anything said or any vote given inside Parliament or Committees, or official authorized reports.',
        callouts: [
          'Civil immunity in arrest ONLY (40 days before, during, 40 days after session — Sec 135A CPC!)',
          'NO immunity from Criminal Arrest or Preventive Detention during session!',
          'Art 121 bars discussing Supreme Court/HC judge conduct except on removal motion'
        ],
        landmarkCase: 'Tej Kiran Jain v. Sanjiva Reddy (1970) — Even absurd remarks protected if in sitting',
        examTrap: 'BIGGEST TRAP: Privilege against arrest covers ONLY CIVIL cases (40-day window) — an MP CAN be arrested on criminal warrant or preventive detention even inside session days (with Speaker intimation)!'
      , colorKey: 'sky'
      },
      {
        id: 'p105-collective',
        badge: 'COLLECTIVE · HOUSE',
        title: 'Control Debates, Punish Contempt & Non-Inquiry',
        subtitle: 'Art 122 Irregularity Immunity vs Illegality',
        tag: 'MSM Sharma / Keshav Singh',
        rule: 'House can publish/prohibit debates (except faithful news reports protected by 44th Amd Art 361A!), exclude strangers, and punish breach of privilege/contempt (incl. reprimand or imprisonment during session).',
        callouts: [
          'Keshav Singh (UP Assembly 1965): Courts CAN examine illegal contempt warrants violating Art 21',
          'Raja Ram Pal (2007 Cash-for-Query): Parliament CAN expel corrupt MPs for breach of privilege',
          'Art 122 shields procedural irregularity, NOT substantive unconstitutionality!'
        ],
        landmarkCase: 'Raja Ram Pal v. Hon’ble Speaker (2007) 5-Judge Bench',
        examTrap: 'Art 361A (44th Amd) grants press immunity for substantially true reports of House proceedings UNLESS published with malice or in secret sitting!'
      , colorKey: 'violet'
      },
      {
        id: 'sita-soren-2024',
        badge: 'SITA SOREN (2024)',
        title: 'Bribery Stripped of Immunity (Overruled Rao 1998)',
        subtitle: '7-Judge Unanimous Verdict • Offence Complete on Offer/Take',
        tag: 'March 2024 Landmark',
        rule: 'CJI Chandrachud’s 7-Judge Bench unanimously overruled P.V. Narasimha Rao (1998): taking a bribe to vote/speak in Legislature/RS Election is NOT "essential to legislative duty" — bribery is punishable instantly regardless of how MP voted!',
        callouts: [
          'P.V. Narasimha Rao (1998) anomalously protected bribe-takers who voted vs punished those who defaulted',
          'Bribery destroys public trust & Parliamentary democracy -> stands outside Arts 105(2)/194(2)',
          'Applies fully to Rajya Sabha & Presidential/VP open/secret elections'
        ],
        landmarkCase: 'Sita Soren v. Union of India (March 2024, 7-Judge Unanimous)',
        examTrap: '2024 RULE ALERT: MPs/MLAs enjoy ZERO constitutional immunity against criminal prosecution for taking bribes in votes/speeches!'
      , colorKey: 'rose'
      },
      {
        id: 'p105-codify',
        badge: 'ART 105(3) · CODIFY',
        title: 'Uncodified Privileges vs UK House of Commons',
        subtitle: '44th Amd Deleted Explicit "UK Commons" Text',
        tag: 'Still Uncodified Law',
        rule: 'Originally tied to UK House of Commons as of Jan 1950; 44th Amendment (1978) removed express British reference while keeping existing pre-1978 conventions until Parliament passes a Privilege Code.',
        callouts: [
          'If uncodified, Parliament still preserves historic powers unless overridden by Basic Rights',
          'Searchlight Case (1959): House prohibition of expunged speech overrides Art 19(1)(a)',
          'Art 194 confers identical privileges on State Legislatures + Advocates General'
        ],
        landmarkCase: 'M.S.M. Sharma v. Sri Krishna Sinha (Searchlight 1959)',
        examTrap: 'Parliament has STILL NEVER enacted a comprehensive statute codifying privileges under Art 105(3)!'
      , colorKey: 'emerald'
      }
    ]
  },
  {
    id: 'parliamentary-sessions-motions',
    title: 'Sessions Mechanics: Summoning, Prorogation, Adjournment & Motions',
    category: 'Parliamentary Procedure',
    track: 'Executive & Parliament',
    articles: 'Articles 85, 86 & 87',
    summary: 'Clockwork lifecycle tracing 6-month session gap limit, Adjournment vs Prorogation vs Dissolution effects on pending bills, Question Hour & No-Confidence Motion.',
    topology: 'cycle-sequence',
    rootLabel: 'SESSION LIFECYCLE',
    rootSub: 'Art 85 Max 6-Month Gap Rule',
    edgeFlowTag: 'FLOOR MECHANICS',
    footerRule: 'ONLY President Summons & Prorogues sessions; Presiding Officer (Speaker/Chair) issues Adjournment / Sine Die. Notice: Prorogation does NOT lapse Bills — Dissolution does!',
    nodes: [
      {
        id: 'sess-summon',
        badge: 'STEP 1 · ART 85(1)',
        title: 'Summoning & 6-Month Max Gap Rule',
        subtitle: 'Min 2 Sessions/Yr; Convention = 3 (Budget, Monsoon, Winter)',
        tag: 'President on Aid/Advice',
        edgeLabel: 'Start Session',
        rule: 'President summons each House on Cabinet advice (Nabam Rebia 2016 confirms Governor/President cannot unilaterally call session unless govt lost confidence). Not more than 6 months shall intervene between last sitting of one session & first sitting of next.',
        callouts: [
          'Special President Address (Art 87): 1st session post General Election & 1st session every year -> Motion of Thanks MUST pass in LS!',
          'Defeat of Motion of Thanks in Lok Sabha amounts to loss of government confidence',
          'Zero Hour = Indian innovation since 1962 (not in Rules of Procedure; starts after Question Hour!)'
        ],
        landmarkCase: 'Nabam Rebia v. Deputy Speaker Arunachal Pradesh (2016) 5-Judge',
        examTrap: 'Constitution mandates MINIMUM 2 sessions a year (6-month gap cap) — the 3-session calendar is purely convention!'
      , colorKey: 'sky'
      },
      {
        id: 'sess-quorum',
        badge: 'STEP 2 · ART 100(3)',
        title: 'Quorum = 1/10th Total House & Casting Vote',
        subtitle: '55 in LS · 25 in RS (Speaker Included)',
        tag: 'Art 100 Floor Duty',
        edgeLabel: '10% Floor',
        rule: 'Quorum to constitute a meeting of either House is 1/10th of total strength (55 in LS, 25 in RS). Speaker/Chairman does NOT vote in first instance — exercises ONLY Casting Vote in a tie (Art 100(1)).',
        callouts: [
          'Quorum count INCLUDES the Presiding Officer',
          '42nd Amendment attempted to drop 10% quorum rule; 44th Amd restored it!',
          'Starred Question (oral + supplementary) vs Unstarred (written) vs Short Notice (<10d)'
        ],
        landmarkCase: 'Article 100 Constitutional Floor Rule',
        examTrap: 'In ordinary votes Presiding Officer uses Casting Vote on tie; during his OWN removal under Art 96, Speaker CAN vote in FIRST INSTANCE (like ordinary MP) but CANNOT exercise a Casting Vote!'
      , colorKey: 'emerald'
      },
      {
        id: 'sess-adjourn',
        badge: 'STEP 3 · PAUSE',
        title: 'Adjournment vs Sine Die vs Prorogation',
        subtitle: 'Who Controls? Does It Affect Bills or Notices?',
        tag: 'Critical Contrast',
        edgeLabel: 'Pause vs End',
        rule: 'Adjournment suspends sitting (hours/days) by Speaker/Chair (Sine Die = indefinite!). Prorogation terminates BOTH sitting AND session by PRESIDENT (cancels pending motions/notices, leaves Bills ALIVE!).',
        callouts: [
          'Adjournment -> Neither Bills NOR Notices lapse',
          'Prorogation -> Pending NOTICES (questions/motions) lapse (not impeachment notices!); Pending BILLS DO NOT lapse!',
          'Guillotine = Speaker puts all remaining un-discussed Demands for Grants to vote at end of Budget deadline'
        ],
        landmarkCase: 'Art 85(2)(a) & 107(3) Bill Survival Rule',
        examTrap: 'REPEATED PRELIMS TRAP: Prorogation ends the Session, yet pending Bills under Art 107(3) DO NOT lapse! Only notices/motions reset!'
      , colorKey: 'violet'
      },
      {
        id: 'sess-motions',
        badge: 'STEP 4 · MOTIONS',
        title: 'No-Confidence vs Censure vs Adjournment Motion',
        subtitle: 'Lok Sabha Exclusive Control Tools',
        tag: '50 MP Support Threshold',
        edgeLabel: 'LS Control',
        rule: 'No-Confidence Motion (Rule 198, NOT mentioned in Constitution text!): needs 50 LS MPs support, NO reason required, targets entire Council of Ministers -> defeat forces resignation!',
        callouts: [
          'Censure Motion: MUST state specific reasons against individual/group Ministers; defeat does not legally force automatic resignation (yet indicates majority crisis)',
          'Adjournment Motion: Urgent matter of public importance interrupting normal business (50 MPs); NOT permitted in Rajya Sabha due to element of censure!',
          'Privilege Motion & Calling Attention Motion (1954 Indian innovation)'
        ],
        landmarkCase: 'Article 75(3) + Lok Sabha Rule 198',
        examTrap: 'The words "No-Confidence Motion" NEVER appear in the Constitution text — inferred from Art 75(3) collective responsibility & LS Rules!'
      , colorKey: 'rose'
      }
    ]
  },
  {
    id: 'money-bill-vs-financial-bills',
    title: 'Art 110 Money Bill vs Art 117(1) Financial Bill I vs Art 117(3) Financial Bill II',
    category: 'Financial Legislation',
    track: 'Executive & Parliament',
    articles: 'Articles 109, 110 & 117',
    summary: 'Precision comparison separating LS-exclusive 14-day Money Bills from hybrid Art 117(1) & 117(3) Financial Bills (Joint Sitting & RS parity traps!).',
    topology: 'matrix-split',
    rootLabel: 'FINANCIAL LEGISLATION ARCHITECTURE (ARTS 110 vs 117)',
    rootSub: 'All Money Bills Are Financial Bills, But NOT All Financial Bills Are Money Bills!',
    edgeFlowTag: 'BILL TAXONOMY',
    footerRule: 'Speaker’s certificate makes Art 110 "final", YET Supreme Court 7-Judge Bench is revisiting Speaker Money Bill misuse (Aadhaar / Tribunals Finance Act 2017) under Roger Mathew.',
    nodes: [
      {
        id: 'bill-110',
        badge: 'ART 110 · MONEY BILL',
        title: 'Strict "ONLY" Art 110(a)–(g) Fiscal Matters',
        subtitle: 'LS Intro Only • Pres. Rec • RS 14-Day Limit',
        tag: 'No Joint Sitting!',
        side: 'left',
        rule: 'Deals ONLY with matters in 110(1)(a)–(g): imposition/abolition/alteration of TAX, Union borrowing, custody of CFI/Contingency Fund, Appropriation, Charged expenditure. Fines/fees/local taxes are EXCLUDED (110(2)).',
        callouts: [
          'Introduced ONLY in Lok Sabha WITH President prior recommendation',
          'Rajya Sabha CANNOT reject or amend — merely recommends within 14 days (LS free to ignore)',
          'NO Joint Sitting under Art 108! Pres. CANNOT return under Art 111 for reconsideration!'
        ],
        landmarkCase: 'K.S. Puttaswamy (Aadhaar 2018) vs Roger Mathew (2019 Referral to 7J)',
        examTrap: 'Art 110 says Money Bill deals "ONLY" with taxes/CFI — sneaking non-fiscal amendments (tribunal structure etc.) inside is under 7-Judge scrutiny!'
      , colorKey: 'rose'
      },
      {
        id: 'bill-117-1',
        badge: 'ART 117(1) · FIN BILL I',
        title: 'Financial Bill Category I (Hybrid)',
        subtitle: 'Art 110 Subject + Other General Provisions',
        tag: 'Shares Intro; Joint Sitting OK',
        side: 'left',
        rule: 'Shares the TWO creation restrictions of Money Bill (Introduced ONLY in Lok Sabha + NEEDS President recommendation; exception: reduction/abolition of tax needs NO rec!), BUT behaves like an ORDINARY BILL thereafter!',
        callouts: [
          'Rajya Sabha CAN amend or reject Financial Bill I just like an ordinary bill!',
          'Joint Sitting under Art 108 IS available to break deadlock!',
          'President CAN return Bill under Art 111 for reconsideration'
        ],
        landmarkCase: 'Article 117(1) Constitutional Comparison',
        examTrap: 'CRITICAL HYBRID: Starts in LS with President approval -> Once cleared by LS, Rajya Sabha holds FULL equal powers including amendment/rejection & Art 108 Joint Sitting!'
      , colorKey: 'sky'
      },
      {
        id: 'bill-117-3',
        badge: 'ART 117(3) · FIN BILL II',
        title: 'Financial Bill Category II (Spend From CFI)',
        subtitle: 'Involves Expenditure from CFI, Zero Art 110 Clauses',
        tag: 'Either House Intro!',
        side: 'right',
        rule: 'Contains NO Article 110 matters, merely triggers expenditure out of Consolidated Fund of India. Treated entirely as an ORDINARY BILL except President’s recommendation is required at CONSIDERATION stage (not intro!).',
        callouts: [
          'CAN be introduced in EITHER Lok Sabha OR Rajya Sabha!',
          'Needs NO prior Presidential approval for INTRODUCTION — approval needed only before House CONSIDERS passing it!',
          'Full Rajya Sabha powers + Art 108 Joint Sitting + Pres. Return available'
        ],
        landmarkCase: 'Article 117(3) Procedural Distinction',
        examTrap: 'GREATEST FIN-BILL TRAP: Financial Bill II CAN originate in Rajya Sabha, and needs President’s nod ONLY at CONSIDERATION stage (even either House!), NOT introduction!'
      , colorKey: 'emerald'
      },
      {
        id: 'bill-veto-111',
        badge: 'ART 111 · PRES ASSENT',
        title: 'Speaker Certificate & Assent Contrast',
        subtitle: 'Money Bill vs Fin Bills I & II Return Rules',
        tag: 'Zero Money-Bill Return',
        side: 'right',
        rule: 'Under Art 111, President may Assent or Withhold assent to a Money Bill, yet CANNOT return it to Houses (because he already recommended its introduction!). Financial Bills I & II CAN be returned.',
        callouts: [
          'Lok Sabha Speaker endorses certificate ("Money Bill") BEFORE transmitting to RS and President',
          'Bill abolishing or reducing an existing tax under 117(1) needs NO Presidential recommendation',
          'State equivalent: Art 198 (Money Bill) & Art 207 (State Financial Bills)'
        ],
        landmarkCase: 'Article 110(3)–(4) Speaker Endorsement Rule',
        examTrap: 'Remember: Ordinary Bills, Fin Bill I, Fin Bill II can ALL be returned by President once (suspensive veto); Money Bills & Art 368 Bills CANNOT be returned!'
      , colorKey: 'violet'
      }
    ]
  },
  {
    id: 'annual-budget-funds-pipeline',
    title: 'Union Budget Cycle (Arts 112–116): Demands, Cuts, Appropriation & Finance',
    category: 'Parliamentary Finance',
    track: 'Executive & Parliament',
    articles: 'Articles 112 – 116',
    summary: '6-stage Annual Financial Statement pipeline from presentation and RS zero-vote discussion through Policy/Economy/Token Cut Motions and Art 114 Lock.',
    topology: 'cycle-sequence',
    rootLabel: 'ANNUAL BUDGET (ART 112)',
    rootSub: '"Annual Financial Statement" • Not "Budget"',
    edgeFlowTag: '6 BUDGET STAGES',
    footerRule: 'Art 114 Lock: Not a single rupee can be withdrawn from the Consolidated Fund of India except by passing the Appropriation Act (plus Art 116 Vote on Account).',
    nodes: [
      {
        id: 'bud-pres',
        badge: 'STAGE 1 · FEB 1',
        title: 'Presentation & General Discussion',
        subtitle: 'Art 112 Statement; Both Houses Discuss, Zero Vote',
        tag: 'Railways Merged 2017',
        edgeLabel: 'No Cut Here',
        rule: 'President causes Annual Financial Statement (word "Budget" absent in Constitution!) to be laid before both Houses. General discussion occurs in LS and RS with zero voting/cut motions.',
        callouts: [
          'Railway Budget separated in 1924 (Acworth) -> Re-merged into General Budget 2017!',
          'House then recesses for 3–4 weeks while 24 DRSCs scrutinize ministry Demands',
          'Rajya Sabha can ONLY discuss & return Budget (cannot vote on Demands!)'
        ],
        landmarkCase: 'Article 112 & Departmental Standing Committee Scrutiny',
        examTrap: 'The word "Budget" NEVER appears anywhere in the Indian Constitution — Article 112 calls it "Annual Financial Statement"!'
      , colorKey: 'sky'
      },
      {
        id: 'bud-demands',
        badge: 'STAGE 2 · ART 113',
        title: 'Voting Demands (LS Only) & Charged Exp.',
        subtitle: 'Charged Items Discussed Only, Voted Exp. Subject to Cuts',
        tag: 'Lok Sabha Exclusive',
        edgeLabel: 'Cut Motions',
        rule: 'Lok Sabha EXCLUSIVELY votes Demands for Grants (Art 113(2)); "Charged" expenditure (Salaries of President, SC/HC Judges, CAG, Debt Service) is ONLY discussed, NEVER voted!',
        callouts: [
          'Policy Cut Motion ("reduce demand to Re 1"): Disapproves underlying policy!',
          'Economy Cut Motion ("reduce by specified amount"): Targets wasteful spending',
          'Token Cut Motion ("reduce by Rs 100"): Ventilates a specific local grievance'
        ],
        landmarkCase: 'Article 113(1) Charged vs Voted Budget Lock',
        examTrap: 'MEMORIZE THE THREE CUT AMOUNTS: Policy = Re 1; Token = Rs 100; Economy = Specified Lumpsum. Any Cut Motion passed in LS equals NO-CONFIDENCE defeat!'
      , colorKey: 'rose'
      },
      {
        id: 'bud-approp',
        badge: 'STAGE 3 · ART 114',
        title: 'Appropriation Bill & Vote on Account',
        subtitle: 'Legally Unlocks Consolidated Fund; No Amendments',
        tag: 'Zero Shift in Ceiling',
        edgeLabel: 'CFI Key',
        rule: 'Appropriation Bill authorizes statutory withdrawal from CFI covering BOTH Voted & Charged grants. No amendment can alter amount or destination of a grant once voted!',
        callouts: [
          'Vote on Account (Art 116): Grants ~1/6th (2 months) advance spend pending passing of Appropriation Act (since moved up to Feb 1 date in 2017, less needed outside election yrs!)',
          'Vote of Credit: "Blank cheque" for unexpected defence/war emergency',
          'Excess Grant (PAC post-approval) & Supplementary Grant (Art 115)'
        ],
        landmarkCase: 'Articles 114, 115 & 116 Fiscal Locks',
        examTrap: 'An Appropriation Bill authorizes SPENDING ONLY; Government still cannot COLLECT proposed new taxes without the separate Finance Bill!'
      , colorKey: 'emerald'
      },
      {
        id: 'bud-finance',
        badge: 'STAGE 4 · ART 110',
        title: 'Finance Bill Enactment (75-Day Clock)',
        subtitle: 'Legalizes Revenue/Taxes • Must Pass in 75 Days',
        tag: 'Money Bill Track',
        edgeLabel: '< 75 Days',
        rule: 'Finance Bill legalizes Revenue proposals (tax changes) for new financial year. Unlike Appropriation Bill, MPs MAY move amendments rejecting or reducing (not increasing!) taxes.',
        callouts: [
          'Provisional Collection of Taxes Act 1931 requires passing within 75 days of introduction',
          'Certified as Art 110 Money Bill by LS Speaker',
          'Enactment completes Constitutional Budget cycle before financial year rollover'
        ],
        landmarkCase: 'Provisional Collection of Taxes Act, 1931 + Art 265',
        examTrap: 'Art 265 Command: "No tax shall be levied or collected except by authority of law" — Finance Bill satisfies Art 265 for taxes, Appropriation Bill satisfies Art 114 for spending!'
      , colorKey: 'violet'
      }
    ]
  },
  {
    id: 'consolidated-contingency-public-acct',
    title: 'Constitutional Funds: Consolidated (266(1)) vs Public Acct (266(2)) vs Contingency (267)',
    category: 'Public Finance Guards',
    track: 'Executive & Parliament',
    articles: 'Articles 266 & 267',
    summary: '3-tier treasury custody model contrasting Parliament-locked Consolidated Fund, Executive-controlled Contingency Fund, and Banker-trust Public Account.',
    topology: 'pyramid-hierarchy',
    rootLabel: 'THREE CONSTITUTIONAL FUNDS (ARTS 266–267)',
    rootSub: 'Strict Constitutional Segregation of Sovereign Cash Flows',
    edgeFlowTag: 'WHO HOLDS KEY?',
    footerRule: 'Consolidated Fund requires PRIOR Parliamentary Appropriation Act; Public Account & Contingency Fund do NOT require prior Parliamentary vote before executive/banking release!',
    nodes: [
      {
        id: 'fund-cfi',
        badge: 'ART 266(1) · PARLIAMENT LOCK',
        title: 'Consolidated Fund of India (and States)',
        subtitle: 'All Revenues, Loans Raised & Repayments Recovered',
        tag: 'Hardest Lock (Art 114)',
        rule: 'Largest sovereign pool holding ALL tax & non-tax revenues received by Government, treasury bills/loans raised, and loan recoveries. ZERO money leaves without Parliamentary Appropriation Act.',
        callouts: [
          'Includes BOTH Charged & Voted expenditures under Art 112',
          'Audited by CAG (Art 148) for legality & regularity',
          'State equivalent: Consolidated Fund of State locked by State Legislature Appropriation'
        ],
        landmarkCase: 'Articles 114(3) & 266(1)',
        examTrap: 'Notice: Receipts from GST Compensation Cess or Small Savings? Wait — Small Savings, Provident Funds & Judicial Deposits go to PUBLIC ACCOUNT, NOT Consolidated Fund!'
      , colorKey: 'rose'
      },
      {
        id: 'fund-contig',
        badge: 'ART 267 · PRESIDENT KEY',
        title: 'Contingency Fund of India (Imprest Pool)',
        subtitle: 'Rs 30,000 Cr Corpus Held by Finance Secy for President',
        tag: 'Unforeseen Crises Only',
        rule: 'Established by Contingency Fund of India Act 1950 at disposal of the President (operated by Finance Ministry Finance Secretary) to meet urgent unforeseen expenditure BEFORE Parliament approves.',
        callouts: [
          'Corpus raised by Finance Act 2021 from Rs 500 Cr -> Rs 30,000 Cr!',
          'Every rupee spent MUST later be replenished from Consolidated Fund via Parliament Supplementary Grant',
          'State Contingency Fund sits at the disposal of the GOVERNOR (Art 267(2))!'
        ],
        landmarkCase: 'Contingency Fund of India Act, 1950 (Amended 2021)',
        examTrap: 'WHO HOLDS THE KEY: Consolidated Fund = PARLIAMENT; Contingency Fund = PRESIDENT / GOVERNOR; Public Account = EXECUTIVE / BANKER TRUST!'
      , colorKey: 'sky'
      },
      {
        id: 'fund-pub',
        badge: 'ART 266(2) · BANKER TRUST',
        title: 'Public Account of India (Non-Revenue Trust)',
        subtitle: 'PF, Small Savings (PPF/NSC), Judicial & Dept Deposits',
        tag: 'Executive Operates Directly',
        rule: 'Holds money belonging to citizens/beneficiaries (Government acts strictly as a banker — Provident Funds, Small Savings, Postal Deposits, Reserve Funds). Paid back on demand by Executive Action!',
        callouts: [
          'Does NOT require Parliamentary Appropriation Act before paying depositors back!',
          'Includes National Small Savings Fund (NSSF), Defence & Railway Funds',
          'Still audited by CAG to prevent irregular diversion'
        ],
        landmarkCase: 'Article 266(2) Treasury Classification',
        examTrap: 'Since Public Account funds do not belong to the Government (held in fiduciary trust), withdrawals are made by EXECUTIVE action without Parliamentary Vote!'
      , colorKey: 'emerald'
      }
    ]
  },
  {
    id: 'parliamentary-committees-web',
    title: 'Parliamentary Committees: PAC, Estimates, COPU & 24 DRSCs',
    category: 'Legislative Oversight',
    track: 'Executive & Parliament',
    articles: 'Art 105 & Parliament Rules',
    summary: 'Radial breakdown mapping India’s 3 Standing Financial Committees, 24 Departmental Standing Committees (DRSCs), and Ministers exclusion rule.',
    topology: 'hub-spoke',
    rootLabel: 'PARLIAMENTARY COMMITTEES',
    rootSub: '"Mini-Parliament" • 3 Financial + 24 DRSCs',
    edgeFlowTag: 'OVERSIGHT ARMS',
    footerRule: 'Invariant Rule Across ALL Financial & DRSC Committees: A MINISTER CANNOT BE A MEMBER (if appointed Minister while serving, automatically vacates seat!).',
    nodes: [
      {
        id: 'comm-pac',
        badge: 'PAC · 22 MPs (15 LS + 7 RS)',
        title: 'Public Accounts Committee (Friend of CAG)',
        subtitle: '1921 Orig.; Post-Mortem Audit of CAG Reports',
        tag: 'Opposition Chair Tradition',
        edgeLabel: '15 LS + 7 RS',
        rule: 'Examines CAG’s Appropriation & Finance Audit reports after money is spent ("post-mortem" legality & waste check). Since 1967, Chairman is ALWAYS from Opposition party!',
        callouts: [
          '22 Members: 15 Lok Sabha + 7 Rajya Sabha elected via PR-STV (1 yr term)',
          'CAG serves as "friend, philosopher and guide" to PAC',
          'Cannot interfere in day-to-day admin or question policy wisdom'
        ],
        landmarkCase: '1921 Montague-Chelmsford Act Origins',
        examTrap: 'Oldest committee (1921)! Chairman appointed by Speaker; since 1967 by healthy convention Chairman comes from Opposition!'
      , colorKey: 'sky'
      },
      {
        id: 'comm-est',
        badge: 'ESTIMATES · 30 LS ONLY!',
        title: 'Estimates Committee (Continuous Economy)',
        subtitle: 'Largest Committee • Zero Rajya Sabha Representation!',
        tag: '30 LS MPs Only',
        edgeLabel: '100% Lok Sabha',
        rule: 'Largest financial committee (30 MPs, ALL from Lok Sabha — ZERO RS members!) examining Budget estimates to suggest alternative efficiency & administrative economy.',
        callouts: [
          '1950 post-Independence origin (John Mathai recommendation)',
          'ZERO Rajya Sabha MPs (because voting Demands belongs solely to Lok Sabha!)',
          'Chairman ALWAYS belongs to the RULING party (unlike PAC Opposition chair!)'
        ],
        landmarkCase: '1950 Standing Economy Design',
        examTrap: 'NUMBER ONE COMMITTEE TRAP: Estimates Committee has 30 members ALL FROM LOK SABHA (0 from RS), whereas PAC & COPU have 22 (15 LS + 7 RS)!'
      , colorKey: 'rose'
      },
      {
        id: 'comm-copu',
        badge: 'COPU · 22 MPs (15 LS + 7 RS)',
        title: 'Committee on Public Undertakings',
        subtitle: '1964 Krishna Menon; Audits ONGC, LIC, NTPC',
        tag: '15 LS + 7 RS',
        edgeLabel: 'PSU Watchdog',
        rule: 'Created 1964 on Krishna Menon Committee recommendation. Examines CAG audit reports on Public Sector Undertakings to assess commercial & autonomous efficiency.',
        callouts: [
          '22 Members (15 LS + 7 RS); Chairman ALWAYS from Lok Sabha (never RS!)',
          'Cannot investigate day-to-day business administration or major Govt industrial policy',
          'Bridges autonomy vs Parliamentary accountability for PSUs'
        ],
        landmarkCase: 'Krishna Menon Committee (1964)',
        examTrap: 'Remember: For ALL THREE Financial Committees (PAC, Estimates, COPU), the Chairman MUST be from LOK SABHA only — never a Rajya Sabha MP!'
      , colorKey: 'emerald'
      },
      {
        id: 'comm-drsc',
        badge: '24 DRSCs · 31 MPs EACH',
        title: 'Departmental Standing Committees (16 LS + 8 RS)',
        subtitle: '21 LS + 10 RS Per Panel • Vets Bills & Demands',
        tag: 'Created 1993 / 2004',
        edgeLabel: '21 LS + 10 RS',
        rule: '24 Departmentally Related Standing Committees (16 controlled by LS Speaker, 8 by RS Chairman) each having 31 MPs (21 LS + 10 RS) reviewing ministry Demands, Bills & annual reports.',
        callouts: [
          'Started with 17 committees in 1993 -> expanded to 24 in 2004',
          'Closed-door bipartisan consensus building free from Whip coercion',
          'Cannot consider Money Bills or day-to-day administration'
        ],
        landmarkCase: '1993 Parliament Committee Reform',
        examTrap: 'Notice: A 10th Schedule Whip does NOT apply tightly inside closed DRSC deliberations, fostering cross-party technical amendments!'
      , colorKey: 'violet'
      },
      {
        id: 'comm-ad-hoc',
        badge: 'JPC vs SELECT',
        title: 'Joint Parliamentary (JPC) & Business Advisory',
        subtitle: 'Ad-Hoc Probe vs Standing House Management',
        tag: 'Custom Probes',
        edgeLabel: 'Ad-Hoc Probe',
        rule: 'Ad-hoc committees (Select Committee on a Bill; JPC for scams like Bofors/2G/Personal Data Bill) dissolve immediately upon submitting report. Standing Committees persist annually.',
        callouts: [
          'Business Advisory Committee (BAC): LS has Speaker as Chair; RS has Chairman as Chair',
          'Privileges Committee: Examines breach of Art 105 dignity',
          'Ministerial exception: Consultative Committees (Parliamentary Affairs Ministry) ARE chaired by Ministers (NOT official Parliamentary Committees!)'
        ],
        landmarkCase: 'Constitutional Committee Conventions',
        examTrap: 'Committees have NO executive binding authority — their reports are strictly ADVISORY (persuasive upon House & Cabinet)!'
      , colorKey: 'accent'
      }
    ]
  },
  {
    id: 'speaker-vs-chairman-powers',
    title: 'Speaker of Lok Sabha (Art 93) vs Chairman of Rajya Sabha (Art 89)',
    category: 'Presiding Officers',
    track: 'Executive & Parliament',
    articles: 'Articles 89 – 97',
    summary: 'Splits symmetrical presiding functions (quorum, casting vote, 10th Schedule) from the 2 exclusive Lok Sabha Speaker superpowers (Art 110 & Art 108).',
    topology: 'matrix-split',
    rootLabel: 'SPEAKER (LS) vs CHAIRMAN (RS) POWERS MATRIX',
    rootSub: 'Elected Member Inside House (Speaker) vs Ex-Officio VP Outside House (Chair)',
    edgeFlowTag: '93 vs 89 CONTRAST',
    footerRule: 'Speaker does NOT vacate office upon Lok Sabha dissolution — stays in chair until just before the first sitting of newly elected Lok Sabha (Art 94 Proviso 2)!',
    nodes: [
      {
        id: 'spk-exclusive',
        badge: 'SPEAKER ONLY · ART 110 & 108',
        title: 'Two Exclusive Speaker Superpowers',
        subtitle: 'Certifies Money Bill (110) + Chairs Joint Sitting (108)',
        tag: 'Final Non-Delegable Role',
        side: 'left',
        rule: 'ONLY Lok Sabha Speaker: (1) Decides conclusively whether a bill is a Money Bill (Art 110(3)); (2) Presides over Joint Sitting of both Houses under Art 108 (in absence, Dy Speaker LS -> Dy Chairman RS; RS Chairman NEVER presides over Joint Sitting!).',
        callouts: [
          'Reason RS Chairman cannot chair Joint Sitting: he is NOT a member of either House!',
          'Deputy Speaker is NOT subordinate to Speaker (directly responsible to House!)',
          'Speaker chairs Indian Parliamentary Group & nominates Parliamentary committees'
        ],
        landmarkCase: 'Articles 108(4), 110(3) & 118(4)',
        examTrap: 'EXAM FAVOURITE: When Speaker is absent at an Art 108 Joint Sitting, who presides? Deputy Speaker (LS) -> Deputy Chairman (RS) -> any chosen member. NEVER VP/Chairman!'
      , colorKey: 'emerald'
      },
      {
        id: 'spk-removal',
        badge: 'ART 94–96 · TENURE',
        title: 'Speaker Removal & Continuation Rules',
        subtitle: 'Resigns to Dy Speaker; Art 96 First-Instance Vote',
        tag: 'Independent Precedence (Rank 6)',
        side: 'left',
        rule: 'Removable by LS Effective Majority ("majority of all then members") with 14-day notice (note: motion needs 50 LS supporters to admit!). During Art 96 removal motion, Speaker CANNOT preside, CAN speak & vote in FIRST INSTANCE (NOT Casting Vote!).',
        callouts: [
          'Resigns to Deputy Speaker (President plays ZERO role in appointing/removing Speaker)',
          'Salary charged on Consolidated Fund of India (Rank 6 Warrant of Precedence alongside CJI)',
          'Remains in office even after LS dissolution until 1st sitting of new LS'
        ],
        landmarkCase: 'Articles 94, 95 & 96 Rules',
        examTrap: 'LOOK AT PRO TEM SPEAKER CONTRAST: Unlike permanent Speaker, Pro-Tem Speaker is appointed & administered oath by President strictly to administer oath to new MPs & oversee new Speaker election!'
      , colorKey: 'sky'
      },
      {
        id: 'chr-office',
        badge: 'CHAIRMAN · ART 89',
        title: 'Non-Member Presiding Officer (Vice-President)',
        subtitle: 'Votes ONLY on Tie; Removed ONLY via VP Art 67(b)',
        tag: 'Separate Vacancy Trigger',
        side: 'right',
        rule: 'VP is ex-officio RS Chairman and is NOT a member of Rajya Sabha. Like Speaker, wields only a Casting Vote in ties under Art 100 — EXCEPT during his own Art 67(b) removal when he CANNOT vote at all!',
        callouts: [
          'Resigns as VP to PRESIDENT (never to RS Deputy Chairman!)',
          'Cannot cast first-instance vote during his own removal debate because he is NOT a House member!',
          'Presides over RS order, 10th Schedule petitions in RS, and Secret Sittings'
        ],
        landmarkCase: 'Articles 64, 67(b), 89 & 92',
        examTrap: 'MASTER COMPARISON: During Speaker’s own removal (Art 96) -> Speaker VOTES in 1st instance (since he is an LS MP). During Chairman’s own removal (Art 92) -> VP CANNOT vote at all!'
      , colorKey: 'violet'
      },
      {
        id: 'chr-dy',
        badge: 'DY CHAIRMAN & PANEL',
        title: 'Deputy Chairman & Panel of Vice-Chairpersons',
        subtitle: 'Directly Under House vs Vacant Chair Trigger',
        tag: 'Office Vacant Rule',
        side: 'right',
        rule: 'Deputy Chairman is elected by RS from its own members; resigns to Chairman; removable by RS Effective Majority. Panel of Vice-Chairpersons can preside ONLY while Chairman/Dy Chair are ABSENT (NOT when office is VACANT!).',
        callouts: [
          'If office of Chairman/Dy Chairman is VACANT, President appoints a House MP until election!',
          'Panel of Chairpersons CANNOT preside when office is vacant (only during temporary absence!)',
          'Same absence vs vacancy rule applies to Lok Sabha Panel of Chairpersons!'
        ],
        landmarkCase: 'Articles 91 & 95 Provisos',
        examTrap: 'SUBTLE TRAP: Panel of Vice-Chairpersons presides ONLY during ABSENCE — if both Chair AND Dy Chair posts are VACANT, President nominates a member to preside!'
      , colorKey: 'rose'
      }
    ]
  },
  {
    id: 'state-legislature-vidhan-parishad',
    title: 'State Legislatures: Art 169 Creation & Art 197 Legislative Council Limits',
    category: 'State Legislatures',
    track: 'Executive & Parliament',
    articles: 'Articles 168 – 201',
    summary: 'Shows how States create/abolish Legislative Councils (Assembly Special Majority + Parliament Simple) and the strict 4-month Council delaying window (zero Joint Sitting!).',
    topology: 'flowchart',
    rootLabel: 'BICAMERAL STATES',
    rootSub: 'Only 6 States: UP, Bihar, MH, KA, AP, TS',
    edgeFlowTag: 'ART 169 & 197',
    footerRule: 'CRITICAL STATE TRAP: There is NO JOINT SITTING at the State level! If Assembly passes a Bill a second time, Legislative Council can delay it MAX 4 MONTHS total (3 mo + 1 mo) and CANNOT block it!',
    nodes: [
      {
        id: 'st-169',
        badge: 'ART 169 · BIRTH/DEATH',
        title: 'Creation or Abolition of Vidhan Parishad',
        subtitle: 'Assembly Special Majority -> Parliament Simple Majority',
        tag: 'Not an Art 368 Amd!',
        edgeLabel: 'Step 1 & 2',
        rule: 'State Assembly passes resolution by SPECIAL MAJORITY (>50% total + >=2/3 present & voting) -> Parliament enacts law by SIMPLE MAJORITY (Art 169(3): NOT deemed Art 368 constitutional amendment!).',
        callouts: [
          'Only 6 Indian States currently retain Legislative Councils (Vidhan Parishad): UP, Bihar, Maharashtra, Karnataka, Andhra Pradesh, Telangana',
          'Parliament is NOT bound to accept State Assembly’s Art 169 resolution automatically',
          'Max Parishad strength <= 1/3rd of State Assembly (min 40!)'
        ],
        landmarkCase: 'Article 169(1)–(3)',
        examTrap: 'FLIP TEST: State Assembly needs SPECIAL Majority, whereas Parliament implements it via SIMPLE Majority (outside Art 368)!'
      , colorKey: 'sky'
      },
      {
        id: 'st-171-comp',
        badge: 'ART 171 · 5 ELECTORATES',
        title: 'Indirect Electoral Composition (1/3, 1/3, 1/12, 1/12, 1/6)',
        subtitle: 'Local Bodies, MLAs, Graduates, Teachers & Governor',
        tag: '5/6 Elected; 1/6 Nom.',
        edgeLabel: 'Quotas Map',
        rule: '1/3rd elected by Local Bodies (Municipalities/ZPs); 1/3rd by MLAs; 1/12th by 3-yr Graduates; 1/12th by Secondary Teachers; 1/6th NOMINATED by Governor (Litt, Sci, Art, CO-OPERATIVE MOVEMENT, Social Service!).',
        callouts: [
          'Notice Governor nominates from 5 fields (adds CO-OPERATIVE MOVEMENT vs President’s 4 fields in RS!)',
          'Like Rajya Sabha, Parishad is permanent continuing House (1/3rd retire every 2 yrs, 6-yr term)',
          'CM / Ministers CAN belong to Legislative Council'
        ],
        landmarkCase: 'Article 171(3) Electorate Fractions',
        examTrap: 'CHECK FIELDS: President nominates to RS across 4 fields; Governor nominates 1/6th to State Council adding a 5th field: "CO-OPERATIVE MOVEMENT"!'
      , colorKey: 'violet'
      },
      {
        id: 'st-197-delay',
        badge: 'ART 197 · 3 + 1 MONTHS',
        title: 'Ordinary Bill Supremacy (No State Joint Sitting)',
        subtitle: 'Max Delay = 3 Mo (1st Pass) + 1 Mo (2nd Pass) = 4 Mo',
        tag: 'Weaker Than Rajya Sabha',
        edgeLabel: 'Bill Override',
        rule: 'Unlike Rajya Sabha which can trigger deadlock & Art 108 Joint Sitting, Legislative Council can hold an Assembly-originated Ordinary Bill ONLY 3 months first time + 1 month second time = 4 MONTHS MAX!',
        callouts: [
          'If Council originates & passes a bill and Assembly rejects it -> Bill DIES IMMEDIATELY!',
          'There is NO Art 108 Joint Sitting in States!',
          'On State Money Bills (Art 198), Council holds exact 14-day recommendatory limit like Rajya Sabha'
        ],
        landmarkCase: 'Article 197 Legislative Overriding Timeline',
        examTrap: '4-Month Ceiling Math = 3 months (from date bill reached Council) on 1st pass + 1 month on 2nd pass by Assembly -> automatically deemed passed!'
      , colorKey: 'emerald'
      },
      {
        id: 'st-196-diss',
        badge: 'LAPSE CONTRAST',
        title: 'Effect of Vidhan Sabha Dissolution on Bills',
        subtitle: 'Mirrors Lok Sabha Dissolution Mechanics (Art 196(5))',
        tag: 'Pending Bill Check',
        edgeLabel: 'House Dissolves',
        rule: 'Bill pending in Assembly or passed by Assembly & pending in Council -> LAPSES. Bill originating & still pending inside Council (never passed by Assembly) -> SURVIVES!',
        callouts: [
          'Bill pending Governor/President assent after both Houses pass -> DOES NOT LAPSE',
          'Bill returned by President/Governor for reconsideration -> DOES NOT LAPSE',
          'Council Chairman & Dy Chairman cannot sit while own removal pending (Art 185)'
        ],
        landmarkCase: 'Article 196(3)–(5)',
        examTrap: 'Remember: Vidhan Parishad can neither vote Demands for Grants nor remove State Cabinet (only Assembly under Art 164(2) holds No-Confidence power)!'
      , colorKey: 'rose'
      }
    ]
  },
  {
    id: 'cm-state-cabinet-art163-164',
    title: 'Chief Minister, State Cabinet & Governor Discretion Frontiers',
    category: 'State Executive',
    track: 'Executive & Parliament',
    articles: 'Articles 163, 164 & 167',
    summary: 'Equilibrium diagram contrasting President’s absence of constitutional discretion against Governor’s express Art 163 discretion & floor-test limits.',
    topology: 'balance-beam',
    rootLabel: 'GOVERNOR ART 163 DISCRETION vs CM CABINET POWER',
    rootSub: 'Text Contains "Discretion" for Governor (Art 163), NEVER for President (Art 74)',
    edgeFlowTag: 'ART 163 REVIEW',
    footerRule: 'Nabam Rebia (2016) 5-Judge Constitution Bench: Governor’s Art 163 discretion is narrowly confined to Constitutionally mandated areas — CANNOT meddle in Speaker’s 10th Sch or call sessions bypassing Cabinet!',
    nodes: [
      {
        id: 'gov-163',
        badge: 'ART 163(1) · EXPRESS',
        title: 'Constitutional vs Situational Discretion',
        subtitle: 'Art 200 Reserve, Art 356 Report, Hung Assembly, Floor Test',
        tag: 'Explicit Constitutional Word',
        rule: 'Unlike Art 74 (President), Art 163 explicitly empowers Governor to act "in his discretion" where Constitution requires. Courts check if Governor overreached genuine constitutional exceptions.',
        callouts: [
          'Constitutional Discretion: Art 200 Reservation, Art 356 Report, Special 371/6th Sch Tribal Royalty disputes',
          'Situational Discretion: Selecting CM in hung verdict, dismissing lost-majority govt, dissolving Assembly when CoM lost confidence',
          'Art 163(2) does NOT immunize manifestly illegal/arbitrary exercise of discretion (Nabam Rebia 2016)'
        ],
        landmarkCase: 'Nabam Rebia v. Deputy Speaker (2016) 5-Judge Bench',
        examTrap: 'MAJOR DIFFERENCE: Does President have Constitutional Discretion text in Art 74? NO — only Situational Discretion! Does Governor have BOTH? YES (Art 163 text)!'
      , colorKey: 'sky'
      },
      {
        id: 'cm-164-rules',
        badge: 'ART 164 · STATE CABINET',
        title: '15% Size Cap (Min 12!) & Tribal Welfare Minister',
        subtitle: '91st Amd + 94th Amd State Exceptions',
        tag: 'Special States Rule',
        rule: 'Total State Ministers incl. CM <= 15% of Assembly strength, BUT CANNOT BE FEWER THAN 12 (exception for tiny Goa/Sikkim/Mizoram!). CM accountable SOLELY to Legislative Assembly (164(2)).',
        callouts: [
          'Art 164(1) Proviso (94th Amd): MP, Chhattisgarh, Jharkhand & Odisha MUST have a Minister exclusively in charge of Tribal Welfare (Bihar dropped in 2006!)',
          'Art 164(4): Non-MLA appointed Minister/CM must win seat within 6 months (B.R. Kapur 2001: disqualified convict CANNOT be sworn as CM!)',
          'Governor appoints State Advocate General, SPSC Chair & Members (removal of SPSC rests ONLY with President!)'
        ],
        landmarkCase: 'B.R. Kapur v. State of Tamil Nadu (2001) & 94th Amendment 2006',
        examTrap: '2 EXAM GEMS: (1) Min 12 Ministers rule at State level (91st Amd)! (2) Tribal Welfare Minister mandatory in MP, CG, JH, OD (NOT Bihar after 94th Amd)!'
      , colorKey: 'emerald'
      },
      {
        id: 'cm-167-duty',
        badge: 'ART 167 · CHANNEL',
        title: 'Chief Minister Communication Duties',
        subtitle: 'Submit Individual Decision to Whole Cabinet',
        tag: 'Mirrors Art 78',
        rule: 'Exactly mirrors PM duties under Art 78: CM communicates Cabinet legislative/admin proposals to Governor and places individual minister’s decision before Council when Governor requires.',
        callouts: [
          'Chief Minister chairs State Planning Board & rotates Zonal Council Vice-Chairmanship',
          'CM advises Governor on proroguing, dissolving Assembly & appointing key State officials',
          'Death/resignation of CM dissolves State Cabinet'
        ],
        landmarkCase: 'S.R. Bommai (1994) & Rameshwar Prasad (2006)',
        examTrap: 'Can Governor demand Floor Test when opposition claims CM lost majority? YES — Shivraj Singh Chouhan (2020) upheld Governor directing Trust Vote on floor of House!'
      , colorKey: 'violet'
      },
      {
        id: 'gov-pardon-diff',
        badge: 'ART 161 vs 72',
        title: 'Governor Term, Transfer & Clemency Ceiling',
        subtitle: 'Holds Pleasure of President; No Death Pardon / Court Martial',
        tag: 'B.P. Singhal 2010',
        rule: 'President appoints Governor by Warrant; B.P. Singhal (2010) held President cannot arbitrarily sack Governor merely for ideological change — must show valid reasons despite "pleasure".',
        callouts: [
          'Under Art 161, Governor CANNOT pardon death sentence (only suspend/commute) & ZERO Court-Martial power',
          'Can hold office for 2 or more States (7th Amendment 1956); Salary shared proportionately as President decides',
          'No impeachment mechanism exists in Constitution for Governor removal'
        ],
        landmarkCase: 'B.P. Singhal v. Union of India (2010) 5-Judge Bench',
        examTrap: 'Who determines how much each State pays when ONE Governor governs TWO States? PRESIDENT determines proportions (Article 158(3A))!'
      , colorKey: 'rose'
      }
    ]
  },
  {
    id: 'attorney-advocate-general-76-165',
    title: 'Attorney General (Art 76) vs Advocate General (Art 165) & Art 88 Rights',
    category: 'Constitutional Law Officers',
    track: 'Executive & Parliament',
    articles: 'Articles 76, 88, 165 & 177',
    summary: 'Splits Union vs State highest law officers comparing SC/HC eligibility, full private practice rights, Cabinet exclusion, and House speaking-without-voting under Arts 88/177.',
    topology: 'matrix-split',
    rootLabel: 'HIGHEST CONSTITUTIONAL LAW OFFICERS (ARTS 76 vs 165)',
    rootSub: 'Both Enjoy Legislative Speaking Privileges (Arts 88 & 177) • Neither Is Barred From Private Practice',
    edgeFlowTag: 'LAW OFFICERS',
    footerRule: 'NEITHER AG nor Advocate General is a Government Servant (no civil service salary or conduct bar against private civil practice outside Govt conflict) nor a Cabinet Member (unlike UK Attorney General)!',
    nodes: [
      {
        id: 'ag-india',
        badge: 'ART 76 · ATTORNEY GENERAL',
        title: 'Highest Law Officer of India',
        subtitle: 'SC Judge Qualification • Audience in ALL Indian Courts',
        tag: 'President Pleasure',
        side: 'left',
        rule: 'Appointed by President; MUST be qualified to be appointed a SUPREME COURT JUDGE (5 yrs HC Judge, 10 yrs HC Advocate, or Eminent Jurist). Fixed term absent — holds pleasure of President (customarily resigns with Cabinet).',
        callouts: [
          'Remuneration determined SOLELY by PRESIDENT (NOT fixed by Parliament!)',
          'Right of Audience in ALL courts across territory of India (Art 76(3))',
          'Solicitor General & Additional Solicitors General are STATUTORY/executive posts — NOT mentioned in Constitution!'
        ],
        landmarkCase: 'Articles 76(1)–(4) Constitutional Rules',
        examTrap: 'FREQUENT ERROR: Are "Solicitor General of India" and "Additional Solicitor General" mentioned in the Constitution? NO — only Attorney General (76) & Advocate General (165)!'
      , colorKey: 'sky'
      },
      {
        id: 'ag-88',
        badge: 'ART 88 & 105(4)',
        title: 'Parliament Floor Rights & Privileges',
        subtitle: 'Speak in LS, RS, Joint Sittings & Committees — NO VOTE!',
        tag: 'Art 105(4) Shield',
        side: 'left',
        rule: 'Under Art 88, AG has right to speak & take part in proceedings of Lok Sabha, Rajya Sabha, Joint Sittings, and ANY Parliamentary Committee he is named member of — WITHOUT RIGHT TO VOTE.',
        callouts: [
          'Enjoys full MP Parliamentary Privileges under Art 105(4)!',
          'Assists Government on Art 143 Presidential References to Supreme Court',
          'CAN engage in private legal practice except against Union Govt or criminal defence without permission'
        ],
        landmarkCase: 'Articles 88 & 105(4) Parliamentary Standing',
        examTrap: 'Can AG be a member of a Parliamentary Committee AND vote inside? Art 88 bars voting "by virtue of this article" in Houses/Committees!'
      , colorKey: 'violet'
      },
      {
        id: 'adv-gen',
        badge: 'ART 165 · ADVOCATE GENERAL',
        title: 'Highest Law Officer of the State',
        subtitle: 'HC Judge Qualification (10 Yrs HC Advocate/Jud. Service)',
        tag: 'Governor Pleasure',
        side: 'right',
        rule: 'Appointed by Governor; MUST be qualified to be a HIGH COURT JUDGE (10 yrs judicial office or 10 yrs HC Advocate — note NO "eminent jurist" clause for HC Judge!). Remuneration fixed by Governor.',
        callouts: [
          'Holds office during pleasure of Governor (resigns alongside State CoM change)',
          'Advises State Government & represents State in High Court / Supreme Court',
          'Not a full-time govt counsel; private practice allowed without State conflict'
        ],
        landmarkCase: 'Article 165 Constitutional Criteria',
        examTrap: 'SUBTLE TRAP: An "Eminent Jurist" CAN be appointed Attorney General (mirroring Art 124(3) SC rule), CANNOT be appointed Advocate General (Art 217 HC Judge rule has NO jurist category)!'
      , colorKey: 'emerald'
      },
      {
        id: 'adv-177',
        badge: 'ART 177 & 194(4)',
        title: 'State Assembly / Council Privileges',
        subtitle: 'Speak in Vidhan Sabha/Parishad — NO VOTE',
        tag: 'State Equivalent of 88',
        side: 'right',
        rule: 'Under Art 177, Advocate General speaks and participates in State Assembly, Council & State Committees without voting rights, shielded by full Art 194(4) MLA privileges.',
        callouts: [
          'Represents State when contempt/constitutional challenge arises in Assembly',
          'Under Contempt of Courts Act 1971 Sec 15, AG/Advocate General consent required for private criminal contempt petitions!',
          'Independent constitutional office free from bureaucratic chain of command'
        ],
        landmarkCase: 'Contempt of Courts Act s.15 + Arts 177 & 194(4)',
        examTrap: 'Who fixes Advocate General salary? GOVERNOR (NOT State Legislature!). Who fixes CAG/ECI/Judge salaries? PARLIAMENT!'
      , colorKey: 'rose'
      }
    ]
  }
];
