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
  ChevronLeft,
  ChevronRight,
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
  Gamepad2,
  Swords,
  Gavel,
  Clock,
  Target,
  Zap,
  ShieldAlert,
  Vote
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  badge?: string;
  sub?: string;
  category: 'study' | 'cases' | 'practice' | 'bootcamp';
}

const NAV_ITEMS: NavItem[] = [
  // 1. Foundational Study Material (Whole Study Material First)
  { id: 'overview', label: 'Overview', icon: <Compass className="w-4 h-4" />, sub: 'Architecture & Preamble', category: 'study' },
  { id: 'articles-master', label: 'Articles 1–395', icon: <Layers className="w-4 h-4" />, badge: 'Bare Act & 395 Lab', sub: 'Clauses, Diffs & Mastery Wall', category: 'study' },
  { id: 'parts', label: '25 Parts', icon: <BookOpen className="w-4 h-4" />, badge: 'Parts I–XXII', sub: 'Analytical Breakdown', category: 'study' },
  { id: 'schedules', label: '12 Schedules', icon: <Calendar className="w-4 h-4" />, badge: 'Mnemonic', sub: 'TEARS OF OLD PM', category: 'study' },
  { id: 'amendments', label: 'Amendments', icon: <GitCommit className="w-4 h-4" />, badge: '1 to 106', sub: 'Constituent Shifts', category: 'study' },
  { id: 'doctrines', label: 'Doctrines Hub', icon: <Scale className="w-4 h-4" />, badge: '10 Doctrines', sub: 'Judicial Tests', category: 'study' },
  { id: 'constitutional-bodies', label: 'Constitutional Bodies', icon: <ShieldAlert className="w-4 h-4" />, badge: 'Matrix Lab', sub: 'ECI, CAG, UPSC, NHRC & Traps', category: 'study' },
  { id: 'writs-emergency', label: 'Writs & Emergency', icon: <ShieldAlert className="w-4 h-4" />, badge: 'War Room', sub: '5 Writs & Emergency Trio', category: 'study' },
  { id: 'federal-relations', label: '7th Schedule & Relations', icon: <Layers className="w-4 h-4" />, badge: 'Arts 245–255', sub: '3 Lists, 5 Gateways & Repugnancy', category: 'study' },
  { id: 'majorities-lab', label: 'Majorities & Quorum', icon: <Vote className="w-4 h-4" />, badge: 'All 7 Types', sub: 'Math Bench & Traps', category: 'study' },
  { id: 'deadlines-matrix', label: 'Time Limits & Deadlines', icon: <Timer className="w-4 h-4" />, badge: 'Numbers Lab', sub: '14D, 1M, 6W, 6M Traps', category: 'study' },
  { id: 'visual-lab', label: 'Visual Law Lab', icon: <Eye className="w-4 h-4" />, badge: '17 Blueprints', sub: 'Vector Blueprints', category: 'study' },
  { id: 'fast-track', label: 'Speed Hacks & Tricks', icon: <Zap className="w-4 h-4" />, badge: '+89/+90 & Mnemonics', sub: 'Shortcuts & Memory Palaces', category: 'study' },
  { id: 'dictionary', label: 'Legal Dictionary', icon: <BookOpen className="w-4 h-4" />, badge: 'Hover Engine', sub: 'Maxims & Terms', category: 'study' },
  { id: 'comparative', label: 'Global Matrix', icon: <Globe2 className="w-4 h-4" />, sub: 'Comparative Sources', category: 'study' },

  // 2. Landmark Cases & Precedents
  { id: 'judgments', label: 'Landmark Cases', icon: <Award className="w-4 h-4" />, badge: '100 Cases', sub: 'Authoritative Ratios', category: 'cases' },
  { id: 'precedent-clash', label: 'Precedent Clash', icon: <Swords className="w-4 h-4" />, badge: 'Overruled vs Settled', sub: '100 Historic Battles', category: 'cases' },
  { id: 'lineage', label: 'Knowledge Graphs (Trees)', icon: <GitBranch className="w-4 h-4" />, badge: 'Precedent Lineage', sub: '1950–2026 Case Lineages', category: 'cases' },
  { id: 'audio-lab', label: 'Audio & Viva', icon: <Radio className="w-4 h-4" />, badge: 'Spoken Bench', sub: 'Oral Advocacy', category: 'cases' },

  // 3. Practice, Drills & Exam Simulation
  { id: 'article-mastery', label: '395 Articles Mastery', icon: <BrainCircuit className="w-4 h-4" />, badge: 'Active Recall', sub: 'Matrix Wall, Drills & +89/+90', category: 'practice' },
  { id: 'readiness-index', label: 'Readiness Index', icon: <Target className="w-4 h-4" />, badge: '25-Part Heatmap', sub: 'CRI & Blindspots Sentinel', category: 'practice' },
  { id: 'flashcards', label: 'Flashcards', icon: <BrainCircuit className="w-4 h-4" />, badge: '900+ SRS Cards', sub: 'Full-App Leitner', category: 'practice' },
  { id: 'arcade', label: 'Constitutional Arcade', icon: <Gamepad2 className="w-4 h-4" />, badge: '4 Games + XP', sub: 'Bench Sim, Blitz & Writs', category: 'practice' },
  { id: 'mock-exam', label: 'Exam Simulator', icon: <Timer className="w-4 h-4" />, badge: 'Timed Mock', sub: 'Exam Hall Engine', category: 'practice' },
  { id: 'trap-simulator', label: 'Negative Marking Simulator', icon: <ShieldAlert className="w-4 h-4" />, badge: '+2/-0.66 Hall', sub: '50-Q Trap Assessment', category: 'practice' },
  { id: 'mistakes-notebook', label: 'Mistakes Bank', icon: <AlertTriangle className="w-4 h-4" />, badge: 'Smart Diagnostic', sub: 'Re-Attempt Errors', category: 'practice' },
  { id: 'mains-mock', label: 'Mains Mock Hall', icon: <Clock className="w-4 h-4" />, badge: '3-Hour Timed', sub: 'Full Paper Simulator', category: 'practice' },
  { id: 'judgment-lab', label: 'Judgment Writing', icon: <Gavel className="w-4 h-4" />, badge: 'Mains Paper III/IV', sub: 'Issues & Judgments', category: 'practice' },
  { id: 'mains-lab', label: 'Mains Writing Lab', icon: <PenTool className="w-4 h-4" />, badge: '150 Cases', sub: 'Answer Writing & Rubrics', category: 'practice' },
  { id: 'pyqs', label: 'Mains Question Vault', icon: <FileQuestion className="w-4 h-4" />, badge: '126 Solved', sub: '5M–20M+ Questions & Blueprints', category: 'practice' },
  { id: 'revision-sheets', label: 'Revision Sheets', icon: <Printer className="w-4 h-4" />, badge: 'Printable PDF', sub: 'Rapid Cheat Sheets', category: 'practice' },
  { id: 'quiz', label: 'Mastery Quiz', icon: <CheckSquare className="w-4 h-4" />, badge: 'Active Recall', sub: 'Conceptual Drills', category: 'practice' },

  // 4. Capstone 15-Day Bootcamp
  { id: 'bootcamp', label: '15-Day Bootcamp', icon: <Flame className="w-4 h-4" />, badge: '3,000 MCQs + Cases', sub: 'Daily Study & Drill', category: 'bootcamp' },
];

export const Sidebar: React.FC = () => {
  const { activeTab, setActiveTab } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

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

  // Smooth scroll active tab into view
  useEffect(() => {
    if (activeTabRef.current && scrollContainerRef.current) {
      activeTabRef.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
    }
  }, [activeTab]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="w-full border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] py-2 px-3 sm:px-4 transition-colors relative z-20">
      {/* Responsive Collapsible Navigation (< xl screens, including mobile and split-screen desktop ~770px) */}
      <div ref={menuRef} className="xl:hidden max-w-7xl mx-auto flex flex-col gap-2 relative">
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="w-full flex items-center justify-between p-2.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-xs font-mono text-[var(--text-primary)] transition-all shadow-sm btn-tactile"
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
            <span className="text-[10px] hidden xs:inline">{NAV_ITEMS.length} Modules</span>
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
              <span className="font-bold text-[var(--text-primary)]">NAVIGATE CONSTITUTION MODULES ({NAV_ITEMS.length})</span>
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
                  className={`flex items-start gap-2.5 p-3 rounded-xl text-xs font-mono text-left transition-all btn-tactile ${
                    isActive
                      ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold shadow-md scale-[1.01]'
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
      <div className="hidden xl:flex max-w-7xl mx-auto items-center gap-1.5 relative group/nav">
        {/* Left Scroll Button */}
        <button
          onClick={() => handleScroll('left')}
          title="Scroll Left"
          className="p-1.5 rounded-lg bg-[var(--bg-surface-elevated)] hover:bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all shrink-0 btn-tactile opacity-60 hover:opacity-100"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Scrollable Nav Track */}
        <div
          ref={scrollContainerRef}
          className="flex-1 flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth py-1"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                ref={isActive ? activeTabRef : null}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all duration-150 shrink-0 btn-tactile ${
                  isActive
                    ? 'bg-[var(--bg-surface-elevated)] text-[var(--accent)] font-semibold shadow-sm border border-[var(--border-strong)] scale-[1.02]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-base)] border border-transparent'
                }`}
              >
                <span className={isActive ? 'text-[var(--accent)]' : 'text-[var(--text-muted)]'}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
                {item.badge && (
                  <span className={`text-[9px] px-1.5 py-0.2 rounded font-mono ${
                    isActive
                      ? 'bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]'
                      : 'bg-[var(--bg-base)] text-[var(--text-muted)] border border-[var(--border-subtle)]'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => handleScroll('right')}
          title="Scroll Right"
          className="p-1.5 rounded-lg bg-[var(--bg-surface-elevated)] hover:bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all shrink-0 btn-tactile opacity-60 hover:opacity-100"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
};
