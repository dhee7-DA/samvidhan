import React from 'react';
import { Type } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import type { FontMode } from '../../types/constitution';

const FONTS: { id: FontMode; label: string; sample: string }[] = [
  { id: 'geist', label: 'Geist', sample: 'Aa' },
  { id: 'geist-mono', label: 'Geist Mono', sample: '01' },
  { id: 'jetbrains', label: 'JetBrains', sample: 'fn' }
];

export const FontSelector: React.FC = () => {
  const { font, setFont } = useTheme();

  return (
    <div className="flex items-center gap-1 bg-[var(--bg-base)] p-1 rounded-xl border border-[var(--border-subtle)]">
      <div className="flex items-center gap-1 px-2 text-[var(--text-muted)] text-xs">
        <Type className="w-3.5 h-3.5" />
      </div>
      {FONTS.map((f) => {
        const isActive = font === f.id;
        return (
          <button
            key={f.id}
            onClick={() => setFont(f.id)}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all duration-150 ${
              isActive
                ? 'bg-[var(--bg-surface-elevated)] text-[var(--accent)] font-bold border border-[var(--border-strong)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            {f.label}
          </button>
        );
      })}
    </div>
  );
};
