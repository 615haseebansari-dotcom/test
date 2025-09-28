import React from 'react';

interface H1TitleProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

// SEO-optimized H1 component that ensures proper heading hierarchy
export default function H1Title({ children, className = "", id }: H1TitleProps) {
  return (
    <h1 
      className={`text-5xl lg:text-6xl font-bold text-gray-900 leading-tight ${className}`}
      id={id}
    >
      {children}
    </h1>
  );
}