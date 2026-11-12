import React, { useState } from 'react';
import {
  CheckSquare,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  Award,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { QUIZ_QUESTIONS } from '../../data/quizData';
import type { QuizQuestion } from '../../types/constitution';

export const QuizMasteryView: React.FC = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [answeredCount, setAnsweredCount] = useState<number>(0);

  const filteredQuestions = QUIZ_QUESTIONS.filter((q) => {
    if (selectedDifficulty === 'All') return true;
    return q.difficulty === selectedDifficulty;
  });

  const currentQ: QuizQuestion = filteredQuestions[currentIndex] || filteredQuestions[0];

  const handleSelectOption = (idx: number) => {
    if (hasAnswered) return;
    setSelectedOption(idx);
    setHasAnswered(true);
    setAnsweredCount((prev) => prev + 1);
    if (idx === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setHasAnswered(false);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setHasAnswered(false);
    setScore(0);
    setAnsweredCount(0);
  };

  const difficulties = ['All', 'Foundational', 'Intermediate', 'Judiciary/UPSC Level'];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <CheckSquare className="w-5 h-5 text-[var(--accent)]" />
            <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Active Recall Mastery Quiz
            </h1>
            <span className="text-xs px-2 py-0.5 rounded font-mono bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
              Conceptual & Case-Law Drills
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            Test and fortify your constitutional retention with high-yield conceptual dilemmas.
          </p>
        </div>

        {/* Score Pill */}
        <div className="flex items-center gap-3">
          <div className="px-3.5 py-1.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] font-mono text-xs flex items-center gap-2">
            <Award className="w-4 h-4 text-[var(--gold)]" />
            <span>Score: <strong className="text-[var(--accent)]">{score}</strong> / {answeredCount}</span>
          </div>
          <button
            onClick={handleReset}
            title="Reset Quiz"
            className="p-2 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Difficulty Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {difficulties.map((diff) => (
          <button
            key={diff}
            onClick={() => {
              setSelectedDifficulty(diff);
              setCurrentIndex(0);
              setSelectedOption(null);
              setHasAnswered(false);
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
              selectedDifficulty === diff
                ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold shadow-sm'
                : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
            }`}
          >
            {diff}
          </button>
        ))}
      </div>

      {/* Question Card */}
      {currentQ ? (
        <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col gap-6">
          {/* Question Metadata */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-[var(--text-muted)]">
              Question {currentIndex + 1} of {filteredQuestions.length}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
                {currentQ.topic}
              </span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--bg-base)] text-[var(--gold)] border border-[var(--border-subtle)]">
                {currentQ.difficulty}
              </span>
            </div>
          </div>

          {/* Question Text */}
          <h2 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] leading-relaxed">
            {currentQ.question}
          </h2>

          {/* Options List */}
          <div className="flex flex-col gap-3">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentQ.correctIndex;

              let btnStyle = 'bg-[var(--bg-surface-elevated)] border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--border-strong)]';

              if (hasAnswered) {
                if (isCorrect) {
                  btnStyle = 'bg-[var(--emerald)]/10 border-[var(--emerald)] text-[var(--emerald)] font-bold';
                } else if (isSelected && !isCorrect) {
                  btnStyle = 'bg-[var(--crimson)]/10 border-[var(--crimson)] text-[var(--crimson)]';
                } else {
                  btnStyle = 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-muted)] opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  disabled={hasAnswered}
                  onClick={() => handleSelectOption(idx)}
                  className={`p-4 rounded-xl border text-left flex items-start gap-3 transition-all ${btnStyle}`}
                >
                  <span className="w-6 h-6 rounded-lg bg-[var(--bg-base)] font-mono font-bold text-xs flex items-center justify-center shrink-0 border border-[var(--border-subtle)]">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="text-sm leading-relaxed flex-1">
                    {opt}
                  </span>
                  {hasAnswered && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-[var(--emerald)] shrink-0 mt-0.5" />
                  )}
                  {hasAnswered && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-[var(--crimson)] shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Rationale & Explanation Banner upon Answering */}
          {hasAnswered && (
            <div className="p-5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex flex-col gap-2.5 animate-fadeIn">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[var(--gold)]" />
                <span className="text-xs font-semibold font-mono uppercase tracking-wider text-[var(--text-primary)]">
                  Constitutional Rationale & Authority
                </span>
                <span className="text-xs font-mono text-[var(--accent)] ml-auto">
                  Ref: {currentQ.articleRef}
                </span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Bottom Next Navigation */}
          <div className="flex items-center justify-end pt-2 border-t border-[var(--border-subtle)]">
            {currentIndex < filteredQuestions.length - 1 ? (
              <button
                disabled={!hasAnswered}
                onClick={handleNext}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all ${
                  hasAnswered
                    ? 'bg-[var(--accent)] text-[var(--accent-contrast)] shadow-sm hover:opacity-90'
                    : 'bg-[var(--bg-base)] text-[var(--text-muted)] cursor-not-allowed border border-[var(--border-subtle)]'
                }`}
              >
                <span>NEXT QUESTION</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[var(--emerald)] font-bold">
                  All Questions Completed!
                </span>
                <button
                  onClick={handleReset}
                  className="px-4 py-2 rounded-xl bg-[var(--accent)] text-[var(--accent-contrast)] font-mono text-xs font-bold"
                >
                  Restart Quiz
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="p-12 text-center text-sm font-mono text-[var(--text-muted)] bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-subtle)]">
          No questions found under this filter.
        </div>
      )}
    </div>
  );
};
