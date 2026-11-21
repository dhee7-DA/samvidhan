import React, { useState, useMemo, useEffect } from 'react';
import {
  BrainCircuit,
  Zap,
  Target,
  Sparkles,
  Search,
  CheckCircle2,
  XCircle,
  BookOpen,
  ArrowRight,
  Flame,
  Layers,
  Star,
  Check,
  AlertTriangle,
  Calculator
} from 'lucide-react';
import {
  articleMasteryService,
  type MasteryStatus,
  type MasterySummary,
  type MasteryQuestion,
  CLUSTERS,
  HIGH_YIELD_ARTICLES
} from '../../../services/articleMasteryService';
import { lookupSpeedHackForArticle } from '../../../data/fastTrackHacksData';

interface Props {
  onOpenArticleReader: (articleNum: string) => void;
}

export const ArticleMasteryLab: React.FC<Props> = ({ onOpenArticleReader }) => {
  // Top-level tab: 'wall' | 'drill' | 'symmetry'
  const [activeTab, setActiveTab] = useState<'wall' | 'drill' | 'symmetry'>('wall');

  // Live Summary Stats
  const [summary, setSummary] = useState<MasterySummary>(() => articleMasteryService.getSummary());

  const refreshSummary = () => {
    setSummary(articleMasteryService.getSummary());
  };

  // ----------------------------------------------------
  // SUB-MODE 1: MEMORY WALL STATE
  // ----------------------------------------------------
  const [selectedCluster, setSelectedCluster] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | MasteryStatus>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedArticleNum, setSelectedArticleNum] = useState<string>('21');

  const allArticles = useMemo(() => articleMasteryService.getAllArticles(), []);

  const filteredArticles = useMemo(() => {
    let list = articleMasteryService.getArticlesByCluster(selectedCluster);

    if (statusFilter !== 'all') {
      list = list.filter((a) => articleMasteryService.getMasteryState(a.number).status === statusFilter);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (a) =>
          a.number.toLowerCase().includes(q) ||
          a.title.toLowerCase().includes(q) ||
          a.summary.toLowerCase().includes(q) ||
          a.part.toLowerCase().includes(q)
      );
    }

    return list;
  }, [selectedCluster, statusFilter, searchQuery]);

  const activeArticle = useMemo(() => {
    return articleMasteryService.getArticle(selectedArticleNum) || allArticles[0];
  }, [selectedArticleNum, allArticles]);

  const activeSpeedHack = useMemo(() => {
    return lookupSpeedHackForArticle(activeArticle.number);
  }, [activeArticle]);

  const activeMasteryState = useMemo(() => {
    return articleMasteryService.getMasteryState(activeArticle.number);
  }, [activeArticle, summary]);

  // ----------------------------------------------------
  // SUB-MODE 2: ACTIVE RECALL DRILL STATE
  // ----------------------------------------------------
  const [drillType, setDrillType] = useState<'article_to_subject' | 'subject_to_article' | 'plus_rule'>('article_to_subject');
  const [drillCluster, setDrillCluster] = useState<string>('high-yield');
  const [currentQuestion, setCurrentQuestion] = useState<MasteryQuestion | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);
  const [streak, setStreak] = useState<number>(0);
  const [totalAttempted, setTotalAttempted] = useState<number>(0);
  const [totalCorrect, setTotalCorrect] = useState<number>(0);

  const loadNextQuestion = () => {
    setSelectedOption(null);
    setHasAnswered(false);
    const q = articleMasteryService.generateQuestion(drillType, drillCluster);
    setCurrentQuestion(q);
  };

  useEffect(() => {
    if (activeTab === 'drill') {
      loadNextQuestion();
    }
  }, [activeTab, drillType, drillCluster]);

  const handleSelectOption = (optVal: string) => {
    if (hasAnswered || !currentQuestion) return;
    setSelectedOption(optVal);
    setHasAnswered(true);

    const isCorrect = currentQuestion.options.find((o) => o.value === optVal)?.isCorrect ?? false;

    setTotalAttempted((prev) => prev + 1);
    if (isCorrect) {
      setTotalCorrect((prev) => prev + 1);
      setStreak((prev) => prev + 1);
    } else {
      setStreak(0);
    }

    articleMasteryService.recordAttempt(currentQuestion.correctArticleNumber, isCorrect);
    refreshSummary();
  };

  // ----------------------------------------------------
  // SUB-MODE 3: SYMMETRY GYM STATE
  // ----------------------------------------------------
  const [calcInput, setCalcInput] = useState<string>('72');
  const mathPairs = useMemo(() => articleMasteryService.getMathPairs(), []);

  const calculatedSymmetry = useMemo<
    | { matched: true; pair: (typeof mathPairs)[0]; computed: string }
    | { matched: false; delta: string; computed: string }
    | null
  >(() => {
    const raw = parseInt(calcInput.replace(/\D/g, ''), 10);
    if (isNaN(raw)) return null;

    // Direct pair match?
    const direct = mathPairs.find(
      (p) => p.unionArticle === raw || p.stateArticle === raw
    );

    if (direct) {
      return {
        matched: true,
        pair: direct,
        computed: direct.unionArticle === raw ? `Article ${direct.stateArticle}` : `Article ${direct.unionArticle}`
      };
    }

    // Default +89 or +90 formula heuristic
    const isExecutiveRange = raw >= 52 && raw <= 104;
    const delta = isExecutiveRange ? 89 : 90;
    const computedState = raw + delta;

    return {
      matched: false,
      delta: `+${delta}`,
      computed: `Article ${computedState}`
    };
  }, [calcInput, mathPairs]);

  return (
    <div className="space-y-4 max-w-7xl mx-auto pb-12 animate-fadeIn">
      {/* Top Banner: Master All 395 Articles Dashboard */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full uppercase tracking-wider bg-[var(--bg-base)] text-amber-500 border border-amber-500/20">
                Active Recall & Memory Wall
              </span>
              <span className="text-xs font-mono text-[var(--text-muted)]">
                {summary.total} Cataloged Articles
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-[var(--text-primary)] tracking-tight mt-1 flex items-center gap-2">
              <span>395 Articles Mastery Lab</span>
              <BrainCircuit className="w-5 h-5 text-amber-500" />
            </h1>
            <p className="text-xs text-[var(--text-secondary)] mt-0.5 max-w-2xl">
              Systematic active recall engine to memorize, test, and master all constitutional provisions, numerical clauses, and Union-State mathematical symmetries.
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] shrink-0 self-start lg:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab('wall')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'wall'
                  ? 'bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] border border-[var(--border-strong)] shadow-sm'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              <span>Memory Wall</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('drill')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'drill'
                  ? 'bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] border border-[var(--border-strong)] shadow-sm'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>Recall Drills</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('symmetry')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'symmetry'
                  ? 'bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] border border-[var(--border-strong)] shadow-sm'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Calculator className="w-3.5 h-3.5 text-emerald-400" />
              <span>+89/+90 Symmetry</span>
            </button>
          </div>
        </div>

        {/* Live Mastery Metrics Counter Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-3 border-t border-[var(--border-subtle)]">
          <div className="p-2.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex items-center justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase text-emerald-500 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Mastered
              </div>
              <div className="text-lg font-black text-[var(--text-primary)] mt-0.5 font-mono">
                {summary.mastered} <span className="text-xs text-[var(--text-muted)] font-normal">({Math.round((summary.mastered / summary.total) * 100)}%)</span>
              </div>
            </div>
            <div className="w-2 h-8 rounded-full bg-emerald-500/20 overflow-hidden flex flex-col justify-end">
              <div
                className="w-full bg-emerald-500 rounded-full transition-all"
                style={{ height: `${Math.min(100, (summary.mastered / summary.total) * 100)}%` }}
              />
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex items-center justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase text-amber-500 font-bold flex items-center gap-1">
                <BrainCircuit className="w-3 h-3" /> In Progress
              </div>
              <div className="text-lg font-black text-[var(--text-primary)] mt-0.5 font-mono">
                {summary.learning}
              </div>
            </div>
            <div className="w-2 h-8 rounded-full bg-amber-500/20 overflow-hidden flex flex-col justify-end">
              <div
                className="w-full bg-amber-500 rounded-full transition-all"
                style={{ height: `${Math.min(100, (summary.learning / summary.total) * 100)}%` }}
              />
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex items-center justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase text-rose-500 font-bold flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" /> Needs Review
              </div>
              <div className="text-lg font-black text-[var(--text-primary)] mt-0.5 font-mono">
                {summary.needsReview}
              </div>
            </div>
            <div className="w-2 h-8 rounded-full bg-rose-500/20 overflow-hidden flex flex-col justify-end">
              <div
                className="w-full bg-rose-500 rounded-full transition-all"
                style={{ height: `${Math.min(100, (summary.needsReview / summary.total) * 100)}%` }}
              />
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex items-center justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase text-[var(--text-muted)] font-bold flex items-center gap-1">
                <Target className="w-3 h-3" /> Accuracy Rate
              </div>
              <div className="text-lg font-black text-[var(--text-primary)] mt-0.5 font-mono">
                {summary.accuracyRate}%
              </div>
            </div>
            <div className="w-2 h-8 rounded-full bg-blue-500/20 overflow-hidden flex flex-col justify-end">
              <div
                className="w-full bg-blue-500 rounded-full transition-all"
                style={{ height: `${summary.accuracyRate}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: THE 395 ARTICLES INTERACTIVE MEMORY WALL                           */}
      {/* ========================================================================= */}
      {activeTab === 'wall' && (
        <div className="space-y-4">
          {/* Filter Bar: Clusters, Search & Status Pills */}
          <div className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm space-y-3">
            {/* Cluster Horizontal Scroll */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              <span className="text-[10px] font-mono uppercase text-[var(--text-muted)] tracking-wider shrink-0 mr-1">
                Cluster:
              </span>
              {CLUSTERS.map((cl) => {
                const isSel = selectedCluster === cl.id;
                return (
                  <button
                    key={cl.id}
                    type="button"
                    onClick={() => setSelectedCluster(cl.id)}
                    className={`px-2.5 py-1 rounded-xl text-xs font-mono whitespace-nowrap transition-all cursor-pointer ${
                      isSel
                        ? 'bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] border border-[var(--border-strong)] font-bold shadow-sm'
                        : 'bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                    }`}
                  >
                    {cl.id === 'high-yield' && <Star className="w-3 h-3 text-amber-500 inline mr-1" />}
                    {cl.label}
                  </button>
                );
              })}
            </div>

            {/* Search & Status Filters */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 border-t border-[var(--border-subtle)]">
              <div className="relative flex-1 w-full">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles by number, title, or topic (e.g. 21, CAG, Budget, Election)..."
                  className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:border-[var(--border-strong)] focus:outline-none transition-colors font-mono"
                />
              </div>

              <div className="flex items-center gap-1 shrink-0 overflow-x-auto w-full sm:w-auto">
                {(
                  [
                    { id: 'all', label: `All (${filteredArticles.length})` },
                    { id: 'mastered', label: 'Mastered' },
                    { id: 'learning', label: 'Learning' },
                    { id: 'needs_review', label: 'Review' },
                    { id: 'unattempted', label: 'Unseen' }
                  ] as const
                ).map((st) => (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => setStatusFilter(st.id)}
                    className={`px-2.5 py-1 rounded-xl text-[11px] font-mono whitespace-nowrap transition-all cursor-pointer ${
                      statusFilter === st.id
                        ? 'bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] text-[var(--text-primary)] font-bold shadow-sm'
                        : 'bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Grid Layout: Left Matrix Wall + Right Focused Article Dossier */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            {/* The 395 Matrix Grid */}
            <div className="lg:col-span-8 p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[var(--border-subtle)]">
                <span className="text-xs font-mono font-bold text-[var(--text-primary)]">
                  Showing {filteredArticles.length} Articles
                </span>
                <span className="text-[11px] font-mono text-[var(--text-muted)] flex items-center gap-3">
                  <span className="inline-flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" /> Mastered
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-amber-500" /> Learning
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-rose-500" /> Review
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[var(--border-strong)]" /> Unseen
                  </span>
                </span>
              </div>

              {/* Responsive Matrix Cells */}
              <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-1.5 max-h-[560px] overflow-y-auto pr-1">
                {filteredArticles.map((art) => {
                  const state = articleMasteryService.getMasteryState(art.number);
                  const isSelected = activeArticle.number === art.number;
                  const isHighYield = HIGH_YIELD_ARTICLES.has(art.number);

                  let bgClass = 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-secondary)]';
                  let dotColor = 'bg-[var(--border-strong)]';

                  if (state.status === 'mastered') {
                    bgClass = 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 font-semibold';
                    dotColor = 'bg-emerald-500';
                  } else if (state.status === 'learning') {
                    bgClass = 'bg-amber-500/10 border-amber-500/30 text-amber-400';
                    dotColor = 'bg-amber-500';
                  } else if (state.status === 'needs_review') {
                    bgClass = 'bg-rose-500/10 border-rose-500/30 text-rose-400 font-semibold';
                    dotColor = 'bg-rose-500';
                  }

                  return (
                    <button
                      key={art.number}
                      type="button"
                      onClick={() => setSelectedArticleNum(art.number)}
                      title={`Article ${art.number}: ${art.title}`}
                      className={`relative p-2 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center min-h-[46px] group ${bgClass} ${
                        isSelected
                          ? 'ring-2 ring-amber-500 border-amber-500 shadow-md scale-105 z-10'
                          : 'hover:border-[var(--border-strong)] hover:scale-102'
                      }`}
                    >
                      <span className="text-xs font-mono font-bold leading-none">
                        {art.number}
                      </span>
                      <div className="flex items-center gap-0.5 mt-1">
                        <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
                        {isHighYield && <Star className="w-2.5 h-2.5 text-amber-500" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Focused Article Memory Dossier */}
            <div className="lg:col-span-4 p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm space-y-4 sticky top-4">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-[var(--bg-base)] text-amber-500 border border-amber-500/20 font-bold uppercase">
                    {activeArticle.part}
                  </span>
                  <span className="text-[11px] font-mono text-[var(--text-muted)]">
                    {activeArticle.partTitle}
                  </span>
                </div>
                <h3 className="text-lg font-black text-[var(--text-primary)] mt-2 tracking-tight">
                  Article {activeArticle.number}
                </h3>
                <h4 className="text-sm font-semibold text-[var(--text-primary)] mt-0.5">
                  {activeArticle.title}
                </h4>
              </div>

              {/* Essence Summary */}
              <div className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1">
                <span className="text-[10px] font-mono uppercase text-[var(--text-muted)] tracking-wider">
                  Plain-English Core Essence:
                </span>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {activeArticle.summary}
                </p>
              </div>

              {/* Mnemonic / Speed Hack Box */}
              {activeSpeedHack && (
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-1.5">
                  <span className="text-[10px] font-mono uppercase text-amber-400 font-bold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Memory Hook & Speed Hack
                  </span>
                  <p className="text-xs text-[var(--text-primary)] font-medium">
                    {activeSpeedHack.formula}
                  </p>
                  {activeSpeedHack.quickNote && (
                    <div className="text-[11px] font-mono text-amber-300/80 bg-amber-500/10 px-2 py-1 rounded-lg">
                      💡 {activeSpeedHack.quickNote}
                    </div>
                  )}
                </div>
              )}

              {/* Manual Mastery Status Setter */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono uppercase text-[var(--text-muted)] tracking-wider">
                  Self-Evaluation Status:
                </span>
                <div className="grid grid-cols-3 gap-1.5">
                  <button
                    type="button"
                    onClick={() => {
                      articleMasteryService.setManualStatus(activeArticle.number, 'mastered');
                      refreshSummary();
                    }}
                    className={`px-2 py-1.5 rounded-xl text-xs font-mono font-bold border transition-all cursor-pointer flex items-center justify-center gap-1 ${
                      activeMasteryState.status === 'mastered'
                        ? 'bg-emerald-500 text-white border-emerald-600 shadow-sm'
                        : 'bg-[var(--bg-base)] text-emerald-500 border-emerald-500/30 hover:bg-emerald-500/10'
                    }`}
                  >
                    <Check className="w-3 h-3" /> Mastered
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      articleMasteryService.setManualStatus(activeArticle.number, 'needs_review');
                      refreshSummary();
                    }}
                    className={`px-2 py-1.5 rounded-xl text-xs font-mono font-bold border transition-all cursor-pointer flex items-center justify-center gap-1 ${
                      activeMasteryState.status === 'needs_review'
                        ? 'bg-rose-500 text-white border-rose-600 shadow-sm'
                        : 'bg-[var(--bg-base)] text-rose-500 border-rose-500/30 hover:bg-rose-500/10'
                    }`}
                  >
                    <AlertTriangle className="w-3 h-3" /> Review
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      articleMasteryService.setManualStatus(activeArticle.number, 'unattempted');
                      refreshSummary();
                    }}
                    className="px-2 py-1.5 rounded-xl text-xs font-mono text-[var(--text-muted)] border border-[var(--border-subtle)] hover:bg-[var(--bg-base)] cursor-pointer"
                  >
                    Reset
                  </button>
                </div>
              </div>

              {/* Action Buttons: Jump to Bare Act or Drill */}
              <div className="pt-2 border-t border-[var(--border-subtle)] space-y-2">
                <button
                  type="button"
                  onClick={() => onOpenArticleReader(activeArticle.number)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[var(--accent)] text-white text-xs font-bold flex items-center justify-center gap-2 hover:opacity-95 transition-all cursor-pointer shadow-sm"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Read Full Bare Act Clause</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('drill');
                    setDrillCluster('all');
                  }}
                  className="w-full py-2 px-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-[var(--text-primary)] text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  <span>Launch Practice Drills</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: ACTIVE RECALL DRILL & TRAINER                                      */}
      {/* ========================================================================= */}
      {activeTab === 'drill' && (
        <div className="max-w-3xl mx-auto space-y-4">
          {/* Drill Setup Toolbar */}
          <div className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider shrink-0">
                Drill Mode:
              </span>
              <div className="flex items-center gap-1 p-1 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
                <button
                  type="button"
                  onClick={() => setDrillType('article_to_subject')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                    drillType === 'article_to_subject'
                      ? 'bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] font-bold shadow-sm'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  Article ➡️ Subject
                </button>
                <button
                  type="button"
                  onClick={() => setDrillType('subject_to_article')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                    drillType === 'subject_to_article'
                      ? 'bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] font-bold shadow-sm'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  Subject ➡️ Article
                </button>
                <button
                  type="button"
                  onClick={() => setDrillType('plus_rule')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                    drillType === 'plus_rule'
                      ? 'bg-[var(--bg-surface-elevated)] text-emerald-400 font-bold shadow-sm'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  +89/+90 Rule
                </button>
              </div>
            </div>

            {/* Streak & Accuracy Tracker */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-bold">
                <Flame className="w-3.5 h-3.5 fill-amber-500" />
                <span>Streak: {streak}</span>
              </div>
              <div className="text-xs font-mono text-[var(--text-muted)]">
                {totalCorrect}/{totalAttempted} ({totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0}%)
              </div>
            </div>
          </div>

          {/* Question Flashcard Box */}
          {currentQuestion && (
            <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm space-y-6">
              <div>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[var(--bg-base)] text-amber-500 border border-amber-500/20 font-bold uppercase">
                  {currentQuestion.part}
                </span>
                {currentQuestion.subPrompt && (
                  <p className="text-xs font-mono text-[var(--text-muted)] mt-1.5">
                    {currentQuestion.subPrompt}
                  </p>
                )}
                <h2 className="text-lg sm:text-xl font-black text-[var(--text-primary)] mt-1 tracking-tight leading-snug">
                  {currentQuestion.prompt}
                </h2>
              </div>

              {/* 4 Interactive Option Buttons */}
              <div className="space-y-2.5">
                {currentQuestion.options.map((opt, i) => {
                  const isChosen = selectedOption === opt.value;
                  let btnStyle = 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--border-strong)]';

                  if (hasAnswered) {
                    if (opt.isCorrect) {
                      btnStyle = 'bg-emerald-500/15 border-emerald-500 text-emerald-400 font-bold';
                    } else if (isChosen && !opt.isCorrect) {
                      btnStyle = 'bg-rose-500/15 border-rose-500 text-rose-400';
                    } else {
                      btnStyle = 'bg-[var(--bg-base)] border-[var(--border-subtle)] opacity-50';
                    }
                  }

                  return (
                    <button
                      key={i}
                      type="button"
                      disabled={hasAnswered}
                      onClick={() => handleSelectOption(opt.value)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between text-xs font-medium ${btnStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-center font-mono text-[10px] text-[var(--text-muted)]">
                          {String.fromCharCode(65 + i)}
                        </span>
                        <span>{opt.label}</span>
                      </div>
                      {hasAnswered && opt.isCorrect && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 ml-2" />
                      )}
                      {hasAnswered && isChosen && !opt.isCorrect && (
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Feedback & Explanation Revealed After Answering */}
              {hasAnswered && (
                <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-3 animate-fadeIn">
                  <div className="flex items-center gap-2">
                    {selectedOption === currentQuestion.options.find((o) => o.isCorrect)?.value ? (
                      <span className="text-xs font-mono font-bold text-emerald-500 flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" /> Correct Recall!
                      </span>
                    ) : (
                      <span className="text-xs font-mono font-bold text-rose-500 flex items-center gap-1">
                        <XCircle className="w-4 h-4" /> Needs Practice
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {currentQuestion.explanation}
                  </p>
                  {currentQuestion.mnemonicHook && (
                    <div className="text-xs font-mono text-amber-400/90 bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/20">
                      💡 <strong>Mnemonic Hook:</strong> {currentQuestion.mnemonicHook}
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => onOpenArticleReader(currentQuestion.correctArticleNumber)}
                      className="text-xs font-mono text-[var(--accent)] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Open in Bare Act Reader</span>
                    </button>

                    <button
                      type="button"
                      onClick={loadNextQuestion}
                      className="px-4 py-2 rounded-xl bg-[var(--accent)] text-white text-xs font-bold flex items-center gap-1.5 hover:opacity-95 transition-all cursor-pointer shadow-sm"
                    >
                      <span>Next Question</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: THE +89 / +90 UNION-STATE SYMMETRY GYM                             */}
      {/* ========================================================================= */}
      {activeTab === 'symmetry' && (
        <div className="space-y-5 max-w-5xl mx-auto">
          {/* Explanation Header */}
          <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm space-y-3">
            <h2 className="text-lg font-black text-[var(--text-primary)] tracking-tight flex items-center gap-2">
              <Calculator className="w-5 h-5 text-emerald-500" />
              <span>The Magical +89 & +90 Constitutional Symmetry Principle</span>
            </h2>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Dr. B.R. Ambedkar and the Drafting Committee structured the Union machinery (Part V) and the State machinery (Part VI) with profound institutional parallelism. By adding <strong>+89</strong> or <strong>+90</strong> to a Union Article number, you instantly calculate the exact corresponding State Article without memorizing hundreds of separate numbers!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs">
                <span className="font-mono font-bold text-blue-400 block mb-1">
                  Rule 1: Add +89 (Articles 72 to 111)
                </span>
                <span className="text-[var(--text-secondary)]">
                  Applies to President/Governor pardons, Council of Ministers, Attorney General/Advocate General, and parliamentary procedures up to Assent to Bills.
                </span>
              </div>
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs">
                <span className="font-mono font-bold text-emerald-400 block mb-1">
                  Rule 2: Add +90 (Articles 112 to 124)
                </span>
                <span className="text-[var(--text-secondary)]">
                  Applies to Union/State Annual Financial Statement (Budget), Appropriation Bills, Supplementary Grants, and President/Governor Ordinance Powers.
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Live Symmetry Calculator */}
          <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm space-y-3">
            <span className="text-xs font-mono uppercase text-[var(--text-muted)] font-bold">
              Try It Live: Interactive Symmetry Converter
            </span>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-xs font-mono text-[var(--text-secondary)]">Union Art:</span>
                <input
                  type="text"
                  value={calcInput}
                  onChange={(e) => setCalcInput(e.target.value)}
                  placeholder="e.g. 72, 76, 110, 112, 123"
                  className="w-32 px-3 py-1.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] font-mono text-sm text-[var(--text-primary)] text-center focus:border-[var(--border-strong)] focus:outline-none"
                />
              </div>

              <div className="text-xs font-mono text-[var(--text-muted)]">
                ➡️ {calculatedSymmetry && calculatedSymmetry.matched ? `${calculatedSymmetry.pair.rule} Formula` : `${calculatedSymmetry && !calculatedSymmetry.matched ? calculatedSymmetry.delta : '+89'}`} ➡️
              </div>

              <div className="px-4 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono font-bold text-sm">
                Corresponding State Provision: {calculatedSymmetry?.computed || '—'}
              </div>
            </div>

            {calculatedSymmetry && calculatedSymmetry.matched && (
              <p className="text-xs text-[var(--text-secondary)] bg-[var(--bg-base)] p-3 rounded-xl border border-[var(--border-subtle)]">
                💡 <strong>Verified Match:</strong> {calculatedSymmetry.pair.unionTitle} (Article {calculatedSymmetry.pair.unionArticle}) {calculatedSymmetry.pair.rule} = {calculatedSymmetry.pair.stateTitle} (Article {calculatedSymmetry.pair.stateArticle}). {calculatedSymmetry.pair.conceptualBridge}
              </p>
            )}
          </div>

          {/* Complete 23-Pair Master Symmetry Reference Matrix */}
          <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-[var(--border-subtle)]">
              <span className="text-sm font-black text-[var(--text-primary)]">
                The Master 23-Pair Symmetry Table
              </span>
              <span className="text-xs font-mono text-[var(--text-muted)]">
                Part V (Union) ⟷ Part VI (State)
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-[var(--border-subtle)] text-[var(--text-muted)]">
                    <th className="py-2 px-3">Union Provision (Part V)</th>
                    <th className="py-2 px-3">Shift</th>
                    <th className="py-2 px-3">State Counterpart (Part VI)</th>
                    <th className="py-2 px-3">Constitutional Subject & Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-subtle)]">
                  {mathPairs.map((p, idx) => (
                    <tr key={idx} className="hover:bg-[var(--bg-base)] transition-colors">
                      <td className="py-2.5 px-3 font-bold text-blue-400">
                        Article {p.unionArticle}
                        <span className="block text-[10px] text-[var(--text-muted)] font-normal">{p.unionTitle}</span>
                      </td>
                      <td className="py-2.5 px-3">
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20 text-[10px]">
                          {p.rule}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 font-bold text-emerald-400">
                        Article {p.stateArticle}
                        <span className="block text-[10px] text-[var(--text-muted)] font-normal">{p.stateTitle}</span>
                      </td>
                      <td className="py-2.5 px-3 text-[var(--text-secondary)]">
                        {p.conceptualBridge}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
