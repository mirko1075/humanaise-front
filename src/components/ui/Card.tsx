import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-lg shadow-black/5 p-6 hover-card border border-gray-100 ${className}`}>
      {children}
    </div>
  );
}
