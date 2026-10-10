import React, { useState } from 'react';
import { 
  Cpu, 
  Workflow, 
  Layers, 
  RefreshCw, 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  ExternalLink,
  Shield,
  FileText,
  Building2,
  AlertTriangle
} from 'lucide-react';

interface CaseStudiesSectionProps {
  onContactCaseStudy?: (caseTitle: string) => void;
  onOpenAssessment?: () => void;
}

export interface CaseStudyItem {
  id: string;
  tag: string;
  title: string;
  customerContext: string;
  technicalChallenge: string;
  scopeOfWork: string[];
  technicalApproach: string;
  deliverables: string[];
  validationMethod: string;
  measuredOutcome: string;
  relatedService: string;
  pdfDownloadPath?: string;
  pdfDownloadName?: string;
  icon: any;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  onContactCaseStudy,
  onOpenAssessment
}) => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>('case-cad-erp');

  const caseStudies: CaseStudyItem[] = [
    {
      id: 'case-cad-erp',
      tag: 'PLM-to-ERP Integration',
      title: 'CAD-to-ERP Digital Thread Integration & Automated EBOM Synchronization',
      customerContext: 'Illustrative Scenario: Industrial machinery manufacturer (~250 Active Workspace authors, 40 NX CAD engineers, SAP ERP).',
      technicalChallenge: 'Manual CSV exports from Siemens NX caused a 35% data discrepancy with SAP Material Masters, duplicate part proliferation ($4,500 holding cost per duplicate), and shop-floor scrap from obsolete revision releases.',
      scopeOfWork: [
        'Bi-directional property mapping between NX CAD attributes, BMIDE item revisions, and SAP MATNR.',
        'Active Integration Gateway (AIG / T4S) mapping script configuration for Material Master and Plant BOMs.',
        'Pre-transfer workflow validation gates enforcing 5-level mass precedence and ECLASS classification.',
        'Asynchronous error queue handling with automated retry and exception escalation to data stewards.'
      ],
      technicalApproach: 'Configured event-driven AIG pipelines triggered strictly upon Teamcenter TCM Released status gate. Implemented dependency-ordered child-first transfers preventing structural lockups in SAP RFC queues.',
      deliverables: [
        'CAD-to-PLM Attribute Mapping Schema (cad_to_tc_attribute_map.xsd)',
        'Active Integration Gateway (AIG / T4S) TCL Mapping Script Package',
        'Pre-Flight Workflow Validation Rule Handler Configuration',
        'Integration Error Triage & Support Operating Manual'
      ],
      validationMethod: 'End-to-end transfer testing of 500+ complex multi-level assembly BOMs in staging; simulated 50 concurrent release transfers under peak load.',
      measuredOutcome: 'Target Benchmark: 99.8% transactional success rate across 15,000+ monthly transfers, 85% reduction in manual data entry, and zero duplicate material creation.',
      relatedService: 'PLM, CAD, and ERP Integration',
      pdfDownloadPath: '/documents/FATEQ_Case_Study_CAD_to_ERP_Integration_and_BOM_Data_Integrity.pdf',
      pdfDownloadName: 'FATEQ_Case_Study_CAD_to_ERP_Integration_and_BOM_Data_Integrity.pdf',
      icon: Cpu
    },
    {
      id: 'case-workflow',
      tag: 'Workflow Governance',
      title: 'Teamcenter Workflow Stabilization & Closed-Loop Change Control',
      customerContext: 'Illustrative Scenario: Automotive tier-1 supplier facing prolonged engineering change cycle times (>22 business days) across distributed US, European, and Asian design sites.',
      technicalChallenge: 'Unmanaged email sign-offs, failing EPM action handlers, and orphaned revision targets caused production line stalls and drawing mismatches on the assembly floor.',
      scopeOfWork: [
        'Audit of existing ECR/ECO workflow task trees and custom C++ handler dependencies.',
        'Re-engineering closed-loop Change Management (TC010231) holding active shop-floor work orders during pending revisions.',
        'Implementation of automated pre-flight rule gates (EPM-assert-targets-checked-in, PS-check-assembly-status-progression).',
        'Automated background Dispatcher PDF/DXF watermarked rendering on formal release approval.'
      ],
      technicalApproach: 'Replaced hardcoded user assignments with dynamic AMX group/role rules (allmembers:$GROUP::$ROLE) and integrated automated workflow escalation timers.',
      deliverables: [
        'Standardized Workflow Designer Task Tree Templates (ECR, ECO, Deviation)',
        'Automated EPM Handler Configuration & Error Logging Guide',
        'Dispatcher Automated PDF Watermarking Runbook',
        'Engineering Change SOP Operating Manual'
      ],
      validationMethod: 'Simulated 100+ concurrent change orders with automated exception injection; verified zero unreleased drawing leaks to shop-floor Active Workspace tiles.',
      measuredOutcome: 'Target Benchmark: ECO turnaround lead time reduced by 50% (from 22 days to <10 days) and 100% elimination of unmanaged drawing PDFs on the shop floor.',
      relatedService: 'Teamcenter Administration and Support',
      icon: Workflow
    },
    {
      id: 'case-bmide',
      tag: 'Customization Optimization',
      title: 'BMIDE Customization Optimization & Technical Debt Refactoring',
      customerContext: 'Illustrative Scenario: Heavy equipment manufacturer with 12+ years of legacy Teamcenter customizations, 40+ custom C++ ITK server scripts, and slow database queries.',
      technicalChallenge: 'Custom C++ ITK scripts bypassed standard BMIDE data modeling rules, causing server pool manager crashes, blocking software updates, and adding 300% maintenance overhead.',
      scopeOfWork: [
        'Comprehensive audit of all custom C++ ITK handlers, RAC plug-ins, and BMIDE property rules.',
        'Refactoring procedural C++ logic into declarative BMIDE compound properties, naming rules, and XRT stylesheets.',
        'Optimization of POM database qualifiers and addition of targeted indexes on custom attributes.',
        'Migration from deprecated legacy RAC stylesheets to Active Workspace HTML5 XRT definitions.'
      ],
      technicalApproach: 'Enforced the OOTB-First Architecture Rule: retained custom C++ code only for external cryptographic integrations, converting 85% of legacy scripts into standard BMIDE declarative schema.',
      deliverables: [
        'Customization Technical Debt & Upgrade-Risk Register',
        'Refactored BMIDE Project Template & Extension Files',
        'Active Workspace Declarative XRT Stylesheet Package',
        'Automated Deployment Center Packaging Script'
      ],
      validationMethod: 'Parallel regression testing comparing legacy C++ handler outputs against new BMIDE declarative rules; POM query execution time benchmarking.',
      measuredOutcome: 'Target Benchmark: Custom ITK server scripts reduced by 88% (from 42 to <5), pool manager query times reduced by 40%, and zero schema conflicts during Deployment Center updates.',
      relatedService: 'BMIDE and Teamcenter Customization',
      icon: Layers
    },
    {
      id: 'case-upgrade',
      tag: 'Upgrade & Migration',
      title: 'Teamcenter Upgrade Readiness & 4-Environment Cutover Planning',
      customerContext: 'Illustrative Scenario: Discrete manufacturing enterprise operating legacy Teamcenter 11.x Rich Client (RAC) preparing for major migration to Teamcenter 2606 Active Workspace.',
      technicalChallenge: 'End-of-standard-support deadline, incompatible RAC Java plugins, UTF-8 database encoding requirements, and severe management concern over production downtime.',
      scopeOfWork: [
        'Comprehensive upgrade readiness assessment and version compatibility evaluation.',
        'Audit of legacy custom ITK code against target Siemens 2606 API deprecation lists.',
        '4-Environment Upgrade Gate Strategy formulation (Dev -> QA -> UAT -> Production).',
        'Authoring and dry-run testing of a weekend production cutover and rollback runbook.'
      ],
      technicalApproach: 'Utilized Deployment Center 7-step automated lifecycle execution with HashiCorp Vault credential encryption. Executed mock database upgrades on sanitized test clones to verify rollback timing.',
      deliverables: [
        'Teamcenter Upgrade Readiness & Blocker Audit Report',
        '4-Environment Deployment & Validation Strategy Plan',
        'Step-by-Step Weekend Production Cutover & Rollback Runbook (<2hr rollback window)',
        'Post-Upgrade Hypercare Support Plan'
      ],
      validationMethod: 'Two complete dry-run upgrade rehearsals on full production database copies; end-to-end UAT sign-off across 50 business scenarios with zero open severity-1 defects.',
      measuredOutcome: 'Target Benchmark: Production cutover completed within a 12-hour weekend downtime window with zero data loss and seamless user transition to Active Workspace.',
      relatedService: 'Teamcenter Upgrade and Migration',
      icon: RefreshCw
    },
    {
      id: 'case-maturity',
      tag: 'Maturity & Roadmap',
      title: 'Enterprise Teamcenter Maturity Assessment & 12-Month Digital Roadmap',
      customerContext: 'Illustrative Scenario: Multi-site manufacturing enterprise (US, Germany, India) operating fragmented PDM, spreadsheet-based BOMs, and disjointed PLM governance.',
      technicalChallenge: 'Leadership had limited visibility into PLM technical debt, custom code vulnerabilities, or why engineering release cycles lagged despite substantial software investments.',
      scopeOfWork: [
        'Evaluation across 8 core PLM capability domains using the FATEQ 5-Level Maturity Framework.',
        'Stakeholder interviews with Engineering, Manufacturing, Quality, and IT department heads.',
        'Quantitative scoring of baseline maturity vs target industry benchmarks (Baseline Level 2.2 vs Target Level 4.0).',
        'Formulation of a prioritized Technical Risk Register and 12-Month Modernization Roadmap.'
      ],
      technicalApproach: 'Structured a 90-Day Quick-Win Program to demonstrate immediate value (XRT refactoring, mass property audit, OData dashboarding) while establishing long-term architectural stability.',
      deliverables: [
        'Executive Teamcenter PLM Maturity Assessment Report (PDF, 6 Pages)',
        '8-Domain Quantitative Maturity Scorecard & Spider Chart',
        'Prioritized Technical & Business Risk Register (R-01 to R-05)',
        '12-Month Digital Modernization Roadmap with KPI Targets'
      ],
      validationMethod: 'Rigorous architectural review validated against official Teamcenter 2606 technical manuals and Deployment Center standards.',
      measuredOutcome: 'Target Benchmark: Delivered clear executive alignment, identified $380K in inventory cost avoidance, and defined an actionable 4-phase transformation path.',
      relatedService: 'Teamcenter Maturity Assessment and Roadmap',
      pdfDownloadPath: '/documents/FATEQ_Teamcenter_PLM_Maturity_Assessment_and_Improvement_Roadmap.pdf',
      pdfDownloadName: 'FATEQ_Teamcenter_PLM_Maturity_Assessment_and_Improvement_Roadmap.pdf',
      icon: Compass
    }
  ];

  const activeCase = caseStudies.find(c => c.id === selectedCaseId) || caseStudies[0];
  const Icon = activeCase.icon;

  return (
    <section id="case-studies" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-teal-50 text-teal-800 text-xs font-semibold mb-3 border border-teal-200">
            <Cpu className="w-3.5 h-3.5 text-teal-700" />
            <span>Technical Credibility &amp; Case Studies</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1930] tracking-tight font-heading">
            Grounded Solution Architectures &amp; Illustrative Case Studies
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Explore detailed technical playbooks and illustrative engineering scenarios demonstrating how FATEQ Technologies isolates root causes, refactors legacy technical debt, and establishes reliable Teamcenter operations.
          </p>

          <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
            <Shield className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span>
              <strong>Professional Standard: </strong>
              All examples represent illustrative technical scenarios and verified solution playbooks. We protect client confidentiality and do not invent client logos or synthetic testimonials.
            </span>
          </div>
        </div>

        {/* Case Study Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200 pb-4">
          {caseStudies.map((cs) => {
            const isSelected = cs.id === selectedCaseId;
            return (
              <button
                key={cs.id}
                onClick={() => setSelectedCaseId(cs.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#0B1930] text-white shadow-xs'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                <span>{cs.tag}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Case Study Full Template View */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          
          {/* Card Top Banner */}
          <div className="bg-[#0B1930] text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30">
                  {activeCase.tag} · Illustrative Technical Scenario
                </span>
                <span className="text-xs text-slate-400">Related Service: {activeCase.relatedService}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-heading">
                {activeCase.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300">
                {activeCase.customerContext}
              </p>
            </div>

            {activeCase.pdfDownloadPath && (
              <a
                href={activeCase.pdfDownloadPath}
                download={activeCase.pdfDownloadName}
                className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white rounded-xl text-xs font-bold transition-colors whitespace-nowrap self-start sm:self-center cursor-pointer shadow-xs"
              >
                <FileText className="w-4 h-4" />
                <span>Download Full Case Study (PDF)</span>
              </a>
            )}
          </div>

          {/* Grid of Sections: Challenge, Scope, Approach, Deliverables, Validation & Outcome */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 text-xs text-slate-700">
            
            {/* Left Column: Challenge & Approach (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Challenge */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                  <span>Technical &amp; Business Challenge</span>
                </h4>
                <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200 text-slate-800 leading-relaxed text-xs">
                  {activeCase.technicalChallenge}
                </div>
              </div>

              {/* Scope of Work */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Scope of Technical Work
                </h4>
                <ul className="space-y-2">
                  {activeCase.scopeOfWork.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Approach */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Technical Architecture Approach
                </h4>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 leading-relaxed text-slate-700">
                  {activeCase.technicalApproach}
                </div>
              </div>

            </div>

            {/* Right Column: Deliverables, Validation & Measured Outcome (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Deliverables */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Key Deliverables Produced
                </h4>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 font-mono text-[11px] text-slate-800">
                  {activeCase.deliverables.map((del, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">[{i + 1}]</span>
                      <span className="font-sans text-xs">{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Validation Method */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Verification &amp; Testing Methodology
                </h4>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed">
                  {activeCase.validationMethod}
                </div>
              </div>

              {/* Measured Outcome */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Measured Outcome / Performance Target
                </h4>
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-950 text-xs font-medium leading-relaxed">
                  {activeCase.measuredOutcome}
                </div>
              </div>

              {/* Action Box */}
              <div className="pt-2 flex flex-col gap-2">
                {onContactCaseStudy && (
                  <button
                    onClick={() => onContactCaseStudy(activeCase.title)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#0B1930] hover:bg-blue-950 text-white rounded-xl font-bold text-xs transition-colors cursor-pointer"
                  >
                    <span>Discuss Similar Architecture Requirements</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}

                {onOpenAssessment && (
                  <button
                    onClick={onOpenAssessment}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-xl font-semibold text-xs transition-colors cursor-pointer"
                  >
                    <span>Run Interactive Maturity Navigator</span>
                  </button>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
