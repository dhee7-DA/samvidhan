import React, { useState, useMemo, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { BookOpen, Lightbulb, Sparkles, Scale, ExternalLink, X } from 'lucide-react';
import { LEGAL_DICTIONARY } from '../../data/legalDictionaryData';
import type { LegalTerm } from '../../types/dictionary';

// Pre-index the dictionary for instant O(1) lookups
const TERM_MAP = new Map<string, LegalTerm>();
const ALL_KEYS: string[] = [];

LEGAL_DICTIONARY.forEach((entry) => {
  TERM_MAP.set(entry.term.toLowerCase(), entry);
  ALL_KEYS.push(entry.term);

  entry.aliases.forEach((alias) => {
    TERM_MAP.set(alias.toLowerCase(), entry);
    ALL_KEYS.push(alias);
  });
});

// Sort keys by length descending so longer compound phrases match before single words
ALL_KEYS.sort((a, b) => b.length - a.length);

// Escape special regex characters
function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Global compiled regex pattern
const DICTIONARY_REGEX = new RegExp(`\\b(${ALL_KEYS.map(escapeRegExp).join('|')})\\b`, 'gi');

interface TooltipProps {
  termData: LegalTerm;
  children: React.ReactNode;
}

export const LegalWordTooltip: React.FC<TooltipProps> = ({ termData, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number; placeAbove: boolean } | null>(null);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const calculatePosition = () => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const tooltipWidth = Math.min(380, window.innerWidth - 32);
    const tooltipHeight = 280; // Estimated height for boundary check

    // Check if there is enough space below; if not, place above
    const placeAbove = rect.bottom + tooltipHeight > window.innerHeight && rect.top > tooltipHeight;

    let left = rect.left + rect.width / 2 - tooltipWidth / 2;
    // Keep within screen horizontally
    if (left < 16) left = 16;
    if (left + tooltipWidth > window.innerWidth - 16) {
      left = window.innerWidth - tooltipWidth - 16;
    }

    const top = placeAbove ? rect.top - 8 : rect.bottom + 8;
    setCoords({ top, left, placeAbove });
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    calculatePosition();
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 350); // Generous grace period to allow moving mouse into tooltip
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (triggerRef.current && !triggerRef.current.contains(target) && !target.closest('.legal-tooltip')) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isOpen]);

  return (
    <>
      <span
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onPointerEnter={handleMouseEnter}
        onPointerLeave={handleMouseLeave}
        onClick={(e) => {
          e.stopPropagation();
          calculatePosition();
          setIsOpen((prev) => !prev);
        }}
        title={`Hover or click to view definition & example: ${termData.term}`}
        className="inline cursor-pointer text-[var(--gold)] font-medium underline decoration-dotted decoration-[var(--gold)]/80 hover:decoration-[var(--gold)] hover:bg-[var(--gold)]/10 px-0.5 rounded underline-offset-4 transition-colors"
      >
        {children}
      </span>

      {isOpen &&
        coords &&
        createPortal(
          <div
            onMouseEnter={() => {
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
            }}
            onMouseLeave={handleMouseLeave}
            style={{
              position: 'fixed',
              top: `${coords.top}px`,
              left: `${coords.left}px`,
              transform: coords.placeAbove ? 'translateY(-100%)' : 'none',
              width: `${Math.min(380, window.innerWidth - 32)}px`,
              zIndex: 99999
            }}
            role="tooltip"
            className="legal-tooltip p-4 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] shadow-2xl flex flex-col gap-3 text-left pointer-events-auto backdrop-blur-md"
          >
            {/* Header: Term Title + Category */}
            <div className="flex items-start justify-between gap-2 border-b border-[var(--border-subtle)] pb-2.5">
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-mono font-bold text-[var(--accent)] tracking-wider uppercase">
                  {termData.category}
                </span>
                <h4 className="text-sm font-bold text-[var(--text-primary)] leading-tight">
                  {termData.term}
                </h4>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-base)] transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Phonetic / Latin Literal Translation */}
            {termData.phoneticOrLiteral && (
              <div className="text-[11px] font-mono text-[var(--text-muted)] italic">
                {termData.phoneticOrLiteral}
              </div>
            )}

            {/* Detailed Legal Meaning */}
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-mono font-bold text-[var(--text-secondary)] uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-3 h-3 text-[var(--accent)]" /> Meaning
              </span>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {termData.detailedMeaning}
              </p>
            </div>

            {/* Easy Everyday / Courtroom Example */}
            <div className="p-3 rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/25 flex flex-col gap-1">
              <span className="text-[10px] font-mono font-bold text-[var(--gold)] uppercase tracking-wider flex items-center gap-1.5">
                <Lightbulb className="w-3 h-3 fill-current" /> Easy-To-Understand Example
              </span>
              <p className="text-xs text-[var(--text-primary)] font-medium leading-relaxed">
                {termData.easyExample}
              </p>
            </div>

            {/* Statutory Reference or Case Citation */}
            {termData.statutoryOrCaseRef && (
              <div className="text-[10px] font-mono text-[var(--text-muted)] pt-1.5 border-t border-[var(--border-subtle)] flex items-center gap-1">
                <Scale className="w-3 h-3 text-[var(--text-muted)] shrink-0" />
                <span className="truncate">{termData.statutoryOrCaseRef}</span>
              </div>
            )}
          </div>,
          document.body
        )}
    </>
  );
};

interface AnnotatedLegalTextProps {
  text: string;
  className?: string;
}

export const AnnotatedLegalText: React.FC<AnnotatedLegalTextProps> = ({ text, className }) => {
  const parts = useMemo(() => {
    if (!text) return [];

    const elements: React.ReactNode[] = [];
    let lastIndex = 0;
    const regex = new RegExp(DICTIONARY_REGEX.source, 'gi');

    let match: RegExpExecArray | null;
    while ((match = regex.exec(text)) !== null) {
      const matchIndex = match.index;
      const matchedString = match[0];

      // Add pre-match string
      if (matchIndex > lastIndex) {
        elements.push(text.substring(lastIndex, matchIndex));
      }

      // Check if matchedString exists in termMap
      const termEntry = TERM_MAP.get(matchedString.toLowerCase());

      if (termEntry) {
        elements.push(
          <LegalWordTooltip key={`${matchIndex}-${matchedString}`} termData={termEntry}>
            {matchedString}
          </LegalWordTooltip>
        );
      } else {
        elements.push(matchedString);
      }

      lastIndex = matchIndex + matchedString.length;
    }

    // Add remaining tail
    if (lastIndex < text.length) {
      elements.push(text.substring(lastIndex));
    }

    return elements;
  }, [text]);

  return <span className={className}>{parts}</span>;
};
