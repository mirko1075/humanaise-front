import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { Contact } from '../components/sections/Contact';
import { CheckCircle, MessageCircle, Anchor, Ship, Globe, Users, ChevronDown } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { fadeInUp, staggerContainer, staggerItem, scrollViewport } from '../utils/animations';
import { usePageTracking } from '../hooks/usePageTracking';

const yachtIcons = [Ship, Anchor, Users, Globe];

export function CostaSmeralda() {
  const t = useTranslation();
  const v = t.landing.verticals.costaSmeralda;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const { ctaText, handleCtaClick, contactRef } = usePageTracking('costa_smeralda', {
    A: v.hero.cta,
    B: 'Attiva il Pilot Gratuito',
  });

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-[80vh] pt-24 pb-16 flex items-center bg-gradient-to-br from-primary-950 via-primary-900 to-indigo-900">
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-amber-400/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px]" />
        <Container className="relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" />
              {v.hero.badge}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {v.hero.title}
            </h1>
            <p className="text-xl text-amber-300/80 mb-4 max-w-xl mx-auto">
              {v.hero.subtitle}
            </p>
            <p className="text-base text-primary-300 mb-10 max-w-lg mx-auto leading-relaxed">
              {v.hero.description}
            </p>
            <Button size="lg" onClick={handleCtaClick}>
              {ctaText}
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* Problem */}
      <section className="py-20 bg-primary-950">
        <Container>
          <motion.div
            className="max-w-3xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            <SectionHeading title={`${v.problem.headline} ${v.problem.highlight}`} theme="dark" />
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-5"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {v.problem.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="p-7 rounded-xl bg-white/[0.04] border border-white/[0.08] border-l-2 border-l-amber-400"
                >
                  <div className="text-4xl font-bold text-amber-400 mb-2">{stat.number}</div>
                  <p className="text-sm text-primary-300 leading-relaxed">{stat.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Solution */}
      <section className="py-20 bg-primary-900">
        <Container>
          <motion.div
            className="max-w-3xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            <SectionHeading
              title={`${v.solution.title} ${v.solution.highlight}`}
              theme="dark"
            />
            <div className="flex flex-col gap-5">
              {v.solution.steps.map((step, i) => (
                <div key={i} className="flex gap-5 items-start p-6 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 font-bold text-base">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-primary-300 leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Yacht Services */}
      <section className="py-20 bg-primary-950 border-y border-amber-400/10">
        <Container>
          <motion.div
            className="max-w-4xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-sm font-medium mb-6">
              <Anchor className="w-4 h-4" />
              {v.yacht.badge}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">{v.yacht.title}</h2>
            <p className="text-3xl md:text-4xl font-bold text-amber-400 mb-10">{v.yacht.highlight}</p>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {v.yacht.services.map((service, i) => {
                const Icon = yachtIcons[i] ?? Ship;
                return (
                  <motion.div
                    key={i}
                    variants={staggerItem}
                    className="p-6 rounded-xl bg-white/[0.04] border border-white/[0.08] flex gap-4 items-start"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-2">{service.title}</h3>
                      <p className="text-sm text-primary-300 leading-relaxed">{service.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
            <p className="text-sm text-primary-400 italic">{v.yacht.targets}</p>
          </motion.div>
        </Container>
      </section>

      {/* Pilot */}
      <section className="py-20 bg-primary-900">
        <Container>
          <motion.div
            className="max-w-3xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-sm font-medium mb-6">
              {v.pilot.badge}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">{v.pilot.title}</h2>
            <p className="text-3xl md:text-4xl font-bold text-amber-400 mb-10">{v.pilot.highlight}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[v.pilot.whatWeDo, v.pilot.whatYouNeed].map((col, i) => (
                <div key={i} className="rounded-xl p-7 border border-white/[0.08] bg-white/[0.04]">
                  <h3 className="text-sm font-semibold text-amber-400 tracking-wide mb-5">{col.title}</h3>
                  <ul className="flex flex-col gap-3">
                    {col.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-primary-200 leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-amber-400/70 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Results */}
      <section className="py-20 bg-primary-950">
        <Container>
          <motion.div
            className="max-w-3xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">{v.results.title}</h2>
            <p className="text-3xl md:text-4xl font-bold text-secondary-400 mb-10">{v.results.highlight}</p>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {v.results.kpis.map((kpi, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="p-6 rounded-xl bg-white/[0.04] border border-white/[0.08] text-center"
                >
                  <div className="text-3xl font-bold text-amber-400 mb-2">{kpi.number}</div>
                  <div className="text-xs text-primary-300 leading-snug">{kpi.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-primary-900">
        <Container>
          <motion.div
            className="max-w-5xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">{v.pricing.title}</h2>
            <p className="text-3xl md:text-4xl font-bold text-secondary-400 mb-12">{v.pricing.highlight}</p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch mb-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Essential */}
              <motion.div
                variants={staggerItem}
                className="flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.04] p-7"
              >
                <p className="text-xs uppercase tracking-widest text-primary-400 mb-2">{v.pricing.essential.badge}</p>
                <p className="text-sm text-primary-300 mb-6 leading-relaxed">{v.pricing.essential.subtitle}</p>
                <ul className="flex flex-col gap-3 mb-8">
                  {v.pricing.essential.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-primary-300 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={handleCtaClick}
                  className="mt-auto w-full py-2.5 rounded-xl border border-white/10 text-sm font-medium text-primary-300 hover:bg-white/[0.06] transition-colors"
                >
                  {v.pricing.essential.cta}
                </button>
              </motion.div>

              {/* Professional (featured) */}
              <motion.div
                variants={staggerItem}
                className="flex flex-col rounded-2xl bg-white/[0.07] ring-1 ring-amber-400/40 p-7 relative"
              >
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-block px-3 py-1 rounded-full bg-amber-400 text-slate-900 text-xs font-bold tracking-wide">
                    {v.pricing.professional.popular}
                  </span>
                </div>
                <p className="text-xs uppercase tracking-widest text-amber-400 mb-2">{v.pricing.professional.badge}</p>
                <p className="text-sm text-primary-200 mb-6 leading-relaxed">{v.pricing.professional.subtitle}</p>
                <ul className="flex flex-col gap-3 mb-8">
                  {v.pricing.professional.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-primary-200 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-amber-400/70 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={handleCtaClick}
                  className="mt-auto w-full py-2.5 rounded-xl bg-amber-400 text-slate-900 text-sm font-bold hover:bg-amber-300 transition-colors"
                >
                  {v.pricing.professional.cta}
                </button>
              </motion.div>

              {/* Yacht Plan */}
              <motion.div
                variants={staggerItem}
                className="flex flex-col rounded-2xl border border-amber-400/30 bg-white/[0.04] p-7"
              >
                <p className="text-xs uppercase tracking-widest text-amber-400/70 mb-2">{v.pricing.yachtPlan.badge}</p>
                <p className="text-sm text-primary-300 mb-6 leading-relaxed">{v.pricing.yachtPlan.subtitle}</p>
                <ul className="flex flex-col gap-3 mb-8">
                  {v.pricing.yachtPlan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-primary-300 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-amber-400/50 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={handleCtaClick}
                  className="mt-auto w-full py-2.5 rounded-xl border border-amber-400/30 text-sm font-medium text-amber-400/80 hover:bg-amber-400/10 transition-colors"
                >
                  {v.pricing.yachtPlan.cta}
                </button>
              </motion.div>
            </motion.div>

            <p className="text-sm text-primary-400 text-center">{v.pricing.note}</p>
          </motion.div>
        </Container>
      </section>

      {/* About */}
      <section className="py-16 bg-primary-950 border-t border-white/[0.06]">
        <Container>
          <motion.div
            className="max-w-3xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            <p className="text-sm text-primary-400 leading-relaxed">{v.about}</p>
          </motion.div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-primary-900">
        <Container>
          <motion.div
            className="max-w-3xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            <h2 className="text-2xl font-bold text-white mb-10">{v.faq.title}</h2>
            <div className="flex flex-col divide-y divide-white/[0.06]">
              {v.faq.items.map((item, i) => (
                <div key={i} className="py-5">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-start justify-between gap-4 text-left group"
                  >
                    <span className="text-sm font-medium text-white group-hover:text-amber-300 transition-colors leading-relaxed">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-primary-400 shrink-0 mt-0.5 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 text-sm text-primary-300 leading-relaxed">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{v.cta.title}</h2>
            <p className="text-xl text-primary-200 mb-8">{v.cta.subtitle}</p>
            <Button size="lg" onClick={handleCtaClick}>
              {v.cta.buttonText}
            </Button>
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
