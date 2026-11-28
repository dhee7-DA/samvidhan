import React, { createContext, useContext, useState, useEffect, useRef, useMemo } from 'react';
import { getStudyActivitySnapshot, recordStudyPulse, type StudyActivitySnapshot } from '../services/studyActivityService';
import type { DotRhythmId } from '../components/Common/DotMatrixPulse';

export type TimerMode = 'pomodoro' | 'deep' | 'break' | 'stopwatch';

export const MODE_DEFAULTS: Record<TimerMode, number> = {
  pomodoro: 25 * 60,
  deep: 50 * 60,
  break: 5 * 60,
  stopwatch: 0,
};

const SESSIONS_KEY = 'samvidhan_pomodoro_sessions_v1';
const RHYTHM_KEY = 'samvidhan_focus_rhythm_v1';

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

interface FocusTimerContextValue {
  mode: TimerMode;
  totalSeconds: number;
  seconds: number;
  isRunning: boolean;
  soundEnabled: boolean;
  sessionsCompleted: number;
  snapshot: StudyActivitySnapshot;
  minsDisplay: string;
  secsDisplay: string;
  burnProgress: number;
  rhythm: DotRhythmId;
  setRhythm: (next: DotRhythmId) => void;
  widgetMinimized: boolean;
  setWidgetMinimized: React.Dispatch<React.SetStateAction<boolean>>;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  toggleRunning: () => void;
  toggleSound: () => void;
  handleModeChange: (nextMode: TimerMode) => void;
  handlePresetMinutes: (mins: number) => void;
  handleReset: () => void;
}

const FocusTimerContext = createContext<FocusTimerContextValue | null>(null);

export const FocusTimerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<TimerMode>('pomodoro');
  const [totalSeconds, setTotalSeconds] = useState<number>(MODE_DEFAULTS.pomodoro);
  const [seconds, setSeconds] = useState<number>(MODE_DEFAULTS.pomodoro);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [widgetMinimized, setWidgetMinimized] = useState<boolean>(false);
  const [rhythm, setRhythmState] = useState<DotRhythmId>(() => {
    try {
      const saved = localStorage.getItem(RHYTHM_KEY) as DotRhythmId | null;
      return saved || 'diamond';
    } catch {
      return 'diamond';
    }
  });
  const setRhythm = (next: DotRhythmId) => {
    setRhythmState(next);
    try {
      localStorage.setItem(RHYTHM_KEY, next);
    } catch {
      // ignore
    }
  };
  const [sessionsCompleted, setSessionsCompleted] = useState<number>(() => {
    try {
      return Number(localStorage.getItem(SESSIONS_KEY) || 0);
    } catch {
      return 0;
    }
  });
  const [telemetryTick, setTelemetryTick] = useState(0);
  const minuteAccumulatorRef = useRef(0);

  const snapshot = useMemo(() => getStudyActivitySnapshot(), [telemetryTick, sessionsCompleted]);

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

  const toggleRunning = () => setIsRunning((r) => !r);
  const toggleSound = () => setSoundEnabled((v) => !v);

  const minsDisplay = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secsDisplay = String(seconds % 60).padStart(2, '0');

  const burnProgress =
    mode === 'stopwatch'
      ? Math.min(1, seconds / 3600)
      : totalSeconds > 0
      ? 1 - seconds / totalSeconds
      : 0;

  return (
    <FocusTimerContext.Provider
      value={{
        mode,
        totalSeconds,
        seconds,
        isRunning,
        soundEnabled,
        sessionsCompleted,
        snapshot,
        minsDisplay,
        secsDisplay,
        burnProgress,
        rhythm,
        setRhythm,
        widgetMinimized,
        setWidgetMinimized,
        setIsRunning,
        toggleRunning,
        toggleSound,
        handleModeChange,
        handlePresetMinutes,
        handleReset,
      }}
    >
      {children}
    </FocusTimerContext.Provider>
  );
};

export function useFocusTimer(): FocusTimerContextValue {
  const ctx = useContext(FocusTimerContext);
  if (!ctx) {
    throw new Error('useFocusTimer must be used inside FocusTimerProvider');
  }
  return ctx;
}
