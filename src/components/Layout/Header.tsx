import React from 'react';
import { Search, Bookmark, Compass, Sparkles, BookOpen, Layers } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { ThemeSelector } from './ThemeSelector';
import { FontSelector } from './FontSelector';

export const Header: React.FC = () => {
  const {
    setSearchOpen,
    bookmarkedArticles,
    activeTab,
    setActiveTab,
    setDictionaryModalOpen
  } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border-subtle)] bg-[var(--bg-base)]/80 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <div
          onClick={() => setActiveTab('overview')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent)] shadow-sm group-hover:scale-105 transition-transform">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold tracking-tight text-base sm:text-lg text-[var(--text-primary)]">
                SAMVIDHAN
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
                LEX MAGNA
              </span>
            </div>
            <p className="text-[10px] font-mono text-[var(--text-muted)] hidden xl:block">
              Constitution of India • Interactive Mastery Hub
            </p>
          </div>
        </div>

        {/* Search trigger button */}
        <button
          onClick={() => setSearchOpen(true)}
          className="flex-1 max-w-xs hidden md:flex items-center justify-between px-3 py-1.5 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-muted)] border border-[var(--border-subtle)] transition-all font-mono text-xs min-w-0"
        >
          <div className="flex items-center gap-2 min-w-0">
            <Search className="w-3.5 h-3.5 text-[var(--text-secondary)] shrink-0" />
            <span className="truncate whitespace-nowrap text-[var(--text-secondary)]">Search law, articles, cases...</span>
          </div>
          <kbd className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--bg-base)] border border-[var(--border-subtle)] shrink-0 hidden lg:inline">
            ⌘K
          </kbd>
        </button>

        {/* Right Controls: Font, Theme, Bookmarks */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <button
            onClick={() => setSearchOpen(true)}
            className="md:hidden p-2 rounded-xl bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
          >
            <Search className="w-4 h-4" />
          </button>

          <div className="hidden sm:block">
            <FontSelector />
          </div>

          <button
            onClick={() => setDictionaryModalOpen(true)}
            title="Universal Legal & English Dictionary (Alt + D)"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] text-xs font-mono transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span className="hidden md:inline">Dictionary</span>
            <kbd className="text-[9px] px-1 py-0.2 rounded bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)] hidden xl:inline">
              Alt+D
            </kbd>
          </button>

          <ThemeSelector />

          <button
            onClick={() => setActiveTab('parts')}
            title="Saved Articles"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] text-xs font-mono transition-colors"
          >
            <Bookmark className="w-3.5 h-3.5 text-[var(--gold)]" />
            <span className="hidden sm:inline">Saved</span>
            <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)]">
              {bookmarkedArticles.length}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
