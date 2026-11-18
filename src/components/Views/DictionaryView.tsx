import React, { useState, useMemo } from 'react';
import { BookOpen, Search, Lightbulb, Scale, Filter, X, BrainCircuit, Star } from 'lucide-react';
import { LEGAL_DICTIONARY } from '../../data/legalDictionaryData';
import { useTheme } from '../../context/ThemeContext';
import { getCardIdForDictionaryTerm } from '../../services/flashcardService';

export const DictionaryView: React.FC = () => {
  const { launchFlashcardDeck, pinnedFlashcardIds, togglePinFlashcard } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLetter, setSelectedLetter] = useState<string>('All');

  const categories = [
    'All',
    'Criminal Law',
    'Latin Maxims',
    'Constitutional Law',
    'Parliamentary & Governance'
  ];

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const filteredTerms = useMemo(() => {
    return LEGAL_DICTIONARY.filter((item) => {
      // Category filter
      if (selectedCategory !== 'All' && item.category !== selectedCategory) return false;

      // Letter filter
      if (selectedLetter !== 'All' && !item.term.toUpperCase().startsWith(selectedLetter)) return false;

      // Search term
      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase();
        const matchesTerm = item.term.toLowerCase().includes(q);
        const matchesAliases = item.aliases.some((a) => a.toLowerCase().includes(q));
        const matchesMeaning = item.detailedMeaning.toLowerCase().includes(q);
        const matchesExample = item.easyExample.toLowerCase().includes(q);
        const matchesCategory = item.category.toLowerCase().includes(q);
        return matchesTerm || matchesAliases || matchesMeaning || matchesExample || matchesCategory;
      }

      return true;
    });
  }, [searchTerm, selectedCategory, selectedLetter]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-8 animate-fadeIn">
      {/* Header Section */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] uppercase tracking-wider">
          <BookOpen className="w-4 h-4" />
          <span>Interactive Legal Lexicon & Hover Engine</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
              Constitutional & Criminal Legal Dictionary
            </h1>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              Comprehensive legal maxims, Latin phrases, criminal procedure terms, and easy-to-understand real-world examples.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap self-start sm:self-auto shrink-0">
            <div className="px-3.5 py-1.5 rounded-xl bg-[var(--badge-bg)] border border-[var(--badge-border)] text-xs font-mono font-bold text-[var(--accent)]">
              {filteredTerms.length} of {LEGAL_DICTIONARY.length} Terms
            </div>
            <button
              onClick={() => launchFlashcardDeck('maxims', selectedCategory === 'All' ? 'all' : selectedCategory)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[var(--accent)] text-[var(--accent-contrast)] hover:opacity-90 font-mono text-xs font-bold transition-all shadow-sm"
            >
              <BrainCircuit className="w-3.5 h-3.5" />
              <span>Drill in SRS Flashcards</span>
            </button>
          </div>
        </div>
      </div>

      {/* Search and Filters Bar */}
      <div className="flex flex-col gap-4 p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm">
        {/* Search Input */}
        <div className="relative w-full">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search any legal word, Latin phrase, or concept (e.g. cognizable, double jeopardy, ratio decidendi)..."
            className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-all font-mono"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-[var(--border-subtle)]/60">
          <span className="text-xs font-mono text-[var(--text-muted)] flex items-center gap-1.5 mr-1">
            <Filter className="w-3 h-3" /> Categories:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                selectedCategory === cat
                  ? 'bg-[var(--accent)] text-white font-bold'
                  : 'bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Alphabet Bar */}
        <div className="flex flex-wrap items-center gap-1 pt-1 border-t border-[var(--border-subtle)]/60 overflow-x-auto">
          <button
            onClick={() => setSelectedLetter('All')}
            className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
              selectedLetter === 'All'
                ? 'bg-[var(--gold)] text-black font-bold'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            ALL
          </button>
          {alphabet.map((letter) => (
            <button
              key={letter}
              onClick={() => setSelectedLetter(letter)}
              className={`w-6 h-6 rounded flex items-center justify-center text-[11px] font-mono transition-colors ${
                selectedLetter === letter
                  ? 'bg-[var(--gold)] text-black font-bold'
                  : 'text-[var(--text-secondary)] hover:bg-[var(--bg-base)] hover:text-[var(--text-primary)]'
              }`}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      {/* Terms Grid */}
      {filteredTerms.length === 0 ? (
        <div className="p-12 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-center flex flex-col items-center gap-3">
          <BookOpen className="w-8 h-8 text-[var(--text-muted)] opacity-50" />
          <h3 className="text-base font-bold text-[var(--text-primary)]">No matching legal terms found</h3>
          <p className="text-xs text-[var(--text-secondary)] max-w-sm">
            Try adjusting your search query or reset category filters.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All');
              setSelectedLetter('All');
            }}
            className="mt-2 px-4 py-1.5 rounded-lg text-xs font-mono bg-[var(--accent)] text-white font-semibold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredTerms.map((termItem) => (
            <div
              key={termItem.term}
              className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all flex flex-col justify-between gap-4 shadow-sm"
            >
              <div className="flex flex-col gap-3">
                {/* Title & Category Badge */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[var(--accent)] uppercase tracking-wider">
                      {termItem.category}
                    </span>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] leading-tight mt-0.5">
                      {termItem.term}
                    </h3>
                  </div>

                  {termItem.phoneticOrLiteral && (
                    <span className="text-[10px] font-mono text-[var(--text-muted)] italic text-right max-w-[45%] shrink-0">
                      {termItem.phoneticOrLiteral}
                    </span>
                  )}
                </div>

                {/* Detailed Meaning */}
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono font-bold text-[var(--text-secondary)] uppercase tracking-wider flex items-center gap-1.5">
                    <BookOpen className="w-3 h-3 text-[var(--accent)]" /> Meaning
                  </span>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {termItem.detailedMeaning}
                  </p>
                </div>

                {/* Easy Everyday / Courtroom Example Card */}
                <div className="p-3.5 rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/25 flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono font-bold text-[var(--gold)] uppercase tracking-wider flex items-center gap-1.5">
                    <Lightbulb className="w-3.5 h-3.5 fill-current" /> Easy-To-Understand Example
                  </span>
                  <p className="text-xs text-[var(--text-primary)] font-medium leading-relaxed">
                    {termItem.easyExample}
                  </p>
                </div>
              </div>

              {/* Footer: Statutory Reference, Related Articles & SRS Actions */}
              <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div className="flex flex-col gap-1.5 min-w-0">
                  {termItem.statutoryOrCaseRef && (
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-[var(--text-muted)]">
                      <Scale className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{termItem.statutoryOrCaseRef}</span>
                    </div>
                  )}

                  {termItem.relatedArticles && termItem.relatedArticles.length > 0 && (
                    <div className="flex items-center gap-1 flex-wrap">
                      {termItem.relatedArticles.map((art) => (
                        <span
                          key={art}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                        >
                          {art}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-center">
                  <button
                    onClick={() => togglePinFlashcard(getCardIdForDictionaryTerm(termItem.term))}
                    title={pinnedFlashcardIds.includes(getCardIdForDictionaryTerm(termItem.term)) ? 'Pinned in SRS' : 'Pin term to SRS Flashcards'}
                    className={`p-1.5 rounded-lg border transition-colors ${
                      pinnedFlashcardIds.includes(getCardIdForDictionaryTerm(termItem.term))
                        ? 'bg-amber-500/15 border-amber-500/40 text-amber-400'
                        : 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-amber-400'
                    }`}
                  >
                    <Star className={`w-3.5 h-3.5 ${pinnedFlashcardIds.includes(getCardIdForDictionaryTerm(termItem.term)) ? 'fill-current' : ''}`} />
                  </button>
                  <button
                    onClick={() =>
                      launchFlashcardDeck('maxims', termItem.category, getCardIdForDictionaryTerm(termItem.term))
                    }
                    title={`Study "${termItem.term}" in Leitner SRS Flashcards`}
                    className="flex items-center gap-1 px-2 py-1 rounded-lg border border-[var(--badge-border)] bg-[var(--badge-bg)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)] text-[11px] font-mono font-bold transition-colors"
                  >
                    <BrainCircuit className="w-3.5 h-3.5" />
                    <span>SRS</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
