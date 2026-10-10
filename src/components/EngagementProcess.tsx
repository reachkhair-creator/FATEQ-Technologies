import React from 'react';
import { 
  Search, 
  FileCheck, 
  FileText, 
  Cog, 
  GraduationCap, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface EngagementProcessProps {
  onStartEngagement?: () => void;
}

export const EngagementProcess: React.FC<EngagementProcessProps> = ({ onStartEngagement }) => {
  const steps = [
    {
      num: '01',
      title: 'Discovery',
      subtitle: 'Understand the Problem & Environment',
      description: 'We conduct a preliminary technical discovery call to review your current Teamcenter version, active CAD engines, ERP interfaces, and the specific engineering or operational friction you are experiencing.',
      icon: Search,
      keyAction: 'Preliminary technical call & architecture scoping'
    },
    {
      num: '02',
      title: 'Assessment',
      subtitle: 'Review Evidence & Dependencies',
      description: 'With authorized access or exported logs (BMIDE XML templates, server syslogs, FSC cache logs), we evaluate the root causes, identify dependencies, and verify upgrade blockers or process gaps.',
      icon: FileCheck,
      keyAction: 'Evidence gathering & root-cause verification'
    },
    {
      num: '03',
      title: 'Proposal',
      subtitle: 'Define SOW, Scope & Deliverables',
      description: 'We draft a formal Statement of Work (SOW) clearly detailing in-scope technical tasks, explicit out-of-scope boundaries, milestones, acceptance criteria, and transparent commercial options.',
      icon: FileText,
      keyAction: 'Transparent Statement of Work (SOW) agreement'
    },
    {
      num: '04',
      title: 'Execution',
      subtitle: 'Implement & Validate Results',
      description: 'We execute the agreed changes through disciplined deployment gates (Development -> QA -> UAT), testing all workflows, CAD integrations, and data models before production cutover.',
      icon: Cog,
      keyAction: '4-environment deployment gate execution'
    },
    {
      num: '05',
      title: 'Handover',
      subtitle: 'Documentation & Knowledge Transfer',
      description: 'We deliver complete as-built documentation, operational runbooks, and administrator handover sessions so your internal team retains full ownership and confidence in the system.',
      icon: GraduationCap,
      keyAction: 'Comprehensive runbooks & admin knowledge transfer'
    }
  ];

  return (
    <section id="process" className="py-16 sm:py-24 bg-[#F4F7FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-100 text-blue-800 text-xs font-semibold mb-3 border border-blue-200">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
            <span>Structured Delivery Methodology</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1930] tracking-tight font-heading">
            A Disciplined Five-Step Engagement Process
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Every consulting engagement follows a structured, transparent process designed to minimize business disruption, eliminate scope ambiguity, and deliver verifiable engineering outcomes.
          </p>
        </div>

        {/* 5-Step Responsive Timeline / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-5 mb-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;

            return (
              <div
                key={step.num}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between relative group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xl font-black text-[#1769AA]">
                      {step.num}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-[#0B1930] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-bold text-base text-[#0B1930] mb-1 font-heading">
                    {step.title}
                  </h3>

                  <div className="text-[11px] font-semibold text-slate-500 mb-3">
                    {step.subtitle}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-[#1769AA] font-medium">
                  <strong>Milestone: </strong>{step.keyAction}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div>
            <h4 className="text-sm sm:text-base font-bold text-[#0B1930]">
              Ready to explore how FATEQ Technologies can support your Teamcenter environment?
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              Start with an exploratory conversation. Zero commitment, clear architectural feedback.
            </p>
          </div>

          {onStartEngagement && (
            <button
              onClick={onStartEngagement}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1769AA] hover:bg-[#0B1930] text-white rounded-xl font-bold text-xs shadow-xs transition-colors whitespace-nowrap cursor-pointer"
            >
              <span>Initiate Discovery Step</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>
    </section>
  );
};
