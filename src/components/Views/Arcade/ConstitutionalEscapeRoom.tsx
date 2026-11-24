import React, { useState, useEffect, useMemo } from 'react';
import {
  Lock,
  Unlock,
  Key,
  ShieldAlert,
  Zap,
  Flame,
  Clock,
  RotateCcw,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Trophy,
  Sparkles,
  Volume2,
  VolumeX,
  ArrowRight,
  Gavel,
  Skull,
  Crosshair,
  ChevronRight
} from 'lucide-react';
import {
  CHAMBER_1_DIALS,
  CIRCUIT_STAGES,
  EMERGENCY_KEYPAD_RIDDLES,
  GHOST_PRECEDENTS,
  SLAYER_PRECEDENTS
} from '../../../data/escapeRoomData';
import { arcadeAudio } from '../../../services/arcadeAudioService';
import { recordEscapeRoomResult } from '../../../services/judicialCareerService';

interface ConstitutionalEscapeRoomProps {
  onAwardResult: (gainedXP: number, leveledUp: boolean, newBadges: string[]) => void;
}

export const ConstitutionalEscapeRoom: React.FC<ConstitutionalEscapeRoomProps> = ({ onAwardResult }) => {
  // Game state: 'intro' | 'chamber1' | 'chamber2' | 'chamber3' | 'chamber4' | 'escaped' | 'failed'
  const [gameState, setGameState] = useState<'intro' | 'chamber1' | 'chamber2' | 'chamber3' | 'chamber4' | 'escaped' | 'failed'>('intro');

  // 5-Minute Timer (300 seconds)
  const [timeLeft, setTimeLeft] = useState<number>(300);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(arcadeAudio.isMuted());
  const [mistakesCount, setMistakesCount] = useState<number>(0);

  // -------------------------------------------------------------------------
  // CHAMBER 1: MAJORITY COMBINATION LOCK STATE
  // -------------------------------------------------------------------------
  const [dialSelections, setDialSelections] = useState<Record<string, string>>({});
  const [chamber1Feedback, setChamber1Feedback] = useState<string | null>(null);

  // -------------------------------------------------------------------------
  // CHAMBER 2: GOLDEN TRIANGLE CIRCUIT STATE
  // -------------------------------------------------------------------------
  const [circuitStep, setCircuitStep] = useState<number>(0);
  const [circuitFeedback, setCircuitFeedback] = useState<{ text: string; isCorrect: boolean } | null>(null);

  // -------------------------------------------------------------------------
  // CHAMBER 3: EMERGENCY KEYPAD STATE
  // -------------------------------------------------------------------------
  const [keypadRiddleIdx, setKeypadRiddleIdx] = useState<number>(0);
  const [numericBuffer, setNumericBuffer] = useState<string>('');
  const [keypadFeedback, setKeypadFeedback] = useState<{ text: string; isCorrect: boolean } | null>(null);

  // -------------------------------------------------------------------------
  // CHAMBER 4: OVERRULED PRECEDENTS GRAVEYARD STATE
  // -------------------------------------------------------------------------
  const [selectedGhostId, setSelectedGhostId] = useState<string | null>(null);
  const [pairedTombstones, setPairedTombstones] = useState<Record<string, string>>({}); // ghostId -> slayerId
  const [graveyardFeedback, setGraveyardFeedback] = useState<string | null>(null);

  // Audio Toggle
  const toggleMute = () => {
    arcadeAudio.setMuted(!isMuted);
    setIsMuted(!isMuted);
  };

  // Timer Tick
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsTimerRunning(false);
            setGameState('failed');
            arcadeAudio.playWrong();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, timeLeft]);

  const formatTimer = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Start the Escape Challenge
  const handleStartGame = () => {
    setTimeLeft(300);
    setMistakesCount(0);
    setDialSelections({});
    setCircuitStep(0);
    setCircuitFeedback(null);
    setKeypadRiddleIdx(0);
    setNumericBuffer('');
    setKeypadFeedback(null);
    setSelectedGhostId(null);
    setPairedTombstones({});
    setGraveyardFeedback(null);
    setGameState('chamber1');
    setIsTimerRunning(true);
    arcadeAudio.playStamp();
  };

  // Apply time penalty on mistake
  const applyPenalty = (seconds: number = 15) => {
    setMistakesCount((prev) => prev + 1);
    setTimeLeft((prev) => Math.max(5, prev - seconds));
    arcadeAudio.playWrong();
  };

  // -------------------------------------------------------------------------
  // CHAMBER 1 HANDLERS
  // -------------------------------------------------------------------------
  const handleSelectDial = (riddleId: string, option: string) => {
    setDialSelections((prev) => ({
      ...prev,
      [riddleId]: option
    }));
  };

  const handleVerifyChamber1 = () => {
    const allAnswered = CHAMBER_1_DIALS.every((d) => Boolean(dialSelections[d.id]));
    if (!allAnswered) {
      setChamber1Feedback('⚠️ Set all 4 mechanical dials before engaging lock pins!');
      return;
    }

    const allCorrect = CHAMBER_1_DIALS.every((d) => dialSelections[d.id] === d.correctAnswer);
    if (allCorrect) {
      arcadeAudio.playStamp();
      arcadeAudio.playCorrect(2);
      setChamber1Feedback('✅ PINS ALIGNED! Blast Door 1 Disengaged. Proceeding to Circuit Chamber...');
      setTimeout(() => {
        setChamber1Feedback(null);
        setGameState('chamber2');
      }, 1200);
    } else {
      applyPenalty(15);
      setChamber1Feedback('COMBINATION MISMATCH! The lock pins resisted. -15 Seconds Penalty!');
    }
  };

  // -------------------------------------------------------------------------
  // CHAMBER 2 HANDLERS
  // -------------------------------------------------------------------------
  const handleCircuitChoice = (isCorrect: boolean, feedback: string) => {
    if (isCorrect) {
      arcadeAudio.playCorrect(circuitStep + 1);
      setCircuitFeedback({ text: feedback, isCorrect: true });
      setTimeout(() => {
        setCircuitFeedback(null);
        if (circuitStep < CIRCUIT_STAGES.length - 1) {
          setCircuitStep((prev) => prev + 1);
        } else {
          setGameState('chamber3');
          arcadeAudio.playStamp();
        }
      }, 1400);
    } else {
      applyPenalty(15);
      setCircuitFeedback({ text: feedback, isCorrect: false });
    }
  };

  // -------------------------------------------------------------------------
  // CHAMBER 3 HANDLERS
  // -------------------------------------------------------------------------
  const handleKeypadPress = (val: string) => {
    if (numericBuffer.length < 6) {
      setNumericBuffer((prev) => prev + val);
    }
  };

  const handleKeypadClear = () => {
    setNumericBuffer('');
  };

  const handleVerifyNumericKeypad = () => {
    const currentRiddle = EMERGENCY_KEYPAD_RIDDLES[keypadRiddleIdx];
    if (numericBuffer.trim() === currentRiddle.correctCode) {
      arcadeAudio.playCorrect(keypadRiddleIdx + 1);
      setKeypadFeedback({ text: `✅ OVERRIDE ACCEPTED! ${currentRiddle.explanation}`, isCorrect: true });
      setTimeout(() => {
        setNumericBuffer('');
        setKeypadFeedback(null);
        if (keypadRiddleIdx < EMERGENCY_KEYPAD_RIDDLES.length - 1) {
          setKeypadRiddleIdx((prev) => prev + 1);
        } else {
          setGameState('chamber4');
          arcadeAudio.playStamp();
        }
      }, 1600);
    } else {
      applyPenalty(15);
      setKeypadFeedback({ text: `ACCESS DENIED! Invalid Security Code. ${currentRiddle.hint} (-15s penalty)`, isCorrect: false });
    }
  };

  const handleKeypadChoice = (isCorrect: boolean) => {
    const currentRiddle = EMERGENCY_KEYPAD_RIDDLES[keypadRiddleIdx];
    if (isCorrect) {
      arcadeAudio.playCorrect(keypadRiddleIdx + 1);
      setKeypadFeedback({ text: `LOCKDOWN DISARMED! ${currentRiddle.explanation}`, isCorrect: true });
      setTimeout(() => {
        setKeypadFeedback(null);
        if (keypadRiddleIdx < EMERGENCY_KEYPAD_RIDDLES.length - 1) {
          setKeypadRiddleIdx((prev) => prev + 1);
        } else {
          setGameState('chamber4');
          arcadeAudio.playStamp();
        }
      }, 1600);
    } else {
      applyPenalty(15);
      setKeypadFeedback({ text: `TRAP TRIGGERED! Incorrect constitutional exception. (-15s penalty)`, isCorrect: false });
    }
  };

  // -------------------------------------------------------------------------
  // CHAMBER 4 HANDLERS
  // -------------------------------------------------------------------------
  const handlePairTombstone = (slayerId: string) => {
    if (!selectedGhostId) {
      setGraveyardFeedback('Select a tombstone on the left first!');
      return;
    }

    const ghost = GHOST_PRECEDENTS.find((g) => g.id === selectedGhostId);
    if (!ghost) return;

    if (ghost.slayerCaseId === slayerId) {
      // Correct slayer pair!
      arcadeAudio.playGavel();
      arcadeAudio.playCorrect(Object.keys(pairedTombstones).length + 1);
      const newPairs = {
        ...pairedTombstones,
        [selectedGhostId]: slayerId
      };
      setPairedTombstones(newPairs);
      setSelectedGhostId(null);
      setGraveyardFeedback(`⚰️ ${ghost.caseName} has been peacefully put to rest by its slayer!`);

      // Check if all 5 are put to rest
      if (Object.keys(newPairs).length === GHOST_PRECEDENTS.length) {
        setIsTimerRunning(false);
        const timeTaken = 300 - timeLeft;
        const result = recordEscapeRoomResult(timeTaken, mistakesCount === 0);
        onAwardResult(
          result.gainedXP,
          result.leveledUp,
          result.newBadges.map((b) => b.title)
        );
        arcadeAudio.playFanfare();
        setTimeout(() => {
          setGameState('escaped');
        }, 1200);
      }
    } else {
      applyPenalty(15);
      setGraveyardFeedback('⚡ THE GHOST RESISTS! That precedent did NOT overrule this case. (-15s penalty)');
    }
  };

  // Progress Bar
  const chamberProgress = useMemo(() => {
    if (gameState === 'chamber1') return 25;
    if (gameState === 'chamber2') return 50;
    if (gameState === 'chamber3') return 75;
    if (gameState === 'chamber4') return 95;
    if (gameState === 'escaped') return 100;
    return 0;
  }, [gameState]);

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-fadeIn select-none">
      {/* =====================================================================
          VAULT CONSOLE HEADER
      ===================================================================== */}
      <div className="p-5 md:p-6 rounded-3xl bg-[var(--bg-card)] border-2 border-[var(--border-subtle)] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-zinc-700/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10 border-b border-[var(--border-subtle)] pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-500/15 text-rose-400 border border-rose-500/30 flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 animate-pulse" />
                Subterranean Security Protocol Active
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-[var(--text-muted)] bg-[var(--bg-base)] border border-[var(--border-subtle)]">
                Supreme Court Sub-Vault 368
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[var(--text-primary)] tracking-tight flex items-center gap-2.5">
              <Lock className="w-6 h-6 text-zinc-300" />
              Constitutional Escape Room: Vault of Article 368
            </h2>
            <p className="text-xs md:text-sm text-[var(--text-secondary)] mt-1">
              Automated lockdown engaged! Breach the 4 sequential constitutional chambers before the 5:00 blast timer expires.
            </p>
          </div>

          {/* Timer & Controls HUD */}
          <div className="flex items-center gap-3 shrink-0">
            {gameState !== 'intro' && gameState !== 'escaped' && gameState !== 'failed' && (
              <div
                className={`p-3 px-5 rounded-2xl border flex items-center gap-2.5 font-mono text-xl md:text-2xl font-black shadow-inner transition-all ${
                  timeLeft <= 60
                    ? 'bg-rose-500/20 text-rose-400 border-rose-500/40 animate-pulse'
                    : 'bg-[var(--bg-base)] text-[var(--text-primary)] border-[var(--border-subtle)]'
                }`}
              >
                <Clock className="w-5 h-5 shrink-0" />
                <span>{formatTimer(timeLeft)}</span>
              </div>
            )}

            <button
              onClick={toggleMute}
              className="p-3 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
              title={isMuted ? 'Unmute Sound Effects' : 'Mute Sound Effects'}
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 text-zinc-300" />}
            </button>

            {gameState !== 'intro' && (
              <button
                onClick={handleStartGame}
                className="p-3 px-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs font-mono font-bold text-[var(--text-secondary)] hover:text-rose-400 transition-all flex items-center gap-1.5"
                title="Restart Escape Challenge"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Restart</span>
              </button>
            )}
          </div>
        </div>

        {/* 4-Chamber Stage Status Indicators */}
        {gameState !== 'intro' && (
          <div className="pt-4 space-y-2">
            <div className="grid grid-cols-4 gap-2 text-center text-xs font-mono font-bold">
              <div
                className={`p-2 rounded-xl border transition-all ${
                  gameState === 'chamber1'
                    ? 'bg-zinc-800 border-zinc-500 text-zinc-100 ring-1 ring-zinc-500'
                    : chamberProgress > 25
                    ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400'
                    : 'bg-[var(--bg-base)] text-[var(--text-muted)] border-[var(--border-subtle)]'
                }`}
              >
                <span className="block text-[10px] uppercase opacity-60">Chamber 1</span>
                <span>Majority Lock</span>
              </div>

              <div
                className={`p-2 rounded-xl border transition-all ${
                  gameState === 'chamber2'
                    ? 'bg-zinc-800 border-zinc-500 text-zinc-100 ring-1 ring-zinc-500'
                    : chamberProgress > 50
                    ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400'
                    : 'bg-[var(--bg-base)] text-[var(--text-muted)] border-[var(--border-subtle)]'
                }`}
              >
                <span className="block text-[10px] uppercase opacity-60">Chamber 2</span>
                <span>Golden Triangle</span>
              </div>

              <div
                className={`p-2 rounded-xl border transition-all ${
                  gameState === 'chamber3'
                    ? 'bg-zinc-800 border-zinc-500 text-zinc-100 ring-1 ring-zinc-500'
                    : chamberProgress > 75
                    ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400'
                    : 'bg-[var(--bg-base)] text-[var(--text-muted)] border-[var(--border-subtle)]'
                }`}
              >
                <span className="block text-[10px] uppercase opacity-60">Chamber 3</span>
                <span>Emergency Pad</span>
              </div>

              <div
                className={`p-2 rounded-xl border transition-all ${
                  gameState === 'chamber4'
                    ? 'bg-zinc-800 border-zinc-500 text-zinc-100 ring-1 ring-zinc-500'
                    : chamberProgress === 100
                    ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400'
                    : 'bg-[var(--bg-base)] text-[var(--text-muted)] border-[var(--border-subtle)]'
                }`}
              >
                <span className="block text-[10px] uppercase opacity-60">Chamber 4</span>
                <span>Graveyard Exit</span>
              </div>
            </div>

            {/* Progress Track */}
            <div className="w-full bg-[var(--bg-base)] rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-zinc-300 dark:bg-zinc-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${chamberProgress}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* =====================================================================
          SCREEN 0: INTRO MISSION BRIEFING
      ===================================================================== */}
      {gameState === 'intro' && (
        <div className="p-8 md:p-12 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xl text-center space-y-8 animate-fadeIn">
          <div className="w-12 h-12 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-zinc-300 flex items-center justify-center mx-auto shadow-xs">
            <Lock className="w-6 h-6" />
          </div>

          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-secondary)]">
              Emergency Escape Simulation
            </span>
            <h3 className="text-3xl font-black text-[var(--text-primary)]">
              Breach the Vault of Article 368
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              You are sealed inside the Supreme Court Constitutional Archives. The automated Article 368 lock has tripped. To trigger the emergency escape hatch, you must solve 4 mechanical chambers under a strict <strong>5-minute countdown</strong>:
            </p>
          </div>

          {/* 4 Chamber Previews */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto">
            <div className="p-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
              <Clock className="w-5 h-5 text-zinc-300" />
              <h4 className="text-xs font-black uppercase text-[var(--text-primary)]">Chamber 1: Dials</h4>
              <p className="text-[11px] text-[var(--text-muted)]">
                Align the Article 368 dual majorities, Proviso ratifications, and Article 61 impeachment lock.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
              <Zap className="w-5 h-5 text-zinc-300" />
              <h4 className="text-xs font-black uppercase text-[var(--text-primary)]">Chamber 2: Circuit</h4>
              <p className="text-[11px] text-[var(--text-muted)]">
                Power the Golden Triangle (Arts 14, 19, 21) via Maneka Gandhi without blowing the Gopalan fuse.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
              <ShieldAlert className="w-5 h-5 text-zinc-300" />
              <h4 className="text-xs font-black uppercase text-[var(--text-primary)]">Chamber 3: Keypad</h4>
              <p className="text-[11px] text-[var(--text-muted)]">
                Disarm the emergency alarm by keying in the two sacred un-suspendable articles (Arts 20 & 21).
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
              <Skull className="w-5 h-5 text-zinc-300" />
              <h4 className="text-xs font-black uppercase text-[var(--text-primary)]">Chamber 4: Graveyard</h4>
              <p className="text-[11px] text-[var(--text-muted)]">
                Pair 5 restless ghost precedents with their Constitution Bench slayers to unlock the exit hatch!
              </p>
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={handleStartGame}
              className="px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-zinc-100 hover:bg-white text-zinc-950 shadow-xs transition-all flex items-center gap-2 mx-auto cursor-pointer"
            >
              <Key className="w-4 h-4" />
              <span>START ESCAPE RUN (5:00)</span>
            </button>
          </div>
        </div>
      )}

      {/* =====================================================================
          CHAMBER 1: THE MAJORITY COMBINATION LOCK
      ===================================================================== */}
      {gameState === 'chamber1' && (
        <div className="p-6 md:p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xl space-y-6 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-[var(--text-secondary)] flex items-center gap-1.5">
                <Lock className="w-4 h-4" />
                Chamber 1 of 4: The Mechanical Majority Dials
              </span>
              <h3 className="text-xl md:text-2xl font-black text-[var(--text-primary)] mt-0.5">
                Article 368 & Amending Formula Dials
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-zinc-800 text-zinc-300 border border-zinc-700">
              {Object.keys(dialSelections).length}/4 Dials Set
            </span>
          </div>

          {/* Dials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CHAMBER_1_DIALS.map((dial, idx) => {
              const currentChoice = dialSelections[dial.id];

              return (
                <div
                  key={dial.id}
                  className="p-5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                      Dial #{idx + 1}: {dial.subclause}
                    </span>
                    <span className="text-xs font-mono text-[var(--text-muted)] font-bold">
                      {dial.articleCitation}
                    </span>
                  </div>

                  <h4 className="text-xs md:text-sm font-bold text-[var(--text-primary)] leading-snug">
                    {dial.riddleText}
                  </h4>

                  {/* Options */}
                  <div className="grid grid-cols-1 gap-2 pt-1">
                    {dial.dialOptions.map((opt, optIdx) => {
                      const isSelected = currentChoice === opt;

                      return (
                        <button
                          key={optIdx}
                          type="button"
                          onClick={() => handleSelectDial(dial.id, opt)}
                          className={`p-3 rounded-xl text-left text-xs transition-all flex items-start gap-2.5 border cursor-pointer ${
                            isSelected
                              ? 'bg-zinc-850 border-zinc-300 text-zinc-100 font-bold shadow-xs'
                              : 'bg-[var(--bg-card)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                          }`}
                        >
                          <span
                            className={`w-5 h-5 rounded-md text-[10px] font-mono font-bold shrink-0 flex items-center justify-center ${
                              isSelected
                                ? 'bg-zinc-100 text-zinc-950 font-bold'
                                : 'bg-[var(--bg-base)] text-[var(--text-muted)]'
                            }`}
                          >
                            {optIdx + 1}
                          </span>
                          <span className="flex-1 pt-0.5">{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Feedback Banner */}
          {chamber1Feedback && (
            <div
              className={`p-4 rounded-2xl text-xs md:text-sm font-bold font-mono text-center animate-fadeIn ${
                chamber1Feedback.includes('✅')
                  ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-400'
                  : 'bg-rose-500/15 border border-rose-500/30 text-rose-400'
              }`}
            >
              {chamber1Feedback}
            </div>
          )}

          {/* Action Button */}
          <div className="pt-2 flex justify-end">
            <button
              onClick={handleVerifyChamber1}
              className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-zinc-100 hover:bg-white text-zinc-950 shadow-xs transition-all flex items-center gap-2 cursor-pointer"
            >
              <Key className="w-4 h-4" />
              <span>ENGAGE LOCK PINS & OPEN BLAST DOOR</span>
            </button>
          </div>
        </div>
      )}

      {/* =====================================================================
          CHAMBER 2: THE GOLDEN TRIANGLE CIRCUIT
      ===================================================================== */}
      {gameState === 'chamber2' && (
        <div className="p-6 md:p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xl space-y-6 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-[var(--text-secondary)] flex items-center gap-1.5">
                <Zap className="w-4 h-4" />
                Chamber 2 of 4: High-Voltage Security Grid
              </span>
              <h3 className="text-xl md:text-2xl font-black text-[var(--text-primary)] mt-0.5">
                The Golden Triangle Circuit (Arts 14, 19, 21)
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-zinc-800 text-zinc-300 border border-zinc-700">
              Relay Step {circuitStep + 1} of {CIRCUIT_STAGES.length}
            </span>
          </div>

          {/* Schematic Diagram Card */}
          <div className="p-5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-wrap items-center justify-around gap-4 text-center">
            <div className="p-3.5 px-5 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sky-400">
              <span className="text-[10px] font-mono uppercase block font-bold">Node Alpha</span>
              <span className="text-sm font-black">Article 14</span>
              <span className="text-[10px] block opacity-80">Non-Arbitrariness</span>
            </div>
            <ArrowRight className="w-5 h-5 text-zinc-400" />
            <div className="p-3.5 px-5 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
              <span className="text-[10px] font-mono uppercase block font-bold">Node Beta</span>
              <span className="text-sm font-black">Article 19</span>
              <span className="text-[10px] block opacity-80">Fundamental Freedoms</span>
            </div>
            <ArrowRight className="w-5 h-5 text-zinc-400" />
            <div className="p-3.5 px-5 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400">
              <span className="text-[10px] font-mono uppercase block font-bold">Node Gamma</span>
              <span className="text-sm font-black">Article 21</span>
              <span className="text-[10px] block opacity-80">Life & Personal Liberty</span>
            </div>
          </div>

          {/* Current Step Challenge */}
          <div className="space-y-4">
            <p className="text-sm font-bold text-[var(--text-primary)]">
              {CIRCUIT_STAGES[circuitStep].instruction}
            </p>

            <div className="grid grid-cols-1 gap-3">
              {CIRCUIT_STAGES[circuitStep].options.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleCircuitChoice(opt.isCorrect, opt.feedback)}
                  className="p-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-zinc-500 hover:bg-zinc-850/50 text-left text-xs md:text-sm font-semibold text-[var(--text-primary)] transition-all flex items-center justify-between gap-3 cursor-pointer"
                >
                  <span>{opt.label}</span>
                  <Zap className="w-4 h-4 text-zinc-400 shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Circuit Feedback */}
          {circuitFeedback && (
            <div
              className={`p-4 rounded-2xl text-xs md:text-sm font-bold font-mono text-center animate-fadeIn ${
                circuitFeedback.isCorrect
                  ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-400'
                  : 'bg-rose-500/15 border border-rose-500/30 text-rose-400'
              }`}
            >
              {circuitFeedback.text}
            </div>
          )}
        </div>
      )}

      {/* =====================================================================
          CHAMBER 3: THE EMERGENCY OVERRIDE KEYPAD
      ===================================================================== */}
      {gameState === 'chamber3' && (
        <div className="p-6 md:p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xl space-y-6 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-rose-500 flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 animate-pulse" />
                Chamber 3 of 4: Emergency Override Keypad
              </span>
              <h3 className="text-xl md:text-2xl font-black text-[var(--text-primary)] mt-0.5">
                Articles 352, 356, 358 & 359 Lockout Pad
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-rose-500/10 text-rose-400 border border-rose-500/20">
              Protocol {keypadRiddleIdx + 1} of {EMERGENCY_KEYPAD_RIDDLES.length}
            </span>
          </div>

          {/* Current Riddle Prompt */}
          <div className="p-5 rounded-2xl bg-[var(--bg-base)] border border-rose-500/30 space-y-2">
            <h4 className="text-xs md:text-sm font-bold text-rose-300 leading-snug">
              {EMERGENCY_KEYPAD_RIDDLES[keypadRiddleIdx].prompt}
            </h4>
            <p className="text-[11px] font-mono text-[var(--text-muted)]">
              Hint: {EMERGENCY_KEYPAD_RIDDLES[keypadRiddleIdx].hint}
            </p>
          </div>

          {/* Numeric Touchpad Mode */}
          {EMERGENCY_KEYPAD_RIDDLES[keypadRiddleIdx].keypadType === 'NUMERIC' && (
            <div className="max-w-xs mx-auto space-y-4">
              {/* Digital Screen */}
              <div className="p-4 rounded-2xl bg-black border-2 border-emerald-500/50 text-center text-3xl font-mono font-black text-emerald-400 tracking-widest shadow-inner min-h-[64px] flex items-center justify-center">
                {numericBuffer || <span className="opacity-30">----</span>}
              </div>

              {/* 0-9 Keypad Grid */}
              <div className="grid grid-cols-3 gap-2.5">
                {['1', '2', '3', '4', '5', '6', '7', '8', '9', 'CLR', '0', 'ENTER'].map((k) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => {
                      if (k === 'CLR') handleKeypadClear();
                      else if (k === 'ENTER') handleVerifyNumericKeypad();
                      else handleKeypadPress(k);
                    }}
                    className={`p-3.5 rounded-2xl font-mono font-black text-base transition-all cursor-pointer ${
                      k === 'ENTER'
                        ? 'bg-emerald-500 hover:bg-emerald-400 text-black shadow-md'
                        : k === 'CLR'
                        ? 'bg-rose-500/20 hover:bg-rose-500/30 text-rose-400 border border-rose-500/40'
                        : 'bg-[var(--bg-base)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)]'
                    }`}
                  >
                    {k}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Choice Mode for Chamber 3 */}
          {EMERGENCY_KEYPAD_RIDDLES[keypadRiddleIdx].keypadType === 'CHOICE' &&
            EMERGENCY_KEYPAD_RIDDLES[keypadRiddleIdx].choices && (
              <div className="grid grid-cols-1 gap-3">
                {EMERGENCY_KEYPAD_RIDDLES[keypadRiddleIdx].choices!.map((ch) => (
                  <button
                    key={ch.key}
                    type="button"
                    onClick={() => handleKeypadChoice(ch.isCorrect)}
                    className="p-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-zinc-500 text-left text-xs md:text-sm font-semibold text-[var(--text-primary)] transition-all flex items-center gap-3 cursor-pointer"
                  >
                    <span className="w-6 h-6 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs font-mono font-bold flex items-center justify-center shrink-0">
                      {ch.key}
                    </span>
                    <span>{ch.label}</span>
                  </button>
                ))}
              </div>
            )}

          {/* Feedback */}
          {keypadFeedback && (
            <div
              className={`p-4 rounded-2xl text-xs md:text-sm font-bold font-mono text-center animate-fadeIn ${
                keypadFeedback.isCorrect
                  ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-400'
                  : 'bg-rose-500/15 border border-rose-500/30 text-rose-400'
              }`}
            >
              {keypadFeedback.text}
            </div>
          )}
        </div>
      )}

      {/* =====================================================================
          CHAMBER 4: THE OVERRULED PRECEDENTS GRAVEYARD (EXIT BLAST DOORS)
      ===================================================================== */}
      {gameState === 'chamber4' && (
        <div className="p-6 md:p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xl space-y-6 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-[var(--text-secondary)] flex items-center gap-1.5">
                <Skull className="w-4 h-4" />
                Final Chamber 4 of 4: The Overruled Graveyard
              </span>
              <h3 className="text-xl md:text-2xl font-black text-[var(--text-primary)] mt-0.5">
                Lay the 5 Fallen Precedents to Rest
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
              {Object.keys(pairedTombstones).length}/5 Slayers Paired
            </span>
          </div>

          <p className="text-xs md:text-sm text-[var(--text-secondary)]">
            Click a <strong>Ghost Tombstone</strong> on the left, then click its corresponding <strong>Constitution Bench Slayer Sword</strong> on the right to break the seal on the exit blast door!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column: Ghost Tombstones */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5">
                <Skull className="w-3.5 h-3.5" />
                Fallen Ghost Precedents:
              </span>

              {GHOST_PRECEDENTS.map((ghost) => {
                const isPaired = Boolean(pairedTombstones[ghost.id]);
                const isSelected = selectedGhostId === ghost.id;

                return (
                  <button
                    key={ghost.id}
                    type="button"
                    disabled={isPaired}
                    onClick={() => setSelectedGhostId(ghost.id)}
                    className={`w-full p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                      isPaired
                        ? 'bg-emerald-500/10 border-emerald-500/30 opacity-60 cursor-not-allowed'
                        : isSelected
                        ? 'bg-zinc-800 border-zinc-400 text-zinc-100 ring-1 ring-zinc-400 shadow-xs'
                        : 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-zinc-500'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold flex items-center gap-1.5">
                        {isPaired ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Skull className="w-3.5 h-3.5 text-zinc-300" />
                        )}
                        <span>{ghost.caseName} ({ghost.year})</span>
                      </span>
                      <span className="text-[10px] font-mono text-[var(--text-muted)]">
                        {ghost.article}
                      </span>
                    </div>
                    <p className="text-[11px] text-[var(--text-secondary)] mt-1 line-clamp-2">
                      {ghost.obsoleteRatio}
                    </p>
                    {isPaired && (
                      <span className="text-[10px] font-mono text-emerald-400 font-bold block mt-1">
                        ✓ Laid to rest
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Column: Constitution Bench Slayers */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5">
                <Gavel className="w-3.5 h-3.5" />
                Constitution Bench Slayers:
              </span>

              {SLAYER_PRECEDENTS.map((slayer) => {
                const isAlreadyUsed = Object.values(pairedTombstones).includes(slayer.id);

                return (
                  <button
                    key={slayer.id}
                    type="button"
                    disabled={isAlreadyUsed}
                    onClick={() => handlePairTombstone(slayer.id)}
                    className={`w-full p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                      isAlreadyUsed
                        ? 'bg-emerald-500/10 border-emerald-500/30 opacity-60 cursor-not-allowed'
                        : 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-emerald-500/50 hover:bg-emerald-500/5 shadow-sm'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold flex items-center gap-1.5 text-[var(--text-primary)]">
                        {slayer.caseName} ({slayer.year})
                      </span>
                      <span className="text-[10px] font-mono font-bold text-zinc-300">
                        {slayer.benchStrength}
                      </span>
                    </div>
                    <p className="text-[11px] text-[var(--text-secondary)] mt-1 line-clamp-2">
                      {slayer.overrulingRatio}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Feedback */}
          {graveyardFeedback && (
            <div
              className={`p-4 rounded-2xl text-xs md:text-sm font-bold font-mono text-center animate-fadeIn ${
                graveyardFeedback.includes('laid to rest') || graveyardFeedback.includes('⚰️')
                  ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-400'
                  : 'bg-rose-500/15 border border-rose-500/30 text-rose-400'
              }`}
            >
              {graveyardFeedback}
            </div>
          )}
        </div>
      )}

      {/* =====================================================================
          SCREEN 5: VICTORY & ESCAPE DECREE
      ===================================================================== */}
      {gameState === 'escaped' && (
        <div className="p-8 md:p-12 rounded-3xl bg-[var(--bg-card)] border-2 border-emerald-500/50 shadow-2xl text-center space-y-8 animate-fadeIn">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
            <Trophy className="w-8 h-8" />
          </div>

          <div className="space-y-3 max-w-xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              Vault Breach Successful
            </span>
            <h3 className="text-3xl md:text-4xl font-black text-[var(--text-primary)]">
              You Escaped the Vault of Article 368!
            </h3>
            <p className="text-xs md:text-sm text-[var(--text-secondary)]">
              All 4 security chambers bypassed. Blast doors unlatched. You emerged from the subterranean Constitutional Archives in triumph!
            </p>
          </div>

          {/* Escape Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="p-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
              <span className="text-[10px] font-mono font-bold uppercase text-[var(--text-muted)] block">Time Taken</span>
              <span className="text-2xl font-black text-[var(--text-primary)] font-mono">
                {formatTimer(300 - timeLeft)}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
              <span className="text-[10px] font-mono font-bold uppercase text-[var(--text-muted)] block">Penalties Incurred</span>
              <span className="text-2xl font-black text-[var(--text-primary)] font-mono">
                {mistakesCount}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
              <span className="text-[10px] font-mono font-bold uppercase text-[var(--text-muted)] block">Career XP Gained</span>
              <span className="text-2xl font-black text-emerald-400 font-mono">
                +{350 + (300 - timeLeft < 240 ? 150 : 50)}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
              <span className="text-[10px] font-mono font-bold uppercase text-[var(--text-muted)] block">Speedrun Rank</span>
              <span className="text-xs font-extrabold text-[var(--text-primary)] block pt-1">
                {300 - timeLeft < 150
                  ? 'Supreme Court Chief Locksmith'
                  : 300 - timeLeft < 240
                  ? 'Master Constitutional Escapist'
                  : 'Survivor of the Vault'}
              </span>
            </div>
          </div>

          <div className="pt-4 flex justify-center gap-3">
            <button
              onClick={handleStartGame}
              className="px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-zinc-100 hover:bg-white text-zinc-950 shadow-xs transition-all flex items-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>PLAY AGAIN (SPEEDRUN CHALLENGE)</span>
            </button>
          </div>
        </div>
      )}

      {/* =====================================================================
          SCREEN 6: TIME-OUT / SEALED IN VAULT
      ===================================================================== */}
      {gameState === 'failed' && (
        <div className="p-8 md:p-12 rounded-3xl bg-[var(--bg-card)] border-2 border-rose-500/50 shadow-2xl text-center space-y-6 animate-fadeIn">
          <div className="w-16 h-16 rounded-2xl bg-rose-500/20 border-2 border-rose-500 text-rose-400 flex items-center justify-center mx-auto shadow-xl">
            <ShieldAlert className="w-8 h-8" />
          </div>

          <div className="space-y-2 max-w-md mx-auto">
            <span className="text-xs font-mono font-bold uppercase text-rose-400">
              Lockdown Permanent
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-[var(--text-primary)]">
              Vault Sealed at 00:00!
            </h3>
            <p className="text-xs md:text-sm text-[var(--text-secondary)]">
              The Article 368 blast doors permanently locked down before all 4 chambers were breached.
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={handleStartGame}
              className="px-8 py-3.5 rounded-2xl text-xs font-black uppercase tracking-wider bg-rose-500 hover:bg-rose-400 text-white shadow-lg transition-all flex items-center gap-2 mx-auto cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>TRY TO ESCAPE AGAIN</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
