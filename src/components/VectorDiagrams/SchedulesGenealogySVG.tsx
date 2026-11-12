import React, { useState } from 'react';
import { Calendar, CheckCircle2, Bookmark, ExternalLink } from 'lucide-react';
import { SCHEDULES_DATA } from '../../data/schedulesData';
import type { ScheduleItem } from '../../types/constitution';

export const SchedulesGenealogySVG: React.FC = () => {
  const [selectedSchedule, setSelectedSchedule] = useState<ScheduleItem>(SCHEDULES_DATA[6]); // 7th Schedule default

  return (
    <div className="w-full flex flex-col gap-6 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Calendar className="w-5 h-5 text-[var(--accent)]" />
            <h3 className="text-xl font-semibold text-[var(--text-primary)]">The 12 Schedules Architecture</h3>
            <span className="text-xs px-2 py-0.5 rounded font-mono bg-[var(--badge-bg)] text-[var(--text-secondary)] border border-[var(--badge-border)]">
              Mnemonic: "TEARS OF OLD PM"
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            Explore all 12 Schedules from the original 8 to modern additions through the classic mnemonic framework.
          </p>
        </div>
      </div>

      {/* SVG Mnemonic Rail Matrix */}
      <div className="w-full overflow-x-auto pb-2">
        <svg
          viewBox="0 0 960 140"
          className="w-full min-w-[760px] h-auto select-none font-mono"
        >
          {SCHEDULES_DATA.map((sch, idx) => {
            const x = 20 + idx * 78;
            const isSelected = selectedSchedule.number === sch.number;
            const isLaterAddition = sch.number > 8; // 9th to 12th added by amendments

            return (
              <g
                key={sch.number}
                className="vector-node cursor-pointer"
                onClick={() => setSelectedSchedule(sch)}
                transform={`translate(${x}, 20)`}
              >
                {/* Node Box */}
                <rect
                  x="0"
                  y="0"
                  width="70"
                  height="96"
                  rx="8"
                  fill={isSelected ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
                  stroke={isSelected ? 'var(--accent)' : 'var(--border-subtle)'}
                  strokeWidth={isSelected ? '2' : '1'}
                />

                {/* Top Number */}
                <text x="35" y="18" textAnchor="middle" fill="var(--text-muted)" fontSize="8">
                  SCH {sch.number}
                </text>

                {/* Mnemonic Big Letter */}
                <text
                  x="35"
                  y="52"
                  textAnchor="middle"
                  fill={isSelected ? 'var(--accent)' : isLaterAddition ? 'var(--gold)' : 'var(--text-primary)'}
                  fontSize="24"
                  fontWeight="bold"
                >
                  {sch.mnemonicLetter}
                </text>

                {/* Mnemonic Keyword */}
                <text
                  x="35"
                  y="74"
                  textAnchor="middle"
                  fill="var(--text-secondary)"
                  fontSize="7.5"
                  fontWeight="600"
                >
                  {sch.mnemonicKeyword.slice(0, 8)}
                </text>

                {/* Amendment indicator */}
                {isLaterAddition && (
                  <circle cx="60" cy="10" r="3" fill="var(--gold)" />
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Selected Schedule Inspector */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-[var(--accent)] text-[var(--accent-contrast)]">
              {selectedSchedule.roman}
            </span>
            <h4 className="text-base font-bold text-[var(--text-primary)]">
              {selectedSchedule.title}
            </h4>
          </div>

          <p className="text-xs font-mono text-[var(--accent)] bg-[var(--bg-base)] p-2 rounded border border-[var(--border-subtle)]">
            Articles Covered: {selectedSchedule.articlesCovered}
          </p>

          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            {selectedSchedule.subject}
          </p>

          <div className="flex flex-col gap-1 mt-1">
            <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
              Historical Evolution & Amendments
            </span>
            <p className="text-xs text-[var(--text-muted)] italic leading-relaxed">
              {selectedSchedule.historicalEvolution}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t md:border-t-0 md:border-l border-[var(--border-subtle)] md:pl-6">
          <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">
            Constitutional Substantive Provisions
          </span>
          <div className="flex flex-col gap-2">
            {selectedSchedule.details.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 p-2.5 rounded bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)]">
                <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-[var(--emerald)] shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
