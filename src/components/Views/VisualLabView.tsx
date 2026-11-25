import React, { useState, useMemo } from 'react';
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
  Compass,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Grid,
  Gavel,
  ShieldCheck,
  Crown,
  Building2,
  FileCheck2,
  Users,
  Home,
  MapPin,
  Search,
  X
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { WritsMatrixSVG } from '../VectorDiagrams/WritsMatrixSVG';
import { CriminalConstitutionalPipelineSVG } from '../VectorDiagrams/CriminalConstitutionalPipelineSVG';
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
import { ExecutiveClemencyArchitectureSVG } from '../VectorDiagrams/ExecutiveClemencyArchitectureSVG';
import { FundamentalRightsFunnelSVG } from '../VectorDiagrams/FundamentalRightsFunnelSVG';
import { DPSPvsFRHarmonySVG } from '../VectorDiagrams/DPSPvsFRHarmonySVG';
import { PresidentElectoralImpeachmentSVG } from '../VectorDiagrams/PresidentElectoralImpeachmentSVG';
import { SupremeCourtJurisdictionSVG } from '../VectorDiagrams/SupremeCourtJurisdictionSVG';
import { ParliamentaryHouseProceduresSVG } from '../VectorDiagrams/ParliamentaryHouseProceduresSVG';
import { GovernorAssentOrdinanceSVG } from '../VectorDiagrams/GovernorAssentOrdinanceSVG';
import { ReservationEvolutionSVG } from '../VectorDiagrams/ReservationEvolutionSVG';
import { LocalSelfGovernmentSVG } from '../VectorDiagrams/LocalSelfGovernmentSVG';
import { MajoritiesThresholdSVG } from '../VectorDiagrams/MajoritiesThresholdSVG';
import { TerritoryCitizenshipFlowSVG } from '../VectorDiagrams/TerritoryCitizenshipFlowSVG';

type DiagramTrack =
  | 'All'
  | 'Rights & Remedies'
  | 'Executive & Parliament'
  | 'Judiciary & Doctrines'
  | 'Federalism & Local Gov'
  | 'Bodies & Mechanics';

interface DiagramItem {
  id: string;
  title: string;
  category: string;
  track: Exclude<DiagramTrack, 'All'>;
  articles: string;
  icon: React.ReactNode;
  component: React.ReactNode;
  summary: string;
  isNew?: boolean;
}

const TRACKS: DiagramTrack[] = [
  'All',
  'Rights & Remedies',
  'Executive & Parliament',
  'Judiciary & Doctrines',
  'Federalism & Local Gov',
  'Bodies & Mechanics'
];

const DIAGRAMS: DiagramItem[] = [
  {
    id: 'fundamental-rights-funnel',
    title: 'Fundamental Rights Judicial Filter & Golden Triangle',
    category: 'Fundamental Rights',
    track: 'Rights & Remedies',
    articles: 'Articles 12 – 21',
    icon: <ShieldCheck className="w-4 h-4" />,
    component: <FundamentalRightsFunnelSVG />,
    summary: 'How challenged laws are filtered through Art 12 Statehood, Art 13 Eclipse/Severability, Art 14 Arbitrariness, and Art 19 Restrictions.',
    isNew: true
  },
  {
    id: 'dpsp-fr-harmony',
    title: 'Part III (FR) vs. Part IV (DPSP) Equilibrium Arc',
    category: 'Philosophy & Directive Principles',
    track: 'Rights & Remedies',
    articles: 'Articles 31C & 37',
    icon: <Scale className="w-4 h-4" />,
    component: <DPSPvsFRHarmonySVG />,
    summary: 'Interactive balance beam tracing Champakam (1951), Golaknath (1967), Kesavananda (1973), and Minerva Mills (1980) Chariot Balance.',
    isNew: true
  },
  {
    id: 'reservation-evolution',
    title: 'Reservation Geometry: Vertical Columns & Horizontal Cuts',
    category: 'Equality & Affirmative Action',
    track: 'Rights & Remedies',
    articles: 'Articles 15 & 16',
    icon: <Users className="w-4 h-4" />,
    component: <ReservationEvolutionSVG />,
    summary: 'Visual geometry of SC/ST/OBC/EWS vertical pools, 50% Indra Sawhney bar, Horizontal slots, and Davinder Singh (2024) Sub-classification.',
    isNew: true
  },
  {
    id: 'writs-matrix',
    title: 'The 5 Constitutional Writs Matrix',
    category: 'Remedies & Part III',
    track: 'Rights & Remedies',
    articles: 'Articles 32 & 226',
    icon: <Shield className="w-4 h-4" />,
    component: <WritsMatrixSVG />,
    summary: 'Interactive comparative blueprint of Habeas Corpus, Mandamus, Prohibition, Certiorari, and Quo-Warranto.'
  },
  {
    id: 'article-21-evolution',
    title: 'Article 21 Evolution (Gopalan to Puttaswamy)',
    category: 'Fundamental Rights',
    track: 'Rights & Remedies',
    articles: 'Article 21',
    icon: <Eye className="w-4 h-4" />,
    component: <Article21EvolutionSVG />,
    summary: 'Metamorphosis from formalist procedure to the Golden Triangle and proportionality privacy.'
  },
  {
    id: 'criminal-pipeline',
    title: 'Criminal-Constitutional Safeguards Pipeline',
    category: 'Criminal Due Process',
    track: 'Rights & Remedies',
    articles: 'Articles 20, 21 & 22 ⟷ BNSS',
    icon: <Gavel className="w-4 h-4" />,
    component: <CriminalConstitutionalPipelineSVG />,
    summary: 'Interactive blueprint mapping constitutional protections to criminal investigation, arrest, forensic discovery, and bail.'
  },
  {
    id: 'supreme-court-jurisdiction',
    title: 'Supreme Court & High Court 6-Vector Jurisdiction',
    category: 'Judicial Architecture',
    track: 'Judiciary & Doctrines',
    articles: 'Articles 124 – 147 & 226',
    icon: <Landmark className="w-4 h-4" />,
    component: <SupremeCourtJurisdictionSVG />,
    summary: 'Radial hub diagram contrasting Original (131), Writs (32 vs 226), SLP (136), Advisory (143), Complete Justice (142), and Collegium.',
    isNew: true
  },
  {
    id: 'basic-structure-evolution',
    title: 'Basic Structure Evolution Chronology',
    category: 'Judicial History',
    track: 'Judiciary & Doctrines',
    articles: '1951 to 2007',
    icon: <History className="w-4 h-4" />,
    component: <BasicStructureEvolutionSVG />,
    summary: 'The 56-year constitutional battle from Shankari Prasad through Kesavananda to I.R. Coelho.'
  },
  {
    id: 'precedent-lineage',
    title: 'Precedent Lineage & Judicial Evolution',
    category: 'Judicial Precedent',
    track: 'Judiciary & Doctrines',
    articles: '8 Landmark Judicial Trees',
    icon: <GitBranch className="w-4 h-4" />,
    component: <PrecedentLineageSVG />,
    summary: 'Evolutionary vector trees tracking how the Supreme Court developed, deepened, and overruled major constitutional precedents.'
  },
  {
    id: 'separation-powers',
    title: 'Separation of Powers & Checks and Balances',
    category: 'Governance Mechanics',
    track: 'Judiciary & Doctrines',
    articles: 'Articles 50, 75, 124, 368',
    icon: <Scale className="w-4 h-4" />,
    component: <SeparationOfPowersSVG />,
    summary: 'Triangular balance between Legislature, Executive, and Judiciary with constitutional check vectors.'
  },
  {
    id: 'preamble-arch',
    title: 'The Preamble Architecture',
    category: 'Foundational Philosophy',
    track: 'Judiciary & Doctrines',
    articles: 'Preamble',
    icon: <BookOpen className="w-4 h-4" />,
    component: <PreambleArchitectureSVG />,
    summary: 'Deconstructs the 4-stage ideological pipeline, popular sovereignty, and 42nd Amendment modifications.'
  },
  {
    id: 'president-electoral-impeachment',
    title: 'Presidential Election Quota & Art 61 Impeachment',
    category: 'Union Executive',
    track: 'Executive & Parliament',
    articles: 'Articles 54, 55 & 61',
    icon: <Crown className="w-4 h-4" />,
    component: <PresidentElectoralImpeachmentSVG />,
    summary: 'Interactive MLA/MP vote-weight equations, Electoral College exclusions, and the 5-stage 2/3rd Total Membership Impeachment track.',
    isNew: true
  },
  {
    id: 'parliamentary-house-procedures',
    title: 'Parliament Floor, Bill Lapse & 10th Schedule Flows',
    category: 'Parliamentary Procedure',
    track: 'Executive & Parliament',
    articles: 'Arts 85, 100, 107, 108 & Sch. 10',
    icon: <Building2 className="w-4 h-4" />,
    component: <ParliamentaryHouseProceduresSVG />,
    summary: 'Visual routing of Lok Sabha dissolution bill rules, 10th Schedule Speaker Tribunal (Kihoto Hollohan), and Art 108 Joint Sitting hierarchy.',
    isNew: true
  },
  {
    id: 'governor-assent-ordinance',
    title: 'Governor’s Assent Routes & Ordinance Constraints',
    category: 'State Executive',
    track: 'Executive & Parliament',
    articles: 'Articles 200, 201, 123 & 213',
    icon: <FileCheck2 className="w-4 h-4" />,
    component: <GovernorAssentOrdinanceSVG />,
    summary: 'Decision flowchart of Governor’s 4 options under Art 200, Art 201 President freedom, and the Krishna Kumar repromulgation bar.',
    isNew: true
  },
  {
    id: 'majorities-threshold',
    title: 'Parliamentary Hemicycle: 5 Constitutional Majorities',
    category: 'Voting Thresholds',
    track: 'Executive & Parliament',
    articles: 'Simple · Effective · Special · 61',
    icon: <Vote className="w-4 h-4" />,
    component: <MajoritiesThresholdSVG />,
    summary: 'Interactive seating floor comparing Simple, Effective (vacancies), Absolute, Special (Art 368), and Impeachment (Art 61) thresholds.',
    isNew: true
  },
  {
    id: 'legislative-passage',
    title: 'Legislative Bill Passage & Veto Architecture',
    category: 'Parliamentary Procedure',
    track: 'Executive & Parliament',
    articles: 'Articles 107 – 111 & 368',
    icon: <FileText className="w-4 h-4" />,
    component: <LegislativePassageSVG />,
    summary: 'Ordinary vs Money vs Constitutional Amendment bill trajectories and presidential veto mechanics.'
  },
  {
    id: 'clemency-architecture',
    title: 'Executive Clemency Architecture & Judicial Scrutiny',
    category: 'Executive Governance',
    track: 'Executive & Parliament',
    articles: 'Articles 72 & 161 ⟷ Sec 473 BNSS',
    icon: <Scale className="w-4 h-4" />,
    component: <ExecutiveClemencyArchitectureSVG />,
    summary: 'Interactive comparative blueprint of executive pardoning power, cabinet supremacy, statutory remission primacy, and judicial review safeguards.'
  },
  {
    id: 'territory-citizenship',
    title: 'Territory Reorganisation & Citizenship Vectors',
    category: 'Foundations & Statehood',
    track: 'Federalism & Local Gov',
    articles: 'Articles 1 – 11',
    icon: <MapPin className="w-4 h-4" />,
    component: <TerritoryCitizenshipFlowSVG />,
    summary: 'Contrasts Art 2 External Admission, Art 3 Internal Reorganisation, Berubari Cession (Art 368), and Citizenship Act 1955 acquisition/loss.',
    isNew: true
  },
  {
    id: 'local-self-government',
    title: '73rd & 74th Amendments: Grassroots Pyramid',
    category: 'Local Governance',
    track: 'Federalism & Local Gov',
    articles: 'Articles 243 – 243ZG',
    icon: <Home className="w-4 h-4" />,
    component: <LocalSelfGovernmentSVG />,
    summary: '3-tier Panchayati Raj & Urban Municipal structures paired with State Election Commission (243K), SFC (243-I), and PESA Act 1996.',
    isNew: true
  },
  {
    id: 'federal-relations',
    title: 'Federal 7th Schedule & Overriding Vectors',
    category: 'Federal Architecture',
    track: 'Federalism & Local Gov',
    articles: 'Articles 246 & 248',
    icon: <Layers className="w-4 h-4" />,
    component: <FederalRelationsSVG />,
    summary: 'Union, State, and Concurrent lists with the 5 central overriding pathways.'
  },
  {
    id: 'gst-fiscal-federalism',
    title: 'GST Council & Fiscal Federalism Pipeline',
    category: 'Financial Architecture',
    track: 'Federalism & Local Gov',
    articles: 'Articles 279A, 280, 266',
    icon: <Landmark className="w-4 h-4" />,
    component: <GSTCouncilFiscalSVG />,
    summary: 'Cooperative fiscal voting weights (1/3 Centre, 2/3 States), Finance Commission, and constitutional funds.'
  },
  {
    id: 'asymmetric-federalism',
    title: 'Asymmetric Federalism & Special States',
    category: 'Special Provisions',
    track: 'Federalism & Local Gov',
    articles: 'Articles 371 to 371-J',
    icon: <Compass className="w-4 h-4" />,
    component: <AsymmetricFederalismSVG />,
    summary: 'Autonomous constitutional safeguards and customary protections across 11 diverse States.'
  },
  {
    id: 'amendment-pipeline',
    title: 'Article 368 Amendment Engine',
    category: 'Constituent Power',
    track: 'Bodies & Mechanics',
    articles: 'Article 368',
    icon: <GitBranch className="w-4 h-4" />,
    component: <AmendmentPipelineSVG />,
    summary: 'Three amendment tracks filtered through the Basic Structure Judicial Shield.'
  },
  {
    id: 'emergency-matrix',
    title: 'Emergency Matrix & Rights Suspension Gauge',
    category: 'Crisis Governance',
    track: 'Bodies & Mechanics',
    articles: 'Articles 352, 356, 360',
    icon: <AlertTriangle className="w-4 h-4" />,
    component: <EmergencyMatrixSVG />,
    summary: 'Comparative analysis of National, State, and Financial emergencies with Art 20 & 21 immunity.'
  },
  {
    id: 'civil-services-safeguards',
    title: 'Civil Services Safeguards & Article 311',
    category: 'Public Administration',
    track: 'Bodies & Mechanics',
    articles: 'Articles 310, 311, 312',
    icon: <UserCheck className="w-4 h-4" />,
    component: <CivilServicesSafeguardsSVG />,
    summary: 'Twin shields under Art 311(1) & (2), the 3 exceptional provisos, and All-India Services.'
  },
  {
    id: 'electoral-architecture',
    title: 'Electoral Democracy & ECI Structure',
    category: 'Electoral Governance',
    track: 'Bodies & Mechanics',
    articles: 'Articles 324 to 329',
    icon: <Vote className="w-4 h-4" />,
    component: <ElectoralArchitectureSVG />,
    summary: 'Superintendence of elections, adult franchise under Art 326, single general roll, and bar on court interference.'
  },
  {
    id: 'schedules-genealogy',
    title: 'The 12 Schedules Architecture',
    category: 'Structural Catalog',
    track: 'Bodies & Mechanics',
    articles: 'Schedules 1 – 12',
    icon: <Calendar className="w-4 h-4" />,
    component: <SchedulesGenealogySVG />,
    summary: 'Mnemonic "TEARS OF OLD PM" framework mapping all 12 constitutional schedules.'
  }
];

export const VisualLabView: React.FC = () => {
  const { selectedSvgId, setSelectedSvgId } = useTheme();
  const [isGalleryOpen, setIsGalleryOpen] = useState(true);
  const [selectedTrack, setSelectedTrack] = useState<DiagramTrack>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDiagrams = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return DIAGRAMS.filter((d) => {
      if (selectedTrack !== 'All' && d.track !== selectedTrack) return false;
      if (q) {
        return (
          d.title.toLowerCase().includes(q) ||
          d.articles.toLowerCase().includes(q) ||
          d.category.toLowerCase().includes(q) ||
          d.summary.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [selectedTrack, searchQuery]);

  const activeDiagram = DIAGRAMS.find((d) => d.id === selectedSvgId) || DIAGRAMS[0];
  const currentIndex = DIAGRAMS.findIndex((d) => d.id === activeDiagram.id);

  const handlePrev = () => {
    const newIdx = (currentIndex - 1 + DIAGRAMS.length) % DIAGRAMS.length;
    setSelectedSvgId(DIAGRAMS[newIdx].id);
  };

  const handleNext = () => {
    const newIdx = (currentIndex + 1) % DIAGRAMS.length;
    setSelectedSvgId(DIAGRAMS[newIdx].id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6 animate-fadeIn">
      {/* Title & Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
              <Eye className="w-3 h-3 text-[var(--accent)]" />
              Visual Law Lab
            </span>
            <span className="text-xs px-2.5 py-0.5 rounded font-mono font-semibold bg-[var(--bg-surface-elevated)] text-[var(--accent)] border border-[var(--border-strong)]">
              {DIAGRAMS.length} Interactive Vector Blueprints
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
            Constitutional Architecture &amp; Vector Explainers
          </h1>
          <p className="text-sm text-[var(--text-secondary)] mt-1 max-w-3xl">
            Click nodes, directional vectors, and callout branches across {DIAGRAMS.length} custom diagrams covering Fundamental Rights, Parliament, Judiciary, Federalism, and Governance.
          </p>
        </div>
      </div>

      {/* Collapsible Blueprint Gallery Control Bar */}
      <div className="flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] surface-specular">
          {/* Active Blueprint Summary */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-[var(--bg-base)] text-[var(--accent)] border border-[var(--border-strong)] flex items-center justify-center shrink-0">
              {activeDiagram.icon}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-sm sm:text-base font-bold text-[var(--text-primary)] truncate">
                  {activeDiagram.title}
                </h2>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)] shrink-0">
                  {activeDiagram.articles}
                </span>
              </div>
              <p className="text-xs text-[var(--text-muted)] line-clamp-1 mt-0.5">
                {activeDiagram.category} &bull; {activeDiagram.summary}
              </p>
            </div>
          </div>

          {/* Quick Prev / Next & Collapsible Blueprint Menu Button */}
          <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
            <div className="flex items-center bg-[var(--bg-base)] rounded-xl border border-[var(--border-subtle)] p-0.5">
              <button
                onClick={handlePrev}
                title="Previous Blueprint"
                aria-label="Previous Blueprint"
                className="p-1.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-[11px] font-mono tabular-nums px-2 text-[var(--text-muted)] select-none">
                {currentIndex + 1} / {DIAGRAMS.length}
              </span>
              <button
                onClick={handleNext}
                title="Next Blueprint"
                aria-label="Next Blueprint"
                className="p-1.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={() => setIsGalleryOpen((prev) => !prev)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono transition-colors border cursor-pointer ${
                isGalleryOpen
                  ? 'bg-[var(--accent)] text-[var(--accent-contrast)] border-[var(--accent)] font-bold shadow-sm'
                  : 'bg-[var(--bg-surface-elevated)] hover:bg-[var(--bg-base)] border-[var(--border-strong)] text-[var(--text-primary)]'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>{isGalleryOpen ? 'Hide Index' : `All ${DIAGRAMS.length} Blueprints`}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isGalleryOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Filterable & Searchable Blueprint Gallery Grid */}
        {isGalleryOpen && (
          <div className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-strong)] shadow-xl animate-fadeIn flex flex-col gap-3.5">
            {/* Search & Track Pills Row */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-3 border-b border-[var(--border-subtle)]">
              <div className="flex flex-wrap items-center gap-1.5">
                {TRACKS.map((track) => {
                  const isActive = selectedTrack === track;
                  const count =
                    track === 'All'
                      ? DIAGRAMS.length
                      : DIAGRAMS.filter((d) => d.track === track).length;
                  return (
                    <button
                      key={track}
                      onClick={() => setSelectedTrack(track)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold'
                          : 'bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                      }`}
                    >
                      {track} ({count})
                    </button>
                  );
                })}
              </div>

              <div className="relative w-full lg:w-64">
                <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search blueprint or Article..."
                  className="w-full h-8 pl-8 pr-7 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--border-strong)]"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>

            {/* Cards Grid */}
            {filteredDiagrams.length === 0 ? (
              <div className="py-8 text-center text-xs font-mono text-[var(--text-muted)]">
                No vector blueprints matched &ldquo;{searchQuery}&rdquo;.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2.5 max-h-[340px] overflow-y-auto pr-1">
                {filteredDiagrams.map((item) => {
                  const isSelected = item.id === activeDiagram.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setSelectedSvgId(item.id);
                      }}
                      className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-[background-color,border-color] duration-150 cursor-pointer ${
                        isSelected
                          ? 'bg-[var(--bg-surface-elevated)] border-[var(--accent)] ring-1 ring-[var(--accent)]/40 surface-specular'
                          : 'bg-[var(--bg-base)] border-[var(--border-subtle)] hover:border-[var(--border-strong)] hover:bg-[var(--bg-surface-elevated)]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`p-1.5 rounded-lg border ${
                            isSelected
                              ? 'bg-[var(--accent)] text-[var(--accent-contrast)] border-[var(--accent)]'
                              : 'bg-[var(--bg-surface)] text-[var(--text-muted)] border-[var(--border-subtle)]'
                          }`}
                        >
                          {item.icon}
                        </span>
                        <div className="flex items-center gap-1">
                          {item.isNew && (
                            <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-bold">
                              NEW
                            </span>
                          )}
                          <span className="text-[9px] font-mono text-[var(--text-muted)] truncate max-w-[85px]">
                            {item.articles.split(' ')[0]} {item.articles.split(' ')[1] || ''}
                          </span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[var(--text-primary)] line-clamp-2 leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-[10px] text-[var(--text-muted)] line-clamp-1 mt-1">
                          {item.category}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>

      {/* The Rendered Interactive Component */}
      <div className="w-full">
        {activeDiagram.component}
      </div>
    </div>
  );
};
