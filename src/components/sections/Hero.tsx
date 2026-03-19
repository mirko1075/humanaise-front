import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { useTranslation } from '../../hooks/useTranslation';
import  splash from '../../imgs/copertina.jpg';

export function Hero() {
  const t = useTranslation();

  return (
    <div id="home" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("'+splash+'")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/95 via-primary-900/95 to-primary-800/95" />
      </div>

      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] z-[1]" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {t.landing.hero.title}
          </motion.h1>
          <motion.p
            className="text-base sm:text-xl text-primary-200 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          >
            {t.landing.hero.subtitle}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          >
            <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              {t.landing.hero.ctaPrimary}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t.landing.hero.ctaSecondary}
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
