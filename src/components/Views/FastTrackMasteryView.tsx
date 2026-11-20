import React, { useState, useMemo, useEffect } from 'react';
import {
  Zap,
  Sparkles,
  Calculator,
  BrainCircuit,
  Clock,
  Printer,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  Check,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  BookOpen,
  Scale,
  Shield,
  Layers,
  Search,
  ExternalLink,
  Flame,
  Award
} from 'lucide-react';
import {
  MATH_FORMULA_PAIRS,
  EMERGENCY_PLUS_FOUR_DATA,
  MNEMONIC_ENGINES,
  RAPID_REFLEX_QUESTIONS,
  type MathFormulaPair,
  type MnemonicEngine,
  type RapidReflexDrillQuestion
} from '../../data/fastTrackHacksData';
import { useTheme } from '../../context/ThemeContext';

export const FastTrackMasteryView: React.FC = () => {
  const { setActiveTab } = useTheme();

  // Active top-level tab
  const [activeTabMode, setActiveTabMode] = useState<'math' | 'mnemonics' | 'emergency' | 'drill'>('math');

  // Math Converter Interactive State
  const [selectedPairId, setSelectedPairId] = useState<string>(MATH_FORMULA_PAIRS[0].id);
  const [mathFilter, setMathFilter] = useState<'all' | '+89' | '+90'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Selected Math Pair
  const activePair = useMemo(() => {
    return MATH_FORMULA_PAIRS.find((p) => p.id === selectedPairId) || MATH_FORMULA_PAIRS[0];
  }, [selectedPairId]);

  // Filtered Math Pairs
  const filteredPairs = useMemo(() => {
    return MATH_FORMULA_PAIRS.filter((p) => {
      if (mathFilter !== 'all' && p.rule !== mathFilter) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchUnion = p.unionTitle.toLowerCase().includes(q) || String(p.unionArticle).includes(q);
        const matchState = p.stateTitle.toLowerCase().includes(q) || String(p.stateArticle).includes(q);
        if (!matchUnion && !matchState) return false;
      }
      return true;
    });
  }, [mathFilter, searchQuery]);

  // Selected Mnemonic
  const [selectedMnemonicId, setSelectedMnemonicId] = useState<string>(MNEMONIC_ENGINES[0].id);
  const activeMnemonic = useMemo(() => {
    return MNEMONIC_ENGINES.find((m) => m.id === selectedMnemonicId) || MNEMONIC_ENGINES[0];
  }, [selectedMnemonicId]);

  // Rapid Reflex Drill State
  const [isDrillActive, setIsDrillActive] = useState<boolean>(false);
  const [drillCurrentIndex, setDrillCurrentIndex] = useState<number>(0);
  const [drillSelectedOption, setDrillSelectedOption] = useState<number | null>(null);
  const [drillAnswerRevealed, setDrillAnswerRevealed] = useState<boolean>(false);
  const [drillScore, setDrillScore] = useState<number>(0);
  const [drillStreak, setDrillStreak] = useState<number>(0);
  const [drillTimeLeft, setDrillTimeLeft] = useState<number>(60);
  const [drillCompleted, setDrillCompleted] = useState<boolean>(false);

  // Drill Timer
  useEffect(() => {
    let timer: any = null;
    if (isDrillActive && !drillCompleted && drillTimeLeft > 0) {
      timer = setInterval(() => {
        setDrillTimeLeft((prev) => {
          if (prev <= 1) {
            setDrillCompleted(true);
            setIsDrillActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isDrillActive, drillCompleted, drillTimeLeft]);

  const handleStartDrill = () => {
    setIsDrillActive(true);
    setDrillCurrentIndex(0);
    setDrillSelectedOption(null);
    setDrillAnswerRevealed(false);
    setDrillScore(0);
    setDrillStreak(0);
    setDrillTimeLeft(60);
    setDrillCompleted(false);
  };

  const handleSelectDrillOption = (index: number) => {
    if (drillAnswerRevealed || drillCompleted) return;
    setDrillSelectedOption(index);
    setDrillAnswerRevealed(true);

    const q = RAPID_REFLEX_QUESTIONS[drillCurrentIndex];
    if (index === q.correctIndex) {
      setDrillScore((prev) => prev + 1);
      setDrillStreak((prev) => prev + 1);
    } else {
      setDrillStreak(0);
    }
  };

  const handleNextDrillQuestion = () => {
    if (drillCurrentIndex < RAPID_REFLEX_QUESTIONS.length - 1) {
      setDrillCurrentIndex((prev) => prev + 1);
      setDrillSelectedOption(null);
      setDrillAnswerRevealed(false);
    } else {
      setDrillCompleted(true);
      setIsDrillActive(false);
    }
  };

  const handlePrintPocketSheet = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-8 animate-fadeIn">
      {/* =========================================================================
          HEADER: Title, Subtitle, Quick Trigger
          ========================================================================= */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
              <Zap className="w-3.5 h-3.5 fill-current" />
              Cognitive Acceleration Engine
            </span>
            <span className="text-xs font-mono text-[var(--text-muted)]">
              Cut Constitution Study Load by 50%
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Fast-Track Constitutional Mastery Vault
          </h1>
          <p className="text-sm text-[var(--text-secondary)] mt-1 max-w-3xl leading-relaxed">
            Mathematical conversion rules (+89/+90), mnemonic memory palaces (TEARS OF OLD PM, EDOUT, SAUMRT), and rapid reflex drills to master 395 Articles in record time.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => {
              setActiveTabMode('drill');
              handleStartDrill();
            }}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[var(--accent)] text-[var(--bg-base)] font-mono text-xs font-bold shadow-md hover:opacity-95 transition-all btn-tactile"
          >
            <Clock className="w-4 h-4" />
            <span>60s SPEED SPRINT</span>
          </button>
          <button
            onClick={handlePrintPocketSheet}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] font-mono text-xs font-semibold transition-all btn-tactile"
          >
            <Printer className="w-4 h-4 text-[var(--text-muted)]" />
            <span>POCKET SHEET</span>
          </button>
        </div>
      </div>

      {/* =========================================================================
          MODULE NAVIGATION TABS
          ========================================================================= */}
      <div className="flex flex-wrap items-center gap-2 border-b border-[var(--border-subtle)] pb-2">
        <button
          onClick={() => setActiveTabMode('math')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all btn-tactile ${
            activeTabMode === 'math'
              ? 'bg-[var(--accent)] text-[var(--bg-base)] shadow-sm'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
          }`}
        >
          <Calculator className="w-4 h-4" />
          <span>Magic +89 / +90 Rule ({MATH_FORMULA_PAIRS.length} Pairs)</span>
        </button>

        <button
          onClick={() => setActiveTabMode('mnemonics')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all btn-tactile ${
            activeTabMode === 'mnemonics'
              ? 'bg-[var(--accent)] text-[var(--bg-base)] shadow-sm'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
          }`}
        >
          <BrainCircuit className="w-4 h-4" />
          <span>Mnemonic Memory Palaces ({MNEMONIC_ENGINES.length} Formulas)</span>
        </button>

        <button
          onClick={() => setActiveTabMode('emergency')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all btn-tactile ${
            activeTabMode === 'emergency'
              ? 'bg-[var(--accent)] text-[var(--bg-base)] shadow-sm'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
          }`}
        >
          <Shield className="w-4 h-4" />
          <span>+4 Emergency Triad</span>
        </button>

        <button
          onClick={() => setActiveTabMode('drill')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all btn-tactile ${
            activeTabMode === 'drill'
              ? 'bg-[var(--accent)] text-[var(--bg-base)] shadow-sm'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
          }`}
        >
          <Flame className="w-4 h-4 text-amber-400" />
          <span>60s Reflex Speed Sprint</span>
        </button>
      </div>

      {/* =========================================================================
          TAB 1: MAGIC +89 / +90 MATHEMATICAL CONVERSION LAB
          ========================================================================= */}
      {activeTabMode === 'math' && (
        <div className="flex flex-col gap-6 animate-fadeIn">
          {/* Concept Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-[var(--accent)] mb-1">
                <Calculator className="w-4 h-4" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">
                  The Constitutional Dual-State Algorithm
                </span>
              </div>
              <h2 className="text-base font-extrabold text-[var(--text-primary)]">
                Memorize Union Articles &rarr; Automatically Know State Articles
              </h2>
              <p className="text-xs text-[var(--text-secondary)] mt-1 max-w-2xl leading-relaxed">
                Articles 72 to 111 add <strong>+89</strong> to yield the exact State article. Articles 112 to 124 add <strong>+90</strong> to yield the exact State financial and judicial article.
              </p>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-center">
              <span className="px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs font-extrabold">
                +89 (Arts 72–111)
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono text-xs font-extrabold">
                +90 (Arts 112–124)
              </span>
            </div>
          </div>

          {/* Interactive Calculator Workspace */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Left: Interactive Equation Display & Comparison Card */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm flex flex-col gap-5">
                {/* Visual Mathematical Bridge */}
                <div className="grid grid-cols-1 md:grid-cols-11 items-center gap-3 p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
                  {/* Union Card */}
                  <div className="md:col-span-5 p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--text-muted)]">
                        Union Government
                      </span>
                      <div className="text-2xl font-extrabold font-mono text-[var(--accent)] mt-1">
                        Article {activePair.unionArticle}
                      </div>
                      <div className="text-xs font-bold text-[var(--text-primary)] mt-1">
                        {activePair.unionTitle}
                      </div>
                    </div>
                  </div>

                  {/* Math Operator Indicator */}
                  <div className="md:col-span-1 flex flex-col items-center justify-center my-1 md:my-0">
                    <span className="w-9 h-9 rounded-full bg-[var(--accent)] text-[var(--bg-base)] font-mono font-extrabold text-sm flex items-center justify-center shadow-md">
                      {activePair.rule}
                    </span>
                    <span className="text-[9px] font-mono text-[var(--text-muted)] mt-1 uppercase font-bold">
                      Add
                    </span>
                  </div>

                  {/* State Card */}
                  <div className="md:col-span-5 p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        State Government
                      </span>
                      <div className="text-2xl font-extrabold font-mono text-emerald-400 mt-1">
                        Article {activePair.stateArticle}
                      </div>
                      <div className="text-xs font-bold text-[var(--text-primary)] mt-1">
                        {activePair.stateTitle}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conceptual Bridge */}
                <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1.5">
                  <div className="text-xs font-mono font-bold uppercase text-[var(--accent)] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Conceptual Bridge
                  </div>
                  <p className="text-xs text-[var(--text-primary)] leading-relaxed">
                    {activePair.conceptualBridge}
                  </p>
                </div>

                {/* Statutory Differences */}
                <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1.5">
                  <div className="text-xs font-mono font-bold uppercase text-amber-400 flex items-center gap-1.5">
                    <Scale className="w-3.5 h-3.5" />
                    Critical Statutory Divergence
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {activePair.statutoryDifference}
                  </p>
                </div>

                {/* Examiner Trap */}
                <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20 space-y-1.5">
                  <div className="text-xs font-mono font-bold uppercase text-rose-400 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    Examiner Trap / Pitfall
                  </div>
                  <p className="text-xs text-[var(--text-primary)] font-medium leading-relaxed">
                    {activePair.examinerTrap}
                  </p>
                </div>

                {/* Landmark Precedent */}
                <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-bold text-[var(--text-primary)]">Benchmark Precedent: </span>
                    <span className="text-[var(--text-secondary)]">{activePair.landmarkCitation}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Pair Selector List */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              {/* Filter & Search Bar */}
              <div className="p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  {(['all', '+89', '+90'] as const).map((r) => (
                    <button
                      key={r}
                      onClick={() => setMathFilter(r)}
                      className={`flex-1 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                        mathFilter === r
                          ? 'bg-[var(--accent)] text-[var(--bg-base)]'
                          : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      {r === 'all' ? 'All (23)' : r}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by article or keyword..."
                    className="w-full pl-7 pr-3 py-1 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)]"
                  />
                </div>
              </div>

              {/* Scrollable Pairs List */}
              <div className="flex flex-col gap-2 max-h-[540px] overflow-y-auto pr-1">
                {filteredPairs.map((pair) => {
                  const isSelected = pair.id === activePair.id;
                  return (
                    <button
                      key={pair.id}
                      onClick={() => setSelectedPairId(pair.id)}
                      className={`p-3 rounded-xl border text-left transition-all btn-tactile flex items-center justify-between gap-2 ${
                        isSelected
                          ? 'bg-[var(--bg-surface-elevated)] border-[var(--accent)] ring-1 ring-[var(--accent)] shadow-sm'
                          : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-1.5 text-xs font-mono font-bold">
                          <span className="text-[var(--accent)]">Art. {pair.unionArticle}</span>
                          <span className="text-[var(--text-muted)] font-normal">&rarr;</span>
                          <span className="text-emerald-400">Art. {pair.stateArticle}</span>
                          <span className="text-[10px] px-1 rounded bg-[var(--badge-bg)] text-[var(--text-muted)]">
                            {pair.rule}
                          </span>
                        </div>
                        <div className="text-xs font-semibold text-[var(--text-primary)] mt-1 line-clamp-1">
                          {pair.unionTitle}
                        </div>
                      </div>
                      <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-[var(--accent)] translate-x-0.5' : 'text-[var(--text-muted)]'}`} />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 2: MASTER MNEMONIC ENGINES (MEMORY PALACES)
          ========================================================================= */}
      {activeTabMode === 'mnemonics' && (
        <div className="flex flex-col gap-6 animate-fadeIn">
          {/* Mnemonic Selector Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {MNEMONIC_ENGINES.map((m) => {
              const isSelected = m.id === activeMnemonic.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setSelectedMnemonicId(m.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all btn-tactile ${
                    isSelected
                      ? 'bg-[var(--accent)] text-[var(--bg-base)] shadow-sm'
                      : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                  }`}
                >
                  {m.catchphrase.split(' ')[0]} &bull; {m.title.split(':')[0]}
                </button>
              );
            })}
          </div>

          {/* Active Mnemonic Breakdown Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm flex flex-col gap-5">
            <div className="border-b border-[var(--border-subtle)] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
                  {activeMnemonic.category}
                </span>
                <h2 className="text-xl font-extrabold text-[var(--text-primary)] mt-1">
                  {activeMnemonic.title}
                </h2>
                <div className="text-xs font-mono text-[var(--text-muted)] mt-0.5">
                  Covers: {activeMnemonic.articlesCovered}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-center sm:text-right">
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase font-bold block">
                  Core Catchphrase
                </span>
                <span className="text-base font-extrabold font-mono text-amber-400">
                  {activeMnemonic.catchphrase}
                </span>
              </div>
            </div>

            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              {activeMnemonic.explanation}
            </p>

            {/* Letter-by-Letter Breakdown Table */}
            <div className="space-y-2">
              {activeMnemonic.breakdown.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center gap-3 transition-all hover:border-[var(--border-strong)]"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent)] text-[var(--bg-base)] font-mono font-extrabold text-base flex items-center justify-center shrink-0 shadow-sm">
                    {item.letter}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-extrabold text-[var(--text-primary)]">
                        {item.word}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--accent)] font-bold">
                        {item.article}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5 leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pro Tip */}
            <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-bold text-amber-400 font-mono uppercase">Mastery Pro-Tip: </span>
                <span className="text-[var(--text-secondary)]">{activeMnemonic.proTip}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 3: +4 EMERGENCY TRIAD & FUNDAMENTAL RIGHTS SHIELDS
          ========================================================================= */}
      {activeTabMode === 'emergency' && (
        <div className="flex flex-col gap-6 animate-fadeIn">
          {/* Header Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm">
            <div className="flex items-center gap-2 text-rose-400 mb-1">
              <Shield className="w-4 h-4" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider">
                Part XVIII Emergency Mathematics
              </span>
            </div>
            <h2 className="text-xl font-extrabold text-[var(--text-primary)]">
              {EMERGENCY_PLUS_FOUR_DATA.title} ({EMERGENCY_PLUS_FOUR_DATA.formula})
            </h2>
            <p className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">
              {EMERGENCY_PLUS_FOUR_DATA.description}
            </p>
          </div>

          {/* Triad Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {EMERGENCY_PLUS_FOUR_DATA.triad.map((em) => (
              <div
                key={em.article}
                className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-extrabold font-mono text-[var(--accent)]">
                      Art. {em.article}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--text-muted)] font-bold">
                      Part XVIII
                    </span>
                  </div>
                  <h3 className="text-base font-extrabold text-[var(--text-primary)]">
                    {em.type}
                  </h3>

                  <div className="mt-4 space-y-3 text-xs">
                    <div className="p-2.5 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)]">
                      <span className="font-mono text-[10px] uppercase font-bold text-[var(--text-muted)] block mb-0.5">
                        Constitutional Grounds:
                      </span>
                      <span className="text-[var(--text-primary)]">{em.grounds}</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)]">
                      <span className="font-mono text-[10px] uppercase font-bold text-[var(--text-muted)] block mb-0.5">
                        Approval Majority:
                      </span>
                      <span className="text-[var(--accent)] font-bold">{em.majority}</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)]">
                      <span className="font-mono text-[10px] uppercase font-bold text-[var(--text-muted)] block mb-0.5">
                        Approval & Duration:
                      </span>
                      <span className="text-[var(--text-secondary)]">{em.reviewTimeline}</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-rose-500/5 border border-rose-500/20">
                      <span className="font-mono text-[10px] uppercase font-bold text-rose-400 block mb-0.5">
                        Impact on Fundamental Rights:
                      </span>
                      <span className="text-[var(--text-secondary)] leading-relaxed">{em.impactOnRights}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Golden Triangle Interplay Box */}
          <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-amber-400">
              <Sparkles className="w-4 h-4" />
              <h3 className="text-sm font-extrabold font-mono uppercase tracking-wider">
                The Golden Triangle Mental Model (Articles 14, 19, 21)
              </h3>
            </div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Formulated in <strong>Maneka Gandhi v. Union of India (1978)</strong>. Articles 14, 19, and 21 are not watertight compartments. Any state action depriving personal liberty must simultaneously satisfy the <strong>Non-Arbitrariness Test of Article 14</strong>, the <strong>Reasonable Restriction Test of Article 19(2)–(6)</strong>, and the <strong>Just, Fair, and Reasonable Due Process Test of Article 21</strong>.
            </p>
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 4: 60-SECOND RAPID REFLEX DRILL
          ========================================================================= */}
      {activeTabMode === 'drill' && (
        <div className="flex flex-col gap-6 animate-fadeIn">
          {!isDrillActive && !drillCompleted ? (
            /* Drill Intro Screen */
            <div className="p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm text-center max-w-xl mx-auto flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-sm">
                <Clock className="w-7 h-7" />
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[var(--text-primary)]">
                  60-Second Formula Reflex Sprint
                </h2>
                <p className="text-xs text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                  Test your mathematical reflex on +89/+90 conversions and constitutional acronyms. Build automatic recall under timed exam pressure!
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-[var(--text-muted)] py-2 border-y border-[var(--border-subtle)] w-full justify-center">
                <span>⏱️ 60 Seconds</span>
                <span>•</span>
                <span>⚡ 10 Questions</span>
                <span>•</span>
                <span>🔥 Streak Multiplier</span>
              </div>

              <button
                onClick={handleStartDrill}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent)] text-[var(--bg-base)] font-mono text-sm font-extrabold shadow-md hover:opacity-95 transition-all btn-tactile"
              >
                <Zap className="w-4 h-4 fill-current" />
                <span>START SPRINT NOW</span>
              </button>
            </div>
          ) : isDrillActive ? (
            /* Active Drill Screen */
            <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm max-w-2xl mx-auto w-full flex flex-col gap-5">
              {/* Header: Timer, Score, Streak */}
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-[var(--accent)] text-[var(--bg-base)] font-mono text-xs font-bold">
                    Q {drillCurrentIndex + 1} / {RAPID_REFLEX_QUESTIONS.length}
                  </span>
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    Score: <strong className="text-[var(--text-primary)]">{drillScore}</strong>
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {drillStreak > 1 && (
                    <span className="flex items-center gap-1 text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30 animate-pulse">
                      <Flame className="w-3.5 h-3.5 fill-current" /> {drillStreak}x Streak!
                    </span>
                  )}
                  <span className={`text-base font-extrabold font-mono px-2.5 py-0.5 rounded ${drillTimeLeft <= 15 ? 'text-rose-400 bg-rose-500/10 border border-rose-500/30 animate-pulse' : 'text-[var(--accent)]'}`}>
                    00:{drillTimeLeft < 10 ? `0${drillTimeLeft}` : drillTimeLeft}
                  </span>
                </div>
              </div>

              {/* Question */}
              {(() => {
                const q = RAPID_REFLEX_QUESTIONS[drillCurrentIndex];
                return (
                  <div className="space-y-4">
                    <div className="text-base font-extrabold text-[var(--text-primary)] leading-relaxed">
                      {q.question}
                    </div>

                    <div className="space-y-2">
                      {q.options.map((opt, idx) => {
                        let btnStyle = 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent)]';
                        if (drillAnswerRevealed) {
                          if (idx === q.correctIndex) {
                            btnStyle = 'bg-emerald-500/10 border-emerald-500 text-emerald-400 font-bold';
                          } else if (idx === drillSelectedOption) {
                            btnStyle = 'bg-rose-500/10 border-rose-500 text-rose-400';
                          }
                        }

                        return (
                          <button
                            key={idx}
                            disabled={drillAnswerRevealed}
                            onClick={() => handleSelectDrillOption(idx)}
                            className={`w-full p-3 rounded-xl border text-left text-xs font-mono transition-all btn-tactile flex items-start gap-2.5 ${btnStyle}`}
                          >
                            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center shrink-0 font-bold text-[10px]">
                              {String.fromCharCode(65 + idx)}
                            </span>
                            <span className="flex-1">{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {drillAnswerRevealed && (
                      <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1.5 animate-fadeIn">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className={drillSelectedOption === q.correctIndex ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                            {drillSelectedOption === q.correctIndex ? '✓ Correct Formula!' : '✗ Formula Missed'}
                          </span>
                          <span className="text-amber-400 font-bold">{q.formulaNote}</span>
                        </div>
                        <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                          {q.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })()}

              {/* Next Control */}
              {drillAnswerRevealed && (
                <button
                  onClick={handleNextDrillQuestion}
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[var(--accent)] text-[var(--bg-base)] font-mono text-xs font-bold shadow-md hover:opacity-95 transition-all btn-tactile"
                >
                  <span>
                    {drillCurrentIndex < RAPID_REFLEX_QUESTIONS.length - 1 ? 'NEXT QUESTION' : 'VIEW SPRINT RESULTS'}
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          ) : (
            /* Drill Completed Screen */
            <div className="p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm text-center max-w-xl mx-auto flex flex-col items-center gap-4 animate-scaleUp">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-sm">
                <Award className="w-8 h-8" />
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[var(--text-primary)]">
                  Sprint Complete!
                </h2>
                <div className="text-3xl font-extrabold font-mono text-[var(--accent)] mt-2">
                  {drillScore} / {RAPID_REFLEX_QUESTIONS.length} Correct
                </div>
                <p className="text-xs text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                  {drillScore >= 8 ? '⚡ Outstanding! You have locked the mathematical rules into subconscious memory.' : 'Solid effort! Repeat the sprint to sharpen your 30-second recall.'}
                </p>
              </div>

              <button
                onClick={handleStartDrill}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--accent)] text-[var(--bg-base)] font-mono text-xs font-bold shadow-md hover:opacity-95 transition-all btn-tactile"
              >
                <RotateCcw className="w-4 h-4" />
                <span>TRY SPRINT AGAIN</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* =========================================================================
          PRINT-OPTIMIZED POCKET FORMULA SHEET (Hidden on screen, prints cleanly)
          ========================================================================= */}
      <div className="hidden print:block text-black bg-white p-6">
        <div className="border-b-2 border-black pb-3 mb-4">
          <h1 className="text-xl font-bold uppercase tracking-tight">
            SAMVIDHAN &bull; Pocket Constitutional Formula & Mnemonic Cheat Sheet
          </h1>
          <div className="text-[10px] font-mono text-gray-600">
            Rapid Revision Reference &bull; Print &amp; Revise in 5 Minutes
          </div>
        </div>

        {/* Math Rules Table */}
        <div className="mb-4">
          <h2 className="text-xs font-bold uppercase mb-1.5">1. The +89 and +90 Mathematical Rules</h2>
          <table className="w-full text-[10px] border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-400 p-1 text-left">Union Article</th>
                <th className="border border-gray-400 p-1 text-center">Rule</th>
                <th className="border border-gray-400 p-1 text-left">State Article</th>
                <th className="border border-gray-400 p-1 text-left">Subject &amp; Key Distinction</th>
              </tr>
            </thead>
            <tbody>
              {MATH_FORMULA_PAIRS.map((p) => (
                <tr key={p.id}>
                  <td className="border border-gray-400 p-1 font-bold">Art. {p.unionArticle}: {p.unionTitle}</td>
                  <td className="border border-gray-400 p-1 text-center font-bold font-mono">{p.rule}</td>
                  <td className="border border-gray-400 p-1 font-bold">Art. {p.stateArticle}: {p.stateTitle}</td>
                  <td className="border border-gray-400 p-1">{p.statutoryDifference}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mnemonics Table */}
        <div>
          <h2 className="text-xs font-bold uppercase mb-1.5">2. Constitutional Acronyms &amp; Mnemonics</h2>
          <table className="w-full text-[10px] border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-400 p-1 text-left">Mnemonic</th>
                <th className="border border-gray-400 p-1 text-left">Articles</th>
                <th className="border border-gray-400 p-1 text-left">Decoded Sequence</th>
              </tr>
            </thead>
            <tbody>
              {MNEMONIC_ENGINES.map((m) => (
                <tr key={m.id}>
                  <td className="border border-gray-400 p-1 font-bold font-mono">{m.catchphrase}</td>
                  <td className="border border-gray-400 p-1 font-mono">{m.articlesCovered}</td>
                  <td className="border border-gray-400 p-1">
                    {m.breakdown.map((b) => `${b.letter}: ${b.word}`).join(' | ')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
