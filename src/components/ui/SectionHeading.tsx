import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  theme?: 'light' | 'dark';
}

export function SectionHeading({ title, subtitle, theme = 'light' }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12">
      <h2 className={`text-3xl font-bold mb-4 ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-xl ${
          theme === 'dark' ? 'text-indigo-200' : 'text-gray-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}