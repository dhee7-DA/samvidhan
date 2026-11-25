import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { modalBackdropVariants, modalPanelVariants, springs } from '../../../lib/motionTokens';
import { X, Award, CheckCircle2, Lock, Sparkles, Scale, Trophy } from 'lucide-react';
import {
  ARCADE_BADGES,
  JUDICIAL_RANKS,
  getCareerProfile,
  getCurrentRank,
  getNextRank,
  type PlayerCareerProfile
} from '../../../services/judicialCareerService';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  profile: PlayerCareerProfile;
}

export const CareerBadgesModal: React.FC<Props> = ({ isOpen, onClose, profile }) => {
  const currentRank = getCurrentRank(profile.xp);
  const nextRank = getNextRank(currentRank.level);
  const xpInLevel = profile.xp - currentRank.minXP;
  const levelSpan = nextRank ? nextRank.minXP - currentRank.minXP : 1;
  const progressPct = nextRank ? Math.min(100, Math.round((xpInLevel / levelSpan) * 100)) : 100;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={modalBackdropVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            variants={modalPanelVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl bg-[var(--bg-surface)] border border-[var(--border-strong)] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
        {/* Header */}
        <div className="p-6 border-b border-[var(--border-subtle)] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-center text-zinc-300">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase text-[var(--text-secondary)] tracking-wider">
                Judicial Career Portfolio
              </span>
              <h3 className="text-lg font-serif font-bold text-[var(--text-primary)]">
                {currentRank.title} (Level {currentRank.level})
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Career Progression Bar */}
        <div className="p-6 bg-[var(--bg-base)] border-b border-[var(--border-subtle)] space-y-3">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-[var(--text-secondary)]">
              Rank Progress: <strong className="text-[var(--text-primary)]">{profile.xp.toLocaleString()} XP</strong>
            </span>
            {nextRank ? (
              <span className="text-[var(--text-muted)]">
                Next: <strong className="text-[var(--text-primary)] font-semibold">{nextRank.title}</strong> ({nextRank.minXP.toLocaleString()} XP)
              </span>
            ) : (
              <span className="text-[var(--text-primary)] font-bold">Highest Constitutional Office Attained</span>
            )}
          </div>

          <div className="w-full h-2.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: progressPct / 100 }}
              transition={springs.gentle}
              style={{ transformOrigin: 'left' }}
              className="w-full h-full bg-[var(--accent)] rounded-full"
            />
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
            <span>{currentRank.tagline}</span>
            <span>{progressPct}% to next rank</span>
          </div>
        </div>

        {/* Badges Grid */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase font-bold text-[var(--text-primary)] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
              Constitutional Achievements ({profile.unlockedBadgeIds.length} of {ARCADE_BADGES.length})
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ARCADE_BADGES.map((b) => {
              const isUnlocked = profile.unlockedBadgeIds.includes(b.id);
              return (
                <div
                  key={b.id}
                  className={`p-3.5 rounded-2xl border transition-all flex items-start gap-3 ${
                    isUnlocked
                      ? 'bg-[var(--bg-surface-elevated)] border-[var(--border-strong)]'
                      : 'bg-[var(--bg-base)] border-[var(--border-subtle)] opacity-50'
                  }`}
                >
                  <div className="w-9 h-9 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-center shrink-0">
                    {isUnlocked ? (
                      <Award className="w-4 h-4 text-zinc-200" />
                    ) : (
                      <Lock className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                    )}
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold font-serif text-[var(--text-primary)]">
                        {b.title}
                      </span>
                      {isUnlocked && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                    </div>
                    <p className="text-[11px] font-mono text-[var(--text-muted)] leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white font-mono text-xs font-bold uppercase tracking-wider"
          >
            Close Portfolio
          </button>
        </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
