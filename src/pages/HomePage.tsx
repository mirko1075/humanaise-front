import { SEO } from '../components/SEO';
import { Hero } from '../components/sections/Hero';
import { ProblemSection } from '../components/sections/ProblemSection';
import { VisionSection } from '../components/sections/VisionSection';
import { Services } from '../components/sections/Services';
import { WhatWeAutomate } from '../components/sections/WhatWeAutomate';
import { UseCasesSection } from '../components/sections/UseCasesSection';
import { HowItWorksSection } from '../components/sections/HowItWorksSection';
import { DifferentiationSection } from '../components/sections/DifferentiationSection';
import { CallToAction } from '../components/sections/CallToAction';
import { Contact } from '../components/sections/Contact';
import { useHashScroll } from '../hooks/useHashScroll';

export function HomePage() {
  useHashScroll();

  return (
    <>
      <SEO
        title="Humanaise | Business Process Automation for SMEs"
        description="Automate emails, documents, WhatsApp and internal workflows. Humanaise helps SMEs in Sardinia and across Italy reduce manual work and simplify operations."
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
      <CallToAction />
      <Contact />
    </>
  );
}
