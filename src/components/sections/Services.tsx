import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { SERVICES } from '../../constants/services';
import { useTranslation } from '../../hooks/useTranslation';

export function Services() {
  const t = useTranslation();
  return (
    <div id="services" className="py-16 bg-indigo-900">
      <Container>
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive AI solutions to power your business transformation"
          theme="dark"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="p-6 border border-indigo-700 rounded-lg bg-indigo-800/50 hover:bg-indigo-800 transition-colors"
            >
              <service.icon className="h-12 w-12 text-indigo-300 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {t.services.items[index].title}
              </h3>
              <p className="text-indigo-200">{t.services.items[index].description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}