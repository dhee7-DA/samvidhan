import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flame, Maximize2, Minus, Pause, Play } from 'lucide-react';
import { ThreeBurningCandle } from './ThreeBurningCandle';
import { useFocusTimer } from '../../context/FocusTimerContext';
import { useTheme } from '../../context/ThemeContext';
import { EDITORIAL_SPRING } from './EditorialMotionCards';

const MODE_SHORT: Record<string, string> = {
  pomodoro: 'POMO',
  deep: 'DEEP',
  break: 'BREAK',
  stopwatch: 'STUDY',
};

export const FloatingFocusCandle: React.FC = () => {
  const { activeTab, setActiveTab } = useTheme();
  const {
    mode,
    isRunning,
    minsDisplay,
    secsDisplay,
    burnProgress,
    widgetMinimized,
    setWidgetMinimized,
    toggleRunning,
  } = useFocusTimer();

  // Hide floating pop-up when the full Focus Timer page is open
  if (activeTab === 'focus-timer') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-40 print:hidden select-none">
      <AnimatePresence mode="wait">
        {widgetMinimized ? (
          <motion.button
            key="candle-pill"
            type="button"
            initial={{ opacity: 0, scale: 0.85, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 8 }}
            transition={EDITORIAL_SPRING}
            onClick={() => setWidgetMinimized(false)}
            title="Show 3D Focus Candle"
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-[var(--bg-surface)]/95 backdrop-blur-md border border-[var(--border-strong)] shadow-lg text-xs font-mono text-[var(--text-primary)] hover:border-amber-500/60 transition-colors cursor-pointer"
          >
            <Flame className={`w-3.5 h-3.5 ${isRunning ? 'text-amber-500 animate-pulse' : 'text-[var(--text-muted)]'}`} />
            <span className="tabular-nums font-bold">
              {minsDisplay}:{secsDisplay}
            </span>
          </motion.button>
        ) : (
          <motion.div
            key="candle-popup"
            initial={{ opacity: 0, scale: 0.9, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 12 }}
            transition={EDITORIAL_SPRING}
            className="w-[112px] rounded-2xl bg-[var(--bg-surface)]/95 backdrop-blur-md border border-[var(--border-strong)] shadow-xl p-2 flex flex-col items-center gap-1.5"
          >
            {/* Top micro-bar */}
            <div className="w-full flex items-center justify-between px-0.5 text-[9px] font-mono text-[var(--text-muted)]">
              <span className="tracking-wider font-semibold">{MODE_SHORT[mode] || 'FOCUS'}</span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setActiveTab('focus-timer')}
                  title="Open full Focus Timer"
                  className="p-0.5 rounded hover:text-[var(--text-primary)] cursor-pointer"
                >
                  <Maximize2 className="w-2.5 h-2.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setWidgetMinimized(true)}
                  title="Minimize candle"
                  className="p-0.5 rounded hover:text-[var(--text-primary)] cursor-pointer"
                >
                  <Minus className="w-2.5 h-2.5" />
                </button>
              </div>
            </div>

            {/* 1-inch (96x96px) 3D Burning Candle */}
            <ThreeBurningCandle
              isBurning={isRunning}
              burnProgress={burnProgress}
              compact
            />

            {/* Bottom timer + play/pause pill */}
            <div className="w-full flex items-center justify-between gap-1 px-1 pt-0.5">
              <span className="text-xs font-mono font-bold tabular-nums text-[var(--text-primary)]">
                {minsDisplay}:{secsDisplay}
              </span>
              <button
                type="button"
                onClick={toggleRunning}
                title={isRunning ? 'Pause flame' : 'Light & start timer'}
                className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                  isRunning
                    ? 'bg-amber-500/20 text-amber-400 hover:bg-amber-500/30'
                    : 'bg-[var(--accent)] text-[var(--accent-contrast)] hover:opacity-90'
                }`}
              >
                {isRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 ml-0.5" />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
