import React, { useState } from 'react';
import {
  Vote,
  Scale,
  AlertTriangle,
  Award,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Calculator,
  Search,
  Filter,
  Flame,
  Check,
  Zap,
  ArrowRight
} from 'lucide-react';
import {
  MAJORITY_TYPES_DATA,
  CONSTITUTIONAL_ACTIONS_CATALOG,
  MAJORITY_DRILL_QUESTIONS,
  type MajorityTypeDetail,
  type ConstitutionalActionItem
} from '../../data/majoritiesData';
import { useTheme } from '../../context/ThemeContext';

export const MajoritiesLabView: React.FC = () => {
  const { setActiveTab } = useTheme();

  // Mode: 'types' | 'matrix' | 'calculator' | 'drill'
  const [activeMode, setActiveMode] = useState<'types' | 'matrix' | 'calculator' | 'drill'>('types');
  const [selectedMajorityId, setSelectedMajorityId] = useState<string>('effective');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [actionSearchTerm, setActionSearchTerm] = useState<string>('');

  // Calculator State
  const [selectedHouse, setSelectedHouse] = useState<'LS' | 'RS'>('LS');
  const [totalSeats, setTotalSeats] = useState<number>(543);
  const [vacancies, setVacancies] = useState<number>(5);
  const [presentAndVoting, setPresentAndVoting] = useState<number>(360);

  // Drill State
  const [currentDrillIndex, setCurrentDrillIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const selectedMajorityDetail: MajorityTypeDetail =
    MAJORITY_TYPES_DATA.find((m) => m.id === selectedMajorityId) || MAJORITY_TYPES_DATA[0];

  // Filtered Actions
  const filteredActions = CONSTITUTIONAL_ACTIONS_CATALOG.filter((act) => {
    const matchesCat = selectedCategory === 'All' || act.category === selectedCategory;
    const matchesSearch =
      act.actionTitle.toLowerCase().includes(actionSearchTerm.toLowerCase()) ||
      act.articlesInvolved.some((a) => a.toLowerCase().includes(actionSearchTerm.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  // Calculator Calculations
  const effectiveStrength = totalSeats - vacancies;
  const simpleReq = Math.floor(presentAndVoting / 2) + 1;
  const effectiveReq = Math.floor(effectiveStrength / 2) + 1;
  const absoluteReq = Math.floor(totalSeats / 2) + 1;
  const specialType1Req = Math.ceil((presentAndVoting * 2) / 3);
  const specialType2Req = Math.max(absoluteReq, Math.ceil((presentAndVoting * 2) / 3));
  const specialType3Req = Math.ceil((totalSeats * 2) / 3);

  const handleHouseChange = (house: 'LS' | 'RS') => {
    setSelectedHouse(house);
    if (house === 'LS') {
      setTotalSeats(543);
      setVacancies(5);
      setPresentAndVoting(380);
    } else {
      setTotalSeats(245);
      setVacancies(3);
      setPresentAndVoting(180);
    }
  };

  const currentQuestion = MAJORITY_DRILL_QUESTIONS[currentDrillIndex];

  const handleSelectOption = (opt: string) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(opt);
    setIsAnswerSubmitted(true);
    if (opt === currentQuestion.correctAnswer) {
      setScore((s) => s + 1);
    }
  };

  const handleNextDrill = () => {
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    if (currentDrillIndex < MAJORITY_DRILL_QUESTIONS.length - 1) {
      setCurrentDrillIndex((i) => i + 1);
    } else {
      setCurrentDrillIndex(0);
      setScore(0);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300 pb-16">
      {/* HEADER BANNER */}
      <div className="relative overflow-hidden rounded-2xl border border-rose-500/30 bg-gradient-to-br from-rose-950/20 via-neutral-900/40 to-neutral-950 p-6 sm:p-8 backdrop-blur-md">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                <Vote className="w-3.5 h-3.5" /> High-Yield Voting & Quorum Engine
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-neutral-800 text-neutral-400 font-mono">
                Art. 100(3) • Art. 368 • Art. 61
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-100 flex items-center gap-3">
              Constitutional Majorities Master Lab
            </h1>
            <p className="mt-2 text-sm text-neutral-400 max-w-2xl leading-relaxed">
              Every type of parliamentary majority (Simple, Effective, Absolute, Special Types 1, 2, 3, and Federal Ratification), quorum rules, live math simulator, and negative marking trap alerts.
            </p>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('articles')}
              className="flex-1 sm:flex-none px-4 py-2 text-xs font-medium rounded-lg border border-neutral-700 bg-neutral-800/80 hover:bg-neutral-700/80 text-neutral-200 transition-colors flex items-center justify-center gap-1.5"
            >
              Bare Act Explorer →
            </button>
          </div>
        </div>

        {/* PRIMARY SUBVIEW TABS */}
        <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-1 border-b border-neutral-800">
          <button
            onClick={() => setActiveMode('types')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all flex items-center gap-2 shrink-0 ${
              activeMode === 'types'
                ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/25'
                : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/60'
            }`}
          >
            <Vote className="w-3.5 h-3.5" /> All 7 Majorities Breakdown
          </button>
          <button
            onClick={() => setActiveMode('matrix')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all flex items-center gap-2 shrink-0 ${
              activeMode === 'matrix'
                ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/25'
                : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/60'
            }`}
          >
            <Scale className="w-3.5 h-3.5" /> Constitutional Action Matrix (11 Actions)
          </button>
          <button
            onClick={() => setActiveMode('calculator')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all flex items-center gap-2 shrink-0 ${
              activeMode === 'calculator'
                ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/25'
                : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/60'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" /> Interactive Threshold Calculator
          </button>
          <button
            onClick={() => setActiveMode('drill')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all flex items-center gap-2 shrink-0 ${
              activeMode === 'drill'
                ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/25'
                : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/60'
            }`}
          >
            <Zap className="w-3.5 h-3.5" /> Majorities Speed Drill ({MAJORITY_DRILL_QUESTIONS.length})
          </button>
        </div>
      </div>

      {/* ============================================================== */}
      {/* MODE 1: ALL 7 MAJORITIES BREAKDOWN */}
      {/* ============================================================== */}
      {activeMode === 'types' && (
        <div className="space-y-6">
          {/* HORIZONTAL MAJORITY SELECTOR */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {MAJORITY_TYPES_DATA.map((maj) => (
              <button
                key={maj.id}
                onClick={() => setSelectedMajorityId(maj.id)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedMajorityId === maj.id
                    ? 'border-rose-500 bg-rose-950/30 text-rose-200 shadow-md ring-1 ring-rose-500/50'
                    : 'border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800 text-neutral-400'
                }`}
              >
                <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">
                  {maj.difficultyRating === 'Ultra-Trap' ? (
                    <span className="text-amber-400 font-bold flex items-center gap-1">
                      <Flame className="w-2.5 h-2.5" /> High Trap
                    </span>
                  ) : maj.difficultyRating}
                </div>
                <div className="text-xs font-bold mt-1 line-clamp-2">{maj.name}</div>
              </button>
            ))}
          </div>

          {/* DETAILED ACTIVE MAJORITY DOSSIER */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 p-6 sm:p-8 backdrop-blur-md">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-neutral-800 pb-4">
              <div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  {selectedMajorityDetail.hindiName}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-100 mt-2">
                  {selectedMajorityDetail.name}
                </h2>
                <p className="text-sm text-neutral-400 mt-1">{selectedMajorityDetail.description}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-neutral-800 border border-neutral-700 text-neutral-300">
                  Formula: {selectedMajorityDetail.formula}
                </span>
              </div>
            </div>

            {/* FORMULA & QUORUM BOX */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 rounded-xl border border-rose-500/20 bg-rose-950/10">
                <div className="text-xs font-semibold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Calculator className="w-4 h-4" /> Voting Formula & Math
                </div>
                <div className="text-sm font-mono text-neutral-200 mt-2 font-medium">
                  {selectedMajorityDetail.formula}
                </div>
                <div className="text-xs text-neutral-400 mt-2 leading-relaxed bg-neutral-900/80 p-2.5 rounded-lg border border-neutral-800">
                  <strong>Practical Example:</strong> {selectedMajorityDetail.exampleMath}
                </div>
              </div>

              <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-950/60">
                <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Scale className="w-4 h-4 text-neutral-300" /> Quorum & Counting Rules
                </div>
                <div className="text-sm text-neutral-300 mt-2 leading-relaxed">
                  {selectedMajorityDetail.quorumRule}
                </div>
              </div>
            </div>

            {/* WHERE IT IS APPLIED */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-300 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Constitutional Actions Requiring This Majority
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedMajorityDetail.appliedActions.map((action, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg border border-neutral-800/80 bg-neutral-950/40 text-xs text-neutral-200 flex items-start gap-2"
                  >
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{action}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* EXAMINER NEGATIVE MARKING TRAPS */}
            <div className="mt-6 p-4 rounded-xl border border-amber-500/30 bg-amber-950/20">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400" /> Primary Examiner Negative Marking Traps
              </div>
              <ul className="mt-3 space-y-2 text-xs text-neutral-300">
                {selectedMajorityDetail.examinerTraps.map((trap, idx) => (
                  <li key={idx} className="flex items-start gap-2 leading-relaxed">
                    <span className="text-amber-400 font-bold shrink-0">•</span>
                    <span>{trap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MODE 2: CONSTITUTIONAL ACTION MATRIX & FINDER */}
      {/* ============================================================== */}
      {activeMode === 'matrix' && (
        <div className="space-y-6">
          {/* SEARCH & CATEGORY BAR */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3 top-3 text-neutral-500" />
              <input
                type="text"
                placeholder="Search action or article..."
                value={actionSearchTerm}
                onChange={(e) => setActionSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-neutral-800 bg-neutral-900 text-xs text-neutral-200 focus:outline-none focus:border-rose-500"
              />
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1">
              <span className="text-xs text-neutral-500 flex items-center gap-1 mr-1">
                <Filter className="w-3 h-3" /> Filter:
              </span>
              {['All', 'Executive', 'Legislature', 'Judiciary', 'Emergency', 'Federal & Amendments'].map(
                (cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors shrink-0 ${
                      selectedCategory === cat
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                        : 'bg-neutral-800 text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    {cat}
                  </button>
                )
              )}
            </div>
          </div>

          {/* ACTIONS CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredActions.map((action) => {
              const matchedMaj = MAJORITY_TYPES_DATA.find((m) => m.id === action.majorityRequiredId);
              return (
                <div
                  key={action.id}
                  className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-5 hover:border-neutral-700 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-400">
                        {action.category}
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
                        {action.housesInvolved}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-neutral-100">{action.actionTitle}</h3>

                    <div className="flex flex-wrap gap-1 mt-2">
                      {action.articlesInvolved.map((art, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-950 text-neutral-400 border border-neutral-800"
                        >
                          {art}
                        </span>
                      ))}
                    </div>

                    {/* REQUIRED MAJORITY BADGE */}
                    <div className="mt-3 p-2.5 rounded-lg border border-neutral-800 bg-neutral-950/80">
                      <div className="text-[10px] uppercase font-bold tracking-wider text-rose-400">
                        Required Majority:
                      </div>
                      <div className="text-xs font-bold text-neutral-200 mt-0.5">
                        {matchedMaj ? matchedMaj.name : action.majorityRequiredId}
                      </div>
                      <div className="text-[10px] text-neutral-400 font-mono mt-1">
                        {matchedMaj?.formula}
                      </div>
                    </div>

                    <p className="text-xs text-neutral-400 mt-3 leading-relaxed">{action.keyNuance}</p>
                  </div>

                  {/* EXAMINER TRAP CALLOUT */}
                  <div className="mt-4 pt-3 border-t border-neutral-800/80">
                    <div className="text-[10px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3 text-amber-400" /> Examiner Trap:
                    </div>
                    <div className="text-[11px] text-amber-200/90 mt-1 leading-snug">
                      {action.examinerTrap}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MODE 3: LIVE INTERACTIVE THRESHOLD CALCULATOR */}
      {/* ============================================================== */}
      {activeMode === 'calculator' && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 p-6 sm:p-8 backdrop-blur-md">
            <div className="max-w-xl">
              <div className="text-xs font-mono uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                <Calculator className="w-4 h-4" /> Real-Time Mathematical Threshold Simulator
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-100 mt-1">
                Parliamentary Majority Math Bench
              </h2>
              <p className="text-xs text-neutral-400 mt-1">
                Enter simulated attendance, vacancies, and voting numbers to instantly compute the exact cutoff required for every constitutional majority type.
              </p>
            </div>

            {/* INPUTS ROW */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-6 p-4 rounded-xl border border-neutral-800 bg-neutral-950/60">
              <div>
                <label className="text-xs font-semibold text-neutral-400 block mb-1.5">Select House:</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleHouseChange('LS')}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      selectedHouse === 'LS'
                        ? 'bg-rose-500 text-white'
                        : 'bg-neutral-800 text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    Lok Sabha (543)
                  </button>
                  <button
                    onClick={() => handleHouseChange('RS')}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      selectedHouse === 'RS'
                        ? 'bg-rose-500 text-white'
                        : 'bg-neutral-800 text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    Rajya Sabha (245)
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-neutral-400 block mb-1.5">
                  Total Sanctioned Seats:
                </label>
                <input
                  type="number"
                  value={totalSeats}
                  onChange={(e) => setTotalSeats(Number(e.target.value))}
                  className="w-full px-3 py-1.5 rounded-lg border border-neutral-800 bg-neutral-900 text-xs font-mono text-neutral-100 focus:outline-none focus:border-rose-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-neutral-400 block mb-1.5">
                  Vacant Seats (Deaths/Resignations):
                </label>
                <input
                  type="number"
                  value={vacancies}
                  onChange={(e) => setVacancies(Number(e.target.value))}
                  className="w-full px-3 py-1.5 rounded-lg border border-neutral-800 bg-neutral-900 text-xs font-mono text-neutral-100 focus:outline-none focus:border-rose-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-neutral-400 block mb-1.5">
                  Members Present & Voting:
                </label>
                <input
                  type="number"
                  value={presentAndVoting}
                  onChange={(e) => setPresentAndVoting(Number(e.target.value))}
                  className="w-full px-3 py-1.5 rounded-lg border border-neutral-800 bg-neutral-900 text-xs font-mono text-neutral-100 focus:outline-none focus:border-rose-500"
                />
              </div>
            </div>

            {/* LIVE COMPUTATION RESULTS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {/* Simple */}
              <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-950/40">
                <div className="text-xs text-neutral-400 font-medium">Simple Majority Cutoff</div>
                <div className="text-2xl font-bold font-mono text-neutral-100 mt-1">
                  {simpleReq} <span className="text-xs text-neutral-500 font-normal">votes needed</span>
                </div>
                <div className="text-[11px] text-neutral-500 mt-1 font-mono">
                  &gt; 50% of {presentAndVoting} voting
                </div>
              </div>

              {/* Effective */}
              <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-950/10">
                <div className="text-xs text-amber-400 font-medium flex items-center justify-between">
                  <span>Effective Majority Cutoff</span>
                  <span className="text-[10px] font-mono text-amber-500/80">Seats: {effectiveStrength}</span>
                </div>
                <div className="text-2xl font-bold font-mono text-amber-200 mt-1">
                  {effectiveReq} <span className="text-xs text-neutral-500 font-normal">votes needed</span>
                </div>
                <div className="text-[11px] text-neutral-400 mt-1 font-mono">
                  &gt; 50% of ({totalSeats} - {vacancies} vacancies)
                </div>
              </div>

              {/* Absolute */}
              <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-950/40">
                <div className="text-xs text-neutral-400 font-medium">Absolute Majority Cutoff</div>
                <div className="text-2xl font-bold font-mono text-neutral-100 mt-1">
                  {absoluteReq} <span className="text-xs text-neutral-500 font-normal">votes needed</span>
                </div>
                <div className="text-[11px] text-neutral-500 mt-1 font-mono">
                  &gt; 50% of total {totalSeats} seats
                </div>
              </div>

              {/* Special Type 1 */}
              <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-950/40">
                <div className="text-xs text-neutral-400 font-medium">Special Type 1 (Art 249/312)</div>
                <div className="text-2xl font-bold font-mono text-neutral-100 mt-1">
                  {specialType1Req} <span className="text-xs text-neutral-500 font-normal">votes needed</span>
                </div>
                <div className="text-[11px] text-neutral-500 mt-1 font-mono">
                  2/3rd of {presentAndVoting} present & voting
                </div>
              </div>

              {/* Special Type 2 */}
              <div className="p-4 rounded-xl border border-rose-500/30 bg-rose-950/20">
                <div className="text-xs text-rose-400 font-medium flex items-center justify-between">
                  <span>Special Type 2 (Art 368 / Judges)</span>
                  <span className="text-[10px] font-mono text-rose-500/80">Twin Test</span>
                </div>
                <div className="text-2xl font-bold font-mono text-rose-200 mt-1">
                  {specialType2Req} <span className="text-xs text-neutral-500 font-normal">votes needed</span>
                </div>
                <div className="text-[11px] text-neutral-300 mt-1 font-mono">
                  Max({absoluteReq} absolute floor, {specialType1Req} 2/3rd voting)
                </div>
              </div>

              {/* Special Type 3 */}
              <div className="p-4 rounded-xl border border-purple-500/30 bg-purple-950/20">
                <div className="text-xs text-purple-400 font-medium flex items-center justify-between">
                  <span>Special Type 3 (President Art 61)</span>
                  <span className="text-[10px] font-mono text-purple-400">Hardest</span>
                </div>
                <div className="text-2xl font-bold font-mono text-purple-200 mt-1">
                  {specialType3Req} <span className="text-xs text-neutral-500 font-normal">votes needed</span>
                </div>
                <div className="text-[11px] text-neutral-400 mt-1 font-mono">
                  2/3rd of TOTAL {totalSeats} seats
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MODE 4: MAJORITIES SPEED DRILL */}
      {/* ============================================================== */}
      {activeMode === 'drill' && (
        <div className="max-w-3xl mx-auto rounded-2xl border border-neutral-800 bg-neutral-900/80 p-6 sm:p-8 backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
            <div>
              <span className="text-xs font-mono text-rose-400 font-semibold uppercase tracking-wider">
                Question {currentDrillIndex + 1} of {MAJORITY_DRILL_QUESTIONS.length}
              </span>
              <h2 className="text-sm sm:text-base font-bold text-neutral-100 mt-1">
                Parliamentary Majorities Recall Drill
              </h2>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-xs font-mono text-neutral-300">
              <Award className="w-3.5 h-3.5 text-rose-400" /> Score: {score} / {MAJORITY_DRILL_QUESTIONS.length}
            </div>
          </div>

          <h3 className="text-base sm:text-lg font-medium text-neutral-100 leading-relaxed mb-6">
            {currentQuestion.question}
          </h3>

          {/* OPTIONS */}
          <div className="space-y-3">
            {currentQuestion.options.map((opt, idx) => {
              const isSelected = selectedAnswer === opt;
              const isCorrect = opt === currentQuestion.correctAnswer;

              let btnStyle =
                'border-neutral-800 bg-neutral-950/60 hover:bg-neutral-800/80 text-neutral-300';
              if (isAnswerSubmitted) {
                if (isCorrect) {
                  btnStyle = 'border-emerald-500/60 bg-emerald-950/30 text-emerald-200 font-semibold';
                } else if (isSelected && !isCorrect) {
                  btnStyle = 'border-rose-500/60 bg-rose-950/30 text-rose-200';
                } else {
                  btnStyle = 'border-neutral-800/40 bg-neutral-950/20 text-neutral-600 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(opt)}
                  disabled={isAnswerSubmitted}
                  className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-start gap-3 ${btnStyle}`}
                >
                  <span className="font-mono font-bold text-neutral-500 shrink-0">
                    {String.fromCharCode(65 + idx)}.
                  </span>
                  <span className="flex-1 leading-relaxed">{opt}</span>
                  {isAnswerSubmitted && isCorrect && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  )}
                  {isAnswerSubmitted && isSelected && !isCorrect && (
                    <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>

          {/* EXPLANATION & TRAP NOTE */}
          {isAnswerSubmitted && (
            <div className="mt-6 space-y-3 animate-in fade-in duration-200">
              <div
                className={`p-4 rounded-xl border text-xs leading-relaxed ${
                  selectedAnswer === currentQuestion.correctAnswer
                    ? 'border-emerald-500/30 bg-emerald-950/20 text-emerald-300'
                    : 'border-rose-500/30 bg-rose-950/20 text-rose-300'
                }`}
              >
                <div className="font-bold mb-1 flex items-center gap-1.5">
                  {selectedAnswer === currentQuestion.correctAnswer ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" /> CORRECT! (+2 Marks)
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 text-rose-400" /> INCORRECT (-0.66 Marks)
                    </>
                  )}
                </div>
                <p className="mt-2 text-neutral-300">
                  <strong>Official Key Explanation:</strong> {currentQuestion.explanation}
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-amber-500/30 bg-amber-950/20 text-xs text-amber-200 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong>Examiner Trap Alert:</strong> {currentQuestion.trapAlert}
                </div>
              </div>

              <button
                onClick={handleNextDrill}
                className="w-full mt-4 py-3 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-semibold text-xs tracking-wide uppercase transition-colors flex items-center justify-center gap-2 shadow-lg shadow-rose-500/20"
              >
                {currentDrillIndex < MAJORITY_DRILL_QUESTIONS.length - 1 ? (
                  <>
                    Next Drill Question <ArrowRight className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Restart Speed Drill <Zap className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
