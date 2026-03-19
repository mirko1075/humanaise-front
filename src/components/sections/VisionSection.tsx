import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Lightbulb } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { fadeInUp, scrollViewport } from '../../utils/animations';

export function VisionSection() {
  const t = useTranslation();
  return (
    <section id="vision" className="py-12 sm:py-20 bg-primary-900">
      <Container>
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          <Lightbulb className="w-10 h-10 sm:w-16 sm:h-16 text-secondary-400/60 mx-auto mb-4 sm:mb-8" />
          <h2 className="text-3xl font-bold text-white mb-4">
            {t.landing.vision.title}
          </h2>
          <p className="text-xl text-primary-200 mb-8">
            {t.landing.vision.subtitle}
          </p>
          <blockquote className="text-xl sm:text-2xl font-medium text-white italic">
            "{t.landing.vision.message}"
          </blockquote>
        </motion.div>
      </Container>
    </section>
  );
}
