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
  Award,
  GitBranch,
  Sliders
} from 'lucide-react';
import {
  MATH_FORMULA_PAIRS,
  EMERGENCY_PLUS_FOUR_DATA,
  MNEMONIC_ENGINES,
  RAPID_REFLEX_QUESTIONS,
  MASTER_CHEAT_CODES,
  CONSTITUTIONAL_MAJORITY_DATA,
  calculateConstitutionalMajorities,
  solveBidirectionalArticleRule,
  type MathFormulaPair,
  type MnemonicEngine,
  type RapidReflexDrillQuestion,
  type MasterCheatCode,
  type ConstitutionalMajorityTier,
  type BidirectionalSolverResult
} from '../../data/fastTrackHacksData';
import { useTheme } from '../../context/ThemeContext';

export const FastTrackMasteryView: React.FC = () => {
  const { setActiveTab } = useTheme();

  // Active top-level tab
  const [activeTabMode, setActiveTabMode] = useState<'cheat-codes' | 'math' | 'majorities' | 'mnemonics' | 'emergency' | 'drill'>('cheat-codes');

  // Math Converter Interactive State & Inline Accordion Expand
  const [selectedPairId, setSelectedPairId] = useState<string>(MATH_FORMULA_PAIRS[0].id);
  const [expandedPairIds, setExpandedPairIds] = useState<Record<string, boolean>>({
    [MATH_FORMULA_PAIRS[0].id]: true // default first tile expanded
  });
  const [mathFilter, setMathFilter] = useState<'all' | '+89' | '+90'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Bidirectional Article Calculator State
  const [calcInput, setCalcInput] = useState<string>('76');
  const [calcResult, setCalcResult] = useState<BidirectionalSolverResult | null>(() => solveBidirectionalArticleRule(76));

  const handleRunCalculation = (val: string) => {
    setCalcInput(val);
    const num = parseInt(val.trim(), 10);
    if (!isNaN(num)) {
      setCalcResult(solveBidirectionalArticleRule(num));
    } else {
      setCalcResult(null);
    }
  };

  // Parliamentary Chamber Majority Simulator State
  const [chamberPreset, setChamberPreset] = useState<'lok-sabha' | 'rajya-sabha' | 'state-assembly'>('lok-sabha');
  const [chamberTotalSeats, setChamberTotalSeats] = useState<number>(543);
  const [chamberVacancies, setChamberVacancies] = useState<number>(8);
  const [chamberPresent, setChamberPresent] = useState<number>(420);
  const [chamberVoting, setChamberVoting] = useState<number>(400);
  const [selectedMajorityFilter, setSelectedMajorityFilter] = useState<'all' | 'ordinary' | 'special'>('all');

  const chamberCalculations = useMemo(() => {
    return calculateConstitutionalMajorities(
      chamberTotalSeats,
      chamberVacancies,
      chamberPresent,
      chamberVoting
    );
  }, [chamberTotalSeats, chamberVacancies, chamberPresent, chamberVoting]);

  const handleApplyPreset = (preset: 'lok-sabha' | 'rajya-sabha' | 'state-assembly') => {
    setChamberPreset(preset);
    if (preset === 'lok-sabha') {
      setChamberTotalSeats(543);
      setChamberVacancies(8);
      setChamberPresent(420);
      setChamberVoting(400);
    } else if (preset === 'rajya-sabha') {
      setChamberTotalSeats(245);
      setChamberVacancies(5);
      setChamberPresent(190);
      setChamberVoting(180);
    } else {
      setChamberTotalSeats(250);
      setChamberVacancies(4);
      setChamberPresent(210);
      setChamberVoting(200);
    }
  };

  const togglePairExpand = (pairId: string) => {
    setExpandedPairIds((prev) => ({
      ...prev,
      [pairId]: !prev[pairId]
    }));
    setSelectedPairId(pairId);
  };

  const handleExpandAll = () => {
    const all: Record<string, boolean> = {};
    filteredPairs.forEach((p) => {
      all[p.id] = true;
    });
    setExpandedPairIds(all);
  };

  const handleCollapseAll = () => {
    setExpandedPairIds({});
  };

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
            onClick={() => setActiveTab('lineage')}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 font-mono text-xs font-semibold transition-all btn-tactile"
            title="Open Precedent Evolution Knowledge Graphs"
          >
            <GitBranch className="w-4 h-4 text-purple-400" />
            <span>KNOWLEDGE GRAPHS</span>
          </button>
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
          onClick={() => setActiveTabMode('cheat-codes')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all btn-tactile ${
            activeTabMode === 'cheat-codes'
              ? 'bg-[var(--accent)] text-[var(--bg-base)] shadow-sm'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
          }`}
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>7 Master Cheat Codes ({MASTER_CHEAT_CODES.length})</span>
        </button>

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
          onClick={() => setActiveTabMode('majorities')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all btn-tactile ${
            activeTabMode === 'majorities'
              ? 'bg-[var(--accent)] text-[var(--bg-base)] shadow-sm'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
          }`}
        >
          <Scale className="w-4 h-4 text-emerald-400" />
          <span>Majority Matrix (4 Types Decoded)</span>
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
          TAB 0: 7 MASTER CHEAT CODES WALL
          ========================================================================= */}
      {activeTabMode === 'cheat-codes' && (
        <div className="flex flex-col gap-6 animate-fadeIn">
          {/* Header Banner */}
          <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-amber-400 mb-1">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">
                  Universal Constitutional Cheat Sheet
                </span>
              </div>
              <h2 className="text-xl font-extrabold text-[var(--text-primary)]">
                The 7 Master Short-Cut Rules to Master the Constitution
              </h2>
              <p className="text-xs text-[var(--text-secondary)] mt-1 max-w-2xl leading-relaxed">
                Proven mental models, mathematical algorithms, and memory hooks used by top rankers to deduce answers without brute-force memorization.
              </p>
            </div>
            <button
              onClick={() => setActiveTabMode('drill')}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[var(--accent)] text-[var(--bg-base)] font-mono text-xs font-bold shadow-sm hover:opacity-95 transition-all btn-tactile self-start sm:self-center shrink-0"
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>TEST MY RECALL &rarr;</span>
            </button>
          </div>

          {/* Cheat Codes Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {MASTER_CHEAT_CODES.map((code, idx) => (
              <div
                key={code.id}
                className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
                      HACK #{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono text-[var(--text-muted)]">
                      {code.articlesAnchored}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-[var(--text-primary)] leading-snug">
                    {code.title}
                  </h3>

                  {/* Formula Tag */}
                  <div className="my-2.5 p-2 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] font-mono text-xs font-extrabold text-amber-400">
                    {code.formulaTag}
                  </div>

                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {code.summary}
                  </p>

                  <div className="mt-3 p-2.5 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1 text-xs">
                    <span className="font-mono text-[10px] uppercase font-bold text-[var(--text-muted)] block">
                      How It Works:
                    </span>
                    <p className="text-[11px] text-[var(--text-primary)] leading-relaxed">
                      {code.howItWorks}
                    </p>
                  </div>

                  <div className="mt-2.5 p-2.5 rounded-lg bg-rose-500/5 border border-rose-500/20 space-y-0.5 text-xs">
                    <span className="font-mono text-[10px] uppercase font-bold text-rose-400 block">
                      Examiner Trap:
                    </span>
                    <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                      {code.examinerTrap}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[var(--text-muted)] italic">
                    💡 {code.memoryHook}
                  </span>
                  {code.id === 'rule-plus-89' || code.id === 'rule-plus-90' ? (
                    <button
                      onClick={() => setActiveTabMode('math')}
                      className="text-xs font-mono font-bold text-[var(--accent)] hover:underline shrink-0"
                    >
                      Open Calculator &rarr;
                    </button>
                  ) : code.id === 'rule-plus-4-emergency' ? (
                    <button
                      onClick={() => setActiveTabMode('emergency')}
                      className="text-xs font-mono font-bold text-rose-400 hover:underline shrink-0"
                    >
                      View Triad &rarr;
                    </button>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

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

          {/* =========================================================================
              BIDIRECTIONAL REAL-TIME ARTICLE SOLVER & RULE VERIFIER
              ========================================================================= */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center text-[var(--accent)]">
                  <Calculator className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-[var(--text-primary)]">
                    Bidirectional Article Solver & Rule Verifier
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Type any Union or State article (e.g. 72, 76, 110, 123, 161, 165, 199, 213, 352, 32). The engine verifies the rule and links the counterpart.
                  </p>
                </div>
              </div>
            </div>

            {/* Input & Quick Presets */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
                <div className="relative flex-1">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-mono text-xs font-bold text-[var(--accent)]">
                    Art.
                  </span>
                  <input
                    type="number"
                    min="1"
                    max="395"
                    value={calcInput}
                    onChange={(e) => handleRunCalculation(e.target.value)}
                    placeholder="Enter article number (e.g. 76, 165, 123, 213)..."
                    className="w-full pl-12 pr-16 py-2.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-sm font-mono font-bold text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)]"
                  />
                  {calcInput && (
                    <button
                      onClick={() => handleRunCalculation('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                    >
                      Clear
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                  <span className="text-[11px] font-mono text-[var(--text-muted)] mr-1 shrink-0">
                    Quick Solvers:
                  </span>
                  {[
                    { label: 'Art. 72 (Pardons)', val: '72' },
                    { label: 'Art. 76 (A-G)', val: '76' },
                    { label: 'Art. 110 (Money Bill)', val: '110' },
                    { label: 'Art. 123 (Ordinances)', val: '123' },
                    { label: 'Art. 165 (Advocate-Gen)', val: '165' },
                    { label: 'Art. 213 (Gov Ordinance)', val: '213' },
                    { label: 'Art. 352 (Emergency)', val: '352' }
                  ].map((preset) => (
                    <button
                      key={preset.val}
                      onClick={() => handleRunCalculation(preset.val)}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-mono font-semibold whitespace-nowrap transition-all btn-tactile ${
                        calcInput === preset.val
                          ? 'bg-[var(--accent)] text-[var(--bg-base)] font-bold'
                          : 'bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Solver Card Output */}
              {calcResult ? (
                <div className="p-4 sm:p-5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col gap-4 animate-fadeIn">
                  {/* Calculation Status Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-black bg-[var(--accent)]/15 border border-[var(--accent)]/30 text-[var(--accent)]">
                        {calcResult.rule}
                      </span>
                      <span className="text-sm font-mono font-bold text-[var(--text-primary)]">
                        {calcResult.mathCalculation}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--text-muted)] font-semibold">
                        {calcResult.direction === 'union-to-state'
                          ? 'Forward Conversion (+89/+90)'
                          : calcResult.direction === 'state-to-union'
                          ? 'Reverse Conversion (-89/-90)'
                          : calcResult.direction === 'emergency-triad'
                          ? 'Part XVIII Triad (+4)'
                          : calcResult.direction === 'writs-pair'
                          ? 'Writ Dual Track'
                          : 'Part III Sovereign Guarantee'}
                      </span>
                    </div>
                  </div>

                  {/* Conceptual & Differences */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-1">
                      <span className="font-mono font-bold uppercase text-[var(--accent)] flex items-center gap-1 text-[11px]">
                        <Sparkles className="w-3 h-3" />
                        Conceptual Bridge
                      </span>
                      <p className="text-[var(--text-primary)] leading-relaxed">
                        {calcResult.conceptualBridge}
                      </p>
                    </div>

                    {calcResult.statutoryDifference ? (
                      <div className="p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-1">
                        <span className="font-mono font-bold uppercase text-amber-400 flex items-center gap-1 text-[11px]">
                          <Scale className="w-3 h-3" />
                          Critical Statutory Divergence
                        </span>
                        <p className="text-[var(--text-secondary)] leading-relaxed">
                          {calcResult.statutoryDifference}
                        </p>
                      </div>
                    ) : (
                      <div className="p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-1">
                        <span className="font-mono font-bold uppercase text-emerald-400 flex items-center gap-1 text-[11px]">
                          <Award className="w-3 h-3" />
                          Doctrinal Status
                        </span>
                        <p className="text-[var(--text-secondary)] leading-relaxed">
                          {calcResult.landmarkCitation || 'Fundamental Constitutional Principle.'}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Examiner Trap */}
                  {calcResult.examinerTrap && (
                    <div className="p-3 rounded-xl bg-rose-500/5 border border-rose-500/20 text-xs space-y-0.5">
                      <span className="font-mono font-bold uppercase text-rose-400 flex items-center gap-1 text-[11px]">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        Examiner Trap / Pitfall
                      </span>
                      <p className="text-[var(--text-primary)] font-medium leading-relaxed">
                        {calcResult.examinerTrap}
                      </p>
                    </div>
                  )}

                  {/* Action Link to Bare Act */}
                  <div className="flex items-center justify-between pt-1 border-t border-[var(--border-subtle)]">
                    <span className="text-[11px] font-mono text-[var(--text-muted)]">
                      Explore statutory clauses & diffs in Bare Act:
                    </span>
                    <button
                      onClick={() => {
                        try {
                          localStorage.setItem('samvidhan_active_article', String(calcResult.bareActArticleNum));
                        } catch (e) {
                          // ignore
                        }
                        setActiveTab('articles-master');
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--accent)] text-[var(--bg-base)] font-mono text-xs font-bold shadow-sm hover:opacity-95 transition-all btn-tactile"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Read Art. {calcResult.bareActArticleNum} in Bare Act &rarr;</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-center text-xs font-mono text-[var(--text-muted)]">
                  Enter an article number from 1 to 395 to calculate its mathematical counterpart and statutory differences.
                </div>
              )}
            </div>
          </div>

          {/* Interactive Toolbar: Filter Pills, Search Bar & Expand/Collapse All */}
          <div className="p-3 sm:p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
              {(['all', '+89', '+90'] as const).map((r) => (
                <button
                  key={r}
                  onClick={() => setMathFilter(r)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all whitespace-nowrap btn-tactile ${
                    mathFilter === r
                      ? 'bg-[var(--accent)] text-[var(--bg-base)] shadow-sm'
                      : 'bg-[var(--bg-base)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                  }`}
                >
                  {r === 'all' ? `All Pairs (${MATH_FORMULA_PAIRS.length})` : `${r} Rule (${MATH_FORMULA_PAIRS.filter(p => p.rule === r).length})`}
                </button>
              ))}
            </div>

            {/* Search Input & Action Buttons */}
            <div className="flex flex-1 items-center gap-2 max-w-lg ml-auto">
              <div className="relative flex-1">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by article (e.g. 72, 123) or keyword..."
                  className="w-full pl-8 pr-12 py-1.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)]"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                  >
                    Clear
                  </button>
                )}
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={handleExpandAll}
                  className="px-2.5 py-1.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-[11px] font-mono font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all btn-tactile"
                  title="Expand all cards"
                >
                  Expand All
                </button>
                <button
                  onClick={handleCollapseAll}
                  className="px-2.5 py-1.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-[11px] font-mono font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all btn-tactile"
                  title="Collapse all cards"
                >
                  Collapse All
                </button>
              </div>
            </div>
          </div>

          {/* Inline Expandable Accordion List */}
          <div className="flex flex-col gap-3">
            {filteredPairs.length === 0 ? (
              <div className="p-8 text-center rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-muted)]">
                <Search className="w-8 h-8 mx-auto mb-2 opacity-40" />
                <p className="text-sm font-semibold">No formula pairs match "{searchQuery}"</p>
                <button
                  onClick={() => { setSearchQuery(''); setMathFilter('all'); }}
                  className="mt-3 text-xs text-[var(--accent)] hover:underline font-mono"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              filteredPairs.map((pair) => {
                const isExpanded = !!expandedPairIds[pair.id];
                return (
                  <div
                    key={pair.id}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isExpanded
                        ? 'bg-[var(--bg-surface)] border-[var(--accent)]/60 shadow-md ring-1 ring-[var(--accent)]/20'
                        : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                    }`}
                  >
                    {/* Accordion Header (Click anywhere to expand/collapse) */}
                    <button
                      type="button"
                      onClick={() => togglePairExpand(pair.id)}
                      className="w-full p-4 sm:p-5 flex items-center justify-between gap-3 text-left transition-colors hover:bg-[var(--bg-surface-elevated)]/50 focus:outline-none"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 flex-1 min-w-0">
                        {/* Math Formula Badge */}
                        <div className="flex items-center gap-2 shrink-0">
                          <span
                            className={`px-2.5 py-1 rounded-lg text-xs font-mono font-black ${
                              pair.rule === '+89'
                                ? 'bg-amber-500/15 border border-amber-500/30 text-amber-400'
                                : 'bg-sky-500/15 border border-sky-500/30 text-sky-400'
                            }`}
                          >
                            {pair.rule}
                          </span>
                          <span className="text-sm font-mono font-bold text-[var(--accent)]">
                            Art. {pair.unionArticle}
                          </span>
                          <span className="text-xs text-[var(--text-muted)] font-mono font-bold">&rarr;</span>
                          <span className="text-sm font-mono font-bold text-emerald-400">
                            Art. {pair.stateArticle}
                          </span>
                        </div>

                        {/* Title and Short Overview */}
                        <div className="min-w-0 flex-1">
                          <h3 className="text-sm font-bold text-[var(--text-primary)] truncate">
                            {pair.unionTitle}
                          </h3>
                          <p className="text-xs text-[var(--text-secondary)] truncate mt-0.5">
                            {pair.conceptualBridge}
                          </p>
                        </div>
                      </div>

                      {/* Animated Chevron Indicator */}
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="hidden sm:inline-block text-[11px] font-mono text-[var(--text-muted)]">
                          {isExpanded ? 'Hide Details' : 'View Breakdown'}
                        </span>
                        <div
                          className={`w-7 h-7 rounded-xl flex items-center justify-center transition-transform duration-200 ${
                            isExpanded
                              ? 'bg-[var(--accent)] text-[var(--bg-base)] rotate-180'
                              : 'bg-[var(--bg-base)] text-[var(--text-muted)] border border-[var(--border-subtle)]'
                          }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </button>

                    {/* Accordion Expanded Body */}
                    {isExpanded && (
                      <div className="px-4 pb-5 sm:px-6 sm:pb-6 pt-1 border-t border-[var(--border-subtle)] flex flex-col gap-4 animate-fadeIn">
                        {/* Visual Mathematical Bridge */}
                        <div className="mt-2 grid grid-cols-1 md:grid-cols-11 items-center gap-3 p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
                          {/* Union Card */}
                          <div className="md:col-span-5 p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col justify-between">
                            <div>
                              <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--text-muted)]">
                                Union Government
                              </span>
                              <div className="text-2xl font-extrabold font-mono text-[var(--accent)] mt-1">
                                Article {pair.unionArticle}
                              </div>
                              <div className="text-xs font-bold text-[var(--text-primary)] mt-1">
                                {pair.unionTitle}
                              </div>
                            </div>
                          </div>

                          {/* Math Operator Indicator */}
                          <div className="md:col-span-1 flex flex-col items-center justify-center my-1 md:my-0">
                            <span className="w-9 h-9 rounded-full bg-[var(--accent)] text-[var(--bg-base)] font-mono font-extrabold text-sm flex items-center justify-center shadow-md">
                              {pair.rule}
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
                                Article {pair.stateArticle}
                              </div>
                              <div className="text-xs font-bold text-[var(--text-primary)] mt-1">
                                {pair.stateTitle}
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
                            {pair.conceptualBridge}
                          </p>
                        </div>

                        {/* Critical Statutory Divergence */}
                        <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1.5">
                          <div className="text-xs font-mono font-bold uppercase text-amber-400 flex items-center gap-1.5">
                            <Scale className="w-3.5 h-3.5" />
                            Critical Statutory Divergence
                          </div>
                          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                            {pair.statutoryDifference}
                          </p>
                        </div>

                        {/* Examiner Trap */}
                        <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20 space-y-1.5">
                          <div className="text-xs font-mono font-bold uppercase text-rose-400 flex items-center gap-1.5">
                            <AlertTriangle className="w-3.5 h-3.5" />
                            Examiner Trap / Pitfall
                          </div>
                          <p className="text-xs text-[var(--text-primary)] font-medium leading-relaxed">
                            {pair.examinerTrap}
                          </p>
                        </div>

                        {/* Benchmark Precedent */}
                        <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex items-start gap-2.5">
                          <Award className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <div className="text-xs">
                            <span className="font-bold text-[var(--text-primary)]">Benchmark Precedent: </span>
                            <span className="text-[var(--text-secondary)]">{pair.landmarkCitation}</span>
                          </div>
                        </div>

                        {/* Bare Act Explorer Deep-Links */}
                        <div className="pt-2 flex flex-wrap items-center gap-2 border-t border-[var(--border-subtle)]">
                          <span className="text-[11px] font-mono text-[var(--text-muted)] mr-1">
                            Bare Act Explorer:
                          </span>
                          <button
                            type="button"
                            onClick={() => {
                              try {
                                localStorage.setItem('samvidhan_active_article', String(pair.unionArticle));
                              } catch (e) {
                                // ignore
                              }
                              setActiveTab('articles-master');
                            }}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-[var(--accent)] text-xs font-mono font-bold text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all btn-tactile"
                          >
                            <BookOpen className="w-3.5 h-3.5" />
                            Read Art. {pair.unionArticle} (Union) &rarr;
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              try {
                                localStorage.setItem('samvidhan_active_article', String(pair.stateArticle));
                              } catch (e) {
                                // ignore
                              }
                              setActiveTab('articles-master');
                            }}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-emerald-500/50 text-xs font-mono font-bold text-emerald-400 hover:bg-emerald-500/10 transition-all btn-tactile"
                          >
                            <BookOpen className="w-3.5 h-3.5" />
                            Read Art. {pair.stateArticle} (State) &rarr;
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB: THE CONSTITUTIONAL MAJORITY MATRIX & LEGISLATIVE SIMULATOR
          ========================================================================= */}
      {activeTabMode === 'majorities' && (
        <div className="flex flex-col gap-6 animate-fadeIn">
          {/* Concept Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <Scale className="w-4 h-4" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">
                  The Constitutional Voting Matrix
                </span>
              </div>
              <h2 className="text-base font-extrabold text-[var(--text-primary)]">
                The 4 Constitutional Majority Types Decoded
              </h2>
              <p className="text-xs text-[var(--text-secondary)] mt-1 max-w-2xl leading-relaxed">
                Simple vs Absolute vs Effective vs Special Majorities (Types 1, 2, and 3). Eliminate the most common confusion in UPSC & Judicial Services exams with mathematical precision.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 self-start sm:self-center shrink-0 font-mono text-[11px] font-bold">
              <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                Simple (&gt;50% P&V)
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">
                Effective (Seats - Vacancies)
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)]">
                Art. 368 (Type 2)
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400">
                Art. 61 (Type 3)
              </span>
            </div>
          </div>

          {/* =========================================================================
              INTERACTIVE LEGISLATIVE CHAMBER SIMULATOR
              ========================================================================= */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Sliders className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-[var(--text-primary)]">
                    Live Parliamentary Chamber Simulator
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Adjust seat numbers, vacancies, and attendance to compute the exact passing thresholds across all majority categories in real-time.
                  </p>
                </div>
              </div>

              {/* Chamber Presets */}
              <div className="flex items-center gap-1.5 self-start sm:self-center">
                <span className="text-[11px] font-mono text-[var(--text-muted)] mr-1">Chamber:</span>
                {[
                  { id: 'lok-sabha', label: 'Lok Sabha (543)' },
                  { id: 'rajya-sabha', label: 'Rajya Sabha (245)' },
                  { id: 'state-assembly', label: 'State Assembly (250)' }
                ].map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handleApplyPreset(p.id as any)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all btn-tactile ${
                      chamberPreset === p.id
                        ? 'bg-[var(--accent)] text-[var(--bg-base)] shadow-sm'
                        : 'bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Chamber Parameter Sliders & Number Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
              {/* Total Seats */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="font-bold text-[var(--text-secondary)]">Sanctioned Seats</span>
                  <span className="text-[var(--accent)] font-extrabold">{chamberTotalSeats}</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="600"
                  value={chamberTotalSeats}
                  onChange={(e) => setChamberTotalSeats(parseInt(e.target.value, 10))}
                  className="w-full accent-[var(--accent)] cursor-pointer"
                />
                <span className="text-[10px] text-[var(--text-muted)] font-mono">Entire constitutional strength</span>
              </div>

              {/* Vacancies */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="font-bold text-[var(--text-secondary)]">Vacant Seats</span>
                  <span className="text-amber-400 font-extrabold">{chamberVacancies}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={chamberVacancies}
                  onChange={(e) => setChamberVacancies(parseInt(e.target.value, 10))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
                <span className="text-[10px] text-[var(--text-muted)] font-mono">Deaths, resignations, disqualifications</span>
              </div>

              {/* Present Members */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="font-bold text-[var(--text-secondary)]">Members Present</span>
                  <span className="text-emerald-400 font-extrabold">{chamberPresent}</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max={chamberTotalSeats}
                  value={Math.min(chamberPresent, chamberTotalSeats)}
                  onChange={(e) => {
                    const p = parseInt(e.target.value, 10);
                    setChamberPresent(p);
                    if (chamberVoting > p) setChamberVoting(p);
                  }}
                  className="w-full accent-emerald-400 cursor-pointer"
                />
                <span className="text-[10px] text-[var(--text-muted)] font-mono">Quorum threshold: {chamberCalculations.quorum}</span>
              </div>

              {/* Members Voting */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="font-bold text-[var(--text-secondary)]">Members Voting</span>
                  <span className="text-sky-400 font-extrabold">{chamberVoting}</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max={chamberPresent}
                  value={Math.min(chamberVoting, chamberPresent)}
                  onChange={(e) => setChamberVoting(parseInt(e.target.value, 10))}
                  className="w-full accent-sky-400 cursor-pointer"
                />
                <span className="text-[10px] text-[var(--text-muted)] font-mono">Excludes abstaining members</span>
              </div>
            </div>

            {/* Quorum Warning / Sentinel Banner */}
            <div className={`p-3 rounded-xl border flex items-center justify-between text-xs font-mono ${
              chamberCalculations.hasQuorum
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
            }`}>
              <div className="flex items-center gap-2">
                {chamberCalculations.hasQuorum ? (
                  <CheckCircle2 className="w-4 h-4" />
                ) : (
                  <AlertTriangle className="w-4 h-4" />
                )}
                <span>
                  <strong>Article 100(3) Quorum:</strong> Minimum 1/10th of total membership ({chamberCalculations.quorum} members) required. Present: {chamberPresent}.
                </span>
              </div>
              <span className="font-bold px-2 py-0.5 rounded uppercase text-[10px] bg-[var(--bg-base)]">
                {chamberCalculations.hasQuorum ? 'Quorum Satisfied' : 'House Adjourned'}
              </span>
            </div>

            {/* Live Computed Passing Thresholds Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {/* Simple Majority */}
              <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-emerald-500/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono font-bold uppercase text-emerald-400">
                      Ordinary Business
                    </span>
                    <span className="text-xs font-mono font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      &gt; 50% P&V
                    </span>
                  </div>
                  <h4 className="text-xs font-extrabold text-[var(--text-primary)]">
                    Simple Majority
                  </h4>
                  <p className="text-[11px] text-[var(--text-muted)] mt-0.5">
                    Ordinary Bills, Money Bills, States Reorg (Art 3), President's Rule (Art 356).
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-[var(--border-subtle)] flex items-baseline justify-between font-mono">
                  <span className="text-xs text-[var(--text-secondary)]">Votes Needed:</span>
                  <span className="text-xl font-extrabold text-emerald-400">
                    {chamberCalculations.simpleMajority}
                  </span>
                </div>
              </div>

              {/* Effective Majority */}
              <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-amber-500/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono font-bold uppercase text-amber-400">
                      Presiding Officers Removal
                    </span>
                    <span className="text-xs font-mono font-black text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                      &gt; 50% Effective
                    </span>
                  </div>
                  <h4 className="text-xs font-extrabold text-[var(--text-primary)]">
                    Effective Majority
                  </h4>
                  <p className="text-[11px] text-[var(--text-muted)] mt-0.5">
                    Removal of VP in Rajya Sabha (Art 67(b)), Lok Sabha Speaker (Art 94(c)).
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-[var(--border-subtle)] flex items-baseline justify-between font-mono">
                  <span className="text-xs text-[var(--text-secondary)]">
                    Seats ({chamberCalculations.effectiveStrength}) &divide; 2:
                  </span>
                  <span className="text-xl font-extrabold text-amber-400">
                    {chamberCalculations.effectiveMajority}
                  </span>
                </div>
              </div>

              {/* Absolute Majority */}
              <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-sky-500/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono font-bold uppercase text-sky-400">
                      Floor Test Prerequisite
                    </span>
                    <span className="text-xs font-mono font-black text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded">
                      &gt; 50% Total
                    </span>
                  </div>
                  <h4 className="text-xs font-extrabold text-[var(--text-primary)]">
                    Absolute Majority
                  </h4>
                  <p className="text-[11px] text-[var(--text-muted)] mt-0.5">
                    Government formation confidence threshold; prerequisite in Art 368.
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-[var(--border-subtle)] flex items-baseline justify-between font-mono">
                  <span className="text-xs text-[var(--text-secondary)]">
                    Total ({chamberTotalSeats}) &divide; 2:
                  </span>
                  <span className="text-xl font-extrabold text-sky-400">
                    {chamberCalculations.absoluteMajority}
                  </span>
                </div>
              </div>

              {/* Special Type 1 */}
              <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-purple-500/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono font-bold uppercase text-purple-400">
                      Rajya Sabha Exclusive
                    </span>
                    <span className="text-xs font-mono font-black text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">
                      &ge; 2/3rd P&V
                    </span>
                  </div>
                  <h4 className="text-xs font-extrabold text-[var(--text-primary)]">
                    Special Majority (Type 1)
                  </h4>
                  <p className="text-[11px] text-[var(--text-muted)] mt-0.5">
                    Art. 249 (Legislation on State List) & Art. 312 (New All-India Services).
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-[var(--border-subtle)] flex items-baseline justify-between font-mono">
                  <span className="text-xs text-[var(--text-secondary)]">
                    2/3 &times; Voting ({chamberVoting}):
                  </span>
                  <span className="text-xl font-extrabold text-purple-400">
                    {chamberCalculations.specialType1}
                  </span>
                </div>
              </div>

              {/* Special Type 2 */}
              <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--accent)]/50 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono font-bold uppercase text-[var(--accent)]">
                      Art. 368 & Judges Removal
                    </span>
                    <span className="text-xs font-mono font-black text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-0.5 rounded">
                      Dual Threshold
                    </span>
                  </div>
                  <h4 className="text-xs font-extrabold text-[var(--text-primary)]">
                    Special Majority (Type 2)
                  </h4>
                  <p className="text-[11px] text-[var(--text-muted)] mt-0.5">
                    Constitutional Amendments (Art 368), SC/HC Judges (Art 124(4)), National Emergency.
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-[var(--border-subtle)] flex items-baseline justify-between font-mono">
                  <span className="text-xs text-[var(--text-secondary)]">
                    Max(&ge;{chamberCalculations.absoluteMajority}, &ge;{chamberCalculations.specialType1}):
                  </span>
                  <span className="text-xl font-extrabold text-[var(--accent)]">
                    {chamberCalculations.specialType2}
                  </span>
                </div>
              </div>

              {/* Special Type 3 */}
              <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-rose-500/50 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono font-bold uppercase text-rose-400">
                      Strictest in Constitution
                    </span>
                    <span className="text-xs font-mono font-black text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded">
                      &ge; 2/3rd TOTAL
                    </span>
                  </div>
                  <h4 className="text-xs font-extrabold text-[var(--text-primary)]">
                    Special Majority (Type 3 - Art. 61)
                  </h4>
                  <p className="text-[11px] text-[var(--text-muted)] mt-0.5">
                    Impeachment of the President of India (Art 61). Absent members count as No.
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-[var(--border-subtle)] flex items-baseline justify-between font-mono">
                  <span className="text-xs text-[var(--text-secondary)]">
                    2/3 &times; Total ({chamberTotalSeats}):
                  </span>
                  <span className="text-xl font-extrabold text-rose-400">
                    {chamberCalculations.specialType3}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
              THE 6 CONSTITUTIONAL MAJORITY TIERS BREAKDOWN
              ========================================================================= */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[var(--accent)]" />
                <h3 className="text-sm font-extrabold text-[var(--text-primary)]">
                  Complete Juristic Analysis of All 6 Majority Tiers
                </h3>
              </div>

              {/* Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                {[
                  { id: 'all', label: 'All 6 Tiers' },
                  { id: 'ordinary', label: 'Ordinary Tiers (3)' },
                  { id: 'special', label: 'Special Majorities (3)' }
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setSelectedMajorityFilter(f.id as any)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all btn-tactile ${
                      selectedMajorityFilter === f.id
                        ? 'bg-[var(--accent)] text-[var(--bg-base)] shadow-sm'
                        : 'bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tiers List */}
            <div className="flex flex-col gap-4">
              {CONSTITUTIONAL_MAJORITY_DATA.filter((item) => {
                if (selectedMajorityFilter === 'ordinary') return item.category === 'Ordinary';
                if (selectedMajorityFilter === 'special') return item.category === 'Special Parliamentary' || item.category === 'Impeachment';
                return true;
              }).map((tier) => (
                <div
                  key={tier.id}
                  className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm flex flex-col gap-4"
                >
                  {/* Tier Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
                    <div className="flex items-center gap-2.5">
                      <span className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold border ${tier.badgeColor}`}>
                        {tier.shortFormula}
                      </span>
                      <h4 className="text-base font-extrabold text-[var(--text-primary)]">
                        {tier.name}
                      </h4>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-[var(--text-muted)] bg-[var(--bg-base)] px-2.5 py-1 rounded-lg border border-[var(--border-subtle)]">
                        Formula: <strong>{tier.fractionFormula}</strong>
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {tier.scopeDescription}
                  </p>

                  {/* Provisions Table */}
                  <div className="overflow-x-auto rounded-xl border border-[var(--border-subtle)]">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-[var(--bg-base)] font-mono text-[10px] uppercase text-[var(--text-muted)] border-b border-[var(--border-subtle)]">
                        <tr>
                          <th className="p-2.5 font-bold">Constitutional Provision</th>
                          <th className="p-2.5 font-bold">Article Anchor</th>
                          <th className="p-2.5 font-bold">Procedural Rule & Nuance</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[var(--border-subtle)]">
                        {tier.keyUseCases.map((uc, uIdx) => (
                          <tr key={uIdx} className="hover:bg-[var(--bg-surface-elevated)]/40 transition-colors">
                            <td className="p-2.5 font-bold text-[var(--text-primary)] whitespace-nowrap">
                              {uc.provision}
                            </td>
                            <td className="p-2.5 font-mono text-emerald-400 font-bold whitespace-nowrap">
                              {uc.article}
                            </td>
                            <td className="p-2.5 text-[var(--text-secondary)]">
                              {uc.procedureNotes}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Examiner Traps */}
                  {tier.examinerTraps.length > 0 && (
                    <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20 flex flex-col gap-1.5 text-xs">
                      <span className="font-mono font-bold uppercase text-rose-400 flex items-center gap-1.5 text-[11px]">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        Examiner Traps & Pitfalls ({tier.examinerTraps.length}):
                      </span>
                      <ul className="list-disc list-inside space-y-1 text-[var(--text-primary)]">
                        {tier.examinerTraps.map((trap, tIdx) => (
                          <li key={tIdx} className="leading-relaxed">
                            {trap}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Benchmark Precedent */}
                  {tier.benchmarkCases.length > 0 && (
                    <div className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex items-start gap-2 text-xs">
                      <Award className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-[var(--text-primary)]">Benchmark Decisions: </span>
                        <span className="text-[var(--text-secondary)]">
                          {tier.benchmarkCases.join(' • ')}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
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
