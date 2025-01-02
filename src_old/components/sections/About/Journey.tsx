import React from 'react';
import { Container } from '../../ui/Container';
import { Milestone } from './Milestone';
import { History } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';

export function Journey() {
  const t = useTranslation();

  return (
    <section id="journey" className="py-20 bg-primary-900/50">
      <Container>
        <div className="text-center mb-12">
          <History className="w-16 h-16 text-primary-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">{t.about.journey.title}</h2>
          <p className="text-xl text-primary-200 max-w-3xl mx-auto mb-12">
            {t.about.journey.description}
          </p>
        </div>
      </Container>
    </section>
  );
}