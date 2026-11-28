import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check, MessageSquarePlus, Send, X } from 'lucide-react';
import { EDITORIAL_SPRING } from './EditorialMotionCards';

/* -------------------------------------------------------------------------- */
/* 1. Radial Progress Ring -> Checkmark Badge (@nitishkmrk)                   */
/* -------------------------------------------------------------------------- */
interface RadialMasteryCheckButtonProps {
  completed: boolean;
  onToggle: () => void;
  title?: string;
}

export const RadialMasteryCheckButton: React.FC<RadialMasteryCheckButtonProps> = ({
  completed,
  onToggle,
  title = 'Mark as Mastered',
}) => {
  const [sweeping, setSweeping] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  const handleClick = () => {
    if (!completed) {
      setSweeping(true);
      timerRef.current = window.setTimeout(() => {
        setSweeping(false);
        onToggle();
      }, 360);
    } else {
      onToggle();
    }
  };

  const radius = 12;
  const circumference = 2 * Math.PI * radius;

  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.92 }}
      onClick={handleClick}
      title={completed ? 'Mastered (click to undo)' : title}
      aria-label={title}
      className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer shrink-0 ${
        completed
          ? 'bg-emerald-500 text-white shadow-[0_0_12px_rgba(16,185,129,0.35)] ring-2 ring-emerald-500/25'
          : 'bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
      }`}
    >
      {/* Perimeter SVG Ring */}
      {!completed && (
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 32 32">
          <circle
            cx="16"
            cy="16"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeOpacity={0.14}
            strokeWidth="2.2"
          />
          <motion.circle
            cx="16"
            cy="16"
            r={radius}
            fill="none"
            stroke="#10B981"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: sweeping ? 0 : circumference }}
            transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
      )}

      <AnimatePresence mode="wait">
        {completed ? (
          <motion.span
            key="checked"
            initial={{ scale: 0.5, opacity: 0, filter: 'blur(3px)' }}
            animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={EDITORIAL_SPRING}
          >
            <Check className="w-3.5 h-3.5 stroke-[2.75]" />
          </motion.span>
        ) : (
          <motion.span
            key="idle"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <Check className="w-3.5 h-3.5 opacity-60" />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

/* -------------------------------------------------------------------------- */
/* 2. Expandable Confidence Dot Picker with Floating Label (@nitishkmrk)      */
/* -------------------------------------------------------------------------- */
export type ConfidenceLevel = 'unrated' | 'review' | 'familiar' | 'mastered';

const CONFIDENCE_DOTS: { id: Exclude<ConfidenceLevel, 'unrated'>; label: string; color: string }[] = [
  { id: 'review', label: 'Needs Review', color: '#F43F5E' },
  { id: 'familiar', label: 'Familiar', color: '#F59E0B' },
  { id: 'mastered', label: 'Mastered', color: '#10B981' },
];

interface ConfidenceDotPickerProps {
  value: ConfidenceLevel;
  onChange: (next: ConfidenceLevel) => void;
}

export const ConfidenceDotPicker: React.FC<ConfidenceDotPickerProps> = ({ value, onChange }) => {
  const [expanded, setExpanded] = useState(false);
  const [hoveredDot, setHoveredDot] = useState<string | null>(null);

  const currentColor =
    CONFIDENCE_DOTS.find((d) => d.id === value)?.color || 'rgba(148, 163, 184, 0.55)';

  return (
    <div
      className="relative inline-flex items-center"
      onMouseLeave={() => {
        setExpanded(false);
        setHoveredDot(null);
      }}
    >
      <motion.div
        layout
        transition={EDITORIAL_SPRING}
        className="flex items-center gap-1.5 px-2 py-1.5 rounded-full bg-[var(--bg-base)] border border-[var(--border-subtle)] shadow-sm"
      >
        {!expanded ? (
          <button
            type="button"
            onClick={() => setExpanded(true)}
            title="Set confidence level"
            className="flex items-center gap-1.5 cursor-pointer px-0.5"
          >
            <span
              className="w-3 h-3 rounded-full block transition-colors"
              style={{ backgroundColor: currentColor }}
            />
            <span className="text-[10px] font-mono text-[var(--text-muted)] hidden md:inline">
              {CONFIDENCE_DOTS.find((d) => d.id === value)?.label || 'Tag'}
            </span>
          </button>
        ) : (
          <div className="flex items-center gap-1.5">
            {CONFIDENCE_DOTS.map((dot) => {
              const isSelected = dot.id === value;
              const isHovered = hoveredDot === dot.id;
              return (
                <div key={dot.id} className="relative flex items-center justify-center">
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 4, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.9 }}
                        transition={{ duration: 0.14 }}
                        className="absolute bottom-full mb-2 px-2 py-0.5 rounded-full bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] shadow-md text-[10px] font-mono font-semibold text-[var(--text-primary)] whitespace-nowrap pointer-events-none z-20"
                      >
                        {dot.label}
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <button
                    type="button"
                    onMouseEnter={() => setHoveredDot(dot.id)}
                    onClick={() => {
                      onChange(isSelected ? 'unrated' : dot.id);
                      setExpanded(false);
                    }}
                    aria-label={dot.label}
                    className={`w-3.5 h-3.5 rounded-full transition-transform cursor-pointer hover:scale-125 ${
                      isSelected ? 'ring-2 ring-white/60 scale-110' : ''
                    }`}
                    style={{ backgroundColor: dot.color }}
                  />
                </div>
              );
            })}
          </div>
        )}
      </motion.div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 3. Morphing Action Bar -> Inline Input Pill (@nitishkmrk)                  */
/* -------------------------------------------------------------------------- */
interface MorphingNotePillProps {
  note: string;
  onSaveNote: (nextNote: string) => void;
}

export const MorphingNotePill: React.FC<MorphingNotePillProps> = ({ note, onSaveNote }) => {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(note);

  useEffect(() => {
    setDraft(note);
  }, [note]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveNote(draft.trim());
    setEditing(false);
  };

  return (
    <motion.div layout transition={EDITORIAL_SPRING} className="inline-flex items-center">
      <AnimatePresence mode="wait">
        {!editing ? (
          <motion.button
            key="note-trigger"
            type="button"
            initial={{ opacity: 0, filter: 'blur(3px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(3px)' }}
            transition={{ duration: 0.16 }}
            onClick={() => setEditing(true)}
            title={note ? 'Edit personal study note' : 'Add personal study note'}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border text-xs font-mono transition-colors cursor-pointer ${
              note
                ? 'bg-[var(--accent)]/12 border-[var(--accent)]/35 text-[var(--accent)] font-semibold'
                : 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            <MessageSquarePlus className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{note ? 'Note' : '+ Note'}</span>
          </motion.button>
        ) : (
          <motion.form
            key="note-input"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, width: 110, filter: 'blur(3px)' }}
            animate={{ opacity: 1, width: 220, filter: 'blur(0px)' }}
            exit={{ opacity: 0, width: 110, filter: 'blur(3px)' }}
            transition={EDITORIAL_SPRING}
            className="inline-flex items-center gap-1 pl-2.5 pr-1 py-1 rounded-full bg-[var(--bg-base)] border border-[var(--accent)]/50 shadow-sm"
          >
            <input
              type="text"
              autoFocus
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Quick study note..."
              className="w-full min-w-0 bg-transparent text-xs text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setEditing(false)}
              className="p-1 rounded-full text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
              title="Cancel"
            >
              <X className="w-3 h-3" />
            </button>
            <button
              type="submit"
              className="p-1 rounded-full bg-[var(--accent)] text-[var(--accent-contrast)] hover:opacity-90 cursor-pointer"
              title="Save note"
            >
              <Send className="w-3 h-3" />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* -------------------------------------------------------------------------- */
/* 4. Multi-State Pill Button with Live % Counter (@nitishkmrk)               */
/* -------------------------------------------------------------------------- */
interface MultiStateProgressButtonProps {
  idleLabel: string;
  doneLabel: string;
  icon: React.ReactNode;
  onAction: () => void | Promise<void>;
  className?: string;
}

export const MultiStateProgressButton: React.FC<MultiStateProgressButtonProps> = ({
  idleLabel,
  doneLabel,
  icon,
  onAction,
  className = '',
}) => {
  const [phase, setPhase] = useState<'idle' | 'running' | 'done'>('idle');
  const [pct, setPct] = useState(0);

  const handleClick = async () => {
    if (phase === 'running') return;
    setPhase('running');
    setPct(12);

    const interval = window.setInterval(() => {
      setPct((p) => (p < 92 ? p + 18 : p));
    }, 65);

    try {
      await onAction();
    } finally {
      window.clearInterval(interval);
      setPct(100);
      setPhase('done');
      window.setTimeout(() => {
        setPhase('idle');
        setPct(0);
      }, 1600);
    }
  };

  return (
    <motion.button
      type="button"
      layout
      transition={EDITORIAL_SPRING}
      onClick={handleClick}
      className={`py-3 px-4 rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-2 btn-tactile cursor-pointer ${className}`}
    >
      <AnimatePresence mode="wait">
        {phase === 'idle' && (
          <motion.span
            key="idle"
            initial={{ opacity: 0, filter: 'blur(2px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(2px)' }}
            transition={{ duration: 0.14 }}
            className="inline-flex items-center gap-2"
          >
            {icon}
            <span>{idleLabel}</span>
          </motion.span>
        )}
        {phase === 'running' && (
          <motion.span
            key="running"
            initial={{ opacity: 0, filter: 'blur(2px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(2px)' }}
            transition={{ duration: 0.14 }}
            className="inline-flex items-center gap-2 tabular-nums"
          >
            <span className="w-3.5 h-3.5 rounded-full border-2 border-current border-t-transparent animate-spin" />
            <span>{pct}%</span>
          </motion.span>
        )}
        {phase === 'done' && (
          <motion.span
            key="done"
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(2px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(2px)' }}
            transition={EDITORIAL_SPRING}
            className="inline-flex items-center gap-1.5"
          >
            <Check className="w-3.5 h-3.5" />
            <span>{doneLabel}</span>
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

/* -------------------------------------------------------------------------- */
/* 5. Smooth List Row Collapse & Insertion (@emilkowalski / @benjitaylor)     */
/* -------------------------------------------------------------------------- */
export const SmoothListRow: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 10, scale: 0.985 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, scale: 0.96, y: -6, transition: { duration: 0.2 } }}
    transition={EDITORIAL_SPRING}
    className={className}
  >
    {children}
  </motion.div>
);
