import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  X,
  BookOpen,
  Volume2,
  Lightbulb,
  Scale,
  Sparkles,
  ExternalLink,
  Copy,
  Check,
  ArrowRight,
  HelpCircle,
  BrainCircuit
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { lookupUniversalWord, cleanLookupWord, type DictionaryDefinition } from '../../services/dictionaryService';
import { LEGAL_DICTIONARY } from '../../data/legalDictionaryData';
import { FORENSIC_VOCABULARY } from '../../data/forensicVocabularyData';
import {
  createCustomFlashcard,
  getCardIdForDictionaryTerm,
  getStoredFlashcards
} from '../../services/flashcardService';

const POPULAR_QUICK_TERMS = [
  'promulgate',
  'stare decisis',
  'per incuriam',
  'habeas corpus',
  'repugnancy',
  'cognizable offence',
  'default bail',
  'sub silentio',
  'manifest arbitrariness',
  'quash'
];

export const GlobalDictionaryModal: React.FC = () => {
  const {
    dictionaryModalOpen,
    setDictionaryModalOpen,
    dictionaryInitialQuery,
    setDictionaryInitialQuery,
    setActiveTab,
    wordInspectorEnabled,
    setWordInspectorEnabled,
    launchFlashcardDeck,
    togglePinFlashcard
  } = useTheme();

  const [query, setQuery] = useState('');
  const [srsSavedToast, setSrsSavedToast] = useState(false);
  const [loading, setLoading] = useState(false);
  const [definition, setDefinition] = useState<DictionaryDefinition | null>(null);
  const [copied, setCopied] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sync initial query if passed
  useEffect(() => {
    if (dictionaryModalOpen) {
      if (dictionaryInitialQuery) {
        setQuery(dictionaryInitialQuery);
        executeLookup(dictionaryInitialQuery);
        setDictionaryInitialQuery('');
      } else {
        setTimeout(() => inputRef.current?.focus(), 100);
      }
    } else {
      setDefinition(null);
      setNotFound(false);
    }
  }, [dictionaryModalOpen]);

  // Global Alt+D or Cmd+D hotkey
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.altKey || e.metaKey) && (e.key === 'd' || e.key === 'D')) {
        e.preventDefault();
        setDictionaryModalOpen(!dictionaryModalOpen);
      }
      if (e.key === 'Escape' && dictionaryModalOpen) {
        setDictionaryModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [dictionaryModalOpen]);

  const executeLookup = async (targetWord: string) => {
    const cleaned = cleanLookupWord(targetWord);
    if (!cleaned) return;

    setLoading(true);
    setNotFound(false);
    try {
      const result = await lookupUniversalWord(cleaned);
      if (result) {
        setDefinition(result);
        setNotFound(false);
      } else {
        setDefinition(null);
        setNotFound(true);
      }
    } catch {
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      executeLookup(query.trim());
    }
  };

  const handlePronounce = () => {
    if (!definition) return;
    if (definition.audioUrl) {
      try {
        const audio = new Audio(definition.audioUrl);
        setIsPlayingAudio(true);
        audio.play().catch(() => fallbackSpeech(definition.word));
        audio.onended = () => setIsPlayingAudio(false);
        return;
      } catch {
        fallbackSpeech(definition.word);
        return;
      }
    }
    fallbackSpeech(definition.word);
  };

  const fallbackSpeech = (text: string) => {
    if ('speechSynthesis' in window) {
      setIsPlayingAudio(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleCopy = () => {
    if (!definition) return;
    const textToCopy = `${definition.word.toUpperCase()} (${definition.partOfSpeech || definition.category})\nMeaning: ${definition.meaning}\nExample: ${definition.example}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!dictionaryModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-[var(--bg-surface)] border border-[var(--border-strong)] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-4 border-b border-[var(--border-subtle)] flex items-center justify-between gap-3 bg-[var(--bg-surface-elevated)]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)] flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[var(--text-primary)] flex items-center gap-2">
                <span>Universal Legal & Forensic Dictionary</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[var(--bootcamp-accent-subtle)] text-[var(--bootcamp-accent-text)] border border-[var(--bootcamp-accent-border)] font-semibold">
                  Meanings + Practical Examples
                </span>
              </h3>
              <p className="text-[11px] text-[var(--text-muted)] font-mono">
                Define any constitutional term, Latin maxim, or English courtroom vocabulary
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setWordInspectorEnabled((prev: boolean) => !prev)}
              title={wordInspectorEnabled ? "Double-click inspector is ON" : "Double-click inspector is OFF"}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-mono border transition-all flex items-center gap-1.5 ${
                wordInspectorEnabled
                  ? 'bg-[var(--success-bg)] text-[var(--success-text)] border-[var(--success-border)] font-bold'
                  : 'bg-[var(--bg-base)] text-[var(--text-muted)] border-[var(--border-subtle)]'
              }`}
            >
              <span>Auto-Inspector: {wordInspectorEnabled ? 'ON' : 'OFF'}</span>
            </button>
            <button
              onClick={() => setDictionaryModalOpen(false)}
              className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-base)] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search Input Bar */}
        <form onSubmit={handleSearchSubmit} className="p-4 border-b border-[var(--border-subtle)]">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 absolute left-3.5 text-[var(--text-muted)]" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type any word or Latin maxim (e.g. promulgate, stare decisis, repugnancy, quash)..."
              className="w-full pl-10 pr-24 py-2.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs md:text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-all font-mono"
            />
            <button
              type="submit"
              disabled={loading || !query.trim()}
              className="absolute right-2 px-3 py-1.5 rounded-lg text-xs font-bold font-mono bg-[var(--accent)] text-[var(--accent-contrast)] hover:opacity-90 disabled:opacity-40 transition-all flex items-center gap-1"
            >
              {loading ? 'Searching...' : 'Define'}
            </button>
          </div>

          {/* Quick-Picks Row */}
          <div className="flex items-center gap-1.5 pt-2.5 overflow-x-auto no-scrollbar">
            <span className="text-[10px] font-mono text-[var(--text-muted)] shrink-0">Quick picks:</span>
            {POPULAR_QUICK_TERMS.map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => {
                  setQuery(term);
                  executeLookup(term);
                }}
                className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] whitespace-nowrap transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </form>

        {/* Modal Body / Results */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1">
          {definition ? (
            <div className="space-y-4 animate-fadeIn">
              {/* Result Header */}
              <div className="flex items-start justify-between gap-3 border-b border-[var(--border-subtle)] pb-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h2 className="text-xl md:text-2xl font-black text-[var(--text-primary)] capitalize">
                      {definition.word}
                    </h2>
                    <span className="text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
                      {definition.partOfSpeech || 'Forensic Term'}
                    </span>
                    {definition.category && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                        {definition.category}
                      </span>
                    )}
                  </div>
                  {definition.phonetic && (
                    <span className="text-xs font-mono text-[var(--text-muted)] block">
                      {definition.phonetic}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => {
                      const candidateId = getCardIdForDictionaryTerm(definition.word);
                      const exists = getStoredFlashcards().some((c) => c.id === candidateId);
                      if (exists) {
                        togglePinFlashcard(candidateId);
                        setDictionaryModalOpen(false);
                        launchFlashcardDeck('maxims', 'all', candidateId);
                      } else {
                        createCustomFlashcard({
                          front: `${definition.word}: What does this term mean in legal/constitutional usage?`,
                          coreRule: definition.meaning,
                          statutoryDetails: definition.phonetic ? `Origin/Phonetic: ${definition.phonetic}` : definition.meaning,
                          plainEnglish: definition.example,
                          statutoryAnchor: definition.statutoryOrCaseRef || definition.category || 'Legal Vocabulary',
                          deck: 'maxims',
                          category: definition.category || 'Vocabulary',
                        });
                        setSrsSavedToast(true);
                        setTimeout(() => setSrsSavedToast(false), 2500);
                      }
                    }}
                    title="Save or Drill this word in Leitner SRS Flashcards"
                    className="flex items-center gap-1 px-2.5 py-2 rounded-xl border border-[var(--badge-border)] bg-[var(--badge-bg)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)] text-xs font-mono font-bold transition-colors"
                  >
                    <BrainCircuit className="w-3.5 h-3.5" />
                    <span>{srsSavedToast ? 'Added!' : '+ SRS'}</span>
                  </button>
                  <button
                    onClick={handlePronounce}
                    title="Pronounce Word"
                    className={`p-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors ${
                      isPlayingAudio ? 'text-[var(--accent)] ring-1 ring-[var(--accent)]' : ''
                    }`}
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleCopy}
                    title="Copy Word & Example"
                    className="p-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4 text-[var(--success-text)]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Meaning Section */}
              <div className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-[var(--accent)]" /> Detailed Meaning:
                </span>
                <p className="text-xs md:text-sm text-[var(--text-primary)] leading-relaxed">
                  {definition.meaning}
                </p>
              </div>

              {/* Practical Illustrative Example Box (User requested feature!) */}
              <div className="p-4 rounded-xl bg-[var(--bg-surface-elevated)] border-2 border-[var(--bootcamp-accent-border)] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[var(--bootcamp-accent-text)] uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4" />
                  <span>Practical Illustrative Example:</span>
                </div>
                <p className="text-xs md:text-sm text-[var(--text-primary)] leading-relaxed italic bg-[var(--bg-surface)] p-3 rounded-lg border border-[var(--border-subtle)]">
                  "{definition.example}"
                </p>
              </div>

              {/* Statutory or Precedent Reference */}
              {definition.statutoryOrCaseRef && (
                <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex items-start gap-2.5 text-xs">
                  <Scale className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[var(--text-primary)] block">Statutory / Landmark Judicial Anchor:</span>
                    <span className="text-[var(--text-secondary)]">{definition.statutoryOrCaseRef}</span>
                  </div>
                </div>
              )}

              {/* Related Articles Pills */}
              {definition.relatedArticles && definition.relatedArticles.length > 0 && (
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
                    Direct Constitutional Connections:
                  </span>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {definition.relatedArticles.map((art) => (
                      <span
                        key={art}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]"
                      >
                        {art}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Synonyms (if available) */}
              {definition.synonyms && definition.synonyms.length > 0 && (
                <div className="flex items-center gap-2 flex-wrap text-xs pt-1">
                  <span className="text-[11px] text-[var(--text-muted)] font-mono">Synonyms:</span>
                  {definition.synonyms.map((syn) => (
                    <button
                      key={syn}
                      onClick={() => {
                        setQuery(syn);
                        executeLookup(syn);
                      }}
                      className="px-2 py-0.5 rounded text-[11px] bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
                    >
                      {syn}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : notFound ? (
            <div className="p-8 text-center space-y-3">
              <HelpCircle className="w-10 h-10 text-[var(--text-muted)] mx-auto opacity-50" />
              <h4 className="text-base font-bold text-[var(--text-primary)]">
                No exact match found for "{query}"
              </h4>
              <p className="text-xs text-[var(--text-muted)] max-w-md mx-auto leading-relaxed">
                Check your spelling, or explore the full 215-term Legal Dictionary for constitutional doctrines and Latin maxims.
              </p>
              <button
                onClick={() => {
                  setActiveTab('dictionary');
                  setDictionaryModalOpen(false);
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold font-mono bg-[var(--accent)] text-[var(--accent-contrast)] hover:opacity-90 transition-all shadow-sm"
              >
                <span>Browse Full Legal Dictionary (215 Terms)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div className="p-6 text-center space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)] flex items-center justify-center mx-auto shadow-sm">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-[var(--text-primary)]">
                  Universal Word & Legal Maxim Inspector
                </h4>
                <p className="text-xs text-[var(--text-muted)] max-w-md mx-auto leading-relaxed">
                  Type any word in the search box above to get its authoritative legal and English meaning, complete with <strong>concrete illustrative examples</strong> and pronunciation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] max-w-lg mx-auto text-left space-y-2">
                <span className="font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-[var(--bootcamp-accent-text)]" />
                  Pro-Tip for Fast Study:
                </span>
                <p className="text-[11px] leading-relaxed">
                  You can <strong>double-click or highlight any word anywhere in the app</strong> (in articles, questions, explanations, or case studies) to pop open an instant definition with illustrative examples!
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
          <span>Shortcuts: Press <kbd className="px-1.5 py-0.5 rounded bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-primary)] font-bold">Alt + D</kbd> to toggle</span>
          <button
            onClick={() => {
              setActiveTab('dictionary');
              setDictionaryModalOpen(false);
            }}
            className="hover:text-[var(--accent)] flex items-center gap-1 font-semibold"
          >
            <span>Open Dedicated Dictionary Tab</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
