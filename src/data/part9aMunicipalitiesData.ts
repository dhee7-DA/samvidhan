import type { ArticleItem } from '../types/constitution';

export const PART_9A_MUNICIPALITIES_EXPANDED: ArticleItem[] = [
  // PART IX-A: THE MUNICIPALITIES
  {
    number: '243Q',
    title: 'Constitution of Municipalities (Urban 3-Tier Structure)',
    summary: 'Mandates the constitution of three distinct types of urban local self-government institutions based on population and urbanization: (a) Nagar Panchayat for transitional areas; (b) Municipal Council for smaller urban areas; (c) Municipal Corporation for larger urban areas.',
    plainEnglish: 'Divides city governments into three categories depending on size: Nagar Panchayat for rural-to-urban transition towns, Municipal Council for mid-size towns, and Municipal Corporation for major cities.',
    textSnippet: 'There shall be constituted in every State—(a) a Nagar Panchayat for a transitional area... (b) a Municipal Council for a smaller urban area; and (c) a Municipal Corporation for a larger urban area.',
    realWorldScenario: 'A growing town exceeds 3 lakh residents and becomes heavily industrialized. The Governor issues a public notification under Article 243Q reclassifying the area from a Nagar Panchayat to a Municipal Council, altering its tax powers and administrative tier.',
    prosecutionNote: 'Municipal commissioners, town planners, and ward officers are "public servants" under Section 2(28) BNS; building bye-law violations, illegal land regularizations, and municipal tender corruption are prosecuted under the Prevention of Corruption Act.',
    clauses: [
      {
        clause: 'Three-Fold Urban Classification',
        explanation: 'Classification determined by the Governor considering population, density, non-agricultural employment percentage, and economic factors.',
        example: 'Notification of Municipal Corporations for mega-cities.'
      },
      {
        clause: 'Industrial Township Proviso (243Q(1))',
        explanation: 'No municipality is required in an urban area where municipal services are provided by an established industrial township authority.',
        example: 'Jamshedpur (Tata Steel) industrial township exemption.'
      }
    ],
    exceptions: ['Governor can exempt an industrial township from regular municipal elections where services are provided by an industrial body.'],
    landmarkCases: [
      {
        caseName: 'B.K. Pavitra v. Union of India',
        year: 2019,
        bench: '2-Judge Bench',
        summary: 'Analyzed the institutional nature of municipal corporations and local authorities as instruments of constitutional self-government under Part IX-A.',
        significance: 'Reinforced the constitutional mandate of urban local bodies.'
      }
    ],
    doctrineLinks: ['Urban Subsidiarity', 'Demographic Governance Classification']
  },
  {
    number: '243T',
    title: 'Reservation of Seats in Municipalities (Women 1/3rd Quota & SC/ST)',
    summary: 'Mandates seat reservations in Municipalities for Scheduled Castes and Scheduled Tribes in proportion to population, and enforces an ironclad constitutional guarantee that not less than one-third of all seats and chairperson offices must be reserved for women.',
    plainEnglish: 'Ensures women and marginalized communities hold power in city councils. At least 33% of all councillor seats and Mayor/Chairperson offices must be reserved for women.',
    textSnippet: 'Not less than one-third (including the number of seats reserved for women belonging to the Scheduled Castes and the Scheduled Tribes) of the total number of seats to be filled by direct election in every Municipality shall be reserved for women.',
    realWorldScenario: 'In a Municipal Corporation with 100 directly elected wards, 35 wards are reserved for women. If a state government attempts to notify an election reserving only 25 wards for women, the High Court will strike down the notification under Article 243T(3) for breaching the 33.33% constitutional floor.',
    prosecutionNote: 'Disputes regarding false caste and gender affidavits filed during municipal nominations are prosecuted as election fraud under BNS Sections 318 and 336.',
    clauses: [
      {
        clause: '243T(1) SC/ST Proportional Reservation',
        explanation: 'Seats reserved for SCs and STs based on urban territorial census proportion.',
        example: 'Direct demographic representation in city wards.'
      },
      {
        clause: '243T(3) Mandatory 1/3rd Women Reservation',
        explanation: 'Non-derogable constitutional floor: Not less than one-third of all directly elected municipal seats reserved for women.',
        example: 'Over 100,000 elected female urban corporators nationwide.'
      },
      {
        clause: '243T(4) Mayor / Chairperson Offices Reservation',
        explanation: 'Offices of Chairpersons/Mayors in Municipalities reserved for SCs, STs, and women by rotational notification.',
        example: 'Reservation of Mayor of Municipal Corporation post for women.'
      }
    ],
    exceptions: ['State legislatures may enact laws reserving seats or chairperson offices for Backward Classes (OBCs), subject to the Supreme Court\'s Triple Test.'],
    landmarkCases: [
      {
        caseName: 'K. Krishna Murthy v. Union of India',
        year: 2010,
        bench: '5-Judge Bench',
        summary: 'Constitution Bench upheld the constitutional validity of Articles 243D and 243T, holding that local body political reservations are distinct from service reservations under Article 16(4); established the "Triple Test" for OBC local quotas.',
        significance: 'Foundational authority governing municipal and panchayat reservation limits.'
      }
    ],
    doctrineLinks: ['Grassroots Urban Empowerment', 'Rotational Mayor Reservation']
  },
  {
    number: '243ZD',
    title: 'Committee for District Planning (DPC)',
    summary: 'Mandates the constitution in every State at the district level of a District Planning Committee (DPC) to consolidate the development plans prepared by Panchayats and Municipalities in the district and to prepare a draft development plan for the district as a whole.',
    plainEnglish: 'Bridges village and city planning. The District Planning Committee brings together elected village panchayat members and city municipal corporators to build a single coordinated plan for water, roads, electricity, and schools across the entire district.',
    textSnippet: 'There shall be constituted in every State at the district level a District Planning Committee to consolidate the plans prepared by the Panchayats and the Municipalities in the district and to prepare a draft development plan for the district as a whole.',
    realWorldScenario: 'A district administration faces rapid urban sprawl where city water projects threaten rural irrigation. The District Planning Committee convenes under Article 243ZD, where 4/5ths of the members are elected representatives from rural Panchayats and urban Municipalities, harmonizing environmental and infrastructure development.',
    prosecutionNote: 'Public funds allocated for district development projects must follow DPC approval; unauthorized diversion of DPC-approved schemes constitutes financial irregularities audited by the CAG.',
    clauses: [
      {
        clause: '243ZD(2)(a) 80% Elected Composition Rule',
        explanation: 'Not less than four-fifths (80%) of the members of the DPC must be elected by and from amongst the elected members of the district panchayat and municipalities.',
        example: 'Guarantees elected representative dominance over nominated bureaucrats.'
      },
      {
        clause: '243ZD(3) Integrated District Plan',
        explanation: 'Consolidates spatial planning, water and natural resources, infrastructure development, and environmental conservation.',
        example: 'Draft district master plans forwarded to the State Government.'
      }
    ],
    exceptions: ['Metropolitan areas with over 1 million population have a separate Metropolitan Planning Committee (MPC) under Article 243ZE.'],
    landmarkCases: [
      {
        caseName: 'State of Gujarat v. Utility Users Welfare Association',
        year: 2018,
        bench: '2-Judge Bench',
        summary: 'Affirmed the democratic character of local planning committees and statutory utility authorities, emphasizing institutional accountability to citizens.',
        significance: 'Highlighted the participatory planning principle under Article 243ZD.'
      }
    ],
    doctrineLinks: ['Integrated Spatial Planning', 'Democratic Resource Consolidation']
  }
];

// PART IX-B: THE CO-OPERATIVE SOCIETIES
export const PART_9B_COOPERATIVES_EXPANDED: ArticleItem[] = [
  {
    number: '243ZH',
    title: 'Co-operative Societies (97th Amendment & The 2021 Striking Down)',
    summary: 'Inserted by the 97th Constitutional Amendment Act 2011 to promote autonomous, democratic functioning of co-operative societies; partially struck down by the 3-Judge Bench of the Supreme Court in Union of India v. Rajendra N. Shah (2021) for lack of state ratification under Article 368(2), surviving exclusively for Multi-State Co-operative Societies (MSCS).',
    plainEnglish: 'The 97th Amendment attempted to set central rules for all cooperative societies across India (term of directors, audits, elections). In 2021, the Supreme Court struck down Part IX-B as it applies to state cooperative societies because the Central Government failed to get the approval of 50% of State Assemblies. Today, Part IX-B only applies to Multi-State Cooperative Societies that operate across more than one state.',
    textSnippet: 'The Legislature of a State may, by law, make provisions with respect to the incorporation, regulation and winding up of co-operative societies based on the principles of voluntary formation, democratic member-control, member-economic participation and autonomous functioning.',
    realWorldScenario: 'The Central Government issues regulatory directives to state cooperative credit societies operating purely within Maharashtra. The state cooperative banks challenge this. In Rajendra N. Shah (2021), the Supreme Court ruled that "cooperative societies" is an exclusive State List subject (Entry 32 List II); the Centre has zero authority to regulate single-state cooperatives under Part IX-B.',
    prosecutionNote: 'Prosecution for fraud, embezzlement, or money laundering in Multi-State Co-operative Societies (MSCS) proceeds under central investigative agencies (ED/CBI) and PMLA, whereas intra-state cooperative crimes are prosecuted under state cooperative societies acts and state police.',
    clauses: [
      {
        clause: 'Entry 32 List II Exclusive State Competence',
        explanation: 'Cooperative societies within a single state are exclusively within the legislative domain of the State Legislature.',
        example: 'State cooperative banking and dairy cooperative regulation.'
      },
      {
        clause: 'The Article 368(2) Federal Defect',
        explanation: 'Because the 97th Amendment curtailed the exclusive legislative power of States over Entry 32 List II without obtaining ratification by at least half the State Legislatures, it was unconstitutional regarding state cooperatives.',
        example: 'Supreme Court applying the federal ratification guardrail.'
      },
      {
        clause: 'Doctrine of Severability Application',
        explanation: 'The Supreme Court severed Part IX-B, upholding its validity strictly for Multi-State Co-operative Societies (MSCS) operating across multiple states (Entry 44 List I).',
        example: 'Regulation of multi-state cooperative financial giants like IFFCO, KRIBHCO.'
      }
    ],
    exceptions: ['Part IX-B remains 100% valid and operational for Multi-State Co-operative Societies under Union List Entry 44.'],
    landmarkCases: [
      {
        caseName: 'Union of India v. Rajendra N. Shah',
        year: 2021,
        bench: '3-Judge Bench (R.F. Nariman, B.R. Gavai, Hrishikesh Roy JJ - 2:1 on severability, unanimous on invalidity)',
        summary: 'Held: (1) The 97th Constitutional Amendment drastically impacted the exclusive legislative power of States under Entry 32 List II; (2) Failure to obtain ratification from half of the State Legislatures under the Article 368(2) proviso rendered Part IX-B unconstitutional as applied to State Cooperatives; (3) By applying the Doctrine of Severability, Part IX-B survives only for Multi-State Co-operative Societies.',
        significance: 'Historic verdict enforcing the Article 368(2) federal ratification proviso to protect state legislative competence.'
      }
    ],
    doctrineLinks: ['Doctrine of Severability', 'Article 368(2) Federal Ratification Guardrail', 'Exclusive State List Autonomy']
  }
];
