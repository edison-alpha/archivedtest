import React from 'react';
import archivedLogo from '../archived.png';

interface LogoProps {
  variant?: 'default' | 'white' | 'dark' | 'color-accent';
  className?: string;
  showText?: boolean;
}

export const GlobalingoLogo: React.FC<LogoProps> = ({ 
  variant = 'default', 
  className = "h-10",
  showText = false 
}) => {
  const textColor = {
    default: "text-black",
    white: "text-white",
    dark: "text-black",
    'color-accent': "text-black"
  }[variant];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src={archivedLogo} 
        alt="Archived Test Logo" 
        className="h-12 w-auto"
      />
      {showText && (
        <span className={`font-bold tracking-tight ${textColor}`}>
          <span className="text-3xl">Archived</span><span className="text-base text-[#1B79A8]">.test</span>
        </span>
      )}
    </div>
  );
};
