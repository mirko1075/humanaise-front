import React from 'react';
import { Bot, MessageSquare, Mic, Brain, Factory, LineChart } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Process Automation',
    description: 'Automate repetitive tasks and workflows with intelligent AI systems that learn and adapt.',
  },
  {
    icon: MessageSquare,
    title: 'Intelligent Chatbots',
    description: 'Deploy sophisticated chatbots that understand context and provide human-like customer support 24/7.',
  },
  {
    icon: Mic,
    title: 'Voice Agents',
    description: 'Create natural-sounding voice assistants for seamless customer interactions and support.',
  },
  {
    icon: Brain,
    title: 'Machine Learning Solutions',
    description: 'Implement custom ML models for predictive analytics and data-driven decision making.',
  },
  {
    icon: Factory,
    title: 'Workflow Automation',
    description: 'Streamline business processes with intelligent automation that reduces errors and increases efficiency.',
  },
  {
    icon: LineChart,
    title: 'Analytics & Reporting',
    description: 'Generate automated insights and reports from your data using advanced AI analytics.',
  },
];

export default function Services() {
  return (
    <div id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">
            Comprehensive AI solutions to power your business transformation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
            >
              <service.icon className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}