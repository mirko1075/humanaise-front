import React from 'react';

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

export function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-primary-900 mb-4">
        {title}
      </h3>
      {children}
    </div>
  );
}