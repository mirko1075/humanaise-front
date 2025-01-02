import React from 'react';
import { Button } from '../ui/Button';
import { useTranslation } from '../../hooks/useTranslation';
import  splash from '../../imgs/copertina.jpg';

export function Hero() {
  const t = useTranslation();

  return (
    <div id="home" className="relative min-h-screen pt-24 pb-16">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("'+splash+'")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/95 via-primary-900/95 to-primary-800/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t.home.hero.title}
          </h1>
          <p className="text-xl text-primary-200 mb-8">
            {t.home.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
              {t.common.cta.getStarted}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('services')?.scrollIntoView()}
            >
              {t.common.cta.learnMore}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}