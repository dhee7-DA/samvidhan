import React, { useState, useMemo } from 'react';
import {
  Scale,
  Swords,
  Search,
  Sparkles,
  Flame,
  Award,
  BookOpen,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Gavel,
  ShieldAlert,
  ChevronRight,
  Filter,
  Calendar,
  Layers
} from 'lucide-react';
import { PRECEDENT_CLASHES_DATA, type PrecedentClash } from '../../data/precedentClashesData';
import { useTheme } from '../../context/ThemeContext';
import { PrecedentDuelArena } from './PrecedentDuelArena';

export const PrecedentClashView: React.FC = () => {
  const { setActiveTab } = useTheme();
  const [viewMode, setViewMode] = useState<'duel' | 'analysis'>('duel');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMagnitude, setSelectedMagnitude] = useState<string>('all');
  const [selectedClashId, setSelectedClashId] = useState<string>(PRECEDENT_CLASHES_DATA[0].id);

  // Filtered list
  const filteredClashes = useMemo(() => {
    return PRECEDENT_CLASHES_DATA.filter((clash) => {
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        clash.title.toLowerCase().includes(q) ||
        clash.topicPillar.toLowerCase().includes(q) ||
        clash.oldCase.caseName.toLowerCase().includes(q) ||
        clash.newCase.caseName.toLowerCase().includes(q) ||
        clash.newCase.constitutionalArticles.some((a) => a.toLowerCase().includes(q));

      const matchesMagnitude =
        selectedMagnitude === 'all' || clash.overrulingMagnitude === selectedMagnitude;

      return matchesSearch && matchesMagnitude;
    });
  }, [searchQuery, selectedMagnitude]);

  const activeClash: PrecedentClash = useMemo(() => {
    return (
      PRECEDENT_CLASHES_DATA.find((c) => c.id === selectedClashId) ||
      filteredClashes[0] ||
      PRECEDENT_CLASHES_DATA[0]
    );
  }, [selectedClashId, filteredClashes]);

  const currentIndex = PRECEDENT_CLASHES_DATA.findIndex((c) => c.id === activeClash.id);
  const handleNextClash = () => {
    const nextIdx = (currentIndex + 1) % PRECEDENT_CLASHES_DATA.length;
    setSelectedClashId(PRECEDENT_CLASHES_DATA[nextIdx].id);
  };
  const handlePrevClash = () => {
    const prevIdx = (currentIndex - 1 + PRECEDENT_CLASHES_DATA.length) % PRECEDENT_CLASHES_DATA.length;
    setSelectedClashId(PRECEDENT_CLASHES_DATA[prevIdx].id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-8 animate-fadeIn">
      {/* Hero Header */}
      <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[var(--bg-card)] via-[var(--bg-card)] to-[var(--accent-primary)]/10 border border-[var(--border-subtle)] space-y-4 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
              <Swords className="w-3.5 h-3.5" />
              Precedent Clash Arena • Overruled vs Modern Law
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] tracking-tight">
              Tectonic Shifts in Supreme Court Jurisprudence
            </h1>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-3xl leading-relaxed">
              Explore the 10 greatest constitutional overrulings where larger Constitution Benches struck down flawed historical precedents. Master the exact reasons why the old doctrines failed and how modern 2017–2024 ratios govern India today.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto shrink-0">
            <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] shadow-inner">
              <button
                type="button"
                onClick={() => setViewMode('duel')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'duel'
                    ? 'bg-rose-500 text-white shadow-sm'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                <Swords className="w-3.5 h-3.5" />
                <span>⚔️ Battle-Cards Duel</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('analysis')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'analysis'
                    ? 'bg-[var(--accent-primary)] text-[var(--bg-base)] shadow-sm'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>📖 Deep Analysis</span>
              </button>
            </div>
            <span className="hidden sm:inline-block px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--accent-primary)]">
              {PRECEDENT_CLASHES_DATA.length} Landmark Battles
            </span>
          </div>
        </div>

        {/* Search & Magnitude Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by case name, article, doctrine (e.g. Sita Soren, Davinder, MADA, Privacy)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
            {['all', '7-Judge Overruling', '9-Judge Overruling', '13-Judge Overruling', '5-Judge Re-anchoring'].map((mag) => (
              <button
                key={mag}
                type="button"
                onClick={() => setSelectedMagnitude(mag)}
                className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedMagnitude === mag
                    ? 'bg-[var(--accent-primary)] text-[var(--bg-base)] shadow-sm'
                    : 'bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                {mag === 'all' ? 'All Battles' : mag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Grid: Clash Selector Sidebar + Detailed Clash Arena */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Clash Pills / Selector (4 Cols) */}
        <div className="lg:col-span-4 space-y-2.5">
          <div className="flex items-center justify-between pb-1 px-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
              Select Constitutional Battle
            </span>
            <span className="text-xs text-[var(--text-muted)] font-mono">
              {filteredClashes.length} of {PRECEDENT_CLASHES_DATA.length}
            </span>
          </div>

          <div className="space-y-2 max-h-[750px] overflow-y-auto pr-1">
            {filteredClashes.map((c) => {
              const isSelected = activeClash.id === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedClashId(c.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all space-y-2 cursor-pointer ${
                    isSelected
                      ? 'bg-[var(--bg-card)] border-[var(--accent-primary)] shadow-md ring-1 ring-[var(--accent-primary)]/20'
                      : 'bg-[var(--bg-card)]/60 border-[var(--border-subtle)] hover:border-[var(--border-strong)] hover:bg-[var(--bg-card)]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
                      {c.overrulingMagnitude}
                    </span>
                    <span className="text-[11px] font-mono text-[var(--text-muted)]">
                      {c.yearOverruled}
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-sm font-bold text-[var(--text-primary)] leading-snug line-clamp-2">
                    {c.title}
                  </h3>

                  <div className="text-[11px] text-[var(--text-muted)] flex items-center gap-1.5 pt-1">
                    <span className="line-through text-rose-400 font-medium truncate max-w-[120px]">
                      {c.oldCase.caseName}
                    </span>
                    <ArrowRight className="w-3 h-3 text-[var(--accent-primary)] shrink-0" />
                    <span className="text-emerald-400 font-bold truncate max-w-[130px]">
                      {c.newCase.caseName}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Interactive Arena Split View (8 Cols) */}
        <div className="lg:col-span-8 space-y-6">
          {viewMode === 'duel' ? (
            <PrecedentDuelArena
              activeClash={activeClash}
              onNextClash={handleNextClash}
              onPrevClash={handlePrevClash}
              currentIndex={currentIndex}
              totalCount={PRECEDENT_CLASHES_DATA.length}
            />
          ) : (
            /* Active Battle Card (Deep Analysis Mode) */
            <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-6 sm:p-8 space-y-6 shadow-xl">
            {/* Title & Tagline */}
            <div className="space-y-2 border-b border-[var(--border-subtle)] pb-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  {activeClash.overrulingMagnitude} ({activeClash.yearOverruled})
                </span>
                <span className="text-xs font-medium text-[var(--text-muted)]">
                  {activeClash.topicPillar}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-[var(--text-primary)] tracking-tight">
                {activeClash.title}
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                {activeClash.tagline}
              </p>
            </div>

            {/* Split Arena: Overruled vs Modern Law */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Column: Overruled Precedent */}
              <div className="rounded-2xl bg-rose-500/5 border border-rose-500/20 p-5 space-y-3.5">
                <div className="flex items-center justify-between border-b border-rose-500/20 pb-2.5">
                  <span className="text-xs font-black uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4" />
                    The Overruled Doctrine
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 font-bold">
                    {activeClash.oldCase.year}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-[var(--text-primary)]">
                    {activeClash.oldCase.caseName}
                  </h4>
                  <p className="text-xs font-mono text-[var(--text-muted)] pt-0.5">
                    {activeClash.oldCase.citation} • {activeClash.oldCase.benchStrength}
                  </p>
                  {activeClash.oldCase.presidingJudges && (
                    <p className="text-[11px] text-[var(--text-muted)] italic pt-0.5">
                      Bench: {activeClash.oldCase.presidingJudges}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5 text-xs text-[var(--text-muted)]">
                  <p className="font-semibold text-rose-300">The Flawed Holding:</p>
                  <p className="leading-relaxed bg-[var(--bg-base)]/60 p-2.5 rounded-xl border border-rose-500/15">
                    {activeClash.oldCase.theFlawedRatio}
                  </p>
                </div>

                <div className="space-y-1 text-xs text-[var(--text-muted)]">
                  <p className="font-semibold text-[var(--text-primary)]">Why It Failed Constitutional Scrutiny:</p>
                  <p className="leading-relaxed">
                    {activeClash.oldCase.whyItFailed}
                  </p>
                </div>

                <div className="text-[11px] text-[var(--text-muted)] border-t border-rose-500/10 pt-2 italic">
                  Consequences: {activeClash.oldCase.consequences}
                </div>
              </div>

              {/* Right Column: Modern Settled Precedent */}
              <div className="rounded-2xl bg-emerald-500/5 border border-emerald-500/20 p-5 space-y-3.5">
                <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2.5">
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    The Settled Constitutional Ratio
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold">
                    {activeClash.newCase.year}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-[var(--text-primary)]">
                    {activeClash.newCase.caseName}
                  </h4>
                  <p className="text-xs font-mono text-[var(--text-muted)] pt-0.5">
                    {activeClash.newCase.citation} • {activeClash.newCase.benchStrength}
                  </p>
                  <p className="text-[11px] text-[var(--text-muted)] italic pt-0.5">
                    Bench: {activeClash.newCase.presidingJudges}
                  </p>
                </div>

                <div className="space-y-1.5 text-xs text-[var(--text-muted)]">
                  <p className="font-semibold text-emerald-300">The Modern Settled Rule:</p>
                  <p className="leading-relaxed bg-[var(--bg-base)]/60 p-2.5 rounded-xl border border-emerald-500/15">
                    {activeClash.newCase.theSettledRatio}
                  </p>
                </div>

                <div className="space-y-1 text-xs text-[var(--text-muted)]">
                  <p className="font-semibold text-[var(--text-primary)]">Doctrinal Shift:</p>
                  <p className="leading-relaxed">
                    {activeClash.newCase.doctrinalShift}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {activeClash.newCase.constitutionalArticles.map((art) => (
                    <span
                      key={art}
                      className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    >
                      {art}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Side-by-Side Parameter Matrix */}
            <div className="p-5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[var(--accent-primary)]" />
                Comparative Doctrinal Matrix
              </span>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-[var(--border-subtle)] text-[var(--text-muted)]">
                      <th className="py-2 pr-3 font-bold w-1/4">Legal Parameter</th>
                      <th className="py-2 px-3 font-bold text-rose-400 w-3/8">The Old Position (Overruled)</th>
                      <th className="py-2 pl-3 font-bold text-emerald-400 w-3/8">The Modern Law (Settled)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border-subtle)]">
                    {activeClash.summaryTable.map((row, i) => (
                      <tr key={i} className="hover:bg-[var(--bg-card)]/50 transition-colors">
                        <td className="py-2.5 pr-3 font-semibold text-[var(--text-primary)] align-top">
                          {row.parameter}
                        </td>
                        <td className="py-2.5 px-3 text-[var(--text-muted)] line-through decoration-rose-500/50 align-top">
                          {row.oldLaw}
                        </td>
                        <td className="py-2.5 pl-3 text-[var(--text-primary)] font-medium align-top">
                          {row.newLaw}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Key Takeaway for Mains Exams & Action Link */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[var(--accent-primary)]/10 via-[var(--bg-card)] to-[var(--bg-card)] border border-[var(--accent-primary)]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)] flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  Mains Exam Golden Takeaway
                </span>
                <p className="text-xs sm:text-sm text-[var(--text-primary)] font-medium leading-relaxed">
                  {activeClash.newCase.keyTakeawayForMains}
                </p>
              </div>

              {activeClash.linkedMainsQuestionId && (
                <button
                  type="button"
                  onClick={() => setActiveTab('pyq-vault')}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[var(--accent-primary)] text-[var(--bg-base)] hover:opacity-90 transition-all flex items-center gap-1.5 shrink-0 shadow-sm"
                >
                  <span>Practice Mains Question</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};
