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
    <div className="relative bg-[#4A908F]/5 overflow-hidden py-16 md:py-24">
      {/* Abstract background blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#4A908F]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-200/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/2"></div>
      
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
