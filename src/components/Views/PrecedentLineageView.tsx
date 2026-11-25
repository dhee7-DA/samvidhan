import React, { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { springs, drawerRevealVariants } from '../../lib/motionTokens';
import {
  Award,
  GitBranch,
  Scale,
  Users,
  CheckCircle2,
  ChevronRight,
  Shield,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import type { PrecedentNode, LineageChain } from '../../data/precedentLineagesData';
import { PRECEDENT_LINEAGES } from '../../data/precedentLineagesData';
import { DETAILED_CASE_LAWS_BY_TOPIC } from '../../data/caseLawsDetailedData';
import { useTheme } from '../../context/ThemeContext';
import { ConceptWebGraphView } from './ConceptWebGraphView';

export type { PrecedentNode, LineageChain };
export { PRECEDENT_LINEAGES };

const LINEAGE_CASE_ID_MAP: Record<string, string> = {
  'gopalan-1950': 'case-gopalan',
  'maneka-gandhi-1978': 'case-maneka',
  'puttaswamy-2017': 'case-puttaswamy',
  'supriyo-2023': 'case-supriyo-marriage-2023',
  'adm-jabalpur-1976': 'case-adm-jabalpur-1976',
  'shankari-prasad-1951': 'case-shankari-prasad',
  'golak-nath-1967': 'case-golaknath',
  'kesavananda-1973': 'case-kesavananda-full',
  'ir-coelho-2007': 'case-ir-coelho',
  'anwar-ali-1952': 'case-anwar-ali',
  'royappa-1974': 'case-royappa',
  'shayara-bano-2017': 'case-shayara-bano',
  'navtej-2018': 'case-navtej-johar',
  'bommai-1994': 'case-bommai-federal'
};

function getStatusVisual(status: PrecedentNode['status']) {
  if (status === 'Overruled') {
    return {
      badgeClass: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30',
      stroke: '#e11d48',
      shortLabel: 'OVERRULED'
    };
  }
  if (status === 'Modified') {
    return {
      badgeClass: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30',
      stroke: '#0284c7',
      shortLabel: 'MODIFIED'
    };
  }
  return {
    badgeClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
    stroke: '#059669',
    shortLabel: 'BINDING LAW'
  };
}

export const PrecedentLineageView: React.FC = () => {
  const { setActiveTab } = useTheme();
  const [subTab, setSubTab] = useState<'trees' | 'web'>('web');
  const [activeLineageId, setActiveLineageId] = useState<string>('art-21-liberty');
  const [selectedNodeId, setSelectedNodeId] = useState<string>('maneka-gandhi-1978');

  const currentLineage = PRECEDENT_LINEAGES.find((l) => l.id === activeLineageId) || PRECEDENT_LINEAGES[0];
  const selectedNode = currentLineage.nodes.find((n) => n.id === selectedNodeId) || currentLineage.nodes[0];

  const resolveLineageJump = useCallback(
    (node: PrecedentNode) => {
      if (node.id === 'minerva-mills-1980') {
        return {
          ctaLabel: 'Open Chariot Harmony (Minerva Mills) in Doctrines',
          execute: () => {
            try {
              localStorage.setItem('samvidhan_active_doctrine', 'harmonious-construction');
              window.dispatchEvent(
                new CustomEvent('samvidhan_navigate_doctrine', {
                  detail: { doctrineId: 'harmonious-construction' }
                })
              );
            } catch {
              // ignore
            }
            setActiveTab('doctrines');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        };
      }

      if (node.id === 'kharak-singh-1962') {
        return {
          ctaLabel: 'Open Puttaswamy Privacy Analysis in Case Vault',
          execute: () => {
            try {
              localStorage.setItem('samvidhan_active_case', 'case-puttaswamy');
              window.dispatchEvent(new CustomEvent('samvidhan_navigate_case', { detail: 'case-puttaswamy' }));
            } catch {
              // ignore
            }
            setActiveTab('judgments');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        };
      }

      if (node.id === 'rajasthan-1977' || node.id === 'rameshwar-2006') {
        return {
          ctaLabel: 'Open Art 356 Evolution (S.R. Bommai) in Case Vault',
          execute: () => {
            try {
              localStorage.setItem('samvidhan_active_case', 'case-bommai-federal');
              window.dispatchEvent(new CustomEvent('samvidhan_navigate_case', { detail: 'case-bommai-federal' }));
            } catch {
              // ignore
            }
            setActiveTab('judgments');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        };
      }

      const allCases = DETAILED_CASE_LAWS_BY_TOPIC.flatMap((g) => g.cases);
      const explicitCaseId = LINEAGE_CASE_ID_MAP[node.id];
      const cleanNodeName = node.caseName.toLowerCase().trim();
      const matched =
        allCases.find((c) => c.id === explicitCaseId) ||
        allCases.find((c) => {
          const cName = c.caseName.toLowerCase();
          return cName.includes(cleanNodeName) || cleanNodeName.includes(cName);
        });
      const targetCaseId = matched ? matched.id : 'case-kesavananda-full';

      return {
        ctaLabel: 'Open Full Landmark Judgment in Case Vault',
        execute: () => {
          try {
            localStorage.setItem('samvidhan_active_case', targetCaseId);
            window.dispatchEvent(new CustomEvent('samvidhan_navigate_case', { detail: targetCaseId }));
          } catch {
            // ignore
          }
          setActiveTab('judgments');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      };
    },
    [setActiveTab]
  );

  const selectedJump = resolveLineageJump(selectedNode);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6 animate-fadeIn">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)] text-xs font-mono font-medium mb-2">
              <GitBranch className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>Constitutional Jurisprudence &amp; Precedent Evolution (1950&ndash;2026)</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Constitutional Knowledge Graphs &amp; Concept Web
            </h1>
            <p className="text-sm text-[var(--text-muted)] mt-1 max-w-2xl">
              Explore the living Constitution through interactive constellation mapping, shortest judicial path discovery, and chronological precedent evolution trees.
            </p>
          </div>

          {/* Sub-tab Switcher (Zero Emojis) */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] shrink-0">
            <button
              type="button"
              onClick={() => setSubTab('web')}
              className={`relative flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer z-10 ${
                subTab === 'web'
                  ? 'text-[var(--text-primary)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              {subTab === 'web' && (
                <motion.span
                  layoutId="knowledgeGraphTabPill"
                  transition={springs.snappy}
                  className="absolute inset-0 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] shadow-xs -z-10"
                />
              )}
              <Sparkles className={`w-3.5 h-3.5 ${subTab === 'web' ? 'text-[var(--accent)]' : 'text-[var(--text-muted)]'}`} />
              <span>Live Concept Web</span>
            </button>
            <button
              type="button"
              onClick={() => setSubTab('trees')}
              className={`relative flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer z-10 ${
                subTab === 'trees'
                  ? 'text-[var(--text-primary)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              {subTab === 'trees' && (
                <motion.span
                  layoutId="knowledgeGraphTabPill"
                  transition={springs.snappy}
                  className="absolute inset-0 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] shadow-xs -z-10"
                />
              )}
              <GitBranch className={`w-3.5 h-3.5 ${subTab === 'trees' ? 'text-[var(--accent)]' : 'text-[var(--text-muted)]'}`} />
              <span>Precedent Trees</span>
            </button>
          </div>
        </div>

        {subTab === 'trees' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6 pt-5 border-t border-[var(--border-subtle)]">
            {PRECEDENT_LINEAGES.map((lineage) => {
              const isActive = lineage.id === activeLineageId;
              return (
                <button
                  key={lineage.id}
                  type="button"
                  onClick={() => {
                    setActiveLineageId(lineage.id);
                    setSelectedNodeId(lineage.nodes[0].id);
                  }}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    isActive
                      ? 'border-[var(--accent)] bg-[var(--bg-surface-elevated)] shadow-sm'
                      : 'border-[var(--border-subtle)] bg-[var(--bg-base)] hover:border-[var(--border-strong)] hover:bg-[var(--bg-surface-elevated)]'
                  }`}
                >
                  <span className="text-[10px] font-mono font-bold text-[var(--accent)] block mb-1">
                    {lineage.articleAnchor.split('(')[0]}
                  </span>
                  <h4 className="text-xs md:text-sm font-bold text-[var(--text-primary)] leading-snug">
                    {lineage.title}
                  </h4>
                  <span className="text-[11px] text-[var(--text-muted)] block mt-1 font-mono">
                    {lineage.nodes.length} Key Landmark Judgments
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {subTab === 'web' ? (
          <motion.div
            key="web-view"
            variants={drawerRevealVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <ConceptWebGraphView />
          </motion.div>
        ) : (
          <motion.div
            key="trees-view"
            variants={drawerRevealVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="space-y-6"
          >
          {/* Interactive Chronological Vector Evolution Graph */}
          <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--accent)]">
                  Evolutionary Precedent Flow &middot; {currentLineage.articleAnchor}
                </span>
                <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                  {currentLineage.description}
                </p>
              </div>
              <div className="flex items-center gap-3 text-[10px] font-mono text-[var(--text-muted)]">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" /> Binding Law
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-sky-500" /> Modified
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-rose-500" /> Overruled
                </span>
              </div>
            </div>

            <div className="w-full overflow-x-auto pb-1">
              <svg viewBox="0 0 960 186" className="w-full min-w-[700px] h-auto select-none font-mono">
                <defs>
                  <pattern id="treeDotGrid" width="24" height="24" patternUnits="userSpaceOnUse">
                    <circle cx="1.5" cy="1.5" r="0.8" fill="var(--border-strong)" opacity="0.35" />
                  </pattern>
                  <marker id="treeArrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                    <path d="M 0 0 L 8 3 L 0 6 z" fill="var(--accent)" />
                  </marker>
                  <marker id="treeArrowMuted" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                    <path d="M 0 0 L 8 3 L 0 6 z" fill="var(--border-strong)" />
                  </marker>
                </defs>

                <rect x="0" y="0" width="960" height="186" rx="12" fill="var(--bg-base)" stroke="var(--border-subtle)" />
                <rect x="0" y="0" width="960" height="186" rx="12" fill="url(#treeDotGrid)" />

                {(() => {
                  const total = currentLineage.nodes.length;
                  const padX = 105;
                  const usable = 960 - padX * 2;
                  const step = total > 1 ? usable / (total - 1) : 0;

                  return currentLineage.nodes.map((node, idx) => {
                    const x = padX + idx * step;
                    const y = 84;
                    const isSel = node.id === selectedNode.id;
                    const visual = getStatusVisual(node.status);
                    const shortTitle = node.caseName
                      .replace('Justice ', '')
                      .replace('State of ', '')
                      .replace('In re ', '')
                      .split(' v. ')[0]
                      .split(' (')[0]
                      .trim();

                    return (
                      <React.Fragment key={node.id}>
                        {idx < total - 1 && (
                          <line
                            x1={x + 26}
                            y1={y}
                            x2={x + step - 27}
                            y2={y}
                            stroke={isSel ? 'var(--accent)' : 'var(--border-strong)'}
                            strokeWidth={isSel ? 2.2 : 1.5}
                            strokeDasharray={isSel || node.status === 'Overruled' ? '5 3' : undefined}
                            className={isSel ? 'vector-flow-dash' : undefined}
                            markerEnd={isSel ? 'url(#treeArrow)' : 'url(#treeArrowMuted)'}
                          />
                        )}

                        <g
                          transform={`translate(${x}, ${y})`}
                          onClick={() => setSelectedNodeId(node.id)}
                          className="cursor-pointer"
                        >
                          {/* Status pill above node */}
                          <rect
                            x="-46"
                            y="-54"
                            width="92"
                            height="18"
                            rx="9"
                            fill="var(--bg-surface)"
                            stroke={visual.stroke}
                            strokeWidth={isSel ? 1.4 : 0.8}
                          />
                          <text
                            x="0"
                            y="-42"
                            textAnchor="middle"
                            fontSize="7.5"
                            fontWeight="bold"
                            fill={visual.stroke}
                          >
                            {visual.shortLabel}
                          </text>

                          {/* Active orbit ring */}
                          {isSel && (
                            <circle
                              cx="0"
                              cy="0"
                              r="26"
                              fill="none"
                              stroke="var(--accent)"
                              strokeWidth="1.6"
                              strokeDasharray="3 2"
                              className="vector-orbit-pulse"
                            />
                          )}

                          {/* Node Year Circle */}
                          <circle
                            cx="0"
                            cy="0"
                            r={isSel ? 21 : 17}
                            fill={isSel ? visual.stroke : 'var(--bg-surface)'}
                            stroke={isSel ? 'var(--accent)' : visual.stroke}
                            strokeWidth={isSel ? 2.5 : 1.8}
                          />
                          <text
                            x="0"
                            y="3.5"
                            textAnchor="middle"
                            fontSize={isSel ? '10' : '9'}
                            fontWeight="bold"
                            fill={isSel ? '#ffffff' : 'var(--text-primary)'}
                          >
                            {node.year}
                          </text>

                          {/* Label Box Below Node */}
                          <rect
                            x="-66"
                            y="30"
                            width="132"
                            height="34"
                            rx="6"
                            fill={isSel ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
                            stroke={isSel ? 'var(--accent)' : 'var(--border-subtle)'}
                            strokeWidth={isSel ? 1.3 : 0.8}
                          />
                          <text
                            x="0"
                            y="44"
                            textAnchor="middle"
                            fontSize="8.5"
                            fontWeight="bold"
                            fill="var(--text-primary)"
                          >
                            {shortTitle.length > 18 ? `${shortTitle.slice(0, 16)}..` : shortTitle}
                          </text>
                          <text x="0" y="57" textAnchor="middle" fontSize="7.2" fill="var(--text-muted)">
                            {node.benchSize}-Judge Bench
                          </text>
                        </g>
                      </React.Fragment>
                    );
                  });
                })()}
              </svg>
            </div>
          </div>

          {/* Main Split Interface: Timeline + Ratio Dossier */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Interactive Timeline Flow */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative pl-6 space-y-4 before:content-[''] before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-[var(--border-subtle)]">
                {currentLineage.nodes.map((node) => {
                  const isSelected = node.id === selectedNode.id;
                  const visual = getStatusVisual(node.status);

                  return (
                    <div
                      key={node.id}
                      onClick={() => setSelectedNodeId(node.id)}
                      className={`relative p-4 rounded-xl border transition-all cursor-pointer group ${
                        isSelected
                          ? 'border-[var(--accent)] bg-[var(--bg-surface-elevated)] shadow-sm'
                          : 'border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--border-strong)] hover:bg-[var(--bg-surface-elevated)]'
                      }`}
                    >
                      {/* Connector Circle */}
                      <div
                        className={`absolute -left-[22px] top-6 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                          isSelected
                            ? 'bg-[var(--accent)] border-[var(--accent)] scale-110'
                            : 'bg-[var(--bg-base)] border-[var(--border-strong)] group-hover:border-[var(--accent)]'
                        }`}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${
                            isSelected ? 'bg-[var(--accent-contrast)]' : 'bg-[var(--text-muted)]'
                          }`}
                        />
                      </div>

                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="text-xs font-mono font-bold text-[var(--accent)] tabular-nums">
                            {node.year}
                          </span>
                          <h3 className="text-sm font-bold text-[var(--text-primary)] mt-0.5 leading-snug">
                            {node.caseName}
                          </h3>
                          <span className="text-[11px] font-mono text-[var(--text-muted)] block mt-0.5">
                            {node.benchSize}-Judge Bench &bull; {node.majorityDissent}
                          </span>
                        </div>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border shrink-0 ${visual.badgeClass}`}>
                          {node.status}
                        </span>
                      </div>

                      <div className="mt-2 pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] text-[var(--text-muted)]">
                        <span className="truncate font-mono">{node.citation}</span>
                        <ChevronRight
                          className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                            isSelected ? 'translate-x-1 text-[var(--accent)]' : ''
                          }`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Precedent Judicial Breakdown */}
            <div className="lg:col-span-7">
              <div className="p-6 md:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm space-y-6">
                <div className="border-b border-[var(--border-subtle)] pb-5">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)] text-xs font-mono font-bold">
                      {selectedNode.benchType} &bull; {selectedNode.benchSize}-Judge Bench ({selectedNode.year})
                    </span>
                    <span className="text-xs font-mono font-bold text-[var(--text-muted)] tabular-nums">
                      {selectedNode.citation}
                    </span>
                  </div>
                  <h2 className="text-2xl font-extrabold text-[var(--text-primary)] tracking-tight">
                    {selectedNode.caseName}
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--text-muted)] mt-2">
                    <span className="flex items-center gap-1.5">
                      <Scale className="w-3.5 h-3.5 text-[var(--accent)]" />
                      <strong>Majority/Dissent:</strong> {selectedNode.majorityDissent}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[var(--accent)]" />
                      <strong>Key Judges:</strong> {selectedNode.authoringJudges}
                    </span>
                  </div>
                </div>

                {/* Core Ratio */}
                <div className="space-y-2">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text-secondary)] flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-[var(--accent)]" />
                    <span>Binding Ratio Decidendi</span>
                  </span>
                  <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-sm text-[var(--text-primary)] leading-relaxed font-serif italic">
                    &ldquo;{selectedNode.coreRatio}&rdquo;
                  </div>
                </div>

                {/* Statutory Impact & Paradigm Shift */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1.5">
                    <span className="text-[11px] font-mono font-semibold text-[var(--accent)] uppercase tracking-wider flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5" />
                      <span>Statutory &amp; Structural Impact</span>
                    </span>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {selectedNode.statutoryImpact}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1.5">
                    <span className="text-[11px] font-mono font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Jurisprudential Paradigm Shift</span>
                    </span>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {selectedNode.paradigmShift}
                    </p>
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-2 border-t border-[var(--border-subtle)]">
                  <button
                    type="button"
                    onClick={selectedJump.execute}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[var(--accent)] hover:brightness-110 text-[var(--accent-contrast)] font-mono text-xs font-bold transition-all shadow-sm btn-tactile cursor-pointer"
                  >
                    <span>{selectedJump.ctaLabel}</span>
                    <ExternalLink className="w-4 h-4 shrink-0" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
