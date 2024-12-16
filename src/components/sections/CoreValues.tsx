import React from 'react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { CORE_VALUES } from '../../constants/sections';
import { useTranslation } from '../../hooks/useTranslation';

export function CoreValues() {
  const t = useTranslation();
  return (
    <section className="py-20 bg-gradient-to-b from-primary-900 to-primary-800">
      <Container>
        <h2 className="text-3xl font-bold text-center text-white mb-12">{t.about.values.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {CORE_VALUES.map((value, index) => (
            <Card key={index} className="text-center">
              <value.icon className="w-12 h-12 mx-auto mb-4 text-primary-600" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.about.company.values[index].title}</h3>
              <p className="text-gray-600">{t.about.company.values[index].description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}