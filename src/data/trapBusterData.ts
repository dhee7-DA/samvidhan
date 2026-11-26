export interface TrapBusterQuestion {
  id: string;
  statement: string;
  isTrue: boolean;
  trapCategory: 'Governor vs President' | 'Parliamentary Majorities' | 'Emergency Powers' | 'Judiciary & Writs' | 'Amendments & Basic Structure' | 'Fundamental Rights';
  articleAnchor: string;
  examinerExplanation: string;
  landmarkCitation?: string;
  difficulty: 'Medium' | 'Hard' | 'Extreme';
}

export const TRAP_BUSTER_QUESTIONS: TrapBusterQuestion[] = [
  {
    id: 'tb-01',
    statement: 'The Governor of a State has the constitutional power under Article 161 to grant a full pardon for a death sentence.',
    isTrue: false,
    trapCategory: 'Governor vs President',
    articleAnchor: 'Articles 72 & 161',
    examinerExplanation: 'TRAP! The Governor can suspend, remit, or commute a sentence of death, but the power to grant a complete PARDON in all cases of death sentence belongs EXCLUSIVELY to the President under Article 72.',
    landmarkCitation: 'Maru Ram v. Union of India (1980)',
    difficulty: 'Medium'
  },
  {
    id: 'tb-02',
    statement: 'A Joint Sitting of both Houses under Article 108 can be summoned to resolve a deadlock on a Constitutional Amendment Bill.',
    isTrue: false,
    trapCategory: 'Amendments & Basic Structure',
    articleAnchor: 'Articles 108 & 368',
    examinerExplanation: 'TRAP! Article 368 mandates that each House must pass the Constitutional Amendment Bill separately by Special Majority. There is NO provision for a Joint Sitting for Constitutional Amendments or Money Bills.',
    difficulty: 'Medium'
  },
  {
    id: 'tb-03',
    statement: 'The creation or abolition of a State Legislative Council by Parliament under Article 169 requires an Article 368 Special Majority.',
    isTrue: false,
    trapCategory: 'Parliamentary Majorities',
    articleAnchor: 'Article 169(3)',
    examinerExplanation: 'TRAP! Article 169(3) explicitly declares that such a law by Parliament is NOT deemed to be an amendment under Article 368 and requires only a SIMPLE MAJORITY in Parliament (even though the State Assembly must first pass it by special majority).',
    difficulty: 'Hard'
  },
  {
    id: 'tb-04',
    statement: 'Articles 20 (Protection against Conviction) and 21 (Life & Liberty) can be suspended by Presidential Order during a National Emergency.',
    isTrue: false,
    trapCategory: 'Emergency Powers',
    articleAnchor: 'Article 359(1)',
    examinerExplanation: 'TRAP! Post-44th Constitutional Amendment (1978), the enforcement of Articles 20 and 21 can NEVER be suspended under Article 359, even during war or external aggression.',
    landmarkCitation: 'A.D.M. Jabalpur overruled by 44th Amendment & Puttaswamy (2017)',
    difficulty: 'Medium'
  },
  {
    id: 'tb-05',
    statement: 'The Supreme Court under Article 32 cannot refuse to entertain a Fundamental Right petition on the ground of an alternative efficacious remedy.',
    isTrue: true,
    trapCategory: 'Judiciary & Writs',
    articleAnchor: 'Article 32',
    examinerExplanation: 'CORRECT! Unlike Article 226 in High Courts where alternative remedy can be a discretionary bar, Article 32 is itself a Fundamental Right under Part III. The Supreme Court is the protector and guarantor of Fundamental Rights and cannot refuse relief solely on alternative remedy.',
    landmarkCitation: 'Romesh Thappar (1950) & Daryao v. State of U.P. (1961)',
    difficulty: 'Hard'
  },
  {
    id: 'tb-06',
    statement: 'Nominated members of Parliament can vote in the Impeachment of the President of India under Article 61.',
    isTrue: true,
    trapCategory: 'Parliamentary Majorities',
    articleAnchor: 'Articles 54 & 61',
    examinerExplanation: 'CORRECT & HIGH-YIELD TRAP! Nominated members of Parliament CANNOT vote in the Presidential Election (Art 54), but they CAN vote in the Presidential Impeachment (Art 61). Conversely, elected MLAs vote in election, but CANNOT vote in impeachment!',
    difficulty: 'Extreme'
  },
  {
    id: 'tb-07',
    statement: 'A bill dealing merely with the imposition or regulation of fines, pecuniary penalties, or local license fees is classified as a Money Bill.',
    isTrue: false,
    trapCategory: 'Parliamentary Majorities',
    articleAnchor: 'Articles 110(2) & 199(2)',
    examinerExplanation: 'TRAP! Both Article 110(2) and Article 199(2) explicitly state that a bill shall NOT be deemed to be a Money Bill by reason only that it provides for the imposition of fines, pecuniary penalties, or license fees.',
    difficulty: 'Medium'
  },
  {
    id: 'tb-08',
    statement: 'Financial Emergency under Article 360 has been declared twice in independent India (in 1962 and 1991).',
    isTrue: false,
    trapCategory: 'Emergency Powers',
    articleAnchor: 'Article 360',
    examinerExplanation: 'TRAP! A Financial Emergency under Article 360 has NEVER been declared in India since the adoption of the Constitution in 1950.',
    difficulty: 'Medium'
  },
  {
    id: 'tb-09',
    statement: 'Under Article 358, the six freedoms guaranteed by Article 19 are suspended automatically ONLY when a National Emergency is declared on grounds of war or external aggression.',
    isTrue: true,
    trapCategory: 'Emergency Powers',
    articleAnchor: 'Article 358(1)',
    examinerExplanation: 'CORRECT! Under the 44th Amendment, Article 19 is NOT automatically suspended if the emergency is declared on the ground of "armed rebellion". It suspends automatically ONLY for war or external aggression.',
    difficulty: 'Hard'
  },
  {
    id: 'tb-10',
    statement: 'The Speaker of the Lok Sabha continues in office even after the dissolution of the House until immediately before the first meeting of the new Lok Sabha.',
    isTrue: true,
    trapCategory: 'Parliamentary Majorities',
    articleAnchor: 'Article 94 Proviso 2',
    examinerExplanation: 'CORRECT! Proviso 2 to Article 94 mandates that whenever the House of the People is dissolved, the Speaker shall not vacate his office until immediately before the first meeting of the new House.',
    difficulty: 'Medium'
  },
  {
    id: 'tb-11',
    statement: 'Removal of the Vice-President of India under Article 67(b) requires a Special Majority in both Houses of Parliament.',
    isTrue: false,
    trapCategory: 'Parliamentary Majorities',
    articleAnchor: 'Article 67(b)',
    examinerExplanation: 'TRAP! Removal of the Vice-President requires an Effective Majority in the Rajya Sabha ("majority of all the then members"), but in the Lok Sabha, it requires ONLY a Simple Majority agreement!',
    difficulty: 'Hard'
  },
  {
    id: 'tb-12',
    statement: 'The Governor has constitutional authority to grant pardon for convictions by a Court Martial.',
    isTrue: false,
    trapCategory: 'Governor vs President',
    articleAnchor: 'Articles 72(1)(a) & 161',
    examinerExplanation: 'TRAP! Only the President under Article 72(1)(a) possesses the power to grant pardons in all cases where the punishment or sentence is by a Court Martial. The Governor has NO Court Martial clemency jurisdiction.',
    difficulty: 'Medium'
  },
  {
    id: 'tb-13',
    statement: 'A Judge of the Supreme Court can be removed from office by an order of the President passed under the Article 61 Presidential Impeachment procedure.',
    isTrue: false,
    trapCategory: 'Judiciary & Writs',
    articleAnchor: 'Articles 61 & 124(4)',
    examinerExplanation: 'TRAP! Article 61 applies EXCLUSIVELY to the President of India. Judges are removed under Article 124(4) by address presented to the President after Type 2 Special Majority (>50% Total + 2/3rd P&V) in each House.',
    difficulty: 'Hard'
  },
  {
    id: 'tb-14',
    statement: 'The writ of Mandamus can be issued against the President of India or the Governor of a State to compel the performance of their official duties.',
    isTrue: false,
    trapCategory: 'Judiciary & Writs',
    articleAnchor: 'Article 361(1)',
    examinerExplanation: 'TRAP! Under Article 361(1), the President and Governors enjoy absolute immunity from being answerable to any court for the exercise and performance of the powers and duties of their office. Mandamus CANNOT lie against them personally.',
    difficulty: 'Hard'
  },
  {
    id: 'tb-15',
    statement: 'The Right to Property under Article 300A is a Fundamental Right guaranteed under Part III of the Constitution.',
    isTrue: false,
    trapCategory: 'Fundamental Rights',
    articleAnchor: 'Article 300A',
    examinerExplanation: 'TRAP! The 44th Amendment (1978) deleted Article 31 and Article 19(1)(f) from Part III, inserting Article 300A in Part XII as a Constitutional/Legal Right, NOT a Fundamental Right.',
    landmarkCitation: 'K.T. Plantation (2011)',
    difficulty: 'Medium'
  },
  {
    id: 'tb-16',
    statement: 'A law altering the name or boundary of a State under Article 3 can be introduced in Parliament only on the recommendation of the President.',
    isTrue: true,
    trapCategory: 'Parliamentary Majorities',
    articleAnchor: 'Article 3 Proviso',
    examinerExplanation: 'CORRECT! Under Article 3 proviso, no Bill for this purpose shall be introduced in either House except on the recommendation of the President and after referring it to the affected State Legislature for views.',
    difficulty: 'Medium'
  },
  {
    id: 'tb-17',
    statement: 'The views expressed by a State Legislature on an Article 3 state reorganisation bill are binding on the President and Parliament.',
    isTrue: false,
    trapCategory: 'Parliamentary Majorities',
    articleAnchor: 'Article 3',
    examinerExplanation: 'TRAP! Parliament is not bound to accept or act upon the views of the State Legislature. Parliament can proceed to enact the reorganization even if the State Legislature rejects it.',
    landmarkCitation: 'Babulal Parate v. State of Bombay (1960)',
    difficulty: 'Medium'
  },
  {
    id: 'tb-18',
    statement: 'The total number of Ministers, including the Prime Minister, in the Union Council of Ministers cannot exceed 15% of the total number of members of the Lok Sabha.',
    isTrue: true,
    trapCategory: 'Parliamentary Majorities',
    articleAnchor: 'Article 75(1A)',
    examinerExplanation: 'CORRECT! Inserted by the 91st Constitutional Amendment Act (2003). It caps the Council of Ministers at 15% of Lok Sabha strength.',
    difficulty: 'Medium'
  },
  {
    id: 'tb-19',
    statement: 'In State Legislative Assemblies, the minimum size of the Council of Ministers, including the Chief Minister, is constitutionally fixed at 12 members.',
    isTrue: true,
    trapCategory: 'Parliamentary Majorities',
    articleAnchor: 'Article 164(1A) Proviso',
    examinerExplanation: 'CORRECT! While the maximum cap is 15% of the Assembly, the proviso to Article 164(1A) guarantees a constitutional FLOOR: the number of ministers in a State shall not be less than 12.',
    difficulty: 'Hard'
  },
  {
    id: 'tb-20',
    statement: 'Fundamental Duties enshrined in Article 51A are directly enforceable by judicial writs in High Courts and the Supreme Court.',
    isTrue: false,
    trapCategory: 'Fundamental Rights',
    articleAnchor: 'Part IVA & Article 51A',
    examinerExplanation: 'TRAP! Fundamental Duties are non-justiciable and cannot be enforced directly through mandamus or other prerogative writs, unless enacted into positive law by statute (e.g. Prevention of Insults to National Honour Act).',
    difficulty: 'Medium'
  },
  {
    id: 'tb-21',
    statement: 'Under Article 359, during a National Emergency, the President can suspend the right to move any court for enforcement of Articles 20 and 21.',
    isTrue: false,
    trapCategory: 'Emergency Powers',
    articleAnchor: 'Article 359(1) (44th Amendment)',
    examinerExplanation: 'TRAP! The 44th Constitutional Amendment Act, 1978 expressly barred the suspension of Articles 20 and 21 even during a National Emergency.',
    landmarkCitation: 'ADM Jabalpur (overruled in K.S. Puttaswamy, 2017)',
    difficulty: 'Medium'
  },
  {
    id: 'tb-22',
    statement: 'Article 19 freedoms are automatically suspended only when a National Emergency is proclaimed on the ground of War or External Aggression, NOT Armed Rebellion.',
    isTrue: true,
    trapCategory: 'Emergency Powers',
    articleAnchor: 'Article 358(1)',
    examinerExplanation: 'CORRECT! After the 44th Amendment, Article 358 automatic suspension of Article 19 applies ONLY to War or External Aggression, never Armed Rebellion.',
    difficulty: 'Hard'
  },
  {
    id: 'tb-23',
    statement: 'A Money Bill under Article 110 can be introduced in either the Lok Sabha or the Rajya Sabha, provided the Speaker certifies it.',
    isTrue: false,
    trapCategory: 'Parliamentary Majorities',
    articleAnchor: 'Article 109(1) & Article 117(1)',
    examinerExplanation: 'TRAP! A Money Bill can ONLY be introduced in the Lok Sabha and ONLY on the prior recommendation of the President.',
    difficulty: 'Medium'
  },
  {
    id: 'tb-24',
    statement: 'The President must summon Parliament so that more than 6 months do not intervene between its last sitting in one session and the date appointed for its first sitting in the next session.',
    isTrue: true,
    trapCategory: 'Parliamentary Majorities',
    articleAnchor: 'Article 85(1)',
    examinerExplanation: 'CORRECT! Article 85(1) mandates that the maximum gap between two Parliamentary sessions cannot exceed 6 months (meaning at least two sessions a year).',
    difficulty: 'Medium'
  },
  {
    id: 'tb-25',
    statement: 'The Governor of a State has the power under Article 213 to promulgate an Ordinance even when both Houses of the State Legislature are in session.',
    isTrue: false,
    trapCategory: 'Governor vs President',
    articleAnchor: 'Article 213(1)',
    examinerExplanation: 'TRAP! Ordinance-making power under Art 213 (like Art 123 for President) exists ONLY when the Legislative Assembly (or either House in a bicameral State) is NOT in session.',
    landmarkCitation: 'D.C. Wadhwa v. State of Bihar (1987)',
    difficulty: 'Medium'
  },
  {
    id: 'tb-26',
    statement: 'In State of Punjab v. Davinder Singh (2024), a 7-Judge Constitution Bench held that States cannot sub-classify Scheduled Castes under Article 16(4).',
    isTrue: false,
    trapCategory: 'Fundamental Rights',
    articleAnchor: 'Articles 16(4) & 341',
    examinerExplanation: 'TRAP! Davinder Singh (2024) OVERRULED E.V. Chinnaiah (2004) by 6:1 and held that States CAN sub-classify SCs based on quantifiable empirical data of inadequate representation.',
    landmarkCitation: 'State of Punjab v. Davinder Singh (2024)',
    difficulty: 'Hard'
  },
  {
    id: 'tb-27',
    statement: 'A Writ of Certiorari under Article 226 is maintainable against a judicial order passed by a Civil Court.',
    isTrue: false,
    trapCategory: 'Judiciary & Writs',
    articleAnchor: 'Articles 226 & 227',
    examinerExplanation: 'TRAP! In Radhey Shyam v. Chhabi Nath (2015), a 3-Judge Bench overruled Surya Dev Rai and held that judicial orders of Civil Courts are NOT amenable to Writ jurisdiction under Art 226; challenge lies only under Art 227 or statutory appeal/revision.',
    landmarkCitation: 'Radhey Shyam v. Chhabi Nath (2015)',
    difficulty: 'Extreme'
  },
  {
    id: 'tb-28',
    statement: 'Failure to supply written "grounds of arrest" to an arrestee under Article 22(1) vitiates the arrest and subsequent remand across all penal laws.',
    isTrue: true,
    trapCategory: 'Fundamental Rights',
    articleAnchor: 'Article 22(1)',
    examinerExplanation: 'CORRECT! In Prabir Purkayastha v. State (NCT of Delhi) (2024), the SC held that written factual "grounds of arrest" (distinct from generic "reasons for arrest") are mandatory under Art 22(1).',
    landmarkCitation: 'Prabir Purkayastha (2024)',
    difficulty: 'Hard'
  },
  {
    id: 'tb-29',
    statement: 'The President of India is bound by the aid and advice of the Union Council of Ministers, and may ask the Council to reconsider such advice only ONCE.',
    isTrue: true,
    trapCategory: 'Governor vs President',
    articleAnchor: 'Article 74(1) Proviso (44th Amendment)',
    examinerExplanation: 'CORRECT! The 42nd Amendment made advice binding; the 44th Amendment added the Proviso allowing the President to send advice back ONCE for reconsideration, after which he MUST act on the reconsidered advice.',
    difficulty: 'Medium'
  },
  {
    id: 'tb-30',
    statement: 'The Vice-President of India is elected by an electoral college consisting of elected members of both Houses of Parliament and elected members of State Legislative Assemblies.',
    isTrue: false,
    trapCategory: 'Parliamentary Majorities',
    articleAnchor: 'Article 66(1)',
    examinerExplanation: 'TRAP! Unlike the President (Art 54), the Vice-President is elected by ALL members (both elected AND nominated) of both Houses of Parliament ONLY — State Legislatures do NOT participate!',
    difficulty: 'Medium'
  },
  {
    id: 'tb-31',
    statement: 'A resolution to remove the Vice-President of India can be initiated only in the Rajya Sabha by an effective majority, and agreed to by the Lok Sabha by a simple majority.',
    isTrue: true,
    trapCategory: 'Parliamentary Majorities',
    articleAnchor: 'Article 67(b)',
    examinerExplanation: 'CORRECT! Under Article 67(b), removal originates ONLY in the Rajya Sabha (majority of all the then members — effective majority) after 14 days\' notice, and must be agreed to by the Lok Sabha.',
    difficulty: 'Hard'
  },
  {
    id: 'tb-32',
    statement: 'A law passed by Parliament under Article 3 to alter the boundaries or name of a State is deemed to be a Constitutional Amendment under Article 368.',
    isTrue: false,
    trapCategory: 'Amendments & Basic Structure',
    articleAnchor: 'Article 4(2)',
    examinerExplanation: 'TRAP! Article 4(2) expressly declares that laws made under Articles 2 or 3 are NOT to be deemed amendments under Article 368 and require only a Simple Majority.',
    landmarkCitation: 'In re Berubari Union (1960)',
    difficulty: 'Medium'
  },
  {
    id: 'tb-33',
    statement: 'Ceding Indian territory to a foreign country can be done by Parliament by a Simple Majority under Article 3.',
    isTrue: false,
    trapCategory: 'Amendments & Basic Structure',
    articleAnchor: 'Articles 3 & 368',
    examinerExplanation: 'TRAP! In In re Berubari Union (1960), the SC held that Article 3 covers only internal readjustment; ceding territory to a foreign State requires a Constitutional Amendment under Article 368 (though settling a boundary dispute does not — Ram Kishore Sen).',
    landmarkCitation: 'In re Berubari Union (1960)',
    difficulty: 'Hard'
  },
  {
    id: 'tb-34',
    statement: 'Under Article 32, the Supreme Court can issue writs ONLY for the enforcement of Fundamental Rights, whereas a High Court under Article 226 can issue writs for Fundamental Rights as well as "any other purpose".',
    isTrue: true,
    trapCategory: 'Judiciary & Writs',
    articleAnchor: 'Articles 32 & 226',
    examinerExplanation: 'CORRECT! Hence High Court writ jurisdiction under Art 226 is WIDER in subject-matter than Supreme Court jurisdiction under Art 32.',
    difficulty: 'Medium'
  },
  {
    id: 'tb-35',
    statement: 'Fundamental Rights under Articles 15, 16, 19, 29, and 30 are available to both Indian citizens and foreign nationals.',
    isTrue: false,
    trapCategory: 'Fundamental Rights',
    articleAnchor: 'Part III (Citizens-Only Rights)',
    examinerExplanation: 'TRAP! Articles 15, 16, 19, 29, and 30 are available ONLY to citizens of India. Foreigners enjoy Articles 14, 20, 21, 21A, 22, 23, 24, 25, 26, 27, and 28.',
    difficulty: 'Medium'
  },
  {
    id: 'tb-36',
    statement: 'Article 17 (Abolition of Untouchability) and Article 23 (Prohibition of Traffic in Human Beings & Forced Labour) are enforceable even against private individuals, not just the State.',
    isTrue: true,
    trapCategory: 'Fundamental Rights',
    articleAnchor: 'Articles 17 & 23',
    examinerExplanation: 'CORRECT! Unlike most Fundamental Rights which bind only the State (Art 12), Articles 15(2), 17, 23, and 24 operate horizontally against private persons too.',
    landmarkCitation: 'PUDR v. Union of India (Asiad Workers, 1982)',
    difficulty: 'Hard'
  },
  {
    id: 'tb-37',
    statement: 'The Speaker of the Lok Sabha continues in office even after the dissolution of the Lok Sabha until immediately before the first meeting of the new Lok Sabha.',
    isTrue: true,
    trapCategory: 'Parliamentary Majorities',
    articleAnchor: 'Article 94 Second Proviso',
    examinerExplanation: 'CORRECT! Whenever the Lok Sabha is dissolved, the Speaker does NOT vacate his office until immediately before the first meeting of the newly elected Lok Sabha.',
    difficulty: 'Medium'
  },
  {
    id: 'tb-38',
    statement: 'A person can be appointed as a Minister in the Union Council of Ministers without being a member of either House of Parliament, for a maximum period of 12 months.',
    isTrue: false,
    trapCategory: 'Parliamentary Majorities',
    articleAnchor: 'Article 75(5)',
    examinerExplanation: 'TRAP! The maximum period is 6 consecutive months, NOT 12 months! After 6 months without becoming an MP, the Minister ceases to hold office.',
    landmarkCitation: 'S.R. Chaudhuri v. State of Punjab (2001)',
    difficulty: 'Medium'
  },
  {
    id: 'tb-39',
    statement: 'The Attorney General of India has the right to speak and take part in the proceedings of both Houses of Parliament and to vote in Lok Sabha.',
    isTrue: false,
    trapCategory: 'Parliamentary Majorities',
    articleAnchor: 'Article 88',
    examinerExplanation: 'TRAP! Under Article 88, the Attorney General has the right to speak and participate in proceedings of both Houses and parliamentary committees, but does NOT have the right to vote.',
    difficulty: 'Medium'
  },
  {
    id: 'tb-40',
    statement: 'Under Article 129, the Supreme Court is a Court of Record and has the power to punish for contempt of itself.',
    isTrue: true,
    trapCategory: 'Judiciary & Writs',
    articleAnchor: 'Article 129',
    examinerExplanation: 'CORRECT! Article 129 makes the SC a Court of Record with inherent contempt power (Art 215 confers the corresponding power on High Courts).',
    difficulty: 'Medium'
  },
  {
    id: 'tb-41',
    statement: 'A Judge of a High Court retires at the age of 65 years, the same as a Supreme Court Judge.',
    isTrue: false,
    trapCategory: 'Judiciary & Writs',
    articleAnchor: 'Articles 124(2) & 217(1)',
    examinerExplanation: 'TRAP! High Court Judges retire at age 62 (raised from 60 by the 15th Amendment, 1963), whereas Supreme Court Judges retire at age 65.',
    difficulty: 'Medium'
  },
  {
    id: 'tb-42',
    statement: 'Under Article 217, the minimum age required for appointment as a Judge of a High Court is 35 years.',
    isTrue: false,
    trapCategory: 'Judiciary & Writs',
    articleAnchor: 'Article 217(2)',
    examinerExplanation: 'TRAP! The Constitution prescribes NO minimum age for Supreme Court or High Court Judges — only 10 years as an advocate/judicial officer (Art 217) or 5 years HC Judge / 10 years HC advocate / distinguished jurist (Art 124).',
    difficulty: 'Hard'
  },
  {
    id: 'tb-43',
    statement: 'In Property Owners Association v. State of Maharashtra (2024), a 9-Judge Bench held that every privately owned asset is automatically a "material resource of the community" under Article 39(b).',
    isTrue: false,
    trapCategory: 'Fundamental Rights',
    articleAnchor: 'Articles 39(b) & 31C',
    examinerExplanation: 'TRAP! An 8:1 majority of the 9-Judge Bench OVERRULED Justice Krishna Iyer\'s broad view in Ranganatha Reddy/Sanjeev Coke, holding that private property is not automatically a community resource under Art 39(b).',
    landmarkCitation: 'Property Owners Association (2024)',
    difficulty: 'Extreme'
  },
  {
    id: 'tb-44',
    statement: 'In MADA v. SAIL (2024, 9-Judge Bench), the Supreme Court held that royalty paid on minerals is a tax exclusively within Parliament\'s domain.',
    isTrue: false,
    trapCategory: 'Amendments & Basic Structure',
    articleAnchor: 'Seventh Schedule List II Entries 49 & 50',
    examinerExplanation: 'TRAP! Overruling India Cement (1990), the 9-Judge Bench held 8:1 that royalty is contractual consideration, NOT a tax, and States retain legislative power to tax mineral-bearing land.',
    landmarkCitation: 'MADA v. SAIL (2024)',
    difficulty: 'Extreme'
  },
  {
    id: 'tb-45',
    statement: 'Under Article 356, a proclamation of President\'s Rule must be approved by both Houses of Parliament within 1 month by Special Majority.',
    isTrue: false,
    trapCategory: 'Emergency Powers',
    articleAnchor: 'Article 356(3)',
    examinerExplanation: 'TRAP! That is the rule for National Emergency (Art 352: 1 month + Special Majority). President\'s Rule (Art 356) and Financial Emergency (Art 360) require approval within 2 MONTHS by SIMPLE Majority!',
    difficulty: 'Hard'
  },
  {
    id: 'tb-46',
    statement: 'Financial Emergency under Article 360, once approved by both Houses of Parliament, continues indefinitely until revoked by the President without needing periodic 6-month renewals.',
    isTrue: true,
    trapCategory: 'Emergency Powers',
    articleAnchor: 'Article 360(2)',
    examinerExplanation: 'CORRECT! Unlike Art 352 and Art 356 (which require renewal every 6 months), Financial Emergency under Art 360 has no maximum duration and needs no periodic parliamentary renewal once approved.',
    difficulty: 'Extreme'
  },
  {
    id: 'tb-47',
    statement: 'The President can proclaim a National Emergency under Article 352 only after receiving a written recommendation from the Prime Minister alone.',
    isTrue: false,
    trapCategory: 'Emergency Powers',
    articleAnchor: 'Article 352(3) (44th Amendment)',
    examinerExplanation: 'TRAP! The 44th Amendment inserted Article 352(3) requiring a WRITTEN recommendation from the UNION CABINET (the PM + Cabinet Ministers appointed under Art 75), NOT the PM alone (as happened in 1975).',
    difficulty: 'Medium'
  },
  {
    id: 'tb-48',
    statement: 'Under the Ninth Schedule, laws placed in it after April 24, 1973 (Kesavananda Bharati date) are completely immune from Basic Structure judicial review.',
    isTrue: false,
    trapCategory: 'Amendments & Basic Structure',
    articleAnchor: 'Article 31B & Ninth Schedule',
    examinerExplanation: 'TRAP! In I.R. Coelho v. State of Tamil Nadu (2007, 9-Judge Bench), the SC held that all laws inserted into the Ninth Schedule after 24 April 1973 are open to judicial review on the touchstone of the Basic Structure (especially Arts 14, 19, 21).',
    landmarkCitation: 'I.R. Coelho v. State of Tamil Nadu (2007)',
    difficulty: 'Hard'
  },
  {
    id: 'tb-49',
    statement: 'Parliament can amend the Preamble of the Constitution under Article 368, provided it does not destroy the Basic Structure.',
    isTrue: true,
    trapCategory: 'Amendments & Basic Structure',
    articleAnchor: 'Preamble & Article 368',
    examinerExplanation: 'CORRECT! Kesavananda Bharati (1973) overruled Berubari Union (1960) to hold that the Preamble is an integral part of the Constitution and can be amended under Art 368 subject to Basic Structure (done once by the 42nd Amendment, 1976).',
    landmarkCitation: 'Kesavananda Bharati (1973)',
    difficulty: 'Medium'
  },
  {
    id: 'tb-50',
    statement: 'Under Article 368(2), the President is constitutionally bound to give his assent to a Constitutional Amendment Bill passed by Parliament.',
    isTrue: true,
    trapCategory: 'Amendments & Basic Structure',
    articleAnchor: 'Article 368(2) (24th Amendment)',
    examinerExplanation: 'CORRECT! The 24th Constitutional Amendment Act, 1971 substituted "shall give his assent" in Art 368(2), stripping the President of any veto or return power over Constitutional Amendment Bills.',
    difficulty: 'Medium'
  },
  {
    id: 'tb-51',
    statement: 'A Constitutional Amendment Bill can be introduced in Parliament only by a Cabinet Minister, never by a Private Member.',
    isTrue: false,
    trapCategory: 'Amendments & Basic Structure',
    articleAnchor: 'Article 368(2)',
    examinerExplanation: 'TRAP! Any Member of Parliament (Minister OR Private Member) can introduce a Constitutional Amendment Bill in either House without prior permission of the President.',
    difficulty: 'Medium'
  },
  {
    id: 'tb-52',
    statement: 'Fundamental Rights in India are absolute and cannot be waived by a citizen even voluntarily.',
    isTrue: true,
    trapCategory: 'Fundamental Rights',
    articleAnchor: 'Article 13 & Part III',
    examinerExplanation: 'CORRECT! In Basheshar Nath v. CIT (1959) and Olga Tellis (1985), the Supreme Court settled the Doctrine of Non-Waiver: a citizen cannot waive Fundamental Rights, as they embody public constitutional policy.',
    landmarkCitation: 'Basheshar Nath v. CIT (1959)',
    difficulty: 'Hard'
  },
  {
    id: 'tb-53',
    statement: 'A private unaided minority educational institution is bound to reserve 25% of its Class I seats for EWS/Disadvantaged children under the RTE Act, 2009.',
    isTrue: false,
    trapCategory: 'Fundamental Rights',
    articleAnchor: 'Articles 21A & 30(1)',
    examinerExplanation: 'TRAP! In Pramati Educational & Cultural Trust (2014, 5-Judge Bench), the SC held the RTE Act 25% quota inapplicable to minority institutions (aided or unaided) to preserve Article 30(1) autonomy.',
    landmarkCitation: 'Pramati Educational Trust (2014)',
    difficulty: 'Hard'
  },
  {
    id: 'tb-54',
    statement: 'The Right to Vote in Parliamentary and Assembly elections in India is a Fundamental Right under Article 19(1)(a).',
    isTrue: false,
    trapCategory: 'Fundamental Rights',
    articleAnchor: 'Article 326',
    examinerExplanation: 'TRAP! While freedom of expression in voting (NOTA/candidate info under PUCL/ADR) touches Art 19(1)(a), the Right to Vote itself is a constitutional/statutory right under Article 326 & Representation of the People Act, 1951 (Kuldip Nayar, 2006; Anoop Baranwal, 2023).',
    landmarkCitation: 'Kuldip Nayar v. Union of India (2006)',
    difficulty: 'Hard'
  },
  {
    id: 'tb-55',
    statement: 'Under Article 143(2), if the President refers a dispute arising out of a pre-Constitution treaty or covenant to the Supreme Court, the Court is bound to tender its opinion.',
    isTrue: true,
    trapCategory: 'Judiciary & Writs',
    articleAnchor: 'Article 143(1) vs 143(2)',
    examinerExplanation: 'CORRECT! Under Art 143(1) ("may report"), the SC has discretion to decline; under Art 143(2) ("shall report"), it is constitutionally obligated to advise.',
    difficulty: 'Extreme'
  },
  {
    id: 'tb-56',
    statement: 'A Writ of Prohibition is issued after a lower tribunal has already passed its final order, whereas Certiorari is issued only while proceedings are pending.',
    isTrue: false,
    trapCategory: 'Judiciary & Writs',
    articleAnchor: 'Articles 32 & 226',
    examinerExplanation: 'TRAP! It is the exact opposite: Prohibition is preventive (issued while proceedings are pending to stop excess of jurisdiction); Certiorari is both preventive and curative (issued to quash an order already passed).',
    landmarkCitation: 'Hari Vishnu Kamath v. Ahmad Ishaque (1955)',
    difficulty: 'Medium'
  },
  {
    id: 'tb-57',
    statement: 'Writs of Certiorari and Prohibition can be issued against legislative bodies to quash an unconstitutional statute.',
    isTrue: false,
    trapCategory: 'Judiciary & Writs',
    articleAnchor: 'Articles 32 & 226',
    examinerExplanation: 'TRAP! Certiorari and Prohibition lie ONLY against judicial, quasi-judicial, and administrative bodies affecting rights — NOT against purely legislative bodies enacting statutes (statutes are struck down via declaratory relief/Art 13).',
    difficulty: 'Hard'
  },
  {
    id: 'tb-58',
    statement: 'Under Article 200, a Governor cannot exercise a "pocket veto" by withholding assent indefinitely without returning the Bill to the Assembly.',
    isTrue: true,
    trapCategory: 'Governor vs President',
    articleAnchor: 'Article 200',
    examinerExplanation: 'CORRECT! In State of Punjab v. Principal Secretary to the Governor (2023), the SC held that if a Governor withholds assent, he MUST as soon as possible return the Bill with a message under the first proviso.',
    landmarkCitation: 'State of Punjab v. Principal Secretary (2023)',
    difficulty: 'Hard'
  },
  {
    id: 'tb-59',
    statement: 'The Governor of a State is appointed by the President by warrant under his hand and seal and holds office for a fixed, irremovable tenure of 5 years.',
    isTrue: false,
    trapCategory: 'Governor vs President',
    articleAnchor: 'Article 156(1)',
    examinerExplanation: 'TRAP! Under Article 156(1), the Governor holds office "during the pleasure of the President". Though the normal term is 5 years (Art 156(3)), pleasure can be withdrawn earlier (subject to non-arbitrariness under B.P. Singhal, 2010).',
    landmarkCitation: 'B.P. Singhal v. Union of India (2010)',
    difficulty: 'Medium'
  },
  {
    id: 'tb-60',
    statement: 'The President of India can address and send messages to Parliament under Article 86, and the Governor has the corresponding power for State Legislatures under Article 175.',
    isTrue: true,
    trapCategory: 'Governor vs President',
    articleAnchor: 'Articles 86 & 175 (+89 Rule)',
    examinerExplanation: 'CORRECT! 86 + 89 = 175! Both constitutional heads have the right to address and send messages to their respective legislatures.',
    difficulty: 'Medium'
  },
  {
    id: 'tb-61',
    statement: 'Under Article 105(2) and Article 194(2), MPs and MLAs enjoy parliamentary immunity from bribery charges for taking money to vote or ask questions in the House.',
    isTrue: false,
    trapCategory: 'Parliamentary Majorities',
    articleAnchor: 'Articles 105(2) & 194(2)',
    examinerExplanation: 'TRAP! In Sita Soren v. Union of India (2024, 7-Judge Bench), the Supreme Court OVERRULED P.V. Narasimha Rao (1998) and held that bribery is NEVER protected by parliamentary privilege under Arts 105(2)/194(2).',
    landmarkCitation: 'Sita Soren v. Union of India (2024)',
    difficulty: 'Extreme'
  },
  {
    id: 'tb-62',
    statement: 'Under Article 311(1), a civil servant can be dismissed by an authority subordinate to the one that actually appointed him, if authorized by departmental rules.',
    isTrue: false,
    trapCategory: 'Governor vs President',
    articleAnchor: 'Article 311(1)',
    examinerExplanation: 'TRAP! Article 311(1) is an absolute constitutional bar: no civil servant shall be dismissed or removed by an authority SUBORDINATE to that by which he was appointed (though an inquiry can be conducted by a subordinate officer).',
    difficulty: 'Hard'
  },
  {
    id: 'tb-63',
    statement: 'The Comptroller and Auditor-General (CAG) under Article 148(4) is eligible for reappointment as CAG or appointment as Governor after retirement.',
    isTrue: false,
    trapCategory: 'Governor vs President',
    articleAnchor: 'Article 148(4)',
    examinerExplanation: 'TRAP! Article 148(4) bars the CAG from ANY further office either under the Government of India or under the Government of any State after ceasing to hold office.',
    difficulty: 'Hard'
  },
  {
    id: 'tb-64',
    statement: 'Under Article 324(5), Election Commissioners enjoy the exact same constitutional removal protection (impeachment like an SC Judge) as the Chief Election Commissioner.',
    isTrue: false,
    trapCategory: 'Parliamentary Majorities',
    articleAnchor: 'Article 324(5) Proviso',
    examinerExplanation: 'TRAP! Under the first proviso to Art 324(5), only the Chief Election Commissioner (CEC) is removed in like manner as an SC Judge; other Election Commissioners can be removed by the President on the recommendation of the CEC.',
    difficulty: 'Hard'
  },
  {
    id: 'tb-65',
    statement: 'Under Article 280, the Finance Commission is constituted by the President every five years (or earlier) and its recommendations are strictly binding on the Union Government.',
    isTrue: false,
    trapCategory: 'Governor vs President',
    articleAnchor: 'Articles 280 & 281',
    examinerExplanation: 'TRAP! Finance Commission recommendations are advisory/persuasive, NOT legally binding on the Government, though by convention they are generally accepted.',
    difficulty: 'Medium'
  },
  {
    id: 'tb-66',
    statement: 'No tax shall be levied or collected except by authority of law under Article 265, meaning a tax cannot be imposed by an executive notification alone without statutory backing.',
    isTrue: true,
    trapCategory: 'Parliamentary Majorities',
    articleAnchor: 'Article 265',
    examinerExplanation: 'CORRECT! Article 265 mandates enacted legislation ("authority of law") for both levy AND collection of any tax.',
    difficulty: 'Medium'
  },
  {
    id: 'tb-67',
    statement: 'Under Article 249, the Rajya Sabha can authorize Parliament to legislate on a State List subject in the national interest by a simple majority.',
    isTrue: false,
    trapCategory: 'Parliamentary Majorities',
    articleAnchor: 'Article 249(1)',
    examinerExplanation: 'TRAP! Article 249 requires a resolution passed by Rajya Sabha supported by NOT LESS THAN TWO-THIRDS of the members present and voting, and such resolution remains in force for up to 1 year at a time.',
    difficulty: 'Medium'
  },
  {
    id: 'tb-68',
    statement: 'Under Article 312, Parliament can create a new All-India Service (including an All-India Judicial Service) only if the Rajya Sabha passes a resolution by 2/3rds of members present and voting.',
    isTrue: true,
    trapCategory: 'Parliamentary Majorities',
    articleAnchor: 'Article 312(1)',
    examinerExplanation: 'CORRECT! Creating a new All-India Service is an exclusive federal privilege of the Rajya Sabha (requiring 2/3rds present and voting) before Parliament enacts the law.',
    difficulty: 'Medium'
  },
  {
    id: 'tb-69',
    statement: 'When a State Legislature is dissolved, any Bill pending in the Legislative Assembly lapses, even if it has been passed by the Assembly and is pending before the Legislative Council.',
    isTrue: true,
    trapCategory: 'Parliamentary Majorities',
    articleAnchor: 'Article 196(5)',
    examinerExplanation: 'CORRECT! Just like Article 107(5) for Lok Sabha, a Bill pending in the Assembly OR passed by the Assembly and pending in the Council lapses on dissolution of the Assembly (whereas a Bill originating in the Council and not yet passed by the Assembly does NOT lapse).',
    difficulty: 'Extreme'
  },
  {
    id: 'tb-70',
    statement: 'A Bill pending in the Lok Sabha does not lapse on prorogation of the House, but lapses on dissolution of the Lok Sabha.',
    isTrue: true,
    trapCategory: 'Parliamentary Majorities',
    articleAnchor: 'Article 107(3) & (5)',
    examinerExplanation: 'CORRECT! Prorogation (ending a session) never causes a pending Bill to lapse; dissolution of the Lok Sabha does.',
    difficulty: 'Medium'
  },
  {
    id: 'tb-71',
    statement: 'In Indra Sawhney v. Union of India (1992), the Supreme Court held that reservation in promotions for SCs and STs is constitutionally permissible under Article 16(4).',
    isTrue: false,
    trapCategory: 'Fundamental Rights',
    articleAnchor: 'Articles 16(4) & 16(4A)',
    examinerExplanation: 'TRAP! Indra Sawhney (1992) held that Art 16(4) applies ONLY to initial appointments, NOT promotions. Parliament then inserted Article 16(4A) via the 77th Amendment (1995) to restore reservation in promotions for SCs/STs.',
    landmarkCitation: 'Indra Sawhney (1992) & M. Nagaraj (2006)',
    difficulty: 'Hard'
  },
  {
    id: 'tb-72',
    statement: 'Under Article 15(6) and 16(6) (103rd Amendment, 2019), the 10% EWS reservation excludes SCs, STs, and OBCs who are already covered by existing vertical quotas.',
    isTrue: true,
    trapCategory: 'Fundamental Rights',
    articleAnchor: 'Articles 15(6) & 16(6)',
    examinerExplanation: 'CORRECT! In Janhit Abhiyan v. Union of India (2022, 3:2 majority), the SC upheld the 103rd Amendment, holding that excluding already-covered reserved categories from the EWS pool does not violate the Equality Code.',
    landmarkCitation: 'Janhit Abhiyan v. Union of India (2022)',
    difficulty: 'Hard'
  },
  {
    id: 'tb-73',
    statement: 'Under Article 20(3), compelling an accused to give blood samples, fingerprints, or voice exemplars violates the right against self-incrimination.',
    isTrue: false,
    trapCategory: 'Fundamental Rights',
    articleAnchor: 'Article 20(3)',
    examinerExplanation: 'TRAP! In Kathi Kalu Oghad (1961) and Ritesh Sinha (2019), the SC held physical specimens (fingerprints, handwriting, voice samples) are non-testimonial and valid; only narco-analysis/polygraph/brain-mapping (Selvi, 2010) or compelled device passwords violate Art 20(3).',
    landmarkCitation: 'State of Bombay v. Kathi Kalu Oghad (1961)',
    difficulty: 'Hard'
  },
  {
    id: 'tb-74',
    statement: 'Protection against Ex-Post Facto laws under Article 20(1) bars retrospective civil tax liabilities as well as retrospective criminal penalties.',
    isTrue: false,
    trapCategory: 'Fundamental Rights',
    articleAnchor: 'Article 20(1)',
    examinerExplanation: 'TRAP! Article 20(1) applies ONLY to criminal convictions and penalties. Civil laws and tax statutes CAN be enacted with retrospective effect.',
    difficulty: 'Medium'
  },
  {
    id: 'tb-75',
    statement: 'Under Article 22(2), every arrested person must be produced before the nearest Magistrate within 24 hours, including the time necessary for the journey from the place of arrest to the court.',
    isTrue: false,
    trapCategory: 'Fundamental Rights',
    articleAnchor: 'Article 22(2)',
    examinerExplanation: 'TRAP! Classic Bare Act wording trap: Article 22(2) says "within a period of twenty-four hours of such arrest EXCLUDING the time necessary for the journey from the place of arrest to the court of the magistrate".',
    difficulty: 'Hard'
  },
  {
    id: 'tb-76',
    statement: 'Safeguards under Article 22(1) and 22(2) (right to consult lawyer and 24-hour production) are NOT available to an enemy alien or a person detained under a preventive detention law.',
    isTrue: true,
    trapCategory: 'Fundamental Rights',
    articleAnchor: 'Article 22(3)',
    examinerExplanation: 'CORRECT! Article 22(3) expressly excludes enemy aliens and preventive detainees from clauses (1) and (2) (preventive detainees are governed by clauses (4)-(7)).',
    difficulty: 'Hard'
  },
  {
    id: 'tb-77',
    statement: 'Under Article 24, employment of any child below the age of 14 years is prohibited in any factory or mine or engaged in any other hazardous employment.',
    isTrue: true,
    trapCategory: 'Fundamental Rights',
    articleAnchor: 'Article 24',
    examinerExplanation: 'CORRECT! Article 24 sets the constitutional age floor at 14 years (aligning with Article 21A free & compulsory education from 6 to 14 years).',
    difficulty: 'Medium'
  },
  {
    id: 'tb-78',
    statement: 'Under Article 27, the State cannot spend public funds even for promoting all religions equally or maintaining historical religious monuments.',
    isTrue: false,
    trapCategory: 'Fundamental Rights',
    articleAnchor: 'Article 27',
    examinerExplanation: 'TRAP! Article 27 prohibits compelling any person to pay taxes whose proceeds are specifically appropriated for the promotion/maintenance of ANY PARTICULAR religion. Equal/secular support or collecting a "fee" (not tax) for pilgrim facilities is valid (Shirur Mutt).',
    difficulty: 'Hard'
  },
  {
    id: 'tb-79',
    statement: 'In Aligarh Muslim University v. Naresh Agarwal (2024, 7-Judge Bench), the SC held that an institution created by a Parliamentary statute can NEVER claim minority status under Article 30(1).',
    isTrue: false,
    trapCategory: 'Fundamental Rights',
    articleAnchor: 'Article 30(1)',
    examinerExplanation: 'TRAP! The 7-Judge Bench (4:3) OVERRULED Azeez Basha (1968), holding that statutory incorporation does NOT automatically strip an institution of minority status; courts must look at who founded/established it.',
    landmarkCitation: 'AMU v. Naresh Agarwal (2024)',
    difficulty: 'Extreme'
  },
  {
    id: 'tb-80',
    statement: 'The Right to Privacy was declared a Fundamental Right intrinsic to Article 21 by a 9-Judge Constitution Bench in K.S. Puttaswamy v. Union of India (2017).',
    isTrue: true,
    trapCategory: 'Fundamental Rights',
    articleAnchor: 'Article 21',
    examinerExplanation: 'CORRECT! Unanimously (9:0), Puttaswamy (2017) affirmed Privacy as a Fundamental Right under Art 21 and overruled M.P. Sharma (1954) and Kharak Singh (1962).',
    landmarkCitation: 'Justice K.S. Puttaswamy (Retd.) v. UOI (2017)',
    difficulty: 'Medium'
  },
  {
    id: 'tb-81',
    statement: 'Directive Principles of State Policy (Part IV) are non-justiciable in court, yet they are declared "fundamental in the governance of the country" under Article 37.',
    isTrue: true,
    trapCategory: 'Fundamental Rights',
    articleAnchor: 'Article 37',
    examinerExplanation: 'CORRECT! Article 37 balances non-enforceability with the State\'s affirmative constitutional duty to apply DPSPs in making laws.',
    difficulty: 'Medium'
  },
  {
    id: 'tb-82',
    statement: 'Free legal aid to the poor and equal justice under Article 39A was part of the original 1950 Constitution.',
    isTrue: false,
    trapCategory: 'Amendments & Basic Structure',
    articleAnchor: 'Article 39A (42nd Amendment)',
    examinerExplanation: 'TRAP! Article 39A (Equal justice & free legal aid), Article 43A (Workers\' participation in management), and Article 48A (Environment & forests) were all added by the 42nd Constitutional Amendment Act, 1976.',
    difficulty: 'Medium'
  },
  {
    id: 'tb-83',
    statement: 'The 11th Fundamental Duty under Article 51A(k) — requiring parents/guardians to provide opportunities for education to children aged 6–14 — was added by the 42nd Amendment Act, 1976.',
    isTrue: false,
    trapCategory: 'Amendments & Basic Structure',
    articleAnchor: 'Article 51A(k) (86th Amendment)',
    examinerExplanation: 'TRAP! The 42nd Amendment (1976) added the first 10 Fundamental Duties; the 11th duty (51A(k)) was added by the 86th Constitutional Amendment Act, 2002 alongside Article 21A.',
    difficulty: 'Medium'
  },
  {
    id: 'tb-84',
    statement: 'In case of a deadlock over an Ordinary Bill in a bicameral State Legislature (Assembly + Council), the Governor can summon a Joint Sitting of both Houses.',
    isTrue: false,
    trapCategory: 'Governor vs President',
    articleAnchor: 'Article 197 vs Article 108',
    examinerExplanation: 'TRAP! There is NO Joint Sitting in State Legislatures! Under Article 197, the Vidhan Sabha (Assembly) simply overrides the Vidhan Parishad (Council) by passing the Bill a second time (Council can delay at most 3 + 1 = 4 months).',
    difficulty: 'Hard'
  },
  {
    id: 'tb-85',
    statement: 'A Money Bill in a State Legislature can be delayed by the State Legislative Council for a maximum of 14 days, mirroring the Rajya Sabha.',
    isTrue: true,
    trapCategory: 'Parliamentary Majorities',
    articleAnchor: 'Article 198',
    examinerExplanation: 'CORRECT! Just like Rajya Sabha under Art 109, a State Legislative Council under Art 198 cannot amend or reject a Money Bill and can delay it for at most 14 days.',
    difficulty: 'Medium'
  },
  {
    id: 'tb-86',
    statement: 'The President of India can nominate 2 members from the Anglo-Indian community to the Lok Sabha under Article 331 today.',
    isTrue: false,
    trapCategory: 'Amendments & Basic Structure',
    articleAnchor: 'Articles 331 & 334 (104th Amendment)',
    examinerExplanation: 'TRAP! The 104th Constitutional Amendment Act, 2019 (effective January 25, 2020) did NOT extend Anglo-Indian nominations (Arts 331 & 333), allowing them to lapse.',
    difficulty: 'Medium'
  },
  {
    id: 'tb-87',
    statement: 'Under Article 142, the Supreme Court can pass any decree or order necessary for doing "complete justice", and in Shilpa Sailesh (2023) held it can directly dissolve marriages on irretrievable breakdown without waiting 6 months.',
    isTrue: true,
    trapCategory: 'Judiciary & Writs',
    articleAnchor: 'Article 142',
    examinerExplanation: 'CORRECT! A 5-Judge Constitution Bench in Shilpa Sailesh v. Varun Sreenivasan (2023) affirmed SC\'s Article 142 power to grant divorce on irretrievable breakdown.',
    landmarkCitation: 'Shilpa Sailesh v. Varun Sreenivasan (2023)',
    difficulty: 'Hard'
  },
  {
    id: 'tb-88',
    statement: 'Under Article 136 (Special Leave Petition), a litigant has a statutory right to appeal to the Supreme Court against any High Court judgment.',
    isTrue: false,
    trapCategory: 'Judiciary & Writs',
    articleAnchor: 'Article 136',
    examinerExplanation: 'TRAP! Article 136 confers a purely DISCRETIONARY extraordinary power on the Supreme Court to grant special leave — it is NOT a right of appeal.',
    difficulty: 'Medium'
  },
  {
    id: 'tb-89',
    statement: 'The Supreme Court has original and exclusive jurisdiction under Article 131 to entertain a suit filed by a private citizen against the Union of India.',
    isTrue: false,
    trapCategory: 'Judiciary & Writs',
    articleAnchor: 'Article 131',
    examinerExplanation: 'TRAP! Article 131 is strictly for federal disputes between Union and State(s) or between States — a private citizen CANNOT sue under Article 131.',
    difficulty: 'Medium'
  },
  {
    id: 'tb-90',
    statement: 'Under Article 243D, seats reserved for women in Panchayats must be not less than one-third (including SC/ST women seats).',
    isTrue: true,
    trapCategory: 'Parliamentary Majorities',
    articleAnchor: 'Article 243D(3)',
    examinerExplanation: 'CORRECT! Article 243D(3) sets a constitutional minimum floor of 1/3rd (States may increase it to 50% by State legislation).',
    difficulty: 'Medium'
  },
  {
    id: 'tb-91',
    statement: 'The Anti-Defection Law (Tenth Schedule) protects a split by one-third of the members of a legislature party from disqualification.',
    isTrue: false,
    trapCategory: 'Parliamentary Majorities',
    articleAnchor: 'Tenth Schedule Para 3 & 4 (91st Amendment)',
    examinerExplanation: 'TRAP! Paragraph 3 (1/3rd split protection) was DELETED by the 91st Constitutional Amendment Act, 2003. Only a merger by at least 2/3rds of the legislature party protects from disqualification.',
    difficulty: 'Medium'
  },
  {
    id: 'tb-92',
    statement: 'The decision of the Speaker/Chairman on disqualification under the Tenth Schedule is final and completely immune from judicial review.',
    isTrue: false,
    trapCategory: 'Judiciary & Writs',
    articleAnchor: 'Tenth Schedule Para 6',
    examinerExplanation: 'TRAP! In Kihoto Hollohan v. Zachillhu (1992), the SC struck down Para 7 and held that the Speaker acts as a statutory tribunal under Para 6, making the decision subject to judicial review under Arts 136, 226, and 227.',
    landmarkCitation: 'Kihoto Hollohan v. Zachillhu (1992)',
    difficulty: 'Hard'
  },
  {
    id: 'tb-93',
    statement: 'Under Article 123, an Ordinance promulgated by the President has the same force and effect as an Act of Parliament, but ceases to operate at the expiration of 6 weeks from the reassembly of Parliament unless approved earlier.',
    isTrue: true,
    trapCategory: 'Governor vs President',
    articleAnchor: 'Article 123(2)',
    examinerExplanation: 'CORRECT! An Ordinance lasts at most 6 months (max gap between sessions) + 6 weeks after reassembly = maximum theoretical life of ~7.5 months without parliamentary approval.',
    difficulty: 'Medium'
  },
  {
    id: 'tb-94',
    statement: 'Re-promulgation of an Ordinance repeatedly without placing it before the Legislature is constitutionally valid so long as the Governor is satisfied.',
    isTrue: false,
    trapCategory: 'Governor vs President',
    articleAnchor: 'Articles 123 & 213',
    examinerExplanation: 'TRAP! In Krishna Kumar Singh v. State of Bihar (2017, 7-Judge Bench), the SC held that re-promulgation of Ordinances without legislative scrutiny is a "fraud on the Constitution".',
    landmarkCitation: 'Krishna Kumar Singh v. State of Bihar (2017)',
    difficulty: 'Hard'
  },
  {
    id: 'tb-95',
    statement: 'Under Article 350A, every State and local authority must endeavour to provide adequate facilities for instruction in the mother-tongue at the primary stage of education to children belonging to linguistic minority groups.',
    isTrue: true,
    trapCategory: 'Fundamental Rights',
    articleAnchor: 'Article 350A (7th Amendment)',
    examinerExplanation: 'CORRECT! Inserted by the 7th Amendment (1956), Article 350A protects primary mother-tongue instruction for linguistic minorities.',
    difficulty: 'Hard'
  },
  {
    id: 'tb-96',
    statement: 'Under Article 279A, decisions of the GST Council are legally binding on Parliament and State Legislatures as a super-legislative body.',
    isTrue: false,
    trapCategory: 'Parliamentary Majorities',
    articleAnchor: 'Article 279A',
    examinerExplanation: 'TRAP! In Union of India v. Mohit Minerals (2022), the SC held that GST Council recommendations are persuasive/collaborative under cooperative federalism, NOT binding commands overriding Parliament or State Legislatures.',
    landmarkCitation: 'Union of India v. Mohit Minerals (2022)',
    difficulty: 'Extreme'
  },
  {
    id: 'tb-97',
    statement: 'Under Article 348(1), all proceedings in the Supreme Court and every High Court shall be in English until Parliament by law otherwise provides.',
    isTrue: true,
    trapCategory: 'Judiciary & Writs',
    articleAnchor: 'Article 348(1)',
    examinerExplanation: 'CORRECT! English remains the authoritative language of SC and HC proceedings unless Parliament legislates otherwise (though Art 348(2) permits Governor+President consent for Hindi/State language in HC oral proceedings).',
    difficulty: 'Medium'
  },
  {
    id: 'tb-98',
    statement: 'When the office of both the President and Vice-President falls vacant simultaneously, the Speaker of the Lok Sabha acts as President.',
    isTrue: false,
    trapCategory: 'Governor vs President',
    articleAnchor: 'Article 70 & President (Discharge of Functions) Act, 1969',
    examinerExplanation: 'TRAP! The Chief Justice of India (CJI) — and in his absence, the senior-most Judge of the Supreme Court — acts as President (as Justice M. Hidayatullah did in 1969).',
    difficulty: 'Medium'
  },
  {
    id: 'tb-99',
    statement: 'To impeach the President of India under Article 61, the resolution must be passed by a majority of not less than two-thirds of the TOTAL membership of each House.',
    isTrue: true,
    trapCategory: 'Parliamentary Majorities',
    articleAnchor: 'Article 61(2) & (4)',
    examinerExplanation: 'CORRECT! Article 61 is the toughest majority in the Constitution: 2/3rds of the TOTAL membership of the House (NOT merely present and voting), with BOTH elected and nominated MPs participating.',
    difficulty: 'Hard'
  },
  {
    id: 'tb-100',
    statement: 'Article 395 of the Constitution of India repealed both the Indian Independence Act, 1947 and the Government of India Act, 1935.',
    isTrue: true,
    trapCategory: 'Amendments & Basic Structure',
    articleAnchor: 'Article 395',
    examinerExplanation: 'CORRECT! Article 395 repealed the 1947 and 1935 Acts (saving only the Abolition of Privy Council Jurisdiction Act, 1949), establishing India\'s Constitution as wholly autochthonous.',
    difficulty: 'Medium'
  }
];
