import React, { useState, useEffect } from 'react';
import {
  ShieldAlert,
  AlertTriangle,
  Award,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Clock,
  Play,
  RotateCcw,
  Check,
  ChevronLeft,
  ChevronRight,
  Bookmark,
  Flag,
  Flame,
  Zap,
  BarChart3,
  BookOpen
} from 'lucide-react';
import {
  TRAP_SIMULATOR_QUESTIONS,
  type TrapQuestion
} from '../../data/negativeMarkingSimulatorData';
import { useTheme } from '../../context/ThemeContext';

export const NegativeMarkingSimulatorView: React.FC = () => {
  const { setActiveTab } = useTheme();

  // Test setup
  const [examLength, setExamLength] = useState<25 | 50>(50);
  const [isTimed, setIsTimed] = useState<boolean>(true);
  const [examState, setExamState] = useState<'intro' | 'running' | 'submitted'>('intro');

  // Running test state
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<string, boolean>>({});
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState<number>(60 * 60);

  // Active questions slice
  const activeQuestions: TrapQuestion[] = TRAP_SIMULATOR_QUESTIONS.slice(0, examLength);
  const currentQuestion = activeQuestions[currentIndex];

  // Timer Effect
  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null;
    if (examState === 'running' && isTimed && timeRemainingSeconds > 0) {
      timer = setInterval(() => {
        setTimeRemainingSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(timer!);
            setExamState('submitted');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [examState, isTimed, timeRemainingSeconds]);

  const handleStartExam = () => {
    setUserAnswers({});
    setMarkedForReview({});
    setCurrentIndex(0);
    setTimeRemainingSeconds(examLength === 50 ? 60 * 60 : 30 * 60);
    setExamState('running');
  };

  const handleSelectOption = (key: 'A' | 'B' | 'C' | 'D') => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: key
    }));
  };

  const handleClearAnswer = () => {
    setUserAnswers((prev) => {
      const copy = { ...prev };
      delete copy[currentQuestion.id];
      return copy;
    });
  };

  const handleToggleReview = () => {
    setMarkedForReview((prev) => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id]
    }));
  };

  const handleSubmitExam = () => {
    setExamState('submitted');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // -------------------------------------------------------------
  // POST-EXAM METRICS CALCULATIONS
  // -------------------------------------------------------------
  let correctCount = 0;
  let incorrectCount = 0;
  let unattemptedCount = 0;

  activeQuestions.forEach((q) => {
    const ans = userAnswers[q.id];
    if (!ans) {
      unattemptedCount++;
    } else if (ans === q.correctOption) {
      correctCount++;
    } else {
      incorrectCount++;
    }
  });

  const grossMarks = correctCount * 2;
  const negativePenalty = Number((incorrectCount * 0.66).toFixed(2));
  const netMarks = Number((grossMarks - negativePenalty).toFixed(2));
  const maxMarks = examLength * 2;
  const accuracyPercent =
    correctCount + incorrectCount > 0
      ? Math.round((correctCount / (correctCount + incorrectCount)) * 100)
      : 0;

  // Topic vulnerability breakdown
  const topicStats: Record<string, { total: number; correct: number; incorrect: number }> = {};
  activeQuestions.forEach((q) => {
    if (!topicStats[q.topic]) {
      topicStats[q.topic] = { total: 0, correct: 0, incorrect: 0 };
    }
    topicStats[q.topic].total++;
    const ans = userAnswers[q.id];
    if (ans === q.correctOption) {
      topicStats[q.topic].correct++;
    } else if (ans) {
      topicStats[q.topic].incorrect++;
    }
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-300 pb-16">
      {/* HEADER BANNER */}
      <div className="relative overflow-hidden rounded-2xl border border-rose-500/30 bg-gradient-to-br from-rose-950/20 via-neutral-900/40 to-neutral-950 p-6 sm:p-8 backdrop-blur-md">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                <ShieldAlert className="w-3.5 h-3.5 text-rose-400" /> Negative Marking Trap Simulator
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-neutral-800 text-neutral-400 font-mono">
                +2.00 / -0.66 Scoring
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-100 flex items-center gap-3">
              50-Question Negative Marking Exam Hall
            </h1>
            <p className="mt-2 text-sm text-neutral-400 max-w-2xl leading-relaxed">
              Curated specifically with deceptive trap statements, word-swaps, and unnotified amendments where over 70% of UPSC and Judicial Service aspirants lose marks.
            </p>
          </div>

          {examState === 'running' && isTimed && (
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-rose-500/40 bg-rose-950/40 text-rose-300 font-mono font-bold text-base shadow-lg animate-pulse">
              <Clock className="w-4 h-4" />
              <span>{formatTime(timeRemainingSeconds)}</span>
            </div>
          )}
        </div>
      </div>

      {/* ============================================================== */}
      {/* 1. INTRO / SETUP STATE */}
      {/* ============================================================== */}
      {examState === 'intro' && (
        <div className="max-w-2xl mx-auto rounded-2xl border border-neutral-800 bg-neutral-900/80 p-6 sm:p-8 backdrop-blur-md space-y-6">
          <div>
            <h2 className="text-lg font-bold text-neutral-100">Configure Your Trap Exam Session</h2>
            <p className="text-xs text-neutral-400 mt-1">
              Test your ability to spot examiner traps under strict UPSC/State Judicial marking standards.
            </p>
          </div>

          {/* EXAM LENGTH SELECTOR */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-neutral-300 block">Select Question Count:</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setExamLength(50)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  examLength === 50
                    ? 'border-rose-500 bg-rose-950/20 text-rose-200 shadow-md ring-1 ring-rose-500/50'
                    : 'border-neutral-800 bg-neutral-950/60 text-neutral-400 hover:bg-neutral-800'
                }`}
              >
                <div className="text-sm font-bold">Full Mock: 50 Questions</div>
                <div className="text-xs text-neutral-400 mt-1">60 Minutes • 100 Marks</div>
              </button>
              <button
                onClick={() => setExamLength(25)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  examLength === 25
                    ? 'border-rose-500 bg-rose-950/20 text-rose-200 shadow-md ring-1 ring-rose-500/50'
                    : 'border-neutral-800 bg-neutral-950/60 text-neutral-400 hover:bg-neutral-800'
                }`}
              >
                <div className="text-sm font-bold">Sprint: 25 Questions</div>
                <div className="text-xs text-neutral-400 mt-1">30 Minutes • 50 Marks</div>
              </button>
            </div>
          </div>

          {/* TIMED VS UNTIMED */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-neutral-300 block">Exam Hall Timer:</label>
            <div className="flex gap-3">
              <button
                onClick={() => setIsTimed(true)}
                className={`flex-1 py-2.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  isTimed
                    ? 'border-rose-500 bg-rose-500 text-white'
                    : 'border-neutral-800 bg-neutral-950 text-neutral-400'
                }`}
              >
                <Clock className="w-3.5 h-3.5" /> Timed Exam (Strict Countdown)
              </button>
              <button
                onClick={() => setIsTimed(false)}
                className={`flex-1 py-2.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  !isTimed
                    ? 'border-rose-500 bg-rose-500 text-white'
                    : 'border-neutral-800 bg-neutral-950 text-neutral-400'
                }`}
              >
                Untimed Study Mode
              </button>
            </div>
          </div>

          {/* SCORING RULES */}
          <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-950/60 text-xs text-neutral-300 space-y-1.5">
            <div className="font-bold text-neutral-200 uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-rose-400" /> Negative Marking Rules
            </div>
            <div className="flex items-center justify-between">
              <span>Correct Answer:</span>
              <span className="font-mono text-emerald-400 font-bold">+2.00 Marks</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Incorrect Answer (Penalty):</span>
              <span className="font-mono text-rose-400 font-bold">-0.66 Marks</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Unattempted Question:</span>
              <span className="font-mono text-neutral-500 font-bold">0.00 Marks</span>
            </div>
          </div>

          <button
            onClick={handleStartExam}
            className="w-full py-3.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-bold text-sm tracking-wide uppercase transition-colors flex items-center justify-center gap-2 shadow-lg shadow-rose-500/25"
          >
            <Play className="w-4 h-4 fill-current" /> Enter Negative Marking Exam Hall
          </button>
        </div>
      )}

      {/* ============================================================== */}
      {/* 2. RUNNING EXAM STATE */}
      {/* ============================================================== */}
      {examState === 'running' && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* QUESTION PANE (3 COLS) */}
          <div className="lg:col-span-3 rounded-2xl border border-neutral-800 bg-neutral-900/80 p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between">
            <div>
              {/* QUESTION TOP BAR */}
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-neutral-800 text-neutral-300 font-bold">
                    Q{currentIndex + 1} of {examLength}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
                    {currentQuestion.topic}
                  </span>
                </div>
                <div className="text-xs font-mono text-neutral-500">
                  Core: <span className="text-neutral-300">{currentQuestion.coreArticle}</span>
                </div>
              </div>

              {/* QUESTION TEXT */}
              <h2 className="text-base sm:text-lg font-medium text-neutral-100 leading-relaxed mb-6">
                {currentQuestion.question}
              </h2>

              {/* OPTIONS */}
              <div className="space-y-3">
                {currentQuestion.options.map((opt) => {
                  const isSelected = userAnswers[currentQuestion.id] === opt.key;
                  return (
                    <button
                      key={opt.key}
                      onClick={() => handleSelectOption(opt.key)}
                      className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-start gap-3 ${
                        isSelected
                          ? 'border-rose-500 bg-rose-950/30 text-rose-200 font-semibold shadow-md'
                          : 'border-neutral-800 bg-neutral-950/60 hover:bg-neutral-800 text-neutral-300'
                      }`}
                    >
                      <span
                        className={`w-5 h-5 rounded-full border text-[11px] font-mono flex items-center justify-center shrink-0 mt-0.5 ${
                          isSelected
                            ? 'border-rose-400 bg-rose-500 text-white font-bold'
                            : 'border-neutral-700 text-neutral-500'
                        }`}
                      >
                        {opt.key}
                      </span>
                      <span className="flex-1 leading-relaxed">{opt.text}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-8 pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleClearAnswer}
                  className="px-3 py-1.5 rounded-lg border border-neutral-800 text-xs text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800 transition-colors"
                >
                  Clear Selection
                </button>
                <button
                  onClick={handleToggleReview}
                  className={`px-3 py-1.5 rounded-lg border text-xs transition-colors flex items-center gap-1.5 ${
                    markedForReview[currentQuestion.id]
                      ? 'border-amber-500/60 bg-amber-950/30 text-amber-300 font-bold'
                      : 'border-neutral-800 text-neutral-400 hover:bg-neutral-800'
                  }`}
                >
                  <Bookmark className="w-3.5 h-3.5" />
                  {markedForReview[currentQuestion.id] ? 'Marked for Review' : 'Mark for Review'}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex((i) => i - 1)}
                  className="px-3 py-1.5 rounded-lg border border-neutral-800 text-xs text-neutral-300 hover:bg-neutral-800 disabled:opacity-40 transition-colors flex items-center gap-1"
                >
                  <ChevronLeft className="w-3.5 h-3.5" /> Prev
                </button>
                {currentIndex < examLength - 1 ? (
                  <button
                    onClick={() => setCurrentIndex((i) => i + 1)}
                    className="px-4 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-bold text-neutral-100 transition-colors flex items-center gap-1"
                  >
                    Next <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmitExam}
                    className="px-5 py-1.5 rounded-lg bg-rose-500 hover:bg-rose-600 text-xs font-bold text-white transition-colors shadow-md shadow-rose-500/25"
                  >
                    Submit Exam →
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* PALETTE (1 COL) */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 p-5 backdrop-blur-md space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                Question Palette
              </h3>
              <span className="text-[11px] font-mono text-neutral-500">
                {Object.keys(userAnswers).length} / {examLength}
              </span>
            </div>

            {/* STATUS LEGEND */}
            <div className="grid grid-cols-2 gap-2 text-[10px] text-neutral-400 font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-rose-500" /> Answered
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-amber-500" /> Review
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-neutral-800" /> Unanswered
              </div>
            </div>

            {/* GRID OF QUESTIONS */}
            <div className="grid grid-cols-5 gap-1.5 max-h-80 overflow-y-auto pt-2">
              {activeQuestions.map((q, idx) => {
                const isAnswered = !!userAnswers[q.id];
                const isReview = !!markedForReview[q.id];
                const isCurrent = idx === currentIndex;

                let tileColor = 'bg-neutral-950 text-neutral-500 border-neutral-800';
                if (isAnswered) {
                  tileColor = 'bg-rose-500 text-white font-bold border-rose-400';
                }
                if (isReview) {
                  tileColor = 'bg-amber-500 text-neutral-950 font-bold border-amber-400';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-8 rounded-lg text-xs font-mono border transition-all flex items-center justify-center ${tileColor} ${
                      isCurrent ? 'ring-2 ring-white scale-105' : ''
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <button
              onClick={handleSubmitExam}
              className="w-full mt-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              Finish & Check Score
            </button>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 3. POST-EXAM DIAGNOSIS & SCORECARD */}
      {/* ============================================================== */}
      {examState === 'submitted' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          {/* MAIN SCORECARD BANNER */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/90 p-6 sm:p-8 backdrop-blur-md">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-neutral-800 pb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-rose-400 font-bold flex items-center gap-1.5">
                  <Award className="w-4 h-4" /> Official Examination Scorecard
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-100 mt-1">
                  Trap Vulnerability Assessment
                </h2>
              </div>

              <button
                onClick={handleStartExam}
                className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-bold transition-colors flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Retake Exam
              </button>
            </div>

            {/* MARKS GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-950/60">
                <div className="text-xs text-neutral-400 font-medium">Net Score</div>
                <div className="text-3xl font-bold font-mono text-rose-400 mt-1">
                  {netMarks} <span className="text-xs text-neutral-500 font-normal">/ {maxMarks}</span>
                </div>
                <div className="text-[11px] text-neutral-500 mt-1 font-mono">
                  {Math.round((netMarks / maxMarks) * 100)}% Net Score
                </div>
              </div>

              <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-950/10">
                <div className="text-xs text-emerald-400 font-medium">Correct Answers</div>
                <div className="text-3xl font-bold font-mono text-emerald-300 mt-1">
                  {correctCount}
                </div>
                <div className="text-[11px] text-emerald-400 font-mono mt-1">
                  +{grossMarks}.00 Gross Marks
                </div>
              </div>

              <div className="p-4 rounded-xl border border-rose-500/20 bg-rose-950/10">
                <div className="text-xs text-rose-400 font-medium">Negative Penalty</div>
                <div className="text-3xl font-bold font-mono text-rose-300 mt-1">
                  -{negativePenalty}
                </div>
                <div className="text-[11px] text-rose-400 font-mono mt-1">
                  {incorrectCount} wrong (-0.66 each)
                </div>
              </div>

              <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-950/60">
                <div className="text-xs text-neutral-400 font-medium">Accuracy</div>
                <div className="text-3xl font-bold font-mono text-neutral-200 mt-1">
                  {accuracyPercent}%
                </div>
                <div className="text-[11px] text-neutral-500 mt-1 font-mono">
                  {unattemptedCount} unattempted
                </div>
              </div>
            </div>

            {/* TOPIC VULNERABILITY AUDIT */}
            <div className="mt-8 pt-6 border-t border-neutral-800">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-4 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-rose-400" /> Topic-Wise Vulnerability Diagnosis
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {Object.entries(topicStats).map(([topic, stat]) => {
                  const pct = Math.round((stat.correct / stat.total) * 100);
                  const isSafe = pct >= 70;
                  return (
                    <div
                      key={topic}
                      className={`p-3.5 rounded-xl border ${
                        isSafe
                          ? 'border-emerald-500/30 bg-emerald-950/10'
                          : 'border-amber-500/30 bg-amber-950/10'
                      }`}
                    >
                      <div className="text-xs font-bold text-neutral-200 line-clamp-1">{topic}</div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs font-mono font-bold text-neutral-300">
                          {stat.correct} / {stat.total}
                        </span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            isSafe
                              ? 'bg-emerald-500/20 text-emerald-300'
                              : 'bg-amber-500/20 text-amber-300'
                          }`}
                        >
                          {isSafe ? 'Mastered' : 'Vulnerable'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* QUESTION-BY-QUESTION AUDIT */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-300 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-neutral-400" /> Complete Question-By-Question Analysis ({examLength})
            </h3>

            {activeQuestions.map((q, idx) => {
              const userAns = userAnswers[q.id];
              const isCorrect = userAns === q.correctOption;
              const isSkipped = !userAns;

              return (
                <div
                  key={q.id}
                  className={`rounded-xl border p-5 transition-all ${
                    isCorrect
                      ? 'border-emerald-500/30 bg-emerald-950/10'
                      : isSkipped
                      ? 'border-neutral-800 bg-neutral-900/60'
                      : 'border-rose-500/30 bg-rose-950/10'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 border-b border-neutral-800/80 pb-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-neutral-800 text-neutral-300">
                        Q{idx + 1}
                      </span>
                      <span className="text-xs font-mono text-neutral-400">{q.coreArticle}</span>
                    </div>

                    <div className="text-xs font-mono">
                      {isCorrect && (
                        <span className="text-emerald-400 font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> +2.00 (Correct)
                        </span>
                      )}
                      {!isCorrect && !isSkipped && (
                        <span className="text-rose-400 font-bold flex items-center gap-1">
                          <XCircle className="w-3.5 h-3.5" /> -0.66 (Incorrect)
                        </span>
                      )}
                      {isSkipped && (
                        <span className="text-neutral-500 font-bold">0.00 (Unattempted)</span>
                      )}
                    </div>
                  </div>

                  <h4 className="text-sm font-medium text-neutral-100 leading-relaxed">{q.question}</h4>

                  {/* USER VS CORRECT KEY */}
                  <div className="grid grid-cols-2 gap-3 mt-3 text-xs font-mono">
                    <div className="p-2 rounded bg-neutral-950 border border-neutral-800 text-neutral-300">
                      Your Answer: <strong className={isCorrect ? 'text-emerald-400' : 'text-rose-400'}>{userAns || 'None (Skipped)'}</strong>
                    </div>
                    <div className="p-2 rounded bg-neutral-950 border border-neutral-800 text-emerald-400 font-bold">
                      Correct Key: <strong>Option ({q.correctOption})</strong>
                    </div>
                  </div>

                  {/* EXPLANATION & TRAP NOTE */}
                  <div className="mt-3 p-3 rounded-lg border border-neutral-800/80 bg-neutral-950/80 text-xs text-neutral-300 leading-relaxed">
                    <div className="text-[10px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1 mb-1">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-400" /> Why Examiners Trap Candidates Here:
                    </div>
                    <p className="text-amber-200/90">{q.trapExplanation}</p>
                    <p className="mt-2 text-neutral-400 border-t border-neutral-800/60 pt-2">
                      <strong>Legal Analysis:</strong> {q.detailedAnalysis}
                    </p>
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
