import React from 'react';

interface H2TitleProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

// SEO-optimized H2 component for section titles
export default function H2Title({ children, className = "", id }: H2TitleProps) {
  return (
    <h2 
      className={`text-3xl md:text-4xl font-bold text-gray-900 ${className}`}
      id={id}
    >
      {children}
    </h2>
  );
}