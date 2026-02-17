import React from 'react';
import { SEO } from './components/SEO';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { CoreValues } from './components/sections/CoreValues';
import { Philosophy } from './components/sections/Philosophy';
import { Services } from './components/sections/Services';
import { Industries } from './components/sections/Industries';
import { ROICalculator } from './components/sections/ROICalculator';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { SuccessStories } from './components/sections/SuccessStories';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';

export default function App() {
  const pathname = window.location.pathname;
  const isPrivacyPolicy = pathname.includes('/privacy-policy');
  const isTermsOfService = pathname.includes('/terms-of-service');

  // Render legal pages
  if (isPrivacyPolicy) {
    return (
      <div className="min-h-screen bg-primary-950">
        <SEO
          title="Privacy Policy"
          description="HumanAIse Privacy Policy - Learn how we collect, use, and protect your personal data."
          canonical="https://humanaise.com/privacy-policy"
        />
        <Header />
        <main>
          <PrivacyPolicy />
        </main>
        <Footer />
      </div>
    );
  }

  if (isTermsOfService) {
    return (
      <div className="min-h-screen bg-primary-950">
        <SEO
          title="Terms of Service"
          description="HumanAIse Terms of Service - Read our terms and conditions for using our AI automation services."
          canonical="https://humanaise.com/terms-of-service"
        />
        <Header />
        <main>
          <TermsOfService />
        </main>
        <Footer />
      </div>
    );
  }

  // Render homepage
  return (
    <div className="min-h-screen bg-primary-950">
      <SEO />
      <Header />
      <main>
        <Hero />
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
    </div>
  );
}