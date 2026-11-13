import React from 'react';
import {
  Eye,
  Shield,
  BookOpen,
  Scale,
  GitBranch,
  Layers,
  AlertTriangle,
  History,
  FileText,
  Calendar,
  Landmark,
  UserCheck,
  Vote,
  Compass
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { WritsMatrixSVG } from '../VectorDiagrams/WritsMatrixSVG';
import { PreambleArchitectureSVG } from '../VectorDiagrams/PreambleArchitectureSVG';
import { SeparationOfPowersSVG } from '../VectorDiagrams/SeparationOfPowersSVG';
import { AmendmentPipelineSVG } from '../VectorDiagrams/AmendmentPipelineSVG';
import { FederalRelationsSVG } from '../VectorDiagrams/FederalRelationsSVG';
import { EmergencyMatrixSVG } from '../VectorDiagrams/EmergencyMatrixSVG';
import { BasicStructureEvolutionSVG } from '../VectorDiagrams/BasicStructureEvolutionSVG';
import { Article21EvolutionSVG } from '../VectorDiagrams/Article21EvolutionSVG';
import { LegislativePassageSVG } from '../VectorDiagrams/LegislativePassageSVG';
import { SchedulesGenealogySVG } from '../VectorDiagrams/SchedulesGenealogySVG';
import { GSTCouncilFiscalSVG } from '../VectorDiagrams/GSTCouncilFiscalSVG';
import { CivilServicesSafeguardsSVG } from '../VectorDiagrams/CivilServicesSafeguardsSVG';
import { ElectoralArchitectureSVG } from '../VectorDiagrams/ElectoralArchitectureSVG';
import { AsymmetricFederalismSVG } from '../VectorDiagrams/AsymmetricFederalismSVG';
import { PrecedentLineageSVG } from '../VectorDiagrams/PrecedentLineageSVG';

interface DiagramItem {
  id: string;
  title: string;
  category: string;
  articles: string;
  icon: React.ReactNode;
  component: React.ReactNode;
  summary: string;
}

const DIAGRAMS: DiagramItem[] = [
  {
    id: 'writs-matrix',
    title: 'The 5 Constitutional Writs Matrix',
    category: 'Remedies & Part III',
    articles: 'Articles 32 & 226',
    icon: <Shield className="w-4 h-4" />,
    component: <WritsMatrixSVG />,
    summary: 'Interactive comparative blueprint of Habeas Corpus, Mandamus, Prohibition, Certiorari, and Quo-Warranto.'
  },
  {
    id: 'preamble-arch',
    title: 'The Preamble Architecture',
    category: 'Foundational Philosophy',
    articles: 'Preamble',
    icon: <BookOpen className="w-4 h-4" />,
    component: <PreambleArchitectureSVG />,
    summary: 'Deconstructs the 4-stage ideological pipeline, popular sovereignty, and 42nd Amendment modifications.'
  },
  {
    id: 'separation-powers',
    title: 'Separation of Powers & Checks and Balances',
    category: 'Governance Mechanics',
    articles: 'Articles 50, 75, 124, 368',
    icon: <Scale className="w-4 h-4" />,
    component: <SeparationOfPowersSVG />,
    summary: 'Triangular balance between Legislature, Executive, and Judiciary with constitutional check vectors.'
  },
  {
    id: 'amendment-pipeline',
    title: 'Article 368 Amendment Engine',
    category: 'Constituent Power',
    articles: 'Article 368',
    icon: <GitBranch className="w-4 h-4" />,
    component: <AmendmentPipelineSVG />,
    summary: 'Three amendment tracks filtered through the Basic Structure Judicial Shield.'
  },
  {
    id: 'federal-relations',
    title: 'Federal 7th Schedule & Overriding Vectors',
    category: 'Federal Architecture',
    articles: 'Articles 246 & 248',
    icon: <Layers className="w-4 h-4" />,
    component: <FederalRelationsSVG />,
    summary: 'Union, State, and Concurrent lists with the 5 central overriding pathways.'
  },
  {
    id: 'gst-fiscal-federalism',
    title: 'GST Council & Fiscal Federalism Pipeline',
    category: 'Financial Architecture',
    articles: 'Articles 279A, 280, 266',
    icon: <Landmark className="w-4 h-4" />,
    component: <GSTCouncilFiscalSVG />,
    summary: 'Cooperative fiscal voting weights (1/3 Centre, 2/3 States), Finance Commission, and constitutional funds.'
  },
  {
    id: 'civil-services-safeguards',
    title: 'Civil Services Safeguards & Article 311',
    category: 'Public Administration',
    articles: 'Articles 310, 311, 312',
    icon: <UserCheck className="w-4 h-4" />,
    component: <CivilServicesSafeguardsSVG />,
    summary: 'Twin shields under Art 311(1) & (2), the 3 exceptional provisos, and All-India Services.'
  },
  {
    id: 'electoral-architecture',
    title: 'Electoral Democracy & ECI Structure',
    category: 'Electoral Governance',
    articles: 'Articles 324 to 329',
    icon: <Vote className="w-4 h-4" />,
    component: <ElectoralArchitectureSVG />,
    summary: 'Superintendence of elections, adult franchise under Art 326, single general roll, and bar on court interference.'
  },
  {
    id: 'asymmetric-federalism',
    title: 'Asymmetric Federalism & Special States',
    category: 'Special Provisions',
    articles: 'Articles 371 to 371-J',
    icon: <Compass className="w-4 h-4" />,
    component: <AsymmetricFederalismSVG />,
    summary: 'Autonomous constitutional safeguards and customary protections across 11 diverse States.'
  },
  {
    id: 'precedent-lineage',
    title: 'Precedent Lineage & Judicial Evolution',
    category: 'Judicial Precedent',
    articles: '8 Landmark Judicial Trees',
    icon: <GitBranch className="w-4 h-4" />,
    component: <PrecedentLineageSVG />,
    summary: 'Evolutionary vector trees tracking how the Supreme Court developed, deepened, and occasionally overruled major constitutional precedents.'
  },
  {
    id: 'emergency-matrix',
    title: 'Emergency Matrix & Rights Suspension Gauge',
    category: 'Crisis Governance',
    articles: 'Articles 352, 356, 360',
    icon: <AlertTriangle className="w-4 h-4" />,
    component: <EmergencyMatrixSVG />,
    summary: 'Comparative analysis of National, State, and Financial emergencies with Art 20 & 21 immunity.'
  },
  {
    id: 'basic-structure-evolution',
    title: 'Basic Structure Evolution Chronology',
    category: 'Judicial History',
    articles: '1951 to 2007',
    icon: <History className="w-4 h-4" />,
    component: <BasicStructureEvolutionSVG />,
    summary: 'The 56-year constitutional battle from Shankari Prasad through Kesavananda to I.R. Coelho.'
  },
  {
    id: 'article-21-evolution',
    title: 'Article 21 Evolution (Gopalan to Puttaswamy)',
    category: 'Fundamental Rights',
    articles: 'Article 21',
    icon: <Eye className="w-4 h-4" />,
    component: <Article21EvolutionSVG />,
    summary: 'Metamorphosis from formalist procedure to the Golden Triangle and proportionality privacy.'
  },
  {
    id: 'legislative-passage',
    title: 'Legislative Bill Passage & Veto Architecture',
    category: 'Parliamentary Procedure',
    articles: 'Articles 107 – 111',
    icon: <FileText className="w-4 h-4" />,
    component: <LegislativePassageSVG />,
    summary: 'Ordinary vs Money vs Constitutional Amendment bill trajectories and presidential veto mechanics.'
  },
  {
    id: 'schedules-genealogy',
    title: 'The 12 Schedules Architecture',
    category: 'Structural Catalog',
    articles: 'Schedules 1 – 12',
    icon: <Calendar className="w-4 h-4" />,
    component: <SchedulesGenealogySVG />,
    summary: 'Mnemonic "TEARS OF OLD PM" framework mapping all 12 constitutional schedules.'
  }
];

export const VisualLabView: React.FC = () => {
  const { selectedSvgId, setSelectedSvgId } = useTheme();
  const activeDiagram = DIAGRAMS.find((d) => d.id === selectedSvgId) || DIAGRAMS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-8 animate-fadeIn">
      {/* Title & Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-pulse shrink-0" />
            <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Visual Law Lab
            </h1>
            <span className="text-xs px-2.5 py-0.5 rounded font-mono bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)] shrink-0">
              15 Bespoke Vector Blueprints
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            Explore complex constitutional mechanisms, procedural pipelines, and historical shifts through interactive editorial SVGs.
          </p>
        </div>
      </div>

      {/* Blueprint Selector Grid (15 items: perfectly fills 3x5 or 5x3) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
        {DIAGRAMS.map((item) => {
          const isSelected = item.id === activeDiagram.id;
          return (
            <button
              key={item.id}
              onClick={() => setSelectedSvgId(item.id)}
              className={`p-2.5 rounded-xl border text-left flex flex-col justify-between transition-all ${
                isSelected
                  ? 'bg-[var(--bg-surface-elevated)] border-[var(--accent)] shadow-md ring-1 ring-[var(--accent)]/30'
                  : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={`p-1.5 rounded-lg ${isSelected ? 'bg-[var(--accent)] text-[var(--accent-contrast)]' : 'bg-[var(--bg-base)] text-[var(--text-muted)]'}`}>
                  {item.icon}
                </span>
                <span className="text-[9px] font-mono text-[var(--text-muted)]">
                  {item.articles.split(' ')[0]}
                </span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-[var(--text-primary)] line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-[10px] text-[var(--text-secondary)] line-clamp-1 mt-0.5">
                  {item.category}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Blueprint Presentation */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold text-[var(--accent)]">
              {activeDiagram.category}
            </span>
            <span className="text-xs text-[var(--text-muted)]">•</span>
            <span className="text-xs font-mono text-[var(--text-muted)]">
              {activeDiagram.articles}
            </span>
          </div>
          <span className="text-xs text-[var(--text-secondary)] hidden sm:block">
            {activeDiagram.summary}
          </span>
        </div>

        {/* The Rendered Interactive Component */}
        <div className="w-full">
          {activeDiagram.component}
        </div>
      </div>
    </div>
  );
};
