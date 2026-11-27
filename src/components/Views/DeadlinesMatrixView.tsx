import React, { useState } from 'react';
import { SlidingSegmentedControl } from '../Common/EditorialMotionCards';
import {
  Clock,
  Calendar,
  AlertTriangle,
  Award,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Search,
  Filter,
  Flame,
  Zap,
  ArrowRight,
  Timer,
  Check
} from 'lucide-react';
import {
  CONSTITUTIONAL_DEADLINES_DATA,
  DEADLINES_DRILL_QUESTIONS,
  type ConstitutionalDeadline
} from '../../data/deadlinesData';
import { useTheme } from '../../context/ThemeContext';

export const DeadlinesMatrixView: React.FC = () => {
  const { setActiveTab } = useTheme();

  // Mode: 'cards' | 'table' | 'drill'
  const [activeMode, setActiveMode] = useState<'cards' | 'table' | 'drill'>('cards');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Drill State
  const [currentDrillIndex, setCurrentDrillIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  // Filtered Deadlines
  const filteredDeadlines = CONSTITUTIONAL_DEADLINES_DATA.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.durationCategory === selectedCategory;
    const matchesSearch =
      item.actionTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.durationLabel.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.constitutionalArticle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.statutoryDetail.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const currentQuestion = DEADLINES_DRILL_QUESTIONS[currentDrillIndex];

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
    if (currentDrillIndex < DEADLINES_DRILL_QUESTIONS.length - 1) {
      setCurrentDrillIndex((i) => i + 1);
    } else {
      setCurrentDrillIndex(0);
      setScore(0);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300 pb-16">
      {/* HEADER BANNER */}
      <div className="relative overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-950/20 via-neutral-900/40 to-neutral-950 p-6 sm:p-8 backdrop-blur-md">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <Clock className="w-3.5 h-3.5" /> Constitutional Deadlines & Time Limits
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-neutral-800 text-neutral-400 font-mono">
                14 Days • 1 Month • 6 Weeks • 6 Months
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-100 flex items-center gap-3">
              Time Limits & Numerical Deadlines Lab
            </h1>
            <p className="mt-2 text-sm text-neutral-400 max-w-2xl leading-relaxed">
              Every critical constitutional timeline, interval, emergency approval window, ordinance countdown, and tenure limit tested in UPSC Prelims and Judicial Services.
            </p>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('majorities-lab')}
              className="flex-1 sm:flex-none px-4 py-2 text-xs font-medium rounded-lg border border-neutral-700 bg-neutral-800/80 hover:bg-neutral-700/80 text-neutral-200 transition-colors flex items-center justify-center gap-1.5"
            >
              Majorities Lab →
            </button>
          </div>
        </div>

        {/* PRIMARY SUBVIEW TABS */}
        <div className="mt-6 overflow-x-auto pb-1">
          <SlidingSegmentedControl
            layoutGroupId="deadlines-view-mode"
            value={activeMode}
            onChange={setActiveMode}
            options={[
              { id: 'cards', label: 'Deadline Cards', count: CONSTITUTIONAL_DEADLINES_DATA.length },
              { id: 'table', label: 'Comparative Matrix' },
              { id: 'drill', label: 'Speed Drill', count: DEADLINES_DRILL_QUESTIONS.length },
            ]}
          />
        </div>
      </div>

      {/* ============================================================== */}
      {/* MODE 1: DEADLINE CARDS */}
      {/* ============================================================== */}
      {activeMode === 'cards' && (
        <div className="space-y-6">
          {/* SEARCH & CATEGORY BAR */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3 top-3 text-neutral-500" />
              <input
                type="text"
                placeholder="Search duration or article..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-neutral-800 bg-neutral-900 text-xs text-neutral-200 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1">
              <span className="text-xs text-neutral-500 flex items-center gap-1 mr-1">
                <Filter className="w-3 h-3" /> Filter:
              </span>
              {['All', 'Hours & Days', 'Weeks & Months', 'Years & Tenure'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold'
                      : 'bg-neutral-800 text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDeadlines.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-5 hover:border-neutral-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-bold font-mono bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {item.durationLabel}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-950 text-neutral-400 border border-neutral-800 font-semibold">
                      {item.constitutionalArticle}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-neutral-100 mt-2">{item.actionTitle}</h3>

                  <div className="text-[11px] font-mono text-neutral-500 mt-1">
                    Authority: {item.authorityInvolved}
                  </div>

                  <p className="text-xs text-neutral-300 mt-3 leading-relaxed bg-neutral-950/60 p-3 rounded-lg border border-neutral-800/80">
                    {item.statutoryDetail}
                  </p>
                </div>

                {/* EXAMINER TRAP CALLOUT */}
                <div className="mt-4 pt-3 border-t border-neutral-800/80">
                  <div className="text-[10px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3 text-amber-400" /> Examiner Trap:
                  </div>
                  <div className="text-[11px] text-amber-200/90 mt-1 leading-snug">
                    {item.examinerTrap}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MODE 2: COMPARATIVE TABLE */}
      {/* ============================================================== */}
      {activeMode === 'table' && (
        <div className="overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-900/80">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-neutral-800 bg-neutral-950 text-neutral-400 font-mono uppercase tracking-wider">
                <th className="p-3.5">Duration</th>
                <th className="p-3.5">Subject / Constitutional Event</th>
                <th className="p-3.5">Article</th>
                <th className="p-3.5">Statutory Rule</th>
                <th className="p-3.5">Top Prelims Trap</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/60 text-neutral-300">
              {CONSTITUTIONAL_DEADLINES_DATA.map((item) => (
                <tr key={item.id} className="hover:bg-neutral-800/30 transition-colors">
                  <td className="p-3.5 font-bold font-mono text-amber-400 whitespace-nowrap">
                    {item.durationLabel}
                  </td>
                  <td className="p-3.5 font-medium text-neutral-100">{item.actionTitle}</td>
                  <td className="p-3.5 font-mono text-neutral-400 whitespace-nowrap">
                    {item.constitutionalArticle}
                  </td>
                  <td className="p-3.5 text-neutral-400 leading-relaxed max-w-xs">{item.statutoryDetail}</td>
                  <td className="p-3.5 text-amber-200/90 text-[11px] leading-snug max-w-sm">
                    {item.examinerTrap}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ============================================================== */}
      {/* MODE 3: DEADLINES SPEED DRILL */}
      {/* ============================================================== */}
      {activeMode === 'drill' && (
        <div className="max-w-3xl mx-auto rounded-2xl border border-neutral-800 bg-neutral-900/80 p-6 sm:p-8 backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
            <div>
              <span className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider">
                Question {currentDrillIndex + 1} of {DEADLINES_DRILL_QUESTIONS.length}
              </span>
              <h2 className="text-sm sm:text-base font-bold text-neutral-100 mt-1">
                Deadlines & Time Limits Recall Drill
              </h2>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-xs font-mono text-neutral-300">
              <Award className="w-3.5 h-3.5 text-amber-400" /> Score: {score} /{' '}
              {DEADLINES_DRILL_QUESTIONS.length}
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
                className="w-full mt-4 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold text-xs tracking-wide uppercase transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
              >
                {currentDrillIndex < DEADLINES_DRILL_QUESTIONS.length - 1 ? (
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
