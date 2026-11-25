import React, { useState, useMemo, useRef, useCallback, useEffect } from 'react';
import {
  Search,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Sparkles,
  ExternalLink,
  Maximize2,
  Minimize2,
  GitMerge,
  Compass,
  ArrowLeftRight,
  ChevronRight,
  ChevronLeft,
  X,
  Focus
} from 'lucide-react';
import {
  CONCEPT_NODES,
  CONCEPT_EDGES,
  findConstitutionalPath,
  type ConceptNode,
  type ConceptEdge
} from '../../data/conceptWebData';
import { DETAILED_CASE_LAWS_BY_TOPIC } from '../../data/caseLawsDetailedData';
import { DOCTRINES_DATA } from '../../data/doctrinesData';
import { useTheme } from '../../context/ThemeContext';

const VB_WIDTH = 1120;
const VB_HEIGHT = 720;

interface ClusterMeta {
  id: 'all' | ConceptNode['cluster'];
  label: string;
}

const CLUSTER_META: ClusterMeta[] = [
  { id: 'all', label: 'All Concepts' },
  { id: 'preamble', label: 'Preamble' },
  { id: 'liberty', label: 'Liberty & Privacy' },
  { id: 'equality', label: 'Equality' },
  { id: 'basic_structure', label: 'Basic Structure' },
  { id: 'federalism', label: 'Federalism' },
  { id: 'remedies', label: 'Writs & Remedies' },
  { id: 'dpsp', label: 'DPSP Harmony' },
  { id: 'judiciary', label: 'Judiciary' }
];

const CATEGORY_STYLE: Record<
  ConceptNode['category'],
  { label: string; glyph: string; stroke: string; solid: string; badgeClass: string; dotClass: string }
> = {
  article: {
    label: 'Article',
    glyph: '§',
    stroke: '#0284c7',
    solid: '#0369a1',
    badgeClass: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30',
    dotClass: 'bg-sky-500'
  },
  case: {
    label: 'Landmark Case',
    glyph: 'SC',
    stroke: '#7c3aed',
    solid: '#6d28d9',
    badgeClass: 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/30',
    dotClass: 'bg-violet-500'
  },
  doctrine: {
    label: 'Doctrine',
    glyph: 'DR',
    stroke: '#059669',
    solid: '#047857',
    badgeClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
    dotClass: 'bg-emerald-500'
  },
  amendment: {
    label: 'Amendment',
    glyph: '+',
    stroke: '#be123c',
    solid: '#9f1239',
    badgeClass: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30',
    dotClass: 'bg-rose-500'
  }
};

const CASE_ID_MAP: Record<string, string> = {
  berubari: 'case-berubari',
  gopalan: 'case-gopalan',
  maneka: 'case-maneka',
  puttaswamy: 'case-puttaswamy',
  'mc-mehta': 'case-mc-mehta-oleum',
  'indra-sawhney': 'case-indra-sawhney',
  'janhit-abhiyan': 'case-janhit-abhiyan',
  'shayara-bano': 'case-shayara-bano',
  'navtej-johar': 'case-navtej-johar',
  'shankari-prasad': 'case-shankari-prasad',
  'golak-nath': 'case-golaknath',
  kesavananda: 'case-kesavananda-full',
  'ir-coelho': 'case-ir-coelho',
  'sr-bommai': 'case-bommai-federal'
};

interface ResolvedJump {
  ctaLabel: string;
  destination: string;
  execute: () => void;
}

export const ConceptWebGraphView: React.FC = () => {
  const { setActiveTab, setSelectedSvgId } = useTheme();

  // Mode: 'explore' | 'pathfinder'
  const [viewMode, setViewMode] = useState<'explore' | 'pathfinder'>('explore');

  // Exploration state
  const [selectedNodeId, setSelectedNodeId] = useState<string>('art-21');
  const [selectedEdgeIndex, setSelectedEdgeIndex] = useState<number | null>(null);
  const [hoveredEdgeIndex, setHoveredEdgeIndex] = useState<number | null>(null);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchFocused, setSearchFocused] = useState<boolean>(false);
  const [activeCluster, setActiveCluster] = useState<'all' | ConceptNode['cluster']>('all');

  // Path-Finder state
  const [pathStartId, setPathStartId] = useState<string>('art-21');
  const [pathEndId, setPathEndId] = useState<string>('kesavananda');

  // Layout state
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [dossierCollapsed, setDossierCollapsed] = useState<boolean>(false);

  // Pan & Zoom state (in SVG viewBox units)
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState<boolean>(false);

  // Dragging refs
  const svgRef = useRef<SVGSVGElement | null>(null);
  const dragNodeRef = useRef<{
    nodeId: string;
    downClient: { x: number; y: number };
    startWorld: { x: number; y: number };
    origPos: { x: number; y: number };
    moved: boolean;
  } | null>(null);
  const justDraggedRef = useRef<boolean>(false);
  const panStartRef = useRef<{
    startVb: { x: number; y: number };
    origPan: { x: number; y: number };
  } | null>(null);

  const [draggingNodeId, setDraggingNodeId] = useState<string | null>(null);

  // Mutable node coordinates for smooth drag exploration
  const [nodePositions, setNodePositions] = useState<Record<string, { x: number; y: number }>>(() => {
    const initial: Record<string, { x: number; y: number }> = {};
    CONCEPT_NODES.forEach((n) => {
      initial[n.id] = { x: n.x, y: n.y };
    });
    return initial;
  });

  // Escape exits fullscreen cleanly
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  const nodeMap = useMemo(() => {
    const map = new Map<string, ConceptNode>();
    CONCEPT_NODES.forEach((n) => map.set(n.id, n));
    return map;
  }, []);

  const selectedNode = useMemo(() => {
    return nodeMap.get(selectedNodeId) || CONCEPT_NODES[0];
  }, [nodeMap, selectedNodeId]);

  const clusterCounts = useMemo(() => {
    const counts: Record<string, number> = { all: CONCEPT_NODES.length };
    CONCEPT_NODES.forEach((n) => {
      counts[n.cluster] = (counts[n.cluster] || 0) + 1;
    });
    return counts;
  }, []);

  // Derive single-source-of-truth neighbors directly from CONCEPT_EDGES
  const connectedRelations = useMemo(() => {
    const result: Array<{ neighbor: ConceptNode; edge: ConceptEdge; direction: 'outgoing' | 'incoming'; edgeIndex: number }> = [];
    const seenNeighborIds = new Set<string>();

    CONCEPT_EDGES.forEach((edge, edgeIndex) => {
      if (edge.from === selectedNode.id) {
        const target = nodeMap.get(edge.to);
        if (target && !seenNeighborIds.has(target.id)) {
          seenNeighborIds.add(target.id);
          result.push({ neighbor: target, edge, direction: 'outgoing', edgeIndex });
        }
      } else if (edge.to === selectedNode.id) {
        const source = nodeMap.get(edge.from);
        if (source && !seenNeighborIds.has(source.id)) {
          seenNeighborIds.add(source.id);
          result.push({ neighbor: source, edge, direction: 'incoming', edgeIndex });
        }
      }
    });
    return result;
  }, [selectedNode.id, nodeMap]);

  const activeConnectedIds = useMemo(() => {
    const set = new Set<string>([selectedNode.id]);
    connectedRelations.forEach((r) => set.add(r.neighbor.id));
    return set;
  }, [selectedNode.id, connectedRelations]);

  // Search filter matches
  const searchMatches = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return CONCEPT_NODES.filter(
      (n) =>
        n.label.toLowerCase().includes(q) ||
        n.summary.toLowerCase().includes(q) ||
        (n.articleAnchor || '').toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const searchMatchIds = useMemo(() => {
    return new Set(searchMatches.map((n) => n.id));
  }, [searchMatches]);

  // Path-Finder shortest bridge calculation
  const calculatedPath = useMemo(() => {
    if (viewMode !== 'pathfinder') return null;
    return findConstitutionalPath(pathStartId, pathEndId);
  }, [viewMode, pathStartId, pathEndId]);

  const pathNodeSet = useMemo(() => {
    return new Set<string>(calculatedPath?.pathNodeIds || []);
  }, [calculatedPath]);

  // Precompute deterministic curve offsets so parallel chords stay separate
  const edgeCurveOffsets = useMemo(() => {
    const pairCounts = new Map<string, number>();
    return CONCEPT_EDGES.map((e, idx) => {
      const pairKey = [e.from, e.to].sort().join('::');
      const seen = pairCounts.get(pairKey) || 0;
      pairCounts.set(pairKey, seen + 1);
      const baseSign = idx % 2 === 0 ? 1 : -1;
      if (seen === 0) return baseSign * 14;
      return -baseSign * (20 + seen * 10);
    });
  }, []);

  // Convert pointer screen position accurately to SVG viewBox coords accounting for preserveAspectRatio
  const getViewBoxPoint = useCallback((clientX: number, clientY: number) => {
    const svg = svgRef.current;
    if (!svg) return { x: VB_WIDTH / 2, y: VB_HEIGHT / 2 };
    const rect = svg.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return { x: VB_WIDTH / 2, y: VB_HEIGHT / 2 };

    const uniformScale = Math.min(rect.width / VB_WIDTH, rect.height / VB_HEIGHT);
    const letterboxX = (rect.width - VB_WIDTH * uniformScale) / 2;
    const letterboxY = (rect.height - VB_HEIGHT * uniformScale) / 2;

    return {
      x: (clientX - rect.left - letterboxX) / uniformScale,
      y: (clientY - rect.top - letterboxY) / uniformScale
    };
  }, []);

  const getWorldCoords = useCallback(
    (clientX: number, clientY: number) => {
      const vb = getViewBoxPoint(clientX, clientY);
      return {
        x: (vb.x - panOffset.x) / zoomLevel,
        y: (vb.y - panOffset.y) / zoomLevel
      };
    },
    [getViewBoxPoint, panOffset, zoomLevel]
  );

  // Zoom around the center of the viewBox
  const applyZoom = useCallback(
    (nextZoomRaw: number, focalVbX = VB_WIDTH / 2, focalVbY = VB_HEIGHT / 2) => {
      const nextZoom = Math.max(0.6, Math.min(2.15, Number(nextZoomRaw.toFixed(2))));
      setPanOffset((prev) => {
        const ratio = nextZoom / zoomLevel;
        return {
          x: focalVbX - (focalVbX - prev.x) * ratio,
          y: focalVbY - (focalVbY - prev.y) * ratio
        };
      });
      setZoomLevel(nextZoom);
    },
    [zoomLevel]
  );

  const centerOnNode = useCallback(
    (nodeId: string, targetZoom?: number) => {
      const pos = nodePositions[nodeId] || nodeMap.get(nodeId);
      if (!pos) return;
      const z = targetZoom ?? Math.max(zoomLevel, 1.12);
      setZoomLevel(z);
      setPanOffset({
        x: VB_WIDTH / 2 - pos.x * z,
        y: VB_HEIGHT / 2 - pos.y * z
      });
    },
    [nodeMap, nodePositions, zoomLevel]
  );

  const handleResetView = useCallback(() => {
    const initial: Record<string, { x: number; y: number }> = {};
    CONCEPT_NODES.forEach((n) => {
      initial[n.id] = { x: n.x, y: n.y };
    });
    setNodePositions(initial);
    setPanOffset({ x: 0, y: 0 });
    setZoomLevel(1);
    setActiveCluster('all');
    setSearchQuery('');
    setSelectedEdgeIndex(null);
  }, []);

  // Node Pointer Down: ONLY starts potential drag (never selects/navigates prematurely!)
  const handleNodePointerDown = (nodeId: string, e: React.PointerEvent) => {
    e.stopPropagation();
    const pos = nodePositions[nodeId];
    if (!pos) return;
    justDraggedRef.current = false;
    dragNodeRef.current = {
      nodeId,
      downClient: { x: e.clientX, y: e.clientY },
      startWorld: getWorldCoords(e.clientX, e.clientY),
      origPos: { ...pos },
      moved: false
    };
    setDraggingNodeId(nodeId);
  };

  // Canvas Pointer Down: Start Pan
  const handleCanvasPointerDown = (e: React.PointerEvent) => {
    if (dragNodeRef.current) return;
    setIsPanning(true);
    panStartRef.current = {
      startVb: getViewBoxPoint(e.clientX, e.clientY),
      origPan: { ...panOffset }
    };
  };

  // Unified Pointer Move
  const handlePointerMove = (e: React.PointerEvent) => {
    if (dragNodeRef.current) {
      const { nodeId, downClient, startWorld, origPos } = dragNodeRef.current;
      const distScreen = Math.hypot(e.clientX - downClient.x, e.clientY - downClient.y);
      if (distScreen > 5) {
        dragNodeRef.current.moved = true;
        justDraggedRef.current = true;
      }
      if (dragNodeRef.current.moved) {
        const curWorld = getWorldCoords(e.clientX, e.clientY);
        const dx = curWorld.x - startWorld.x;
        const dy = curWorld.y - startWorld.y;
        setNodePositions((prev) => ({
          ...prev,
          [nodeId]: {
            x: Math.max(70, Math.min(VB_WIDTH - 70, origPos.x + dx)),
            y: Math.max(55, Math.min(VB_HEIGHT - 55, origPos.y + dy))
          }
        }));
      }
    } else if (isPanning && panStartRef.current) {
      const curVb = getViewBoxPoint(e.clientX, e.clientY);
      const { startVb, origPan } = panStartRef.current;
      setPanOffset({
        x: origPan.x + (curVb.x - startVb.x),
        y: origPan.y + (curVb.y - startVb.y)
      });
    }
  };

  const handlePointerUp = () => {
    dragNodeRef.current = null;
    panStartRef.current = null;
    setDraggingNodeId(null);
    setIsPanning(false);
  };

  // Single click selects node & opens Dossier without leaving Knowledge Graphs
  const handleNodeSelect = (nodeId: string, center = false) => {
    setSelectedNodeId(nodeId);
    setSelectedEdgeIndex(null);
    setDossierCollapsed(false);
    if (center) {
      centerOnNode(nodeId);
    }
  };

  const handleClusterSelect = (clusterId: 'all' | ConceptNode['cluster']) => {
    setActiveCluster(clusterId);
    setSelectedEdgeIndex(null);
    if (clusterId !== 'all' && selectedNode.cluster !== clusterId) {
      const lead = CONCEPT_NODES.find((n) => n.cluster === clusterId);
      if (lead) {
        setSelectedNodeId(lead.id);
      }
    }
  };

  // Accurate Cross-Module Jump Resolver (no blind fallbacks)
  const resolveJumpTarget = useCallback(
    (node: ConceptNode): ResolvedJump => {
      if (node.category === 'article') {
        const match =
          node.label.match(/Article\s+([0-9]+[A-Za-z]*)/i) || node.id.match(/art-([0-9]+[a-z]*)/i);
        const articleId = match ? match[1].toUpperCase() : '21';
        return {
          ctaLabel: `Open Article ${articleId} in Bare Act`,
          destination: 'Articles 1–395',
          execute: () => {
            try {
              localStorage.setItem('samvidhan_active_article', articleId);
              window.dispatchEvent(new CustomEvent('samvidhan_navigate_article', { detail: { articleId } }));
            } catch {
              // ignore
            }
            setActiveTab('articles-master');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        };
      }

      if (node.category === 'amendment') {
        const match = node.label.match(/(\d+)/) || node.id.match(/(\d+)/);
        const amendNum = match ? parseInt(match[1], 10) : 42;
        return {
          ctaLabel: `Open ${amendNum}th/nd Amendment in Tracker`,
          destination: 'Amendments',
          execute: () => {
            try {
              localStorage.setItem('samvidhan_active_amendment', String(amendNum));
              window.dispatchEvent(
                new CustomEvent('samvidhan_navigate_amendment', { detail: { amendmentNumber: amendNum } })
              );
            } catch {
              // ignore
            }
            setActiveTab('amendments');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        };
      }

      if (node.category === 'case') {
        if (node.id === 'minerva-mills') {
          return {
            ctaLabel: 'Open Chariot Harmony (Minerva Mills) in Doctrines',
            destination: 'Doctrines Hub',
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

        const allCases = DETAILED_CASE_LAWS_BY_TOPIC.flatMap((g) => g.cases);
        const explicitId = CASE_ID_MAP[node.id];
        const cleanNodeLabel = node.label.replace(/\s*\(\d{4}\)/g, '').toLowerCase().trim();
        const matchedCase =
          allCases.find((c) => c.id === explicitId) ||
          allCases.find((c) => {
            const cName = c.caseName.toLowerCase();
            return cName.includes(cleanNodeLabel) || cleanNodeLabel.includes(cName);
          });

        const caseId = matchedCase ? matchedCase.id : 'case-kesavananda-full';
        const displayTitle = matchedCase ? matchedCase.caseName.split(' v. ')[0] : 'Landmark Judgment';
        return {
          ctaLabel: `Open ${displayTitle} in Case Vault`,
          destination: 'Landmark Cases',
          execute: () => {
            try {
              localStorage.setItem('samvidhan_active_case', caseId);
              window.dispatchEvent(new CustomEvent('samvidhan_navigate_case', { detail: caseId }));
            } catch {
              // ignore
            }
            setActiveTab('judgments');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        };
      }

      // Doctrines routing
      if (node.id === 'basic-structure' || node.id === 'chariot-harmony') {
        const docId = node.id === 'chariot-harmony' ? 'harmonious-construction' : 'basic-structure';
        const doc = DOCTRINES_DATA.find((d) => d.id === docId);
        return {
          ctaLabel: `Open ${doc ? doc.name : 'Doctrine'} in Doctrines Hub`,
          destination: 'Doctrines Hub',
          execute: () => {
            try {
              localStorage.setItem('samvidhan_active_doctrine', docId);
              window.dispatchEvent(new CustomEvent('samvidhan_navigate_doctrine', { detail: { doctrineId: docId } }));
            } catch {
              // ignore
            }
            setActiveTab('doctrines');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        };
      }

      if (node.id === 'golden-triangle') {
        return {
          ctaLabel: 'Open Golden Triangle Blueprint in Visual Lab',
          destination: 'Visual Law Lab',
          execute: () => {
            setSelectedSvgId('fundamental-rights-funnel');
            setActiveTab('visual-lab');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        };
      }

      if (node.id === 'prerogative-writs') {
        return {
          ctaLabel: 'Open 5 Writs War Room',
          destination: 'Writs & Emergency',
          execute: () => {
            setActiveTab('writs-emergency');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        };
      }

      if (node.id === 'floor-test') {
        return {
          ctaLabel: 'Open Federal Relations Matrix',
          destination: 'Federal Relations',
          execute: () => {
            setActiveTab('federal-relations');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        };
      }

      if (node.id === 'preamble' || node.id === 'objective-resolution') {
        return {
          ctaLabel: 'Open Preamble Blueprint in Visual Lab',
          destination: 'Visual Law Lab',
          execute: () => {
            setSelectedSvgId('preamble-map');
            setActiveTab('visual-lab');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        };
      }

      if (node.id === 'ceiling-50' || node.id === 'creamy-layer') {
        return {
          ctaLabel: 'Open Reservation Geometry SVG in Visual Lab',
          destination: 'Visual Law Lab',
          execute: () => {
            setSelectedSvgId('reservation-evolution');
            setActiveTab('visual-lab');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        };
      }

      // Remaining doctrines open their canonical governing case in Case Vault
      const doctrineCaseFallback: Record<string, string> = {
        'substantive-due-process': 'case-maneka',
        privacy: 'case-puttaswamy',
        proportionality: 'case-puttaswamy',
        'manifest-arbitrariness': 'case-shayara-bano',
        'constitutional-morality': 'case-navtej-johar'
      };
      const targetCase = doctrineCaseFallback[node.id] || 'case-maneka';
      return {
        ctaLabel: `Study Foundation Case in Case Vault`,
        destination: 'Landmark Cases',
        execute: () => {
          try {
            localStorage.setItem('samvidhan_active_case', targetCase);
            window.dispatchEvent(new CustomEvent('samvidhan_navigate_case', { detail: targetCase }));
          } catch {
            // ignore
          }
          setActiveTab('judgments');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      };
    },
    [setActiveTab, setSelectedSvgId]
  );

  // Format edges with Bezier geometry and circumference trimming
  const edgesGeometry = useMemo(() => {
    return CONCEPT_EDGES.map((edge, idx) => {
      const fromPos = nodePositions[edge.from] || { x: 0, y: 0 };
      const toPos = nodePositions[edge.to] || { x: 0, y: 0 };
      const fromNode = nodeMap.get(edge.from);
      const toNode = nodeMap.get(edge.to);

      const dx = toPos.x - fromPos.x;
      const dy = toPos.y - fromPos.y;
      const dist = Math.hypot(dx, dy) || 1;
      const bend = edgeCurveOffsets[idx] || 0;

      const cx = (fromPos.x + toPos.x) / 2 + (-dy / dist) * bend;
      const cy = (fromPos.y + toPos.y) / 2 + (dx / dist) * bend;

      const rFrom =
        edge.from === selectedNode.id || pathNodeSet.has(edge.from)
          ? 23
          : fromNode?.category === 'article'
          ? 18
          : 15;
      const rTo =
        edge.to === selectedNode.id || pathNodeSet.has(edge.to)
          ? 23
          : toNode?.category === 'article'
          ? 18
          : 15;

      const startVecX = cx - fromPos.x;
      const startVecY = cy - fromPos.y;
      const startLen = Math.hypot(startVecX, startVecY) || 1;
      const sx = fromPos.x + (startVecX / startLen) * (rFrom + 3);
      const sy = fromPos.y + (startVecY / startLen) * (rFrom + 3);

      const endVecX = toPos.x - cx;
      const endVecY = toPos.y - cy;
      const endLen = Math.hypot(endVecX, endVecY) || 1;
      const ex = toPos.x - (endVecX / endLen) * (rTo + 8);
      const ey = toPos.y - (endVecY / endLen) * (rTo + 8);

      const midX = 0.25 * sx + 0.5 * cx + 0.25 * ex;
      const midY = 0.25 * sy + 0.5 * cy + 0.25 * ey;

      const isConnectedToSelected = edge.from === selectedNode.id || edge.to === selectedNode.id;
      const isClusterRelevant =
        activeCluster === 'all' ||
        fromNode?.cluster === activeCluster ||
        toNode?.cluster === activeCluster;

      const isPathEdge =
        viewMode === 'pathfinder' &&
        !!calculatedPath?.pathEdges.some(
          (pe) =>
            (pe.from === edge.from && pe.to === edge.to) || (pe.from === edge.to && pe.to === edge.from)
        );

      return {
        idx,
        edge,
        fromNode,
        toNode,
        pathD: `M ${sx.toFixed(1)} ${sy.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}`,
        midX,
        midY,
        isConnectedToSelected,
        isClusterRelevant,
        isPathEdge
      };
    });
  }, [
    nodePositions,
    nodeMap,
    edgeCurveOffsets,
    selectedNode.id,
    pathNodeSet,
    activeCluster,
    viewMode,
    calculatedPath
  ]);

  const activeEdgeObj = selectedEdgeIndex !== null ? CONCEPT_EDGES[selectedEdgeIndex] : null;
  const activeJump = resolveJumpTarget(selectedNode);
  const selectedCatStyle = CATEGORY_STYLE[selectedNode.category];

  return (
    <div
      className={`space-y-4 animate-fadeIn ${
        isFullscreen
          ? 'fixed inset-0 z-50 bg-[var(--bg-base)] p-3 sm:p-5 overflow-hidden flex flex-col gap-3'
          : 'relative'
      }`}
    >
      {/* Top 2-Row Cockpit Toolbar (Zero Horizontal Squeezing) */}
      <div className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm space-y-3 shrink-0">
        {/* Row 1: Mode Switcher + Search + Zoom + Fullscreen */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          {/* Left: View Mode Toggle + Telemetry */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1 p-1 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
              <button
                type="button"
                onClick={() => {
                  setViewMode('explore');
                  setSelectedEdgeIndex(null);
                }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === 'explore'
                    ? 'bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] border border-[var(--border-strong)] shadow-xs'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                <Compass className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>Constellation Explorer</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setViewMode('pathfinder');
                  setSelectedEdgeIndex(null);
                }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === 'pathfinder'
                    ? 'bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] border border-[var(--border-strong)] shadow-xs'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                <GitMerge className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>Constitutional Path-Finder</span>
              </button>
            </div>

            <span className="text-[11px] font-mono text-[var(--text-muted)] hidden sm:inline tabular-nums">
              {CONCEPT_NODES.length} Nodes · {CONCEPT_EDGES.length} Doctrinal Vectors
            </span>
          </div>

          {/* Right: Search + Zoom + Focus + Fullscreen */}
          <div className="flex flex-wrap items-center justify-between sm:justify-end gap-2">
            {viewMode === 'explore' && (
              <div className="relative flex-1 sm:flex-initial sm:w-64">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setTimeout(() => setSearchFocused(false), 160)}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && searchMatches.length > 0) {
                      setActiveCluster('all');
                      handleNodeSelect(searchMatches[0].id, true);
                      setSearchFocused(false);
                    }
                  }}
                  placeholder="Find article, case, or doctrine..."
                  aria-label="Search knowledge graph concepts"
                  style={{ color: 'var(--text-primary)', backgroundColor: 'var(--bg-base)' }}
                  className="w-full pl-8 pr-7 py-1.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] placeholder:text-[var(--text-muted)] caret-[var(--accent)] focus:border-[var(--accent)] focus:outline-none"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear concept search"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-0.5 rounded text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}

                {/* Live Search Jump Results Dropdown */}
                {searchFocused && searchQuery.trim().length > 0 && (
                  <div className="absolute left-0 right-0 top-full mt-1.5 z-30 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-strong)] shadow-lg overflow-hidden max-h-60 overflow-y-auto">
                    {searchMatches.length === 0 ? (
                      <div className="p-3 text-xs text-[var(--text-muted)] font-mono">
                        No matching concepts for &ldquo;{searchQuery}&rdquo;
                      </div>
                    ) : (
                      searchMatches.slice(0, 6).map((m) => (
                        <button
                          key={m.id}
                          type="button"
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={() => {
                            setActiveCluster('all');
                            handleNodeSelect(m.id, true);
                            setSearchFocused(false);
                          }}
                          className="w-full px-3 py-2 text-left flex items-center justify-between gap-2 hover:bg-[var(--bg-surface-elevated)] border-b last:border-b-0 border-[var(--border-subtle)] cursor-pointer transition-colors"
                        >
                          <div className="min-w-0">
                            <span className="text-xs font-semibold text-[var(--text-primary)] block truncate">
                              {m.label}
                            </span>
                            {m.articleAnchor && (
                              <span className="text-[10px] font-mono text-[var(--text-muted)] block truncate">
                                {m.articleAnchor}
                              </span>
                            )}
                          </div>
                          <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border shrink-0 ${CATEGORY_STYLE[m.category].badgeClass}`}>
                            {CATEGORY_STYLE[m.category].label}
                          </span>
                        </button>
                      ))
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Zoom + Center + Fullscreen Toolbar */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] shrink-0">
              <button
                type="button"
                onClick={() => applyZoom(zoomLevel - 0.15)}
                className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] cursor-pointer transition-colors"
                title="Zoom Out"
                aria-label="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="text-[10px] font-mono font-bold px-1.5 text-[var(--text-secondary)] tabular-nums min-w-[38px] text-center">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                type="button"
                onClick={() => applyZoom(zoomLevel + 0.15)}
                className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] cursor-pointer transition-colors"
                title="Zoom In"
                aria-label="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => centerOnNode(selectedNode.id, Math.max(zoomLevel, 1.15))}
                className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] cursor-pointer transition-colors"
                title="Focus Selected Node"
                aria-label="Focus Selected Node"
              >
                <Focus className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={handleResetView}
                className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] cursor-pointer transition-colors"
                title="Reset Layout & Zoom"
                aria-label="Reset Layout & Zoom"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              type="button"
              onClick={() => setIsFullscreen((f) => !f)}
              className="p-2 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-all cursor-pointer shrink-0"
              title={isFullscreen ? 'Exit Fullscreen (Esc)' : 'Fullscreen Graph Stage'}
              aria-label={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen Graph Stage'}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Row 2: Full-width Cluster Filters OR Path-Finder Controls */}
        {viewMode === 'explore' ? (
          <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-[var(--border-subtle)]">
            {CLUSTER_META.map((cl) => {
              const isActive = activeCluster === cl.id;
              const count = clusterCounts[cl.id] || 0;
              return (
                <button
                  key={cl.id}
                  type="button"
                  onClick={() => handleClusterSelect(cl.id)}
                  className={`px-2.5 py-1 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 border ${
                    isActive
                      ? 'bg-[var(--accent)] text-[var(--accent-contrast)] border-[var(--accent)] font-semibold shadow-xs'
                      : 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)]'
                  }`}
                >
                  <span>{cl.label}</span>
                  <span
                    className={`text-[10px] font-mono tabular-nums ${
                      isActive ? 'opacity-85' : 'text-[var(--text-muted)]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="space-y-3 pt-2 border-t border-[var(--border-subtle)]">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2.5">
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <span className="text-[11px] font-mono text-[var(--text-muted)] shrink-0">Start:</span>
                <select
                  value={pathStartId}
                  onChange={(e) => setPathStartId(e.target.value)}
                  className="flex-1 min-w-0 px-2.5 py-1.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] font-semibold focus:outline-none focus:border-[var(--accent)]"
                >
                  {CONCEPT_NODES.map((n) => (
                    <option key={n.id} value={n.id}>
                      {n.label} ({CATEGORY_STYLE[n.category].label})
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="button"
                onClick={() => {
                  setPathStartId(pathEndId);
                  setPathEndId(pathStartId);
                }}
                title="Swap start and target concepts"
                aria-label="Swap start and target concepts"
                className="self-start sm:self-auto p-1.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] cursor-pointer shrink-0 transition-colors"
              >
                <ArrowLeftRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-2 flex-1 min-w-0">
                <span className="text-[11px] font-mono text-[var(--text-muted)] shrink-0">Target:</span>
                <select
                  value={pathEndId}
                  onChange={(e) => setPathEndId(e.target.value)}
                  className="flex-1 min-w-0 px-2.5 py-1.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] font-semibold focus:outline-none focus:border-[var(--accent)]"
                >
                  {CONCEPT_NODES.map((n) => (
                    <option key={n.id} value={n.id}>
                      {n.label} ({CATEGORY_STYLE[n.category].label})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {calculatedPath && (
              <div className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2 animate-fadeIn">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-[var(--accent)] uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>
                      Shortest Constitutional Bridge ({calculatedPath.pathNodeIds.length - 1}{' '}
                      {calculatedPath.pathNodeIds.length - 1 === 1 ? 'Leap' : 'Leaps'})
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1">
                    {calculatedPath.pathNodeIds.map((nid, idx) => {
                      const pNode = nodeMap.get(nid);
                      if (!pNode) return null;
                      return (
                        <React.Fragment key={nid}>
                          <button
                            type="button"
                            onClick={() => handleNodeSelect(nid)}
                            className={`px-2 py-0.5 rounded-lg text-[11px] font-semibold border transition-colors cursor-pointer ${
                              selectedNode.id === nid
                                ? 'bg-[var(--accent)] text-[var(--accent-contrast)] border-[var(--accent)]'
                                : 'bg-[var(--bg-surface)] text-[var(--text-primary)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                            }`}
                          >
                            {pNode.label}
                          </button>
                          {idx < calculatedPath.pathEdges.length && (
                            <span className="text-[10px] font-mono text-[var(--text-muted)] px-1">
                              &mdash;[{calculatedPath.pathEdges[idx].relation}]&rarr;
                            </span>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Main Docked Split Grid: Unobstructed SVG Stage + Side Dossier */}
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-4 ${
          isFullscreen ? 'flex-1 min-h-0' : ''
        }`}
      >
        {/* SVG Stage Column */}
        <div
          className={`flex flex-col rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-sm ${
            dossierCollapsed ? 'lg:col-span-12' : 'lg:col-span-8'
          } ${isFullscreen ? 'h-full min-h-0' : ''}`}
        >
          {/* Canvas Top Utility Strip (Replaces Overlapping Floating Hints) */}
          <div className="px-4 py-2.5 bg-[var(--bg-surface-elevated)] border-b border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-2">
            {/* Color Legend */}
            <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-[var(--text-secondary)]">
              {(['article', 'case', 'doctrine', 'amendment'] as ConceptNode['category'][]).map((cat) => (
                <span key={cat} className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${CATEGORY_STYLE[cat].dotClass}`} />
                  <span>{CATEGORY_STYLE[cat].label}</span>
                </span>
              ))}
            </div>

            {/* Expand Dossier CTA if Collapsed */}
            {dossierCollapsed && (
              <button
                type="button"
                onClick={() => setDossierCollapsed(false)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[var(--bg-base)] border border-[var(--border-strong)] text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--accent)] cursor-pointer transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>Inspect Dossier: {selectedNode.label}</span>
              </button>
            )}
          </div>

          {/* Interactive SVG Vector Graph */}
          <div
            className={`relative w-full bg-[var(--bg-base)] ${
              isFullscreen ? 'flex-1 min-h-0' : 'h-[470px] sm:h-[580px]'
            }`}
          >
            <svg
              ref={svgRef}
              viewBox={`0 0 ${VB_WIDTH} ${VB_HEIGHT}`}
              preserveAspectRatio="xMidYMid meet"
              onWheel={(e) => {
                if (e.ctrlKey || e.metaKey || isFullscreen) {
                  e.preventDefault();
                  const vb = getViewBoxPoint(e.clientX, e.clientY);
                  applyZoom(zoomLevel + (e.deltaY < 0 ? 0.14 : -0.14), vb.x, vb.y);
                }
              }}
              onPointerDown={handleCanvasPointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
              className="w-full h-full cursor-grab active:cursor-grabbing select-none touch-none"
            >
              <defs>
                {/* Theme-adaptive Dot Matrix Grid */}
                <pattern id="kgMatrixGrid" width="32" height="32" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="0.9" fill="var(--border-strong)" opacity="0.35" />
                </pattern>

                {/* Directional Arrowhead Markers */}
                <marker
                  id="kgArrowMuted"
                  markerWidth="8"
                  markerHeight="8"
                  refX="6.5"
                  refY="4"
                  orient="auto"
                >
                  <path d="M 1 1 L 7 4 L 1 7 z" fill="var(--border-strong)" opacity="0.7" />
                </marker>
                <marker
                  id="kgArrowActive"
                  markerWidth="9"
                  markerHeight="9"
                  refX="7"
                  refY="4.5"
                  orient="auto"
                >
                  <path d="M 1 1 L 8 4.5 L 1 8 z" fill="var(--accent)" />
                </marker>
              </defs>

              <rect width={VB_WIDTH} height={VB_HEIGHT} fill="var(--bg-base)" />
              <rect width={VB_WIDTH} height={VB_HEIGHT} fill="url(#kgMatrixGrid)" />

              {/* Transformed Pan & Zoom Layer */}
              <g transform={`translate(${panOffset.x}, ${panOffset.y}) scale(${zoomLevel})`}>
                {/* LAYER 1: CURVED VECTOR EDGES */}
                <g>
                  {edgesGeometry.map((item) => {
                    const { idx, edge, pathD, midX, midY, isConnectedToSelected, isClusterRelevant, isPathEdge } = item;
                    const isEdgeFocused = hoveredEdgeIndex === idx || selectedEdgeIndex === idx;

                    let stroke = 'var(--border-strong)';
                    let strokeOpacity = activeCluster === 'all' ? 0.35 : isClusterRelevant ? 0.5 : 0.08;
                    let strokeWidth = 1.25;
                    let dashArray: string | undefined = undefined;
                    let markerEnd = 'url(#kgArrowMuted)';

                    if (viewMode === 'pathfinder') {
                      if (isPathEdge) {
                        stroke = 'var(--accent)';
                        strokeOpacity = 1;
                        strokeWidth = 3;
                        markerEnd = 'url(#kgArrowActive)';
                      } else {
                        strokeOpacity = 0.09;
                      }
                    } else if (isEdgeFocused) {
                      stroke = 'var(--accent)';
                      strokeOpacity = 1;
                      strokeWidth = 2.8;
                      markerEnd = 'url(#kgArrowActive)';
                    } else if (isConnectedToSelected && isClusterRelevant) {
                      stroke = 'var(--accent)';
                      strokeOpacity = 0.85;
                      strokeWidth = 2.1;
                      dashArray = '5 3';
                      markerEnd = 'url(#kgArrowActive)';
                    }

                    const showPill =
                      (viewMode === 'pathfinder' && isPathEdge) ||
                      isEdgeFocused;

                    const badgeWidth = Math.max(66, edge.relation.length * 6.2 + 16);

                    return (
                      <g
                        key={`${edge.from}-${edge.to}-${idx}`}
                        className="cursor-pointer"
                        onMouseEnter={() => setHoveredEdgeIndex(idx)}
                        onMouseLeave={() => setHoveredEdgeIndex(null)}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedEdgeIndex(idx);
                          setSelectedNodeId(edge.from);
                          setDossierCollapsed(false);
                        }}
                      >
                        {/* Invisible wide hit path for easy clicking */}
                        <path d={pathD} fill="none" stroke="transparent" strokeWidth="12" />

                        {/* Visible curved vector arrow */}
                        <path
                          d={pathD}
                          fill="none"
                          stroke={stroke}
                          strokeOpacity={strokeOpacity}
                          strokeWidth={strokeWidth}
                          strokeDasharray={dashArray}
                          markerEnd={markerEnd}
                        />

                        {showPill && (
                          <g transform={`translate(${midX}, ${midY})`}>
                            <rect
                              x={-badgeWidth / 2}
                              y="-10"
                              width={badgeWidth}
                              height="20"
                              rx="10"
                              fill="var(--bg-surface)"
                              stroke="var(--accent)"
                              strokeWidth="1.2"
                            />
                            <text
                              y="3.5"
                              textAnchor="middle"
                              fontSize="8.5"
                              fontWeight="700"
                              fontFamily="monospace"
                              fill="var(--accent)"
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
                <g>
                  {CONCEPT_NODES.map((node) => {
                    const pos = nodePositions[node.id] || { x: node.x, y: node.y };
                    const cat = CATEGORY_STYLE[node.category];
                    const isSelected = selectedNode.id === node.id;
                    const isHovered = hoveredNodeId === node.id;
                    const isConnected = activeConnectedIds.has(node.id);
                    const isPathNode = pathNodeSet.has(node.id);
                    const isClusterMatch = activeCluster === 'all' || node.cluster === activeCluster;
                    const hasSearch = searchQuery.trim().length > 0;
                    const isSearchMatch = hasSearch && searchMatchIds.has(node.id);

                    let nodeOpacity = 1;
                    if (viewMode === 'pathfinder') {
                      nodeOpacity = isPathNode ? 1 : 0.16;
                    } else if (hasSearch) {
                      nodeOpacity = isSearchMatch || isSelected ? 1 : 0.18;
                    } else if (activeCluster !== 'all') {
                      nodeOpacity = isClusterMatch ? 1 : 0.16;
                    } else if (!isSelected && !isConnected && !isHovered) {
                      nodeOpacity = 0.72;
                    }

                    const radius = isSelected || isPathNode ? 22 : node.category === 'article' ? 18 : 15;
                    const activeRing = isSelected || isPathNode || isSearchMatch;

                    return (
                      <g
                        key={node.id}
                        transform={`translate(${pos.x}, ${pos.y})`}
                        opacity={nodeOpacity}
                        onPointerDown={(e) => handleNodePointerDown(node.id, e)}
                        onMouseEnter={() => setHoveredNodeId(node.id)}
                        onMouseLeave={() => setHoveredNodeId(null)}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (justDraggedRef.current) {
                            justDraggedRef.current = false;
                            return;
                          }
                          handleNodeSelect(node.id);
                        }}
                        className="cursor-pointer transition-opacity duration-200"
                      >
                        {/* Outer dashed halo on selected, path, or search-matched node */}
                        {activeRing && (
                          <circle
                            cx="0"
                            cy="0"
                            r={radius + 6}
                            fill="none"
                            stroke={isPathNode || isSelected ? 'var(--accent)' : cat.stroke}
                            strokeWidth="1.5"
                            strokeDasharray="4 2"
                          />
                        )}

                        {/* Node circle */}
                        <circle
                          cx="0"
                          cy="0"
                          r={radius}
                          fill={
                            isSelected || isPathNode
                              ? cat.solid
                              : isHovered
                              ? 'var(--bg-surface-elevated)'
                              : 'var(--bg-surface)'
                          }
                          stroke={isPathNode ? 'var(--accent)' : cat.stroke}
                          strokeWidth={isSelected || isPathNode ? 2.8 : isHovered ? 2.2 : 1.5}
                        />

                        {/* Category micro emblem inside node */}
                        <text
                          x="0"
                          y="3.5"
                          textAnchor="middle"
                          fontSize={isSelected || isPathNode ? '9.5' : '8'}
                          fontWeight="700"
                          fontFamily="monospace"
                          fill={isSelected || isPathNode ? '#ffffff' : cat.stroke}
                          className="select-none pointer-events-none"
                        >
                          {cat.glyph}
                        </text>

                        {/* High-contrast Haloed Node Label */}
                        <text
                          x="0"
                          y={radius + 15}
                          textAnchor="middle"
                          fontSize={isSelected || isPathNode ? '11.5' : '10'}
                          fontWeight={isSelected || isPathNode ? '700' : '600'}
                          fill={isSelected ? 'var(--accent)' : 'var(--text-primary)'}
                          stroke="var(--bg-base)"
                          strokeWidth="4.5"
                          paintOrder="stroke"
                          strokeLinejoin="round"
                          className="select-none pointer-events-none"
                        >
                          {node.label}
                        </text>
                      </g>
                    );
                  })}
                </g>
              </g>
            </svg>
          </div>

          {/* Clean Bottom Stage Status Bar (Zero Canvas Occlusion) */}
          <div className="px-4 py-2 bg-[var(--bg-surface-elevated)] border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[var(--text-muted)]">
            <span>Click any node or arrow to inspect ratio &amp; links · Drag nodes to rearrange · Drag background to pan</span>
            <span>{draggingNodeId ? `Repositioning: ${nodeMap.get(draggingNodeId)?.label}` : `Selected: ${selectedNode.label}`}</span>
          </div>
        </div>

        {/* Docked Side Dossier Column (Never Covers Graph Nodes) */}
        {!dossierCollapsed && (
          <div
            className={`lg:col-span-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-5 shadow-sm flex flex-col justify-between gap-4 ${
              isFullscreen ? 'h-full overflow-y-auto' : 'lg:max-h-[670px] lg:overflow-y-auto'
            }`}
          >
            <div className="space-y-4">
              {/* Optional Active Edge Callout Card when an arrow is clicked */}
              {activeEdgeObj && (
                <div className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--accent)]/40 space-y-1.5 animate-fadeIn">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--accent)]">
                      Selected Vector Link · {activeEdgeObj.relation}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedEdgeIndex(null)}
                      className="text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
                      aria-label="Dismiss selected edge"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-xs font-semibold text-[var(--text-primary)]">
                    {nodeMap.get(activeEdgeObj.from)?.label} &rarr; {nodeMap.get(activeEdgeObj.to)?.label}
                  </p>
                  {activeEdgeObj.description && (
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {activeEdgeObj.description}
                    </p>
                  )}
                </div>
              )}

              {/* Dossier Header */}
              <div className="flex items-start justify-between gap-3 border-b border-[var(--border-subtle)] pb-3">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border ${selectedCatStyle.badgeClass}`}
                    >
                      {selectedCatStyle.label}
                    </span>
                    <span className="text-[11px] font-mono text-[var(--text-muted)] capitalize">
                      {selectedNode.cluster.replace('_', ' ')}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[var(--text-primary)] mt-1.5 leading-snug">
                    {selectedNode.label}
                  </h3>

                  {selectedNode.articleAnchor && (
                    <p className="text-[11px] font-mono text-[var(--text-muted)] mt-0.5">
                      {selectedNode.articleAnchor}
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setDossierCollapsed(true)}
                  className="p-1.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all cursor-pointer shrink-0"
                  title="Collapse Dossier to Expand Canvas"
                  aria-label="Collapse Dossier"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Constitutional Core Summary */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono font-semibold text-[var(--text-muted)] uppercase tracking-wider block">
                  Constitutional Core
                </span>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed bg-[var(--bg-base)] p-3 rounded-xl border border-[var(--border-subtle)]">
                  {selectedNode.summary}
                </p>
              </div>

              {/* Key Holdings & Precedent Anchors */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono font-semibold text-[var(--text-muted)] uppercase tracking-wider block">
                  Key Holdings &amp; Anchors
                </span>
                <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                  {selectedNode.keyHoldings.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Synchronized Interactive Neighbor Links from CONCEPT_EDGES */}
              <div className="space-y-2 pt-2 border-t border-[var(--border-subtle)]">
                <div className="flex items-center justify-between text-[10px] font-mono text-[var(--text-muted)]">
                  <span className="font-semibold uppercase tracking-wider">
                    Connected Vectors ({connectedRelations.length})
                  </span>
                  <span>Click to hop</span>
                </div>

                <div className="flex flex-wrap gap-1.5 max-h-44 overflow-y-auto pr-1">
                  {connectedRelations.map(({ neighbor, edge, edgeIndex }) => {
                    const nStyle = CATEGORY_STYLE[neighbor.category];
                    return (
                      <button
                        key={`${neighbor.id}-${edgeIndex}`}
                        type="button"
                        onClick={() => handleNodeSelect(neighbor.id)}
                        title={edge.description || `${edge.relation}: ${neighbor.label}`}
                        className="px-2.5 py-1 rounded-xl text-[11px] font-medium border border-[var(--border-subtle)] bg-[var(--bg-base)] hover:border-[var(--accent)] text-[var(--text-primary)] transition-all cursor-pointer flex items-center gap-1.5"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${nStyle.dotClass} shrink-0`} />
                        <span>{neighbor.label}</span>
                        <span className="text-[9px] font-mono text-[var(--text-muted)]">
                          &middot; {edge.relation}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Verified Cross-Module Action CTA */}
            <div className="pt-3 border-t border-[var(--border-subtle)] space-y-1.5 shrink-0">
              <button
                type="button"
                onClick={activeJump.execute}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[var(--accent)] hover:brightness-110 text-[var(--accent-contrast)] font-mono text-xs font-bold transition-all shadow-sm btn-tactile cursor-pointer"
              >
                <span className="truncate">{activeJump.ctaLabel}</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </button>
              <span className="block text-center text-[10px] font-mono text-[var(--text-muted)]">
                Opens in {activeJump.destination}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
