import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, ArrowUpRight } from 'lucide-react';
import { FateqLogo } from './FateqLogo';

interface NavbarProps {
  onOpenAssessment: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAssessment, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: 'hero' },
    { label: 'Capabilities', href: 'capabilities' },
    { label: 'Services', href: 'services' },
    { label: 'Architecture', href: 'architecture' },
    { label: 'Industries', href: 'industries' },
    { label: 'GCC Presence', href: 'gcc' },
    { label: 'About', href: 'about' },
    { label: 'Contact', href: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-200 bg-white ${
        isScrolled ? 'border-b border-slate-200 shadow-xs' : 'border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Zone 1: Single text element Brand Zone with Official FATEQ Logo */}
          <a 
            href="#hero" 
            onClick={(e) => { e.preventDefault(); handleLinkClick('hero'); }}
            className="group flex items-center select-none text-left"
            title="FATEQ Technologies — Independent Teamcenter PLM Engineering Services"
          >
            <FateqLogo className="h-10 sm:h-12 w-auto transition-transform group-hover:scale-[1.02]" />
          </a>

          {/* Zone 2: Navigation Links (Text with subtle hover state) */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors cursor-pointer py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: Primary Action Controls */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/971525582129?text=Hello%20Syed,%20I%20would%20like%20to%20discuss%20a%20Teamcenter%20PLM%20requirement%20with%20FATEQ%20Technologies."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors whitespace-nowrap"
              title="Chat with Syed Abdul Hairu on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>+971 52 558 2129</span>
            </a>

            <button
              onClick={onOpenAssessment}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs hover:shadow transition-all whitespace-nowrap cursor-pointer"
            >
              <span>Technical Assessment</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenAssessment}
              className="sm:hidden px-2.5 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-md whitespace-nowrap"
            >
              Assess
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2 mb-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="text-left py-2 px-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-md transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <div className="text-xs text-slate-600 px-3 font-medium">
              Technical Founder: Syed Abdul Hairu
            </div>
            <a
              href="tel:+971525582129"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>Call +971 52 558 2129</span>
            </a>
            <a
              href="https://wa.me/971525582129?text=Hello%20Syed,%20I%20would%20like%20to%20discuss%20a%20Teamcenter%20PLM%20requirement%20with%20FATEQ%20Technologies."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Syed (+971 52 558 2129)</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAssessment();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <span>Launch Technical Assessment Tool</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
