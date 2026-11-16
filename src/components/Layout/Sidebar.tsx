import React, { useState, useRef, useEffect } from 'react';
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
  Sparkles,
  Flame,
  FileQuestion,
  Timer,
  AlertTriangle,
  PenTool,
  Printer,
  BrainCircuit,
  Radio,
  GitBranch,
  Gamepad2
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  badge?: string;
  sub?: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'overview', label: 'Overview', icon: <Compass className="w-4 h-4" />, sub: 'Architecture & Preamble' },
  { id: 'bootcamp', label: '15-Day Bootcamp', icon: <Flame className="w-4 h-4" />, badge: '3,000 MCQs + Cases', sub: 'Daily Study & Drill' },
  { id: 'mock-exam', label: 'Exam Simulator', icon: <Timer className="w-4 h-4" />, badge: 'Timed Mock', sub: 'Exam Hall Engine' },
  { id: 'mistakes-notebook', label: 'Mistakes Bank', icon: <AlertTriangle className="w-4 h-4" />, badge: 'Smart Diagnostic', sub: 'Re-Attempt Errors' },
  { id: 'mains-lab', label: 'Mains Writing Lab', icon: <PenTool className="w-4 h-4" />, badge: '150 Cases', sub: 'Answer Writing & Rubrics' },
  { id: 'revision-sheets', label: 'Revision Sheets', icon: <Printer className="w-4 h-4" />, badge: 'Printable PDF', sub: 'Rapid Cheat Sheets' },
  { id: 'flashcards', label: 'Flashcards', icon: <BrainCircuit className="w-4 h-4" />, badge: 'Leitner SRS', sub: 'Spaced Recall' },
  { id: 'tile-matcher', label: 'Synaptic Matcher', icon: <Gamepad2 className="w-4 h-4" />, badge: 'Gamified Blitz', sub: 'Tile Memory Arena' },
  { id: 'lineage', label: 'Precedent Trees', icon: <GitBranch className="w-4 h-4" />, badge: '1950–2026', sub: 'Case Lineage' },
  { id: 'audio-lab', label: 'Audio & Viva', icon: <Radio className="w-4 h-4" />, badge: 'Spoken Bench', sub: 'Oral Advocacy' },
  { id: 'pyqs', label: 'J&K Mains PYQs', icon: <FileQuestion className="w-4 h-4" />, badge: '10 Years', sub: 'Paper-II Solved Bank' },
  { id: 'parts', label: '25 Parts', icon: <BookOpen className="w-4 h-4" />, badge: 'Parts I–XXII', sub: 'Analytical Breakdown' },
  { id: 'articles-master', label: 'Articles 1–395', icon: <Layers className="w-4 h-4" />, badge: 'Bare Act Explorer', sub: 'Verbatim Clauses & Diffs' },
  { id: 'dictionary', label: 'Legal Dictionary', icon: <BookOpen className="w-4 h-4" />, badge: 'Hover Engine', sub: 'Maxims & Terms' },
  { id: 'visual-lab', label: 'Visual Law Lab', icon: <Eye className="w-4 h-4" />, badge: '17 Blueprints', sub: 'Vector Blueprints' },
  { id: 'amendments', label: 'Amendments', icon: <GitCommit className="w-4 h-4" />, badge: '1 to 106', sub: 'Constituent Shifts' },
  { id: 'schedules', label: '12 Schedules', icon: <Calendar className="w-4 h-4" />, badge: 'Mnemonic', sub: 'TEARS OF OLD PM' },
  { id: 'doctrines', label: 'Doctrines Hub', icon: <Scale className="w-4 h-4" />, badge: '10 Doctrines', sub: 'Judicial Tests' },
  { id: 'judgments', label: 'Landmark Cases', icon: <Award className="w-4 h-4" />, badge: '100 Cases', sub: 'Authoritative Ratios' },
  { id: 'comparative', label: 'Global Matrix', icon: <Globe2 className="w-4 h-4" />, sub: 'Comparative Sources' },
  { id: 'quiz', label: 'Mastery Quiz', icon: <CheckSquare className="w-4 h-4" />, badge: 'Active Recall', sub: 'Conceptual Drills' },
];

export const Sidebar: React.FC = () => {
  const { activeTab, setActiveTab } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const currentItem = NAV_ITEMS.find((item) => item.id === activeTab) || NAV_ITEMS[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <nav className="w-full border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] py-2 px-4 transition-colors">
      {/* Responsive Collapsible Navigation (< xl screens, including mobile and split-screen desktop ~770px) */}
      <div ref={menuRef} className="xl:hidden max-w-7xl mx-auto flex flex-col gap-2 relative">
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="w-full flex items-center justify-between p-2.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-xs font-mono text-[var(--text-primary)] transition-all shadow-sm"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="text-[var(--accent)] shrink-0">{currentItem.icon}</span>
            <span className="font-bold truncate">{currentItem.label}</span>
            {currentItem.badge && (
              <span className="text-[9px] px-1.5 py-0.2 rounded font-mono bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)] shrink-0">
                {currentItem.badge}
              </span>
            )}
            <span className="text-[10px] text-[var(--text-muted)] truncate hidden sm:inline">
              — {currentItem.sub}
            </span>
          </div>
          <div className="flex items-center gap-2 text-[var(--text-muted)] shrink-0 ml-2">
            <span className="text-[10px] hidden xs:inline">13 Modules</span>
            <div className={`p-1 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] transition-transform duration-200 ${
              isMenuOpen ? 'rotate-180 text-[var(--accent)] border-[var(--accent)]' : ''
            }`}>
              <ChevronDown className="w-3.5 h-3.5" />
            </div>
          </div>
        </button>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 z-50 p-3 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] shadow-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 animate-fadeIn max-h-[75vh] overflow-y-auto">
            <div className="col-span-full pb-2 mb-1 border-b border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
              <span className="font-bold text-[var(--text-primary)]">NAVIGATE CONSTITUTION MODULES</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-[var(--text-primary)] px-2 py-0.5 rounded hover:bg-[var(--bg-base)] transition-colors text-[11px]"
              >
                Close ✕
              </button>
            </div>
            {NAV_ITEMS.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-start gap-2.5 p-3 rounded-xl text-xs font-mono text-left transition-all ${
                    isActive
                      ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold shadow-md'
                      : 'bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                  }`}
                >
                  <span className={`mt-0.5 shrink-0 ${isActive ? 'text-inherit' : 'text-[var(--accent)]'}`}>
                    {item.icon}
                  </span>
                  <div className="flex flex-col min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1">
                      <span className="truncate font-semibold">{item.label}</span>
                      {item.badge && (
                        <span className={`text-[9px] px-1 py-0.2 rounded shrink-0 ${
                          isActive ? 'bg-black/20 text-inherit' : 'bg-[var(--bg-surface)] text-[var(--text-muted)] border border-[var(--border-subtle)]'
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </div>
                    {item.sub && (
                      <span className={`text-[10px] truncate ${isActive ? 'text-inherit/80' : 'text-[var(--text-muted)]'}`}>
                        {item.sub}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Full Navigation Tab Strip (xl screens and wider: 1280px+) */}
      <div className="hidden xl:flex max-w-7xl mx-auto items-center justify-center gap-1.5 px-2">
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
                <span className="text-[9px] px-1.5 py-0.2 rounded font-mono bg-[var(--bg-base)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
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
