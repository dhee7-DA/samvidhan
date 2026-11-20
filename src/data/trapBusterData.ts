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
  }
];
