import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { staggerContainer, staggerItem, scrollViewport } from '../../utils/animations';

export function UseCasesSection() {
  const t = useTranslation();
  return (
    <section id="use-cases" className="py-12 sm:py-20 bg-slate-900">
      <Container>
        <SectionHeading
          title={t.landing.useCases.title}
          subtitle={t.landing.useCases.subtitle}
          theme="dark"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          {t.landing.useCases.items.map((useCase, index) => (
            <motion.div key={index} variants={staggerItem}>
              <Card className="h-full">
                <div className="flex items-center gap-2 mb-3">
                  <ArrowRight className="w-5 h-5 text-primary-600" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {useCase.title}
                  </h3>
                </div>
                <p className="text-gray-600">{useCase.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
