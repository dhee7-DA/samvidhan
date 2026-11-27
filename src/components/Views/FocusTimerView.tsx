import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Flame, Pause, Play, RotateCcw, Timer, Volume2, VolumeX, CheckCircle2 } from 'lucide-react';
import { ThreeBurningCandle } from '../Common/ThreeBurningCandle';
import { EDITORIAL_SPRING, SlidingSegmentedControl, StudyTelemetryCard } from '../Common/EditorialMotionCards';
import { getStudyActivitySnapshot, recordStudyPulse } from '../../services/studyActivityService';

type TimerMode = 'pomodoro' | 'deep' | 'break' | 'stopwatch';

const MODE_DEFAULTS: Record<TimerMode, number> = {
  pomodoro: 25 * 60,
  deep: 50 * 60,
  break: 5 * 60,
  stopwatch: 0,
};

const SESSIONS_KEY = 'samvidhan_pomodoro_sessions_v1';

function playGentleChime() {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    [523.25, 659.25, 783.99].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.001, ctx.currentTime + idx * 0.14);
      gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + idx * 0.14 + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.14 + 0.9);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + idx * 0.14);
      osc.stop(ctx.currentTime + idx * 0.14 + 0.95);
    });
  } catch {
    // ignore audio restrictions
  }
}

export const FocusTimerView: React.FC = () => {
  const [mode, setMode] = useState<TimerMode>('pomodoro');
  const [totalSeconds, setTotalSeconds] = useState<number>(MODE_DEFAULTS.pomodoro);
  const [seconds, setSeconds] = useState<number>(MODE_DEFAULTS.pomodoro);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [sessionsCompleted, setSessionsCompleted] = useState<number>(() => {
    try {
      return Number(localStorage.getItem(SESSIONS_KEY) || 0);
    } catch {
      return 0;
    }
  });
  const [telemetryTick, setTelemetryTick] = useState(0);
  const minuteAccumulatorRef = useRef(0);

  const snapshot = React.useMemo(() => getStudyActivitySnapshot(), [telemetryTick, sessionsCompleted]);

  useEffect(() => {
    if (!isRunning) return;
    const interval = window.setInterval(() => {
      minuteAccumulatorRef.current += 1;
      if (minuteAccumulatorRef.current >= 60) {
        minuteAccumulatorRef.current = 0;
        recordStudyPulse(1, 0);
        setTelemetryTick((t) => t + 1);
      }

      if (mode === 'stopwatch') {
        setSeconds((s) => s + 1);
      } else {
        setSeconds((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            if (soundEnabled) playGentleChime();
            if (mode !== 'break') {
              recordStudyPulse(0, 1);
              setSessionsCompleted((c) => {
                const next = c + 1;
                try {
                  localStorage.setItem(SESSIONS_KEY, String(next));
                } catch {
                  // ignore
                }
                return next;
              });
            }
            setTelemetryTick((t) => t + 1);
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => window.clearInterval(interval);
  }, [isRunning, mode, soundEnabled]);

  const handleModeChange = (nextMode: TimerMode) => {
    setIsRunning(false);
    minuteAccumulatorRef.current = 0;
    setMode(nextMode);
    const nextSecs = MODE_DEFAULTS[nextMode];
    setTotalSeconds(nextSecs);
    setSeconds(nextSecs);
  };

  const handlePresetMinutes = (mins: number) => {
    setIsRunning(false);
    minuteAccumulatorRef.current = 0;
    setMode(mins >= 45 ? 'deep' : 'pomodoro');
    const s = mins * 60;
    setTotalSeconds(s);
    setSeconds(s);
  };

  const handleReset = () => {
    setIsRunning(false);
    minuteAccumulatorRef.current = 0;
    setSeconds(mode === 'stopwatch' ? 0 : totalSeconds);
  };

  const minsDisplay = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secsDisplay = String(seconds % 60).padStart(2, '0');

  const burnProgress =
    mode === 'stopwatch'
      ? Math.min(1, seconds / 3600)
      : totalSeconds > 0
      ? 1 - seconds / totalSeconds
      : 0;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[var(--border-subtle)] pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-medium text-[var(--text-muted)]">
            <Flame className="w-3.5 h-3.5 text-amber-500" />
            <span>THREE.JS FOCUS CANDLE & POMODORO</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
            Study Timer & Focus Flame
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-muted)]">
            Every active focus minute melts the wax, feeds the flame, and logs straight into your Study Telemetry.
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono text-[var(--text-muted)]">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <strong className="text-[var(--text-primary)]">{sessionsCompleted}</strong> sessions completed
          </span>
          <button
            type="button"
            onClick={() => setSoundEnabled((v) => !v)}
            title={soundEnabled ? 'Mute completion chime' : 'Enable completion chime'}
            className="p-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mode Switcher */}
      <div className="overflow-x-auto pb-1">
        <SlidingSegmentedControl
          layoutGroupId="focus-timer-mode"
          value={mode}
          onChange={handleModeChange}
          options={[
            { id: 'pomodoro', label: 'Pomodoro (25m)' },
            { id: 'deep', label: 'Deep Focus (50m)' },
            { id: 'break', label: 'Short Break (5m)' },
            { id: 'stopwatch', label: 'Stopwatch' },
          ]}
        />
      </div>

      {/* Main 2-Column Arena */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Three.js Burning Candle */}
        <div className="lg:col-span-5 p-5 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col justify-between gap-4 shadow-sm">
          <ThreeBurningCandle isBurning={isRunning} burnProgress={burnProgress} />
          <div className="flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)] px-1">
            <span>{isRunning ? 'Flame lit · Rising fumes active' : 'Paused · Wick resting'}</span>
            <span>{Math.round(burnProgress * 100)}% burned</span>
          </div>
        </div>

        {/* Right: Digital Clock, Controls & Live Telemetry */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-5">
          <div className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col items-center justify-center gap-6 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
              <Timer className="w-4 h-4 text-[var(--accent)]" />
              <span>
                {mode === 'stopwatch'
                  ? 'Elapsed Study Session'
                  : mode === 'break'
                  ? 'Recovery Break'
                  : 'Constitutional Deep Work'}
              </span>
            </div>

            <motion.div
              key={`${minsDisplay}:${secsDisplay}`}
              className="text-5xl sm:text-7xl font-black font-mono tabular-nums tracking-tight text-[var(--text-primary)]"
            >
              {minsDisplay}:{secsDisplay}
            </motion.div>

            {/* Quick Duration Presets */}
            {mode !== 'stopwatch' && (
              <div className="flex flex-wrap items-center justify-center gap-2">
                {[15, 25, 45, 60].map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => handlePresetMinutes(m)}
                    className={`px-3 py-1 rounded-full text-xs font-mono border transition-colors cursor-pointer ${
                      totalSeconds === m * 60
                        ? 'bg-[var(--accent)]/15 border-[var(--accent)]/40 text-[var(--accent)] font-bold'
                        : 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {m}m
                  </button>
                ))}
              </div>
            )}

            {/* Primary Controls */}
            <div className="flex items-center gap-3">
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                transition={EDITORIAL_SPRING}
                onClick={() => setIsRunning((r) => !r)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-[var(--accent-contrast)] text-sm font-bold shadow-sm cursor-pointer"
              >
                {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isRunning ? 'Pause Flame' : 'Light & Start'}</span>
              </motion.button>

              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={EDITORIAL_SPRING}
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs font-mono font-bold cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </motion.button>
            </div>
          </div>

          {/* Live Synced Study Telemetry Card */}
          <StudyTelemetryCard snapshot={snapshot} />
        </div>
      </div>
    </div>
  );
};
