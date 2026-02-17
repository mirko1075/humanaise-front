import React from 'react';
import { Container } from '../ui/Container';
import { Users, Scale, Brain, BarChart3, Shield } from 'lucide-react';
import { Card } from '../ui/Card';
import { useTranslation } from '../../hooks/useTranslation';

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
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          {t.reasons.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="text-center">
              <reason.icon className="w-12 h-12 mx-auto mb-4 text-primary-600" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t.reasons.items[index].title}
              </h3>
              <p className="text-gray-600">
                {t.reasons.items[index].description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
