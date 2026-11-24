import React, { useState } from 'react';
import {
  ShieldAlert,
  Scale,
  Award,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ChevronRight,
  BookOpen,
  AlertCircle,
  FileText,
  UserCheck
} from 'lucide-react';
import { WRIT_CASES, type WritCase, type WritType } from '../../../data/writsEmergencyData';
import { recordWritsResult } from '../../../services/judicialCareerService';
import { arcadeAudio } from '../../../services/arcadeAudioService';

interface Props {
  onAwardResult: (xp: number, levelUp: boolean, newBadges: string[]) => void;
}

const WRIT_OPTIONS: { id: WritType; label: string; latinMeaning: string; color: string }[] = [
  {
    id: 'habeas-corpus',
    label: 'Habeas Corpus',
    latinMeaning: 'You Shall Have the Body',
    color: 'border-rose-500/40 text-rose-400 bg-rose-500/10'
  },
  {
    id: 'mandamus',
    label: 'Mandamus',
    latinMeaning: 'We Command',
    color: 'border-sky-500/40 text-sky-400 bg-sky-500/10'
  },
  {
    id: 'quo-warranto',
    label: 'Quo Warranto',
    latinMeaning: 'By What Authority?',
    color: 'border-indigo-500/40 text-indigo-400 bg-indigo-500/10'
  },
  {
    id: 'certiorari',
    label: 'Certiorari',
    latinMeaning: 'To Be More Fully Informed',
    color: 'border-purple-500/40 text-purple-400 bg-purple-500/10'
  },
  {
    id: 'prohibition',
    label: 'Prohibition',
    latinMeaning: 'We Forbid',
    color: 'border-orange-500/40 text-orange-400 bg-orange-500/10'
  },
  {
    id: 'dismissed-no-writ',
    label: 'Writ Dismissed',
    latinMeaning: 'No Public Law Remedy Lies',
    color: 'border-slate-500/40 text-slate-400 bg-slate-500/10'
  }
];

export const WritsEmergencyRoom: React.FC<Props> = ({ onAwardResult }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedWrit, setSelectedWrit] = useState<WritType | null>(null);
  const [hasStamped, setHasStamped] = useState<boolean>(false);
  const [isStampAnimating, setIsStampAnimating] = useState<boolean>(false);

  // Session stats
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const currentCase = WRIT_CASES[currentIndex];

  const handleStamp = (writId: WritType) => {
    if (hasStamped || isStampAnimating) return;
    setSelectedWrit(writId);
    setIsStampAnimating(true);
    arcadeAudio.playStamp();

    setTimeout(() => {
      setIsStampAnimating(false);
      setHasStamped(true);

      const isCorrect = writId === currentCase.correctWrit;
      if (isCorrect) {
        setCorrectCount((c) => c + 1);
        arcadeAudio.playCorrect();
      } else {
        arcadeAudio.playWrong();
      }
    }, 400);
  };

  const handleNextCase = () => {
    if (currentIndex + 1 < WRIT_CASES.length) {
      setCurrentIndex((i) => i + 1);
      setSelectedWrit(null);
      setHasStamped(false);
    } else {
      setIsCompleted(true);
      const isPerfect = correctCount === WRIT_CASES.length;
      arcadeAudio.playFanfare();
      const res = recordWritsResult(correctCount, isPerfect);
      onAwardResult(
        res.gainedXP,
        res.leveledUp,
        res.newBadges.map((b) => b.title)
      );
    }
  };

  const resetAll = () => {
    setCurrentIndex(0);
    setSelectedWrit(null);
    setHasStamped(false);
    setCorrectCount(0);
    setIsCompleted(false);
  };

  const isCorrect = selectedWrit === currentCase?.correctWrit;

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center text-zinc-300">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                Prerogative Writs Desk
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)]">
                Articles 32 & 226
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[var(--text-primary)]">
              Writs Emergency Room
            </h2>
          </div>
        </div>

        {/* Live Counter */}
        {!isCompleted && (
          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="text-[var(--text-muted)]">Citizen Case:</span>
            <span className="font-bold text-[var(--text-primary)]">
              {currentIndex + 1} of {WRIT_CASES.length}
            </span>
            <div className="w-24 h-1.5 rounded-full bg-[var(--bg-base)] overflow-hidden">
              <div
                className="h-full bg-zinc-300 dark:bg-zinc-400 transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / WRIT_CASES.length) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Case Screen */}
      {!isCompleted && currentCase && (
        <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-6 animate-fadeIn">
          {/* Citizen Distress Dossier */}
          <div className="p-5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center text-xs font-bold text-zinc-300">
                  {currentCase.citizenName[0]}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[var(--text-primary)] font-serif">
                    {currentCase.citizenName}
                  </h4>
                  <span className="text-[10px] font-mono text-[var(--text-muted)] block">
                    {currentCase.role}
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 uppercase tracking-wide">
                Urgent Petition
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] border-l-4 border-l-zinc-400 text-sm font-serif italic text-[var(--text-primary)] leading-relaxed">
              {currentCase.distressPlea}
            </div>

            <div className="text-xs font-mono text-[var(--text-secondary)] leading-relaxed">
              <span className="font-bold text-[var(--text-primary)] uppercase tracking-wider block mb-1">
                Factual Context & Constitutional Issue:
              </span>
              {currentCase.factualBackground}
            </div>
          </div>

          {/* Stamping Arena */}
          {!hasStamped && (
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase font-bold text-[var(--text-primary)]">
                Select Prerogative Writ Stamp to Issue:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {WRIT_OPTIONS.map((w) => (
                  <button
                    key={w.id}
                    onClick={() => handleStamp(w.id)}
                    disabled={isStampAnimating}
                    className={`p-4 rounded-xl border text-left font-mono transition-all flex flex-col justify-between group hover:scale-[1.02] active:scale-[0.98] ${w.color}`}
                  >
                    <div>
                      <span className="text-sm font-bold block">{w.label}</span>
                      <span className="text-[10px] opacity-80 block italic">{w.latinMeaning}</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold opacity-70 mt-2 block text-right group-hover:opacity-100">
                      [Stamp Seal]
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Stamped Result Debrief */}
          {hasStamped && (
            <div className="space-y-4 animate-fadeIn">
              <div
                className={`p-5 rounded-2xl border ${
                  isCorrect
                    ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-400'
                    : 'bg-rose-950/20 border-rose-500/40 text-rose-400'
                }`}
              >
                <div className="flex items-center gap-3">
                  {isCorrect ? (
                    <CheckCircle2 className="w-6 h-6 shrink-0" />
                  ) : (
                    <XCircle className="w-6 h-6 shrink-0" />
                  )}
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider block">
                      {isCorrect ? 'Correct Writ Issued' : 'Erroneous Writ Selected'}
                    </span>
                    <span className="text-sm font-serif font-bold text-[var(--text-primary)]">
                      Appropriate Order:{' '}
                      {WRIT_OPTIONS.find((w) => w.id === currentCase.correctWrit)?.label}
                    </span>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-current/20 text-xs font-mono text-[var(--text-secondary)] space-y-2 leading-relaxed">
                  <p>
                    <strong className="text-[var(--text-primary)]">Legal Rationale:</strong>{' '}
                    {currentCase.rationale}
                  </p>
                  <p>
                    <strong className="text-[var(--text-primary)]">Why Other Writs Fail:</strong>{' '}
                    {currentCase.whyOthersFail}
                  </p>
                </div>
              </div>

              {/* Precedent Footnote */}
              <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                <div>
                  <span className="font-bold text-[var(--text-primary)]">Landmark Precedent:</span>{' '}
                  {currentCase.keyPrecedent}
                </div>
                <span className="text-[10px] text-[var(--text-secondary)] font-bold">{currentCase.governingArticles}</span>
              </div>

              {/* Next Button */}
              <div className="flex justify-end pt-2">
                <button
                  onClick={handleNextCase}
                  className="px-6 py-2.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs font-mono tracking-wider uppercase flex items-center gap-2 transition-all shadow-xs cursor-pointer"
                >
                  {currentIndex + 1 < WRIT_CASES.length ? 'Next Citizen Petition' : 'Complete Session'}{' '}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Session Completed Screen */}
      {isCompleted && (
        <div className="p-8 sm:p-12 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-center space-y-6 animate-fadeIn">
          <div className="w-12 h-12 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-zinc-300 flex items-center justify-center mx-auto shadow-xs">
            <Award className="w-6 h-6" />
          </div>

          <div className="max-w-md mx-auto space-y-2">
            <h3 className="text-2xl font-serif font-bold text-[var(--text-primary)]">
              Writs Emergency Shift Complete!
            </h3>
            <p className="text-xs sm:text-sm font-mono text-[var(--text-muted)]">
              You accurately resolved {correctCount} out of {WRIT_CASES.length} citizen emergency petitions.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] max-w-xs mx-auto text-center font-mono">
            <span className="text-xs text-[var(--text-muted)] uppercase">Career XP Earned</span>
            <p className="text-2xl font-bold text-emerald-400 mt-1">
              +{correctCount * 30 + (correctCount === WRIT_CASES.length ? 150 : 0)} XP
            </p>
          </div>

          <button
            onClick={resetAll}
            className="px-8 py-3 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs font-mono tracking-wider uppercase inline-flex items-center gap-2 transition-all shadow-xs cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" /> Start New Shift
          </button>
        </div>
      )}
    </div>
  );
};
