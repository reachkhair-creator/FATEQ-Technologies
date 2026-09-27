import React, { useState } from 'react';
import { 
  X, 
  CheckSquare, 
  ArrowRight, 
  Copy, 
  Check, 
  Layers, 
  Terminal, 
  Workflow, 
  MessageSquare,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { ServiceDetail } from '../types';

interface ServiceDetailModalProps {
  service: ServiceDetail | null;
  onClose: () => void;
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectServiceForContact
}) => {
  const [copied, setCopied] = useState(false);

  if (!service) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(service.codeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200">
      
      <div 
        className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Sticky Modal Header */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: service.accentColor }}
            />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">
              Technical Service Specification
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Section 10: Hero: Service name + concise technical explanation */}
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-semibold mb-3 border"
                 style={{ 
                   backgroundColor: `${service.accentColor}12`, 
                   color: service.accentColor,
                   borderColor: `${service.accentColor}30` 
                 }}>
              <span>Teamcenter Engineering Focus</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              {service.title}
            </h2>
            <p className="mt-2 text-base text-slate-600 leading-relaxed">
              {service.shortDesc}
            </p>
          </div>

          {/* Section 10: The Challenge */}
          <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1.5">
              <span>The Engineering &amp; Operational Challenge</span>
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed font-normal">
              {service.challenge}
            </p>
          </div>

          {/* Section 10: What We Do */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
              What We Do — Technical Scope
            </h3>
            <div className="grid grid-cols-1 gap-2.5">
              {service.whatWeDo.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50/70 border border-slate-100 text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold font-mono">
                    {idx + 1}
                  </div>
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 10: Technical Capabilities */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
              Key Technical Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.capabilities.map((cap, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-colors">
                  <h4 className="text-sm font-bold text-slate-900">
                    {cap.title}
                  </h4>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 10: Typical Deliverables Checklist */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
              Typical Deliverables Checklist
            </h3>
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-2">
              {service.deliverables.map((del, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 10: Delivery Approach: Assess → Design → Configure → Validate → Deploy */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
              Delivery Approach (Structured 5-Phase Methodology)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {service.deliveryPhases.map((phase) => (
                <div key={phase.step} className="p-3.5 rounded-lg border border-slate-200 bg-white flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-slate-600">
                      Phase {phase.step}
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 mt-1">
                      {phase.title}
                    </h4>
                  </div>
                  <p className="mt-2 text-[11px] text-slate-600 leading-tight">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 10: Technical Insight — Light code/config/schema example (JetBrains Mono, light code editor style) */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-slate-500" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Technical Insight: {service.codeSnippet.title}
                </h3>
              </div>
              <button
                onClick={handleCopyCode}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* LIGHT CODE EDITOR STYLE - Strictly light as requested */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 overflow-hidden font-mono text-xs">
              <div className="px-4 py-2 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-slate-500 text-[11px]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                  <span className="ml-2 font-medium text-slate-700">{service.codeSnippet.title}</span>
                </div>
                <span className="uppercase">{service.codeSnippet.language}</span>
              </div>
              <pre className="p-4 overflow-x-auto text-slate-800 leading-relaxed bg-[#FAFAFA]">
                <code>{service.codeSnippet.code}</code>
              </pre>
            </div>
            <p className="mt-2 text-xs text-slate-500 italic">
              {service.codeSnippet.explanation}
            </p>
          </div>

          {/* Direct CTA */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 text-center sm:text-left">
              <span>Have a specific requirement regarding </span>
              <strong className="text-slate-900">{service.title}</strong>?
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={`https://wa.me/971525582129?text=Hello%20Syed,%20I%20would%20like%20to%20discuss%20${encodeURIComponent(service.title)}%20with%20FATEQ%20Technologies.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors flex-1 sm:flex-none"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp Syed</span>
              </a>

              <button
                onClick={() => {
                  onSelectServiceForContact(service.title);
                  onClose();
                }}
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-all flex-1 sm:flex-none cursor-pointer"
              >
                <span>Discuss Your Teamcenter Requirement</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
