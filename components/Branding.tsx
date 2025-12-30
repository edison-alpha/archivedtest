
import React from 'react';

interface LogoProps {
  variant?: 'default' | 'white' | 'dark' | 'color-accent';
  className?: string;
  showText?: boolean;
}

export const GlobalingoLogo: React.FC<LogoProps> = ({ 
  variant = 'default', 
  className = "w-10 h-10",
  showText = false 
}) => {
  const colors = {
    default: {
      globe: "#2563EB",
      student: "#000000",
      tassel: "#FACC15",
      text: "text-black"
    },
    white: {
      globe: "#FFFFFF",
      student: "#FFFFFF",
      tassel: "#FACC15",
      text: "text-white"
    },
    dark: {
      globe: "#000000",
      student: "#000000",
      tassel: "#2563EB",
      text: "text-black"
    },
    'color-accent': {
      globe: "#059669",
      student: "#E11D48",
      tassel: "#FACC15",
      text: "text-black"
    }
  }[variant];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto drop-shadow-sm">
        {/* Globe Base */}
        <circle cx="100" cy="100" r="90" fill={variant === 'white' ? 'rgba(255,255,255,0.1)' : 'white'} stroke={colors.student} strokeWidth="6" />
        
        {/* Globe Grid/Land */}
        <path d="M100 10C100 10 140 40 140 100C140 160 100 190 100 190" stroke={colors.globe} strokeWidth="8" strokeLinecap="round" opacity="0.4" />
        <path d="M100 10C100 10 60 40 60 100C60 160 100 190 100 190" stroke={colors.globe} strokeWidth="8" strokeLinecap="round" opacity="0.4" />
        <line x1="15" y1="100" x2="185" y2="100" stroke={colors.globe} strokeWidth="8" strokeLinecap="round" opacity="0.4" />
        
        {/* Student Silhouette */}
        <g transform="translate(45, 60) scale(1.1)">
          {/* Body */}
          <path d="M50 85C25 85 5 105 5 130V150H95V130C95 105 75 85 50 85Z" fill={colors.student} />
          {/* Head */}
          <circle cx="50" cy="55" r="25" fill={colors.student} />
          {/* Graduation Cap */}
          <path d="M10 40L50 20L90 40L50 60L10 40Z" fill={colors.student} />
          <rect x="45" y="35" width="10" height="25" fill={colors.student} />
          {/* Tassel */}
          <path d="M90 40V65" stroke={colors.student} strokeWidth="4" />
          <circle cx="90" cy="70" r="6" fill={colors.tassel} stroke={colors.student} strokeWidth="2" />
        </g>
      </svg>
      {showText && (
        <span className={`font-black text-2xl tracking-tighter uppercase ${colors.text}`}>
          Globalingo<span className="text-[#2563EB]">.id</span>
        </span>
      )}
    </div>
  );
};
