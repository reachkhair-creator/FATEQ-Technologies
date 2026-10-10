import React from 'react';
import { 
  Server, 
  Database, 
  Layout, 
  Code, 
  Layers, 
  RefreshCw, 
  ArrowRight 
} from 'lucide-react';
import { ServiceCategory } from '../types';

interface CapabilitiesGridProps {
  onSelectService: (serviceId: ServiceCategory) => void;
}

export const CapabilitiesGrid: React.FC<CapabilitiesGridProps> = ({ onSelectService }) => {
  const capabilities = [
    {
      id: 'implementation' as ServiceCategory,
      title: 'Teamcenter Implementation',
      description: 'Robust 2-tier and 4-tier deployment planning, enterprise server sizing, FMS caching, and production cutover.',
      icon: Server,
      color: '#155EEF', // Blue
      lightBg: 'bg-blue-50 text-blue-600 border-blue-200',
      badge: 'Core Architecture'
    },
    {
      id: 'bmide' as ServiceCategory,
      title: 'BMIDE & Data Modeling',
      description: 'Business object modeling, custom item types, property rules, dynamic LOVs, naming schemes, and GRM relationships.',
      icon: Database,
      color: '#7C3AED', // Violet
      lightBg: 'bg-purple-50 text-purple-600 border-purple-200',
      badge: 'Data Model'
    },
    {
      id: 'active-workspace' as ServiceCategory,
      title: 'Active Workspace (AWC)',
      description: 'Declarative UI views, XML stylesheets, custom commands, responsive tiles, and zero-clutter engineering layouts.',
      icon: Layout,
      color: '#06B6D4', // Cyan
      lightBg: 'bg-cyan-50 text-cyan-600 border-cyan-200',
      badge: 'Web Interface'
    },
    {
      id: 'itk-soa' as ServiceCategory,
      title: 'ITK & SOA Customization',
      description: 'Modern C/C++ server-side rule handlers, action handlers, batch utilities, and high-performance SOA REST endpoints.',
      icon: Code,
      color: '#0F9D8A', // Teal
      lightBg: 'bg-teal-50 text-teal-600 border-teal-200',
      badge: 'Custom Code'
    },
    {
      id: 'integration' as ServiceCategory,
      title: 'CAD / ERP Integration',
      description: 'Data exchange between Teamcenter, multi-CAD tools (NX, Solid Edge, Creo), and ERP systems (SAP, Oracle, Dynamics).',
      icon: Layers,
      color: '#F97316', // Orange
      lightBg: 'bg-orange-50 text-orange-600 border-orange-200',
      badge: 'Enterprise Flow'
    },
    {
      id: 'migration' as ServiceCategory,
      title: 'Upgrade & Migration',
      description: 'Legacy data extraction, sanitization, BMIDE delta reviews, sandbox rehearsals, and zero-data-loss cutover execution.',
      icon: RefreshCw,
      color: '#16A34A', // Green
      lightBg: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      badge: 'Transformation'
    }
  ];

  return (
    <section id="capabilities" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Proven Expertise
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1 font-heading">
            Trusted Technical Capabilities
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            FATEQ Technologies delivers hands-on, practical engineering solutions for Teamcenter PLM environments. Each capability is backed by verified technical execution, clean schema design, and direct founder engagement.
          </p>
        </div>

        {/* 6 Colorful Capability Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs hover:shadow-md hover:-translate-y-0.5 hover:border-slate-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div 
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.lightBg} transition-transform group-hover:scale-105`}
                    >
                      <Icon className="w-6 h-6" style={{ color: item.color }} />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wide px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 border border-slate-200">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onSelectService(item.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer group-hover:translate-x-0.5"
                  >
                    <span>Inspect Technical Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
