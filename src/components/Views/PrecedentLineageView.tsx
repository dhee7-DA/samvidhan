import React, { useState } from 'react';
import {
  Award,
  GitBranch,
  Calendar,
  Scale,
  Users,
  CheckCircle2,
  ChevronRight,
  Shield,
  Sparkles,
  ArrowRight,
  Filter,
  Search,
  BookOpen,
  ExternalLink
} from 'lucide-react';
import type {
  PrecedentNode,
  LineageChain
} from '../../data/precedentLineagesData';
import {
  PRECEDENT_LINEAGES
} from '../../data/precedentLineagesData';
import { DETAILED_CASE_LAWS_BY_TOPIC } from '../../data/caseLawsDetailedData';
import { useTheme } from '../../context/ThemeContext';
import { ConceptWebGraphView } from './ConceptWebGraphView';

export type { PrecedentNode, LineageChain };
export { PRECEDENT_LINEAGES };

export const PrecedentLineageView: React.FC = () => {
  const { setActiveTab } = useTheme();
  const [subTab, setSubTab] = useState<'trees' | 'web'>('web');
  const [activeLineageId, setActiveLineageId] = useState<string>('art-21-liberty');
  const [selectedNodeId, setSelectedNodeId] = useState<string>('maneka-gandhi-1978');

  const currentLineage = PRECEDENT_LINEAGES.find((l) => l.id === activeLineageId) || PRECEDENT_LINEAGES[0];
  const selectedNode = currentLineage.nodes.find((n) => n.id === selectedNodeId) || currentLineage.nodes[0];

  const handleOpenJudgment = (node: PrecedentNode) => {
    const allCases = DETAILED_CASE_LAWS_BY_TOPIC.flatMap((g) => g.cases);
    const cleanNodeName = node.caseName.toLowerCase().trim();
    const matched = allCases.find((c) => {
      const cName = c.caseName.toLowerCase();
      return (
        cName.includes(cleanNodeName) ||
        cleanNodeName.includes(cName) ||
        (node.id.includes('maneka') && c.id.includes('maneka')) ||
        (node.id.includes('gopalan') && c.id.includes('gopalan')) ||
        (node.id.includes('kesavananda') && c.id.includes('kesavananda')) ||
        (node.id.includes('puttaswamy') && c.id.includes('puttaswamy')) ||
        (node.id.includes('minerva') && c.id.includes('minerva')) ||
        (node.id.includes('bommai') && c.id.includes('bommai')) ||
        (node.id.includes('indira') && c.id.includes('indira'))
      );
    });
    const targetCaseId = matched ? matched.id : allCases[0].id;
    try {
      localStorage.setItem('samvidhan_active_case', targetCaseId);
      window.dispatchEvent(new CustomEvent('samvidhan_navigate_case', { detail: targetCaseId }));
    } catch {
      // ignore
    }
    setActiveTab('judgments');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)] text-xs font-mono font-medium mb-2">
              <GitBranch className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>Constitutional Jurisprudence & Precedent Evolution (1950–2026)</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Constitutional Knowledge Graphs & Concept Web
            </h1>
            <p className="text-sm text-[var(--text-muted)] mt-1 max-w-2xl">
              Explore the living constitution through interactive constellation graph mapping and chronological landmark precedent lineage trees (1950–2026).
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] shrink-0">
            <button
              type="button"
              onClick={() => setSubTab('web')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                subTab === 'web'
                  ? 'bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] border border-[var(--border-strong)] shadow-sm'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>🗺️ Live Concept Web</span>
            </button>
            <button
              type="button"
              onClick={() => setSubTab('trees')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                subTab === 'trees'
                  ? 'bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] border border-[var(--border-strong)] shadow-sm'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              <GitBranch className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              <span>🌳 Precedent Trees</span>
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
                  onClick={() => {
                    setActiveLineageId(lineage.id);
                    setSelectedNodeId(lineage.nodes[0].id);
                  }}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    isActive
                      ? 'border-[var(--border-strong)] bg-[var(--bg-surface-elevated)] shadow-sm'
                      : 'border-[var(--border-subtle)] bg-[var(--bg-base)] hover:bg-[var(--bg-surface-elevated)]'
                  }`}
                >
                  <span className="text-[10px] font-mono font-bold text-[var(--accent)] block mb-1">
                    {lineage.articleAnchor.split('(')[0]}
                  </span>
                  <h4 className="text-xs md:text-sm font-bold text-[var(--text-primary)] leading-snug">
                    {lineage.title}
                  </h4>
                  <span className="text-[11px] text-[var(--text-muted)] block mt-1">
                    {lineage.nodes.length} Key Landmark Judgments
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {subTab === 'web' ? (
        <ConceptWebGraphView />
      ) : (
        /* Main Split Interface */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Interactive Timeline Flow */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm">
            <span className="text-xs font-mono font-medium text-[var(--text-muted)] uppercase tracking-wider block mb-1">
              Doctrinal Lineage Timeline
            </span>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              {currentLineage.description}
            </p>
          </div>

          <div className="relative pl-6 space-y-4 before:content-[''] before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-[var(--border-subtle)]">
            {currentLineage.nodes.map((node, nIdx) => {
              const isSelected = node.id === selectedNode.id;
              let statusBadge = 'bg-[var(--bg-base)] text-[var(--text-secondary)] border-[var(--border-subtle)]';
              if (node.status === 'Overruled') {
                statusBadge = 'bg-rose-500/10 text-rose-400 border-rose-500/30';
              } else if (node.status === 'Modified') {
                statusBadge = 'bg-amber-500/10 text-amber-400 border-amber-500/30';
              }

              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`relative p-4 rounded-2xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'border-[var(--border-strong)] bg-[var(--bg-surface-elevated)] shadow-md translate-x-1'
                      : 'border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--border-strong)]'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute -left-[19px] top-5 w-3 h-3 rounded-full border-2 border-[var(--bg-base)] transition-all ${
                      isSelected ? 'bg-[var(--text-primary)] ring-2 ring-[var(--border-strong)]' : 'bg-[var(--text-muted)]'
                    }`}
                  />

                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-mono font-bold text-[var(--text-primary)]">
                      {node.year}
                    </span>
                    <span className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded-full border ${statusBadge}`}>
                      {node.status}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-[var(--text-primary)] leading-snug">
                    {node.caseName}
                  </h3>

                  <div className="flex items-center gap-2 mt-2 text-[11px] text-[var(--text-muted)] font-mono">
                    <span>{node.benchSize}-Judge Bench</span>
                    <span>·</span>
                    <span>{node.majorityDissent}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Deep Precedent Analytical Breakdown */}
        <div className="lg:col-span-7">
          <div className="p-6 md:p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm space-y-6 sticky top-6 animate-in fade-in">
            {/* Header */}
            <div className="border-b border-[var(--border-subtle)] pb-4 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                  {selectedNode.benchType} · {selectedNode.benchSize}-Judge Bench ({selectedNode.year})
                </span>
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  {selectedNode.citation}
                </span>
              </div>

              <h2
                onClick={() => handleOpenJudgment(selectedNode)}
                className="text-xl md:text-2xl font-black text-[var(--text-primary)] tracking-tight hover:text-[var(--accent)] cursor-pointer transition-colors flex items-center gap-2 group"
                title={`Open full judgment for ${selectedNode.caseName}`}
              >
                <span>{selectedNode.caseName}</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--accent)]" />
              </h2>

              <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--text-muted)] pt-1">
                <span>
                  <strong className="text-[var(--text-primary)]">Majority/Dissent:</strong> {selectedNode.majorityDissent}
                </span>
                <span>
                  <strong className="text-[var(--text-primary)]">Key Judges:</strong> {selectedNode.authoringJudges}
                </span>
              </div>
            </div>

            {/* Core Ratio Decidendi */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text-secondary)] flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Binding Ratio Decidendi:</span>
              </span>
              <p className="text-sm md:text-base font-medium text-[var(--text-primary)] leading-relaxed font-serif p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
                "{selectedNode.coreRatio}"
              </p>
            </div>

            {/* Statutory & Doctrinal Impact */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text-secondary)] flex items-center gap-1.5">
                <Scale className="w-4 h-4 text-[var(--text-muted)]" />
                <span>Statutory & Courtroom Impact:</span>
              </span>
              <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs md:text-sm text-[var(--text-secondary)] font-mono leading-relaxed">
                {selectedNode.statutoryImpact}
              </div>
            </div>

            {/* Paradigm Shift */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text-secondary)] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                <span>Jurisprudential Paradigm Shift:</span>
              </span>
              <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">
                {selectedNode.paradigmShift}
              </div>
            </div>

            {/* Action Jump to Case Vault */}
            <div className="pt-2 border-t border-[var(--border-subtle)]">
              <button
                onClick={() => handleOpenJudgment(selectedNode)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[var(--accent)] hover:brightness-110 text-slate-900 font-mono text-xs font-bold transition-all shadow-md btn-tactile cursor-pointer"
              >
                <span>Open Full Landmark Judgment in Case Vault</span>
                <ExternalLink className="w-4 h-4 text-slate-900" />
              </button>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};
