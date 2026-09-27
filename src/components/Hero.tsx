import React, { useState } from 'react';
import { 
  ArrowRight, 
  Layers, 
  Cpu, 
  Workflow, 
  Database, 
  CheckCircle2, 
  Factory, 
  FileText, 
  Boxes, 
  GitBranch, 
  Settings2,
  ChevronRight
} from 'lucide-react';

interface HeroProps {
  onRequestAssessment: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestAssessment, onExploreServices }) => {
  const [activeStage, setActiveStage] = useState<'engineering' | 'plm' | 'erp' | 'manufacturing'>('plm');

  const stages = [
    {
      id: 'engineering' as const,
      label: 'Engineering',
      subtitle: 'CAD & Design Intent',
      color: '#155EEF', // Blue
      borderColor: 'border-blue-500',
      badgeBg: 'bg-blue-50 text-blue-700',
      icon: Cpu,
      items: ['3D CAD (NX, Solid Edge, Creo)', 'Parametric Part Models', 'Drafting & Drawing Revisions', 'Sheet Metal Flat Patterns']
    },
    {
      id: 'plm' as const,
      label: 'Teamcenter PLM',
      subtitle: 'Single Source of Truth',
      color: '#7C3AED', // Violet
      borderColor: 'border-purple-500',
      badgeBg: 'bg-purple-50 text-purple-700',
      icon: Database,
      items: ['BMIDE Data Model & Rules', 'Active Workspace (AWC)', 'EBOM & Variant Hierarchy', 'ITK/SOA Handlers & ECNs']
    },
    {
      id: 'erp' as const,
      label: 'ERP Systems',
      subtitle: 'Operations & Procurement',
      color: '#0F9D8A', // Teal
      borderColor: 'border-teal-500',
      badgeBg: 'bg-teal-50 text-teal-700',
      icon: Layers,
      items: ['SAP / Oracle / Dynamics Sync', 'Reconciled MBOM & Plant Routing', 'Standard Costing & Lead Times', 'Purchase Part Master Records']
    },
    {
      id: 'manufacturing' as const,
      label: 'Manufacturing',
      subtitle: 'Shop Floor Execution',
      color: '#06B6D4', // Cyan
      borderColor: 'border-cyan-500',
      badgeBg: 'bg-cyan-50 text-cyan-700',
      icon: Factory,
      items: ['CNC Machine G-Code & DXF', 'Shop Floor Work Instructions', 'Quality Inspection (PPAP)', 'Assembly Floor Tracking']
    }
  ];

  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-16 md:pb-24 bg-white overflow-hidden border-b border-slate-200">
      {/* Subtle technical engineering grid background (light, clean) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #E2E8F0 1px, transparent 1px),
            linear-gradient(to bottom, #E2E8F0 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Info Header */}
        <div className="max-w-3xl">
          {/* Badge: Independent Teamcenter Technical Services */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-md bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 tracking-wide">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>Independent Teamcenter Technical Services</span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-500">GCC & Global</span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance font-heading">
            Teamcenter PLM Engineering That Works With Your Business
          </h1>

          {/* Supporting Text */}
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            FATEQ Technologies provides independent Teamcenter technical services across PLM architecture, BMIDE, Active Workspace, ITK/SOA customization, integrations, upgrades, migration and administration.
          </p>

          {/* Direct CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <button
              onClick={onRequestAssessment}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer"
            >
              <span>Request a Technical Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreServices}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors cursor-pointer"
            >
              <span>Explore Our Services</span>
            </button>
          </div>

          {/* Technical contact kicker */}
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 font-medium">
            <span>Direct Technical Access:</span>
            <span className="text-slate-900 font-semibold">Syed Abdul Hairu</span>
            <span className="text-slate-300">|</span>
            <a 
              href="tel:+971525582129" 
              className="text-blue-600 hover:underline inline-flex items-center gap-1 font-mono"
            >
              +971 52 558 2129
            </a>
            <span className="text-slate-300">|</span>
            <span className="text-emerald-700 font-medium">Available via WhatsApp</span>
          </div>
        </div>

        {/* Section 5 Requirement: Clean Technical Illustration Showing:
            Engineering → Teamcenter PLM → ERP → Manufacturing
            Connected nodes, engineering data cards, BOM structures, workflows, and document icons.
            Accents: Blue, Teal, Violet, Cyan on a white/light background. No stock photograph. */}
        <div className="mt-12 lg:mt-16 bg-white border border-slate-200 rounded-xl p-5 sm:p-8 shadow-xs">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Enterprise Digital Thread</span>
              <h2 className="text-lg font-bold text-slate-900 mt-0.5">End-to-End Engineering Data Pipeline</h2>
              <p className="text-xs text-slate-600 mt-1">
                How FATEQ Technologies orchestrates unbroken revision, BOM, and release integrity from CAD model to shop floor.
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-xs font-medium text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Interactive: Click any stage to inspect payload</span>
            </div>
          </div>

          {/* Connected Flow Architecture Pipeline */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            
            {stages.map((stage, idx) => {
              const IconComponent = stage.icon;
              const isActive = activeStage === stage.id;

              return (
                <div key={stage.id} className="relative flex flex-col">
                  {/* Connector Arrow (Desktop only) */}
                  {idx < stages.length - 1 && (
                    <div className="hidden md:flex absolute -right-3 top-12 z-10 w-6 h-6 items-center justify-center text-slate-400">
                      <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                    </div>
                  )}

                  {/* Stage Card */}
                  <button
                    onClick={() => setActiveStage(stage.id)}
                    className={`w-full text-left p-4 sm:p-5 rounded-lg border transition-all cursor-pointer ${
                      isActive 
                        ? `bg-slate-50/80 ${stage.borderColor} shadow-xs ring-1 ${stage.borderColor.replace('border-', 'ring-')}`
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div 
                        className="w-9 h-9 rounded-lg flex items-center justify-center text-white"
                        style={{ backgroundColor: stage.color }}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-md ${stage.badgeBg}`}>
                        Stage 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="mt-3 text-base font-bold text-slate-900">
                      {stage.label}
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {stage.subtitle}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-200/80 space-y-1.5">
                      {stage.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start gap-1.5 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-slate-600 shrink-0 mt-0.5" />
                          <span className="leading-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Interactive Inspection Drawer for the Active Stage */}
          <div className="mt-6 p-4 sm:p-6 bg-slate-50 border border-slate-200 rounded-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-semibold px-2 py-1 rounded-md bg-white border border-slate-200 text-slate-700">
                  Active Thread Focus: {stages.find(s => s.id === activeStage)?.label}
                </span>
                <span className="text-xs text-slate-600">
                  Data Governance &amp; Configuration Touchpoints
                </span>
              </div>
              <span className="text-xs font-medium text-slate-600 font-mono">
                Siemens Teamcenter Baseline Standards
              </span>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="bg-white p-3.5 rounded-lg border border-slate-200">
                <div className="flex items-center gap-1.5 font-semibold text-slate-900 mb-1">
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span>Managed Data Objects</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {activeStage === 'engineering' && 'Native UGMASTER, UGSheet, STEP AP242, JT lightweight geometry, Drawing PDFs, and FEA simulation datasets.'}
                  {activeStage === 'plm' && 'Item Revisions, Baseline EBOM structures, Change Notices (ECN), BMIDE Compound Properties, and Form Datasets.'}
                  {activeStage === 'erp' && 'Material Masters (FERT, HALB, ROH), Reconciled MBOMs, Plant Storage Locations, and Routing Operations.'}
                  {activeStage === 'manufacturing' && 'Shop Floor Work Instructions, Machine G-Code Toolpaths, Quality Inspection Checklists, and As-Built Serial Records.'}
                </p>
              </div>

              <div className="bg-white p-3.5 rounded-lg border border-slate-200">
                <div className="flex items-center gap-1.5 font-semibold text-slate-900 mb-1">
                  <Workflow className="w-4 h-4 text-purple-600" />
                  <span>Validation &amp; Rules</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {activeStage === 'engineering' && 'Deep Copy Rules (DCR) dictate whether CAD models clone or maintain reference on revision; naming rules auto-generate part IDs.'}
                  {activeStage === 'plm' && 'ITK workflow rule handlers prevent stage advancement until peer sign-offs, drawing watermarking, and JT files are verified.'}
                  {activeStage === 'erp' && 'Payload reconciliation catches unit-of-measure (UOM) mismatches and missing procurement lead-time parameters.'}
                  {activeStage === 'manufacturing' && 'Engineering change order effectivity dates gate when shop floor operators can pull drawings into production.'}
                </p>
              </div>

              <div className="bg-white p-3.5 rounded-lg border border-slate-200">
                <div className="flex items-center gap-1.5 font-semibold text-slate-900 mb-1">
                  <Settings2 className="w-4 h-4 text-teal-600" />
                  <span>FATEQ Technical Service</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {activeStage === 'engineering' && 'Multi-CAD Teamcenter client integration, automated attribute sync, and FMS caching for fast assembly loads.'}
                  {activeStage === 'plm' && 'BMIDE data model extension, custom AWC stylesheets, ITK server extensions, and automated Dispatcher translation.'}
                  {activeStage === 'erp' && 'T4S / T4EA / REST API middleware development, bidirectional item sync, and BOM discrepancy reconciliation.'}
                  {activeStage === 'manufacturing' && 'Active Workspace shop-floor portal setup, automated DXF flat-pattern extraction, and change effectivity governance.'}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
