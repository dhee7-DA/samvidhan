import React, { useState, useMemo } from 'react';
import {
  Share2,
  Search,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Sparkles,
  Layers,
  BookOpen,
  Scale,
  Award,
  ChevronRight,
  ExternalLink,
  Info,
  Filter
} from 'lucide-react';
import { CONCEPT_NODES, type ConceptNode } from '../../data/conceptWebData';
import { useTheme } from '../../context/ThemeContext';

export const ConceptWebGraphView: React.FC = () => {
  const { setActiveTab } = useTheme();
  const [selectedNodeId, setSelectedNodeId] = useState<string>('art-21');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCluster, setActiveCluster] = useState<string>('all');
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  // Selected node
  const selectedNode = useMemo(() => {
    return CONCEPT_NODES.find((n) => n.id === selectedNodeId) || CONCEPT_NODES[0];
  }, [selectedNodeId]);

  // Set of connected node IDs for the active node
  const activeConnectedIds = useMemo(() => {
    const set = new Set<string>();
    set.add(selectedNode.id);
    selectedNode.connections.forEach((c) => set.add(c));
    return set;
  }, [selectedNode]);

  // Generate unique edges
  const edges = useMemo(() => {
    const list: { from: ConceptNode; to: ConceptNode; key: string; isConnectedToActive: boolean }[] = [];
    const seen = new Set<string>();

    CONCEPT_NODES.forEach((source) => {
      source.connections.forEach((targetId) => {
        const target = CONCEPT_NODES.find((n) => n.id === targetId);
        if (!target) return;

        const edgeKey = [source.id, target.id].sort().join('---');
        if (!seen.has(edgeKey)) {
          seen.add(edgeKey);
          const isConnected =
            source.id === selectedNode.id || target.id === selectedNode.id;
          list.push({
            from: source,
            to: target,
            key: edgeKey,
            isConnectedToActive: isConnected
          });
        }
      });
    });

    return list;
  }, [selectedNode]);

  // Color mapping
  const getCategoryColor = (cat: ConceptNode['category']) => {
    switch (cat) {
      case 'article':
        return { text: 'text-sky-400', bg: 'bg-sky-500/20', border: 'border-sky-500', fill: '#38bdf8', stroke: '#0284c7' };
      case 'case':
        return { text: 'text-purple-400', bg: 'bg-purple-500/20', border: 'border-purple-500', fill: '#c084fc', stroke: '#9333ea' };
      case 'doctrine':
        return { text: 'text-emerald-400', bg: 'bg-emerald-500/20', border: 'border-emerald-500', fill: '#34d399', stroke: '#059669' };
      case 'amendment':
        return { text: 'text-amber-400', bg: 'bg-amber-500/20', border: 'border-amber-500', fill: '#fbbf24', stroke: '#d97706' };
    }
  };

  const handleActionJump = (node: ConceptNode) => {
    if (node.category === 'article') {
      setActiveTab('articles-master');
    } else if (node.category === 'case') {
      setActiveTab('judgments');
    } else if (node.category === 'doctrine') {
      setActiveTab('doctrines');
    } else if (node.category === 'amendment') {
      setActiveTab('amendments');
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Control Bar: Filters, Search & Zoom */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-sm space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Cluster filter tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {[
              { id: 'all', label: 'All Concepts (26)' },
              { id: 'liberty', label: 'Liberty & Privacy' },
              { id: 'equality', label: 'Equality & Social Justice' },
              { id: 'basic_structure', label: 'Basic Structure' },
              { id: 'federalism', label: 'Federalism & Emergencies' },
              { id: 'remedies', label: 'Writs & Remedies' }
            ].map((cl) => (
              <button
                key={cl.id}
                onClick={() => setActiveCluster(cl.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeCluster === cl.id
                    ? 'bg-purple-500 text-white shadow-sm'
                    : 'bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                {cl.label}
              </button>
            ))}
          </div>

          {/* Search & Zoom */}
          <div className="flex items-center gap-2">
            <div className="relative w-full sm:w-56">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Find node (e.g. 21, Kesavananda)..."
                className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:border-purple-500 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-1 p-1 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] shrink-0">
              <button
                onClick={() => setZoomLevel((z) => Math.max(0.7, z - 0.15))}
                className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="text-[10px] font-mono font-bold px-1 text-[var(--text-muted)]">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={() => setZoomLevel((z) => Math.min(1.5, z + 0.15))}
                className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setZoomLevel(1)}
                className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
                title="Reset Zoom"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 pt-1 text-[11px] font-mono border-t border-[var(--border-subtle)]">
          <span className="text-[var(--text-muted)] font-bold">Node Categories:</span>
          <span className="flex items-center gap-1.5 text-sky-400">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400" /> Articles (Part III/XX)
          </span>
          <span className="flex items-center gap-1.5 text-purple-400">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-400" /> Landmark Judgments
          </span>
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" /> Constitutional Doctrines
          </span>
          <span className="flex items-center gap-1.5 text-amber-400">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> Key Amendments
          </span>
        </div>
      </div>

      {/* Main Interactive Grid: SVG Canvas (8 Cols) + Dossier Inspector (4 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Interactive SVG Canvas */}
        <div className="lg:col-span-8 rounded-3xl bg-gradient-to-b from-[var(--bg-card)] via-[var(--bg-card)] to-purple-950/10 border border-[var(--border-subtle)] p-2 sm:p-4 shadow-xl relative overflow-hidden">
          <div className="w-full overflow-hidden rounded-2xl bg-[var(--bg-base)]/80 border border-[var(--border-subtle)] relative">
            <svg
              viewBox="0 0 1000 650"
              className="w-full h-auto max-h-[580px] transition-transform duration-300"
              style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
            >
              <defs>
                {/* Subtle Grid pattern */}
                <pattern id="webGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-border/20" />
                </pattern>
                {/* Glow filter */}
                <filter id="activeGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Background grid */}
              <rect width="1000" height="650" fill="url(#webGrid)" opacity="0.4" />

              {/* RENDER EDGES */}
              <g className="edges-layer">
                {edges.map((edge) => {
                  const isHighlighted = edge.isConnectedToActive;
                  const isMatchSearch =
                    !searchQuery ||
                    edge.from.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    edge.to.label.toLowerCase().includes(searchQuery.toLowerCase());

                  const strokeColor = isHighlighted ? '#c084fc' : '#64748b';
                  const strokeOpacity = isHighlighted ? 0.9 : 0.18;
                  const strokeWidth = isHighlighted ? 2.5 : 1;

                  return (
                    <line
                      key={edge.key}
                      x1={edge.from.x}
                      y1={edge.from.y}
                      x2={edge.to.x}
                      y2={edge.to.y}
                      stroke={strokeColor}
                      strokeOpacity={strokeOpacity}
                      strokeWidth={strokeWidth}
                      strokeDasharray={isHighlighted ? '4 2' : undefined}
                      className={isHighlighted ? 'animate-pulse' : undefined}
                    />
                  );
                })}
              </g>

              {/* RENDER NODES */}
              <g className="nodes-layer">
                {CONCEPT_NODES.map((node) => {
                  const isSelected = selectedNode.id === node.id;
                  const isConnected = activeConnectedIds.has(node.id);
                  const isClusterMatch = activeCluster === 'all' || node.cluster === activeCluster;
                  const isSearchMatch =
                    !searchQuery ||
                    node.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    node.summary.toLowerCase().includes(searchQuery.toLowerCase());

                  const color = getCategoryColor(node.category);
                  const nodeOpacity = isSelected ? 1 : isConnected && isClusterMatch ? 0.95 : isClusterMatch && isSearchMatch ? 0.45 : 0.15;
                  const radius = isSelected ? 24 : node.category === 'article' ? 20 : 16;

                  return (
                    <g
                      key={node.id}
                      onClick={() => setSelectedNodeId(node.id)}
                      className="cursor-pointer transition-all duration-300 group"
                      opacity={nodeOpacity}
                    >
                      {/* Outer pulse ring for selected node */}
                      {isSelected && (
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={radius + 8}
                          fill="none"
                          stroke={color.stroke}
                          strokeWidth="2"
                          strokeDasharray="4 2"
                          className="animate-spin"
                          style={{ animationDuration: '8s' }}
                        />
                      )}

                      {/* Main node circle */}
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={radius}
                        fill={isSelected ? color.fill : '#1e1e24'}
                        stroke={color.stroke}
                        strokeWidth={isSelected ? 3 : 2}
                        filter={isSelected ? 'url(#activeGlow)' : undefined}
                        className="transition-all duration-200 group-hover:scale-110"
                      />

                      {/* Text label */}
                      <text
                        x={node.x}
                        y={node.y + radius + 14}
                        textAnchor="middle"
                        fontSize={isSelected ? "11" : "10"}
                        fontWeight={isSelected ? "bold" : "600"}
                        fill={isSelected ? '#ffffff' : color.fill}
                        className="select-none pointer-events-none drop-shadow"
                      >
                        {node.label}
                      </text>
                    </g>
                  );
                })}
              </g>
            </svg>

            {/* Tap instruction */}
            <div className="absolute bottom-3 left-4 text-[10px] font-mono text-[var(--text-muted)] bg-[var(--bg-card)]/80 px-2.5 py-1 rounded-lg border border-[var(--border-subtle)] pointer-events-none">
              💡 Tap any node to illuminate its constitutional constellation & connections
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Node Inspector & Dossier (4 Cols) */}
        <div className="lg:col-span-4 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-6 space-y-5 shadow-xl">
          <div className="space-y-2 border-b border-[var(--border-subtle)] pb-4">
            <div className="flex items-center justify-between">
              <span
                className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                  getCategoryColor(selectedNode.category).bg
                } ${getCategoryColor(selectedNode.category).text} border ${
                  getCategoryColor(selectedNode.category).border
                }`}
              >
                {selectedNode.category}
              </span>
              <span className="text-xs font-mono text-[var(--text-muted)] capitalize">
                Cluster: {selectedNode.cluster.replace('_', ' ')}
              </span>
            </div>

            <h3 className="text-xl font-black text-[var(--text-primary)] leading-tight">
              {selectedNode.label}
            </h3>

            {selectedNode.articleAnchor && (
              <p className="text-xs font-mono text-[var(--text-muted)]">
                {selectedNode.articleAnchor}
              </p>
            )}
          </div>

          {/* Summary */}
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider block">
              CONSTITUTIONAL CORE:
            </span>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed bg-[var(--bg-base)] p-3.5 rounded-2xl border border-[var(--border-subtle)]">
              {selectedNode.summary}
            </p>
          </div>

          {/* Key Holdings / Doctrines */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider block">
              KEY CITATIONS & RATIOS:
            </span>
            <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
              {selectedNode.keyHoldings.map((holding, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                  <span>{holding}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive Connected Nodes List */}
          <div className="space-y-2 pt-2 border-t border-[var(--border-subtle)]">
            <div className="flex items-center justify-between text-[10px] font-mono text-[var(--text-muted)]">
              <span className="font-bold uppercase tracking-wider">
                CONNECTED NODES ({selectedNode.connections.length}):
              </span>
              <span>Click to traverse</span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {selectedNode.connections.map((connId) => {
                const target = CONCEPT_NODES.find((n) => n.id === connId);
                if (!target) return null;
                const cColor = getCategoryColor(target.category);

                return (
                  <button
                    key={connId}
                    onClick={() => setSelectedNodeId(connId)}
                    className={`px-2.5 py-1 rounded-xl text-xs font-medium border transition-all cursor-pointer bg-[var(--bg-base)] hover:border-purple-400 text-[var(--text-primary)] flex items-center gap-1.5`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${cColor.bg}`} />
                    <span>{target.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Action Button */}
          <div className="pt-3">
            <button
              onClick={() => handleActionJump(selectedNode)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-purple-500 text-white font-mono text-xs font-bold hover:bg-purple-600 transition-all shadow-md btn-tactile cursor-pointer"
            >
              <span>Explore in {selectedNode.category.toUpperCase()} Module</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
