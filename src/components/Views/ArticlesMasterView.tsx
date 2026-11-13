import React, { useState } from 'react';
import { BookOpen, Search, Bookmark, ChevronRight, Check, Sparkles } from 'lucide-react';
import { ARTICLES_MASTER_INDEX, type ArticleMasterEntry } from '../../data/articlesMasterData';
import { useTheme } from '../../context/ThemeContext';

export const ArticlesMasterView: React.FC = () => {
  const { setActiveTab, setSelectedPartId, bookmarkedArticles, toggleBookmark } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Rights',
    'DPSPs & Duties',
    'Union Executive',
    'Parliament',
    'Union Judiciary',
    'States',
    'Federal Relations',
    'Finance & Property',
    'Services',
    'Elections',
    'Emergency',
    'Amendment',
    'Special & Temporary'
  ];

  const filtered = ARTICLES_MASTER_INDEX.filter((a) => {
    if (activeCategory !== 'All' && a.category !== activeCategory) return false;
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      return (
        a.articleNumber.toLowerCase().includes(q) ||
        a.title.toLowerCase().includes(q) ||
        a.conciseSummary.toLowerCase().includes(q) ||
        a.part.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const getPartId = (partName: string) => {
    if (partName === 'Part I') return 'part-1';
    if (partName === 'Part II') return 'part-2';
    if (partName === 'Part III') return 'part-3';
    if (partName === 'Part IV') return 'part-4';
    if (partName === 'Part IV-A') return 'part-4a';
    if (partName === 'Part V') return 'part-5';
    if (partName === 'Part VI') return 'part-6';
    if (partName === 'Part VII') return 'part-7';
    if (partName === 'Part VIII') return 'part-8';
    if (partName === 'Part IX') return 'part-9';
    if (partName === 'Part IX-A') return 'part-9a';
    if (partName === 'Part IX-B') return 'part-9b';
    if (partName === 'Part X') return 'part-10';
    if (partName === 'Part XI') return 'part-11';
    if (partName === 'Part XII') return 'part-12';
    if (partName === 'Part XIII') return 'part-13';
    if (partName === 'Part XIV') return 'part-14';
    if (partName === 'Part XIV-A') return 'part-14a';
    if (partName === 'Part XV') return 'part-15';
    if (partName === 'Part XVI') return 'part-16';
    if (partName === 'Part XVII') return 'part-17';
    if (partName === 'Part XVIII') return 'part-18';
    if (partName === 'Part XIX') return 'part-19';
    if (partName === 'Part XX') return 'part-20';
    if (partName === 'Part XXI') return 'part-21';
    if (partName === 'Part XXII') return 'part-22';
    return 'part-3';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <BookOpen className="w-5 h-5 text-[var(--accent)]" />
            <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Comprehensive Articles Directory (1 to 395)
            </h1>
            <span className="text-xs px-2 py-0.5 rounded font-mono bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
              Master Index
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            Search, filter, and explore all constitutional articles across all 25 Parts of the Indian Constitution.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col gap-3 p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)]">
          <Search className="w-4 h-4 text-[var(--text-muted)] shrink-0" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by article number (e.g. 21, 142, 324, 368) or keyword..."
            className="w-full bg-transparent border-none text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none font-mono"
          />
          {searchTerm && (
            <button onClick={() => setSearchTerm('')} className="text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)]">
              CLEAR
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                activeCategory === cat
                  ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold'
                  : 'bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((art) => {
          const artLabel = `Art ${art.articleNumber}`;
          const isBookmarked = bookmarkedArticles.includes(artLabel);

          return (
            <div
              key={art.articleNumber}
              className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded font-mono text-xs font-bold bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
                      Article {art.articleNumber}
                    </span>
                    <span className="text-[10px] font-mono text-[var(--text-muted)]">
                      {art.part}
                    </span>
                  </div>

                  <button
                    onClick={() => toggleBookmark(artLabel)}
                    title={isBookmarked ? 'Bookmarked' : 'Add bookmark'}
                    className={`p-1 rounded-lg border transition-colors ${
                      isBookmarked
                        ? 'bg-[var(--gold)]/10 border-[var(--gold)]/30 text-[var(--gold)]'
                        : 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    <Bookmark className="w-3.5 h-3.5 fill-current" />
                  </button>
                </div>

                <h4 className="text-xs font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent)] transition-colors">
                  {art.title}
                </h4>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {art.conciseSummary}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-[var(--border-subtle)] flex items-center justify-between text-[10px] font-mono">
                <span className="text-[var(--text-muted)]">{art.category}</span>
                <button
                  onClick={() => {
                    setSelectedPartId(getPartId(art.part));
                    setActiveTab('parts');
                  }}
                  className="flex items-center gap-0.5 text-[var(--accent)] hover:underline"
                >
                  <span>Open {art.part}</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
