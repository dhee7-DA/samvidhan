import React, { useState, useEffect, useMemo } from 'react';
import { Search, X, BookOpen, Scale, Award, Calendar, Layers, ChevronRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { CONSTITUTION_PARTS } from '../../data/partsData';
import { DOCTRINES_DATA } from '../../data/doctrinesData';
import { LANDMARK_JUDGMENTS } from '../../data/judgmentsData';
import { SCHEDULES_DATA } from '../../data/schedulesData';

interface SearchResult {
  category: 'Article' | 'Part' | 'Doctrine' | 'Landmark Case' | 'Schedule' | 'SVG Diagram';
  title: string;
  subtitle: string;
  targetTab: string;
  targetId?: string;
}

export const SearchModal: React.FC = () => {
  const { searchOpen, setSearchOpen, setActiveTab, setSelectedPartId, setSelectedSvgId } = useTheme();
  const [query, setQuery] = useState('');

  // Keyboard shortcut listener (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen(!searchOpen);
      }
      if (e.key === 'Escape' && searchOpen) {
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchOpen, setSearchOpen]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    const res: SearchResult[] = [];

    // Search Parts & Articles
    CONSTITUTION_PARTS.forEach((part) => {
      if (part.title.toLowerCase().includes(q) || part.description.toLowerCase().includes(q) || part.partNumber.toLowerCase().includes(q)) {
        res.push({
          category: 'Part',
          title: `${part.partNumber}: ${part.title}`,
          subtitle: `${part.articlesRange} • ${part.description.slice(0, 80)}...`,
          targetTab: 'parts',
          targetId: part.id
        });
      }

      part.articles.forEach((art) => {
        if (
          art.number.toLowerCase().includes(q) ||
          art.title.toLowerCase().includes(q) ||
          art.summary.toLowerCase().includes(q)
        ) {
          res.push({
            category: 'Article',
            title: `Article ${art.number}: ${art.title}`,
            subtitle: `${part.partNumber} • ${art.summary.slice(0, 80)}...`,
            targetTab: 'parts',
            targetId: part.id
          });
        }
      });
    });

    // Search Doctrines
    DOCTRINES_DATA.forEach((doc) => {
      if (doc.name.toLowerCase().includes(q) || doc.essence.toLowerCase().includes(q) || doc.leadCase.toLowerCase().includes(q)) {
        res.push({
          category: 'Doctrine',
          title: doc.name,
          subtitle: `Lead Case: ${doc.leadCase} • ${doc.essence.slice(0, 80)}...`,
          targetTab: 'doctrines',
          targetId: doc.id
        });
      }
    });

    // Search Landmark Judgments
    LANDMARK_JUDGMENTS.forEach((caseItem) => {
      if (
        caseItem.caseName.toLowerCase().includes(q) ||
        caseItem.coreIssue.toLowerCase().includes(q) ||
        caseItem.verdict.toLowerCase().includes(q)
      ) {
        res.push({
          category: 'Landmark Case',
          title: `${caseItem.caseName} (${caseItem.year})`,
          subtitle: `${caseItem.citation} • ${caseItem.coreIssue.slice(0, 80)}...`,
          targetTab: 'judgments',
          targetId: caseItem.id
        });
      }
    });

    // Search Schedules
    SCHEDULES_DATA.forEach((sch) => {
      if (
        sch.roman.toLowerCase().includes(q) ||
        sch.title.toLowerCase().includes(q) ||
        sch.subject.toLowerCase().includes(q) ||
        sch.mnemonicKeyword.toLowerCase().includes(q)
      ) {
        res.push({
          category: 'Schedule',
          title: `${sch.roman}: ${sch.title}`,
          subtitle: `Mnemonic: ${sch.mnemonicKeyword} • ${sch.subject.slice(0, 80)}...`,
          targetTab: 'schedules',
          targetId: `schedule-${sch.number}`
        });
      }
    });

    return res.slice(0, 12);
  }, [query]);

  if (!searchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 p-4 animate-fadeIn">
      <div className="w-full max-w-2xl rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-strong)] shadow-2xl overflow-hidden flex flex-col">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 p-4 border-b border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]">
          <Search className="w-5 h-5 text-[var(--accent)] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles (e.g. Art 21), doctrines, landmark judgments, schedules..."
            className="w-full bg-transparent border-none text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:outline-none font-mono"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)]">
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-base)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 divide-y divide-[var(--border-subtle)]">
          {query.trim() === '' ? (
            <div className="p-8 text-center text-sm text-[var(--text-muted)]">
              <p className="font-mono">Type any constitutional concept, article number, or case name...</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {['Article 21', 'Basic Structure', 'Writ of Habeas Corpus', 'Money Bill', 'Preamble', 'Tenth Schedule'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-sm text-[var(--text-muted)] font-mono">
              No matching constitutional items found for "{query}".
            </div>
          ) : (
            results.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setActiveTab(item.targetTab);
                  if (item.targetTab === 'parts' && item.targetId) {
                    setSelectedPartId(item.targetId);
                  }
                  setSearchOpen(false);
                }}
                className="p-3 rounded-lg hover:bg-[var(--bg-surface-elevated)] cursor-pointer flex items-center justify-between transition-colors group"
              >
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
                      {item.category}
                    </span>
                    <span className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)]">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] line-clamp-1">
                    {item.subtitle}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent)] shrink-0 transition-transform group-hover:translate-x-0.5" />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
