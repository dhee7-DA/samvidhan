import React, { useState, useMemo, useEffect } from 'react';
import {
  BookOpen,
  Search,
  Bookmark,
  ChevronRight,
  ChevronLeft,
  Check,
  Filter,
  RotateCcw,
  Copy,
  ExternalLink,
  GitCommit,
  Scale,
  AlertTriangle,
  Layers,
  History,
  FileText,
  Award,
  Sparkles,
  Lightbulb,
  Shield,
  BrainCircuit,
  Star,
  Zap,
  ArrowRight
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { AnnotatedLegalText } from '../Common/AnnotatedLegalText';
import { bareActService, type BareActArticle } from '../../services/bareActService';
import { getCardIdForArticle } from '../../services/flashcardService';
import { caseStoryService } from '../../services/caseStoryService';
import { ArticleRealCaseStoryTab } from './ArticleRealCaseStoryTab';
import { lookupSpeedHackForArticle } from '../../data/fastTrackHacksData';

export const ArticlesMasterView: React.FC = () => {
  const {
    setActiveTab,
    setSelectedPartId,
    bookmarkedArticles,
    toggleBookmark,
    launchGameDeck,
    launchFlashcardDeck,
    pinnedFlashcardIds,
    togglePinFlashcard
  } = useTheme();

  // Mode: 'reader' (Clause-by-Clause Bare Act Explorer) vs 'grid' (Directory Cards)
  const [viewMode, setViewMode] = useState<'reader' | 'grid'>('reader');

  // Selected Article for Reader mode
  const [selectedArticleNum, setSelectedArticleNum] = useState<string>(() => {
    try {
      return localStorage.getItem('samvidhan_active_article') || '21';
    } catch (e) {
      return '21';
    }
  });

  // Keep localStorage synced whenever selected article changes
  useEffect(() => {
    try {
      localStorage.setItem('samvidhan_active_article', selectedArticleNum);
    } catch (e) {
      // ignore
    }
  }, [selectedArticleNum]);

  // Sync if another tab or view updates localStorage
  useEffect(() => {
    const handleStorage = (e?: Event) => {
      try {
        const raw = (e as CustomEvent)?.detail;
        const stored = (typeof raw === 'string' ? raw : raw?.articleId) || localStorage.getItem('samvidhan_active_article');
        if (stored && stored !== selectedArticleNum) {
          setSelectedArticleNum(stored);
          setViewMode('reader');
        }
      } catch (e) {
        // ignore
      }
    };
    handleStorage();
    window.addEventListener('storage', handleStorage);
    window.addEventListener('samvidhan_navigate_article', handleStorage);
    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('samvidhan_navigate_article', handleStorage);
    };
  }, [selectedArticleNum]);

  // Active Tab inside Reader view
  const [readerTab, setReaderTab] = useState<'statutory' | 'story' | 'eli5' | 'diff' | 'analysis' | 'amendments'>('statutory');

  // Search and Filters
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedPart, setSelectedPart] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [onlyAmended, setOnlyAmended] = useState<boolean>(false);
  const [onlyDiffs, setOnlyDiffs] = useState<boolean>(false);
  const [onlyBookmarked, setOnlyBookmarked] = useState<boolean>(false);
  const [copiedCitation, setCopiedCitation] = useState<boolean>(false);

  // Jump to article state
  const [jumpInput, setJumpInput] = useState<string>('');

  const partsList = useMemo(() => bareActService.getPartsList(), []);
  const categoriesList = useMemo(() => bareActService.getCategoriesList(), []);

  // Filtered Articles
  const filteredArticles = useMemo(() => {
    let list = bareActService.searchArticles(
      searchTerm,
      selectedPart,
      selectedCategory,
      onlyAmended,
      onlyDiffs
    );

    if (onlyBookmarked) {
      list = list.filter((a) => bookmarkedArticles.includes(`Art ${a.number}`));
    }

    return list;
  }, [searchTerm, selectedPart, selectedCategory, onlyAmended, onlyDiffs, onlyBookmarked, bookmarkedArticles]);

  // Current active article object
  const activeArticle: BareActArticle = useMemo(() => {
    const found = bareActService.getArticleByNumber(selectedArticleNum);
    if (found) return found;
    return filteredArticles[0] || bareActService.getArticleByNumber('21')!;
  }, [selectedArticleNum, filteredArticles]);

  const { prev, next } = useMemo(
    () => bareActService.getAdjacentArticles(activeArticle.number),
    [activeArticle.number]
  );

  const relatedDoctrines = useMemo(
    () => bareActService.getRelatedDoctrines(activeArticle.number),
    [activeArticle.number]
  );

  const relatedLandmarkJudgments = useMemo(
    () => bareActService.getRelatedLandmarkJudgments(activeArticle.number),
    [activeArticle.number]
  );

  const isCurrentBookmarked = bookmarkedArticles.includes(`Art ${activeArticle.number}`);
  const speedHack = useMemo(() => lookupSpeedHackForArticle(activeArticle.number), [activeArticle.number]);

  const handleCopyCitation = () => {
    const citation = `Article ${activeArticle.number}, Constitution of India (1950) — "${activeArticle.title}"`;
    navigator.clipboard.writeText(citation);
    setCopiedCitation(true);
    setTimeout(() => setCopiedCitation(false), 2000);
  };

  const handleJumpToArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!jumpInput.trim()) return;
    const clean = jumpInput.trim().toUpperCase();
    const target = bareActService.getArticleByNumber(clean);
    if (target) {
      setSelectedArticleNum(target.number);
      setJumpInput('');
    } else {
      alert(`Article "${jumpInput}" not found in Constitution catalog (1 to 395).`);
    }
  };

  const getPartId = (partName: string) => {
    const map: Record<string, string> = {
      'Part I': 'part-1',
      'Part II': 'part-2',
      'Part III': 'part-3',
      'Part IV': 'part-4',
      'Part IV-A': 'part-4a',
      'Part V': 'part-5',
      'Part VI': 'part-6',
      'Part VII': 'part-7',
      'Part VIII': 'part-8',
      'Part IX': 'part-9',
      'Part IX-A': 'part-9a',
      'Part IX-B': 'part-9b',
      'Part X': 'part-10',
      'Part XI': 'part-11',
      'Part XII': 'part-12',
      'Part XIII': 'part-13',
      'Part XIV': 'part-14',
      'Part XIV-A': 'part-14a',
      'Part XV': 'part-15',
      'Part XVI': 'part-16',
      'Part XVII': 'part-17',
      'Part XVIII': 'part-18',
      'Part XIX': 'part-19',
      'Part XX': 'part-20',
      'Part XXI': 'part-21',
      'Part XXII': 'part-22'
    };
    return map[partName] || 'part-3';
  };

  const resetAllFilters = () => {
    setSearchTerm('');
    setSelectedPart('All');
    setSelectedCategory('All');
    setOnlyAmended(false);
    setOnlyDiffs(false);
    setOnlyBookmarked(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 flex flex-col gap-6 animate-fadeIn">
      {/* Top Banner & Mode Toggle */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <BookOpen className="w-5 h-5 text-[var(--accent)]" />
            <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Bare Act Explorer (Articles 1–395)
            </h1>
            <span className="text-xs px-2.5 py-0.5 rounded font-mono font-bold bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
              Full Text Verbatim
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            High-density statutory reader with clause-by-clause statutory breakdowns, 1950 vs amended diffs, and legislative footnotes.
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-2 shrink-0 self-stretch sm:self-auto justify-end flex-wrap">
          <button
            onClick={() => {
              if (activeArticle?.part === 'Part III') {
                launchGameDeck('part3-rights');
              } else if (activeArticle?.part === 'Part IV' || activeArticle?.part === 'Part IVA') {
                launchGameDeck('part4-dpsp');
              } else if (activeArticle?.part === 'Part V') {
                launchGameDeck('part5-union');
              } else if (['Part VI', 'Part VIII', 'Part XI'].includes(activeArticle?.part || '')) {
                launchGameDeck('part6-federal');
              } else {
                launchGameDeck('master-shuffle');
              }
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)] hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)] transition-colors shadow-sm"
          >
            <span>🎮 Practice Synaptic Matcher</span>
          </button>

          <button
            onClick={() => launchFlashcardDeck('articles', activeArticle?.part || 'all')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-[var(--accent)] text-[var(--accent-contrast)] hover:opacity-90 transition-all shadow-sm"
            title={`Drill ${activeArticle?.part || 'All'} Articles in Leitner SRS Flashcards`}
          >
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>SRS Flashcards ({activeArticle?.part || 'All'})</span>
          </button>

          <div className="flex items-center gap-1 bg-[var(--bg-surface)] p-1 rounded-xl border border-[var(--border-subtle)]">
            <button
              onClick={() => setViewMode('reader')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                viewMode === 'reader'
                  ? 'bg-[var(--accent)] text-[var(--accent-contrast)] shadow-sm'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Clause Explorer</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                viewMode === 'grid'
                  ? 'bg-[var(--accent)] text-[var(--accent-contrast)] shadow-sm'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Directory Grid</span>
            </button>
          </div>
        </div>
      </div>

      {/* Global Filter Bar */}
      <div className="flex flex-col gap-3 p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
          {/* Search Input */}
          <div className="flex-1 flex items-center gap-3 px-3 py-2 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] focus-within:border-[var(--accent)] transition-colors">
            <Search className="w-4 h-4 text-[var(--text-muted)] shrink-0" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by article number (e.g. 21, 368, 123), keyword, doctrine, or amending act..."
              className="w-full bg-transparent border-none text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none font-mono"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] px-1"
              >
                CLEAR
              </button>
            )}
          </div>

          {/* Part Filter Dropdown */}
          <div className="flex items-center gap-2 shrink-0">
            <label className="text-xs font-mono text-[var(--text-muted)] uppercase">Part:</label>
            <select
              value={selectedPart}
              onChange={(e) => setSelectedPart(e.target.value)}
              className="px-3 py-2 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
            >
              <option value="All">All Parts (26 Parts)</option>
              {partsList.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.label} ({p.count})
                </option>
              ))}
            </select>
          </div>

          {/* Category Dropdown */}
          <div className="flex items-center gap-2 shrink-0">
            <label className="text-xs font-mono text-[var(--text-muted)] uppercase">Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
            >
              <option value="All">All Categories</option>
              {categoriesList.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick Filter Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[var(--border-subtle)] text-xs font-mono">
          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              onClick={() => setOnlyDiffs((prev) => !prev)}
              className={`px-2.5 py-1 rounded-lg border transition-all flex items-center gap-1.5 ${
                onlyDiffs
                  ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold border-[var(--accent)]'
                  : 'bg-[var(--bg-base)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
              }`}
            >
              <GitCommit className="w-3 h-3" />
              <span>1950 vs Modern Diffs (12 Landmark Articles)</span>
            </button>

            <button
              onClick={() => setOnlyAmended((prev) => !prev)}
              className={`px-2.5 py-1 rounded-lg border transition-all flex items-center gap-1.5 ${
                onlyAmended
                  ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold border-[var(--accent)]'
                  : 'bg-[var(--bg-base)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
              }`}
            >
              <History className="w-3 h-3" />
              <span>Amended Articles Only</span>
            </button>

            <button
              onClick={() => setOnlyBookmarked((prev) => !prev)}
              className={`px-2.5 py-1 rounded-lg border transition-all flex items-center gap-1.5 ${
                onlyBookmarked
                  ? 'bg-[var(--gold)]/20 text-[var(--gold)] font-bold border-[var(--gold)]/50'
                  : 'bg-[var(--bg-base)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
              }`}
            >
              <Bookmark className="w-3 h-3" />
              <span>Bookmarked ({bookmarkedArticles.length})</span>
            </button>

            {(searchTerm || selectedPart !== 'All' || selectedCategory !== 'All' || onlyAmended || onlyDiffs || onlyBookmarked) && (
              <button
                onClick={resetAllFilters}
                className="px-2.5 py-1 rounded-lg text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--bg-base)] flex items-center gap-1 border border-transparent hover:border-[var(--border-subtle)] transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

          <div className="text-[var(--text-muted)]">
            Showing <strong className="text-[var(--text-primary)]">{filteredArticles.length}</strong> Articles
          </div>
        </div>
      </div>

      {/* VIEW MODE 1: CLAUSE-BY-CLAUSE BARE ACT EXPLORER */}
      {viewMode === 'reader' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Article Selector Pane */}
          <div className="lg:col-span-4 flex flex-col gap-3 bg-[var(--bg-surface)] p-3 rounded-xl border border-[var(--border-subtle)] max-h-[820px] overflow-y-auto">
            {/* Quick jump by number */}
            <form onSubmit={handleJumpToArticle} className="flex items-center gap-2 pb-2 border-b border-[var(--border-subtle)]">
              <input
                type="text"
                value={jumpInput}
                onChange={(e) => setJumpInput(e.target.value)}
                placeholder="Jump to Art # (e.g. 21, 368)..."
                className="w-full px-2.5 py-1.5 text-xs font-mono rounded bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)]"
              />
              <button
                type="submit"
                className="px-2.5 py-1.5 text-xs font-mono font-bold bg-[var(--accent)] text-[var(--accent-contrast)] rounded hover:opacity-90 shrink-0"
              >
                GO
              </button>
            </form>

            <div className="flex flex-col gap-1.5">
              {filteredArticles.length === 0 ? (
                <div className="p-6 text-center text-xs font-mono text-[var(--text-muted)]">
                  No constitutional articles match the current search filters.
                </div>
              ) : (
                filteredArticles.map((art) => {
                  const isSelected = art.number === activeArticle.number;
                  const isBk = bookmarkedArticles.includes(`Art ${art.number}`);

                  return (
                    <button
                      key={art.number}
                      onClick={() => setSelectedArticleNum(art.number)}
                      className={`p-3 rounded-lg text-left transition-all flex flex-col gap-1 border ${
                        isSelected
                          ? 'bg-[var(--accent)]/10 border-[var(--accent)] text-[var(--text-primary)] shadow-sm'
                          : 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`px-1.5 py-0.5 rounded text-[11px] font-mono font-bold border ${
                              isSelected
                                ? 'bg-[var(--accent)] text-[var(--accent-contrast)] border-[var(--accent)]'
                                : 'bg-[var(--bg-surface)] text-[var(--accent)] border-[var(--badge-border)]'
                            }`}
                          >
                            Art {art.number}
                          </span>
                          <span className="text-[10px] font-mono text-[var(--text-muted)] truncate max-w-[120px]">
                            {art.part}
                          </span>
                        </div>

                        <div className="flex items-center gap-1">
                          {art.hasDiff && (
                            <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                              DIFF
                            </span>
                          )}
                          {art.isAmended && (
                            <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
                              AMD
                            </span>
                          )}
                          {caseStoryService.hasStory(art.number) && (
                            <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)] font-bold">
                              STORY
                            </span>
                          )}
                          {isBk && (
                            <Bookmark className="w-3 h-3 text-[var(--gold)] fill-current shrink-0" />
                          )}
                        </div>
                      </div>

                      <div className="text-xs font-bold truncate text-[var(--text-primary)]">
                        {art.title}
                      </div>

                      <div className="text-[11px] text-[var(--text-muted)] line-clamp-1">
                        {art.summary}
                      </div>
                    </button>
                  );
                })
              )}
            </div>
          </div>

          {/* Right Column: Deep Statutory Bare Act Reader */}
          <div className="lg:col-span-8 flex flex-col gap-4 bg-[var(--bg-surface)] p-5 sm:p-6 rounded-xl border border-[var(--border-subtle)]">
            {/* Active Article Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-[var(--border-subtle)]">
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="px-2.5 py-1 rounded font-mono font-bold text-sm bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
                    Article {activeArticle.number}
                  </span>
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    {activeArticle.part} • {activeArticle.partTitle}
                  </span>
                  {activeArticle.chapter && (
                    <span className="text-xs font-mono text-[var(--text-muted)]">
                      ({activeArticle.chapter})
                    </span>
                  )}
                  {activeArticle.isAmended && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20 font-semibold">
                      Amended Article
                    </span>
                  )}
                  {activeArticle.isRepealed && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-500 border border-rose-500/30 font-semibold">
                      Repealed
                    </span>
                  )}
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] leading-tight">
                  <AnnotatedLegalText text={activeArticle.title} />
                </h2>
              </div>

              {/* Action Toolbar */}
              <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-auto flex-wrap">
                {/* Bare Act / Story / ELI5 Quick Toggle */}
                <div className="flex items-center p-0.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs font-mono shadow-inner">
                  <button
                    onClick={() => setReaderTab('statutory')}
                    title="Read statutory Bare Act verbatim"
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all ${
                      readerTab === 'statutory'
                        ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold shadow-xs'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    <FileText className="w-3 h-3" />
                    <span>Bare Act</span>
                  </button>
                  <button
                    onClick={() => setReaderTab('story')}
                    title="Read authentic documented courtroom case drama"
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all ${
                      readerTab === 'story'
                        ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold shadow-xs'
                        : 'text-[var(--text-secondary)] hover:text-[var(--accent)] font-bold'
                    }`}
                  >
                    <BookOpen className="w-3 h-3" />
                    <span>Story</span>
                  </button>
                  <button
                    onClick={() => setReaderTab('eli5')}
                    title="Read simplified plain-English breakdown with practical scenarios"
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all ${
                      readerTab === 'eli5'
                        ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold shadow-xs'
                        : 'text-[var(--text-secondary)] hover:text-[var(--accent)] font-bold'
                    }`}
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>ELI5</span>
                  </button>
                </div>

                <button
                  onClick={handleCopyCitation}
                  title="Copy Statutory Citation"
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors"
                >
                  {copiedCitation ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Citation</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => togglePinFlashcard(getCardIdForArticle(activeArticle.number))}
                  title={pinnedFlashcardIds.includes(getCardIdForArticle(activeArticle.number)) ? 'Pinned in SRS Flashcards' : 'Pin Article to SRS Flashcards'}
                  className={`flex items-center gap-1 px-2 py-1.5 rounded-lg border text-xs font-mono font-bold transition-colors ${
                    pinnedFlashcardIds.includes(getCardIdForArticle(activeArticle.number))
                      ? 'bg-[var(--accent)]/15 border-[var(--accent)]/40 text-[var(--accent)]'
                      : 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--accent)]'
                  }`}
                >
                  <Star className={`w-3.5 h-3.5 ${pinnedFlashcardIds.includes(getCardIdForArticle(activeArticle.number)) ? 'fill-current' : ''}`} />
                  <span className="hidden sm:inline">{pinnedFlashcardIds.includes(getCardIdForArticle(activeArticle.number)) ? 'Pinned' : 'SRS Pin'}</span>
                </button>

                <button
                  onClick={() => launchFlashcardDeck('articles', activeArticle.part, getCardIdForArticle(activeArticle.number))}
                  title={`Open Article ${activeArticle.number} directly in SRS Flashcards`}
                  className="flex items-center gap-1 px-2 py-1.5 rounded-lg border border-[var(--badge-border)] bg-[var(--badge-bg)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)] text-xs font-mono font-bold transition-colors"
                >
                  <BrainCircuit className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Drill</span>
                </button>

                <button
                  onClick={() => toggleBookmark(`Art ${activeArticle.number}`)}
                  title={isCurrentBookmarked ? 'Remove Bookmark' : 'Add Bookmark'}
                  className={`p-1.5 rounded-lg border transition-colors ${
                    isCurrentBookmarked
                      ? 'bg-[var(--gold)]/10 border-[var(--gold)]/30 text-[var(--gold)]'
                      : 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <Bookmark className="w-4 h-4 fill-current" />
                </button>

                <button
                  onClick={() => {
                    setSelectedPartId(getPartId(activeArticle.part));
                    setActiveTab('parts');
                  }}
                  title={`Open ${activeArticle.part} in Topic Detail View`}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-mono bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--accent)] hover:underline"
                >
                  <span className="hidden sm:inline">Open</span> Part
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Contextual Fast-Track Speed Hack & Mnemonic Anchor */}
            {speedHack && (
              <div className="p-3 sm:p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fadeIn">
                <div className="flex items-start sm:items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Zap className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] font-mono font-extrabold uppercase px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                        {speedHack.badge}
                      </span>
                      <span className="text-xs font-mono font-extrabold text-[var(--text-primary)]">
                        {speedHack.formula}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] mt-0.5 leading-snug">
                      {speedHack.quickNote}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                  {speedHack.counterpartArticle && (
                    <button
                      onClick={() => {
                        setSelectedArticleNum(speedHack.counterpartArticle!);
                        setReaderTab('statutory');
                      }}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-base)] border border-amber-500/40 text-amber-400 font-mono text-xs font-bold hover:bg-amber-500/20 transition-all btn-tactile"
                    >
                      <span>Jump to Art. {speedHack.counterpartArticle}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                  <button
                    onClick={() => setActiveTab('fast-track')}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-amber-500 text-[var(--bg-base)] font-mono text-xs font-bold hover:opacity-95 transition-all btn-tactile"
                  >
                    <span>Speed Vault &rarr;</span>
                  </button>
                </div>
              </div>
            )}

            {/* 5-Way Tab Bar */}
            <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] pb-2 flex-wrap">
              <button
                onClick={() => setReaderTab('statutory')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border ${
                  readerTab === 'statutory'
                    ? 'bg-[var(--accent)] text-[var(--accent-contrast)] border-[var(--accent)]'
                    : 'bg-[var(--bg-base)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Statutory Bare Act</span>
              </button>

              <button
                onClick={() => setReaderTab('story')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border ${
                  readerTab === 'story'
                    ? 'bg-[var(--accent)] text-[var(--accent-contrast)] border-[var(--accent)] shadow-xs'
                    : 'bg-[var(--bg-base)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:text-[var(--text-primary)] hover:border-[var(--accent-glow)]'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Real Case Story</span>
                {caseStoryService.hasStory(activeArticle.number) && (
                  <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold ${
                    readerTab === 'story'
                      ? 'bg-[var(--accent-contrast)]/20 text-[var(--accent-contrast)]'
                      : 'bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]'
                  }`}>
                    Courtroom Drama
                  </span>
                )}
              </button>

              <button
                onClick={() => setReaderTab('eli5')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border ${
                  readerTab === 'eli5'
                    ? 'bg-[var(--accent)] text-[var(--accent-contrast)] border-[var(--accent)] shadow-xs'
                    : 'bg-[var(--bg-base)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:text-[var(--text-primary)] hover:border-[var(--accent-glow)]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Plain-English (ELI5)</span>
                <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold ${
                  readerTab === 'eli5'
                    ? 'bg-[var(--accent-contrast)]/20 text-[var(--accent-contrast)]'
                    : 'bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]'
                }`}>
                  Simplified
                </span>
              </button>

              <button
                onClick={() => setReaderTab('diff')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border ${
                  readerTab === 'diff'
                    ? 'bg-[var(--accent)] text-[var(--accent-contrast)] border-[var(--accent)]'
                    : 'bg-[var(--bg-base)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
                }`}
              >
                <GitCommit className="w-3.5 h-3.5" />
                <span>1950 vs Amended Diff</span>
                {activeArticle.hasDiff && (
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
                )}
              </button>

              <button
                onClick={() => setReaderTab('analysis')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border ${
                  readerTab === 'analysis'
                    ? 'bg-[var(--accent)] text-[var(--accent-contrast)] border-[var(--accent)]'
                    : 'bg-[var(--bg-base)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
                }`}
              >
                <Scale className="w-3.5 h-3.5" />
                <span>Trial Analysis & Cases</span>
              </button>

              <button
                onClick={() => setReaderTab('amendments')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border ${
                  readerTab === 'amendments'
                    ? 'bg-[var(--accent)] text-[var(--accent-contrast)] border-[var(--accent)]'
                    : 'bg-[var(--bg-base)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
                }`}
              >
                <History className="w-3.5 h-3.5" />
                <span>Legislative Footnotes</span>
              </button>
            </div>

            {/* TAB 1: STATUTORY BARE ACT VERBATIM */}
            {readerTab === 'statutory' && (
              <div className="flex flex-col gap-4 animate-fadeIn">
                {/* Official Statutory Snippet Card */}
                <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col gap-2.5">
                  <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] border-b border-[var(--border-subtle)] pb-1.5">
                    <span className="font-bold uppercase tracking-wider text-[var(--accent)]">
                      VERBATIM STATUTORY TEXT (BARE ACT)
                    </span>
                    <span>OFFICIAL TEXT</span>
                  </div>
                  <p className="text-sm font-serif leading-relaxed text-[var(--text-primary)] whitespace-pre-line selection:bg-[var(--accent)] selection:text-[var(--accent-contrast)]">
                    <AnnotatedLegalText text={activeArticle.statutorySnippet} />
                  </p>

                  {/* Switch to ELI5 Invitation Link */}
                  <button
                    onClick={() => setReaderTab('eli5')}
                    className="flex items-center gap-1.5 text-xs font-mono text-[var(--accent)] hover:opacity-80 font-bold pt-1 transition-colors group self-start"
                  >
                    <Lightbulb className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                    <span>Confused by legal jargon? Switch to Plain-English ELI5 breakdown & practical scenario →</span>
                  </button>
                </div>

                {/* Clauses Breakdown Accordion */}
                <div className="flex flex-col gap-3">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)]">
                    Clause-by-Clause Statutory Breakdown ({activeArticle.clauses.length} Clauses)
                  </h4>

                  <div className="flex flex-col gap-2.5">
                    {activeArticle.clauses.map((c, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all flex flex-col gap-2"
                      >
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded font-mono text-[10px] font-bold bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
                            Clause {idx + 1}
                          </span>
                          <span className="text-xs font-bold font-mono text-[var(--text-primary)]">
                            {c.clause}
                          </span>
                        </div>

                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                          <AnnotatedLegalText text={c.explanation} />
                        </p>

                        {c.example && (
                          <div className="p-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)] font-mono">
                            <span className="font-bold text-[var(--accent)]">Practical Application: </span>
                            <AnnotatedLegalText text={c.example} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB: REAL-LIFE COURTROOM CASE LAW STORY */}
            {readerTab === 'story' && (
              <ArticleRealCaseStoryTab
                articleNumber={activeArticle.number}
                articleTitle={activeArticle.title}
                part={activeArticle.part}
                onSelectArticleStory={(num) => {
                  setSelectedArticleNum(num);
                  setReaderTab('story');
                }}
              />
            )}

            {/* TAB: PLAIN-ENGLISH ELI5 & PRACTICAL SCENARIO */}
            {readerTab === 'eli5' && (
              <div className="flex flex-col gap-5 animate-fadeIn">
                {/* Mode Indicator Banner */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[var(--accent-subtle)] via-[var(--bg-surface-elevated)] to-[var(--accent-subtle)] border-2 border-[var(--border-strong)] shadow-md flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)] shrink-0">
                    <Sparkles className="w-6 h-6 animate-pulse" />
                  </div>
                  <div className="flex flex-col gap-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[var(--accent)] text-[var(--accent-contrast)] uppercase">
                        ELI5 Plain English Mode
                      </span>
                      <span className="text-xs font-mono text-[var(--text-muted)]">
                        Zero Legal Jargon • Practical Life Application
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
                      Article {activeArticle.number}: Explained In Plain Human Language
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      Stripping away centuries of Latin phrases and legislative formalities so you can understand the exact constitutional principle, the reason it exists, and how it protects citizens in real daily life.
                    </p>
                  </div>
                </div>

                {/* Section 1: The Core Plain-English Translation */}
                <div className="p-5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all flex flex-col gap-3 shadow-xs">
                  <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2 text-xs font-mono">
                    <span className="font-bold text-[var(--accent)] uppercase flex items-center gap-1.5">
                      <Lightbulb className="w-4 h-4 text-[var(--accent)]" />
                      The Plain-English Meaning (What This Actually Says)
                    </span>
                    <span className="text-[10px] text-[var(--text-muted)] font-mono">Simplicity Grade: High</span>
                  </div>
                  <p className="text-sm sm:text-base text-[var(--text-primary)] leading-relaxed font-sans font-medium">
                    <AnnotatedLegalText text={activeArticle.plainEnglish || activeArticle.summary} />
                  </p>
                </div>

                {/* Section 2: Real-World Practical Application Scenario */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-[var(--bg-surface-elevated)] to-[var(--bg-base)] border border-emerald-500/30 flex flex-col gap-3 shadow-xs">
                  <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2 text-xs font-mono">
                    <span className="font-bold text-emerald-500 uppercase flex items-center gap-1.5">
                      <Scale className="w-4 h-4" />
                      Real-World Practical Scenario (How It Plays Out In Real Life)
                    </span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                      Case In Point
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    <AnnotatedLegalText text={activeArticle.realWorldScenario || activeArticle.summary} />
                  </p>
                </div>

                {/* Section 3: Prosecutor & Trial Courtroom Practice Note */}
                {activeArticle.prosecutionNote && (
                  <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/25 flex flex-col gap-2">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-purple-400 uppercase">
                      <Shield className="w-3.5 h-3.5" />
                      <span>Courtroom & Prosecutor Litigation Angle</span>
                    </div>
                    <p className="text-xs text-[var(--text-primary)] leading-relaxed">
                      <AnnotatedLegalText text={activeArticle.prosecutionNote} />
                    </p>
                  </div>
                )}

                {/* Section 4: Plain-English Clause-by-Clause Translation */}
                <div className="flex flex-col gap-3 pt-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Sub-Clauses Translated Into Everyday English ({activeArticle.clauses.length} Clauses)</span>
                  </h4>

                  <div className="flex flex-col gap-3">
                    {activeArticle.clauses.map((c, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col gap-2"
                      >
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="font-bold text-[var(--text-primary)]">
                            Clause {idx + 1}: {c.clause}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
                            Key Rule
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                          <AnnotatedLegalText text={c.explanation} />
                        </p>
                        {c.example && (
                          <div className="p-2.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs text-[var(--text-muted)]">
                            <strong className="text-[var(--accent)]">Example in Practice: </strong>
                            <AnnotatedLegalText text={c.example} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 5: Common Traps & Exceptions */}
                {activeArticle.exceptions && activeArticle.exceptions.length > 0 && (
                  <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 flex flex-col gap-2">
                    <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      Constitutional Exceptions & When This Rule Does NOT Apply
                    </span>
                    <ul className="list-disc list-inside text-xs text-[var(--text-secondary)] space-y-1">
                      {activeArticle.exceptions.map((ex, i) => (
                        <li key={i}>
                          <AnnotatedLegalText text={ex} />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Return to Bare Act Button */}
                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => setReaderTab('statutory')}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[var(--bg-base)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all btn-tactile"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Compare with Statutory Bare Act (Verbatim Text)</span>
                  </button>
                </div>
              </div>
            )}

            {/* TAB 2: 1950 ORIGINAL VS AMENDED DIFF */}
            {readerTab === 'diff' && (
              <div className="flex flex-col gap-4 animate-fadeIn">
                {activeArticle.diffData ? (
                  <>
                    {/* Summary of Changes Banner */}
                    <div className="p-4 rounded-xl bg-[var(--badge-bg)] border border-[var(--badge-border)] flex flex-col gap-1.5">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--accent)]">
                        <GitCommit className="w-4 h-4" />
                        <span>CONSTITUTIONAL AMENDMENT DIFF & EVOLUTION</span>
                      </div>
                      <p className="text-xs text-[var(--text-primary)] leading-relaxed">
                        {activeArticle.diffData.summaryOfChanges}
                      </p>
                    </div>

                    {/* Key Amending Acts */}
                    <div className="flex flex-col gap-2">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)]">
                        Constitutional Amendment Acts Affecting Article {activeArticle.number}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        {activeArticle.diffData.keyAmendments.map((ka, i) => (
                          <div
                            key={i}
                            className="p-3 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col gap-1"
                          >
                            <div className="flex items-center justify-between text-xs font-mono">
                              <span className="font-bold text-[var(--accent)]">{ka.act}</span>
                              <span className="text-[var(--text-muted)]">{ka.year}</span>
                            </div>
                            <span className="text-[11px] font-mono text-[var(--accent)]">
                              Target: {ka.clauseAffected}
                            </span>
                            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                              {ka.description}
                            </p>
                            {ka.landmarkCase && (
                              <span className="text-[10px] font-mono text-[var(--text-muted)] mt-1">
                                Overcame/Settled in: <em>{ka.landmarkCase}</em>
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Side-by-Side or Sequential Diff Box */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Original 1950 Text */}
                      <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-rose-500/20 flex flex-col gap-2">
                        <div className="flex items-center justify-between text-xs font-mono text-rose-500 pb-1.5 border-b border-rose-500/20 font-bold">
                          <span>1950 ORIGINAL TEXT (AT COMMENCEMENT)</span>
                          <span>JAN 26, 1950</span>
                        </div>
                        <p className="text-xs font-serif leading-relaxed text-[var(--text-secondary)] whitespace-pre-line">
                          {activeArticle.diffData.original1950Text}
                        </p>
                      </div>

                      {/* Current In-Force Text */}
                      <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-emerald-500/20 flex flex-col gap-2">
                        <div className="flex items-center justify-between text-xs font-mono text-emerald-500 pb-1.5 border-b border-emerald-500/20 font-bold">
                          <span>CURRENT IN-FORCE TEXT (AS AMENDED)</span>
                          <span>PRESENT</span>
                        </div>
                        <p className="text-xs font-serif leading-relaxed text-[var(--text-primary)] whitespace-pre-line">
                          {activeArticle.diffData.currentText}
                        </p>
                      </div>
                    </div>

                    {/* Constitutional Impact */}
                    <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] leading-relaxed flex flex-col gap-1">
                      <span className="font-mono font-bold text-[var(--text-primary)] uppercase text-[11px]">
                        Constitutional & Jurisprudential Impact:
                      </span>
                      <p>{activeArticle.diffData.constitutionalImpact}</p>
                    </div>
                  </>
                ) : (
                  <div className="p-8 text-center rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col items-center gap-2">
                    <Check className="w-8 h-8 text-[var(--accent)] opacity-60" />
                    <h4 className="text-sm font-bold text-[var(--text-primary)]">
                      Article {activeArticle.number} Text Status
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)] max-w-md">
                      {activeArticle.isAmended
                        ? 'This article was amended by Act of Parliament. Check the "Legislative Footnotes" tab for specific historical amendments.'
                        : 'This article retains its original statutory text as enacted by the Constituent Assembly on 26 January 1950 without textual variation.'}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* TAB 3: TRIAL ANALYSIS & CASE LAWS */}
            {readerTab === 'analysis' && (
              <div className="flex flex-col gap-4 animate-fadeIn">
                {/* Plain English & Real World Scenario */}
                {activeArticle.plainEnglish && (
                  <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col gap-2">
                    <span className="text-xs font-mono font-bold text-[var(--accent)] uppercase">
                      PLAIN ENGLISH MEANING
                    </span>
                    <p className="text-xs text-[var(--text-primary)] leading-relaxed">
                      <AnnotatedLegalText text={activeArticle.plainEnglish} />
                    </p>
                  </div>
                )}

                {/* Prosecution & Trial Litigation Note */}
                {activeArticle.prosecutionNote && (
                  <div className="p-4 rounded-xl bg-[var(--badge-bg)] border border-[var(--badge-border)] flex flex-col gap-2">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--accent)] uppercase">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>Courtroom & Prosecution Practice Note</span>
                    </div>
                    <p className="text-xs text-[var(--text-primary)] leading-relaxed">
                      <AnnotatedLegalText text={activeArticle.prosecutionNote} />
                    </p>
                  </div>
                )}

                {/* Real-World Scenario */}
                {activeArticle.realWorldScenario && (
                  <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col gap-2">
                    <span className="text-xs font-mono font-bold text-[var(--text-muted)] uppercase">
                      Factual Application Scenario
                    </span>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      <AnnotatedLegalText text={activeArticle.realWorldScenario} />
                    </p>
                  </div>
                )}

                {/* Constitutional Exceptions */}
                {activeArticle.exceptions && activeArticle.exceptions.length > 0 && (
                  <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-rose-500/20 flex flex-col gap-2">
                    <span className="text-xs font-mono font-bold text-rose-400 uppercase">
                      Constitutional Exceptions & Inapplicability
                    </span>
                    <ul className="list-disc list-inside text-xs text-[var(--text-secondary)] space-y-1">
                      {activeArticle.exceptions.map((ex, i) => (
                        <li key={i}>
                          <AnnotatedLegalText text={ex} />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Landmark Precedents for this Article */}
                <div className="flex flex-col gap-2.5">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[var(--accent)]" />
                    <span>Authoritative Landmark Precedents</span>
                  </h4>

                  {activeArticle.landmarkCases && activeArticle.landmarkCases.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {activeArticle.landmarkCases.map((lc, i) => (
                        <div
                          key={i}
                          className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all flex flex-col gap-1.5"
                        >
                          <div className="flex items-center justify-between text-xs font-mono">
                            <span className="font-bold text-[var(--text-primary)]">{lc.caseName}</span>
                            <span className="text-[var(--text-muted)]">{lc.year}</span>
                          </div>
                          {lc.bench && (
                            <span className="text-[10px] font-mono text-[var(--accent)]">
                              {lc.bench}
                            </span>
                          )}
                          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                            {lc.summary}
                          </p>
                          <div className="mt-1 pt-1 border-t border-[var(--border-subtle)] text-[10px] font-mono text-[var(--text-muted)]">
                            <strong>Ratio: </strong> {lc.significance}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : relatedLandmarkJudgments.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {relatedLandmarkJudgments.map((j) => (
                        <div
                          key={j.id}
                          className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col gap-1"
                        >
                          <div className="flex items-center justify-between text-xs font-mono">
                            <span className="font-bold text-[var(--text-primary)]">{j.caseName}</span>
                            <span className="text-[var(--text-muted)]">{j.year}</span>
                          </div>
                          <span className="text-[10px] font-mono text-[var(--accent)]">
                            {j.benchStrength}-Judge Bench • {j.citation}
                          </span>
                          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                            {j.ratioDecidendi}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 text-xs font-mono text-[var(--text-muted)] bg-[var(--bg-base)] rounded-xl border border-[var(--border-subtle)]">
                      Standard statutory interpretation governs this provision. Refer to the Landmark Cases lab for broader constitutional bench rulings.
                    </div>
                  )}
                </div>

                {/* Related Doctrines */}
                {relatedDoctrines.length > 0 && (
                  <div className="flex flex-col gap-2 pt-2 border-t border-[var(--border-subtle)]">
                    <span className="text-xs font-mono font-bold uppercase text-[var(--text-muted)]">
                      Linked Constitutional Doctrines:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {relatedDoctrines.map((d) => (
                        <button
                          key={d.id}
                          onClick={() => setActiveTab('doctrines')}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)] hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)] transition-colors flex items-center gap-1"
                        >
                          <Scale className="w-3 h-3" />
                          <span>{d.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 4: LEGISLATIVE AMENDMENT HISTORY FOOTNOTES */}
            {readerTab === 'amendments' && (
              <div className="flex flex-col gap-4 animate-fadeIn">
                <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] pb-1.5 border-b border-[var(--border-subtle)]">
                    <span className="font-bold uppercase tracking-wider text-[var(--accent)]">
                      OFFICIAL LEGISLATIVE FOOTNOTE CITATIONS
                    </span>
                    <span>GAZETTE NOTIFICATION CHRONOLOGY</span>
                  </div>

                  {activeArticle.diffData ? (
                    <div className="flex flex-col gap-3">
                      {activeArticle.diffData.keyAmendments.map((ka, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs font-mono"
                        >
                          <span className="px-1.5 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--accent)] font-bold text-[10px] shrink-0 mt-0.5">
                            [{idx + 1}]
                          </span>
                          <div className="flex flex-col gap-1">
                            <span className="font-bold text-[var(--text-primary)]">
                              {ka.act} ({ka.year})
                            </span>
                            <span className="text-[11px] text-[var(--accent)]">
                              Effect: {ka.clauseAffected}
                            </span>
                            <p className="text-xs text-[var(--text-secondary)] font-sans">
                              {ka.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-6 text-center text-xs font-mono text-[var(--text-muted)]">
                      {activeArticle.isAmended
                        ? 'Subject to legislative modifications under parliamentary amendment acts.'
                        : 'No legislative amendments enacted for this article. Enacted verbatim at constitutional commencement on 26 January 1950.'}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Bottom Article Navigation Controls */}
            <div className="flex items-center justify-between gap-3 pt-4 border-t border-[var(--border-subtle)] mt-2">
              {prev ? (
                <button
                  onClick={() => setSelectedArticleNum(prev.number)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Art {prev.number}</span>
                </button>
              ) : (
                <div />
              )}

              <div className="text-xs font-mono text-[var(--text-muted)] text-center hidden sm:block">
                Article <strong className="text-[var(--text-primary)]">{activeArticle.number}</strong> of 395
              </div>

              {next ? (
                <button
                  onClick={() => setSelectedArticleNum(next.number)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  <span>Art {next.number}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      )}

      {/* VIEW MODE 2: DIRECTORY GRID */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-fadeIn">
          {filteredArticles.map((art) => {
            const isBookmarked = bookmarkedArticles.includes(`Art ${art.number}`);

            return (
              <div
                key={art.number}
                className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded font-mono text-xs font-bold bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
                        Article {art.number}
                      </span>
                      <span className="text-[10px] font-mono text-[var(--text-muted)]">
                        {art.part}
                      </span>
                      {art.hasDiff && (
                        <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                          DIFF
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => toggleBookmark(`Art ${art.number}`)}
                      title={isBookmarked ? 'Bookmarked' : 'Add bookmark'}
                      className={`p-1 rounded-lg border transition-colors ${
                        isBookmarked
                          ? 'bg-[var(--gold)]/10 border-[var(--gold)]/30 text-[var(--gold)]'
                          : 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      <Bookmark className="w-3.5 h-3.5 fill-current" />
                    </button>
                  </div>

                  <h4 className="text-xs font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent)] transition-colors break-words">
                    <AnnotatedLegalText text={art.title} />
                  </h4>

                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed break-words line-clamp-3">
                    <AnnotatedLegalText text={art.summary} />
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-[var(--border-subtle)] flex items-center justify-between text-[10px] font-mono">
                  <span className="text-[var(--text-muted)]">{art.category}</span>
                  <button
                    onClick={() => {
                      setSelectedArticleNum(art.number);
                      setViewMode('reader');
                    }}
                    className="flex items-center gap-0.5 text-[var(--accent)] hover:underline font-semibold"
                  >
                    <span>Read Bare Act</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
