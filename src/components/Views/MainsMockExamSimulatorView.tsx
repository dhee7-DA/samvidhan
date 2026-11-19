import React, { useState, useEffect, useMemo } from 'react';
import {
  Timer,
  Award,
  Clock,
  CheckCircle2,
  AlertCircle,
  RotateCcw,
  Play,
  Pause,
  Printer,
  FileText,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  BookOpen,
  Send,
  Download,
  ShieldAlert,
  HelpCircle
} from 'lucide-react';
import { MAINS_MASTER_QUESTIONS } from '../../data/mainsQuestionsData';
import type { MainsMasterQuestion } from '../../types/mainsQuestionTypes';
import { useTheme } from '../../context/ThemeContext';

interface MockPaperTemplate {
  id: string;
  title: string;
  subtitle: string;
  totalMarks: number;
  durationMinutes: number;
  questionIds: string[];
}

const PRESET_MOCK_PAPERS: MockPaperTemplate[] = [
  {
    id: 'djs-mains-paper-1',
    title: 'Delhi Judicial Service (DJS) — Constitutional Law Benchmark Paper',
    subtitle: 'High Court pattern testing criminal due process, marital autonomy, and privacy',
    totalMarks: 100,
    durationMinutes: 180,
    questionIds: [
      'mains-20m-bulldozer-justice-demolitions', // 20M
      'mains-20m-parliamentary-privilege-sita-soren', // 20M
      'mains-15m-marital-rape-exception', // 15M
      'mains-15m-same-sex-marriage-supriyo', // 15M
      'mains-10m-living-wills-passive-euthanasia', // 10M
      'mains-10m-self-incrimination-narco-dna', // 10M
      'mains-5m-right-to-travel-abroad', // 5M
      'mains-5m-curative-petition-art-142' // 5M
    ]
  },
  {
    id: 'up-pcsj-mains-paper-1',
    title: 'UP PCS-J (Mains) — Constitutional & Administrative Law Paper',
    subtitle: 'State judiciary pattern focusing on equality, affirmative action, and federalism',
    totalMarks: 100,
    durationMinutes: 180,
    questionIds: [
      'mains-20m-basic-structure-evolution', // 20M
      'mains-20m-indian-federalism-accountability', // 20M
      'mains-15m-interstate-trade-part-xiii', // 15M
      'mains-15m-golden-triangle-maneka', // 15M
      'mains-10m-sc-subclassification-davinder-singh', // 10M
      'mains-10m-governor-assent-art-200', // 10M
      'mains-5m-nemo-judex-bias', // 5M
      'mains-5m-doctrine-of-eclipse' // 5M
    ]
  },
  {
    id: 'upsc-law-paper-1',
    title: 'UPSC Civil Services (Law Optional) — Constitutional Synthesis Paper',
    subtitle: 'Advanced conceptual paper on fiscal federalism, climate rights, and institutional integrity',
    totalMarks: 100,
    durationMinutes: 180,
    questionIds: [
      'mains-20m-environmental-jurisprudence-public-trust', // 20M
      'mains-20m-art-142-complete-justice', // 20M
      'mains-15m-cbi-ed-sanction-prosecution', // 15M
      'mains-15m-electoral-bonds-invalidation', // 15M
      'mains-10m-mineral-rights-taxation-mada', // 10M
      'mains-10m-njac-collegium-judicial-primacy', // 10M
      'mains-5m-separation-of-powers', // 5M
      'mains-5m-right-to-property-300a' // 5M
    ]
  }
];

export const MainsMockExamSimulatorView: React.FC = () => {
  const { setActiveTab } = useTheme();

  // Selected Paper Configuration
  const [selectedPaperId, setSelectedPaperId] = useState<string>(PRESET_MOCK_PAPERS[0].id);
  const [isExamActive, setIsExamActive] = useState<boolean>(false);
  const [isExamSubmitted, setIsExamSubmitted] = useState<boolean>(false);

  // Active question index in test
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);

  // Timer state (seconds)
  const [remainingSeconds, setRemainingSeconds] = useState<number>(180 * 60);
  const [isTimerPaused, setIsTimerPaused] = useState<boolean>(false);

  // Student Drafts for each question in this exam
  const [examAnswers, setExamAnswers] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('samvidhan_active_mains_mock');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Current paper object
  const currentPaper = useMemo(() => {
    return (
      PRESET_MOCK_PAPERS.find((p) => p.id === selectedPaperId) ||
      PRESET_MOCK_PAPERS[0]
    );
  }, [selectedPaperId]);

  // Questions for this paper
  const paperQuestions: MainsMasterQuestion[] = useMemo(() => {
    return currentPaper.questionIds
      .map((id) => MAINS_MASTER_QUESTIONS.find((q) => q.id === id))
      .filter((q): q is MainsMasterQuestion => !!q);
  }, [currentPaper]);

  const activeQuestion: MainsMasterQuestion =
    paperQuestions[activeQuestionIndex] || paperQuestions[0];

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('samvidhan_active_mains_mock', JSON.stringify(examAnswers));
    } catch (e) {
      console.error('Failed to autosave mains mock exam:', e);
    }
  }, [examAnswers]);

  // Countdown Timer
  useEffect(() => {
    if (!isExamActive || isExamSubmitted || isTimerPaused) return;

    const interval = setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsExamSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isExamActive, isExamSubmitted, isTimerPaused]);

  const formatTime = (secs: number) => {
    const hrs = Math.floor(secs / 3600);
    const mins = Math.floor((secs % 3600) / 60);
    const remSecs = secs % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins
      .toString()
      .padStart(2, '0')}:${remSecs.toString().padStart(2, '0')}`;
  };

  const handleStartExam = () => {
    setRemainingSeconds(currentPaper.durationMinutes * 60);
    setIsExamActive(true);
    setIsExamSubmitted(false);
    setIsTimerPaused(false);
    setActiveQuestionIndex(0);
  };

  const handleAnswerChange = (qId: string, text: string) => {
    setExamAnswers((prev) => ({
      ...prev,
      [qId]: text
    }));
  };

  const totalWordsWritten = useMemo(() => {
    return Object.values(examAnswers).reduce((sum, text) => {
      return sum + (text || '').split(/\s+/).filter(Boolean).length;
    }, 0);
  }, [examAnswers]);

  const attemptedCount = useMemo(() => {
    return paperQuestions.filter(
      (q) => (examAnswers[q.id] || '').trim().length > 20
    ).length;
  }, [paperQuestions, examAnswers]);

  // Printable View
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-8 animate-fadeIn">
      {/* 1. PRE-EXAM SETUP SCREEN */}
      {!isExamActive && (
        <div className="rounded-3xl p-6 sm:p-10 bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-8 shadow-xl">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
              <Clock className="w-3.5 h-3.5" />
              Full 3-Hour Timed Mains Examination Hall
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-[var(--text-primary)] tracking-tight">
              Mains Mock Examination Simulator
            </h1>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-3xl leading-relaxed">
              Experience the authentic pressure of Judicial Services & UPSC Law examination halls. Write a full 100-mark paper within a strict 3-hour countdown, track page limits in real-time, and export your completed answer booklet with examiner rubrics.
            </p>
          </div>

          {/* Select Paper Preset */}
          <div className="space-y-4">
            <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
              Choose Examination Paper:
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {PRESET_MOCK_PAPERS.map((paper) => {
                const isSelected = selectedPaperId === paper.id;
                return (
                  <button
                    key={paper.id}
                    type="button"
                    onClick={() => setSelectedPaperId(paper.id)}
                    className={`p-5 rounded-2xl border text-left transition-all space-y-3 cursor-pointer ${
                      isSelected
                        ? 'bg-[var(--bg-card)] border-[var(--accent-primary)] shadow-md ring-1 ring-[var(--accent-primary)]/20'
                        : 'bg-[var(--bg-base)]/60 border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] font-mono">
                        {paper.totalMarks} Marks
                      </span>
                      <span className="text-xs text-[var(--text-muted)] font-mono">
                        {paper.durationMinutes / 60} Hours
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-[var(--text-primary)] leading-snug">
                      {paper.title}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] line-clamp-2">
                      {paper.subtitle}
                    </p>

                    <div className="text-[11px] font-mono text-[var(--text-muted)] pt-1 border-t border-[var(--border-subtle)]">
                      {paper.questionIds.length} Flagship Questions
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Paper Question Index Preview */}
          <div className="p-6 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-4">
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
              <span className="text-xs font-bold text-[var(--text-primary)]">
                Paper Index: {currentPaper.title}
              </span>
              <span className="text-xs text-[var(--text-muted)] font-mono">
                {paperQuestions.length} Questions • {currentPaper.totalMarks} Marks
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {paperQuestions.map((q, idx) => (
                <div
                  key={q.id}
                  className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-between gap-2"
                >
                  <span className="font-semibold text-[var(--text-primary)] truncate">
                    Q{idx + 1}. {q.title}
                  </span>
                  <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] shrink-0">
                    {q.typicalMarks}M
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Start Button */}
          <div className="flex items-center justify-end gap-4">
            <button
              type="button"
              onClick={handleStartExam}
              className="px-8 py-3.5 rounded-2xl bg-[var(--accent-primary)] text-[var(--bg-base)] hover:opacity-90 transition-all font-bold text-sm flex items-center gap-2 shadow-lg"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Enter Examination Hall & Begin 3-Hour Timer</span>
            </button>
          </div>
        </div>
      )}

      {/* 2. ACTIVE EXAM HALL INTERFACE */}
      {isExamActive && !isExamSubmitted && (
        <div className="space-y-6">
          {/* Top Exam Header with Stopwatch & Controls */}
          <div className="rounded-2xl p-4 sm:p-5 bg-[var(--bg-card)] border border-[var(--border-subtle)] flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-md sticky top-16 z-30 backdrop-blur-md">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <h2 className="text-sm font-bold text-[var(--text-primary)] truncate max-w-md">
                  {currentPaper.title}
                </h2>
              </div>
              <p className="text-xs text-[var(--text-muted)]">
                Attempted: {attemptedCount} of {paperQuestions.length} Questions • {totalWordsWritten} Words Total (≈ {(totalWordsWritten / 200).toFixed(1)} Pages)
              </p>
            </div>

            {/* Timer & Controls */}
            <div className="flex items-center gap-3 self-start md:self-auto">
              <div className="px-4 py-2 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] font-mono text-base sm:text-lg font-black flex items-center gap-2 shadow-inner">
                <Clock className={`w-4 h-4 ${remainingSeconds < 900 ? 'text-rose-400 animate-pulse' : 'text-amber-400'}`} />
                <span className={remainingSeconds < 900 ? 'text-rose-400' : 'text-[var(--text-primary)]'}>
                  {formatTime(remainingSeconds)}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setIsTimerPaused(!isTimerPaused)}
                className="px-3 py-2 rounded-xl text-xs font-bold bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all flex items-center gap-1.5"
              >
                {isTimerPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                <span>{isTimerPaused ? 'Resume' : 'Pause'}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  if (window.confirm('Are you ready to submit your full examination paper?')) {
                    setIsExamSubmitted(true);
                  }
                }}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-600 text-black font-black transition-all flex items-center gap-1.5 shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Paper</span>
              </button>
            </div>
          </div>

          {/* Question Navigator Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {paperQuestions.map((q, idx) => {
              const isSelected = activeQuestionIndex === idx;
              const hasDraft = (examAnswers[q.id] || '').trim().length > 20;

              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => setActiveQuestionIndex(idx)}
                  className={`px-3.5 py-2 rounded-xl border text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-[var(--accent-primary)] text-[var(--bg-base)] shadow-sm'
                      : hasDraft
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                      : 'bg-[var(--bg-card)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <span>Q{idx + 1}</span>
                  <span className="text-[10px] font-mono opacity-80">({q.typicalMarks}M)</span>
                  {hasDraft && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                </button>
              );
            })}
          </div>

          {/* Active Question Workspace */}
          <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-6 sm:p-8 space-y-6 shadow-xl">
            {/* Question Details */}
            <div className="space-y-3 border-b border-[var(--border-subtle)] pb-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">
                  Question {activeQuestionIndex + 1} of {paperQuestions.length} • {activeQuestion.typicalMarks} Marks
                </span>
                <span className="text-xs text-[var(--text-muted)] font-mono">
                  Target: {activeQuestion.targetWordLimit} ({activeQuestion.estimatedPages})
                </span>
              </div>

              <h2 className="text-base sm:text-lg font-bold text-[var(--text-primary)] leading-relaxed">
                {activeQuestion.questionText}
              </h2>
            </div>

            {/* Answer Scratchpad with Word Counter */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                <span>Candidate Answer Script:</span>
                <span className="font-mono font-bold text-[var(--text-primary)]">
                  {((examAnswers[activeQuestion.id] || '').split(/\s+/).filter(Boolean).length)} Words
                  {' '}≈ {(((examAnswers[activeQuestion.id] || '').split(/\s+/).filter(Boolean).length) / 200).toFixed(1)} Pages
                </span>
              </div>

              <textarea
                value={examAnswers[activeQuestion.id] || ''}
                onChange={(e) => handleAnswerChange(activeQuestion.id, e.target.value)}
                placeholder="Write your complete examination answer here..."
                rows={16}
                className="w-full p-5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs md:text-sm text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors"
              />
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => setActiveQuestionIndex((prev) => Math.max(0, prev - 1))}
                disabled={activeQuestionIndex === 0}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Question</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveQuestionIndex((prev) => Math.min(paperQuestions.length - 1, prev + 1))}
                disabled={activeQuestionIndex === paperQuestions.length - 1}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
              >
                <span>Next Question</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. POST-EXAM SUBMISSION & PRINTABLE BOOKLET */}
      {isExamSubmitted && (
        <div className="space-y-6">
          <div className="rounded-3xl p-6 sm:p-8 bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-6 shadow-xl text-center">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto">
              <Award className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h2 className="text-2xl font-black text-[var(--text-primary)]">
                Examination Paper Submitted
              </h2>
              <p className="text-xs text-[var(--text-muted)]">
                {currentPaper.title} ({currentPaper.totalMarks} Marks)
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto text-xs">
              <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
                <span className="text-[var(--text-muted)]">Questions Attempted</span>
                <p className="text-lg font-bold text-[var(--text-primary)] pt-1">
                  {attemptedCount} / {paperQuestions.length}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
                <span className="text-[var(--text-muted)]">Total Words</span>
                <p className="text-lg font-bold text-[var(--text-primary)] pt-1">
                  {totalWordsWritten}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
                <span className="text-[var(--text-muted)]">Estimated Exam Pages</span>
                <p className="text-lg font-bold text-[var(--text-primary)] pt-1">
                  {(totalWordsWritten / 200).toFixed(1)} Pages
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
                <span className="text-[var(--text-muted)]">Time Remaining</span>
                <p className="text-lg font-bold text-[var(--text-primary)] pt-1">
                  {formatTime(remainingSeconds)}
                </p>
              </div>
            </div>

            {/* Print & Restart Actions */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={handlePrint}
                className="px-6 py-3 rounded-2xl bg-[var(--accent-primary)] text-[var(--bg-base)] hover:opacity-90 font-bold text-xs flex items-center gap-2 shadow-md"
              >
                <Printer className="w-4 h-4" />
                <span>🖨️ Export Printable Answer Script (PDF)</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsExamActive(false);
                  setIsExamSubmitted(false);
                }}
                className="px-5 py-3 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] font-bold text-xs transition-colors"
              >
                Back to Mock Setup
              </button>
            </div>
          </div>

          {/* Printable Answer Booklet Sheet */}
          <div className="space-y-6 pt-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text-muted)]">
              Your Complete Submitted Answer Script & Official Model Answers:
            </h3>

            {paperQuestions.map((q, idx) => {
              const studentAnswer = examAnswers[q.id] || '';
              return (
                <div
                  key={q.id}
                  className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-6 sm:p-8 space-y-5 shadow-lg page-break-inside-avoid"
                >
                  <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
                    <span className="text-xs font-bold text-[var(--accent-primary)]">
                      Question #{idx + 1} ({q.typicalMarks} Marks)
                    </span>
                    <span className="text-xs font-mono text-[var(--text-muted)]">
                      Word Count: {studentAnswer.split(/\s+/).filter(Boolean).length} Words
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-[var(--text-primary)]">
                    {q.questionText}
                  </h4>

                  {/* Candidate Answer */}
                  <div className="p-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
                    <span className="text-xs font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-blue-400" />
                      Candidate's Written Response:
                    </span>
                    <p className="text-xs text-[var(--text-primary)] leading-relaxed whitespace-pre-wrap font-serif">
                      {studentAnswer.trim() || 'No answer attempted for this question.'}
                    </p>
                  </div>

                  {/* Official 4-Step Blueprint Reference */}
                  <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-2 text-xs">
                    <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Official 4-Step Examiner Blueprint:
                    </span>
                    <div className="space-y-1 text-[var(--text-muted)]">
                      <p><strong className="text-[var(--text-primary)]">Step 1:</strong> {q.answerBlueprint.step1Intro}</p>
                      <p><strong className="text-[var(--text-primary)]">Step 2:</strong> {q.answerBlueprint.step2DoctrinalCore}</p>
                      <p><strong className="text-[var(--text-primary)]">Step 3:</strong> {q.answerBlueprint.step3PrecedentEvolution}</p>
                      <p><strong className="text-[var(--text-primary)]">Step 4:</strong> {q.answerBlueprint.step4Conclusion}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
