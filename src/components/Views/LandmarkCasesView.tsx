import React, { useState, useMemo, useEffect } from 'react';
import {
  Award,
  Search,
  BookOpen,
  Scale,
  MessageSquare,
  Eye,
  Shield,
  ShieldAlert,
  Building,
  Layers,
  GitBranch,
  Copy,
  Check,
  Bookmark,
  BookmarkCheck,
  ChevronRight,
  ChevronDown,
  RotateCcw,
  Filter,
  Sparkles,
  BookMarked,
  Globe2,
  Vote,
  Compass,
  Users,
  ArrowLeft,
  List,
  Gamepad2,
  BrainCircuit,
  Star
} from 'lucide-react';
import {
  DETAILED_CASE_LAWS_BY_TOPIC,
  type DetailedCaseLaw,
  type CaseLawTopicGroup
} from '../../data/caseLawsDetailedData';
import { PrecedentLineageSVG } from '../VectorDiagrams/PrecedentLineageSVG';
import { useTheme } from '../../context/ThemeContext';
import { AnnotatedLegalText } from '../Common/AnnotatedLegalText';
import { getCardIdForCase } from '../../services/flashcardService';

export const LandmarkCasesView: React.FC = () => {
  const { setActiveTab, launchGameDeck, launchFlashcardDeck, pinnedFlashcardIds, togglePinFlashcard } = useTheme();

  // Mode: 'cases' | 'lineage' | 'principles' | 'bookmarks'
  const [viewMode, setViewMode] = useState<'cases' | 'lineage' | 'principles' | 'bookmarks'>('cases');

  // Selected Topic (or 'all')
  const [selectedTopicId, setSelectedTopicId] = useState<string>('all');

  // Selected Case
  const allCasesFlat = useMemo(() => {
    return DETAILED_CASE_LAWS_BY_TOPIC.flatMap((group) => group.cases);
  }, []);

  const [selectedCaseId, setSelectedCaseId] = useState<string>(allCasesFlat[0].id);

  // Search & Filter
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [benchFilter, setBenchFilter] = useState<'all' | 'constitution-5' | 'super-7-plus'>('all');
  const [sortOrder, setSortOrder] = useState<'chronological' | 'reverse-chronological' | 'bench-size'>('chronological');
  const [isTopicDrawerOpen, setIsTopicDrawerOpen] = useState(false);
  const [mobilePane, setMobilePane] = useState<'list' | 'dossier'>('list');

  // Copied state
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Bookmarks in localStorage
  const [bookmarkedCaseIds, setBookmarkedCaseIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('samvidhan_bookmarked_cases');
      return saved ? JSON.parse(saved) : ['case-kesavananda-preamble', 'case-puttaswamy', 'case-bommai-federalism'];
    } catch {
      return ['case-kesavananda-preamble', 'case-puttaswamy', 'case-bommai-federalism'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('samvidhan_bookmarked_cases', JSON.stringify(bookmarkedCaseIds));
    } catch {
      // ignore
    }
  }, [bookmarkedCaseIds]);

  const toggleBookmark = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setBookmarkedCaseIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleCopyCitation = (citation: string, id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    navigator.clipboard.writeText(citation);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Filtered Cases
  const filteredCases = useMemo(() => {
    let list = allCasesFlat;

    if (viewMode === 'bookmarks') {
      list = list.filter((c) => bookmarkedCaseIds.includes(c.id));
    } else if (selectedTopicId !== 'all') {
      list = list.filter((c) => c.topicId === selectedTopicId);
    }

    if (benchFilter === 'constitution-5') {
      list = list.filter((c) => c.benchStrength >= 5);
    } else if (benchFilter === 'super-7-plus') {
      list = list.filter((c) => c.benchStrength >= 7);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (c) =>
          c.caseName.toLowerCase().includes(q) ||
          c.citation.toLowerCase().includes(q) ||
          c.presidingJudges.toLowerCase().includes(q) ||
          c.governingDoctrine.toLowerCase().includes(q) ||
          c.factualBackground.toLowerCase().includes(q) ||
          c.ratioDecidendi.toLowerCase().includes(q) ||
          c.constitutionalArticles.some((art) => art.toLowerCase().includes(q))
      );
    }

    // Sorting
    return [...list].sort((a, b) => {
      if (sortOrder === 'chronological') return a.year - b.year;
      if (sortOrder === 'reverse-chronological') return b.year - a.year;
      if (sortOrder === 'bench-size') return b.benchStrength - a.benchStrength;
      return 0;
    });
  }, [allCasesFlat, selectedTopicId, viewMode, bookmarkedCaseIds, benchFilter, searchQuery, sortOrder]);

  // Current active case
  const currentCase: DetailedCaseLaw = useMemo(() => {
    return allCasesFlat.find((c) => c.id === selectedCaseId) || filteredCases[0] || allCasesFlat[0];
  }, [allCasesFlat, selectedCaseId, filteredCases]);

  // Topic icon mapper
  const getTopicIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen': return <BookOpen className="w-3.5 h-3.5" />;
      case 'Scale': return <Scale className="w-3.5 h-3.5" />;
      case 'MessageSquare': return <MessageSquare className="w-3.5 h-3.5" />;
      case 'Eye': return <Eye className="w-3.5 h-3.5" />;
      case 'Shield': return <Shield className="w-3.5 h-3.5" />;
      case 'ShieldAlert': return <ShieldAlert className="w-3.5 h-3.5" />;
      case 'Building': return <Building className="w-3.5 h-3.5" />;
      case 'Award': return <Award className="w-3.5 h-3.5" />;
      case 'Layers': return <Layers className="w-3.5 h-3.5" />;
      case 'GitBranch': return <GitBranch className="w-3.5 h-3.5" />;
      case 'Sparkles': return <Sparkles className="w-3.5 h-3.5" />;
      case 'Users': return <Users className="w-3.5 h-3.5" />;
      case 'Vote': return <Vote className="w-3.5 h-3.5" />;
      case 'Globe2': return <Globe2 className="w-3.5 h-3.5" />;
      case 'Compass': return <Compass className="w-3.5 h-3.5" />;
      default: return <Scale className="w-3.5 h-3.5" />;
    }
  };

  const getBenchBadgeColor = (strength: number) => {
    if (strength >= 13) return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
    if (strength >= 9) return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
    if (strength >= 7) return 'bg-sky-500/10 text-sky-400 border-sky-500/30';
    if (strength >= 5) return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
    return 'bg-slate-500/10 text-slate-400 border-slate-500/30';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-8 animate-fadeIn">
      {/* Top Hero Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center border border-[var(--accent)]/20 shrink-0 shadow-sm">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)]">
                Landmark Constitutional Precedents Lab
              </h1>
              <p className="text-xs font-mono text-[var(--text-muted)] mt-0.5">
                The Canonical Compendium of Supreme Court Precedents
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs px-3 py-1.5 rounded-lg font-mono bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)] w-fit shrink-0">
              100 Authoritative Cases • 20 Clusters • 5 Per Topic
            </span>
            <button
              onClick={() => launchGameDeck('landmark-cases')}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[var(--accent)] text-[var(--accent-contrast)] hover:opacity-90 font-mono text-xs font-bold transition-all shadow-sm shrink-0"
            >
              <Gamepad2 className="w-3.5 h-3.5" />
              <span>Play Precedents Matcher</span>
            </button>
            <button
              onClick={() => launchFlashcardDeck('cases', 'all')}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)] hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)] font-mono text-xs font-bold transition-all shadow-sm shrink-0"
            >
              <BrainCircuit className="w-3.5 h-3.5" />
              <span>Drill Cases in SRS</span>
            </button>
          </div>
        </div>

        <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-4xl">
          Frequently cited across High Courts and constitutional litigation. Complete with factual backgrounds, ratios decidendi, historical dissents, and present-day courtroom utility.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-[var(--border-subtle)]/60 text-xs font-mono text-[var(--text-muted)]">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span> 100 Detailed Judgments
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-sky-400"></span> 20 Constitutional Clusters
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-purple-400"></span> 8 Evolutionary Lineage Trees
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span> Modern Courtroom Utility Badges
          </span>
        </div>
      </div>

      {/* View Mode Segmented Control Bar (Dedicated Full-Width Toolbar) */}
      <div className="flex items-center overflow-x-auto p-1.5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm scrollbar-none">
        <div className="flex items-center gap-1.5 min-w-max w-full sm:w-auto">
          <button
            onClick={() => setViewMode('cases')}
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all ${
              viewMode === 'cases'
                ? 'bg-[var(--bg-surface-elevated)] text-[var(--accent)] font-bold shadow-sm border border-[var(--border-strong)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-base)]'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>100 Cases Explorer</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded font-mono bg-[var(--bg-base)] text-[var(--accent)] border border-[var(--border-subtle)]">
              100
            </span>
          </button>

          <button
            onClick={() => setViewMode('lineage')}
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all ${
              viewMode === 'lineage'
                ? 'bg-[var(--bg-surface-elevated)] text-[var(--accent)] font-bold shadow-sm border border-[var(--border-strong)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-base)]'
            }`}
          >
            <GitBranch className="w-4 h-4" />
            <span>Precedent Lineage</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded font-mono bg-[var(--bg-base)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
              8 Trees
            </span>
          </button>

          <button
            onClick={() => setViewMode('principles')}
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all ${
              viewMode === 'principles'
                ? 'bg-[var(--bg-surface-elevated)] text-[var(--accent)] font-bold shadow-sm border border-[var(--border-strong)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-base)]'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>Doctrine of Stare Decisis</span>
          </button>

          <button
            onClick={() => setViewMode('bookmarks')}
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all ${
              viewMode === 'bookmarks'
                ? 'bg-[var(--bg-surface-elevated)] text-[var(--accent)] font-bold shadow-sm border border-[var(--border-strong)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-base)]'
            }`}
          >
            <BookMarked className="w-4 h-4 text-[var(--gold)]" />
            <span>Saved Precedents</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded font-mono bg-[var(--badge-bg)] text-[var(--gold)] border border-[var(--gold)]/30 font-bold">
              {bookmarkedCaseIds.length}
            </span>
          </button>
        </div>
      </div>

      {/* LINEAGE SVG VIEW */}
      {viewMode === 'lineage' && (
        <div className="flex flex-col gap-6 animate-fadeIn">
          <PrecedentLineageSVG />
        </div>
      )}

      {/* STARE DECISIS & PRECEDENT LAW PRINCIPLES VIEW */}
      {viewMode === 'principles' && (
        <div className="flex flex-col gap-6 animate-fadeIn">
          <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Scale className="w-5 h-5 text-[var(--accent)]" />
                <h2 className="text-xl font-bold text-[var(--text-primary)]">
                  The Doctrine of Precedent & Stare Decisis in Indian Courts
                </h2>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                Key constitutional and procedural rules governing how Indian courts rely on and cite binding judicial authority.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col gap-2">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--accent)]/10 text-[var(--accent)] font-semibold w-fit">
                  Article 141
                </span>
                <h3 className="text-sm font-bold text-[var(--text-primary)]">Law Declared by Supreme Court</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  "The law declared by the Supreme Court shall be binding on all courts within the territory of India." Only the <em>ratio decidendi</em> of a decision constitutes binding precedent under Article 141.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col gap-2">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 font-semibold w-fit">
                  Bench Strength Rule
                </span>
                <h3 className="text-sm font-bold text-[var(--text-primary)]">Hierarchy of Bench Authority</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  A larger bench decision always binds smaller benches. A 5-judge bench cannot overrule a 7-judge bench; if a smaller bench disagrees, it must refer the question to the Chief Justice for a larger bench constitution.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col gap-2">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-semibold w-fit">
                  Ratio vs Obiter
                </span>
                <h3 className="text-sm font-bold text-[var(--text-primary)]">Ratio Decidendi vs Obiter Dicta</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  <em>Ratio decidendi</em> is the essential principle of law upon which the case is decided. <em>Obiter dicta</em> are incidental judicial remarks which carry great persuasive weight but are not strictly binding.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col gap-2">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 font-semibold w-fit">
                  Per Incuriam
                </span>
                <h3 className="text-sm font-bold text-[var(--text-primary)]">Decisions Rendered in Ignorance</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  A decision rendered in ignorance of an existing statutory provision or binding larger-bench precedent is <em>per incuriam</em> and loses its binding force under Indian jurisprudence (State of U.P. v. Synthetics & Chemicals Ltd).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col gap-2">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 font-semibold w-fit">
                  Prospective Overruling
                </span>
                <h3 className="text-sm font-bold text-[var(--text-primary)]">Non-Retroactive Invalidation</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Originating in <em>I.C. Golak Nath (1967)</em>, the Supreme Court can rule that its declaration of law will only apply to future actions and transactions, preserving the validity of concluded past deeds.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col gap-2">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 font-semibold w-fit">
                  Article 142
                </span>
                <h3 className="text-sm font-bold text-[var(--text-primary)]">Complete Justice & Curative Petitions</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Allows the Supreme Court to pass any decree necessary for doing "complete justice". From this power, the Court derived the remedy of Curative Petitions in <em>Rupa Ashok Hurra (2002)</em>.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CASES EXPLORER / BOOKMARKS VIEW */}
      {(viewMode === 'cases' || viewMode === 'bookmarks') && (
        <div className="flex flex-col gap-6">
          {/* Collapsible Topic Filter Bar (Only in 'cases' mode) */}
          {viewMode === 'cases' && (
            <div className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                {/* Collapsible Button: Current Active Topic */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider hidden sm:inline">
                    Topic Filter:
                  </span>
                  <button
                    onClick={() => setIsTopicDrawerOpen((prev) => !prev)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono transition-all border ${
                      isTopicDrawerOpen
                        ? 'bg-[var(--accent)] text-[var(--accent-contrast)] border-[var(--accent)] font-bold shadow-sm'
                        : selectedTopicId !== 'all'
                        ? 'bg-[var(--bg-surface-elevated)] text-[var(--accent)] border-[var(--accent)]/40 font-bold'
                        : 'bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                    }`}
                  >
                    <Filter className="w-3.5 h-3.5" />
                    <span>
                      {selectedTopicId === 'all'
                        ? 'All 20 Topics (100 Cases)'
                        : DETAILED_CASE_LAWS_BY_TOPIC.find((t) => t.id === selectedTopicId)?.name || 'Selected Topic'}
                    </span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full border ${
                      isTopicDrawerOpen
                        ? 'bg-black/20 text-white border-transparent'
                        : 'bg-[var(--bg-base)] text-[var(--text-muted)] border-[var(--border-subtle)]'
                    }`}>
                      {selectedTopicId === 'all' ? '100' : '5'}
                    </span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isTopicDrawerOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Reset Filter Button if topic is not 'all' */}
                  {selectedTopicId !== 'all' && (
                    <button
                      onClick={() => {
                        setSelectedTopicId('all');
                        setIsTopicDrawerOpen(false);
                      }}
                      className="text-xs font-mono text-[var(--text-muted)] hover:text-[var(--accent)] px-2.5 py-1 rounded-lg hover:bg-[var(--bg-base)] transition-colors flex items-center gap-1 border border-transparent hover:border-[var(--border-subtle)]"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Show All 100 Cases</span>
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-[var(--text-muted)] self-end sm:self-auto">
                  <span>
                    Showing <strong className="text-[var(--text-primary)]">{filteredCases.length}</strong> of 100 Cases
                  </span>
                  <button
                    onClick={() => setIsTopicDrawerOpen((prev) => !prev)}
                    className="text-[11px] text-[var(--accent)] hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>{isTopicDrawerOpen ? 'Close Topics ✕' : 'Browse All 20 Topics'}</span>
                    <ChevronDown className={`w-3 h-3 transition-transform ${isTopicDrawerOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Collapsible Drawer containing the 20 Topics */}
              {isTopicDrawerOpen && (
                <div className="p-4 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] shadow-lg animate-fadeIn flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] pb-2 border-b border-[var(--border-subtle)]">
                    <span className="font-bold text-[var(--text-primary)]">
                      SELECT CONSTITUTIONAL TOPIC CLUSTER (5 PRECEDENTS EACH)
                    </span>
                    <button
                      onClick={() => setIsTopicDrawerOpen(false)}
                      className="text-xs hover:text-[var(--text-primary)] px-2 py-0.5 rounded hover:bg-[var(--bg-base)] transition-colors"
                    >
                      Close ✕
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    <button
                      onClick={() => {
                        setSelectedTopicId('all');
                        setIsTopicDrawerOpen(false);
                      }}
                      className={`p-2.5 rounded-lg border text-left flex items-center justify-between transition-all ${
                        selectedTopicId === 'all'
                          ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold shadow-sm border-[var(--accent)]'
                          : 'bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <Sparkles className="w-3.5 h-3.5 shrink-0" />
                        <span className="text-xs font-mono truncate">All 20 Topics Combined</span>
                      </div>
                      <span className="text-[10px] px-1.5 py-0.2 rounded font-mono bg-black/10 shrink-0 ml-1">
                        100
                      </span>
                    </button>

                    {DETAILED_CASE_LAWS_BY_TOPIC.map((topic) => {
                      const isSelected = selectedTopicId === topic.id;
                      return (
                        <button
                          key={topic.id}
                          onClick={() => {
                            setSelectedTopicId(topic.id);
                            setIsTopicDrawerOpen(false);
                          }}
                          className={`p-2.5 rounded-lg border text-left flex items-center justify-between transition-all ${
                            isSelected
                              ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold shadow-sm border-[var(--accent)]'
                              : 'bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                          }`}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="shrink-0">{getTopicIcon(topic.iconName)}</span>
                            <span className="text-xs font-mono truncate">{topic.name}</span>
                          </div>
                          <span className="text-[10px] px-1.5 py-0.2 rounded font-mono bg-black/10 shrink-0 ml-1">
                            5
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Bookmarks Header (When in bookmarks mode) */}
          {viewMode === 'bookmarks' && (
            <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookMarked className="w-4 h-4 text-[var(--gold)]" />
                <span className="text-sm font-bold text-[var(--text-primary)]">
                  Your Saved Landmark Case Laws Playlist ({bookmarkedCaseIds.length} Cases)
                </span>
              </div>
              {bookmarkedCaseIds.length > 0 && (
                <button
                  onClick={() => setBookmarkedCaseIds([])}
                  className="text-xs font-mono text-rose-400 hover:underline"
                >
                  Clear All Bookmarks
                </button>
              )}
            </div>
          )}

          {/* Search, Bench Filter, and Sorting Bar */}
          <div className="p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] flex-1 min-w-0">
              <Search className="w-4 h-4 text-[var(--text-muted)] shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search case name, citation, presiding judge, doctrine, or keyword..."
                className="w-full bg-transparent border-none text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none font-mono"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] px-1 shrink-0"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Filters Row */}
            <div className="flex flex-wrap items-center justify-between sm:justify-start gap-3 shrink-0">
              {/* Bench Strength Filter */}
              <div className="flex items-center gap-1.5 shrink-0 overflow-x-auto">
                <span className="text-[11px] font-mono text-[var(--text-muted)] flex items-center gap-1">
                  <Filter className="w-3 h-3" /> Bench:
                </span>
                <button
                  onClick={() => setBenchFilter('all')}
                  className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                    benchFilter === 'all'
                      ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold'
                      : 'bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setBenchFilter('constitution-5')}
                  className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                    benchFilter === 'constitution-5'
                      ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold'
                      : 'bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                  }`}
                >
                  5+ Judges
                </button>
                <button
                  onClick={() => setBenchFilter('super-7-plus')}
                  className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                    benchFilter === 'super-7-plus'
                      ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold'
                      : 'bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                  }`}
                >
                  7+ Judges
                </button>
              </div>

              {/* Sort Order Selector */}
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="text-[11px] font-mono text-[var(--text-muted)]">Sort:</span>
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value as any)}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-[var(--bg-base)] text-[var(--text-primary)] border border-[var(--border-subtle)] focus:outline-none cursor-pointer"
                >
                  <option value="chronological">Earliest (1950 → 2024)</option>
                  <option value="reverse-chronological">Latest (2024 → 1950)</option>
                  <option value="bench-size">Largest Bench First</option>
                </select>
              </div>
            </div>
          </div>

          {/* Mobile & Tablet Master-Detail Pane Switcher (< lg screens) */}
          <div className="lg:hidden flex items-center p-1 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm">
            <button
              onClick={() => setMobilePane('list')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-mono transition-all ${
                mobilePane === 'list'
                  ? 'bg-[var(--bg-surface-elevated)] text-[var(--accent)] font-bold shadow-sm border border-[var(--border-strong)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <List className="w-4 h-4" />
              <span>Precedents List ({filteredCases.length})</span>
            </button>
            <button
              onClick={() => setMobilePane('dossier')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-mono transition-all ${
                mobilePane === 'dossier'
                  ? 'bg-[var(--bg-surface-elevated)] text-[var(--accent)] font-bold shadow-sm border border-[var(--border-strong)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Active Dossier</span>
            </button>
          </div>

          {/* Master-Detail Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Column: Cases List (5 Cols on lg, or mobilePane === 'list' on < lg) */}
            <div className={`lg:col-span-5 min-w-0 flex-col gap-2 max-h-[82vh] overflow-y-auto pr-1 ${
              mobilePane === 'dossier' ? 'hidden lg:flex' : 'flex'
            }`}>
              {filteredCases.length === 0 ? (
                <div className="p-8 text-center rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col items-center justify-center gap-2">
                  <Scale className="w-8 h-8 text-[var(--text-muted)]" />
                  <p className="text-sm font-semibold text-[var(--text-primary)]">No matching case laws found</p>
                  <p className="text-xs text-[var(--text-muted)] font-mono">
                    Try adjusting your search query or bench filter.
                  </p>
                </div>
              ) : (
                filteredCases.map((c) => {
                  const isSelected = c.id === currentCase.id;
                  const isBookmarked = bookmarkedCaseIds.includes(c.id);

                  return (
                    <div
                      key={c.id}
                      onClick={() => {
                        setSelectedCaseId(c.id);
                        setMobilePane('dossier');
                      }}
                      className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col gap-2 ${
                        isSelected
                          ? 'bg-[var(--bg-surface-elevated)] border-[var(--accent)] shadow-md ring-1 ring-[var(--accent)]/30'
                          : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="text-xs font-mono font-bold text-[var(--accent)]">
                            {c.year}
                          </span>
                          <span
                            className={`text-[10px] px-2 py-0.2 rounded font-mono border ${getBenchBadgeColor(
                              c.benchStrength
                            )}`}
                          >
                            {c.benchStrength}-Judge Bench
                          </span>
                          <span className="text-[10px] font-mono text-[var(--text-muted)]">
                            {c.topicName.split('&')[0].trim()}
                          </span>
                        </div>

                        <button
                          onClick={(e) => toggleBookmark(c.id, e)}
                          title={isBookmarked ? 'Remove from bookmarks' : 'Save to bookmarks'}
                          className={`p-1 rounded hover:bg-[var(--bg-base)] transition-colors ${
                            isBookmarked ? 'text-[var(--gold)]' : 'text-[var(--text-muted)]'
                          }`}
                        >
                          {isBookmarked ? (
                            <BookmarkCheck className="w-3.5 h-3.5 fill-current" />
                          ) : (
                            <Bookmark className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>

                      <h4 className="text-sm font-bold text-[var(--text-primary)] leading-snug break-words">
                        {c.caseName}
                      </h4>

                      <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] pt-1 border-t border-[var(--border-subtle)]/50 gap-2">
                        <span className="truncate min-w-0">{c.citation}</span>
                        <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-[var(--accent)]' : ''}`} />
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Right Column: Deep Case Law Dossier (7 Cols on lg, or mobilePane === 'dossier' on < lg) */}
            <div className={`lg:col-span-7 min-w-0 flex-col gap-6 ${
              mobilePane === 'list' ? 'hidden lg:flex' : 'flex'
            }`}>
              {currentCase && (
                <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-strong)] shadow-md flex flex-col gap-6 animate-fadeIn">
                  {/* Back button for mobile/tablet */}
                  <div className="lg:hidden pb-2 border-b border-[var(--border-subtle)]">
                    <button
                      onClick={() => setMobilePane('list')}
                      className="flex items-center gap-1.5 text-xs font-mono text-[var(--accent)] hover:underline font-semibold"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back to Precedents List ({filteredCases.length} cases)</span>
                    </button>
                  </div>

                  {/* Dossier Header */}
                  <div className="flex flex-col gap-3 pb-4 border-b border-[var(--border-subtle)]">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-mono font-bold text-[var(--accent)]">
                          {currentCase.year}
                        </span>
                        <span
                          className={`text-xs px-2.5 py-0.5 rounded font-mono border ${getBenchBadgeColor(
                            currentCase.benchStrength
                          )}`}
                        >
                          {currentCase.benchStrength}-Judge Constitution Bench
                        </span>
                        <span className="text-xs px-2.5 py-0.5 rounded font-mono bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                          {currentCase.topicName}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Copy Citation Button */}
                        <button
                          onClick={(e) => handleCopyCitation(currentCase.citation, currentCase.id, e)}
                          className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] transition-colors"
                        >
                          {copiedId === currentCase.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-400">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy Citation</span>
                            </>
                          )}
                        </button>

                        {/* SRS Flashcard Pin & Drill Buttons */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            togglePinFlashcard(getCardIdForCase(currentCase.id));
                          }}
                          className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono border transition-colors ${
                            pinnedFlashcardIds.includes(getCardIdForCase(currentCase.id))
                              ? 'bg-amber-500/15 text-amber-400 border-amber-500/40 font-bold'
                              : 'bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-amber-400 border-[var(--border-subtle)]'
                          }`}
                          title="Pin this Landmark Case to your SRS Flashcards Focus Queue"
                        >
                          <Star className={`w-3.5 h-3.5 ${pinnedFlashcardIds.includes(getCardIdForCase(currentCase.id)) ? 'fill-current' : ''}`} />
                          <span>{pinnedFlashcardIds.includes(getCardIdForCase(currentCase.id)) ? 'SRS Pinned' : 'SRS Pin'}</span>
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            launchFlashcardDeck('cases', currentCase.topicName, getCardIdForCase(currentCase.id));
                          }}
                          className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)] hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)] transition-colors"
                          title="Open this Landmark Case directly in Leitner SRS Flashcards"
                        >
                          <BrainCircuit className="w-3.5 h-3.5" />
                          <span>Drill SRS</span>
                        </button>

                        {/* Bookmark Button */}
                        <button
                          onClick={(e) => toggleBookmark(currentCase.id, e)}
                          className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono border transition-colors ${
                            bookmarkedCaseIds.includes(currentCase.id)
                              ? 'bg-[var(--gold)]/10 text-[var(--gold)] border-[var(--gold)]/30 font-bold'
                              : 'bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                          }`}
                        >
                          {bookmarkedCaseIds.includes(currentCase.id) ? (
                            <>
                              <BookmarkCheck className="w-3.5 h-3.5 fill-current" />
                              <span>Saved</span>
                            </>
                          ) : (
                            <>
                              <Bookmark className="w-3.5 h-3.5" />
                              <span>Save</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] leading-tight break-words">
                      {currentCase.caseName}
                    </h2>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-[var(--text-muted)]">
                      <span className="break-all">Citation: <strong className="text-[var(--text-secondary)]">{currentCase.citation}</strong></span>
                      <span>Bench: <strong className="text-[var(--text-secondary)]">{currentCase.benchStrength} Judges</strong></span>
                    </div>

                    <div className="text-xs text-[var(--text-muted)] font-mono bg-[var(--bg-base)] p-2.5 rounded-lg border border-[var(--border-subtle)] break-words">
                      <strong className="text-[var(--text-secondary)]">Presiding Bench:</strong> {currentCase.presidingJudges}
                    </div>

                    {/* Constitutional Articles & Governing Doctrine */}
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <span className="text-xs font-mono text-[var(--text-muted)] shrink-0">Articles Involved:</span>
                      <div className="flex flex-wrap items-center gap-1.5">
                        {currentCase.constitutionalArticles.map((art) => (
                          <button
                            key={art}
                            onClick={() => setActiveTab('articles-master')}
                            className="px-2 py-0.5 rounded text-[11px] font-mono bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20 hover:bg-[var(--accent)]/20 transition-colors"
                          >
                            {art}
                          </button>
                        ))}
                      </div>

                      <div className="flex items-center gap-1.5 ml-auto flex-wrap">
                        <span className="text-xs font-mono text-[var(--text-muted)] shrink-0">Doctrine:</span>
                        <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] font-semibold border border-[var(--border-strong)] break-words">
                          {currentCase.governingDoctrine}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Section 1: Factual Background */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[var(--accent)]" />
                      Factual Background & Procedural Posture
                    </span>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed bg-[var(--bg-base)] p-4 rounded-xl border border-[var(--border-subtle)] break-words">
                      <AnnotatedLegalText text={currentCase.factualBackground} />
                    </p>
                  </div>

                  {/* Section 2: Constitutional Question */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5">
                      <Scale className="w-3.5 h-3.5 text-sky-400" />
                      The Constitutional Question Before the Bench
                    </span>
                    <p className="text-sm font-semibold text-[var(--text-primary)] leading-relaxed bg-[var(--bg-base)] p-4 rounded-xl border border-[var(--border-subtle)] break-words">
                      <AnnotatedLegalText text={currentCase.constitutionalQuestion} />
                    </p>
                  </div>

                  {/* Section 3: Majority Ruling */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-emerald-400" />
                      Majority Verdict & Operative Holding
                    </span>
                    <p className="text-sm text-[var(--text-primary)] leading-relaxed bg-[var(--bg-base)] p-4 rounded-xl border border-[var(--border-subtle)] break-words">
                      <AnnotatedLegalText text={currentCase.majorityVerdict} />
                    </p>
                  </div>

                  {/* Section 4: Ratio Decidendi Quote Box */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[var(--gold)]" />
                      Binding Ratio Decidendi (Article 141)
                    </span>
                    <div className="bg-[var(--bg-surface-elevated)] p-5 rounded-xl border-l-4 border-l-[var(--accent)] border border-[var(--border-strong)] flex flex-col gap-2 shadow-sm">
                      <p className="text-sm text-[var(--text-primary)] leading-relaxed font-serif italic break-words">
                        "<AnnotatedLegalText text={currentCase.ratioDecidendi} />"
                      </p>
                      {currentCase.keyQuote && (
                        <p className="text-xs text-[var(--text-secondary)] font-serif border-t border-[var(--border-subtle)] pt-2 mt-1 break-words">
                          Key Epigram: <AnnotatedLegalText text={currentCase.keyQuote} />
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Section 5: Notable Dissent (If applicable) */}
                  {currentCase.notableDissent && (
                    <div className="flex flex-col gap-1.5">
                      <span className="text-xs font-mono uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                        <ShieldAlert className="w-3.5 h-3.5" />
                        Historic Dissenting Opinion
                      </span>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed bg-rose-500/5 p-4 rounded-xl border border-rose-500/20 break-words">
                        <AnnotatedLegalText text={currentCase.notableDissent} />
                      </p>
                    </div>
                  )}

                  {/* Section 6: Courtroom Utility Today */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5">
                      <Scale className="w-3.5 h-3.5 text-[var(--accent)]" />
                      Courtroom Utility: How Courts Apply & Cite This Precedent Today
                    </span>
                    <div className="bg-emerald-500/5 p-4 rounded-xl border border-emerald-500/20 text-xs text-[var(--text-secondary)] leading-relaxed flex flex-col gap-2 break-words">
                      <p className="break-words">
                        <AnnotatedLegalText text={currentCase.howCourtsApplyToday} />
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
