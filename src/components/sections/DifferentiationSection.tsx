import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Settings, Plug, Zap, Sparkles } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { staggerContainer, staggerItem, scrollViewport } from '../../utils/animations';

const icons = [Settings, Plug, Zap, Sparkles];

export function DifferentiationSection() {
  const t = useTranslation();
  return (
    <section id="why-humanaise" className="py-12 sm:py-20 bg-slate-900">
      <Container>
        <SectionHeading
          title={t.landing.differentiation.title}
          subtitle={t.landing.differentiation.subtitle}
          theme="dark"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          {t.landing.differentiation.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.div key={index} variants={staggerItem}>
                <Card className="h-full">
                  <Icon className="w-10 h-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
