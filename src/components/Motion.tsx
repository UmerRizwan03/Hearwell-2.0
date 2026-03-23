/**
 * Hearwell — Reusable Motion Wrapper Components
 * 
 * Drop-in animated wrappers that integrate with the global motion system.
 * All components respect prefers-reduced-motion automatically via Framer Motion.
 */

import React from 'react';
import { motion } from 'framer-motion';
import type { Variants, HTMLMotionProps } from 'framer-motion';
import {
  fadeUp,
  fadeIn,
  fadeScale,
  staggerContainer,
  staggerItem,
  sectionReveal,
  defaultViewport,
} from '../utils/motion';

/* ─── Generic In-View Wrapper ─── */
interface FadeInProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  variants = fadeUp,
  className,
  delay = 0,
  ...rest
}) => (
  <motion.div
    variants={variants}
    initial="hidden"
    whileInView="visible"
    viewport={defaultViewport}
    className={className}
    transition={delay ? { delay } : undefined}
    {...rest}
  >
    {children}
  </motion.div>
);

/* ─── Fade only (no Y movement) ─── */
export const FadeOnly: React.FC<FadeInProps> = ({
  children,
  className,
  delay = 0,
  ...rest
}) => (
  <motion.div
    variants={fadeIn}
    initial="hidden"
    whileInView="visible"
    viewport={defaultViewport}
    className={className}
    transition={delay ? { delay } : undefined}
    {...rest}
  >
    {children}
  </motion.div>
);

/* ─── Fade + Scale (images) ─── */
export const FadeScaleIn: React.FC<FadeInProps> = ({
  children,
  className,
  ...rest
}) => (
  <motion.div
    variants={fadeScale}
    initial="hidden"
    whileInView="visible"
    viewport={defaultViewport}
    className={className}
    {...rest}
  >
    {children}
  </motion.div>
);

/* ─── Section Reveal ─── */
export const SectionReveal: React.FC<FadeInProps> = ({
  children,
  className,
  ...rest
}) => (
  <motion.section
    variants={sectionReveal}
    initial="hidden"
    whileInView="visible"
    viewport={defaultViewport}
    className={className}
    {...rest}
  >
    {children}
  </motion.section>
);

/* ─── Stagger Container + Item ─── */
interface StaggerProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
}

export const StaggerContainer: React.FC<StaggerProps> = ({
  children,
  className,
  ...rest
}) => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={defaultViewport}
    className={className}
    {...rest}
  >
    {children}
  </motion.div>
);

export const StaggerItem: React.FC<StaggerProps> = ({
  children,
  className,
  ...rest
}) => (
  <motion.div
    variants={staggerItem}
    className={className}
    {...rest}
  >
    {children}
  </motion.div>
);
