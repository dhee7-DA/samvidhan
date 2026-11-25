import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Palette, Sun, Moon, Sparkles, Feather, ChevronDown, Check, Flame, Type } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import type { ThemeMode, FontMode } from '../../types/constitution';
import { popoverPanelVariants, springs } from '../../lib/motionTokens';

const THEMES: { id: ThemeMode; name: string; icon: React.ReactNode; desc: string; sampleColor: string; mode: 'Dark' | 'Light' }[] = [
  {
    id: 'monochrome',
    name: 'Monochrome',
    icon: <Moon className="w-3.5 h-3.5" />,
    desc: 'Stark graphite & pure dark contrast',
    sampleColor: '#ffffff',
    mode: 'Dark'
  },
  {
    id: 'ink',
    name: 'Ink (Cyan)',
    icon: <Sparkles className="w-3.5 h-3.5" />,
    desc: 'Pitch dark black & vivid electric cyan',
    sampleColor: '#00f0ff',
    mode: 'Dark'
  },
  {
    id: 'pink',
    name: 'Mono Pink',
    icon: <Flame className="w-3.5 h-3.5" />,
    desc: 'Monochrome obsidian & hot pink neon',
    sampleColor: '#ff2d75',
    mode: 'Dark'
  },
  {
    id: 'carbon',
    name: 'Carbon',
    icon: <Palette className="w-3.5 h-3.5" />,
    desc: 'Technical anthracite & emerald phosphor',
    sampleColor: '#10b981',
    mode: 'Dark'
  },
  {
    id: 'paper',
    name: 'Paper',
    icon: <Feather className="w-3.5 h-3.5" />,
    desc: 'Warm archival parchment & rubric crimson',
    sampleColor: '#991b1b',
    mode: 'Light'
  },
  {
    id: 'chalk',
    name: 'Chalk',
    icon: <Sun className="w-3.5 h-3.5" />,
    desc: 'Architectural studio white & royal indigo',
    sampleColor: '#4f46e5',
    mode: 'Light'
  }
];

const FONTS: { id: FontMode; label: string; sample: string; desc: string }[] = [
  { id: 'geist', label: 'Geist Sans', sample: 'Aa', desc: 'Modern geometric editorial typeface' },
  { id: 'geist-mono', label: 'Geist Mono', sample: '01', desc: 'Technical high-density legal tabular mono' },
  { id: 'jetbrains', label: 'JetBrains', sample: 'fn', desc: 'Crisp developer monospace with ligatures' }
];

export const ThemeSelector: React.FC = () => {
  const { theme, setTheme, font, setFont } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubTab, setActiveSubTab] = useState<'themes' | 'typography'>('themes');
  const containerRef = useRef<HTMLDivElement>(null);

  const currentTheme = THEMES.find((t) => t.id === theme) || THEMES[0];
  const currentFont = FONTS.find((f) => f.id === font) || FONTS[0];

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={containerRef}>
      {/* Compact Colour Icon Trigger (40x40px optical hit area) */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        title={`Theme & Display: ${currentTheme.name} (${currentFont.label})`}
        aria-label="Theme and typography selector"
        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-[transform,background-color,border-color,box-shadow] duration-150 border btn-tactile shrink-0 cursor-pointer ${
          isOpen
            ? 'bg-[var(--bg-surface-elevated)] border-[var(--accent)] shadow-md ring-2 ring-[var(--accent)]/25'
            : 'bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
        }`}
      >
        <span
          className="w-3.5 h-3.5 rounded-full ring-2 ring-black/40 dark:ring-white/25 transition-transform hover:scale-110"
          style={{ backgroundColor: currentTheme.sampleColor }}
        />
      </button>

      {/* Unified Themes & Typography Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={popoverPanelVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute right-0 mt-2 w-80 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] shadow-2xl p-3 z-50 backdrop-blur-xl"
          >
            {/* Header Switcher Tabs */}
            <div className="flex items-center p-1 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] mb-3 relative">
              <button
                onClick={() => setActiveSubTab('themes')}
                className={`relative flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-colors z-10 cursor-pointer ${
                  activeSubTab === 'themes'
                    ? 'text-[var(--text-primary)]'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                {activeSubTab === 'themes' && (
                  <motion.span
                    layoutId="themeSelectorSubTab"
                    transition={springs.snappy}
                    className="absolute inset-0 rounded-lg bg-[var(--bg-surface-elevated)] shadow-sm border border-[var(--border-subtle)] -z-10"
                  />
                )}
                <Palette className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>Theme Palettes</span>
              </button>
              <button
                onClick={() => setActiveSubTab('typography')}
                className={`relative flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-colors z-10 cursor-pointer ${
                  activeSubTab === 'typography'
                    ? 'text-[var(--text-primary)]'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                {activeSubTab === 'typography' && (
                  <motion.span
                    layoutId="themeSelectorSubTab"
                    transition={springs.snappy}
                    className="absolute inset-0 rounded-lg bg-[var(--bg-surface-elevated)] shadow-sm border border-[var(--border-subtle)] -z-10"
                  />
                )}
                <Type className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>Typography</span>
              </button>
            </div>

          {/* Tab 1: Themes & Palettes */}
          {activeSubTab === 'themes' && (
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between px-1 pb-1 text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                <span>Color Atmosphere</span>
                <span>6 Presets</span>
              </div>
              {THEMES.map((t) => {
                const isActive = theme === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => {
                      setTheme(t.id);
                    }}
                    className={`flex items-center justify-between p-2 rounded-xl text-left transition-all btn-tactile ${
                      isActive
                        ? 'bg-[var(--accent)]/10 text-[var(--text-primary)] border border-[var(--accent)]/40 shadow-sm'
                        : 'hover:bg-[var(--bg-base)] text-[var(--text-secondary)] border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span
                        className="w-3.5 h-3.5 rounded-full ring-2 ring-black/30 shrink-0"
                        style={{ backgroundColor: t.sampleColor }}
                      />
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-[var(--text-primary)] font-mono">
                            {t.name}
                          </span>
                          <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-[var(--badge-bg)] text-[var(--text-muted)] border border-[var(--badge-border)]">
                            {t.mode}
                          </span>
                        </div>
                        <p className="text-[10px] text-[var(--text-muted)] line-clamp-1 mt-0.5">
                          {t.desc}
                        </p>
                      </div>
                    </div>

                    {isActive && (
                      <Check className="w-4 h-4 text-[var(--accent)] shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {/* Tab 2: Typography & Font Engine */}
          {activeSubTab === 'typography' && (
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between px-1 pb-1 text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                <span>Display Typeface</span>
                <span>3 Fonts</span>
              </div>
              {FONTS.map((f) => {
                const isActive = font === f.id;
                return (
                  <button
                    key={f.id}
                    onClick={() => {
                      setFont(f.id);
                    }}
                    className={`flex items-center justify-between p-2.5 rounded-xl text-left transition-all btn-tactile ${
                      isActive
                        ? 'bg-[var(--accent)]/10 text-[var(--text-primary)] border border-[var(--accent)]/40 shadow-sm'
                        : 'hover:bg-[var(--bg-base)] text-[var(--text-secondary)] border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="w-8 h-8 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] flex items-center justify-center text-xs font-bold text-[var(--accent)] shrink-0 font-mono">
                        {f.sample}
                      </span>
                      <div className="min-w-0">
                        <span className="text-xs font-bold text-[var(--text-primary)] font-mono block">
                          {f.label}
                        </span>
                        <p className="text-[10px] text-[var(--text-muted)] line-clamp-1 mt-0.5">
                          {f.desc}
                        </p>
                      </div>
                    </div>

                    {isActive && (
                      <Check className="w-4 h-4 text-[var(--accent)] shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>
          )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
