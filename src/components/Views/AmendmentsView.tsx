import React, { useState, useMemo } from 'react';
import {
  GitCommit,
  Search,
  Award,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Gamepad2,
  BrainCircuit,
  Star,
  Sparkles,
  Scale,
  Lightbulb,
  Flame,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import {
  AMENDMENTS_DATA,
  AMENDMENT_CATEGORIES,
  type ConstitutionalAmendment,
  type AmendmentCategory
} from '../../data/amendmentsData';
import {
  TOP_25_HIGH_YIELD_AMENDMENTS,
  type HighYieldAmendment
} from '../../data/highYieldAmendmentsData';
import { AnnotatedLegalText } from '../Common/AnnotatedLegalText';
import { useTheme } from '../../context/ThemeContext';
import { getCardIdForAmendment } from '../../services/flashcardService';

const formatOrdinal = (n: number): string => {
  const mod100 = n % 100;
  if (mod100 >= 11 && mod100 <= 13) return `${n}th`;
  if (n % 10 === 1) return `${n}st`;
  if (n % 10 === 2) return `${n}nd`;
  if (n % 10 === 3) return `${n}rd`;
  return `${n}th`;
};

export const AmendmentsView: React.FC = () => {
  const { launchGameDeck, launchFlashcardDeck, pinnedFlashcardIds, togglePinFlashcard } = useTheme();
  // SubView: 'all' (All 106 Amendments Explorer) vs 'top25' (Top 25 Exam-Deciding)
  const [subView, setSubView] = useState<'all' | 'top25'>('all');
  const [top25Query, setTop25Query] = useState('');
  const [top25TierFilter, setTop25TierFilter] = useState<'All' | 'Tier 1' | 'Tier 2'>('All');
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | AmendmentCategory>('All');
  const [onlyLandmarks, setOnlyLandmarks] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'eli5' | 'juristic'>('eli5');
  const [selectedNumber, setSelectedNumber] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('samvidhan_active_amendment');
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (!isNaN(parsed) && AMENDMENTS_DATA.some((a) => a.number === parsed)) return parsed;
      }
      return AMENDMENTS_DATA[0].number;
    } catch {
      return AMENDMENTS_DATA[0].number;
    }
  });
  const [isMobileListOpen, setIsMobileListOpen] = useState(false);

  // Listen for amendment deep links
  React.useEffect(() => {
    const handleAmendNav = (e?: Event) => {
      try {
        const raw = (e as CustomEvent)?.detail?.amendmentNumber || localStorage.getItem('samvidhan_active_amendment');
        if (raw) {
          const parsed = typeof raw === 'number' ? raw : parseInt(String(raw).replace(/\D/g, ''), 10);
          if (!isNaN(parsed) && AMENDMENTS_DATA.some((a) => a.number === parsed)) {
            setSelectedNumber(parsed);
          }
        }
      } catch {
        // ignore
      }
    };
    window.addEventListener('samvidhan_navigate_amendment', handleAmendNav as EventListener);
    window.addEventListener('storage', handleAmendNav as EventListener);
    handleAmendNav();
    return () => {
      window.removeEventListener('samvidhan_navigate_amendment', handleAmendNav as EventListener);
      window.removeEventListener('storage', handleAmendNav as EventListener);
    };
  }, []);

  const filtered = useMemo(() => {
    return AMENDMENTS_DATA.filter((a) => {
      if (onlyLandmarks && !a.isLandmark) return false;
      if (selectedCategory !== 'All' && a.category !== selectedCategory) return false;
      if (!query.trim()) return true;
      const q = query.toLowerCase().trim();
      return (
        a.number.toString().includes(q) ||
        a.year.toString().includes(q) ||
        a.title.toLowerCase().includes(q) ||
        a.keyObjectives.toLowerCase().includes(q) ||
        a.significance.toLowerCase().includes(q) ||
        a.plainEnglish.toLowerCase().includes(q) ||
        a.primeMinisterOrEra.toLowerCase().includes(q) ||
        a.articlesAffected.some((art) => art.toLowerCase().includes(q))
      );
    });
  }, [query, selectedCategory, onlyLandmarks]);

  const selectedAmd: ConstitutionalAmendment =
    filtered.find((a) => a.number === selectedNumber) ||
    AMENDMENTS_DATA.find((a) => a.number === selectedNumber) ||
    filtered[0] ||
    AMENDMENTS_DATA[0];

  const currentIdxInFiltered = filtered.findIndex((a) => a.number === selectedAmd.number);
  const landmarkCount = useMemo(() => AMENDMENTS_DATA.filter((a) => a.isLandmark).length, []);
  const currentCardId = getCardIdForAmendment(selectedAmd.number);
  const isPinned = pinnedFlashcardIds.includes(currentCardId);

  const filteredTop25 = useMemo(() => {
    return TOP_25_HIGH_YIELD_AMENDMENTS.filter((item) => {
      if (top25TierFilter === 'Tier 1' && !item.frequencyRank.includes('Tier 1')) return false;
      if (top25TierFilter === 'Tier 2' && !item.frequencyRank.includes('Tier 2')) return false;
      if (!top25Query.trim()) return true;
      const q = top25Query.toLowerCase().trim();
      return (
        item.title.toLowerCase().includes(q) ||
        item.keyArticlesAltered.some((art) => art.toLowerCase().includes(q)) ||
        item.coreExamTakeaways.some((t) => t.toLowerCase().includes(q)) ||
        (item.landmarkJudicialCase && item.landmarkJudicialCase.toLowerCase().includes(q)) ||
        item.examinerTraps.some((tr) => tr.toLowerCase().includes(q))
      );
    });
  }, [top25Query, top25TierFilter]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6 animate-fadeIn">
      {/* Top Banner & SubView Switcher */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <GitCommit className="w-6 h-6 text-[var(--accent)]" />
            <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Constitutional Amendments
            </h1>
            <span className="text-xs px-2.5 py-0.5 rounded font-mono font-bold bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
              1951–2026
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            Explore all 106 constitutional amendments or switch to the Top 25 Exam-Deciding high-yield revision cards.
          </p>
        </div>

        <div className="flex items-center gap-1 bg-[var(--bg-surface)] p-1 rounded-xl border border-[var(--border-subtle)] shrink-0 self-stretch sm:self-auto justify-end">
          <button
            onClick={() => setSubView('all')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
              subView === 'all'
                ? 'bg-[var(--accent)] text-[var(--accent-contrast)] shadow-xs'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <GitCommit className="w-3.5 h-3.5" />
            <span>All 106 Amendments</span>
          </button>
          <button
            onClick={() => setSubView('top25')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
              subView === 'top25'
                ? 'bg-amber-500 text-white shadow-xs'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>Top 25 Exam-Deciding</span>
          </button>
        </div>
      </div>

      {/* TOP 25 HIGH-YIELD AMENDMENTS SUBVIEW */}
      {subView === 'top25' && (
        <div className="flex flex-col gap-5 animate-fadeIn">
          {/* Filter Bar */}
          <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-mono text-[var(--text-muted)] uppercase">Rank Filter:</span>
              {(['All', 'Tier 1', 'Tier 2'] as const).map((tier) => (
                <button
                  key={tier}
                  onClick={() => setTop25TierFilter(tier)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all border ${
                    top25TierFilter === tier
                      ? 'bg-amber-500 text-white border-amber-600 shadow-xs'
                      : 'bg-[var(--bg-base)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {tier === 'Tier 1' ? '⭐⭐⭐⭐⭐ Must-Know (Tier 1)' : tier === 'Tier 2' ? '⭐⭐⭐⭐ High-Yield (Tier 2)' : 'All 25 Cards'}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 bg-[var(--bg-base)] px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] focus-within:border-amber-500">
              <Search className="w-3.5 h-3.5 text-[var(--text-muted)] shrink-0" />
              <input
                type="text"
                value={top25Query}
                onChange={(e) => setTop25Query(e.target.value)}
                placeholder="Search amendment, case, or article..."
                className="bg-transparent border-none text-xs font-mono text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none w-full sm:w-60"
              />
              {top25Query && (
                <button
                  onClick={() => setTop25Query('')}
                  className="text-[10px] font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                >
                  CLEAR
                </button>
              )}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredTop25.map((item) => (
              <div
                key={item.number}
                className="p-5 rounded-2xl bg-[var(--bg-surface)] border-2 border-[var(--border-strong)] hover:border-amber-500/60 transition-all flex flex-col justify-between gap-4 shadow-sm"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-amber-500 text-white">
                        {item.title.split(' (')[0]}
                      </span>
                      <span className="text-xs font-mono text-[var(--text-muted)]">
                        Year: {item.year}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-amber-400">
                      {item.frequencyRank}
                    </span>
                  </div>

                  {/* Altered Articles Pills */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase">Articles:</span>
                    {item.keyArticlesAltered.map((art, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[var(--bg-base)] text-[var(--accent)] border border-[var(--border-subtle)]"
                      >
                        {art}
                      </span>
                    ))}
                  </div>

                  {/* Core Exam Takeaways */}
                  <div className="flex flex-col gap-1.5 pt-1">
                    <span className="text-[10px] font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider">
                      Core Exam Takeaways:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                      {item.coreExamTakeaways.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Landmark Case Citation */}
                  {item.landmarkJudicialCase && (
                    <div className="p-2.5 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-muted)]">
                      <strong className="text-[var(--accent)]">Associated Landmark Ruling: </strong>
                      <span className="text-[var(--text-primary)]">{item.landmarkJudicialCase}</span>
                    </div>
                  )}

                  {/* Examiner Traps */}
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 flex flex-col gap-1">
                    <span className="text-[10px] font-mono font-bold text-rose-400 uppercase flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5" />
                      <span>Examiner Traps:</span>
                    </span>
                    <ul className="list-disc list-inside space-y-1 text-[11px] text-rose-200">
                      {item.examinerTraps.map((tr, idx) => (
                        <li key={idx} className="leading-snug">
                          {tr}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between">
                  <button
                    onClick={() => {
                      setSelectedNumber(item.number);
                      setSubView('all');
                    }}
                    className="flex items-center gap-1 text-xs font-mono font-bold text-[var(--accent)] hover:underline"
                  >
                    <span>View in Full 106 Explorer &rarr;</span>
                  </button>
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">
                    Amendment #{item.number}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ALL 106 AMENDMENTS SUBVIEW */}
      {subView === 'all' && (
      <>
      {/* Mobile Collapsible Selector Button */}
      <div className="lg:hidden flex flex-col gap-2">
        <button
          onClick={() => setIsMobileListOpen((prev) => !prev)}
          className="flex items-center justify-between p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)]"
        >
          <div className="flex items-center gap-2 min-w-0">
            <GitCommit className="w-4 h-4 text-[var(--accent)] shrink-0" />
            <span className="font-bold text-[var(--accent)]">
              {formatOrdinal(selectedAmd.number)} Amd ({selectedAmd.year}):
            </span>
            <span className="truncate">{selectedAmd.title}</span>
          </div>
          <div className="flex items-center gap-1.5 shrink-0 ml-2">
            <span className="text-[10px] text-[var(--text-muted)]">{filtered.length}/106</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isMobileListOpen ? 'rotate-180 text-[var(--accent)]' : ''}`} />
          </div>
        </button>

        {isMobileListOpen && (
          <div className="p-4 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] shadow-xl flex flex-col gap-3 animate-fadeIn">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)]">
              <Search className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search any of 106 amendments (e.g. 42, GST, Sikkim)..."
                className="w-full bg-transparent border-none text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none font-mono"
              />
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setOnlyLandmarks((prev) => !prev)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold border transition-all ${
                  onlyLandmarks
                    ? 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                    : 'bg-[var(--bg-base)] text-[var(--text-secondary)] border-[var(--border-subtle)]'
                }`}
              >
                Landmarks ({landmarkCount})
              </button>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as 'All' | AmendmentCategory)}
                className="flex-1 px-2.5 py-1 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-primary)] focus:outline-none"
              >
                <option value="All">All Categories (106)</option>
                {AMENDMENT_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2 max-h-64 overflow-y-auto">
              {filtered.map((amd) => (
                <button
                  key={amd.number}
                  onClick={() => {
                    setSelectedNumber(amd.number);
                    setIsMobileListOpen(false);
                  }}
                  className={`p-2.5 rounded-lg text-left text-xs font-mono border transition-all ${
                    amd.number === selectedAmd.number
                      ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold border-[var(--accent)]'
                      : 'bg-[var(--bg-base)] text-[var(--text-secondary)] border-[var(--border-subtle)]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold">
                      {formatOrdinal(amd.number)} Amendment {amd.isLandmark ? '★' : ''}
                    </span>
                    <span className="text-[10px] opacity-75">{amd.year}</span>
                  </div>
                  <p className="text-[11px] truncate mt-0.5">{amd.title}</p>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Column: Complete 1–106 Amendments List (Desktop) */}
        <div className="hidden lg:flex w-84 shrink-0 flex-col gap-4">
          <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col gap-3">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <GitCommit className="w-4 h-4 text-[var(--accent)]" />
                <h3 className="text-sm font-bold text-[var(--text-primary)]">
                  All 106 Amendments
                </h3>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)] font-bold">
                {filtered.length}/106
              </span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)]">
              <Search className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search #, year, article, GST, Sikkim..."
                className="w-full bg-transparent border-none text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none font-mono"
              />
            </div>

            {/* Landmarks Toggle + Category Selector */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setOnlyLandmarks(false)}
                  className={`flex-1 py-1.5 rounded-lg text-[11px] font-mono font-bold border transition-all ${
                    !onlyLandmarks
                      ? 'bg-[var(--accent)] text-[var(--accent-contrast)] border-[var(--accent)]'
                      : 'bg-[var(--bg-base)] text-[var(--text-secondary)] border-[var(--border-subtle)]'
                  }`}
                >
                  All 106
                </button>
                <button
                  onClick={() => setOnlyLandmarks(true)}
                  className={`flex-1 py-1.5 rounded-lg text-[11px] font-mono font-bold border transition-all ${
                    onlyLandmarks
                      ? 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                      : 'bg-[var(--bg-base)] text-[var(--text-secondary)] border-[var(--border-subtle)]'
                  }`}
                >
                  ★ Landmarks ({landmarkCount})
                </button>
              </div>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as 'All' | AmendmentCategory)}
                className="w-full px-2.5 py-1.5 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-primary)] focus:outline-none"
              >
                <option value="All">All 9 Constitutional Themes</option>
                {AMENDMENT_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 gap-2 pt-1 border-t border-[var(--border-subtle)]">
              <button
                onClick={() => launchGameDeck('amendments')}
                className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-[var(--accent)] text-[var(--accent-contrast)] hover:opacity-90 font-mono text-xs font-bold transition-all shadow-sm"
              >
                <Gamepad2 className="w-3.5 h-3.5" />
                <span>Play Amendments Matcher</span>
              </button>
              <button
                onClick={() => launchFlashcardDeck('amendments', 'all')}
                className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)] hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)] font-mono text-xs font-bold transition-all shadow-sm"
              >
                <BrainCircuit className="w-3.5 h-3.5" />
                <span>Drill All 106 in SRS</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2 max-h-[68vh] overflow-y-auto pr-1">
            {filtered.map((amd) => {
              const isSelected = amd.number === selectedAmd.number;
              return (
                <div
                  key={amd.number}
                  onClick={() => setSelectedNumber(amd.number)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-[var(--bg-surface-elevated)] border-[var(--accent)] shadow-sm'
                      : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1 gap-1">
                    <span className="text-[10px] font-mono font-bold text-[var(--accent)] flex items-center gap-1">
                      <span>{formatOrdinal(amd.number)} Amendment</span>
                      {amd.isLandmark && <span className="text-amber-400">★</span>}
                    </span>
                    <span className="text-[10px] font-mono text-[var(--text-muted)]">
                      {amd.year}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-[var(--text-primary)] line-clamp-1 break-words">
                    {amd.title}
                  </h4>
                  <p className="text-[11px] text-[var(--text-secondary)] line-clamp-1 mt-0.5 break-words">
                    {amd.keyObjectives}
                  </p>
                </div>
              );
            })}
            {filtered.length === 0 && (
              <div className="p-6 text-center text-xs font-mono text-[var(--text-muted)] bg-[var(--bg-surface)] rounded-xl border border-[var(--border-subtle)]">
                No amendments match your filter.
              </div>
            )}
          </div>
        </div>

        {/* Right Column: In-Depth Amendment Inspector */}
        <div className="flex-1 flex flex-col gap-6 min-w-0 w-full">
          <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col gap-5">
            <div className="flex flex-wrap items-start justify-between gap-3 pb-4 border-b border-[var(--border-subtle)]">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
                    {formatOrdinal(selectedAmd.number)} · {selectedAmd.year}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                    {selectedAmd.category}
                  </span>
                  {selectedAmd.isLandmark && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30">
                      ★ High-Yield Landmark
                    </span>
                  )}
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    PM/Era: {selectedAmd.primeMinisterOrEra}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                  <AnnotatedLegalText text={selectedAmd.title} />
                </h2>
              </div>

              <div className="flex items-center gap-2 flex-wrap shrink-0">
                {/* ELI5 vs Juristic Toggle */}
                <div className="flex items-center p-0.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs font-mono">
                  <button
                    onClick={() => setViewMode('eli5')}
                    className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg transition-all ${
                      viewMode === 'eli5'
                        ? 'bg-amber-500 text-black font-bold'
                        : 'text-amber-500 hover:text-amber-400 font-bold'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>ELI5</span>
                  </button>
                  <button
                    onClick={() => setViewMode('juristic')}
                    className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg transition-all ${
                      viewMode === 'juristic'
                        ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    <Scale className="w-3.5 h-3.5" />
                    <span>Juristic</span>
                  </button>
                </div>

                <button
                  onClick={() => togglePinFlashcard(currentCardId)}
                  className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg border text-xs font-mono font-bold transition-colors ${
                    isPinned
                      ? 'bg-amber-500/15 text-amber-400 border-amber-500/40'
                      : 'bg-[var(--bg-base)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:text-amber-400'
                  }`}
                  title="Pin Amendment to SRS Flashcards"
                >
                  <Star className={`w-3.5 h-3.5 ${isPinned ? 'fill-current' : ''}`} />
                  <span>{isPinned ? 'Pinned' : 'SRS Pin'}</span>
                </button>
                <button
                  onClick={() => launchFlashcardDeck('amendments', 'all', currentCardId)}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-[var(--badge-border)] bg-[var(--badge-bg)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)] text-xs font-mono font-bold transition-colors"
                  title="Study this Amendment in Leitner SRS"
                >
                  <BrainCircuit className="w-3.5 h-3.5" />
                  <span>Drill Card</span>
                </button>
              </div>
            </div>

            {/* ELI5 Plain-English & Real-World Box (First when ELI5 active) */}
            {viewMode === 'eli5' && (
              <div className="p-5 rounded-xl bg-gradient-to-br from-amber-500/10 via-[var(--bg-base)] to-[var(--bg-base)] border border-amber-500/30 space-y-3 animate-fadeIn">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Plain-English Breakdown (ELI5)</span>
                </div>
                <p className="text-sm sm:text-base text-[var(--text-primary)] leading-relaxed font-medium">
                  <AnnotatedLegalText text={selectedAmd.plainEnglish} />
                </p>
                <div className="p-3.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-start gap-2.5">
                  <Lightbulb className="w-4 h-4 text-[var(--gold)] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--gold)] block mb-0.5">
                      Real-World Impact & Exam Recall Hook
                    </span>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      <AnnotatedLegalText text={selectedAmd.realWorldExample} />
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Articles Affected Badges */}
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
                Articles & Schedules Altered / Inserted
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedAmd.articlesAffected.map((art) => (
                  <span key={art} className="text-xs font-mono px-2.5 py-1 rounded-md bg-[var(--bg-base)] text-[var(--accent)] border border-[var(--border-subtle)]">
                    {art}
                  </span>
                ))}
              </div>
            </div>

            {/* Purpose & Objectives */}
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
                Underlying Purpose & Rationale
              </span>
              <p className="text-sm text-[var(--text-primary)] leading-relaxed">
                <AnnotatedLegalText text={selectedAmd.keyObjectives} />
              </p>
            </div>

            {/* Substantive Legal Impact */}
            <div className="p-4 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex flex-col gap-1.5">
              <span className="text-xs font-semibold text-[var(--gold)] uppercase tracking-wider">
                Substantive Constitutional Impact
              </span>
              <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed">
                <AnnotatedLegalText text={selectedAmd.significance} />
              </p>
            </div>

            {/* Landmark Judicial Challenge if any */}
            {selectedAmd.landmarkJudicialImpact && (
              <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-strong)] flex items-start gap-3">
                <Award className="w-5 h-5 text-[var(--crimson)] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-[var(--crimson)] uppercase tracking-wider">
                    Supreme Court Judicial Review
                  </span>
                  <p className="text-xs text-[var(--text-secondary)] mt-0.5 leading-relaxed font-mono">
                    <AnnotatedLegalText text={selectedAmd.landmarkJudicialImpact} />
                  </p>
                </div>
              </div>
            )}

            {/* Prev / Next Stepper across all 106 Amendments */}
            <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  if (currentIdxInFiltered > 0) {
                    setSelectedNumber(filtered[currentIdxInFiltered - 1].number);
                  }
                }}
                disabled={currentIdxInFiltered <= 0}
                className="px-3.5 py-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-base)] text-xs font-mono font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] disabled:opacity-30 flex items-center gap-1.5"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <span className="text-xs font-mono text-[var(--text-muted)]">
                Amendment #{selectedAmd.number} of 106
              </span>

              <button
                onClick={() => {
                  if (currentIdxInFiltered !== -1 && currentIdxInFiltered < filtered.length - 1) {
                    setSelectedNumber(filtered[currentIdxInFiltered + 1].number);
                  }
                }}
                disabled={currentIdxInFiltered === -1 || currentIdxInFiltered >= filtered.length - 1}
                className="px-3.5 py-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-base)] text-xs font-mono font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] disabled:opacity-30 flex items-center gap-1.5"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      </>
      )}
    </div>
  );
};
