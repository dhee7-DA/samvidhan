import React from 'react';
import { motion } from 'motion/react';
import { Maximize2, Pause, Play } from 'lucide-react';
import { ThreeSandHourglass } from './ThreeSandHourglass';
import { useFocusTimer } from '../../context/FocusTimerContext';
import { useTheme } from '../../context/ThemeContext';
import { EDITORIAL_SPRING } from './EditorialMotionCards';

export const FloatingFocusCandle: React.FC = () => {
  const { activeTab, setActiveTab } = useTheme();
  const {
    isRunning,
    minsDisplay,
    secsDisplay,
    burnProgress,
    toggleRunning,
  } = useFocusTimer();

  // Hide floating pop-up when the full Focus Timer page is open
  if (activeTab === 'focus-timer') {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={EDITORIAL_SPRING}
      className="fixed bottom-7 right-1.5 z-40 print:hidden select-none group flex flex-col items-center"
    >
      {/* Subtle hover-only micro pill for timer readout & open full view */}
      <div className="mb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[var(--bg-surface)]/90 backdrop-blur-md border border-[var(--border-subtle)] shadow-sm text-[10px] font-mono text-[var(--text-primary)]">
        <span className="tabular-nums font-bold">
          {minsDisplay}:{secsDisplay}
        </span>
        <button
          type="button"
          onClick={toggleRunning}
          title={isRunning ? 'Pause timer' : 'Start timer'}
          className="p-0.5 hover:text-amber-400 cursor-pointer"
        >
          {isRunning ? <Pause className="w-2.5 h-2.5" /> : <Play className="w-2.5 h-2.5" />}
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('focus-timer')}
          title="Open Focus Timer"
          className="p-0.5 hover:text-[var(--accent)] cursor-pointer"
        >
          <Maximize2 className="w-2.5 h-2.5" />
        </button>
      </div>

      {/* Pure ~0.85-inch (84x84px) floating 3D Sand Hourglass — click to start/pause */}
      <div
        role="button"
        tabIndex={0}
        onClick={toggleRunning}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleRunning();
          }
        }}
        title={isRunning ? `Focus running (${minsDisplay}:${secsDisplay}) — click to pause` : `Timer paused (${minsDisplay}:${secsDisplay}) — click to start`}
        className="cursor-pointer drop-shadow-[0_6px_14px_rgba(0,0,0,0.35)] hover:scale-105 transition-transform"
      >
        <ThreeSandHourglass
          isRunning={isRunning}
          progress={burnProgress}
        />
      </div>
    </motion.div>
  );
};
