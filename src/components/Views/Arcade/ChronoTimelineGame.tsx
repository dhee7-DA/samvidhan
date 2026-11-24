import React, { useState, useEffect } from 'react';
import {
  History,
  RotateCcw,
  CheckCircle2,
  XCircle,
  ArrowDown,
  ArrowUp,
  Volume2,
  VolumeX,
  Sparkles,
  Award,
  ChevronRight,
  Shuffle,
  Info
} from 'lucide-react';
import {
  CHRONO_CHALLENGES,
  shuffleChronoItems,
  type ChronoTimelineChallenge,
  type ChronoItem
} from '../../../data/chronoTimelineData';
import { arcadeAudio } from '../../../services/arcadeAudioService';
import { recordChronoTimelineResult } from '../../../services/judicialCareerService';

interface ChronoTimelineGameProps {
  onAwardResult: (gainedXP: number, leveledUp: boolean, newBadges: string[]) => void;
}

export const ChronoTimelineGame: React.FC<ChronoTimelineGameProps> = ({ onAwardResult }) => {
  const [challengeIndex, setChallengeIndex] = useState<number>(0);
  const activeChallenge: ChronoTimelineChallenge = CHRONO_CHALLENGES[challengeIndex];

  // Current ordering of items in the working list
  const [currentOrder, setCurrentOrder] = useState<ChronoItem[]>([]);
  // Verification state: null (not submitted), true (correct), false (incorrect)
  const [isVerified, setIsVerified] = useState<boolean | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(arcadeAudio.isMuted());
  const [attempts, setAttempts] = useState<number>(0);

  // Initialize and shuffle challenge items
  useEffect(() => {
    setCurrentOrder(shuffleChronoItems(activeChallenge.items));
    setIsVerified(null);
    setAttempts(0);
  }, [challengeIndex]);

  const toggleMute = () => {
    arcadeAudio.setMuted(!isMuted);
    setIsMuted(!isMuted);
  };

  const handleMoveUp = (index: number) => {
    if (index === 0 || isVerified === true) return;
    const newItems = [...currentOrder];
    [newItems[index - 1], newItems[index]] = [newItems[index], newItems[index - 1]];
    setCurrentOrder(newItems);
    setIsVerified(null);
    arcadeAudio.playTick();
  };

  const handleMoveDown = (index: number) => {
    if (index === currentOrder.length - 1 || isVerified === true) return;
    const newItems = [...currentOrder];
    [newItems[index + 1], newItems[index]] = [newItems[index], newItems[index + 1]];
    setCurrentOrder(newItems);
    setIsVerified(null);
    arcadeAudio.playTick();
  };

  const handleVerify = () => {
    const canonicalOrder = activeChallenge.items;
    const isCorrect = currentOrder.every((item, idx) => item.id === canonicalOrder[idx].id);

    setIsVerified(isCorrect);
    setAttempts((prev) => prev + 1);

    if (isCorrect) {
      arcadeAudio.playFanfare();
      const res = recordChronoTimelineResult(true, activeChallenge.items.length);
      onAwardResult(res.gainedXP, res.leveledUp, res.newBadges.map((b) => b.title));
    } else {
      arcadeAudio.playWrong();
    }
  };

  const handleRevealCanonical = () => {
    setCurrentOrder([...activeChallenge.items]);
    setIsVerified(true);
    arcadeAudio.playStamp();
    const res = recordChronoTimelineResult(false, activeChallenge.items.length);
    onAwardResult(res.gainedXP, res.leveledUp, res.newBadges.map((b) => b.title));
  };

  const handleNextChallenge = () => {
    const nextIdx = (challengeIndex + 1) % CHRONO_CHALLENGES.length;
    setChallengeIndex(nextIdx);
  };

  const handleResetChallenge = () => {
    setCurrentOrder(shuffleChronoItems(activeChallenge.items));
    setIsVerified(null);
    setAttempts(0);
    arcadeAudio.playTick();
  };

  return (
    <div className="max-w-3xl mx-auto space-y-3 animate-fadeIn select-none">
      {/* =====================================================================
          SLIM STATUS BAR (Zero Emojis, Clean Editorial)
      ===================================================================== */}
      <div className="py-2 px-3 sm:px-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-2.5 text-xs font-mono shadow-xs">
        <div className="flex items-center gap-2.5">
          <span className="font-bold text-[var(--text-primary)] flex items-center gap-1.5">
            <History className="w-3.5 h-3.5 text-amber-400" />
            ChronoTimeline
          </span>
          <span className="text-[11px] text-[var(--text-muted)] border-l border-[var(--border-subtle)] pl-2">
            Challenge {challengeIndex + 1} of {CHRONO_CHALLENGES.length}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 border-r border-[var(--border-subtle)] pr-2">
            <button
              onClick={toggleMute}
              className="p-1 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-amber-400" />}
            </button>

            <button
              onClick={handleResetChallenge}
              className="p-1 rounded-lg text-[var(--text-muted)] hover:text-amber-400 transition-all cursor-pointer"
              title="Reset Order"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={handleNextChallenge}
            className="px-2.5 py-1 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-[11px] font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all flex items-center gap-1 cursor-pointer"
          >
            <span>Next</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* =====================================================================
          CHALLENGE BRIEFING
      ===================================================================== */}
      <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-1">
        <div className="flex items-center justify-between gap-2 text-xs font-mono">
          <span className="px-1.5 py-0.2 rounded text-[10px] uppercase font-bold tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20">
            {activeChallenge.theme}
          </span>
          <span className="text-[11px] text-[var(--text-muted)]">
            Earliest (Top) → Latest (Bottom)
          </span>
        </div>
        <h3 className="text-sm sm:text-base font-bold text-[var(--text-primary)]">
          {activeChallenge.title}
        </h3>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
          {activeChallenge.description}
        </p>
      </div>

      {/* =====================================================================
          SEQUENCING LIST
      ===================================================================== */}
      <div className="space-y-1.5">
        {currentOrder.map((item, idx) => {
          const isCorrectPosition =
            isVerified !== null && item.id === activeChallenge.items[idx].id;
          const isIncorrectPosition =
            isVerified === false && item.id !== activeChallenge.items[idx].id;

          return (
            <div
              key={item.id}
              className={`p-2.5 sm:p-3 rounded-lg border text-xs font-mono transition-all duration-150 flex items-center justify-between gap-2.5 ${
                isVerified === true
                  ? 'bg-emerald-500/5 border-emerald-500/35 text-[var(--text-primary)]'
                  : isIncorrectPosition
                  ? 'bg-rose-500/5 border-rose-500/30 text-[var(--text-primary)]'
                  : 'bg-[var(--bg-card)] border-[var(--border-subtle)] text-[var(--text-primary)]'
              }`}
            >
              {/* Position indicator */}
              <div className="flex items-center gap-2.5 min-w-0 flex-1">
                <span
                  className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-[11px] shrink-0 border ${
                    isVerified === true
                      ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                      : isIncorrectPosition
                      ? 'bg-rose-500/20 text-rose-400 border-rose-500/40'
                      : 'bg-[var(--bg-base)] text-[var(--text-muted)] border-[var(--border-subtle)]'
                  }`}
                >
                  {idx + 1}
                </span>

                <div className="space-y-0.5 min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="font-bold text-[12px] truncate max-w-full text-[var(--text-primary)]">
                      {item.name}
                    </span>

                    {/* Exact Year Revealed upon Verification */}
                    {isVerified !== null && (
                      <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-amber-500/15 text-amber-400 border border-amber-500/25 shrink-0">
                        {item.year}
                      </span>
                    )}

                    {item.benchStrength && (
                      <span className="text-[10px] text-[var(--text-muted)] hidden sm:inline">
                        [{item.benchStrength}]
                      </span>
                    )}
                  </div>

                  <p className="text-[11px] text-[var(--text-secondary)] line-clamp-1">
                    {item.summary}
                  </p>

                  {/* Constitutional Ratio Revealed upon Correct Verification */}
                  {isVerified === true && (
                    <p className="text-[10.5px] text-emerald-400/90 italic pt-0.5 border-t border-[var(--border-subtle)]/50">
                      Ratio: {item.ratioOrImpact}
                    </p>
                  )}
                </div>
              </div>

              {/* Up / Down Controls */}
              {isVerified !== true && (
                <div className="flex items-center gap-0.5 shrink-0">
                  <button
                    onClick={() => handleMoveUp(idx)}
                    disabled={idx === 0}
                    className="p-1 rounded-md bg-[var(--bg-base)] border border-[var(--border-subtle)] disabled:opacity-30 hover:border-amber-400 text-[var(--text-muted)] hover:text-amber-400 transition-all cursor-pointer disabled:cursor-not-allowed"
                    title="Move Earlier"
                  >
                    <ArrowUp className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleMoveDown(idx)}
                    disabled={idx === currentOrder.length - 1}
                    className="p-1 rounded-md bg-[var(--bg-base)] border border-[var(--border-subtle)] disabled:opacity-30 hover:border-amber-400 text-[var(--text-muted)] hover:text-amber-400 transition-all cursor-pointer disabled:cursor-not-allowed"
                    title="Move Later"
                  >
                    <ArrowDown className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* =====================================================================
          ACTION BUTTONS & FEEDBACK
      ===================================================================== */}
      <div className="pt-1 flex flex-wrap items-center justify-between gap-2 font-mono">
        <div className="flex items-center gap-2">
          {isVerified === true && (
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Perfect Chronology! +180 XP</span>
            </div>
          )}

          {isVerified === false && (
            <div className="flex items-center gap-1.5 text-xs font-bold text-rose-400">
              <XCircle className="w-4 h-4" />
              <span>Sequence Mismatch (Check highlighted positions)</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 ml-auto">
          {isVerified === false && (
            <button
              onClick={handleRevealCanonical}
              className="px-3 py-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-amber-400 text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
            >
              Reveal Canonical Order
            </button>
          )}

          {isVerified === true ? (
            <button
              onClick={handleNextChallenge}
              className="px-4 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-xs flex items-center gap-1.5"
            >
              <span>Next Challenge</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={handleVerify}
              className="px-4 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-xs flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Verify Chronology</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
