import React from 'react';
import {
  Award,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Sparkles,
  BookOpen,
  Scale,
  TrendingUp,
  FileText,
  RotateCcw,
  Check,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import type { AnswerEvaluationResult } from '../../types/mainsQuestionTypes';

interface AnswerEvaluationCardProps {
  evaluation: AnswerEvaluationResult;
  onReevaluate?: () => void;
  onClose?: () => void;
}

export const AnswerEvaluationCard: React.FC<AnswerEvaluationCardProps> = ({
  evaluation,
  onReevaluate,
  onClose
}) => {
  const [showFullRubric, setShowFullRubric] = React.useState(false);

  // Color mapping based on score percentage
  const isHigh = evaluation.percentage >= 75;
  const isMedium = evaluation.percentage >= 50 && evaluation.percentage < 75;

  const scoreBadgeBg = isHigh
    ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
    : isMedium
    ? 'bg-blue-500/15 text-blue-400 border-blue-500/30'
    : 'bg-amber-500/15 text-amber-400 border-amber-500/30';

  return (
    <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] overflow-hidden shadow-lg animate-fadeIn space-y-4 p-5">
      {/* Header with Score and Grade */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">
              <Award className="w-5 h-5" />
            </span>
            <div>
              <h4 className="text-sm font-bold text-[var(--text-primary)]">
                Automated Mains Answer Diagnostic Report
              </h4>
              <p className="text-xs text-[var(--text-muted)]">
                Calibrated against official Judicial & Prosecution evaluation rubrics
              </p>
            </div>
          </div>
        </div>

        {/* Score & Tier Badge */}
        <div className="flex items-center gap-3 self-start sm:self-auto">
          <div className="text-right">
            <div className="flex items-baseline gap-1 justify-end font-mono">
              <span className="text-2xl font-black text-[var(--text-primary)]">
                {evaluation.score}
              </span>
              <span className="text-xs text-[var(--text-muted)]">
                / {evaluation.maxScore} Marks
              </span>
            </div>
            <div className={`text-[10px] font-bold px-2 py-0.5 rounded-full border inline-block mt-0.5 ${scoreBadgeBg}`}>
              {evaluation.gradeTier} ({evaluation.percentage}%)
            </div>
          </div>

          {onReevaluate && (
            <button
              type="button"
              onClick={onReevaluate}
              title="Re-run Diagnostic Scan"
              className="p-2 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-all"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Word Count & Pacing Compliance Bar */}
      <div className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-[var(--accent-primary)]" />
          <span className="font-semibold text-[var(--text-primary)]">
            Draft Length: {evaluation.wordCount} Words
          </span>
          <span className="text-[var(--text-muted)]">
            (≈ {(evaluation.wordCount / 200).toFixed(1)} handwritten pages)
          </span>
        </div>
        <div className="text-[11px] text-[var(--text-muted)] italic">
          {evaluation.wordCountFeedback}
        </div>
      </div>

      {/* Grid: Bare Act Anchors + Landmark Precedents Found/Missing */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Bare Act Articles */}
        <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[var(--text-primary)] flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-blue-400" />
              Statutory Anchors (Articles/Sections)
            </span>
            <span className="text-[10px] font-mono text-[var(--text-muted)]">
              {evaluation.articlesChecked.filter((a) => a.matched).length} / {evaluation.articlesChecked.length} Detected
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {evaluation.articlesChecked.length === 0 ? (
              <span className="text-xs text-[var(--text-muted)] italic">No specific article constraints.</span>
            ) : (
              evaluation.articlesChecked.map((a, i) => (
                <span
                  key={i}
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-md border flex items-center gap-1 ${
                    a.matched
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                      : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                  }`}
                >
                  {a.matched ? <Check className="w-2.5 h-2.5" /> : <XCircle className="w-2.5 h-2.5" />}
                  {a.article}
                </span>
              ))
            )}
          </div>
        </div>

        {/* Benchmark Precedents */}
        <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[var(--text-primary)] flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-purple-400" />
              Benchmark Precedents
            </span>
            <span className="text-[10px] font-mono text-[var(--text-muted)]">
              {evaluation.citationsChecked.filter((c) => c.matched).length} / {evaluation.citationsChecked.length} Cited
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {evaluation.citationsChecked.length === 0 ? (
              <span className="text-xs text-[var(--text-muted)] italic">General doctrinal analysis question.</span>
            ) : (
              evaluation.citationsChecked.map((c, i) => (
                <span
                  key={i}
                  className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border flex items-center gap-1 truncate max-w-full ${
                    c.matched
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                      : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                  }`}
                  title={c.citation}
                >
                  {c.matched ? <Check className="w-2.5 h-2.5 shrink-0" /> : <XCircle className="w-2.5 h-2.5 shrink-0" />}
                  <span className="truncate">{c.citation}</span>
                </span>
              ))
            )}
          </div>
        </div>
      </div>

      {/* 4-Step Blueprint Anatomy Checklist */}
      <div className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
        <span className="text-xs font-bold text-[var(--text-primary)] flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          4-Step Mains Blueprint Anatomy
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          <div className="flex items-center gap-1.5">
            {evaluation.blueprintStepsDetected.step1Intro ? (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            ) : (
              <XCircle className="w-3.5 h-3.5 text-[var(--text-muted)] shrink-0" />
            )}
            <span className={evaluation.blueprintStepsDetected.step1Intro ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)]'}>
              1. Intro & Anchors
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {evaluation.blueprintStepsDetected.step2DoctrinalCore ? (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            ) : (
              <XCircle className="w-3.5 h-3.5 text-[var(--text-muted)] shrink-0" />
            )}
            <span className={evaluation.blueprintStepsDetected.step2DoctrinalCore ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)]'}>
              2. Doctrinal Core
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {evaluation.blueprintStepsDetected.step3Precedents ? (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            ) : (
              <XCircle className="w-3.5 h-3.5 text-[var(--text-muted)] shrink-0" />
            )}
            <span className={evaluation.blueprintStepsDetected.step3Precedents ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)]'}>
              3. Case Law Application
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {evaluation.blueprintStepsDetected.step4Conclusion ? (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            ) : (
              <XCircle className="w-3.5 h-3.5 text-[var(--text-muted)] shrink-0" />
            )}
            <span className={evaluation.blueprintStepsDetected.step4Conclusion ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)]'}>
              4. Concluding Synthesis
            </span>
          </div>
        </div>
      </div>

      {/* Strengths & Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
        {/* Strengths */}
        {evaluation.strengths.length > 0 && (
          <div className="p-3.5 rounded-xl bg-emerald-500/5 border border-emerald-500/20 space-y-1.5">
            <span className="font-bold text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Observed Strengths
            </span>
            <ul className="space-y-1 text-[var(--text-muted)] list-disc list-inside">
              {evaluation.strengths.map((s, idx) => (
                <li key={idx} className="leading-relaxed">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Actionable Recommendations */}
        <div className="p-3.5 rounded-xl bg-amber-500/5 border border-amber-500/20 space-y-1.5">
          <span className="font-bold text-amber-400 flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" />
            High-Yield Score Boosters (+1 to +2.5 Marks)
          </span>
          <ul className="space-y-1 text-[var(--text-muted)] list-disc list-inside">
            {evaluation.recommendations.map((r, idx) => (
              <li key={idx} className="leading-relaxed">
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Expandable Rubric Details */}
      {evaluation.rubricBreakdown.length > 0 && (
        <div className="pt-1">
          <button
            type="button"
            onClick={() => setShowFullRubric(!showFullRubric)}
            className="w-full py-2 px-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--text-primary)] flex items-center justify-between transition-colors"
          >
            <span>Examiner Scoring Rubric Breakdown ({evaluation.rubricBreakdown.length} Dimensions)</span>
            {showFullRubric ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {showFullRubric && (
            <div className="mt-2 space-y-2 p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] animate-fadeIn">
              {evaluation.rubricBreakdown.map((r, i) => (
                <div key={i} className="flex items-start justify-between gap-3 text-xs pb-2 border-b border-[var(--border-subtle)] last:border-0 last:pb-0">
                  <div className="space-y-0.5">
                    <p className="font-medium text-[var(--text-primary)]">{r.criterion}</p>
                    <p className="text-[11px] text-[var(--text-muted)] italic">{r.feedback}</p>
                  </div>
                  <div className="font-mono font-bold shrink-0 text-right">
                    <span className="text-[var(--accent-primary)]">{r.awardedMarks}</span>
                    <span className="text-[var(--text-muted)]"> / {r.maxMarks}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
