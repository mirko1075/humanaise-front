import React from 'react';
import { Container } from '../../ui/Container';
import { Telescope } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';

export function Vision() {
  const t = useTranslation();

  return (
    <section id="vision" className="py-20">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Telescope className="w-16 h-16 text-primary-500 mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">{t.about.vision.title}</h2>
          <p className="text-xl text-primary-200 max-w-3xl">
            {t.about.vision.description}
          </p>
        </div>
      </Container>
    </section>
  );
}