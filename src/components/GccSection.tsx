import React from 'react';
import { 
  Globe2, 
  MapPin, 
  Clock, 
  PhoneCall, 
  ShieldCheck, 
  Building,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { gccRegions } from '../data/gccData';

interface GccSectionProps {
  onContactGcc: (country: string) => void;
}

export const GccSection: React.FC<GccSectionProps> = ({ onContactGcc }) => {
  return (
    <section id="gcc" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold tracking-wide mb-3">
            <Globe2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Gulf Regional Coverage</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
            Supporting Manufacturing Organizations Across the GCC
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            FATEQ Technologies acts as an independent, accessible Teamcenter PLM engineering partner for industrial plants and design teams operating in the Gulf Cooperation Council. With immediate timezone alignment and deep familiarity with regional manufacturing supply chains, we provide practical technical consulting without unnecessary bureaucracy.
          </p>
        </div>

        {/* Regional Banner with Facility Image and Operating Principles */}
        <div className="mt-10 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 relative min-h-[240px] lg:min-h-full bg-slate-100">
              <img
                src="/src/assets/images/gcc_manufacturing_facility_1790443984816.jpg"
                alt="Modern GCC industrial manufacturing facility"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-300">Operational Base</span>
                <h3 className="text-lg font-bold">United Arab Emirates</h3>
                <p className="text-xs text-slate-200 mt-0.5">Direct contact: +971 52 558 2129</p>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Regional Alignment &amp; Engagement Principles
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We bridge the gap between complex software vendor documentation and actual shopfloor execution in the Gulf region. Whether your plant is producing chillers in Dubai, heavy structural equipment in Dammam, or fabricated assemblies in Sohar, our technical support is direct and responsive.
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-2 font-bold text-xs text-slate-900 mb-1">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span>Zero Timezone Drift</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Operating in Gulf Standard Time (GST / UTC+4). Immediate support response during your active engineering shift.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-2 font-bold text-xs text-slate-900 mb-1">
                      <PhoneCall className="w-4 h-4 text-emerald-600" />
                      <span>Direct Founder Access</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Deal directly with technical lead Syed Abdul Hairu. No ticketing ticket queues or junior account handlers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Honest Regional Positioning Disclaimer as required by prompt Section 13 */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-start gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <p className="leading-tight">
                  <strong className="text-slate-700">Transparency Note: </strong>
                  FATEQ Technologies operates from the UAE and provides independent technical services remotely and via planned on-site engineering missions across the GCC. We do not claim local physical branch offices where none exist.
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* 6 GCC Countries Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gccRegions.map((region) => (
            <div
              key={region.country}
              className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-4 rounded-xs bg-slate-200 text-[10px] font-mono font-bold flex items-center justify-center text-slate-700">
                      {region.flagCode}
                    </span>
                    <h3 className="font-bold text-slate-900 text-base">
                      {region.country}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-slate-600">
                    GCC Member
                  </span>
                </div>

                <div className="mt-4 space-y-3 text-xs">
                  <div>
                    <span className="font-bold text-slate-700 block">Manufacturing Hubs:</span>
                    <span className="text-slate-600">{region.hubs.join(' · ')}</span>
                  </div>

                  <div>
                    <span className="font-bold text-slate-700 block">Common Sectors:</span>
                    <span className="text-slate-600">{region.focusSectors.join(' · ')}</span>
                  </div>

                  <div className="p-2.5 rounded-md bg-slate-50 text-slate-600 text-[11px] italic">
                    {region.note}
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100">
                <button
                  onClick={() => onContactGcc(region.country)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
                >
                  <span>Inquire for {region.country} Operations</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
