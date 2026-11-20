import React, { useState, useEffect } from 'react';
import {
  Gamepad2,
  Scale,
  Zap,
  ShieldAlert,
  BrainCircuit,
  Trophy,
  Flame,
  Award,
  Sparkles,
  ChevronRight,
  AlertTriangle
} from 'lucide-react';
import { ChiefJusticeBenchSimulator } from './Arcade/ChiefJusticeBenchSimulator';
import { ArticleBlitzGame } from './Arcade/ArticleBlitzGame';
import { WritsEmergencyRoom } from './Arcade/WritsEmergencyRoom';
import { TileMatcherGameView } from './TileMatcherGameView';
import { TrapBusterGame } from './Arcade/TrapBusterGame';
import { CareerBadgesModal } from './Arcade/CareerBadgesModal';
import {
  getCareerProfile,
  getCurrentRank,
  getNextRank,
  type PlayerCareerProfile
} from '../../services/judicialCareerService';
import { arcadeAudio } from '../../services/arcadeAudioService';

export type ArcadeTab = 'bench' | 'blitz' | 'writs' | 'matcher' | 'trap-buster';

export const ArcadeHubView: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<ArcadeTab>('bench');
  const [profile, setProfile] = useState<PlayerCareerProfile>(() => getCareerProfile());
  const [badgesModalOpen, setBadgesModalOpen] = useState<boolean>(false);

  // Toast banner for level up or badges
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const refreshProfile = () => {
    setProfile(getCareerProfile());
  };

  const handleAwardResult = (gainedXP: number, leveledUp: boolean, newBadges: string[]) => {
    refreshProfile();
    if (leveledUp) {
      const rank = getCurrentRank(getCareerProfile().xp);
      setToastMessage(`🎉 PROMOTION: You ascended to ${rank.title}!`);
      arcadeAudio.playFanfare();
    } else if (newBadges.length > 0) {
      setToastMessage(`🏆 NEW BADGE UNLOCKED: ${newBadges[0]}!`);
      arcadeAudio.playFanfare();
    }
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const currentRank = getCurrentRank(profile.xp);
  const nextRank = getNextRank(currentRank.level);
  const xpInLevel = profile.xp - currentRank.minXP;
  const levelSpan = nextRank ? nextRank.minXP - currentRank.minXP : 1;
  const progressPct = nextRank ? Math.min(100, Math.round((xpInLevel / levelSpan) * 100)) : 100;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6 animate-fadeIn">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-amber-500 text-black font-mono font-bold text-xs shadow-2xl flex items-center gap-3 animate-bounce">
          <Sparkles className="w-5 h-5 fill-current" />
          <span>{toastMessage}</span>
          <button onClick={() => setToastMessage(null)} className="ml-2 font-bold hover:opacity-80">
            ✕
          </button>
        </div>
      )}

      {/* Top Judicial Career Ribbon */}
      <div className="p-5 sm:p-6 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-2xl shadow-inner shrink-0">
              {currentRank.emblem}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-500">
                  Judicial Career Progression
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)]">
                  Level {currentRank.level} of 7
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[var(--text-primary)]">
                {currentRank.title}
              </h2>
              <p className="text-xs font-mono text-[var(--text-muted)] mt-0.5">
                {currentRank.tagline}
              </p>
            </div>
          </div>

          {/* Quick Metrics & Badges CTA */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Daily Streak */}
            <div className="p-2.5 px-3.5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex items-center gap-2 font-mono text-xs">
              <Flame className="w-4 h-4 text-rose-500 fill-current animate-pulse" />
              <div>
                <span className="text-[10px] text-[var(--text-muted)] block">Daily Streak</span>
                <span className="font-bold text-[var(--text-primary)]">{profile.streakDays} Day{profile.streakDays > 1 ? 's' : ''}</span>
              </div>
            </div>

            {/* Badges Modal Trigger */}
            <button
              onClick={() => setBadgesModalOpen(true)}
              className="p-2.5 px-4 rounded-2xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 flex items-center gap-2 text-amber-400 font-mono text-xs font-bold transition-all shadow-sm"
            >
              <Trophy className="w-4 h-4" />
              <span>{profile.unlockedBadgeIds.length} Badges</span>
            </button>
          </div>
        </div>

        {/* Progress to Next Judicial Rank */}
        <div className="space-y-1.5 pt-2 border-t border-[var(--border-subtle)]">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-[var(--text-secondary)]">
              Current Standing: <strong className="text-[var(--text-primary)]">{profile.xp.toLocaleString()} XP</strong>
            </span>
            {nextRank ? (
              <span className="text-[var(--text-muted)]">
                Next Rank: <strong className="text-amber-500">{nextRank.title}</strong> ({nextRank.minXP.toLocaleString()} XP)
              </span>
            ) : (
              <span className="text-amber-500 font-bold">Highest Judicial Rank Achieved</span>
            )}
          </div>
          <div className="w-full h-2 rounded-full bg-[var(--bg-base)] overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-500"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>
      </div>

      {/* Arcade Navigation Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[var(--border-subtle)]">
        <button
          onClick={() => setActiveSubTab('bench')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-mono font-bold uppercase tracking-wider whitespace-nowrap transition-all border ${
            activeSubTab === 'bench'
              ? 'bg-amber-500/10 text-amber-500 border-amber-500/40 shadow-sm'
              : 'bg-[var(--bg-surface)] text-[var(--text-muted)] border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
          }`}
        >
          <Scale className="w-4 h-4" />
          Chief Justice Bench Sim
        </button>

        <button
          onClick={() => setActiveSubTab('blitz')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-mono font-bold uppercase tracking-wider whitespace-nowrap transition-all border ${
            activeSubTab === 'blitz'
              ? 'bg-amber-500/10 text-amber-500 border-amber-500/40 shadow-sm'
              : 'bg-[var(--bg-surface)] text-[var(--text-muted)] border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
          }`}
        >
          <Zap className="w-4 h-4" />
          60s Article Blitz
        </button>

        <button
          onClick={() => setActiveSubTab('writs')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-mono font-bold uppercase tracking-wider whitespace-nowrap transition-all border ${
            activeSubTab === 'writs'
              ? 'bg-amber-500/10 text-amber-500 border-amber-500/40 shadow-sm'
              : 'bg-[var(--bg-surface)] text-[var(--text-muted)] border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
          }`}
        >
          <ShieldAlert className="w-4 h-4" />
          Writs Emergency Room
        </button>

        <button
          onClick={() => setActiveSubTab('matcher')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-mono font-bold uppercase tracking-wider whitespace-nowrap transition-all border ${
            activeSubTab === 'matcher'
              ? 'bg-amber-500/10 text-amber-500 border-amber-500/40 shadow-sm'
              : 'bg-[var(--bg-surface)] text-[var(--text-muted)] border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
          }`}
        >
          <BrainCircuit className="w-4 h-4" />
          Synaptic Memory Matcher
        </button>

        <button
          onClick={() => setActiveSubTab('trap-buster')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-mono font-bold uppercase tracking-wider whitespace-nowrap transition-all border ${
            activeSubTab === 'trap-buster'
              ? 'bg-rose-500/10 text-rose-400 border-rose-500/40 shadow-sm'
              : 'bg-[var(--bg-surface)] text-[var(--text-muted)] border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
          }`}
        >
          <AlertTriangle className="w-4 h-4 text-rose-400" />
          Trap-Buster Reflex (30s)
        </button>
      </div>

      {/* Active Game Mode Sub-View */}
      {activeSubTab === 'bench' && (
        <ChiefJusticeBenchSimulator onAwardResult={handleAwardResult} />
      )}
      {activeSubTab === 'blitz' && (
        <ArticleBlitzGame onAwardResult={handleAwardResult} />
      )}
      {activeSubTab === 'writs' && (
        <WritsEmergencyRoom onAwardResult={handleAwardResult} />
      )}
      {activeSubTab === 'matcher' && <TileMatcherGameView />}
      {activeSubTab === 'trap-buster' && (
        <TrapBusterGame onAwardResult={handleAwardResult} />
      )}

      {/* Badges Modal */}
      <CareerBadgesModal
        isOpen={badgesModalOpen}
        onClose={() => setBadgesModalOpen(false)}
        profile={profile}
      />
    </div>
  );
};
