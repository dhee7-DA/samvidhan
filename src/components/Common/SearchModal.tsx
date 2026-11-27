import React, { useState, useEffect, useMemo } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Search, X, ChevronRight } from 'lucide-react';
import { modalBackdropVariants, modalPanelVariants } from '../../lib/motionTokens';
import { useTheme } from '../../context/ThemeContext';
import { CONSTITUTION_PARTS } from '../../data/partsData';
import { DOCTRINES_DATA } from '../../data/doctrinesData';
import { DETAILED_CASE_LAWS_BY_TOPIC } from '../../data/caseLawsDetailedData';
import { SCHEDULES_DATA } from '../../data/schedulesData';
import { AMENDMENTS_DATA } from '../../data/amendmentsData';
import { ARTICLES_MASTER_INDEX } from '../../data/articlesMasterData';
import { LEGAL_DICTIONARY } from '../../data/legalDictionaryData';
import {
  MATH_FORMULA_PAIRS,
  CONSTITUTIONAL_MAJORITY_DATA,
  MNEMONIC_ENGINES,
  MASTER_CHEAT_CODES
} from '../../data/fastTrackHacksData';
import { PRECEDENT_LINEAGES } from '../../data/precedentLineagesData';
import { NAV_ITEMS } from '../../data/navigationData';

interface SearchResult {
  category: 'Workspace' | 'Article' | 'Part' | 'Amendment' | 'Doctrine' | 'Landmark Case' | 'Schedule' | 'Legal Lexicon' | 'Speed Hack' | 'Majority Type' | 'Mnemonic' | 'Cheat Code' | 'Knowledge Graph';
  title: string;
  subtitle: string;
  targetTab: string;
  targetId?: string;
}

export const SearchModal: React.FC = () => {
  const { searchOpen, setSearchOpen, setActiveTab, setSelectedPartId } = useTheme();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  // Keyboard shortcut listener (Ctrl+K, Cmd+K, or /)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open modal on Ctrl+K / Cmd+K or "/" (when not focused in an input/textarea)
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen(!searchOpen);
      } else if (
        e.key === '/' &&
        !searchOpen &&
        !(e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement)
      ) {
        e.preventDefault();
        setSearchOpen(true);
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

    // Search App Modules & Workspaces first for fast Cmd+K switching
    NAV_ITEMS.forEach((mod) => {
      if (
        mod.label.toLowerCase().includes(q) ||
        (mod.sub && mod.sub.toLowerCase().includes(q)) ||
        (mod.badge && mod.badge.toLowerCase().includes(q)) ||
        mod.id.toLowerCase().includes(q)
      ) {
        res.push({
          category: 'Workspace',
          title: mod.label,
          subtitle: `${mod.badge ? `${mod.badge} • ` : ''}${mod.sub || 'Jump directly to module'}`,
          targetTab: mod.id
        });
      }
    });

    // Search Articles Master Index (1 to 395)
    ARTICLES_MASTER_INDEX.forEach((art) => {
      if (
        art.articleNumber.toLowerCase() === q ||
        `article ${art.articleNumber}`.toLowerCase() === q ||
        art.title.toLowerCase().includes(q) ||
        art.conciseSummary.toLowerCase().includes(q)
      ) {
        res.push({
          category: 'Article',
          title: `Article ${art.articleNumber}: ${art.title}`,
          subtitle: `${art.part} • ${art.conciseSummary}`,
          targetTab: 'articles-master',
          targetId: art.articleNumber
        });
      }
    });

    // Search Amendments
    AMENDMENTS_DATA.forEach((amd) => {
      if (
        amd.title.toLowerCase().includes(q) ||
        amd.number.toString() === q ||
        amd.keyObjectives.toLowerCase().includes(q) ||
        amd.significance.toLowerCase().includes(q)
      ) {
        res.push({
          category: 'Amendment',
          title: `${amd.title} (${amd.year})`,
          subtitle: `PM/Era: ${amd.primeMinisterOrEra} • ${amd.keyObjectives.slice(0, 80)}...`,
          targetTab: 'amendments',
          targetId: `amd-${amd.number}`
        });
      }
    });

    // Search Parts
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

    // Search 118 Landmark Cases
    DETAILED_CASE_LAWS_BY_TOPIC.forEach((topic) => {
      topic.cases.forEach((caseItem) => {
        if (
          caseItem.caseName.toLowerCase().includes(q) ||
          caseItem.citation.toLowerCase().includes(q) ||
          caseItem.governingDoctrine.toLowerCase().includes(q) ||
          caseItem.presidingJudges.toLowerCase().includes(q) ||
          caseItem.ratioDecidendi.toLowerCase().includes(q)
        ) {
          res.push({
            category: 'Landmark Case',
            title: `${caseItem.caseName} (${caseItem.year})`,
            subtitle: `${caseItem.citation} • ${caseItem.benchStrength}-Judge Bench • ${caseItem.governingDoctrine}`,
            targetTab: 'judgments',
            targetId: caseItem.id
          });
        }
      });
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

    // Search Legal Dictionary (133+ Terms & Maxims)
    LEGAL_DICTIONARY.forEach((dict) => {
      if (
        dict.term.toLowerCase().includes(q) ||
        dict.aliases.some((a) => a.toLowerCase().includes(q)) ||
        dict.detailedMeaning.toLowerCase().includes(q)
      ) {
        res.push({
          category: 'Legal Lexicon',
          title: `${dict.term} (${dict.category})`,
          subtitle: `${dict.detailedMeaning.slice(0, 85)}...`,
          targetTab: 'dictionary',
          targetId: dict.term
        });
      }
    });

    // Search +89 / +90 Speed Hacks
    MATH_FORMULA_PAIRS.forEach((pair) => {
      if (
        String(pair.unionArticle) === q ||
        String(pair.stateArticle) === q ||
        pair.unionTitle.toLowerCase().includes(q) ||
        pair.stateTitle.toLowerCase().includes(q) ||
        pair.conceptualBridge.toLowerCase().includes(q) ||
        pair.rule.toLowerCase().includes(q)
      ) {
        res.push({
          category: 'Speed Hack',
          title: `Art. ${pair.unionArticle} ➔ Art. ${pair.stateArticle} (${pair.rule})`,
          subtitle: `${pair.unionTitle} vs ${pair.stateTitle}`,
          targetTab: 'fast-track',
          targetId: pair.id
        });
      }
    });

    // Search Constitutional Majority Types
    CONSTITUTIONAL_MAJORITY_DATA.forEach((maj) => {
      if (
        maj.name.toLowerCase().includes(q) ||
        maj.shortFormula.toLowerCase().includes(q) ||
        maj.scopeDescription.toLowerCase().includes(q) ||
        maj.keyUseCases.some((u) => u.provision.toLowerCase().includes(q) || u.article.toLowerCase().includes(q))
      ) {
        res.push({
          category: 'Majority Type',
          title: `${maj.name} (${maj.shortFormula})`,
          subtitle: `${maj.scopeDescription.slice(0, 85)}...`,
          targetTab: 'fast-track',
          targetId: maj.id
        });
      }
    });

    // Search Mnemonic Palaces
    MNEMONIC_ENGINES.forEach((m) => {
      if (
        m.title.toLowerCase().includes(q) ||
        m.catchphrase.toLowerCase().includes(q) ||
        m.articlesCovered.toLowerCase().includes(q) ||
        m.explanation.toLowerCase().includes(q)
      ) {
        res.push({
          category: 'Mnemonic',
          title: `${m.catchphrase} • ${m.title}`,
          subtitle: `${m.articlesCovered} • ${m.explanation.slice(0, 85)}...`,
          targetTab: 'fast-track',
          targetId: m.id
        });
      }
    });

    // Search Master Cheat Codes
    MASTER_CHEAT_CODES.forEach((code) => {
      if (
        code.title.toLowerCase().includes(q) ||
        code.formulaTag.toLowerCase().includes(q) ||
        code.summary.toLowerCase().includes(q) ||
        code.memoryHook.toLowerCase().includes(q)
      ) {
        res.push({
          category: 'Cheat Code',
          title: `${code.formulaTag}: ${code.title}`,
          subtitle: `${code.summary.slice(0, 85)}...`,
          targetTab: 'fast-track',
          targetId: code.id
        });
      }
    });

    // Search Knowledge Graphs (Precedent Lineage Trees)
    PRECEDENT_LINEAGES.forEach((lineage) => {
      if (
        lineage.title.toLowerCase().includes(q) ||
        lineage.articleAnchor.toLowerCase().includes(q) ||
        lineage.description.toLowerCase().includes(q) ||
        lineage.nodes.some((n) => n.caseName.toLowerCase().includes(q) || n.coreRatio.toLowerCase().includes(q))
      ) {
        res.push({
          category: 'Knowledge Graph',
          title: `Tree: ${lineage.title} (${lineage.articleAnchor})`,
          subtitle: `${lineage.nodes.length} Key Judgments • ${lineage.description.slice(0, 85)}...`,
          targetTab: 'lineage',
          targetId: lineage.id
        });
      }
    });

    return res.slice(0, 15);
  }, [query]);

  // Reset selected index when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [results]);

  const handleSelectResult = (item: SearchResult) => {
    setActiveTab(item.targetTab);
    if (item.targetTab === 'parts' && item.targetId) {
      setSelectedPartId(item.targetId);
    }
    if (item.targetTab === 'articles-master' && item.targetId) {
      try {
        localStorage.setItem('samvidhan_active_article', item.targetId);
        window.dispatchEvent(new CustomEvent('samvidhan_navigate_article', { detail: { articleId: item.targetId } }));
      } catch (e) {
        // ignore
      }
    }
    if (item.targetTab === 'judgments' && item.targetId) {
      try {
        localStorage.setItem('samvidhan_active_case', item.targetId);
        window.dispatchEvent(new CustomEvent('samvidhan_navigate_case', { detail: item.targetId }));
      } catch (e) {
        // ignore
      }
    }
    if (item.targetTab === 'doctrines' && item.targetId) {
      try {
        localStorage.setItem('samvidhan_active_doctrine', item.targetId);
        window.dispatchEvent(new CustomEvent('samvidhan_navigate_doctrine', { detail: { doctrineId: item.targetId } }));
      } catch (e) {
        // ignore
      }
    }
    if (item.targetTab === 'amendments' && item.targetId) {
      const numStr = item.targetId.replace(/\D/g, '');
      const parsed = parseInt(numStr, 10);
      try {
        localStorage.setItem('samvidhan_active_amendment', numStr);
        window.dispatchEvent(new CustomEvent('samvidhan_navigate_amendment', { detail: { amendmentNumber: parsed } }));
      } catch (e) {
        // ignore
      }
    }
    setSearchOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (results.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleSelectResult(results[selectedIndex]);
      }
    }
  };

  return (
    <AnimatePresence>
      {searchOpen && (
        <motion.div
          variants={modalBackdropVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          onClick={() => setSearchOpen(false)}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-start justify-center pt-16 sm:pt-20 p-4"
        >
          <motion.div
            variants={modalPanelVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-strong)] shadow-2xl overflow-hidden flex flex-col"
          >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 p-4 border-b border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]">
          <Search className="w-5 h-5 text-[var(--accent)] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleInputKeyDown}
            placeholder="Search articles (1–395), amendments (1–106), doctrines, writs, cases..."
            className="w-full bg-transparent border-none text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:outline-none font-mono"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)]">
              <X className="w-4 h-4" />
            </button>
          )}
          <div className="flex items-center gap-1.5 shrink-0">
            <kbd className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-base)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
              ↑↓ Navigate
            </kbd>
            <kbd className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-base)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
              ↵ Select
            </kbd>
            <kbd className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-base)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
              ESC
            </kbd>
          </div>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 divide-y divide-[var(--border-subtle)]">
          {query.trim() === '' ? (
            <div className="p-6 text-center text-sm text-[var(--text-muted)] space-y-5">
              <div className="space-y-2">
                <p className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
                  Quick Jump Workspaces
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {[
                    { id: 'readiness-index', label: 'Readiness Heatmap' },
                    { id: 'arcade', label: 'Constitutional Arcade' },
                    { id: 'articles-master', label: 'Articles 1–395' },
                    { id: 'bootcamp', label: '15-Day Bootcamp' },
                    { id: 'mains-lab', label: 'Mains Writing Lab' },
                    { id: 'flashcards', label: 'Flashcards (SRS)' }
                  ].map((mod) => (
                    <button
                      key={mod.id}
                      onClick={() => {
                        setActiveTab(mod.id);
                        setSearchOpen(false);
                      }}
                      className="text-xs px-3 py-1.5 rounded-xl bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] hover:border-[var(--accent)] border border-[var(--border-subtle)] btn-tactile cursor-pointer"
                    >
                      {mod.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-3 border-t border-[var(--border-subtle)]">
                <p className="font-mono text-[11px] uppercase tracking-wider">Popular Constitutional Queries</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {['Article 21', 'Basic Structure', '42nd Amendment', 'Maneka Gandhi', 'Article 32', 'Preamble'].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="text-xs font-mono px-3 py-1.5 rounded-xl bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] border border-[var(--border-subtle)] btn-tactile cursor-pointer"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-sm text-[var(--text-muted)] font-mono">
              No matching constitutional items found for "{query}".
            </div>
          ) : (
            results.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={idx}
                  onClick={() => handleSelectResult(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`p-3 rounded-2xl cursor-pointer flex items-center justify-between transition-all group ${
                    isSelected
                      ? 'bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] shadow-sm'
                      : 'border border-transparent hover:bg-[var(--bg-surface-elevated)]'
                  }`}
                >
                  <div className="flex flex-col gap-1 min-w-0 pr-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[9.5px] font-mono px-2 py-0.5 rounded-full bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)] font-semibold shrink-0">
                        {item.category}
                      </span>
                      <span className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] truncate">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] line-clamp-1 font-mono">
                      {item.subtitle}
                    </p>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-[var(--accent)] translate-x-1' : 'text-[var(--text-muted)]'}`} />
                </div>
              );
            })
          )}
          </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
