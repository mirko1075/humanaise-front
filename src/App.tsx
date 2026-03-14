import React from 'react';
import { SEO } from './components/SEO';
import { NewsSection } from './components/home/NewsSection';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { CoreValues } from './components/sections/CoreValues';
import { Philosophy } from './components/sections/Philosophy';
import { Services } from './components/sections/Services';
import { Industries } from './components/sections/Industries';
import { ROICalculator } from './components/sections/ROICalculator';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { CookieBanner } from './components/CookieBanner';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { CookiePolicy } from './pages/CookiePolicy';
import { getHomepageNewsStructuredData } from './utils/news';
import { useLanguage } from './hooks/useLanguage';

export default function App() {
  const pathname = window.location.pathname;
  const { language } = useLanguage();
  const isPrivacyPolicy = pathname.includes('/privacy-policy') || pathname.includes('/privacy');
  const isTermsOfService = pathname.includes('/terms-of-service') || pathname.includes('/terms');
  const isCookiePolicy = pathname.includes('/cookies');

  // Render legal pages
  if (isPrivacyPolicy) {
    return (
      <div className="min-h-screen bg-primary-950">
        <SEO
          title="Privacy Policy"
          description="HumanAIse Privacy Policy - Learn how we collect, use, and protect your personal data."
          canonical={`https://humanaise.com/${language}/privacy-policy`}
        />
        <Header />
        <main>
          <PrivacyPolicy />
        </main>
        <Footer />
        <CookieBanner />
      </div>
    );
  }

  if (isCookiePolicy) {
    return (
      <div className="min-h-screen bg-primary-950">
        <SEO
          title="Cookie Policy"
          description="HumanAIse Cookie Policy - Learn about the cookies we use and how to manage them."
          canonical={`https://humanaise.com/${language}/cookies`}
        />
        <Header />
        <main>
          <CookiePolicy />
        </main>
        <Footer />
        <CookieBanner />
      </div>
    );
  }

  if (isTermsOfService) {
    return (
      <div className="min-h-screen bg-primary-950">
        <SEO
          title="Terms and Conditions"
          description="HumanAIse Terms and Conditions - Read our terms for using our AI automation services."
          canonical={`https://humanaise.com/${language}/terms-of-service`}
        />
        <Header />
        <main>
          <TermsOfService />
        </main>
        <Footer />
        <CookieBanner />
      </div>
    );
  }

  // Render homepage
  return (
    <div className="min-h-screen bg-primary-950">
      <SEO
        description="Operational AI systems for SMEs, production automation workflows, and the latest HumanAIse news on client deployments."
        keywords="AI automation, operational AI, workflow automation, SME automation, quotation management, transcription automation, AI deployment news"
        structuredData={getHomepageNewsStructuredData(language)}
      />
      <Header />
      <main>
        <Hero />
        <NewsSection />
        <About />
        <CoreValues />
        <Philosophy />
        <Services />
        <Industries />
        <ROICalculator />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
