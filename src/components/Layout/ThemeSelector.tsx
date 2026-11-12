import React from 'react';
import { Palette, Sun, Moon, Sparkles, Feather } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import type { ThemeMode } from '../../types/constitution';

const THEMES: { id: ThemeMode; name: string; icon: React.ReactNode; desc: string; sampleColor: string }[] = [
  {
    id: 'monochrome',
    name: 'Monochrome',
    icon: <Moon className="w-3.5 h-3.5" />,
    desc: 'Stark graphite & pure dark contrast',
    sampleColor: '#ffffff'
  },
  {
    id: 'ink',
    name: 'Ink',
    icon: <Sparkles className="w-3.5 h-3.5" />,
    desc: 'Deep fountain-pen midnight navy & ice',
    sampleColor: '#38bdf8'
  },
  {
    id: 'carbon',
    name: 'Carbon',
    icon: <Palette className="w-3.5 h-3.5" />,
    desc: 'Technical anthracite & emerald phosphor',
    sampleColor: '#10b981'
  },
  {
    id: 'paper',
    name: 'Paper (Light)',
    icon: <Feather className="w-3.5 h-3.5" />,
    desc: 'Warm archival parchment & sumi ink',
    sampleColor: '#b45309'
  },
  {
    id: 'chalk',
    name: 'Chalk (Light)',
    icon: <Sun className="w-3.5 h-3.5" />,
    desc: 'Architectural slate & clean studio white',
    sampleColor: '#2563eb'
  }
];

export const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-1 bg-[var(--bg-base)] p-1 rounded-xl border border-[var(--border-subtle)]">
      {THEMES.map((t) => {
        const isActive = theme === t.id;
        return (
          <button
            key={t.id}
            onClick={() => setTheme(t.id)}
            title={`${t.name}: ${t.desc}`}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-150 ${
              isActive
                ? 'bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] shadow-sm border border-[var(--border-strong)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
            }`}
          >
            <span
              className="w-2 h-2 rounded-full shrink-0"
              style={{ backgroundColor: t.sampleColor }}
            />
            <span className="hidden xl:inline">{t.name}</span>
          </button>
        );
      })}
    </div>
  );
};
