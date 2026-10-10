import React from 'react';
import { 
  CheckCircle2, 
  Clock, 
  Shield, 
  Compass, 
  Cpu, 
  BookOpen, 
  FileCheck, 
  ArrowRight,
  Info
} from 'lucide-react';
import { capabilityEvidenceAreas } from '../data/documentsData';

interface ConsultingCapabilityEvidenceProps {
  onSelectCategory?: (categoryId: string) => void;
  onRequestAssessment?: () => void;
}

export const ConsultingCapabilityEvidence: React.FC<ConsultingCapabilityEvidenceProps> = ({
  onSelectCategory,
  onRequestAssessment
}) => {
  // Dynamic calculation based on capability data
  const completeCount = capabilityEvidenceAreas.filter(c => c.status === 'Complete').length;
  const totalCount = capabilityEvidenceAreas.length;
  const completionPercentage = Math.round((completeCount / totalCount) * 100);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-teal-600" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-blue-600" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-indigo-600" />;
      case 'FileCheck':
      default:
        return <FileCheck className="w-5 h-5 text-teal-700" />;
    }
  };

  return (
    <div className="bg-slate-50 border-t border-b border-slate-200 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-teal-50 text-teal-800 text-xs font-semibold mb-3 border border-teal-200">
            <Shield className="w-3.5 h-3.5 text-teal-600" />
            <span>Business Readiness & Methodology Audit</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
            Consulting Capability Evidence
          </h2>
          
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            FATEQ Technologies validates technical advisory readiness through verified architectural deliverables, formal scopes of work, and methodology playbooks. Every capability status is backed by actual published deliverables.
          </p>

          {/* Verification Status Meter */}
          <div className="mt-4 flex items-center gap-4 bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
            <div className="flex-1">
              <div className="flex justify-between items-center text-xs mb-1.5 font-medium">
                <span className="text-slate-700">Practice Readiness Validation</span>
                <span className="text-teal-700 font-bold">{completeCount} of {totalCount} Areas Fully Validated ({completionPercentage}%)</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-teal-600 h-full rounded-full transition-all duration-700"
                  style={{ width: `${completionPercentage}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 4 Capability Evidence Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {capabilityEvidenceAreas.map((area) => {
            const isComplete = area.status === 'Complete';

            return (
              <div 
                key={area.id}
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Status & Icon Header */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center">
                      {getIcon(area.icon)}
                    </div>

                    {isComplete ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Complete · Verified Deliverables</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
                        <Clock className="w-3.5 h-3.5 text-amber-600" />
                        <span>In Progress · SOW Available</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                    {area.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {area.description}
                  </p>

                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs text-slate-600 leading-relaxed">
                    <strong className="text-slate-800">Validation Note: </strong>
                    {area.details}
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono text-[11px]">
                    FATEQ-EVIDENCE-REF-{area.id.replace('evidence-', '').toUpperCase()}
                  </span>

                  {onSelectCategory && (
                    <button
                      onClick={() => {
                        if (area.id === 'evidence-assessment') onSelectCategory('plm-assessment');
                        else if (area.id === 'evidence-case-studies') onSelectCategory('case-studies');
                        else if (area.id === 'evidence-service-catalogue') onSelectCategory('service-catalogue');
                        else if (area.id === 'evidence-templates') onSelectCategory('templates');
                      }}
                      className="inline-flex items-center gap-1 font-semibold text-teal-700 hover:text-teal-900 transition-colors cursor-pointer"
                    >
                      <span>View Category</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Ethical Transparency & Non-Affiliation Callout */}
        <div className="mt-8 p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3.5 text-xs text-slate-600 leading-relaxed">
          <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold text-slate-800">
              Professional Integrity, Grounding & Scope Distinctions
            </p>
            <p>
              In strict accordance with professional consulting ethics, FATEQ Technologies clearly distinguishes illustrative portfolio architecture samples from actual customer project engagements. We do not invent fictional client testimonials, synthetic reference customers, or unverified claims. All technical methodologies are strictly grounded in standard Siemens Teamcenter 2606 architecture, BMIDE best practices, and official Deployment Center execution lifecycles.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
