import React, { useState, useRef, useEffect, useMemo } from 'react';
import { ChevronDown, ChevronRight, Search, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { NAV_ITEMS, NAV_CATEGORIES, type NavCategory } from '../../data/navigationData';

export const Sidebar: React.FC = () => {
  const { activeTab, setActiveTab, sidebarCollapsed } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [railFilter, setRailFilter] = useState('');
  const [collapsedCategories, setCollapsedCategories] = useState<Record<NavCategory, boolean>>({
    start: false,
    study: false,
    cases: false,
    prelims: false,
    mains: false
  });
  const menuRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  const currentItem = NAV_ITEMS.find((item) => item.id === activeTab) || NAV_ITEMS[0];

  // Auto-expand the category of the newly selected module and scroll active item into view
  useEffect(() => {
    if (currentItem) {
      setCollapsedCategories((prev) =>
        prev[currentItem.category] ? { ...prev, [currentItem.category]: false } : prev
      );
    }
    const timer = setTimeout(() => {
      activeTabRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }, 60);
    return () => clearTimeout(timer);
  }, [activeTab, currentItem?.category]);

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

  const filteredItems = useMemo(() => {
    const q = railFilter.trim().toLowerCase();
    if (!q) return NAV_ITEMS;
    return NAV_ITEMS.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        (item.sub && item.sub.toLowerCase().includes(q)) ||
        (item.badge && item.badge.toLowerCase().includes(q))
    );
  }, [railFilter]);

  const toggleCategory = (cat: NavCategory) => {
    setCollapsedCategories((prev) => ({ ...prev, [cat]: !prev[cat] }));
  };

  return (
    <>
      {/* =========================================================================
          MOBILE COMPACT SELECTOR (< 768px)
          ========================================================================= */}
      <nav className="md:hidden w-full border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] py-2.5 px-4 transition-colors relative z-30 shrink-0">
        <div ref={menuRef} className="max-w-7xl mx-auto flex flex-col gap-2 relative">
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-xs text-[var(--text-primary)] transition-[border-color,background-color] duration-150 btn-tactile cursor-pointer"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="text-[var(--accent)] shrink-0">{currentItem.icon}</span>
              <span className="font-semibold truncate">{currentItem.label}</span>
              {currentItem.badge && (
                <span className="text-[10px] px-1.5 py-0.5 rounded font-mono bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)] shrink-0">
                  {currentItem.badge}
                </span>
              )}
              <span className="text-[11px] text-[var(--text-muted)] truncate hidden sm:inline">
                — {currentItem.sub}
              </span>
            </div>
            <div className="flex items-center gap-2 text-[var(--text-muted)] shrink-0 ml-2">
              <span className="text-[11px] font-mono hidden xs:inline">{NAV_ITEMS.length} modules</span>
              <div
                className={`p-1 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] transition-transform duration-200 ${
                  isMenuOpen ? 'rotate-180 text-[var(--accent)] border-[var(--accent)]' : ''
                }`}
              >
                <ChevronDown className="w-3.5 h-3.5" />
              </div>
            </div>
          </button>

          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 z-50 p-4 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] shadow-2xl space-y-4 animate-fadeIn max-h-[75vh] overflow-y-auto">
              <div className="pb-2.5 border-b border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-muted)]">
                <span className="font-semibold text-[var(--text-primary)] tracking-tight">
                  Constitutional Workbench ({NAV_ITEMS.length} Modules)
                </span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-[var(--text-primary)] px-2 py-1 rounded-lg hover:bg-[var(--bg-base)] transition-colors text-xs cursor-pointer"
                >
                  Close
                </button>
              </div>

              {NAV_CATEGORIES.map((cat) => {
                const items = NAV_ITEMS.filter((i) => i.category === cat.id);
                return (
                  <div key={cat.id} className="space-y-2">
                    <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[var(--text-muted)] px-1">
                      {cat.label}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                      {items.map((item) => {
                        const isActive = activeTab === item.id;
                        return (
                          <button
                            key={item.id}
                            onClick={() => {
                              setActiveTab(item.id);
                              setIsMenuOpen(false);
                            }}
                            className={`flex items-start gap-2.5 p-2.5 rounded-xl text-xs text-left transition-[transform,background-color,border-color] duration-150 btn-tactile cursor-pointer ${
                              isActive
                                ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-semibold shadow-sm'
                                : 'bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                            }`}
                          >
                            <span className={`mt-0.5 shrink-0 ${isActive ? 'text-inherit' : 'text-[var(--text-muted)]'}`}>
                              {item.icon}
                            </span>
                            <div className="flex flex-col min-w-0 flex-1">
                              <div className="flex items-center justify-between gap-1">
                                <span className="truncate font-medium">{item.label}</span>
                                {item.badge && (
                                  <span
                                    className={`text-[9px] font-mono px-1.5 py-0.2 rounded shrink-0 ${
                                      isActive
                                        ? 'bg-black/15 text-inherit'
                                        : 'bg-[var(--bg-surface)] text-[var(--text-muted)] border border-[var(--border-subtle)]'
                                    }`}
                                  >
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
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </nav>

      {/* =========================================================================
          CATEGORIZED LEFT WORKBENCH RAIL (Split-screen & Desktop: 768px+)
          ========================================================================= */}
      <aside
        aria-label="Primary Workbench Navigation"
        className={`hidden md:flex flex-col shrink-0 border-r border-[var(--border-subtle)] bg-[var(--bg-surface)] sticky top-14 h-[calc(100vh-3.5rem)] transition-[width] duration-200 ease-out select-none z-20 ${
          sidebarCollapsed ? 'w-[64px]' : 'w-52 lg:w-56 xl:w-64'
        }`}
      >
        {/* Rail Quick Filter (Expanded Only) */}
        {!sidebarCollapsed && (
          <div className="p-2.5 border-b border-[var(--border-subtle)]">
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
              <input
                type="text"
                value={railFilter}
                onChange={(e) => setRailFilter(e.target.value)}
                placeholder="Filter modules..."
                className="w-full h-8 pl-8 pr-7 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--border-strong)] transition-colors"
              />
              {railFilter && (
                <button
                  onClick={() => setRailFilter('')}
                  aria-label="Clear filter"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Categorized Scrollable Track */}
        <div className="flex-1 overflow-y-auto px-2 py-2.5 space-y-3.5">
          {NAV_CATEGORIES.map((cat, catIdx) => {
            const catItems = filteredItems.filter((item) => item.category === cat.id);
            if (catItems.length === 0) return null;

            const isGroupCollapsed = railFilter.trim() === '' && collapsedCategories[cat.id];

            if (sidebarCollapsed) {
              return (
                <div key={cat.id} className="space-y-1 flex flex-col items-center">
                  {catIdx > 0 && <div className="w-6 h-px bg-[var(--border-subtle)] my-1" />}
                  {catItems.map((item) => {
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        ref={isActive ? activeTabRef : undefined}
                        onClick={() => setActiveTab(item.id)}
                        title={`${item.label}${item.badge ? ` • ${item.badge}` : ''}`}
                        aria-label={item.label}
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-[transform,background-color,border-color,color] duration-150 relative cursor-pointer ${
                          isActive
                            ? 'bg-[var(--bg-surface-elevated)] text-[var(--accent)] border border-[var(--border-strong)] surface-specular'
                            : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-base)] border border-transparent'
                        }`}
                      >
                        {isActive && (
                          <span className="absolute left-0 top-2 bottom-2 w-0.5 rounded-r bg-[var(--accent)]" />
                        )}
                        {item.icon}
                      </button>
                    );
                  })}
                </div>
              );
            }

            return (
              <div key={cat.id} className="space-y-1">
                <button
                  onClick={() => toggleCategory(cat.id)}
                  className="w-full flex items-center justify-between px-2 py-1 text-[10px] font-mono font-semibold uppercase tracking-wider text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors cursor-pointer"
                >
                  <span className="truncate whitespace-nowrap">{cat.label}</span>
                  <ChevronRight
                    className={`w-3 h-3 shrink-0 transition-transform duration-150 ${
                      isGroupCollapsed ? '' : 'rotate-90'
                    }`}
                  />
                </button>

                {!isGroupCollapsed && (
                  <div className="space-y-0.5">
                    {catItems.map((item) => {
                      const isActive = activeTab === item.id;
                      return (
                        <button
                          key={item.id}
                          ref={isActive ? activeTabRef : undefined}
                          onClick={() => setActiveTab(item.id)}
                          title={item.sub ? `${item.label} — ${item.sub}` : item.label}
                          className={`w-full flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg text-[12px] transition-[background-color,border-color,color] duration-150 relative cursor-pointer ${
                            isActive
                              ? 'bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] font-semibold border border-[var(--border-subtle)] surface-specular'
                              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-base)] border border-transparent'
                          }`}
                        >
                          {isActive && (
                            <span className="absolute left-0 top-1.5 bottom-1.5 w-0.5 rounded-r bg-[var(--accent)]" />
                          )}
                          <div className="flex items-center gap-2 min-w-0">
                            <span className={`shrink-0 ${isActive ? 'text-[var(--accent)]' : 'text-[var(--text-muted)]'}`}>
                              {item.icon}
                            </span>
                            <span className="truncate">{item.label}</span>
                          </div>
                          {item.badge && (
                            <span
                              className={`hidden xl:inline-block text-[9px] font-mono px-1.5 py-0.2 rounded shrink-0 ${
                                isActive
                                  ? 'bg-[var(--bg-base)] text-[var(--text-primary)] border border-[var(--border-subtle)]'
                                  : 'text-[var(--text-muted)]'
                              }`}
                            >
                              {item.badge}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Shortcuts Hint (Expanded Only) */}
        {!sidebarCollapsed && (
          <div className="p-2.5 border-t border-[var(--border-subtle)] flex items-center justify-between text-[10px] font-mono text-[var(--text-muted)]">
            <span>Quick Switch</span>
            <kbd className="px-1.5 py-0.5 rounded bg-[var(--bg-base)] border border-[var(--border-subtle)]">
              ⌘K
            </kbd>
          </div>
        )}
      </aside>
    </>
  );
};
