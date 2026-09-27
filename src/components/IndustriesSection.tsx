import React, { useState } from 'react';
import { 
  Wind, 
  Cog, 
  Wrench, 
  Car, 
  Scissors, 
  Building2, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { industriesData } from '../data/industriesData';
import { Industry } from '../types';

interface IndustriesSectionProps {
  onContactIndustry: (industryName: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onContactIndustry }) => {
  const [expandedIndustry, setExpandedIndustry] = useState<string>('hvac');

  const getIndustryIcon = (id: string) => {
    switch (id) {
      case 'hvac': return Wind;
      case 'industrial-equipment': return Cog;
      case 'machinery-manufacturing': return Wrench;
      case 'automotive-components': return Car;
      case 'sheet-metal': return Scissors;
      case 'manufacturing-smes': return Building2;
      default: return Cog;
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedIndustry(expandedIndustry === id ? '' : id);
  };

  return (
    <section id="industries" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Domain Focus
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1 font-heading">
            Industries We Serve
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Teamcenter implementation succeeds when PLM architects understand physical engineering constraints. We specialize in engineering-to-order manufacturing, sheet metal, and modular assembly hierarchies.
          </p>
        </div>

        {/* Featured HVAC Section with Stronger Visual Emphasis (Section 12 requirement) */}
        {(() => {
          const hvac = industriesData.find(i => i.id === 'hvac')!;
          return (
            <div className="mt-10 bg-linear-to-r from-blue-50/70 via-indigo-50/40 to-white rounded-2xl border-2 border-blue-200 p-6 sm:p-8 shadow-xs relative overflow-hidden">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                
                {/* Text Content */}
                <div className="w-full lg:w-7/12 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-600 text-white text-xs font-bold tracking-wide">
                    <Wind className="w-3.5 h-3.5" />
                    <span>Specialized Engineering Domain</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                    {hvac.name}
                  </h3>

                  <p className="text-sm font-semibold text-blue-800">
                    {hvac.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {hvac.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3 bg-white rounded-lg border border-blue-100">
                      <span className="text-xs font-bold text-slate-900 block mb-1">Key Engineering Challenge</span>
                      <p className="text-xs text-slate-600">{hvac.keyChallenges[0]}</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-blue-100">
                      <span className="text-xs font-bold text-blue-900 block mb-1">FATEQ PLM Solution</span>
                      <p className="text-xs text-slate-600">{hvac.plmSolutions[0]}</p>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => onContactIndustry(hvac.name)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors cursor-pointer"
                    >
                      <span>Discuss HVAC Teamcenter Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs text-slate-500 font-mono">
                      AHU · Chillers · Coils · Ducting
                    </span>
                  </div>
                </div>

                {/* Real Generated High-Fidelity Image with Zero-Broken-Image Fallback */}
                <div className="w-full lg:w-5/12">
                  <div className="relative rounded-xl overflow-hidden border border-blue-200/80 shadow-md aspect-4/3 bg-slate-100 group">
                    <img
                      src={hvac.image}
                      alt="HVAC Air Handling Unit precision engineering and manufacturing"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        // Fallback container if image fails
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-slate-900/80 via-slate-900/40 to-transparent p-4 text-white">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-blue-200">Shopfloor Precision</span>
                      <p className="text-xs font-medium">Modular HVAC Equipment &amp; Sheet Metal Fabrication</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })()}

        {/* Other 5 Industries Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesData.filter(i => !i.isFeatured).map((industry) => {
            const Icon = getIndustryIcon(industry.id);
            const isExpanded = expandedIndustry === industry.id;

            return (
              <div
                key={industry.id}
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
                      style={{ backgroundColor: industry.accentColor }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 font-mono">
                      Engineering Domain
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-slate-900">
                    {industry.name}
                  </h3>

                  <p className="mt-1 text-xs font-medium text-slate-600">
                    {industry.tagline}
                  </p>

                  <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                    {industry.description}
                  </p>

                  {/* Collapsible Technical Details */}
                  {isExpanded && (
                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-2 text-xs animate-in fade-in duration-200">
                      <div>
                        <strong className="text-slate-900 block text-[11px] uppercase">Core Challenge:</strong>
                        <span className="text-slate-600 leading-tight">{industry.keyChallenges[0]}</span>
                      </div>
                      <div className="pt-1">
                        <strong className="text-slate-900 block text-[11px] uppercase">Teamcenter Solution:</strong>
                        <span className="text-slate-600 leading-tight">{industry.plmSolutions[0]}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => toggleExpand(industry.id)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                  >
                    <span>{isExpanded ? 'Less Details' : 'Engineering Scope'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    onClick={() => onContactIndustry(industry.name)}
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
