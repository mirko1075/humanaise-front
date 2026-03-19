import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { useTranslation } from '../../hooks/useTranslation';
import { staggerContainer, staggerItem, scrollViewport } from '../../utils/animations';

export function HowItWorksSection() {
  const t = useTranslation();
  return (
    <section id="how-it-works" className="py-12 sm:py-20 bg-primary-900">
      <Container>
        <SectionHeading
          title={t.landing.howItWorks.title}
          subtitle={t.landing.howItWorks.subtitle}
          theme="dark"
        />

        <motion.div
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          {t.landing.howItWorks.steps.map((step, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="relative text-center"
            >
              <div className="w-14 h-14 rounded-full bg-blue-500/20 border-2 border-blue-400 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-400">{index + 1}</span>
              </div>
              {index < t.landing.howItWorks.steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-blue-400/30" />
              )}
              <h3 className="text-xl font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-primary-200">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
