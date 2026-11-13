import type { ArticleItem } from '../types/constitution';

export const PART_13_TRADE_EXPANDED: ArticleItem[] = [
  {
    number: '301',
    title: 'Freedom of Trade, Commerce & Intercourse Throughout India',
    summary: 'Guarantees that trade, commerce, and intercourse throughout the territory of India shall be free, dismantling provincial tariff walls and economic barriers to forge an integrated national common market, modeled on Section 92 of the Australian Constitution.',
    plainEnglish: 'Businesses and goods can move and trade freely across all state borders throughout India without being stopped by unfair regional taxes, toll blockades, or local protectionist laws.',
    textSnippet: 'Subject to the other provisions of this Part, trade, commerce and intercourse throughout the territory of India shall be free.',
    realWorldScenario: 'A state government imposes a steep entry levy on cement arriving from outside the state, while exempting cement produced by local state factories. The outside cement manufacturers challenge the tax. Under Article 301 read with Article 304(a), this protectionist tax is unconstitutional because it discriminates against interstate trade and destroys the economic unity of India.',
    prosecutionNote: 'Checkpost seizures and regulatory inspections under state commercial tax or GST statutes must not become physical blockades that stifle legitimate transit; illegal extortion at border checkposts is prosecuted under BNS and the Prevention of Corruption Act.',
    clauses: [
      {
        clause: 'National Economic Unity Mandate',
        explanation: 'Covers both inter-state trade (across state lines) and intra-state trade (within a state), protecting movement of goods and commercial communication.',
        example: 'Unrestricted movement of trucks carrying industrial goods across national highways.'
      },
      {
        clause: '"Intercourse" Free Movement Scope',
        explanation: 'Encompasses non-commercial transit, personal travel, and digital communication across state lines.',
        example: 'Freedom of movement of citizens and commercial transportation.'
      }
    ],
    exceptions: ['Subject to Articles 302, 303, 304, and 305; purely illegal activities (gambling, lottery, trafficking in contraband liquor or narcotics) are res extra commercium and do not enjoy Article 301 protection (State of Bombay v. R.M.D.C.).'],
    landmarkCases: [
      {
        caseName: 'Atiabari Tea Co. v. State of Assam',
        year: 1961,
        bench: '5-Judge Bench',
        summary: 'Gajendragadkar J held that taxes which directly and immediately restrict the free flow of trade violate Article 301; struck down the Assam Taxation (on Goods Carried by Road or on Inland Waterways) Act for lack of Presidential sanction.',
        significance: 'First major ruling establishing that fiscal levies can violate Article 301.'
      },
      {
        caseName: 'Automobile Transport (Rajasthan) Ltd. v. State of Rajasthan',
        year: 1962,
        bench: '7-Judge Bench',
        summary: 'S.K. Das J formulated the "Compensatory Tax" doctrine: Regulatory and compensatory taxes (such as motor vehicle road taxes used to maintain highways) do not impede trade and are valid without Presidential sanction.',
        significance: 'Governed interstate tax disputes for 55 years until overruled in 2017.'
      },
      {
        caseName: 'Jindal Stainless Ltd. v. State of Haryana',
        year: 2017,
        bench: '9-Judge Constitution Bench (T.S. Thakur CJI, 7:2 Majority)',
        summary: 'Historic landmark judgment: (1) Overruled the judicially invented "Compensatory Tax" doctrine from Automobile Transport; (2) Held that taxes are not per se restrictions on trade under Article 301; (3) A tax statute violates Article 301 ONLY if it discriminates between goods imported from other states and goods produced locally within the state (breaching Article 304(a)); (4) Upheld state entry tax laws as constitutional.',
        significance: 'Settled a 6-decade constitutional battle, restoring state fiscal autonomy while preserving the common national market.'
      }
    ],
    doctrineLinks: ['National Economic Integration', 'Compensatory Tax Overruling', 'Doctrine of Res Extra Commercium']
  },
  {
    number: '304',
    title: 'State Power to Regulate & Tax Interstate Trade (Non-Discrimination & Sanction)',
    summary: 'Delineates state legislative competence regarding interstate trade: Clause (a) permits non-discriminatory taxation on imported goods on par with local goods; Clause (b) allows reasonable public-interest restrictions, provided the bill was introduced with the previous sanction of the President.',
    plainEnglish: 'A State can tax goods coming from other states, but ONLY if it taxes locally produced goods at the exact same rate (no discrimination). A State can also impose reasonable restrictions in the public interest, but must get prior approval from the President before introducing the bill.',
    textSnippet: 'Notwithstanding anything in article 301 or article 303, the Legislature of a State may by law—(a) impose on goods imported from other States... any tax to which similar goods manufactured or produced in that State are subject... (b) impose such reasonable restrictions... Provided that no Bill or amendment for the purposes of clause (b) shall be introduced... without the previous sanction of the President.',
    realWorldScenario: 'During an agricultural disease outbreak, a state legislature introduces a bill prohibiting the transport of livestock from neighboring states without previous sanction of the President. The bill is passed. Opponents challenge it under Article 301. The law is saved if it subsequently received Presidential Assent under Article 255, curing the lack of prior sanction.',
    prosecutionNote: 'Prosecuting illegal transit of banned or restricted commodities (e.g., toxic wastes, smuggled timber) relies on valid state regulatory enactments complying with Article 304(b).',
    clauses: [
      {
        clause: '304(a) The Non-Discrimination Tax Rule',
        explanation: 'States may tax outside goods, but cannot place a higher tax burden on imported goods than on local goods. In Jindal Stainless (2017), the 9-Judge Bench ruled that non-discriminatory taxation never violates Article 301.',
        example: 'Uniform VAT or local state excise duty applied equally to domestic and outside products.'
      },
      {
        clause: '304(b) Public Interest Reasonable Restrictions',
        explanation: 'Enables state regulations protecting public health, safety, morality, or consumer protection.',
        example: 'Mandatory quality inspection certifications on imported food items.'
      },
      {
        clause: '304(b) Proviso & Article 255 Cure',
        explanation: 'Requires prior Presidential sanction before introduction; however, under Article 255, if the Act subsequently receives the assent of the President, the lack of prior sanction is cured.',
        example: 'Procedural validation of state commercial statutes.'
      }
    ],
    exceptions: ['Article 304 cannot be used by a State to create economic embargoes or ring-fence local producers from out-of-state competition.'],
    landmarkCases: [
      {
        caseName: 'Firm A.T.B. Mehtab Majid & Co. v. State of Madras',
        year: 1963,
        bench: 'Constitution Bench',
        summary: 'Held that a state sales tax rule that taxed tanned hides imported from outside the state while exempting hides tanned within the state was discriminatory and unconstitutional under Article 304(a).',
        significance: 'Classic authority striking down discriminatory state tariffs.'
      },
      {
        caseName: 'Kalyani Stores v. State of Orissa',
        year: 1966,
        bench: '5-Judge Bench',
        summary: 'Ruled that a state cannot impose countervailing duty under Article 304(a) on foreign liquor imported into the state if no such liquor is manufactured within that state.',
        significance: 'Enforced the requirement of a local counterpart before taxing imports under Art 304(a).'
      }
    ],
    doctrineLinks: ['Non-Discriminatory Tax Parity', 'Presidential Sanction Cure (Art 255)']
  }
];
