import React, { useState, useMemo, useEffect } from 'react';
import {
  FileText,
  Search,
  Award,
  Calendar,
  BookOpen,
  Scale,
  Sparkles,
  ChevronRight,
  ChevronDown,
  RotateCcw,
  CheckCircle2,
  Clock,
  Layers,
  Flame,
  ArrowRight,
  HelpCircle,
  Trophy,
  Filter,
  Check,
  AlertCircle
} from 'lucide-react';
import { JKPSC_MAINS_PYQ_DATA, type PyqQuestion } from '../../data/pyqData';
import { AnnotatedLegalText } from '../Common/AnnotatedLegalText';
import { useTheme } from '../../context/ThemeContext';

export const PyqVaultView: React.FC = () => {
  const { setActiveTab } = useTheme();

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedYearFilter, setSelectedYearFilter] = useState<string>('all');
  const [selectedTopicFilter, setSelectedTopicFilter] = useState<string>('all');

  // Selected Question
  const [selectedQuestionId, setSelectedQuestionId] = useState<string>(JKPSC_MAINS_PYQ_DATA[0].id);

  // Model Answer reveal state
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});

  // User Practice Draft Answers (persisted in localStorage)
  const [userDrafts, setUserDrafts] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('samvidhan_jkpsc_pyq_drafts');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Save drafts to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('samvidhan_jkpsc_pyq_drafts', JSON.stringify(userDrafts));
    } catch (e) {
      console.error('Failed to save PYQ drafts:', e);
    }
  }, [userDrafts]);

  // Timer State for drafting practice
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning]);

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Filtered Questions List
  const filteredQuestions = useMemo(() => {
    return JKPSC_MAINS_PYQ_DATA.filter((q) => {
      if (selectedYearFilter !== 'all' && q.year !== selectedYearFilter) return false;
      if (selectedTopicFilter !== 'all' && q.topic !== selectedTopicFilter) return false;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        return (
          q.title.toLowerCase().includes(query) ||
          q.questionText.toLowerCase().includes(query) ||
          q.relevantArticles.some((art) => art.toLowerCase().includes(query)) ||
          q.coreIssues.some((issue) => issue.toLowerCase().includes(query)) ||
          q.landmarkPrecedents.classic.toLowerCase().includes(query) ||
          q.landmarkPrecedents.modern2024.toLowerCase().includes(query)
        );
      }
      return true;
    });
  }, [searchQuery, selectedYearFilter, selectedTopicFilter]);

  // Currently Selected Question Object
  const currentQuestion: PyqQuestion = useMemo(() => {
    return (
      JKPSC_MAINS_PYQ_DATA.find((q) => q.id === selectedQuestionId) ||
      JKPSC_MAINS_PYQ_DATA[0]
    );
  }, [selectedQuestionId]);

  // Draft answer handler
  const handleDraftChange = (text: string) => {
    setUserDrafts((prev) => ({
      ...prev,
      [currentQuestion.id]: text
    }));
  };

  const toggleSolution = (id: string) => {
    setRevealedSolutions((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const wordCount = (userDrafts[currentQuestion.id] || '').split(/\s+/).filter(Boolean).length;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
      {/* =========================================================================
          HERO BANNER & STATS
      ========================================================================= */}
      <div className="p-6 md:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent-primary)]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
              <Scale className="w-3.5 h-3.5" />
              JKPSC Prosecuting Officer & Judicial Services
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Paper-II Mains PYQ Question Bank
            </h1>
            <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-2xl leading-relaxed">
              Authentic past 10 years questions for <strong className="text-[var(--text-primary)]">Constitutional Law (Paper-II, 250 Marks)</strong>. 
              Complete with 4-step examiner model answers, 50-mark scoring rubrics, 2024 Constitution Bench shifts, and interactive writing scratchpads.
            </p>
          </div>

          {/* Quick Stats Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-center min-w-[100px]">
              <span className="text-[10px] uppercase font-bold text-[var(--text-muted)] block">Exams Covered</span>
              <span className="text-lg font-black text-[var(--text-primary)]">10 Years</span>
            </div>
            <div className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-center min-w-[100px]">
              <span className="text-[10px] uppercase font-bold text-[var(--text-muted)] block">Paper Marks</span>
              <span className="text-lg font-black text-[var(--accent-primary)]">250 Marks</span>
            </div>
            <button
              onClick={() => setActiveTab('bootcamp')}
              className="px-4 py-3 rounded-xl text-xs font-bold bg-[var(--accent-primary)] text-[var(--bg-base)] hover:opacity-90 transition-all flex items-center gap-1.5 shadow-sm"
            >
              <Flame className="w-4 h-4" />
              <span>15-Day Bootcamp</span>
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          FILTERS & SEARCH MATRIX
      ========================================================================= */}
      <div className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword, case law (e.g. Anuradha Bhasin, MADA, Selvi), or article..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs md:text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
            />
          </div>

          {/* Year Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
            {['all', '2022–2023', '2018–2019', '2014–2016'].map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYearFilter(year)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  selectedYearFilter === year
                    ? 'bg-[var(--accent-primary)] text-[var(--bg-base)] shadow-sm'
                    : 'bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                }`}
              >
                {year === 'all' ? 'All Years' : year}
              </button>
            ))}
          </div>
        </div>

        {/* Topic Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-1 border-t border-[var(--border-subtle)]">
          {[
            'all',
            'Fundamental Rights',
            'Criminal Due Process',
            'Judiciary & Writs',
            'Federalism & Emergency',
            'Administrative Law',
            'Amendments & Basic Structure'
          ].map((topic) => (
            <button
              key={topic}
              onClick={() => setSelectedTopicFilter(topic)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold whitespace-nowrap transition-all ${
                selectedTopicFilter === topic
                  ? 'bg-[var(--accent-primary)]/20 text-[var(--accent-primary)] border border-[var(--accent-primary)]/40 font-bold'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              {topic === 'all' ? 'All Topics' : topic}
            </button>
          ))}
        </div>
      </div>

      {/* =========================================================================
          MAIN 2-COLUMN VIEW: QUESTIONS LIST & SELECTED DETAIL DOSSIER
      ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Questions List (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="flex items-center justify-between text-xs text-[var(--text-muted)] px-1">
            <span className="font-bold uppercase tracking-wider">
              Questions ({filteredQuestions.length})
            </span>
            <span>Paper-II (250 Marks)</span>
          </div>

          <div className="space-y-2.5 max-h-[750px] overflow-y-auto pr-1">
            {filteredQuestions.map((q) => {
              const isSelected = q.id === selectedQuestionId;
              const hasDraft = !!userDrafts[q.id];

              return (
                <button
                  key={q.id}
                  onClick={() => setSelectedQuestionId(q.id)}
                  className={`w-full p-4 rounded-xl border text-left transition-all space-y-2 relative group ${
                    isSelected
                      ? 'bg-[var(--bg-card)] border-[var(--accent-primary)] shadow-md ring-1 ring-[var(--accent-primary)]/40'
                      : 'bg-[var(--bg-card)] border-[var(--border-subtle)] hover:border-[var(--accent-primary)]/40'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">
                      {q.year} • Q{q.questionNumber}
                    </span>
                    <span className="text-[10px] font-bold text-[var(--text-muted)]">
                      {q.part} ({q.marks}M)
                    </span>
                  </div>

                  <h4 className="text-xs font-bold text-[var(--text-primary)] line-clamp-2 leading-snug">
                    {q.title}
                  </h4>

                  <div className="flex items-center justify-between text-[11px] text-[var(--text-muted)] pt-1">
                    <span className="truncate max-w-[150px]">{q.topic}</span>
                    {hasDraft && (
                      <span className="inline-flex items-center gap-1 text-emerald-400 font-bold text-[10px]">
                        <Check className="w-3 h-3" /> Drafted
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Selected Question Deep-Dive Dossier (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="p-6 md:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-md space-y-6">
            {/* Header Strip */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-xs font-black uppercase tracking-wider bg-[var(--accent-primary)] text-[var(--bg-base)]">
                    {currentQuestion.year} Examination
                  </span>
                  <span className="text-xs font-semibold text-[var(--text-muted)]">
                    {currentQuestion.paper} • {currentQuestion.part}
                  </span>
                  <span className="text-xs font-bold text-amber-400 px-2 py-0.5 bg-amber-500/10 rounded border border-amber-500/20">
                    {currentQuestion.marks} Marks
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-[var(--text-primary)]">
                  {currentQuestion.title}
                </h3>
              </div>

              {/* Jump to Bootcamp Day Button */}
              <button
                onClick={() => setActiveTab('bootcamp')}
                className="px-3.5 py-2 rounded-xl text-xs font-bold bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/30 hover:bg-[var(--accent-primary)]/20 transition-all flex items-center gap-1.5 shrink-0 self-start sm:self-auto"
                title={`Study this topic in 15-Day Bootcamp Day ${currentQuestion.bootcampDay}`}
              >
                <Flame className="w-3.5 h-3.5" />
                <span>Bootcamp Day {currentQuestion.bootcampDay} &rarr;</span>
              </button>
            </div>

            {/* Official Question Text */}
            <div className="p-5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--accent-primary)] block">
                Official Examination Question (Verbatim):
              </span>
              <p className="text-sm md:text-base font-semibold text-[var(--text-primary)] leading-relaxed whitespace-pre-line">
                {currentQuestion.questionText}
              </p>
            </div>

            {/* Core Issues Framed */}
            <div className="space-y-2 bg-[var(--bg-base)] p-4 rounded-xl border border-[var(--border-subtle)]">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Core Constitutional Issues Framed for Answer:
              </span>
              <ul className="space-y-1.5 text-xs text-[var(--text-secondary)] list-disc pl-4">
                {currentQuestion.coreIssues.map((issue, idx) => (
                  <li key={idx}>
                    <AnnotatedLegalText text={issue} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Precedents Evolution Strip */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-red-500/20 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block">
                  Classic Foundational Benchmark:
                </span>
                <p className="text-xs font-semibold text-[var(--text-primary)]">
                  <AnnotatedLegalText text={currentQuestion.landmarkPrecedents.classic} />
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-emerald-500/30 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                  Modern Constitution Bench Rulings (2020–2024):
                </span>
                <p className="text-xs font-semibold text-emerald-300">
                  <AnnotatedLegalText text={currentQuestion.landmarkPrecedents.modern2024} />
                </p>
              </div>
            </div>

            {/* ===================================================================
                INTERACTIVE ANSWER DRAFTING SCRATCHPAD WITH TIMER
            =================================================================== */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
                    Mains Answer Drafting Practice Scratchpad
                  </span>
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    ({wordCount} words drafted)
                  </span>
                </div>

                {/* Exam Stopwatch Timer */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--accent-primary)] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {formatTimer(timerSeconds)}
                  </span>
                  <button
                    onClick={() => setIsTimerRunning((prev) => !prev)}
                    className="px-2.5 py-1 text-xs font-bold rounded bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {isTimerRunning ? 'Pause' : 'Start Timer'}
                  </button>
                  <button
                    onClick={() => {
                      setIsTimerRunning(false);
                      setTimerSeconds(0);
                    }}
                    className="p-1 rounded text-[var(--text-muted)] hover:text-red-400 transition-colors"
                    title="Reset Timer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <textarea
                value={userDrafts[currentQuestion.id] || ''}
                onChange={(e) => handleDraftChange(e.target.value)}
                placeholder="Draft your answer following the 4-step Mains Gold-Standard formula: 
1. Constitutional & Statutory Provisions...
2. Judicial Test / Doctrine...
3. Precedent Evolution (Classic ➔ 2024 Bench)...
4. Applied Analysis & Prosecutorial Submissions..."
                rows={9}
                className="w-full p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs md:text-sm text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors"
              />
            </div>

            {/* Model Answer Toggle Button */}
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => toggleSolution(currentQuestion.id)}
                className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[var(--accent-primary)] text-[var(--bg-base)] hover:opacity-90 transition-all flex items-center gap-2 shadow-sm"
              >
                <Trophy className="w-4 h-4" />
                <span>
                  {revealedSolutions[currentQuestion.id]
                    ? 'Hide Official Model Answer'
                    : 'Reveal Examiner\'s Model Answer & 50-Mark Rubric'}
                </span>
              </button>
            </div>

            {/* ===================================================================
                EXAMINER MODEL SOLUTION & 50-MARK RUBRIC
            =================================================================== */}
            {revealedSolutions[currentQuestion.id] && (
              <div className="space-y-6 pt-4 border-t border-[var(--border-subtle)] animate-fadeIn">
                {/* Model Answer Box */}
                <div className="p-6 rounded-2xl bg-[var(--bg-base)] border border-emerald-500/30 space-y-4">
                  <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4" />
                      Official Examiner Grade Model Solution (50 Marks)
                    </span>
                    <span className="text-xs font-mono text-[var(--text-muted)]">
                      Standard JKPSC PO Mains Format
                    </span>
                  </div>

                  <div className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-line font-normal space-y-3">
                    <AnnotatedLegalText text={currentQuestion.modelAnswer} />
                  </div>
                </div>

                {/* 50-Mark Rubric Breakdown */}
                <div className="p-5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)] block">
                    Official 50-Mark Scoring Rubric & Evaluation Standard:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentQuestion.scoringRubric.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-between text-xs"
                      >
                        <span className="text-[var(--text-secondary)] pr-2">{item.criterion}</span>
                        <span className="font-extrabold text-[var(--accent-primary)] shrink-0">
                          {item.marks} Marks
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
