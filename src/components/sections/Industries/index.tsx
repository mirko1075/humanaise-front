import React from 'react';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { IndustryCard } from './IndustryCard';
import { INDUSTRIES } from '../../../constants/industries';
import { useTranslations } from '../../../hooks/useTranslations';

export function Industries() {
  const { industries } = useTranslations();

  return (
    <section id="industries" className="py-20 bg-primary-950">
      <Container>
        <SectionHeading
          title={industries.title}
          subtitle={industries.subtitle}
          theme="dark"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.items.map((industry, index) => (
            <IndustryCard 
              key={index}
              icon={INDUSTRIES[index].icon}
              {...industry}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}