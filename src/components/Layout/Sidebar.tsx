import React from 'react';
import {
  Compass,
  BookOpen,
  Eye,
  Calendar,
  Scale,
  Award,
  Globe2,
  CheckSquare,
  GitCommit,
  Layers
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  badge?: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'overview', label: 'Overview', icon: <Compass className="w-4 h-4" /> },
  { id: 'parts', label: '25 Parts', icon: <BookOpen className="w-4 h-4" />, badge: 'Parts I–XXII' },
  { id: 'articles-master', label: 'Articles 1–395', icon: <Layers className="w-4 h-4" />, badge: 'Master Index' },
  { id: 'visual-lab', label: 'Visual Law Lab', icon: <Eye className="w-4 h-4" />, badge: '14 SVGs' },
  { id: 'amendments', label: 'Amendments', icon: <GitCommit className="w-4 h-4" />, badge: '1 to 106' },
  { id: 'schedules', label: '12 Schedules', icon: <Calendar className="w-4 h-4" />, badge: 'Mnemonic' },
  { id: 'doctrines', label: 'Doctrines Hub', icon: <Scale className="w-4 h-4" />, badge: '10 Doctrines' },
  { id: 'judgments', label: 'Landmark Cases', icon: <Award className="w-4 h-4" /> },
  { id: 'comparative', label: 'Global Matrix', icon: <Globe2 className="w-4 h-4" /> },
  { id: 'quiz', label: 'Mastery Quiz', icon: <CheckSquare className="w-4 h-4" />, badge: 'Active Recall' },
];

export const Sidebar: React.FC = () => {
  const { activeTab, setActiveTab } = useTheme();

  return (
    <nav className="w-full border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] py-2 px-4 overflow-x-auto scrollbar-none">
      <div className="max-w-7xl mx-auto flex items-center justify-start sm:justify-center gap-1 sm:gap-2">
        {NAV_ITEMS.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all duration-150 shrink-0 ${
                isActive
                  ? 'bg-[var(--bg-surface-elevated)] text-[var(--accent)] font-semibold shadow-sm border border-[var(--border-strong)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-base)]'
              }`}
            >
              <span className={isActive ? 'text-[var(--accent)]' : 'text-[var(--text-muted)]'}>
                {item.icon}
              </span>
              <span>{item.label}</span>
              {item.badge && (
                <span className="hidden xl:inline text-[9px] px-1.5 py-0.2 rounded font-mono bg-[var(--bg-base)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
