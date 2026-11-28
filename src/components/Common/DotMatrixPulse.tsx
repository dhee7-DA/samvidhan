import React, { useEffect, useRef } from 'react';

export type DotRhythmId =
  | 'ember'
  | 'pulse'
  | 'diamond'
  | 'orbit'
  | 'perimeter'
  | 'arrow'
  | 'wave'
  | 'glider';

export interface DotRhythmMeta {
  id: DotRhythmId;
  label: string;
  color: string;
  rgb: string;
}

export const DOT_RHYTHMS: DotRhythmMeta[] = [
  { id: 'ember', label: 'Ember', color: '#FF3B30', rgb: '255, 59, 48' },
  { id: 'pulse', label: 'Pulse', color: '#38BDF8', rgb: '56, 189, 248' },
  { id: 'diamond', label: 'Diamond', color: '#FBBF24', rgb: '251, 191, 36' },
  { id: 'orbit', label: 'Orbit', color: '#C084FC', rgb: '192, 132, 252' },
  { id: 'perimeter', label: 'Perimeter', color: '#60A5FA', rgb: '96, 165, 250' },
  { id: 'arrow', label: 'Arrow', color: '#FB923C', rgb: '251, 146, 60' },
  { id: 'wave', label: 'Wave', color: '#A855F7', rgb: '168, 85, 247' },
  { id: 'glider', label: 'Glider', color: '#FB7185', rgb: '251, 113, 133' },
];

// 24-step clockwise perimeter coordinates for 7x7 grid
const PERIMETER_RING: [number, number][] = [
  [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0],
  [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6],
  [5, 6], [4, 6], [3, 6], [2, 6], [1, 6], [0, 6],
  [0, 5], [0, 4], [0, 3], [0, 2], [0, 1],
];

// 7x7 directional arrow + sweep frames
function sampleRhythmIntensity(rhythm: DotRhythmId, x: number, y: number, t: number): number {
  const dx = x - 3;
  const dy = y - 3;
  const dist = Math.hypot(dx, dy);
  const manhattan = Math.abs(dx) + Math.abs(dy);

  switch (rhythm) {
    case 'ember': {
      // Organic crimson shimmering clusters
      const n1 = Math.sin(x * 1.4 + t * 2.8) * Math.cos(y * 1.3 - t * 2.1);
      const n2 = Math.sin((x + y) * 1.1 - t * 3.4);
      const radial = Math.max(0, 1 - dist / 4.2);
      return Math.max(0, Math.min(1, (n1 * 0.45 + n2 * 0.35 + 0.35) * (0.45 + radial * 0.65)));
    }
    case 'pulse': {
      // Electric cyan radial breathing ring
      const phase = (t * 0.85) % 1;
      const radius = phase < 0.5 ? (phase * 2) * 3.1 : (1 - (phase - 0.5) * 2) * 3.1;
      const ring = Math.exp(-Math.pow(dist - radius, 2) * 1.8);
      const core = dist < 0.8 ? 0.55 * (1 - Math.abs(phase - 0.5)) : 0;
      return Math.max(0, Math.min(1, ring + core));
    }
    case 'diamond': {
      // Warm amber concentric diamond pulse
      const phase = (t * 0.78) % 1;
      const target = phase * 4.2;
      const band = Math.exp(-Math.pow(manhattan - target, 2) * 1.65);
      const centerGlow = manhattan === 0 ? 0.4 + 0.6 * Math.abs(Math.sin(t * 2.4)) : 0;
      return Math.max(0, Math.min(1, band + centerGlow * 0.5));
    }
    case 'orbit': {
      // Violet rotating arcs around center pivot
      if (dx === 0 && dy === 0) return 0.35;
      const angle = Math.atan2(dy, dx);
      const spin = t * 3.2;
      const arc1 = Math.pow(Math.max(0, Math.cos(angle - spin)), 4);
      const arc2 = Math.pow(Math.max(0, Math.cos(angle - spin + Math.PI)), 4);
      const ringMask = Math.exp(-Math.pow(dist - 2.35, 2) * 1.4);
      return Math.max(0, Math.min(1, (arc1 + arc2) * ringMask));
    }
    case 'perimeter': {
      // Sky-blue perimeter chase trail
      const idx = PERIMETER_RING.findIndex(([px, py]) => px === x && py === y);
      if (idx === -1) {
        // Subtle 2x2 / center breathe
        return dist <= 1.1 ? 0.15 + 0.25 * (0.5 + 0.5 * Math.sin(t * 3)) : 0;
      }
      const head = (t * 14) % PERIMETER_RING.length;
      const diff = (head - idx + PERIMETER_RING.length) % PERIMETER_RING.length;
      return diff < 8 ? Math.pow(1 - diff / 8, 1.5) : 0;
    }
    case 'arrow': {
      // Burnt-orange scanning arrow / horizontal sweep
      const sweepX = ((t * 5.2) % 9) - 1;
      const arrowTip = Math.abs(dx - (sweepX - Math.abs(dy) * 0.65));
      const stem = Math.abs(dy) <= 0.5 && x <= sweepX ? 0.65 : 0;
      const tip = Math.exp(-Math.pow(arrowTip, 2) * 2.2) * (Math.abs(dy) <= 2.4 ? 1 : 0);
      return Math.max(0, Math.min(1, Math.max(tip, stem)));
    }
    case 'wave': {
      // Deep lavender diagonal comet wave
      const diag = (x + y) / 2;
      const wavePos = ((t * 4.2) % 9) - 1.5;
      const crest = Math.exp(-Math.pow(diag - wavePos, 2) * 1.1);
      return Math.max(0, Math.min(1, crest));
    }
    case 'glider': {
      // Rose corner-hopping chevron glider
      const step = ((Math.floor(t * 2.4) % 4) + 4) % 4;
      const targets: [number, number][] = [
        [1, 1],
        [5, 1],
        [5, 5],
        [1, 5],
      ];
      const [tx, ty] = targets[step];
      const d = Math.hypot(x - tx, y - ty);
      return d < 1.5 ? Math.max(0, 1 - d / 1.6) : 0;
    }
  }
}

interface DotMatrixPulseProps {
  rhythm: DotRhythmId;
  active: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
}

const SIZE_MAP = {
  xs: { box: 20, dot: 2.0, gap: 0.7 },
  sm: { box: 24, dot: 2.4, gap: 0.9 },
  md: { box: 32, dot: 3.3, gap: 1.2 },
  lg: { box: 148, dot: 13, gap: 7 },
};

export const DotMatrixPulse: React.FC<DotMatrixPulseProps> = ({
  rhythm,
  active,
  size = 'sm',
  className = '',
}) => {
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const stateRef = useRef({ rhythm, active });

  useEffect(() => {
    stateRef.current = { rhythm, active };
  }, [rhythm, active]);

  const meta = DOT_RHYTHMS.find((r) => r.id === rhythm) || DOT_RHYTHMS[2];
  const dims = SIZE_MAP[size];

  useEffect(() => {
    let rafId = 0;
    const start = performance.now();

    const tick = (now: number) => {
      rafId = requestAnimationFrame(tick);
      const { rhythm: rId, active: isActive } = stateRef.current;
      const currentMeta = DOT_RHYTHMS.find((r) => r.id === rId) || DOT_RHYTHMS[2];
      const t = Math.max(0, (now - start) * 0.001);

      // When paused, render a gentle slow idle breath at low intensity
      const effectiveT = isActive ? t : t * 0.25;
      const intensityScale = isActive ? 1 : 0.38;

      for (let idx = 0; idx < 49; idx++) {
        const el = dotRefs.current[idx];
        if (!el) continue;
        const x = idx % 7;
        const y = Math.floor(idx / 7);
        const raw = sampleRhythmIntensity(rId, x, y, effectiveT) * intensityScale;

        // Dim grid backdrop (0.14) -> bright white-hot core + colored bloom
        const alpha = 0.14 + raw * 0.86;
        const whiteMix = Math.max(0, (raw - 0.55) / 0.45);
        if (whiteMix > 0.15) {
          el.style.backgroundColor = `rgba(255, 255, 255, ${alpha.toFixed(2)})`;
        } else {
          el.style.backgroundColor = `rgba(${currentMeta.rgb}, ${alpha.toFixed(2)})`;
        }

        if (raw > 0.35) {
          const glowPx = size === 'lg' ? 10 : size === 'md' ? 5 : 3;
          el.style.boxShadow = `0 0 ${glowPx}px rgba(${currentMeta.rgb}, ${(raw * 0.85).toFixed(2)})`;
          el.style.transform = `scale(${(1 + raw * 0.22).toFixed(2)})`;
        } else {
          el.style.boxShadow = 'none';
          el.style.transform = 'scale(1)';
        }
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [size]);

  return (
    <div
      className={`grid grid-cols-7 shrink-0 ${className}`}
      style={{
        width: dims.box,
        height: dims.box,
        gap: dims.gap,
        padding: 1,
      }}
      aria-hidden="true"
    >
      {Array.from({ length: 49 }, (_, idx) => (
        <span
          key={idx}
          ref={(el) => {
            dotRefs.current[idx] = el;
          }}
          className="rounded-full block will-change-transform"
          style={{
            width: dims.dot,
            height: dims.dot,
            backgroundColor: `rgba(${meta.rgb}, 0.16)`,
          }}
        />
      ))}
    </div>
  );
};

interface ShimmerLabelProps {
  text: string;
  active: boolean;
  accentColor?: string;
  className?: string;
}

export const ShimmerLabel: React.FC<ShimmerLabelProps> = ({
  text,
  active,
  accentColor = '#ffffff',
  className = '',
}) => {
  return (
    <span
      className={`relative inline-block font-medium tracking-tight select-none ${className}`}
      style={
        active
          ? {
              backgroundImage: `linear-gradient(105deg, rgba(161,161,170,0.72) 0%, rgba(161,161,170,0.72) 38%, ${accentColor} 50%, rgba(161,161,170,0.72) 62%, rgba(161,161,170,0.72) 100%)`,
              backgroundSize: '220% 100%',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              animation: 'dotShimmerSweep 2.4s linear infinite',
            }
          : { color: 'rgba(161,161,170,0.85)' }
      }
    >
      {text}
    </span>
  );
};
