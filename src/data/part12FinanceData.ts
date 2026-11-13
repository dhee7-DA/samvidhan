import type { ArticleItem } from '../types/constitution';

export const PART_12_FINANCE_EXPANDED: ArticleItem[] = [
  // CHAPTER I: FINANCE
  {
    number: '265',
    title: 'Taxes Not to be Imposed Save by Authority of Law',
    summary: 'Foundational principle of fiscal democracy and rule of law: No tax shall be levied or collected except by authority of a validly enacted, constitutional statute.',
    plainEnglish: 'The government cannot charge any tax, fee, or cess through a mere executive order or notification unless a specific law passed by Parliament or the State Legislature authorizes it.',
    textSnippet: 'No tax shall be levied or collected except by authority of law.',
    realWorldScenario: 'A municipal corporation or police department issues an administrative circular imposing a "traffic modernization surcharge" on all vehicle registrations without any enabling legislative Act. Is the surcharge valid? No! Under Article 265, any taxation requires explicit legislative enactment; executive fiat cannot levy taxes.',
    prosecutionNote: 'Prosecutions for tax evasion (Income Tax, GST, Customs) fail at the threshold if the charging section or assessment lacks clear statutory authorization under Article 265.',
    clauses: [
      {
        clause: 'Mandatory Legislative Enactment',
        explanation: '"Law" means a valid statute passed by a competent legislature, not an executive notification, circular, or departmental order.',
        example: 'Finance Acts passed annually by Parliament.'
      },
      {
        clause: 'Levy and Collection Safeguard',
        explanation: 'Both the imposition (levy) and the actual extraction (collection) must conform strictly to statutory procedure.',
        example: 'Procedural time-limits for issuing tax recovery notices under statutory codes.'
      }
    ],
    exceptions: ['Article 265 applies to taxes and compulsory exactions; it does not apply to voluntary commercial prices charged by public corporations.'],
    landmarkCases: [
      {
        caseName: 'K.T. Moopil Nair v. State of Kerala',
        year: 1961,
        bench: '5-Judge Bench',
        summary: 'Sinha CJ held that a tax statute must not only be within the legislative competence of the legislature under Art 246, but must also satisfy Article 14 equality; a flat land tax with no regard to soil productivity was struck down as confiscatory.',
        significance: 'Established that tax laws are subject to Part III Fundamental Rights scrutiny.'
      },
      {
        caseName: 'Bimolangshu Roy v. State of Assam',
        year: 2018,
        bench: '2-Judge Bench',
        summary: 'Affirmed that the expression "authority of law" under Article 265 means a law made by a legislature having constitutional competence, and struck down an Act creating Parliamentary Secretaries with public allowances.',
        significance: 'Reinforced strict legislative competence requirements under Art 265.'
      }
    ],
    doctrineLinks: ['Rule of Law in Taxation', 'Fiscal Legality', 'Non-Arbitrary Assessment']
  },
  {
    number: '266',
    title: 'Consolidated Funds and Public Accounts of India and of the States',
    summary: 'Creates the supreme constitutional treasury: All revenues received, loans raised, and loan repayments flow into the Consolidated Fund, and cannot be withdrawn except pursuant to an Appropriation Act passed by the Legislature.',
    plainEnglish: 'All tax revenues and government earnings go into a central bank account called the Consolidated Fund. The government cannot spend a single rupee from this fund without getting Parliament to pass an Appropriation Bill.',
    textSnippet: 'All revenues received by the Government of India, all loans raised... shall form one consolidated fund to be entitled the Consolidated Fund of India.',
    realWorldScenario: 'Can the Prime Minister or Finance Minister withdraw funds directly from the national treasury to launch an unapproved welfare scheme? No! Under Article 266(3), no money can be appropriated out of the Consolidated Fund except in accordance with law and for purposes provided in the Constitution.',
    prosecutionNote: 'Unauthorized diversion or expenditure of public funds without legislative appropriation forms the basis of financial irregularities prosecuted under the Prevention of Corruption Act.',
    clauses: [
      {
        clause: '266(1) Consolidated Fund Composition',
        explanation: 'Universal pool of all tax revenues, non-tax revenues, market borrowings, and loan recoveries.',
        example: 'Direct and indirect taxes collected by the Union Government.'
      },
      {
        clause: '266(2) Public Account',
        explanation: 'Holds money received by or on behalf of the government where the government acts as a banker or trustee (provident funds, judicial deposits, small savings).',
        example: 'Public Provident Fund (PPF) deposits and court deposits.'
      },
      {
        clause: '266(3) Parliamentary Appropriation Shield',
        explanation: 'Ironclad safeguard: Not a penny can be drawn without an Appropriation Act passed under Article 114 (Union) or Article 204 (State).',
        example: 'Annual General Budget Appropriation Act.'
      }
    ],
    exceptions: ['Contingency Fund advances under Article 267 can be temporarily drawn pending subsequent parliamentary ratification.'],
    landmarkCases: [
      {
        caseName: 'State of U.P. v. Raj Narain',
        year: 1975,
        bench: 'Constitution Bench',
        summary: 'Examined public accountability in expenditure and confirmed that every citizen is entitled to know how public revenues held in constitutional funds are utilized.',
        significance: 'Foundational authority on transparency in public financial management.'
      }
    ],
    doctrineLinks: ['Democratic Accountability over Public Purse', 'Legislative Control of Finance']
  },
  {
    number: '267',
    title: 'The Contingency Fund',
    summary: 'Authorizes the creation of an imprest fund placed at the disposal of the President or Governor to enable advances to be made for meeting unforeseen emergency expenditures pending Parliamentary authorization.',
    plainEnglish: 'A constitutional emergency reserve fund placed in the hands of the President or Governor to spend immediate money during sudden disasters, wars, or crises before Parliament can meet to approve funds.',
    textSnippet: 'Parliament may by law establish a Contingency Fund in the nature of an imprest... to be placed at the disposal of the President to enable advances to be made by him out of such Fund for the purposes of meeting unforeseen expenditure.',
    realWorldScenario: 'A devastating earthquake or cloudburst occurs while Parliament is prorogued. The Union Government needs immediate disaster relief funds. The President draws an advance from the Contingency Fund of India under Article 267(1), which is recouped once Parliament reconvenes and passes a supplementary appropriation.',
    prosecutionNote: 'Emergency procurement made via Contingency Fund advances must still comply with statutory anti-corruption standards and subsequent audit by the CAG under Article 149.',
    clauses: [
      {
        clause: '267(1) Contingency Fund of India',
        explanation: 'Imprest fund managed by the Union Finance Secretary on behalf of the President.',
        example: 'Immediate central relief releases during natural disasters.'
      },
      {
        clause: '267(2) State Contingency Fund',
        explanation: 'Imprest fund placed at the disposal of the Governor for unexpected state emergencies.',
        example: 'State emergency drought or epidemic mitigation.'
      }
    ],
    exceptions: ['Advances must be recouped by subsequent legislative authorization through supplementary demands under Art 115 or 205.'],
    landmarkCases: [
      {
        caseName: 'Bhim Singh v. Union of India',
        year: 2010,
        bench: '5-Judge Bench',
        summary: 'Upheld the constitutional validity of the MPLADS scheme, examining the strict boundaries between Article 266 Consolidated Fund appropriations and Article 267 Contingency Fund advances.',
        significance: 'Affirmed strict procedural requirements for parliamentary financial schemes.'
      }
    ],
    doctrineLinks: ['Imprest Mechanism', 'Emergency Executive Financing']
  },
  {
    number: '279A',
    title: 'The Goods and Services Tax (GST) Council',
    summary: 'Inserted by the 101st Constitutional Amendment Act 2016, establishing a joint constitutional forum of the Union and the States to make recommendations on GST rates, exemptions, thresholds, and dispute mechanisms under cooperative federalism.',
    plainEnglish: 'The federal engine that decides all GST tax rates. It brings together the Central Finance Minister (holding 1/3 voting weight) and all State Finance Ministers (holding 2/3 voting weight). Decisions require a 3/4 supermajority.',
    textSnippet: 'The President shall... constitute a Council called the Goods and Services Tax Council... to make recommendations to the Union and the States on taxes, cesses, and surcharges.',
    realWorldScenario: 'Can the Central Government unilaterally double the GST rate on medical supplies without consulting the States? No! Under Article 279A, GST policy and tax brackets must be deliberated and recommended by the GST Council through cooperative federal voting.',
    prosecutionNote: 'GST criminal prosecutions (e.g., fake input tax credit invoices under Section 132 CGST Act) rest on statutory notifications recommended by the GST Council under Article 279A.',
    clauses: [
      {
        clause: '279A(1)-(4) Composition and Mandate',
        explanation: 'Chaired by Union Finance Minister; members include Union MoS Finance and Finance Ministers of all States.',
        example: 'Determining uniform GST slab structures across goods and services.'
      },
      {
        clause: '279A(9) Weighted Voting Formula',
        explanation: 'Central Government vote carries one-third weight (33.33%); all State Governments together carry two-thirds weight (66.67%). Approval requires a 75% (3/4) majority.',
        example: 'Ensures neither the Centre alone nor a small coalition of States can bulldoze tax changes.'
      }
    ],
    exceptions: ['In Union of India v. Mohit Minerals (2022), the Supreme Court ruled that GST Council recommendations are persuasive and advisory, not unalterably binding commands destroying legislative sovereignty.'],
    landmarkCases: [
      {
        caseName: 'Union of India v. Mohit Minerals Pvt Ltd',
        year: 2022,
        bench: '3-Judge Bench',
        summary: 'Chandrachud J held that the recommendations of the GST Council are not binding on Parliament and State Legislatures; the Indian Constitution envisions "uncooperative and cooperative federalism", preserving concurrent legislative power under Art 246A.',
        significance: 'Historic verdict clarifying that GST Council decisions are collaborative recommendations, maintaining state legislative sovereignty.'
      }
    ],
    doctrineLinks: ['Cooperative Federalism', 'Fiscal Federalism', 'Weighted Voting Sovereignty']
  },
  {
    number: '280',
    title: 'The Finance Commission',
    summary: 'A quasi-judicial constitutional body appointed by the President every five years to recommend the vertical and horizontal sharing of net tax proceeds between the Union and States, and the principles governing grants-in-aid under Article 275.',
    plainEnglish: 'The constitutional referee that decides how tax money collected by the Central Government is divided among the 28 States, ensuring backward and border states receive fair revenue shares.',
    textSnippet: 'The President shall... at the expiration of every fifth year... constitute a Finance Commission which shall consist of a Chairman and four other members.',
    realWorldScenario: 'How do States get 41% of central tax revenues? The 15th Finance Commission evaluated revenue gaps, demographic performance, and fiscal discipline, and recommended a 41% devolution share from the central divisible pool under Article 280(3)(a).',
    prosecutionNote: 'Funds allocated to State Police Modernization and forensic upgrades derive from Finance Commission grants-in-aid recommended under Article 280.',
    clauses: [
      {
        clause: '280(1) Composition and Qualifications',
        explanation: 'Consists of a Chairman experienced in public affairs and four members qualified as High Court judges or experts in finance, economics, and public administration.',
        example: 'Appointment of eminent economists and jurists to the Commission.'
      },
      {
        clause: '280(3)(a) Net Tax Devolution (Divisible Pool)',
        explanation: 'Recommends the vertical allocation of taxes between Union and States, and horizontal distribution among States.',
        example: 'Formula-based devolution factoring in population, area, and forest cover.'
      },
      {
        clause: '280(3)(b) Grants-in-Aid Principles',
        explanation: 'Recommends grants-in-aid of the revenues of States under Article 275.',
        example: 'Revenue deficit grants for hill and border states.'
      }
    ],
    exceptions: ['The Finance Commission\'s recommendations are submitted to the President under Art 281 and tabled in Parliament; while formally advisory, they carry near-binding constitutional convention.'],
    landmarkCases: [
      {
        caseName: 'Union of India v. T.R. Varma',
        year: 1957,
        bench: 'Constitution Bench',
        summary: 'Outlined the quasi-judicial characteristics of constitutional advisory bodies and public inquiry commissions acting pursuant to statutory and constitutional mandates.',
        significance: 'Affirmed high evidentiary and procedural standards for constitutional commissions.'
      }
    ],
    doctrineLinks: ['Fiscal Equalization', 'Horizontal and Vertical Devolution']
  },

  // CHAPTER III: PROPERTY, CONTRACTS, RIGHTS, LIABILITIES, SUITS
  {
    number: '299',
    title: 'Government Contracts & Formal Validity Requirements',
    summary: 'Mandates the formal requirements for contracts made in the exercise of executive power: must be expressed to be made by the President or Governor, executed on their behalf, and executed by authorized officers; immunizes the President and Governor from personal liability.',
    plainEnglish: 'Any contract signed by the government (for defense, roads, supplies) must explicitly say it is entered into by the President or Governor and signed by an authorized officer. Oral promises or unauthorized letters by ministers are legally unenforceable.',
    textSnippet: 'All contracts made in the exercise of the executive power of the Union or of a State shall be expressed to be made by the President, or by the Governor... and all such contracts... shall be executed on behalf of the President or the Governor by such persons and in such manner as he may direct or authorise.',
    realWorldScenario: 'A government department gives an oral assurance or unformatted email to a contractor promising a multi-crore supply contract. Can the contractor enforce this contract in court? No! In K.P. Chowdhry v. State of M.P., the Supreme Court held that Article 299 is mandatory; if a contract fails to comply with Article 299, it is void ab initio and unenforceable.',
    prosecutionNote: 'Procurement fraud cases under Section 7 Prevention of Corruption Act examine compliance with Article 299 to determine whether an unauthorized official committed criminal misconduct in awarding tenders.',
    clauses: [
      {
        clause: 'Mandatory Formal Triad under Article 299(1)',
        explanation: '(1) Must be expressed to be made by President/Governor; (2) Must be executed on their behalf; (3) Must be executed by an officer authorized under government Rules of Business.',
        example: 'Formal execution of public-private partnership agreements.'
      },
      {
        clause: '299(2) Personal Immunity of Constitutional Heads',
        explanation: 'Neither the President nor the Governor, nor the signing officer, is personally liable in respect of any government contract.',
        example: 'Civil claims lie against the Union or State Government, never against the individual official.'
      }
    ],
    exceptions: ['While an informal contract cannot be enforced as a contract, the government may be required to make restitution under Section 70 of the Indian Contract Act if it enjoyed the benefit of non-gratuitous work.'],
    landmarkCases: [
      {
        caseName: 'K.P. Chowdhry v. State of Madhya Pradesh',
        year: 1967,
        bench: 'Constitution Bench',
        summary: 'Held that the provisions of Article 299(1) are mandatory and not directory; there cannot be an implied contract between the government and a private citizen.',
        significance: 'Settled that failure to comply with Article 299 renders a government contract completely void.'
      },
      {
        caseName: 'State of West Bengal v. B.K. Mondal & Sons',
        year: 1962,
        bench: '5-Judge Bench',
        summary: 'Ruled that while an invalid contract under Article 299 cannot be enforced, if the government has received goods or accepted work done non-gratuitously, Section 70 Contract Act applies to prevent unjust enrichment.',
        significance: 'Balanced strict Article 299 formalities with equity and restitution.'
      }
    ],
    doctrineLinks: ['Doctrine of Formal Validity', 'Restitution against Unjust Enrichment']
  },
  {
    number: '300',
    title: 'Suits and Proceedings (Tortious Liability of the State)',
    summary: 'Establishes that the Government of India may sue or be sued by the name of the Union of India, and the Government of a State may sue or be sued by the name of the State, continuing the historic common-law liability roots while giving way to modern human rights accountability.',
    plainEnglish: 'Citizens can sue the Central or State Government in court for damages or breach of duties. While ancient British law claimed "the King can do no wrong" (sovereign immunity), modern Indian courts hold the State strictly liable for police brutality, custodial violence, and illegal detention.',
    textSnippet: 'The Government of India may sue or be sued by the name of the Union of India and the Government of a State may sue or be sued by the name of the State.',
    realWorldScenario: 'Police officers torture a suspect in custody, causing permanent bodily injury or death. Can the State claim "sovereign immunity" to avoid paying compensation? No! In Nilabati Behera and D.K. Basu, the Supreme Court ruled that sovereign immunity does not apply to violations of fundamental rights under Article 21; the State is strictly liable to pay public law compensation.',
    prosecutionNote: 'Prosecuting officers must note that in custodial torture or fake encounter cases, criminal prosecution of delinquent officers proceeds under BNS alongside civil writ compensation against the State under Article 300 r/w 21.',
    clauses: [
      {
        clause: 'Juristic Person Status of the State',
        explanation: 'Enables the Union of India and State Governments to initiate legal proceedings and be named as defendants in civil, criminal, and constitutional actions.',
        example: 'Filing writ petitions against the "State of Jammu & Kashmir" or "Union of India".'
      },
      {
        clause: 'Evolution from Sovereign Immunity to State Accountability',
        explanation: 'Old colonial doctrine exempting sovereign functions (Kasturi Lal) has been progressively dismantled in favor of constitutional tort damages.',
        example: 'Awarding multi-lakh compensation for wrongful police encounters and unlawful detention.'
      }
    ],
    exceptions: ['Pure acts of state involving foreign affairs, declarations of war, and treaty defense remain immune from regular domestic tort liability.'],
    landmarkCases: [
      {
        caseName: 'State of Rajasthan v. Vidyawati',
        year: 1962,
        bench: '5-Judge Bench',
        summary: 'Sinha CJ held the State vicariously liable for the negligent driving of a government vehicle by its employee, rejecting sovereign immunity in an independent republican democracy.',
        significance: 'First major post-independence decision establishing State tort liability.'
      },
      {
        caseName: 'Kasturi Lal Ralia Ram Jain v. State of U.P.',
        year: 1965,
        bench: '5-Judge Bench',
        summary: 'Gajendragadkar CJ held that when police officers misappropriated seized gold, the State could not be held liable because seizing property was a "sovereign function". Widely criticized and later bypassed.',
        significance: 'Classic case illustrating the colonial sovereign immunity barrier.'
      },
      {
        caseName: 'Nilabati Behera v. State of Orissa',
        year: 1993,
        bench: '3-Judge Bench',
        summary: 'Verma J held that sovereign immunity has no application in public law remedies for enforcement of fundamental rights under Article 21; awarded constitutional compensation for custodial death.',
        significance: 'Decisively ended sovereign immunity defense in custodial violence cases.'
      }
    ],
    doctrineLinks: ['Constitutional Tort', 'Vicarious Liability of the State', 'Erosion of Sovereign Immunity']
  },

  // CHAPTER IV: RIGHT TO PROPERTY
  {
    number: '300A',
    title: 'Persons Not to be Deprived of Property Save by Authority of Law',
    summary: 'Inserted by the 44th Constitutional Amendment Act 1978 (deleting Articles 19(1)(f) and 31). Establishes that no person shall be deprived of their property save by authority of law, recognized by the Supreme Court as a constitutional and basic human right.',
    plainEnglish: 'The government cannot seize your land, house, or bank account by sheer executive order. To acquire private property, the government must pass a valid law, show a clear public purpose, pay fair compensation, and follow due process.',
    textSnippet: 'No person shall be deprived of his property save by authority of law.',
    realWorldScenario: 'A state highway authority bulldozes a citizen’s shop or house without issuing any land acquisition notice, without holding hearings, and without paying compensation. Is this legal? Absolutely not! The Supreme Court in Vidya Devi (2020) and Kolkata Municipal Corporation (2024) ruled that demolishing property without following statutory acquisition procedure violates Article 300A, ordering the state to pay punitive compensation.',
    prosecutionNote: 'Prosecution agencies (ED, Police, Income Tax) seizing, freezing, or attaching bank accounts and immovable properties under BNSS (Sec 107) or PMLA must strictly adhere to statutory mandates; arbitrary freezing violates Article 300A.',
    clauses: [
      {
        clause: 'Constitutional Human Right Status',
        explanation: 'While no longer a Fundamental Right under Part III, Article 300A is a vital constitutional guarantee and an internationally recognized human right.',
        example: 'Protection against executive land grabs and unauthorized demolitions.'
      },
      {
        clause: 'Requirements of Valid Deprivation',
        explanation: 'Must satisfy 4 pillars: (1) Enacted by a competent legislature; (2) Public purpose requirement; (3) Fair compensation; (4) Fair, non-arbitrary procedure.',
        example: 'Compliance with the Right to Fair Compensation and Transparency in Land Acquisition Act (RFCTLARR).'
      }
    ],
    exceptions: ['Taxation, regulatory penalties, and property confiscation of proceeds of crime under valid penal statutes (e.g., PMLA, BNSS) do not violate Art 300A.'],
    landmarkCases: [
      {
        caseName: 'K.T. Plantation Pvt Ltd v. State of Karnataka',
        year: 2011,
        bench: '5-Judge Bench',
        summary: 'Held that while Article 300A does not contain the word "compensation", the requirement of paying compensation and showing public purpose is inherent in the rule of law built into Article 300A.',
        significance: 'Elevated Article 300A from a mere procedural clause into a substantive constitutional shield.'
      },
      {
        caseName: 'Vidya Devi v. State of Himachal Pradesh',
        year: 2020,
        bench: '2-Judge Bench',
        summary: 'Indu Malhotra J held that the right to property is a human right; when the state built a road on an illiterate widow\'s land without acquiring it and paid no compensation for 42 years, the Court invoked Article 142 to direct full compensation and costs.',
        significance: 'Affirmed that the State cannot dispossess a citizen of private property without due process of law.'
      },
      {
        caseName: 'Kolkata Municipal Corporation v. Bimal Kumar Shah',
        year: 2024,
        bench: '2-Judge Bench',
        summary: 'Detailed the 7 sub-rights embedded within Article 300A: right to notice, right to be heard, right to a reasoned decision, right to fair compensation, right to restitute, and right to prompt implementation.',
        significance: 'Modern codification of the procedural due process sub-rights under Article 300A.'
      }
    ],
    doctrineLinks: ['Constitutional Right to Property', 'Eminent Domain', 'Procedural Due Process in Expropriation']
  }
];
