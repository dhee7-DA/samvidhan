import React from 'react';
import { motion } from 'motion/react';
import { Maximize2, Pause, Play } from 'lucide-react';
import { DOT_RHYTHMS, DotMatrixPulse, ShimmerLabel } from './DotMatrixPulse';
import { useFocusTimer } from '../../context/FocusTimerContext';
import { useTheme } from '../../context/ThemeContext';
import { EDITORIAL_SPRING } from './EditorialMotionCards';

export const FloatingFocusCandle: React.FC = () => {
  const { activeTab, setActiveTab } = useTheme();
  const {
    isRunning,
    minsDisplay,
    secsDisplay,
    rhythm,
    toggleRunning,
  } = useFocusTimer();

  // Hide floating pill when the full Focus Timer page is open
  if (activeTab === 'focus-timer') {
    return null;
  }

  const rhythmMeta = DOT_RHYTHMS.find((r) => r.id === rhythm) || DOT_RHYTHMS[2];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={EDITORIAL_SPRING}
      className="fixed bottom-5 right-4 z-40 print:hidden select-none"
    >
      <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#070709]/95 backdrop-blur-md border border-white/12 shadow-[0_10px_28px_rgba(0,0,0,0.48)]">
        <button
          type="button"
          onClick={toggleRunning}
          title={isRunning ? 'Pause Focus Timer' : 'Start Focus Timer'}
          className="flex items-center gap-2 cursor-pointer"
        >
          <DotMatrixPulse rhythm={rhythm} active={isRunning} size="sm" />
          <ShimmerLabel
            text={`${minsDisplay}:${secsDisplay}`}
            active={isRunning}
            accentColor={rhythmMeta.color}
            className="text-xs font-mono tabular-nums"
          />
        </button>

        <div className="h-3.5 w-px bg-white/10" />

        <button
          type="button"
          onClick={toggleRunning}
          title={isRunning ? 'Pause' : 'Start'}
          className="p-1 rounded-full text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          {isRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('focus-timer')}
          title="Open Focus Timer Studio"
          className="p-1 rounded-full text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          <Maximize2 className="w-3 h-3" />
        </button>
      </div>
    </motion.div>
  );
};
