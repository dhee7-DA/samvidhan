import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { springs } from '../../lib/motionTokens';
import {
  Search,
  Bookmark,
  Compass,
  BookOpen,
  ShieldCheck,
  PanelLeftClose,
  PanelLeftOpen
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useFocusTimer } from '../../context/FocusTimerContext';
import { DOT_RHYTHMS, DotMatrixPulse, ShimmerLabel } from '../Common/DotMatrixPulse';
import { ThemeSelector } from './ThemeSelector';

export const Header: React.FC = () => {
  const {
    setSearchOpen,
    bookmarkedArticles,
    setActiveTab,
    setDictionaryModalOpen,
    setVaultModalOpen,
    sidebarCollapsed,
    setSidebarCollapsed
  } = useTheme();

  const { isRunning, minsDisplay, secsDisplay, rhythm } = useFocusTimer();
  const rhythmMeta = DOT_RHYTHMS.find((r) => r.id === rhythm) || DOT_RHYTHMS[2];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border-subtle)] bg-[var(--bg-base)]/85 backdrop-blur-md transition-colors">
      <div className="w-full px-3 sm:px-6 h-14 flex items-center justify-between gap-2 sm:gap-3">
        {/* Left: Rail Toggle (Desktop) + Brand Identity */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          <button
            onClick={() => setSidebarCollapsed((prev) => !prev)}
            title={sidebarCollapsed ? 'Expand navigation rail' : 'Collapse navigation rail'}
            aria-label={sidebarCollapsed ? 'Expand navigation rail' : 'Collapse navigation rail'}
            className="hidden md:flex w-10 h-10 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] items-center justify-center transition-[transform,background-color,border-color,color] duration-150 btn-tactile shrink-0 cursor-pointer"
          >
            {sidebarCollapsed ? <PanelLeftOpen className="w-4 h-4" /> : <PanelLeftClose className="w-4 h-4" />}
          </button>

          <div
            onClick={() => setActiveTab('overview')}
            className="flex items-center gap-2 sm:gap-2.5 cursor-pointer group btn-tactile select-none shrink-0"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] flex items-center justify-center text-[var(--text-primary)] surface-specular group-hover:border-[var(--accent)] transition-colors shrink-0">
              <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform duration-500 ease-out" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold tracking-tight text-sm sm:text-base text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors whitespace-nowrap">
                  SAMVIDHAN
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hidden sm:inline">
                  LEX MAGNA
                </span>
              </div>
            </div>
          </div>

          {/* Modern 7x7 Dot-Matrix Focus Pill beside SAMVIDHAN branding */}
          <button
            type="button"
            onClick={() => setActiveTab('focus-timer')}
            title="Open Focus Timer"
            aria-label="Open Focus Timer"
            className="hidden sm:inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#070709] border border-white/12 hover:border-white/25 shadow-sm transition-colors cursor-pointer shrink-0"
          >
            <DotMatrixPulse rhythm={rhythm} active size="xs" />
            <ShimmerLabel
              text={isRunning ? `${minsDisplay}:${secsDisplay}` : 'Focus'}
              active={isRunning}
              accentColor={rhythmMeta.color}
              className="text-[11px] font-mono tabular-nums"
            />
          </button>
        </div>

        {/* Center: Command Palette Spotlight Trigger */}
        <button
          onClick={() => setSearchOpen(true)}
          className="flex-1 max-w-md hidden md:flex items-center justify-between h-10 px-3.5 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-muted)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-[background-color,border-color,box-shadow] duration-150 text-xs min-w-0 btn-tactile surface-specular cursor-pointer"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <Search className="w-3.5 h-3.5 text-[var(--text-muted)] shrink-0" />
            <span className="truncate text-[var(--text-secondary)] font-normal">
              Jump to module, article (1–395), or case...
            </span>
          </div>
          <kbd className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)] shrink-0 hidden lg:inline font-mono">
            ⌘K
          </kbd>
        </button>

        {/* Right: Optical Utility Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <button
            onClick={() => setSearchOpen(true)}
            aria-label="Open global search"
            className="md:hidden w-9 h-9 rounded-xl bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)] flex items-center justify-center btn-tactile cursor-pointer"
          >
            <Search className="w-4 h-4" />
          </button>

          <button
            onClick={() => setDictionaryModalOpen(true)}
            title="Universal Legal & English Dictionary (Alt + D)"
            aria-label="Universal Legal & English Dictionary"
            className="flex items-center justify-center gap-1.5 w-9 h-9 md:w-auto sm:h-10 md:px-3 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-xs font-medium transition-[transform,background-color,border-color,color] duration-150 btn-tactile cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-[var(--text-muted)]" />
            <span className="hidden md:inline">Lexicon</span>
            <kbd className="text-[9px] px-1 py-0.2 rounded bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)] hidden xl:inline font-mono">
              Alt+D
            </kbd>
          </button>

          {/* Theme & Typography Swatch */}
          <ThemeSelector />

          {/* Progress Vault Backup */}
          <button
            onClick={() => setVaultModalOpen(true)}
            title="Study Progress Backup & Restore Vault (.json)"
            aria-label="Open progress backup vault"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] flex items-center justify-center transition-[transform,background-color,border-color,color] duration-150 btn-tactile shrink-0 cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4" />
          </button>

          {/* Saved Bookmarks */}
          <button
            onClick={() => setActiveTab('parts')}
            title={`Saved Articles (${bookmarkedArticles.length})`}
            aria-label={`Saved articles: ${bookmarkedArticles.length}`}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] flex items-center justify-center transition-[transform,background-color,border-color,color] duration-150 btn-tactile shrink-0 relative cursor-pointer"
          >
            <Bookmark className="w-4 h-4" />
            <AnimatePresence mode="popLayout" initial={false}>
              {bookmarkedArticles.length > 0 && (
                <motion.span
                  key={bookmarkedArticles.length}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={springs.bouncy}
                  className="absolute -top-1 -right-1 min-w-[16px] h-4 px-1 rounded-full bg-[var(--accent)] text-[var(--accent-contrast)] text-[9px] font-bold font-mono tabular-nums flex items-center justify-center shadow-xs"
                >
                  {bookmarkedArticles.length}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </header>
  );
};
