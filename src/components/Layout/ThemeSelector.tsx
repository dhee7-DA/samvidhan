import React, { useState, useRef, useEffect } from 'react';
import { Palette, Sun, Moon, Sparkles, Feather, ChevronDown, Check, Flame } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import type { ThemeMode } from '../../types/constitution';

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

export const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentTheme = THEMES.find((t) => t.id === theme) || THEMES[1];

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
      {/* Collapsible Trigger Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        title="Change theme palette"
        className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-150 border ${
          isOpen
            ? 'bg-[var(--bg-surface-elevated)] border-[var(--accent)] text-[var(--accent)] shadow-sm'
            : 'bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
        }`}
      >
        <span
          className="w-2.5 h-2.5 rounded-full ring-2 ring-black/20 shrink-0"
          style={{ backgroundColor: currentTheme.sampleColor }}
        />
        <span className="font-semibold">{currentTheme.name}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[var(--accent)]' : 'text-[var(--text-muted)]'
          }`}
        />
      </button>

      {/* Collapsible Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] shadow-2xl p-2 z-50 animate-fadeIn backdrop-blur-xl">
          <div className="flex items-center justify-between px-2.5 py-1.5 text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider border-b border-[var(--border-subtle)] mb-1.5">
            <span>Themes & Palettes</span>
            <span>6 Presets</span>
          </div>

          <div className="flex flex-col gap-1">
            {THEMES.map((t) => {
              const isActive = theme === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id);
                    setIsOpen(false);
                  }}
                  className={`flex items-center justify-between p-2.5 rounded-xl text-left transition-all ${
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
        </div>
      )}
    </div>
  );
};
