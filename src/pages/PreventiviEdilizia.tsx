import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { Contact } from '../components/sections/Contact';
import {
  AlertCircle,
  ArrowRight,
  ArrowDown,
  CheckCircle,
  MessageCircle,
  Phone,
  Mail,
  Mic,
} from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { fadeInUp, staggerContainer, staggerItem, scrollViewport } from '../utils/animations';
import { usePageTracking } from '../hooks/usePageTracking';

export function PreventiviEdilizia() {
  const t = useTranslation();
  const v = t.landing.verticals.preventiviEdilizia;

  const { ctaText, handleCtaClick, contactRef } = usePageTracking('preventivi_edilizia', {
    A: v.hero.ctaPrimary,
    B: 'Organizza i tuoi preventivi senza perdere richieste',
  });

  const scrollToHowItWorks = () => {
    document.getElementById('come-funziona')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-[80vh] pt-24 pb-16 flex items-center bg-gradient-to-br from-primary-950 via-primary-900 to-indigo-900">
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px]" />
        <Container className="relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {v.hero.title}
            </h1>
            <p className="text-xl text-primary-200 mb-3">
              {v.hero.subtitle}
            </p>
            <p className="text-base text-secondary-400 font-medium mb-8">
              {v.hero.highlight}
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
              onClick={scrollToHowItWorks}
              className="text-sm text-primary-400 hover:text-primary-200 underline underline-offset-4 transition-colors"
            >
              {v.hero.ctaSecondary} ↓
            </button>
          </motion.div>
        </Container>
      </section>

      {/* Reality Check */}
      <section className="py-10 bg-red-950/30 border-y border-red-900/40">
        <Container>
          <motion.p
            className="text-center text-lg md:text-xl font-semibold text-red-300 max-w-2xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            {v.realityCheck.text}
          </motion.p>
        </Container>
      </section>

      {/* Voice Differentiation Block */}
      <section className="py-16 bg-indigo-950 border-y border-indigo-800/50">
        <Container>
          <motion.div
            className="max-w-3xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            <div className="flex flex-col md:flex-row items-start gap-6 p-6 rounded-2xl bg-white/[0.04] border border-blue-500/20">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0">
                <Mic className="w-6 h-6 text-blue-400" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white mb-3">{v.voiceDiff.title}</h2>
                <ul className="space-y-2">
                  {v.voiceDiff.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-2 text-primary-200">
                      <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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

      {/* How It Works */}
      <section id="come-funziona" className="py-20 bg-primary-950">
        <Container>
          <SectionHeading title={v.howItWorks.title} theme="dark" />
          <motion.div
            className="max-w-2xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            {v.howItWorks.steps.map((step, i) => (
              <React.Fragment key={i}>
                <motion.div variants={staggerItem} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-sm font-bold text-blue-400">{i + 1}</span>
                  </div>
                  <p className="text-lg text-white mt-1.5">{step}</p>
                </motion.div>
                {i < v.howItWorks.steps.length - 1 && (
                  <div className="flex justify-center py-3">
                    <ArrowDown className="w-7 h-7 text-blue-400" strokeWidth={2.5} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Channels */}
      <section className="py-20 bg-primary-900">
        <Container>
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            <h2 className="text-3xl font-bold text-white mb-4">{v.channels.title}</h2>
            <p className="text-xl text-primary-200 mb-10">{v.channels.description}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              {[
                { icon: MessageCircle, label: 'WhatsApp', color: 'text-green-400' },
                { icon: Phone, label: 'Telefono / Voice Agent', color: 'text-blue-400' },
                { icon: Mail, label: 'Email', color: 'text-indigo-400' },
              ].map(({ icon: Icon, label, color }, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-3 px-8 py-6 rounded-xl bg-white/[0.04] border border-white/[0.08] flex-1"
                >
                  <Icon className={`w-8 h-8 ${color}`} />
                  <span className="text-white font-medium">{label}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-primary-400 mt-8 max-w-xl mx-auto whitespace-pre-line">
              💡 {v.channels.note}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Use Case */}
      <section className="py-20 bg-primary-950">
        <Container>
          <SectionHeading title={v.useCase.title} theme="dark" />
          <motion.div
            className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            {v.useCase.examples.map((example, i) => (
              <motion.span
                key={i}
                variants={staggerItem}
                className="px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.1] text-primary-200 text-sm font-medium"
              >
                {example}
              </motion.span>
            ))}
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
