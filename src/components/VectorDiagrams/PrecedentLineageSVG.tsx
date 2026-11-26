import React, { useState } from 'react';
import { GitBranch, Scale, ArrowRight, ShieldAlert, CheckCircle2, ChevronRight, Award, BookOpen } from 'lucide-react';

export interface PrecedentNode {
  id: string;
  year: number;
  caseName: string;
  citation: string;
  bench: string;
  actionType: 'ORIGIN' | 'OVERRULED' | 'EXPANDED' | 'REASSERTED' | 'PARLIAMENT_OVERRIDE';
  relationLabel: string;
  coreDoctrine: string;
  ratioDecidendi: string;
  courtroomApplication: string;
  color: string;
}

export interface LineageTrack {
  id: string;
  title: string;
  subtitle: string;
  articleAnchor: string;
  description: string;
  nodes: PrecedentNode[];
}

export const PRECEDENT_LINEAGES: LineageTrack[] = [
  {
    id: 'art-21-liberty',
    title: 'Article 21 & Due Process Evolution',
    subtitle: 'From Watertight Silos to Substantive Due Process & Digital Privacy',
    articleAnchor: 'Articles 14, 19, 21',
    description: 'The journey from A.K. Gopalan’s formalistic "procedure established by law" to Maneka Gandhi’s Golden Triangle, culminating in Puttaswamy’s constitutional recognition of Privacy as an inalienable right.',
    nodes: [
      {
        id: 'gopalan-1950',
        year: 1950,
        caseName: 'A.K. Gopalan v. State of Madras',
        citation: 'AIR 1950 SC 27',
        bench: '6-Judge Bench (5:1)',
        actionType: 'ORIGIN',
        relationLabel: 'Formalistic Foundation',
        coreDoctrine: 'Watertight Compartment Theory',
        ratioDecidendi: '"Procedure established by law" means only validly enacted state statute. Articles 19, 21, and 22 operate in mutual exclusion. Court cannot review substantive fairness of law under Art 21.',
        courtroomApplication: 'Historically cited to show the pre-1978 orthodox textualism before substantive fairness was judicialized.',
        color: '#64748b'
      },
      {
        id: 'kharak-1962',
        year: 1962,
        caseName: 'Kharak Singh v. State of U.P.',
        citation: 'AIR 1963 SC 1295',
        bench: '6-Judge Bench',
        actionType: 'EXPANDED',
        relationLabel: 'Embryonic Privacy Seed',
        coreDoctrine: 'Physical Liberty & Domiciliary Inviolability',
        ratioDecidendi: 'Midnight police visits under UP Police Regs violate personal liberty under Art 21. Justice Subba Rao dissented, holding privacy is an essential ingredient of liberty.',
        courtroomApplication: 'Cited when challenging unauthorized police surveillance, history-sheeting, and arbitrary search procedures.',
        color: '#38bdf8'
      },
      {
        id: 'maneka-1978',
        year: 1978,
        caseName: 'Maneka Gandhi v. Union of India',
        citation: 'AIR 1978 SC 597',
        bench: '7-Judge Bench (Unanimous)',
        actionType: 'OVERRULED',
        relationLabel: 'Overruled Gopalan Doctrine',
        coreDoctrine: 'The Golden Triangle & Substantive Fairness',
        ratioDecidendi: 'Overruled Gopalan. Procedure under Art 21 must be "just, fair, and reasonable" — not fanciful or oppressive. Articles 14, 19, and 21 form a tripartite organic whole.',
        courtroomApplication: 'The universal bedrock in every fundamental rights writ petition. Mandatory citation whenever state actions impinge on life, personal movement, or dignity.',
        color: '#10b981'
      },
      {
        id: 'puttaswamy-2017',
        year: 2017,
        caseName: 'K.S. Puttaswamy v. Union of India',
        citation: '(2017) 10 SCC 1',
        bench: '9-Judge Bench (Unanimous)',
        actionType: 'EXPANDED',
        relationLabel: 'Overruled MP Sharma & ADM Jabalpur',
        coreDoctrine: 'Fundamental Right to Privacy & Proportionality Test',
        ratioDecidendi: 'Privacy is an intrinsic, fundamental facet of human dignity and liberty under Art 21. State infringements must pass the Four-Fold Proportionality Test: Legality, Legitimate State Aim, Suitability, and Necessity.',
        courtroomApplication: 'The golden standard cited in digital surveillance, DNA banking, biometric data, phone-tapping, encrypted messaging, and data protection challenges.',
        color: '#a855f7'
      },
      {
        id: 'navtej-2018',
        year: 2018,
        caseName: 'Navtej Singh Johar v. Union of India',
        citation: '(2018) 10 SCC 1',
        bench: '5-Judge Bench (Unanimous)',
        actionType: 'EXPANDED',
        relationLabel: 'Decisional Autonomy Landmark',
        coreDoctrine: 'Constitutional Morality & Bodily Autonomy',
        ratioDecidendi: 'Section 377 IPC criminalizing private, consensual same-sex relations violates Articles 14, 15, 19, and 21. Constitutional morality triumphs over popular or majoritarian social morality.',
        courtroomApplication: 'Frequently invoked in personal autonomy, reproductive rights, marriage equality, and anti-discrimination litigations.',
        color: '#f59e0b'
      }
    ]
  },
  {
    id: 'judges-collegium',
    title: 'Judicial Appointments & Independence',
    subtitle: 'From Executive Supremacy to Collegium System and NJAC Strike-Down',
    articleAnchor: 'Articles 124(2), 217, 222',
    description: 'The titanic constitutional battle over judicial appointments: how the Supreme Court interpreted "consultation" into "concurrence" and declared Judicial Independence an inviolable Basic Structure.',
    nodes: [
      {
        id: 'first-judges-1981',
        year: 1981,
        caseName: 'S.P. Gupta v. Union of India (First Judges)',
        citation: 'AIR 1982 SC 149',
        bench: '7-Judge Bench (4:3)',
        actionType: 'ORIGIN',
        relationLabel: 'Executive Supremacy Era',
        coreDoctrine: 'Literal Meaning of Consultation',
        ratioDecidendi: '"Consultation" in Art 124(2) does not mean concurrence. The executive holds final deciding power in judicial appointments and transfers, provided full consultation occurred.',
        courtroomApplication: 'Historically cited to illustrate executive dominance prior to the institutional collegium revolution in 1993.',
        color: '#ef4444'
      },
      {
        id: 'second-judges-1993',
        year: 1993,
        caseName: 'Supreme Court Advocates-on-Record v. UOI (Second Judges)',
        citation: '(1993) 4 SCC 441',
        bench: '9-Judge Bench (7:2)',
        actionType: 'OVERRULED',
        relationLabel: 'Overruled S.P. Gupta',
        coreDoctrine: 'CJI Primacy & Birth of Collegium',
        ratioDecidendi: 'Overruled S.P. Gupta. "Consultation" requires concurrence. Primacy lies with the Chief Justice of India acting in institutional consensus with the two senior-most SC judges.',
        courtroomApplication: 'Established the initial collegium framework to safeguard judicial independence from political executive interference.',
        color: '#10b981'
      },
      {
        id: 'third-judges-1998',
        year: 1998,
        caseName: 'In re Special Reference 1 of 1998 (Third Judges)',
        citation: '(1998) 7 SCC 739',
        bench: '9-Judge Bench (Unanimous)',
        actionType: 'EXPANDED',
        relationLabel: 'Institutional Expansion',
        coreDoctrine: 'Plural Collegium of CJI + 4 Senior-Most Judges',
        ratioDecidendi: 'Presidential reference under Art 143. CJI cannot act alone; opinion must represent a plural collegium of CJI + 4 senior-most judges for SC elevation, and CJI + 2 for High Courts.',
        courtroomApplication: 'The operative procedural blueprint currently governing all Supreme Court and High Court judicial appointments in India.',
        color: '#38bdf8'
      },
      {
        id: 'njac-amendment-2014',
        year: 2014,
        caseName: '99th Constitutional Amendment & NJAC Act',
        citation: 'Acts of Parliament 2014',
        bench: 'Parliamentary Statute',
        actionType: 'PARLIAMENT_OVERRIDE',
        relationLabel: 'Parliamentary Counter-Measure',
        coreDoctrine: 'National Judicial Appointments Commission',
        ratioDecidendi: 'Sought to replace the Collegium with a 6-member NJAC (CJI, 2 senior judges, Union Law Minister, and 2 eminent persons with mutual veto power).',
        courtroomApplication: 'A landmark instance of Parliament attempting to retrieve appointment authority through constituent amending power.',
        color: '#f59e0b'
      },
      {
        id: 'fourth-judges-2015',
        year: 2015,
        caseName: 'Supreme Court Advocates-on-Record v. UOI (NJAC Case)',
        citation: '(2016) 5 SCC 1',
        bench: '5-Judge Bench (4:1)',
        actionType: 'REASSERTED',
        relationLabel: 'Struck Down 99th Amendment',
        coreDoctrine: 'Judicial Independence is Basic Structure',
        ratioDecidendi: 'Struck down the 99th Constitutional Amendment and NJAC Act in toto as destructive of judicial independence and separation of powers. Reinstated the Collegium system.',
        courtroomApplication: 'Supreme authority whenever the legislature or executive attempts to interfere with judicial elevations, transfers, or tenure.',
        color: '#a855f7'
      }
    ]
  },
  {
    id: 'basic-structure-lineage',
    title: 'Basic Structure & Amending Power',
    subtitle: 'From Unchecked Constituent Power to the Inviolable Core of the Republic',
    articleAnchor: 'Articles 13, 31B, 368',
    description: 'The monumental constitutional clash over whether Parliament possesses the sovereign constituent power to destroy the fundamental freedoms and democratic bedrock of India.',
    nodes: [
      {
        id: 'shankari-1951',
        year: 1951,
        caseName: 'Shankari Prasad v. Union of India',
        citation: 'AIR 1951 SC 458',
        bench: '5-Judge Bench (Unanimous)',
        actionType: 'ORIGIN',
        relationLabel: 'Unbounded Amending Power',
        coreDoctrine: 'Distinction between Law and Amendment',
        ratioDecidendi: 'Parliament possesses unlimited amending power under Art 368. "Law" in Art 13(2) covers only ordinary legislative laws, not constituent constitutional amendments.',
        courtroomApplication: 'The earliest ruling upholding the 1st Amendment and initial land reforms against fundamental rights challenges.',
        color: '#64748b'
      },
      {
        id: 'golaknath-1967',
        year: 1967,
        caseName: 'I.C. Golak Nath v. State of Punjab',
        citation: 'AIR 1967 SC 1643',
        bench: '11-Judge Bench (6:5)',
        actionType: 'OVERRULED',
        relationLabel: 'Overruled Shankari Prasad & Sajjan Singh',
        coreDoctrine: 'Transcendental Position of Fundamental Rights',
        ratioDecidendi: 'Overruled Shankari Prasad. Fundamental Rights are transcendental and immutable. Parliament CANNOT take away or abridge any Part III right. Invoked prospective overruling.',
        courtroomApplication: 'Triggered the historic constitutional confrontation leading directly to the 24th and 25th Amendments.',
        color: '#ef4444'
      },
      {
        id: 'kesavananda-1973',
        year: 1973,
        caseName: 'Kesavananda Bharati v. State of Kerala',
        citation: 'AIR 1973 SC 1461',
        bench: '13-Judge Bench (7:6)',
        actionType: 'OVERRULED',
        relationLabel: 'Overruled Golak Nath & Formulated BSD',
        coreDoctrine: 'Basic Structure Doctrine (BSD)',
        ratioDecidendi: 'Parliament can amend any part of the Constitution including Part III, BUT cannot alter, damage, or destroy the basic structure or essential framework of the Constitution.',
        courtroomApplication: 'The greatest precedent in Indian legal history. The ultimate litmus test against which all constitutional amendments are adjudicated.',
        color: '#10b981'
      },
      {
        id: 'minerva-1980',
        year: 1980,
        caseName: 'Minerva Mills Ltd. v. Union of India',
        citation: 'AIR 1980 SC 1789',
        bench: '5-Judge Bench (4:1)',
        actionType: 'REASSERTED',
        relationLabel: 'Shielded Limited Amending Power',
        coreDoctrine: 'Harmony of Rights & Inviolability of Judicial Review',
        ratioDecidendi: 'Struck down Section 55 of 42nd Amendment which granted Parliament unlimited amending power. A limited amending power is itself a basic feature of the Constitution.',
        courtroomApplication: 'Universally cited whenever an amendment seeks to oust judicial review or make parliamentary power unreviewable.',
        color: '#a855f7'
      },
      {
        id: 'coelho-2007',
        year: 2007,
        caseName: 'I.R. Coelho v. State of Tamil Nadu',
        citation: '(2007) 2 SCC 1',
        bench: '9-Judge Bench (Unanimous)',
        actionType: 'EXPANDED',
        relationLabel: 'Penetrated the 9th Schedule Vault',
        coreDoctrine: 'The Rights Test & 9th Schedule Reviewability',
        ratioDecidendi: 'Any law placed in the 9th Schedule on or after April 24, 1973 is open to judicial review against the Basic Structure doctrine if it violates Articles 14, 19, or 21.',
        courtroomApplication: 'Eliminated the Ninth Schedule as a black hole for immunizing unconstitutional land, reservation, or economic statutes.',
        color: '#14b8a6'
      }
    ]
  },
  {
    id: 'art-14-arbitrariness',
    title: 'Article 14 Equality & Non-Arbitrariness',
    subtitle: 'From Intelligible Differentia to Manifest Arbitrariness & Substantive Equality',
    articleAnchor: 'Articles 14, 15, 16',
    description: 'How the Indian Supreme Court transitioned from the classical British classification test into an activist weapon striking down executive and statutory arbitrariness.',
    nodes: [
      {
        id: 'anwar-ali-1952',
        year: 1952,
        caseName: 'State of West Bengal v. Anwar Ali Sarkar',
        citation: 'AIR 1952 SC 75',
        bench: '7-Judge Bench',
        actionType: 'ORIGIN',
        relationLabel: 'Classical Nexus Test',
        coreDoctrine: 'Intelligible Differentia & Reasonable Nexus',
        ratioDecidendi: 'Special Courts Act giving executive unguided discretion to refer cases violated Art 14. Classification must be based on intelligible differentia with a rational nexus to the object.',
        courtroomApplication: 'The textbook two-pronged test used in every challenge alleging discriminatory classification under Article 14.',
        color: '#64748b'
      },
      {
        id: 'royappa-1974',
        year: 1974,
        caseName: 'E.P. Royappa v. State of Tamil Nadu',
        citation: 'AIR 1974 SC 555',
        bench: '5-Judge Bench',
        actionType: 'EXPANDED',
        relationLabel: 'New Activist Dimension',
        coreDoctrine: 'Equality Antithetic to Arbitrariness',
        ratioDecidendi: 'Justice Bhagwati formulated the "new dynamic doctrine": Equality is a dynamic concept with many aspects. Equality and arbitrariness are sworn enemies. Where an act is arbitrary, it implicitly violates Art 14.',
        courtroomApplication: 'Cited in administrative law challenges to state contracts, tender cancellations, and discretionary postings.',
        color: '#38bdf8'
      },
      {
        id: 'maneka-eq-1978',
        year: 1978,
        caseName: 'Maneka Gandhi v. Union of India',
        citation: 'AIR 1978 SC 597',
        bench: '7-Judge Bench',
        actionType: 'REASSERTED',
        relationLabel: 'Tripartite Integration',
        coreDoctrine: 'Universal Application to Procedure',
        ratioDecidendi: 'The non-arbitrariness doctrine of Art 14 was infused into Art 21. Any procedure depriving life or liberty must be free of arbitrariness, bias, or procedural unfairness.',
        courtroomApplication: 'Crucial for arguing natural justice (audi alteram partem) violations in administrative and quasi-judicial orders.',
        color: '#10b981'
      },
      {
        id: 'shayara-2017',
        year: 2017,
        caseName: 'Shayara Bano v. Union of India (Triple Talaq)',
        citation: '(2017) 9 SCC 1',
        bench: '5-Judge Bench (3:2)',
        actionType: 'EXPANDED',
        relationLabel: 'Manifest Arbitrariness Test',
        coreDoctrine: 'Statutory Striking on Manifest Arbitrariness',
        ratioDecidendi: 'Justice Nariman held that legislation or practices that are capricious, irrational, or without adequate determining principle can be struck down for "manifest arbitrariness" under Art 14.',
        courtroomApplication: 'Primary authority for invalidating subordinate legislation, statutes, and unguided executive schemes on the ground of irrationality.',
        color: '#a855f7'
      },
      {
        id: 'joseph-shine-2018',
        year: 2018,
        caseName: 'Joseph Shine v. Union of India',
        citation: '(2019) 3 SCC 39',
        bench: '5-Judge Bench (Unanimous)',
        actionType: 'EXPANDED',
        relationLabel: 'Stereotype Elimination',
        coreDoctrine: 'Substantive Gender Equality & Autonomy',
        ratioDecidendi: 'Struck down Section 497 IPC (Adultery) as manifestly arbitrary and violating Articles 14 and 15 by institutionalizing archaic patriarchal stereotypes of women as chattel of their husbands.',
        courtroomApplication: 'Frequently cited to strike down gendered archaic laws and promote transformative constitutional equality.',
        color: '#f59e0b'
      }
    ]
  },
  {
    id: 'federalism-emergency',
    title: 'Article 356 & Federal Discipline',
    subtitle: 'From Unfettered Presidential Discretion to Robust Judicial Scrutiny and Floor Tests',
    articleAnchor: 'Articles 356, 163, 174, 200',
    description: 'How the Supreme Court disciplined the abuse of President’s Rule, established federalism and secularism as Basic Structure, and reined in gubernatorial delays.',
    nodes: [
      {
        id: 'rajasthan-1977',
        year: 1977,
        caseName: 'State of Rajasthan v. Union of India',
        citation: 'AIR 1977 SC 1361',
        bench: '7-Judge Bench',
        actionType: 'ORIGIN',
        relationLabel: 'High Executive Deference',
        coreDoctrine: 'Subjective Presidential Satisfaction',
        ratioDecidendi: 'Upheld dissolution of 9 state assemblies after general elections. Presidential satisfaction under Art 356 is largely political and subjective, with minimal scope for judicial review.',
        courtroomApplication: 'Historically cited as the peak period of executive political flexibility in invoking Article 356.',
        color: '#64748b'
      },
      {
        id: 'bommai-1994',
        year: 1994,
        caseName: 'S.R. Bommai v. Union of India',
        citation: '(1994) 3 SCC 1',
        bench: '9-Judge Bench (Unanimous on Reviewability)',
        actionType: 'OVERRULED',
        relationLabel: 'Overruled Rajasthan & Established Review',
        coreDoctrine: 'Floor Test Rule & Judicial Review of Art 356',
        ratioDecidendi: 'Presidential proclamation under Art 356 is subject to judicial review for mala fides or irrelevant grounds. State assembly cannot be dissolved until Parliament approves proclamation. Floor of the Assembly is the only forum to test majority.',
        courtroomApplication: 'The watershed precedent that ended rampant partisan misuse of President’s Rule. Quoted in every gubernatorial crisis.',
        color: '#10b981'
      },
      {
        id: 'rameshwar-2006',
        year: 2006,
        caseName: 'Rameshwar Prasad v. Union of India (Bihar Assembly)',
        citation: '(2006) 2 SCC 1',
        bench: '5-Judge Bench (3:2)',
        actionType: 'EXPANDED',
        relationLabel: 'Gubernatorial Mala Fides',
        coreDoctrine: 'Restraint on Subjective Governor Reports',
        ratioDecidendi: 'Dissolution of Bihar assembly on subjective apprehension of horse-trading was declared unconstitutional and mala fide. Governor cannot prevent claim stakes before a floor test.',
        courtroomApplication: 'Key weapon to challenge premature assembly dissolutions and biased Governor actions.',
        color: '#38bdf8'
      },
      {
        id: 'nabam-rebia-2016',
        year: 2016,
        caseName: 'Nabam Rebia v. Deputy Speaker (Arunachal Pradesh)',
        citation: '(2016) 8 SCC 1',
        bench: '5-Judge Bench (Unanimous)',
        actionType: 'REASSERTED',
        relationLabel: 'Status Quo Ante Restoration',
        coreDoctrine: 'Governor Bound by Aid & Advice (Art 163)',
        ratioDecidendi: 'Governor cannot summon, prorogue, or dissolve assembly without aid and advice of the Council of Ministers under Art 163. Court ordered status quo ante, restoring ousted government.',
        courtroomApplication: 'Standard citation defining the strict constitutional limitations of gubernatorial discretion.',
        color: '#a855f7'
      },
      {
        id: 'punjab-gov-2023',
        year: 2023,
        caseName: 'State of Punjab v. Principal Secretary to Governor',
        citation: '(2023) 14 SCC 285',
        bench: '3-Judge Bench (CJI DY Chandrachud)',
        actionType: 'EXPANDED',
        relationLabel: 'Article 200 Timelines Mandate',
        coreDoctrine: 'Governor Cannot Thwart Legislative Will',
        ratioDecidendi: 'Under Article 200, a Governor cannot indefinitely sit on bills passed by elected legislature. If Governor withholds assent, he MUST return the bill "as soon as possible" with recommendations.',
        courtroomApplication: 'Present-day operational precedent in writ disputes by state governments against Governors withholding assent on statutory enactments.',
        color: '#f59e0b'
      }
    ]
  },
  {
    id: 'environmental-climate-lineage',
    title: 'Environmental & Climate Constitutionalism',
    subtitle: 'From Absolute Liability to the 2024 Fundamental Right against Climate Change',
    articleAnchor: 'Articles 14, 21, 48A, 51A(g)',
    description: 'How the Supreme Court transformed Article 21 from physical survival into comprehensive environmental rights: formulating Absolute Liability, the Public Trust Doctrine, and the 2024 Climate Change right.',
    nodes: [
      {
        id: 'mehta-oleum-1987',
        year: 1987,
        caseName: 'M.C. Mehta v. Union of India (Oleum Gas)',
        citation: 'AIR 1987 SC 1086',
        bench: '5-Judge Bench',
        actionType: 'ORIGIN',
        relationLabel: 'Absolute Liability Formulation',
        coreDoctrine: 'No Exceptions to Industrial Liability',
        ratioDecidendi: 'Formulated the non-derogable doctrine of Absolute Liability. Hazardous industrial enterprises have an absolute, non-delegable duty with no common-law exceptions.',
        courtroomApplication: 'Universal standard cited in all toxic torts, factory fires, chemical leakages, and environmental disasters across India.',
        color: '#64748b'
      },
      {
        id: 'vellore-1996',
        year: 1996,
        caseName: 'Vellore Citizens Welfare Forum v. UOI',
        citation: '(1996) 5 SCC 647',
        bench: '3-Judge Bench',
        actionType: 'EXPANDED',
        relationLabel: 'International Law Incorporation',
        coreDoctrine: 'Precautionary & Polluter Pays Principles',
        ratioDecidendi: 'The Precautionary Principle and Polluter Pays Principle are essential features of Sustainable Development and part of customary law under Article 21.',
        courtroomApplication: 'The bedrock precedent applied by the National Green Tribunal (NGT) and High Courts to reverse the burden of proof onto industrial developers.',
        color: '#38bdf8'
      },
      {
        id: 'kamal-nath-1997',
        year: 1997,
        caseName: 'M.C. Mehta v. Kamal Nath',
        citation: '(1997) 1 SCC 388',
        bench: '2-Judge Bench',
        actionType: 'EXPANDED',
        relationLabel: 'Public Trust Doctrine',
        coreDoctrine: 'State as Trustee of Natural Resources',
        ratioDecidendi: 'The State is the trustee of all natural resources meant for public enjoyment. Rivers, forests, and seashore cannot be converted into private ownership or commercially exploited.',
        courtroomApplication: 'Mandatory authority in all litigations against lake encroachment, coastal deregulation, and commercial privatization of public commons.',
        color: '#10b981'
      },
      {
        id: 'ranjitsinh-2024',
        year: 2024,
        caseName: 'M.K. Ranjitsinh v. Union of India (Climate Change)',
        citation: '2024 INSC 280 / (2024) 6 SCC 758',
        bench: '3-Judge Bench (CJI DY Chandrachud)',
        actionType: 'EXPANDED',
        relationLabel: '2024 Constitutional Breakthrough',
        coreDoctrine: 'Right to be Free from Adverse Effects of Climate Change',
        ratioDecidendi: 'Recognized for the first time in Indian constitutional history the Right to be free from the adverse effects of Climate Change under Articles 14 and 21.',
        courtroomApplication: 'The pioneering constitutional authority across all environmental, renewable energy, and climate litigation in India post-2024.',
        color: '#a855f7'
      }
    ]
  },
  {
    id: 'criminal-custody-lineage',
    title: 'Criminal Safeguards & Due Process in Custody',
    subtitle: 'From Police Excesses to Cognitive Privacy and Bail as the Rule',
    articleAnchor: 'Articles 20(3), 21, 22',
    description: 'The judicial construction of inviolable barricades shielding citizens against custodial torture, involuntary neuro-scientific tests, and mechanical arrests.',
    nodes: [
      {
        id: 'nandini-1978',
        year: 1978,
        caseName: 'Nandini Satpathy v. P.L. Dani',
        citation: '(1978) 2 SCC 424',
        bench: '3-Judge Bench',
        actionType: 'ORIGIN',
        relationLabel: 'Silence in Interrogation',
        coreDoctrine: 'Article 20(3) Extends to Pre-Trial Investigation',
        ratioDecidendi: 'The constitutional privilege against self-incrimination applies at the threshold of police interrogation under Section 161 CrPC. A suspect has the right to remain silent to incriminatory questions.',
        courtroomApplication: 'Universal defense in police, CBI, and ED interrogations confirming that silence does not equal guilt.',
        color: '#64748b'
      },
      {
        id: 'dk-basu-1997',
        year: 1997,
        caseName: 'D.K. Basu v. State of West Bengal',
        citation: '(1997) 1 SCC 416',
        bench: '2-Judge Bench',
        actionType: 'EXPANDED',
        relationLabel: 'Mandatory 11-Point Arrest Rules',
        coreDoctrine: 'Custodial Torture is Incompatible with Article 21',
        ratioDecidendi: 'Formulated 11 mandatory guidelines (arrest memo, informing relatives, medical inspection every 48 hours) to prevent custodial deaths and torture in lock-ups.',
        courtroomApplication: 'Directly codified into Sections 41A–41D and 50A CrPC (now BNSS); non-compliance attracts contempt of court.',
        color: '#38bdf8'
      },
      {
        id: 'selvi-2010',
        year: 2010,
        caseName: 'Selvi v. State of Karnataka',
        citation: '(2010) 7 SCC 263',
        bench: '3-Judge Bench (Unanimous)',
        actionType: 'EXPANDED',
        relationLabel: 'Cognitive Privacy Shield',
        coreDoctrine: 'Involuntary Narco & Polygraph Violate Article 20(3)',
        ratioDecidendi: 'Involuntary administration of narco-analysis, polygraph, or brain electrical activation violates Article 20(3) self-incrimination and Article 21 mental privacy.',
        courtroomApplication: 'Primary authority cited whenever investigative agencies seek permission for scientific interrogation without explicit voluntary consent.',
        color: '#10b981'
      },
      {
        id: 'antil-bail-2022',
        year: 2022,
        caseName: 'Satender Kumar Antil v. CBI',
        citation: '(2022) 10 SCC 51',
        bench: '2-Judge Bench',
        actionType: 'REASSERTED',
        relationLabel: 'Bail as Rule, Jail as Exception',
        coreDoctrine: 'Four-Tier Bail Guidelines & Undertrial Freedom',
        ratioDecidendi: 'Categorized offences to mandate that no-arrest during probe requires immediate bail without remand upon chargesheet. Strict 2-week timelines for bail applications.',
        courtroomApplication: 'Governing master-precedent across every criminal court in India preventing unnecessary remand upon filing of chargesheets.',
        color: '#a855f7'
      }
    ]
  },
  {
    id: 'legislative-privilege-lineage',
    title: 'Legislative Privileges & Bribery Immunity Overruled',
    subtitle: 'From Parliamentary Immunity to Complete Accountability under Sita Soren',
    articleAnchor: 'Articles 105, 194, Tenth Schedule',
    description: 'The dramatic evolution from parliamentary privileges protecting corrupt floor-voting to the 2024 unanimous 7-Judge Constitution Bench ruling that bribery in the House enjoys zero immunity.',
    nodes: [
      {
        id: 'searchlight-1959',
        year: 1959,
        caseName: 'M.S.M. Sharma v. Sri Krishna Sinha (Searchlight)',
        citation: 'AIR 1959 SC 395',
        bench: '5-Judge Bench',
        actionType: 'ORIGIN',
        relationLabel: 'Privilege Over Freedom of Speech',
        coreDoctrine: 'Harmonious Construction of Articles 19 & 194',
        ratioDecidendi: 'Legislature\'s internal privilege to prohibit publication of expunged proceedings prevailed over Article 19(1)(a) freedom of press.',
        courtroomApplication: 'Baseline authority establishing the autonomous internal privileges of legislative chambers in India.',
        color: '#64748b'
      },
      {
        id: 'kihoto-1992',
        year: 1992,
        caseName: 'Kihoto Hollohan v. Zachillhu',
        citation: '1992 Supp (2) SCC 651',
        bench: '5-Judge Bench',
        actionType: 'EXPANDED',
        relationLabel: 'Judicial Review of Speaker Orders',
        coreDoctrine: 'Tenth Schedule Speaker Operates as a Tribunal',
        ratioDecidendi: 'The Speaker deciding disqualification petitions acts as a statutory Tribunal. Final orders are subject to judicial review under Articles 136 and 226.',
        courtroomApplication: 'The bedrock precedent in every state assembly defection and speaker disqualification battle.',
        color: '#38bdf8'
      },
      {
        id: 'narasimha-rao-1998',
        year: 1998,
        caseName: 'P.V. Narasimha Rao v. State (JMM Bribery)',
        citation: '(1998) 4 SCC 626',
        bench: '5-Judge Bench (3:2)',
        actionType: 'EXPANDED',
        relationLabel: 'Controversial Bribery Immunity',
        coreDoctrine: 'Literal Immunity for Speeches and Votes in House',
        ratioDecidendi: 'Majority held that MPs who took bribes and voted to save the government were immune from criminal prosecution under Article 105(2).',
        courtroomApplication: 'Historically cited to shield politicians in cash-for-vote scandals, drawing severe academic and judicial criticism.',
        color: '#ef4444'
      },
      {
        id: 'sita-soren-2024',
        year: 2024,
        caseName: 'Sita Soren v. Union of India',
        citation: '2024 INSC 165 / (2024) 5 SCC 629',
        bench: '7-Judge Bench (Unanimous)',
        actionType: 'OVERRULED',
        relationLabel: 'Overruled P.V. Narasimha Rao (1998)',
        coreDoctrine: 'Bribery for Vote/Speech Has ZERO Immunity',
        ratioDecidendi: 'Unanimously overruled P.V. Narasimha Rao 7:0. Bribery is complete upon acceptance and is not essential to casting a vote. Articles 105 and 194 do not shield legislators from criminal penal law.',
        courtroomApplication: 'Historic landmark stripping all legislative immunity from cash-for-vote and corruption investigations across India.',
        color: '#10b981'
      }
    ]
  },
  {
    id: 'sc-st-affirmative-lineage',
    title: 'SC/ST Sub-Classification & Creamy Layer Evolution',
    subtitle: 'From Homogeneity in Chinnaiah to Sub-Classification in Davinder Singh (2024)',
    articleAnchor: 'Articles 14, 15(4), 16(4), 341',
    description: 'The monumental constitutional transition from holding Scheduled Castes as an indivisible monolithic unit to empowering States to sub-classify and apply the Creamy Layer test.',
    nodes: [
      {
        id: 'indra-sawhney-1992',
        year: 1992,
        caseName: 'Indra Sawhney v. Union of India (Mandal Case)',
        citation: '1992 Supp (3) SCC 217',
        bench: '9-Judge Bench (6:3)',
        actionType: 'ORIGIN',
        relationLabel: 'Foundational Affirmative Action',
        coreDoctrine: '50% Cap & Creamy Layer in OBCs',
        ratioDecidendi: 'Backward classes can be classified into backward and more backward. Introduced the Creamy Layer doctrine, but kept it limited to OBCs.',
        courtroomApplication: 'The universal benchmark for testing validity of all reservation quotas under Articles 15 and 16.',
        color: '#64748b'
      },
      {
        id: 'chinnaiah-2004',
        year: 2004,
        caseName: 'E.V. Chinnaiah v. State of Andhra Pradesh',
        citation: '(2005) 1 SCC 394',
        bench: '5-Judge Bench (Unanimous)',
        actionType: 'EXPANDED',
        relationLabel: 'Homogeneity Doctrine (Overruled)',
        coreDoctrine: 'Scheduled Castes Form a Single Indivisible Monolith',
        ratioDecidendi: 'Held that SCs notified under Article 341 form a single homogenous group. States have no power under Article 16(4) to sub-classify or create sub-quotas.',
        courtroomApplication: 'Historically barred all States (Punjab, Haryana, AP, Tamil Nadu) from giving preferential quotas to Mahadalits, Valmikis, or Arunthathiyars.',
        color: '#ef4444'
      },
      {
        id: 'nagaraj-2006',
        year: 2006,
        caseName: 'M. Nagaraj v. Union of India',
        citation: '(2006) 8 SCC 212',
        bench: '5-Judge Bench (Unanimous)',
        actionType: 'REASSERTED',
        relationLabel: 'Compelling State Reasons',
        coreDoctrine: 'Quantifiable Data Requirement for SC/ST Promotions',
        ratioDecidendi: 'Upheld reservation in promotions for SCs/STs, but made it conditional on the State demonstrating backwardness, inadequacy of representation, and administrative efficiency.',
        courtroomApplication: 'Constantly invoked by service lawyers to challenge or defend SC/ST promotion rosters across government departments.',
        color: '#f59e0b'
      },
      {
        id: 'davinder-singh-2024',
        year: 2024,
        caseName: 'State of Punjab v. Davinder Singh',
        citation: '2024 INSC 562 / (2024) 8 SCC 1',
        bench: '7-Judge Bench (6:1 Majority)',
        actionType: 'OVERRULED',
        relationLabel: 'Overruled E.V. Chinnaiah (2004)',
        coreDoctrine: 'Sub-Classification & Creamy Layer in SCs/STs Allowed',
        ratioDecidendi: 'Expressly overruled Chinnaiah. SCs do not constitute a homogenous class. States can create sub-quotas based on empirical data to benefit the most deprived, and Creamy Layer must apply to SCs/STs.',
        courtroomApplication: 'The ruling governing all state reservation policies, empowering targeted quotas for weaker sub-castes within SC/ST categories.',
        color: '#10b981'
      }
    ]
  },
  {
    id: 'shelter-demolitions-lineage',
    title: 'Right to Shelter & Anti-Demolition Due Process',
    subtitle: 'From Olga Tellis (1985) to Pan-India Bulldozer Justice Guidelines (2024)',
    articleAnchor: 'Articles 14, 21, 300A',
    description: 'The journey of Article 21 protecting human shelter from summary eviction, culminating in the 2024 pan-India guidelines against extra-judicial punitive demolitions.',
    nodes: [
      {
        id: 'olga-tellis-1985',
        year: 1985,
        caseName: 'Olga Tellis v. Bombay Municipal Corporation',
        citation: '(1985) 3 SCC 545',
        bench: '5-Judge Bench (Unanimous)',
        actionType: 'ORIGIN',
        relationLabel: 'Livelihood & Shelter under Article 21',
        coreDoctrine: 'Right to Livelihood is Inseparable from Life',
        ratioDecidendi: 'Evicting pavement and slum dwellers without notice and hearing deprives them of livelihood and violates Article 21. Natural justice is mandatory before any demolition.',
        courtroomApplication: 'The foundational case cited whenever municipal or urban bodies attempt summary eviction without statutory process.',
        color: '#64748b'
      },
      {
        id: 'chameli-singh-1996',
        year: 1996,
        caseName: 'Chameli Singh v. State of U.P.',
        citation: '(1996) 2 SCC 549',
        bench: '3-Judge Bench',
        actionType: 'EXPANDED',
        relationLabel: 'Right to Shelter as a Basic Human Right',
        coreDoctrine: 'Shelter is Integral to Meaningful Existence',
        ratioDecidendi: 'Right to live under Article 21 is not animal existence. It encompasses adequate nutrition, clothing, and shelter to develop as a human being.',
        courtroomApplication: 'Bedrock authority cited in land acquisition and public housing entitlement petitions.',
        color: '#38bdf8'
      },
      {
        id: 'bulldozer-guidelines-2024',
        year: 2024,
        caseName: 'In re: Demolition of Structures (Bulldozer Justice Guidelines)',
        citation: '2024 INSC 866 / 2024 SCC OnLine SC 3291',
        bench: '2-Judge Bench (Gavai & Viswanathan JJ)',
        actionType: 'EXPANDED',
        relationLabel: 'Pan-India Anti-Bulldozer Guidelines',
        coreDoctrine: 'Separation of Powers & Prohibition of Punitive Demolitions',
        ratioDecidendi: 'Executive cannot act as judge and raze properties of criminal accused. Mandated 15-day show-cause notice, personal hearing, video recording, and personal restitution liability on erring officers.',
        courtroomApplication: 'The definitive pan-India protocol governing every demolition drive by police or municipal authorities nationwide.',
        color: '#10b981'
      }
    ]
  },
  {
    id: 'minority-institutions-lineage',
    title: 'Article 30 Minority Educational Institutions',
    subtitle: 'From Statutory Negation in Azeez Basha to the Genesis Test in AMU (2024)',
    articleAnchor: 'Articles 29, 30',
    description: 'How the Supreme Court dismantled the 57-year-old formalistic view of Azeez Basha and adopted the substantive Genesis Test for minority institutions.',
    nodes: [
      {
        id: 'azeez-basha-1967',
        year: 1967,
        caseName: 'S. Azeez Basha v. Union of India',
        citation: '(1968) 1 SCR 833',
        bench: '5-Judge Bench (Unanimous)',
        actionType: 'ORIGIN',
        relationLabel: 'Statutory Incorporation Bar (Overruled)',
        coreDoctrine: 'Parliamentary Statute Negates Minority Establishment',
        ratioDecidendi: 'Held that AMU was established by the British imperial legislature through the 1920 Act, not by Muslims; hence Article 30(1) was unavailable to statutory universities.',
        courtroomApplication: 'The historical barrier cited by Union Governments to deny minority status to AMU and other statutory universities.',
        color: '#ef4444'
      },
      {
        id: 'tma-pai-2002',
        year: 2002,
        caseName: 'T.M.A. Pai Foundation v. State of Karnataka',
        citation: '(2002) 8 SCC 481',
        bench: '11-Judge Bench (6:5)',
        actionType: 'EXPANDED',
        relationLabel: 'State as Unit of Minority Determination',
        coreDoctrine: 'Autonomy of Minority Educational Institutions',
        ratioDecidendi: 'The unit for determining religious or linguistic minority status is the State, not India as a whole. Aided minority institutions retain core administrative autonomy.',
        courtroomApplication: 'The magna carta governing all minority schools, colleges, and admission quotas in India.',
        color: '#38bdf8'
      },
      {
        id: 'amu-2024',
        year: 2024,
        caseName: 'Aligarh Muslim University v. Naresh Agarwal',
        citation: '2024 INSC 856 / 2024 SCC OnLine SC 3230',
        bench: '7-Judge Bench (4:3 Majority)',
        actionType: 'OVERRULED',
        relationLabel: 'Overruled S. Azeez Basha (1967)',
        coreDoctrine: 'The Genesis Test for Article 30(1)',
        ratioDecidendi: 'Overruled Azeez Basha. Formal statutory incorporation by Parliament does not extinguish minority character. The true test is who conceived, founded, and funded the institution.',
        courtroomApplication: 'The modern authority protecting historic minority institutions from being stripped of Article 30 status merely due to statutory recognition.',
        color: '#10b981'
      }
    ]
  },
  {
    id: 'court-stay-writs-lineage',
    title: 'Writ Remedies & Automatic Stay Expiration',
    subtitle: 'From Automatic 6-Month Stay Vacation to Judicial Application in 2024',
    articleAnchor: 'Articles 226, 227, 142',
    description: 'The rise and fall of the controversial Asian Resurfacing doctrine that automatically vacated court stays after six months.',
    nodes: [
      {
        id: 'asian-resurfacing-2018',
        year: 2018,
        caseName: 'Asian Resurfacing of Road Agency v. CBI',
        citation: '(2018) 16 SCC 299',
        bench: '3-Judge Bench',
        actionType: 'ORIGIN',
        relationLabel: 'Automated Stay Expiration (Overruled)',
        coreDoctrine: 'Automatic Vacation of Stays in 6 Months',
        ratioDecidendi: 'Directed under Article 142 that in all civil and criminal cases where a High Court stayed trial proceedings, the stay automatically lapsed after 6 months without an extension order.',
        courtroomApplication: 'Caused widespread procedural chaos in trial courts, forcing judges to resume stayed trials even when parties were not at fault for delay.',
        color: '#ef4444'
      },
      {
        id: 'hc-bar-allahabad-2024',
        year: 2024,
        caseName: 'High Court Bar Association Allahabad v. State of U.P.',
        citation: '2024 INSC 150 / (2024) 6 SCC 267',
        bench: '5-Judge Bench (Unanimous)',
        actionType: 'OVERRULED',
        relationLabel: 'Overruled Asian Resurfacing (2018)',
        coreDoctrine: 'High Court Stays Never Automatically Vacate',
        ratioDecidendi: 'Unanimously overruled Asian Resurfacing. Article 142 cannot be used to set automatic temporal clocks. A stay granted by a High Court remains valid until heard and vacated on judicial merits.',
        courtroomApplication: 'Crucial for trial courts and defense counsel: a High Court stay cannot be ignored by a Magistrate or Sessions Judge merely because 6 months have passed.',
        color: '#10b981'
      }
    ]
  },
  {
    id: 'remission-clemency-lineage',
    title: 'Remission of Sentences & Rule of Law Scrutiny',
    subtitle: 'From Maru Ram (1980) to the Quashing of Clemency in Bilkis Bano (2024)',
    articleAnchor: 'Articles 14, 21, 72, 161, Sec 432 CrPC',
    description: 'How constitutional scrutiny over executive clemency evolved from non-interference to stringent judicial review against arbitrariness and jurisdictional fraud.',
    nodes: [
      {
        id: 'maru-ram-1980',
        year: 1980,
        caseName: 'Maru Ram v. Union of India',
        citation: '(1981) 1 SCC 107',
        bench: '5-Judge Bench (Unanimous)',
        actionType: 'ORIGIN',
        relationLabel: 'Section 433A & Clemency Scrutiny',
        coreDoctrine: 'Executive Clemency is Subject to Judicial Review',
        ratioDecidendi: 'Upheld mandatory 14-year minimum imprisonment under Sec 433A CrPC. Held that executive clemency is a public trust, not private largesse, and cannot be exercised arbitrarily.',
        courtroomApplication: 'The landmark precedent governing life convict premature release policies and prison advisory boards.',
        color: '#64748b'
      },
      {
        id: 'epuru-sudhakar-2006',
        year: 2006,
        caseName: 'Epuru Sudhakar v. Govt. of A.P.',
        citation: '(2006) 8 SCC 161',
        bench: '2-Judge Bench',
        actionType: 'EXPANDED',
        relationLabel: 'Grounds of Judicial Review in Pardon',
        coreDoctrine: 'Pardon Vitiated by Mala Fides or Political Bias',
        ratioDecidendi: 'Pardoning power under Articles 72/161 can be struck down if granted without application of mind, based on extraneous political considerations, or in violation of natural justice.',
        courtroomApplication: 'Cited whenever a Governor or President grants clemency to politically connected convicts.',
        color: '#38bdf8'
      },
      {
        id: 'bilkis-rasool-2024',
        year: 2024,
        caseName: 'Bilkis Yakub Rasool v. Union of India',
        citation: '2024 INSC 24 / (2024) 5 SCC 481',
        bench: '2-Judge Bench (Nagarathna & Bhuyan JJ)',
        actionType: 'EXPANDED',
        relationLabel: 'Quashed Remission for Fraud on Power',
        coreDoctrine: 'Appropriate Government is State of Conviction',
        ratioDecidendi: 'Quashed remission of 11 life convicts. The State of conviction (Maharashtra) alone has jurisdiction under Section 432(7) CrPC. Orders passed through usurpation of power and fraud on court are null and void.',
        courtroomApplication: 'Cardinal precedent for Prosecuting Officers on jurisdiction, remission protocols, and victim participation in criminal sentencing.',
        color: '#10b981'
      }
    ]
  }

];

export const PrecedentLineageSVG: React.FC = () => {
  const [selectedLineageId, setSelectedLineageId] = useState<string>('art-21-liberty');
  const currentLineage = PRECEDENT_LINEAGES.find((l) => l.id === selectedLineageId) || PRECEDENT_LINEAGES[0];
  const [selectedNodeId, setSelectedNodeId] = useState<string>(currentLineage.nodes[2].id);

  const activeNode = currentLineage.nodes.find((n) => n.id === selectedNodeId) || currentLineage.nodes[0];

  const handleLineageChange = (id: string) => {
    setSelectedLineageId(id);
    const newLineage = PRECEDENT_LINEAGES.find((l) => l.id === id) || PRECEDENT_LINEAGES[0];
    setSelectedNodeId(newLineage.nodes[2]?.id || newLineage.nodes[0].id);
  };

  return (
    <div className="w-full flex flex-col gap-6 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <GitBranch className="w-5 h-5 text-[var(--accent)]" />
            <h3 className="text-xl font-bold text-[var(--text-primary)]">
              Interactive Precedent Lineage Visualizer
            </h3>
            <span className="text-xs px-2.5 py-0.5 rounded font-mono bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
              8 Landmark Judicial Trees
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            Explore how the Supreme Court of India evolved, deepened, and occasionally overruled monumental constitutional doctrines.
          </p>
        </div>

        {/* Lineage Selector Pill Menu */}
        <div className="flex flex-wrap items-center gap-1.5">
          {PRECEDENT_LINEAGES.map((lineage) => {
            const isSelected = lineage.id === selectedLineageId;
            return (
              <button
                key={lineage.id}
                onClick={() => handleLineageChange(lineage.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  isSelected
                    ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold shadow-sm'
                    : 'bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                }`}
              >
                {lineage.title.split('&')[0].trim()}
              </button>
            );
          })}
        </div>
      </div>

      {/* Lineage Description Banner */}
      <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-sm font-bold text-[var(--text-primary)]">{currentLineage.title}</span>
            <span className="text-xs px-2 py-0.2 rounded font-mono bg-[var(--bg-surface-elevated)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
              Anchor: {currentLineage.articleAnchor}
            </span>
          </div>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            {currentLineage.description}
          </p>
        </div>
      </div>

      {/* SVG Vector Canvas */}
      <div className="w-full overflow-x-auto pb-2">
        <svg
          viewBox="0 0 960 220"
          className="w-full h-auto select-none font-mono"
        >
          {/* Subtle Dot Grid Background Pattern */}
          <defs>
            <pattern id="precedent-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="var(--border-subtle)" opacity="0.6" />
            </pattern>
            {/* Arrow Marker */}
            <marker
              id="arrowhead"
              markerWidth="8"
              markerHeight="6"
              refX="7"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 8 3, 0 6" fill="var(--border-strong)" />
            </marker>
          </defs>

          <rect width="960" height="220" fill="url(#precedent-grid)" rx="12" />

          {/* Dynamic Evolutionary Backbone Rail */}
          {(() => {
            const totalNodes = currentLineage.nodes.length;
            const padX = 110;
            const usableWidth = 960 - 2 * padX;
            const stepX = totalNodes > 1 ? usableWidth / (totalNodes - 1) : 0;
            const startX = padX;
            const endX = padX + (totalNodes - 1) * stepX;

            return (
              <>
                <line
                  x1={startX}
                  y1="105"
                  x2={endX}
                  y2="105"
                  stroke="var(--border-strong)"
                  strokeWidth="2.5"
                  strokeDasharray="6 4"
                />

                {/* Nodes and Links */}
                {currentLineage.nodes.map((node, index) => {
                  const x = startX + index * stepX;
                  const isSelected = selectedNodeId === node.id;
                  const isLast = index === totalNodes - 1;
                  const distToNext = stepX;

                  // Clean display name
                  const shortName = node.caseName.includes('(') && node.caseName.includes(')')
                    ? node.caseName.split('(')[1].replace(')', '').trim()
                    : node.caseName.split(' v. ')[0].replace('In re ', '').trim();

                  return (
                    <g
                      key={node.id}
                      className="cursor-pointer transition-transform duration-200"
                      onClick={() => setSelectedNodeId(node.id)}
                      transform={`translate(${x}, 105)`}
                    >
                      {/* Connecting directional line segment */}
                      {!isLast && (
                        <line
                          x1="26"
                          y1="0"
                          x2={distToNext - 26}
                          y2="0"
                          stroke={isSelected ? node.color : 'var(--border-strong)'}
                          strokeWidth={isSelected ? '2.5' : '1.5'}
                          markerEnd="url(#arrowhead)"
                        />
                      )}

                      {/* Node Outer Halo for Active Selection */}
                      {isSelected && (
                        <circle
                          cx="0"
                          cy="0"
                          r="26"
                          fill="none"
                          stroke={node.color}
                          strokeWidth="2"
                          strokeDasharray="3 3"
                        />
                      )}

                      {/* Main Node Circle */}
                      <circle
                        cx="0"
                        cy="0"
                        r={isSelected ? 20 : 15}
                        fill={isSelected ? node.color : 'var(--bg-surface)'}
                        stroke={node.color}
                        strokeWidth="2.5"
                        className="transition-all duration-200 hover:scale-110 shadow-sm"
                      />

                      {/* Year in Center of Node */}
                      <text
                        x="0"
                        y={isSelected ? '4' : '3'}
                        textAnchor="middle"
                        fontSize={isSelected ? '10' : '9'}
                        fontWeight="bold"
                        fill={isSelected ? '#000000' : 'var(--text-primary)'}
                      >
                        {node.year}
                      </text>

                      {/* Top Badge: Action Type */}
                      <g transform="translate(0, -32)">
                        <rect
                          x="-50"
                          y="-11"
                          width="100"
                          height="18"
                          rx="9"
                          fill="var(--bg-surface-elevated)"
                          stroke={node.color}
                          strokeWidth={isSelected ? '1.5' : '0.8'}
                        />
                        <text
                          x="0"
                          y="2"
                          textAnchor="middle"
                          fontSize="8"
                          fontWeight="bold"
                          fill={node.color}
                        >
                          {node.actionType}
                        </text>
                      </g>

                      {/* Bottom Label: Case Short Name & Bench */}
                      <g transform="translate(0, 36)">
                        <rect
                          x="-65"
                          y="-8"
                          width="130"
                          height="32"
                          rx="6"
                          fill={isSelected ? 'var(--bg-surface-elevated)' : 'var(--bg-base)'}
                          stroke={isSelected ? node.color : 'var(--border-subtle)'}
                          strokeWidth={isSelected ? '1.2' : '0.6'}
                        />
                        <text
                          x="0"
                          y="6"
                          textAnchor="middle"
                          fontSize="9"
                          fontWeight="bold"
                          fill={isSelected ? 'var(--text-primary)' : 'var(--text-secondary)'}
                        >
                          {shortName.length > 18 ? shortName.slice(0, 16) + '..' : shortName}
                        </text>
                        <text
                          x="0"
                          y="18"
                          textAnchor="middle"
                          fontSize="7.5"
                          fill="var(--text-muted)"
                        >
                          {node.year} • {node.bench.split(' ')[0]}
                        </text>
                      </g>
                    </g>
                  );
                })}
              </>
            );
          })()}
        </svg>
      </div>

      {/* Selected Precedent Deep Dossier Card */}
      <div className="p-5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] flex flex-col gap-4 shadow-sm animate-fadeIn">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[var(--border-subtle)]">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span
                className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider"
                style={{ backgroundColor: `${activeNode.color}22`, color: activeNode.color }}
              >
                {activeNode.actionType}: {activeNode.relationLabel}
              </span>
              <span className="text-xs font-mono text-[var(--text-muted)]">
                {activeNode.citation}
              </span>
              <span className="text-xs px-2 py-0.5 rounded font-mono bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                {activeNode.bench}
              </span>
            </div>
            <h4 className="text-lg font-bold text-[var(--text-primary)] break-words">
              {activeNode.caseName} ({activeNode.year})
            </h4>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-3 py-1 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--accent)] font-semibold">
              {activeNode.coreDoctrine}
            </span>
          </div>
        </div>

        {/* Ratio Decidendi */}
        <div className="flex flex-col gap-1.5">
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5">
            <Scale className="w-3.5 h-3.5 text-[var(--accent)]" />
            Ratio Decidendi & Constitutional Holding
          </span>
          <p className="text-sm text-[var(--text-primary)] leading-relaxed bg-[var(--bg-base)] p-3.5 rounded-lg border border-[var(--border-subtle)] font-serif italic">
            "{activeNode.ratioDecidendi}"
          </p>
        </div>

        {/* Courtroom Application Guide */}
        <div className="flex flex-col gap-1.5">
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-[var(--gold)]" />
            How Courts & Advocates Apply This Today
          </span>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed bg-[var(--bg-base)] p-3 rounded-lg border border-[var(--border-subtle)]">
            {activeNode.courtroomApplication}
          </p>
        </div>
      </div>
    </div>
  );
};
