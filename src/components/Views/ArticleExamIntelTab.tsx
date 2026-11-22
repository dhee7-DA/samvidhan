import React, { useState } from 'react';
import {
  AlertTriangle,
  Target,
  FileText,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  Sparkles,
  ExternalLink,
  ShieldAlert,
  Flame,
  Check,
  Award,
  Scale,
  Layers
} from 'lucide-react';
import {
  lookupExamIntelForArticle,
  type ArticleExamIntel,
  type PrelimsMcq
} from '../../data/articleExamIntelData';
import { JKPSC_MAINS_PYQ_DATA } from '../../data/pyqData';
import { MAINS_MASTER_QUESTIONS } from '../../data/mainsQuestionsData';
import { useTheme } from '../../context/ThemeContext';

interface Props {
  articleNumber: string;
  articleTitle: string;
  part: string;
  onOpenBodiesLab?: () => void;
}

export const ArticleExamIntelTab: React.FC<Props> = ({
  articleNumber,
  articleTitle,
  part,
  onOpenBodiesLab
}) => {
  const { setActiveTab } = useTheme();
  const intel = lookupExamIntelForArticle(articleNumber);

  // MCQs state
  const [selectedOptions, setSelectedOptions] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [revealedExplanations, setRevealedExplanations] = useState<Record<string, boolean>>({});

  // Related PYQs from global database
  const matchingGlobalPyqs = JKPSC_MAINS_PYQ_DATA.filter((q) =>
    q.relevantArticles.some(
      (a) =>
        a.toLowerCase().includes(`art. ${articleNumber.toLowerCase()}`) ||
        a.toLowerCase().includes(`article ${articleNumber.toLowerCase()}`) ||
        a.toLowerCase() === `art ${articleNumber.toLowerCase()}`
    )
  );

  const matchingMainsQuestions = MAINS_MASTER_QUESTIONS.filter((mq) =>
    mq.hoverIntel.coreArticles.some(
      (ca) =>
        ca.toLowerCase().includes(`art. ${articleNumber.toLowerCase()}`) ||
        ca.toLowerCase().includes(`article ${articleNumber.toLowerCase()}`) ||
        ca.toLowerCase() === `art ${articleNumber.toLowerCase()}`
    )
  );

  const handleSelectOption = (mcqId: string, optKey: 'A' | 'B' | 'C' | 'D') => {
    setSelectedOptions((prev) => ({ ...prev, [mcqId]: optKey }));
    setRevealedExplanations((prev) => ({ ...prev, [mcqId]: true }));
  };

  const isConstitutionalBodyArticle = [
    '76',
    '148',
    '165',
    '279A',
    '280',
    '315',
    '316',
    '317',
    '318',
    '319',
    '320',
    '324',
    '338',
    '338A',
    '338B',
    '350B'
  ].includes(articleNumber.toUpperCase());

  const isWritOrEmergencyArticle = ['32', '226', '352', '356', '358', '359', '360'].includes(
    articleNumber.toUpperCase()
  );

  const isFederalArticle = [
    '245',
    '246',
    '248',
    '249',
    '250',
    '251',
    '252',
    '253',
    '254',
    '255'
  ].includes(articleNumber.toUpperCase());

  return (
    <div className="flex flex-col gap-6 animate-fadeIn">
      {/* Top Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-rose-500/10 via-[var(--bg-surface-elevated)] to-amber-500/10 border-2 border-[var(--border-strong)] shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start sm:items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-500 flex items-center justify-center shrink-0 border border-rose-500/30">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="text-[10px] font-mono font-extrabold uppercase px-2.5 py-0.5 rounded bg-rose-500 text-white">
                Exam Scoring Intel
              </span>
              <span className="text-xs font-mono font-bold text-[var(--text-muted)]">
                Negative Marking Traps • Prelims MCQs • Mains Blueprints
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
              Article {articleNumber}: How Examiners Frame Questions
            </h3>
          </div>
        </div>

        {intel && (
          <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
            <span className="text-xs font-mono font-extrabold px-3 py-1 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/40">
              {intel.yieldLevel}
            </span>
          </div>
        )}
      </div>

      {/* Constitutional Body Fast-Track Link if applicable */}
      {isConstitutionalBodyArticle && (
        <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fadeIn">
          <div className="flex items-center gap-2.5">
            <ShieldAlert className="w-5 h-5 text-purple-400 shrink-0" />
            <div className="text-xs">
              <span className="font-bold text-[var(--text-primary)]">
                Article {articleNumber} defines a Constitutional Authority.
              </span>
              <p className="text-[var(--text-secondary)] mt-0.5">
                Questions heavily test: Appointment Collegium vs Removal Procedure (*Impeachment vs Pleasure*) vs Re-employment bar.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              if (onOpenBodiesLab) {
                onOpenBodiesLab();
              } else {
                setActiveTab('constitutional-bodies');
              }
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-600 text-white text-xs font-mono font-bold hover:bg-purple-700 transition-all shrink-0 shadow-sm"
          >
            <span>Open Bodies Comparison Lab &rarr;</span>
          </button>
        </div>
      )}

      {/* Writs & Emergency Fast-Track Link if applicable */}
      {isWritOrEmergencyArticle && (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fadeIn">
          <div className="flex items-center gap-2.5">
            <Scale className="w-5 h-5 text-rose-400 shrink-0" />
            <div className="text-xs">
              <span className="font-bold text-[var(--text-primary)]">
                Article {articleNumber} is part of the Constitutional Writs & Emergency architecture.
              </span>
              <p className="text-[var(--text-secondary)] mt-0.5">
                Questions heavily test: Locus Standi, lies against private individuals (Habeas Corpus), 1-month approval (Art 352), and non-suspendable rights (Arts 20 & 21).
              </p>
            </div>
          </div>
          <button
            onClick={() => setActiveTab('writs-emergency')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-600 text-white text-xs font-mono font-bold hover:bg-rose-700 transition-all shrink-0 shadow-sm"
          >
            <span>Open Writs & Emergency War Room &rarr;</span>
          </button>
        </div>
      )}

      {/* 7th Schedule & Legislative Relations Fast-Track Link if applicable */}
      {isFederalArticle && (
        <div className="p-4 rounded-xl bg-sky-500/10 border border-sky-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fadeIn">
          <div className="flex items-center gap-2.5">
            <Layers className="w-5 h-5 text-sky-400 shrink-0" />
            <div className="text-xs">
              <span className="font-bold text-[var(--text-primary)]">
                Article {articleNumber} governs Union-State Legislative Relations (Articles 245–255).
              </span>
              <p className="text-[var(--text-secondary)] mt-0.5">
                Questions heavily test: The 5 Gateways into State List (Arts 249, 250, 252, 253, 356) and Article 254 Presidential Assent Safe Harbour.
              </p>
            </div>
          </div>
          <button
            onClick={() => setActiveTab('federal-relations')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 text-white text-xs font-mono font-bold hover:bg-sky-700 transition-all shrink-0 shadow-sm"
          >
            <span>Open 7th Schedule & Relations Lab &rarr;</span>
          </button>
        </div>
      )}

      {/* SECTION 1: PRELIMS EXAMINER TRAP BUSTERS */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-rose-500 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-500" />
            <span>Examiner Negative Marking Traps ({intel ? intel.traps.length : 1} Traps Identified)</span>
          </h4>
          <span className="text-[10px] font-mono text-[var(--text-muted)]">
            High-Risk False Statements in Prelims
          </span>
        </div>

        {intel && intel.traps.length > 0 ? (
          <div className="grid grid-cols-1 gap-3.5">
            {intel.traps.map((trap, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[var(--bg-base)] border border-rose-500/30 hover:border-rose-500/60 transition-all flex flex-col gap-2.5 shadow-xs"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-extrabold uppercase px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 border border-rose-500/30">
                      TRAP #{idx + 1}
                    </span>
                    <span className="text-xs font-mono text-[var(--accent)] font-bold">
                      {trap.provisoOrClause}
                    </span>
                  </div>
                  {trap.landmarkCase && (
                    <span className="text-[10px] font-mono text-[var(--text-muted)] italic">
                      {trap.landmarkCase}
                    </span>
                  )}
                </div>

                {/* The Trap Statement */}
                <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-xs font-mono text-rose-300 flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-rose-400">The False Trap Statement: </strong>
                    &ldquo;{trap.trapStatement}&rdquo;
                  </div>
                </div>

                {/* Why candidates fall for it */}
                <div className="text-xs text-[var(--text-secondary)] pl-2 border-l-2 border-amber-500/40">
                  <strong className="text-amber-400 font-mono text-[11px]">Why Aspirants Fall For It: </strong>
                  {trap.whyItTraps}
                </div>

                {/* The Real Constitutional Rule */}
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-xs text-[var(--text-primary)] flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-emerald-400 font-mono">The Exact Rule to Remember: </strong>
                    {trap.correctRule}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-muted)] flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-[var(--accent)] shrink-0" />
            <span>
              Standard statutory interpretation governs Article {articleNumber}. Watch out for qualification requirements, age limits, and whether power is exercised on cabinet advice or personal discretion.
            </span>
          </div>
        )}
      </div>

      {/* SECTION 2: PRELIMS MCQs (EXAM SIMULATOR) */}
      {intel && intel.prelimsMcqs.length > 0 && (
        <div className="flex flex-col gap-3 pt-2">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)] flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Actual Prelims Exam Questions ({intel.prelimsMcqs.length} MCQs)</span>
            </h4>
            <span className="text-[10px] font-mono text-[var(--text-muted)]">
              Interactive Test Mode
            </span>
          </div>

          <div className="flex flex-col gap-4">
            {intel.prelimsMcqs.map((mcq) => {
              const selected = selectedOptions[mcq.id];
              const isRevealed = revealedExplanations[mcq.id];
              const isCorrect = selected === mcq.correctOption;

              return (
                <div
                  key={mcq.id}
                  className="p-4 sm:p-5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all flex flex-col gap-3 shadow-xs"
                >
                  <div className="flex items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
                      {mcq.examSource}
                    </span>
                    {isRevealed && (
                      <span
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded flex items-center gap-1 ${
                          isCorrect
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                            : 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                        }`}
                      >
                        {isCorrect ? <Check className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                        {isCorrect ? 'CORRECT (+2 Marks)' : 'INCORRECT (-0.66 Marks)'}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm font-sans font-medium text-[var(--text-primary)] leading-relaxed whitespace-pre-line">
                    {mcq.questionText}
                  </p>

                  {/* Options */}
                  <div className="grid grid-cols-1 gap-2 pt-1">
                    {mcq.options.map((opt) => {
                      const isOptionSelected = selected === opt.key;
                      const isOptionCorrect = opt.key === mcq.correctOption;

                      let btnStyle =
                        'bg-[var(--bg-surface)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]';

                      if (isRevealed) {
                        if (isOptionCorrect) {
                          btnStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold';
                        } else if (isOptionSelected && !isOptionCorrect) {
                          btnStyle = 'bg-rose-500/20 border-rose-500 text-rose-300 line-through';
                        } else {
                          btnStyle = 'bg-[var(--bg-surface)] border-[var(--border-subtle)] opacity-50 text-[var(--text-muted)]';
                        }
                      } else if (isOptionSelected) {
                        btnStyle = 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold';
                      }

                      return (
                        <button
                          key={opt.key}
                          onClick={() => handleSelectOption(mcq.id, opt.key)}
                          className={`p-2.5 sm:p-3 rounded-lg border text-left text-xs font-mono transition-all flex items-start gap-2.5 ${btnStyle}`}
                        >
                          <span className="w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold border border-current shrink-0 mt-0.5">
                            {opt.key}
                          </span>
                          <span className="leading-relaxed font-sans">{opt.text}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation Box on Reveal */}
                  {isRevealed && (
                    <div className="p-3.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col gap-1.5 animate-fadeIn text-xs">
                      <div className="font-mono font-bold text-[var(--accent)]">
                        Examiner Explanation & Official Answer Key: Option ({mcq.correctOption})
                      </div>
                      <p className="text-[var(--text-secondary)] leading-relaxed">
                        {mcq.examinerExplanation}
                      </p>
                      {mcq.trapWarning && (
                        <div className="mt-1 pt-1.5 border-t border-[var(--border-subtle)] text-rose-400 font-mono text-[11px] flex items-center gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                          <span>{mcq.trapWarning}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* SECTION 3: MAINS ANSWER BLUEPRINT (10/15/20 MARKS) */}
      {intel?.mainsBlueprint && (
        <div className="flex flex-col gap-3 pt-2">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>Mains Exam Answer Writing Blueprint (15/20 Marks)</span>
            </h4>
            <span className="text-[10px] font-mono text-[var(--text-muted)]">
              {intel.mainsBlueprint.targetWordLimit}
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[var(--bg-base)] border border-purple-500/30 flex flex-col gap-4 shadow-sm">
            <div className="flex items-center justify-between gap-2 border-b border-purple-500/20 pb-2">
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                {intel.mainsBlueprint.examSource}
              </span>
              <div className="flex items-center gap-1 text-[10px] font-mono text-purple-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>IRAC Format (Issue-Rule-Application-Conclusion)</span>
              </div>
            </div>

            <h5 className="text-sm sm:text-base font-serif font-bold text-[var(--text-primary)] leading-tight">
              &ldquo;{intel.mainsBlueprint.questionTitle}&rdquo;
            </h5>

            {/* Core Issues Checklist */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase">Mandatory Points:</span>
              {intel.mainsBlueprint.coreIssues.map((issue, i) => (
                <span
                  key={i}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                >
                  ✓ {issue}
                </span>
              ))}
            </div>

            {/* 4-Step Blueprint Tabs / Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col gap-1.5">
                <span className="text-[10px] font-mono font-bold uppercase text-[var(--accent)]">
                  Step 1: Introduction (Statutory / Intent)
                </span>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {intel.mainsBlueprint.step1Intro}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col gap-1.5">
                <span className="text-[10px] font-mono font-bold uppercase text-sky-400">
                  Step 2: Doctrinal Core & Constitutional Tests
                </span>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {intel.mainsBlueprint.step2DoctrinalCore}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col gap-1.5">
                <span className="text-[10px] font-mono font-bold uppercase text-amber-400">
                  Step 3: Landmark Judicial Precedents
                </span>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {intel.mainsBlueprint.step3Precedents}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col gap-1.5">
                <span className="text-[10px] font-mono font-bold uppercase text-emerald-400">
                  Step 4: Conclusion (Balanced & Forward-Looking)
                </span>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {intel.mainsBlueprint.step4Conclusion}
                </p>
              </div>
            </div>

            {/* Examiner Scoring Tips */}
            <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/25 flex flex-col gap-1 text-xs">
              <span className="font-mono font-bold text-purple-300 uppercase text-[10px]">
                Examiner Scoring Tips (What fetches 70%+ Marks):
              </span>
              <ul className="list-disc list-inside space-y-0.5 text-[var(--text-secondary)] text-[11px]">
                {intel.mainsBlueprint.examinerScoringTips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 4: CROSS-REFERENCED MAINS PYQ ARCHIVES */}
      {matchingGlobalPyqs.length > 0 && (
        <div className="flex flex-col gap-3 pt-2">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>State Judicial Mains Archive Questions on Article {articleNumber} ({matchingGlobalPyqs.length} Questions)</span>
            </h4>
            <button
              onClick={() => setActiveTab('pyq-vault')}
              className="text-xs font-mono text-[var(--accent)] hover:underline flex items-center gap-1"
            >
              <span>Open PYQ Vault</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {matchingGlobalPyqs.slice(0, 4).map((q) => (
              <div
                key={q.id}
                className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all flex flex-col justify-between gap-2"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 text-[10px] font-mono text-[var(--text-muted)] mb-1">
                    <span className="font-bold text-[var(--accent)]">{q.exam} {q.year}</span>
                    <span>{q.marks} Marks</span>
                  </div>
                  <h6 className="text-xs font-bold text-[var(--text-primary)] line-clamp-2">
                    {q.title}
                  </h6>
                  <p className="text-[11px] text-[var(--text-secondary)] line-clamp-3 mt-1 leading-relaxed">
                    {q.questionText}
                  </p>
                </div>

                <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-[10px] font-mono text-[var(--accent)] font-bold">
                  <span>Precedents: {q.landmarkPrecedents.classic.split(' v. ')[0]}</span>
                  <button
                    onClick={() => setActiveTab('mains-lab')}
                    className="hover:underline flex items-center gap-0.5"
                  >
                    <span>Practice &rarr;</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
