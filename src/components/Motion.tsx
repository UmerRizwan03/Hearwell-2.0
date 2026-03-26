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
  className = '',
  ...rest
}) => (
  <motion.section
    variants={sectionReveal}
    initial="hidden"
    whileInView="visible"
    viewport={defaultViewport}
    className={`relative isolate ${className}`}
    {...rest}
  >
    {/* Global Subtle Background Elements */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1D544F]/[0.025] to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#82CFB0]/[0.025] to-transparent" />
      <svg className="absolute top-[40%] left-0 w-full h-[60%] -translate-y-1/2 opacity-[0.015] text-[#1D544F] min-w-[1000px] object-cover" viewBox="0 0 1000 200" preserveAspectRatio="none">
        <path d="M0,100 C250,250 250,-50 500,100 C750,250 750,-50 1000,100" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M0,100 C250,180 250,20 500,100 C750,180 750,20 1000,100" stroke="currentColor" strokeWidth="1" fill="none" />
      </svg>
    </div>

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
