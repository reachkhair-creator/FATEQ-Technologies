import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

interface FaqSectionProps {
  onContact?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onContact }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      category: 'Collaboration & Governance',
      question: 'How does FATEQ Technologies collaborate with our internal IT team and existing Siemens support?',
      answer: 'We operate as a specialized technical partner to your internal team. We do not replace your internal administrators or your Siemens software maintenance agreement; instead, we handle complex architectural tasks, custom code refactoring, integration pipelines, and root-cause investigations that require dedicated expert focus. All findings and runbooks are fully transitioned to your internal staff upon completion.'
    },
    {
      category: 'Architecture & Customization',
      question: 'Do you recommend custom coding (ITK/SOA) or staying strictly out-of-the-box (OOTB)?',
      answer: 'We follow a strict OOTB-First Architecture Principle. Native Teamcenter capabilities—declarative BMIDE compound properties, naming rules, deep copy rules, and Active Workspace XRT stylesheets—should always be utilized first. We reserve custom C++ ITK or SOA development exclusively for unique requirements that standard Teamcenter cannot support, such as proprietary encryption gateways or custom CAD translators.'
    },
    {
      category: 'Security & Confidentiality',
      question: 'How do you handle proprietary CAD data, intellectual property security, and NDAs?',
      answer: 'Confidentiality is paramount in PLM engineering. Prior to receiving any system access or log exports, FATEQ Technologies signs a formal bilateral Non-Disclosure Agreement (NDA). All assessments can be conducted using sanitized configuration files, schema XMLs, and syslog traces without exposing proprietary 3D CAD geometry. When remote access is required, we work strictly through your organization’s approved VPN and bastion infrastructure.'
    },
    {
      category: 'Technology & Versions',
      question: 'Which versions of Siemens Teamcenter and Active Workspace do you support?',
      answer: 'We provide technical services across both modern and legacy Teamcenter releases: from legacy Teamcenter 10.x, 11.x, and 12.x through modern Teamcenter 13.x, 14.x, 2312, 2406, and Release 2606. We support Active Workspace from early HTML5 releases through the latest declarative framework architectures, as well as Siemens NX, SolidWorks, Creo, and CATIA integrations.'
    },
    {
      category: 'Engagement & Scope',
      question: 'Can you assist with an urgent production issue without requiring a long-term retainer?',
      answer: 'Yes. Through our Teamcenter Issue Resolution engagement model, we offer scoped, short-cycle troubleshooting sprints. We investigate system logs, isolate the root cause, validate a fix in your test environment, and provide a technical handover with clear documentation—without locking you into recurring commitments.'
    },
    {
      category: 'Assessments & Roadmaps',
      question: 'How long does a Teamcenter Health Check or Maturity Assessment typically take?',
      answer: 'A standard Teamcenter Health Check typically spans 1 to 2 calendar weeks. A full 8-domain Teamcenter Maturity Assessment and 12-Month Digital Roadmap takes between 3 and 4 calendar weeks (~40 consultant hours), requiring log files, BMIDE templates, and brief discovery interviews with key engineering and IT leads.'
    },
    {
      category: 'Client Inputs',
      question: 'What inputs are required from our engineering team during an engagement?',
      answer: 'Typical prerequisites include administrative access to a development or test Teamcenter environment, exports of BMIDE project templates, sample syslog files, and access to key functional leads (CAD manager, manufacturing planner, IT lead) for discovery workshops. We supply a clear pre-engagement checklist before kickoff to ensure zero wasted time.'
    },
    {
      category: 'Commercial Terms',
      question: 'How are commercial agreements and payment milestones structured?',
      answer: 'All projects are governed by a formal Statement of Work (SOW). We offer transparent milestone-based fixed-fee schedules tied directly to deliverable sign-offs (e.g., Architecture Blueprint, Build Completion, UAT Sign-off, Go-Live Cutover), or flexible time-and-materials arrangements for ongoing advisory.'
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 text-xs font-semibold mb-3 border border-blue-200">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1930] tracking-tight font-heading">
            Clear Answers to Common PLM Questions
          </h2>
          
          <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Everything you need to know about how FATEQ Technologies engages with manufacturing enterprises, handles technical governance, and delivers verifiable Teamcenter improvements.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 mb-10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-slate-200 rounded-xl overflow-hidden transition-all bg-white shadow-2xs"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#1769AA] block mb-1">
                      {faq.category}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#0B1930]">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-[#F4F7FA]/50 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have more questions banner */}
        <div className="bg-[#F4F7FA] rounded-2xl border border-slate-200 p-6 text-center">
          <h4 className="text-sm sm:text-base font-bold text-[#0B1930]">
            Have a specific Teamcenter question not covered here?
          </h4>
          <p className="text-xs text-slate-500 mt-1 mb-4">
            Speak directly with Syed Abdul Hairu to evaluate your architecture or discuss an active production challenge.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {onContact && (
              <button
                onClick={onContact}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1769AA] hover:bg-[#0B1930] text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                <span>Ask a Technical Question</span>
              </button>
            )}
            <a
              href="https://wa.me/971525582129?text=Hello%20Syed,%20I%20have%20a%20technical%20question%20regarding%20Teamcenter%20PLM."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp (+971 52 558 2129)</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
