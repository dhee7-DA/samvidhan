import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Bookmark, Play } from 'lucide-react';
import type { StudyActivitySnapshot } from '../../services/studyActivityService';

export const EDITORIAL_SPRING = {
  type: 'spring' as const,
  stiffness: 380,
  damping: 30,
  mass: 0.8,
};

export interface SegmentedOption<T extends string> {
  id: T;
  label: string;
  count?: number;
}

interface SlidingSegmentedControlProps<T extends string> {
  options: SegmentedOption<T>[];
  value: T;
  onChange: (value: T) => void;
  layoutGroupId: string;
  variant?: 'pill' | 'track';
  className?: string;
}

/**
 * Tactile spring-animated segmented control / filter pill bar with sliding active indicator.
 */
export function SlidingSegmentedControl<T extends string>({
  options,
  value,
  onChange,
  layoutGroupId,
  variant = 'track',
  className = '',
}: SlidingSegmentedControlProps<T>) {
  return (
    <div
      className={`inline-flex flex-wrap items-center gap-1 ${
        variant === 'track'
          ? 'p-1 rounded-full bg-[var(--bg-base)] border border-[var(--border-subtle)]'
          : 'gap-2'
      } ${className}`}
    >
      {options.map((opt) => {
        const isActive = opt.id === value;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors select-none cursor-pointer ${
              variant === 'pill' && !isActive
                ? 'border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                : isActive
                ? 'text-[var(--accent-contrast)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            {isActive && (
              <motion.span
                layoutId={layoutGroupId}
                transition={EDITORIAL_SPRING}
                className="absolute inset-0 rounded-full bg-[var(--accent)] shadow-sm"
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              <span>{opt.label}</span>
              {opt.count !== undefined && (
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isActive
                      ? 'bg-black/20 text-[var(--accent-contrast)]'
                      : 'bg-[var(--bg-surface-elevated)] text-[var(--text-muted)]'
                  }`}
                >
                  {opt.count}
                </span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}

interface StudyTelemetryCardProps {
  snapshot: StudyActivitySnapshot;
}

/**
 * Editorial Study Time & Activity Telemetry Card with Day/Week/Month sliding switch
 * and interactive hover/tap bar scrubbing.
 */
export const StudyTelemetryCard: React.FC<StudyTelemetryCardProps> = ({ snapshot }) => {
  const [range, setRange] = useState<'day' | 'week' | 'month'>('month');
  const bars =
    range === 'day'
      ? snapshot.dayBars
      : range === 'week'
      ? snapshot.weekBars
      : snapshot.monthBars;

  const defaultActiveIdx = Math.max(
    0,
    bars.findIndex((b) => b.isToday)
  );
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const activeIdx = hoveredIdx !== null ? hoveredIdx : defaultActiveIdx;

  const totalMins = bars.reduce((s, b) => s + (b.isFuture ? 0 : b.minutes), 0);
  const hours = Math.floor(totalMins / 60);
  const remMins = totalMins % 60;
  const maxMins = Math.max(30, ...bars.map((b) => b.minutes));
  const avgMins =
    range === 'month'
      ? snapshot.avgDailyMinutes
      : Math.round(totalMins / Math.max(1, bars.filter((b) => !b.isFuture).length));
  const avgBottomPct = Math.min(92, Math.max(10, Math.round((avgMins / maxMins) * 100)));

  return (
    <div className="p-5 sm:p-6 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col justify-between gap-4 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <span className="text-xs font-medium text-[var(--text-muted)]">Study time</span>
          <div className="flex items-baseline gap-2 mt-0.5">
            <motion.span
              key={`${range}-${totalMins}`}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={EDITORIAL_SPRING}
              className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-[var(--text-primary)] tabular-nums"
            >
              {hours > 0 ? `${hours}h ${remMins}m` : `${remMins}m`}
            </motion.span>
          </div>
          <p className="text-[11px] font-mono text-[var(--text-muted)] mt-0.5">
            {snapshot.monthLabel} · avg {avgMins} min/{range === 'day' ? 'block' : 'day'}
          </p>
        </div>

        <SlidingSegmentedControl
          layoutGroupId="study-telemetry-range"
          value={range}
          onChange={(v) => {
            setRange(v);
            setHoveredIdx(null);
          }}
          options={[
            { id: 'day', label: 'Day' },
            { id: 'week', label: 'Week' },
            { id: 'month', label: 'Month' },
          ]}
        />
      </div>

      {/* Interactive Bar Chart */}
      <div className="relative pt-7 pb-1">
        {/* Dashed Avg Line */}
        <div
          className="absolute left-0 right-0 border-t border-dashed border-[var(--border-strong)] pointer-events-none flex justify-end"
          style={{ bottom: `calc(${avgBottomPct * 0.72}% + 22px)` }}
        >
          <span className="text-[9px] font-mono text-[var(--text-muted)] bg-[var(--bg-surface)] px-1 -mt-2">
            avg {avgMins}m
          </span>
        </div>

        <div className="h-24 flex items-end gap-1 sm:gap-1.5">
          {bars.map((bar, idx) => {
            const isActive = idx === activeIdx && !bar.isFuture;
            const heightPct = bar.isFuture
              ? 0
              : Math.max(10, Math.round((bar.minutes / maxMins) * 100));

            return (
              <div
                key={`${range}-${bar.label}-${idx}`}
                onMouseEnter={() => !bar.isFuture && setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => !bar.isFuture && setHoveredIdx(idx)}
                className="relative flex-1 h-full flex flex-col justify-end items-center cursor-pointer group"
              >
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 4, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 2, scale: 0.9 }}
                      transition={EDITORIAL_SPRING}
                      className="absolute -top-6 z-20 px-1.5 py-0.5 rounded-md bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] shadow-sm text-[10px] font-mono font-bold text-[var(--text-primary)] whitespace-nowrap"
                    >
                      {bar.minutes}m
                    </motion.div>
                  )}
                </AnimatePresence>

                {bar.isFuture ? (
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--border-subtle)] mb-1" />
                ) : (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${heightPct}%` }}
                    transition={{ ...EDITORIAL_SPRING, delay: Math.min(idx * 0.012, 0.25) }}
                    className={`w-full max-w-[14px] rounded-t-sm transition-colors ${
                      isActive
                        ? 'bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.35)]'
                        : 'bg-[var(--border-strong)] group-hover:bg-[var(--accent)]/60'
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Axis labels */}
        <div className="flex justify-between text-[10px] font-mono text-[var(--text-muted)] mt-2 px-0.5">
          <span>{bars[0]?.label}</span>
          {bars.length > 8 && <span>{bars[Math.floor(bars.length / 2)]?.label}</span>}
          <span>{bars[bars.length - 1]?.label}</span>
        </div>
      </div>
    </div>
  );
};

interface StreakMatrixCardProps {
  snapshot: StudyActivitySnapshot;
}

/**
 * 30-Day Constitutional Streak Dot-Matrix Card.
 */
export const StreakMatrixCard: React.FC<StreakMatrixCardProps> = ({ snapshot }) => {
  return (
    <div className="p-5 sm:p-6 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col justify-between gap-4 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-[var(--text-primary)]">
          {snapshot.streakDays} day streak
        </span>
        <span className="text-xs font-mono text-[var(--text-muted)]">{snapshot.monthLabel}</span>
      </div>

      <div className="grid grid-cols-15 gap-1.5 sm:gap-2 py-1">
        {snapshot.streakDots.map((dot, idx) => {
          const colorCls = dot.isFuture
            ? 'bg-transparent border border-[var(--border-subtle)]'
            : dot.level === 3
            ? 'bg-emerald-500'
            : dot.level === 2
            ? 'bg-emerald-500/70'
            : dot.level === 1
            ? 'bg-emerald-500/35'
            : 'bg-[var(--bg-surface-elevated)]';

          return (
            <motion.div
              key={dot.date}
              title={`${dot.date}${dot.isToday ? ' (Today)' : ''}`}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ ...EDITORIAL_SPRING, delay: Math.min(idx * 0.015, 0.35) }}
              className={`aspect-square w-full max-w-[16px] mx-auto rounded-full ${colorCls} ${
                dot.isToday ? 'ring-2 ring-emerald-400 ring-offset-2 ring-offset-[var(--bg-surface)]' : ''
              }`}
            />
          );
        })}
      </div>

      <div className="flex justify-between text-[10px] font-mono text-[var(--text-muted)]">
        <span>{snapshot.streakDots[0]?.date}</span>
        <span>{snapshot.streakDots[snapshot.streakDots.length - 1]?.date}</span>
      </div>
    </div>
  );
};

export interface UpNextQueueItem {
  id: string;
  tag: string;
  subtitle: string;
  title: string;
  ctaLabel: string;
  onStart: () => void;
  onAudio?: () => void;
  onBookmark?: () => void;
  isBookmarked?: boolean;
}

interface UpNextHeroQueueProps {
  items: UpNextQueueItem[];
}

/**
 * Featured "Keeps your streak" Hero Card + faded "Up next" queue with spring promotion.
 */
export const UpNextHeroQueue: React.FC<UpNextHeroQueueProps> = ({ items }) => {
  const [skippedIds, setSkippedIds] = useState<string[]>([]);
  const activeQueue = items.filter((item) => !skippedIds.includes(item.id));
  const displayQueue = activeQueue.length > 0 ? activeQueue : items;
  const hero = displayQueue[0];
  const upNext = displayQueue.slice(1, 3);

  if (!hero) return null;

  return (
    <div className="space-y-3">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={hero.id}
          layout
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.97 }}
          transition={EDITORIAL_SPRING}
          className="p-5 sm:p-6 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm space-y-4"
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs">
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 font-semibold border border-emerald-500/25">
                {hero.tag}
              </span>
              <span className="text-[var(--text-muted)] font-mono">{hero.subtitle}</span>
            </div>
            {displayQueue.length > 1 && (
              <button
                type="button"
                onClick={() => setSkippedIds((prev) => [...prev, hero.id])}
                className="text-[11px] font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
              >
                Skip →
              </button>
            )}
          </div>

          <h4 className="text-base sm:text-lg font-bold text-[var(--text-primary)] leading-snug">
            {hero.title}
          </h4>

          <div className="flex items-center gap-2.5 pt-1">
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={EDITORIAL_SPRING}
              onClick={hero.onStart}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)] text-[var(--accent-contrast)] text-xs font-bold shadow-sm cursor-pointer"
            >
              <ArrowRight className="w-3.5 h-3.5" />
              <span>{hero.ctaLabel}</span>
            </motion.button>

            {hero.onAudio && (
              <motion.button
                type="button"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                transition={EDITORIAL_SPRING}
                onClick={hero.onAudio}
                title="Open Audio & Viva"
                className="w-8 h-8 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--accent)] flex items-center justify-center cursor-pointer"
              >
                <Play className="w-3.5 h-3.5" />
              </motion.button>
            )}

            {hero.onBookmark && (
              <motion.button
                type="button"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                transition={EDITORIAL_SPRING}
                onClick={hero.onBookmark}
                title="Bookmark"
                className={`w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer ${
                  hero.isBookmarked
                    ? 'border-[var(--accent)] bg-[var(--accent)]/15 text-[var(--accent)]'
                    : 'border-[var(--border-subtle)] bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--accent)]'
                }`}
              >
                <Bookmark className="w-3.5 h-3.5" />
              </motion.button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {upNext.length > 0 && (
        <div className="space-y-2 pt-1">
          <div className="flex items-center justify-between px-1 text-xs">
            <span className="font-bold text-[var(--text-secondary)]">Up next</span>
            <span className="font-mono text-[var(--text-muted)]">{displayQueue.length - 1} left</span>
          </div>
          {upNext.map((item, idx) => (
            <motion.button
              key={item.id}
              type="button"
              layout
              whileHover={{ x: 3 }}
              transition={EDITORIAL_SPRING}
              onClick={item.onStart}
              className={`w-full text-left p-3.5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-between gap-3 cursor-pointer transition-opacity ${
                idx === 0 ? 'opacity-85 hover:opacity-100' : 'opacity-60 hover:opacity-95'
              }`}
            >
              <div className="min-w-0">
                <div className="text-[11px] font-mono text-[var(--text-muted)]">
                  {item.tag} · {item.subtitle}
                </div>
                <div className="text-xs font-semibold text-[var(--text-primary)] truncate mt-0.5">
                  {item.title}
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[var(--text-muted)] shrink-0" />
            </motion.button>
          ))}
        </div>
      )}
    </div>
  );
};
