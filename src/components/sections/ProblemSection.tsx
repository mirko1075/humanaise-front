import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { AlertCircle } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { staggerContainer, staggerItem, scrollViewport } from '../../utils/animations';

export function ProblemSection() {
  const t = useTranslation();
  return (
    <section id="problem" className="py-12 sm:py-20 bg-slate-900">
      <Container>
        <SectionHeading
          title={t.landing.problem.title}
          subtitle={t.landing.problem.subtitle}
          theme="dark"
        />

        <motion.ul
          className="max-w-2xl mx-auto space-y-4 mb-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          {t.landing.problem.painPoints.map((point, index) => (
            <motion.li
              key={index}
              variants={staggerItem}
              className="flex items-start gap-3 text-primary-200"
            >
              <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
              <span className="text-base sm:text-lg">{point}</span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          className="text-center text-lg text-white font-medium max-w-2xl mx-auto"
          variants={staggerItem}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          {t.landing.problem.closing}
        </motion.p>
      </Container>
    </section>
  );
}
