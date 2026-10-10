import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Layers, 
  LayoutGrid, 
  Workflow, 
  RefreshCw, 
  Compass, 
  ChevronRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { ServiceDetail } from '../types';

interface ServicesGridProps {
  onSelectService: (service: ServiceDetail) => void;
  onRequestQuoteForService: (serviceTitle: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  onSelectService,
  onRequestQuoteForService
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck': return ShieldCheck;
      case 'Layers': return Layers;
      case 'LayoutGrid': return LayoutGrid;
      case 'Workflow': return Workflow;
      case 'RefreshCw': return RefreshCw;
      case 'Compass': return Compass;
      default: return ShieldCheck;
    }
  };

  const filteredServices = servicesData.filter((srv) => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'admin') return srv.id === 'administration';
    if (filterCategory === 'customization') return srv.id === 'bmide' || srv.id === 'active-workspace';
    if (filterCategory === 'integration') return srv.id === 'integration';
    if (filterCategory === 'lifecycle') return srv.id === 'upgrade' || srv.id === 'maturity-assessment';
    return true;
  });

  return (
    <section id="services" className="py-16 md:py-24 bg-[#F4F7FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
              Technical Service Offerings
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1930] tracking-tight mt-1 font-heading">
              Specialist Teamcenter PLM Engineering Services
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Every service is structured around pragmatic engineering delivery: rigorous scoping, BMIDE-first data integrity, modern Active Workspace usability, and zero-downtime production cutovers.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-xl shadow-2xs self-start md:self-auto">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filterCategory === 'all' 
                  ? 'bg-[#1769AA] text-white shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              All 6 Services
            </button>
            <button
              onClick={() => setFilterCategory('admin')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filterCategory === 'admin' 
                  ? 'bg-[#1769AA] text-white shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Admin &amp; Support
            </button>
            <button
              onClick={() => setFilterCategory('customization')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filterCategory === 'customization' 
                  ? 'bg-[#1769AA] text-white shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              BMIDE &amp; AWC
            </button>
            <button
              onClick={() => setFilterCategory('integration')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filterCategory === 'integration' 
                  ? 'bg-[#1769AA] text-white shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              CAD &amp; ERP Sync
            </button>
            <button
              onClick={() => setFilterCategory('lifecycle')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filterCategory === 'lifecycle' 
                  ? 'bg-[#1769AA] text-white shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Upgrades &amp; Roadmaps
            </button>
          </div>
        </div>

        {/* 6 Core Services Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = getServiceIcon(service.iconName);

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                      style={{ backgroundColor: service.accentColor }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span 
                      className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md"
                      style={{ 
                        backgroundColor: `${service.accentColor}12`,
                        color: service.accentColor 
                      }}
                    >
                      Teamcenter Service
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-[#0B1930] group-hover:text-[#1769AA] transition-colors font-heading">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Challenge Callout */}
                  <div className="mt-3.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 leading-relaxed">
                    <strong className="text-slate-800 block text-[11px] uppercase tracking-wider mb-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 text-amber-500" />
                      <span>Challenge Solved:</span>
                    </strong>
                    <span className="line-clamp-2">{service.challenge}</span>
                  </div>

                  {/* Highlights list */}
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                    {service.capabilities.slice(0, 3).map((cap, i) => (
                      <div key={i} className="text-xs text-slate-600 flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{cap.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#1769AA] hover:text-[#0B1930] transition-colors cursor-pointer group-hover:translate-x-0.5"
                  >
                    <span>View Technical Scope</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onRequestQuoteForService(service.title)}
                    className="text-xs font-bold text-slate-700 hover:text-white px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-[#1769AA] hover:border-[#1769AA] transition-colors cursor-pointer"
                  >
                    Discuss Scope
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
