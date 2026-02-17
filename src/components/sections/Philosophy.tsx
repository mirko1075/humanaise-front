import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Quote } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { fadeInUp, scrollViewport } from '../../utils/animations';

export function Philosophy() {
  const t = useTranslation();
  return (
    <section className="py-20 bg-primary-800">
      <Container>
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          <Quote className="w-16 h-16 text-blue-400/60 mx-auto mb-8" />
          <blockquote className="text-2xl font-medium text-white mb-8">
            "{t.about.phylosophy.quote}"
          </blockquote>
          <p className="text-xl text-primary-200">
            "{t.about.phylosophy.subtext}"
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
