import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { TESTIMONIALS } from '../../constants/testimonials';
import { useTranslation } from '../../hooks/useTranslation';
import { staggerContainer, staggerItem, scrollViewport } from '../../utils/animations';

export function SuccessStories() {
  const t = useTranslation();
  return (
    <div id="success-stories" className="pt-32 pb-16 bg-indigo-950">
      <Container>
        <SectionHeading
          title={t.success.title}
          subtitle={t.success.subtitle}
          theme="dark"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          {TESTIMONIALS.map((story, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] rounded-2xl overflow-hidden"
            >
              <img
                src={story.image}
                alt={story.company}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-indigo-200 italic mb-4">
                  "{t.success.items[index].quote}"
                </p>
                <div className="border-t border-white/[0.1] pt-4">
                  <p className="font-semibold text-white">{story.author}</p>
                  <p className="text-indigo-300">
                    {t.success.items[index].role}
                  </p>
                  <p className="text-indigo-400">{story.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
}
