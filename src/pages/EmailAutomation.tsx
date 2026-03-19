import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Contact } from '../components/sections/Contact';
import { AlertCircle, ArrowRight, CheckCircle, Shield, Lightbulb } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { fadeInUp, staggerContainer, staggerItem, scrollViewport } from '../utils/animations';

export function EmailAutomation() {
  const t = useTranslation();
  const v = t.landing.verticals.emailAutomation;
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[70vh] pt-24 pb-16 flex items-center bg-gradient-to-br from-primary-950 via-primary-900 to-indigo-900">
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px]" />
        <Container className="relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {v.hero.title}
            </h1>
            <p className="text-xl text-primary-200 mb-8">
              {v.hero.subtitle}
            </p>
            <Button size="lg" onClick={scrollToContact}>
              {v.hero.cta}
            </Button>
            <p className="text-sm text-primary-300 mt-4">{v.hero.microcopy}</p>
          </motion.div>
        </Container>
      </section>

      {/* Pain */}
      <section className="py-20 bg-primary-950">
        <Container>
          <SectionHeading title={v.pain.title} theme="dark" />
          <motion.ul
            className="max-w-2xl mx-auto space-y-4 mb-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            {v.pain.points.map((point, i) => (
              <motion.li key={i} variants={staggerItem} className="flex items-start gap-3 text-primary-200">
                <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                <span className="text-lg">{point}</span>
              </motion.li>
            ))}
          </motion.ul>
          <motion.p
            className="text-center text-lg text-white font-medium"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            {v.pain.closing}
          </motion.p>
        </Container>
      </section>

      {/* Solution */}
      <section className="py-20 bg-primary-900">
        <Container>
          <SectionHeading title={v.solution.title} theme="dark" />
          <motion.div
            className="max-w-2xl mx-auto space-y-6 mb-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            {v.solution.steps.map((step, i) => (
              <motion.div key={i} variants={staggerItem} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-400 flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold text-blue-400">{i + 1}</span>
                </div>
                <span className="text-lg text-white">{step}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            className="text-center text-xl text-secondary-400 font-semibold"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            {v.solution.closing}
          </motion.p>
        </Container>
      </section>

      {/* Results */}
      <section className="py-20 bg-primary-950">
        <Container>
          <SectionHeading title={v.results.title} theme="dark" />
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            {v.results.items.map((item, i) => (
              <motion.div key={i} variants={staggerItem} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-secondary-400 mt-0.5 shrink-0" />
                <span className="text-lg text-primary-200">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Use Case */}
      <section className="py-20 bg-primary-900">
        <Container>
          <SectionHeading title={v.useCase.title} theme="dark" />
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            {v.useCase.steps.map((step, i) => (
              <motion.div key={i} variants={staggerItem} className="flex items-center gap-4">
                <div className="px-6 py-4 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white font-medium text-center">
                  {step}
                </div>
                {i < v.useCase.steps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-blue-400 hidden md:block" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Tailored Solutions */}
      <section className="py-20 bg-primary-950">
        <Container>
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            <Lightbulb className="w-12 h-12 text-secondary-400/60 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">{v.tailored.title}</h2>
            <p className="text-xl text-primary-200 mb-4">{v.tailored.description}</p>
            <p className="text-lg text-secondary-400 font-medium">{v.tailored.subcopy}</p>
          </motion.div>
        </Container>
      </section>

      {/* Trust */}
      <section className="py-20 bg-primary-900">
        <Container>
          <SectionHeading title={v.trust.title} theme="dark" />
          <motion.div
            className="flex flex-col md:flex-row justify-center gap-6 max-w-3xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            {v.trust.items.map((item, i) => (
              <motion.div key={i} variants={staggerItem}>
                <Card className="text-center h-full">
                  <Shield className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                  <p className="text-gray-700 font-medium">{item}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-800 via-primary-900 to-indigo-900">
        <Container>
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {v.cta.title}
            </h2>
            <Button size="lg" onClick={scrollToContact}>
              {v.cta.buttonText}
            </Button>
            <p className="text-sm text-primary-300 mt-4">{v.cta.microcopy}</p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Form */}
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}
