import React from 'react';
import { Phone, MessageSquare, Shield, ArrowUp } from 'lucide-react';
import { FateqLogo } from './FateqLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: 'hero' },
    { label: 'About', href: 'about' },
    { label: 'Services', href: 'services' },
    { label: 'Architecture', href: 'architecture' },
    { label: 'Industries', href: 'industries' },
    { label: 'GCC Presence', href: 'gcc' },
    { label: 'Contact', href: 'contact' },
  ];

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-200">
          
          {/* Brand & Identity Column */}
          <div className="md:col-span-5 space-y-4">
            <FateqLogo className="h-11 w-auto" />

            <p className="text-xs text-slate-500 leading-relaxed max-w-sm pt-1">
              Engineering-focused technical consultancy specializing in BMIDE data modeling, Active Workspace declarative interfaces, ITK/SOA extensions, and CAD/ERP integrations for GCC manufacturing organizations.
            </p>

            <div className="pt-2 space-y-1">
              <div className="text-slate-900 font-semibold text-xs">
                Technical Contact: Syed Abdul Hairu
              </div>
              <div className="flex items-center gap-4 text-xs font-mono">
                <a 
                  href="tel:+971525582129" 
                  className="text-blue-600 hover:underline flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>+971 52 558 2129</span>
                </a>
                <span className="text-slate-300">|</span>
                <a 
                  href="https://wa.me/971525582129?text=Hello%20Syed,%20I%20would%20like%20to%20discuss%20a%20Teamcenter%20PLM%20requirement%20with%20FATEQ%20Technologies."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 hover:underline flex items-center gap-1 font-sans"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Available</span>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block font-heading">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => onNavigate(link.href)}
                  className="text-left text-slate-600 hover:text-blue-600 py-1 transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-2 text-[11px] text-slate-400">
              Coverage: UAE · Saudi Arabia · Qatar · Oman · Kuwait · Bahrain
            </div>
          </div>

          {/* Technical Scope Highlights */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block font-heading">
              Core Capabilities
            </span>
            <ul className="space-y-1 text-slate-500 text-[11px]">
              <li>• BMIDE Schema &amp; Deep Copy Rules</li>
              <li>• Active Workspace Declarative UI</li>
              <li>• ITK Handlers &amp; SOA REST Services</li>
              <li>• CAD &amp; ERP (SAP/Oracle) Bridges</li>
              <li>• Teamcenter Upgrades &amp; Migration</li>
              <li>• CMII Change Workflows (ECN/ECO)</li>
            </ul>
          </div>

        </div>

        {/* Section 17 Legal Notice & Mandatory Siemens Trademark Disclaimer */}
        <div className="pt-8 space-y-4">
          <div className="p-4 rounded-xl bg-white border border-slate-200 text-[11px] leading-relaxed text-slate-500 flex items-start gap-2.5">
            <Shield className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <p>
              <strong className="text-slate-700">Legal Notice: </strong>
              FATEQ Technologies is an independent technical services provider. Siemens, Teamcenter, NX, Solid Edge, and Tecnomatix are trademarks of Siemens Industry Software Inc. FATEQ Technologies is not owned, operated, authorized, endorsed, or affiliated with Siemens unless explicitly stated otherwise.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 pt-2">
            <div>
              © 2026 FATEQ Technologies. All rights reserved.
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/dist-fateq-technologies.zip"
                download="dist-fateq-technologies.zip"
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-slate-100 text-blue-600 hover:text-blue-800 border border-slate-300 rounded-md font-semibold text-[11px] shadow-2xs transition-colors"
                title="Download the complete production-ready website files in a ZIP archive"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Download Hosting ZIP (Production Build)</span>
              </a>
              <span>·</span>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
