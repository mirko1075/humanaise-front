import React from 'react';
import { Container } from '../ui/Container';
import { Quote } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

export function Philosophy() {
  const t = useTranslation();
  return (
    <section className="py-20 bg-primary-800">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-16 h-16 text-primary-300 mx-auto mb-8" />
          <blockquote className="text-2xl font-medium text-white mb-8">
            "{t.about.phylosophy.quote}"
          </blockquote>
          <p className="text-xl text-primary-200">
            "{t.about.phylosophy.subtext}"
          </p>
        </div>
      </Container>
    </section>
  );
}
