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
              5 Landmark Judicial Trees
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
          viewBox="0 0 960 210"
          className="w-full min-w-[760px] h-auto select-none font-mono"
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

          <rect width="960" height="210" fill="url(#precedent-grid)" rx="12" />

          {/* Evolutionary Backbone Line */}
          <line
            x1="80"
            y1="105"
            x2="880"
            y2="105"
            stroke="var(--border-strong)"
            strokeWidth="3"
            strokeDasharray="6 4"
          />

          {/* Nodes and Links */}
          {currentLineage.nodes.map((node, index) => {
            const x = 90 + index * 195;
            const isSelected = selectedNodeId === node.id;
            const isLast = index === currentLineage.nodes.length - 1;

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
                    x1="28"
                    y1="0"
                    x2="167"
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
                    className="animate-spin-slow"
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

                {/* Year in Center of Node or Top */}
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
                    x="-45"
                    y="-11"
                    width="90"
                    height="18"
                    rx="9"
                    fill="var(--bg-surface-elevated)"
                    stroke={node.color}
                    strokeWidth="1"
                  />
                  <text
                    x="0"
                    y="2"
                    textAnchor="middle"
                    fontSize="8.5"
                    fontWeight="bold"
                    fill={node.color}
                  >
                    {node.actionType}
                  </text>
                </g>

                {/* Bottom Label: Case Short Name */}
                <g transform="translate(0, 36)">
                  <text
                    x="0"
                    y="0"
                    textAnchor="middle"
                    fontSize="9.5"
                    fontWeight="bold"
                    fill={isSelected ? 'var(--text-primary)' : 'var(--text-secondary)'}
                  >
                    {node.caseName.length > 22
                      ? node.caseName.substring(0, 20) + '...'
                      : node.caseName}
                  </text>
                  <text
                    x="0"
                    y="13"
                    textAnchor="middle"
                    fontSize="8"
                    fill="var(--text-muted)"
                  >
                    {node.bench.split(' ')[0]}
                  </text>
                </g>
              </g>
            );
          })}
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
            <h4 className="text-lg font-bold text-[var(--text-primary)]">
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
