import { SEO } from '../components/SEO';
import { Hero } from '../components/sections/Hero';
import { ProblemSection } from '../components/sections/ProblemSection';
import { VisionSection } from '../components/sections/VisionSection';
import { Services } from '../components/sections/Services';
import { WhatWeAutomate } from '../components/sections/WhatWeAutomate';
import { UseCasesSection } from '../components/sections/UseCasesSection';
import { HowItWorksSection } from '../components/sections/HowItWorksSection';
import { DifferentiationSection } from '../components/sections/DifferentiationSection';
import { NewsSection } from '../components/home/NewsSection';
import { CallToAction } from '../components/sections/CallToAction';
import { Contact } from '../components/sections/Contact';
import { useHashScroll } from '../hooks/useHashScroll';
import { useTranslation } from '../hooks/useTranslation';

export function HomePage() {
  useHashScroll();
  const t = useTranslation();

  return (
    <>
      <SEO
        title={t.home.seo.title}
        description={t.home.seo.description}
        keywords="business process automation, SME automation, email automation, document automation, workflow automation, reduce manual work, automate business operations, automazione processi aziendali, AI automation Cagliari, automazione Sardegna, automazione aziendale Italia"
      />
      <Hero />
      <ProblemSection />
      <VisionSection />
      <Services />
      <WhatWeAutomate />
      <UseCasesSection />
      <HowItWorksSection />
      <DifferentiationSection />
      <NewsSection />
      <CallToAction />
      <Contact />
    </>
  );
}
