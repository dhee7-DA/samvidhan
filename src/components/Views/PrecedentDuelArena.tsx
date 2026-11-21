import React, { useState } from 'react';
import {
  Swords,
  Shield,
  Gavel,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Flame,
  Award,
  Layers,
  HelpCircle
} from 'lucide-react';
import type { PrecedentClash } from '../../data/precedentClashesData';
import { awardCareerXP } from '../../services/judicialCareerService';
import { arcadeAudio } from '../../services/arcadeAudioService';

interface PrecedentDuelArenaProps {
  activeClash: PrecedentClash;
  onNextClash: () => void;
  onPrevClash: () => void;
  currentIndex: number;
  totalCount: number;
}

export const PrecedentDuelArena: React.FC<PrecedentDuelArenaProps> = ({
  activeClash,
  onNextClash,
  onPrevClash,
  currentIndex,
  totalCount
}) => {
  const [quizAnswered, setQuizAnswered] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  // Parse approximate bench numbers from benchStrength string (e.g. "5-Judge Constitution Bench")
  const getBenchCount = (str: string): number => {
    const match = str.match(/\d+/);
    return match ? parseInt(match[0], 10) : 5;
  };

  const oldBench = getBenchCount(activeClash.oldCase.benchStrength);
  const newBench = getBenchCount(activeClash.newCase.benchStrength);

  // Generate a dynamic duel quiz question for this clash
  const duelQuiz = {
    question: `In this landmark battle, which principle decisively prevailed in ${activeClash.newCase.caseName}?`,
    options: [
      activeClash.newCase.doctrinalShift,
      activeClash.oldCase.whyItFailed,
      'Absolute executive non-justiciability without judicial review',
      'Preservation of status quo over constitutional morality'
    ],
    correctIndex: 0
  };

  const handleAnswer = (idx: number) => {
    if (quizAnswered) return;
    setSelectedAnswer(idx);
    setQuizAnswered(true);

    if (idx === duelQuiz.correctIndex) {
      arcadeAudio.playCorrect(3);
      awardCareerXP(25, `Mastered Precedent Duel: ${activeClash.newCase.caseName}`);
    } else {
      arcadeAudio.playWrong();
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Duel Control Navigation Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-rose-400 flex items-center justify-center font-black shrink-0">
            <Swords className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-mono font-bold text-rose-400 uppercase tracking-wider">
                BATTLE #{currentIndex + 1} OF {totalCount}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)]">
                Overruled in {activeClash.yearOverruled} ({activeClash.overrulingMagnitude})
              </span>
            </div>
            <h3 className="text-sm sm:text-base font-bold text-[var(--text-primary)] truncate mt-0.5">
              {activeClash.title}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
          <button
            onClick={onPrevClash}
            className="p-2 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-xs text-[var(--text-primary)] transition-all cursor-pointer btn-tactile"
            title="Previous Clash"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs font-mono font-bold text-[var(--text-muted)] px-1 tabular-nums">
            {currentIndex + 1} / {totalCount}
          </span>
          <button
            onClick={onNextClash}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--bg-surface-elevated)] hover:bg-[var(--border-strong)] text-[var(--text-primary)] border border-[var(--border-strong)] text-xs font-mono font-bold transition-all shadow-sm cursor-pointer btn-tactile"
            title="Next Clash"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* THE DUAL BATTLE-CARDS ARENA: Crisp side-by-side comparative layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch relative">
        {/* LEFT CARD: The Overruled Titan */}
        <div className="rounded-2xl bg-[var(--bg-surface)] border border-rose-500/30 hover:border-rose-500/50 p-4 sm:p-5 space-y-3.5 shadow-sm relative flex flex-col justify-between transition-colors">
          <div className="space-y-3">
            {/* Status Stamp */}
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--bg-base)] text-rose-400 border border-rose-500/30 text-[10px] font-mono font-bold uppercase tracking-wider">
                <XCircle className="w-3.5 h-3.5" />
                OVERRULED PRECEDENT
              </span>
              <span className="text-xs font-mono font-bold text-rose-400 tabular-nums">
                YEAR: {activeClash.oldCase.year}
              </span>
            </div>

            {/* Case Details */}
            <div>
              <h4 className="text-base sm:text-lg font-black text-[var(--text-primary)] leading-tight">
                {activeClash.oldCase.caseName}
              </h4>
              <p className="text-xs font-mono text-[var(--text-muted)] mt-0.5">
                {activeClash.oldCase.citation}
              </p>
            </div>

            {/* Power Stat: Bench Strength */}
            <div className="p-2.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-[var(--text-muted)]">Bench Power:</span>
                <span className="font-bold text-rose-400">{activeClash.oldCase.benchStrength}</span>
              </div>
              <div className="w-full h-1.5 bg-[var(--bg-surface-elevated)] rounded-full overflow-hidden">
                <div
                  className="h-full bg-rose-500 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, (oldBench / 13) * 100)}%` }}
                />
              </div>
            </div>

            {/* The Fatal Flaw */}
            <div className="space-y-1 text-xs">
              <span className="font-mono font-bold text-rose-400 block uppercase tracking-wide text-[10px]">
                The Flawed Doctrine:
              </span>
              <div className="p-3 rounded-xl bg-[var(--bg-base)] border border-rose-500/20 text-[var(--text-secondary)] leading-relaxed font-serif text-[11px] sm:text-xs">
                "{activeClash.oldCase.theFlawedRatio}"
              </div>
            </div>

            {/* Reason Struck Down */}
            <div className="text-xs text-[var(--text-muted)] space-y-1 pt-0.5">
              <span className="font-bold text-[var(--text-primary)]">Why It Fell: </span>
              <span>{activeClash.oldCase.whyItFailed}</span>
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] font-mono text-rose-400">
            <span>DEFUNCT LAW</span>
            <span className="line-through tabular-nums">Stood until {activeClash.yearOverruled}</span>
          </div>
        </div>

        {/* RIGHT CARD: The Reigning Supreme Precedent */}
        <div className="rounded-2xl bg-[var(--bg-surface)] border border-emerald-500/30 hover:border-emerald-500/50 p-4 sm:p-5 space-y-3.5 shadow-sm relative flex flex-col justify-between transition-colors">
          <div className="space-y-3">
            {/* Status Stamp */}
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--bg-base)] text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5" />
                SETTLED SUPREME LAW
              </span>
              <span className="text-xs font-mono font-bold text-emerald-400 tabular-nums">
                YEAR: {activeClash.newCase.year}
              </span>
            </div>

            {/* Case Details */}
            <div>
              <h4 className="text-base sm:text-lg font-black text-[var(--text-primary)] leading-tight">
                {activeClash.newCase.caseName}
              </h4>
              <p className="text-xs font-mono text-[var(--text-muted)] mt-0.5">
                {activeClash.newCase.citation}
              </p>
            </div>

            {/* Power Stat: Bench Strength */}
            <div className="p-2.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-[var(--text-muted)]">Bench Power:</span>
                <span className="font-bold text-emerald-400">{activeClash.newCase.benchStrength}</span>
              </div>
              <div className="w-full h-1.5 bg-[var(--bg-surface-elevated)] rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, (newBench / 13) * 100)}%` }}
                />
              </div>
            </div>

            {/* The Settled Ratio */}
            <div className="space-y-1 text-xs">
              <span className="font-mono font-bold text-emerald-400 block uppercase tracking-wide text-[10px]">
                The Settled Constitutional Ratio:
              </span>
              <div className="p-3 rounded-xl bg-[var(--bg-base)] border border-emerald-500/20 text-[var(--text-secondary)] leading-relaxed font-serif text-[11px] sm:text-xs">
                "{activeClash.newCase.theSettledRatio}"
              </div>
            </div>

            {/* Paradigm Shift & Articles */}
            <div className="text-xs text-[var(--text-muted)] space-y-1 pt-0.5">
              <span className="font-bold text-[var(--text-primary)]">Doctrinal Shift: </span>
              <span>{activeClash.newCase.doctrinalShift}</span>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {activeClash.newCase.constitutionalArticles.map((art) => (
                <span
                  key={art}
                  className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[var(--bg-base)] text-emerald-400 border border-emerald-500/30"
                >
                  {art}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] font-mono text-emerald-400">
            <span>CURRENT LAW OF THE LAND</span>
            <span className="font-bold">Article 141 Binding</span>
          </div>
        </div>
      </div>

      {/* BATTLE IQ CHALLENGE WIDGET */}
      <div className="p-5 sm:p-6 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            <h4 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono">
              Battle IQ Challenge (+25 XP)
            </h4>
          </div>
          <span className="text-xs font-mono text-[var(--text-muted)]">
            Instant Precedent Mastery
          </span>
        </div>

        <p className="text-xs sm:text-sm font-medium text-[var(--text-primary)]">
          {duelQuiz.question}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {duelQuiz.options.map((opt, idx) => {
            const isSelected = selectedAnswer === idx;
            const isCorrect = idx === duelQuiz.correctIndex;

            let btnClass = 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--border-strong)]';
            if (quizAnswered) {
              if (isCorrect) {
                btnClass = 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400 font-bold';
              } else if (isSelected) {
                btnClass = 'bg-rose-500/10 border-rose-500/50 text-rose-400';
              } else {
                btnClass = 'opacity-40 border-[var(--border-subtle)]';
              }
            }

            return (
              <button
                key={idx}
                disabled={quizAnswered}
                onClick={() => handleAnswer(idx)}
                className={`p-3.5 rounded-xl border text-left text-xs transition-all cursor-pointer btn-tactile ${btnClass}`}
              >
                <span className="font-mono font-bold mr-2 opacity-60">
                  {String.fromCharCode(65 + idx)}.
                </span>
                <span>{opt}</span>
              </button>
            );
          })}
        </div>

        {quizAnswered && (
          <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-emerald-500/30 text-xs text-emerald-400 animate-fadeIn font-mono">
            <span className="font-bold">Victory Analysis: </span>
            <span>{activeClash.newCase.keyTakeawayForMains}</span>
          </div>
        )}
      </div>
    </div>
  );
};
