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
  AlertTriangle,
  Lock,
  Key,
  Gavel,
  Scroll,
  Target,
  Puzzle,
  History,
  Layers
} from 'lucide-react';
import { ConstitutionalEscapeRoom } from './Arcade/ConstitutionalEscapeRoom';
import { ConstitutionBenchMootSimulator } from './Arcade/ConstitutionBenchMootSimulator';
import { ConstituentAssemblyRPG } from './Arcade/ConstituentAssemblyRPG';
import { LexSamvidhanMysteryGame } from './Arcade/LexSamvidhanMysteryGame';
import { ConstitutionalConnectionsGame } from './Arcade/ConstitutionalConnectionsGame';
import { UltraViresSwipeGame } from './Arcade/UltraViresSwipeGame';
import { ChronoTimelineGame } from './Arcade/ChronoTimelineGame';
import { SeventhScheduleSortGame } from './Arcade/SeventhScheduleSortGame';
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

export type ArcadeTab =
  | 'escape-room'
  | 'moot-court'
  | 'assembly-rpg'
  | 'lex-samvidhan'
  | 'connections'
  | 'ultra-vires'
  | 'chrono-timeline'
  | 'seventh-schedule'
  | 'bench'
  | 'blitz'
  | 'writs'
  | 'matcher'
  | 'trap-buster';

export const ArcadeHubView: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<ArcadeTab>(() => {
    try {
      const saved = sessionStorage.getItem('samvidhan_active_arcade_tab') as ArcadeTab;
      if (saved) {
        sessionStorage.removeItem('samvidhan_active_arcade_tab');
        return saved;
      }
    } catch {
      // ignore
    }
    return 'escape-room';
  });
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
      setToastMessage(`PROMOTION: You ascended to ${rank.title}!`);
      arcadeAudio.playFanfare();
    } else if (newBadges.length > 0) {
      setToastMessage(`NEW BADGE UNLOCKED: ${newBadges[0]}!`);
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
        <div className="fixed bottom-6 right-6 z-50 p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-strong)] text-[var(--text-primary)] font-mono font-medium text-xs shadow-xl flex items-center gap-3">
          <Sparkles className="w-4 h-4 text-zinc-300" />
          <span>{toastMessage}</span>
          <button onClick={() => setToastMessage(null)} className="ml-2 font-bold text-[var(--text-muted)] hover:text-[var(--text-primary)]">
            ✕
          </button>
        </div>
      )}

      {/* Top Judicial Career Bar (Minimalist & Compact) */}
      <div className="py-2 px-3.5 sm:px-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-3 text-xs font-mono shadow-xs">
        <div className="flex items-center gap-2">
          <Scale className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
          <span className="font-bold text-[var(--text-primary)]">{currentRank.title}</span>
          <span className="text-[10px] text-[var(--text-muted)] border-l border-[var(--border-subtle)] pl-2">
            Lv. {currentRank.level}/7
          </span>
          <div className="hidden sm:flex items-center gap-2 border-l border-[var(--border-subtle)] pl-2 text-[11px] text-[var(--text-muted)]">
            <span>{profile.xp.toLocaleString()} XP</span>
            <div className="w-16 h-1.5 rounded-full bg-[var(--bg-base)] overflow-hidden">
              <div
                className="h-full bg-zinc-300 dark:bg-zinc-400 rounded-full transition-all duration-500"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            {nextRank && (
              <span className="text-[10px] text-[var(--text-muted)]">({nextRank.title})</span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1 text-[11px] text-[var(--text-secondary)]">
            <Flame className="w-3.5 h-3.5 text-zinc-400" />
            <span>{profile.streakDays}d streak</span>
          </div>

          <button
            onClick={() => setBadgesModalOpen(true)}
            className="px-2.5 py-1 rounded-lg bg-[var(--bg-base)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-[10px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all flex items-center gap-1 cursor-pointer"
          >
            <Trophy className="w-3 h-3 text-zinc-400" />
            <span>{profile.unlockedBadgeIds.length} Badges</span>
          </button>
        </div>
      </div>

      {/* Arcade Navigation Pills (Minimalist & Clean) */}
      <div className="p-1 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex items-center gap-1 overflow-x-auto no-scrollbar">
        {[
          { id: 'connections', label: 'Connections 4x4', icon: Puzzle },
          { id: 'ultra-vires', label: 'Ultra Vires 60s', icon: Zap },
          { id: 'chrono-timeline', label: 'ChronoTimeline', icon: History },
          { id: 'seventh-schedule', label: '7th Schedule Sort', icon: Layers },
          { id: 'lex-samvidhan', label: 'LexSamvidhan Daily', icon: Target },
          { id: 'escape-room', label: 'Article 368 Escape', icon: Lock },
          { id: 'moot-court', label: '5-Judge Moot Court', icon: Gavel },
          { id: 'assembly-rpg', label: 'Assembly 1946 RPG', icon: Scroll },
          { id: 'bench', label: 'Chief Justice Bench', icon: Scale },
          { id: 'blitz', label: '60s Article Blitz', icon: Zap },
          { id: 'writs', label: 'Writs Emergency', icon: ShieldAlert },
          { id: 'matcher', label: 'Synaptic Matcher', icon: BrainCircuit },
          { id: 'trap-buster', label: 'Trap-Buster Reflex', icon: AlertTriangle }
        ].map((tab) => {
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id as ArcadeTab)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] border border-[var(--border-subtle)] font-bold shadow-xs'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              <tab.icon className={`w-3.5 h-3.5 ${isActive ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)]'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Active Game Mode Sub-View */}
      {activeSubTab === 'escape-room' && (
        <ConstitutionalEscapeRoom onAwardResult={handleAwardResult} />
      )}
      {activeSubTab === 'moot-court' && (
        <ConstitutionBenchMootSimulator onAwardResult={handleAwardResult} />
      )}
      {activeSubTab === 'assembly-rpg' && (
        <ConstituentAssemblyRPG onAwardResult={handleAwardResult} />
      )}
      {activeSubTab === 'lex-samvidhan' && (
        <LexSamvidhanMysteryGame onAwardResult={handleAwardResult} />
      )}
      {activeSubTab === 'connections' && (
        <ConstitutionalConnectionsGame onAwardResult={handleAwardResult} />
      )}
      {activeSubTab === 'ultra-vires' && (
        <UltraViresSwipeGame onAwardResult={handleAwardResult} />
      )}
      {activeSubTab === 'chrono-timeline' && (
        <ChronoTimelineGame onAwardResult={handleAwardResult} />
      )}
      {activeSubTab === 'seventh-schedule' && (
        <SeventhScheduleSortGame onAwardResult={handleAwardResult} />
      )}
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
