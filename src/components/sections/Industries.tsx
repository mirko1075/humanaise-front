import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { INDUSTRIES } from '../../constants/sections';
import { useTranslation } from '../../hooks/useTranslation';
import { staggerContainer, staggerItem, fadeInUp, scrollViewport } from '../../utils/animations';

export function Industries() {
  const t = useTranslation();

  return (
    <section className="py-20 bg-primary-950">
      <Container>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          <h2 className="text-3xl font-bold text-center text-primary-600 mb-12">
            {t.industries.title}
          </h2>
          <h2 className="text-2xl font-bold text-center text-primary-600 mb-12">
            {t.industries.subtitle}
          </h2>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          {INDUSTRIES.map((industry, index) => (
            <motion.div key={index} variants={staggerItem}>
              <Card className="text-center h-full">
                <industry.icon className="w-12 h-12 mx-auto mb-4 text-primary-600" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t.industries.items[index].title}
                </h3>
                <p className="text-gray-600">
                  {t.industries.items[index].description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
