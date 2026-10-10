import React from 'react';
import { 
  ShieldCheck, 
  Layers, 
  UserCheck, 
  FileText, 
  Factory, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface WhyFateqProps {
  onContact?: () => void;
  onRequestAssessment?: () => void;
}

export const WhyFateq: React.FC<WhyFateqProps> = ({ onContact, onRequestAssessment }) => {
  const pillars = [
    {
      title: 'Independent Technical Focus',
      description: 'We operate strictly as an independent consulting provider. Because we do not resell software licenses, our technical recommendations are 100% focused on optimizing what you already own.',
      icon: ShieldCheck,
      benefit: 'Objective advice with zero software sales pressure'
    },
    {
      title: 'OOTB-First Architecture Discipline',
      description: 'We resist the common urge to write brittle custom C++/ITK code. By exhausting native BMIDE business rules, compound properties, and declarative XRT layouts first, we ensure future upgrades remain low-risk and cost-effective.',
      icon: Layers,
      benefit: 'Reduced technical debt and straightforward upgrades'
    },
    {
      title: 'Direct Senior Architect Access',
      description: 'You work directly with principal Teamcenter architect Syed Abdul Hairu throughout discovery, scoping, and execution. Your project is never delegated to junior offshore developers.',
      icon: UserCheck,
      benefit: 'Deep domain expertise from day one'
    },
    {
      title: 'Complete Documentation & Runbooks',
      description: 'We believe no solution is complete without clear, maintainable documentation. Every engagement concludes with step-by-step operational runbooks, architecture specifications, and handover training.',
      icon: FileText,
      benefit: 'Zero vendor lock-in; your internal team retains full control'
    },
    {
      title: 'Real-World Manufacturing Context',
      description: 'We understand engineering drawings, CAD assembly hierarchies, mass rollups, and shop-floor manufacturing processes. We bridge the critical gap between design engineering and ERP/MES production.',
      icon: Factory,
      benefit: 'Solutions engineered for real shop-floor velocity'
    }
  ];

  return (
    <section id="why-fateq" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 text-xs font-semibold mb-3 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Why Work With Us</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1930] tracking-tight font-heading">
            Engineering-Driven Consulting Without Corporate Overhead
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            FATEQ Technologies was established to provide manufacturing organizations with direct, pragmatic, high-caliber Teamcenter technical services—delivering measurable engineering velocity and architectural stability.
          </p>
        </div>

        {/* 5 Distinctive Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;

            return (
              <div
                key={idx}
                className="bg-[#F4F7FA] rounded-2xl border border-slate-200 p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#1769AA] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-bold text-base sm:text-lg text-[#0B1930] mb-2 font-heading">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 flex items-center gap-2 text-xs font-semibold text-teal-800">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>{pillar.benefit}</span>
                </div>
              </div>
            );
          })}

          {/* Quick Assessment CTA Card */}
          <div className="bg-gradient-to-br from-[#0B1930] to-blue-950 text-white rounded-2xl p-6 shadow-md flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-300 block mb-2">
                Evaluate Your Baseline
              </span>
              <h3 className="text-lg font-bold font-heading mb-2">
                Benchmark Your Teamcenter Footprint
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Use our interactive Maturity Navigator to evaluate syslogs, BMIDE data models, site preferences, and workflow rules across 6 weighted architectural pillars.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-white/10 space-y-2">
              {onRequestAssessment && (
                <button
                  onClick={onRequestAssessment}
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 bg-teal-500 hover:bg-teal-400 text-[#0B1930] rounded-xl font-bold text-xs transition-colors cursor-pointer"
                >
                  <span>Launch Maturity Navigator</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
              {onContact && (
                <button
                  onClick={onContact}
                  className="w-full text-center text-xs text-slate-300 hover:text-white underline cursor-pointer"
                >
                  Or discuss your challenge directly
                </button>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
