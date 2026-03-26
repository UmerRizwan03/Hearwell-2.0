import React from 'react';
import { motion } from 'framer-motion';
import { heroContainer, heroItem } from '../utils/motion';
import OptimizedImage from './OptimizedImage';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, image }) => {
  return (
    <div className="relative isolate bg-[#1D544F]/[0.02] overflow-hidden py-16 md:py-24 border-b border-[#1D544F]/5">
      {/* Abstract background blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#1D544F]/[0.06] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-10 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#82CFB0]/[0.08] rounded-full blur-3xl translate-y-1/3 -translate-x-1/2 -z-10 animate-float-reverse"></div>
      
      {/* Abstract Soundwave Graphic */}
      <svg className="absolute top-[40%] left-0 w-[150%] h-[120%] -translate-y-1/2 opacity-[0.03] text-[#1D544F] min-w-[1200px] -z-10 pointer-events-none animate-pulse-subtle" viewBox="0 0 1200 200" preserveAspectRatio="none">
        <path d="M0,100 C300,300 300,-100 600,100 C900,300 900,-100 1200,100" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <path d="M0,100 C300,200 300,0 600,100 C900,200 900,0 1200,100" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
      
      <motion.div 
        className="container mx-auto px-4 md:px-6 relative z-10"
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl">
          <motion.h1 variants={heroItem} className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p variants={heroItem} className="text-lg text-gray-600 font-medium max-w-2xl leading-relaxed">
              {subtitle}
            </motion.p>
          )}
        </div>
      </motion.div>
      
      {/* Full-width background image */}
      {image && (
        <div className="absolute inset-0 opacity-35 overflow-hidden">
          <OptimizedImage
            src={image}
            alt=""
            disableBlur
            containerClassName="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/40 to-transparent"></div>
        </div>
      )}
    </div>
  );
};

export default PageHeader;
