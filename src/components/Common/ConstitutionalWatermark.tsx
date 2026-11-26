import React from 'react';
import { motion } from 'motion/react';

export type WatermarkVariant = 'chakra' | 'scales' | 'pillar' | 'scroll' | 'rotunda';

interface ConstitutionalWatermarkProps {
  variant?: WatermarkVariant;
  position?: 'bottom-right' | 'top-right' | 'center-right';
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  className?: string;
}

const SIZE_CLASSES: Record<NonNullable<ConstitutionalWatermarkProps['size']>, string> = {
  sm: 'w-40 h-40',
  md: 'w-60 h-60',
  lg: 'w-80 h-80'
};

const POS_CLASSES: Record<NonNullable<ConstitutionalWatermarkProps['position']>, string> = {
  'bottom-right': '-right-12 -bottom-12',
  'top-right': '-right-10 -top-10',
  'center-right': '-right-12 top-1/2 -translate-y-1/2'
};

export const ConstitutionalWatermark: React.FC<ConstitutionalWatermarkProps> = ({
  variant = 'chakra',
  position = 'bottom-right',
  size = 'md',
  animated = true,
  className = ''
}) => {
  const baseClass = `pointer-events-none select-none absolute ${POS_CLASSES[position]} ${SIZE_CLASSES[size]} text-[var(--text-primary)] opacity-[0.045] ${className}`;

  if (variant === 'chakra') {
    return (
      <motion.svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className={baseClass}
        animate={animated ? { rotate: 360 } : undefined}
        transition={animated ? { duration: 80, repeat: Infinity, ease: 'linear' } : undefined}
      >
        <circle cx="100" cy="100" r="88" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="76" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
        <circle cx="100" cy="100" r="16" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="5" fill="currentColor" opacity="0.5" />
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 15 * Math.PI) / 180;
          const x1 = 100 + 16 * Math.cos(angle);
          const y1 = 100 + 16 * Math.sin(angle);
          const x2 = 100 + 88 * Math.cos(angle);
          const y2 = 100 + 88 * Math.sin(angle);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" />;
        })}
      </motion.svg>
    );
  }

  if (variant === 'scales') {
    return (
      <motion.svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className={baseClass}
        animate={animated ? { y: [-3, 3, -3] } : undefined}
        transition={animated ? { duration: 7, repeat: Infinity, ease: 'easeInOut' } : undefined}
      >
        <circle cx="100" cy="100" r="86" fill="none" stroke="currentColor" strokeWidth="0.9" strokeDasharray="4 4" />
        <line x1="100" y1="30" x2="100" y2="164" stroke="currentColor" strokeWidth="2" />
        <path d="M 64 164 H 136 M 76 172 H 124" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="100" cy="40" r="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <motion.g
          animate={animated ? { rotate: [-2.2, 2.2, -2.2] } : undefined}
          transition={animated ? { duration: 6.5, repeat: Infinity, ease: 'easeInOut' } : undefined}
          style={{ transformOrigin: '100px 48px' }}
        >
          <path d="M 42 54 Q 100 42 158 54" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M 42 54 L 28 106 L 56 106 Z" fill="none" stroke="currentColor" strokeWidth="1.1" />
          <path d="M 24 106 Q 42 122 60 106" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M 158 54 L 144 106 L 172 106 Z" fill="none" stroke="currentColor" strokeWidth="1.1" />
          <path d="M 140 106 Q 158 122 176 106" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </motion.g>
      </motion.svg>
    );
  }

  if (variant === 'pillar') {
    return (
      <motion.svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className={baseClass}
        animate={animated ? { y: [-2, 3, -2] } : undefined}
        transition={animated ? { duration: 8, repeat: Infinity, ease: 'easeInOut' } : undefined}
      >
        <circle cx="100" cy="100" r="88" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
        <rect x="66" y="42" width="68" height="14" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M 72 56 C 72 74, 128 74, 128 56" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <line x1="82" y1="70" x2="78" y2="162" stroke="currentColor" strokeWidth="1.6" />
        <line x1="100" y1="70" x2="100" y2="162" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 3" />
        <line x1="118" y1="70" x2="122" y2="162" stroke="currentColor" strokeWidth="1.6" />
        <rect x="58" y="162" width="84" height="10" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="48" y="172" width="104" height="10" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </motion.svg>
    );
  }

  if (variant === 'scroll') {
    return (
      <motion.svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className={baseClass}
        animate={animated ? { rotate: [-1.5, 1.5, -1.5] } : undefined}
        transition={animated ? { duration: 9, repeat: Infinity, ease: 'easeInOut' } : undefined}
      >
        <circle cx="100" cy="100" r="88" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 4" />
        <rect x="52" y="34" width="96" height="132" rx="10" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <line x1="70" y1="62" x2="130" y2="62" stroke="currentColor" strokeWidth="1.5" />
        <line x1="70" y1="80" x2="130" y2="80" stroke="currentColor" strokeWidth="1.1" />
        <line x1="70" y1="96" x2="120" y2="96" stroke="currentColor" strokeWidth="1.1" />
        <line x1="70" y1="112" x2="126" y2="112" stroke="currentColor" strokeWidth="1.1" />
        <circle cx="122" cy="140" r="14" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="122" cy="140" r="7" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      </motion.svg>
    );
  }

  // 'rotunda'
  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 200 200"
      className={baseClass}
      animate={animated ? { scale: [1, 1.03, 1] } : undefined}
      transition={animated ? { duration: 8, repeat: Infinity, ease: 'easeInOut' } : undefined}
    >
      <circle cx="100" cy="100" r="88" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 4" />
      <path d="M 46 92 A 54 50 0 0 1 154 92 Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <line x1="100" y1="26" x2="100" y2="42" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="100" cy="24" r="3" fill="currentColor" />
      <rect x="38" y="92" width="124" height="10" fill="none" stroke="currentColor" strokeWidth="1.4" />
      {[54, 77, 100, 123, 146].map((x) => (
        <line key={x} x1={x} y1="102" x2={x} y2="154" stroke="currentColor" strokeWidth="1.5" />
      ))}
      <rect x="34" y="154" width="132" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="26" y="164" width="148" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </motion.svg>
  );
};
