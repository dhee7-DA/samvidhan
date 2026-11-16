import React, { useState } from 'react';
import {
  Award,
  GitBranch,
  Calendar,
  Scale,
  Users,
  CheckCircle2,
  ChevronRight,
  Shield,
  Sparkles,
  ArrowRight,
  Filter,
  Search,
  BookOpen
} from 'lucide-react';

export interface PrecedentNode {
  id: string;
  year: number;
  caseName: string;
  citation: string;
  benchSize: number;
  benchType: string;
  majorityDissent: string;
  authoringJudges: string;
  coreRatio: string;
  statutoryImpact: string;
  paradigmShift: string;
  status: 'Overruled' | 'Binding Law' | 'Expanded / Reaffirmed' | 'Modified';
}

export interface LineageChain {
  id: string;
  title: string;
  articleAnchor: string;
  description: string;
  nodes: PrecedentNode[];
}

export const PRECEDENT_LINEAGES: LineageChain[] = [
  {
    id: 'art-21-liberty',
    title: 'Personal Liberty, Due Process & Privacy',
    articleAnchor: 'Article 21 (Life & Personal Liberty)',
    description: 'The monumental constitutional transition from Gopalan\'s narrow textualist "Procedure Established by Law" to Maneka\'s Substantive Due Process, Puttaswamy\'s Privacy, and Supriyo\'s Queer Dignity.',
    nodes: [
      {
        id: 'gopalan-1950',
        year: 1950,
        caseName: 'A.K. Gopalan v. State of Madras',
        citation: 'AIR 1950 SC 27',
        benchSize: 6,
        benchType: 'Constitution Bench',
        majorityDissent: '5:1 Majority',
        authoringJudges: 'Kania C.J., Patanjali Sastri J. (Fazl Ali J. dissenting)',
        coreRatio: 'Held that "Procedure Established by Law" strictly means valid state-enacted statutory law, not American "Due Process of Law". Held Articles 19 and 21 are mutually exclusive silos.',
        statutoryImpact: 'Preventive detention upheld on narrow textual grounds; judicial review limited to procedural compliance without evaluating substantive fairness.',
        paradigmShift: 'Narrow Textualist Era: Fundamental rights viewed as isolated islands rather than an interconnected organic charter.',
        status: 'Overruled'
      },
      {
        id: 'kharak-singh-1962',
        year: 1962,
        caseName: 'Kharak Singh v. State of U.P.',
        citation: 'AIR 1963 SC 1295',
        benchSize: 6,
        benchType: 'Constitution Bench',
        majorityDissent: '4:2 Majority',
        authoringJudges: 'Ayyangar J. (Subba Rao J. & Shah J. dissenting)',
        coreRatio: 'Struck down police domiciliary midnight visits as violative of personal liberty under Art 21, but majority held Right to Privacy was NOT a guaranteed constitutional right.',
        statutoryImpact: 'Subba Rao J.\'s powerful dissent sowed the seeds of privacy: "Nothing is more deleterious to a man\'s physical happiness and health than a calculated interference with his privacy."',
        paradigmShift: 'Transitional Era: Bodily integrity recognized, but privacy denied independent constitutional status.',
        status: 'Modified'
      },
      {
        id: 'maneka-gandhi-1978',
        year: 1978,
        caseName: 'Maneka Gandhi v. Union of India',
        citation: '(1978) 1 SCC 248',
        benchSize: 7,
        benchType: 'Constitution Bench',
        majorityDissent: 'Unanimous (7:0)',
        authoringJudges: 'Beg C.J., Bhagwati J., Chandrachud J., Krishna Iyer J.',
        coreRatio: 'Overruled Gopalan. Held procedure depriving life or personal liberty must satisfy the test of being "just, fair and reasonable" (Substantive Due Process). Established the Golden Triangle: Articles 14, 19, and 21 interpenetrate each other.',
        statutoryImpact: 'Section 10(3)(c) of Passports Act subjected to natural justice (audi alteram partem). Post-decisional hearing mandated.',
        paradigmShift: 'Golden Age of Judicial Activism: Re-wrote Indian jurisprudence by breathing natural justice and fundamental fairness into every legislative procedure.',
        status: 'Binding Law'
      },
      {
        id: 'puttaswamy-2017',
        year: 2017,
        caseName: 'Justice K.S. Puttaswamy (Retd.) v. Union of India',
        citation: '(2017) 10 SCC 1',
        benchSize: 9,
        benchType: 'Constitution Bench',
        majorityDissent: 'Unanimous (9:0)',
        authoringJudges: 'Khehar C.J., Chandrachud J., Chelameswar J., Nariman J., Kaul J.',
        coreRatio: 'Right to Privacy is an intrinsic Fundamental Right protected under Article 21 and Part III. Overruled M.P. Sharma (1954) and Kharak Singh (1962).',
        statutoryImpact: 'Laid down the 4-pronged Proportionality Test: 1. Legality (Statutory sanction) 2. Legitimate State Aim 3. Suitability 4. Necessity & Strict Proportionality.',
        paradigmShift: 'Digital Constitutionalism Era: Information privacy, informational self-determination, and bodily autonomy affirmed as inalienable fundamental rights.',
        status: 'Binding Law'
      },
      {
        id: 'supriyo-2023',
        year: 2023,
        caseName: 'Supriyo @ Supriya Chakraborty v. Union of India',
        citation: '(2023) 14 SCC 1',
        benchSize: 5,
        benchType: 'Constitution Bench',
        majorityDissent: '3:2 Majority',
        authoringJudges: 'Bhat J., Kohli J., Narasimha J. (Chandrachud C.J. & Kaul J. in minority)',
        coreRatio: 'Affirmed that queer individuals have a fundamental right under Article 21 to union, dignity, and freedom from state discrimination; but held there is no constitutional fundamental right to marry, which remains within the plenary legislative sphere of Parliament.',
        statutoryImpact: 'Directed Central Cabinet Secretary Committee to formulate administrative rights, banking, and medical rights for queer couples.',
        paradigmShift: 'Judicial Restraint & Plenary Separation: Acknowledges human dignity while deferring formal statutory marriage recognition to legislative enactment.',
        status: 'Binding Law'
      }
    ]
  },
  {
    id: 'art-368-basic-structure',
    title: 'Constituent Power & Basic Structure Lineage',
    articleAnchor: 'Article 368 (Constitutional Amendment)',
    description: 'The monumental institutional tug-of-war between Parliamentary Supremacy and Judicial Independence that birthed the world-renowned Basic Structure Doctrine.',
    nodes: [
      {
        id: 'shankari-prasad-1951',
        year: 1951,
        caseName: 'Shankari Prasad Singh Deo v. Union of India',
        citation: 'AIR 1951 SC 458',
        benchSize: 5,
        benchType: 'Constitution Bench',
        majorityDissent: 'Unanimous (5:0)',
        authoringJudges: 'Patanjali Sastri J.',
        coreRatio: 'Upheld 1st Amendment Act, 1951 (inserting Articles 31A, 31B, 9th Schedule). Held "law" in Article 13(2) refers to ordinary legislative power, NOT constituent amending power under Article 368.',
        statutoryImpact: 'Parliament given unfettered authority to amend any constitutional provision including Fundamental Rights without judicial review under Art 13(2).',
        paradigmShift: 'Absolute Parliamentary Sovereignty Era.',
        status: 'Overruled'
      },
      {
        id: 'golak-nath-1967',
        year: 1967,
        caseName: 'I.C. Golak Nath v. State of Punjab',
        citation: 'AIR 1967 SC 1643',
        benchSize: 11,
        benchType: 'Constitution Bench',
        majorityDissent: '6:5 Majority',
        authoringJudges: 'Subba Rao C.J. (Wanchoo J. dissenting)',
        coreRatio: 'Overruled Shankari Prasad and Sajjan Singh. Held Article 368 contains only the procedure, not the constituent power to amend. An amendment is "law" under Article 13(2); Parliament CANNOT abridge Fundamental Rights.',
        statutoryImpact: 'Introduced the Doctrine of Prospective Overruling. Led to Parliament enacting 24th Amendment (1971) to expressly bypass Golak Nath.',
        paradigmShift: 'Fundamental Rights Transcendence: Elevated Part III to an unamendable pedestal.',
        status: 'Overruled'
      },
      {
        id: 'kesavananda-1973',
        year: 1973,
        caseName: 'Kesavananda Bharati v. State of Kerala',
        citation: '(1973) 4 SCC 225',
        benchSize: 13,
        benchType: '13-Judge Special Bench',
        majorityDissent: '7:6 Majority',
        authoringJudges: 'Sikri C.J., Hegde J., Mukherjea J., Shelat J., Grover J., Jaganmohan Reddy J., Khanna J.',
        coreRatio: 'Overruled Golak Nath. Held Parliament has constituent power under Article 368 to amend any part of the Constitution, including Part III, BUT CANNOT damage, destroy, or alter the "Basic Structure".',
        statutoryImpact: 'Saved Indian democracy by placing eternal constitutional guardrails: Supremacy of Constitution, Republican & Democratic form, Secularism, Separation of Powers, Federalism, Judicial Review.',
        paradigmShift: 'Birth of Basic Structure: The judicial master-stroke creating an implied constitutional limitation on amending power.',
        status: 'Binding Law'
      },
      {
        id: 'minerva-mills-1980',
        year: 1980,
        caseName: 'Minerva Mills Ltd. v. Union of India',
        citation: '(1980) 3 SCC 625',
        benchSize: 5,
        benchType: 'Constitution Bench',
        majorityDissent: '4:1 Majority',
        authoringJudges: 'Chandrachud C.J. (Bhagwati J. dissenting in part)',
        coreRatio: 'Struck down Clauses (4) and (5) of Article 368 (inserted by 42nd Amendment) which sought to grant unlimited amending power and exclude judicial review. Struck down blanket primacy of DPSPs over Arts 14 and 19 under Art 31C.',
        statutoryImpact: 'Established that the limited amending power of Parliament is itself a Basic Feature: a donee of a limited power cannot enlarge it into an absolute power.',
        paradigmShift: 'Consolidation of Balance: Part III and Part IV are like two wheels of a chariot; neither may crush the other.',
        status: 'Binding Law'
      },
      {
        id: 'ir-coelho-2007',
        year: 2007,
        caseName: 'I.R. Coelho (Dead) By LRs v. State of Tamil Nadu',
        citation: '(2007) 2 SCC 1',
        benchSize: 9,
        benchType: 'Constitution Bench',
        majorityDissent: 'Unanimous (9:0)',
        authoringJudges: 'Sabharwal C.J.',
        coreRatio: 'All laws inserted into the Ninth Schedule AFTER April 24, 1973 (date of Kesavananda) are subject to judicial review. If a law violates Fundamental Rights forming part of the Basic Structure, it shall be struck down.',
        statutoryImpact: 'Eliminated the Ninth Schedule as a black hole / vacuum of immunity for unconstitutional state legislation.',
        paradigmShift: 'Total Judicial Accountability: Closed the last loophole against arbitrary executive additions to the Ninth Schedule.',
        status: 'Binding Law'
      }
    ]
  },
  {
    id: 'art-14-equality',
    title: 'Equality & The Doctrine of Manifest Arbitrariness',
    articleAnchor: 'Article 14 (Equality Before Law)',
    description: 'The expansion of Article 14 from a formalistic classification test into an expansive constitutional weapon striking down arbitrary executive and legislative actions.',
    nodes: [
      {
        id: 'anwar-ali-1952',
        year: 1952,
        caseName: 'State of West Bengal v. Anwar Ali Sarkar',
        citation: 'AIR 1952 SC 75',
        benchSize: 7,
        benchType: 'Constitution Bench',
        majorityDissent: '6:1 Majority',
        authoringJudges: 'Fazl Ali J., Mahajan J., Mukherjea J., Chandrasekhara Aiyar J., Bose J.',
        coreRatio: 'Laid down the classic Two-Pronged Reasonable Classification Test: 1. The classification must be founded on an intelligible differentia. 2. The differentia must have a rational nexus to the statutory object.',
        statutoryImpact: 'Struck down Section 5(1) of West Bengal Special Courts Act for giving unguided discretion to state government to refer cases to special courts with summary procedure.',
        paradigmShift: 'Formal Equality Doctrine: Classification strictly scrutinized for statutory purpose.',
        status: 'Expanded / Reaffirmed'
      },
      {
        id: 'royappa-1974',
        year: 1974,
        caseName: 'E.P. Royappa v. State of Tamil Nadu',
        citation: '(1974) 4 SCC 3',
        benchSize: 5,
        benchType: 'Constitution Bench',
        majorityDissent: 'Unanimous (5:0)',
        authoringJudges: 'Bhagwati J. (for himself, Chandrachud & Krishna Iyer JJ.)',
        coreRatio: '"Equality is a dynamic concept with many aspects and dimensions and it cannot be \'cribbed, cabined and confined\' within traditional limits. Equality and arbitrariness are sworn enemies; one belongs to the rule of law, the other to the whim of an absolute monarch."',
        statutoryImpact: 'Established Non-Arbitrariness as the foundational test under Article 14, liberating it from the rigid classification formula.',
        paradigmShift: 'Substantive Equality Revolution: Arbitrary state action struck down even in absence of unequal classification.',
        status: 'Binding Law'
      },
      {
        id: 'shayara-bano-2017',
        year: 2017,
        caseName: 'Shayara Bano v. Union of India',
        citation: '(2017) 9 SCC 1',
        benchSize: 5,
        benchType: 'Constitution Bench',
        majorityDissent: '3:2 Majority',
        authoringJudges: 'Nariman J. (for himself & Lalit J.), Joseph J.',
        coreRatio: 'Articulated the Doctrine of Manifest Arbitrariness: Legislation or executive action can be struck down under Article 14 if it is irrational, lacks determining principle, or is capricious and disproportionate.',
        statutoryImpact: 'Struck down instant triple talaq (talaq-e-biddat). Settled that plenary primary legislation can be invalidated for manifest arbitrariness.',
        paradigmShift: 'Plenary Legislative Review: Confirms courts can strike down Parliamentary statutes directly for lack of determining principle.',
        status: 'Binding Law'
      },
      {
        id: 'navtej-2018',
        year: 2018,
        caseName: 'Navtej Singh Johar v. Union of India',
        citation: '(2018) 10 SCC 1',
        benchSize: 5,
        benchType: 'Constitution Bench',
        majorityDissent: 'Unanimous (5:0)',
        authoringJudges: 'Misra C.J., Khanwilkar J., Nariman J., Chandrachud J., Malhotra J.',
        coreRatio: 'Struck down Section 377 IPC to the extent it criminalized consensual adult intimacy. Applied manifest arbitrariness and transformative constitutionalism.',
        statutoryImpact: 'Affirmed Constitutional Morality over Majoritarian Morality. Recognized sexual orientation as a protected ground under Articles 14 and 15.',
        paradigmShift: 'Transformative Constitutionalism: The Constitution is an organic instrument for healing historical marginalization.',
        status: 'Binding Law'
      }
    ]
  },
  {
    id: 'art-356-federalism',
    title: 'Federalism & Article 356 (President’s Rule)',
    articleAnchor: 'Article 356 (State Emergency)',
    description: 'The historic shift from unfettered political misuse of Article 356 to stringent judicial review, floor tests, and democratic restoration in S.R. Bommai.',
    nodes: [
      {
        id: 'rajasthan-1977',
        year: 1977,
        caseName: 'State of Rajasthan v. Union of India',
        citation: '(1977) 3 SCC 592',
        benchSize: 7,
        benchType: 'Constitution Bench',
        majorityDissent: 'Unanimous (7:0)',
        authoringJudges: 'Beg C.J., Chandrachud J., Bhagwati J., Untwalia J., Fazal Ali J.',
        coreRatio: 'Upheld dissolution of 9 Congress-ruled state assemblies by Janata government. Held presidential satisfaction under Article 356 was subjective and largely non-justiciable except on narrow proof of mala fides.',
        statutoryImpact: 'Created a permissive regime allowing ruling parties at the Centre to summarily dismiss opposition state governments after general elections.',
        paradigmShift: 'Deference to Executive Era.',
        status: 'Overruled'
      },
      {
        id: 'bommai-1994',
        year: 1994,
        caseName: 'S.R. Bommai v. Union of India',
        citation: '(1994) 3 SCC 1',
        benchSize: 9,
        benchType: 'Constitution Bench',
        majorityDissent: 'Full Bench Ruling',
        authoringJudges: 'Sawant J., Kuldip Singh J., Jeevan Reddy J., Verma J., Ahmadi J.',
        coreRatio: '1. Federalism and Secularism are Basic Features. 2. Presidential satisfaction is subject to judicial review. 3. Legislative Assembly CANNOT be dissolved until Parliament approves the Proclamation under Art 356(3). 4. Floor test on the floor of the House is the only constitutional method to test majority, not the Governor\'s subjective report. 5. Courts have constitutional power to restore a dismissed ministry and resurrect a dissolved assembly.',
        statutoryImpact: 'Dramatically curtailed arbitrary invocations of Article 356 from an average of 4-5 per year to virtually zero unjustified dismissals.',
        paradigmShift: 'Federalism Guardrails: Established Indian federalism as a resilient structural bedrock.',
        status: 'Binding Law'
      },
      {
        id: 'rameshwar-2006',
        year: 2006,
        caseName: 'Rameshwar Prasad v. Union of India',
        citation: '(2006) 2 SCC 1',
        benchSize: 5,
        benchType: 'Constitution Bench',
        majorityDissent: '3:2 Majority',
        authoringJudges: 'Sabharwal C.J. (Pasayat & Balasubramanyan JJ. dissenting)',
        coreRatio: 'Quashed Bihar Assembly dissolution proclamation under Article 356 before its first meeting. Held Governor\'s report claiming post-election horse-trading without floor test was mala fide and unconstitutional.',
        statutoryImpact: 'Reinforced Bommai principles: Governor cannot act as an agent of the ruling party at the Centre.',
        paradigmShift: 'Re-affirmation of Democratic Legality.',
        status: 'Binding Law'
      }
    ]
  }
];

export const PrecedentLineageView: React.FC = () => {
  const [activeLineageId, setActiveLineageId] = useState<string>('art-21-liberty');
  const [selectedNodeId, setSelectedNodeId] = useState<string>('maneka-gandhi-1978');

  const currentLineage = PRECEDENT_LINEAGES.find((l) => l.id === activeLineageId) || PRECEDENT_LINEAGES[0];
  const selectedNode = currentLineage.nodes.find((n) => n.id === selectedNodeId) || currentLineage.nodes[0];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 via-indigo-950/30 to-card border border-purple-500/30 shadow-lg">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <GitBranch className="w-3.5 h-3.5" />
              <span>Constitutional Jurisprudence & Precedent Evolution (1950–2026)</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
              Landmark Precedent Lineage Trees
            </h1>
            <p className="text-sm text-muted-foreground mt-1 max-w-2xl">
              Trace how foundational constitutional doctrines evolved from 1950 to the present day. Examine bench compositions, majority vs dissent ratios, and doctrinal paradigm shifts.
            </p>
          </div>
        </div>

        {/* Lineage Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6 pt-5 border-t border-border/40">
          {PRECEDENT_LINEAGES.map((lineage) => {
            const isActive = lineage.id === activeLineageId;
            return (
              <button
                key={lineage.id}
                onClick={() => {
                  setActiveLineageId(lineage.id);
                  setSelectedNodeId(lineage.nodes[0].id);
                }}
                className={`p-4 rounded-xl border text-left transition-all ${
                  isActive
                    ? 'border-purple-500 bg-purple-500/15 shadow-md'
                    : 'border-border/60 bg-card/60 hover:bg-muted/30 hover:border-border'
                }`}
              >
                <span className="text-[10px] font-mono font-bold text-purple-400 block mb-1">
                  {lineage.articleAnchor.split('(')[0]}
                </span>
                <h4 className="text-xs md:text-sm font-bold text-foreground leading-snug">
                  {lineage.title}
                </h4>
                <span className="text-[11px] text-muted-foreground block mt-1">
                  {lineage.nodes.length} Key Landmark Judgments
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Split Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Interactive Timeline Flow */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 rounded-xl bg-card border border-border shadow-sm">
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1">
              Doctrinal Lineage Timeline
            </span>
            <p className="text-xs text-foreground/80 leading-relaxed">
              {currentLineage.description}
            </p>
          </div>

          <div className="relative pl-6 space-y-4 before:content-[''] before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-purple-500 before:via-indigo-500 before:to-emerald-500">
            {currentLineage.nodes.map((node, nIdx) => {
              const isSelected = node.id === selectedNode.id;
              let statusBadge = 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30';
              if (node.status === 'Overruled') {
                statusBadge = 'bg-rose-500/15 text-rose-300 border-rose-500/30';
              } else if (node.status === 'Modified') {
                statusBadge = 'bg-amber-500/15 text-amber-300 border-amber-500/30';
              }

              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`relative p-4 rounded-2xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'border-purple-500 bg-purple-500/15 shadow-lg translate-x-1'
                      : 'border-border/80 bg-card hover:border-purple-500/40 hover:bg-muted/20'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute -left-[19px] top-5 w-3 h-3 rounded-full border-2 border-background transition-all ${
                      isSelected ? 'bg-purple-400 ring-4 ring-purple-500/30' : 'bg-muted-foreground'
                    }`}
                  />

                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-mono font-black text-purple-400">
                      {node.year}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${statusBadge}`}>
                      {node.status}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-foreground leading-snug">
                    {node.caseName}
                  </h3>

                  <div className="flex items-center gap-2 mt-2 text-[11px] text-muted-foreground font-mono">
                    <span>{node.benchSize}-Judge Bench</span>
                    <span>·</span>
                    <span>{node.majorityDissent}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Deep Precedent Analytical Breakdown */}
        <div className="lg:col-span-7">
          <div className="p-6 md:p-8 rounded-3xl bg-card border border-purple-500/30 shadow-xl space-y-6 sticky top-6 animate-in fade-in">
            {/* Header */}
            <div className="border-b border-border/60 pb-4 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-md bg-purple-500/20 text-purple-300">
                  {selectedNode.benchType} · {selectedNode.benchSize}-Judge Bench ({selectedNode.year})
                </span>
                <span className="text-xs font-mono text-muted-foreground">
                  {selectedNode.citation}
                </span>
              </div>

              <h2 className="text-xl md:text-2xl font-black text-foreground tracking-tight">
                {selectedNode.caseName}
              </h2>

              <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground pt-1">
                <span>
                  <strong className="text-foreground">Majority/Dissent:</strong> {selectedNode.majorityDissent}
                </span>
                <span>
                  <strong className="text-foreground">Key Judges:</strong> {selectedNode.authoringJudges}
                </span>
              </div>
            </div>

            {/* Core Ratio Decidendi */}
            <div className="space-y-2">
              <span className="text-xs font-black uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
                <Award className="w-4 h-4" />
                <span>Binding Ratio Decidendi:</span>
              </span>
              <p className="text-sm md:text-base font-bold text-foreground leading-relaxed font-serif p-4 rounded-xl bg-purple-500/5 border border-purple-500/20">
                "{selectedNode.coreRatio}"
              </p>
            </div>

            {/* Statutory & Doctrinal Impact */}
            <div className="space-y-2">
              <span className="text-xs font-black uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
                <Scale className="w-4 h-4" />
                <span>Statutory & Courtroom Impact:</span>
              </span>
              <div className="p-4 rounded-xl bg-muted/30 border border-border/60 text-xs md:text-sm text-foreground/90 font-mono leading-relaxed">
                {selectedNode.statutoryImpact}
              </div>
            </div>

            {/* Paradigm Shift */}
            <div className="space-y-2">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>Jurisprudential Paradigm Shift:</span>
              </span>
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs md:text-sm text-foreground leading-relaxed">
                {selectedNode.paradigmShift}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
