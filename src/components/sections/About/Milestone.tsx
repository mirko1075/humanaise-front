import React from 'react';

interface MilestoneProps {
  year: string;
  title: string;
  description: string;
}

export function Milestone({ year, title, description }: MilestoneProps) {
  return (
    <div className="flex items-start space-x-8">
      <div className="flex-shrink-0 w-24">
        <span className="text-2xl font-bold text-primary-500">{year}</span>
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-primary-200">{description}</p>
      </div>
    </div>
  );
}