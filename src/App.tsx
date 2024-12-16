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

export default function App() {
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
        <SuccessStories />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}