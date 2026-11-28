import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Pause, Play, RotateCcw, Timer, Volume2, VolumeX, CheckCircle2 } from 'lucide-react';
import { DOT_RHYTHMS, DotMatrixPulse, ShimmerLabel } from '../Common/DotMatrixPulse';
import { EDITORIAL_SPRING, SlidingSegmentedControl, StudyTelemetryCard } from '../Common/EditorialMotionCards';
import { useFocusTimer } from '../../context/FocusTimerContext';

export const FocusTimerView: React.FC = () => {
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

  const activeMeta = DOT_RHYTHMS.find((r) => r.id === rhythm) || DOT_RHYTHMS[2];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[var(--border-subtle)] pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-medium text-[var(--text-muted)]">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>8 RHYTHMS · DOT-MATRIX FOCUS STUDIO</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
            Study Timer & Focus Rhythm
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-muted)]">
            Choose from 8 breathing dot-matrix light rhythms synced live to your header badge, corner pill, and Study Telemetry.
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono text-[var(--text-muted)]">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <strong className="text-[var(--text-primary)]">{sessionsCompleted}</strong> sessions completed
          </span>
          <button
            type="button"
            onClick={toggleSound}
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
        {/* Left: @guanmo_ai-inspired 7x7 Dot-Matrix Showcase + 8-Rhythm Grid */}
        <div className="lg:col-span-5 p-5 rounded-3xl bg-[#09090c] border border-white/10 flex flex-col justify-between gap-5 shadow-xl">
          <div className="flex flex-col items-center justify-center py-4 gap-3 rounded-2xl bg-[#050507] border border-white/[0.06]">
            <DotMatrixPulse rhythm={rhythm} active={isRunning} size="lg" />
            <div className="flex items-center gap-2 pt-1">
              <ShimmerLabel
                text={isRunning ? 'Focusing' : 'Thinking'}
                active={isRunning}
                accentColor={activeMeta.color}
                className="text-sm"
              />
              <span className="text-[11px] font-mono text-zinc-500">
                · {activeMeta.label} ({Math.round(burnProgress * 100)}%)
              </span>
            </div>
          </div>

          {/* 2x4 Grid of 8 Selectable Dot-Matrix Pills */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.16em] text-zinc-500 px-1">
              <span>8 Ways To Focus</span>
              <span>Select Rhythm</span>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {DOT_RHYTHMS.map((item) => {
                const selected = item.id === rhythm;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setRhythm(item.id)}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-full bg-[#050507] border transition-all cursor-pointer ${
                      selected
                        ? 'border-white/30 shadow-[0_0_16px_rgba(255,255,255,0.06)]'
                        : 'border-white/[0.07] hover:border-white/20'
                    }`}
                  >
                    <DotMatrixPulse rhythm={item.id} active size="sm" />
                    <ShimmerLabel
                      text={item.label}
                      active={selected}
                      accentColor={item.color}
                      className="text-xs"
                    />
                  </button>
                );
              })}
            </div>
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
                onClick={toggleRunning}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-[var(--accent-contrast)] text-sm font-bold shadow-sm cursor-pointer"
              >
                {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isRunning ? 'Pause Session' : 'Start Focus'}</span>
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
