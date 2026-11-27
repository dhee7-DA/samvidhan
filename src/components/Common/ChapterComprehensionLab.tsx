import React, { useMemo, useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { BookOpen, CheckCircle2, HelpCircle, RotateCcw, Sparkles, XCircle } from 'lucide-react';
import type { ConstitutionPart } from '../../types/constitution';
import { EDITORIAL_SPRING, SlidingSegmentedControl } from './EditorialMotionCards';
import { recordStudyPulse } from '../../services/studyActivityService';

interface ChapterComprehensionLabProps {
  part: ConstitutionPart;
}

function normalizeBlankInput(val: string): string {
  return val
    .toLowerCase()
    .replace(/\barticles?\b|\bart\.?\b/g, '')
    .replace(/[^a-z0-9]/g, '')
    .trim();
}

export const ChapterComprehensionLab: React.FC<ChapterComprehensionLabProps> = ({ part }) => {
  const [mode, setMode] = useState<'comprehension' | 'blanks' | 'truefalse' | 'reasoning'>('comprehension');
  const [mcqAnswers, setMcqAnswers] = useState<Record<string, number>>({});
  const [blankInputs, setBlankInputs] = useState<Record<string, string>>({});
  const [blankChecked, setBlankChecked] = useState<Record<string, boolean>>({});
  const [blankHints, setBlankHints] = useState<Record<string, boolean>>({});
  const [tfAnswers, setTfAnswers] = useState<Record<string, boolean>>({});
  const [arAnswers, setArAnswers] = useState<Record<string, number>>({});

  // Reset local exercise state when switching chapters/parts
  useEffect(() => {
    setMcqAnswers({});
    setBlankInputs({});
    setBlankChecked({});
    setBlankHints({});
    setTfAnswers({});
    setArAnswers({});
  }, [part.id]);

  const exercises = useMemo(() => {
    const articles = part.articles || [];
    const principles = part.keyPrinciples || [];
    const cases = part.landmarkCases || [];

    const passageParts = [
      part.description,
      part.historicalBackground ? `Historical Context: ${part.historicalBackground}` : '',
      principles.length > 0 ? `Core Principles: ${principles.slice(0, 3).join(' ')}` : '',
      cases.length > 0
        ? `Key Precedent: In ${cases[0].caseName} (${cases[0].year}), the Court held that ${cases[0].summary}`
        : '',
    ].filter(Boolean);

    // 1. Comprehension MCQs (3 questions)
    const compQuestions: {
      id: string;
      question: string;
      options: string[];
      correctIndex: number;
      explanation: string;
    }[] = [];

    compQuestions.push({
      id: `${part.id}-comp-1`,
      question: `Which range of constitutional provisions is governed by ${part.partNumber} (${part.title})?`,
      options: [
        part.articlesRange,
        'Articles 352 – 360',
        'Articles 1 – 4',
        'Articles 393 – 395',
      ].map((opt, idx, arr) =>
        idx > 0 && opt === part.articlesRange ? `Articles ${300 + idx} – ${305 + idx}` : opt
      ),
      correctIndex: 0,
      explanation: `${part.partNumber} (${part.title}) spans ${part.articlesRange}.`,
    });

    if (principles[0]) {
      compQuestions.push({
        id: `${part.id}-comp-2`,
        question: `According to the passage, which core constitutional principle anchors ${part.partNumber}?`,
        options: [
          'It operates solely during a Financial Emergency under Article 360',
          principles[0],
          'It is completely immune from judicial review under all circumstances',
          'It applies only to Union Territories administered under Part VIII',
        ],
        correctIndex: 1,
        explanation: `Governing Principle: ${principles[0]}`,
      });
    }

    if (cases[0]) {
      compQuestions.push({
        id: `${part.id}-comp-3`,
        question: `What was the constitutional significance of ${cases[0].caseName} (${cases[0].year}) in ${part.partNumber}?`,
        options: [
          'It repealed the Seventh Schedule lists',
          'It abolished High Court writ jurisdiction',
          cases[0].significance || cases[0].summary,
          'It shifted the subject from List I to List II',
        ],
        correctIndex: 2,
        explanation: `${cases[0].caseName} (${cases[0].year}): ${cases[0].summary}`,
      });
    }

    // 2. Fill in the Blanks (up to 5 prompts)
    const blanks: {
      id: string;
      promptBefore: string;
      promptAfter: string;
      answer: string;
      hint: string;
    }[] = [];

    articles.slice(0, 4).forEach((art, idx) => {
      blanks.push({
        id: `${part.id}-blank-art-${idx}`,
        promptBefore: `Under ${part.partNumber}, Article `,
        promptAfter: ` specifically deals with "${art.title}".`,
        answer: String(art.number).replace(/^Art(?:icle)?\.?\s*/i, '').trim(),
        hint: `Look in ${part.articlesRange} (${art.summary.slice(0, 80)}...)`,
      });
    });

    if (cases[0]) {
      blanks.push({
        id: `${part.id}-blank-case`,
        promptBefore: `The landmark ruling in ${cases[0].caseName} was delivered in the year `,
        promptAfter: `.`,
        answer: String(cases[0].year),
        hint: `20th/21st century milestone under ${part.partNumber}`,
      });
    }

    // 3. True / False & Quick Verification (4 items)
    const tfItems: {
      id: string;
      statement: string;
      isTrue: boolean;
      explanation: string;
    }[] = [
      {
        id: `${part.id}-tf-1`,
        statement: `${part.partNumber} (${part.title}) falls under the "${part.category}" pillar of the Constitution (${part.articlesRange}).`,
        isTrue: true,
        explanation: `True — ${part.partNumber} spans ${part.articlesRange} under ${part.category}.`,
      },
      {
        id: `${part.id}-tf-2`,
        statement: `${part.partNumber} is the final Part of the Constitution dealing with Short Title, Commencement, and Repeals (Articles 393–395).`,
        isTrue: part.id === 'part-22',
        explanation:
          part.id === 'part-22'
            ? 'True — Part XXII covers Short Title, Commencement & Repeals.'
            : `False — Articles 393–395 belong to Part XXII, whereas ${part.partNumber} covers ${part.articlesRange}.`,
      },
    ];

    if (articles[0]) {
      tfItems.push({
        id: `${part.id}-tf-3`,
        statement: `Article ${articles[0].number.replace(/^Art\.?\s*/i, '')} in ${part.partNumber} governs "${articles[0].title}".`,
        isTrue: true,
        explanation: `True — ${articles[0].summary}`,
      });
    }

    if (cases[0]) {
      tfItems.push({
        id: `${part.id}-tf-4`,
        statement: `In ${cases[0].caseName} (${cases[0].year}), the Supreme Court held that ${part.partNumber} cannot be interpreted by Indian courts.`,
        isTrue: false,
        explanation: `False — ${cases[0].summary}`,
      });
    }

    // 4. Assertion & Reasoning Questions (4 UPSC / Judiciary A-R items)
    const arOptions = [
      'Both (A) and (R) are true, and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true, but (R) is NOT the correct explanation of (A)',
      '(A) is true, but (R) is false',
      '(A) is false, but (R) is true',
    ];

    const arItems: {
      id: string;
      assertion: string;
      reason: string;
      correctIndex: number;
      explanation: string;
    }[] = [
      {
        id: `${part.id}-ar-1`,
        assertion: `${part.partNumber} (${part.title}) forms an integral part of India's constitutional architecture under ${part.articlesRange}.`,
        reason: principles[0] || part.description,
        correctIndex: 0,
        explanation: `Both (A) and (R) are true, and (R) directly explains the constitutional purpose and scope of ${part.partNumber}.`,
      },
      {
        id: `${part.id}-ar-2`,
        assertion: `All provisions within ${part.partNumber} are completely immune from Supreme Court interpretation or constitutional review.`,
        reason: cases[0]
          ? `In ${cases[0].caseName} (${cases[0].year}), the Court laid down binding constitutional principles governing ${part.partNumber}.`
          : `Judicial review is a Basic Structure feature guiding the interpretation of constitutional Parts.`,
        correctIndex: 3,
        explanation: `(A) is false because Indian courts routinely interpret and enforce constitutional limits across ${part.partNumber}, whereas (R) is true.`,
      },
    ];

    if (articles[0]) {
      const art0Num = articles[0].number.replace(/^Art\.?\s*/i, '');
      arItems.push({
        id: `${part.id}-ar-3`,
        assertion: `Article ${art0Num} in ${part.partNumber} is titled "${articles[0].title}".`,
        reason: `Article ${art0Num} applies exclusively during a Financial Emergency under Article 360 and has no peacetime operation.`,
        correctIndex: 2,
        explanation: `(A) is true (${articles[0].summary}), while (R) is false because Article ${art0Num} is part of the regular constitutional scheme of ${part.partNumber}.`,
      });
    }

    if (articles[1] && cases[0]) {
      const art1Num = articles[1].number.replace(/^Art\.?\s*/i, '');
      arItems.push({
        id: `${part.id}-ar-4`,
        assertion: `Article ${art1Num} governs "${articles[1].title}" under ${part.partNumber}.`,
        reason: `Separately, ${cases[0].caseName} (${cases[0].year}) addressed ${cases[0].significance || cases[0].summary}.`,
        correctIndex: 1,
        explanation: `Both statements are independently true, though ${cases[0].caseName} (${cases[0].year}) is a distinct precedent rather than the sole textual origin of Article ${art1Num}.`,
      });
    }

    return { passageParts, compQuestions, blanks, tfItems, arItems, arOptions };
  }, [part]);

  const totalItems =
    exercises.compQuestions.length +
    exercises.blanks.length +
    exercises.tfItems.length +
    exercises.arItems.length;
  const correctCount =
    exercises.compQuestions.filter((q) => mcqAnswers[q.id] === q.correctIndex).length +
    exercises.blanks.filter(
      (b) =>
        blankChecked[b.id] &&
        normalizeBlankInput(blankInputs[b.id] || '') === normalizeBlankInput(b.answer)
    ).length +
    exercises.tfItems.filter((t) => tfAnswers[t.id] === t.isTrue).length +
    exercises.arItems.filter((a) => arAnswers[a.id] === a.correctIndex).length;

  const handleReset = () => {
    setMcqAnswers({});
    setBlankInputs({});
    setBlankChecked({});
    setBlankHints({});
    setTfAnswers({});
    setArAnswers({});
  };

  return (
    <div className="flex flex-col gap-5 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--accent)] font-bold">
            Chapter Comprehension & Active Recall
          </span>
          <h3 className="text-lg font-bold text-[var(--text-primary)] mt-0.5 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[var(--accent)]" />
            <span>{part.partNumber}: Passage, Fill-in-the-Blanks & Quick Check</span>
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-[var(--text-muted)]">
            Score: <strong className="text-[var(--text-primary)]">{correctCount}</strong>/{totalItems}
          </span>
          <button
            type="button"
            onClick={handleReset}
            title="Reset Chapter Exercises"
            className="p-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-base)] text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Mode Switcher */}
      <div className="overflow-x-auto pb-1">
        <SlidingSegmentedControl
          layoutGroupId={`part-comp-mode-${part.id}`}
          value={mode}
          onChange={setMode}
          options={[
            { id: 'comprehension', label: 'Comprehension Passage', count: exercises.compQuestions.length },
            { id: 'blanks', label: 'Fill in the Blanks', count: exercises.blanks.length },
            { id: 'truefalse', label: 'True / False Check', count: exercises.tfItems.length },
            { id: 'reasoning', label: 'Assertion & Reasoning', count: exercises.arItems.length },
          ]}
        />
      </div>

      <AnimatePresence mode="wait">
        {mode === 'comprehension' && (
          <motion.div
            key="comp"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={EDITORIAL_SPRING}
            className="space-y-4"
          >
            <div className="p-4 sm:p-5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] space-y-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] font-bold">
                Reading Passage — {part.partNumber}: {part.title}
              </div>
              {exercises.passageParts.map((para, i) => (
                <p key={i} className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            <div className="space-y-3">
              {exercises.compQuestions.map((q, idx) => {
                const chosen = mcqAnswers[q.id];
                const answered = chosen !== undefined;
                return (
                  <div
                    key={q.id}
                    className="p-4 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] space-y-2.5"
                  >
                    <div className="text-xs sm:text-sm font-semibold text-[var(--text-primary)]">
                      Q{idx + 1}. {q.question}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {q.options.map((opt, oIdx) => {
                        const isCorrect = oIdx === q.correctIndex;
                        const isPicked = chosen === oIdx;
                        let cls =
                          'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent)]/50';
                        if (answered) {
                          if (isCorrect) cls = 'bg-emerald-500/15 border-emerald-500/50 text-emerald-400 font-semibold';
                          else if (isPicked) cls = 'bg-rose-500/15 border-rose-500/50 text-rose-400';
                        }
                        return (
                          <button
                            key={oIdx}
                            type="button"
                            disabled={answered}
                            onClick={() => {
                              setMcqAnswers((prev) => ({ ...prev, [q.id]: oIdx }));
                              recordStudyPulse(0, 1);
                            }}
                            className={`p-2.5 rounded-lg border text-left text-xs transition-all cursor-pointer ${cls}`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                    {answered && (
                      <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
                        {q.explanation}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {mode === 'blanks' && (
          <motion.div
            key="blanks"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={EDITORIAL_SPRING}
            className="space-y-3"
          >
            {exercises.blanks.map((b, idx) => {
              const val = blankInputs[b.id] || '';
              const isChecked = !!blankChecked[b.id];
              const isRight =
                isChecked && normalizeBlankInput(val) === normalizeBlankInput(b.answer);

              return (
                <div
                  key={b.id}
                  className="p-4 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] space-y-2.5"
                >
                  <div className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed flex flex-wrap items-center gap-1.5">
                    <span className="font-mono text-[var(--accent)] font-bold mr-1">
                      #{idx + 1}
                    </span>
                    <span>{b.promptBefore}</span>
                    <input
                      type="text"
                      value={val}
                      onChange={(e) => {
                        setBlankInputs((prev) => ({ ...prev, [b.id]: e.target.value }));
                        if (isChecked) {
                          setBlankChecked((prev) => ({ ...prev, [b.id]: false }));
                        }
                      }}
                      placeholder="Type answer..."
                      className="px-2.5 py-1 rounded-lg bg-[var(--bg-base)] border border-[var(--border-strong)] text-xs font-mono text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] w-32 sm:w-40"
                    />
                    <span>{b.promptAfter}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setBlankChecked((prev) => ({ ...prev, [b.id]: true }));
                        recordStudyPulse(0, 1);
                      }}
                      className="px-3 py-1 rounded-lg bg-[var(--accent)] text-[var(--accent-contrast)] text-xs font-bold cursor-pointer"
                    >
                      Check
                    </button>
                    <button
                      type="button"
                      onClick={() => setBlankHints((prev) => ({ ...prev, [b.id]: !prev[b.id] }))}
                      className="px-2.5 py-1 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-base)] text-[var(--text-muted)] hover:text-[var(--text-primary)] text-xs flex items-center gap-1 cursor-pointer"
                    >
                      <HelpCircle className="w-3 h-3" />
                      <span>Hint</span>
                    </button>

                    {isChecked && (
                      <span
                        className={`text-xs font-mono font-bold flex items-center gap-1 ${
                          isRight ? 'text-emerald-400' : 'text-rose-400'
                        }`}
                      >
                        {isRight ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5" /> Correct!
                          </>
                        ) : (
                          <>
                            <XCircle className="w-3.5 h-3.5" /> Answer: {b.answer}
                          </>
                        )}
                      </span>
                    )}
                  </div>

                  {blankHints[b.id] && (
                    <div className="text-[11px] font-mono text-[var(--text-muted)] flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[var(--gold)] shrink-0" />
                      <span>{b.hint}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>
        )}

        {mode === 'truefalse' && (
          <motion.div
            key="tf"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={EDITORIAL_SPRING}
            className="space-y-3"
          >
            {exercises.tfItems.map((item, idx) => {
              const picked = tfAnswers[item.id];
              const answered = picked !== undefined;
              const isRight = picked === item.isTrue;
              return (
                <div
                  key={item.id}
                  className="p-4 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] space-y-2.5"
                >
                  <div className="text-xs sm:text-sm font-medium text-[var(--text-primary)]">
                    {idx + 1}. {item.statement}
                  </div>
                  <div className="flex items-center gap-2">
                    {[true, false].map((choice) => {
                      const active = picked === choice;
                      let cls =
                        'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent)]/50';
                      if (answered && active) {
                        cls = isRight
                          ? 'bg-emerald-500/15 border-emerald-500/50 text-emerald-400 font-bold'
                          : 'bg-rose-500/15 border-rose-500/50 text-rose-400 font-bold';
                      }
                      return (
                        <button
                          key={String(choice)}
                          type="button"
                          disabled={answered}
                          onClick={() => {
                            setTfAnswers((prev) => ({ ...prev, [item.id]: choice }));
                            recordStudyPulse(0, 1);
                          }}
                          className={`px-4 py-1.5 rounded-lg border text-xs font-mono cursor-pointer transition-all ${cls}`}
                        >
                          {choice ? 'True' : 'False'}
                        </button>
                      );
                    })}
                  </div>
                  {answered && (
                    <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
                      {item.explanation}
                    </p>
                  )}
                </div>
              );
            })}
          </motion.div>
        )}

        {mode === 'reasoning' && (
          <motion.div
            key="reasoning"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={EDITORIAL_SPRING}
            className="space-y-3"
          >
            {exercises.arItems.map((ar, idx) => {
              const chosen = arAnswers[ar.id];
              const answered = chosen !== undefined;
              return (
                <div
                  key={ar.id}
                  className="p-4 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] space-y-3"
                >
                  <div className="space-y-1.5 text-xs sm:text-sm">
                    <div className="text-[var(--text-primary)]">
                      <span className="font-mono font-bold text-[var(--accent)] mr-1.5">
                        Q{idx + 1} Assertion (A):
                      </span>
                      {ar.assertion}
                    </div>
                    <div className="text-[var(--text-secondary)]">
                      <span className="font-mono font-bold text-[var(--gold)] mr-1.5">
                        Reason (R):
                      </span>
                      {ar.reason}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-2">
                    {exercises.arOptions.map((opt, oIdx) => {
                      const isCorrect = oIdx === ar.correctIndex;
                      const isPicked = chosen === oIdx;
                      let cls =
                        'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent)]/50';
                      if (answered) {
                        if (isCorrect) cls = 'bg-emerald-500/15 border-emerald-500/50 text-emerald-400 font-semibold';
                        else if (isPicked) cls = 'bg-rose-500/15 border-rose-500/50 text-rose-400';
                      }
                      return (
                        <button
                          key={oIdx}
                          type="button"
                          disabled={answered}
                          onClick={() => {
                            setArAnswers((prev) => ({ ...prev, [ar.id]: oIdx }));
                            recordStudyPulse(0, 1);
                          }}
                          className={`p-2.5 rounded-lg border text-left text-xs transition-all cursor-pointer ${cls}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {answered && (
                    <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
                      {ar.explanation}
                    </p>
                  )}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
