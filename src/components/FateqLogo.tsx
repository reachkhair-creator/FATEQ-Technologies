import React from 'react';

interface FateqLogoProps {
  className?: string;
  variant?: 'full' | 'mark' | 'horizontal';
  showSubtitle?: boolean;
}

export const FateqLogo: React.FC<FateqLogoProps> = ({
  className = 'h-10 w-auto',
  variant = 'full',
  showSubtitle = true
}) => {
  // If only the emblem mark is requested
  if (variant === 'mark') {
    return (
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="FATEQ Technologies Logo Mark"
      >
        <defs>
          {/* Gradient 1: Top Fin (Blue to Vibrant Cyan) */}
          <linearGradient id="mark-blue-cyan" x1="20" y1="20" x2="160" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0B57D0" />
            <stop offset="45%" stopColor="#0077FF" />
            <stop offset="100%" stopColor="#00D2FF" />
          </linearGradient>

          {/* Gradient 2: Middle Fin & Stem (Cyan to Teal/Emerald) */}
          <linearGradient id="mark-cyan-teal" x1="20" y1="60" x2="155" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0088CC" />
            <stop offset="40%" stopColor="#00B894" />
            <stop offset="100%" stopColor="#00E5B0" />
          </linearGradient>

          {/* Gradient 3: Lower-Left Hexagon (Teal to Blue) */}
          <linearGradient id="mark-teal-blue" x1="20" y1="90" x2="100" y2="155" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00B894" />
            <stop offset="60%" stopColor="#0091C8" />
            <stop offset="100%" stopColor="#0A6FD6" />
          </linearGradient>

          {/* Gradient 4: Bottom-Right Bracket (Violet to Purple) */}
          <linearGradient id="mark-violet-purple" x1="95" y1="110" x2="145" y2="155" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="60%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#9333EA" />
          </linearGradient>

          {/* Gear Color */}
          <linearGradient id="mark-gear-navy" x1="45" y1="95" x2="95" y2="145" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0B2545" />
            <stop offset="100%" stopColor="#153E75" />
          </linearGradient>
        </defs>

        {/* 1. TOP FIN (Aerodynamic Blue to Cyan) */}
        <path
          d="M20 72 C20 40 42 16 75 16 L142 16 C154 16 160 21 154 28 C148 35 138 40 126 40 L68 40 C48 40 37 52 37 68 L20 72 Z"
          fill="url(#mark-blue-cyan)"
        />

        {/* 2. MIDDLE FIN (Cyan to Teal F-Arm) */}
        <path
          d="M20 76 L37 72 C37 84 46 92 60 92 L128 92 C140 92 147 96 142 103 C137 110 128 114 116 114 L62 114 C38 114 20 98 20 76 Z"
          transform="translate(0, -28)"
          fill="url(#mark-cyan-teal)"
        />

        {/* 3. LOWER-LEFT HEXAGONAL HOUSING */}
        <path
          d="M20 78 L38 78 L38 118 L70 137 L58 152 L20 130 Z"
          fill="url(#mark-teal-blue)"
        />
        <path
          d="M58 152 L70 137 L88 137 L78 152 Z"
          fill="url(#mark-teal-blue)"
        />

        {/* 4. PRECISION MECHANICAL GEAR IN THE CENTER */}
        <g transform="translate(68, 114)">
          {/* 6 Teeth */}
          <rect x="-6" y="-24" width="12" height="48" rx="2" fill="url(#mark-gear-navy)" />
          <rect x="-6" y="-24" width="12" height="48" rx="2" transform="rotate(60)" fill="url(#mark-gear-navy)" />
          <rect x="-6" y="-24" width="12" height="48" rx="2" transform="rotate(120)" fill="url(#mark-gear-navy)" />
          {/* Gear Body Circle */}
          <circle cx="0" cy="0" r="17" fill="url(#mark-gear-navy)" />
          {/* Inner Hole */}
          <circle cx="0" cy="0" r="8.5" fill="#FFFFFF" />
        </g>

        {/* 5. BOTTOM-RIGHT HEXAGONAL BRACKET (Violet/Purple) */}
        <path
          d="M86 160 L122 138 C126 136 128 132 128 128 L128 98 L112 106 L112 124 L86 140 L76 155 Z"
          fill="url(#mark-violet-purple)"
        />
      </svg>
    );
  }

  // Full Brand Logo (Emblem + FATEQ + Technologies)
  return (
    <svg
      viewBox="0 0 680 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="FATEQ Technologies Official Logo"
    >
      <defs>
        {/* Gradient 1: Top Fin (Blue to Vibrant Cyan) */}
        <linearGradient id="fateq-blue-cyan" x1="20" y1="20" x2="200" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0B57D0" />
          <stop offset="40%" stopColor="#0077FF" />
          <stop offset="100%" stopColor="#00D2FF" />
        </linearGradient>

        {/* Gradient 2: Middle Fin (Cyan to Teal/Emerald) */}
        <linearGradient id="fateq-cyan-teal" x1="20" y1="60" x2="190" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0091C8" />
          <stop offset="35%" stopColor="#00B894" />
          <stop offset="100%" stopColor="#00E5B0" />
        </linearGradient>

        {/* Gradient 3: Lower-Left Hexagon (Teal to Blue) */}
        <linearGradient id="fateq-teal-blue" x1="20" y1="90" x2="110" y2="165" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00B894" />
          <stop offset="50%" stopColor="#0091C8" />
          <stop offset="100%" stopColor="#0A6FD6" />
        </linearGradient>

        {/* Gradient 4: Bottom-Right Bracket (Violet to Purple) */}
        <linearGradient id="fateq-violet-purple" x1="100" y1="110" x2="160" y2="165" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="50%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#9333EA" />
        </linearGradient>

        {/* Gear Navy Color */}
        <linearGradient id="fateq-gear-navy" x1="60" y1="95" x2="115" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0B2545" />
          <stop offset="100%" stopColor="#153E75" />
        </linearGradient>

        {/* Teal Accent for Q tail */}
        <linearGradient id="fateq-teal-accent" x1="560" y1="80" x2="615" y2="135" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00D2B4" />
          <stop offset="100%" stopColor="#00A887" />
        </linearGradient>
      </defs>

      {/* ============================================================== */}
      {/* 1. LEFT EMBLEM (The Geometric F, Hexagon & Gear)                */}
      {/* ============================================================== */}
      <g id="fateq-emblem">
        {/* Top Fin (Aerodynamic wing tapering to right) */}
        <path
          d="M20 74 C20 40 44 16 78 16 L175 16 C189 16 198 22 192 30 C184 38 171 42 156 42 L72 42 C48 42 38 54 38 72 L20 74 Z"
          fill="url(#fateq-blue-cyan)"
        />

        {/* Middle Fin (Inner F-Arm) */}
        <path
          d="M20 76 L38 72 C38 84 48 92 64 92 L158 92 C172 92 180 97 174 104 C167 112 155 116 140 116 L66 116 C40 116 20 98 20 76 Z"
          transform="translate(0, -30)"
          fill="url(#fateq-cyan-teal)"
        />

        {/* Hexagon Lower-Left Vertical Stem & Sloped Base */}
        <path
          d="M20 78 L38 78 L38 122 L76 144 L62 161 L20 137 Z"
          fill="url(#fateq-teal-blue)"
        />
        <path
          d="M62 161 L76 144 L98 144 L86 161 Z"
          fill="url(#fateq-teal-blue)"
        />

        {/* Centered Precision Gear */}
        <g transform="translate(74, 118)">
          {/* Radiating Teeth */}
          <rect x="-6" y="-26" width="12" height="52" rx="2.5" fill="url(#fateq-gear-navy)" />
          <rect x="-6" y="-26" width="12" height="52" rx="2.5" transform="rotate(60)" fill="url(#fateq-gear-navy)" />
          <rect x="-6" y="-26" width="12" height="52" rx="2.5" transform="rotate(120)" fill="url(#fateq-gear-navy)" />
          {/* Main Gear Disc */}
          <circle cx="0" cy="0" r="18.5" fill="url(#fateq-gear-navy)" />
          {/* Center Hole */}
          <circle cx="0" cy="0" r="9" fill="#FFFFFF" />
        </g>

        {/* Hexagon Bottom-Right Bracket (Violet/Purple) */}
        <path
          d="M96 170 L136 146 C141 143 144 138 144 133 L144 98 L126 107 L126 130 L96 148 L84 165 Z"
          fill="url(#fateq-violet-purple)"
        />
      </g>

      {/* ============================================================== */}
      {/* 2. WORDMARK: F Λ T E Q                                          */}
      {/* ============================================================== */}
      <g id="fateq-wordmark" fill="#0B2545">
        
        {/* F */}
        <path d="M220 44 L275 44 L275 62 L240 62 L240 76 L270 76 L270 94 L240 94 L240 124 L220 124 Z" />

        {/* Λ (A with no crossbar - stylized chevron apex) */}
        <path d="M298 124 L328 44 L347 44 L377 124 L355 124 L338 78 L320 124 Z" />

        {/* T */}
        <path d="M388 44 L454 44 L454 62 L431 62 L431 124 L411 124 L411 62 L388 62 Z" />

        {/* E */}
        <path d="M466 44 L520 44 L520 62 L486 62 L486 75 L516 75 L516 93 L486 93 L486 106 L520 106 L520 124 L466 124 Z" />

        {/* Q Body (Circle Ring in Navy) */}
        <g id="letter-Q">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M580 41 C604.85 41 625 61.15 625 86 C625 97.4 620.67 107.8 613.56 115.65 L598.8 101.44 C603.24 97.16 606 91.17 606 84.5 C606 70.42 594.58 59 580.5 59 C566.42 59 555 70.42 555 84.5 C555 98.58 566.42 110 580.5 110 C587.17 110 593.16 107.24 597.44 102.8 L611.65 117.56 C603.8 124.67 593.4 129 582 129 C557.15 129 537 108.85 537 84 C537 59.15 557.15 41 582 41 Z"
          />
          {/* Distinct Vibrant Teal Diagonal Tail */}
          <rect
            x="572"
            y="98"
            width="44"
            height="18"
            rx="3"
            transform="rotate(40 572 98)"
            fill="url(#fateq-teal-accent)"
          />
        </g>
      </g>

      {/* ============================================================== */}
      {/* 3. SUBTITLE: Technologies                                      */}
      {/* ============================================================== */}
      {showSubtitle && (
        <text
          x="220"
          y="164"
          fill="#5B6E82"
          fontFamily="system-ui, -apple-system, 'Inter', 'Plus Jakarta Sans', sans-serif"
          fontSize="36"
          fontWeight="500"
          letterSpacing="0.22em"
        >
          Technologies
        </text>
      )}
    </svg>
  );
};
