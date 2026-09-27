import React, { useState } from 'react';
import { 
  Server, 
  ShieldCheck, 
  Database, 
  Layout, 
  Code, 
  GitBranch, 
  Layers, 
  RefreshCw, 
  ArrowUpCircle, 
  LifeBuoy, 
  FileCheck, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { ServiceCategory, ServiceDetail } from '../types';

interface ServicesGridProps {
  onSelectService: (service: ServiceDetail) => void;
  onRequestQuoteForService: (serviceTitle: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  onSelectService,
  onRequestQuoteForService
}) => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'architecture' | 'customization' | 'integration' | 'governance'>('all');

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Server': return Server;
      case 'ShieldCheck': return ShieldCheck;
      case 'Database': return Database;
      case 'Layout': return Layout;
      case 'Code': return Code;
      case 'GitBranch': return GitBranch;
      case 'Layers': return Layers;
      case 'RefreshCw': return RefreshCw;
      case 'ArrowUpCircle': return ArrowUpCircle;
      case 'LifeBuoy': return LifeBuoy;
      case 'FileCheck': return FileCheck;
      default: return Server;
    }
  };

  const filteredServices = servicesData.filter((srv) => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'architecture') return ['implementation', 'administration', 'upgrade'].includes(srv.id);
    if (filterCategory === 'customization') return ['bmide', 'active-workspace', 'itk-soa'].includes(srv.id);
    if (filterCategory === 'integration') return ['workflows', 'integration', 'migration'].includes(srv.id);
    if (filterCategory === 'governance') return ['governance', 'support'].includes(srv.id);
    return true;
  });

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Technical Service Catalog
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1 font-heading">
              Our Teamcenter Technical Services
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Every service is structured around pragmatic engineering delivery: rigorous scoping, BMIDE-first data integrity, modern AWC usability, and zero-downtime production cutovers.
            </p>
          </div>

          {/* Functional filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-lg shadow-2xs self-start md:self-auto">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                filterCategory === 'all' 
                  ? 'bg-blue-600 text-white shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              All 11 Services
            </button>
            <button
              onClick={() => setFilterCategory('architecture')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                filterCategory === 'architecture' 
                  ? 'bg-blue-600 text-white shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Architecture &amp; Admin
            </button>
            <button
              onClick={() => setFilterCategory('customization')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                filterCategory === 'customization' 
                  ? 'bg-blue-600 text-white shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              BMIDE, AWC &amp; ITK
            </button>
            <button
              onClick={() => setFilterCategory('integration')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                filterCategory === 'integration' 
                  ? 'bg-blue-600 text-white shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              CAD, ERP &amp; Migration
            </button>
            <button
              onClick={() => setFilterCategory('governance')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                filterCategory === 'governance' 
                  ? 'bg-blue-600 text-white shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Governance &amp; Support
            </button>
          </div>
        </div>

        {/* 11 Services Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = getServiceIcon(service.iconName);

            return (
              <div
                key={service.id}
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-slate-300 hover:-translate-y-0.5 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
                      style={{ backgroundColor: service.accentColor }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span 
                      className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md"
                      style={{ 
                        backgroundColor: `${service.accentColor}12`,
                        color: service.accentColor 
                      }}
                    >
                      Teamcenter Module
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Highlights list */}
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                    {service.capabilities.slice(0, 2).map((cap, i) => (
                      <div key={i} className="text-xs text-slate-500 flex items-start gap-1.5">
                        <span className="text-blue-500 font-bold">›</span>
                        <span className="line-clamp-1">{cap.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer group-hover:translate-x-0.5"
                  >
                    <span>View Technical Spec</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onRequestQuoteForService(service.title)}
                    className="text-[11px] font-semibold text-slate-600 hover:text-slate-900 px-2 py-1 rounded-md hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    Inquire
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
