import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Building2, Microscope, Bot, MessageCircle, PhoneCall } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { staggerContainer, staggerItem, scrollViewport } from '../../utils/animations';

const icons = [Microscope, Building2, Bot, MessageCircle, PhoneCall];

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
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          {t.landing.useCases.items.map((useCase, index) => {
            const Icon = icons[index];
            return (
              <motion.div key={index} variants={staggerItem}>
                <div className={`h-full rounded-2xl p-6 border transition-all duration-300 ${
                  useCase.representative
                    ? 'bg-slate-800/50 border-dashed border-slate-600 hover:border-slate-500'
                    : 'bg-white border-gray-100 hover:shadow-lg'
                }`}>
                  <div className="flex items-start justify-between mb-4">
                    <Icon className={`w-10 h-10 ${useCase.representative ? 'text-blue-400' : 'text-primary-600'}`} />
                    {useCase.representative && (
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                        {t.landing.useCases.representativeBadge}
                      </span>
                    )}
                  </div>

                  <h3 className={`text-xl font-semibold mb-1 ${useCase.representative ? 'text-white' : 'text-gray-900'}`}>
                    {useCase.title}
                  </h3>
                  <p className={`text-sm font-medium mb-4 ${useCase.representative ? 'text-blue-300' : 'text-primary-600'}`}>
                    {useCase.subtitle}
                  </p>
                  <p className={`text-sm leading-relaxed ${useCase.representative ? 'text-slate-300' : 'text-gray-600'}`}>
                    {useCase.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
