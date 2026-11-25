import React, { useState, useMemo, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { springs } from '../../../lib/motionTokens';
import {
  Map,
  CheckCircle2,
  Star,
  Sparkles,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  RotateCcw,
  BookOpen,
  Eye,
  Volume2,
  VolumeX,
  Award,
  AlertTriangle,
  Target,
  Calendar,
  Play,
  HelpCircle,
  Check,
  ArrowLeft
} from 'lucide-react';
import {
  ODYSSEY_CHAPTERS,
  CURRICULUM_PLAN_PRESETS,
  type OdysseyChapterSpec,
  type OdysseySequenceItem
} from '../../../data/curriculumOdysseyData';
import { recordCurriculumOdysseyResult } from '../../../services/judicialCareerService';
import { arcadeAudio } from '../../../services/arcadeAudioService';
import { useTheme } from '../../../context/ThemeContext';

interface ChapterProgress {
  stars: number;
  bestAccuracy: number;
  attempts: number;
  lastPlayedIso: string;
}

interface OdysseySaveState {
  presetId: 'all' | 'prelims-core' | 'institutions' | 'custom';
  plannedIds: string[];
  dailyGoal: 1 | 2 | 3;
  progressByChapter: Record<string, ChapterProgress>;
}

const STORAGE_KEY = 'samvidhan_curriculum_odyssey_v1';

const DEFAULT_SAVE_STATE: OdysseySaveState = {
  presetId: 'all',
  plannedIds: ODYSSEY_CHAPTERS.map((c) => c.id),
  dailyGoal: 2,
  progressByChapter: {}
};

function loadSaveState(): OdysseySaveState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_SAVE_STATE;
    const parsed = JSON.parse(raw) as Partial<OdysseySaveState>;
    return {
      presetId: parsed.presetId || 'all',
      plannedIds: Array.isArray(parsed.plannedIds) && parsed.plannedIds.length > 0
        ? parsed.plannedIds
        : DEFAULT_SAVE_STATE.plannedIds,
      dailyGoal: parsed.dailyGoal === 1 || parsed.dailyGoal === 3 ? parsed.dailyGoal : 2,
      progressByChapter: parsed.progressByChapter || {}
    };
  } catch {
    return DEFAULT_SAVE_STATE;
  }
}

function shuffleArray<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

interface FlipCard {
  uid: string;
  pairId: string;
  side: 'prompt' | 'match';
  text: string;
}

interface CurriculumOdysseyGameProps {
  onAwardResult: (gainedXP: number, leveledUp: boolean, newBadges: string[]) => void;
}

export const CurriculumOdysseyGame: React.FC<CurriculumOdysseyGameProps> = ({ onAwardResult }) => {
  const { setActiveTab, setSelectedSvgId } = useTheme();
  const [saveState, setSaveState] = useState<OdysseySaveState>(() => loadSaveState());
  const [mode, setMode] = useState<'roadmap' | 'mission' | 'debrief'>('roadmap');
  const [showPlanEditor, setShowPlanEditor] = useState<boolean>(false);
  const [filterPlannedOnly, setFilterPlannedOnly] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(arcadeAudio.isMuted());

  // Persist saveState
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(saveState));
    } catch {
      // ignore storage quota failure
    }
  }, [saveState]);

  // Active Mission State
  const [activeChapterId, setActiveChapterId] = useState<string>('ch-01');
  const [round, setRound] = useState<1 | 2 | 3 | 4>(1);
  const [roundScores, setRoundScores] = useState<{ r1: number; r2: number; r3: number; r4: number }>({
    r1: 100,
    r2: 100,
    r3: 100,
    r4: 100
  });

  // Round 1: Flip Cards State
  const [flipDeck, setFlipDeck] = useState<FlipCard[]>([]);
  const [flippedUids, setFlippedUids] = useState<string[]>([]);
  const [matchedPairIds, setMatchedPairIds] = useState<string[]>([]);
  const [flipMismatches, setFlipMismatches] = useState<number>(0);
  const [isCheckingFlip, setIsCheckingFlip] = useState<boolean>(false);

  // Round 2: Cloze State
  const [clozeBank, setClozeBank] = useState<string[]>([]);
  const [slot1, setSlot1] = useState<string | null>(null);
  const [slot2, setSlot2] = useState<string | null>(null);
  const [clozeSubmitted, setClozeSubmitted] = useState<boolean>(false);
  const [showClozeHint, setShowClozeHint] = useState<boolean>(false);

  // Round 3: Sequence Lock State
  const [seqItems, setSeqItems] = useState<OdysseySequenceItem[]>([]);
  const [swapPickIdx, setSwapPickIdx] = useState<number | null>(null);
  const [seqSubmitted, setSeqSubmitted] = useState<boolean>(false);

  // Round 4: Boss Guard State
  const [bossChoice, setBossChoice] = useState<number | null>(null);
  const [bossSubmitted, setBossSubmitted] = useState<boolean>(false);

  // Debrief Result
  const [lastEarned, setLastEarned] = useState<{
    stars: number;
    accuracy: number;
    xp: number;
  } | null>(null);

  const activeChapter: OdysseyChapterSpec = useMemo(
    () => ODYSSEY_CHAPTERS.find((c) => c.id === activeChapterId) || ODYSSEY_CHAPTERS[0],
    [activeChapterId]
  );

  // Plan telemetry
  const plannedChapters = useMemo(
    () => ODYSSEY_CHAPTERS.filter((c) => saveState.plannedIds.includes(c.id)),
    [saveState.plannedIds]
  );

  const completedInPlanCount = useMemo(
    () =>
      plannedChapters.filter((c) => (saveState.progressByChapter[c.id]?.stars || 0) >= 1).length,
    [plannedChapters, saveState.progressByChapter]
  );

  const totalStarsEarned = useMemo(
    () =>
      Object.values(saveState.progressByChapter).reduce((acc, item) => acc + (item.stars || 0), 0),
    [saveState.progressByChapter]
  );

  const nextRecommendedChapter = useMemo(() => {
    const nextUnfinished = plannedChapters.find(
      (c) => (saveState.progressByChapter[c.id]?.stars || 0) === 0
    );
    return nextUnfinished || plannedChapters[0] || ODYSSEY_CHAPTERS[0];
  }, [plannedChapters, saveState.progressByChapter]);

  const remainingInPlan = Math.max(0, plannedChapters.length - completedInPlanCount);
  const estDaysLeft = Math.ceil(remainingInPlan / saveState.dailyGoal);
  const planProgressPct =
    plannedChapters.length > 0
      ? Math.round((completedInPlanCount / plannedChapters.length) * 100)
      : 0;

  const toggleMute = () => {
    arcadeAudio.setMuted(!isMuted);
    setIsMuted(!isMuted);
  };

  // Start or restart a Chapter Mission
  const launchChapterMission = (chapterId: string) => {
    const ch = ODYSSEY_CHAPTERS.find((c) => c.id === chapterId) || ODYSSEY_CHAPTERS[0];
    setActiveChapterId(ch.id);
    setRound(1);
    setRoundScores({ r1: 100, r2: 100, r3: 100, r4: 100 });

    // Prepare Round 1 deck (4 pairs = 8 cards)
    const cards: FlipCard[] = [];
    ch.flipPairs.forEach((p) => {
      cards.push({ uid: `${p.id}-a`, pairId: p.id, side: 'prompt', text: p.prompt });
      cards.push({ uid: `${p.id}-b`, pairId: p.id, side: 'match', text: p.match });
    });
    setFlipDeck(shuffleArray(cards));
    setFlippedUids([]);
    setMatchedPairIds([]);
    setFlipMismatches(0);
    setIsCheckingFlip(false);

    // Prepare Round 2 Cloze bank
    setClozeBank(
      shuffleArray([ch.cloze.correct1, ch.cloze.correct2, ...ch.cloze.distractors])
    );
    setSlot1(null);
    setSlot2(null);
    setClozeSubmitted(false);
    setShowClozeHint(false);

    // Prepare Round 3 Sequence (guarantee initially non-sorted)
    let scrambled = shuffleArray([...ch.sequenceItems]);
    if (scrambled.every((it, idx) => it.canonicalOrder === idx + 1)) {
      scrambled = [scrambled[1], scrambled[0], scrambled[3], scrambled[2]];
    }
    setSeqItems(scrambled);
    setSwapPickIdx(null);
    setSeqSubmitted(false);

    // Prepare Round 4 Boss
    setBossChoice(null);
    setBossSubmitted(false);
    setLastEarned(null);
    setMode('mission');
    arcadeAudio.playTick();
  };

  // Round 1 Card Click Handler
  const handleFlipCard = (card: FlipCard) => {
    if (
      isCheckingFlip ||
      matchedPairIds.includes(card.pairId) ||
      flippedUids.includes(card.uid)
    ) {
      return;
    }

    arcadeAudio.playTick();
    const nextFlipped = [...flippedUids, card.uid];
    setFlippedUids(nextFlipped);

    if (nextFlipped.length === 2) {
      setIsCheckingFlip(true);
      const first = flipDeck.find((c) => c.uid === nextFlipped[0]);
      const second = card;

      if (first && first.pairId === second.pairId && first.uid !== second.uid) {
        setTimeout(() => {
          arcadeAudio.playCorrect(matchedPairIds.length + 1);
          setMatchedPairIds((prev) => [...prev, card.pairId]);
          setFlippedUids([]);
          setIsCheckingFlip(false);
        }, 320);
      } else {
        setTimeout(() => {
          arcadeAudio.playWrong();
          setFlipMismatches((m) => m + 1);
          setFlippedUids([]);
          setIsCheckingFlip(false);
        }, 720);
      }
    }
  };

  const r1Completed = matchedPairIds.length === 4;

  const advanceToRound2 = () => {
    const r1Acc = Math.max(45, 100 - Math.max(0, flipMismatches - 1) * 10);
    setRoundScores((prev) => ({ ...prev, r1: r1Acc }));
    setRound(2);
    arcadeAudio.playTick();
  };

  // Round 2 Chip Click
  const handleSelectChip = (word: string) => {
    if (clozeSubmitted) return;
    if (slot1 === word) {
      setSlot1(null);
      return;
    }
    if (slot2 === word) {
      setSlot2(null);
      return;
    }
    arcadeAudio.playTick();
    if (!slot1) {
      setSlot1(word);
    } else if (!slot2) {
      setSlot2(word);
    } else {
      setSlot2(word);
    }
  };

  const handleSubmitCloze = () => {
    if (!slot1 || !slot2 || clozeSubmitted) return;
    setClozeSubmitted(true);
    const hit1 = slot1 === activeChapter.cloze.correct1 ? 1 : 0;
    const hit2 = slot2 === activeChapter.cloze.correct2 ? 1 : 0;
    const r2Acc = hit1 + hit2 === 2 ? 100 : hit1 + hit2 === 1 ? 65 : 25;
    setRoundScores((prev) => ({ ...prev, r2: r2Acc }));

    if (hit1 + hit2 === 2) {
      arcadeAudio.playCorrect(2);
    } else {
      arcadeAudio.playWrong();
    }
  };

  // Round 3 Sequence Helpers
  const moveSequenceItem = (index: number, delta: -1 | 1) => {
    if (seqSubmitted) return;
    const target = index + delta;
    if (target < 0 || target >= seqItems.length) return;
    const copy = [...seqItems];
    [copy[index], copy[target]] = [copy[target], copy[index]];
    setSeqItems(copy);
    setSwapPickIdx(null);
    arcadeAudio.playTick();
  };

  const tapSequenceCard = (index: number) => {
    if (seqSubmitted) return;
    if (swapPickIdx === null) {
      setSwapPickIdx(index);
      arcadeAudio.playTick();
    } else if (swapPickIdx === index) {
      setSwapPickIdx(null);
    } else {
      const copy = [...seqItems];
      [copy[swapPickIdx], copy[index]] = [copy[index], copy[swapPickIdx]];
      setSeqItems(copy);
      setSwapPickIdx(null);
      arcadeAudio.playTick();
    }
  };

  const handleSubmitSequence = () => {
    if (seqSubmitted) return;
    setSeqSubmitted(true);
    setSwapPickIdx(null);
    const correctSlots = seqItems.filter((item, idx) => item.canonicalOrder === idx + 1).length;
    const r3Acc = Math.round((correctSlots / seqItems.length) * 100);
    setRoundScores((prev) => ({ ...prev, r3: r3Acc }));
    if (correctSlots === 4) {
      arcadeAudio.playCorrect(3);
    } else {
      arcadeAudio.playWrong();
    }
  };

  // Round 4 Boss Guard
  const handleSubmitBoss = () => {
    if (bossChoice === null || bossSubmitted) return;
    setBossSubmitted(true);
    const isHit = bossChoice === activeChapter.boss.correctIndex;
    const r4Acc = isHit ? 100 : 30;
    setRoundScores((prev) => ({ ...prev, r4: r4Acc }));
    if (isHit) {
      arcadeAudio.playStamp();
    } else {
      arcadeAudio.playWrong();
    }
  };

  // Complete Mission & Update Persistent Plan Progress + Career XP
  const finishMission = () => {
    const finalAcc = Math.round(
      (roundScores.r1 + roundScores.r2 + roundScores.r3 + roundScores.r4) / 4
    );
    const stars = finalAcc >= 88 ? 3 : finalAcc >= 65 ? 2 : 1;

    const prevRecord = saveState.progressByChapter[activeChapter.id];
    const updatedProgress: Record<string, ChapterProgress> = {
      ...saveState.progressByChapter,
      [activeChapter.id]: {
        stars: Math.max(prevRecord?.stars || 0, stars),
        bestAccuracy: Math.max(prevRecord?.bestAccuracy || 0, finalAcc),
        attempts: (prevRecord?.attempts || 0) + 1,
        lastPlayedIso: new Date().toISOString()
      }
    };

    setSaveState((prev) => ({
      ...prev,
      progressByChapter: updatedProgress
    }));

    const conqueredCount = Object.values(updatedProgress).filter((p) => p.stars >= 1).length;
    const twoStarCount = Object.values(updatedProgress).filter((p) => p.stars >= 2).length;
    const award = recordCurriculumOdysseyResult(stars, finalAcc, conqueredCount, twoStarCount);

    setLastEarned({
      stars,
      accuracy: finalAcc,
      xp: award.gainedXP
    });
    setMode('debrief');
    arcadeAudio.playFanfare();
    onAwardResult(
      award.gainedXP,
      award.leveledUp,
      award.newBadges.map((b) => b.title)
    );
  };

  // Plan Management Helpers
  const applyPreset = (presetId: 'all' | 'prelims-core' | 'institutions') => {
    const found = CURRICULUM_PLAN_PRESETS.find((p) => p.id === presetId);
    if (!found) return;
    setSaveState((prev) => ({
      ...prev,
      presetId,
      plannedIds: found.chapterIds
    }));
    arcadeAudio.playTick();
  };

  const toggleChapterInPlan = (chapterId: string) => {
    setSaveState((prev) => {
      const exists = prev.plannedIds.includes(chapterId);
      if (exists && prev.plannedIds.length === 1) return prev; // Keep >=1 chapter in plan
      const nextIds = exists
        ? prev.plannedIds.filter((id) => id !== chapterId)
        : [...prev.plannedIds, chapterId].sort(
            (a, b) =>
              ODYSSEY_CHAPTERS.findIndex((c) => c.id === a) -
              ODYSSEY_CHAPTERS.findIndex((c) => c.id === b)
          );
      return {
        ...prev,
        presetId: 'custom',
        plannedIds: nextIds
      };
    });
    arcadeAudio.playTick();
  };

  const resetAllProgress = () => {
    setSaveState(DEFAULT_SAVE_STATE);
    arcadeAudio.playTick();
  };

  const handleOpenVisualBlueprint = (svgId: string) => {
    setSelectedSvgId(svgId);
    setActiveTab('visual-lab');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ======================== ROADMAP & PLANNER VIEW ========================
  if (mode === 'roadmap') {
    const displayedChapters = filterPlannedOnly ? plannedChapters : ODYSSEY_CHAPTERS;

    return (
      <div className="space-y-6 animate-fadeIn">
        {/* Hero Curriculum Planner Banner */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] surface-specular space-y-5">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-secondary)]">
                <Map className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>Curriculum Memory Campaign · 4 Recall Games Per Chapter</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight">
                Samvidhan Odyssey: Plan &amp; Master the Constitution
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-2xl">
                Pick a study track or customize your chapter checklist, set a daily pace, and conquer 4 interactive memory rounds (Pair Flip, Clause Cloze, Sequence Lock &amp; Boss Trap) across all 12 Constitutional chapters.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => setShowPlanEditor((v) => !v)}
                className="px-3.5 py-2.5 rounded-xl bg-[var(--bg-base)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] text-xs font-mono font-semibold text-[var(--text-primary)] flex items-center gap-2 cursor-pointer transition-colors"
              >
                <Calendar className="w-4 h-4 text-[var(--accent)]" />
                <span>{showPlanEditor ? 'Hide Study Planner' : 'Customize Study Plan'}</span>
              </button>

              <button
                type="button"
                onClick={() => launchChapterMission(nextRecommendedChapter.id)}
                className="px-4 py-2.5 rounded-xl bg-[var(--accent)] hover:brightness-110 text-[var(--accent-contrast)] font-mono text-xs font-bold flex items-center gap-2 shadow-sm btn-tactile cursor-pointer transition-all"
              >
                <Play className="w-3.5 h-3.5" />
                <span>
                  Proceed: Ch {nextRecommendedChapter.number} ({nextRecommendedChapter.shortTitle})
                </span>
              </button>
            </div>
          </div>

          {/* Curriculum Progress Telemetry Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-4 border-t border-[var(--border-subtle)]">
            <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
              <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider block">
                Active Plan Completion
              </span>
              <div className="flex items-baseline justify-between mt-1">
                <span className="text-lg font-extrabold font-mono text-[var(--text-primary)] tabular-nums">
                  {completedInPlanCount} / {plannedChapters.length}
                </span>
                <span className="text-xs font-mono font-bold text-[var(--accent)] tabular-nums">
                  {planProgressPct}%
                </span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-[var(--bg-surface)] mt-2 overflow-hidden">
                <div
                  className="h-full bg-[var(--accent)] transition-all duration-500 rounded-full"
                  style={{ width: `${planProgressPct}%` }}
                />
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
              <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider block">
                Constitutional Stars
              </span>
              <div className="flex items-center gap-1.5 mt-1">
                <Star className="w-4 h-4 text-[var(--accent)] fill-[var(--accent)]" />
                <span className="text-lg font-extrabold font-mono text-[var(--text-primary)] tabular-nums">
                  {totalStarsEarned} / 36
                </span>
              </div>
              <span className="text-[10px] font-mono text-[var(--text-muted)] block mt-1">
                Up to 3 Stars per Chapter
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
              <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider block">
                Planned Daily Pace
              </span>
              <div className="flex items-baseline justify-between mt-1">
                <span className="text-lg font-extrabold font-mono text-[var(--text-primary)] tabular-nums">
                  {saveState.dailyGoal} Ch / Day
                </span>
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 tabular-nums">
                  {remainingInPlan === 0 ? 'Complete!' : `${estDaysLeft}d ETA`}
                </span>
              </div>
              <span className="text-[10px] font-mono text-[var(--text-muted)] block mt-1">
                {remainingInPlan} remaining in plan
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
              <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider block">
                Active Curriculum Track
              </span>
              <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)] block mt-1.5 truncate">
                {saveState.presetId === 'custom'
                  ? `Custom Plan (${plannedChapters.length} Ch)`
                  : CURRICULUM_PLAN_PRESETS.find((p) => p.id === saveState.presetId)?.label}
              </span>
              <span className="text-[10px] font-mono text-[var(--accent)] block mt-1">
                Next: Chapter {nextRecommendedChapter.number}
              </span>
            </div>
          </div>

          {/* Expandable Curriculum Plan Builder */}
          {showPlanEditor && (
            <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-strong)] space-y-4 animate-fadeIn">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)]">
                    1. Choose Preset Study Track (or toggle Chapters below)
                  </span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {CURRICULUM_PLAN_PRESETS.map((preset) => {
                      const active = saveState.presetId === preset.id;
                      return (
                        <button
                          key={preset.id}
                          type="button"
                          onClick={() => applyPreset(preset.id as 'all' | 'prelims-core' | 'institutions')}
                          className={`px-3 py-1.5 rounded-xl text-xs font-mono border cursor-pointer transition-colors ${
                            active
                              ? 'bg-[var(--accent)] text-[var(--accent-contrast)] border-[var(--accent)] font-bold'
                              : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                          }`}
                        >
                          {preset.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)]">
                    2. Set Daily Chapter Pace
                  </span>
                  <div className="flex items-center gap-1.5 pt-1">
                    {([1, 2, 3] as const).map((pace) => (
                      <button
                        key={pace}
                        type="button"
                        onClick={() => setSaveState((p) => ({ ...p, dailyGoal: pace }))}
                        className={`px-3 py-1.5 rounded-xl text-xs font-mono border cursor-pointer transition-colors ${
                          saveState.dailyGoal === pace
                            ? 'bg-[var(--accent)] text-[var(--accent-contrast)] border-[var(--accent)] font-bold'
                            : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border-[var(--border-subtle)]'
                        }`}
                      >
                        {pace} Ch/day
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-muted)]">
                <span>Tip: Click any Chapter card&rsquo;s &ldquo;In Plan&rdquo; badge below to tailor a Custom Curriculum.</span>
                <button
                  type="button"
                  onClick={resetAllProgress}
                  className="text-rose-500 hover:underline cursor-pointer flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset Stars &amp; Plan</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Interactive SVG Constitutional Curriculum Progression Map */}
        <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)] flex items-center gap-1.5">
              <Target className="w-4 h-4" />
              Interactive Syllabus Odyssey Map (Click Any Node to Launch Chapter)
            </span>
            <div className="flex items-center gap-3 text-[10px] font-mono text-[var(--text-muted)]">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500" /> Cleared
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)]" /> Next Planned
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full border border-[var(--border-strong)]" /> Queued
              </span>
            </div>
          </div>

          <div className="w-full overflow-x-auto pb-1">
            <svg viewBox="0 0 960 228" className="w-full min-w-[740px] h-auto select-none font-mono">
              <defs>
                <pattern id="odysseyGrid" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="1.5" cy="1.5" r="0.8" fill="var(--border-strong)" opacity="0.35" />
                </pattern>
                <marker id="odysseyArrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M 0 1 L 9 5 L 0 9 z" fill="var(--border-strong)" />
                </marker>
                <marker id="odysseyArrowDone" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M 0 1 L 9 5 L 0 9 z" fill="#059669" />
                </marker>
              </defs>

              <rect x="0" y="0" width="960" height="228" rx="12" fill="var(--bg-base)" stroke="var(--border-subtle)" />
              <rect x="0" y="0" width="960" height="228" rx="12" fill="url(#odysseyGrid)" />

              {/* Vertical step link between Chapter 6 (top-right) and Chapter 7 (bottom-left) */}
              <path
                d="M 865 86 L 865 122 L 95 122 L 95 148"
                fill="none"
                stroke={
                  (saveState.progressByChapter['ch-06']?.stars || 0) > 0
                    ? '#059669'
                    : 'var(--border-strong)'
                }
                strokeWidth="1.6"
                strokeDasharray="5 3"
                markerEnd="url(#odysseyArrow)"
              />

              {ODYSSEY_CHAPTERS.map((ch, idx) => {
                const isRow1 = idx < 6;
                const col = isRow1 ? idx : idx - 6;
                const x = 95 + col * 154;
                const y = isRow1 ? 62 : 172;
                const prog = saveState.progressByChapter[ch.id];
                const stars = prog?.stars || 0;
                const inPlan = saveState.plannedIds.includes(ch.id);
                const isNext = nextRecommendedChapter.id === ch.id;
                const showHoriz = isRow1 ? idx < 5 : idx < 11;

                return (
                  <React.Fragment key={ch.id}>
                    {showHoriz && (
                      <line
                        x1={x + 25}
                        y1={y}
                        x2={x + 125}
                        y2={y}
                        stroke={stars > 0 ? '#059669' : 'var(--border-strong)'}
                        strokeWidth={stars > 0 ? 2 : 1.4}
                        markerEnd={stars > 0 ? 'url(#odysseyArrowDone)' : 'url(#odysseyArrow)'}
                      />
                    )}

                    <g
                      transform={`translate(${x}, ${y})`}
                      onClick={() => launchChapterMission(ch.id)}
                      opacity={inPlan ? 1 : 0.45}
                      className="cursor-pointer vector-node"
                    >
                      <title>{`Ch ${ch.number}: ${ch.title}`}</title>
                      {isNext && (
                        <circle
                          cx="0"
                          cy="0"
                          r="25"
                          fill="none"
                          stroke="var(--accent)"
                          strokeWidth="1.8"
                          strokeDasharray="4 2"
                          className="vector-orbit-pulse"
                        />
                      )}
                      <circle
                        cx="0"
                        cy="0"
                        r="19"
                        fill={stars > 0 ? '#059669' : isNext ? 'var(--accent)' : 'var(--bg-surface)'}
                        stroke={stars > 0 ? '#059669' : isNext ? 'var(--accent)' : 'var(--border-strong)'}
                        strokeWidth="2"
                      />
                      <text
                        x="0"
                        y="4"
                        textAnchor="middle"
                        fontSize="10.5"
                        fontWeight="bold"
                        fill={
                          stars > 0
                            ? '#ffffff'
                            : isNext
                            ? 'var(--accent-contrast)'
                            : 'var(--text-primary)'
                        }
                      >
                        {ch.number}
                      </text>

                      {/* Stars row */}
                      {stars > 0 && (
                        <text x="0" y="-26" textAnchor="middle" fontSize="9" fill="#059669" fontWeight="bold">
                          {'★'.repeat(stars)}
                        </text>
                      )}
                      {isNext && stars === 0 && (
                        <g transform="translate(0, -31)">
                          <rect x="-24" y="-8" width="48" height="14" rx="7" fill="var(--accent)" />
                          <text x="0" y="1.5" textAnchor="middle" fontSize="7" fontWeight="bold" fill="var(--accent-contrast)">
                            NEXT
                          </text>
                        </g>
                      )}

                      <text
                        x="0"
                        y="34"
                        textAnchor="middle"
                        fontSize="8.2"
                        fontWeight={isNext ? 'bold' : 'normal'}
                        fill="var(--text-primary)"
                      >
                        {ch.shortTitle}
                      </text>
                    </g>
                  </React.Fragment>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Chapter Syllabus Cards Grid */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[var(--text-secondary)]">
              Constitutional Curriculum Chapters ({displayedChapters.length})
            </h3>
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs font-mono">
              <button
                type="button"
                onClick={() => setFilterPlannedOnly(false)}
                className={`px-2.5 py-1 rounded-lg cursor-pointer transition-colors ${
                  !filterPlannedOnly
                    ? 'bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] font-bold'
                    : 'text-[var(--text-muted)]'
                }`}
              >
                All 12 Chapters
              </button>
              <button
                type="button"
                onClick={() => setFilterPlannedOnly(true)}
                className={`px-2.5 py-1 rounded-lg cursor-pointer transition-colors ${
                  filterPlannedOnly
                    ? 'bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] font-bold'
                    : 'text-[var(--text-muted)]'
                }`}
              >
                Planned Only ({plannedChapters.length})
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedChapters.map((ch) => {
              const prog = saveState.progressByChapter[ch.id];
              const stars = prog?.stars || 0;
              const inPlan = saveState.plannedIds.includes(ch.id);
              const isNext = nextRecommendedChapter.id === ch.id;

              return (
                <div
                  key={ch.id}
                  className={`p-5 rounded-2xl border flex flex-col justify-between gap-4 transition-all ${
                    isNext
                      ? 'bg-[var(--bg-surface-elevated)] border-[var(--accent)] shadow-sm'
                      : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[var(--bg-base)] text-[var(--accent)] border border-[var(--border-subtle)]">
                        CHAPTER {String(ch.number).padStart(2, '0')} &bull; {ch.articles}
                      </span>

                      <button
                        type="button"
                        onClick={() => toggleChapterInPlan(ch.id)}
                        title={inPlan ? 'Click to remove from custom plan' : 'Click to add to custom plan'}
                        className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold border cursor-pointer transition-colors flex items-center gap-1 ${
                          inPlan
                            ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
                            : 'bg-[var(--bg-base)] text-[var(--text-muted)] border-[var(--border-subtle)]'
                        }`}
                      >
                        {inPlan && <Check className="w-2.5 h-2.5" />}
                        <span>{inPlan ? 'In Plan' : '+ Plan'}</span>
                      </button>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-[var(--text-primary)] leading-snug">
                      {ch.title}
                    </h4>

                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {ch.objective}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2 border-t border-[var(--border-subtle)]">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3].map((s) => (
                          <Star
                            key={s}
                            className={`w-3.5 h-3.5 ${
                              s <= stars
                                ? 'text-emerald-500 fill-emerald-500'
                                : 'text-[var(--border-strong)]'
                            }`}
                          />
                        ))}
                        {prog && (
                          <span className="ml-1.5 text-[11px] text-[var(--text-muted)] tabular-nums">
                            Best {prog.bestAccuracy}%
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-[var(--text-muted)] tabular-nums">
                        ~{ch.estimatedMinutes} min
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => launchChapterMission(ch.id)}
                        className={`flex-1 py-2 px-3 rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
                          isNext
                            ? 'bg-[var(--accent)] text-[var(--accent-contrast)] hover:brightness-110 shadow-xs'
                            : 'bg-[var(--bg-base)] text-[var(--text-primary)] border border-[var(--border-strong)] hover:border-[var(--accent)]'
                        }`}
                      >
                        <Play className="w-3.5 h-3.5" />
                        <span>{stars > 0 ? 'Replay Mission' : 'Start Mission'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleOpenVisualBlueprint(ch.linkedSvgId)}
                        title="Open Matching Visual Law Lab SVG"
                        className="p-2 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--border-strong)] cursor-pointer transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ======================== MISSION DEBRIEF SCREEN ========================
  if (mode === 'debrief' && lastEarned) {
    const nextInPlan =
      plannedChapters.find((c) => c.number > activeChapter.number) || plannedChapters[0];

    return (
      <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-strong)] shadow-md space-y-6 animate-fadeIn">
        <div className="text-center space-y-2 border-b border-[var(--border-subtle)] pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
            <Award className="w-4 h-4" />
            <span>CHAPTER {activeChapter.number} MEMORY MISSION COMPLETE</span>
          </div>
          <h2 className="text-2xl font-extrabold text-[var(--text-primary)] tracking-tight">
            {activeChapter.shortTitle} Mastered
          </h2>
          <p className="text-xs font-mono text-[var(--text-muted)]">
            {activeChapter.articles} &bull; +{lastEarned.xp} Career XP Awarded
          </p>

          <div className="flex items-center justify-center gap-2 pt-3">
            {[1, 2, 3].map((s) => (
              <motion.div
                key={s}
                initial={{ scale: 0.45, opacity: 0, rotate: -18 }}
                animate={{
                  scale: s <= lastEarned.stars ? 1 : 0.92,
                  opacity: 1,
                  rotate: 0
                }}
                transition={{ ...springs.bouncy, delay: s * 0.1 }}
              >
                <Star
                  className={`w-8 h-8 ${
                    s <= lastEarned.stars
                      ? 'text-emerald-500 fill-emerald-500'
                      : 'text-[var(--border-subtle)]'
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Accuracy Breakdown */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center font-mono">
          <div className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
            <span className="text-[10px] text-[var(--text-muted)] block">OVERALL</span>
            <span className="text-lg font-extrabold text-[var(--accent)] tabular-nums">
              {lastEarned.accuracy}%
            </span>
          </div>
          <div className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
            <span className="text-[10px] text-[var(--text-muted)] block">PAIR FLIP</span>
            <span className="text-base font-bold text-[var(--text-primary)] tabular-nums">
              {roundScores.r1}%
            </span>
          </div>
          <div className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
            <span className="text-[10px] text-[var(--text-muted)] block">CLAUSE CLOZE</span>
            <span className="text-base font-bold text-[var(--text-primary)] tabular-nums">
              {roundScores.r2}%
            </span>
          </div>
          <div className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
            <span className="text-[10px] text-[var(--text-muted)] block">SEQUENCE</span>
            <span className="text-base font-bold text-[var(--text-primary)] tabular-nums">
              {roundScores.r3}%
            </span>
          </div>
          <div className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] col-span-2 sm:col-span-1">
            <span className="text-[10px] text-[var(--text-muted)] block">BOSS GUARD</span>
            <span className="text-base font-bold text-[var(--text-primary)] tabular-nums">
              {roundScores.r4}%
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
          {nextInPlan && nextInPlan.id !== activeChapter.id && (
            <button
              type="button"
              onClick={() => launchChapterMission(nextInPlan.id)}
              className="flex-1 py-3 px-4 rounded-xl bg-[var(--accent)] hover:brightness-110 text-[var(--accent-contrast)] font-mono text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Proceed: Ch {nextInPlan.number} ({nextInPlan.shortTitle})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={() => handleOpenVisualBlueprint(activeChapter.linkedSvgId)}
            className="py-3 px-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-strong)] text-xs font-mono font-semibold text-[var(--text-primary)] hover:border-[var(--accent)] flex items-center justify-center gap-2 cursor-pointer"
          >
            <Eye className="w-4 h-4 text-[var(--accent)]" />
            <span>View Matching SVG</span>
          </button>
          <button
            type="button"
            onClick={() => setMode('roadmap')}
            className="py-3 px-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center justify-center gap-2 cursor-pointer"
          >
            <Map className="w-4 h-4" />
            <span>Roadmap</span>
          </button>
        </div>
      </div>
    );
  }

  // ======================== ACTIVE 4-ROUND MEMORY MISSION ========================
  const roundLabels = [
    { num: 1, title: 'Memory Pair Flip' },
    { num: 2, title: 'Clause Cloze Recall' },
    { num: 3, title: 'Sequence Lock' },
    { num: 4, title: 'Boss Guard' }
  ];

  return (
    <div className="space-y-5 animate-fadeIn">
      {/* Top Mission Telemetry Header */}
      <div className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <button
              type="button"
              onClick={() => setMode('roadmap')}
              className="p-2 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer shrink-0"
              title="Back to Curriculum Roadmap"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div className="min-w-0">
              <span className="text-[10px] font-mono font-bold text-[var(--accent)] uppercase tracking-wider block">
                Chapter {activeChapter.number} &bull; {activeChapter.articles}
              </span>
              <h2 className="text-base sm:text-lg font-bold text-[var(--text-primary)] truncate">
                {activeChapter.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => launchChapterMission(activeChapter.id)}
              title="Restart Chapter"
              className="p-2 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={toggleMute}
              title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
              className="p-2 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* 4-Round Stepper */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-[var(--border-subtle)]">
          {roundLabels.map((rl) => {
            const isActive = round === rl.num;
            const isDone = round > rl.num;
            return (
              <div
                key={rl.num}
                className={`px-3 py-2 rounded-xl border text-xs font-mono flex items-center gap-2 ${
                  isActive
                    ? 'bg-[var(--accent)] text-[var(--accent-contrast)] border-[var(--accent)] font-bold'
                    : isDone
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 font-semibold'
                    : 'bg-[var(--bg-base)] text-[var(--text-muted)] border-[var(--border-subtle)]'
                }`}
              >
                <span className="tabular-nums">0{rl.num}.</span>
                <span className="truncate">{rl.title}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ROUND 1: SPATIAL MEMORY PAIR FLIP GRID */}
      {round === 1 && (
        <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
                Round 1: Flip &amp; Pair Constitutional Anchors
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">
                Reveal 2 cards at a time to link Articles, Cases &amp; Core Rules ({matchedPairIds.length}/4 pairs matched · {flipMismatches} mismatches).
              </p>
            </div>
            <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-secondary)] tabular-nums">
              {matchedPairIds.length} / 4 Matched
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3" style={{ perspective: 900 }}>
            {flipDeck.map((card) => {
              const isMatched = matchedPairIds.includes(card.pairId);
              const isFlipped = flippedUids.includes(card.uid);
              const isFaceUp = isMatched || isFlipped;

              return (
                <motion.button
                  key={card.uid}
                  type="button"
                  whileHover={!isMatched ? { y: -2 } : undefined}
                  whileTap={{ scale: 0.97 }}
                  transition={springs.snappy}
                  onClick={() => handleFlipCard(card)}
                  className={`min-h-[112px] p-3.5 rounded-2xl border text-left flex flex-col justify-between transition-[background-color,border-color,box-shadow] duration-150 cursor-pointer ${
                    isMatched
                      ? 'bg-emerald-500/10 border-emerald-500/40 text-[var(--text-primary)]'
                      : isFlipped
                      ? 'bg-[var(--bg-surface-elevated)] border-[var(--accent)] shadow-sm'
                      : 'bg-[var(--bg-base)] border-[var(--border-strong)] hover:border-[var(--accent)]'
                  }`}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {isFaceUp ? (
                      <motion.div
                        key="front"
                        initial={{ opacity: 0, rotateY: -65, scale: 0.94 }}
                        animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                        exit={{ opacity: 0, rotateY: 65, scale: 0.94 }}
                        transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full h-full flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between gap-1">
                          <span
                            className={`text-[9px] font-mono font-bold uppercase px-1.5 py-0.5 rounded ${
                              card.side === 'prompt'
                                ? 'bg-sky-500/10 text-sky-600 dark:text-sky-400'
                                : 'bg-violet-500/10 text-violet-600 dark:text-violet-400'
                            }`}
                          >
                            {card.side === 'prompt' ? 'ANCHOR' : 'DOCTRINE / RULE'}
                          </span>
                          {isMatched && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />}
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)] leading-snug mt-2">
                          {card.text}
                        </span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="back"
                        initial={{ opacity: 0, rotateY: 65, scale: 0.94 }}
                        animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                        exit={{ opacity: 0, rotateY: -65, scale: 0.94 }}
                        transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full h-full flex flex-col items-center justify-center gap-1.5 py-3 text-center"
                      >
                        <Sparkles className="w-4 h-4 text-[var(--accent)] opacity-70" />
                        <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                          Reveal Card
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </div>

          {r1Completed && (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fadeIn">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--text-primary)]">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>All 4 Constitutional Memory Pairs locked cleanly!</span>
              </div>
              <button
                type="button"
                onClick={advanceToRound2}
                className="px-4 py-2 rounded-xl bg-[var(--accent)] text-[var(--accent-contrast)] font-mono text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Proceed to Clause Cloze Recall</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* ROUND 2: BARE-ACT & DOCTRINE CLAUSE CLOZE */}
      {round === 2 && (
        <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
                Round 2: Bare-Act &amp; Doctrine Clause Recall
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">
                Tap phrases from the Memory Bank below to slot the exact constitutional words into Blanks 1 &amp; 2.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowClozeHint((h) => !h)}
              className="px-2.5 py-1 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)] flex items-center gap-1 cursor-pointer"
            >
              <HelpCircle className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>{showClozeHint ? 'Hide Hint' : 'Hint'}</span>
            </button>
          </div>

          {showClozeHint && (
            <div className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-strong)] text-xs text-[var(--text-secondary)]">
              <strong className="text-[var(--accent)]">Recall Clue:</strong> {activeChapter.cloze.hint}
            </div>
          )}

          {/* Sentence Box with Interactive Slots */}
          <div className="p-5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-sm sm:text-base leading-loose font-serif text-[var(--text-primary)]">
            <span>{activeChapter.cloze.prefix}</span>
            <button
              type="button"
              onClick={() => !clozeSubmitted && setSlot1(null)}
              className={`inline-flex items-center px-3 py-0.5 mx-1 rounded-lg font-mono text-xs sm:text-sm font-bold border align-baseline cursor-pointer transition-colors ${
                clozeSubmitted
                  ? slot1 === activeChapter.cloze.correct1
                    ? 'bg-emerald-500/15 border-emerald-500 text-emerald-600 dark:text-emerald-400'
                    : 'bg-rose-500/15 border-rose-500 text-rose-600 dark:text-rose-400'
                  : slot1
                  ? 'bg-[var(--accent)] text-[var(--accent-contrast)] border-[var(--accent)]'
                  : 'bg-[var(--bg-surface)] border-dashed border-[var(--border-strong)] text-[var(--text-muted)]'
              }`}
            >
              <motion.span
                key={slot1 || 'empty-slot-1'}
                initial={{ scale: 0.9, opacity: 0.65 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={springs.snappy}
              >
                {slot1 || '[ Blank 1 ]'}
              </motion.span>
            </button>
            <span>{activeChapter.cloze.middle}</span>
            <button
              type="button"
              onClick={() => !clozeSubmitted && setSlot2(null)}
              className={`inline-flex items-center px-3 py-0.5 mx-1 rounded-lg font-mono text-xs sm:text-sm font-bold border align-baseline cursor-pointer transition-colors ${
                clozeSubmitted
                  ? slot2 === activeChapter.cloze.correct2
                    ? 'bg-emerald-500/15 border-emerald-500 text-emerald-600 dark:text-emerald-400'
                    : 'bg-rose-500/15 border-rose-500 text-rose-600 dark:text-rose-400'
                  : slot2
                  ? 'bg-[var(--accent)] text-[var(--accent-contrast)] border-[var(--accent)]'
                  : 'bg-[var(--bg-surface)] border-dashed border-[var(--border-strong)] text-[var(--text-muted)]'
              }`}
            >
              <motion.span
                key={slot2 || 'empty-slot-2'}
                initial={{ scale: 0.9, opacity: 0.65 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={springs.snappy}
              >
                {slot2 || '[ Blank 2 ]'}
              </motion.span>
            </button>
            <span>{activeChapter.cloze.suffix}</span>
          </div>

          {/* Option Chips */}
          <div className="flex flex-wrap gap-2">
            {clozeBank.map((word) => {
              const isUsed = slot1 === word || slot2 === word;
              return (
                <button
                  key={word}
                  type="button"
                  disabled={clozeSubmitted}
                  onClick={() => handleSelectChip(word)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono border cursor-pointer transition-all ${
                    isUsed
                      ? 'bg-[var(--bg-surface-elevated)] border-[var(--accent)] text-[var(--accent)] font-bold'
                      : 'bg-[var(--bg-base)] border-[var(--border-strong)] text-[var(--text-primary)] hover:border-[var(--accent)]'
                  }`}
                >
                  {word}
                </button>
              );
            })}
          </div>

          {!clozeSubmitted ? (
            <button
              type="button"
              disabled={!slot1 || !slot2}
              onClick={handleSubmitCloze}
              className="px-5 py-2.5 rounded-xl bg-[var(--accent)] disabled:opacity-40 text-[var(--accent-contrast)] font-mono text-xs font-bold cursor-pointer"
            >
              Lock Clause in Memory
            </button>
          ) : (
            <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-strong)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fadeIn">
              <div className="space-y-1 text-xs">
                <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 block">
                  Canonical Text ({activeChapter.cloze.citation}):
                </span>
                <span className="text-[var(--text-secondary)]">
                  Blank 1 = <strong>{activeChapter.cloze.correct1}</strong> &bull; Blank 2 ={' '}
                  <strong>{activeChapter.cloze.correct2}</strong>
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setRound(3);
                  arcadeAudio.playTick();
                }}
                className="px-4 py-2 rounded-xl bg-[var(--accent)] text-[var(--accent-contrast)] font-mono text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shrink-0"
              >
                <span>Proceed to Sequence Lock</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* ROUND 3: SEQUENCE LOCK */}
      {round === 3 && (
        <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-5">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
              Round 3: {activeChapter.sequenceTitle}
            </h3>
            <p className="text-xs text-[var(--text-secondary)]">
              Order stages 1 (earliest/first) to 4 (latest/final) using the arrows OR tap any two cards to swap them cleanly.
            </p>
          </div>

          <div className="space-y-2.5">
            {seqItems.map((item, idx) => {
              const isPicked = swapPickIdx === idx;
              const isPosCorrect = seqSubmitted && item.canonicalOrder === idx + 1;

              return (
                <motion.div
                  key={item.id}
                  layout
                  transition={springs.snappy}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => tapSequenceCard(idx)}
                  className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 cursor-pointer transition-[background-color,border-color,box-shadow] duration-150 ${
                    seqSubmitted
                      ? isPosCorrect
                        ? 'bg-emerald-500/10 border-emerald-500/40'
                        : 'bg-rose-500/10 border-rose-500/40'
                      : isPicked
                      ? 'bg-[var(--bg-surface-elevated)] border-[var(--accent)] ring-1 ring-[var(--accent)]'
                      : 'bg-[var(--bg-base)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="w-7 h-7 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-center text-xs font-mono font-bold text-[var(--accent)] shrink-0 tabular-nums">
                      #{idx + 1}
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)] truncate">
                        {item.label}
                      </h4>
                      {seqSubmitted && (
                        <span className="text-[11px] font-mono text-[var(--text-secondary)] block">
                          True Order: #{item.canonicalOrder} &bull; {item.sub}
                        </span>
                      )}
                    </div>
                  </div>

                  {!seqSubmitted && (
                    <div
                      className="flex items-center gap-1 shrink-0"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        type="button"
                        disabled={idx === 0}
                        onClick={() => moveSequenceItem(idx, -1)}
                        className="p-1.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)] disabled:opacity-30 cursor-pointer"
                        aria-label="Move stage up"
                      >
                        <ArrowUp className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        disabled={idx === seqItems.length - 1}
                        onClick={() => moveSequenceItem(idx, 1)}
                        className="p-1.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)] disabled:opacity-30 cursor-pointer"
                        aria-label="Move stage down"
                      >
                        <ArrowDown className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {!seqSubmitted ? (
            <button
              type="button"
              onClick={handleSubmitSequence}
              className="px-5 py-2.5 rounded-xl bg-[var(--accent)] text-[var(--accent-contrast)] font-mono text-xs font-bold cursor-pointer"
            >
              Verify Sequence Order
            </button>
          ) : (
            <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-strong)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fadeIn">
              <span className="text-xs font-mono text-[var(--text-primary)]">
                Sequence Accuracy Locked: <strong>{roundScores.r3}%</strong>
              </span>
              <button
                type="button"
                onClick={() => {
                  setRound(4);
                  arcadeAudio.playTick();
                }}
                className="px-4 py-2 rounded-xl bg-[var(--accent)] text-[var(--accent-contrast)] font-mono text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Enter Boss Distinction Round</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* ROUND 4: BOSS DISTINCTION GUARD */}
      {round === 4 && (
        <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-5">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/30 text-[10px] font-mono font-bold uppercase">
              <AlertTriangle className="w-3.5 h-3.5" />
              Round 4: Boss Constitutional Trap Guard
            </span>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed bg-[var(--bg-base)] p-3.5 rounded-xl border border-[var(--border-subtle)]">
              {activeChapter.boss.scenario}
            </p>
            <h3 className="text-base font-bold text-[var(--text-primary)] pt-1">
              {activeChapter.boss.question}
            </h3>
          </div>

          <div className="space-y-2.5">
            {activeChapter.boss.options.map((opt, idx) => {
              const isSelected = bossChoice === idx;
              const isCorrect = idx === activeChapter.boss.correctIndex;

              return (
                <button
                  key={idx}
                  type="button"
                  disabled={bossSubmitted}
                  onClick={() => {
                    setBossChoice(idx);
                    arcadeAudio.playTick();
                  }}
                  className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm transition-all cursor-pointer flex items-start gap-3 ${
                    bossSubmitted
                      ? isCorrect
                        ? 'bg-emerald-500/10 border-emerald-500 text-[var(--text-primary)] font-semibold'
                        : isSelected
                        ? 'bg-rose-500/10 border-rose-500 text-[var(--text-primary)]'
                        : 'bg-[var(--bg-base)] border-[var(--border-subtle)] opacity-60'
                      : isSelected
                      ? 'bg-[var(--bg-surface-elevated)] border-[var(--accent)] ring-1 ring-[var(--accent)] text-[var(--text-primary)] font-semibold'
                      : 'bg-[var(--bg-base)] border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-[var(--text-secondary)]'
                  }`}
                >
                  <span className="font-mono font-bold text-[var(--accent)] shrink-0">
                    {String.fromCharCode(65 + idx)}.
                  </span>
                  <span>{opt}</span>
                </button>
              );
            })}
          </div>

          {!bossSubmitted ? (
            <button
              type="button"
              disabled={bossChoice === null}
              onClick={handleSubmitBoss}
              className="px-5 py-2.5 rounded-xl bg-[var(--accent)] disabled:opacity-40 text-[var(--accent-contrast)] font-mono text-xs font-bold cursor-pointer"
            >
              Deliver Final Verdict
            </button>
          ) : (
            <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-strong)] space-y-3 animate-fadeIn">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  <BookOpen className="w-4 h-4" />
                  <span>Authority: {activeChapter.boss.authority}</span>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {activeChapter.boss.explanation}
                </p>
              </div>
              <button
                type="button"
                onClick={finishMission}
                className="w-full py-3 px-4 rounded-xl bg-[var(--accent)] text-[var(--accent-contrast)] font-mono text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Award className="w-4 h-4" />
                <span>Claim Chapter Stars &amp; Career XP</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
