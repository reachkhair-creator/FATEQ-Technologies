import React, { useState } from 'react';
import { 
  Users, 
  Monitor, 
  Cpu, 
  Network, 
  HardDrive, 
  Info, 
  CheckCircle2, 
  ArrowDown, 
  SlidersHorizontal 
} from 'lucide-react';

export const ArchitectureDiagram: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<number>(2); // Default to Application Layer

  const layers = [
    {
      id: 0,
      name: 'Engineering Users',
      category: 'User Tier',
      icon: Users,
      accentColor: '#155EEF', // Blue
      lightBg: 'bg-blue-50/50 border-blue-200',
      description: 'Distributed design teams, project engineers, shopfloor planners, and quality managers accessing PLM.',
      nodes: [
        { title: 'CAD Designers', detail: 'NX, Solid Edge, CATIA & Creo Workstations' },
        { title: 'Release Engineers', detail: 'BOM Reconciliation & Change Sign-Offs' },
        { title: 'Procurement Leads', detail: 'Part Standardization & Cost Audits' },
        { title: 'Shopfloor Foremen', detail: 'Drawing Viewing & Flat Pattern Extraction' }
      ],
      protocols: 'HTTPS / WSS / Client TLS / SSO (SAML 2.0 / OAuth)',
      architectNote: 'Supports high-concurrency client sessions with minimal latency via regional web tier routing.'
    },
    {
      id: 1,
      name: 'Active Workspace & Teamcenter Clients',
      category: 'Presentation Tier',
      icon: Monitor,
      accentColor: '#06B6D4', // Cyan
      lightBg: 'bg-cyan-50/50 border-cyan-200',
      description: 'Zero-install responsive web client (AWC), Rich Application Client (RAC), and embedded CAD authoring connectors.',
      nodes: [
        { title: 'Active Workspace (AWC)', detail: 'Declarative JSON UI, Solr Search, Visual Tables' },
        { title: 'Rich Client (RAC)', detail: 'Administrative Configuration & BMIDE Deployment' },
        { title: 'Embedded CAD Connectors', detail: 'Direct check-in/out inside CAD toolbars' },
        { title: 'FMS Client Cache (FCC)', detail: 'Local caching of JT and 3D assembly models' }
      ],
      protocols: 'REST / Declarative ViewModels / IIOP / HTTP Web Tier',
      architectNote: 'AWC 6.x / 2312 / 2406 microservice architecture with declarative summary stylesheets.'
    },
    {
      id: 2,
      name: 'Teamcenter Application Layer',
      category: 'Business Logic Tier',
      icon: Cpu,
      accentColor: '#7C3AED', // Violet
      lightBg: 'bg-purple-50/50 border-purple-200',
      description: 'The core business rules engine: BMIDE data model, ITK server extensions, SOA endpoints, and workflow engine.',
      nodes: [
        { title: 'BMIDE Schema & Rules', detail: 'Custom Subtypes, LOVs, Naming Rules, DCR' },
        { title: 'ITK Server Extensions', detail: 'Compiled C++ Rule & Action Handlers' },
        { title: 'SOA Service Tier', detail: 'Stateless Service-Oriented APIs (REST/JSON)' },
        { title: 'Workflow & Dispatcher', detail: 'CMII Change Management, Auto-PDF & STEP' }
      ],
      protocols: 'Enterprise Server Pools / Dispatcher Service / FMS Server Cache (FSC)',
      architectNote: 'Server pool managers dynamically scale worker processes based on peak concurrent engineering load.'
    },
    {
      id: 3,
      name: 'Integration Layer',
      category: 'Enterprise Middleware Tier',
      icon: Network,
      accentColor: '#0F9D8A', // Teal
      lightBg: 'bg-teal-50/50 border-teal-200',
      description: 'Bi-directional bridges ensuring automated data exchange between Teamcenter, multi-CAD, and ERP systems.',
      nodes: [
        { title: 'Multi-CAD Translators', detail: 'NX, Solid Edge, STEP AP242, JT Exporters' },
        { title: 'ERP Connectors (SAP / Oracle)', detail: 'Bi-Directional Part Master & MBOM Push' },
        { title: 'MES / Shop Floor Systems', detail: 'Work Instructions, Toolpath Routing' },
        { title: 'Dead-Letter Middleware', detail: 'Resilient Queueing & Error Reconciliation' }
      ],
      protocols: 'OData / REST APIs / RFC IDocs / Webhooks / Message Queues',
      architectNote: 'Automated release triggers prevent out-of-sequence ERP material bookings.'
    },
    {
      id: 4,
      name: 'Enterprise Data Layer',
      category: 'Persistence Tier',
      icon: HardDrive,
      accentColor: '#F97316', // Orange
      lightBg: 'bg-orange-50/50 border-orange-200',
      description: 'High-availability relational database, binary storage volumes (FMS), metadata tables, and audit logs.',
      nodes: [
        { title: 'Relational PLM Database', detail: 'Oracle DB / Microsoft SQL Server Schemas' },
        { title: 'FMS Storage Volumes', detail: 'Encrypted Binary CAD Data & Revisions' },
        { title: 'Solr / Elasticsearch Indexes', detail: 'Real-time Full-Text Search Indices' },
        { title: 'Compliance & Audit Vault', detail: 'Traceable Revision Histories & Sign-Offs' }
      ],
      protocols: 'JDBC / SQL Net / SAN/NAS Volume Protocol / FSC Binary Streaming',
      architectNote: 'Optimized table indexing, transaction journaling, and automated hot volume backup replication.'
    }
  ];

  const currentLayer = layers[selectedLayer];

  return (
    <section id="architecture" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-600">
            System Topology
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1 font-heading">
            Technical Architecture Visual
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            A clean multi-tier model illustrating how FATEQ Technologies architecturally positions Teamcenter as the single source of truth across client, logic, integration, and persistence layers.
          </p>
        </div>

        {/* Interactive Architecture Canvas */}
        <div className="mt-10 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
          
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Left: 5 Connected Tier Blocks */}
            <div className="w-full lg:w-7/12 space-y-3 relative">
              {layers.map((layer, idx) => {
                const Icon = layer.icon;
                const isSelected = selectedLayer === layer.id;

                return (
                  <div key={layer.id} className="relative">
                    <button
                      onClick={() => setSelectedLayer(layer.id)}
                      className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected 
                          ? 'bg-white border-slate-400 shadow-md ring-1 ring-slate-300' 
                          : 'bg-white/90 border-slate-200 hover:border-slate-300 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center text-white shrink-0 shadow-2xs"
                          style={{ backgroundColor: layer.accentColor }}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-mono font-semibold uppercase text-slate-600 tracking-wider">
                              {layer.category}
                            </span>
                            <span className="text-slate-300 text-xs">·</span>
                            <span className="text-[11px] text-slate-600 font-mono">
                              Tier 0{idx + 1}
                            </span>
                          </div>
                          <h3 className="text-base font-bold text-slate-900 leading-tight">
                            {layer.name}
                          </h3>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                        <span className="hidden sm:inline">Inspect</span>
                        <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-blue-600 animate-ping' : 'bg-slate-300'}`}></span>
                      </div>
                    </button>

                    {/* Connecting downward thin line */}
                    {idx < layers.length - 1 && (
                      <div className="flex justify-center my-1">
                        <div className="h-3 w-0.5 bg-slate-300"></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right: Detailed Deep-Dive Panel for Selected Layer */}
            <div className="w-full lg:w-5/12 bg-white rounded-xl border border-slate-200 p-6 shadow-xs sticky top-24">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <span 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: currentLayer.accentColor }}
                  />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600">
                    {currentLayer.category} Specification
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-600 font-semibold">
                  Layer 0{currentLayer.id + 1} of 05
                </span>
              </div>

              <h4 className="mt-4 text-xl font-bold text-slate-900">
                {currentLayer.name}
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {currentLayer.description}
              </p>

              {/* Sub-components / Modules */}
              <div className="mt-5 space-y-2">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                  Managed Subsystems &amp; Nodes:
                </span>
                {currentLayer.nodes.map((node, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex flex-col text-xs">
                    <span className="font-bold text-slate-900">{node.title}</span>
                    <span className="text-slate-600 mt-0.5">{node.detail}</span>
                  </div>
                ))}
              </div>

              {/* Protocols & Architect Note */}
              <div className="mt-5 pt-4 border-t border-slate-100 space-y-3">
                <div className="text-xs">
                  <span className="font-bold text-slate-900 block font-mono">Communication / Protocol:</span>
                  <span className="text-slate-600 font-mono text-[11px] bg-slate-100 px-2 py-1 rounded-md block mt-1">
                    {currentLayer.protocols}
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-blue-50/60 border border-blue-100 text-xs text-slate-700 flex items-start gap-2">
                  <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <p className="leading-snug">
                    <strong className="text-blue-900">FATEQ Architecture Rule: </strong>
                    {currentLayer.architectNote}
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
