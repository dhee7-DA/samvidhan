import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Timer,
  CheckCircle2,
  AlertCircle,
  Clock,
  Award,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  Bookmark,
  Send,
  HelpCircle,
  Eye,
  Sliders,
  Play,
  Pause,
  Filter,
  BarChart3,
  XCircle,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  BookOpen
} from 'lucide-react';
import {
  FIFTEEN_DAY_BOOTCAMP_DATA,
  type BootcampDay,
  type BootcampMCQ
} from '../../data/bootcamp';
import { recordMistake, recordSuccess } from '../../services/mistakesService';

interface QuestionState {
  answered: boolean;
  selectedOption: number | null;
  markedForReview: boolean;
  visited: boolean;
}

export const MockExamSimulatorView: React.FC = () => {
  // Setup State
  const [examStarted, setExamStarted] = useState(false);
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [selectedDay, setSelectedDay] = useState<number | 'all'>('all');
  const [questionCount, setQuestionCount] = useState<number>(100);
  const [durationMinutes, setDurationMinutes] = useState<number>(60);

  // Active Exam State
  const [examQuestions, setExamQuestions] = useState<Array<BootcampMCQ & { dayNumber: number; dayTitle: string }>>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questionStates, setQuestionStates] = useState<Record<number, QuestionState>>({});
  const [secondsRemaining, setSecondsRemaining] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);

  // Result Review State
  const [reviewFilter, setReviewFilter] = useState<'all' | 'incorrect' | 'correct' | 'unattempted'>('all');

  const timerRef = useRef<any>(null);

  // Start Exam
  const handleStartExam = () => {
    let pool: Array<BootcampMCQ & { dayNumber: number; dayTitle: string }> = [];

    if (selectedDay === 'all') {
      FIFTEEN_DAY_BOOTCAMP_DATA.forEach((day) => {
        day.mcqs.forEach((m) => {
          pool.push({
            ...m,
            dayNumber: day.dayNumber,
            dayTitle: day.title,
          });
        });
      });
      // Shuffle pool
      pool = [...pool].sort(() => 0.5 - Math.random()).slice(0, questionCount);
    } else {
      const day = FIFTEEN_DAY_BOOTCAMP_DATA.find((d) => d.dayNumber === selectedDay);
      if (day) {
        pool = day.mcqs.map((m) => ({
          ...m,
          dayNumber: day.dayNumber,
          dayTitle: day.title,
        })).slice(0, questionCount);
      }
    }

    if (pool.length === 0) return;

    // Initialize question states
    const initialStates: Record<number, QuestionState> = {};
    pool.forEach((_, idx) => {
      initialStates[idx] = {
        answered: false,
        selectedOption: null,
        markedForReview: false,
        visited: idx === 0,
      };
    });

    setExamQuestions(pool);
    setQuestionStates(initialStates);
    setCurrentIndex(0);
    setSecondsRemaining(durationMinutes * 60);
    setIsPaused(false);
    setExamSubmitted(false);
    setExamStarted(true);
  };

  // Timer Effect
  useEffect(() => {
    if (!examStarted || examSubmitted || isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [examStarted, examSubmitted, isPaused]);

  // Handle Option Select
  const handleSelectOption = (optIdx: number) => {
    setQuestionStates((prev) => ({
      ...prev,
      [currentIndex]: {
        ...prev[currentIndex],
        answered: true,
        selectedOption: optIdx,
        visited: true,
      },
    }));
  };

  // Clear Response
  const handleClearResponse = () => {
    setQuestionStates((prev) => ({
      ...prev,
      [currentIndex]: {
        ...prev[currentIndex],
        answered: false,
        selectedOption: null,
      },
    }));
  };

  // Toggle Mark For Review
  const handleToggleMarkForReview = () => {
    setQuestionStates((prev) => ({
      ...prev,
      [currentIndex]: {
        ...prev[currentIndex],
        markedForReview: !prev[currentIndex]?.markedForReview,
        visited: true,
      },
    }));
  };

  // Navigation
  const handleJumpToQuestion = (idx: number) => {
    setQuestionStates((prev) => ({
      ...prev,
      [idx]: {
        ...(prev[idx] || { answered: false, selectedOption: null, markedForReview: false }),
        visited: true,
      },
    }));
    setCurrentIndex(idx);
  };

  const handleNext = () => {
    if (currentIndex < examQuestions.length - 1) {
      handleJumpToQuestion(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      handleJumpToQuestion(currentIndex - 1);
    }
  };

  // Submit Exam
  const handleSubmitExam = () => {
    // Record all results into Mistakes Bank
    examQuestions.forEach((q, idx) => {
      const state = questionStates[idx];
      if (state && state.selectedOption !== null) {
        if (state.selectedOption !== q.correctIndex) {
          recordMistake({
            id: `mock-${q.dayNumber}-${q.id}`,
            questionId: q.id,
            dayNumber: q.dayNumber,
            dayTitle: `${q.dayTitle} (Mock Exam)`,
            round: q.round || 1,
            question: q.question,
            options: q.options,
            correctAnswer: q.correctIndex,
            userAnswer: state.selectedOption,
            explanation: q.explanation,
            statutoryAnchor: q.articleRef,
          });
        } else {
          recordSuccess(`mock-${q.dayNumber}-${q.id}`);
        }
      }
    });

    setExamSubmitted(true);
    setShowSubmitConfirm(false);
  };

  // Calculation Stats
  const currentQ = examQuestions[currentIndex] || null;
  const currentState = questionStates[currentIndex] || {
    answered: false,
    selectedOption: null,
    markedForReview: false,
    visited: true,
  };

  const answeredCount = Object.values(questionStates).filter((s) => s.answered).length;
  const markedCount = Object.values(questionStates).filter((s) => s.markedForReview).length;
  const notAnsweredCount = examQuestions.length - answeredCount;

  // Final Results
  const results = useMemo(() => {
    if (!examSubmitted) return null;

    let correct = 0;
    let incorrect = 0;
    let unattempted = 0;

    examQuestions.forEach((q, idx) => {
      const state = questionStates[idx];
      if (!state || state.selectedOption === null) {
        unattempted++;
      } else if (state.selectedOption === q.correctIndex) {
        correct++;
      } else {
        incorrect++;
      }
    });

    const score = Number((correct * 1.0 - incorrect * 0.25).toFixed(2));
    const maxScore = examQuestions.length;
    const accuracy = correct + incorrect > 0 ? Math.round((correct / (correct + incorrect)) * 100) : 0;
    const timeSpentSeconds = durationMinutes * 60 - secondsRemaining;

    return {
      total: examQuestions.length,
      correct,
      incorrect,
      unattempted,
      score,
      maxScore,
      accuracy,
      timeSpentSeconds,
    };
  }, [examSubmitted, examQuestions, questionStates, durationMinutes, secondsRemaining]);

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      {/* 1. Pre-Exam Configuration Screen */}
      {!examStarted && (
        <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-card border border-border shadow-2xl space-y-8 animate-in fade-in">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider">
              <Timer className="w-3.5 h-3.5" />
              <span>JKPSC PO & Judicial Services Exam Hall</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">
              Constitutional Law Mock Simulator
            </h1>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto">
              Simulate actual competitive exam hall pressure with real-time countdown, strict negative marking (+1.0 / -0.25), and interactive 200-question navigation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4">
            {/* Scope Selection */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block">
                Exam Syllabus Scope
              </label>
              <select
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value === 'all' ? 'all' : parseInt(e.target.value, 10))}
                className="w-full p-3 rounded-xl border border-border bg-muted/30 text-sm font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="all">Full 15-Day Syllabus (Grand Mock)</option>
                {FIFTEEN_DAY_BOOTCAMP_DATA.map((d) => (
                  <option key={d.dayNumber} value={d.dayNumber}>
                    Day {d.dayNumber}: {d.title.split('—')[0]} (200 MCQs)
                  </option>
                ))}
              </select>
            </div>

            {/* Question Count */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block">
                Number of Questions
              </label>
              <select
                value={questionCount}
                onChange={(e) => {
                  const cnt = parseInt(e.target.value, 10);
                  setQuestionCount(cnt);
                  setDurationMinutes(cnt >= 200 ? 120 : cnt >= 100 ? 60 : 30);
                }}
                className="w-full p-3 rounded-xl border border-border bg-muted/30 text-sm font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value={50}>50 Questions (Speed Drill · 30 Mins)</option>
                <option value={100}>100 Questions (Standard Prelims · 60 Mins)</option>
                <option value={200}>200 Questions (Full Marathon Mock · 120 Mins)</option>
              </select>
            </div>
          </div>

          {/* Exam Rules Card */}
          <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-foreground/80 space-y-2">
            <span className="font-bold text-indigo-400 block uppercase tracking-wider">
              Official Examination Protocol:
            </span>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground leading-relaxed">
              <li>Marking: <strong className="text-foreground">+1.0 mark</strong> for each correct answer; <strong className="text-rose-400">-0.25 mark</strong> deducted for incorrect answers.</li>
              <li>Question Palette color-codes unvisited, answered, and marked questions in real time.</li>
              <li>Incorrect responses are automatically registered into your <strong className="text-foreground">Error Notebook</strong> for targeted post-exam remediation.</li>
            </ul>
          </div>

          <button
            onClick={handleStartExam}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-extrabold text-base shadow-lg hover:shadow-indigo-500/25 transition-all flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5 fill-current" />
            <span>Enter Exam Hall & Begin Timer</span>
          </button>
        </div>
      )}

      {/* 2. Active Exam Hall Workspace */}
      {examStarted && !examSubmitted && currentQ && (
        <div className="space-y-4 animate-in fade-in">
          {/* Header Bar */}
          <div className="p-4 rounded-2xl bg-card border border-border flex flex-wrap items-center justify-between gap-4 shadow-sm">
            <div>
              <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider block">
                {selectedDay === 'all' ? 'Full Syllabus Grand Mock' : `Day ${selectedDay} Mock`} · Section {currentQ.round || 1}
              </span>
              <h2 className="text-base md:text-lg font-black text-foreground">
                Question {currentIndex + 1} of {examQuestions.length}
              </h2>
            </div>

            {/* Timer & Controls */}
            <div className="flex items-center gap-3">
              <div
                className={`px-4 py-2 rounded-xl border flex items-center gap-2 font-mono font-black text-sm md:text-base ${
                  secondsRemaining < 300
                    ? 'border-rose-500 bg-rose-500/20 text-rose-400 animate-pulse'
                    : 'border-border bg-muted/40 text-foreground'
                }`}
              >
                <Clock className="w-4 h-4 text-indigo-400" />
                <span>{formatTime(secondsRemaining)}</span>
              </div>

              <button
                onClick={() => setIsPaused(!isPaused)}
                className="p-2 rounded-lg border border-border hover:bg-muted text-muted-foreground transition-colors"
                title={isPaused ? 'Resume Exam' : 'Pause Exam'}
              >
                {isPaused ? <Play className="w-4 h-4 fill-current" /> : <Pause className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setShowSubmitConfirm(true)}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs md:text-sm shadow-sm transition-all flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Exam</span>
              </button>
            </div>
          </div>

          {/* Main Question & Palette Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Left 8 Cols: Question Area */}
            <div className="lg:col-span-8 p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-col justify-between space-y-6 min-h-[480px]">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <span className="text-xs font-semibold text-muted-foreground">
                    Day {currentQ.dayNumber}: {currentQ.dayTitle}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-muted/60 text-muted-foreground">
                    Marking: +1.0 / -0.25
                  </span>
                </div>

                <h3 className="text-base md:text-lg font-bold text-foreground leading-relaxed">
                  {currentQ.question}
                </h3>

                {/* 4 Options */}
                <div className="grid grid-cols-1 gap-3 pt-2">
                  {currentQ.options.map((opt, oIdx) => {
                    const isSelected = currentState.selectedOption === oIdx;
                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleSelectOption(oIdx)}
                        className={`p-4 rounded-xl border text-left text-sm transition-all flex items-start gap-3.5 ${
                          isSelected
                            ? 'border-indigo-500 bg-indigo-500/15 text-indigo-300 font-semibold shadow-sm'
                            : 'border-border/60 hover:border-border hover:bg-muted/30 text-foreground'
                        }`}
                      >
                        <span
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border ${
                            isSelected
                              ? 'border-indigo-500 bg-indigo-500 text-white'
                              : 'border-border text-muted-foreground'
                          }`}
                        >
                          {String.fromCharCode(65 + oIdx)}
                        </span>
                        <span className="leading-snug pt-0.5">{opt}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleToggleMarkForReview}
                    className={`px-3 py-2 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                      currentState.markedForReview
                        ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                        : 'border-border text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Bookmark className="w-3.5 h-3.5" />
                    <span>{currentState.markedForReview ? 'Marked for Review' : 'Mark for Review'}</span>
                  </button>

                  {currentState.selectedOption !== null && (
                    <button
                      onClick={handleClearResponse}
                      className="px-3 py-2 rounded-lg border border-border text-xs font-semibold text-muted-foreground hover:text-rose-400 transition-colors"
                    >
                      Clear Response
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                    className="px-3.5 py-2 rounded-lg border border-border text-xs font-semibold text-foreground hover:bg-muted disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>

                  <button
                    onClick={handleNext}
                    disabled={currentIndex === examQuestions.length - 1}
                    className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1 shadow-sm transition-all"
                  >
                    <span>Save & Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right 4 Cols: 200-Question Interactive Palette */}
            <div className="lg:col-span-4 p-5 rounded-2xl bg-card border border-border shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-border/60 pb-2">
                  <h4 className="text-xs font-extrabold text-foreground uppercase tracking-wider">
                    Question Palette
                  </h4>
                  <span className="text-xs font-mono text-muted-foreground">
                    {answeredCount} / {examQuestions.length} Done
                  </span>
                </div>

                {/* Color Legend */}
                <div className="grid grid-cols-2 gap-2 text-[10px] text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded bg-emerald-500" />
                    <span>Answered ({answeredCount})</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded bg-purple-500" />
                    <span>Marked ({markedCount})</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded bg-rose-500/40" />
                    <span>Not Answered ({notAnsweredCount})</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded bg-muted border border-border" />
                    <span>Not Visited</span>
                  </div>
                </div>

                {/* Palette Grid */}
                <div className="max-h-[340px] overflow-y-auto pr-1">
                  <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-5 gap-1.5">
                    {examQuestions.map((_, idx) => {
                      const state = questionStates[idx] || {
                        answered: false,
                        selectedOption: null,
                        markedForReview: false,
                        visited: false,
                      };

                      let btnStyle = 'bg-muted/40 text-muted-foreground border-border/60';
                      if (idx === currentIndex) {
                        btnStyle = 'ring-2 ring-indigo-500 font-bold';
                      }

                      if (state.markedForReview && state.answered) {
                        btnStyle += ' bg-indigo-600 text-white';
                      } else if (state.markedForReview) {
                        btnStyle += ' bg-purple-600 text-white';
                      } else if (state.answered) {
                        btnStyle += ' bg-emerald-600 text-white';
                      } else if (state.visited) {
                        btnStyle += ' bg-rose-500/20 text-rose-300 border-rose-500/40';
                      }

                      return (
                        <button
                          key={idx}
                          onClick={() => handleJumpToQuestion(idx)}
                          className={`h-8 rounded-lg border text-xs font-semibold flex items-center justify-center transition-all ${btnStyle}`}
                        >
                          {idx + 1}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Submit Trigger */}
              <button
                onClick={() => setShowSubmitConfirm(true)}
                className="w-full py-2.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-bold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Complete Test & View Score</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Submit Confirmation Dialog */}
      {showSubmitConfirm && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="max-w-md w-full p-6 rounded-2xl bg-card border border-border shadow-2xl space-y-4">
            <h3 className="text-lg font-black text-foreground">
              Are you sure you want to submit?
            </h3>
            <p className="text-xs text-muted-foreground">
              Once submitted, your final score will be calculated with -0.25 negative marking, and all mistakes will be recorded into your diagnostic bank.
            </p>

            <div className="grid grid-cols-3 gap-2 py-2 text-center text-xs">
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <span className="block font-bold text-emerald-400 text-lg">{answeredCount}</span>
                <span className="text-muted-foreground text-[10px]">Answered</span>
              </div>
              <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20">
                <span className="block font-bold text-rose-400 text-lg">{notAnsweredCount}</span>
                <span className="text-muted-foreground text-[10px]">Unanswered</span>
              </div>
              <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <span className="block font-bold text-purple-400 text-lg">{markedCount}</span>
                <span className="text-muted-foreground text-[10px]">Marked</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setShowSubmitConfirm(false)}
                className="px-4 py-2 rounded-lg border border-border text-xs font-semibold text-muted-foreground hover:text-foreground"
              >
                Return to Exam
              </button>
              <button
                onClick={handleSubmitExam}
                className="px-5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md transition-all"
              >
                Confirm & Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. Post-Exam Scorecard & Review View */}
      {examSubmitted && results && (
        <div className="space-y-6 animate-in fade-in">
          {/* Top Scorecard Card */}
          <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-card border border-indigo-500/30 shadow-xl space-y-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block mb-1">
                  Official Exam Result
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-foreground">
                  Performance Scorecard
                </h2>
              </div>
              <button
                onClick={() => setExamStarted(false)}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Take Another Mock Exam</span>
              </button>
            </div>

            {/* Score Metric Cards */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-card/60 border border-border/60">
                <span className="text-xs text-muted-foreground font-medium block">Net Score</span>
                <div className="text-2xl md:text-3xl font-black text-foreground mt-0.5">
                  {results.score} <span className="text-xs text-muted-foreground font-normal">/ {results.maxScore}</span>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                <span className="text-xs text-emerald-400 font-medium block">Correct (+1.0)</span>
                <div className="text-2xl md:text-3xl font-black text-emerald-400 mt-0.5">
                  {results.correct}
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20">
                <span className="text-xs text-rose-400 font-medium block">Incorrect (-0.25)</span>
                <div className="text-2xl md:text-3xl font-black text-rose-400 mt-0.5">
                  {results.incorrect}
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                <span className="text-xs text-purple-400 font-medium block">Accuracy Rate</span>
                <div className="text-2xl md:text-3xl font-black text-purple-400 mt-0.5">
                  {results.accuracy}%
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-muted/40 border border-border/60">
                <span className="text-xs text-muted-foreground font-medium block">Time Taken</span>
                <div className="text-xl md:text-2xl font-black text-foreground mt-1 font-mono">
                  {formatTime(results.timeSpentSeconds)}
                </div>
              </div>
            </div>
          </div>

          {/* Filter Bar for Review */}
          <div className="p-4 rounded-xl bg-card border border-border flex items-center justify-between">
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5" /> Filter Review:
            </span>
            <div className="inline-flex rounded-lg border border-border/60 bg-muted/30 p-0.5 text-xs">
              <button
                onClick={() => setReviewFilter('all')}
                className={`px-3 py-1 rounded-md font-medium transition-colors ${
                  reviewFilter === 'all' ? 'bg-card text-foreground font-bold shadow-sm' : 'text-muted-foreground'
                }`}
              >
                All ({examQuestions.length})
              </button>
              <button
                onClick={() => setReviewFilter('incorrect')}
                className={`px-3 py-1 rounded-md font-medium transition-colors ${
                  reviewFilter === 'incorrect' ? 'bg-rose-500/20 text-rose-300 font-bold' : 'text-muted-foreground'
                }`}
              >
                Incorrect ({results.incorrect})
              </button>
              <button
                onClick={() => setReviewFilter('correct')}
                className={`px-3 py-1 rounded-md font-medium transition-colors ${
                  reviewFilter === 'correct' ? 'bg-emerald-500/20 text-emerald-300 font-bold' : 'text-muted-foreground'
                }`}
              >
                Correct ({results.correct})
              </button>
              <button
                onClick={() => setReviewFilter('unattempted')}
                className={`px-3 py-1 rounded-md font-medium transition-colors ${
                  reviewFilter === 'unattempted' ? 'bg-muted text-foreground font-bold' : 'text-muted-foreground'
                }`}
              >
                Skipped ({results.unattempted})
              </button>
            </div>
          </div>

          {/* Detailed Question Review List */}
          <div className="space-y-4">
            {examQuestions.map((q, idx) => {
              const state = questionStates[idx];
              const isCorrect = state?.selectedOption === q.correctIndex;
              const isAttempted = state?.selectedOption !== null && state?.selectedOption !== undefined;

              if (reviewFilter === 'correct' && !isCorrect) return null;
              if (reviewFilter === 'incorrect' && (!isAttempted || isCorrect)) return null;
              if (reviewFilter === 'unattempted' && isAttempted) return null;

              return (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all ${
                    !isAttempted
                      ? 'border-border/60 bg-card/60'
                      : isCorrect
                      ? 'border-emerald-500/30 bg-emerald-950/10'
                      : 'border-rose-500/30 bg-rose-950/10'
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-border/40 pb-2.5 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-foreground font-mono">
                        Q{idx + 1}.
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Day {q.dayNumber} · Round {q.round || 1}
                      </span>
                    </div>

                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                        !isAttempted
                          ? 'bg-muted text-muted-foreground'
                          : isCorrect
                          ? 'bg-emerald-500/20 text-emerald-300'
                          : 'bg-rose-500/20 text-rose-300'
                      }`}
                    >
                      {!isAttempted ? 'Skipped (0.0)' : isCorrect ? '+1.0 Correct' : '-0.25 Incorrect'}
                    </span>
                  </div>

                  <h4 className="text-sm md:text-base font-bold text-foreground leading-snug mb-3">
                    {q.question}
                  </h4>

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                    {q.options.map((opt, oIdx) => {
                      const isOptionCorrect = oIdx === q.correctIndex;
                      const isOptionSelected = state?.selectedOption === oIdx;

                      let style = 'border-border/40 bg-muted/20 text-muted-foreground';
                      if (isOptionCorrect) {
                        style = 'border-emerald-500/60 bg-emerald-500/15 text-emerald-300 font-bold';
                      } else if (isOptionSelected) {
                        style = 'border-rose-500/60 bg-rose-500/15 text-rose-300 line-through';
                      }

                      return (
                        <div key={oIdx} className={`p-2.5 rounded-lg border text-xs flex items-start gap-2 ${style}`}>
                          <span className="font-bold">{String.fromCharCode(65 + oIdx)}.</span>
                          <span className="leading-tight">{opt}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Statutory Rationale */}
                  <div className="p-3 rounded-xl bg-card border border-border/60 text-xs text-foreground/80 font-mono leading-relaxed">
                    <span className="font-bold text-indigo-400 mr-1.5 font-sans">
                      Statutory Analysis:
                    </span>
                    {q.explanation}
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
