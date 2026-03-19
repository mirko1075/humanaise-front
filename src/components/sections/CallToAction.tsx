import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { useTranslation } from '../../hooks/useTranslation';
import { fadeInUp, scrollViewport } from '../../utils/animations';

export function CallToAction() {
  const t = useTranslation();
  return (
    <section id="cta" className="py-12 sm:py-20 bg-gradient-to-br from-primary-800 via-primary-900 to-indigo-900">
      <Container>
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            {t.landing.cta.title}
          </h2>
          <p className="text-base sm:text-xl text-primary-200 mb-6 sm:mb-8">
            {t.landing.cta.subtitle}
          </p>
          <Button
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t.landing.cta.buttonText}
          </Button>
          <p className="text-sm text-primary-300 mt-4">
            {t.landing.cta.microcopy}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
