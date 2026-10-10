import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EngineeringProblems } from './components/EngineeringProblems';
import { ServicesGrid } from './components/ServicesGrid';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { CommercialOffers } from './components/CommercialOffers';
import { CapabilitiesGrid } from './components/CapabilitiesGrid';
import { ArchitectureDiagram } from './components/ArchitectureDiagram';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { EngagementProcess } from './components/EngagementProcess';
import { WhyFateq } from './components/WhyFateq';
import { PortfolioSection } from './components/PortfolioSection';
import { ConsultingCapabilityEvidence } from './components/ConsultingCapabilityEvidence';
import { IndustriesSection } from './components/IndustriesSection';
import { GccSection } from './components/GccSection';
import { AboutSection } from './components/AboutSection';
import { TeamcenterMaturityNavigator } from './components/TeamcenterMaturityNavigator';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { servicesData } from './data/servicesData';
import { ServiceCategory, ServiceDetail } from './types';
import { X, Sparkles, Activity } from 'lucide-react';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [showAssessmentModal, setShowAssessmentModal] = useState<boolean>(false);
  const [contactInitialService, setContactInitialService] = useState<string>('');
  const [contactInitialMessage, setContactInitialMessage] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceById = (serviceId: ServiceCategory) => {
    const srv = servicesData.find(s => s.id === serviceId);
    if (srv) {
      setSelectedService(srv);
    }
  };

  const handleSelectServiceForContact = (serviceTitle: string) => {
    setContactInitialService(serviceTitle);
    scrollToSection('contact');
  };

  const handleContactProblem = (problemTitle: string) => {
    setContactInitialMessage(`Inquiry regarding remediation for engineering challenge: "${problemTitle}".`);
    setContactInitialService('Teamcenter Administration and Support');
    scrollToSection('contact');
  };

  const handleSelectOffer = (offerName: string, defaultMessage: string) => {
    setContactInitialService(offerName);
    setContactInitialMessage(defaultMessage);
    scrollToSection('contact');
  };

  const handleCaseStudyContact = (caseTitle: string) => {
    setContactInitialMessage(`Inquiry regarding technical architecture and methodology demonstrated in: "${caseTitle}".`);
    setContactInitialService('PLM, CAD, and ERP Integration');
    scrollToSection('contact');
  };

  const handleContactIndustry = (industryName: string) => {
    setContactInitialMessage(`Inquiry regarding Teamcenter architecture and PLM best practices for ${industryName}.`);
    scrollToSection('contact');
  };

  const handleContactGcc = (country: string) => {
    setContactInitialMessage(`Inquiry regarding Teamcenter technical consulting and engineering support for our operations in ${country}.`);
    scrollToSection('contact');
  };

  const handlePortfolioContact = (message?: string, service?: string) => {
    if (message) setContactInitialMessage(message);
    if (service) setContactInitialService(service);
    scrollToSection('contact');
  };

  const handleAssessmentComplete = (summary: string) => {
    setShowAssessmentModal(false);
    setContactInitialMessage(summary);
    setContactInitialService('Teamcenter Maturity Assessment and Roadmap');
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* 1. Global Navigation Bar */}
      <Navbar 
        onOpenAssessment={() => setShowAssessmentModal(true)} 
        onNavigate={scrollToSection} 
      />

      <main className="flex-1">
        
        {/* Section 1: Professional Hero and CTA */}
        <Hero 
          onRequestAssessment={() => scrollToSection('contact')} 
          onExploreServices={() => scrollToSection('services')} 
          onViewPortfolio={() => scrollToSection('resources')}
        />

        {/* Section 2: Common Teamcenter Challenges */}
        <EngineeringProblems 
          onContactProblem={handleContactProblem} 
        />

        {/* Section 3: Core Services Grid */}
        <ServicesGrid 
          onSelectService={(srv) => setSelectedService(srv)}
          onRequestQuoteForService={handleSelectServiceForContact}
        />

        {/* Section 4: Solutions and Commercial Outcomes (Offers A, B, C) */}
        <CommercialOffers 
          onSelectOffer={handleSelectOffer}
        />

        {/* Section 5: Technical Expertise and Capabilities */}
        <CapabilitiesGrid 
          onSelectService={handleSelectServiceById} 
        />

        {/* Technical Architecture Flow Visual */}
        <ArchitectureDiagram />

        {/* Section 6: Case Studies & Illustrative Examples */}
        <CaseStudiesSection 
          onContactCaseStudy={handleCaseStudyContact}
          onOpenAssessment={() => setShowAssessmentModal(true)}
        />

        {/* Section 7: 5-Step Engagement Process */}
        <EngagementProcess 
          onStartEngagement={() => {
            setContactInitialMessage('Requesting preliminary technical discovery call for Teamcenter scoping.');
            scrollToSection('contact');
          }}
        />

        {/* Section 8: Why Work with FATEQ Technologies */}
        <WhyFateq 
          onContact={() => scrollToSection('contact')}
          onRequestAssessment={() => setShowAssessmentModal(true)}
        />

        {/* Section 9: Technical Resources and Downloads (Library & Registry) */}
        <PortfolioSection 
          onRequestAssessment={() => setShowAssessmentModal(true)}
          onContactForm={handlePortfolioContact}
        />

        {/* Business Readiness: Consulting Capability Evidence */}
        <ConsultingCapabilityEvidence 
          onSelectCategory={(catId) => {
            scrollToSection('resources');
          }}
          onRequestAssessment={() => setShowAssessmentModal(true)}
        />

        {/* Industries & GCC Geographic Domain */}
        <IndustriesSection 
          onContactIndustry={handleContactIndustry} 
        />
        <GccSection 
          onContactGcc={handleContactGcc} 
        />

        {/* About FATEQ Technologies (Founder-Led Practice) */}
        <AboutSection 
          onOpenAssessment={() => setShowAssessmentModal(true)}
          onContactFounder={() => scrollToSection('contact')}
        />

        {/* Interactive Tool: Teamcenter Maturity Navigator V3 */}
        <section id="assessment" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-100 text-blue-800 text-xs font-mono font-semibold mb-2">
                  <Activity className="w-3.5 h-3.5 text-blue-600" />
                  <span>Interactive Technical Assessment Tool</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1930] tracking-tight font-heading">
                  Teamcenter Maturity Navigator V3
                </h2>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Ingest, parse, score, and remediate Teamcenter syslogs, BMIDE data models, site preferences, and workflows across 6 weighted architectural pillars — featuring the End-to-End Digital Thread Roadmap.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowAssessmentModal(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#1769AA] hover:bg-[#0B1930] rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Open Full-Screen Navigator</span>
                </button>
              </div>
            </div>

            {/* Embedded Live Navigator */}
            <TeamcenterMaturityNavigator 
              onSendToContact={handleAssessmentComplete}
            />
          </div>
        </section>

        {/* Section 10: Frequently Asked Questions */}
        <FaqSection 
          onContact={() => scrollToSection('contact')}
        />

        {/* Section 11: Contact and Lead Generation Form */}
        <ContactSection 
          initialService={contactInitialService}
          initialMessage={contactInitialMessage}
          onRequestAssessment={() => setShowAssessmentModal(true)}
        />

      </main>

      {/* Section 12: Professional Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Full Technical Service Specification Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectServiceForContact={handleSelectServiceForContact}
      />

      {/* Full-Screen Teamcenter Maturity Navigator Modal */}
      {showAssessmentModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-[1720px] my-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowAssessmentModal(false)}
              className="absolute right-4 top-3 z-50 p-2 text-slate-400 hover:text-slate-800 bg-white/90 hover:bg-white rounded-lg shadow-sm border border-slate-200 transition-colors"
              aria-label="Close Assessment Modal"
            >
              <X className="w-5 h-5" />
            </button>
            <TeamcenterMaturityNavigator 
              onSendToContact={handleAssessmentComplete} 
              onClose={() => setShowAssessmentModal(false)}
            />
          </div>
        </div>
      )}

    </div>
  );
}
