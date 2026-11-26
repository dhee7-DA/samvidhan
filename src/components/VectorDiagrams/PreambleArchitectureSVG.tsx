import React, { useState } from 'react';
import { BookOpen, Sparkles, Scale, Compass, CheckCircle } from 'lucide-react';
import { PREAMBLE_DATA } from '../../data/preambleData';

export const PreambleArchitectureSVG: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    {
      id: 'source',
      title: 'Source of Sovereign Power',
      badge: 'WE, THE PEOPLE OF INDIA',
      sub: 'Constituent Supremacy & Popular Sovereignty',
      desc: 'Sovereignty in India does not emanate from the British Crown, a monarch, or a religious text; it is vested in the collective, democratic will of the people of India.',
      articles: 'Preamble, Articles 325, 326 (Universal Adult Suffrage)',
      color: '#38bdf8'
    },
    {
      id: 'nature',
      title: 'Nature of the Sovereign Polity',
      badge: 'SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC',
      sub: 'Five Structural Characteristics',
      desc: 'External independence, mixed welfare economy (Excel Wear), positive religious neutrality (S.R. Bommai), representative parliamentary democracy, and an elected head of state (no hereditary king).',
      amendmentNote: '42nd Amendment (1976) added SOCIALIST and SECULAR.',
      articles: 'Preamble, Articles 52, 75, 25-28, 38',
      color: '#a855f7'
    },
    {
      id: 'objectives',
      title: 'Four Core Objectives',
      badge: 'JUSTICE • LIBERTY • EQUALITY • FRATERNITY',
      sub: 'The Teleological End of the Republic',
      desc: 'Social, economic, and political justice (Russian Rev 1917); Liberty of thought, belief, and worship (French Rev 1789); Equality of status and opportunity; Fraternity assuring human dignity and national integrity.',
      amendmentNote: '42nd Amendment (1976) added "and integrity".',
      articles: 'Articles 14-18 (Equality), 19-22 (Liberty), 38-39 (Justice), 51A (Fraternity)',
      color: '#10b981'
    },
    {
      id: 'enactment',
      title: 'Adoption & Dedication',
      badge: '26TH NOVEMBER 1949 / 26TH JANUARY 1950',
      sub: 'Constituent Assembly Enactment',
      desc: 'Adopted and enacted in the Constituent Assembly on 26 Nov 1949 (National Constitution Day); came into full force on 26 Jan 1950 (Republic Day) to commemorate the 1930 Purna Swaraj declaration.',
      articles: 'Articles 393 (Short Title), 394 (Commencement)',
      color: 'var(--accent)'
    }
  ];

  return (
    <div className="w-full flex flex-col gap-6 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <BookOpen className="w-5 h-5 text-[var(--accent)]" />
            <h3 className="text-xl font-semibold text-[var(--text-primary)]">The Preamble Architecture</h3>
            <span className="text-xs px-2 py-0.5 rounded font-mono bg-[var(--badge-bg)] text-[var(--text-secondary)] border border-[var(--badge-border)]">
              Fountainhead of the Republic
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            Deconstruction of the ideological pipeline, 42nd Amendment modifications, and constituent authority.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-[var(--text-secondary)] border border-[var(--border-subtle)] px-2.5 py-1 rounded bg-[var(--bg-base)]">
            Kesavananda Bharati (1973): Integral Part of Basic Structure
          </span>
        </div>
      </div>

      {/* Interactive Vector Flowchart */}
      <div className="w-full overflow-x-auto pb-2">
        <svg
          viewBox="0 0 960 220"
          className="w-full h-auto select-none font-mono"
        >
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="var(--border-strong)" />
            </marker>
          </defs>

          {/* Background connectors */}
          <line x1="210" y1="100" x2="265" y2="100" stroke="var(--border-strong)" strokeWidth="2" strokeDasharray="3 3" markerEnd="url(#arrow)" />
          <line x1="450" y1="100" x2="505" y2="100" stroke="var(--border-strong)" strokeWidth="2" strokeDasharray="3 3" markerEnd="url(#arrow)" />
          <line x1="690" y1="100" x2="745" y2="100" stroke="var(--border-strong)" strokeWidth="2" strokeDasharray="3 3" markerEnd="url(#arrow)" />

          {/* 4 Stages */}
          {stages.map((stage, idx) => {
            const x = 30 + idx * 240;
            const isSelected = activeStage === idx;
            return (
              <g
                key={stage.id}
                className="vector-node cursor-pointer"
                onClick={() => setActiveStage(idx)}
                transform={`translate(${x}, 30)`}
              >
                {/* Node Box */}
                <rect
                  x="0"
                  y="0"
                  width="180"
                  height="140"
                  rx="10"
                  fill={isSelected ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
                  stroke={isSelected ? stage.color : 'var(--border-subtle)'}
                  strokeWidth={isSelected ? '2' : '1'}
                />

                {/* Step indicator */}
                <circle
                  cx="24"
                  cy="24"
                  r="12"
                  fill={isSelected ? stage.color : 'var(--bg-base)'}
                  stroke={stage.color}
                  strokeWidth="1.5"
                />
                <text
                  x="24"
                  y="28"
                  textAnchor="middle"
                  fill={isSelected ? '#09090b' : stage.color}
                  fontSize="11"
                  fontWeight="bold"
                >
                  {idx + 1}
                </text>

                {/* Title */}
                <text
                  x="44"
                  y="28"
                  fill="var(--text-primary)"
                  fontSize="11"
                  fontWeight="600"
                >
                  STAGE 0{idx + 1}
                </text>

                <line x1="16" y1="46" x2="164" y2="46" stroke="var(--border-subtle)" strokeWidth="0.8" />

                {/* Main Label */}
                <text x="16" y="66" fill="var(--text-secondary)" fontSize="9" fontWeight="bold">
                  {stage.title.toUpperCase()}
                </text>

                {/* Badge text */}
                <rect
                  x="12"
                  y="76"
                  width="156"
                  height="34"
                  rx="4"
                  fill="var(--bg-base)"
                  stroke={isSelected ? stage.color : 'var(--border-subtle)'}
                  strokeWidth="0.8"
                />
                <text
                  x="20"
                  y="92"
                  fill={isSelected ? stage.color : 'var(--text-primary)'}
                  fontSize="8"
                  fontWeight="bold"
                >
                  {idx === 0
                    ? 'WE, THE PEOPLE'
                    : idx === 1
                    ? 'SOVEREIGN SOCIALIST'
                    : idx === 2
                    ? 'JUSTICE • LIBERTY'
                    : '26 NOV 1949'}
                </text>
                <text
                  x="20"
                  y="103"
                  fill="var(--text-muted)"
                  fontSize="7.5"
                >
                  {idx === 1
                    ? 'SECULAR DEMOCRATIC...'
                    : idx === 2
                    ? 'EQUALITY • FRATERNITY'
                    : idx === 0
                    ? 'Popular Sovereignty'
                    : 'Enacted & Adopted'}
                </text>

                {/* Select button */}
                <text
                  x="90"
                  y="126"
                  textAnchor="middle"
                  fill={isSelected ? stage.color : 'var(--text-muted)'}
                  fontSize="8.5"
                  fontWeight="600"
                >
                  {isSelected ? '● ACTIVE INSPECTION' : 'CLICK TO EXPAND'}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* In-depth Stage Inspector */}
      {(() => {
        const cur = stages[activeStage];
        return (
          <div className="flex flex-col md:flex-row gap-6 p-5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
            <div className="flex-1 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: cur.color }} />
                <h4 className="text-lg font-bold text-[var(--text-primary)]">{cur.title}</h4>
              </div>

              <div className="text-xs font-mono font-semibold text-[var(--accent)] bg-[var(--bg-base)] px-3 py-1.5 rounded border border-[var(--border-subtle)] inline-block w-fit">
                {cur.badge}
              </div>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {cur.desc}
              </p>

              {cur.amendmentNote && (
                <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-primary)] bg-[var(--bg-base)] p-2.5 rounded border border-[var(--border-subtle)]">
                  <Sparkles className="w-4 h-4 shrink-0 text-[var(--accent)]" />
                  <span>{cur.amendmentNote}</span>
                </div>
              )}
            </div>

            <div className="md:w-80 flex flex-col gap-3 border-t md:border-t-0 md:border-l border-[var(--border-subtle)] md:pl-6">
              <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
                Constitutional Anchor Articles
              </span>
              <p className="text-xs font-mono text-[var(--text-primary)] bg-[var(--bg-base)] p-3 rounded-lg border border-[var(--border-subtle)]">
                {cur.articles}
              </p>

              <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mt-2">
                Interpretive Maxim
              </span>
              <p className="text-xs italic text-[var(--text-muted)] font-serif">
                "The Preamble is the key to open the minds of the makers, which may show the goal which it was intended to achieve."
              </p>
            </div>
          </div>
        );
      })()}
    </div>
  );
};
