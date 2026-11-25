import React, { useState, useId } from 'react';
import {
  AlertTriangle,
  Scale,
  BookOpen,
  GitBranch,
  CheckCircle2,
  Compass
} from 'lucide-react';
import type {
  VisualBlueprintSpec,
  BlueprintNodeSpec,
  BlueprintColorKey
} from '../../data/visualBlueprintsTypes';

const COLOR_MAP: Record<BlueprintColorKey, { stroke: string; tint: string; badgeClass: string }> = {
  sky: {
    stroke: '#0284c7',
    tint: 'rgba(2,132,199,0.12)',
    badgeClass: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30'
  },
  emerald: {
    stroke: '#059669',
    tint: 'rgba(5,150,105,0.12)',
    badgeClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
  },
  violet: {
    stroke: '#7c3aed',
    tint: 'rgba(124,58,237,0.12)',
    badgeClass: 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/30'
  },
  rose: {
    stroke: '#e11d48',
    tint: 'rgba(225,29,72,0.12)',
    badgeClass: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30'
  },
  accent: {
    stroke: 'var(--accent)',
    tint: 'var(--accent-subtle)',
    badgeClass: 'bg-[var(--bg-surface-elevated)] text-[var(--accent)] border-[var(--border-strong)]'
  }
};

function clipText(str: string, maxLen: number): string {
  if (str.length <= maxLen) return str;
  return `${str.slice(0, Math.max(4, maxLen - 2)).trimEnd()}..`;
}

function splitTwoLines(text: string, maxLine = 68): [string, string] {
  if (text.length <= maxLine) return [text, ''];
  const cut = text.lastIndexOf(' ', maxLine);
  const splitAt = cut > 20 ? cut : maxLine;
  const line1 = text.slice(0, splitAt).trim();
  const rest = text.slice(splitAt).trim();
  return [line1, clipText(rest, maxLine)];
}

interface Props {
  spec: VisualBlueprintSpec;
}

export const ConstitutionalBlueprintEngineSVG: React.FC<Props> = ({ spec }) => {
  const uid = useId().replace(/:/g, '');
  const [selectedNodeId, setSelectedNodeId] = useState<string>(spec.nodes[0]?.id || '');

  const current: BlueprintNodeSpec =
    spec.nodes.find((n) => n.id === selectedNodeId) || spec.nodes[0];
  const curColor = COLOR_MAP[current.colorKey] || COLOR_MAP.accent;

  const gridId = `bpGrid-${uid}`;
  const arrowId = `bpArrow-${uid}`;
  const arrowActiveId = `bpArrowActive-${uid}`;

  const [footLine1, footLine2] = splitTwoLines(spec.footerRule, 108);

  const renderSvgTopology = () => {
    const nodes = spec.nodes;

    if (spec.topology === 'flowchart') {
      const count = Math.min(nodes.length, 5);
      const visible = nodes.slice(0, count);
      const origW = count === 5 ? 132 : 148;
      const startX = 24;
      const originRight = startX + origW;
      const firstCardX = originRight + 28;
      const avail = 936 - firstCardX;
      const gap = 24;
      const cardW = Math.floor((avail - gap * (count - 1)) / count);

      return (
        <>
          {/* Origin Gate */}
          <g transform={`translate(${startX}, 96)`}>
            <rect
              x="0"
              y="0"
              width={origW}
              height="128"
              rx="12"
              fill="var(--bg-surface-elevated)"
              stroke="var(--accent)"
              strokeWidth="1.8"
            />
            <text x={origW / 2} y="28" textAnchor="middle" fill="var(--accent)" fontSize="8" fontWeight="bold">
              {clipText(spec.edgeFlowTag, 18)}
            </text>
            <text x={origW / 2} y="56" textAnchor="middle" fill="var(--text-primary)" fontSize="10.5" fontWeight="bold">
              {clipText(spec.rootLabel, 18)}
            </text>
            <text x={origW / 2} y="76" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.8">
              {clipText(spec.rootSub, 21)}
            </text>
            <line x1="14" y1="94" x2={origW - 14} y2="94" stroke="var(--border-subtle)" />
            <text x={origW / 2} y="112" textAnchor="middle" fill="var(--text-muted)" fontSize="7.5">
              Click any node &rarr;
            </text>
          </g>

          <line
            x1={originRight}
            y1="160"
            x2={firstCardX - 4}
            y2="160"
            stroke="var(--accent)"
            strokeWidth="1.8"
            markerEnd={`url(#${arrowActiveId})`}
          />

          {visible.map((node, idx) => {
            const x = firstCardX + idx * (cardW + gap);
            const isSel = current.id === node.id;
            const c = COLOR_MAP[node.colorKey];

            return (
              <React.Fragment key={node.id}>
                <g
                  className="cursor-pointer vector-node"
                  onClick={() => setSelectedNodeId(node.id)}
                  transform={`translate(${x}, 78)`}
                >
                  <title>{node.title}</title>
                  <rect
                    x="0"
                    y="0"
                    width={cardW}
                    height="164"
                    rx="11"
                    fill={isSel ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
                    stroke={isSel ? c.stroke : 'var(--border-subtle)'}
                    strokeWidth={isSel ? 2.2 : 1.1}
                  />
                  {/* Step / Article badge */}
                  <rect
                    x="12"
                    y="12"
                    width={Math.min(cardW - 24, 92)}
                    height="17"
                    rx="4"
                    fill={c.tint}
                    stroke={c.stroke}
                    strokeOpacity="0.45"
                  />
                  <text x="18" y="23.5" fill={c.stroke} fontSize="7.5" fontWeight="bold">
                    {clipText(node.badge, 14)}
                  </text>

                  <text x="12" y="49" fill="var(--text-primary)" fontSize="10" fontWeight="bold">
                    {clipText(node.title, cardW > 165 ? 24 : 19)}
                  </text>

                  <rect
                    x="12"
                    y="62"
                    width={cardW - 24}
                    height="48"
                    rx="6"
                    fill="var(--bg-base)"
                    stroke="var(--border-subtle)"
                  />
                  <text x={cardW / 2} y="82" textAnchor="middle" fill={c.stroke} fontSize="8.5" fontWeight="bold">
                    {clipText(node.subtitle, cardW > 165 ? 25 : 20)}
                  </text>
                  <text x={cardW / 2} y="98" textAnchor="middle" fill="var(--text-muted)" fontSize="7.2">
                    {clipText(node.tag, cardW > 165 ? 27 : 21)}
                  </text>

                  <line x1="12" y1="124" x2={cardW - 12} y2="124" stroke="var(--border-subtle)" />
                  <text x="12" y="143" fill={isSel ? 'var(--accent)' : 'var(--text-muted)'} fontSize="7.5" fontWeight={isSel ? 'bold' : 'normal'}>
                    {isSel ? 'Inspecting below' : 'Click to inspect ->'}
                  </text>
                </g>

                {idx < count - 1 && (
                  <>
                    <line
                      x1={x + cardW}
                      y1="160"
                      x2={x + cardW + gap - 4}
                      y2="160"
                      stroke={isSel ? c.stroke : 'var(--text-secondary)'}
                      strokeWidth={isSel ? 2 : 1.5}
                      markerEnd={isSel ? `url(#${arrowActiveId})` : `url(#${arrowId})`}
                    />
                    {node.edgeLabel && (
                      <g transform={`translate(${x + cardW + gap / 2}, 52)`}>
                        <rect
                          x="-44"
                          y="-10"
                          width="88"
                          height="17"
                          rx="8.5"
                          fill="var(--bg-surface)"
                          stroke="var(--border-subtle)"
                        />
                        <text x="0" y="1.5" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">
                          {clipText(node.edgeLabel, 14)}
                        </text>
                      </g>
                    )}
                  </>
                )}
              </React.Fragment>
            );
          })}

          {/* Bottom Rule Strip */}
          <rect x="24" y="280" width="912" height="78" rx="10" fill="var(--bg-surface-elevated)" stroke="var(--border-subtle)" />
          <text x="42" y="303" fill="var(--accent)" fontSize="8.5" fontWeight="bold">
            CONSTITUTIONAL INVARIANT &amp; PROVISO
          </text>
          <text x="42" y="324" fill="var(--text-primary)" fontSize="8.5">
            {footLine1}
          </text>
          {footLine2 && (
            <text x="42" y="340" fill="var(--text-secondary)" fontSize="8">
              {footLine2}
            </text>
          )}
        </>
      );
    }

    if (spec.topology === 'hub-spoke') {
      const visible = nodes.slice(0, 6);
      const leftNodes = visible.slice(0, Math.ceil(visible.length / 2));
      const rightNodes = visible.slice(Math.ceil(visible.length / 2));

      const leftYs = leftNodes.length === 2 ? [74, 212] : leftNodes.length === 1 ? [142] : [34, 140, 246];
      const rightYs = rightNodes.length === 2 ? [74, 212] : rightNodes.length === 1 ? [142] : [34, 140, 246];

      return (
        <>
          {/* Center Constitutional Core Hub */}
          <g transform="translate(480, 178)">
            <circle cx="0" cy="0" r="78" fill="var(--bg-surface-elevated)" stroke="var(--accent)" strokeWidth="2.2" />
            <circle cx="0" cy="0" r="66" fill="none" stroke="var(--border-strong)" strokeDasharray="4 3" />
            <text x="0" y="-22" textAnchor="middle" fill="var(--accent)" fontSize="8" fontWeight="bold">
              {clipText(spec.edgeFlowTag, 20)}
            </text>
            <text x="0" y="0" textAnchor="middle" fill="var(--text-primary)" fontSize="11.5" fontWeight="bold">
              {clipText(spec.rootLabel, 18)}
            </text>
            <text x="0" y="18" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">
              {clipText(spec.rootSub, 22)}
            </text>
            <text x="0" y="40" textAnchor="middle" fill="var(--text-muted)" fontSize="7.2">
              {visible.length} Interactive Vectors
            </text>
          </g>

          {/* Left Spokes */}
          {leftNodes.map((node, i) => {
            const y = leftYs[i] ?? 140;
            const cy = y + 40;
            const startY = i === 0 && leftNodes.length === 3 ? 136 : i === 2 ? 220 : 178;
            const startX = i === 1 || leftNodes.length < 3 ? 402 : 412;
            const isSel = current.id === node.id;
            const c = COLOR_MAP[node.colorKey];

            return (
              <React.Fragment key={node.id}>
                <path
                  d={`M ${startX} ${startY} Q 340 ${cy} 282 ${cy}`}
                  fill="none"
                  stroke={isSel ? c.stroke : 'var(--border-strong)'}
                  strokeWidth={isSel ? 2.2 : 1.3}
                  markerEnd={isSel ? `url(#${arrowActiveId})` : `url(#${arrowId})`}
                />
                {node.edgeLabel && (
                  <g transform={`translate(344, ${(startY + cy) / 2 - 2})`}>
                    <rect x="-36" y="-8" width="72" height="15" rx="7.5" fill="var(--bg-base)" stroke="var(--border-subtle)" />
                    <text x="0" y="2.5" textAnchor="middle" fill={isSel ? c.stroke : 'var(--text-muted)'} fontSize="6.8" fontWeight="bold">
                      {clipText(node.edgeLabel, 12)}
                    </text>
                  </g>
                )}
                <g className="cursor-pointer vector-node" onClick={() => setSelectedNodeId(node.id)} transform={`translate(28, ${y})`}>
                  <title>{node.title}</title>
                  <rect
                    x="0"
                    y="0"
                    width="248"
                    height="80"
                    rx="10"
                    fill={isSel ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
                    stroke={isSel ? c.stroke : 'var(--border-subtle)'}
                    strokeWidth={isSel ? 2 : 1}
                  />
                  <text x="14" y="23" fill={c.stroke} fontSize="8.5" fontWeight="bold">
                    {clipText(`${node.badge} · ${node.tag}`, 34)}
                  </text>
                  <text x="14" y="44" fill="var(--text-primary)" fontSize="10" fontWeight="bold">
                    {clipText(node.title, 28)}
                  </text>
                  <text x="14" y="63" fill="var(--text-secondary)" fontSize="8">
                    {clipText(node.subtitle, 34)}
                  </text>
                </g>
              </React.Fragment>
            );
          })}

          {/* Right Spokes */}
          {rightNodes.map((node, i) => {
            const y = rightYs[i] ?? 140;
            const cy = y + 40;
            const startY = i === 0 && rightNodes.length === 3 ? 136 : i === 2 ? 220 : 178;
            const startX = i === 1 || rightNodes.length < 3 ? 558 : 548;
            const isSel = current.id === node.id;
            const c = COLOR_MAP[node.colorKey];

            return (
              <React.Fragment key={node.id}>
                <path
                  d={`M ${startX} ${startY} Q 620 ${cy} 678 ${cy}`}
                  fill="none"
                  stroke={isSel ? c.stroke : 'var(--border-strong)'}
                  strokeWidth={isSel ? 2.2 : 1.3}
                  markerEnd={isSel ? `url(#${arrowActiveId})` : `url(#${arrowId})`}
                />
                {node.edgeLabel && (
                  <g transform={`translate(616, ${(startY + cy) / 2 - 2})`}>
                    <rect x="-36" y="-8" width="72" height="15" rx="7.5" fill="var(--bg-base)" stroke="var(--border-subtle)" />
                    <text x="0" y="2.5" textAnchor="middle" fill={isSel ? c.stroke : 'var(--text-muted)'} fontSize="6.8" fontWeight="bold">
                      {clipText(node.edgeLabel, 12)}
                    </text>
                  </g>
                )}
                <g className="cursor-pointer vector-node" onClick={() => setSelectedNodeId(node.id)} transform={`translate(684, ${y})`}>
                  <title>{node.title}</title>
                  <rect
                    x="0"
                    y="0"
                    width="248"
                    height="80"
                    rx="10"
                    fill={isSel ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
                    stroke={isSel ? c.stroke : 'var(--border-subtle)'}
                    strokeWidth={isSel ? 2 : 1}
                  />
                  <text x="14" y="23" fill={c.stroke} fontSize="8.5" fontWeight="bold">
                    {clipText(`${node.badge} · ${node.tag}`, 34)}
                  </text>
                  <text x="14" y="44" fill="var(--text-primary)" fontSize="10" fontWeight="bold">
                    {clipText(node.title, 28)}
                  </text>
                  <text x="14" y="63" fill="var(--text-secondary)" fontSize="8">
                    {clipText(node.subtitle, 34)}
                  </text>
                </g>
              </React.Fragment>
            );
          })}

          {/* Bottom strip */}
          <rect x="28" y="340" width="904" height="36" rx="8" fill="var(--bg-surface-elevated)" stroke="var(--border-subtle)" />
          <text x="480" y="362" textAnchor="middle" fill="var(--text-secondary)" fontSize="8.2">
            {clipText(spec.footerRule, 106)}
          </text>
        </>
      );
    }

    if (spec.topology === 'balance-beam') {
      const visible = nodes.slice(0, 5);
      const selIdx = Math.max(0, visible.findIndex((n) => n.id === current.id));
      const tiltMap = [-8, -4, 0, 4, 8];
      const tilt = visible.length <= 4 ? (selIdx - 1.5) * 4 : tiltMap[selIdx] || 0;

      const cardW = Math.floor((912 - (visible.length - 1) * 14) / visible.length);

      return (
        <>
          {/* Apex Constitutional Touchstone */}
          <rect x="270" y="18" width="420" height="44" rx="10" fill="var(--bg-surface)" stroke="var(--accent)" strokeWidth="1.5" />
          <text x="480" y="37" textAnchor="middle" fill="var(--accent)" fontSize="9.5" fontWeight="bold">
            {clipText(spec.rootLabel.toUpperCase(), 48)}
          </text>
          <text x="480" y="53" textAnchor="middle" fill="var(--text-muted)" fontSize="7.8">
            {clipText(spec.rootSub, 56)}
          </text>

          {/* Center Pivot & Tilt Beam */}
          <polygon points="480,104 456,162 504,162" fill="var(--bg-surface-elevated)" stroke="var(--border-strong)" strokeWidth="1.5" />
          <text x="480" y="177" textAnchor="middle" fill="var(--text-muted)" fontSize="7.5" fontWeight="bold">
            {clipText(spec.edgeFlowTag, 24)}
          </text>

          <g transform={`rotate(${tilt}, 480, 102)`} className="transition-transform duration-300">
            <line x1="210" y1="102" x2="750" y2="102" stroke="var(--text-primary)" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="480" cy="102" r="7" fill="var(--accent)" />

            {/* Left Scale Pan */}
            <rect x="85" y="76" width="185" height="62" rx="10" fill="var(--bg-surface)" stroke="#0284c7" strokeWidth="1.6" />
            <text x="177.5" y="99" textAnchor="middle" fill="#0284c7" fontSize="8.5" fontWeight="bold">
              {clipText(visible[0]?.badge || 'POLE A', 22)}
            </text>
            <text x="177.5" y="117" textAnchor="middle" fill="var(--text-primary)" fontSize="9" fontWeight="bold">
              {clipText(visible[0]?.title || '', 22)}
            </text>

            {/* Right Scale Pan */}
            <rect x="690" y="76" width="185" height="62" rx="10" fill="var(--bg-surface)" stroke="#059669" strokeWidth="1.6" />
            <text x="782.5" y="99" textAnchor="middle" fill="#059669" fontSize="8.5" fontWeight="bold">
              {clipText(visible[visible.length - 1]?.badge || 'POLE B', 22)}
            </text>
            <text x="782.5" y="117" textAnchor="middle" fill="var(--text-primary)" fontSize="9" fontWeight="bold">
              {clipText(visible[visible.length - 1]?.title || '', 22)}
            </text>
          </g>

          {/* Interactive Equilibrium Stations Bottom Row */}
          {visible.map((node, i) => {
            const x = 24 + i * (cardW + 14);
            const isSel = node.id === current.id;
            const c = COLOR_MAP[node.colorKey];

            return (
              <React.Fragment key={node.id}>
                <line
                  x1={x + cardW / 2}
                  y1="212"
                  x2="480"
                  y2="165"
                  stroke={isSel ? c.stroke : 'var(--border-subtle)'}
                  strokeWidth={isSel ? 1.8 : 1}
                  strokeDasharray="4 3"
                />
                <g className="cursor-pointer vector-node" onClick={() => setSelectedNodeId(node.id)} transform={`translate(${x}, 212)`}>
                  <title>{node.title}</title>
                  <rect
                    x="0"
                    y="0"
                    width={cardW}
                    height="108"
                    rx="10"
                    fill={isSel ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
                    stroke={isSel ? c.stroke : 'var(--border-subtle)'}
                    strokeWidth={isSel ? 2.2 : 1}
                  />
                  <text x="12" y="23" fill={c.stroke} fontSize="8" fontWeight="bold">
                    {clipText(node.badge, 18)}
                  </text>
                  <text x="12" y="45" fill="var(--text-primary)" fontSize="9.5" fontWeight="bold">
                    {clipText(node.title, 20)}
                  </text>
                  <text x="12" y="66" fill="var(--text-secondary)" fontSize="7.6">
                    {clipText(node.subtitle, 24)}
                  </text>
                  <line x1="12" y1="80" x2={cardW - 12} y2="80" stroke="var(--border-subtle)" />
                  <text x="12" y="96" fill={isSel ? 'var(--accent)' : 'var(--text-muted)'} fontSize="7.2" fontWeight={isSel ? 'bold' : 'normal'}>
                    {clipText(node.tag, 24)}
                  </text>
                </g>
              </React.Fragment>
            );
          })}

          <rect x="24" y="336" width="912" height="38" rx="8" fill="var(--bg-surface-elevated)" stroke="var(--border-subtle)" />
          <text x="480" y="359" textAnchor="middle" fill="var(--text-secondary)" fontSize="8.2">
            {clipText(spec.footerRule, 106)}
          </text>
        </>
      );
    }

    if (spec.topology === 'pyramid-hierarchy') {
      const visible = nodes.slice(0, 5);
      const count = visible.length;
      const tierH = count === 5 ? 50 : 62;
      const gapY = 10;

      return (
        <>
          <text x="315" y="28" textAnchor="middle" fill="var(--accent)" fontSize="9" fontWeight="bold">
            {clipText(spec.rootLabel.toUpperCase(), 44)} &middot; HIERARCHY STAGES
          </text>

          {visible.map((node, i) => {
            const w = 276 + i * 62;
            const x = 315 - w / 2;
            const y = 42 + i * (tierH + gapY);
            const isSel = node.id === current.id;
            const c = COLOR_MAP[node.colorKey];
            const maxTitleChars = Math.max(16, Math.floor((w - 120) / 5.6));

            return (
              <React.Fragment key={node.id}>
                <g className="cursor-pointer vector-node" onClick={() => setSelectedNodeId(node.id)} transform={`translate(${x}, ${y})`}>
                  <title>{node.title}</title>
                  <rect
                    x="0"
                    y="0"
                    width={w}
                    height={tierH}
                    rx="9"
                    fill={isSel ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
                    stroke={isSel ? c.stroke : 'var(--border-strong)'}
                    strokeWidth={isSel ? 2.2 : 1.1}
                  />
                  <text x="16" y={tierH / 2 - 4} fill={c.stroke} fontSize="8" fontWeight="bold">
                    {clipText(node.badge, 20)}
                  </text>
                  <text x="16" y={tierH / 2 + 12} fill="var(--text-primary)" fontSize="9.8" fontWeight="bold">
                    {clipText(node.title, maxTitleChars)}
                  </text>
                  <text x={w - 14} y={tierH / 2 + 4} textAnchor="end" fill="var(--text-muted)" fontSize="7.4">
                    {clipText(node.tag, 15)}
                  </text>
                </g>

                {isSel && (
                  <path
                    d={`M ${x + w} ${y + tierH / 2} L 636 168`}
                    fill="none"
                    stroke={c.stroke}
                    strokeWidth="2"
                    strokeDasharray="4 2"
                    markerEnd={`url(#${arrowActiveId})`}
                  />
                )}
              </React.Fragment>
            );
          })}

          {/* Right Callout Anchor Box */}
          <g transform="translate(642, 42)">
            <rect x="0" y="0" width="294" height="278" rx="12" fill="var(--bg-surface)" stroke={curColor.stroke} strokeWidth="1.8" />
            <text x="18" y="28" fill="var(--accent)" fontSize="8.5" fontWeight="bold">
              {clipText(spec.edgeFlowTag.toUpperCase(), 32)}
            </text>
            <text x="18" y="54" fill="var(--text-primary)" fontSize="11.5" fontWeight="bold">
              {clipText(current.title, 28)}
            </text>
            <rect x="18" y="70" width="258" height="36" rx="6" fill="var(--bg-base)" stroke="var(--border-subtle)" />
            <text x="28" y="92" fill={curColor.stroke} fontSize="8.8" fontWeight="bold">
              {clipText(current.subtitle, 34)}
            </text>
            <text x="18" y="132" fill="var(--text-muted)" fontSize="8" fontWeight="bold">
              SELECTED CALLOUTS
            </text>
            {current.callouts.slice(0, 3).map((pt, idx) => (
              <text key={idx} x="18" y={156 + idx * 24} fill="var(--text-secondary)" fontSize="7.8">
                &bull; {clipText(pt, 39)}
              </text>
            ))}
            <line x1="18" y1="226" x2="276" y2="226" stroke="var(--border-subtle)" />
            <text x="18" y="248" fill="var(--text-muted)" fontSize="7.5">
              Root Context: {clipText(spec.rootSub, 30)}
            </text>
          </g>

          <rect x="24" y="338" width="912" height="38" rx="8" fill="var(--bg-surface-elevated)" stroke="var(--border-subtle)" />
          <text x="480" y="361" textAnchor="middle" fill="var(--text-secondary)" fontSize="8.2">
            {clipText(spec.footerRule, 106)}
          </text>
        </>
      );
    }

    if (spec.topology === 'matrix-split') {
      const visible = nodes.slice(0, 6);
      const leftList = visible.filter((n, idx) => (n.side ? n.side === 'left' : idx % 2 === 0));
      const rightList = visible.filter((n, idx) => (n.side ? n.side === 'right' : idx % 2 === 1));

      return (
        <>
          {/* Apex */}
          <rect x="250" y="16" width="460" height="46" rx="10" fill="var(--bg-surface-elevated)" stroke="var(--accent)" strokeWidth="1.6" />
          <text x="480" y="35" textAnchor="middle" fill="var(--accent)" fontSize="9.5" fontWeight="bold">
            {clipText(spec.rootLabel, 48)}
          </text>
          <text x="480" y="51" textAnchor="middle" fill="var(--text-muted)" fontSize="7.8">
            {clipText(spec.rootSub, 56)}
          </text>

          {/* Diverging Arrows */}
          <path d="M 350 62 Q 250 72 225 84" fill="none" stroke="#0284c7" strokeWidth="1.6" markerEnd={`url(#${arrowId})`} />
          <path d="M 610 62 Q 710 72 735 84" fill="none" stroke="#059669" strokeWidth="1.6" markerEnd={`url(#${arrowId})`} />

          {/* Left Column */}
          {leftList.slice(0, 3).map((node, i) => {
            const h = leftList.length <= 2 ? 106 : 72;
            const y = 86 + i * (h + 12);
            const isSel = node.id === current.id;
            const c = COLOR_MAP[node.colorKey];

            return (
              <g key={node.id} className="cursor-pointer vector-node" onClick={() => setSelectedNodeId(node.id)} transform={`translate(28, ${y})`}>
                <title>{node.title}</title>
                <rect
                  x="0"
                  y="0"
                  width="408"
                  height={h}
                  rx="10"
                  fill={isSel ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
                  stroke={isSel ? c.stroke : 'var(--border-subtle)'}
                  strokeWidth={isSel ? 2.2 : 1}
                />
                <text x="16" y="23" fill={c.stroke} fontSize="8.5" fontWeight="bold">
                  {clipText(`${node.badge} · ${node.tag}`, 46)}
                </text>
                <text x="16" y="45" fill="var(--text-primary)" fontSize="10.2" fontWeight="bold">
                  {clipText(node.title, 42)}
                </text>
                <text x="16" y={h - 14} fill="var(--text-secondary)" fontSize="8">
                  {clipText(node.subtitle, 52)}
                </text>
              </g>
            );
          })}

          {/* Right Column */}
          {rightList.slice(0, 3).map((node, i) => {
            const h = rightList.length <= 2 ? 106 : 72;
            const y = 86 + i * (h + 12);
            const isSel = node.id === current.id;
            const c = COLOR_MAP[node.colorKey];

            return (
              <g key={node.id} className="cursor-pointer vector-node" onClick={() => setSelectedNodeId(node.id)} transform={`translate(524, ${y})`}>
                <title>{node.title}</title>
                <rect
                  x="0"
                  y="0"
                  width="408"
                  height={h}
                  rx="10"
                  fill={isSel ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
                  stroke={isSel ? c.stroke : 'var(--border-subtle)'}
                  strokeWidth={isSel ? 2.2 : 1}
                />
                <text x="16" y="23" fill={c.stroke} fontSize="8.5" fontWeight="bold">
                  {clipText(`${node.badge} · ${node.tag}`, 46)}
                </text>
                <text x="16" y="45" fill="var(--text-primary)" fontSize="10.2" fontWeight="bold">
                  {clipText(node.title, 42)}
                </text>
                <text x="16" y={h - 14} fill="var(--text-secondary)" fontSize="8">
                  {clipText(node.subtitle, 52)}
                </text>
              </g>
            );
          })}

          {/* Cross comparison gutter indicator */}
          <line x1="480" y1="90" x2="480" y2="316" stroke="var(--border-subtle)" strokeDasharray="4 4" />
          <rect x="444" y="182" width="72" height="22" rx="11" fill="var(--bg-base)" stroke="var(--accent)" />
          <text x="480" y="196" textAnchor="middle" fill="var(--accent)" fontSize="7.5" fontWeight="bold">
            VS
          </text>

          <rect x="28" y="338" width="904" height="38" rx="8" fill="var(--bg-surface-elevated)" stroke="var(--border-subtle)" />
          <text x="480" y="361" textAnchor="middle" fill="var(--text-secondary)" fontSize="8.2">
            {clipText(spec.footerRule, 106)}
          </text>
        </>
      );
    }

    // 'cycle-sequence' topology (Orbital Clock / Procedural State Machine)
    const visible = nodes.slice(0, 6);
    const orbitPositions = [
      { x: 138, y: 24 },
      { x: 604, y: 24 },
      { x: 702, y: 140 },
      { x: 604, y: 248 },
      { x: 138, y: 248 },
      { x: 38, y: 140 }
    ];
    const fourPos = [
      { x: 112, y: 32 },
      { x: 626, y: 32 },
      { x: 626, y: 236 },
      { x: 112, y: 236 }
    ];
    const coords = visible.length <= 4 ? fourPos : orbitPositions;

    return (
      <>
        {/* Orbital Ring Guide */}
        <ellipse
          cx="480"
          cy="176"
          rx="275"
          ry="104"
          fill="none"
          stroke="var(--border-strong)"
          strokeWidth="1.6"
          strokeDasharray="6 4"
        />

        {/* Center Core Invariant */}
        <g transform="translate(480, 176)">
          <circle cx="0" cy="0" r="64" fill="var(--bg-surface-elevated)" stroke="var(--accent)" strokeWidth="2" />
          <text x="0" y="-14" textAnchor="middle" fill="var(--accent)" fontSize="7.8" fontWeight="bold">
            {clipText(spec.edgeFlowTag, 18)}
          </text>
          <text x="0" y="4" textAnchor="middle" fill="var(--text-primary)" fontSize="10.2" fontWeight="bold">
            {clipText(spec.rootLabel, 18)}
          </text>
          <text x="0" y="20" textAnchor="middle" fill="var(--text-muted)" fontSize="7.4">
            {clipText(spec.rootSub, 20)}
          </text>
        </g>

        {visible.map((node, i) => {
          const p = coords[i] || coords[0];
          const isSel = node.id === current.id;
          const c = COLOR_MAP[node.colorKey];

          return (
            <g
              key={node.id}
              className="cursor-pointer vector-node"
              onClick={() => setSelectedNodeId(node.id)}
              transform={`translate(${p.x}, ${p.y})`}
            >
              <title>{node.title}</title>
              <rect
                x="0"
                y="0"
                width="220"
                height="72"
                rx="10"
                fill={isSel ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
                stroke={isSel ? c.stroke : 'var(--border-subtle)'}
                strokeWidth={isSel ? 2.2 : 1.1}
              />
              <text x="12" y="21" fill={c.stroke} fontSize="8" fontWeight="bold">
                {clipText(`${node.badge} · ${node.edgeLabel || node.tag}`, 30)}
              </text>
              <text x="12" y="40" fill="var(--text-primary)" fontSize="9.5" fontWeight="bold">
                {clipText(node.title, 25)}
              </text>
              <text x="12" y="57" fill="var(--text-secondary)" fontSize="7.6">
                {clipText(node.subtitle, 30)}
              </text>
            </g>
          );
        })}

        <rect x="24" y="340" width="912" height="36" rx="8" fill="var(--bg-surface-elevated)" stroke="var(--border-subtle)" />
        <text x="480" y="362" textAnchor="middle" fill="var(--text-secondary)" fontSize="8.2">
          {clipText(spec.footerRule, 106)}
        </text>
      </>
    );
  };

  return (
    <div className="w-full flex flex-col gap-6 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] surface-specular">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <Compass className="w-5 h-5 text-[var(--accent)]" />
            <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
              {spec.title}
            </h3>
            <span className="text-xs px-2 py-0.5 rounded font-mono bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
              {spec.articles}
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">{spec.summary}</p>
        </div>
      </div>

      {/* Quick Node Switcher Strip */}
      <div className="flex flex-wrap gap-2">
        {spec.nodes.map((node) => {
          const isSel = node.id === current.id;
          return (
            <button
              key={node.id}
              type="button"
              onClick={() => setSelectedNodeId(node.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono border transition-colors cursor-pointer ${
                isSel
                  ? 'bg-[var(--accent)] text-[var(--accent-contrast)] border-[var(--accent)] font-bold'
                  : 'bg-[var(--bg-base)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]'
              }`}
            >
              {node.badge}: {node.title}
            </button>
          );
        })}
      </div>

      {/* Main Interactive SVG Canvas */}
      <div className="w-full overflow-x-auto pb-2">
        <svg viewBox="0 0 960 390" className="w-full min-w-[740px] h-auto select-none font-mono">
          <defs>
            <pattern id={gridId} width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.8" fill="var(--border-strong)" opacity="0.35" />
            </pattern>
            <marker
              id={arrowId}
              viewBox="0 0 10 10"
              refX="7"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 9 5 L 0 9 z" fill="var(--text-secondary)" />
            </marker>
            <marker
              id={arrowActiveId}
              viewBox="0 0 10 10"
              refX="7"
              refY="5"
              markerWidth="6.5"
              markerHeight="6.5"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 9 5 L 0 9 z" fill="var(--accent)" />
            </marker>
          </defs>

          <rect x="0" y="0" width="960" height="390" rx="14" fill="var(--bg-base)" stroke="var(--border-subtle)" />
          <rect x="0" y="0" width="960" height="390" rx="14" fill={`url(#${gridId})`} />

          {renderSvgTopology()}
        </svg>
      </div>

      {/* Active Callout & Jurisprudence Detail Drawer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 p-5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
        <div className="lg:col-span-7 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded border ${curColor.badgeClass}`}>
              {current.badge}
            </span>
            <h4 className="text-base font-bold text-[var(--text-primary)]">{current.title}</h4>
          </div>

          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">{current.rule}</p>

          <div className="space-y-1.5 pt-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5">
              <GitBranch className="w-3.5 h-3.5 text-[var(--accent)]" />
              Vector Mechanics &amp; Provisos
            </span>
            <ul className="space-y-1">
              {current.callouts.map((c, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2 border-t border-[var(--border-subtle)] flex items-start gap-2 text-xs text-[var(--text-primary)]">
            <Scale className="w-3.5 h-3.5 text-[var(--accent)] shrink-0 mt-0.5" />
            <span>
              <strong>Landmark Anchor:</strong> {current.landmarkCase}
            </span>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-between gap-3">
          <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20 space-y-1.5 h-full">
            <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase text-rose-500">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Exam Trap &amp; Distinction</span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{current.examTrap}</p>
          </div>

          <div className="px-3 py-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center gap-2 text-[11px] font-mono text-[var(--text-muted)]">
            <BookOpen className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
            <span className="truncate">{spec.category} &bull; {spec.articles}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
