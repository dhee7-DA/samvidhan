import type { Variants, Transition } from 'motion/react';

/**
 * SAMVIDHAN Design Motion Tokens
 * Hardware-accelerated compositor curves (transform / opacity only).
 * Always wrap root with <MotionConfig reducedMotion="user">.
 */
export const motionTokens = {
  duration: {
    micro: 0.13,
    fast: 0.18,
    normal: 0.24,
    slow: 0.36,
    page: 0.20,
    exit: 0.13
  },
  ease: {
    out: [0.16, 1, 0.3, 1] as const,
    inOut: [0.65, 0, 0.35, 1] as const,
    editorial: [0.22, 1, 0.36, 1] as const
  },
  distance: {
    micro: 4,
    small: 8,
    medium: 14
  },
  scale: {
    press: 0.975,
    pressSubtle: 0.985,
    modalEnter: 0.965
  }
} as const;

export const springs: Record<'snappy' | 'gentle' | 'bouncy' | 'cardFlip', Transition> = {
  snappy: { type: 'spring', stiffness: 480, damping: 36, mass: 0.85 },
  gentle: { type: 'spring', stiffness: 280, damping: 30, mass: 1 },
  bouncy: { type: 'spring', stiffness: 380, damping: 22, mass: 0.9 },
  cardFlip: { type: 'spring', stiffness: 320, damping: 26, mass: 0.9 }
};

/**
 * Main workspace route/view swap animation:
 * Lightweight opacity + 8px vertical glide so switching modules feels editorial and instant.
 */
export const viewTransitionVariants: Variants = {
  initial: {
    opacity: 0,
    y: motionTokens.distance.small
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.page,
      ease: motionTokens.ease.out
    }
  },
  exit: {
    opacity: 0,
    y: -motionTokens.distance.micro,
    transition: {
      duration: motionTokens.duration.exit,
      ease: motionTokens.ease.out
    }
  }
};

/**
 * Bento / grid staggered container (strict 0.05s interval ceiling per motion-patterns).
 */
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.03
    }
  }
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: motionTokens.distance.small },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.normal,
      ease: motionTokens.ease.editorial
    }
  }
};

/**
 * Overlay backdrop & elevated panel transitions (Command Palette, Vault, Dictionary, Badges).
 */
export const modalBackdropVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: motionTokens.duration.fast, ease: motionTokens.ease.out }
  },
  exit: {
    opacity: 0,
    transition: { duration: motionTokens.duration.exit, ease: motionTokens.ease.out }
  }
};

export const modalPanelVariants: Variants = {
  initial: {
    opacity: 0,
    scale: motionTokens.scale.modalEnter,
    y: motionTokens.distance.small
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: springs.gentle
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    y: motionTokens.distance.micro,
    transition: { duration: motionTokens.duration.exit, ease: motionTokens.ease.out }
  }
};

/**
 * Anchored floating popover / dropdown menu transitions.
 */
export const popoverPanelVariants: Variants = {
  initial: { opacity: 0, scale: 0.97, y: -6 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: motionTokens.duration.fast, ease: motionTokens.ease.out }
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    y: -4,
    transition: { duration: 0.11, ease: motionTokens.ease.out }
  }
};

/**
 * Detail inspector drawer reveal (SVG nodes, graph inspector, round banners).
 */
export const drawerRevealVariants: Variants = {
  initial: { opacity: 0, y: 6 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: motionTokens.duration.fast, ease: motionTokens.ease.editorial }
  },
  exit: {
    opacity: 0,
    y: -4,
    transition: { duration: 0.11, ease: motionTokens.ease.out }
  }
};
