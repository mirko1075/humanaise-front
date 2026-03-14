import React from 'react';
import { Container } from '../components/ui/Container';
import { useLanguage } from '../hooks/useLanguage';
import { getLegalContent } from '../legal/legalContent';
import type { LegalSection } from '../legal/legalTypes';

function Section({ section }: { section: LegalSection }) {
  const paragraphs = section.content.split('\n\n');
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-white mb-4">{section.title}</h2>
      {paragraphs.map((p, i) => (
        <p key={i} className="text-primary-200 mb-4 whitespace-pre-line">{p}</p>
      ))}
      {section.items && (
        <ul className="list-disc list-inside text-primary-200 space-y-2 ml-4">
          {section.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export const CookiePolicy: React.FC = () => {
  const { language } = useLanguage();
  const { cookiePolicy } = getLegalContent(language);

  return (
    <div className="min-h-screen bg-primary-900 pt-24 pb-16">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">{cookiePolicy.title}</h1>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-primary-200 mb-6">
              Last updated: {cookiePolicy.lastUpdated}
            </p>
            {cookiePolicy.sections.map((section, i) => (
              <Section key={i} section={section} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
