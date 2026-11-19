import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  AlertTriangle,
  Scale,
  Clock,
  BookOpen,
  HelpCircle,
  TrendingUp,
  FileText,
  Award,
  ChevronRight,
  Info
} from 'lucide-react';
import type { QuestionHoverIntel, MainsMasterQuestion } from '../../types/mainsQuestionTypes';

interface QuestionIntelHoverCardProps {
  question: MainsMasterQuestion;
  children: React.ReactNode;
  className?: string;
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'auto';
}

export const QuestionIntelHoverCard: React.FC<QuestionIntelHoverCardProps> = ({
  question,
  children,
  className = '',
  placement = 'auto'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<any>(null);

  const intel = question.hoverIntel;

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsOpen(true);
    }, 150);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Target Wrapped Child */}
      <div className="relative group">
        {children}

        {/* Mobile Info Beacon Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsMobileModalOpen(true);
          }}
          title="Inspect Question Topic, Weightage & Examiner Traps"
          className="absolute -top-1.5 -right-1.5 md:hidden w-5 h-5 rounded-full bg-[var(--accent-primary)] text-[var(--bg-base)] flex items-center justify-center text-[10px] font-bold shadow-sm z-10"
        >
          <Info className="w-3 h-3" />
        </button>
      </div>

      {/* Desktop Hover Floating Callout Card */}
      {isOpen && (
        <div
          role="tooltip"
          className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-3 w-[360px] md:w-[420px] max-w-[90vw] p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--accent-primary)]/40 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150 pointer-events-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Top Pointer Arrow */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-[var(--bg-card)] border-r border-b border-[var(--accent-primary)]/40" />

          {/* Callout Header */}
          <div className="space-y-2 pb-3 border-b border-[var(--border-subtle)]">
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[var(--accent-primary)]/15 text-[var(--accent-primary)] border border-[var(--accent-primary)]/30">
                <BookOpen className="w-3 h-3" />
                {intel.topicPillar}
              </span>

              <span className="text-[11px] font-black text-amber-400 flex items-center gap-1">
                {intel.examImportance}
              </span>
            </div>

            <h4 className="text-xs md:text-sm font-bold text-[var(--text-primary)] leading-tight">
              {intel.topicName}
            </h4>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 gap-2 py-3 border-b border-[var(--border-subtle)] text-[11px]">
            <div className="p-2 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-0.5">
              <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1">
                <Award className="w-3 h-3 text-[var(--accent-primary)]" />
                Weightage & Pages
              </span>
              <span className="font-bold text-[var(--text-primary)] block">
                {intel.weightagePattern}
              </span>
            </div>

            <div className="p-2 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-0.5">
              <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1">
                <Clock className="w-3 h-3 text-emerald-400" />
                Target Drafting Pacing
              </span>
              <span className="font-bold text-emerald-400 block">
                {question.targetTimeMinutes} mins (~9 wpm target)
              </span>
            </div>
          </div>

          {/* Exam Frequency & History */}
          <div className="py-2.5 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-[var(--accent-primary)]" />
              Past 15 Years Testing Frequency
            </span>
            <p className="text-[11px] font-medium text-[var(--text-secondary)] leading-relaxed">
              {intel.examFrequency}
            </p>
          </div>

          {/* Core Articles Touched */}
          <div className="py-2 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] block">
              Core Constitutional Articles Touched:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {intel.coreArticles.map((art, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--accent-primary)]"
                >
                  {art}
                </span>
              ))}
            </div>
          </div>

          {/* Examiner Trap Warning Callout */}
          <div className="mt-2 p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-1">
            <div className="flex items-center gap-1.5 text-amber-400 text-[10px] font-bold uppercase tracking-wider">
              <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
              <span>Examiner Trap & Deduction Alert</span>
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] leading-snug">
              {intel.examinerTrapWarning}
            </p>
          </div>

          {/* Recent Trend Alert (if present) */}
          {intel.recentTrendAlert && (
            <div className="mt-2 p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-300 flex items-start gap-1.5 leading-snug">
              <Sparkles className="w-3 h-3 shrink-0 mt-0.5" />
              <span>{intel.recentTrendAlert}</span>
            </div>
          )}

          {/* Footer Callout Action */}
          <div className="mt-3 pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-[10px] text-[var(--text-muted)]">
            <span>Click pill to load question & 4-step blueprint</span>
            <ChevronRight className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
          </div>
        </div>
      )}

      {/* Mobile Modal Dialog */}
      {isMobileModalOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-black/70 backdrop-blur-sm flex items-end justify-center p-3 animate-in fade-in duration-200">
          <div className="w-full max-h-[85vh] overflow-y-auto rounded-3xl bg-[var(--bg-card)] border border-[var(--border-strong)] p-5 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)]">
                Question Intel & Weightage
              </span>
              <button
                onClick={() => setIsMobileModalOpen(false)}
                className="px-3 py-1 rounded-full text-xs font-bold bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
              >
                Close
              </button>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] block">
                {intel.topicPillar}
              </span>
              <h3 className="text-base font-bold text-[var(--text-primary)]">
                {intel.topicName}
              </h3>
              <span className="text-xs font-black text-amber-400 block pt-1">
                {intel.examImportance}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1 text-xs">
              <span className="text-[10px] font-bold uppercase text-[var(--text-muted)] block">
                Weightage Pattern:
              </span>
              <p className="font-bold text-[var(--text-primary)]">{intel.weightagePattern}</p>
              <p className="text-emerald-400 font-semibold pt-1">
                Target Writing Time: {question.targetTimeMinutes} minutes
              </p>
            </div>

            <div className="space-y-1 text-xs">
              <span className="text-[10px] font-bold uppercase text-[var(--text-muted)] block">
                Testing History:
              </span>
              <p className="text-[var(--text-secondary)]">{intel.examFrequency}</p>
            </div>

            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-1 text-xs">
              <span className="font-bold text-amber-400 flex items-center gap-1 text-[11px] uppercase">
                <AlertTriangle className="w-3.5 h-3.5" /> Examiner Trap Alert
              </span>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {intel.examinerTrapWarning}
              </p>
            </div>

            <button
              onClick={() => setIsMobileModalOpen(false)}
              className="w-full py-3 rounded-xl font-bold text-xs bg-[var(--accent-primary)] text-[var(--bg-base)] shadow-sm"
            >
              Back to Drafting Canvas
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
