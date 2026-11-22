export type BodyClassification = 'Constitutional' | 'Statutory' | 'Executive / Extra-Constitutional';

export interface ConstitutionalBodyItem {
  id: string;
  name: string;
  hindiName?: string;
  classification: BodyClassification;
  constitutionalArticle?: string;
  enactingStatute?: string;
  establishedYear: string;
  composition: string;
  appointingAuthority: string;
  selectionCommittee?: string;
  tenure: string;
  removalProcedure: string;
  removalGrounds: string;
  postRetirementBar: string;
  reportSubmittedTo: string;
  keyFunctions: string[];
  examinerTraps: string[];
  examFrequency: string; // e.g. "⭐⭐⭐⭐⭐ Guaranteed Core (Asked 12 times)"
}

export const CONSTITUTIONAL_BODIES_DATA: ConstitutionalBodyItem[] = [
  {
    id: 'eci',
    name: 'Election Commission of India (ECI)',
    hindiName: 'भारत निर्वाचन आयोग',
    classification: 'Constitutional',
    constitutionalArticle: 'Article 324 (Part XV)',
    establishedYear: '1950',
    composition: '1 Chief Election Commissioner (CEC) + 2 Election Commissioners (ECs)',
    appointingAuthority: 'President of India',
    selectionCommittee: 'PM (Chairperson) + Leader of Opposition/Single Largest Opposition Party in Lok Sabha + Union Cabinet Minister nominated by PM (under Chief Election Commissioner Act 2023). Note: SC in Anoop Baranwal (2023) had included CJI, but Parliament altered it.',
    tenure: '6 years or up to 65 years of age, whichever is earlier',
    removalProcedure: 'CRUCIAL DISTINCTION: CEC is removed in like manner and grounds as a Judge of the Supreme Court (Art 124(4) parliamentary address). Other ECs are removed by the President ON THE RECOMMENDATION OF THE CEC (no parliamentary impeachment needed).',
    removalGrounds: 'Proved misbehaviour or incapacity (for CEC)',
    postRetirementBar: 'NO constitutional bar on further employment under Government of India or State, and NOT debarred from joining political parties (often criticized by Law Commission).',
    reportSubmittedTo: 'Independent constitutional entity; reports directly to the public & Parliament on election conduct.',
    keyFunctions: [
      'Superintendence, direction, and control of elections to Parliament, State Legislatures, President, and Vice-President.',
      'Allotment of election symbols and recognition of national/state political parties under Election Symbols Order 1968.',
      'Advisory jurisdiction on post-election disqualification of MPs (Art 103) and MLAs (Art 192) to the President/Governor.',
      'Enforcement of Model Code of Conduct (MCC).'
    ],
    examinerTraps: [
      'TRAP 1: ECI does NOT conduct Panchayat or Municipal elections! Those are conducted exclusively by State Election Commissions (Arts 243K & 243ZA).',
      'TRAP 2: Other Election Commissioners do NOT have judge-like removal security; they can be dismissed by the President on the CEC’s advice alone (Art 324(5) proviso).',
      'TRAP 3: Constitution has NOT prescribed specific legal, administrative, or judicial qualifications for Election Commissioners, nor debarred them from post-retirement government posts.'
    ],
    examFrequency: '⭐⭐⭐⭐⭐ Ultra High-Yield (Appeared 15+ times)'
  },
  {
    id: 'cag',
    name: 'Comptroller and Auditor General of India (CAG)',
    hindiName: 'भारत के नियंत्रक एवं महालेखापरीक्षक',
    classification: 'Constitutional',
    constitutionalArticle: 'Article 148 (Part V, Chapter V)',
    establishedYear: '1950',
    composition: 'Sole Member authority (Corporation Sole)',
    appointingAuthority: 'President of India by warrant under his hand and seal',
    selectionCommittee: 'Appointed directly by President on advice of Union Cabinet (no statutory collegium)',
    tenure: '6 years or up to 65 years of age, whichever is earlier',
    removalProcedure: 'Removed in like manner and on the like grounds as a Judge of the Supreme Court under Article 124(4) (Special Majority of each House).',
    removalGrounds: 'Proved misbehaviour or incapacity',
    postRetirementBar: 'ABSOLUTE CONSTITUTIONAL BAR: Article 148(4) strictly prohibits the CAG from being eligible for any further office either under the Government of India or under any State Government.',
    reportSubmittedTo: 'Submits 3 audit reports to the President (Union) and to Governors (States), who cause them to be laid before Parliament/State Legislature. Reports are examined by Public Accounts Committee (PAC).',
    keyFunctions: [
      'Audits all expenditure from the Consolidated Fund of India, Consolidated Fund of each State, and Contingency/Public Accounts.',
      'Acts as "Friend, Philosopher, and Guide" to the Public Accounts Committee (PAC) of Parliament.',
      'Audits receipts and expenditure of bodies substantially financed from Union or State revenues.',
      'Compiles and maintains accounts of State Governments (auditing only for Union since 1976 separation of accounts from audit).'
    ],
    examinerTraps: [
      'TRAP 1: CAG does NOT have control over the issue of money from the Consolidated Fund! Unlike the British CAG whose sanction is needed before withdrawing money, the Indian CAG audits expenditure ONLY AFTER it has taken place (Ex-post facto audit).',
      'TRAP 2: CAG is absolutely ineligible for further government office under Art 148(4), unlike CEC or Attorney General.',
      'TRAP 3: Administrative expenses, salaries, and pensions of the CAG office are CHARGED upon the Consolidated Fund of India (non-votable under Art 148(6)).'
    ],
    examFrequency: '⭐⭐⭐⭐⭐ Ultra High-Yield (Guaranteed Prelims Core)'
  },
  {
    id: 'upsc',
    name: 'Union Public Service Commission (UPSC)',
    hindiName: 'संघ लोक सेवा आयोग',
    classification: 'Constitutional',
    constitutionalArticle: 'Articles 315 to 323 (Part XIV, Chapter II)',
    establishedYear: '1926 (Federal PSC; Constitutional in 1950)',
    composition: 'Chairman and 9 to 11 members (determined by President)',
    appointingAuthority: 'President of India',
    selectionCommittee: 'Appointed directly by President on recommendation of Central Government',
    tenure: '6 years or up to 65 years of age, whichever is earlier',
    removalProcedure: 'Removed by the President ONLY after an inquiry by the Supreme Court under Article 317(1) on reference by the President. The advice of the Supreme Court is BINDING on the President. (Can also be removed directly if adjudged insolvent, takes paid employment outside office, or infirmity).',
    removalGrounds: 'Misbehaviour (SC inquiry binding) or Insolvency / Paid Employment (direct by President)',
    postRetirementBar: 'Chairman of UPSC is INELIGIBLE for further employment under Central or State Government. A Member is eligible ONLY to become Chairman of UPSC or Chairman of an SPSC, but not for any other government post (Art 319).',
    reportSubmittedTo: 'President of India annually, who causes it to be laid before each House of Parliament along with a memorandum explaining reasons for non-acceptance of advice.',
    keyFunctions: [
      'Conducts examinations for appointments to All-India Services, Central Services, and Public Services of Union.',
      'Consulted on all matters relating to methods of recruitment, principles of appointment, promotions, and disciplinary matters affecting civil servants.',
      'Advisory body only; recommendations are not legally binding, though convention requires government to accept.'
    ],
    examinerTraps: [
      'TRAP 1: On reference under Art 317 for misbehaviour, the Supreme Court advice is BINDING on the President (unlike normal Art 143 advisory jurisdiction which is non-binding)!',
      'TRAP 2: UPSC is NOT consulted on reservations (Art 320(4)) or claims of SCs/STs under Art 335.',
      'TRAP 3: UPSC deals with recruitment; Central Vigilance Commission (CVC) deals with disciplinary corruption vigilance.'
    ],
    examFrequency: '⭐⭐⭐⭐ High-Yield (Appeared 9 times)'
  },
  {
    id: 'spsc',
    name: 'State Public Service Commission (SPSC)',
    hindiName: 'राज्य लोक सेवा आयोग',
    classification: 'Constitutional',
    constitutionalArticle: 'Articles 315 to 323 (Part XIV)',
    establishedYear: '1950',
    composition: 'Chairman and members determined by Governor of the State',
    appointingAuthority: 'GOVERNOR of the State (Art 316(1))',
    selectionCommittee: 'Appointed by Governor on advice of State Council of Ministers',
    tenure: '6 years or up to 62 YEARS OF AGE (Crucial difference: 62 for SPSC vs 65 for UPSC)',
    removalProcedure: 'CLASSIC PRELIMS TRAP: Appointed by the Governor, but can be removed ONLY BY THE PRESIDENT OF INDIA! (Governor CANNOT remove SPSC Chairman/Members; Governor can only suspend them pending SC inquiry under Art 317(2)).',
    removalGrounds: 'Same as UPSC (Misbehaviour after binding Supreme Court inquiry under Art 317).',
    postRetirementBar: 'Chairman of SPSC is eligible for appointment as Chairman or Member of UPSC, or Chairman of any other SPSC, but not for any other government post. Members can become Chairman of that SPSC, Chairman/Member of UPSC, or Chairman of another SPSC.',
    reportSubmittedTo: 'Governor of the State annually, who causes it to be laid before the State Legislature.',
    keyFunctions: [
      'Conducts examinations for appointments to the services of the State.',
      'Consulted on disciplinary matters and service rules in the State.'
    ],
    examinerTraps: [
      'TRAP 1 (MOST POPULAR): Governor appoints SPSC members, but Governor CANNOT remove them! Only the PRESIDENT can remove an SPSC member after Supreme Court inquiry.',
      'TRAP 2: Age limit is 62 years for SPSC (raised from 60 by 41st CAA 1976), compared to 65 years for UPSC.',
      'TRAP 3: Joint State Public Service Commission (JSPSC) is a STATUTORY BODY created by Act of Parliament upon request of state assemblies, NOT a constitutional body!'
    ],
    examFrequency: '⭐⭐⭐⭐⭐ Classic Prelims Trap Item'
  },
  {
    id: 'finance-commission',
    name: 'Finance Commission of India (FC)',
    hindiName: 'भारत का वित्त आयोग',
    classification: 'Constitutional',
    constitutionalArticle: 'Article 280 (Part XII, Chapter I)',
    establishedYear: '1951 (First FC chaired by K.C. Neogy)',
    composition: '1 Chairman + 4 other members (determined by Parliament under Finance Commission Act 1951)',
    appointingAuthority: 'President of India every 5th year (or earlier as needed)',
    selectionCommittee: 'Appointed directly by Central Government / President',
    tenure: 'Specified by the President in the order of appointment (Quinquennial intermittent body)',
    removalProcedure: 'Members can be removed by the President under rules specified in Finance Commission Act 1951 (insolvency, infirmity, conviction, conflict of interest).',
    removalGrounds: 'Insolvency, moral turpitude, financial conflict of interest',
    postRetirementBar: 'Eligible for reappointment or other public posts (no absolute bar under Art 280).',
    reportSubmittedTo: 'President of India, who causes it to be laid before each House of Parliament along with an Explanatory Memorandum as to the action taken (Action Taken Report - Art 281).',
    keyFunctions: [
      'Recommends the vertical distribution of net proceeds of divisible taxes between Union and States.',
      'Recommends the horizontal allocation among the States of their respective shares.',
      'Recommends principles governing grants-in-aid of revenues to States under Article 275.',
      'Recommends measures to augment the Consolidated Fund of a State to supplement resources of Panchayats and Municipalities (73rd/74th CAAs).'
    ],
    examinerTraps: [
      'TRAP 1: Recommendations of the Finance Commission are ADVISORY ONLY and not constitutionally binding on the Central Government.',
      'TRAP 2: Finance Commission does NOT determine tax rates or levy taxes; it only recommends distribution formulas of taxes already collected.',
      'TRAP 3: It is an intermittent (quinquennial) body, not a permanent standing secretariat.'
    ],
    examFrequency: '⭐⭐⭐⭐⭐ Ultra High-Yield (Appeared 12 times)'
  },
  {
    id: 'gst-council',
    name: 'Goods and Services Tax Council (GST Council)',
    hindiName: 'वस्तु एवं सेवा कर परिषद',
    classification: 'Constitutional',
    constitutionalArticle: 'Article 279A (Inserted by 101st CAA 2016)',
    establishedYear: '2016',
    composition: 'Union Finance Minister (Chairperson) + Union Minister of State for Finance + State Finance/Taxation Ministers of all States and UTs with Assemblies.',
    appointingAuthority: 'Constitutional ex-officio body; established by the President within 60 days of 101st CAA.',
    selectionCommittee: 'Not applicable (Ex-officio federal ministerial body)',
    tenure: 'Permanent standing constitutional federal council',
    removalProcedure: 'Members hold position ex-officio by virtue of their ministerial portfolios.',
    removalGrounds: 'Loss of ministerial office in Centre or State',
    postRetirementBar: 'None (political ex-officio members)',
    reportSubmittedTo: 'Resolutions published as federal regulatory decisions; tables annual operational records.',
    keyFunctions: [
      'Determines GST tax slabs (0%, 5%, 12%, 18%, 28%), exemptions, thresholds, and cess.',
      'Recommends model GST laws, principles of levy, and place of supply rules.',
      'Adjudicates or provides dispute resolution mechanism between Centre and States or between States.'
    ],
    examinerTraps: [
      'TRAP 1: VOTING WEIGHTAGE FORMULA: Central Government vote has a weight of ONE-THIRD (33.3%) of total votes cast; ALL STATE GOVERNMENTS combined have a weight of TWO-THIRDS (66.7%).',
      'TRAP 2: DECISION THRESHOLD: Every decision requires a THREE-FOURTHS (75%) majority of weighted votes of members present and voting. Neither Centre nor States alone can push a decision without the other!',
      'TRAP 3: In Mohit Minerals (2022), Supreme Court held GST Council recommendations are NOT binding on Parliament and State Legislatures; they possess only persuasive value under cooperative federalism.'
    ],
    examFrequency: '⭐⭐⭐⭐⭐ High-Yield Contemporary Federalism Topic'
  },
  {
    id: 'ncsc',
    name: 'National Commission for Scheduled Castes (NCSC)',
    hindiName: 'राष्ट्रीय अनुसूचित जाति आयोग',
    classification: 'Constitutional',
    constitutionalArticle: 'Article 338 (Bifurcated from joint commission by 89th CAA 2003)',
    establishedYear: '2004 (originally Art 338 special officer 1950)',
    composition: '1 Chairperson + 1 Vice-Chairperson + 3 other Members',
    appointingAuthority: 'President of India by warrant under his hand and seal',
    selectionCommittee: 'Appointed directly by President on advice of Union Government',
    tenure: '3 years (determined by President under rules)',
    removalProcedure: 'Removed by the President on grounds of insolvency, infirmity, conviction, or conflict of interest.',
    removalGrounds: 'Insolvency, unfitness, conviction of moral turpitude',
    postRetirementBar: 'Eligible for a maximum of 2 terms only; no holding of more than two consecutive terms.',
    reportSubmittedTo: 'President annually, who causes it to be laid before each House of Parliament with action taken memo. Reports regarding State matter are forwarded to Governor.',
    keyFunctions: [
      'Investigates and monitors all matters relating to safeguards provided for Scheduled Castes under the Constitution or laws.',
      'Inquires into specific complaints with respect to deprivation of rights and safeguards of SCs.',
      'While investigating, commission has ALL THE POWERS OF A CIVIL COURT trying a suit under Code of Civil Procedure (CPC).'
    ],
    examinerTraps: [
      'TRAP 1: While NCSC has Civil Court powers to summon witnesses and requisition documents, its findings and recommendations are ADVISORY ONLY. It is NOT a criminal court and CANNOT punish offenders directly or award compensation.',
      'TRAP 2: Up to 102nd CAA (2018), NCSC also discharged functions regarding Anglo-Indian Community and Other Backward Classes (OBCs). OBCs now have their own commission under Art 338B.',
      'TRAP 3: Ranks: Chairperson enjoys rank of Union Cabinet Minister; Vice-Chairperson has rank of Minister of State; Members have rank of Secretary to GoI.'
    ],
    examFrequency: '⭐⭐⭐⭐ High-Yield Prelims & Mains Topic'
  },
  {
    id: 'ncst',
    name: 'National Commission for Scheduled Tribes (NCST)',
    hindiName: 'राष्ट्रीय अनुसूचित जनजाति आयोग',
    classification: 'Constitutional',
    constitutionalArticle: 'Article 338A (Inserted by 89th Constitutional Amendment Act 2003)',
    establishedYear: '2004',
    composition: '1 Chairperson + 1 Vice-Chairperson + 3 other Members (at least 1 woman member mandatory)',
    appointingAuthority: 'President of India by warrant under his hand and seal',
    selectionCommittee: 'Appointed directly by President on advice of Union Government',
    tenure: '3 years',
    removalProcedure: 'Removed by the President under statutory service rules.',
    removalGrounds: 'Insolvency, infirmity, conflict of interest, or moral turpitude conviction',
    postRetirementBar: 'Max 2 terms permitted',
    reportSubmittedTo: 'President annually, and to Governors of States with Scheduled Tribes.',
    keyFunctions: [
      'Oversees safeguards for Scheduled Tribes; measures regarding minor forest produce rights (FRA 2006), rehabilitation of displaced tribal communities, and protection of mineral rights in 5th and 6th Schedule areas.',
      'Vested with Civil Court powers (summoning, evidence on affidavit, discovery of documents).'
    ],
    examinerTraps: [
      'TRAP 1: At least ONE member of NCST MUST BE A WOMAN (mandatory under service rules).',
      'TRAP 2: NCST was created by the 89th CAA (2003) which split the erstwhile combined National Commission for SCs and STs into two separate constitutional bodies under Art 338 and Art 338A.'
    ],
    examFrequency: '⭐⭐⭐⭐ High-Yield Topic'
  },
  {
    id: 'ncbc',
    name: 'National Commission for Backward Classes (NCBC)',
    hindiName: 'राष्ट्रीय पिछड़ा वर्ग आयोग',
    classification: 'Constitutional',
    constitutionalArticle: 'Article 338B (Elevated from statutory to constitutional by 102nd CAA 2018)',
    establishedYear: '2018 (originally statutory in 1993 pursuant to Indra Sawhney)',
    composition: '1 Chairperson + 1 Vice-Chairperson + 3 other Members',
    appointingAuthority: 'President of India by warrant under his hand and seal',
    selectionCommittee: 'Appointed directly by President on advice of Central Government',
    tenure: '3 years',
    removalProcedure: 'Removed by the President under rules framed under Art 338B.',
    removalGrounds: 'Insolvency, moral turpitude conviction, infirmity',
    postRetirementBar: 'Max 2 terms permitted',
    reportSubmittedTo: 'President annually, who places it before Parliament and respective Governors.',
    keyFunctions: [
      'Investigates complaints and welfare measures for Socially and Educationally Backward Classes (SEBCs).',
      'Civil Court powers for investigation and summoning.',
      'Consulted on all major policy matters affecting SEBCs.'
    ],
    examinerTraps: [
      'TRAP 1: 102nd CAA (2018) gave constitutional status to NCBC (Art 338B) and inserted Art 342A (Presidential list of SEBCs).',
      'TRAP 2: 105th CAA (2021) was passed to restore the power of State Governments to maintain their own state lists of SEBCs (overcoming SC Maratha reservation ruling).'
    ],
    examFrequency: '⭐⭐⭐⭐ High-Yield Recent Amendment Topic'
  },
  {
    id: 'attorney-general',
    name: 'Attorney General for India (AG)',
    hindiName: 'भारत के महान्यायवादी',
    classification: 'Constitutional',
    constitutionalArticle: 'Article 76 (Part V, Chapter I)',
    establishedYear: '1950',
    composition: 'Sole Constitutional Law Officer (Chief Legal Advisor to Government of India)',
    appointingAuthority: 'President of India',
    selectionCommittee: 'Appointed on recommendation of Union Cabinet; must be qualified to be appointed a Judge of the Supreme Court.',
    tenure: 'NO FIXED TENURE: Holds office during the PLEASURE OF THE PRESIDENT.',
    removalProcedure: 'Can be removed by the President at any time without reason (resigns conventionally when Council of Ministers resigns).',
    removalGrounds: 'Pleasure of the President (Art 76(4))',
    postRetirementBar: 'NO BAR on private legal practice! AG is not a full-time government servant and is not debarred from private practice, provided they do not advise or hold briefs against the Government of India or defend accused in criminal cases without permission.',
    reportSubmittedTo: 'Advises the Union Government upon legal matters; appears in Supreme Court under Art 143/Art 136.',
    keyFunctions: [
      'First Law Officer of the Government of India.',
      'Under Article 88, the AG has the RIGHT TO SPEAK and participate in the proceedings of either House of Parliament or any joint sitting or parliamentary committee of which they are named a member.',
      'Right of audience in all courts in the territory of India (Art 76(3)).'
    ],
    examinerTraps: [
      'TRAP 1: Under Article 88, the Attorney General has the right to speak and participate in Parliament, BUT HAS NO RIGHT TO VOTE!',
      'TRAP 2: The Attorney General is NOT a member of the Central Cabinet. (In Britain, the AG is a member of the ministry; in India, there is a separate Law Minister in the Cabinet).',
      'TRAP 3: Solicitor General and Additional Solicitors General are STATUTORY / EXECUTIVE law officers, NOT constitutional bodies (Art 76 mentions only the Attorney General)!'
    ],
    examFrequency: '⭐⭐⭐⭐⭐ Ultra High-Yield (Guaranteed Prelims Core)'
  },
  {
    id: 'advocate-general',
    name: 'Advocate General for the State',
    hindiName: 'राज्य के महाधिवक्ता',
    classification: 'Constitutional',
    constitutionalArticle: 'Article 165 (Part VI, Chapter II) [+89 Symmetry to Art 76]',
    establishedYear: '1950',
    composition: 'Sole Constitutional Law Officer for the State',
    appointingAuthority: 'GOVERNOR of the State',
    selectionCommittee: 'Appointed on advice of State Council of Ministers; must be qualified to be appointed a Judge of a High Court.',
    tenure: 'NO FIXED TENURE: Holds office during the PLEASURE OF THE GOVERNOR (Art 165(3)).',
    removalProcedure: 'Can be removed by the Governor at any time without procedural inquiry.',
    removalGrounds: 'Pleasure of the Governor',
    postRetirementBar: 'Not debarred from private legal practice.',
    reportSubmittedTo: 'Advises State Government.',
    keyFunctions: [
      'Highest law officer in the State.',
      'Under Article 177, has the right to speak and take part in proceedings of the State Legislature, but WITHOUT RIGHT TO VOTE.'
    ],
    examinerTraps: [
      'TRAP 1: Remuneration of Advocate General is determined by the Governor, not fixed by the Constitution (Art 165(3)).',
      'TRAP 2: Right to speak in State Legislative Assembly/Council under Art 177, but NO voting right.'
    ],
    examFrequency: '⭐⭐⭐⭐ High-Yield Coordinate Article'
  },
  {
    id: 'nhrc',
    name: 'National Human Rights Commission (NHRC)',
    hindiName: 'राष्ट्रीय मानवाधिकार आयोग',
    classification: 'Statutory',
    enactingStatute: 'Protection of Human Rights Act (PHRA), 1993 (amended in 2006 & 2019)',
    establishedYear: '1993',
    composition: '1 Chairperson + 5 full-time Members + 7 ex-officio Members (Chairpersons of NCSC, NCST, NCBC, NCW, NCM, NCPCR, and Chief Commissioner for Persons with Disabilities).',
    appointingAuthority: 'President of India by warrant under his hand and seal',
    selectionCommittee: '6-MEMBER HIGH-LEVEL COMMITTEE: PM (Chairperson) + Speaker of Lok Sabha + Deputy Chairman of Rajya Sabha + Leaders of Opposition in both Lok Sabha and Rajya Sabha + Union Home Minister.',
    tenure: '3 YEARS or up to 70 YEARS OF AGE (amended from 5 years to 3 years by 2019 Amendment Act); eligible for reappointment.',
    removalProcedure: 'Removed by the President on grounds of proved misbehaviour or incapacity ONLY after an inquiry by the Supreme Court on reference by President.',
    removalGrounds: 'Proved misbehaviour or incapacity (SC inquiry) or direct for insolvency/infirmity',
    postRetirementBar: 'Debarred from further employment under Central or State Government.',
    reportSubmittedTo: 'Central Government and concerned State Governments, which lay them before Parliament and State Legislatures with action taken memo.',
    keyFunctions: [
      'Inquires suo motu or on petition into human rights violations by public servants or negligence in prevention.',
      'Visits jails and places of detention to study living conditions of inmates.',
      'Recommends grant of interim relief, compensation, or initiation of prosecution against guilty officials.'
    ],
    examinerTraps: [
      'TRAP 1: NHRC is a STATUTORY BODY, NOT a constitutional body!',
      'TRAP 2: Post-2019 Amendment, the Chairperson can be a former Chief Justice of India OR ANY former Judge of the Supreme Court (previously only CJI was eligible).',
      'TRAP 3: NHRC recommendations are PURELY ADVISORY and have no binding or execution powers; it cannot punish violators itself.',
      'TRAP 4: JURISDICTIONAL LIMITATION: NHRC cannot inquire into any matter after the expiry of ONE YEAR from the date on which the human rights violation occurred (Section 36(2) PHRA).'
    ],
    examFrequency: '⭐⭐⭐⭐⭐ High-Yield Statutory Body'
  },
  {
    id: 'cvc',
    name: 'Central Vigilance Commission (CVC)',
    hindiName: 'केंद्रीय सतर्कता आयोग',
    classification: 'Statutory',
    enactingStatute: 'Central Vigilance Commission Act, 2003 (originally set up by executive resolution in 1964 on Santhanam Committee report)',
    establishedYear: '1964 (statutory in 2003 via Vineet Narain)',
    composition: '1 Central Vigilance Commissioner (Chairperson) + not more than 2 Vigilance Commissioners.',
    appointingAuthority: 'President of India by warrant under his hand and seal',
    selectionCommittee: '3-MEMBER COMMITTEE: Prime Minister (Chairperson) + Union Minister of Home Affairs + Leader of the Opposition in Lok Sabha (or leader of single largest opposition group).',
    tenure: '4 YEARS or up to 65 YEARS OF AGE, whichever is earlier (Unique 4-year tenure!).',
    removalProcedure: 'Removed by the President on grounds of proved misbehaviour or incapacity ONLY after Supreme Court inquiry on reference by President.',
    removalGrounds: 'Proved misbehaviour or incapacity, insolvency, conviction, paid employment',
    postRetirementBar: 'STRICT BAR: On ceasing to hold office, the Central Vigilance Commissioner and Vigilance Commissioners are INELIGIBLE for further employment under Central or State Government.',
    reportSubmittedTo: 'President annually, who causes it to be laid before each House of Parliament.',
    keyFunctions: [
      'Apex integrity and anti-corruption oversight institution.',
      'Exercises superintendence over Delhi Special Police Establishment (CBI) in investigation of offences under Prevention of Corruption Act (PCA 1988).',
      'Inquires into complaints against Group A officers of Central Government and all-India services.'
    ],
    examinerTraps: [
      'TRAP 1: TENURE TRAP: CVC tenure is FOUR YEARS (4 years), NOT 5 or 6 years!',
      'TRAP 2: CVC is a STATUTORY body, not constitutional. Created on recommendations of the Santhanam Committee on Prevention of Corruption (1962–64).',
      'TRAP 3: CVC is NOT an investigating agency itself; it conducts inquiries through CBI or Chief Vigilance Officers (CVOs) of respective departments.'
    ],
    examFrequency: '⭐⭐⭐⭐⭐ High-Yield Statutory Body'
  },
  {
    id: 'lokpal',
    name: 'Lokpal and Lokayuktas',
    hindiName: 'लोकपाल एवं लोकायुक्त',
    classification: 'Statutory',
    enactingStatute: 'Lokpal and Lokayuktas Act, 2013',
    establishedYear: '2014 (First appointment in 2019)',
    composition: '1 Chairperson (former CJI or SC Judge or eminent jurist) + maximum 8 Members (50% judicial members + at least 50% from SC/ST/OBC/Minorities/Women).',
    appointingAuthority: 'President of India',
    selectionCommittee: '5-MEMBER SELECTION COMMITTEE: Prime Minister (Chairperson) + Speaker of Lok Sabha + Leader of Opposition in Lok Sabha + Chief Justice of India (or SC Judge nominated by CJI) + One Eminent Jurist nominated by President.',
    tenure: '5 years or up to 70 years of age, whichever is earlier',
    removalProcedure: 'Removed by the President on grounds of misbehaviour after an inquiry by the Supreme Court on a petition signed by at least 100 MPs.',
    removalGrounds: 'Misbehaviour or incapacity',
    postRetirementBar: 'Debarred from further employment under Government of India/States; cannot contest elections to Parliament/Assembly for 5 years.',
    reportSubmittedTo: 'President annually, laid before Parliament.',
    keyFunctions: [
      'Anti-corruption ombudsman covering Prime Minister (with specific national security exceptions), Union Ministers, MPs, and Groups A, B, C, D officers.',
      'Superintendence and direction over CBI for Lokpal-referred cases.',
      'Vested with powers of search, seizure, attachment of assets, and civil court powers.'
    ],
    examinerTraps: [
      'TRAP 1: Jurisdiction includes the PRIME MINISTER, but allegations relating to international relations, external/internal security, public order, atomic energy, and space are excluded from inquiry unless a full bench considers it and two-thirds approve.',
      'TRAP 2: Inquiry against the PM must be held in-camera, and if dismissed, records cannot be published.',
      'TRAP 3: Term is 5 years or 70 years of age.'
    ],
    examFrequency: '⭐⭐⭐⭐ High-Yield Anti-Corruption Body'
  },
  {
    id: 'cic',
    name: 'Central Information Commission (CIC)',
    hindiName: 'केंद्रीय सूचना आयोग',
    classification: 'Statutory',
    enactingStatute: 'Right to Information Act (RTI Act), 2005 (amended in 2019)',
    establishedYear: '2005',
    composition: '1 Chief Information Commissioner (CIC) + up to 10 Information Commissioners (ICs).',
    appointingAuthority: 'President of India',
    selectionCommittee: '3-MEMBER COMMITTEE: Prime Minister (Chairperson) + Leader of Opposition in Lok Sabha + Union Cabinet Minister nominated by PM.',
    tenure: 'TENURE AMENDMENT 2019: Prior to 2019, tenure was 5 years or 65 years. Under 2019 Amendment, tenure is AS PRESCRIBED BY CENTRAL GOVERNMENT (currently fixed at 3 YEARS or 65 years of age). Not eligible for reappointment.',
    removalProcedure: 'Removed by President after Supreme Court inquiry on reference made by President for proved misbehaviour or incapacity.',
    removalGrounds: 'Proved misbehaviour or incapacity, insolvency, conviction, paid employment',
    postRetirementBar: 'Ineligible for further employment under Central or State Government.',
    reportSubmittedTo: 'Central Government annually, which causes it to be laid before each House of Parliament.',
    keyFunctions: [
      'Entertains second appeals and complaints under RTI Act 2005 against Public Information Officers (CPIOs).',
      'Can impose penalties (Rs 250 per day up to Rs 25,000) on recalcitrant CPIOs.',
      'Vested with Civil Court powers.'
    ],
    examinerTraps: [
      'TRAP 1: Under the RTI Amendment Act 2019, the salaries, allowances, and tenure of CIC and ICs are NO LONGER equated with Election Commissioners; they are now completely DETERMINED BY THE CENTRAL GOVERNMENT by executive rules.',
      'TRAP 2: Central Information Commission is a STATUTORY body, not a constitutional body.'
    ],
    examFrequency: '⭐⭐⭐⭐ High-Yield Statutory Body'
  },
  {
    id: 'niti-aayog',
    name: 'NITI Aayog (National Institution for Transforming India)',
    hindiName: 'नीति आयोग',
    classification: 'Executive / Extra-Constitutional',
    establishedYear: '2015 (Replaced Planning Commission via Cabinet Resolution)',
    composition: 'Prime Minister (Chairperson) + Governing Council (all Chief Ministers & Lt. Governors) + Vice-Chairperson + Full-time Members + Ex-officio Union Ministers + CEO.',
    appointingAuthority: 'Prime Minister of India',
    selectionCommittee: 'Appointed directly by Prime Minister (Executive prerogative)',
    tenure: 'At the discretion of the Government / Prime Minister',
    removalProcedure: 'At the pleasure of the Prime Minister / Union Government',
    removalGrounds: 'Executive discretion',
    postRetirementBar: 'None',
    reportSubmittedTo: 'Think tank and advisory platform; submits policy documents to Union and State Governments.',
    keyFunctions: [
      'Apex policy think tank of the Government of India promoting cooperative and competitive federalism.',
      'Fosters bottom-up approach (unlike top-down Planning Commission).',
      'Does NOT allocate funds or financial grants (Planning Commission allocated plan funds; now done by Finance Ministry).'
    ],
    examinerTraps: [
      'TRAP 1: NITI Aayog is NEITHER a constitutional body NOR a statutory body! It is a non-statutory, extra-constitutional body created by an EXECUTIVE RESOLUTION of the Union Cabinet.',
      'TRAP 2: NITI Aayog does NOT possess fund allocation powers to States. Fund allocation is purely handled by the Finance Ministry and Finance Commission.'
    ],
    examFrequency: '⭐⭐⭐⭐ Classic Prelims Classification Question'
  }
];

export const getBodiesByClassification = (type: 'All' | BodyClassification) => {
  if (type === 'All') return CONSTITUTIONAL_BODIES_DATA;
  return CONSTITUTIONAL_BODIES_DATA.filter((b) => b.classification === type);
};
