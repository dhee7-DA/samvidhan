import React, { useState, useRef, useEffect } from 'react';
import { Type, ChevronDown, Check } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import type { FontMode } from '../../types/constitution';

const FONTS: { id: FontMode; label: string; sample: string; desc: string }[] = [
  { id: 'geist', label: 'Geist Sans', sample: 'Aa', desc: 'Modern geometric editorial typeface' },
  { id: 'geist-mono', label: 'Geist Mono', sample: '01', desc: 'Technical high-density legal tabular mono' },
  { id: 'jetbrains', label: 'JetBrains', sample: 'fn', desc: 'Crisp developer monospace with ligatures' }
];

export const FontSelector: React.FC = () => {
  const { font, setFont } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
      {/* Collapsible Trigger Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        title="Change typography"
        className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-150 border ${
          isOpen
            ? 'bg-[var(--bg-surface-elevated)] border-[var(--accent)] text-[var(--accent)] shadow-sm'
            : 'bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
        }`}
      >
        <Type className="w-3.5 h-3.5 text-[var(--text-muted)]" />
        <span className="font-semibold">{currentFont.label.split(' ')[0]}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[var(--accent)]' : 'text-[var(--text-muted)]'
          }`}
        />
      </button>

      {/* Collapsible Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] shadow-2xl p-2 z-50 animate-fadeIn backdrop-blur-xl">
          <div className="flex items-center justify-between px-2.5 py-1.5 text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider border-b border-[var(--border-subtle)] mb-1.5">
            <span>Typography</span>
            <span>3 Fonts</span>
          </div>

          <div className="flex flex-col gap-1">
            {FONTS.map((f) => {
              const isActive = font === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => {
                    setFont(f.id);
                    setIsOpen(false);
                  }}
                  className={`flex items-center justify-between p-2.5 rounded-xl text-left transition-all ${
                    isActive
                      ? 'bg-[var(--accent)]/10 text-[var(--text-primary)] border border-[var(--accent)]/40 shadow-sm'
                      : 'hover:bg-[var(--bg-base)] text-[var(--text-secondary)] border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="w-7 h-7 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] flex items-center justify-center text-xs font-bold text-[var(--accent)] shrink-0 font-mono">
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
        </div>
      )}
    </div>
  );
};
