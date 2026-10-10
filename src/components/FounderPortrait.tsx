import React, { useState } from 'react';
import { ShieldCheck, ZoomIn, X } from 'lucide-react';
import defaultFounderPhoto from '../assets/images/syed_abdul_hairu.jpg';

interface FounderPortraitProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showBadge?: boolean;
  allowZoom?: boolean;
}

export const FounderPortrait: React.FC<FounderPortraitProps> = ({
  className = '',
  size = 'md',
  showBadge = true,
  allowZoom = true,
}) => {
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const photoSrc = defaultFounderPhoto || '/assets/images/syed_abdul_hairu.jpg';

  // Specific 3:4 portrait aspect ratios to preserve authentic facial proportions without cropping
  const dimensionClasses = {
    sm: 'w-12 h-12 rounded-full',
    md: 'w-24 h-32 sm:w-28 sm:h-36 rounded-xl',
    lg: 'w-40 h-52 sm:w-48 sm:h-64 rounded-2xl',
    hero: 'w-56 h-72 sm:w-64 sm:h-84 rounded-2xl',
  }[size];

  return (
    <>
      <div className={`relative inline-block select-none ${className}`}>
        {/* Main Image Container — Locked Read-Only Presentation */}
        <div
          onClick={() => {
            if (allowZoom && size !== 'sm') setIsZoomOpen(true);
          }}
          className={`relative overflow-hidden bg-slate-100 border border-slate-200/90 shadow-sm transition-all duration-200 ${
            allowZoom && size !== 'sm' ? 'cursor-pointer hover:border-[#1769AA]/70 hover:shadow-md group' : ''
          } ${dimensionClasses}`}
          title={allowZoom && size !== 'sm' ? 'Click to view full portrait of Syed Abdul Hairu' : undefined}
        >
          <img
            src={photoSrc}
            alt="Syed Abdul Hairu — Founder & Principal PLM Technical Specialist, FATEQ Technologies"
            className="w-full h-full object-cover object-top filter-none"
            loading="eager"
            referrerPolicy="no-referrer"
          />

          {/* Subtle View Enlarge Hint for Non-Avatar Sizes */}
          {allowZoom && size !== 'sm' && (
            <div className="absolute top-2 right-2 p-1 rounded-md bg-white/90 text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity shadow-xs backdrop-blur-xs">
              <ZoomIn className="w-3.5 h-3.5 text-[#1769AA]" />
            </div>
          )}
        </div>

        {/* Verified Architect Badge */}
        {showBadge && (
          <div 
            className="absolute -bottom-1.5 -right-1.5 bg-white rounded-full p-1 shadow-md border border-slate-200 flex items-center justify-center text-[#1769AA]" 
            title="Verified Principal PLM Solution Architect"
          >
            <ShieldCheck className="w-4 h-4 text-[#1769AA]" />
          </div>
        )}
      </div>

      {/* Read-Only High-Resolution Portrait Modal */}
      {isZoomOpen && (
        <div 
          className="fixed inset-0 z-50 bg-[#0B1930]/85 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150"
          onClick={() => setIsZoomOpen(false)}
        >
          <div 
            className="relative bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div>
                <h4 className="text-lg font-bold text-[#0B1930] font-heading">Syed Abdul Hairu</h4>
                <p className="text-xs font-semibold text-[#1769AA]">Founder &amp; Principal PLM Technical Specialist</p>
                <p className="text-[11px] text-slate-500 font-medium">FATEQ Technologies · UAE &amp; GCC</p>
              </div>
              <button
                type="button"
                onClick={() => setIsZoomOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="my-5 flex justify-center bg-slate-50 rounded-xl p-2 border border-slate-100">
              <img
                src={photoSrc}
                alt="Syed Abdul Hairu — Founder & Principal PLM Technical Specialist, FATEQ Technologies"
                className="max-h-[62vh] w-auto rounded-lg shadow-sm object-contain"
              />
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-500">
              <span>Verified Enterprise Practice · 14+ Years Experience</span>
              <span className="font-semibold text-[#1769AA]">FATEQ Technologies</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
