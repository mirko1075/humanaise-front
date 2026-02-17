import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { SERVICES } from '../../constants/services';
import { useTranslation } from '../../hooks/useTranslation';
import { staggerContainer, staggerItem, scrollViewport } from '../../utils/animations';

export function Services() {
  const t = useTranslation();
  return (
    <div id="services" className="pt-32 pb-16 bg-indigo-900">
      <Container>
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive AI solutions to power your business transformation"
          theme="dark"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="p-6 border border-white/[0.1] rounded-2xl bg-white/[0.05] backdrop-blur-sm hover:bg-white/[0.08] transition-all duration-300"
            >
              <service.icon className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {t.services.items[index].title}
              </h3>
              <p className="text-indigo-200">
                {t.services.items[index].description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
}
