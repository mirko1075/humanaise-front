import React, { useRef } from 'react';
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
  Phone,
  MessageCircle,
  Mail,
  Mic,
  CalendarCheck,
  Database,
} from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { fadeInUp, staggerContainer, staggerItem, scrollViewport } from '../utils/animations';

export function VoiceAgent() {
  const t = useTranslation();
  const v = t.landing.verticals.voiceAgent;
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Mic className="w-4 h-4" />
              Voice Agent
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button size="lg" onClick={scrollToContact}>
                {v.hero.ctaPrimary}
              </Button>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-primary-200 border border-primary-700 rounded-lg hover:bg-primary-800 transition-colors"
              >
                {v.hero.ctaSecondary}
              </button>
            </div>
            <motion.ul
              className="flex flex-col sm:flex-row gap-4 justify-center"
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
          </motion.div>
        </Container>
      </section>

      {/* Impact Block */}
      <section className="py-14 bg-red-950/30 border-y border-red-900/40">
        <Container>
          <motion.div
            className="max-w-xl mx-auto text-center space-y-4"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            <p className="text-primary-400 text-sm uppercase tracking-widest">{v.impactBlock.lines[0]}</p>
            <p className="text-2xl font-bold text-white">{v.impactBlock.lines[1]}</p>
            <p className="text-lg text-primary-200">{v.impactBlock.lines[2]}</p>
            <div className="pt-2 text-left inline-block">
              <p className="text-sm text-primary-400 mb-2">Non hai traccia di:</p>
              <ul className="space-y-1">
                {v.impactBlock.tracklist.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-red-400 text-sm font-medium">
                    <span className="text-red-600">→</span> {item}
                  </li>
                ))}
              </ul>
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

      {/* Positioning */}
      <section className="py-16 bg-indigo-950 border-y border-indigo-800/40">
        <Container>
          <motion.div
            className="max-w-2xl mx-auto text-center space-y-4"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            <p className="text-xl font-bold text-white line-through decoration-red-500/60 decoration-2">{v.positioning.lines[0]}</p>
            <p className="text-2xl font-bold text-secondary-400">{v.positioning.lines[1]}</p>
            <p className="text-lg text-primary-200">{v.positioning.lines[2]}</p>
          </motion.div>
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

      {/* Appointments */}
      <section className="py-20 bg-primary-950">
        <Container>
          <motion.div
            className="max-w-3xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            <div className="flex flex-col md:flex-row items-start gap-6 p-8 rounded-2xl bg-white/[0.04] border border-secondary-400/20">
              <div className="w-12 h-12 rounded-xl bg-secondary-400/10 border border-secondary-400/20 flex items-center justify-center shrink-0">
                <CalendarCheck className="w-6 h-6 text-secondary-400" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white mb-2">{v.appointments.title}</h2>
                <p className="text-primary-300 mb-5">{v.appointments.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {v.appointments.actions.map((action, i) => (
                    <li key={i} className="flex items-center gap-2 text-primary-200 text-sm">
                      <CheckCircle className="w-4 h-4 text-secondary-400 shrink-0" />
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Lead Capture & CRM */}
      <section className="py-20 bg-primary-900">
        <Container>
          <motion.div
            className="max-w-3xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            <div className="flex flex-col md:flex-row items-start gap-6 p-8 rounded-2xl bg-white/[0.04] border border-indigo-500/20">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                <Database className="w-6 h-6 text-indigo-400" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white mb-2">{v.leadCapture.title}</h2>
                <p className="text-primary-300 mb-5">{v.leadCapture.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {v.leadCapture.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-primary-200 text-sm">
                      <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Integration */}
      <section className="py-20 bg-primary-950">
        <Container>
          <motion.div
            className="max-w-3xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            <h2 className="text-3xl font-bold text-white mb-4 text-center">{v.integration.title}</h2>
            <p className="text-xl text-primary-200 text-center mb-6">{v.integration.description}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              {[
                { icon: Phone, label: 'Voice Agent', color: 'text-blue-400', active: true },
                { icon: MessageCircle, label: 'WhatsApp', color: 'text-green-400' },
                { icon: Mail, label: 'Email', color: 'text-indigo-400' },
              ].map(({ icon: Icon, label, color, active }, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center gap-3 px-8 py-6 rounded-xl border flex-1 ${
                    active
                      ? 'bg-blue-500/10 border-blue-500/30'
                      : 'bg-white/[0.04] border-white/[0.08]'
                  }`}
                >
                  <Icon className={`w-8 h-8 ${color}`} />
                  <span className="text-white font-medium">{label}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-primary-500 text-sm mt-4">→ stesso flusso unificato</p>
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
            <Button size="lg" onClick={scrollToContact}>
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
