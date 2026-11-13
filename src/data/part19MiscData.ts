import type { ArticleItem } from '../types/constitution';

export const PART_19_MISC_EXPANDED: ArticleItem[] = [
  {
    number: '361',
    title: 'Protection of President and Governors (Constitutional Immunities & Boundaries)',
    summary: 'Confers extraordinary personal immunities upon the President and State Governors: (1) Non-answerability to any court for the exercise of official powers, without restricting the right of any person to sue the Government of India or State Government under Article 300; (2) Absolute bar on criminal proceedings or continuation during term of office; (3) Absolute bar on arrest or imprisonment warrants; (4) Two months advance written notice required before instituting civil proceedings for personal acts.',
    plainEnglish: 'The President and Governors cannot be dragged into court, sued, arrested, or criminally prosecuted while holding constitutional office for their official actions. However, this is a personal shield for the individual holder, not a shield for the actions themselves: citizens can still challenge governmental orders and decisions in court by suing the Union or State Government under Article 300.',
    textSnippet: 'The President, or the Governor of a State, shall not be answerable to any court for the exercise and performance of the powers and duties of his office or for any act done or purporting to be done by him in the exercise and performance of those powers and duties.',
    realWorldScenario: 'A State Governor dissolves a State Legislative Assembly on allegations of horse-trading. Aggrieved political parties challenge the dissolution in the High Court and attempt to implead the Governor personally as Respondent No. 1. The High Court strikes off the Governor\'s name under Article 361(1) immunity, but proceeds to adjudicate the legality of the State Government\'s proclamation under Article 226/300 on grounds of mala fides.',
    prosecutionNote: 'A criminal court or police station cannot register an FIR, issue summons, or execute a warrant of arrest against a sitting Governor or President under BNSS/BNS. If a dignitary is suspected of a criminal offense prior to or during tenure, formal prosecution or trial can only commence after they demit office, at which moment full criminal liability revives.',
    clauses: [
      {
        clause: 'Article 361(1): Non-Answerability to Courts',
        explanation: 'President and Governors are not answerable to any court for performance of duties; however, ministerial advice and executive orders issued in their name remain fully amenable to judicial review.',
        example: 'Rameshwar Prasad (2006) ruling on assembly dissolution review.'
      },
      {
        clause: 'Article 361(2) & (3): Absolute Criminal Immunity',
        explanation: 'No criminal proceedings whatsoever can be instituted or continued, and no process for arrest or imprisonment can be issued by any court against them during their term.',
        example: 'Bar on framing charges or issuing warrants against sitting dignitaries.'
      },
      {
        clause: 'Article 361(4): Guarded Civil Actions',
        explanation: 'Civil proceedings in respect of acts done in personal capacity (before or after taking office) can only be instituted after delivering two months written notice stating cause of action and relief claimed.',
        example: 'Notice requirement for personal property partition or contract disputes.'
      }
    ],
    exceptions: [
      'Conduct of the President may be brought under review by any court or tribunal designated by Parliament for investigating impeachment charges under Article 61.',
      'Immunity does not prejudice the right of any individual to bring legal proceedings against the Government of India or the State Government under Article 300.'
    ],
    landmarkCases: [
      {
        caseName: 'Rameshwar Prasad v. Union of India',
        year: 2006,
        bench: '5-Judge Bench (Y.K. Sabharwal CJI, B.N. Agrawal, Ashok Bhan JJ)',
        summary: 'Held that while Article 361 grants complete personal immunity to the Governor from answering to any court, it does not bar the court from examining the constitutionality, vires, or mala fides of the actions taken by the Governor or government.',
        significance: 'Established the clear dichotomy between personal gubernatorial immunity and judicial review of official executive action.'
      },
      {
        caseName: 'B.P. Singhal v. Union of India',
        year: 2010,
        bench: '5-Judge Bench (K.G. Balakrishnan CJI, S.H. Kapadia, R.V. Raveendran JJ)',
        summary: 'Held that the President\'s power to withdraw pleasure under Article 156(1) to remove a Governor is subject to judicial review against arbitrary, capricious, or partisan grounds, even though the Governor enjoys personal immunity under Article 361.',
        significance: 'Limited arbitrary removal of governors, entrenching constitutional morality in gubernatorial appointments.'
      }
    ],
    doctrineLinks: ['Personal Immunity vs Action Reviewability', 'Article 300 State Liability', 'Constitutional Dignitary Shield']
  },
  {
    number: '361A',
    title: 'Protection of Publication of Proceedings of Parliament and State Legislatures',
    summary: 'Inserted by the 44th Constitutional Amendment Act 1978: Grants constitutional civil and criminal immunity to persons and press organizations publishing substantially true reports of proceedings of either House of Parliament or a State Legislative Assembly, unless the publication is proved to have been made with malice, excluding secret sittings.',
    plainEnglish: 'Protects journalists, newspapers, and media houses from defamation suits or criminal prosecution when they faithfully and accurately report speeches, debates, and statements made on the floor of Parliament or State Assemblies, provided the report is honest and not published out of personal malice.',
    textSnippet: 'No person shall be liable to any proceedings, civil or criminal, in any court in respect of the publication in a newspaper of a substantially true report of any proceedings of either House of Parliament or the Legislative Assembly, or, as the case may be, either House of the Legislature, of a State, unless the publication is proved to have been made with malice.',
    realWorldScenario: 'A Member of Parliament levels sharp corruption allegations during a parliamentary zero-hour debate against a prominent corporate tycoon. A national newspaper publishes an accurate transcript of the speech. The tycoon files a criminal defamation complaint under Section 356 BNS against the newspaper editor. The High Court quashes the complaint under Article 361A, as the report was a substantially true account of parliamentary proceedings published without malice.',
    prosecutionNote: 'In criminal defamation proceedings under Section 356 BNS (formerly Section 499/500 IPC), Article 361A operates as a constitutional bar at the threshold. A magistrate taking cognizance must examine whether the publication represents an unedited or faithful reporting of legislative proceedings; if malice cannot be prima facie demonstrated on affidavit, process cannot be issued against the journalist.',
    clauses: [
      {
        clause: 'Article 361A(1): Substantially True Reporting Protection',
        explanation: 'Immunizes journalists and publishers from civil lawsuits and criminal prosecutions for reporting legislative debates.',
        example: 'Daily reporting of Lok Sabha Question Hour inquiries.'
      },
      {
        clause: 'The Malice Proviso',
        explanation: 'The constitutional protection evaporates if the complainant proves that the publisher acted with actual malice or collateral corrupt motives.',
        example: 'Selective quotation intended deliberately to distort meaning and ruin reputation.'
      },
      {
        clause: 'Secret Sittings Carve-Out (361A(2))',
        explanation: 'Protection does not extend to the publication of any report of proceedings conducted in a secret sitting of the House.',
        example: 'Confidential national defense sessions.'
      }
    ],
    exceptions: [
      'Publications proved to have been made with malice are stripped of constitutional protection.',
      'Does not apply to secret sittings of Parliament or State Legislatures.',
      'Does not protect publications of statements expunged by the Speaker or Chairman.'
    ],
    landmarkCases: [
      {
        caseName: 'Searchlight Case (MSM Sharma v. Sri Krishna Sinha)',
        year: 1959,
        bench: '5-Judge Bench',
        summary: 'Prior to the 44th Amendment, held that legislative privileges under Article 194 prevailed over press freedom under Article 19(1)(a). The 44th Amendment enacted Article 361A to restore statutory protection originally introduced by the Feroze Gandhi Act 1956.',
        significance: 'Historic catalyst that led to the constitutional entrenchment of press legislative reporting rights in Article 361A.'
      }
    ],
    doctrineLinks: ['Press Freedom & Legislative Transparency', 'Feroze Gandhi Doctrine', 'Public Right to Legislative Information']
  },
  {
    number: '365',
    title: 'Sanction for Failure to Comply with Union Executive Directions (The Federal Enforcement Muscle)',
    summary: 'Provides the constitutional enforcement sanction for federal administrative compliance: Where any State has failed to comply with, or to give effect to, any valid executive directions given by the Union under Articles 256 or 257, the President is legally entitled to hold that a situation has arisen in which the government of the State cannot be carried on in accordance with the provisions of this Constitution, unlocking Article 356 President\'s Rule.',
    plainEnglish: 'If the Central Government gives a lawful direction to a State Government (such as protecting railway tracks or maintaining national highways) and the State deliberately defies or refuses to carry it out, Article 365 allows the President to declare that constitutional machinery has broken down in that State, enabling the imposition of President\'s Rule under Article 356.',
    textSnippet: 'Where any State has failed to comply with, or to give effect to, any directions given in the exercise of the executive power of the Union under any of the provisions of this Constitution, it shall be lawful for the President to hold that a situation has arisen in which the government of the State cannot be carried on in accordance with the provisions of this Constitution.',
    realWorldScenario: 'The Union Ministry of Home Affairs issues an executive directive under Article 257(2) instructing a coastal State to deploy state armed police to secure a critical national defense port against sabotage. The State Government openly refuses to deploy forces, citing local political disagreement. The Union invokes Article 365, deeming the non-compliance a breakdown of constitutional machinery, paving the way for a proclamation under Article 356.',
    prosecutionNote: 'Public officers or administrators who willfully obstruct central law enforcement or fail to comply with Union statutory directions during an invoked federal emergency can face departmental disciplinary dismissal under Article 311(2)(c) as national security threats, alongside criminal prosecution for public servant disobedience.',
    clauses: [
      {
        clause: 'Conditional Precedent: Valid Union Direction',
        explanation: 'Article 365 cannot be triggered in a vacuum; it requires an antecedent, constitutionally valid direction issued by the Union under provisions such as Articles 256, 257, or 353.',
        example: 'Directives to maintain communications declared of national importance.'
      },
      {
        clause: 'Deemed Breakdown of Constitutional Machinery',
        explanation: 'Willful failure creates a legal fiction allowing the President to conclude that constitutional governance has collapsed.',
        example: 'Connecting administrative refusal directly to Article 356 proclamation.'
      }
    ],
    exceptions: [
      'The Union direction itself must be constitutionally authorized and intra vires; ultra vires directions cannot trigger Article 365.',
      'Subject to strict judicial review under the S.R. Bommai (1994) standards for relevance of material and bona fides.'
    ],
    landmarkCases: [
      {
        caseName: 'S.R. Bommai v. Union of India',
        year: 1994,
        bench: '9-Judge Bench',
        summary: 'Analyzed the scope of Article 365 in conjunction with Article 356, ruling that invoking Article 365 requires clear objective proof of persistent, willful refusal to comply with constitutional directions, not mere minor administrative divergence.',
        significance: 'Erected judicial safeguards against using Article 365 as an arbitrary political weapon against opposition-ruled States.'
      }
    ],
    doctrineLinks: ['Coercive Federal Sanction', 'Constitutional Machinery Breakdown', 'Unitary Emergency Pivot']
  },
  {
    number: '367',
    title: 'Interpretation (Constitutional Hermeneutics & The Article 370 Verdict)',
    summary: 'Establishes the interpretive canon of the Constitution: (1) Unless the context otherwise requires, the General Clauses Act, 1897 applies for the interpretation of this Constitution; (2) References to Acts of Parliament or State Legislatures include references to Ordinances; (3) Foreign State declarations by the President. Extensively interpreted by the 5-Judge Constitution Bench in In re Article 370 (2023) regarding the impermissibility of using interpretation clauses to effect substantive amendments.',
    plainEnglish: 'Tells judges and lawyers how words in the Constitution should be read: by applying the standard rules of the General Clauses Act, 1897. In the historic 2023 Article 370 verdict, the Supreme Court ruled that Article 367 can only be used to interpret existing meanings, and cannot be used as a backdoor trick to substantively amend constitutional provisions.',
    textSnippet: 'Unless the context otherwise requires, the General Clauses Act, 1897, shall, subject to any adaptations and modifications that may be made therein under article 372, apply for the interpretation of this Constitution as it applies for the interpretation of an Act of the Legislature of the Dominion of India.',
    realWorldScenario: 'During the August 2019 reorganization of Jammu and Kashmir, Presidential Order C.O. 272 added clause (4) to Article 367, declaring that the words "Constituent Assembly of the State" in Article 370(3) must be read as "Legislative Assembly of the State". The Supreme Court in 2023 held this use of Article 367 ultra vires: an interpretive article cannot be used to indirectly rewrite an organic constitutional term.',
    prosecutionNote: 'In criminal appellate advocacy before the High Court or Supreme Court, Article 367 is frequently cited to import Section 6 of the General Clauses Act (effect of repeal on pending investigations and prosecutions), ensuring that trials instituted under repealed penal statutes (like IPC or CrPC) remain fully protected unless specifically overridden.',
    clauses: [
      {
        clause: 'Application of General Clauses Act, 1897',
        explanation: 'Constitutional terms borrow general definitions (e.g. calculation of time, gender, plural/singular, effect of repeal) from the statutory General Clauses Act.',
        example: 'Interpreting statutory timelines and succession of authority.'
      },
      {
        clause: 'Ordinance Equivalence (367(2))',
        explanation: 'Any reference to an Act of Parliament or State Legislature is construed as including an Ordinance promulgated by the President or Governor.',
        example: 'Treating Presidential Ordinances as Acts for constitutional compliance.'
      },
      {
        clause: 'Limits on Amending via Interpretation',
        explanation: 'Article 367 is an interpretive aid, not an independent constituent power. It cannot be deployed to alter the character or substantive identity of constitutional bodies.',
        example: 'In re Article 370 (2023) holding on C.O. 272.'
      }
    ],
    exceptions: ['General Clauses Act applies only "unless the context otherwise requires"; contextual constitutional intent always overrides statutory definitions.'],
    landmarkCases: [
      {
        caseName: 'In re Article 370 of the Constitution',
        year: 2023,
        bench: '5-Judge Bench (Unanimous, CJI D.Y. Chandrachud, S.K. Kaul, Sanjiv Khanna, B.R. Gavai, Surya Kant JJ)',
        summary: 'Held: (1) The amendment of Article 367 by C.O. 272 seeking to replace "Constituent Assembly" with "Legislative Assembly" in Article 370(3) was ultra vires and invalid; (2) An interpretation clause cannot be used to bypass the constituent amendment process under Article 368 or alter substantive provisions; (3) However, the abrogation of Article 370 was independently valid under the President\'s plenary power under Article 370(3).',
        significance: 'Historic ruling setting permanent constitutional boundaries on the permissible scope of interpretation clauses under Article 367.'
      }
    ],
    doctrineLinks: ['Constitutional Hermeneutics', 'General Clauses Canon', 'Substantive Amendment vs Interpretation Boundary']
  }
];
