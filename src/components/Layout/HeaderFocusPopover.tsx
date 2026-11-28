import React, { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CheckCircle2, Flame, Maximize2, Pause, Play, RotateCcw, Volume2, VolumeX } from 'lucide-react';
import { DOT_RHYTHMS, DotMatrixPulse, ShimmerLabel } from '../Common/DotMatrixPulse';
import { useFocusTimer, type TimerMode } from '../../context/FocusTimerContext';
import { useTheme } from '../../context/ThemeContext';
import { EDITORIAL_SPRING } from '../Common/EditorialMotionCards';

const MODE_OPTIONS: { id: TimerMode; label: string }[] = [
  { id: 'pomodoro', label: 'Pomo' },
  { id: 'deep', label: 'Deep' },
  { id: 'break', label: 'Break' },
  { id: 'stopwatch', label: 'Watch' },
];

export const HeaderFocusPopover: React.FC = () => {
  const { setActiveTab } = useTheme();
  const {
    mode,
    totalSeconds,
    isRunning,
    soundEnabled,
    sessionsCompleted,
    snapshot,
    minsDisplay,
    secsDisplay,
    burnProgress,
    rhythm,
    setRhythm,
    toggleRunning,
    toggleSound,
    handleModeChange,
    handlePresetMinutes,
    handleReset,
  } = useFocusTimer();

  const [open, setOpen] = useState(false);
  const closeTimerRef = useRef<number | null>(null);

  const handleEnter = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setOpen(true);
  };

  const handleLeave = () => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => setOpen(false), 140);
  };

  const rhythmMeta = DOT_RHYTHMS.find((r) => r.id === rhythm) || DOT_RHYTHMS[2];

  return (
    <div
      className="relative hidden sm:inline-flex items-center shrink-0"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Header Trigger Pill — click toggles Play/Pause, hover opens full popover */}
      <button
        type="button"
        onClick={toggleRunning}
        title={isRunning ? 'Click to pause · Hover for Focus Studio' : 'Click to start · Hover for Focus Studio'}
        aria-label="Focus Timer Quick Pill"
        className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#070709] border border-white/12 hover:border-white/30 shadow-sm transition-colors cursor-pointer"
      >
        <DotMatrixPulse rhythm={rhythm} active size="xs" />
        <ShimmerLabel
          text={isRunning ? `${minsDisplay}:${secsDisplay}` : 'Focus'}
          active={isRunning}
          accentColor={rhythmMeta.color}
          className="text-[11px] font-mono tabular-nums"
        />
      </button>

      {/* Hover Popover Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={EDITORIAL_SPRING}
            className="absolute left-0 top-full mt-2 w-[328px] rounded-2xl bg-[#09090c]/98 backdrop-blur-xl border border-white/12 shadow-[0_20px_50px_rgba(0,0,0,0.72)] p-4 z-50 text-zinc-100"
          >
            {/* Top Status Row */}
            <div className="flex items-center justify-between gap-2 pb-3 border-b border-white/[0.08]">
              <div className="flex items-center gap-2.5">
                <DotMatrixPulse rhythm={rhythm} active={isRunning} size="md" />
                <div>
                  <ShimmerLabel
                    text={isRunning ? 'Focusing' : 'Ready'}
                    active={isRunning}
                    accentColor={rhythmMeta.color}
                    className="text-xs font-semibold block"
                  />
                  <span className="text-[10px] font-mono text-zinc-400">
                    {rhythmMeta.label} · {Math.round(burnProgress * 100)}% elapsed
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={toggleSound}
                  title={soundEnabled ? 'Mute chime' : 'Enable chime'}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    setActiveTab('focus-timer');
                  }}
                  title="Open full Focus Timer page"
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Clock + Controls */}
            <div className="py-3 flex items-center justify-between gap-3">
              <div className="text-3xl font-black font-mono tabular-nums tracking-tight text-white">
                {minsDisplay}:{secsDisplay}
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={toggleRunning}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-black cursor-pointer transition-transform active:scale-95"
                  style={{ backgroundColor: rhythmMeta.color }}
                >
                  {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{isRunning ? 'Pause' : 'Start'}</span>
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  title="Reset timer"
                  className="p-1.5 rounded-full border border-white/12 bg-white/5 text-zinc-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1 rounded-full bg-white/10 overflow-hidden mb-3">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${Math.min(100, Math.round(burnProgress * 100))}%`,
                  backgroundColor: rhythmMeta.color,
                }}
              />
            </div>

            {/* Mode Switcher + Presets */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-1 bg-white/[0.04] p-0.5 rounded-lg border border-white/[0.06]">
                {MODE_OPTIONS.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => handleModeChange(m.id)}
                    className={`px-2 py-1 rounded-md text-[10px] font-mono transition-colors cursor-pointer ${
                      mode === m.id ? 'bg-white/15 text-white font-bold' : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>

              {mode !== 'stopwatch' && (
                <div className="flex items-center gap-1">
                  {[15, 25, 45, 60].map((mins) => (
                    <button
                      key={mins}
                      type="button"
                      onClick={() => handlePresetMinutes(mins)}
                      className={`px-1.5 py-0.5 rounded text-[10px] font-mono transition-colors cursor-pointer ${
                        totalSeconds === mins * 60
                          ? 'bg-white/20 text-white font-bold'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      {mins}m
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 8-Rhythm Dot-Matrix Picker */}
            <div className="grid grid-cols-4 gap-1.5 mb-3">
              {DOT_RHYTHMS.map((item) => {
                const selected = item.id === rhythm;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setRhythm(item.id)}
                    title={item.label}
                    className={`flex items-center justify-center gap-1.5 px-2 py-1.5 rounded-full bg-[#050507] border transition-all cursor-pointer ${
                      selected ? 'border-white/35' : 'border-white/[0.07] hover:border-white/20'
                    }`}
                  >
                    <DotMatrixPulse rhythm={item.id} active size="xs" />
                  </button>
                );
              })}
            </div>

            {/* Footer Telemetry */}
            <div className="pt-2.5 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-zinc-400">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <strong className="text-zinc-200">{sessionsCompleted}</strong> sessions
              </span>
              <span className="flex items-center gap-1">
                <Flame className="w-3 h-3 text-amber-400" />
                <strong className="text-zinc-200">{snapshot.totalMinutes}m</strong> studied · {snapshot.streakDays}d streak
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
