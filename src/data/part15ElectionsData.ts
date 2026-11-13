import type { ArticleItem } from '../types/constitution';

export const PART_15_ELECTIONS_EXPANDED: ArticleItem[] = [
  {
    number: '324',
    title: 'Superintendence, Direction & Control of Elections in ECI',
    summary: 'Vests the plenary constitutional authority for the superintendence, direction, and control of all elections to Parliament, State Legislatures, and the offices of President and Vice-President in an independent Election Commission of India (ECI), providing high removal security for the Chief Election Commissioner (CEC).',
    plainEnglish: 'The Election Commission of India (ECI) is the supreme constitutional watchdog for national and state elections. When the election code of conduct is active, the ECI has the emergency power to issue binding rules to stop cheating, booth-capturing, and political misuse of state power. The Chief Election Commissioner cannot be sacked by the government and can only be removed by parliamentary impeachment like a Supreme Court judge.',
    textSnippet: 'The superintendence, direction and control of the preparation of the electoral rolls for, and the conduct of, all elections to Parliament and to the Legislature of every State and of elections to the offices of President and Vice-President... shall be vested in a Commission (referred to in this Constitution as the Election Commission).',
    realWorldScenario: 'During a heated general election, armed thugs capture booths in a constituency, but the statutory election rules do not explicitly cover re-polling for that specific scenario. Does the Election Commission have the power to cancel the poll and order a fresh election? YES! In Mohinder Singh Gill (1978), the Supreme Court ruled that Article 324 is a reservoir of plenary inherent power: where statutory law is silent, the ECI can take all necessary steps to guarantee free and fair elections.',
    prosecutionNote: 'Prosecutions for electoral offenses (bribery, voter intimidation, illegal election funding, personation) under Chapter XI of BNS (Sections 169–177) and the Representation of the People Act, 1951 are initiated and monitored under ECI directives.',
    clauses: [
      {
        clause: '324(1) Plenary Inherent Reservoir',
        explanation: 'Encompasses all executive, administrative, and regulatory powers needed to conduct free and fair democratic elections where statutes are silent.',
        example: 'Enforcement of the Model Code of Conduct (MCC).'
      },
      {
        clause: '324(2) Multi-Member Commission Structure',
        explanation: 'The Commission consists of the Chief Election Commissioner and such number of other Election Commissioners as the President may fix.',
        example: 'Three-member Commission (CEC and two ECs) operating by majority decision.'
      },
      {
        clause: '324(5) Supreme Court Judge Removal Shield',
        explanation: 'The Chief Election Commissioner cannot be removed from office except in like manner and on the like grounds as a Judge of the Supreme Court.',
        example: 'Impeachment requiring 2/3rd majority in both Houses of Parliament.'
      },
      {
        clause: '324(5) Proviso: Protection of Election Commissioners',
        explanation: 'Other Election Commissioners cannot be removed from office except on the recommendation of the Chief Election Commissioner.',
        example: 'Protects junior commissioners from unilateral executive sacking.'
      }
    ],
    exceptions: ['Local body elections (Panchayats and Municipalities) are NOT conducted by the ECI; they are conducted by independent State Election Commissions under Articles 243K and 243ZA.'],
    landmarkCases: [
      {
        caseName: 'Mohinder Singh Gill v. Chief Election Commissioner',
        year: 1978,
        bench: '5-Judge Bench',
        summary: 'Krishna Iyer J held that Article 324 is a plenary reservoir of power operating as an independent source of authority; when enacted laws are silent, the Commission can pass necessary orders to ensure free and fair elections.',
        significance: 'Established the broad inherent constitutional powers of the Election Commission.'
      },
      {
        caseName: 'T.N. Seshan, CEC of India v. Union of India',
        year: 1995,
        bench: '5-Judge Bench',
        summary: 'Ahmadi CJ held that the Election Commission is a multi-member body where the CEC and Election Commissioners are equal in decision-making power; decisions are taken by consensus or majority.',
        significance: 'Confirmed multi-member collegiality in the Election Commission.'
      },
      {
        caseName: 'Anoop Baranwal v. Union of India',
        year: 2023,
        bench: '5-Judge Constitution Bench',
        summary: 'Joseph J held that an independent election commission is essential for democracy; directed that CEC and ECs be appointed on the advice of a committee comprising the Prime Minister, Leader of Opposition, and Chief Justice of India until Parliament enacted a law.',
        significance: 'Historic verdict transforming the constitutional appointment framework for the ECI.'
      }
    ],
    doctrineLinks: ['Free and Fair Elections as Basic Structure', 'Plenary Reservoir of Electoral Power', 'Constitutional Watchdog Autonomy']
  },
  {
    number: '325',
    title: 'Single General Electoral Roll & Non-Discrimination',
    summary: 'Abolishes colonial separate electorates by mandating one single general electoral roll for every territorial constituency, prohibiting discrimination in voter registration on grounds only of religion, race, caste, or sex.',
    plainEnglish: 'Every citizen votes on the same common voter list regardless of religion, caste, or gender. The Constitution permanently banned the British colonial practice of separate communal electorates (which had divided Hindus and Muslims into separate voting lists).',
    textSnippet: 'There shall be one general electoral roll for every territorial constituency for election to either House of Parliament or to the House or either House of the Legislature of a State and no person shall be ineligible for inclusion in any such roll... on grounds only of religion, race, caste, sex or any of them.',
    realWorldScenario: 'A political group petitions the state government to create a separate voting list exclusively for a religious or linguistic community in an assembly constituency. Can the government do so? No! Article 325 strictly commands one general electoral roll for all voters, burying the colonial 1909 Morley-Minto communal divide.',
    prosecutionNote: 'Filing false declarations to get added to the electoral roll or deleting legitimate voters is an electoral crime under Section 31 of the Representation of the People Act, 1950.',
    clauses: [
      {
        clause: 'Single Common Electoral Roll',
        explanation: 'Universal, integrated voter list for every parliamentary and assembly constituency.',
        example: 'Every adult resident registered on the common territorial electoral roll.'
      },
      {
        clause: 'Ironclad Prohibition on Communal Electorates',
        explanation: 'No separate electoral rolls based on religion, race, caste, or sex.',
        example: 'Consolidates secular republican fraternity.'
      }
    ],
    exceptions: ['Reserved seats under Articles 330 and 332 (SC/ST representation) still use the same general electoral roll where all citizens vote together.'],
    landmarkCases: [
      {
        caseName: 'Nain Sukh Das v. State of U.P.',
        year: 1953,
        bench: 'Constitution Bench',
        summary: 'Sastri CJ held that communal electorates are contrary to the basic structure of the Constitution and violate Article 14 and 15, ordering the quashing of an election held on communal rolls.',
        significance: 'Struck down communal electorates in local governance.'
      }
    ],
    doctrineLinks: ['Secular Electoral Integration', 'Abolition of Communal Electorates']
  },
  {
    number: '326',
    title: 'Universal Adult Suffrage (The 61st Amendment Voting Right)',
    summary: 'Establishes Universal Adult Suffrage as the basis for elections to the Lok Sabha and State Legislative Assemblies: Every Indian citizen who is not less than eighteen years of age (lowered from 21 by the 61st Amendment 1988) and not disqualified on grounds of non-residence, unsoundness of mind, crime, or corrupt practice is entitled to be registered as a voter.',
    plainEnglish: 'Every Indian citizen who reaches the age of 18 has the constitutional right to be registered as a voter. No property tests, educational qualifications, or income barriers can deny you the right to vote.',
    textSnippet: 'The elections to the House of the People and to the Legislative Assembly of every State shall be on the basis of adult suffrage; that is to say, every person who is a citizen of India and who is not less than eighteen years of age... shall be entitled to be registered as a voter.',
    realWorldScenario: 'A law is proposed restricting the right to vote to citizens who own property or hold a college degree. Is such a law valid? No! Under Article 326, the right to vote is founded on universal adult suffrage, meaning every adult citizen has an equal vote regardless of wealth or educational background.',
    prosecutionNote: 'Conviction for serious criminal offenses (e.g., bribery, voter intimidation, corrupt practices) can lead to disqualification from voting under Section 11A of the Representation of the People Act, 1951, sanctioned by Article 326.',
    clauses: [
      {
        clause: 'Universal Adult Suffrage Rule',
        explanation: 'Democratized power across India: one person, one vote, one value.',
        example: 'Mass democratic franchise across 970 million registered voters.'
      },
      {
        clause: '61st Constitutional Amendment Act 1988',
        explanation: 'Lowered the voting age from 21 years to 18 years, empowering youth participation.',
        example: 'Enfranchisement of 18-year-old first-time voters.'
      },
      {
        clause: 'Exhaustive Disqualification Grounds',
        explanation: 'Can only be disqualified by an Act of Parliament on grounds of: (1) Non-residence, (2) Unsoundness of mind, (3) Crime, or (4) Corrupt or illegal practice.',
        example: 'Disqualification of convicted persons under Representation of the People Act 1951.'
      }
    ],
    exceptions: ['The right to vote is a constitutional statutory right, not an absolute fundamental right under Part III (Anukul Chandra Pradhan).'],
    landmarkCases: [
      {
        caseName: 'People\'s Union for Civil Liberties (PUCL) v. Union of India (NOTA Case)',
        year: 2013,
        bench: '3-Judge Bench',
        summary: 'Sathasivam CJ held that the right to vote under Article 326 includes the right not to vote for any candidate; directed the Election Commission to provide a "None of the Above" (NOTA) button on EVMs.',
        significance: 'Recognized negative voting as a vital element of the right to vote.'
      },
      {
        caseName: 'Anukul Chandra Pradhan v. Union of India',
        year: 1997,
        bench: '3-Judge Bench',
        summary: 'Upheld Section 62(5) of the RPA 1951, which bars persons confined in prison from voting, holding that the right to vote under Article 326 is subject to statutory restrictions.',
        significance: 'Confirmed that the right to vote is subject to statutory criminal disqualifications.'
      }
    ],
    doctrineLinks: ['Universal Adult Franchise', 'Right to Negative Vote (NOTA)', 'One Person, One Vote']
  },
  {
    number: '329',
    title: 'Bar to Court Interference in Electoral Matters & Election Petitions',
    summary: 'Imposes an absolute constitutional bar on courts questioning the validity of delimitation laws or seat allotments, and commands that no election to Parliament or State Legislature shall be called in question except by an Election Petition presented to the High Court in accordance with the Representation of the People Act, 1951.',
    plainEnglish: 'Once an election is underway, no court can stay or halt the polling process. If a candidate or voter believes there was cheating or illegal votes, they cannot file a normal lawsuit; they must wait until the results are declared and file a formal Election Petition in the High Court.',
    textSnippet: 'Notwithstanding anything in this Constitution... the validity of any law relating to the delimitation of constituencies... shall not be called in question in any court; no election to either House of Parliament or to the House or either House of the Legislature of a State shall be called in question except by an election petition.',
    realWorldScenario: 'During a parliamentary election, an opposition candidate’s nomination is rejected by the Returning Officer. The candidate rushes to the High Court filing a writ petition under Article 226 asking to halt the election. The High Court refuses: Under the landmark ruling in N.P. Ponnuswami (1952), Article 329(b) bars courts from interrupting an election; the candidate must challenge the outcome via an Election Petition after the results are announced.',
    prosecutionNote: 'A core concept for prosecuting officers: Criminal prosecution for corrupt practices (e.g., booth capturing, bribing voters under BNS) can proceed in criminal court immediately, but unseating the elected candidate or declaring the election void can ONLY be done by the High Court in an Election Petition under Article 329(b).',
    clauses: [
      {
        clause: '329(a) Delimitation Non-Justiciability',
        explanation: 'Delimitation Commission orders once published have the force of law and cannot be questioned in any court.',
        example: 'Meghraj Kothari rule protecting delimitation boundaries.'
      },
      {
        clause: '329(b) Post-Poll Election Petition Channel',
        explanation: 'Elections can only be challenged post-declaration of results through an Election Petition before the High Court under Section 80A of the Representation of the People Act, 1951.',
        example: 'High Court trying election petitions with original jurisdiction.'
      }
    ],
    exceptions: ['The bar applies to judicial interruption of the election process; once an Election Petition is decided by the High Court, an appeal lies directly to the Supreme Court under Section 116A of the RPA 1951.'],
    landmarkCases: [
      {
        caseName: 'N.P. Ponnuswami v. Returning Officer, Namakkal',
        year: 1952,
        bench: '6-Judge Bench',
        summary: 'Fazal Ali J laid down the foundational rule: The word "election" in Article 329(b) embraces the entire continuous process from notification to declaration of results; courts cannot use writ jurisdiction under Art 226 to interdict an ongoing election.',
        significance: 'The classic authority establishing non-intervention in ongoing elections.'
      },
      {
        caseName: 'Indira Nehru Gandhi v. Raj Narain',
        year: 1975,
        bench: 'Constitution Bench',
        summary: 'The historic election appeal where Raj Narain’s election petition unseated Prime Minister Indira Gandhi for corrupt electoral practices; struck down Article 329A (inserted by 39th Amendment) which had attempted to place the Prime Minister’s election beyond judicial review.',
        significance: 'Confirmed that judicial resolution of election disputes is part of the Basic Structure.'
      }
    ],
    doctrineLinks: ['Ponnuswami Non-Intervention Rule', 'Exclusive High Court Election Jurisdiction', 'Delimitation Finality']
  }
];
