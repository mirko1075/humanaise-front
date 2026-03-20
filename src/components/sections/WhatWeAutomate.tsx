import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CalendarCheck, Phone, ScanText } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { staggerContainer, staggerItem, scrollViewport } from '../../utils/animations';

const capabilities = [
  {
    icon: BookOpen,
    title: 'AI Assistants (RAG-based)',
    description:
      'Build AI assistants that answer questions using your internal documents, knowledge bases and data. Responses are grounded in your actual information, not generic AI outputs.',
  },
  {
    icon: CalendarCheck,
    title: 'AI Appointment Setters',
    description:
      'Automatically handle incoming requests, qualify leads and schedule calls or meetings through chat (WhatsApp, email or web), reducing manual back-and-forth.',
  },
  {
    icon: Phone,
    title: 'Voice Agents',
    description:
      'AI voice agents that handle calls, collect information and guide users through predefined processes, integrated with your systems and workflows.',
  },
  {
    icon: ScanText,
    title: 'AI Data Extraction & Classification',
    description:
      'Extract structured data from unstructured inputs (emails, documents, messages) and classify them to trigger automated workflows and decisions.',
  },
];

export function WhatWeAutomate() {
  return (
    <section id="what-we-automate" className="py-12 sm:py-20 bg-primary-950">
      <Container>
        <SectionHeading
          title="AI-Powered Capabilities"
          subtitle="Extend your automation with AI, from assistants to voice agents."
          theme="dark"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                className="relative p-6 border border-white/[0.1] rounded-2xl bg-white/[0.05] backdrop-blur-sm hover:bg-white/[0.08] transition-all duration-300"
              >
                <span className="absolute top-4 right-4 text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  AI
                </span>
                <Icon className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{cap.title}</h3>
                <p className="text-indigo-200">{cap.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
