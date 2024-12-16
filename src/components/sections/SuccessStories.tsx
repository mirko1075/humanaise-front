import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { TESTIMONIALS } from '../../constants/testimonials';
import { useTranslation } from '../../hooks/useTranslation';

export function SuccessStories() {
  const t = useTranslation();
  return (
    <div id="success-stories" className="py-16 bg-indigo-950">
      <Container>
        <SectionHeading
          title={t.success.title}
          subtitle={t.success.subtitle}
          theme="dark"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((story, index) => (
            <div
              key={index}
              className="bg-indigo-900 rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src={story.image}
                alt={story.company}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-indigo-200 italic mb-4">"{t.success.items[index].quote}"</p>
                <div className="border-t border-indigo-700 pt-4">
                  <p className="font-semibold text-white">{story.author}</p>
                  <p className="text-indigo-300">{t.success.items[index].role}</p>
                  <p className="text-indigo-400">{story.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}