import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Mail, FileText, MessageCircle, Workflow } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { staggerContainer, staggerItem, scrollViewport } from '../../utils/animations';

const icons = [Mail, FileText, MessageCircle, Workflow];

export function Services() {
  const t = useTranslation();
  return (
    <section id="services" className="py-12 sm:py-20 bg-indigo-900">
      <Container>
        <SectionHeading
          title={t.landing.services.title}
          subtitle={t.landing.services.subtitle}
          theme="dark"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          {t.landing.services.items.map((service, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                className="p-6 border border-white/[0.1] rounded-2xl bg-white/[0.05] backdrop-blur-sm hover:bg-white/[0.08] transition-all duration-300"
              >
                <Icon className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-indigo-200">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
