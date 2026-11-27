import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { EDITORIAL_SPRING, SlidingSegmentedControl } from '../Common/EditorialMotionCards';
import { ChapterComprehensionLab } from '../Common/ChapterComprehensionLab';
import {
  BookOpen,
  Bookmark,
  Scale,
  Award,
  ChevronRight,
  ChevronDown,
  Search,
  ExternalLink,
  Shield,
  Layers,
  Sparkles,
  PanelLeftClose,
  PanelLeftOpen,
  Filter,
  Gavel,
  CheckCircle2,
  ArrowRight,
  Gamepad2,
  BrainCircuit,
  Star
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { CONSTITUTION_PARTS } from '../../data/partsData';
import type { ConstitutionPart, ArticleItem } from '../../types/constitution';
import { getCardIdForArticle } from '../../services/flashcardService';
import { WritsMatrixSVG } from '../VectorDiagrams/WritsMatrixSVG';
import { SeparationOfPowersSVG } from '../VectorDiagrams/SeparationOfPowersSVG';
import { AmendmentPipelineSVG } from '../VectorDiagrams/AmendmentPipelineSVG';
import { FederalRelationsSVG } from '../VectorDiagrams/FederalRelationsSVG';
import { EmergencyMatrixSVG } from '../VectorDiagrams/EmergencyMatrixSVG';
import { LegislativePassageSVG } from '../VectorDiagrams/LegislativePassageSVG';
import { CriminalConstitutionalPipelineSVG } from '../VectorDiagrams/CriminalConstitutionalPipelineSVG';
import { ExecutiveClemencyArchitectureSVG } from '../VectorDiagrams/ExecutiveClemencyArchitectureSVG';
import { GSTCouncilFiscalSVG } from '../VectorDiagrams/GSTCouncilFiscalSVG';
import { CivilServicesSafeguardsSVG } from '../VectorDiagrams/CivilServicesSafeguardsSVG';
import { BasicStructureEvolutionSVG } from '../VectorDiagrams/BasicStructureEvolutionSVG';
import { AsymmetricFederalismSVG } from '../VectorDiagrams/AsymmetricFederalismSVG';
import { ElectoralArchitectureSVG } from '../VectorDiagrams/ElectoralArchitectureSVG';
import { AnnotatedLegalText } from '../Common/AnnotatedLegalText';

export const TopicDetailView: React.FC = () => {
  const {
    selectedPartId,
    setSelectedPartId,
    bookmarkedArticles,
    toggleBookmark,
    launchGameDeck,
    launchFlashcardDeck,
    pinnedFlashcardIds,
    togglePinFlashcard
  } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobilePartsOpen, setIsMobilePartsOpen] = useState(false);
  const [articleDisplayMode, setArticleDisplayMode] = useState<'all' | 'eli5_focus'>('all');
  const [partCasesMap, setPartCasesMap] = useState<Record<string, any[]>>({});
  const [activePartCaseIdx, setActivePartCaseIdx] = useState(0);
  const [partMcqAnswers, setPartMcqAnswers] = useState<Record<string, number>>({});
  const [showPartModelAnswer, setShowPartModelAnswer] = useState(false);
  const [expandedArticleNums, setExpandedArticleNums] = useState<Record<string, boolean>>({});

  // Selected Part or default to Part III
  const currentPart = CONSTITUTION_PARTS.find((p) => p.id === selectedPartId) || CONSTITUTION_PARTS[2];

  useEffect(() => {
    setActivePartCaseIdx(0);
    setShowPartModelAnswer(false);
    setExpandedArticleNums({});
    let cancelled = false;
    if (partCasesMap[currentPart.id]) return;
    fetch(`/data/part-case-studies/${currentPart.id}.json`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && Array.isArray(data)) {
          setPartCasesMap((prev) => ({ ...prev, [currentPart.id]: data }));
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [currentPart.id, partCasesMap]);

  const currentPartCases = partCasesMap[currentPart.id] || [];
  const activePartCase = currentPartCases[activePartCaseIdx] || currentPartCases[0] || null;

  const getPartDeckId = (partId: string): string => {
    if (partId === 'part-3') return 'part3-rights';
    if (partId === 'part-4' || partId === 'part-4a') return 'part4-dpsp';
    if (partId === 'part-5') return 'part5-union';
    if (['part-6', 'part-8', 'part-11'].includes(partId)) return 'part6-federal';
    return 'part-special';
  };

  const categories = ['All', 'Foundation', 'Rights & Duties', 'Governance', 'Federalism', 'Special & Emergency'];

  const filteredParts = CONSTITUTION_PARTS.filter((p) => {
    if (activeCategory !== 'All' && p.category !== activeCategory) return false;
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      return (
        p.title.toLowerCase().includes(q) ||
        p.partNumber.toLowerCase().includes(q) ||
        p.articles.some((a) => a.number.includes(q) || a.title.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6 animate-fadeIn">
      {/* Mobile Collapsible Parts Trigger */}
      <div className="lg:hidden flex flex-col gap-2">
        <button
          onClick={() => setIsMobilePartsOpen((prev) => !prev)}
          className="flex items-center justify-between p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)]"
        >
          <div className="flex items-center gap-2 min-w-0">
            <BookOpen className="w-4 h-4 text-[var(--accent)] shrink-0" />
            <span className="font-bold text-[var(--accent)]">{currentPart.partNumber}:</span>
            <span className="truncate">{currentPart.title}</span>
          </div>
          <div className="flex items-center gap-1.5 shrink-0 ml-2">
            <span className="text-[10px] text-[var(--text-muted)]">25 Parts</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isMobilePartsOpen ? 'rotate-180 text-[var(--accent)]' : ''}`} />
          </div>
        </button>

        {isMobilePartsOpen && (
          <div className="p-4 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] shadow-xl flex flex-col gap-3 animate-fadeIn">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)]">
              <Search className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search parts or articles..."
                className="w-full bg-transparent border-none text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none font-mono"
              />
            </div>
            <div className="flex flex-col gap-2 max-h-60 overflow-y-auto">
              {filteredParts.map((part) => (
                <button
                  key={part.id}
                  onClick={() => {
                    setSelectedPartId(part.id);
                    setIsMobilePartsOpen(false);
                  }}
                  className={`p-2.5 rounded-lg text-left text-xs font-mono border transition-all ${
                    part.id === currentPart.id
                      ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold border-[var(--accent)]'
                      : 'bg-[var(--bg-base)] text-[var(--text-secondary)] border-[var(--border-subtle)]'
                  }`}
                >
                  <span className="font-bold mr-1.5">{part.partNumber}:</span>
                  <span>{part.title}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-6 xl:gap-8 items-start">
        {/* Desktop Parts Sidebar (Collapsible) */}
        {!isSidebarCollapsed ? (
          <div className="hidden lg:flex lg:w-72 xl:w-80 shrink-0 flex-col gap-4 animate-fadeIn">
            {/* Header with Collapse Button */}
            <div className="flex items-center justify-between px-1 text-xs font-mono text-[var(--text-muted)]">
              <span className="font-bold uppercase tracking-wider text-[var(--text-primary)]">
                25 Constitutional Parts
              </span>
              <button
                onClick={() => setIsSidebarCollapsed(true)}
                title="Collapse sidebar to maximize reading area"
                className="flex items-center gap-1 hover:text-[var(--text-primary)] text-[11px] px-2 py-0.5 rounded hover:bg-[var(--bg-surface)] transition-colors"
              >
                <PanelLeftClose className="w-3.5 h-3.5" />
                <span>Hide</span>
              </button>
            </div>

            {/* Search & Category Filter */}
            <div className="flex flex-col gap-3 p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)]">
                <Search className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search parts or articles..."
                  className="w-full bg-transparent border-none text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none font-mono"
                />
              </div>

              <SlidingSegmentedControl
                layoutGroupId="parts-category-filter"
                variant="pill"
                value={activeCategory}
                onChange={setActiveCategory}
                options={categories.map((cat) => ({ id: cat, label: cat }))}
              />
            </div>

            {/* Parts List */}
            <div className="flex flex-col gap-2 max-h-[70vh] overflow-y-auto pr-1">
              {filteredParts.map((part) => {
                const isSelected = part.id === currentPart.id;
                return (
                  <div
                    key={part.id}
                    onClick={() => setSelectedPartId(part.id)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-[var(--bg-surface-elevated)] border-[var(--accent)] shadow-sm'
                        : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono font-bold text-[var(--accent)]">
                        {part.partNumber}
                      </span>
                      <span className="text-[10px] font-mono text-[var(--text-muted)]">
                        {part.articlesRange}
                      </span>
                    </div>
                    <h4 className="text-xs font-semibold text-[var(--text-primary)] line-clamp-1">
                      {part.title}
                    </h4>
                    <p className="text-[11px] text-[var(--text-secondary)] line-clamp-2 mt-1">
                      {part.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* Desktop Collapsed Indicator Button */
          <div className="hidden lg:block shrink-0">
            <button
              onClick={() => setIsSidebarCollapsed(false)}
              className="flex items-center gap-2 p-3 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all shadow-sm"
              title="Show 25 Constitutional Parts sidebar"
            >
              <PanelLeftOpen className="w-4 h-4 text-[var(--accent)]" />
              <span>Show 25 Parts</span>
            </button>
          </div>
        )}

      {/* Right Column: In-Depth Part Details & Articles */}
      <div className="w-full flex-1 flex flex-col gap-8 min-w-0">
        {/* Part Header Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-[var(--accent)] text-[var(--accent-contrast)]">
                {currentPart.partNumber}
              </span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--text-secondary)] border border-[var(--badge-border)]">
                {currentPart.articlesRange}
              </span>
            </div>
            <span className="text-xs font-mono text-[var(--text-muted)]">
              Category: {currentPart.category}
            </span>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-2">
              <AnnotatedLegalText text={currentPart.title} />
            </h2>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              <AnnotatedLegalText text={currentPart.description} />
            </p>
          </div>

          {/* Historical Background */}
          <div className="p-4 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
              Framing & Historical Context
            </span>
            <p className="text-xs text-[var(--text-primary)] leading-relaxed">
              <AnnotatedLegalText text={currentPart.historicalBackground} />
            </p>
          </div>

          {/* Key Principles */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
              Core Principles & Doctrines
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {currentPart.keyPrinciples.map((prin, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 shrink-0" />
                  <span className="leading-relaxed">
                    <AnnotatedLegalText text={prin} />
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Memory Matcher & Leitner SRS Rapid Recall Triggers */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent)] transition-all">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center shrink-0 border border-[var(--accent)]/20">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold font-mono text-[var(--text-primary)]">
                  Active Recall Lab: {currentPart.partNumber}
                </h4>
                <p className="text-[11px] text-[var(--text-muted)]">
                  Drill {currentPart.title} via Synaptic Tile Matcher or 5-Box Leitner SRS Flashcards
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-wrap shrink-0">
              <button
                onClick={() => launchFlashcardDeck('articles', currentPart.partNumber.replace('-', ''))}
                className="flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)] text-xs font-mono font-bold transition-all shadow-sm"
              >
                <BrainCircuit className="w-3.5 h-3.5" />
                <span>SRS Flashcards</span>
              </button>
              <button
                onClick={() => launchGameDeck(getPartDeckId(currentPart.id))}
                className="flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-[var(--accent)] hover:opacity-90 text-[var(--accent-contrast)] text-xs font-mono font-bold transition-all shadow-sm"
              >
                <span>Play {currentPart.partNumber} Matcher</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Embedded SVG Visualizers for this Part */}
        {currentPart.id === 'part-3' && (
          <div className="flex flex-col gap-6">
            <CriminalConstitutionalPipelineSVG />
            <WritsMatrixSVG />
          </div>
        )}
        {currentPart.id === 'part-5' && (
          <div className="flex flex-col gap-6">
            <ExecutiveClemencyArchitectureSVG />
            <SeparationOfPowersSVG />
          </div>
        )}
        {currentPart.id === 'part-6' && (
          <div className="flex flex-col gap-6">
            <ExecutiveClemencyArchitectureSVG />
            <LegislativePassageSVG />
          </div>
        )}
        {currentPart.id === 'part-11' && (
          <div className="flex flex-col gap-2">
            <FederalRelationsSVG />
          </div>
        )}
        {currentPart.id === 'part-12' && (
          <div className="flex flex-col gap-2">
            <GSTCouncilFiscalSVG />
          </div>
        )}
        {currentPart.id === 'part-14' && (
          <div className="flex flex-col gap-2">
            <CivilServicesSafeguardsSVG />
          </div>
        )}
        {currentPart.id === 'part-15' && (
          <div className="flex flex-col gap-2">
            <ElectoralArchitectureSVG />
          </div>
        )}
        {currentPart.id === 'part-18' && (
          <div className="flex flex-col gap-2">
            <EmergencyMatrixSVG />
          </div>
        )}
        {currentPart.id === 'part-20' && (
          <div className="flex flex-col gap-6">
            <AmendmentPipelineSVG />
            <BasicStructureEvolutionSVG />
          </div>
        )}
        {currentPart.id === 'part-21' && (
          <div className="flex flex-col gap-2">
            <AsymmetricFederalismSVG />
          </div>
        )}

        {/* Articles Clause-by-Clause Explorer */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[var(--accent)]" />
              <h3 className="text-xl font-bold text-[var(--text-primary)]">
                Articles in {currentPart.partNumber}
              </h3>
              <span className="text-xs font-mono text-[var(--text-muted)] hidden sm:inline">
                ({currentPart.articles.length} key articles cataloged)
              </span>
            </div>

            {/* Quick Display Mode + Expand/Collapse + Jump to Practice */}
            <div className="flex items-center flex-wrap gap-2">
              <button
                type="button"
                onClick={() => {
                  const allExpanded =
                    currentPart.articles.length > 0 &&
                    currentPart.articles.every((a) => expandedArticleNums[a.number]);
                  if (allExpanded) {
                    setExpandedArticleNums({});
                  } else {
                    const next: Record<string, boolean> = {};
                    currentPart.articles.forEach((a) => {
                      next[a.number] = true;
                    });
                    setExpandedArticleNums(next);
                  }
                }}
                className="px-2.5 py-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[11px] font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
              >
                {currentPart.articles.length > 0 &&
                currentPart.articles.every((a) => expandedArticleNums[a.number])
                  ? 'Collapse All'
                  : 'Expand All'}
              </button>

              <button
                type="button"
                onClick={() =>
                  document.getElementById('part-practice-arena')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-2.5 py-1.5 rounded-lg border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[11px] font-mono font-bold text-[var(--accent)] hover:bg-[var(--accent)]/20 cursor-pointer"
              >
                Jump to Practice ↓
              </button>

              <div className="flex items-center flex-wrap max-w-full p-0.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs font-mono shadow-inner">
              <button
                onClick={() => setArticleDisplayMode('all')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  articleDisplayMode === 'all'
                    ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold shadow-xs'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                <span>Standard Bare Act</span>
              </button>
              <button
                onClick={() => setArticleDisplayMode('eli5_focus')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  articleDisplayMode === 'eli5_focus'
                    ? 'bg-amber-500 text-black font-bold shadow-xs'
                    : 'text-amber-500 hover:text-amber-400 font-bold'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>ELI5 & Scenarios</span>
              </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            {currentPart.articles.map((art) => {
              const artLabel = `Art ${art.number}`;
              const isBookmarked = bookmarkedArticles.includes(artLabel);
              const isExpanded = !!expandedArticleNums[art.number];

              return (
                <div
                  key={art.number}
                  className={`rounded-2xl bg-[var(--bg-surface)] border transition-all flex flex-col shadow-sm ${
                    articleDisplayMode === 'eli5_focus'
                      ? 'border-amber-500/30 ring-1 ring-amber-500/20'
                      : 'border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                  }`}
                >
                  {/* Collapsible Tile Header */}
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() =>
                      setExpandedArticleNums((prev) => ({
                        ...prev,
                        [art.number]: !prev[art.number],
                      }))
                    }
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setExpandedArticleNums((prev) => ({
                          ...prev,
                          [art.number]: !prev[art.number],
                        }));
                      }
                    }}
                    className="p-4 sm:px-5 sm:py-4 flex items-start justify-between gap-3 cursor-pointer select-none"
                  >
                    <div className="min-w-0 flex-1 space-y-1">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className={`px-2.5 py-0.5 rounded-lg font-mono text-xs font-bold border ${
                          articleDisplayMode === 'eli5_focus'
                            ? 'bg-amber-500/20 text-amber-500 border-amber-500/40'
                            : 'bg-[var(--badge-bg)] text-[var(--accent)] border-[var(--badge-border)]'
                        }`}>
                          Article {art.number}
                        </span>
                        <h4 className="text-sm sm:text-base font-bold text-[var(--text-primary)]">
                          <AnnotatedLegalText text={art.title} />
                        </h4>
                      </div>
                      {!isExpanded && (
                        <p className="text-xs text-[var(--text-muted)] line-clamp-1">
                          {art.summary}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0" onClick={(e) => e.stopPropagation()}>
                      <button
                        onClick={() => togglePinFlashcard(getCardIdForArticle(art.number))}
                        title={pinnedFlashcardIds.includes(getCardIdForArticle(art.number)) ? 'Unpin from SRS Flashcards' : 'Pin Article to SRS Flashcards'}
                        className={`p-1.5 rounded-xl border transition-colors ${
                          pinnedFlashcardIds.includes(getCardIdForArticle(art.number))
                            ? 'bg-amber-500/15 border-amber-500/40 text-amber-400'
                            : 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-amber-400'
                        }`}
                      >
                        <Star className={`w-4 h-4 ${pinnedFlashcardIds.includes(getCardIdForArticle(art.number)) ? 'fill-current' : ''}`} />
                      </button>

                      <button
                        onClick={() =>
                          launchFlashcardDeck('articles', currentPart.partNumber.replace('-', ''), getCardIdForArticle(art.number))
                        }
                        title={`Drill Article ${art.number} in SRS Flashcards`}
                        className="p-1.5 rounded-xl border border-[var(--badge-border)] bg-[var(--badge-bg)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)] transition-colors"
                      >
                        <BrainCircuit className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => toggleBookmark(artLabel)}
                        title={isBookmarked ? 'Remove bookmark' : 'Bookmark article'}
                        className={`p-1.5 rounded-xl border transition-colors ${
                          isBookmarked
                            ? 'bg-[var(--gold)]/10 border-[var(--gold)]/30 text-[var(--gold)]'
                            : 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                        }`}
                      >
                        <Bookmark className="w-4 h-4 fill-current" />
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setExpandedArticleNums((prev) => ({
                            ...prev,
                            [art.number]: !prev[art.number],
                          }))
                        }
                        aria-label={isExpanded ? 'Collapse article' : 'Expand article'}
                        className="p-1.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-base)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-[var(--accent)]' : ''}`} />
                      </button>
                    </div>
                  </div>

                  {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={EDITORIAL_SPRING}
                    className="px-5 pb-5 pt-3 border-t border-[var(--border-subtle)]/60 flex flex-col gap-3.5"
                  >

                  {/* IF ELI5 FOCUS MODE: Surface Plain English and Real-World First */}
                  {articleDisplayMode === 'eli5_focus' ? (
                    <>
                      {/* Plain English Banner First */}
                      <div className="p-4 rounded-xl bg-gradient-to-br from-amber-500/10 via-[var(--bg-base)] to-[var(--bg-base)] border border-amber-500/30 flex flex-col gap-1.5">
                        <span className="text-[10px] font-mono font-bold text-amber-500 uppercase tracking-wider flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" /> Plain-English Meaning (ELI5)
                        </span>
                        <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed font-sans font-medium">
                          <AnnotatedLegalText text={art.plainEnglish || art.summary} />
                        </p>
                      </div>

                      {/* Real-World Scenario Second */}
                      {art.realWorldScenario && (
                        <div className="p-3.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-emerald-500/30 flex flex-col gap-1.5">
                          <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                            <Scale className="w-3.5 h-3.5" /> Real-World Everyday / Practical Scenario
                          </span>
                          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                            <AnnotatedLegalText text={art.realWorldScenario} />
                          </p>
                        </div>
                      )}

                      {/* Summary */}
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        <AnnotatedLegalText text={art.summary} />
                      </p>

                      {/* Constitutional Text Snippet */}
                      <div className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-muted)] italic leading-relaxed">
                        Statutory Text: "<AnnotatedLegalText text={art.textSnippet} />"
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Standard Layout */}
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                        <AnnotatedLegalText text={art.summary} />
                      </p>

                      {/* Plain English Highlight Box */}
                      {art.plainEnglish && (
                        <div className="p-3 rounded-xl bg-[var(--accent)]/5 border border-[var(--accent)]/20 flex flex-col gap-1">
                          <span className="text-[10px] font-mono font-bold text-[var(--accent)] uppercase tracking-wider flex items-center gap-1.5">
                            <Sparkles className="w-3 h-3" /> In Plain English
                          </span>
                          <p className="text-xs text-[var(--text-primary)] leading-relaxed font-medium">
                            <AnnotatedLegalText text={art.plainEnglish} />
                          </p>
                        </div>
                      )}

                      {/* Constitutional Text Snippet */}
                      <div className="p-3.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)] italic leading-relaxed">
                        "<AnnotatedLegalText text={art.textSnippet} />"
                      </div>

                      {/* Real-World Everyday / Courtroom Scenario */}
                      {art.realWorldScenario && (
                        <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col gap-1.5">
                          <span className="text-[10px] font-mono font-bold text-[var(--gold)] uppercase tracking-wider flex items-center gap-1.5">
                            <Scale className="w-3.5 h-3.5" /> Real-World Everyday / Practical Scenario
                          </span>
                          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                            <AnnotatedLegalText text={art.realWorldScenario} />
                          </p>
                        </div>
                      )}
                    </>
                  )}

                  {/* Prosecutor / Judicial Litigation Note */}
                  {art.prosecutionNote && (
                    <div className="p-3.5 rounded-xl bg-purple-500/5 border border-purple-500/20 flex flex-col gap-1.5">
                      <span className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Shield className="w-3.5 h-3.5" /> Prosecutor & Judicial Litigation Note
                      </span>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        <AnnotatedLegalText text={art.prosecutionNote} />
                      </p>
                    </div>
                  )}

                  {/* Clauses Breakdown with Examples */}
                  {art.clauses && art.clauses.length > 0 && (
                    <div className="mt-1 flex flex-col gap-2 pt-2 border-t border-[var(--border-subtle)]">
                      <span className="text-[10px] font-semibold font-mono uppercase tracking-wider text-[var(--text-muted)]">
                        Clause Breakdown & Practical Interpretation
                      </span>
                      <div className="grid grid-cols-1 gap-2">
                        {art.clauses.map((c, i) => (
                          <div
                            key={i}
                            className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs flex flex-col gap-1"
                          >
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-mono font-bold text-[var(--accent)] text-[11px] px-1.5 py-0.2 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                                {c.clause}
                              </span>
                              <span className="text-[var(--text-primary)] font-medium">
                                <AnnotatedLegalText text={c.explanation} />
                              </span>
                            </div>
                            {c.example && (
                              <div className="mt-1 pl-2 border-l-2 border-[var(--accent)]/50 text-[11px] text-[var(--text-muted)] italic">
                                Example: <AnnotatedLegalText text={c.example} />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Exceptions & Provisos */}
                  {art.exceptions && art.exceptions.length > 0 && (
                    <div className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs flex flex-col gap-1.5">
                      <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider">
                        Constitutional Exceptions & Provisos
                      </span>
                      <ul className="list-disc list-inside text-xs text-[var(--text-secondary)] space-y-1">
                        {art.exceptions.map((ex, i) => (
                          <li key={i}>
                            <AnnotatedLegalText text={ex} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Key Landmark Cases for this Article */}
                  {art.landmarkCases && art.landmarkCases.length > 0 && (
                    <div className="flex flex-col gap-2 pt-2 border-t border-[var(--border-subtle)]">
                      <span className="text-[10px] font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider">
                        Key Landmark Precedents for Article {art.number}
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {art.landmarkCases.map((lc, i) => (
                          <div
                            key={i}
                            className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs flex flex-col justify-between gap-1.5"
                          >
                            <div>
                              <div className="flex items-center justify-between gap-1 mb-1">
                                <span className="font-bold text-[var(--text-primary)] truncate">{lc.caseName}</span>
                                <span className="text-[10px] font-mono text-[var(--gold)] shrink-0 font-bold">{lc.year}</span>
                              </div>
                              {lc.bench && (
                                <span className="text-[10px] font-mono text-[var(--text-muted)] block mb-1">
                                  {lc.bench}
                                </span>
                              )}
                              <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                                <AnnotatedLegalText text={lc.summary} />
                              </p>
                            </div>
                            <span className="text-[10px] font-mono text-[var(--accent)] pt-1 border-t border-[var(--border-subtle)]/60">
                              Ruling: <AnnotatedLegalText text={lc.significance} />
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Associated Doctrines */}
                  {art.doctrineLinks && art.doctrineLinks.length > 0 && (
                    <div className="flex items-center gap-1.5 flex-wrap pt-1">
                      <span className="text-[10px] font-mono text-[var(--text-muted)]">Doctrines:</span>
                      {art.doctrineLinks.map((doc, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                        >
                          <AnnotatedLegalText text={doc} />
                        </span>
                      ))}
                    </div>
                  )}
                  </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Landmark Cases in this Part */}
        {currentPart.landmarkCases && currentPart.landmarkCases.length > 0 && (
          <div className="flex flex-col gap-4 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
            <h3 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
              <Award className="w-5 h-5 text-[var(--gold)]" />
              <span>Landmark Precedents Governing {currentPart.partNumber}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentPart.landmarkCases.map((lc, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex flex-col justify-between gap-3"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-bold text-[var(--text-primary)]">
                        {lc.caseName}
                      </h4>
                      <span className="text-xs font-mono text-[var(--gold)] font-semibold">
                        {lc.year}
                      </span>
                    </div>
                    {lc.bench && (
                      <span className="text-[10px] font-mono text-[var(--text-muted)]">
                        {lc.bench}
                      </span>
                    )}
                    <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed">
                      {lc.summary}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-[var(--border-subtle)] text-[11px] font-mono text-[var(--accent)]">
                    Impact: {lc.significance}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 200 Case Studies Lab for this Constitutional Part */}
        {currentPartCases.length > 0 && activePartCase && (
          <div id="part-practice-arena" className="flex flex-col gap-4 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-4">
              <div>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
                  {currentPartCases.length} Part-Wise Case Studies
                </span>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mt-1 flex items-center gap-2">
                  <Gavel className="w-5 h-5 text-[var(--accent)]" />
                  <span>{currentPart.partNumber} Applied Case Study Arena</span>
                </h3>
              </div>
              <div className="text-xs font-mono text-[var(--text-muted)]">
                Case {activePartCaseIdx + 1} / {currentPartCases.length}
              </div>
            </div>

            {/* 25-Case Batch Jumper */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)] mr-1">
                Batch:
              </span>
              {Array.from({ length: Math.ceil(currentPartCases.length / 25) }, (_, bIdx) => {
                const start = bIdx * 25;
                const end = Math.min(start + 25, currentPartCases.length);
                const isBatchActive = activePartCaseIdx >= start && activePartCaseIdx < end;
                return (
                  <button
                    key={bIdx}
                    onClick={() => {
                      setActivePartCaseIdx(start);
                      setShowPartModelAnswer(false);
                    }}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-all ${
                      isBatchActive
                        ? 'bg-[var(--accent)]/15 text-[var(--accent)] border-[var(--accent)]/40'
                        : 'bg-[var(--bg-surface-elevated)] text-[var(--text-muted)] border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {start + 1}–{end}
                  </button>
                );
              })}
            </div>

            {/* Active Batch Selector Strip */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
              {(() => {
                const bStart = Math.floor(activePartCaseIdx / 25) * 25;
                const bEnd = Math.min(bStart + 25, currentPartCases.length);
                return currentPartCases.slice(bStart, bEnd).map((cs, relIdx) => {
                  const idx = bStart + relIdx;
                  const isSel = idx === activePartCaseIdx;
                  return (
                    <button
                      key={cs.id}
                      onClick={() => {
                        setActivePartCaseIdx(idx);
                        setShowPartModelAnswer(false);
                      }}
                      className={`px-3 py-2 rounded-xl border text-left shrink-0 min-w-[150px] max-w-[195px] transition-all text-xs ${
                        isSel
                          ? 'bg-[var(--accent)] text-[var(--accent-contrast)] border-[var(--accent)] shadow-sm'
                          : 'bg-[var(--bg-surface-elevated)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent)]/50'
                      }`}
                    >
                      <div className="font-bold text-[11px]">Case {idx + 1}</div>
                      <div className="text-[10px] truncate opacity-85">
                        {String(cs.title || '').replace(/^Case \d+:\s*/i, '')}
                      </div>
                    </button>
                  );
                });
              })()}
            </div>

            {/* Active Case Matrix & Interactive Questions */}
            <AnimatePresence mode="wait">
            <motion.div
              key={activePartCase.id}
              initial={{ opacity: 0, y: 10, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.99 }}
              transition={EDITORIAL_SPRING}
              className="p-5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] space-y-4"
            >
              <div>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {(activePartCase.statutoryApplicability || []).map((tag: string, tIdx: number) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[10px] font-mono text-[var(--text-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-base font-bold text-[var(--text-primary)]">{activePartCase.title}</h4>
                <p className="text-xs text-[var(--accent)] font-mono mt-0.5">{activePartCase.legalTheme}</p>
              </div>

              <div className="p-4 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)] mb-1">
                  Factual Matrix
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {activePartCase.factualMatrix}
                </p>
              </div>

              {Array.isArray(activePartCase.framingQuestions) && (
                <div className="space-y-1.5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
                    Issues for Determination
                  </div>
                  {activePartCase.framingQuestions.map((fq: string, fIdx: number) => (
                    <div key={fIdx} className="text-xs text-[var(--text-primary)] leading-relaxed">
                      {fq}
                    </div>
                  ))}
                </div>
              )}

              {/* Comprehension MCQs */}
              {Array.isArray(activePartCase.comprehensionMCQs) && (
                <div className="space-y-3 pt-2 border-t border-[var(--border-subtle)]">
                  {activePartCase.comprehensionMCQs.map((mcq: any, qIdx: number) => {
                    const chosen = partMcqAnswers[mcq.id];
                    const answered = chosen !== undefined;
                    return (
                      <div key={mcq.id} className="p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-2">
                        <div className="text-xs font-semibold text-[var(--text-primary)]">
                          Q{qIdx + 1}. {mcq.question}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {mcq.options.map((opt: string, oIdx: number) => {
                            const isCorrect = oIdx === mcq.correctIndex;
                            const isPicked = chosen === oIdx;
                            let cls = 'bg-[var(--bg-surface-elevated)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent)]/50';
                            if (answered) {
                              if (isCorrect) cls = 'bg-emerald-500/15 border-emerald-500/50 text-emerald-300';
                              else if (isPicked) cls = 'bg-rose-500/15 border-rose-500/50 text-rose-300';
                            }
                            return (
                              <button
                                key={oIdx}
                                disabled={answered}
                                onClick={() => setPartMcqAnswers((prev) => ({ ...prev, [mcq.id]: oIdx }))}
                                className={`p-2.5 rounded-lg border text-left text-xs transition-all ${cls}`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>
                        {answered && (
                          <p className="text-[11px] text-[var(--text-muted)] pt-1 leading-relaxed">
                            {mcq.explanation}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Toggle Model Answer & Rubric */}
              <div className="pt-2">
                <button
                  onClick={() => setShowPartModelAnswer((v) => !v)}
                  className="px-4 py-2 rounded-lg text-xs font-bold bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/30 hover:bg-[var(--accent)]/25 transition-all"
                >
                  {showPartModelAnswer ? 'Hide IRAC Model Answer & Rubric' : 'Reveal IRAC Model Answer & 10-Mark Rubric'}
                </button>
                {showPartModelAnswer && (
                  <div className="mt-3 p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-3">
                    <div className="text-xs text-[var(--text-secondary)] whitespace-pre-line leading-relaxed">
                      {activePartCase.modelAnswer}
                    </div>
                    {Array.isArray(activePartCase.markingRubric) && (
                      <div className="pt-2 border-t border-[var(--border-subtle)] space-y-1">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
                          Marking Rubric
                        </div>
                        {activePartCase.markingRubric.map((r: any, rIdx: number) => (
                          <div key={rIdx} className="flex justify-between text-[11px] text-[var(--text-secondary)]">
                            <span>{r.criterion}</span>
                            <span className="font-mono text-[var(--gold)] font-bold">{r.marks} marks</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
            </AnimatePresence>
          </div>
        )}

        {/* Chapter Comprehension, Fill-in-the-Blanks & Quick Check */}
        <ChapterComprehensionLab part={currentPart} />
      </div>
    </div>
  </div>
);
};
