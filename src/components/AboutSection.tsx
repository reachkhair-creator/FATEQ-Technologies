import React from 'react';
import { 
  UserCheck, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  Code2, 
  Terminal, 
  Settings, 
  Cpu, 
  Layers, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { FateqLogo } from './FateqLogo';

interface AboutSectionProps {
  onOpenAssessment: () => void;
  onContactFounder: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenAssessment, onContactFounder }) => {
  const technicalPillars = [
    { name: 'Technical Problem Solving', desc: 'Direct root-cause analysis of dataset locking, FSC volume timeouts, and schema anomalies.' },
    { name: 'PLM Architecture', desc: 'Sizing multi-tier server clusters, FMS cache networks, and high-availability database connections.' },
    { name: 'Teamcenter Administration', desc: 'Rule Tree ACL access security, Organization structure, and automated Dispatcher pipelines.' },
    { name: 'BMIDE Configuration', desc: 'Clean object subtyping, compound attributes, LOVs, and Deep Copy Rules without schema debt.' },
    { name: 'AWC Customization', desc: 'Declarative ViewModels, XML stylesheets, custom command bars, and optimized search tiles.' },
    { name: 'ITK/SOA Development', desc: 'Memory-safe C/C++ server handlers and REST/SOAP endpoints for high-throughput enterprise integrations.' },
    { name: 'Engineering Workflows', desc: 'CMII-compliant ECN/ECO approval gates, dynamic assignment rules, and translation triggers.' },
    { name: 'CAD/ERP Integration', desc: 'Bi-directional item master and MBOM synchronization connecting Teamcenter with SAP and Oracle.' },
    { name: 'Manufacturing Data Processes', desc: 'Extracting flat patterns, CNC toolpaths, and shop floor work instructions with revision effectivity.' },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Founder &amp; Engineering Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1 font-heading">
            Technical Expertise. Practical PLM.
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            FATEQ Technologies was established with a singular engineering focus: solving tangible Teamcenter PLM challenges on the ground. We do not sell software licenses or pitch generic business buzzwords; we deliver hands-on technical execution that makes engineering data flow smoothly to manufacturing.
          </p>
        </div>

        {/* Founder Card & Technical Credibility Presentation */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Founder Identity Card */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs">
            <div className="pb-4 mb-4 border-b border-slate-200">
              <FateqLogo className="h-8 w-auto mb-3" />
            </div>

            <div className="flex items-center gap-4 pb-6 border-b border-slate-200">
              <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-heading font-extrabold text-xl shadow-xs">
                SH
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Syed Abdul Hairu
                </h3>
                <p className="text-xs font-semibold text-blue-700">
                  Founder &amp; Principal PLM Technical Specialist
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  FATEQ Technologies · UAE &amp; GCC
                </p>
              </div>
            </div>

            <div className="py-5 space-y-3.5 text-xs text-slate-600 leading-relaxed">
              <p>
                “When an engineering team struggles with a 20-second CAD check-in delay, an unreleased drawing accidentally sent to CNC machines, or an upgrade blocked by undocumented C++ code, they don’t need marketing presentations. They need an engineer who can inspect the log files, trace the BMIDE schema, and solve the root cause.”
              </p>
              <p>
                As founder and technical lead, Syed Abdul Hairu works directly with engineering managers, IT heads, and CAD leads across GCC manufacturing facilities to ensure their Teamcenter investment delivers measurable operational discipline.
              </p>
            </div>

            {/* Direct Contact Channels */}
            <div className="pt-5 border-t border-slate-200 space-y-2.5">
              <a
                href="tel:+971525582129"
                className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:bg-blue-50/30 transition-all text-xs text-slate-900 font-semibold"
              >
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>Call Syed Directly:</span>
                </div>
                <span className="font-mono text-blue-700">+971 52 558 2129</span>
              </a>

              <a
                href="https://wa.me/971525582129?text=Hello%20Syed,%20I%20would%20like%20to%20discuss%20a%20Teamcenter%20PLM%20requirement%20with%20FATEQ%20Technologies."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 hover:bg-emerald-100/70 transition-all text-xs text-emerald-950 font-semibold"
              >
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 text-emerald-700" />
                  <span>Direct WhatsApp Channel</span>
                </div>
                <span className="text-emerald-700">Connect Now ›</span>
              </a>
            </div>

            {/* Honest Independence Note */}
            <div className="mt-5 p-3 rounded-lg bg-slate-100/80 text-[11px] text-slate-500 leading-tight">
              <strong>Independent Consultancy:</strong> FATEQ Technologies operates purely on professional services and technical engineering expertise. We maintain objective independence to recommend what is best for your operational reality.
            </div>
          </div>

          {/* Core Technical Pillars Breakdown */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              Technical Problem Solving Capabilities
            </h3>
            <p className="text-xs text-slate-600">
              Our daily engineering practice spans the complete Teamcenter ecosystem:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {technicalPillars.map((pillar, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    <h4 className="text-xs font-bold text-slate-900">
                      {pillar.name}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenAssessment}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors cursor-pointer"
              >
                <span>Run Interactive Assessment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onContactFounder}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                <span>Schedule a Technical Call</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
