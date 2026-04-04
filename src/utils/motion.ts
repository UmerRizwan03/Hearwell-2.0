/**
 * Hearwell — Global Motion System
 * 
 * Reusable Framer Motion variants and configuration.
 * Philosophy: motion should be felt, not noticed.
 */

import type { Variants, Transition } from 'framer-motion';

/* ─── Base Timing ─── */
export const BASE_DURATION = 0.8;
export const BASE_EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]; // premium slow ease-out

export const baseTransition: Transition = {
  duration: BASE_DURATION,
  ease: BASE_EASE,
};

/* ─── Fade + Up (default scroll reveal) ─── */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: baseTransition,
  },
};

/* ─── Fade only ─── */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: baseTransition,
  },
};

/* ─── Fade + Scale (for images / hero visuals) ─── */
export const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 1.02 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: BASE_EASE },
  },
};

/* ─── Slide in from left ─── */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: baseTransition,
  },
};

/* ─── Slide in from right ─── */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: baseTransition,
  },
};

/* ─── Stagger container ─── */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/* ─── Stagger item (pairs with staggerContainer) ─── */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: BASE_EASE },
  },
};

/* ─── Page transition ─── */
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
};

/* ─── Section wrapper (viewport-triggered) ─── */
export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: BASE_EASE },
  },
};

/* ─── Hero stagger (headline → subtext → buttons) ─── */
export const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05,
    },
  },
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: BASE_DURATION, ease: BASE_EASE },
  },
};

/* ─── Animated Structural Line ─── */
export const animatedDivider: Variants = {
  hidden: { scaleX: 0, opacity: 0, transformOrigin: 'left' },
  visible: {
    scaleX: 1,
    opacity: 1,
    transformOrigin: 'left',
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ─── Default viewport config (trigger once, generous margin) ─── */
export const defaultViewport = {
  once: true,
  amount: 0.15 as const,
  margin: '-40px' as const,
};
