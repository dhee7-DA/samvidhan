import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import {
  BookOpen,
  Volume2,
  X,
  Lightbulb,
  Scale,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  Search
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { lookupUniversalWord, cleanLookupWord, type DictionaryDefinition } from '../../services/dictionaryService';

export const UniversalDictionaryPopover: React.FC = () => {
  const { wordInspectorEnabled, setActiveTab, setDictionaryModalOpen, setDictionaryInitialQuery } = useTheme();

  const [activeDef, setActiveDef] = useState<DictionaryDefinition | null>(null);
  const [coords, setCoords] = useState<{ top: number; left: number; placeAbove: boolean } | null>(null);
  const [copied, setCopied] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Audio speech synthesis helper
  const handlePronounce = () => {
    if (!activeDef) return;

    if (activeDef.audioUrl) {
      try {
        const audio = new Audio(activeDef.audioUrl);
        setIsPlayingAudio(true);
        audio.play().catch(() => {
          fallbackSpeech(activeDef.word);
        });
        audio.onended = () => setIsPlayingAudio(false);
        return;
      } catch {
        fallbackSpeech(activeDef.word);
        return;
      }
    }
    fallbackSpeech(activeDef.word);
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
    if (!activeDef) return;
    const textToCopy = `${activeDef.word.toUpperCase()} (${activeDef.partOfSpeech || activeDef.category})\nMeaning: ${activeDef.meaning}\nExample: ${activeDef.example}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Close on outside click or Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDef(null);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        // Delay slightly so text selection isn't immediately cleared before evaluation
        setTimeout(() => {
          setActiveDef(null);
        }, 150);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  // Listen to document selection & double clicks
  useEffect(() => {
    if (!wordInspectorEnabled) return;

    const handleInspectSelection = async () => {
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed) return;

      const selectedText = selection.toString().trim();
      // Only process selections of reasonable length (1 to 4 words)
      if (!selectedText || selectedText.length < 2 || selectedText.split(/\s+/).length > 4) {
        return;
      }

      // Check if user clicked inside our popover
      if (popoverRef.current && popoverRef.current.contains(selection.anchorNode)) {
        return;
      }

      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      if (!rect || rect.width === 0) return;

      const def = await lookupUniversalWord(selectedText);
      if (!def) return;

      // Calculate position
      const popoverWidth = Math.min(380, window.innerWidth - 32);
      const popoverHeight = 300;

      const placeAbove = rect.bottom + popoverHeight > window.innerHeight && rect.top > popoverHeight;
      let left = rect.left + rect.width / 2 - popoverWidth / 2;

      if (left < 16) left = 16;
      if (left + popoverWidth > window.innerWidth - 16) {
        left = window.innerWidth - popoverWidth - 16;
      }

      const top = placeAbove ? rect.top - 10 : rect.bottom + 10;

      setCoords({ top, left, placeAbove });
      setActiveDef(def);
    };

    // Use mouseup with slight debounce so selection coordinates are fully settled
    let timeout: ReturnType<typeof setTimeout>;
    const onMouseUp = (e: MouseEvent) => {
      // Don't trigger if clicking inside form inputs or inside popover
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.closest('[data-no-inspect]')) {
        return;
      }
      clearTimeout(timeout);
      timeout = setTimeout(handleInspectSelection, 200);
    };

    document.addEventListener('mouseup', onMouseUp);
    return () => {
      clearTimeout(timeout);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [wordInspectorEnabled]);

  if (!activeDef || !coords) return null;

  return createPortal(
    <div
      ref={popoverRef}
      style={{
        position: 'fixed',
        top: coords.placeAbove ? 'auto' : `${coords.top}px`,
        bottom: coords.placeAbove ? `${window.innerHeight - coords.top}px` : 'auto',
        left: `${coords.left}px`,
        width: `${Math.min(380, window.innerWidth - 32)}px`,
        zIndex: 9999
      }}
      className="p-4 rounded-2xl bg-[var(--bg-surface)] border-2 border-[var(--border-strong)] shadow-2xl space-y-3 animate-fadeIn text-left backdrop-blur-md"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2 border-b border-[var(--border-subtle)] pb-2.5">
        <div>
          <div className="flex items-center gap-2">
            <h4 className="text-base font-black text-[var(--text-primary)] capitalize">
              {activeDef.word}
            </h4>
            <button
              onClick={handlePronounce}
              title="Pronounce Word"
              className={`p-1 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors ${
                isPlayingAudio ? 'text-[var(--accent)] ring-1 ring-[var(--accent)]' : ''
              }`}
            >
              <Volume2 className="w-3.5 h-3.5" />
            </button>
          </div>
          {activeDef.phonetic && (
            <span className="text-[11px] font-mono text-[var(--text-muted)] block">
              {activeDef.phonetic}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={handleCopy}
            title="Copy definition"
            className="p-1 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[var(--success-text)]" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => setActiveDef(null)}
            title="Close"
            className="p-1 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Category / Part of Speech Badges */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
          {activeDef.partOfSpeech || 'Forensic Term'}
        </span>
        {activeDef.category && (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
            {activeDef.category}
          </span>
        )}
      </div>

      {/* Meaning */}
      <div className="space-y-1">
        <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
          Meaning:
        </span>
        <p className="text-xs text-[var(--text-primary)] leading-relaxed font-normal">
          {activeDef.meaning}
        </p>
      </div>

      {/* Concrete Example Box */}
      {activeDef.example && (
        <div className="p-3 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] space-y-1">
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-[var(--bootcamp-accent-text)] uppercase tracking-wider">
            <Lightbulb className="w-3.5 h-3.5 shrink-0" />
            <span>Illustrative Example:</span>
          </div>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed italic">
            "{activeDef.example}"
          </p>
        </div>
      )}

      {/* Statutory / Case Reference (if available) */}
      {activeDef.statutoryOrCaseRef && (
        <div className="flex items-center gap-1.5 text-[11px] text-[var(--text-muted)] pt-0.5">
          <Scale className="w-3 h-3 text-[var(--accent)] shrink-0" />
          <span className="truncate">{activeDef.statutoryOrCaseRef}</span>
        </div>
      )}

      {/* Footer Actions */}
      <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between gap-2">
        {activeDef.source === 'constitutional_lexicon' ? (
          <button
            onClick={() => {
              setActiveTab('dictionary');
              setActiveDef(null);
            }}
            className="text-[11px] font-semibold text-[var(--accent)] hover:underline flex items-center gap-1"
          >
            <span>Open in Full Legal Dictionary</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        ) : (
          <button
            onClick={() => {
              setDictionaryInitialQuery(activeDef.word);
              setDictionaryModalOpen(true);
              setActiveDef(null);
            }}
            className="text-[11px] font-semibold text-[var(--accent)] hover:underline flex items-center gap-1"
          >
            <Search className="w-3 h-3" />
            <span>Deep Search Term</span>
          </button>
        )}

        <span className="text-[9px] text-[var(--text-muted)] font-mono">
          Samvidhan Universal Lexicon
        </span>
      </div>
    </div>,
    document.body
  );
};
