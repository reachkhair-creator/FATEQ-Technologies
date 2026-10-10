import React from 'react';
import { 
  Stethoscope, 
  Wrench, 
  LifeBuoy, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  ShieldAlert, 
  FileCheck2,
  Sparkles
} from 'lucide-react';

interface CommercialOffersProps {
  onSelectOffer: (offerName: string, defaultMessage: string) => void;
}

export const CommercialOffers: React.FC<CommercialOffersProps> = ({ onSelectOffer }) => {
  const offers = [
    {
      id: 'offer-health-check',
      tag: 'Defined-Scope Assessment',
      title: 'Teamcenter Health Check',
      shortDesc: 'A fast, comprehensive technical evaluation of your active Teamcenter environment to uncover configuration flaws, performance bottlenecks, and upgrade blockers.',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      icon: Stethoscope,
      accentBorder: 'border-blue-500',
      idealFor: 'Engineering organizations preparing for an upgrade, experiencing unexplained slowdowns, or evaluating inherited PLM instances.',
      duration: 'Typically 1–2 Weeks (Scope Dependent)',
      deliverables: [
        'Current-state technical architecture & environment findings',
        'BMIDE data model & customization complexity observations',
        'FSC cache, pool manager, and POM database index review',
        'Prioritized risk register with actionable remediation steps',
        'Executive management summary deck ready for leadership'
      ],
      ctaText: 'Request a Health Check',
      inquiryMessage: 'Inquiry regarding the Teamcenter Health Check engagement (defined-scope technical assessment).'
    },
    {
      id: 'offer-issue-resolution',
      tag: 'Scoped Troubleshooting',
      title: 'Teamcenter Issue Resolution',
      shortDesc: 'Targeted technical problem investigation to isolate and resolve acute production incidents, failing workflow handlers, or broken CAD/ERP interfaces.',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
      icon: Wrench,
      accentBorder: 'border-amber-500',
      idealFor: 'Teams facing urgent production blockers: stalled release workflows, Dispatcher translation failures, or CAD-ERP sync queue deadlocks.',
      duration: 'Short-Cycle Focused Sprint',
      deliverables: [
        'Deep syslog and server trace investigation',
        'Root-cause analysis (RCA) grounded in verifiable system evidence',
        'Documented corrective actions and configuration adjustments',
        'Staging environment fix verification and rollback protocol',
        'Technical handover documentation preventing recurrence'
      ],
      ctaText: 'Request Issue Resolution',
      inquiryMessage: 'Inquiry regarding Teamcenter Issue Resolution support for an active technical problem or production blocker.'
    },
    {
      id: 'offer-managed-support',
      tag: 'Recurring Advisory',
      title: 'Teamcenter Managed Support',
      shortDesc: 'Ongoing, senior-level Teamcenter technical support and administration providing your engineering team with dependable expert assistance on demand.',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      icon: LifeBuoy,
      accentBorder: 'border-emerald-500',
      idealFor: 'Enterprises wanting senior PLM architect oversight without hiring full-time internal infrastructure specialists.',
      duration: 'Monthly Retainer (Configurable Hours)',
      deliverables: [
        'Contractually agreed monthly technical support allocation',
        'Tier-3 escalation for administration, BMIDE, and Active Workspace',
        'Regular proactive system hygiene audits and log reviews',
        'Deployment Center patch preparation and test-gate validation',
        'Monthly review meetings and technical status reporting'
      ],
      ctaText: 'Inquire About Managed Support',
      inquiryMessage: 'Inquiry regarding recurring Teamcenter Managed Support arrangements and monthly technical support options.'
    }
  ];

  return (
    <section id="solutions" className="py-16 sm:py-24 bg-[#F4F7FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-100 text-blue-800 text-xs font-semibold mb-3 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-700" />
            <span>Commercial Engagement Options</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1930] tracking-tight font-heading">
            Structured Engagement Packages for Predictable Outcomes
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Whether you need a one-time architecture health check, rapid troubleshooting for an acute production crisis, or flexible ongoing support, FATEQ Technologies offers clearly defined engagement models with transparent scopes and deliverables.
          </p>
        </div>

        {/* 3 Commercial Offer Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {offers.map((offer) => {
            const Icon = offer.icon;

            return (
              <div 
                key={offer.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden relative"
              >
                {/* Top Accent Strip */}
                <div className={`h-1.5 w-full bg-current ${offer.accentBorder.replace('border-', 'bg-')}`} />

                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  {/* Tag & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${offer.badgeColor}`}>
                      {offer.tag}
                    </span>

                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#1769AA]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#0B1930] mb-2 font-heading">
                    {offer.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {offer.shortDesc}
                  </p>

                  {/* Ideal For Box */}
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-600 mb-5">
                    <strong className="text-slate-800 block text-[11px] uppercase tracking-wider mb-1">
                      Best Suited For:
                    </strong>
                    {offer.idealFor}
                  </div>

                  {/* Timeline Indicator */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-5 pb-4 border-b border-slate-100">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span><strong>Duration: </strong>{offer.duration}</span>
                  </div>

                  {/* Deliverables List */}
                  <div className="flex-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                      Included Deliverables:
                    </span>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {offer.deliverables.map((del, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-100">
                  <button
                    onClick={() => onSelectOffer(offer.title, offer.inquiryMessage)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#1769AA] hover:bg-[#0B1930] text-white rounded-xl font-semibold text-xs transition-all shadow-xs cursor-pointer"
                  >
                    <span>{offer.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-2">
                    Commercial details &amp; specific milestones agreed in formal Statement of Work (SOW).
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Commercial Boundary Governance Note */}
        <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs text-slate-600 leading-relaxed flex items-start gap-3">
          <FileCheck2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-800">Commercial Transparency Policy: </strong>
            All FATEQ Technologies consulting agreements are governed by clear Statements of Work (SOW) defining explicit in-scope deliverables, client prerequisites, and acceptance criteria. We do not publish generic fabricated rate cards or ungrounded SLA guarantees—every engagement is sized accurately based on your actual system architecture and version baseline.
          </div>
        </div>

      </div>
    </section>
  );
};
