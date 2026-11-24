import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  Layers,
  Timer,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Volume2,
  VolumeX,
  Flame,
  ArrowRight,
  ShieldAlert,
  HelpCircle,
  Award
} from 'lucide-react';
import {
  SEVENTH_SCHEDULE_ITEMS,
  getRandomScheduleItem,
  type LegislativeList,
  type ScheduleItem
} from '../../../data/seventhScheduleSortData';
import { arcadeAudio } from '../../../services/arcadeAudioService';
import { recordSeventhScheduleResult } from '../../../services/judicialCareerService';

interface SeventhScheduleSortGameProps {
  onAwardResult: (gainedXP: number, leveledUp: boolean, newBadges: string[]) => void;
}

export const SeventhScheduleSortGame: React.FC<SeventhScheduleSortGameProps> = ({
  onAwardResult
}) => {
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'gameover'>('idle');
  const [timeLeft, setTimeLeft] = useState<number>(45);
  const [currentItem, setCurrentItem] = useState<ScheduleItem>(() => getRandomScheduleItem());
  const [seenItemIds, setSeenItemIds] = useState<string[]>([]);

  // Scores
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [wrongCount, setWrongCount] = useState<number>(0);
  const [currentStreak, setCurrentStreak] = useState<number>(0);
  const [bestStreak, setBestStreak] = useState<number>(0);
  const [missedItems, setMissedItems] = useState<Array<{ item: ScheduleItem; chosen: LegislativeList }>>([]);

  // Instant Feedback banner
  const [lastFeedback, setLastFeedback] = useState<{
    wasCorrect: boolean;
    item: ScheduleItem;
    chosen: LegislativeList;
  } | null>(null);

  const [isMuted, setIsMuted] = useState<boolean>(arcadeAudio.isMuted());
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const toggleMute = () => {
    arcadeAudio.setMuted(!isMuted);
    setIsMuted(!isMuted);
  };

  const handleStartGame = () => {
    setGameState('playing');
    setTimeLeft(45);
    setCorrectCount(0);
    setWrongCount(0);
    setCurrentStreak(0);
    setBestStreak(0);
    setMissedItems([]);
    setLastFeedback(null);
    const firstItem = getRandomScheduleItem();
    setCurrentItem(firstItem);
    setSeenItemIds([firstItem.id]);
    arcadeAudio.playTick();
  };

  // Timer countdown loop
  useEffect(() => {
    if (gameState !== 'playing') {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          setGameState('gameover');
          return 0;
        }
        if (prev <= 6) {
          arcadeAudio.playTick();
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gameState]);

  // Award result when gameover
  useEffect(() => {
    if (gameState === 'gameover') {
      const total = correctCount + wrongCount;
      const accuracy = total > 0 ? Math.round((correctCount / total) * 100) : 0;
      if (correctCount > 0) {
        arcadeAudio.playFanfare();
        const res = recordSeventhScheduleResult(correctCount, bestStreak, accuracy);
        onAwardResult(res.gainedXP, res.leveledUp, res.newBadges.map((b) => b.title));
      }
    }
  }, [gameState]);

  const handleClassify = useCallback(
    (chosenList: LegislativeList) => {
      if (gameState !== 'playing') return;

      const isCorrect = chosenList === currentItem.list;

      if (isCorrect) {
        arcadeAudio.playCorrect(Math.min(currentStreak + 1, 4));
        setCorrectCount((prev) => prev + 1);
        setCurrentStreak((prev) => {
          const next = prev + 1;
          setBestStreak((b) => Math.max(b, next));
          return next;
        });
      } else {
        arcadeAudio.playWrong();
        setWrongCount((prev) => prev + 1);
        setCurrentStreak(0);
        setMissedItems((prev) => [...prev, { item: currentItem, chosen: chosenList }]);
      }

      setLastFeedback({
        wasCorrect: isCorrect,
        item: currentItem,
        chosen: chosenList
      });

      // Advance to next random unviewed item
      const nextSeen = [...seenItemIds, currentItem.id];
      const nextItem = getRandomScheduleItem(nextSeen);
      setCurrentItem(nextItem);
      setSeenItemIds(nextSeen);
    },
    [gameState, currentItem, seenItemIds, currentStreak]
  );

  // Keyboard controls: 1 = Union, 2 = State, 3 = Concurrent
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameState !== 'playing') return;
      if (e.key === '1') handleClassify('union');
      if (e.key === '2') handleClassify('state');
      if (e.key === '3') handleClassify('concurrent');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState, handleClassify]);

  const getListLabel = (list: LegislativeList) => {
    switch (list) {
      case 'union':
        return 'Union List (List I)';
      case 'state':
        return 'State List (List II)';
      case 'concurrent':
        return 'Concurrent List (List III)';
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-3 animate-fadeIn select-none">
      {/* =====================================================================
          SLIM STATUS BAR (Zero Emojis, Clean Editorial)
      ===================================================================== */}
      <div className="py-2 px-3 sm:px-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-2.5 text-xs font-mono shadow-xs">
        <div className="flex items-center gap-2.5">
          <span className="font-bold text-[var(--text-primary)] flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-zinc-300" />
            7th Schedule Sorter
          </span>

          {/* 45s Countdown Timer */}
          <div
            className={`px-2 py-0.5 rounded-lg border flex items-center gap-1 font-bold text-xs transition-all ${
              timeLeft <= 10 && gameState === 'playing'
                ? 'bg-rose-500/15 border-rose-500/40 text-rose-400 animate-pulse'
                : 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-secondary)]'
            }`}
          >
            <Timer className="w-3 h-3 text-zinc-400" />
            <span>{timeLeft}s</span>
          </div>
        </div>

        {/* Live Score & Controls */}
        <div className="flex items-center gap-2.5 text-[11px]">
          <span className="text-emerald-400 font-semibold font-mono">✓ {correctCount}</span>
          <span className="text-rose-400 font-semibold font-mono">✕ {wrongCount}</span>
          <span className="text-zinc-300 font-bold border-l border-[var(--border-subtle)] pl-2 flex items-center gap-1 font-mono">
            <Flame className="w-3 h-3 text-zinc-400" />
            {currentStreak}x
          </span>

          <div className="flex items-center gap-1 border-l border-[var(--border-subtle)] pl-2">
            <button
              onClick={toggleMute}
              className="p-1 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-zinc-300" />}
            </button>

            {gameState !== 'idle' && (
              <button
                onClick={handleStartGame}
                className="p-1 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
                title="Restart Sorter"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* =====================================================================
          SCREEN 1: IDLE / BRIEFING
      ===================================================================== */}
      {gameState === 'idle' && (
        <div className="p-5 sm:p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-center space-y-3.5 animate-fadeIn shadow-xs max-w-xl mx-auto">
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
              Seventh Schedule Speed Sorter
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed max-w-md mx-auto">
              Test your instinctive recall of the three legislative lists under Article 246. Classify subjects into <strong>Union</strong>, <strong>State</strong>, or <strong>Concurrent</strong> before time expires.
            </p>
          </div>

          {/* Quick List Preview Chips */}
          <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto text-[11px] font-mono">
            <div className="py-1 px-1.5 rounded-lg bg-sky-500/10 border border-sky-500/25 text-sky-300">
              [1] Union List
            </div>
            <div className="py-1 px-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-300">
              [2] State List
            </div>
            <div className="py-1 px-1.5 rounded-lg bg-violet-500/10 border border-violet-500/25 text-violet-300">
              [3] Concurrent
            </div>
          </div>

          <div className="pt-1">
            <button
              onClick={handleStartGame}
              className="px-6 py-2 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs font-mono uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Start 45s Sorter</span>
            </button>
          </div>
        </div>
      )}

      {/* =====================================================================
          SCREEN 2: ACTIVE GAMEPLAY
      ===================================================================== */}
      {gameState === 'playing' && (
        <div className="space-y-2.5">
          {/* Legislative Subject Card */}
          <div className="p-4 sm:p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-2.5 shadow-xs min-h-[120px] flex flex-col justify-between text-center">
            <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
              Article 246 Legislative Jurisdiction
            </div>

            <div className="my-auto py-2">
              <h2 className="text-lg sm:text-xl font-black text-[var(--text-primary)] tracking-tight">
                {currentItem.subject}
              </h2>
            </div>

            <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
              Select list (or press keys 1, 2, or 3)
            </div>
          </div>

          {/* 3 Ergonomic Decision Buttons */}
          <div className="grid grid-cols-3 gap-2 font-mono">
            {/* Button 1: Union List */}
            <button
              onClick={() => handleClassify('union')}
              className="py-2.5 px-2 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-300 font-bold text-xs uppercase tracking-wide transition-all flex flex-col items-center justify-center gap-0.5 cursor-pointer shadow-2xs"
            >
              <span>UNION LIST</span>
              <span className="text-[9px] font-normal text-sky-400/70">(List I • Key 1)</span>
            </button>

            {/* Button 2: State List */}
            <button
              onClick={() => handleClassify('state')}
              className="py-2.5 px-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-bold text-xs uppercase tracking-wide transition-all flex flex-col items-center justify-center gap-0.5 cursor-pointer shadow-2xs"
            >
              <span>STATE LIST</span>
              <span className="text-[9px] font-normal text-emerald-400/70">(List II • Key 2)</span>
            </button>

            {/* Button 3: Concurrent List */}
            <button
              onClick={() => handleClassify('concurrent')}
              className="py-2.5 px-2 rounded-xl bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/30 text-violet-300 font-bold text-xs uppercase tracking-wide transition-all flex flex-col items-center justify-center gap-0.5 cursor-pointer shadow-2xs"
            >
              <span>CONCURRENT</span>
              <span className="text-[9px] font-normal text-violet-400/70">(List III • Key 3)</span>
            </button>
          </div>

          {/* Instant Ratio & Entry Revelation Feed */}
          {lastFeedback && (
            <div
              className={`py-1.5 px-3 rounded-lg border text-xs font-mono space-y-0.5 animate-fadeIn ${
                lastFeedback.wasCorrect
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                  : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
              }`}
            >
              <div className="flex items-center justify-between font-bold text-[11px]">
                <span>
                  {lastFeedback.wasCorrect ? '✓ CORRECT LIST' : '✕ JURISDICTION MISMATCH'}
                </span>
                <span className="opacity-80">
                  {lastFeedback.item.entryNumber}
                  {lastFeedback.item.landmarkOrAmdt ? ` (${lastFeedback.item.landmarkOrAmdt})` : ''}
                </span>
              </div>
              <p className="text-[11px] opacity-90">
                {lastFeedback.item.trapNote}
              </p>
            </div>
          )}
        </div>
      )}

      {/* =====================================================================
          SCREEN 3: GAME OVER / SCORECARD & REVIEW
      ===================================================================== */}
      {gameState === 'gameover' && (
        <div className="p-4 sm:p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-3.5 max-w-xl mx-auto shadow-xs animate-fadeIn">
          <div className="text-center space-y-1 pb-3 border-b border-[var(--border-subtle)]">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-secondary)] font-bold block">
              45-Second Drill Completed
            </span>
            <h3 className="text-sm sm:text-base font-bold text-[var(--text-primary)]">
              Legislative Competence Breakdown
            </h3>
          </div>

          {/* Minimalist Metrics Strip */}
          <div className="grid grid-cols-4 gap-2 text-center font-mono">
            <div className="py-2 px-1.5 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)]">
              <span className="text-[9.5px] text-[var(--text-muted)] block uppercase tracking-wider">
                Correct
              </span>
              <span className="text-sm sm:text-base font-bold text-emerald-400">{correctCount}</span>
            </div>

            <div className="py-2 px-1.5 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)]">
              <span className="text-[9.5px] text-[var(--text-muted)] block uppercase tracking-wider">
                Accuracy
              </span>
              <span className="text-sm sm:text-base font-bold text-[var(--text-primary)]">
                {correctCount + wrongCount > 0
                  ? Math.round((correctCount / (correctCount + wrongCount)) * 100)
                  : 0}
                %
              </span>
            </div>

            <div className="py-2 px-1.5 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)]">
              <span className="text-[9.5px] text-[var(--text-muted)] block uppercase tracking-wider">
                Streak
              </span>
              <span className="text-sm sm:text-base font-bold text-sky-400">{bestStreak}x</span>
            </div>

            <div className="py-2 px-1.5 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)]">
              <span className="text-[9.5px] text-[var(--text-muted)] block uppercase tracking-wider">
                XP
              </span>
              <span className="text-sm sm:text-base font-bold text-purple-400">
                +{correctCount * 15}
              </span>
            </div>
          </div>

          {/* Missed Items Review Drawer */}
          {missedItems.length > 0 && (
            <div className="p-3 rounded-lg bg-rose-500/5 border border-rose-500/20 space-y-2">
              <h4 className="text-[11px] font-mono uppercase tracking-wider text-rose-400 font-bold flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5" />
                Review Missed Subjects ({missedItems.length}):
              </h4>

              <div className="space-y-2 max-h-48 overflow-y-auto divide-y divide-[var(--border-subtle)]">
                {missedItems.map((m, idx) => (
                  <div key={idx} className="pt-1.5 text-xs space-y-0.5">
                    <span className="font-semibold text-[var(--text-primary)] block text-[11.5px]">
                      {m.item.subject}
                    </span>
                    <div className="flex items-center gap-2 font-mono text-[10px]">
                      <span className="px-1.5 py-0.2 rounded bg-zinc-800 text-zinc-200 border border-zinc-700 font-bold">
                        Correct: {getListLabel(m.item.list)}
                      </span>
                      <span className="text-[var(--text-muted)]">
                        {m.item.entryNumber}
                      </span>
                    </div>
                    <p className="text-[10.5px] text-[var(--text-secondary)] italic">
                      {m.item.trapNote}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action CTAs */}
          <div className="pt-1 flex items-center justify-center">
            <button
              onClick={handleStartGame}
              className="px-4 py-2 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Play Another Round</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
