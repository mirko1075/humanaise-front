import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, scrollViewport } from '../../utils/animations';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  theme?: 'light' | 'dark';
}

export function SectionHeading({ title, subtitle, theme = 'light' }: SectionHeadingProps) {
  return (
    <motion.div
      className="text-center mb-8 sm:mb-12"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
    >
      <h2 className={`text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base sm:text-xl max-w-2xl mx-auto ${
          theme === 'dark' ? 'text-indigo-200' : 'text-gray-600'
        }`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
