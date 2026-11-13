import React, { useState } from 'react';
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
  Layers,
  ChevronDown,
  Menu
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
  { id: 'visual-lab', label: 'Visual Law Lab', icon: <Eye className="w-4 h-4" />, badge: '15 SVGs' },
  { id: 'amendments', label: 'Amendments', icon: <GitCommit className="w-4 h-4" />, badge: '1 to 106' },
  { id: 'schedules', label: '12 Schedules', icon: <Calendar className="w-4 h-4" />, badge: 'Mnemonic' },
  { id: 'doctrines', label: 'Doctrines Hub', icon: <Scale className="w-4 h-4" />, badge: '10 Doctrines' },
  { id: 'judgments', label: 'Landmark Cases', icon: <Award className="w-4 h-4" />, badge: '100 Cases' },
  { id: 'comparative', label: 'Global Matrix', icon: <Globe2 className="w-4 h-4" /> },
  { id: 'quiz', label: 'Mastery Quiz', icon: <CheckSquare className="w-4 h-4" />, badge: 'Active Recall' },
];

export const Sidebar: React.FC = () => {
  const { activeTab, setActiveTab } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentItem = NAV_ITEMS.find((item) => item.id === activeTab) || NAV_ITEMS[0];

  return (
    <nav className="w-full border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] py-2 px-4 transition-colors">
      {/* Mobile Collapsible Navigation Button */}
      <div className="md:hidden flex flex-col gap-2">
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="flex items-center justify-between p-2.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)]"
        >
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-[var(--accent)]">{currentItem.icon}</span>
            <span className="font-bold">{currentItem.label}</span>
            {currentItem.badge && (
              <span className="text-[9px] px-1.5 py-0.2 rounded font-mono bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
                {currentItem.badge}
              </span>
            )}
          </div>
          <div className="flex items-center gap-1.5 text-[var(--text-muted)] shrink-0 ml-2">
            <span className="text-[10px]">10 Modules</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isMobileMenuOpen ? 'rotate-180 text-[var(--accent)]' : ''}`} />
          </div>
        </button>

        {isMobileMenuOpen && (
          <div className="p-3 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] shadow-xl grid grid-cols-2 gap-1.5 animate-fadeIn">
            {NAV_ITEMS.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-mono text-left transition-all ${
                    isActive
                      ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold shadow-sm'
                      : 'bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                  }`}
                >
                  <span className={isActive ? 'text-inherit' : 'text-[var(--text-muted)]'}>
                    {item.icon}
                  </span>
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Navigation Tab Strip */}
      <div className="hidden md:flex max-w-7xl mx-auto items-center justify-center gap-1 lg:gap-2 overflow-x-auto scrollbar-none">
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
