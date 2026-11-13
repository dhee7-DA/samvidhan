import type { ArticleItem } from '../types/constitution';

export const PART_14A_TRIBUNALS_EXPANDED: ArticleItem[] = [
  {
    number: '323A',
    title: 'Administrative Tribunals (CAT & The L. Chandra Kumar Basic Structure Rule)',
    summary: 'Empowers Parliament exclusively to provide by law for the adjudication of public service disputes by administrative tribunals (leading to the Administrative Tribunals Act 1985 establishing CAT); interpreted by the historic 7-Judge Bench in L. Chandra Kumar (1997), which struck down the exclusion of High Court writ review as a violation of the Basic Structure.',
    plainEnglish: 'Created specialized tribunals (like the Central Administrative Tribunal - CAT) so government employees do not have to crowd normal civil courts for service grievances. Originally, the government tried to ban High Courts from hearing appeals against CAT decisions. The Supreme Court struck this down in L. Chandra Kumar, ruling that every tribunal decision must be appealable to a Division Bench of the High Court.',
    textSnippet: 'Parliament may, by law, provide for the adjudication or trial by administrative tribunals of disputes and complaints with respect to recruitment and conditions of service of persons appointed to public services and posts.',
    realWorldScenario: 'A public prosecutor or central government officer is denied promotion and files an application before the Central Administrative Tribunal (CAT). CAT dismisses the application. Can the officer challenge the CAT order directly in the Supreme Court? No! Under L. Chandra Kumar (1997), the officer must first approach a Division Bench of the High Court under Article 226/227; bypassing the High Court is barred.',
    prosecutionNote: 'Prosecuting officers dealing with service dismissals under Article 311 or corruption suspensions should note that service disputes must first be agitated before the statutory tribunal (CAT) before invoking High Court writ remedies.',
    clauses: [
      {
        clause: '323A(1) Exclusive Parliamentary Competence',
        explanation: 'Only Parliament can establish administrative tribunals for Union or State civil service disputes (State legislatures cannot enact laws under 323A).',
        example: 'Administrative Tribunals Act, 1985 (CAT and State Administrative Tribunals).'
      },
      {
        clause: '323A(2)(d) Exclusion Clause Struck Down',
        explanation: 'The clause purporting to exclude the jurisdiction of High Courts was struck down as unconstitutional in L. Chandra Kumar.',
        example: 'Preservation of High Court judicial review under Article 226/227.'
      },
      {
        clause: 'First Instance Adjudication & Supplementary Status',
        explanation: 'Tribunals act as courts of first instance in their specialized domain; they supplement, but never supplant, constitutional courts.',
        example: 'High Court writ scrutiny acting as a mandatory appellate filter.'
      }
    ],
    exceptions: ['Does not apply to members of the armed forces (governed by the Armed Forces Tribunal Act 2007) or officers and servants of the Supreme Court and High Courts.'],
    landmarkCases: [
      {
        caseName: 'L. Chandra Kumar v. Union of India',
        year: 1997,
        bench: '7-Judge Constitution Bench (Ahmadi CJI, Verma, Punchhi, Ramaswamy, Bharucha, Paripoornan, Suhas Sen JJ)',
        summary: 'Historic landmark judgment: (1) Judicial review under Articles 226/227 (High Courts) and Article 32 (Supreme Court) is an inviolable feature of the Basic Structure; (2) Clause 323A(2)(d) and 323B(3)(d) excluding High Court jurisdiction are unconstitutional; (3) Tribunals continue as courts of first instance, but all tribunal decisions are subject to scrutiny before a Division Bench of the High Court; (4) Direct appeal from tribunal to Supreme Court under Article 136 is barred.',
        significance: 'Restored High Court constitutional supremacy over all administrative and statutory tribunals in India.'
      },
      {
        caseName: 'S.P. Sampath Kumar v. Union of India',
        year: 1987,
        bench: 'Constitution Bench',
        summary: 'Bhagwati CJ had initially upheld CAT as an effective institutional alternative to High Courts, provided judicial independence was safeguarded; later modified and refined by L. Chandra Kumar.',
        significance: 'The foundational stepping stone in Indian tribunal jurisprudence.'
      }
    ],
    doctrineLinks: ['Judicial Review as Basic Structure', 'Supplementary Tribunal Doctrine', 'Mandatory High Court Division Bench Scrutiny']
  },
  {
    number: '323B',
    title: 'Tribunals for Other Matters (Tax, Customs, NCLT & Independence Safeguards)',
    summary: 'Empowers appropriate legislatures (both Parliament and State Legislatures within their legislative fields) to establish specialized adjudicatory tribunals for taxation, foreign exchange, industrial disputes, property ceilings, and essential goods; governed by the Madras Bar Association rulings safeguarding structural judicial independence.',
    plainEnglish: 'Allows Parliament and State Assemblies to set up specialized courts for business disputes—such as the National Company Law Tribunal (NCLT), Income Tax Appellate Tribunal (ITAT), and Consumer Commissions. The Supreme Court has repeatedly struck down government rules attempting to pack these tribunals with bureaucrats without proper judicial tenure.',
    textSnippet: 'The appropriate Legislature may, by law, provide for the adjudication or trial by tribunals of any disputes, complaints, or offences with respect to all or any of the matters specified in clause (2).',
    realWorldScenario: 'The Central Government frames tribunal rules reducing the tenure of judicial members of the NCLT and NGT to 3 years and giving executive secretaries majority control over appointments. In the Madras Bar Association verdicts (2020 & 2021), the Supreme Court struck down the rules, holding that short tenure and executive dominance over tribunals violate the independence of the judiciary and the separation of powers.',
    prosecutionNote: 'Offenses under commercial regulatory acts (e.g. Insolvency and Bankruptcy Code, Companies Act) are tried before specialized tribunals where prosecuting agencies (SFIO, ED) present economic evidence.',
    clauses: [
      {
        clause: '323B(2) Catalog of Specialized Domains',
        explanation: 'Includes: (a) Tax; (b) Foreign exchange; (c) Industrial and labor; (d) Land reforms; (e) Ceiling on urban property; (f) Elections to local bodies; (g) Essential goods production and supply; (h) Rent and tenancy.',
        example: 'Income Tax Appellate Tribunal (ITAT), NCLT, and NGT.'
      },
      {
        clause: 'Judicial Independence Standards (Madras Bar Association)',
        explanation: 'Tribunals performing judicial functions must possess the same independence, impartiality, and security of tenure as regular civil courts.',
        example: 'Search-cum-Selection Committees headed by Chief Justice of India or nominee.'
      }
    ],
    exceptions: ['All decisions of Article 323B tribunals are subject to supervisory writ review before the High Court Division Bench under Article 226/227 (L. Chandra Kumar).'],
    landmarkCases: [
      {
        caseName: 'Union of India v. R. Gandhi, President, Madras Bar Association',
        year: 2010,
        bench: '5-Judge Constitution Bench',
        summary: 'Raveendran J upheld the creation of NCLT and NCLAT under Article 323B, but struck down provisions allowing bureaucratic domination; held that when court jurisdiction is transferred to tribunals, members must possess judicial expertise and independence on par with High Court judges.',
        significance: 'Laid down the constitutional blueprint for judicial dominance and independence in tribunals.'
      },
      {
        caseName: 'Madras Bar Association v. Union of India (Tribunals Reforms Act 2021)',
        year: 2021,
        bench: '3-Judge Bench (N.V. Ramana CJI, L. Nageswara Rao, Ravindra Bhat JJ)',
        summary: 'Struck down provisions of the Tribunal Reforms Act 2021 that prescribed a 4-year tenure and minimum age of 50 years for appointment, holding that repeated legislative overruling of binding judicial judgments on judicial independence violates separation of powers.',
        significance: 'Enforced the sanctity of judicial independence in statutory tribunal appointments.'
      }
    ],
    doctrineLinks: ['Separation of Powers in Tribunalization', 'Judicial Dominance in Selection', 'Supervisory High Court Jurisdiction']
  }
];
