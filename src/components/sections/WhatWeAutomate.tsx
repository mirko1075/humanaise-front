import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CalendarCheck, Phone, ScanText } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { useTranslation } from '../../hooks/useTranslation';
import { staggerContainer, staggerItem, scrollViewport } from '../../utils/animations';

const icons = [BookOpen, CalendarCheck, Phone, ScanText];

export function WhatWeAutomate() {
  const t = useTranslation();
  return (
    <section id="what-we-automate" className="py-12 sm:py-20 bg-primary-950">
      <Container>
        <SectionHeading
          title={t.landing.aiCapabilities.title}
          subtitle={t.landing.aiCapabilities.subtitle}
          theme="dark"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          {t.landing.aiCapabilities.items.map((cap, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                className="relative p-6 border border-white/[0.1] rounded-2xl bg-white/[0.05] backdrop-blur-sm hover:bg-white/[0.08] transition-all duration-300"
              >
                <span className="absolute top-4 right-4 text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  AI
                </span>
                <Icon className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{cap.title}</h3>
                <p className="text-indigo-200">{cap.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
