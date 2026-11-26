import React, { useState } from 'react';
import { AlertTriangle, Landmark } from 'lucide-react';

interface CourtVector {
  id: string;
  title: string;
  articles: string;
  accent: string;
  scope: string;
  hcComparison: string;
  trap: string;
}

const COURT_VECTORS: CourtVector[] = [
  {
    id: 'original',
    title: 'Original Exclusive Federal Jurisdiction',
    articles: 'Article 131',
    accent: '#38bdf8',
    scope: 'Exclusive SC forum for federal legal disputes between: (a) Centre vs 1+ States, (b) Centre+State vs 1+ States, or (c) Inter-State disputes involving legal rights.',
    hcComparison: 'High Courts lack Art 131 federal original jurisdiction (though they enjoy Art 226 writ & Admiralty/Election original powers).',
    trap: 'Art 131 EXCLUDES Inter-State Water Disputes (Art 262), Pre-Constitutional Treaties, Finance Commission matters, and private citizen suits!'
  },
  {
    id: 'writs',
    title: 'Constitutional Writ Jurisdiction',
    articles: 'Art 32 (SC) vs Art 226 (HC)',
    accent: '#10b981',
    scope: 'Right to move SC under Art 32 is ITSELF a Fundamental Right (only for Part III violations). High Courts under Art 226 enforce BOTH Fundamental Rights AND ordinary legal rights.',
    hcComparison: 'High Court territorial writ jurisdiction is WIDER in subject matter (Part III + legal rights), while SC is WIDER geographically (all India).',
    trap: 'Art 32 is guaranteed (cannot refuse relief if FR is violated); Art 226 relief is discretionary (HC can refuse if an alternate statutory remedy exists).'
  },
  {
    id: 'slp',
    title: 'Special Leave Petition (Plenary Residual)',
    articles: 'Article 136',
    accent: '#f43f5e',
    scope: 'Discretionary extraordinary power enabling SC to grant special leave to appeal from ANY judgment/order of ANY court or tribunal across India.',
    hcComparison: 'Exclusive to Supreme Court — High Courts do NOT possess Article 136 plenary appellate powers (they use Art 227 superintendence).',
    trap: 'Art 136 covers all courts AND quasi-judicial tribunals EXCEPT Armed Forces Courts/Tribunals (Art 136(2) exclusion)!'
  },
  {
    id: 'advisory',
    title: 'Presidential Advisory Reference',
    articles: 'Article 143(1) & 143(2)',
    accent: '#a855f7',
    scope: 'Two distinct tracks when President refers a question of law/fact of public importance to SC: Clause (1) discretionary opinion; Clause (2) pre-constitution treaty/covenant disputes.',
    hcComparison: 'Strictly exclusive to the Supreme Court; President cannot invoke Art 143 before a High Court.',
    trap: 'TRAP: Under 143(1), SC MAY refuse to answer (Ayodhya Reference 1994); under 143(2), SC MUST answer! Opinion under BOTH is non-binding on President.'
  },
  {
    id: 'binding',
    title: 'Precedent Law & Complete Justice',
    articles: 'Articles 141 & 142',
    accent: 'var(--accent)',
    scope: 'Art 141: Law declared by SC binds ALL courts inside India (SC itself can overrule via larger bench, Bengal Immunity). Art 142: Power to pass any decree necessary for "complete justice".',
    hcComparison: 'High Court rulings bind subordinate courts/tribunals in that State; Art 142 Complete Justice belongs solely to Supreme Court.',
    trap: 'Supreme Court Bar Assn (1998): Art 142 cannot be used to directly supplant express substantive statutory prohibitions, though Shilpa Sailesh (2023) affirmed divorce decrees.'
  },
  {
    id: 'collegium',
    title: 'Collegium & Judicial Independence',
    articles: 'Arts 124, 217 & 99th Amd',
    accent: '#0ea5e9',
    scope: 'Post-Second & Third Judges Cases (1993, 1998): CJI + 4 senior-most SC Judges recommend SC appointments; CJI + 2 senior-most recommend HC appointments. NJAC (99th Amd) struck down in 2015.',
    hcComparison: 'For HC judges, State Governor, HC CJ + 2 senior HC judges initiate proposal before SC 3-Judge Collegium & Union Law Ministry.',
    trap: 'Constitution text uses the word "consultation" in Art 124(2); "Collegium" is a judicially evolved doctrine, NOT written in the Bare Act!'
  }
];

export const SupremeCourtJurisdictionSVG: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('writs');
  const current = COURT_VECTORS.find((c) => c.id === activeId) || COURT_VECTORS[1];

  return (
    <div className="w-full flex flex-col gap-6 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] surface-specular">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Landmark className="w-5 h-5 text-[var(--accent)]" />
            <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
              Supreme Court &amp; High Court 6-Vector Jurisdiction Architecture
            </h3>
            <span className="text-xs px-2 py-0.5 rounded font-mono bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
              Articles 124 – 147 &amp; 226
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            Radial hub diagram contrasting Original, Writ, SLP, Advisory, Complete Justice, and Collegium powers.
          </p>
        </div>
      </div>

      {/* SVG Radial Hub Diagram */}
      <div className="w-full overflow-x-auto pb-2">
        <svg viewBox="0 0 960 390" className="w-full h-auto select-none font-mono">
          <defs>
            <pattern id="scGrid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.8" fill="var(--border-strong)" opacity="0.35" />
            </pattern>
            <marker id="scArrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 9 5 L 0 9 z" fill="var(--text-secondary)" />
            </marker>
          </defs>

          <rect x="0" y="0" width="960" height="390" rx="14" fill="var(--bg-base)" stroke="var(--border-subtle)" />
          <rect x="0" y="0" width="960" height="390" rx="14" fill="url(#scGrid)" />

          {/* Central Apex Node: Supreme Court of India */}
          <g transform="translate(480, 195)">
            <circle cx="0" cy="0" r="82" fill="var(--bg-surface-elevated)" stroke="var(--accent)" strokeWidth="2" />
            <circle cx="0" cy="0" r="70" fill="none" stroke="var(--border-subtle)" strokeDasharray="3 3" />
            <text x="0" y="-18" textAnchor="middle" fill="var(--text-muted)" fontSize="8" fontWeight="bold">ARTICLES 124–147</text>
            <text x="0" y="2" textAnchor="middle" fill="var(--text-primary)" fontSize="13" fontWeight="bold">SUPREME</text>
            <text x="0" y="18" textAnchor="middle" fill="var(--text-primary)" fontSize="13" fontWeight="bold">COURT</text>
            <text x="0" y="36" textAnchor="middle" fill="var(--accent)" fontSize="8">COURT OF RECORD (129)</text>
          </g>

          {/* 3 Left Vector Nodes + Curved Callouts */}
          {[
            { id: 'original', y: 42, cy: 84, title: 'Art 131 · Original', sub: 'Centre-State / Inter-State', tag: 'Exclusive', accent: '#38bdf8' },
            { id: 'writs', y: 155, cy: 195, title: 'Art 32 vs 226 · Writs', sub: 'SC FR-only · HC Wider', tag: 'Soul of Const.', accent: '#10b981' },
            { id: 'slp', y: 268, cy: 308, title: 'Art 136 · SLP', sub: 'Any Court / Tribunal', tag: 'No Military', accent: '#f43f5e' }
          ].map((node) => {
            const isSel = activeId === node.id;
            return (
              <React.Fragment key={node.id}>
                <path
                  d={`M 272 ${node.cy} Q 340 ${node.cy} 398 ${node.id === 'writs' ? 195 : node.id === 'original' ? 158 : 232}`}
                  fill="none"
                  stroke={isSel ? node.accent : 'var(--border-strong)'}
                  strokeWidth={isSel ? '2.2' : '1.2'}
                  markerEnd="url(#scArrow)"
                />
                <g className="cursor-pointer vector-node" onClick={() => setActiveId(node.id)} transform={`translate(34, ${node.y})`}>
                  <rect
                    x="0"
                    y="0"
                    width="238"
                    height="82"
                    rx="10"
                    fill={isSel ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
                    stroke={isSel ? node.accent : 'var(--border-subtle)'}
                    strokeWidth={isSel ? '2' : '1'}
                  />
                  <text x="14" y="25" fill={node.accent} fontSize="10" fontWeight="bold">{node.title}</text>
                  <text x="14" y="44" fill="var(--text-primary)" fontSize="8.5">{node.sub}</text>
                  <rect x="14" y="54" width="96" height="16" rx="4" fill="var(--bg-base)" stroke="var(--border-subtle)" />
                  <text x="62" y="65" textAnchor="middle" fill="var(--text-muted)" fontSize="7.5">{node.tag}</text>
                </g>
              </React.Fragment>
            );
          })}

          {/* 3 Right Vector Nodes + Curved Callouts */}
          {[
            { id: 'advisory', y: 42, cy: 84, title: 'Art 143 · Advisory', sub: '143(1) Opt · 143(2) Must', tag: 'Non-Binding', accent: '#a855f7' },
            { id: 'binding', y: 155, cy: 195, title: 'Art 141 & 142 · Justice', sub: 'Binds All Courts · Decrees', tag: 'Complete Justice', accent: 'var(--accent)' },
            { id: 'collegium', y: 268, cy: 308, title: 'Art 124 · Collegium', sub: 'CJI + 4 Sr Judges · NJAC Struck', tag: 'Jud. Primacy', accent: '#0ea5e9' }
          ].map((node) => {
            const isSel = activeId === node.id;
            return (
              <React.Fragment key={node.id}>
                <path
                  d={`M ${node.id === 'binding' ? 562 : 550} ${node.id === 'binding' ? 195 : node.id === 'advisory' ? 158 : 232} Q 620 ${node.cy} 688 ${node.cy}`}
                  fill="none"
                  stroke={isSel ? node.accent : 'var(--border-strong)'}
                  strokeWidth={isSel ? '2.2' : '1.2'}
                  markerEnd="url(#scArrow)"
                />
                <g className="cursor-pointer vector-node" onClick={() => setActiveId(node.id)} transform={`translate(688, ${node.y})`}>
                  <rect
                    x="0"
                    y="0"
                    width="238"
                    height="82"
                    rx="10"
                    fill={isSel ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'}
                    stroke={isSel ? node.accent : 'var(--border-subtle)'}
                    strokeWidth={isSel ? '2' : '1'}
                  />
                  <text x="14" y="25" fill={node.accent} fontSize="10" fontWeight="bold">{node.title}</text>
                  <text x="14" y="44" fill="var(--text-primary)" fontSize="8.5">{node.sub}</text>
                  <rect x="14" y="54" width="108" height="16" rx="4" fill="var(--bg-base)" stroke="var(--border-subtle)" />
                  <text x="68" y="65" textAnchor="middle" fill="var(--text-muted)" fontSize="7.5">{node.tag}</text>
                </g>
              </React.Fragment>
            );
          })}
        </svg>
      </div>

      {/* Inspector Drawer */}
      <div className="p-5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-8 space-y-2.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)]">
              {current.articles}
            </span>
            <h4 className="text-base font-bold text-[var(--text-primary)]">{current.title}</h4>
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">{current.scope}</p>
          <div className="p-2.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)]">
            <strong className="text-[var(--text-primary)]">High Court Distinction: </strong>
            {current.hcComparison}
          </div>
        </div>

        <div className="lg:col-span-4 p-3.5 rounded-lg bg-rose-500/5 border border-rose-500/20 space-y-1.5">
          <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase text-rose-400">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Critical Trap</span>
          </div>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{current.trap}</p>
        </div>
      </div>
    </div>
  );
};
