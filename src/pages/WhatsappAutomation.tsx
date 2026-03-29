import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { Contact } from '../components/sections/Contact';
import {
  AlertCircle,
  ArrowRight,
  CheckCircle,
  MessageCircle,
} from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { fadeInUp, staggerContainer, staggerItem, scrollViewport } from '../utils/animations';
import { usePageTracking } from '../hooks/usePageTracking';

export function WhatsappAutomation() {
  const t = useTranslation();
  const v = t.landing.verticals.whatsappAutomation;

  const { ctaText, handleCtaClick, contactRef } = usePageTracking('whatsapp', {
    A: v.hero.ctaPrimary,
    B: 'Ricevi più richieste senza perdere tempo',
  });

  const scrollToReality = () => {
    document.getElementById('reality-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-[80vh] pt-24 pb-16 flex items-center bg-gradient-to-br from-primary-950 via-primary-900 to-indigo-900">
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-green-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px]" />
        <Container className="relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" />
              WhatsApp Business
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {v.hero.title}
            </h1>
            <p className="text-lg font-semibold text-red-400 mb-4">
              {v.hero.killerLine}
            </p>
            <p className="text-xl text-primary-200 mb-2">
              {v.hero.subtitle}
            </p>
            <p className="text-base text-secondary-400 font-medium mb-8">
              👉 {v.hero.highlight}
            </p>
            <div className="flex justify-center mb-6">
              <Button size="lg" onClick={handleCtaClick}>
                {ctaText}
              </Button>
            </div>
            <motion.ul
              className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {v.hero.points.map((point, i) => (
                <motion.li
                  key={i}
                  variants={staggerItem}
                  className="flex items-center gap-2 text-sm text-secondary-400 font-medium"
                >
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  {point}
                </motion.li>
              ))}
            </motion.ul>
            <button
              onClick={scrollToReality}
              className="text-sm text-primary-400 hover:text-primary-200 underline underline-offset-4 transition-colors"
            >
              {v.hero.ctaSecondary} ↓
            </button>
          </motion.div>
        </Container>
      </section>

      {/* Impact Block */}
      <section id="reality-section" className="py-12 bg-red-950/30 border-y border-red-900/40">
        <Container>
          <motion.div
            className="max-w-xl mx-auto text-center space-y-3"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            {v.impactBlock.lines.map((line, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? 'text-primary-400 text-sm uppercase tracking-widest'
                    : i === 1
                    ? 'text-2xl font-bold text-white'
                    : i === v.impactBlock.lines.length - 1
                    ? 'text-base text-red-400 font-medium'
                    : 'text-lg text-primary-200'
                }
              >
                {line}
              </p>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Problem */}
      <section className="py-20 bg-primary-950">
        <Container>
          <SectionHeading title={v.problem.title} theme="dark" />
          <motion.ul
            className="max-w-2xl mx-auto space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            {v.problem.painPoints.map((point, i) => (
              <motion.li
                key={i}
                variants={staggerItem}
                className="flex items-start gap-3 text-primary-200"
              >
                <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                <span className="text-lg">{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        </Container>
      </section>

      {/* Solution */}
      <section className="py-20 bg-primary-900">
        <Container>
          <SectionHeading title={v.solution.title} theme="dark" />
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            {v.solution.features.map((feature, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.04] border border-white/[0.08]"
              >
                <CheckCircle className="w-5 h-5 text-secondary-400 mt-0.5 shrink-0" />
                <span className="text-primary-200">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Use Case */}
      <section className="py-20 bg-primary-950">
        <Container>
          <motion.div
            className="max-w-2xl mx-auto text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            <h2 className="text-3xl font-bold text-white mb-6">{v.useCase.title}</h2>
            <p className="text-xl text-primary-200">{v.useCase.description}</p>
          </motion.div>
        </Container>
      </section>

      {/* Real Case */}
      <section className="py-20 bg-primary-900">
        <Container>
          <motion.div
            className="max-w-2xl mx-auto text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-400/10 border border-secondary-400/20 text-secondary-400 text-sm font-medium mb-6">
              <CheckCircle className="w-4 h-4" />
              {v.realCase.title}
            </div>
            <p className="text-xl text-primary-200">{v.realCase.description}</p>
          </motion.div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-primary-950">
        <Container>
          <SectionHeading title={v.faq.title} theme="dark" />
          <motion.div
            className="max-w-2xl mx-auto space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            {v.faq.items.map((item, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="p-6 rounded-xl bg-white/[0.04] border border-white/[0.08]"
              >
                <h3 className="text-white font-semibold mb-2">{item.question}</h3>
                <p className="text-primary-300 text-sm leading-relaxed">{item.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-800 via-primary-900 to-indigo-900">
        <Container>
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {v.cta.title}
            </h2>
            <p className="text-xl text-primary-200 mb-8">{v.cta.description}</p>
            <Button size="lg" onClick={handleCtaClick}>
              {v.cta.buttonText}
            </Button>
            <p className="text-sm text-primary-300 mt-4">{v.cta.microcopy}</p>
          </motion.div>
        </Container>
      </section>

      {/* SEO Cluster Links */}
      <section className="py-12 bg-primary-950 border-t border-white/[0.06]">
        <Container>
          <p className="text-sm text-primary-500 text-center mb-4">{v.relatedPages.title}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {v.relatedPages.links.map((link, i) => (
              <Link
                key={i}
                to={link.href}
                className="inline-flex items-center gap-2 text-sm text-primary-300 hover:text-white transition-colors"
              >
                <ArrowRight className="w-3.5 h-3.5 text-primary-500" />
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Form */}
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}
