import React from 'react';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { ServiceCard } from './ServiceCard';
import { SERVICES } from '../../../constants/services';
import { useTranslations } from '../../../hooks/useTranslations';

export function Services() {
  const { services } = useTranslations();

  return (
    <section id="services" className="py-20 bg-primary-900">
      <Container>
        <SectionHeading
          title={services.title}
          subtitle={services.subtitle}
          theme="dark"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.items.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={SERVICES[index].icon}
              {...service}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}