import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card } from '../../ui/Card';

interface IndustryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: readonly string[];
}

export function IndustryCard({ icon: Icon, title, description, benefits }: IndustryCardProps) {
  return (
    <Card className="bg-primary-800/50 border border-primary-700 hover:border-primary-600 transition-colors">
      <Icon className="w-12 h-12 text-primary-400 mb-4" />
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-primary-200 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center text-primary-300">
            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
            {benefit}
          </li>
        ))}
      </ul>
    </Card>
  );
}