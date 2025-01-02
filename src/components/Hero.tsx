import React from 'react';
import { Bot } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="pt-32 pb-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Bot className="h-16 w-16 text-indigo-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Business with
            <span className="text-indigo-600"> AI Automation</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Unlock the power of artificial intelligence to streamline your operations,
            enhance customer experience, and drive growth.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="px-8 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}