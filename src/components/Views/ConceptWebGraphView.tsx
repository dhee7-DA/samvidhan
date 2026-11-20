import React, { useState, useMemo, useRef, useCallback, useEffect } from 'react';
import {
  Search,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Sparkles,
  Layers,
  ExternalLink,
  Info,
  Maximize2,
  Minimize2,
  GitMerge,
  Compass,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  X,
  Share2,
  Zap,
  Activity
} from 'lucide-react';
import {
  CONCEPT_NODES,
  CONCEPT_EDGES,
  findConstitutionalPath,
  type ConceptNode,
  type ConceptEdge
} from '../../data/conceptWebData';
import { useTheme } from '../../context/ThemeContext';

export const ConceptWebGraphView: React.FC = () => {
  const { setActiveTab } = useTheme();

  // Mode: 'explore' | 'pathfinder'
  const [viewMode, setViewMode] = useState<'explore' | 'pathfinder'>('explore');

  // Exploration state
  const [selectedNodeId, setSelectedNodeId] = useState<string>('art-21');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCluster, setActiveCluster] = useState<string>('all');

  // Path Finder state
  const [pathStartId, setPathStartId] = useState<string>('art-21');
  const [pathEndId, setPathEndId] = useState<string>('kesavananda');

  // Fullscreen state
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [dossierCollapsed, setDossierCollapsed] = useState<boolean>(false);

  // Pan & Zoom state
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState<boolean>(false);
  const [panStart, setPanStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Node Positions (allow dragging)
  const [nodePositions, setNodePositions] = useState<Record<string, { x: number; y: number }>>(() => {
    const initial: Record<string, { x: number; y: number }> = {};
    CONCEPT_NODES.forEach((n) => {
      initial[n.id] = { x: n.x, y: n.y };
    });
    return initial;
  });

  const [draggingNodeId, setDraggingNodeId] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const svgRef = useRef<SVGSVGElement | null>(null);

  // Escape key listener for fullscreen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  // Selected node object
  const selectedNode = useMemo(() => {
    return CONCEPT_NODES.find((n) => n.id === selectedNodeId) || CONCEPT_NODES[0];
  }, [selectedNodeId]);

  // Active connected node IDs in exploration mode
  const activeConnectedIds = useMemo(() => {
    const set = new Set<string>();
    set.add(selectedNode.id);
    selectedNode.connections.forEach((c) => set.add(c));
    return set;
  }, [selectedNode]);

  // Calculated Path for Path-Finder mode
  const calculatedPath = useMemo(() => {
    if (viewMode !== 'pathfinder') return null;
    return findConstitutionalPath(pathStartId, pathEndId);
  }, [viewMode, pathStartId, pathEndId]);

  const pathNodeSet = useMemo(() => {
    return new Set<string>(calculatedPath?.pathNodeIds || []);
  }, [calculatedPath]);

  // Unique edges formatted with current coordinates
  const edgesWithCoords = useMemo(() => {
    return CONCEPT_EDGES.map((edge) => {
      const fromPos = nodePositions[edge.from] || { x: 0, y: 0 };
      const toPos = nodePositions[edge.to] || { x: 0, y: 0 };
      const fromNode = CONCEPT_NODES.find((n) => n.id === edge.from);
      const toNode = CONCEPT_NODES.find((n) => n.id === edge.to);

      const isConnectedToSelected =
        edge.from === selectedNode.id || edge.to === selectedNode.id;

      const isPathEdge =
        viewMode === 'pathfinder' &&
        pathNodeSet.has(edge.from) &&
        pathNodeSet.has(edge.to) &&
        calculatedPath?.pathEdges.some(
          (pe) =>
            (pe.from === edge.from && pe.to === edge.to) ||
            (pe.from === edge.to && pe.to === edge.from)
        );

      return {
        ...edge,
        fromPos,
        toPos,
        fromNode,
        toNode,
        isConnectedToSelected,
        isPathEdge: !!isPathEdge
      };
    });
  }, [nodePositions, selectedNode, viewMode, pathNodeSet, calculatedPath]);

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

  // Convert SVG coordinates
  const getSvgCoordinates = useCallback((e: React.PointerEvent) => {
    if (!svgRef.current) return { x: 0, y: 0 };
    const rect = svgRef.current.getBoundingClientRect();
    const rawX = e.clientX - rect.left;
    const rawY = e.clientY - rect.top;

    // Normalize through viewBox scale (1000 x 650)
    const scaleX = 1000 / rect.width;
    const scaleY = 650 / rect.height;

    // Remove pan & zoom
    const x = (rawX * scaleX - panOffset.x) / zoomLevel;
    const y = (rawY * scaleY - panOffset.y) / zoomLevel;
    return { x, y };
  }, [panOffset, zoomLevel]);

  // Pointer Down on Node (Start Drag)
  const handleNodePointerDown = (nodeId: string, e: React.PointerEvent) => {
    e.stopPropagation();
    const { x, y } = getSvgCoordinates(e);
    const current = nodePositions[nodeId];
    if (current) {
      setDragOffset({ x: current.x - x, y: current.y - y });
      setDraggingNodeId(nodeId);
      setSelectedNodeId(nodeId);
    }
  };

  // Pointer Down on Canvas (Start Pan)
  const handleCanvasPointerDown = (e: React.PointerEvent) => {
    if (draggingNodeId) return;
    setIsPanning(true);
    setPanStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
  };

  // Pointer Move (Dragging node or panning canvas)
  const handlePointerMove = (e: React.PointerEvent) => {
    if (draggingNodeId) {
      const { x, y } = getSvgCoordinates(e);
      setNodePositions((prev) => ({
        ...prev,
        [draggingNodeId]: {
          x: Math.max(30, Math.min(970, x + dragOffset.x)),
          y: Math.max(30, Math.min(620, y + dragOffset.y))
        }
      }));
    } else if (isPanning) {
      setPanOffset({
        x: e.clientX - panStart.x,
        y: e.clientY - panStart.y
      });
    }
  };

  // Pointer Up (End Drag or Pan)
  const handlePointerUp = () => {
    setDraggingNodeId(null);
    setIsPanning(false);
  };

  // Reset positions
  const handleResetPositions = () => {
    const initial: Record<string, { x: number; y: number }> = {};
    CONCEPT_NODES.forEach((n) => {
      initial[n.id] = { x: n.x, y: n.y };
    });
    setNodePositions(initial);
    setPanOffset({ x: 0, y: 0 });
    setZoomLevel(1);
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
    <div
      className={`space-y-4 animate-fadeIn transition-all ${
        isFullscreen
          ? 'fixed inset-0 z-50 bg-[#07070b] p-4 sm:p-6 overflow-hidden flex flex-col justify-between'
          : 'relative'
      }`}
    >
      {/* Top Cockpit Header & Control Ribbon */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-card)]/90 backdrop-blur-md border border-[var(--border-subtle)] shadow-md space-y-3">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          {/* View Mode Switcher: Constellation vs Path-Finder */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] shrink-0 shadow-inner">
            <button
              onClick={() => setViewMode('explore')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'explore'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Constellation Explorer</span>
            </button>
            <button
              onClick={() => setViewMode('pathfinder')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'pathfinder'
                  ? 'bg-amber-500 text-black shadow-sm font-black'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              <GitMerge className="w-3.5 h-3.5" />
              <span>Constitutional Path-Finder</span>
            </button>
          </div>

          {/* Path-Finder Node Selectors (When in Pathfinder mode) */}
          {viewMode === 'pathfinder' ? (
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="flex items-center gap-1.5 text-xs font-mono">
                <span className="text-[var(--text-muted)] font-bold">Start:</span>
                <select
                  value={pathStartId}
                  onChange={(e) => setPathStartId(e.target.value)}
                  className="px-2.5 py-1 rounded-xl bg-[var(--bg-base)] border border-amber-500/40 text-xs text-amber-300 font-bold focus:outline-none"
                >
                  {CONCEPT_NODES.map((n) => (
                    <option key={n.id} value={n.id}>
                      {n.label} ({n.category})
                    </option>
                  ))}
                </select>
              </div>

              <ArrowRight className="w-4 h-4 text-amber-400 shrink-0" />

              <div className="flex items-center gap-1.5 text-xs font-mono">
                <span className="text-[var(--text-muted)] font-bold">Target:</span>
                <select
                  value={pathEndId}
                  onChange={(e) => setPathEndId(e.target.value)}
                  className="px-2.5 py-1 rounded-xl bg-[var(--bg-base)] border border-purple-500/40 text-xs text-purple-300 font-bold focus:outline-none"
                >
                  {CONCEPT_NODES.map((n) => (
                    <option key={n.id} value={n.id}>
                      {n.label} ({n.category})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ) : (
            /* Cluster filter tabs in explore mode */
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
              {[
                { id: 'all', label: 'All 42 Nodes' },
                { id: 'preamble', label: 'Preamble' },
                { id: 'liberty', label: 'Liberty & Privacy' },
                { id: 'equality', label: 'Equality' },
                { id: 'dpsp', label: 'DPSP Harmony' },
                { id: 'basic_structure', label: 'Basic Structure' },
                { id: 'federalism', label: 'Federalism' },
                { id: 'remedies', label: 'Writs & Remedies' }
              ].map((cl) => (
                <button
                  key={cl.id}
                  onClick={() => setActiveCluster(cl.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    activeCluster === cl.id
                      ? 'bg-purple-600 text-white shadow-sm'
                      : 'bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {cl.label}
                </button>
              ))}
            </div>
          )}

          {/* Search, Zoom & Fullscreen Toolbar */}
          <div className="flex items-center gap-2 self-end lg:self-auto shrink-0">
            {viewMode === 'explore' && (
              <div className="relative w-40 sm:w-48">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Find concept..."
                  className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:border-purple-500 focus:outline-none"
                />
              </div>
            )}

            {/* Zoom Controls */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] shrink-0">
              <button
                onClick={() => setZoomLevel((z) => Math.max(0.6, z - 0.15))}
                className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="text-[10px] font-mono font-bold px-1 text-[var(--text-muted)]">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={() => setZoomLevel((z) => Math.min(2.0, z + 0.15))}
                className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleResetPositions}
                className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
                title="Reset Positions & Zoom"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Fullscreen Button */}
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-2 rounded-xl bg-purple-600/15 border border-purple-500/30 text-purple-300 hover:bg-purple-600/25 transition-all cursor-pointer"
              title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen Cockpit'}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Pathfinder Rationale Banner (when in pathfinder mode) */}
        {viewMode === 'pathfinder' && calculatedPath && (
          <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-500/15 via-purple-500/15 to-card border border-amber-500/30 text-xs space-y-1 animate-fadeIn">
            <div className="flex items-center gap-2 font-mono font-bold text-amber-400">
              <Sparkles className="w-4 h-4" />
              <span>JUDICIAL BRIDGE DISCOVERED ({calculatedPath.pathNodeIds.length - 1} LEAPS):</span>
            </div>
            <p className="text-[var(--text-primary)] leading-relaxed font-medium">
              {calculatedPath.rationale}
            </p>
          </div>
        )}
      </div>

      {/* Main Interactive Stage: SVG Canvas with Floating Glass Dossier */}
      <div
        className={`relative w-full rounded-3xl overflow-hidden border border-[var(--border-subtle)] bg-[#09090f] shadow-2xl ${
          isFullscreen ? 'flex-1' : 'h-[620px]'
        }`}
      >
        {/* Interactive SVG Canvas */}
        <svg
          ref={svgRef}
          viewBox="0 0 1000 650"
          className="w-full h-full cursor-grab active:cursor-grabbing select-none"
          onPointerDown={handleCanvasPointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          <defs>
            {/* Dark Cybernetic Grid */}
            <pattern id="matrixGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#252538" strokeWidth="0.5" opacity="0.4" />
            </pattern>

            {/* Glowing Nebulas */}
            <radialGradient id="nebulaCenter" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="nebulaRight" cx="80%" cy="50%" r="45%">
              <stop offset="0%" stopColor="#059669" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0" />
            </radialGradient>

            {/* Neon Glow Filters */}
            <filter id="neonPulse" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="goldPathGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Canvas Background and Nebulas */}
          <rect width="1000" height="650" fill="#09090f" />
          <rect width="1000" height="650" fill="url(#matrixGrid)" />
          <circle cx="500" cy="325" r="350" fill="url(#nebulaCenter)" />
          <circle cx="850" cy="350" r="280" fill="url(#nebulaRight)" />

          {/* TRANSFORMED LAYER (Pan & Zoom) */}
          <g transform={`translate(${panOffset.x}, ${panOffset.y}) scale(${zoomLevel})`}>
            {/* LAYER 1: EDGES */}
            <g className="edges-layer">
              {edgesWithCoords.map((edge, i) => {
                const isSelectedConn = edge.isConnectedToSelected;
                const isPath = edge.isPathEdge;

                let strokeColor = '#334155';
                let strokeOpacity = 0.25;
                let strokeWidth = 1.2;
                let dashArray: string | undefined = undefined;

                if (isPath) {
                  strokeColor = '#fbbf24';
                  strokeOpacity = 1;
                  strokeWidth = 3.5;
                  dashArray = '6 3';
                } else if (isSelectedConn && viewMode === 'explore') {
                  strokeColor = '#c084fc';
                  strokeOpacity = 0.95;
                  strokeWidth = 2.5;
                  dashArray = '4 2';
                }

                // Midpoint for relationship label
                const midX = (edge.fromPos.x + edge.toPos.x) / 2;
                const midY = (edge.fromPos.y + edge.toPos.y) / 2;

                return (
                  <g key={`${edge.from}-${edge.to}-${i}`}>
                    <line
                      x1={edge.fromPos.x}
                      y1={edge.fromPos.y}
                      x2={edge.toPos.x}
                      y2={edge.toPos.y}
                      stroke={strokeColor}
                      strokeOpacity={strokeOpacity}
                      strokeWidth={strokeWidth}
                      strokeDasharray={dashArray}
                      filter={isPath ? 'url(#goldPathGlow)' : undefined}
                      className={isPath || isSelectedConn ? 'animate-pulse' : undefined}
                    />

                    {/* Edge Relationship Badge (On active connection or path) */}
                    {(isPath || (isSelectedConn && viewMode === 'explore')) && (
                      <g transform={`translate(${midX}, ${midY})`}>
                        <rect
                          x="-32"
                          y="-9"
                          width="64"
                          height="18"
                          rx="9"
                          fill="#090913"
                          stroke={isPath ? '#fbbf24' : '#c084fc'}
                          strokeWidth="1"
                          opacity="0.9"
                        />
                        <text
                          y="3"
                          textAnchor="middle"
                          fontSize="8"
                          fontWeight="bold"
                          fontFamily="monospace"
                          fill={isPath ? '#fbbf24' : '#c084fc'}
                          className="select-none pointer-events-none"
                        >
                          {edge.relation}
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}
            </g>

            {/* LAYER 2: NODES */}
            <g className="nodes-layer">
              {CONCEPT_NODES.map((node) => {
                const pos = nodePositions[node.id] || { x: node.x, y: node.y };
                const isSelected = selectedNode.id === node.id;
                const isConnected = activeConnectedIds.has(node.id);
                const isPathNode = pathNodeSet.has(node.id);
                const isClusterMatch = activeCluster === 'all' || node.cluster === activeCluster;
                const isSearchMatch =
                  !searchQuery ||
                  node.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  node.summary.toLowerCase().includes(searchQuery.toLowerCase());

                const color = getCategoryColor(node.category);

                // Opacity hierarchy
                let opacity = 0.2;
                if (viewMode === 'pathfinder') {
                  opacity = isPathNode ? 1 : 0.15;
                } else if (isSelected) {
                  opacity = 1;
                } else if (isConnected && isClusterMatch) {
                  opacity = 0.95;
                } else if (isClusterMatch && isSearchMatch) {
                  opacity = 0.55;
                }

                const radius = isSelected || isPathNode ? 24 : node.category === 'article' ? 19 : 16;

                return (
                  <g
                    key={node.id}
                    onPointerDown={(e) => handleNodePointerDown(node.id, e)}
                    className="cursor-grab active:cursor-grabbing group transition-opacity duration-300"
                    opacity={opacity}
                  >
                    {/* Glowing outer orbit ring for selected node or path node */}
                    {(isSelected || isPathNode) && (
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r={radius + 8}
                        fill="none"
                        stroke={isPathNode ? '#fbbf24' : color.stroke}
                        strokeWidth="2"
                        strokeDasharray="4 2"
                        className="animate-spin"
                        style={{ animationDuration: '9s' }}
                      />
                    )}

                    {/* Main Node Circle */}
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={radius}
                      fill={isSelected ? color.fill : isPathNode ? '#fbbf24' : '#14141f'}
                      stroke={isPathNode ? '#fbbf24' : color.stroke}
                      strokeWidth={isSelected || isPathNode ? 3.5 : 2}
                      filter={isSelected || isPathNode ? 'url(#neonPulse)' : undefined}
                      className="transition-all duration-150 group-hover:scale-110"
                    />

                    {/* Node Text Label */}
                    <text
                      x={pos.x}
                      y={pos.y + radius + 13}
                      textAnchor="middle"
                      fontSize={isSelected || isPathNode ? '11' : '10'}
                      fontWeight={isSelected || isPathNode ? 'bold' : '600'}
                      fill={isSelected ? '#ffffff' : isPathNode ? '#fbbf24' : color.fill}
                      className="select-none pointer-events-none drop-shadow"
                    >
                      {node.label}
                    </text>
                  </g>
                );
              })}
            </g>
          </g>
        </svg>

        {/* HUD Overlay: Navigation Help */}
        <div className="absolute top-4 left-4 pointer-events-none space-y-1">
          <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[var(--text-muted)]">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Drag any node to reposition • Pan canvas by dragging background</span>
          </div>
        </div>

        {/* FLOATING GLASS DOSSIER SIDEBAR (Desktop Cockpit) */}
        <div
          className={`absolute top-4 right-4 bottom-4 transition-all duration-300 z-10 flex flex-col ${
            dossierCollapsed ? 'w-12' : 'w-80 sm:w-96'
          }`}
        >
          {dossierCollapsed ? (
            <button
              onClick={() => setDossierCollapsed(false)}
              className="p-3 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/15 text-purple-400 hover:text-white shadow-2xl transition-all cursor-pointer self-end"
              title="Expand Dossier"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          ) : (
            <div className="h-full rounded-3xl bg-black/80 backdrop-blur-xl border border-white/15 p-5 shadow-2xl overflow-y-auto flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                {/* Dossier Header */}
                <div className="flex items-start justify-between border-b border-white/10 pb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                          getCategoryColor(selectedNode.category).bg
                        } ${getCategoryColor(selectedNode.category).text} border ${
                          getCategoryColor(selectedNode.category).border
                        }`}
                      >
                        {selectedNode.category}
                      </span>
                      <span className="text-[10px] font-mono text-[var(--text-muted)] capitalize">
                        {selectedNode.cluster.replace('_', ' ')}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-white mt-1 leading-snug">
                      {selectedNode.label}
                    </h3>

                    {selectedNode.articleAnchor && (
                      <p className="text-[11px] font-mono text-purple-300/80">
                        {selectedNode.articleAnchor}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={() => setDossierCollapsed(true)}
                    className="p-1.5 rounded-xl hover:bg-white/10 text-[var(--text-muted)] hover:text-white transition-all cursor-pointer"
                    title="Collapse Dossier"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Constitutional Core */}
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider block">
                    CONSTITUTIONAL CORE:
                  </span>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed bg-white/5 p-3 rounded-2xl border border-white/5">
                    {selectedNode.summary}
                  </p>
                </div>

                {/* Key Citations & Ratios */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider block">
                    KEY HOLDINGS & PRECEDENT ANCHORS:
                  </span>
                  <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
                    {selectedNode.keyHoldings.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Interactive Connected Nodes with Relationship Tags */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[var(--text-muted)]">
                    <span className="font-bold uppercase tracking-wider">
                      CONNECTED CONCEPTS ({selectedNode.connections.length}):
                    </span>
                    <span>Click to hop</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto pr-1">
                    {selectedNode.connections.map((connId) => {
                      const target = CONCEPT_NODES.find((n) => n.id === connId);
                      if (!target) return null;
                      const cColor = getCategoryColor(target.category);

                      // Find relationship label
                      const rel = CONCEPT_EDGES.find(
                        (e) =>
                          (e.from === selectedNode.id && e.to === connId) ||
                          (e.from === connId && e.to === selectedNode.id)
                      );

                      return (
                        <button
                          key={connId}
                          onClick={() => setSelectedNodeId(connId)}
                          className="px-2.5 py-1 rounded-xl text-[11px] font-medium border border-white/10 bg-white/5 hover:border-purple-400 text-white transition-all cursor-pointer flex items-center gap-1.5"
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${cColor.bg}`} />
                          <span>{target.label}</span>
                          {rel && (
                            <span className="text-[9px] font-mono text-[var(--text-muted)] opacity-60">
                              · {rel.relation}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Action Jump Button */}
              <div className="pt-3 border-t border-white/10">
                <button
                  onClick={() => handleActionJump(selectedNode)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-purple-600 text-white font-mono text-xs font-bold hover:bg-purple-500 transition-all shadow-md btn-tactile cursor-pointer"
                >
                  <span>Explore in {selectedNode.category.toUpperCase()} Module</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
