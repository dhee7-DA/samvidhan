import React from 'react';
import { Search, Bookmark, Compass, Sparkles, BookOpen, Layers } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { ThemeSelector } from './ThemeSelector';

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
          className="flex items-center gap-3 cursor-pointer group btn-tactile select-none"
        >
          <div className="w-9 h-9 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent)] shadow-sm group-hover:scale-110 group-hover:border-[var(--accent)] transition-all duration-300">
            <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500 ease-out" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold tracking-tight text-base sm:text-lg text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                SAMVIDHAN
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)] group-hover:border-[var(--accent)] transition-colors">
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
          className="flex-1 max-w-sm lg:max-w-md hidden md:flex items-center justify-between px-3.5 py-1.5 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-muted)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all font-mono text-xs min-w-0 btn-tactile shadow-sm hover:shadow"
        >
          <div className="flex items-center gap-2 min-w-0">
            <Search className="w-3.5 h-3.5 text-[var(--text-secondary)] shrink-0" />
            <span className="truncate whitespace-nowrap text-[var(--text-secondary)]">Search law, articles, cases, doctrines...</span>
          </div>
          <kbd className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--bg-base)] border border-[var(--border-subtle)] shrink-0 hidden lg:inline font-mono">
            ⌘K
          </kbd>
        </button>

        {/* Right Controls: Dictionary, Theme (Color Icon Only), Saved (Icon Only) */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <button
            onClick={() => setSearchOpen(true)}
            className="md:hidden p-2 rounded-xl bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)] btn-tactile"
          >
            <Search className="w-4 h-4" />
          </button>

          <button
            onClick={() => setDictionaryModalOpen(true)}
            title="Universal Legal & English Dictionary (Alt + D)"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-xs font-mono transition-all btn-tactile shadow-sm"
          >
            <BookOpen className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span className="hidden md:inline">Dictionary</span>
            <kbd className="text-[9px] px-1 py-0.2 rounded bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)] hidden xl:inline">
              Alt+D
            </kbd>
          </button>

          {/* Theme option with just colour icon only, small and compact */}
          <ThemeSelector />

          {/* Save option with just icon only */}
          <button
            onClick={() => setActiveTab('parts')}
            title={`Saved Articles (${bookmarkedArticles.length})`}
            className="w-9 h-9 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] flex items-center justify-center transition-all btn-tactile shadow-sm shrink-0 relative"
          >
            <Bookmark className="w-4 h-4 text-[var(--gold)]" />
            {bookmarkedArticles.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[var(--accent)] text-[var(--accent-contrast)] text-[9px] font-bold font-mono flex items-center justify-center shadow-xs">
                {bookmarkedArticles.length}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
