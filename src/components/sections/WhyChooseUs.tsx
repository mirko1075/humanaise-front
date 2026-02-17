import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Users, Scale, Brain, BarChart3, Shield } from 'lucide-react';
import { Card } from '../ui/Card';
import { useTranslation } from '../../hooks/useTranslation';
import { staggerContainer, staggerItem, fadeInUp, scrollViewport } from '../../utils/animations';

const reasons = [
  {
    icon: Users,
  },
  {
    icon: Scale,
  },
  {
    icon: Brain,
  },
  {
    icon: BarChart3,
  },
  {
    icon: Shield,
  },
];

export function WhyChooseUs() {
  const t = useTranslation();
  return (
    <section className="py-20 bg-primary-900">
      <Container>
        <motion.h2
          className="text-3xl font-bold text-center text-white mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          {t.reasons.title}
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          {reasons.map((reason, index) => (
            <motion.div key={index} variants={staggerItem}>
              <Card className="text-center h-full">
                <reason.icon className="w-12 h-12 mx-auto mb-4 text-primary-600" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t.reasons.items[index].title}
                </h3>
                <p className="text-gray-600">
                  {t.reasons.items[index].description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
